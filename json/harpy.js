[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-Call.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePredefined call stubs for run-time generated code.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Harpy.Call",
        "fct-package": "harpy",
        "fct-signature": "module",
        "fct-source": "src/Harpy-Call.html",
        "fct-type": "module",
        "title": "Call"
      },
      "index": {
        "description": "Predefined call stubs for run-time generated code",
        "hierarchy": "Harpy Call",
        "module": "Harpy.Call",
        "name": "Call",
        "normalized": "",
        "package": "harpy",
        "partial": "Call",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-Call.html#v:callAsVoid",
      "description": {
        "fct-module": "Harpy.Call",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e t ()",
        "fct-source": "src/Harpy-Call.html#callAsVoid",
        "fct-type": "function",
        "title": "callAsVoid"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy Call",
        "module": "Harpy.Call",
        "name": "callAsVoid",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "As Void",
        "signature": "CodeGen e t()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-Call.html#v:conv",
      "description": {
        "fct-module": "Harpy.Call",
        "fct-package": "harpy",
        "fct-signature": "FunPtr () -\u003e IO ()",
        "fct-source": "src/Harpy-Call.html#conv",
        "fct-type": "function",
        "title": "conv"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy Call",
        "module": "Harpy.Call",
        "name": "conv",
        "normalized": "FunPtr()-\u003eIO()",
        "package": "harpy",
        "partial": "",
        "signature": "FunPtr()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonad for generating x86 machine code at runtime.\n\u003c/p\u003e\u003cp\u003eThis is a combined reader-state-exception monad which handles all\n the details of handling code buffers, emitting binary data,\n relocation etc.\n\u003c/p\u003e\u003cp\u003eAll the code generation functions in module \u003ca\u003eHarpy.X86CodeGen\u003c/a\u003e live\n in this monad and use its error reporting facilities as well as the\n internal state maintained by the monad.  \n\u003c/p\u003e\u003cp\u003eThe library user can pass a user environment and user state through\n the monad.  This state is independent from the internal state and\n may be used by higher-level code generation libraries to maintain\n their own state across code generation operations.\n --------------------------------------------------------------------------\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "module",
        "fct-source": "src/Harpy-CodeGenMonad.html",
        "fct-type": "module",
        "title": "CodeGenMonad"
      },
      "index": {
        "description": "Monad for generating x86 machine code at runtime This is combined reader-state-exception monad which handles all the details of handling code buffers emitting binary data relocation etc All the code generation functions in module Harpy.X86CodeGen live in this monad and use its error reporting facilities as well as the internal state maintained by the monad The library user can pass user environment and user state through the monad This state is independent from the internal state and may be used by higher-level code generation libraries to maintain their own state across code generation operations",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "CodeGenMonad",
        "normalized": "",
        "package": "harpy",
        "partial": "Code Gen Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#t:CodeGen",
      "description": {
        "fct-descr": "\u003cp\u003eThe code generation monad, a combined reader-state-exception\n monad.\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "data",
        "fct-source": "src/Harpy-CodeGenMonad.html#CodeGen",
        "fct-type": "data",
        "title": "CodeGen"
      },
      "index": {
        "description": "The code generation monad combined reader-state-exception monad",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "CodeGen",
        "normalized": "",
        "package": "harpy",
        "partial": "Code Gen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#t:CodeGenConfig",
      "description": {
        "fct-descr": "\u003cp\u003eConfiguration of the code generator.  There are currently two\n configuration options.  The first is the number fo bytes to use for\n allocating code buffers (the first as well as additional buffers\n created in calls to \u003ccode\u003e\u003ca\u003eensureBufferSize\u003c/a\u003e\u003c/code\u003e.  The second allows to pass\n in a pre-allocated code buffer and its size.  When this option is\n used, Harpy does not perform any code buffer resizing (calls to\n \u003ccode\u003e\u003ca\u003eensureBufferSize\u003c/a\u003e\u003c/code\u003e will be equivalent to calls to\n \u003ccode\u003e\u003ca\u003echeckBufferSize\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "data",
        "fct-source": "src/Harpy-CodeGenMonad.html#CodeGenConfig",
        "fct-type": "data",
        "title": "CodeGenConfig"
      },
      "index": {
        "description": "Configuration of the code generator There are currently two configuration options The first is the number fo bytes to use for allocating code buffers the first as well as additional buffers created in calls to ensureBufferSize The second allows to pass in pre-allocated code buffer and its size When this option is used Harpy does not perform any code buffer resizing calls to ensureBufferSize will be equivalent to calls to checkBufferSize",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "CodeGenConfig",
        "normalized": "",
        "package": "harpy",
        "partial": "Code Gen Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#t:ErrMsg",
      "description": {
        "fct-descr": "\u003cp\u003eAn error message produced by a code generation operation.\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "type",
        "fct-source": "src/Harpy-CodeGenMonad.html#ErrMsg",
        "fct-type": "type",
        "title": "ErrMsg"
      },
      "index": {
        "description": "An error message produced by code generation operation",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "ErrMsg",
        "normalized": "",
        "package": "harpy",
        "partial": "Err Msg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#t:FixupKind",
      "description": {
        "fct-descr": "\u003cp\u003eKind of a fixup entry.  When a label is emitted with\n \u003ccode\u003e\u003ca\u003edefineLabel\u003c/a\u003e\u003c/code\u003e, all prior references to this label must be fixed\n up.  This data type tells how to perform the fixup operation.\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "data",
        "fct-source": "src/Harpy-CodeGenMonad.html#FixupKind",
        "fct-type": "data",
        "title": "FixupKind"
      },
      "index": {
        "description": "Kind of fixup entry When label is emitted with defineLabel all prior references to this label must be fixed up This data type tells how to perform the fixup operation",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "FixupKind",
        "normalized": "",
        "package": "harpy",
        "partial": "Fixup Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#t:Label",
      "description": {
        "fct-descr": "\u003cp\u003eLabel\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "data",
        "fct-source": "src/Harpy-CodeGenMonad.html#Label",
        "fct-type": "data",
        "title": "Label"
      },
      "index": {
        "description": "Label",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "Label",
        "normalized": "",
        "package": "harpy",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#t:Reloc",
      "description": {
        "fct-descr": "\u003cp\u003eRelocation entry\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "data",
        "fct-source": "src/Harpy-CodeGenMonad.html#Reloc",
        "fct-type": "data",
        "title": "Reloc"
      },
      "index": {
        "description": "Relocation entry",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "Reloc",
        "normalized": "",
        "package": "harpy",
        "partial": "Reloc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#t:RelocKind",
      "description": {
        "fct-descr": "\u003cp\u003eKind of relocation, for example PC-relative\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "data",
        "fct-source": "src/Harpy-CodeGenMonad.html#RelocKind",
        "fct-type": "data",
        "title": "RelocKind"
      },
      "index": {
        "description": "Kind of relocation for example PC-relative",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "RelocKind",
        "normalized": "",
        "package": "harpy",
        "partial": "Reloc Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:-64--64-",
      "description": {
        "fct-descr": "\u003cp\u003eThis operator gives neat syntax for defining labels.  When \u003ccode\u003el\u003c/code\u003e is a label, the code\n\u003c/p\u003e\u003cpre\u003e l @@ mov eax ebx\n\u003c/pre\u003e\u003cp\u003eassociates the label l with the following \u003ccode\u003emov\u003c/code\u003e instruction.\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "Label -\u003e CodeGen e s a -\u003e CodeGen e s a",
        "fct-source": "src/Harpy-CodeGenMonad.html#%40%40",
        "fct-type": "function",
        "title": "(@@)"
      },
      "index": {
        "description": "This operator gives neat syntax for defining labels When is label the code mov eax ebx associates the label with the following mov instruction",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "(@@) @@",
        "normalized": "Label-\u003eCodeGen a b c-\u003eCodeGen a b c",
        "package": "harpy",
        "partial": "",
        "signature": "Label-\u003eCodeGen e s a-\u003eCodeGen e s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:CodeGenConfig",
      "description": {
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "CodeGenConfig",
        "fct-source": "src/Harpy-CodeGenMonad.html#CodeGenConfig",
        "fct-type": "function",
        "title": "CodeGenConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "CodeGenConfig",
        "normalized": "",
        "package": "harpy",
        "partial": "Code Gen Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:Fixup16",
      "description": {
        "fct-descr": "\u003cp\u003e16-bit relative reference\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "Fixup16",
        "fct-source": "src/Harpy-CodeGenMonad.html#FixupKind",
        "fct-type": "function",
        "title": "Fixup16"
      },
      "index": {
        "description": "bit relative reference",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "Fixup16",
        "normalized": "",
        "package": "harpy",
        "partial": "Fixup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:Fixup32",
      "description": {
        "fct-descr": "\u003cp\u003e32-bit relative reference\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "Fixup32",
        "fct-source": "src/Harpy-CodeGenMonad.html#FixupKind",
        "fct-type": "function",
        "title": "Fixup32"
      },
      "index": {
        "description": "bit relative reference",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "Fixup32",
        "normalized": "",
        "package": "harpy",
        "partial": "Fixup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:Fixup32Absolute",
      "description": {
        "fct-descr": "\u003cp\u003e32-bit absolute reference\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "Fixup32Absolute",
        "fct-source": "src/Harpy-CodeGenMonad.html#FixupKind",
        "fct-type": "function",
        "title": "Fixup32Absolute"
      },
      "index": {
        "description": "bit absolute reference",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "Fixup32Absolute",
        "normalized": "",
        "package": "harpy",
        "partial": "Fixup Absolute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:Fixup8",
      "description": {
        "fct-descr": "\u003cp\u003e8-bit relative reference\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "Fixup8",
        "fct-source": "src/Harpy-CodeGenMonad.html#FixupKind",
        "fct-type": "function",
        "title": "Fixup8"
      },
      "index": {
        "description": "bit relative reference",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "Fixup8",
        "normalized": "",
        "package": "harpy",
        "partial": "Fixup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:RelocAbsolute",
      "description": {
        "fct-descr": "\u003cp\u003eAbsolute address\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "RelocAbsolute",
        "fct-source": "src/Harpy-CodeGenMonad.html#RelocKind",
        "fct-type": "function",
        "title": "RelocAbsolute"
      },
      "index": {
        "description": "Absolute address",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "RelocAbsolute",
        "normalized": "",
        "package": "harpy",
        "partial": "Reloc Absolute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:RelocPCRel",
      "description": {
        "fct-descr": "\u003cp\u003ePC-relative relocation\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "RelocPCRel",
        "fct-source": "src/Harpy-CodeGenMonad.html#RelocKind",
        "fct-type": "function",
        "title": "RelocPCRel"
      },
      "index": {
        "description": "PC-relative relocation",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "RelocPCRel",
        "normalized": "",
        "package": "harpy",
        "partial": "Reloc PCRel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:callDecl",
      "description": {
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "String -\u003e Q Type -\u003e Q [Dec]",
        "fct-source": "src/Harpy-CodeGenMonad.html#callDecl",
        "fct-type": "function",
        "title": "callDecl"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "callDecl",
        "normalized": "String-\u003eQ Type-\u003eQ[Dec]",
        "package": "harpy",
        "partial": "Decl",
        "signature": "String-\u003eQ Type-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:checkBufferSize",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether the code buffer has room for at least the given\n number of bytes.  This should be called by code generators\n whenever it cannot be guaranteed that the code buffer is large\n enough to hold all the generated code.  Lets the code generation\n monad fail when the buffer overflows.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e Starting with version 0.4, Harpy automatically checks for\n buffer overflow, so you do not need to call this function anymore.\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "Int -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-CodeGenMonad.html#checkBufferSize",
        "fct-type": "function",
        "title": "checkBufferSize"
      },
      "index": {
        "description": "Check whether the code buffer has room for at least the given number of bytes This should be called by code generators whenever it cannot be guaranteed that the code buffer is large enough to hold all the generated code Lets the code generation monad fail when the buffer overflows Note Starting with version Harpy automatically checks for buffer overflow so you do not need to call this function anymore",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "checkBufferSize",
        "normalized": "Int-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "Buffer Size",
        "signature": "Int-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:codeBufferSize",
      "description": {
        "fct-descr": "\u003cp\u003eSize of individual code buffer blocks. \n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-CodeGenMonad.html#CodeGenConfig",
        "fct-type": "function",
        "title": "codeBufferSize"
      },
      "index": {
        "description": "Size of individual code buffer blocks",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "codeBufferSize",
        "normalized": "",
        "package": "harpy",
        "partial": "Buffer Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:customCodeBuffer",
      "description": {
        "fct-descr": "\u003cp\u003eCode buffer passed in.\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "Maybe (Ptr Word8, Int)",
        "fct-source": "src/Harpy-CodeGenMonad.html#CodeGenConfig",
        "fct-type": "function",
        "title": "customCodeBuffer"
      },
      "index": {
        "description": "Code buffer passed in",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "customCodeBuffer",
        "normalized": "Maybe(Ptr Word,Int)",
        "package": "harpy",
        "partial": "Code Buffer",
        "signature": "Maybe(Ptr Word,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:defaultCodeGenConfig",
      "description": {
        "fct-descr": "\u003cp\u003eDefault code generation configuration.  The code buffer size is\n set to 4KB, and code buffer management is automatic.  This value is\n intended to be used with record update syntax, for example:\n\u003c/p\u003e\u003cpre\u003e  runCodeGenWithConfig ... defaultCodeGenConfig{codeBufferSize = 128} ...\n\u003c/pre\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "CodeGenConfig",
        "fct-source": "src/Harpy-CodeGenMonad.html#defaultCodeGenConfig",
        "fct-type": "function",
        "title": "defaultCodeGenConfig"
      },
      "index": {
        "description": "Default code generation configuration The code buffer size is set to KB and code buffer management is automatic This value is intended to be used with record update syntax for example runCodeGenWithConfig defaultCodeGenConfig codeBufferSize",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "defaultCodeGenConfig",
        "normalized": "",
        "package": "harpy",
        "partial": "Code Gen Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:defineLabel",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a label at the current offset in the code buffer.  All\n references to the label will be relocated to this offset.\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "Label -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-CodeGenMonad.html#defineLabel",
        "fct-type": "function",
        "title": "defineLabel"
      },
      "index": {
        "description": "Emit label at the current offset in the code buffer All references to the label will be relocated to this offset",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "defineLabel",
        "normalized": "Label-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "Label",
        "signature": "Label-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:disassemble",
      "description": {
        "fct-descr": "\u003cp\u003eDisassemble all code buffers.  The result is a list of\n disassembled instructions which can be converted to strings using\n the \u003ccode\u003e\u003ca\u003eshowIntel\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eshowAtt\u003c/a\u003e\u003c/code\u003e functions from module\n \u003ca\u003eHarpy.X86Disassembler\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s [Instruction]",
        "fct-source": "src/Harpy-CodeGenMonad.html#disassemble",
        "fct-type": "function",
        "title": "disassemble"
      },
      "index": {
        "description": "Disassemble all code buffers The result is list of disassembled instructions which can be converted to strings using the showIntel or showAtt functions from module Harpy.X86Disassembler",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "disassemble",
        "normalized": "CodeGen a b[Instruction]",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s[Instruction]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:emit32",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eemit8\u003c/a\u003e\u003c/code\u003e, but for a 32-bit value.\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-CodeGenMonad.html#emit32",
        "fct-type": "function",
        "title": "emit32"
      },
      "index": {
        "description": "Like emit8 but for bit value",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "emit32",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:emit32At",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eemit8At\u003c/a\u003e\u003c/code\u003e, but for a 32-bit value.\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "Int -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-CodeGenMonad.html#emit32At",
        "fct-type": "function",
        "title": "emit32At"
      },
      "index": {
        "description": "Like emit8At but for bit value",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "emit32At",
        "normalized": "Int-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "At",
        "signature": "Int-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:emit8",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a byte value to the code buffer. \n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-CodeGenMonad.html#emit8",
        "fct-type": "function",
        "title": "emit8"
      },
      "index": {
        "description": "Emit byte value to the code buffer",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "emit8",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:emit8At",
      "description": {
        "fct-descr": "\u003cp\u003eStore a byte value at the given offset into the code buffer.\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "Int -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-CodeGenMonad.html#emit8At",
        "fct-type": "function",
        "title": "emit8At"
      },
      "index": {
        "description": "Store byte value at the given offset into the code buffer",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "emit8At",
        "normalized": "Int-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "At",
        "signature": "Int-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:emitFixup",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a fixup entry for the given label at the current offset in\n the code buffer (unless the label is already defined).\n The instruction at this offset will\n be patched to target the address associated with this label when\n it is defined later.\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "Label -\u003e Int -\u003e FixupKind -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-CodeGenMonad.html#emitFixup",
        "fct-type": "function",
        "title": "emitFixup"
      },
      "index": {
        "description": "Emit fixup entry for the given label at the current offset in the code buffer unless the label is already defined The instruction at this offset will be patched to target the address associated with this label when it is defined later",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "emitFixup",
        "normalized": "Label-\u003eInt-\u003eFixupKind-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "Fixup",
        "signature": "Label-\u003eInt-\u003eFixupKind-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:emitRelocInfo",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a relocation entry for the given offset, relocation kind \n and target address.\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "Int -\u003e RelocKind -\u003e FunPtr a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-CodeGenMonad.html#emitRelocInfo",
        "fct-type": "function",
        "title": "emitRelocInfo"
      },
      "index": {
        "description": "Emit relocation entry for the given offset relocation kind and target address",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "emitRelocInfo",
        "normalized": "Int-\u003eRelocKind-\u003eFunPtr a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "Reloc Info",
        "signature": "Int-\u003eRelocKind-\u003eFunPtr a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:ensureBufferSize",
      "description": {
        "fct-descr": "\u003cp\u003eMake sure that the code buffer has room for at least the given\n number of bytes.  This should be called by code generators whenever\n it cannot be guaranteed that the code buffer is large enough to\n hold all the generated code.  Creates a new buffer and places a\n jump to the new buffer when there is not sufficient space\n available.  When code generation was invoked with a pre-defined\n code buffer, code generation is aborted on overflow.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eNote:\u003c/em\u003e Starting with version 0.4, Harpy automatically checks for\n buffer overflow, so you do not need to call this function anymore.\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "Int -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-CodeGenMonad.html#ensureBufferSize",
        "fct-type": "function",
        "title": "ensureBufferSize"
      },
      "index": {
        "description": "Make sure that the code buffer has room for at least the given number of bytes This should be called by code generators whenever it cannot be guaranteed that the code buffer is large enough to hold all the generated code Creates new buffer and places jump to the new buffer when there is not sufficient space available When code generation was invoked with pre-defined code buffer code generation is aborted on overflow Note Starting with version Harpy automatically checks for buffer overflow so you do not need to call this function anymore",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "ensureBufferSize",
        "normalized": "Int-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "Buffer Size",
        "signature": "Int-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:failCodeGen",
      "description": {
        "fct-descr": "\u003cp\u003eAbort code generation with the given error message.\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "Doc -\u003e CodeGen e s a",
        "fct-source": "src/Harpy-CodeGenMonad.html#failCodeGen",
        "fct-type": "function",
        "title": "failCodeGen"
      },
      "index": {
        "description": "Abort code generation with the given error message",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "failCodeGen",
        "normalized": "Doc-\u003eCodeGen a b c",
        "package": "harpy",
        "partial": "Code Gen",
        "signature": "Doc-\u003eCodeGen e s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:getBasePtr",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the pointer to the start of the code buffer.\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s (Ptr Word8)",
        "fct-source": "src/Harpy-CodeGenMonad.html#getBasePtr",
        "fct-type": "function",
        "title": "getBasePtr"
      },
      "index": {
        "description": "Return the pointer to the start of the code buffer",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "getBasePtr",
        "normalized": "",
        "package": "harpy",
        "partial": "Base Ptr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:getCodeBufferList",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a list of all code buffers and their respective size \n (i.e., actually used space for code, not allocated size).\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s [(Ptr Word8, Int)]",
        "fct-source": "src/Harpy-CodeGenMonad.html#getCodeBufferList",
        "fct-type": "function",
        "title": "getCodeBufferList"
      },
      "index": {
        "description": "Return list of all code buffers and their respective size i.e actually used space for code not allocated size",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "getCodeBufferList",
        "normalized": "CodeGen a b[(Ptr Word,Int)]",
        "package": "harpy",
        "partial": "Code Buffer List",
        "signature": "CodeGen e s[(Ptr Word,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:getCodeOffset",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the current offset in the code buffer, e.g. the offset\n at which the next instruction will be emitted.\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s Int",
        "fct-source": "src/Harpy-CodeGenMonad.html#getCodeOffset",
        "fct-type": "function",
        "title": "getCodeOffset"
      },
      "index": {
        "description": "Return the current offset in the code buffer e.g the offset at which the next instruction will be emitted",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "getCodeOffset",
        "normalized": "",
        "package": "harpy",
        "partial": "Code Offset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:getEntryPoint",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a pointer to the beginning of the first code buffer, which\n is normally the entry point to the generated code.\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s (Ptr Word8)",
        "fct-source": "src/Harpy-CodeGenMonad.html#getEntryPoint",
        "fct-type": "function",
        "title": "getEntryPoint"
      },
      "index": {
        "description": "Return pointer to the beginning of the first code buffer which is normally the entry point to the generated code",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "getEntryPoint",
        "normalized": "",
        "package": "harpy",
        "partial": "Entry Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:getEnv",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the current user environment.\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s e",
        "fct-source": "src/Harpy-CodeGenMonad.html#getEnv",
        "fct-type": "function",
        "title": "getEnv"
      },
      "index": {
        "description": "Return the current user environment",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "getEnv",
        "normalized": "",
        "package": "harpy",
        "partial": "Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:getState",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the current user state.\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s s",
        "fct-source": "src/Harpy-CodeGenMonad.html#getState",
        "fct-type": "function",
        "title": "getState"
      },
      "index": {
        "description": "Return the current user state",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "getState",
        "normalized": "",
        "package": "harpy",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:labelAddress",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the address of a label, fail if the label is not yet defined.\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "Label -\u003e CodeGen e s (Ptr a)",
        "fct-source": "src/Harpy-CodeGenMonad.html#labelAddress",
        "fct-type": "function",
        "title": "labelAddress"
      },
      "index": {
        "description": "Return the address of label fail if the label is not yet defined",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "labelAddress",
        "normalized": "Label-\u003eCodeGen a b(Ptr c)",
        "package": "harpy",
        "partial": "Address",
        "signature": "Label-\u003eCodeGen e s(Ptr a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:newLabel",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a new label to be used with the label operations\n \u003ccode\u003e\u003ca\u003eemitFixup\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edefineLabel\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s Label",
        "fct-source": "src/Harpy-CodeGenMonad.html#newLabel",
        "fct-type": "function",
        "title": "newLabel"
      },
      "index": {
        "description": "Generate new label to be used with the label operations emitFixup and defineLabel",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "newLabel",
        "normalized": "",
        "package": "harpy",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:newNamedLabel",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a new label to be used with the label operations\n \u003ccode\u003e\u003ca\u003eemitFixup\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edefineLabel\u003c/a\u003e\u003c/code\u003e.  The given name is used for\n diagnostic purposes, and will appear in the disassembly.\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "String -\u003e CodeGen e s Label",
        "fct-source": "src/Harpy-CodeGenMonad.html#newNamedLabel",
        "fct-type": "function",
        "title": "newNamedLabel"
      },
      "index": {
        "description": "Generate new label to be used with the label operations emitFixup and defineLabel The given name is used for diagnostic purposes and will appear in the disassembly",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "newNamedLabel",
        "normalized": "String-\u003eCodeGen a b Label",
        "package": "harpy",
        "partial": "Named Label",
        "signature": "String-\u003eCodeGen e s Label"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:peek8At",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the byte value at the given offset in the code buffer.\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "Int -\u003e CodeGen e s Word8",
        "fct-source": "src/Harpy-CodeGenMonad.html#peek8At",
        "fct-type": "function",
        "title": "peek8At"
      },
      "index": {
        "description": "Return the byte value at the given offset in the code buffer",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "peek8At",
        "normalized": "Int-\u003eCodeGen a b Word",
        "package": "harpy",
        "partial": "At",
        "signature": "Int-\u003eCodeGen e s Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:runCodeGen",
      "description": {
        "fct-descr": "\u003cp\u003eExecute code generation, given a user environment and state.  The\n result is a tuple of the resulting user state and either an error\n message (when code generation failed) or the result of the code\n generation.  This function runs \u003ccode\u003e\u003ca\u003erunCodeGenWithConfig\u003c/a\u003e\u003c/code\u003e with a\n sensible default configuration.\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s a -\u003e e -\u003e s -\u003e IO (s, Either ErrMsg a)",
        "fct-source": "src/Harpy-CodeGenMonad.html#runCodeGen",
        "fct-type": "function",
        "title": "runCodeGen"
      },
      "index": {
        "description": "Execute code generation given user environment and state The result is tuple of the resulting user state and either an error message when code generation failed or the result of the code generation This function runs runCodeGenWithConfig with sensible default configuration",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "runCodeGen",
        "normalized": "CodeGen a b c-\u003ea-\u003eb-\u003eIO(b,Either ErrMsg c)",
        "package": "harpy",
        "partial": "Code Gen",
        "signature": "CodeGen e s a-\u003ee-\u003es-\u003eIO(s,Either ErrMsg a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:runCodeGenWithConfig",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erunCodeGen\u003c/a\u003e\u003c/code\u003e, but allows more control over the code\n generation process.  In addition to a code generator and a user\n environment and state, a code generation configuration must be\n provided.  A code generation configuration allows control over the\n allocation of code buffers, for example.\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s a -\u003e e -\u003e s -\u003e CodeGenConfig -\u003e IO (s, Either ErrMsg a)",
        "fct-source": "src/Harpy-CodeGenMonad.html#runCodeGenWithConfig",
        "fct-type": "function",
        "title": "runCodeGenWithConfig"
      },
      "index": {
        "description": "Like runCodeGen but allows more control over the code generation process In addition to code generator and user environment and state code generation configuration must be provided code generation configuration allows control over the allocation of code buffers for example",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "runCodeGenWithConfig",
        "normalized": "CodeGen a b c-\u003ea-\u003eb-\u003eCodeGenConfig-\u003eIO(b,Either ErrMsg c)",
        "package": "harpy",
        "partial": "Code Gen With Config",
        "signature": "CodeGen e s a-\u003ee-\u003es-\u003eCodeGenConfig-\u003eIO(s,Either ErrMsg a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:setLabel",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a new label and define it at once\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s Label",
        "fct-source": "src/Harpy-CodeGenMonad.html#setLabel",
        "fct-type": "function",
        "title": "setLabel"
      },
      "index": {
        "description": "Generate new label and define it at once",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "setLabel",
        "normalized": "",
        "package": "harpy",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:setState",
      "description": {
        "fct-descr": "\u003cp\u003eSet the user state to the given value. \n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "s -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-CodeGenMonad.html#setState",
        "fct-type": "function",
        "title": "setState"
      },
      "index": {
        "description": "Set the user state to the given value",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "setState",
        "normalized": "a-\u003eCodeGen b a()",
        "package": "harpy",
        "partial": "State",
        "signature": "s-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-CodeGenMonad.html#v:withEnv",
      "description": {
        "fct-descr": "\u003cp\u003eSet the environment to the given value and execute the given\n code generation in this environment.\n\u003c/p\u003e",
        "fct-module": "Harpy.CodeGenMonad",
        "fct-package": "harpy",
        "fct-signature": "e -\u003e CodeGen e s r -\u003e CodeGen e s r",
        "fct-source": "src/Harpy-CodeGenMonad.html#withEnv",
        "fct-type": "function",
        "title": "withEnv"
      },
      "index": {
        "description": "Set the environment to the given value and execute the given code generation in this environment",
        "hierarchy": "Harpy CodeGenMonad",
        "module": "Harpy.CodeGenMonad",
        "name": "withEnv",
        "normalized": "a-\u003eCodeGen a b c-\u003eCodeGen a b c",
        "package": "harpy",
        "partial": "Env",
        "signature": "e-\u003eCodeGen e s r-\u003eCodeGen e s r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA type class based layer on top of X86CodeGen\n which determines the addressing modes from the types of the\n operands.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "module",
        "fct-source": "src/Harpy-X86Assembler.html",
        "fct-type": "module",
        "title": "X86Assembler"
      },
      "index": {
        "description": "type class based layer on top of X86CodeGen which determines the addressing modes from the types of the operands",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "X86Assembler",
        "normalized": "",
        "package": "harpy",
        "partial": "Assembler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Adc",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Adc",
        "fct-type": "class",
        "title": "Adc"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Adc",
        "normalized": "",
        "package": "harpy",
        "partial": "Adc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Add",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Add",
        "fct-type": "class",
        "title": "Add"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Add",
        "normalized": "",
        "package": "harpy",
        "partial": "Add",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Addpd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Addpd",
        "fct-type": "class",
        "title": "Addpd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Addpd",
        "normalized": "",
        "package": "harpy",
        "partial": "Addpd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Addps",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Addps",
        "fct-type": "class",
        "title": "Addps"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Addps",
        "normalized": "",
        "package": "harpy",
        "partial": "Addps",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Addr",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "newtype",
        "fct-source": "src/Harpy-X86Assembler.html#Addr",
        "fct-type": "newtype",
        "title": "Addr"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Addr",
        "normalized": "",
        "package": "harpy",
        "partial": "Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Addsd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Addsd",
        "fct-type": "class",
        "title": "Addsd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Addsd",
        "normalized": "",
        "package": "harpy",
        "partial": "Addsd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Addss",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Addss",
        "fct-type": "class",
        "title": "Addss"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Addss",
        "normalized": "",
        "package": "harpy",
        "partial": "Addss",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:And",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#And",
        "fct-type": "class",
        "title": "And"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "And",
        "normalized": "",
        "package": "harpy",
        "partial": "And",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Call",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Call",
        "fct-type": "class",
        "title": "Call"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Call",
        "normalized": "",
        "package": "harpy",
        "partial": "Call",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmova",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmova",
        "fct-type": "class",
        "title": "Cmova"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmova",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmova",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovae",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmovae",
        "fct-type": "class",
        "title": "Cmovae"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmovae",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmovae",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovb",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmovb",
        "fct-type": "class",
        "title": "Cmovb"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmovb",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmovb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovbe",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmovbe",
        "fct-type": "class",
        "title": "Cmovbe"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmovbe",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmovbe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovc",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmovc",
        "fct-type": "class",
        "title": "Cmovc"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmovc",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmovc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmove",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmove",
        "fct-type": "class",
        "title": "Cmove"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmove",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmove",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovg",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmovg",
        "fct-type": "class",
        "title": "Cmovg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmovg",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmovg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovge",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmovge",
        "fct-type": "class",
        "title": "Cmovge"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmovge",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmovge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovl",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmovl",
        "fct-type": "class",
        "title": "Cmovl"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmovl",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmovl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovle",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmovle",
        "fct-type": "class",
        "title": "Cmovle"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmovle",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmovle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovna",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmovna",
        "fct-type": "class",
        "title": "Cmovna"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmovna",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmovna",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovnae",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmovnae",
        "fct-type": "class",
        "title": "Cmovnae"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmovnae",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmovnae",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovnb",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmovnb",
        "fct-type": "class",
        "title": "Cmovnb"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmovnb",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmovnb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovnbe",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmovnbe",
        "fct-type": "class",
        "title": "Cmovnbe"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmovnbe",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmovnbe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovnc",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmovnc",
        "fct-type": "class",
        "title": "Cmovnc"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmovnc",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmovnc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovne",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmovne",
        "fct-type": "class",
        "title": "Cmovne"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmovne",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmovne",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovng",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmovng",
        "fct-type": "class",
        "title": "Cmovng"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmovng",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmovng",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovnge",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmovnge",
        "fct-type": "class",
        "title": "Cmovnge"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmovnge",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmovnge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovnl",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmovnl",
        "fct-type": "class",
        "title": "Cmovnl"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmovnl",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmovnl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovnle",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmovnle",
        "fct-type": "class",
        "title": "Cmovnle"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmovnle",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmovnle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovno",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmovno",
        "fct-type": "class",
        "title": "Cmovno"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmovno",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmovno",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovnp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmovnp",
        "fct-type": "class",
        "title": "Cmovnp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmovnp",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmovnp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovns",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmovns",
        "fct-type": "class",
        "title": "Cmovns"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmovns",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmovns",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovnz",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmovnz",
        "fct-type": "class",
        "title": "Cmovnz"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmovnz",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmovnz",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovo",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmovo",
        "fct-type": "class",
        "title": "Cmovo"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmovo",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmovo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmovp",
        "fct-type": "class",
        "title": "Cmovp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmovp",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmovp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovpe",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmovpe",
        "fct-type": "class",
        "title": "Cmovpe"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmovpe",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmovpe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovpo",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmovpo",
        "fct-type": "class",
        "title": "Cmovpo"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmovpo",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmovpo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovs",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmovs",
        "fct-type": "class",
        "title": "Cmovs"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmovs",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmovs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmovz",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmovz",
        "fct-type": "class",
        "title": "Cmovz"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmovz",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmovz",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmp",
        "fct-type": "class",
        "title": "Cmp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmp",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Cmpxchg",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Cmpxchg",
        "fct-type": "class",
        "title": "Cmpxchg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Cmpxchg",
        "normalized": "",
        "package": "harpy",
        "partial": "Cmpxchg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Comisd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Comisd",
        "fct-type": "class",
        "title": "Comisd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Comisd",
        "normalized": "",
        "package": "harpy",
        "partial": "Comisd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Comiss",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Comiss",
        "fct-type": "class",
        "title": "Comiss"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Comiss",
        "normalized": "",
        "package": "harpy",
        "partial": "Comiss",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Dec",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Dec",
        "fct-type": "class",
        "title": "Dec"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Dec",
        "normalized": "",
        "package": "harpy",
        "partial": "Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Disp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "newtype",
        "fct-source": "src/Harpy-X86Assembler.html#Disp",
        "fct-type": "newtype",
        "title": "Disp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Disp",
        "normalized": "",
        "package": "harpy",
        "partial": "Disp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Div",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Div",
        "fct-type": "class",
        "title": "Div"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Div",
        "normalized": "",
        "package": "harpy",
        "partial": "Div",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Divpd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Divpd",
        "fct-type": "class",
        "title": "Divpd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Divpd",
        "normalized": "",
        "package": "harpy",
        "partial": "Divpd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Divps",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Divps",
        "fct-type": "class",
        "title": "Divps"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Divps",
        "normalized": "",
        "package": "harpy",
        "partial": "Divps",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Divsd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Divsd",
        "fct-type": "class",
        "title": "Divsd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Divsd",
        "normalized": "",
        "package": "harpy",
        "partial": "Divsd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Divss",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Divss",
        "fct-type": "class",
        "title": "Divss"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Divss",
        "normalized": "",
        "package": "harpy",
        "partial": "Divss",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:FPReg",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "newtype",
        "fct-source": "src/Harpy-X86Assembler.html#FPReg",
        "fct-type": "newtype",
        "title": "FPReg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "FPReg",
        "normalized": "",
        "package": "harpy",
        "partial": "FPReg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:FPTopReg",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "data",
        "fct-source": "src/Harpy-X86Assembler.html#FPTopReg",
        "fct-type": "data",
        "title": "FPTopReg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "FPTopReg",
        "normalized": "",
        "package": "harpy",
        "partial": "FPTop Reg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fadd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Fadd",
        "fct-type": "class",
        "title": "Fadd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Fadd",
        "normalized": "",
        "package": "harpy",
        "partial": "Fadd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Faddp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Faddp",
        "fct-type": "class",
        "title": "Faddp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Faddp",
        "normalized": "",
        "package": "harpy",
        "partial": "Faddp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fcom",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Fcom",
        "fct-type": "class",
        "title": "Fcom"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Fcom",
        "normalized": "",
        "package": "harpy",
        "partial": "Fcom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fcomp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Fcomp",
        "fct-type": "class",
        "title": "Fcomp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Fcomp",
        "normalized": "",
        "package": "harpy",
        "partial": "Fcomp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fdiv",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Fdiv",
        "fct-type": "class",
        "title": "Fdiv"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Fdiv",
        "normalized": "",
        "package": "harpy",
        "partial": "Fdiv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fdivp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Fdivp",
        "fct-type": "class",
        "title": "Fdivp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Fdivp",
        "normalized": "",
        "package": "harpy",
        "partial": "Fdivp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fdivr",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Fdivr",
        "fct-type": "class",
        "title": "Fdivr"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Fdivr",
        "normalized": "",
        "package": "harpy",
        "partial": "Fdivr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fiadd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Fiadd",
        "fct-type": "class",
        "title": "Fiadd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Fiadd",
        "normalized": "",
        "package": "harpy",
        "partial": "Fiadd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fidiv",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Fidiv",
        "fct-type": "class",
        "title": "Fidiv"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Fidiv",
        "normalized": "",
        "package": "harpy",
        "partial": "Fidiv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fild",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Fild",
        "fct-type": "class",
        "title": "Fild"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Fild",
        "normalized": "",
        "package": "harpy",
        "partial": "Fild",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fimul",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Fimul",
        "fct-type": "class",
        "title": "Fimul"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Fimul",
        "normalized": "",
        "package": "harpy",
        "partial": "Fimul",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fist",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Fist",
        "fct-type": "class",
        "title": "Fist"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Fist",
        "normalized": "",
        "package": "harpy",
        "partial": "Fist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fistp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Fistp",
        "fct-type": "class",
        "title": "Fistp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Fistp",
        "normalized": "",
        "package": "harpy",
        "partial": "Fistp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fisub",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Fisub",
        "fct-type": "class",
        "title": "Fisub"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Fisub",
        "normalized": "",
        "package": "harpy",
        "partial": "Fisub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fld",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Fld",
        "fct-type": "class",
        "title": "Fld"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Fld",
        "normalized": "",
        "package": "harpy",
        "partial": "Fld",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fld80",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Fld80",
        "fct-type": "class",
        "title": "Fld80"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Fld80",
        "normalized": "",
        "package": "harpy",
        "partial": "Fld",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fldcw",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Fldcw",
        "fct-type": "class",
        "title": "Fldcw"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Fldcw",
        "normalized": "",
        "package": "harpy",
        "partial": "Fldcw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fmul",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Fmul",
        "fct-type": "class",
        "title": "Fmul"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Fmul",
        "normalized": "",
        "package": "harpy",
        "partial": "Fmul",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fmulp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Fmulp",
        "fct-type": "class",
        "title": "Fmulp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Fmulp",
        "normalized": "",
        "package": "harpy",
        "partial": "Fmulp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fnstcw",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Fnstcw",
        "fct-type": "class",
        "title": "Fnstcw"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Fnstcw",
        "normalized": "",
        "package": "harpy",
        "partial": "Fnstcw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fst",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Fst",
        "fct-type": "class",
        "title": "Fst"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Fst",
        "normalized": "",
        "package": "harpy",
        "partial": "Fst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fst80",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Fst80",
        "fct-type": "class",
        "title": "Fst80"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Fst80",
        "normalized": "",
        "package": "harpy",
        "partial": "Fst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fstp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Fstp",
        "fct-type": "class",
        "title": "Fstp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Fstp",
        "normalized": "",
        "package": "harpy",
        "partial": "Fstp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fsub",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Fsub",
        "fct-type": "class",
        "title": "Fsub"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Fsub",
        "normalized": "",
        "package": "harpy",
        "partial": "Fsub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fsubp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Fsubp",
        "fct-type": "class",
        "title": "Fsubp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Fsubp",
        "normalized": "",
        "package": "harpy",
        "partial": "Fsubp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Fsubr",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Fsubr",
        "fct-type": "class",
        "title": "Fsubr"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Fsubr",
        "normalized": "",
        "package": "harpy",
        "partial": "Fsubr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Idiv",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Idiv",
        "fct-type": "class",
        "title": "Idiv"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Idiv",
        "normalized": "",
        "package": "harpy",
        "partial": "Idiv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Imul",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Imul",
        "fct-type": "class",
        "title": "Imul"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Imul",
        "normalized": "",
        "package": "harpy",
        "partial": "Imul",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:InPlace",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "data",
        "fct-source": "src/Harpy-X86Assembler.html#InPlace",
        "fct-type": "data",
        "title": "InPlace"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "InPlace",
        "normalized": "",
        "package": "harpy",
        "partial": "In Place",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Inc",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Inc",
        "fct-type": "class",
        "title": "Inc"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Inc",
        "normalized": "",
        "package": "harpy",
        "partial": "Inc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Ind",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "newtype",
        "fct-source": "src/Harpy-X86Assembler.html#Ind",
        "fct-type": "newtype",
        "title": "Ind"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Ind",
        "normalized": "",
        "package": "harpy",
        "partial": "Ind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Ja",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Ja",
        "fct-type": "class",
        "title": "Ja"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Ja",
        "normalized": "",
        "package": "harpy",
        "partial": "Ja",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jae",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Jae",
        "fct-type": "class",
        "title": "Jae"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Jae",
        "normalized": "",
        "package": "harpy",
        "partial": "Jae",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jb",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Jb",
        "fct-type": "class",
        "title": "Jb"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Jb",
        "normalized": "",
        "package": "harpy",
        "partial": "Jb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jbe",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Jbe",
        "fct-type": "class",
        "title": "Jbe"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Jbe",
        "normalized": "",
        "package": "harpy",
        "partial": "Jbe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jc",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Jc",
        "fct-type": "class",
        "title": "Jc"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Jc",
        "normalized": "",
        "package": "harpy",
        "partial": "Jc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Je",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Je",
        "fct-type": "class",
        "title": "Je"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Je",
        "normalized": "",
        "package": "harpy",
        "partial": "Je",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jg",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Jg",
        "fct-type": "class",
        "title": "Jg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Jg",
        "normalized": "",
        "package": "harpy",
        "partial": "Jg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jge",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Jge",
        "fct-type": "class",
        "title": "Jge"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Jge",
        "normalized": "",
        "package": "harpy",
        "partial": "Jge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jl",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Jl",
        "fct-type": "class",
        "title": "Jl"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Jl",
        "normalized": "",
        "package": "harpy",
        "partial": "Jl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jle",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Jle",
        "fct-type": "class",
        "title": "Jle"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Jle",
        "normalized": "",
        "package": "harpy",
        "partial": "Jle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jmp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Jmp",
        "fct-type": "class",
        "title": "Jmp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Jmp",
        "normalized": "",
        "package": "harpy",
        "partial": "Jmp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jna",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Jna",
        "fct-type": "class",
        "title": "Jna"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Jna",
        "normalized": "",
        "package": "harpy",
        "partial": "Jna",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jnae",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Jnae",
        "fct-type": "class",
        "title": "Jnae"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Jnae",
        "normalized": "",
        "package": "harpy",
        "partial": "Jnae",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jnb",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Jnb",
        "fct-type": "class",
        "title": "Jnb"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Jnb",
        "normalized": "",
        "package": "harpy",
        "partial": "Jnb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jnbe",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Jnbe",
        "fct-type": "class",
        "title": "Jnbe"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Jnbe",
        "normalized": "",
        "package": "harpy",
        "partial": "Jnbe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jnc",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Jnc",
        "fct-type": "class",
        "title": "Jnc"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Jnc",
        "normalized": "",
        "package": "harpy",
        "partial": "Jnc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jne",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Jne",
        "fct-type": "class",
        "title": "Jne"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Jne",
        "normalized": "",
        "package": "harpy",
        "partial": "Jne",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jng",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Jng",
        "fct-type": "class",
        "title": "Jng"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Jng",
        "normalized": "",
        "package": "harpy",
        "partial": "Jng",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jnge",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Jnge",
        "fct-type": "class",
        "title": "Jnge"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Jnge",
        "normalized": "",
        "package": "harpy",
        "partial": "Jnge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jnl",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Jnl",
        "fct-type": "class",
        "title": "Jnl"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Jnl",
        "normalized": "",
        "package": "harpy",
        "partial": "Jnl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jnle",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Jnle",
        "fct-type": "class",
        "title": "Jnle"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Jnle",
        "normalized": "",
        "package": "harpy",
        "partial": "Jnle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jno",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Jno",
        "fct-type": "class",
        "title": "Jno"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Jno",
        "normalized": "",
        "package": "harpy",
        "partial": "Jno",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jnp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Jnp",
        "fct-type": "class",
        "title": "Jnp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Jnp",
        "normalized": "",
        "package": "harpy",
        "partial": "Jnp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jns",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Jns",
        "fct-type": "class",
        "title": "Jns"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Jns",
        "normalized": "",
        "package": "harpy",
        "partial": "Jns",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jnz",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Jnz",
        "fct-type": "class",
        "title": "Jnz"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Jnz",
        "normalized": "",
        "package": "harpy",
        "partial": "Jnz",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jo",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Jo",
        "fct-type": "class",
        "title": "Jo"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Jo",
        "normalized": "",
        "package": "harpy",
        "partial": "Jo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Jp",
        "fct-type": "class",
        "title": "Jp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Jp",
        "normalized": "",
        "package": "harpy",
        "partial": "Jp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jpe",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Jpe",
        "fct-type": "class",
        "title": "Jpe"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Jpe",
        "normalized": "",
        "package": "harpy",
        "partial": "Jpe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jpo",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Jpo",
        "fct-type": "class",
        "title": "Jpo"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Jpo",
        "normalized": "",
        "package": "harpy",
        "partial": "Jpo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Js",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Js",
        "fct-type": "class",
        "title": "Js"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Js",
        "normalized": "",
        "package": "harpy",
        "partial": "Js",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Jz",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Jz",
        "fct-type": "class",
        "title": "Jz"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Jz",
        "normalized": "",
        "package": "harpy",
        "partial": "Jz",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Lea",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Lea",
        "fct-type": "class",
        "title": "Lea"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Lea",
        "normalized": "",
        "package": "harpy",
        "partial": "Lea",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Loop",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Loop",
        "fct-type": "class",
        "title": "Loop"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Loop",
        "normalized": "",
        "package": "harpy",
        "partial": "Loop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Maxpd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Maxpd",
        "fct-type": "class",
        "title": "Maxpd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Maxpd",
        "normalized": "",
        "package": "harpy",
        "partial": "Maxpd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Maxps",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Maxps",
        "fct-type": "class",
        "title": "Maxps"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Maxps",
        "normalized": "",
        "package": "harpy",
        "partial": "Maxps",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Maxsd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Maxsd",
        "fct-type": "class",
        "title": "Maxsd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Maxsd",
        "normalized": "",
        "package": "harpy",
        "partial": "Maxsd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Maxss",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Maxss",
        "fct-type": "class",
        "title": "Maxss"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Maxss",
        "normalized": "",
        "package": "harpy",
        "partial": "Maxss",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Minpd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Minpd",
        "fct-type": "class",
        "title": "Minpd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Minpd",
        "normalized": "",
        "package": "harpy",
        "partial": "Minpd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Minps",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Minps",
        "fct-type": "class",
        "title": "Minps"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Minps",
        "normalized": "",
        "package": "harpy",
        "partial": "Minps",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Minsd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Minsd",
        "fct-type": "class",
        "title": "Minsd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Minsd",
        "normalized": "",
        "package": "harpy",
        "partial": "Minsd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Minss",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Minss",
        "fct-type": "class",
        "title": "Minss"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Minss",
        "normalized": "",
        "package": "harpy",
        "partial": "Minss",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Mov",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Mov",
        "fct-type": "class",
        "title": "Mov"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Mov",
        "normalized": "",
        "package": "harpy",
        "partial": "Mov",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Movlps",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Movlps",
        "fct-type": "class",
        "title": "Movlps"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Movlps",
        "normalized": "",
        "package": "harpy",
        "partial": "Movlps",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Movsd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Movsd",
        "fct-type": "class",
        "title": "Movsd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Movsd",
        "normalized": "",
        "package": "harpy",
        "partial": "Movsd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Movss",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Movss",
        "fct-type": "class",
        "title": "Movss"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Movss",
        "normalized": "",
        "package": "harpy",
        "partial": "Movss",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Movsxb",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Movsxb",
        "fct-type": "class",
        "title": "Movsxb"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Movsxb",
        "normalized": "",
        "package": "harpy",
        "partial": "Movsxb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Movsxw",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Movsxw",
        "fct-type": "class",
        "title": "Movsxw"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Movsxw",
        "normalized": "",
        "package": "harpy",
        "partial": "Movsxw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Movups",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Movups",
        "fct-type": "class",
        "title": "Movups"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Movups",
        "normalized": "",
        "package": "harpy",
        "partial": "Movups",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Movzxb",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Movzxb",
        "fct-type": "class",
        "title": "Movzxb"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Movzxb",
        "normalized": "",
        "package": "harpy",
        "partial": "Movzxb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Movzxw",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Movzxw",
        "fct-type": "class",
        "title": "Movzxw"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Movzxw",
        "normalized": "",
        "package": "harpy",
        "partial": "Movzxw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Mul",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Mul",
        "fct-type": "class",
        "title": "Mul"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Mul",
        "normalized": "",
        "package": "harpy",
        "partial": "Mul",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Mulpd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Mulpd",
        "fct-type": "class",
        "title": "Mulpd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Mulpd",
        "normalized": "",
        "package": "harpy",
        "partial": "Mulpd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Mulps",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Mulps",
        "fct-type": "class",
        "title": "Mulps"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Mulps",
        "normalized": "",
        "package": "harpy",
        "partial": "Mulps",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Mulsd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Mulsd",
        "fct-type": "class",
        "title": "Mulsd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Mulsd",
        "normalized": "",
        "package": "harpy",
        "partial": "Mulsd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Mulss",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Mulss",
        "fct-type": "class",
        "title": "Mulss"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Mulss",
        "normalized": "",
        "package": "harpy",
        "partial": "Mulss",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Neg",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Neg",
        "fct-type": "class",
        "title": "Neg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Neg",
        "normalized": "",
        "package": "harpy",
        "partial": "Neg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Not",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Not",
        "fct-type": "class",
        "title": "Not"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Not",
        "normalized": "",
        "package": "harpy",
        "partial": "Not",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Or",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Or",
        "fct-type": "class",
        "title": "Or"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Or",
        "normalized": "",
        "package": "harpy",
        "partial": "Or",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Pop",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Pop",
        "fct-type": "class",
        "title": "Pop"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Pop",
        "normalized": "",
        "package": "harpy",
        "partial": "Pop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Prefetch0",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Prefetch0",
        "fct-type": "class",
        "title": "Prefetch0"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Prefetch0",
        "normalized": "",
        "package": "harpy",
        "partial": "Prefetch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Prefetch1",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Prefetch1",
        "fct-type": "class",
        "title": "Prefetch1"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Prefetch1",
        "normalized": "",
        "package": "harpy",
        "partial": "Prefetch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Prefetch2",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Prefetch2",
        "fct-type": "class",
        "title": "Prefetch2"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Prefetch2",
        "normalized": "",
        "package": "harpy",
        "partial": "Prefetch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Prefetchnta",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Prefetchnta",
        "fct-type": "class",
        "title": "Prefetchnta"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Prefetchnta",
        "normalized": "",
        "package": "harpy",
        "partial": "Prefetchnta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Push",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Push",
        "fct-type": "class",
        "title": "Push"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Push",
        "normalized": "",
        "package": "harpy",
        "partial": "Push",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Rcl",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Rcl",
        "fct-type": "class",
        "title": "Rcl"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Rcl",
        "normalized": "",
        "package": "harpy",
        "partial": "Rcl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Rcr",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Rcr",
        "fct-type": "class",
        "title": "Rcr"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Rcr",
        "normalized": "",
        "package": "harpy",
        "partial": "Rcr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Reg16",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "newtype",
        "fct-source": "src/Harpy-X86Assembler.html#Reg16",
        "fct-type": "newtype",
        "title": "Reg16"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Reg16",
        "normalized": "",
        "package": "harpy",
        "partial": "Reg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Reg32",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "newtype",
        "fct-source": "src/Harpy-X86Assembler.html#Reg32",
        "fct-type": "newtype",
        "title": "Reg32"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Reg32",
        "normalized": "",
        "package": "harpy",
        "partial": "Reg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Reg8",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "newtype",
        "fct-source": "src/Harpy-X86Assembler.html#Reg8",
        "fct-type": "newtype",
        "title": "Reg8"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Reg8",
        "normalized": "",
        "package": "harpy",
        "partial": "Reg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Rol",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Rol",
        "fct-type": "class",
        "title": "Rol"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Rol",
        "normalized": "",
        "package": "harpy",
        "partial": "Rol",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Ror",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Ror",
        "fct-type": "class",
        "title": "Ror"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Ror",
        "normalized": "",
        "package": "harpy",
        "partial": "Ror",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Sal",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Sal",
        "fct-type": "class",
        "title": "Sal"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Sal",
        "normalized": "",
        "package": "harpy",
        "partial": "Sal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Sar",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Sar",
        "fct-type": "class",
        "title": "Sar"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Sar",
        "normalized": "",
        "package": "harpy",
        "partial": "Sar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Sbb",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Sbb",
        "fct-type": "class",
        "title": "Sbb"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Sbb",
        "normalized": "",
        "package": "harpy",
        "partial": "Sbb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Scale",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "data",
        "fct-source": "src/Harpy-X86Assembler.html#Scale",
        "fct-type": "data",
        "title": "Scale"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Scale",
        "normalized": "",
        "package": "harpy",
        "partial": "Scale",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Seta",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Seta",
        "fct-type": "class",
        "title": "Seta"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Seta",
        "normalized": "",
        "package": "harpy",
        "partial": "Seta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setae",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Setae",
        "fct-type": "class",
        "title": "Setae"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Setae",
        "normalized": "",
        "package": "harpy",
        "partial": "Setae",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setb",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Setb",
        "fct-type": "class",
        "title": "Setb"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Setb",
        "normalized": "",
        "package": "harpy",
        "partial": "Setb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setbe",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Setbe",
        "fct-type": "class",
        "title": "Setbe"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Setbe",
        "normalized": "",
        "package": "harpy",
        "partial": "Setbe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setc",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Setc",
        "fct-type": "class",
        "title": "Setc"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Setc",
        "normalized": "",
        "package": "harpy",
        "partial": "Setc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Sete",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Sete",
        "fct-type": "class",
        "title": "Sete"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Sete",
        "normalized": "",
        "package": "harpy",
        "partial": "Sete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setg",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Setg",
        "fct-type": "class",
        "title": "Setg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Setg",
        "normalized": "",
        "package": "harpy",
        "partial": "Setg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setge",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Setge",
        "fct-type": "class",
        "title": "Setge"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Setge",
        "normalized": "",
        "package": "harpy",
        "partial": "Setge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setl",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Setl",
        "fct-type": "class",
        "title": "Setl"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Setl",
        "normalized": "",
        "package": "harpy",
        "partial": "Setl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setle",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Setle",
        "fct-type": "class",
        "title": "Setle"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Setle",
        "normalized": "",
        "package": "harpy",
        "partial": "Setle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setna",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Setna",
        "fct-type": "class",
        "title": "Setna"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Setna",
        "normalized": "",
        "package": "harpy",
        "partial": "Setna",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setnae",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Setnae",
        "fct-type": "class",
        "title": "Setnae"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Setnae",
        "normalized": "",
        "package": "harpy",
        "partial": "Setnae",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setnb",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Setnb",
        "fct-type": "class",
        "title": "Setnb"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Setnb",
        "normalized": "",
        "package": "harpy",
        "partial": "Setnb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setnbe",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Setnbe",
        "fct-type": "class",
        "title": "Setnbe"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Setnbe",
        "normalized": "",
        "package": "harpy",
        "partial": "Setnbe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setnc",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Setnc",
        "fct-type": "class",
        "title": "Setnc"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Setnc",
        "normalized": "",
        "package": "harpy",
        "partial": "Setnc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setne",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Setne",
        "fct-type": "class",
        "title": "Setne"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Setne",
        "normalized": "",
        "package": "harpy",
        "partial": "Setne",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setng",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Setng",
        "fct-type": "class",
        "title": "Setng"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Setng",
        "normalized": "",
        "package": "harpy",
        "partial": "Setng",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setnge",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Setnge",
        "fct-type": "class",
        "title": "Setnge"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Setnge",
        "normalized": "",
        "package": "harpy",
        "partial": "Setnge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setnl",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Setnl",
        "fct-type": "class",
        "title": "Setnl"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Setnl",
        "normalized": "",
        "package": "harpy",
        "partial": "Setnl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setnle",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Setnle",
        "fct-type": "class",
        "title": "Setnle"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Setnle",
        "normalized": "",
        "package": "harpy",
        "partial": "Setnle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setno",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Setno",
        "fct-type": "class",
        "title": "Setno"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Setno",
        "normalized": "",
        "package": "harpy",
        "partial": "Setno",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setnp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Setnp",
        "fct-type": "class",
        "title": "Setnp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Setnp",
        "normalized": "",
        "package": "harpy",
        "partial": "Setnp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setns",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Setns",
        "fct-type": "class",
        "title": "Setns"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Setns",
        "normalized": "",
        "package": "harpy",
        "partial": "Setns",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setnz",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Setnz",
        "fct-type": "class",
        "title": "Setnz"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Setnz",
        "normalized": "",
        "package": "harpy",
        "partial": "Setnz",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Seto",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Seto",
        "fct-type": "class",
        "title": "Seto"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Seto",
        "normalized": "",
        "package": "harpy",
        "partial": "Seto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Setp",
        "fct-type": "class",
        "title": "Setp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Setp",
        "normalized": "",
        "package": "harpy",
        "partial": "Setp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setpe",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Setpe",
        "fct-type": "class",
        "title": "Setpe"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Setpe",
        "normalized": "",
        "package": "harpy",
        "partial": "Setpe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setpo",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Setpo",
        "fct-type": "class",
        "title": "Setpo"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Setpo",
        "normalized": "",
        "package": "harpy",
        "partial": "Setpo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Sets",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Sets",
        "fct-type": "class",
        "title": "Sets"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Sets",
        "normalized": "",
        "package": "harpy",
        "partial": "Sets",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Setz",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Setz",
        "fct-type": "class",
        "title": "Setz"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Setz",
        "normalized": "",
        "package": "harpy",
        "partial": "Setz",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Shl",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Shl",
        "fct-type": "class",
        "title": "Shl"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Shl",
        "normalized": "",
        "package": "harpy",
        "partial": "Shl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Shld",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Shld",
        "fct-type": "class",
        "title": "Shld"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Shld",
        "normalized": "",
        "package": "harpy",
        "partial": "Shld",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Shr",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Shr",
        "fct-type": "class",
        "title": "Shr"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Shr",
        "normalized": "",
        "package": "harpy",
        "partial": "Shr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Shrd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Shrd",
        "fct-type": "class",
        "title": "Shrd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Shrd",
        "normalized": "",
        "package": "harpy",
        "partial": "Shrd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Sqrtpd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Sqrtpd",
        "fct-type": "class",
        "title": "Sqrtpd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Sqrtpd",
        "normalized": "",
        "package": "harpy",
        "partial": "Sqrtpd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Sqrtps",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Sqrtps",
        "fct-type": "class",
        "title": "Sqrtps"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Sqrtps",
        "normalized": "",
        "package": "harpy",
        "partial": "Sqrtps",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Sqrtsd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Sqrtsd",
        "fct-type": "class",
        "title": "Sqrtsd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Sqrtsd",
        "normalized": "",
        "package": "harpy",
        "partial": "Sqrtsd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Sqrtss",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Sqrtss",
        "fct-type": "class",
        "title": "Sqrtss"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Sqrtss",
        "normalized": "",
        "package": "harpy",
        "partial": "Sqrtss",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Sub",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Sub",
        "fct-type": "class",
        "title": "Sub"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Sub",
        "normalized": "",
        "package": "harpy",
        "partial": "Sub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Subpd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Subpd",
        "fct-type": "class",
        "title": "Subpd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Subpd",
        "normalized": "",
        "package": "harpy",
        "partial": "Subpd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Subps",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Subps",
        "fct-type": "class",
        "title": "Subps"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Subps",
        "normalized": "",
        "package": "harpy",
        "partial": "Subps",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Subsd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Subsd",
        "fct-type": "class",
        "title": "Subsd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Subsd",
        "normalized": "",
        "package": "harpy",
        "partial": "Subsd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Subss",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Subss",
        "fct-type": "class",
        "title": "Subss"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Subss",
        "normalized": "",
        "package": "harpy",
        "partial": "Subss",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Test",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Test",
        "fct-type": "class",
        "title": "Test"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Test",
        "normalized": "",
        "package": "harpy",
        "partial": "Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Ucomisd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Ucomisd",
        "fct-type": "class",
        "title": "Ucomisd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Ucomisd",
        "normalized": "",
        "package": "harpy",
        "partial": "Ucomisd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Ucomiss",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Ucomiss",
        "fct-type": "class",
        "title": "Ucomiss"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Ucomiss",
        "normalized": "",
        "package": "harpy",
        "partial": "Ucomiss",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:XMMLoc",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#XMMLoc",
        "fct-type": "class",
        "title": "XMMLoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "XMMLoc",
        "normalized": "",
        "package": "harpy",
        "partial": "XMMLoc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:XMMReg",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "newtype",
        "fct-source": "src/Harpy-X86CodeGen.html#XMMReg",
        "fct-type": "newtype",
        "title": "XMMReg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "XMMReg",
        "normalized": "",
        "package": "harpy",
        "partial": "XMMReg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Xadd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Xadd",
        "fct-type": "class",
        "title": "Xadd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Xadd",
        "normalized": "",
        "package": "harpy",
        "partial": "Xadd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Xchg",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Xchg",
        "fct-type": "class",
        "title": "Xchg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Xchg",
        "normalized": "",
        "package": "harpy",
        "partial": "Xchg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#t:Xor",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86Assembler.html#Xor",
        "fct-type": "class",
        "title": "Xor"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Xor",
        "normalized": "",
        "package": "harpy",
        "partial": "Xor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:Addr",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Addr Word32",
        "fct-source": "src/Harpy-X86Assembler.html#Addr",
        "fct-type": "function",
        "title": "Addr"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Addr",
        "normalized": "",
        "package": "harpy",
        "partial": "Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:Disp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Disp Word32",
        "fct-source": "src/Harpy-X86Assembler.html#Disp",
        "fct-type": "function",
        "title": "Disp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Disp",
        "normalized": "",
        "package": "harpy",
        "partial": "Disp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:FPReg",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "FPReg Word8",
        "fct-source": "src/Harpy-X86Assembler.html#FPReg",
        "fct-type": "function",
        "title": "FPReg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "FPReg",
        "normalized": "",
        "package": "harpy",
        "partial": "FPReg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:FPTopReg",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "FPTopReg",
        "fct-source": "src/Harpy-X86Assembler.html#FPTopReg",
        "fct-type": "function",
        "title": "FPTopReg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "FPTopReg",
        "normalized": "",
        "package": "harpy",
        "partial": "FPTop Reg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:InPlace",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "InPlace",
        "fct-source": "src/Harpy-X86Assembler.html#InPlace",
        "fct-type": "function",
        "title": "InPlace"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "InPlace",
        "normalized": "",
        "package": "harpy",
        "partial": "In Place",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:Ind",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Ind Reg32",
        "fct-source": "src/Harpy-X86Assembler.html#Ind",
        "fct-type": "function",
        "title": "Ind"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Ind",
        "normalized": "",
        "package": "harpy",
        "partial": "Ind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:Reg16",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Reg16 Word8",
        "fct-source": "src/Harpy-X86Assembler.html#Reg16",
        "fct-type": "function",
        "title": "Reg16"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Reg16",
        "normalized": "",
        "package": "harpy",
        "partial": "Reg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:Reg32",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Reg32 Word8",
        "fct-source": "src/Harpy-X86Assembler.html#Reg32",
        "fct-type": "function",
        "title": "Reg32"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Reg32",
        "normalized": "",
        "package": "harpy",
        "partial": "Reg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:Reg8",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Reg8 Word8",
        "fct-source": "src/Harpy-X86Assembler.html#Reg8",
        "fct-type": "function",
        "title": "Reg8"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "Reg8",
        "normalized": "",
        "package": "harpy",
        "partial": "Reg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:S1",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "S1",
        "fct-source": "src/Harpy-X86Assembler.html#Scale",
        "fct-type": "function",
        "title": "S1"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "S1",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:S2",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "S2",
        "fct-source": "src/Harpy-X86Assembler.html#Scale",
        "fct-type": "function",
        "title": "S2"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "S2",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:S4",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "S4",
        "fct-source": "src/Harpy-X86Assembler.html#Scale",
        "fct-type": "function",
        "title": "S4"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "S4",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:S8",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "S8",
        "fct-source": "src/Harpy-X86Assembler.html#Scale",
        "fct-type": "function",
        "title": "S8"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "S8",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:XMMReg",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "XMMReg Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#XMMReg",
        "fct-type": "function",
        "title": "XMMReg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "XMMReg",
        "normalized": "",
        "package": "harpy",
        "partial": "XMMReg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:adc",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#adc",
        "fct-type": "method",
        "title": "adc"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "adc",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:add",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#add",
        "fct-type": "method",
        "title": "add"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "add",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:addpd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#addpd",
        "fct-type": "method",
        "title": "addpd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "addpd",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:addps",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#addps",
        "fct-type": "method",
        "title": "addps"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "addps",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:addsd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#addsd",
        "fct-type": "method",
        "title": "addsd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "addsd",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:addss",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#addss",
        "fct-type": "method",
        "title": "addss"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "addss",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:ah",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Reg8",
        "fct-source": "src/Harpy-X86Assembler.html#al",
        "fct-type": "function",
        "title": "ah"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "ah",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:al",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Reg8",
        "fct-source": "src/Harpy-X86Assembler.html#al",
        "fct-type": "function",
        "title": "al"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "al",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:and",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#and",
        "fct-type": "method",
        "title": "and"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "and",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:ax",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Reg16",
        "fct-source": "src/Harpy-X86Assembler.html#ax",
        "fct-type": "function",
        "title": "ax"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "ax",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:bh",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Reg8",
        "fct-source": "src/Harpy-X86Assembler.html#al",
        "fct-type": "function",
        "title": "bh"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "bh",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:bl",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Reg8",
        "fct-source": "src/Harpy-X86Assembler.html#al",
        "fct-type": "function",
        "title": "bl"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "bl",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:bp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Reg16",
        "fct-source": "src/Harpy-X86Assembler.html#ax",
        "fct-type": "function",
        "title": "bp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "bp",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:breakpoint",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#breakpoint",
        "fct-type": "function",
        "title": "breakpoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "breakpoint",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:bx",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Reg16",
        "fct-source": "src/Harpy-X86Assembler.html#ax",
        "fct-type": "function",
        "title": "bx"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "bx",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:call",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#call",
        "fct-type": "method",
        "title": "call"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "call",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cdq",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cdq",
        "fct-type": "function",
        "title": "cdq"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cdq",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:ch",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Reg8",
        "fct-source": "src/Harpy-X86Assembler.html#al",
        "fct-type": "function",
        "title": "ch"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "ch",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cl",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Reg8",
        "fct-source": "src/Harpy-X86Assembler.html#al",
        "fct-type": "function",
        "title": "cl"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cl",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cld",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cld",
        "fct-type": "function",
        "title": "cld"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cld",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmova",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmova",
        "fct-type": "method",
        "title": "cmova"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmova",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovae",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmovae",
        "fct-type": "method",
        "title": "cmovae"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmovae",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovb",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmovb",
        "fct-type": "method",
        "title": "cmovb"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmovb",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovbe",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmovbe",
        "fct-type": "method",
        "title": "cmovbe"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmovbe",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovc",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmovc",
        "fct-type": "method",
        "title": "cmovc"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmovc",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmove",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmove",
        "fct-type": "method",
        "title": "cmove"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmove",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovg",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmovg",
        "fct-type": "method",
        "title": "cmovg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmovg",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovge",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmovge",
        "fct-type": "method",
        "title": "cmovge"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmovge",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovl",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmovl",
        "fct-type": "method",
        "title": "cmovl"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmovl",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovle",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmovle",
        "fct-type": "method",
        "title": "cmovle"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmovle",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovna",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmovna",
        "fct-type": "method",
        "title": "cmovna"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmovna",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovnae",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmovnae",
        "fct-type": "method",
        "title": "cmovnae"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmovnae",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovnb",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmovnb",
        "fct-type": "method",
        "title": "cmovnb"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmovnb",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovnbe",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmovnbe",
        "fct-type": "method",
        "title": "cmovnbe"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmovnbe",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovnc",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmovnc",
        "fct-type": "method",
        "title": "cmovnc"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmovnc",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovne",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmovne",
        "fct-type": "method",
        "title": "cmovne"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmovne",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovng",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmovng",
        "fct-type": "method",
        "title": "cmovng"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmovng",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovnge",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmovnge",
        "fct-type": "method",
        "title": "cmovnge"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmovnge",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovnl",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmovnl",
        "fct-type": "method",
        "title": "cmovnl"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmovnl",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovnle",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmovnle",
        "fct-type": "method",
        "title": "cmovnle"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmovnle",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovno",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmovno",
        "fct-type": "method",
        "title": "cmovno"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmovno",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovnp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmovnp",
        "fct-type": "method",
        "title": "cmovnp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmovnp",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovns",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmovns",
        "fct-type": "method",
        "title": "cmovns"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmovns",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovnz",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmovnz",
        "fct-type": "method",
        "title": "cmovnz"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmovnz",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovo",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmovo",
        "fct-type": "method",
        "title": "cmovo"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmovo",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmovp",
        "fct-type": "method",
        "title": "cmovp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmovp",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovpe",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmovpe",
        "fct-type": "method",
        "title": "cmovpe"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmovpe",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovpo",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmovpo",
        "fct-type": "method",
        "title": "cmovpo"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmovpo",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovs",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmovs",
        "fct-type": "method",
        "title": "cmovs"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmovs",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmovz",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmovz",
        "fct-type": "method",
        "title": "cmovz"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmovz",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmp",
        "fct-type": "method",
        "title": "cmp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmp",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cmpxchg",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cmpxchg",
        "fct-type": "method",
        "title": "cmpxchg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cmpxchg",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:comisd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#comisd",
        "fct-type": "method",
        "title": "comisd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "comisd",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:comiss",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#comiss",
        "fct-type": "method",
        "title": "comiss"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "comiss",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cvtdq2ps",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "XMMReg -\u003e xmm -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cvtdq2ps",
        "fct-type": "function",
        "title": "cvtdq2ps"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cvtdq2ps",
        "normalized": "XMMReg-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "XMMReg-\u003exmm-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cvttps2dq",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "XMMReg -\u003e xmm -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#cvttps2dq",
        "fct-type": "function",
        "title": "cvttps2dq"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cvttps2dq",
        "normalized": "XMMReg-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "XMMReg-\u003exmm-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:cx",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Reg16",
        "fct-source": "src/Harpy-X86Assembler.html#ax",
        "fct-type": "function",
        "title": "cx"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "cx",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:dec",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#dec",
        "fct-type": "method",
        "title": "dec"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "dec",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:dh",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Reg8",
        "fct-source": "src/Harpy-X86Assembler.html#al",
        "fct-type": "function",
        "title": "dh"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "dh",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:di",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Reg16",
        "fct-source": "src/Harpy-X86Assembler.html#ax",
        "fct-type": "function",
        "title": "di"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "di",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:div",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#div",
        "fct-type": "method",
        "title": "div"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "div",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:divpd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#divpd",
        "fct-type": "method",
        "title": "divpd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "divpd",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:divps",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#divps",
        "fct-type": "method",
        "title": "divps"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "divps",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:divsd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#divsd",
        "fct-type": "method",
        "title": "divsd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "divsd",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:divss",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#divss",
        "fct-type": "method",
        "title": "divss"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "divss",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:dl",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Reg8",
        "fct-source": "src/Harpy-X86Assembler.html#al",
        "fct-type": "function",
        "title": "dl"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "dl",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:dx",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Reg16",
        "fct-source": "src/Harpy-X86Assembler.html#ax",
        "fct-type": "function",
        "title": "dx"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "dx",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:eax",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Reg32",
        "fct-source": "src/Harpy-X86Assembler.html#eax",
        "fct-type": "function",
        "title": "eax"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "eax",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:ebp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Reg32",
        "fct-source": "src/Harpy-X86Assembler.html#eax",
        "fct-type": "function",
        "title": "ebp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "ebp",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:ebx",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Reg32",
        "fct-source": "src/Harpy-X86Assembler.html#eax",
        "fct-type": "function",
        "title": "ebx"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "ebx",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:ecx",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Reg32",
        "fct-source": "src/Harpy-X86Assembler.html#eax",
        "fct-type": "function",
        "title": "ecx"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "ecx",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:edi",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Reg32",
        "fct-source": "src/Harpy-X86Assembler.html#eax",
        "fct-type": "function",
        "title": "edi"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "edi",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:edx",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Reg32",
        "fct-source": "src/Harpy-X86Assembler.html#eax",
        "fct-type": "function",
        "title": "edx"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "edx",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:enter",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Word16 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#enter",
        "fct-type": "function",
        "title": "enter"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "enter",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:esi",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Reg32",
        "fct-source": "src/Harpy-X86Assembler.html#eax",
        "fct-type": "function",
        "title": "esi"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "esi",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:esp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Reg32",
        "fct-source": "src/Harpy-X86Assembler.html#eax",
        "fct-type": "function",
        "title": "esp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "esp",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fabs",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fabs",
        "fct-type": "function",
        "title": "fabs"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fabs",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fadd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fadd",
        "fct-type": "method",
        "title": "fadd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fadd",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:faddp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#faddp",
        "fct-type": "method",
        "title": "faddp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "faddp",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fchs",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fchs",
        "fct-type": "function",
        "title": "fchs"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fchs",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fcom",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fcom",
        "fct-type": "method",
        "title": "fcom"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fcom",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fcomi",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "FPReg -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fcomi",
        "fct-type": "function",
        "title": "fcomi"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fcomi",
        "normalized": "FPReg-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "FPReg-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fcomip",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "FPReg -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fcomip",
        "fct-type": "function",
        "title": "fcomip"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fcomip",
        "normalized": "FPReg-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "FPReg-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fcomp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fcomp",
        "fct-type": "method",
        "title": "fcomp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fcomp",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fcompp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fcompp",
        "fct-type": "function",
        "title": "fcompp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fcompp",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fcos",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fcos",
        "fct-type": "function",
        "title": "fcos"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fcos",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fdiv",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fdiv",
        "fct-type": "method",
        "title": "fdiv"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fdiv",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fdivp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fdivp",
        "fct-type": "method",
        "title": "fdivp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fdivp",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fdivr",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fdivr",
        "fct-type": "method",
        "title": "fdivr"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fdivr",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fiadd16",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fiadd16",
        "fct-type": "method",
        "title": "fiadd16"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fiadd16",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fiadd32",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fiadd32",
        "fct-type": "method",
        "title": "fiadd32"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fiadd32",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fidiv16",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fidiv16",
        "fct-type": "method",
        "title": "fidiv16"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fidiv16",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fidiv32",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fidiv32",
        "fct-type": "method",
        "title": "fidiv32"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fidiv32",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fild",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fild",
        "fct-type": "method",
        "title": "fild"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fild",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fimul16",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fimul16",
        "fct-type": "method",
        "title": "fimul16"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fimul16",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fimul32",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fimul32",
        "fct-type": "method",
        "title": "fimul32"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fimul32",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fist",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fist",
        "fct-type": "method",
        "title": "fist"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fist",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fistp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fistp",
        "fct-type": "method",
        "title": "fistp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fistp",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fisub16",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fisub16",
        "fct-type": "method",
        "title": "fisub16"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fisub16",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fisub32",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fisub32",
        "fct-type": "method",
        "title": "fisub32"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fisub32",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fld",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fld",
        "fct-type": "method",
        "title": "fld"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fld",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fld1",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fld1",
        "fct-type": "function",
        "title": "fld1"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fld1",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fld80",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fld80",
        "fct-type": "method",
        "title": "fld80"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fld80",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fldcw",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fldcw",
        "fct-type": "method",
        "title": "fldcw"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fldcw",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fldpi",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fldpi",
        "fct-type": "function",
        "title": "fldpi"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fldpi",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fldz",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fldz",
        "fct-type": "function",
        "title": "fldz"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fldz",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fmul",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fmul",
        "fct-type": "method",
        "title": "fmul"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fmul",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fmulp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fmulp",
        "fct-type": "method",
        "title": "fmulp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fmulp",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fnstcw",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fnstcw",
        "fct-type": "method",
        "title": "fnstcw"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fnstcw",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fnstsw",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fnstsw",
        "fct-type": "function",
        "title": "fnstsw"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fnstsw",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fp0",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "FPReg",
        "fct-source": "src/Harpy-X86Assembler.html#fp0",
        "fct-type": "function",
        "title": "fp0"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fp0",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fp1",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "FPReg",
        "fct-source": "src/Harpy-X86Assembler.html#fp1",
        "fct-type": "function",
        "title": "fp1"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fp1",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fp2",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "FPReg",
        "fct-source": "src/Harpy-X86Assembler.html#fp2",
        "fct-type": "function",
        "title": "fp2"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fp2",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fp3",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "FPReg",
        "fct-source": "src/Harpy-X86Assembler.html#fp3",
        "fct-type": "function",
        "title": "fp3"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fp3",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fp4",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "FPReg",
        "fct-source": "src/Harpy-X86Assembler.html#fp4",
        "fct-type": "function",
        "title": "fp4"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fp4",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fp5",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "FPReg",
        "fct-source": "src/Harpy-X86Assembler.html#fp5",
        "fct-type": "function",
        "title": "fp5"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fp5",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fp6",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "FPReg",
        "fct-source": "src/Harpy-X86Assembler.html#fp6",
        "fct-type": "function",
        "title": "fp6"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fp6",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fp7",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "FPReg",
        "fct-source": "src/Harpy-X86Assembler.html#fp7",
        "fct-type": "function",
        "title": "fp7"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fp7",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fpTop",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "FPTopReg",
        "fct-source": "src/Harpy-X86Assembler.html#fpTop",
        "fct-type": "function",
        "title": "fpTop"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fpTop",
        "normalized": "",
        "package": "harpy",
        "partial": "Top",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fpatan",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fpatan",
        "fct-type": "function",
        "title": "fpatan"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fpatan",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fprem",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fprem",
        "fct-type": "function",
        "title": "fprem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fprem",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fprem1",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fprem1",
        "fct-type": "function",
        "title": "fprem1"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fprem1",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fptan",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fptan",
        "fct-type": "function",
        "title": "fptan"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fptan",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:frem",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#frem",
        "fct-type": "function",
        "title": "frem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "frem",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:frndint",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#frndint",
        "fct-type": "function",
        "title": "frndint"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "frndint",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fsin",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fsin",
        "fct-type": "function",
        "title": "fsin"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fsin",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fsqrt",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fsqrt",
        "fct-type": "function",
        "title": "fsqrt"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fsqrt",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fst",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fst",
        "fct-type": "method",
        "title": "fst"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fst",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fst80",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fst80",
        "fct-type": "method",
        "title": "fst80"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fst80",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fstp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fstp",
        "fct-type": "method",
        "title": "fstp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fstp",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fstsw",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fstsw",
        "fct-type": "function",
        "title": "fstsw"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fstsw",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fsub",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fsub",
        "fct-type": "method",
        "title": "fsub"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fsub",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fsubp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fsubp",
        "fct-type": "method",
        "title": "fsubp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fsubp",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fsubr",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fsubr",
        "fct-type": "method",
        "title": "fsubr"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fsubr",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:ftst",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#ftst",
        "fct-type": "function",
        "title": "ftst"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "ftst",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fucomi",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "FPReg -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fucomi",
        "fct-type": "function",
        "title": "fucomi"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fucomi",
        "normalized": "FPReg-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "FPReg-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fucomip",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "FPReg -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fucomip",
        "fct-type": "function",
        "title": "fucomip"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fucomip",
        "normalized": "FPReg-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "FPReg-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fucompp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fucompp",
        "fct-type": "function",
        "title": "fucompp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fucompp",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fxam",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fxam",
        "fct-type": "function",
        "title": "fxam"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fxam",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:fxch",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "FPReg -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#fxch",
        "fct-type": "function",
        "title": "fxch"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "fxch",
        "normalized": "FPReg-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "FPReg-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:haddpd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "XMMReg -\u003e xmm -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#haddpd",
        "fct-type": "function",
        "title": "haddpd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "haddpd",
        "normalized": "XMMReg-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "XMMReg-\u003exmm-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:haddps",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "XMMReg -\u003e xmm -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#haddps",
        "fct-type": "function",
        "title": "haddps"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "haddps",
        "normalized": "XMMReg-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "XMMReg-\u003exmm-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:idiv",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#idiv",
        "fct-type": "method",
        "title": "idiv"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "idiv",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:imul",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e c -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#imul",
        "fct-type": "method",
        "title": "imul"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "imul",
        "normalized": "a-\u003eb-\u003ec-\u003eCodeGen d e()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003ec-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:inc",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#inc",
        "fct-type": "method",
        "title": "inc"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "inc",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:ja",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#ja",
        "fct-type": "method",
        "title": "ja"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "ja",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jae",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#jae",
        "fct-type": "method",
        "title": "jae"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "jae",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jb",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#jb",
        "fct-type": "method",
        "title": "jb"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "jb",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jbe",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#jbe",
        "fct-type": "method",
        "title": "jbe"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "jbe",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jc",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#jc",
        "fct-type": "method",
        "title": "jc"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "jc",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:je",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#je",
        "fct-type": "method",
        "title": "je"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "je",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jecxz",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#jecxz",
        "fct-type": "function",
        "title": "jecxz"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "jecxz",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jg",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#jg",
        "fct-type": "method",
        "title": "jg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "jg",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jge",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#jge",
        "fct-type": "method",
        "title": "jge"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "jge",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jl",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#jl",
        "fct-type": "method",
        "title": "jl"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "jl",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jle",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#jle",
        "fct-type": "method",
        "title": "jle"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "jle",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jmp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#jmp",
        "fct-type": "method",
        "title": "jmp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "jmp",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jna",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#jna",
        "fct-type": "method",
        "title": "jna"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "jna",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jnae",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#jnae",
        "fct-type": "method",
        "title": "jnae"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "jnae",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jnb",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#jnb",
        "fct-type": "method",
        "title": "jnb"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "jnb",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jnbe",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#jnbe",
        "fct-type": "method",
        "title": "jnbe"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "jnbe",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jnc",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#jnc",
        "fct-type": "method",
        "title": "jnc"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "jnc",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jne",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#jne",
        "fct-type": "method",
        "title": "jne"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "jne",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jng",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#jng",
        "fct-type": "method",
        "title": "jng"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "jng",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jnge",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#jnge",
        "fct-type": "method",
        "title": "jnge"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "jnge",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jnl",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#jnl",
        "fct-type": "method",
        "title": "jnl"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "jnl",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jnle",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#jnle",
        "fct-type": "method",
        "title": "jnle"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "jnle",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jno",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#jno",
        "fct-type": "method",
        "title": "jno"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "jno",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jnp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#jnp",
        "fct-type": "method",
        "title": "jnp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "jnp",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jns",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#jns",
        "fct-type": "method",
        "title": "jns"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "jns",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jnz",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#jnz",
        "fct-type": "method",
        "title": "jnz"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "jnz",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jo",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#jo",
        "fct-type": "method",
        "title": "jo"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "jo",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#jp",
        "fct-type": "method",
        "title": "jp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "jp",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jpe",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#jpe",
        "fct-type": "method",
        "title": "jpe"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "jpe",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jpo",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#jpo",
        "fct-type": "method",
        "title": "jpo"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "jpo",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:js",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#js",
        "fct-type": "method",
        "title": "js"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "js",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:jz",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#jz",
        "fct-type": "method",
        "title": "jz"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "jz",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:lea",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#lea",
        "fct-type": "method",
        "title": "lea"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "lea",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:leave",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#leave",
        "fct-type": "function",
        "title": "leave"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "leave",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:loop",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#loop",
        "fct-type": "method",
        "title": "loop"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "loop",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:loope",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#loope",
        "fct-type": "method",
        "title": "loope"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "loope",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:loopne",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#loopne",
        "fct-type": "method",
        "title": "loopne"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "loopne",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:maxpd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#maxpd",
        "fct-type": "method",
        "title": "maxpd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "maxpd",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:maxps",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#maxps",
        "fct-type": "method",
        "title": "maxps"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "maxps",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:maxsd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#maxsd",
        "fct-type": "method",
        "title": "maxsd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "maxsd",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:maxss",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#maxss",
        "fct-type": "method",
        "title": "maxss"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "maxss",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:minpd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#minpd",
        "fct-type": "method",
        "title": "minpd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "minpd",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:minps",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#minps",
        "fct-type": "method",
        "title": "minps"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "minps",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:minsd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#minsd",
        "fct-type": "method",
        "title": "minsd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "minsd",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:minss",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#minss",
        "fct-type": "method",
        "title": "minss"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "minss",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:mov",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#mov",
        "fct-type": "method",
        "title": "mov"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "mov",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:movlps",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#movlps",
        "fct-type": "method",
        "title": "movlps"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "movlps",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:movsb",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#movsb",
        "fct-type": "function",
        "title": "movsb"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "movsb",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:movsd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#movsd",
        "fct-type": "method",
        "title": "movsd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "movsd",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:movsl",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#movsl",
        "fct-type": "function",
        "title": "movsl"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "movsl",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:movss",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#movss",
        "fct-type": "method",
        "title": "movss"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "movss",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:movsxb",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#movsxb",
        "fct-type": "method",
        "title": "movsxb"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "movsxb",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:movsxw",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#movsxw",
        "fct-type": "method",
        "title": "movsxw"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "movsxw",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:movups",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#movups",
        "fct-type": "method",
        "title": "movups"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "movups",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:movzxb",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#movzxb",
        "fct-type": "method",
        "title": "movzxb"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "movzxb",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:movzxw",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#movzxw",
        "fct-type": "method",
        "title": "movzxw"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "movzxw",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:mul",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#mul",
        "fct-type": "method",
        "title": "mul"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "mul",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:mulpd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#mulpd",
        "fct-type": "method",
        "title": "mulpd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "mulpd",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:mulps",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#mulps",
        "fct-type": "method",
        "title": "mulps"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "mulps",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:mulsd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#mulsd",
        "fct-type": "method",
        "title": "mulsd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "mulsd",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:mulss",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#mulss",
        "fct-type": "method",
        "title": "mulss"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "mulss",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:neg",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#neg",
        "fct-type": "method",
        "title": "neg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "neg",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:nop",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#nop",
        "fct-type": "function",
        "title": "nop"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "nop",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:not",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#not",
        "fct-type": "method",
        "title": "not"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "not",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:onlyCl",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s a",
        "fct-source": "src/Harpy-X86Assembler.html#onlyCl",
        "fct-type": "function",
        "title": "onlyCl"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "onlyCl",
        "normalized": "",
        "package": "harpy",
        "partial": "Cl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:onlyEbp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s a",
        "fct-source": "src/Harpy-X86Assembler.html#onlyEbp",
        "fct-type": "function",
        "title": "onlyEbp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "onlyEbp",
        "normalized": "",
        "package": "harpy",
        "partial": "Ebp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:or",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#or",
        "fct-type": "method",
        "title": "or"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "or",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:pop",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#pop",
        "fct-type": "method",
        "title": "pop"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "pop",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:popad",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#popad",
        "fct-type": "function",
        "title": "popad"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "popad",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:popfd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#popfd",
        "fct-type": "function",
        "title": "popfd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "popfd",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:prefetch0",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#prefetch0",
        "fct-type": "method",
        "title": "prefetch0"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "prefetch0",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:prefetch1",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#prefetch1",
        "fct-type": "method",
        "title": "prefetch1"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "prefetch1",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:prefetch2",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#prefetch2",
        "fct-type": "method",
        "title": "prefetch2"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "prefetch2",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:prefetchnta",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#prefetchnta",
        "fct-type": "method",
        "title": "prefetchnta"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "prefetchnta",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:ptrToInt",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Ptr a -\u003e Int",
        "fct-source": "src/Harpy-X86Assembler.html#ptrToInt",
        "fct-type": "function",
        "title": "ptrToInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "ptrToInt",
        "normalized": "Ptr a-\u003eInt",
        "package": "harpy",
        "partial": "To Int",
        "signature": "Ptr a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:ptrToWord32",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Ptr a -\u003e Word32",
        "fct-source": "src/Harpy-X86Assembler.html#ptrToWord32",
        "fct-type": "function",
        "title": "ptrToWord32"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "ptrToWord32",
        "normalized": "Ptr a-\u003eWord",
        "package": "harpy",
        "partial": "To Word",
        "signature": "Ptr a-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:push",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#push",
        "fct-type": "method",
        "title": "push"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "push",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:pushad",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#pushad",
        "fct-type": "function",
        "title": "pushad"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "pushad",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:pushfd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#pushfd",
        "fct-type": "function",
        "title": "pushfd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "pushfd",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:rcl",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#rcl",
        "fct-type": "method",
        "title": "rcl"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "rcl",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:rcr",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#rcr",
        "fct-type": "method",
        "title": "rcr"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "rcr",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:rdtsc",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#rdtsc",
        "fct-type": "function",
        "title": "rdtsc"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "rdtsc",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:ret",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#ret",
        "fct-type": "function",
        "title": "ret"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "ret",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:retN",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Word16 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#retN",
        "fct-type": "function",
        "title": "retN"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "retN",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:rol",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#rol",
        "fct-type": "method",
        "title": "rol"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "rol",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:ror",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#ror",
        "fct-type": "method",
        "title": "ror"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "ror",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:sahf",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#sahf",
        "fct-type": "function",
        "title": "sahf"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "sahf",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:sal",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#sal",
        "fct-type": "method",
        "title": "sal"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "sal",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:sar",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#sar",
        "fct-type": "method",
        "title": "sar"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "sar",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:sbb",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#sbb",
        "fct-type": "method",
        "title": "sbb"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "sbb",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:scaleToShift",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Scale -\u003e Word8",
        "fct-source": "src/Harpy-X86Assembler.html#scaleToShift",
        "fct-type": "function",
        "title": "scaleToShift"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "scaleToShift",
        "normalized": "Scale-\u003eWord",
        "package": "harpy",
        "partial": "To Shift",
        "signature": "Scale-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:seta",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#seta",
        "fct-type": "method",
        "title": "seta"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "seta",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setae",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#setae",
        "fct-type": "method",
        "title": "setae"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "setae",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setb",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#setb",
        "fct-type": "method",
        "title": "setb"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "setb",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setbe",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#setbe",
        "fct-type": "method",
        "title": "setbe"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "setbe",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setc",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#setc",
        "fct-type": "method",
        "title": "setc"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "setc",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:sete",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#sete",
        "fct-type": "method",
        "title": "sete"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "sete",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setg",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#setg",
        "fct-type": "method",
        "title": "setg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "setg",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setge",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#setge",
        "fct-type": "method",
        "title": "setge"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "setge",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setl",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#setl",
        "fct-type": "method",
        "title": "setl"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "setl",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setle",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#setle",
        "fct-type": "method",
        "title": "setle"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "setle",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setna",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#setna",
        "fct-type": "method",
        "title": "setna"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "setna",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setnae",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#setnae",
        "fct-type": "method",
        "title": "setnae"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "setnae",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setnb",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#setnb",
        "fct-type": "method",
        "title": "setnb"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "setnb",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setnbe",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#setnbe",
        "fct-type": "method",
        "title": "setnbe"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "setnbe",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setnc",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#setnc",
        "fct-type": "method",
        "title": "setnc"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "setnc",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setne",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#setne",
        "fct-type": "method",
        "title": "setne"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "setne",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setng",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#setng",
        "fct-type": "method",
        "title": "setng"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "setng",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setnge",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#setnge",
        "fct-type": "method",
        "title": "setnge"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "setnge",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setnl",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#setnl",
        "fct-type": "method",
        "title": "setnl"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "setnl",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setnle",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#setnle",
        "fct-type": "method",
        "title": "setnle"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "setnle",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setno",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#setno",
        "fct-type": "method",
        "title": "setno"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "setno",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setnp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#setnp",
        "fct-type": "method",
        "title": "setnp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "setnp",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setns",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#setns",
        "fct-type": "method",
        "title": "setns"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "setns",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setnz",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#setnz",
        "fct-type": "method",
        "title": "setnz"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "setnz",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:seto",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#seto",
        "fct-type": "method",
        "title": "seto"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "seto",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#setp",
        "fct-type": "method",
        "title": "setp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "setp",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setpe",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#setpe",
        "fct-type": "method",
        "title": "setpe"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "setpe",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setpo",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#setpo",
        "fct-type": "method",
        "title": "setpo"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "setpo",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:sets",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#sets",
        "fct-type": "method",
        "title": "sets"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "sets",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:setz",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#setz",
        "fct-type": "method",
        "title": "setz"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "setz",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:shl",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#shl",
        "fct-type": "method",
        "title": "shl"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "shl",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:shld",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e c -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#shld",
        "fct-type": "method",
        "title": "shld"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "shld",
        "normalized": "a-\u003eb-\u003ec-\u003eCodeGen d e()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003ec-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:shr",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#shr",
        "fct-type": "method",
        "title": "shr"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "shr",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:shrd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e c -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#shrd",
        "fct-type": "method",
        "title": "shrd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "shrd",
        "normalized": "a-\u003eb-\u003ec-\u003eCodeGen d e()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003ec-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:shufpd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "XMMReg -\u003e xmm -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#shufpd",
        "fct-type": "function",
        "title": "shufpd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "shufpd",
        "normalized": "XMMReg-\u003ea-\u003eWord-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "XMMReg-\u003exmm-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:shufps",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "XMMReg -\u003e xmm -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#shufps",
        "fct-type": "function",
        "title": "shufps"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "shufps",
        "normalized": "XMMReg-\u003ea-\u003eWord-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "XMMReg-\u003exmm-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:si",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Reg16",
        "fct-source": "src/Harpy-X86Assembler.html#ax",
        "fct-type": "function",
        "title": "si"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "si",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:sp",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "Reg16",
        "fct-source": "src/Harpy-X86Assembler.html#ax",
        "fct-type": "function",
        "title": "sp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "sp",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:sqrtpd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#sqrtpd",
        "fct-type": "method",
        "title": "sqrtpd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "sqrtpd",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:sqrtps",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#sqrtps",
        "fct-type": "method",
        "title": "sqrtps"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "sqrtps",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:sqrtsd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#sqrtsd",
        "fct-type": "method",
        "title": "sqrtsd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "sqrtsd",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:sqrtss",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#sqrtss",
        "fct-type": "method",
        "title": "sqrtss"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "sqrtss",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:stosb",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#stosb",
        "fct-type": "function",
        "title": "stosb"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "stosb",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:stosd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#stosd",
        "fct-type": "function",
        "title": "stosd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "stosd",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:stosl",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#stosl",
        "fct-type": "function",
        "title": "stosl"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "stosl",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:sub",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#sub",
        "fct-type": "method",
        "title": "sub"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "sub",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:subpd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#subpd",
        "fct-type": "method",
        "title": "subpd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "subpd",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:subps",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#subps",
        "fct-type": "method",
        "title": "subps"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "subps",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:subsd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#subsd",
        "fct-type": "method",
        "title": "subsd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "subsd",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:subss",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#subss",
        "fct-type": "method",
        "title": "subss"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "subss",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:test",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#test",
        "fct-type": "method",
        "title": "test"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "test",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:ucomisd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#ucomisd",
        "fct-type": "method",
        "title": "ucomisd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "ucomisd",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:ucomiss",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#ucomiss",
        "fct-type": "method",
        "title": "ucomiss"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "ucomiss",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:wait",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#wait",
        "fct-type": "function",
        "title": "wait"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "wait",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:xadd",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#xadd",
        "fct-type": "method",
        "title": "xadd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "xadd",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:xchg",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#xchg",
        "fct-type": "method",
        "title": "xchg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "xchg",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:xmm0",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "XMMReg",
        "fct-source": "src/Harpy-X86Assembler.html#xmm0",
        "fct-type": "function",
        "title": "xmm0"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "xmm0",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:xmm1",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "XMMReg",
        "fct-source": "src/Harpy-X86Assembler.html#xmm0",
        "fct-type": "function",
        "title": "xmm1"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "xmm1",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:xmm2",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "XMMReg",
        "fct-source": "src/Harpy-X86Assembler.html#xmm0",
        "fct-type": "function",
        "title": "xmm2"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "xmm2",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:xmm3",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "XMMReg",
        "fct-source": "src/Harpy-X86Assembler.html#xmm0",
        "fct-type": "function",
        "title": "xmm3"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "xmm3",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:xmm4",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "XMMReg",
        "fct-source": "src/Harpy-X86Assembler.html#xmm0",
        "fct-type": "function",
        "title": "xmm4"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "xmm4",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:xmm5",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "XMMReg",
        "fct-source": "src/Harpy-X86Assembler.html#xmm0",
        "fct-type": "function",
        "title": "xmm5"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "xmm5",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:xmm6",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "XMMReg",
        "fct-source": "src/Harpy-X86Assembler.html#xmm0",
        "fct-type": "function",
        "title": "xmm6"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "xmm6",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:xmm7",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "XMMReg",
        "fct-source": "src/Harpy-X86Assembler.html#xmm0",
        "fct-type": "function",
        "title": "xmm7"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "xmm7",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:xmmLocLowLevel",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Harpy-X86Assembler.html#xmmLocLowLevel",
        "fct-type": "method",
        "title": "xmmLocLowLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "xmmLocLowLevel",
        "normalized": "a-\u003eb",
        "package": "harpy",
        "partial": "Loc Low Level",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Assembler.html#v:xor",
      "description": {
        "fct-module": "Harpy.X86Assembler",
        "fct-package": "harpy",
        "fct-signature": "a -\u003e b -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86Assembler.html#xor",
        "fct-type": "method",
        "title": "xor"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86Assembler",
        "module": "Harpy.X86Assembler",
        "name": "xor",
        "normalized": "a-\u003eb-\u003eCodeGen c d()",
        "package": "harpy",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports several combinators for writing loops,\n conditionals and function prolog/epilog code.\n\u003c/p\u003e\u003cp\u003eNote: this module is under heavy development and the exported API\n is definitely not yet stable.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Harpy.X86CGCombinators",
        "fct-package": "harpy",
        "fct-signature": "module",
        "fct-source": "src/Harpy-X86CGCombinators.html",
        "fct-type": "module",
        "title": "X86CGCombinators"
      },
      "index": {
        "description": "This module exports several combinators for writing loops conditionals and function prolog epilog code Note this module is under heavy development and the exported API is definitely not yet stable",
        "hierarchy": "Harpy X86CGCombinators",
        "module": "Harpy.X86CGCombinators",
        "name": "X86CGCombinators",
        "normalized": "",
        "package": "harpy",
        "partial": "CGCombinators",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#t:CtrlDest",
      "description": {
        "fct-descr": "\u003cp\u003eDestination for control transfers\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CGCombinators",
        "fct-package": "harpy",
        "fct-signature": "data",
        "fct-source": "src/Harpy-X86CGCombinators.html#CtrlDest",
        "fct-type": "data",
        "title": "CtrlDest"
      },
      "index": {
        "description": "Destination for control transfers",
        "hierarchy": "Harpy X86CGCombinators",
        "module": "Harpy.X86CGCombinators",
        "name": "CtrlDest",
        "normalized": "",
        "package": "harpy",
        "partial": "Ctrl Dest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#t:DataDest",
      "description": {
        "fct-descr": "\u003cp\u003eDestination for a calculated value.\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CGCombinators",
        "fct-package": "harpy",
        "fct-signature": "data",
        "fct-source": "src/Harpy-X86CGCombinators.html#DataDest",
        "fct-type": "data",
        "title": "DataDest"
      },
      "index": {
        "description": "Destination for calculated value",
        "hierarchy": "Harpy X86CGCombinators",
        "module": "Harpy.X86CGCombinators",
        "name": "DataDest",
        "normalized": "",
        "package": "harpy",
        "partial": "Data Dest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#t:UserEnv",
      "description": {
        "fct-descr": "\u003cp\u003eUser environment stores code generators for accessing specific\n variables as well as the current data and control destinations\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CGCombinators",
        "fct-package": "harpy",
        "fct-signature": "data",
        "fct-source": "src/Harpy-X86CGCombinators.html#UserEnv",
        "fct-type": "data",
        "title": "UserEnv"
      },
      "index": {
        "description": "User environment stores code generators for accessing specific variables as well as the current data and control destinations",
        "hierarchy": "Harpy X86CGCombinators",
        "module": "Harpy.X86CGCombinators",
        "name": "UserEnv",
        "normalized": "",
        "package": "harpy",
        "partial": "User Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#t:UserState",
      "description": {
        "fct-descr": "\u003cp\u003eUser state is used to maintain bitmask of registers currently in use.\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CGCombinators",
        "fct-package": "harpy",
        "fct-signature": "data",
        "fct-source": "src/Harpy-X86CGCombinators.html#UserState",
        "fct-type": "data",
        "title": "UserState"
      },
      "index": {
        "description": "User state is used to maintain bitmask of registers currently in use",
        "hierarchy": "Harpy X86CGCombinators",
        "module": "Harpy.X86CGCombinators",
        "name": "UserState",
        "normalized": "",
        "package": "harpy",
        "partial": "User State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:Branch",
      "description": {
        "fct-descr": "\u003cp\u003eGo to one of the given labels\n depending on outcome of test\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CGCombinators",
        "fct-package": "harpy",
        "fct-signature": "Branch CtrlDest CtrlDest",
        "fct-source": "src/Harpy-X86CGCombinators.html#CtrlDest",
        "fct-type": "function",
        "title": "Branch"
      },
      "index": {
        "description": "Go to one of the given labels depending on outcome of test",
        "hierarchy": "Harpy X86CGCombinators",
        "module": "Harpy.X86CGCombinators",
        "name": "Branch",
        "normalized": "",
        "package": "harpy",
        "partial": "Branch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:FallThrough",
      "description": {
        "fct-descr": "\u003cp\u003eGo to next instruction\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CGCombinators",
        "fct-package": "harpy",
        "fct-signature": "FallThrough",
        "fct-source": "src/Harpy-X86CGCombinators.html#CtrlDest",
        "fct-type": "function",
        "title": "FallThrough"
      },
      "index": {
        "description": "Go to next instruction",
        "hierarchy": "Harpy X86CGCombinators",
        "module": "Harpy.X86CGCombinators",
        "name": "FallThrough",
        "normalized": "",
        "package": "harpy",
        "partial": "Fall Through",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:Goto",
      "description": {
        "fct-descr": "\u003cp\u003eGo to specific label\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CGCombinators",
        "fct-package": "harpy",
        "fct-signature": "Goto Label",
        "fct-source": "src/Harpy-X86CGCombinators.html#CtrlDest",
        "fct-type": "function",
        "title": "Goto"
      },
      "index": {
        "description": "Go to specific label",
        "hierarchy": "Harpy X86CGCombinators",
        "module": "Harpy.X86CGCombinators",
        "name": "Goto",
        "normalized": "",
        "package": "harpy",
        "partial": "Goto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:Ignore",
      "description": {
        "fct-descr": "\u003cp\u003eThrow result away.\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CGCombinators",
        "fct-package": "harpy",
        "fct-signature": "Ignore",
        "fct-source": "src/Harpy-X86CGCombinators.html#DataDest",
        "fct-type": "function",
        "title": "Ignore"
      },
      "index": {
        "description": "Throw result away",
        "hierarchy": "Harpy X86CGCombinators",
        "module": "Harpy.X86CGCombinators",
        "name": "Ignore",
        "normalized": "",
        "package": "harpy",
        "partial": "Ignore",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:MemBaseDest",
      "description": {
        "fct-descr": "\u003cp\u003eStore at memory address\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CGCombinators",
        "fct-package": "harpy",
        "fct-signature": "MemBaseDest Reg32 Word32",
        "fct-source": "src/Harpy-X86CGCombinators.html#DataDest",
        "fct-type": "function",
        "title": "MemBaseDest"
      },
      "index": {
        "description": "Store at memory address",
        "hierarchy": "Harpy X86CGCombinators",
        "module": "Harpy.X86CGCombinators",
        "name": "MemBaseDest",
        "normalized": "",
        "package": "harpy",
        "partial": "Mem Base Dest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:RegDest",
      "description": {
        "fct-descr": "\u003cp\u003eStore into specific register\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CGCombinators",
        "fct-package": "harpy",
        "fct-signature": "RegDest Reg32",
        "fct-source": "src/Harpy-X86CGCombinators.html#DataDest",
        "fct-type": "function",
        "title": "RegDest"
      },
      "index": {
        "description": "Store into specific register",
        "hierarchy": "Harpy X86CGCombinators",
        "module": "Harpy.X86CGCombinators",
        "name": "RegDest",
        "normalized": "",
        "package": "harpy",
        "partial": "Reg Dest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:Return",
      "description": {
        "fct-descr": "\u003cp\u003eReturn from current functio\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CGCombinators",
        "fct-package": "harpy",
        "fct-signature": "Return",
        "fct-source": "src/Harpy-X86CGCombinators.html#CtrlDest",
        "fct-type": "function",
        "title": "Return"
      },
      "index": {
        "description": "Return from current functio",
        "hierarchy": "Harpy X86CGCombinators",
        "module": "Harpy.X86CGCombinators",
        "name": "Return",
        "normalized": "",
        "package": "harpy",
        "partial": "Return",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:StackDest",
      "description": {
        "fct-descr": "\u003cp\u003ePush onto stack\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CGCombinators",
        "fct-package": "harpy",
        "fct-signature": "StackDest",
        "fct-source": "src/Harpy-X86CGCombinators.html#DataDest",
        "fct-type": "function",
        "title": "StackDest"
      },
      "index": {
        "description": "Push onto stack",
        "hierarchy": "Harpy X86CGCombinators",
        "module": "Harpy.X86CGCombinators",
        "name": "StackDest",
        "normalized": "",
        "package": "harpy",
        "partial": "Stack Dest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:UserEnv",
      "description": {
        "fct-module": "Harpy.X86CGCombinators",
        "fct-package": "harpy",
        "fct-signature": "UserEnv",
        "fct-source": "src/Harpy-X86CGCombinators.html#UserEnv",
        "fct-type": "function",
        "title": "UserEnv"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CGCombinators",
        "module": "Harpy.X86CGCombinators",
        "name": "UserEnv",
        "normalized": "",
        "package": "harpy",
        "partial": "User Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:UserState",
      "description": {
        "fct-module": "Harpy.X86CGCombinators",
        "fct-package": "harpy",
        "fct-signature": "UserState",
        "fct-source": "src/Harpy-X86CGCombinators.html#UserState",
        "fct-type": "function",
        "title": "UserState"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CGCombinators",
        "module": "Harpy.X86CGCombinators",
        "name": "UserState",
        "normalized": "",
        "package": "harpy",
        "partial": "User State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:bindings",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Harpy.X86CGCombinators",
        "fct-package": "harpy",
        "fct-signature": "[(String, CodeGen UserEnv UserState ())]",
        "fct-source": "src/Harpy-X86CGCombinators.html#UserEnv",
        "fct-type": "function",
        "title": "bindings"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CGCombinators",
        "module": "Harpy.X86CGCombinators",
        "name": "bindings",
        "normalized": "[(String,CodeGen UserEnv UserState())]",
        "package": "harpy",
        "partial": "",
        "signature": "[(String,CodeGen UserEnv UserState())]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:continue",
      "description": {
        "fct-module": "Harpy.X86CGCombinators",
        "fct-package": "harpy",
        "fct-signature": "CodeGen UserEnv s ()",
        "fct-source": "src/Harpy-X86CGCombinators.html#continue",
        "fct-type": "function",
        "title": "continue"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CGCombinators",
        "module": "Harpy.X86CGCombinators",
        "name": "continue",
        "normalized": "CodeGen UserEnv a()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen UserEnv s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:continueBranch",
      "description": {
        "fct-module": "Harpy.X86CGCombinators",
        "fct-package": "harpy",
        "fct-signature": "Int -\u003e Bool -\u003e CodeGen UserEnv s ()",
        "fct-source": "src/Harpy-X86CGCombinators.html#continueBranch",
        "fct-type": "function",
        "title": "continueBranch"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CGCombinators",
        "module": "Harpy.X86CGCombinators",
        "name": "continueBranch",
        "normalized": "Int-\u003eBool-\u003eCodeGen UserEnv a()",
        "package": "harpy",
        "partial": "Branch",
        "signature": "Int-\u003eBool-\u003eCodeGen UserEnv s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:ctrlDest",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Harpy.X86CGCombinators",
        "fct-package": "harpy",
        "fct-signature": "CtrlDest",
        "fct-source": "src/Harpy-X86CGCombinators.html#UserEnv",
        "fct-type": "function",
        "title": "ctrlDest"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CGCombinators",
        "module": "Harpy.X86CGCombinators",
        "name": "ctrlDest",
        "normalized": "",
        "package": "harpy",
        "partial": "Dest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:dataDest",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Harpy.X86CGCombinators",
        "fct-package": "harpy",
        "fct-signature": "DataDest",
        "fct-source": "src/Harpy-X86CGCombinators.html#UserEnv",
        "fct-type": "function",
        "title": "dataDest"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CGCombinators",
        "module": "Harpy.X86CGCombinators",
        "name": "dataDest",
        "normalized": "",
        "package": "harpy",
        "partial": "Dest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:doWhile",
      "description": {
        "fct-module": "Harpy.X86CGCombinators",
        "fct-package": "harpy",
        "fct-signature": "CodeGen UserEnv s r -\u003e CodeGen UserEnv s a -\u003e CodeGen UserEnv s ()",
        "fct-source": "src/Harpy-X86CGCombinators.html#doWhile",
        "fct-type": "function",
        "title": "doWhile"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CGCombinators",
        "module": "Harpy.X86CGCombinators",
        "name": "doWhile",
        "normalized": "CodeGen UserEnv a b-\u003eCodeGen UserEnv a c-\u003eCodeGen UserEnv a()",
        "package": "harpy",
        "partial": "While",
        "signature": "CodeGen UserEnv s r-\u003eCodeGen UserEnv s a-\u003eCodeGen UserEnv s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:emptyUserEnv",
      "description": {
        "fct-module": "Harpy.X86CGCombinators",
        "fct-package": "harpy",
        "fct-signature": "UserEnv",
        "fct-source": "src/Harpy-X86CGCombinators.html#emptyUserEnv",
        "fct-type": "function",
        "title": "emptyUserEnv"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CGCombinators",
        "module": "Harpy.X86CGCombinators",
        "name": "emptyUserEnv",
        "normalized": "",
        "package": "harpy",
        "partial": "User Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:emptyUserState",
      "description": {
        "fct-module": "Harpy.X86CGCombinators",
        "fct-package": "harpy",
        "fct-signature": "UserState",
        "fct-source": "src/Harpy-X86CGCombinators.html#emptyUserState",
        "fct-type": "function",
        "title": "emptyUserState"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CGCombinators",
        "module": "Harpy.X86CGCombinators",
        "name": "emptyUserState",
        "normalized": "",
        "package": "harpy",
        "partial": "User State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:function",
      "description": {
        "fct-descr": "\u003cp\u003eEmit the necessary function prolog and epilog code and invoke the\n given code generator for the code inbetween.\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CGCombinators",
        "fct-package": "harpy",
        "fct-signature": "CodeGen UserEnv s r -\u003e CodeGen UserEnv s r",
        "fct-source": "src/Harpy-X86CGCombinators.html#function",
        "fct-type": "function",
        "title": "function"
      },
      "index": {
        "description": "Emit the necessary function prolog and epilog code and invoke the given code generator for the code inbetween",
        "hierarchy": "Harpy X86CGCombinators",
        "module": "Harpy.X86CGCombinators",
        "name": "function",
        "normalized": "CodeGen UserEnv a b-\u003eCodeGen UserEnv a b",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen UserEnv s r-\u003eCodeGen UserEnv s r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:ifThenElse",
      "description": {
        "fct-module": "Harpy.X86CGCombinators",
        "fct-package": "harpy",
        "fct-signature": "CodeGen UserEnv s r -\u003e CodeGen UserEnv s a -\u003e CodeGen UserEnv s a1 -\u003e CodeGen UserEnv s ()",
        "fct-source": "src/Harpy-X86CGCombinators.html#ifThenElse",
        "fct-type": "function",
        "title": "ifThenElse"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CGCombinators",
        "module": "Harpy.X86CGCombinators",
        "name": "ifThenElse",
        "normalized": "CodeGen UserEnv a b-\u003eCodeGen UserEnv a c-\u003eCodeGen UserEnv a c-\u003eCodeGen UserEnv a()",
        "package": "harpy",
        "partial": "Then Else",
        "signature": "CodeGen UserEnv s r-\u003eCodeGen UserEnv s a-\u003eCodeGen UserEnv s a-\u003eCodeGen UserEnv s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:saveRegs",
      "description": {
        "fct-descr": "\u003cp\u003eSave a number of registers on the stack, perform the given code\n generation, and restore the registers.\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CGCombinators",
        "fct-package": "harpy",
        "fct-signature": "[Reg32] -\u003e CodeGen UserEnv s r -\u003e CodeGen UserEnv s ()",
        "fct-source": "src/Harpy-X86CGCombinators.html#saveRegs",
        "fct-type": "function",
        "title": "saveRegs"
      },
      "index": {
        "description": "Save number of registers on the stack perform the given code generation and restore the registers",
        "hierarchy": "Harpy X86CGCombinators",
        "module": "Harpy.X86CGCombinators",
        "name": "saveRegs",
        "normalized": "[Reg]-\u003eCodeGen UserEnv a b-\u003eCodeGen UserEnv a()",
        "package": "harpy",
        "partial": "Regs",
        "signature": "[Reg]-\u003eCodeGen UserEnv s r-\u003eCodeGen UserEnv s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:withCtrlDest",
      "description": {
        "fct-descr": "\u003cp\u003eSet the control destinations to the given values while\n running the code generator.\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CGCombinators",
        "fct-package": "harpy",
        "fct-signature": "CtrlDest -\u003e CodeGen UserEnv s r -\u003e CodeGen UserEnv s r",
        "fct-source": "src/Harpy-X86CGCombinators.html#withCtrlDest",
        "fct-type": "function",
        "title": "withCtrlDest"
      },
      "index": {
        "description": "Set the control destinations to the given values while running the code generator",
        "hierarchy": "Harpy X86CGCombinators",
        "module": "Harpy.X86CGCombinators",
        "name": "withCtrlDest",
        "normalized": "CtrlDest-\u003eCodeGen UserEnv a b-\u003eCodeGen UserEnv a b",
        "package": "harpy",
        "partial": "Ctrl Dest",
        "signature": "CtrlDest-\u003eCodeGen UserEnv s r-\u003eCodeGen UserEnv s r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:withDataDest",
      "description": {
        "fct-descr": "\u003cp\u003eSet the data destinations to the given values while\n running the code generator.\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CGCombinators",
        "fct-package": "harpy",
        "fct-signature": "DataDest -\u003e CodeGen UserEnv s r -\u003e CodeGen UserEnv s r",
        "fct-source": "src/Harpy-X86CGCombinators.html#withDataDest",
        "fct-type": "function",
        "title": "withDataDest"
      },
      "index": {
        "description": "Set the data destinations to the given values while running the code generator",
        "hierarchy": "Harpy X86CGCombinators",
        "module": "Harpy.X86CGCombinators",
        "name": "withDataDest",
        "normalized": "DataDest-\u003eCodeGen UserEnv a b-\u003eCodeGen UserEnv a b",
        "package": "harpy",
        "partial": "Data Dest",
        "signature": "DataDest-\u003eCodeGen UserEnv s r-\u003eCodeGen UserEnv s r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CGCombinators.html#v:withDest",
      "description": {
        "fct-descr": "\u003cp\u003eSet the data and control destinations to the given values while\n running the code generator.\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CGCombinators",
        "fct-package": "harpy",
        "fct-signature": "DataDest -\u003e CtrlDest -\u003e CodeGen UserEnv s r -\u003e CodeGen UserEnv s r",
        "fct-source": "src/Harpy-X86CGCombinators.html#withDest",
        "fct-type": "function",
        "title": "withDest"
      },
      "index": {
        "description": "Set the data and control destinations to the given values while running the code generator",
        "hierarchy": "Harpy X86CGCombinators",
        "module": "Harpy.X86CGCombinators",
        "name": "withDest",
        "normalized": "DataDest-\u003eCtrlDest-\u003eCodeGen UserEnv a b-\u003eCodeGen UserEnv a b",
        "package": "harpy",
        "partial": "Dest",
        "signature": "DataDest-\u003eCtrlDest-\u003eCodeGen UserEnv s r-\u003eCodeGen UserEnv s r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for generating x86 machine code instructions.  The\n functions make use of the code generation monad in module\n \u003ca\u003eHarpy.CodeGenMonad\u003c/a\u003e for emitting binary code into a code buffer.\n\u003c/p\u003e\u003cp\u003eThis module is very low-level, since there are different\n functions for different addressing modes.  A more convenient\n interface is provided in module \u003ca\u003eHarpy.X86Assembler\u003c/a\u003e, which uses\n the operand types to determine the correct addressing modes for\n all supported instructions.\n\u003c/p\u003e\u003cp\u003eNote: this file does not (yet) provide the complete x86\n instruction set, not even all user-mode instructions.  For some\n operations, some addressing modes are missing as well.\n\u003c/p\u003e\u003cp\u003eCopyright notice:\n\u003c/p\u003e\u003cp\u003eThe information in this file is based on the header file\n x86-codegen.h from the mono distribution, which has the following\n copyright information:\n\u003c/p\u003e\u003cpre\u003e \n  * x86-codegen.h: Macros for generating x86 code\n  *\n  * Authors:\n  *   Paolo Molaro (lupus@ximian.com)\n  *   Intel Corporation (ORP Project)\n  *   Sergey Chaban (serge@wildwestsoftware.com)\n  *   Dietmar Maurer (dietmar@ximian.com)\n  *   Patrik Torstensson\n  * \n  * Copyright (C)  2000 Intel Corporation.  All rights reserved.\n  * Copyright (C)  2001, 2002 Ximian, Inc.\n  *\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "module",
        "fct-source": "src/Harpy-X86CodeGen.html",
        "fct-type": "module",
        "title": "X86CodeGen"
      },
      "index": {
        "description": "Functions for generating x86 machine code instructions The functions make use of the code generation monad in module Harpy.CodeGenMonad for emitting binary code into code buffer This module is very low-level since there are different functions for different addressing modes more convenient interface is provided in module Harpy.X86Assembler which uses the operand types to determine the correct addressing modes for all supported instructions Note this file does not yet provide the complete x86 instruction set not even all user-mode instructions For some operations some addressing modes are missing as well Copyright notice The information in this file is based on the header file x86-codegen.h from the mono distribution which has the following copyright information x86-codegen.h Macros for generating x86 code Authors Paolo Molaro lupus@ximian.com Intel Corporation ORP Project Sergey Chaban serge@wildwestsoftware.com Dietmar Maurer dietmar@ximian.com Patrik Torstensson Copyright Intel Corporation All rights reserved Copyright Ximian Inc",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "X86CodeGen",
        "normalized": "",
        "package": "harpy",
        "partial": "Code Gen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#t:FIntSize",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "data",
        "fct-source": "src/Harpy-X86CodeGen.html#FIntSize",
        "fct-type": "data",
        "title": "FIntSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "FIntSize",
        "normalized": "",
        "package": "harpy",
        "partial": "FInt Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#t:Mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "newtype",
        "fct-source": "src/Harpy-X86CodeGen.html#Mem",
        "fct-type": "newtype",
        "title": "Mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "Mem",
        "normalized": "",
        "package": "harpy",
        "partial": "Mem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#t:MemBase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "data",
        "fct-source": "src/Harpy-X86CodeGen.html#MemBase",
        "fct-type": "data",
        "title": "MemBase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "MemBase",
        "normalized": "",
        "package": "harpy",
        "partial": "Mem Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#t:X86_SSE_PFX",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "data",
        "fct-source": "src/Harpy-X86CodeGen.html#X86_SSE_PFX",
        "fct-type": "data",
        "title": "X86_SSE_PFX"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "X86_SSE_PFX",
        "normalized": "",
        "package": "harpy",
        "partial": "SSE PFX",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#t:XMMLocation",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "class",
        "fct-source": "src/Harpy-X86CodeGen.html#XMMLocation",
        "fct-type": "class",
        "title": "XMMLocation"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "XMMLocation",
        "normalized": "",
        "package": "harpy",
        "partial": "XMMLocation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#t:XMMReg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "newtype",
        "fct-source": "src/Harpy-X86CodeGen.html#XMMReg",
        "fct-type": "newtype",
        "title": "XMMReg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "XMMReg",
        "normalized": "",
        "package": "harpy",
        "partial": "XMMReg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:FInt16",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "FInt16",
        "fct-source": "src/Harpy-X86CodeGen.html#FIntSize",
        "fct-type": "function",
        "title": "FInt16"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "FInt16",
        "normalized": "",
        "package": "harpy",
        "partial": "FInt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:FInt32",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "FInt32",
        "fct-source": "src/Harpy-X86CodeGen.html#FIntSize",
        "fct-type": "function",
        "title": "FInt32"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "FInt32",
        "normalized": "",
        "package": "harpy",
        "partial": "FInt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:FInt64",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "FInt64",
        "fct-source": "src/Harpy-X86CodeGen.html#FIntSize",
        "fct-type": "function",
        "title": "FInt64"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "FInt64",
        "normalized": "",
        "package": "harpy",
        "partial": "FInt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:Mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Mem Word32",
        "fct-source": "src/Harpy-X86CodeGen.html#Mem",
        "fct-type": "function",
        "title": "Mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "Mem",
        "normalized": "",
        "package": "harpy",
        "partial": "Mem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:MemBase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "MemBase Word8 Word32",
        "fct-source": "src/Harpy-X86CodeGen.html#MemBase",
        "fct-type": "function",
        "title": "MemBase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "MemBase",
        "normalized": "",
        "package": "harpy",
        "partial": "Mem Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:XMMReg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "XMMReg Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#XMMReg",
        "fct-type": "function",
        "title": "XMMReg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "XMMReg",
        "normalized": "",
        "package": "harpy",
        "partial": "XMMReg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:negateCC",
      "description": {
        "fct-descr": "\u003cp\u003eInvert a condition code.\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int -\u003e Int",
        "fct-source": "src/Harpy-X86CodeGen.html#negateCC",
        "fct-type": "function",
        "title": "negateCC"
      },
      "index": {
        "description": "Invert condition code",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "negateCC",
        "normalized": "Int-\u003eInt",
        "package": "harpy",
        "partial": "CC",
        "signature": "Int-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_adc",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cmp",
        "fct-type": "function",
        "title": "x86_adc"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_adc",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_add",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cmp",
        "fct-type": "function",
        "title": "x86_add"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_add",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_add_sse_reg_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_add_sse_reg_mem",
        "fct-type": "function",
        "title": "x86_add_sse_reg_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_add_sse_reg_mem",
        "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_add_sse_reg_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_add_sse_reg_membase",
        "fct-type": "function",
        "title": "x86_add_sse_reg_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_add_sse_reg_membase",
        "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_add_sse_reg_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_add_sse_reg_reg",
        "fct-type": "function",
        "title": "x86_add_sse_reg_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_add_sse_reg_reg",
        "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_address_prefix",
      "description": {
        "fct-descr": "\u003cp\u003ePrefix codes\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_lock_prefix",
        "fct-type": "function",
        "title": "x86_address_prefix"
      },
      "index": {
        "description": "Prefix codes",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_address_prefix",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_alu_mem_imm",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_alu_mem_imm",
        "fct-type": "function",
        "title": "x86_alu_mem_imm"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_alu_mem_imm",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_alu_mem_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_alu_mem_reg",
        "fct-type": "function",
        "title": "x86_alu_mem_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_alu_mem_reg",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_alu_membase8_imm",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_alu_membase8_imm",
        "fct-type": "function",
        "title": "x86_alu_membase8_imm"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_alu_membase8_imm",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_alu_membase_imm",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_alu_membase_imm",
        "fct-type": "function",
        "title": "x86_alu_membase_imm"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_alu_membase_imm",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_alu_membase_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_alu_membase_reg",
        "fct-type": "function",
        "title": "x86_alu_membase_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_alu_membase_reg",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_alu_reg8_reg8",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word8 -\u003e Bool -\u003e Bool -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_alu_reg8_reg8",
        "fct-type": "function",
        "title": "x86_alu_reg8_reg8"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_alu_reg8_reg8",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eBool-\u003eBool-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eBool-\u003eBool-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_alu_reg_imm",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Int -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_alu_reg_imm",
        "fct-type": "function",
        "title": "x86_alu_reg_imm"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_alu_reg_imm",
        "normalized": "Word-\u003eWord-\u003eInt-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eInt-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_alu_reg_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_alu_reg_mem",
        "fct-type": "function",
        "title": "x86_alu_reg_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_alu_reg_mem",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_alu_reg_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_alu_reg_membase",
        "fct-type": "function",
        "title": "x86_alu_reg_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_alu_reg_membase",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_alu_reg_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_alu_reg_reg",
        "fct-type": "function",
        "title": "x86_alu_reg_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_alu_reg_reg",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_and",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cmp",
        "fct-type": "function",
        "title": "x86_and"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_and",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_branch",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int -\u003e Int -\u003e Bool -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_branch",
        "fct-type": "function",
        "title": "x86_branch"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_branch",
        "normalized": "Int-\u003eInt-\u003eBool-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eBool-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_branch32",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int -\u003e Word32 -\u003e Bool -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_branch32",
        "fct-type": "function",
        "title": "x86_branch32"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_branch32",
        "normalized": "Int-\u003eWord-\u003eBool-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Int-\u003eWord-\u003eBool-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_branch8",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int -\u003e Word8 -\u003e Bool -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_branch8",
        "fct-type": "function",
        "title": "x86_branch8"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_branch8",
        "normalized": "Int-\u003eWord-\u003eBool-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Int-\u003eWord-\u003eBool-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_branch_pointer",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int -\u003e Ptr a -\u003e Bool -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_branch_pointer",
        "fct-type": "function",
        "title": "x86_branch_pointer"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_branch_pointer",
        "normalized": "Int-\u003ePtr a-\u003eBool-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Int-\u003ePtr a-\u003eBool-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_breakpoint",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_breakpoint",
        "fct-type": "function",
        "title": "x86_breakpoint"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_breakpoint",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_byte_regs",
      "description": {
        "fct-descr": "\u003cp\u003eBitvector mask for byte-adressable registers\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_byte_regs",
        "fct-type": "function",
        "title": "x86_byte_regs"
      },
      "index": {
        "description": "Bitvector mask for byte-adressable registers",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_byte_regs",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_call_code",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int -\u003e CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_call_code",
        "fct-type": "function",
        "title": "x86_call_code"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_call_code",
        "normalized": "Int-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Int-\u003eCodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_call_hs",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "FunPtr a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_call_hs",
        "fct-type": "function",
        "title": "x86_call_hs"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_call_hs",
        "normalized": "FunPtr a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "FunPtr a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_call_imm",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_call_imm",
        "fct-type": "function",
        "title": "x86_call_imm"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_call_imm",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_call_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_call_mem",
        "fct-type": "function",
        "title": "x86_call_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_call_mem",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_call_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_call_membase",
        "fct-type": "function",
        "title": "x86_call_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_call_membase",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_call_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_call_reg",
        "fct-type": "function",
        "title": "x86_call_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_call_reg",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_callee_regs",
      "description": {
        "fct-descr": "\u003cp\u003eBitvector mask for callee-saved registers\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_callee_regs",
        "fct-type": "function",
        "title": "x86_callee_regs"
      },
      "index": {
        "description": "Bitvector mask for callee-saved registers",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_callee_regs",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_caller_regs",
      "description": {
        "fct-descr": "\u003cp\u003eBitvector mask for caller-saved registers\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_caller_regs",
        "fct-type": "function",
        "title": "x86_caller_regs"
      },
      "index": {
        "description": "Bitvector mask for caller-saved registers",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_caller_regs",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_a",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cc_a",
        "fct-type": "function",
        "title": "x86_cc_a"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cc_a",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_ae",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cc_a",
        "fct-type": "function",
        "title": "x86_cc_ae"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cc_ae",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_b",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cc_b",
        "fct-type": "function",
        "title": "x86_cc_b"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cc_b",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_be",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cc_b",
        "fct-type": "function",
        "title": "x86_cc_be"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cc_be",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_c",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cc_b",
        "fct-type": "function",
        "title": "x86_cc_c"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cc_c",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_e",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cc_no",
        "fct-type": "function",
        "title": "x86_cc_e"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cc_e",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_eq",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cc_no",
        "fct-type": "function",
        "title": "x86_cc_eq"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cc_eq",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_ge",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cc_a",
        "fct-type": "function",
        "title": "x86_cc_ge"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cc_ge",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_gez",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cc_lz",
        "fct-type": "function",
        "title": "x86_cc_gez"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cc_gez",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_gt",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cc_gt",
        "fct-type": "function",
        "title": "x86_cc_gt"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cc_gt",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_le",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cc_b",
        "fct-type": "function",
        "title": "x86_cc_le"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cc_le",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_lt",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cc_no",
        "fct-type": "function",
        "title": "x86_cc_lt"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cc_lt",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_lz",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cc_lz",
        "fct-type": "function",
        "title": "x86_cc_lz"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cc_lz",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_na",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cc_b",
        "fct-type": "function",
        "title": "x86_cc_na"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cc_na",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_nae",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cc_b",
        "fct-type": "function",
        "title": "x86_cc_nae"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cc_nae",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_nb",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cc_a",
        "fct-type": "function",
        "title": "x86_cc_nb"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cc_nb",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_nbe",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cc_a",
        "fct-type": "function",
        "title": "x86_cc_nbe"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cc_nbe",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_nc",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cc_a",
        "fct-type": "function",
        "title": "x86_cc_nc"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cc_nc",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_ne",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cc_no",
        "fct-type": "function",
        "title": "x86_cc_ne"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cc_ne",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_no",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cc_no",
        "fct-type": "function",
        "title": "x86_cc_no"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cc_no",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_np",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cc_np",
        "fct-type": "function",
        "title": "x86_cc_np"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cc_np",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_ns",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cc_lz",
        "fct-type": "function",
        "title": "x86_cc_ns"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cc_ns",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_nz",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cc_no",
        "fct-type": "function",
        "title": "x86_cc_nz"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cc_nz",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_o",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cc_np",
        "fct-type": "function",
        "title": "x86_cc_o"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cc_o",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_p",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cc_lz",
        "fct-type": "function",
        "title": "x86_cc_p"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cc_p",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_pe",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cc_lz",
        "fct-type": "function",
        "title": "x86_cc_pe"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cc_pe",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_po",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cc_np",
        "fct-type": "function",
        "title": "x86_cc_po"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cc_po",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_s",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cc_lz",
        "fct-type": "function",
        "title": "x86_cc_s"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cc_s",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cc_z",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cc_no",
        "fct-type": "function",
        "title": "x86_cc_z"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cc_z",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cdq",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cdq",
        "fct-type": "function",
        "title": "x86_cdq"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cdq",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cld",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_breakpoint",
        "fct-type": "function",
        "title": "x86_cld"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cld",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cmov_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int -\u003e Bool -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cmov_mem",
        "fct-type": "function",
        "title": "x86_cmov_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cmov_mem",
        "normalized": "Int-\u003eBool-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Int-\u003eBool-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cmov_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int -\u003e Bool -\u003e Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cmov_membase",
        "fct-type": "function",
        "title": "x86_cmov_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cmov_membase",
        "normalized": "Int-\u003eBool-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Int-\u003eBool-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cmov_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int -\u003e Bool -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cmov_reg",
        "fct-type": "function",
        "title": "x86_cmov_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cmov_reg",
        "normalized": "Int-\u003eBool-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Int-\u003eBool-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cmp",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cmp",
        "fct-type": "function",
        "title": "x86_cmp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cmp",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cmpxchg_mem_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cmpxchg_mem_reg",
        "fct-type": "function",
        "title": "x86_cmpxchg_mem_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cmpxchg_mem_reg",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cmpxchg_membase_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cmpxchg_membase_reg",
        "fct-type": "function",
        "title": "x86_cmpxchg_membase_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cmpxchg_membase_reg",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cmpxchg_reg_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cmpxchg_reg_reg",
        "fct-type": "function",
        "title": "x86_cmpxchg_reg_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cmpxchg_reg_reg",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_comisd_reg_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_comisd_reg_mem",
        "fct-type": "function",
        "title": "x86_comisd_reg_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_comisd_reg_mem",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_comisd_reg_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_comisd_reg_membase",
        "fct-type": "function",
        "title": "x86_comisd_reg_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_comisd_reg_membase",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_comisd_reg_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_comisd_reg_reg",
        "fct-type": "function",
        "title": "x86_comisd_reg_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_comisd_reg_reg",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_comiss_reg_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_comiss_reg_mem",
        "fct-type": "function",
        "title": "x86_comiss_reg_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_comiss_reg_mem",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_comiss_reg_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_comiss_reg_membase",
        "fct-type": "function",
        "title": "x86_comiss_reg_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_comiss_reg_membase",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_comiss_reg_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_comiss_reg_reg",
        "fct-type": "function",
        "title": "x86_comiss_reg_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_comiss_reg_reg",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cs_prefix",
      "description": {
        "fct-descr": "\u003cp\u003ePrefix codes\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_lock_prefix",
        "fct-type": "function",
        "title": "x86_cs_prefix"
      },
      "index": {
        "description": "Prefix codes",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cs_prefix",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cvtdq2ps",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cvtdq2ps",
        "fct-type": "function",
        "title": "x86_cvtdq2ps"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cvtdq2ps",
        "normalized": "Word-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003exmm-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_cvttps2dq",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cvttps2dq",
        "fct-type": "function",
        "title": "x86_cvttps2dq"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_cvttps2dq",
        "normalized": "Word-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003exmm-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_dec_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_dec_mem",
        "fct-type": "function",
        "title": "x86_dec_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_dec_mem",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_dec_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_dec_membase",
        "fct-type": "function",
        "title": "x86_dec_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_dec_membase",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_dec_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_dec_reg",
        "fct-type": "function",
        "title": "x86_dec_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_dec_reg",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_div_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e Bool -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_div_mem",
        "fct-type": "function",
        "title": "x86_div_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_div_mem",
        "normalized": "Word-\u003eBool-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eBool-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_div_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e Bool -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_div_membase",
        "fct-type": "function",
        "title": "x86_div_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_div_membase",
        "normalized": "Word-\u003eWord-\u003eBool-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eBool-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_div_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Bool -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_div_reg",
        "fct-type": "function",
        "title": "x86_div_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_div_reg",
        "normalized": "Word-\u003eBool-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eBool-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_div_sse_reg_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_div_sse_reg_mem",
        "fct-type": "function",
        "title": "x86_div_sse_reg_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_div_sse_reg_mem",
        "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_div_sse_reg_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_div_sse_reg_membase",
        "fct-type": "function",
        "title": "x86_div_sse_reg_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_div_sse_reg_membase",
        "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_div_sse_reg_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_div_sse_reg_reg",
        "fct-type": "function",
        "title": "x86_div_sse_reg_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_div_sse_reg_reg",
        "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ds_prefix",
      "description": {
        "fct-descr": "\u003cp\u003ePrefix codes\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_lock_prefix",
        "fct-type": "function",
        "title": "x86_ds_prefix"
      },
      "index": {
        "description": "Prefix codes",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_ds_prefix",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_dword_size",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_dword_size",
        "fct-type": "function",
        "title": "x86_dword_size"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_dword_size",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_eax",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_eax",
        "fct-type": "function",
        "title": "x86_eax"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_eax",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_eax_mask",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_edi_mask",
        "fct-type": "function",
        "title": "x86_eax_mask"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_eax_mask",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ebp",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_eax",
        "fct-type": "function",
        "title": "x86_ebp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_ebp",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ebp_mask",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_edi_mask",
        "fct-type": "function",
        "title": "x86_ebp_mask"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_ebp_mask",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ebx",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_eax",
        "fct-type": "function",
        "title": "x86_ebx"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_ebx",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ebx_mask",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_edi_mask",
        "fct-type": "function",
        "title": "x86_ebx_mask"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_ebx_mask",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ecx",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_eax",
        "fct-type": "function",
        "title": "x86_ecx"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_ecx",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ecx_mask",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_edi_mask",
        "fct-type": "function",
        "title": "x86_ecx_mask"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_ecx_mask",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_edi",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_eax",
        "fct-type": "function",
        "title": "x86_edi"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_edi",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_edi_mask",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_edi_mask",
        "fct-type": "function",
        "title": "x86_edi_mask"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_edi_mask",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_edx",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_eax",
        "fct-type": "function",
        "title": "x86_edx"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_edx",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_edx_mask",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_edi_mask",
        "fct-type": "function",
        "title": "x86_edx_mask"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_edx_mask",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_enter",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word16 -\u003e CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_enter",
        "fct-type": "function",
        "title": "x86_enter"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_enter",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_epilog",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_epilog",
        "fct-type": "function",
        "title": "x86_epilog"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_epilog",
        "normalized": "Int-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Int-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_es_prefix",
      "description": {
        "fct-descr": "\u003cp\u003ePrefix codes\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_lock_prefix",
        "fct-type": "function",
        "title": "x86_es_prefix"
      },
      "index": {
        "description": "Prefix codes",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_es_prefix",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_esi",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_eax",
        "fct-type": "function",
        "title": "x86_esi"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_esi",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_esi_mask",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_edi_mask",
        "fct-type": "function",
        "title": "x86_esi_mask"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_esi_mask",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_esp",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_eax",
        "fct-type": "function",
        "title": "x86_esp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_esp",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fabs",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fsin",
        "fct-type": "function",
        "title": "x86_fabs"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fabs",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fadd",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fadd",
        "fct-type": "function",
        "title": "x86_fadd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fadd",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fchs",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fchs",
        "fct-type": "function",
        "title": "x86_fchs"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fchs",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fcom",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fadd",
        "fct-type": "function",
        "title": "x86_fcom"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fcom",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fcomi",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fcomi",
        "fct-type": "function",
        "title": "x86_fcomi"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fcomi",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fcomip",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fcomip",
        "fct-type": "function",
        "title": "x86_fcomip"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fcomip",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fcomp",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fadd",
        "fct-type": "function",
        "title": "x86_fcomp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fcomp",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fcompp",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fcompp",
        "fct-type": "function",
        "title": "x86_fcompp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fcompp",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fcos",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fsin",
        "fct-type": "function",
        "title": "x86_fcos"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fcos",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fdecstp",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fdecstp",
        "fct-type": "function",
        "title": "x86_fdecstp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fdecstp",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fdiv",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fdiv",
        "fct-type": "function",
        "title": "x86_fdiv"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fdiv",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fdivr",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fdiv",
        "fct-type": "function",
        "title": "x86_fdivr"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fdivr",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fild",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e FIntSize -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fild",
        "fct-type": "function",
        "title": "x86_fild"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fild",
        "normalized": "Word-\u003eFIntSize-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eFIntSize-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fild_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e FIntSize -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fild_membase",
        "fct-type": "function",
        "title": "x86_fild_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fild_membase",
        "normalized": "Word-\u003eWord-\u003eFIntSize-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eFIntSize-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fincstp",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fincstp",
        "fct-type": "function",
        "title": "x86_fincstp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fincstp",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fist_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e FIntSize -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fist_membase",
        "fct-type": "function",
        "title": "x86_fist_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fist_membase",
        "normalized": "Word-\u003eWord-\u003eFIntSize-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eFIntSize-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fist_pop",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e FIntSize -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fist_pop",
        "fct-type": "function",
        "title": "x86_fist_pop"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fist_pop",
        "normalized": "Word-\u003eFIntSize-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eFIntSize-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fist_pop_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e FIntSize -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fist_pop_membase",
        "fct-type": "function",
        "title": "x86_fist_pop_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fist_pop_membase",
        "normalized": "Word-\u003eWord-\u003eFIntSize-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eFIntSize-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fld",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e Bool -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fld",
        "fct-type": "function",
        "title": "x86_fld"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fld",
        "normalized": "Word-\u003eBool-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eBool-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fld1",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fld1",
        "fct-type": "function",
        "title": "x86_fld1"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fld1",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fld80_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fld80_mem",
        "fct-type": "function",
        "title": "x86_fld80_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fld80_mem",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fld80_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fld80_membase",
        "fct-type": "function",
        "title": "x86_fld80_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fld80_membase",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fld_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e Bool -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fld_membase",
        "fct-type": "function",
        "title": "x86_fld_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fld_membase",
        "normalized": "Word-\u003eWord-\u003eBool-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eBool-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fld_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fld_reg",
        "fct-type": "function",
        "title": "x86_fld_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fld_reg",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fldcw",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fldcw",
        "fct-type": "function",
        "title": "x86_fldcw"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fldcw",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fldcw_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fldcw_membase",
        "fct-type": "function",
        "title": "x86_fldcw_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fldcw_membase",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fldpi",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fldpi",
        "fct-type": "function",
        "title": "x86_fldpi"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fldpi",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fldz",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fldz",
        "fct-type": "function",
        "title": "x86_fldz"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fldz",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fmul",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fadd",
        "fct-type": "function",
        "title": "x86_fmul"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fmul",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fnstcw",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fnstcw",
        "fct-type": "function",
        "title": "x86_fnstcw"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fnstcw",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fnstcw_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fnstcw_membase",
        "fct-type": "function",
        "title": "x86_fnstcw_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fnstcw_membase",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fnstsw",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fnstsw",
        "fct-type": "function",
        "title": "x86_fnstsw"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fnstsw",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fp_c0",
      "description": {
        "fct-descr": "\u003cp\u003eFP status\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fp_c0",
        "fct-type": "function",
        "title": "x86_fp_c0"
      },
      "index": {
        "description": "FP status",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fp_c0",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fp_c1",
      "description": {
        "fct-descr": "\u003cp\u003eFP status\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fp_c0",
        "fct-type": "function",
        "title": "x86_fp_c1"
      },
      "index": {
        "description": "FP status",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fp_c1",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fp_c2",
      "description": {
        "fct-descr": "\u003cp\u003eFP status\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fp_c0",
        "fct-type": "function",
        "title": "x86_fp_c2"
      },
      "index": {
        "description": "FP status",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fp_c2",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fp_c3",
      "description": {
        "fct-descr": "\u003cp\u003eFP status\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fp_c0",
        "fct-type": "function",
        "title": "x86_fp_c3"
      },
      "index": {
        "description": "FP status",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fp_c3",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fp_cc_mask",
      "description": {
        "fct-descr": "\u003cp\u003eFP status\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fp_c0",
        "fct-type": "function",
        "title": "x86_fp_cc_mask"
      },
      "index": {
        "description": "FP status",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fp_cc_mask",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fp_int_op_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e Bool -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fp_int_op_membase",
        "fct-type": "function",
        "title": "x86_fp_int_op_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fp_int_op_membase",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eBool-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eBool-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fp_op",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fp_op",
        "fct-type": "function",
        "title": "x86_fp_op"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fp_op",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fp_op_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e Bool -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fp_op_mem",
        "fct-type": "function",
        "title": "x86_fp_op_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fp_op_mem",
        "normalized": "Word-\u003eWord-\u003eBool-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eBool-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fp_op_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e Bool -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fp_op_membase",
        "fct-type": "function",
        "title": "x86_fp_op_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fp_op_membase",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eBool-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eBool-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fp_op_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Bool -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fp_op_reg",
        "fct-type": "function",
        "title": "x86_fp_op_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fp_op_reg",
        "normalized": "Word-\u003eWord-\u003eBool-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eBool-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpatan",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fsin",
        "fct-type": "function",
        "title": "x86_fpatan"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fpatan",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_denopex_mask",
      "description": {
        "fct-descr": "\u003cp\u003eFP control word\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fpcw_invopex_mask",
        "fct-type": "function",
        "title": "x86_fpcw_denopex_mask"
      },
      "index": {
        "description": "FP control word",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fpcw_denopex_mask",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_invopex_mask",
      "description": {
        "fct-descr": "\u003cp\u003eFP control word\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fpcw_invopex_mask",
        "fct-type": "function",
        "title": "x86_fpcw_invopex_mask"
      },
      "index": {
        "description": "FP control word",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fpcw_invopex_mask",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_ovfex_mask",
      "description": {
        "fct-descr": "\u003cp\u003eFP control word\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fpcw_invopex_mask",
        "fct-type": "function",
        "title": "x86_fpcw_ovfex_mask"
      },
      "index": {
        "description": "FP control word",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fpcw_ovfex_mask",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_prec_double",
      "description": {
        "fct-descr": "\u003cp\u003eValues for precision control\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fpcw_prec_single",
        "fct-type": "function",
        "title": "x86_fpcw_prec_double"
      },
      "index": {
        "description": "Values for precision control",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fpcw_prec_double",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_prec_extended",
      "description": {
        "fct-descr": "\u003cp\u003eValues for precision control\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fpcw_prec_single",
        "fct-type": "function",
        "title": "x86_fpcw_prec_extended"
      },
      "index": {
        "description": "Values for precision control",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fpcw_prec_extended",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_prec_single",
      "description": {
        "fct-descr": "\u003cp\u003eValues for precision control\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fpcw_prec_single",
        "fct-type": "function",
        "title": "x86_fpcw_prec_single"
      },
      "index": {
        "description": "Values for precision control",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fpcw_prec_single",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_precc_mask",
      "description": {
        "fct-descr": "\u003cp\u003eFP control word\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fpcw_invopex_mask",
        "fct-type": "function",
        "title": "x86_fpcw_precc_mask"
      },
      "index": {
        "description": "FP control word",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fpcw_precc_mask",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_precex_mask",
      "description": {
        "fct-descr": "\u003cp\u003eFP control word\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fpcw_invopex_mask",
        "fct-type": "function",
        "title": "x86_fpcw_precex_mask"
      },
      "index": {
        "description": "FP control word",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fpcw_precex_mask",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_round_down",
      "description": {
        "fct-descr": "\u003cp\u003eValues for rounding control\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fpcw_round_nearest",
        "fct-type": "function",
        "title": "x86_fpcw_round_down"
      },
      "index": {
        "description": "Values for rounding control",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fpcw_round_down",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_round_nearest",
      "description": {
        "fct-descr": "\u003cp\u003eValues for rounding control\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fpcw_round_nearest",
        "fct-type": "function",
        "title": "x86_fpcw_round_nearest"
      },
      "index": {
        "description": "Values for rounding control",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fpcw_round_nearest",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_round_tozero",
      "description": {
        "fct-descr": "\u003cp\u003eValues for rounding control\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fpcw_round_nearest",
        "fct-type": "function",
        "title": "x86_fpcw_round_tozero"
      },
      "index": {
        "description": "Values for rounding control",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fpcw_round_tozero",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_round_up",
      "description": {
        "fct-descr": "\u003cp\u003eValues for rounding control\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fpcw_round_nearest",
        "fct-type": "function",
        "title": "x86_fpcw_round_up"
      },
      "index": {
        "description": "Values for rounding control",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fpcw_round_up",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_roundc_mask",
      "description": {
        "fct-descr": "\u003cp\u003eFP control word\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fpcw_invopex_mask",
        "fct-type": "function",
        "title": "x86_fpcw_roundc_mask"
      },
      "index": {
        "description": "FP control word",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fpcw_roundc_mask",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_undfex_mask",
      "description": {
        "fct-descr": "\u003cp\u003eFP control word\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fpcw_invopex_mask",
        "fct-type": "function",
        "title": "x86_fpcw_undfex_mask"
      },
      "index": {
        "description": "FP control word",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fpcw_undfex_mask",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fpcw_zerodiv_mask",
      "description": {
        "fct-descr": "\u003cp\u003eFP control word\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fpcw_invopex_mask",
        "fct-type": "function",
        "title": "x86_fpcw_zerodiv_mask"
      },
      "index": {
        "description": "FP control word",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fpcw_zerodiv_mask",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fprem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fsin",
        "fct-type": "function",
        "title": "x86_fprem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fprem",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fprem1",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fsin",
        "fct-type": "function",
        "title": "x86_fprem1"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fprem1",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fptan",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fsin",
        "fct-type": "function",
        "title": "x86_fptan"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fptan",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_frem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_frem",
        "fct-type": "function",
        "title": "x86_frem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_frem",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_frndint",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fsin",
        "fct-type": "function",
        "title": "x86_frndint"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_frndint",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fs_prefix",
      "description": {
        "fct-descr": "\u003cp\u003ePrefix codes\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_lock_prefix",
        "fct-type": "function",
        "title": "x86_fs_prefix"
      },
      "index": {
        "description": "Prefix codes",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fs_prefix",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fsin",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fsin",
        "fct-type": "function",
        "title": "x86_fsin"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fsin",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fsqrt",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fsin",
        "fct-type": "function",
        "title": "x86_fsqrt"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fsqrt",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fst",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e Bool -\u003e Bool -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fst",
        "fct-type": "function",
        "title": "x86_fst"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fst",
        "normalized": "Word-\u003eBool-\u003eBool-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eBool-\u003eBool-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fst80_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fst80_mem",
        "fct-type": "function",
        "title": "x86_fst80_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fst80_mem",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fst80_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fst80_membase",
        "fct-type": "function",
        "title": "x86_fst80_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fst80_membase",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fst_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e Bool -\u003e Bool -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fst_membase",
        "fct-type": "function",
        "title": "x86_fst_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fst_membase",
        "normalized": "Word-\u003eWord-\u003eBool-\u003eBool-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eBool-\u003eBool-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fstp",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fstp",
        "fct-type": "function",
        "title": "x86_fstp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fstp",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fstsw",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fstsw",
        "fct-type": "function",
        "title": "x86_fstsw"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fstsw",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fsub",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fadd",
        "fct-type": "function",
        "title": "x86_fsub"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fsub",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fsubr",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fadd",
        "fct-type": "function",
        "title": "x86_fsubr"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fsubr",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ftst",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fsin",
        "fct-type": "function",
        "title": "x86_ftst"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_ftst",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fucomi",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fucomi",
        "fct-type": "function",
        "title": "x86_fucomi"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fucomi",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fucomip",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fucomip",
        "fct-type": "function",
        "title": "x86_fucomip"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fucomip",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fucompp",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fucompp",
        "fct-type": "function",
        "title": "x86_fucompp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fucompp",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fxam",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fsin",
        "fct-type": "function",
        "title": "x86_fxam"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fxam",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_fxch",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_fxch",
        "fct-type": "function",
        "title": "x86_fxch"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_fxch",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_gs_prefix",
      "description": {
        "fct-descr": "\u003cp\u003ePrefix codes\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_lock_prefix",
        "fct-type": "function",
        "title": "x86_gs_prefix"
      },
      "index": {
        "description": "Prefix codes",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_gs_prefix",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_haddpd",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_haddpd",
        "fct-type": "function",
        "title": "x86_haddpd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_haddpd",
        "normalized": "Word-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003exmm-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_haddps",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_haddps",
        "fct-type": "function",
        "title": "x86_haddps"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_haddps",
        "normalized": "Word-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003exmm-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_imm_emit16",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a 16-bit constant to the instruction stream.\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word16 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_imm_emit16",
        "fct-type": "function",
        "title": "x86_imm_emit16"
      },
      "index": {
        "description": "Emit bit constant to the instruction stream",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_imm_emit16",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_imm_emit32",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a 32-bit constant to the instruction stream.\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_imm_emit32",
        "fct-type": "function",
        "title": "x86_imm_emit32"
      },
      "index": {
        "description": "Emit bit constant to the instruction stream",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_imm_emit32",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_imm_emit8",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a 8-bit constant to the instruction stream.\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_imm_emit8",
        "fct-type": "function",
        "title": "x86_imm_emit8"
      },
      "index": {
        "description": "Emit bit constant to the instruction stream",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_imm_emit8",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_imul_reg_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_imul_reg_mem",
        "fct-type": "function",
        "title": "x86_imul_reg_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_imul_reg_mem",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_imul_reg_mem_imm",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_imul_reg_mem_imm",
        "fct-type": "function",
        "title": "x86_imul_reg_mem_imm"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_imul_reg_mem_imm",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_imul_reg_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_imul_reg_membase",
        "fct-type": "function",
        "title": "x86_imul_reg_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_imul_reg_membase",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_imul_reg_membase_imm",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_imul_reg_membase_imm",
        "fct-type": "function",
        "title": "x86_imul_reg_membase_imm"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_imul_reg_membase_imm",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_imul_reg_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_imul_reg_reg",
        "fct-type": "function",
        "title": "x86_imul_reg_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_imul_reg_reg",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_imul_reg_reg_imm",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_imul_reg_reg_imm",
        "fct-type": "function",
        "title": "x86_imul_reg_reg_imm"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_imul_reg_reg_imm",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_inc_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_inc_mem",
        "fct-type": "function",
        "title": "x86_inc_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_inc_mem",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_inc_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_inc_membase",
        "fct-type": "function",
        "title": "x86_inc_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_inc_membase",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_inc_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_inc_reg",
        "fct-type": "function",
        "title": "x86_inc_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_inc_reg",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_is_callee",
      "description": {
        "fct-descr": "\u003cp\u003eReturns true when the given register is caller-saved.\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int -\u003e Bool",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_is_callee",
        "fct-type": "function",
        "title": "x86_is_callee"
      },
      "index": {
        "description": "Returns true when the given register is caller-saved",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_is_callee",
        "normalized": "Int-\u003eBool",
        "package": "harpy",
        "partial": "",
        "signature": "Int-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_is_scratch",
      "description": {
        "fct-descr": "\u003cp\u003eReturns true when the given register is caller-saved.\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int -\u003e Bool",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_is_scratch",
        "fct-type": "function",
        "title": "x86_is_scratch"
      },
      "index": {
        "description": "Returns true when the given register is caller-saved",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_is_scratch",
        "normalized": "Int-\u003eBool",
        "package": "harpy",
        "partial": "",
        "signature": "Int-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_jecxz",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_jecxz",
        "fct-type": "function",
        "title": "x86_jecxz"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_jecxz",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_jump32",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_jump32",
        "fct-type": "function",
        "title": "x86_jump32"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_jump32",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_jump8",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_jump8",
        "fct-type": "function",
        "title": "x86_jump8"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_jump8",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_jump_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_jump_mem",
        "fct-type": "function",
        "title": "x86_jump_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_jump_mem",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_jump_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_jump_membase",
        "fct-type": "function",
        "title": "x86_jump_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_jump_membase",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_jump_pointer",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Ptr a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_jump_pointer",
        "fct-type": "function",
        "title": "x86_jump_pointer"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_jump_pointer",
        "normalized": "Ptr a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Ptr a-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_jump_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_jump_reg",
        "fct-type": "function",
        "title": "x86_jump_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_jump_reg",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_lea_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_lea_mem",
        "fct-type": "function",
        "title": "x86_lea_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_lea_mem",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_lea_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_lea_membase",
        "fct-type": "function",
        "title": "x86_lea_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_lea_membase",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_lea_memindex",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_lea_memindex",
        "fct-type": "function",
        "title": "x86_lea_memindex"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_lea_memindex",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_leave",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_leave",
        "fct-type": "function",
        "title": "x86_leave"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_leave",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_likely_prefix",
      "description": {
        "fct-descr": "\u003cp\u003ePrefix codes\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_lock_prefix",
        "fct-type": "function",
        "title": "x86_likely_prefix"
      },
      "index": {
        "description": "Prefix codes",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_likely_prefix",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_lock_prefix",
      "description": {
        "fct-descr": "\u003cp\u003ePrefix codes\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_lock_prefix",
        "fct-type": "function",
        "title": "x86_lock_prefix"
      },
      "index": {
        "description": "Prefix codes",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_lock_prefix",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_loop",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_loop",
        "fct-type": "function",
        "title": "x86_loop"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_loop",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_loope",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_loope",
        "fct-type": "function",
        "title": "x86_loope"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_loope",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_loopne",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_loopne",
        "fct-type": "function",
        "title": "x86_loopne"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_loopne",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_max_instruction_bytes",
      "description": {
        "fct-descr": "\u003cp\u003eMaximal length of an x86 instruction in bytes.\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_max_instruction_bytes",
        "fct-type": "function",
        "title": "x86_max_instruction_bytes"
      },
      "index": {
        "description": "Maximal length of an x86 instruction in bytes",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_max_instruction_bytes",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_max_sse_reg_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_max_sse_reg_mem",
        "fct-type": "function",
        "title": "x86_max_sse_reg_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_max_sse_reg_mem",
        "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_max_sse_reg_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_max_sse_reg_membase",
        "fct-type": "function",
        "title": "x86_max_sse_reg_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_max_sse_reg_membase",
        "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_max_sse_reg_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_max_sse_reg_reg",
        "fct-type": "function",
        "title": "x86_max_sse_reg_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_max_sse_reg_reg",
        "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_membase_emit",
      "description": {
        "fct-descr": "\u003cp\u003eEmit a mem+base address encoding\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_membase_emit",
        "fct-type": "function",
        "title": "x86_membase_emit"
      },
      "index": {
        "description": "Emit mem base address encoding",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_membase_emit",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_min_sse_reg_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_min_sse_reg_mem",
        "fct-type": "function",
        "title": "x86_min_sse_reg_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_min_sse_reg_mem",
        "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_min_sse_reg_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_min_sse_reg_membase",
        "fct-type": "function",
        "title": "x86_min_sse_reg_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_min_sse_reg_membase",
        "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_min_sse_reg_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_min_sse_reg_reg",
        "fct-type": "function",
        "title": "x86_min_sse_reg_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_min_sse_reg_reg",
        "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_mem_imm",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e Word32 -\u003e a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_mov_mem_imm",
        "fct-type": "function",
        "title": "x86_mov_mem_imm"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_mov_mem_imm",
        "normalized": "Word-\u003eWord-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003ea-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_mem_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e Word8 -\u003e t -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_mov_mem_reg",
        "fct-type": "function",
        "title": "x86_mov_mem_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_mov_mem_reg",
        "normalized": "Word-\u003eWord-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003et-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_membase_imm",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e Word32 -\u003e a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_mov_membase_imm",
        "fct-type": "function",
        "title": "x86_mov_membase_imm"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_mov_membase_imm",
        "normalized": "Word-\u003eWord-\u003eWord-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003ea-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_membase_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e Word8 -\u003e t -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_mov_membase_reg",
        "fct-type": "function",
        "title": "x86_mov_membase_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_mov_membase_reg",
        "normalized": "Word-\u003eWord-\u003eWord-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003et-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_memindex_imm",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e Word8 -\u003e Word8 -\u003e Word32 -\u003e a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_mov_memindex_imm",
        "fct-type": "function",
        "title": "x86_mov_memindex_imm"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_mov_memindex_imm",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003ea-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_memindex_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e Word8 -\u003e Word8 -\u003e Word8 -\u003e t -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_mov_memindex_reg",
        "fct-type": "function",
        "title": "x86_mov_memindex_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_mov_memindex_reg",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003et-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_reg_imm",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_mov_reg_imm",
        "fct-type": "function",
        "title": "x86_mov_reg_imm"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_mov_reg_imm",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_reg_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e t -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_mov_reg_mem",
        "fct-type": "function",
        "title": "x86_mov_reg_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_mov_reg_mem",
        "normalized": "Word-\u003eWord-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003et-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_reg_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e t -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_mov_reg_membase",
        "fct-type": "function",
        "title": "x86_mov_reg_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_mov_reg_membase",
        "normalized": "Word-\u003eWord-\u003eWord-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003et-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_reg_memindex",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e Word8 -\u003e Word8 -\u003e t -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_mov_reg_memindex",
        "fct-type": "function",
        "title": "x86_mov_reg_memindex"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_mov_reg_memindex",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003et-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_reg_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e t -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_mov_reg_reg",
        "fct-type": "function",
        "title": "x86_mov_reg_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_mov_reg_reg",
        "normalized": "Word-\u003eWord-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003et-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_reg_regp",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e t -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_mov_reg_regp",
        "fct-type": "function",
        "title": "x86_mov_reg_regp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_mov_reg_regp",
        "normalized": "Word-\u003eWord-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003et-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_regp_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e t -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_mov_regp_reg",
        "fct-type": "function",
        "title": "x86_mov_regp_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_mov_regp_reg",
        "normalized": "Word-\u003eWord-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003et-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_sse_mem_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX -\u003e Word32 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_mov_sse_mem_reg",
        "fct-type": "function",
        "title": "x86_mov_sse_mem_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_mov_sse_mem_reg",
        "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_sse_membase_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word32 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_mov_sse_membase_reg",
        "fct-type": "function",
        "title": "x86_mov_sse_membase_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_mov_sse_membase_reg",
        "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_sse_reg_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_mov_sse_reg_mem",
        "fct-type": "function",
        "title": "x86_mov_sse_reg_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_mov_sse_reg_mem",
        "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_sse_reg_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_mov_sse_reg_membase",
        "fct-type": "function",
        "title": "x86_mov_sse_reg_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_mov_sse_reg_membase",
        "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mov_sse_reg_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_mov_sse_reg_reg",
        "fct-type": "function",
        "title": "x86_mov_sse_reg_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_mov_sse_reg_reg",
        "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movlpd_from_reg",
      "description": {
        "fct-descr": "\u003cp\u003exmm must not be a register\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_movlpd_from_reg",
        "fct-type": "function",
        "title": "x86_movlpd_from_reg"
      },
      "index": {
        "description": "xmm must not be register",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_movlpd_from_reg",
        "normalized": "Word-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003exmm-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movlpd_to_reg",
      "description": {
        "fct-descr": "\u003cp\u003exmm must not be a register\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_movlpd_to_reg",
        "fct-type": "function",
        "title": "x86_movlpd_to_reg"
      },
      "index": {
        "description": "xmm must not be register",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_movlpd_to_reg",
        "normalized": "Word-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003exmm-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movlps_from_reg",
      "description": {
        "fct-descr": "\u003cp\u003exmm must not be a register\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_movlps_from_reg",
        "fct-type": "function",
        "title": "x86_movlps_from_reg"
      },
      "index": {
        "description": "xmm must not be register",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_movlps_from_reg",
        "normalized": "Word-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003exmm-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movlps_to_reg",
      "description": {
        "fct-descr": "\u003cp\u003exmm must not be a register\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_movlps_to_reg",
        "fct-type": "function",
        "title": "x86_movlps_to_reg"
      },
      "index": {
        "description": "xmm must not be register",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_movlps_to_reg",
        "normalized": "Word-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003exmm-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movsb",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_breakpoint",
        "fct-type": "function",
        "title": "x86_movsb"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_movsb",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movsd",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_breakpoint",
        "fct-type": "function",
        "title": "x86_movsd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_movsd",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movsd_from_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_movsd_from_reg",
        "fct-type": "function",
        "title": "x86_movsd_from_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_movsd_from_reg",
        "normalized": "Word-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003exmm-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movsd_to_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_movsd_to_reg",
        "fct-type": "function",
        "title": "x86_movsd_to_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_movsd_to_reg",
        "normalized": "Word-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003exmm-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movsl",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_breakpoint",
        "fct-type": "function",
        "title": "x86_movsl"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_movsl",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movss_from_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_movss_from_reg",
        "fct-type": "function",
        "title": "x86_movss_from_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_movss_from_reg",
        "normalized": "Word-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003exmm-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movss_to_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_movss_to_reg",
        "fct-type": "function",
        "title": "x86_movss_to_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_movss_to_reg",
        "normalized": "Word-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003exmm-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movupd_from_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_movupd_from_reg",
        "fct-type": "function",
        "title": "x86_movupd_from_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_movupd_from_reg",
        "normalized": "Word-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003exmm-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movupd_to_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_movupd_to_reg",
        "fct-type": "function",
        "title": "x86_movupd_to_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_movupd_to_reg",
        "normalized": "Word-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003exmm-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movups_from_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_movups_from_reg",
        "fct-type": "function",
        "title": "x86_movups_from_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_movups_from_reg",
        "normalized": "Word-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003exmm-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_movups_to_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_movups_to_reg",
        "fct-type": "function",
        "title": "x86_movups_to_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_movups_to_reg",
        "normalized": "Word-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003exmm-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mul_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e Bool -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_mul_mem",
        "fct-type": "function",
        "title": "x86_mul_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_mul_mem",
        "normalized": "Word-\u003eBool-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eBool-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mul_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e Bool -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_mul_membase",
        "fct-type": "function",
        "title": "x86_mul_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_mul_membase",
        "normalized": "Word-\u003eWord-\u003eBool-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eBool-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mul_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Bool -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_mul_reg",
        "fct-type": "function",
        "title": "x86_mul_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_mul_reg",
        "normalized": "Word-\u003eBool-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eBool-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mul_sse_reg_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_mul_sse_reg_mem",
        "fct-type": "function",
        "title": "x86_mul_sse_reg_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_mul_sse_reg_mem",
        "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mul_sse_reg_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_mul_sse_reg_membase",
        "fct-type": "function",
        "title": "x86_mul_sse_reg_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_mul_sse_reg_membase",
        "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_mul_sse_reg_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_mul_sse_reg_reg",
        "fct-type": "function",
        "title": "x86_mul_sse_reg_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_mul_sse_reg_reg",
        "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_neg_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_neg_mem",
        "fct-type": "function",
        "title": "x86_neg_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_neg_mem",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_neg_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_neg_membase",
        "fct-type": "function",
        "title": "x86_neg_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_neg_membase",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_neg_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_neg_reg",
        "fct-type": "function",
        "title": "x86_neg_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_neg_reg",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_nobasereg",
      "description": {
        "fct-descr": "\u003cp\u003eUsed to encode the fact that no base register is used in an\n instruction.\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_nobasereg",
        "fct-type": "function",
        "title": "x86_nobasereg"
      },
      "index": {
        "description": "Used to encode the fact that no base register is used in an instruction",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_nobasereg",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_nop",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_nop",
        "fct-type": "function",
        "title": "x86_nop"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_nop",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_not_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_not_mem",
        "fct-type": "function",
        "title": "x86_not_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_not_mem",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_not_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_not_membase",
        "fct-type": "function",
        "title": "x86_not_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_not_membase",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_not_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_not_reg",
        "fct-type": "function",
        "title": "x86_not_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_not_reg",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_operand_prefix",
      "description": {
        "fct-descr": "\u003cp\u003ePrefix codes\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_lock_prefix",
        "fct-type": "function",
        "title": "x86_operand_prefix"
      },
      "index": {
        "description": "Prefix codes",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_operand_prefix",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_or",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cmp",
        "fct-type": "function",
        "title": "x86_or"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_or",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_padding",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "t -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_padding",
        "fct-type": "function",
        "title": "x86_padding"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_padding",
        "normalized": "a-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "t-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_pop_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_pop_mem",
        "fct-type": "function",
        "title": "x86_pop_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_pop_mem",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_pop_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_pop_membase",
        "fct-type": "function",
        "title": "x86_pop_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_pop_membase",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_pop_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_pop_reg",
        "fct-type": "function",
        "title": "x86_pop_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_pop_reg",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_popad",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_popad",
        "fct-type": "function",
        "title": "x86_popad"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_popad",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_popfd",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_popfd",
        "fct-type": "function",
        "title": "x86_popfd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_popfd",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_prefetch0_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_prefetch0_mem",
        "fct-type": "function",
        "title": "x86_prefetch0_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_prefetch0_mem",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_prefetch0_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_prefetch0_membase",
        "fct-type": "function",
        "title": "x86_prefetch0_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_prefetch0_membase",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_prefetch0_regp",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_prefetch0_regp",
        "fct-type": "function",
        "title": "x86_prefetch0_regp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_prefetch0_regp",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_prefetch1_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_prefetch1_mem",
        "fct-type": "function",
        "title": "x86_prefetch1_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_prefetch1_mem",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_prefetch1_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_prefetch1_membase",
        "fct-type": "function",
        "title": "x86_prefetch1_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_prefetch1_membase",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_prefetch1_regp",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_prefetch1_regp",
        "fct-type": "function",
        "title": "x86_prefetch1_regp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_prefetch1_regp",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_prefetch2_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_prefetch2_mem",
        "fct-type": "function",
        "title": "x86_prefetch2_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_prefetch2_mem",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_prefetch2_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_prefetch2_membase",
        "fct-type": "function",
        "title": "x86_prefetch2_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_prefetch2_membase",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_prefetch2_regp",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_prefetch2_regp",
        "fct-type": "function",
        "title": "x86_prefetch2_regp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_prefetch2_regp",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_prefetchnta_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_prefetchnta_mem",
        "fct-type": "function",
        "title": "x86_prefetchnta_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_prefetchnta_mem",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_prefetchnta_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_prefetchnta_membase",
        "fct-type": "function",
        "title": "x86_prefetchnta_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_prefetchnta_membase",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_prefetchnta_regp",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_prefetchnta_regp",
        "fct-type": "function",
        "title": "x86_prefetchnta_regp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_prefetchnta_regp",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_prefix",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_prefix",
        "fct-type": "function",
        "title": "x86_prefix"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_prefix",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_prolog",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int -\u003e Int -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_prolog",
        "fct-type": "function",
        "title": "x86_prolog"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_prolog",
        "normalized": "Int-\u003eInt-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_push_imm",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_push_imm",
        "fct-type": "function",
        "title": "x86_push_imm"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_push_imm",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_push_imm_template",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_push_imm_template",
        "fct-type": "function",
        "title": "x86_push_imm_template"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_push_imm_template",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_push_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_push_mem",
        "fct-type": "function",
        "title": "x86_push_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_push_mem",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_push_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_push_membase",
        "fct-type": "function",
        "title": "x86_push_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_push_membase",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_push_memindex",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_push_memindex",
        "fct-type": "function",
        "title": "x86_push_memindex"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_push_memindex",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_push_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_push_reg",
        "fct-type": "function",
        "title": "x86_push_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_push_reg",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_push_regp",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_push_regp",
        "fct-type": "function",
        "title": "x86_push_regp"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_push_regp",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_pushad",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_pushad",
        "fct-type": "function",
        "title": "x86_pushad"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_pushad",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_pushfd",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_pushfd",
        "fct-type": "function",
        "title": "x86_pushfd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_pushfd",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_qword_size",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_dword_size",
        "fct-type": "function",
        "title": "x86_qword_size"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_qword_size",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_rcl",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_sar",
        "fct-type": "function",
        "title": "x86_rcl"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_rcl",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_rcr",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_sar",
        "fct-type": "function",
        "title": "x86_rcr"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_rcr",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_rdtsc",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_rdtsc",
        "fct-type": "function",
        "title": "x86_rdtsc"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_rdtsc",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_rep_prefix",
      "description": {
        "fct-descr": "\u003cp\u003ePrefix codes\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_lock_prefix",
        "fct-type": "function",
        "title": "x86_rep_prefix"
      },
      "index": {
        "description": "Prefix codes",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_rep_prefix",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_repnz_prefix",
      "description": {
        "fct-descr": "\u003cp\u003ePrefix codes\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_lock_prefix",
        "fct-type": "function",
        "title": "x86_repnz_prefix"
      },
      "index": {
        "description": "Prefix codes",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_repnz_prefix",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_repz_prefix",
      "description": {
        "fct-descr": "\u003cp\u003ePrefix codes\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_lock_prefix",
        "fct-type": "function",
        "title": "x86_repz_prefix"
      },
      "index": {
        "description": "Prefix codes",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_repz_prefix",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ret",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_ret",
        "fct-type": "function",
        "title": "x86_ret"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_ret",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ret_imm",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word16 -\u003e CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_ret_imm",
        "fct-type": "function",
        "title": "x86_ret_imm"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_ret_imm",
        "normalized": "Word-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eCodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_rol",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_sar",
        "fct-type": "function",
        "title": "x86_rol"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_rol",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ror",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_sar",
        "fct-type": "function",
        "title": "x86_ror"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_ror",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_sahf",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_sahf",
        "fct-type": "function",
        "title": "x86_sahf"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_sahf",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_sar",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_sar",
        "fct-type": "function",
        "title": "x86_sar"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_sar",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_sbb",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cmp",
        "fct-type": "function",
        "title": "x86_sbb"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_sbb",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_set_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int -\u003e Word32 -\u003e Bool -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_set_mem",
        "fct-type": "function",
        "title": "x86_set_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_set_mem",
        "normalized": "Int-\u003eWord-\u003eBool-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Int-\u003eWord-\u003eBool-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_set_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int -\u003e Word8 -\u003e Word32 -\u003e Bool -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_set_membase",
        "fct-type": "function",
        "title": "x86_set_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_set_membase",
        "normalized": "Int-\u003eWord-\u003eWord-\u003eBool-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Int-\u003eWord-\u003eWord-\u003eBool-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_set_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Int -\u003e Word8 -\u003e Bool -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_set_reg",
        "fct-type": "function",
        "title": "x86_set_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_set_reg",
        "normalized": "Int-\u003eWord-\u003eBool-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Int-\u003eWord-\u003eBool-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shift_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_shift_mem",
        "fct-type": "function",
        "title": "x86_shift_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_shift_mem",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shift_mem_imm",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_shift_mem_imm",
        "fct-type": "function",
        "title": "x86_shift_mem_imm"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_shift_mem_imm",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shift_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_shift_membase",
        "fct-type": "function",
        "title": "x86_shift_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_shift_membase",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shift_membase_imm",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_shift_membase_imm",
        "fct-type": "function",
        "title": "x86_shift_membase_imm"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_shift_membase_imm",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shift_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_shift_reg",
        "fct-type": "function",
        "title": "x86_shift_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_shift_reg",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shift_reg_imm",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_shift_reg_imm",
        "fct-type": "function",
        "title": "x86_shift_reg_imm"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_shift_reg_imm",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shl",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_sar",
        "fct-type": "function",
        "title": "x86_shl"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_shl",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shld",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_sar",
        "fct-type": "function",
        "title": "x86_shld"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_shld",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shld_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_shld_reg",
        "fct-type": "function",
        "title": "x86_shld_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_shld_reg",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shld_reg_imm",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_shld_reg_imm",
        "fct-type": "function",
        "title": "x86_shld_reg_imm"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_shld_reg_imm",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shlr",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_sar",
        "fct-type": "function",
        "title": "x86_shlr"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_shlr",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shr",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_sar",
        "fct-type": "function",
        "title": "x86_shr"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_shr",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shrd_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_shrd_reg",
        "fct-type": "function",
        "title": "x86_shrd_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_shrd_reg",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shrd_reg_imm",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_shrd_reg_imm",
        "fct-type": "function",
        "title": "x86_shrd_reg_imm"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_shrd_reg_imm",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shufpd",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e xmm -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_shufpd",
        "fct-type": "function",
        "title": "x86_shufpd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_shufpd",
        "normalized": "Word-\u003ea-\u003eWord-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003exmm-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_shufps",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e xmm -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_shufps",
        "fct-type": "function",
        "title": "x86_shufps"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_shufps",
        "normalized": "Word-\u003ea-\u003eWord-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003exmm-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_sqrt_sse_reg_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_sqrt_sse_reg_mem",
        "fct-type": "function",
        "title": "x86_sqrt_sse_reg_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_sqrt_sse_reg_mem",
        "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_sqrt_sse_reg_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_sqrt_sse_reg_membase",
        "fct-type": "function",
        "title": "x86_sqrt_sse_reg_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_sqrt_sse_reg_membase",
        "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_sqrt_sse_reg_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_sqrt_sse_reg_reg",
        "fct-type": "function",
        "title": "x86_sqrt_sse_reg_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_sqrt_sse_reg_reg",
        "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ss_prefix",
      "description": {
        "fct-descr": "\u003cp\u003ePrefix codes\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_lock_prefix",
        "fct-type": "function",
        "title": "x86_ss_prefix"
      },
      "index": {
        "description": "Prefix codes",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_ss_prefix",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_sse_pd",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_sse_sd",
        "fct-type": "function",
        "title": "x86_sse_pd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_sse_pd",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_sse_ps",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_sse_sd",
        "fct-type": "function",
        "title": "x86_sse_ps"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_sse_ps",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_sse_sd",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_sse_sd",
        "fct-type": "function",
        "title": "x86_sse_sd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_sse_sd",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_sse_ss",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_sse_sd",
        "fct-type": "function",
        "title": "x86_sse_ss"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_sse_ss",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_stosb",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_breakpoint",
        "fct-type": "function",
        "title": "x86_stosb"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_stosb",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_stosd",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_breakpoint",
        "fct-type": "function",
        "title": "x86_stosd"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_stosd",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_stosl",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_breakpoint",
        "fct-type": "function",
        "title": "x86_stosl"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_stosl",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_sub",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cmp",
        "fct-type": "function",
        "title": "x86_sub"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_sub",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_sub_sse_reg_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_sub_sse_reg_mem",
        "fct-type": "function",
        "title": "x86_sub_sse_reg_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_sub_sse_reg_mem",
        "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_sub_sse_reg_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_sub_sse_reg_membase",
        "fct-type": "function",
        "title": "x86_sub_sse_reg_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_sub_sse_reg_membase",
        "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_sub_sse_reg_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "X86_SSE_PFX -\u003e Word8 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_sub_sse_reg_reg",
        "fct-type": "function",
        "title": "x86_sub_sse_reg_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_sub_sse_reg_reg",
        "normalized": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "X SSE_PFX-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_test_mem_imm",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_test_mem_imm",
        "fct-type": "function",
        "title": "x86_test_mem_imm"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_test_mem_imm",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_test_mem_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_test_mem_reg",
        "fct-type": "function",
        "title": "x86_test_mem_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_test_mem_reg",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_test_membase_imm",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_test_membase_imm",
        "fct-type": "function",
        "title": "x86_test_membase_imm"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_test_membase_imm",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_test_membase_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_test_membase_reg",
        "fct-type": "function",
        "title": "x86_test_membase_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_test_membase_reg",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_test_reg_imm",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_test_reg_imm",
        "fct-type": "function",
        "title": "x86_test_reg_imm"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_test_reg_imm",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_test_reg_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_test_reg_reg",
        "fct-type": "function",
        "title": "x86_test_reg_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_test_reg_reg",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ucomisd_reg_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_ucomisd_reg_mem",
        "fct-type": "function",
        "title": "x86_ucomisd_reg_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_ucomisd_reg_mem",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ucomisd_reg_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_ucomisd_reg_membase",
        "fct-type": "function",
        "title": "x86_ucomisd_reg_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_ucomisd_reg_membase",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ucomisd_reg_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_ucomisd_reg_reg",
        "fct-type": "function",
        "title": "x86_ucomisd_reg_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_ucomisd_reg_reg",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ucomiss_reg_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_ucomiss_reg_mem",
        "fct-type": "function",
        "title": "x86_ucomiss_reg_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_ucomiss_reg_mem",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ucomiss_reg_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_ucomiss_reg_membase",
        "fct-type": "function",
        "title": "x86_ucomiss_reg_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_ucomiss_reg_membase",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_ucomiss_reg_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_ucomiss_reg_reg",
        "fct-type": "function",
        "title": "x86_ucomiss_reg_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_ucomiss_reg_reg",
        "normalized": "Word-\u003eWord-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_unlikely_prefix",
      "description": {
        "fct-descr": "\u003cp\u003ePrefix codes\n\u003c/p\u003e",
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_lock_prefix",
        "fct-type": "function",
        "title": "x86_unlikely_prefix"
      },
      "index": {
        "description": "Prefix codes",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_unlikely_prefix",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_wait",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "CodeGen s e ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cdq",
        "fct-type": "function",
        "title": "x86_wait"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_wait",
        "normalized": "CodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "CodeGen s e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_widen_mem",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e Bool -\u003e Bool -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_widen_mem",
        "fct-type": "function",
        "title": "x86_widen_mem"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_widen_mem",
        "normalized": "Word-\u003eWord-\u003eBool-\u003eBool-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eBool-\u003eBool-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_widen_membase",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e Bool -\u003e Bool -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_widen_membase",
        "fct-type": "function",
        "title": "x86_widen_membase"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_widen_membase",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eBool-\u003eBool-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eBool-\u003eBool-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_widen_memindex",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Word32 -\u003e Word8 -\u003e Word8 -\u003e Bool -\u003e Bool -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_widen_memindex",
        "fct-type": "function",
        "title": "x86_widen_memindex"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_widen_memindex",
        "normalized": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eBool-\u003eBool-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003eWord-\u003eWord-\u003eBool-\u003eBool-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_widen_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e Bool -\u003e Bool -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_widen_reg",
        "fct-type": "function",
        "title": "x86_widen_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_widen_reg",
        "normalized": "Word-\u003eWord-\u003eBool-\u003eBool-\u003eCodeGen a b()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eBool-\u003eBool-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_xadd_mem_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e Word8 -\u003e a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_xadd_mem_reg",
        "fct-type": "function",
        "title": "x86_xadd_mem_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_xadd_mem_reg",
        "normalized": "Word-\u003eWord-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003ea-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_xadd_membase_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e Word8 -\u003e a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_xadd_membase_reg",
        "fct-type": "function",
        "title": "x86_xadd_membase_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_xadd_membase_reg",
        "normalized": "Word-\u003eWord-\u003eWord-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003ea-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_xadd_reg_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_xadd_reg_reg",
        "fct-type": "function",
        "title": "x86_xadd_reg_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_xadd_reg_reg",
        "normalized": "Word-\u003eWord-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003ea-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_xchg_mem_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word32 -\u003e Word8 -\u003e a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_xchg_mem_reg",
        "fct-type": "function",
        "title": "x86_xchg_mem_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_xchg_mem_reg",
        "normalized": "Word-\u003eWord-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003ea-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_xchg_membase_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word32 -\u003e Word8 -\u003e a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_xchg_membase_reg",
        "fct-type": "function",
        "title": "x86_xchg_membase_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_xchg_membase_reg",
        "normalized": "Word-\u003eWord-\u003eWord-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003eWord-\u003ea-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_xchg_reg_reg",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e Word8 -\u003e a -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_xchg_reg_reg",
        "fct-type": "function",
        "title": "x86_xchg_reg_reg"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_xchg_reg_reg",
        "normalized": "Word-\u003eWord-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003eWord-\u003ea-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:x86_xor",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8",
        "fct-source": "src/Harpy-X86CodeGen.html#x86_cmp",
        "fct-type": "function",
        "title": "x86_xor"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "x86_xor",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86CodeGen.html#v:xmm_location_emit",
      "description": {
        "fct-module": "Harpy.X86CodeGen",
        "fct-package": "harpy",
        "fct-signature": "Word8 -\u003e xmm -\u003e CodeGen e s ()",
        "fct-source": "src/Harpy-X86CodeGen.html#xmm_location_emit",
        "fct-type": "method",
        "title": "xmm_location_emit"
      },
      "index": {
        "description": "",
        "hierarchy": "Harpy X86CodeGen",
        "module": "Harpy.X86CodeGen",
        "name": "xmm_location_emit",
        "normalized": "Word-\u003ea-\u003eCodeGen b c()",
        "package": "harpy",
        "partial": "",
        "signature": "Word-\u003exmm-\u003eCodeGen e s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDisassembler for x86 machine code.\n\u003c/p\u003e\u003cp\u003eThis is a module for compatibility with earlier Harpy releases.  It\n re-exports the disassembler from the disassembler package.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "module",
        "fct-source": "src/Harpy-X86Disassembler.html",
        "fct-type": "module",
        "title": "X86Disassembler"
      },
      "index": {
        "description": "Disassembler for x86 machine code This is module for compatibility with earlier Harpy releases It re-exports the disassembler from the disassembler package",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "X86Disassembler",
        "normalized": "",
        "package": "harpy",
        "partial": "Disassembler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#t:InstrOperandSize",
      "description": {
        "fct-descr": "\u003cp\u003eSome opcodes can operate on data of several widths.  This information\n is encoded in instructions using the following enumeration type..\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "InstrOperandSize"
      },
      "index": {
        "description": "Some opcodes can operate on data of several widths This information is encoded in instructions using the following enumeration type",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "InstrOperandSize",
        "normalized": "",
        "package": "harpy",
        "partial": "Instr Operand Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#t:Instruction",
      "description": {
        "fct-descr": "\u003cp\u003eThe disassembly routines return lists of the following datatype.  It\n encodes both invalid byte sequences (with a useful error message, if\n possible), or a valid instruction.  Both variants contain the list of\n opcode bytes from which the instruction was decoded and the address of\n the instruction.\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Instruction"
      },
      "index": {
        "description": "The disassembly routines return lists of the following datatype It encodes both invalid byte sequences with useful error message if possible or valid instruction Both variants contain the list of opcode bytes from which the instruction was decoded and the address of the instruction",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "Instruction",
        "normalized": "",
        "package": "harpy",
        "partial": "Instruction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#t:Opcode",
      "description": {
        "fct-descr": "\u003cp\u003eAll opcodes are represented by this enumeration type.\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Opcode"
      },
      "index": {
        "description": "All opcodes are represented by this enumeration type",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "Opcode",
        "normalized": "",
        "package": "harpy",
        "partial": "Opcode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#t:Operand",
      "description": {
        "fct-descr": "\u003cp\u003eAll operands are in one of the following locations:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Constants in the instruction stream\n\u003c/li\u003e\u003cli\u003e Memory locations\n\u003c/li\u003e\u003cli\u003e Registers\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMemory locations are referred to by on of several addressing modes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Absolute (address in instruction stream)\n\u003c/li\u003e\u003cli\u003e Register-indirect (address in register)\n\u003c/li\u003e\u003cli\u003e Register-indirect with displacement\n\u003c/li\u003e\u003cli\u003e Base-Index with scale\n\u003c/li\u003e\u003cli\u003e Base-Index with scale and displacement \n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eDisplacements can be encoded as 8 or 32-bit immediates in the\n instruction stream, but are encoded as Int in instructions for\n simplicity.\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Operand"
      },
      "index": {
        "description": "All operands are in one of the following locations Constants in the instruction stream Memory locations Registers Memory locations are referred to by on of several addressing modes Absolute address in instruction stream Register-indirect address in register Register-indirect with displacement Base-Index with scale Base-Index with scale and displacement Displacements can be encoded as or bit immediates in the instruction stream but are encoded as Int in instructions for simplicity",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "Operand",
        "normalized": "",
        "package": "harpy",
        "partial": "Operand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#t:ShowStyle",
      "description": {
        "fct-descr": "\u003cp\u003eInstructions can be displayed either in Intel or AT&T style (like in\n GNU tools).\n\u003c/p\u003e\u003cp\u003eIntel style:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Destination operand comes first, source second.\n\u003c/li\u003e\u003cli\u003e No register or immediate prefixes.\n\u003c/li\u003e\u003cli\u003e Memory operands are annotated with operand size.\n\u003c/li\u003e\u003cli\u003e Hexadecimal numbers are suffixed with \u003ccode\u003eH\u003c/code\u003e and prefixed with \u003ccode\u003e0\u003c/code\u003e if\n   necessary.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAT&T style:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Source operand comes first, destination second.\n\u003c/li\u003e\u003cli\u003e Register names are prefixes with \u003ccode\u003e%\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Immediates are prefixed with \u003ccode\u003e$\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Hexadecimal numbers are prefixes with \u003ccode\u003e0x\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Opcodes are suffixed with operand size, when ambiguous otherwise.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ShowStyle"
      },
      "index": {
        "description": "Instructions can be displayed either in Intel or AT style like in GNU tools Intel style Destination operand comes first source second No register or immediate prefixes Memory operands are annotated with operand size Hexadecimal numbers are suffixed with and prefixed with if necessary AT style Source operand comes first destination second Register names are prefixes with Immediates are prefixed with Hexadecimal numbers are prefixes with Opcodes are suffixed with operand size when ambiguous otherwise",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "ShowStyle",
        "normalized": "",
        "package": "harpy",
        "partial": "Show Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:AttStyle",
      "description": {
        "fct-descr": "\u003cp\u003eShow in AT&T style\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "AttStyle",
        "fct-type": "function",
        "title": "AttStyle"
      },
      "index": {
        "description": "Show in AT style",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "AttStyle",
        "normalized": "",
        "package": "harpy",
        "partial": "Att Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:BadInstruction",
      "description": {
        "fct-descr": "\u003cp\u003eInvalid instruction\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "BadInstruction Word8 String Int [Word8]",
        "fct-type": "function",
        "title": "BadInstruction"
      },
      "index": {
        "description": "Invalid instruction",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "BadInstruction",
        "normalized": "BadInstruction Word String Int[Word]",
        "package": "harpy",
        "partial": "Bad Instruction",
        "signature": "BadInstruction Word String Int[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:Instruction",
      "description": {
        "fct-descr": "\u003cp\u003eValid instruction\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "Instruction",
        "fct-type": "function",
        "title": "Instruction"
      },
      "index": {
        "description": "Valid instruction",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "Instruction",
        "normalized": "",
        "package": "harpy",
        "partial": "Instruction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:IntelStyle",
      "description": {
        "fct-descr": "\u003cp\u003eShow in Intel style\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "IntelStyle",
        "fct-type": "function",
        "title": "IntelStyle"
      },
      "index": {
        "description": "Show in Intel style",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "IntelStyle",
        "normalized": "",
        "package": "harpy",
        "partial": "Intel Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OP128",
      "description": {
        "fct-descr": "\u003cp\u003e128-bit integer operand\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "OP128",
        "fct-type": "function",
        "title": "OP128"
      },
      "index": {
        "description": "bit integer operand",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "OP128",
        "normalized": "",
        "package": "harpy",
        "partial": "OP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OP16",
      "description": {
        "fct-descr": "\u003cp\u003e16-bit integer operand\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "OP16",
        "fct-type": "function",
        "title": "OP16"
      },
      "index": {
        "description": "bit integer operand",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "OP16",
        "normalized": "",
        "package": "harpy",
        "partial": "OP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OP32",
      "description": {
        "fct-descr": "\u003cp\u003e32-bit integer operand\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "OP32",
        "fct-type": "function",
        "title": "OP32"
      },
      "index": {
        "description": "bit integer operand",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "OP32",
        "normalized": "",
        "package": "harpy",
        "partial": "OP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OP64",
      "description": {
        "fct-descr": "\u003cp\u003e64-bit integer operand\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "OP64",
        "fct-type": "function",
        "title": "OP64"
      },
      "index": {
        "description": "bit integer operand",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "OP64",
        "normalized": "",
        "package": "harpy",
        "partial": "OP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OP8",
      "description": {
        "fct-descr": "\u003cp\u003e8-bit integer operand\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "OP8",
        "fct-type": "function",
        "title": "OP8"
      },
      "index": {
        "description": "bit integer operand",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "OP8",
        "normalized": "",
        "package": "harpy",
        "partial": "OP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OPF32",
      "description": {
        "fct-descr": "\u003cp\u003e32-bit floating point operand\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "OPF32",
        "fct-type": "function",
        "title": "OPF32"
      },
      "index": {
        "description": "bit floating point operand",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "OPF32",
        "normalized": "",
        "package": "harpy",
        "partial": "OPF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OPF64",
      "description": {
        "fct-descr": "\u003cp\u003e64-bit floating point operand\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "OPF64",
        "fct-type": "function",
        "title": "OPF64"
      },
      "index": {
        "description": "bit floating point operand",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "OPF64",
        "normalized": "",
        "package": "harpy",
        "partial": "OPF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OPF80",
      "description": {
        "fct-descr": "\u003cp\u003e80-bit floating point operand\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "OPF80",
        "fct-type": "function",
        "title": "OPF80"
      },
      "index": {
        "description": "bit floating point operand",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "OPF80",
        "normalized": "",
        "package": "harpy",
        "partial": "OPF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OPNONE",
      "description": {
        "fct-descr": "\u003cp\u003eNo operand size specified\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "OPNONE",
        "fct-type": "function",
        "title": "OPNONE"
      },
      "index": {
        "description": "No operand size specified",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "OPNONE",
        "normalized": "",
        "package": "harpy",
        "partial": "OPNONE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OpAddr",
      "description": {
        "fct-descr": "\u003cp\u003eAbsolute address\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "OpAddr Word32 InstrOperandSize",
        "fct-type": "function",
        "title": "OpAddr"
      },
      "index": {
        "description": "Absolute address",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "OpAddr",
        "normalized": "",
        "package": "harpy",
        "partial": "Op Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OpBaseIndex",
      "description": {
        "fct-descr": "\u003cp\u003eBase plus scaled index\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "OpBaseIndex String String Int InstrOperandSize",
        "fct-type": "function",
        "title": "OpBaseIndex"
      },
      "index": {
        "description": "Base plus scaled index",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "OpBaseIndex",
        "normalized": "",
        "package": "harpy",
        "partial": "Op Base Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OpBaseIndexDisp",
      "description": {
        "fct-descr": "\u003cp\u003eBase plus scaled index with displacement\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "OpBaseIndexDisp String String Int Int InstrOperandSize",
        "fct-type": "function",
        "title": "OpBaseIndexDisp"
      },
      "index": {
        "description": "Base plus scaled index with displacement",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "OpBaseIndexDisp",
        "normalized": "",
        "package": "harpy",
        "partial": "Op Base Index Disp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OpFPReg",
      "description": {
        "fct-descr": "\u003cp\u003eFloating-point register\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "OpFPReg Int",
        "fct-type": "function",
        "title": "OpFPReg"
      },
      "index": {
        "description": "Floating-point register",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "OpFPReg",
        "normalized": "",
        "package": "harpy",
        "partial": "Op FPReg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OpImm",
      "description": {
        "fct-descr": "\u003cp\u003eImmediate value\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "OpImm Word32",
        "fct-type": "function",
        "title": "OpImm"
      },
      "index": {
        "description": "Immediate value",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "OpImm",
        "normalized": "",
        "package": "harpy",
        "partial": "Op Imm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OpInd",
      "description": {
        "fct-descr": "\u003cp\u003eRegister-indirect\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "OpInd String InstrOperandSize",
        "fct-type": "function",
        "title": "OpInd"
      },
      "index": {
        "description": "Register-indirect",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "OpInd",
        "normalized": "",
        "package": "harpy",
        "partial": "Op Ind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OpIndDisp",
      "description": {
        "fct-descr": "\u003cp\u003eRegister-indirect with displacement\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "OpIndDisp String Int InstrOperandSize",
        "fct-type": "function",
        "title": "OpIndDisp"
      },
      "index": {
        "description": "Register-indirect with displacement",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "OpIndDisp",
        "normalized": "",
        "package": "harpy",
        "partial": "Op Ind Disp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OpIndexDisp",
      "description": {
        "fct-descr": "\u003cp\u003eScaled index with displacement\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "OpIndexDisp String Int Int InstrOperandSize",
        "fct-type": "function",
        "title": "OpIndexDisp"
      },
      "index": {
        "description": "Scaled index with displacement",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "OpIndexDisp",
        "normalized": "",
        "package": "harpy",
        "partial": "Op Index Disp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:OpReg",
      "description": {
        "fct-descr": "\u003cp\u003eRegister\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "OpReg String Int",
        "fct-type": "function",
        "title": "OpReg"
      },
      "index": {
        "description": "Register",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "OpReg",
        "normalized": "",
        "package": "harpy",
        "partial": "Op Reg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:PseudoInstruction",
      "description": {
        "fct-descr": "\u003cp\u003ePseudo instruction, e.g. label\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "PseudoInstruction Int String",
        "fct-type": "function",
        "title": "PseudoInstruction"
      },
      "index": {
        "description": "Pseudo instruction e.g label",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "PseudoInstruction",
        "normalized": "",
        "package": "harpy",
        "partial": "Pseudo Instruction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:address",
      "description": {
        "fct-descr": "\u003cp\u003eStart address of instruction\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "Int",
        "fct-type": "function",
        "title": "address"
      },
      "index": {
        "description": "Start address of instruction",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "address",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:bytes",
      "description": {
        "fct-descr": "\u003cp\u003eInstruction bytes\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "[Word8]",
        "fct-type": "function",
        "title": "bytes"
      },
      "index": {
        "description": "Instruction bytes",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "bytes",
        "normalized": "[Word]",
        "package": "harpy",
        "partial": "",
        "signature": "[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:disassembleArray",
      "description": {
        "fct-descr": "\u003cp\u003eDisassemble the contents of the given array.\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "a i Word8 -\u003e m (Either ParseError [Instruction])",
        "fct-type": "function",
        "title": "disassembleArray"
      },
      "index": {
        "description": "Disassemble the contents of the given array",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "disassembleArray",
        "normalized": "a b Word-\u003ec(Either ParseError[Instruction])",
        "package": "harpy",
        "partial": "Array",
        "signature": "a i Word-\u003em(Either ParseError[Instruction])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:disassembleBlock",
      "description": {
        "fct-descr": "\u003cp\u003eDisassemble a block of memory.  Starting at the location\n pointed to by the given pointer, the given number of bytes are\n disassembled.\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "Ptr Word8 -\u003e Int -\u003e IO (Either ParseError [Instruction])",
        "fct-type": "function",
        "title": "disassembleBlock"
      },
      "index": {
        "description": "Disassemble block of memory Starting at the location pointed to by the given pointer the given number of bytes are disassembled",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "disassembleBlock",
        "normalized": "Ptr Word-\u003eInt-\u003eIO(Either ParseError[Instruction])",
        "package": "harpy",
        "partial": "Block",
        "signature": "Ptr Word-\u003eInt-\u003eIO(Either ParseError[Instruction])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:disassembleList",
      "description": {
        "fct-descr": "\u003cp\u003eDisassemble the contents of the given list.\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "[Word8] -\u003e m (Either ParseError [Instruction])",
        "fct-type": "function",
        "title": "disassembleList"
      },
      "index": {
        "description": "Disassemble the contents of the given list",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "disassembleList",
        "normalized": "[Word]-\u003ea(Either ParseError[Instruction])",
        "package": "harpy",
        "partial": "List",
        "signature": "[Word]-\u003em(Either ParseError[Instruction])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:opcode",
      "description": {
        "fct-descr": "\u003cp\u003eOpcode of the instruction\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "Opcode",
        "fct-type": "function",
        "title": "opcode"
      },
      "index": {
        "description": "Opcode of the instruction",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "opcode",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:operands",
      "description": {
        "fct-descr": "\u003cp\u003eInstruction operands\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "[Operand]",
        "fct-type": "function",
        "title": "operands"
      },
      "index": {
        "description": "Instruction operands",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "operands",
        "normalized": "[Operand]",
        "package": "harpy",
        "partial": "",
        "signature": "[Operand]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:opsize",
      "description": {
        "fct-descr": "\u003cp\u003eOperand size, if any\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "InstrOperandSize",
        "fct-type": "function",
        "title": "opsize"
      },
      "index": {
        "description": "Operand size if any",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "opsize",
        "normalized": "",
        "package": "harpy",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:showAtt",
      "description": {
        "fct-descr": "\u003cp\u003eShow an instruction in AT&T style.\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "Instruction -\u003e [Char]",
        "fct-type": "function",
        "title": "showAtt"
      },
      "index": {
        "description": "Show an instruction in AT style",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "showAtt",
        "normalized": "Instruction-\u003e[Char]",
        "package": "harpy",
        "partial": "Att",
        "signature": "Instruction-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy-X86Disassembler.html#v:showIntel",
      "description": {
        "fct-descr": "\u003cp\u003eShow an instruction in Intel style.\n\u003c/p\u003e",
        "fct-module": "Harpy.X86Disassembler",
        "fct-package": "harpy",
        "fct-signature": "Instruction -\u003e [Char]",
        "fct-type": "function",
        "title": "showIntel"
      },
      "index": {
        "description": "Show an instruction in Intel style",
        "hierarchy": "Harpy X86Disassembler",
        "module": "Harpy.X86Disassembler",
        "name": "showIntel",
        "normalized": "Instruction-\u003e[Char]",
        "package": "harpy",
        "partial": "Intel",
        "signature": "Instruction-\u003e[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/harpy/docs/Harpy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHarpy is a library for run-time code generation of x86 machine code.\n\u003c/p\u003e\u003cp\u003eThis is a convenience module which re-exports the modules which are\n essential for using Harpy.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Harpy",
        "fct-package": "harpy",
        "fct-signature": "module",
        "fct-source": "src/Harpy.html",
        "fct-type": "module",
        "title": "Harpy"
      },
      "index": {
        "description": "Harpy is library for run-time code generation of x86 machine code This is convenience module which re-exports the modules which are essential for using Harpy",
        "hierarchy": "Harpy",
        "module": "Harpy",
        "name": "Harpy",
        "normalized": "",
        "package": "harpy",
        "partial": "Harpy",
        "signature": ""
      }
    }
  }
]