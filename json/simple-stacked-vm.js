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
        "word": "simple-stacked-vm"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Binary",
          "name": "Binary",
          "package": "simple-stacked-vm",
          "source": "src/Language-SSVM-Binary.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language SSVM Binary",
          "module": "Language.SSVM.Binary",
          "name": "Binary",
          "package": "simple-stacked-vm",
          "partial": "Binary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Binary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDump bytecode to file\n\u003c/p\u003e",
          "module": "Language.SSVM.Binary",
          "name": "dumpCode",
          "package": "simple-stacked-vm",
          "signature": "FilePath -\u003e Code -\u003e IO ()",
          "source": "src/Language-SSVM-Binary.html#dumpCode",
          "type": "function"
        },
        "index": {
          "description": "Dump bytecode to file",
          "hierarchy": "Language SSVM Binary",
          "module": "Language.SSVM.Binary",
          "name": "dumpCode",
          "normalized": "FilePath-\u003eCode-\u003eIO()",
          "package": "simple-stacked-vm",
          "partial": "Code",
          "signature": "FilePath-\u003eCode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Binary.html#v:dumpCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad bytecode from file\n\u003c/p\u003e",
          "module": "Language.SSVM.Binary",
          "name": "loadCode",
          "package": "simple-stacked-vm",
          "signature": "FilePath -\u003e IO Code",
          "source": "src/Language-SSVM-Binary.html#loadCode",
          "type": "function"
        },
        "index": {
          "description": "Load bytecode from file",
          "hierarchy": "Language SSVM Binary",
          "module": "Language.SSVM.Binary",
          "name": "loadCode",
          "normalized": "FilePath-\u003eIO Code",
          "package": "simple-stacked-vm",
          "partial": "Code",
          "signature": "FilePath-\u003eIO Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Binary.html#v:loadCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Interpreter",
          "name": "Interpreter",
          "package": "simple-stacked-vm",
          "source": "src/Language-SSVM-Interpreter.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language SSVM Interpreter",
          "module": "Language.SSVM.Interpreter",
          "name": "Interpreter",
          "package": "simple-stacked-vm",
          "partial": "Interpreter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Interpreter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterpret code\n\u003c/p\u003e",
          "module": "Language.SSVM.Interpreter",
          "name": "interpret",
          "package": "simple-stacked-vm",
          "signature": "Code -\u003e VM ()",
          "source": "src/Language-SSVM-Interpreter.html#interpret",
          "type": "function"
        },
        "index": {
          "description": "Interpret code",
          "hierarchy": "Language SSVM Interpreter",
          "module": "Language.SSVM.Interpreter",
          "name": "interpret",
          "normalized": "Code-\u003eVM()",
          "package": "simple-stacked-vm",
          "signature": "Code-\u003eVM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Interpreter.html#v:interpret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun VM\n\u003c/p\u003e",
          "module": "Language.SSVM.Interpreter",
          "name": "runVM",
          "package": "simple-stacked-vm",
          "signature": "VM () -\u003e IO ()",
          "source": "src/Language-SSVM-Interpreter.html#runVM",
          "type": "function"
        },
        "index": {
          "description": "Run VM",
          "hierarchy": "Language SSVM Interpreter",
          "module": "Language.SSVM.Interpreter",
          "name": "runVM",
          "normalized": "VM()-\u003eIO()",
          "package": "simple-stacked-vm",
          "partial": "VM",
          "signature": "VM()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Interpreter.html#v:runVM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Interpreter",
          "name": "runVM'",
          "package": "simple-stacked-vm",
          "signature": "VMState -\u003e VM () -\u003e IO ()",
          "source": "src/Language-SSVM-Interpreter.html#runVM%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Interpreter",
          "module": "Language.SSVM.Interpreter",
          "name": "runVM'",
          "normalized": "VMState-\u003eVM()-\u003eIO()",
          "package": "simple-stacked-vm",
          "partial": "VM'",
          "signature": "VMState-\u003eVM()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Interpreter.html#v:runVM-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun VM in trace mode\n\u003c/p\u003e",
          "module": "Language.SSVM.Interpreter",
          "name": "traceVM",
          "package": "simple-stacked-vm",
          "signature": "VM () -\u003e IO ()",
          "source": "src/Language-SSVM-Interpreter.html#traceVM",
          "type": "function"
        },
        "index": {
          "description": "Run VM in trace mode",
          "hierarchy": "Language SSVM Interpreter",
          "module": "Language.SSVM.Interpreter",
          "name": "traceVM",
          "normalized": "VM()-\u003eIO()",
          "package": "simple-stacked-vm",
          "partial": "VM",
          "signature": "VM()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Interpreter.html#v:traceVM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Operations",
          "name": "Operations",
          "package": "simple-stacked-vm",
          "source": "src/Language-SSVM-Operations.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "Operations",
          "package": "simple-stacked-vm",
          "partial": "Operations",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Operations",
          "name": "absF",
          "package": "simple-stacked-vm",
          "signature": "VM ()",
          "source": "src/Language-SSVM-Operations.html#absF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "absF",
          "normalized": "VM()",
          "package": "simple-stacked-vm",
          "signature": "VM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:absF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Operations",
          "name": "add",
          "package": "simple-stacked-vm",
          "signature": "VM ()",
          "source": "src/Language-SSVM-Operations.html#add",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "add",
          "normalized": "VM()",
          "package": "simple-stacked-vm",
          "signature": "VM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate an array\n (size variable-number -- )\n\u003c/p\u003e",
          "module": "Language.SSVM.Operations",
          "name": "allocArray",
          "package": "simple-stacked-vm",
          "signature": "VM ()",
          "source": "src/Language-SSVM-Operations.html#allocArray",
          "type": "function"
        },
        "index": {
          "description": "Allocate an array size variable-number",
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "allocArray",
          "normalized": "VM()",
          "package": "simple-stacked-vm",
          "partial": "Array",
          "signature": "VM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:allocArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssign value to variable\n (value variable-number -- )\n\u003c/p\u003e",
          "module": "Language.SSVM.Operations",
          "name": "assign",
          "package": "simple-stacked-vm",
          "signature": "VM ()",
          "source": "src/Language-SSVM-Operations.html#assign",
          "type": "function"
        },
        "index": {
          "description": "Assign value to variable value variable-number",
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "assign",
          "normalized": "VM()",
          "package": "simple-stacked-vm",
          "signature": "VM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:assign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssign value to array item.\n (value array-or-variable-number index -- )\n\u003c/p\u003e",
          "module": "Language.SSVM.Operations",
          "name": "assignArray",
          "package": "simple-stacked-vm",
          "signature": "VM ()",
          "source": "src/Language-SSVM-Operations.html#assignArray",
          "type": "function"
        },
        "index": {
          "description": "Assign value to array item value array-or-variable-number index",
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "assignArray",
          "normalized": "VM()",
          "package": "simple-stacked-vm",
          "partial": "Array",
          "signature": "VM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:assignArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Operations",
          "name": "cmpF",
          "package": "simple-stacked-vm",
          "signature": "VM ()",
          "source": "src/Language-SSVM-Operations.html#cmpF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "cmpF",
          "normalized": "VM()",
          "package": "simple-stacked-vm",
          "signature": "VM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:cmpF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine word\n\u003c/p\u003e",
          "module": "Language.SSVM.Operations",
          "name": "define",
          "package": "simple-stacked-vm",
          "signature": "VM ()",
          "source": "src/Language-SSVM-Operations.html#define",
          "type": "function"
        },
        "index": {
          "description": "Define word",
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "define",
          "normalized": "VM()",
          "package": "simple-stacked-vm",
          "signature": "VM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:define"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Operations",
          "name": "divide",
          "package": "simple-stacked-vm",
          "signature": "VM ()",
          "source": "src/Language-SSVM-Operations.html#divide",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "divide",
          "normalized": "VM()",
          "package": "simple-stacked-vm",
          "signature": "VM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:divide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDuplicate stack head\n (a -- a a)\n\u003c/p\u003e",
          "module": "Language.SSVM.Operations",
          "name": "dup",
          "package": "simple-stacked-vm",
          "signature": "VM ()",
          "source": "src/Language-SSVM-Operations.html#dup",
          "type": "function"
        },
        "index": {
          "description": "Duplicate stack head",
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "dup",
          "normalized": "VM()",
          "package": "simple-stacked-vm",
          "signature": "VM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:dup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet mark by name\n ( -- pc)\n\u003c/p\u003e",
          "module": "Language.SSVM.Operations",
          "name": "getMark",
          "package": "simple-stacked-vm",
          "signature": "[Marks] -\u003e String -\u003e VM ()",
          "source": "src/Language-SSVM-Operations.html#getMark",
          "type": "function"
        },
        "index": {
          "description": "Get mark by name pc",
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "getMark",
          "normalized": "[Marks]-\u003eString-\u003eVM()",
          "package": "simple-stacked-vm",
          "partial": "Mark",
          "signature": "[Marks]-\u003eString-\u003eVM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:getMark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet PC from stack\n (pc -- )\n\u003c/p\u003e",
          "module": "Language.SSVM.Operations",
          "name": "goto",
          "package": "simple-stacked-vm",
          "signature": "VM ()",
          "source": "src/Language-SSVM-Operations.html#goto",
          "type": "function"
        },
        "index": {
          "description": "Get PC from stack pc",
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "goto",
          "normalized": "VM()",
          "package": "simple-stacked-vm",
          "signature": "VM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:goto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead value from stdin\n ( -- value)\n\u003c/p\u003e",
          "module": "Language.SSVM.Operations",
          "name": "input",
          "package": "simple-stacked-vm",
          "signature": "VM ()",
          "source": "src/Language-SSVM-Operations.html#input",
          "type": "function"
        },
        "index": {
          "description": "Read value from stdin value",
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "input",
          "normalized": "VM()",
          "package": "simple-stacked-vm",
          "signature": "VM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJump to given address if condition is satisfied\n\u003c/p\u003e",
          "module": "Language.SSVM.Operations",
          "name": "jumpIf",
          "package": "simple-stacked-vm",
          "signature": "(Integer -\u003e Bool) -\u003e VM ()",
          "source": "src/Language-SSVM-Operations.html#jumpIf",
          "type": "function"
        },
        "index": {
          "description": "Jump to given address if condition is satisfied",
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "jumpIf",
          "normalized": "(Integer-\u003eBool)-\u003eVM()",
          "package": "simple-stacked-vm",
          "partial": "If",
          "signature": "(Integer-\u003eBool)-\u003eVM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:jumpIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMark at current PC\n ( -- pc)\n\u003c/p\u003e",
          "module": "Language.SSVM.Operations",
          "name": "mark",
          "package": "simple-stacked-vm",
          "signature": "VM ()",
          "source": "src/Language-SSVM-Operations.html#mark",
          "type": "function"
        },
        "index": {
          "description": "Mark at current PC pc",
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "mark",
          "normalized": "VM()",
          "package": "simple-stacked-vm",
          "signature": "VM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:mark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Operations",
          "name": "mul",
          "package": "simple-stacked-vm",
          "signature": "VM ()",
          "source": "src/Language-SSVM-Operations.html#mul",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "mul",
          "normalized": "VM()",
          "package": "simple-stacked-vm",
          "signature": "VM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:mul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Operations",
          "name": "neg",
          "package": "simple-stacked-vm",
          "signature": "VM ()",
          "source": "src/Language-SSVM-Operations.html#neg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "neg",
          "normalized": "VM()",
          "package": "simple-stacked-vm",
          "signature": "VM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:neg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(a b -- a b a)\n\u003c/p\u003e",
          "module": "Language.SSVM.Operations",
          "name": "over",
          "package": "simple-stacked-vm",
          "signature": "VM ()",
          "source": "src/Language-SSVM-Operations.html#over",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "over",
          "normalized": "VM()",
          "package": "simple-stacked-vm",
          "signature": "VM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:over"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop stack head\n (a -- )\n\u003c/p\u003e",
          "module": "Language.SSVM.Operations",
          "name": "pop",
          "package": "simple-stacked-vm",
          "signature": "VM ()",
          "source": "src/Language-SSVM-Operations.html#pop",
          "type": "function"
        },
        "index": {
          "description": "Drop stack head",
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "pop",
          "normalized": "VM()",
          "package": "simple-stacked-vm",
          "signature": "VM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint current definition\n\u003c/p\u003e",
          "module": "Language.SSVM.Operations",
          "name": "printCurrentDef",
          "package": "simple-stacked-vm",
          "signature": "VM ()",
          "source": "src/Language-SSVM-Operations.html#printCurrentDef",
          "type": "function"
        },
        "index": {
          "description": "Print current definition",
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "printCurrentDef",
          "normalized": "VM()",
          "package": "simple-stacked-vm",
          "partial": "Current Def",
          "signature": "VM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:printCurrentDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint stack head\n (a -- )\n\u003c/p\u003e",
          "module": "Language.SSVM.Operations",
          "name": "printF",
          "package": "simple-stacked-vm",
          "signature": "VM ()",
          "source": "src/Language-SSVM-Operations.html#printF",
          "type": "function"
        },
        "index": {
          "description": "Print stack head",
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "printF",
          "normalized": "VM()",
          "package": "simple-stacked-vm",
          "signature": "VM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:printF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint stack content\n\u003c/p\u003e",
          "module": "Language.SSVM.Operations",
          "name": "printStack",
          "package": "simple-stacked-vm",
          "signature": "VM ()",
          "source": "src/Language-SSVM-Operations.html#printStack",
          "type": "function"
        },
        "index": {
          "description": "Print stack content",
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "printStack",
          "normalized": "VM()",
          "package": "simple-stacked-vm",
          "partial": "Stack",
          "signature": "VM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:printStack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush value to the stack\n\u003c/p\u003e",
          "module": "Language.SSVM.Operations",
          "name": "push",
          "package": "simple-stacked-vm",
          "signature": "a -\u003e VM ()",
          "source": "src/Language-SSVM-Operations.html#push",
          "type": "function"
        },
        "index": {
          "description": "Push value to the stack",
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "push",
          "normalized": "a-\u003eVM()",
          "package": "simple-stacked-vm",
          "signature": "a-\u003eVM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd item to current definition\n\u003c/p\u003e",
          "module": "Language.SSVM.Operations",
          "name": "pushD",
          "package": "simple-stacked-vm",
          "signature": "StackItem -\u003e VM ()",
          "source": "src/Language-SSVM-Operations.html#pushD",
          "type": "function"
        },
        "index": {
          "description": "Add item to current definition",
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "pushD",
          "normalized": "StackItem-\u003eVM()",
          "package": "simple-stacked-vm",
          "signature": "StackItem-\u003eVM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:pushD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush stack item to the stack\n\u003c/p\u003e",
          "module": "Language.SSVM.Operations",
          "name": "pushS",
          "package": "simple-stacked-vm",
          "signature": "StackItem -\u003e VM ()",
          "source": "src/Language-SSVM-Operations.html#pushS",
          "type": "function"
        },
        "index": {
          "description": "Push stack item to the stack",
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "pushS",
          "normalized": "StackItem-\u003eVM()",
          "package": "simple-stacked-vm",
          "signature": "StackItem-\u003eVM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:pushS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead item from array.\n (array-or-variable-number index -- value)\n\u003c/p\u003e",
          "module": "Language.SSVM.Operations",
          "name": "readArray",
          "package": "simple-stacked-vm",
          "signature": "VM ()",
          "source": "src/Language-SSVM-Operations.html#readArray",
          "type": "function"
        },
        "index": {
          "description": "Read item from array array-or-variable-number index value",
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "readArray",
          "normalized": "VM()",
          "package": "simple-stacked-vm",
          "partial": "Array",
          "signature": "VM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:readArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead variable value\n (variable-number -- value)\n\u003c/p\u003e",
          "module": "Language.SSVM.Operations",
          "name": "readVar",
          "package": "simple-stacked-vm",
          "signature": "VM ()",
          "source": "src/Language-SSVM-Operations.html#readVar",
          "type": "function"
        },
        "index": {
          "description": "Read variable value variable-number value",
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "readVar",
          "normalized": "VM()",
          "package": "simple-stacked-vm",
          "partial": "Var",
          "signature": "VM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:readVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecall word definition\n\u003c/p\u003e",
          "module": "Language.SSVM.Operations",
          "name": "recall",
          "package": "simple-stacked-vm",
          "signature": "String -\u003e VM Definition",
          "source": "src/Language-SSVM-Operations.html#recall",
          "type": "function"
        },
        "index": {
          "description": "Recall word definition",
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "recall",
          "normalized": "String-\u003eVM Definition",
          "package": "simple-stacked-vm",
          "signature": "String-\u003eVM Definition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:recall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Operations",
          "name": "remF",
          "package": "simple-stacked-vm",
          "signature": "VM ()",
          "source": "src/Language-SSVM-Operations.html#remF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "remF",
          "normalized": "VM()",
          "package": "simple-stacked-vm",
          "signature": "VM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:remF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrement PC\n\u003c/p\u003e",
          "module": "Language.SSVM.Operations",
          "name": "step",
          "package": "simple-stacked-vm",
          "signature": "VM ()",
          "source": "src/Language-SSVM-Operations.html#step",
          "type": "function"
        },
        "index": {
          "description": "Increment PC",
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "step",
          "normalized": "VM()",
          "package": "simple-stacked-vm",
          "signature": "VM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Operations",
          "name": "sub",
          "package": "simple-stacked-vm",
          "signature": "VM ()",
          "source": "src/Language-SSVM-Operations.html#sub",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "sub",
          "normalized": "VM()",
          "package": "simple-stacked-vm",
          "signature": "VM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwap two top items on the stack\n (a b -- b a)\n\u003c/p\u003e",
          "module": "Language.SSVM.Operations",
          "name": "swap",
          "package": "simple-stacked-vm",
          "signature": "VM ()",
          "source": "src/Language-SSVM-Operations.html#swap",
          "type": "function"
        },
        "index": {
          "description": "Swap two top items on the stack",
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "swap",
          "normalized": "VM()",
          "package": "simple-stacked-vm",
          "signature": "VM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:swap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine variable\n\u003c/p\u003e",
          "module": "Language.SSVM.Operations",
          "name": "variable",
          "package": "simple-stacked-vm",
          "signature": "VM ()",
          "source": "src/Language-SSVM-Operations.html#variable",
          "type": "function"
        },
        "index": {
          "description": "Define variable",
          "hierarchy": "Language SSVM Operations",
          "module": "Language.SSVM.Operations",
          "name": "variable",
          "normalized": "VM()",
          "package": "simple-stacked-vm",
          "signature": "VM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Operations.html#v:variable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Parser",
          "name": "Parser",
          "package": "simple-stacked-vm",
          "source": "src/Language-SSVM-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language SSVM Parser",
          "module": "Language.SSVM.Parser",
          "name": "Parser",
          "package": "simple-stacked-vm",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Parser",
          "name": "parseSourceFile",
          "package": "simple-stacked-vm",
          "signature": "FilePath -\u003e IO (Either ParseError Code)",
          "source": "src/Language-SSVM-Parser.html#parseSourceFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Parser",
          "module": "Language.SSVM.Parser",
          "name": "parseSourceFile",
          "normalized": "FilePath-\u003eIO(Either ParseError Code)",
          "package": "simple-stacked-vm",
          "partial": "Source File",
          "signature": "FilePath-\u003eIO(Either ParseError Code)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Parser.html#v:parseSourceFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Parser",
          "name": "parseVM",
          "package": "simple-stacked-vm",
          "signature": "FilePath -\u003e String -\u003e Either ParseError Code",
          "source": "src/Language-SSVM-Parser.html#parseVM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Parser",
          "module": "Language.SSVM.Parser",
          "name": "parseVM",
          "normalized": "FilePath-\u003eString-\u003eEither ParseError Code",
          "package": "simple-stacked-vm",
          "partial": "VM",
          "signature": "FilePath-\u003eString-\u003eEither ParseError Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Parser.html#v:parseVM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "Types",
          "package": "simple-stacked-vm",
          "source": "src/Language-SSVM-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "Types",
          "package": "simple-stacked-vm",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVM code\n\u003c/p\u003e",
          "module": "Language.SSVM.Types",
          "name": "Code",
          "package": "simple-stacked-vm",
          "source": "src/Language-SSVM-Types.html#Code",
          "type": "data"
        },
        "index": {
          "description": "VM code",
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "Code",
          "package": "simple-stacked-vm",
          "partial": "Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#t:Code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "DArray",
          "package": "simple-stacked-vm",
          "source": "src/Language-SSVM-Types.html#DArray",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "DArray",
          "package": "simple-stacked-vm",
          "partial": "DArray",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#t:DArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWord definition\n\u003c/p\u003e",
          "module": "Language.SSVM.Types",
          "name": "Definition",
          "package": "simple-stacked-vm",
          "source": "src/Language-SSVM-Types.html#Definition",
          "type": "data"
        },
        "index": {
          "description": "Word definition",
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "Definition",
          "package": "simple-stacked-vm",
          "partial": "Definition",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#t:Definition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVM instructions\n\u003c/p\u003e",
          "module": "Language.SSVM.Types",
          "name": "Instruction",
          "package": "simple-stacked-vm",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "data"
        },
        "index": {
          "description": "VM instructions",
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "Instruction",
          "package": "simple-stacked-vm",
          "partial": "Instruction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#t:Instruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "Marks",
          "package": "simple-stacked-vm",
          "source": "src/Language-SSVM-Types.html#Marks",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "Marks",
          "package": "simple-stacked-vm",
          "partial": "Marks",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#t:Marks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "Stack",
          "package": "simple-stacked-vm",
          "source": "src/Language-SSVM-Types.html#Stack",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "Stack",
          "package": "simple-stacked-vm",
          "partial": "Stack",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#t:Stack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStack item\n\u003c/p\u003e",
          "module": "Language.SSVM.Types",
          "name": "StackItem",
          "package": "simple-stacked-vm",
          "source": "src/Language-SSVM-Types.html#StackItem",
          "type": "data"
        },
        "index": {
          "description": "Stack item",
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "StackItem",
          "package": "simple-stacked-vm",
          "partial": "Stack Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#t:StackItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "StackType",
          "package": "simple-stacked-vm",
          "source": "src/Language-SSVM-Types.html#StackType",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "StackType",
          "package": "simple-stacked-vm",
          "partial": "Stack Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#t:StackType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVM monad\n\u003c/p\u003e",
          "module": "Language.SSVM.Types",
          "name": "VM",
          "package": "simple-stacked-vm",
          "source": "src/Language-SSVM-Types.html#VM",
          "type": "type"
        },
        "index": {
          "description": "VM monad",
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "VM",
          "package": "simple-stacked-vm",
          "partial": "VM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#t:VM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVM state\n\u003c/p\u003e",
          "module": "Language.SSVM.Types",
          "name": "VMState",
          "package": "simple-stacked-vm",
          "source": "src/Language-SSVM-Types.html#VMState",
          "type": "data"
        },
        "index": {
          "description": "VM state",
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "VMState",
          "package": "simple-stacked-vm",
          "partial": "VMState",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#t:VMState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "ABS",
          "package": "simple-stacked-vm",
          "signature": "ABS",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "ABS",
          "package": "simple-stacked-vm",
          "partial": "ABS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:ABS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "ADD",
          "package": "simple-stacked-vm",
          "signature": "ADD",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "ADD",
          "package": "simple-stacked-vm",
          "partial": "ADD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:ADD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "ARRAY",
          "package": "simple-stacked-vm",
          "signature": "ARRAY",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "ARRAY",
          "package": "simple-stacked-vm",
          "partial": "ARRAY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:ARRAY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "ASSIGN",
          "package": "simple-stacked-vm",
          "signature": "ASSIGN",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "ASSIGN",
          "package": "simple-stacked-vm",
          "partial": "ASSIGN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:ASSIGN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "ASSIGN_ARRAY",
          "package": "simple-stacked-vm",
          "signature": "ASSIGN_ARRAY",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "ASSIGN_ARRAY",
          "package": "simple-stacked-vm",
          "partial": "ASSIGN ARRAY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:ASSIGN_ARRAY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall named user-defined word\n\u003c/p\u003e",
          "module": "Language.SSVM.Types",
          "name": "CALL",
          "package": "simple-stacked-vm",
          "signature": "CALL String",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "description": "Call named user-defined word",
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "CALL",
          "package": "simple-stacked-vm",
          "partial": "CALL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:CALL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "CMP",
          "package": "simple-stacked-vm",
          "signature": "CMP",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "CMP",
          "package": "simple-stacked-vm",
          "partial": "CMP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:CMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "COLON",
          "package": "simple-stacked-vm",
          "signature": "COLON",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "COLON",
          "package": "simple-stacked-vm",
          "partial": "COLON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:COLON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "Code",
          "package": "simple-stacked-vm",
          "signature": "Code",
          "source": "src/Language-SSVM-Types.html#Code",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "Code",
          "package": "simple-stacked-vm",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:Code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "DEFINE",
          "package": "simple-stacked-vm",
          "signature": "DEFINE",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "DEFINE",
          "package": "simple-stacked-vm",
          "partial": "DEFINE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:DEFINE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "DIV",
          "package": "simple-stacked-vm",
          "signature": "DIV",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "DIV",
          "package": "simple-stacked-vm",
          "partial": "DIV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:DIV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "DROP",
          "package": "simple-stacked-vm",
          "signature": "DROP",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "DROP",
          "package": "simple-stacked-vm",
          "partial": "DROP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:DROP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "DUP",
          "package": "simple-stacked-vm",
          "signature": "DUP",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "DUP",
          "package": "simple-stacked-vm",
          "partial": "DUP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:DUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "Definition",
          "package": "simple-stacked-vm",
          "signature": "Definition Int Stack",
          "source": "src/Language-SSVM-Types.html#Definition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "Definition",
          "package": "simple-stacked-vm",
          "partial": "Definition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:Definition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "GETMARK",
          "package": "simple-stacked-vm",
          "signature": "GETMARK String",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "GETMARK",
          "package": "simple-stacked-vm",
          "partial": "GETMARK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:GETMARK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "GOTO",
          "package": "simple-stacked-vm",
          "signature": "GOTO",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "GOTO",
          "package": "simple-stacked-vm",
          "partial": "GOTO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:GOTO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "INPUT",
          "package": "simple-stacked-vm",
          "signature": "INPUT",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "INPUT",
          "package": "simple-stacked-vm",
          "partial": "INPUT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:INPUT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "JGE",
          "package": "simple-stacked-vm",
          "signature": "JGE",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "JGE",
          "package": "simple-stacked-vm",
          "partial": "JGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:JGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "JGT",
          "package": "simple-stacked-vm",
          "signature": "JGT",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "JGT",
          "package": "simple-stacked-vm",
          "partial": "JGT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:JGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "JLE",
          "package": "simple-stacked-vm",
          "signature": "JLE",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "JLE",
          "package": "simple-stacked-vm",
          "partial": "JLE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:JLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "JLT",
          "package": "simple-stacked-vm",
          "signature": "JLT",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "JLT",
          "package": "simple-stacked-vm",
          "partial": "JLT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:JLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "JNZ",
          "package": "simple-stacked-vm",
          "signature": "JNZ",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "JNZ",
          "package": "simple-stacked-vm",
          "partial": "JNZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:JNZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "JZ",
          "package": "simple-stacked-vm",
          "signature": "JZ",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "JZ",
          "package": "simple-stacked-vm",
          "partial": "JZ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:JZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "MARK",
          "package": "simple-stacked-vm",
          "signature": "MARK",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "MARK",
          "package": "simple-stacked-vm",
          "partial": "MARK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:MARK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "MUL",
          "package": "simple-stacked-vm",
          "signature": "MUL",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "MUL",
          "package": "simple-stacked-vm",
          "partial": "MUL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:MUL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "NEG",
          "package": "simple-stacked-vm",
          "signature": "NEG",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "NEG",
          "package": "simple-stacked-vm",
          "partial": "NEG",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:NEG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo nothing\n\u003c/p\u003e",
          "module": "Language.SSVM.Types",
          "name": "NOP",
          "package": "simple-stacked-vm",
          "signature": "NOP",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "description": "Do nothing",
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "NOP",
          "package": "simple-stacked-vm",
          "partial": "NOP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:NOP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "OVER",
          "package": "simple-stacked-vm",
          "signature": "OVER",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "OVER",
          "package": "simple-stacked-vm",
          "partial": "OVER",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:OVER"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "PRINT",
          "package": "simple-stacked-vm",
          "signature": "PRINT",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "PRINT",
          "package": "simple-stacked-vm",
          "partial": "PRINT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:PRINT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "PRINTALL",
          "package": "simple-stacked-vm",
          "signature": "PRINTALL",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "PRINTALL",
          "package": "simple-stacked-vm",
          "partial": "PRINTALL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:PRINTALL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "PUSH",
          "package": "simple-stacked-vm",
          "signature": "PUSH StackItem",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "PUSH",
          "package": "simple-stacked-vm",
          "partial": "PUSH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:PUSH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "Quote",
          "package": "simple-stacked-vm",
          "signature": "Quote StackItem",
          "source": "src/Language-SSVM-Types.html#StackItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "Quote",
          "package": "simple-stacked-vm",
          "partial": "Quote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:Quote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "READ",
          "package": "simple-stacked-vm",
          "signature": "READ",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "READ",
          "package": "simple-stacked-vm",
          "partial": "READ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:READ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "READ_ARRAY",
          "package": "simple-stacked-vm",
          "signature": "READ_ARRAY",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "READ_ARRAY",
          "package": "simple-stacked-vm",
          "partial": "READ ARRAY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:READ_ARRAY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "REM",
          "package": "simple-stacked-vm",
          "signature": "REM",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "REM",
          "package": "simple-stacked-vm",
          "partial": "REM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:REM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "SArray",
          "package": "simple-stacked-vm",
          "signature": "SArray DArray",
          "source": "src/Language-SSVM-Types.html#StackItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "SArray",
          "package": "simple-stacked-vm",
          "partial": "SArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:SArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "SInstruction",
          "package": "simple-stacked-vm",
          "signature": "SInstruction Instruction",
          "source": "src/Language-SSVM-Types.html#StackItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "SInstruction",
          "package": "simple-stacked-vm",
          "partial": "SInstruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:SInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "SInteger",
          "package": "simple-stacked-vm",
          "signature": "SInteger Integer",
          "source": "src/Language-SSVM-Types.html#StackItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "SInteger",
          "package": "simple-stacked-vm",
          "partial": "SInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:SInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "SString",
          "package": "simple-stacked-vm",
          "signature": "SString String",
          "source": "src/Language-SSVM-Types.html#StackItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "SString",
          "package": "simple-stacked-vm",
          "partial": "SString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:SString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "SUB",
          "package": "simple-stacked-vm",
          "signature": "SUB",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "SUB",
          "package": "simple-stacked-vm",
          "partial": "SUB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:SUB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "SWAP",
          "package": "simple-stacked-vm",
          "signature": "SWAP",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "SWAP",
          "package": "simple-stacked-vm",
          "partial": "SWAP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:SWAP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "VARIABLE",
          "package": "simple-stacked-vm",
          "signature": "VARIABLE",
          "source": "src/Language-SSVM-Types.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "VARIABLE",
          "package": "simple-stacked-vm",
          "partial": "VARIABLE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:VARIABLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "VMState",
          "package": "simple-stacked-vm",
          "signature": "VMState",
          "source": "src/Language-SSVM-Types.html#VMState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "VMState",
          "package": "simple-stacked-vm",
          "partial": "VMState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:VMState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "cCode",
          "package": "simple-stacked-vm",
          "signature": "[StackItem]",
          "source": "src/Language-SSVM-Types.html#Code",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "cCode",
          "normalized": "[StackItem]",
          "package": "simple-stacked-vm",
          "partial": "Code",
          "signature": "[StackItem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:cCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emarks stack\n\u003c/p\u003e",
          "module": "Language.SSVM.Types",
          "name": "cMarks",
          "package": "simple-stacked-vm",
          "signature": "[Marks]",
          "source": "src/Language-SSVM-Types.html#Code",
          "type": "function"
        },
        "index": {
          "description": "marks stack",
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "cMarks",
          "normalized": "[Marks]",
          "package": "simple-stacked-vm",
          "partial": "Marks",
          "signature": "[Marks]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:cMarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStarting VM state\n\u003c/p\u003e",
          "module": "Language.SSVM.Types",
          "name": "emptyVMState",
          "package": "simple-stacked-vm",
          "signature": "VMState",
          "source": "src/Language-SSVM-Types.html#emptyVMState",
          "type": "function"
        },
        "index": {
          "description": "Starting VM state",
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "emptyVMState",
          "package": "simple-stacked-vm",
          "partial": "VMState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:emptyVMState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "fromStack",
          "package": "simple-stacked-vm",
          "signature": "StackItem -\u003e Maybe a",
          "source": "src/Language-SSVM-Types.html#fromStack",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "fromStack",
          "normalized": "StackItem-\u003eMaybe a",
          "package": "simple-stacked-vm",
          "partial": "Stack",
          "signature": "StackItem-\u003eMaybe a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:fromStack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "showCode",
          "package": "simple-stacked-vm",
          "signature": "Code -\u003e String",
          "source": "src/Language-SSVM-Types.html#showCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "showCode",
          "normalized": "Code-\u003eString",
          "package": "simple-stacked-vm",
          "partial": "Code",
          "signature": "Code-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:showCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "showItem",
          "package": "simple-stacked-vm",
          "signature": "StackItem -\u003e String",
          "source": "src/Language-SSVM-Types.html#showItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "showItem",
          "normalized": "StackItem-\u003eString",
          "package": "simple-stacked-vm",
          "partial": "Item",
          "signature": "StackItem-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:showItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "showMarks",
          "package": "simple-stacked-vm",
          "signature": "Marks -\u003e String",
          "source": "src/Language-SSVM-Types.html#showMarks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "showMarks",
          "normalized": "Marks-\u003eString",
          "package": "simple-stacked-vm",
          "partial": "Marks",
          "signature": "Marks-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:showMarks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "showPrint",
          "package": "simple-stacked-vm",
          "signature": "StackItem -\u003e String",
          "source": "src/Language-SSVM-Types.html#showPrint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "showPrint",
          "normalized": "StackItem-\u003eString",
          "package": "simple-stacked-vm",
          "partial": "Print",
          "signature": "StackItem-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:showPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow type of item\n\u003c/p\u003e",
          "module": "Language.SSVM.Types",
          "name": "showType",
          "package": "simple-stacked-vm",
          "signature": "StackItem -\u003e String",
          "source": "src/Language-SSVM-Types.html#showType",
          "type": "function"
        },
        "index": {
          "description": "Show type of item",
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "showType",
          "normalized": "StackItem-\u003eString",
          "package": "simple-stacked-vm",
          "partial": "Type",
          "signature": "StackItem-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:showType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.SSVM.Types",
          "name": "toStack",
          "package": "simple-stacked-vm",
          "signature": "a -\u003e StackItem",
          "source": "src/Language-SSVM-Types.html#toStack",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "toStack",
          "normalized": "a-\u003eStackItem",
          "package": "simple-stacked-vm",
          "partial": "Stack",
          "signature": "a-\u003eStackItem",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:toStack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecurrent definition\n\u003c/p\u003e",
          "module": "Language.SSVM.Types",
          "name": "vmCurrentDefinition",
          "package": "simple-stacked-vm",
          "signature": "Stack",
          "source": "src/Language-SSVM-Types.html#VMState",
          "type": "function"
        },
        "index": {
          "description": "current definition",
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "vmCurrentDefinition",
          "package": "simple-stacked-vm",
          "partial": "Current Definition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:vmCurrentDefinition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ealready defined words\n\u003c/p\u003e",
          "module": "Language.SSVM.Types",
          "name": "vmDefinitions",
          "package": "simple-stacked-vm",
          "signature": "Map String Definition",
          "source": "src/Language-SSVM-Types.html#VMState",
          "type": "function"
        },
        "index": {
          "description": "already defined words",
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "vmDefinitions",
          "package": "simple-stacked-vm",
          "partial": "Definitions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:vmDefinitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enext variable number\n\u003c/p\u003e",
          "module": "Language.SSVM.Types",
          "name": "vmNextVariable",
          "package": "simple-stacked-vm",
          "signature": "Int",
          "source": "src/Language-SSVM-Types.html#VMState",
          "type": "function"
        },
        "index": {
          "description": "next variable number",
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "vmNextVariable",
          "package": "simple-stacked-vm",
          "partial": "Next Variable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:vmNextVariable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprogram counter\n\u003c/p\u003e",
          "module": "Language.SSVM.Types",
          "name": "vmPC",
          "package": "simple-stacked-vm",
          "signature": "Int",
          "source": "src/Language-SSVM-Types.html#VMState",
          "type": "function"
        },
        "index": {
          "description": "program counter",
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "vmPC",
          "package": "simple-stacked-vm",
          "partial": "PC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:vmPC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecurrent VM stack\n\u003c/p\u003e",
          "module": "Language.SSVM.Types",
          "name": "vmStack",
          "package": "simple-stacked-vm",
          "signature": "Stack",
          "source": "src/Language-SSVM-Types.html#VMState",
          "type": "function"
        },
        "index": {
          "description": "current VM stack",
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "vmStack",
          "package": "simple-stacked-vm",
          "partial": "Stack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:vmStack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etrace mode\n\u003c/p\u003e",
          "module": "Language.SSVM.Types",
          "name": "vmTraceMode",
          "package": "simple-stacked-vm",
          "signature": "Bool",
          "source": "src/Language-SSVM-Types.html#VMState",
          "type": "function"
        },
        "index": {
          "description": "trace mode",
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "vmTraceMode",
          "package": "simple-stacked-vm",
          "partial": "Trace Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:vmTraceMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evariables values\n\u003c/p\u003e",
          "module": "Language.SSVM.Types",
          "name": "vmVariables",
          "package": "simple-stacked-vm",
          "signature": "Map Int StackItem",
          "source": "src/Language-SSVM-Types.html#VMState",
          "type": "function"
        },
        "index": {
          "description": "variables values",
          "hierarchy": "Language SSVM Types",
          "module": "Language.SSVM.Types",
          "name": "vmVariables",
          "package": "simple-stacked-vm",
          "partial": "Variables",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-stacked-vm/docs/Language-SSVM-Types.html#v:vmVariables"
      }
    }
  ]
]