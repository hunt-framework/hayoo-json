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
        "word": "llvm-ht"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe LLVM (Low Level Virtual Machine) is virtual machine at a machine code level.\n It supports both stand alone code generation and JITing.\n The Haskell llvm package is a (relatively) high level interface to the LLVM.\n The high level interface makes it easy to construct LLVM code.\n There is also an interface to the raw low level LLVM API as exposed by the LLVM C interface.\n\u003c/p\u003e\u003cp\u003eLLVM code is organized into modules (type \u003ccode\u003e\u003ca\u003eModule\u003c/a\u003e\u003c/code\u003e).\n Each module contains a number of global variables and functions (type \u003ccode\u003e\u003ca\u003eFunction\u003c/a\u003e\u003c/code\u003e).\n Each functions has a number of basic blocks (type \u003ccode\u003e\u003ca\u003eBasicBlock\u003c/a\u003e\u003c/code\u003e).\n Each basic block has a number instructions, where each instruction produces\n a value (type \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eUnlike assembly code for a real processor the assembly code for LLVM is\n in SSA (Static Single Assignment) form.  This means that each instruction generates\n a new bound variable which may not be assigned again.\n A consequence of this is that where control flow joins from several execution\n paths there has to be a phi pseudo instruction if you want different variables\n to be joined into one.\n\u003c/p\u003e\u003cp\u003eThe definition of several of the LLVM entities (\u003ccode\u003e\u003ca\u003eModule\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFunction\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eBasicBlock\u003c/a\u003e\u003c/code\u003e)\n follow the same pattern.  First the entity has to be created using \u003ccode\u003enewX\u003c/code\u003e (where \u003ccode\u003eX\u003c/code\u003e\n is one of \u003ccode\u003eModule\u003c/code\u003e, \u003ccode\u003eFunction\u003c/code\u003e, or \u003ccode\u003eBasicBlock\u003c/code\u003e), then at some later point it has to\n given its definition using \u003ccode\u003edefineX\u003c/code\u003e.  The reason for splitting the creation and\n definition is that you often need to be able to refer to an entity before giving\n it's body, e.g., in two mutually recursive functions.\n The the \u003ccode\u003enewX\u003c/code\u003e and \u003ccode\u003edefineX\u003c/code\u003e function can also be done at the same time by using\n \u003ccode\u003ecreateX\u003c/code\u003e.  Furthermore, an explicit name can be given to an entity by the\n \u003ccode\u003enewNamedX\u003c/code\u003e function; the \u003ccode\u003enewX\u003c/code\u003e function just generates a fresh name.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LLVM.Core",
          "name": "Core",
          "package": "llvm-ht",
          "source": "src/LLVM-Core.html",
          "type": "module"
        },
        "index": {
          "description": "The LLVM Low Level Virtual Machine is virtual machine at machine code level It supports both stand alone code generation and JITing The Haskell llvm package is relatively high level interface to the LLVM The high level interface makes it easy to construct LLVM code There is also an interface to the raw low level LLVM API as exposed by the LLVM interface LLVM code is organized into modules type Module Each module contains number of global variables and functions type Function Each functions has number of basic blocks type BasicBlock Each basic block has number instructions where each instruction produces value type Value Unlike assembly code for real processor the assembly code for LLVM is in SSA Static Single Assignment form This means that each instruction generates new bound variable which may not be assigned again consequence of this is that where control flow joins from several execution paths there has to be phi pseudo instruction if you want different variables to be joined into one The definition of several of the LLVM entities Module Function and BasicBlock follow the same pattern First the entity has to be created using newX where is one of Module Function or BasicBlock then at some later point it has to given its definition using defineX The reason for splitting the creation and definition is that you often need to be able to refer to an entity before giving it body e.g in two mutually recursive functions The the newX and defineX function can also be done at the same time by using createX Furthermore an explicit name can be given to an entity by the newNamedX function the newX function just generates fresh name",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "Core",
          "package": "llvm-ht",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": ":&",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Type.html#%3A%26",
          "type": "type"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": ":&",
          "package": "llvm-ht",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t::-38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTupleFunction is used for distinction of tuple and atomic arguments.\nThe a function of type \u003ccode\u003ea -\u003e b :+-\u003e c -\u003e d\u003c/code\u003e\nhas atomic arguments of type \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003ec\u003c/code\u003e\nand an argument of a type \u003ccode\u003eb\u003c/code\u003e that can be a tuple.\nIf \u003ccode\u003ea = (Word8,Int16)\u003c/code\u003e then the corresponding LLVM value is of type \u003ccode\u003eValue (Word8,Int16)\u003c/code\u003e.\nHowever, I do not know of a LLVM function that accepts values of this type.\nIf \u003ccode\u003eb = (Word8,Int16)\u003c/code\u003e then the corresponding LLVM value is of type \u003ccode\u003e(Value Word8, Value Int16)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": ":+-\u003e",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Type.html#%3A%2B-%3E",
          "type": "data"
        },
        "index": {
          "description": "TupleFunction is used for distinction of tuple and atomic arguments The function of type has atomic arguments of type and and an argument of type that can be tuple If Word8 Int16 then the corresponding LLVM value is of type Value Word8 Int16 However do not know of LLVM function that accepts values of this type If Word8 Int16 then the corresponding LLVM value is of type Value Word8 Value Int16",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": ":+-\u003e",
          "package": "llvm-ht",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t::-43--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAcceptable arguments to arithmetic binary instructions.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "ABinOp",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Instructions.html#ABinOp",
          "type": "class"
        },
        "index": {
          "description": "Acceptable arguments to arithmetic binary instructions",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "ABinOp",
          "package": "llvm-ht",
          "partial": "ABin Op",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:ABinOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAcceptable argument to array memory allocation.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "AllocArg",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Instructions.html#AllocArg",
          "type": "class"
        },
        "index": {
          "description": "Acceptable argument to array memory allocation",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "AllocArg",
          "package": "llvm-ht",
          "partial": "Alloc Arg",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:AllocArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFixed sized arrays, the array size is encoded in the \u003cem\u003en\u003c/em\u003e parameter.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "Array",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Data.html#Array",
          "type": "newtype"
        },
        "index": {
          "description": "Fixed sized arrays the array size is encoded in the parameter",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "Array",
          "package": "llvm-ht",
          "partial": "Array",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "Attribute",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Core.html#Attribute",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "Attribute",
          "package": "llvm-ht",
          "partial": "Attribute",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:Attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA basic block is a sequence of non-branching instructions, terminated by a control flow instruction.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "BasicBlock",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-CodeGen.html#BasicBlock",
          "type": "data"
        },
        "index": {
          "description": "basic block is sequence of non-branching instructions terminated by control flow instruction",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "BasicBlock",
          "package": "llvm-ht",
          "partial": "Basic Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:BasicBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAcceptable arguments to \u003ccode\u003e\u003ca\u003ecall\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "CallArgs",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Instructions.html#CallArgs",
          "type": "class"
        },
        "index": {
          "description": "Acceptable arguments to call",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "CallArgs",
          "package": "llvm-ht",
          "partial": "Call Args",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:CallArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine what vararg types are permissible.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "CastVarArgs",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Type.html#CastVarArgs",
          "type": "class"
        },
        "index": {
          "description": "Define what vararg types are permissible",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "CastVarArgs",
          "package": "llvm-ht",
          "partial": "Cast Var Args",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:CastVarArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAcceptable operands to comparison instructions.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "CmpOp",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Instructions.html#CmpOp",
          "type": "class"
        },
        "index": {
          "description": "Acceptable operands to comparison instructions",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "CmpOp",
          "package": "llvm-ht",
          "partial": "Cmp Op",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:CmpOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "CmpRet",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Instructions.html#CmpRet",
          "type": "class"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "CmpRet",
          "package": "llvm-ht",
          "partial": "Cmp Ret",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:CmpRet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "CodeGenFunction",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-CodeGenMonad.html#CodeGenFunction",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "CodeGenFunction",
          "package": "llvm-ht",
          "partial": "Code Gen Function",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:CodeGenFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "CodeGenModule",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-CodeGenMonad.html#CodeGenModule",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "CodeGenModule",
          "package": "llvm-ht",
          "partial": "Code Gen Module",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:CodeGenModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "ConstValue",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-CodeGen.html#ConstValue",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "ConstValue",
          "package": "llvm-ht",
          "partial": "Const Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:ConstValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e128 bit floating point.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "FP128",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Data.html#FP128",
          "type": "newtype"
        },
        "index": {
          "description": "bit floating point",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "FP128",
          "package": "llvm-ht",
          "partial": "FP",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:FP128"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "FPPredicate",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Instructions.html#FPPredicate",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "FPPredicate",
          "package": "llvm-ht",
          "partial": "FPPredicate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:FPPredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function is simply a pointer to the function.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "Function",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-CodeGen.html#Function",
          "type": "type"
        },
        "index": {
          "description": "function is simply pointer to the function",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "Function",
          "package": "llvm-ht",
          "partial": "Function",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "FunctionArgs",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-CodeGen.html#FunctionArgs",
          "type": "class"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "FunctionArgs",
          "package": "llvm-ht",
          "partial": "Function Args",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:FunctionArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class is just to simplify contexts.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "FunctionRet",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-CodeGen.html#FunctionRet",
          "type": "class"
        },
        "index": {
          "description": "This class is just to simplify contexts",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "FunctionRet",
          "package": "llvm-ht",
          "partial": "Function Ret",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:FunctionRet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAcceptable arguments to \u003ccode\u003egetElementPointer\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "GetElementPtr",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Instructions.html#GetElementPtr",
          "type": "class"
        },
        "index": {
          "description": "Acceptable arguments to getElementPointer",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "GetElementPtr",
          "package": "llvm-ht",
          "partial": "Get Element Ptr",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:GetElementPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAcceptable arguments to \u003ccode\u003e\u003ca\u003eextractvalue\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003einsertvalue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "GetValue",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Instructions.html#GetValue",
          "type": "class"
        },
        "index": {
          "description": "Acceptable arguments to extractvalue and insertvalue",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "GetValue",
          "package": "llvm-ht",
          "partial": "Get Value",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:GetValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "Global",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-CodeGen.html#Global",
          "type": "type"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "Global",
          "package": "llvm-ht",
          "partial": "Global",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:Global"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "GlobalMappings",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-CodeGenMonad.html#GlobalMappings",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "GlobalMappings",
          "package": "llvm-ht",
          "partial": "Global Mappings",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:GlobalMappings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariable sized signed integer.\n The \u003cem\u003en\u003c/em\u003e parameter should belong to \u003ccode\u003ePosI\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "IntN",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Data.html#IntN",
          "type": "newtype"
        },
        "index": {
          "description": "Variable sized signed integer The parameter should belong to PosI",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "IntN",
          "package": "llvm-ht",
          "partial": "Int",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IntN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "IntPredicate",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Instructions.html#IntPredicate",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "IntPredicate",
          "package": "llvm-ht",
          "partial": "Int Predicate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IntPredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArithmetic types, i.e., integral and floating types.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "IsArithmetic",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Type.html#IsArithmetic",
          "type": "class"
        },
        "index": {
          "description": "Arithmetic types i.e integral and floating types",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "IsArithmetic",
          "package": "llvm-ht",
          "partial": "Is Arithmetic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IsArithmetic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "IsConst",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-CodeGen.html#IsConst",
          "type": "class"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "IsConst",
          "package": "llvm-ht",
          "partial": "Is Const",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IsConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFirst class types, i.e., the types that can be passed as arguments, etc.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "IsFirstClass",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Type.html#IsFirstClass",
          "type": "class"
        },
        "index": {
          "description": "First class types i.e the types that can be passed as arguments etc",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "IsFirstClass",
          "package": "llvm-ht",
          "partial": "Is First Class",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IsFirstClass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFloating types.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "IsFloating",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Type.html#IsFloating",
          "type": "class"
        },
        "index": {
          "description": "Floating types",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "IsFloating",
          "package": "llvm-ht",
          "partial": "Is Floating",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IsFloating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction type.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "IsFunction",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Type.html#IsFunction",
          "type": "class"
        },
        "index": {
          "description": "Function type",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "IsFunction",
          "package": "llvm-ht",
          "partial": "Is Function",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IsFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAcceptable single index to \u003ccode\u003egetElementPointer\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "IsIndexArg",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Instructions.html#IsIndexArg",
          "type": "class"
        },
        "index": {
          "description": "Acceptable single index to getElementPointer",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "IsIndexArg",
          "package": "llvm-ht",
          "partial": "Is Index Arg",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IsIndexArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntegral types.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "IsInteger",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Type.html#IsInteger",
          "type": "class"
        },
        "index": {
          "description": "Integral types",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "IsInteger",
          "package": "llvm-ht",
          "partial": "Is Integer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IsInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntegral or pointer type.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "IsIntegerOrPointer",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Type.html#IsIntegerOrPointer",
          "type": "class"
        },
        "index": {
          "description": "Integral or pointer type",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "IsIntegerOrPointer",
          "package": "llvm-ht",
          "partial": "Is Integer Or Pointer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IsIntegerOrPointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "IsPowerOf2",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Type.html#IsPowerOf2",
          "type": "class"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "IsPowerOf2",
          "package": "llvm-ht",
          "partial": "Is Power Of",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IsPowerOf2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrimitive types.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "IsPrimitive",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Type.html#IsPrimitive",
          "type": "class"
        },
        "index": {
          "description": "Primitive types",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "IsPrimitive",
          "package": "llvm-ht",
          "partial": "Is Primitive",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IsPrimitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypes with a fixed size.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "IsSized",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Type.html#IsSized",
          "type": "class"
        },
        "index": {
          "description": "Types with fixed size",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "IsSized",
          "package": "llvm-ht",
          "partial": "Is Sized",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IsSized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "IsTuple",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Type.html#IsTuple",
          "type": "class"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "IsTuple",
          "package": "llvm-ht",
          "partial": "Is Tuple",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IsTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eIsType\u003c/a\u003e\u003c/code\u003e class classifies all types that have an LLVM representation.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "IsType",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Type.html#IsType",
          "type": "class"
        },
        "index": {
          "description": "The IsType class classifies all types that have an LLVM representation",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "IsType",
          "package": "llvm-ht",
          "partial": "Is Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:IsType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel type, produced by a basic block.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "Label",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Data.html#Label",
          "type": "data"
        },
        "index": {
          "description": "Label type produced by basic block",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "Label",
          "package": "llvm-ht",
          "partial": "Label",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn enumeration for the kinds of linkage for global values.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "Linkage",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Core.html#Linkage",
          "type": "data"
        },
        "index": {
          "description": "An enumeration for the kinds of linkage for global values",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "Linkage",
          "package": "llvm-ht",
          "partial": "Linkage",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:Linkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "MakeValueTuple",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-CodeGen.html#MakeValueTuple",
          "type": "class"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "MakeValueTuple",
          "package": "llvm-ht",
          "partial": "Make Value Tuple",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:MakeValueTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of top level modules.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "Module",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Util.html#Module",
          "type": "data"
        },
        "index": {
          "description": "Type of top level modules",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "Module",
          "package": "llvm-ht",
          "partial": "Module",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA module provider is used by the code generator to get access to a module.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "ModuleProvider",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Util.html#ModuleProvider",
          "type": "data"
        },
        "index": {
          "description": "module provider is used by the code generator to get access to module",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "ModuleProvider",
          "package": "llvm-ht",
          "partial": "Module Provider",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:ModuleProvider"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "ModuleValue",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-CodeGen.html#ModuleValue",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "ModuleValue",
          "package": "llvm-ht",
          "partial": "Module Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:ModuleValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of elements for instructions that handle both primitive and vector types\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "NumberOfElements",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Type.html#NumberOfElements",
          "type": "class"
        },
        "index": {
          "description": "Number of elements for instructions that handle both primitive and vector types",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "NumberOfElements",
          "package": "llvm-ht",
          "partial": "Number Of Elements",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:NumberOfElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "PackedStruct",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Data.html#PackedStruct",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "PackedStruct",
          "package": "llvm-ht",
          "partial": "Packed Struct",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:PackedStruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eManage compile passes.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "PassManager",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Util.html#PassManager",
          "type": "data"
        },
        "index": {
          "description": "Manage compile passes",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "PassManager",
          "package": "llvm-ht",
          "partial": "Pass Manager",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:PassManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value of type \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePtr\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e represents a pointer to an object, or an\n array of objects, which may be marshalled to or from Haskell values\n of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe type \u003ccode\u003ea\u003c/code\u003e will often be an instance of class\n Foreign.Storable.Storable which provides the marshalling operations.\n However this is not essential, and you can provide your own operations\n to access the pointer.  For example you might write small foreign\n functions to get or set the fields of a C \u003ccode\u003estruct\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "Ptr",
          "package": "llvm-ht",
          "type": "data"
        },
        "index": {
          "description": "value of type Ptr represents pointer to an object or an array of objects which may be marshalled to or from Haskell values of type The type will often be an instance of class Foreign.Storable.Storable which provides the marshalling operations However this is not essential and you can provide your own operations to access the pointer For example you might write small foreign functions to get or set the fields of struct",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "Ptr",
          "package": "llvm-ht",
          "partial": "Ptr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:Ptr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAcceptable arguments to the \u003ccode\u003e\u003ca\u003eret\u003c/a\u003e\u003c/code\u003e instruction.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "Ret",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Instructions.html#Ret",
          "type": "class"
        },
        "index": {
          "description": "Acceptable arguments to the ret instruction",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "Ret",
          "package": "llvm-ht",
          "partial": "Ret",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:Ret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStruct types; a list (nested tuple) of component types.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "Struct",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Data.html#Struct",
          "type": "newtype"
        },
        "index": {
          "description": "Struct types list nested tuple of component types",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "Struct",
          "package": "llvm-ht",
          "partial": "Struct",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:Struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "TFunction",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-CodeGen.html#TFunction",
          "type": "type"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "TFunction",
          "package": "llvm-ht",
          "partial": "TFunction",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:TFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "TGlobal",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-CodeGen.html#TGlobal",
          "type": "type"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "TGlobal",
          "package": "llvm-ht",
          "partial": "TGlobal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:TGlobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "Terminate",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Instructions.html#Terminate",
          "type": "type"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "Terminate",
          "package": "llvm-ht",
          "partial": "Terminate",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:Terminate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType descriptor, used to convey type information through the LLVM API.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "TypeDesc",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Type.html#TypeDesc",
          "type": "data"
        },
        "index": {
          "description": "Type descriptor used to convey type information through the LLVM API",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "TypeDesc",
          "package": "llvm-ht",
          "partial": "Type Desc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:TypeDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "Undefined",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-CodeGen.html#Undefined",
          "type": "class"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "Undefined",
          "package": "llvm-ht",
          "partial": "Undefined",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:Undefined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "UnknownSize",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Type.html#UnknownSize",
          "type": "type"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "UnknownSize",
          "package": "llvm-ht",
          "partial": "Unknown Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:UnknownSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "Value",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-CodeGen.html#Value",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "Value",
          "package": "llvm-ht",
          "partial": "Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "ValueTuple",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-CodeGen.html#ValueTuple",
          "type": "class"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "ValueTuple",
          "package": "llvm-ht",
          "partial": "Value Tuple",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:ValueTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eVarArgs\u003c/a\u003e\u003c/code\u003e type is a placeholder for the real \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e type that\n can be obtained with \u003ccode\u003ecastVarArgs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "VarArgs",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Type.html#VarArgs",
          "type": "data"
        },
        "index": {
          "description": "The VarArgs type is placeholder for the real IO type that can be obtained with castVarArgs",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "VarArgs",
          "package": "llvm-ht",
          "partial": "Var Args",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:VarArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFixed sized vector, the array size is encoded in the \u003cem\u003en\u003c/em\u003e parameter.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "Vector",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Data.html#Vector",
          "type": "newtype"
        },
        "index": {
          "description": "Fixed sized vector the array size is encoded in the parameter",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "Vector",
          "package": "llvm-ht",
          "partial": "Vector",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariable sized unsigned integer.\n The \u003cem\u003en\u003c/em\u003e parameter should belong to \u003ccode\u003ePosI\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "WordN",
          "package": "llvm-ht",
          "source": "src/LLVM-Core-Data.html#WordN",
          "type": "newtype"
        },
        "index": {
          "description": "Variable sized unsigned integer The parameter should belong to PosI",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "WordN",
          "package": "llvm-ht",
          "partial": "Word",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#t:WordN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "($+)",
          "package": "llvm-ht",
          "signature": "(a :+-\u003e b) -\u003e a -\u003e b",
          "source": "src/LLVM-Core-Type.html#%24%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "($+) $+",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "llvm-ht",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:-36--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "(&)",
          "package": "llvm-ht",
          "signature": "a -\u003e as -\u003e a :& as",
          "source": "src/LLVM-Core-Type.html#%26",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "(&) &",
          "normalized": "a-\u003eb-\u003ea b",
          "package": "llvm-ht",
          "signature": "a-\u003eas-\u003ea as",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:-38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecial purpose, only applies to global arrays\n\u003c/p\u003e",
          "module": "[\"LLVM.Core\",\"LLVM.FFI.Core\"]",
          "name": "AppendingLinkage",
          "package": "llvm-ht",
          "signature": "AppendingLinkage",
          "source": "src/LLVM-FFI-Core.html#Linkage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:AppendingLinkage\",\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:AppendingLinkage\"]"
        },
        "index": {
          "description": "Special purpose only applies to global arrays",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "AppendingLinkage",
          "package": "llvm-ht",
          "partial": "Appending Linkage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:AppendingLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "Array",
          "package": "llvm-ht",
          "signature": "Array [a]",
          "source": "src/LLVM-Core-Data.html#Array",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "Array",
          "normalized": "Array[a]",
          "package": "llvm-ht",
          "partial": "Array",
          "signature": "Array[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LLVM.Core\",\"LLVM.FFI.Core\"]",
          "name": "AvailableExternallyLinkage",
          "package": "llvm-ht",
          "signature": "AvailableExternallyLinkage",
          "source": "src/LLVM-FFI-Core.html#Linkage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:AvailableExternallyLinkage\",\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:AvailableExternallyLinkage\"]"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "AvailableExternallyLinkage",
          "package": "llvm-ht",
          "partial": "Available Externally Linkage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:AvailableExternallyLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LLVM.Core\",\"LLVM.FFI.Core\"]",
          "name": "ByValAttribute",
          "package": "llvm-ht",
          "signature": "ByValAttribute",
          "source": "src/LLVM-FFI-Core.html#Attribute",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:ByValAttribute\",\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:ByValAttribute\"]"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "ByValAttribute",
          "package": "llvm-ht",
          "partial": "By Val Attribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:ByValAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTentative definitions\n\u003c/p\u003e",
          "module": "[\"LLVM.Core\",\"LLVM.FFI.Core\"]",
          "name": "CommonLinkage",
          "package": "llvm-ht",
          "signature": "CommonLinkage",
          "source": "src/LLVM-FFI-Core.html#Linkage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:CommonLinkage\",\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:CommonLinkage\"]"
        },
        "index": {
          "description": "Tentative definitions",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "CommonLinkage",
          "package": "llvm-ht",
          "partial": "Common Linkage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:CommonLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to be accessible from DLL\n\u003c/p\u003e",
          "module": "[\"LLVM.Core\",\"LLVM.FFI.Core\"]",
          "name": "DLLExportLinkage",
          "package": "llvm-ht",
          "signature": "DLLExportLinkage",
          "source": "src/LLVM-FFI-Core.html#Linkage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:DLLExportLinkage\",\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:DLLExportLinkage\"]"
        },
        "index": {
          "description": "Function to be accessible from DLL",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "DLLExportLinkage",
          "package": "llvm-ht",
          "partial": "DLLExport Linkage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:DLLExportLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to be imported from DLL\n\u003c/p\u003e",
          "module": "[\"LLVM.Core\",\"LLVM.FFI.Core\"]",
          "name": "DLLImportLinkage",
          "package": "llvm-ht",
          "signature": "DLLImportLinkage",
          "source": "src/LLVM-FFI-Core.html#Linkage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:DLLImportLinkage\",\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:DLLImportLinkage\"]"
        },
        "index": {
          "description": "Function to be imported from DLL",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "DLLImportLinkage",
          "package": "llvm-ht",
          "partial": "DLLImport Linkage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:DLLImportLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExternally visible function\n\u003c/p\u003e",
          "module": "[\"LLVM.Core\",\"LLVM.FFI.Core\"]",
          "name": "ExternalLinkage",
          "package": "llvm-ht",
          "signature": "ExternalLinkage",
          "source": "src/LLVM-FFI-Core.html#Linkage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:ExternalLinkage\",\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:ExternalLinkage\"]"
        },
        "index": {
          "description": "Externally visible function",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "ExternalLinkage",
          "package": "llvm-ht",
          "partial": "External Linkage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:ExternalLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExternalWeak linkage description\n\u003c/p\u003e",
          "module": "[\"LLVM.Core\",\"LLVM.FFI.Core\"]",
          "name": "ExternalWeakLinkage",
          "package": "llvm-ht",
          "signature": "ExternalWeakLinkage",
          "source": "src/LLVM-FFI-Core.html#Linkage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:ExternalWeakLinkage\",\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:ExternalWeakLinkage\"]"
        },
        "index": {
          "description": "ExternalWeak linkage description",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "ExternalWeakLinkage",
          "package": "llvm-ht",
          "partial": "External Weak Linkage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:ExternalWeakLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "FP128",
          "package": "llvm-ht",
          "signature": "FP128 Rational",
          "source": "src/LLVM-Core-Data.html#FP128",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "FP128",
          "package": "llvm-ht",
          "partial": "FP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FP128"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlways false (always folded)\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "FPFalse",
          "package": "llvm-ht",
          "signature": "FPFalse",
          "source": "src/LLVM-Core-Instructions.html#FPPredicate",
          "type": "function"
        },
        "index": {
          "description": "Always false always folded",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "FPFalse",
          "package": "llvm-ht",
          "partial": "FPFalse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPFalse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if ordered and equal\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "FPOEQ",
          "package": "llvm-ht",
          "signature": "FPOEQ",
          "source": "src/LLVM-Core-Instructions.html#FPPredicate",
          "type": "function"
        },
        "index": {
          "description": "True if ordered and equal",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "FPOEQ",
          "package": "llvm-ht",
          "partial": "FPOEQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPOEQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if ordered and greater than or equal\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "FPOGE",
          "package": "llvm-ht",
          "signature": "FPOGE",
          "source": "src/LLVM-Core-Instructions.html#FPPredicate",
          "type": "function"
        },
        "index": {
          "description": "True if ordered and greater than or equal",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "FPOGE",
          "package": "llvm-ht",
          "partial": "FPOGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPOGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if ordered and greater than\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "FPOGT",
          "package": "llvm-ht",
          "signature": "FPOGT",
          "source": "src/LLVM-Core-Instructions.html#FPPredicate",
          "type": "function"
        },
        "index": {
          "description": "True if ordered and greater than",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "FPOGT",
          "package": "llvm-ht",
          "partial": "FPOGT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPOGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if ordered and less than or equal\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "FPOLE",
          "package": "llvm-ht",
          "signature": "FPOLE",
          "source": "src/LLVM-Core-Instructions.html#FPPredicate",
          "type": "function"
        },
        "index": {
          "description": "True if ordered and less than or equal",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "FPOLE",
          "package": "llvm-ht",
          "partial": "FPOLE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPOLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if ordered and less than\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "FPOLT",
          "package": "llvm-ht",
          "signature": "FPOLT",
          "source": "src/LLVM-Core-Instructions.html#FPPredicate",
          "type": "function"
        },
        "index": {
          "description": "True if ordered and less than",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "FPOLT",
          "package": "llvm-ht",
          "partial": "FPOLT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPOLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if ordered and operands are unequal\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "FPONE",
          "package": "llvm-ht",
          "signature": "FPONE",
          "source": "src/LLVM-Core-Instructions.html#FPPredicate",
          "type": "function"
        },
        "index": {
          "description": "True if ordered and operands are unequal",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "FPONE",
          "package": "llvm-ht",
          "partial": "FPONE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPONE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if ordered (no nans)\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "FPORD",
          "package": "llvm-ht",
          "signature": "FPORD",
          "source": "src/LLVM-Core-Instructions.html#FPPredicate",
          "type": "function"
        },
        "index": {
          "description": "True if ordered no nans",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "FPORD",
          "package": "llvm-ht",
          "partial": "FPORD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPORD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlways true (always folded)\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "FPT",
          "package": "llvm-ht",
          "signature": "FPT",
          "source": "src/LLVM-Core-Instructions.html#FPPredicate",
          "type": "function"
        },
        "index": {
          "description": "Always true always folded",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "FPT",
          "package": "llvm-ht",
          "partial": "FPT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if unordered or equal\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "FPUEQ",
          "package": "llvm-ht",
          "signature": "FPUEQ",
          "source": "src/LLVM-Core-Instructions.html#FPPredicate",
          "type": "function"
        },
        "index": {
          "description": "True if unordered or equal",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "FPUEQ",
          "package": "llvm-ht",
          "partial": "FPUEQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPUEQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if unordered, greater than, or equal\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "FPUGE",
          "package": "llvm-ht",
          "signature": "FPUGE",
          "source": "src/LLVM-Core-Instructions.html#FPPredicate",
          "type": "function"
        },
        "index": {
          "description": "True if unordered greater than or equal",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "FPUGE",
          "package": "llvm-ht",
          "partial": "FPUGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPUGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if unordered or greater than\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "FPUGT",
          "package": "llvm-ht",
          "signature": "FPUGT",
          "source": "src/LLVM-Core-Instructions.html#FPPredicate",
          "type": "function"
        },
        "index": {
          "description": "True if unordered or greater than",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "FPUGT",
          "package": "llvm-ht",
          "partial": "FPUGT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPUGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if unordered, less than, or equal\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "FPULE",
          "package": "llvm-ht",
          "signature": "FPULE",
          "source": "src/LLVM-Core-Instructions.html#FPPredicate",
          "type": "function"
        },
        "index": {
          "description": "True if unordered less than or equal",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "FPULE",
          "package": "llvm-ht",
          "partial": "FPULE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPULE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if unordered or less than\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "FPULT",
          "package": "llvm-ht",
          "signature": "FPULT",
          "source": "src/LLVM-Core-Instructions.html#FPPredicate",
          "type": "function"
        },
        "index": {
          "description": "True if unordered or less than",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "FPULT",
          "package": "llvm-ht",
          "partial": "FPULT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPULT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if unordered or not equal\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "FPUNE",
          "package": "llvm-ht",
          "signature": "FPUNE",
          "source": "src/LLVM-Core-Instructions.html#FPPredicate",
          "type": "function"
        },
        "index": {
          "description": "True if unordered or not equal",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "FPUNE",
          "package": "llvm-ht",
          "partial": "FPUNE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPUNE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if unordered: isnan(X) | isnan(Y)\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "FPUNO",
          "package": "llvm-ht",
          "signature": "FPUNO",
          "source": "src/LLVM-Core-Instructions.html#FPPredicate",
          "type": "function"
        },
        "index": {
          "description": "True if unordered isnan isnan",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "FPUNO",
          "package": "llvm-ht",
          "partial": "FPUNO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:FPUNO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStand-in functions for streaming fns from BC files    \n\u003c/p\u003e",
          "module": "[\"LLVM.Core\",\"LLVM.FFI.Core\"]",
          "name": "GhostLinkage",
          "package": "llvm-ht",
          "signature": "GhostLinkage",
          "source": "src/LLVM-FFI-Core.html#Linkage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:GhostLinkage\",\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:GhostLinkage\"]"
        },
        "index": {
          "description": "Stand-in functions for streaming fns from BC files",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "GhostLinkage",
          "package": "llvm-ht",
          "partial": "Ghost Linkage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:GhostLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LLVM.Core\",\"LLVM.FFI.Core\"]",
          "name": "InRegAttribute",
          "package": "llvm-ht",
          "signature": "InRegAttribute",
          "source": "src/LLVM-FFI-Core.html#Attribute",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:InRegAttribute\",\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:InRegAttribute\"]"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "InRegAttribute",
          "package": "llvm-ht",
          "partial": "In Reg Attribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:InRegAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eequal\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "IntEQ",
          "package": "llvm-ht",
          "signature": "IntEQ",
          "source": "src/LLVM-Core-Instructions.html#IntPredicate",
          "type": "function"
        },
        "index": {
          "description": "equal",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "IntEQ",
          "package": "llvm-ht",
          "partial": "Int EQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:IntEQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "IntN",
          "package": "llvm-ht",
          "signature": "IntN Integer",
          "source": "src/LLVM-Core-Data.html#IntN",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "IntN",
          "package": "llvm-ht",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:IntN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enot equal\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "IntNE",
          "package": "llvm-ht",
          "signature": "IntNE",
          "source": "src/LLVM-Core-Instructions.html#IntPredicate",
          "type": "function"
        },
        "index": {
          "description": "not equal",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "IntNE",
          "package": "llvm-ht",
          "partial": "Int NE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:IntNE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esigned greater or equal\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "IntSGE",
          "package": "llvm-ht",
          "signature": "IntSGE",
          "source": "src/LLVM-Core-Instructions.html#IntPredicate",
          "type": "function"
        },
        "index": {
          "description": "signed greater or equal",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "IntSGE",
          "package": "llvm-ht",
          "partial": "Int SGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:IntSGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esigned greater than\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "IntSGT",
          "package": "llvm-ht",
          "signature": "IntSGT",
          "source": "src/LLVM-Core-Instructions.html#IntPredicate",
          "type": "function"
        },
        "index": {
          "description": "signed greater than",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "IntSGT",
          "package": "llvm-ht",
          "partial": "Int SGT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:IntSGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esigned less or equal\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "IntSLE",
          "package": "llvm-ht",
          "signature": "IntSLE",
          "source": "src/LLVM-Core-Instructions.html#IntPredicate",
          "type": "function"
        },
        "index": {
          "description": "signed less or equal",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "IntSLE",
          "package": "llvm-ht",
          "partial": "Int SLE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:IntSLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esigned less than\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "IntSLT",
          "package": "llvm-ht",
          "signature": "IntSLT",
          "source": "src/LLVM-Core-Instructions.html#IntPredicate",
          "type": "function"
        },
        "index": {
          "description": "signed less than",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "IntSLT",
          "package": "llvm-ht",
          "partial": "Int SLT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:IntSLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunsigned greater or equal\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "IntUGE",
          "package": "llvm-ht",
          "signature": "IntUGE",
          "source": "src/LLVM-Core-Instructions.html#IntPredicate",
          "type": "function"
        },
        "index": {
          "description": "unsigned greater or equal",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "IntUGE",
          "package": "llvm-ht",
          "partial": "Int UGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:IntUGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunsigned greater than\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "IntUGT",
          "package": "llvm-ht",
          "signature": "IntUGT",
          "source": "src/LLVM-Core-Instructions.html#IntPredicate",
          "type": "function"
        },
        "index": {
          "description": "unsigned greater than",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "IntUGT",
          "package": "llvm-ht",
          "partial": "Int UGT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:IntUGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunsigned less or equal\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "IntULE",
          "package": "llvm-ht",
          "signature": "IntULE",
          "source": "src/LLVM-Core-Instructions.html#IntPredicate",
          "type": "function"
        },
        "index": {
          "description": "unsigned less or equal",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "IntULE",
          "package": "llvm-ht",
          "partial": "Int ULE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:IntULE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunsigned less than\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "IntULT",
          "package": "llvm-ht",
          "signature": "IntULT",
          "source": "src/LLVM-Core-Instructions.html#IntPredicate",
          "type": "function"
        },
        "index": {
          "description": "unsigned less than",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "IntULT",
          "package": "llvm-ht",
          "partial": "Int ULT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:IntULT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename collisions when linking (static functions)\n\u003c/p\u003e",
          "module": "[\"LLVM.Core\",\"LLVM.FFI.Core\"]",
          "name": "InternalLinkage",
          "package": "llvm-ht",
          "signature": "InternalLinkage",
          "source": "src/LLVM-FFI-Core.html#Linkage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:InternalLinkage\",\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:InternalLinkage\"]"
        },
        "index": {
          "description": "Rename collisions when linking static functions",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "InternalLinkage",
          "package": "llvm-ht",
          "partial": "Internal Linkage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:InternalLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeep one copy of function when linking (inline)\n\u003c/p\u003e",
          "module": "[\"LLVM.Core\",\"LLVM.FFI.Core\"]",
          "name": "LinkOnceAnyLinkage",
          "package": "llvm-ht",
          "signature": "LinkOnceAnyLinkage",
          "source": "src/LLVM-FFI-Core.html#Linkage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:LinkOnceAnyLinkage\",\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:LinkOnceAnyLinkage\"]"
        },
        "index": {
          "description": "Keep one copy of function when linking inline",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "LinkOnceAnyLinkage",
          "package": "llvm-ht",
          "partial": "Link Once Any Linkage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:LinkOnceAnyLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame, but only replaced by something equivalent.\n\u003c/p\u003e",
          "module": "[\"LLVM.Core\",\"LLVM.FFI.Core\"]",
          "name": "LinkOnceODRLinkage",
          "package": "llvm-ht",
          "signature": "LinkOnceODRLinkage",
          "source": "src/LLVM-FFI-Core.html#Linkage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:LinkOnceODRLinkage\",\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:LinkOnceODRLinkage\"]"
        },
        "index": {
          "description": "Same but only replaced by something equivalent",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "LinkOnceODRLinkage",
          "package": "llvm-ht",
          "partial": "Link Once ODRLinkage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:LinkOnceODRLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike Private, but linker removes.\n\u003c/p\u003e",
          "module": "[\"LLVM.Core\",\"LLVM.FFI.Core\"]",
          "name": "LinkerPrivateLinkage",
          "package": "llvm-ht",
          "signature": "LinkerPrivateLinkage",
          "source": "src/LLVM-FFI-Core.html#Linkage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:LinkerPrivateLinkage\",\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:LinkerPrivateLinkage\"]"
        },
        "index": {
          "description": "Like Private but linker removes",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "LinkerPrivateLinkage",
          "package": "llvm-ht",
          "partial": "Linker Private Linkage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:LinkerPrivateLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LLVM.Core\",\"LLVM.FFI.Core\"]",
          "name": "NestAttribute",
          "package": "llvm-ht",
          "signature": "NestAttribute",
          "source": "src/LLVM-FFI-Core.html#Attribute",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:NestAttribute\",\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:NestAttribute\"]"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "NestAttribute",
          "package": "llvm-ht",
          "partial": "Nest Attribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:NestAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LLVM.Core\",\"LLVM.FFI.Core\"]",
          "name": "NoAliasAttribute",
          "package": "llvm-ht",
          "signature": "NoAliasAttribute",
          "source": "src/LLVM-FFI-Core.html#Attribute",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:NoAliasAttribute\",\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:NoAliasAttribute\"]"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "NoAliasAttribute",
          "package": "llvm-ht",
          "partial": "No Alias Attribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:NoAliasAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LLVM.Core\",\"LLVM.FFI.Core\"]",
          "name": "NoReturnAttribute",
          "package": "llvm-ht",
          "signature": "NoReturnAttribute",
          "source": "src/LLVM-FFI-Core.html#Attribute",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:NoReturnAttribute\",\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:NoReturnAttribute\"]"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "NoReturnAttribute",
          "package": "llvm-ht",
          "partial": "No Return Attribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:NoReturnAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LLVM.Core\",\"LLVM.FFI.Core\"]",
          "name": "NoUnwindAttribute",
          "package": "llvm-ht",
          "signature": "NoUnwindAttribute",
          "source": "src/LLVM-FFI-Core.html#Attribute",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:NoUnwindAttribute\",\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:NoUnwindAttribute\"]"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "NoUnwindAttribute",
          "package": "llvm-ht",
          "partial": "No Unwind Attribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:NoUnwindAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "PackedStruct",
          "package": "llvm-ht",
          "signature": "PackedStruct a",
          "source": "src/LLVM-Core-Data.html#PackedStruct",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "PackedStruct",
          "package": "llvm-ht",
          "partial": "Packed Struct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:PackedStruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike Internal, but omit from symbol table\n\u003c/p\u003e",
          "module": "[\"LLVM.Core\",\"LLVM.FFI.Core\"]",
          "name": "PrivateLinkage",
          "package": "llvm-ht",
          "signature": "PrivateLinkage",
          "source": "src/LLVM-FFI-Core.html#Linkage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:PrivateLinkage\",\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:PrivateLinkage\"]"
        },
        "index": {
          "description": "Like Internal but omit from symbol table",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "PrivateLinkage",
          "package": "llvm-ht",
          "partial": "Private Linkage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:PrivateLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LLVM.Core\",\"LLVM.FFI.Core\"]",
          "name": "ReadNoneAttribute",
          "package": "llvm-ht",
          "signature": "ReadNoneAttribute",
          "source": "src/LLVM-FFI-Core.html#Attribute",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:ReadNoneAttribute\",\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:ReadNoneAttribute\"]"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "ReadNoneAttribute",
          "package": "llvm-ht",
          "partial": "Read None Attribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:ReadNoneAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LLVM.Core\",\"LLVM.FFI.Core\"]",
          "name": "ReadOnlyAttribute",
          "package": "llvm-ht",
          "signature": "ReadOnlyAttribute",
          "source": "src/LLVM-FFI-Core.html#Attribute",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:ReadOnlyAttribute\",\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:ReadOnlyAttribute\"]"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "ReadOnlyAttribute",
          "package": "llvm-ht",
          "partial": "Read Only Attribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:ReadOnlyAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LLVM.Core\",\"LLVM.FFI.Core\"]",
          "name": "SExtAttribute",
          "package": "llvm-ht",
          "signature": "SExtAttribute",
          "source": "src/LLVM-FFI-Core.html#Attribute",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:SExtAttribute\",\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:SExtAttribute\"]"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "SExtAttribute",
          "package": "llvm-ht",
          "partial": "SExt Attribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:SExtAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "Struct",
          "package": "llvm-ht",
          "signature": "Struct a",
          "source": "src/LLVM-Core-Data.html#Struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "Struct",
          "package": "llvm-ht",
          "partial": "Struct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:Struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LLVM.Core\",\"LLVM.FFI.Core\"]",
          "name": "StructRetAttribute",
          "package": "llvm-ht",
          "signature": "StructRetAttribute",
          "source": "src/LLVM-FFI-Core.html#Attribute",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:StructRetAttribute\",\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:StructRetAttribute\"]"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "StructRetAttribute",
          "package": "llvm-ht",
          "partial": "Struct Ret Attribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:StructRetAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "TDArray",
          "package": "llvm-ht",
          "signature": "TDArray Integer TypeDesc",
          "source": "src/LLVM-Core-Type.html#TypeDesc",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "TDArray",
          "package": "llvm-ht",
          "partial": "TDArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:TDArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "TDDouble",
          "package": "llvm-ht",
          "signature": "TDDouble",
          "source": "src/LLVM-Core-Type.html#TypeDesc",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "TDDouble",
          "package": "llvm-ht",
          "partial": "TDDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:TDDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "TDFP128",
          "package": "llvm-ht",
          "signature": "TDFP128",
          "source": "src/LLVM-Core-Type.html#TypeDesc",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "TDFP128",
          "package": "llvm-ht",
          "partial": "TDFP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:TDFP128"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "TDFloat",
          "package": "llvm-ht",
          "signature": "TDFloat",
          "source": "src/LLVM-Core-Type.html#TypeDesc",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "TDFloat",
          "package": "llvm-ht",
          "partial": "TDFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:TDFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "TDFunction",
          "package": "llvm-ht",
          "signature": "TDFunction Bool [TypeDesc] TypeDesc",
          "source": "src/LLVM-Core-Type.html#TypeDesc",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "TDFunction",
          "normalized": "TDFunction Bool[TypeDesc]TypeDesc",
          "package": "llvm-ht",
          "partial": "TDFunction",
          "signature": "TDFunction Bool[TypeDesc]TypeDesc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:TDFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "TDInt",
          "package": "llvm-ht",
          "signature": "TDInt Bool Integer",
          "source": "src/LLVM-Core-Type.html#TypeDesc",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "TDInt",
          "package": "llvm-ht",
          "partial": "TDInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:TDInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "TDLabel",
          "package": "llvm-ht",
          "signature": "TDLabel",
          "source": "src/LLVM-Core-Type.html#TypeDesc",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "TDLabel",
          "package": "llvm-ht",
          "partial": "TDLabel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:TDLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "TDPtr",
          "package": "llvm-ht",
          "signature": "TDPtr TypeDesc",
          "source": "src/LLVM-Core-Type.html#TypeDesc",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "TDPtr",
          "package": "llvm-ht",
          "partial": "TDPtr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:TDPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "TDStruct",
          "package": "llvm-ht",
          "signature": "TDStruct [TypeDesc] Bool",
          "source": "src/LLVM-Core-Type.html#TypeDesc",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "TDStruct",
          "normalized": "TDStruct[TypeDesc]Bool",
          "package": "llvm-ht",
          "partial": "TDStruct",
          "signature": "TDStruct[TypeDesc]Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:TDStruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "TDVector",
          "package": "llvm-ht",
          "signature": "TDVector Integer TypeDesc",
          "source": "src/LLVM-Core-Type.html#TypeDesc",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "TDVector",
          "package": "llvm-ht",
          "partial": "TDVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:TDVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "TDVoid",
          "package": "llvm-ht",
          "signature": "TDVoid",
          "source": "src/LLVM-Core-Type.html#TypeDesc",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "TDVoid",
          "package": "llvm-ht",
          "partial": "TDVoid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:TDVoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "Vector",
          "package": "llvm-ht",
          "signature": "Vector [a]",
          "source": "src/LLVM-Core-Data.html#Vector",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "Vector",
          "normalized": "Vector[a]",
          "package": "llvm-ht",
          "partial": "Vector",
          "signature": "Vector[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:Vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeep one copy of named function when linking (weak)\n\u003c/p\u003e",
          "module": "[\"LLVM.Core\",\"LLVM.FFI.Core\"]",
          "name": "WeakAnyLinkage",
          "package": "llvm-ht",
          "signature": "WeakAnyLinkage",
          "source": "src/LLVM-FFI-Core.html#Linkage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:WeakAnyLinkage\",\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:WeakAnyLinkage\"]"
        },
        "index": {
          "description": "Keep one copy of named function when linking weak",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "WeakAnyLinkage",
          "package": "llvm-ht",
          "partial": "Weak Any Linkage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:WeakAnyLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame, but only replaced by something equivalent.\n\u003c/p\u003e",
          "module": "[\"LLVM.Core\",\"LLVM.FFI.Core\"]",
          "name": "WeakODRLinkage",
          "package": "llvm-ht",
          "signature": "WeakODRLinkage",
          "source": "src/LLVM-FFI-Core.html#Linkage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:WeakODRLinkage\",\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:WeakODRLinkage\"]"
        },
        "index": {
          "description": "Same but only replaced by something equivalent",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "WeakODRLinkage",
          "package": "llvm-ht",
          "partial": "Weak ODRLinkage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:WeakODRLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "WordN",
          "package": "llvm-ht",
          "signature": "WordN Integer",
          "source": "src/LLVM-Core-Data.html#WordN",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "WordN",
          "package": "llvm-ht",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:WordN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"LLVM.Core\",\"LLVM.FFI.Core\"]",
          "name": "ZExtAttribute",
          "package": "llvm-ht",
          "signature": "ZExtAttribute",
          "source": "src/LLVM-FFI-Core.html#Attribute",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:ZExtAttribute\",\"http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:ZExtAttribute\"]"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "ZExtAttribute",
          "package": "llvm-ht",
          "partial": "ZExt Attribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:ZExtAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "add",
          "package": "llvm-ht",
          "signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
          "source": "src/LLVM-Core-Instructions.html#add",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "add",
          "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
          "package": "llvm-ht",
          "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd attributes to a value.  Beware, what attributes are allowed depends on\n what kind of value it is.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "addAttributes",
          "package": "llvm-ht",
          "signature": "Value a -\u003e Int -\u003e [Attribute] -\u003e CodeGenFunction r ()",
          "source": "src/LLVM-Core-CodeGen.html#addAttributes",
          "type": "function"
        },
        "index": {
          "description": "Add attributes to value Beware what attributes are allowed depends on what kind of value it is",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "addAttributes",
          "normalized": "Value a-\u003eInt-\u003e[Attribute]-\u003eCodeGenFunction b()",
          "package": "llvm-ht",
          "partial": "Attributes",
          "signature": "Value a-\u003eInt-\u003e[Attribute]-\u003eCodeGenFunction r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:addAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd additional inputs to an existing phi node.\n The reason for this instruction is that sometimes the structure of the code\n makes it impossible to have all variables in scope at the point where you need the phi node.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "addPhiInputs",
          "package": "llvm-ht",
          "signature": "Value a-\u003e [(Value a, BasicBlock)]-\u003e CodeGenFunction r ()",
          "type": "function"
        },
        "index": {
          "description": "Add additional inputs to an existing phi node The reason for this instruction is that sometimes the structure of the code makes it impossible to have all variables in scope at the point where you need the phi node",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "addPhiInputs",
          "normalized": "Value a-\u003e[(Value a,BasicBlock)]-\u003eCodeGenFunction b()",
          "package": "llvm-ht",
          "partial": "Phi Inputs",
          "signature": "Value a-\u003e[(Value a,BasicBlock)]-\u003eCodeGenFunction r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:addPhiInputs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "allOnes",
          "package": "llvm-ht",
          "signature": "ConstValue a",
          "source": "src/LLVM-Core-CodeGen.html#allOnes",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "allOnes",
          "package": "llvm-ht",
          "partial": "Ones",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:allOnes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate stack memory.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "alloca",
          "package": "llvm-ht",
          "signature": "CodeGenFunction r (Value (Ptr a))",
          "source": "src/LLVM-Core-Instructions.html#alloca",
          "type": "function"
        },
        "index": {
          "description": "Allocate stack memory",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "alloca",
          "package": "llvm-ht",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:alloca"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "and",
          "package": "llvm-ht",
          "signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
          "source": "src/LLVM-Core-Instructions.html#and",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "and",
          "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
          "package": "llvm-ht",
          "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate stack (array) memory.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "arrayAlloca",
          "package": "llvm-ht",
          "signature": "s -\u003e CodeGenFunction r (Value (Ptr a))",
          "source": "src/LLVM-Core-Instructions.html#arrayAlloca",
          "type": "function"
        },
        "index": {
          "description": "Allocate stack array memory",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "arrayAlloca",
          "normalized": "a-\u003eCodeGenFunction b(Value(Ptr c))",
          "package": "llvm-ht",
          "partial": "Alloca",
          "signature": "s-\u003eCodeGenFunction r(Value(Ptr a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:arrayAlloca"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate heap (array) memory.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "arrayMalloc",
          "package": "llvm-ht",
          "signature": "s -\u003e CodeGenFunction r (Value (Ptr a))",
          "source": "src/LLVM-Core-Instructions.html#arrayMalloc",
          "type": "function"
        },
        "index": {
          "description": "Allocate heap array memory",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "arrayMalloc",
          "normalized": "a-\u003eCodeGenFunction b(Value(Ptr c))",
          "package": "llvm-ht",
          "partial": "Malloc",
          "signature": "s-\u003eCodeGenFunction r(Value(Ptr a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:arrayMalloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "ashr",
          "package": "llvm-ht",
          "signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
          "source": "src/LLVM-Core-Instructions.html#ashr",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "ashr",
          "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
          "package": "llvm-ht",
          "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:ashr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert between to values of the same size by just copying the bit pattern.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "bitcast",
          "package": "llvm-ht",
          "signature": "Value a -\u003e CodeGenFunction r (Value b)",
          "source": "src/LLVM-Core-Instructions.html#bitcast",
          "type": "function"
        },
        "index": {
          "description": "Convert between to values of the same size by just copying the bit pattern",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "bitcast",
          "normalized": "Value a-\u003eCodeGenFunction b(Value c)",
          "package": "llvm-ht",
          "signature": "Value a-\u003eCodeGenFunction r(Value b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:bitcast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as bitcast but instead of the '(:==:)' type class it uses type unification.\n This way, properties like reflexivity, symmetry and transitivity\n are obvious to the Haskell compiler.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "bitcastUnify",
          "package": "llvm-ht",
          "signature": "Value a -\u003e CodeGenFunction r (Value b)",
          "source": "src/LLVM-Core-Instructions.html#bitcastUnify",
          "type": "function"
        },
        "index": {
          "description": "Same as bitcast but instead of the type class it uses type unification This way properties like reflexivity symmetry and transitivity are obvious to the Haskell compiler",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "bitcastUnify",
          "normalized": "Value a-\u003eCodeGenFunction b(Value c)",
          "package": "llvm-ht",
          "partial": "Unify",
          "signature": "Value a-\u003eCodeGenFunction r(Value b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:bitcastUnify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnconditionally branch to the given basic block.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "br",
          "package": "llvm-ht",
          "signature": "BasicBlock-\u003e CodeGenFunction r Terminate",
          "type": "function"
        },
        "index": {
          "description": "Unconditionally branch to the given basic block",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "br",
          "normalized": "BasicBlock-\u003eCodeGenFunction a Terminate",
          "package": "llvm-ht",
          "signature": "BasicBlock-\u003eCodeGenFunction r Terminate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:br"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "buildTuple",
          "package": "llvm-ht",
          "signature": "FunctionRef -\u003e State Int a",
          "source": "src/LLVM-Core-CodeGen.html#buildTuple",
          "type": "method"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "buildTuple",
          "normalized": "FunctionRef-\u003eState Int a",
          "package": "llvm-ht",
          "partial": "Tuple",
          "signature": "FunctionRef-\u003eState Int a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:buildTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall a function with the given arguments.  The \u003ccode\u003e\u003ca\u003ecall\u003c/a\u003e\u003c/code\u003e instruction is variadic, i.e., the number of arguments\n it takes depends on the type of \u003cem\u003ef\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "call",
          "package": "llvm-ht",
          "signature": "Function f -\u003e g",
          "source": "src/LLVM-Core-Instructions.html#call",
          "type": "function"
        },
        "index": {
          "description": "Call function with the given arguments The call instruction is variadic i.e the number of arguments it takes depends on the type of",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "call",
          "normalized": "Function a-\u003eb",
          "package": "llvm-ht",
          "signature": "Function f-\u003eg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "castModuleValue",
          "package": "llvm-ht",
          "signature": "ModuleValue -\u003e Maybe (Value a)",
          "source": "src/LLVM-Core-CodeGen.html#castModuleValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "castModuleValue",
          "normalized": "ModuleValue-\u003eMaybe(Value a)",
          "package": "llvm-ht",
          "partial": "Module Value",
          "signature": "ModuleValue-\u003eMaybe(Value a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:castModuleValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a varargs function to a regular function.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "castVarArgs",
          "package": "llvm-ht",
          "signature": "Function a -\u003e Function b",
          "source": "src/LLVM-Core.html#castVarArgs",
          "type": "function"
        },
        "index": {
          "description": "Convert varargs function to regular function",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "castVarArgs",
          "normalized": "Function a-\u003eFunction b",
          "package": "llvm-ht",
          "partial": "Var Args",
          "signature": "Function a-\u003eFunction b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:castVarArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBranch to the first basic block if the boolean is true, otherwise to the second basic block.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "condBr",
          "package": "llvm-ht",
          "signature": "Value Bool-\u003e BasicBlock-\u003e BasicBlock-\u003e CodeGenFunction r Terminate",
          "type": "function"
        },
        "index": {
          "description": "Branch to the first basic block if the boolean is true otherwise to the second basic block",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "condBr",
          "normalized": "Value Bool-\u003eBasicBlock-\u003eBasicBlock-\u003eCodeGenFunction a Terminate",
          "package": "llvm-ht",
          "partial": "Br",
          "signature": "Value Bool-\u003eBasicBlock-\u003eBasicBlock-\u003eCodeGenFunction r Terminate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:condBr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a constant array.  Replicates or truncates the list to get length \u003cem\u003en\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "constArray",
          "package": "llvm-ht",
          "signature": "[ConstValue a] -\u003e ConstValue (Array n a)",
          "source": "src/LLVM-Core-CodeGen.html#constArray",
          "type": "function"
        },
        "index": {
          "description": "Make constant array Replicates or truncates the list to get length",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "constArray",
          "normalized": "[ConstValue a]-\u003eConstValue(Array b a)",
          "package": "llvm-ht",
          "partial": "Array",
          "signature": "[ConstValue a]-\u003eConstValue(Array n a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:constArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a constant packed struct.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "constPackedStruct",
          "package": "llvm-ht",
          "signature": "c -\u003e ConstValue (PackedStruct a)",
          "source": "src/LLVM-Core-CodeGen.html#constPackedStruct",
          "type": "function"
        },
        "index": {
          "description": "Make constant packed struct",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "constPackedStruct",
          "normalized": "a-\u003eConstValue(PackedStruct b)",
          "package": "llvm-ht",
          "partial": "Packed Struct",
          "signature": "c-\u003eConstValue(PackedStruct a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:constPackedStruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a constant struct.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "constStruct",
          "package": "llvm-ht",
          "signature": "c -\u003e ConstValue (Struct a)",
          "source": "src/LLVM-Core-CodeGen.html#constStruct",
          "type": "function"
        },
        "index": {
          "description": "Make constant struct",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "constStruct",
          "normalized": "a-\u003eConstValue(Struct b)",
          "package": "llvm-ht",
          "partial": "Struct",
          "signature": "c-\u003eConstValue(Struct a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:constStruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a constant vector.  Replicates or truncates the list to get length \u003cem\u003en\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "constVector",
          "package": "llvm-ht",
          "signature": "[ConstValue a] -\u003e ConstValue (Vector n a)",
          "source": "src/LLVM-Core-CodeGen.html#constVector",
          "type": "function"
        },
        "index": {
          "description": "Make constant vector Replicates or truncates the list to get length",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "constVector",
          "normalized": "[ConstValue a]-\u003eConstValue(Vector b a)",
          "package": "llvm-ht",
          "partial": "Vector",
          "signature": "[ConstValue a]-\u003eConstValue(Vector n a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:constVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "createBasicBlock",
          "package": "llvm-ht",
          "signature": "CodeGenFunction r BasicBlock",
          "source": "src/LLVM-Core-CodeGen.html#createBasicBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "createBasicBlock",
          "package": "llvm-ht",
          "partial": "Basic Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:createBasicBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new function with the given body.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "createFunction",
          "package": "llvm-ht",
          "signature": "Linkage-\u003e g-\u003e CodeGenModule (Function f)",
          "type": "function"
        },
        "index": {
          "description": "Create new function with the given body",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "createFunction",
          "normalized": "Linkage-\u003ea-\u003eCodeGenModule(Function b)",
          "package": "llvm-ht",
          "partial": "Function",
          "signature": "Linkage-\u003eg-\u003eCodeGenModule(Function f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:createFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a pass manager for a module.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "createFunctionPassManager",
          "package": "llvm-ht",
          "signature": "ModuleProvider -\u003e IO PassManager",
          "source": "src/LLVM-Core-Util.html#createFunctionPassManager",
          "type": "function"
        },
        "index": {
          "description": "Create pass manager for module",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "createFunctionPassManager",
          "normalized": "ModuleProvider-\u003eIO PassManager",
          "package": "llvm-ht",
          "partial": "Function Pass Manager",
          "signature": "ModuleProvider-\u003eIO PassManager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:createFunctionPassManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate and define a global variable.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "createGlobal",
          "package": "llvm-ht",
          "signature": "Bool -\u003e Linkage -\u003e ConstValue a -\u003e TGlobal a",
          "source": "src/LLVM-Core-CodeGen.html#createGlobal",
          "type": "function"
        },
        "index": {
          "description": "Create and define global variable",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "createGlobal",
          "normalized": "Bool-\u003eLinkage-\u003eConstValue a-\u003eTGlobal a",
          "package": "llvm-ht",
          "partial": "Global",
          "signature": "Bool-\u003eLinkage-\u003eConstValue a-\u003eTGlobal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:createGlobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new module with the given body.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "createModule",
          "package": "llvm-ht",
          "signature": "CodeGenModule a-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Create new module with the given body",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "createModule",
          "normalized": "CodeGenModule a-\u003eIO a",
          "package": "llvm-ht",
          "partial": "Module",
          "signature": "CodeGenModule a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:createModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a module into a module provider.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "createModuleProviderForExistingModule",
          "package": "llvm-ht",
          "signature": "Module -\u003e IO ModuleProvider",
          "source": "src/LLVM-Core-Util.html#createModuleProviderForExistingModule",
          "type": "function"
        },
        "index": {
          "description": "Turn module into module provider",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "createModuleProviderForExistingModule",
          "normalized": "Module-\u003eIO ModuleProvider",
          "package": "llvm-ht",
          "partial": "Module Provider For Existing Module",
          "signature": "Module-\u003eIO ModuleProvider",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:createModuleProviderForExistingModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new function with the given body.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "createNamedFunction",
          "package": "llvm-ht",
          "signature": "Linkage-\u003e String-\u003e g-\u003e CodeGenModule (Function f)",
          "type": "function"
        },
        "index": {
          "description": "Create new function with the given body",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "createNamedFunction",
          "normalized": "Linkage-\u003eString-\u003ea-\u003eCodeGenModule(Function b)",
          "package": "llvm-ht",
          "partial": "Named Function",
          "signature": "Linkage-\u003eString-\u003eg-\u003eCodeGenModule(Function f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:createNamedFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate and define a named global variable.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "createNamedGlobal",
          "package": "llvm-ht",
          "signature": "Bool -\u003e Linkage -\u003e String -\u003e ConstValue a -\u003e TGlobal a",
          "source": "src/LLVM-Core-CodeGen.html#createNamedGlobal",
          "type": "function"
        },
        "index": {
          "description": "Create and define named global variable",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "createNamedGlobal",
          "normalized": "Bool-\u003eLinkage-\u003eString-\u003eConstValue a-\u003eTGlobal a",
          "package": "llvm-ht",
          "partial": "Named Global",
          "signature": "Bool-\u003eLinkage-\u003eString-\u003eConstValue a-\u003eTGlobal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:createNamedGlobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a pass manager.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "createPassManager",
          "package": "llvm-ht",
          "signature": "IO PassManager",
          "source": "src/LLVM-Core-Util.html#createPassManager",
          "type": "function"
        },
        "index": {
          "description": "Create pass manager",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "createPassManager",
          "package": "llvm-ht",
          "partial": "Pass Manager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:createPassManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "createString",
          "package": "llvm-ht",
          "signature": "String -\u003e TGlobal (Array n Word8)",
          "source": "src/LLVM-Core-CodeGen.html#createString",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "createString",
          "normalized": "String-\u003eTGlobal(Array a Word)",
          "package": "llvm-ht",
          "partial": "String",
          "signature": "String-\u003eTGlobal(Array n Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:createString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "createStringNul",
          "package": "llvm-ht",
          "signature": "String -\u003e TGlobal (Array n Word8)",
          "source": "src/LLVM-Core-CodeGen.html#createStringNul",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "createStringNul",
          "normalized": "String-\u003eTGlobal(Array a Word)",
          "package": "llvm-ht",
          "partial": "String Nul",
          "signature": "String-\u003eTGlobal(Array n Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:createStringNul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "defineBasicBlock",
          "package": "llvm-ht",
          "signature": "BasicBlock -\u003e CodeGenFunction r ()",
          "source": "src/LLVM-Core-CodeGen.html#defineBasicBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "defineBasicBlock",
          "normalized": "BasicBlock-\u003eCodeGenFunction a()",
          "package": "llvm-ht",
          "partial": "Basic Block",
          "signature": "BasicBlock-\u003eCodeGenFunction r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:defineBasicBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a function body.  The basic block returned by the function is the function entry point.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "defineFunction",
          "package": "llvm-ht",
          "signature": "Function f-\u003e g-\u003e CodeGenModule ()",
          "type": "function"
        },
        "index": {
          "description": "Define function body The basic block returned by the function is the function entry point",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "defineFunction",
          "normalized": "Function a-\u003eb-\u003eCodeGenModule()",
          "package": "llvm-ht",
          "partial": "Function",
          "signature": "Function f-\u003eg-\u003eCodeGenModule()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:defineFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGive a global variable a (constant) value.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "defineGlobal",
          "package": "llvm-ht",
          "signature": "Global a -\u003e ConstValue a -\u003e CodeGenModule ()",
          "source": "src/LLVM-Core-CodeGen.html#defineGlobal",
          "type": "function"
        },
        "index": {
          "description": "Give global variable constant value",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "defineGlobal",
          "normalized": "Global a-\u003eConstValue a-\u003eCodeGenModule()",
          "package": "llvm-ht",
          "partial": "Global",
          "signature": "Global a-\u003eConstValue a-\u003eCodeGenModule()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:defineGlobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGive the body for a module.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "defineModule",
          "package": "llvm-ht",
          "signature": "Module-\u003e CodeGenModule a-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Give the body for module",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "defineModule",
          "normalized": "Module-\u003eCodeGenModule a-\u003eIO a",
          "package": "llvm-ht",
          "partial": "Module",
          "signature": "Module-\u003eCodeGenModule a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:defineModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFree all storage related to a module.  *Note*, this is a dangerous call, since referring\n to the module after this call is an error.  The reason for the explicit call to free\n the module instead of an automatic lifetime management is that modules have a\n somewhat complicated ownership.  Handing a module to a module provider changes\n the ownership of the module, and the module provider will free the module when necessary.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "destroyModule",
          "package": "llvm-ht",
          "signature": "Module -\u003e IO ()",
          "source": "src/LLVM-Core-Util.html#destroyModule",
          "type": "function"
        },
        "index": {
          "description": "Free all storage related to module Note this is dangerous call since referring to the module after this call is an error The reason for the explicit call to free the module instead of an automatic lifetime management is that modules have somewhat complicated ownership Handing module to module provider changes the ownership of the module and the module provider will free the module when necessary",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "destroyModule",
          "normalized": "Module-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Module",
          "signature": "Module-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:destroyModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a type.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "dumpType",
          "package": "llvm-ht",
          "signature": "Value a -\u003e IO ()",
          "source": "src/LLVM-Core.html#dumpType",
          "type": "function"
        },
        "index": {
          "description": "Print type",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "dumpType",
          "normalized": "Value a-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Type",
          "signature": "Value a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:dumpType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a value.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "dumpValue",
          "package": "llvm-ht",
          "signature": "Value a -\u003e IO ()",
          "source": "src/LLVM-Core.html#dumpValue",
          "type": "function"
        },
        "index": {
          "description": "Print value",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "dumpValue",
          "normalized": "Value a-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Value",
          "signature": "Value a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:dumpValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a reference to an external function while code generating for a function.\n If LLVM cannot resolve its name, then you may try \u003ccode\u003e\u003ca\u003estaticFunction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "externFunction",
          "package": "llvm-ht",
          "signature": "String -\u003e CodeGenFunction r (Function a)",
          "source": "src/LLVM-Core-CodeGen.html#externFunction",
          "type": "function"
        },
        "index": {
          "description": "Create reference to an external function while code generating for function If LLVM cannot resolve its name then you may try staticFunction",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "externFunction",
          "normalized": "String-\u003eCodeGenFunction a(Function b)",
          "package": "llvm-ht",
          "partial": "Function",
          "signature": "String-\u003eCodeGenFunction r(Function a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:externFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a value from a vector.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "extractelement",
          "package": "llvm-ht",
          "signature": "Value (Vector n a)-\u003e Value Word32-\u003e CodeGenFunction r (Value a)",
          "type": "function"
        },
        "index": {
          "description": "Get value from vector",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "extractelement",
          "normalized": "Value(Vector a b)-\u003eValue Word-\u003eCodeGenFunction c(Value b)",
          "package": "llvm-ht",
          "signature": "Value(Vector n a)-\u003eValue Word-\u003eCodeGenFunction r(Value a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:extractelement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a value from an aggregate.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "extractvalue",
          "package": "llvm-ht",
          "signature": "Value agg-\u003e i-\u003e CodeGenFunction r (Value a)",
          "type": "function"
        },
        "index": {
          "description": "Get value from an aggregate",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "extractvalue",
          "normalized": "Value a-\u003eb-\u003eCodeGenFunction c(Value d)",
          "package": "llvm-ht",
          "signature": "Value agg-\u003ei-\u003eCodeGenFunction r(Value a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:extractvalue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "fadd",
          "package": "llvm-ht",
          "signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
          "source": "src/LLVM-Core-Instructions.html#fadd",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "fadd",
          "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
          "package": "llvm-ht",
          "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:fadd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare floating point values.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "fcmp",
          "package": "llvm-ht",
          "signature": "FPPredicate -\u003e a -\u003e b -\u003e CodeGenFunction r (Value d)",
          "source": "src/LLVM-Core-Instructions.html#fcmp",
          "type": "function"
        },
        "index": {
          "description": "Compare floating point values",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "fcmp",
          "normalized": "FPPredicate-\u003ea-\u003eb-\u003eCodeGenFunction c(Value d)",
          "package": "llvm-ht",
          "signature": "FPPredicate-\u003ea-\u003eb-\u003eCodeGenFunction r(Value d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:fcmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFloating point division.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "fdiv",
          "package": "llvm-ht",
          "signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
          "source": "src/LLVM-Core-Instructions.html#fdiv",
          "type": "function"
        },
        "index": {
          "description": "Floating point division",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "fdiv",
          "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
          "package": "llvm-ht",
          "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:fdiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "fmul",
          "package": "llvm-ht",
          "signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
          "source": "src/LLVM-Core-Instructions.html#fmul",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "fmul",
          "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
          "package": "llvm-ht",
          "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:fmul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend a floating point value.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "fpext",
          "package": "llvm-ht",
          "signature": "Value a -\u003e CodeGenFunction r (Value b)",
          "source": "src/LLVM-Core-Instructions.html#fpext",
          "type": "function"
        },
        "index": {
          "description": "Extend floating point value",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "fpext",
          "normalized": "Value a-\u003eCodeGenFunction b(Value c)",
          "package": "llvm-ht",
          "signature": "Value a-\u003eCodeGenFunction r(Value b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:fpext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a floating point value to a signed integer.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "fptosi",
          "package": "llvm-ht",
          "signature": "Value a -\u003e CodeGenFunction r (Value b)",
          "source": "src/LLVM-Core-Instructions.html#fptosi",
          "type": "function"
        },
        "index": {
          "description": "Convert floating point value to signed integer",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "fptosi",
          "normalized": "Value a-\u003eCodeGenFunction b(Value c)",
          "package": "llvm-ht",
          "signature": "Value a-\u003eCodeGenFunction r(Value b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:fptosi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a floating point value to an unsigned integer.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "fptoui",
          "package": "llvm-ht",
          "signature": "Value a -\u003e CodeGenFunction r (Value b)",
          "source": "src/LLVM-Core-Instructions.html#fptoui",
          "type": "function"
        },
        "index": {
          "description": "Convert floating point value to an unsigned integer",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "fptoui",
          "normalized": "Value a-\u003eCodeGenFunction b(Value c)",
          "package": "llvm-ht",
          "signature": "Value a-\u003eCodeGenFunction r(Value b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:fptoui"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTruncate a floating point value.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "fptrunc",
          "package": "llvm-ht",
          "signature": "Value a -\u003e CodeGenFunction r (Value b)",
          "source": "src/LLVM-Core-Instructions.html#fptrunc",
          "type": "function"
        },
        "index": {
          "description": "Truncate floating point value",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "fptrunc",
          "normalized": "Value a-\u003eCodeGenFunction b(Value c)",
          "package": "llvm-ht",
          "signature": "Value a-\u003eCodeGenFunction r(Value b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:fptrunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFree heap memory.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "free",
          "package": "llvm-ht",
          "signature": "Value (Ptr a) -\u003e CodeGenFunction r (Value ())",
          "source": "src/LLVM-Core-Instructions.html#free",
          "type": "function"
        },
        "index": {
          "description": "Free heap memory",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "free",
          "normalized": "Value(Ptr a)-\u003eCodeGenFunction b(Value())",
          "package": "llvm-ht",
          "signature": "Value(Ptr a)-\u003eCodeGenFunction r(Value())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:free"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFloating point remainder.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "frem",
          "package": "llvm-ht",
          "signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
          "source": "src/LLVM-Core-Instructions.html#frem",
          "type": "function"
        },
        "index": {
          "description": "Floating point remainder",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "frem",
          "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
          "package": "llvm-ht",
          "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:frem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "fromLabel",
          "package": "llvm-ht",
          "signature": "Value Label -\u003e BasicBlock",
          "source": "src/LLVM-Core-CodeGen.html#fromLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "fromLabel",
          "normalized": "Value Label-\u003eBasicBlock",
          "package": "llvm-ht",
          "partial": "Label",
          "signature": "Value Label-\u003eBasicBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:fromLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "fromVector",
          "package": "llvm-ht",
          "signature": "Vector n a -\u003e va",
          "source": "src/LLVM-Core-Vector.html#fromVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "fromVector",
          "normalized": "Vector a b-\u003ec",
          "package": "llvm-ht",
          "partial": "Vector",
          "signature": "Vector n a-\u003eva",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:fromVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "fsub",
          "package": "llvm-ht",
          "signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
          "source": "src/LLVM-Core-Instructions.html#fsub",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "fsub",
          "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
          "package": "llvm-ht",
          "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:fsub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "getCurrentBasicBlock",
          "package": "llvm-ht",
          "signature": "CodeGenFunction r BasicBlock",
          "source": "src/LLVM-Core-CodeGen.html#getCurrentBasicBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "getCurrentBasicBlock",
          "package": "llvm-ht",
          "partial": "Current Basic Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:getCurrentBasicBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAddress arithmetic.  See LLVM description.\n The index is a nested tuple of the form \u003ccode\u003e(i1,(i2,( ... ())))\u003c/code\u003e.\n (This is without a doubt the most confusing LLVM instruction, but the types help.)\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "getElementPtr",
          "package": "llvm-ht",
          "signature": "Value (Ptr o) -\u003e (a, i) -\u003e CodeGenFunction r (Value (Ptr n))",
          "source": "src/LLVM-Core-Instructions.html#getElementPtr",
          "type": "function"
        },
        "index": {
          "description": "Address arithmetic See LLVM description The index is nested tuple of the form i1 i2 This is without doubt the most confusing LLVM instruction but the types help",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "getElementPtr",
          "normalized": "Value(Ptr a)-\u003e(b,c)-\u003eCodeGenFunction d(Value(Ptr e))",
          "package": "llvm-ht",
          "partial": "Element Ptr",
          "signature": "Value(Ptr o)-\u003e(a,i)-\u003eCodeGenFunction r(Value(Ptr n))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:getElementPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike getElementPtr, but with an initial index that is 0.\n This is useful since any pointer first need to be indexed off the pointer, and then into\n its actual value.  This first indexing is often with 0.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "getElementPtr0",
          "package": "llvm-ht",
          "signature": "Value (Ptr o) -\u003e i -\u003e CodeGenFunction r (Value (Ptr n))",
          "source": "src/LLVM-Core-Instructions.html#getElementPtr0",
          "type": "function"
        },
        "index": {
          "description": "Like getElementPtr but with an initial index that is This is useful since any pointer first need to be indexed off the pointer and then into its actual value This first indexing is often with",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "getElementPtr0",
          "normalized": "Value(Ptr a)-\u003eb-\u003eCodeGenFunction c(Value(Ptr d))",
          "package": "llvm-ht",
          "partial": "Element Ptr",
          "signature": "Value(Ptr o)-\u003ei-\u003eCodeGenFunction r(Value(Ptr n))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:getElementPtr0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list created by calls to \u003ccode\u003estaticFunction\u003c/code\u003e\nthat must be passed to the execution engine\nvia \u003ccode\u003eLLVM.ExecutionEngine.addGlobalMappings\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "getGlobalMappings",
          "package": "llvm-ht",
          "signature": "CodeGenModule GlobalMappings",
          "source": "src/LLVM-Core-CodeGenMonad.html#getGlobalMappings",
          "type": "function"
        },
        "index": {
          "description": "Get list created by calls to staticFunction that must be passed to the execution engine via LLVM.ExecutionEngine.addGlobalMappings",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "getGlobalMappings",
          "package": "llvm-ht",
          "partial": "Global Mappings",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:getGlobalMappings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "getModuleValues",
          "package": "llvm-ht",
          "signature": "Module -\u003e IO [(String, ModuleValue)]",
          "source": "src/LLVM-Core-CodeGen.html#getModuleValues",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "getModuleValues",
          "normalized": "Module-\u003eIO[(String,ModuleValue)]",
          "package": "llvm-ht",
          "partial": "Module Values",
          "signature": "Module-\u003eIO[(String,ModuleValue)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:getModuleValues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the name of a \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "getValueName",
          "package": "llvm-ht",
          "signature": "Value a -\u003e IO String",
          "source": "src/LLVM-Core.html#getValueName",
          "type": "function"
        },
        "index": {
          "description": "Get the name of Value",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "getValueName",
          "normalized": "Value a-\u003eIO String",
          "package": "llvm-ht",
          "partial": "Value Name",
          "signature": "Value a-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:getValueName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare integers.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "icmp",
          "package": "llvm-ht",
          "signature": "IntPredicate -\u003e a -\u003e b -\u003e CodeGenFunction r (Value d)",
          "source": "src/LLVM-Core-Instructions.html#icmp",
          "type": "function"
        },
        "index": {
          "description": "Compare integers",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "icmp",
          "normalized": "IntPredicate-\u003ea-\u003eb-\u003eCodeGenFunction c(Value d)",
          "package": "llvm-ht",
          "signature": "IntPredicate-\u003ea-\u003eb-\u003eCodeGenFunction r(Value d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:icmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize jitter to the native target.\n The operation is idempotent.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "initializeNativeTarget",
          "package": "llvm-ht",
          "signature": "IO ()",
          "source": "src/LLVM-Target-Native.html#initializeNativeTarget",
          "type": "function"
        },
        "index": {
          "description": "Initialize jitter to the native target The operation is idempotent",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "initializeNativeTarget",
          "normalized": "IO()",
          "package": "llvm-ht",
          "partial": "Native Target",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:initializeNativeTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a value into a vector, nondestructive.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "insertelement",
          "package": "llvm-ht",
          "signature": "Value (Vector n a)-\u003e Value a-\u003e Value Word32-\u003e CodeGenFunction r (Value (Vector n a))",
          "type": "function"
        },
        "index": {
          "description": "Insert value into vector nondestructive",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "insertelement",
          "normalized": "Value(Vector a b)-\u003eValue b-\u003eValue Word-\u003eCodeGenFunction c(Value(Vector a b))",
          "package": "llvm-ht",
          "signature": "Value(Vector n a)-\u003eValue a-\u003eValue Word-\u003eCodeGenFunction r(Value(Vector n a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:insertelement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a value into an aggregate, nondestructive.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "insertvalue",
          "package": "llvm-ht",
          "signature": "Value agg-\u003e Value a-\u003e i-\u003e CodeGenFunction r (Value agg)",
          "type": "function"
        },
        "index": {
          "description": "Insert value into an aggregate nondestructive",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "insertvalue",
          "normalized": "Value a-\u003eValue b-\u003ec-\u003eCodeGenFunction d(Value a)",
          "package": "llvm-ht",
          "signature": "Value agg-\u003eValue a-\u003ei-\u003eCodeGenFunction r(Value agg)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:insertvalue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an integer to a pointer.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "inttoptr",
          "package": "llvm-ht",
          "signature": "Value a -\u003e CodeGenFunction r (Value (Ptr b))",
          "source": "src/LLVM-Core-Instructions.html#inttoptr",
          "type": "function"
        },
        "index": {
          "description": "Convert an integer to pointer",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "inttoptr",
          "normalized": "Value a-\u003eCodeGenFunction b(Value(Ptr c))",
          "package": "llvm-ht",
          "signature": "Value a-\u003eCodeGenFunction r(Value(Ptr b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:inttoptr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "inv",
          "package": "llvm-ht",
          "signature": "Value a -\u003e CodeGenFunction r (Value a)",
          "source": "src/LLVM-Core-Instructions.html#inv",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "inv",
          "normalized": "Value a-\u003eCodeGenFunction b(Value a)",
          "package": "llvm-ht",
          "signature": "Value a-\u003eCodeGenFunction r(Value a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:inv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall a function with exception handling.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "invoke",
          "package": "llvm-ht",
          "signature": "BasicBlock-\u003e BasicBlock-\u003e Function f-\u003e g",
          "type": "function"
        },
        "index": {
          "description": "Call function with exception handling",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "invoke",
          "normalized": "BasicBlock-\u003eBasicBlock-\u003eFunction a-\u003eb",
          "package": "llvm-ht",
          "signature": "BasicBlock-\u003eBasicBlock-\u003eFunction f-\u003eg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:invoke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "isFloating",
          "package": "llvm-ht",
          "signature": "a -\u003e Bool",
          "source": "src/LLVM-Core-Type.html#isFloating",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "isFloating",
          "normalized": "a-\u003eBool",
          "package": "llvm-ht",
          "partial": "Floating",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:isFloating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "isSigned",
          "package": "llvm-ht",
          "signature": "a -\u003e Bool",
          "source": "src/LLVM-Core-Type.html#isSigned",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "isSigned",
          "normalized": "a-\u003eBool",
          "package": "llvm-ht",
          "partial": "Signed",
          "signature": "a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:isSigned"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a value from memory.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "load",
          "package": "llvm-ht",
          "signature": "Value (Ptr a)-\u003e CodeGenFunction r (Value a)",
          "type": "function"
        },
        "index": {
          "description": "Load value from memory",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "load",
          "normalized": "Value(Ptr a)-\u003eCodeGenFunction b(Value a)",
          "package": "llvm-ht",
          "signature": "Value(Ptr a)-\u003eCodeGenFunction r(Value a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:load"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "lshr",
          "package": "llvm-ht",
          "signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
          "source": "src/LLVM-Core-Instructions.html#lshr",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "lshr",
          "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
          "package": "llvm-ht",
          "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:lshr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate heap memory.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "malloc",
          "package": "llvm-ht",
          "signature": "CodeGenFunction r (Value (Ptr a))",
          "source": "src/LLVM-Core-Instructions.html#malloc",
          "type": "function"
        },
        "index": {
          "description": "Allocate heap memory",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "malloc",
          "package": "llvm-ht",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:malloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "mul",
          "package": "llvm-ht",
          "signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
          "source": "src/LLVM-Core-Instructions.html#mul",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "mul",
          "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
          "package": "llvm-ht",
          "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:mul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "neg",
          "package": "llvm-ht",
          "signature": "Value a -\u003e CodeGenFunction r (Value a)",
          "source": "src/LLVM-Core-Instructions.html#neg",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "neg",
          "normalized": "Value a-\u003eCodeGenFunction b(Value a)",
          "package": "llvm-ht",
          "signature": "Value a-\u003eCodeGenFunction r(Value a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:neg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "newBasicBlock",
          "package": "llvm-ht",
          "signature": "CodeGenFunction r BasicBlock",
          "source": "src/LLVM-Core-CodeGen.html#newBasicBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "newBasicBlock",
          "package": "llvm-ht",
          "partial": "Basic Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:newBasicBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new function.  Use \u003ccode\u003e\u003ca\u003enewNamedFunction\u003c/a\u003e\u003c/code\u003e to create a function with external linkage, since\n it needs a known name.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "newFunction",
          "package": "llvm-ht",
          "signature": "Linkage -\u003e CodeGenModule (Function a)",
          "source": "src/LLVM-Core-CodeGen.html#newFunction",
          "type": "function"
        },
        "index": {
          "description": "Create new function Use newNamedFunction to create function with external linkage since it needs known name",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "newFunction",
          "normalized": "Linkage-\u003eCodeGenModule(Function a)",
          "package": "llvm-ht",
          "partial": "Function",
          "signature": "Linkage-\u003eCodeGenModule(Function a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:newFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new global variable.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "newGlobal",
          "package": "llvm-ht",
          "signature": "Bool -\u003e Linkage -\u003e TGlobal a",
          "source": "src/LLVM-Core-CodeGen.html#newGlobal",
          "type": "function"
        },
        "index": {
          "description": "Create new global variable",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "newGlobal",
          "normalized": "Bool-\u003eLinkage-\u003eTGlobal a",
          "package": "llvm-ht",
          "partial": "Global",
          "signature": "Bool-\u003eLinkage-\u003eTGlobal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:newGlobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new module.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "newModule",
          "package": "llvm-ht",
          "signature": "IO Module",
          "source": "src/LLVM-Core-CodeGen.html#newModule",
          "type": "function"
        },
        "index": {
          "description": "Create new module",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "newModule",
          "package": "llvm-ht",
          "partial": "Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:newModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "newNamedBasicBlock",
          "package": "llvm-ht",
          "signature": "String -\u003e CodeGenFunction r BasicBlock",
          "source": "src/LLVM-Core-CodeGen.html#newNamedBasicBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "newNamedBasicBlock",
          "normalized": "String-\u003eCodeGenFunction a BasicBlock",
          "package": "llvm-ht",
          "partial": "Named Basic Block",
          "signature": "String-\u003eCodeGenFunction r BasicBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:newNamedBasicBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new named function.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "newNamedFunction",
          "package": "llvm-ht",
          "signature": "Linkage-\u003e String-\u003e CodeGenModule (Function a)",
          "type": "function"
        },
        "index": {
          "description": "Create new named function",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "newNamedFunction",
          "normalized": "Linkage-\u003eString-\u003eCodeGenModule(Function a)",
          "package": "llvm-ht",
          "partial": "Named Function",
          "signature": "Linkage-\u003eString-\u003eCodeGenModule(Function a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:newNamedFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new named global variable.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "newNamedGlobal",
          "package": "llvm-ht",
          "signature": "Bool-\u003e Linkage-\u003e String-\u003e TGlobal a",
          "type": "function"
        },
        "index": {
          "description": "Create new named global variable",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "newNamedGlobal",
          "normalized": "Bool-\u003eLinkage-\u003eString-\u003eTGlobal a",
          "package": "llvm-ht",
          "partial": "Named Global",
          "signature": "Bool-\u003eLinkage-\u003eString-\u003eTGlobal a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:newNamedGlobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new explicitely named module.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "newNamedModule",
          "package": "llvm-ht",
          "signature": "String-\u003e IO Module",
          "type": "function"
        },
        "index": {
          "description": "Create new explicitely named module",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "newNamedModule",
          "normalized": "String-\u003eIO Module",
          "package": "llvm-ht",
          "partial": "Named Module",
          "signature": "String-\u003eIO Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:newNamedModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "or",
          "package": "llvm-ht",
          "signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
          "source": "src/LLVM-Core-Instructions.html#or",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "or",
          "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
          "package": "llvm-ht",
          "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin several variables (virtual registers) from different basic blocks into one.\n All of the variables in the list are joined.  See also \u003ccode\u003e\u003ca\u003eaddPhiInputs\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "phi",
          "package": "llvm-ht",
          "signature": "[(Value a, BasicBlock)] -\u003e CodeGenFunction r (Value a)",
          "source": "src/LLVM-Core-Instructions.html#phi",
          "type": "function"
        },
        "index": {
          "description": "Join several variables virtual registers from different basic blocks into one All of the variables in the list are joined See also addPhiInputs",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "phi",
          "normalized": "[(Value a,BasicBlock)]-\u003eCodeGenFunction b(Value a)",
          "package": "llvm-ht",
          "signature": "[(Value a,BasicBlock)]-\u003eCodeGenFunction r(Value a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:phi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a pointer to an integer.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "ptrtoint",
          "package": "llvm-ht",
          "signature": "Value (Ptr a) -\u003e CodeGenFunction r (Value b)",
          "source": "src/LLVM-Core-Instructions.html#ptrtoint",
          "type": "function"
        },
        "index": {
          "description": "Convert pointer to an integer",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "ptrtoint",
          "normalized": "Value(Ptr a)-\u003eCodeGenFunction b(Value c)",
          "package": "llvm-ht",
          "signature": "Value(Ptr a)-\u003eCodeGenFunction r(Value b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:ptrtoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a module from a file.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "readBitcodeFromFile",
          "package": "llvm-ht",
          "signature": "String -\u003e IO Module",
          "source": "src/LLVM-Core-Util.html#readBitcodeFromFile",
          "type": "function"
        },
        "index": {
          "description": "Read module from file",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "readBitcodeFromFile",
          "normalized": "String-\u003eIO Module",
          "package": "llvm-ht",
          "partial": "Bitcode From File",
          "signature": "String-\u003eIO Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:readBitcodeFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn from the current function with the given value.  Use () as the return value for what would be a void function is C.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "ret",
          "package": "llvm-ht",
          "signature": "a -\u003e CodeGenFunction r Terminate",
          "source": "src/LLVM-Core-Instructions.html#ret",
          "type": "function"
        },
        "index": {
          "description": "Return from the current function with the given value Use as the return value for what would be void function is",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "ret",
          "normalized": "a-\u003eCodeGenFunction b Terminate",
          "package": "llvm-ht",
          "signature": "a-\u003eCodeGenFunction r Terminate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:ret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "sdiv",
          "package": "llvm-ht",
          "signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
          "source": "src/LLVM-Core-Instructions.html#sdiv",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "sdiv",
          "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
          "package": "llvm-ht",
          "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:sdiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect between two values depending on a boolean.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "select",
          "package": "llvm-ht",
          "signature": "Value b -\u003e Value a -\u003e Value a -\u003e CodeGenFunction r (Value a)",
          "source": "src/LLVM-Core-Instructions.html#select",
          "type": "function"
        },
        "index": {
          "description": "Select between two values depending on boolean",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "select",
          "normalized": "Value a-\u003eValue b-\u003eValue b-\u003eCodeGenFunction c(Value b)",
          "package": "llvm-ht",
          "signature": "Value b-\u003eValue a-\u003eValue a-\u003eCodeGenFunction r(Value a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSign extend a value to wider width.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "sext",
          "package": "llvm-ht",
          "signature": "Value a -\u003e CodeGenFunction r (Value b)",
          "source": "src/LLVM-Core-Instructions.html#sext",
          "type": "function"
        },
        "index": {
          "description": "Sign extend value to wider width",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "sext",
          "normalized": "Value a-\u003eCodeGenFunction b(Value c)",
          "package": "llvm-ht",
          "signature": "Value a-\u003eCodeGenFunction r(Value b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:sext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "shl",
          "package": "llvm-ht",
          "signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
          "source": "src/LLVM-Core-Instructions.html#shl",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "shl",
          "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
          "package": "llvm-ht",
          "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:shl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePermute vector.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "shufflevector",
          "package": "llvm-ht",
          "signature": "Value (Vector n a) -\u003e Value (Vector n a) -\u003e ConstValue (Vector n Word32) -\u003e CodeGenFunction r (Value (Vector n a))",
          "source": "src/LLVM-Core-Instructions.html#shufflevector",
          "type": "function"
        },
        "index": {
          "description": "Permute vector",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "shufflevector",
          "normalized": "Value(Vector a b)-\u003eValue(Vector a b)-\u003eConstValue(Vector a Word)-\u003eCodeGenFunction c(Value(Vector a b))",
          "package": "llvm-ht",
          "signature": "Value(Vector n a)-\u003eValue(Vector n a)-\u003eConstValue(Vector n Word)-\u003eCodeGenFunction r(Value(Vector n a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:shufflevector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a signed integer to a floating point value.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "sitofp",
          "package": "llvm-ht",
          "signature": "Value a -\u003e CodeGenFunction r (Value b)",
          "source": "src/LLVM-Core-Instructions.html#sitofp",
          "type": "function"
        },
        "index": {
          "description": "Convert signed integer to floating point value",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "sitofp",
          "normalized": "Value a-\u003eCodeGenFunction b(Value c)",
          "package": "llvm-ht",
          "signature": "Value a-\u003eCodeGenFunction r(Value b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:sitofp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "srem",
          "package": "llvm-ht",
          "signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
          "source": "src/LLVM-Core-Instructions.html#srem",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "srem",
          "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
          "package": "llvm-ht",
          "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:srem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake an external C function with a fixed address callable from LLVM code.\nThis callback function can also be a Haskell function,\nthat was imported like\n\u003c/p\u003e\u003cpre\u003e foreign import ccall \"&nextElement\"\n    nextElementFunPtr :: FunPtr (StablePtr (IORef [Word32]) -\u003e IO Word32)\n\u003c/pre\u003e\u003cp\u003eSee \u003ccode\u003eexamples/List.hs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eWhen you only use \u003ccode\u003e\u003ca\u003eexternFunction\u003c/a\u003e\u003c/code\u003e, then LLVM cannot resolve the name.\n(However, I do not know why.)\nThus \u003ccode\u003e\u003ca\u003estaticFunction\u003c/a\u003e\u003c/code\u003e manages a list of static functions.\nThis list is automatically installed by \u003ccode\u003eExecutionEngine.simpleFunction\u003c/code\u003e\nand can be manually obtained by \u003ccode\u003e\u003ca\u003egetGlobalMappings\u003c/a\u003e\u003c/code\u003e\nand installed by \u003ccode\u003eExecutionEngine.addGlobalMappings\u003c/code\u003e.\n\"Installing\" means calling LLVM's \u003ccode\u003eaddGlobalMapping\u003c/code\u003e according to\n\u003ca\u003ehttp://old.nabble.com/jit-with-external-functions-td7769793.html\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "staticFunction",
          "package": "llvm-ht",
          "signature": "FunPtr f -\u003e CodeGenFunction r (Function f)",
          "source": "src/LLVM-Core-CodeGen.html#staticFunction",
          "type": "function"
        },
        "index": {
          "description": "Make an external function with fixed address callable from LLVM code This callback function can also be Haskell function that was imported like foreign import ccall nextElement nextElementFunPtr FunPtr StablePtr IORef Word32 IO Word32 See examples List.hs When you only use externFunction then LLVM cannot resolve the name However do not know why Thus staticFunction manages list of static functions This list is automatically installed by ExecutionEngine.simpleFunction and can be manually obtained by getGlobalMappings and installed by ExecutionEngine.addGlobalMappings Installing means calling LLVM addGlobalMapping according to http old.nabble.com jit-with-external-functions-td7769793.html",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "staticFunction",
          "normalized": "FunPtr a-\u003eCodeGenFunction b(Function a)",
          "package": "llvm-ht",
          "partial": "Function",
          "signature": "FunPtr f-\u003eCodeGenFunction r(Function f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:staticFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a value in memory\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "store",
          "package": "llvm-ht",
          "signature": "Value a-\u003e Value (Ptr a)-\u003e CodeGenFunction r (Value ())",
          "type": "function"
        },
        "index": {
          "description": "Store value in memory",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "store",
          "normalized": "Value a-\u003eValue(Ptr a)-\u003eCodeGenFunction b(Value())",
          "package": "llvm-ht",
          "signature": "Value a-\u003eValue(Ptr a)-\u003eCodeGenFunction r(Value())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:store"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "sub",
          "package": "llvm-ht",
          "signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
          "source": "src/LLVM-Core-Instructions.html#sub",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "sub",
          "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
          "package": "llvm-ht",
          "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBranch table instruction.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "switch",
          "package": "llvm-ht",
          "signature": "Value a-\u003e BasicBlock-\u003e [(ConstValue a, BasicBlock)]-\u003e CodeGenFunction r Terminate",
          "type": "function"
        },
        "index": {
          "description": "Branch table instruction",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "switch",
          "normalized": "Value a-\u003eBasicBlock-\u003e[(ConstValue a,BasicBlock)]-\u003eCodeGenFunction b Terminate",
          "package": "llvm-ht",
          "signature": "Value a-\u003eBasicBlock-\u003e[(ConstValue a,BasicBlock)]-\u003eCodeGenFunction r Terminate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:switch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "toLabel",
          "package": "llvm-ht",
          "signature": "BasicBlock -\u003e Value Label",
          "source": "src/LLVM-Core-CodeGen.html#toLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "toLabel",
          "normalized": "BasicBlock-\u003eValue Label",
          "package": "llvm-ht",
          "partial": "Label",
          "signature": "BasicBlock-\u003eValue Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:toLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "toVector",
          "package": "llvm-ht",
          "signature": "va -\u003e Vector n a",
          "source": "src/LLVM-Core-Vector.html#toVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "toVector",
          "normalized": "a-\u003eVector b c",
          "package": "llvm-ht",
          "partial": "Vector",
          "signature": "va-\u003eVector n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:toVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTruncate a value to a shorter bit width.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "trunc",
          "package": "llvm-ht",
          "signature": "Value a -\u003e CodeGenFunction r (Value b)",
          "source": "src/LLVM-Core-Instructions.html#trunc",
          "type": "function"
        },
        "index": {
          "description": "Truncate value to shorter bit width",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "trunc",
          "normalized": "Value a-\u003eCodeGenFunction b(Value c)",
          "package": "llvm-ht",
          "signature": "Value a-\u003eCodeGenFunction r(Value b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:trunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "tupleDesc",
          "package": "llvm-ht",
          "signature": "a -\u003e [TypeDesc]",
          "source": "src/LLVM-Core-Type.html#tupleDesc",
          "type": "method"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "tupleDesc",
          "normalized": "a-\u003e[TypeDesc]",
          "package": "llvm-ht",
          "partial": "Desc",
          "signature": "a-\u003e[TypeDesc]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:tupleDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "typeDesc",
          "package": "llvm-ht",
          "signature": "a -\u003e TypeDesc",
          "source": "src/LLVM-Core-Type.html#typeDesc",
          "type": "method"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "typeDesc",
          "normalized": "a-\u003eTypeDesc",
          "package": "llvm-ht",
          "partial": "Desc",
          "signature": "a-\u003eTypeDesc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:typeDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "typeName",
          "package": "llvm-ht",
          "signature": "a -\u003e String",
          "source": "src/LLVM-Core-Type.html#typeName",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "typeName",
          "normalized": "a-\u003eString",
          "package": "llvm-ht",
          "partial": "Name",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:typeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "typeRef",
          "package": "llvm-ht",
          "signature": "a-\u003e TypeRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "typeRef",
          "normalized": "a-\u003eTypeRef",
          "package": "llvm-ht",
          "partial": "Ref",
          "signature": "a-\u003eTypeRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:typeRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "udiv",
          "package": "llvm-ht",
          "signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
          "source": "src/LLVM-Core-Instructions.html#udiv",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "udiv",
          "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
          "package": "llvm-ht",
          "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:udiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an unsigned integer to a floating point value.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "uitofp",
          "package": "llvm-ht",
          "signature": "Value a -\u003e CodeGenFunction r (Value b)",
          "source": "src/LLVM-Core-Instructions.html#uitofp",
          "type": "function"
        },
        "index": {
          "description": "Convert an unsigned integer to floating point value",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "uitofp",
          "normalized": "Value a-\u003eCodeGenFunction b(Value c)",
          "package": "llvm-ht",
          "signature": "Value a-\u003eCodeGenFunction r(Value b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:uitofp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "undef",
          "package": "llvm-ht",
          "signature": "ConstValue a",
          "source": "src/LLVM-Core-CodeGen.html#undef",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "undef",
          "package": "llvm-ht",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:undef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "undefTuple",
          "package": "llvm-ht",
          "signature": "a",
          "source": "src/LLVM-Core-CodeGen.html#undefTuple",
          "type": "method"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "undefTuple",
          "package": "llvm-ht",
          "partial": "Tuple",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:undefTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInform the code generator that this code can never be reached.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "unreachable",
          "package": "llvm-ht",
          "signature": "CodeGenFunction r Terminate",
          "source": "src/LLVM-Core-Instructions.html#unreachable",
          "type": "function"
        },
        "index": {
          "description": "Inform the code generator that this code can never be reached",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "unreachable",
          "package": "llvm-ht",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:unreachable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwind the call stack until a function call performed with \u003ccode\u003e\u003ca\u003einvoke\u003c/a\u003e\u003c/code\u003e is reached.\n I.e., throw a non-local exception.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "unwind",
          "package": "llvm-ht",
          "signature": "CodeGenFunction r Terminate",
          "source": "src/LLVM-Core-Instructions.html#unwind",
          "type": "function"
        },
        "index": {
          "description": "Unwind the call stack until function call performed with invoke is reached I.e throw non-local exception",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "unwind",
          "package": "llvm-ht",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:unwind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "urem",
          "package": "llvm-ht",
          "signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
          "source": "src/LLVM-Core-Instructions.html#urem",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "urem",
          "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
          "package": "llvm-ht",
          "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:urem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "value",
          "package": "llvm-ht",
          "signature": "ConstValue a -\u003e Value a",
          "source": "src/LLVM-Core-CodeGen.html#value",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "value",
          "normalized": "ConstValue a-\u003eValue a",
          "package": "llvm-ht",
          "signature": "ConstValue a-\u003eValue a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "valueOf",
          "package": "llvm-ht",
          "signature": "a -\u003e Value a",
          "source": "src/LLVM-Core-CodeGen.html#valueOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "valueOf",
          "normalized": "a-\u003eValue a",
          "package": "llvm-ht",
          "partial": "Of",
          "signature": "a-\u003eValue a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:valueOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "valueTupleOf",
          "package": "llvm-ht",
          "signature": "haskellValue -\u003e llvmValue",
          "source": "src/LLVM-Core-CodeGen.html#valueTupleOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "valueTupleOf",
          "normalized": "a-\u003eb",
          "package": "llvm-ht",
          "partial": "Tuple Of",
          "signature": "haskellValue-\u003ellvmValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:valueTupleOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a constant vector.  Replicates or truncates the list to get length \u003cem\u003en\u003c/em\u003e.\n This behaviour is consistent with that of \u003ccode\u003eLLVM.Core.CodeGen.constVector\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "vector",
          "package": "llvm-ht",
          "signature": "[a] -\u003e Vector n a",
          "source": "src/LLVM-Core-Vector.html#vector",
          "type": "function"
        },
        "index": {
          "description": "Make constant vector Replicates or truncates the list to get length This behaviour is consistent with that of LLVM.Core.CodeGen.constVector",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "vector",
          "normalized": "[a]-\u003eVector b a",
          "package": "llvm-ht",
          "signature": "[a]-\u003eVector n a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:vector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "withTuple",
          "package": "llvm-ht",
          "signature": "(a -\u003e b) -\u003e a :+-\u003e b",
          "source": "src/LLVM-Core-Type.html#withTuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "withTuple",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "llvm-ht",
          "partial": "Tuple",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:withTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a module to a file.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "writeBitcodeToFile",
          "package": "llvm-ht",
          "signature": "String -\u003e Module -\u003e IO ()",
          "source": "src/LLVM-Core-Util.html#writeBitcodeToFile",
          "type": "function"
        },
        "index": {
          "description": "Write module to file",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "writeBitcodeToFile",
          "normalized": "String-\u003eModule-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Bitcode To File",
          "signature": "String-\u003eModule-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:writeBitcodeToFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "xor",
          "package": "llvm-ht",
          "signature": "a -\u003e b -\u003e CodeGenFunction r (v c)",
          "source": "src/LLVM-Core-Instructions.html#xor",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "xor",
          "normalized": "a-\u003eb-\u003eCodeGenFunction c(d e)",
          "package": "llvm-ht",
          "signature": "a-\u003eb-\u003eCodeGenFunction r(v c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:xor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Core",
          "name": "zero",
          "package": "llvm-ht",
          "signature": "ConstValue a",
          "source": "src/LLVM-Core-CodeGen.html#zero",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "zero",
          "package": "llvm-ht",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eZero extend a value to a wider width.\n\u003c/p\u003e",
          "module": "LLVM.Core",
          "name": "zext",
          "package": "llvm-ht",
          "signature": "Value a -\u003e CodeGenFunction r (Value b)",
          "source": "src/LLVM-Core-Instructions.html#zext",
          "type": "function"
        },
        "index": {
          "description": "Zero extend value to wider width",
          "hierarchy": "LLVM Core",
          "module": "LLVM.Core",
          "name": "zext",
          "normalized": "Value a-\u003eCodeGenFunction b(Value c)",
          "package": "llvm-ht",
          "signature": "Value a-\u003eCodeGenFunction r(Value b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Core.html#v:zext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn \u003ccode\u003eExecutionEngine\u003c/code\u003e is JIT compiler that is used to generate code for an LLVM module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LLVM.ExecutionEngine",
          "name": "ExecutionEngine",
          "package": "llvm-ht",
          "source": "src/LLVM-ExecutionEngine.html",
          "type": "module"
        },
        "index": {
          "description": "An ExecutionEngine is JIT compiler that is used to generate code for an LLVM module",
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "ExecutionEngine",
          "package": "llvm-ht",
          "partial": "Execution Engine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.ExecutionEngine",
          "name": "EngineAccess",
          "package": "llvm-ht",
          "source": "src/LLVM-ExecutionEngine-Engine.html#EngineAccess",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "EngineAccess",
          "package": "llvm-ht",
          "partial": "Engine Access",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#t:EngineAccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all the information needed to free a function.\n Freeing code might have to be done from a (C) finalizer, so it has to done from C.\n The function c_freeFunctionObject take these pointers as arguments and frees the function.\n\u003c/p\u003e",
          "module": "LLVM.ExecutionEngine",
          "name": "FreePointers",
          "package": "llvm-ht",
          "source": "src/LLVM-ExecutionEngine-Engine.html#FreePointers",
          "type": "type"
        },
        "index": {
          "description": "Get all the information needed to free function Freeing code might have to be done from finalizer so it has to done from The function freeFunctionObject take these pointers as arguments and frees the function",
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "FreePointers",
          "package": "llvm-ht",
          "partial": "Free Pointers",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#t:FreePointers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.ExecutionEngine",
          "name": "Generic",
          "package": "llvm-ht",
          "source": "src/LLVM-ExecutionEngine-Engine.html#Generic",
          "type": "class"
        },
        "index": {
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "Generic",
          "package": "llvm-ht",
          "partial": "Generic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#t:Generic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.ExecutionEngine",
          "name": "GenericTuple",
          "package": "llvm-ht",
          "source": "src/LLVM-ExecutionEngine-Engine.html#GenericTuple",
          "type": "class"
        },
        "index": {
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "GenericTuple",
          "package": "llvm-ht",
          "partial": "Generic Tuple",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#t:GenericTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.ExecutionEngine",
          "name": "TargetData",
          "package": "llvm-ht",
          "source": "src/LLVM-ExecutionEngine-Target.html#TargetData",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "TargetData",
          "package": "llvm-ht",
          "partial": "Target Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#t:TargetData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass of LLVM function types that can be translated to the corresponding\n Haskell type.\n\u003c/p\u003e",
          "module": "LLVM.ExecutionEngine",
          "name": "Translatable",
          "package": "llvm-ht",
          "source": "src/LLVM-ExecutionEngine.html#Translatable",
          "type": "class"
        },
        "index": {
          "description": "Class of LLVM function types that can be translated to the corresponding Haskell type",
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "Translatable",
          "package": "llvm-ht",
          "partial": "Translatable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#t:Translatable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.ExecutionEngine",
          "name": "Unsafe",
          "package": "llvm-ht",
          "source": "src/LLVM-ExecutionEngine.html#Unsafe",
          "type": "class"
        },
        "index": {
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "Unsafe",
          "package": "llvm-ht",
          "partial": "Unsafe",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#t:Unsafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.ExecutionEngine",
          "name": "TargetData",
          "package": "llvm-ht",
          "signature": "TargetData",
          "source": "src/LLVM-ExecutionEngine-Target.html#TargetData",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "TargetData",
          "package": "llvm-ht",
          "partial": "Target Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:TargetData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.ExecutionEngine",
          "name": "aBIAlignmentOfType",
          "package": "llvm-ht",
          "signature": "Type -\u003e Int",
          "source": "src/LLVM-ExecutionEngine-Target.html#TargetData",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "aBIAlignmentOfType",
          "normalized": "Type-\u003eInt",
          "package": "llvm-ht",
          "partial": "BIAlignment Of Type",
          "signature": "Type-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:aBIAlignmentOfType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.ExecutionEngine",
          "name": "aBISizeOfType",
          "package": "llvm-ht",
          "signature": "Type -\u003e Int",
          "source": "src/LLVM-ExecutionEngine-Target.html#TargetData",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "aBISizeOfType",
          "normalized": "Type-\u003eInt",
          "package": "llvm-ht",
          "partial": "BISize Of Type",
          "signature": "Type-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:aBISizeOfType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTell LLVM the address of an external function\nif it cannot resolve a name automatically.\nAlternatively you may declare the function\nwith \u003ccode\u003estaticFunction\u003c/code\u003e instead of \u003ccode\u003eexternFunction\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LLVM.ExecutionEngine",
          "name": "addFunctionValue",
          "package": "llvm-ht",
          "signature": "Function f -\u003e FunPtr f -\u003e EngineAccess ()",
          "source": "src/LLVM-ExecutionEngine-Engine.html#addFunctionValue",
          "type": "function"
        },
        "index": {
          "description": "Tell LLVM the address of an external function if it cannot resolve name automatically Alternatively you may declare the function with staticFunction instead of externFunction",
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "addFunctionValue",
          "normalized": "Function a-\u003eFunPtr a-\u003eEngineAccess()",
          "package": "llvm-ht",
          "partial": "Function Value",
          "signature": "Function f-\u003eFunPtr f-\u003eEngineAccess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:addFunctionValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePass a list of global mappings to LLVM\nthat can be obtained from \u003ccode\u003eLLVM.Core.getGlobalMappings\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LLVM.ExecutionEngine",
          "name": "addGlobalMappings",
          "package": "llvm-ht",
          "signature": "GlobalMappings -\u003e EngineAccess ()",
          "source": "src/LLVM-ExecutionEngine-Engine.html#addGlobalMappings",
          "type": "function"
        },
        "index": {
          "description": "Pass list of global mappings to LLVM that can be obtained from LLVM.Core.getGlobalMappings",
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "addGlobalMappings",
          "normalized": "GlobalMappings-\u003eEngineAccess()",
          "package": "llvm-ht",
          "partial": "Global Mappings",
          "signature": "GlobalMappings-\u003eEngineAccess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:addGlobalMappings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.ExecutionEngine",
          "name": "addModule",
          "package": "llvm-ht",
          "signature": "Module -\u003e EngineAccess ()",
          "source": "src/LLVM-ExecutionEngine-Engine.html#addModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "addModule",
          "normalized": "Module-\u003eEngineAccess()",
          "package": "llvm-ht",
          "partial": "Module",
          "signature": "Module-\u003eEngineAccess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:addModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.ExecutionEngine",
          "name": "addModuleProvider",
          "package": "llvm-ht",
          "signature": "ModuleProvider -\u003e EngineAccess ()",
          "source": "src/LLVM-ExecutionEngine-Engine.html#addModuleProvider",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "addModuleProvider",
          "normalized": "ModuleProvider-\u003eEngineAccess()",
          "package": "llvm-ht",
          "partial": "Module Provider",
          "signature": "ModuleProvider-\u003eEngineAccess()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:addModuleProvider"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.ExecutionEngine",
          "name": "callFrameAlignmentOfType",
          "package": "llvm-ht",
          "signature": "Type -\u003e Int",
          "source": "src/LLVM-ExecutionEngine-Target.html#TargetData",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "callFrameAlignmentOfType",
          "normalized": "Type-\u003eInt",
          "package": "llvm-ht",
          "partial": "Frame Alignment Of Type",
          "signature": "Type-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:callFrameAlignmentOfType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a Haskell function from an LLVM function.\n\u003c/p\u003e\u003cp\u003eNote that the function is compiled for every call (Just-In-Time compilation).\n If you want to compile the function once and call it a lot of times\n then you should better use \u003ccode\u003e\u003ca\u003egetPointerToFunction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LLVM.ExecutionEngine",
          "name": "generateFunction",
          "package": "llvm-ht",
          "signature": "Value (Ptr f) -\u003e EngineAccess f",
          "source": "src/LLVM-ExecutionEngine.html#generateFunction",
          "type": "function"
        },
        "index": {
          "description": "Generate Haskell function from an LLVM function Note that the function is compiled for every call Just-In-Time compilation If you want to compile the function once and call it lot of times then you should better use getPointerToFunction",
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "generateFunction",
          "normalized": "Value(Ptr a)-\u003eEngineAccess a",
          "package": "llvm-ht",
          "partial": "Function",
          "signature": "Value(Ptr f)-\u003eEngineAccess f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:generateFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.ExecutionEngine",
          "name": "getFreePointers",
          "package": "llvm-ht",
          "signature": "Function f -\u003e EngineAccess FreePointers",
          "source": "src/LLVM-ExecutionEngine-Engine.html#getFreePointers",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "getFreePointers",
          "normalized": "Function a-\u003eEngineAccess FreePointers",
          "package": "llvm-ht",
          "partial": "Free Pointers",
          "signature": "Function f-\u003eEngineAccess FreePointers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:getFreePointers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn contrast to \u003ccode\u003egenerateFunction\u003c/code\u003e this compiles a function once.\nThus it is faster for many calls to the same function.\nSee \u003ccode\u003eexamples/Vector.hs\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf the function calls back into Haskell code,\nyou also have to set the function addresses\nusing \u003ccode\u003e\u003ca\u003eaddFunctionValue\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eaddGlobalMappings\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LLVM.ExecutionEngine",
          "name": "getPointerToFunction",
          "package": "llvm-ht",
          "signature": "Function f -\u003e EngineAccess (FunPtr f)",
          "source": "src/LLVM-ExecutionEngine-Engine.html#getPointerToFunction",
          "type": "function"
        },
        "index": {
          "description": "In contrast to generateFunction this compiles function once Thus it is faster for many calls to the same function See examples Vector.hs If the function calls back into Haskell code you also have to set the function addresses using addFunctionValue or addGlobalMappings",
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "getPointerToFunction",
          "normalized": "Function a-\u003eEngineAccess(FunPtr a)",
          "package": "llvm-ht",
          "partial": "Pointer To Function",
          "signature": "Function f-\u003eEngineAccess(FunPtr f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:getPointerToFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.ExecutionEngine",
          "name": "getTargetData",
          "package": "llvm-ht",
          "signature": "IO TargetData",
          "source": "src/LLVM-ExecutionEngine-Target.html#getTargetData",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "getTargetData",
          "package": "llvm-ht",
          "partial": "Target Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:getTargetData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.ExecutionEngine",
          "name": "intPtrType",
          "package": "llvm-ht",
          "signature": "Type",
          "source": "src/LLVM-ExecutionEngine-Target.html#TargetData",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "intPtrType",
          "package": "llvm-ht",
          "partial": "Ptr Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:intPtrType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.ExecutionEngine",
          "name": "littleEndian",
          "package": "llvm-ht",
          "signature": "Bool",
          "source": "src/LLVM-ExecutionEngine-Target.html#TargetData",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "littleEndian",
          "package": "llvm-ht",
          "partial": "Endian",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:littleEndian"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.ExecutionEngine",
          "name": "pointerSize",
          "package": "llvm-ht",
          "signature": "Int",
          "source": "src/LLVM-ExecutionEngine-Target.html#TargetData",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "pointerSize",
          "package": "llvm-ht",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:pointerSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.ExecutionEngine",
          "name": "preferredAlignmentOfType",
          "package": "llvm-ht",
          "signature": "Type -\u003e Int",
          "source": "src/LLVM-ExecutionEngine-Target.html#TargetData",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "preferredAlignmentOfType",
          "normalized": "Type-\u003eInt",
          "package": "llvm-ht",
          "partial": "Alignment Of Type",
          "signature": "Type-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:preferredAlignmentOfType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe LLVM execution engine is encapsulated so it cannot be accessed directly.\n The reason is that (currently) there must only ever be one engine,\n so access to it is wrapped in a monad.\n\u003c/p\u003e",
          "module": "LLVM.ExecutionEngine",
          "name": "runEngineAccess",
          "package": "llvm-ht",
          "signature": "EngineAccess a -\u003e IO a",
          "source": "src/LLVM-ExecutionEngine-Engine.html#runEngineAccess",
          "type": "function"
        },
        "index": {
          "description": "The LLVM execution engine is encapsulated so it cannot be accessed directly The reason is that currently there must only ever be one engine so access to it is wrapped in monad",
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "runEngineAccess",
          "normalized": "EngineAccess a-\u003eIO a",
          "package": "llvm-ht",
          "partial": "Engine Access",
          "signature": "EngineAccess a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:runEngineAccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate a function to Haskell code.  This is a simplified interface to\n the execution engine and module mechanism.\n It is based on \u003ccode\u003e\u003ca\u003egenerateFunction\u003c/a\u003e\u003c/code\u003e, so see there for limitations.\n\u003c/p\u003e",
          "module": "LLVM.ExecutionEngine",
          "name": "simpleFunction",
          "package": "llvm-ht",
          "signature": "CodeGenModule (Function f) -\u003e IO f",
          "source": "src/LLVM-ExecutionEngine.html#simpleFunction",
          "type": "function"
        },
        "index": {
          "description": "Translate function to Haskell code This is simplified interface to the execution engine and module mechanism It is based on generateFunction so see there for limitations",
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "simpleFunction",
          "normalized": "CodeGenModule(Function a)-\u003eIO a",
          "package": "llvm-ht",
          "partial": "Function",
          "signature": "CodeGenModule(Function f)-\u003eIO f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:simpleFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.ExecutionEngine",
          "name": "sizeOfTypeInBits",
          "package": "llvm-ht",
          "signature": "Type -\u003e Int",
          "source": "src/LLVM-ExecutionEngine-Target.html#TargetData",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "sizeOfTypeInBits",
          "normalized": "Type-\u003eInt",
          "package": "llvm-ht",
          "partial": "Of Type In Bits",
          "signature": "Type-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:sizeOfTypeInBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.ExecutionEngine",
          "name": "storeSizeOfType",
          "package": "llvm-ht",
          "signature": "Type -\u003e Int",
          "source": "src/LLVM-ExecutionEngine-Target.html#TargetData",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "storeSizeOfType",
          "normalized": "Type-\u003eInt",
          "package": "llvm-ht",
          "partial": "Size Of Type",
          "signature": "Type-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:storeSizeOfType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.ExecutionEngine",
          "name": "targetDataFromString",
          "package": "llvm-ht",
          "signature": "String -\u003e TargetData",
          "source": "src/LLVM-ExecutionEngine-Target.html#targetDataFromString",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "targetDataFromString",
          "normalized": "String-\u003eTargetData",
          "package": "llvm-ht",
          "partial": "Data From String",
          "signature": "String-\u003eTargetData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:targetDataFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine \u003ccode\u003e\u003ca\u003esimpleFunction\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunsafePurify\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LLVM.ExecutionEngine",
          "name": "unsafeGenerateFunction",
          "package": "llvm-ht",
          "signature": "CodeGenModule (Function t) -\u003e a",
          "source": "src/LLVM-ExecutionEngine.html#unsafeGenerateFunction",
          "type": "function"
        },
        "index": {
          "description": "Combine simpleFunction and unsafePurify",
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "unsafeGenerateFunction",
          "normalized": "CodeGenModule(Function a)-\u003eb",
          "package": "llvm-ht",
          "partial": "Generate Function",
          "signature": "CodeGenModule(Function t)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:unsafeGenerateFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.ExecutionEngine",
          "name": "unsafePurify",
          "package": "llvm-ht",
          "signature": "unsafePurify",
          "source": "src/LLVM-ExecutionEngine.html#unsafePurify",
          "type": "method"
        },
        "index": {
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "unsafePurify",
          "package": "llvm-ht",
          "partial": "Purify",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:unsafePurify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.ExecutionEngine",
          "name": "withIntPtrType",
          "package": "llvm-ht",
          "signature": "WordN n -\u003e a) -\u003e a",
          "source": "src/LLVM-ExecutionEngine-Target.html#withIntPtrType",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM ExecutionEngine",
          "module": "LLVM.ExecutionEngine",
          "name": "withIntPtrType",
          "normalized": "WordN a-\u003eb)-\u003eb",
          "package": "llvm-ht",
          "partial": "Int Ptr Type",
          "signature": "WordN n-\u003ea)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-ExecutionEngine.html#v:withIntPtrType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Analysis",
          "name": "Analysis",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Analysis.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "LLVM FFI Analysis",
          "module": "LLVM.FFI.Analysis",
          "name": "Analysis",
          "package": "llvm-ht",
          "partial": "Analysis",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Analysis.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Analysis",
          "name": "VerifierFailureAction",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Analysis.html#VerifierFailureAction",
          "type": "type"
        },
        "index": {
          "hierarchy": "LLVM FFI Analysis",
          "module": "LLVM.FFI.Analysis",
          "name": "VerifierFailureAction",
          "package": "llvm-ht",
          "partial": "Verifier Failure Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Analysis.html#t:VerifierFailureAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Analysis",
          "name": "verifyFunction",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e VerifierFailureAction -\u003e IO CInt",
          "source": "src/LLVM-FFI-Analysis.html#verifyFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Analysis",
          "module": "LLVM.FFI.Analysis",
          "name": "verifyFunction",
          "normalized": "ValueRef-\u003eVerifierFailureAction-\u003eIO CInt",
          "package": "llvm-ht",
          "partial": "Function",
          "signature": "ValueRef-\u003eVerifierFailureAction-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Analysis.html#v:verifyFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Analysis",
          "name": "verifyModule",
          "package": "llvm-ht",
          "signature": "ModuleRef -\u003e VerifierFailureAction -\u003e Ptr CString -\u003e IO CInt",
          "source": "src/LLVM-FFI-Analysis.html#verifyModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Analysis",
          "module": "LLVM.FFI.Analysis",
          "name": "verifyModule",
          "normalized": "ModuleRef-\u003eVerifierFailureAction-\u003ePtr CString-\u003eIO CInt",
          "package": "llvm-ht",
          "partial": "Module",
          "signature": "ModuleRef-\u003eVerifierFailureAction-\u003ePtr CString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Analysis.html#v:verifyModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Analysis",
          "name": "viewFunctionCFG",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Analysis.html#viewFunctionCFG",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Analysis",
          "module": "LLVM.FFI.Analysis",
          "name": "viewFunctionCFG",
          "normalized": "ValueRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Function CFG",
          "signature": "ValueRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Analysis.html#v:viewFunctionCFG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Analysis",
          "name": "viewFunctionCFGOnly",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Analysis.html#viewFunctionCFGOnly",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Analysis",
          "module": "LLVM.FFI.Analysis",
          "name": "viewFunctionCFGOnly",
          "normalized": "ValueRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Function CFGOnly",
          "signature": "ValueRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Analysis.html#v:viewFunctionCFGOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.BitReader",
          "name": "BitReader",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-BitReader.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "LLVM FFI BitReader",
          "module": "LLVM.FFI.BitReader",
          "name": "BitReader",
          "package": "llvm-ht",
          "partial": "Bit Reader",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-BitReader.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.BitReader",
          "name": "getBitcodeModuleProvider",
          "package": "llvm-ht",
          "signature": "MemoryBufferRef -\u003e Ptr ModuleProviderRef -\u003e Ptr CString -\u003e IO CInt",
          "source": "src/LLVM-FFI-BitReader.html#getBitcodeModuleProvider",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI BitReader",
          "module": "LLVM.FFI.BitReader",
          "name": "getBitcodeModuleProvider",
          "normalized": "MemoryBufferRef-\u003ePtr ModuleProviderRef-\u003ePtr CString-\u003eIO CInt",
          "package": "llvm-ht",
          "partial": "Bitcode Module Provider",
          "signature": "MemoryBufferRef-\u003ePtr ModuleProviderRef-\u003ePtr CString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-BitReader.html#v:getBitcodeModuleProvider"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.BitReader",
          "name": "getBitcodeModuleProviderInContext",
          "package": "llvm-ht",
          "signature": "ContextRef -\u003e MemoryBufferRef -\u003e Ptr ModuleProviderRef -\u003e Ptr CString -\u003e IO CInt",
          "source": "src/LLVM-FFI-BitReader.html#getBitcodeModuleProviderInContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI BitReader",
          "module": "LLVM.FFI.BitReader",
          "name": "getBitcodeModuleProviderInContext",
          "normalized": "ContextRef-\u003eMemoryBufferRef-\u003ePtr ModuleProviderRef-\u003ePtr CString-\u003eIO CInt",
          "package": "llvm-ht",
          "partial": "Bitcode Module Provider In Context",
          "signature": "ContextRef-\u003eMemoryBufferRef-\u003ePtr ModuleProviderRef-\u003ePtr CString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-BitReader.html#v:getBitcodeModuleProviderInContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.BitReader",
          "name": "parseBitcode",
          "package": "llvm-ht",
          "signature": "MemoryBufferRef -\u003e Ptr ModuleRef -\u003e Ptr CString -\u003e IO CInt",
          "source": "src/LLVM-FFI-BitReader.html#parseBitcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI BitReader",
          "module": "LLVM.FFI.BitReader",
          "name": "parseBitcode",
          "normalized": "MemoryBufferRef-\u003ePtr ModuleRef-\u003ePtr CString-\u003eIO CInt",
          "package": "llvm-ht",
          "partial": "Bitcode",
          "signature": "MemoryBufferRef-\u003ePtr ModuleRef-\u003ePtr CString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-BitReader.html#v:parseBitcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.BitReader",
          "name": "parseBitcodeInContext",
          "package": "llvm-ht",
          "signature": "ContextRef -\u003e MemoryBufferRef -\u003e Ptr ModuleRef -\u003e Ptr CString -\u003e IO CInt",
          "source": "src/LLVM-FFI-BitReader.html#parseBitcodeInContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI BitReader",
          "module": "LLVM.FFI.BitReader",
          "name": "parseBitcodeInContext",
          "normalized": "ContextRef-\u003eMemoryBufferRef-\u003ePtr ModuleRef-\u003ePtr CString-\u003eIO CInt",
          "package": "llvm-ht",
          "partial": "Bitcode In Context",
          "signature": "ContextRef-\u003eMemoryBufferRef-\u003ePtr ModuleRef-\u003ePtr CString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-BitReader.html#v:parseBitcodeInContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.BitWriter",
          "name": "BitWriter",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-BitWriter.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "LLVM FFI BitWriter",
          "module": "LLVM.FFI.BitWriter",
          "name": "BitWriter",
          "package": "llvm-ht",
          "partial": "Bit Writer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-BitWriter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.BitWriter",
          "name": "writeBitcodeToFile",
          "package": "llvm-ht",
          "signature": "ModuleRef -\u003e CString -\u003e IO CInt",
          "source": "src/LLVM-FFI-BitWriter.html#writeBitcodeToFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI BitWriter",
          "module": "LLVM.FFI.BitWriter",
          "name": "writeBitcodeToFile",
          "normalized": "ModuleRef-\u003eCString-\u003eIO CInt",
          "package": "llvm-ht",
          "partial": "Bitcode To File",
          "signature": "ModuleRef-\u003eCString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-BitWriter.html#v:writeBitcodeToFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.BitWriter",
          "name": "writeBitcodeToFileHandle",
          "package": "llvm-ht",
          "signature": "ModuleRef -\u003e CInt -\u003e IO CInt",
          "source": "src/LLVM-FFI-BitWriter.html#writeBitcodeToFileHandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI BitWriter",
          "module": "LLVM.FFI.BitWriter",
          "name": "writeBitcodeToFileHandle",
          "normalized": "ModuleRef-\u003eCInt-\u003eIO CInt",
          "package": "llvm-ht",
          "partial": "Bitcode To File Handle",
          "signature": "ModuleRef-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-BitWriter.html#v:writeBitcodeToFileHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides direct access to the LLVM C bindings.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "LLVM.FFI.Core",
          "name": "Core",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Core.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides direct access to the LLVM bindings",
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "Core",
          "package": "llvm-ht",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "Attribute",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Core.html#Attribute",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "Attribute",
          "package": "llvm-ht",
          "partial": "Attribute",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:Attribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "BasicBlock",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Core.html#BasicBlock",
          "type": "type"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "BasicBlock",
          "package": "llvm-ht",
          "partial": "Basic Block",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:BasicBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "BasicBlockRef",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Core.html#BasicBlockRef",
          "type": "type"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "BasicBlockRef",
          "package": "llvm-ht",
          "partial": "Basic Block Ref",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:BasicBlockRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "Builder",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Core.html#Builder",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "Builder",
          "package": "llvm-ht",
          "partial": "Builder",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:Builder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "BuilderRef",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Core.html#BuilderRef",
          "type": "type"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "BuilderRef",
          "package": "llvm-ht",
          "partial": "Builder Ref",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:BuilderRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "CallingConvention",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Core.html#CallingConvention",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "CallingConvention",
          "package": "llvm-ht",
          "partial": "Calling Convention",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:CallingConvention"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "Context",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Core.html#Context",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "Context",
          "package": "llvm-ht",
          "partial": "Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "ContextRef",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Core.html#ContextRef",
          "type": "type"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "ContextRef",
          "package": "llvm-ht",
          "partial": "Context Ref",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:ContextRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn enumeration for the kinds of linkage for global values.\n\u003c/p\u003e",
          "module": "LLVM.FFI.Core",
          "name": "Linkage",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Core.html#Linkage",
          "type": "data"
        },
        "index": {
          "description": "An enumeration for the kinds of linkage for global values",
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "Linkage",
          "package": "llvm-ht",
          "partial": "Linkage",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:Linkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "MemoryBuffer",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Core.html#MemoryBuffer",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "MemoryBuffer",
          "package": "llvm-ht",
          "partial": "Memory Buffer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:MemoryBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "MemoryBufferRef",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Core.html#MemoryBufferRef",
          "type": "type"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "MemoryBufferRef",
          "package": "llvm-ht",
          "partial": "Memory Buffer Ref",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:MemoryBufferRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "Module",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Core.html#Module",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "Module",
          "package": "llvm-ht",
          "partial": "Module",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "ModuleProvider",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Core.html#ModuleProvider",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "ModuleProvider",
          "package": "llvm-ht",
          "partial": "Module Provider",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:ModuleProvider"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "ModuleProviderRef",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Core.html#ModuleProviderRef",
          "type": "type"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "ModuleProviderRef",
          "package": "llvm-ht",
          "partial": "Module Provider Ref",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:ModuleProviderRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "ModuleRef",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Core.html#ModuleRef",
          "type": "type"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "ModuleRef",
          "package": "llvm-ht",
          "partial": "Module Ref",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:ModuleRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "PassManager",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Core.html#PassManager",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "PassManager",
          "package": "llvm-ht",
          "partial": "Pass Manager",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:PassManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "PassManagerRef",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Core.html#PassManagerRef",
          "type": "type"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "PassManagerRef",
          "package": "llvm-ht",
          "partial": "Pass Manager Ref",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:PassManagerRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "Type",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Core.html#Type",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "Type",
          "package": "llvm-ht",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "TypeKind",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Core.html#TypeKind",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "TypeKind",
          "package": "llvm-ht",
          "partial": "Type Kind",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:TypeKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "TypeRef",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Core.html#TypeRef",
          "type": "type"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "TypeRef",
          "package": "llvm-ht",
          "partial": "Type Ref",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:TypeRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "Value",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Core.html#Value",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "Value",
          "package": "llvm-ht",
          "partial": "Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "ValueRef",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Core.html#ValueRef",
          "type": "type"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "ValueRef",
          "package": "llvm-ht",
          "partial": "Value Ref",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:ValueRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn enumeration for the kinds of visibility of global values.\n\u003c/p\u003e",
          "module": "LLVM.FFI.Core",
          "name": "Visibility",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Core.html#Visibility",
          "type": "data"
        },
        "index": {
          "description": "An enumeration for the kinds of visibility of global values",
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "Visibility",
          "package": "llvm-ht",
          "partial": "Visibility",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#t:Visibility"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "ArrayTypeKind",
          "package": "llvm-ht",
          "signature": "ArrayTypeKind",
          "source": "src/LLVM-FFI-Core.html#TypeKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "ArrayTypeKind",
          "package": "llvm-ht",
          "partial": "Array Type Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:ArrayTypeKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "C",
          "package": "llvm-ht",
          "signature": "C",
          "source": "src/LLVM-FFI-Core.html#CallingConvention",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "C",
          "package": "llvm-ht",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "Cold",
          "package": "llvm-ht",
          "signature": "Cold",
          "source": "src/LLVM-FFI-Core.html#CallingConvention",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "Cold",
          "package": "llvm-ht",
          "partial": "Cold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:Cold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe GV is visible\n\u003c/p\u003e",
          "module": "LLVM.FFI.Core",
          "name": "DefaultVisibility",
          "package": "llvm-ht",
          "signature": "DefaultVisibility",
          "source": "src/LLVM-FFI-Core.html#Visibility",
          "type": "function"
        },
        "index": {
          "description": "The GV is visible",
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "DefaultVisibility",
          "package": "llvm-ht",
          "partial": "Default Visibility",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:DefaultVisibility"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "DoubleTypeKind",
          "package": "llvm-ht",
          "signature": "DoubleTypeKind",
          "source": "src/LLVM-FFI-Core.html#TypeKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "DoubleTypeKind",
          "package": "llvm-ht",
          "partial": "Double Type Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:DoubleTypeKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "FP128TypeKind",
          "package": "llvm-ht",
          "signature": "FP128TypeKind",
          "source": "src/LLVM-FFI-Core.html#TypeKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "FP128TypeKind",
          "package": "llvm-ht",
          "partial": "FP Type Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:FP128TypeKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "Fast",
          "package": "llvm-ht",
          "signature": "Fast",
          "source": "src/LLVM-FFI-Core.html#CallingConvention",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "Fast",
          "package": "llvm-ht",
          "partial": "Fast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:Fast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "FloatTypeKind",
          "package": "llvm-ht",
          "signature": "FloatTypeKind",
          "source": "src/LLVM-FFI-Core.html#TypeKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "FloatTypeKind",
          "package": "llvm-ht",
          "partial": "Float Type Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:FloatTypeKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "FunctionTypeKind",
          "package": "llvm-ht",
          "signature": "FunctionTypeKind",
          "source": "src/LLVM-FFI-Core.html#TypeKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "FunctionTypeKind",
          "package": "llvm-ht",
          "partial": "Function Type Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:FunctionTypeKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe GV is hidden\n\u003c/p\u003e",
          "module": "LLVM.FFI.Core",
          "name": "HiddenVisibility",
          "package": "llvm-ht",
          "signature": "HiddenVisibility",
          "source": "src/LLVM-FFI-Core.html#Visibility",
          "type": "function"
        },
        "index": {
          "description": "The GV is hidden",
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "HiddenVisibility",
          "package": "llvm-ht",
          "partial": "Hidden Visibility",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:HiddenVisibility"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "IntegerTypeKind",
          "package": "llvm-ht",
          "signature": "IntegerTypeKind",
          "source": "src/LLVM-FFI-Core.html#TypeKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "IntegerTypeKind",
          "package": "llvm-ht",
          "partial": "Integer Type Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:IntegerTypeKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "LabelTypeKind",
          "package": "llvm-ht",
          "signature": "LabelTypeKind",
          "source": "src/LLVM-FFI-Core.html#TypeKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "LabelTypeKind",
          "package": "llvm-ht",
          "partial": "Label Type Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:LabelTypeKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "OpaqueTypeKind",
          "package": "llvm-ht",
          "signature": "OpaqueTypeKind",
          "source": "src/LLVM-FFI-Core.html#TypeKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "OpaqueTypeKind",
          "package": "llvm-ht",
          "partial": "Opaque Type Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:OpaqueTypeKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "PPC_FP128TypeKind",
          "package": "llvm-ht",
          "signature": "PPC_FP128TypeKind",
          "source": "src/LLVM-FFI-Core.html#TypeKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "PPC_FP128TypeKind",
          "package": "llvm-ht",
          "partial": "PPC FP Type Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:PPC_FP128TypeKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "PointerTypeKind",
          "package": "llvm-ht",
          "signature": "PointerTypeKind",
          "source": "src/LLVM-FFI-Core.html#TypeKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "PointerTypeKind",
          "package": "llvm-ht",
          "partial": "Pointer Type Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:PointerTypeKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe GV is protected\n\u003c/p\u003e",
          "module": "LLVM.FFI.Core",
          "name": "ProtectedVisibility",
          "package": "llvm-ht",
          "signature": "ProtectedVisibility",
          "source": "src/LLVM-FFI-Core.html#Visibility",
          "type": "function"
        },
        "index": {
          "description": "The GV is protected",
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "ProtectedVisibility",
          "package": "llvm-ht",
          "partial": "Protected Visibility",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:ProtectedVisibility"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "StructTypeKind",
          "package": "llvm-ht",
          "signature": "StructTypeKind",
          "source": "src/LLVM-FFI-Core.html#TypeKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "StructTypeKind",
          "package": "llvm-ht",
          "partial": "Struct Type Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:StructTypeKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "VectorTypeKind",
          "package": "llvm-ht",
          "signature": "VectorTypeKind",
          "source": "src/LLVM-FFI-Core.html#TypeKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "VectorTypeKind",
          "package": "llvm-ht",
          "partial": "Vector Type Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:VectorTypeKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "VoidTypeKind",
          "package": "llvm-ht",
          "signature": "VoidTypeKind",
          "source": "src/LLVM-FFI-Core.html#TypeKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "VoidTypeKind",
          "package": "llvm-ht",
          "partial": "Void Type Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:VoidTypeKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "X86FastCall",
          "package": "llvm-ht",
          "signature": "X86FastCall",
          "source": "src/LLVM-FFI-Core.html#CallingConvention",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "X86FastCall",
          "package": "llvm-ht",
          "partial": "Fast Call",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:X86FastCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "X86StdCall",
          "package": "llvm-ht",
          "signature": "X86StdCall",
          "source": "src/LLVM-FFI-Core.html#CallingConvention",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "X86StdCall",
          "package": "llvm-ht",
          "partial": "Std Call",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:X86StdCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "X86_FP80TypeKind",
          "package": "llvm-ht",
          "signature": "X86_FP80TypeKind",
          "source": "src/LLVM-FFI-Core.html#TypeKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "X86_FP80TypeKind",
          "package": "llvm-ht",
          "partial": "FP Type Kind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:X86_FP80TypeKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "addAttribute",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e CAttribute -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#addAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "addAttribute",
          "normalized": "ValueRef-\u003eCAttribute-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Attribute",
          "signature": "ValueRef-\u003eCAttribute-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:addAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "addCase",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef -\u003e BasicBlockRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#addCase",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "addCase",
          "normalized": "ValueRef-\u003eValueRef-\u003eBasicBlockRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Case",
          "signature": "ValueRef-\u003eValueRef-\u003eBasicBlockRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:addCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "addFunction",
          "package": "llvm-ht",
          "signature": "ModuleRef-\u003e CString-\u003e TypeRef-\u003e IO ValueRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "addFunction",
          "normalized": "ModuleRef-\u003eCString-\u003eTypeRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Function",
          "signature": "ModuleRef-\u003eCString-\u003eTypeRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:addFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "addFunctionAttr",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e CAttribute -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#addFunctionAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "addFunctionAttr",
          "normalized": "ValueRef-\u003eCAttribute-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Function Attr",
          "signature": "ValueRef-\u003eCAttribute-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:addFunctionAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "addGlobal",
          "package": "llvm-ht",
          "signature": "ModuleRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#addGlobal",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "addGlobal",
          "normalized": "ModuleRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Global",
          "signature": "ModuleRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:addGlobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "addIncoming",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e Ptr ValueRef -\u003e Ptr ValueRef -\u003e CUInt -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#addIncoming",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "addIncoming",
          "normalized": "ValueRef-\u003ePtr ValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Incoming",
          "signature": "ValueRef-\u003ePtr ValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:addIncoming"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "addInstrAttribute",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e CUInt -\u003e CAttribute -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#addInstrAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "addInstrAttribute",
          "normalized": "ValueRef-\u003eCUInt-\u003eCAttribute-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Instr Attribute",
          "signature": "ValueRef-\u003eCUInt-\u003eCAttribute-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:addInstrAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "addTypeName",
          "package": "llvm-ht",
          "signature": "ModuleRef -\u003e CString -\u003e TypeRef -\u003e IO CInt",
          "source": "src/LLVM-FFI-Core.html#addTypeName",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "addTypeName",
          "normalized": "ModuleRef-\u003eCString-\u003eTypeRef-\u003eIO CInt",
          "package": "llvm-ht",
          "partial": "Type Name",
          "signature": "ModuleRef-\u003eCString-\u003eTypeRef-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:addTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "alignOf",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#alignOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "alignOf",
          "normalized": "TypeRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Of",
          "signature": "TypeRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:alignOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "appendBasicBlock",
          "package": "llvm-ht",
          "signature": "ValueRef-\u003e CString-\u003e IO BasicBlockRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "appendBasicBlock",
          "normalized": "ValueRef-\u003eCString-\u003eIO BasicBlockRef",
          "package": "llvm-ht",
          "partial": "Basic Block",
          "signature": "ValueRef-\u003eCString-\u003eIO BasicBlockRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:appendBasicBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "appendBasicBlockInContext",
          "package": "llvm-ht",
          "signature": "ContextRef -\u003e ValueRef -\u003e CString -\u003e IO BasicBlockRef",
          "source": "src/LLVM-FFI-Core.html#appendBasicBlockInContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "appendBasicBlockInContext",
          "normalized": "ContextRef-\u003eValueRef-\u003eCString-\u003eIO BasicBlockRef",
          "package": "llvm-ht",
          "partial": "Basic Block In Context",
          "signature": "ContextRef-\u003eValueRef-\u003eCString-\u003eIO BasicBlockRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:appendBasicBlockInContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "arrayType",
          "package": "llvm-ht",
          "signature": "TypeRef-\u003e CUInt-\u003e TypeRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "arrayType",
          "normalized": "TypeRef-\u003eCUInt-\u003eTypeRef",
          "package": "llvm-ht",
          "partial": "Type",
          "signature": "TypeRef-\u003eCUInt-\u003eTypeRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:arrayType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "basicBlockAsValue",
          "package": "llvm-ht",
          "signature": "BasicBlockRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#basicBlockAsValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "basicBlockAsValue",
          "normalized": "BasicBlockRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "Block As Value",
          "signature": "BasicBlockRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:basicBlockAsValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildAShr",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildAShr",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildAShr",
          "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "AShr",
          "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildAShr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildAdd",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildAdd",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildAdd",
          "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Add",
          "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildAggregateRet",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e Ptr ValueRef -\u003e CUInt -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildAggregateRet",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildAggregateRet",
          "normalized": "BuilderRef-\u003ePtr ValueRef-\u003eCUInt-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Aggregate Ret",
          "signature": "BuilderRef-\u003ePtr ValueRef-\u003eCUInt-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildAggregateRet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildAlloca",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildAlloca",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildAlloca",
          "normalized": "BuilderRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Alloca",
          "signature": "BuilderRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildAlloca"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildAnd",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildAnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildAnd",
          "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "And",
          "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildArrayAlloca",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e TypeRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildArrayAlloca",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildArrayAlloca",
          "normalized": "BuilderRef-\u003eTypeRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Array Alloca",
          "signature": "BuilderRef-\u003eTypeRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildArrayAlloca"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildArrayMalloc",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e TypeRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildArrayMalloc",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildArrayMalloc",
          "normalized": "BuilderRef-\u003eTypeRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Array Malloc",
          "signature": "BuilderRef-\u003eTypeRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildArrayMalloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildBitCast",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildBitCast",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildBitCast",
          "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Bit Cast",
          "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildBitCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildBr",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e BasicBlockRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildBr",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildBr",
          "normalized": "BuilderRef-\u003eBasicBlockRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Br",
          "signature": "BuilderRef-\u003eBasicBlockRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildBr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildCall",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e Ptr ValueRef -\u003e CUInt -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildCall",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildCall",
          "normalized": "BuilderRef-\u003eValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Call",
          "signature": "BuilderRef-\u003eValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildCondBr",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e BasicBlockRef -\u003e BasicBlockRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildCondBr",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildCondBr",
          "normalized": "BuilderRef-\u003eValueRef-\u003eBasicBlockRef-\u003eBasicBlockRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Cond Br",
          "signature": "BuilderRef-\u003eValueRef-\u003eBasicBlockRef-\u003eBasicBlockRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildCondBr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildExactSDiv",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildExactSDiv",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildExactSDiv",
          "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Exact SDiv",
          "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildExactSDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildExtractElement",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildExtractElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildExtractElement",
          "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Extract Element",
          "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildExtractElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildExtractValue",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e CUInt -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildExtractValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildExtractValue",
          "normalized": "BuilderRef-\u003eValueRef-\u003eCUInt-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Extract Value",
          "signature": "BuilderRef-\u003eValueRef-\u003eCUInt-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildExtractValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildFAdd",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildFAdd",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildFAdd",
          "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "FAdd",
          "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildFAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildFCmp",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e CInt -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildFCmp",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildFCmp",
          "normalized": "BuilderRef-\u003eCInt-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "FCmp",
          "signature": "BuilderRef-\u003eCInt-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildFCmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildFDiv",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildFDiv",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildFDiv",
          "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "FDiv",
          "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildFDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildFMul",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildFMul",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildFMul",
          "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "FMul",
          "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildFMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildFPCast",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildFPCast",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildFPCast",
          "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "FPCast",
          "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildFPCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildFPExt",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildFPExt",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildFPExt",
          "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "FPExt",
          "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildFPExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildFPToSI",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildFPToSI",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildFPToSI",
          "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "FPTo SI",
          "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildFPToSI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildFPToUI",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildFPToUI",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildFPToUI",
          "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "FPTo UI",
          "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildFPToUI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildFPTrunc",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildFPTrunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildFPTrunc",
          "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "FPTrunc",
          "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildFPTrunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildFRem",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildFRem",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildFRem",
          "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "FRem",
          "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildFRem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildFSub",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildFSub",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildFSub",
          "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "FSub",
          "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildFSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildFree",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildFree",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildFree",
          "normalized": "BuilderRef-\u003eValueRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Free",
          "signature": "BuilderRef-\u003eValueRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildFree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildGEP",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e Ptr ValueRef -\u003e CUInt -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildGEP",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildGEP",
          "normalized": "BuilderRef-\u003eValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "GEP",
          "signature": "BuilderRef-\u003eValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildGEP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildGlobalString",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e CString -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildGlobalString",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildGlobalString",
          "normalized": "BuilderRef-\u003eCString-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Global String",
          "signature": "BuilderRef-\u003eCString-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildGlobalString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildGlobalStringPtr",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e CString -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildGlobalStringPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildGlobalStringPtr",
          "normalized": "BuilderRef-\u003eCString-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Global String Ptr",
          "signature": "BuilderRef-\u003eCString-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildGlobalStringPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildICmp",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e CInt -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildICmp",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildICmp",
          "normalized": "BuilderRef-\u003eCInt-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "ICmp",
          "signature": "BuilderRef-\u003eCInt-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildICmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildInBoundsGEP",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e Ptr ValueRef -\u003e CUInt -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildInBoundsGEP",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildInBoundsGEP",
          "normalized": "BuilderRef-\u003eValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "In Bounds GEP",
          "signature": "BuilderRef-\u003eValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildInBoundsGEP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildInsertElement",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildInsertElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildInsertElement",
          "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Insert Element",
          "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildInsertElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildInsertValue",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CUInt -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildInsertValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildInsertValue",
          "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCUInt-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Insert Value",
          "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCUInt-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildInsertValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildIntCast",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildIntCast",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildIntCast",
          "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Int Cast",
          "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildIntCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildIntToPtr",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildIntToPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildIntToPtr",
          "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Int To Ptr",
          "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildIntToPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildInvoke",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e Ptr ValueRef -\u003e CUInt -\u003e BasicBlockRef -\u003e BasicBlockRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildInvoke",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildInvoke",
          "normalized": "BuilderRef-\u003eValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eBasicBlockRef-\u003eBasicBlockRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Invoke",
          "signature": "BuilderRef-\u003eValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eBasicBlockRef-\u003eBasicBlockRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildInvoke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildIsNotNull",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildIsNotNull",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildIsNotNull",
          "normalized": "BuilderRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Is Not Null",
          "signature": "BuilderRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildIsNotNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildIsNull",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildIsNull",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildIsNull",
          "normalized": "BuilderRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Is Null",
          "signature": "BuilderRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildIsNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildLShr",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildLShr",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildLShr",
          "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "LShr",
          "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildLShr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildLoad",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildLoad",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildLoad",
          "normalized": "BuilderRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Load",
          "signature": "BuilderRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildLoad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildMalloc",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildMalloc",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildMalloc",
          "normalized": "BuilderRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Malloc",
          "signature": "BuilderRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildMalloc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildMul",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildMul",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildMul",
          "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Mul",
          "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildNSWAdd",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildNSWAdd",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildNSWAdd",
          "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "NSWAdd",
          "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildNSWAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildNeg",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildNeg",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildNeg",
          "normalized": "BuilderRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Neg",
          "signature": "BuilderRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildNeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildNot",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildNot",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildNot",
          "normalized": "BuilderRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Not",
          "signature": "BuilderRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildOr",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildOr",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildOr",
          "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Or",
          "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildPhi",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildPhi",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildPhi",
          "normalized": "BuilderRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Phi",
          "signature": "BuilderRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildPhi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildPointerCast",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildPointerCast",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildPointerCast",
          "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Pointer Cast",
          "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildPointerCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildPtrDiff",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildPtrDiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildPtrDiff",
          "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Ptr Diff",
          "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildPtrDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildPtrToInt",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildPtrToInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildPtrToInt",
          "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Ptr To Int",
          "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildPtrToInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildRet",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildRet",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildRet",
          "normalized": "BuilderRef-\u003eValueRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Ret",
          "signature": "BuilderRef-\u003eValueRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildRet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildRetVoid",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildRetVoid",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildRetVoid",
          "normalized": "BuilderRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Ret Void",
          "signature": "BuilderRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildRetVoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildSDiv",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildSDiv",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildSDiv",
          "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "SDiv",
          "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildSDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildSExt",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildSExt",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildSExt",
          "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "SExt",
          "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildSExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildSExtOrBitCast",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildSExtOrBitCast",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildSExtOrBitCast",
          "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "SExt Or Bit Cast",
          "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildSExtOrBitCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildSIToFP",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildSIToFP",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildSIToFP",
          "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "SITo FP",
          "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildSIToFP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildSRem",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildSRem",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildSRem",
          "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "SRem",
          "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildSRem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildSelect",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildSelect",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildSelect",
          "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Select",
          "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildShl",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildShl",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildShl",
          "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Shl",
          "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildShl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildShuffleVector",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildShuffleVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildShuffleVector",
          "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Shuffle Vector",
          "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildShuffleVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildStore",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildStore",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildStore",
          "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Store",
          "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildStructGEP",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e CUInt -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildStructGEP",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildStructGEP",
          "normalized": "BuilderRef-\u003eValueRef-\u003eCUInt-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Struct GEP",
          "signature": "BuilderRef-\u003eValueRef-\u003eCUInt-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildStructGEP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildSub",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildSub",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildSub",
          "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Sub",
          "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildSwitch",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e BasicBlockRef -\u003e CUInt -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildSwitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildSwitch",
          "normalized": "BuilderRef-\u003eValueRef-\u003eBasicBlockRef-\u003eCUInt-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Switch",
          "signature": "BuilderRef-\u003eValueRef-\u003eBasicBlockRef-\u003eCUInt-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildTrunc",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildTrunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildTrunc",
          "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Trunc",
          "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildTrunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildTruncOrBitCast",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildTruncOrBitCast",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildTruncOrBitCast",
          "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Trunc Or Bit Cast",
          "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildTruncOrBitCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildUDiv",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildUDiv",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildUDiv",
          "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "UDiv",
          "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildUDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildUIToFP",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildUIToFP",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildUIToFP",
          "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "UITo FP",
          "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildUIToFP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildURem",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildURem",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildURem",
          "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "URem",
          "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildURem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildUnreachable",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildUnreachable",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildUnreachable",
          "normalized": "BuilderRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Unreachable",
          "signature": "BuilderRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildUnreachable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildUnwind",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildUnwind",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildUnwind",
          "normalized": "BuilderRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Unwind",
          "signature": "BuilderRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildUnwind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildVAArg",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildVAArg",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildVAArg",
          "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "VAArg",
          "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildVAArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildXor",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e ValueRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildXor",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildXor",
          "normalized": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Xor",
          "signature": "BuilderRef-\u003eValueRef-\u003eValueRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildXor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildZExt",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildZExt",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildZExt",
          "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "ZExt",
          "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildZExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "buildZExtOrBitCast",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e TypeRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#buildZExtOrBitCast",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "buildZExtOrBitCast",
          "normalized": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "ZExt Or Bit Cast",
          "signature": "BuilderRef-\u003eValueRef-\u003eTypeRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:buildZExtOrBitCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constAShr",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constAShr",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constAShr",
          "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "AShr",
          "signature": "ValueRef-\u003eValueRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constAShr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constAdd",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constAdd",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constAdd",
          "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "Add",
          "signature": "ValueRef-\u003eValueRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constAllOnes",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constAllOnes",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constAllOnes",
          "normalized": "TypeRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "All Ones",
          "signature": "TypeRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constAllOnes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constAnd",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constAnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constAnd",
          "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "And",
          "signature": "ValueRef-\u003eValueRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constArray",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e Ptr ValueRef -\u003e CUInt -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constArray",
          "normalized": "TypeRef-\u003ePtr ValueRef-\u003eCUInt-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "Array",
          "signature": "TypeRef-\u003ePtr ValueRef-\u003eCUInt-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constBitCast",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e TypeRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constBitCast",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constBitCast",
          "normalized": "ValueRef-\u003eTypeRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "Bit Cast",
          "signature": "ValueRef-\u003eTypeRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constBitCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constExactSDiv",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#constExactSDiv",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constExactSDiv",
          "normalized": "ValueRef-\u003eValueRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Exact SDiv",
          "signature": "ValueRef-\u003eValueRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constExactSDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constExtractElement",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constExtractElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constExtractElement",
          "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "Extract Element",
          "signature": "ValueRef-\u003eValueRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constExtractElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constExtractValue",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e Ptr ValueRef -\u003e CUInt -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constExtractValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constExtractValue",
          "normalized": "ValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "Extract Value",
          "signature": "ValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constExtractValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constFAdd",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constFAdd",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constFAdd",
          "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "FAdd",
          "signature": "ValueRef-\u003eValueRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constFAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constFCmp",
          "package": "llvm-ht",
          "signature": "CInt -\u003e ValueRef -\u003e ValueRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constFCmp",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constFCmp",
          "normalized": "CInt-\u003eValueRef-\u003eValueRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "FCmp",
          "signature": "CInt-\u003eValueRef-\u003eValueRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constFCmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constFDiv",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constFDiv",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constFDiv",
          "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "FDiv",
          "signature": "ValueRef-\u003eValueRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constFDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constFMul",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constFMul",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constFMul",
          "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "FMul",
          "signature": "ValueRef-\u003eValueRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constFMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constFNeg",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constFNeg",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constFNeg",
          "normalized": "ValueRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "FNeg",
          "signature": "ValueRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constFNeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constFPCast",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e TypeRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constFPCast",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constFPCast",
          "normalized": "ValueRef-\u003eTypeRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "FPCast",
          "signature": "ValueRef-\u003eTypeRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constFPCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constFPExt",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e TypeRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constFPExt",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constFPExt",
          "normalized": "ValueRef-\u003eTypeRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "FPExt",
          "signature": "ValueRef-\u003eTypeRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constFPExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constFPToSI",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e TypeRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constFPToSI",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constFPToSI",
          "normalized": "ValueRef-\u003eTypeRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "FPTo SI",
          "signature": "ValueRef-\u003eTypeRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constFPToSI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constFPToUI",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e TypeRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constFPToUI",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constFPToUI",
          "normalized": "ValueRef-\u003eTypeRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "FPTo UI",
          "signature": "ValueRef-\u003eTypeRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constFPToUI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constFPTrunc",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e TypeRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constFPTrunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constFPTrunc",
          "normalized": "ValueRef-\u003eTypeRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "FPTrunc",
          "signature": "ValueRef-\u003eTypeRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constFPTrunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constFRem",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constFRem",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constFRem",
          "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "FRem",
          "signature": "ValueRef-\u003eValueRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constFRem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constFSub",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constFSub",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constFSub",
          "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "FSub",
          "signature": "ValueRef-\u003eValueRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constFSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constGEP",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e Ptr ValueRef -\u003e CUInt -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constGEP",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constGEP",
          "normalized": "ValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "GEP",
          "signature": "ValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constGEP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constICmp",
          "package": "llvm-ht",
          "signature": "CInt -\u003e ValueRef -\u003e ValueRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constICmp",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constICmp",
          "normalized": "CInt-\u003eValueRef-\u003eValueRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "ICmp",
          "signature": "CInt-\u003eValueRef-\u003eValueRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constICmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constInBoundsGEP",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e Ptr ValueRef -\u003e CUInt -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#constInBoundsGEP",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constInBoundsGEP",
          "normalized": "ValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "In Bounds GEP",
          "signature": "ValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constInBoundsGEP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constInsertElement",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef -\u003e ValueRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constInsertElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constInsertElement",
          "normalized": "ValueRef-\u003eValueRef-\u003eValueRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "Insert Element",
          "signature": "ValueRef-\u003eValueRef-\u003eValueRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constInsertElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constInsertValue",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef -\u003e Ptr ValueRef -\u003e CUInt -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constInsertValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constInsertValue",
          "normalized": "ValueRef-\u003eValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "Insert Value",
          "signature": "ValueRef-\u003eValueRef-\u003ePtr ValueRef-\u003eCUInt-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constInsertValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constInt",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e CULLong -\u003e CInt -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constInt",
          "normalized": "TypeRef-\u003eCULLong-\u003eCInt-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "Int",
          "signature": "TypeRef-\u003eCULLong-\u003eCInt-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constIntCast",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e TypeRef -\u003e CUInt -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#constIntCast",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constIntCast",
          "normalized": "ValueRef-\u003eTypeRef-\u003eCUInt-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Int Cast",
          "signature": "ValueRef-\u003eTypeRef-\u003eCUInt-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constIntCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constIntOfString",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e CString -\u003e CUInt -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#constIntOfString",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constIntOfString",
          "normalized": "TypeRef-\u003eCString-\u003eCUInt-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Int Of String",
          "signature": "TypeRef-\u003eCString-\u003eCUInt-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constIntOfString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constIntOfStringAndSize",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e CString -\u003e CUInt -\u003e CUInt -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#constIntOfStringAndSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constIntOfStringAndSize",
          "normalized": "TypeRef-\u003eCString-\u003eCUInt-\u003eCUInt-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Int Of String And Size",
          "signature": "TypeRef-\u003eCString-\u003eCUInt-\u003eCUInt-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constIntOfStringAndSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constIntToPtr",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e TypeRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constIntToPtr",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constIntToPtr",
          "normalized": "ValueRef-\u003eTypeRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "Int To Ptr",
          "signature": "ValueRef-\u003eTypeRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constIntToPtr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constLShr",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constLShr",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constLShr",
          "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "LShr",
          "signature": "ValueRef-\u003eValueRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constLShr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constMul",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constMul",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constMul",
          "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "Mul",
          "signature": "ValueRef-\u003eValueRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constNSWAdd",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#constNSWAdd",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constNSWAdd",
          "normalized": "ValueRef-\u003eValueRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "NSWAdd",
          "signature": "ValueRef-\u003eValueRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constNSWAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constNeg",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constNeg",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constNeg",
          "normalized": "ValueRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "Neg",
          "signature": "ValueRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constNeg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constNot",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constNot",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constNot",
          "normalized": "ValueRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "Not",
          "signature": "ValueRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constNull",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constNull",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constNull",
          "normalized": "TypeRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "Null",
          "signature": "TypeRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constOr",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constOr",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constOr",
          "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "Or",
          "signature": "ValueRef-\u003eValueRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constPointerCast",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e TypeRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#constPointerCast",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constPointerCast",
          "normalized": "ValueRef-\u003eTypeRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Pointer Cast",
          "signature": "ValueRef-\u003eTypeRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constPointerCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constPointerNull",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#constPointerNull",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constPointerNull",
          "normalized": "TypeRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Pointer Null",
          "signature": "TypeRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constPointerNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constPtrToInt",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e TypeRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constPtrToInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constPtrToInt",
          "normalized": "ValueRef-\u003eTypeRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "Ptr To Int",
          "signature": "ValueRef-\u003eTypeRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constPtrToInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constReal",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e CDouble -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constReal",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constReal",
          "normalized": "TypeRef-\u003eCDouble-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "Real",
          "signature": "TypeRef-\u003eCDouble-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constReal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constRealOfString",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#constRealOfString",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constRealOfString",
          "normalized": "TypeRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Real Of String",
          "signature": "TypeRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constRealOfString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constRealOfStringAndSize",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e CString -\u003e CUInt -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#constRealOfStringAndSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constRealOfStringAndSize",
          "normalized": "TypeRef-\u003eCString-\u003eCUInt-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Real Of String And Size",
          "signature": "TypeRef-\u003eCString-\u003eCUInt-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constRealOfStringAndSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constSDiv",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constSDiv",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constSDiv",
          "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "SDiv",
          "signature": "ValueRef-\u003eValueRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constSDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constSExt",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e TypeRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constSExt",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constSExt",
          "normalized": "ValueRef-\u003eTypeRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "SExt",
          "signature": "ValueRef-\u003eTypeRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constSExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constSExtOrBitCast",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e TypeRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#constSExtOrBitCast",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constSExtOrBitCast",
          "normalized": "ValueRef-\u003eTypeRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "SExt Or Bit Cast",
          "signature": "ValueRef-\u003eTypeRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constSExtOrBitCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constSIToFP",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e TypeRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constSIToFP",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constSIToFP",
          "normalized": "ValueRef-\u003eTypeRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "SITo FP",
          "signature": "ValueRef-\u003eTypeRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constSIToFP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constSRem",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constSRem",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constSRem",
          "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "SRem",
          "signature": "ValueRef-\u003eValueRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constSRem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constSelect",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef -\u003e ValueRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constSelect",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constSelect",
          "normalized": "ValueRef-\u003eValueRef-\u003eValueRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "Select",
          "signature": "ValueRef-\u003eValueRef-\u003eValueRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constShl",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constShl",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constShl",
          "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "Shl",
          "signature": "ValueRef-\u003eValueRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constShl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constShuffleVector",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef -\u003e ValueRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constShuffleVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constShuffleVector",
          "normalized": "ValueRef-\u003eValueRef-\u003eValueRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "Shuffle Vector",
          "signature": "ValueRef-\u003eValueRef-\u003eValueRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constShuffleVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constString",
          "package": "llvm-ht",
          "signature": "CString -\u003e CUInt -\u003e CInt -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constString",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constString",
          "normalized": "CString-\u003eCUInt-\u003eCInt-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "String",
          "signature": "CString-\u003eCUInt-\u003eCInt-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constStringInContext",
          "package": "llvm-ht",
          "signature": "ContextRef -\u003e CString -\u003e CUInt -\u003e CInt -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#constStringInContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constStringInContext",
          "normalized": "ContextRef-\u003eCString-\u003eCUInt-\u003eCInt-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "String In Context",
          "signature": "ContextRef-\u003eCString-\u003eCUInt-\u003eCInt-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constStringInContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constStruct",
          "package": "llvm-ht",
          "signature": "Ptr ValueRef -\u003e CUInt -\u003e CInt -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constStruct",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constStruct",
          "normalized": "Ptr ValueRef-\u003eCUInt-\u003eCInt-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "Struct",
          "signature": "Ptr ValueRef-\u003eCUInt-\u003eCInt-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constStruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constStructInContext",
          "package": "llvm-ht",
          "signature": "ContextRef -\u003e Ptr ValueRef -\u003e CUInt -\u003e CInt -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#constStructInContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constStructInContext",
          "normalized": "ContextRef-\u003ePtr ValueRef-\u003eCUInt-\u003eCInt-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Struct In Context",
          "signature": "ContextRef-\u003ePtr ValueRef-\u003eCUInt-\u003eCInt-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constStructInContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constSub",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constSub",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constSub",
          "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "Sub",
          "signature": "ValueRef-\u003eValueRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constTrunc",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e TypeRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constTrunc",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constTrunc",
          "normalized": "ValueRef-\u003eTypeRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "Trunc",
          "signature": "ValueRef-\u003eTypeRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constTrunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constTruncOrBitCast",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e TypeRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#constTruncOrBitCast",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constTruncOrBitCast",
          "normalized": "ValueRef-\u003eTypeRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Trunc Or Bit Cast",
          "signature": "ValueRef-\u003eTypeRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constTruncOrBitCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constUDiv",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constUDiv",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constUDiv",
          "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "UDiv",
          "signature": "ValueRef-\u003eValueRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constUDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constUIToFP",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e TypeRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constUIToFP",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constUIToFP",
          "normalized": "ValueRef-\u003eTypeRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "UITo FP",
          "signature": "ValueRef-\u003eTypeRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constUIToFP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constURem",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constURem",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constURem",
          "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "URem",
          "signature": "ValueRef-\u003eValueRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constURem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constVector",
          "package": "llvm-ht",
          "signature": "Ptr ValueRef -\u003e CUInt -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constVector",
          "normalized": "Ptr ValueRef-\u003eCUInt-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "Vector",
          "signature": "Ptr ValueRef-\u003eCUInt-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constXor",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constXor",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constXor",
          "normalized": "ValueRef-\u003eValueRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "Xor",
          "signature": "ValueRef-\u003eValueRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constXor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constZExt",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e TypeRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#constZExt",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constZExt",
          "normalized": "ValueRef-\u003eTypeRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "ZExt",
          "signature": "ValueRef-\u003eTypeRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constZExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "constZExtOrBitCast",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e TypeRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#constZExtOrBitCast",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "constZExtOrBitCast",
          "normalized": "ValueRef-\u003eTypeRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "ZExt Or Bit Cast",
          "signature": "ValueRef-\u003eTypeRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:constZExtOrBitCast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "contextDispose",
          "package": "llvm-ht",
          "signature": "ContextRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#contextDispose",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "contextDispose",
          "normalized": "ContextRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Dispose",
          "signature": "ContextRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:contextDispose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "countBasicBlocks",
          "package": "llvm-ht",
          "signature": "ValueRef-\u003e IO CUInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "countBasicBlocks",
          "normalized": "ValueRef-\u003eIO CUInt",
          "package": "llvm-ht",
          "partial": "Basic Blocks",
          "signature": "ValueRef-\u003eIO CUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:countBasicBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "countIncoming",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO CUInt",
          "source": "src/LLVM-FFI-Core.html#countIncoming",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "countIncoming",
          "normalized": "ValueRef-\u003eIO CUInt",
          "package": "llvm-ht",
          "partial": "Incoming",
          "signature": "ValueRef-\u003eIO CUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:countIncoming"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGive the number of fixed parameters that a function takes.\n\u003c/p\u003e",
          "module": "LLVM.FFI.Core",
          "name": "countParamTypes",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e IO CUInt",
          "source": "src/LLVM-FFI-Core.html#countParamTypes",
          "type": "function"
        },
        "index": {
          "description": "Give the number of fixed parameters that function takes",
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "countParamTypes",
          "normalized": "TypeRef-\u003eIO CUInt",
          "package": "llvm-ht",
          "partial": "Param Types",
          "signature": "TypeRef-\u003eIO CUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:countParamTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "countParams",
          "package": "llvm-ht",
          "signature": "ValueRef-\u003e CUInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "countParams",
          "normalized": "ValueRef-\u003eCUInt",
          "package": "llvm-ht",
          "partial": "Params",
          "signature": "ValueRef-\u003eCUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:countParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "countStructElementTypes",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e CUInt",
          "source": "src/LLVM-FFI-Core.html#countStructElementTypes",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "countStructElementTypes",
          "normalized": "TypeRef-\u003eCUInt",
          "package": "llvm-ht",
          "partial": "Struct Element Types",
          "signature": "TypeRef-\u003eCUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:countStructElementTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "createBuilder",
          "package": "llvm-ht",
          "signature": "IO BuilderRef",
          "source": "src/LLVM-FFI-Core.html#createBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "createBuilder",
          "package": "llvm-ht",
          "partial": "Builder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:createBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "createBuilderInContext",
          "package": "llvm-ht",
          "signature": "ContextRef -\u003e IO BuilderRef",
          "source": "src/LLVM-FFI-Core.html#createBuilderInContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "createBuilderInContext",
          "normalized": "ContextRef-\u003eIO BuilderRef",
          "package": "llvm-ht",
          "partial": "Builder In Context",
          "signature": "ContextRef-\u003eIO BuilderRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:createBuilderInContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "createFunctionPassManager",
          "package": "llvm-ht",
          "signature": "ModuleProviderRef -\u003e IO PassManagerRef",
          "source": "src/LLVM-FFI-Core.html#createFunctionPassManager",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "createFunctionPassManager",
          "normalized": "ModuleProviderRef-\u003eIO PassManagerRef",
          "package": "llvm-ht",
          "partial": "Function Pass Manager",
          "signature": "ModuleProviderRef-\u003eIO PassManagerRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:createFunctionPassManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "createMemoryBufferWithContentsOfFile",
          "package": "llvm-ht",
          "signature": "CString -\u003e Ptr MemoryBufferRef -\u003e Ptr CString -\u003e IO CInt",
          "source": "src/LLVM-FFI-Core.html#createMemoryBufferWithContentsOfFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "createMemoryBufferWithContentsOfFile",
          "normalized": "CString-\u003ePtr MemoryBufferRef-\u003ePtr CString-\u003eIO CInt",
          "package": "llvm-ht",
          "partial": "Memory Buffer With Contents Of File",
          "signature": "CString-\u003ePtr MemoryBufferRef-\u003ePtr CString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:createMemoryBufferWithContentsOfFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "createMemoryBufferWithSTDIN",
          "package": "llvm-ht",
          "signature": "Ptr MemoryBufferRef -\u003e Ptr CString -\u003e IO CInt",
          "source": "src/LLVM-FFI-Core.html#createMemoryBufferWithSTDIN",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "createMemoryBufferWithSTDIN",
          "normalized": "Ptr MemoryBufferRef-\u003ePtr CString-\u003eIO CInt",
          "package": "llvm-ht",
          "partial": "Memory Buffer With STDIN",
          "signature": "Ptr MemoryBufferRef-\u003ePtr CString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:createMemoryBufferWithSTDIN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "createModuleProviderForExistingModule",
          "package": "llvm-ht",
          "signature": "ModuleRef -\u003e IO ModuleProviderRef",
          "source": "src/LLVM-FFI-Core.html#createModuleProviderForExistingModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "createModuleProviderForExistingModule",
          "normalized": "ModuleRef-\u003eIO ModuleProviderRef",
          "package": "llvm-ht",
          "partial": "Module Provider For Existing Module",
          "signature": "ModuleRef-\u003eIO ModuleProviderRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:createModuleProviderForExistingModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "createPassManager",
          "package": "llvm-ht",
          "signature": "IO PassManagerRef",
          "source": "src/LLVM-FFI-Core.html#createPassManager",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "createPassManager",
          "package": "llvm-ht",
          "partial": "Pass Manager",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:createPassManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "createTypeHandle",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e IO TypeHandleRef",
          "source": "src/LLVM-FFI-Core.html#createTypeHandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "createTypeHandle",
          "normalized": "TypeRef-\u003eIO TypeHandleRef",
          "package": "llvm-ht",
          "partial": "Type Handle",
          "signature": "TypeRef-\u003eIO TypeHandleRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:createTypeHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "deleteBasicBlock",
          "package": "llvm-ht",
          "signature": "BasicBlockRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#deleteBasicBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "deleteBasicBlock",
          "normalized": "BasicBlockRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Basic Block",
          "signature": "BasicBlockRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:deleteBasicBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "deleteFunction",
          "package": "llvm-ht",
          "signature": "ValueRef-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "deleteFunction",
          "normalized": "ValueRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Function",
          "signature": "ValueRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:deleteFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "deleteGlobal",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#deleteGlobal",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "deleteGlobal",
          "normalized": "ValueRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Global",
          "signature": "ValueRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:deleteGlobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "deleteTypeName",
          "package": "llvm-ht",
          "signature": "ModuleRef -\u003e CString -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#deleteTypeName",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "deleteTypeName",
          "normalized": "ModuleRef-\u003eCString-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Type Name",
          "signature": "ModuleRef-\u003eCString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:deleteTypeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "disposeMemoryBuffer",
          "package": "llvm-ht",
          "signature": "MemoryBufferRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#disposeMemoryBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "disposeMemoryBuffer",
          "normalized": "MemoryBufferRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Memory Buffer",
          "signature": "MemoryBufferRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:disposeMemoryBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "disposeMessage",
          "package": "llvm-ht",
          "signature": "CString -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#disposeMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "disposeMessage",
          "normalized": "CString-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Message",
          "signature": "CString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:disposeMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "disposeModule",
          "package": "llvm-ht",
          "signature": "ModuleRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#disposeModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "disposeModule",
          "normalized": "ModuleRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Module",
          "signature": "ModuleRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:disposeModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "disposeTypeHandle",
          "package": "llvm-ht",
          "signature": "TypeHandleRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#disposeTypeHandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "disposeTypeHandle",
          "normalized": "TypeHandleRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Type Handle",
          "signature": "TypeHandleRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:disposeTypeHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "doubleType",
          "package": "llvm-ht",
          "signature": "TypeRef",
          "source": "src/LLVM-FFI-Core.html#doubleType",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "doubleType",
          "package": "llvm-ht",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:doubleType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "doubleTypeInContext",
          "package": "llvm-ht",
          "signature": "ContextRef -\u003e IO TypeRef",
          "source": "src/LLVM-FFI-Core.html#doubleTypeInContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "doubleTypeInContext",
          "normalized": "ContextRef-\u003eIO TypeRef",
          "package": "llvm-ht",
          "partial": "Type In Context",
          "signature": "ContextRef-\u003eIO TypeRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:doubleTypeInContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "dumpModule",
          "package": "llvm-ht",
          "signature": "ModuleRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#dumpModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "dumpModule",
          "normalized": "ModuleRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Module",
          "signature": "ModuleRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:dumpModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "dumpValue",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#dumpValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "dumpValue",
          "normalized": "ValueRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Value",
          "signature": "ValueRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:dumpValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "fP128TypeInContext",
          "package": "llvm-ht",
          "signature": "ContextRef -\u003e IO TypeRef",
          "source": "src/LLVM-FFI-Core.html#fP128TypeInContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "fP128TypeInContext",
          "normalized": "ContextRef-\u003eIO TypeRef",
          "package": "llvm-ht",
          "partial": "Type In Context",
          "signature": "ContextRef-\u003eIO TypeRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:fP128TypeInContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "finalizeFunctionPassManager",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO CInt",
          "source": "src/LLVM-FFI-Core.html#finalizeFunctionPassManager",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "finalizeFunctionPassManager",
          "normalized": "PassManagerRef-\u003eIO CInt",
          "package": "llvm-ht",
          "partial": "Function Pass Manager",
          "signature": "PassManagerRef-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:finalizeFunctionPassManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "floatType",
          "package": "llvm-ht",
          "signature": "TypeRef",
          "source": "src/LLVM-FFI-Core.html#floatType",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "floatType",
          "package": "llvm-ht",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:floatType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "floatTypeInContext",
          "package": "llvm-ht",
          "signature": "ContextRef -\u003e IO TypeRef",
          "source": "src/LLVM-FFI-Core.html#floatTypeInContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "floatTypeInContext",
          "normalized": "ContextRef-\u003eIO TypeRef",
          "package": "llvm-ht",
          "partial": "Type In Context",
          "signature": "ContextRef-\u003eIO TypeRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:floatTypeInContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "fp128Type",
          "package": "llvm-ht",
          "signature": "TypeRef",
          "source": "src/LLVM-FFI-Core.html#fp128Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "fp128Type",
          "package": "llvm-ht",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:fp128Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "fromAttribute",
          "package": "llvm-ht",
          "signature": "Attribute -\u003e CAttribute",
          "source": "src/LLVM-FFI-Core.html#fromAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "fromAttribute",
          "normalized": "Attribute-\u003eCAttribute",
          "package": "llvm-ht",
          "partial": "Attribute",
          "signature": "Attribute-\u003eCAttribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:fromAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "fromCallingConvention",
          "package": "llvm-ht",
          "signature": "CallingConvention -\u003e CUInt",
          "source": "src/LLVM-FFI-Core.html#fromCallingConvention",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "fromCallingConvention",
          "normalized": "CallingConvention-\u003eCUInt",
          "package": "llvm-ht",
          "partial": "Calling Convention",
          "signature": "CallingConvention-\u003eCUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:fromCallingConvention"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "fromLinkage",
          "package": "llvm-ht",
          "signature": "Linkage -\u003e CUInt",
          "source": "src/LLVM-FFI-Core.html#fromLinkage",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "fromLinkage",
          "normalized": "Linkage-\u003eCUInt",
          "package": "llvm-ht",
          "partial": "Linkage",
          "signature": "Linkage-\u003eCUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:fromLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "fromVisibility",
          "package": "llvm-ht",
          "signature": "Visibility -\u003e CUInt",
          "source": "src/LLVM-FFI-Core.html#fromVisibility",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "fromVisibility",
          "normalized": "Visibility-\u003eCUInt",
          "package": "llvm-ht",
          "partial": "Visibility",
          "signature": "Visibility-\u003eCUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:fromVisibility"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a function type.\n\u003c/p\u003e",
          "module": "LLVM.FFI.Core",
          "name": "functionType",
          "package": "llvm-ht",
          "signature": "TypeRef-\u003e Ptr TypeRef-\u003e CUInt-\u003e CInt-\u003e TypeRef",
          "type": "function"
        },
        "index": {
          "description": "Create function type",
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "functionType",
          "normalized": "TypeRef-\u003ePtr TypeRef-\u003eCUInt-\u003eCInt-\u003eTypeRef",
          "package": "llvm-ht",
          "partial": "Type",
          "signature": "TypeRef-\u003ePtr TypeRef-\u003eCUInt-\u003eCInt-\u003eTypeRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:functionType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getAlignment",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO CUInt",
          "source": "src/LLVM-FFI-Core.html#getAlignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getAlignment",
          "normalized": "ValueRef-\u003eIO CUInt",
          "package": "llvm-ht",
          "partial": "Alignment",
          "signature": "ValueRef-\u003eIO CUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getAlignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getArrayLength",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e IO CUInt",
          "source": "src/LLVM-FFI-Core.html#getArrayLength",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getArrayLength",
          "normalized": "TypeRef-\u003eIO CUInt",
          "package": "llvm-ht",
          "partial": "Array Length",
          "signature": "TypeRef-\u003eIO CUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getArrayLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getBasicBlockParent",
          "package": "llvm-ht",
          "signature": "BasicBlockRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#getBasicBlockParent",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getBasicBlockParent",
          "normalized": "BasicBlockRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Basic Block Parent",
          "signature": "BasicBlockRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getBasicBlockParent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getBasicBlocks",
          "package": "llvm-ht",
          "signature": "ValueRef-\u003e Ptr BasicBlockRef-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getBasicBlocks",
          "normalized": "ValueRef-\u003ePtr BasicBlockRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Basic Blocks",
          "signature": "ValueRef-\u003ePtr BasicBlockRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getBasicBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getDataLayout",
          "package": "llvm-ht",
          "signature": "ModuleRef -\u003e IO CString",
          "source": "src/LLVM-FFI-Core.html#getDataLayout",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getDataLayout",
          "normalized": "ModuleRef-\u003eIO CString",
          "package": "llvm-ht",
          "partial": "Data Layout",
          "signature": "ModuleRef-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getDataLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the type of a sequential type's elements.\n\u003c/p\u003e",
          "module": "LLVM.FFI.Core",
          "name": "getElementType",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e IO TypeRef",
          "source": "src/LLVM-FFI-Core.html#getElementType",
          "type": "function"
        },
        "index": {
          "description": "Get the type of sequential type elements",
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getElementType",
          "normalized": "TypeRef-\u003eIO TypeRef",
          "package": "llvm-ht",
          "partial": "Element Type",
          "signature": "TypeRef-\u003eIO TypeRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getElementType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getEntryBasicBlock",
          "package": "llvm-ht",
          "signature": "ValueRef-\u003e IO BasicBlockRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getEntryBasicBlock",
          "normalized": "ValueRef-\u003eIO BasicBlockRef",
          "package": "llvm-ht",
          "partial": "Entry Basic Block",
          "signature": "ValueRef-\u003eIO BasicBlockRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getEntryBasicBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getFirstBasicBlock",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO BasicBlockRef",
          "source": "src/LLVM-FFI-Core.html#getFirstBasicBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getFirstBasicBlock",
          "normalized": "ValueRef-\u003eIO BasicBlockRef",
          "package": "llvm-ht",
          "partial": "First Basic Block",
          "signature": "ValueRef-\u003eIO BasicBlockRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getFirstBasicBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getFirstFunction",
          "package": "llvm-ht",
          "signature": "ModuleRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#getFirstFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getFirstFunction",
          "normalized": "ModuleRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "First Function",
          "signature": "ModuleRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getFirstFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getFirstGlobal",
          "package": "llvm-ht",
          "signature": "ModuleRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#getFirstGlobal",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getFirstGlobal",
          "normalized": "ModuleRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "First Global",
          "signature": "ModuleRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getFirstGlobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getFirstInstruction",
          "package": "llvm-ht",
          "signature": "BasicBlockRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#getFirstInstruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getFirstInstruction",
          "normalized": "BasicBlockRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "First Instruction",
          "signature": "BasicBlockRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getFirstInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getFirstParam",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#getFirstParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getFirstParam",
          "normalized": "ValueRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "First Param",
          "signature": "ValueRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getFirstParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getFunctionCallConv",
          "package": "llvm-ht",
          "signature": "ValueRef-\u003e IO CUInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getFunctionCallConv",
          "normalized": "ValueRef-\u003eIO CUInt",
          "package": "llvm-ht",
          "partial": "Function Call Conv",
          "signature": "ValueRef-\u003eIO CUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getFunctionCallConv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getGC",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO CString",
          "source": "src/LLVM-FFI-Core.html#getGC",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getGC",
          "normalized": "ValueRef-\u003eIO CString",
          "package": "llvm-ht",
          "partial": "GC",
          "signature": "ValueRef-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getGC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getGlobalParent",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO ModuleRef",
          "source": "src/LLVM-FFI-Core.html#getGlobalParent",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getGlobalParent",
          "normalized": "ValueRef-\u003eIO ModuleRef",
          "package": "llvm-ht",
          "partial": "Global Parent",
          "signature": "ValueRef-\u003eIO ModuleRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getGlobalParent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getIncomingBlock",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e CUInt -\u003e IO BasicBlockRef",
          "source": "src/LLVM-FFI-Core.html#getIncomingBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getIncomingBlock",
          "normalized": "ValueRef-\u003eCUInt-\u003eIO BasicBlockRef",
          "package": "llvm-ht",
          "partial": "Incoming Block",
          "signature": "ValueRef-\u003eCUInt-\u003eIO BasicBlockRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getIncomingBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getIncomingValue",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e CUInt -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#getIncomingValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getIncomingValue",
          "normalized": "ValueRef-\u003eCUInt-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Incoming Value",
          "signature": "ValueRef-\u003eCUInt-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getIncomingValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getInitializer",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#getInitializer",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getInitializer",
          "normalized": "ValueRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Initializer",
          "signature": "ValueRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getInitializer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getInsertBlock",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e IO BasicBlockRef",
          "source": "src/LLVM-FFI-Core.html#getInsertBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getInsertBlock",
          "normalized": "BuilderRef-\u003eIO BasicBlockRef",
          "package": "llvm-ht",
          "partial": "Insert Block",
          "signature": "BuilderRef-\u003eIO BasicBlockRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getInsertBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getInstructionCallConv",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO CUInt",
          "source": "src/LLVM-FFI-Core.html#getInstructionCallConv",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getInstructionCallConv",
          "normalized": "ValueRef-\u003eIO CUInt",
          "package": "llvm-ht",
          "partial": "Instruction Call Conv",
          "signature": "ValueRef-\u003eIO CUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getInstructionCallConv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getInstructionParent",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO BasicBlockRef",
          "source": "src/LLVM-FFI-Core.html#getInstructionParent",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getInstructionParent",
          "normalized": "ValueRef-\u003eIO BasicBlockRef",
          "package": "llvm-ht",
          "partial": "Instruction Parent",
          "signature": "ValueRef-\u003eIO BasicBlockRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getInstructionParent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getIntTypeWidth",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e IO CUInt",
          "source": "src/LLVM-FFI-Core.html#getIntTypeWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getIntTypeWidth",
          "normalized": "TypeRef-\u003eIO CUInt",
          "package": "llvm-ht",
          "partial": "Int Type Width",
          "signature": "TypeRef-\u003eIO CUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getIntTypeWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getIntrinsicID",
          "package": "llvm-ht",
          "signature": "ValueRef-\u003e CUInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getIntrinsicID",
          "normalized": "ValueRef-\u003eCUInt",
          "package": "llvm-ht",
          "partial": "Intrinsic ID",
          "signature": "ValueRef-\u003eCUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getIntrinsicID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getLastBasicBlock",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO BasicBlockRef",
          "source": "src/LLVM-FFI-Core.html#getLastBasicBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getLastBasicBlock",
          "normalized": "ValueRef-\u003eIO BasicBlockRef",
          "package": "llvm-ht",
          "partial": "Last Basic Block",
          "signature": "ValueRef-\u003eIO BasicBlockRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getLastBasicBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getLastFunction",
          "package": "llvm-ht",
          "signature": "ModuleRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#getLastFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getLastFunction",
          "normalized": "ModuleRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Last Function",
          "signature": "ModuleRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getLastFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getLastGlobal",
          "package": "llvm-ht",
          "signature": "ModuleRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#getLastGlobal",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getLastGlobal",
          "normalized": "ModuleRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Last Global",
          "signature": "ModuleRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getLastGlobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getLastInstruction",
          "package": "llvm-ht",
          "signature": "BasicBlockRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#getLastInstruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getLastInstruction",
          "normalized": "BasicBlockRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Last Instruction",
          "signature": "BasicBlockRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getLastInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getLastParam",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#getLastParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getLastParam",
          "normalized": "ValueRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Last Param",
          "signature": "ValueRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getLastParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getLinkage",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO CUInt",
          "source": "src/LLVM-FFI-Core.html#getLinkage",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getLinkage",
          "normalized": "ValueRef-\u003eIO CUInt",
          "package": "llvm-ht",
          "partial": "Linkage",
          "signature": "ValueRef-\u003eIO CUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getNamedFunction",
          "package": "llvm-ht",
          "signature": "ModuleRef-\u003e CString-\u003e IO ValueRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getNamedFunction",
          "normalized": "ModuleRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Named Function",
          "signature": "ModuleRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getNamedFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getNamedGlobal",
          "package": "llvm-ht",
          "signature": "ModuleRef -\u003e CString -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#getNamedGlobal",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getNamedGlobal",
          "normalized": "ModuleRef-\u003eCString-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Named Global",
          "signature": "ModuleRef-\u003eCString-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getNamedGlobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getNextBasicBlock",
          "package": "llvm-ht",
          "signature": "BasicBlockRef -\u003e IO BasicBlockRef",
          "source": "src/LLVM-FFI-Core.html#getNextBasicBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getNextBasicBlock",
          "normalized": "BasicBlockRef-\u003eIO BasicBlockRef",
          "package": "llvm-ht",
          "partial": "Next Basic Block",
          "signature": "BasicBlockRef-\u003eIO BasicBlockRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getNextBasicBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getNextFunction",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#getNextFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getNextFunction",
          "normalized": "ValueRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Next Function",
          "signature": "ValueRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getNextFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getNextGlobal",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#getNextGlobal",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getNextGlobal",
          "normalized": "ValueRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Next Global",
          "signature": "ValueRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getNextGlobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getNextInstruction",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#getNextInstruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getNextInstruction",
          "normalized": "ValueRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Next Instruction",
          "signature": "ValueRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getNextInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getNextParam",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#getNextParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getNextParam",
          "normalized": "ValueRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Next Param",
          "signature": "ValueRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getNextParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getParam",
          "package": "llvm-ht",
          "signature": "ValueRef-\u003e CUInt-\u003e ValueRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getParam",
          "normalized": "ValueRef-\u003eCUInt-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "Param",
          "signature": "ValueRef-\u003eCUInt-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getParamParent",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#getParamParent",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getParamParent",
          "normalized": "ValueRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Param Parent",
          "signature": "ValueRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getParamParent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill out an array with the types of a function's fixed\n parameters.\n\u003c/p\u003e",
          "module": "LLVM.FFI.Core",
          "name": "getParamTypes",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e Ptr TypeRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#getParamTypes",
          "type": "function"
        },
        "index": {
          "description": "Fill out an array with the types of function fixed parameters",
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getParamTypes",
          "normalized": "TypeRef-\u003ePtr TypeRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Param Types",
          "signature": "TypeRef-\u003ePtr TypeRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getParamTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getParams",
          "package": "llvm-ht",
          "signature": "ValueRef-\u003e Ptr ValueRef-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getParams",
          "normalized": "ValueRef-\u003ePtr ValueRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Params",
          "signature": "ValueRef-\u003ePtr ValueRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getPointerAddressSpace",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e IO CUInt",
          "source": "src/LLVM-FFI-Core.html#getPointerAddressSpace",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getPointerAddressSpace",
          "normalized": "TypeRef-\u003eIO CUInt",
          "package": "llvm-ht",
          "partial": "Pointer Address Space",
          "signature": "TypeRef-\u003eIO CUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getPointerAddressSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getPreviousBasicBlock",
          "package": "llvm-ht",
          "signature": "BasicBlockRef -\u003e IO BasicBlockRef",
          "source": "src/LLVM-FFI-Core.html#getPreviousBasicBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getPreviousBasicBlock",
          "normalized": "BasicBlockRef-\u003eIO BasicBlockRef",
          "package": "llvm-ht",
          "partial": "Previous Basic Block",
          "signature": "BasicBlockRef-\u003eIO BasicBlockRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getPreviousBasicBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getPreviousFunction",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#getPreviousFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getPreviousFunction",
          "normalized": "ValueRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Previous Function",
          "signature": "ValueRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getPreviousFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getPreviousGlobal",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#getPreviousGlobal",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getPreviousGlobal",
          "normalized": "ValueRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Previous Global",
          "signature": "ValueRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getPreviousGlobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getPreviousInstruction",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#getPreviousInstruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getPreviousInstruction",
          "normalized": "ValueRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Previous Instruction",
          "signature": "ValueRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getPreviousInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getPreviousParam",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#getPreviousParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getPreviousParam",
          "normalized": "ValueRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Previous Param",
          "signature": "ValueRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getPreviousParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGive a function's return type.\n\u003c/p\u003e",
          "module": "LLVM.FFI.Core",
          "name": "getReturnType",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e IO TypeRef",
          "source": "src/LLVM-FFI-Core.html#getReturnType",
          "type": "function"
        },
        "index": {
          "description": "Give function return type",
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getReturnType",
          "normalized": "TypeRef-\u003eIO TypeRef",
          "package": "llvm-ht",
          "partial": "Return Type",
          "signature": "TypeRef-\u003eIO TypeRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getReturnType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getSection",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO CString",
          "source": "src/LLVM-FFI-Core.html#getSection",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getSection",
          "normalized": "ValueRef-\u003eIO CString",
          "package": "llvm-ht",
          "partial": "Section",
          "signature": "ValueRef-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getSection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getStructElementTypes",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e Ptr TypeRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#getStructElementTypes",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getStructElementTypes",
          "normalized": "TypeRef-\u003ePtr TypeRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Struct Element Types",
          "signature": "TypeRef-\u003ePtr TypeRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getStructElementTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getTarget",
          "package": "llvm-ht",
          "signature": "ModuleRef -\u003e IO CString",
          "source": "src/LLVM-FFI-Core.html#getTarget",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getTarget",
          "normalized": "ModuleRef-\u003eIO CString",
          "package": "llvm-ht",
          "partial": "Target",
          "signature": "ModuleRef-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getTypeByName",
          "package": "llvm-ht",
          "signature": "ModuleRef -\u003e CString -\u003e IO TypeRef",
          "source": "src/LLVM-FFI-Core.html#getTypeByName",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getTypeByName",
          "normalized": "ModuleRef-\u003eCString-\u003eIO TypeRef",
          "package": "llvm-ht",
          "partial": "Type By Name",
          "signature": "ModuleRef-\u003eCString-\u003eIO TypeRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getTypeByName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getTypeContext",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e IO ContextRef",
          "source": "src/LLVM-FFI-Core.html#getTypeContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getTypeContext",
          "normalized": "TypeRef-\u003eIO ContextRef",
          "package": "llvm-ht",
          "partial": "Type Context",
          "signature": "TypeRef-\u003eIO ContextRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getTypeContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getTypeKind",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e IO TypeKind",
          "source": "src/LLVM-FFI-Core.html#getTypeKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getTypeKind",
          "normalized": "TypeRef-\u003eIO TypeKind",
          "package": "llvm-ht",
          "partial": "Type Kind",
          "signature": "TypeRef-\u003eIO TypeKind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getTypeKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getUndef",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e ValueRef",
          "source": "src/LLVM-FFI-Core.html#getUndef",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getUndef",
          "normalized": "TypeRef-\u003eValueRef",
          "package": "llvm-ht",
          "partial": "Undef",
          "signature": "TypeRef-\u003eValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getUndef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getValueName",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO CString",
          "source": "src/LLVM-FFI-Core.html#getValueName",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getValueName",
          "normalized": "ValueRef-\u003eIO CString",
          "package": "llvm-ht",
          "partial": "Value Name",
          "signature": "ValueRef-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getValueName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getVectorSize",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e IO CUInt",
          "source": "src/LLVM-FFI-Core.html#getVectorSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getVectorSize",
          "normalized": "TypeRef-\u003eIO CUInt",
          "package": "llvm-ht",
          "partial": "Vector Size",
          "signature": "TypeRef-\u003eIO CUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getVectorSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "getVisibility",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO CUInt",
          "source": "src/LLVM-FFI-Core.html#getVisibility",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "getVisibility",
          "normalized": "ValueRef-\u003eIO CUInt",
          "package": "llvm-ht",
          "partial": "Visibility",
          "signature": "ValueRef-\u003eIO CUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:getVisibility"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "initializeFunctionPassManager",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO CInt",
          "source": "src/LLVM-FFI-Core.html#initializeFunctionPassManager",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "initializeFunctionPassManager",
          "normalized": "PassManagerRef-\u003eIO CInt",
          "package": "llvm-ht",
          "partial": "Function Pass Manager",
          "signature": "PassManagerRef-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:initializeFunctionPassManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "insertBasicBlock",
          "package": "llvm-ht",
          "signature": "BasicBlockRef-\u003e CString-\u003e IO BasicBlockRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "insertBasicBlock",
          "normalized": "BasicBlockRef-\u003eCString-\u003eIO BasicBlockRef",
          "package": "llvm-ht",
          "partial": "Basic Block",
          "signature": "BasicBlockRef-\u003eCString-\u003eIO BasicBlockRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:insertBasicBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "insertBasicBlockInContext",
          "package": "llvm-ht",
          "signature": "ContextRef -\u003e BasicBlockRef -\u003e CString -\u003e IO BasicBlockRef",
          "source": "src/LLVM-FFI-Core.html#insertBasicBlockInContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "insertBasicBlockInContext",
          "normalized": "ContextRef-\u003eBasicBlockRef-\u003eCString-\u003eIO BasicBlockRef",
          "package": "llvm-ht",
          "partial": "Basic Block In Context",
          "signature": "ContextRef-\u003eBasicBlockRef-\u003eCString-\u003eIO BasicBlockRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:insertBasicBlockInContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "insertIntoBuilderWithName",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e CString -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#insertIntoBuilderWithName",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "insertIntoBuilderWithName",
          "normalized": "BuilderRef-\u003eValueRef-\u003eCString-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Into Builder With Name",
          "signature": "BuilderRef-\u003eValueRef-\u003eCString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:insertIntoBuilderWithName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "int16Type",
          "package": "llvm-ht",
          "signature": "TypeRef",
          "source": "src/LLVM-FFI-Core.html#int16Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "int16Type",
          "package": "llvm-ht",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:int16Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "int16TypeInContext",
          "package": "llvm-ht",
          "signature": "ContextRef -\u003e IO TypeRef",
          "source": "src/LLVM-FFI-Core.html#int16TypeInContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "int16TypeInContext",
          "normalized": "ContextRef-\u003eIO TypeRef",
          "package": "llvm-ht",
          "partial": "Type In Context",
          "signature": "ContextRef-\u003eIO TypeRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:int16TypeInContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "int1Type",
          "package": "llvm-ht",
          "signature": "TypeRef",
          "source": "src/LLVM-FFI-Core.html#int1Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "int1Type",
          "package": "llvm-ht",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:int1Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "int1TypeInContext",
          "package": "llvm-ht",
          "signature": "ContextRef -\u003e IO TypeRef",
          "source": "src/LLVM-FFI-Core.html#int1TypeInContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "int1TypeInContext",
          "normalized": "ContextRef-\u003eIO TypeRef",
          "package": "llvm-ht",
          "partial": "Type In Context",
          "signature": "ContextRef-\u003eIO TypeRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:int1TypeInContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "int32Type",
          "package": "llvm-ht",
          "signature": "TypeRef",
          "source": "src/LLVM-FFI-Core.html#int32Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "int32Type",
          "package": "llvm-ht",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:int32Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "int32TypeInContext",
          "package": "llvm-ht",
          "signature": "ContextRef -\u003e IO TypeRef",
          "source": "src/LLVM-FFI-Core.html#int32TypeInContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "int32TypeInContext",
          "normalized": "ContextRef-\u003eIO TypeRef",
          "package": "llvm-ht",
          "partial": "Type In Context",
          "signature": "ContextRef-\u003eIO TypeRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:int32TypeInContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "int64Type",
          "package": "llvm-ht",
          "signature": "TypeRef",
          "source": "src/LLVM-FFI-Core.html#int64Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "int64Type",
          "package": "llvm-ht",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:int64Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "int64TypeInContext",
          "package": "llvm-ht",
          "signature": "ContextRef -\u003e IO TypeRef",
          "source": "src/LLVM-FFI-Core.html#int64TypeInContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "int64TypeInContext",
          "normalized": "ContextRef-\u003eIO TypeRef",
          "package": "llvm-ht",
          "partial": "Type In Context",
          "signature": "ContextRef-\u003eIO TypeRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:int64TypeInContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "int8Type",
          "package": "llvm-ht",
          "signature": "TypeRef",
          "source": "src/LLVM-FFI-Core.html#int8Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "int8Type",
          "package": "llvm-ht",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:int8Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "int8TypeInContext",
          "package": "llvm-ht",
          "signature": "ContextRef -\u003e IO TypeRef",
          "source": "src/LLVM-FFI-Core.html#int8TypeInContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "int8TypeInContext",
          "normalized": "ContextRef-\u003eIO TypeRef",
          "package": "llvm-ht",
          "partial": "Type In Context",
          "signature": "ContextRef-\u003eIO TypeRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:int8TypeInContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "intTypeInContext",
          "package": "llvm-ht",
          "signature": "ContextRef -\u003e CUInt -\u003e IO TypeRef",
          "source": "src/LLVM-FFI-Core.html#intTypeInContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "intTypeInContext",
          "normalized": "ContextRef-\u003eCUInt-\u003eIO TypeRef",
          "package": "llvm-ht",
          "partial": "Type In Context",
          "signature": "ContextRef-\u003eCUInt-\u003eIO TypeRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:intTypeInContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn integer type of the given width.\n\u003c/p\u003e",
          "module": "LLVM.FFI.Core",
          "name": "integerType",
          "package": "llvm-ht",
          "signature": "CUInt-\u003e TypeRef",
          "type": "function"
        },
        "index": {
          "description": "An integer type of the given width",
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "integerType",
          "normalized": "CUInt-\u003eTypeRef",
          "package": "llvm-ht",
          "partial": "Type",
          "signature": "CUInt-\u003eTypeRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:integerType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "isConstant",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO CInt",
          "source": "src/LLVM-FFI-Core.html#isConstant",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "isConstant",
          "normalized": "ValueRef-\u003eIO CInt",
          "package": "llvm-ht",
          "partial": "Constant",
          "signature": "ValueRef-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:isConstant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "isDeclaration",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO CInt",
          "source": "src/LLVM-FFI-Core.html#isDeclaration",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "isDeclaration",
          "normalized": "ValueRef-\u003eIO CInt",
          "package": "llvm-ht",
          "partial": "Declaration",
          "signature": "ValueRef-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:isDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicate whether a function takes varargs.\n\u003c/p\u003e",
          "module": "LLVM.FFI.Core",
          "name": "isFunctionVarArg",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e IO CInt",
          "source": "src/LLVM-FFI-Core.html#isFunctionVarArg",
          "type": "function"
        },
        "index": {
          "description": "Indicate whether function takes varargs",
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "isFunctionVarArg",
          "normalized": "TypeRef-\u003eIO CInt",
          "package": "llvm-ht",
          "partial": "Function Var Arg",
          "signature": "TypeRef-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:isFunctionVarArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "isGlobalConstant",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO CInt",
          "source": "src/LLVM-FFI-Core.html#isGlobalConstant",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "isGlobalConstant",
          "normalized": "ValueRef-\u003eIO CInt",
          "package": "llvm-ht",
          "partial": "Global Constant",
          "signature": "ValueRef-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:isGlobalConstant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "isNull",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO CInt",
          "source": "src/LLVM-FFI-Core.html#isNull",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "isNull",
          "normalized": "ValueRef-\u003eIO CInt",
          "package": "llvm-ht",
          "partial": "Null",
          "signature": "ValueRef-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:isNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "isPackedStruct",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e CInt",
          "source": "src/LLVM-FFI-Core.html#isPackedStruct",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "isPackedStruct",
          "normalized": "TypeRef-\u003eCInt",
          "package": "llvm-ht",
          "partial": "Packed Struct",
          "signature": "TypeRef-\u003eCInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:isPackedStruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "isTailCall",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO CInt",
          "source": "src/LLVM-FFI-Core.html#isTailCall",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "isTailCall",
          "normalized": "ValueRef-\u003eIO CInt",
          "package": "llvm-ht",
          "partial": "Tail Call",
          "signature": "ValueRef-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:isTailCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "isThreadLocal",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO CInt",
          "source": "src/LLVM-FFI-Core.html#isThreadLocal",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "isThreadLocal",
          "normalized": "ValueRef-\u003eIO CInt",
          "package": "llvm-ht",
          "partial": "Thread Local",
          "signature": "ValueRef-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:isThreadLocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "isUndef",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO CInt",
          "source": "src/LLVM-FFI-Core.html#isUndef",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "isUndef",
          "normalized": "ValueRef-\u003eIO CInt",
          "package": "llvm-ht",
          "partial": "Undef",
          "signature": "ValueRef-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:isUndef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "labelType",
          "package": "llvm-ht",
          "signature": "TypeRef",
          "source": "src/LLVM-FFI-Core.html#labelType",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "labelType",
          "package": "llvm-ht",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:labelType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "labelTypeInContext",
          "package": "llvm-ht",
          "signature": "ContextRef -\u003e IO TypeRef",
          "source": "src/LLVM-FFI-Core.html#labelTypeInContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "labelTypeInContext",
          "normalized": "ContextRef-\u003eIO TypeRef",
          "package": "llvm-ht",
          "partial": "Type In Context",
          "signature": "ContextRef-\u003eIO TypeRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:labelTypeInContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "moduleCreateWithName",
          "package": "llvm-ht",
          "signature": "CString -\u003e IO ModuleRef",
          "source": "src/LLVM-FFI-Core.html#moduleCreateWithName",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "moduleCreateWithName",
          "normalized": "CString-\u003eIO ModuleRef",
          "package": "llvm-ht",
          "partial": "Create With Name",
          "signature": "CString-\u003eIO ModuleRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:moduleCreateWithName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "moduleCreateWithNameInContext",
          "package": "llvm-ht",
          "signature": "CString -\u003e ContextRef -\u003e IO ModuleRef",
          "source": "src/LLVM-FFI-Core.html#moduleCreateWithNameInContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "moduleCreateWithNameInContext",
          "normalized": "CString-\u003eContextRef-\u003eIO ModuleRef",
          "package": "llvm-ht",
          "partial": "Create With Name In Context",
          "signature": "CString-\u003eContextRef-\u003eIO ModuleRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:moduleCreateWithNameInContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "opaqueType",
          "package": "llvm-ht",
          "signature": "TypeRef",
          "source": "src/LLVM-FFI-Core.html#opaqueType",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "opaqueType",
          "package": "llvm-ht",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:opaqueType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "opaqueTypeInContext",
          "package": "llvm-ht",
          "signature": "ContextRef -\u003e IO TypeRef",
          "source": "src/LLVM-FFI-Core.html#opaqueTypeInContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "opaqueTypeInContext",
          "normalized": "ContextRef-\u003eIO TypeRef",
          "package": "llvm-ht",
          "partial": "Type In Context",
          "signature": "ContextRef-\u003eIO TypeRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:opaqueTypeInContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "pPCFP128TypeInContext",
          "package": "llvm-ht",
          "signature": "ContextRef -\u003e IO TypeRef",
          "source": "src/LLVM-FFI-Core.html#pPCFP128TypeInContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "pPCFP128TypeInContext",
          "normalized": "ContextRef-\u003eIO TypeRef",
          "package": "llvm-ht",
          "partial": "PCFP Type In Context",
          "signature": "ContextRef-\u003eIO TypeRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:pPCFP128TypeInContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "pointerType",
          "package": "llvm-ht",
          "signature": "TypeRef-\u003e CUInt-\u003e TypeRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "pointerType",
          "normalized": "TypeRef-\u003eCUInt-\u003eTypeRef",
          "package": "llvm-ht",
          "partial": "Type",
          "signature": "TypeRef-\u003eCUInt-\u003eTypeRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:pointerType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "positionAtEnd",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e BasicBlockRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#positionAtEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "positionAtEnd",
          "normalized": "BuilderRef-\u003eBasicBlockRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "At End",
          "signature": "BuilderRef-\u003eBasicBlockRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:positionAtEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "positionBefore",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e ValueRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#positionBefore",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "positionBefore",
          "normalized": "BuilderRef-\u003eValueRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Before",
          "signature": "BuilderRef-\u003eValueRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:positionBefore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "positionBuilder",
          "package": "llvm-ht",
          "signature": "BuilderRef -\u003e BasicBlockRef -\u003e ValueRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#positionBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "positionBuilder",
          "normalized": "BuilderRef-\u003eBasicBlockRef-\u003eValueRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Builder",
          "signature": "BuilderRef-\u003eBasicBlockRef-\u003eValueRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:positionBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "ppcFP128Type",
          "package": "llvm-ht",
          "signature": "TypeRef",
          "source": "src/LLVM-FFI-Core.html#ppcFP128Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "ppcFP128Type",
          "package": "llvm-ht",
          "partial": "FP Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:ppcFP128Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "ptrDisposeBuilder",
          "package": "llvm-ht",
          "signature": "FunPtr (BuilderRef -\u003e IO ())",
          "source": "src/LLVM-FFI-Core.html#ptrDisposeBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "ptrDisposeBuilder",
          "normalized": "FunPtr(BuilderRef-\u003eIO())",
          "package": "llvm-ht",
          "partial": "Dispose Builder",
          "signature": "FunPtr(BuilderRef-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:ptrDisposeBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "ptrDisposeModule",
          "package": "llvm-ht",
          "signature": "FunPtr (ModuleRef -\u003e IO ())",
          "source": "src/LLVM-FFI-Core.html#ptrDisposeModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "ptrDisposeModule",
          "normalized": "FunPtr(ModuleRef-\u003eIO())",
          "package": "llvm-ht",
          "partial": "Dispose Module",
          "signature": "FunPtr(ModuleRef-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:ptrDisposeModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "ptrDisposeModuleProvider",
          "package": "llvm-ht",
          "signature": "FunPtr (ModuleProviderRef -\u003e IO ())",
          "source": "src/LLVM-FFI-Core.html#ptrDisposeModuleProvider",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "ptrDisposeModuleProvider",
          "normalized": "FunPtr(ModuleProviderRef-\u003eIO())",
          "package": "llvm-ht",
          "partial": "Dispose Module Provider",
          "signature": "FunPtr(ModuleProviderRef-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:ptrDisposeModuleProvider"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "ptrDisposePassManager",
          "package": "llvm-ht",
          "signature": "FunPtr (PassManagerRef -\u003e IO ())",
          "source": "src/LLVM-FFI-Core.html#ptrDisposePassManager",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "ptrDisposePassManager",
          "normalized": "FunPtr(PassManagerRef-\u003eIO())",
          "package": "llvm-ht",
          "partial": "Dispose Pass Manager",
          "signature": "FunPtr(PassManagerRef-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:ptrDisposePassManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "refineType",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e TypeRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#refineType",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "refineType",
          "normalized": "TypeRef-\u003eTypeRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Type",
          "signature": "TypeRef-\u003eTypeRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:refineType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "removeAttribute",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e CAttribute -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#removeAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "removeAttribute",
          "normalized": "ValueRef-\u003eCAttribute-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Attribute",
          "signature": "ValueRef-\u003eCAttribute-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:removeAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "removeFunctionAttr",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e CAttribute -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#removeFunctionAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "removeFunctionAttr",
          "normalized": "ValueRef-\u003eCAttribute-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Function Attr",
          "signature": "ValueRef-\u003eCAttribute-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:removeFunctionAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "removeInstrAttribute",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e CUInt -\u003e CAttribute -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#removeInstrAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "removeInstrAttribute",
          "normalized": "ValueRef-\u003eCUInt-\u003eCAttribute-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Instr Attribute",
          "signature": "ValueRef-\u003eCUInt-\u003eCAttribute-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:removeInstrAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "resolveTypeHandle",
          "package": "llvm-ht",
          "signature": "TypeHandleRef -\u003e IO TypeRef",
          "source": "src/LLVM-FFI-Core.html#resolveTypeHandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "resolveTypeHandle",
          "normalized": "TypeHandleRef-\u003eIO TypeRef",
          "package": "llvm-ht",
          "partial": "Type Handle",
          "signature": "TypeHandleRef-\u003eIO TypeRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:resolveTypeHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "runFunctionPassManager",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e ValueRef -\u003e IO CInt",
          "source": "src/LLVM-FFI-Core.html#runFunctionPassManager",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "runFunctionPassManager",
          "normalized": "PassManagerRef-\u003eValueRef-\u003eIO CInt",
          "package": "llvm-ht",
          "partial": "Function Pass Manager",
          "signature": "PassManagerRef-\u003eValueRef-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:runFunctionPassManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "runPassManager",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e ModuleRef -\u003e IO CInt",
          "source": "src/LLVM-FFI-Core.html#runPassManager",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "runPassManager",
          "normalized": "PassManagerRef-\u003eModuleRef-\u003eIO CInt",
          "package": "llvm-ht",
          "partial": "Pass Manager",
          "signature": "PassManagerRef-\u003eModuleRef-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:runPassManager"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "setAlignment",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e CUInt -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#setAlignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "setAlignment",
          "normalized": "ValueRef-\u003eCUInt-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Alignment",
          "signature": "ValueRef-\u003eCUInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setAlignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "setDataLayout",
          "package": "llvm-ht",
          "signature": "ModuleRef -\u003e CString -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#setDataLayout",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "setDataLayout",
          "normalized": "ModuleRef-\u003eCString-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Data Layout",
          "signature": "ModuleRef-\u003eCString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setDataLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "setFunctionCallConv",
          "package": "llvm-ht",
          "signature": "ValueRef-\u003e CUInt-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "setFunctionCallConv",
          "normalized": "ValueRef-\u003eCUInt-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Function Call Conv",
          "signature": "ValueRef-\u003eCUInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setFunctionCallConv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "setGC",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e CString -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#setGC",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "setGC",
          "normalized": "ValueRef-\u003eCString-\u003eIO()",
          "package": "llvm-ht",
          "partial": "GC",
          "signature": "ValueRef-\u003eCString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setGC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "setGlobalConstant",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e CInt -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#setGlobalConstant",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "setGlobalConstant",
          "normalized": "ValueRef-\u003eCInt-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Global Constant",
          "signature": "ValueRef-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setGlobalConstant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "setInitializer",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e ValueRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#setInitializer",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "setInitializer",
          "normalized": "ValueRef-\u003eValueRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Initializer",
          "signature": "ValueRef-\u003eValueRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setInitializer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "setInstrParamAlignment",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e CUInt -\u003e CUInt -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#setInstrParamAlignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "setInstrParamAlignment",
          "normalized": "ValueRef-\u003eCUInt-\u003eCUInt-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Instr Param Alignment",
          "signature": "ValueRef-\u003eCUInt-\u003eCUInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setInstrParamAlignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "setInstructionCallConv",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e CUInt -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#setInstructionCallConv",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "setInstructionCallConv",
          "normalized": "ValueRef-\u003eCUInt-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Instruction Call Conv",
          "signature": "ValueRef-\u003eCUInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setInstructionCallConv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "setLinkage",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e CUInt -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#setLinkage",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "setLinkage",
          "normalized": "ValueRef-\u003eCUInt-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Linkage",
          "signature": "ValueRef-\u003eCUInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "setParamAlignment",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e CUInt -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#setParamAlignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "setParamAlignment",
          "normalized": "ValueRef-\u003eCUInt-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Param Alignment",
          "signature": "ValueRef-\u003eCUInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setParamAlignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "setSection",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e CString -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#setSection",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "setSection",
          "normalized": "ValueRef-\u003eCString-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Section",
          "signature": "ValueRef-\u003eCString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setSection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "setTailCall",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e CInt -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#setTailCall",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "setTailCall",
          "normalized": "ValueRef-\u003eCInt-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Tail Call",
          "signature": "ValueRef-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setTailCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "setTarget",
          "package": "llvm-ht",
          "signature": "ModuleRef -\u003e CString -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#setTarget",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "setTarget",
          "normalized": "ModuleRef-\u003eCString-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Target",
          "signature": "ModuleRef-\u003eCString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "setThreadLocal",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e CInt -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#setThreadLocal",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "setThreadLocal",
          "normalized": "ValueRef-\u003eCInt-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Thread Local",
          "signature": "ValueRef-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setThreadLocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "setValueName",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e CString -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#setValueName",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "setValueName",
          "normalized": "ValueRef-\u003eCString-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Value Name",
          "signature": "ValueRef-\u003eCString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setValueName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "setVisibility",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e CUInt -\u003e IO ()",
          "source": "src/LLVM-FFI-Core.html#setVisibility",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "setVisibility",
          "normalized": "ValueRef-\u003eCUInt-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Visibility",
          "signature": "ValueRef-\u003eCUInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:setVisibility"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "sizeOf",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e IO ValueRef",
          "source": "src/LLVM-FFI-Core.html#sizeOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "sizeOf",
          "normalized": "TypeRef-\u003eIO ValueRef",
          "package": "llvm-ht",
          "partial": "Of",
          "signature": "TypeRef-\u003eIO ValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:sizeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "structType",
          "package": "llvm-ht",
          "signature": "Ptr TypeRef -\u003e CUInt -\u003e CInt -\u003e TypeRef",
          "source": "src/LLVM-FFI-Core.html#structType",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "structType",
          "normalized": "Ptr TypeRef-\u003eCUInt-\u003eCInt-\u003eTypeRef",
          "package": "llvm-ht",
          "partial": "Type",
          "signature": "Ptr TypeRef-\u003eCUInt-\u003eCInt-\u003eTypeRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:structType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "structTypeInContext",
          "package": "llvm-ht",
          "signature": "ContextRef -\u003e Ptr TypeRef -\u003e CUInt -\u003e CInt -\u003e IO TypeRef",
          "source": "src/LLVM-FFI-Core.html#structTypeInContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "structTypeInContext",
          "normalized": "ContextRef-\u003ePtr TypeRef-\u003eCUInt-\u003eCInt-\u003eIO TypeRef",
          "package": "llvm-ht",
          "partial": "Type In Context",
          "signature": "ContextRef-\u003ePtr TypeRef-\u003eCUInt-\u003eCInt-\u003eIO TypeRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:structTypeInContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "toAttribute",
          "package": "llvm-ht",
          "signature": "CAttribute -\u003e Attribute",
          "source": "src/LLVM-FFI-Core.html#toAttribute",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "toAttribute",
          "normalized": "CAttribute-\u003eAttribute",
          "package": "llvm-ht",
          "partial": "Attribute",
          "signature": "CAttribute-\u003eAttribute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:toAttribute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "toCallingConvention",
          "package": "llvm-ht",
          "signature": "CUInt -\u003e CallingConvention",
          "source": "src/LLVM-FFI-Core.html#toCallingConvention",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "toCallingConvention",
          "normalized": "CUInt-\u003eCallingConvention",
          "package": "llvm-ht",
          "partial": "Calling Convention",
          "signature": "CUInt-\u003eCallingConvention",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:toCallingConvention"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "toLinkage",
          "package": "llvm-ht",
          "signature": "CUInt -\u003e Linkage",
          "source": "src/LLVM-FFI-Core.html#toLinkage",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "toLinkage",
          "normalized": "CUInt-\u003eLinkage",
          "package": "llvm-ht",
          "partial": "Linkage",
          "signature": "CUInt-\u003eLinkage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:toLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "toVisibility",
          "package": "llvm-ht",
          "signature": "CUInt -\u003e Visibility",
          "source": "src/LLVM-FFI-Core.html#toVisibility",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "toVisibility",
          "normalized": "CUInt-\u003eVisibility",
          "package": "llvm-ht",
          "partial": "Visibility",
          "signature": "CUInt-\u003eVisibility",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:toVisibility"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "typeOf",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e IO TypeRef",
          "source": "src/LLVM-FFI-Core.html#typeOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "typeOf",
          "normalized": "ValueRef-\u003eIO TypeRef",
          "package": "llvm-ht",
          "partial": "Of",
          "signature": "ValueRef-\u003eIO TypeRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:typeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "valueAsBasicBlock",
          "package": "llvm-ht",
          "signature": "ValueRef-\u003e BasicBlockRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "valueAsBasicBlock",
          "normalized": "ValueRef-\u003eBasicBlockRef",
          "package": "llvm-ht",
          "partial": "As Basic Block",
          "signature": "ValueRef-\u003eBasicBlockRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:valueAsBasicBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "valueIsBasicBlock",
          "package": "llvm-ht",
          "signature": "ValueRef -\u003e Bool",
          "source": "src/LLVM-FFI-Core.html#valueIsBasicBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "valueIsBasicBlock",
          "normalized": "ValueRef-\u003eBool",
          "package": "llvm-ht",
          "partial": "Is Basic Block",
          "signature": "ValueRef-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:valueIsBasicBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "vectorType",
          "package": "llvm-ht",
          "signature": "TypeRef-\u003e CUInt-\u003e TypeRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "vectorType",
          "normalized": "TypeRef-\u003eCUInt-\u003eTypeRef",
          "package": "llvm-ht",
          "partial": "Type",
          "signature": "TypeRef-\u003eCUInt-\u003eTypeRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:vectorType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "voidType",
          "package": "llvm-ht",
          "signature": "TypeRef",
          "source": "src/LLVM-FFI-Core.html#voidType",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "voidType",
          "package": "llvm-ht",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:voidType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "voidTypeInContext",
          "package": "llvm-ht",
          "signature": "ContextRef -\u003e IO TypeRef",
          "source": "src/LLVM-FFI-Core.html#voidTypeInContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "voidTypeInContext",
          "normalized": "ContextRef-\u003eIO TypeRef",
          "package": "llvm-ht",
          "partial": "Type In Context",
          "signature": "ContextRef-\u003eIO TypeRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:voidTypeInContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "x86FP80Type",
          "package": "llvm-ht",
          "signature": "TypeRef",
          "source": "src/LLVM-FFI-Core.html#x86FP80Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "x86FP80Type",
          "package": "llvm-ht",
          "partial": "FP Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:x86FP80Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Core",
          "name": "x86FP80TypeInContext",
          "package": "llvm-ht",
          "signature": "ContextRef -\u003e IO TypeRef",
          "source": "src/LLVM-FFI-Core.html#x86FP80TypeInContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Core",
          "module": "LLVM.FFI.Core",
          "name": "x86FP80TypeInContext",
          "normalized": "ContextRef-\u003eIO TypeRef",
          "package": "llvm-ht",
          "partial": "FP Type In Context",
          "signature": "ContextRef-\u003eIO TypeRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Core.html#v:x86FP80TypeInContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "ExecutionEngine",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-ExecutionEngine.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "LLVM FFI ExecutionEngine",
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "ExecutionEngine",
          "package": "llvm-ht",
          "partial": "Execution Engine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "ExecutionEngine",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-ExecutionEngine.html#ExecutionEngine",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM FFI ExecutionEngine",
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "ExecutionEngine",
          "package": "llvm-ht",
          "partial": "Execution Engine",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#t:ExecutionEngine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "GenericValue",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-ExecutionEngine.html#GenericValue",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM FFI ExecutionEngine",
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "GenericValue",
          "package": "llvm-ht",
          "partial": "Generic Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#t:GenericValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "GenericValueRef",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-ExecutionEngine.html#GenericValueRef",
          "type": "type"
        },
        "index": {
          "hierarchy": "LLVM FFI ExecutionEngine",
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "GenericValueRef",
          "package": "llvm-ht",
          "partial": "Generic Value Ref",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#t:GenericValueRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "addGlobalMapping",
          "package": "llvm-ht",
          "signature": "ExecutionEngineRef -\u003e ValueRef -\u003e Ptr () -\u003e IO ()",
          "source": "src/LLVM-FFI-ExecutionEngine.html#addGlobalMapping",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI ExecutionEngine",
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "addGlobalMapping",
          "normalized": "ExecutionEngineRef-\u003eValueRef-\u003ePtr()-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Global Mapping",
          "signature": "ExecutionEngineRef-\u003eValueRef-\u003ePtr()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:addGlobalMapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "addModuleProvider",
          "package": "llvm-ht",
          "signature": "ExecutionEngineRef -\u003e ModuleProviderRef -\u003e IO ()",
          "source": "src/LLVM-FFI-ExecutionEngine.html#addModuleProvider",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI ExecutionEngine",
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "addModuleProvider",
          "normalized": "ExecutionEngineRef-\u003eModuleProviderRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Module Provider",
          "signature": "ExecutionEngineRef-\u003eModuleProviderRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:addModuleProvider"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "createExecutionEngine",
          "package": "llvm-ht",
          "signature": "Ptr ExecutionEngineRef -\u003e ModuleProviderRef -\u003e Ptr CString -\u003e IO CInt",
          "source": "src/LLVM-FFI-ExecutionEngine.html#createExecutionEngine",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI ExecutionEngine",
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "createExecutionEngine",
          "normalized": "Ptr ExecutionEngineRef-\u003eModuleProviderRef-\u003ePtr CString-\u003eIO CInt",
          "package": "llvm-ht",
          "partial": "Execution Engine",
          "signature": "Ptr ExecutionEngineRef-\u003eModuleProviderRef-\u003ePtr CString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:createExecutionEngine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "createGenericValueOfFloat",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e CDouble -\u003e IO GenericValueRef",
          "source": "src/LLVM-FFI-ExecutionEngine.html#createGenericValueOfFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI ExecutionEngine",
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "createGenericValueOfFloat",
          "normalized": "TypeRef-\u003eCDouble-\u003eIO GenericValueRef",
          "package": "llvm-ht",
          "partial": "Generic Value Of Float",
          "signature": "TypeRef-\u003eCDouble-\u003eIO GenericValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:createGenericValueOfFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "createGenericValueOfInt",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e CULLong -\u003e CInt -\u003e IO GenericValueRef",
          "source": "src/LLVM-FFI-ExecutionEngine.html#createGenericValueOfInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI ExecutionEngine",
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "createGenericValueOfInt",
          "normalized": "TypeRef-\u003eCULLong-\u003eCInt-\u003eIO GenericValueRef",
          "package": "llvm-ht",
          "partial": "Generic Value Of Int",
          "signature": "TypeRef-\u003eCULLong-\u003eCInt-\u003eIO GenericValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:createGenericValueOfInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "createGenericValueOfPointer",
          "package": "llvm-ht",
          "signature": "Ptr a -\u003e IO GenericValueRef",
          "source": "src/LLVM-FFI-ExecutionEngine.html#createGenericValueOfPointer",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI ExecutionEngine",
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "createGenericValueOfPointer",
          "normalized": "Ptr a-\u003eIO GenericValueRef",
          "package": "llvm-ht",
          "partial": "Generic Value Of Pointer",
          "signature": "Ptr a-\u003eIO GenericValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:createGenericValueOfPointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "createInterpreter",
          "package": "llvm-ht",
          "signature": "Ptr ExecutionEngineRef -\u003e ModuleProviderRef -\u003e Ptr CString -\u003e IO CInt",
          "source": "src/LLVM-FFI-ExecutionEngine.html#createInterpreter",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI ExecutionEngine",
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "createInterpreter",
          "normalized": "Ptr ExecutionEngineRef-\u003eModuleProviderRef-\u003ePtr CString-\u003eIO CInt",
          "package": "llvm-ht",
          "partial": "Interpreter",
          "signature": "Ptr ExecutionEngineRef-\u003eModuleProviderRef-\u003ePtr CString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:createInterpreter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "createJITCompiler",
          "package": "llvm-ht",
          "signature": "Ptr ExecutionEngineRef -\u003e ModuleProviderRef -\u003e Ptr CString -\u003e IO CInt",
          "source": "src/LLVM-FFI-ExecutionEngine.html#createJITCompiler",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI ExecutionEngine",
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "createJITCompiler",
          "normalized": "Ptr ExecutionEngineRef-\u003eModuleProviderRef-\u003ePtr CString-\u003eIO CInt",
          "package": "llvm-ht",
          "partial": "JITCompiler",
          "signature": "Ptr ExecutionEngineRef-\u003eModuleProviderRef-\u003ePtr CString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:createJITCompiler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "findFunction",
          "package": "llvm-ht",
          "signature": "ExecutionEngineRef -\u003e CString -\u003e Ptr ValueRef -\u003e IO CInt",
          "source": "src/LLVM-FFI-ExecutionEngine.html#findFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI ExecutionEngine",
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "findFunction",
          "normalized": "ExecutionEngineRef-\u003eCString-\u003ePtr ValueRef-\u003eIO CInt",
          "package": "llvm-ht",
          "partial": "Function",
          "signature": "ExecutionEngineRef-\u003eCString-\u003ePtr ValueRef-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:findFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "freeMachineCodeForFunction",
          "package": "llvm-ht",
          "signature": "ExecutionEngineRef -\u003e ValueRef -\u003e IO ()",
          "source": "src/LLVM-FFI-ExecutionEngine.html#freeMachineCodeForFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI ExecutionEngine",
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "freeMachineCodeForFunction",
          "normalized": "ExecutionEngineRef-\u003eValueRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Machine Code For Function",
          "signature": "ExecutionEngineRef-\u003eValueRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:freeMachineCodeForFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "genericValueIntWidth",
          "package": "llvm-ht",
          "signature": "GenericValueRef -\u003e IO CUInt",
          "source": "src/LLVM-FFI-ExecutionEngine.html#genericValueIntWidth",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI ExecutionEngine",
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "genericValueIntWidth",
          "normalized": "GenericValueRef-\u003eIO CUInt",
          "package": "llvm-ht",
          "partial": "Value Int Width",
          "signature": "GenericValueRef-\u003eIO CUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:genericValueIntWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "genericValueToFloat",
          "package": "llvm-ht",
          "signature": "TypeRef -\u003e GenericValueRef -\u003e CDouble",
          "source": "src/LLVM-FFI-ExecutionEngine.html#genericValueToFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI ExecutionEngine",
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "genericValueToFloat",
          "normalized": "TypeRef-\u003eGenericValueRef-\u003eCDouble",
          "package": "llvm-ht",
          "partial": "Value To Float",
          "signature": "TypeRef-\u003eGenericValueRef-\u003eCDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:genericValueToFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "genericValueToInt",
          "package": "llvm-ht",
          "signature": "GenericValueRef -\u003e CInt -\u003e CULLong",
          "source": "src/LLVM-FFI-ExecutionEngine.html#genericValueToInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI ExecutionEngine",
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "genericValueToInt",
          "normalized": "GenericValueRef-\u003eCInt-\u003eCULLong",
          "package": "llvm-ht",
          "partial": "Value To Int",
          "signature": "GenericValueRef-\u003eCInt-\u003eCULLong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:genericValueToInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "genericValueToPointer",
          "package": "llvm-ht",
          "signature": "GenericValueRef -\u003e IO (Ptr a)",
          "source": "src/LLVM-FFI-ExecutionEngine.html#genericValueToPointer",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI ExecutionEngine",
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "genericValueToPointer",
          "normalized": "GenericValueRef-\u003eIO(Ptr a)",
          "package": "llvm-ht",
          "partial": "Value To Pointer",
          "signature": "GenericValueRef-\u003eIO(Ptr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:genericValueToPointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "getExecutionEngineTargetData",
          "package": "llvm-ht",
          "signature": "ExecutionEngineRef -\u003e IO TargetDataRef",
          "source": "src/LLVM-FFI-ExecutionEngine.html#getExecutionEngineTargetData",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI ExecutionEngine",
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "getExecutionEngineTargetData",
          "normalized": "ExecutionEngineRef-\u003eIO TargetDataRef",
          "package": "llvm-ht",
          "partial": "Execution Engine Target Data",
          "signature": "ExecutionEngineRef-\u003eIO TargetDataRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:getExecutionEngineTargetData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "getPointerToGlobal",
          "package": "llvm-ht",
          "signature": "ExecutionEngineRef -\u003e ValueRef -\u003e IO (FunPtr a)",
          "source": "src/LLVM-FFI-ExecutionEngine.html#getPointerToGlobal",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI ExecutionEngine",
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "getPointerToGlobal",
          "normalized": "ExecutionEngineRef-\u003eValueRef-\u003eIO(FunPtr a)",
          "package": "llvm-ht",
          "partial": "Pointer To Global",
          "signature": "ExecutionEngineRef-\u003eValueRef-\u003eIO(FunPtr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:getPointerToGlobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "linkInJIT",
          "package": "llvm-ht",
          "signature": "IO ()",
          "source": "src/LLVM-FFI-ExecutionEngine.html#linkInJIT",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI ExecutionEngine",
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "linkInJIT",
          "normalized": "IO()",
          "package": "llvm-ht",
          "partial": "In JIT",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:linkInJIT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "ptrDisposeExecutionEngine",
          "package": "llvm-ht",
          "signature": "FunPtr (ExecutionEngineRef -\u003e IO ())",
          "source": "src/LLVM-FFI-ExecutionEngine.html#ptrDisposeExecutionEngine",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI ExecutionEngine",
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "ptrDisposeExecutionEngine",
          "normalized": "FunPtr(ExecutionEngineRef-\u003eIO())",
          "package": "llvm-ht",
          "partial": "Dispose Execution Engine",
          "signature": "FunPtr(ExecutionEngineRef-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:ptrDisposeExecutionEngine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "ptrDisposeGenericValue",
          "package": "llvm-ht",
          "signature": "FunPtr (GenericValueRef -\u003e IO ())",
          "source": "src/LLVM-FFI-ExecutionEngine.html#ptrDisposeGenericValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI ExecutionEngine",
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "ptrDisposeGenericValue",
          "normalized": "FunPtr(GenericValueRef-\u003eIO())",
          "package": "llvm-ht",
          "partial": "Dispose Generic Value",
          "signature": "FunPtr(GenericValueRef-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:ptrDisposeGenericValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "removeModuleProvider",
          "package": "llvm-ht",
          "signature": "ExecutionEngineRef -\u003e ModuleProviderRef -\u003e Ptr ModuleRef -\u003e Ptr CString -\u003e IO CInt",
          "source": "src/LLVM-FFI-ExecutionEngine.html#removeModuleProvider",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI ExecutionEngine",
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "removeModuleProvider",
          "normalized": "ExecutionEngineRef-\u003eModuleProviderRef-\u003ePtr ModuleRef-\u003ePtr CString-\u003eIO CInt",
          "package": "llvm-ht",
          "partial": "Module Provider",
          "signature": "ExecutionEngineRef-\u003eModuleProviderRef-\u003ePtr ModuleRef-\u003ePtr CString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:removeModuleProvider"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "runFunction",
          "package": "llvm-ht",
          "signature": "ExecutionEngineRef -\u003e ValueRef -\u003e CUInt -\u003e Ptr GenericValueRef -\u003e IO GenericValueRef",
          "source": "src/LLVM-FFI-ExecutionEngine.html#runFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI ExecutionEngine",
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "runFunction",
          "normalized": "ExecutionEngineRef-\u003eValueRef-\u003eCUInt-\u003ePtr GenericValueRef-\u003eIO GenericValueRef",
          "package": "llvm-ht",
          "partial": "Function",
          "signature": "ExecutionEngineRef-\u003eValueRef-\u003eCUInt-\u003ePtr GenericValueRef-\u003eIO GenericValueRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:runFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "runFunctionAsMain",
          "package": "llvm-ht",
          "signature": "ExecutionEngineRef-\u003e ValueRef-\u003e CUInt-\u003e Ptr CString-\u003e Ptr CString-\u003e IO CInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI ExecutionEngine",
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "runFunctionAsMain",
          "normalized": "ExecutionEngineRef-\u003eValueRef-\u003eCUInt-\u003ePtr CString-\u003ePtr CString-\u003eIO CInt",
          "package": "llvm-ht",
          "partial": "Function As Main",
          "signature": "ExecutionEngineRef-\u003eValueRef-\u003eCUInt-\u003ePtr CString-\u003ePtr CString-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:runFunctionAsMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "runStaticConstructors",
          "package": "llvm-ht",
          "signature": "ExecutionEngineRef -\u003e IO ()",
          "source": "src/LLVM-FFI-ExecutionEngine.html#runStaticConstructors",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI ExecutionEngine",
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "runStaticConstructors",
          "normalized": "ExecutionEngineRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Static Constructors",
          "signature": "ExecutionEngineRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:runStaticConstructors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "runStaticDestructors",
          "package": "llvm-ht",
          "signature": "ExecutionEngineRef -\u003e IO ()",
          "source": "src/LLVM-FFI-ExecutionEngine.html#runStaticDestructors",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI ExecutionEngine",
          "module": "LLVM.FFI.ExecutionEngine",
          "name": "runStaticDestructors",
          "normalized": "ExecutionEngineRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Static Destructors",
          "signature": "ExecutionEngineRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-ExecutionEngine.html#v:runStaticDestructors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Target",
          "name": "Target",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Target.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "LLVM FFI Target",
          "module": "LLVM.FFI.Target",
          "name": "Target",
          "package": "llvm-ht",
          "partial": "Target",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Target",
          "name": "ByteOrdering",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Target.html#ByteOrdering",
          "type": "type"
        },
        "index": {
          "hierarchy": "LLVM FFI Target",
          "module": "LLVM.FFI.Target",
          "name": "ByteOrdering",
          "package": "llvm-ht",
          "partial": "Byte Ordering",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#t:ByteOrdering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Target",
          "name": "TargetData",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Target.html#TargetData",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM FFI Target",
          "module": "LLVM.FFI.Target",
          "name": "TargetData",
          "package": "llvm-ht",
          "partial": "Target Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#t:TargetData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Target",
          "name": "TargetDataRef",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Target.html#TargetDataRef",
          "type": "type"
        },
        "index": {
          "hierarchy": "LLVM FFI Target",
          "module": "LLVM.FFI.Target",
          "name": "TargetDataRef",
          "package": "llvm-ht",
          "partial": "Target Data Ref",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#t:TargetDataRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Target",
          "name": "aBIAlignmentOfType",
          "package": "llvm-ht",
          "signature": "TargetDataRef -\u003e TypeRef -\u003e CUInt",
          "source": "src/LLVM-FFI-Target.html#aBIAlignmentOfType",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Target",
          "module": "LLVM.FFI.Target",
          "name": "aBIAlignmentOfType",
          "normalized": "TargetDataRef-\u003eTypeRef-\u003eCUInt",
          "package": "llvm-ht",
          "partial": "BIAlignment Of Type",
          "signature": "TargetDataRef-\u003eTypeRef-\u003eCUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:aBIAlignmentOfType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Target",
          "name": "aBISizeOfType",
          "package": "llvm-ht",
          "signature": "TargetDataRef -\u003e TypeRef -\u003e CULLong",
          "source": "src/LLVM-FFI-Target.html#aBISizeOfType",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Target",
          "module": "LLVM.FFI.Target",
          "name": "aBISizeOfType",
          "normalized": "TargetDataRef-\u003eTypeRef-\u003eCULLong",
          "package": "llvm-ht",
          "partial": "BISize Of Type",
          "signature": "TargetDataRef-\u003eTypeRef-\u003eCULLong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:aBISizeOfType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Target",
          "name": "addTargetData",
          "package": "llvm-ht",
          "signature": "TargetDataRef -\u003e PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Target.html#addTargetData",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Target",
          "module": "LLVM.FFI.Target",
          "name": "addTargetData",
          "normalized": "TargetDataRef-\u003ePassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Target Data",
          "signature": "TargetDataRef-\u003ePassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:addTargetData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Target",
          "name": "byteOrder",
          "package": "llvm-ht",
          "signature": "TargetDataRef -\u003e ByteOrdering",
          "source": "src/LLVM-FFI-Target.html#byteOrder",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Target",
          "module": "LLVM.FFI.Target",
          "name": "byteOrder",
          "normalized": "TargetDataRef-\u003eByteOrdering",
          "package": "llvm-ht",
          "partial": "Order",
          "signature": "TargetDataRef-\u003eByteOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:byteOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Target",
          "name": "callFrameAlignmentOfType",
          "package": "llvm-ht",
          "signature": "TargetDataRef -\u003e TypeRef -\u003e CUInt",
          "source": "src/LLVM-FFI-Target.html#callFrameAlignmentOfType",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Target",
          "module": "LLVM.FFI.Target",
          "name": "callFrameAlignmentOfType",
          "normalized": "TargetDataRef-\u003eTypeRef-\u003eCUInt",
          "package": "llvm-ht",
          "partial": "Frame Alignment Of Type",
          "signature": "TargetDataRef-\u003eTypeRef-\u003eCUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:callFrameAlignmentOfType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Target",
          "name": "copyStringRepOfTargetData",
          "package": "llvm-ht",
          "signature": "TargetDataRef -\u003e IO CString",
          "source": "src/LLVM-FFI-Target.html#copyStringRepOfTargetData",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Target",
          "module": "LLVM.FFI.Target",
          "name": "copyStringRepOfTargetData",
          "normalized": "TargetDataRef-\u003eIO CString",
          "package": "llvm-ht",
          "partial": "String Rep Of Target Data",
          "signature": "TargetDataRef-\u003eIO CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:copyStringRepOfTargetData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Target",
          "name": "createTargetData",
          "package": "llvm-ht",
          "signature": "CString -\u003e IO TargetDataRef",
          "source": "src/LLVM-FFI-Target.html#createTargetData",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Target",
          "module": "LLVM.FFI.Target",
          "name": "createTargetData",
          "normalized": "CString-\u003eIO TargetDataRef",
          "package": "llvm-ht",
          "partial": "Target Data",
          "signature": "CString-\u003eIO TargetDataRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:createTargetData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Target",
          "name": "disposeTargetData",
          "package": "llvm-ht",
          "signature": "TargetDataRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Target.html#disposeTargetData",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Target",
          "module": "LLVM.FFI.Target",
          "name": "disposeTargetData",
          "normalized": "TargetDataRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Target Data",
          "signature": "TargetDataRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:disposeTargetData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Target",
          "name": "elementAtOffset",
          "package": "llvm-ht",
          "signature": "TargetDataRef -\u003e TypeRef -\u003e CULLong -\u003e CUInt",
          "source": "src/LLVM-FFI-Target.html#elementAtOffset",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Target",
          "module": "LLVM.FFI.Target",
          "name": "elementAtOffset",
          "normalized": "TargetDataRef-\u003eTypeRef-\u003eCULLong-\u003eCUInt",
          "package": "llvm-ht",
          "partial": "At Offset",
          "signature": "TargetDataRef-\u003eTypeRef-\u003eCULLong-\u003eCUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:elementAtOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Target",
          "name": "intPtrType",
          "package": "llvm-ht",
          "signature": "TargetDataRef -\u003e TypeRef",
          "source": "src/LLVM-FFI-Target.html#intPtrType",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Target",
          "module": "LLVM.FFI.Target",
          "name": "intPtrType",
          "normalized": "TargetDataRef-\u003eTypeRef",
          "package": "llvm-ht",
          "partial": "Ptr Type",
          "signature": "TargetDataRef-\u003eTypeRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:intPtrType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Target",
          "name": "invalidateStructLayout",
          "package": "llvm-ht",
          "signature": "TargetDataRef -\u003e TypeRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Target.html#invalidateStructLayout",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Target",
          "module": "LLVM.FFI.Target",
          "name": "invalidateStructLayout",
          "normalized": "TargetDataRef-\u003eTypeRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Struct Layout",
          "signature": "TargetDataRef-\u003eTypeRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:invalidateStructLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Target",
          "name": "offsetOfElement",
          "package": "llvm-ht",
          "signature": "TargetDataRef -\u003e TypeRef -\u003e CUInt -\u003e CULLong",
          "source": "src/LLVM-FFI-Target.html#offsetOfElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Target",
          "module": "LLVM.FFI.Target",
          "name": "offsetOfElement",
          "normalized": "TargetDataRef-\u003eTypeRef-\u003eCUInt-\u003eCULLong",
          "package": "llvm-ht",
          "partial": "Of Element",
          "signature": "TargetDataRef-\u003eTypeRef-\u003eCUInt-\u003eCULLong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:offsetOfElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Target",
          "name": "pointerSize",
          "package": "llvm-ht",
          "signature": "TargetDataRef -\u003e CUInt",
          "source": "src/LLVM-FFI-Target.html#pointerSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Target",
          "module": "LLVM.FFI.Target",
          "name": "pointerSize",
          "normalized": "TargetDataRef-\u003eCUInt",
          "package": "llvm-ht",
          "partial": "Size",
          "signature": "TargetDataRef-\u003eCUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:pointerSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Target",
          "name": "preferredAlignmentOfGlobal",
          "package": "llvm-ht",
          "signature": "TargetDataRef -\u003e ValueRef -\u003e CUInt",
          "source": "src/LLVM-FFI-Target.html#preferredAlignmentOfGlobal",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Target",
          "module": "LLVM.FFI.Target",
          "name": "preferredAlignmentOfGlobal",
          "normalized": "TargetDataRef-\u003eValueRef-\u003eCUInt",
          "package": "llvm-ht",
          "partial": "Alignment Of Global",
          "signature": "TargetDataRef-\u003eValueRef-\u003eCUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:preferredAlignmentOfGlobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Target",
          "name": "preferredAlignmentOfType",
          "package": "llvm-ht",
          "signature": "TargetDataRef -\u003e TypeRef -\u003e CUInt",
          "source": "src/LLVM-FFI-Target.html#preferredAlignmentOfType",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Target",
          "module": "LLVM.FFI.Target",
          "name": "preferredAlignmentOfType",
          "normalized": "TargetDataRef-\u003eTypeRef-\u003eCUInt",
          "package": "llvm-ht",
          "partial": "Alignment Of Type",
          "signature": "TargetDataRef-\u003eTypeRef-\u003eCUInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:preferredAlignmentOfType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Target",
          "name": "sizeOfTypeInBits",
          "package": "llvm-ht",
          "signature": "TargetDataRef -\u003e TypeRef -\u003e CULLong",
          "source": "src/LLVM-FFI-Target.html#sizeOfTypeInBits",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Target",
          "module": "LLVM.FFI.Target",
          "name": "sizeOfTypeInBits",
          "normalized": "TargetDataRef-\u003eTypeRef-\u003eCULLong",
          "package": "llvm-ht",
          "partial": "Of Type In Bits",
          "signature": "TargetDataRef-\u003eTypeRef-\u003eCULLong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:sizeOfTypeInBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Target",
          "name": "storeSizeOfType",
          "package": "llvm-ht",
          "signature": "TargetDataRef -\u003e TypeRef -\u003e CULLong",
          "source": "src/LLVM-FFI-Target.html#storeSizeOfType",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Target",
          "module": "LLVM.FFI.Target",
          "name": "storeSizeOfType",
          "normalized": "TargetDataRef-\u003eTypeRef-\u003eCULLong",
          "package": "llvm-ht",
          "partial": "Size Of Type",
          "signature": "TargetDataRef-\u003eTypeRef-\u003eCULLong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Target.html#v:storeSizeOfType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "IPO",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Transforms-IPO.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms IPO",
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "IPO",
          "package": "llvm-ht",
          "partial": "IPO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "addArgumentPromotionPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-IPO.html#addArgumentPromotionPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms IPO",
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "addArgumentPromotionPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Argument Promotion Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#v:addArgumentPromotionPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "addConstantMergePass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-IPO.html#addConstantMergePass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms IPO",
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "addConstantMergePass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Constant Merge Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#v:addConstantMergePass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "addDeadArgEliminationPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-IPO.html#addDeadArgEliminationPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms IPO",
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "addDeadArgEliminationPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Dead Arg Elimination Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#v:addDeadArgEliminationPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "addDeadTypeEliminationPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-IPO.html#addDeadTypeEliminationPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms IPO",
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "addDeadTypeEliminationPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Dead Type Elimination Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#v:addDeadTypeEliminationPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "addFunctionAttrsPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-IPO.html#addFunctionAttrsPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms IPO",
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "addFunctionAttrsPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Function Attrs Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#v:addFunctionAttrsPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "addFunctionInliningPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-IPO.html#addFunctionInliningPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms IPO",
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "addFunctionInliningPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Function Inlining Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#v:addFunctionInliningPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "addGlobalDCEPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-IPO.html#addGlobalDCEPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms IPO",
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "addGlobalDCEPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Global DCEPass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#v:addGlobalDCEPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "addGlobalOptimizerPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-IPO.html#addGlobalOptimizerPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms IPO",
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "addGlobalOptimizerPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Global Optimizer Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#v:addGlobalOptimizerPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "addIPConstantPropagationPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-IPO.html#addIPConstantPropagationPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms IPO",
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "addIPConstantPropagationPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "IPConstant Propagation Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#v:addIPConstantPropagationPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "addLowerSetJmpPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-IPO.html#addLowerSetJmpPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms IPO",
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "addLowerSetJmpPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Lower Set Jmp Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#v:addLowerSetJmpPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "addPruneEHPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-IPO.html#addPruneEHPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms IPO",
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "addPruneEHPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Prune EHPass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#v:addPruneEHPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "addRaiseAllocationsPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-IPO.html#addRaiseAllocationsPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms IPO",
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "addRaiseAllocationsPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Raise Allocations Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#v:addRaiseAllocationsPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "addStripDeadPrototypesPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-IPO.html#addStripDeadPrototypesPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms IPO",
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "addStripDeadPrototypesPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Strip Dead Prototypes Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#v:addStripDeadPrototypesPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "addStripSymbolsPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-IPO.html#addStripSymbolsPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms IPO",
          "module": "LLVM.FFI.Transforms.IPO",
          "name": "addStripSymbolsPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Strip Symbols Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-IPO.html#v:addStripSymbolsPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "Scalar",
          "package": "llvm-ht",
          "source": "src/LLVM-FFI-Transforms-Scalar.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms Scalar",
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "Scalar",
          "package": "llvm-ht",
          "partial": "Scalar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addAggressiveDCEPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-Scalar.html#addAggressiveDCEPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms Scalar",
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addAggressiveDCEPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Aggressive DCEPass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addAggressiveDCEPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addCFGSimplificationPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-Scalar.html#addCFGSimplificationPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms Scalar",
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addCFGSimplificationPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "CFGSimplification Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addCFGSimplificationPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addCondPropagationPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-Scalar.html#addCondPropagationPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms Scalar",
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addCondPropagationPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Cond Propagation Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addCondPropagationPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addConstantPropagationPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-Scalar.html#addConstantPropagationPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms Scalar",
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addConstantPropagationPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Constant Propagation Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addConstantPropagationPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addDeadStoreEliminationPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-Scalar.html#addDeadStoreEliminationPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms Scalar",
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addDeadStoreEliminationPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Dead Store Elimination Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addDeadStoreEliminationPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addDemoteMemoryToRegisterPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-Scalar.html#addDemoteMemoryToRegisterPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms Scalar",
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addDemoteMemoryToRegisterPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Demote Memory To Register Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addDemoteMemoryToRegisterPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addGVNPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-Scalar.html#addGVNPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms Scalar",
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addGVNPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "GVNPass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addGVNPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addIndVarSimplifyPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-Scalar.html#addIndVarSimplifyPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms Scalar",
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addIndVarSimplifyPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Ind Var Simplify Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addIndVarSimplifyPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addInstructionCombiningPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-Scalar.html#addInstructionCombiningPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms Scalar",
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addInstructionCombiningPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Instruction Combining Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addInstructionCombiningPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addJumpThreadingPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-Scalar.html#addJumpThreadingPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms Scalar",
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addJumpThreadingPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Jump Threading Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addJumpThreadingPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addLICMPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-Scalar.html#addLICMPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms Scalar",
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addLICMPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "LICMPass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addLICMPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addLoopDeletionPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-Scalar.html#addLoopDeletionPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms Scalar",
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addLoopDeletionPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Loop Deletion Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addLoopDeletionPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addLoopIndexSplitPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-Scalar.html#addLoopIndexSplitPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms Scalar",
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addLoopIndexSplitPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Loop Index Split Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addLoopIndexSplitPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addLoopRotatePass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-Scalar.html#addLoopRotatePass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms Scalar",
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addLoopRotatePass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Loop Rotate Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addLoopRotatePass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addLoopUnrollPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-Scalar.html#addLoopUnrollPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms Scalar",
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addLoopUnrollPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Loop Unroll Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addLoopUnrollPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addLoopUnswitchPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-Scalar.html#addLoopUnswitchPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms Scalar",
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addLoopUnswitchPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Loop Unswitch Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addLoopUnswitchPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addMemCpyOptPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-Scalar.html#addMemCpyOptPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms Scalar",
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addMemCpyOptPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Mem Cpy Opt Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addMemCpyOptPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addPromoteMemoryToRegisterPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-Scalar.html#addPromoteMemoryToRegisterPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms Scalar",
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addPromoteMemoryToRegisterPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Promote Memory To Register Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addPromoteMemoryToRegisterPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addReassociatePass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-Scalar.html#addReassociatePass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms Scalar",
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addReassociatePass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Reassociate Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addReassociatePass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addSCCPPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-Scalar.html#addSCCPPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms Scalar",
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addSCCPPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "SCCPPass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addSCCPPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addScalarReplAggregatesPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-Scalar.html#addScalarReplAggregatesPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms Scalar",
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addScalarReplAggregatesPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Scalar Repl Aggregates Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addScalarReplAggregatesPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addSimplifyLibCallsPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-Scalar.html#addSimplifyLibCallsPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms Scalar",
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addSimplifyLibCallsPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Simplify Lib Calls Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addSimplifyLibCallsPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addTailCallEliminationPass",
          "package": "llvm-ht",
          "signature": "PassManagerRef -\u003e IO ()",
          "source": "src/LLVM-FFI-Transforms-Scalar.html#addTailCallEliminationPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM FFI Transforms Scalar",
          "module": "LLVM.FFI.Transforms.Scalar",
          "name": "addTailCallEliminationPass",
          "normalized": "PassManagerRef-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Tail Call Elimination Pass",
          "signature": "PassManagerRef-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-FFI-Transforms-Scalar.html#v:addTailCallEliminationPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Util.Arithmetic",
          "name": "Arithmetic",
          "package": "llvm-ht",
          "source": "src/LLVM-Util-Arithmetic.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "LLVM Util Arithmetic",
          "module": "LLVM.Util.Arithmetic",
          "name": "Arithmetic",
          "package": "llvm-ht",
          "partial": "Arithmetic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Util.Arithmetic",
          "name": "ArithFunction",
          "package": "llvm-ht",
          "source": "src/LLVM-Util-Arithmetic.html#ArithFunction",
          "type": "class"
        },
        "index": {
          "hierarchy": "LLVM Util Arithmetic",
          "module": "LLVM.Util.Arithmetic",
          "name": "ArithFunction",
          "package": "llvm-ht",
          "partial": "Arith Function",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#t:ArithFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Util.Arithmetic",
          "name": "CallIntrinsic",
          "package": "llvm-ht",
          "source": "src/LLVM-Util-Arithmetic.html#CallIntrinsic",
          "type": "class"
        },
        "index": {
          "hierarchy": "LLVM Util Arithmetic",
          "module": "LLVM.Util.Arithmetic",
          "name": "CallIntrinsic",
          "package": "llvm-ht",
          "partial": "Call Intrinsic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#t:CallIntrinsic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Util.Arithmetic",
          "name": "Cmp",
          "package": "llvm-ht",
          "source": "src/LLVM-Util-Arithmetic.html#Cmp",
          "type": "class"
        },
        "index": {
          "hierarchy": "LLVM Util Arithmetic",
          "module": "LLVM.Util.Arithmetic",
          "name": "Cmp",
          "package": "llvm-ht",
          "partial": "Cmp",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#t:Cmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynonym for \u003ccode\u003eCodeGenFunction r (Value a)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LLVM.Util.Arithmetic",
          "name": "TValue",
          "package": "llvm-ht",
          "source": "src/LLVM-Util-Arithmetic.html#TValue",
          "type": "type"
        },
        "index": {
          "description": "Synonym for CodeGenFunction Value",
          "hierarchy": "LLVM Util Arithmetic",
          "module": "LLVM.Util.Arithmetic",
          "name": "TValue",
          "package": "llvm-ht",
          "partial": "TValue",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#t:TValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Util.Arithmetic",
          "name": "UnwrapArgs",
          "package": "llvm-ht",
          "source": "src/LLVM-Util-Arithmetic.html#UnwrapArgs",
          "type": "class"
        },
        "index": {
          "hierarchy": "LLVM Util Arithmetic",
          "module": "LLVM.Util.Arithmetic",
          "name": "UnwrapArgs",
          "package": "llvm-ht",
          "partial": "Unwrap Args",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#t:UnwrapArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazy or.\n\u003c/p\u003e",
          "module": "LLVM.Util.Arithmetic",
          "name": "(%||)",
          "package": "llvm-ht",
          "signature": "TValue r Bool -\u003e TValue r Bool -\u003e TValue r Bool",
          "source": "src/LLVM-Util-Arithmetic.html#%25%7C%7C",
          "type": "function"
        },
        "index": {
          "description": "Lazy or",
          "hierarchy": "LLVM Util Arithmetic",
          "module": "LLVM.Util.Arithmetic",
          "name": "(%||) %||",
          "normalized": "TValue a Bool-\u003eTValue a Bool-\u003eTValue a Bool",
          "package": "llvm-ht",
          "signature": "TValue r Bool-\u003eTValue r Bool-\u003eTValue r Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:-37--124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazy and.\n\u003c/p\u003e",
          "module": "LLVM.Util.Arithmetic",
          "name": "(%&&)",
          "package": "llvm-ht",
          "signature": "TValue r Bool -\u003e TValue r Bool -\u003e TValue r Bool",
          "source": "src/LLVM-Util-Arithmetic.html#%25%26%26",
          "type": "function"
        },
        "index": {
          "description": "Lazy and",
          "hierarchy": "LLVM Util Arithmetic",
          "module": "LLVM.Util.Arithmetic",
          "name": "(%&&) %&&",
          "normalized": "TValue a Bool-\u003eTValue a Bool-\u003eTValue a Bool",
          "package": "llvm-ht",
          "signature": "TValue r Bool-\u003eTValue r Bool-\u003eTValue r Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:-37--38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComparison functions.\n\u003c/p\u003e",
          "module": "LLVM.Util.Arithmetic",
          "name": "(%/=)",
          "package": "llvm-ht",
          "signature": "TValue r a -\u003e TValue r a -\u003e TValue r b",
          "source": "src/LLVM-Util-Arithmetic.html#%25%2F%3D",
          "type": "function"
        },
        "index": {
          "description": "Comparison functions",
          "hierarchy": "LLVM Util Arithmetic",
          "module": "LLVM.Util.Arithmetic",
          "name": "(%/=) %/=",
          "normalized": "TValue a b-\u003eTValue a b-\u003eTValue a c",
          "package": "llvm-ht",
          "signature": "TValue r a-\u003eTValue r a-\u003eTValue r b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:-37--47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Util.Arithmetic",
          "name": "(%\u003c)",
          "package": "llvm-ht",
          "signature": "TValue r a -\u003e TValue r a -\u003e TValue r b",
          "source": "src/LLVM-Util-Arithmetic.html#%25%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Util Arithmetic",
          "module": "LLVM.Util.Arithmetic",
          "name": "(%\u003c) %\u003c",
          "normalized": "TValue a b-\u003eTValue a b-\u003eTValue a c",
          "package": "llvm-ht",
          "signature": "TValue r a-\u003eTValue r a-\u003eTValue r b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:-37--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Util.Arithmetic",
          "name": "(%\u003c=)",
          "package": "llvm-ht",
          "signature": "TValue r a -\u003e TValue r a -\u003e TValue r b",
          "source": "src/LLVM-Util-Arithmetic.html#%25%3C%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Util Arithmetic",
          "module": "LLVM.Util.Arithmetic",
          "name": "(%\u003c=) %\u003c=",
          "normalized": "TValue a b-\u003eTValue a b-\u003eTValue a c",
          "package": "llvm-ht",
          "signature": "TValue r a-\u003eTValue r a-\u003eTValue r b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:-37--60--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Util.Arithmetic",
          "name": "(%==)",
          "package": "llvm-ht",
          "signature": "TValue r a -\u003e TValue r a -\u003e TValue r b",
          "source": "src/LLVM-Util-Arithmetic.html#%25%3D%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Util Arithmetic",
          "module": "LLVM.Util.Arithmetic",
          "name": "(%==) %==",
          "normalized": "TValue a b-\u003eTValue a b-\u003eTValue a c",
          "package": "llvm-ht",
          "signature": "TValue r a-\u003eTValue r a-\u003eTValue r b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:-37--61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Util.Arithmetic",
          "name": "(%\u003e)",
          "package": "llvm-ht",
          "signature": "TValue r a -\u003e TValue r a -\u003e TValue r b",
          "source": "src/LLVM-Util-Arithmetic.html#%25%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Util Arithmetic",
          "module": "LLVM.Util.Arithmetic",
          "name": "(%\u003e) %\u003e",
          "normalized": "TValue a b-\u003eTValue a b-\u003eTValue a c",
          "package": "llvm-ht",
          "signature": "TValue r a-\u003eTValue r a-\u003eTValue r b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:-37--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Util.Arithmetic",
          "name": "(%\u003e=)",
          "package": "llvm-ht",
          "signature": "TValue r a -\u003e TValue r a -\u003e TValue r b",
          "source": "src/LLVM-Util-Arithmetic.html#%25%3E%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Util Arithmetic",
          "module": "LLVM.Util.Arithmetic",
          "name": "(%\u003e=) %\u003e=",
          "normalized": "TValue a b-\u003eTValue a b-\u003eTValue a c",
          "package": "llvm-ht",
          "signature": "TValue r a-\u003eTValue r a-\u003eTValue r b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:-37--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditional, returns first element of the pair when condition is true, otherwise second.\n\u003c/p\u003e",
          "module": "LLVM.Util.Arithmetic",
          "name": "(?)",
          "package": "llvm-ht",
          "signature": "TValue r Bool -\u003e (TValue r a, TValue r a) -\u003e TValue r a",
          "source": "src/LLVM-Util-Arithmetic.html#%3F",
          "type": "function"
        },
        "index": {
          "description": "Conditional returns first element of the pair when condition is true otherwise second",
          "hierarchy": "LLVM Util Arithmetic",
          "module": "LLVM.Util.Arithmetic",
          "name": "(?) ?",
          "normalized": "TValue a Bool-\u003e(TValue a b,TValue a b)-\u003eTValue a b",
          "package": "llvm-ht",
          "signature": "TValue r Bool-\u003e(TValue r a,TValue r a)-\u003eTValue r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:-63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Util.Arithmetic",
          "name": "(??)",
          "package": "llvm-ht",
          "signature": "TValue r b -\u003e (TValue r a, TValue r a) -\u003e TValue r a",
          "source": "src/LLVM-Util-Arithmetic.html#%3F%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Util Arithmetic",
          "module": "LLVM.Util.Arithmetic",
          "name": "(??) ??",
          "normalized": "TValue a b-\u003e(TValue a c,TValue a c)-\u003eTValue a c",
          "package": "llvm-ht",
          "signature": "TValue r b-\u003e(TValue r a,TValue r a)-\u003eTValue r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:-63--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnlift a function with \u003ccode\u003eTValue\u003c/code\u003e to have \u003ccode\u003eValue\u003c/code\u003e arguments.\n\u003c/p\u003e",
          "module": "LLVM.Util.Arithmetic",
          "name": "arithFunction",
          "package": "llvm-ht",
          "signature": "a -\u003e b",
          "source": "src/LLVM-Util-Arithmetic.html#arithFunction",
          "type": "function"
        },
        "index": {
          "description": "Unlift function with TValue to have Value arguments",
          "hierarchy": "LLVM Util Arithmetic",
          "module": "LLVM.Util.Arithmetic",
          "name": "arithFunction",
          "normalized": "a-\u003eb",
          "package": "llvm-ht",
          "partial": "Function",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:arithFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Util.Arithmetic",
          "name": "cmp",
          "package": "llvm-ht",
          "signature": "IntPredicate -\u003e Value a -\u003e Value a -\u003e TValue r b",
          "source": "src/LLVM-Util-Arithmetic.html#cmp",
          "type": "method"
        },
        "index": {
          "hierarchy": "LLVM Util Arithmetic",
          "module": "LLVM.Util.Arithmetic",
          "name": "cmp",
          "normalized": "IntPredicate-\u003eValue a-\u003eValue a-\u003eTValue b c",
          "package": "llvm-ht",
          "signature": "IntPredicate-\u003eValue a-\u003eValue a-\u003eTValue r b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:cmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a recursive \u003ccode\u003e\u003ca\u003earithFunction\u003c/a\u003e\u003c/code\u003e, gets pased itself as the first argument.\n\u003c/p\u003e",
          "module": "LLVM.Util.Arithmetic",
          "name": "recursiveFunction",
          "package": "llvm-ht",
          "signature": "(a11 -\u003e a3) -\u003e CodeGenModule (Function a)",
          "source": "src/LLVM-Util-Arithmetic.html#recursiveFunction",
          "type": "function"
        },
        "index": {
          "description": "Define recursive arithFunction gets pased itself as the first argument",
          "hierarchy": "LLVM Util Arithmetic",
          "module": "LLVM.Util.Arithmetic",
          "name": "recursiveFunction",
          "normalized": "(a-\u003ea)-\u003eCodeGenModule(Function a)",
          "package": "llvm-ht",
          "partial": "Function",
          "signature": "(a-\u003ea)-\u003eCodeGenModule(Function a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:recursiveFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a value from an \u003ccode\u003e\u003ca\u003earithFunction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "LLVM.Util.Arithmetic",
          "name": "retrn",
          "package": "llvm-ht",
          "signature": "TValue r a -\u003e CodeGenFunction r ()",
          "source": "src/LLVM-Util-Arithmetic.html#retrn",
          "type": "function"
        },
        "index": {
          "description": "Return value from an arithFunction",
          "hierarchy": "LLVM Util Arithmetic",
          "module": "LLVM.Util.Arithmetic",
          "name": "retrn",
          "normalized": "TValue a b-\u003eCodeGenFunction a()",
          "package": "llvm-ht",
          "signature": "TValue r a-\u003eCodeGenFunction r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:retrn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse \u003ccode\u003ex \u003c- set $ ...\u003c/code\u003e to make a binding.\n\u003c/p\u003e",
          "module": "LLVM.Util.Arithmetic",
          "name": "set",
          "package": "llvm-ht",
          "signature": "TValue r a -\u003e CodeGenFunction r (TValue r a)",
          "source": "src/LLVM-Util-Arithmetic.html#set",
          "type": "function"
        },
        "index": {
          "description": "Use set to make binding",
          "hierarchy": "LLVM Util Arithmetic",
          "module": "LLVM.Util.Arithmetic",
          "name": "set",
          "normalized": "TValue a b-\u003eCodeGenFunction a(TValue a b)",
          "package": "llvm-ht",
          "signature": "TValue r a-\u003eCodeGenFunction r(TValue r a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a function from having \u003ccode\u003eValue\u003c/code\u003e arguments to having \u003ccode\u003eTValue\u003c/code\u003e arguments.\n\u003c/p\u003e",
          "module": "LLVM.Util.Arithmetic",
          "name": "toArithFunction",
          "package": "llvm-ht",
          "signature": "Function f -\u003e a",
          "source": "src/LLVM-Util-Arithmetic.html#toArithFunction",
          "type": "function"
        },
        "index": {
          "description": "Lift function from having Value arguments to having TValue arguments",
          "hierarchy": "LLVM Util Arithmetic",
          "module": "LLVM.Util.Arithmetic",
          "name": "toArithFunction",
          "normalized": "Function a-\u003eb",
          "package": "llvm-ht",
          "partial": "Arith Function",
          "signature": "Function f-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Arithmetic.html#v:toArithFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Util.File",
          "name": "File",
          "package": "llvm-ht",
          "source": "src/LLVM-Util-File.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "LLVM Util File",
          "module": "LLVM.Util.File",
          "name": "File",
          "package": "llvm-ht",
          "partial": "File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-File.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Util.File",
          "name": "optimizeFunction",
          "package": "llvm-ht",
          "signature": "CodeGenModule (Function t) -\u003e IO (Function t)",
          "source": "src/LLVM-Util-File.html#optimizeFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Util File",
          "module": "LLVM.Util.File",
          "name": "optimizeFunction",
          "normalized": "CodeGenModule(Function a)-\u003eIO(Function a)",
          "package": "llvm-ht",
          "partial": "Function",
          "signature": "CodeGenModule(Function t)-\u003eIO(Function t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-File.html#v:optimizeFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Util.File",
          "name": "optimizeFunctionCG",
          "package": "llvm-ht",
          "signature": "CodeGenModule (Function t) -\u003e IO t",
          "source": "src/LLVM-Util-File.html#optimizeFunctionCG",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Util File",
          "module": "LLVM.Util.File",
          "name": "optimizeFunctionCG",
          "normalized": "CodeGenModule(Function a)-\u003eIO a",
          "package": "llvm-ht",
          "partial": "Function CG",
          "signature": "CodeGenModule(Function t)-\u003eIO t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-File.html#v:optimizeFunctionCG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Util.File",
          "name": "writeCodeGenModule",
          "package": "llvm-ht",
          "signature": "String -\u003e CodeGenModule a -\u003e IO ()",
          "source": "src/LLVM-Util-File.html#writeCodeGenModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Util File",
          "module": "LLVM.Util.File",
          "name": "writeCodeGenModule",
          "normalized": "String-\u003eCodeGenModule a-\u003eIO()",
          "package": "llvm-ht",
          "partial": "Code Gen Module",
          "signature": "String-\u003eCodeGenModule a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-File.html#v:writeCodeGenModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Util.Foreign",
          "name": "Foreign",
          "package": "llvm-ht",
          "source": "src/LLVM-Util-Foreign.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "LLVM Util Foreign",
          "module": "LLVM.Util.Foreign",
          "name": "Foreign",
          "package": "llvm-ht",
          "partial": "Foreign",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Foreign.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Util.Foreign",
          "name": "alloca",
          "package": "llvm-ht",
          "signature": "(Ptr a -\u003e IO b) -\u003e IO b",
          "source": "src/LLVM-Util-Foreign.html#alloca",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Util Foreign",
          "module": "LLVM.Util.Foreign",
          "name": "alloca",
          "normalized": "(Ptr a-\u003eIO b)-\u003eIO b",
          "package": "llvm-ht",
          "signature": "(Ptr a-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Foreign.html#v:alloca"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Util.Foreign",
          "name": "with",
          "package": "llvm-ht",
          "signature": "a -\u003e (Ptr a -\u003e IO b) -\u003e IO b",
          "source": "src/LLVM-Util-Foreign.html#with",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Util Foreign",
          "module": "LLVM.Util.Foreign",
          "name": "with",
          "normalized": "a-\u003e(Ptr a-\u003eIO b)-\u003eIO b",
          "package": "llvm-ht",
          "signature": "a-\u003e(Ptr a-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Foreign.html#v:with"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Util.Foreign",
          "name": "withArrayLen",
          "package": "llvm-ht",
          "signature": "[a] -\u003e (Int -\u003e Ptr a -\u003e IO b) -\u003e IO b",
          "source": "src/LLVM-Util-Foreign.html#withArrayLen",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Util Foreign",
          "module": "LLVM.Util.Foreign",
          "name": "withArrayLen",
          "normalized": "[a]-\u003e(Int-\u003ePtr a-\u003eIO b)-\u003eIO b",
          "package": "llvm-ht",
          "partial": "Array Len",
          "signature": "[a]-\u003e(Int-\u003ePtr a-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Foreign.html#v:withArrayLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Util.Loop",
          "name": "Loop",
          "package": "llvm-ht",
          "source": "src/LLVM-Util-Loop.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "LLVM Util Loop",
          "module": "LLVM.Util.Loop",
          "name": "Loop",
          "package": "llvm-ht",
          "partial": "Loop",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Loop.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Util.Loop",
          "name": "Phi",
          "package": "llvm-ht",
          "source": "src/LLVM-Util-Loop.html#Phi",
          "type": "class"
        },
        "index": {
          "hierarchy": "LLVM Util Loop",
          "module": "LLVM.Util.Loop",
          "name": "Phi",
          "package": "llvm-ht",
          "partial": "Phi",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Loop.html#t:Phi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Util.Loop",
          "name": "addPhis",
          "package": "llvm-ht",
          "signature": "BasicBlock -\u003e a -\u003e a -\u003e CodeGenFunction r ()",
          "source": "src/LLVM-Util-Loop.html#addPhis",
          "type": "method"
        },
        "index": {
          "hierarchy": "LLVM Util Loop",
          "module": "LLVM.Util.Loop",
          "name": "addPhis",
          "normalized": "BasicBlock-\u003ea-\u003ea-\u003eCodeGenFunction b()",
          "package": "llvm-ht",
          "partial": "Phis",
          "signature": "BasicBlock-\u003ea-\u003ea-\u003eCodeGenFunction r()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Loop.html#v:addPhis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Util.Loop",
          "name": "forLoop",
          "package": "llvm-ht",
          "signature": "Value i -\u003e Value i -\u003e a -\u003e (Value i -\u003e a -\u003e CodeGenFunction r a) -\u003e CodeGenFunction r a",
          "source": "src/LLVM-Util-Loop.html#forLoop",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Util Loop",
          "module": "LLVM.Util.Loop",
          "name": "forLoop",
          "normalized": "Value a-\u003eValue a-\u003eb-\u003e(Value a-\u003eb-\u003eCodeGenFunction c b)-\u003eCodeGenFunction c b",
          "package": "llvm-ht",
          "partial": "Loop",
          "signature": "Value i-\u003eValue i-\u003ea-\u003e(Value i-\u003ea-\u003eCodeGenFunction r a)-\u003eCodeGenFunction r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Loop.html#v:forLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Util.Loop",
          "name": "mapVector",
          "package": "llvm-ht",
          "signature": "(Value a -\u003e CodeGenFunction r (Value b)) -\u003e Value (Vector n a) -\u003e CodeGenFunction r (Value (Vector n b))",
          "source": "src/LLVM-Util-Loop.html#mapVector",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Util Loop",
          "module": "LLVM.Util.Loop",
          "name": "mapVector",
          "normalized": "(Value a-\u003eCodeGenFunction b(Value c))-\u003eValue(Vector d a)-\u003eCodeGenFunction b(Value(Vector d c))",
          "package": "llvm-ht",
          "partial": "Vector",
          "signature": "(Value a-\u003eCodeGenFunction r(Value b))-\u003eValue(Vector n a)-\u003eCodeGenFunction r(Value(Vector n b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Loop.html#v:mapVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Util.Loop",
          "name": "mapVector2",
          "package": "llvm-ht",
          "signature": "(Value a -\u003e Value b -\u003e CodeGenFunction r (Value c)) -\u003e Value (Vector n a) -\u003e Value (Vector n b) -\u003e CodeGenFunction r (Value (Vector n c))",
          "source": "src/LLVM-Util-Loop.html#mapVector2",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Util Loop",
          "module": "LLVM.Util.Loop",
          "name": "mapVector2",
          "normalized": "(Value a-\u003eValue b-\u003eCodeGenFunction c(Value d))-\u003eValue(Vector e a)-\u003eValue(Vector e b)-\u003eCodeGenFunction c(Value(Vector e d))",
          "package": "llvm-ht",
          "partial": "Vector",
          "signature": "(Value a-\u003eValue b-\u003eCodeGenFunction r(Value c))-\u003eValue(Vector n a)-\u003eValue(Vector n b)-\u003eCodeGenFunction r(Value(Vector n c))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Loop.html#v:mapVector2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Util.Loop",
          "name": "phis",
          "package": "llvm-ht",
          "signature": "BasicBlock -\u003e a -\u003e CodeGenFunction r a",
          "source": "src/LLVM-Util-Loop.html#phis",
          "type": "method"
        },
        "index": {
          "hierarchy": "LLVM Util Loop",
          "module": "LLVM.Util.Loop",
          "name": "phis",
          "normalized": "BasicBlock-\u003ea-\u003eCodeGenFunction b a",
          "package": "llvm-ht",
          "signature": "BasicBlock-\u003ea-\u003eCodeGenFunction r a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Loop.html#v:phis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Util.Optimize",
          "name": "Optimize",
          "package": "llvm-ht",
          "source": "src/LLVM-Util-Optimize.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "LLVM Util Optimize",
          "module": "LLVM.Util.Optimize",
          "name": "Optimize",
          "package": "llvm-ht",
          "partial": "Optimize",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Optimize.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.Util.Optimize",
          "name": "optimizeModule",
          "package": "llvm-ht",
          "signature": "Int -\u003e Module -\u003e IO Int",
          "source": "src/LLVM-Util-Optimize.html#optimizeModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM Util Optimize",
          "module": "LLVM.Util.Optimize",
          "name": "optimizeModule",
          "normalized": "Int-\u003eModule-\u003eIO Int",
          "package": "llvm-ht",
          "partial": "Module",
          "signature": "Int-\u003eModule-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-ht/docs/LLVM-Util-Optimize.html#v:optimizeModule"
      }
    }
  ]
]