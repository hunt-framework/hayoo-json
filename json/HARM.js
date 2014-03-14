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
        "word": "HARM"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Arm",
          "name": "Arm",
          "package": "HARM",
          "source": "src/Arm-Arm.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Arm Arm",
          "module": "Arm.Arm",
          "name": "Arm",
          "package": "HARM",
          "partial": "Arm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Arm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Arm",
          "name": "dbg",
          "package": "HARM",
          "signature": "String -\u003e IO ()",
          "source": "src/Arm-Arm.html#dbg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Arm",
          "module": "Arm.Arm",
          "name": "dbg",
          "normalized": "String-\u003eIO()",
          "package": "HARM",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Arm.html#v:dbg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Arm",
          "name": "run",
          "package": "HARM",
          "signature": "String -\u003e IO ()",
          "source": "src/Arm-Arm.html#run",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Arm",
          "module": "Arm.Arm",
          "name": "run",
          "normalized": "String-\u003eIO()",
          "package": "HARM",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Arm.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Assembler",
          "name": "Assembler",
          "package": "HARM",
          "source": "src/Arm-Assembler.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Arm Assembler",
          "module": "Arm.Assembler",
          "name": "Assembler",
          "package": "HARM",
          "partial": "Assembler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Assembler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Assembler",
          "name": "AsmResult",
          "package": "HARM",
          "source": "src/Arm-Assembler.html#AsmResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Arm Assembler",
          "module": "Arm.Assembler",
          "name": "AsmResult",
          "package": "HARM",
          "partial": "Asm Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Assembler.html#t:AsmResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Assembler",
          "name": "Err",
          "package": "HARM",
          "signature": "Err String",
          "source": "src/Arm-Assembler.html#AsmResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Assembler",
          "module": "Arm.Assembler",
          "name": "Err",
          "package": "HARM",
          "partial": "Err",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Assembler.html#v:Err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Assembler",
          "name": "Res",
          "package": "HARM",
          "signature": "Res Program",
          "source": "src/Arm-Assembler.html#AsmResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Assembler",
          "module": "Arm.Assembler",
          "name": "Res",
          "package": "HARM",
          "partial": "Res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Assembler.html#v:Res"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Assembler",
          "name": "asmFile",
          "package": "HARM",
          "signature": "String -\u003e IO (Either Program String)",
          "source": "src/Arm-Assembler.html#asmFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Assembler",
          "module": "Arm.Assembler",
          "name": "asmFile",
          "normalized": "String-\u003eIO(Either Program String)",
          "package": "HARM",
          "partial": "File",
          "signature": "String-\u003eIO(Either Program String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Assembler.html#v:asmFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Assembler",
          "name": "asmString",
          "package": "HARM",
          "signature": "String -\u003e Either Program String",
          "source": "src/Arm-Assembler.html#asmString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Assembler",
          "module": "Arm.Assembler",
          "name": "asmString",
          "normalized": "String-\u003eEither Program String",
          "package": "HARM",
          "partial": "String",
          "signature": "String-\u003eEither Program String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Assembler.html#v:asmString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Assembler",
          "name": "lines'",
          "package": "HARM",
          "signature": "String -\u003e [String]",
          "source": "src/Arm-Assembler.html#lines%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Assembler",
          "module": "Arm.Assembler",
          "name": "lines'",
          "normalized": "String-\u003e[String]",
          "package": "HARM",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Assembler.html#v:lines-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Assembler",
          "name": "replaceSymbols",
          "package": "HARM",
          "signature": "[ParseElement] -\u003e Int -\u003e Word32 -\u003e [(String, Word32)] -\u003e Word32 -\u003e [(RegisterName, Word32)] -\u003e [Instruction] -\u003e [(Word32, Constant)] -\u003e Program",
          "source": "src/Arm-Assembler.html#replaceSymbols",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Assembler",
          "module": "Arm.Assembler",
          "name": "replaceSymbols",
          "normalized": "[ParseElement]-\u003eInt-\u003eWord-\u003e[(String,Word)]-\u003eWord-\u003e[(RegisterName,Word)]-\u003e[Instruction]-\u003e[(Word,Constant)]-\u003eProgram",
          "package": "HARM",
          "partial": "Symbols",
          "signature": "[ParseElement]-\u003eInt-\u003eWord-\u003e[(String,Word)]-\u003eWord-\u003e[(RegisterName,Word)]-\u003e[Instruction]-\u003e[(Word,Constant)]-\u003eProgram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Assembler.html#v:replaceSymbols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Assembler",
          "name": "resolveSymbols",
          "package": "HARM",
          "signature": "Word32 -\u003e [ParseElement] -\u003e [(String, Word32)]",
          "source": "src/Arm-Assembler.html#resolveSymbols",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Assembler",
          "module": "Arm.Assembler",
          "name": "resolveSymbols",
          "normalized": "Word-\u003e[ParseElement]-\u003e[(String,Word)]",
          "package": "HARM",
          "partial": "Symbols",
          "signature": "Word-\u003e[ParseElement]-\u003e[(String,Word)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Assembler.html#v:resolveSymbols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.BinaryNumber",
          "name": "BinaryNumber",
          "package": "HARM",
          "source": "src/Arm-BinaryNumber.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Arm BinaryNumber",
          "module": "Arm.BinaryNumber",
          "name": "BinaryNumber",
          "package": "HARM",
          "partial": "Binary Number",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-BinaryNumber.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.BinaryNumber",
          "name": "Binary32",
          "package": "HARM",
          "source": "src/Arm-BinaryNumber.html#Binary32",
          "type": "data"
        },
        "index": {
          "hierarchy": "Arm BinaryNumber",
          "module": "Arm.BinaryNumber",
          "name": "Binary32",
          "package": "HARM",
          "partial": "Binary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-BinaryNumber.html#t:Binary32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.BinaryNumber",
          "name": "binary32ToInt",
          "package": "HARM",
          "signature": "Binary32 -\u003e Int",
          "source": "src/Arm-BinaryNumber.html#binary32ToInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm BinaryNumber",
          "module": "Arm.BinaryNumber",
          "name": "binary32ToInt",
          "normalized": "Binary-\u003eInt",
          "package": "HARM",
          "partial": "To Int",
          "signature": "Binary-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-BinaryNumber.html#v:binary32ToInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.BinaryNumber",
          "name": "binary32ToWord32",
          "package": "HARM",
          "signature": "Binary32 -\u003e Word32",
          "source": "src/Arm-BinaryNumber.html#binary32ToWord32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm BinaryNumber",
          "module": "Arm.BinaryNumber",
          "name": "binary32ToWord32",
          "normalized": "Binary-\u003eWord",
          "package": "HARM",
          "partial": "To Word",
          "signature": "Binary-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-BinaryNumber.html#v:binary32ToWord32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.BinaryNumber",
          "name": "intToBinary32",
          "package": "HARM",
          "signature": "Int -\u003e Binary32",
          "source": "src/Arm-BinaryNumber.html#intToBinary32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm BinaryNumber",
          "module": "Arm.BinaryNumber",
          "name": "intToBinary32",
          "normalized": "Int-\u003eBinary",
          "package": "HARM",
          "partial": "To Binary",
          "signature": "Int-\u003eBinary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-BinaryNumber.html#v:intToBinary32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.BinaryNumber",
          "name": "word32ToBinary32",
          "package": "HARM",
          "signature": "Word32 -\u003e Binary32",
          "source": "src/Arm-BinaryNumber.html#word32ToBinary32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm BinaryNumber",
          "module": "Arm.BinaryNumber",
          "name": "word32ToBinary32",
          "normalized": "Word-\u003eBinary",
          "package": "HARM",
          "partial": "To Binary",
          "signature": "Word-\u003eBinary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-BinaryNumber.html#v:word32ToBinary32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.CPU",
          "name": "CPU",
          "package": "HARM",
          "source": "src/Arm-CPU.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Arm CPU",
          "module": "Arm.CPU",
          "name": "CPU",
          "package": "HARM",
          "partial": "CPU",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-CPU.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.CPU",
          "name": "CPU",
          "package": "HARM",
          "source": "src/Arm-CPU.html#CPU",
          "type": "data"
        },
        "index": {
          "hierarchy": "Arm CPU",
          "module": "Arm.CPU",
          "name": "CPU",
          "package": "HARM",
          "partial": "CPU",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-CPU.html#t:CPU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.CPU",
          "name": "CPU",
          "package": "HARM",
          "signature": "CPU",
          "source": "src/Arm-CPU.html#CPU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm CPU",
          "module": "Arm.CPU",
          "name": "CPU",
          "package": "HARM",
          "partial": "CPU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-CPU.html#v:CPU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.CPU",
          "name": "debug",
          "package": "HARM",
          "signature": "IORef Bool",
          "source": "src/Arm-CPU.html#CPU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm CPU",
          "module": "Arm.CPU",
          "name": "debug",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-CPU.html#v:debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.CPU",
          "name": "emptyCPU",
          "package": "HARM",
          "signature": "Address -\u003e IO CPU",
          "source": "src/Arm-CPU.html#emptyCPU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm CPU",
          "module": "Arm.CPU",
          "name": "emptyCPU",
          "normalized": "Address-\u003eIO CPU",
          "package": "HARM",
          "partial": "CPU",
          "signature": "Address-\u003eIO CPU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-CPU.html#v:emptyCPU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.CPU",
          "name": "memory",
          "package": "HARM",
          "signature": "Memory",
          "source": "src/Arm-CPU.html#CPU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm CPU",
          "module": "Arm.CPU",
          "name": "memory",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-CPU.html#v:memory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.CPU",
          "name": "registers",
          "package": "HARM",
          "signature": "Registers",
          "source": "src/Arm-CPU.html#CPU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm CPU",
          "module": "Arm.CPU",
          "name": "registers",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-CPU.html#v:registers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.CPU",
          "name": "running",
          "package": "HARM",
          "signature": "IORef Bool",
          "source": "src/Arm-CPU.html#CPU",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm CPU",
          "module": "Arm.CPU",
          "name": "running",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-CPU.html#v:running"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Debugger",
          "name": "Debugger",
          "package": "HARM",
          "source": "src/Arm-Debugger.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Arm Debugger",
          "module": "Arm.Debugger",
          "name": "Debugger",
          "package": "HARM",
          "partial": "Debugger",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Debugger.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Debugger",
          "name": "DebugState",
          "package": "HARM",
          "source": "src/Arm-Debugger.html#DebugState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Arm Debugger",
          "module": "Arm.Debugger",
          "name": "DebugState",
          "package": "HARM",
          "partial": "Debug State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Debugger.html#t:DebugState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Debugger",
          "name": "Debug",
          "package": "HARM",
          "signature": "Debug",
          "source": "src/Arm-Debugger.html#DebugState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Debugger",
          "module": "Arm.Debugger",
          "name": "Debug",
          "package": "HARM",
          "partial": "Debug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Debugger.html#v:Debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Debugger",
          "name": "addBreakpoint",
          "package": "HARM",
          "signature": "DebugState -\u003e IO DebugState",
          "source": "src/Arm-Debugger.html#addBreakpoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Debugger",
          "module": "Arm.Debugger",
          "name": "addBreakpoint",
          "normalized": "DebugState-\u003eIO DebugState",
          "package": "HARM",
          "partial": "Breakpoint",
          "signature": "DebugState-\u003eIO DebugState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Debugger.html#v:addBreakpoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Debugger",
          "name": "bkpts",
          "package": "HARM",
          "signature": "[Address]",
          "source": "src/Arm-Debugger.html#DebugState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Debugger",
          "module": "Arm.Debugger",
          "name": "bkpts",
          "normalized": "[Address]",
          "package": "HARM",
          "signature": "[Address]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Debugger.html#v:bkpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Debugger",
          "name": "dbg",
          "package": "HARM",
          "signature": "Program -\u003e IO ()",
          "source": "src/Arm-Debugger.html#dbg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Debugger",
          "module": "Arm.Debugger",
          "name": "dbg",
          "normalized": "Program-\u003eIO()",
          "package": "HARM",
          "signature": "Program-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Debugger.html#v:dbg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Debugger",
          "name": "radix",
          "package": "HARM",
          "signature": "Radix",
          "source": "src/Arm-Debugger.html#DebugState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Debugger",
          "module": "Arm.Debugger",
          "name": "radix",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Debugger.html#v:radix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Debugger",
          "name": "showHelp",
          "package": "HARM",
          "signature": "IO ()",
          "source": "src/Arm-Debugger.html#showHelp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Debugger",
          "module": "Arm.Debugger",
          "name": "showHelp",
          "normalized": "IO()",
          "package": "HARM",
          "partial": "Help",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Debugger.html#v:showHelp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Debugger",
          "name": "showInstruction",
          "package": "HARM",
          "signature": "Radix -\u003e Memory -\u003e Bool -\u003e Address -\u003e IO ()",
          "source": "src/Arm-Debugger.html#showInstruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Debugger",
          "module": "Arm.Debugger",
          "name": "showInstruction",
          "normalized": "Radix-\u003eMemory-\u003eBool-\u003eAddress-\u003eIO()",
          "package": "HARM",
          "partial": "Instruction",
          "signature": "Radix-\u003eMemory-\u003eBool-\u003eAddress-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Debugger.html#v:showInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Debugger",
          "name": "showMem",
          "package": "HARM",
          "signature": "Radix -\u003e CPU -\u003e IO ()",
          "source": "src/Arm-Debugger.html#showMem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Debugger",
          "module": "Arm.Debugger",
          "name": "showMem",
          "normalized": "Radix-\u003eCPU-\u003eIO()",
          "package": "HARM",
          "partial": "Mem",
          "signature": "Radix-\u003eCPU-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Debugger.html#v:showMem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Debugger",
          "name": "showRegs",
          "package": "HARM",
          "signature": "Radix -\u003e CPU -\u003e IO ()",
          "source": "src/Arm-Debugger.html#showRegs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Debugger",
          "module": "Arm.Debugger",
          "name": "showRegs",
          "normalized": "Radix-\u003eCPU-\u003eIO()",
          "package": "HARM",
          "partial": "Regs",
          "signature": "Radix-\u003eCPU-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Debugger.html#v:showRegs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Decoder",
          "name": "Decoder",
          "package": "HARM",
          "source": "src/Arm-Decoder.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Arm Decoder",
          "module": "Arm.Decoder",
          "name": "Decoder",
          "package": "HARM",
          "partial": "Decoder",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Decoder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Decoder",
          "name": "decode",
          "package": "HARM",
          "signature": "Word32 -\u003e Maybe Instruction",
          "source": "src/Arm-Decoder.html#decode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Decoder",
          "module": "Arm.Decoder",
          "name": "decode",
          "normalized": "Word-\u003eMaybe Instruction",
          "package": "HARM",
          "signature": "Word-\u003eMaybe Instruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Decoder.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Encoder",
          "name": "Encoder",
          "package": "HARM",
          "source": "src/Arm-Encoder.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Arm Encoder",
          "module": "Arm.Encoder",
          "name": "Encoder",
          "package": "HARM",
          "partial": "Encoder",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Encoder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Encoder",
          "name": "encode",
          "package": "HARM",
          "signature": "Instruction -\u003e Word32",
          "source": "src/Arm-Encoder.html#encode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Encoder",
          "module": "Arm.Encoder",
          "name": "encode",
          "normalized": "Instruction-\u003eWord",
          "package": "HARM",
          "signature": "Instruction-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Encoder.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ExecutionUnit",
          "name": "ExecutionUnit",
          "package": "HARM",
          "source": "src/Arm-ExecutionUnit.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Arm ExecutionUnit",
          "module": "Arm.ExecutionUnit",
          "name": "ExecutionUnit",
          "package": "HARM",
          "partial": "Execution Unit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ExecutionUnit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ExecutionUnit",
          "name": "eval",
          "package": "HARM",
          "signature": "CPU -\u003e Instruction -\u003e IO ()",
          "source": "src/Arm-ExecutionUnit.html#eval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ExecutionUnit",
          "module": "Arm.ExecutionUnit",
          "name": "eval",
          "normalized": "CPU-\u003eInstruction-\u003eIO()",
          "package": "HARM",
          "signature": "CPU-\u003eInstruction-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ExecutionUnit.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ExecutionUnit",
          "name": "run",
          "package": "HARM",
          "signature": "Program -\u003e IO ()",
          "source": "src/Arm-ExecutionUnit.html#run",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ExecutionUnit",
          "module": "Arm.ExecutionUnit",
          "name": "run",
          "normalized": "Program-\u003eIO()",
          "package": "HARM",
          "signature": "Program-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ExecutionUnit.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ExecutionUnit",
          "name": "run'",
          "package": "HARM",
          "signature": "CPU -\u003e IO ()",
          "source": "src/Arm-ExecutionUnit.html#run%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ExecutionUnit",
          "module": "Arm.ExecutionUnit",
          "name": "run'",
          "normalized": "CPU-\u003eIO()",
          "package": "HARM",
          "signature": "CPU-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ExecutionUnit.html#v:run-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ExecutionUnit",
          "name": "singleStep",
          "package": "HARM",
          "signature": "CPU -\u003e IO ()",
          "source": "src/Arm-ExecutionUnit.html#singleStep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ExecutionUnit",
          "module": "Arm.ExecutionUnit",
          "name": "singleStep",
          "normalized": "CPU-\u003eIO()",
          "package": "HARM",
          "partial": "Step",
          "signature": "CPU-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ExecutionUnit.html#v:singleStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Format",
          "name": "Format",
          "package": "HARM",
          "source": "src/Arm-Format.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Arm Format",
          "module": "Arm.Format",
          "name": "Format",
          "package": "HARM",
          "partial": "Format",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Format.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Format",
          "name": "Radix",
          "package": "HARM",
          "source": "src/Arm-Format.html#Radix",
          "type": "data"
        },
        "index": {
          "hierarchy": "Arm Format",
          "module": "Arm.Format",
          "name": "Radix",
          "package": "HARM",
          "partial": "Radix",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Format.html#t:Radix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Format",
          "name": "Dec",
          "package": "HARM",
          "signature": "Dec",
          "source": "src/Arm-Format.html#Radix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Format",
          "module": "Arm.Format",
          "name": "Dec",
          "package": "HARM",
          "partial": "Dec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Format.html#v:Dec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Format",
          "name": "Hex",
          "package": "HARM",
          "signature": "Hex",
          "source": "src/Arm-Format.html#Radix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Format",
          "module": "Arm.Format",
          "name": "Hex",
          "package": "HARM",
          "partial": "Hex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Format.html#v:Hex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Format",
          "name": "formatDec",
          "package": "HARM",
          "signature": "Int -\u003e Char -\u003e Word32 -\u003e String",
          "source": "src/Arm-Format.html#formatDec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Format",
          "module": "Arm.Format",
          "name": "formatDec",
          "normalized": "Int-\u003eChar-\u003eWord-\u003eString",
          "package": "HARM",
          "partial": "Dec",
          "signature": "Int-\u003eChar-\u003eWord-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Format.html#v:formatDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Format",
          "name": "formatHex",
          "package": "HARM",
          "signature": "Int -\u003e Char -\u003e String -\u003e Word32 -\u003e String",
          "source": "src/Arm-Format.html#formatHex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Format",
          "module": "Arm.Format",
          "name": "formatHex",
          "normalized": "Int-\u003eChar-\u003eString-\u003eWord-\u003eString",
          "package": "HARM",
          "partial": "Hex",
          "signature": "Int-\u003eChar-\u003eString-\u003eWord-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Format.html#v:formatHex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Format",
          "name": "hexChars",
          "package": "HARM",
          "signature": "Array Word32 Char",
          "source": "src/Arm-Format.html#hexChars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Format",
          "module": "Arm.Format",
          "name": "hexChars",
          "package": "HARM",
          "partial": "Chars",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Format.html#v:hexChars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Instruction",
          "name": "Instruction",
          "package": "HARM",
          "source": "src/Arm-Instruction.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Arm Instruction",
          "module": "Arm.Instruction",
          "name": "Instruction",
          "package": "HARM",
          "partial": "Instruction",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Instruction.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Instruction",
          "name": "Instruction",
          "package": "HARM",
          "source": "src/Arm-Instruction.html#Instruction",
          "type": "data"
        },
        "index": {
          "hierarchy": "Arm Instruction",
          "module": "Arm.Instruction",
          "name": "Instruction",
          "package": "HARM",
          "partial": "Instruction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Instruction.html#t:Instruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Instruction",
          "name": "Add",
          "package": "HARM",
          "signature": "Add Operand Operand Operand",
          "source": "src/Arm-Instruction.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Instruction",
          "module": "Arm.Instruction",
          "name": "Add",
          "package": "HARM",
          "partial": "Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Instruction.html#v:Add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Instruction",
          "name": "And",
          "package": "HARM",
          "signature": "And Operand Operand Operand",
          "source": "src/Arm-Instruction.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Instruction",
          "module": "Arm.Instruction",
          "name": "And",
          "package": "HARM",
          "partial": "And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Instruction.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Instruction",
          "name": "B",
          "package": "HARM",
          "signature": "B Operand",
          "source": "src/Arm-Instruction.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Instruction",
          "module": "Arm.Instruction",
          "name": "B",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Instruction.html#v:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Instruction",
          "name": "Beq",
          "package": "HARM",
          "signature": "Beq Operand",
          "source": "src/Arm-Instruction.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Instruction",
          "module": "Arm.Instruction",
          "name": "Beq",
          "package": "HARM",
          "partial": "Beq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Instruction.html#v:Beq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Instruction",
          "name": "Bgt",
          "package": "HARM",
          "signature": "Bgt Operand",
          "source": "src/Arm-Instruction.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Instruction",
          "module": "Arm.Instruction",
          "name": "Bgt",
          "package": "HARM",
          "partial": "Bgt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Instruction.html#v:Bgt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Instruction",
          "name": "Bic",
          "package": "HARM",
          "signature": "Bic Operand Operand Operand",
          "source": "src/Arm-Instruction.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Instruction",
          "module": "Arm.Instruction",
          "name": "Bic",
          "package": "HARM",
          "partial": "Bic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Instruction.html#v:Bic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Instruction",
          "name": "Bl",
          "package": "HARM",
          "signature": "Bl Operand",
          "source": "src/Arm-Instruction.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Instruction",
          "module": "Arm.Instruction",
          "name": "Bl",
          "package": "HARM",
          "partial": "Bl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Instruction.html#v:Bl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Instruction",
          "name": "Blt",
          "package": "HARM",
          "signature": "Blt Operand",
          "source": "src/Arm-Instruction.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Instruction",
          "module": "Arm.Instruction",
          "name": "Blt",
          "package": "HARM",
          "partial": "Blt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Instruction.html#v:Blt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Instruction",
          "name": "Bne",
          "package": "HARM",
          "signature": "Bne Operand",
          "source": "src/Arm-Instruction.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Instruction",
          "module": "Arm.Instruction",
          "name": "Bne",
          "package": "HARM",
          "partial": "Bne",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Instruction.html#v:Bne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Instruction",
          "name": "Cmp",
          "package": "HARM",
          "signature": "Cmp Operand Operand",
          "source": "src/Arm-Instruction.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Instruction",
          "module": "Arm.Instruction",
          "name": "Cmp",
          "package": "HARM",
          "partial": "Cmp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Instruction.html#v:Cmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Instruction",
          "name": "Eor",
          "package": "HARM",
          "signature": "Eor Operand Operand Operand",
          "source": "src/Arm-Instruction.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Instruction",
          "module": "Arm.Instruction",
          "name": "Eor",
          "package": "HARM",
          "partial": "Eor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Instruction.html#v:Eor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Instruction",
          "name": "Ldmea",
          "package": "HARM",
          "signature": "Ldmea Operand Operand",
          "source": "src/Arm-Instruction.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Instruction",
          "module": "Arm.Instruction",
          "name": "Ldmea",
          "package": "HARM",
          "partial": "Ldmea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Instruction.html#v:Ldmea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Instruction",
          "name": "Ldr",
          "package": "HARM",
          "signature": "Ldr Operand Operand",
          "source": "src/Arm-Instruction.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Instruction",
          "module": "Arm.Instruction",
          "name": "Ldr",
          "package": "HARM",
          "partial": "Ldr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Instruction.html#v:Ldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Instruction",
          "name": "Ldrb",
          "package": "HARM",
          "signature": "Ldrb Operand Operand",
          "source": "src/Arm-Instruction.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Instruction",
          "module": "Arm.Instruction",
          "name": "Ldrb",
          "package": "HARM",
          "partial": "Ldrb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Instruction.html#v:Ldrb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Instruction",
          "name": "Mov",
          "package": "HARM",
          "signature": "Mov Operand Operand",
          "source": "src/Arm-Instruction.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Instruction",
          "module": "Arm.Instruction",
          "name": "Mov",
          "package": "HARM",
          "partial": "Mov",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Instruction.html#v:Mov"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Instruction",
          "name": "Mul",
          "package": "HARM",
          "signature": "Mul Operand Operand Operand",
          "source": "src/Arm-Instruction.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Instruction",
          "module": "Arm.Instruction",
          "name": "Mul",
          "package": "HARM",
          "partial": "Mul",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Instruction.html#v:Mul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Instruction",
          "name": "Orr",
          "package": "HARM",
          "signature": "Orr Operand Operand Operand",
          "source": "src/Arm-Instruction.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Instruction",
          "module": "Arm.Instruction",
          "name": "Orr",
          "package": "HARM",
          "partial": "Orr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Instruction.html#v:Orr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Instruction",
          "name": "Stmea",
          "package": "HARM",
          "signature": "Stmea Operand Operand",
          "source": "src/Arm-Instruction.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Instruction",
          "module": "Arm.Instruction",
          "name": "Stmea",
          "package": "HARM",
          "partial": "Stmea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Instruction.html#v:Stmea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Instruction",
          "name": "Str",
          "package": "HARM",
          "signature": "Str Operand Operand",
          "source": "src/Arm-Instruction.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Instruction",
          "module": "Arm.Instruction",
          "name": "Str",
          "package": "HARM",
          "partial": "Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Instruction.html#v:Str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Instruction",
          "name": "Strb",
          "package": "HARM",
          "signature": "Strb Operand Operand",
          "source": "src/Arm-Instruction.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Instruction",
          "module": "Arm.Instruction",
          "name": "Strb",
          "package": "HARM",
          "partial": "Strb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Instruction.html#v:Strb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Instruction",
          "name": "Sub",
          "package": "HARM",
          "signature": "Sub Operand Operand Operand",
          "source": "src/Arm-Instruction.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Instruction",
          "module": "Arm.Instruction",
          "name": "Sub",
          "package": "HARM",
          "partial": "Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Instruction.html#v:Sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Instruction",
          "name": "Swi",
          "package": "HARM",
          "signature": "Swi Operand",
          "source": "src/Arm-Instruction.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Instruction",
          "module": "Arm.Instruction",
          "name": "Swi",
          "package": "HARM",
          "partial": "Swi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Instruction.html#v:Swi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Loader",
          "name": "Loader",
          "package": "HARM",
          "source": "src/Arm-Loader.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Arm Loader",
          "module": "Arm.Loader",
          "name": "Loader",
          "package": "HARM",
          "partial": "Loader",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Loader.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Loader",
          "name": "loadArray",
          "package": "HARM",
          "signature": "Memory -\u003e Address -\u003e Word32 -\u003e Constant -\u003e IO ()",
          "source": "src/Arm-Loader.html#loadArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Loader",
          "module": "Arm.Loader",
          "name": "loadArray",
          "normalized": "Memory-\u003eAddress-\u003eWord-\u003eConstant-\u003eIO()",
          "package": "HARM",
          "partial": "Array",
          "signature": "Memory-\u003eAddress-\u003eWord-\u003eConstant-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Loader.html#v:loadArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Loader",
          "name": "loadConstant",
          "package": "HARM",
          "signature": "Memory -\u003e Address -\u003e Constant -\u003e IO ()",
          "source": "src/Arm-Loader.html#loadConstant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Loader",
          "module": "Arm.Loader",
          "name": "loadConstant",
          "normalized": "Memory-\u003eAddress-\u003eConstant-\u003eIO()",
          "package": "HARM",
          "partial": "Constant",
          "signature": "Memory-\u003eAddress-\u003eConstant-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Loader.html#v:loadConstant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Loader",
          "name": "loadConstants",
          "package": "HARM",
          "signature": "Memory -\u003e [(Address, Constant)] -\u003e IO ()",
          "source": "src/Arm-Loader.html#loadConstants",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Loader",
          "module": "Arm.Loader",
          "name": "loadConstants",
          "normalized": "Memory-\u003e[(Address,Constant)]-\u003eIO()",
          "package": "HARM",
          "partial": "Constants",
          "signature": "Memory-\u003e[(Address,Constant)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Loader.html#v:loadConstants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Loader",
          "name": "loadInstructions",
          "package": "HARM",
          "signature": "Memory -\u003e Address -\u003e [Instruction] -\u003e IO ()",
          "source": "src/Arm-Loader.html#loadInstructions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Loader",
          "module": "Arm.Loader",
          "name": "loadInstructions",
          "normalized": "Memory-\u003eAddress-\u003e[Instruction]-\u003eIO()",
          "package": "HARM",
          "partial": "Instructions",
          "signature": "Memory-\u003eAddress-\u003e[Instruction]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Loader.html#v:loadInstructions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Loader",
          "name": "loadList",
          "package": "HARM",
          "signature": "Memory -\u003e Address -\u003e [Constant] -\u003e IO ()",
          "source": "src/Arm-Loader.html#loadList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Loader",
          "module": "Arm.Loader",
          "name": "loadList",
          "normalized": "Memory-\u003eAddress-\u003e[Constant]-\u003eIO()",
          "package": "HARM",
          "partial": "List",
          "signature": "Memory-\u003eAddress-\u003e[Constant]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Loader.html#v:loadList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Loader",
          "name": "loadProgram",
          "package": "HARM",
          "signature": "CPU -\u003e Program -\u003e IO ()",
          "source": "src/Arm-Loader.html#loadProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Loader",
          "module": "Arm.Loader",
          "name": "loadProgram",
          "normalized": "CPU-\u003eProgram-\u003eIO()",
          "package": "HARM",
          "partial": "Program",
          "signature": "CPU-\u003eProgram-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Loader.html#v:loadProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Loader",
          "name": "loadRegisters",
          "package": "HARM",
          "signature": "Registers -\u003e [(RegisterName, Word32)] -\u003e IO ()",
          "source": "src/Arm-Loader.html#loadRegisters",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Loader",
          "module": "Arm.Loader",
          "name": "loadRegisters",
          "normalized": "Registers-\u003e[(RegisterName,Word)]-\u003eIO()",
          "package": "HARM",
          "partial": "Registers",
          "signature": "Registers-\u003e[(RegisterName,Word)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Loader.html#v:loadRegisters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Loader",
          "name": "loadString",
          "package": "HARM",
          "signature": "Memory -\u003e Address -\u003e String -\u003e IO ()",
          "source": "src/Arm-Loader.html#loadString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Loader",
          "module": "Arm.Loader",
          "name": "loadString",
          "normalized": "Memory-\u003eAddress-\u003eString-\u003eIO()",
          "package": "HARM",
          "partial": "String",
          "signature": "Memory-\u003eAddress-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Loader.html#v:loadString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Memory",
          "name": "Memory",
          "package": "HARM",
          "source": "src/Arm-Memory.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Arm Memory",
          "module": "Arm.Memory",
          "name": "Memory",
          "package": "HARM",
          "partial": "Memory",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Memory.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Memory",
          "name": "Address",
          "package": "HARM",
          "source": "src/Arm-Memory.html#Address",
          "type": "type"
        },
        "index": {
          "hierarchy": "Arm Memory",
          "module": "Arm.Memory",
          "name": "Address",
          "package": "HARM",
          "partial": "Address",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Memory.html#t:Address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Memory",
          "name": "ByteAddress",
          "package": "HARM",
          "source": "src/Arm-Memory.html#ByteAddress",
          "type": "type"
        },
        "index": {
          "hierarchy": "Arm Memory",
          "module": "Arm.Memory",
          "name": "ByteAddress",
          "package": "HARM",
          "partial": "Byte Address",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Memory.html#t:ByteAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Memory",
          "name": "Memory",
          "package": "HARM",
          "source": "src/Arm-Memory.html#Memory",
          "type": "type"
        },
        "index": {
          "hierarchy": "Arm Memory",
          "module": "Arm.Memory",
          "name": "Memory",
          "package": "HARM",
          "partial": "Memory",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Memory.html#t:Memory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Memory",
          "name": "WordAddress",
          "package": "HARM",
          "source": "src/Arm-Memory.html#WordAddress",
          "type": "type"
        },
        "index": {
          "hierarchy": "Arm Memory",
          "module": "Arm.Memory",
          "name": "WordAddress",
          "package": "HARM",
          "partial": "Word Address",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Memory.html#t:WordAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Memory",
          "name": "emptyMem",
          "package": "HARM",
          "signature": "Address -\u003e IO Memory",
          "source": "src/Arm-Memory.html#emptyMem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Memory",
          "module": "Arm.Memory",
          "name": "emptyMem",
          "normalized": "Address-\u003eIO Memory",
          "package": "HARM",
          "partial": "Mem",
          "signature": "Address-\u003eIO Memory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Memory.html#v:emptyMem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Memory",
          "name": "getMemWord",
          "package": "HARM",
          "signature": "Memory -\u003e WordAddress -\u003e IO Word32",
          "source": "src/Arm-Memory.html#getMemWord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Memory",
          "module": "Arm.Memory",
          "name": "getMemWord",
          "normalized": "Memory-\u003eWordAddress-\u003eIO Word",
          "package": "HARM",
          "partial": "Mem Word",
          "signature": "Memory-\u003eWordAddress-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Memory.html#v:getMemWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Memory",
          "name": "readMem",
          "package": "HARM",
          "signature": "Memory -\u003e Address -\u003e IO Word32",
          "source": "src/Arm-Memory.html#readMem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Memory",
          "module": "Arm.Memory",
          "name": "readMem",
          "normalized": "Memory-\u003eAddress-\u003eIO Word",
          "package": "HARM",
          "partial": "Mem",
          "signature": "Memory-\u003eAddress-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Memory.html#v:readMem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Memory",
          "name": "setMemWord",
          "package": "HARM",
          "signature": "Memory -\u003e WordAddress -\u003e Word32 -\u003e IO ()",
          "source": "src/Arm-Memory.html#setMemWord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Memory",
          "module": "Arm.Memory",
          "name": "setMemWord",
          "normalized": "Memory-\u003eWordAddress-\u003eWord-\u003eIO()",
          "package": "HARM",
          "partial": "Mem Word",
          "signature": "Memory-\u003eWordAddress-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Memory.html#v:setMemWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Memory",
          "name": "wordAddress",
          "package": "HARM",
          "signature": "ByteAddress -\u003e WordAddress",
          "source": "src/Arm-Memory.html#wordAddress",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Memory",
          "module": "Arm.Memory",
          "name": "wordAddress",
          "normalized": "ByteAddress-\u003eWordAddress",
          "package": "HARM",
          "partial": "Address",
          "signature": "ByteAddress-\u003eWordAddress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Memory.html#v:wordAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Memory",
          "name": "writeMem",
          "package": "HARM",
          "signature": "Memory -\u003e Address -\u003e Word32 -\u003e IO ()",
          "source": "src/Arm-Memory.html#writeMem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Memory",
          "module": "Arm.Memory",
          "name": "writeMem",
          "normalized": "Memory-\u003eAddress-\u003eWord-\u003eIO()",
          "package": "HARM",
          "partial": "Mem",
          "signature": "Memory-\u003eAddress-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Memory.html#v:writeMem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Operand",
          "name": "Operand",
          "package": "HARM",
          "source": "src/Arm-Operand.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Arm Operand",
          "module": "Arm.Operand",
          "name": "Operand",
          "package": "HARM",
          "partial": "Operand",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Operand.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Operand",
          "name": "Operand",
          "package": "HARM",
          "source": "src/Arm-Operand.html#Operand",
          "type": "data"
        },
        "index": {
          "hierarchy": "Arm Operand",
          "module": "Arm.Operand",
          "name": "Operand",
          "package": "HARM",
          "partial": "Operand",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Operand.html#t:Operand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Operand",
          "name": "Aut",
          "package": "HARM",
          "signature": "Aut Operand",
          "source": "src/Arm-Operand.html#Operand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Operand",
          "module": "Arm.Operand",
          "name": "Aut",
          "package": "HARM",
          "partial": "Aut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Operand.html#v:Aut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Operand",
          "name": "Bas",
          "package": "HARM",
          "signature": "Bas RegisterName Word32",
          "source": "src/Arm-Operand.html#Operand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Operand",
          "module": "Arm.Operand",
          "name": "Bas",
          "package": "HARM",
          "partial": "Bas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Operand.html#v:Bas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Operand",
          "name": "Con",
          "package": "HARM",
          "signature": "Con Word32",
          "source": "src/Arm-Operand.html#Operand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Operand",
          "module": "Arm.Operand",
          "name": "Con",
          "package": "HARM",
          "partial": "Con",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Operand.html#v:Con"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Operand",
          "name": "Ind",
          "package": "HARM",
          "signature": "Ind RegisterName",
          "source": "src/Arm-Operand.html#Operand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Operand",
          "module": "Arm.Operand",
          "name": "Ind",
          "package": "HARM",
          "partial": "Ind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Operand.html#v:Ind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Operand",
          "name": "Lab",
          "package": "HARM",
          "signature": "Lab String",
          "source": "src/Arm-Operand.html#Operand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Operand",
          "module": "Arm.Operand",
          "name": "Lab",
          "package": "HARM",
          "partial": "Lab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Operand.html#v:Lab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Operand",
          "name": "Mrg",
          "package": "HARM",
          "signature": "Mrg [RegisterName]",
          "source": "src/Arm-Operand.html#Operand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Operand",
          "module": "Arm.Operand",
          "name": "Mrg",
          "normalized": "Mrg[RegisterName]",
          "package": "HARM",
          "partial": "Mrg",
          "signature": "Mrg[RegisterName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Operand.html#v:Mrg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Operand",
          "name": "Pos",
          "package": "HARM",
          "signature": "Pos Operand Word32",
          "source": "src/Arm-Operand.html#Operand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Operand",
          "module": "Arm.Operand",
          "name": "Pos",
          "package": "HARM",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Operand.html#v:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Operand",
          "name": "Reg",
          "package": "HARM",
          "signature": "Reg RegisterName",
          "source": "src/Arm-Operand.html#Operand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Operand",
          "module": "Arm.Operand",
          "name": "Reg",
          "package": "HARM",
          "partial": "Reg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Operand.html#v:Reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Operand",
          "name": "Rel",
          "package": "HARM",
          "signature": "Rel Int",
          "source": "src/Arm-Operand.html#Operand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Operand",
          "module": "Arm.Operand",
          "name": "Rel",
          "package": "HARM",
          "partial": "Rel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Operand.html#v:Rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "ParseLib",
          "package": "HARM",
          "source": "src/Arm-ParseLib.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "ParseLib",
          "package": "HARM",
          "partial": "Parse Lib",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "Parser",
          "package": "HARM",
          "source": "src/Arm-ParseLib.html#Parser",
          "type": "data"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "Parser",
          "package": "HARM",
          "partial": "Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "(+++)",
          "package": "HARM",
          "signature": "Parser a -\u003e Parser a -\u003e Parser a",
          "source": "src/Arm-ParseLib.html#%2B%2B%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "(+++) +++",
          "normalized": "Parser a-\u003eParser a-\u003eParser a",
          "package": "HARM",
          "signature": "Parser a-\u003eParser a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:-43--43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "alphanum",
          "package": "HARM",
          "signature": "Parser Char",
          "source": "src/Arm-ParseLib.html#alphanum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "alphanum",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:alphanum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "bracket",
          "package": "HARM",
          "signature": "Parser a -\u003e Parser b -\u003e Parser c -\u003e Parser b",
          "source": "src/Arm-ParseLib.html#bracket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "bracket",
          "normalized": "Parser a-\u003eParser b-\u003eParser c-\u003eParser b",
          "package": "HARM",
          "signature": "Parser a-\u003eParser b-\u003eParser c-\u003eParser b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:bracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "chainl",
          "package": "HARM",
          "signature": "Parser a -\u003e Parser (a -\u003e a -\u003e a) -\u003e a -\u003e Parser a",
          "source": "src/Arm-ParseLib.html#chainl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "chainl",
          "normalized": "Parser a-\u003eParser(a-\u003ea-\u003ea)-\u003ea-\u003eParser a",
          "package": "HARM",
          "signature": "Parser a-\u003eParser(a-\u003ea-\u003ea)-\u003ea-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:chainl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "chainl1",
          "package": "HARM",
          "signature": "Parser a -\u003e Parser (a -\u003e a -\u003e a) -\u003e Parser a",
          "source": "src/Arm-ParseLib.html#chainl1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "chainl1",
          "normalized": "Parser a-\u003eParser(a-\u003ea-\u003ea)-\u003eParser a",
          "package": "HARM",
          "signature": "Parser a-\u003eParser(a-\u003ea-\u003ea)-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:chainl1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "chainr",
          "package": "HARM",
          "signature": "Parser a -\u003e Parser (a -\u003e a -\u003e a) -\u003e a -\u003e Parser a",
          "source": "src/Arm-ParseLib.html#chainr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "chainr",
          "normalized": "Parser a-\u003eParser(a-\u003ea-\u003ea)-\u003ea-\u003eParser a",
          "package": "HARM",
          "signature": "Parser a-\u003eParser(a-\u003ea-\u003ea)-\u003ea-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:chainr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "chainr1",
          "package": "HARM",
          "signature": "Parser a -\u003e Parser (a -\u003e a -\u003e a) -\u003e Parser a",
          "source": "src/Arm-ParseLib.html#chainr1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "chainr1",
          "normalized": "Parser a-\u003eParser(a-\u003ea-\u003ea)-\u003eParser a",
          "package": "HARM",
          "signature": "Parser a-\u003eParser(a-\u003ea-\u003ea)-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:chainr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "char",
          "package": "HARM",
          "signature": "Char -\u003e Parser Char",
          "source": "src/Arm-ParseLib.html#char",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "char",
          "normalized": "Char-\u003eParser Char",
          "package": "HARM",
          "signature": "Char-\u003eParser Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "comment",
          "package": "HARM",
          "signature": "Parser ()",
          "source": "src/Arm-ParseLib.html#comment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "comment",
          "normalized": "Parser()",
          "package": "HARM",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "digit",
          "package": "HARM",
          "signature": "Parser Char",
          "source": "src/Arm-ParseLib.html#digit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "digit",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:digit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "ident",
          "package": "HARM",
          "signature": "Parser String",
          "source": "src/Arm-ParseLib.html#ident",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "ident",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:ident"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "identifier",
          "package": "HARM",
          "signature": "[String] -\u003e Parser String",
          "source": "src/Arm-ParseLib.html#identifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "identifier",
          "normalized": "[String]-\u003eParser String",
          "package": "HARM",
          "signature": "[String]-\u003eParser String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "int",
          "package": "HARM",
          "signature": "Parser Int",
          "source": "src/Arm-ParseLib.html#int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "int",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "integer",
          "package": "HARM",
          "signature": "Parser Int",
          "source": "src/Arm-ParseLib.html#integer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "integer",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "item",
          "package": "HARM",
          "signature": "Parser Char",
          "source": "src/Arm-ParseLib.html#item",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "item",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:item"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "junk",
          "package": "HARM",
          "signature": "Parser ()",
          "source": "src/Arm-ParseLib.html#junk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "junk",
          "normalized": "Parser()",
          "package": "HARM",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:junk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "letter",
          "package": "HARM",
          "signature": "Parser Char",
          "source": "src/Arm-ParseLib.html#letter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "letter",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:letter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "lower",
          "package": "HARM",
          "signature": "Parser Char",
          "source": "src/Arm-ParseLib.html#lower",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "lower",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:lower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "many",
          "package": "HARM",
          "signature": "Parser a -\u003e Parser [a]",
          "source": "src/Arm-ParseLib.html#many",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "many",
          "normalized": "Parser a-\u003eParser[a]",
          "package": "HARM",
          "signature": "Parser a-\u003eParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:many"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "many1",
          "package": "HARM",
          "signature": "Parser a -\u003e Parser [a]",
          "source": "src/Arm-ParseLib.html#many1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "many1",
          "normalized": "Parser a-\u003eParser[a]",
          "package": "HARM",
          "signature": "Parser a-\u003eParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:many1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "nat",
          "package": "HARM",
          "signature": "Parser Int",
          "source": "src/Arm-ParseLib.html#nat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "nat",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:nat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "natural",
          "package": "HARM",
          "signature": "Parser Int",
          "source": "src/Arm-ParseLib.html#natural",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "natural",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:natural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "ops",
          "package": "HARM",
          "signature": "[(Parser a, b)] -\u003e Parser b",
          "source": "src/Arm-ParseLib.html#ops",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "ops",
          "normalized": "[(Parser a,b)]-\u003eParser b",
          "package": "HARM",
          "signature": "[(Parser a,b)]-\u003eParser b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:ops"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "papply",
          "package": "HARM",
          "signature": "Parser a -\u003e String -\u003e [(a, String)]",
          "source": "src/Arm-ParseLib.html#papply",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "papply",
          "normalized": "Parser a-\u003eString-\u003e[(a,String)]",
          "package": "HARM",
          "signature": "Parser a-\u003eString-\u003e[(a,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:papply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "parse",
          "package": "HARM",
          "signature": "Parser a -\u003e Parser a",
          "source": "src/Arm-ParseLib.html#parse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "parse",
          "normalized": "Parser a-\u003eParser a",
          "package": "HARM",
          "signature": "Parser a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "sat",
          "package": "HARM",
          "signature": "(Char -\u003e Bool) -\u003e Parser Char",
          "source": "src/Arm-ParseLib.html#sat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "sat",
          "normalized": "(Char-\u003eBool)-\u003eParser Char",
          "package": "HARM",
          "signature": "(Char-\u003eBool)-\u003eParser Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:sat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "sepby",
          "package": "HARM",
          "signature": "Parser a -\u003e Parser b -\u003e Parser [a]",
          "source": "src/Arm-ParseLib.html#sepby",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "sepby",
          "normalized": "Parser a-\u003eParser b-\u003eParser[a]",
          "package": "HARM",
          "signature": "Parser a-\u003eParser b-\u003eParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:sepby"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "sepby1",
          "package": "HARM",
          "signature": "Parser a -\u003e Parser b -\u003e Parser [a]",
          "source": "src/Arm-ParseLib.html#sepby1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "sepby1",
          "normalized": "Parser a-\u003eParser b-\u003eParser[a]",
          "package": "HARM",
          "signature": "Parser a-\u003eParser b-\u003eParser[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:sepby1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "spaces",
          "package": "HARM",
          "signature": "Parser ()",
          "source": "src/Arm-ParseLib.html#spaces",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "spaces",
          "normalized": "Parser()",
          "package": "HARM",
          "signature": "Parser()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:spaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "string",
          "package": "HARM",
          "signature": "String -\u003e Parser String",
          "source": "src/Arm-ParseLib.html#string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "string",
          "normalized": "String-\u003eParser String",
          "package": "HARM",
          "signature": "String-\u003eParser String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "symbol",
          "package": "HARM",
          "signature": "String -\u003e Parser String",
          "source": "src/Arm-ParseLib.html#symbol",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "symbol",
          "normalized": "String-\u003eParser String",
          "package": "HARM",
          "signature": "String-\u003eParser String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "token",
          "package": "HARM",
          "signature": "Parser a -\u003e Parser a",
          "source": "src/Arm-ParseLib.html#token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "token",
          "normalized": "Parser a-\u003eParser a",
          "package": "HARM",
          "signature": "Parser a-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.ParseLib",
          "name": "upper",
          "package": "HARM",
          "signature": "Parser Char",
          "source": "src/Arm-ParseLib.html#upper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm ParseLib",
          "module": "Arm.ParseLib",
          "name": "upper",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-ParseLib.html#v:upper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Parser",
          "name": "Parser",
          "package": "HARM",
          "source": "src/Arm-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Arm Parser",
          "module": "Arm.Parser",
          "name": "Parser",
          "package": "HARM",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Parser",
          "name": "ParseElement",
          "package": "HARM",
          "source": "src/Arm-Parser.html#ParseElement",
          "type": "data"
        },
        "index": {
          "hierarchy": "Arm Parser",
          "module": "Arm.Parser",
          "name": "ParseElement",
          "package": "HARM",
          "partial": "Parse Element",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Parser.html#t:ParseElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Parser",
          "name": "Symbol",
          "package": "HARM",
          "source": "src/Arm-Parser.html#Symbol",
          "type": "type"
        },
        "index": {
          "hierarchy": "Arm Parser",
          "module": "Arm.Parser",
          "name": "Symbol",
          "package": "HARM",
          "partial": "Symbol",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Parser.html#t:Symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Parser",
          "name": "Address",
          "package": "HARM",
          "signature": "Address Address",
          "source": "src/Arm-Parser.html#ParseElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Parser",
          "module": "Arm.Parser",
          "name": "Address",
          "package": "HARM",
          "partial": "Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Parser.html#v:Address"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Parser",
          "name": "Comment",
          "package": "HARM",
          "signature": "Comment",
          "source": "src/Arm-Parser.html#ParseElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Parser",
          "module": "Arm.Parser",
          "name": "Comment",
          "package": "HARM",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Parser.html#v:Comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Parser",
          "name": "Data",
          "package": "HARM",
          "signature": "Data [Operand] [Constant]",
          "source": "src/Arm-Parser.html#ParseElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Parser",
          "module": "Arm.Parser",
          "name": "Data",
          "normalized": "Data[Operand][Constant]",
          "package": "HARM",
          "partial": "Data",
          "signature": "Data[Operand][Constant]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Parser.html#v:Data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Parser",
          "name": "Instruction",
          "package": "HARM",
          "signature": "Instruction Instruction",
          "source": "src/Arm-Parser.html#ParseElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Parser",
          "module": "Arm.Parser",
          "name": "Instruction",
          "package": "HARM",
          "partial": "Instruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Parser.html#v:Instruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Parser",
          "name": "Newline",
          "package": "HARM",
          "signature": "Newline",
          "source": "src/Arm-Parser.html#ParseElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Parser",
          "module": "Arm.Parser",
          "name": "Newline",
          "package": "HARM",
          "partial": "Newline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Parser.html#v:Newline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Parser",
          "name": "Origin",
          "package": "HARM",
          "signature": "Origin Address",
          "source": "src/Arm-Parser.html#ParseElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Parser",
          "module": "Arm.Parser",
          "name": "Origin",
          "package": "HARM",
          "partial": "Origin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Parser.html#v:Origin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Parser",
          "name": "RegInit",
          "package": "HARM",
          "signature": "RegInit RegisterName Operand",
          "source": "src/Arm-Parser.html#ParseElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Parser",
          "module": "Arm.Parser",
          "name": "RegInit",
          "package": "HARM",
          "partial": "Reg Init",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Parser.html#v:RegInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Parser",
          "name": "Symbol",
          "package": "HARM",
          "signature": "Symbol Symbol",
          "source": "src/Arm-Parser.html#ParseElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Parser",
          "module": "Arm.Parser",
          "name": "Symbol",
          "package": "HARM",
          "partial": "Symbol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Parser.html#v:Symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Parser",
          "name": "pAut",
          "package": "HARM",
          "signature": "Parser Operand",
          "source": "src/Arm-Parser.html#pAut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Parser",
          "module": "Arm.Parser",
          "name": "pAut",
          "package": "HARM",
          "partial": "Aut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Parser.html#v:pAut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Parser",
          "name": "pBas",
          "package": "HARM",
          "signature": "Parser Operand",
          "source": "src/Arm-Parser.html#pBas",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Parser",
          "module": "Arm.Parser",
          "name": "pBas",
          "package": "HARM",
          "partial": "Bas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Parser.html#v:pBas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Parser",
          "name": "pBinary",
          "package": "HARM",
          "signature": "Parser Word32",
          "source": "src/Arm-Parser.html#pBinary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Parser",
          "module": "Arm.Parser",
          "name": "pBinary",
          "package": "HARM",
          "partial": "Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Parser.html#v:pBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Parser",
          "name": "pCon",
          "package": "HARM",
          "signature": "Parser Operand",
          "source": "src/Arm-Parser.html#pCon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Parser",
          "module": "Arm.Parser",
          "name": "pCon",
          "package": "HARM",
          "partial": "Con",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Parser.html#v:pCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Parser",
          "name": "pInd",
          "package": "HARM",
          "signature": "Parser Operand",
          "source": "src/Arm-Parser.html#pInd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Parser",
          "module": "Arm.Parser",
          "name": "pInd",
          "package": "HARM",
          "partial": "Ind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Parser.html#v:pInd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Parser",
          "name": "pOperand",
          "package": "HARM",
          "signature": "Parser Operand",
          "source": "src/Arm-Parser.html#pOperand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Parser",
          "module": "Arm.Parser",
          "name": "pOperand",
          "package": "HARM",
          "partial": "Operand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Parser.html#v:pOperand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Parser",
          "name": "pPos",
          "package": "HARM",
          "signature": "Parser Operand",
          "source": "src/Arm-Parser.html#pPos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Parser",
          "module": "Arm.Parser",
          "name": "pPos",
          "package": "HARM",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Parser.html#v:pPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Parser",
          "name": "pReg",
          "package": "HARM",
          "signature": "Parser Operand",
          "source": "src/Arm-Parser.html#pReg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Parser",
          "module": "Arm.Parser",
          "name": "pReg",
          "package": "HARM",
          "partial": "Reg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Parser.html#v:pReg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Parser",
          "name": "pWord",
          "package": "HARM",
          "signature": "Parser Word32",
          "source": "src/Arm-Parser.html#pWord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Parser",
          "module": "Arm.Parser",
          "name": "pWord",
          "package": "HARM",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Parser.html#v:pWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Program",
          "name": "Program",
          "package": "HARM",
          "source": "src/Arm-Program.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Arm Program",
          "module": "Arm.Program",
          "name": "Program",
          "package": "HARM",
          "partial": "Program",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Program.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Program",
          "name": "Constant",
          "package": "HARM",
          "source": "src/Arm-Program.html#Constant",
          "type": "data"
        },
        "index": {
          "hierarchy": "Arm Program",
          "module": "Arm.Program",
          "name": "Constant",
          "package": "HARM",
          "partial": "Constant",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Program.html#t:Constant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Program",
          "name": "Program",
          "package": "HARM",
          "source": "src/Arm-Program.html#Program",
          "type": "data"
        },
        "index": {
          "hierarchy": "Arm Program",
          "module": "Arm.Program",
          "name": "Program",
          "package": "HARM",
          "partial": "Program",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Program.html#t:Program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Program",
          "name": "Array",
          "package": "HARM",
          "signature": "Array Word32 Constant",
          "source": "src/Arm-Program.html#Constant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Program",
          "module": "Arm.Program",
          "name": "Array",
          "package": "HARM",
          "partial": "Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Program.html#v:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Program",
          "name": "Int",
          "package": "HARM",
          "signature": "Int Int",
          "source": "src/Arm-Program.html#Constant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Program",
          "module": "Arm.Program",
          "name": "Int",
          "package": "HARM",
          "partial": "Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Program.html#v:Int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Program",
          "name": "List",
          "package": "HARM",
          "signature": "List [Constant]",
          "source": "src/Arm-Program.html#Constant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Program",
          "module": "Arm.Program",
          "name": "List",
          "normalized": "List[Constant]",
          "package": "HARM",
          "partial": "List",
          "signature": "List[Constant]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Program.html#v:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Program",
          "name": "Program",
          "package": "HARM",
          "signature": "Program",
          "source": "src/Arm-Program.html#Program",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Program",
          "module": "Arm.Program",
          "name": "Program",
          "package": "HARM",
          "partial": "Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Program.html#v:Program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Program",
          "name": "String",
          "package": "HARM",
          "signature": "String String",
          "source": "src/Arm-Program.html#Constant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Program",
          "module": "Arm.Program",
          "name": "String",
          "package": "HARM",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Program.html#v:String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Program",
          "name": "Word",
          "package": "HARM",
          "signature": "Word Word32",
          "source": "src/Arm-Program.html#Constant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Program",
          "module": "Arm.Program",
          "name": "Word",
          "package": "HARM",
          "partial": "Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Program.html#v:Word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Program",
          "name": "constSize",
          "package": "HARM",
          "signature": "Constant -\u003e Word32",
          "source": "src/Arm-Program.html#constSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Program",
          "module": "Arm.Program",
          "name": "constSize",
          "normalized": "Constant-\u003eWord",
          "package": "HARM",
          "partial": "Size",
          "signature": "Constant-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Program.html#v:constSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Program",
          "name": "constants",
          "package": "HARM",
          "signature": "[(Address, Constant)]",
          "source": "src/Arm-Program.html#Program",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Program",
          "module": "Arm.Program",
          "name": "constants",
          "normalized": "[(Address,Constant)]",
          "package": "HARM",
          "signature": "[(Address,Constant)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Program.html#v:constants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Program",
          "name": "instructions",
          "package": "HARM",
          "signature": "[Instruction]",
          "source": "src/Arm-Program.html#Program",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Program",
          "module": "Arm.Program",
          "name": "instructions",
          "normalized": "[Instruction]",
          "package": "HARM",
          "signature": "[Instruction]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Program.html#v:instructions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Program",
          "name": "memorySize",
          "package": "HARM",
          "signature": "Address",
          "source": "src/Arm-Program.html#Program",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Program",
          "module": "Arm.Program",
          "name": "memorySize",
          "package": "HARM",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Program.html#v:memorySize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Program",
          "name": "origin",
          "package": "HARM",
          "signature": "Address",
          "source": "src/Arm-Program.html#Program",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Program",
          "module": "Arm.Program",
          "name": "origin",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Program.html#v:origin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Program",
          "name": "regInit",
          "package": "HARM",
          "signature": "[(RegisterName, Word32)]",
          "source": "src/Arm-Program.html#Program",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Program",
          "module": "Arm.Program",
          "name": "regInit",
          "normalized": "[(RegisterName,Word)]",
          "package": "HARM",
          "partial": "Init",
          "signature": "[(RegisterName,Word)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Program.html#v:regInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Register",
          "name": "Register",
          "package": "HARM",
          "source": "src/Arm-Register.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Arm Register",
          "module": "Arm.Register",
          "name": "Register",
          "package": "HARM",
          "partial": "Register",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Register.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Register",
          "name": "Registers",
          "package": "HARM",
          "source": "src/Arm-Register.html#Registers",
          "type": "type"
        },
        "index": {
          "hierarchy": "Arm Register",
          "module": "Arm.Register",
          "name": "Registers",
          "package": "HARM",
          "partial": "Registers",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Register.html#t:Registers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Register",
          "name": "cpsrGet",
          "package": "HARM",
          "signature": "Int -\u003e Registers -\u003e IO Word32",
          "source": "src/Arm-Register.html#cpsrGet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Register",
          "module": "Arm.Register",
          "name": "cpsrGet",
          "normalized": "Int-\u003eRegisters-\u003eIO Word",
          "package": "HARM",
          "partial": "Get",
          "signature": "Int-\u003eRegisters-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Register.html#v:cpsrGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Register",
          "name": "cpsrSet",
          "package": "HARM",
          "signature": "Int -\u003e Registers -\u003e IO ()",
          "source": "src/Arm-Register.html#cpsrSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Register",
          "module": "Arm.Register",
          "name": "cpsrSet",
          "normalized": "Int-\u003eRegisters-\u003eIO()",
          "package": "HARM",
          "partial": "Set",
          "signature": "Int-\u003eRegisters-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Register.html#v:cpsrSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Register",
          "name": "emptyRegs",
          "package": "HARM",
          "signature": "IO Registers",
          "source": "src/Arm-Register.html#emptyRegs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Register",
          "module": "Arm.Register",
          "name": "emptyRegs",
          "package": "HARM",
          "partial": "Regs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Register.html#v:emptyRegs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Register",
          "name": "getReg",
          "package": "HARM",
          "signature": "Registers -\u003e RegisterName -\u003e IO Word32",
          "source": "src/Arm-Register.html#getReg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Register",
          "module": "Arm.Register",
          "name": "getReg",
          "normalized": "Registers-\u003eRegisterName-\u003eIO Word",
          "package": "HARM",
          "partial": "Reg",
          "signature": "Registers-\u003eRegisterName-\u003eIO Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Register.html#v:getReg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Register",
          "name": "setReg",
          "package": "HARM",
          "signature": "Registers -\u003e RegisterName -\u003e Word32 -\u003e IO ()",
          "source": "src/Arm-Register.html#setReg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Register",
          "module": "Arm.Register",
          "name": "setReg",
          "normalized": "Registers-\u003eRegisterName-\u003eWord-\u003eIO()",
          "package": "HARM",
          "partial": "Reg",
          "signature": "Registers-\u003eRegisterName-\u003eWord-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Register.html#v:setReg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.RegisterName",
          "name": "RegisterName",
          "package": "HARM",
          "source": "src/Arm-RegisterName.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Arm RegisterName",
          "module": "Arm.RegisterName",
          "name": "RegisterName",
          "package": "HARM",
          "partial": "Register Name",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-RegisterName.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.RegisterName",
          "name": "RegisterName",
          "package": "HARM",
          "source": "src/Arm-RegisterName.html#RegisterName",
          "type": "data"
        },
        "index": {
          "hierarchy": "Arm RegisterName",
          "module": "Arm.RegisterName",
          "name": "RegisterName",
          "package": "HARM",
          "partial": "Register Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-RegisterName.html#t:RegisterName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.RegisterName",
          "name": "CPSR",
          "package": "HARM",
          "signature": "CPSR",
          "source": "src/Arm-RegisterName.html#RegisterName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm RegisterName",
          "module": "Arm.RegisterName",
          "name": "CPSR",
          "package": "HARM",
          "partial": "CPSR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-RegisterName.html#v:CPSR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.RegisterName",
          "name": "R0",
          "package": "HARM",
          "signature": "R0",
          "source": "src/Arm-RegisterName.html#RegisterName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm RegisterName",
          "module": "Arm.RegisterName",
          "name": "R0",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-RegisterName.html#v:R0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.RegisterName",
          "name": "R1",
          "package": "HARM",
          "signature": "R1",
          "source": "src/Arm-RegisterName.html#RegisterName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm RegisterName",
          "module": "Arm.RegisterName",
          "name": "R1",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-RegisterName.html#v:R1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.RegisterName",
          "name": "R10",
          "package": "HARM",
          "signature": "R10",
          "source": "src/Arm-RegisterName.html#RegisterName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm RegisterName",
          "module": "Arm.RegisterName",
          "name": "R10",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-RegisterName.html#v:R10"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.RegisterName",
          "name": "R11",
          "package": "HARM",
          "signature": "R11",
          "source": "src/Arm-RegisterName.html#RegisterName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm RegisterName",
          "module": "Arm.RegisterName",
          "name": "R11",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-RegisterName.html#v:R11"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.RegisterName",
          "name": "R12",
          "package": "HARM",
          "signature": "R12",
          "source": "src/Arm-RegisterName.html#RegisterName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm RegisterName",
          "module": "Arm.RegisterName",
          "name": "R12",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-RegisterName.html#v:R12"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.RegisterName",
          "name": "R13",
          "package": "HARM",
          "signature": "R13",
          "source": "src/Arm-RegisterName.html#RegisterName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm RegisterName",
          "module": "Arm.RegisterName",
          "name": "R13",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-RegisterName.html#v:R13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.RegisterName",
          "name": "R14",
          "package": "HARM",
          "signature": "R14",
          "source": "src/Arm-RegisterName.html#RegisterName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm RegisterName",
          "module": "Arm.RegisterName",
          "name": "R14",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-RegisterName.html#v:R14"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.RegisterName",
          "name": "R15",
          "package": "HARM",
          "signature": "R15",
          "source": "src/Arm-RegisterName.html#RegisterName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm RegisterName",
          "module": "Arm.RegisterName",
          "name": "R15",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-RegisterName.html#v:R15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.RegisterName",
          "name": "R2",
          "package": "HARM",
          "signature": "R2",
          "source": "src/Arm-RegisterName.html#RegisterName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm RegisterName",
          "module": "Arm.RegisterName",
          "name": "R2",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-RegisterName.html#v:R2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.RegisterName",
          "name": "R3",
          "package": "HARM",
          "signature": "R3",
          "source": "src/Arm-RegisterName.html#RegisterName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm RegisterName",
          "module": "Arm.RegisterName",
          "name": "R3",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-RegisterName.html#v:R3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.RegisterName",
          "name": "R4",
          "package": "HARM",
          "signature": "R4",
          "source": "src/Arm-RegisterName.html#RegisterName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm RegisterName",
          "module": "Arm.RegisterName",
          "name": "R4",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-RegisterName.html#v:R4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.RegisterName",
          "name": "R5",
          "package": "HARM",
          "signature": "R5",
          "source": "src/Arm-RegisterName.html#RegisterName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm RegisterName",
          "module": "Arm.RegisterName",
          "name": "R5",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-RegisterName.html#v:R5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.RegisterName",
          "name": "R6",
          "package": "HARM",
          "signature": "R6",
          "source": "src/Arm-RegisterName.html#RegisterName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm RegisterName",
          "module": "Arm.RegisterName",
          "name": "R6",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-RegisterName.html#v:R6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.RegisterName",
          "name": "R7",
          "package": "HARM",
          "signature": "R7",
          "source": "src/Arm-RegisterName.html#RegisterName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm RegisterName",
          "module": "Arm.RegisterName",
          "name": "R7",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-RegisterName.html#v:R7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.RegisterName",
          "name": "R8",
          "package": "HARM",
          "signature": "R8",
          "source": "src/Arm-RegisterName.html#RegisterName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm RegisterName",
          "module": "Arm.RegisterName",
          "name": "R8",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-RegisterName.html#v:R8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.RegisterName",
          "name": "R9",
          "package": "HARM",
          "signature": "R9",
          "source": "src/Arm-RegisterName.html#RegisterName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm RegisterName",
          "module": "Arm.RegisterName",
          "name": "R9",
          "package": "HARM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-RegisterName.html#v:R9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.RegisterName",
          "name": "nthReg",
          "package": "HARM",
          "signature": "Word32 -\u003e RegisterName",
          "source": "src/Arm-RegisterName.html#nthReg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm RegisterName",
          "module": "Arm.RegisterName",
          "name": "nthReg",
          "normalized": "Word-\u003eRegisterName",
          "package": "HARM",
          "partial": "Reg",
          "signature": "Word-\u003eRegisterName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-RegisterName.html#v:nthReg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Swi",
          "name": "Swi",
          "package": "HARM",
          "source": "src/Arm-Swi.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Arm Swi",
          "module": "Arm.Swi",
          "name": "Swi",
          "package": "HARM",
          "partial": "Swi",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Swi.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Swi",
          "name": "fetchString",
          "package": "HARM",
          "signature": "Memory -\u003e Address -\u003e IO String",
          "source": "src/Arm-Swi.html#fetchString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Swi",
          "module": "Arm.Swi",
          "name": "fetchString",
          "normalized": "Memory-\u003eAddress-\u003eIO String",
          "package": "HARM",
          "partial": "String",
          "signature": "Memory-\u003eAddress-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Swi.html#v:fetchString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Arm.Swi",
          "name": "swi",
          "package": "HARM",
          "signature": "CPU -\u003e Word32 -\u003e Bool -\u003e IO ()",
          "source": "src/Arm-Swi.html#swi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Arm Swi",
          "module": "Arm.Swi",
          "name": "swi",
          "normalized": "CPU-\u003eWord-\u003eBool-\u003eIO()",
          "package": "HARM",
          "signature": "CPU-\u003eWord-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HARM/docs/Arm-Swi.html#v:swi"
      }
    }
  ]
]