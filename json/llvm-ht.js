[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe LLVM (Low Level Virtual Machine) is virtual machine at a machine code level.\n It supports both stand alone code generation and JITing.\n The Haskell llvm package is a (relatively) high level interface to the LLVM.\n The high level interface makes it easy to construct LLVM code.\n There is also an interface to the raw low level LLVM API as exposed by the LLVM C interface.\n\u003c/p\u003e\u003cp\u003eLLVM code is organized into modules (type \u003ccode\u003e\u003ca\u003eModule\u003c/a\u003e\u003c/code\u003e).\n Each module contains a number of global variables and functions (type \u003ccode\u003e\u003ca\u003eFunction\u003c/a\u003e\u003c/code\u003e).\n Each functions has a number of basic blocks (type \u003ccode\u003e\u003ca\u003eBasicBlock\u003c/a\u003e\u003c/code\u003e).\n Each basic block has a number instructions, where each instruction produces\n a value (type \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eUnlike assembly code for a real processor the assembly code for LLVM is\n in SSA (Static Single Assignment) form.  This means that each instruction generates\n a new bound variable which may not be assigned again.\n A consequence of this is that where control flow joins from several execution\n paths there has to be a phi pseudo instruction if you want different variables\n to be joined into one.\n\u003c/p\u003e\u003cp\u003eThe definition of several of the LLVM entities (\u003ccode\u003e\u003ca\u003eModule\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFunction\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eBasicBlock\u003c/a\u003e\u003c/code\u003e)\n follow the same pattern.  First the entity has to be created using \u003ccode\u003enewX\u003c/code\u003e (where \u003ccode\u003eX\u003c/code\u003e\n is one of \u003ccode\u003eModule\u003c/code\u003e, \u003ccode\u003eFunction\u003c/code\u003e, or \u003ccode\u003eBasicBlock\u003c/code\u003e), then at some later point it has to\n given its definition using \u003ccode\u003edefineX\u003c/code\u003e.  The reason for splitting the creation and\n definition is that you often need to be able to refer to an entity before giving\n it's body, e.g., in two mutually recursive functions.\n The the \u003ccode\u003enewX\u003c/code\u003e and \u003ccode\u003edefineX\u003c/code\u003e function can also be done at the same time by using\n \u003ccode\u003ecreateX\u003c/code\u003e.  Furthermore, an explicit name can be given to an entity by the\n \u003ccode\u003enewNamedX\u003c/code\u003e function; the \u003ccode\u003enewX\u003c/code\u003e function just generates a fresh name.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "module",
        "fct-source": "src/LLVM-Core.html",
        "fct-type": "module",
        "title": "Core"
      },
      "index": {
        "description": "The LLVM Low Level Virtual Machine is virtual machine at machine code level It supports both stand alone code generation and JITing The Haskell llvm package is relatively high level interface to the LLVM The high level interface makes it easy to construct LLVM code There is also an interface to the raw low level LLVM API as exposed by the LLVM interface LLVM code is organized into modules type Module Each module contains number of global variables and functions type Function Each functions has number of basic blocks type BasicBlock Each basic block has number instructions where each instruction produces value type Value Unlike assembly code for real processor the assembly code for LLVM is in SSA Static Single Assignment form This means that each instruction generates new bound variable which may not be assigned again consequence of this is that where control flow joins from several execution paths there has to be phi pseudo instruction if you want different variables to be joined into one The definition of several of the LLVM entities Module Function and BasicBlock follow the same pattern First the entity has to be created using newX where is one of Module Function or BasicBlock then at some later point it has to given its definition using defineX The reason for splitting the creation and definition is that you often need to be able to refer to an entity before giving it body e.g in two mutually recursive functions The the newX and defineX function can also be done at the same time by using createX Furthermore an explicit name can be given to an entity by the newNamedX function the newX function just generates fresh name",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "Core",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Core",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t::-38-",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "type",
        "fct-source": "src/LLVM-Core-Type.html#%3A%26",
        "fct-type": "type",
        "title": ":&"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": ":&",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t::-43--45--62-",
      "description": {
        "fct-descr": "\u003cp\u003eTupleFunction is used for distinction of tuple and atomic arguments.\nThe a function of type \u003ccode\u003ea -\u003e b :+-\u003e c -\u003e d\u003c/code\u003e\nhas atomic arguments of type \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e\nand an argument of a type \u003ccode\u003eb\u003c/code\u003e that can be a tuple.\nIf \u003ccode\u003ea = (Word8,Int16)\u003c/code\u003e then the corresponding LLVM value is of type \u003ccode\u003eValue (Word8,Int16)\u003c/code\u003e.\nHowever, I do not know of a LLVM function that accepts values of this type.\nIf \u003ccode\u003eb = (Word8,Int16)\u003c/code\u003e then the corresponding LLVM value is of type \u003ccode\u003e(Value Word8, Value Int16)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-Core-Type.html#%3A%2B-%3E",
        "fct-type": "data",
        "title": ":+-\u003e"
      },
      "index": {
        "description": "TupleFunction is used for distinction of tuple and atomic arguments The function of type has atomic arguments of type and and an argument of type that can be tuple If Word8 Int16 then the corresponding LLVM value is of type Value Word8 Int16 However do not know of LLVM function that accepts values of this type If Word8 Int16 then the corresponding LLVM value is of type Value Word8 Value Int16",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": ":+-\u003e",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:ABinOp",
      "description": {
        "fct-descr": "\u003cp\u003eAcceptable arguments to arithmetic binary instructions.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Core-Instructions.html#ABinOp",
        "fct-type": "class",
        "title": "ABinOp"
      },
      "index": {
        "description": "Acceptable arguments to arithmetic binary instructions",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "ABinOp",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "ABin Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:AllocArg",
      "description": {
        "fct-descr": "\u003cp\u003eAcceptable argument to array memory allocation.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Core-Instructions.html#AllocArg",
        "fct-type": "class",
        "title": "AllocArg"
      },
      "index": {
        "description": "Acceptable argument to array memory allocation",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "AllocArg",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Alloc Arg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:Array",
      "description": {
        "fct-descr": "\u003cp\u003eFixed sized arrays, the array size is encoded in the \u003cem\u003en\u003c/em\u003e parameter.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "newtype",
        "fct-source": "src/LLVM-Core-Data.html#Array",
        "fct-type": "newtype",
        "title": "Array"
      },
      "index": {
        "description": "Fixed sized arrays the array size is encoded in the parameter",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "Array",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:Attribute",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-FFI-Core.html#Attribute",
        "fct-type": "data",
        "title": "Attribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "Attribute",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:BasicBlock",
      "description": {
        "fct-descr": "\u003cp\u003eA basic block is a sequence of non-branching instructions, terminated by a control flow instruction.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-Core-CodeGen.html#BasicBlock",
        "fct-type": "data",
        "title": "BasicBlock"
      },
      "index": {
        "description": "basic block is sequence of non-branching instructions terminated by control flow instruction",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "BasicBlock",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Basic Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:CallArgs",
      "description": {
        "fct-descr": "\u003cp\u003eAcceptable arguments to \u003ccode\u003e\u003ca\u003ecall\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Core-Instructions.html#CallArgs",
        "fct-type": "class",
        "title": "CallArgs"
      },
      "index": {
        "description": "Acceptable arguments to call",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "CallArgs",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Call Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:CastVarArgs",
      "description": {
        "fct-descr": "\u003cp\u003eDefine what vararg types are permissible.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Core-Type.html#CastVarArgs",
        "fct-type": "class",
        "title": "CastVarArgs"
      },
      "index": {
        "description": "Define what vararg types are permissible",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "CastVarArgs",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Cast Var Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:CmpOp",
      "description": {
        "fct-descr": "\u003cp\u003eAcceptable operands to comparison instructions.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Core-Instructions.html#CmpOp",
        "fct-type": "class",
        "title": "CmpOp"
      },
      "index": {
        "description": "Acceptable operands to comparison instructions",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "CmpOp",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Cmp Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:CmpRet",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Core-Instructions.html#CmpRet",
        "fct-type": "class",
        "title": "CmpRet"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "CmpRet",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Cmp Ret",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:CodeGenFunction",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-Core-CodeGenMonad.html#CodeGenFunction",
        "fct-type": "data",
        "title": "CodeGenFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "CodeGenFunction",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Code Gen Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:CodeGenModule",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-Core-CodeGenMonad.html#CodeGenModule",
        "fct-type": "data",
        "title": "CodeGenModule"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "CodeGenModule",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Code Gen Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:ConstValue",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-Core-CodeGen.html#ConstValue",
        "fct-type": "data",
        "title": "ConstValue"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "ConstValue",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Const Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:FP128",
      "description": {
        "fct-descr": "\u003cp\u003e128 bit floating point.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "newtype",
        "fct-source": "src/LLVM-Core-Data.html#FP128",
        "fct-type": "newtype",
        "title": "FP128"
      },
      "index": {
        "description": "bit floating point",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "FP128",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "FP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:FPPredicate",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-Core-Instructions.html#FPPredicate",
        "fct-type": "data",
        "title": "FPPredicate"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "FPPredicate",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "FPPredicate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:Function",
      "description": {
        "fct-descr": "\u003cp\u003eA function is simply a pointer to the function.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "type",
        "fct-source": "src/LLVM-Core-CodeGen.html#Function",
        "fct-type": "type",
        "title": "Function"
      },
      "index": {
        "description": "function is simply pointer to the function",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "Function",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:FunctionArgs",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Core-CodeGen.html#FunctionArgs",
        "fct-type": "class",
        "title": "FunctionArgs"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "FunctionArgs",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Function Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:FunctionRet",
      "description": {
        "fct-descr": "\u003cp\u003eThis class is just to simplify contexts.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Core-CodeGen.html#FunctionRet",
        "fct-type": "class",
        "title": "FunctionRet"
      },
      "index": {
        "description": "This class is just to simplify contexts",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "FunctionRet",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Function Ret",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:GetElementPtr",
      "description": {
        "fct-descr": "\u003cp\u003eAcceptable arguments to \u003ccode\u003egetElementPointer\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Core-Instructions.html#GetElementPtr",
        "fct-type": "class",
        "title": "GetElementPtr"
      },
      "index": {
        "description": "Acceptable arguments to getElementPointer",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "GetElementPtr",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Get Element Ptr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:GetValue",
      "description": {
        "fct-descr": "\u003cp\u003eAcceptable arguments to \u003ccode\u003e\u003ca\u003eextractvalue\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003einsertvalue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Core-Instructions.html#GetValue",
        "fct-type": "class",
        "title": "GetValue"
      },
      "index": {
        "description": "Acceptable arguments to extractvalue and insertvalue",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "GetValue",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Get Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:Global",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "type",
        "fct-source": "src/LLVM-Core-CodeGen.html#Global",
        "fct-type": "type",
        "title": "Global"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "Global",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Global",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:GlobalMappings",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-Core-CodeGenMonad.html#GlobalMappings",
        "fct-type": "data",
        "title": "GlobalMappings"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "GlobalMappings",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Global Mappings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IntN",
      "description": {
        "fct-descr": "\u003cp\u003eVariable sized signed integer.\n The \u003cem\u003en\u003c/em\u003e parameter should belong to \u003ccode\u003ePosI\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "newtype",
        "fct-source": "src/LLVM-Core-Data.html#IntN",
        "fct-type": "newtype",
        "title": "IntN"
      },
      "index": {
        "description": "Variable sized signed integer The parameter should belong to PosI",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "IntN",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IntPredicate",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-Core-Instructions.html#IntPredicate",
        "fct-type": "data",
        "title": "IntPredicate"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "IntPredicate",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Int Predicate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IsArithmetic",
      "description": {
        "fct-descr": "\u003cp\u003eArithmetic types, i.e., integral and floating types.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Core-Type.html#IsArithmetic",
        "fct-type": "class",
        "title": "IsArithmetic"
      },
      "index": {
        "description": "Arithmetic types i.e integral and floating types",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "IsArithmetic",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Is Arithmetic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IsConst",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Core-CodeGen.html#IsConst",
        "fct-type": "class",
        "title": "IsConst"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "IsConst",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Is Const",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IsFirstClass",
      "description": {
        "fct-descr": "\u003cp\u003eFirst class types, i.e., the types that can be passed as arguments, etc.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Core-Type.html#IsFirstClass",
        "fct-type": "class",
        "title": "IsFirstClass"
      },
      "index": {
        "description": "First class types i.e the types that can be passed as arguments etc",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "IsFirstClass",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Is First Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IsFloating",
      "description": {
        "fct-descr": "\u003cp\u003eFloating types.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Core-Type.html#IsFloating",
        "fct-type": "class",
        "title": "IsFloating"
      },
      "index": {
        "description": "Floating types",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "IsFloating",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Is Floating",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IsFunction",
      "description": {
        "fct-descr": "\u003cp\u003eFunction type.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Core-Type.html#IsFunction",
        "fct-type": "class",
        "title": "IsFunction"
      },
      "index": {
        "description": "Function type",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "IsFunction",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Is Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IsIndexArg",
      "description": {
        "fct-descr": "\u003cp\u003eAcceptable single index to \u003ccode\u003egetElementPointer\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Core-Instructions.html#IsIndexArg",
        "fct-type": "class",
        "title": "IsIndexArg"
      },
      "index": {
        "description": "Acceptable single index to getElementPointer",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "IsIndexArg",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Is Index Arg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IsInteger",
      "description": {
        "fct-descr": "\u003cp\u003eIntegral types.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Core-Type.html#IsInteger",
        "fct-type": "class",
        "title": "IsInteger"
      },
      "index": {
        "description": "Integral types",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "IsInteger",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Is Integer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IsIntegerOrPointer",
      "description": {
        "fct-descr": "\u003cp\u003eIntegral or pointer type.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Core-Type.html#IsIntegerOrPointer",
        "fct-type": "class",
        "title": "IsIntegerOrPointer"
      },
      "index": {
        "description": "Integral or pointer type",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "IsIntegerOrPointer",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Is Integer Or Pointer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IsPowerOf2",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Core-Type.html#IsPowerOf2",
        "fct-type": "class",
        "title": "IsPowerOf2"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "IsPowerOf2",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Is Power Of",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IsPrimitive",
      "description": {
        "fct-descr": "\u003cp\u003ePrimitive types.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Core-Type.html#IsPrimitive",
        "fct-type": "class",
        "title": "IsPrimitive"
      },
      "index": {
        "description": "Primitive types",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "IsPrimitive",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Is Primitive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IsSized",
      "description": {
        "fct-descr": "\u003cp\u003eTypes with a fixed size.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Core-Type.html#IsSized",
        "fct-type": "class",
        "title": "IsSized"
      },
      "index": {
        "description": "Types with fixed size",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "IsSized",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Is Sized",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IsTuple",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Core-Type.html#IsTuple",
        "fct-type": "class",
        "title": "IsTuple"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "IsTuple",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Is Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IsType",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eIsType\u003c/a\u003e\u003c/code\u003e class classifies all types that have an LLVM representation.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Core-Type.html#IsType",
        "fct-type": "class",
        "title": "IsType"
      },
      "index": {
        "description": "The IsType class classifies all types that have an LLVM representation",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "IsType",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Is Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:Label",
      "description": {
        "fct-descr": "\u003cp\u003eLabel type, produced by a basic block.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-Core-Data.html#Label",
        "fct-type": "data",
        "title": "Label"
      },
      "index": {
        "description": "Label type produced by basic block",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "Label",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:Linkage",
      "description": {
        "fct-descr": "\u003cp\u003eAn enumeration for the kinds of linkage for global values.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "data",
        "title": "Linkage"
      },
      "index": {
        "description": "An enumeration for the kinds of linkage for global values",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "Linkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:MakeValueTuple",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Core-CodeGen.html#MakeValueTuple",
        "fct-type": "class",
        "title": "MakeValueTuple"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "MakeValueTuple",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Make Value Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:Module",
      "description": {
        "fct-descr": "\u003cp\u003eType of top level modules.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-Core-Util.html#Module",
        "fct-type": "data",
        "title": "Module"
      },
      "index": {
        "description": "Type of top level modules",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "Module",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:ModuleProvider",
      "description": {
        "fct-descr": "\u003cp\u003eA module provider is used by the code generator to get access to a module.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-Core-Util.html#ModuleProvider",
        "fct-type": "data",
        "title": "ModuleProvider"
      },
      "index": {
        "description": "module provider is used by the code generator to get access to module",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "ModuleProvider",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Module Provider",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:ModuleValue",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-Core-CodeGen.html#ModuleValue",
        "fct-type": "data",
        "title": "ModuleValue"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "ModuleValue",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Module Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:NumberOfElements",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of elements for instructions that handle both primitive and vector types\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Core-Type.html#NumberOfElements",
        "fct-type": "class",
        "title": "NumberOfElements"
      },
      "index": {
        "description": "Number of elements for instructions that handle both primitive and vector types",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "NumberOfElements",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Number Of Elements",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:PackedStruct",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "newtype",
        "fct-source": "src/LLVM-Core-Data.html#PackedStruct",
        "fct-type": "newtype",
        "title": "PackedStruct"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "PackedStruct",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Packed Struct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:PassManager",
      "description": {
        "fct-descr": "\u003cp\u003eManage compile passes.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-Core-Util.html#PassManager",
        "fct-type": "data",
        "title": "PassManager"
      },
      "index": {
        "description": "Manage compile passes",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "PassManager",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Pass Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:Ptr",
      "description": {
        "fct-descr": "\u003cp\u003eA value of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePtr\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e represents a pointer to an object, or an\n array of objects, which may be marshalled to or from Haskell values\n of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe type \u003ccode\u003ea\u003c/code\u003e will often be an instance of class\n Foreign.Storable.Storable which provides the marshalling operations.\n However this is not essential, and you can provide your own operations\n to access the pointer.  For example you might write small foreign\n functions to get or set the fields of a C \u003ccode\u003estruct\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Ptr"
      },
      "index": {
        "description": "value of type Ptr represents pointer to an object or an array of objects which may be marshalled to or from Haskell values of type The type will often be an instance of class Foreign.Storable.Storable which provides the marshalling operations However this is not essential and you can provide your own operations to access the pointer For example you might write small foreign functions to get or set the fields of struct",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "Ptr",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Ptr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:Ret",
      "description": {
        "fct-descr": "\u003cp\u003eAcceptable arguments to the \u003ccode\u003e\u003ca\u003eret\u003c/a\u003e\u003c/code\u003e instruction.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Core-Instructions.html#Ret",
        "fct-type": "class",
        "title": "Ret"
      },
      "index": {
        "description": "Acceptable arguments to the ret instruction",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "Ret",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Ret",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:Struct",
      "description": {
        "fct-descr": "\u003cp\u003eStruct types; a list (nested tuple) of component types.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "newtype",
        "fct-source": "src/LLVM-Core-Data.html#Struct",
        "fct-type": "newtype",
        "title": "Struct"
      },
      "index": {
        "description": "Struct types list nested tuple of component types",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "Struct",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Struct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:TFunction",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "type",
        "fct-source": "src/LLVM-Core-CodeGen.html#TFunction",
        "fct-type": "type",
        "title": "TFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "TFunction",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "TFunction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:TGlobal",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "type",
        "fct-source": "src/LLVM-Core-CodeGen.html#TGlobal",
        "fct-type": "type",
        "title": "TGlobal"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "TGlobal",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "TGlobal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:Terminate",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "type",
        "fct-source": "src/LLVM-Core-Instructions.html#Terminate",
        "fct-type": "type",
        "title": "Terminate"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "Terminate",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Terminate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:TypeDesc",
      "description": {
        "fct-descr": "\u003cp\u003eType descriptor, used to convey type information through the LLVM API.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-Core-Type.html#TypeDesc",
        "fct-type": "data",
        "title": "TypeDesc"
      },
      "index": {
        "description": "Type descriptor used to convey type information through the LLVM API",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "TypeDesc",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Type Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:Undefined",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Core-CodeGen.html#Undefined",
        "fct-type": "class",
        "title": "Undefined"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "Undefined",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Undefined",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:UnknownSize",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "type",
        "fct-source": "src/LLVM-Core-Type.html#UnknownSize",
        "fct-type": "type",
        "title": "UnknownSize"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "UnknownSize",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Unknown Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:Value",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-Core-CodeGen.html#Value",
        "fct-type": "data",
        "title": "Value"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "Value",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:ValueTuple",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Core-CodeGen.html#ValueTuple",
        "fct-type": "class",
        "title": "ValueTuple"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "ValueTuple",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Value Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:VarArgs",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eVarArgs\u003c/a\u003e\u003c/code\u003e type is a placeholder for the real \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e type that\n can be obtained with \u003ccode\u003ecastVarArgs\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-Core-Type.html#VarArgs",
        "fct-type": "data",
        "title": "VarArgs"
      },
      "index": {
        "description": "The VarArgs type is placeholder for the real IO type that can be obtained with castVarArgs",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "VarArgs",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Var Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:Vector",
      "description": {
        "fct-descr": "\u003cp\u003eFixed sized vector, the array size is encoded in the \u003cem\u003en\u003c/em\u003e parameter.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "newtype",
        "fct-source": "src/LLVM-Core-Data.html#Vector",
        "fct-type": "newtype",
        "title": "Vector"
      },
      "index": {
        "description": "Fixed sized vector the array size is encoded in the parameter",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "Vector",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:WordN",
      "description": {
        "fct-descr": "\u003cp\u003eVariable sized unsigned integer.\n The \u003cem\u003en\u003c/em\u003e parameter should belong to \u003ccode\u003ePosI\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "newtype",
        "fct-source": "src/LLVM-Core-Data.html#WordN",
        "fct-type": "newtype",
        "title": "WordN"
      },
      "index": {
        "description": "Variable sized unsigned integer The parameter should belong to PosI",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "WordN",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:-36--43-",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "(a :+-\u003e b) -\u003e a -\u003e b",
        "fct-source": "src/LLVM-Core-Type.html#%24%2B",
        "fct-type": "function",
        "title": "($+)"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "($+) $+",
        "normalized": "(a-\u003eb)-\u003ea-\u003eb",
        "package": "llvm-ht",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:-38-",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "a -\u003e as -\u003e a :& as",
        "fct-source": "src/LLVM-Core-Type.html#%26",
        "fct-type": "function",
        "title": "(&)"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "(&) &",
        "normalized": "a-\u003eb-\u003ea b",
        "package": "llvm-ht",
        "partial": "",
        "signature": "a-\u003eas-\u003ea as"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:AppendingLinkage",
      "description": {
        "fct-descr": "\u003cp\u003eSpecial purpose, only applies to global arrays\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "AppendingLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "AppendingLinkage"
      },
      "index": {
        "description": "Special purpose only applies to global arrays",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "AppendingLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Appending Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:Array",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Array [a]",
        "fct-source": "src/LLVM-Core-Data.html#Array",
        "fct-type": "function",
        "title": "Array"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "Array",
        "normalized": "Array[a]",
        "package": "llvm-ht",
        "partial": "Array",
        "signature": "Array[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:AvailableExternallyLinkage",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "AvailableExternallyLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "AvailableExternallyLinkage"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "AvailableExternallyLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Available Externally Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:ByValAttribute",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ByValAttribute",
        "fct-source": "src/LLVM-FFI-Core.html#Attribute",
        "fct-type": "function",
        "title": "ByValAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "ByValAttribute",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "By Val Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:CommonLinkage",
      "description": {
        "fct-descr": "\u003cp\u003eTentative definitions\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "CommonLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "CommonLinkage"
      },
      "index": {
        "description": "Tentative definitions",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "CommonLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Common Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:DLLExportLinkage",
      "description": {
        "fct-descr": "\u003cp\u003eFunction to be accessible from DLL\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "DLLExportLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "DLLExportLinkage"
      },
      "index": {
        "description": "Function to be accessible from DLL",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "DLLExportLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "DLLExport Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:DLLImportLinkage",
      "description": {
        "fct-descr": "\u003cp\u003eFunction to be imported from DLL\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "DLLImportLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "DLLImportLinkage"
      },
      "index": {
        "description": "Function to be imported from DLL",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "DLLImportLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "DLLImport Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:ExternalLinkage",
      "description": {
        "fct-descr": "\u003cp\u003eExternally visible function\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ExternalLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "ExternalLinkage"
      },
      "index": {
        "description": "Externally visible function",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "ExternalLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "External Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:ExternalWeakLinkage",
      "description": {
        "fct-descr": "\u003cp\u003eExternalWeak linkage description\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ExternalWeakLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "ExternalWeakLinkage"
      },
      "index": {
        "description": "ExternalWeak linkage description",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "ExternalWeakLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "External Weak Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FP128",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "FP128 Rational",
        "fct-source": "src/LLVM-Core-Data.html#FP128",
        "fct-type": "function",
        "title": "FP128"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "FP128",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "FP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPFalse",
      "description": {
        "fct-descr": "\u003cp\u003eAlways false (always folded)\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "FPFalse",
        "fct-source": "src/LLVM-Core-Instructions.html#FPPredicate",
        "fct-type": "function",
        "title": "FPFalse"
      },
      "index": {
        "description": "Always false always folded",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "FPFalse",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "FPFalse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPOEQ",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if ordered and equal\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "FPOEQ",
        "fct-source": "src/LLVM-Core-Instructions.html#FPPredicate",
        "fct-type": "function",
        "title": "FPOEQ"
      },
      "index": {
        "description": "True if ordered and equal",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "FPOEQ",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "FPOEQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPOGE",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if ordered and greater than or equal\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "FPOGE",
        "fct-source": "src/LLVM-Core-Instructions.html#FPPredicate",
        "fct-type": "function",
        "title": "FPOGE"
      },
      "index": {
        "description": "True if ordered and greater than or equal",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "FPOGE",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "FPOGE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPOGT",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if ordered and greater than\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "FPOGT",
        "fct-source": "src/LLVM-Core-Instructions.html#FPPredicate",
        "fct-type": "function",
        "title": "FPOGT"
      },
      "index": {
        "description": "True if ordered and greater than",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "FPOGT",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "FPOGT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPOLE",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if ordered and less than or equal\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "FPOLE",
        "fct-source": "src/LLVM-Core-Instructions.html#FPPredicate",
        "fct-type": "function",
        "title": "FPOLE"
      },
      "index": {
        "description": "True if ordered and less than or equal",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "FPOLE",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "FPOLE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPOLT",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if ordered and less than\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "FPOLT",
        "fct-source": "src/LLVM-Core-Instructions.html#FPPredicate",
        "fct-type": "function",
        "title": "FPOLT"
      },
      "index": {
        "description": "True if ordered and less than",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "FPOLT",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "FPOLT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPONE",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if ordered and operands are unequal\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "FPONE",
        "fct-source": "src/LLVM-Core-Instructions.html#FPPredicate",
        "fct-type": "function",
        "title": "FPONE"
      },
      "index": {
        "description": "True if ordered and operands are unequal",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "FPONE",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "FPONE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPORD",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if ordered (no nans)\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "FPORD",
        "fct-source": "src/LLVM-Core-Instructions.html#FPPredicate",
        "fct-type": "function",
        "title": "FPORD"
      },
      "index": {
        "description": "True if ordered no nans",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "FPORD",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "FPORD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPT",
      "description": {
        "fct-descr": "\u003cp\u003eAlways true (always folded)\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "FPT",
        "fct-source": "src/LLVM-Core-Instructions.html#FPPredicate",
        "fct-type": "function",
        "title": "FPT"
      },
      "index": {
        "description": "Always true always folded",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "FPT",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "FPT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPUEQ",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if unordered or equal\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "FPUEQ",
        "fct-source": "src/LLVM-Core-Instructions.html#FPPredicate",
        "fct-type": "function",
        "title": "FPUEQ"
      },
      "index": {
        "description": "True if unordered or equal",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "FPUEQ",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "FPUEQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPUGE",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if unordered, greater than, or equal\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "FPUGE",
        "fct-source": "src/LLVM-Core-Instructions.html#FPPredicate",
        "fct-type": "function",
        "title": "FPUGE"
      },
      "index": {
        "description": "True if unordered greater than or equal",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "FPUGE",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "FPUGE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPUGT",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if unordered or greater than\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "FPUGT",
        "fct-source": "src/LLVM-Core-Instructions.html#FPPredicate",
        "fct-type": "function",
        "title": "FPUGT"
      },
      "index": {
        "description": "True if unordered or greater than",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "FPUGT",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "FPUGT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPULE",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if unordered, less than, or equal\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "FPULE",
        "fct-source": "src/LLVM-Core-Instructions.html#FPPredicate",
        "fct-type": "function",
        "title": "FPULE"
      },
      "index": {
        "description": "True if unordered less than or equal",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "FPULE",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "FPULE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPULT",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if unordered or less than\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "FPULT",
        "fct-source": "src/LLVM-Core-Instructions.html#FPPredicate",
        "fct-type": "function",
        "title": "FPULT"
      },
      "index": {
        "description": "True if unordered or less than",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "FPULT",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "FPULT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPUNE",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if unordered or not equal\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "FPUNE",
        "fct-source": "src/LLVM-Core-Instructions.html#FPPredicate",
        "fct-type": "function",
        "title": "FPUNE"
      },
      "index": {
        "description": "True if unordered or not equal",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "FPUNE",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "FPUNE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPUNO",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if unordered: isnan(X) | isnan(Y)\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "FPUNO",
        "fct-source": "src/LLVM-Core-Instructions.html#FPPredicate",
        "fct-type": "function",
        "title": "FPUNO"
      },
      "index": {
        "description": "True if unordered isnan isnan",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "FPUNO",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "FPUNO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:GhostLinkage",
      "description": {
        "fct-descr": "\u003cp\u003eStand-in functions for streaming fns from BC files    \n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "GhostLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "GhostLinkage"
      },
      "index": {
        "description": "Stand-in functions for streaming fns from BC files",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "GhostLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Ghost Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:InRegAttribute",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "InRegAttribute",
        "fct-source": "src/LLVM-FFI-Core.html#Attribute",
        "fct-type": "function",
        "title": "InRegAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "InRegAttribute",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "In Reg Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:IntEQ",
      "description": {
        "fct-descr": "\u003cp\u003eequal\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "IntEQ",
        "fct-source": "src/LLVM-Core-Instructions.html#IntPredicate",
        "fct-type": "function",
        "title": "IntEQ"
      },
      "index": {
        "description": "equal",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "IntEQ",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Int EQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:IntN",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "IntN Integer",
        "fct-source": "src/LLVM-Core-Data.html#IntN",
        "fct-type": "function",
        "title": "IntN"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "IntN",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:IntNE",
      "description": {
        "fct-descr": "\u003cp\u003enot equal\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "IntNE",
        "fct-source": "src/LLVM-Core-Instructions.html#IntPredicate",
        "fct-type": "function",
        "title": "IntNE"
      },
      "index": {
        "description": "not equal",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "IntNE",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Int NE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:IntSGE",
      "description": {
        "fct-descr": "\u003cp\u003esigned greater or equal\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "IntSGE",
        "fct-source": "src/LLVM-Core-Instructions.html#IntPredicate",
        "fct-type": "function",
        "title": "IntSGE"
      },
      "index": {
        "description": "signed greater or equal",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "IntSGE",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Int SGE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:IntSGT",
      "description": {
        "fct-descr": "\u003cp\u003esigned greater than\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "IntSGT",
        "fct-source": "src/LLVM-Core-Instructions.html#IntPredicate",
        "fct-type": "function",
        "title": "IntSGT"
      },
      "index": {
        "description": "signed greater than",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "IntSGT",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Int SGT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:IntSLE",
      "description": {
        "fct-descr": "\u003cp\u003esigned less or equal\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "IntSLE",
        "fct-source": "src/LLVM-Core-Instructions.html#IntPredicate",
        "fct-type": "function",
        "title": "IntSLE"
      },
      "index": {
        "description": "signed less or equal",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "IntSLE",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Int SLE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:IntSLT",
      "description": {
        "fct-descr": "\u003cp\u003esigned less than\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "IntSLT",
        "fct-source": "src/LLVM-Core-Instructions.html#IntPredicate",
        "fct-type": "function",
        "title": "IntSLT"
      },
      "index": {
        "description": "signed less than",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "IntSLT",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Int SLT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:IntUGE",
      "description": {
        "fct-descr": "\u003cp\u003eunsigned greater or equal\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "IntUGE",
        "fct-source": "src/LLVM-Core-Instructions.html#IntPredicate",
        "fct-type": "function",
        "title": "IntUGE"
      },
      "index": {
        "description": "unsigned greater or equal",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "IntUGE",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Int UGE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:IntUGT",
      "description": {
        "fct-descr": "\u003cp\u003eunsigned greater than\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "IntUGT",
        "fct-source": "src/LLVM-Core-Instructions.html#IntPredicate",
        "fct-type": "function",
        "title": "IntUGT"
      },
      "index": {
        "description": "unsigned greater than",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "IntUGT",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Int UGT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:IntULE",
      "description": {
        "fct-descr": "\u003cp\u003eunsigned less or equal\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "IntULE",
        "fct-source": "src/LLVM-Core-Instructions.html#IntPredicate",
        "fct-type": "function",
        "title": "IntULE"
      },
      "index": {
        "description": "unsigned less or equal",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "IntULE",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Int ULE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:IntULT",
      "description": {
        "fct-descr": "\u003cp\u003eunsigned less than\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "IntULT",
        "fct-source": "src/LLVM-Core-Instructions.html#IntPredicate",
        "fct-type": "function",
        "title": "IntULT"
      },
      "index": {
        "description": "unsigned less than",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "IntULT",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Int ULT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:InternalLinkage",
      "description": {
        "fct-descr": "\u003cp\u003eRename collisions when linking (static functions)\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "InternalLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "InternalLinkage"
      },
      "index": {
        "description": "Rename collisions when linking static functions",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "InternalLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Internal Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:LinkOnceAnyLinkage",
      "description": {
        "fct-descr": "\u003cp\u003eKeep one copy of function when linking (inline)\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "LinkOnceAnyLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "LinkOnceAnyLinkage"
      },
      "index": {
        "description": "Keep one copy of function when linking inline",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "LinkOnceAnyLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Link Once Any Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:LinkOnceODRLinkage",
      "description": {
        "fct-descr": "\u003cp\u003eSame, but only replaced by something equivalent.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "LinkOnceODRLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "LinkOnceODRLinkage"
      },
      "index": {
        "description": "Same but only replaced by something equivalent",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "LinkOnceODRLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Link Once ODRLinkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:LinkerPrivateLinkage",
      "description": {
        "fct-descr": "\u003cp\u003eLike Private, but linker removes.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "LinkerPrivateLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "LinkerPrivateLinkage"
      },
      "index": {
        "description": "Like Private but linker removes",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "LinkerPrivateLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Linker Private Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:NestAttribute",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "NestAttribute",
        "fct-source": "src/LLVM-FFI-Core.html#Attribute",
        "fct-type": "function",
        "title": "NestAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "NestAttribute",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Nest Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:NoAliasAttribute",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "NoAliasAttribute",
        "fct-source": "src/LLVM-FFI-Core.html#Attribute",
        "fct-type": "function",
        "title": "NoAliasAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "NoAliasAttribute",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "No Alias Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:NoReturnAttribute",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "NoReturnAttribute",
        "fct-source": "src/LLVM-FFI-Core.html#Attribute",
        "fct-type": "function",
        "title": "NoReturnAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "NoReturnAttribute",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "No Return Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:NoUnwindAttribute",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "NoUnwindAttribute",
        "fct-source": "src/LLVM-FFI-Core.html#Attribute",
        "fct-type": "function",
        "title": "NoUnwindAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "NoUnwindAttribute",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "No Unwind Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:PackedStruct",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "PackedStruct a",
        "fct-source": "src/LLVM-Core-Data.html#PackedStruct",
        "fct-type": "function",
        "title": "PackedStruct"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "PackedStruct",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Packed Struct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:PrivateLinkage",
      "description": {
        "fct-descr": "\u003cp\u003eLike Internal, but omit from symbol table\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "PrivateLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "PrivateLinkage"
      },
      "index": {
        "description": "Like Internal but omit from symbol table",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "PrivateLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Private Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:ReadNoneAttribute",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ReadNoneAttribute",
        "fct-source": "src/LLVM-FFI-Core.html#Attribute",
        "fct-type": "function",
        "title": "ReadNoneAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "ReadNoneAttribute",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Read None Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:ReadOnlyAttribute",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ReadOnlyAttribute",
        "fct-source": "src/LLVM-FFI-Core.html#Attribute",
        "fct-type": "function",
        "title": "ReadOnlyAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "ReadOnlyAttribute",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Read Only Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:SExtAttribute",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "SExtAttribute",
        "fct-source": "src/LLVM-FFI-Core.html#Attribute",
        "fct-type": "function",
        "title": "SExtAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "SExtAttribute",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "SExt Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:Struct",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Struct a",
        "fct-source": "src/LLVM-Core-Data.html#Struct",
        "fct-type": "function",
        "title": "Struct"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "Struct",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Struct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:StructRetAttribute",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "StructRetAttribute",
        "fct-source": "src/LLVM-FFI-Core.html#Attribute",
        "fct-type": "function",
        "title": "StructRetAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "StructRetAttribute",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Struct Ret Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:TDArray",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TDArray Integer TypeDesc",
        "fct-source": "src/LLVM-Core-Type.html#TypeDesc",
        "fct-type": "function",
        "title": "TDArray"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "TDArray",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "TDArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:TDDouble",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TDDouble",
        "fct-source": "src/LLVM-Core-Type.html#TypeDesc",
        "fct-type": "function",
        "title": "TDDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "TDDouble",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "TDDouble",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:TDFP128",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TDFP128",
        "fct-source": "src/LLVM-Core-Type.html#TypeDesc",
        "fct-type": "function",
        "title": "TDFP128"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "TDFP128",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "TDFP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:TDFloat",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TDFloat",
        "fct-source": "src/LLVM-Core-Type.html#TypeDesc",
        "fct-type": "function",
        "title": "TDFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "TDFloat",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "TDFloat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:TDFunction",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TDFunction Bool [TypeDesc] TypeDesc",
        "fct-source": "src/LLVM-Core-Type.html#TypeDesc",
        "fct-type": "function",
        "title": "TDFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "TDFunction",
        "normalized": "TDFunction Bool[TypeDesc]TypeDesc",
        "package": "llvm-ht",
        "partial": "TDFunction",
        "signature": "TDFunction Bool[TypeDesc]TypeDesc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:TDInt",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TDInt Bool Integer",
        "fct-source": "src/LLVM-Core-Type.html#TypeDesc",
        "fct-type": "function",
        "title": "TDInt"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "TDInt",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "TDInt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:TDLabel",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TDLabel",
        "fct-source": "src/LLVM-Core-Type.html#TypeDesc",
        "fct-type": "function",
        "title": "TDLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "TDLabel",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "TDLabel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:TDPtr",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TDPtr TypeDesc",
        "fct-source": "src/LLVM-Core-Type.html#TypeDesc",
        "fct-type": "function",
        "title": "TDPtr"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "TDPtr",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "TDPtr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:TDStruct",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TDStruct [TypeDesc] Bool",
        "fct-source": "src/LLVM-Core-Type.html#TypeDesc",
        "fct-type": "function",
        "title": "TDStruct"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "TDStruct",
        "normalized": "TDStruct[TypeDesc]Bool",
        "package": "llvm-ht",
        "partial": "TDStruct",
        "signature": "TDStruct[TypeDesc]Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:TDVector",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TDVector Integer TypeDesc",
        "fct-source": "src/LLVM-Core-Type.html#TypeDesc",
        "fct-type": "function",
        "title": "TDVector"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "TDVector",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "TDVector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:TDVoid",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TDVoid",
        "fct-source": "src/LLVM-Core-Type.html#TypeDesc",
        "fct-type": "function",
        "title": "TDVoid"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "TDVoid",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "TDVoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:Vector",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Vector [a]",
        "fct-source": "src/LLVM-Core-Data.html#Vector",
        "fct-type": "function",
        "title": "Vector"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "Vector",
        "normalized": "Vector[a]",
        "package": "llvm-ht",
        "partial": "Vector",
        "signature": "Vector[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:WeakAnyLinkage",
      "description": {
        "fct-descr": "\u003cp\u003eKeep one copy of named function when linking (weak)\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "WeakAnyLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "WeakAnyLinkage"
      },
      "index": {
        "description": "Keep one copy of named function when linking weak",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "WeakAnyLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Weak Any Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:WeakODRLinkage",
      "description": {
        "fct-descr": "\u003cp\u003eSame, but only replaced by something equivalent.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "WeakODRLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "WeakODRLinkage"
      },
      "index": {
        "description": "Same but only replaced by something equivalent",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "WeakODRLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Weak ODRLinkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:WordN",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "WordN Integer",
        "fct-source": "src/LLVM-Core-Data.html#WordN",
        "fct-type": "function",
        "title": "WordN"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "WordN",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:ZExtAttribute",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ZExtAttribute",
        "fct-source": "src/LLVM-FFI-Core.html#Attribute",
        "fct-type": "function",
        "title": "ZExtAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "ZExtAttribute",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "ZExt Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:add",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
        "fct-source": "src/LLVM-Core-Instructions.html#add",
        "fct-type": "function",
        "title": "add"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "add",
        "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:addAttributes",
      "description": {
        "fct-descr": "\u003cp\u003eAdd attributes to a value.  Beware, what attributes are allowed depends on\n what kind of value it is.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value a -\u003e Int -\u003e [Attribute] -\u003e CodeGenFunction r ()",
        "fct-source": "src/LLVM-Core-CodeGen.html#addAttributes",
        "fct-type": "function",
        "title": "addAttributes"
      },
      "index": {
        "description": "Add attributes to value Beware what attributes are allowed depends on what kind of value it is",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "addAttributes",
        "normalized": "Value a-\u003eInt-\u003e[Attribute]-\u003eCodeGenFunction b()",
        "package": "llvm-ht",
        "partial": "Attributes",
        "signature": "Value a-\u003eInt-\u003e[Attribute]-\u003eCodeGenFunction r()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:addPhiInputs",
      "description": {
        "fct-descr": "\u003cp\u003eAdd additional inputs to an existing phi node.\n The reason for this instruction is that sometimes the structure of the code\n makes it impossible to have all variables in scope at the point where you need the phi node.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value a-\u003e [(Value a, BasicBlock)]-\u003e CodeGenFunction r ()",
        "fct-type": "function",
        "title": "addPhiInputs"
      },
      "index": {
        "description": "Add additional inputs to an existing phi node The reason for this instruction is that sometimes the structure of the code makes it impossible to have all variables in scope at the point where you need the phi node",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "addPhiInputs",
        "normalized": "Value a-\u003e[(Value a,BasicBlock)]-\u003eCodeGenFunction b()",
        "package": "llvm-ht",
        "partial": "Phi Inputs",
        "signature": "Value a-\u003e[(Value a,BasicBlock)]-\u003eCodeGenFunction r()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:allOnes",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ConstValue a",
        "fct-source": "src/LLVM-Core-CodeGen.html#allOnes",
        "fct-type": "function",
        "title": "allOnes"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "allOnes",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Ones",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:alloca",
      "description": {
        "fct-descr": "\u003cp\u003eAllocate stack memory.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "CodeGenFunction r (Value (Ptr a))",
        "fct-source": "src/LLVM-Core-Instructions.html#alloca",
        "fct-type": "function",
        "title": "alloca"
      },
      "index": {
        "description": "Allocate stack memory",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "alloca",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:and",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
        "fct-source": "src/LLVM-Core-Instructions.html#and",
        "fct-type": "function",
        "title": "and"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "and",
        "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:arrayAlloca",
      "description": {
        "fct-descr": "\u003cp\u003eAllocate stack (array) memory.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "s -\u003e CodeGenFunction r (Value (Ptr a))",
        "fct-source": "src/LLVM-Core-Instructions.html#arrayAlloca",
        "fct-type": "function",
        "title": "arrayAlloca"
      },
      "index": {
        "description": "Allocate stack array memory",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "arrayAlloca",
        "normalized": "a-\u003eCodeGenFunction b(Value(Ptr c))",
        "package": "llvm-ht",
        "partial": "Alloca",
        "signature": "s-\u003eCodeGenFunction r(Value(Ptr a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:arrayMalloc",
      "description": {
        "fct-descr": "\u003cp\u003eAllocate heap (array) memory.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "s -\u003e CodeGenFunction r (Value (Ptr a))",
        "fct-source": "src/LLVM-Core-Instructions.html#arrayMalloc",
        "fct-type": "function",
        "title": "arrayMalloc"
      },
      "index": {
        "description": "Allocate heap array memory",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "arrayMalloc",
        "normalized": "a-\u003eCodeGenFunction b(Value(Ptr c))",
        "package": "llvm-ht",
        "partial": "Malloc",
        "signature": "s-\u003eCodeGenFunction r(Value(Ptr a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:ashr",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
        "fct-source": "src/LLVM-Core-Instructions.html#ashr",
        "fct-type": "function",
        "title": "ashr"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "ashr",
        "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:bitcast",
      "description": {
        "fct-descr": "\u003cp\u003eConvert between to values of the same size by just copying the bit pattern.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value a -\u003e CodeGenFunction r (Value b)",
        "fct-source": "src/LLVM-Core-Instructions.html#bitcast",
        "fct-type": "function",
        "title": "bitcast"
      },
      "index": {
        "description": "Convert between to values of the same size by just copying the bit pattern",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "bitcast",
        "normalized": "Value a-\u003eCodeGenFunction b(Value c)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "Value a-\u003eCodeGenFunction r(Value b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:bitcastUnify",
      "description": {
        "fct-descr": "\u003cp\u003eSame as bitcast but instead of the '(:==:)' type class it uses type unification.\n This way, properties like reflexivity, symmetry and transitivity\n are obvious to the Haskell compiler.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value a -\u003e CodeGenFunction r (Value b)",
        "fct-source": "src/LLVM-Core-Instructions.html#bitcastUnify",
        "fct-type": "function",
        "title": "bitcastUnify"
      },
      "index": {
        "description": "Same as bitcast but instead of the type class it uses type unification This way properties like reflexivity symmetry and transitivity are obvious to the Haskell compiler",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "bitcastUnify",
        "normalized": "Value a-\u003eCodeGenFunction b(Value c)",
        "package": "llvm-ht",
        "partial": "Unify",
        "signature": "Value a-\u003eCodeGenFunction r(Value b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:br",
      "description": {
        "fct-descr": "\u003cp\u003eUnconditionally branch to the given basic block.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BasicBlock-\u003e CodeGenFunction r Terminate",
        "fct-type": "function",
        "title": "br"
      },
      "index": {
        "description": "Unconditionally branch to the given basic block",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "br",
        "normalized": "BasicBlock-\u003eCodeGenFunction a Terminate",
        "package": "llvm-ht",
        "partial": "",
        "signature": "BasicBlock-\u003eCodeGenFunction r Terminate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:buildTuple",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "FunctionRef -\u003e State Int a",
        "fct-source": "src/LLVM-Core-CodeGen.html#buildTuple",
        "fct-type": "method",
        "title": "buildTuple"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "buildTuple",
        "normalized": "FunctionRef-\u003eState Int a",
        "package": "llvm-ht",
        "partial": "Tuple",
        "signature": "FunctionRef-\u003eState Int a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:call",
      "description": {
        "fct-descr": "\u003cp\u003eCall a function with the given arguments.  The \u003ccode\u003e\u003ca\u003ecall\u003c/a\u003e\u003c/code\u003e instruction is variadic, i.e., the number of arguments\n it takes depends on the type of \u003cem\u003ef\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Function f -\u003e g",
        "fct-source": "src/LLVM-Core-Instructions.html#call",
        "fct-type": "function",
        "title": "call"
      },
      "index": {
        "description": "Call function with the given arguments The call instruction is variadic i.e the number of arguments it takes depends on the type of",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "call",
        "normalized": "Function a-\u003eb",
        "package": "llvm-ht",
        "partial": "",
        "signature": "Function f-\u003eg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:castModuleValue",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ModuleValue -\u003e Maybe (Value a)",
        "fct-source": "src/LLVM-Core-CodeGen.html#castModuleValue",
        "fct-type": "function",
        "title": "castModuleValue"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "castModuleValue",
        "normalized": "ModuleValue-\u003eMaybe(Value a)",
        "package": "llvm-ht",
        "partial": "Module Value",
        "signature": "ModuleValue-\u003eMaybe(Value a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:castVarArgs",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a varargs function to a regular function.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Function a -\u003e Function b",
        "fct-source": "src/LLVM-Core.html#castVarArgs",
        "fct-type": "function",
        "title": "castVarArgs"
      },
      "index": {
        "description": "Convert varargs function to regular function",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "castVarArgs",
        "normalized": "Function a-\u003eFunction b",
        "package": "llvm-ht",
        "partial": "Var Args",
        "signature": "Function a-\u003eFunction b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:condBr",
      "description": {
        "fct-descr": "\u003cp\u003eBranch to the first basic block if the boolean is true, otherwise to the second basic block.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value Bool-\u003e BasicBlock-\u003e BasicBlock-\u003e CodeGenFunction r Terminate",
        "fct-type": "function",
        "title": "condBr"
      },
      "index": {
        "description": "Branch to the first basic block if the boolean is true otherwise to the second basic block",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "condBr",
        "normalized": "Value Bool-\u003eBasicBlock-\u003eBasicBlock-\u003eCodeGenFunction a Terminate",
        "package": "llvm-ht",
        "partial": "Br",
        "signature": "Value Bool-\u003eBasicBlock-\u003eBasicBlock-\u003eCodeGenFunction r Terminate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:constArray",
      "description": {
        "fct-descr": "\u003cp\u003eMake a constant array.  Replicates or truncates the list to get length \u003cem\u003en\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "[ConstValue a] -\u003e ConstValue (Array n a)",
        "fct-source": "src/LLVM-Core-CodeGen.html#constArray",
        "fct-type": "function",
        "title": "constArray"
      },
      "index": {
        "description": "Make constant array Replicates or truncates the list to get length",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "constArray",
        "normalized": "[ConstValue a]-\u003eConstValue(Array b a)",
        "package": "llvm-ht",
        "partial": "Array",
        "signature": "[ConstValue a]-\u003eConstValue(Array n a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:constPackedStruct",
      "description": {
        "fct-descr": "\u003cp\u003eMake a constant packed struct.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "c -\u003e ConstValue (PackedStruct a)",
        "fct-source": "src/LLVM-Core-CodeGen.html#constPackedStruct",
        "fct-type": "function",
        "title": "constPackedStruct"
      },
      "index": {
        "description": "Make constant packed struct",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "constPackedStruct",
        "normalized": "a-\u003eConstValue(PackedStruct b)",
        "package": "llvm-ht",
        "partial": "Packed Struct",
        "signature": "c-\u003eConstValue(PackedStruct a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:constStruct",
      "description": {
        "fct-descr": "\u003cp\u003eMake a constant struct.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "c -\u003e ConstValue (Struct a)",
        "fct-source": "src/LLVM-Core-CodeGen.html#constStruct",
        "fct-type": "function",
        "title": "constStruct"
      },
      "index": {
        "description": "Make constant struct",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "constStruct",
        "normalized": "a-\u003eConstValue(Struct b)",
        "package": "llvm-ht",
        "partial": "Struct",
        "signature": "c-\u003eConstValue(Struct a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:constVector",
      "description": {
        "fct-descr": "\u003cp\u003eMake a constant vector.  Replicates or truncates the list to get length \u003cem\u003en\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "[ConstValue a] -\u003e ConstValue (Vector n a)",
        "fct-source": "src/LLVM-Core-CodeGen.html#constVector",
        "fct-type": "function",
        "title": "constVector"
      },
      "index": {
        "description": "Make constant vector Replicates or truncates the list to get length",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "constVector",
        "normalized": "[ConstValue a]-\u003eConstValue(Vector b a)",
        "package": "llvm-ht",
        "partial": "Vector",
        "signature": "[ConstValue a]-\u003eConstValue(Vector n a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:createBasicBlock",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "CodeGenFunction r BasicBlock",
        "fct-source": "src/LLVM-Core-CodeGen.html#createBasicBlock",
        "fct-type": "function",
        "title": "createBasicBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "createBasicBlock",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Basic Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:createFunction",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new function with the given body.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Linkage-\u003e g-\u003e CodeGenModule (Function f)",
        "fct-type": "function",
        "title": "createFunction"
      },
      "index": {
        "description": "Create new function with the given body",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "createFunction",
        "normalized": "Linkage-\u003ea-\u003eCodeGenModule(Function b)",
        "package": "llvm-ht",
        "partial": "Function",
        "signature": "Linkage-\u003eg-\u003eCodeGenModule(Function f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:createFunctionPassManager",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a pass manager for a module.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ModuleProvider -\u003e IO PassManager",
        "fct-source": "src/LLVM-Core-Util.html#createFunctionPassManager",
        "fct-type": "function",
        "title": "createFunctionPassManager"
      },
      "index": {
        "description": "Create pass manager for module",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "createFunctionPassManager",
        "normalized": "ModuleProvider-\u003eIO PassManager",
        "package": "llvm-ht",
        "partial": "Function Pass Manager",
        "signature": "ModuleProvider-\u003eIO PassManager"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:createGlobal",
      "description": {
        "fct-descr": "\u003cp\u003eCreate and define a global variable.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Bool -\u003e Linkage -\u003e ConstValue a -\u003e TGlobal a",
        "fct-source": "src/LLVM-Core-CodeGen.html#createGlobal",
        "fct-type": "function",
        "title": "createGlobal"
      },
      "index": {
        "description": "Create and define global variable",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "createGlobal",
        "normalized": "Bool-\u003eLinkage-\u003eConstValue a-\u003eTGlobal a",
        "package": "llvm-ht",
        "partial": "Global",
        "signature": "Bool-\u003eLinkage-\u003eConstValue a-\u003eTGlobal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:createModule",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new module with the given body.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "CodeGenModule a-\u003e IO a",
        "fct-type": "function",
        "title": "createModule"
      },
      "index": {
        "description": "Create new module with the given body",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "createModule",
        "normalized": "CodeGenModule a-\u003eIO a",
        "package": "llvm-ht",
        "partial": "Module",
        "signature": "CodeGenModule a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:createModuleProviderForExistingModule",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a module into a module provider.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Module -\u003e IO ModuleProvider",
        "fct-source": "src/LLVM-Core-Util.html#createModuleProviderForExistingModule",
        "fct-type": "function",
        "title": "createModuleProviderForExistingModule"
      },
      "index": {
        "description": "Turn module into module provider",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "createModuleProviderForExistingModule",
        "normalized": "Module-\u003eIO ModuleProvider",
        "package": "llvm-ht",
        "partial": "Module Provider For Existing Module",
        "signature": "Module-\u003eIO ModuleProvider"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:createNamedFunction",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new function with the given body.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Linkage-\u003e String-\u003e g-\u003e CodeGenModule (Function f)",
        "fct-type": "function",
        "title": "createNamedFunction"
      },
      "index": {
        "description": "Create new function with the given body",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "createNamedFunction",
        "normalized": "Linkage-\u003eString-\u003ea-\u003eCodeGenModule(Function b)",
        "package": "llvm-ht",
        "partial": "Named Function",
        "signature": "Linkage-\u003eString-\u003eg-\u003eCodeGenModule(Function f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:createNamedGlobal",
      "description": {
        "fct-descr": "\u003cp\u003eCreate and define a named global variable.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Bool -\u003e Linkage -\u003e String -\u003e ConstValue a -\u003e TGlobal a",
        "fct-source": "src/LLVM-Core-CodeGen.html#createNamedGlobal",
        "fct-type": "function",
        "title": "createNamedGlobal"
      },
      "index": {
        "description": "Create and define named global variable",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "createNamedGlobal",
        "normalized": "Bool-\u003eLinkage-\u003eString-\u003eConstValue a-\u003eTGlobal a",
        "package": "llvm-ht",
        "partial": "Named Global",
        "signature": "Bool-\u003eLinkage-\u003eString-\u003eConstValue a-\u003eTGlobal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:createPassManager",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a pass manager.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "IO PassManager",
        "fct-source": "src/LLVM-Core-Util.html#createPassManager",
        "fct-type": "function",
        "title": "createPassManager"
      },
      "index": {
        "description": "Create pass manager",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "createPassManager",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Pass Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:createString",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "String -\u003e TGlobal (Array n Word8)",
        "fct-source": "src/LLVM-Core-CodeGen.html#createString",
        "fct-type": "function",
        "title": "createString"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "createString",
        "normalized": "String-\u003eTGlobal(Array a Word)",
        "package": "llvm-ht",
        "partial": "String",
        "signature": "String-\u003eTGlobal(Array n Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:createStringNul",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "String -\u003e TGlobal (Array n Word8)",
        "fct-source": "src/LLVM-Core-CodeGen.html#createStringNul",
        "fct-type": "function",
        "title": "createStringNul"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "createStringNul",
        "normalized": "String-\u003eTGlobal(Array a Word)",
        "package": "llvm-ht",
        "partial": "String Nul",
        "signature": "String-\u003eTGlobal(Array n Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:defineBasicBlock",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BasicBlock -\u003e CodeGenFunction r ()",
        "fct-source": "src/LLVM-Core-CodeGen.html#defineBasicBlock",
        "fct-type": "function",
        "title": "defineBasicBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "defineBasicBlock",
        "normalized": "BasicBlock-\u003eCodeGenFunction a()",
        "package": "llvm-ht",
        "partial": "Basic Block",
        "signature": "BasicBlock-\u003eCodeGenFunction r()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:defineFunction",
      "description": {
        "fct-descr": "\u003cp\u003eDefine a function body.  The basic block returned by the function is the function entry point.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Function f-\u003e g-\u003e CodeGenModule ()",
        "fct-type": "function",
        "title": "defineFunction"
      },
      "index": {
        "description": "Define function body The basic block returned by the function is the function entry point",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "defineFunction",
        "normalized": "Function a-\u003eb-\u003eCodeGenModule()",
        "package": "llvm-ht",
        "partial": "Function",
        "signature": "Function f-\u003eg-\u003eCodeGenModule()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:defineGlobal",
      "description": {
        "fct-descr": "\u003cp\u003eGive a global variable a (constant) value.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Global a -\u003e ConstValue a -\u003e CodeGenModule ()",
        "fct-source": "src/LLVM-Core-CodeGen.html#defineGlobal",
        "fct-type": "function",
        "title": "defineGlobal"
      },
      "index": {
        "description": "Give global variable constant value",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "defineGlobal",
        "normalized": "Global a-\u003eConstValue a-\u003eCodeGenModule()",
        "package": "llvm-ht",
        "partial": "Global",
        "signature": "Global a-\u003eConstValue a-\u003eCodeGenModule()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:defineModule",
      "description": {
        "fct-descr": "\u003cp\u003eGive the body for a module.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Module-\u003e CodeGenModule a-\u003e IO a",
        "fct-type": "function",
        "title": "defineModule"
      },
      "index": {
        "description": "Give the body for module",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "defineModule",
        "normalized": "Module-\u003eCodeGenModule a-\u003eIO a",
        "package": "llvm-ht",
        "partial": "Module",
        "signature": "Module-\u003eCodeGenModule a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:destroyModule",
      "description": {
        "fct-descr": "\u003cp\u003eFree all storage related to a module.  *Note*, this is a dangerous call, since referring\n to the module after this call is an error.  The reason for the explicit call to free\n the module instead of an automatic lifetime management is that modules have a\n somewhat complicated ownership.  Handing a module to a module provider changes\n the ownership of the module, and the module provider will free the module when necessary.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Module -\u003e IO ()",
        "fct-source": "src/LLVM-Core-Util.html#destroyModule",
        "fct-type": "function",
        "title": "destroyModule"
      },
      "index": {
        "description": "Free all storage related to module Note this is dangerous call since referring to the module after this call is an error The reason for the explicit call to free the module instead of an automatic lifetime management is that modules have somewhat complicated ownership Handing module to module provider changes the ownership of the module and the module provider will free the module when necessary",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "destroyModule",
        "normalized": "Module-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Module",
        "signature": "Module-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:dumpType",
      "description": {
        "fct-descr": "\u003cp\u003ePrint a type.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value a -\u003e IO ()",
        "fct-source": "src/LLVM-Core.html#dumpType",
        "fct-type": "function",
        "title": "dumpType"
      },
      "index": {
        "description": "Print type",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "dumpType",
        "normalized": "Value a-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Type",
        "signature": "Value a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:dumpValue",
      "description": {
        "fct-descr": "\u003cp\u003ePrint a value.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value a -\u003e IO ()",
        "fct-source": "src/LLVM-Core.html#dumpValue",
        "fct-type": "function",
        "title": "dumpValue"
      },
      "index": {
        "description": "Print value",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "dumpValue",
        "normalized": "Value a-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Value",
        "signature": "Value a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:externFunction",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a reference to an external function while code generating for a function.\n If LLVM cannot resolve its name, then you may try \u003ccode\u003e\u003ca\u003estaticFunction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "String -\u003e CodeGenFunction r (Function a)",
        "fct-source": "src/LLVM-Core-CodeGen.html#externFunction",
        "fct-type": "function",
        "title": "externFunction"
      },
      "index": {
        "description": "Create reference to an external function while code generating for function If LLVM cannot resolve its name then you may try staticFunction",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "externFunction",
        "normalized": "String-\u003eCodeGenFunction a(Function b)",
        "package": "llvm-ht",
        "partial": "Function",
        "signature": "String-\u003eCodeGenFunction r(Function a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:extractelement",
      "description": {
        "fct-descr": "\u003cp\u003eGet a value from a vector.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value (Vector n a)-\u003e Value Word32-\u003e CodeGenFunction r (Value a)",
        "fct-type": "function",
        "title": "extractelement"
      },
      "index": {
        "description": "Get value from vector",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "extractelement",
        "normalized": "Value(Vector a b)-\u003eValue Word-\u003eCodeGenFunction c(Value b)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "Value(Vector n a)-\u003eValue Word-\u003eCodeGenFunction r(Value a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:extractvalue",
      "description": {
        "fct-descr": "\u003cp\u003eGet a value from an aggregate.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value agg-\u003e i-\u003e CodeGenFunction r (Value a)",
        "fct-type": "function",
        "title": "extractvalue"
      },
      "index": {
        "description": "Get value from an aggregate",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "extractvalue",
        "normalized": "Value a-\u003eb-\u003eCodeGenFunction c(Value d)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "Value agg-\u003ei-\u003eCodeGenFunction r(Value a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:fadd",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
        "fct-source": "src/LLVM-Core-Instructions.html#fadd",
        "fct-type": "function",
        "title": "fadd"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "fadd",
        "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:fcmp",
      "description": {
        "fct-descr": "\u003cp\u003eCompare floating point values.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "FPPredicate -\u003e a -\u003e b -\u003e CodeGenFunction r (Value d)",
        "fct-source": "src/LLVM-Core-Instructions.html#fcmp",
        "fct-type": "function",
        "title": "fcmp"
      },
      "index": {
        "description": "Compare floating point values",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "fcmp",
        "normalized": "FPPredicate-\u003ea-\u003eb-\u003eCodeGenFunction c(Value d)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "FPPredicate-\u003ea-\u003eb-\u003eCodeGenFunction r(Value d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:fdiv",
      "description": {
        "fct-descr": "\u003cp\u003eFloating point division.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
        "fct-source": "src/LLVM-Core-Instructions.html#fdiv",
        "fct-type": "function",
        "title": "fdiv"
      },
      "index": {
        "description": "Floating point division",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "fdiv",
        "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:fmul",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
        "fct-source": "src/LLVM-Core-Instructions.html#fmul",
        "fct-type": "function",
        "title": "fmul"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "fmul",
        "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:fpext",
      "description": {
        "fct-descr": "\u003cp\u003eExtend a floating point value.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value a -\u003e CodeGenFunction r (Value b)",
        "fct-source": "src/LLVM-Core-Instructions.html#fpext",
        "fct-type": "function",
        "title": "fpext"
      },
      "index": {
        "description": "Extend floating point value",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "fpext",
        "normalized": "Value a-\u003eCodeGenFunction b(Value c)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "Value a-\u003eCodeGenFunction r(Value b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:fptosi",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a floating point value to a signed integer.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value a -\u003e CodeGenFunction r (Value b)",
        "fct-source": "src/LLVM-Core-Instructions.html#fptosi",
        "fct-type": "function",
        "title": "fptosi"
      },
      "index": {
        "description": "Convert floating point value to signed integer",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "fptosi",
        "normalized": "Value a-\u003eCodeGenFunction b(Value c)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "Value a-\u003eCodeGenFunction r(Value b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:fptoui",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a floating point value to an unsigned integer.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value a -\u003e CodeGenFunction r (Value b)",
        "fct-source": "src/LLVM-Core-Instructions.html#fptoui",
        "fct-type": "function",
        "title": "fptoui"
      },
      "index": {
        "description": "Convert floating point value to an unsigned integer",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "fptoui",
        "normalized": "Value a-\u003eCodeGenFunction b(Value c)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "Value a-\u003eCodeGenFunction r(Value b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:fptrunc",
      "description": {
        "fct-descr": "\u003cp\u003eTruncate a floating point value.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value a -\u003e CodeGenFunction r (Value b)",
        "fct-source": "src/LLVM-Core-Instructions.html#fptrunc",
        "fct-type": "function",
        "title": "fptrunc"
      },
      "index": {
        "description": "Truncate floating point value",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "fptrunc",
        "normalized": "Value a-\u003eCodeGenFunction b(Value c)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "Value a-\u003eCodeGenFunction r(Value b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:free",
      "description": {
        "fct-descr": "\u003cp\u003eFree heap memory.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value (Ptr a) -\u003e CodeGenFunction r (Value ())",
        "fct-source": "src/LLVM-Core-Instructions.html#free",
        "fct-type": "function",
        "title": "free"
      },
      "index": {
        "description": "Free heap memory",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "free",
        "normalized": "Value(Ptr a)-\u003eCodeGenFunction b(Value())",
        "package": "llvm-ht",
        "partial": "",
        "signature": "Value(Ptr a)-\u003eCodeGenFunction r(Value())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:frem",
      "description": {
        "fct-descr": "\u003cp\u003eFloating point remainder.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
        "fct-source": "src/LLVM-Core-Instructions.html#frem",
        "fct-type": "function",
        "title": "frem"
      },
      "index": {
        "description": "Floating point remainder",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "frem",
        "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:fromLabel",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value Label -\u003e BasicBlock",
        "fct-source": "src/LLVM-Core-CodeGen.html#fromLabel",
        "fct-type": "function",
        "title": "fromLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "fromLabel",
        "normalized": "Value Label-\u003eBasicBlock",
        "package": "llvm-ht",
        "partial": "Label",
        "signature": "Value Label-\u003eBasicBlock"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:fromVector",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Vector n a -\u003e va",
        "fct-source": "src/LLVM-Core-Vector.html#fromVector",
        "fct-type": "function",
        "title": "fromVector"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "fromVector",
        "normalized": "Vector a b-\u003ec",
        "package": "llvm-ht",
        "partial": "Vector",
        "signature": "Vector n a-\u003eva"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:fsub",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
        "fct-source": "src/LLVM-Core-Instructions.html#fsub",
        "fct-type": "function",
        "title": "fsub"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "fsub",
        "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:getCurrentBasicBlock",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "CodeGenFunction r BasicBlock",
        "fct-source": "src/LLVM-Core-CodeGen.html#getCurrentBasicBlock",
        "fct-type": "function",
        "title": "getCurrentBasicBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "getCurrentBasicBlock",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Current Basic Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:getElementPtr",
      "description": {
        "fct-descr": "\u003cp\u003eAddress arithmetic.  See LLVM description.\n The index is a nested tuple of the form \u003ccode\u003e(i1,(i2,( ... ())))\u003c/code\u003e.\n (This is without a doubt the most confusing LLVM instruction, but the types help.)\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value (Ptr o) -\u003e (a, i) -\u003e CodeGenFunction r (Value (Ptr n))",
        "fct-source": "src/LLVM-Core-Instructions.html#getElementPtr",
        "fct-type": "function",
        "title": "getElementPtr"
      },
      "index": {
        "description": "Address arithmetic See LLVM description The index is nested tuple of the form i1 i2 This is without doubt the most confusing LLVM instruction but the types help",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "getElementPtr",
        "normalized": "Value(Ptr a)-\u003e(b,c)-\u003eCodeGenFunction d(Value(Ptr e))",
        "package": "llvm-ht",
        "partial": "Element Ptr",
        "signature": "Value(Ptr o)-\u003e(a,i)-\u003eCodeGenFunction r(Value(Ptr n))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:getElementPtr0",
      "description": {
        "fct-descr": "\u003cp\u003eLike getElementPtr, but with an initial index that is 0.\n This is useful since any pointer first need to be indexed off the pointer, and then into\n its actual value.  This first indexing is often with 0.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value (Ptr o) -\u003e i -\u003e CodeGenFunction r (Value (Ptr n))",
        "fct-source": "src/LLVM-Core-Instructions.html#getElementPtr0",
        "fct-type": "function",
        "title": "getElementPtr0"
      },
      "index": {
        "description": "Like getElementPtr but with an initial index that is This is useful since any pointer first need to be indexed off the pointer and then into its actual value This first indexing is often with",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "getElementPtr0",
        "normalized": "Value(Ptr a)-\u003eb-\u003eCodeGenFunction c(Value(Ptr d))",
        "package": "llvm-ht",
        "partial": "Element Ptr",
        "signature": "Value(Ptr o)-\u003ei-\u003eCodeGenFunction r(Value(Ptr n))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:getGlobalMappings",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list created by calls to \u003ccode\u003estaticFunction\u003c/code\u003e\nthat must be passed to the execution engine\nvia \u003ccode\u003eLLVM.ExecutionEngine.addGlobalMappings\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "CodeGenModule GlobalMappings",
        "fct-source": "src/LLVM-Core-CodeGenMonad.html#getGlobalMappings",
        "fct-type": "function",
        "title": "getGlobalMappings"
      },
      "index": {
        "description": "Get list created by calls to staticFunction that must be passed to the execution engine via LLVM.ExecutionEngine.addGlobalMappings",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "getGlobalMappings",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Global Mappings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:getModuleValues",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Module -\u003e IO [(String, ModuleValue)]",
        "fct-source": "src/LLVM-Core-CodeGen.html#getModuleValues",
        "fct-type": "function",
        "title": "getModuleValues"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "getModuleValues",
        "normalized": "Module-\u003eIO[(String,ModuleValue)]",
        "package": "llvm-ht",
        "partial": "Module Values",
        "signature": "Module-\u003eIO[(String,ModuleValue)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:getValueName",
      "description": {
        "fct-descr": "\u003cp\u003eGet the name of a \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value a -\u003e IO String",
        "fct-source": "src/LLVM-Core.html#getValueName",
        "fct-type": "function",
        "title": "getValueName"
      },
      "index": {
        "description": "Get the name of Value",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "getValueName",
        "normalized": "Value a-\u003eIO String",
        "package": "llvm-ht",
        "partial": "Value Name",
        "signature": "Value a-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:icmp",
      "description": {
        "fct-descr": "\u003cp\u003eCompare integers.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "IntPredicate -\u003e a -\u003e b -\u003e CodeGenFunction r (Value d)",
        "fct-source": "src/LLVM-Core-Instructions.html#icmp",
        "fct-type": "function",
        "title": "icmp"
      },
      "index": {
        "description": "Compare integers",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "icmp",
        "normalized": "IntPredicate-\u003ea-\u003eb-\u003eCodeGenFunction c(Value d)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "IntPredicate-\u003ea-\u003eb-\u003eCodeGenFunction r(Value d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:initializeNativeTarget",
      "description": {
        "fct-descr": "\u003cp\u003eInitialize jitter to the native target.\n The operation is idempotent.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "IO ()",
        "fct-source": "src/LLVM-Target-Native.html#initializeNativeTarget",
        "fct-type": "function",
        "title": "initializeNativeTarget"
      },
      "index": {
        "description": "Initialize jitter to the native target The operation is idempotent",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "initializeNativeTarget",
        "normalized": "IO()",
        "package": "llvm-ht",
        "partial": "Native Target",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:insertelement",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a value into a vector, nondestructive.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value (Vector n a)-\u003e Value a-\u003e Value Word32-\u003e CodeGenFunction r (Value (Vector n a))",
        "fct-type": "function",
        "title": "insertelement"
      },
      "index": {
        "description": "Insert value into vector nondestructive",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "insertelement",
        "normalized": "Value(Vector a b)-\u003eValue b-\u003eValue Word-\u003eCodeGenFunction c(Value(Vector a b))",
        "package": "llvm-ht",
        "partial": "",
        "signature": "Value(Vector n a)-\u003eValue a-\u003eValue Word-\u003eCodeGenFunction r(Value(Vector n a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:insertvalue",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a value into an aggregate, nondestructive.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value agg-\u003e Value a-\u003e i-\u003e CodeGenFunction r (Value agg)",
        "fct-type": "function",
        "title": "insertvalue"
      },
      "index": {
        "description": "Insert value into an aggregate nondestructive",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "insertvalue",
        "normalized": "Value a-\u003eValue b-\u003ec-\u003eCodeGenFunction d(Value a)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "Value agg-\u003eValue a-\u003ei-\u003eCodeGenFunction r(Value agg)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:inttoptr",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an integer to a pointer.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value a -\u003e CodeGenFunction r (Value (Ptr b))",
        "fct-source": "src/LLVM-Core-Instructions.html#inttoptr",
        "fct-type": "function",
        "title": "inttoptr"
      },
      "index": {
        "description": "Convert an integer to pointer",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "inttoptr",
        "normalized": "Value a-\u003eCodeGenFunction b(Value(Ptr c))",
        "package": "llvm-ht",
        "partial": "",
        "signature": "Value a-\u003eCodeGenFunction r(Value(Ptr b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:inv",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value a -\u003e CodeGenFunction r (Value a)",
        "fct-source": "src/LLVM-Core-Instructions.html#inv",
        "fct-type": "function",
        "title": "inv"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "inv",
        "normalized": "Value a-\u003eCodeGenFunction b(Value a)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "Value a-\u003eCodeGenFunction r(Value a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:invoke",
      "description": {
        "fct-descr": "\u003cp\u003eCall a function with exception handling.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BasicBlock-\u003e BasicBlock-\u003e Function f-\u003e g",
        "fct-type": "function",
        "title": "invoke"
      },
      "index": {
        "description": "Call function with exception handling",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "invoke",
        "normalized": "BasicBlock-\u003eBasicBlock-\u003eFunction a-\u003eb",
        "package": "llvm-ht",
        "partial": "",
        "signature": "BasicBlock-\u003eBasicBlock-\u003eFunction f-\u003eg"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:isFloating",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/LLVM-Core-Type.html#isFloating",
        "fct-type": "function",
        "title": "isFloating"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "isFloating",
        "normalized": "a-\u003eBool",
        "package": "llvm-ht",
        "partial": "Floating",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:isSigned",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/LLVM-Core-Type.html#isSigned",
        "fct-type": "function",
        "title": "isSigned"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "isSigned",
        "normalized": "a-\u003eBool",
        "package": "llvm-ht",
        "partial": "Signed",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:load",
      "description": {
        "fct-descr": "\u003cp\u003eLoad a value from memory.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value (Ptr a)-\u003e CodeGenFunction r (Value a)",
        "fct-type": "function",
        "title": "load"
      },
      "index": {
        "description": "Load value from memory",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "load",
        "normalized": "Value(Ptr a)-\u003eCodeGenFunction b(Value a)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "Value(Ptr a)-\u003eCodeGenFunction r(Value a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:lshr",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
        "fct-source": "src/LLVM-Core-Instructions.html#lshr",
        "fct-type": "function",
        "title": "lshr"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "lshr",
        "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:malloc",
      "description": {
        "fct-descr": "\u003cp\u003eAllocate heap memory.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "CodeGenFunction r (Value (Ptr a))",
        "fct-source": "src/LLVM-Core-Instructions.html#malloc",
        "fct-type": "function",
        "title": "malloc"
      },
      "index": {
        "description": "Allocate heap memory",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "malloc",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:mul",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
        "fct-source": "src/LLVM-Core-Instructions.html#mul",
        "fct-type": "function",
        "title": "mul"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "mul",
        "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:neg",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value a -\u003e CodeGenFunction r (Value a)",
        "fct-source": "src/LLVM-Core-Instructions.html#neg",
        "fct-type": "function",
        "title": "neg"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "neg",
        "normalized": "Value a-\u003eCodeGenFunction b(Value a)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "Value a-\u003eCodeGenFunction r(Value a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:newBasicBlock",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "CodeGenFunction r BasicBlock",
        "fct-source": "src/LLVM-Core-CodeGen.html#newBasicBlock",
        "fct-type": "function",
        "title": "newBasicBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "newBasicBlock",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Basic Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:newFunction",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new function.  Use \u003ccode\u003e\u003ca\u003enewNamedFunction\u003c/a\u003e\u003c/code\u003e to create a function with external linkage, since\n it needs a known name.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Linkage -\u003e CodeGenModule (Function a)",
        "fct-source": "src/LLVM-Core-CodeGen.html#newFunction",
        "fct-type": "function",
        "title": "newFunction"
      },
      "index": {
        "description": "Create new function Use newNamedFunction to create function with external linkage since it needs known name",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "newFunction",
        "normalized": "Linkage-\u003eCodeGenModule(Function a)",
        "package": "llvm-ht",
        "partial": "Function",
        "signature": "Linkage-\u003eCodeGenModule(Function a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:newGlobal",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new global variable.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Bool -\u003e Linkage -\u003e TGlobal a",
        "fct-source": "src/LLVM-Core-CodeGen.html#newGlobal",
        "fct-type": "function",
        "title": "newGlobal"
      },
      "index": {
        "description": "Create new global variable",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "newGlobal",
        "normalized": "Bool-\u003eLinkage-\u003eTGlobal a",
        "package": "llvm-ht",
        "partial": "Global",
        "signature": "Bool-\u003eLinkage-\u003eTGlobal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:newModule",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new module.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "IO Module",
        "fct-source": "src/LLVM-Core-CodeGen.html#newModule",
        "fct-type": "function",
        "title": "newModule"
      },
      "index": {
        "description": "Create new module",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "newModule",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:newNamedBasicBlock",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "String -\u003e CodeGenFunction r BasicBlock",
        "fct-source": "src/LLVM-Core-CodeGen.html#newNamedBasicBlock",
        "fct-type": "function",
        "title": "newNamedBasicBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "newNamedBasicBlock",
        "normalized": "String-\u003eCodeGenFunction a BasicBlock",
        "package": "llvm-ht",
        "partial": "Named Basic Block",
        "signature": "String-\u003eCodeGenFunction r BasicBlock"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:newNamedFunction",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new named function.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Linkage-\u003e String-\u003e CodeGenModule (Function a)",
        "fct-type": "function",
        "title": "newNamedFunction"
      },
      "index": {
        "description": "Create new named function",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "newNamedFunction",
        "normalized": "Linkage-\u003eString-\u003eCodeGenModule(Function a)",
        "package": "llvm-ht",
        "partial": "Named Function",
        "signature": "Linkage-\u003eString-\u003eCodeGenModule(Function a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:newNamedGlobal",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new named global variable.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Bool-\u003e Linkage-\u003e String-\u003e TGlobal a",
        "fct-type": "function",
        "title": "newNamedGlobal"
      },
      "index": {
        "description": "Create new named global variable",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "newNamedGlobal",
        "normalized": "Bool-\u003eLinkage-\u003eString-\u003eTGlobal a",
        "package": "llvm-ht",
        "partial": "Named Global",
        "signature": "Bool-\u003eLinkage-\u003eString-\u003eTGlobal a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:newNamedModule",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new explicitely named module.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "String-\u003e IO Module",
        "fct-type": "function",
        "title": "newNamedModule"
      },
      "index": {
        "description": "Create new explicitely named module",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "newNamedModule",
        "normalized": "String-\u003eIO Module",
        "package": "llvm-ht",
        "partial": "Named Module",
        "signature": "String-\u003eIO Module"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:or",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
        "fct-source": "src/LLVM-Core-Instructions.html#or",
        "fct-type": "function",
        "title": "or"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "or",
        "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:phi",
      "description": {
        "fct-descr": "\u003cp\u003eJoin several variables (virtual registers) from different basic blocks into one.\n All of the variables in the list are joined.  See also \u003ccode\u003e\u003ca\u003eaddPhiInputs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "[(Value a, BasicBlock)] -\u003e CodeGenFunction r (Value a)",
        "fct-source": "src/LLVM-Core-Instructions.html#phi",
        "fct-type": "function",
        "title": "phi"
      },
      "index": {
        "description": "Join several variables virtual registers from different basic blocks into one All of the variables in the list are joined See also addPhiInputs",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "phi",
        "normalized": "[(Value a,BasicBlock)]-\u003eCodeGenFunction b(Value a)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "[(Value a,BasicBlock)]-\u003eCodeGenFunction r(Value a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:ptrtoint",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a pointer to an integer.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value (Ptr a) -\u003e CodeGenFunction r (Value b)",
        "fct-source": "src/LLVM-Core-Instructions.html#ptrtoint",
        "fct-type": "function",
        "title": "ptrtoint"
      },
      "index": {
        "description": "Convert pointer to an integer",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "ptrtoint",
        "normalized": "Value(Ptr a)-\u003eCodeGenFunction b(Value c)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "Value(Ptr a)-\u003eCodeGenFunction r(Value b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:readBitcodeFromFile",
      "description": {
        "fct-descr": "\u003cp\u003eRead a module from a file.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "String -\u003e IO Module",
        "fct-source": "src/LLVM-Core-Util.html#readBitcodeFromFile",
        "fct-type": "function",
        "title": "readBitcodeFromFile"
      },
      "index": {
        "description": "Read module from file",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "readBitcodeFromFile",
        "normalized": "String-\u003eIO Module",
        "package": "llvm-ht",
        "partial": "Bitcode From File",
        "signature": "String-\u003eIO Module"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:ret",
      "description": {
        "fct-descr": "\u003cp\u003eReturn from the current function with the given value.  Use () as the return value for what would be a void function is C.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "a -\u003e CodeGenFunction r Terminate",
        "fct-source": "src/LLVM-Core-Instructions.html#ret",
        "fct-type": "function",
        "title": "ret"
      },
      "index": {
        "description": "Return from the current function with the given value Use as the return value for what would be void function is",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "ret",
        "normalized": "a-\u003eCodeGenFunction b Terminate",
        "package": "llvm-ht",
        "partial": "",
        "signature": "a-\u003eCodeGenFunction r Terminate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:sdiv",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
        "fct-source": "src/LLVM-Core-Instructions.html#sdiv",
        "fct-type": "function",
        "title": "sdiv"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "sdiv",
        "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:select",
      "description": {
        "fct-descr": "\u003cp\u003eSelect between two values depending on a boolean.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value b -\u003e Value a -\u003e Value a -\u003e CodeGenFunction r (Value a)",
        "fct-source": "src/LLVM-Core-Instructions.html#select",
        "fct-type": "function",
        "title": "select"
      },
      "index": {
        "description": "Select between two values depending on boolean",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "select",
        "normalized": "Value a-\u003eValue b-\u003eValue b-\u003eCodeGenFunction c(Value b)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "Value b-\u003eValue a-\u003eValue a-\u003eCodeGenFunction r(Value a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:sext",
      "description": {
        "fct-descr": "\u003cp\u003eSign extend a value to wider width.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value a -\u003e CodeGenFunction r (Value b)",
        "fct-source": "src/LLVM-Core-Instructions.html#sext",
        "fct-type": "function",
        "title": "sext"
      },
      "index": {
        "description": "Sign extend value to wider width",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "sext",
        "normalized": "Value a-\u003eCodeGenFunction b(Value c)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "Value a-\u003eCodeGenFunction r(Value b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:shl",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
        "fct-source": "src/LLVM-Core-Instructions.html#shl",
        "fct-type": "function",
        "title": "shl"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "shl",
        "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:shufflevector",
      "description": {
        "fct-descr": "\u003cp\u003ePermute vector.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value (Vector n a) -\u003e Value (Vector n a) -\u003e ConstValue (Vector n Word32) -\u003e CodeGenFunction r (Value (Vector n a))",
        "fct-source": "src/LLVM-Core-Instructions.html#shufflevector",
        "fct-type": "function",
        "title": "shufflevector"
      },
      "index": {
        "description": "Permute vector",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "shufflevector",
        "normalized": "Value(Vector a b)-\u003eValue(Vector a b)-\u003eConstValue(Vector a Word)-\u003eCodeGenFunction c(Value(Vector a b))",
        "package": "llvm-ht",
        "partial": "",
        "signature": "Value(Vector n a)-\u003eValue(Vector n a)-\u003eConstValue(Vector n Word)-\u003eCodeGenFunction r(Value(Vector n a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:sitofp",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a signed integer to a floating point value.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value a -\u003e CodeGenFunction r (Value b)",
        "fct-source": "src/LLVM-Core-Instructions.html#sitofp",
        "fct-type": "function",
        "title": "sitofp"
      },
      "index": {
        "description": "Convert signed integer to floating point value",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "sitofp",
        "normalized": "Value a-\u003eCodeGenFunction b(Value c)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "Value a-\u003eCodeGenFunction r(Value b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:srem",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
        "fct-source": "src/LLVM-Core-Instructions.html#srem",
        "fct-type": "function",
        "title": "srem"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "srem",
        "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:staticFunction",
      "description": {
        "fct-descr": "\u003cp\u003eMake an external C function with a fixed address callable from LLVM code.\nThis callback function can also be a Haskell function,\nthat was imported like\n\u003c/p\u003e\u003cpre\u003e foreign import ccall \"&nextElement\"\n    nextElementFunPtr :: FunPtr (StablePtr (IORef [Word32]) -\u003e IO Word32)\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003eexamples/List.hs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWhen you only use \u003ccode\u003e\u003ca\u003eexternFunction\u003c/a\u003e\u003c/code\u003e, then LLVM cannot resolve the name.\n(However, I do not know why.)\nThus \u003ccode\u003e\u003ca\u003estaticFunction\u003c/a\u003e\u003c/code\u003e manages a list of static functions.\nThis list is automatically installed by \u003ccode\u003eExecutionEngine.simpleFunction\u003c/code\u003e\nand can be manually obtained by \u003ccode\u003e\u003ca\u003egetGlobalMappings\u003c/a\u003e\u003c/code\u003e\nand installed by \u003ccode\u003eExecutionEngine.addGlobalMappings\u003c/code\u003e.\n\"Installing\" means calling LLVM's \u003ccode\u003eaddGlobalMapping\u003c/code\u003e according to\n\u003ca\u003ehttp://old.nabble.com/jit-with-external-functions-td7769793.html\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "FunPtr f -\u003e CodeGenFunction r (Function f)",
        "fct-source": "src/LLVM-Core-CodeGen.html#staticFunction",
        "fct-type": "function",
        "title": "staticFunction"
      },
      "index": {
        "description": "Make an external function with fixed address callable from LLVM code This callback function can also be Haskell function that was imported like foreign import ccall nextElement nextElementFunPtr FunPtr StablePtr IORef Word32 IO Word32 See examples List.hs When you only use externFunction then LLVM cannot resolve the name However do not know why Thus staticFunction manages list of static functions This list is automatically installed by ExecutionEngine.simpleFunction and can be manually obtained by getGlobalMappings and installed by ExecutionEngine.addGlobalMappings Installing means calling LLVM addGlobalMapping according to http old.nabble.com jit-with-external-functions-td7769793.html",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "staticFunction",
        "normalized": "FunPtr a-\u003eCodeGenFunction b(Function a)",
        "package": "llvm-ht",
        "partial": "Function",
        "signature": "FunPtr f-\u003eCodeGenFunction r(Function f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:store",
      "description": {
        "fct-descr": "\u003cp\u003eStore a value in memory\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value a-\u003e Value (Ptr a)-\u003e CodeGenFunction r (Value ())",
        "fct-type": "function",
        "title": "store"
      },
      "index": {
        "description": "Store value in memory",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "store",
        "normalized": "Value a-\u003eValue(Ptr a)-\u003eCodeGenFunction b(Value())",
        "package": "llvm-ht",
        "partial": "",
        "signature": "Value a-\u003eValue(Ptr a)-\u003eCodeGenFunction r(Value())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:sub",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
        "fct-source": "src/LLVM-Core-Instructions.html#sub",
        "fct-type": "function",
        "title": "sub"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "sub",
        "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:switch",
      "description": {
        "fct-descr": "\u003cp\u003eBranch table instruction.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value a-\u003e BasicBlock-\u003e [(ConstValue a, BasicBlock)]-\u003e CodeGenFunction r Terminate",
        "fct-type": "function",
        "title": "switch"
      },
      "index": {
        "description": "Branch table instruction",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "switch",
        "normalized": "Value a-\u003eBasicBlock-\u003e[(ConstValue a,BasicBlock)]-\u003eCodeGenFunction b Terminate",
        "package": "llvm-ht",
        "partial": "",
        "signature": "Value a-\u003eBasicBlock-\u003e[(ConstValue a,BasicBlock)]-\u003eCodeGenFunction r Terminate"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:toLabel",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BasicBlock -\u003e Value Label",
        "fct-source": "src/LLVM-Core-CodeGen.html#toLabel",
        "fct-type": "function",
        "title": "toLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "toLabel",
        "normalized": "BasicBlock-\u003eValue Label",
        "package": "llvm-ht",
        "partial": "Label",
        "signature": "BasicBlock-\u003eValue Label"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:toVector",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "va -\u003e Vector n a",
        "fct-source": "src/LLVM-Core-Vector.html#toVector",
        "fct-type": "function",
        "title": "toVector"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "toVector",
        "normalized": "a-\u003eVector b c",
        "package": "llvm-ht",
        "partial": "Vector",
        "signature": "va-\u003eVector n a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:trunc",
      "description": {
        "fct-descr": "\u003cp\u003eTruncate a value to a shorter bit width.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value a -\u003e CodeGenFunction r (Value b)",
        "fct-source": "src/LLVM-Core-Instructions.html#trunc",
        "fct-type": "function",
        "title": "trunc"
      },
      "index": {
        "description": "Truncate value to shorter bit width",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "trunc",
        "normalized": "Value a-\u003eCodeGenFunction b(Value c)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "Value a-\u003eCodeGenFunction r(Value b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:tupleDesc",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "a -\u003e [TypeDesc]",
        "fct-source": "src/LLVM-Core-Type.html#tupleDesc",
        "fct-type": "method",
        "title": "tupleDesc"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "tupleDesc",
        "normalized": "a-\u003e[TypeDesc]",
        "package": "llvm-ht",
        "partial": "Desc",
        "signature": "a-\u003e[TypeDesc]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:typeDesc",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "a -\u003e TypeDesc",
        "fct-source": "src/LLVM-Core-Type.html#typeDesc",
        "fct-type": "method",
        "title": "typeDesc"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "typeDesc",
        "normalized": "a-\u003eTypeDesc",
        "package": "llvm-ht",
        "partial": "Desc",
        "signature": "a-\u003eTypeDesc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:typeName",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/LLVM-Core-Type.html#typeName",
        "fct-type": "function",
        "title": "typeName"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "typeName",
        "normalized": "a-\u003eString",
        "package": "llvm-ht",
        "partial": "Name",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:typeRef",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "a-\u003e TypeRef",
        "fct-type": "function",
        "title": "typeRef"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "typeRef",
        "normalized": "a-\u003eTypeRef",
        "package": "llvm-ht",
        "partial": "Ref",
        "signature": "a-\u003eTypeRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:udiv",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
        "fct-source": "src/LLVM-Core-Instructions.html#udiv",
        "fct-type": "function",
        "title": "udiv"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "udiv",
        "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:uitofp",
      "description": {
        "fct-descr": "\u003cp\u003eConvert an unsigned integer to a floating point value.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value a -\u003e CodeGenFunction r (Value b)",
        "fct-source": "src/LLVM-Core-Instructions.html#uitofp",
        "fct-type": "function",
        "title": "uitofp"
      },
      "index": {
        "description": "Convert an unsigned integer to floating point value",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "uitofp",
        "normalized": "Value a-\u003eCodeGenFunction b(Value c)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "Value a-\u003eCodeGenFunction r(Value b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:undef",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ConstValue a",
        "fct-source": "src/LLVM-Core-CodeGen.html#undef",
        "fct-type": "function",
        "title": "undef"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "undef",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:undefTuple",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "a",
        "fct-source": "src/LLVM-Core-CodeGen.html#undefTuple",
        "fct-type": "method",
        "title": "undefTuple"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "undefTuple",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:unreachable",
      "description": {
        "fct-descr": "\u003cp\u003eInform the code generator that this code can never be reached.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "CodeGenFunction r Terminate",
        "fct-source": "src/LLVM-Core-Instructions.html#unreachable",
        "fct-type": "function",
        "title": "unreachable"
      },
      "index": {
        "description": "Inform the code generator that this code can never be reached",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "unreachable",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:unwind",
      "description": {
        "fct-descr": "\u003cp\u003eUnwind the call stack until a function call performed with \u003ccode\u003e\u003ca\u003einvoke\u003c/a\u003e\u003c/code\u003e is reached.\n I.e., throw a non-local exception.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "CodeGenFunction r Terminate",
        "fct-source": "src/LLVM-Core-Instructions.html#unwind",
        "fct-type": "function",
        "title": "unwind"
      },
      "index": {
        "description": "Unwind the call stack until function call performed with invoke is reached I.e throw non-local exception",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "unwind",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:urem",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
        "fct-source": "src/LLVM-Core-Instructions.html#urem",
        "fct-type": "function",
        "title": "urem"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "urem",
        "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:value",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ConstValue a -\u003e Value a",
        "fct-source": "src/LLVM-Core-CodeGen.html#value",
        "fct-type": "function",
        "title": "value"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "value",
        "normalized": "ConstValue a-\u003eValue a",
        "package": "llvm-ht",
        "partial": "",
        "signature": "ConstValue a-\u003eValue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:valueOf",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "a -\u003e Value a",
        "fct-source": "src/LLVM-Core-CodeGen.html#valueOf",
        "fct-type": "function",
        "title": "valueOf"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "valueOf",
        "normalized": "a-\u003eValue a",
        "package": "llvm-ht",
        "partial": "Of",
        "signature": "a-\u003eValue a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:valueTupleOf",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "haskellValue -\u003e llvmValue",
        "fct-source": "src/LLVM-Core-CodeGen.html#valueTupleOf",
        "fct-type": "method",
        "title": "valueTupleOf"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "valueTupleOf",
        "normalized": "a-\u003eb",
        "package": "llvm-ht",
        "partial": "Tuple Of",
        "signature": "haskellValue-\u003ellvmValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:vector",
      "description": {
        "fct-descr": "\u003cp\u003eMake a constant vector.  Replicates or truncates the list to get length \u003cem\u003en\u003c/em\u003e.\n This behaviour is consistent with that of \u003ccode\u003eLLVM.Core.CodeGen.constVector\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "[a] -\u003e Vector n a",
        "fct-source": "src/LLVM-Core-Vector.html#vector",
        "fct-type": "function",
        "title": "vector"
      },
      "index": {
        "description": "Make constant vector Replicates or truncates the list to get length This behaviour is consistent with that of LLVM.Core.CodeGen.constVector",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "vector",
        "normalized": "[a]-\u003eVector b a",
        "package": "llvm-ht",
        "partial": "",
        "signature": "[a]-\u003eVector n a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:withTuple",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "(a -\u003e b) -\u003e a :+-\u003e b",
        "fct-source": "src/LLVM-Core-Type.html#withTuple",
        "fct-type": "function",
        "title": "withTuple"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "withTuple",
        "normalized": "(a-\u003eb)-\u003ea-\u003eb",
        "package": "llvm-ht",
        "partial": "Tuple",
        "signature": "(a-\u003eb)-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:writeBitcodeToFile",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a module to a file.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "String -\u003e Module -\u003e IO ()",
        "fct-source": "src/LLVM-Core-Util.html#writeBitcodeToFile",
        "fct-type": "function",
        "title": "writeBitcodeToFile"
      },
      "index": {
        "description": "Write module to file",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "writeBitcodeToFile",
        "normalized": "String-\u003eModule-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Bitcode To File",
        "signature": "String-\u003eModule-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:xor",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
        "fct-source": "src/LLVM-Core-Instructions.html#xor",
        "fct-type": "function",
        "title": "xor"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "xor",
        "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:zero",
      "description": {
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ConstValue a",
        "fct-source": "src/LLVM-Core-CodeGen.html#zero",
        "fct-type": "function",
        "title": "zero"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "zero",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:zext",
      "description": {
        "fct-descr": "\u003cp\u003eZero extend a value to a wider width.\n\u003c/p\u003e",
        "fct-module": "LLVM.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Value a -\u003e CodeGenFunction r (Value b)",
        "fct-source": "src/LLVM-Core-Instructions.html#zext",
        "fct-type": "function",
        "title": "zext"
      },
      "index": {
        "description": "Zero extend value to wider width",
        "hierarchy": "LLVM Core",
        "module": "LLVM.Core",
        "name": "zext",
        "normalized": "Value a-\u003eCodeGenFunction b(Value c)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "Value a-\u003eCodeGenFunction r(Value b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn \u003ccode\u003eExecutionEngine\u003c/code\u003e is JIT compiler that is used to generate code for an LLVM module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "module",
        "fct-source": "src/LLVM-ExecutionEngine.html",
        "fct-type": "module",
        "title": "ExecutionEngine"
      },
      "index": {
        "description": "An ExecutionEngine is JIT compiler that is used to generate code for an LLVM module",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "ExecutionEngine",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Execution Engine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#t:EngineAccess",
      "description": {
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-ExecutionEngine-Engine.html#EngineAccess",
        "fct-type": "data",
        "title": "EngineAccess"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "EngineAccess",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Engine Access",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#t:FreePointers",
      "description": {
        "fct-descr": "\u003cp\u003eGet all the information needed to free a function.\n Freeing code might have to be done from a (C) finalizer, so it has to done from C.\n The function c_freeFunctionObject take these pointers as arguments and frees the function.\n\u003c/p\u003e",
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "type",
        "fct-source": "src/LLVM-ExecutionEngine-Engine.html#FreePointers",
        "fct-type": "type",
        "title": "FreePointers"
      },
      "index": {
        "description": "Get all the information needed to free function Freeing code might have to be done from finalizer so it has to done from The function freeFunctionObject take these pointers as arguments and frees the function",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "FreePointers",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Free Pointers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#t:Generic",
      "description": {
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-ExecutionEngine-Engine.html#Generic",
        "fct-type": "class",
        "title": "Generic"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "Generic",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Generic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#t:GenericTuple",
      "description": {
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-ExecutionEngine-Engine.html#GenericTuple",
        "fct-type": "class",
        "title": "GenericTuple"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "GenericTuple",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Generic Tuple",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#t:TargetData",
      "description": {
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-ExecutionEngine-Target.html#TargetData",
        "fct-type": "data",
        "title": "TargetData"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "TargetData",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Target Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#t:Translatable",
      "description": {
        "fct-descr": "\u003cp\u003eClass of LLVM function types that can be translated to the corresponding\n Haskell type.\n\u003c/p\u003e",
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-ExecutionEngine.html#Translatable",
        "fct-type": "class",
        "title": "Translatable"
      },
      "index": {
        "description": "Class of LLVM function types that can be translated to the corresponding Haskell type",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "Translatable",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Translatable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#t:Unsafe",
      "description": {
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-ExecutionEngine.html#Unsafe",
        "fct-type": "class",
        "title": "Unsafe"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "Unsafe",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Unsafe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:TargetData",
      "description": {
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "TargetData",
        "fct-source": "src/LLVM-ExecutionEngine-Target.html#TargetData",
        "fct-type": "function",
        "title": "TargetData"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "TargetData",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Target Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:aBIAlignmentOfType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "Type -\u003e Int",
        "fct-source": "src/LLVM-ExecutionEngine-Target.html#TargetData",
        "fct-type": "function",
        "title": "aBIAlignmentOfType"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "aBIAlignmentOfType",
        "normalized": "Type-\u003eInt",
        "package": "llvm-ht",
        "partial": "BIAlignment Of Type",
        "signature": "Type-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:aBISizeOfType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "Type -\u003e Int",
        "fct-source": "src/LLVM-ExecutionEngine-Target.html#TargetData",
        "fct-type": "function",
        "title": "aBISizeOfType"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "aBISizeOfType",
        "normalized": "Type-\u003eInt",
        "package": "llvm-ht",
        "partial": "BISize Of Type",
        "signature": "Type-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:addFunctionValue",
      "description": {
        "fct-descr": "\u003cp\u003eTell LLVM the address of an external function\nif it cannot resolve a name automatically.\nAlternatively you may declare the function\nwith \u003ccode\u003estaticFunction\u003c/code\u003e instead of \u003ccode\u003eexternFunction\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "Function f -\u003e FunPtr f -\u003e EngineAccess ()",
        "fct-source": "src/LLVM-ExecutionEngine-Engine.html#addFunctionValue",
        "fct-type": "function",
        "title": "addFunctionValue"
      },
      "index": {
        "description": "Tell LLVM the address of an external function if it cannot resolve name automatically Alternatively you may declare the function with staticFunction instead of externFunction",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "addFunctionValue",
        "normalized": "Function a-\u003eFunPtr a-\u003eEngineAccess()",
        "package": "llvm-ht",
        "partial": "Function Value",
        "signature": "Function f-\u003eFunPtr f-\u003eEngineAccess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:addGlobalMappings",
      "description": {
        "fct-descr": "\u003cp\u003ePass a list of global mappings to LLVM\nthat can be obtained from \u003ccode\u003eLLVM.Core.getGlobalMappings\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "GlobalMappings -\u003e EngineAccess ()",
        "fct-source": "src/LLVM-ExecutionEngine-Engine.html#addGlobalMappings",
        "fct-type": "function",
        "title": "addGlobalMappings"
      },
      "index": {
        "description": "Pass list of global mappings to LLVM that can be obtained from LLVM.Core.getGlobalMappings",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "addGlobalMappings",
        "normalized": "GlobalMappings-\u003eEngineAccess()",
        "package": "llvm-ht",
        "partial": "Global Mappings",
        "signature": "GlobalMappings-\u003eEngineAccess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:addModule",
      "description": {
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "Module -\u003e EngineAccess ()",
        "fct-source": "src/LLVM-ExecutionEngine-Engine.html#addModule",
        "fct-type": "function",
        "title": "addModule"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "addModule",
        "normalized": "Module-\u003eEngineAccess()",
        "package": "llvm-ht",
        "partial": "Module",
        "signature": "Module-\u003eEngineAccess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:addModuleProvider",
      "description": {
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "ModuleProvider -\u003e EngineAccess ()",
        "fct-source": "src/LLVM-ExecutionEngine-Engine.html#addModuleProvider",
        "fct-type": "function",
        "title": "addModuleProvider"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "addModuleProvider",
        "normalized": "ModuleProvider-\u003eEngineAccess()",
        "package": "llvm-ht",
        "partial": "Module Provider",
        "signature": "ModuleProvider-\u003eEngineAccess()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:callFrameAlignmentOfType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "Type -\u003e Int",
        "fct-source": "src/LLVM-ExecutionEngine-Target.html#TargetData",
        "fct-type": "function",
        "title": "callFrameAlignmentOfType"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "callFrameAlignmentOfType",
        "normalized": "Type-\u003eInt",
        "package": "llvm-ht",
        "partial": "Frame Alignment Of Type",
        "signature": "Type-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:generateFunction",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a Haskell function from an LLVM function.\n\u003c/p\u003e\u003cp\u003eNote that the function is compiled for every call (Just-In-Time compilation).\n If you want to compile the function once and call it a lot of times\n then you should better use \u003ccode\u003e\u003ca\u003egetPointerToFunction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "Value (Ptr f) -\u003e EngineAccess f",
        "fct-source": "src/LLVM-ExecutionEngine.html#generateFunction",
        "fct-type": "function",
        "title": "generateFunction"
      },
      "index": {
        "description": "Generate Haskell function from an LLVM function Note that the function is compiled for every call Just-In-Time compilation If you want to compile the function once and call it lot of times then you should better use getPointerToFunction",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "generateFunction",
        "normalized": "Value(Ptr a)-\u003eEngineAccess a",
        "package": "llvm-ht",
        "partial": "Function",
        "signature": "Value(Ptr f)-\u003eEngineAccess f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:getFreePointers",
      "description": {
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "Function f -\u003e EngineAccess FreePointers",
        "fct-source": "src/LLVM-ExecutionEngine-Engine.html#getFreePointers",
        "fct-type": "function",
        "title": "getFreePointers"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "getFreePointers",
        "normalized": "Function a-\u003eEngineAccess FreePointers",
        "package": "llvm-ht",
        "partial": "Free Pointers",
        "signature": "Function f-\u003eEngineAccess FreePointers"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:getPointerToFunction",
      "description": {
        "fct-descr": "\u003cp\u003eIn contrast to \u003ccode\u003egenerateFunction\u003c/code\u003e this compiles a function once.\nThus it is faster for many calls to the same function.\nSee \u003ccode\u003eexamples/Vector.hs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the function calls back into Haskell code,\nyou also have to set the function addresses\nusing \u003ccode\u003e\u003ca\u003eaddFunctionValue\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eaddGlobalMappings\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "Function f -\u003e EngineAccess (FunPtr f)",
        "fct-source": "src/LLVM-ExecutionEngine-Engine.html#getPointerToFunction",
        "fct-type": "function",
        "title": "getPointerToFunction"
      },
      "index": {
        "description": "In contrast to generateFunction this compiles function once Thus it is faster for many calls to the same function See examples Vector.hs If the function calls back into Haskell code you also have to set the function addresses using addFunctionValue or addGlobalMappings",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "getPointerToFunction",
        "normalized": "Function a-\u003eEngineAccess(FunPtr a)",
        "package": "llvm-ht",
        "partial": "Pointer To Function",
        "signature": "Function f-\u003eEngineAccess(FunPtr f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:getTargetData",
      "description": {
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "IO TargetData",
        "fct-source": "src/LLVM-ExecutionEngine-Target.html#getTargetData",
        "fct-type": "function",
        "title": "getTargetData"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "getTargetData",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Target Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:intPtrType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "Type",
        "fct-source": "src/LLVM-ExecutionEngine-Target.html#TargetData",
        "fct-type": "function",
        "title": "intPtrType"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "intPtrType",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Ptr Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:littleEndian",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "Bool",
        "fct-source": "src/LLVM-ExecutionEngine-Target.html#TargetData",
        "fct-type": "function",
        "title": "littleEndian"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "littleEndian",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Endian",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:pointerSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "Int",
        "fct-source": "src/LLVM-ExecutionEngine-Target.html#TargetData",
        "fct-type": "function",
        "title": "pointerSize"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "pointerSize",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:preferredAlignmentOfType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "Type -\u003e Int",
        "fct-source": "src/LLVM-ExecutionEngine-Target.html#TargetData",
        "fct-type": "function",
        "title": "preferredAlignmentOfType"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "preferredAlignmentOfType",
        "normalized": "Type-\u003eInt",
        "package": "llvm-ht",
        "partial": "Alignment Of Type",
        "signature": "Type-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:runEngineAccess",
      "description": {
        "fct-descr": "\u003cp\u003eThe LLVM execution engine is encapsulated so it cannot be accessed directly.\n The reason is that (currently) there must only ever be one engine,\n so access to it is wrapped in a monad.\n\u003c/p\u003e",
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "EngineAccess a -\u003e IO a",
        "fct-source": "src/LLVM-ExecutionEngine-Engine.html#runEngineAccess",
        "fct-type": "function",
        "title": "runEngineAccess"
      },
      "index": {
        "description": "The LLVM execution engine is encapsulated so it cannot be accessed directly The reason is that currently there must only ever be one engine so access to it is wrapped in monad",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "runEngineAccess",
        "normalized": "EngineAccess a-\u003eIO a",
        "package": "llvm-ht",
        "partial": "Engine Access",
        "signature": "EngineAccess a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:simpleFunction",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate a function to Haskell code.  This is a simplified interface to\n the execution engine and module mechanism.\n It is based on \u003ccode\u003e\u003ca\u003egenerateFunction\u003c/a\u003e\u003c/code\u003e, so see there for limitations.\n\u003c/p\u003e",
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "CodeGenModule (Function f) -\u003e IO f",
        "fct-source": "src/LLVM-ExecutionEngine.html#simpleFunction",
        "fct-type": "function",
        "title": "simpleFunction"
      },
      "index": {
        "description": "Translate function to Haskell code This is simplified interface to the execution engine and module mechanism It is based on generateFunction so see there for limitations",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "simpleFunction",
        "normalized": "CodeGenModule(Function a)-\u003eIO a",
        "package": "llvm-ht",
        "partial": "Function",
        "signature": "CodeGenModule(Function f)-\u003eIO f"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:sizeOfTypeInBits",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "Type -\u003e Int",
        "fct-source": "src/LLVM-ExecutionEngine-Target.html#TargetData",
        "fct-type": "function",
        "title": "sizeOfTypeInBits"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "sizeOfTypeInBits",
        "normalized": "Type-\u003eInt",
        "package": "llvm-ht",
        "partial": "Of Type In Bits",
        "signature": "Type-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:storeSizeOfType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "Type -\u003e Int",
        "fct-source": "src/LLVM-ExecutionEngine-Target.html#TargetData",
        "fct-type": "function",
        "title": "storeSizeOfType"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "storeSizeOfType",
        "normalized": "Type-\u003eInt",
        "package": "llvm-ht",
        "partial": "Size Of Type",
        "signature": "Type-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:targetDataFromString",
      "description": {
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "String -\u003e TargetData",
        "fct-source": "src/LLVM-ExecutionEngine-Target.html#targetDataFromString",
        "fct-type": "function",
        "title": "targetDataFromString"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "targetDataFromString",
        "normalized": "String-\u003eTargetData",
        "package": "llvm-ht",
        "partial": "Data From String",
        "signature": "String-\u003eTargetData"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:unsafeGenerateFunction",
      "description": {
        "fct-descr": "\u003cp\u003eCombine \u003ccode\u003e\u003ca\u003esimpleFunction\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunsafePurify\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "CodeGenModule (Function t) -\u003e a",
        "fct-source": "src/LLVM-ExecutionEngine.html#unsafeGenerateFunction",
        "fct-type": "function",
        "title": "unsafeGenerateFunction"
      },
      "index": {
        "description": "Combine simpleFunction and unsafePurify",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "unsafeGenerateFunction",
        "normalized": "CodeGenModule(Function a)-\u003eb",
        "package": "llvm-ht",
        "partial": "Generate Function",
        "signature": "CodeGenModule(Function t)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:unsafePurify",
      "description": {
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "unsafePurify",
        "fct-source": "src/LLVM-ExecutionEngine.html#unsafePurify",
        "fct-type": "method",
        "title": "unsafePurify"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "unsafePurify",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Purify",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:withIntPtrType",
      "description": {
        "fct-module": "LLVM.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "WordN n -\u003e a) -\u003e a",
        "fct-source": "src/LLVM-ExecutionEngine-Target.html#withIntPtrType",
        "fct-type": "function",
        "title": "withIntPtrType"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM ExecutionEngine",
        "module": "LLVM.ExecutionEngine",
        "name": "withIntPtrType",
        "normalized": "WordN a-\u003eb)-\u003eb",
        "package": "llvm-ht",
        "partial": "Int Ptr Type",
        "signature": "WordN n-\u003ea)-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Analysis.html#",
      "description": {
        "fct-module": "LLVM.FFI.Analysis",
        "fct-package": "llvm-ht",
        "fct-signature": "module",
        "fct-source": "src/LLVM-FFI-Analysis.html",
        "fct-type": "module",
        "title": "Analysis"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Analysis",
        "module": "LLVM.FFI.Analysis",
        "name": "Analysis",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Analysis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Analysis.html#t:VerifierFailureAction",
      "description": {
        "fct-module": "LLVM.FFI.Analysis",
        "fct-package": "llvm-ht",
        "fct-signature": "type",
        "fct-source": "src/LLVM-FFI-Analysis.html#VerifierFailureAction",
        "fct-type": "type",
        "title": "VerifierFailureAction"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Analysis",
        "module": "LLVM.FFI.Analysis",
        "name": "VerifierFailureAction",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Verifier Failure Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Analysis.html#v:verifyFunction",
      "description": {
        "fct-module": "LLVM.FFI.Analysis",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e VerifierFailureAction -\u003e IO CInt",
        "fct-source": "src/LLVM-FFI-Analysis.html#verifyFunction",
        "fct-type": "function",
        "title": "verifyFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Analysis",
        "module": "LLVM.FFI.Analysis",
        "name": "verifyFunction",
        "normalized": "ValueRef-\u003eVerifierFailureAction-\u003eIO CInt",
        "package": "llvm-ht",
        "partial": "Function",
        "signature": "ValueRef-\u003eVerifierFailureAction-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Analysis.html#v:verifyModule",
      "description": {
        "fct-module": "LLVM.FFI.Analysis",
        "fct-package": "llvm-ht",
        "fct-signature": "ModuleRef -\u003e VerifierFailureAction -\u003e Ptr CString -\u003e IO CInt",
        "fct-source": "src/LLVM-FFI-Analysis.html#verifyModule",
        "fct-type": "function",
        "title": "verifyModule"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Analysis",
        "module": "LLVM.FFI.Analysis",
        "name": "verifyModule",
        "normalized": "ModuleRef-\u003eVerifierFailureAction-\u003ePtr CString-\u003eIO CInt",
        "package": "llvm-ht",
        "partial": "Module",
        "signature": "ModuleRef-\u003eVerifierFailureAction-\u003ePtr CString-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Analysis.html#v:viewFunctionCFG",
      "description": {
        "fct-module": "LLVM.FFI.Analysis",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Analysis.html#viewFunctionCFG",
        "fct-type": "function",
        "title": "viewFunctionCFG"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Analysis",
        "module": "LLVM.FFI.Analysis",
        "name": "viewFunctionCFG",
        "normalized": "ValueRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Function CFG",
        "signature": "ValueRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Analysis.html#v:viewFunctionCFGOnly",
      "description": {
        "fct-module": "LLVM.FFI.Analysis",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Analysis.html#viewFunctionCFGOnly",
        "fct-type": "function",
        "title": "viewFunctionCFGOnly"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Analysis",
        "module": "LLVM.FFI.Analysis",
        "name": "viewFunctionCFGOnly",
        "normalized": "ValueRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Function CFGOnly",
        "signature": "ValueRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-BitReader.html#",
      "description": {
        "fct-module": "LLVM.FFI.BitReader",
        "fct-package": "llvm-ht",
        "fct-signature": "module",
        "fct-source": "src/LLVM-FFI-BitReader.html",
        "fct-type": "module",
        "title": "BitReader"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI BitReader",
        "module": "LLVM.FFI.BitReader",
        "name": "BitReader",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Bit Reader",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-BitReader.html#v:getBitcodeModuleProvider",
      "description": {
        "fct-module": "LLVM.FFI.BitReader",
        "fct-package": "llvm-ht",
        "fct-signature": "MemoryBufferRef -\u003e Ptr ModuleProviderRef -\u003e Ptr CString -\u003e IO CInt",
        "fct-source": "src/LLVM-FFI-BitReader.html#getBitcodeModuleProvider",
        "fct-type": "function",
        "title": "getBitcodeModuleProvider"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI BitReader",
        "module": "LLVM.FFI.BitReader",
        "name": "getBitcodeModuleProvider",
        "normalized": "MemoryBufferRef-\u003ePtr ModuleProviderRef-\u003ePtr CString-\u003eIO CInt",
        "package": "llvm-ht",
        "partial": "Bitcode Module Provider",
        "signature": "MemoryBufferRef-\u003ePtr ModuleProviderRef-\u003ePtr CString-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-BitReader.html#v:getBitcodeModuleProviderInContext",
      "description": {
        "fct-module": "LLVM.FFI.BitReader",
        "fct-package": "llvm-ht",
        "fct-signature": "ContextRef -\u003e MemoryBufferRef -\u003e Ptr ModuleProviderRef -\u003e Ptr CString -\u003e IO CInt",
        "fct-source": "src/LLVM-FFI-BitReader.html#getBitcodeModuleProviderInContext",
        "fct-type": "function",
        "title": "getBitcodeModuleProviderInContext"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI BitReader",
        "module": "LLVM.FFI.BitReader",
        "name": "getBitcodeModuleProviderInContext",
        "normalized": "ContextRef-\u003eMemoryBufferRef-\u003ePtr ModuleProviderRef-\u003ePtr CString-\u003eIO CInt",
        "package": "llvm-ht",
        "partial": "Bitcode Module Provider In Context",
        "signature": "ContextRef-\u003eMemoryBufferRef-\u003ePtr ModuleProviderRef-\u003ePtr CString-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-BitReader.html#v:parseBitcode",
      "description": {
        "fct-module": "LLVM.FFI.BitReader",
        "fct-package": "llvm-ht",
        "fct-signature": "MemoryBufferRef -\u003e Ptr ModuleRef -\u003e Ptr CString -\u003e IO CInt",
        "fct-source": "src/LLVM-FFI-BitReader.html#parseBitcode",
        "fct-type": "function",
        "title": "parseBitcode"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI BitReader",
        "module": "LLVM.FFI.BitReader",
        "name": "parseBitcode",
        "normalized": "MemoryBufferRef-\u003ePtr ModuleRef-\u003ePtr CString-\u003eIO CInt",
        "package": "llvm-ht",
        "partial": "Bitcode",
        "signature": "MemoryBufferRef-\u003ePtr ModuleRef-\u003ePtr CString-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-BitReader.html#v:parseBitcodeInContext",
      "description": {
        "fct-module": "LLVM.FFI.BitReader",
        "fct-package": "llvm-ht",
        "fct-signature": "ContextRef -\u003e MemoryBufferRef -\u003e Ptr ModuleRef -\u003e Ptr CString -\u003e IO CInt",
        "fct-source": "src/LLVM-FFI-BitReader.html#parseBitcodeInContext",
        "fct-type": "function",
        "title": "parseBitcodeInContext"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI BitReader",
        "module": "LLVM.FFI.BitReader",
        "name": "parseBitcodeInContext",
        "normalized": "ContextRef-\u003eMemoryBufferRef-\u003ePtr ModuleRef-\u003ePtr CString-\u003eIO CInt",
        "package": "llvm-ht",
        "partial": "Bitcode In Context",
        "signature": "ContextRef-\u003eMemoryBufferRef-\u003ePtr ModuleRef-\u003ePtr CString-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-BitWriter.html#",
      "description": {
        "fct-module": "LLVM.FFI.BitWriter",
        "fct-package": "llvm-ht",
        "fct-signature": "module",
        "fct-source": "src/LLVM-FFI-BitWriter.html",
        "fct-type": "module",
        "title": "BitWriter"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI BitWriter",
        "module": "LLVM.FFI.BitWriter",
        "name": "BitWriter",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Bit Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-BitWriter.html#v:writeBitcodeToFile",
      "description": {
        "fct-module": "LLVM.FFI.BitWriter",
        "fct-package": "llvm-ht",
        "fct-signature": "ModuleRef -\u003e CString -\u003e IO CInt",
        "fct-source": "src/LLVM-FFI-BitWriter.html#writeBitcodeToFile",
        "fct-type": "function",
        "title": "writeBitcodeToFile"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI BitWriter",
        "module": "LLVM.FFI.BitWriter",
        "name": "writeBitcodeToFile",
        "normalized": "ModuleRef-\u003eCString-\u003eIO CInt",
        "package": "llvm-ht",
        "partial": "Bitcode To File",
        "signature": "ModuleRef-\u003eCString-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-BitWriter.html#v:writeBitcodeToFileHandle",
      "description": {
        "fct-module": "LLVM.FFI.BitWriter",
        "fct-package": "llvm-ht",
        "fct-signature": "ModuleRef -\u003e CInt -\u003e IO CInt",
        "fct-source": "src/LLVM-FFI-BitWriter.html#writeBitcodeToFileHandle",
        "fct-type": "function",
        "title": "writeBitcodeToFileHandle"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI BitWriter",
        "module": "LLVM.FFI.BitWriter",
        "name": "writeBitcodeToFileHandle",
        "normalized": "ModuleRef-\u003eCInt-\u003eIO CInt",
        "package": "llvm-ht",
        "partial": "Bitcode To File Handle",
        "signature": "ModuleRef-\u003eCInt-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides direct access to the LLVM C bindings.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "module",
        "fct-source": "src/LLVM-FFI-Core.html",
        "fct-type": "module",
        "title": "Core"
      },
      "index": {
        "description": "This module provides direct access to the LLVM bindings",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "Core",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Core",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:Attribute",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-FFI-Core.html#Attribute",
        "fct-type": "data",
        "title": "Attribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "Attribute",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:BasicBlock",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "type",
        "fct-source": "src/LLVM-FFI-Core.html#BasicBlock",
        "fct-type": "type",
        "title": "BasicBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "BasicBlock",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Basic Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:BasicBlockRef",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "type",
        "fct-source": "src/LLVM-FFI-Core.html#BasicBlockRef",
        "fct-type": "type",
        "title": "BasicBlockRef"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "BasicBlockRef",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Basic Block Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:Builder",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-FFI-Core.html#Builder",
        "fct-type": "data",
        "title": "Builder"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "Builder",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:BuilderRef",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "type",
        "fct-source": "src/LLVM-FFI-Core.html#BuilderRef",
        "fct-type": "type",
        "title": "BuilderRef"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "BuilderRef",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Builder Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:CallingConvention",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-FFI-Core.html#CallingConvention",
        "fct-type": "data",
        "title": "CallingConvention"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "CallingConvention",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Calling Convention",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:Context",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-FFI-Core.html#Context",
        "fct-type": "data",
        "title": "Context"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "Context",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:ContextRef",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "type",
        "fct-source": "src/LLVM-FFI-Core.html#ContextRef",
        "fct-type": "type",
        "title": "ContextRef"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "ContextRef",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Context Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:Linkage",
      "description": {
        "fct-descr": "\u003cp\u003eAn enumeration for the kinds of linkage for global values.\n\u003c/p\u003e",
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "data",
        "title": "Linkage"
      },
      "index": {
        "description": "An enumeration for the kinds of linkage for global values",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "Linkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:MemoryBuffer",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-FFI-Core.html#MemoryBuffer",
        "fct-type": "data",
        "title": "MemoryBuffer"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "MemoryBuffer",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Memory Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:MemoryBufferRef",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "type",
        "fct-source": "src/LLVM-FFI-Core.html#MemoryBufferRef",
        "fct-type": "type",
        "title": "MemoryBufferRef"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "MemoryBufferRef",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Memory Buffer Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:Module",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-FFI-Core.html#Module",
        "fct-type": "data",
        "title": "Module"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "Module",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:ModuleProvider",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-FFI-Core.html#ModuleProvider",
        "fct-type": "data",
        "title": "ModuleProvider"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "ModuleProvider",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Module Provider",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:ModuleProviderRef",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "type",
        "fct-source": "src/LLVM-FFI-Core.html#ModuleProviderRef",
        "fct-type": "type",
        "title": "ModuleProviderRef"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "ModuleProviderRef",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Module Provider Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:ModuleRef",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "type",
        "fct-source": "src/LLVM-FFI-Core.html#ModuleRef",
        "fct-type": "type",
        "title": "ModuleRef"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "ModuleRef",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Module Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:PassManager",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-FFI-Core.html#PassManager",
        "fct-type": "data",
        "title": "PassManager"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "PassManager",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Pass Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:PassManagerRef",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "type",
        "fct-source": "src/LLVM-FFI-Core.html#PassManagerRef",
        "fct-type": "type",
        "title": "PassManagerRef"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "PassManagerRef",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Pass Manager Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:Type",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-FFI-Core.html#Type",
        "fct-type": "data",
        "title": "Type"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "Type",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:TypeKind",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-FFI-Core.html#TypeKind",
        "fct-type": "data",
        "title": "TypeKind"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "TypeKind",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Type Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:TypeRef",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "type",
        "fct-source": "src/LLVM-FFI-Core.html#TypeRef",
        "fct-type": "type",
        "title": "TypeRef"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "TypeRef",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Type Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:Value",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-FFI-Core.html#Value",
        "fct-type": "data",
        "title": "Value"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "Value",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:ValueRef",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "type",
        "fct-source": "src/LLVM-FFI-Core.html#ValueRef",
        "fct-type": "type",
        "title": "ValueRef"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "ValueRef",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Value Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:Visibility",
      "description": {
        "fct-descr": "\u003cp\u003eAn enumeration for the kinds of visibility of global values.\n\u003c/p\u003e",
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-FFI-Core.html#Visibility",
        "fct-type": "data",
        "title": "Visibility"
      },
      "index": {
        "description": "An enumeration for the kinds of visibility of global values",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "Visibility",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Visibility",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:AppendingLinkage",
      "description": {
        "fct-descr": "\u003cp\u003eSpecial purpose, only applies to global arrays\n\u003c/p\u003e",
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "AppendingLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "AppendingLinkage"
      },
      "index": {
        "description": "Special purpose only applies to global arrays",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "AppendingLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Appending Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:ArrayTypeKind",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ArrayTypeKind",
        "fct-source": "src/LLVM-FFI-Core.html#TypeKind",
        "fct-type": "function",
        "title": "ArrayTypeKind"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "ArrayTypeKind",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Array Type Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:AvailableExternallyLinkage",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "AvailableExternallyLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "AvailableExternallyLinkage"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "AvailableExternallyLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Available Externally Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:ByValAttribute",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ByValAttribute",
        "fct-source": "src/LLVM-FFI-Core.html#Attribute",
        "fct-type": "function",
        "title": "ByValAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "ByValAttribute",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "By Val Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:C",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "C",
        "fct-source": "src/LLVM-FFI-Core.html#CallingConvention",
        "fct-type": "function",
        "title": "C"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "C",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:Cold",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Cold",
        "fct-source": "src/LLVM-FFI-Core.html#CallingConvention",
        "fct-type": "function",
        "title": "Cold"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "Cold",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Cold",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:CommonLinkage",
      "description": {
        "fct-descr": "\u003cp\u003eTentative definitions\n\u003c/p\u003e",
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "CommonLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "CommonLinkage"
      },
      "index": {
        "description": "Tentative definitions",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "CommonLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Common Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:DLLExportLinkage",
      "description": {
        "fct-descr": "\u003cp\u003eFunction to be accessible from DLL\n\u003c/p\u003e",
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "DLLExportLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "DLLExportLinkage"
      },
      "index": {
        "description": "Function to be accessible from DLL",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "DLLExportLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "DLLExport Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:DLLImportLinkage",
      "description": {
        "fct-descr": "\u003cp\u003eFunction to be imported from DLL\n\u003c/p\u003e",
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "DLLImportLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "DLLImportLinkage"
      },
      "index": {
        "description": "Function to be imported from DLL",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "DLLImportLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "DLLImport Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:DefaultVisibility",
      "description": {
        "fct-descr": "\u003cp\u003eThe GV is visible\n\u003c/p\u003e",
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "DefaultVisibility",
        "fct-source": "src/LLVM-FFI-Core.html#Visibility",
        "fct-type": "function",
        "title": "DefaultVisibility"
      },
      "index": {
        "description": "The GV is visible",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "DefaultVisibility",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Default Visibility",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:DoubleTypeKind",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "DoubleTypeKind",
        "fct-source": "src/LLVM-FFI-Core.html#TypeKind",
        "fct-type": "function",
        "title": "DoubleTypeKind"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "DoubleTypeKind",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Double Type Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:ExternalLinkage",
      "description": {
        "fct-descr": "\u003cp\u003eExternally visible function\n\u003c/p\u003e",
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ExternalLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "ExternalLinkage"
      },
      "index": {
        "description": "Externally visible function",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "ExternalLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "External Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:ExternalWeakLinkage",
      "description": {
        "fct-descr": "\u003cp\u003eExternalWeak linkage description\n\u003c/p\u003e",
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ExternalWeakLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "ExternalWeakLinkage"
      },
      "index": {
        "description": "ExternalWeak linkage description",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "ExternalWeakLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "External Weak Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:FP128TypeKind",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "FP128TypeKind",
        "fct-source": "src/LLVM-FFI-Core.html#TypeKind",
        "fct-type": "function",
        "title": "FP128TypeKind"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "FP128TypeKind",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "FP Type Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:Fast",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Fast",
        "fct-source": "src/LLVM-FFI-Core.html#CallingConvention",
        "fct-type": "function",
        "title": "Fast"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "Fast",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Fast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:FloatTypeKind",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "FloatTypeKind",
        "fct-source": "src/LLVM-FFI-Core.html#TypeKind",
        "fct-type": "function",
        "title": "FloatTypeKind"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "FloatTypeKind",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Float Type Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:FunctionTypeKind",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "FunctionTypeKind",
        "fct-source": "src/LLVM-FFI-Core.html#TypeKind",
        "fct-type": "function",
        "title": "FunctionTypeKind"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "FunctionTypeKind",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Function Type Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:GhostLinkage",
      "description": {
        "fct-descr": "\u003cp\u003eStand-in functions for streaming fns from BC files    \n\u003c/p\u003e",
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "GhostLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "GhostLinkage"
      },
      "index": {
        "description": "Stand-in functions for streaming fns from BC files",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "GhostLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Ghost Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:HiddenVisibility",
      "description": {
        "fct-descr": "\u003cp\u003eThe GV is hidden\n\u003c/p\u003e",
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "HiddenVisibility",
        "fct-source": "src/LLVM-FFI-Core.html#Visibility",
        "fct-type": "function",
        "title": "HiddenVisibility"
      },
      "index": {
        "description": "The GV is hidden",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "HiddenVisibility",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Hidden Visibility",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:InRegAttribute",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "InRegAttribute",
        "fct-source": "src/LLVM-FFI-Core.html#Attribute",
        "fct-type": "function",
        "title": "InRegAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "InRegAttribute",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "In Reg Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:IntegerTypeKind",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "IntegerTypeKind",
        "fct-source": "src/LLVM-FFI-Core.html#TypeKind",
        "fct-type": "function",
        "title": "IntegerTypeKind"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "IntegerTypeKind",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Integer Type Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:InternalLinkage",
      "description": {
        "fct-descr": "\u003cp\u003eRename collisions when linking (static functions)\n\u003c/p\u003e",
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "InternalLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "InternalLinkage"
      },
      "index": {
        "description": "Rename collisions when linking static functions",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "InternalLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Internal Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:LabelTypeKind",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "LabelTypeKind",
        "fct-source": "src/LLVM-FFI-Core.html#TypeKind",
        "fct-type": "function",
        "title": "LabelTypeKind"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "LabelTypeKind",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Label Type Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:LinkOnceAnyLinkage",
      "description": {
        "fct-descr": "\u003cp\u003eKeep one copy of function when linking (inline)\n\u003c/p\u003e",
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "LinkOnceAnyLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "LinkOnceAnyLinkage"
      },
      "index": {
        "description": "Keep one copy of function when linking inline",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "LinkOnceAnyLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Link Once Any Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:LinkOnceODRLinkage",
      "description": {
        "fct-descr": "\u003cp\u003eSame, but only replaced by something equivalent.\n\u003c/p\u003e",
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "LinkOnceODRLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "LinkOnceODRLinkage"
      },
      "index": {
        "description": "Same but only replaced by something equivalent",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "LinkOnceODRLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Link Once ODRLinkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:LinkerPrivateLinkage",
      "description": {
        "fct-descr": "\u003cp\u003eLike Private, but linker removes.\n\u003c/p\u003e",
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "LinkerPrivateLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "LinkerPrivateLinkage"
      },
      "index": {
        "description": "Like Private but linker removes",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "LinkerPrivateLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Linker Private Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:NestAttribute",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "NestAttribute",
        "fct-source": "src/LLVM-FFI-Core.html#Attribute",
        "fct-type": "function",
        "title": "NestAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "NestAttribute",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Nest Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:NoAliasAttribute",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "NoAliasAttribute",
        "fct-source": "src/LLVM-FFI-Core.html#Attribute",
        "fct-type": "function",
        "title": "NoAliasAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "NoAliasAttribute",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "No Alias Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:NoReturnAttribute",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "NoReturnAttribute",
        "fct-source": "src/LLVM-FFI-Core.html#Attribute",
        "fct-type": "function",
        "title": "NoReturnAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "NoReturnAttribute",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "No Return Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:NoUnwindAttribute",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "NoUnwindAttribute",
        "fct-source": "src/LLVM-FFI-Core.html#Attribute",
        "fct-type": "function",
        "title": "NoUnwindAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "NoUnwindAttribute",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "No Unwind Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:OpaqueTypeKind",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "OpaqueTypeKind",
        "fct-source": "src/LLVM-FFI-Core.html#TypeKind",
        "fct-type": "function",
        "title": "OpaqueTypeKind"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "OpaqueTypeKind",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Opaque Type Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:PPC_FP128TypeKind",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "PPC_FP128TypeKind",
        "fct-source": "src/LLVM-FFI-Core.html#TypeKind",
        "fct-type": "function",
        "title": "PPC_FP128TypeKind"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "PPC_FP128TypeKind",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "PPC FP Type Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:PointerTypeKind",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "PointerTypeKind",
        "fct-source": "src/LLVM-FFI-Core.html#TypeKind",
        "fct-type": "function",
        "title": "PointerTypeKind"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "PointerTypeKind",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Pointer Type Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:PrivateLinkage",
      "description": {
        "fct-descr": "\u003cp\u003eLike Internal, but omit from symbol table\n\u003c/p\u003e",
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "PrivateLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "PrivateLinkage"
      },
      "index": {
        "description": "Like Internal but omit from symbol table",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "PrivateLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Private Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:ProtectedVisibility",
      "description": {
        "fct-descr": "\u003cp\u003eThe GV is protected\n\u003c/p\u003e",
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ProtectedVisibility",
        "fct-source": "src/LLVM-FFI-Core.html#Visibility",
        "fct-type": "function",
        "title": "ProtectedVisibility"
      },
      "index": {
        "description": "The GV is protected",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "ProtectedVisibility",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Protected Visibility",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:ReadNoneAttribute",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ReadNoneAttribute",
        "fct-source": "src/LLVM-FFI-Core.html#Attribute",
        "fct-type": "function",
        "title": "ReadNoneAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "ReadNoneAttribute",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Read None Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:ReadOnlyAttribute",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ReadOnlyAttribute",
        "fct-source": "src/LLVM-FFI-Core.html#Attribute",
        "fct-type": "function",
        "title": "ReadOnlyAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "ReadOnlyAttribute",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Read Only Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:SExtAttribute",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "SExtAttribute",
        "fct-source": "src/LLVM-FFI-Core.html#Attribute",
        "fct-type": "function",
        "title": "SExtAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "SExtAttribute",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "SExt Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:StructRetAttribute",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "StructRetAttribute",
        "fct-source": "src/LLVM-FFI-Core.html#Attribute",
        "fct-type": "function",
        "title": "StructRetAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "StructRetAttribute",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Struct Ret Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:StructTypeKind",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "StructTypeKind",
        "fct-source": "src/LLVM-FFI-Core.html#TypeKind",
        "fct-type": "function",
        "title": "StructTypeKind"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "StructTypeKind",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Struct Type Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:VectorTypeKind",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "VectorTypeKind",
        "fct-source": "src/LLVM-FFI-Core.html#TypeKind",
        "fct-type": "function",
        "title": "VectorTypeKind"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "VectorTypeKind",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Vector Type Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:VoidTypeKind",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "VoidTypeKind",
        "fct-source": "src/LLVM-FFI-Core.html#TypeKind",
        "fct-type": "function",
        "title": "VoidTypeKind"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "VoidTypeKind",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Void Type Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:WeakAnyLinkage",
      "description": {
        "fct-descr": "\u003cp\u003eKeep one copy of named function when linking (weak)\n\u003c/p\u003e",
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "WeakAnyLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "WeakAnyLinkage"
      },
      "index": {
        "description": "Keep one copy of named function when linking weak",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "WeakAnyLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Weak Any Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:WeakODRLinkage",
      "description": {
        "fct-descr": "\u003cp\u003eSame, but only replaced by something equivalent.\n\u003c/p\u003e",
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "WeakODRLinkage",
        "fct-source": "src/LLVM-FFI-Core.html#Linkage",
        "fct-type": "function",
        "title": "WeakODRLinkage"
      },
      "index": {
        "description": "Same but only replaced by something equivalent",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "WeakODRLinkage",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Weak ODRLinkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:X86FastCall",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "X86FastCall",
        "fct-source": "src/LLVM-FFI-Core.html#CallingConvention",
        "fct-type": "function",
        "title": "X86FastCall"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "X86FastCall",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Fast Call",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:X86StdCall",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "X86StdCall",
        "fct-source": "src/LLVM-FFI-Core.html#CallingConvention",
        "fct-type": "function",
        "title": "X86StdCall"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "X86StdCall",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Std Call",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:X86_FP80TypeKind",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "X86_FP80TypeKind",
        "fct-source": "src/LLVM-FFI-Core.html#TypeKind",
        "fct-type": "function",
        "title": "X86_FP80TypeKind"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "X86_FP80TypeKind",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "FP Type Kind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:ZExtAttribute",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ZExtAttribute",
        "fct-source": "src/LLVM-FFI-Core.html#Attribute",
        "fct-type": "function",
        "title": "ZExtAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "ZExtAttribute",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "ZExt Attribute",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:addAttribute",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e CAttribute -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#addAttribute",
        "fct-type": "function",
        "title": "addAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "addAttribute",
        "normalized": "ValueRef-\u003eCAttribute-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Attribute",
        "signature": "ValueRef-\u003eCAttribute-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:addCase",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef -\u003e BasicBlockRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#addCase",
        "fct-type": "function",
        "title": "addCase"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "addCase",
        "normalized": "ValueRef-\u003eValueRef-\u003eBasicBlockRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Case",
        "signature": "ValueRef-\u003eValueRef-\u003eBasicBlockRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:addFunction",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ModuleRef-\u003e CString-\u003e TypeRef-\u003e IO ValueRef",
        "fct-type": "function",
        "title": "addFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "addFunction",
        "normalized": "ModuleRef-\u003eCString-\u003eTypeRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Function",
        "signature": "ModuleRef-\u003eCString-\u003eTypeRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:addFunctionAttr",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e CAttribute -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#addFunctionAttr",
        "fct-type": "function",
        "title": "addFunctionAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "addFunctionAttr",
        "normalized": "ValueRef-\u003eCAttribute-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Function Attr",
        "signature": "ValueRef-\u003eCAttribute-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:addGlobal",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ModuleRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#addGlobal",
        "fct-type": "function",
        "title": "addGlobal"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "addGlobal",
        "normalized": "ModuleRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Global",
        "signature": "ModuleRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:addIncoming",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e Ptr ValueRef -\u003e Ptr ValueRef -\u003e CUInt -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#addIncoming",
        "fct-type": "function",
        "title": "addIncoming"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "addIncoming",
        "normalized": "ValueRef-\u003ePtr ValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Incoming",
        "signature": "ValueRef-\u003ePtr ValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:addInstrAttribute",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e CUInt -\u003e CAttribute -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#addInstrAttribute",
        "fct-type": "function",
        "title": "addInstrAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "addInstrAttribute",
        "normalized": "ValueRef-\u003eCUInt-\u003eCAttribute-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Instr Attribute",
        "signature": "ValueRef-\u003eCUInt-\u003eCAttribute-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:addTypeName",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ModuleRef -\u003e CString -\u003e TypeRef -\u003e IO CInt",
        "fct-source": "src/LLVM-FFI-Core.html#addTypeName",
        "fct-type": "function",
        "title": "addTypeName"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "addTypeName",
        "normalized": "ModuleRef-\u003eCString-\u003eTypeRef-\u003eIO CInt",
        "package": "llvm-ht",
        "partial": "Type Name",
        "signature": "ModuleRef-\u003eCString-\u003eTypeRef-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:alignOf",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#alignOf",
        "fct-type": "function",
        "title": "alignOf"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "alignOf",
        "normalized": "TypeRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Of",
        "signature": "TypeRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:appendBasicBlock",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef-\u003e CString-\u003e IO BasicBlockRef",
        "fct-type": "function",
        "title": "appendBasicBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "appendBasicBlock",
        "normalized": "ValueRef-\u003eCString-\u003eIO BasicBlockRef",
        "package": "llvm-ht",
        "partial": "Basic Block",
        "signature": "ValueRef-\u003eCString-\u003eIO BasicBlockRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:appendBasicBlockInContext",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ContextRef -\u003e ValueRef -\u003e CString -\u003e IO BasicBlockRef",
        "fct-source": "src/LLVM-FFI-Core.html#appendBasicBlockInContext",
        "fct-type": "function",
        "title": "appendBasicBlockInContext"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "appendBasicBlockInContext",
        "normalized": "ContextRef-\u003eValueRef-\u003eCString-\u003eIO BasicBlockRef",
        "package": "llvm-ht",
        "partial": "Basic Block In Context",
        "signature": "ContextRef-\u003eValueRef-\u003eCString-\u003eIO BasicBlockRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:arrayType",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef-\u003e CUInt-\u003e TypeRef",
        "fct-type": "function",
        "title": "arrayType"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "arrayType",
        "normalized": "TypeRef-\u003eCUInt-\u003eTypeRef",
        "package": "llvm-ht",
        "partial": "Type",
        "signature": "TypeRef-\u003eCUInt-\u003eTypeRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:basicBlockAsValue",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BasicBlockRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#basicBlockAsValue",
        "fct-type": "function",
        "title": "basicBlockAsValue"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "basicBlockAsValue",
        "normalized": "BasicBlockRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "Block As Value",
        "signature": "BasicBlockRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildAShr",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildAShr",
        "fct-type": "function",
        "title": "buildAShr"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildAShr",
        "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "AShr",
        "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildAdd",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildAdd",
        "fct-type": "function",
        "title": "buildAdd"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildAdd",
        "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Add",
        "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildAggregateRet",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e Ptr ValueRef -\u003e CUInt -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildAggregateRet",
        "fct-type": "function",
        "title": "buildAggregateRet"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildAggregateRet",
        "normalized": "BuilderRef-\u003ePtr ValueRef-\u003eCUInt-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Aggregate Ret",
        "signature": "BuilderRef-\u003ePtr ValueRef-\u003eCUInt-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildAlloca",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildAlloca",
        "fct-type": "function",
        "title": "buildAlloca"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildAlloca",
        "normalized": "BuilderRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Alloca",
        "signature": "BuilderRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildAnd",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildAnd",
        "fct-type": "function",
        "title": "buildAnd"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildAnd",
        "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "And",
        "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildArrayAlloca",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e TypeRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildArrayAlloca",
        "fct-type": "function",
        "title": "buildArrayAlloca"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildArrayAlloca",
        "normalized": "BuilderRef-\u003eTypeRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Array Alloca",
        "signature": "BuilderRef-\u003eTypeRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildArrayMalloc",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e TypeRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildArrayMalloc",
        "fct-type": "function",
        "title": "buildArrayMalloc"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildArrayMalloc",
        "normalized": "BuilderRef-\u003eTypeRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Array Malloc",
        "signature": "BuilderRef-\u003eTypeRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildBitCast",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildBitCast",
        "fct-type": "function",
        "title": "buildBitCast"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildBitCast",
        "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Bit Cast",
        "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildBr",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e BasicBlockRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildBr",
        "fct-type": "function",
        "title": "buildBr"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildBr",
        "normalized": "BuilderRef-\u003eBasicBlockRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Br",
        "signature": "BuilderRef-\u003eBasicBlockRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildCall",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e Ptr ValueRef -\u003e CUInt -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildCall",
        "fct-type": "function",
        "title": "buildCall"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildCall",
        "normalized": "BuilderRef-\u003eValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Call",
        "signature": "BuilderRef-\u003eValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildCondBr",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e BasicBlockRef -\u003e BasicBlockRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildCondBr",
        "fct-type": "function",
        "title": "buildCondBr"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildCondBr",
        "normalized": "BuilderRef-\u003eValueRef-\u003eBasicBlockRef-\u003eBasicBlockRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Cond Br",
        "signature": "BuilderRef-\u003eValueRef-\u003eBasicBlockRef-\u003eBasicBlockRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildExactSDiv",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildExactSDiv",
        "fct-type": "function",
        "title": "buildExactSDiv"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildExactSDiv",
        "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Exact SDiv",
        "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildExtractElement",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildExtractElement",
        "fct-type": "function",
        "title": "buildExtractElement"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildExtractElement",
        "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Extract Element",
        "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildExtractValue",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e CUInt -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildExtractValue",
        "fct-type": "function",
        "title": "buildExtractValue"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildExtractValue",
        "normalized": "BuilderRef-\u003eValueRef-\u003eCUInt-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Extract Value",
        "signature": "BuilderRef-\u003eValueRef-\u003eCUInt-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildFAdd",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildFAdd",
        "fct-type": "function",
        "title": "buildFAdd"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildFAdd",
        "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "FAdd",
        "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildFCmp",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e CInt -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildFCmp",
        "fct-type": "function",
        "title": "buildFCmp"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildFCmp",
        "normalized": "BuilderRef-\u003eCInt-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "FCmp",
        "signature": "BuilderRef-\u003eCInt-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildFDiv",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildFDiv",
        "fct-type": "function",
        "title": "buildFDiv"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildFDiv",
        "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "FDiv",
        "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildFMul",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildFMul",
        "fct-type": "function",
        "title": "buildFMul"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildFMul",
        "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "FMul",
        "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildFPCast",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildFPCast",
        "fct-type": "function",
        "title": "buildFPCast"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildFPCast",
        "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "FPCast",
        "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildFPExt",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildFPExt",
        "fct-type": "function",
        "title": "buildFPExt"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildFPExt",
        "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "FPExt",
        "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildFPToSI",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildFPToSI",
        "fct-type": "function",
        "title": "buildFPToSI"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildFPToSI",
        "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "FPTo SI",
        "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildFPToUI",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildFPToUI",
        "fct-type": "function",
        "title": "buildFPToUI"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildFPToUI",
        "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "FPTo UI",
        "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildFPTrunc",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildFPTrunc",
        "fct-type": "function",
        "title": "buildFPTrunc"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildFPTrunc",
        "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "FPTrunc",
        "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildFRem",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildFRem",
        "fct-type": "function",
        "title": "buildFRem"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildFRem",
        "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "FRem",
        "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildFSub",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildFSub",
        "fct-type": "function",
        "title": "buildFSub"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildFSub",
        "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "FSub",
        "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildFree",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildFree",
        "fct-type": "function",
        "title": "buildFree"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildFree",
        "normalized": "BuilderRef-\u003eValueRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Free",
        "signature": "BuilderRef-\u003eValueRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildGEP",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e Ptr ValueRef -\u003e CUInt -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildGEP",
        "fct-type": "function",
        "title": "buildGEP"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildGEP",
        "normalized": "BuilderRef-\u003eValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "GEP",
        "signature": "BuilderRef-\u003eValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildGlobalString",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e CString -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildGlobalString",
        "fct-type": "function",
        "title": "buildGlobalString"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildGlobalString",
        "normalized": "BuilderRef-\u003eCString-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Global String",
        "signature": "BuilderRef-\u003eCString-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildGlobalStringPtr",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e CString -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildGlobalStringPtr",
        "fct-type": "function",
        "title": "buildGlobalStringPtr"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildGlobalStringPtr",
        "normalized": "BuilderRef-\u003eCString-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Global String Ptr",
        "signature": "BuilderRef-\u003eCString-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildICmp",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e CInt -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildICmp",
        "fct-type": "function",
        "title": "buildICmp"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildICmp",
        "normalized": "BuilderRef-\u003eCInt-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "ICmp",
        "signature": "BuilderRef-\u003eCInt-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildInBoundsGEP",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e Ptr ValueRef -\u003e CUInt -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildInBoundsGEP",
        "fct-type": "function",
        "title": "buildInBoundsGEP"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildInBoundsGEP",
        "normalized": "BuilderRef-\u003eValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "In Bounds GEP",
        "signature": "BuilderRef-\u003eValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildInsertElement",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildInsertElement",
        "fct-type": "function",
        "title": "buildInsertElement"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildInsertElement",
        "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Insert Element",
        "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildInsertValue",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CUInt -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildInsertValue",
        "fct-type": "function",
        "title": "buildInsertValue"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildInsertValue",
        "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCUInt-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Insert Value",
        "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCUInt-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildIntCast",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildIntCast",
        "fct-type": "function",
        "title": "buildIntCast"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildIntCast",
        "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Int Cast",
        "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildIntToPtr",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildIntToPtr",
        "fct-type": "function",
        "title": "buildIntToPtr"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildIntToPtr",
        "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Int To Ptr",
        "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildInvoke",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e Ptr ValueRef -\u003e CUInt -\u003e BasicBlockRef -\u003e BasicBlockRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildInvoke",
        "fct-type": "function",
        "title": "buildInvoke"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildInvoke",
        "normalized": "BuilderRef-\u003eValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eBasicBlockRef-\u003eBasicBlockRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Invoke",
        "signature": "BuilderRef-\u003eValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eBasicBlockRef-\u003eBasicBlockRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildIsNotNull",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildIsNotNull",
        "fct-type": "function",
        "title": "buildIsNotNull"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildIsNotNull",
        "normalized": "BuilderRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Is Not Null",
        "signature": "BuilderRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildIsNull",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildIsNull",
        "fct-type": "function",
        "title": "buildIsNull"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildIsNull",
        "normalized": "BuilderRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Is Null",
        "signature": "BuilderRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildLShr",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildLShr",
        "fct-type": "function",
        "title": "buildLShr"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildLShr",
        "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "LShr",
        "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildLoad",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildLoad",
        "fct-type": "function",
        "title": "buildLoad"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildLoad",
        "normalized": "BuilderRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Load",
        "signature": "BuilderRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildMalloc",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildMalloc",
        "fct-type": "function",
        "title": "buildMalloc"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildMalloc",
        "normalized": "BuilderRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Malloc",
        "signature": "BuilderRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildMul",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildMul",
        "fct-type": "function",
        "title": "buildMul"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildMul",
        "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Mul",
        "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildNSWAdd",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildNSWAdd",
        "fct-type": "function",
        "title": "buildNSWAdd"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildNSWAdd",
        "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "NSWAdd",
        "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildNeg",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildNeg",
        "fct-type": "function",
        "title": "buildNeg"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildNeg",
        "normalized": "BuilderRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Neg",
        "signature": "BuilderRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildNot",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildNot",
        "fct-type": "function",
        "title": "buildNot"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildNot",
        "normalized": "BuilderRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Not",
        "signature": "BuilderRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildOr",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildOr",
        "fct-type": "function",
        "title": "buildOr"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildOr",
        "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Or",
        "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildPhi",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildPhi",
        "fct-type": "function",
        "title": "buildPhi"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildPhi",
        "normalized": "BuilderRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Phi",
        "signature": "BuilderRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildPointerCast",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildPointerCast",
        "fct-type": "function",
        "title": "buildPointerCast"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildPointerCast",
        "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Pointer Cast",
        "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildPtrDiff",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildPtrDiff",
        "fct-type": "function",
        "title": "buildPtrDiff"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildPtrDiff",
        "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Ptr Diff",
        "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildPtrToInt",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildPtrToInt",
        "fct-type": "function",
        "title": "buildPtrToInt"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildPtrToInt",
        "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Ptr To Int",
        "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildRet",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildRet",
        "fct-type": "function",
        "title": "buildRet"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildRet",
        "normalized": "BuilderRef-\u003eValueRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Ret",
        "signature": "BuilderRef-\u003eValueRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildRetVoid",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildRetVoid",
        "fct-type": "function",
        "title": "buildRetVoid"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildRetVoid",
        "normalized": "BuilderRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Ret Void",
        "signature": "BuilderRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildSDiv",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildSDiv",
        "fct-type": "function",
        "title": "buildSDiv"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildSDiv",
        "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "SDiv",
        "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildSExt",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildSExt",
        "fct-type": "function",
        "title": "buildSExt"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildSExt",
        "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "SExt",
        "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildSExtOrBitCast",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildSExtOrBitCast",
        "fct-type": "function",
        "title": "buildSExtOrBitCast"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildSExtOrBitCast",
        "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "SExt Or Bit Cast",
        "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildSIToFP",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildSIToFP",
        "fct-type": "function",
        "title": "buildSIToFP"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildSIToFP",
        "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "SITo FP",
        "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildSRem",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildSRem",
        "fct-type": "function",
        "title": "buildSRem"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildSRem",
        "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "SRem",
        "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildSelect",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildSelect",
        "fct-type": "function",
        "title": "buildSelect"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildSelect",
        "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Select",
        "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildShl",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildShl",
        "fct-type": "function",
        "title": "buildShl"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildShl",
        "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Shl",
        "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildShuffleVector",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildShuffleVector",
        "fct-type": "function",
        "title": "buildShuffleVector"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildShuffleVector",
        "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Shuffle Vector",
        "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildStore",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildStore",
        "fct-type": "function",
        "title": "buildStore"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildStore",
        "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Store",
        "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildStructGEP",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e CUInt -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildStructGEP",
        "fct-type": "function",
        "title": "buildStructGEP"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildStructGEP",
        "normalized": "BuilderRef-\u003eValueRef-\u003eCUInt-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Struct GEP",
        "signature": "BuilderRef-\u003eValueRef-\u003eCUInt-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildSub",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildSub",
        "fct-type": "function",
        "title": "buildSub"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildSub",
        "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Sub",
        "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildSwitch",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e BasicBlockRef -\u003e CUInt -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildSwitch",
        "fct-type": "function",
        "title": "buildSwitch"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildSwitch",
        "normalized": "BuilderRef-\u003eValueRef-\u003eBasicBlockRef-\u003eCUInt-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Switch",
        "signature": "BuilderRef-\u003eValueRef-\u003eBasicBlockRef-\u003eCUInt-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildTrunc",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildTrunc",
        "fct-type": "function",
        "title": "buildTrunc"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildTrunc",
        "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Trunc",
        "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildTruncOrBitCast",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildTruncOrBitCast",
        "fct-type": "function",
        "title": "buildTruncOrBitCast"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildTruncOrBitCast",
        "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Trunc Or Bit Cast",
        "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildUDiv",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildUDiv",
        "fct-type": "function",
        "title": "buildUDiv"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildUDiv",
        "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "UDiv",
        "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildUIToFP",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildUIToFP",
        "fct-type": "function",
        "title": "buildUIToFP"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildUIToFP",
        "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "UITo FP",
        "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildURem",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildURem",
        "fct-type": "function",
        "title": "buildURem"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildURem",
        "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "URem",
        "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildUnreachable",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildUnreachable",
        "fct-type": "function",
        "title": "buildUnreachable"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildUnreachable",
        "normalized": "BuilderRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Unreachable",
        "signature": "BuilderRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildUnwind",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildUnwind",
        "fct-type": "function",
        "title": "buildUnwind"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildUnwind",
        "normalized": "BuilderRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Unwind",
        "signature": "BuilderRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildVAArg",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildVAArg",
        "fct-type": "function",
        "title": "buildVAArg"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildVAArg",
        "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "VAArg",
        "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildXor",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildXor",
        "fct-type": "function",
        "title": "buildXor"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildXor",
        "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Xor",
        "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildZExt",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildZExt",
        "fct-type": "function",
        "title": "buildZExt"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildZExt",
        "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "ZExt",
        "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildZExtOrBitCast",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#buildZExtOrBitCast",
        "fct-type": "function",
        "title": "buildZExtOrBitCast"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "buildZExtOrBitCast",
        "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "ZExt Or Bit Cast",
        "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constAShr",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constAShr",
        "fct-type": "function",
        "title": "constAShr"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constAShr",
        "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "AShr",
        "signature": "ValueRef-\u003eValueRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constAdd",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constAdd",
        "fct-type": "function",
        "title": "constAdd"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constAdd",
        "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "Add",
        "signature": "ValueRef-\u003eValueRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constAllOnes",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constAllOnes",
        "fct-type": "function",
        "title": "constAllOnes"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constAllOnes",
        "normalized": "TypeRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "All Ones",
        "signature": "TypeRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constAnd",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constAnd",
        "fct-type": "function",
        "title": "constAnd"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constAnd",
        "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "And",
        "signature": "ValueRef-\u003eValueRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constArray",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e Ptr ValueRef -\u003e CUInt -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constArray",
        "fct-type": "function",
        "title": "constArray"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constArray",
        "normalized": "TypeRef-\u003ePtr ValueRef-\u003eCUInt-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "Array",
        "signature": "TypeRef-\u003ePtr ValueRef-\u003eCUInt-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constBitCast",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e TypeRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constBitCast",
        "fct-type": "function",
        "title": "constBitCast"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constBitCast",
        "normalized": "ValueRef-\u003eTypeRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "Bit Cast",
        "signature": "ValueRef-\u003eTypeRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constExactSDiv",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constExactSDiv",
        "fct-type": "function",
        "title": "constExactSDiv"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constExactSDiv",
        "normalized": "ValueRef-\u003eValueRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Exact SDiv",
        "signature": "ValueRef-\u003eValueRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constExtractElement",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constExtractElement",
        "fct-type": "function",
        "title": "constExtractElement"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constExtractElement",
        "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "Extract Element",
        "signature": "ValueRef-\u003eValueRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constExtractValue",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e Ptr ValueRef -\u003e CUInt -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constExtractValue",
        "fct-type": "function",
        "title": "constExtractValue"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constExtractValue",
        "normalized": "ValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "Extract Value",
        "signature": "ValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constFAdd",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constFAdd",
        "fct-type": "function",
        "title": "constFAdd"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constFAdd",
        "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "FAdd",
        "signature": "ValueRef-\u003eValueRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constFCmp",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "CInt -\u003e ValueRef -\u003e ValueRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constFCmp",
        "fct-type": "function",
        "title": "constFCmp"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constFCmp",
        "normalized": "CInt-\u003eValueRef-\u003eValueRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "FCmp",
        "signature": "CInt-\u003eValueRef-\u003eValueRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constFDiv",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constFDiv",
        "fct-type": "function",
        "title": "constFDiv"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constFDiv",
        "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "FDiv",
        "signature": "ValueRef-\u003eValueRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constFMul",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constFMul",
        "fct-type": "function",
        "title": "constFMul"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constFMul",
        "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "FMul",
        "signature": "ValueRef-\u003eValueRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constFNeg",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constFNeg",
        "fct-type": "function",
        "title": "constFNeg"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constFNeg",
        "normalized": "ValueRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "FNeg",
        "signature": "ValueRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constFPCast",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e TypeRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constFPCast",
        "fct-type": "function",
        "title": "constFPCast"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constFPCast",
        "normalized": "ValueRef-\u003eTypeRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "FPCast",
        "signature": "ValueRef-\u003eTypeRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constFPExt",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e TypeRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constFPExt",
        "fct-type": "function",
        "title": "constFPExt"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constFPExt",
        "normalized": "ValueRef-\u003eTypeRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "FPExt",
        "signature": "ValueRef-\u003eTypeRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constFPToSI",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e TypeRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constFPToSI",
        "fct-type": "function",
        "title": "constFPToSI"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constFPToSI",
        "normalized": "ValueRef-\u003eTypeRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "FPTo SI",
        "signature": "ValueRef-\u003eTypeRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constFPToUI",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e TypeRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constFPToUI",
        "fct-type": "function",
        "title": "constFPToUI"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constFPToUI",
        "normalized": "ValueRef-\u003eTypeRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "FPTo UI",
        "signature": "ValueRef-\u003eTypeRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constFPTrunc",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e TypeRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constFPTrunc",
        "fct-type": "function",
        "title": "constFPTrunc"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constFPTrunc",
        "normalized": "ValueRef-\u003eTypeRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "FPTrunc",
        "signature": "ValueRef-\u003eTypeRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constFRem",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constFRem",
        "fct-type": "function",
        "title": "constFRem"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constFRem",
        "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "FRem",
        "signature": "ValueRef-\u003eValueRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constFSub",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constFSub",
        "fct-type": "function",
        "title": "constFSub"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constFSub",
        "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "FSub",
        "signature": "ValueRef-\u003eValueRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constGEP",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e Ptr ValueRef -\u003e CUInt -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constGEP",
        "fct-type": "function",
        "title": "constGEP"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constGEP",
        "normalized": "ValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "GEP",
        "signature": "ValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constICmp",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "CInt -\u003e ValueRef -\u003e ValueRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constICmp",
        "fct-type": "function",
        "title": "constICmp"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constICmp",
        "normalized": "CInt-\u003eValueRef-\u003eValueRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "ICmp",
        "signature": "CInt-\u003eValueRef-\u003eValueRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constInBoundsGEP",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e Ptr ValueRef -\u003e CUInt -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constInBoundsGEP",
        "fct-type": "function",
        "title": "constInBoundsGEP"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constInBoundsGEP",
        "normalized": "ValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "In Bounds GEP",
        "signature": "ValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constInsertElement",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef -\u003e ValueRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constInsertElement",
        "fct-type": "function",
        "title": "constInsertElement"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constInsertElement",
        "normalized": "ValueRef-\u003eValueRef-\u003eValueRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "Insert Element",
        "signature": "ValueRef-\u003eValueRef-\u003eValueRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constInsertValue",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef -\u003e Ptr ValueRef -\u003e CUInt -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constInsertValue",
        "fct-type": "function",
        "title": "constInsertValue"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constInsertValue",
        "normalized": "ValueRef-\u003eValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "Insert Value",
        "signature": "ValueRef-\u003eValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constInt",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e CULLong -\u003e CInt -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constInt",
        "fct-type": "function",
        "title": "constInt"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constInt",
        "normalized": "TypeRef-\u003eCULLong-\u003eCInt-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "Int",
        "signature": "TypeRef-\u003eCULLong-\u003eCInt-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constIntCast",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e TypeRef -\u003e CUInt -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constIntCast",
        "fct-type": "function",
        "title": "constIntCast"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constIntCast",
        "normalized": "ValueRef-\u003eTypeRef-\u003eCUInt-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Int Cast",
        "signature": "ValueRef-\u003eTypeRef-\u003eCUInt-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constIntOfString",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e CString -\u003e CUInt -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constIntOfString",
        "fct-type": "function",
        "title": "constIntOfString"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constIntOfString",
        "normalized": "TypeRef-\u003eCString-\u003eCUInt-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Int Of String",
        "signature": "TypeRef-\u003eCString-\u003eCUInt-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constIntOfStringAndSize",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e CString -\u003e CUInt -\u003e CUInt -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constIntOfStringAndSize",
        "fct-type": "function",
        "title": "constIntOfStringAndSize"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constIntOfStringAndSize",
        "normalized": "TypeRef-\u003eCString-\u003eCUInt-\u003eCUInt-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Int Of String And Size",
        "signature": "TypeRef-\u003eCString-\u003eCUInt-\u003eCUInt-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constIntToPtr",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e TypeRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constIntToPtr",
        "fct-type": "function",
        "title": "constIntToPtr"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constIntToPtr",
        "normalized": "ValueRef-\u003eTypeRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "Int To Ptr",
        "signature": "ValueRef-\u003eTypeRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constLShr",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constLShr",
        "fct-type": "function",
        "title": "constLShr"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constLShr",
        "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "LShr",
        "signature": "ValueRef-\u003eValueRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constMul",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constMul",
        "fct-type": "function",
        "title": "constMul"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constMul",
        "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "Mul",
        "signature": "ValueRef-\u003eValueRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constNSWAdd",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constNSWAdd",
        "fct-type": "function",
        "title": "constNSWAdd"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constNSWAdd",
        "normalized": "ValueRef-\u003eValueRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "NSWAdd",
        "signature": "ValueRef-\u003eValueRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constNeg",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constNeg",
        "fct-type": "function",
        "title": "constNeg"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constNeg",
        "normalized": "ValueRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "Neg",
        "signature": "ValueRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constNot",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constNot",
        "fct-type": "function",
        "title": "constNot"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constNot",
        "normalized": "ValueRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "Not",
        "signature": "ValueRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constNull",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constNull",
        "fct-type": "function",
        "title": "constNull"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constNull",
        "normalized": "TypeRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "Null",
        "signature": "TypeRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constOr",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constOr",
        "fct-type": "function",
        "title": "constOr"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constOr",
        "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "Or",
        "signature": "ValueRef-\u003eValueRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constPointerCast",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e TypeRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constPointerCast",
        "fct-type": "function",
        "title": "constPointerCast"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constPointerCast",
        "normalized": "ValueRef-\u003eTypeRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Pointer Cast",
        "signature": "ValueRef-\u003eTypeRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constPointerNull",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constPointerNull",
        "fct-type": "function",
        "title": "constPointerNull"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constPointerNull",
        "normalized": "TypeRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Pointer Null",
        "signature": "TypeRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constPtrToInt",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e TypeRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constPtrToInt",
        "fct-type": "function",
        "title": "constPtrToInt"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constPtrToInt",
        "normalized": "ValueRef-\u003eTypeRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "Ptr To Int",
        "signature": "ValueRef-\u003eTypeRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constReal",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e CDouble -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constReal",
        "fct-type": "function",
        "title": "constReal"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constReal",
        "normalized": "TypeRef-\u003eCDouble-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "Real",
        "signature": "TypeRef-\u003eCDouble-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constRealOfString",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constRealOfString",
        "fct-type": "function",
        "title": "constRealOfString"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constRealOfString",
        "normalized": "TypeRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Real Of String",
        "signature": "TypeRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constRealOfStringAndSize",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e CString -\u003e CUInt -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constRealOfStringAndSize",
        "fct-type": "function",
        "title": "constRealOfStringAndSize"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constRealOfStringAndSize",
        "normalized": "TypeRef-\u003eCString-\u003eCUInt-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Real Of String And Size",
        "signature": "TypeRef-\u003eCString-\u003eCUInt-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constSDiv",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constSDiv",
        "fct-type": "function",
        "title": "constSDiv"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constSDiv",
        "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "SDiv",
        "signature": "ValueRef-\u003eValueRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constSExt",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e TypeRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constSExt",
        "fct-type": "function",
        "title": "constSExt"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constSExt",
        "normalized": "ValueRef-\u003eTypeRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "SExt",
        "signature": "ValueRef-\u003eTypeRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constSExtOrBitCast",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e TypeRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constSExtOrBitCast",
        "fct-type": "function",
        "title": "constSExtOrBitCast"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constSExtOrBitCast",
        "normalized": "ValueRef-\u003eTypeRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "SExt Or Bit Cast",
        "signature": "ValueRef-\u003eTypeRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constSIToFP",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e TypeRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constSIToFP",
        "fct-type": "function",
        "title": "constSIToFP"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constSIToFP",
        "normalized": "ValueRef-\u003eTypeRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "SITo FP",
        "signature": "ValueRef-\u003eTypeRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constSRem",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constSRem",
        "fct-type": "function",
        "title": "constSRem"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constSRem",
        "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "SRem",
        "signature": "ValueRef-\u003eValueRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constSelect",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef -\u003e ValueRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constSelect",
        "fct-type": "function",
        "title": "constSelect"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constSelect",
        "normalized": "ValueRef-\u003eValueRef-\u003eValueRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "Select",
        "signature": "ValueRef-\u003eValueRef-\u003eValueRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constShl",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constShl",
        "fct-type": "function",
        "title": "constShl"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constShl",
        "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "Shl",
        "signature": "ValueRef-\u003eValueRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constShuffleVector",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef -\u003e ValueRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constShuffleVector",
        "fct-type": "function",
        "title": "constShuffleVector"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constShuffleVector",
        "normalized": "ValueRef-\u003eValueRef-\u003eValueRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "Shuffle Vector",
        "signature": "ValueRef-\u003eValueRef-\u003eValueRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constString",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "CString -\u003e CUInt -\u003e CInt -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constString",
        "fct-type": "function",
        "title": "constString"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constString",
        "normalized": "CString-\u003eCUInt-\u003eCInt-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "String",
        "signature": "CString-\u003eCUInt-\u003eCInt-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constStringInContext",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ContextRef -\u003e CString -\u003e CUInt -\u003e CInt -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constStringInContext",
        "fct-type": "function",
        "title": "constStringInContext"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constStringInContext",
        "normalized": "ContextRef-\u003eCString-\u003eCUInt-\u003eCInt-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "String In Context",
        "signature": "ContextRef-\u003eCString-\u003eCUInt-\u003eCInt-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constStruct",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Ptr ValueRef -\u003e CUInt -\u003e CInt -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constStruct",
        "fct-type": "function",
        "title": "constStruct"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constStruct",
        "normalized": "Ptr ValueRef-\u003eCUInt-\u003eCInt-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "Struct",
        "signature": "Ptr ValueRef-\u003eCUInt-\u003eCInt-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constStructInContext",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ContextRef -\u003e Ptr ValueRef -\u003e CUInt -\u003e CInt -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constStructInContext",
        "fct-type": "function",
        "title": "constStructInContext"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constStructInContext",
        "normalized": "ContextRef-\u003ePtr ValueRef-\u003eCUInt-\u003eCInt-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Struct In Context",
        "signature": "ContextRef-\u003ePtr ValueRef-\u003eCUInt-\u003eCInt-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constSub",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constSub",
        "fct-type": "function",
        "title": "constSub"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constSub",
        "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "Sub",
        "signature": "ValueRef-\u003eValueRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constTrunc",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e TypeRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constTrunc",
        "fct-type": "function",
        "title": "constTrunc"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constTrunc",
        "normalized": "ValueRef-\u003eTypeRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "Trunc",
        "signature": "ValueRef-\u003eTypeRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constTruncOrBitCast",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e TypeRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constTruncOrBitCast",
        "fct-type": "function",
        "title": "constTruncOrBitCast"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constTruncOrBitCast",
        "normalized": "ValueRef-\u003eTypeRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Trunc Or Bit Cast",
        "signature": "ValueRef-\u003eTypeRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constUDiv",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constUDiv",
        "fct-type": "function",
        "title": "constUDiv"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constUDiv",
        "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "UDiv",
        "signature": "ValueRef-\u003eValueRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constUIToFP",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e TypeRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constUIToFP",
        "fct-type": "function",
        "title": "constUIToFP"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constUIToFP",
        "normalized": "ValueRef-\u003eTypeRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "UITo FP",
        "signature": "ValueRef-\u003eTypeRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constURem",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constURem",
        "fct-type": "function",
        "title": "constURem"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constURem",
        "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "URem",
        "signature": "ValueRef-\u003eValueRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constVector",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Ptr ValueRef -\u003e CUInt -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constVector",
        "fct-type": "function",
        "title": "constVector"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constVector",
        "normalized": "Ptr ValueRef-\u003eCUInt-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "Vector",
        "signature": "Ptr ValueRef-\u003eCUInt-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constXor",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constXor",
        "fct-type": "function",
        "title": "constXor"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constXor",
        "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "Xor",
        "signature": "ValueRef-\u003eValueRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constZExt",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e TypeRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constZExt",
        "fct-type": "function",
        "title": "constZExt"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constZExt",
        "normalized": "ValueRef-\u003eTypeRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "ZExt",
        "signature": "ValueRef-\u003eTypeRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constZExtOrBitCast",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e TypeRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#constZExtOrBitCast",
        "fct-type": "function",
        "title": "constZExtOrBitCast"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "constZExtOrBitCast",
        "normalized": "ValueRef-\u003eTypeRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "ZExt Or Bit Cast",
        "signature": "ValueRef-\u003eTypeRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:contextDispose",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ContextRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#contextDispose",
        "fct-type": "function",
        "title": "contextDispose"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "contextDispose",
        "normalized": "ContextRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Dispose",
        "signature": "ContextRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:countBasicBlocks",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef-\u003e IO CUInt",
        "fct-type": "function",
        "title": "countBasicBlocks"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "countBasicBlocks",
        "normalized": "ValueRef-\u003eIO CUInt",
        "package": "llvm-ht",
        "partial": "Basic Blocks",
        "signature": "ValueRef-\u003eIO CUInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:countIncoming",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO CUInt",
        "fct-source": "src/LLVM-FFI-Core.html#countIncoming",
        "fct-type": "function",
        "title": "countIncoming"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "countIncoming",
        "normalized": "ValueRef-\u003eIO CUInt",
        "package": "llvm-ht",
        "partial": "Incoming",
        "signature": "ValueRef-\u003eIO CUInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:countParamTypes",
      "description": {
        "fct-descr": "\u003cp\u003eGive the number of fixed parameters that a function takes.\n\u003c/p\u003e",
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e IO CUInt",
        "fct-source": "src/LLVM-FFI-Core.html#countParamTypes",
        "fct-type": "function",
        "title": "countParamTypes"
      },
      "index": {
        "description": "Give the number of fixed parameters that function takes",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "countParamTypes",
        "normalized": "TypeRef-\u003eIO CUInt",
        "package": "llvm-ht",
        "partial": "Param Types",
        "signature": "TypeRef-\u003eIO CUInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:countParams",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef-\u003e CUInt",
        "fct-type": "function",
        "title": "countParams"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "countParams",
        "normalized": "ValueRef-\u003eCUInt",
        "package": "llvm-ht",
        "partial": "Params",
        "signature": "ValueRef-\u003eCUInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:countStructElementTypes",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e CUInt",
        "fct-source": "src/LLVM-FFI-Core.html#countStructElementTypes",
        "fct-type": "function",
        "title": "countStructElementTypes"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "countStructElementTypes",
        "normalized": "TypeRef-\u003eCUInt",
        "package": "llvm-ht",
        "partial": "Struct Element Types",
        "signature": "TypeRef-\u003eCUInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:createBuilder",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "IO BuilderRef",
        "fct-source": "src/LLVM-FFI-Core.html#createBuilder",
        "fct-type": "function",
        "title": "createBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "createBuilder",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Builder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:createBuilderInContext",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ContextRef -\u003e IO BuilderRef",
        "fct-source": "src/LLVM-FFI-Core.html#createBuilderInContext",
        "fct-type": "function",
        "title": "createBuilderInContext"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "createBuilderInContext",
        "normalized": "ContextRef-\u003eIO BuilderRef",
        "package": "llvm-ht",
        "partial": "Builder In Context",
        "signature": "ContextRef-\u003eIO BuilderRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:createFunctionPassManager",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ModuleProviderRef -\u003e IO PassManagerRef",
        "fct-source": "src/LLVM-FFI-Core.html#createFunctionPassManager",
        "fct-type": "function",
        "title": "createFunctionPassManager"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "createFunctionPassManager",
        "normalized": "ModuleProviderRef-\u003eIO PassManagerRef",
        "package": "llvm-ht",
        "partial": "Function Pass Manager",
        "signature": "ModuleProviderRef-\u003eIO PassManagerRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:createMemoryBufferWithContentsOfFile",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "CString -\u003e Ptr MemoryBufferRef -\u003e Ptr CString -\u003e IO CInt",
        "fct-source": "src/LLVM-FFI-Core.html#createMemoryBufferWithContentsOfFile",
        "fct-type": "function",
        "title": "createMemoryBufferWithContentsOfFile"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "createMemoryBufferWithContentsOfFile",
        "normalized": "CString-\u003ePtr MemoryBufferRef-\u003ePtr CString-\u003eIO CInt",
        "package": "llvm-ht",
        "partial": "Memory Buffer With Contents Of File",
        "signature": "CString-\u003ePtr MemoryBufferRef-\u003ePtr CString-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:createMemoryBufferWithSTDIN",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Ptr MemoryBufferRef -\u003e Ptr CString -\u003e IO CInt",
        "fct-source": "src/LLVM-FFI-Core.html#createMemoryBufferWithSTDIN",
        "fct-type": "function",
        "title": "createMemoryBufferWithSTDIN"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "createMemoryBufferWithSTDIN",
        "normalized": "Ptr MemoryBufferRef-\u003ePtr CString-\u003eIO CInt",
        "package": "llvm-ht",
        "partial": "Memory Buffer With STDIN",
        "signature": "Ptr MemoryBufferRef-\u003ePtr CString-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:createModuleProviderForExistingModule",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ModuleRef -\u003e IO ModuleProviderRef",
        "fct-source": "src/LLVM-FFI-Core.html#createModuleProviderForExistingModule",
        "fct-type": "function",
        "title": "createModuleProviderForExistingModule"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "createModuleProviderForExistingModule",
        "normalized": "ModuleRef-\u003eIO ModuleProviderRef",
        "package": "llvm-ht",
        "partial": "Module Provider For Existing Module",
        "signature": "ModuleRef-\u003eIO ModuleProviderRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:createPassManager",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "IO PassManagerRef",
        "fct-source": "src/LLVM-FFI-Core.html#createPassManager",
        "fct-type": "function",
        "title": "createPassManager"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "createPassManager",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Pass Manager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:createTypeHandle",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e IO TypeHandleRef",
        "fct-source": "src/LLVM-FFI-Core.html#createTypeHandle",
        "fct-type": "function",
        "title": "createTypeHandle"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "createTypeHandle",
        "normalized": "TypeRef-\u003eIO TypeHandleRef",
        "package": "llvm-ht",
        "partial": "Type Handle",
        "signature": "TypeRef-\u003eIO TypeHandleRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:deleteBasicBlock",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BasicBlockRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#deleteBasicBlock",
        "fct-type": "function",
        "title": "deleteBasicBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "deleteBasicBlock",
        "normalized": "BasicBlockRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Basic Block",
        "signature": "BasicBlockRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:deleteFunction",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef-\u003e IO ()",
        "fct-type": "function",
        "title": "deleteFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "deleteFunction",
        "normalized": "ValueRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Function",
        "signature": "ValueRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:deleteGlobal",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#deleteGlobal",
        "fct-type": "function",
        "title": "deleteGlobal"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "deleteGlobal",
        "normalized": "ValueRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Global",
        "signature": "ValueRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:deleteTypeName",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ModuleRef -\u003e CString -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#deleteTypeName",
        "fct-type": "function",
        "title": "deleteTypeName"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "deleteTypeName",
        "normalized": "ModuleRef-\u003eCString-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Type Name",
        "signature": "ModuleRef-\u003eCString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:disposeMemoryBuffer",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "MemoryBufferRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#disposeMemoryBuffer",
        "fct-type": "function",
        "title": "disposeMemoryBuffer"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "disposeMemoryBuffer",
        "normalized": "MemoryBufferRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Memory Buffer",
        "signature": "MemoryBufferRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:disposeMessage",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "CString -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#disposeMessage",
        "fct-type": "function",
        "title": "disposeMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "disposeMessage",
        "normalized": "CString-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Message",
        "signature": "CString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:disposeModule",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ModuleRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#disposeModule",
        "fct-type": "function",
        "title": "disposeModule"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "disposeModule",
        "normalized": "ModuleRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Module",
        "signature": "ModuleRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:disposeTypeHandle",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeHandleRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#disposeTypeHandle",
        "fct-type": "function",
        "title": "disposeTypeHandle"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "disposeTypeHandle",
        "normalized": "TypeHandleRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Type Handle",
        "signature": "TypeHandleRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:doubleType",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#doubleType",
        "fct-type": "function",
        "title": "doubleType"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "doubleType",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:doubleTypeInContext",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ContextRef -\u003e IO TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#doubleTypeInContext",
        "fct-type": "function",
        "title": "doubleTypeInContext"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "doubleTypeInContext",
        "normalized": "ContextRef-\u003eIO TypeRef",
        "package": "llvm-ht",
        "partial": "Type In Context",
        "signature": "ContextRef-\u003eIO TypeRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:dumpModule",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ModuleRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#dumpModule",
        "fct-type": "function",
        "title": "dumpModule"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "dumpModule",
        "normalized": "ModuleRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Module",
        "signature": "ModuleRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:dumpValue",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#dumpValue",
        "fct-type": "function",
        "title": "dumpValue"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "dumpValue",
        "normalized": "ValueRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Value",
        "signature": "ValueRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:fP128TypeInContext",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ContextRef -\u003e IO TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#fP128TypeInContext",
        "fct-type": "function",
        "title": "fP128TypeInContext"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "fP128TypeInContext",
        "normalized": "ContextRef-\u003eIO TypeRef",
        "package": "llvm-ht",
        "partial": "Type In Context",
        "signature": "ContextRef-\u003eIO TypeRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:finalizeFunctionPassManager",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO CInt",
        "fct-source": "src/LLVM-FFI-Core.html#finalizeFunctionPassManager",
        "fct-type": "function",
        "title": "finalizeFunctionPassManager"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "finalizeFunctionPassManager",
        "normalized": "PassManagerRef-\u003eIO CInt",
        "package": "llvm-ht",
        "partial": "Function Pass Manager",
        "signature": "PassManagerRef-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:floatType",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#floatType",
        "fct-type": "function",
        "title": "floatType"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "floatType",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:floatTypeInContext",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ContextRef -\u003e IO TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#floatTypeInContext",
        "fct-type": "function",
        "title": "floatTypeInContext"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "floatTypeInContext",
        "normalized": "ContextRef-\u003eIO TypeRef",
        "package": "llvm-ht",
        "partial": "Type In Context",
        "signature": "ContextRef-\u003eIO TypeRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:fp128Type",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#fp128Type",
        "fct-type": "function",
        "title": "fp128Type"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "fp128Type",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:fromAttribute",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Attribute -\u003e CAttribute",
        "fct-source": "src/LLVM-FFI-Core.html#fromAttribute",
        "fct-type": "function",
        "title": "fromAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "fromAttribute",
        "normalized": "Attribute-\u003eCAttribute",
        "package": "llvm-ht",
        "partial": "Attribute",
        "signature": "Attribute-\u003eCAttribute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:fromCallingConvention",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "CallingConvention -\u003e CUInt",
        "fct-source": "src/LLVM-FFI-Core.html#fromCallingConvention",
        "fct-type": "function",
        "title": "fromCallingConvention"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "fromCallingConvention",
        "normalized": "CallingConvention-\u003eCUInt",
        "package": "llvm-ht",
        "partial": "Calling Convention",
        "signature": "CallingConvention-\u003eCUInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:fromLinkage",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Linkage -\u003e CUInt",
        "fct-source": "src/LLVM-FFI-Core.html#fromLinkage",
        "fct-type": "function",
        "title": "fromLinkage"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "fromLinkage",
        "normalized": "Linkage-\u003eCUInt",
        "package": "llvm-ht",
        "partial": "Linkage",
        "signature": "Linkage-\u003eCUInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:fromVisibility",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Visibility -\u003e CUInt",
        "fct-source": "src/LLVM-FFI-Core.html#fromVisibility",
        "fct-type": "function",
        "title": "fromVisibility"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "fromVisibility",
        "normalized": "Visibility-\u003eCUInt",
        "package": "llvm-ht",
        "partial": "Visibility",
        "signature": "Visibility-\u003eCUInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:functionType",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a function type.\n\u003c/p\u003e",
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef-\u003e Ptr TypeRef-\u003e CUInt-\u003e CInt-\u003e TypeRef",
        "fct-type": "function",
        "title": "functionType"
      },
      "index": {
        "description": "Create function type",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "functionType",
        "normalized": "TypeRef-\u003ePtr TypeRef-\u003eCUInt-\u003eCInt-\u003eTypeRef",
        "package": "llvm-ht",
        "partial": "Type",
        "signature": "TypeRef-\u003ePtr TypeRef-\u003eCUInt-\u003eCInt-\u003eTypeRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getAlignment",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO CUInt",
        "fct-source": "src/LLVM-FFI-Core.html#getAlignment",
        "fct-type": "function",
        "title": "getAlignment"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getAlignment",
        "normalized": "ValueRef-\u003eIO CUInt",
        "package": "llvm-ht",
        "partial": "Alignment",
        "signature": "ValueRef-\u003eIO CUInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getArrayLength",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e IO CUInt",
        "fct-source": "src/LLVM-FFI-Core.html#getArrayLength",
        "fct-type": "function",
        "title": "getArrayLength"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getArrayLength",
        "normalized": "TypeRef-\u003eIO CUInt",
        "package": "llvm-ht",
        "partial": "Array Length",
        "signature": "TypeRef-\u003eIO CUInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getBasicBlockParent",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BasicBlockRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#getBasicBlockParent",
        "fct-type": "function",
        "title": "getBasicBlockParent"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getBasicBlockParent",
        "normalized": "BasicBlockRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Basic Block Parent",
        "signature": "BasicBlockRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getBasicBlocks",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef-\u003e Ptr BasicBlockRef-\u003e IO ()",
        "fct-type": "function",
        "title": "getBasicBlocks"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getBasicBlocks",
        "normalized": "ValueRef-\u003ePtr BasicBlockRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Basic Blocks",
        "signature": "ValueRef-\u003ePtr BasicBlockRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getDataLayout",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ModuleRef -\u003e IO CString",
        "fct-source": "src/LLVM-FFI-Core.html#getDataLayout",
        "fct-type": "function",
        "title": "getDataLayout"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getDataLayout",
        "normalized": "ModuleRef-\u003eIO CString",
        "package": "llvm-ht",
        "partial": "Data Layout",
        "signature": "ModuleRef-\u003eIO CString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getElementType",
      "description": {
        "fct-descr": "\u003cp\u003eGet the type of a sequential type's elements.\n\u003c/p\u003e",
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e IO TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#getElementType",
        "fct-type": "function",
        "title": "getElementType"
      },
      "index": {
        "description": "Get the type of sequential type elements",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getElementType",
        "normalized": "TypeRef-\u003eIO TypeRef",
        "package": "llvm-ht",
        "partial": "Element Type",
        "signature": "TypeRef-\u003eIO TypeRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getEntryBasicBlock",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef-\u003e IO BasicBlockRef",
        "fct-type": "function",
        "title": "getEntryBasicBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getEntryBasicBlock",
        "normalized": "ValueRef-\u003eIO BasicBlockRef",
        "package": "llvm-ht",
        "partial": "Entry Basic Block",
        "signature": "ValueRef-\u003eIO BasicBlockRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getFirstBasicBlock",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO BasicBlockRef",
        "fct-source": "src/LLVM-FFI-Core.html#getFirstBasicBlock",
        "fct-type": "function",
        "title": "getFirstBasicBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getFirstBasicBlock",
        "normalized": "ValueRef-\u003eIO BasicBlockRef",
        "package": "llvm-ht",
        "partial": "First Basic Block",
        "signature": "ValueRef-\u003eIO BasicBlockRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getFirstFunction",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ModuleRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#getFirstFunction",
        "fct-type": "function",
        "title": "getFirstFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getFirstFunction",
        "normalized": "ModuleRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "First Function",
        "signature": "ModuleRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getFirstGlobal",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ModuleRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#getFirstGlobal",
        "fct-type": "function",
        "title": "getFirstGlobal"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getFirstGlobal",
        "normalized": "ModuleRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "First Global",
        "signature": "ModuleRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getFirstInstruction",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BasicBlockRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#getFirstInstruction",
        "fct-type": "function",
        "title": "getFirstInstruction"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getFirstInstruction",
        "normalized": "BasicBlockRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "First Instruction",
        "signature": "BasicBlockRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getFirstParam",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#getFirstParam",
        "fct-type": "function",
        "title": "getFirstParam"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getFirstParam",
        "normalized": "ValueRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "First Param",
        "signature": "ValueRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getFunctionCallConv",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef-\u003e IO CUInt",
        "fct-type": "function",
        "title": "getFunctionCallConv"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getFunctionCallConv",
        "normalized": "ValueRef-\u003eIO CUInt",
        "package": "llvm-ht",
        "partial": "Function Call Conv",
        "signature": "ValueRef-\u003eIO CUInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getGC",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO CString",
        "fct-source": "src/LLVM-FFI-Core.html#getGC",
        "fct-type": "function",
        "title": "getGC"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getGC",
        "normalized": "ValueRef-\u003eIO CString",
        "package": "llvm-ht",
        "partial": "GC",
        "signature": "ValueRef-\u003eIO CString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getGlobalParent",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO ModuleRef",
        "fct-source": "src/LLVM-FFI-Core.html#getGlobalParent",
        "fct-type": "function",
        "title": "getGlobalParent"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getGlobalParent",
        "normalized": "ValueRef-\u003eIO ModuleRef",
        "package": "llvm-ht",
        "partial": "Global Parent",
        "signature": "ValueRef-\u003eIO ModuleRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getIncomingBlock",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e CUInt -\u003e IO BasicBlockRef",
        "fct-source": "src/LLVM-FFI-Core.html#getIncomingBlock",
        "fct-type": "function",
        "title": "getIncomingBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getIncomingBlock",
        "normalized": "ValueRef-\u003eCUInt-\u003eIO BasicBlockRef",
        "package": "llvm-ht",
        "partial": "Incoming Block",
        "signature": "ValueRef-\u003eCUInt-\u003eIO BasicBlockRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getIncomingValue",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e CUInt -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#getIncomingValue",
        "fct-type": "function",
        "title": "getIncomingValue"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getIncomingValue",
        "normalized": "ValueRef-\u003eCUInt-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Incoming Value",
        "signature": "ValueRef-\u003eCUInt-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getInitializer",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#getInitializer",
        "fct-type": "function",
        "title": "getInitializer"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getInitializer",
        "normalized": "ValueRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Initializer",
        "signature": "ValueRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getInsertBlock",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e IO BasicBlockRef",
        "fct-source": "src/LLVM-FFI-Core.html#getInsertBlock",
        "fct-type": "function",
        "title": "getInsertBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getInsertBlock",
        "normalized": "BuilderRef-\u003eIO BasicBlockRef",
        "package": "llvm-ht",
        "partial": "Insert Block",
        "signature": "BuilderRef-\u003eIO BasicBlockRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getInstructionCallConv",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO CUInt",
        "fct-source": "src/LLVM-FFI-Core.html#getInstructionCallConv",
        "fct-type": "function",
        "title": "getInstructionCallConv"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getInstructionCallConv",
        "normalized": "ValueRef-\u003eIO CUInt",
        "package": "llvm-ht",
        "partial": "Instruction Call Conv",
        "signature": "ValueRef-\u003eIO CUInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getInstructionParent",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO BasicBlockRef",
        "fct-source": "src/LLVM-FFI-Core.html#getInstructionParent",
        "fct-type": "function",
        "title": "getInstructionParent"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getInstructionParent",
        "normalized": "ValueRef-\u003eIO BasicBlockRef",
        "package": "llvm-ht",
        "partial": "Instruction Parent",
        "signature": "ValueRef-\u003eIO BasicBlockRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getIntTypeWidth",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e IO CUInt",
        "fct-source": "src/LLVM-FFI-Core.html#getIntTypeWidth",
        "fct-type": "function",
        "title": "getIntTypeWidth"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getIntTypeWidth",
        "normalized": "TypeRef-\u003eIO CUInt",
        "package": "llvm-ht",
        "partial": "Int Type Width",
        "signature": "TypeRef-\u003eIO CUInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getIntrinsicID",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef-\u003e CUInt",
        "fct-type": "function",
        "title": "getIntrinsicID"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getIntrinsicID",
        "normalized": "ValueRef-\u003eCUInt",
        "package": "llvm-ht",
        "partial": "Intrinsic ID",
        "signature": "ValueRef-\u003eCUInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getLastBasicBlock",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO BasicBlockRef",
        "fct-source": "src/LLVM-FFI-Core.html#getLastBasicBlock",
        "fct-type": "function",
        "title": "getLastBasicBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getLastBasicBlock",
        "normalized": "ValueRef-\u003eIO BasicBlockRef",
        "package": "llvm-ht",
        "partial": "Last Basic Block",
        "signature": "ValueRef-\u003eIO BasicBlockRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getLastFunction",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ModuleRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#getLastFunction",
        "fct-type": "function",
        "title": "getLastFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getLastFunction",
        "normalized": "ModuleRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Last Function",
        "signature": "ModuleRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getLastGlobal",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ModuleRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#getLastGlobal",
        "fct-type": "function",
        "title": "getLastGlobal"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getLastGlobal",
        "normalized": "ModuleRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Last Global",
        "signature": "ModuleRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getLastInstruction",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BasicBlockRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#getLastInstruction",
        "fct-type": "function",
        "title": "getLastInstruction"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getLastInstruction",
        "normalized": "BasicBlockRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Last Instruction",
        "signature": "BasicBlockRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getLastParam",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#getLastParam",
        "fct-type": "function",
        "title": "getLastParam"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getLastParam",
        "normalized": "ValueRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Last Param",
        "signature": "ValueRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getLinkage",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO CUInt",
        "fct-source": "src/LLVM-FFI-Core.html#getLinkage",
        "fct-type": "function",
        "title": "getLinkage"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getLinkage",
        "normalized": "ValueRef-\u003eIO CUInt",
        "package": "llvm-ht",
        "partial": "Linkage",
        "signature": "ValueRef-\u003eIO CUInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getNamedFunction",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ModuleRef-\u003e CString-\u003e IO ValueRef",
        "fct-type": "function",
        "title": "getNamedFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getNamedFunction",
        "normalized": "ModuleRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Named Function",
        "signature": "ModuleRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getNamedGlobal",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ModuleRef -\u003e CString -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#getNamedGlobal",
        "fct-type": "function",
        "title": "getNamedGlobal"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getNamedGlobal",
        "normalized": "ModuleRef-\u003eCString-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Named Global",
        "signature": "ModuleRef-\u003eCString-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getNextBasicBlock",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BasicBlockRef -\u003e IO BasicBlockRef",
        "fct-source": "src/LLVM-FFI-Core.html#getNextBasicBlock",
        "fct-type": "function",
        "title": "getNextBasicBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getNextBasicBlock",
        "normalized": "BasicBlockRef-\u003eIO BasicBlockRef",
        "package": "llvm-ht",
        "partial": "Next Basic Block",
        "signature": "BasicBlockRef-\u003eIO BasicBlockRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getNextFunction",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#getNextFunction",
        "fct-type": "function",
        "title": "getNextFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getNextFunction",
        "normalized": "ValueRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Next Function",
        "signature": "ValueRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getNextGlobal",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#getNextGlobal",
        "fct-type": "function",
        "title": "getNextGlobal"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getNextGlobal",
        "normalized": "ValueRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Next Global",
        "signature": "ValueRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getNextInstruction",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#getNextInstruction",
        "fct-type": "function",
        "title": "getNextInstruction"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getNextInstruction",
        "normalized": "ValueRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Next Instruction",
        "signature": "ValueRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getNextParam",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#getNextParam",
        "fct-type": "function",
        "title": "getNextParam"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getNextParam",
        "normalized": "ValueRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Next Param",
        "signature": "ValueRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getParam",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef-\u003e CUInt-\u003e ValueRef",
        "fct-type": "function",
        "title": "getParam"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getParam",
        "normalized": "ValueRef-\u003eCUInt-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "Param",
        "signature": "ValueRef-\u003eCUInt-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getParamParent",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#getParamParent",
        "fct-type": "function",
        "title": "getParamParent"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getParamParent",
        "normalized": "ValueRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Param Parent",
        "signature": "ValueRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getParamTypes",
      "description": {
        "fct-descr": "\u003cp\u003eFill out an array with the types of a function's fixed\n parameters.\n\u003c/p\u003e",
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e Ptr TypeRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#getParamTypes",
        "fct-type": "function",
        "title": "getParamTypes"
      },
      "index": {
        "description": "Fill out an array with the types of function fixed parameters",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getParamTypes",
        "normalized": "TypeRef-\u003ePtr TypeRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Param Types",
        "signature": "TypeRef-\u003ePtr TypeRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getParams",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef-\u003e Ptr ValueRef-\u003e IO ()",
        "fct-type": "function",
        "title": "getParams"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getParams",
        "normalized": "ValueRef-\u003ePtr ValueRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Params",
        "signature": "ValueRef-\u003ePtr ValueRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getPointerAddressSpace",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e IO CUInt",
        "fct-source": "src/LLVM-FFI-Core.html#getPointerAddressSpace",
        "fct-type": "function",
        "title": "getPointerAddressSpace"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getPointerAddressSpace",
        "normalized": "TypeRef-\u003eIO CUInt",
        "package": "llvm-ht",
        "partial": "Pointer Address Space",
        "signature": "TypeRef-\u003eIO CUInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getPreviousBasicBlock",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BasicBlockRef -\u003e IO BasicBlockRef",
        "fct-source": "src/LLVM-FFI-Core.html#getPreviousBasicBlock",
        "fct-type": "function",
        "title": "getPreviousBasicBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getPreviousBasicBlock",
        "normalized": "BasicBlockRef-\u003eIO BasicBlockRef",
        "package": "llvm-ht",
        "partial": "Previous Basic Block",
        "signature": "BasicBlockRef-\u003eIO BasicBlockRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getPreviousFunction",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#getPreviousFunction",
        "fct-type": "function",
        "title": "getPreviousFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getPreviousFunction",
        "normalized": "ValueRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Previous Function",
        "signature": "ValueRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getPreviousGlobal",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#getPreviousGlobal",
        "fct-type": "function",
        "title": "getPreviousGlobal"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getPreviousGlobal",
        "normalized": "ValueRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Previous Global",
        "signature": "ValueRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getPreviousInstruction",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#getPreviousInstruction",
        "fct-type": "function",
        "title": "getPreviousInstruction"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getPreviousInstruction",
        "normalized": "ValueRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Previous Instruction",
        "signature": "ValueRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getPreviousParam",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#getPreviousParam",
        "fct-type": "function",
        "title": "getPreviousParam"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getPreviousParam",
        "normalized": "ValueRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Previous Param",
        "signature": "ValueRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getReturnType",
      "description": {
        "fct-descr": "\u003cp\u003eGive a function's return type.\n\u003c/p\u003e",
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e IO TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#getReturnType",
        "fct-type": "function",
        "title": "getReturnType"
      },
      "index": {
        "description": "Give function return type",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getReturnType",
        "normalized": "TypeRef-\u003eIO TypeRef",
        "package": "llvm-ht",
        "partial": "Return Type",
        "signature": "TypeRef-\u003eIO TypeRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getSection",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO CString",
        "fct-source": "src/LLVM-FFI-Core.html#getSection",
        "fct-type": "function",
        "title": "getSection"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getSection",
        "normalized": "ValueRef-\u003eIO CString",
        "package": "llvm-ht",
        "partial": "Section",
        "signature": "ValueRef-\u003eIO CString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getStructElementTypes",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e Ptr TypeRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#getStructElementTypes",
        "fct-type": "function",
        "title": "getStructElementTypes"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getStructElementTypes",
        "normalized": "TypeRef-\u003ePtr TypeRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Struct Element Types",
        "signature": "TypeRef-\u003ePtr TypeRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getTarget",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ModuleRef -\u003e IO CString",
        "fct-source": "src/LLVM-FFI-Core.html#getTarget",
        "fct-type": "function",
        "title": "getTarget"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getTarget",
        "normalized": "ModuleRef-\u003eIO CString",
        "package": "llvm-ht",
        "partial": "Target",
        "signature": "ModuleRef-\u003eIO CString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getTypeByName",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ModuleRef -\u003e CString -\u003e IO TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#getTypeByName",
        "fct-type": "function",
        "title": "getTypeByName"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getTypeByName",
        "normalized": "ModuleRef-\u003eCString-\u003eIO TypeRef",
        "package": "llvm-ht",
        "partial": "Type By Name",
        "signature": "ModuleRef-\u003eCString-\u003eIO TypeRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getTypeContext",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e IO ContextRef",
        "fct-source": "src/LLVM-FFI-Core.html#getTypeContext",
        "fct-type": "function",
        "title": "getTypeContext"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getTypeContext",
        "normalized": "TypeRef-\u003eIO ContextRef",
        "package": "llvm-ht",
        "partial": "Type Context",
        "signature": "TypeRef-\u003eIO ContextRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getTypeKind",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e IO TypeKind",
        "fct-source": "src/LLVM-FFI-Core.html#getTypeKind",
        "fct-type": "function",
        "title": "getTypeKind"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getTypeKind",
        "normalized": "TypeRef-\u003eIO TypeKind",
        "package": "llvm-ht",
        "partial": "Type Kind",
        "signature": "TypeRef-\u003eIO TypeKind"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getUndef",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#getUndef",
        "fct-type": "function",
        "title": "getUndef"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getUndef",
        "normalized": "TypeRef-\u003eValueRef",
        "package": "llvm-ht",
        "partial": "Undef",
        "signature": "TypeRef-\u003eValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getValueName",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO CString",
        "fct-source": "src/LLVM-FFI-Core.html#getValueName",
        "fct-type": "function",
        "title": "getValueName"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getValueName",
        "normalized": "ValueRef-\u003eIO CString",
        "package": "llvm-ht",
        "partial": "Value Name",
        "signature": "ValueRef-\u003eIO CString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getVectorSize",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e IO CUInt",
        "fct-source": "src/LLVM-FFI-Core.html#getVectorSize",
        "fct-type": "function",
        "title": "getVectorSize"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getVectorSize",
        "normalized": "TypeRef-\u003eIO CUInt",
        "package": "llvm-ht",
        "partial": "Vector Size",
        "signature": "TypeRef-\u003eIO CUInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getVisibility",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO CUInt",
        "fct-source": "src/LLVM-FFI-Core.html#getVisibility",
        "fct-type": "function",
        "title": "getVisibility"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "getVisibility",
        "normalized": "ValueRef-\u003eIO CUInt",
        "package": "llvm-ht",
        "partial": "Visibility",
        "signature": "ValueRef-\u003eIO CUInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:initializeFunctionPassManager",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO CInt",
        "fct-source": "src/LLVM-FFI-Core.html#initializeFunctionPassManager",
        "fct-type": "function",
        "title": "initializeFunctionPassManager"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "initializeFunctionPassManager",
        "normalized": "PassManagerRef-\u003eIO CInt",
        "package": "llvm-ht",
        "partial": "Function Pass Manager",
        "signature": "PassManagerRef-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:insertBasicBlock",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BasicBlockRef-\u003e CString-\u003e IO BasicBlockRef",
        "fct-type": "function",
        "title": "insertBasicBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "insertBasicBlock",
        "normalized": "BasicBlockRef-\u003eCString-\u003eIO BasicBlockRef",
        "package": "llvm-ht",
        "partial": "Basic Block",
        "signature": "BasicBlockRef-\u003eCString-\u003eIO BasicBlockRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:insertBasicBlockInContext",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ContextRef -\u003e BasicBlockRef -\u003e CString -\u003e IO BasicBlockRef",
        "fct-source": "src/LLVM-FFI-Core.html#insertBasicBlockInContext",
        "fct-type": "function",
        "title": "insertBasicBlockInContext"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "insertBasicBlockInContext",
        "normalized": "ContextRef-\u003eBasicBlockRef-\u003eCString-\u003eIO BasicBlockRef",
        "package": "llvm-ht",
        "partial": "Basic Block In Context",
        "signature": "ContextRef-\u003eBasicBlockRef-\u003eCString-\u003eIO BasicBlockRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:insertIntoBuilderWithName",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e CString -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#insertIntoBuilderWithName",
        "fct-type": "function",
        "title": "insertIntoBuilderWithName"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "insertIntoBuilderWithName",
        "normalized": "BuilderRef-\u003eValueRef-\u003eCString-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Into Builder With Name",
        "signature": "BuilderRef-\u003eValueRef-\u003eCString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:int16Type",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#int16Type",
        "fct-type": "function",
        "title": "int16Type"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "int16Type",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:int16TypeInContext",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ContextRef -\u003e IO TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#int16TypeInContext",
        "fct-type": "function",
        "title": "int16TypeInContext"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "int16TypeInContext",
        "normalized": "ContextRef-\u003eIO TypeRef",
        "package": "llvm-ht",
        "partial": "Type In Context",
        "signature": "ContextRef-\u003eIO TypeRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:int1Type",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#int1Type",
        "fct-type": "function",
        "title": "int1Type"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "int1Type",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:int1TypeInContext",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ContextRef -\u003e IO TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#int1TypeInContext",
        "fct-type": "function",
        "title": "int1TypeInContext"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "int1TypeInContext",
        "normalized": "ContextRef-\u003eIO TypeRef",
        "package": "llvm-ht",
        "partial": "Type In Context",
        "signature": "ContextRef-\u003eIO TypeRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:int32Type",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#int32Type",
        "fct-type": "function",
        "title": "int32Type"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "int32Type",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:int32TypeInContext",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ContextRef -\u003e IO TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#int32TypeInContext",
        "fct-type": "function",
        "title": "int32TypeInContext"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "int32TypeInContext",
        "normalized": "ContextRef-\u003eIO TypeRef",
        "package": "llvm-ht",
        "partial": "Type In Context",
        "signature": "ContextRef-\u003eIO TypeRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:int64Type",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#int64Type",
        "fct-type": "function",
        "title": "int64Type"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "int64Type",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:int64TypeInContext",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ContextRef -\u003e IO TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#int64TypeInContext",
        "fct-type": "function",
        "title": "int64TypeInContext"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "int64TypeInContext",
        "normalized": "ContextRef-\u003eIO TypeRef",
        "package": "llvm-ht",
        "partial": "Type In Context",
        "signature": "ContextRef-\u003eIO TypeRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:int8Type",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#int8Type",
        "fct-type": "function",
        "title": "int8Type"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "int8Type",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:int8TypeInContext",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ContextRef -\u003e IO TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#int8TypeInContext",
        "fct-type": "function",
        "title": "int8TypeInContext"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "int8TypeInContext",
        "normalized": "ContextRef-\u003eIO TypeRef",
        "package": "llvm-ht",
        "partial": "Type In Context",
        "signature": "ContextRef-\u003eIO TypeRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:intTypeInContext",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ContextRef -\u003e CUInt -\u003e IO TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#intTypeInContext",
        "fct-type": "function",
        "title": "intTypeInContext"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "intTypeInContext",
        "normalized": "ContextRef-\u003eCUInt-\u003eIO TypeRef",
        "package": "llvm-ht",
        "partial": "Type In Context",
        "signature": "ContextRef-\u003eCUInt-\u003eIO TypeRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:integerType",
      "description": {
        "fct-descr": "\u003cp\u003eAn integer type of the given width.\n\u003c/p\u003e",
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "CUInt-\u003e TypeRef",
        "fct-type": "function",
        "title": "integerType"
      },
      "index": {
        "description": "An integer type of the given width",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "integerType",
        "normalized": "CUInt-\u003eTypeRef",
        "package": "llvm-ht",
        "partial": "Type",
        "signature": "CUInt-\u003eTypeRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:isConstant",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO CInt",
        "fct-source": "src/LLVM-FFI-Core.html#isConstant",
        "fct-type": "function",
        "title": "isConstant"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "isConstant",
        "normalized": "ValueRef-\u003eIO CInt",
        "package": "llvm-ht",
        "partial": "Constant",
        "signature": "ValueRef-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:isDeclaration",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO CInt",
        "fct-source": "src/LLVM-FFI-Core.html#isDeclaration",
        "fct-type": "function",
        "title": "isDeclaration"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "isDeclaration",
        "normalized": "ValueRef-\u003eIO CInt",
        "package": "llvm-ht",
        "partial": "Declaration",
        "signature": "ValueRef-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:isFunctionVarArg",
      "description": {
        "fct-descr": "\u003cp\u003eIndicate whether a function takes varargs.\n\u003c/p\u003e",
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e IO CInt",
        "fct-source": "src/LLVM-FFI-Core.html#isFunctionVarArg",
        "fct-type": "function",
        "title": "isFunctionVarArg"
      },
      "index": {
        "description": "Indicate whether function takes varargs",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "isFunctionVarArg",
        "normalized": "TypeRef-\u003eIO CInt",
        "package": "llvm-ht",
        "partial": "Function Var Arg",
        "signature": "TypeRef-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:isGlobalConstant",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO CInt",
        "fct-source": "src/LLVM-FFI-Core.html#isGlobalConstant",
        "fct-type": "function",
        "title": "isGlobalConstant"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "isGlobalConstant",
        "normalized": "ValueRef-\u003eIO CInt",
        "package": "llvm-ht",
        "partial": "Global Constant",
        "signature": "ValueRef-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:isNull",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO CInt",
        "fct-source": "src/LLVM-FFI-Core.html#isNull",
        "fct-type": "function",
        "title": "isNull"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "isNull",
        "normalized": "ValueRef-\u003eIO CInt",
        "package": "llvm-ht",
        "partial": "Null",
        "signature": "ValueRef-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:isPackedStruct",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e CInt",
        "fct-source": "src/LLVM-FFI-Core.html#isPackedStruct",
        "fct-type": "function",
        "title": "isPackedStruct"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "isPackedStruct",
        "normalized": "TypeRef-\u003eCInt",
        "package": "llvm-ht",
        "partial": "Packed Struct",
        "signature": "TypeRef-\u003eCInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:isTailCall",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO CInt",
        "fct-source": "src/LLVM-FFI-Core.html#isTailCall",
        "fct-type": "function",
        "title": "isTailCall"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "isTailCall",
        "normalized": "ValueRef-\u003eIO CInt",
        "package": "llvm-ht",
        "partial": "Tail Call",
        "signature": "ValueRef-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:isThreadLocal",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO CInt",
        "fct-source": "src/LLVM-FFI-Core.html#isThreadLocal",
        "fct-type": "function",
        "title": "isThreadLocal"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "isThreadLocal",
        "normalized": "ValueRef-\u003eIO CInt",
        "package": "llvm-ht",
        "partial": "Thread Local",
        "signature": "ValueRef-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:isUndef",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO CInt",
        "fct-source": "src/LLVM-FFI-Core.html#isUndef",
        "fct-type": "function",
        "title": "isUndef"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "isUndef",
        "normalized": "ValueRef-\u003eIO CInt",
        "package": "llvm-ht",
        "partial": "Undef",
        "signature": "ValueRef-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:labelType",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#labelType",
        "fct-type": "function",
        "title": "labelType"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "labelType",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:labelTypeInContext",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ContextRef -\u003e IO TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#labelTypeInContext",
        "fct-type": "function",
        "title": "labelTypeInContext"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "labelTypeInContext",
        "normalized": "ContextRef-\u003eIO TypeRef",
        "package": "llvm-ht",
        "partial": "Type In Context",
        "signature": "ContextRef-\u003eIO TypeRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:moduleCreateWithName",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "CString -\u003e IO ModuleRef",
        "fct-source": "src/LLVM-FFI-Core.html#moduleCreateWithName",
        "fct-type": "function",
        "title": "moduleCreateWithName"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "moduleCreateWithName",
        "normalized": "CString-\u003eIO ModuleRef",
        "package": "llvm-ht",
        "partial": "Create With Name",
        "signature": "CString-\u003eIO ModuleRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:moduleCreateWithNameInContext",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "CString -\u003e ContextRef -\u003e IO ModuleRef",
        "fct-source": "src/LLVM-FFI-Core.html#moduleCreateWithNameInContext",
        "fct-type": "function",
        "title": "moduleCreateWithNameInContext"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "moduleCreateWithNameInContext",
        "normalized": "CString-\u003eContextRef-\u003eIO ModuleRef",
        "package": "llvm-ht",
        "partial": "Create With Name In Context",
        "signature": "CString-\u003eContextRef-\u003eIO ModuleRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:opaqueType",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#opaqueType",
        "fct-type": "function",
        "title": "opaqueType"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "opaqueType",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:opaqueTypeInContext",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ContextRef -\u003e IO TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#opaqueTypeInContext",
        "fct-type": "function",
        "title": "opaqueTypeInContext"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "opaqueTypeInContext",
        "normalized": "ContextRef-\u003eIO TypeRef",
        "package": "llvm-ht",
        "partial": "Type In Context",
        "signature": "ContextRef-\u003eIO TypeRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:pPCFP128TypeInContext",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ContextRef -\u003e IO TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#pPCFP128TypeInContext",
        "fct-type": "function",
        "title": "pPCFP128TypeInContext"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "pPCFP128TypeInContext",
        "normalized": "ContextRef-\u003eIO TypeRef",
        "package": "llvm-ht",
        "partial": "PCFP Type In Context",
        "signature": "ContextRef-\u003eIO TypeRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:pointerType",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef-\u003e CUInt-\u003e TypeRef",
        "fct-type": "function",
        "title": "pointerType"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "pointerType",
        "normalized": "TypeRef-\u003eCUInt-\u003eTypeRef",
        "package": "llvm-ht",
        "partial": "Type",
        "signature": "TypeRef-\u003eCUInt-\u003eTypeRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:positionAtEnd",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e BasicBlockRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#positionAtEnd",
        "fct-type": "function",
        "title": "positionAtEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "positionAtEnd",
        "normalized": "BuilderRef-\u003eBasicBlockRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "At End",
        "signature": "BuilderRef-\u003eBasicBlockRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:positionBefore",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e ValueRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#positionBefore",
        "fct-type": "function",
        "title": "positionBefore"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "positionBefore",
        "normalized": "BuilderRef-\u003eValueRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Before",
        "signature": "BuilderRef-\u003eValueRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:positionBuilder",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "BuilderRef -\u003e BasicBlockRef -\u003e ValueRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#positionBuilder",
        "fct-type": "function",
        "title": "positionBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "positionBuilder",
        "normalized": "BuilderRef-\u003eBasicBlockRef-\u003eValueRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Builder",
        "signature": "BuilderRef-\u003eBasicBlockRef-\u003eValueRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:ppcFP128Type",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#ppcFP128Type",
        "fct-type": "function",
        "title": "ppcFP128Type"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "ppcFP128Type",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "FP Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:ptrDisposeBuilder",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "FunPtr (BuilderRef -\u003e IO ())",
        "fct-source": "src/LLVM-FFI-Core.html#ptrDisposeBuilder",
        "fct-type": "function",
        "title": "ptrDisposeBuilder"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "ptrDisposeBuilder",
        "normalized": "FunPtr(BuilderRef-\u003eIO())",
        "package": "llvm-ht",
        "partial": "Dispose Builder",
        "signature": "FunPtr(BuilderRef-\u003eIO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:ptrDisposeModule",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "FunPtr (ModuleRef -\u003e IO ())",
        "fct-source": "src/LLVM-FFI-Core.html#ptrDisposeModule",
        "fct-type": "function",
        "title": "ptrDisposeModule"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "ptrDisposeModule",
        "normalized": "FunPtr(ModuleRef-\u003eIO())",
        "package": "llvm-ht",
        "partial": "Dispose Module",
        "signature": "FunPtr(ModuleRef-\u003eIO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:ptrDisposeModuleProvider",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "FunPtr (ModuleProviderRef -\u003e IO ())",
        "fct-source": "src/LLVM-FFI-Core.html#ptrDisposeModuleProvider",
        "fct-type": "function",
        "title": "ptrDisposeModuleProvider"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "ptrDisposeModuleProvider",
        "normalized": "FunPtr(ModuleProviderRef-\u003eIO())",
        "package": "llvm-ht",
        "partial": "Dispose Module Provider",
        "signature": "FunPtr(ModuleProviderRef-\u003eIO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:ptrDisposePassManager",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "FunPtr (PassManagerRef -\u003e IO ())",
        "fct-source": "src/LLVM-FFI-Core.html#ptrDisposePassManager",
        "fct-type": "function",
        "title": "ptrDisposePassManager"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "ptrDisposePassManager",
        "normalized": "FunPtr(PassManagerRef-\u003eIO())",
        "package": "llvm-ht",
        "partial": "Dispose Pass Manager",
        "signature": "FunPtr(PassManagerRef-\u003eIO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:refineType",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e TypeRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#refineType",
        "fct-type": "function",
        "title": "refineType"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "refineType",
        "normalized": "TypeRef-\u003eTypeRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Type",
        "signature": "TypeRef-\u003eTypeRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:removeAttribute",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e CAttribute -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#removeAttribute",
        "fct-type": "function",
        "title": "removeAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "removeAttribute",
        "normalized": "ValueRef-\u003eCAttribute-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Attribute",
        "signature": "ValueRef-\u003eCAttribute-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:removeFunctionAttr",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e CAttribute -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#removeFunctionAttr",
        "fct-type": "function",
        "title": "removeFunctionAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "removeFunctionAttr",
        "normalized": "ValueRef-\u003eCAttribute-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Function Attr",
        "signature": "ValueRef-\u003eCAttribute-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:removeInstrAttribute",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e CUInt -\u003e CAttribute -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#removeInstrAttribute",
        "fct-type": "function",
        "title": "removeInstrAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "removeInstrAttribute",
        "normalized": "ValueRef-\u003eCUInt-\u003eCAttribute-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Instr Attribute",
        "signature": "ValueRef-\u003eCUInt-\u003eCAttribute-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:resolveTypeHandle",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeHandleRef -\u003e IO TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#resolveTypeHandle",
        "fct-type": "function",
        "title": "resolveTypeHandle"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "resolveTypeHandle",
        "normalized": "TypeHandleRef-\u003eIO TypeRef",
        "package": "llvm-ht",
        "partial": "Type Handle",
        "signature": "TypeHandleRef-\u003eIO TypeRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:runFunctionPassManager",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e ValueRef -\u003e IO CInt",
        "fct-source": "src/LLVM-FFI-Core.html#runFunctionPassManager",
        "fct-type": "function",
        "title": "runFunctionPassManager"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "runFunctionPassManager",
        "normalized": "PassManagerRef-\u003eValueRef-\u003eIO CInt",
        "package": "llvm-ht",
        "partial": "Function Pass Manager",
        "signature": "PassManagerRef-\u003eValueRef-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:runPassManager",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e ModuleRef -\u003e IO CInt",
        "fct-source": "src/LLVM-FFI-Core.html#runPassManager",
        "fct-type": "function",
        "title": "runPassManager"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "runPassManager",
        "normalized": "PassManagerRef-\u003eModuleRef-\u003eIO CInt",
        "package": "llvm-ht",
        "partial": "Pass Manager",
        "signature": "PassManagerRef-\u003eModuleRef-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setAlignment",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e CUInt -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#setAlignment",
        "fct-type": "function",
        "title": "setAlignment"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "setAlignment",
        "normalized": "ValueRef-\u003eCUInt-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Alignment",
        "signature": "ValueRef-\u003eCUInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setDataLayout",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ModuleRef -\u003e CString -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#setDataLayout",
        "fct-type": "function",
        "title": "setDataLayout"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "setDataLayout",
        "normalized": "ModuleRef-\u003eCString-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Data Layout",
        "signature": "ModuleRef-\u003eCString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setFunctionCallConv",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef-\u003e CUInt-\u003e IO ()",
        "fct-type": "function",
        "title": "setFunctionCallConv"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "setFunctionCallConv",
        "normalized": "ValueRef-\u003eCUInt-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Function Call Conv",
        "signature": "ValueRef-\u003eCUInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setGC",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e CString -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#setGC",
        "fct-type": "function",
        "title": "setGC"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "setGC",
        "normalized": "ValueRef-\u003eCString-\u003eIO()",
        "package": "llvm-ht",
        "partial": "GC",
        "signature": "ValueRef-\u003eCString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setGlobalConstant",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e CInt -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#setGlobalConstant",
        "fct-type": "function",
        "title": "setGlobalConstant"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "setGlobalConstant",
        "normalized": "ValueRef-\u003eCInt-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Global Constant",
        "signature": "ValueRef-\u003eCInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setInitializer",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e ValueRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#setInitializer",
        "fct-type": "function",
        "title": "setInitializer"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "setInitializer",
        "normalized": "ValueRef-\u003eValueRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Initializer",
        "signature": "ValueRef-\u003eValueRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setInstrParamAlignment",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e CUInt -\u003e CUInt -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#setInstrParamAlignment",
        "fct-type": "function",
        "title": "setInstrParamAlignment"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "setInstrParamAlignment",
        "normalized": "ValueRef-\u003eCUInt-\u003eCUInt-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Instr Param Alignment",
        "signature": "ValueRef-\u003eCUInt-\u003eCUInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setInstructionCallConv",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e CUInt -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#setInstructionCallConv",
        "fct-type": "function",
        "title": "setInstructionCallConv"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "setInstructionCallConv",
        "normalized": "ValueRef-\u003eCUInt-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Instruction Call Conv",
        "signature": "ValueRef-\u003eCUInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setLinkage",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e CUInt -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#setLinkage",
        "fct-type": "function",
        "title": "setLinkage"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "setLinkage",
        "normalized": "ValueRef-\u003eCUInt-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Linkage",
        "signature": "ValueRef-\u003eCUInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setParamAlignment",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e CUInt -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#setParamAlignment",
        "fct-type": "function",
        "title": "setParamAlignment"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "setParamAlignment",
        "normalized": "ValueRef-\u003eCUInt-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Param Alignment",
        "signature": "ValueRef-\u003eCUInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setSection",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e CString -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#setSection",
        "fct-type": "function",
        "title": "setSection"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "setSection",
        "normalized": "ValueRef-\u003eCString-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Section",
        "signature": "ValueRef-\u003eCString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setTailCall",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e CInt -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#setTailCall",
        "fct-type": "function",
        "title": "setTailCall"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "setTailCall",
        "normalized": "ValueRef-\u003eCInt-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Tail Call",
        "signature": "ValueRef-\u003eCInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setTarget",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ModuleRef -\u003e CString -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#setTarget",
        "fct-type": "function",
        "title": "setTarget"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "setTarget",
        "normalized": "ModuleRef-\u003eCString-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Target",
        "signature": "ModuleRef-\u003eCString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setThreadLocal",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e CInt -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#setThreadLocal",
        "fct-type": "function",
        "title": "setThreadLocal"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "setThreadLocal",
        "normalized": "ValueRef-\u003eCInt-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Thread Local",
        "signature": "ValueRef-\u003eCInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setValueName",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e CString -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#setValueName",
        "fct-type": "function",
        "title": "setValueName"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "setValueName",
        "normalized": "ValueRef-\u003eCString-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Value Name",
        "signature": "ValueRef-\u003eCString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setVisibility",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e CUInt -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Core.html#setVisibility",
        "fct-type": "function",
        "title": "setVisibility"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "setVisibility",
        "normalized": "ValueRef-\u003eCUInt-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Visibility",
        "signature": "ValueRef-\u003eCUInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:sizeOf",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e IO ValueRef",
        "fct-source": "src/LLVM-FFI-Core.html#sizeOf",
        "fct-type": "function",
        "title": "sizeOf"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "sizeOf",
        "normalized": "TypeRef-\u003eIO ValueRef",
        "package": "llvm-ht",
        "partial": "Of",
        "signature": "TypeRef-\u003eIO ValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:structType",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "Ptr TypeRef -\u003e CUInt -\u003e CInt -\u003e TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#structType",
        "fct-type": "function",
        "title": "structType"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "structType",
        "normalized": "Ptr TypeRef-\u003eCUInt-\u003eCInt-\u003eTypeRef",
        "package": "llvm-ht",
        "partial": "Type",
        "signature": "Ptr TypeRef-\u003eCUInt-\u003eCInt-\u003eTypeRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:structTypeInContext",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ContextRef -\u003e Ptr TypeRef -\u003e CUInt -\u003e CInt -\u003e IO TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#structTypeInContext",
        "fct-type": "function",
        "title": "structTypeInContext"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "structTypeInContext",
        "normalized": "ContextRef-\u003ePtr TypeRef-\u003eCUInt-\u003eCInt-\u003eIO TypeRef",
        "package": "llvm-ht",
        "partial": "Type In Context",
        "signature": "ContextRef-\u003ePtr TypeRef-\u003eCUInt-\u003eCInt-\u003eIO TypeRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:toAttribute",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "CAttribute -\u003e Attribute",
        "fct-source": "src/LLVM-FFI-Core.html#toAttribute",
        "fct-type": "function",
        "title": "toAttribute"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "toAttribute",
        "normalized": "CAttribute-\u003eAttribute",
        "package": "llvm-ht",
        "partial": "Attribute",
        "signature": "CAttribute-\u003eAttribute"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:toCallingConvention",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "CUInt -\u003e CallingConvention",
        "fct-source": "src/LLVM-FFI-Core.html#toCallingConvention",
        "fct-type": "function",
        "title": "toCallingConvention"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "toCallingConvention",
        "normalized": "CUInt-\u003eCallingConvention",
        "package": "llvm-ht",
        "partial": "Calling Convention",
        "signature": "CUInt-\u003eCallingConvention"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:toLinkage",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "CUInt -\u003e Linkage",
        "fct-source": "src/LLVM-FFI-Core.html#toLinkage",
        "fct-type": "function",
        "title": "toLinkage"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "toLinkage",
        "normalized": "CUInt-\u003eLinkage",
        "package": "llvm-ht",
        "partial": "Linkage",
        "signature": "CUInt-\u003eLinkage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:toVisibility",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "CUInt -\u003e Visibility",
        "fct-source": "src/LLVM-FFI-Core.html#toVisibility",
        "fct-type": "function",
        "title": "toVisibility"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "toVisibility",
        "normalized": "CUInt-\u003eVisibility",
        "package": "llvm-ht",
        "partial": "Visibility",
        "signature": "CUInt-\u003eVisibility"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:typeOf",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e IO TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#typeOf",
        "fct-type": "function",
        "title": "typeOf"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "typeOf",
        "normalized": "ValueRef-\u003eIO TypeRef",
        "package": "llvm-ht",
        "partial": "Of",
        "signature": "ValueRef-\u003eIO TypeRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:valueAsBasicBlock",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef-\u003e BasicBlockRef",
        "fct-type": "function",
        "title": "valueAsBasicBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "valueAsBasicBlock",
        "normalized": "ValueRef-\u003eBasicBlockRef",
        "package": "llvm-ht",
        "partial": "As Basic Block",
        "signature": "ValueRef-\u003eBasicBlockRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:valueIsBasicBlock",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ValueRef -\u003e Bool",
        "fct-source": "src/LLVM-FFI-Core.html#valueIsBasicBlock",
        "fct-type": "function",
        "title": "valueIsBasicBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "valueIsBasicBlock",
        "normalized": "ValueRef-\u003eBool",
        "package": "llvm-ht",
        "partial": "Is Basic Block",
        "signature": "ValueRef-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:vectorType",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef-\u003e CUInt-\u003e TypeRef",
        "fct-type": "function",
        "title": "vectorType"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "vectorType",
        "normalized": "TypeRef-\u003eCUInt-\u003eTypeRef",
        "package": "llvm-ht",
        "partial": "Type",
        "signature": "TypeRef-\u003eCUInt-\u003eTypeRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:voidType",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#voidType",
        "fct-type": "function",
        "title": "voidType"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "voidType",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:voidTypeInContext",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ContextRef -\u003e IO TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#voidTypeInContext",
        "fct-type": "function",
        "title": "voidTypeInContext"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "voidTypeInContext",
        "normalized": "ContextRef-\u003eIO TypeRef",
        "package": "llvm-ht",
        "partial": "Type In Context",
        "signature": "ContextRef-\u003eIO TypeRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:x86FP80Type",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#x86FP80Type",
        "fct-type": "function",
        "title": "x86FP80Type"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "x86FP80Type",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "FP Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:x86FP80TypeInContext",
      "description": {
        "fct-module": "LLVM.FFI.Core",
        "fct-package": "llvm-ht",
        "fct-signature": "ContextRef -\u003e IO TypeRef",
        "fct-source": "src/LLVM-FFI-Core.html#x86FP80TypeInContext",
        "fct-type": "function",
        "title": "x86FP80TypeInContext"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Core",
        "module": "LLVM.FFI.Core",
        "name": "x86FP80TypeInContext",
        "normalized": "ContextRef-\u003eIO TypeRef",
        "package": "llvm-ht",
        "partial": "FP Type In Context",
        "signature": "ContextRef-\u003eIO TypeRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#",
      "description": {
        "fct-module": "LLVM.FFI.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "module",
        "fct-source": "src/LLVM-FFI-ExecutionEngine.html",
        "fct-type": "module",
        "title": "ExecutionEngine"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI ExecutionEngine",
        "module": "LLVM.FFI.ExecutionEngine",
        "name": "ExecutionEngine",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Execution Engine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#t:ExecutionEngine",
      "description": {
        "fct-module": "LLVM.FFI.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-FFI-ExecutionEngine.html#ExecutionEngine",
        "fct-type": "data",
        "title": "ExecutionEngine"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI ExecutionEngine",
        "module": "LLVM.FFI.ExecutionEngine",
        "name": "ExecutionEngine",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Execution Engine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#t:GenericValue",
      "description": {
        "fct-module": "LLVM.FFI.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-FFI-ExecutionEngine.html#GenericValue",
        "fct-type": "data",
        "title": "GenericValue"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI ExecutionEngine",
        "module": "LLVM.FFI.ExecutionEngine",
        "name": "GenericValue",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Generic Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#t:GenericValueRef",
      "description": {
        "fct-module": "LLVM.FFI.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "type",
        "fct-source": "src/LLVM-FFI-ExecutionEngine.html#GenericValueRef",
        "fct-type": "type",
        "title": "GenericValueRef"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI ExecutionEngine",
        "module": "LLVM.FFI.ExecutionEngine",
        "name": "GenericValueRef",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Generic Value Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:addGlobalMapping",
      "description": {
        "fct-module": "LLVM.FFI.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "ExecutionEngineRef -\u003e ValueRef -\u003e Ptr () -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-ExecutionEngine.html#addGlobalMapping",
        "fct-type": "function",
        "title": "addGlobalMapping"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI ExecutionEngine",
        "module": "LLVM.FFI.ExecutionEngine",
        "name": "addGlobalMapping",
        "normalized": "ExecutionEngineRef-\u003eValueRef-\u003ePtr()-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Global Mapping",
        "signature": "ExecutionEngineRef-\u003eValueRef-\u003ePtr()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:addModuleProvider",
      "description": {
        "fct-module": "LLVM.FFI.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "ExecutionEngineRef -\u003e ModuleProviderRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-ExecutionEngine.html#addModuleProvider",
        "fct-type": "function",
        "title": "addModuleProvider"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI ExecutionEngine",
        "module": "LLVM.FFI.ExecutionEngine",
        "name": "addModuleProvider",
        "normalized": "ExecutionEngineRef-\u003eModuleProviderRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Module Provider",
        "signature": "ExecutionEngineRef-\u003eModuleProviderRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:createExecutionEngine",
      "description": {
        "fct-module": "LLVM.FFI.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "Ptr ExecutionEngineRef -\u003e ModuleProviderRef -\u003e Ptr CString -\u003e IO CInt",
        "fct-source": "src/LLVM-FFI-ExecutionEngine.html#createExecutionEngine",
        "fct-type": "function",
        "title": "createExecutionEngine"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI ExecutionEngine",
        "module": "LLVM.FFI.ExecutionEngine",
        "name": "createExecutionEngine",
        "normalized": "Ptr ExecutionEngineRef-\u003eModuleProviderRef-\u003ePtr CString-\u003eIO CInt",
        "package": "llvm-ht",
        "partial": "Execution Engine",
        "signature": "Ptr ExecutionEngineRef-\u003eModuleProviderRef-\u003ePtr CString-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:createGenericValueOfFloat",
      "description": {
        "fct-module": "LLVM.FFI.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e CDouble -\u003e IO GenericValueRef",
        "fct-source": "src/LLVM-FFI-ExecutionEngine.html#createGenericValueOfFloat",
        "fct-type": "function",
        "title": "createGenericValueOfFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI ExecutionEngine",
        "module": "LLVM.FFI.ExecutionEngine",
        "name": "createGenericValueOfFloat",
        "normalized": "TypeRef-\u003eCDouble-\u003eIO GenericValueRef",
        "package": "llvm-ht",
        "partial": "Generic Value Of Float",
        "signature": "TypeRef-\u003eCDouble-\u003eIO GenericValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:createGenericValueOfInt",
      "description": {
        "fct-module": "LLVM.FFI.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e CULLong -\u003e CInt -\u003e IO GenericValueRef",
        "fct-source": "src/LLVM-FFI-ExecutionEngine.html#createGenericValueOfInt",
        "fct-type": "function",
        "title": "createGenericValueOfInt"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI ExecutionEngine",
        "module": "LLVM.FFI.ExecutionEngine",
        "name": "createGenericValueOfInt",
        "normalized": "TypeRef-\u003eCULLong-\u003eCInt-\u003eIO GenericValueRef",
        "package": "llvm-ht",
        "partial": "Generic Value Of Int",
        "signature": "TypeRef-\u003eCULLong-\u003eCInt-\u003eIO GenericValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:createGenericValueOfPointer",
      "description": {
        "fct-module": "LLVM.FFI.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "Ptr a -\u003e IO GenericValueRef",
        "fct-source": "src/LLVM-FFI-ExecutionEngine.html#createGenericValueOfPointer",
        "fct-type": "function",
        "title": "createGenericValueOfPointer"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI ExecutionEngine",
        "module": "LLVM.FFI.ExecutionEngine",
        "name": "createGenericValueOfPointer",
        "normalized": "Ptr a-\u003eIO GenericValueRef",
        "package": "llvm-ht",
        "partial": "Generic Value Of Pointer",
        "signature": "Ptr a-\u003eIO GenericValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:createInterpreter",
      "description": {
        "fct-module": "LLVM.FFI.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "Ptr ExecutionEngineRef -\u003e ModuleProviderRef -\u003e Ptr CString -\u003e IO CInt",
        "fct-source": "src/LLVM-FFI-ExecutionEngine.html#createInterpreter",
        "fct-type": "function",
        "title": "createInterpreter"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI ExecutionEngine",
        "module": "LLVM.FFI.ExecutionEngine",
        "name": "createInterpreter",
        "normalized": "Ptr ExecutionEngineRef-\u003eModuleProviderRef-\u003ePtr CString-\u003eIO CInt",
        "package": "llvm-ht",
        "partial": "Interpreter",
        "signature": "Ptr ExecutionEngineRef-\u003eModuleProviderRef-\u003ePtr CString-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:createJITCompiler",
      "description": {
        "fct-module": "LLVM.FFI.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "Ptr ExecutionEngineRef -\u003e ModuleProviderRef -\u003e Ptr CString -\u003e IO CInt",
        "fct-source": "src/LLVM-FFI-ExecutionEngine.html#createJITCompiler",
        "fct-type": "function",
        "title": "createJITCompiler"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI ExecutionEngine",
        "module": "LLVM.FFI.ExecutionEngine",
        "name": "createJITCompiler",
        "normalized": "Ptr ExecutionEngineRef-\u003eModuleProviderRef-\u003ePtr CString-\u003eIO CInt",
        "package": "llvm-ht",
        "partial": "JITCompiler",
        "signature": "Ptr ExecutionEngineRef-\u003eModuleProviderRef-\u003ePtr CString-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:findFunction",
      "description": {
        "fct-module": "LLVM.FFI.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "ExecutionEngineRef -\u003e CString -\u003e Ptr ValueRef -\u003e IO CInt",
        "fct-source": "src/LLVM-FFI-ExecutionEngine.html#findFunction",
        "fct-type": "function",
        "title": "findFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI ExecutionEngine",
        "module": "LLVM.FFI.ExecutionEngine",
        "name": "findFunction",
        "normalized": "ExecutionEngineRef-\u003eCString-\u003ePtr ValueRef-\u003eIO CInt",
        "package": "llvm-ht",
        "partial": "Function",
        "signature": "ExecutionEngineRef-\u003eCString-\u003ePtr ValueRef-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:freeMachineCodeForFunction",
      "description": {
        "fct-module": "LLVM.FFI.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "ExecutionEngineRef -\u003e ValueRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-ExecutionEngine.html#freeMachineCodeForFunction",
        "fct-type": "function",
        "title": "freeMachineCodeForFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI ExecutionEngine",
        "module": "LLVM.FFI.ExecutionEngine",
        "name": "freeMachineCodeForFunction",
        "normalized": "ExecutionEngineRef-\u003eValueRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Machine Code For Function",
        "signature": "ExecutionEngineRef-\u003eValueRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:genericValueIntWidth",
      "description": {
        "fct-module": "LLVM.FFI.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "GenericValueRef -\u003e IO CUInt",
        "fct-source": "src/LLVM-FFI-ExecutionEngine.html#genericValueIntWidth",
        "fct-type": "function",
        "title": "genericValueIntWidth"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI ExecutionEngine",
        "module": "LLVM.FFI.ExecutionEngine",
        "name": "genericValueIntWidth",
        "normalized": "GenericValueRef-\u003eIO CUInt",
        "package": "llvm-ht",
        "partial": "Value Int Width",
        "signature": "GenericValueRef-\u003eIO CUInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:genericValueToFloat",
      "description": {
        "fct-module": "LLVM.FFI.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "TypeRef -\u003e GenericValueRef -\u003e CDouble",
        "fct-source": "src/LLVM-FFI-ExecutionEngine.html#genericValueToFloat",
        "fct-type": "function",
        "title": "genericValueToFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI ExecutionEngine",
        "module": "LLVM.FFI.ExecutionEngine",
        "name": "genericValueToFloat",
        "normalized": "TypeRef-\u003eGenericValueRef-\u003eCDouble",
        "package": "llvm-ht",
        "partial": "Value To Float",
        "signature": "TypeRef-\u003eGenericValueRef-\u003eCDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:genericValueToInt",
      "description": {
        "fct-module": "LLVM.FFI.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "GenericValueRef -\u003e CInt -\u003e CULLong",
        "fct-source": "src/LLVM-FFI-ExecutionEngine.html#genericValueToInt",
        "fct-type": "function",
        "title": "genericValueToInt"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI ExecutionEngine",
        "module": "LLVM.FFI.ExecutionEngine",
        "name": "genericValueToInt",
        "normalized": "GenericValueRef-\u003eCInt-\u003eCULLong",
        "package": "llvm-ht",
        "partial": "Value To Int",
        "signature": "GenericValueRef-\u003eCInt-\u003eCULLong"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:genericValueToPointer",
      "description": {
        "fct-module": "LLVM.FFI.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "GenericValueRef -\u003e IO (Ptr a)",
        "fct-source": "src/LLVM-FFI-ExecutionEngine.html#genericValueToPointer",
        "fct-type": "function",
        "title": "genericValueToPointer"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI ExecutionEngine",
        "module": "LLVM.FFI.ExecutionEngine",
        "name": "genericValueToPointer",
        "normalized": "GenericValueRef-\u003eIO(Ptr a)",
        "package": "llvm-ht",
        "partial": "Value To Pointer",
        "signature": "GenericValueRef-\u003eIO(Ptr a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:getExecutionEngineTargetData",
      "description": {
        "fct-module": "LLVM.FFI.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "ExecutionEngineRef -\u003e IO TargetDataRef",
        "fct-source": "src/LLVM-FFI-ExecutionEngine.html#getExecutionEngineTargetData",
        "fct-type": "function",
        "title": "getExecutionEngineTargetData"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI ExecutionEngine",
        "module": "LLVM.FFI.ExecutionEngine",
        "name": "getExecutionEngineTargetData",
        "normalized": "ExecutionEngineRef-\u003eIO TargetDataRef",
        "package": "llvm-ht",
        "partial": "Execution Engine Target Data",
        "signature": "ExecutionEngineRef-\u003eIO TargetDataRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:getPointerToGlobal",
      "description": {
        "fct-module": "LLVM.FFI.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "ExecutionEngineRef -\u003e ValueRef -\u003e IO (FunPtr a)",
        "fct-source": "src/LLVM-FFI-ExecutionEngine.html#getPointerToGlobal",
        "fct-type": "function",
        "title": "getPointerToGlobal"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI ExecutionEngine",
        "module": "LLVM.FFI.ExecutionEngine",
        "name": "getPointerToGlobal",
        "normalized": "ExecutionEngineRef-\u003eValueRef-\u003eIO(FunPtr a)",
        "package": "llvm-ht",
        "partial": "Pointer To Global",
        "signature": "ExecutionEngineRef-\u003eValueRef-\u003eIO(FunPtr a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:linkInJIT",
      "description": {
        "fct-module": "LLVM.FFI.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "IO ()",
        "fct-source": "src/LLVM-FFI-ExecutionEngine.html#linkInJIT",
        "fct-type": "function",
        "title": "linkInJIT"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI ExecutionEngine",
        "module": "LLVM.FFI.ExecutionEngine",
        "name": "linkInJIT",
        "normalized": "IO()",
        "package": "llvm-ht",
        "partial": "In JIT",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:ptrDisposeExecutionEngine",
      "description": {
        "fct-module": "LLVM.FFI.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "FunPtr (ExecutionEngineRef -\u003e IO ())",
        "fct-source": "src/LLVM-FFI-ExecutionEngine.html#ptrDisposeExecutionEngine",
        "fct-type": "function",
        "title": "ptrDisposeExecutionEngine"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI ExecutionEngine",
        "module": "LLVM.FFI.ExecutionEngine",
        "name": "ptrDisposeExecutionEngine",
        "normalized": "FunPtr(ExecutionEngineRef-\u003eIO())",
        "package": "llvm-ht",
        "partial": "Dispose Execution Engine",
        "signature": "FunPtr(ExecutionEngineRef-\u003eIO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:ptrDisposeGenericValue",
      "description": {
        "fct-module": "LLVM.FFI.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "FunPtr (GenericValueRef -\u003e IO ())",
        "fct-source": "src/LLVM-FFI-ExecutionEngine.html#ptrDisposeGenericValue",
        "fct-type": "function",
        "title": "ptrDisposeGenericValue"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI ExecutionEngine",
        "module": "LLVM.FFI.ExecutionEngine",
        "name": "ptrDisposeGenericValue",
        "normalized": "FunPtr(GenericValueRef-\u003eIO())",
        "package": "llvm-ht",
        "partial": "Dispose Generic Value",
        "signature": "FunPtr(GenericValueRef-\u003eIO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:removeModuleProvider",
      "description": {
        "fct-module": "LLVM.FFI.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "ExecutionEngineRef -\u003e ModuleProviderRef -\u003e Ptr ModuleRef -\u003e Ptr CString -\u003e IO CInt",
        "fct-source": "src/LLVM-FFI-ExecutionEngine.html#removeModuleProvider",
        "fct-type": "function",
        "title": "removeModuleProvider"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI ExecutionEngine",
        "module": "LLVM.FFI.ExecutionEngine",
        "name": "removeModuleProvider",
        "normalized": "ExecutionEngineRef-\u003eModuleProviderRef-\u003ePtr ModuleRef-\u003ePtr CString-\u003eIO CInt",
        "package": "llvm-ht",
        "partial": "Module Provider",
        "signature": "ExecutionEngineRef-\u003eModuleProviderRef-\u003ePtr ModuleRef-\u003ePtr CString-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:runFunction",
      "description": {
        "fct-module": "LLVM.FFI.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "ExecutionEngineRef -\u003e ValueRef -\u003e CUInt -\u003e Ptr GenericValueRef -\u003e IO GenericValueRef",
        "fct-source": "src/LLVM-FFI-ExecutionEngine.html#runFunction",
        "fct-type": "function",
        "title": "runFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI ExecutionEngine",
        "module": "LLVM.FFI.ExecutionEngine",
        "name": "runFunction",
        "normalized": "ExecutionEngineRef-\u003eValueRef-\u003eCUInt-\u003ePtr GenericValueRef-\u003eIO GenericValueRef",
        "package": "llvm-ht",
        "partial": "Function",
        "signature": "ExecutionEngineRef-\u003eValueRef-\u003eCUInt-\u003ePtr GenericValueRef-\u003eIO GenericValueRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:runFunctionAsMain",
      "description": {
        "fct-module": "LLVM.FFI.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "ExecutionEngineRef-\u003e ValueRef-\u003e CUInt-\u003e Ptr CString-\u003e Ptr CString-\u003e IO CInt",
        "fct-type": "function",
        "title": "runFunctionAsMain"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI ExecutionEngine",
        "module": "LLVM.FFI.ExecutionEngine",
        "name": "runFunctionAsMain",
        "normalized": "ExecutionEngineRef-\u003eValueRef-\u003eCUInt-\u003ePtr CString-\u003ePtr CString-\u003eIO CInt",
        "package": "llvm-ht",
        "partial": "Function As Main",
        "signature": "ExecutionEngineRef-\u003eValueRef-\u003eCUInt-\u003ePtr CString-\u003ePtr CString-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:runStaticConstructors",
      "description": {
        "fct-module": "LLVM.FFI.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "ExecutionEngineRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-ExecutionEngine.html#runStaticConstructors",
        "fct-type": "function",
        "title": "runStaticConstructors"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI ExecutionEngine",
        "module": "LLVM.FFI.ExecutionEngine",
        "name": "runStaticConstructors",
        "normalized": "ExecutionEngineRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Static Constructors",
        "signature": "ExecutionEngineRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:runStaticDestructors",
      "description": {
        "fct-module": "LLVM.FFI.ExecutionEngine",
        "fct-package": "llvm-ht",
        "fct-signature": "ExecutionEngineRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-ExecutionEngine.html#runStaticDestructors",
        "fct-type": "function",
        "title": "runStaticDestructors"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI ExecutionEngine",
        "module": "LLVM.FFI.ExecutionEngine",
        "name": "runStaticDestructors",
        "normalized": "ExecutionEngineRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Static Destructors",
        "signature": "ExecutionEngineRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#",
      "description": {
        "fct-module": "LLVM.FFI.Target",
        "fct-package": "llvm-ht",
        "fct-signature": "module",
        "fct-source": "src/LLVM-FFI-Target.html",
        "fct-type": "module",
        "title": "Target"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Target",
        "module": "LLVM.FFI.Target",
        "name": "Target",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Target",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#t:ByteOrdering",
      "description": {
        "fct-module": "LLVM.FFI.Target",
        "fct-package": "llvm-ht",
        "fct-signature": "type",
        "fct-source": "src/LLVM-FFI-Target.html#ByteOrdering",
        "fct-type": "type",
        "title": "ByteOrdering"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Target",
        "module": "LLVM.FFI.Target",
        "name": "ByteOrdering",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Byte Ordering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#t:TargetData",
      "description": {
        "fct-module": "LLVM.FFI.Target",
        "fct-package": "llvm-ht",
        "fct-signature": "data",
        "fct-source": "src/LLVM-FFI-Target.html#TargetData",
        "fct-type": "data",
        "title": "TargetData"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Target",
        "module": "LLVM.FFI.Target",
        "name": "TargetData",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Target Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#t:TargetDataRef",
      "description": {
        "fct-module": "LLVM.FFI.Target",
        "fct-package": "llvm-ht",
        "fct-signature": "type",
        "fct-source": "src/LLVM-FFI-Target.html#TargetDataRef",
        "fct-type": "type",
        "title": "TargetDataRef"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Target",
        "module": "LLVM.FFI.Target",
        "name": "TargetDataRef",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Target Data Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:aBIAlignmentOfType",
      "description": {
        "fct-module": "LLVM.FFI.Target",
        "fct-package": "llvm-ht",
        "fct-signature": "TargetDataRef -\u003e TypeRef -\u003e CUInt",
        "fct-source": "src/LLVM-FFI-Target.html#aBIAlignmentOfType",
        "fct-type": "function",
        "title": "aBIAlignmentOfType"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Target",
        "module": "LLVM.FFI.Target",
        "name": "aBIAlignmentOfType",
        "normalized": "TargetDataRef-\u003eTypeRef-\u003eCUInt",
        "package": "llvm-ht",
        "partial": "BIAlignment Of Type",
        "signature": "TargetDataRef-\u003eTypeRef-\u003eCUInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:aBISizeOfType",
      "description": {
        "fct-module": "LLVM.FFI.Target",
        "fct-package": "llvm-ht",
        "fct-signature": "TargetDataRef -\u003e TypeRef -\u003e CULLong",
        "fct-source": "src/LLVM-FFI-Target.html#aBISizeOfType",
        "fct-type": "function",
        "title": "aBISizeOfType"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Target",
        "module": "LLVM.FFI.Target",
        "name": "aBISizeOfType",
        "normalized": "TargetDataRef-\u003eTypeRef-\u003eCULLong",
        "package": "llvm-ht",
        "partial": "BISize Of Type",
        "signature": "TargetDataRef-\u003eTypeRef-\u003eCULLong"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:addTargetData",
      "description": {
        "fct-module": "LLVM.FFI.Target",
        "fct-package": "llvm-ht",
        "fct-signature": "TargetDataRef -\u003e PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Target.html#addTargetData",
        "fct-type": "function",
        "title": "addTargetData"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Target",
        "module": "LLVM.FFI.Target",
        "name": "addTargetData",
        "normalized": "TargetDataRef-\u003ePassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Target Data",
        "signature": "TargetDataRef-\u003ePassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:byteOrder",
      "description": {
        "fct-module": "LLVM.FFI.Target",
        "fct-package": "llvm-ht",
        "fct-signature": "TargetDataRef -\u003e ByteOrdering",
        "fct-source": "src/LLVM-FFI-Target.html#byteOrder",
        "fct-type": "function",
        "title": "byteOrder"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Target",
        "module": "LLVM.FFI.Target",
        "name": "byteOrder",
        "normalized": "TargetDataRef-\u003eByteOrdering",
        "package": "llvm-ht",
        "partial": "Order",
        "signature": "TargetDataRef-\u003eByteOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:callFrameAlignmentOfType",
      "description": {
        "fct-module": "LLVM.FFI.Target",
        "fct-package": "llvm-ht",
        "fct-signature": "TargetDataRef -\u003e TypeRef -\u003e CUInt",
        "fct-source": "src/LLVM-FFI-Target.html#callFrameAlignmentOfType",
        "fct-type": "function",
        "title": "callFrameAlignmentOfType"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Target",
        "module": "LLVM.FFI.Target",
        "name": "callFrameAlignmentOfType",
        "normalized": "TargetDataRef-\u003eTypeRef-\u003eCUInt",
        "package": "llvm-ht",
        "partial": "Frame Alignment Of Type",
        "signature": "TargetDataRef-\u003eTypeRef-\u003eCUInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:copyStringRepOfTargetData",
      "description": {
        "fct-module": "LLVM.FFI.Target",
        "fct-package": "llvm-ht",
        "fct-signature": "TargetDataRef -\u003e IO CString",
        "fct-source": "src/LLVM-FFI-Target.html#copyStringRepOfTargetData",
        "fct-type": "function",
        "title": "copyStringRepOfTargetData"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Target",
        "module": "LLVM.FFI.Target",
        "name": "copyStringRepOfTargetData",
        "normalized": "TargetDataRef-\u003eIO CString",
        "package": "llvm-ht",
        "partial": "String Rep Of Target Data",
        "signature": "TargetDataRef-\u003eIO CString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:createTargetData",
      "description": {
        "fct-module": "LLVM.FFI.Target",
        "fct-package": "llvm-ht",
        "fct-signature": "CString -\u003e IO TargetDataRef",
        "fct-source": "src/LLVM-FFI-Target.html#createTargetData",
        "fct-type": "function",
        "title": "createTargetData"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Target",
        "module": "LLVM.FFI.Target",
        "name": "createTargetData",
        "normalized": "CString-\u003eIO TargetDataRef",
        "package": "llvm-ht",
        "partial": "Target Data",
        "signature": "CString-\u003eIO TargetDataRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:disposeTargetData",
      "description": {
        "fct-module": "LLVM.FFI.Target",
        "fct-package": "llvm-ht",
        "fct-signature": "TargetDataRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Target.html#disposeTargetData",
        "fct-type": "function",
        "title": "disposeTargetData"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Target",
        "module": "LLVM.FFI.Target",
        "name": "disposeTargetData",
        "normalized": "TargetDataRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Target Data",
        "signature": "TargetDataRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:elementAtOffset",
      "description": {
        "fct-module": "LLVM.FFI.Target",
        "fct-package": "llvm-ht",
        "fct-signature": "TargetDataRef -\u003e TypeRef -\u003e CULLong -\u003e CUInt",
        "fct-source": "src/LLVM-FFI-Target.html#elementAtOffset",
        "fct-type": "function",
        "title": "elementAtOffset"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Target",
        "module": "LLVM.FFI.Target",
        "name": "elementAtOffset",
        "normalized": "TargetDataRef-\u003eTypeRef-\u003eCULLong-\u003eCUInt",
        "package": "llvm-ht",
        "partial": "At Offset",
        "signature": "TargetDataRef-\u003eTypeRef-\u003eCULLong-\u003eCUInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:intPtrType",
      "description": {
        "fct-module": "LLVM.FFI.Target",
        "fct-package": "llvm-ht",
        "fct-signature": "TargetDataRef -\u003e TypeRef",
        "fct-source": "src/LLVM-FFI-Target.html#intPtrType",
        "fct-type": "function",
        "title": "intPtrType"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Target",
        "module": "LLVM.FFI.Target",
        "name": "intPtrType",
        "normalized": "TargetDataRef-\u003eTypeRef",
        "package": "llvm-ht",
        "partial": "Ptr Type",
        "signature": "TargetDataRef-\u003eTypeRef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:invalidateStructLayout",
      "description": {
        "fct-module": "LLVM.FFI.Target",
        "fct-package": "llvm-ht",
        "fct-signature": "TargetDataRef -\u003e TypeRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Target.html#invalidateStructLayout",
        "fct-type": "function",
        "title": "invalidateStructLayout"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Target",
        "module": "LLVM.FFI.Target",
        "name": "invalidateStructLayout",
        "normalized": "TargetDataRef-\u003eTypeRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Struct Layout",
        "signature": "TargetDataRef-\u003eTypeRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:offsetOfElement",
      "description": {
        "fct-module": "LLVM.FFI.Target",
        "fct-package": "llvm-ht",
        "fct-signature": "TargetDataRef -\u003e TypeRef -\u003e CUInt -\u003e CULLong",
        "fct-source": "src/LLVM-FFI-Target.html#offsetOfElement",
        "fct-type": "function",
        "title": "offsetOfElement"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Target",
        "module": "LLVM.FFI.Target",
        "name": "offsetOfElement",
        "normalized": "TargetDataRef-\u003eTypeRef-\u003eCUInt-\u003eCULLong",
        "package": "llvm-ht",
        "partial": "Of Element",
        "signature": "TargetDataRef-\u003eTypeRef-\u003eCUInt-\u003eCULLong"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:pointerSize",
      "description": {
        "fct-module": "LLVM.FFI.Target",
        "fct-package": "llvm-ht",
        "fct-signature": "TargetDataRef -\u003e CUInt",
        "fct-source": "src/LLVM-FFI-Target.html#pointerSize",
        "fct-type": "function",
        "title": "pointerSize"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Target",
        "module": "LLVM.FFI.Target",
        "name": "pointerSize",
        "normalized": "TargetDataRef-\u003eCUInt",
        "package": "llvm-ht",
        "partial": "Size",
        "signature": "TargetDataRef-\u003eCUInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:preferredAlignmentOfGlobal",
      "description": {
        "fct-module": "LLVM.FFI.Target",
        "fct-package": "llvm-ht",
        "fct-signature": "TargetDataRef -\u003e ValueRef -\u003e CUInt",
        "fct-source": "src/LLVM-FFI-Target.html#preferredAlignmentOfGlobal",
        "fct-type": "function",
        "title": "preferredAlignmentOfGlobal"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Target",
        "module": "LLVM.FFI.Target",
        "name": "preferredAlignmentOfGlobal",
        "normalized": "TargetDataRef-\u003eValueRef-\u003eCUInt",
        "package": "llvm-ht",
        "partial": "Alignment Of Global",
        "signature": "TargetDataRef-\u003eValueRef-\u003eCUInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:preferredAlignmentOfType",
      "description": {
        "fct-module": "LLVM.FFI.Target",
        "fct-package": "llvm-ht",
        "fct-signature": "TargetDataRef -\u003e TypeRef -\u003e CUInt",
        "fct-source": "src/LLVM-FFI-Target.html#preferredAlignmentOfType",
        "fct-type": "function",
        "title": "preferredAlignmentOfType"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Target",
        "module": "LLVM.FFI.Target",
        "name": "preferredAlignmentOfType",
        "normalized": "TargetDataRef-\u003eTypeRef-\u003eCUInt",
        "package": "llvm-ht",
        "partial": "Alignment Of Type",
        "signature": "TargetDataRef-\u003eTypeRef-\u003eCUInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:sizeOfTypeInBits",
      "description": {
        "fct-module": "LLVM.FFI.Target",
        "fct-package": "llvm-ht",
        "fct-signature": "TargetDataRef -\u003e TypeRef -\u003e CULLong",
        "fct-source": "src/LLVM-FFI-Target.html#sizeOfTypeInBits",
        "fct-type": "function",
        "title": "sizeOfTypeInBits"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Target",
        "module": "LLVM.FFI.Target",
        "name": "sizeOfTypeInBits",
        "normalized": "TargetDataRef-\u003eTypeRef-\u003eCULLong",
        "package": "llvm-ht",
        "partial": "Of Type In Bits",
        "signature": "TargetDataRef-\u003eTypeRef-\u003eCULLong"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:storeSizeOfType",
      "description": {
        "fct-module": "LLVM.FFI.Target",
        "fct-package": "llvm-ht",
        "fct-signature": "TargetDataRef -\u003e TypeRef -\u003e CULLong",
        "fct-source": "src/LLVM-FFI-Target.html#storeSizeOfType",
        "fct-type": "function",
        "title": "storeSizeOfType"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Target",
        "module": "LLVM.FFI.Target",
        "name": "storeSizeOfType",
        "normalized": "TargetDataRef-\u003eTypeRef-\u003eCULLong",
        "package": "llvm-ht",
        "partial": "Size Of Type",
        "signature": "TargetDataRef-\u003eTypeRef-\u003eCULLong"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.IPO",
        "fct-package": "llvm-ht",
        "fct-signature": "module",
        "fct-source": "src/LLVM-FFI-Transforms-IPO.html",
        "fct-type": "module",
        "title": "IPO"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms IPO",
        "module": "LLVM.FFI.Transforms.IPO",
        "name": "IPO",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "IPO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#v:addArgumentPromotionPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.IPO",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-IPO.html#addArgumentPromotionPass",
        "fct-type": "function",
        "title": "addArgumentPromotionPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms IPO",
        "module": "LLVM.FFI.Transforms.IPO",
        "name": "addArgumentPromotionPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Argument Promotion Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#v:addConstantMergePass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.IPO",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-IPO.html#addConstantMergePass",
        "fct-type": "function",
        "title": "addConstantMergePass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms IPO",
        "module": "LLVM.FFI.Transforms.IPO",
        "name": "addConstantMergePass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Constant Merge Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#v:addDeadArgEliminationPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.IPO",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-IPO.html#addDeadArgEliminationPass",
        "fct-type": "function",
        "title": "addDeadArgEliminationPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms IPO",
        "module": "LLVM.FFI.Transforms.IPO",
        "name": "addDeadArgEliminationPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Dead Arg Elimination Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#v:addDeadTypeEliminationPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.IPO",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-IPO.html#addDeadTypeEliminationPass",
        "fct-type": "function",
        "title": "addDeadTypeEliminationPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms IPO",
        "module": "LLVM.FFI.Transforms.IPO",
        "name": "addDeadTypeEliminationPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Dead Type Elimination Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#v:addFunctionAttrsPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.IPO",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-IPO.html#addFunctionAttrsPass",
        "fct-type": "function",
        "title": "addFunctionAttrsPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms IPO",
        "module": "LLVM.FFI.Transforms.IPO",
        "name": "addFunctionAttrsPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Function Attrs Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#v:addFunctionInliningPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.IPO",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-IPO.html#addFunctionInliningPass",
        "fct-type": "function",
        "title": "addFunctionInliningPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms IPO",
        "module": "LLVM.FFI.Transforms.IPO",
        "name": "addFunctionInliningPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Function Inlining Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#v:addGlobalDCEPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.IPO",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-IPO.html#addGlobalDCEPass",
        "fct-type": "function",
        "title": "addGlobalDCEPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms IPO",
        "module": "LLVM.FFI.Transforms.IPO",
        "name": "addGlobalDCEPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Global DCEPass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#v:addGlobalOptimizerPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.IPO",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-IPO.html#addGlobalOptimizerPass",
        "fct-type": "function",
        "title": "addGlobalOptimizerPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms IPO",
        "module": "LLVM.FFI.Transforms.IPO",
        "name": "addGlobalOptimizerPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Global Optimizer Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#v:addIPConstantPropagationPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.IPO",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-IPO.html#addIPConstantPropagationPass",
        "fct-type": "function",
        "title": "addIPConstantPropagationPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms IPO",
        "module": "LLVM.FFI.Transforms.IPO",
        "name": "addIPConstantPropagationPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "IPConstant Propagation Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#v:addLowerSetJmpPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.IPO",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-IPO.html#addLowerSetJmpPass",
        "fct-type": "function",
        "title": "addLowerSetJmpPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms IPO",
        "module": "LLVM.FFI.Transforms.IPO",
        "name": "addLowerSetJmpPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Lower Set Jmp Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#v:addPruneEHPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.IPO",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-IPO.html#addPruneEHPass",
        "fct-type": "function",
        "title": "addPruneEHPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms IPO",
        "module": "LLVM.FFI.Transforms.IPO",
        "name": "addPruneEHPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Prune EHPass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#v:addRaiseAllocationsPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.IPO",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-IPO.html#addRaiseAllocationsPass",
        "fct-type": "function",
        "title": "addRaiseAllocationsPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms IPO",
        "module": "LLVM.FFI.Transforms.IPO",
        "name": "addRaiseAllocationsPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Raise Allocations Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#v:addStripDeadPrototypesPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.IPO",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-IPO.html#addStripDeadPrototypesPass",
        "fct-type": "function",
        "title": "addStripDeadPrototypesPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms IPO",
        "module": "LLVM.FFI.Transforms.IPO",
        "name": "addStripDeadPrototypesPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Strip Dead Prototypes Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#v:addStripSymbolsPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.IPO",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-IPO.html#addStripSymbolsPass",
        "fct-type": "function",
        "title": "addStripSymbolsPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms IPO",
        "module": "LLVM.FFI.Transforms.IPO",
        "name": "addStripSymbolsPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Strip Symbols Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.Scalar",
        "fct-package": "llvm-ht",
        "fct-signature": "module",
        "fct-source": "src/LLVM-FFI-Transforms-Scalar.html",
        "fct-type": "module",
        "title": "Scalar"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms Scalar",
        "module": "LLVM.FFI.Transforms.Scalar",
        "name": "Scalar",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Scalar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addAggressiveDCEPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.Scalar",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-Scalar.html#addAggressiveDCEPass",
        "fct-type": "function",
        "title": "addAggressiveDCEPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms Scalar",
        "module": "LLVM.FFI.Transforms.Scalar",
        "name": "addAggressiveDCEPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Aggressive DCEPass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addCFGSimplificationPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.Scalar",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-Scalar.html#addCFGSimplificationPass",
        "fct-type": "function",
        "title": "addCFGSimplificationPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms Scalar",
        "module": "LLVM.FFI.Transforms.Scalar",
        "name": "addCFGSimplificationPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "CFGSimplification Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addCondPropagationPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.Scalar",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-Scalar.html#addCondPropagationPass",
        "fct-type": "function",
        "title": "addCondPropagationPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms Scalar",
        "module": "LLVM.FFI.Transforms.Scalar",
        "name": "addCondPropagationPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Cond Propagation Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addConstantPropagationPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.Scalar",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-Scalar.html#addConstantPropagationPass",
        "fct-type": "function",
        "title": "addConstantPropagationPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms Scalar",
        "module": "LLVM.FFI.Transforms.Scalar",
        "name": "addConstantPropagationPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Constant Propagation Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addDeadStoreEliminationPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.Scalar",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-Scalar.html#addDeadStoreEliminationPass",
        "fct-type": "function",
        "title": "addDeadStoreEliminationPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms Scalar",
        "module": "LLVM.FFI.Transforms.Scalar",
        "name": "addDeadStoreEliminationPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Dead Store Elimination Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addDemoteMemoryToRegisterPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.Scalar",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-Scalar.html#addDemoteMemoryToRegisterPass",
        "fct-type": "function",
        "title": "addDemoteMemoryToRegisterPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms Scalar",
        "module": "LLVM.FFI.Transforms.Scalar",
        "name": "addDemoteMemoryToRegisterPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Demote Memory To Register Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addGVNPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.Scalar",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-Scalar.html#addGVNPass",
        "fct-type": "function",
        "title": "addGVNPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms Scalar",
        "module": "LLVM.FFI.Transforms.Scalar",
        "name": "addGVNPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "GVNPass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addIndVarSimplifyPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.Scalar",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-Scalar.html#addIndVarSimplifyPass",
        "fct-type": "function",
        "title": "addIndVarSimplifyPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms Scalar",
        "module": "LLVM.FFI.Transforms.Scalar",
        "name": "addIndVarSimplifyPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Ind Var Simplify Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addInstructionCombiningPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.Scalar",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-Scalar.html#addInstructionCombiningPass",
        "fct-type": "function",
        "title": "addInstructionCombiningPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms Scalar",
        "module": "LLVM.FFI.Transforms.Scalar",
        "name": "addInstructionCombiningPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Instruction Combining Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addJumpThreadingPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.Scalar",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-Scalar.html#addJumpThreadingPass",
        "fct-type": "function",
        "title": "addJumpThreadingPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms Scalar",
        "module": "LLVM.FFI.Transforms.Scalar",
        "name": "addJumpThreadingPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Jump Threading Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addLICMPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.Scalar",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-Scalar.html#addLICMPass",
        "fct-type": "function",
        "title": "addLICMPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms Scalar",
        "module": "LLVM.FFI.Transforms.Scalar",
        "name": "addLICMPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "LICMPass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addLoopDeletionPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.Scalar",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-Scalar.html#addLoopDeletionPass",
        "fct-type": "function",
        "title": "addLoopDeletionPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms Scalar",
        "module": "LLVM.FFI.Transforms.Scalar",
        "name": "addLoopDeletionPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Loop Deletion Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addLoopIndexSplitPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.Scalar",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-Scalar.html#addLoopIndexSplitPass",
        "fct-type": "function",
        "title": "addLoopIndexSplitPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms Scalar",
        "module": "LLVM.FFI.Transforms.Scalar",
        "name": "addLoopIndexSplitPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Loop Index Split Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addLoopRotatePass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.Scalar",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-Scalar.html#addLoopRotatePass",
        "fct-type": "function",
        "title": "addLoopRotatePass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms Scalar",
        "module": "LLVM.FFI.Transforms.Scalar",
        "name": "addLoopRotatePass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Loop Rotate Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addLoopUnrollPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.Scalar",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-Scalar.html#addLoopUnrollPass",
        "fct-type": "function",
        "title": "addLoopUnrollPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms Scalar",
        "module": "LLVM.FFI.Transforms.Scalar",
        "name": "addLoopUnrollPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Loop Unroll Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addLoopUnswitchPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.Scalar",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-Scalar.html#addLoopUnswitchPass",
        "fct-type": "function",
        "title": "addLoopUnswitchPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms Scalar",
        "module": "LLVM.FFI.Transforms.Scalar",
        "name": "addLoopUnswitchPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Loop Unswitch Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addMemCpyOptPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.Scalar",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-Scalar.html#addMemCpyOptPass",
        "fct-type": "function",
        "title": "addMemCpyOptPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms Scalar",
        "module": "LLVM.FFI.Transforms.Scalar",
        "name": "addMemCpyOptPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Mem Cpy Opt Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addPromoteMemoryToRegisterPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.Scalar",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-Scalar.html#addPromoteMemoryToRegisterPass",
        "fct-type": "function",
        "title": "addPromoteMemoryToRegisterPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms Scalar",
        "module": "LLVM.FFI.Transforms.Scalar",
        "name": "addPromoteMemoryToRegisterPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Promote Memory To Register Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addReassociatePass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.Scalar",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-Scalar.html#addReassociatePass",
        "fct-type": "function",
        "title": "addReassociatePass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms Scalar",
        "module": "LLVM.FFI.Transforms.Scalar",
        "name": "addReassociatePass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Reassociate Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addSCCPPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.Scalar",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-Scalar.html#addSCCPPass",
        "fct-type": "function",
        "title": "addSCCPPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms Scalar",
        "module": "LLVM.FFI.Transforms.Scalar",
        "name": "addSCCPPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "SCCPPass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addScalarReplAggregatesPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.Scalar",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-Scalar.html#addScalarReplAggregatesPass",
        "fct-type": "function",
        "title": "addScalarReplAggregatesPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms Scalar",
        "module": "LLVM.FFI.Transforms.Scalar",
        "name": "addScalarReplAggregatesPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Scalar Repl Aggregates Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addSimplifyLibCallsPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.Scalar",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-Scalar.html#addSimplifyLibCallsPass",
        "fct-type": "function",
        "title": "addSimplifyLibCallsPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms Scalar",
        "module": "LLVM.FFI.Transforms.Scalar",
        "name": "addSimplifyLibCallsPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Simplify Lib Calls Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addTailCallEliminationPass",
      "description": {
        "fct-module": "LLVM.FFI.Transforms.Scalar",
        "fct-package": "llvm-ht",
        "fct-signature": "PassManagerRef -\u003e IO ()",
        "fct-source": "src/LLVM-FFI-Transforms-Scalar.html#addTailCallEliminationPass",
        "fct-type": "function",
        "title": "addTailCallEliminationPass"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM FFI Transforms Scalar",
        "module": "LLVM.FFI.Transforms.Scalar",
        "name": "addTailCallEliminationPass",
        "normalized": "PassManagerRef-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Tail Call Elimination Pass",
        "signature": "PassManagerRef-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#",
      "description": {
        "fct-module": "LLVM.Util.Arithmetic",
        "fct-package": "llvm-ht",
        "fct-signature": "module",
        "fct-source": "src/LLVM-Util-Arithmetic.html",
        "fct-type": "module",
        "title": "Arithmetic"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Util Arithmetic",
        "module": "LLVM.Util.Arithmetic",
        "name": "Arithmetic",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Arithmetic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#t:ArithFunction",
      "description": {
        "fct-module": "LLVM.Util.Arithmetic",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Util-Arithmetic.html#ArithFunction",
        "fct-type": "class",
        "title": "ArithFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Util Arithmetic",
        "module": "LLVM.Util.Arithmetic",
        "name": "ArithFunction",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Arith Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#t:CallIntrinsic",
      "description": {
        "fct-module": "LLVM.Util.Arithmetic",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Util-Arithmetic.html#CallIntrinsic",
        "fct-type": "class",
        "title": "CallIntrinsic"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Util Arithmetic",
        "module": "LLVM.Util.Arithmetic",
        "name": "CallIntrinsic",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Call Intrinsic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#t:Cmp",
      "description": {
        "fct-module": "LLVM.Util.Arithmetic",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Util-Arithmetic.html#Cmp",
        "fct-type": "class",
        "title": "Cmp"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Util Arithmetic",
        "module": "LLVM.Util.Arithmetic",
        "name": "Cmp",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Cmp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#t:TValue",
      "description": {
        "fct-descr": "\u003cp\u003eSynonym for \u003ccode\u003eCodeGenFunction r (Value a)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LLVM.Util.Arithmetic",
        "fct-package": "llvm-ht",
        "fct-signature": "type",
        "fct-source": "src/LLVM-Util-Arithmetic.html#TValue",
        "fct-type": "type",
        "title": "TValue"
      },
      "index": {
        "description": "Synonym for CodeGenFunction Value",
        "hierarchy": "LLVM Util Arithmetic",
        "module": "LLVM.Util.Arithmetic",
        "name": "TValue",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "TValue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#t:UnwrapArgs",
      "description": {
        "fct-module": "LLVM.Util.Arithmetic",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Util-Arithmetic.html#UnwrapArgs",
        "fct-type": "class",
        "title": "UnwrapArgs"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Util Arithmetic",
        "module": "LLVM.Util.Arithmetic",
        "name": "UnwrapArgs",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Unwrap Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:-37--124--124-",
      "description": {
        "fct-descr": "\u003cp\u003eLazy or.\n\u003c/p\u003e",
        "fct-module": "LLVM.Util.Arithmetic",
        "fct-package": "llvm-ht",
        "fct-signature": "TValue r Bool -\u003e TValue r Bool -\u003e TValue r Bool",
        "fct-source": "src/LLVM-Util-Arithmetic.html#%25%7C%7C",
        "fct-type": "function",
        "title": "(%||)"
      },
      "index": {
        "description": "Lazy or",
        "hierarchy": "LLVM Util Arithmetic",
        "module": "LLVM.Util.Arithmetic",
        "name": "(%||) %||",
        "normalized": "TValue a Bool-\u003eTValue a Bool-\u003eTValue a Bool",
        "package": "llvm-ht",
        "partial": "",
        "signature": "TValue r Bool-\u003eTValue r Bool-\u003eTValue r Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:-37--38--38-",
      "description": {
        "fct-descr": "\u003cp\u003eLazy and.\n\u003c/p\u003e",
        "fct-module": "LLVM.Util.Arithmetic",
        "fct-package": "llvm-ht",
        "fct-signature": "TValue r Bool -\u003e TValue r Bool -\u003e TValue r Bool",
        "fct-source": "src/LLVM-Util-Arithmetic.html#%25%26%26",
        "fct-type": "function",
        "title": "(%&&)"
      },
      "index": {
        "description": "Lazy and",
        "hierarchy": "LLVM Util Arithmetic",
        "module": "LLVM.Util.Arithmetic",
        "name": "(%&&) %&&",
        "normalized": "TValue a Bool-\u003eTValue a Bool-\u003eTValue a Bool",
        "package": "llvm-ht",
        "partial": "",
        "signature": "TValue r Bool-\u003eTValue r Bool-\u003eTValue r Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:-37--47--61-",
      "description": {
        "fct-descr": "\u003cp\u003eComparison functions.\n\u003c/p\u003e",
        "fct-module": "LLVM.Util.Arithmetic",
        "fct-package": "llvm-ht",
        "fct-signature": "TValue r a -\u003e TValue r a -\u003e TValue r b",
        "fct-source": "src/LLVM-Util-Arithmetic.html#%25%2F%3D",
        "fct-type": "function",
        "title": "(%/=)"
      },
      "index": {
        "description": "Comparison functions",
        "hierarchy": "LLVM Util Arithmetic",
        "module": "LLVM.Util.Arithmetic",
        "name": "(%/=) %/=",
        "normalized": "TValue a b-\u003eTValue a b-\u003eTValue a c",
        "package": "llvm-ht",
        "partial": "",
        "signature": "TValue r a-\u003eTValue r a-\u003eTValue r b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:-37--60-",
      "description": {
        "fct-module": "LLVM.Util.Arithmetic",
        "fct-package": "llvm-ht",
        "fct-signature": "TValue r a -\u003e TValue r a -\u003e TValue r b",
        "fct-source": "src/LLVM-Util-Arithmetic.html#%25%3C",
        "fct-type": "function",
        "title": "(%\u003c)"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Util Arithmetic",
        "module": "LLVM.Util.Arithmetic",
        "name": "(%\u003c) %\u003c",
        "normalized": "TValue a b-\u003eTValue a b-\u003eTValue a c",
        "package": "llvm-ht",
        "partial": "",
        "signature": "TValue r a-\u003eTValue r a-\u003eTValue r b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:-37--60--61-",
      "description": {
        "fct-module": "LLVM.Util.Arithmetic",
        "fct-package": "llvm-ht",
        "fct-signature": "TValue r a -\u003e TValue r a -\u003e TValue r b",
        "fct-source": "src/LLVM-Util-Arithmetic.html#%25%3C%3D",
        "fct-type": "function",
        "title": "(%\u003c=)"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Util Arithmetic",
        "module": "LLVM.Util.Arithmetic",
        "name": "(%\u003c=) %\u003c=",
        "normalized": "TValue a b-\u003eTValue a b-\u003eTValue a c",
        "package": "llvm-ht",
        "partial": "",
        "signature": "TValue r a-\u003eTValue r a-\u003eTValue r b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:-37--61--61-",
      "description": {
        "fct-module": "LLVM.Util.Arithmetic",
        "fct-package": "llvm-ht",
        "fct-signature": "TValue r a -\u003e TValue r a -\u003e TValue r b",
        "fct-source": "src/LLVM-Util-Arithmetic.html#%25%3D%3D",
        "fct-type": "function",
        "title": "(%==)"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Util Arithmetic",
        "module": "LLVM.Util.Arithmetic",
        "name": "(%==) %==",
        "normalized": "TValue a b-\u003eTValue a b-\u003eTValue a c",
        "package": "llvm-ht",
        "partial": "",
        "signature": "TValue r a-\u003eTValue r a-\u003eTValue r b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:-37--62-",
      "description": {
        "fct-module": "LLVM.Util.Arithmetic",
        "fct-package": "llvm-ht",
        "fct-signature": "TValue r a -\u003e TValue r a -\u003e TValue r b",
        "fct-source": "src/LLVM-Util-Arithmetic.html#%25%3E",
        "fct-type": "function",
        "title": "(%\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Util Arithmetic",
        "module": "LLVM.Util.Arithmetic",
        "name": "(%\u003e) %\u003e",
        "normalized": "TValue a b-\u003eTValue a b-\u003eTValue a c",
        "package": "llvm-ht",
        "partial": "",
        "signature": "TValue r a-\u003eTValue r a-\u003eTValue r b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:-37--62--61-",
      "description": {
        "fct-module": "LLVM.Util.Arithmetic",
        "fct-package": "llvm-ht",
        "fct-signature": "TValue r a -\u003e TValue r a -\u003e TValue r b",
        "fct-source": "src/LLVM-Util-Arithmetic.html#%25%3E%3D",
        "fct-type": "function",
        "title": "(%\u003e=)"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Util Arithmetic",
        "module": "LLVM.Util.Arithmetic",
        "name": "(%\u003e=) %\u003e=",
        "normalized": "TValue a b-\u003eTValue a b-\u003eTValue a c",
        "package": "llvm-ht",
        "partial": "",
        "signature": "TValue r a-\u003eTValue r a-\u003eTValue r b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:-63-",
      "description": {
        "fct-descr": "\u003cp\u003eConditional, returns first element of the pair when condition is true, otherwise second.\n\u003c/p\u003e",
        "fct-module": "LLVM.Util.Arithmetic",
        "fct-package": "llvm-ht",
        "fct-signature": "TValue r Bool -\u003e (TValue r a, TValue r a) -\u003e TValue r a",
        "fct-source": "src/LLVM-Util-Arithmetic.html#%3F",
        "fct-type": "function",
        "title": "(?)"
      },
      "index": {
        "description": "Conditional returns first element of the pair when condition is true otherwise second",
        "hierarchy": "LLVM Util Arithmetic",
        "module": "LLVM.Util.Arithmetic",
        "name": "(?) ?",
        "normalized": "TValue a Bool-\u003e(TValue a b,TValue a b)-\u003eTValue a b",
        "package": "llvm-ht",
        "partial": "",
        "signature": "TValue r Bool-\u003e(TValue r a,TValue r a)-\u003eTValue r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:-63--63-",
      "description": {
        "fct-module": "LLVM.Util.Arithmetic",
        "fct-package": "llvm-ht",
        "fct-signature": "TValue r b -\u003e (TValue r a, TValue r a) -\u003e TValue r a",
        "fct-source": "src/LLVM-Util-Arithmetic.html#%3F%3F",
        "fct-type": "function",
        "title": "(??)"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Util Arithmetic",
        "module": "LLVM.Util.Arithmetic",
        "name": "(??) ??",
        "normalized": "TValue a b-\u003e(TValue a c,TValue a c)-\u003eTValue a c",
        "package": "llvm-ht",
        "partial": "",
        "signature": "TValue r b-\u003e(TValue r a,TValue r a)-\u003eTValue r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:arithFunction",
      "description": {
        "fct-descr": "\u003cp\u003eUnlift a function with \u003ccode\u003eTValue\u003c/code\u003e to have \u003ccode\u003eValue\u003c/code\u003e arguments.\n\u003c/p\u003e",
        "fct-module": "LLVM.Util.Arithmetic",
        "fct-package": "llvm-ht",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/LLVM-Util-Arithmetic.html#arithFunction",
        "fct-type": "function",
        "title": "arithFunction"
      },
      "index": {
        "description": "Unlift function with TValue to have Value arguments",
        "hierarchy": "LLVM Util Arithmetic",
        "module": "LLVM.Util.Arithmetic",
        "name": "arithFunction",
        "normalized": "a-\u003eb",
        "package": "llvm-ht",
        "partial": "Function",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:cmp",
      "description": {
        "fct-module": "LLVM.Util.Arithmetic",
        "fct-package": "llvm-ht",
        "fct-signature": "IntPredicate -\u003e Value a -\u003e Value a -\u003e TValue r b",
        "fct-source": "src/LLVM-Util-Arithmetic.html#cmp",
        "fct-type": "method",
        "title": "cmp"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Util Arithmetic",
        "module": "LLVM.Util.Arithmetic",
        "name": "cmp",
        "normalized": "IntPredicate-\u003eValue a-\u003eValue a-\u003eTValue b c",
        "package": "llvm-ht",
        "partial": "",
        "signature": "IntPredicate-\u003eValue a-\u003eValue a-\u003eTValue r b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:recursiveFunction",
      "description": {
        "fct-descr": "\u003cp\u003eDefine a recursive \u003ccode\u003e\u003ca\u003earithFunction\u003c/a\u003e\u003c/code\u003e, gets pased itself as the first argument.\n\u003c/p\u003e",
        "fct-module": "LLVM.Util.Arithmetic",
        "fct-package": "llvm-ht",
        "fct-signature": "(a11 -\u003e a3) -\u003e CodeGenModule (Function a)",
        "fct-source": "src/LLVM-Util-Arithmetic.html#recursiveFunction",
        "fct-type": "function",
        "title": "recursiveFunction"
      },
      "index": {
        "description": "Define recursive arithFunction gets pased itself as the first argument",
        "hierarchy": "LLVM Util Arithmetic",
        "module": "LLVM.Util.Arithmetic",
        "name": "recursiveFunction",
        "normalized": "(a-\u003ea)-\u003eCodeGenModule(Function a)",
        "package": "llvm-ht",
        "partial": "Function",
        "signature": "(a-\u003ea)-\u003eCodeGenModule(Function a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:retrn",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a value from an \u003ccode\u003e\u003ca\u003earithFunction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "LLVM.Util.Arithmetic",
        "fct-package": "llvm-ht",
        "fct-signature": "TValue r a -\u003e CodeGenFunction r ()",
        "fct-source": "src/LLVM-Util-Arithmetic.html#retrn",
        "fct-type": "function",
        "title": "retrn"
      },
      "index": {
        "description": "Return value from an arithFunction",
        "hierarchy": "LLVM Util Arithmetic",
        "module": "LLVM.Util.Arithmetic",
        "name": "retrn",
        "normalized": "TValue a b-\u003eCodeGenFunction a()",
        "package": "llvm-ht",
        "partial": "",
        "signature": "TValue r a-\u003eCodeGenFunction r()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:set",
      "description": {
        "fct-descr": "\u003cp\u003eUse \u003ccode\u003ex \u003c- set $ ...\u003c/code\u003e to make a binding.\n\u003c/p\u003e",
        "fct-module": "LLVM.Util.Arithmetic",
        "fct-package": "llvm-ht",
        "fct-signature": "TValue r a -\u003e CodeGenFunction r (TValue r a)",
        "fct-source": "src/LLVM-Util-Arithmetic.html#set",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "Use set to make binding",
        "hierarchy": "LLVM Util Arithmetic",
        "module": "LLVM.Util.Arithmetic",
        "name": "set",
        "normalized": "TValue a b-\u003eCodeGenFunction a(TValue a b)",
        "package": "llvm-ht",
        "partial": "",
        "signature": "TValue r a-\u003eCodeGenFunction r(TValue r a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:toArithFunction",
      "description": {
        "fct-descr": "\u003cp\u003eLift a function from having \u003ccode\u003eValue\u003c/code\u003e arguments to having \u003ccode\u003eTValue\u003c/code\u003e arguments.\n\u003c/p\u003e",
        "fct-module": "LLVM.Util.Arithmetic",
        "fct-package": "llvm-ht",
        "fct-signature": "Function f -\u003e a",
        "fct-source": "src/LLVM-Util-Arithmetic.html#toArithFunction",
        "fct-type": "function",
        "title": "toArithFunction"
      },
      "index": {
        "description": "Lift function from having Value arguments to having TValue arguments",
        "hierarchy": "LLVM Util Arithmetic",
        "module": "LLVM.Util.Arithmetic",
        "name": "toArithFunction",
        "normalized": "Function a-\u003eb",
        "package": "llvm-ht",
        "partial": "Arith Function",
        "signature": "Function f-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-File.html#",
      "description": {
        "fct-module": "LLVM.Util.File",
        "fct-package": "llvm-ht",
        "fct-signature": "module",
        "fct-source": "src/LLVM-Util-File.html",
        "fct-type": "module",
        "title": "File"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Util File",
        "module": "LLVM.Util.File",
        "name": "File",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-File.html#v:optimizeFunction",
      "description": {
        "fct-module": "LLVM.Util.File",
        "fct-package": "llvm-ht",
        "fct-signature": "CodeGenModule (Function t) -\u003e IO (Function t)",
        "fct-source": "src/LLVM-Util-File.html#optimizeFunction",
        "fct-type": "function",
        "title": "optimizeFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Util File",
        "module": "LLVM.Util.File",
        "name": "optimizeFunction",
        "normalized": "CodeGenModule(Function a)-\u003eIO(Function a)",
        "package": "llvm-ht",
        "partial": "Function",
        "signature": "CodeGenModule(Function t)-\u003eIO(Function t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-File.html#v:optimizeFunctionCG",
      "description": {
        "fct-module": "LLVM.Util.File",
        "fct-package": "llvm-ht",
        "fct-signature": "CodeGenModule (Function t) -\u003e IO t",
        "fct-source": "src/LLVM-Util-File.html#optimizeFunctionCG",
        "fct-type": "function",
        "title": "optimizeFunctionCG"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Util File",
        "module": "LLVM.Util.File",
        "name": "optimizeFunctionCG",
        "normalized": "CodeGenModule(Function a)-\u003eIO a",
        "package": "llvm-ht",
        "partial": "Function CG",
        "signature": "CodeGenModule(Function t)-\u003eIO t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-File.html#v:writeCodeGenModule",
      "description": {
        "fct-module": "LLVM.Util.File",
        "fct-package": "llvm-ht",
        "fct-signature": "String -\u003e CodeGenModule a -\u003e IO ()",
        "fct-source": "src/LLVM-Util-File.html#writeCodeGenModule",
        "fct-type": "function",
        "title": "writeCodeGenModule"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Util File",
        "module": "LLVM.Util.File",
        "name": "writeCodeGenModule",
        "normalized": "String-\u003eCodeGenModule a-\u003eIO()",
        "package": "llvm-ht",
        "partial": "Code Gen Module",
        "signature": "String-\u003eCodeGenModule a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Foreign.html#",
      "description": {
        "fct-module": "LLVM.Util.Foreign",
        "fct-package": "llvm-ht",
        "fct-signature": "module",
        "fct-source": "src/LLVM-Util-Foreign.html",
        "fct-type": "module",
        "title": "Foreign"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Util Foreign",
        "module": "LLVM.Util.Foreign",
        "name": "Foreign",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Foreign",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Foreign.html#v:alloca",
      "description": {
        "fct-module": "LLVM.Util.Foreign",
        "fct-package": "llvm-ht",
        "fct-signature": "(Ptr a -\u003e IO b) -\u003e IO b",
        "fct-source": "src/LLVM-Util-Foreign.html#alloca",
        "fct-type": "function",
        "title": "alloca"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Util Foreign",
        "module": "LLVM.Util.Foreign",
        "name": "alloca",
        "normalized": "(Ptr a-\u003eIO b)-\u003eIO b",
        "package": "llvm-ht",
        "partial": "",
        "signature": "(Ptr a-\u003eIO b)-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Foreign.html#v:with",
      "description": {
        "fct-module": "LLVM.Util.Foreign",
        "fct-package": "llvm-ht",
        "fct-signature": "a -\u003e (Ptr a -\u003e IO b) -\u003e IO b",
        "fct-source": "src/LLVM-Util-Foreign.html#with",
        "fct-type": "function",
        "title": "with"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Util Foreign",
        "module": "LLVM.Util.Foreign",
        "name": "with",
        "normalized": "a-\u003e(Ptr a-\u003eIO b)-\u003eIO b",
        "package": "llvm-ht",
        "partial": "",
        "signature": "a-\u003e(Ptr a-\u003eIO b)-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Foreign.html#v:withArrayLen",
      "description": {
        "fct-module": "LLVM.Util.Foreign",
        "fct-package": "llvm-ht",
        "fct-signature": "[a] -\u003e (Int -\u003e Ptr a -\u003e IO b) -\u003e IO b",
        "fct-source": "src/LLVM-Util-Foreign.html#withArrayLen",
        "fct-type": "function",
        "title": "withArrayLen"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Util Foreign",
        "module": "LLVM.Util.Foreign",
        "name": "withArrayLen",
        "normalized": "[a]-\u003e(Int-\u003ePtr a-\u003eIO b)-\u003eIO b",
        "package": "llvm-ht",
        "partial": "Array Len",
        "signature": "[a]-\u003e(Int-\u003ePtr a-\u003eIO b)-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Loop.html#",
      "description": {
        "fct-module": "LLVM.Util.Loop",
        "fct-package": "llvm-ht",
        "fct-signature": "module",
        "fct-source": "src/LLVM-Util-Loop.html",
        "fct-type": "module",
        "title": "Loop"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Util Loop",
        "module": "LLVM.Util.Loop",
        "name": "Loop",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Loop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Loop.html#t:Phi",
      "description": {
        "fct-module": "LLVM.Util.Loop",
        "fct-package": "llvm-ht",
        "fct-signature": "class",
        "fct-source": "src/LLVM-Util-Loop.html#Phi",
        "fct-type": "class",
        "title": "Phi"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Util Loop",
        "module": "LLVM.Util.Loop",
        "name": "Phi",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Phi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Loop.html#v:addPhis",
      "description": {
        "fct-module": "LLVM.Util.Loop",
        "fct-package": "llvm-ht",
        "fct-signature": "BasicBlock -\u003e a -\u003e a -\u003e CodeGenFunction r ()",
        "fct-source": "src/LLVM-Util-Loop.html#addPhis",
        "fct-type": "method",
        "title": "addPhis"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Util Loop",
        "module": "LLVM.Util.Loop",
        "name": "addPhis",
        "normalized": "BasicBlock-\u003ea-\u003ea-\u003eCodeGenFunction b()",
        "package": "llvm-ht",
        "partial": "Phis",
        "signature": "BasicBlock-\u003ea-\u003ea-\u003eCodeGenFunction r()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Loop.html#v:forLoop",
      "description": {
        "fct-module": "LLVM.Util.Loop",
        "fct-package": "llvm-ht",
        "fct-signature": "Value i -\u003e Value i -\u003e a -\u003e (Value i -\u003e a -\u003e CodeGenFunction r a) -\u003e CodeGenFunction r a",
        "fct-source": "src/LLVM-Util-Loop.html#forLoop",
        "fct-type": "function",
        "title": "forLoop"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Util Loop",
        "module": "LLVM.Util.Loop",
        "name": "forLoop",
        "normalized": "Value a-\u003eValue a-\u003eb-\u003e(Value a-\u003eb-\u003eCodeGenFunction c b)-\u003eCodeGenFunction c b",
        "package": "llvm-ht",
        "partial": "Loop",
        "signature": "Value i-\u003eValue i-\u003ea-\u003e(Value i-\u003ea-\u003eCodeGenFunction r a)-\u003eCodeGenFunction r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Loop.html#v:mapVector",
      "description": {
        "fct-module": "LLVM.Util.Loop",
        "fct-package": "llvm-ht",
        "fct-signature": "(Value a -\u003e CodeGenFunction r (Value b)) -\u003e Value (Vector n a) -\u003e CodeGenFunction r (Value (Vector n b))",
        "fct-source": "src/LLVM-Util-Loop.html#mapVector",
        "fct-type": "function",
        "title": "mapVector"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Util Loop",
        "module": "LLVM.Util.Loop",
        "name": "mapVector",
        "normalized": "(Value a-\u003eCodeGenFunction b(Value c))-\u003eValue(Vector d a)-\u003eCodeGenFunction b(Value(Vector d c))",
        "package": "llvm-ht",
        "partial": "Vector",
        "signature": "(Value a-\u003eCodeGenFunction r(Value b))-\u003eValue(Vector n a)-\u003eCodeGenFunction r(Value(Vector n b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Loop.html#v:mapVector2",
      "description": {
        "fct-module": "LLVM.Util.Loop",
        "fct-package": "llvm-ht",
        "fct-signature": "(Value a -\u003e Value b -\u003e CodeGenFunction r (Value c)) -\u003e Value (Vector n a) -\u003e Value (Vector n b) -\u003e CodeGenFunction r (Value (Vector n c))",
        "fct-source": "src/LLVM-Util-Loop.html#mapVector2",
        "fct-type": "function",
        "title": "mapVector2"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Util Loop",
        "module": "LLVM.Util.Loop",
        "name": "mapVector2",
        "normalized": "(Value a-\u003eValue b-\u003eCodeGenFunction c(Value d))-\u003eValue(Vector e a)-\u003eValue(Vector e b)-\u003eCodeGenFunction c(Value(Vector e d))",
        "package": "llvm-ht",
        "partial": "Vector",
        "signature": "(Value a-\u003eValue b-\u003eCodeGenFunction r(Value c))-\u003eValue(Vector n a)-\u003eValue(Vector n b)-\u003eCodeGenFunction r(Value(Vector n c))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Loop.html#v:phis",
      "description": {
        "fct-module": "LLVM.Util.Loop",
        "fct-package": "llvm-ht",
        "fct-signature": "BasicBlock -\u003e a -\u003e CodeGenFunction r a",
        "fct-source": "src/LLVM-Util-Loop.html#phis",
        "fct-type": "method",
        "title": "phis"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Util Loop",
        "module": "LLVM.Util.Loop",
        "name": "phis",
        "normalized": "BasicBlock-\u003ea-\u003eCodeGenFunction b a",
        "package": "llvm-ht",
        "partial": "",
        "signature": "BasicBlock-\u003ea-\u003eCodeGenFunction r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Optimize.html#",
      "description": {
        "fct-module": "LLVM.Util.Optimize",
        "fct-package": "llvm-ht",
        "fct-signature": "module",
        "fct-source": "src/LLVM-Util-Optimize.html",
        "fct-type": "module",
        "title": "Optimize"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Util Optimize",
        "module": "LLVM.Util.Optimize",
        "name": "Optimize",
        "normalized": "",
        "package": "llvm-ht",
        "partial": "Optimize",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Optimize.html#v:optimizeModule",
      "description": {
        "fct-module": "LLVM.Util.Optimize",
        "fct-package": "llvm-ht",
        "fct-signature": "Int -\u003e Module -\u003e IO Int",
        "fct-source": "src/LLVM-Util-Optimize.html#optimizeModule",
        "fct-type": "function",
        "title": "optimizeModule"
      },
      "index": {
        "description": "",
        "hierarchy": "LLVM Util Optimize",
        "module": "LLVM.Util.Optimize",
        "name": "optimizeModule",
        "normalized": "Int-\u003eModule-\u003eIO Int",
        "package": "llvm-ht",
        "partial": "Module",
        "signature": "Int-\u003eModule-\u003eIO Int"
      }
    }
  }
]