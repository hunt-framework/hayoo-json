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
        "word": "SBench"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.File.FileOps",
          "name": "FileOps",
          "package": "SBench",
          "source": "src/Test-SBench-File-FileOps.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test SBench File FileOps",
          "module": "Test.SBench.File.FileOps",
          "name": "FileOps",
          "package": "SBench",
          "partial": "File Ops",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-FileOps.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the mean runtimes of a criterion data file and tuple them with seeds\n   to a seed-runtime series.\n\u003c/p\u003e",
          "module": "Test.SBench.File.FileOps",
          "name": "criterion2series",
          "package": "SBench",
          "signature": "[a] -\u003e CriterionFile -\u003e IO [(a, Double)]",
          "source": "src/Test-SBench-File-FileOps.html#criterion2series",
          "type": "function"
        },
        "index": {
          "description": "Read the mean runtimes of criterion data file and tuple them with seeds to seed-runtime series",
          "hierarchy": "Test SBench File FileOps",
          "module": "Test.SBench.File.FileOps",
          "name": "criterion2series",
          "normalized": "[a]-\u003eCriterionFile-\u003eIO[(a,Double)]",
          "package": "SBench",
          "signature": "[a]-\u003eCriterionFile-\u003eIO[(a,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-FileOps.html#v:criterion2series"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a measurment series from a .sbench data file.\n   Additionally to the measurement series a data structure with meta informations is returned.\n\u003c/p\u003e",
          "module": "Test.SBench.File.FileOps",
          "name": "sbench2series",
          "package": "SBench",
          "signature": "FilePath -\u003e IO (MetaInfo Double Double, [(Double, Double)])",
          "source": "src/Test-SBench-File-FileOps.html#sbench2series",
          "type": "function"
        },
        "index": {
          "description": "Read measurment series from sbench data file Additionally to the measurement series data structure with meta informations is returned",
          "hierarchy": "Test SBench File FileOps",
          "module": "Test.SBench.File.FileOps",
          "name": "sbench2series",
          "normalized": "FilePath-\u003eIO(MetaInfo Double Double,[(Double,Double)])",
          "package": "SBench",
          "signature": "FilePath-\u003eIO(MetaInfo Double Double,[(Double,Double)])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-FileOps.html#v:sbench2series"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a series of measurements over \u003cem\u003edifferent inputs\u003c/em\u003e in a .sbench file.\n   The SBench file format take some extra information about the measurement.\n\u003c/p\u003e",
          "module": "Test.SBench.File.FileOps",
          "name": "series2sbench",
          "package": "SBench",
          "signature": "(String, String)-\u003e Maybe EvalMod-\u003e Algorithm (c -\u003e d)-\u003e DataGen (e -\u003e c)-\u003e Title-\u003e SBenchFile-\u003e [(a, b)]-\u003e IO SBenchFile",
          "type": "function"
        },
        "index": {
          "description": "Store series of measurements over different inputs in sbench file The SBench file format take some extra information about the measurement",
          "hierarchy": "Test SBench File FileOps",
          "module": "Test.SBench.File.FileOps",
          "name": "series2sbench",
          "normalized": "(String,String)-\u003eMaybe EvalMod-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(c-\u003ea)-\u003eTitle-\u003eSBenchFile-\u003e[(d,e)]-\u003eIO SBenchFile",
          "package": "SBench",
          "signature": "(String,String)-\u003eMaybe EvalMod-\u003eAlgorithm(c-\u003ed)-\u003eDataGen(e-\u003ec)-\u003eTitle-\u003eSBenchFile-\u003e[(a,b)]-\u003eIO SBenchFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-FileOps.html#v:series2sbench"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a series of measurements with \u003cem\u003ea single input\u003c/em\u003e in a .sbench file.\n   The SBench file format take some extra information about the measurement.\n\u003c/p\u003e",
          "module": "Test.SBench.File.FileOps",
          "name": "series2sbench'",
          "package": "SBench",
          "signature": "(String, String)-\u003e Maybe EvalMod-\u003e Algorithm (c -\u003e d)-\u003e Data c-\u003e Title-\u003e SBenchFile-\u003e [(a, b)]-\u003e IO SBenchFile",
          "type": "function"
        },
        "index": {
          "description": "Store series of measurements with single input in sbench file The SBench file format take some extra information about the measurement",
          "hierarchy": "Test SBench File FileOps",
          "module": "Test.SBench.File.FileOps",
          "name": "series2sbench'",
          "normalized": "(String,String)-\u003eMaybe EvalMod-\u003eAlgorithm(a-\u003eb)-\u003eData a-\u003eTitle-\u003eSBenchFile-\u003e[(c,d)]-\u003eIO SBenchFile",
          "package": "SBench",
          "signature": "(String,String)-\u003eMaybe EvalMod-\u003eAlgorithm(c-\u003ed)-\u003eData c-\u003eTitle-\u003eSBenchFile-\u003e[(a,b)]-\u003eIO SBenchFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-FileOps.html#v:series2sbench-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.File.Types",
          "name": "Types",
          "package": "SBench",
          "source": "src/Test-SBench-File-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test SBench File Types",
          "module": "Test.SBench.File.Types",
          "name": "Types",
          "package": "SBench",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMetainformation stored in the header of all .sbench files.\n   Part of the \u003ccode\u003e\u003ca\u003eMetaInfo\u003c/a\u003e\u003c/code\u003e entries are usually calculated automatically.\n\u003c/p\u003e",
          "module": "Test.SBench.File.Types",
          "name": "MetaInfo",
          "package": "SBench",
          "source": "src/Test-SBench-File-Types.html#MetaInfo",
          "type": "data"
        },
        "index": {
          "description": "Metainformation stored in the header of all sbench files Part of the MetaInfo entries are usually calculated automatically",
          "hierarchy": "Test SBench File Types",
          "module": "Test.SBench.File.Types",
          "name": "MetaInfo",
          "package": "SBench",
          "partial": "Meta Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#t:MetaInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.File.Types",
          "name": "Range",
          "package": "SBench",
          "source": "src/Test-SBench-File-Types.html#Range",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test SBench File Types",
          "module": "Test.SBench.File.Types",
          "name": "Range",
          "package": "SBench",
          "partial": "Range",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#t:Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.File.Types",
          "name": "AutoRange",
          "package": "SBench",
          "signature": "AutoRange",
          "source": "src/Test-SBench-File-Types.html#Range",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench File Types",
          "module": "Test.SBench.File.Types",
          "name": "AutoRange",
          "package": "SBench",
          "partial": "Auto Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#v:AutoRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.File.Types",
          "name": "ManRange",
          "package": "SBench",
          "signature": "ManRange (a, a)",
          "source": "src/Test-SBench-File-Types.html#Range",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench File Types",
          "module": "Test.SBench.File.Types",
          "name": "ManRange",
          "normalized": "ManRange(a,a)",
          "package": "SBench",
          "partial": "Man Range",
          "signature": "ManRange(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#v:ManRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.File.Types",
          "name": "MetaInfo",
          "package": "SBench",
          "signature": "MetaInfo",
          "source": "src/Test-SBench-File-Types.html#MetaInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench File Types",
          "module": "Test.SBench.File.Types",
          "name": "MetaInfo",
          "package": "SBench",
          "partial": "Meta Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#v:MetaInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.File.Types",
          "name": "buildOptions",
          "package": "SBench",
          "signature": "String",
          "source": "src/Test-SBench-File-Types.html#MetaInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench File Types",
          "module": "Test.SBench.File.Types",
          "name": "buildOptions",
          "package": "SBench",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#v:buildOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e means an input generator,\n   \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e a single input\n\u003c/p\u003e",
          "module": "Test.SBench.File.Types",
          "name": "evalMod",
          "package": "SBench",
          "signature": "Maybe EvalMod",
          "source": "src/Test-SBench-File-Types.html#MetaInfo",
          "type": "function"
        },
        "index": {
          "description": "Left means an input generator Right single input",
          "hierarchy": "Test SBench File Types",
          "module": "Test.SBench.File.Types",
          "name": "evalMod",
          "package": "SBench",
          "partial": "Mod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#v:evalMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.File.Types",
          "name": "exeOptions",
          "package": "SBench",
          "signature": "String",
          "source": "src/Test-SBench-File-Types.html#MetaInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench File Types",
          "module": "Test.SBench.File.Types",
          "name": "exeOptions",
          "package": "SBench",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#v:exeOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.File.Types",
          "name": "graphRanges",
          "package": "SBench",
          "signature": "(Range a, Range b)",
          "source": "src/Test-SBench-File-Types.html#MetaInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench File Types",
          "module": "Test.SBench.File.Types",
          "name": "graphRanges",
          "normalized": "(Range a,Range b)",
          "package": "SBench",
          "partial": "Ranges",
          "signature": "(Range a,Range b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#v:graphRanges"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.File.Types",
          "name": "header",
          "package": "SBench",
          "signature": "[String]",
          "source": "src/Test-SBench-File-Types.html#MetaInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench File Types",
          "module": "Test.SBench.File.Types",
          "name": "header",
          "normalized": "[String]",
          "package": "SBench",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#v:header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.File.Types",
          "name": "miAlgName",
          "package": "SBench",
          "signature": "String",
          "source": "src/Test-SBench-File-Types.html#MetaInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench File Types",
          "module": "Test.SBench.File.Types",
          "name": "miAlgName",
          "package": "SBench",
          "partial": "Alg Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#v:miAlgName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.File.Types",
          "name": "miGenName",
          "package": "SBench",
          "signature": "Either String String",
          "source": "src/Test-SBench-File-Types.html#MetaInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench File Types",
          "module": "Test.SBench.File.Types",
          "name": "miGenName",
          "package": "SBench",
          "partial": "Gen Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#v:miGenName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.File.Types",
          "name": "miGraphTitle",
          "package": "SBench",
          "signature": "String",
          "source": "src/Test-SBench-File-Types.html#MetaInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench File Types",
          "module": "Test.SBench.File.Types",
          "name": "miGraphTitle",
          "package": "SBench",
          "partial": "Graph Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#v:miGraphTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.File.Types",
          "name": "sbenchVersion",
          "package": "SBench",
          "signature": "String",
          "source": "src/Test-SBench-File-Types.html#MetaInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench File Types",
          "module": "Test.SBench.File.Types",
          "name": "sbenchVersion",
          "package": "SBench",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#v:sbenchVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "Options",
          "package": "SBench",
          "source": "src/Test-SBench-Options.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "Options",
          "package": "SBench",
          "partial": "Options",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe possible types of breakdowns. \n\u003c/p\u003e",
          "module": "Test.SBench.Options",
          "name": "Breakdown",
          "package": "SBench",
          "type": "data"
        },
        "index": {
          "description": "The possible types of breakdowns",
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "Breakdown",
          "package": "SBench",
          "partial": "Breakdown",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:Breakdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "CompilerOptions",
          "package": "SBench",
          "source": "src/Test-SBench-Options.html#CompilerOptions",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "CompilerOptions",
          "package": "SBench",
          "partial": "Compiler Options",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:CompilerOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "EvalMod",
          "package": "SBench",
          "source": "src/Test-SBench-Options.html#EvalMod",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "EvalMod",
          "package": "SBench",
          "partial": "Eval Mod",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:EvalMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "Imports",
          "package": "SBench",
          "source": "src/Test-SBench-Options.html#Imports",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "Imports",
          "package": "SBench",
          "partial": "Imports",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:Imports"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "MemSize",
          "package": "SBench",
          "source": "src/Test-SBench-Options.html#MemSize",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "MemSize",
          "package": "SBench",
          "partial": "Mem Size",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:MemSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "MemUnit",
          "package": "SBench",
          "source": "src/Test-SBench-Options.html#MemUnit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "MemUnit",
          "package": "SBench",
          "partial": "Mem Unit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:MemUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "MemoryOptions",
          "package": "SBench",
          "source": "src/Test-SBench-Options.html#MemoryOptions",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "MemoryOptions",
          "package": "SBench",
          "partial": "Memory Options",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:MemoryOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "NormalInput",
          "package": "SBench",
          "source": "src/Test-SBench-Options.html#NormalInput",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "NormalInput",
          "package": "SBench",
          "partial": "Normal Input",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:NormalInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe possible types of parameters. \n\u003c/p\u003e",
          "module": "Test.SBench.Options",
          "name": "ProfParam",
          "package": "SBench",
          "type": "data"
        },
        "index": {
          "description": "The possible types of parameters",
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "ProfParam",
          "package": "SBench",
          "partial": "Prof Param",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:ProfParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "ProfilingOptions",
          "package": "SBench",
          "source": "src/Test-SBench-Options.html#ProfilingOptions",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "ProfilingOptions",
          "package": "SBench",
          "partial": "Profiling Options",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:ProfilingOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "ProgramArguments",
          "package": "SBench",
          "source": "src/Test-SBench-Options.html#ProgramArguments",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "ProgramArguments",
          "package": "SBench",
          "partial": "Program Arguments",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:ProgramArguments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "Repetitions",
          "package": "SBench",
          "source": "src/Test-SBench-Options.html#Repetitions",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "Repetitions",
          "package": "SBench",
          "partial": "Repetitions",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:Repetitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe possible filters. Note that these are imposed by the runtime,\nso we cannot override them on the application side. \n\u003c/p\u003e",
          "module": "Test.SBench.Options",
          "name": "Restriction",
          "package": "SBench",
          "type": "data"
        },
        "index": {
          "description": "The possible filters Note that these are imposed by the runtime so we cannot override them on the application side",
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "Restriction",
          "package": "SBench",
          "partial": "Restriction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:Restriction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "RuntimeOptions",
          "package": "SBench",
          "source": "src/Test-SBench-Options.html#RuntimeOptions",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "RuntimeOptions",
          "package": "SBench",
          "partial": "Runtime Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:RuntimeOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "TestOpts",
          "package": "SBench",
          "source": "src/Test-SBench-Options.html#TestOpts",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "TestOpts",
          "package": "SBench",
          "partial": "Test Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:TestOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "ThreadNum",
          "package": "SBench",
          "source": "src/Test-SBench-Options.html#ThreadNum",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "ThreadNum",
          "package": "SBench",
          "partial": "Thread Num",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:ThreadNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "Title",
          "package": "SBench",
          "source": "src/Test-SBench-Options.html#Title",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "Title",
          "package": "SBench",
          "partial": "Title",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:Title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "B",
          "package": "SBench",
          "signature": "B",
          "source": "src/Test-SBench-Options.html#MemUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "B",
          "package": "SBench",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreakdown by biography (phase of an object's lifetime).\n\u003c/p\u003e",
          "module": "Test.SBench.Options",
          "name": "BBiography",
          "package": "SBench",
          "signature": "BBiography",
          "type": "function"
        },
        "index": {
          "description": "Breakdown by biography phase of an object lifetime",
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "BBiography",
          "package": "SBench",
          "partial": "BBiography",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:BBiography"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreakdown by cost centre stack (origin of the data).\n\u003c/p\u003e",
          "module": "Test.SBench.Options",
          "name": "BCostCentreStack",
          "package": "SBench",
          "signature": "BCostCentreStack",
          "type": "function"
        },
        "index": {
          "description": "Breakdown by cost centre stack origin of the data",
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "BCostCentreStack",
          "package": "SBench",
          "partial": "BCost Centre Stack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:BCostCentreStack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreakdown by closure description (constructor name or some\n unique identifier).\n\u003c/p\u003e",
          "module": "Test.SBench.Options",
          "name": "BDescription",
          "package": "SBench",
          "signature": "BDescription",
          "type": "function"
        },
        "index": {
          "description": "Breakdown by closure description constructor name or some unique identifier",
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "BDescription",
          "package": "SBench",
          "partial": "BDescription",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:BDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreakdown by module (code responsible for the data).\n\u003c/p\u003e",
          "module": "Test.SBench.Options",
          "name": "BModule",
          "package": "SBench",
          "signature": "BModule",
          "type": "function"
        },
        "index": {
          "description": "Breakdown by module code responsible for the data",
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "BModule",
          "package": "SBench",
          "partial": "BModule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:BModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreakdown by retainer set (effectively the entities that hold\n a direct reference to the data in question).\n\u003c/p\u003e",
          "module": "Test.SBench.Options",
          "name": "BRetainer",
          "package": "SBench",
          "signature": "BRetainer",
          "type": "function"
        },
        "index": {
          "description": "Breakdown by retainer set effectively the entities that hold direct reference to the data in question",
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "BRetainer",
          "package": "SBench",
          "partial": "BRetainer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:BRetainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreakdown by type (or an approximation if it is not known\n exactly).\n\u003c/p\u003e",
          "module": "Test.SBench.Options",
          "name": "BType",
          "package": "SBench",
          "signature": "BType",
          "type": "function"
        },
        "index": {
          "description": "Breakdown by type or an approximation if it is not known exactly",
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "BType",
          "package": "SBench",
          "partial": "BType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:BType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "G",
          "package": "SBench",
          "signature": "G",
          "source": "src/Test-SBench-Options.html#MemUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "G",
          "package": "SBench",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:G"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "Heap",
          "package": "SBench",
          "signature": "Heap Int MemUnit",
          "source": "src/Test-SBench-Options.html#MemSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "Heap",
          "package": "SBench",
          "partial": "Heap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:Heap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "K",
          "package": "SBench",
          "signature": "K",
          "source": "src/Test-SBench-Options.html#MemUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "K",
          "package": "SBench",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:K"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "M",
          "package": "SBench",
          "signature": "M",
          "source": "src/Test-SBench-Options.html#MemUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "M",
          "package": "SBench",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:M"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "NF",
          "package": "SBench",
          "signature": "NF",
          "source": "src/Test-SBench-Options.html#EvalMod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "NF",
          "package": "SBench",
          "partial": "NF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:NF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of breakdown.\n\u003c/p\u003e",
          "module": "Test.SBench.Options",
          "name": "PPBreakdown",
          "package": "SBench",
          "signature": "PPBreakdown Breakdown",
          "type": "function"
        },
        "index": {
          "description": "The type of breakdown",
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "PPBreakdown",
          "package": "SBench",
          "partial": "PPBreakdown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:PPBreakdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether to include memory taken up by threads.\n\u003c/p\u003e",
          "module": "Test.SBench.Options",
          "name": "PPIncludeThreads",
          "package": "SBench",
          "signature": "PPIncludeThreads",
          "type": "function"
        },
        "index": {
          "description": "Whether to include memory taken up by threads",
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "PPIncludeThreads",
          "package": "SBench",
          "partial": "PPInclude Threads",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:PPIncludeThreads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSampling interval in seconds.\n\u003c/p\u003e",
          "module": "Test.SBench.Options",
          "name": "PPInterval",
          "package": "SBench",
          "signature": "PPInterval Float",
          "type": "function"
        },
        "index": {
          "description": "Sampling interval in seconds",
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "PPInterval",
          "package": "SBench",
          "partial": "PPInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:PPInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximum length of cost centre stack names.\n\u003c/p\u003e",
          "module": "Test.SBench.Options",
          "name": "PPNameLength",
          "package": "SBench",
          "signature": "PPNameLength Int",
          "type": "function"
        },
        "index": {
          "description": "The maximum length of cost centre stack names",
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "PPNameLength",
          "package": "SBench",
          "partial": "PPName Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:PPNameLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn additional filter on the runtime side.\n\u003c/p\u003e",
          "module": "Test.SBench.Options",
          "name": "PPRestriction",
          "package": "SBench",
          "signature": "PPRestriction Restriction [String]",
          "type": "function"
        },
        "index": {
          "description": "An additional filter on the runtime side",
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "PPRestriction",
          "normalized": "PPRestriction Restriction[String]",
          "package": "SBench",
          "partial": "PPRestriction",
          "signature": "PPRestriction Restriction[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:PPRestriction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetainer set size limit.\n\u003c/p\u003e",
          "module": "Test.SBench.Options",
          "name": "PPRetainerLimit",
          "package": "SBench",
          "signature": "PPRetainerLimit Int",
          "type": "function"
        },
        "index": {
          "description": "Retainer set size limit",
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "PPRetainerLimit",
          "package": "SBench",
          "partial": "PPRetainer Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:PPRetainerLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow only closures with one of the specified biographies,\n which must come from the set {lag, drag, void, use}.\n\u003c/p\u003e",
          "module": "Test.SBench.Options",
          "name": "RBiography",
          "package": "SBench",
          "signature": "RBiography",
          "type": "function"
        },
        "index": {
          "description": "Show only closures with one of the specified biographies which must come from the set lag drag void use",
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "RBiography",
          "package": "SBench",
          "partial": "RBiography",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:RBiography"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow only closures with one of the given names somewhere in\n the cost centre stack.\n\u003c/p\u003e",
          "module": "Test.SBench.Options",
          "name": "RCCStackAny",
          "package": "SBench",
          "signature": "RCCStackAny",
          "type": "function"
        },
        "index": {
          "description": "Show only closures with one of the given names somewhere in the cost centre stack",
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "RCCStackAny",
          "package": "SBench",
          "partial": "RCCStack Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:RCCStackAny"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow only closures with one of the given names on the top of\n the cost centre stack.\n\u003c/p\u003e",
          "module": "Test.SBench.Options",
          "name": "RCCStackTop",
          "package": "SBench",
          "signature": "RCCStackTop",
          "type": "function"
        },
        "index": {
          "description": "Show only closures with one of the given names on the top of the cost centre stack",
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "RCCStackTop",
          "package": "SBench",
          "partial": "RCCStack Top",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:RCCStackTop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow only closures with a description that matches one of the\n given names.\n\u003c/p\u003e",
          "module": "Test.SBench.Options",
          "name": "RDescription",
          "package": "SBench",
          "signature": "RDescription",
          "type": "function"
        },
        "index": {
          "description": "Show only closures with description that matches one of the given names",
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "RDescription",
          "package": "SBench",
          "partial": "RDescription",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:RDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow only closures produced by one of the given modules.\n\u003c/p\u003e",
          "module": "Test.SBench.Options",
          "name": "RModule",
          "package": "SBench",
          "signature": "RModule",
          "type": "function"
        },
        "index": {
          "description": "Show only closures produced by one of the given modules",
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "RModule",
          "package": "SBench",
          "partial": "RModule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:RModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "ROpts",
          "package": "SBench",
          "signature": "ROpts",
          "source": "src/Test-SBench-Options.html#RuntimeOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "ROpts",
          "package": "SBench",
          "partial": "ROpts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:ROpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow only closures with retainer sets that contain at least\n one cost centre stack with a given name on the top.\n\u003c/p\u003e",
          "module": "Test.SBench.Options",
          "name": "RRetainer",
          "package": "SBench",
          "signature": "RRetainer",
          "type": "function"
        },
        "index": {
          "description": "Show only closures with retainer sets that contain at least one cost centre stack with given name on the top",
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "RRetainer",
          "package": "SBench",
          "partial": "RRetainer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:RRetainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow only closures with one of the given types.\n\u003c/p\u003e",
          "module": "Test.SBench.Options",
          "name": "RType",
          "package": "SBench",
          "signature": "RType",
          "type": "function"
        },
        "index": {
          "description": "Show only closures with one of the given types",
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "RType",
          "package": "SBench",
          "partial": "RType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:RType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "Stack",
          "package": "SBench",
          "signature": "Stack Int MemUnit",
          "source": "src/Test-SBench-Options.html#MemSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "Stack",
          "package": "SBench",
          "partial": "Stack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:Stack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "TOpts",
          "package": "SBench",
          "signature": "TOpts",
          "source": "src/Test-SBench-Options.html#TestOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "TOpts",
          "package": "SBench",
          "partial": "TOpts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:TOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "WHNF",
          "package": "SBench",
          "signature": "WHNF",
          "source": "src/Test-SBench-Options.html#EvalMod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "WHNF",
          "package": "SBench",
          "partial": "WHNF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:WHNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "cOpts",
          "package": "SBench",
          "signature": "CompilerOptions",
          "source": "src/Test-SBench-Options.html#TestOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "cOpts",
          "package": "SBench",
          "partial": "Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:cOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "memOpts",
          "package": "SBench",
          "signature": "MemoryOptions",
          "source": "src/Test-SBench-Options.html#RuntimeOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "memOpts",
          "package": "SBench",
          "partial": "Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:memOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "nfInp",
          "package": "SBench",
          "signature": "NormalInput",
          "source": "src/Test-SBench-Options.html#TestOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "nfInp",
          "package": "SBench",
          "partial": "Inp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:nfInp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "opts2string",
          "package": "SBench",
          "signature": "[String] -\u003e String",
          "source": "src/Test-SBench-Options.html#opts2string",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "opts2string",
          "normalized": "[String]-\u003eString",
          "package": "SBench",
          "signature": "[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:opts2string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "profOpts",
          "package": "SBench",
          "signature": "ProfilingOptions",
          "source": "src/Test-SBench-Options.html#RuntimeOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "profOpts",
          "package": "SBench",
          "partial": "Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:profOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "progArgs",
          "package": "SBench",
          "signature": "ProgramArguments",
          "source": "src/Test-SBench-Options.html#RuntimeOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "progArgs",
          "package": "SBench",
          "partial": "Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:progArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "rOpts",
          "package": "SBench",
          "signature": "RuntimeOptions",
          "source": "src/Test-SBench-Options.html#TestOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "rOpts",
          "package": "SBench",
          "partial": "Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:rOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "reps",
          "package": "SBench",
          "signature": "Maybe Repetitions",
          "source": "src/Test-SBench-Options.html#TestOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "reps",
          "package": "SBench",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:reps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Options",
          "name": "threadNum",
          "package": "SBench",
          "signature": "Maybe ThreadNum",
          "source": "src/Test-SBench-Options.html#RuntimeOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Options",
          "module": "Test.SBench.Options",
          "name": "threadNum",
          "package": "SBench",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:threadNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface functions to the \u003ca\u003egnuplot\u003c/a\u003e package for generating plots.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "Gnuplot",
          "package": "SBench",
          "source": "src/Test-SBench-Plot-Gnuplot.html",
          "type": "module"
        },
        "index": {
          "description": "Interface functions to the gnuplot package for generating plots",
          "hierarchy": "Test SBench Plot Gnuplot",
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "Gnuplot",
          "package": "SBench",
          "partial": "Gnuplot",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "sbench2plot",
          "package": "SBench",
          "signature": "FilePath -\u003e IO (T Double Double)",
          "source": "src/Test-SBench-Plot-Gnuplot.html#sbench2plot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Plot Gnuplot",
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "sbench2plot",
          "normalized": "FilePath-\u003eIO(T Double Double)",
          "package": "SBench",
          "signature": "FilePath-\u003eIO(T Double Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#v:sbench2plot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "sbench2plotWith",
          "package": "SBench",
          "signature": "[T -\u003e T]-\u003e FilePath-\u003e IO (T Double Double)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Plot Gnuplot",
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "sbench2plotWith",
          "normalized": "[T-\u003eT]-\u003eFilePath-\u003eIO(T Double Double)",
          "package": "SBench",
          "partial": "With",
          "signature": "[T-\u003eT]-\u003eFilePath-\u003eIO(T Double Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#v:sbench2plotWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "sbench2plotWithLinestyle",
          "package": "SBench",
          "signature": "Int-\u003e FilePath-\u003e IO (T Double Double)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Plot Gnuplot",
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "sbench2plotWithLinestyle",
          "normalized": "Int-\u003eFilePath-\u003eIO(T Double Double)",
          "package": "SBench",
          "partial": "With Linestyle",
          "signature": "Int-\u003eFilePath-\u003eIO(T Double Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#v:sbench2plotWithLinestyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "sbench2scaledPlot",
          "package": "SBench",
          "signature": "(Double -\u003e Double)-\u003e (Double -\u003e Double)-\u003e FilePath-\u003e IO (T Double Double)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Plot Gnuplot",
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "sbench2scaledPlot",
          "normalized": "(Double-\u003eDouble)-\u003e(Double-\u003eDouble)-\u003eFilePath-\u003eIO(T Double Double)",
          "package": "SBench",
          "partial": "Plot",
          "signature": "(Double-\u003eDouble)-\u003e(Double-\u003eDouble)-\u003eFilePath-\u003eIO(T Double Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#v:sbench2scaledPlot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "sbench2scaledPlotWith",
          "package": "SBench",
          "signature": "[T -\u003e T]-\u003e (Double -\u003e Double)-\u003e (Double -\u003e Double)-\u003e FilePath-\u003e IO (T Double Double)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Plot Gnuplot",
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "sbench2scaledPlotWith",
          "normalized": "[T-\u003eT]-\u003e(Double-\u003eDouble)-\u003e(Double-\u003eDouble)-\u003eFilePath-\u003eIO(T Double Double)",
          "package": "SBench",
          "partial": "Plot With",
          "signature": "[T-\u003eT]-\u003e(Double-\u003eDouble)-\u003e(Double-\u003eDouble)-\u003eFilePath-\u003eIO(T Double Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#v:sbench2scaledPlotWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "sbench2scaledPlotWithLinestyle",
          "package": "SBench",
          "signature": "Int-\u003e (Double -\u003e Double)-\u003e (Double -\u003e Double)-\u003e FilePath-\u003e IO (T Double Double)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Plot Gnuplot",
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "sbench2scaledPlotWithLinestyle",
          "normalized": "Int-\u003e(Double-\u003eDouble)-\u003e(Double-\u003eDouble)-\u003eFilePath-\u003eIO(T Double Double)",
          "package": "SBench",
          "partial": "Plot With Linestyle",
          "signature": "Int-\u003e(Double-\u003eDouble)-\u003e(Double-\u003eDouble)-\u003eFilePath-\u003eIO(T Double Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#v:sbench2scaledPlotWithLinestyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "series2plot",
          "package": "SBench",
          "signature": "Title-\u003e [(a, b)]-\u003e T a b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Plot Gnuplot",
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "series2plot",
          "normalized": "Title-\u003e[(a,b)]-\u003eT a b",
          "package": "SBench",
          "signature": "Title-\u003e[(a,b)]-\u003eT a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#v:series2plot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "series2plotWith",
          "package": "SBench",
          "signature": "[T -\u003e T]-\u003e [(a, b)]-\u003e T a b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Plot Gnuplot",
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "series2plotWith",
          "normalized": "[T-\u003eT]-\u003e[(a,b)]-\u003eT a b",
          "package": "SBench",
          "partial": "With",
          "signature": "[T-\u003eT]-\u003e[(a,b)]-\u003eT a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#v:series2plotWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "series2plotWithLinestyle",
          "package": "SBench",
          "signature": "Int-\u003e Title-\u003e [(a, b)]-\u003e T a b",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Plot Gnuplot",
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "series2plotWithLinestyle",
          "normalized": "Int-\u003eTitle-\u003e[(a,b)]-\u003eT a b",
          "package": "SBench",
          "partial": "With Linestyle",
          "signature": "Int-\u003eTitle-\u003e[(a,b)]-\u003eT a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#v:series2plotWithLinestyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "series2scaledPlot",
          "package": "SBench",
          "signature": "(a -\u003e c)-\u003e (b -\u003e d)-\u003e Title-\u003e [(a, b)]-\u003e T c d",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Plot Gnuplot",
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "series2scaledPlot",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003eTitle-\u003e[(a,c)]-\u003eT b d",
          "package": "SBench",
          "partial": "Plot",
          "signature": "(a-\u003ec)-\u003e(b-\u003ed)-\u003eTitle-\u003e[(a,b)]-\u003eT c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#v:series2scaledPlot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "series2scaledPlotWith",
          "package": "SBench",
          "signature": "[T -\u003e T]-\u003e (a -\u003e c)-\u003e (b -\u003e d)-\u003e [(a, b)]-\u003e T c d",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Plot Gnuplot",
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "series2scaledPlotWith",
          "normalized": "[T-\u003eT]-\u003e(a-\u003eb)-\u003e(c-\u003ed)-\u003e[(a,c)]-\u003eT b d",
          "package": "SBench",
          "partial": "Plot With",
          "signature": "[T-\u003eT]-\u003e(a-\u003ec)-\u003e(b-\u003ed)-\u003e[(a,b)]-\u003eT c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#v:series2scaledPlotWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "series2scaledPlotWithLinestyle",
          "package": "SBench",
          "signature": "Int-\u003e (a -\u003e c)-\u003e (b -\u003e d)-\u003e Title-\u003e [(a, b)]-\u003e T c d",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Plot Gnuplot",
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "series2scaledPlotWithLinestyle",
          "normalized": "Int-\u003e(a-\u003eb)-\u003e(c-\u003ed)-\u003eTitle-\u003e[(a,c)]-\u003eT b d",
          "package": "SBench",
          "partial": "Plot With Linestyle",
          "signature": "Int-\u003e(a-\u003ec)-\u003e(b-\u003ed)-\u003eTitle-\u003e[(a,b)]-\u003eT c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#v:series2scaledPlotWithLinestyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompared to \u003ccode\u003e\u003ca\u003etoDiagramWith\u003c/a\u003e\u003c/code\u003e, the output terminal is fixed to \n   \u003ca\u003eGraphics.Gnuplot.Terminal.PostScript\u003c/a\u003e and the resulting\n   .eps file is transformed to a .pdf via a call to \u003ccode\u003eepstopdf\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe parameters are as follows\n   [\u003ccode\u003ename\u003c/code\u003e]  Choose the output terminal. See \u003ca\u003eGraphics.Gnuplot.Terminal\u003c/a\u003e\n   [\u003ccode\u003etopts\u003c/code\u003e] Frame options, e.g. title. See \u003ca\u003eGraphics.Gnuplot.Frame.OptionSet\u003c/a\u003e\n   [\u003ccode\u003eopts\u003c/code\u003e]  List of plots to be shown in the diagram.\n   [\u003ccode\u003eplots\u003c/code\u003e]    List of plots to be shown in the diagram.\n\u003c/p\u003e",
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "toDiagram",
          "package": "SBench",
          "signature": "[Char] -\u003e [T -\u003e T] -\u003e [T (T a b) -\u003e T (T a b)] -\u003e [T a b] -\u003e IO FilePath",
          "source": "src/Test-SBench-Plot-Gnuplot.html#toDiagram",
          "type": "function"
        },
        "index": {
          "description": "Compared to toDiagramWith the output terminal is fixed to Graphics.Gnuplot.Terminal.PostScript and the resulting eps file is transformed to pdf via call to epstopdf The parameters are as follows name Choose the output terminal See Graphics.Gnuplot.Terminal topts Frame options e.g title See Graphics.Gnuplot.Frame.OptionSet opts List of plots to be shown in the diagram plots List of plots to be shown in the diagram",
          "hierarchy": "Test SBench Plot Gnuplot",
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "toDiagram",
          "normalized": "[Char]-\u003e[T-\u003eT]-\u003e[T(T a b)-\u003eT(T a b)]-\u003e[T a b]-\u003eIO FilePath",
          "package": "SBench",
          "partial": "Diagram",
          "signature": "[Char]-\u003e[T-\u003eT]-\u003e[T(T a b)-\u003eT(T a b)]-\u003e[T a b]-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#v:toDiagram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduces a diagram with several plots inside.\n\u003c/p\u003e\u003cp\u003eThe parameters are as follows\n   [\u003ccode\u003eterminal\u003c/code\u003e] Choose the output terminal. See \u003ca\u003eGraphics.Gnuplot.Terminal\u003c/a\u003e\n   [\u003ccode\u003eopts\u003c/code\u003e]     Frame options, e.g. title. See \u003ca\u003eGraphics.Gnuplot.Frame.OptionSet\u003c/a\u003e\n   [\u003ccode\u003eplots\u003c/code\u003e]    List of plots to be shown in the diagram.\n\u003c/p\u003e",
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "toDiagramWith",
          "package": "SBench",
          "signature": "terminal -\u003e [T (T a b) -\u003e T (T a b)] -\u003e [T a b] -\u003e IO ExitCode",
          "source": "src/Test-SBench-Plot-Gnuplot.html#toDiagramWith",
          "type": "function"
        },
        "index": {
          "description": "Produces diagram with several plots inside The parameters are as follows terminal Choose the output terminal See Graphics.Gnuplot.Terminal opts Frame options e.g title See Graphics.Gnuplot.Frame.OptionSet plots List of plots to be shown in the diagram",
          "hierarchy": "Test SBench Plot Gnuplot",
          "module": "Test.SBench.Plot.Gnuplot",
          "name": "toDiagramWith",
          "normalized": "a-\u003e[T(T b c)-\u003eT(T b c)]-\u003e[T b c]-\u003eIO ExitCode",
          "package": "SBench",
          "partial": "Diagram With",
          "signature": "terminal-\u003e[T(T a b)-\u003eT(T a b)]-\u003e[T a b]-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#v:toDiagramWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe provided data type \u003ccode\u003e\u003ca\u003eSTerm\u003c/a\u003e\u003c/code\u003e is intended to store a term equipped with\n   its own name and maybe some extra information about its cost center\n   annotation and modules that need to be loaded when evaluating the term.\n\u003c/p\u003e\u003cp\u003eThe additional information, provided as strings, is necessary for space \n   measurements where small programs are constructed from the strings and run\n   for heap profiling.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.SBench.STerm",
          "name": "STerm",
          "package": "SBench",
          "source": "src/Test-SBench-STerm.html",
          "type": "module"
        },
        "index": {
          "description": "The provided data type STerm is intended to store term equipped with its own name and maybe some extra information about its cost center annotation and modules that need to be loaded when evaluating the term The additional information provided as strings is necessary for space measurements where small programs are constructed from the strings and run for heap profiling",
          "hierarchy": "Test SBench STerm",
          "module": "Test.SBench.STerm",
          "name": "STerm",
          "package": "SBench",
          "partial": "STerm",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.STerm",
          "name": "Algorithm",
          "package": "SBench",
          "source": "src/Test-SBench-STerm.html#Algorithm",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test SBench STerm",
          "module": "Test.SBench.STerm",
          "name": "Algorithm",
          "package": "SBench",
          "partial": "Algorithm",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#t:Algorithm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.STerm",
          "name": "CostCenter",
          "package": "SBench",
          "source": "src/Test-SBench-STerm.html#CostCenter",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test SBench STerm",
          "module": "Test.SBench.STerm",
          "name": "CostCenter",
          "package": "SBench",
          "partial": "Cost Center",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#t:CostCenter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.STerm",
          "name": "Data",
          "package": "SBench",
          "source": "src/Test-SBench-STerm.html#Data",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test SBench STerm",
          "module": "Test.SBench.STerm",
          "name": "Data",
          "package": "SBench",
          "partial": "Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#t:Data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.STerm",
          "name": "DataGen",
          "package": "SBench",
          "source": "src/Test-SBench-STerm.html#DataGen",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test SBench STerm",
          "module": "Test.SBench.STerm",
          "name": "DataGen",
          "package": "SBench",
          "partial": "Data Gen",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#t:DataGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.STerm",
          "name": "STerm",
          "package": "SBench",
          "source": "src/Test-SBench-STerm.html#STerm",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test SBench STerm",
          "module": "Test.SBench.STerm",
          "name": "STerm",
          "package": "SBench",
          "partial": "STerm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#t:STerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.STerm",
          "name": "Seed",
          "package": "SBench",
          "source": "src/Test-SBench-STerm.html#Seed",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test SBench STerm",
          "module": "Test.SBench.STerm",
          "name": "Seed",
          "package": "SBench",
          "partial": "Seed",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#t:Seed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.STerm",
          "name": "Test",
          "package": "SBench",
          "source": "src/Test-SBench-STerm.html#Test",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test SBench STerm",
          "module": "Test.SBench.STerm",
          "name": "Test",
          "package": "SBench",
          "partial": "Test",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#t:Test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction application for \u003ccode\u003e\u003ca\u003eSTerm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.SBench.STerm",
          "name": "(\u003c$\u003e)",
          "package": "SBench",
          "signature": "STerm (a -\u003e b) -\u003e STerm a -\u003e STerm b",
          "source": "src/Test-SBench-STerm.html#%3C%24%3E",
          "type": "function"
        },
        "index": {
          "description": "Function application for STerm",
          "hierarchy": "Test SBench STerm",
          "module": "Test.SBench.STerm",
          "name": "(\u003c$\u003e) \u003c$\u003e",
          "normalized": "STerm(a-\u003eb)-\u003eSTerm a-\u003eSTerm b",
          "package": "SBench",
          "signature": "STerm(a-\u003eb)-\u003eSTerm a-\u003eSTerm b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#v:-60--36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.STerm",
          "name": "T",
          "package": "SBench",
          "signature": "T",
          "source": "src/Test-SBench-STerm.html#STerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench STerm",
          "module": "Test.SBench.STerm",
          "name": "T",
          "package": "SBench",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#v:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.STerm",
          "name": "getImports",
          "package": "SBench",
          "signature": "STerm a -\u003e String",
          "source": "src/Test-SBench-STerm.html#getImports",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench STerm",
          "module": "Test.SBench.STerm",
          "name": "getImports",
          "normalized": "STerm a-\u003eString",
          "package": "SBench",
          "partial": "Imports",
          "signature": "STerm a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#v:getImports"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuxiliar version of \u003ccode\u003e\u003ca\u003emakeSeeds\u003c/a\u003e\u003c/code\u003e to prevent defaulting to \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.SBench.STerm",
          "name": "makeIntSeeds",
          "package": "SBench",
          "signature": "Int -\u003e Int -\u003e Int -\u003e [Seed Int]",
          "source": "src/Test-SBench-STerm.html#makeIntSeeds",
          "type": "function"
        },
        "index": {
          "description": "Auxiliar version of makeSeeds to prevent defaulting to Integer",
          "hierarchy": "Test SBench STerm",
          "module": "Test.SBench.STerm",
          "name": "makeIntSeeds",
          "normalized": "Int-\u003eInt-\u003eInt-\u003e[Seed Int]",
          "package": "SBench",
          "partial": "Int Seeds",
          "signature": "Int-\u003eInt-\u003eInt-\u003e[Seed Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#v:makeIntSeeds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.STerm",
          "name": "makeSeeds",
          "package": "SBench",
          "signature": "a-\u003e a-\u003e a-\u003e [Seed a]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench STerm",
          "module": "Test.SBench.STerm",
          "name": "makeSeeds",
          "normalized": "a-\u003ea-\u003ea-\u003e[Seed a]",
          "package": "SBench",
          "partial": "Seeds",
          "signature": "a-\u003ea-\u003ea-\u003e[Seed a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#v:makeSeeds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecost centers to measure when performing \n   heap profiling.\n\u003c/p\u003e",
          "module": "Test.SBench.STerm",
          "name": "stCC",
          "package": "SBench",
          "signature": "[CostCenter]",
          "source": "src/Test-SBench-STerm.html#STerm",
          "type": "function"
        },
        "index": {
          "description": "cost centers to measure when performing heap profiling",
          "hierarchy": "Test SBench STerm",
          "module": "Test.SBench.STerm",
          "name": "stCC",
          "normalized": "[CostCenter]",
          "package": "SBench",
          "partial": "CC",
          "signature": "[CostCenter]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#v:stCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe modules used when evaluation the term\n\u003c/p\u003e",
          "module": "Test.SBench.STerm",
          "name": "stModules",
          "package": "SBench",
          "signature": "[ModuleName]",
          "source": "src/Test-SBench-STerm.html#STerm",
          "type": "function"
        },
        "index": {
          "description": "The modules used when evaluation the term",
          "hierarchy": "Test SBench STerm",
          "module": "Test.SBench.STerm",
          "name": "stModules",
          "normalized": "[ModuleName]",
          "package": "SBench",
          "partial": "Modules",
          "signature": "[ModuleName]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#v:stModules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe term as \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Test.SBench.STerm",
          "name": "stName",
          "package": "SBench",
          "signature": "TermName",
          "source": "src/Test-SBench-STerm.html#STerm",
          "type": "function"
        },
        "index": {
          "description": "The term as String",
          "hierarchy": "Test SBench STerm",
          "module": "Test.SBench.STerm",
          "name": "stName",
          "package": "SBench",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#v:stName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe actual term.\n\u003c/p\u003e",
          "module": "Test.SBench.STerm",
          "name": "stTerm",
          "package": "SBench",
          "signature": "a",
          "source": "src/Test-SBench-STerm.html#STerm",
          "type": "function"
        },
        "index": {
          "description": "The actual term",
          "hierarchy": "Test SBench STerm",
          "module": "Test.SBench.STerm",
          "name": "stTerm",
          "package": "SBench",
          "partial": "Term",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#v:stTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.STerm",
          "name": "toAlgorithm",
          "package": "SBench",
          "signature": "(a -\u003e b) -\u003e ModuleName -\u003e TermName -\u003e CostCenter -\u003e Algorithm (a -\u003e b)",
          "source": "src/Test-SBench-STerm.html#toAlgorithm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench STerm",
          "module": "Test.SBench.STerm",
          "name": "toAlgorithm",
          "normalized": "(a-\u003eb)-\u003eModuleName-\u003eTermName-\u003eCostCenter-\u003eAlgorithm(a-\u003eb)",
          "package": "SBench",
          "partial": "Algorithm",
          "signature": "(a-\u003eb)-\u003eModuleName-\u003eTermName-\u003eCostCenter-\u003eAlgorithm(a-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#v:toAlgorithm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.STerm",
          "name": "toData",
          "package": "SBench",
          "signature": "a -\u003e STerm a",
          "source": "src/Test-SBench-STerm.html#toData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench STerm",
          "module": "Test.SBench.STerm",
          "name": "toData",
          "normalized": "a-\u003eSTerm a",
          "package": "SBench",
          "partial": "Data",
          "signature": "a-\u003eSTerm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#v:toData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.STerm",
          "name": "toDataGen",
          "package": "SBench",
          "signature": "(a -\u003e b) -\u003e ModuleName -\u003e TermName -\u003e Data (a -\u003e b)",
          "source": "src/Test-SBench-STerm.html#toDataGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench STerm",
          "module": "Test.SBench.STerm",
          "name": "toDataGen",
          "normalized": "(a-\u003eb)-\u003eModuleName-\u003eTermName-\u003eData(a-\u003eb)",
          "package": "SBench",
          "partial": "Data Gen",
          "signature": "(a-\u003eb)-\u003eModuleName-\u003eTermName-\u003eData(a-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#v:toDataGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.STerm",
          "name": "toNamedData",
          "package": "SBench",
          "signature": "a -\u003e TermName -\u003e STerm a",
          "source": "src/Test-SBench-STerm.html#toNamedData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench STerm",
          "module": "Test.SBench.STerm",
          "name": "toNamedData",
          "normalized": "a-\u003eTermName-\u003eSTerm a",
          "package": "SBench",
          "partial": "Named Data",
          "signature": "a-\u003eTermName-\u003eSTerm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#v:toNamedData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Space.OptionSet",
          "name": "OptionSet",
          "package": "SBench",
          "source": "src/Test-SBench-Space-OptionSet.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test SBench Space OptionSet",
          "module": "Test.SBench.Space.OptionSet",
          "name": "OptionSet",
          "package": "SBench",
          "partial": "Option Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-OptionSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Space.OptionSet",
          "name": "addCC",
          "package": "SBench",
          "signature": "Algorithm a -\u003e TestOpts -\u003e TestOpts",
          "source": "src/Test-SBench-Space-OptionSet.html#addCC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Space OptionSet",
          "module": "Test.SBench.Space.OptionSet",
          "name": "addCC",
          "normalized": "Algorithm a-\u003eTestOpts-\u003eTestOpts",
          "package": "SBench",
          "partial": "CC",
          "signature": "Algorithm a-\u003eTestOpts-\u003eTestOpts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-OptionSet.html#v:addCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Space.OptionSet",
          "name": "autoRepeat",
          "package": "SBench",
          "signature": "TestOpts -\u003e TestOpts",
          "source": "src/Test-SBench-Space-OptionSet.html#autoRepeat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Space OptionSet",
          "module": "Test.SBench.Space.OptionSet",
          "name": "autoRepeat",
          "normalized": "TestOpts-\u003eTestOpts",
          "package": "SBench",
          "partial": "Repeat",
          "signature": "TestOpts-\u003eTestOpts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-OptionSet.html#v:autoRepeat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefault compiler options additional to \u003ccode\u003e\u003ca\u003egeneralCOpts\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.SBench.Space.OptionSet",
          "name": "defltCOpts",
          "package": "SBench",
          "signature": "CompilerOptions",
          "source": "src/Test-SBench-Space-OptionSet.html#defltCOpts",
          "type": "function"
        },
        "index": {
          "description": "default compiler options additional to generalCOpts",
          "hierarchy": "Test SBench Space OptionSet",
          "module": "Test.SBench.Space.OptionSet",
          "name": "defltCOpts",
          "package": "SBench",
          "partial": "COpts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-OptionSet.html#v:defltCOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault profiling options.\n\u003c/p\u003e",
          "module": "Test.SBench.Space.OptionSet",
          "name": "defltProfOpts",
          "package": "SBench",
          "signature": "ProfilingOptions",
          "source": "src/Test-SBench-Space-OptionSet.html#defltProfOpts",
          "type": "function"
        },
        "index": {
          "description": "Default profiling options",
          "hierarchy": "Test SBench Space OptionSet",
          "module": "Test.SBench.Space.OptionSet",
          "name": "defltProfOpts",
          "package": "SBench",
          "partial": "Prof Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-OptionSet.html#v:defltProfOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBy default repetitions are calculated automatically\n\u003c/p\u003e",
          "module": "Test.SBench.Space.OptionSet",
          "name": "defltRep",
          "package": "SBench",
          "signature": "Maybe Repetitions",
          "source": "src/Test-SBench-Space-OptionSet.html#defltRep",
          "type": "function"
        },
        "index": {
          "description": "By default repetitions are calculated automatically",
          "hierarchy": "Test SBench Space OptionSet",
          "module": "Test.SBench.Space.OptionSet",
          "name": "defltRep",
          "package": "SBench",
          "partial": "Rep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-OptionSet.html#v:defltRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault test options, i.e. default options for compiling and running\n   a program for space profiling.\n\u003c/p\u003e",
          "module": "Test.SBench.Space.OptionSet",
          "name": "defltTestOpts",
          "package": "SBench",
          "signature": "TestOpts",
          "source": "src/Test-SBench-Space-OptionSet.html#defltTestOpts",
          "type": "function"
        },
        "index": {
          "description": "Default test options i.e default options for compiling and running program for space profiling",
          "hierarchy": "Test SBench Space OptionSet",
          "module": "Test.SBench.Space.OptionSet",
          "name": "defltTestOpts",
          "package": "SBench",
          "partial": "Test Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-OptionSet.html#v:defltTestOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cul\u003e\u003cli\u003e Compiler options\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eOptions always added when compiling for space profiling.\n\u003c/p\u003e",
          "module": "Test.SBench.Space.OptionSet",
          "name": "generalCOpts",
          "package": "SBench",
          "signature": "CompilerOptions",
          "source": "src/Test-SBench-Space-OptionSet.html#generalCOpts",
          "type": "function"
        },
        "index": {
          "description": "Compiler options Options always added when compiling for space profiling",
          "hierarchy": "Test SBench Space OptionSet",
          "module": "Test.SBench.Space.OptionSet",
          "name": "generalCOpts",
          "package": "SBench",
          "partial": "COpts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-OptionSet.html#v:generalCOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Space.OptionSet",
          "name": "setMemSizes",
          "package": "SBench",
          "signature": "[MemSize] -\u003e TestOpts -\u003e TestOpts",
          "source": "src/Test-SBench-Space-OptionSet.html#setMemSizes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Space OptionSet",
          "module": "Test.SBench.Space.OptionSet",
          "name": "setMemSizes",
          "normalized": "[MemSize]-\u003eTestOpts-\u003eTestOpts",
          "package": "SBench",
          "partial": "Mem Sizes",
          "signature": "[MemSize]-\u003eTestOpts-\u003eTestOpts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-OptionSet.html#v:setMemSizes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Space.OptionSet",
          "name": "setNfInput",
          "package": "SBench",
          "signature": "Bool -\u003e TestOpts -\u003e TestOpts",
          "source": "src/Test-SBench-Space-OptionSet.html#setNfInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Space OptionSet",
          "module": "Test.SBench.Space.OptionSet",
          "name": "setNfInput",
          "normalized": "Bool-\u003eTestOpts-\u003eTestOpts",
          "package": "SBench",
          "partial": "Nf Input",
          "signature": "Bool-\u003eTestOpts-\u003eTestOpts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-OptionSet.html#v:setNfInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Space.OptionSet",
          "name": "setRepetitions",
          "package": "SBench",
          "signature": "Repetitions -\u003e TestOpts -\u003e TestOpts",
          "source": "src/Test-SBench-Space-OptionSet.html#setRepetitions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Space OptionSet",
          "module": "Test.SBench.Space.OptionSet",
          "name": "setRepetitions",
          "normalized": "Repetitions-\u003eTestOpts-\u003eTestOpts",
          "package": "SBench",
          "partial": "Repetitions",
          "signature": "Repetitions-\u003eTestOpts-\u003eTestOpts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-OptionSet.html#v:setRepetitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Space.Series.Test",
          "name": "Test",
          "package": "SBench",
          "source": "src/Test-SBench-Space-Series-Test.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test SBench Space Series Test",
          "module": "Test.SBench.Space.Series.Test",
          "name": "Test",
          "package": "SBench",
          "partial": "Test",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-Series-Test.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Space.Series.Test",
          "name": "makeSeries",
          "package": "SBench",
          "signature": "(TestOpts -\u003e Algorithm (a -\u003e b) -\u003e Data a -\u003e FilePath -\u003e IO d)-\u003e TestOpts-\u003e (FilePath, Title)-\u003e Algorithm (a -\u003e b)-\u003e DataGen (c -\u003e a)-\u003e [Seed c]-\u003e IO [(c, d)]",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Space Series Test",
          "module": "Test.SBench.Space.Series.Test",
          "name": "makeSeries",
          "normalized": "(TestOpts-\u003eAlgorithm(a-\u003eb)-\u003eData a-\u003eFilePath-\u003eIO c)-\u003eTestOpts-\u003e(FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(d-\u003ea)-\u003e[Seed d]-\u003eIO[(d,c)]",
          "package": "SBench",
          "partial": "Series",
          "signature": "(TestOpts-\u003eAlgorithm(a-\u003eb)-\u003eData a-\u003eFilePath-\u003eIO d)-\u003eTestOpts-\u003e(FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(c-\u003ea)-\u003e[Seed c]-\u003eIO[(c,d)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-Series-Test.html#v:makeSeries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function measures the maximal heap consumption of a given function over a series of different inputs\n   that are produced via an input generator given different seeds.\n\u003c/p\u003e",
          "module": "Test.SBench.Space.Series.Test",
          "name": "maxMemSeries",
          "package": "SBench",
          "signature": "NormalInput-\u003e (FilePath, Title)-\u003e Algorithm (a -\u003e b)-\u003e DataGen (c -\u003e a)-\u003e [Seed c]-\u003e IO [(c, Integer)]",
          "type": "function"
        },
        "index": {
          "description": "The function measures the maximal heap consumption of given function over series of different inputs that are produced via an input generator given different seeds",
          "hierarchy": "Test SBench Space Series Test",
          "module": "Test.SBench.Space.Series.Test",
          "name": "maxMemSeries",
          "normalized": "NormalInput-\u003e(FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(c-\u003ea)-\u003e[Seed c]-\u003eIO[(c,Integer)]",
          "package": "SBench",
          "partial": "Mem Series",
          "signature": "NormalInput-\u003e(FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(c-\u003ea)-\u003e[Seed c]-\u003eIO[(c,Integer)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-Series-Test.html#v:maxMemSeries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function acts similar to \u003ccode\u003e\u003ca\u003emaxMemSeries\u003c/a\u003e\u003c/code\u003e, but instead of only \u003ccode\u003e\u003ca\u003eNormalInput\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTestOpts\u003c/a\u003e\u003c/code\u003e can be set manually\n   via the first parameter.\n\u003c/p\u003e",
          "module": "Test.SBench.Space.Series.Test",
          "name": "maxMemSeriesWith",
          "package": "SBench",
          "signature": "TestOpts -\u003e (FilePath, Title) -\u003e Algorithm (a -\u003e b) -\u003e DataGen (c -\u003e a) -\u003e [Seed c] -\u003e IO [(c, Integer)]",
          "source": "src/Test-SBench-Space-Series-Test.html#maxMemSeriesWith",
          "type": "function"
        },
        "index": {
          "description": "The function acts similar to maxMemSeries but instead of only NormalInput TestOpts can be set manually via the first parameter",
          "hierarchy": "Test SBench Space Series Test",
          "module": "Test.SBench.Space.Series.Test",
          "name": "maxMemSeriesWith",
          "normalized": "TestOpts-\u003e(FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(c-\u003ea)-\u003e[Seed c]-\u003eIO[(c,Integer)]",
          "package": "SBench",
          "partial": "Mem Series With",
          "signature": "TestOpts-\u003e(FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(c-\u003ea)-\u003e[Seed c]-\u003eIO[(c,Integer)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-Series-Test.html#v:maxMemSeriesWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Space.Single.ExploreProfile",
          "name": "ExploreProfile",
          "package": "SBench",
          "source": "src/Test-SBench-Space-Single-ExploreProfile.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test SBench Space Single ExploreProfile",
          "module": "Test.SBench.Space.Single.ExploreProfile",
          "name": "ExploreProfile",
          "package": "SBench",
          "partial": "Explore Profile",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-Single-ExploreProfile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Space.Single.ExploreProfile",
          "name": "getMaxMem",
          "package": "SBench",
          "signature": "FilePath -\u003e IO Integer",
          "source": "src/Test-SBench-Space-Single-ExploreProfile.html#getMaxMem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Space Single ExploreProfile",
          "module": "Test.SBench.Space.Single.ExploreProfile",
          "name": "getMaxMem",
          "normalized": "FilePath-\u003eIO Integer",
          "package": "SBench",
          "partial": "Max Mem",
          "signature": "FilePath-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-Single-ExploreProfile.html#v:getMaxMem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Space.Single.ExploreProfile",
          "name": "getMemLine",
          "package": "SBench",
          "signature": "FilePath -\u003e IO [(Double, Integer)]",
          "source": "src/Test-SBench-Space-Single-ExploreProfile.html#getMemLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Space Single ExploreProfile",
          "module": "Test.SBench.Space.Single.ExploreProfile",
          "name": "getMemLine",
          "normalized": "FilePath-\u003eIO[(Double,Integer)]",
          "package": "SBench",
          "partial": "Mem Line",
          "signature": "FilePath-\u003eIO[(Double,Integer)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-Single-ExploreProfile.html#v:getMemLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Space.Single.Test",
          "name": "Test",
          "package": "SBench",
          "source": "src/Test-SBench-Space-Single-Test.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test SBench Space Single Test",
          "module": "Test.SBench.Space.Single.Test",
          "name": "Test",
          "package": "SBench",
          "partial": "Test",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-Single-Test.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the maximal heap occupied by the algorithm.\n   Since the algorithms comes with a cost center annotation this is used to\n   explore what heap consumption should be measured (here: all heap directly\n   or indirectly used by the given algorithm).\n\u003c/p\u003e",
          "module": "Test.SBench.Space.Single.Test",
          "name": "getMaxMem",
          "package": "SBench",
          "signature": "NormalInput-\u003e Algorithm (a -\u003e b)-\u003e Data a-\u003e FilePath-\u003e IO Integer",
          "type": "function"
        },
        "index": {
          "description": "Get the maximal heap occupied by the algorithm Since the algorithms comes with cost center annotation this is used to explore what heap consumption should be measured here all heap directly or indirectly used by the given algorithm",
          "hierarchy": "Test SBench Space Single Test",
          "module": "Test.SBench.Space.Single.Test",
          "name": "getMaxMem",
          "normalized": "NormalInput-\u003eAlgorithm(a-\u003eb)-\u003eData a-\u003eFilePath-\u003eIO Integer",
          "package": "SBench",
          "partial": "Max Mem",
          "signature": "NormalInput-\u003eAlgorithm(a-\u003eb)-\u003eData a-\u003eFilePath-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-Single-Test.html#v:getMaxMem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003egetMaxMem\u003c/a\u003e\u003c/code\u003e, but \u003ccode\u003e\u003ca\u003eTestOpts\u003c/a\u003e\u003c/code\u003e can be set by the user.\n\u003c/p\u003e",
          "module": "Test.SBench.Space.Single.Test",
          "name": "getMaxMemWith",
          "package": "SBench",
          "signature": "TestOpts -\u003e Algorithm (a -\u003e b) -\u003e Data a -\u003e FilePath -\u003e IO Integer",
          "source": "src/Test-SBench-Space-Single-Test.html#getMaxMemWith",
          "type": "function"
        },
        "index": {
          "description": "As getMaxMem but TestOpts can be set by the user",
          "hierarchy": "Test SBench Space Single Test",
          "module": "Test.SBench.Space.Single.Test",
          "name": "getMaxMemWith",
          "normalized": "TestOpts-\u003eAlgorithm(a-\u003eb)-\u003eData a-\u003eFilePath-\u003eIO Integer",
          "package": "SBench",
          "partial": "Max Mem With",
          "signature": "TestOpts-\u003eAlgorithm(a-\u003eb)-\u003eData a-\u003eFilePath-\u003eIO Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-Single-Test.html#v:getMaxMemWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function generates a heap profile, returns the heapconsumption over time as series and\n   also stores the series as an .sbench file.\n\u003c/p\u003e",
          "module": "Test.SBench.Space.Single.Test",
          "name": "getMemLine",
          "package": "SBench",
          "signature": "NormalInput-\u003e (FilePath, Title)-\u003e Algorithm (a -\u003e b)-\u003e Data a-\u003e IO [(Double, Integer)]",
          "type": "function"
        },
        "index": {
          "description": "The function generates heap profile returns the heapconsumption over time as series and also stores the series as an sbench file",
          "hierarchy": "Test SBench Space Single Test",
          "module": "Test.SBench.Space.Single.Test",
          "name": "getMemLine",
          "normalized": "NormalInput-\u003e(FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eData a-\u003eIO[(Double,Integer)]",
          "package": "SBench",
          "partial": "Mem Line",
          "signature": "NormalInput-\u003e(FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eData a-\u003eIO[(Double,Integer)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-Single-Test.html#v:getMemLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Space.Single.Test",
          "name": "getMemLineWith",
          "package": "SBench",
          "signature": "TestOpts -\u003e (FilePath, Title) -\u003e Algorithm (a -\u003e b) -\u003e Data a -\u003e IO [(Double, Integer)]",
          "source": "src/Test-SBench-Space-Single-Test.html#getMemLineWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Space Single Test",
          "module": "Test.SBench.Space.Single.Test",
          "name": "getMemLineWith",
          "normalized": "TestOpts-\u003e(FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eData a-\u003eIO[(Double,Integer)]",
          "package": "SBench",
          "partial": "Mem Line With",
          "signature": "TestOpts-\u003e(FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eData a-\u003eIO[(Double,Integer)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-Single-Test.html#v:getMemLineWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate only the heap profile.\n\u003c/p\u003e",
          "module": "Test.SBench.Space.Single.Test",
          "name": "getProfile",
          "package": "SBench",
          "signature": "TestOpts -\u003e Algorithm (a -\u003e b) -\u003e Data a -\u003e FilePath -\u003e IO FilePath",
          "source": "src/Test-SBench-Space-Single-Test.html#getProfile",
          "type": "function"
        },
        "index": {
          "description": "Create only the heap profile",
          "hierarchy": "Test SBench Space Single Test",
          "module": "Test.SBench.Space.Single.Test",
          "name": "getProfile",
          "normalized": "TestOpts-\u003eAlgorithm(a-\u003eb)-\u003eData a-\u003eFilePath-\u003eIO FilePath",
          "package": "SBench",
          "partial": "Profile",
          "signature": "TestOpts-\u003eAlgorithm(a-\u003eb)-\u003eData a-\u003eFilePath-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-Single-Test.html#v:getProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for runtime tests are provided. They are basically a wrapper to \n   a call to the criterion function \u003ca\u003eCriterion.Main.defaultMainWith\u003c/a\u003e.\n   The measurement data (usually stored in temp.csv) is than postprocessed\n   by extracting only the mean runtime for each run and tupling it with the\n   respective input seed.\n   Results are then returned as list of tuples and optionally stored in a\n   .sbench file (see \u003ca\u003eTest.File.FileOps\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.SBench.Time.Series.Test",
          "name": "Test",
          "package": "SBench",
          "source": "src/Test-SBench-Time-Series-Test.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for runtime tests are provided They are basically wrapper to call to the criterion function Criterion.Main.defaultMainWith The measurement data usually stored in temp.csv is than postprocessed by extracting only the mean runtime for each run and tupling it with the respective input seed Results are then returned as list of tuples and optionally stored in sbench file see Test.File.FileOps",
          "hierarchy": "Test SBench Time Series Test",
          "module": "Test.SBench.Time.Series.Test",
          "name": "Test",
          "package": "SBench",
          "partial": "Test",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Time-Series-Test.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Time.Series.Test",
          "name": "nfRuntimeSeries",
          "package": "SBench",
          "signature": "Maybe (BuildOptions, ExeOptions, FilePath, Title) -\u003e Algorithm (a -\u003e b) -\u003e DataGen (c -\u003e a) -\u003e [Seed c] -\u003e IO [(c, Double)]",
          "source": "src/Test-SBench-Time-Series-Test.html#nfRuntimeSeries",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Time Series Test",
          "module": "Test.SBench.Time.Series.Test",
          "name": "nfRuntimeSeries",
          "normalized": "Maybe(BuildOptions,ExeOptions,FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(c-\u003ea)-\u003e[Seed c]-\u003eIO[(c,Double)]",
          "package": "SBench",
          "partial": "Runtime Series",
          "signature": "Maybe(BuildOptions,ExeOptions,FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(c-\u003ea)-\u003e[Seed c]-\u003eIO[(c,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Time-Series-Test.html#v:nfRuntimeSeries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eruntimeSeriesWith\u003c/a\u003e\u003c/code\u003e, but \u003ca\u003eCriterion.Config.Config\u003c/a\u003e is set to a default.\n\u003c/p\u003e",
          "module": "Test.SBench.Time.Series.Test",
          "name": "runtimeSeries",
          "package": "SBench",
          "signature": "EvalMod -\u003e Maybe (BuildOptions, ExeOptions, FilePath, Title) -\u003e Algorithm (a -\u003e b) -\u003e DataGen (c -\u003e a) -\u003e [Seed c] -\u003e IO [(c, Double)]",
          "source": "src/Test-SBench-Time-Series-Test.html#runtimeSeries",
          "type": "function"
        },
        "index": {
          "description": "As runtimeSeriesWith but Criterion.Config.Config is set to default",
          "hierarchy": "Test SBench Time Series Test",
          "module": "Test.SBench.Time.Series.Test",
          "name": "runtimeSeries",
          "normalized": "EvalMod-\u003eMaybe(BuildOptions,ExeOptions,FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(c-\u003ea)-\u003e[Seed c]-\u003eIO[(c,Double)]",
          "package": "SBench",
          "partial": "Series",
          "signature": "EvalMod-\u003eMaybe(BuildOptions,ExeOptions,FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(c-\u003ea)-\u003e[Seed c]-\u003eIO[(c,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Time-Series-Test.html#v:runtimeSeries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMost general function to perform runtime measurements for a series of inputs.\n\u003c/p\u003e",
          "module": "Test.SBench.Time.Series.Test",
          "name": "runtimeSeriesWith",
          "package": "SBench",
          "signature": "Config-\u003e EvalMod-\u003e Maybe (BuildOptions, ExeOptions, FilePath, Title)-\u003e Algorithm (a -\u003e b)-\u003e DataGen (c -\u003e a)-\u003e [Seed c]-\u003e IO [(c, Double)]",
          "type": "function"
        },
        "index": {
          "description": "Most general function to perform runtime measurements for series of inputs",
          "hierarchy": "Test SBench Time Series Test",
          "module": "Test.SBench.Time.Series.Test",
          "name": "runtimeSeriesWith",
          "normalized": "Config-\u003eEvalMod-\u003eMaybe(BuildOptions,ExeOptions,FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(c-\u003ea)-\u003e[Seed c]-\u003eIO[(c,Double)]",
          "package": "SBench",
          "partial": "Series With",
          "signature": "Config-\u003eEvalMod-\u003eMaybe(BuildOptions,ExeOptions,FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(c-\u003ea)-\u003e[Seed c]-\u003eIO[(c,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Time-Series-Test.html#v:runtimeSeriesWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Time.Series.Test",
          "name": "scaleRt",
          "package": "SBench",
          "signature": "Double -\u003e [(Int, Double)] -\u003e [(Int, Double)]",
          "source": "src/Test-SBench-Time-Series-Test.html#scaleRt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Time Series Test",
          "module": "Test.SBench.Time.Series.Test",
          "name": "scaleRt",
          "normalized": "Double-\u003e[(Int,Double)]-\u003e[(Int,Double)]",
          "package": "SBench",
          "partial": "Rt",
          "signature": "Double-\u003e[(Int,Double)]-\u003e[(Int,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Time-Series-Test.html#v:scaleRt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.SBench.Time.Series.Test",
          "name": "whnfRuntimeSeries",
          "package": "SBench",
          "signature": "Maybe (BuildOptions, ExeOptions, FilePath, Title) -\u003e Algorithm (a -\u003e b) -\u003e DataGen (c -\u003e a) -\u003e [Seed c] -\u003e IO [(c, Double)]",
          "source": "src/Test-SBench-Time-Series-Test.html#whnfRuntimeSeries",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test SBench Time Series Test",
          "module": "Test.SBench.Time.Series.Test",
          "name": "whnfRuntimeSeries",
          "normalized": "Maybe(BuildOptions,ExeOptions,FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(c-\u003ea)-\u003e[Seed c]-\u003eIO[(c,Double)]",
          "package": "SBench",
          "partial": "Runtime Series",
          "signature": "Maybe(BuildOptions,ExeOptions,FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(c-\u003ea)-\u003e[Seed c]-\u003eIO[(c,Double)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Time-Series-Test.html#v:whnfRuntimeSeries"
      }
    }
  ]
]