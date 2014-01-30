[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Distance.html#",
      "description": {
        "fct-module": "Language.ArrayForth.Distance",
        "fct-package": "array-forth",
        "fct-signature": "module",
        "fct-source": "src/Language-ArrayForth-Distance.html",
        "fct-type": "module",
        "title": "Distance"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Distance",
        "module": "Language.ArrayForth.Distance",
        "name": "Distance",
        "normalized": "",
        "package": "array-forth",
        "partial": "Distance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Distance.html#t:Distance",
      "description": {
        "fct-module": "Language.ArrayForth.Distance",
        "fct-package": "array-forth",
        "fct-signature": "type",
        "fct-source": "src/Language-ArrayForth-Distance.html#Distance",
        "fct-type": "type",
        "title": "Distance"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Distance",
        "module": "Language.ArrayForth.Distance",
        "name": "Distance",
        "normalized": "",
        "package": "array-forth",
        "partial": "Distance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Distance.html#v:countBits",
      "description": {
        "fct-descr": "\u003cp\u003eCounts the number of bits that differ between two numbers.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Distance",
        "fct-package": "array-forth",
        "fct-signature": "n -\u003e n -\u003e Int",
        "fct-source": "src/Language-ArrayForth-Distance.html#countBits",
        "fct-type": "function",
        "title": "countBits"
      },
      "index": {
        "description": "Counts the number of bits that differ between two numbers",
        "hierarchy": "Language ArrayForth Distance",
        "module": "Language.ArrayForth.Distance",
        "name": "countBits",
        "normalized": "a-\u003ea-\u003eInt",
        "package": "array-forth",
        "partial": "Bits",
        "signature": "n-\u003en-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Distance.html#v:locations",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a distance function that counts the different bits\n between the given memory locations.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Distance",
        "fct-package": "array-forth",
        "fct-signature": "[F18Word] -\u003e State -\u003e State -\u003e Distance",
        "fct-source": "src/Language-ArrayForth-Distance.html#locations",
        "fct-type": "function",
        "title": "locations"
      },
      "index": {
        "description": "Returns distance function that counts the different bits between the given memory locations",
        "hierarchy": "Language ArrayForth Distance",
        "module": "Language.ArrayForth.Distance",
        "name": "locations",
        "normalized": "[F Word]-\u003eState-\u003eState-\u003eDistance",
        "package": "array-forth",
        "partial": "",
        "signature": "[F Word]-\u003eState-\u003eState-\u003eDistance"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Distance.html#v:matching",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a score that counts the number of matching states\n according to some projection function.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Distance",
        "fct-package": "array-forth",
        "fct-signature": "(State -\u003e a) -\u003e Trace -\u003e Trace -\u003e Distance",
        "fct-source": "src/Language-ArrayForth-Distance.html#matching",
        "fct-type": "function",
        "title": "matching"
      },
      "index": {
        "description": "Returns score that counts the number of matching states according to some projection function",
        "hierarchy": "Language ArrayForth Distance",
        "module": "Language.ArrayForth.Distance",
        "name": "matching",
        "normalized": "(State-\u003ea)-\u003eTrace-\u003eTrace-\u003eDistance",
        "package": "array-forth",
        "partial": "",
        "signature": "(State-\u003ea)-\u003eTrace-\u003eTrace-\u003eDistance"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Distance.html#v:registers",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a distance function that counts the different bits between\n the given registers. You could use it like `compareRegisters [s, t]`.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Distance",
        "fct-package": "array-forth",
        "fct-signature": "[State -\u003e F18Word] -\u003e State -\u003e State -\u003e Distance",
        "fct-source": "src/Language-ArrayForth-Distance.html#registers",
        "fct-type": "function",
        "title": "registers"
      },
      "index": {
        "description": "Return distance function that counts the different bits between the given registers You could use it like compareRegisters",
        "hierarchy": "Language ArrayForth Distance",
        "module": "Language.ArrayForth.Distance",
        "name": "registers",
        "normalized": "[State-\u003eF Word]-\u003eState-\u003eState-\u003eDistance",
        "package": "array-forth",
        "partial": "",
        "signature": "[State-\u003eF Word]-\u003eState-\u003eState-\u003eDistance"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#",
      "description": {
        "fct-module": "Language.ArrayForth.Interpreter",
        "fct-package": "array-forth",
        "fct-signature": "module",
        "fct-source": "src/Language-ArrayForth-Interpreter.html",
        "fct-type": "module",
        "title": "Interpreter"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Interpreter",
        "module": "Language.ArrayForth.Interpreter",
        "name": "Interpreter",
        "normalized": "",
        "package": "array-forth",
        "partial": "Interpreter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#t:Trace",
      "description": {
        "fct-descr": "\u003cp\u003eA trace of a progam is the state after every word is executed.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Interpreter",
        "fct-package": "array-forth",
        "fct-signature": "type",
        "fct-source": "src/Language-ArrayForth-Interpreter.html#Trace",
        "fct-type": "type",
        "title": "Trace"
      },
      "index": {
        "description": "trace of progam is the state after every word is executed",
        "hierarchy": "Language ArrayForth Interpreter",
        "module": "Language.ArrayForth.Interpreter",
        "name": "Trace",
        "normalized": "",
        "package": "array-forth",
        "partial": "Trace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:countTime",
      "description": {
        "fct-descr": "\u003cp\u003eEstimates the execution time of a program trace.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Interpreter",
        "fct-package": "array-forth",
        "fct-signature": "Trace -\u003e Double",
        "fct-source": "src/Language-ArrayForth-Interpreter.html#countTime",
        "fct-type": "function",
        "title": "countTime"
      },
      "index": {
        "description": "Estimates the execution time of program trace",
        "hierarchy": "Language ArrayForth Interpreter",
        "module": "Language.ArrayForth.Interpreter",
        "name": "countTime",
        "normalized": "Trace-\u003eDouble",
        "package": "array-forth",
        "partial": "Time",
        "signature": "Trace-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:endWord",
      "description": {
        "fct-descr": "\u003cp\u003eDoes the given opcode cause the current word to stop executing?\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Interpreter",
        "fct-package": "array-forth",
        "fct-signature": "Opcode -\u003e Bool",
        "fct-source": "src/Language-ArrayForth-Interpreter.html#endWord",
        "fct-type": "function",
        "title": "endWord"
      },
      "index": {
        "description": "Does the given opcode cause the current word to stop executing",
        "hierarchy": "Language ArrayForth Interpreter",
        "module": "Language.ArrayForth.Interpreter",
        "name": "endWord",
        "normalized": "Opcode-\u003eBool",
        "package": "array-forth",
        "partial": "Word",
        "signature": "Opcode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:eval",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the program unil it hits a terminal state, returning only\n the resulting state.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Interpreter",
        "fct-package": "array-forth",
        "fct-signature": "State -\u003e State",
        "fct-source": "src/Language-ArrayForth-Interpreter.html#eval",
        "fct-type": "function",
        "title": "eval"
      },
      "index": {
        "description": "Runs the program unil it hits terminal state returning only the resulting state",
        "hierarchy": "Language ArrayForth Interpreter",
        "module": "Language.ArrayForth.Interpreter",
        "name": "eval",
        "normalized": "State-\u003eState",
        "package": "array-forth",
        "partial": "",
        "signature": "State-\u003eState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:execute",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes an opcode on the given state.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Interpreter",
        "fct-package": "array-forth",
        "fct-signature": "Opcode -\u003e State -\u003e State",
        "fct-source": "src/Language-ArrayForth-Interpreter.html#execute",
        "fct-type": "function",
        "title": "execute"
      },
      "index": {
        "description": "Executes an opcode on the given state",
        "hierarchy": "Language ArrayForth Interpreter",
        "module": "Language.ArrayForth.Interpreter",
        "name": "execute",
        "normalized": "Opcode-\u003eState-\u003eState",
        "package": "array-forth",
        "partial": "",
        "signature": "Opcode-\u003eState-\u003eState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:jump",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a jump instruction to the given address.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Interpreter",
        "fct-package": "array-forth",
        "fct-signature": "Opcode -\u003e F18Word -\u003e State -\u003e State",
        "fct-source": "src/Language-ArrayForth-Interpreter.html#jump",
        "fct-type": "function",
        "title": "jump"
      },
      "index": {
        "description": "Execute jump instruction to the given address",
        "hierarchy": "Language ArrayForth Interpreter",
        "module": "Language.ArrayForth.Interpreter",
        "name": "jump",
        "normalized": "Opcode-\u003eF Word-\u003eState-\u003eState",
        "package": "array-forth",
        "partial": "",
        "signature": "Opcode-\u003eF Word-\u003eState-\u003eState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eExtends the given trace by a single execution step. The trace\n cannot be empty.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Interpreter",
        "fct-package": "array-forth",
        "fct-signature": "Opcode -\u003e [State] -\u003e [State]",
        "fct-source": "src/Language-ArrayForth-Interpreter.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "Extends the given trace by single execution step The trace cannot be empty",
        "hierarchy": "Language ArrayForth Interpreter",
        "module": "Language.ArrayForth.Interpreter",
        "name": "run",
        "normalized": "Opcode-\u003e[State]-\u003e[State]",
        "package": "array-forth",
        "partial": "",
        "signature": "Opcode-\u003e[State]-\u003e[State]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:runNativeProgram",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes the specified program on the given state until it hits a\n \u003ca\u003eterminal\u003c/a\u003e word--a word made up of four nops or all 0s.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Interpreter",
        "fct-package": "array-forth",
        "fct-signature": "State -\u003e NativeProgram -\u003e State",
        "fct-source": "src/Language-ArrayForth-Interpreter.html#runNativeProgram",
        "fct-type": "function",
        "title": "runNativeProgram"
      },
      "index": {
        "description": "Executes the specified program on the given state until it hits terminal word--a word made up of four nops or all",
        "hierarchy": "Language ArrayForth Interpreter",
        "module": "Language.ArrayForth.Interpreter",
        "name": "runNativeProgram",
        "normalized": "State-\u003eNativeProgram-\u003eState",
        "package": "array-forth",
        "partial": "Native Program",
        "signature": "State-\u003eNativeProgram-\u003eState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:step",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes a single word in the given state, returning the last\n resulting state.q\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Interpreter",
        "fct-package": "array-forth",
        "fct-signature": "State -\u003e State",
        "fct-source": "src/Language-ArrayForth-Interpreter.html#step",
        "fct-type": "function",
        "title": "step"
      },
      "index": {
        "description": "Executes single word in the given state returning the last resulting state.q",
        "hierarchy": "Language ArrayForth Interpreter",
        "module": "Language.ArrayForth.Interpreter",
        "name": "step",
        "normalized": "State-\u003eState",
        "package": "array-forth",
        "partial": "",
        "signature": "State-\u003eState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:stepAll",
      "description": {
        "fct-descr": "\u003cp\u003eExecutes a single word in the given state, incrementing\n the program counter and returning all the intermediate states.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Interpreter",
        "fct-package": "array-forth",
        "fct-signature": "State -\u003e [State]",
        "fct-source": "src/Language-ArrayForth-Interpreter.html#stepAll",
        "fct-type": "function",
        "title": "stepAll"
      },
      "index": {
        "description": "Executes single word in the given state incrementing the program counter and returning all the intermediate states",
        "hierarchy": "Language ArrayForth Interpreter",
        "module": "Language.ArrayForth.Interpreter",
        "name": "stepAll",
        "normalized": "State-\u003e[State]",
        "package": "array-forth",
        "partial": "All",
        "signature": "State-\u003e[State]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:stepProgram",
      "description": {
        "fct-descr": "\u003cp\u003eTrace a program until it either hits four nops or all 0s.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Interpreter",
        "fct-package": "array-forth",
        "fct-signature": "State -\u003e Trace",
        "fct-source": "src/Language-ArrayForth-Interpreter.html#stepProgram",
        "fct-type": "function",
        "title": "stepProgram"
      },
      "index": {
        "description": "Trace program until it either hits four nops or all",
        "hierarchy": "Language ArrayForth Interpreter",
        "module": "Language.ArrayForth.Interpreter",
        "name": "stepProgram",
        "normalized": "State-\u003eTrace",
        "package": "array-forth",
        "partial": "Program",
        "signature": "State-\u003eTrace"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:throttle",
      "description": {
        "fct-descr": "\u003cp\u003eChecks that the program trace terminated in at most n steps,\n returning Nothing otherwise.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Interpreter",
        "fct-package": "array-forth",
        "fct-signature": "Int -\u003e Trace -\u003e Either Trace Trace",
        "fct-source": "src/Language-ArrayForth-Interpreter.html#throttle",
        "fct-type": "function",
        "title": "throttle"
      },
      "index": {
        "description": "Checks that the program trace terminated in at most steps returning Nothing otherwise",
        "hierarchy": "Language ArrayForth Interpreter",
        "module": "Language.ArrayForth.Interpreter",
        "name": "throttle",
        "normalized": "Int-\u003eTrace-\u003eEither Trace Trace",
        "package": "array-forth",
        "partial": "",
        "signature": "Int-\u003eTrace-\u003eEither Trace Trace"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:traceAll",
      "description": {
        "fct-descr": "\u003cp\u003eTrace the given program, including all the intermediate states.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Interpreter",
        "fct-package": "array-forth",
        "fct-signature": "State -\u003e Trace",
        "fct-source": "src/Language-ArrayForth-Interpreter.html#traceAll",
        "fct-type": "function",
        "title": "traceAll"
      },
      "index": {
        "description": "Trace the given program including all the intermediate states",
        "hierarchy": "Language ArrayForth Interpreter",
        "module": "Language.ArrayForth.Interpreter",
        "name": "traceAll",
        "normalized": "State-\u003eTrace",
        "package": "array-forth",
        "partial": "All",
        "signature": "State-\u003eTrace"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:traceProgram",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a trace of the program's execution. The trace is a list\n of the state of the chip after each step.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Interpreter",
        "fct-package": "array-forth",
        "fct-signature": "State -\u003e Trace",
        "fct-source": "src/Language-ArrayForth-Interpreter.html#traceProgram",
        "fct-type": "function",
        "title": "traceProgram"
      },
      "index": {
        "description": "Returns trace of the program execution The trace is list of the state of the chip after each step",
        "hierarchy": "Language ArrayForth Interpreter",
        "module": "Language.ArrayForth.Interpreter",
        "name": "traceProgram",
        "normalized": "State-\u003eTrace",
        "package": "array-forth",
        "partial": "Program",
        "signature": "State-\u003eTrace"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:word",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a single word's worth of instructions, returning only the\n final state.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Interpreter",
        "fct-package": "array-forth",
        "fct-signature": "Instrs -\u003e State -\u003e State",
        "fct-source": "src/Language-ArrayForth-Interpreter.html#word",
        "fct-type": "function",
        "title": "word"
      },
      "index": {
        "description": "Runs single word worth of instructions returning only the final state",
        "hierarchy": "Language ArrayForth Interpreter",
        "module": "Language.ArrayForth.Interpreter",
        "name": "word",
        "normalized": "Instrs-\u003eState-\u003eState",
        "package": "array-forth",
        "partial": "",
        "signature": "Instrs-\u003eState-\u003eState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:wordAll",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a single word's worth of instructions starting from the\n given state, returning the intermediate states for each executed\n opcode.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Interpreter",
        "fct-package": "array-forth",
        "fct-signature": "Instrs -\u003e State -\u003e [State]",
        "fct-source": "src/Language-ArrayForth-Interpreter.html#wordAll",
        "fct-type": "function",
        "title": "wordAll"
      },
      "index": {
        "description": "Runs single word worth of instructions starting from the given state returning the intermediate states for each executed opcode",
        "hierarchy": "Language ArrayForth Interpreter",
        "module": "Language.ArrayForth.Interpreter",
        "name": "wordAll",
        "normalized": "Instrs-\u003eState-\u003e[State]",
        "package": "array-forth",
        "partial": "All",
        "signature": "Instrs-\u003eState-\u003e[State]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-NativeProgram.html#",
      "description": {
        "fct-module": "Language.ArrayForth.NativeProgram",
        "fct-package": "array-forth",
        "fct-signature": "module",
        "fct-source": "src/Language-ArrayForth-NativeProgram.html",
        "fct-type": "module",
        "title": "NativeProgram"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth NativeProgram",
        "module": "Language.ArrayForth.NativeProgram",
        "name": "NativeProgram",
        "normalized": "",
        "package": "array-forth",
        "partial": "Native Program",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-NativeProgram.html#t:Instrs",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a word in memory. This word can either contain\n opcodes, opcodes and a jump address or just a constant number.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.NativeProgram",
        "fct-package": "array-forth",
        "fct-signature": "data",
        "fct-source": "src/Language-ArrayForth-NativeProgram.html#Instrs",
        "fct-type": "data",
        "title": "Instrs"
      },
      "index": {
        "description": "Represents word in memory This word can either contain opcodes opcodes and jump address or just constant number",
        "hierarchy": "Language ArrayForth NativeProgram",
        "module": "Language.ArrayForth.NativeProgram",
        "name": "Instrs",
        "normalized": "",
        "package": "array-forth",
        "partial": "Instrs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-NativeProgram.html#t:NativeProgram",
      "description": {
        "fct-descr": "\u003cp\u003eA program in the F18A instruction set.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.NativeProgram",
        "fct-package": "array-forth",
        "fct-signature": "type",
        "fct-source": "src/Language-ArrayForth-NativeProgram.html#NativeProgram",
        "fct-type": "type",
        "title": "NativeProgram"
      },
      "index": {
        "description": "program in the F18A instruction set",
        "hierarchy": "Language ArrayForth NativeProgram",
        "module": "Language.ArrayForth.NativeProgram",
        "name": "NativeProgram",
        "normalized": "",
        "package": "array-forth",
        "partial": "Native Program",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-NativeProgram.html#v:Constant",
      "description": {
        "fct-module": "Language.ArrayForth.NativeProgram",
        "fct-package": "array-forth",
        "fct-signature": "Constant F18Word",
        "fct-source": "src/Language-ArrayForth-NativeProgram.html#Instrs",
        "fct-type": "function",
        "title": "Constant"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth NativeProgram",
        "module": "Language.ArrayForth.NativeProgram",
        "name": "Constant",
        "normalized": "",
        "package": "array-forth",
        "partial": "Constant",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-NativeProgram.html#v:Instrs",
      "description": {
        "fct-module": "Language.ArrayForth.NativeProgram",
        "fct-package": "array-forth",
        "fct-signature": "Instrs Opcode Opcode Opcode Opcode",
        "fct-source": "src/Language-ArrayForth-NativeProgram.html#Instrs",
        "fct-type": "function",
        "title": "Instrs"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth NativeProgram",
        "module": "Language.ArrayForth.NativeProgram",
        "name": "Instrs",
        "normalized": "",
        "package": "array-forth",
        "partial": "Instrs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-NativeProgram.html#v:Jump1",
      "description": {
        "fct-module": "Language.ArrayForth.NativeProgram",
        "fct-package": "array-forth",
        "fct-signature": "Jump1 Opcode F18Word",
        "fct-source": "src/Language-ArrayForth-NativeProgram.html#Instrs",
        "fct-type": "function",
        "title": "Jump1"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth NativeProgram",
        "module": "Language.ArrayForth.NativeProgram",
        "name": "Jump1",
        "normalized": "",
        "package": "array-forth",
        "partial": "Jump",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-NativeProgram.html#v:Jump2",
      "description": {
        "fct-module": "Language.ArrayForth.NativeProgram",
        "fct-package": "array-forth",
        "fct-signature": "Jump2 Opcode Opcode F18Word",
        "fct-source": "src/Language-ArrayForth-NativeProgram.html#Instrs",
        "fct-type": "function",
        "title": "Jump2"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth NativeProgram",
        "module": "Language.ArrayForth.NativeProgram",
        "name": "Jump2",
        "normalized": "",
        "package": "array-forth",
        "partial": "Jump",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-NativeProgram.html#v:Jump3",
      "description": {
        "fct-module": "Language.ArrayForth.NativeProgram",
        "fct-package": "array-forth",
        "fct-signature": "Jump3 Opcode Opcode Opcode F18Word",
        "fct-source": "src/Language-ArrayForth-NativeProgram.html#Instrs",
        "fct-type": "function",
        "title": "Jump3"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth NativeProgram",
        "module": "Language.ArrayForth.NativeProgram",
        "name": "Jump3",
        "normalized": "",
        "package": "array-forth",
        "partial": "Jump",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-NativeProgram.html#v:fromBits",
      "description": {
        "fct-descr": "\u003cp\u003eReads in a word as a set of opcodes.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.NativeProgram",
        "fct-package": "array-forth",
        "fct-signature": "F18Word -\u003e Instrs",
        "fct-source": "src/Language-ArrayForth-NativeProgram.html#fromBits",
        "fct-type": "function",
        "title": "fromBits"
      },
      "index": {
        "description": "Reads in word as set of opcodes",
        "hierarchy": "Language ArrayForth NativeProgram",
        "module": "Language.ArrayForth.NativeProgram",
        "name": "fromBits",
        "normalized": "F Word-\u003eInstrs",
        "package": "array-forth",
        "partial": "Bits",
        "signature": "F Word-\u003eInstrs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-NativeProgram.html#v:readNativeProgram",
      "description": {
        "fct-descr": "\u003cp\u003eRead a whole program, splitting instructions up into words.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.NativeProgram",
        "fct-package": "array-forth",
        "fct-signature": "String -\u003e Either ParseError NativeProgram",
        "fct-source": "src/Language-ArrayForth-NativeProgram.html#readNativeProgram",
        "fct-type": "function",
        "title": "readNativeProgram"
      },
      "index": {
        "description": "Read whole program splitting instructions up into words",
        "hierarchy": "Language ArrayForth NativeProgram",
        "module": "Language.ArrayForth.NativeProgram",
        "name": "readNativeProgram",
        "normalized": "String-\u003eEither ParseError NativeProgram",
        "package": "array-forth",
        "partial": "Native Program",
        "signature": "String-\u003eEither ParseError NativeProgram"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-NativeProgram.html#v:runningTime",
      "description": {
        "fct-descr": "\u003cp\u003eEstimates the running time of the program in nanoseconds. This is\n based on the numbers provided in the manual: faster instructions\n take 1.5 nanoseconds and slower ones take 5. For now, this estimate\n ignores control flow like ifs and loops.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.NativeProgram",
        "fct-package": "array-forth",
        "fct-signature": "NativeProgram -\u003e Double",
        "fct-source": "src/Language-ArrayForth-NativeProgram.html#runningTime",
        "fct-type": "function",
        "title": "runningTime"
      },
      "index": {
        "description": "Estimates the running time of the program in nanoseconds This is based on the numbers provided in the manual faster instructions take nanoseconds and slower ones take For now this estimate ignores control flow like ifs and loops",
        "hierarchy": "Language ArrayForth NativeProgram",
        "module": "Language.ArrayForth.NativeProgram",
        "name": "runningTime",
        "normalized": "NativeProgram-\u003eDouble",
        "package": "array-forth",
        "partial": "Time",
        "signature": "NativeProgram-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-NativeProgram.html#v:splitWords",
      "description": {
        "fct-descr": "\u003cp\u003eSplits a list into chunks of at most four, breaking off a chunk\n whenever it sees an element matching the given predicate. This is\n useful for splitting a program along word boundaries, accounting\n for jump addresses.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.NativeProgram",
        "fct-package": "array-forth",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/Language-ArrayForth-NativeProgram.html#splitWords",
        "fct-type": "function",
        "title": "splitWords"
      },
      "index": {
        "description": "Splits list into chunks of at most four breaking off chunk whenever it sees an element matching the given predicate This is useful for splitting program along word boundaries accounting for jump addresses",
        "hierarchy": "Language ArrayForth NativeProgram",
        "module": "Language.ArrayForth.NativeProgram",
        "name": "splitWords",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
        "package": "array-forth",
        "partial": "Words",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-NativeProgram.html#v:toBits",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the given instructions as an actual word. This assumes\n the address is sized appropriately.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.NativeProgram",
        "fct-package": "array-forth",
        "fct-signature": "Instrs -\u003e F18Word",
        "fct-source": "src/Language-ArrayForth-NativeProgram.html#toBits",
        "fct-type": "function",
        "title": "toBits"
      },
      "index": {
        "description": "Returns the given instructions as an actual word This assumes the address is sized appropriately",
        "hierarchy": "Language ArrayForth NativeProgram",
        "module": "Language.ArrayForth.NativeProgram",
        "name": "toBits",
        "normalized": "Instrs-\u003eF Word",
        "package": "array-forth",
        "partial": "Bits",
        "signature": "Instrs-\u003eF Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-NativeProgram.html#v:toOpcodes",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the opcodes in the given instruction word. A constant\n corresponds to not having any opcodes.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.NativeProgram",
        "fct-package": "array-forth",
        "fct-signature": "Instrs -\u003e [Opcode]",
        "fct-source": "src/Language-ArrayForth-NativeProgram.html#toOpcodes",
        "fct-type": "function",
        "title": "toOpcodes"
      },
      "index": {
        "description": "Returns the opcodes in the given instruction word constant corresponds to not having any opcodes",
        "hierarchy": "Language ArrayForth NativeProgram",
        "module": "Language.ArrayForth.NativeProgram",
        "name": "toOpcodes",
        "normalized": "Instrs-\u003e[Opcode]",
        "package": "array-forth",
        "partial": "Opcodes",
        "signature": "Instrs-\u003e[Opcode]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "module",
        "fct-source": "src/Language-ArrayForth-Opcode.html",
        "fct-type": "module",
        "title": "Opcode"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "Opcode",
        "normalized": "",
        "package": "array-forth",
        "partial": "Opcode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#t:F18Word",
      "description": {
        "fct-descr": "\u003cp\u003eThe 18-bit word type used by Greenarrays chips.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "type",
        "fct-source": "src/Language-ArrayForth-Opcode.html#F18Word",
        "fct-type": "type",
        "title": "F18Word"
      },
      "index": {
        "description": "The bit word type used by Greenarrays chips",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "F18Word",
        "normalized": "",
        "package": "array-forth",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#t:Opcode",
      "description": {
        "fct-descr": "\u003cp\u003eEach F18A instruction, ordered by opcode.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "data",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "data",
        "title": "Opcode"
      },
      "index": {
        "description": "Each F18A instruction ordered by opcode",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "Opcode",
        "normalized": "",
        "package": "array-forth",
        "partial": "Opcode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:And",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "And",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "And"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "And",
        "normalized": "",
        "package": "array-forth",
        "partial": "And",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Call",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "Call",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "Call"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "Call",
        "normalized": "",
        "package": "array-forth",
        "partial": "Call",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Div2",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "Div2",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "Div2"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "Div2",
        "normalized": "",
        "package": "array-forth",
        "partial": "Div",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Drop",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "Drop",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "Drop"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "Drop",
        "normalized": "",
        "package": "array-forth",
        "partial": "Drop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Dup",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "Dup",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "Dup"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "Dup",
        "normalized": "",
        "package": "array-forth",
        "partial": "Dup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Exec",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "Exec",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "Exec"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "Exec",
        "normalized": "",
        "package": "array-forth",
        "partial": "Exec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Fetch",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "Fetch",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "Fetch"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "Fetch",
        "normalized": "",
        "package": "array-forth",
        "partial": "Fetch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:FetchB",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "FetchB",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "FetchB"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "FetchB",
        "normalized": "",
        "package": "array-forth",
        "partial": "Fetch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:FetchP",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "FetchP",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "FetchP"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "FetchP",
        "normalized": "",
        "package": "array-forth",
        "partial": "Fetch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:FetchPlus",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "FetchPlus",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "FetchPlus"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "FetchPlus",
        "normalized": "",
        "package": "array-forth",
        "partial": "Fetch Plus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:If",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "If",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "If"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "If",
        "normalized": "",
        "package": "array-forth",
        "partial": "If",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Jmp",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "Jmp",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "Jmp"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "Jmp",
        "normalized": "",
        "package": "array-forth",
        "partial": "Jmp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:MinusIf",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "MinusIf",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "MinusIf"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "MinusIf",
        "normalized": "",
        "package": "array-forth",
        "partial": "Minus If",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:MultiplyStep",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "MultiplyStep",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "MultiplyStep"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "MultiplyStep",
        "normalized": "",
        "package": "array-forth",
        "partial": "Multiply Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Next",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "Next",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "Next"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "Next",
        "normalized": "",
        "package": "array-forth",
        "partial": "Next",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Nop",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "Nop",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "Nop"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "Nop",
        "normalized": "",
        "package": "array-forth",
        "partial": "Nop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Not",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "Not",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "Not"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "Not",
        "normalized": "",
        "package": "array-forth",
        "partial": "Not",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Or",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "Or",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "Or"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "Or",
        "normalized": "",
        "package": "array-forth",
        "partial": "Or",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Over",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "Over",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "Over"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "Over",
        "normalized": "",
        "package": "array-forth",
        "partial": "Over",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Plus",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "Plus",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "Plus"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "Plus",
        "normalized": "",
        "package": "array-forth",
        "partial": "Plus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Pop",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "Pop",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "Pop"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "Pop",
        "normalized": "",
        "package": "array-forth",
        "partial": "Pop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Push",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "Push",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "Push"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "Push",
        "normalized": "",
        "package": "array-forth",
        "partial": "Push",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:ReadA",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "ReadA",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "ReadA"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "ReadA",
        "normalized": "",
        "package": "array-forth",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Ret",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "Ret",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "Ret"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "Ret",
        "normalized": "",
        "package": "array-forth",
        "partial": "Ret",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:SetA",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "SetA",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "SetA"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "SetA",
        "normalized": "",
        "package": "array-forth",
        "partial": "Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:SetB",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "SetB",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "SetB"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "SetB",
        "normalized": "",
        "package": "array-forth",
        "partial": "Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Store",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "Store",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "Store"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "Store",
        "normalized": "",
        "package": "array-forth",
        "partial": "Store",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:StoreB",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "StoreB",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "StoreB"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "StoreB",
        "normalized": "",
        "package": "array-forth",
        "partial": "Store",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:StoreP",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "StoreP",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "StoreP"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "StoreP",
        "normalized": "",
        "package": "array-forth",
        "partial": "Store",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:StorePlus",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "StorePlus",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "StorePlus"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "StorePlus",
        "normalized": "",
        "package": "array-forth",
        "partial": "Store Plus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Times2",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "Times2",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "Times2"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "Times2",
        "normalized": "",
        "package": "array-forth",
        "partial": "Times",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Unext",
      "description": {
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "Unext",
        "fct-source": "src/Language-ArrayForth-Opcode.html#Opcode",
        "fct-type": "function",
        "title": "Unext"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "Unext",
        "normalized": "",
        "package": "array-forth",
        "partial": "Unext",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:fromOpcode",
      "description": {
        "fct-descr": "\u003cp\u003eConverts an Opcode to its 18-bit word representation.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "Opcode -\u003e F18Word",
        "fct-source": "src/Language-ArrayForth-Opcode.html#fromOpcode",
        "fct-type": "function",
        "title": "fromOpcode"
      },
      "index": {
        "description": "Converts an Opcode to its bit word representation",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "fromOpcode",
        "normalized": "Opcode-\u003eF Word",
        "package": "array-forth",
        "partial": "Opcode",
        "signature": "Opcode-\u003eF Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:isJump",
      "description": {
        "fct-descr": "\u003cp\u003eReturns whether the given opcode is a jump instruction expecting\n an address.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "Opcode -\u003e Bool",
        "fct-source": "src/Language-ArrayForth-Opcode.html#isJump",
        "fct-type": "function",
        "title": "isJump"
      },
      "index": {
        "description": "Returns whether the given opcode is jump instruction expecting an address",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "isJump",
        "normalized": "Opcode-\u003eBool",
        "package": "array-forth",
        "partial": "Jump",
        "signature": "Opcode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:names",
      "description": {
        "fct-descr": "\u003cp\u003eThe names of the different instructions, ordered by opcode.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "[String]",
        "fct-source": "src/Language-ArrayForth-Opcode.html#names",
        "fct-type": "function",
        "title": "names"
      },
      "index": {
        "description": "The names of the different instructions ordered by opcode",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "names",
        "normalized": "[String]",
        "package": "array-forth",
        "partial": "",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:opcodeTime",
      "description": {
        "fct-descr": "\u003cp\u003eEstimates how long a given opcode will take to execute. Normal\n opcodes take 1.5 nanoseconds where ones that access the memory take\n 5 nanoseconds.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "Opcode -\u003e Double",
        "fct-source": "src/Language-ArrayForth-Opcode.html#opcodeTime",
        "fct-type": "function",
        "title": "opcodeTime"
      },
      "index": {
        "description": "Estimates how long given opcode will take to execute Normal opcodes take nanoseconds where ones that access the memory take nanoseconds",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "opcodeTime",
        "normalized": "Opcode-\u003eDouble",
        "package": "array-forth",
        "partial": "Time",
        "signature": "Opcode-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:opcodes",
      "description": {
        "fct-descr": "\u003cp\u003eAll of the opcodes, in order.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "[Opcode]",
        "fct-source": "src/Language-ArrayForth-Opcode.html#opcodes",
        "fct-type": "function",
        "title": "opcodes"
      },
      "index": {
        "description": "All of the opcodes in order",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "opcodes",
        "normalized": "[Opcode]",
        "package": "array-forth",
        "partial": "",
        "signature": "[Opcode]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:readOpcode",
      "description": {
        "fct-descr": "\u003cp\u003eTries to read a given string as an opcode from the list of names.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "String -\u003e Either ParseError Opcode",
        "fct-source": "src/Language-ArrayForth-Opcode.html#readOpcode",
        "fct-type": "function",
        "title": "readOpcode"
      },
      "index": {
        "description": "Tries to read given string as an opcode from the list of names",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "readOpcode",
        "normalized": "String-\u003eEither ParseError Opcode",
        "package": "array-forth",
        "partial": "Opcode",
        "signature": "String-\u003eEither ParseError Opcode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:slot3",
      "description": {
        "fct-descr": "\u003cp\u003eCan the given opcode go in the last slot?\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "Opcode -\u003e Bool",
        "fct-source": "src/Language-ArrayForth-Opcode.html#slot3",
        "fct-type": "function",
        "title": "slot3"
      },
      "index": {
        "description": "Can the given opcode go in the last slot",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "slot3",
        "normalized": "Opcode-\u003eBool",
        "package": "array-forth",
        "partial": "",
        "signature": "Opcode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:toOpcode",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a word to an opcode. The word has to be \u003c 32.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Opcode",
        "fct-package": "array-forth",
        "fct-signature": "F18Word -\u003e Opcode",
        "fct-source": "src/Language-ArrayForth-Opcode.html#toOpcode",
        "fct-type": "function",
        "title": "toOpcode"
      },
      "index": {
        "description": "Converts word to an opcode The word has to be",
        "hierarchy": "Language ArrayForth Opcode",
        "module": "Language.ArrayForth.Opcode",
        "name": "toOpcode",
        "normalized": "F Word-\u003eOpcode",
        "package": "array-forth",
        "partial": "Opcode",
        "signature": "F Word-\u003eOpcode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Parse.html#",
      "description": {
        "fct-module": "Language.ArrayForth.Parse",
        "fct-package": "array-forth",
        "fct-signature": "module",
        "fct-source": "src/Language-ArrayForth-Parse.html",
        "fct-type": "module",
        "title": "Parse"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Parse",
        "module": "Language.ArrayForth.Parse",
        "name": "Parse",
        "normalized": "",
        "package": "array-forth",
        "partial": "Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Parse.html#t:ParseError",
      "description": {
        "fct-descr": "\u003cp\u003ePossible ways the input string can be malformed.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Parse",
        "fct-package": "array-forth",
        "fct-signature": "data",
        "fct-source": "src/Language-ArrayForth-Parse.html#ParseError",
        "fct-type": "data",
        "title": "ParseError"
      },
      "index": {
        "description": "Possible ways the input string can be malformed",
        "hierarchy": "Language ArrayForth Parse",
        "module": "Language.ArrayForth.Parse",
        "name": "ParseError",
        "normalized": "",
        "package": "array-forth",
        "partial": "Parse Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Parse.html#v:BadNumber",
      "description": {
        "fct-module": "Language.ArrayForth.Parse",
        "fct-package": "array-forth",
        "fct-signature": "BadNumber String",
        "fct-source": "src/Language-ArrayForth-Parse.html#ParseError",
        "fct-type": "function",
        "title": "BadNumber"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Parse",
        "module": "Language.ArrayForth.Parse",
        "name": "BadNumber",
        "normalized": "",
        "package": "array-forth",
        "partial": "Bad Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Parse.html#v:BadOpcode",
      "description": {
        "fct-module": "Language.ArrayForth.Parse",
        "fct-package": "array-forth",
        "fct-signature": "BadOpcode String",
        "fct-source": "src/Language-ArrayForth-Parse.html#ParseError",
        "fct-type": "function",
        "title": "BadOpcode"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Parse",
        "module": "Language.ArrayForth.Parse",
        "name": "BadOpcode",
        "normalized": "",
        "package": "array-forth",
        "partial": "Bad Opcode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Parse.html#v:NoAddr",
      "description": {
        "fct-module": "Language.ArrayForth.Parse",
        "fct-package": "array-forth",
        "fct-signature": "NoAddr String",
        "fct-source": "src/Language-ArrayForth-Parse.html#ParseError",
        "fct-type": "function",
        "title": "NoAddr"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Parse",
        "module": "Language.ArrayForth.Parse",
        "name": "NoAddr",
        "normalized": "",
        "package": "array-forth",
        "partial": "No Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Parse.html#v:NotJump",
      "description": {
        "fct-module": "Language.ArrayForth.Parse",
        "fct-package": "array-forth",
        "fct-signature": "NotJump String",
        "fct-source": "src/Language-ArrayForth-Parse.html#ParseError",
        "fct-type": "function",
        "title": "NotJump"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Parse",
        "module": "Language.ArrayForth.Parse",
        "name": "NotJump",
        "normalized": "",
        "package": "array-forth",
        "partial": "Not Jump",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Parse.html#v:NotSlot3",
      "description": {
        "fct-module": "Language.ArrayForth.Parse",
        "fct-package": "array-forth",
        "fct-signature": "NotSlot3 String",
        "fct-source": "src/Language-ArrayForth-Parse.html#ParseError",
        "fct-type": "function",
        "title": "NotSlot3"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Parse",
        "module": "Language.ArrayForth.Parse",
        "name": "NotSlot3",
        "normalized": "",
        "package": "array-forth",
        "partial": "Not Slot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Parse.html#v:isNumber",
      "description": {
        "fct-descr": "\u003cp\u003eIs the given string a valid number with no other tokens?\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Parse",
        "fct-package": "array-forth",
        "fct-signature": "String -\u003e Bool",
        "fct-source": "src/Language-ArrayForth-Parse.html#isNumber",
        "fct-type": "function",
        "title": "isNumber"
      },
      "index": {
        "description": "Is the given string valid number with no other tokens",
        "hierarchy": "Language ArrayForth Parse",
        "module": "Language.ArrayForth.Parse",
        "name": "isNumber",
        "normalized": "String-\u003eBool",
        "package": "array-forth",
        "partial": "Number",
        "signature": "String-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Parse.html#v:readWord",
      "description": {
        "fct-descr": "\u003cp\u003eTries to read a word, giving an error if it fails.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Parse",
        "fct-package": "array-forth",
        "fct-signature": "String -\u003e Either ParseError a",
        "fct-source": "src/Language-ArrayForth-Parse.html#readWord",
        "fct-type": "function",
        "title": "readWord"
      },
      "index": {
        "description": "Tries to read word giving an error if it fails",
        "hierarchy": "Language ArrayForth Parse",
        "module": "Language.ArrayForth.Parse",
        "name": "readWord",
        "normalized": "String-\u003eEither ParseError a",
        "package": "array-forth",
        "partial": "Word",
        "signature": "String-\u003eEither ParseError a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#",
      "description": {
        "fct-module": "Language.ArrayForth.Program",
        "fct-package": "array-forth",
        "fct-signature": "module",
        "fct-source": "src/Language-ArrayForth-Program.html",
        "fct-type": "module",
        "title": "Program"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Program",
        "module": "Language.ArrayForth.Program",
        "name": "Program",
        "normalized": "",
        "package": "array-forth",
        "partial": "Program",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#t:Addr",
      "description": {
        "fct-module": "Language.ArrayForth.Program",
        "fct-package": "array-forth",
        "fct-signature": "data",
        "fct-source": "src/Language-ArrayForth-Program.html#Addr",
        "fct-type": "data",
        "title": "Addr"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Program",
        "module": "Language.ArrayForth.Program",
        "name": "Addr",
        "normalized": "",
        "package": "array-forth",
        "partial": "Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#t:Instruction",
      "description": {
        "fct-descr": "\u003cp\u003eRepresents a single instruction as viewed by the\n synthesizer. This can be an opcode, a numeric literal or a token\n representing an unused slot.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Program",
        "fct-package": "array-forth",
        "fct-signature": "data",
        "fct-source": "src/Language-ArrayForth-Program.html#Instruction",
        "fct-type": "data",
        "title": "Instruction"
      },
      "index": {
        "description": "Represents single instruction as viewed by the synthesizer This can be an opcode numeric literal or token representing an unused slot",
        "hierarchy": "Language ArrayForth Program",
        "module": "Language.ArrayForth.Program",
        "name": "Instruction",
        "normalized": "",
        "package": "array-forth",
        "partial": "Instruction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#t:Program",
      "description": {
        "fct-descr": "\u003cp\u003eA program to be manipulated by the MCMC synthesizer\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Program",
        "fct-package": "array-forth",
        "fct-signature": "type",
        "fct-source": "src/Language-ArrayForth-Program.html#Program",
        "fct-type": "type",
        "title": "Program"
      },
      "index": {
        "description": "program to be manipulated by the MCMC synthesizer",
        "hierarchy": "Language ArrayForth Program",
        "module": "Language.ArrayForth.Program",
        "name": "Program",
        "normalized": "",
        "package": "array-forth",
        "partial": "Program",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:Abstract",
      "description": {
        "fct-module": "Language.ArrayForth.Program",
        "fct-package": "array-forth",
        "fct-signature": "Abstract String",
        "fct-source": "src/Language-ArrayForth-Program.html#Addr",
        "fct-type": "function",
        "title": "Abstract"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Program",
        "module": "Language.ArrayForth.Program",
        "name": "Abstract",
        "normalized": "",
        "package": "array-forth",
        "partial": "Abstract",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:Concrete",
      "description": {
        "fct-module": "Language.ArrayForth.Program",
        "fct-package": "array-forth",
        "fct-signature": "Concrete F18Word",
        "fct-source": "src/Language-ArrayForth-Program.html#Addr",
        "fct-type": "function",
        "title": "Concrete"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Program",
        "module": "Language.ArrayForth.Program",
        "name": "Concrete",
        "normalized": "",
        "package": "array-forth",
        "partial": "Concrete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:Jump",
      "description": {
        "fct-module": "Language.ArrayForth.Program",
        "fct-package": "array-forth",
        "fct-signature": "Jump Opcode Addr",
        "fct-source": "src/Language-ArrayForth-Program.html#Instruction",
        "fct-type": "function",
        "title": "Jump"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Program",
        "module": "Language.ArrayForth.Program",
        "name": "Jump",
        "normalized": "",
        "package": "array-forth",
        "partial": "Jump",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:Label",
      "description": {
        "fct-module": "Language.ArrayForth.Program",
        "fct-package": "array-forth",
        "fct-signature": "Label String",
        "fct-source": "src/Language-ArrayForth-Program.html#Instruction",
        "fct-type": "function",
        "title": "Label"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Program",
        "module": "Language.ArrayForth.Program",
        "name": "Label",
        "normalized": "",
        "package": "array-forth",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:Number",
      "description": {
        "fct-module": "Language.ArrayForth.Program",
        "fct-package": "array-forth",
        "fct-signature": "Number F18Word",
        "fct-source": "src/Language-ArrayForth-Program.html#Instruction",
        "fct-type": "function",
        "title": "Number"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Program",
        "module": "Language.ArrayForth.Program",
        "name": "Number",
        "normalized": "",
        "package": "array-forth",
        "partial": "Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:Opcode",
      "description": {
        "fct-module": "Language.ArrayForth.Program",
        "fct-package": "array-forth",
        "fct-signature": "Opcode Opcode",
        "fct-source": "src/Language-ArrayForth-Program.html#Instruction",
        "fct-type": "function",
        "title": "Opcode"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Program",
        "module": "Language.ArrayForth.Program",
        "name": "Opcode",
        "normalized": "",
        "package": "array-forth",
        "partial": "Opcode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:Unused",
      "description": {
        "fct-module": "Language.ArrayForth.Program",
        "fct-package": "array-forth",
        "fct-signature": "Unused",
        "fct-source": "src/Language-ArrayForth-Program.html#Instruction",
        "fct-type": "function",
        "title": "Unused"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Program",
        "module": "Language.ArrayForth.Program",
        "name": "Unused",
        "normalized": "",
        "package": "array-forth",
        "partial": "Unused",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:boundary",
      "description": {
        "fct-descr": "\u003cp\u003eDoes this instruction force a word boundary?\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Program",
        "fct-package": "array-forth",
        "fct-signature": "Instruction -\u003e Bool",
        "fct-source": "src/Language-ArrayForth-Program.html#boundary",
        "fct-type": "function",
        "title": "boundary"
      },
      "index": {
        "description": "Does this instruction force word boundary",
        "hierarchy": "Language ArrayForth Program",
        "module": "Language.ArrayForth.Program",
        "name": "boundary",
        "normalized": "Instruction-\u003eBool",
        "package": "array-forth",
        "partial": "",
        "signature": "Instruction-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:fixSlot3",
      "description": {
        "fct-descr": "\u003cp\u003eInsert extra nops to account for instructions that cannot go into\n the last slot.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Program",
        "fct-package": "array-forth",
        "fct-signature": "Program -\u003e Program",
        "fct-source": "src/Language-ArrayForth-Program.html#fixSlot3",
        "fct-type": "function",
        "title": "fixSlot3"
      },
      "index": {
        "description": "Insert extra nops to account for instructions that cannot go into the last slot",
        "hierarchy": "Language ArrayForth Program",
        "module": "Language.ArrayForth.Program",
        "name": "fixSlot3",
        "normalized": "Program-\u003eProgram",
        "package": "array-forth",
        "partial": "Slot",
        "signature": "Program-\u003eProgram"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:fromNative",
      "description": {
        "fct-descr": "\u003cp\u003eGets a synthesizer program from a native program. Currently does\n not support jumps.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Program",
        "fct-package": "array-forth",
        "fct-signature": "NativeProgram -\u003e Program",
        "fct-source": "src/Language-ArrayForth-Program.html#fromNative",
        "fct-type": "function",
        "title": "fromNative"
      },
      "index": {
        "description": "Gets synthesizer program from native program Currently does not support jumps",
        "hierarchy": "Language ArrayForth Program",
        "module": "Language.ArrayForth.Program",
        "name": "fromNative",
        "normalized": "NativeProgram-\u003eProgram",
        "package": "array-forth",
        "partial": "Native",
        "signature": "NativeProgram-\u003eProgram"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:labels",
      "description": {
        "fct-descr": "\u003cp\u003eResolves labels into addresses, assuming the program starts at\n the given memory location.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Program",
        "fct-package": "array-forth",
        "fct-signature": "F18Word -\u003e Program -\u003e Program",
        "fct-source": "src/Language-ArrayForth-Program.html#labels",
        "fct-type": "function",
        "title": "labels"
      },
      "index": {
        "description": "Resolves labels into addresses assuming the program starts at the given memory location",
        "hierarchy": "Language ArrayForth Program",
        "module": "Language.ArrayForth.Program",
        "name": "labels",
        "normalized": "F Word-\u003eProgram-\u003eProgram",
        "package": "array-forth",
        "partial": "",
        "signature": "F Word-\u003eProgram-\u003eProgram"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:load",
      "description": {
        "fct-descr": "\u003cp\u003eLoads the given synthesizer-friendly program into the given\n state.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Program",
        "fct-package": "array-forth",
        "fct-signature": "Program -\u003e State -\u003e State",
        "fct-source": "src/Language-ArrayForth-Program.html#load",
        "fct-type": "function",
        "title": "load"
      },
      "index": {
        "description": "Loads the given synthesizer-friendly program into the given state",
        "hierarchy": "Language ArrayForth Program",
        "module": "Language.ArrayForth.Program",
        "name": "load",
        "normalized": "Program-\u003eState-\u003eState",
        "package": "array-forth",
        "partial": "",
        "signature": "Program-\u003eState-\u003eState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:readInstruction",
      "description": {
        "fct-descr": "\u003cp\u003eTries to parse the given string as an instruction, which can\n either be a number, an opcode or \u003ca\u003e_\u003c/a\u003e representing Unused.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Program",
        "fct-package": "array-forth",
        "fct-signature": "String -\u003e Either ParseError Instruction",
        "fct-source": "src/Language-ArrayForth-Program.html#readInstruction",
        "fct-type": "function",
        "title": "readInstruction"
      },
      "index": {
        "description": "Tries to parse the given string as an instruction which can either be number an opcode or representing Unused",
        "hierarchy": "Language ArrayForth Program",
        "module": "Language.ArrayForth.Program",
        "name": "readInstruction",
        "normalized": "String-\u003eEither ParseError Instruction",
        "package": "array-forth",
        "partial": "Instruction",
        "signature": "String-\u003eEither ParseError Instruction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:readProgram",
      "description": {
        "fct-descr": "\u003cp\u003eReads a program in the synthesizer's format.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Program",
        "fct-package": "array-forth",
        "fct-signature": "String -\u003e Either ParseError Program",
        "fct-source": "src/Language-ArrayForth-Program.html#readProgram",
        "fct-type": "function",
        "title": "readProgram"
      },
      "index": {
        "description": "Reads program in the synthesizer format",
        "hierarchy": "Language ArrayForth Program",
        "module": "Language.ArrayForth.Program",
        "name": "readProgram",
        "normalized": "String-\u003eEither ParseError Program",
        "package": "array-forth",
        "partial": "Program",
        "signature": "String-\u003eEither ParseError Program"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:runProgram",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a given program from the default starting state.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Program",
        "fct-package": "array-forth",
        "fct-signature": "State -\u003e Program -\u003e State",
        "fct-source": "src/Language-ArrayForth-Program.html#runProgram",
        "fct-type": "function",
        "title": "runProgram"
      },
      "index": {
        "description": "Runs given program from the default starting state",
        "hierarchy": "Language ArrayForth Program",
        "module": "Language.ArrayForth.Program",
        "name": "runProgram",
        "normalized": "State-\u003eProgram-\u003eState",
        "package": "array-forth",
        "partial": "Program",
        "signature": "State-\u003eProgram-\u003eState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:toNative",
      "description": {
        "fct-module": "Language.ArrayForth.Program",
        "fct-package": "array-forth",
        "fct-signature": "Program -\u003e NativeProgram",
        "fct-source": "src/Language-ArrayForth-Program.html#toNative",
        "fct-type": "function",
        "title": "toNative"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Program",
        "module": "Language.ArrayForth.Program",
        "name": "toNative",
        "normalized": "Program-\u003eNativeProgram",
        "package": "array-forth",
        "partial": "Native",
        "signature": "Program-\u003eNativeProgram"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Stack.html#",
      "description": {
        "fct-module": "Language.ArrayForth.Stack",
        "fct-package": "array-forth",
        "fct-signature": "module",
        "fct-source": "src/Language-ArrayForth-Stack.html",
        "fct-type": "module",
        "title": "Stack"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Stack",
        "module": "Language.ArrayForth.Stack",
        "name": "Stack",
        "normalized": "",
        "package": "array-forth",
        "partial": "Stack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Stack.html#t:Stack",
      "description": {
        "fct-module": "Language.ArrayForth.Stack",
        "fct-package": "array-forth",
        "fct-signature": "data",
        "fct-source": "src/Language-ArrayForth-Stack.html#Stack",
        "fct-type": "data",
        "title": "Stack"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Stack",
        "module": "Language.ArrayForth.Stack",
        "name": "Stack",
        "normalized": "",
        "package": "array-forth",
        "partial": "Stack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Stack.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003eA stack containing only 0s.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Stack",
        "fct-package": "array-forth",
        "fct-signature": "Stack",
        "fct-source": "src/Language-ArrayForth-Stack.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "stack containing only",
        "hierarchy": "Language ArrayForth Stack",
        "module": "Language.ArrayForth.Stack",
        "name": "empty",
        "normalized": "",
        "package": "array-forth",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Stack.html#v:fill",
      "description": {
        "fct-descr": "\u003cp\u003ePush the given elements onto the stack one-by-one.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Stack",
        "fct-package": "array-forth",
        "fct-signature": "Stack -\u003e [F18Word] -\u003e Stack",
        "fct-source": "src/Language-ArrayForth-Stack.html#fill",
        "fct-type": "function",
        "title": "fill"
      },
      "index": {
        "description": "Push the given elements onto the stack one-by-one",
        "hierarchy": "Language ArrayForth Stack",
        "module": "Language.ArrayForth.Stack",
        "name": "fill",
        "normalized": "Stack-\u003e[F Word]-\u003eStack",
        "package": "array-forth",
        "partial": "",
        "signature": "Stack-\u003e[F Word]-\u003eStack"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Stack.html#v:pop",
      "description": {
        "fct-descr": "\u003cp\u003ePops the top of the stack, returning the value and the new stack.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Stack",
        "fct-package": "array-forth",
        "fct-signature": "Stack -\u003e (Stack, F18Word)",
        "fct-source": "src/Language-ArrayForth-Stack.html#pop",
        "fct-type": "function",
        "title": "pop"
      },
      "index": {
        "description": "Pops the top of the stack returning the value and the new stack",
        "hierarchy": "Language ArrayForth Stack",
        "module": "Language.ArrayForth.Stack",
        "name": "pop",
        "normalized": "Stack-\u003e(Stack,F Word)",
        "package": "array-forth",
        "partial": "",
        "signature": "Stack-\u003e(Stack,F Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Stack.html#v:push",
      "description": {
        "fct-descr": "\u003cp\u003ePushes the given element on top of the stack, discarding the last element.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Stack",
        "fct-package": "array-forth",
        "fct-signature": "Stack -\u003e F18Word -\u003e Stack",
        "fct-source": "src/Language-ArrayForth-Stack.html#push",
        "fct-type": "function",
        "title": "push"
      },
      "index": {
        "description": "Pushes the given element on top of the stack discarding the last element",
        "hierarchy": "Language ArrayForth Stack",
        "module": "Language.ArrayForth.Stack",
        "name": "push",
        "normalized": "Stack-\u003eF Word-\u003eStack",
        "package": "array-forth",
        "partial": "",
        "signature": "Stack-\u003eF Word-\u003eStack"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#",
      "description": {
        "fct-module": "Language.ArrayForth.State",
        "fct-package": "array-forth",
        "fct-signature": "module",
        "fct-source": "src/Language-ArrayForth-State.html",
        "fct-type": "module",
        "title": "State"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth State",
        "module": "Language.ArrayForth.State",
        "name": "State",
        "normalized": "",
        "package": "array-forth",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#t:Memory",
      "description": {
        "fct-descr": "\u003cp\u003eThe chip's RAM and ROM\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.State",
        "fct-package": "array-forth",
        "fct-signature": "type",
        "fct-source": "src/Language-ArrayForth-State.html#Memory",
        "fct-type": "type",
        "title": "Memory"
      },
      "index": {
        "description": "The chip RAM and ROM",
        "hierarchy": "Language ArrayForth State",
        "module": "Language.ArrayForth.State",
        "name": "Memory",
        "normalized": "",
        "package": "array-forth",
        "partial": "Memory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#t:State",
      "description": {
        "fct-descr": "\u003cp\u003eA state representing the registers, stacks and memory of a core.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.State",
        "fct-package": "array-forth",
        "fct-signature": "data",
        "fct-source": "src/Language-ArrayForth-State.html#State",
        "fct-type": "data",
        "title": "State"
      },
      "index": {
        "description": "state representing the registers stacks and memory of core",
        "hierarchy": "Language ArrayForth State",
        "module": "Language.ArrayForth.State",
        "name": "State",
        "normalized": "",
        "package": "array-forth",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:-33-",
      "description": {
        "fct-descr": "\u003cp\u003eRead the memory at a location given by a Forth word.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.State",
        "fct-package": "array-forth",
        "fct-signature": "Memory -\u003e F18Word -\u003e F18Word",
        "fct-source": "src/Language-ArrayForth-State.html#%21",
        "fct-type": "function",
        "title": "(!)"
      },
      "index": {
        "description": "Read the memory at location given by Forth word",
        "hierarchy": "Language ArrayForth State",
        "module": "Language.ArrayForth.State",
        "name": "(!) !",
        "normalized": "Memory-\u003eF Word-\u003eF Word",
        "package": "array-forth",
        "partial": "",
        "signature": "Memory-\u003eF Word-\u003eF Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:State",
      "description": {
        "fct-module": "Language.ArrayForth.State",
        "fct-package": "array-forth",
        "fct-signature": "State",
        "fct-source": "src/Language-ArrayForth-State.html#State",
        "fct-type": "function",
        "title": "State"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth State",
        "module": "Language.ArrayForth.State",
        "name": "State",
        "normalized": "",
        "package": "array-forth",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:a",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.ArrayForth.State",
        "fct-package": "array-forth",
        "fct-signature": "!F18Word",
        "fct-source": "src/Language-ArrayForth-State.html#State",
        "fct-type": "function",
        "title": "a"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth State",
        "module": "Language.ArrayForth.State",
        "name": "a",
        "normalized": "",
        "package": "array-forth",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:b",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.ArrayForth.State",
        "fct-package": "array-forth",
        "fct-signature": "!F18Word",
        "fct-source": "src/Language-ArrayForth-State.html#State",
        "fct-type": "function",
        "title": "b"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth State",
        "module": "Language.ArrayForth.State",
        "name": "b",
        "normalized": "",
        "package": "array-forth",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:dataStack",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.ArrayForth.State",
        "fct-package": "array-forth",
        "fct-signature": "!Stack",
        "fct-source": "src/Language-ArrayForth-State.html#State",
        "fct-type": "function",
        "title": "dataStack"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth State",
        "module": "Language.ArrayForth.State",
        "name": "dataStack",
        "normalized": "",
        "package": "array-forth",
        "partial": "Stack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:dpop",
      "description": {
        "fct-descr": "\u003cp\u003ePops the data stack of the given state, updating s and t.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.State",
        "fct-package": "array-forth",
        "fct-signature": "State -\u003e (State, F18Word)",
        "fct-source": "src/Language-ArrayForth-State.html#dpop",
        "fct-type": "function",
        "title": "dpop"
      },
      "index": {
        "description": "Pops the data stack of the given state updating and",
        "hierarchy": "Language ArrayForth State",
        "module": "Language.ArrayForth.State",
        "name": "dpop",
        "normalized": "State-\u003e(State,F Word)",
        "package": "array-forth",
        "partial": "",
        "signature": "State-\u003e(State,F Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:dpush",
      "description": {
        "fct-descr": "\u003cp\u003ePush a word onto the data stack, updating s and t.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.State",
        "fct-package": "array-forth",
        "fct-signature": "State -\u003e F18Word -\u003e State",
        "fct-source": "src/Language-ArrayForth-State.html#dpush",
        "fct-type": "function",
        "title": "dpush"
      },
      "index": {
        "description": "Push word onto the data stack updating and",
        "hierarchy": "Language ArrayForth State",
        "module": "Language.ArrayForth.State",
        "name": "dpush",
        "normalized": "State-\u003eF Word-\u003eState",
        "package": "array-forth",
        "partial": "",
        "signature": "State-\u003eF Word-\u003eState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:emptyMem",
      "description": {
        "fct-module": "Language.ArrayForth.State",
        "fct-package": "array-forth",
        "fct-signature": "Memory",
        "fct-source": "src/Language-ArrayForth-State.html#emptyMem",
        "fct-type": "function",
        "title": "emptyMem"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth State",
        "module": "Language.ArrayForth.State",
        "name": "emptyMem",
        "normalized": "",
        "package": "array-forth",
        "partial": "Mem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:i",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.ArrayForth.State",
        "fct-package": "array-forth",
        "fct-signature": "!F18Word",
        "fct-source": "src/Language-ArrayForth-State.html#State",
        "fct-type": "function",
        "title": "i"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth State",
        "module": "Language.ArrayForth.State",
        "name": "i",
        "normalized": "",
        "package": "array-forth",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:loadMemory",
      "description": {
        "fct-descr": "\u003cp\u003eLoad the given memory words into the state starting at the given\n address.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.State",
        "fct-package": "array-forth",
        "fct-signature": "F18Word -\u003e [F18Word] -\u003e State -\u003e State",
        "fct-source": "src/Language-ArrayForth-State.html#loadMemory",
        "fct-type": "function",
        "title": "loadMemory"
      },
      "index": {
        "description": "Load the given memory words into the state starting at the given address",
        "hierarchy": "Language ArrayForth State",
        "module": "Language.ArrayForth.State",
        "name": "loadMemory",
        "normalized": "F Word-\u003e[F Word]-\u003eState-\u003eState",
        "package": "array-forth",
        "partial": "Memory",
        "signature": "F Word-\u003e[F Word]-\u003eState-\u003eState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:memory",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.ArrayForth.State",
        "fct-package": "array-forth",
        "fct-signature": "!Memory",
        "fct-source": "src/Language-ArrayForth-State.html#State",
        "fct-type": "function",
        "title": "memory"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth State",
        "module": "Language.ArrayForth.State",
        "name": "memory",
        "normalized": "",
        "package": "array-forth",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:next",
      "description": {
        "fct-descr": "\u003cp\u003eThe next word of instructions to execute in the given state.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.State",
        "fct-package": "array-forth",
        "fct-signature": "State -\u003e Instrs",
        "fct-source": "src/Language-ArrayForth-State.html#next",
        "fct-type": "function",
        "title": "next"
      },
      "index": {
        "description": "The next word of instructions to execute in the given state",
        "hierarchy": "Language ArrayForth State",
        "module": "Language.ArrayForth.State",
        "name": "next",
        "normalized": "State-\u003eInstrs",
        "package": "array-forth",
        "partial": "",
        "signature": "State-\u003eInstrs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:p",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.ArrayForth.State",
        "fct-package": "array-forth",
        "fct-signature": "!F18Word",
        "fct-source": "src/Language-ArrayForth-State.html#State",
        "fct-type": "function",
        "title": "p"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth State",
        "module": "Language.ArrayForth.State",
        "name": "p",
        "normalized": "",
        "package": "array-forth",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:r",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.ArrayForth.State",
        "fct-package": "array-forth",
        "fct-signature": "!F18Word",
        "fct-source": "src/Language-ArrayForth-State.html#State",
        "fct-type": "function",
        "title": "r"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth State",
        "module": "Language.ArrayForth.State",
        "name": "r",
        "normalized": "",
        "package": "array-forth",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:returnStack",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.ArrayForth.State",
        "fct-package": "array-forth",
        "fct-signature": "!Stack",
        "fct-source": "src/Language-ArrayForth-State.html#State",
        "fct-type": "function",
        "title": "returnStack"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth State",
        "module": "Language.ArrayForth.State",
        "name": "returnStack",
        "normalized": "",
        "package": "array-forth",
        "partial": "Stack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:rpop",
      "description": {
        "fct-descr": "\u003cp\u003ePops the return stack of the given state, updating r.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.State",
        "fct-package": "array-forth",
        "fct-signature": "State -\u003e (State, F18Word)",
        "fct-source": "src/Language-ArrayForth-State.html#rpop",
        "fct-type": "function",
        "title": "rpop"
      },
      "index": {
        "description": "Pops the return stack of the given state updating",
        "hierarchy": "Language ArrayForth State",
        "module": "Language.ArrayForth.State",
        "name": "rpop",
        "normalized": "State-\u003e(State,F Word)",
        "package": "array-forth",
        "partial": "",
        "signature": "State-\u003e(State,F Word)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:rpush",
      "description": {
        "fct-descr": "\u003cp\u003ePush a word onto the return stack, updating r.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.State",
        "fct-package": "array-forth",
        "fct-signature": "State -\u003e F18Word -\u003e State",
        "fct-source": "src/Language-ArrayForth-State.html#rpush",
        "fct-type": "function",
        "title": "rpush"
      },
      "index": {
        "description": "Push word onto the return stack updating",
        "hierarchy": "Language ArrayForth State",
        "module": "Language.ArrayForth.State",
        "name": "rpush",
        "normalized": "State-\u003eF Word-\u003eState",
        "package": "array-forth",
        "partial": "",
        "signature": "State-\u003eF Word-\u003eState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:s",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.ArrayForth.State",
        "fct-package": "array-forth",
        "fct-signature": "!F18Word",
        "fct-source": "src/Language-ArrayForth-State.html#State",
        "fct-type": "function",
        "title": "s"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth State",
        "module": "Language.ArrayForth.State",
        "name": "s",
        "normalized": "",
        "package": "array-forth",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:set",
      "description": {
        "fct-descr": "\u003cp\u003eSet the memory using Forth words.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.State",
        "fct-package": "array-forth",
        "fct-signature": "Memory -\u003e F18Word -\u003e F18Word -\u003e Memory",
        "fct-source": "src/Language-ArrayForth-State.html#set",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "Set the memory using Forth words",
        "hierarchy": "Language ArrayForth State",
        "module": "Language.ArrayForth.State",
        "name": "set",
        "normalized": "Memory-\u003eF Word-\u003eF Word-\u003eMemory",
        "package": "array-forth",
        "partial": "",
        "signature": "Memory-\u003eF Word-\u003eF Word-\u003eMemory"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:setProgram",
      "description": {
        "fct-descr": "\u003cp\u003eLoads the given program into memory at the given starting\n position.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.State",
        "fct-package": "array-forth",
        "fct-signature": "F18Word -\u003e NativeProgram -\u003e State -\u003e State",
        "fct-source": "src/Language-ArrayForth-State.html#setProgram",
        "fct-type": "function",
        "title": "setProgram"
      },
      "index": {
        "description": "Loads the given program into memory at the given starting position",
        "hierarchy": "Language ArrayForth State",
        "module": "Language.ArrayForth.State",
        "name": "setProgram",
        "normalized": "F Word-\u003eNativeProgram-\u003eState-\u003eState",
        "package": "array-forth",
        "partial": "Program",
        "signature": "F Word-\u003eNativeProgram-\u003eState-\u003eState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:startState",
      "description": {
        "fct-descr": "\u003cp\u003eThe state corresponding to a core with no programs loaded and no\n instructions executed.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.State",
        "fct-package": "array-forth",
        "fct-signature": "State",
        "fct-source": "src/Language-ArrayForth-State.html#startState",
        "fct-type": "function",
        "title": "startState"
      },
      "index": {
        "description": "The state corresponding to core with no programs loaded and no instructions executed",
        "hierarchy": "Language ArrayForth State",
        "module": "Language.ArrayForth.State",
        "name": "startState",
        "normalized": "",
        "package": "array-forth",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:t",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.ArrayForth.State",
        "fct-package": "array-forth",
        "fct-signature": "!F18Word",
        "fct-source": "src/Language-ArrayForth-State.html#State",
        "fct-type": "function",
        "title": "t"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth State",
        "module": "Language.ArrayForth.State",
        "name": "t",
        "normalized": "",
        "package": "array-forth",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:toMem",
      "description": {
        "fct-descr": "\u003cp\u003eForce an address to be in range of memory: [0,64).\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.State",
        "fct-package": "array-forth",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Language-ArrayForth-State.html#toMem",
        "fct-type": "function",
        "title": "toMem"
      },
      "index": {
        "description": "Force an address to be in range of memory",
        "hierarchy": "Language ArrayForth State",
        "module": "Language.ArrayForth.State",
        "name": "toMem",
        "normalized": "a-\u003eb",
        "package": "array-forth",
        "partial": "Mem",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Synthesis.html#",
      "description": {
        "fct-module": "Language.ArrayForth.Synthesis",
        "fct-package": "array-forth",
        "fct-signature": "module",
        "fct-source": "src/Language-ArrayForth-Synthesis.html",
        "fct-type": "module",
        "title": "Synthesis"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Synthesis",
        "module": "Language.ArrayForth.Synthesis",
        "name": "Synthesis",
        "normalized": "",
        "package": "array-forth",
        "partial": "Synthesis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Synthesis.html#t:DefaultScore",
      "description": {
        "fct-descr": "\u003cp\u003eA score type that contains a correctness value and a performance\n value.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Synthesis",
        "fct-package": "array-forth",
        "fct-signature": "data",
        "fct-source": "src/Language-ArrayForth-Synthesis.html#DefaultScore",
        "fct-type": "data",
        "title": "DefaultScore"
      },
      "index": {
        "description": "score type that contains correctness value and performance value",
        "hierarchy": "Language ArrayForth Synthesis",
        "module": "Language.ArrayForth.Synthesis",
        "name": "DefaultScore",
        "normalized": "",
        "package": "array-forth",
        "partial": "Default Score",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Synthesis.html#v:DefaultScore",
      "description": {
        "fct-module": "Language.ArrayForth.Synthesis",
        "fct-package": "array-forth",
        "fct-signature": "DefaultScore Double Double",
        "fct-source": "src/Language-ArrayForth-Synthesis.html#DefaultScore",
        "fct-type": "function",
        "title": "DefaultScore"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Synthesis",
        "module": "Language.ArrayForth.Synthesis",
        "name": "DefaultScore",
        "normalized": "",
        "package": "array-forth",
        "partial": "Default Score",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Synthesis.html#v:defaultMutations",
      "description": {
        "fct-descr": "\u003cp\u003eThe default mutations to try. For now, this will either change an\n instruction or swap two instructions in the program, with equal\n probability.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Synthesis",
        "fct-package": "array-forth",
        "fct-signature": "Mutation Program",
        "fct-source": "src/Language-ArrayForth-Synthesis.html#defaultMutations",
        "fct-type": "function",
        "title": "defaultMutations"
      },
      "index": {
        "description": "The default mutations to try For now this will either change an instruction or swap two instructions in the program with equal probability",
        "hierarchy": "Language ArrayForth Synthesis",
        "module": "Language.ArrayForth.Synthesis",
        "name": "defaultMutations",
        "normalized": "",
        "package": "array-forth",
        "partial": "Mutations",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Synthesis.html#v:defaultOps",
      "description": {
        "fct-descr": "\u003cp\u003eThe default distribution of instructions. For now, we do not\n support any sort of jumps. All the other possible instructions\n along with constant numbers and unused slots are equally\n likely. The numeric value of constants is currently a uniform\n distribution over 18-bit words.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Synthesis",
        "fct-package": "array-forth",
        "fct-signature": "Distr Instruction",
        "fct-source": "src/Language-ArrayForth-Synthesis.html#defaultOps",
        "fct-type": "function",
        "title": "defaultOps"
      },
      "index": {
        "description": "The default distribution of instructions For now we do not support any sort of jumps All the other possible instructions along with constant numbers and unused slots are equally likely The numeric value of constants is currently uniform distribution over bit words",
        "hierarchy": "Language ArrayForth Synthesis",
        "module": "Language.ArrayForth.Synthesis",
        "name": "defaultOps",
        "normalized": "",
        "package": "array-forth",
        "partial": "Ops",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Synthesis.html#v:evaluate",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a specification program and some inputs, evaluate a program\n against the specification for both performance and\n correctness. Normalize the score based on the number of test cases.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Synthesis",
        "fct-package": "array-forth",
        "fct-signature": "Program -\u003e [State] -\u003e (State -\u003e State -\u003e Distance) -\u003e Program -\u003e DefaultScore",
        "fct-source": "src/Language-ArrayForth-Synthesis.html#evaluate",
        "fct-type": "function",
        "title": "evaluate"
      },
      "index": {
        "description": "Given specification program and some inputs evaluate program against the specification for both performance and correctness Normalize the score based on the number of test cases",
        "hierarchy": "Language ArrayForth Synthesis",
        "module": "Language.ArrayForth.Synthesis",
        "name": "evaluate",
        "normalized": "Program-\u003e[State]-\u003e(State-\u003eState-\u003eDistance)-\u003eProgram-\u003eDefaultScore",
        "package": "array-forth",
        "partial": "",
        "signature": "Program-\u003e[State]-\u003e(State-\u003eState-\u003eDistance)-\u003eProgram-\u003eDefaultScore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Synthesis.html#v:pairs",
      "description": {
        "fct-module": "Language.ArrayForth.Synthesis",
        "fct-package": "array-forth",
        "fct-signature": "[(Instruction, Instruction)]",
        "fct-source": "src/Language-ArrayForth-Synthesis.html#pairs",
        "fct-type": "function",
        "title": "pairs"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Synthesis",
        "module": "Language.ArrayForth.Synthesis",
        "name": "pairs",
        "normalized": "[(Instruction,Instruction)]",
        "package": "array-forth",
        "partial": "",
        "signature": "[(Instruction,Instruction)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Synthesis.html#v:removePairs",
      "description": {
        "fct-module": "Language.ArrayForth.Synthesis",
        "fct-package": "array-forth",
        "fct-signature": "Distr Instruction -\u003e Mutation Program",
        "fct-source": "src/Language-ArrayForth-Synthesis.html#removePairs",
        "fct-type": "function",
        "title": "removePairs"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ArrayForth Synthesis",
        "module": "Language.ArrayForth.Synthesis",
        "name": "removePairs",
        "normalized": "Distr Instruction-\u003eMutation Program",
        "package": "array-forth",
        "partial": "Pairs",
        "signature": "Distr Instruction-\u003eMutation Program"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Synthesis.html#v:trace",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an evaluation function from a spec, a set of inputs and a\n function for comparing program traces.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Synthesis",
        "fct-package": "array-forth",
        "fct-signature": "Program -\u003e [State] -\u003e (Trace -\u003e Trace -\u003e score) -\u003e Program -\u003e score",
        "fct-source": "src/Language-ArrayForth-Synthesis.html#trace",
        "fct-type": "function",
        "title": "trace"
      },
      "index": {
        "description": "Creates an evaluation function from spec set of inputs and function for comparing program traces",
        "hierarchy": "Language ArrayForth Synthesis",
        "module": "Language.ArrayForth.Synthesis",
        "name": "trace",
        "normalized": "Program-\u003e[State]-\u003e(Trace-\u003eTrace-\u003ea)-\u003eProgram-\u003ea",
        "package": "array-forth",
        "partial": "",
        "signature": "Program-\u003e[State]-\u003e(Trace-\u003eTrace-\u003escore)-\u003eProgram-\u003escore"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Synthesis.html#v:withPerformance",
      "description": {
        "fct-descr": "\u003cp\u003eUsing a given correctness measure, produce a score also\n containing performance.\n\u003c/p\u003e",
        "fct-module": "Language.ArrayForth.Synthesis",
        "fct-package": "array-forth",
        "fct-signature": "(Trace -\u003e Trace -\u003e s) -\u003e Trace -\u003e Trace -\u003e DefaultScore",
        "fct-source": "src/Language-ArrayForth-Synthesis.html#withPerformance",
        "fct-type": "function",
        "title": "withPerformance"
      },
      "index": {
        "description": "Using given correctness measure produce score also containing performance",
        "hierarchy": "Language ArrayForth Synthesis",
        "module": "Language.ArrayForth.Synthesis",
        "name": "withPerformance",
        "normalized": "(Trace-\u003eTrace-\u003ea)-\u003eTrace-\u003eTrace-\u003eDefaultScore",
        "package": "array-forth",
        "partial": "Performance",
        "signature": "(Trace-\u003eTrace-\u003es)-\u003eTrace-\u003eTrace-\u003eDefaultScore"
      }
    }
  }
]