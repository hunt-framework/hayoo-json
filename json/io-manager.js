[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-manager/docs/Training-MM-IOManager.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA skeleton library to help learners of Haskell concentrate on the\npure-functional aspect and let the IO be handled by the library.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Training.MM.IOManager",
        "fct-package": "io-manager",
        "fct-signature": "module",
        "fct-source": "src/Training-MM-IOManager.html",
        "fct-type": "module",
        "title": "IOManager"
      },
      "index": {
        "description": "skeleton library to help learners of Haskell concentrate on the pure-functional aspect and let the IO be handled by the library",
        "hierarchy": "Training MM IOManager",
        "module": "Training.MM.IOManager",
        "name": "IOManager",
        "normalized": "",
        "package": "io-manager",
        "partial": "IOManager",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-manager/docs/Training-MM-IOManager.html#t:Filename",
      "description": {
        "fct-descr": "\u003cp\u003eType of filenames.\n\u003c/p\u003e",
        "fct-module": "Training.MM.IOManager",
        "fct-package": "io-manager",
        "fct-signature": "type",
        "fct-source": "src/Training-MM-IOManager.html#Filename",
        "fct-type": "type",
        "title": "Filename"
      },
      "index": {
        "description": "Type of filenames",
        "hierarchy": "Training MM IOManager",
        "module": "Training.MM.IOManager",
        "name": "Filename",
        "normalized": "",
        "package": "io-manager",
        "partial": "Filename",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-manager/docs/Training-MM-IOManager.html#t:Input",
      "description": {
        "fct-descr": "\u003cp\u003eType of values holding inputs to the program, grouped by input source.\n\u003c/p\u003e",
        "fct-module": "Training.MM.IOManager",
        "fct-package": "io-manager",
        "fct-signature": "data",
        "fct-source": "src/Training-MM-IOManager.html#Input",
        "fct-type": "data",
        "title": "Input"
      },
      "index": {
        "description": "Type of values holding inputs to the program grouped by input source",
        "hierarchy": "Training MM IOManager",
        "module": "Training.MM.IOManager",
        "name": "Input",
        "normalized": "",
        "package": "io-manager",
        "partial": "Input",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-manager/docs/Training-MM-IOManager.html#t:Output",
      "description": {
        "fct-descr": "\u003cp\u003eType of values holding outputs of the program, grouped by output source.\n\u003c/p\u003e",
        "fct-module": "Training.MM.IOManager",
        "fct-package": "io-manager",
        "fct-signature": "data",
        "fct-source": "src/Training-MM-IOManager.html#Output",
        "fct-type": "data",
        "title": "Output"
      },
      "index": {
        "description": "Type of values holding outputs of the program grouped by output source",
        "hierarchy": "Training MM IOManager",
        "module": "Training.MM.IOManager",
        "name": "Output",
        "normalized": "",
        "package": "io-manager",
        "partial": "Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-manager/docs/Training-MM-IOManager.html#v:getInputFile",
      "description": {
        "fct-descr": "\u003cp\u003eObtains the contents of an input file. Returns a String containing the\n input without any modification.\n\u003c/p\u003e",
        "fct-module": "Training.MM.IOManager",
        "fct-package": "io-manager",
        "fct-signature": "Input -\u003e Filename -\u003e String",
        "fct-source": "src/Training-MM-IOManager.html#getInputFile",
        "fct-type": "function",
        "title": "getInputFile"
      },
      "index": {
        "description": "Obtains the contents of an input file Returns String containing the input without any modification",
        "hierarchy": "Training MM IOManager",
        "module": "Training.MM.IOManager",
        "name": "getInputFile",
        "normalized": "Input-\u003eFilename-\u003eString",
        "package": "io-manager",
        "partial": "Input File",
        "signature": "Input-\u003eFilename-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-manager/docs/Training-MM-IOManager.html#v:getStdIn",
      "description": {
        "fct-descr": "\u003cp\u003eObtains the contents of the standard input as given to the program.\n Returns a String containing the input without any modification.\n\u003c/p\u003e",
        "fct-module": "Training.MM.IOManager",
        "fct-package": "io-manager",
        "fct-signature": "Input -\u003e String",
        "fct-source": "src/Training-MM-IOManager.html#getStdIn",
        "fct-type": "function",
        "title": "getStdIn"
      },
      "index": {
        "description": "Obtains the contents of the standard input as given to the program Returns String containing the input without any modification",
        "hierarchy": "Training MM IOManager",
        "module": "Training.MM.IOManager",
        "name": "getStdIn",
        "normalized": "Input-\u003eString",
        "package": "io-manager",
        "partial": "Std In",
        "signature": "Input-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-manager/docs/Training-MM-IOManager.html#v:wrapIO",
      "description": {
        "fct-descr": "\u003cp\u003eWraps a simple function \u003ccode\u003eInput\u003c/code\u003e -\u003e \u003ccode\u003eOutput\u003c/code\u003e -\u003e \u003ccode\u003eOutput\u003c/code\u003e in\n order to simplify student's usage.\n\u003c/p\u003e",
        "fct-module": "Training.MM.IOManager",
        "fct-package": "io-manager",
        "fct-signature": "(Input -\u003e Output -\u003e Output) -\u003e IO ()",
        "fct-source": "src/Training-MM-IOManager.html#wrapIO",
        "fct-type": "function",
        "title": "wrapIO"
      },
      "index": {
        "description": "Wraps simple function Input Output Output in order to simplify student usage",
        "hierarchy": "Training MM IOManager",
        "module": "Training.MM.IOManager",
        "name": "wrapIO",
        "normalized": "(Input-\u003eOutput-\u003eOutput)-\u003eIO()",
        "package": "io-manager",
        "partial": "IO",
        "signature": "(Input-\u003eOutput-\u003eOutput)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-manager/docs/Training-MM-IOManager.html#v:writeOutputFile",
      "description": {
        "fct-descr": "\u003cp\u003eAppends to an output file. If the file does not exist in the \u003ccode\u003eOutput\u003c/code\u003e\n value (this program didn't yet write in it), it is created as a new one.\n Returns a new \u003ccode\u003eOutput\u003c/code\u003e value, containing the appended text.\n\u003c/p\u003e",
        "fct-module": "Training.MM.IOManager",
        "fct-package": "io-manager",
        "fct-signature": "Output -\u003e Filename -\u003e String -\u003e Output",
        "fct-source": "src/Training-MM-IOManager.html#writeOutputFile",
        "fct-type": "function",
        "title": "writeOutputFile"
      },
      "index": {
        "description": "Appends to an output file If the file does not exist in the Output value this program didn yet write in it it is created as new one Returns new Output value containing the appended text",
        "hierarchy": "Training MM IOManager",
        "module": "Training.MM.IOManager",
        "name": "writeOutputFile",
        "normalized": "Output-\u003eFilename-\u003eString-\u003eOutput",
        "package": "io-manager",
        "partial": "Output File",
        "signature": "Output-\u003eFilename-\u003eString-\u003eOutput"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-manager/docs/Training-MM-IOManager.html#v:writeStdErr",
      "description": {
        "fct-descr": "\u003cp\u003eAppends text to the standard error. No newline is printed at the end, the\n caller must handle it. Returns a new \u003ccode\u003eOutput\u003c/code\u003e value, containing the\n appended text.\n\u003c/p\u003e\u003cp\u003eNote: When running the program, the standard error text is displayed\n after the entire text from the standard input is displayed.\n\u003c/p\u003e",
        "fct-module": "Training.MM.IOManager",
        "fct-package": "io-manager",
        "fct-signature": "Output -\u003e String -\u003e Output",
        "fct-source": "src/Training-MM-IOManager.html#writeStdErr",
        "fct-type": "function",
        "title": "writeStdErr"
      },
      "index": {
        "description": "Appends text to the standard error No newline is printed at the end the caller must handle it Returns new Output value containing the appended text Note When running the program the standard error text is displayed after the entire text from the standard input is displayed",
        "hierarchy": "Training MM IOManager",
        "module": "Training.MM.IOManager",
        "name": "writeStdErr",
        "normalized": "Output-\u003eString-\u003eOutput",
        "package": "io-manager",
        "partial": "Std Err",
        "signature": "Output-\u003eString-\u003eOutput"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-manager/docs/Training-MM-IOManager.html#v:writeStdOut",
      "description": {
        "fct-descr": "\u003cp\u003eAppends text to the standard output. No newline is printed at the end,\n the caller must handle it. Returns a new \u003ccode\u003eOutput\u003c/code\u003e value, containing the\n appended text.\n\u003c/p\u003e",
        "fct-module": "Training.MM.IOManager",
        "fct-package": "io-manager",
        "fct-signature": "Output -\u003e String -\u003e Output",
        "fct-source": "src/Training-MM-IOManager.html#writeStdOut",
        "fct-type": "function",
        "title": "writeStdOut"
      },
      "index": {
        "description": "Appends text to the standard output No newline is printed at the end the caller must handle it Returns new Output value containing the appended text",
        "hierarchy": "Training MM IOManager",
        "module": "Training.MM.IOManager",
        "name": "writeStdOut",
        "normalized": "Output-\u003eString-\u003eOutput",
        "package": "io-manager",
        "partial": "Std Out",
        "signature": "Output-\u003eString-\u003eOutput"
      }
    }
  }
]