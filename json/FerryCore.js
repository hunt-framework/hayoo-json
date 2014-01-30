[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe compiler interface\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "module",
        "fct-source": "src/Database-Ferry-Compiler.html",
        "fct-type": "module",
        "title": "Compiler"
      },
      "index": {
        "description": "The compiler interface",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "Compiler",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Compiler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#t:Artefact",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "data",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Artefact",
        "fct-type": "data",
        "title": "Artefact"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "Artefact",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Artefact",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#t:ArtefactResult",
      "description": {
        "fct-descr": "\u003cp\u003eThe results of artefact generation are all collected in a reader monad\n The final result is written to disk or screen when compilation has succeeded\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "type",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#ArtefactResult",
        "fct-type": "type",
        "title": "ArtefactResult"
      },
      "index": {
        "description": "The results of artefact generation are all collected in reader monad The final result is written to disk or screen when compilation has succeeded",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "ArtefactResult",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Artefact Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#t:CompilationStep",
      "description": {
        "fct-descr": "\u003cp\u003eCompilationstep datatype.\n A compilation step is a record containg a description (stageName field),\n the internal mode name (stageMode field),\n the actual stage computation (stageStep field) that transforms element of type a into a PhaseResult of type b\n and stage artefact generators, a list of function generating artefacts (stageArtefacts field).\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "data",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#CompilationStep",
        "fct-type": "data",
        "title": "CompilationStep"
      },
      "index": {
        "description": "Compilationstep datatype compilation step is record containg description stageName field the internal mode name stageMode field the actual stage computation stageStep field that transforms element of type into PhaseResult of type and stage artefact generators list of function generating artefacts stageArtefacts field",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "CompilationStep",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Compilation Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#t:Config",
      "description": {
        "fct-descr": "\u003cp\u003eThe config datatype is used to store program flags given by the user \n   The compiler can be put in a \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e that determines what sort of\n   result the compilation process will result in.\n   The \u003ccode\u003e\u003ca\u003eInput\u003c/a\u003e\u003c/code\u003e element is set to specify whether a file should be compiled or \n   input from the stdin\n   The debug component is set to switch on debugging mode, debugging mode\n   results in log information on the stdin and possibly extra compiler artifacts.\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "data",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Config",
        "fct-type": "data",
        "title": "Config"
      },
      "index": {
        "description": "The config datatype is used to store program flags given by the user The compiler can be put in Mode that determines what sort of result the compilation process will result in The Input element is set to specify whether file should be compiled or input from the stdin The debug component is set to switch on debugging mode debugging mode results in log information on the stdin and possibly extra compiler artifacts",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "Config",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#t:FerryError",
      "description": {
        "fct-descr": "\u003cp\u003eThe FerryError datatype represents errors that occur during compilation\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "data",
        "fct-source": "src/Database-Ferry-Compiler-Error-Error.html#FerryError",
        "fct-type": "data",
        "title": "FerryError"
      },
      "index": {
        "description": "The FerryError datatype represents errors that occur during compilation",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "FerryError",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Ferry Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#t:File",
      "description": {
        "fct-descr": "\u003cp\u003eArtefact file, the first element represents the output file, in case of nothing output is given\n on stdout. The second component is the file content.\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "type",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#File",
        "fct-type": "type",
        "title": "File"
      },
      "index": {
        "description": "Artefact file the first element represents the output file in case of nothing output is given on stdout The second component is the file content",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "File",
        "normalized": "",
        "package": "FerryCore",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#t:FileName",
      "description": {
        "fct-descr": "\u003cp\u003eName of an artefact file\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "type",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#FileName",
        "fct-type": "type",
        "title": "FileName"
      },
      "index": {
        "description": "Name of an artefact file",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "FileName",
        "normalized": "",
        "package": "FerryCore",
        "partial": "File Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#t:Input",
      "description": {
        "fct-descr": "\u003cp\u003eThe input mode determines whether the source program is given through a file or via stdin\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "data",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Input",
        "fct-type": "data",
        "title": "Input"
      },
      "index": {
        "description": "The input mode determines whether the source program is given through file or via stdin",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "Input",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Input",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#t:Log",
      "description": {
        "fct-descr": "\u003cp\u003eThe compilation log is just a string\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "type",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Log",
        "fct-type": "type",
        "title": "Log"
      },
      "index": {
        "description": "The compilation log is just string",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "Log",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Log",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#t:Mode",
      "description": {
        "fct-descr": "\u003cp\u003eThe modes that are supported by the compiler.\n   run ferryc -h to see a list of all options\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "data",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Mode",
        "fct-type": "data",
        "title": "Mode"
      },
      "index": {
        "description": "The modes that are supported by the compiler run ferryc to see list of all options",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "Mode",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#t:Name",
      "description": {
        "fct-descr": "\u003cp\u003eType synonym for a stage name type\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "type",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Name",
        "fct-type": "type",
        "title": "Name"
      },
      "index": {
        "description": "Type synonym for stage name type",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "Name",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#t:PhaseResult",
      "description": {
        "fct-descr": "\u003cp\u003eResult of a compilation phase.\n The error monad is used in case something went wrong during compilation\n The first writer monad is used for logging purposes.\n The second writer monad is used to store the artefacts generated by the compiler\n And the reader monad stores the compiler configuration              \n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "type",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#PhaseResult",
        "fct-type": "type",
        "title": "PhaseResult"
      },
      "index": {
        "description": "Result of compilation phase The error monad is used in case something went wrong during compilation The first writer monad is used for logging purposes The second writer monad is used to store the artefacts generated by the compiler And the reader monad stores the compiler configuration",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "PhaseResult",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Phase Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#t:Stage",
      "description": {
        "fct-descr": "\u003cp\u003eEvery stage has a stage number\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "type",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Stage",
        "fct-type": "type",
        "title": "Stage"
      },
      "index": {
        "description": "Every stage has stage number",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "Stage",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Stage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:Algebra",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "Algebra",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Mode",
        "fct-type": "function",
        "title": "Algebra"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "Algebra",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Algebra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:AlgebraXML",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "AlgebraXML",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Mode",
        "fct-type": "function",
        "title": "AlgebraXML"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "AlgebraXML",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Algebra XML",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:Arg",
      "description": {
        "fct-descr": "\u003cp\u003eArgument mode, the program is given as input directly\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "Arg",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Input",
        "fct-type": "function",
        "title": "Arg"
      },
      "index": {
        "description": "Argument mode the program is given as input directly",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "Arg",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Arg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:Boxing",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "Boxing",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Mode",
        "fct-type": "function",
        "title": "Boxing"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "Boxing",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Boxing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:ClassAlreadyDefinedError",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "ClassAlreadyDefinedError String",
        "fct-source": "src/Database-Ferry-Compiler-Error-Error.html#FerryError",
        "fct-type": "function",
        "title": "ClassAlreadyDefinedError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "ClassAlreadyDefinedError",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Class Already Defined Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:ClassNotDefined",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "ClassNotDefined String",
        "fct-source": "src/Database-Ferry-Compiler-Error-Error.html#FerryError",
        "fct-type": "function",
        "title": "ClassNotDefined"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "ClassNotDefined",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Class Not Defined",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:CompilationStep",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "CompilationStep",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#CompilationStep",
        "fct-type": "function",
        "title": "CompilationStep"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "CompilationStep",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Compilation Step",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:Config",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "Config",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Config",
        "fct-type": "function",
        "title": "Config"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "Config",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:DotAST",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "DotAST",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Artefact",
        "fct-type": "function",
        "title": "DotAST"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "DotAST",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Dot AST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:DotAlg",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "DotAlg",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Artefact",
        "fct-type": "function",
        "title": "DotAlg"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "DotAlg",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Dot Alg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:DotBox",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "DotBox",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Artefact",
        "fct-type": "function",
        "title": "DotBox"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "DotBox",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Dot Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:DotCore",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "DotCore",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Artefact",
        "fct-type": "function",
        "title": "DotCore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "DotCore",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Dot Core",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:DotRewrite",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "DotRewrite",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Artefact",
        "fct-type": "function",
        "title": "DotRewrite"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "DotRewrite",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Dot Rewrite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:DotType",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "DotType",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Artefact",
        "fct-type": "function",
        "title": "DotType"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "DotType",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Dot Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:Echo",
      "description": {
        "fct-descr": "\u003cp\u003eEcho mode prints the given input to the console\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "Echo",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Artefact",
        "fct-type": "function",
        "title": "Echo"
      },
      "index": {
        "description": "Echo mode prints the given input to the console",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "Echo",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Echo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:File",
      "description": {
        "fct-descr": "\u003cp\u003eFile mode, the program is read from a file \n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "File String",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Input",
        "fct-type": "function",
        "title": "File"
      },
      "index": {
        "description": "File mode the program is read from file",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "File",
        "normalized": "",
        "package": "FerryCore",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:NoSuchFile",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "NoSuchFile String",
        "fct-source": "src/Database-Ferry-Compiler-Error-Error.html#FerryError",
        "fct-type": "function",
        "title": "NoSuchFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "NoSuchFile",
        "normalized": "",
        "package": "FerryCore",
        "partial": "No Such File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:Normalise",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "Normalise",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Mode",
        "fct-type": "function",
        "title": "Normalise"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "Normalise",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Normalise",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:NotARecordType",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "NotARecordType FType",
        "fct-source": "src/Database-Ferry-Compiler-Error-Error.html#FerryError",
        "fct-type": "function",
        "title": "NotARecordType"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "NotARecordType",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Not ARecord Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:OpRewrite",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "OpRewrite",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Mode",
        "fct-type": "function",
        "title": "OpRewrite"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "OpRewrite",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Op Rewrite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:Parse",
      "description": {
        "fct-descr": "\u003cp\u003eParse mode will stop the compiler after the parsing phase\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "Parse",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Mode",
        "fct-type": "function",
        "title": "Parse"
      },
      "index": {
        "description": "Parse mode will stop the compiler after the parsing phase",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "Parse",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:ParserError",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "ParserError ParseError",
        "fct-source": "src/Database-Ferry-Compiler-Error-Error.html#FerryError",
        "fct-type": "function",
        "title": "ParserError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "ParserError",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Parser Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:PrettyAST",
      "description": {
        "fct-descr": "\u003cp\u003ePretty mode parses the given input and pretty prints the result\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "PrettyAST",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Artefact",
        "fct-type": "function",
        "title": "PrettyAST"
      },
      "index": {
        "description": "Pretty mode parses the given input and pretty prints the result",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "PrettyAST",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Pretty AST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:PrettyCore",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "PrettyCore",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Artefact",
        "fct-type": "function",
        "title": "PrettyCore"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "PrettyCore",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Pretty Core",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:PrettyNormalAST",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "PrettyNormalAST",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Artefact",
        "fct-type": "function",
        "title": "PrettyNormalAST"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "PrettyNormalAST",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Pretty Normal AST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:ProcessComplete",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "ProcessComplete",
        "fct-source": "src/Database-Ferry-Compiler-Error-Error.html#FerryError",
        "fct-type": "function",
        "title": "ProcessComplete"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "ProcessComplete",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Process Complete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:Read",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "Read",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Mode",
        "fct-type": "function",
        "title": "Read"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "Read",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:RecordDuplicateFields",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "RecordDuplicateFields (Maybe String) [(RLabel, FType)]",
        "fct-source": "src/Database-Ferry-Compiler-Error-Error.html#FerryError",
        "fct-type": "function",
        "title": "RecordDuplicateFields"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "RecordDuplicateFields",
        "normalized": "RecordDuplicateFields(Maybe String)[(RLabel,FType)]",
        "package": "FerryCore",
        "partial": "Record Duplicate Fields",
        "signature": "RecordDuplicateFields(Maybe String)[(RLabel,FType)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:RecordWithoutI",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "RecordWithoutI FType String",
        "fct-source": "src/Database-Ferry-Compiler-Error-Error.html#FerryError",
        "fct-type": "function",
        "title": "RecordWithoutI"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "RecordWithoutI",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Record Without",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:SuperClassNotDefined",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "SuperClassNotDefined String [String]",
        "fct-source": "src/Database-Ferry-Compiler-Error-Error.html#FerryError",
        "fct-type": "function",
        "title": "SuperClassNotDefined"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "SuperClassNotDefined",
        "normalized": "SuperClassNotDefined String[String]",
        "package": "FerryCore",
        "partial": "Super Class Not Defined",
        "signature": "SuperClassNotDefined String[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:Transform",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "Transform",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Mode",
        "fct-type": "function",
        "title": "Transform"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "Transform",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Transform",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:Type",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "Type",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Artefact",
        "fct-type": "function",
        "title": "Type"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "Type",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:TypeInfer",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "TypeInfer",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Mode",
        "fct-type": "function",
        "title": "TypeInfer"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "TypeInfer",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Type Infer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:UnificationError",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "UnificationError FType FType",
        "fct-source": "src/Database-Ferry-Compiler-Error-Error.html#FerryError",
        "fct-type": "function",
        "title": "UnificationError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "UnificationError",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Unification Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:UnificationFail",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "UnificationFail RLabel RLabel",
        "fct-source": "src/Database-Ferry-Compiler-Error-Error.html#FerryError",
        "fct-type": "function",
        "title": "UnificationFail"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "UnificationFail",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Unification Fail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:UnificationOfRecordFieldsFailed",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "UnificationOfRecordFieldsFailed RLabel RLabel",
        "fct-source": "src/Database-Ferry-Compiler-Error-Error.html#FerryError",
        "fct-type": "function",
        "title": "UnificationOfRecordFieldsFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "UnificationOfRecordFieldsFailed",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Unification Of Record Fields Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:UnificationRecError",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "UnificationRecError [(RLabel, FType)] [(RLabel, FType)]",
        "fct-source": "src/Database-Ferry-Compiler-Error-Error.html#FerryError",
        "fct-type": "function",
        "title": "UnificationRecError"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "UnificationRecError",
        "normalized": "UnificationRecError[(RLabel,FType)][(RLabel,FType)]",
        "package": "FerryCore",
        "partial": "Unification Rec Error",
        "signature": "UnificationRecError[(RLabel,FType)][(RLabel,FType)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:XML",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "XML",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Artefact",
        "fct-type": "function",
        "title": "XML"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "XML",
        "normalized": "",
        "package": "FerryCore",
        "partial": "XML",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:addFile",
      "description": {
        "fct-descr": "\u003cp\u003eAdd the given file with contents to the phaseresult.\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "Maybe FileName -\u003e String -\u003e PhaseResult ()",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#addFile",
        "fct-type": "function",
        "title": "addFile"
      },
      "index": {
        "description": "Add the given file with contents to the phaseresult",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "addFile",
        "normalized": "Maybe FileName-\u003eString-\u003ePhaseResult()",
        "package": "FerryCore",
        "partial": "File",
        "signature": "Maybe FileName-\u003eString-\u003ePhaseResult()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:algebraPhase",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "CoreExpr -\u003e PhaseResult (Qual FType, AlgPlan AlgRes)",
        "fct-source": "src/Database-Ferry-Compiler-Stages-ToAlgebraStage.html#algebraPhase",
        "fct-type": "function",
        "title": "algebraPhase"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "algebraPhase",
        "normalized": "CoreExpr-\u003ePhaseResult(Qual FType,AlgPlan AlgRes)",
        "package": "FerryCore",
        "partial": "Phase",
        "signature": "CoreExpr-\u003ePhaseResult(Qual FType,AlgPlan AlgRes)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:allArtefacts",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "[Artefact]",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#allArtefacts",
        "fct-type": "function",
        "title": "allArtefacts"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "allArtefacts",
        "normalized": "[Artefact]",
        "package": "FerryCore",
        "partial": "Artefacts",
        "signature": "[Artefact]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:artefact",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "[Artefact]",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Config",
        "fct-type": "function",
        "title": "artefact"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "artefact",
        "normalized": "[Artefact]",
        "package": "FerryCore",
        "partial": "",
        "signature": "[Artefact]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:artefactToPhaseResult",
      "description": {
        "fct-descr": "\u003cp\u003eLift the result of generating an artefact into the overall phase result type\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "ArtefactResult -\u003e PhaseResult String",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#artefactToPhaseResult",
        "fct-type": "function",
        "title": "artefactToPhaseResult"
      },
      "index": {
        "description": "Lift the result of generating an artefact into the overall phase result type",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "artefactToPhaseResult",
        "normalized": "ArtefactResult-\u003ePhaseResult String",
        "package": "FerryCore",
        "partial": "To Phase Result",
        "signature": "ArtefactResult-\u003ePhaseResult String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:backEndPipeline",
      "description": {
        "fct-descr": "\u003cp\u003eThe compiler pipeline. The given Core AST is transformed dependent on the configuration of the Phaseresult\n   monad.\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "CoreExpr -\u003e PhaseResult ()",
        "fct-source": "src/Database-Ferry-Compiler-Pipeline.html#backEndPipeline",
        "fct-type": "function",
        "title": "backEndPipeline"
      },
      "index": {
        "description": "The compiler pipeline The given Core AST is transformed dependent on the configuration of the Phaseresult monad",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "backEndPipeline",
        "normalized": "CoreExpr-\u003ePhaseResult()",
        "package": "FerryCore",
        "partial": "End Pipeline",
        "signature": "CoreExpr-\u003ePhaseResult()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:backEndPipeline-39-",
      "description": {
        "fct-descr": "\u003cp\u003eThe compiler pipeline. Some tools might already provide a typed AST, is the same as the normal backEndPipeline\n without type inferencing.\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "CoreExpr -\u003e PhaseResult ()",
        "fct-source": "src/Database-Ferry-Compiler-Pipeline.html#backEndPipeline%27",
        "fct-type": "function",
        "title": "backEndPipeline'"
      },
      "index": {
        "description": "The compiler pipeline Some tools might already provide typed AST is the same as the normal backEndPipeline without type inferencing",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "backEndPipeline'",
        "normalized": "CoreExpr-\u003ePhaseResult()",
        "package": "FerryCore",
        "partial": "End Pipeline'",
        "signature": "CoreExpr-\u003ePhaseResult()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:boxingPhase",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "CoreExpr -\u003e PhaseResult CoreExpr",
        "fct-source": "src/Database-Ferry-Compiler-Stages-BoxingStage.html#boxingPhase",
        "fct-type": "function",
        "title": "boxingPhase"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "boxingPhase",
        "normalized": "CoreExpr-\u003ePhaseResult CoreExpr",
        "package": "FerryCore",
        "partial": "Phase",
        "signature": "CoreExpr-\u003ePhaseResult CoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:debug",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "Bool",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Config",
        "fct-type": "function",
        "title": "debug"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "debug",
        "normalized": "",
        "package": "FerryCore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:defaultConfig",
      "description": {
        "fct-descr": "\u003cp\u003eThe default configuration for the compiler\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "Config",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#defaultConfig",
        "fct-type": "function",
        "title": "defaultConfig"
      },
      "index": {
        "description": "The default configuration for the compiler",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "defaultConfig",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:endProcess",
      "description": {
        "fct-descr": "\u003cp\u003eFinal log message when end of compilation is reached\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "PhaseResult b",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#endProcess",
        "fct-type": "function",
        "title": "endProcess"
      },
      "index": {
        "description": "Final log message when end of compilation is reached",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "endProcess",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Process",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:executeStep",
      "description": {
        "fct-descr": "\u003cp\u003eApply a compilation step to an expression of type a. The result of type b is returned in a phaseresult monad\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "CompilationStep a b -\u003e a -\u003e PhaseResult b",
        "fct-source": "src/Database-Ferry-Compiler-ExecuteStep.html#executeStep",
        "fct-type": "function",
        "title": "executeStep"
      },
      "index": {
        "description": "Apply compilation step to an expression of type The result of type is returned in phaseresult monad",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "executeStep",
        "normalized": "CompilationStep a b-\u003ea-\u003ePhaseResult b",
        "package": "FerryCore",
        "partial": "Step",
        "signature": "CompilationStep a b-\u003ea-\u003ePhaseResult b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:getConfig",
      "description": {
        "fct-descr": "\u003cp\u003eGet the compiler configuration\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "PhaseResult Config",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#getConfig",
        "fct-type": "function",
        "title": "getConfig"
      },
      "index": {
        "description": "Get the compiler configuration",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "getConfig",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:getFiles",
      "description": {
        "fct-descr": "\u003cp\u003eGet the artefacts from the phaseresult            \n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "Config -\u003e PhaseResult r -\u003e [File]",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#getFiles",
        "fct-type": "function",
        "title": "getFiles"
      },
      "index": {
        "description": "Get the artefacts from the phaseresult",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "getFiles",
        "normalized": "Config-\u003ePhaseResult a-\u003e[File]",
        "package": "FerryCore",
        "partial": "Files",
        "signature": "Config-\u003ePhaseResult r-\u003e[File]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:getLog",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current log from a phaseresult\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "Config -\u003e PhaseResult r -\u003e Log",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#getLog",
        "fct-type": "function",
        "title": "getLog"
      },
      "index": {
        "description": "Get the current log from phaseresult",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "getLog",
        "normalized": "Config-\u003ePhaseResult a-\u003eLog",
        "package": "FerryCore",
        "partial": "Log",
        "signature": "Config-\u003ePhaseResult r-\u003eLog"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:handleError",
      "description": {
        "fct-descr": "\u003cp\u003ePrint an error message    \n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "FerryError -\u003e IO ()",
        "fct-source": "src/Database-Ferry-Compiler-Error-Error.html#handleError",
        "fct-type": "function",
        "title": "handleError"
      },
      "index": {
        "description": "Print an error message",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "handleError",
        "normalized": "FerryError-\u003eIO()",
        "package": "FerryCore",
        "partial": "Error",
        "signature": "FerryError-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:input",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "Input",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Config",
        "fct-type": "function",
        "title": "input"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "input",
        "normalized": "",
        "package": "FerryCore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:line",
      "description": {
        "fct-descr": "\u003cp\u003eSeperator line for logging\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "String",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#line",
        "fct-type": "function",
        "title": "line"
      },
      "index": {
        "description": "Seperator line for logging",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "line",
        "normalized": "",
        "package": "FerryCore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:logFile",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "Maybe String",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Config",
        "fct-type": "function",
        "title": "logFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "logFile",
        "normalized": "",
        "package": "FerryCore",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:logMsg",
      "description": {
        "fct-descr": "\u003cp\u003eLog the message t\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "t -\u003e m ()",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#logMsg",
        "fct-type": "function",
        "title": "logMsg"
      },
      "index": {
        "description": "Log the message",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "logMsg",
        "normalized": "a-\u003eb()",
        "package": "FerryCore",
        "partial": "Msg",
        "signature": "t-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:mode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "Mode",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Config",
        "fct-type": "function",
        "title": "mode"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "mode",
        "normalized": "",
        "package": "FerryCore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:newError",
      "description": {
        "fct-descr": "\u003cp\u003eThrow an error\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "FerryError -\u003e PhaseResult r",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#newError",
        "fct-type": "function",
        "title": "newError"
      },
      "index": {
        "description": "Throw an error",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "newError",
        "normalized": "FerryError-\u003ePhaseResult a",
        "package": "FerryCore",
        "partial": "Error",
        "signature": "FerryError-\u003ePhaseResult r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:output",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "Maybe String",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#Config",
        "fct-type": "function",
        "title": "output"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "output",
        "normalized": "",
        "package": "FerryCore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:rewritePhase",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "CoreExpr -\u003e PhaseResult CoreExpr",
        "fct-source": "src/Database-Ferry-Compiler-Stages-RewriteStage.html#rewritePhase",
        "fct-type": "function",
        "title": "rewritePhase"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "rewritePhase",
        "normalized": "CoreExpr-\u003ePhaseResult CoreExpr",
        "package": "FerryCore",
        "partial": "Phase",
        "signature": "CoreExpr-\u003ePhaseResult CoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:runPhase",
      "description": {
        "fct-descr": "\u003cp\u003eExecute a phaseresult under a given configuration,, resulting in triple of:\n 1.) An error or the result\n 2.) The compilation log\n 3.) The generated artefacts\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "Config -\u003e PhaseResult r -\u003e (Either FerryError r, Log, [File])",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#runPhase",
        "fct-type": "function",
        "title": "runPhase"
      },
      "index": {
        "description": "Execute phaseresult under given configuration resulting in triple of An error or the result The compilation log The generated artefacts",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "runPhase",
        "normalized": "Config-\u003ePhaseResult a-\u003e(Either FerryError a,Log,[File])",
        "package": "FerryCore",
        "partial": "Phase",
        "signature": "Config-\u003ePhaseResult r-\u003e(Either FerryError r,Log,[File])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:stageArtefacts",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "[(Artefact, String, b -\u003e ArtefactResult)]",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#CompilationStep",
        "fct-type": "function",
        "title": "stageArtefacts"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "stageArtefacts",
        "normalized": "[(Artefact,String,a-\u003eArtefactResult)]",
        "package": "FerryCore",
        "partial": "Artefacts",
        "signature": "[(Artefact,String,b-\u003eArtefactResult)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:stageMode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "Mode",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#CompilationStep",
        "fct-type": "function",
        "title": "stageMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "stageMode",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:stageName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "Name",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#CompilationStep",
        "fct-type": "function",
        "title": "stageName"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "stageName",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:stageStep",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "a -\u003e PhaseResult b",
        "fct-source": "src/Database-Ferry-Compiler-Types.html#CompilationStep",
        "fct-type": "function",
        "title": "stageStep"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "stageStep",
        "normalized": "a-\u003ePhaseResult b",
        "package": "FerryCore",
        "partial": "Step",
        "signature": "a-\u003ePhaseResult b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:typeInferPhase",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "CoreExpr -\u003e PhaseResult CoreExpr",
        "fct-source": "src/Database-Ferry-Compiler-Stages-TypeInferStage.html#typeInferPhase",
        "fct-type": "function",
        "title": "typeInferPhase"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "typeInferPhase",
        "normalized": "CoreExpr-\u003ePhaseResult CoreExpr",
        "package": "FerryCore",
        "partial": "Infer Phase",
        "signature": "CoreExpr-\u003ePhaseResult CoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:typedCoreToAlgebra",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "CoreExpr -\u003e String",
        "fct-source": "src/Database-Ferry-Compiler-Transform.html#typedCoreToAlgebra",
        "fct-type": "function",
        "title": "typedCoreToAlgebra"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "typedCoreToAlgebra",
        "normalized": "CoreExpr-\u003eString",
        "package": "FerryCore",
        "partial": "Core To Algebra",
        "signature": "CoreExpr-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:xmlPhase",
      "description": {
        "fct-module": "Database.Ferry.Compiler",
        "fct-package": "FerryCore",
        "fct-signature": "(Qual FType, AlgPlan AlgRes) -\u003e PhaseResult String",
        "fct-source": "src/Database-Ferry-Compiler-Stages-AlgebraToXMLStage.html#xmlPhase",
        "fct-type": "function",
        "title": "xmlPhase"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Compiler",
        "module": "Database.Ferry.Compiler",
        "name": "xmlPhase",
        "normalized": "(Qual FType,AlgPlan AlgRes)-\u003ePhaseResult String",
        "package": "FerryCore",
        "partial": "Phase",
        "signature": "(Qual FType,AlgPlan AlgRes)-\u003ePhaseResult String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEverything related to untyped core \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "module",
        "fct-source": "src/Database-Ferry-Syntax.html",
        "fct-type": "module",
        "title": "Syntax"
      },
      "index": {
        "description": "Everything related to untyped core",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "Syntax",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Syntax",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#t:Column",
      "description": {
        "fct-descr": "\u003cp\u003eDatabase table column\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "data",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#Column",
        "fct-type": "data",
        "title": "Column"
      },
      "index": {
        "description": "Database table column",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "Column",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Column",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#t:Const",
      "description": {
        "fct-descr": "\u003cp\u003eConstant values\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "data",
        "fct-source": "src/Database-Ferry-Common-Data-Base.html#Const",
        "fct-type": "data",
        "title": "Const"
      },
      "index": {
        "description": "Constant values",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "Const",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Const",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#t:CoreExpr",
      "description": {
        "fct-descr": "\u003cp\u003eDatatype for building untyped core ASTs\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "data",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#CoreExpr",
        "fct-type": "data",
        "title": "CoreExpr"
      },
      "index": {
        "description": "Datatype for building untyped core ASTs",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "CoreExpr",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Core Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#t:Dotify",
      "description": {
        "fct-descr": "\u003cp\u003eClass for transforming values into either an error or a string representing a dot file.\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "class",
        "fct-source": "src/Database-Ferry-Common-Render-Dot.html#Dotify",
        "fct-type": "class",
        "title": "Dotify"
      },
      "index": {
        "description": "Class for transforming values into either an error or string representing dot file",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "Dotify",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Dotify",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#t:Ident",
      "description": {
        "fct-descr": "\u003cp\u003eAn identifier is represented by a string\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "type",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#Ident",
        "fct-type": "type",
        "title": "Ident"
      },
      "index": {
        "description": "An identifier is represented by string",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "Ident",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Ident",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#t:Identifier",
      "description": {
        "fct-descr": "\u003cp\u003eIdentifiers are represented as strings    \n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "type",
        "fct-source": "src/Database-Ferry-Common-Data-Base.html#Identifier",
        "fct-type": "type",
        "title": "Identifier"
      },
      "index": {
        "description": "Identifiers are represented as strings",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "Identifier",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Identifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#t:Key",
      "description": {
        "fct-descr": "\u003cp\u003eDatabase table key    \n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "data",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#Key",
        "fct-type": "data",
        "title": "Key"
      },
      "index": {
        "description": "Database table key",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "Key",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#t:Op",
      "description": {
        "fct-descr": "\u003cp\u003eOperator constructor\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "data",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#Op",
        "fct-type": "data",
        "title": "Op"
      },
      "index": {
        "description": "Operator constructor",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "Op",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#t:Param",
      "description": {
        "fct-descr": "\u003cp\u003eFunction arguments\n In future, that is when defunctionalisation is implemented function arguments should just be expressions.\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "data",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#Param",
        "fct-type": "data",
        "title": "Param"
      },
      "index": {
        "description": "Function arguments In future that is when defunctionalisation is implemented function arguments should just be expressions",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "Param",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#t:Pretty",
      "description": {
        "fct-descr": "\u003cp\u003eClass for pretty printing a value of a.\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "class",
        "fct-source": "src/Database-Ferry-Common-Render-Pretty.html#Pretty",
        "fct-type": "class",
        "title": "Pretty"
      },
      "index": {
        "description": "Class for pretty printing value of",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "Pretty",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Pretty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#t:RecElem",
      "description": {
        "fct-descr": "\u003cp\u003eRecord elements\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "data",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#RecElem",
        "fct-type": "data",
        "title": "RecElem"
      },
      "index": {
        "description": "Record elements",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "RecElem",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Rec Elem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#t:Type",
      "description": {
        "fct-descr": "\u003cp\u003eDatabase column type    \n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "data",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#Type",
        "fct-type": "data",
        "title": "Type"
      },
      "index": {
        "description": "Database column type",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "Type",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#t:VarContainer",
      "description": {
        "fct-descr": "\u003cp\u003eType class for extracting all variables that occur in a value of type a\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "class",
        "fct-source": "src/Database-Ferry-Common-Data-Base.html#VarContainer",
        "fct-type": "class",
        "title": "VarContainer"
      },
      "index": {
        "description": "Type class for extracting all variables that occur in value of type",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "VarContainer",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Var Container",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:App",
      "description": {
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "CoreExpr -\u003e Param -\u003e CoreExpr",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#CoreExpr",
        "fct-type": "function",
        "title": "App"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "App",
        "normalized": "CoreExpr-\u003eParam-\u003eCoreExpr",
        "package": "FerryCore",
        "partial": "App",
        "signature": "CoreExpr-\u003eParam-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:BinOp",
      "description": {
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "Op -\u003e CoreExpr -\u003e CoreExpr -\u003e CoreExpr",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#CoreExpr",
        "fct-type": "function",
        "title": "BinOp"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "BinOp",
        "normalized": "Op-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr",
        "package": "FerryCore",
        "partial": "Bin Op",
        "signature": "Op-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:CBool",
      "description": {
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "CBool Bool",
        "fct-source": "src/Database-Ferry-Common-Data-Base.html#Const",
        "fct-type": "function",
        "title": "CBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "CBool",
        "normalized": "",
        "package": "FerryCore",
        "partial": "CBool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:CFloat",
      "description": {
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "CFloat Double",
        "fct-source": "src/Database-Ferry-Common-Data-Base.html#Const",
        "fct-type": "function",
        "title": "CFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "CFloat",
        "normalized": "",
        "package": "FerryCore",
        "partial": "CFloat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:CInt",
      "description": {
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "CInt Integer",
        "fct-source": "src/Database-Ferry-Common-Data-Base.html#Const",
        "fct-type": "function",
        "title": "CInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "CInt",
        "normalized": "",
        "package": "FerryCore",
        "partial": "CInt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:CString",
      "description": {
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "CString String",
        "fct-source": "src/Database-Ferry-Common-Data-Base.html#Const",
        "fct-type": "function",
        "title": "CString"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "CString",
        "normalized": "",
        "package": "FerryCore",
        "partial": "CString",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:CUnit",
      "description": {
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "CUnit",
        "fct-source": "src/Database-Ferry-Common-Data-Base.html#Const",
        "fct-type": "function",
        "title": "CUnit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "CUnit",
        "normalized": "",
        "package": "FerryCore",
        "partial": "CUnit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:Column",
      "description": {
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "String -\u003e Type -\u003e Column",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#Column",
        "fct-type": "function",
        "title": "Column"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "Column",
        "normalized": "String-\u003eType-\u003eColumn",
        "package": "FerryCore",
        "partial": "Column",
        "signature": "String-\u003eType-\u003eColumn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:Cons",
      "description": {
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "CoreExpr -\u003e CoreExpr -\u003e CoreExpr",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#CoreExpr",
        "fct-type": "function",
        "title": "Cons"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "Cons",
        "normalized": "CoreExpr-\u003eCoreExpr-\u003eCoreExpr",
        "package": "FerryCore",
        "partial": "Cons",
        "signature": "CoreExpr-\u003eCoreExpr-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:Constant",
      "description": {
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "Const -\u003e CoreExpr",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#CoreExpr",
        "fct-type": "function",
        "title": "Constant"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "Constant",
        "normalized": "Const-\u003eCoreExpr",
        "package": "FerryCore",
        "partial": "Constant",
        "signature": "Const-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:Elem",
      "description": {
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "CoreExpr -\u003e String -\u003e CoreExpr",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#CoreExpr",
        "fct-type": "function",
        "title": "Elem"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "Elem",
        "normalized": "CoreExpr-\u003eString-\u003eCoreExpr",
        "package": "FerryCore",
        "partial": "Elem",
        "signature": "CoreExpr-\u003eString-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:If",
      "description": {
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "CoreExpr -\u003e CoreExpr -\u003e CoreExpr -\u003e CoreExpr",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#CoreExpr",
        "fct-type": "function",
        "title": "If"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "If",
        "normalized": "CoreExpr-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr",
        "package": "FerryCore",
        "partial": "If",
        "signature": "CoreExpr-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:Key",
      "description": {
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "[String] -\u003e Key",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#Key",
        "fct-type": "function",
        "title": "Key"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "Key",
        "normalized": "[String]-\u003eKey",
        "package": "FerryCore",
        "partial": "Key",
        "signature": "[String]-\u003eKey"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:Let",
      "description": {
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "String -\u003e CoreExpr -\u003e CoreExpr -\u003e CoreExpr",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#CoreExpr",
        "fct-type": "function",
        "title": "Let"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "Let",
        "normalized": "String-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr",
        "package": "FerryCore",
        "partial": "Let",
        "signature": "String-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:Nil",
      "description": {
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "CoreExpr",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#CoreExpr",
        "fct-type": "function",
        "title": "Nil"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "Nil",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Nil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:Op",
      "description": {
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "String -\u003e Op",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#Op",
        "fct-type": "function",
        "title": "Op"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "Op",
        "normalized": "String-\u003eOp",
        "package": "FerryCore",
        "partial": "Op",
        "signature": "String-\u003eOp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:ParAbstr",
      "description": {
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "[String] -\u003e CoreExpr -\u003e Param",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#Param",
        "fct-type": "function",
        "title": "ParAbstr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "ParAbstr",
        "normalized": "[String]-\u003eCoreExpr-\u003eParam",
        "package": "FerryCore",
        "partial": "Par Abstr",
        "signature": "[String]-\u003eCoreExpr-\u003eParam"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:ParExpr",
      "description": {
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "CoreExpr -\u003e Param",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#Param",
        "fct-type": "function",
        "title": "ParExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "ParExpr",
        "normalized": "CoreExpr-\u003eParam",
        "package": "FerryCore",
        "partial": "Par Expr",
        "signature": "CoreExpr-\u003eParam"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:Rec",
      "description": {
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "[RecElem] -\u003e CoreExpr",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#CoreExpr",
        "fct-type": "function",
        "title": "Rec"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "Rec",
        "normalized": "[RecElem]-\u003eCoreExpr",
        "package": "FerryCore",
        "partial": "Rec",
        "signature": "[RecElem]-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:RecElem",
      "description": {
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "String -\u003e CoreExpr -\u003e RecElem",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#RecElem",
        "fct-type": "function",
        "title": "RecElem"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "RecElem",
        "normalized": "String-\u003eCoreExpr-\u003eRecElem",
        "package": "FerryCore",
        "partial": "Rec Elem",
        "signature": "String-\u003eCoreExpr-\u003eRecElem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:TBool",
      "description": {
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "TBool",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#Type",
        "fct-type": "function",
        "title": "TBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "TBool",
        "normalized": "",
        "package": "FerryCore",
        "partial": "TBool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:TFloat",
      "description": {
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "TFloat",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#Type",
        "fct-type": "function",
        "title": "TFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "TFloat",
        "normalized": "",
        "package": "FerryCore",
        "partial": "TFloat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:TInt",
      "description": {
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "TInt",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#Type",
        "fct-type": "function",
        "title": "TInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "TInt",
        "normalized": "",
        "package": "FerryCore",
        "partial": "TInt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:TString",
      "description": {
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "TString",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#Type",
        "fct-type": "function",
        "title": "TString"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "TString",
        "normalized": "",
        "package": "FerryCore",
        "partial": "TString",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:TUnit",
      "description": {
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "TUnit",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#Type",
        "fct-type": "function",
        "title": "TUnit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "TUnit",
        "normalized": "",
        "package": "FerryCore",
        "partial": "TUnit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:Table",
      "description": {
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "String -\u003e [Column] -\u003e [Key] -\u003e CoreExpr",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#CoreExpr",
        "fct-type": "function",
        "title": "Table"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "Table",
        "normalized": "String-\u003e[Column]-\u003e[Key]-\u003eCoreExpr",
        "package": "FerryCore",
        "partial": "Table",
        "signature": "String-\u003e[Column]-\u003e[Key]-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:Var",
      "description": {
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "String -\u003e CoreExpr",
        "fct-source": "src/Database-Ferry-Core-Data-Core.html#CoreExpr",
        "fct-type": "function",
        "title": "Var"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "Var",
        "normalized": "String-\u003eCoreExpr",
        "package": "FerryCore",
        "partial": "Var",
        "signature": "String-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:dot",
      "description": {
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "a -\u003e Either FerryError String",
        "fct-source": "src/Database-Ferry-Common-Render-Dot.html#dot",
        "fct-type": "method",
        "title": "dot"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "dot",
        "normalized": "a-\u003eEither FerryError String",
        "package": "FerryCore",
        "partial": "",
        "signature": "a-\u003eEither FerryError String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:intersperseComma",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print the values xs then intersperse with a comma and transform it into one string\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "[a] -\u003e Int -\u003e String",
        "fct-source": "src/Database-Ferry-Common-Render-Pretty.html#intersperseComma",
        "fct-type": "function",
        "title": "intersperseComma"
      },
      "index": {
        "description": "Pretty print the values xs then intersperse with comma and transform it into one string",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "intersperseComma",
        "normalized": "[a]-\u003eInt-\u003eString",
        "package": "FerryCore",
        "partial": "Comma",
        "signature": "[a]-\u003eInt-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:mapIntersperseConcat",
      "description": {
        "fct-descr": "\u003cp\u003emaps its first argument over the third, then intersperses\n the result with the second argument, and finally concatenates everything.\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "(a -\u003e [b]) -\u003e [b] -\u003e [a] -\u003e [b]",
        "fct-source": "src/Database-Ferry-Common-Render-Pretty.html#mapIntersperseConcat",
        "fct-type": "function",
        "title": "mapIntersperseConcat"
      },
      "index": {
        "description": "maps its first argument over the third then intersperses the result with the second argument and finally concatenates everything",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "mapIntersperseConcat",
        "normalized": "(a-\u003e[b])-\u003e[b]-\u003e[a]-\u003e[b]",
        "package": "FerryCore",
        "partial": "Intersperse Concat",
        "signature": "(a-\u003e[b])-\u003e[b]-\u003e[a]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:newLine",
      "description": {
        "fct-descr": "\u003cp\u003eA newline followed by indenting n positions\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "Int -\u003e String",
        "fct-source": "src/Database-Ferry-Common-Render-Pretty.html#newLine",
        "fct-type": "function",
        "title": "newLine"
      },
      "index": {
        "description": "newline followed by indenting positions",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "newLine",
        "normalized": "Int-\u003eString",
        "package": "FerryCore",
        "partial": "Line",
        "signature": "Int-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:pretty",
      "description": {
        "fct-descr": "\u003cp\u003epretty function transforms a value of a into a string with identation i.\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "a -\u003e Int -\u003e String",
        "fct-source": "src/Database-Ferry-Common-Render-Pretty.html#pretty",
        "fct-type": "method",
        "title": "pretty"
      },
      "index": {
        "description": "pretty function transforms value of into string with identation",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "pretty",
        "normalized": "a-\u003eInt-\u003eString",
        "package": "FerryCore",
        "partial": "",
        "signature": "a-\u003eInt-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:prettyPrint",
      "description": {
        "fct-descr": "\u003cp\u003eShorthand for pretty without the identation argument\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Database-Ferry-Common-Render-Pretty.html#prettyPrint",
        "fct-type": "function",
        "title": "prettyPrint"
      },
      "index": {
        "description": "Shorthand for pretty without the identation argument",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "prettyPrint",
        "normalized": "a-\u003eString",
        "package": "FerryCore",
        "partial": "Print",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:vars",
      "description": {
        "fct-module": "Database.Ferry.Syntax",
        "fct-package": "FerryCore",
        "fct-signature": "a -\u003e [Identifier]",
        "fct-source": "src/Database-Ferry-Common-Data-Base.html#vars",
        "fct-type": "method",
        "title": "vars"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry Syntax",
        "module": "Database.Ferry.Syntax",
        "name": "vars",
        "normalized": "a-\u003e[Identifier]",
        "package": "FerryCore",
        "partial": "",
        "signature": "a-\u003e[Identifier]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEverything related to typed core\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "module",
        "fct-source": "src/Database-Ferry-SyntaxTyped.html",
        "fct-type": "module",
        "title": "SyntaxTyped"
      },
      "index": {
        "description": "Everything related to typed core",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "SyntaxTyped",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Syntax Typed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:Column",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "data",
        "fct-source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#Column",
        "fct-type": "data",
        "title": "Column"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "Column",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Column",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:Const",
      "description": {
        "fct-descr": "\u003cp\u003eConstant values\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "data",
        "fct-source": "src/Database-Ferry-Common-Data-Base.html#Const",
        "fct-type": "data",
        "title": "Const"
      },
      "index": {
        "description": "Constant values",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "Const",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Const",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:CoreExpr",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "data",
        "fct-source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#CoreExpr",
        "fct-type": "data",
        "title": "CoreExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "CoreExpr",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Core Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:Dotify",
      "description": {
        "fct-descr": "\u003cp\u003eClass for transforming values into either an error or a string representing a dot file.\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "class",
        "fct-source": "src/Database-Ferry-Common-Render-Dot.html#Dotify",
        "fct-type": "class",
        "title": "Dotify"
      },
      "index": {
        "description": "Class for transforming values into either an error or string representing dot file",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "Dotify",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Dotify",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:FTFn",
      "description": {
        "fct-descr": "\u003cp\u003eType functions \n\u003c/p\u003e",
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "data",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#FTFn",
        "fct-type": "data",
        "title": "FTFn"
      },
      "index": {
        "description": "Type functions",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "FTFn",
        "normalized": "",
        "package": "FerryCore",
        "partial": "FTFn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:FType",
      "description": {
        "fct-descr": "\u003cp\u003eType language \n\u003c/p\u003e",
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "data",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#FType",
        "fct-type": "data",
        "title": "FType"
      },
      "index": {
        "description": "Type language",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "FType",
        "normalized": "",
        "package": "FerryCore",
        "partial": "FType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:HasType",
      "description": {
        "fct-descr": "\u003cp\u003eEverything that contains a type.   \n\u003c/p\u003e",
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "class",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#HasType",
        "fct-type": "class",
        "title": "HasType"
      },
      "index": {
        "description": "Everything that contains type",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "HasType",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Has Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:Ident",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "type",
        "fct-source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#Ident",
        "fct-type": "type",
        "title": "Ident"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "Ident",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Ident",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:Identifier",
      "description": {
        "fct-descr": "\u003cp\u003eIdentifiers are represented as strings    \n\u003c/p\u003e",
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "type",
        "fct-source": "src/Database-Ferry-Common-Data-Base.html#Identifier",
        "fct-type": "type",
        "title": "Identifier"
      },
      "index": {
        "description": "Identifiers are represented as strings",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "Identifier",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Identifier",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:Key",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "data",
        "fct-source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#Key",
        "fct-type": "data",
        "title": "Key"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "Key",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:Op",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "data",
        "fct-source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#Op",
        "fct-type": "data",
        "title": "Op"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "Op",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:Param",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "data",
        "fct-source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#Param",
        "fct-type": "data",
        "title": "Param"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "Param",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:Pred",
      "description": {
        "fct-descr": "\u003cp\u003ePredicates relating to records\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "data",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#Pred",
        "fct-type": "data",
        "title": "Pred"
      },
      "index": {
        "description": "Predicates relating to records",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "Pred",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Pred",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:Qual",
      "description": {
        "fct-descr": "\u003cp\u003eA qualified type is a type with some predicates ([predicates] :=\u003e type)\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "data",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#Qual",
        "fct-type": "data",
        "title": "Qual"
      },
      "index": {
        "description": "qualified type is type with some predicates predicates type",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "Qual",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Qual",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:RLabel",
      "description": {
        "fct-descr": "\u003cp\u003eLanguage for record labels\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "data",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#RLabel",
        "fct-type": "data",
        "title": "RLabel"
      },
      "index": {
        "description": "Language for record labels",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "RLabel",
        "normalized": "",
        "package": "FerryCore",
        "partial": "RLabel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:RecElem",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "data",
        "fct-source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#RecElem",
        "fct-type": "data",
        "title": "RecElem"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "RecElem",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Rec Elem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:TyScheme",
      "description": {
        "fct-descr": "\u003cp\u003eA type scheme represents a quantified type\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "data",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#TyScheme",
        "fct-type": "data",
        "title": "TyScheme"
      },
      "index": {
        "description": "type scheme represents quantified type",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "TyScheme",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Ty Scheme",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:.-45--62-",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "FType -\u003e FType -\u003e FType",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#.-%3E",
        "fct-type": "function",
        "title": "(.-\u003e)"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "(.-\u003e) .-\u003e",
        "normalized": "FType-\u003eFType-\u003eFType",
        "package": "FerryCore",
        "partial": "",
        "signature": "FType-\u003eFType-\u003eFType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v::-61--62-",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "[Pred] -\u003e t -\u003e Qual t",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#Qual",
        "fct-type": "function",
        "title": ":=\u003e"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": ":=\u003e",
        "normalized": "[Pred]-\u003ea-\u003eQual a",
        "package": "FerryCore",
        "partial": "",
        "signature": "[Pred]-\u003et-\u003eQual t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:App",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "Qual FType -\u003e CoreExpr -\u003e Param -\u003e CoreExpr",
        "fct-source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#CoreExpr",
        "fct-type": "function",
        "title": "App"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "App",
        "normalized": "Qual FType-\u003eCoreExpr-\u003eParam-\u003eCoreExpr",
        "package": "FerryCore",
        "partial": "App",
        "signature": "Qual FType-\u003eCoreExpr-\u003eParam-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:BinOp",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "Qual FType -\u003e Op -\u003e CoreExpr -\u003e CoreExpr -\u003e CoreExpr",
        "fct-source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#CoreExpr",
        "fct-type": "function",
        "title": "BinOp"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "BinOp",
        "normalized": "Qual FType-\u003eOp-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr",
        "package": "FerryCore",
        "partial": "Bin Op",
        "signature": "Qual FType-\u003eOp-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:CBool",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "CBool Bool",
        "fct-source": "src/Database-Ferry-Common-Data-Base.html#Const",
        "fct-type": "function",
        "title": "CBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "CBool",
        "normalized": "",
        "package": "FerryCore",
        "partial": "CBool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:CFloat",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "CFloat Double",
        "fct-source": "src/Database-Ferry-Common-Data-Base.html#Const",
        "fct-type": "function",
        "title": "CFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "CFloat",
        "normalized": "",
        "package": "FerryCore",
        "partial": "CFloat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:CInt",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "CInt Integer",
        "fct-source": "src/Database-Ferry-Common-Data-Base.html#Const",
        "fct-type": "function",
        "title": "CInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "CInt",
        "normalized": "",
        "package": "FerryCore",
        "partial": "CInt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:CString",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "CString String",
        "fct-source": "src/Database-Ferry-Common-Data-Base.html#Const",
        "fct-type": "function",
        "title": "CString"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "CString",
        "normalized": "",
        "package": "FerryCore",
        "partial": "CString",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:CUnit",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "CUnit",
        "fct-source": "src/Database-Ferry-Common-Data-Base.html#Const",
        "fct-type": "function",
        "title": "CUnit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "CUnit",
        "normalized": "",
        "package": "FerryCore",
        "partial": "CUnit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Column",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "String -\u003e FType -\u003e Column",
        "fct-source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#Column",
        "fct-type": "function",
        "title": "Column"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "Column",
        "normalized": "String-\u003eFType-\u003eColumn",
        "package": "FerryCore",
        "partial": "Column",
        "signature": "String-\u003eFType-\u003eColumn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Cons",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "Qual FType -\u003e CoreExpr -\u003e CoreExpr -\u003e CoreExpr",
        "fct-source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#CoreExpr",
        "fct-type": "function",
        "title": "Cons"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "Cons",
        "normalized": "Qual FType-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr",
        "package": "FerryCore",
        "partial": "Cons",
        "signature": "Qual FType-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Constant",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "Qual FType -\u003e Const -\u003e CoreExpr",
        "fct-source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#CoreExpr",
        "fct-type": "function",
        "title": "Constant"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "Constant",
        "normalized": "Qual FType-\u003eConst-\u003eCoreExpr",
        "package": "FerryCore",
        "partial": "Constant",
        "signature": "Qual FType-\u003eConst-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Elem",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "Qual FType -\u003e CoreExpr -\u003e String -\u003e CoreExpr",
        "fct-source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#CoreExpr",
        "fct-type": "function",
        "title": "Elem"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "Elem",
        "normalized": "Qual FType-\u003eCoreExpr-\u003eString-\u003eCoreExpr",
        "package": "FerryCore",
        "partial": "Elem",
        "signature": "Qual FType-\u003eCoreExpr-\u003eString-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:FBool",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "FType",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#FType",
        "fct-type": "function",
        "title": "FBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "FBool",
        "normalized": "",
        "package": "FerryCore",
        "partial": "FBool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:FFloat",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "FType",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#FType",
        "fct-type": "function",
        "title": "FFloat"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "FFloat",
        "normalized": "",
        "package": "FerryCore",
        "partial": "FFloat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:FFn",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "FType -\u003e FType -\u003e FType",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#FType",
        "fct-type": "function",
        "title": "FFn"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "FFn",
        "normalized": "FType-\u003eFType-\u003eFType",
        "package": "FerryCore",
        "partial": "FFn",
        "signature": "FType-\u003eFType-\u003eFType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:FGen",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "Int -\u003e FType",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#FType",
        "fct-type": "function",
        "title": "FGen"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "FGen",
        "normalized": "Int-\u003eFType",
        "package": "FerryCore",
        "partial": "FGen",
        "signature": "Int-\u003eFType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:FInt",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "FType",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#FType",
        "fct-type": "function",
        "title": "FInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "FInt",
        "normalized": "",
        "package": "FerryCore",
        "partial": "FInt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:FList",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "FType -\u003e FType",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#FType",
        "fct-type": "function",
        "title": "FList"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "FList",
        "normalized": "FType-\u003eFType",
        "package": "FerryCore",
        "partial": "FList",
        "signature": "FType-\u003eFType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:FRec",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "[(RLabel, FType)] -\u003e FType",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#FType",
        "fct-type": "function",
        "title": "FRec"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "FRec",
        "normalized": "[(RLabel,FType)]-\u003eFType",
        "package": "FerryCore",
        "partial": "FRec",
        "signature": "[(RLabel,FType)]-\u003eFType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:FString",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "FType",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#FType",
        "fct-type": "function",
        "title": "FString"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "FString",
        "normalized": "",
        "package": "FerryCore",
        "partial": "FString",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:FTF",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "FTFn -\u003e FType -\u003e FType",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#FType",
        "fct-type": "function",
        "title": "FTF"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "FTF",
        "normalized": "FTFn-\u003eFType-\u003eFType",
        "package": "FerryCore",
        "partial": "FTF",
        "signature": "FTFn-\u003eFType-\u003eFType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:FUnit",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "FType",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#FType",
        "fct-type": "function",
        "title": "FUnit"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "FUnit",
        "normalized": "",
        "package": "FerryCore",
        "partial": "FUnit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:FVar",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "Ident -\u003e FType",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#FType",
        "fct-type": "function",
        "title": "FVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "FVar",
        "normalized": "Ident-\u003eFType",
        "package": "FerryCore",
        "partial": "FVar",
        "signature": "Ident-\u003eFType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Forall",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "TyGens -\u003e RecGens -\u003e Qual FType -\u003e TyScheme",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#TyScheme",
        "fct-type": "function",
        "title": "Forall"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "Forall",
        "normalized": "TyGens-\u003eRecGens-\u003eQual FType-\u003eTyScheme",
        "package": "FerryCore",
        "partial": "Forall",
        "signature": "TyGens-\u003eRecGens-\u003eQual FType-\u003eTyScheme"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Has",
      "description": {
        "fct-descr": "\u003cp\u003eSimilaar to IsIn but now with a type for the name\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "Has FType RLabel FType",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#Pred",
        "fct-type": "function",
        "title": "Has"
      },
      "index": {
        "description": "Similaar to IsIn but now with type for the name",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "Has",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Has",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:If",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "Qual FType -\u003e CoreExpr -\u003e CoreExpr -\u003e CoreExpr -\u003e CoreExpr",
        "fct-source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#CoreExpr",
        "fct-type": "function",
        "title": "If"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "If",
        "normalized": "Qual FType-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr",
        "package": "FerryCore",
        "partial": "If",
        "signature": "Qual FType-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:IsIn",
      "description": {
        "fct-descr": "\u003cp\u003ename \u003ccode\u003e\u003ca\u003eIsIn\u003c/a\u003e\u003c/code\u003e t -\u003e t is a record (or type variable) that contains at least a field name\n\u003c/p\u003e",
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "IsIn String FType",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#Pred",
        "fct-type": "function",
        "title": "IsIn"
      },
      "index": {
        "description": "name IsIn is record or type variable that contains at least field name",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "IsIn",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Is In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Key",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "[String] -\u003e Key",
        "fct-source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#Key",
        "fct-type": "function",
        "title": "Key"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "Key",
        "normalized": "[String]-\u003eKey",
        "package": "FerryCore",
        "partial": "Key",
        "signature": "[String]-\u003eKey"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Let",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "Qual FType -\u003e String -\u003e CoreExpr -\u003e CoreExpr -\u003e CoreExpr",
        "fct-source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#CoreExpr",
        "fct-type": "function",
        "title": "Let"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "Let",
        "normalized": "Qual FType-\u003eString-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr",
        "package": "FerryCore",
        "partial": "Let",
        "signature": "Qual FType-\u003eString-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Nil",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "Qual FType -\u003e CoreExpr",
        "fct-source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#CoreExpr",
        "fct-type": "function",
        "title": "Nil"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "Nil",
        "normalized": "Qual FType-\u003eCoreExpr",
        "package": "FerryCore",
        "partial": "Nil",
        "signature": "Qual FType-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Op",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "String -\u003e Op",
        "fct-source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#Op",
        "fct-type": "function",
        "title": "Op"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "Op",
        "normalized": "String-\u003eOp",
        "package": "FerryCore",
        "partial": "Op",
        "signature": "String-\u003eOp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:ParAbstr",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "Qual FType -\u003e [String] -\u003e CoreExpr -\u003e Param",
        "fct-source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#Param",
        "fct-type": "function",
        "title": "ParAbstr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "ParAbstr",
        "normalized": "Qual FType-\u003e[String]-\u003eCoreExpr-\u003eParam",
        "package": "FerryCore",
        "partial": "Par Abstr",
        "signature": "Qual FType-\u003e[String]-\u003eCoreExpr-\u003eParam"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:ParExpr",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "Qual FType -\u003e CoreExpr -\u003e Param",
        "fct-source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#Param",
        "fct-type": "function",
        "title": "ParExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "ParExpr",
        "normalized": "Qual FType-\u003eCoreExpr-\u003eParam",
        "package": "FerryCore",
        "partial": "Par Expr",
        "signature": "Qual FType-\u003eCoreExpr-\u003eParam"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:RGen",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "Int -\u003e RLabel",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#RLabel",
        "fct-type": "function",
        "title": "RGen"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "RGen",
        "normalized": "Int-\u003eRLabel",
        "package": "FerryCore",
        "partial": "RGen",
        "signature": "Int-\u003eRLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:RLabel",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "String -\u003e RLabel",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#RLabel",
        "fct-type": "function",
        "title": "RLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "RLabel",
        "normalized": "String-\u003eRLabel",
        "package": "FerryCore",
        "partial": "RLabel",
        "signature": "String-\u003eRLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:RVar",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "String -\u003e RLabel",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#RLabel",
        "fct-type": "function",
        "title": "RVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "RVar",
        "normalized": "String-\u003eRLabel",
        "package": "FerryCore",
        "partial": "RVar",
        "signature": "String-\u003eRLabel"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Rec",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "Qual FType -\u003e [RecElem] -\u003e CoreExpr",
        "fct-source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#CoreExpr",
        "fct-type": "function",
        "title": "Rec"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "Rec",
        "normalized": "Qual FType-\u003e[RecElem]-\u003eCoreExpr",
        "package": "FerryCore",
        "partial": "Rec",
        "signature": "Qual FType-\u003e[RecElem]-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:RecElem",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "Qual FType -\u003e String -\u003e CoreExpr -\u003e RecElem",
        "fct-source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#RecElem",
        "fct-type": "function",
        "title": "RecElem"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "RecElem",
        "normalized": "Qual FType-\u003eString-\u003eCoreExpr-\u003eRecElem",
        "package": "FerryCore",
        "partial": "Rec Elem",
        "signature": "Qual FType-\u003eString-\u003eCoreExpr-\u003eRecElem"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Table",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "Qual FType -\u003e String -\u003e [Column] -\u003e [Key] -\u003e CoreExpr",
        "fct-source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#CoreExpr",
        "fct-type": "function",
        "title": "Table"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "Table",
        "normalized": "Qual FType-\u003eString-\u003e[Column]-\u003e[Key]-\u003eCoreExpr",
        "package": "FerryCore",
        "partial": "Table",
        "signature": "Qual FType-\u003eString-\u003e[Column]-\u003e[Key]-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Tr",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "FTFn",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#FTFn",
        "fct-type": "function",
        "title": "Tr"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "Tr",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Tr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Tr-39-",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "FTFn",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#FTFn",
        "fct-type": "function",
        "title": "Tr'"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "Tr'",
        "normalized": "",
        "package": "FerryCore",
        "partial": "Tr'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Var",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "Qual FType -\u003e String -\u003e CoreExpr",
        "fct-source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#CoreExpr",
        "fct-type": "function",
        "title": "Var"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "Var",
        "normalized": "Qual FType-\u003eString-\u003eCoreExpr",
        "package": "FerryCore",
        "partial": "Var",
        "signature": "Qual FType-\u003eString-\u003eCoreExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:bool",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "FType",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#bool",
        "fct-type": "function",
        "title": "bool"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "bool",
        "normalized": "",
        "package": "FerryCore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:dot",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "a -\u003e Either FerryError String",
        "fct-source": "src/Database-Ferry-Common-Render-Dot.html#dot",
        "fct-type": "method",
        "title": "dot"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "dot",
        "normalized": "a-\u003eEither FerryError String",
        "package": "FerryCore",
        "partial": "",
        "signature": "a-\u003eEither FerryError String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:float",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "FType",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#float",
        "fct-type": "function",
        "title": "float"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "float",
        "normalized": "",
        "package": "FerryCore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:fn",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "FType -\u003e FType -\u003e FType",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#fn",
        "fct-type": "function",
        "title": "fn"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "fn",
        "normalized": "FType-\u003eFType-\u003eFType",
        "package": "FerryCore",
        "partial": "",
        "signature": "FType-\u003eFType-\u003eFType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:genT",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "Int -\u003e FType",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#genT",
        "fct-type": "function",
        "title": "genT"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "genT",
        "normalized": "Int-\u003eFType",
        "package": "FerryCore",
        "partial": "",
        "signature": "Int-\u003eFType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:int",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "FType",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#int",
        "fct-type": "function",
        "title": "int"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "int",
        "normalized": "",
        "package": "FerryCore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:list",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "FType -\u003e FType",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#list",
        "fct-type": "function",
        "title": "list"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "list",
        "normalized": "FType-\u003eFType",
        "package": "FerryCore",
        "partial": "",
        "signature": "FType-\u003eFType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:rec",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "[(RLabel, FType)] -\u003e FType",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#rec",
        "fct-type": "function",
        "title": "rec"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "rec",
        "normalized": "[(RLabel,FType)]-\u003eFType",
        "package": "FerryCore",
        "partial": "",
        "signature": "[(RLabel,FType)]-\u003eFType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:string",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "FType",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#string",
        "fct-type": "function",
        "title": "string"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "string",
        "normalized": "",
        "package": "FerryCore",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:typeOf",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "a -\u003e Qual FType",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#typeOf",
        "fct-type": "method",
        "title": "typeOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "typeOf",
        "normalized": "a-\u003eQual FType",
        "package": "FerryCore",
        "partial": "Of",
        "signature": "a-\u003eQual FType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:var",
      "description": {
        "fct-module": "Database.Ferry.SyntaxTyped",
        "fct-package": "FerryCore",
        "fct-signature": "Ident -\u003e FType",
        "fct-source": "src/Database-Ferry-TypedCore-Data-Type.html#var",
        "fct-type": "function",
        "title": "var"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Ferry SyntaxTyped",
        "module": "Database.Ferry.SyntaxTyped",
        "name": "var",
        "normalized": "Ident-\u003eFType",
        "package": "FerryCore",
        "partial": "",
        "signature": "Ident-\u003eFType"
      }
    }
  }
]