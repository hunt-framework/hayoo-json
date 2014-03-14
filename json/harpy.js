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
        "word": "harpy"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePredefined call stubs for run-time generated code.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Harpy.Call",
          "name": "Call",
          "package": "harpy",
          "source": "src/Harpy-Call.html",
          "type": "module"
        },
        "index": {
          "description": "Predefined call stubs for run-time generated code",
          "hierarchy": "Harpy Call",
          "module": "Harpy.Call",
          "name": "Call",
          "package": "harpy",
          "partial": "Call",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-Call.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.Call",
          "name": "callAsVoid",
          "package": "harpy",
          "signature": "CodeGen e t ()",
          "source": "src/Harpy-Call.html#callAsVoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy Call",
          "module": "Harpy.Call",
          "name": "callAsVoid",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "partial": "As Void",
          "signature": "CodeGen e t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-Call.html#v:callAsVoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.Call",
          "name": "conv",
          "package": "harpy",
          "signature": "FunPtr () -\u003e IO ()",
          "source": "src/Harpy-Call.html#conv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy Call",
          "module": "Harpy.Call",
          "name": "conv",
          "normalized": "FunPtr()-\u003eIO()",
          "package": "harpy",
          "signature": "FunPtr()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-Call.html#v:conv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonad for generating x86 machine code at runtime.\n\u003c/p\u003e\u003cp\u003eThis is a combined reader-state-exception monad which handles all\n the details of handling code buffers, emitting binary data,\n relocation etc.\n\u003c/p\u003e\u003cp\u003eAll the code generation functions in module \u003ca\u003eHarpy.X86CodeGen\u003c/a\u003e live\n in this monad and use its error reporting facilities as well as the\n internal state maintained by the monad.  \n\u003c/p\u003e\u003cp\u003eThe library user can pass a user environment and user state through\n the monad.  This state is independent from the internal state and\n may be used by higher-level code generation libraries to maintain\n their own state across code generation operations.\n --------------------------------------------------------------------------\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "CodeGenMonad",
          "package": "harpy",
          "source": "src/Harpy-CodeGenMonad.html",
          "type": "module"
        },
        "index": {
          "description": "Monad for generating x86 machine code at runtime This is combined reader-state-exception monad which handles all the details of handling code buffers emitting binary data relocation etc All the code generation functions in module Harpy.X86CodeGen live in this monad and use its error reporting facilities as well as the internal state maintained by the monad The library user can pass user environment and user state through the monad This state is independent from the internal state and may be used by higher-level code generation libraries to maintain their own state across code generation operations",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "CodeGenMonad",
          "package": "harpy",
          "partial": "Code Gen Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe code generation monad, a combined reader-state-exception\n monad.\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "CodeGen",
          "package": "harpy",
          "source": "src/Harpy-CodeGenMonad.html#CodeGen",
          "type": "data"
        },
        "index": {
          "description": "The code generation monad combined reader-state-exception monad",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "CodeGen",
          "package": "harpy",
          "partial": "Code Gen",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#t:CodeGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration of the code generator.  There are currently two\n configuration options.  The first is the number fo bytes to use for\n allocating code buffers (the first as well as additional buffers\n created in calls to \u003ccode\u003e\u003ca\u003eensureBufferSize\u003c/a\u003e\u003c/code\u003e.  The second allows to pass\n in a pre-allocated code buffer and its size.  When this option is\n used, Harpy does not perform any code buffer resizing (calls to\n \u003ccode\u003e\u003ca\u003eensureBufferSize\u003c/a\u003e\u003c/code\u003e will be equivalent to calls to\n \u003ccode\u003e\u003ca\u003echeckBufferSize\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "CodeGenConfig",
          "package": "harpy",
          "source": "src/Harpy-CodeGenMonad.html#CodeGenConfig",
          "type": "data"
        },
        "index": {
          "description": "Configuration of the code generator There are currently two configuration options The first is the number fo bytes to use for allocating code buffers the first as well as additional buffers created in calls to ensureBufferSize The second allows to pass in pre-allocated code buffer and its size When this option is used Harpy does not perform any code buffer resizing calls to ensureBufferSize will be equivalent to calls to checkBufferSize",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "CodeGenConfig",
          "package": "harpy",
          "partial": "Code Gen Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#t:CodeGenConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error message produced by a code generation operation.\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "ErrMsg",
          "package": "harpy",
          "source": "src/Harpy-CodeGenMonad.html#ErrMsg",
          "type": "type"
        },
        "index": {
          "description": "An error message produced by code generation operation",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "ErrMsg",
          "package": "harpy",
          "partial": "Err Msg",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#t:ErrMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKind of a fixup entry.  When a label is emitted with\n \u003ccode\u003e\u003ca\u003edefineLabel\u003c/a\u003e\u003c/code\u003e, all prior references to this label must be fixed\n up.  This data type tells how to perform the fixup operation.\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "FixupKind",
          "package": "harpy",
          "source": "src/Harpy-CodeGenMonad.html#FixupKind",
          "type": "data"
        },
        "index": {
          "description": "Kind of fixup entry When label is emitted with defineLabel all prior references to this label must be fixed up This data type tells how to perform the fixup operation",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "FixupKind",
          "package": "harpy",
          "partial": "Fixup Kind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#t:FixupKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "Label",
          "package": "harpy",
          "source": "src/Harpy-CodeGenMonad.html#Label",
          "type": "data"
        },
        "index": {
          "description": "Label",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "Label",
          "package": "harpy",
          "partial": "Label",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#t:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelocation entry\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "Reloc",
          "package": "harpy",
          "source": "src/Harpy-CodeGenMonad.html#Reloc",
          "type": "data"
        },
        "index": {
          "description": "Relocation entry",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "Reloc",
          "package": "harpy",
          "partial": "Reloc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#t:Reloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKind of relocation, for example PC-relative\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "RelocKind",
          "package": "harpy",
          "source": "src/Harpy-CodeGenMonad.html#RelocKind",
          "type": "data"
        },
        "index": {
          "description": "Kind of relocation for example PC-relative",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "RelocKind",
          "package": "harpy",
          "partial": "Reloc Kind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#t:RelocKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis operator gives neat syntax for defining labels.  When \u003ccode\u003el\u003c/code\u003e is a label, the code\n\u003c/p\u003e\u003cpre\u003e l @@ mov eax ebx\n\u003c/pre\u003e\u003cp\u003eassociates the label l with the following \u003ccode\u003emov\u003c/code\u003e instruction.\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "(@@)",
          "package": "harpy",
          "signature": "Label -\u003e CodeGen e s a -\u003e CodeGen e s a",
          "source": "src/Harpy-CodeGenMonad.html#%40%40",
          "type": "function"
        },
        "index": {
          "description": "This operator gives neat syntax for defining labels When is label the code mov eax ebx associates the label with the following mov instruction",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "(@@) @@",
          "normalized": "Label-\u003eCodeGen a b c-\u003eCodeGen a b c",
          "package": "harpy",
          "signature": "Label-\u003eCodeGen e s a-\u003eCodeGen e s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:-64--64-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.CodeGenMonad",
          "name": "CodeGenConfig",
          "package": "harpy",
          "signature": "CodeGenConfig",
          "source": "src/Harpy-CodeGenMonad.html#CodeGenConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "CodeGenConfig",
          "package": "harpy",
          "partial": "Code Gen Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:CodeGenConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e16-bit relative reference\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "Fixup16",
          "package": "harpy",
          "signature": "Fixup16",
          "source": "src/Harpy-CodeGenMonad.html#FixupKind",
          "type": "function"
        },
        "index": {
          "description": "bit relative reference",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "Fixup16",
          "package": "harpy",
          "partial": "Fixup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:Fixup16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e32-bit relative reference\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "Fixup32",
          "package": "harpy",
          "signature": "Fixup32",
          "source": "src/Harpy-CodeGenMonad.html#FixupKind",
          "type": "function"
        },
        "index": {
          "description": "bit relative reference",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "Fixup32",
          "package": "harpy",
          "partial": "Fixup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:Fixup32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e32-bit absolute reference\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "Fixup32Absolute",
          "package": "harpy",
          "signature": "Fixup32Absolute",
          "source": "src/Harpy-CodeGenMonad.html#FixupKind",
          "type": "function"
        },
        "index": {
          "description": "bit absolute reference",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "Fixup32Absolute",
          "package": "harpy",
          "partial": "Fixup Absolute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:Fixup32Absolute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e8-bit relative reference\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "Fixup8",
          "package": "harpy",
          "signature": "Fixup8",
          "source": "src/Harpy-CodeGenMonad.html#FixupKind",
          "type": "function"
        },
        "index": {
          "description": "bit relative reference",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "Fixup8",
          "package": "harpy",
          "partial": "Fixup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:Fixup8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbsolute address\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "RelocAbsolute",
          "package": "harpy",
          "signature": "RelocAbsolute",
          "source": "src/Harpy-CodeGenMonad.html#RelocKind",
          "type": "function"
        },
        "index": {
          "description": "Absolute address",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "RelocAbsolute",
          "package": "harpy",
          "partial": "Reloc Absolute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:RelocAbsolute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePC-relative relocation\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "RelocPCRel",
          "package": "harpy",
          "signature": "RelocPCRel",
          "source": "src/Harpy-CodeGenMonad.html#RelocKind",
          "type": "function"
        },
        "index": {
          "description": "PC-relative relocation",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "RelocPCRel",
          "package": "harpy",
          "partial": "Reloc PCRel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:RelocPCRel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.CodeGenMonad",
          "name": "callDecl",
          "package": "harpy",
          "signature": "String -\u003e Q Type -\u003e Q [Dec]",
          "source": "src/Harpy-CodeGenMonad.html#callDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "callDecl",
          "normalized": "String-\u003eQ Type-\u003eQ[Dec]",
          "package": "harpy",
          "partial": "Decl",
          "signature": "String-\u003eQ Type-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:callDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether the code buffer has room for at least the given\n number of bytes.  This should be called by code generators\n whenever it cannot be guaranteed that the code buffer is large\n enough to hold all the generated code.  Lets the code generation\n monad fail when the buffer overflows.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e Starting with version 0.4, Harpy automatically checks for\n buffer overflow, so you do not need to call this function anymore.\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "checkBufferSize",
          "package": "harpy",
          "signature": "Int -\u003e CodeGen e s ()",
          "source": "src/Harpy-CodeGenMonad.html#checkBufferSize",
          "type": "function"
        },
        "index": {
          "description": "Check whether the code buffer has room for at least the given number of bytes This should be called by code generators whenever it cannot be guaranteed that the code buffer is large enough to hold all the generated code Lets the code generation monad fail when the buffer overflows Note Starting with version Harpy automatically checks for buffer overflow so you do not need to call this function anymore",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "checkBufferSize",
          "normalized": "Int-\u003eCodeGen a b()",
          "package": "harpy",
          "partial": "Buffer Size",
          "signature": "Int-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:checkBufferSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of individual code buffer blocks. \n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "codeBufferSize",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-CodeGenMonad.html#CodeGenConfig",
          "type": "function"
        },
        "index": {
          "description": "Size of individual code buffer blocks",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "codeBufferSize",
          "package": "harpy",
          "partial": "Buffer Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:codeBufferSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCode buffer passed in.\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "customCodeBuffer",
          "package": "harpy",
          "signature": "Maybe (Ptr Word8, Int)",
          "source": "src/Harpy-CodeGenMonad.html#CodeGenConfig",
          "type": "function"
        },
        "index": {
          "description": "Code buffer passed in",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "customCodeBuffer",
          "normalized": "Maybe(Ptr Word,Int)",
          "package": "harpy",
          "partial": "Code Buffer",
          "signature": "Maybe(Ptr Word,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:customCodeBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault code generation configuration.  The code buffer size is\n set to 4KB, and code buffer management is automatic.  This value is\n intended to be used with record update syntax, for example:\n\u003c/p\u003e\u003cpre\u003e  runCodeGenWithConfig ... defaultCodeGenConfig{codeBufferSize = 128} ...\n\u003c/pre\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "defaultCodeGenConfig",
          "package": "harpy",
          "signature": "CodeGenConfig",
          "source": "src/Harpy-CodeGenMonad.html#defaultCodeGenConfig",
          "type": "function"
        },
        "index": {
          "description": "Default code generation configuration The code buffer size is set to KB and code buffer management is automatic This value is intended to be used with record update syntax for example runCodeGenWithConfig defaultCodeGenConfig codeBufferSize",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "defaultCodeGenConfig",
          "package": "harpy",
          "partial": "Code Gen Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:defaultCodeGenConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a label at the current offset in the code buffer.  All\n references to the label will be relocated to this offset.\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "defineLabel",
          "package": "harpy",
          "signature": "Label -\u003e CodeGen e s ()",
          "source": "src/Harpy-CodeGenMonad.html#defineLabel",
          "type": "function"
        },
        "index": {
          "description": "Emit label at the current offset in the code buffer All references to the label will be relocated to this offset",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "defineLabel",
          "normalized": "Label-\u003eCodeGen a b()",
          "package": "harpy",
          "partial": "Label",
          "signature": "Label-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:defineLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisassemble all code buffers.  The result is a list of\n disassembled instructions which can be converted to strings using\n the \u003ccode\u003e\u003ca\u003eshowIntel\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eshowAtt\u003c/a\u003e\u003c/code\u003e functions from module\n \u003ca\u003eHarpy.X86Disassembler\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "disassemble",
          "package": "harpy",
          "signature": "CodeGen e s [Instruction]",
          "source": "src/Harpy-CodeGenMonad.html#disassemble",
          "type": "function"
        },
        "index": {
          "description": "Disassemble all code buffers The result is list of disassembled instructions which can be converted to strings using the showIntel or showAtt functions from module Harpy.X86Disassembler",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "disassemble",
          "normalized": "CodeGen a b[Instruction]",
          "package": "harpy",
          "signature": "CodeGen e s[Instruction]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:disassemble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eemit8\u003c/a\u003e\u003c/code\u003e, but for a 32-bit value.\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "emit32",
          "package": "harpy",
          "signature": "Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-CodeGenMonad.html#emit32",
          "type": "function"
        },
        "index": {
          "description": "Like emit8 but for bit value",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "emit32",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:emit32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eemit8At\u003c/a\u003e\u003c/code\u003e, but for a 32-bit value.\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "emit32At",
          "package": "harpy",
          "signature": "Int -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-CodeGenMonad.html#emit32At",
          "type": "function"
        },
        "index": {
          "description": "Like emit8At but for bit value",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "emit32At",
          "normalized": "Int-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "partial": "At",
          "signature": "Int-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:emit32At"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a byte value to the code buffer. \n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "emit8",
          "package": "harpy",
          "signature": "Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-CodeGenMonad.html#emit8",
          "type": "function"
        },
        "index": {
          "description": "Emit byte value to the code buffer",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "emit8",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:emit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a byte value at the given offset into the code buffer.\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "emit8At",
          "package": "harpy",
          "signature": "Int -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-CodeGenMonad.html#emit8At",
          "type": "function"
        },
        "index": {
          "description": "Store byte value at the given offset into the code buffer",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "emit8At",
          "normalized": "Int-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "partial": "At",
          "signature": "Int-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:emit8At"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a fixup entry for the given label at the current offset in\n the code buffer (unless the label is already defined).\n The instruction at this offset will\n be patched to target the address associated with this label when\n it is defined later.\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "emitFixup",
          "package": "harpy",
          "signature": "Label -\u003e Int -\u003e FixupKind -\u003e CodeGen e s ()",
          "source": "src/Harpy-CodeGenMonad.html#emitFixup",
          "type": "function"
        },
        "index": {
          "description": "Emit fixup entry for the given label at the current offset in the code buffer unless the label is already defined The instruction at this offset will be patched to target the address associated with this label when it is defined later",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "emitFixup",
          "normalized": "Label-\u003eInt-\u003eFixupKind-\u003eCodeGen a b()",
          "package": "harpy",
          "partial": "Fixup",
          "signature": "Label-\u003eInt-\u003eFixupKind-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:emitFixup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a relocation entry for the given offset, relocation kind \n and target address.\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "emitRelocInfo",
          "package": "harpy",
          "signature": "Int -\u003e RelocKind -\u003e FunPtr a -\u003e CodeGen e s ()",
          "source": "src/Harpy-CodeGenMonad.html#emitRelocInfo",
          "type": "function"
        },
        "index": {
          "description": "Emit relocation entry for the given offset relocation kind and target address",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "emitRelocInfo",
          "normalized": "Int-\u003eRelocKind-\u003eFunPtr a-\u003eCodeGen b c()",
          "package": "harpy",
          "partial": "Reloc Info",
          "signature": "Int-\u003eRelocKind-\u003eFunPtr a-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:emitRelocInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake sure that the code buffer has room for at least the given\n number of bytes.  This should be called by code generators whenever\n it cannot be guaranteed that the code buffer is large enough to\n hold all the generated code.  Creates a new buffer and places a\n jump to the new buffer when there is not sufficient space\n available.  When code generation was invoked with a pre-defined\n code buffer, code generation is aborted on overflow.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e Starting with version 0.4, Harpy automatically checks for\n buffer overflow, so you do not need to call this function anymore.\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "ensureBufferSize",
          "package": "harpy",
          "signature": "Int -\u003e CodeGen e s ()",
          "source": "src/Harpy-CodeGenMonad.html#ensureBufferSize",
          "type": "function"
        },
        "index": {
          "description": "Make sure that the code buffer has room for at least the given number of bytes This should be called by code generators whenever it cannot be guaranteed that the code buffer is large enough to hold all the generated code Creates new buffer and places jump to the new buffer when there is not sufficient space available When code generation was invoked with pre-defined code buffer code generation is aborted on overflow Note Starting with version Harpy automatically checks for buffer overflow so you do not need to call this function anymore",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "ensureBufferSize",
          "normalized": "Int-\u003eCodeGen a b()",
          "package": "harpy",
          "partial": "Buffer Size",
          "signature": "Int-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:ensureBufferSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbort code generation with the given error message.\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "failCodeGen",
          "package": "harpy",
          "signature": "Doc -\u003e CodeGen e s a",
          "source": "src/Harpy-CodeGenMonad.html#failCodeGen",
          "type": "function"
        },
        "index": {
          "description": "Abort code generation with the given error message",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "failCodeGen",
          "normalized": "Doc-\u003eCodeGen a b c",
          "package": "harpy",
          "partial": "Code Gen",
          "signature": "Doc-\u003eCodeGen e s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:failCodeGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the pointer to the start of the code buffer.\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "getBasePtr",
          "package": "harpy",
          "signature": "CodeGen e s (Ptr Word8)",
          "source": "src/Harpy-CodeGenMonad.html#getBasePtr",
          "type": "function"
        },
        "index": {
          "description": "Return the pointer to the start of the code buffer",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "getBasePtr",
          "package": "harpy",
          "partial": "Base Ptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:getBasePtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a list of all code buffers and their respective size \n (i.e., actually used space for code, not allocated size).\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "getCodeBufferList",
          "package": "harpy",
          "signature": "CodeGen e s [(Ptr Word8, Int)]",
          "source": "src/Harpy-CodeGenMonad.html#getCodeBufferList",
          "type": "function"
        },
        "index": {
          "description": "Return list of all code buffers and their respective size i.e actually used space for code not allocated size",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "getCodeBufferList",
          "normalized": "CodeGen a b[(Ptr Word,Int)]",
          "package": "harpy",
          "partial": "Code Buffer List",
          "signature": "CodeGen e s[(Ptr Word,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:getCodeBufferList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the current offset in the code buffer, e.g. the offset\n at which the next instruction will be emitted.\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "getCodeOffset",
          "package": "harpy",
          "signature": "CodeGen e s Int",
          "source": "src/Harpy-CodeGenMonad.html#getCodeOffset",
          "type": "function"
        },
        "index": {
          "description": "Return the current offset in the code buffer e.g the offset at which the next instruction will be emitted",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "getCodeOffset",
          "package": "harpy",
          "partial": "Code Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:getCodeOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a pointer to the beginning of the first code buffer, which\n is normally the entry point to the generated code.\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "getEntryPoint",
          "package": "harpy",
          "signature": "CodeGen e s (Ptr Word8)",
          "source": "src/Harpy-CodeGenMonad.html#getEntryPoint",
          "type": "function"
        },
        "index": {
          "description": "Return pointer to the beginning of the first code buffer which is normally the entry point to the generated code",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "getEntryPoint",
          "package": "harpy",
          "partial": "Entry Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:getEntryPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the current user environment.\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "getEnv",
          "package": "harpy",
          "signature": "CodeGen e s e",
          "source": "src/Harpy-CodeGenMonad.html#getEnv",
          "type": "function"
        },
        "index": {
          "description": "Return the current user environment",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "getEnv",
          "package": "harpy",
          "partial": "Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:getEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the current user state.\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "getState",
          "package": "harpy",
          "signature": "CodeGen e s s",
          "source": "src/Harpy-CodeGenMonad.html#getState",
          "type": "function"
        },
        "index": {
          "description": "Return the current user state",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "getState",
          "package": "harpy",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:getState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the address of a label, fail if the label is not yet defined.\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "labelAddress",
          "package": "harpy",
          "signature": "Label -\u003e CodeGen e s (Ptr a)",
          "source": "src/Harpy-CodeGenMonad.html#labelAddress",
          "type": "function"
        },
        "index": {
          "description": "Return the address of label fail if the label is not yet defined",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "labelAddress",
          "normalized": "Label-\u003eCodeGen a b(Ptr c)",
          "package": "harpy",
          "partial": "Address",
          "signature": "Label-\u003eCodeGen e s(Ptr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:labelAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a new label to be used with the label operations\n \u003ccode\u003e\u003ca\u003eemitFixup\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edefineLabel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "newLabel",
          "package": "harpy",
          "signature": "CodeGen e s Label",
          "source": "src/Harpy-CodeGenMonad.html#newLabel",
          "type": "function"
        },
        "index": {
          "description": "Generate new label to be used with the label operations emitFixup and defineLabel",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "newLabel",
          "package": "harpy",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:newLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a new label to be used with the label operations\n \u003ccode\u003e\u003ca\u003eemitFixup\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edefineLabel\u003c/a\u003e\u003c/code\u003e.  The given name is used for\n diagnostic purposes, and will appear in the disassembly.\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "newNamedLabel",
          "package": "harpy",
          "signature": "String -\u003e CodeGen e s Label",
          "source": "src/Harpy-CodeGenMonad.html#newNamedLabel",
          "type": "function"
        },
        "index": {
          "description": "Generate new label to be used with the label operations emitFixup and defineLabel The given name is used for diagnostic purposes and will appear in the disassembly",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "newNamedLabel",
          "normalized": "String-\u003eCodeGen a b Label",
          "package": "harpy",
          "partial": "Named Label",
          "signature": "String-\u003eCodeGen e s Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:newNamedLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the byte value at the given offset in the code buffer.\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "peek8At",
          "package": "harpy",
          "signature": "Int -\u003e CodeGen e s Word8",
          "source": "src/Harpy-CodeGenMonad.html#peek8At",
          "type": "function"
        },
        "index": {
          "description": "Return the byte value at the given offset in the code buffer",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "peek8At",
          "normalized": "Int-\u003eCodeGen a b Word",
          "package": "harpy",
          "partial": "At",
          "signature": "Int-\u003eCodeGen e s Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:peek8At"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute code generation, given a user environment and state.  The\n result is a tuple of the resulting user state and either an error\n message (when code generation failed) or the result of the code\n generation.  This function runs \u003ccode\u003e\u003ca\u003erunCodeGenWithConfig\u003c/a\u003e\u003c/code\u003e with a\n sensible default configuration.\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "runCodeGen",
          "package": "harpy",
          "signature": "CodeGen e s a -\u003e e -\u003e s -\u003e IO (s, Either ErrMsg a)",
          "source": "src/Harpy-CodeGenMonad.html#runCodeGen",
          "type": "function"
        },
        "index": {
          "description": "Execute code generation given user environment and state The result is tuple of the resulting user state and either an error message when code generation failed or the result of the code generation This function runs runCodeGenWithConfig with sensible default configuration",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "runCodeGen",
          "normalized": "CodeGen a b c-\u003ea-\u003eb-\u003eIO(b,Either ErrMsg c)",
          "package": "harpy",
          "partial": "Code Gen",
          "signature": "CodeGen e s a-\u003ee-\u003es-\u003eIO(s,Either ErrMsg a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:runCodeGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erunCodeGen\u003c/a\u003e\u003c/code\u003e, but allows more control over the code\n generation process.  In addition to a code generator and a user\n environment and state, a code generation configuration must be\n provided.  A code generation configuration allows control over the\n allocation of code buffers, for example.\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "runCodeGenWithConfig",
          "package": "harpy",
          "signature": "CodeGen e s a -\u003e e -\u003e s -\u003e CodeGenConfig -\u003e IO (s, Either ErrMsg a)",
          "source": "src/Harpy-CodeGenMonad.html#runCodeGenWithConfig",
          "type": "function"
        },
        "index": {
          "description": "Like runCodeGen but allows more control over the code generation process In addition to code generator and user environment and state code generation configuration must be provided code generation configuration allows control over the allocation of code buffers for example",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "runCodeGenWithConfig",
          "normalized": "CodeGen a b c-\u003ea-\u003eb-\u003eCodeGenConfig-\u003eIO(b,Either ErrMsg c)",
          "package": "harpy",
          "partial": "Code Gen With Config",
          "signature": "CodeGen e s a-\u003ee-\u003es-\u003eCodeGenConfig-\u003eIO(s,Either ErrMsg a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:runCodeGenWithConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a new label and define it at once\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "setLabel",
          "package": "harpy",
          "signature": "CodeGen e s Label",
          "source": "src/Harpy-CodeGenMonad.html#setLabel",
          "type": "function"
        },
        "index": {
          "description": "Generate new label and define it at once",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "setLabel",
          "package": "harpy",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:setLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the user state to the given value. \n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "setState",
          "package": "harpy",
          "signature": "s -\u003e CodeGen e s ()",
          "source": "src/Harpy-CodeGenMonad.html#setState",
          "type": "function"
        },
        "index": {
          "description": "Set the user state to the given value",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "setState",
          "normalized": "a-\u003eCodeGen b a()",
          "package": "harpy",
          "partial": "State",
          "signature": "s-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:setState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the environment to the given value and execute the given\n code generation in this environment.\n\u003c/p\u003e",
          "module": "Harpy.CodeGenMonad",
          "name": "withEnv",
          "package": "harpy",
          "signature": "e -\u003e CodeGen e s r -\u003e CodeGen e s r",
          "source": "src/Harpy-CodeGenMonad.html#withEnv",
          "type": "function"
        },
        "index": {
          "description": "Set the environment to the given value and execute the given code generation in this environment",
          "hierarchy": "Harpy CodeGenMonad",
          "module": "Harpy.CodeGenMonad",
          "name": "withEnv",
          "normalized": "a-\u003eCodeGen a b c-\u003eCodeGen a b c",
          "package": "harpy",
          "partial": "Env",
          "signature": "e-\u003eCodeGen e s r-\u003eCodeGen e s r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:withEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA type class based layer on top of X86CodeGen\n which determines the addressing modes from the types of the\n operands.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Harpy.X86Assembler",
          "name": "X86Assembler",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html",
          "type": "module"
        },
        "index": {
          "description": "type class based layer on top of X86CodeGen which determines the addressing modes from the types of the operands",
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "X86Assembler",
          "package": "harpy",
          "partial": "Assembler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Adc",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Adc",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Adc",
          "package": "harpy",
          "partial": "Adc",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Adc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Add",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Add",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Add",
          "package": "harpy",
          "partial": "Add",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Addpd",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Addpd",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Addpd",
          "package": "harpy",
          "partial": "Addpd",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Addpd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Addps",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Addps",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Addps",
          "package": "harpy",
          "partial": "Addps",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Addps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Addr",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Addr",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Addr",
          "package": "harpy",
          "partial": "Addr",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Addsd",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Addsd",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Addsd",
          "package": "harpy",
          "partial": "Addsd",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Addsd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Addss",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Addss",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Addss",
          "package": "harpy",
          "partial": "Addss",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Addss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "And",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#And",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "And",
          "package": "harpy",
          "partial": "And",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Call",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Call",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Call",
          "package": "harpy",
          "partial": "Call",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmova",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmova",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmova",
          "package": "harpy",
          "partial": "Cmova",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmova"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmovae",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmovae",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmovae",
          "package": "harpy",
          "partial": "Cmovae",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovae"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmovb",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmovb",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmovb",
          "package": "harpy",
          "partial": "Cmovb",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmovbe",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmovbe",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmovbe",
          "package": "harpy",
          "partial": "Cmovbe",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovbe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmovc",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmovc",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmovc",
          "package": "harpy",
          "partial": "Cmovc",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmove",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmove",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmove",
          "package": "harpy",
          "partial": "Cmove",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmovg",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmovg",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmovg",
          "package": "harpy",
          "partial": "Cmovg",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmovge",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmovge",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmovge",
          "package": "harpy",
          "partial": "Cmovge",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmovl",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmovl",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmovl",
          "package": "harpy",
          "partial": "Cmovl",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmovle",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmovle",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmovle",
          "package": "harpy",
          "partial": "Cmovle",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmovna",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmovna",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmovna",
          "package": "harpy",
          "partial": "Cmovna",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovna"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmovnae",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmovnae",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmovnae",
          "package": "harpy",
          "partial": "Cmovnae",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovnae"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmovnb",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmovnb",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmovnb",
          "package": "harpy",
          "partial": "Cmovnb",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovnb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmovnbe",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmovnbe",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmovnbe",
          "package": "harpy",
          "partial": "Cmovnbe",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovnbe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmovnc",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmovnc",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmovnc",
          "package": "harpy",
          "partial": "Cmovnc",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovnc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmovne",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmovne",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmovne",
          "package": "harpy",
          "partial": "Cmovne",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmovng",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmovng",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmovng",
          "package": "harpy",
          "partial": "Cmovng",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovng"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmovnge",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmovnge",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmovnge",
          "package": "harpy",
          "partial": "Cmovnge",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovnge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmovnl",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmovnl",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmovnl",
          "package": "harpy",
          "partial": "Cmovnl",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovnl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmovnle",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmovnle",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmovnle",
          "package": "harpy",
          "partial": "Cmovnle",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovnle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmovno",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmovno",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmovno",
          "package": "harpy",
          "partial": "Cmovno",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmovnp",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmovnp",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmovnp",
          "package": "harpy",
          "partial": "Cmovnp",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovnp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmovns",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmovns",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmovns",
          "package": "harpy",
          "partial": "Cmovns",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmovnz",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmovnz",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmovnz",
          "package": "harpy",
          "partial": "Cmovnz",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovnz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmovo",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmovo",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmovo",
          "package": "harpy",
          "partial": "Cmovo",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmovp",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmovp",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmovp",
          "package": "harpy",
          "partial": "Cmovp",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmovpe",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmovpe",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmovpe",
          "package": "harpy",
          "partial": "Cmovpe",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovpe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmovpo",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmovpo",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmovpo",
          "package": "harpy",
          "partial": "Cmovpo",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovpo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmovs",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmovs",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmovs",
          "package": "harpy",
          "partial": "Cmovs",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmovz",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmovz",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmovz",
          "package": "harpy",
          "partial": "Cmovz",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmp",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmp",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmp",
          "package": "harpy",
          "partial": "Cmp",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Cmpxchg",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Cmpxchg",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Cmpxchg",
          "package": "harpy",
          "partial": "Cmpxchg",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmpxchg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Comisd",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Comisd",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Comisd",
          "package": "harpy",
          "partial": "Comisd",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Comisd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Comiss",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Comiss",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Comiss",
          "package": "harpy",
          "partial": "Comiss",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Comiss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Dec",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Dec",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Dec",
          "package": "harpy",
          "partial": "Dec",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Dec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Disp",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Disp",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Disp",
          "package": "harpy",
          "partial": "Disp",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Disp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Div",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Div",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Div",
          "package": "harpy",
          "partial": "Div",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Divpd",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Divpd",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Divpd",
          "package": "harpy",
          "partial": "Divpd",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Divpd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Divps",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Divps",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Divps",
          "package": "harpy",
          "partial": "Divps",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Divps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Divsd",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Divsd",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Divsd",
          "package": "harpy",
          "partial": "Divsd",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Divsd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Divss",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Divss",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Divss",
          "package": "harpy",
          "partial": "Divss",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Divss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "FPReg",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#FPReg",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "FPReg",
          "package": "harpy",
          "partial": "FPReg",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:FPReg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "FPTopReg",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#FPTopReg",
          "type": "data"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "FPTopReg",
          "package": "harpy",
          "partial": "FPTop Reg",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:FPTopReg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Fadd",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Fadd",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Fadd",
          "package": "harpy",
          "partial": "Fadd",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fadd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Faddp",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Faddp",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Faddp",
          "package": "harpy",
          "partial": "Faddp",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Faddp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Fcom",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Fcom",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Fcom",
          "package": "harpy",
          "partial": "Fcom",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fcom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Fcomp",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Fcomp",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Fcomp",
          "package": "harpy",
          "partial": "Fcomp",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fcomp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Fdiv",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Fdiv",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Fdiv",
          "package": "harpy",
          "partial": "Fdiv",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fdiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Fdivp",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Fdivp",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Fdivp",
          "package": "harpy",
          "partial": "Fdivp",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fdivp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Fdivr",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Fdivr",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Fdivr",
          "package": "harpy",
          "partial": "Fdivr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fdivr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Fiadd",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Fiadd",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Fiadd",
          "package": "harpy",
          "partial": "Fiadd",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fiadd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Fidiv",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Fidiv",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Fidiv",
          "package": "harpy",
          "partial": "Fidiv",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fidiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Fild",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Fild",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Fild",
          "package": "harpy",
          "partial": "Fild",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Fimul",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Fimul",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Fimul",
          "package": "harpy",
          "partial": "Fimul",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fimul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Fist",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Fist",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Fist",
          "package": "harpy",
          "partial": "Fist",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Fistp",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Fistp",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Fistp",
          "package": "harpy",
          "partial": "Fistp",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fistp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Fisub",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Fisub",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Fisub",
          "package": "harpy",
          "partial": "Fisub",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fisub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Fld",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Fld",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Fld",
          "package": "harpy",
          "partial": "Fld",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fld"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Fld80",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Fld80",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Fld80",
          "package": "harpy",
          "partial": "Fld",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fld80"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Fldcw",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Fldcw",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Fldcw",
          "package": "harpy",
          "partial": "Fldcw",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fldcw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Fmul",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Fmul",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Fmul",
          "package": "harpy",
          "partial": "Fmul",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fmul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Fmulp",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Fmulp",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Fmulp",
          "package": "harpy",
          "partial": "Fmulp",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fmulp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Fnstcw",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Fnstcw",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Fnstcw",
          "package": "harpy",
          "partial": "Fnstcw",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fnstcw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Fst",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Fst",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Fst",
          "package": "harpy",
          "partial": "Fst",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Fst80",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Fst80",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Fst80",
          "package": "harpy",
          "partial": "Fst",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fst80"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Fstp",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Fstp",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Fstp",
          "package": "harpy",
          "partial": "Fstp",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fstp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Fsub",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Fsub",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Fsub",
          "package": "harpy",
          "partial": "Fsub",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fsub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Fsubp",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Fsubp",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Fsubp",
          "package": "harpy",
          "partial": "Fsubp",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fsubp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Fsubr",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Fsubr",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Fsubr",
          "package": "harpy",
          "partial": "Fsubr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fsubr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Idiv",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Idiv",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Idiv",
          "package": "harpy",
          "partial": "Idiv",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Idiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Imul",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Imul",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Imul",
          "package": "harpy",
          "partial": "Imul",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Imul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "InPlace",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#InPlace",
          "type": "data"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "InPlace",
          "package": "harpy",
          "partial": "In Place",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:InPlace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Inc",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Inc",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Inc",
          "package": "harpy",
          "partial": "Inc",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Inc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Ind",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Ind",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Ind",
          "package": "harpy",
          "partial": "Ind",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Ind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Ja",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Ja",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Ja",
          "package": "harpy",
          "partial": "Ja",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Ja"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Jae",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Jae",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Jae",
          "package": "harpy",
          "partial": "Jae",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jae"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Jb",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Jb",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Jb",
          "package": "harpy",
          "partial": "Jb",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Jbe",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Jbe",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Jbe",
          "package": "harpy",
          "partial": "Jbe",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jbe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Jc",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Jc",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Jc",
          "package": "harpy",
          "partial": "Jc",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Je",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Je",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Je",
          "package": "harpy",
          "partial": "Je",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Je"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Jg",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Jg",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Jg",
          "package": "harpy",
          "partial": "Jg",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Jge",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Jge",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Jge",
          "package": "harpy",
          "partial": "Jge",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Jl",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Jl",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Jl",
          "package": "harpy",
          "partial": "Jl",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Jle",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Jle",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Jle",
          "package": "harpy",
          "partial": "Jle",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Jmp",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Jmp",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Jmp",
          "package": "harpy",
          "partial": "Jmp",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Jna",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Jna",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Jna",
          "package": "harpy",
          "partial": "Jna",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jna"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Jnae",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Jnae",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Jnae",
          "package": "harpy",
          "partial": "Jnae",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jnae"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Jnb",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Jnb",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Jnb",
          "package": "harpy",
          "partial": "Jnb",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jnb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Jnbe",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Jnbe",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Jnbe",
          "package": "harpy",
          "partial": "Jnbe",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jnbe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Jnc",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Jnc",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Jnc",
          "package": "harpy",
          "partial": "Jnc",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jnc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Jne",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Jne",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Jne",
          "package": "harpy",
          "partial": "Jne",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Jng",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Jng",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Jng",
          "package": "harpy",
          "partial": "Jng",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jng"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Jnge",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Jnge",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Jnge",
          "package": "harpy",
          "partial": "Jnge",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jnge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Jnl",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Jnl",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Jnl",
          "package": "harpy",
          "partial": "Jnl",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jnl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Jnle",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Jnle",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Jnle",
          "package": "harpy",
          "partial": "Jnle",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jnle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Jno",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Jno",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Jno",
          "package": "harpy",
          "partial": "Jno",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Jnp",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Jnp",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Jnp",
          "package": "harpy",
          "partial": "Jnp",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jnp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Jns",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Jns",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Jns",
          "package": "harpy",
          "partial": "Jns",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Jnz",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Jnz",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Jnz",
          "package": "harpy",
          "partial": "Jnz",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jnz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Jo",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Jo",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Jo",
          "package": "harpy",
          "partial": "Jo",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Jp",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Jp",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Jp",
          "package": "harpy",
          "partial": "Jp",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Jpe",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Jpe",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Jpe",
          "package": "harpy",
          "partial": "Jpe",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jpe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Jpo",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Jpo",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Jpo",
          "package": "harpy",
          "partial": "Jpo",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jpo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Js",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Js",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Js",
          "package": "harpy",
          "partial": "Js",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Js"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Jz",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Jz",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Jz",
          "package": "harpy",
          "partial": "Jz",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Lea",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Lea",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Lea",
          "package": "harpy",
          "partial": "Lea",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Lea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Loop",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Loop",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Loop",
          "package": "harpy",
          "partial": "Loop",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Maxpd",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Maxpd",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Maxpd",
          "package": "harpy",
          "partial": "Maxpd",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Maxpd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Maxps",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Maxps",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Maxps",
          "package": "harpy",
          "partial": "Maxps",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Maxps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Maxsd",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Maxsd",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Maxsd",
          "package": "harpy",
          "partial": "Maxsd",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Maxsd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Maxss",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Maxss",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Maxss",
          "package": "harpy",
          "partial": "Maxss",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Maxss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Minpd",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Minpd",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Minpd",
          "package": "harpy",
          "partial": "Minpd",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Minpd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Minps",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Minps",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Minps",
          "package": "harpy",
          "partial": "Minps",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Minps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Minsd",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Minsd",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Minsd",
          "package": "harpy",
          "partial": "Minsd",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Minsd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Minss",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Minss",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Minss",
          "package": "harpy",
          "partial": "Minss",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Minss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Mov",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Mov",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Mov",
          "package": "harpy",
          "partial": "Mov",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Mov"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Movlps",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Movlps",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Movlps",
          "package": "harpy",
          "partial": "Movlps",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Movlps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Movsd",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Movsd",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Movsd",
          "package": "harpy",
          "partial": "Movsd",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Movsd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Movss",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Movss",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Movss",
          "package": "harpy",
          "partial": "Movss",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Movss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Movsxb",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Movsxb",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Movsxb",
          "package": "harpy",
          "partial": "Movsxb",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Movsxb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Movsxw",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Movsxw",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Movsxw",
          "package": "harpy",
          "partial": "Movsxw",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Movsxw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Movups",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Movups",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Movups",
          "package": "harpy",
          "partial": "Movups",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Movups"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Movzxb",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Movzxb",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Movzxb",
          "package": "harpy",
          "partial": "Movzxb",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Movzxb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Movzxw",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Movzxw",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Movzxw",
          "package": "harpy",
          "partial": "Movzxw",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Movzxw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Mul",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Mul",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Mul",
          "package": "harpy",
          "partial": "Mul",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Mul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Mulpd",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Mulpd",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Mulpd",
          "package": "harpy",
          "partial": "Mulpd",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Mulpd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Mulps",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Mulps",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Mulps",
          "package": "harpy",
          "partial": "Mulps",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Mulps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Mulsd",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Mulsd",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Mulsd",
          "package": "harpy",
          "partial": "Mulsd",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Mulsd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Mulss",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Mulss",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Mulss",
          "package": "harpy",
          "partial": "Mulss",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Mulss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Neg",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Neg",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Neg",
          "package": "harpy",
          "partial": "Neg",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Neg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Not",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Not",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Not",
          "package": "harpy",
          "partial": "Not",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Or",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Or",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Or",
          "package": "harpy",
          "partial": "Or",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Pop",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Pop",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Pop",
          "package": "harpy",
          "partial": "Pop",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Prefetch0",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Prefetch0",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Prefetch0",
          "package": "harpy",
          "partial": "Prefetch",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Prefetch0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Prefetch1",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Prefetch1",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Prefetch1",
          "package": "harpy",
          "partial": "Prefetch",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Prefetch1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Prefetch2",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Prefetch2",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Prefetch2",
          "package": "harpy",
          "partial": "Prefetch",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Prefetch2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Prefetchnta",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Prefetchnta",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Prefetchnta",
          "package": "harpy",
          "partial": "Prefetchnta",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Prefetchnta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Push",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Push",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Push",
          "package": "harpy",
          "partial": "Push",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Rcl",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Rcl",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Rcl",
          "package": "harpy",
          "partial": "Rcl",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Rcl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Rcr",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Rcr",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Rcr",
          "package": "harpy",
          "partial": "Rcr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Rcr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Reg16",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Reg16",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Reg16",
          "package": "harpy",
          "partial": "Reg",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Reg16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Reg32",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Reg32",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Reg32",
          "package": "harpy",
          "partial": "Reg",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Reg32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Reg8",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Reg8",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Reg8",
          "package": "harpy",
          "partial": "Reg",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Reg8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Rol",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Rol",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Rol",
          "package": "harpy",
          "partial": "Rol",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Rol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Ror",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Ror",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Ror",
          "package": "harpy",
          "partial": "Ror",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Ror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Sal",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Sal",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Sal",
          "package": "harpy",
          "partial": "Sal",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Sal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Sar",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Sar",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Sar",
          "package": "harpy",
          "partial": "Sar",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Sar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Sbb",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Sbb",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Sbb",
          "package": "harpy",
          "partial": "Sbb",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Sbb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Scale",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Scale",
          "type": "data"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Scale",
          "package": "harpy",
          "partial": "Scale",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Seta",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Seta",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Seta",
          "package": "harpy",
          "partial": "Seta",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Seta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Setae",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Setae",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Setae",
          "package": "harpy",
          "partial": "Setae",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setae"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Setb",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Setb",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Setb",
          "package": "harpy",
          "partial": "Setb",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Setbe",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Setbe",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Setbe",
          "package": "harpy",
          "partial": "Setbe",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setbe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Setc",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Setc",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Setc",
          "package": "harpy",
          "partial": "Setc",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Sete",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Sete",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Sete",
          "package": "harpy",
          "partial": "Sete",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Sete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Setg",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Setg",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Setg",
          "package": "harpy",
          "partial": "Setg",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Setge",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Setge",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Setge",
          "package": "harpy",
          "partial": "Setge",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Setl",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Setl",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Setl",
          "package": "harpy",
          "partial": "Setl",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Setle",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Setle",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Setle",
          "package": "harpy",
          "partial": "Setle",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Setna",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Setna",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Setna",
          "package": "harpy",
          "partial": "Setna",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setna"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Setnae",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Setnae",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Setnae",
          "package": "harpy",
          "partial": "Setnae",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setnae"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Setnb",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Setnb",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Setnb",
          "package": "harpy",
          "partial": "Setnb",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setnb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Setnbe",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Setnbe",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Setnbe",
          "package": "harpy",
          "partial": "Setnbe",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setnbe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Setnc",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Setnc",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Setnc",
          "package": "harpy",
          "partial": "Setnc",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setnc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Setne",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Setne",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Setne",
          "package": "harpy",
          "partial": "Setne",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Setng",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Setng",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Setng",
          "package": "harpy",
          "partial": "Setng",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setng"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Setnge",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Setnge",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Setnge",
          "package": "harpy",
          "partial": "Setnge",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setnge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Setnl",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Setnl",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Setnl",
          "package": "harpy",
          "partial": "Setnl",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setnl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Setnle",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Setnle",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Setnle",
          "package": "harpy",
          "partial": "Setnle",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setnle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Setno",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Setno",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Setno",
          "package": "harpy",
          "partial": "Setno",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Setnp",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Setnp",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Setnp",
          "package": "harpy",
          "partial": "Setnp",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setnp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Setns",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Setns",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Setns",
          "package": "harpy",
          "partial": "Setns",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Setnz",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Setnz",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Setnz",
          "package": "harpy",
          "partial": "Setnz",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setnz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Seto",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Seto",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Seto",
          "package": "harpy",
          "partial": "Seto",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Seto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Setp",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Setp",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Setp",
          "package": "harpy",
          "partial": "Setp",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Setpe",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Setpe",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Setpe",
          "package": "harpy",
          "partial": "Setpe",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setpe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Setpo",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Setpo",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Setpo",
          "package": "harpy",
          "partial": "Setpo",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setpo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Sets",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Sets",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Sets",
          "package": "harpy",
          "partial": "Sets",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Sets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Setz",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Setz",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Setz",
          "package": "harpy",
          "partial": "Setz",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Shl",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Shl",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Shl",
          "package": "harpy",
          "partial": "Shl",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Shl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Shld",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Shld",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Shld",
          "package": "harpy",
          "partial": "Shld",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Shld"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Shr",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Shr",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Shr",
          "package": "harpy",
          "partial": "Shr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Shr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Shrd",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Shrd",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Shrd",
          "package": "harpy",
          "partial": "Shrd",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Shrd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Sqrtpd",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Sqrtpd",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Sqrtpd",
          "package": "harpy",
          "partial": "Sqrtpd",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Sqrtpd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Sqrtps",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Sqrtps",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Sqrtps",
          "package": "harpy",
          "partial": "Sqrtps",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Sqrtps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Sqrtsd",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Sqrtsd",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Sqrtsd",
          "package": "harpy",
          "partial": "Sqrtsd",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Sqrtsd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Sqrtss",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Sqrtss",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Sqrtss",
          "package": "harpy",
          "partial": "Sqrtss",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Sqrtss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Sub",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Sub",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Sub",
          "package": "harpy",
          "partial": "Sub",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Subpd",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Subpd",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Subpd",
          "package": "harpy",
          "partial": "Subpd",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Subpd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Subps",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Subps",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Subps",
          "package": "harpy",
          "partial": "Subps",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Subps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Subsd",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Subsd",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Subsd",
          "package": "harpy",
          "partial": "Subsd",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Subsd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Subss",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Subss",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Subss",
          "package": "harpy",
          "partial": "Subss",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Subss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Test",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Test",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Test",
          "package": "harpy",
          "partial": "Test",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Ucomisd",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Ucomisd",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Ucomisd",
          "package": "harpy",
          "partial": "Ucomisd",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Ucomisd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Ucomiss",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Ucomiss",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Ucomiss",
          "package": "harpy",
          "partial": "Ucomiss",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Ucomiss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "XMMLoc",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#XMMLoc",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "XMMLoc",
          "package": "harpy",
          "partial": "XMMLoc",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:XMMLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "XMMReg",
          "package": "harpy",
          "source": "src/Harpy-X86CodeGen.html#XMMReg",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "XMMReg",
          "package": "harpy",
          "partial": "XMMReg",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:XMMReg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Xadd",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Xadd",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Xadd",
          "package": "harpy",
          "partial": "Xadd",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Xadd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Xchg",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Xchg",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Xchg",
          "package": "harpy",
          "partial": "Xchg",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Xchg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Xor",
          "package": "harpy",
          "source": "src/Harpy-X86Assembler.html#Xor",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Xor",
          "package": "harpy",
          "partial": "Xor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Xor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Addr",
          "package": "harpy",
          "signature": "Addr Word32",
          "source": "src/Harpy-X86Assembler.html#Addr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Addr",
          "package": "harpy",
          "partial": "Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:Addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Disp",
          "package": "harpy",
          "signature": "Disp Word32",
          "source": "src/Harpy-X86Assembler.html#Disp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Disp",
          "package": "harpy",
          "partial": "Disp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:Disp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "FPReg",
          "package": "harpy",
          "signature": "FPReg Word8",
          "source": "src/Harpy-X86Assembler.html#FPReg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "FPReg",
          "package": "harpy",
          "partial": "FPReg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:FPReg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "FPTopReg",
          "package": "harpy",
          "signature": "FPTopReg",
          "source": "src/Harpy-X86Assembler.html#FPTopReg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "FPTopReg",
          "package": "harpy",
          "partial": "FPTop Reg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:FPTopReg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "InPlace",
          "package": "harpy",
          "signature": "InPlace",
          "source": "src/Harpy-X86Assembler.html#InPlace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "InPlace",
          "package": "harpy",
          "partial": "In Place",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:InPlace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Ind",
          "package": "harpy",
          "signature": "Ind Reg32",
          "source": "src/Harpy-X86Assembler.html#Ind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Ind",
          "package": "harpy",
          "partial": "Ind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:Ind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Reg16",
          "package": "harpy",
          "signature": "Reg16 Word8",
          "source": "src/Harpy-X86Assembler.html#Reg16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Reg16",
          "package": "harpy",
          "partial": "Reg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:Reg16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Reg32",
          "package": "harpy",
          "signature": "Reg32 Word8",
          "source": "src/Harpy-X86Assembler.html#Reg32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Reg32",
          "package": "harpy",
          "partial": "Reg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:Reg32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "Reg8",
          "package": "harpy",
          "signature": "Reg8 Word8",
          "source": "src/Harpy-X86Assembler.html#Reg8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "Reg8",
          "package": "harpy",
          "partial": "Reg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:Reg8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "S1",
          "package": "harpy",
          "signature": "S1",
          "source": "src/Harpy-X86Assembler.html#Scale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "S1",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:S1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "S2",
          "package": "harpy",
          "signature": "S2",
          "source": "src/Harpy-X86Assembler.html#Scale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "S2",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:S2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "S4",
          "package": "harpy",
          "signature": "S4",
          "source": "src/Harpy-X86Assembler.html#Scale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "S4",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:S4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "S8",
          "package": "harpy",
          "signature": "S8",
          "source": "src/Harpy-X86Assembler.html#Scale",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "S8",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:S8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Harpy.X86Assembler\",\"Harpy.X86CodeGen\"]",
          "name": "XMMReg",
          "package": "harpy",
          "signature": "XMMReg Word8",
          "source": "src/Harpy-X86CodeGen.html#XMMReg",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:XMMReg\",\"http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:XMMReg\"]"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "XMMReg",
          "package": "harpy",
          "partial": "XMMReg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:XMMReg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "adc",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#adc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "adc",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:adc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "add",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#add",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "add",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "addpd",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#addpd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "addpd",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:addpd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "addps",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#addps",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "addps",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:addps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "addsd",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#addsd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "addsd",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:addsd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "addss",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#addss",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "addss",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:addss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "ah",
          "package": "harpy",
          "signature": "Reg8",
          "source": "src/Harpy-X86Assembler.html#al",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "ah",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:ah"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "al",
          "package": "harpy",
          "signature": "Reg8",
          "source": "src/Harpy-X86Assembler.html#al",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "al",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:al"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "and",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#and",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "and",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "ax",
          "package": "harpy",
          "signature": "Reg16",
          "source": "src/Harpy-X86Assembler.html#ax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "ax",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:ax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "bh",
          "package": "harpy",
          "signature": "Reg8",
          "source": "src/Harpy-X86Assembler.html#al",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "bh",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:bh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "bl",
          "package": "harpy",
          "signature": "Reg8",
          "source": "src/Harpy-X86Assembler.html#al",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "bl",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:bl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "bp",
          "package": "harpy",
          "signature": "Reg16",
          "source": "src/Harpy-X86Assembler.html#ax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "bp",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:bp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "breakpoint",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#breakpoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "breakpoint",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:breakpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "bx",
          "package": "harpy",
          "signature": "Reg16",
          "source": "src/Harpy-X86Assembler.html#ax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "bx",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:bx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "call",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#call",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "call",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cdq",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cdq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cdq",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cdq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "ch",
          "package": "harpy",
          "signature": "Reg8",
          "source": "src/Harpy-X86Assembler.html#al",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "ch",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:ch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cl",
          "package": "harpy",
          "signature": "Reg8",
          "source": "src/Harpy-X86Assembler.html#al",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cl",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cld",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cld",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cld",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cld"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmova",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmova",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmova",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmova"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmovae",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmovae",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmovae",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovae"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmovb",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmovb",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmovb",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmovbe",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmovbe",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmovbe",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovbe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmovc",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmovc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmovc",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmove",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmove",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmove",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmovg",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmovg",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmovg",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmovge",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmovge",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmovge",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmovl",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmovl",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmovl",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmovle",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmovle",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmovle",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmovna",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmovna",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmovna",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovna"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmovnae",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmovnae",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmovnae",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovnae"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmovnb",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmovnb",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmovnb",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovnb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmovnbe",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmovnbe",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmovnbe",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovnbe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmovnc",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmovnc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmovnc",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovnc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmovne",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmovne",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmovne",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmovng",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmovng",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmovng",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovng"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmovnge",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmovnge",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmovnge",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovnge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmovnl",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmovnl",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmovnl",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovnl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmovnle",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmovnle",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmovnle",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovnle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmovno",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmovno",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmovno",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmovnp",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmovnp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmovnp",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovnp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmovns",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmovns",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmovns",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmovnz",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmovnz",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmovnz",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovnz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmovo",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmovo",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmovo",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmovp",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmovp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmovp",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmovpe",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmovpe",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmovpe",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovpe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmovpo",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmovpo",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmovpo",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovpo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmovs",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmovs",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmovs",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmovz",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmovz",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmovz",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmp",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmp",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cmpxchg",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cmpxchg",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cmpxchg",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmpxchg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "comisd",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#comisd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "comisd",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:comisd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "comiss",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#comiss",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "comiss",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:comiss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cvtdq2ps",
          "package": "harpy",
          "signature": "XMMReg -\u003e xmm -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cvtdq2ps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cvtdq2ps",
          "normalized": "XMMReg-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "XMMReg-\u003exmm-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cvtdq2ps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cvttps2dq",
          "package": "harpy",
          "signature": "XMMReg -\u003e xmm -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#cvttps2dq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cvttps2dq",
          "normalized": "XMMReg-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "XMMReg-\u003exmm-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cvttps2dq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "cx",
          "package": "harpy",
          "signature": "Reg16",
          "source": "src/Harpy-X86Assembler.html#ax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "cx",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "dec",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#dec",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "dec",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:dec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "dh",
          "package": "harpy",
          "signature": "Reg8",
          "source": "src/Harpy-X86Assembler.html#al",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "dh",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:dh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "di",
          "package": "harpy",
          "signature": "Reg16",
          "source": "src/Harpy-X86Assembler.html#ax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "di",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:di"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "div",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#div",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "div",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "divpd",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#divpd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "divpd",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:divpd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "divps",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#divps",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "divps",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:divps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "divsd",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#divsd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "divsd",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:divsd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "divss",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#divss",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "divss",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:divss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "dl",
          "package": "harpy",
          "signature": "Reg8",
          "source": "src/Harpy-X86Assembler.html#al",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "dl",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:dl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "dx",
          "package": "harpy",
          "signature": "Reg16",
          "source": "src/Harpy-X86Assembler.html#ax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "dx",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:dx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "eax",
          "package": "harpy",
          "signature": "Reg32",
          "source": "src/Harpy-X86Assembler.html#eax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "eax",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:eax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "ebp",
          "package": "harpy",
          "signature": "Reg32",
          "source": "src/Harpy-X86Assembler.html#eax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "ebp",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:ebp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "ebx",
          "package": "harpy",
          "signature": "Reg32",
          "source": "src/Harpy-X86Assembler.html#eax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "ebx",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:ebx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "ecx",
          "package": "harpy",
          "signature": "Reg32",
          "source": "src/Harpy-X86Assembler.html#eax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "ecx",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:ecx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "edi",
          "package": "harpy",
          "signature": "Reg32",
          "source": "src/Harpy-X86Assembler.html#eax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "edi",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:edi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "edx",
          "package": "harpy",
          "signature": "Reg32",
          "source": "src/Harpy-X86Assembler.html#eax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "edx",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:edx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "enter",
          "package": "harpy",
          "signature": "Word16 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#enter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "enter",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:enter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "esi",
          "package": "harpy",
          "signature": "Reg32",
          "source": "src/Harpy-X86Assembler.html#eax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "esi",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:esi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "esp",
          "package": "harpy",
          "signature": "Reg32",
          "source": "src/Harpy-X86Assembler.html#eax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "esp",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:esp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fabs",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fabs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fabs",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fabs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fadd",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fadd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fadd",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fadd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "faddp",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#faddp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "faddp",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:faddp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fchs",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fchs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fchs",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fchs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fcom",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fcom",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fcom",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fcom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fcomi",
          "package": "harpy",
          "signature": "FPReg -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fcomi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fcomi",
          "normalized": "FPReg-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "FPReg-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fcomi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fcomip",
          "package": "harpy",
          "signature": "FPReg -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fcomip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fcomip",
          "normalized": "FPReg-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "FPReg-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fcomip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fcomp",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fcomp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fcomp",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fcomp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fcompp",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fcompp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fcompp",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fcompp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fcos",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fcos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fcos",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fcos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fdiv",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fdiv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fdiv",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fdiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fdivp",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fdivp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fdivp",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fdivp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fdivr",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fdivr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fdivr",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fdivr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fiadd16",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fiadd16",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fiadd16",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fiadd16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fiadd32",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fiadd32",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fiadd32",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fiadd32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fidiv16",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fidiv16",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fidiv16",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fidiv16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fidiv32",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fidiv32",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fidiv32",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fidiv32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fild",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fild",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fild",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fimul16",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fimul16",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fimul16",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fimul16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fimul32",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fimul32",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fimul32",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fimul32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fist",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fist",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fist",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fistp",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fistp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fistp",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fistp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fisub16",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fisub16",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fisub16",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fisub16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fisub32",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fisub32",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fisub32",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fisub32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fld",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fld",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fld",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fld"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fld1",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fld1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fld1",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fld1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fld80",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fld80",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fld80",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fld80"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fldcw",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fldcw",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fldcw",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fldcw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fldpi",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fldpi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fldpi",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fldpi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fldz",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fldz",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fldz",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fldz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fmul",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fmul",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fmul",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fmul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fmulp",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fmulp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fmulp",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fmulp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fnstcw",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fnstcw",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fnstcw",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fnstcw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fnstsw",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fnstsw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fnstsw",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fnstsw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fp0",
          "package": "harpy",
          "signature": "FPReg",
          "source": "src/Harpy-X86Assembler.html#fp0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fp0",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fp0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fp1",
          "package": "harpy",
          "signature": "FPReg",
          "source": "src/Harpy-X86Assembler.html#fp1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fp1",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fp1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fp2",
          "package": "harpy",
          "signature": "FPReg",
          "source": "src/Harpy-X86Assembler.html#fp2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fp2",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fp2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fp3",
          "package": "harpy",
          "signature": "FPReg",
          "source": "src/Harpy-X86Assembler.html#fp3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fp3",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fp3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fp4",
          "package": "harpy",
          "signature": "FPReg",
          "source": "src/Harpy-X86Assembler.html#fp4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fp4",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fp4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fp5",
          "package": "harpy",
          "signature": "FPReg",
          "source": "src/Harpy-X86Assembler.html#fp5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fp5",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fp5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fp6",
          "package": "harpy",
          "signature": "FPReg",
          "source": "src/Harpy-X86Assembler.html#fp6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fp6",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fp6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fp7",
          "package": "harpy",
          "signature": "FPReg",
          "source": "src/Harpy-X86Assembler.html#fp7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fp7",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fp7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fpTop",
          "package": "harpy",
          "signature": "FPTopReg",
          "source": "src/Harpy-X86Assembler.html#fpTop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fpTop",
          "package": "harpy",
          "partial": "Top",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fpTop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fpatan",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fpatan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fpatan",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fpatan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fprem",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fprem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fprem",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fprem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fprem1",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fprem1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fprem1",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fprem1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fptan",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fptan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fptan",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fptan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "frem",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#frem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "frem",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:frem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "frndint",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#frndint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "frndint",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:frndint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fsin",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fsin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fsin",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fsin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fsqrt",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fsqrt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fsqrt",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fsqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fst",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fst",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fst",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fst80",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fst80",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fst80",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fst80"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fstp",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fstp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fstp",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fstp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fstsw",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fstsw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fstsw",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fstsw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fsub",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fsub",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fsub",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fsub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fsubp",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fsubp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fsubp",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fsubp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fsubr",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fsubr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fsubr",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fsubr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "ftst",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#ftst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "ftst",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:ftst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fucomi",
          "package": "harpy",
          "signature": "FPReg -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fucomi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fucomi",
          "normalized": "FPReg-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "FPReg-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fucomi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fucomip",
          "package": "harpy",
          "signature": "FPReg -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fucomip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fucomip",
          "normalized": "FPReg-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "FPReg-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fucomip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fucompp",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fucompp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fucompp",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fucompp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fxam",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fxam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fxam",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fxam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "fxch",
          "package": "harpy",
          "signature": "FPReg -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#fxch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "fxch",
          "normalized": "FPReg-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "FPReg-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fxch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "haddpd",
          "package": "harpy",
          "signature": "XMMReg -\u003e xmm -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#haddpd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "haddpd",
          "normalized": "XMMReg-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "XMMReg-\u003exmm-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:haddpd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "haddps",
          "package": "harpy",
          "signature": "XMMReg -\u003e xmm -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#haddps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "haddps",
          "normalized": "XMMReg-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "XMMReg-\u003exmm-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:haddps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "idiv",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#idiv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "idiv",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:idiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "imul",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e c -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#imul",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "imul",
          "normalized": "a-\u003eb-\u003ec-\u003eCodeGen d e()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003ec-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:imul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "inc",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#inc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "inc",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:inc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "ja",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#ja",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "ja",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:ja"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "jae",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#jae",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "jae",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jae"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "jb",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#jb",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "jb",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "jbe",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#jbe",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "jbe",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jbe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "jc",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#jc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "jc",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "je",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#je",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "je",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:je"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "jecxz",
          "package": "harpy",
          "signature": "Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#jecxz",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "jecxz",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jecxz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "jg",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#jg",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "jg",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "jge",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#jge",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "jge",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "jl",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#jl",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "jl",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "jle",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#jle",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "jle",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "jmp",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#jmp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "jmp",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "jna",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#jna",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "jna",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jna"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "jnae",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#jnae",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "jnae",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jnae"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "jnb",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#jnb",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "jnb",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jnb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "jnbe",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#jnbe",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "jnbe",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jnbe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "jnc",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#jnc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "jnc",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jnc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "jne",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#jne",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "jne",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "jng",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#jng",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "jng",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jng"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "jnge",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#jnge",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "jnge",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jnge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "jnl",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#jnl",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "jnl",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jnl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "jnle",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#jnle",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "jnle",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jnle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "jno",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#jno",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "jno",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "jnp",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#jnp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "jnp",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jnp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "jns",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#jns",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "jns",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "jnz",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#jnz",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "jnz",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jnz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "jo",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#jo",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "jo",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "jp",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#jp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "jp",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "jpe",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#jpe",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "jpe",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jpe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "jpo",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#jpo",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "jpo",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jpo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "js",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#js",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "js",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:js"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "jz",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#jz",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "jz",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "lea",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#lea",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "lea",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:lea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "leave",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#leave",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "leave",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:leave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "loop",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#loop",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "loop",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "loope",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#loope",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "loope",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:loope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "loopne",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#loopne",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "loopne",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:loopne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "maxpd",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#maxpd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "maxpd",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:maxpd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "maxps",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#maxps",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "maxps",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:maxps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "maxsd",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#maxsd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "maxsd",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:maxsd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "maxss",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#maxss",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "maxss",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:maxss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "minpd",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#minpd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "minpd",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:minpd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "minps",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#minps",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "minps",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:minps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "minsd",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#minsd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "minsd",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:minsd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "minss",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#minss",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "minss",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:minss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "mov",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#mov",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "mov",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:mov"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "movlps",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#movlps",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "movlps",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:movlps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "movsb",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#movsb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "movsb",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:movsb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "movsd",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#movsd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "movsd",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:movsd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "movsl",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#movsl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "movsl",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:movsl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "movss",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#movss",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "movss",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:movss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "movsxb",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#movsxb",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "movsxb",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:movsxb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "movsxw",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#movsxw",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "movsxw",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:movsxw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "movups",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#movups",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "movups",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:movups"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "movzxb",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#movzxb",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "movzxb",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:movzxb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "movzxw",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#movzxw",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "movzxw",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:movzxw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "mul",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#mul",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "mul",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:mul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "mulpd",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#mulpd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "mulpd",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:mulpd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "mulps",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#mulps",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "mulps",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:mulps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "mulsd",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#mulsd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "mulsd",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:mulsd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "mulss",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#mulss",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "mulss",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:mulss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "neg",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#neg",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "neg",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:neg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "nop",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#nop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "nop",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:nop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "not",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#not",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "not",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "onlyCl",
          "package": "harpy",
          "signature": "CodeGen e s a",
          "source": "src/Harpy-X86Assembler.html#onlyCl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "onlyCl",
          "package": "harpy",
          "partial": "Cl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:onlyCl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "onlyEbp",
          "package": "harpy",
          "signature": "CodeGen e s a",
          "source": "src/Harpy-X86Assembler.html#onlyEbp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "onlyEbp",
          "package": "harpy",
          "partial": "Ebp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:onlyEbp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "or",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#or",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "or",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "pop",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#pop",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "pop",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "popad",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#popad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "popad",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:popad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "popfd",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#popfd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "popfd",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:popfd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "prefetch0",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#prefetch0",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "prefetch0",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:prefetch0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "prefetch1",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#prefetch1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "prefetch1",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:prefetch1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "prefetch2",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#prefetch2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "prefetch2",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:prefetch2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "prefetchnta",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#prefetchnta",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "prefetchnta",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:prefetchnta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "ptrToInt",
          "package": "harpy",
          "signature": "Ptr a -\u003e Int",
          "source": "src/Harpy-X86Assembler.html#ptrToInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "ptrToInt",
          "normalized": "Ptr a-\u003eInt",
          "package": "harpy",
          "partial": "To Int",
          "signature": "Ptr a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:ptrToInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "ptrToWord32",
          "package": "harpy",
          "signature": "Ptr a -\u003e Word32",
          "source": "src/Harpy-X86Assembler.html#ptrToWord32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "ptrToWord32",
          "normalized": "Ptr a-\u003eWord",
          "package": "harpy",
          "partial": "To Word",
          "signature": "Ptr a-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:ptrToWord32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "push",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#push",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "push",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "pushad",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#pushad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "pushad",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:pushad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "pushfd",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#pushfd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "pushfd",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:pushfd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "rcl",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#rcl",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "rcl",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:rcl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "rcr",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#rcr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "rcr",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:rcr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "rdtsc",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#rdtsc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "rdtsc",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:rdtsc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "ret",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#ret",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "ret",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:ret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "retN",
          "package": "harpy",
          "signature": "Word16 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#retN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "retN",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:retN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "rol",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#rol",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "rol",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:rol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "ror",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#ror",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "ror",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:ror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "sahf",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#sahf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "sahf",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:sahf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "sal",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#sal",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "sal",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:sal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "sar",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#sar",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "sar",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:sar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "sbb",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#sbb",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "sbb",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:sbb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "scaleToShift",
          "package": "harpy",
          "signature": "Scale -\u003e Word8",
          "source": "src/Harpy-X86Assembler.html#scaleToShift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "scaleToShift",
          "normalized": "Scale-\u003eWord",
          "package": "harpy",
          "partial": "To Shift",
          "signature": "Scale-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:scaleToShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "seta",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#seta",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "seta",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:seta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "setae",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#setae",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "setae",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setae"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "setb",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#setb",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "setb",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "setbe",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#setbe",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "setbe",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setbe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "setc",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#setc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "setc",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "sete",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#sete",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "sete",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:sete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "setg",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#setg",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "setg",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "setge",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#setge",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "setge",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "setl",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#setl",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "setl",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "setle",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#setle",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "setle",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "setna",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#setna",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "setna",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setna"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "setnae",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#setnae",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "setnae",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setnae"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "setnb",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#setnb",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "setnb",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setnb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "setnbe",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#setnbe",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "setnbe",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setnbe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "setnc",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#setnc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "setnc",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setnc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "setne",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#setne",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "setne",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "setng",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#setng",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "setng",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setng"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "setnge",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#setnge",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "setnge",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setnge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "setnl",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#setnl",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "setnl",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setnl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "setnle",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#setnle",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "setnle",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setnle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "setno",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#setno",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "setno",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "setnp",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#setnp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "setnp",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setnp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "setns",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#setns",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "setns",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "setnz",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#setnz",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "setnz",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setnz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "seto",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#seto",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "seto",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:seto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "setp",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#setp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "setp",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "setpe",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#setpe",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "setpe",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setpe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "setpo",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#setpo",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "setpo",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setpo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "sets",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#sets",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "sets",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:sets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "setz",
          "package": "harpy",
          "signature": "a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#setz",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "setz",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "a-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "shl",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#shl",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "shl",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:shl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "shld",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e c -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#shld",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "shld",
          "normalized": "a-\u003eb-\u003ec-\u003eCodeGen d e()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003ec-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:shld"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "shr",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#shr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "shr",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:shr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "shrd",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e c -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#shrd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "shrd",
          "normalized": "a-\u003eb-\u003ec-\u003eCodeGen d e()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003ec-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:shrd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "shufpd",
          "package": "harpy",
          "signature": "XMMReg -\u003e xmm -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#shufpd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "shufpd",
          "normalized": "XMMReg-\u003ea-\u003eWord-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "XMMReg-\u003exmm-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:shufpd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "shufps",
          "package": "harpy",
          "signature": "XMMReg -\u003e xmm -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#shufps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "shufps",
          "normalized": "XMMReg-\u003ea-\u003eWord-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "XMMReg-\u003exmm-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:shufps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "si",
          "package": "harpy",
          "signature": "Reg16",
          "source": "src/Harpy-X86Assembler.html#ax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "si",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:si"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "sp",
          "package": "harpy",
          "signature": "Reg16",
          "source": "src/Harpy-X86Assembler.html#ax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "sp",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:sp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "sqrtpd",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#sqrtpd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "sqrtpd",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:sqrtpd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "sqrtps",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#sqrtps",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "sqrtps",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:sqrtps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "sqrtsd",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#sqrtsd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "sqrtsd",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:sqrtsd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "sqrtss",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#sqrtss",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "sqrtss",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:sqrtss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "stosb",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#stosb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "stosb",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:stosb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "stosd",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#stosd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "stosd",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:stosd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "stosl",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#stosl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "stosl",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:stosl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "sub",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#sub",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "sub",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "subpd",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#subpd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "subpd",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:subpd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "subps",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#subps",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "subps",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:subps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "subsd",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#subsd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "subsd",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:subsd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "subss",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#subss",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "subss",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:subss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "test",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#test",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "test",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "ucomisd",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#ucomisd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "ucomisd",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:ucomisd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "ucomiss",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#ucomiss",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "ucomiss",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:ucomiss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "wait",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#wait",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "wait",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:wait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "xadd",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#xadd",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "xadd",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:xadd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "xchg",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#xchg",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "xchg",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:xchg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "xmm0",
          "package": "harpy",
          "signature": "XMMReg",
          "source": "src/Harpy-X86Assembler.html#xmm0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "xmm0",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:xmm0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "xmm1",
          "package": "harpy",
          "signature": "XMMReg",
          "source": "src/Harpy-X86Assembler.html#xmm0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "xmm1",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:xmm1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "xmm2",
          "package": "harpy",
          "signature": "XMMReg",
          "source": "src/Harpy-X86Assembler.html#xmm0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "xmm2",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:xmm2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "xmm3",
          "package": "harpy",
          "signature": "XMMReg",
          "source": "src/Harpy-X86Assembler.html#xmm0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "xmm3",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:xmm3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "xmm4",
          "package": "harpy",
          "signature": "XMMReg",
          "source": "src/Harpy-X86Assembler.html#xmm0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "xmm4",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:xmm4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "xmm5",
          "package": "harpy",
          "signature": "XMMReg",
          "source": "src/Harpy-X86Assembler.html#xmm0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "xmm5",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:xmm5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "xmm6",
          "package": "harpy",
          "signature": "XMMReg",
          "source": "src/Harpy-X86Assembler.html#xmm0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "xmm6",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:xmm6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "xmm7",
          "package": "harpy",
          "signature": "XMMReg",
          "source": "src/Harpy-X86Assembler.html#xmm0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "xmm7",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:xmm7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "xmmLocLowLevel",
          "package": "harpy",
          "signature": "a -\u003e b",
          "source": "src/Harpy-X86Assembler.html#xmmLocLowLevel",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "xmmLocLowLevel",
          "normalized": "a-\u003eb",
          "package": "harpy",
          "partial": "Loc Low Level",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:xmmLocLowLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86Assembler",
          "name": "xor",
          "package": "harpy",
          "signature": "a -\u003e b -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86Assembler.html#xor",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86Assembler",
          "module": "Harpy.X86Assembler",
          "name": "xor",
          "normalized": "a-\u003eb-\u003eCodeGen c d()",
          "package": "harpy",
          "signature": "a-\u003eb-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:xor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports several combinators for writing loops,\n conditionals and function prolog/epilog code.\n\u003c/p\u003e\u003cp\u003eNote: this module is under heavy development and the exported API\n is definitely not yet stable.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Harpy.X86CGCombinators",
          "name": "X86CGCombinators",
          "package": "harpy",
          "source": "src/Harpy-X86CGCombinators.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports several combinators for writing loops conditionals and function prolog epilog code Note this module is under heavy development and the exported API is definitely not yet stable",
          "hierarchy": "Harpy X86CGCombinators",
          "module": "Harpy.X86CGCombinators",
          "name": "X86CGCombinators",
          "package": "harpy",
          "partial": "CGCombinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestination for control transfers\n\u003c/p\u003e",
          "module": "Harpy.X86CGCombinators",
          "name": "CtrlDest",
          "package": "harpy",
          "source": "src/Harpy-X86CGCombinators.html#CtrlDest",
          "type": "data"
        },
        "index": {
          "description": "Destination for control transfers",
          "hierarchy": "Harpy X86CGCombinators",
          "module": "Harpy.X86CGCombinators",
          "name": "CtrlDest",
          "package": "harpy",
          "partial": "Ctrl Dest",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#t:CtrlDest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestination for a calculated value.\n\u003c/p\u003e",
          "module": "Harpy.X86CGCombinators",
          "name": "DataDest",
          "package": "harpy",
          "source": "src/Harpy-X86CGCombinators.html#DataDest",
          "type": "data"
        },
        "index": {
          "description": "Destination for calculated value",
          "hierarchy": "Harpy X86CGCombinators",
          "module": "Harpy.X86CGCombinators",
          "name": "DataDest",
          "package": "harpy",
          "partial": "Data Dest",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#t:DataDest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser environment stores code generators for accessing specific\n variables as well as the current data and control destinations\n\u003c/p\u003e",
          "module": "Harpy.X86CGCombinators",
          "name": "UserEnv",
          "package": "harpy",
          "source": "src/Harpy-X86CGCombinators.html#UserEnv",
          "type": "data"
        },
        "index": {
          "description": "User environment stores code generators for accessing specific variables as well as the current data and control destinations",
          "hierarchy": "Harpy X86CGCombinators",
          "module": "Harpy.X86CGCombinators",
          "name": "UserEnv",
          "package": "harpy",
          "partial": "User Env",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#t:UserEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser state is used to maintain bitmask of registers currently in use.\n\u003c/p\u003e",
          "module": "Harpy.X86CGCombinators",
          "name": "UserState",
          "package": "harpy",
          "source": "src/Harpy-X86CGCombinators.html#UserState",
          "type": "data"
        },
        "index": {
          "description": "User state is used to maintain bitmask of registers currently in use",
          "hierarchy": "Harpy X86CGCombinators",
          "module": "Harpy.X86CGCombinators",
          "name": "UserState",
          "package": "harpy",
          "partial": "User State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#t:UserState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGo to one of the given labels\n depending on outcome of test\n\u003c/p\u003e",
          "module": "Harpy.X86CGCombinators",
          "name": "Branch",
          "package": "harpy",
          "signature": "Branch CtrlDest CtrlDest",
          "source": "src/Harpy-X86CGCombinators.html#CtrlDest",
          "type": "function"
        },
        "index": {
          "description": "Go to one of the given labels depending on outcome of test",
          "hierarchy": "Harpy X86CGCombinators",
          "module": "Harpy.X86CGCombinators",
          "name": "Branch",
          "package": "harpy",
          "partial": "Branch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:Branch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGo to next instruction\n\u003c/p\u003e",
          "module": "Harpy.X86CGCombinators",
          "name": "FallThrough",
          "package": "harpy",
          "signature": "FallThrough",
          "source": "src/Harpy-X86CGCombinators.html#CtrlDest",
          "type": "function"
        },
        "index": {
          "description": "Go to next instruction",
          "hierarchy": "Harpy X86CGCombinators",
          "module": "Harpy.X86CGCombinators",
          "name": "FallThrough",
          "package": "harpy",
          "partial": "Fall Through",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:FallThrough"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGo to specific label\n\u003c/p\u003e",
          "module": "Harpy.X86CGCombinators",
          "name": "Goto",
          "package": "harpy",
          "signature": "Goto Label",
          "source": "src/Harpy-X86CGCombinators.html#CtrlDest",
          "type": "function"
        },
        "index": {
          "description": "Go to specific label",
          "hierarchy": "Harpy X86CGCombinators",
          "module": "Harpy.X86CGCombinators",
          "name": "Goto",
          "package": "harpy",
          "partial": "Goto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:Goto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow result away.\n\u003c/p\u003e",
          "module": "Harpy.X86CGCombinators",
          "name": "Ignore",
          "package": "harpy",
          "signature": "Ignore",
          "source": "src/Harpy-X86CGCombinators.html#DataDest",
          "type": "function"
        },
        "index": {
          "description": "Throw result away",
          "hierarchy": "Harpy X86CGCombinators",
          "module": "Harpy.X86CGCombinators",
          "name": "Ignore",
          "package": "harpy",
          "partial": "Ignore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:Ignore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore at memory address\n\u003c/p\u003e",
          "module": "Harpy.X86CGCombinators",
          "name": "MemBaseDest",
          "package": "harpy",
          "signature": "MemBaseDest Reg32 Word32",
          "source": "src/Harpy-X86CGCombinators.html#DataDest",
          "type": "function"
        },
        "index": {
          "description": "Store at memory address",
          "hierarchy": "Harpy X86CGCombinators",
          "module": "Harpy.X86CGCombinators",
          "name": "MemBaseDest",
          "package": "harpy",
          "partial": "Mem Base Dest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:MemBaseDest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore into specific register\n\u003c/p\u003e",
          "module": "Harpy.X86CGCombinators",
          "name": "RegDest",
          "package": "harpy",
          "signature": "RegDest Reg32",
          "source": "src/Harpy-X86CGCombinators.html#DataDest",
          "type": "function"
        },
        "index": {
          "description": "Store into specific register",
          "hierarchy": "Harpy X86CGCombinators",
          "module": "Harpy.X86CGCombinators",
          "name": "RegDest",
          "package": "harpy",
          "partial": "Reg Dest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:RegDest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn from current functio\n\u003c/p\u003e",
          "module": "Harpy.X86CGCombinators",
          "name": "Return",
          "package": "harpy",
          "signature": "Return",
          "source": "src/Harpy-X86CGCombinators.html#CtrlDest",
          "type": "function"
        },
        "index": {
          "description": "Return from current functio",
          "hierarchy": "Harpy X86CGCombinators",
          "module": "Harpy.X86CGCombinators",
          "name": "Return",
          "package": "harpy",
          "partial": "Return",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:Return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush onto stack\n\u003c/p\u003e",
          "module": "Harpy.X86CGCombinators",
          "name": "StackDest",
          "package": "harpy",
          "signature": "StackDest",
          "source": "src/Harpy-X86CGCombinators.html#DataDest",
          "type": "function"
        },
        "index": {
          "description": "Push onto stack",
          "hierarchy": "Harpy X86CGCombinators",
          "module": "Harpy.X86CGCombinators",
          "name": "StackDest",
          "package": "harpy",
          "partial": "Stack Dest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:StackDest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CGCombinators",
          "name": "UserEnv",
          "package": "harpy",
          "signature": "UserEnv",
          "source": "src/Harpy-X86CGCombinators.html#UserEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CGCombinators",
          "module": "Harpy.X86CGCombinators",
          "name": "UserEnv",
          "package": "harpy",
          "partial": "User Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:UserEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CGCombinators",
          "name": "UserState",
          "package": "harpy",
          "signature": "UserState",
          "source": "src/Harpy-X86CGCombinators.html#UserState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CGCombinators",
          "module": "Harpy.X86CGCombinators",
          "name": "UserState",
          "package": "harpy",
          "partial": "User State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:UserState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CGCombinators",
          "name": "bindings",
          "package": "harpy",
          "signature": "[(String, CodeGen UserEnv UserState ())]",
          "source": "src/Harpy-X86CGCombinators.html#UserEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CGCombinators",
          "module": "Harpy.X86CGCombinators",
          "name": "bindings",
          "normalized": "[(String,CodeGen UserEnv UserState())]",
          "package": "harpy",
          "signature": "[(String,CodeGen UserEnv UserState())]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:bindings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CGCombinators",
          "name": "continue",
          "package": "harpy",
          "signature": "CodeGen UserEnv s ()",
          "source": "src/Harpy-X86CGCombinators.html#continue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CGCombinators",
          "module": "Harpy.X86CGCombinators",
          "name": "continue",
          "normalized": "CodeGen UserEnv a()",
          "package": "harpy",
          "signature": "CodeGen UserEnv s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:continue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CGCombinators",
          "name": "continueBranch",
          "package": "harpy",
          "signature": "Int -\u003e Bool -\u003e CodeGen UserEnv s ()",
          "source": "src/Harpy-X86CGCombinators.html#continueBranch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CGCombinators",
          "module": "Harpy.X86CGCombinators",
          "name": "continueBranch",
          "normalized": "Int-\u003eBool-\u003eCodeGen UserEnv a()",
          "package": "harpy",
          "partial": "Branch",
          "signature": "Int-\u003eBool-\u003eCodeGen UserEnv s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:continueBranch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CGCombinators",
          "name": "ctrlDest",
          "package": "harpy",
          "signature": "CtrlDest",
          "source": "src/Harpy-X86CGCombinators.html#UserEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CGCombinators",
          "module": "Harpy.X86CGCombinators",
          "name": "ctrlDest",
          "package": "harpy",
          "partial": "Dest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:ctrlDest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CGCombinators",
          "name": "dataDest",
          "package": "harpy",
          "signature": "DataDest",
          "source": "src/Harpy-X86CGCombinators.html#UserEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CGCombinators",
          "module": "Harpy.X86CGCombinators",
          "name": "dataDest",
          "package": "harpy",
          "partial": "Dest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:dataDest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CGCombinators",
          "name": "doWhile",
          "package": "harpy",
          "signature": "CodeGen UserEnv s r -\u003e CodeGen UserEnv s a -\u003e CodeGen UserEnv s ()",
          "source": "src/Harpy-X86CGCombinators.html#doWhile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CGCombinators",
          "module": "Harpy.X86CGCombinators",
          "name": "doWhile",
          "normalized": "CodeGen UserEnv a b-\u003eCodeGen UserEnv a c-\u003eCodeGen UserEnv a()",
          "package": "harpy",
          "partial": "While",
          "signature": "CodeGen UserEnv s r-\u003eCodeGen UserEnv s a-\u003eCodeGen UserEnv s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:doWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CGCombinators",
          "name": "emptyUserEnv",
          "package": "harpy",
          "signature": "UserEnv",
          "source": "src/Harpy-X86CGCombinators.html#emptyUserEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CGCombinators",
          "module": "Harpy.X86CGCombinators",
          "name": "emptyUserEnv",
          "package": "harpy",
          "partial": "User Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:emptyUserEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CGCombinators",
          "name": "emptyUserState",
          "package": "harpy",
          "signature": "UserState",
          "source": "src/Harpy-X86CGCombinators.html#emptyUserState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CGCombinators",
          "module": "Harpy.X86CGCombinators",
          "name": "emptyUserState",
          "package": "harpy",
          "partial": "User State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:emptyUserState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit the necessary function prolog and epilog code and invoke the\n given code generator for the code inbetween.\n\u003c/p\u003e",
          "module": "Harpy.X86CGCombinators",
          "name": "function",
          "package": "harpy",
          "signature": "CodeGen UserEnv s r -\u003e CodeGen UserEnv s r",
          "source": "src/Harpy-X86CGCombinators.html#function",
          "type": "function"
        },
        "index": {
          "description": "Emit the necessary function prolog and epilog code and invoke the given code generator for the code inbetween",
          "hierarchy": "Harpy X86CGCombinators",
          "module": "Harpy.X86CGCombinators",
          "name": "function",
          "normalized": "CodeGen UserEnv a b-\u003eCodeGen UserEnv a b",
          "package": "harpy",
          "signature": "CodeGen UserEnv s r-\u003eCodeGen UserEnv s r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CGCombinators",
          "name": "ifThenElse",
          "package": "harpy",
          "signature": "CodeGen UserEnv s r -\u003e CodeGen UserEnv s a -\u003e CodeGen UserEnv s a1 -\u003e CodeGen UserEnv s ()",
          "source": "src/Harpy-X86CGCombinators.html#ifThenElse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CGCombinators",
          "module": "Harpy.X86CGCombinators",
          "name": "ifThenElse",
          "normalized": "CodeGen UserEnv a b-\u003eCodeGen UserEnv a c-\u003eCodeGen UserEnv a c-\u003eCodeGen UserEnv a()",
          "package": "harpy",
          "partial": "Then Else",
          "signature": "CodeGen UserEnv s r-\u003eCodeGen UserEnv s a-\u003eCodeGen UserEnv s a-\u003eCodeGen UserEnv s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:ifThenElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave a number of registers on the stack, perform the given code\n generation, and restore the registers.\n\u003c/p\u003e",
          "module": "Harpy.X86CGCombinators",
          "name": "saveRegs",
          "package": "harpy",
          "signature": "[Reg32] -\u003e CodeGen UserEnv s r -\u003e CodeGen UserEnv s ()",
          "source": "src/Harpy-X86CGCombinators.html#saveRegs",
          "type": "function"
        },
        "index": {
          "description": "Save number of registers on the stack perform the given code generation and restore the registers",
          "hierarchy": "Harpy X86CGCombinators",
          "module": "Harpy.X86CGCombinators",
          "name": "saveRegs",
          "normalized": "[Reg]-\u003eCodeGen UserEnv a b-\u003eCodeGen UserEnv a()",
          "package": "harpy",
          "partial": "Regs",
          "signature": "[Reg]-\u003eCodeGen UserEnv s r-\u003eCodeGen UserEnv s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:saveRegs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the control destinations to the given values while\n running the code generator.\n\u003c/p\u003e",
          "module": "Harpy.X86CGCombinators",
          "name": "withCtrlDest",
          "package": "harpy",
          "signature": "CtrlDest -\u003e CodeGen UserEnv s r -\u003e CodeGen UserEnv s r",
          "source": "src/Harpy-X86CGCombinators.html#withCtrlDest",
          "type": "function"
        },
        "index": {
          "description": "Set the control destinations to the given values while running the code generator",
          "hierarchy": "Harpy X86CGCombinators",
          "module": "Harpy.X86CGCombinators",
          "name": "withCtrlDest",
          "normalized": "CtrlDest-\u003eCodeGen UserEnv a b-\u003eCodeGen UserEnv a b",
          "package": "harpy",
          "partial": "Ctrl Dest",
          "signature": "CtrlDest-\u003eCodeGen UserEnv s r-\u003eCodeGen UserEnv s r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:withCtrlDest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the data destinations to the given values while\n running the code generator.\n\u003c/p\u003e",
          "module": "Harpy.X86CGCombinators",
          "name": "withDataDest",
          "package": "harpy",
          "signature": "DataDest -\u003e CodeGen UserEnv s r -\u003e CodeGen UserEnv s r",
          "source": "src/Harpy-X86CGCombinators.html#withDataDest",
          "type": "function"
        },
        "index": {
          "description": "Set the data destinations to the given values while running the code generator",
          "hierarchy": "Harpy X86CGCombinators",
          "module": "Harpy.X86CGCombinators",
          "name": "withDataDest",
          "normalized": "DataDest-\u003eCodeGen UserEnv a b-\u003eCodeGen UserEnv a b",
          "package": "harpy",
          "partial": "Data Dest",
          "signature": "DataDest-\u003eCodeGen UserEnv s r-\u003eCodeGen UserEnv s r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:withDataDest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the data and control destinations to the given values while\n running the code generator.\n\u003c/p\u003e",
          "module": "Harpy.X86CGCombinators",
          "name": "withDest",
          "package": "harpy",
          "signature": "DataDest -\u003e CtrlDest -\u003e CodeGen UserEnv s r -\u003e CodeGen UserEnv s r",
          "source": "src/Harpy-X86CGCombinators.html#withDest",
          "type": "function"
        },
        "index": {
          "description": "Set the data and control destinations to the given values while running the code generator",
          "hierarchy": "Harpy X86CGCombinators",
          "module": "Harpy.X86CGCombinators",
          "name": "withDest",
          "normalized": "DataDest-\u003eCtrlDest-\u003eCodeGen UserEnv a b-\u003eCodeGen UserEnv a b",
          "package": "harpy",
          "partial": "Dest",
          "signature": "DataDest-\u003eCtrlDest-\u003eCodeGen UserEnv s r-\u003eCodeGen UserEnv s r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:withDest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for generating x86 machine code instructions.  The\n functions make use of the code generation monad in module\n \u003ca\u003eHarpy.CodeGenMonad\u003c/a\u003e for emitting binary code into a code buffer.\n\u003c/p\u003e\u003cp\u003eThis module is very low-level, since there are different\n functions for different addressing modes.  A more convenient\n interface is provided in module \u003ca\u003eHarpy.X86Assembler\u003c/a\u003e, which uses\n the operand types to determine the correct addressing modes for\n all supported instructions.\n\u003c/p\u003e\u003cp\u003eNote: this file does not (yet) provide the complete x86\n instruction set, not even all user-mode instructions.  For some\n operations, some addressing modes are missing as well.\n\u003c/p\u003e\u003cp\u003eCopyright notice:\n\u003c/p\u003e\u003cp\u003eThe information in this file is based on the header file\n x86-codegen.h from the mono distribution, which has the following\n copyright information:\n\u003c/p\u003e\u003cpre\u003e \n  * x86-codegen.h: Macros for generating x86 code\n  *\n  * Authors:\n  *   Paolo Molaro (lupus@ximian.com)\n  *   Intel Corporation (ORP Project)\n  *   Sergey Chaban (serge@wildwestsoftware.com)\n  *   Dietmar Maurer (dietmar@ximian.com)\n  *   Patrik Torstensson\n  * \n  * Copyright (C)  2000 Intel Corporation.  All rights reserved.\n  * Copyright (C)  2001, 2002 Ximian, Inc.\n  *\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "X86CodeGen",
          "package": "harpy",
          "source": "src/Harpy-X86CodeGen.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for generating x86 machine code instructions The functions make use of the code generation monad in module Harpy.CodeGenMonad for emitting binary code into code buffer This module is very low-level since there are different functions for different addressing modes more convenient interface is provided in module Harpy.X86Assembler which uses the operand types to determine the correct addressing modes for all supported instructions Note this file does not yet provide the complete x86 instruction set not even all user-mode instructions For some operations some addressing modes are missing as well Copyright notice The information in this file is based on the header file x86-codegen.h from the mono distribution which has the following copyright information x86-codegen.h Macros for generating x86 code Authors Paolo Molaro lupus@ximian.com Intel Corporation ORP Project Sergey Chaban serge@wildwestsoftware.com Dietmar Maurer dietmar@ximian.com Patrik Torstensson Copyright Intel Corporation All rights reserved Copyright Ximian Inc",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "X86CodeGen",
          "package": "harpy",
          "partial": "Code Gen",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "FIntSize",
          "package": "harpy",
          "source": "src/Harpy-X86CodeGen.html#FIntSize",
          "type": "data"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "FIntSize",
          "package": "harpy",
          "partial": "FInt Size",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#t:FIntSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "Mem",
          "package": "harpy",
          "source": "src/Harpy-X86CodeGen.html#Mem",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "Mem",
          "package": "harpy",
          "partial": "Mem",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#t:Mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "MemBase",
          "package": "harpy",
          "source": "src/Harpy-X86CodeGen.html#MemBase",
          "type": "data"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "MemBase",
          "package": "harpy",
          "partial": "Mem Base",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#t:MemBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "X86_SSE_PFX",
          "package": "harpy",
          "source": "src/Harpy-X86CodeGen.html#X86_SSE_PFX",
          "type": "data"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "X86_SSE_PFX",
          "package": "harpy",
          "partial": "SSE PFX",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#t:X86_SSE_PFX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "XMMLocation",
          "package": "harpy",
          "source": "src/Harpy-X86CodeGen.html#XMMLocation",
          "type": "class"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "XMMLocation",
          "package": "harpy",
          "partial": "XMMLocation",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#t:XMMLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "XMMReg",
          "package": "harpy",
          "source": "src/Harpy-X86CodeGen.html#XMMReg",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "XMMReg",
          "package": "harpy",
          "partial": "XMMReg",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#t:XMMReg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "FInt16",
          "package": "harpy",
          "signature": "FInt16",
          "source": "src/Harpy-X86CodeGen.html#FIntSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "FInt16",
          "package": "harpy",
          "partial": "FInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:FInt16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "FInt32",
          "package": "harpy",
          "signature": "FInt32",
          "source": "src/Harpy-X86CodeGen.html#FIntSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "FInt32",
          "package": "harpy",
          "partial": "FInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:FInt32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "FInt64",
          "package": "harpy",
          "signature": "FInt64",
          "source": "src/Harpy-X86CodeGen.html#FIntSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "FInt64",
          "package": "harpy",
          "partial": "FInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:FInt64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "Mem",
          "package": "harpy",
          "signature": "Mem Word32",
          "source": "src/Harpy-X86CodeGen.html#Mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "Mem",
          "package": "harpy",
          "partial": "Mem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:Mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "MemBase",
          "package": "harpy",
          "signature": "MemBase Word8 Word32",
          "source": "src/Harpy-X86CodeGen.html#MemBase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "MemBase",
          "package": "harpy",
          "partial": "Mem Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:MemBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvert a condition code.\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "negateCC",
          "package": "harpy",
          "signature": "Int -\u003e Int",
          "source": "src/Harpy-X86CodeGen.html#negateCC",
          "type": "function"
        },
        "index": {
          "description": "Invert condition code",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "negateCC",
          "normalized": "Int-\u003eInt",
          "package": "harpy",
          "partial": "CC",
          "signature": "Int-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:negateCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_adc",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_cmp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_adc",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_adc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_add",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_cmp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_add",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_add_sse_reg_mem",
          "package": "harpy",
          "signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_add_sse_reg_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_add_sse_reg_mem",
          "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_add_sse_reg_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_add_sse_reg_membase",
          "package": "harpy",
          "signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_add_sse_reg_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_add_sse_reg_membase",
          "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_add_sse_reg_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_add_sse_reg_reg",
          "package": "harpy",
          "signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_add_sse_reg_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_add_sse_reg_reg",
          "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_add_sse_reg_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix codes\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_address_prefix",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_lock_prefix",
          "type": "function"
        },
        "index": {
          "description": "Prefix codes",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_address_prefix",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_address_prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_alu_mem_imm",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_alu_mem_imm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_alu_mem_imm",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_alu_mem_imm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_alu_mem_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_alu_mem_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_alu_mem_reg",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_alu_mem_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_alu_membase8_imm",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_alu_membase8_imm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_alu_membase8_imm",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_alu_membase8_imm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_alu_membase_imm",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_alu_membase_imm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_alu_membase_imm",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_alu_membase_imm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_alu_membase_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_alu_membase_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_alu_membase_reg",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_alu_membase_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_alu_reg8_reg8",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Word8 -\u003e Bool -\u003e Bool -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_alu_reg8_reg8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_alu_reg8_reg8",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eBool-\u003eBool-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eBool-\u003eBool-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_alu_reg8_reg8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_alu_reg_imm",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Int -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_alu_reg_imm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_alu_reg_imm",
          "normalized": "Word-\u003eWord-\u003eInt-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eInt-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_alu_reg_imm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_alu_reg_mem",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_alu_reg_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_alu_reg_mem",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_alu_reg_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_alu_reg_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_alu_reg_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_alu_reg_membase",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_alu_reg_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_alu_reg_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_alu_reg_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_alu_reg_reg",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_alu_reg_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_and",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_cmp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_and",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_branch",
          "package": "harpy",
          "signature": "Int -\u003e Int -\u003e Bool -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_branch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_branch",
          "normalized": "Int-\u003eInt-\u003eBool-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Int-\u003eInt-\u003eBool-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_branch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_branch32",
          "package": "harpy",
          "signature": "Int -\u003e Word32 -\u003e Bool -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_branch32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_branch32",
          "normalized": "Int-\u003eWord-\u003eBool-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Int-\u003eWord-\u003eBool-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_branch32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_branch8",
          "package": "harpy",
          "signature": "Int -\u003e Word8 -\u003e Bool -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_branch8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_branch8",
          "normalized": "Int-\u003eWord-\u003eBool-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Int-\u003eWord-\u003eBool-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_branch8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_branch_pointer",
          "package": "harpy",
          "signature": "Int -\u003e Ptr a -\u003e Bool -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_branch_pointer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_branch_pointer",
          "normalized": "Int-\u003ePtr a-\u003eBool-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Int-\u003ePtr a-\u003eBool-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_branch_pointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_breakpoint",
          "package": "harpy",
          "signature": "CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_breakpoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_breakpoint",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_breakpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitvector mask for byte-adressable registers\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_byte_regs",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_byte_regs",
          "type": "function"
        },
        "index": {
          "description": "Bitvector mask for byte-adressable registers",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_byte_regs",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_byte_regs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_call_code",
          "package": "harpy",
          "signature": "Int -\u003e CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_call_code",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_call_code",
          "normalized": "Int-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Int-\u003eCodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_call_code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_call_hs",
          "package": "harpy",
          "signature": "FunPtr a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_call_hs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_call_hs",
          "normalized": "FunPtr a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "FunPtr a-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_call_hs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_call_imm",
          "package": "harpy",
          "signature": "Word32 -\u003e CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_call_imm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_call_imm",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_call_imm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_call_mem",
          "package": "harpy",
          "signature": "Word32 -\u003e CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_call_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_call_mem",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_call_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_call_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_call_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_call_membase",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_call_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_call_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_call_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_call_reg",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_call_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitvector mask for callee-saved registers\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_callee_regs",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_callee_regs",
          "type": "function"
        },
        "index": {
          "description": "Bitvector mask for callee-saved registers",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_callee_regs",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_callee_regs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitvector mask for caller-saved registers\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_caller_regs",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_caller_regs",
          "type": "function"
        },
        "index": {
          "description": "Bitvector mask for caller-saved registers",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_caller_regs",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_caller_regs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_a",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_cc_a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_a",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_a"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_ae",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_cc_a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_ae",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_ae"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_b",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_cc_b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_b",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_b"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_be",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_cc_b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_be",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_be"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_c",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_cc_b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_c",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_c"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_e",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_cc_no",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_e",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_e"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_eq",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_cc_no",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_eq",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_ge",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_cc_a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_ge",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_ge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_gez",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_cc_lz",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_gez",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_gez"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_gt",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_cc_gt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_gt",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_gt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_le",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_cc_b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_le",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_le"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_lt",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_cc_no",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_lt",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_lt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_lz",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_cc_lz",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_lz",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_lz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_na",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_cc_b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_na",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_na"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_nae",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_cc_b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_nae",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_nae"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_nb",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_cc_a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_nb",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_nb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_nbe",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_cc_a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_nbe",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_nbe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_nc",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_cc_a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_nc",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_nc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_ne",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_cc_no",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_ne",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_ne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_no",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_cc_no",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_no",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_no"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_np",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_cc_np",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_np",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_np"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_ns",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_cc_lz",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_ns",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_ns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_nz",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_cc_no",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_nz",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_nz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_o",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_cc_np",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_o",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_o"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_p",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_cc_lz",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_p",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_p"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_pe",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_cc_lz",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_pe",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_pe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_po",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_cc_np",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_po",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_po"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_s",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_cc_lz",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_s",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_z",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_cc_no",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cc_z",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cdq",
          "package": "harpy",
          "signature": "CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_cdq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cdq",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cdq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cld",
          "package": "harpy",
          "signature": "CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_breakpoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cld",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cld"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cmov_mem",
          "package": "harpy",
          "signature": "Int -\u003e Bool -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_cmov_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cmov_mem",
          "normalized": "Int-\u003eBool-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Int-\u003eBool-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cmov_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cmov_membase",
          "package": "harpy",
          "signature": "Int -\u003e Bool -\u003e Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_cmov_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cmov_membase",
          "normalized": "Int-\u003eBool-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Int-\u003eBool-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cmov_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cmov_reg",
          "package": "harpy",
          "signature": "Int -\u003e Bool -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_cmov_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cmov_reg",
          "normalized": "Int-\u003eBool-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Int-\u003eBool-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cmov_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cmp",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_cmp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cmp",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cmpxchg_mem_reg",
          "package": "harpy",
          "signature": "Word32 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_cmpxchg_mem_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cmpxchg_mem_reg",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cmpxchg_mem_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cmpxchg_membase_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_cmpxchg_membase_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cmpxchg_membase_reg",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cmpxchg_membase_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cmpxchg_reg_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_cmpxchg_reg_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cmpxchg_reg_reg",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cmpxchg_reg_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_comisd_reg_mem",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_comisd_reg_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_comisd_reg_mem",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_comisd_reg_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_comisd_reg_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_comisd_reg_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_comisd_reg_membase",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_comisd_reg_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_comisd_reg_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_comisd_reg_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_comisd_reg_reg",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_comisd_reg_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_comiss_reg_mem",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_comiss_reg_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_comiss_reg_mem",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_comiss_reg_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_comiss_reg_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_comiss_reg_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_comiss_reg_membase",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_comiss_reg_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_comiss_reg_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_comiss_reg_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_comiss_reg_reg",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_comiss_reg_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix codes\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cs_prefix",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_lock_prefix",
          "type": "function"
        },
        "index": {
          "description": "Prefix codes",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cs_prefix",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cs_prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cvtdq2ps",
          "package": "harpy",
          "signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_cvtdq2ps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cvtdq2ps",
          "normalized": "Word-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003exmm-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cvtdq2ps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_cvttps2dq",
          "package": "harpy",
          "signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_cvttps2dq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_cvttps2dq",
          "normalized": "Word-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003exmm-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cvttps2dq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_dec_mem",
          "package": "harpy",
          "signature": "Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_dec_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_dec_mem",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_dec_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_dec_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_dec_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_dec_membase",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_dec_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_dec_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_dec_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_dec_reg",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_dec_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_div_mem",
          "package": "harpy",
          "signature": "Word32 -\u003e Bool -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_div_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_div_mem",
          "normalized": "Word-\u003eBool-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eBool-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_div_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_div_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e Bool -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_div_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_div_membase",
          "normalized": "Word-\u003eWord-\u003eBool-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eBool-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_div_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_div_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e Bool -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_div_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_div_reg",
          "normalized": "Word-\u003eBool-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eBool-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_div_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_div_sse_reg_mem",
          "package": "harpy",
          "signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_div_sse_reg_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_div_sse_reg_mem",
          "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_div_sse_reg_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_div_sse_reg_membase",
          "package": "harpy",
          "signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_div_sse_reg_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_div_sse_reg_membase",
          "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_div_sse_reg_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_div_sse_reg_reg",
          "package": "harpy",
          "signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_div_sse_reg_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_div_sse_reg_reg",
          "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_div_sse_reg_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix codes\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_ds_prefix",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_lock_prefix",
          "type": "function"
        },
        "index": {
          "description": "Prefix codes",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_ds_prefix",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ds_prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_dword_size",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_dword_size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_dword_size",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_dword_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_eax",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_eax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_eax",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_eax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_eax_mask",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_edi_mask",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_eax_mask",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_eax_mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_ebp",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_eax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_ebp",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ebp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_ebp_mask",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_edi_mask",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_ebp_mask",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ebp_mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_ebx",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_eax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_ebx",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ebx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_ebx_mask",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_edi_mask",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_ebx_mask",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ebx_mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_ecx",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_eax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_ecx",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ecx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_ecx_mask",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_edi_mask",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_ecx_mask",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ecx_mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_edi",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_eax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_edi",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_edi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_edi_mask",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_edi_mask",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_edi_mask",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_edi_mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_edx",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_eax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_edx",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_edx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_edx_mask",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_edi_mask",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_edx_mask",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_edx_mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_enter",
          "package": "harpy",
          "signature": "Word16 -\u003e CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_enter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_enter",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_enter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_epilog",
          "package": "harpy",
          "signature": "Int -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_epilog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_epilog",
          "normalized": "Int-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Int-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_epilog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix codes\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_es_prefix",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_lock_prefix",
          "type": "function"
        },
        "index": {
          "description": "Prefix codes",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_es_prefix",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_es_prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_esi",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_eax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_esi",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_esi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_esi_mask",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_edi_mask",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_esi_mask",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_esi_mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_esp",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_eax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_esp",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_esp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fabs",
          "package": "harpy",
          "signature": "CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fsin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fabs",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fabs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fadd",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_fadd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fadd",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fadd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fchs",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fchs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fchs",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fchs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fcom",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_fadd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fcom",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fcom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fcomi",
          "package": "harpy",
          "signature": "Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fcomi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fcomi",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fcomi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fcomip",
          "package": "harpy",
          "signature": "Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fcomip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fcomip",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fcomip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fcomp",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_fadd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fcomp",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fcomp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fcompp",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fcompp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fcompp",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fcompp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fcos",
          "package": "harpy",
          "signature": "CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fsin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fcos",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fcos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fdecstp",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fdecstp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fdecstp",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fdecstp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fdiv",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_fdiv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fdiv",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fdiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fdivr",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_fdiv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fdivr",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fdivr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fild",
          "package": "harpy",
          "signature": "Word32 -\u003e FIntSize -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fild",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fild",
          "normalized": "Word-\u003eFIntSize-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eFIntSize-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fild"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fild_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e FIntSize -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fild_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fild_membase",
          "normalized": "Word-\u003eWord-\u003eFIntSize-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eFIntSize-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fild_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fincstp",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fincstp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fincstp",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fincstp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fist_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e FIntSize -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fist_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fist_membase",
          "normalized": "Word-\u003eWord-\u003eFIntSize-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eFIntSize-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fist_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fist_pop",
          "package": "harpy",
          "signature": "Word32 -\u003e FIntSize -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fist_pop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fist_pop",
          "normalized": "Word-\u003eFIntSize-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eFIntSize-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fist_pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fist_pop_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e FIntSize -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fist_pop_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fist_pop_membase",
          "normalized": "Word-\u003eWord-\u003eFIntSize-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eFIntSize-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fist_pop_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fld",
          "package": "harpy",
          "signature": "Word32 -\u003e Bool -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fld",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fld",
          "normalized": "Word-\u003eBool-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eBool-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fld"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fld1",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fld1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fld1",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fld1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fld80_mem",
          "package": "harpy",
          "signature": "Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fld80_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fld80_mem",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fld80_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fld80_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fld80_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fld80_membase",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fld80_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fld_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e Bool -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fld_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fld_membase",
          "normalized": "Word-\u003eWord-\u003eBool-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eBool-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fld_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fld_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fld_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fld_reg",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fld_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fldcw",
          "package": "harpy",
          "signature": "Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fldcw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fldcw",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fldcw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fldcw_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fldcw_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fldcw_membase",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fldcw_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fldpi",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fldpi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fldpi",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fldpi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fldz",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fldz",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fldz",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fldz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fmul",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_fadd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fmul",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fmul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fnstcw",
          "package": "harpy",
          "signature": "Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fnstcw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fnstcw",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fnstcw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fnstcw_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fnstcw_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fnstcw_membase",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fnstcw_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fnstsw",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fnstsw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fnstsw",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fnstsw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFP status\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fp_c0",
          "package": "harpy",
          "signature": "Word32",
          "source": "src/Harpy-X86CodeGen.html#x86_fp_c0",
          "type": "function"
        },
        "index": {
          "description": "FP status",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fp_c0",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fp_c0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFP status\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fp_c1",
          "package": "harpy",
          "signature": "Word32",
          "source": "src/Harpy-X86CodeGen.html#x86_fp_c0",
          "type": "function"
        },
        "index": {
          "description": "FP status",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fp_c1",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fp_c1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFP status\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fp_c2",
          "package": "harpy",
          "signature": "Word32",
          "source": "src/Harpy-X86CodeGen.html#x86_fp_c0",
          "type": "function"
        },
        "index": {
          "description": "FP status",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fp_c2",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fp_c2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFP status\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fp_c3",
          "package": "harpy",
          "signature": "Word32",
          "source": "src/Harpy-X86CodeGen.html#x86_fp_c0",
          "type": "function"
        },
        "index": {
          "description": "FP status",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fp_c3",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fp_c3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFP status\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fp_cc_mask",
          "package": "harpy",
          "signature": "Word32",
          "source": "src/Harpy-X86CodeGen.html#x86_fp_c0",
          "type": "function"
        },
        "index": {
          "description": "FP status",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fp_cc_mask",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fp_cc_mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fp_int_op_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e Bool -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fp_int_op_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fp_int_op_membase",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eBool-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eBool-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fp_int_op_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fp_op",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fp_op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fp_op",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fp_op"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fp_op_mem",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e Bool -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fp_op_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fp_op_mem",
          "normalized": "Word-\u003eWord-\u003eBool-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eBool-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fp_op_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fp_op_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e Bool -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fp_op_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fp_op_membase",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eBool-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eBool-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fp_op_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fp_op_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Bool -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fp_op_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fp_op_reg",
          "normalized": "Word-\u003eWord-\u003eBool-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eBool-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fp_op_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpatan",
          "package": "harpy",
          "signature": "CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fsin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpatan",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpatan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFP control word\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_denopex_mask",
          "package": "harpy",
          "signature": "Word32",
          "source": "src/Harpy-X86CodeGen.html#x86_fpcw_invopex_mask",
          "type": "function"
        },
        "index": {
          "description": "FP control word",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_denopex_mask",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_denopex_mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFP control word\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_invopex_mask",
          "package": "harpy",
          "signature": "Word32",
          "source": "src/Harpy-X86CodeGen.html#x86_fpcw_invopex_mask",
          "type": "function"
        },
        "index": {
          "description": "FP control word",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_invopex_mask",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_invopex_mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFP control word\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_ovfex_mask",
          "package": "harpy",
          "signature": "Word32",
          "source": "src/Harpy-X86CodeGen.html#x86_fpcw_invopex_mask",
          "type": "function"
        },
        "index": {
          "description": "FP control word",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_ovfex_mask",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_ovfex_mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValues for precision control\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_prec_double",
          "package": "harpy",
          "signature": "Word32",
          "source": "src/Harpy-X86CodeGen.html#x86_fpcw_prec_single",
          "type": "function"
        },
        "index": {
          "description": "Values for precision control",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_prec_double",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_prec_double"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValues for precision control\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_prec_extended",
          "package": "harpy",
          "signature": "Word32",
          "source": "src/Harpy-X86CodeGen.html#x86_fpcw_prec_single",
          "type": "function"
        },
        "index": {
          "description": "Values for precision control",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_prec_extended",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_prec_extended"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValues for precision control\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_prec_single",
          "package": "harpy",
          "signature": "Word32",
          "source": "src/Harpy-X86CodeGen.html#x86_fpcw_prec_single",
          "type": "function"
        },
        "index": {
          "description": "Values for precision control",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_prec_single",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_prec_single"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFP control word\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_precc_mask",
          "package": "harpy",
          "signature": "Word32",
          "source": "src/Harpy-X86CodeGen.html#x86_fpcw_invopex_mask",
          "type": "function"
        },
        "index": {
          "description": "FP control word",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_precc_mask",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_precc_mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFP control word\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_precex_mask",
          "package": "harpy",
          "signature": "Word32",
          "source": "src/Harpy-X86CodeGen.html#x86_fpcw_invopex_mask",
          "type": "function"
        },
        "index": {
          "description": "FP control word",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_precex_mask",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_precex_mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValues for rounding control\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_round_down",
          "package": "harpy",
          "signature": "Word32",
          "source": "src/Harpy-X86CodeGen.html#x86_fpcw_round_nearest",
          "type": "function"
        },
        "index": {
          "description": "Values for rounding control",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_round_down",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_round_down"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValues for rounding control\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_round_nearest",
          "package": "harpy",
          "signature": "Word32",
          "source": "src/Harpy-X86CodeGen.html#x86_fpcw_round_nearest",
          "type": "function"
        },
        "index": {
          "description": "Values for rounding control",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_round_nearest",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_round_nearest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValues for rounding control\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_round_tozero",
          "package": "harpy",
          "signature": "Word32",
          "source": "src/Harpy-X86CodeGen.html#x86_fpcw_round_nearest",
          "type": "function"
        },
        "index": {
          "description": "Values for rounding control",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_round_tozero",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_round_tozero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValues for rounding control\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_round_up",
          "package": "harpy",
          "signature": "Word32",
          "source": "src/Harpy-X86CodeGen.html#x86_fpcw_round_nearest",
          "type": "function"
        },
        "index": {
          "description": "Values for rounding control",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_round_up",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_round_up"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFP control word\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_roundc_mask",
          "package": "harpy",
          "signature": "Word32",
          "source": "src/Harpy-X86CodeGen.html#x86_fpcw_invopex_mask",
          "type": "function"
        },
        "index": {
          "description": "FP control word",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_roundc_mask",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_roundc_mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFP control word\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_undfex_mask",
          "package": "harpy",
          "signature": "Word32",
          "source": "src/Harpy-X86CodeGen.html#x86_fpcw_invopex_mask",
          "type": "function"
        },
        "index": {
          "description": "FP control word",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_undfex_mask",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_undfex_mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFP control word\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_zerodiv_mask",
          "package": "harpy",
          "signature": "Word32",
          "source": "src/Harpy-X86CodeGen.html#x86_fpcw_invopex_mask",
          "type": "function"
        },
        "index": {
          "description": "FP control word",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fpcw_zerodiv_mask",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_zerodiv_mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fprem",
          "package": "harpy",
          "signature": "CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fsin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fprem",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fprem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fprem1",
          "package": "harpy",
          "signature": "CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fsin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fprem1",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fprem1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fptan",
          "package": "harpy",
          "signature": "CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fsin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fptan",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fptan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_frem",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_frem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_frem",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_frem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_frndint",
          "package": "harpy",
          "signature": "CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fsin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_frndint",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_frndint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix codes\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fs_prefix",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_lock_prefix",
          "type": "function"
        },
        "index": {
          "description": "Prefix codes",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fs_prefix",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fs_prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fsin",
          "package": "harpy",
          "signature": "CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fsin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fsin",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fsin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fsqrt",
          "package": "harpy",
          "signature": "CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fsin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fsqrt",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fsqrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fst",
          "package": "harpy",
          "signature": "Word32 -\u003e Bool -\u003e Bool -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fst",
          "normalized": "Word-\u003eBool-\u003eBool-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eBool-\u003eBool-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fst80_mem",
          "package": "harpy",
          "signature": "Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fst80_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fst80_mem",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fst80_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fst80_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fst80_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fst80_membase",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fst80_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fst_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e Bool -\u003e Bool -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fst_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fst_membase",
          "normalized": "Word-\u003eWord-\u003eBool-\u003eBool-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eBool-\u003eBool-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fst_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fstp",
          "package": "harpy",
          "signature": "Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fstp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fstp",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fstp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fstsw",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fstsw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fstsw",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fstsw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fsub",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_fadd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fsub",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fsub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fsubr",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_fadd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fsubr",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fsubr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_ftst",
          "package": "harpy",
          "signature": "CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fsin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_ftst",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ftst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fucomi",
          "package": "harpy",
          "signature": "Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fucomi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fucomi",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fucomi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fucomip",
          "package": "harpy",
          "signature": "Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fucomip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fucomip",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fucomip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fucompp",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fucompp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fucompp",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fucompp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fxam",
          "package": "harpy",
          "signature": "CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fsin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fxam",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fxam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_fxch",
          "package": "harpy",
          "signature": "Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_fxch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_fxch",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fxch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix codes\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_gs_prefix",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_lock_prefix",
          "type": "function"
        },
        "index": {
          "description": "Prefix codes",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_gs_prefix",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_gs_prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_haddpd",
          "package": "harpy",
          "signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_haddpd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_haddpd",
          "normalized": "Word-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003exmm-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_haddpd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_haddps",
          "package": "harpy",
          "signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_haddps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_haddps",
          "normalized": "Word-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003exmm-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_haddps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a 16-bit constant to the instruction stream.\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_imm_emit16",
          "package": "harpy",
          "signature": "Word16 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_imm_emit16",
          "type": "function"
        },
        "index": {
          "description": "Emit bit constant to the instruction stream",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_imm_emit16",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_imm_emit16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a 32-bit constant to the instruction stream.\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_imm_emit32",
          "package": "harpy",
          "signature": "Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_imm_emit32",
          "type": "function"
        },
        "index": {
          "description": "Emit bit constant to the instruction stream",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_imm_emit32",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_imm_emit32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a 8-bit constant to the instruction stream.\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_imm_emit8",
          "package": "harpy",
          "signature": "Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_imm_emit8",
          "type": "function"
        },
        "index": {
          "description": "Emit bit constant to the instruction stream",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_imm_emit8",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_imm_emit8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_imul_reg_mem",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_imul_reg_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_imul_reg_mem",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_imul_reg_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_imul_reg_mem_imm",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_imul_reg_mem_imm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_imul_reg_mem_imm",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_imul_reg_mem_imm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_imul_reg_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_imul_reg_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_imul_reg_membase",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_imul_reg_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_imul_reg_membase_imm",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_imul_reg_membase_imm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_imul_reg_membase_imm",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_imul_reg_membase_imm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_imul_reg_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_imul_reg_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_imul_reg_reg",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_imul_reg_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_imul_reg_reg_imm",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_imul_reg_reg_imm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_imul_reg_reg_imm",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_imul_reg_reg_imm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_inc_mem",
          "package": "harpy",
          "signature": "Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_inc_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_inc_mem",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_inc_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_inc_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_inc_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_inc_membase",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_inc_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_inc_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_inc_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_inc_reg",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_inc_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true when the given register is caller-saved.\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_is_callee",
          "package": "harpy",
          "signature": "Int -\u003e Bool",
          "source": "src/Harpy-X86CodeGen.html#x86_is_callee",
          "type": "function"
        },
        "index": {
          "description": "Returns true when the given register is caller-saved",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_is_callee",
          "normalized": "Int-\u003eBool",
          "package": "harpy",
          "signature": "Int-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_is_callee"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true when the given register is caller-saved.\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_is_scratch",
          "package": "harpy",
          "signature": "Int -\u003e Bool",
          "source": "src/Harpy-X86CodeGen.html#x86_is_scratch",
          "type": "function"
        },
        "index": {
          "description": "Returns true when the given register is caller-saved",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_is_scratch",
          "normalized": "Int-\u003eBool",
          "package": "harpy",
          "signature": "Int-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_is_scratch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_jecxz",
          "package": "harpy",
          "signature": "Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_jecxz",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_jecxz",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_jecxz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_jump32",
          "package": "harpy",
          "signature": "Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_jump32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_jump32",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_jump32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_jump8",
          "package": "harpy",
          "signature": "Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_jump8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_jump8",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_jump8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_jump_mem",
          "package": "harpy",
          "signature": "Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_jump_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_jump_mem",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_jump_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_jump_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_jump_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_jump_membase",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_jump_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_jump_pointer",
          "package": "harpy",
          "signature": "Ptr a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_jump_pointer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_jump_pointer",
          "normalized": "Ptr a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Ptr a-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_jump_pointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_jump_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_jump_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_jump_reg",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_jump_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_lea_mem",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_lea_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_lea_mem",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_lea_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_lea_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_lea_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_lea_membase",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_lea_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_lea_memindex",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_lea_memindex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_lea_memindex",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_lea_memindex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_leave",
          "package": "harpy",
          "signature": "CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_leave",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_leave",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_leave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix codes\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_likely_prefix",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_lock_prefix",
          "type": "function"
        },
        "index": {
          "description": "Prefix codes",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_likely_prefix",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_likely_prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix codes\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_lock_prefix",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_lock_prefix",
          "type": "function"
        },
        "index": {
          "description": "Prefix codes",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_lock_prefix",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_lock_prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_loop",
          "package": "harpy",
          "signature": "Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_loop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_loop",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_loope",
          "package": "harpy",
          "signature": "Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_loope",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_loope",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_loope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_loopne",
          "package": "harpy",
          "signature": "Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_loopne",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_loopne",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_loopne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximal length of an x86 instruction in bytes.\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_max_instruction_bytes",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_max_instruction_bytes",
          "type": "function"
        },
        "index": {
          "description": "Maximal length of an x86 instruction in bytes",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_max_instruction_bytes",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_max_instruction_bytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_max_sse_reg_mem",
          "package": "harpy",
          "signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_max_sse_reg_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_max_sse_reg_mem",
          "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_max_sse_reg_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_max_sse_reg_membase",
          "package": "harpy",
          "signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_max_sse_reg_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_max_sse_reg_membase",
          "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_max_sse_reg_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_max_sse_reg_reg",
          "package": "harpy",
          "signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_max_sse_reg_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_max_sse_reg_reg",
          "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_max_sse_reg_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmit a mem+base address encoding\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_membase_emit",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_membase_emit",
          "type": "function"
        },
        "index": {
          "description": "Emit mem base address encoding",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_membase_emit",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_membase_emit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_min_sse_reg_mem",
          "package": "harpy",
          "signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_min_sse_reg_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_min_sse_reg_mem",
          "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_min_sse_reg_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_min_sse_reg_membase",
          "package": "harpy",
          "signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_min_sse_reg_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_min_sse_reg_membase",
          "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_min_sse_reg_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_min_sse_reg_reg",
          "package": "harpy",
          "signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_min_sse_reg_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_min_sse_reg_reg",
          "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_min_sse_reg_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_mem_imm",
          "package": "harpy",
          "signature": "Word32 -\u003e Word32 -\u003e a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_mov_mem_imm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_mem_imm",
          "normalized": "Word-\u003eWord-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003ea-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_mem_imm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_mem_reg",
          "package": "harpy",
          "signature": "Word32 -\u003e Word8 -\u003e t -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_mov_mem_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_mem_reg",
          "normalized": "Word-\u003eWord-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003et-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_mem_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_membase_imm",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e Word32 -\u003e a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_mov_membase_imm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_membase_imm",
          "normalized": "Word-\u003eWord-\u003eWord-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003ea-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_membase_imm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_membase_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e Word8 -\u003e t -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_mov_membase_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_membase_reg",
          "normalized": "Word-\u003eWord-\u003eWord-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003et-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_membase_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_memindex_imm",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e Word8 -\u003e Word8 -\u003e Word32 -\u003e a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_mov_memindex_imm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_memindex_imm",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003ea-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_memindex_imm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_memindex_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e Word8 -\u003e Word8 -\u003e Word8 -\u003e t -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_mov_memindex_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_memindex_reg",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003et-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_memindex_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_reg_imm",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_mov_reg_imm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_reg_imm",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_reg_imm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_reg_mem",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e t -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_mov_reg_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_reg_mem",
          "normalized": "Word-\u003eWord-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003et-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_reg_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_reg_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e t -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_mov_reg_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_reg_membase",
          "normalized": "Word-\u003eWord-\u003eWord-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003et-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_reg_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_reg_memindex",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e Word8 -\u003e Word8 -\u003e t -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_mov_reg_memindex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_reg_memindex",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003et-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_reg_memindex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_reg_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e t -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_mov_reg_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_reg_reg",
          "normalized": "Word-\u003eWord-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003et-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_reg_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_reg_regp",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e t -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_mov_reg_regp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_reg_regp",
          "normalized": "Word-\u003eWord-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003et-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_reg_regp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_regp_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e t -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_mov_regp_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_regp_reg",
          "normalized": "Word-\u003eWord-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003et-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_regp_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_sse_mem_reg",
          "package": "harpy",
          "signature": "X86_SSE_PFX -\u003e Word32 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_mov_sse_mem_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_sse_mem_reg",
          "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_sse_mem_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_sse_membase_reg",
          "package": "harpy",
          "signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word32 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_mov_sse_membase_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_sse_membase_reg",
          "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_sse_membase_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_sse_reg_mem",
          "package": "harpy",
          "signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_mov_sse_reg_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_sse_reg_mem",
          "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_sse_reg_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_sse_reg_membase",
          "package": "harpy",
          "signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_mov_sse_reg_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_sse_reg_membase",
          "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_sse_reg_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_sse_reg_reg",
          "package": "harpy",
          "signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_mov_sse_reg_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_mov_sse_reg_reg",
          "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_sse_reg_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003exmm must not be a register\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_movlpd_from_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_movlpd_from_reg",
          "type": "function"
        },
        "index": {
          "description": "xmm must not be register",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_movlpd_from_reg",
          "normalized": "Word-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003exmm-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movlpd_from_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003exmm must not be a register\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_movlpd_to_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_movlpd_to_reg",
          "type": "function"
        },
        "index": {
          "description": "xmm must not be register",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_movlpd_to_reg",
          "normalized": "Word-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003exmm-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movlpd_to_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003exmm must not be a register\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_movlps_from_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_movlps_from_reg",
          "type": "function"
        },
        "index": {
          "description": "xmm must not be register",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_movlps_from_reg",
          "normalized": "Word-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003exmm-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movlps_from_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003exmm must not be a register\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_movlps_to_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_movlps_to_reg",
          "type": "function"
        },
        "index": {
          "description": "xmm must not be register",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_movlps_to_reg",
          "normalized": "Word-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003exmm-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movlps_to_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_movsb",
          "package": "harpy",
          "signature": "CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_breakpoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_movsb",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movsb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_movsd",
          "package": "harpy",
          "signature": "CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_breakpoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_movsd",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movsd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_movsd_from_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_movsd_from_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_movsd_from_reg",
          "normalized": "Word-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003exmm-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movsd_from_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_movsd_to_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_movsd_to_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_movsd_to_reg",
          "normalized": "Word-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003exmm-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movsd_to_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_movsl",
          "package": "harpy",
          "signature": "CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_breakpoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_movsl",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movsl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_movss_from_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_movss_from_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_movss_from_reg",
          "normalized": "Word-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003exmm-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movss_from_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_movss_to_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_movss_to_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_movss_to_reg",
          "normalized": "Word-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003exmm-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movss_to_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_movupd_from_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_movupd_from_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_movupd_from_reg",
          "normalized": "Word-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003exmm-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movupd_from_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_movupd_to_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_movupd_to_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_movupd_to_reg",
          "normalized": "Word-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003exmm-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movupd_to_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_movups_from_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_movups_from_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_movups_from_reg",
          "normalized": "Word-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003exmm-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movups_from_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_movups_to_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_movups_to_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_movups_to_reg",
          "normalized": "Word-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003exmm-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movups_to_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_mul_mem",
          "package": "harpy",
          "signature": "Word32 -\u003e Bool -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_mul_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_mul_mem",
          "normalized": "Word-\u003eBool-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eBool-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mul_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_mul_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e Bool -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_mul_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_mul_membase",
          "normalized": "Word-\u003eWord-\u003eBool-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eBool-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mul_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_mul_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e Bool -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_mul_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_mul_reg",
          "normalized": "Word-\u003eBool-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eBool-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mul_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_mul_sse_reg_mem",
          "package": "harpy",
          "signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_mul_sse_reg_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_mul_sse_reg_mem",
          "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mul_sse_reg_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_mul_sse_reg_membase",
          "package": "harpy",
          "signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_mul_sse_reg_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_mul_sse_reg_membase",
          "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mul_sse_reg_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_mul_sse_reg_reg",
          "package": "harpy",
          "signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_mul_sse_reg_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_mul_sse_reg_reg",
          "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mul_sse_reg_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_neg_mem",
          "package": "harpy",
          "signature": "Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_neg_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_neg_mem",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_neg_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_neg_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_neg_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_neg_membase",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_neg_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_neg_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_neg_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_neg_reg",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_neg_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to encode the fact that no base register is used in an\n instruction.\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_nobasereg",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_nobasereg",
          "type": "function"
        },
        "index": {
          "description": "Used to encode the fact that no base register is used in an instruction",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_nobasereg",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_nobasereg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_nop",
          "package": "harpy",
          "signature": "CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_nop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_nop",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_nop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_not_mem",
          "package": "harpy",
          "signature": "Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_not_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_not_mem",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_not_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_not_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_not_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_not_membase",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_not_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_not_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_not_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_not_reg",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_not_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix codes\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_operand_prefix",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_lock_prefix",
          "type": "function"
        },
        "index": {
          "description": "Prefix codes",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_operand_prefix",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_operand_prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_or",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_cmp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_or",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_padding",
          "package": "harpy",
          "signature": "t -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_padding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_padding",
          "normalized": "a-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "t-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_padding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_pop_mem",
          "package": "harpy",
          "signature": "Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_pop_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_pop_mem",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_pop_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_pop_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_pop_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_pop_membase",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_pop_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_pop_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_pop_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_pop_reg",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_pop_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_popad",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_popad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_popad",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_popad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_popfd",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_popfd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_popfd",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_popfd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_prefetch0_mem",
          "package": "harpy",
          "signature": "Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_prefetch0_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_prefetch0_mem",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_prefetch0_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_prefetch0_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_prefetch0_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_prefetch0_membase",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_prefetch0_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_prefetch0_regp",
          "package": "harpy",
          "signature": "Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_prefetch0_regp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_prefetch0_regp",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_prefetch0_regp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_prefetch1_mem",
          "package": "harpy",
          "signature": "Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_prefetch1_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_prefetch1_mem",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_prefetch1_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_prefetch1_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_prefetch1_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_prefetch1_membase",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_prefetch1_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_prefetch1_regp",
          "package": "harpy",
          "signature": "Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_prefetch1_regp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_prefetch1_regp",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_prefetch1_regp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_prefetch2_mem",
          "package": "harpy",
          "signature": "Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_prefetch2_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_prefetch2_mem",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_prefetch2_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_prefetch2_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_prefetch2_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_prefetch2_membase",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_prefetch2_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_prefetch2_regp",
          "package": "harpy",
          "signature": "Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_prefetch2_regp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_prefetch2_regp",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_prefetch2_regp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_prefetchnta_mem",
          "package": "harpy",
          "signature": "Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_prefetchnta_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_prefetchnta_mem",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_prefetchnta_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_prefetchnta_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_prefetchnta_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_prefetchnta_membase",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_prefetchnta_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_prefetchnta_regp",
          "package": "harpy",
          "signature": "Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_prefetchnta_regp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_prefetchnta_regp",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_prefetchnta_regp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_prefix",
          "package": "harpy",
          "signature": "Word8 -\u003e CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_prefix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_prefix",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_prolog",
          "package": "harpy",
          "signature": "Int -\u003e Int -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_prolog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_prolog",
          "normalized": "Int-\u003eInt-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Int-\u003eInt-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_prolog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_push_imm",
          "package": "harpy",
          "signature": "Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_push_imm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_push_imm",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_push_imm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_push_imm_template",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_push_imm_template",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_push_imm_template",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_push_imm_template"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_push_mem",
          "package": "harpy",
          "signature": "Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_push_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_push_mem",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_push_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_push_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_push_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_push_membase",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_push_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_push_memindex",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_push_memindex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_push_memindex",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_push_memindex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_push_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_push_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_push_reg",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_push_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_push_regp",
          "package": "harpy",
          "signature": "Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_push_regp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_push_regp",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_push_regp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_pushad",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_pushad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_pushad",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_pushad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_pushfd",
          "package": "harpy",
          "signature": "CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_pushfd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_pushfd",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_pushfd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_qword_size",
          "package": "harpy",
          "signature": "Int",
          "source": "src/Harpy-X86CodeGen.html#x86_dword_size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_qword_size",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_qword_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_rcl",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_sar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_rcl",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_rcl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_rcr",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_sar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_rcr",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_rcr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_rdtsc",
          "package": "harpy",
          "signature": "CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_rdtsc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_rdtsc",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_rdtsc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix codes\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_rep_prefix",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_lock_prefix",
          "type": "function"
        },
        "index": {
          "description": "Prefix codes",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_rep_prefix",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_rep_prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix codes\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_repnz_prefix",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_lock_prefix",
          "type": "function"
        },
        "index": {
          "description": "Prefix codes",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_repnz_prefix",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_repnz_prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix codes\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_repz_prefix",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_lock_prefix",
          "type": "function"
        },
        "index": {
          "description": "Prefix codes",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_repz_prefix",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_repz_prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_ret",
          "package": "harpy",
          "signature": "CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_ret",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_ret",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_ret_imm",
          "package": "harpy",
          "signature": "Word16 -\u003e CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_ret_imm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_ret_imm",
          "normalized": "Word-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eCodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ret_imm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_rol",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_sar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_rol",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_rol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_ror",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_sar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_ror",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_sahf",
          "package": "harpy",
          "signature": "CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_sahf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_sahf",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_sahf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_sar",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_sar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_sar",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_sar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_sbb",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_cmp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_sbb",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_sbb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_set_mem",
          "package": "harpy",
          "signature": "Int -\u003e Word32 -\u003e Bool -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_set_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_set_mem",
          "normalized": "Int-\u003eWord-\u003eBool-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Int-\u003eWord-\u003eBool-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_set_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_set_membase",
          "package": "harpy",
          "signature": "Int -\u003e Word8 -\u003e Word32 -\u003e Bool -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_set_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_set_membase",
          "normalized": "Int-\u003eWord-\u003eWord-\u003eBool-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Int-\u003eWord-\u003eWord-\u003eBool-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_set_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_set_reg",
          "package": "harpy",
          "signature": "Int -\u003e Word8 -\u003e Bool -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_set_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_set_reg",
          "normalized": "Int-\u003eWord-\u003eBool-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Int-\u003eWord-\u003eBool-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_set_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_shift_mem",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_shift_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_shift_mem",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shift_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_shift_mem_imm",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_shift_mem_imm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_shift_mem_imm",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shift_mem_imm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_shift_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_shift_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_shift_membase",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shift_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_shift_membase_imm",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_shift_membase_imm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_shift_membase_imm",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shift_membase_imm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_shift_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_shift_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_shift_reg",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shift_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_shift_reg_imm",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_shift_reg_imm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_shift_reg_imm",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shift_reg_imm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_shl",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_sar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_shl",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_shld",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_sar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_shld",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shld"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_shld_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_shld_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_shld_reg",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shld_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_shld_reg_imm",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_shld_reg_imm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_shld_reg_imm",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shld_reg_imm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_shlr",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_sar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_shlr",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shlr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_shr",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_sar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_shr",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_shrd_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_shrd_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_shrd_reg",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shrd_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_shrd_reg_imm",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_shrd_reg_imm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_shrd_reg_imm",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shrd_reg_imm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_shufpd",
          "package": "harpy",
          "signature": "Word8 -\u003e xmm -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_shufpd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_shufpd",
          "normalized": "Word-\u003ea-\u003eWord-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003exmm-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shufpd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_shufps",
          "package": "harpy",
          "signature": "Word8 -\u003e xmm -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_shufps",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_shufps",
          "normalized": "Word-\u003ea-\u003eWord-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003exmm-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shufps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_sqrt_sse_reg_mem",
          "package": "harpy",
          "signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_sqrt_sse_reg_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_sqrt_sse_reg_mem",
          "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_sqrt_sse_reg_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_sqrt_sse_reg_membase",
          "package": "harpy",
          "signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_sqrt_sse_reg_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_sqrt_sse_reg_membase",
          "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_sqrt_sse_reg_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_sqrt_sse_reg_reg",
          "package": "harpy",
          "signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_sqrt_sse_reg_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_sqrt_sse_reg_reg",
          "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_sqrt_sse_reg_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix codes\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_ss_prefix",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_lock_prefix",
          "type": "function"
        },
        "index": {
          "description": "Prefix codes",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_ss_prefix",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ss_prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_sse_pd",
          "package": "harpy",
          "signature": "X86_SSE_PFX",
          "source": "src/Harpy-X86CodeGen.html#x86_sse_sd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_sse_pd",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_sse_pd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_sse_ps",
          "package": "harpy",
          "signature": "X86_SSE_PFX",
          "source": "src/Harpy-X86CodeGen.html#x86_sse_sd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_sse_ps",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_sse_ps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_sse_sd",
          "package": "harpy",
          "signature": "X86_SSE_PFX",
          "source": "src/Harpy-X86CodeGen.html#x86_sse_sd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_sse_sd",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_sse_sd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_sse_ss",
          "package": "harpy",
          "signature": "X86_SSE_PFX",
          "source": "src/Harpy-X86CodeGen.html#x86_sse_sd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_sse_ss",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_sse_ss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_stosb",
          "package": "harpy",
          "signature": "CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_breakpoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_stosb",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_stosb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_stosd",
          "package": "harpy",
          "signature": "CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_breakpoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_stosd",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_stosd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_stosl",
          "package": "harpy",
          "signature": "CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_breakpoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_stosl",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_stosl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_sub",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_cmp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_sub",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_sub_sse_reg_mem",
          "package": "harpy",
          "signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_sub_sse_reg_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_sub_sse_reg_mem",
          "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_sub_sse_reg_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_sub_sse_reg_membase",
          "package": "harpy",
          "signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_sub_sse_reg_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_sub_sse_reg_membase",
          "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_sub_sse_reg_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_sub_sse_reg_reg",
          "package": "harpy",
          "signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_sub_sse_reg_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_sub_sse_reg_reg",
          "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_sub_sse_reg_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_test_mem_imm",
          "package": "harpy",
          "signature": "Word32 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_test_mem_imm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_test_mem_imm",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_test_mem_imm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_test_mem_reg",
          "package": "harpy",
          "signature": "Word32 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_test_mem_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_test_mem_reg",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_test_mem_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_test_membase_imm",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_test_membase_imm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_test_membase_imm",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_test_membase_imm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_test_membase_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_test_membase_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_test_membase_reg",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_test_membase_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_test_reg_imm",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_test_reg_imm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_test_reg_imm",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_test_reg_imm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_test_reg_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_test_reg_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_test_reg_reg",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_test_reg_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_ucomisd_reg_mem",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_ucomisd_reg_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_ucomisd_reg_mem",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ucomisd_reg_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_ucomisd_reg_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_ucomisd_reg_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_ucomisd_reg_membase",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ucomisd_reg_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_ucomisd_reg_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_ucomisd_reg_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_ucomisd_reg_reg",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ucomisd_reg_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_ucomiss_reg_mem",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_ucomiss_reg_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_ucomiss_reg_mem",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ucomiss_reg_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_ucomiss_reg_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_ucomiss_reg_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_ucomiss_reg_membase",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ucomiss_reg_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_ucomiss_reg_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_ucomiss_reg_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_ucomiss_reg_reg",
          "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ucomiss_reg_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix codes\n\u003c/p\u003e",
          "module": "Harpy.X86CodeGen",
          "name": "x86_unlikely_prefix",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_lock_prefix",
          "type": "function"
        },
        "index": {
          "description": "Prefix codes",
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_unlikely_prefix",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_unlikely_prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_wait",
          "package": "harpy",
          "signature": "CodeGen s e ()",
          "source": "src/Harpy-X86CodeGen.html#x86_cdq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_wait",
          "normalized": "CodeGen a b()",
          "package": "harpy",
          "signature": "CodeGen s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_wait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_widen_mem",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e Bool -\u003e Bool -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_widen_mem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_widen_mem",
          "normalized": "Word-\u003eWord-\u003eBool-\u003eBool-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eBool-\u003eBool-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_widen_mem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_widen_membase",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e Bool -\u003e Bool -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_widen_membase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_widen_membase",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eBool-\u003eBool-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eBool-\u003eBool-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_widen_membase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_widen_memindex",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e Word8 -\u003e Word8 -\u003e Bool -\u003e Bool -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_widen_memindex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_widen_memindex",
          "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eBool-\u003eBool-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eBool-\u003eBool-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_widen_memindex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_widen_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e Bool -\u003e Bool -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_widen_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_widen_reg",
          "normalized": "Word-\u003eWord-\u003eBool-\u003eBool-\u003eCodeGen a b()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eBool-\u003eBool-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_widen_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_xadd_mem_reg",
          "package": "harpy",
          "signature": "Word32 -\u003e Word8 -\u003e a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_xadd_mem_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_xadd_mem_reg",
          "normalized": "Word-\u003eWord-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003ea-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_xadd_mem_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_xadd_membase_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e Word8 -\u003e a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_xadd_membase_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_xadd_membase_reg",
          "normalized": "Word-\u003eWord-\u003eWord-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003ea-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_xadd_membase_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_xadd_reg_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_xadd_reg_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_xadd_reg_reg",
          "normalized": "Word-\u003eWord-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003ea-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_xadd_reg_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_xchg_mem_reg",
          "package": "harpy",
          "signature": "Word32 -\u003e Word8 -\u003e a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_xchg_mem_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_xchg_mem_reg",
          "normalized": "Word-\u003eWord-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003ea-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_xchg_mem_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_xchg_membase_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e Word32 -\u003e Word8 -\u003e a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_xchg_membase_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_xchg_membase_reg",
          "normalized": "Word-\u003eWord-\u003eWord-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003eWord-\u003ea-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_xchg_membase_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_xchg_reg_reg",
          "package": "harpy",
          "signature": "Word8 -\u003e Word8 -\u003e a -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#x86_xchg_reg_reg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_xchg_reg_reg",
          "normalized": "Word-\u003eWord-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003eWord-\u003ea-\u003eCodeGen e s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_xchg_reg_reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "x86_xor",
          "package": "harpy",
          "signature": "Word8",
          "source": "src/Harpy-X86CodeGen.html#x86_cmp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "x86_xor",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_xor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Harpy.X86CodeGen",
          "name": "xmm_location_emit",
          "package": "harpy",
          "signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
          "source": "src/Harpy-X86CodeGen.html#xmm_location_emit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Harpy X86CodeGen",
          "module": "Harpy.X86CodeGen",
          "name": "xmm_location_emit",
          "normalized": "Word-\u003ea-\u003eCodeGen b c()",
          "package": "harpy",
          "signature": "Word-\u003exmm-\u003eCodeGen e s()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:xmm_location_emit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDisassembler for x86 machine code.\n\u003c/p\u003e\u003cp\u003eThis is a module for compatibility with earlier Harpy releases.  It\n re-exports the disassembler from the disassembler package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "X86Disassembler",
          "package": "harpy",
          "source": "src/Harpy-X86Disassembler.html",
          "type": "module"
        },
        "index": {
          "description": "Disassembler for x86 machine code This is module for compatibility with earlier Harpy releases It re-exports the disassembler from the disassembler package",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "X86Disassembler",
          "package": "harpy",
          "partial": "Disassembler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome opcodes can operate on data of several widths.  This information\n is encoded in instructions using the following enumeration type..\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "InstrOperandSize",
          "package": "harpy",
          "type": "data"
        },
        "index": {
          "description": "Some opcodes can operate on data of several widths This information is encoded in instructions using the following enumeration type",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "InstrOperandSize",
          "package": "harpy",
          "partial": "Instr Operand Size",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#t:InstrOperandSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe disassembly routines return lists of the following datatype.  It\n encodes both invalid byte sequences (with a useful error message, if\n possible), or a valid instruction.  Both variants contain the list of\n opcode bytes from which the instruction was decoded and the address of\n the instruction.\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "Instruction",
          "package": "harpy",
          "type": "data"
        },
        "index": {
          "description": "The disassembly routines return lists of the following datatype It encodes both invalid byte sequences with useful error message if possible or valid instruction Both variants contain the list of opcode bytes from which the instruction was decoded and the address of the instruction",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "Instruction",
          "package": "harpy",
          "partial": "Instruction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#t:Instruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll opcodes are represented by this enumeration type.\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "Opcode",
          "package": "harpy",
          "type": "data"
        },
        "index": {
          "description": "All opcodes are represented by this enumeration type",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "Opcode",
          "package": "harpy",
          "partial": "Opcode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#t:Opcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll operands are in one of the following locations:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Constants in the instruction stream\n\u003c/li\u003e\u003cli\u003e Memory locations\n\u003c/li\u003e\u003cli\u003e Registers\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMemory locations are referred to by on of several addressing modes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Absolute (address in instruction stream)\n\u003c/li\u003e\u003cli\u003e Register-indirect (address in register)\n\u003c/li\u003e\u003cli\u003e Register-indirect with displacement\n\u003c/li\u003e\u003cli\u003e Base-Index with scale\n\u003c/li\u003e\u003cli\u003e Base-Index with scale and displacement \n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eDisplacements can be encoded as 8 or 32-bit immediates in the\n instruction stream, but are encoded as Int in instructions for\n simplicity.\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "Operand",
          "package": "harpy",
          "type": "data"
        },
        "index": {
          "description": "All operands are in one of the following locations Constants in the instruction stream Memory locations Registers Memory locations are referred to by on of several addressing modes Absolute address in instruction stream Register-indirect address in register Register-indirect with displacement Base-Index with scale Base-Index with scale and displacement Displacements can be encoded as or bit immediates in the instruction stream but are encoded as Int in instructions for simplicity",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "Operand",
          "package": "harpy",
          "partial": "Operand",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#t:Operand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstructions can be displayed either in Intel or AT&T style (like in\n GNU tools).\n\u003c/p\u003e\u003cp\u003eIntel style:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Destination operand comes first, source second.\n\u003c/li\u003e\u003cli\u003e No register or immediate prefixes.\n\u003c/li\u003e\u003cli\u003e Memory operands are annotated with operand size.\n\u003c/li\u003e\u003cli\u003e Hexadecimal numbers are suffixed with \u003ccode\u003eH\u003c/code\u003e and prefixed with \u003ccode\u003e0\u003c/code\u003e if\n   necessary.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAT&T style:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Source operand comes first, destination second.\n\u003c/li\u003e\u003cli\u003e Register names are prefixes with \u003ccode\u003e%\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Immediates are prefixed with \u003ccode\u003e$\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Hexadecimal numbers are prefixes with \u003ccode\u003e0x\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Opcodes are suffixed with operand size, when ambiguous otherwise.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "ShowStyle",
          "package": "harpy",
          "type": "data"
        },
        "index": {
          "description": "Instructions can be displayed either in Intel or AT style like in GNU tools Intel style Destination operand comes first source second No register or immediate prefixes Memory operands are annotated with operand size Hexadecimal numbers are suffixed with and prefixed with if necessary AT style Source operand comes first destination second Register names are prefixes with Immediates are prefixed with Hexadecimal numbers are prefixes with Opcodes are suffixed with operand size when ambiguous otherwise",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "ShowStyle",
          "package": "harpy",
          "partial": "Show Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#t:ShowStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow in AT&T style\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "AttStyle",
          "package": "harpy",
          "signature": "AttStyle",
          "type": "function"
        },
        "index": {
          "description": "Show in AT style",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "AttStyle",
          "package": "harpy",
          "partial": "Att Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:AttStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInvalid instruction\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "BadInstruction",
          "package": "harpy",
          "signature": "BadInstruction Word8 String Int [Word8]",
          "type": "function"
        },
        "index": {
          "description": "Invalid instruction",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "BadInstruction",
          "normalized": "BadInstruction Word String Int[Word]",
          "package": "harpy",
          "partial": "Bad Instruction",
          "signature": "BadInstruction Word String Int[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:BadInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValid instruction\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "Instruction",
          "package": "harpy",
          "signature": "Instruction",
          "type": "function"
        },
        "index": {
          "description": "Valid instruction",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "Instruction",
          "package": "harpy",
          "partial": "Instruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:Instruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow in Intel style\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "IntelStyle",
          "package": "harpy",
          "signature": "IntelStyle",
          "type": "function"
        },
        "index": {
          "description": "Show in Intel style",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "IntelStyle",
          "package": "harpy",
          "partial": "Intel Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:IntelStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e128-bit integer operand\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "OP128",
          "package": "harpy",
          "signature": "OP128",
          "type": "function"
        },
        "index": {
          "description": "bit integer operand",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "OP128",
          "package": "harpy",
          "partial": "OP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OP128"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e16-bit integer operand\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "OP16",
          "package": "harpy",
          "signature": "OP16",
          "type": "function"
        },
        "index": {
          "description": "bit integer operand",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "OP16",
          "package": "harpy",
          "partial": "OP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OP16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e32-bit integer operand\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "OP32",
          "package": "harpy",
          "signature": "OP32",
          "type": "function"
        },
        "index": {
          "description": "bit integer operand",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "OP32",
          "package": "harpy",
          "partial": "OP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OP32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e64-bit integer operand\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "OP64",
          "package": "harpy",
          "signature": "OP64",
          "type": "function"
        },
        "index": {
          "description": "bit integer operand",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "OP64",
          "package": "harpy",
          "partial": "OP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OP64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e8-bit integer operand\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "OP8",
          "package": "harpy",
          "signature": "OP8",
          "type": "function"
        },
        "index": {
          "description": "bit integer operand",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "OP8",
          "package": "harpy",
          "partial": "OP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OP8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e32-bit floating point operand\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "OPF32",
          "package": "harpy",
          "signature": "OPF32",
          "type": "function"
        },
        "index": {
          "description": "bit floating point operand",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "OPF32",
          "package": "harpy",
          "partial": "OPF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OPF32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e64-bit floating point operand\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "OPF64",
          "package": "harpy",
          "signature": "OPF64",
          "type": "function"
        },
        "index": {
          "description": "bit floating point operand",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "OPF64",
          "package": "harpy",
          "partial": "OPF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OPF64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e80-bit floating point operand\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "OPF80",
          "package": "harpy",
          "signature": "OPF80",
          "type": "function"
        },
        "index": {
          "description": "bit floating point operand",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "OPF80",
          "package": "harpy",
          "partial": "OPF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OPF80"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo operand size specified\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "OPNONE",
          "package": "harpy",
          "signature": "OPNONE",
          "type": "function"
        },
        "index": {
          "description": "No operand size specified",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "OPNONE",
          "package": "harpy",
          "partial": "OPNONE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OPNONE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbsolute address\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "OpAddr",
          "package": "harpy",
          "signature": "OpAddr Word32 InstrOperandSize",
          "type": "function"
        },
        "index": {
          "description": "Absolute address",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "OpAddr",
          "package": "harpy",
          "partial": "Op Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OpAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBase plus scaled index\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "OpBaseIndex",
          "package": "harpy",
          "signature": "OpBaseIndex String String Int InstrOperandSize",
          "type": "function"
        },
        "index": {
          "description": "Base plus scaled index",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "OpBaseIndex",
          "package": "harpy",
          "partial": "Op Base Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OpBaseIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBase plus scaled index with displacement\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "OpBaseIndexDisp",
          "package": "harpy",
          "signature": "OpBaseIndexDisp String String Int Int InstrOperandSize",
          "type": "function"
        },
        "index": {
          "description": "Base plus scaled index with displacement",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "OpBaseIndexDisp",
          "package": "harpy",
          "partial": "Op Base Index Disp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OpBaseIndexDisp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFloating-point register\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "OpFPReg",
          "package": "harpy",
          "signature": "OpFPReg Int",
          "type": "function"
        },
        "index": {
          "description": "Floating-point register",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "OpFPReg",
          "package": "harpy",
          "partial": "Op FPReg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OpFPReg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImmediate value\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "OpImm",
          "package": "harpy",
          "signature": "OpImm Word32",
          "type": "function"
        },
        "index": {
          "description": "Immediate value",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "OpImm",
          "package": "harpy",
          "partial": "Op Imm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OpImm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegister-indirect\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "OpInd",
          "package": "harpy",
          "signature": "OpInd String InstrOperandSize",
          "type": "function"
        },
        "index": {
          "description": "Register-indirect",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "OpInd",
          "package": "harpy",
          "partial": "Op Ind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OpInd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegister-indirect with displacement\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "OpIndDisp",
          "package": "harpy",
          "signature": "OpIndDisp String Int InstrOperandSize",
          "type": "function"
        },
        "index": {
          "description": "Register-indirect with displacement",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "OpIndDisp",
          "package": "harpy",
          "partial": "Op Ind Disp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OpIndDisp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScaled index with displacement\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "OpIndexDisp",
          "package": "harpy",
          "signature": "OpIndexDisp String Int Int InstrOperandSize",
          "type": "function"
        },
        "index": {
          "description": "Scaled index with displacement",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "OpIndexDisp",
          "package": "harpy",
          "partial": "Op Index Disp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OpIndexDisp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegister\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "OpReg",
          "package": "harpy",
          "signature": "OpReg String Int",
          "type": "function"
        },
        "index": {
          "description": "Register",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "OpReg",
          "package": "harpy",
          "partial": "Op Reg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OpReg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePseudo instruction, e.g. label\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "PseudoInstruction",
          "package": "harpy",
          "signature": "PseudoInstruction Int String",
          "type": "function"
        },
        "index": {
          "description": "Pseudo instruction e.g label",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "PseudoInstruction",
          "package": "harpy",
          "partial": "Pseudo Instruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:PseudoInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart address of instruction\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "address",
          "package": "harpy",
          "signature": "Int",
          "type": "function"
        },
        "index": {
          "description": "Start address of instruction",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "address",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstruction bytes\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "bytes",
          "package": "harpy",
          "signature": "[Word8]",
          "type": "function"
        },
        "index": {
          "description": "Instruction bytes",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "bytes",
          "normalized": "[Word]",
          "package": "harpy",
          "signature": "[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:bytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisassemble the contents of the given array.\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "disassembleArray",
          "package": "harpy",
          "signature": "a i Word8 -\u003e m (Either ParseError [Instruction])",
          "type": "function"
        },
        "index": {
          "description": "Disassemble the contents of the given array",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "disassembleArray",
          "normalized": "a b Word-\u003ec(Either ParseError[Instruction])",
          "package": "harpy",
          "partial": "Array",
          "signature": "a i Word-\u003em(Either ParseError[Instruction])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:disassembleArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisassemble a block of memory.  Starting at the location\n pointed to by the given pointer, the given number of bytes are\n disassembled.\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "disassembleBlock",
          "package": "harpy",
          "signature": "Ptr Word8 -\u003e Int -\u003e IO (Either ParseError [Instruction])",
          "type": "function"
        },
        "index": {
          "description": "Disassemble block of memory Starting at the location pointed to by the given pointer the given number of bytes are disassembled",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "disassembleBlock",
          "normalized": "Ptr Word-\u003eInt-\u003eIO(Either ParseError[Instruction])",
          "package": "harpy",
          "partial": "Block",
          "signature": "Ptr Word-\u003eInt-\u003eIO(Either ParseError[Instruction])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:disassembleBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisassemble the contents of the given list.\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "disassembleList",
          "package": "harpy",
          "signature": "[Word8] -\u003e m (Either ParseError [Instruction])",
          "type": "function"
        },
        "index": {
          "description": "Disassemble the contents of the given list",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "disassembleList",
          "normalized": "[Word]-\u003ea(Either ParseError[Instruction])",
          "package": "harpy",
          "partial": "List",
          "signature": "[Word]-\u003em(Either ParseError[Instruction])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:disassembleList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpcode of the instruction\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "opcode",
          "package": "harpy",
          "signature": "Opcode",
          "type": "function"
        },
        "index": {
          "description": "Opcode of the instruction",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "opcode",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:opcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstruction operands\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "operands",
          "package": "harpy",
          "signature": "[Operand]",
          "type": "function"
        },
        "index": {
          "description": "Instruction operands",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "operands",
          "normalized": "[Operand]",
          "package": "harpy",
          "signature": "[Operand]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:operands"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperand size, if any\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "opsize",
          "package": "harpy",
          "signature": "InstrOperandSize",
          "type": "function"
        },
        "index": {
          "description": "Operand size if any",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "opsize",
          "package": "harpy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:opsize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow an instruction in AT&T style.\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "showAtt",
          "package": "harpy",
          "signature": "Instruction -\u003e [Char]",
          "type": "function"
        },
        "index": {
          "description": "Show an instruction in AT style",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "showAtt",
          "normalized": "Instruction-\u003e[Char]",
          "package": "harpy",
          "partial": "Att",
          "signature": "Instruction-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:showAtt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow an instruction in Intel style.\n\u003c/p\u003e",
          "module": "Harpy.X86Disassembler",
          "name": "showIntel",
          "package": "harpy",
          "signature": "Instruction -\u003e [Char]",
          "type": "function"
        },
        "index": {
          "description": "Show an instruction in Intel style",
          "hierarchy": "Harpy X86Disassembler",
          "module": "Harpy.X86Disassembler",
          "name": "showIntel",
          "normalized": "Instruction-\u003e[Char]",
          "package": "harpy",
          "partial": "Intel",
          "signature": "Instruction-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:showIntel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHarpy is a library for run-time code generation of x86 machine code.\n\u003c/p\u003e\u003cp\u003eThis is a convenience module which re-exports the modules which are\n essential for using Harpy.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Harpy",
          "name": "Harpy",
          "package": "harpy",
          "source": "src/Harpy.html",
          "type": "module"
        },
        "index": {
          "description": "Harpy is library for run-time code generation of x86 machine code This is convenience module which re-exports the modules which are essential for using Harpy",
          "hierarchy": "Harpy",
          "module": "Harpy",
          "name": "Harpy",
          "package": "harpy",
          "partial": "Harpy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy.html#"
      }
    }
  ]
]