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
        "word": "array-forth"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Distance",
          "name": "Distance",
          "package": "array-forth",
          "source": "src/Language-ArrayForth-Distance.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language ArrayForth Distance",
          "module": "Language.ArrayForth.Distance",
          "name": "Distance",
          "package": "array-forth",
          "partial": "Distance",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Distance.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Distance",
          "name": "Distance",
          "package": "array-forth",
          "source": "src/Language-ArrayForth-Distance.html#Distance",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language ArrayForth Distance",
          "module": "Language.ArrayForth.Distance",
          "name": "Distance",
          "package": "array-forth",
          "partial": "Distance",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Distance.html#t:Distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounts the number of bits that differ between two numbers.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Distance",
          "name": "countBits",
          "package": "array-forth",
          "signature": "n -\u003e n -\u003e Int",
          "source": "src/Language-ArrayForth-Distance.html#countBits",
          "type": "function"
        },
        "index": {
          "description": "Counts the number of bits that differ between two numbers",
          "hierarchy": "Language ArrayForth Distance",
          "module": "Language.ArrayForth.Distance",
          "name": "countBits",
          "normalized": "a-\u003ea-\u003eInt",
          "package": "array-forth",
          "partial": "Bits",
          "signature": "n-\u003en-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Distance.html#v:countBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a distance function that counts the different bits\n between the given memory locations.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Distance",
          "name": "locations",
          "package": "array-forth",
          "signature": "[F18Word] -\u003e State -\u003e State -\u003e Distance",
          "source": "src/Language-ArrayForth-Distance.html#locations",
          "type": "function"
        },
        "index": {
          "description": "Returns distance function that counts the different bits between the given memory locations",
          "hierarchy": "Language ArrayForth Distance",
          "module": "Language.ArrayForth.Distance",
          "name": "locations",
          "normalized": "[F Word]-\u003eState-\u003eState-\u003eDistance",
          "package": "array-forth",
          "signature": "[F Word]-\u003eState-\u003eState-\u003eDistance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Distance.html#v:locations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a score that counts the number of matching states\n according to some projection function.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Distance",
          "name": "matching",
          "package": "array-forth",
          "signature": "(State -\u003e a) -\u003e Trace -\u003e Trace -\u003e Distance",
          "source": "src/Language-ArrayForth-Distance.html#matching",
          "type": "function"
        },
        "index": {
          "description": "Returns score that counts the number of matching states according to some projection function",
          "hierarchy": "Language ArrayForth Distance",
          "module": "Language.ArrayForth.Distance",
          "name": "matching",
          "normalized": "(State-\u003ea)-\u003eTrace-\u003eTrace-\u003eDistance",
          "package": "array-forth",
          "signature": "(State-\u003ea)-\u003eTrace-\u003eTrace-\u003eDistance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Distance.html#v:matching"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a distance function that counts the different bits between\n the given registers. You could use it like `compareRegisters [s, t]`.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Distance",
          "name": "registers",
          "package": "array-forth",
          "signature": "[State -\u003e F18Word] -\u003e State -\u003e State -\u003e Distance",
          "source": "src/Language-ArrayForth-Distance.html#registers",
          "type": "function"
        },
        "index": {
          "description": "Return distance function that counts the different bits between the given registers You could use it like compareRegisters",
          "hierarchy": "Language ArrayForth Distance",
          "module": "Language.ArrayForth.Distance",
          "name": "registers",
          "normalized": "[State-\u003eF Word]-\u003eState-\u003eState-\u003eDistance",
          "package": "array-forth",
          "signature": "[State-\u003eF Word]-\u003eState-\u003eState-\u003eDistance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Distance.html#v:registers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Interpreter",
          "name": "Interpreter",
          "package": "array-forth",
          "source": "src/Language-ArrayForth-Interpreter.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language ArrayForth Interpreter",
          "module": "Language.ArrayForth.Interpreter",
          "name": "Interpreter",
          "package": "array-forth",
          "partial": "Interpreter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA trace of a progam is the state after every word is executed.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Interpreter",
          "name": "Trace",
          "package": "array-forth",
          "source": "src/Language-ArrayForth-Interpreter.html#Trace",
          "type": "type"
        },
        "index": {
          "description": "trace of progam is the state after every word is executed",
          "hierarchy": "Language ArrayForth Interpreter",
          "module": "Language.ArrayForth.Interpreter",
          "name": "Trace",
          "package": "array-forth",
          "partial": "Trace",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#t:Trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEstimates the execution time of a program trace.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Interpreter",
          "name": "countTime",
          "package": "array-forth",
          "signature": "Trace -\u003e Double",
          "source": "src/Language-ArrayForth-Interpreter.html#countTime",
          "type": "function"
        },
        "index": {
          "description": "Estimates the execution time of program trace",
          "hierarchy": "Language ArrayForth Interpreter",
          "module": "Language.ArrayForth.Interpreter",
          "name": "countTime",
          "normalized": "Trace-\u003eDouble",
          "package": "array-forth",
          "partial": "Time",
          "signature": "Trace-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:countTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes the given opcode cause the current word to stop executing?\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Interpreter",
          "name": "endWord",
          "package": "array-forth",
          "signature": "Opcode -\u003e Bool",
          "source": "src/Language-ArrayForth-Interpreter.html#endWord",
          "type": "function"
        },
        "index": {
          "description": "Does the given opcode cause the current word to stop executing",
          "hierarchy": "Language ArrayForth Interpreter",
          "module": "Language.ArrayForth.Interpreter",
          "name": "endWord",
          "normalized": "Opcode-\u003eBool",
          "package": "array-forth",
          "partial": "Word",
          "signature": "Opcode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:endWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns the program unil it hits a terminal state, returning only\n the resulting state.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Interpreter",
          "name": "eval",
          "package": "array-forth",
          "signature": "State -\u003e State",
          "source": "src/Language-ArrayForth-Interpreter.html#eval",
          "type": "function"
        },
        "index": {
          "description": "Runs the program unil it hits terminal state returning only the resulting state",
          "hierarchy": "Language ArrayForth Interpreter",
          "module": "Language.ArrayForth.Interpreter",
          "name": "eval",
          "normalized": "State-\u003eState",
          "package": "array-forth",
          "signature": "State-\u003eState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes an opcode on the given state.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Interpreter",
          "name": "execute",
          "package": "array-forth",
          "signature": "Opcode -\u003e State -\u003e State",
          "source": "src/Language-ArrayForth-Interpreter.html#execute",
          "type": "function"
        },
        "index": {
          "description": "Executes an opcode on the given state",
          "hierarchy": "Language ArrayForth Interpreter",
          "module": "Language.ArrayForth.Interpreter",
          "name": "execute",
          "normalized": "Opcode-\u003eState-\u003eState",
          "package": "array-forth",
          "signature": "Opcode-\u003eState-\u003eState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a jump instruction to the given address.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Interpreter",
          "name": "jump",
          "package": "array-forth",
          "signature": "Opcode -\u003e F18Word -\u003e State -\u003e State",
          "source": "src/Language-ArrayForth-Interpreter.html#jump",
          "type": "function"
        },
        "index": {
          "description": "Execute jump instruction to the given address",
          "hierarchy": "Language ArrayForth Interpreter",
          "module": "Language.ArrayForth.Interpreter",
          "name": "jump",
          "normalized": "Opcode-\u003eF Word-\u003eState-\u003eState",
          "package": "array-forth",
          "signature": "Opcode-\u003eF Word-\u003eState-\u003eState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:jump"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtends the given trace by a single execution step. The trace\n cannot be empty.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Interpreter",
          "name": "run",
          "package": "array-forth",
          "signature": "Opcode -\u003e [State] -\u003e [State]",
          "source": "src/Language-ArrayForth-Interpreter.html#run",
          "type": "function"
        },
        "index": {
          "description": "Extends the given trace by single execution step The trace cannot be empty",
          "hierarchy": "Language ArrayForth Interpreter",
          "module": "Language.ArrayForth.Interpreter",
          "name": "run",
          "normalized": "Opcode-\u003e[State]-\u003e[State]",
          "package": "array-forth",
          "signature": "Opcode-\u003e[State]-\u003e[State]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes the specified program on the given state until it hits a\n \u003ca\u003eterminal\u003c/a\u003e word--a word made up of four nops or all 0s.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Interpreter",
          "name": "runNativeProgram",
          "package": "array-forth",
          "signature": "State -\u003e NativeProgram -\u003e State",
          "source": "src/Language-ArrayForth-Interpreter.html#runNativeProgram",
          "type": "function"
        },
        "index": {
          "description": "Executes the specified program on the given state until it hits terminal word--a word made up of four nops or all",
          "hierarchy": "Language ArrayForth Interpreter",
          "module": "Language.ArrayForth.Interpreter",
          "name": "runNativeProgram",
          "normalized": "State-\u003eNativeProgram-\u003eState",
          "package": "array-forth",
          "partial": "Native Program",
          "signature": "State-\u003eNativeProgram-\u003eState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:runNativeProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes a single word in the given state, returning the last\n resulting state.q\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Interpreter",
          "name": "step",
          "package": "array-forth",
          "signature": "State -\u003e State",
          "source": "src/Language-ArrayForth-Interpreter.html#step",
          "type": "function"
        },
        "index": {
          "description": "Executes single word in the given state returning the last resulting state.q",
          "hierarchy": "Language ArrayForth Interpreter",
          "module": "Language.ArrayForth.Interpreter",
          "name": "step",
          "normalized": "State-\u003eState",
          "package": "array-forth",
          "signature": "State-\u003eState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:step"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes a single word in the given state, incrementing\n the program counter and returning all the intermediate states.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Interpreter",
          "name": "stepAll",
          "package": "array-forth",
          "signature": "State -\u003e [State]",
          "source": "src/Language-ArrayForth-Interpreter.html#stepAll",
          "type": "function"
        },
        "index": {
          "description": "Executes single word in the given state incrementing the program counter and returning all the intermediate states",
          "hierarchy": "Language ArrayForth Interpreter",
          "module": "Language.ArrayForth.Interpreter",
          "name": "stepAll",
          "normalized": "State-\u003e[State]",
          "package": "array-forth",
          "partial": "All",
          "signature": "State-\u003e[State]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:stepAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrace a program until it either hits four nops or all 0s.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Interpreter",
          "name": "stepProgram",
          "package": "array-forth",
          "signature": "State -\u003e Trace",
          "source": "src/Language-ArrayForth-Interpreter.html#stepProgram",
          "type": "function"
        },
        "index": {
          "description": "Trace program until it either hits four nops or all",
          "hierarchy": "Language ArrayForth Interpreter",
          "module": "Language.ArrayForth.Interpreter",
          "name": "stepProgram",
          "normalized": "State-\u003eTrace",
          "package": "array-forth",
          "partial": "Program",
          "signature": "State-\u003eTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:stepProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks that the program trace terminated in at most n steps,\n returning Nothing otherwise.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Interpreter",
          "name": "throttle",
          "package": "array-forth",
          "signature": "Int -\u003e Trace -\u003e Either Trace Trace",
          "source": "src/Language-ArrayForth-Interpreter.html#throttle",
          "type": "function"
        },
        "index": {
          "description": "Checks that the program trace terminated in at most steps returning Nothing otherwise",
          "hierarchy": "Language ArrayForth Interpreter",
          "module": "Language.ArrayForth.Interpreter",
          "name": "throttle",
          "normalized": "Int-\u003eTrace-\u003eEither Trace Trace",
          "package": "array-forth",
          "signature": "Int-\u003eTrace-\u003eEither Trace Trace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:throttle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrace the given program, including all the intermediate states.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Interpreter",
          "name": "traceAll",
          "package": "array-forth",
          "signature": "State -\u003e Trace",
          "source": "src/Language-ArrayForth-Interpreter.html#traceAll",
          "type": "function"
        },
        "index": {
          "description": "Trace the given program including all the intermediate states",
          "hierarchy": "Language ArrayForth Interpreter",
          "module": "Language.ArrayForth.Interpreter",
          "name": "traceAll",
          "normalized": "State-\u003eTrace",
          "package": "array-forth",
          "partial": "All",
          "signature": "State-\u003eTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:traceAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a trace of the program's execution. The trace is a list\n of the state of the chip after each step.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Interpreter",
          "name": "traceProgram",
          "package": "array-forth",
          "signature": "State -\u003e Trace",
          "source": "src/Language-ArrayForth-Interpreter.html#traceProgram",
          "type": "function"
        },
        "index": {
          "description": "Returns trace of the program execution The trace is list of the state of the chip after each step",
          "hierarchy": "Language ArrayForth Interpreter",
          "module": "Language.ArrayForth.Interpreter",
          "name": "traceProgram",
          "normalized": "State-\u003eTrace",
          "package": "array-forth",
          "partial": "Program",
          "signature": "State-\u003eTrace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:traceProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a single word's worth of instructions, returning only the\n final state.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Interpreter",
          "name": "word",
          "package": "array-forth",
          "signature": "Instrs -\u003e State -\u003e State",
          "source": "src/Language-ArrayForth-Interpreter.html#word",
          "type": "function"
        },
        "index": {
          "description": "Runs single word worth of instructions returning only the final state",
          "hierarchy": "Language ArrayForth Interpreter",
          "module": "Language.ArrayForth.Interpreter",
          "name": "word",
          "normalized": "Instrs-\u003eState-\u003eState",
          "package": "array-forth",
          "signature": "Instrs-\u003eState-\u003eState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a single word's worth of instructions starting from the\n given state, returning the intermediate states for each executed\n opcode.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Interpreter",
          "name": "wordAll",
          "package": "array-forth",
          "signature": "Instrs -\u003e State -\u003e [State]",
          "source": "src/Language-ArrayForth-Interpreter.html#wordAll",
          "type": "function"
        },
        "index": {
          "description": "Runs single word worth of instructions starting from the given state returning the intermediate states for each executed opcode",
          "hierarchy": "Language ArrayForth Interpreter",
          "module": "Language.ArrayForth.Interpreter",
          "name": "wordAll",
          "normalized": "Instrs-\u003eState-\u003e[State]",
          "package": "array-forth",
          "partial": "All",
          "signature": "Instrs-\u003eState-\u003e[State]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Interpreter.html#v:wordAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.NativeProgram",
          "name": "NativeProgram",
          "package": "array-forth",
          "source": "src/Language-ArrayForth-NativeProgram.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language ArrayForth NativeProgram",
          "module": "Language.ArrayForth.NativeProgram",
          "name": "NativeProgram",
          "package": "array-forth",
          "partial": "Native Program",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-NativeProgram.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a word in memory. This word can either contain\n opcodes, opcodes and a jump address or just a constant number.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.NativeProgram",
          "name": "Instrs",
          "package": "array-forth",
          "source": "src/Language-ArrayForth-NativeProgram.html#Instrs",
          "type": "data"
        },
        "index": {
          "description": "Represents word in memory This word can either contain opcodes opcodes and jump address or just constant number",
          "hierarchy": "Language ArrayForth NativeProgram",
          "module": "Language.ArrayForth.NativeProgram",
          "name": "Instrs",
          "package": "array-forth",
          "partial": "Instrs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-NativeProgram.html#t:Instrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA program in the F18A instruction set.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.NativeProgram",
          "name": "NativeProgram",
          "package": "array-forth",
          "source": "src/Language-ArrayForth-NativeProgram.html#NativeProgram",
          "type": "type"
        },
        "index": {
          "description": "program in the F18A instruction set",
          "hierarchy": "Language ArrayForth NativeProgram",
          "module": "Language.ArrayForth.NativeProgram",
          "name": "NativeProgram",
          "package": "array-forth",
          "partial": "Native Program",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-NativeProgram.html#t:NativeProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.NativeProgram",
          "name": "Constant",
          "package": "array-forth",
          "signature": "Constant F18Word",
          "source": "src/Language-ArrayForth-NativeProgram.html#Instrs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth NativeProgram",
          "module": "Language.ArrayForth.NativeProgram",
          "name": "Constant",
          "package": "array-forth",
          "partial": "Constant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-NativeProgram.html#v:Constant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.NativeProgram",
          "name": "Instrs",
          "package": "array-forth",
          "signature": "Instrs Opcode Opcode Opcode Opcode",
          "source": "src/Language-ArrayForth-NativeProgram.html#Instrs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth NativeProgram",
          "module": "Language.ArrayForth.NativeProgram",
          "name": "Instrs",
          "package": "array-forth",
          "partial": "Instrs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-NativeProgram.html#v:Instrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.NativeProgram",
          "name": "Jump1",
          "package": "array-forth",
          "signature": "Jump1 Opcode F18Word",
          "source": "src/Language-ArrayForth-NativeProgram.html#Instrs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth NativeProgram",
          "module": "Language.ArrayForth.NativeProgram",
          "name": "Jump1",
          "package": "array-forth",
          "partial": "Jump",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-NativeProgram.html#v:Jump1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.NativeProgram",
          "name": "Jump2",
          "package": "array-forth",
          "signature": "Jump2 Opcode Opcode F18Word",
          "source": "src/Language-ArrayForth-NativeProgram.html#Instrs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth NativeProgram",
          "module": "Language.ArrayForth.NativeProgram",
          "name": "Jump2",
          "package": "array-forth",
          "partial": "Jump",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-NativeProgram.html#v:Jump2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.NativeProgram",
          "name": "Jump3",
          "package": "array-forth",
          "signature": "Jump3 Opcode Opcode Opcode F18Word",
          "source": "src/Language-ArrayForth-NativeProgram.html#Instrs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth NativeProgram",
          "module": "Language.ArrayForth.NativeProgram",
          "name": "Jump3",
          "package": "array-forth",
          "partial": "Jump",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-NativeProgram.html#v:Jump3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads in a word as a set of opcodes.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.NativeProgram",
          "name": "fromBits",
          "package": "array-forth",
          "signature": "F18Word -\u003e Instrs",
          "source": "src/Language-ArrayForth-NativeProgram.html#fromBits",
          "type": "function"
        },
        "index": {
          "description": "Reads in word as set of opcodes",
          "hierarchy": "Language ArrayForth NativeProgram",
          "module": "Language.ArrayForth.NativeProgram",
          "name": "fromBits",
          "normalized": "F Word-\u003eInstrs",
          "package": "array-forth",
          "partial": "Bits",
          "signature": "F Word-\u003eInstrs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-NativeProgram.html#v:fromBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a whole program, splitting instructions up into words.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.NativeProgram",
          "name": "readNativeProgram",
          "package": "array-forth",
          "signature": "String -\u003e Either ParseError NativeProgram",
          "source": "src/Language-ArrayForth-NativeProgram.html#readNativeProgram",
          "type": "function"
        },
        "index": {
          "description": "Read whole program splitting instructions up into words",
          "hierarchy": "Language ArrayForth NativeProgram",
          "module": "Language.ArrayForth.NativeProgram",
          "name": "readNativeProgram",
          "normalized": "String-\u003eEither ParseError NativeProgram",
          "package": "array-forth",
          "partial": "Native Program",
          "signature": "String-\u003eEither ParseError NativeProgram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-NativeProgram.html#v:readNativeProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEstimates the running time of the program in nanoseconds. This is\n based on the numbers provided in the manual: faster instructions\n take 1.5 nanoseconds and slower ones take 5. For now, this estimate\n ignores control flow like ifs and loops.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.NativeProgram",
          "name": "runningTime",
          "package": "array-forth",
          "signature": "NativeProgram -\u003e Double",
          "source": "src/Language-ArrayForth-NativeProgram.html#runningTime",
          "type": "function"
        },
        "index": {
          "description": "Estimates the running time of the program in nanoseconds This is based on the numbers provided in the manual faster instructions take nanoseconds and slower ones take For now this estimate ignores control flow like ifs and loops",
          "hierarchy": "Language ArrayForth NativeProgram",
          "module": "Language.ArrayForth.NativeProgram",
          "name": "runningTime",
          "normalized": "NativeProgram-\u003eDouble",
          "package": "array-forth",
          "partial": "Time",
          "signature": "NativeProgram-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-NativeProgram.html#v:runningTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplits a list into chunks of at most four, breaking off a chunk\n whenever it sees an element matching the given predicate. This is\n useful for splitting a program along word boundaries, accounting\n for jump addresses.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.NativeProgram",
          "name": "splitWords",
          "package": "array-forth",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
          "source": "src/Language-ArrayForth-NativeProgram.html#splitWords",
          "type": "function"
        },
        "index": {
          "description": "Splits list into chunks of at most four breaking off chunk whenever it sees an element matching the given predicate This is useful for splitting program along word boundaries accounting for jump addresses",
          "hierarchy": "Language ArrayForth NativeProgram",
          "module": "Language.ArrayForth.NativeProgram",
          "name": "splitWords",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "package": "array-forth",
          "partial": "Words",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-NativeProgram.html#v:splitWords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the given instructions as an actual word. This assumes\n the address is sized appropriately.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.NativeProgram",
          "name": "toBits",
          "package": "array-forth",
          "signature": "Instrs -\u003e F18Word",
          "source": "src/Language-ArrayForth-NativeProgram.html#toBits",
          "type": "function"
        },
        "index": {
          "description": "Returns the given instructions as an actual word This assumes the address is sized appropriately",
          "hierarchy": "Language ArrayForth NativeProgram",
          "module": "Language.ArrayForth.NativeProgram",
          "name": "toBits",
          "normalized": "Instrs-\u003eF Word",
          "package": "array-forth",
          "partial": "Bits",
          "signature": "Instrs-\u003eF Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-NativeProgram.html#v:toBits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the opcodes in the given instruction word. A constant\n corresponds to not having any opcodes.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.NativeProgram",
          "name": "toOpcodes",
          "package": "array-forth",
          "signature": "Instrs -\u003e [Opcode]",
          "source": "src/Language-ArrayForth-NativeProgram.html#toOpcodes",
          "type": "function"
        },
        "index": {
          "description": "Returns the opcodes in the given instruction word constant corresponds to not having any opcodes",
          "hierarchy": "Language ArrayForth NativeProgram",
          "module": "Language.ArrayForth.NativeProgram",
          "name": "toOpcodes",
          "normalized": "Instrs-\u003e[Opcode]",
          "package": "array-forth",
          "partial": "Opcodes",
          "signature": "Instrs-\u003e[Opcode]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-NativeProgram.html#v:toOpcodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "Opcode",
          "package": "array-forth",
          "source": "src/Language-ArrayForth-Opcode.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "Opcode",
          "package": "array-forth",
          "partial": "Opcode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe 18-bit word type used by Greenarrays chips.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Opcode",
          "name": "F18Word",
          "package": "array-forth",
          "source": "src/Language-ArrayForth-Opcode.html#F18Word",
          "type": "type"
        },
        "index": {
          "description": "The bit word type used by Greenarrays chips",
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "F18Word",
          "package": "array-forth",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#t:F18Word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach F18A instruction, ordered by opcode.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Opcode",
          "name": "Opcode",
          "package": "array-forth",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "data"
        },
        "index": {
          "description": "Each F18A instruction ordered by opcode",
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "Opcode",
          "package": "array-forth",
          "partial": "Opcode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#t:Opcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "And",
          "package": "array-forth",
          "signature": "And",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "And",
          "package": "array-forth",
          "partial": "And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "Call",
          "package": "array-forth",
          "signature": "Call",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "Call",
          "package": "array-forth",
          "partial": "Call",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "Div2",
          "package": "array-forth",
          "signature": "Div2",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "Div2",
          "package": "array-forth",
          "partial": "Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Div2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "Drop",
          "package": "array-forth",
          "signature": "Drop",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "Drop",
          "package": "array-forth",
          "partial": "Drop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "Dup",
          "package": "array-forth",
          "signature": "Dup",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "Dup",
          "package": "array-forth",
          "partial": "Dup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Dup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "Exec",
          "package": "array-forth",
          "signature": "Exec",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "Exec",
          "package": "array-forth",
          "partial": "Exec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Exec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "Fetch",
          "package": "array-forth",
          "signature": "Fetch",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "Fetch",
          "package": "array-forth",
          "partial": "Fetch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Fetch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "FetchB",
          "package": "array-forth",
          "signature": "FetchB",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "FetchB",
          "package": "array-forth",
          "partial": "Fetch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:FetchB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "FetchP",
          "package": "array-forth",
          "signature": "FetchP",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "FetchP",
          "package": "array-forth",
          "partial": "Fetch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:FetchP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "FetchPlus",
          "package": "array-forth",
          "signature": "FetchPlus",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "FetchPlus",
          "package": "array-forth",
          "partial": "Fetch Plus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:FetchPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "If",
          "package": "array-forth",
          "signature": "If",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "If",
          "package": "array-forth",
          "partial": "If",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:If"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "Jmp",
          "package": "array-forth",
          "signature": "Jmp",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "Jmp",
          "package": "array-forth",
          "partial": "Jmp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Jmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "MinusIf",
          "package": "array-forth",
          "signature": "MinusIf",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "MinusIf",
          "package": "array-forth",
          "partial": "Minus If",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:MinusIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "MultiplyStep",
          "package": "array-forth",
          "signature": "MultiplyStep",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "MultiplyStep",
          "package": "array-forth",
          "partial": "Multiply Step",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:MultiplyStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "Next",
          "package": "array-forth",
          "signature": "Next",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "Next",
          "package": "array-forth",
          "partial": "Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "Nop",
          "package": "array-forth",
          "signature": "Nop",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "Nop",
          "package": "array-forth",
          "partial": "Nop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Nop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "Not",
          "package": "array-forth",
          "signature": "Not",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "Not",
          "package": "array-forth",
          "partial": "Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "Or",
          "package": "array-forth",
          "signature": "Or",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "Or",
          "package": "array-forth",
          "partial": "Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "Over",
          "package": "array-forth",
          "signature": "Over",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "Over",
          "package": "array-forth",
          "partial": "Over",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Over"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "Plus",
          "package": "array-forth",
          "signature": "Plus",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "Plus",
          "package": "array-forth",
          "partial": "Plus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "Pop",
          "package": "array-forth",
          "signature": "Pop",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "Pop",
          "package": "array-forth",
          "partial": "Pop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "Push",
          "package": "array-forth",
          "signature": "Push",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "Push",
          "package": "array-forth",
          "partial": "Push",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "ReadA",
          "package": "array-forth",
          "signature": "ReadA",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "ReadA",
          "package": "array-forth",
          "partial": "Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:ReadA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "Ret",
          "package": "array-forth",
          "signature": "Ret",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "Ret",
          "package": "array-forth",
          "partial": "Ret",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Ret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "SetA",
          "package": "array-forth",
          "signature": "SetA",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "SetA",
          "package": "array-forth",
          "partial": "Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:SetA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "SetB",
          "package": "array-forth",
          "signature": "SetB",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "SetB",
          "package": "array-forth",
          "partial": "Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:SetB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "Store",
          "package": "array-forth",
          "signature": "Store",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "Store",
          "package": "array-forth",
          "partial": "Store",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Store"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "StoreB",
          "package": "array-forth",
          "signature": "StoreB",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "StoreB",
          "package": "array-forth",
          "partial": "Store",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:StoreB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "StoreP",
          "package": "array-forth",
          "signature": "StoreP",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "StoreP",
          "package": "array-forth",
          "partial": "Store",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:StoreP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "StorePlus",
          "package": "array-forth",
          "signature": "StorePlus",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "StorePlus",
          "package": "array-forth",
          "partial": "Store Plus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:StorePlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "Times2",
          "package": "array-forth",
          "signature": "Times2",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "Times2",
          "package": "array-forth",
          "partial": "Times",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Times2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Opcode",
          "name": "Unext",
          "package": "array-forth",
          "signature": "Unext",
          "source": "src/Language-ArrayForth-Opcode.html#Opcode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "Unext",
          "package": "array-forth",
          "partial": "Unext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:Unext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts an Opcode to its 18-bit word representation.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Opcode",
          "name": "fromOpcode",
          "package": "array-forth",
          "signature": "Opcode -\u003e F18Word",
          "source": "src/Language-ArrayForth-Opcode.html#fromOpcode",
          "type": "function"
        },
        "index": {
          "description": "Converts an Opcode to its bit word representation",
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "fromOpcode",
          "normalized": "Opcode-\u003eF Word",
          "package": "array-forth",
          "partial": "Opcode",
          "signature": "Opcode-\u003eF Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:fromOpcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether the given opcode is a jump instruction expecting\n an address.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Opcode",
          "name": "isJump",
          "package": "array-forth",
          "signature": "Opcode -\u003e Bool",
          "source": "src/Language-ArrayForth-Opcode.html#isJump",
          "type": "function"
        },
        "index": {
          "description": "Returns whether the given opcode is jump instruction expecting an address",
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "isJump",
          "normalized": "Opcode-\u003eBool",
          "package": "array-forth",
          "partial": "Jump",
          "signature": "Opcode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:isJump"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe names of the different instructions, ordered by opcode.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Opcode",
          "name": "names",
          "package": "array-forth",
          "signature": "[String]",
          "source": "src/Language-ArrayForth-Opcode.html#names",
          "type": "function"
        },
        "index": {
          "description": "The names of the different instructions ordered by opcode",
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "names",
          "normalized": "[String]",
          "package": "array-forth",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:names"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEstimates how long a given opcode will take to execute. Normal\n opcodes take 1.5 nanoseconds where ones that access the memory take\n 5 nanoseconds.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Opcode",
          "name": "opcodeTime",
          "package": "array-forth",
          "signature": "Opcode -\u003e Double",
          "source": "src/Language-ArrayForth-Opcode.html#opcodeTime",
          "type": "function"
        },
        "index": {
          "description": "Estimates how long given opcode will take to execute Normal opcodes take nanoseconds where ones that access the memory take nanoseconds",
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "opcodeTime",
          "normalized": "Opcode-\u003eDouble",
          "package": "array-forth",
          "partial": "Time",
          "signature": "Opcode-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:opcodeTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll of the opcodes, in order.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Opcode",
          "name": "opcodes",
          "package": "array-forth",
          "signature": "[Opcode]",
          "source": "src/Language-ArrayForth-Opcode.html#opcodes",
          "type": "function"
        },
        "index": {
          "description": "All of the opcodes in order",
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "opcodes",
          "normalized": "[Opcode]",
          "package": "array-forth",
          "signature": "[Opcode]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:opcodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to read a given string as an opcode from the list of names.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Opcode",
          "name": "readOpcode",
          "package": "array-forth",
          "signature": "String -\u003e Either ParseError Opcode",
          "source": "src/Language-ArrayForth-Opcode.html#readOpcode",
          "type": "function"
        },
        "index": {
          "description": "Tries to read given string as an opcode from the list of names",
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "readOpcode",
          "normalized": "String-\u003eEither ParseError Opcode",
          "package": "array-forth",
          "partial": "Opcode",
          "signature": "String-\u003eEither ParseError Opcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:readOpcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCan the given opcode go in the last slot?\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Opcode",
          "name": "slot3",
          "package": "array-forth",
          "signature": "Opcode -\u003e Bool",
          "source": "src/Language-ArrayForth-Opcode.html#slot3",
          "type": "function"
        },
        "index": {
          "description": "Can the given opcode go in the last slot",
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "slot3",
          "normalized": "Opcode-\u003eBool",
          "package": "array-forth",
          "signature": "Opcode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:slot3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a word to an opcode. The word has to be \u003c 32.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Opcode",
          "name": "toOpcode",
          "package": "array-forth",
          "signature": "F18Word -\u003e Opcode",
          "source": "src/Language-ArrayForth-Opcode.html#toOpcode",
          "type": "function"
        },
        "index": {
          "description": "Converts word to an opcode The word has to be",
          "hierarchy": "Language ArrayForth Opcode",
          "module": "Language.ArrayForth.Opcode",
          "name": "toOpcode",
          "normalized": "F Word-\u003eOpcode",
          "package": "array-forth",
          "partial": "Opcode",
          "signature": "F Word-\u003eOpcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Opcode.html#v:toOpcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Parse",
          "name": "Parse",
          "package": "array-forth",
          "source": "src/Language-ArrayForth-Parse.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language ArrayForth Parse",
          "module": "Language.ArrayForth.Parse",
          "name": "Parse",
          "package": "array-forth",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossible ways the input string can be malformed.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Parse",
          "name": "ParseError",
          "package": "array-forth",
          "source": "src/Language-ArrayForth-Parse.html#ParseError",
          "type": "data"
        },
        "index": {
          "description": "Possible ways the input string can be malformed",
          "hierarchy": "Language ArrayForth Parse",
          "module": "Language.ArrayForth.Parse",
          "name": "ParseError",
          "package": "array-forth",
          "partial": "Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Parse.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Parse",
          "name": "BadNumber",
          "package": "array-forth",
          "signature": "BadNumber String",
          "source": "src/Language-ArrayForth-Parse.html#ParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Parse",
          "module": "Language.ArrayForth.Parse",
          "name": "BadNumber",
          "package": "array-forth",
          "partial": "Bad Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Parse.html#v:BadNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Parse",
          "name": "BadOpcode",
          "package": "array-forth",
          "signature": "BadOpcode String",
          "source": "src/Language-ArrayForth-Parse.html#ParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Parse",
          "module": "Language.ArrayForth.Parse",
          "name": "BadOpcode",
          "package": "array-forth",
          "partial": "Bad Opcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Parse.html#v:BadOpcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Parse",
          "name": "NoAddr",
          "package": "array-forth",
          "signature": "NoAddr String",
          "source": "src/Language-ArrayForth-Parse.html#ParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Parse",
          "module": "Language.ArrayForth.Parse",
          "name": "NoAddr",
          "package": "array-forth",
          "partial": "No Addr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Parse.html#v:NoAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Parse",
          "name": "NotJump",
          "package": "array-forth",
          "signature": "NotJump String",
          "source": "src/Language-ArrayForth-Parse.html#ParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Parse",
          "module": "Language.ArrayForth.Parse",
          "name": "NotJump",
          "package": "array-forth",
          "partial": "Not Jump",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Parse.html#v:NotJump"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Parse",
          "name": "NotSlot3",
          "package": "array-forth",
          "signature": "NotSlot3 String",
          "source": "src/Language-ArrayForth-Parse.html#ParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Parse",
          "module": "Language.ArrayForth.Parse",
          "name": "NotSlot3",
          "package": "array-forth",
          "partial": "Not Slot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Parse.html#v:NotSlot3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the given string a valid number with no other tokens?\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Parse",
          "name": "isNumber",
          "package": "array-forth",
          "signature": "String -\u003e Bool",
          "source": "src/Language-ArrayForth-Parse.html#isNumber",
          "type": "function"
        },
        "index": {
          "description": "Is the given string valid number with no other tokens",
          "hierarchy": "Language ArrayForth Parse",
          "module": "Language.ArrayForth.Parse",
          "name": "isNumber",
          "normalized": "String-\u003eBool",
          "package": "array-forth",
          "partial": "Number",
          "signature": "String-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Parse.html#v:isNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to read a word, giving an error if it fails.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Parse",
          "name": "readWord",
          "package": "array-forth",
          "signature": "String -\u003e Either ParseError a",
          "source": "src/Language-ArrayForth-Parse.html#readWord",
          "type": "function"
        },
        "index": {
          "description": "Tries to read word giving an error if it fails",
          "hierarchy": "Language ArrayForth Parse",
          "module": "Language.ArrayForth.Parse",
          "name": "readWord",
          "normalized": "String-\u003eEither ParseError a",
          "package": "array-forth",
          "partial": "Word",
          "signature": "String-\u003eEither ParseError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Parse.html#v:readWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Program",
          "name": "Program",
          "package": "array-forth",
          "source": "src/Language-ArrayForth-Program.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language ArrayForth Program",
          "module": "Language.ArrayForth.Program",
          "name": "Program",
          "package": "array-forth",
          "partial": "Program",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Program",
          "name": "Addr",
          "package": "array-forth",
          "source": "src/Language-ArrayForth-Program.html#Addr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language ArrayForth Program",
          "module": "Language.ArrayForth.Program",
          "name": "Addr",
          "package": "array-forth",
          "partial": "Addr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#t:Addr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a single instruction as viewed by the\n synthesizer. This can be an opcode, a numeric literal or a token\n representing an unused slot.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Program",
          "name": "Instruction",
          "package": "array-forth",
          "source": "src/Language-ArrayForth-Program.html#Instruction",
          "type": "data"
        },
        "index": {
          "description": "Represents single instruction as viewed by the synthesizer This can be an opcode numeric literal or token representing an unused slot",
          "hierarchy": "Language ArrayForth Program",
          "module": "Language.ArrayForth.Program",
          "name": "Instruction",
          "package": "array-forth",
          "partial": "Instruction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#t:Instruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA program to be manipulated by the MCMC synthesizer\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Program",
          "name": "Program",
          "package": "array-forth",
          "source": "src/Language-ArrayForth-Program.html#Program",
          "type": "type"
        },
        "index": {
          "description": "program to be manipulated by the MCMC synthesizer",
          "hierarchy": "Language ArrayForth Program",
          "module": "Language.ArrayForth.Program",
          "name": "Program",
          "package": "array-forth",
          "partial": "Program",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#t:Program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Program",
          "name": "Abstract",
          "package": "array-forth",
          "signature": "Abstract String",
          "source": "src/Language-ArrayForth-Program.html#Addr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Program",
          "module": "Language.ArrayForth.Program",
          "name": "Abstract",
          "package": "array-forth",
          "partial": "Abstract",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:Abstract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Program",
          "name": "Concrete",
          "package": "array-forth",
          "signature": "Concrete F18Word",
          "source": "src/Language-ArrayForth-Program.html#Addr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Program",
          "module": "Language.ArrayForth.Program",
          "name": "Concrete",
          "package": "array-forth",
          "partial": "Concrete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:Concrete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Program",
          "name": "Jump",
          "package": "array-forth",
          "signature": "Jump Opcode Addr",
          "source": "src/Language-ArrayForth-Program.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Program",
          "module": "Language.ArrayForth.Program",
          "name": "Jump",
          "package": "array-forth",
          "partial": "Jump",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:Jump"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Program",
          "name": "Label",
          "package": "array-forth",
          "signature": "Label String",
          "source": "src/Language-ArrayForth-Program.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Program",
          "module": "Language.ArrayForth.Program",
          "name": "Label",
          "package": "array-forth",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Program",
          "name": "Number",
          "package": "array-forth",
          "signature": "Number F18Word",
          "source": "src/Language-ArrayForth-Program.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Program",
          "module": "Language.ArrayForth.Program",
          "name": "Number",
          "package": "array-forth",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:Number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Program",
          "name": "Opcode",
          "package": "array-forth",
          "signature": "Opcode Opcode",
          "source": "src/Language-ArrayForth-Program.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Program",
          "module": "Language.ArrayForth.Program",
          "name": "Opcode",
          "package": "array-forth",
          "partial": "Opcode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:Opcode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Program",
          "name": "Unused",
          "package": "array-forth",
          "signature": "Unused",
          "source": "src/Language-ArrayForth-Program.html#Instruction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Program",
          "module": "Language.ArrayForth.Program",
          "name": "Unused",
          "package": "array-forth",
          "partial": "Unused",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:Unused"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes this instruction force a word boundary?\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Program",
          "name": "boundary",
          "package": "array-forth",
          "signature": "Instruction -\u003e Bool",
          "source": "src/Language-ArrayForth-Program.html#boundary",
          "type": "function"
        },
        "index": {
          "description": "Does this instruction force word boundary",
          "hierarchy": "Language ArrayForth Program",
          "module": "Language.ArrayForth.Program",
          "name": "boundary",
          "normalized": "Instruction-\u003eBool",
          "package": "array-forth",
          "signature": "Instruction-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:boundary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert extra nops to account for instructions that cannot go into\n the last slot.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Program",
          "name": "fixSlot3",
          "package": "array-forth",
          "signature": "Program -\u003e Program",
          "source": "src/Language-ArrayForth-Program.html#fixSlot3",
          "type": "function"
        },
        "index": {
          "description": "Insert extra nops to account for instructions that cannot go into the last slot",
          "hierarchy": "Language ArrayForth Program",
          "module": "Language.ArrayForth.Program",
          "name": "fixSlot3",
          "normalized": "Program-\u003eProgram",
          "package": "array-forth",
          "partial": "Slot",
          "signature": "Program-\u003eProgram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:fixSlot3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets a synthesizer program from a native program. Currently does\n not support jumps.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Program",
          "name": "fromNative",
          "package": "array-forth",
          "signature": "NativeProgram -\u003e Program",
          "source": "src/Language-ArrayForth-Program.html#fromNative",
          "type": "function"
        },
        "index": {
          "description": "Gets synthesizer program from native program Currently does not support jumps",
          "hierarchy": "Language ArrayForth Program",
          "module": "Language.ArrayForth.Program",
          "name": "fromNative",
          "normalized": "NativeProgram-\u003eProgram",
          "package": "array-forth",
          "partial": "Native",
          "signature": "NativeProgram-\u003eProgram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:fromNative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResolves labels into addresses, assuming the program starts at\n the given memory location.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Program",
          "name": "labels",
          "package": "array-forth",
          "signature": "F18Word -\u003e Program -\u003e Program",
          "source": "src/Language-ArrayForth-Program.html#labels",
          "type": "function"
        },
        "index": {
          "description": "Resolves labels into addresses assuming the program starts at the given memory location",
          "hierarchy": "Language ArrayForth Program",
          "module": "Language.ArrayForth.Program",
          "name": "labels",
          "normalized": "F Word-\u003eProgram-\u003eProgram",
          "package": "array-forth",
          "signature": "F Word-\u003eProgram-\u003eProgram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:labels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoads the given synthesizer-friendly program into the given\n state.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Program",
          "name": "load",
          "package": "array-forth",
          "signature": "Program -\u003e State -\u003e State",
          "source": "src/Language-ArrayForth-Program.html#load",
          "type": "function"
        },
        "index": {
          "description": "Loads the given synthesizer-friendly program into the given state",
          "hierarchy": "Language ArrayForth Program",
          "module": "Language.ArrayForth.Program",
          "name": "load",
          "normalized": "Program-\u003eState-\u003eState",
          "package": "array-forth",
          "signature": "Program-\u003eState-\u003eState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:load"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to parse the given string as an instruction, which can\n either be a number, an opcode or \u003ca\u003e_\u003c/a\u003e representing Unused.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Program",
          "name": "readInstruction",
          "package": "array-forth",
          "signature": "String -\u003e Either ParseError Instruction",
          "source": "src/Language-ArrayForth-Program.html#readInstruction",
          "type": "function"
        },
        "index": {
          "description": "Tries to parse the given string as an instruction which can either be number an opcode or representing Unused",
          "hierarchy": "Language ArrayForth Program",
          "module": "Language.ArrayForth.Program",
          "name": "readInstruction",
          "normalized": "String-\u003eEither ParseError Instruction",
          "package": "array-forth",
          "partial": "Instruction",
          "signature": "String-\u003eEither ParseError Instruction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:readInstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a program in the synthesizer's format.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Program",
          "name": "readProgram",
          "package": "array-forth",
          "signature": "String -\u003e Either ParseError Program",
          "source": "src/Language-ArrayForth-Program.html#readProgram",
          "type": "function"
        },
        "index": {
          "description": "Reads program in the synthesizer format",
          "hierarchy": "Language ArrayForth Program",
          "module": "Language.ArrayForth.Program",
          "name": "readProgram",
          "normalized": "String-\u003eEither ParseError Program",
          "package": "array-forth",
          "partial": "Program",
          "signature": "String-\u003eEither ParseError Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:readProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a given program from the default starting state.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Program",
          "name": "runProgram",
          "package": "array-forth",
          "signature": "State -\u003e Program -\u003e State",
          "source": "src/Language-ArrayForth-Program.html#runProgram",
          "type": "function"
        },
        "index": {
          "description": "Runs given program from the default starting state",
          "hierarchy": "Language ArrayForth Program",
          "module": "Language.ArrayForth.Program",
          "name": "runProgram",
          "normalized": "State-\u003eProgram-\u003eState",
          "package": "array-forth",
          "partial": "Program",
          "signature": "State-\u003eProgram-\u003eState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:runProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Program",
          "name": "toNative",
          "package": "array-forth",
          "signature": "Program -\u003e NativeProgram",
          "source": "src/Language-ArrayForth-Program.html#toNative",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Program",
          "module": "Language.ArrayForth.Program",
          "name": "toNative",
          "normalized": "Program-\u003eNativeProgram",
          "package": "array-forth",
          "partial": "Native",
          "signature": "Program-\u003eNativeProgram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Program.html#v:toNative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Stack",
          "name": "Stack",
          "package": "array-forth",
          "source": "src/Language-ArrayForth-Stack.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language ArrayForth Stack",
          "module": "Language.ArrayForth.Stack",
          "name": "Stack",
          "package": "array-forth",
          "partial": "Stack",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Stack.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Stack",
          "name": "Stack",
          "package": "array-forth",
          "source": "src/Language-ArrayForth-Stack.html#Stack",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language ArrayForth Stack",
          "module": "Language.ArrayForth.Stack",
          "name": "Stack",
          "package": "array-forth",
          "partial": "Stack",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Stack.html#t:Stack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stack containing only 0s.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Stack",
          "name": "empty",
          "package": "array-forth",
          "signature": "Stack",
          "source": "src/Language-ArrayForth-Stack.html#empty",
          "type": "function"
        },
        "index": {
          "description": "stack containing only",
          "hierarchy": "Language ArrayForth Stack",
          "module": "Language.ArrayForth.Stack",
          "name": "empty",
          "package": "array-forth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Stack.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush the given elements onto the stack one-by-one.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Stack",
          "name": "fill",
          "package": "array-forth",
          "signature": "Stack -\u003e [F18Word] -\u003e Stack",
          "source": "src/Language-ArrayForth-Stack.html#fill",
          "type": "function"
        },
        "index": {
          "description": "Push the given elements onto the stack one-by-one",
          "hierarchy": "Language ArrayForth Stack",
          "module": "Language.ArrayForth.Stack",
          "name": "fill",
          "normalized": "Stack-\u003e[F Word]-\u003eStack",
          "package": "array-forth",
          "signature": "Stack-\u003e[F Word]-\u003eStack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Stack.html#v:fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePops the top of the stack, returning the value and the new stack.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Stack",
          "name": "pop",
          "package": "array-forth",
          "signature": "Stack -\u003e (Stack, F18Word)",
          "source": "src/Language-ArrayForth-Stack.html#pop",
          "type": "function"
        },
        "index": {
          "description": "Pops the top of the stack returning the value and the new stack",
          "hierarchy": "Language ArrayForth Stack",
          "module": "Language.ArrayForth.Stack",
          "name": "pop",
          "normalized": "Stack-\u003e(Stack,F Word)",
          "package": "array-forth",
          "signature": "Stack-\u003e(Stack,F Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Stack.html#v:pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePushes the given element on top of the stack, discarding the last element.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Stack",
          "name": "push",
          "package": "array-forth",
          "signature": "Stack -\u003e F18Word -\u003e Stack",
          "source": "src/Language-ArrayForth-Stack.html#push",
          "type": "function"
        },
        "index": {
          "description": "Pushes the given element on top of the stack discarding the last element",
          "hierarchy": "Language ArrayForth Stack",
          "module": "Language.ArrayForth.Stack",
          "name": "push",
          "normalized": "Stack-\u003eF Word-\u003eStack",
          "package": "array-forth",
          "signature": "Stack-\u003eF Word-\u003eStack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Stack.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.State",
          "name": "State",
          "package": "array-forth",
          "source": "src/Language-ArrayForth-State.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language ArrayForth State",
          "module": "Language.ArrayForth.State",
          "name": "State",
          "package": "array-forth",
          "partial": "State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe chip's RAM and ROM\n\u003c/p\u003e",
          "module": "Language.ArrayForth.State",
          "name": "Memory",
          "package": "array-forth",
          "source": "src/Language-ArrayForth-State.html#Memory",
          "type": "type"
        },
        "index": {
          "description": "The chip RAM and ROM",
          "hierarchy": "Language ArrayForth State",
          "module": "Language.ArrayForth.State",
          "name": "Memory",
          "package": "array-forth",
          "partial": "Memory",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#t:Memory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA state representing the registers, stacks and memory of a core.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.State",
          "name": "State",
          "package": "array-forth",
          "source": "src/Language-ArrayForth-State.html#State",
          "type": "data"
        },
        "index": {
          "description": "state representing the registers stacks and memory of core",
          "hierarchy": "Language ArrayForth State",
          "module": "Language.ArrayForth.State",
          "name": "State",
          "package": "array-forth",
          "partial": "State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the memory at a location given by a Forth word.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.State",
          "name": "(!)",
          "package": "array-forth",
          "signature": "Memory -\u003e F18Word -\u003e F18Word",
          "source": "src/Language-ArrayForth-State.html#%21",
          "type": "function"
        },
        "index": {
          "description": "Read the memory at location given by Forth word",
          "hierarchy": "Language ArrayForth State",
          "module": "Language.ArrayForth.State",
          "name": "(!) !",
          "normalized": "Memory-\u003eF Word-\u003eF Word",
          "package": "array-forth",
          "signature": "Memory-\u003eF Word-\u003eF Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.State",
          "name": "State",
          "package": "array-forth",
          "signature": "State",
          "source": "src/Language-ArrayForth-State.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth State",
          "module": "Language.ArrayForth.State",
          "name": "State",
          "package": "array-forth",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.State",
          "name": "a",
          "package": "array-forth",
          "signature": "F18Word",
          "source": "src/Language-ArrayForth-State.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth State",
          "module": "Language.ArrayForth.State",
          "name": "a",
          "package": "array-forth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:a"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.State",
          "name": "b",
          "package": "array-forth",
          "signature": "F18Word",
          "source": "src/Language-ArrayForth-State.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth State",
          "module": "Language.ArrayForth.State",
          "name": "b",
          "package": "array-forth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:b"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.State",
          "name": "dataStack",
          "package": "array-forth",
          "signature": "Stack",
          "source": "src/Language-ArrayForth-State.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth State",
          "module": "Language.ArrayForth.State",
          "name": "dataStack",
          "package": "array-forth",
          "partial": "Stack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:dataStack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePops the data stack of the given state, updating s and t.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.State",
          "name": "dpop",
          "package": "array-forth",
          "signature": "State -\u003e (State, F18Word)",
          "source": "src/Language-ArrayForth-State.html#dpop",
          "type": "function"
        },
        "index": {
          "description": "Pops the data stack of the given state updating and",
          "hierarchy": "Language ArrayForth State",
          "module": "Language.ArrayForth.State",
          "name": "dpop",
          "normalized": "State-\u003e(State,F Word)",
          "package": "array-forth",
          "signature": "State-\u003e(State,F Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:dpop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush a word onto the data stack, updating s and t.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.State",
          "name": "dpush",
          "package": "array-forth",
          "signature": "State -\u003e F18Word -\u003e State",
          "source": "src/Language-ArrayForth-State.html#dpush",
          "type": "function"
        },
        "index": {
          "description": "Push word onto the data stack updating and",
          "hierarchy": "Language ArrayForth State",
          "module": "Language.ArrayForth.State",
          "name": "dpush",
          "normalized": "State-\u003eF Word-\u003eState",
          "package": "array-forth",
          "signature": "State-\u003eF Word-\u003eState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:dpush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.State",
          "name": "emptyMem",
          "package": "array-forth",
          "signature": "Memory",
          "source": "src/Language-ArrayForth-State.html#emptyMem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth State",
          "module": "Language.ArrayForth.State",
          "name": "emptyMem",
          "package": "array-forth",
          "partial": "Mem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:emptyMem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.State",
          "name": "i",
          "package": "array-forth",
          "signature": "F18Word",
          "source": "src/Language-ArrayForth-State.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth State",
          "module": "Language.ArrayForth.State",
          "name": "i",
          "package": "array-forth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:i"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad the given memory words into the state starting at the given\n address.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.State",
          "name": "loadMemory",
          "package": "array-forth",
          "signature": "F18Word -\u003e [F18Word] -\u003e State -\u003e State",
          "source": "src/Language-ArrayForth-State.html#loadMemory",
          "type": "function"
        },
        "index": {
          "description": "Load the given memory words into the state starting at the given address",
          "hierarchy": "Language ArrayForth State",
          "module": "Language.ArrayForth.State",
          "name": "loadMemory",
          "normalized": "F Word-\u003e[F Word]-\u003eState-\u003eState",
          "package": "array-forth",
          "partial": "Memory",
          "signature": "F Word-\u003e[F Word]-\u003eState-\u003eState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:loadMemory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.State",
          "name": "memory",
          "package": "array-forth",
          "signature": "Memory",
          "source": "src/Language-ArrayForth-State.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth State",
          "module": "Language.ArrayForth.State",
          "name": "memory",
          "package": "array-forth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:memory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe next word of instructions to execute in the given state.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.State",
          "name": "next",
          "package": "array-forth",
          "signature": "State -\u003e Instrs",
          "source": "src/Language-ArrayForth-State.html#next",
          "type": "function"
        },
        "index": {
          "description": "The next word of instructions to execute in the given state",
          "hierarchy": "Language ArrayForth State",
          "module": "Language.ArrayForth.State",
          "name": "next",
          "normalized": "State-\u003eInstrs",
          "package": "array-forth",
          "signature": "State-\u003eInstrs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.State",
          "name": "p",
          "package": "array-forth",
          "signature": "F18Word",
          "source": "src/Language-ArrayForth-State.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth State",
          "module": "Language.ArrayForth.State",
          "name": "p",
          "package": "array-forth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:p"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.State",
          "name": "r",
          "package": "array-forth",
          "signature": "F18Word",
          "source": "src/Language-ArrayForth-State.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth State",
          "module": "Language.ArrayForth.State",
          "name": "r",
          "package": "array-forth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.State",
          "name": "returnStack",
          "package": "array-forth",
          "signature": "Stack",
          "source": "src/Language-ArrayForth-State.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth State",
          "module": "Language.ArrayForth.State",
          "name": "returnStack",
          "package": "array-forth",
          "partial": "Stack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:returnStack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePops the return stack of the given state, updating r.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.State",
          "name": "rpop",
          "package": "array-forth",
          "signature": "State -\u003e (State, F18Word)",
          "source": "src/Language-ArrayForth-State.html#rpop",
          "type": "function"
        },
        "index": {
          "description": "Pops the return stack of the given state updating",
          "hierarchy": "Language ArrayForth State",
          "module": "Language.ArrayForth.State",
          "name": "rpop",
          "normalized": "State-\u003e(State,F Word)",
          "package": "array-forth",
          "signature": "State-\u003e(State,F Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:rpop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush a word onto the return stack, updating r.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.State",
          "name": "rpush",
          "package": "array-forth",
          "signature": "State -\u003e F18Word -\u003e State",
          "source": "src/Language-ArrayForth-State.html#rpush",
          "type": "function"
        },
        "index": {
          "description": "Push word onto the return stack updating",
          "hierarchy": "Language ArrayForth State",
          "module": "Language.ArrayForth.State",
          "name": "rpush",
          "normalized": "State-\u003eF Word-\u003eState",
          "package": "array-forth",
          "signature": "State-\u003eF Word-\u003eState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:rpush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.State",
          "name": "s",
          "package": "array-forth",
          "signature": "F18Word",
          "source": "src/Language-ArrayForth-State.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth State",
          "module": "Language.ArrayForth.State",
          "name": "s",
          "package": "array-forth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:s"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the memory using Forth words.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.State",
          "name": "set",
          "package": "array-forth",
          "signature": "Memory -\u003e F18Word -\u003e F18Word -\u003e Memory",
          "source": "src/Language-ArrayForth-State.html#set",
          "type": "function"
        },
        "index": {
          "description": "Set the memory using Forth words",
          "hierarchy": "Language ArrayForth State",
          "module": "Language.ArrayForth.State",
          "name": "set",
          "normalized": "Memory-\u003eF Word-\u003eF Word-\u003eMemory",
          "package": "array-forth",
          "signature": "Memory-\u003eF Word-\u003eF Word-\u003eMemory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoads the given program into memory at the given starting\n position.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.State",
          "name": "setProgram",
          "package": "array-forth",
          "signature": "F18Word -\u003e NativeProgram -\u003e State -\u003e State",
          "source": "src/Language-ArrayForth-State.html#setProgram",
          "type": "function"
        },
        "index": {
          "description": "Loads the given program into memory at the given starting position",
          "hierarchy": "Language ArrayForth State",
          "module": "Language.ArrayForth.State",
          "name": "setProgram",
          "normalized": "F Word-\u003eNativeProgram-\u003eState-\u003eState",
          "package": "array-forth",
          "partial": "Program",
          "signature": "F Word-\u003eNativeProgram-\u003eState-\u003eState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:setProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe state corresponding to a core with no programs loaded and no\n instructions executed.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.State",
          "name": "startState",
          "package": "array-forth",
          "signature": "State",
          "source": "src/Language-ArrayForth-State.html#startState",
          "type": "function"
        },
        "index": {
          "description": "The state corresponding to core with no programs loaded and no instructions executed",
          "hierarchy": "Language ArrayForth State",
          "module": "Language.ArrayForth.State",
          "name": "startState",
          "package": "array-forth",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:startState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.State",
          "name": "t",
          "package": "array-forth",
          "signature": "F18Word",
          "source": "src/Language-ArrayForth-State.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth State",
          "module": "Language.ArrayForth.State",
          "name": "t",
          "package": "array-forth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:t"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForce an address to be in range of memory: [0,64).\n\u003c/p\u003e",
          "module": "Language.ArrayForth.State",
          "name": "toMem",
          "package": "array-forth",
          "signature": "a -\u003e b",
          "source": "src/Language-ArrayForth-State.html#toMem",
          "type": "function"
        },
        "index": {
          "description": "Force an address to be in range of memory",
          "hierarchy": "Language ArrayForth State",
          "module": "Language.ArrayForth.State",
          "name": "toMem",
          "normalized": "a-\u003eb",
          "package": "array-forth",
          "partial": "Mem",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-State.html#v:toMem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Synthesis",
          "name": "Synthesis",
          "package": "array-forth",
          "source": "src/Language-ArrayForth-Synthesis.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language ArrayForth Synthesis",
          "module": "Language.ArrayForth.Synthesis",
          "name": "Synthesis",
          "package": "array-forth",
          "partial": "Synthesis",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Synthesis.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA score type that contains a correctness value and a performance\n value.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Synthesis",
          "name": "DefaultScore",
          "package": "array-forth",
          "source": "src/Language-ArrayForth-Synthesis.html#DefaultScore",
          "type": "data"
        },
        "index": {
          "description": "score type that contains correctness value and performance value",
          "hierarchy": "Language ArrayForth Synthesis",
          "module": "Language.ArrayForth.Synthesis",
          "name": "DefaultScore",
          "package": "array-forth",
          "partial": "Default Score",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Synthesis.html#t:DefaultScore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Synthesis",
          "name": "DefaultScore",
          "package": "array-forth",
          "signature": "DefaultScore Double Double",
          "source": "src/Language-ArrayForth-Synthesis.html#DefaultScore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Synthesis",
          "module": "Language.ArrayForth.Synthesis",
          "name": "DefaultScore",
          "package": "array-forth",
          "partial": "Default Score",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Synthesis.html#v:DefaultScore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default mutations to try. For now, this will either change an\n instruction or swap two instructions in the program, with equal\n probability.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Synthesis",
          "name": "defaultMutations",
          "package": "array-forth",
          "signature": "Mutation Program",
          "source": "src/Language-ArrayForth-Synthesis.html#defaultMutations",
          "type": "function"
        },
        "index": {
          "description": "The default mutations to try For now this will either change an instruction or swap two instructions in the program with equal probability",
          "hierarchy": "Language ArrayForth Synthesis",
          "module": "Language.ArrayForth.Synthesis",
          "name": "defaultMutations",
          "package": "array-forth",
          "partial": "Mutations",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Synthesis.html#v:defaultMutations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default distribution of instructions. For now, we do not\n support any sort of jumps. All the other possible instructions\n along with constant numbers and unused slots are equally\n likely. The numeric value of constants is currently a uniform\n distribution over 18-bit words.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Synthesis",
          "name": "defaultOps",
          "package": "array-forth",
          "signature": "Distr Instruction",
          "source": "src/Language-ArrayForth-Synthesis.html#defaultOps",
          "type": "function"
        },
        "index": {
          "description": "The default distribution of instructions For now we do not support any sort of jumps All the other possible instructions along with constant numbers and unused slots are equally likely The numeric value of constants is currently uniform distribution over bit words",
          "hierarchy": "Language ArrayForth Synthesis",
          "module": "Language.ArrayForth.Synthesis",
          "name": "defaultOps",
          "package": "array-forth",
          "partial": "Ops",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Synthesis.html#v:defaultOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a specification program and some inputs, evaluate a program\n against the specification for both performance and\n correctness. Normalize the score based on the number of test cases.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Synthesis",
          "name": "evaluate",
          "package": "array-forth",
          "signature": "Program -\u003e [State] -\u003e (State -\u003e State -\u003e Distance) -\u003e Program -\u003e DefaultScore",
          "source": "src/Language-ArrayForth-Synthesis.html#evaluate",
          "type": "function"
        },
        "index": {
          "description": "Given specification program and some inputs evaluate program against the specification for both performance and correctness Normalize the score based on the number of test cases",
          "hierarchy": "Language ArrayForth Synthesis",
          "module": "Language.ArrayForth.Synthesis",
          "name": "evaluate",
          "normalized": "Program-\u003e[State]-\u003e(State-\u003eState-\u003eDistance)-\u003eProgram-\u003eDefaultScore",
          "package": "array-forth",
          "signature": "Program-\u003e[State]-\u003e(State-\u003eState-\u003eDistance)-\u003eProgram-\u003eDefaultScore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Synthesis.html#v:evaluate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Synthesis",
          "name": "pairs",
          "package": "array-forth",
          "signature": "[(Instruction, Instruction)]",
          "source": "src/Language-ArrayForth-Synthesis.html#pairs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Synthesis",
          "module": "Language.ArrayForth.Synthesis",
          "name": "pairs",
          "normalized": "[(Instruction,Instruction)]",
          "package": "array-forth",
          "signature": "[(Instruction,Instruction)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Synthesis.html#v:pairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ArrayForth.Synthesis",
          "name": "removePairs",
          "package": "array-forth",
          "signature": "Distr Instruction -\u003e Mutation Program",
          "source": "src/Language-ArrayForth-Synthesis.html#removePairs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ArrayForth Synthesis",
          "module": "Language.ArrayForth.Synthesis",
          "name": "removePairs",
          "normalized": "Distr Instruction-\u003eMutation Program",
          "package": "array-forth",
          "partial": "Pairs",
          "signature": "Distr Instruction-\u003eMutation Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Synthesis.html#v:removePairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an evaluation function from a spec, a set of inputs and a\n function for comparing program traces.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Synthesis",
          "name": "trace",
          "package": "array-forth",
          "signature": "Program -\u003e [State] -\u003e (Trace -\u003e Trace -\u003e score) -\u003e Program -\u003e score",
          "source": "src/Language-ArrayForth-Synthesis.html#trace",
          "type": "function"
        },
        "index": {
          "description": "Creates an evaluation function from spec set of inputs and function for comparing program traces",
          "hierarchy": "Language ArrayForth Synthesis",
          "module": "Language.ArrayForth.Synthesis",
          "name": "trace",
          "normalized": "Program-\u003e[State]-\u003e(Trace-\u003eTrace-\u003ea)-\u003eProgram-\u003ea",
          "package": "array-forth",
          "signature": "Program-\u003e[State]-\u003e(Trace-\u003eTrace-\u003escore)-\u003eProgram-\u003escore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Synthesis.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsing a given correctness measure, produce a score also\n containing performance.\n\u003c/p\u003e",
          "module": "Language.ArrayForth.Synthesis",
          "name": "withPerformance",
          "package": "array-forth",
          "signature": "(Trace -\u003e Trace -\u003e s) -\u003e Trace -\u003e Trace -\u003e DefaultScore",
          "source": "src/Language-ArrayForth-Synthesis.html#withPerformance",
          "type": "function"
        },
        "index": {
          "description": "Using given correctness measure produce score also containing performance",
          "hierarchy": "Language ArrayForth Synthesis",
          "module": "Language.ArrayForth.Synthesis",
          "name": "withPerformance",
          "normalized": "(Trace-\u003eTrace-\u003ea)-\u003eTrace-\u003eTrace-\u003eDefaultScore",
          "package": "array-forth",
          "partial": "Performance",
          "signature": "(Trace-\u003eTrace-\u003es)-\u003eTrace-\u003eTrace-\u003eDefaultScore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/array-forth/docs/Language-ArrayForth-Synthesis.html#v:withPerformance"
      }
    }
  ]
]