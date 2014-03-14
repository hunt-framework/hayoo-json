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
        "word": "io-manager"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA skeleton library to help learners of Haskell concentrate on the\npure-functional aspect and let the IO be handled by the library.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Training.MM.IOManager",
          "name": "IOManager",
          "package": "io-manager",
          "source": "src/Training-MM-IOManager.html",
          "type": "module"
        },
        "index": {
          "description": "skeleton library to help learners of Haskell concentrate on the pure-functional aspect and let the IO be handled by the library",
          "hierarchy": "Training MM IOManager",
          "module": "Training.MM.IOManager",
          "name": "IOManager",
          "package": "io-manager",
          "partial": "IOManager",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/io-manager/docs/Training-MM-IOManager.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of filenames.\n\u003c/p\u003e",
          "module": "Training.MM.IOManager",
          "name": "Filename",
          "package": "io-manager",
          "source": "src/Training-MM-IOManager.html#Filename",
          "type": "type"
        },
        "index": {
          "description": "Type of filenames",
          "hierarchy": "Training MM IOManager",
          "module": "Training.MM.IOManager",
          "name": "Filename",
          "package": "io-manager",
          "partial": "Filename",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/io-manager/docs/Training-MM-IOManager.html#t:Filename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of values holding inputs to the program, grouped by input source.\n\u003c/p\u003e",
          "module": "Training.MM.IOManager",
          "name": "Input",
          "package": "io-manager",
          "source": "src/Training-MM-IOManager.html#Input",
          "type": "data"
        },
        "index": {
          "description": "Type of values holding inputs to the program grouped by input source",
          "hierarchy": "Training MM IOManager",
          "module": "Training.MM.IOManager",
          "name": "Input",
          "package": "io-manager",
          "partial": "Input",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/io-manager/docs/Training-MM-IOManager.html#t:Input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of values holding outputs of the program, grouped by output source.\n\u003c/p\u003e",
          "module": "Training.MM.IOManager",
          "name": "Output",
          "package": "io-manager",
          "source": "src/Training-MM-IOManager.html#Output",
          "type": "data"
        },
        "index": {
          "description": "Type of values holding outputs of the program grouped by output source",
          "hierarchy": "Training MM IOManager",
          "module": "Training.MM.IOManager",
          "name": "Output",
          "package": "io-manager",
          "partial": "Output",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/io-manager/docs/Training-MM-IOManager.html#t:Output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtains the contents of an input file. Returns a String containing the\n input without any modification.\n\u003c/p\u003e",
          "module": "Training.MM.IOManager",
          "name": "getInputFile",
          "package": "io-manager",
          "signature": "Input -\u003e Filename -\u003e String",
          "source": "src/Training-MM-IOManager.html#getInputFile",
          "type": "function"
        },
        "index": {
          "description": "Obtains the contents of an input file Returns String containing the input without any modification",
          "hierarchy": "Training MM IOManager",
          "module": "Training.MM.IOManager",
          "name": "getInputFile",
          "normalized": "Input-\u003eFilename-\u003eString",
          "package": "io-manager",
          "partial": "Input File",
          "signature": "Input-\u003eFilename-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/io-manager/docs/Training-MM-IOManager.html#v:getInputFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtains the contents of the standard input as given to the program.\n Returns a String containing the input without any modification.\n\u003c/p\u003e",
          "module": "Training.MM.IOManager",
          "name": "getStdIn",
          "package": "io-manager",
          "signature": "Input -\u003e String",
          "source": "src/Training-MM-IOManager.html#getStdIn",
          "type": "function"
        },
        "index": {
          "description": "Obtains the contents of the standard input as given to the program Returns String containing the input without any modification",
          "hierarchy": "Training MM IOManager",
          "module": "Training.MM.IOManager",
          "name": "getStdIn",
          "normalized": "Input-\u003eString",
          "package": "io-manager",
          "partial": "Std In",
          "signature": "Input-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/io-manager/docs/Training-MM-IOManager.html#v:getStdIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWraps a simple function \u003ccode\u003eInput\u003c/code\u003e -\u003e \u003ccode\u003eOutput\u003c/code\u003e -\u003e \u003ccode\u003eOutput\u003c/code\u003e in\n order to simplify student's usage.\n\u003c/p\u003e",
          "module": "Training.MM.IOManager",
          "name": "wrapIO",
          "package": "io-manager",
          "signature": "(Input -\u003e Output -\u003e Output) -\u003e IO ()",
          "source": "src/Training-MM-IOManager.html#wrapIO",
          "type": "function"
        },
        "index": {
          "description": "Wraps simple function Input Output Output in order to simplify student usage",
          "hierarchy": "Training MM IOManager",
          "module": "Training.MM.IOManager",
          "name": "wrapIO",
          "normalized": "(Input-\u003eOutput-\u003eOutput)-\u003eIO()",
          "package": "io-manager",
          "partial": "IO",
          "signature": "(Input-\u003eOutput-\u003eOutput)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/io-manager/docs/Training-MM-IOManager.html#v:wrapIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppends to an output file. If the file does not exist in the \u003ccode\u003eOutput\u003c/code\u003e\n value (this program didn't yet write in it), it is created as a new one.\n Returns a new \u003ccode\u003eOutput\u003c/code\u003e value, containing the appended text.\n\u003c/p\u003e",
          "module": "Training.MM.IOManager",
          "name": "writeOutputFile",
          "package": "io-manager",
          "signature": "Output -\u003e Filename -\u003e String -\u003e Output",
          "source": "src/Training-MM-IOManager.html#writeOutputFile",
          "type": "function"
        },
        "index": {
          "description": "Appends to an output file If the file does not exist in the Output value this program didn yet write in it it is created as new one Returns new Output value containing the appended text",
          "hierarchy": "Training MM IOManager",
          "module": "Training.MM.IOManager",
          "name": "writeOutputFile",
          "normalized": "Output-\u003eFilename-\u003eString-\u003eOutput",
          "package": "io-manager",
          "partial": "Output File",
          "signature": "Output-\u003eFilename-\u003eString-\u003eOutput",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/io-manager/docs/Training-MM-IOManager.html#v:writeOutputFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppends text to the standard error. No newline is printed at the end, the\n caller must handle it. Returns a new \u003ccode\u003eOutput\u003c/code\u003e value, containing the\n appended text.\n\u003c/p\u003e\u003cp\u003eNote: When running the program, the standard error text is displayed\n after the entire text from the standard input is displayed.\n\u003c/p\u003e",
          "module": "Training.MM.IOManager",
          "name": "writeStdErr",
          "package": "io-manager",
          "signature": "Output -\u003e String -\u003e Output",
          "source": "src/Training-MM-IOManager.html#writeStdErr",
          "type": "function"
        },
        "index": {
          "description": "Appends text to the standard error No newline is printed at the end the caller must handle it Returns new Output value containing the appended text Note When running the program the standard error text is displayed after the entire text from the standard input is displayed",
          "hierarchy": "Training MM IOManager",
          "module": "Training.MM.IOManager",
          "name": "writeStdErr",
          "normalized": "Output-\u003eString-\u003eOutput",
          "package": "io-manager",
          "partial": "Std Err",
          "signature": "Output-\u003eString-\u003eOutput",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/io-manager/docs/Training-MM-IOManager.html#v:writeStdErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppends text to the standard output. No newline is printed at the end,\n the caller must handle it. Returns a new \u003ccode\u003eOutput\u003c/code\u003e value, containing the\n appended text.\n\u003c/p\u003e",
          "module": "Training.MM.IOManager",
          "name": "writeStdOut",
          "package": "io-manager",
          "signature": "Output -\u003e String -\u003e Output",
          "source": "src/Training-MM-IOManager.html#writeStdOut",
          "type": "function"
        },
        "index": {
          "description": "Appends text to the standard output No newline is printed at the end the caller must handle it Returns new Output value containing the appended text",
          "hierarchy": "Training MM IOManager",
          "module": "Training.MM.IOManager",
          "name": "writeStdOut",
          "normalized": "Output-\u003eString-\u003eOutput",
          "package": "io-manager",
          "partial": "Std Out",
          "signature": "Output-\u003eString-\u003eOutput",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/io-manager/docs/Training-MM-IOManager.html#v:writeStdOut"
      }
    }
  ]
]