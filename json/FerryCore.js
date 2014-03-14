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
        "word": "FerryCore"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe compiler interface\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "Compiler",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Compiler.html",
          "type": "module"
        },
        "index": {
          "description": "The compiler interface",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "Compiler",
          "package": "FerryCore",
          "partial": "Compiler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "Artefact",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Compiler-Types.html#Artefact",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "Artefact",
          "package": "FerryCore",
          "partial": "Artefact",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#t:Artefact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe results of artefact generation are all collected in a reader monad\n The final result is written to disk or screen when compilation has succeeded\n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "ArtefactResult",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Compiler-Types.html#ArtefactResult",
          "type": "type"
        },
        "index": {
          "description": "The results of artefact generation are all collected in reader monad The final result is written to disk or screen when compilation has succeeded",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "ArtefactResult",
          "package": "FerryCore",
          "partial": "Artefact Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#t:ArtefactResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompilationstep datatype.\n A compilation step is a record containg a description (stageName field),\n the internal mode name (stageMode field),\n the actual stage computation (stageStep field) that transforms element of type a into a PhaseResult of type b\n and stage artefact generators, a list of function generating artefacts (stageArtefacts field).\n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "CompilationStep",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Compiler-Types.html#CompilationStep",
          "type": "data"
        },
        "index": {
          "description": "Compilationstep datatype compilation step is record containg description stageName field the internal mode name stageMode field the actual stage computation stageStep field that transforms element of type into PhaseResult of type and stage artefact generators list of function generating artefacts stageArtefacts field",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "CompilationStep",
          "package": "FerryCore",
          "partial": "Compilation Step",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#t:CompilationStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe config datatype is used to store program flags given by the user \n   The compiler can be put in a \u003ccode\u003e\u003ca\u003eMode\u003c/a\u003e\u003c/code\u003e that determines what sort of\n   result the compilation process will result in.\n   The \u003ccode\u003e\u003ca\u003eInput\u003c/a\u003e\u003c/code\u003e element is set to specify whether a file should be compiled or \n   input from the stdin\n   The debug component is set to switch on debugging mode, debugging mode\n   results in log information on the stdin and possibly extra compiler artifacts.\n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "Config",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Compiler-Types.html#Config",
          "type": "data"
        },
        "index": {
          "description": "The config datatype is used to store program flags given by the user The compiler can be put in Mode that determines what sort of result the compilation process will result in The Input element is set to specify whether file should be compiled or input from the stdin The debug component is set to switch on debugging mode debugging mode results in log information on the stdin and possibly extra compiler artifacts",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "Config",
          "package": "FerryCore",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe FerryError datatype represents errors that occur during compilation\n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "FerryError",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Compiler-Error-Error.html#FerryError",
          "type": "data"
        },
        "index": {
          "description": "The FerryError datatype represents errors that occur during compilation",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "FerryError",
          "package": "FerryCore",
          "partial": "Ferry Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#t:FerryError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArtefact file, the first element represents the output file, in case of nothing output is given\n on stdout. The second component is the file content.\n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "File",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Compiler-Types.html#File",
          "type": "type"
        },
        "index": {
          "description": "Artefact file the first element represents the output file in case of nothing output is given on stdout The second component is the file content",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "File",
          "package": "FerryCore",
          "partial": "File",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#t:File"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of an artefact file\n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "FileName",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Compiler-Types.html#FileName",
          "type": "type"
        },
        "index": {
          "description": "Name of an artefact file",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "FileName",
          "package": "FerryCore",
          "partial": "File Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#t:FileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe input mode determines whether the source program is given through a file or via stdin\n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "Input",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Compiler-Types.html#Input",
          "type": "data"
        },
        "index": {
          "description": "The input mode determines whether the source program is given through file or via stdin",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "Input",
          "package": "FerryCore",
          "partial": "Input",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#t:Input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe compilation log is just a string\n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "Log",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Compiler-Types.html#Log",
          "type": "type"
        },
        "index": {
          "description": "The compilation log is just string",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "Log",
          "package": "FerryCore",
          "partial": "Log",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#t:Log"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe modes that are supported by the compiler.\n   run ferryc -h to see a list of all options\n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "Mode",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Compiler-Types.html#Mode",
          "type": "data"
        },
        "index": {
          "description": "The modes that are supported by the compiler run ferryc to see list of all options",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "Mode",
          "package": "FerryCore",
          "partial": "Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#t:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType synonym for a stage name type\n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "Name",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Compiler-Types.html#Name",
          "type": "type"
        },
        "index": {
          "description": "Type synonym for stage name type",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "Name",
          "package": "FerryCore",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult of a compilation phase.\n The error monad is used in case something went wrong during compilation\n The first writer monad is used for logging purposes.\n The second writer monad is used to store the artefacts generated by the compiler\n And the reader monad stores the compiler configuration              \n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "PhaseResult",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Compiler-Types.html#PhaseResult",
          "type": "type"
        },
        "index": {
          "description": "Result of compilation phase The error monad is used in case something went wrong during compilation The first writer monad is used for logging purposes The second writer monad is used to store the artefacts generated by the compiler And the reader monad stores the compiler configuration",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "PhaseResult",
          "package": "FerryCore",
          "partial": "Phase Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#t:PhaseResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery stage has a stage number\n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "Stage",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Compiler-Types.html#Stage",
          "type": "type"
        },
        "index": {
          "description": "Every stage has stage number",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "Stage",
          "package": "FerryCore",
          "partial": "Stage",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#t:Stage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "Algebra",
          "package": "FerryCore",
          "signature": "Algebra",
          "source": "src/Database-Ferry-Compiler-Types.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "Algebra",
          "package": "FerryCore",
          "partial": "Algebra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:Algebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "AlgebraXML",
          "package": "FerryCore",
          "signature": "AlgebraXML",
          "source": "src/Database-Ferry-Compiler-Types.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "AlgebraXML",
          "package": "FerryCore",
          "partial": "Algebra XML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:AlgebraXML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArgument mode, the program is given as input directly\n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "Arg",
          "package": "FerryCore",
          "signature": "Arg",
          "source": "src/Database-Ferry-Compiler-Types.html#Input",
          "type": "function"
        },
        "index": {
          "description": "Argument mode the program is given as input directly",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "Arg",
          "package": "FerryCore",
          "partial": "Arg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:Arg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "Boxing",
          "package": "FerryCore",
          "signature": "Boxing",
          "source": "src/Database-Ferry-Compiler-Types.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "Boxing",
          "package": "FerryCore",
          "partial": "Boxing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:Boxing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "ClassAlreadyDefinedError",
          "package": "FerryCore",
          "signature": "ClassAlreadyDefinedError String",
          "source": "src/Database-Ferry-Compiler-Error-Error.html#FerryError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "ClassAlreadyDefinedError",
          "package": "FerryCore",
          "partial": "Class Already Defined Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:ClassAlreadyDefinedError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "ClassNotDefined",
          "package": "FerryCore",
          "signature": "ClassNotDefined String",
          "source": "src/Database-Ferry-Compiler-Error-Error.html#FerryError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "ClassNotDefined",
          "package": "FerryCore",
          "partial": "Class Not Defined",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:ClassNotDefined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "CompilationStep",
          "package": "FerryCore",
          "signature": "CompilationStep",
          "source": "src/Database-Ferry-Compiler-Types.html#CompilationStep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "CompilationStep",
          "package": "FerryCore",
          "partial": "Compilation Step",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:CompilationStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "Config",
          "package": "FerryCore",
          "signature": "Config",
          "source": "src/Database-Ferry-Compiler-Types.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "Config",
          "package": "FerryCore",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "DotAST",
          "package": "FerryCore",
          "signature": "DotAST",
          "source": "src/Database-Ferry-Compiler-Types.html#Artefact",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "DotAST",
          "package": "FerryCore",
          "partial": "Dot AST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:DotAST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "DotAlg",
          "package": "FerryCore",
          "signature": "DotAlg",
          "source": "src/Database-Ferry-Compiler-Types.html#Artefact",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "DotAlg",
          "package": "FerryCore",
          "partial": "Dot Alg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:DotAlg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "DotBox",
          "package": "FerryCore",
          "signature": "DotBox",
          "source": "src/Database-Ferry-Compiler-Types.html#Artefact",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "DotBox",
          "package": "FerryCore",
          "partial": "Dot Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:DotBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "DotCore",
          "package": "FerryCore",
          "signature": "DotCore",
          "source": "src/Database-Ferry-Compiler-Types.html#Artefact",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "DotCore",
          "package": "FerryCore",
          "partial": "Dot Core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:DotCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "DotRewrite",
          "package": "FerryCore",
          "signature": "DotRewrite",
          "source": "src/Database-Ferry-Compiler-Types.html#Artefact",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "DotRewrite",
          "package": "FerryCore",
          "partial": "Dot Rewrite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:DotRewrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "DotType",
          "package": "FerryCore",
          "signature": "DotType",
          "source": "src/Database-Ferry-Compiler-Types.html#Artefact",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "DotType",
          "package": "FerryCore",
          "partial": "Dot Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:DotType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEcho mode prints the given input to the console\n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "Echo",
          "package": "FerryCore",
          "signature": "Echo",
          "source": "src/Database-Ferry-Compiler-Types.html#Artefact",
          "type": "function"
        },
        "index": {
          "description": "Echo mode prints the given input to the console",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "Echo",
          "package": "FerryCore",
          "partial": "Echo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:Echo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile mode, the program is read from a file \n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "File",
          "package": "FerryCore",
          "signature": "File String",
          "source": "src/Database-Ferry-Compiler-Types.html#Input",
          "type": "function"
        },
        "index": {
          "description": "File mode the program is read from file",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "File",
          "package": "FerryCore",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:File"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "NoSuchFile",
          "package": "FerryCore",
          "signature": "NoSuchFile String",
          "source": "src/Database-Ferry-Compiler-Error-Error.html#FerryError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "NoSuchFile",
          "package": "FerryCore",
          "partial": "No Such File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:NoSuchFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "Normalise",
          "package": "FerryCore",
          "signature": "Normalise",
          "source": "src/Database-Ferry-Compiler-Types.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "Normalise",
          "package": "FerryCore",
          "partial": "Normalise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:Normalise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "NotARecordType",
          "package": "FerryCore",
          "signature": "NotARecordType FType",
          "source": "src/Database-Ferry-Compiler-Error-Error.html#FerryError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "NotARecordType",
          "package": "FerryCore",
          "partial": "Not ARecord Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:NotARecordType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "OpRewrite",
          "package": "FerryCore",
          "signature": "OpRewrite",
          "source": "src/Database-Ferry-Compiler-Types.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "OpRewrite",
          "package": "FerryCore",
          "partial": "Op Rewrite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:OpRewrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse mode will stop the compiler after the parsing phase\n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "Parse",
          "package": "FerryCore",
          "signature": "Parse",
          "source": "src/Database-Ferry-Compiler-Types.html#Mode",
          "type": "function"
        },
        "index": {
          "description": "Parse mode will stop the compiler after the parsing phase",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "Parse",
          "package": "FerryCore",
          "partial": "Parse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:Parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "ParserError",
          "package": "FerryCore",
          "signature": "ParserError ParseError",
          "source": "src/Database-Ferry-Compiler-Error-Error.html#FerryError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "ParserError",
          "package": "FerryCore",
          "partial": "Parser Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:ParserError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty mode parses the given input and pretty prints the result\n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "PrettyAST",
          "package": "FerryCore",
          "signature": "PrettyAST",
          "source": "src/Database-Ferry-Compiler-Types.html#Artefact",
          "type": "function"
        },
        "index": {
          "description": "Pretty mode parses the given input and pretty prints the result",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "PrettyAST",
          "package": "FerryCore",
          "partial": "Pretty AST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:PrettyAST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "PrettyCore",
          "package": "FerryCore",
          "signature": "PrettyCore",
          "source": "src/Database-Ferry-Compiler-Types.html#Artefact",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "PrettyCore",
          "package": "FerryCore",
          "partial": "Pretty Core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:PrettyCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "PrettyNormalAST",
          "package": "FerryCore",
          "signature": "PrettyNormalAST",
          "source": "src/Database-Ferry-Compiler-Types.html#Artefact",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "PrettyNormalAST",
          "package": "FerryCore",
          "partial": "Pretty Normal AST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:PrettyNormalAST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "ProcessComplete",
          "package": "FerryCore",
          "signature": "ProcessComplete",
          "source": "src/Database-Ferry-Compiler-Error-Error.html#FerryError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "ProcessComplete",
          "package": "FerryCore",
          "partial": "Process Complete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:ProcessComplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "Read",
          "package": "FerryCore",
          "signature": "Read",
          "source": "src/Database-Ferry-Compiler-Types.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "Read",
          "package": "FerryCore",
          "partial": "Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:Read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "RecordDuplicateFields",
          "package": "FerryCore",
          "signature": "RecordDuplicateFields (Maybe String) [(RLabel, FType)]",
          "source": "src/Database-Ferry-Compiler-Error-Error.html#FerryError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "RecordDuplicateFields",
          "normalized": "RecordDuplicateFields(Maybe String)[(RLabel,FType)]",
          "package": "FerryCore",
          "partial": "Record Duplicate Fields",
          "signature": "RecordDuplicateFields(Maybe String)[(RLabel,FType)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:RecordDuplicateFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "RecordWithoutI",
          "package": "FerryCore",
          "signature": "RecordWithoutI FType String",
          "source": "src/Database-Ferry-Compiler-Error-Error.html#FerryError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "RecordWithoutI",
          "package": "FerryCore",
          "partial": "Record Without",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:RecordWithoutI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "SuperClassNotDefined",
          "package": "FerryCore",
          "signature": "SuperClassNotDefined String [String]",
          "source": "src/Database-Ferry-Compiler-Error-Error.html#FerryError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "SuperClassNotDefined",
          "normalized": "SuperClassNotDefined String[String]",
          "package": "FerryCore",
          "partial": "Super Class Not Defined",
          "signature": "SuperClassNotDefined String[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:SuperClassNotDefined"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "Transform",
          "package": "FerryCore",
          "signature": "Transform",
          "source": "src/Database-Ferry-Compiler-Types.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "Transform",
          "package": "FerryCore",
          "partial": "Transform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:Transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "Type",
          "package": "FerryCore",
          "signature": "Type",
          "source": "src/Database-Ferry-Compiler-Types.html#Artefact",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "Type",
          "package": "FerryCore",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "TypeInfer",
          "package": "FerryCore",
          "signature": "TypeInfer",
          "source": "src/Database-Ferry-Compiler-Types.html#Mode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "TypeInfer",
          "package": "FerryCore",
          "partial": "Type Infer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:TypeInfer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "UnificationError",
          "package": "FerryCore",
          "signature": "UnificationError FType FType",
          "source": "src/Database-Ferry-Compiler-Error-Error.html#FerryError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "UnificationError",
          "package": "FerryCore",
          "partial": "Unification Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:UnificationError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "UnificationFail",
          "package": "FerryCore",
          "signature": "UnificationFail RLabel RLabel",
          "source": "src/Database-Ferry-Compiler-Error-Error.html#FerryError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "UnificationFail",
          "package": "FerryCore",
          "partial": "Unification Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:UnificationFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "UnificationOfRecordFieldsFailed",
          "package": "FerryCore",
          "signature": "UnificationOfRecordFieldsFailed RLabel RLabel",
          "source": "src/Database-Ferry-Compiler-Error-Error.html#FerryError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "UnificationOfRecordFieldsFailed",
          "package": "FerryCore",
          "partial": "Unification Of Record Fields Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:UnificationOfRecordFieldsFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "UnificationRecError",
          "package": "FerryCore",
          "signature": "UnificationRecError [(RLabel, FType)] [(RLabel, FType)]",
          "source": "src/Database-Ferry-Compiler-Error-Error.html#FerryError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "UnificationRecError",
          "normalized": "UnificationRecError[(RLabel,FType)][(RLabel,FType)]",
          "package": "FerryCore",
          "partial": "Unification Rec Error",
          "signature": "UnificationRecError[(RLabel,FType)][(RLabel,FType)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:UnificationRecError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "XML",
          "package": "FerryCore",
          "signature": "XML",
          "source": "src/Database-Ferry-Compiler-Types.html#Artefact",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "XML",
          "package": "FerryCore",
          "partial": "XML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:XML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd the given file with contents to the phaseresult.\n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "addFile",
          "package": "FerryCore",
          "signature": "Maybe FileName -\u003e String -\u003e PhaseResult ()",
          "source": "src/Database-Ferry-Compiler-Types.html#addFile",
          "type": "function"
        },
        "index": {
          "description": "Add the given file with contents to the phaseresult",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "addFile",
          "normalized": "Maybe FileName-\u003eString-\u003ePhaseResult()",
          "package": "FerryCore",
          "partial": "File",
          "signature": "Maybe FileName-\u003eString-\u003ePhaseResult()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:addFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "algebraPhase",
          "package": "FerryCore",
          "signature": "CoreExpr -\u003e PhaseResult (Qual FType, AlgPlan AlgRes)",
          "source": "src/Database-Ferry-Compiler-Stages-ToAlgebraStage.html#algebraPhase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "algebraPhase",
          "normalized": "CoreExpr-\u003ePhaseResult(Qual FType,AlgPlan AlgRes)",
          "package": "FerryCore",
          "partial": "Phase",
          "signature": "CoreExpr-\u003ePhaseResult(Qual FType,AlgPlan AlgRes)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:algebraPhase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "allArtefacts",
          "package": "FerryCore",
          "signature": "[Artefact]",
          "source": "src/Database-Ferry-Compiler-Types.html#allArtefacts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "allArtefacts",
          "normalized": "[Artefact]",
          "package": "FerryCore",
          "partial": "Artefacts",
          "signature": "[Artefact]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:allArtefacts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "artefact",
          "package": "FerryCore",
          "signature": "[Artefact]",
          "source": "src/Database-Ferry-Compiler-Types.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "artefact",
          "normalized": "[Artefact]",
          "package": "FerryCore",
          "signature": "[Artefact]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:artefact"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift the result of generating an artefact into the overall phase result type\n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "artefactToPhaseResult",
          "package": "FerryCore",
          "signature": "ArtefactResult -\u003e PhaseResult String",
          "source": "src/Database-Ferry-Compiler-Types.html#artefactToPhaseResult",
          "type": "function"
        },
        "index": {
          "description": "Lift the result of generating an artefact into the overall phase result type",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "artefactToPhaseResult",
          "normalized": "ArtefactResult-\u003ePhaseResult String",
          "package": "FerryCore",
          "partial": "To Phase Result",
          "signature": "ArtefactResult-\u003ePhaseResult String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:artefactToPhaseResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe compiler pipeline. The given Core AST is transformed dependent on the configuration of the Phaseresult\n   monad.\n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "backEndPipeline",
          "package": "FerryCore",
          "signature": "CoreExpr -\u003e PhaseResult ()",
          "source": "src/Database-Ferry-Compiler-Pipeline.html#backEndPipeline",
          "type": "function"
        },
        "index": {
          "description": "The compiler pipeline The given Core AST is transformed dependent on the configuration of the Phaseresult monad",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "backEndPipeline",
          "normalized": "CoreExpr-\u003ePhaseResult()",
          "package": "FerryCore",
          "partial": "End Pipeline",
          "signature": "CoreExpr-\u003ePhaseResult()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:backEndPipeline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe compiler pipeline. Some tools might already provide a typed AST, is the same as the normal backEndPipeline\n without type inferencing.\n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "backEndPipeline'",
          "package": "FerryCore",
          "signature": "CoreExpr -\u003e PhaseResult ()",
          "source": "src/Database-Ferry-Compiler-Pipeline.html#backEndPipeline%27",
          "type": "function"
        },
        "index": {
          "description": "The compiler pipeline Some tools might already provide typed AST is the same as the normal backEndPipeline without type inferencing",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "backEndPipeline'",
          "normalized": "CoreExpr-\u003ePhaseResult()",
          "package": "FerryCore",
          "partial": "End Pipeline'",
          "signature": "CoreExpr-\u003ePhaseResult()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:backEndPipeline-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "boxingPhase",
          "package": "FerryCore",
          "signature": "CoreExpr -\u003e PhaseResult CoreExpr",
          "source": "src/Database-Ferry-Compiler-Stages-BoxingStage.html#boxingPhase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "boxingPhase",
          "normalized": "CoreExpr-\u003ePhaseResult CoreExpr",
          "package": "FerryCore",
          "partial": "Phase",
          "signature": "CoreExpr-\u003ePhaseResult CoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:boxingPhase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "debug",
          "package": "FerryCore",
          "signature": "Bool",
          "source": "src/Database-Ferry-Compiler-Types.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "debug",
          "package": "FerryCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default configuration for the compiler\n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "defaultConfig",
          "package": "FerryCore",
          "signature": "Config",
          "source": "src/Database-Ferry-Compiler-Types.html#defaultConfig",
          "type": "function"
        },
        "index": {
          "description": "The default configuration for the compiler",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "defaultConfig",
          "package": "FerryCore",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:defaultConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinal log message when end of compilation is reached\n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "endProcess",
          "package": "FerryCore",
          "signature": "PhaseResult b",
          "source": "src/Database-Ferry-Compiler-Types.html#endProcess",
          "type": "function"
        },
        "index": {
          "description": "Final log message when end of compilation is reached",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "endProcess",
          "package": "FerryCore",
          "partial": "Process",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:endProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a compilation step to an expression of type a. The result of type b is returned in a phaseresult monad\n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "executeStep",
          "package": "FerryCore",
          "signature": "CompilationStep a b -\u003e a -\u003e PhaseResult b",
          "source": "src/Database-Ferry-Compiler-ExecuteStep.html#executeStep",
          "type": "function"
        },
        "index": {
          "description": "Apply compilation step to an expression of type The result of type is returned in phaseresult monad",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "executeStep",
          "normalized": "CompilationStep a b-\u003ea-\u003ePhaseResult b",
          "package": "FerryCore",
          "partial": "Step",
          "signature": "CompilationStep a b-\u003ea-\u003ePhaseResult b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:executeStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the compiler configuration\n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "getConfig",
          "package": "FerryCore",
          "signature": "PhaseResult Config",
          "source": "src/Database-Ferry-Compiler-Types.html#getConfig",
          "type": "function"
        },
        "index": {
          "description": "Get the compiler configuration",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "getConfig",
          "package": "FerryCore",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:getConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the artefacts from the phaseresult            \n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "getFiles",
          "package": "FerryCore",
          "signature": "Config -\u003e PhaseResult r -\u003e [File]",
          "source": "src/Database-Ferry-Compiler-Types.html#getFiles",
          "type": "function"
        },
        "index": {
          "description": "Get the artefacts from the phaseresult",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "getFiles",
          "normalized": "Config-\u003ePhaseResult a-\u003e[File]",
          "package": "FerryCore",
          "partial": "Files",
          "signature": "Config-\u003ePhaseResult r-\u003e[File]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:getFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current log from a phaseresult\n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "getLog",
          "package": "FerryCore",
          "signature": "Config -\u003e PhaseResult r -\u003e Log",
          "source": "src/Database-Ferry-Compiler-Types.html#getLog",
          "type": "function"
        },
        "index": {
          "description": "Get the current log from phaseresult",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "getLog",
          "normalized": "Config-\u003ePhaseResult a-\u003eLog",
          "package": "FerryCore",
          "partial": "Log",
          "signature": "Config-\u003ePhaseResult r-\u003eLog",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:getLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint an error message    \n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "handleError",
          "package": "FerryCore",
          "signature": "FerryError -\u003e IO ()",
          "source": "src/Database-Ferry-Compiler-Error-Error.html#handleError",
          "type": "function"
        },
        "index": {
          "description": "Print an error message",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "handleError",
          "normalized": "FerryError-\u003eIO()",
          "package": "FerryCore",
          "partial": "Error",
          "signature": "FerryError-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:handleError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "input",
          "package": "FerryCore",
          "signature": "Input",
          "source": "src/Database-Ferry-Compiler-Types.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "input",
          "package": "FerryCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSeperator line for logging\n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "line",
          "package": "FerryCore",
          "signature": "String",
          "source": "src/Database-Ferry-Compiler-Types.html#line",
          "type": "function"
        },
        "index": {
          "description": "Seperator line for logging",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "line",
          "package": "FerryCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "logFile",
          "package": "FerryCore",
          "signature": "Maybe String",
          "source": "src/Database-Ferry-Compiler-Types.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "logFile",
          "package": "FerryCore",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:logFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog the message t\n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "logMsg",
          "package": "FerryCore",
          "signature": "t -\u003e m ()",
          "source": "src/Database-Ferry-Compiler-Types.html#logMsg",
          "type": "function"
        },
        "index": {
          "description": "Log the message",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "logMsg",
          "normalized": "a-\u003eb()",
          "package": "FerryCore",
          "partial": "Msg",
          "signature": "t-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:logMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "mode",
          "package": "FerryCore",
          "signature": "Mode",
          "source": "src/Database-Ferry-Compiler-Types.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "mode",
          "package": "FerryCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow an error\n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "newError",
          "package": "FerryCore",
          "signature": "FerryError -\u003e PhaseResult r",
          "source": "src/Database-Ferry-Compiler-Types.html#newError",
          "type": "function"
        },
        "index": {
          "description": "Throw an error",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "newError",
          "normalized": "FerryError-\u003ePhaseResult a",
          "package": "FerryCore",
          "partial": "Error",
          "signature": "FerryError-\u003ePhaseResult r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:newError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "output",
          "package": "FerryCore",
          "signature": "Maybe String",
          "source": "src/Database-Ferry-Compiler-Types.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "output",
          "package": "FerryCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "rewritePhase",
          "package": "FerryCore",
          "signature": "CoreExpr -\u003e PhaseResult CoreExpr",
          "source": "src/Database-Ferry-Compiler-Stages-RewriteStage.html#rewritePhase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "rewritePhase",
          "normalized": "CoreExpr-\u003ePhaseResult CoreExpr",
          "package": "FerryCore",
          "partial": "Phase",
          "signature": "CoreExpr-\u003ePhaseResult CoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:rewritePhase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a phaseresult under a given configuration,, resulting in triple of:\n 1.) An error or the result\n 2.) The compilation log\n 3.) The generated artefacts\n\u003c/p\u003e",
          "module": "Database.Ferry.Compiler",
          "name": "runPhase",
          "package": "FerryCore",
          "signature": "Config -\u003e PhaseResult r -\u003e (Either FerryError r, Log, [File])",
          "source": "src/Database-Ferry-Compiler-Types.html#runPhase",
          "type": "function"
        },
        "index": {
          "description": "Execute phaseresult under given configuration resulting in triple of An error or the result The compilation log The generated artefacts",
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "runPhase",
          "normalized": "Config-\u003ePhaseResult a-\u003e(Either FerryError a,Log,[File])",
          "package": "FerryCore",
          "partial": "Phase",
          "signature": "Config-\u003ePhaseResult r-\u003e(Either FerryError r,Log,[File])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:runPhase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "stageArtefacts",
          "package": "FerryCore",
          "signature": "[(Artefact, String, b -\u003e ArtefactResult)]",
          "source": "src/Database-Ferry-Compiler-Types.html#CompilationStep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "stageArtefacts",
          "normalized": "[(Artefact,String,a-\u003eArtefactResult)]",
          "package": "FerryCore",
          "partial": "Artefacts",
          "signature": "[(Artefact,String,b-\u003eArtefactResult)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:stageArtefacts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "stageMode",
          "package": "FerryCore",
          "signature": "Mode",
          "source": "src/Database-Ferry-Compiler-Types.html#CompilationStep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "stageMode",
          "package": "FerryCore",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:stageMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "stageName",
          "package": "FerryCore",
          "signature": "Name",
          "source": "src/Database-Ferry-Compiler-Types.html#CompilationStep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "stageName",
          "package": "FerryCore",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:stageName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "stageStep",
          "package": "FerryCore",
          "signature": "a -\u003e PhaseResult b",
          "source": "src/Database-Ferry-Compiler-Types.html#CompilationStep",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "stageStep",
          "normalized": "a-\u003ePhaseResult b",
          "package": "FerryCore",
          "partial": "Step",
          "signature": "a-\u003ePhaseResult b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:stageStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "typeInferPhase",
          "package": "FerryCore",
          "signature": "CoreExpr -\u003e PhaseResult CoreExpr",
          "source": "src/Database-Ferry-Compiler-Stages-TypeInferStage.html#typeInferPhase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "typeInferPhase",
          "normalized": "CoreExpr-\u003ePhaseResult CoreExpr",
          "package": "FerryCore",
          "partial": "Infer Phase",
          "signature": "CoreExpr-\u003ePhaseResult CoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:typeInferPhase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "typedCoreToAlgebra",
          "package": "FerryCore",
          "signature": "CoreExpr -\u003e String",
          "source": "src/Database-Ferry-Compiler-Transform.html#typedCoreToAlgebra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "typedCoreToAlgebra",
          "normalized": "CoreExpr-\u003eString",
          "package": "FerryCore",
          "partial": "Core To Algebra",
          "signature": "CoreExpr-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:typedCoreToAlgebra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Compiler",
          "name": "xmlPhase",
          "package": "FerryCore",
          "signature": "(Qual FType, AlgPlan AlgRes) -\u003e PhaseResult String",
          "source": "src/Database-Ferry-Compiler-Stages-AlgebraToXMLStage.html#xmlPhase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Compiler",
          "module": "Database.Ferry.Compiler",
          "name": "xmlPhase",
          "normalized": "(Qual FType,AlgPlan AlgRes)-\u003ePhaseResult String",
          "package": "FerryCore",
          "partial": "Phase",
          "signature": "(Qual FType,AlgPlan AlgRes)-\u003ePhaseResult String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Compiler.html#v:xmlPhase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEverything related to untyped core \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Ferry.Syntax",
          "name": "Syntax",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Syntax.html",
          "type": "module"
        },
        "index": {
          "description": "Everything related to untyped core",
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "Syntax",
          "package": "FerryCore",
          "partial": "Syntax",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatabase table column\n\u003c/p\u003e",
          "module": "Database.Ferry.Syntax",
          "name": "Column",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Core-Data-Core.html#Column",
          "type": "data"
        },
        "index": {
          "description": "Database table column",
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "Column",
          "package": "FerryCore",
          "partial": "Column",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#t:Column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant values\n\u003c/p\u003e",
          "module": "Database.Ferry.Syntax",
          "name": "Const",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Common-Data-Base.html#Const",
          "type": "data"
        },
        "index": {
          "description": "Constant values",
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "Const",
          "package": "FerryCore",
          "partial": "Const",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#t:Const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatatype for building untyped core ASTs\n\u003c/p\u003e",
          "module": "Database.Ferry.Syntax",
          "name": "CoreExpr",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Core-Data-Core.html#CoreExpr",
          "type": "data"
        },
        "index": {
          "description": "Datatype for building untyped core ASTs",
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "CoreExpr",
          "package": "FerryCore",
          "partial": "Core Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#t:CoreExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for transforming values into either an error or a string representing a dot file.\n\u003c/p\u003e",
          "module": "Database.Ferry.Syntax",
          "name": "Dotify",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Common-Render-Dot.html#Dotify",
          "type": "class"
        },
        "index": {
          "description": "Class for transforming values into either an error or string representing dot file",
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "Dotify",
          "package": "FerryCore",
          "partial": "Dotify",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#t:Dotify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn identifier is represented by a string\n\u003c/p\u003e",
          "module": "Database.Ferry.Syntax",
          "name": "Ident",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Core-Data-Core.html#Ident",
          "type": "type"
        },
        "index": {
          "description": "An identifier is represented by string",
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "Ident",
          "package": "FerryCore",
          "partial": "Ident",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#t:Ident"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifiers are represented as strings    \n\u003c/p\u003e",
          "module": "Database.Ferry.Syntax",
          "name": "Identifier",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Common-Data-Base.html#Identifier",
          "type": "type"
        },
        "index": {
          "description": "Identifiers are represented as strings",
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "Identifier",
          "package": "FerryCore",
          "partial": "Identifier",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#t:Identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatabase table key    \n\u003c/p\u003e",
          "module": "Database.Ferry.Syntax",
          "name": "Key",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Core-Data-Core.html#Key",
          "type": "data"
        },
        "index": {
          "description": "Database table key",
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "Key",
          "package": "FerryCore",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperator constructor\n\u003c/p\u003e",
          "module": "Database.Ferry.Syntax",
          "name": "Op",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Core-Data-Core.html#Op",
          "type": "data"
        },
        "index": {
          "description": "Operator constructor",
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "Op",
          "package": "FerryCore",
          "partial": "Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#t:Op"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction arguments\n In future, that is when defunctionalisation is implemented function arguments should just be expressions.\n\u003c/p\u003e",
          "module": "Database.Ferry.Syntax",
          "name": "Param",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Core-Data-Core.html#Param",
          "type": "data"
        },
        "index": {
          "description": "Function arguments In future that is when defunctionalisation is implemented function arguments should just be expressions",
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "Param",
          "package": "FerryCore",
          "partial": "Param",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#t:Param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for pretty printing a value of a.\n\u003c/p\u003e",
          "module": "Database.Ferry.Syntax",
          "name": "Pretty",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Common-Render-Pretty.html#Pretty",
          "type": "class"
        },
        "index": {
          "description": "Class for pretty printing value of",
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "Pretty",
          "package": "FerryCore",
          "partial": "Pretty",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#t:Pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecord elements\n\u003c/p\u003e",
          "module": "Database.Ferry.Syntax",
          "name": "RecElem",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Core-Data-Core.html#RecElem",
          "type": "data"
        },
        "index": {
          "description": "Record elements",
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "RecElem",
          "package": "FerryCore",
          "partial": "Rec Elem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#t:RecElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatabase column type    \n\u003c/p\u003e",
          "module": "Database.Ferry.Syntax",
          "name": "Type",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Core-Data-Core.html#Type",
          "type": "data"
        },
        "index": {
          "description": "Database column type",
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "Type",
          "package": "FerryCore",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for extracting all variables that occur in a value of type a\n\u003c/p\u003e",
          "module": "Database.Ferry.Syntax",
          "name": "VarContainer",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Common-Data-Base.html#VarContainer",
          "type": "class"
        },
        "index": {
          "description": "Type class for extracting all variables that occur in value of type",
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "VarContainer",
          "package": "FerryCore",
          "partial": "Var Container",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#t:VarContainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Syntax",
          "name": "App",
          "package": "FerryCore",
          "signature": "CoreExpr -\u003e Param -\u003e CoreExpr",
          "source": "src/Database-Ferry-Core-Data-Core.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "App",
          "normalized": "CoreExpr-\u003eParam-\u003eCoreExpr",
          "package": "FerryCore",
          "partial": "App",
          "signature": "CoreExpr-\u003eParam-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:App"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Syntax",
          "name": "BinOp",
          "package": "FerryCore",
          "signature": "Op -\u003e CoreExpr -\u003e CoreExpr -\u003e CoreExpr",
          "source": "src/Database-Ferry-Core-Data-Core.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "BinOp",
          "normalized": "Op-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr",
          "package": "FerryCore",
          "partial": "Bin Op",
          "signature": "Op-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:BinOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Ferry.Syntax\",\"Database.Ferry.SyntaxTyped\"]",
          "name": "CBool",
          "package": "FerryCore",
          "signature": "CBool Bool",
          "source": "src/Database-Ferry-Common-Data-Base.html#Const",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:CBool\",\"http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:CBool\"]"
        },
        "index": {
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "CBool",
          "package": "FerryCore",
          "partial": "CBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:CBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Ferry.Syntax\",\"Database.Ferry.SyntaxTyped\"]",
          "name": "CFloat",
          "package": "FerryCore",
          "signature": "CFloat Double",
          "source": "src/Database-Ferry-Common-Data-Base.html#Const",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:CFloat\",\"http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:CFloat\"]"
        },
        "index": {
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "CFloat",
          "package": "FerryCore",
          "partial": "CFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:CFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Ferry.Syntax\",\"Database.Ferry.SyntaxTyped\"]",
          "name": "CInt",
          "package": "FerryCore",
          "signature": "CInt Integer",
          "source": "src/Database-Ferry-Common-Data-Base.html#Const",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:CInt\",\"http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:CInt\"]"
        },
        "index": {
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "CInt",
          "package": "FerryCore",
          "partial": "CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:CInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Ferry.Syntax\",\"Database.Ferry.SyntaxTyped\"]",
          "name": "CString",
          "package": "FerryCore",
          "signature": "CString String",
          "source": "src/Database-Ferry-Common-Data-Base.html#Const",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:CString\",\"http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:CString\"]"
        },
        "index": {
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "CString",
          "package": "FerryCore",
          "partial": "CString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:CString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Database.Ferry.Syntax\",\"Database.Ferry.SyntaxTyped\"]",
          "name": "CUnit",
          "package": "FerryCore",
          "signature": "CUnit",
          "source": "src/Database-Ferry-Common-Data-Base.html#Const",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:CUnit\",\"http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:CUnit\"]"
        },
        "index": {
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "CUnit",
          "package": "FerryCore",
          "partial": "CUnit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:CUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Syntax",
          "name": "Column",
          "package": "FerryCore",
          "signature": "String -\u003e Type -\u003e Column",
          "source": "src/Database-Ferry-Core-Data-Core.html#Column",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "Column",
          "normalized": "String-\u003eType-\u003eColumn",
          "package": "FerryCore",
          "partial": "Column",
          "signature": "String-\u003eType-\u003eColumn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:Column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Syntax",
          "name": "Cons",
          "package": "FerryCore",
          "signature": "CoreExpr -\u003e CoreExpr -\u003e CoreExpr",
          "source": "src/Database-Ferry-Core-Data-Core.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "Cons",
          "normalized": "CoreExpr-\u003eCoreExpr-\u003eCoreExpr",
          "package": "FerryCore",
          "partial": "Cons",
          "signature": "CoreExpr-\u003eCoreExpr-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Syntax",
          "name": "Constant",
          "package": "FerryCore",
          "signature": "Const -\u003e CoreExpr",
          "source": "src/Database-Ferry-Core-Data-Core.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "Constant",
          "normalized": "Const-\u003eCoreExpr",
          "package": "FerryCore",
          "partial": "Constant",
          "signature": "Const-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:Constant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Syntax",
          "name": "Elem",
          "package": "FerryCore",
          "signature": "CoreExpr -\u003e String -\u003e CoreExpr",
          "source": "src/Database-Ferry-Core-Data-Core.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "Elem",
          "normalized": "CoreExpr-\u003eString-\u003eCoreExpr",
          "package": "FerryCore",
          "partial": "Elem",
          "signature": "CoreExpr-\u003eString-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:Elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Syntax",
          "name": "If",
          "package": "FerryCore",
          "signature": "CoreExpr -\u003e CoreExpr -\u003e CoreExpr -\u003e CoreExpr",
          "source": "src/Database-Ferry-Core-Data-Core.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "If",
          "normalized": "CoreExpr-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr",
          "package": "FerryCore",
          "partial": "If",
          "signature": "CoreExpr-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:If"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Syntax",
          "name": "Key",
          "package": "FerryCore",
          "signature": "[String] -\u003e Key",
          "source": "src/Database-Ferry-Core-Data-Core.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "Key",
          "normalized": "[String]-\u003eKey",
          "package": "FerryCore",
          "partial": "Key",
          "signature": "[String]-\u003eKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Syntax",
          "name": "Let",
          "package": "FerryCore",
          "signature": "String -\u003e CoreExpr -\u003e CoreExpr -\u003e CoreExpr",
          "source": "src/Database-Ferry-Core-Data-Core.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "Let",
          "normalized": "String-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr",
          "package": "FerryCore",
          "partial": "Let",
          "signature": "String-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:Let"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Syntax",
          "name": "Nil",
          "package": "FerryCore",
          "signature": "CoreExpr",
          "source": "src/Database-Ferry-Core-Data-Core.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "Nil",
          "package": "FerryCore",
          "partial": "Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:Nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Syntax",
          "name": "Op",
          "package": "FerryCore",
          "signature": "String -\u003e Op",
          "source": "src/Database-Ferry-Core-Data-Core.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "Op",
          "normalized": "String-\u003eOp",
          "package": "FerryCore",
          "partial": "Op",
          "signature": "String-\u003eOp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:Op"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Syntax",
          "name": "ParAbstr",
          "package": "FerryCore",
          "signature": "[String] -\u003e CoreExpr -\u003e Param",
          "source": "src/Database-Ferry-Core-Data-Core.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "ParAbstr",
          "normalized": "[String]-\u003eCoreExpr-\u003eParam",
          "package": "FerryCore",
          "partial": "Par Abstr",
          "signature": "[String]-\u003eCoreExpr-\u003eParam",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:ParAbstr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Syntax",
          "name": "ParExpr",
          "package": "FerryCore",
          "signature": "CoreExpr -\u003e Param",
          "source": "src/Database-Ferry-Core-Data-Core.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "ParExpr",
          "normalized": "CoreExpr-\u003eParam",
          "package": "FerryCore",
          "partial": "Par Expr",
          "signature": "CoreExpr-\u003eParam",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:ParExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Syntax",
          "name": "Rec",
          "package": "FerryCore",
          "signature": "[RecElem] -\u003e CoreExpr",
          "source": "src/Database-Ferry-Core-Data-Core.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "Rec",
          "normalized": "[RecElem]-\u003eCoreExpr",
          "package": "FerryCore",
          "partial": "Rec",
          "signature": "[RecElem]-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:Rec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Syntax",
          "name": "RecElem",
          "package": "FerryCore",
          "signature": "String -\u003e CoreExpr -\u003e RecElem",
          "source": "src/Database-Ferry-Core-Data-Core.html#RecElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "RecElem",
          "normalized": "String-\u003eCoreExpr-\u003eRecElem",
          "package": "FerryCore",
          "partial": "Rec Elem",
          "signature": "String-\u003eCoreExpr-\u003eRecElem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:RecElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Syntax",
          "name": "TBool",
          "package": "FerryCore",
          "signature": "TBool",
          "source": "src/Database-Ferry-Core-Data-Core.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "TBool",
          "package": "FerryCore",
          "partial": "TBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:TBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Syntax",
          "name": "TFloat",
          "package": "FerryCore",
          "signature": "TFloat",
          "source": "src/Database-Ferry-Core-Data-Core.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "TFloat",
          "package": "FerryCore",
          "partial": "TFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:TFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Syntax",
          "name": "TInt",
          "package": "FerryCore",
          "signature": "TInt",
          "source": "src/Database-Ferry-Core-Data-Core.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "TInt",
          "package": "FerryCore",
          "partial": "TInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:TInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Syntax",
          "name": "TString",
          "package": "FerryCore",
          "signature": "TString",
          "source": "src/Database-Ferry-Core-Data-Core.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "TString",
          "package": "FerryCore",
          "partial": "TString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:TString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Syntax",
          "name": "TUnit",
          "package": "FerryCore",
          "signature": "TUnit",
          "source": "src/Database-Ferry-Core-Data-Core.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "TUnit",
          "package": "FerryCore",
          "partial": "TUnit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:TUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Syntax",
          "name": "Table",
          "package": "FerryCore",
          "signature": "String -\u003e [Column] -\u003e [Key] -\u003e CoreExpr",
          "source": "src/Database-Ferry-Core-Data-Core.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "Table",
          "normalized": "String-\u003e[Column]-\u003e[Key]-\u003eCoreExpr",
          "package": "FerryCore",
          "partial": "Table",
          "signature": "String-\u003e[Column]-\u003e[Key]-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Syntax",
          "name": "Var",
          "package": "FerryCore",
          "signature": "String -\u003e CoreExpr",
          "source": "src/Database-Ferry-Core-Data-Core.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "Var",
          "normalized": "String-\u003eCoreExpr",
          "package": "FerryCore",
          "partial": "Var",
          "signature": "String-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Syntax",
          "name": "dot",
          "package": "FerryCore",
          "signature": "a -\u003e Either FerryError String",
          "source": "src/Database-Ferry-Common-Render-Dot.html#dot",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "dot",
          "normalized": "a-\u003eEither FerryError String",
          "package": "FerryCore",
          "signature": "a-\u003eEither FerryError String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print the values xs then intersperse with a comma and transform it into one string\n\u003c/p\u003e",
          "module": "Database.Ferry.Syntax",
          "name": "intersperseComma",
          "package": "FerryCore",
          "signature": "[a] -\u003e Int -\u003e String",
          "source": "src/Database-Ferry-Common-Render-Pretty.html#intersperseComma",
          "type": "function"
        },
        "index": {
          "description": "Pretty print the values xs then intersperse with comma and transform it into one string",
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "intersperseComma",
          "normalized": "[a]-\u003eInt-\u003eString",
          "package": "FerryCore",
          "partial": "Comma",
          "signature": "[a]-\u003eInt-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:intersperseComma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emaps its first argument over the third, then intersperses\n the result with the second argument, and finally concatenates everything.\n\u003c/p\u003e",
          "module": "Database.Ferry.Syntax",
          "name": "mapIntersperseConcat",
          "package": "FerryCore",
          "signature": "(a -\u003e [b]) -\u003e [b] -\u003e [a] -\u003e [b]",
          "source": "src/Database-Ferry-Common-Render-Pretty.html#mapIntersperseConcat",
          "type": "function"
        },
        "index": {
          "description": "maps its first argument over the third then intersperses the result with the second argument and finally concatenates everything",
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "mapIntersperseConcat",
          "normalized": "(a-\u003e[b])-\u003e[b]-\u003e[a]-\u003e[b]",
          "package": "FerryCore",
          "partial": "Intersperse Concat",
          "signature": "(a-\u003e[b])-\u003e[b]-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:mapIntersperseConcat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA newline followed by indenting n positions\n\u003c/p\u003e",
          "module": "Database.Ferry.Syntax",
          "name": "newLine",
          "package": "FerryCore",
          "signature": "Int -\u003e String",
          "source": "src/Database-Ferry-Common-Render-Pretty.html#newLine",
          "type": "function"
        },
        "index": {
          "description": "newline followed by indenting positions",
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "newLine",
          "normalized": "Int-\u003eString",
          "package": "FerryCore",
          "partial": "Line",
          "signature": "Int-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:newLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003epretty function transforms a value of a into a string with identation i.\n\u003c/p\u003e",
          "module": "Database.Ferry.Syntax",
          "name": "pretty",
          "package": "FerryCore",
          "signature": "a -\u003e Int -\u003e String",
          "source": "src/Database-Ferry-Common-Render-Pretty.html#pretty",
          "type": "method"
        },
        "index": {
          "description": "pretty function transforms value of into string with identation",
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "pretty",
          "normalized": "a-\u003eInt-\u003eString",
          "package": "FerryCore",
          "signature": "a-\u003eInt-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShorthand for pretty without the identation argument\n\u003c/p\u003e",
          "module": "Database.Ferry.Syntax",
          "name": "prettyPrint",
          "package": "FerryCore",
          "signature": "a -\u003e String",
          "source": "src/Database-Ferry-Common-Render-Pretty.html#prettyPrint",
          "type": "function"
        },
        "index": {
          "description": "Shorthand for pretty without the identation argument",
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "prettyPrint",
          "normalized": "a-\u003eString",
          "package": "FerryCore",
          "partial": "Print",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:prettyPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.Syntax",
          "name": "vars",
          "package": "FerryCore",
          "signature": "a -\u003e [Identifier]",
          "source": "src/Database-Ferry-Common-Data-Base.html#vars",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Ferry Syntax",
          "module": "Database.Ferry.Syntax",
          "name": "vars",
          "normalized": "a-\u003e[Identifier]",
          "package": "FerryCore",
          "signature": "a-\u003e[Identifier]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-Syntax.html#v:vars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEverything related to typed core\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "SyntaxTyped",
          "package": "FerryCore",
          "source": "src/Database-Ferry-SyntaxTyped.html",
          "type": "module"
        },
        "index": {
          "description": "Everything related to typed core",
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "SyntaxTyped",
          "package": "FerryCore",
          "partial": "Syntax Typed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Column",
          "package": "FerryCore",
          "source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#Column",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Column",
          "package": "FerryCore",
          "partial": "Column",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:Column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant values\n\u003c/p\u003e",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Const",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Common-Data-Base.html#Const",
          "type": "data"
        },
        "index": {
          "description": "Constant values",
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Const",
          "package": "FerryCore",
          "partial": "Const",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:Const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "CoreExpr",
          "package": "FerryCore",
          "source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#CoreExpr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "CoreExpr",
          "package": "FerryCore",
          "partial": "Core Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:CoreExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for transforming values into either an error or a string representing a dot file.\n\u003c/p\u003e",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Dotify",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Common-Render-Dot.html#Dotify",
          "type": "class"
        },
        "index": {
          "description": "Class for transforming values into either an error or string representing dot file",
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Dotify",
          "package": "FerryCore",
          "partial": "Dotify",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:Dotify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType functions \n\u003c/p\u003e",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "FTFn",
          "package": "FerryCore",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#FTFn",
          "type": "data"
        },
        "index": {
          "description": "Type functions",
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "FTFn",
          "package": "FerryCore",
          "partial": "FTFn",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:FTFn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType language \n\u003c/p\u003e",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "FType",
          "package": "FerryCore",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#FType",
          "type": "data"
        },
        "index": {
          "description": "Type language",
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "FType",
          "package": "FerryCore",
          "partial": "FType",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:FType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEverything that contains a type.   \n\u003c/p\u003e",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "HasType",
          "package": "FerryCore",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#HasType",
          "type": "class"
        },
        "index": {
          "description": "Everything that contains type",
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "HasType",
          "package": "FerryCore",
          "partial": "Has Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:HasType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Ident",
          "package": "FerryCore",
          "source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#Ident",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Ident",
          "package": "FerryCore",
          "partial": "Ident",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:Ident"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifiers are represented as strings    \n\u003c/p\u003e",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Identifier",
          "package": "FerryCore",
          "source": "src/Database-Ferry-Common-Data-Base.html#Identifier",
          "type": "type"
        },
        "index": {
          "description": "Identifiers are represented as strings",
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Identifier",
          "package": "FerryCore",
          "partial": "Identifier",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:Identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Key",
          "package": "FerryCore",
          "source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#Key",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Key",
          "package": "FerryCore",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Op",
          "package": "FerryCore",
          "source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#Op",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Op",
          "package": "FerryCore",
          "partial": "Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:Op"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Param",
          "package": "FerryCore",
          "source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#Param",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Param",
          "package": "FerryCore",
          "partial": "Param",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:Param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePredicates relating to records\n\u003c/p\u003e",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Pred",
          "package": "FerryCore",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#Pred",
          "type": "data"
        },
        "index": {
          "description": "Predicates relating to records",
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Pred",
          "package": "FerryCore",
          "partial": "Pred",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:Pred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA qualified type is a type with some predicates ([predicates] :=\u003e type)\n\u003c/p\u003e",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Qual",
          "package": "FerryCore",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#Qual",
          "type": "data"
        },
        "index": {
          "description": "qualified type is type with some predicates predicates type",
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Qual",
          "package": "FerryCore",
          "partial": "Qual",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:Qual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLanguage for record labels\n\u003c/p\u003e",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "RLabel",
          "package": "FerryCore",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#RLabel",
          "type": "data"
        },
        "index": {
          "description": "Language for record labels",
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "RLabel",
          "package": "FerryCore",
          "partial": "RLabel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:RLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "RecElem",
          "package": "FerryCore",
          "source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#RecElem",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "RecElem",
          "package": "FerryCore",
          "partial": "Rec Elem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:RecElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type scheme represents a quantified type\n\u003c/p\u003e",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "TyScheme",
          "package": "FerryCore",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#TyScheme",
          "type": "data"
        },
        "index": {
          "description": "type scheme represents quantified type",
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "TyScheme",
          "package": "FerryCore",
          "partial": "Ty Scheme",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#t:TyScheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "(.-\u003e)",
          "package": "FerryCore",
          "signature": "FType -\u003e FType -\u003e FType",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#.-%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "(.-\u003e) .-\u003e",
          "normalized": "FType-\u003eFType-\u003eFType",
          "package": "FerryCore",
          "signature": "FType-\u003eFType-\u003eFType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:.-45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": ":=\u003e",
          "package": "FerryCore",
          "signature": "[Pred] -\u003e t -\u003e Qual t",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#Qual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": ":=\u003e",
          "normalized": "[Pred]-\u003ea-\u003eQual a",
          "package": "FerryCore",
          "signature": "[Pred]-\u003et-\u003eQual t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v::-61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "App",
          "package": "FerryCore",
          "signature": "Qual FType -\u003e CoreExpr -\u003e Param -\u003e CoreExpr",
          "source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "App",
          "normalized": "Qual FType-\u003eCoreExpr-\u003eParam-\u003eCoreExpr",
          "package": "FerryCore",
          "partial": "App",
          "signature": "Qual FType-\u003eCoreExpr-\u003eParam-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:App"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "BinOp",
          "package": "FerryCore",
          "signature": "Qual FType -\u003e Op -\u003e CoreExpr -\u003e CoreExpr -\u003e CoreExpr",
          "source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "BinOp",
          "normalized": "Qual FType-\u003eOp-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr",
          "package": "FerryCore",
          "partial": "Bin Op",
          "signature": "Qual FType-\u003eOp-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:BinOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Column",
          "package": "FerryCore",
          "signature": "String -\u003e FType -\u003e Column",
          "source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#Column",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Column",
          "normalized": "String-\u003eFType-\u003eColumn",
          "package": "FerryCore",
          "partial": "Column",
          "signature": "String-\u003eFType-\u003eColumn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Cons",
          "package": "FerryCore",
          "signature": "Qual FType -\u003e CoreExpr -\u003e CoreExpr -\u003e CoreExpr",
          "source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Cons",
          "normalized": "Qual FType-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr",
          "package": "FerryCore",
          "partial": "Cons",
          "signature": "Qual FType-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Constant",
          "package": "FerryCore",
          "signature": "Qual FType -\u003e Const -\u003e CoreExpr",
          "source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Constant",
          "normalized": "Qual FType-\u003eConst-\u003eCoreExpr",
          "package": "FerryCore",
          "partial": "Constant",
          "signature": "Qual FType-\u003eConst-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Constant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Elem",
          "package": "FerryCore",
          "signature": "Qual FType -\u003e CoreExpr -\u003e String -\u003e CoreExpr",
          "source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Elem",
          "normalized": "Qual FType-\u003eCoreExpr-\u003eString-\u003eCoreExpr",
          "package": "FerryCore",
          "partial": "Elem",
          "signature": "Qual FType-\u003eCoreExpr-\u003eString-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "FBool",
          "package": "FerryCore",
          "signature": "FType",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#FType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "FBool",
          "package": "FerryCore",
          "partial": "FBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:FBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "FFloat",
          "package": "FerryCore",
          "signature": "FType",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#FType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "FFloat",
          "package": "FerryCore",
          "partial": "FFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:FFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "FFn",
          "package": "FerryCore",
          "signature": "FType -\u003e FType -\u003e FType",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#FType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "FFn",
          "normalized": "FType-\u003eFType-\u003eFType",
          "package": "FerryCore",
          "partial": "FFn",
          "signature": "FType-\u003eFType-\u003eFType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:FFn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "FGen",
          "package": "FerryCore",
          "signature": "Int -\u003e FType",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#FType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "FGen",
          "normalized": "Int-\u003eFType",
          "package": "FerryCore",
          "partial": "FGen",
          "signature": "Int-\u003eFType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:FGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "FInt",
          "package": "FerryCore",
          "signature": "FType",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#FType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "FInt",
          "package": "FerryCore",
          "partial": "FInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:FInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "FList",
          "package": "FerryCore",
          "signature": "FType -\u003e FType",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#FType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "FList",
          "normalized": "FType-\u003eFType",
          "package": "FerryCore",
          "partial": "FList",
          "signature": "FType-\u003eFType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:FList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "FRec",
          "package": "FerryCore",
          "signature": "[(RLabel, FType)] -\u003e FType",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#FType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "FRec",
          "normalized": "[(RLabel,FType)]-\u003eFType",
          "package": "FerryCore",
          "partial": "FRec",
          "signature": "[(RLabel,FType)]-\u003eFType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:FRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "FString",
          "package": "FerryCore",
          "signature": "FType",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#FType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "FString",
          "package": "FerryCore",
          "partial": "FString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:FString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "FTF",
          "package": "FerryCore",
          "signature": "FTFn -\u003e FType -\u003e FType",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#FType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "FTF",
          "normalized": "FTFn-\u003eFType-\u003eFType",
          "package": "FerryCore",
          "partial": "FTF",
          "signature": "FTFn-\u003eFType-\u003eFType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:FTF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "FUnit",
          "package": "FerryCore",
          "signature": "FType",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#FType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "FUnit",
          "package": "FerryCore",
          "partial": "FUnit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:FUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "FVar",
          "package": "FerryCore",
          "signature": "Ident -\u003e FType",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#FType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "FVar",
          "normalized": "Ident-\u003eFType",
          "package": "FerryCore",
          "partial": "FVar",
          "signature": "Ident-\u003eFType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:FVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Forall",
          "package": "FerryCore",
          "signature": "TyGens -\u003e RecGens -\u003e Qual FType -\u003e TyScheme",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#TyScheme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Forall",
          "normalized": "TyGens-\u003eRecGens-\u003eQual FType-\u003eTyScheme",
          "package": "FerryCore",
          "partial": "Forall",
          "signature": "TyGens-\u003eRecGens-\u003eQual FType-\u003eTyScheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Forall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilaar to IsIn but now with a type for the name\n\u003c/p\u003e",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Has",
          "package": "FerryCore",
          "signature": "Has FType RLabel FType",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#Pred",
          "type": "function"
        },
        "index": {
          "description": "Similaar to IsIn but now with type for the name",
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Has",
          "package": "FerryCore",
          "partial": "Has",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Has"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "If",
          "package": "FerryCore",
          "signature": "Qual FType -\u003e CoreExpr -\u003e CoreExpr -\u003e CoreExpr -\u003e CoreExpr",
          "source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "If",
          "normalized": "Qual FType-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr",
          "package": "FerryCore",
          "partial": "If",
          "signature": "Qual FType-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:If"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ename \u003ccode\u003e\u003ca\u003eIsIn\u003c/a\u003e\u003c/code\u003e t -\u003e t is a record (or type variable) that contains at least a field name\n\u003c/p\u003e",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "IsIn",
          "package": "FerryCore",
          "signature": "IsIn String FType",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#Pred",
          "type": "function"
        },
        "index": {
          "description": "name IsIn is record or type variable that contains at least field name",
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "IsIn",
          "package": "FerryCore",
          "partial": "Is In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:IsIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Key",
          "package": "FerryCore",
          "signature": "[String] -\u003e Key",
          "source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#Key",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Key",
          "normalized": "[String]-\u003eKey",
          "package": "FerryCore",
          "partial": "Key",
          "signature": "[String]-\u003eKey",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Let",
          "package": "FerryCore",
          "signature": "Qual FType -\u003e String -\u003e CoreExpr -\u003e CoreExpr -\u003e CoreExpr",
          "source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Let",
          "normalized": "Qual FType-\u003eString-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr",
          "package": "FerryCore",
          "partial": "Let",
          "signature": "Qual FType-\u003eString-\u003eCoreExpr-\u003eCoreExpr-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Let"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Nil",
          "package": "FerryCore",
          "signature": "Qual FType -\u003e CoreExpr",
          "source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Nil",
          "normalized": "Qual FType-\u003eCoreExpr",
          "package": "FerryCore",
          "partial": "Nil",
          "signature": "Qual FType-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Op",
          "package": "FerryCore",
          "signature": "String -\u003e Op",
          "source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#Op",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Op",
          "normalized": "String-\u003eOp",
          "package": "FerryCore",
          "partial": "Op",
          "signature": "String-\u003eOp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Op"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "ParAbstr",
          "package": "FerryCore",
          "signature": "Qual FType -\u003e [String] -\u003e CoreExpr -\u003e Param",
          "source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "ParAbstr",
          "normalized": "Qual FType-\u003e[String]-\u003eCoreExpr-\u003eParam",
          "package": "FerryCore",
          "partial": "Par Abstr",
          "signature": "Qual FType-\u003e[String]-\u003eCoreExpr-\u003eParam",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:ParAbstr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "ParExpr",
          "package": "FerryCore",
          "signature": "Qual FType -\u003e CoreExpr -\u003e Param",
          "source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "ParExpr",
          "normalized": "Qual FType-\u003eCoreExpr-\u003eParam",
          "package": "FerryCore",
          "partial": "Par Expr",
          "signature": "Qual FType-\u003eCoreExpr-\u003eParam",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:ParExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "RGen",
          "package": "FerryCore",
          "signature": "Int -\u003e RLabel",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#RLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "RGen",
          "normalized": "Int-\u003eRLabel",
          "package": "FerryCore",
          "partial": "RGen",
          "signature": "Int-\u003eRLabel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:RGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "RLabel",
          "package": "FerryCore",
          "signature": "String -\u003e RLabel",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#RLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "RLabel",
          "normalized": "String-\u003eRLabel",
          "package": "FerryCore",
          "partial": "RLabel",
          "signature": "String-\u003eRLabel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:RLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "RVar",
          "package": "FerryCore",
          "signature": "String -\u003e RLabel",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#RLabel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "RVar",
          "normalized": "String-\u003eRLabel",
          "package": "FerryCore",
          "partial": "RVar",
          "signature": "String-\u003eRLabel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:RVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Rec",
          "package": "FerryCore",
          "signature": "Qual FType -\u003e [RecElem] -\u003e CoreExpr",
          "source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Rec",
          "normalized": "Qual FType-\u003e[RecElem]-\u003eCoreExpr",
          "package": "FerryCore",
          "partial": "Rec",
          "signature": "Qual FType-\u003e[RecElem]-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Rec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "RecElem",
          "package": "FerryCore",
          "signature": "Qual FType -\u003e String -\u003e CoreExpr -\u003e RecElem",
          "source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#RecElem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "RecElem",
          "normalized": "Qual FType-\u003eString-\u003eCoreExpr-\u003eRecElem",
          "package": "FerryCore",
          "partial": "Rec Elem",
          "signature": "Qual FType-\u003eString-\u003eCoreExpr-\u003eRecElem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:RecElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Table",
          "package": "FerryCore",
          "signature": "Qual FType -\u003e String -\u003e [Column] -\u003e [Key] -\u003e CoreExpr",
          "source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Table",
          "normalized": "Qual FType-\u003eString-\u003e[Column]-\u003e[Key]-\u003eCoreExpr",
          "package": "FerryCore",
          "partial": "Table",
          "signature": "Qual FType-\u003eString-\u003e[Column]-\u003e[Key]-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Tr",
          "package": "FerryCore",
          "signature": "FTFn",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#FTFn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Tr",
          "package": "FerryCore",
          "partial": "Tr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Tr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Tr'",
          "package": "FerryCore",
          "signature": "FTFn",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#FTFn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Tr'",
          "package": "FerryCore",
          "partial": "Tr'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Tr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Var",
          "package": "FerryCore",
          "signature": "Qual FType -\u003e String -\u003e CoreExpr",
          "source": "src/Database-Ferry-TypedCore-Data-TypedCore.html#CoreExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "Var",
          "normalized": "Qual FType-\u003eString-\u003eCoreExpr",
          "package": "FerryCore",
          "partial": "Var",
          "signature": "Qual FType-\u003eString-\u003eCoreExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "bool",
          "package": "FerryCore",
          "signature": "FType",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "bool",
          "package": "FerryCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "dot",
          "package": "FerryCore",
          "signature": "a -\u003e Either FerryError String",
          "source": "src/Database-Ferry-Common-Render-Dot.html#dot",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "dot",
          "normalized": "a-\u003eEither FerryError String",
          "package": "FerryCore",
          "signature": "a-\u003eEither FerryError String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "float",
          "package": "FerryCore",
          "signature": "FType",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#float",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "float",
          "package": "FerryCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "fn",
          "package": "FerryCore",
          "signature": "FType -\u003e FType -\u003e FType",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#fn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "fn",
          "normalized": "FType-\u003eFType-\u003eFType",
          "package": "FerryCore",
          "signature": "FType-\u003eFType-\u003eFType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:fn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "genT",
          "package": "FerryCore",
          "signature": "Int -\u003e FType",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#genT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "genT",
          "normalized": "Int-\u003eFType",
          "package": "FerryCore",
          "signature": "Int-\u003eFType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:genT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "int",
          "package": "FerryCore",
          "signature": "FType",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#int",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "int",
          "package": "FerryCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:int"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "list",
          "package": "FerryCore",
          "signature": "FType -\u003e FType",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#list",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "list",
          "normalized": "FType-\u003eFType",
          "package": "FerryCore",
          "signature": "FType-\u003eFType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "rec",
          "package": "FerryCore",
          "signature": "[(RLabel, FType)] -\u003e FType",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#rec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "rec",
          "normalized": "[(RLabel,FType)]-\u003eFType",
          "package": "FerryCore",
          "signature": "[(RLabel,FType)]-\u003eFType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:rec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "string",
          "package": "FerryCore",
          "signature": "FType",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "string",
          "package": "FerryCore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "typeOf",
          "package": "FerryCore",
          "signature": "a -\u003e Qual FType",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#typeOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "typeOf",
          "normalized": "a-\u003eQual FType",
          "package": "FerryCore",
          "partial": "Of",
          "signature": "a-\u003eQual FType",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:typeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Ferry.SyntaxTyped",
          "name": "var",
          "package": "FerryCore",
          "signature": "Ident -\u003e FType",
          "source": "src/Database-Ferry-TypedCore-Data-Type.html#var",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Ferry SyntaxTyped",
          "module": "Database.Ferry.SyntaxTyped",
          "name": "var",
          "normalized": "Ident-\u003eFType",
          "package": "FerryCore",
          "signature": "Ident-\u003eFType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FerryCore/docs/Database-Ferry-SyntaxTyped.html#v:var"
      }
    }
  ]
]