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
        "word": "atom-msp430"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.Compile",
          "name": "Compile",
          "package": "atom-msp430",
          "source": "src/Language-Atom-MSP430-Compile.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 Compile",
          "module": "Language.Atom.MSP430.Compile",
          "name": "Compile",
          "package": "atom-msp430",
          "partial": "Compile",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Compile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProgram information. It specifies the functions that should be used in specific\n   roles in the compiled code, as well as other configuration information.\n\u003c/p\u003e",
          "module": "Language.Atom.MSP430.Compile",
          "name": "MSP430Compilation",
          "package": "atom-msp430",
          "source": "src/Language-Atom-MSP430-Compile.html#MSP430Compilation",
          "type": "data"
        },
        "index": {
          "description": "Program information It specifies the functions that should be used in specific roles in the compiled code as well as other configuration information",
          "hierarchy": "Language Atom MSP430 Compile",
          "module": "Language.Atom.MSP430.Compile",
          "name": "MSP430Compilation",
          "package": "atom-msp430",
          "partial": "MSP Compilation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Compile.html#t:MSP430Compilation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.Compile",
          "name": "MSP430Compilation",
          "package": "atom-msp430",
          "signature": "MSP430Compilation",
          "source": "src/Language-Atom-MSP430-Compile.html#MSP430Compilation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 Compile",
          "module": "Language.Atom.MSP430.Compile",
          "name": "MSP430Compilation",
          "package": "atom-msp430",
          "partial": "MSP Compilation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Compile.html#v:MSP430Compilation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a main function calling setup and loop?\n\u003c/p\u003e",
          "module": "Language.Atom.MSP430.Compile",
          "name": "emitMainFn",
          "package": "atom-msp430",
          "signature": "Bool",
          "source": "src/Language-Atom-MSP430-Compile.html#MSP430Compilation",
          "type": "function"
        },
        "index": {
          "description": "Add main function calling setup and loop",
          "hierarchy": "Language Atom MSP430 Compile",
          "module": "Language.Atom.MSP430.Compile",
          "name": "emitMainFn",
          "package": "atom-msp430",
          "partial": "Main Fn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Compile.html#v:emitMainFn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEasy settings for a program with setup and loop, but no main function.\n\u003c/p\u003e",
          "module": "Language.Atom.MSP430.Compile",
          "name": "energiaProgram",
          "package": "atom-msp430",
          "signature": "Atom () -\u003e Atom () -\u003e MSP430Compilation",
          "source": "src/Language-Atom-MSP430-Compile.html#energiaProgram",
          "type": "function"
        },
        "index": {
          "description": "Easy settings for program with setup and loop but no main function",
          "hierarchy": "Language Atom MSP430 Compile",
          "module": "Language.Atom.MSP430.Compile",
          "name": "energiaProgram",
          "normalized": "Atom()-\u003eAtom()-\u003eMSP Compilation",
          "package": "atom-msp430",
          "partial": "Program",
          "signature": "Atom()-\u003eAtom()-\u003eMSP Compilation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Compile.html#v:energiaProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction called in a busy loop after setup.\n\u003c/p\u003e",
          "module": "Language.Atom.MSP430.Compile",
          "name": "loopFn",
          "package": "atom-msp430",
          "signature": "Maybe (Atom ())",
          "source": "src/Language-Atom-MSP430-Compile.html#MSP430Compilation",
          "type": "function"
        },
        "index": {
          "description": "Function called in busy loop after setup",
          "hierarchy": "Language Atom MSP430 Compile",
          "module": "Language.Atom.MSP430.Compile",
          "name": "loopFn",
          "normalized": "Maybe(Atom())",
          "package": "atom-msp430",
          "partial": "Fn",
          "signature": "Maybe(Atom())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Compile.html#v:loopFn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the loop function in the generated code.\n\u003c/p\u003e",
          "module": "Language.Atom.MSP430.Compile",
          "name": "loopFnName",
          "package": "atom-msp430",
          "signature": "String",
          "source": "src/Language-Atom-MSP430-Compile.html#MSP430Compilation",
          "type": "function"
        },
        "index": {
          "description": "Name of the loop function in the generated code",
          "hierarchy": "Language Atom MSP430 Compile",
          "module": "Language.Atom.MSP430.Compile",
          "name": "loopFnName",
          "package": "atom-msp430",
          "partial": "Fn Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Compile.html#v:loopFnName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the main file to generate.\n\u003c/p\u003e",
          "module": "Language.Atom.MSP430.Compile",
          "name": "mainFile",
          "package": "atom-msp430",
          "signature": "String",
          "source": "src/Language-Atom-MSP430-Compile.html#MSP430Compilation",
          "type": "function"
        },
        "index": {
          "description": "Name of the main file to generate",
          "hierarchy": "Language Atom MSP430 Compile",
          "module": "Language.Atom.MSP430.Compile",
          "name": "mainFile",
          "package": "atom-msp430",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Compile.html#v:mainFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompile a program given by the compilation specification. Compiles all functions into library files\n   and then generates a main file which calls these functions in the appropriate way.\n\u003c/p\u003e",
          "module": "Language.Atom.MSP430.Compile",
          "name": "mspCompile",
          "package": "atom-msp430",
          "signature": "String -\u003e MSP430Compilation -\u003e IO ()",
          "source": "src/Language-Atom-MSP430-Compile.html#mspCompile",
          "type": "function"
        },
        "index": {
          "description": "Compile program given by the compilation specification Compiles all functions into library files and then generates main file which calls these functions in the appropriate way",
          "hierarchy": "Language Atom MSP430 Compile",
          "module": "Language.Atom.MSP430.Compile",
          "name": "mspCompile",
          "normalized": "String-\u003eMSP Compilation-\u003eIO()",
          "package": "atom-msp430",
          "partial": "Compile",
          "signature": "String-\u003eMSP Compilation-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Compile.html#v:mspCompile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault program to construct your own programs from. Contains Nothing and generates a\n   basic main.c. Use it by overriding the functions it generates, and optionally their names.\n\u003c/p\u003e",
          "module": "Language.Atom.MSP430.Compile",
          "name": "mspProgram",
          "package": "atom-msp430",
          "signature": "MSP430Compilation",
          "source": "src/Language-Atom-MSP430-Compile.html#mspProgram",
          "type": "function"
        },
        "index": {
          "description": "Default program to construct your own programs from Contains Nothing and generates basic main.c Use it by overriding the functions it generates and optionally their names",
          "hierarchy": "Language Atom MSP430 Compile",
          "module": "Language.Atom.MSP430.Compile",
          "name": "mspProgram",
          "package": "atom-msp430",
          "partial": "Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Compile.html#v:mspProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to call when there is a PORT1 interrupt.\n\u003c/p\u003e",
          "module": "Language.Atom.MSP430.Compile",
          "name": "port1ISR",
          "package": "atom-msp430",
          "signature": "Maybe (Atom ())",
          "source": "src/Language-Atom-MSP430-Compile.html#MSP430Compilation",
          "type": "function"
        },
        "index": {
          "description": "Function to call when there is PORT1 interrupt",
          "hierarchy": "Language Atom MSP430 Compile",
          "module": "Language.Atom.MSP430.Compile",
          "name": "port1ISR",
          "normalized": "Maybe(Atom())",
          "package": "atom-msp430",
          "partial": "ISR",
          "signature": "Maybe(Atom())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Compile.html#v:port1ISR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the PORT1 interrupt function.\n\u003c/p\u003e",
          "module": "Language.Atom.MSP430.Compile",
          "name": "port1ISRName",
          "package": "atom-msp430",
          "signature": "String",
          "source": "src/Language-Atom-MSP430-Compile.html#MSP430Compilation",
          "type": "function"
        },
        "index": {
          "description": "Name of the PORT1 interrupt function",
          "hierarchy": "Language Atom MSP430 Compile",
          "module": "Language.Atom.MSP430.Compile",
          "name": "port1ISRName",
          "package": "atom-msp430",
          "partial": "ISRName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Compile.html#v:port1ISRName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to call when there is a PORT2 interrupt.\n\u003c/p\u003e",
          "module": "Language.Atom.MSP430.Compile",
          "name": "port2ISR",
          "package": "atom-msp430",
          "signature": "Maybe (Atom ())",
          "source": "src/Language-Atom-MSP430-Compile.html#MSP430Compilation",
          "type": "function"
        },
        "index": {
          "description": "Function to call when there is PORT2 interrupt",
          "hierarchy": "Language Atom MSP430 Compile",
          "module": "Language.Atom.MSP430.Compile",
          "name": "port2ISR",
          "normalized": "Maybe(Atom())",
          "package": "atom-msp430",
          "partial": "ISR",
          "signature": "Maybe(Atom())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Compile.html#v:port2ISR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the PORT2 interrupt function.\n\u003c/p\u003e",
          "module": "Language.Atom.MSP430.Compile",
          "name": "port2ISRName",
          "package": "atom-msp430",
          "signature": "String",
          "source": "src/Language-Atom-MSP430-Compile.html#MSP430Compilation",
          "type": "function"
        },
        "index": {
          "description": "Name of the PORT2 interrupt function",
          "hierarchy": "Language Atom MSP430 Compile",
          "module": "Language.Atom.MSP430.Compile",
          "name": "port2ISRName",
          "package": "atom-msp430",
          "partial": "ISRName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Compile.html#v:port2ISRName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction called once when the MCU starts up.\n\u003c/p\u003e",
          "module": "Language.Atom.MSP430.Compile",
          "name": "setupFn",
          "package": "atom-msp430",
          "signature": "Maybe (Atom ())",
          "source": "src/Language-Atom-MSP430-Compile.html#MSP430Compilation",
          "type": "function"
        },
        "index": {
          "description": "Function called once when the MCU starts up",
          "hierarchy": "Language Atom MSP430 Compile",
          "module": "Language.Atom.MSP430.Compile",
          "name": "setupFn",
          "normalized": "Maybe(Atom())",
          "package": "atom-msp430",
          "partial": "Fn",
          "signature": "Maybe(Atom())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Compile.html#v:setupFn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the setup function in the generated code.\n\u003c/p\u003e",
          "module": "Language.Atom.MSP430.Compile",
          "name": "setupFnName",
          "package": "atom-msp430",
          "signature": "String",
          "source": "src/Language-Atom-MSP430-Compile.html#MSP430Compilation",
          "type": "function"
        },
        "index": {
          "description": "Name of the setup function in the generated code",
          "hierarchy": "Language Atom MSP430 Compile",
          "module": "Language.Atom.MSP430.Compile",
          "name": "setupFnName",
          "package": "atom-msp430",
          "partial": "Fn Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Compile.html#v:setupFnName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEasy settings for a program with just a setup function.\n\u003c/p\u003e",
          "module": "Language.Atom.MSP430.Compile",
          "name": "simpleProgram",
          "package": "atom-msp430",
          "signature": "Atom () -\u003e MSP430Compilation",
          "source": "src/Language-Atom-MSP430-Compile.html#simpleProgram",
          "type": "function"
        },
        "index": {
          "description": "Easy settings for program with just setup function",
          "hierarchy": "Language Atom MSP430 Compile",
          "module": "Language.Atom.MSP430.Compile",
          "name": "simpleProgram",
          "normalized": "Atom()-\u003eMSP Compilation",
          "package": "atom-msp430",
          "partial": "Program",
          "signature": "Atom()-\u003eMSP Compilation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Compile.html#v:simpleProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to run when a TimerA CCR interrupt happens.\n\u003c/p\u003e",
          "module": "Language.Atom.MSP430.Compile",
          "name": "timerAISR",
          "package": "atom-msp430",
          "signature": "Maybe (Atom ())",
          "source": "src/Language-Atom-MSP430-Compile.html#MSP430Compilation",
          "type": "function"
        },
        "index": {
          "description": "Function to run when TimerA CCR interrupt happens",
          "hierarchy": "Language Atom MSP430 Compile",
          "module": "Language.Atom.MSP430.Compile",
          "name": "timerAISR",
          "normalized": "Maybe(Atom())",
          "package": "atom-msp430",
          "partial": "AISR",
          "signature": "Maybe(Atom())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Compile.html#v:timerAISR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the TimerA interrupt function in the generated code.\n\u003c/p\u003e",
          "module": "Language.Atom.MSP430.Compile",
          "name": "timerAISRName",
          "package": "atom-msp430",
          "signature": "String",
          "source": "src/Language-Atom-MSP430-Compile.html#MSP430Compilation",
          "type": "function"
        },
        "index": {
          "description": "Name of the TimerA interrupt function in the generated code",
          "hierarchy": "Language Atom MSP430 Compile",
          "module": "Language.Atom.MSP430.Compile",
          "name": "timerAISRName",
          "package": "atom-msp430",
          "partial": "AISRName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Compile.html#v:timerAISRName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to call when the WDT interrupts.\n\u003c/p\u003e",
          "module": "Language.Atom.MSP430.Compile",
          "name": "watchdogISR",
          "package": "atom-msp430",
          "signature": "Maybe (Atom ())",
          "source": "src/Language-Atom-MSP430-Compile.html#MSP430Compilation",
          "type": "function"
        },
        "index": {
          "description": "Function to call when the WDT interrupts",
          "hierarchy": "Language Atom MSP430 Compile",
          "module": "Language.Atom.MSP430.Compile",
          "name": "watchdogISR",
          "normalized": "Maybe(Atom())",
          "package": "atom-msp430",
          "partial": "ISR",
          "signature": "Maybe(Atom())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Compile.html#v:watchdogISR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the WDT interrupt function in the generated code.\n\u003c/p\u003e",
          "module": "Language.Atom.MSP430.Compile",
          "name": "watchdogISRName",
          "package": "atom-msp430",
          "signature": "String",
          "source": "src/Language-Atom-MSP430-Compile.html#MSP430Compilation",
          "type": "function"
        },
        "index": {
          "description": "Name of the WDT interrupt function in the generated code",
          "hierarchy": "Language Atom MSP430 Compile",
          "module": "Language.Atom.MSP430.Compile",
          "name": "watchdogISRName",
          "package": "atom-msp430",
          "partial": "ISRName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Compile.html#v:watchdogISRName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEasy settings for a Wiring-style program with setup and loop functions. Expects a device extension\n   for header files - i.e. running with \u003ca\u003eg2231\u003c/a\u003e wihh generate files that #include \u003ca\u003emsp430g2231.h\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Language.Atom.MSP430.Compile",
          "name": "wiringProgram",
          "package": "atom-msp430",
          "signature": "Atom () -\u003e Atom () -\u003e MSP430Compilation",
          "source": "src/Language-Atom-MSP430-Compile.html#wiringProgram",
          "type": "function"
        },
        "index": {
          "description": "Easy settings for Wiring-style program with setup and loop functions Expects device extension for header files i.e running with g2231 wihh generate files that include msp430g2231.h",
          "hierarchy": "Language Atom MSP430 Compile",
          "module": "Language.Atom.MSP430.Compile",
          "name": "wiringProgram",
          "normalized": "Atom()-\u003eAtom()-\u003eMSP Compilation",
          "package": "atom-msp430",
          "partial": "Program",
          "signature": "Atom()-\u003eAtom()-\u003eMSP Compilation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Compile.html#v:wiringProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "DigitalIO",
          "package": "atom-msp430",
          "source": "src/Language-Atom-MSP430-DigitalIO.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 DigitalIO",
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "DigitalIO",
          "package": "atom-msp430",
          "partial": "Digital IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-DigitalIO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port1Dir",
          "package": "atom-msp430",
          "signature": "V Word8",
          "source": "src/Language-Atom-MSP430-DigitalIO.html#port1Dir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 DigitalIO",
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port1Dir",
          "package": "atom-msp430",
          "partial": "Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-DigitalIO.html#v:port1Dir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port1Function",
          "package": "atom-msp430",
          "signature": "V Word8",
          "source": "src/Language-Atom-MSP430-DigitalIO.html#port1Function",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 DigitalIO",
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port1Function",
          "package": "atom-msp430",
          "partial": "Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-DigitalIO.html#v:port1Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port1In",
          "package": "atom-msp430",
          "signature": "V Word8",
          "source": "src/Language-Atom-MSP430-DigitalIO.html#port1In",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 DigitalIO",
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port1In",
          "package": "atom-msp430",
          "partial": "In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-DigitalIO.html#v:port1In"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port1InterruptEdgeSelect",
          "package": "atom-msp430",
          "signature": "V Word8",
          "source": "src/Language-Atom-MSP430-DigitalIO.html#port1InterruptEdgeSelect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 DigitalIO",
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port1InterruptEdgeSelect",
          "package": "atom-msp430",
          "partial": "Interrupt Edge Select",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-DigitalIO.html#v:port1InterruptEdgeSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port1InterruptEnable",
          "package": "atom-msp430",
          "signature": "V Word8",
          "source": "src/Language-Atom-MSP430-DigitalIO.html#port1InterruptEnable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 DigitalIO",
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port1InterruptEnable",
          "package": "atom-msp430",
          "partial": "Interrupt Enable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-DigitalIO.html#v:port1InterruptEnable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port1InterruptFlags",
          "package": "atom-msp430",
          "signature": "V Word8",
          "source": "src/Language-Atom-MSP430-DigitalIO.html#port1InterruptFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 DigitalIO",
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port1InterruptFlags",
          "package": "atom-msp430",
          "partial": "Interrupt Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-DigitalIO.html#v:port1InterruptFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port1Out",
          "package": "atom-msp430",
          "signature": "V Word8",
          "source": "src/Language-Atom-MSP430-DigitalIO.html#port1Out",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 DigitalIO",
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port1Out",
          "package": "atom-msp430",
          "partial": "Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-DigitalIO.html#v:port1Out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port1Resistors",
          "package": "atom-msp430",
          "signature": "V Word8",
          "source": "src/Language-Atom-MSP430-DigitalIO.html#port1Resistors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 DigitalIO",
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port1Resistors",
          "package": "atom-msp430",
          "partial": "Resistors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-DigitalIO.html#v:port1Resistors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port2Dir",
          "package": "atom-msp430",
          "signature": "V Word8",
          "source": "src/Language-Atom-MSP430-DigitalIO.html#port2Dir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 DigitalIO",
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port2Dir",
          "package": "atom-msp430",
          "partial": "Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-DigitalIO.html#v:port2Dir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port2Function",
          "package": "atom-msp430",
          "signature": "V Word8",
          "source": "src/Language-Atom-MSP430-DigitalIO.html#port2Function",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 DigitalIO",
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port2Function",
          "package": "atom-msp430",
          "partial": "Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-DigitalIO.html#v:port2Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port2In",
          "package": "atom-msp430",
          "signature": "V Word8",
          "source": "src/Language-Atom-MSP430-DigitalIO.html#port2In",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 DigitalIO",
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port2In",
          "package": "atom-msp430",
          "partial": "In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-DigitalIO.html#v:port2In"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port2InterruptEdgeSelect",
          "package": "atom-msp430",
          "signature": "V Word8",
          "source": "src/Language-Atom-MSP430-DigitalIO.html#port2InterruptEdgeSelect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 DigitalIO",
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port2InterruptEdgeSelect",
          "package": "atom-msp430",
          "partial": "Interrupt Edge Select",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-DigitalIO.html#v:port2InterruptEdgeSelect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port2InterruptEnable",
          "package": "atom-msp430",
          "signature": "V Word8",
          "source": "src/Language-Atom-MSP430-DigitalIO.html#port2InterruptEnable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 DigitalIO",
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port2InterruptEnable",
          "package": "atom-msp430",
          "partial": "Interrupt Enable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-DigitalIO.html#v:port2InterruptEnable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port2InterruptFlags",
          "package": "atom-msp430",
          "signature": "V Word8",
          "source": "src/Language-Atom-MSP430-DigitalIO.html#port2InterruptFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 DigitalIO",
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port2InterruptFlags",
          "package": "atom-msp430",
          "partial": "Interrupt Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-DigitalIO.html#v:port2InterruptFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port2Out",
          "package": "atom-msp430",
          "signature": "V Word8",
          "source": "src/Language-Atom-MSP430-DigitalIO.html#port2Out",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 DigitalIO",
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port2Out",
          "package": "atom-msp430",
          "partial": "Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-DigitalIO.html#v:port2Out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port2Resistors",
          "package": "atom-msp430",
          "signature": "V Word8",
          "source": "src/Language-Atom-MSP430-DigitalIO.html#port2Resistors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 DigitalIO",
          "module": "Language.Atom.MSP430.DigitalIO",
          "name": "port2Resistors",
          "package": "atom-msp430",
          "partial": "Resistors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-DigitalIO.html#v:port2Resistors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.Interrupts",
          "name": "Interrupts",
          "package": "atom-msp430",
          "source": "src/Language-Atom-MSP430-Interrupts.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 Interrupts",
          "module": "Language.Atom.MSP430.Interrupts",
          "name": "Interrupts",
          "package": "atom-msp430",
          "partial": "Interrupts",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Interrupts.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.Interrupts",
          "name": "interruptEnable",
          "package": "atom-msp430",
          "signature": "V Word8",
          "source": "src/Language-Atom-MSP430-Interrupts.html#interruptEnable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 Interrupts",
          "module": "Language.Atom.MSP430.Interrupts",
          "name": "interruptEnable",
          "package": "atom-msp430",
          "partial": "Enable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Interrupts.html#v:interruptEnable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.Interrupts",
          "name": "interruptFlags",
          "package": "atom-msp430",
          "signature": "V Word8",
          "source": "src/Language-Atom-MSP430-Interrupts.html#interruptFlags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 Interrupts",
          "module": "Language.Atom.MSP430.Interrupts",
          "name": "interruptFlags",
          "package": "atom-msp430",
          "partial": "Flags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Interrupts.html#v:interruptFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.TimerA",
          "name": "TimerA",
          "package": "atom-msp430",
          "source": "src/Language-Atom-MSP430-TimerA.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 TimerA",
          "module": "Language.Atom.MSP430.TimerA",
          "name": "TimerA",
          "package": "atom-msp430",
          "partial": "Timer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-TimerA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taCCRInterrupt",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-TimerA.html#taCCRInterrupt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 TimerA",
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taCCRInterrupt",
          "package": "atom-msp430",
          "partial": "CCRInterrupt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-TimerA.html#v:taCCRInterrupt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taCaptureBoth",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-TimerA.html#taCaptureBoth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 TimerA",
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taCaptureBoth",
          "package": "atom-msp430",
          "partial": "Capture Both",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-TimerA.html#v:taCaptureBoth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taCaptureFalling",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-TimerA.html#taCaptureFalling",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 TimerA",
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taCaptureFalling",
          "package": "atom-msp430",
          "partial": "Capture Falling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-TimerA.html#v:taCaptureFalling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taCaptureRising",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-TimerA.html#taCaptureRising",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 TimerA",
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taCaptureRising",
          "package": "atom-msp430",
          "partial": "Capture Rising",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-TimerA.html#v:taCaptureRising"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taClear",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-TimerA.html#taClear",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 TimerA",
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taClear",
          "package": "atom-msp430",
          "partial": "Clear",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-TimerA.html#v:taClear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taContinuousMode",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-TimerA.html#taContinuousMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 TimerA",
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taContinuousMode",
          "package": "atom-msp430",
          "partial": "Continuous Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-TimerA.html#v:taContinuousMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taInterruptEnabled",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-TimerA.html#taInterruptEnabled",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 TimerA",
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taInterruptEnabled",
          "package": "atom-msp430",
          "partial": "Interrupt Enabled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-TimerA.html#v:taInterruptEnabled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taSource",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-TimerA.html#taSource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 TimerA",
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taSource",
          "package": "atom-msp430",
          "partial": "Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-TimerA.html#v:taSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taSourceACLK",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-TimerA.html#taSourceACLK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 TimerA",
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taSourceACLK",
          "package": "atom-msp430",
          "partial": "Source ACLK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-TimerA.html#v:taSourceACLK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taSourceDiv1",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-TimerA.html#taSourceDiv1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 TimerA",
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taSourceDiv1",
          "package": "atom-msp430",
          "partial": "Source Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-TimerA.html#v:taSourceDiv1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taSourceDiv2",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-TimerA.html#taSourceDiv2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 TimerA",
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taSourceDiv2",
          "package": "atom-msp430",
          "partial": "Source Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-TimerA.html#v:taSourceDiv2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taSourceDiv4",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-TimerA.html#taSourceDiv4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 TimerA",
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taSourceDiv4",
          "package": "atom-msp430",
          "partial": "Source Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-TimerA.html#v:taSourceDiv4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taSourceDiv8",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-TimerA.html#taSourceDiv8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 TimerA",
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taSourceDiv8",
          "package": "atom-msp430",
          "partial": "Source Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-TimerA.html#v:taSourceDiv8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taSourceINCLK",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-TimerA.html#taSourceINCLK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 TimerA",
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taSourceINCLK",
          "package": "atom-msp430",
          "partial": "Source INCLK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-TimerA.html#v:taSourceINCLK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taSourceSMCLK",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-TimerA.html#taSourceSMCLK",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 TimerA",
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taSourceSMCLK",
          "package": "atom-msp430",
          "partial": "Source SMCLK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-TimerA.html#v:taSourceSMCLK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taStopMode",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-TimerA.html#taStopMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 TimerA",
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taStopMode",
          "package": "atom-msp430",
          "partial": "Stop Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-TimerA.html#v:taStopMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taSyncCapture",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-TimerA.html#taSyncCapture",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 TimerA",
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taSyncCapture",
          "package": "atom-msp430",
          "partial": "Sync Capture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-TimerA.html#v:taSyncCapture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taUpDownMode",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-TimerA.html#taUpDownMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 TimerA",
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taUpDownMode",
          "package": "atom-msp430",
          "partial": "Up Down Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-TimerA.html#v:taUpDownMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taUpMode",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-TimerA.html#taUpMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 TimerA",
          "module": "Language.Atom.MSP430.TimerA",
          "name": "taUpMode",
          "package": "atom-msp430",
          "partial": "Up Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-TimerA.html#v:taUpMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.TimerA",
          "name": "timerACCC0",
          "package": "atom-msp430",
          "signature": "V Word16",
          "source": "src/Language-Atom-MSP430-TimerA.html#timerACCC0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 TimerA",
          "module": "Language.Atom.MSP430.TimerA",
          "name": "timerACCC0",
          "package": "atom-msp430",
          "partial": "ACCC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-TimerA.html#v:timerACCC0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.TimerA",
          "name": "timerACCC1",
          "package": "atom-msp430",
          "signature": "V Word16",
          "source": "src/Language-Atom-MSP430-TimerA.html#timerACCC1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 TimerA",
          "module": "Language.Atom.MSP430.TimerA",
          "name": "timerACCC1",
          "package": "atom-msp430",
          "partial": "ACCC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-TimerA.html#v:timerACCC1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.TimerA",
          "name": "timerACCR0",
          "package": "atom-msp430",
          "signature": "V Word16",
          "source": "src/Language-Atom-MSP430-TimerA.html#timerACCR0",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 TimerA",
          "module": "Language.Atom.MSP430.TimerA",
          "name": "timerACCR0",
          "package": "atom-msp430",
          "partial": "ACCR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-TimerA.html#v:timerACCR0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.TimerA",
          "name": "timerACCR1",
          "package": "atom-msp430",
          "signature": "V Word16",
          "source": "src/Language-Atom-MSP430-TimerA.html#timerACCR1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 TimerA",
          "module": "Language.Atom.MSP430.TimerA",
          "name": "timerACCR1",
          "package": "atom-msp430",
          "partial": "ACCR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-TimerA.html#v:timerACCR1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.TimerA",
          "name": "timerAControl",
          "package": "atom-msp430",
          "signature": "V Word16",
          "source": "src/Language-Atom-MSP430-TimerA.html#timerAControl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 TimerA",
          "module": "Language.Atom.MSP430.TimerA",
          "name": "timerAControl",
          "package": "atom-msp430",
          "partial": "AControl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-TimerA.html#v:timerAControl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "Watchdog",
          "package": "atom-msp430",
          "source": "src/Language-Atom-MSP430-Watchdog.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 Watchdog",
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "Watchdog",
          "package": "atom-msp430",
          "partial": "Watchdog",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Watchdog.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "watchdog",
          "package": "atom-msp430",
          "signature": "V Word16",
          "source": "src/Language-Atom-MSP430-Watchdog.html#watchdog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 Watchdog",
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "watchdog",
          "package": "atom-msp430",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Watchdog.html#v:watchdog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "wdtClearCounter",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-Watchdog.html#wdtClearCounter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 Watchdog",
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "wdtClearCounter",
          "package": "atom-msp430",
          "partial": "Clear Counter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Watchdog.html#v:wdtClearCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "wdtHold",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-Watchdog.html#wdtHold",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 Watchdog",
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "wdtHold",
          "package": "atom-msp430",
          "partial": "Hold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Watchdog.html#v:wdtHold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "wdtInterruptEnable",
          "package": "atom-msp430",
          "signature": "Word8",
          "source": "src/Language-Atom-MSP430-Watchdog.html#wdtInterruptEnable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 Watchdog",
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "wdtInterruptEnable",
          "package": "atom-msp430",
          "partial": "Interrupt Enable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Watchdog.html#v:wdtInterruptEnable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "wdtIntervalMode",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-Watchdog.html#wdtIntervalMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 Watchdog",
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "wdtIntervalMode",
          "package": "atom-msp430",
          "partial": "Interval Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Watchdog.html#v:wdtIntervalMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "wdtNMI",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-Watchdog.html#wdtNMI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 Watchdog",
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "wdtNMI",
          "package": "atom-msp430",
          "partial": "NMI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Watchdog.html#v:wdtNMI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "wdtNMIFalling",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-Watchdog.html#wdtNMIFalling",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 Watchdog",
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "wdtNMIFalling",
          "package": "atom-msp430",
          "partial": "NMIFalling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Watchdog.html#v:wdtNMIFalling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "wdtNMIInterruptEnable",
          "package": "atom-msp430",
          "signature": "Word8",
          "source": "src/Language-Atom-MSP430-Watchdog.html#wdtNMIInterruptEnable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 Watchdog",
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "wdtNMIInterruptEnable",
          "package": "atom-msp430",
          "partial": "NMIInterrupt Enable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Watchdog.html#v:wdtNMIInterruptEnable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "wdtPassword",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-Watchdog.html#wdtPassword",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 Watchdog",
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "wdtPassword",
          "package": "atom-msp430",
          "partial": "Password",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Watchdog.html#v:wdtPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "wdtSourceDiv13",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-Watchdog.html#wdtSourceDiv13",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 Watchdog",
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "wdtSourceDiv13",
          "package": "atom-msp430",
          "partial": "Source Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Watchdog.html#v:wdtSourceDiv13"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "wdtSourceDiv15",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-Watchdog.html#wdtSourceDiv15",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 Watchdog",
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "wdtSourceDiv15",
          "package": "atom-msp430",
          "partial": "Source Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Watchdog.html#v:wdtSourceDiv15"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "wdtSourceDiv6",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-Watchdog.html#wdtSourceDiv6",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 Watchdog",
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "wdtSourceDiv6",
          "package": "atom-msp430",
          "partial": "Source Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Watchdog.html#v:wdtSourceDiv6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "wdtSourceDiv9",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-Watchdog.html#wdtSourceDiv9",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 Watchdog",
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "wdtSourceDiv9",
          "package": "atom-msp430",
          "partial": "Source Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Watchdog.html#v:wdtSourceDiv9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "wdtUseAuxClock",
          "package": "atom-msp430",
          "signature": "Word16",
          "source": "src/Language-Atom-MSP430-Watchdog.html#wdtUseAuxClock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Atom MSP430 Watchdog",
          "module": "Language.Atom.MSP430.Watchdog",
          "name": "wdtUseAuxClock",
          "package": "atom-msp430",
          "partial": "Use Aux Clock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430-Watchdog.html#v:wdtUseAuxClock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Atom.MSP430",
          "name": "MSP430",
          "package": "atom-msp430",
          "source": "src/Language-Atom-MSP430.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Atom MSP430",
          "module": "Language.Atom.MSP430",
          "name": "MSP430",
          "package": "atom-msp430",
          "partial": "MSP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/atom-msp430/docs/Language-Atom-MSP430.html#"
      }
    }
  ]
]