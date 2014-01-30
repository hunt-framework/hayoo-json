[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-FileOps.html#",
      "description": {
        "fct-module": "Test.SBench.File.FileOps",
        "fct-package": "SBench",
        "fct-signature": "module",
        "fct-source": "src/Test-SBench-File-FileOps.html",
        "fct-type": "module",
        "title": "FileOps"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench File FileOps",
        "module": "Test.SBench.File.FileOps",
        "name": "FileOps",
        "normalized": "",
        "package": "SBench",
        "partial": "File Ops",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-FileOps.html#v:criterion2series",
      "description": {
        "fct-descr": "\u003cp\u003eRead the mean runtimes of a criterion data file and tuple them with seeds\n   to a seed-runtime series.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.File.FileOps",
        "fct-package": "SBench",
        "fct-signature": "[a] -\u003e CriterionFile -\u003e IO [(a, Double)]",
        "fct-source": "src/Test-SBench-File-FileOps.html#criterion2series",
        "fct-type": "function",
        "title": "criterion2series"
      },
      "index": {
        "description": "Read the mean runtimes of criterion data file and tuple them with seeds to seed-runtime series",
        "hierarchy": "Test SBench File FileOps",
        "module": "Test.SBench.File.FileOps",
        "name": "criterion2series",
        "normalized": "[a]-\u003eCriterionFile-\u003eIO[(a,Double)]",
        "package": "SBench",
        "partial": "",
        "signature": "[a]-\u003eCriterionFile-\u003eIO[(a,Double)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-FileOps.html#v:sbench2series",
      "description": {
        "fct-descr": "\u003cp\u003eRead a measurment series from a .sbench data file.\n   Additionally to the measurement series a data structure with meta informations is returned.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.File.FileOps",
        "fct-package": "SBench",
        "fct-signature": "FilePath -\u003e IO (MetaInfo Double Double, [(Double, Double)])",
        "fct-source": "src/Test-SBench-File-FileOps.html#sbench2series",
        "fct-type": "function",
        "title": "sbench2series"
      },
      "index": {
        "description": "Read measurment series from sbench data file Additionally to the measurement series data structure with meta informations is returned",
        "hierarchy": "Test SBench File FileOps",
        "module": "Test.SBench.File.FileOps",
        "name": "sbench2series",
        "normalized": "FilePath-\u003eIO(MetaInfo Double Double,[(Double,Double)])",
        "package": "SBench",
        "partial": "",
        "signature": "FilePath-\u003eIO(MetaInfo Double Double,[(Double,Double)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-FileOps.html#v:series2sbench",
      "description": {
        "fct-descr": "\u003cp\u003eStore a series of measurements over \u003cem\u003edifferent inputs\u003c/em\u003e in a .sbench file.\n   The SBench file format take some extra information about the measurement.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.File.FileOps",
        "fct-package": "SBench",
        "fct-signature": "(String, String)-\u003e Maybe EvalMod-\u003e Algorithm (c -\u003e d)-\u003e DataGen (e -\u003e c)-\u003e Title-\u003e SBenchFile-\u003e [(a, b)]-\u003e IO SBenchFile",
        "fct-type": "function",
        "title": "series2sbench"
      },
      "index": {
        "description": "Store series of measurements over different inputs in sbench file The SBench file format take some extra information about the measurement",
        "hierarchy": "Test SBench File FileOps",
        "module": "Test.SBench.File.FileOps",
        "name": "series2sbench",
        "normalized": "(String,String)-\u003eMaybe EvalMod-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(c-\u003ea)-\u003eTitle-\u003eSBenchFile-\u003e[(d,e)]-\u003eIO SBenchFile",
        "package": "SBench",
        "partial": "",
        "signature": "(String,String)-\u003eMaybe EvalMod-\u003eAlgorithm(c-\u003ed)-\u003eDataGen(e-\u003ec)-\u003eTitle-\u003eSBenchFile-\u003e[(a,b)]-\u003eIO SBenchFile"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-FileOps.html#v:series2sbench-39-",
      "description": {
        "fct-descr": "\u003cp\u003eStore a series of measurements with \u003cem\u003ea single input\u003c/em\u003e in a .sbench file.\n   The SBench file format take some extra information about the measurement.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.File.FileOps",
        "fct-package": "SBench",
        "fct-signature": "(String, String)-\u003e Maybe EvalMod-\u003e Algorithm (c -\u003e d)-\u003e Data c-\u003e Title-\u003e SBenchFile-\u003e [(a, b)]-\u003e IO SBenchFile",
        "fct-type": "function",
        "title": "series2sbench'"
      },
      "index": {
        "description": "Store series of measurements with single input in sbench file The SBench file format take some extra information about the measurement",
        "hierarchy": "Test SBench File FileOps",
        "module": "Test.SBench.File.FileOps",
        "name": "series2sbench'",
        "normalized": "(String,String)-\u003eMaybe EvalMod-\u003eAlgorithm(a-\u003eb)-\u003eData a-\u003eTitle-\u003eSBenchFile-\u003e[(c,d)]-\u003eIO SBenchFile",
        "package": "SBench",
        "partial": "",
        "signature": "(String,String)-\u003eMaybe EvalMod-\u003eAlgorithm(c-\u003ed)-\u003eData c-\u003eTitle-\u003eSBenchFile-\u003e[(a,b)]-\u003eIO SBenchFile"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#",
      "description": {
        "fct-module": "Test.SBench.File.Types",
        "fct-package": "SBench",
        "fct-signature": "module",
        "fct-source": "src/Test-SBench-File-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench File Types",
        "module": "Test.SBench.File.Types",
        "name": "Types",
        "normalized": "",
        "package": "SBench",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#t:MetaInfo",
      "description": {
        "fct-descr": "\u003cp\u003eMetainformation stored in the header of all .sbench files.\n   Part of the \u003ccode\u003e\u003ca\u003eMetaInfo\u003c/a\u003e\u003c/code\u003e entries are usually calculated automatically.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.File.Types",
        "fct-package": "SBench",
        "fct-signature": "data",
        "fct-source": "src/Test-SBench-File-Types.html#MetaInfo",
        "fct-type": "data",
        "title": "MetaInfo"
      },
      "index": {
        "description": "Metainformation stored in the header of all sbench files Part of the MetaInfo entries are usually calculated automatically",
        "hierarchy": "Test SBench File Types",
        "module": "Test.SBench.File.Types",
        "name": "MetaInfo",
        "normalized": "",
        "package": "SBench",
        "partial": "Meta Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#t:Range",
      "description": {
        "fct-module": "Test.SBench.File.Types",
        "fct-package": "SBench",
        "fct-signature": "data",
        "fct-source": "src/Test-SBench-File-Types.html#Range",
        "fct-type": "data",
        "title": "Range"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench File Types",
        "module": "Test.SBench.File.Types",
        "name": "Range",
        "normalized": "",
        "package": "SBench",
        "partial": "Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#v:AutoRange",
      "description": {
        "fct-module": "Test.SBench.File.Types",
        "fct-package": "SBench",
        "fct-signature": "AutoRange",
        "fct-source": "src/Test-SBench-File-Types.html#Range",
        "fct-type": "function",
        "title": "AutoRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench File Types",
        "module": "Test.SBench.File.Types",
        "name": "AutoRange",
        "normalized": "",
        "package": "SBench",
        "partial": "Auto Range",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#v:ManRange",
      "description": {
        "fct-module": "Test.SBench.File.Types",
        "fct-package": "SBench",
        "fct-signature": "ManRange (a, a)",
        "fct-source": "src/Test-SBench-File-Types.html#Range",
        "fct-type": "function",
        "title": "ManRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench File Types",
        "module": "Test.SBench.File.Types",
        "name": "ManRange",
        "normalized": "ManRange(a,a)",
        "package": "SBench",
        "partial": "Man Range",
        "signature": "ManRange(a,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#v:MetaInfo",
      "description": {
        "fct-module": "Test.SBench.File.Types",
        "fct-package": "SBench",
        "fct-signature": "MetaInfo",
        "fct-source": "src/Test-SBench-File-Types.html#MetaInfo",
        "fct-type": "function",
        "title": "MetaInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench File Types",
        "module": "Test.SBench.File.Types",
        "name": "MetaInfo",
        "normalized": "",
        "package": "SBench",
        "partial": "Meta Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#v:buildOptions",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.SBench.File.Types",
        "fct-package": "SBench",
        "fct-signature": "String",
        "fct-source": "src/Test-SBench-File-Types.html#MetaInfo",
        "fct-type": "function",
        "title": "buildOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench File Types",
        "module": "Test.SBench.File.Types",
        "name": "buildOptions",
        "normalized": "",
        "package": "SBench",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#v:evalMod",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e means an input generator,\n   \u003ccode\u003e\u003ca\u003eRight\u003c/a\u003e\u003c/code\u003e a single input\n\u003c/p\u003e",
        "fct-module": "Test.SBench.File.Types",
        "fct-package": "SBench",
        "fct-signature": "Maybe EvalMod",
        "fct-source": "src/Test-SBench-File-Types.html#MetaInfo",
        "fct-type": "function",
        "title": "evalMod"
      },
      "index": {
        "description": "Left means an input generator Right single input",
        "hierarchy": "Test SBench File Types",
        "module": "Test.SBench.File.Types",
        "name": "evalMod",
        "normalized": "",
        "package": "SBench",
        "partial": "Mod",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#v:exeOptions",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.SBench.File.Types",
        "fct-package": "SBench",
        "fct-signature": "String",
        "fct-source": "src/Test-SBench-File-Types.html#MetaInfo",
        "fct-type": "function",
        "title": "exeOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench File Types",
        "module": "Test.SBench.File.Types",
        "name": "exeOptions",
        "normalized": "",
        "package": "SBench",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#v:graphRanges",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.SBench.File.Types",
        "fct-package": "SBench",
        "fct-signature": "(Range a, Range b)",
        "fct-source": "src/Test-SBench-File-Types.html#MetaInfo",
        "fct-type": "function",
        "title": "graphRanges"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench File Types",
        "module": "Test.SBench.File.Types",
        "name": "graphRanges",
        "normalized": "(Range a,Range b)",
        "package": "SBench",
        "partial": "Ranges",
        "signature": "(Range a,Range b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#v:header",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.SBench.File.Types",
        "fct-package": "SBench",
        "fct-signature": "[String]",
        "fct-source": "src/Test-SBench-File-Types.html#MetaInfo",
        "fct-type": "function",
        "title": "header"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench File Types",
        "module": "Test.SBench.File.Types",
        "name": "header",
        "normalized": "[String]",
        "package": "SBench",
        "partial": "",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#v:miAlgName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.SBench.File.Types",
        "fct-package": "SBench",
        "fct-signature": "String",
        "fct-source": "src/Test-SBench-File-Types.html#MetaInfo",
        "fct-type": "function",
        "title": "miAlgName"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench File Types",
        "module": "Test.SBench.File.Types",
        "name": "miAlgName",
        "normalized": "",
        "package": "SBench",
        "partial": "Alg Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#v:miGenName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.SBench.File.Types",
        "fct-package": "SBench",
        "fct-signature": "Either String String",
        "fct-source": "src/Test-SBench-File-Types.html#MetaInfo",
        "fct-type": "function",
        "title": "miGenName"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench File Types",
        "module": "Test.SBench.File.Types",
        "name": "miGenName",
        "normalized": "",
        "package": "SBench",
        "partial": "Gen Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#v:miGraphTitle",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.SBench.File.Types",
        "fct-package": "SBench",
        "fct-signature": "String",
        "fct-source": "src/Test-SBench-File-Types.html#MetaInfo",
        "fct-type": "function",
        "title": "miGraphTitle"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench File Types",
        "module": "Test.SBench.File.Types",
        "name": "miGraphTitle",
        "normalized": "",
        "package": "SBench",
        "partial": "Graph Title",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-File-Types.html#v:sbenchVersion",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.SBench.File.Types",
        "fct-package": "SBench",
        "fct-signature": "String",
        "fct-source": "src/Test-SBench-File-Types.html#MetaInfo",
        "fct-type": "function",
        "title": "sbenchVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench File Types",
        "module": "Test.SBench.File.Types",
        "name": "sbenchVersion",
        "normalized": "",
        "package": "SBench",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#",
      "description": {
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "module",
        "fct-source": "src/Test-SBench-Options.html",
        "fct-type": "module",
        "title": "Options"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "Options",
        "normalized": "",
        "package": "SBench",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:Breakdown",
      "description": {
        "fct-descr": "\u003cp\u003eThe possible types of breakdowns. \n\u003c/p\u003e",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Breakdown"
      },
      "index": {
        "description": "The possible types of breakdowns",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "Breakdown",
        "normalized": "",
        "package": "SBench",
        "partial": "Breakdown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:CompilerOptions",
      "description": {
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "type",
        "fct-source": "src/Test-SBench-Options.html#CompilerOptions",
        "fct-type": "type",
        "title": "CompilerOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "CompilerOptions",
        "normalized": "",
        "package": "SBench",
        "partial": "Compiler Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:EvalMod",
      "description": {
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "data",
        "fct-source": "src/Test-SBench-Options.html#EvalMod",
        "fct-type": "data",
        "title": "EvalMod"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "EvalMod",
        "normalized": "",
        "package": "SBench",
        "partial": "Eval Mod",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:Imports",
      "description": {
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "type",
        "fct-source": "src/Test-SBench-Options.html#Imports",
        "fct-type": "type",
        "title": "Imports"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "Imports",
        "normalized": "",
        "package": "SBench",
        "partial": "Imports",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:MemSize",
      "description": {
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "data",
        "fct-source": "src/Test-SBench-Options.html#MemSize",
        "fct-type": "data",
        "title": "MemSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "MemSize",
        "normalized": "",
        "package": "SBench",
        "partial": "Mem Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:MemUnit",
      "description": {
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "data",
        "fct-source": "src/Test-SBench-Options.html#MemUnit",
        "fct-type": "data",
        "title": "MemUnit"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "MemUnit",
        "normalized": "",
        "package": "SBench",
        "partial": "Mem Unit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:MemoryOptions",
      "description": {
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "type",
        "fct-source": "src/Test-SBench-Options.html#MemoryOptions",
        "fct-type": "type",
        "title": "MemoryOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "MemoryOptions",
        "normalized": "",
        "package": "SBench",
        "partial": "Memory Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:NormalInput",
      "description": {
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "type",
        "fct-source": "src/Test-SBench-Options.html#NormalInput",
        "fct-type": "type",
        "title": "NormalInput"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "NormalInput",
        "normalized": "",
        "package": "SBench",
        "partial": "Normal Input",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:ProfParam",
      "description": {
        "fct-descr": "\u003cp\u003eThe possible types of parameters. \n\u003c/p\u003e",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "ProfParam"
      },
      "index": {
        "description": "The possible types of parameters",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "ProfParam",
        "normalized": "",
        "package": "SBench",
        "partial": "Prof Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:ProfilingOptions",
      "description": {
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "type",
        "fct-source": "src/Test-SBench-Options.html#ProfilingOptions",
        "fct-type": "type",
        "title": "ProfilingOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "ProfilingOptions",
        "normalized": "",
        "package": "SBench",
        "partial": "Profiling Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:ProgramArguments",
      "description": {
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "type",
        "fct-source": "src/Test-SBench-Options.html#ProgramArguments",
        "fct-type": "type",
        "title": "ProgramArguments"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "ProgramArguments",
        "normalized": "",
        "package": "SBench",
        "partial": "Program Arguments",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:Repetitions",
      "description": {
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "type",
        "fct-source": "src/Test-SBench-Options.html#Repetitions",
        "fct-type": "type",
        "title": "Repetitions"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "Repetitions",
        "normalized": "",
        "package": "SBench",
        "partial": "Repetitions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:Restriction",
      "description": {
        "fct-descr": "\u003cp\u003eThe possible filters. Note that these are imposed by the runtime,\nso we cannot override them on the application side. \n\u003c/p\u003e",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Restriction"
      },
      "index": {
        "description": "The possible filters Note that these are imposed by the runtime so we cannot override them on the application side",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "Restriction",
        "normalized": "",
        "package": "SBench",
        "partial": "Restriction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:RuntimeOptions",
      "description": {
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "data",
        "fct-source": "src/Test-SBench-Options.html#RuntimeOptions",
        "fct-type": "data",
        "title": "RuntimeOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "RuntimeOptions",
        "normalized": "",
        "package": "SBench",
        "partial": "Runtime Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:TestOpts",
      "description": {
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "data",
        "fct-source": "src/Test-SBench-Options.html#TestOpts",
        "fct-type": "data",
        "title": "TestOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "TestOpts",
        "normalized": "",
        "package": "SBench",
        "partial": "Test Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:ThreadNum",
      "description": {
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "type",
        "fct-source": "src/Test-SBench-Options.html#ThreadNum",
        "fct-type": "type",
        "title": "ThreadNum"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "ThreadNum",
        "normalized": "",
        "package": "SBench",
        "partial": "Thread Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#t:Title",
      "description": {
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "type",
        "fct-source": "src/Test-SBench-Options.html#Title",
        "fct-type": "type",
        "title": "Title"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "Title",
        "normalized": "",
        "package": "SBench",
        "partial": "Title",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:B",
      "description": {
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "B",
        "fct-source": "src/Test-SBench-Options.html#MemUnit",
        "fct-type": "function",
        "title": "B"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "B",
        "normalized": "",
        "package": "SBench",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:BBiography",
      "description": {
        "fct-descr": "\u003cp\u003eBreakdown by biography (phase of an object's lifetime).\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "BBiography",
        "fct-type": "function",
        "title": "BBiography"
      },
      "index": {
        "description": "Breakdown by biography phase of an object lifetime",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "BBiography",
        "normalized": "",
        "package": "SBench",
        "partial": "BBiography",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:BCostCentreStack",
      "description": {
        "fct-descr": "\u003cp\u003eBreakdown by cost centre stack (origin of the data).\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "BCostCentreStack",
        "fct-type": "function",
        "title": "BCostCentreStack"
      },
      "index": {
        "description": "Breakdown by cost centre stack origin of the data",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "BCostCentreStack",
        "normalized": "",
        "package": "SBench",
        "partial": "BCost Centre Stack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:BDescription",
      "description": {
        "fct-descr": "\u003cp\u003eBreakdown by closure description (constructor name or some\n unique identifier).\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "BDescription",
        "fct-type": "function",
        "title": "BDescription"
      },
      "index": {
        "description": "Breakdown by closure description constructor name or some unique identifier",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "BDescription",
        "normalized": "",
        "package": "SBench",
        "partial": "BDescription",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:BModule",
      "description": {
        "fct-descr": "\u003cp\u003eBreakdown by module (code responsible for the data).\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "BModule",
        "fct-type": "function",
        "title": "BModule"
      },
      "index": {
        "description": "Breakdown by module code responsible for the data",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "BModule",
        "normalized": "",
        "package": "SBench",
        "partial": "BModule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:BRetainer",
      "description": {
        "fct-descr": "\u003cp\u003eBreakdown by retainer set (effectively the entities that hold\n a direct reference to the data in question).\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "BRetainer",
        "fct-type": "function",
        "title": "BRetainer"
      },
      "index": {
        "description": "Breakdown by retainer set effectively the entities that hold direct reference to the data in question",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "BRetainer",
        "normalized": "",
        "package": "SBench",
        "partial": "BRetainer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:BType",
      "description": {
        "fct-descr": "\u003cp\u003eBreakdown by type (or an approximation if it is not known\n exactly).\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "BType",
        "fct-type": "function",
        "title": "BType"
      },
      "index": {
        "description": "Breakdown by type or an approximation if it is not known exactly",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "BType",
        "normalized": "",
        "package": "SBench",
        "partial": "BType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:G",
      "description": {
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "G",
        "fct-source": "src/Test-SBench-Options.html#MemUnit",
        "fct-type": "function",
        "title": "G"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "G",
        "normalized": "",
        "package": "SBench",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:Heap",
      "description": {
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "Heap Int MemUnit",
        "fct-source": "src/Test-SBench-Options.html#MemSize",
        "fct-type": "function",
        "title": "Heap"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "Heap",
        "normalized": "",
        "package": "SBench",
        "partial": "Heap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:K",
      "description": {
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "K",
        "fct-source": "src/Test-SBench-Options.html#MemUnit",
        "fct-type": "function",
        "title": "K"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "K",
        "normalized": "",
        "package": "SBench",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:M",
      "description": {
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "M",
        "fct-source": "src/Test-SBench-Options.html#MemUnit",
        "fct-type": "function",
        "title": "M"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "M",
        "normalized": "",
        "package": "SBench",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:NF",
      "description": {
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "NF",
        "fct-source": "src/Test-SBench-Options.html#EvalMod",
        "fct-type": "function",
        "title": "NF"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "NF",
        "normalized": "",
        "package": "SBench",
        "partial": "NF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:PPBreakdown",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of breakdown.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "PPBreakdown Breakdown",
        "fct-type": "function",
        "title": "PPBreakdown"
      },
      "index": {
        "description": "The type of breakdown",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "PPBreakdown",
        "normalized": "",
        "package": "SBench",
        "partial": "PPBreakdown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:PPIncludeThreads",
      "description": {
        "fct-descr": "\u003cp\u003eWhether to include memory taken up by threads.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "PPIncludeThreads",
        "fct-type": "function",
        "title": "PPIncludeThreads"
      },
      "index": {
        "description": "Whether to include memory taken up by threads",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "PPIncludeThreads",
        "normalized": "",
        "package": "SBench",
        "partial": "PPInclude Threads",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:PPInterval",
      "description": {
        "fct-descr": "\u003cp\u003eSampling interval in seconds.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "PPInterval Float",
        "fct-type": "function",
        "title": "PPInterval"
      },
      "index": {
        "description": "Sampling interval in seconds",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "PPInterval",
        "normalized": "",
        "package": "SBench",
        "partial": "PPInterval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:PPNameLength",
      "description": {
        "fct-descr": "\u003cp\u003eThe maximum length of cost centre stack names.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "PPNameLength Int",
        "fct-type": "function",
        "title": "PPNameLength"
      },
      "index": {
        "description": "The maximum length of cost centre stack names",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "PPNameLength",
        "normalized": "",
        "package": "SBench",
        "partial": "PPName Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:PPRestriction",
      "description": {
        "fct-descr": "\u003cp\u003eAn additional filter on the runtime side.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "PPRestriction Restriction [String]",
        "fct-type": "function",
        "title": "PPRestriction"
      },
      "index": {
        "description": "An additional filter on the runtime side",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "PPRestriction",
        "normalized": "PPRestriction Restriction[String]",
        "package": "SBench",
        "partial": "PPRestriction",
        "signature": "PPRestriction Restriction[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:PPRetainerLimit",
      "description": {
        "fct-descr": "\u003cp\u003eRetainer set size limit.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "PPRetainerLimit Int",
        "fct-type": "function",
        "title": "PPRetainerLimit"
      },
      "index": {
        "description": "Retainer set size limit",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "PPRetainerLimit",
        "normalized": "",
        "package": "SBench",
        "partial": "PPRetainer Limit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:RBiography",
      "description": {
        "fct-descr": "\u003cp\u003eShow only closures with one of the specified biographies,\n which must come from the set {lag, drag, void, use}.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "RBiography",
        "fct-type": "function",
        "title": "RBiography"
      },
      "index": {
        "description": "Show only closures with one of the specified biographies which must come from the set lag drag void use",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "RBiography",
        "normalized": "",
        "package": "SBench",
        "partial": "RBiography",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:RCCStackAny",
      "description": {
        "fct-descr": "\u003cp\u003eShow only closures with one of the given names somewhere in\n the cost centre stack.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "RCCStackAny",
        "fct-type": "function",
        "title": "RCCStackAny"
      },
      "index": {
        "description": "Show only closures with one of the given names somewhere in the cost centre stack",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "RCCStackAny",
        "normalized": "",
        "package": "SBench",
        "partial": "RCCStack Any",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:RCCStackTop",
      "description": {
        "fct-descr": "\u003cp\u003eShow only closures with one of the given names on the top of\n the cost centre stack.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "RCCStackTop",
        "fct-type": "function",
        "title": "RCCStackTop"
      },
      "index": {
        "description": "Show only closures with one of the given names on the top of the cost centre stack",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "RCCStackTop",
        "normalized": "",
        "package": "SBench",
        "partial": "RCCStack Top",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:RDescription",
      "description": {
        "fct-descr": "\u003cp\u003eShow only closures with a description that matches one of the\n given names.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "RDescription",
        "fct-type": "function",
        "title": "RDescription"
      },
      "index": {
        "description": "Show only closures with description that matches one of the given names",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "RDescription",
        "normalized": "",
        "package": "SBench",
        "partial": "RDescription",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:RModule",
      "description": {
        "fct-descr": "\u003cp\u003eShow only closures produced by one of the given modules.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "RModule",
        "fct-type": "function",
        "title": "RModule"
      },
      "index": {
        "description": "Show only closures produced by one of the given modules",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "RModule",
        "normalized": "",
        "package": "SBench",
        "partial": "RModule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:ROpts",
      "description": {
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "ROpts",
        "fct-source": "src/Test-SBench-Options.html#RuntimeOptions",
        "fct-type": "function",
        "title": "ROpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "ROpts",
        "normalized": "",
        "package": "SBench",
        "partial": "ROpts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:RRetainer",
      "description": {
        "fct-descr": "\u003cp\u003eShow only closures with retainer sets that contain at least\n one cost centre stack with a given name on the top.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "RRetainer",
        "fct-type": "function",
        "title": "RRetainer"
      },
      "index": {
        "description": "Show only closures with retainer sets that contain at least one cost centre stack with given name on the top",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "RRetainer",
        "normalized": "",
        "package": "SBench",
        "partial": "RRetainer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:RType",
      "description": {
        "fct-descr": "\u003cp\u003eShow only closures with one of the given types.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "RType",
        "fct-type": "function",
        "title": "RType"
      },
      "index": {
        "description": "Show only closures with one of the given types",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "RType",
        "normalized": "",
        "package": "SBench",
        "partial": "RType",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:Stack",
      "description": {
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "Stack Int MemUnit",
        "fct-source": "src/Test-SBench-Options.html#MemSize",
        "fct-type": "function",
        "title": "Stack"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "Stack",
        "normalized": "",
        "package": "SBench",
        "partial": "Stack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:TOpts",
      "description": {
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "TOpts",
        "fct-source": "src/Test-SBench-Options.html#TestOpts",
        "fct-type": "function",
        "title": "TOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "TOpts",
        "normalized": "",
        "package": "SBench",
        "partial": "TOpts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:WHNF",
      "description": {
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "WHNF",
        "fct-source": "src/Test-SBench-Options.html#EvalMod",
        "fct-type": "function",
        "title": "WHNF"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "WHNF",
        "normalized": "",
        "package": "SBench",
        "partial": "WHNF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:cOpts",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "CompilerOptions",
        "fct-source": "src/Test-SBench-Options.html#TestOpts",
        "fct-type": "function",
        "title": "cOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "cOpts",
        "normalized": "",
        "package": "SBench",
        "partial": "Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:memOpts",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "MemoryOptions",
        "fct-source": "src/Test-SBench-Options.html#RuntimeOptions",
        "fct-type": "function",
        "title": "memOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "memOpts",
        "normalized": "",
        "package": "SBench",
        "partial": "Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:nfInp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "NormalInput",
        "fct-source": "src/Test-SBench-Options.html#TestOpts",
        "fct-type": "function",
        "title": "nfInp"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "nfInp",
        "normalized": "",
        "package": "SBench",
        "partial": "Inp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:opts2string",
      "description": {
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "[String] -\u003e String",
        "fct-source": "src/Test-SBench-Options.html#opts2string",
        "fct-type": "function",
        "title": "opts2string"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "opts2string",
        "normalized": "[String]-\u003eString",
        "package": "SBench",
        "partial": "",
        "signature": "[String]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:profOpts",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "ProfilingOptions",
        "fct-source": "src/Test-SBench-Options.html#RuntimeOptions",
        "fct-type": "function",
        "title": "profOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "profOpts",
        "normalized": "",
        "package": "SBench",
        "partial": "Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:progArgs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "ProgramArguments",
        "fct-source": "src/Test-SBench-Options.html#RuntimeOptions",
        "fct-type": "function",
        "title": "progArgs"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "progArgs",
        "normalized": "",
        "package": "SBench",
        "partial": "Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:rOpts",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "RuntimeOptions",
        "fct-source": "src/Test-SBench-Options.html#TestOpts",
        "fct-type": "function",
        "title": "rOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "rOpts",
        "normalized": "",
        "package": "SBench",
        "partial": "Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:reps",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "Maybe Repetitions",
        "fct-source": "src/Test-SBench-Options.html#TestOpts",
        "fct-type": "function",
        "title": "reps"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "reps",
        "normalized": "",
        "package": "SBench",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Options.html#v:threadNum",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Test.SBench.Options",
        "fct-package": "SBench",
        "fct-signature": "Maybe ThreadNum",
        "fct-source": "src/Test-SBench-Options.html#RuntimeOptions",
        "fct-type": "function",
        "title": "threadNum"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Options",
        "module": "Test.SBench.Options",
        "name": "threadNum",
        "normalized": "",
        "package": "SBench",
        "partial": "Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterface functions to the \u003ca\u003egnuplot\u003c/a\u003e package for generating plots.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.SBench.Plot.Gnuplot",
        "fct-package": "SBench",
        "fct-signature": "module",
        "fct-source": "src/Test-SBench-Plot-Gnuplot.html",
        "fct-type": "module",
        "title": "Gnuplot"
      },
      "index": {
        "description": "Interface functions to the gnuplot package for generating plots",
        "hierarchy": "Test SBench Plot Gnuplot",
        "module": "Test.SBench.Plot.Gnuplot",
        "name": "Gnuplot",
        "normalized": "",
        "package": "SBench",
        "partial": "Gnuplot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#v:sbench2plot",
      "description": {
        "fct-module": "Test.SBench.Plot.Gnuplot",
        "fct-package": "SBench",
        "fct-signature": "FilePath -\u003e IO (T Double Double)",
        "fct-source": "src/Test-SBench-Plot-Gnuplot.html#sbench2plot",
        "fct-type": "function",
        "title": "sbench2plot"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Plot Gnuplot",
        "module": "Test.SBench.Plot.Gnuplot",
        "name": "sbench2plot",
        "normalized": "FilePath-\u003eIO(T Double Double)",
        "package": "SBench",
        "partial": "",
        "signature": "FilePath-\u003eIO(T Double Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#v:sbench2plotWith",
      "description": {
        "fct-module": "Test.SBench.Plot.Gnuplot",
        "fct-package": "SBench",
        "fct-signature": "[T -\u003e T]-\u003e FilePath-\u003e IO (T Double Double)",
        "fct-type": "function",
        "title": "sbench2plotWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Plot Gnuplot",
        "module": "Test.SBench.Plot.Gnuplot",
        "name": "sbench2plotWith",
        "normalized": "[T-\u003eT]-\u003eFilePath-\u003eIO(T Double Double)",
        "package": "SBench",
        "partial": "With",
        "signature": "[T-\u003eT]-\u003eFilePath-\u003eIO(T Double Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#v:sbench2plotWithLinestyle",
      "description": {
        "fct-module": "Test.SBench.Plot.Gnuplot",
        "fct-package": "SBench",
        "fct-signature": "Int-\u003e FilePath-\u003e IO (T Double Double)",
        "fct-type": "function",
        "title": "sbench2plotWithLinestyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Plot Gnuplot",
        "module": "Test.SBench.Plot.Gnuplot",
        "name": "sbench2plotWithLinestyle",
        "normalized": "Int-\u003eFilePath-\u003eIO(T Double Double)",
        "package": "SBench",
        "partial": "With Linestyle",
        "signature": "Int-\u003eFilePath-\u003eIO(T Double Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#v:sbench2scaledPlot",
      "description": {
        "fct-module": "Test.SBench.Plot.Gnuplot",
        "fct-package": "SBench",
        "fct-signature": "(Double -\u003e Double)-\u003e (Double -\u003e Double)-\u003e FilePath-\u003e IO (T Double Double)",
        "fct-type": "function",
        "title": "sbench2scaledPlot"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Plot Gnuplot",
        "module": "Test.SBench.Plot.Gnuplot",
        "name": "sbench2scaledPlot",
        "normalized": "(Double-\u003eDouble)-\u003e(Double-\u003eDouble)-\u003eFilePath-\u003eIO(T Double Double)",
        "package": "SBench",
        "partial": "Plot",
        "signature": "(Double-\u003eDouble)-\u003e(Double-\u003eDouble)-\u003eFilePath-\u003eIO(T Double Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#v:sbench2scaledPlotWith",
      "description": {
        "fct-module": "Test.SBench.Plot.Gnuplot",
        "fct-package": "SBench",
        "fct-signature": "[T -\u003e T]-\u003e (Double -\u003e Double)-\u003e (Double -\u003e Double)-\u003e FilePath-\u003e IO (T Double Double)",
        "fct-type": "function",
        "title": "sbench2scaledPlotWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Plot Gnuplot",
        "module": "Test.SBench.Plot.Gnuplot",
        "name": "sbench2scaledPlotWith",
        "normalized": "[T-\u003eT]-\u003e(Double-\u003eDouble)-\u003e(Double-\u003eDouble)-\u003eFilePath-\u003eIO(T Double Double)",
        "package": "SBench",
        "partial": "Plot With",
        "signature": "[T-\u003eT]-\u003e(Double-\u003eDouble)-\u003e(Double-\u003eDouble)-\u003eFilePath-\u003eIO(T Double Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#v:sbench2scaledPlotWithLinestyle",
      "description": {
        "fct-module": "Test.SBench.Plot.Gnuplot",
        "fct-package": "SBench",
        "fct-signature": "Int-\u003e (Double -\u003e Double)-\u003e (Double -\u003e Double)-\u003e FilePath-\u003e IO (T Double Double)",
        "fct-type": "function",
        "title": "sbench2scaledPlotWithLinestyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Plot Gnuplot",
        "module": "Test.SBench.Plot.Gnuplot",
        "name": "sbench2scaledPlotWithLinestyle",
        "normalized": "Int-\u003e(Double-\u003eDouble)-\u003e(Double-\u003eDouble)-\u003eFilePath-\u003eIO(T Double Double)",
        "package": "SBench",
        "partial": "Plot With Linestyle",
        "signature": "Int-\u003e(Double-\u003eDouble)-\u003e(Double-\u003eDouble)-\u003eFilePath-\u003eIO(T Double Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#v:series2plot",
      "description": {
        "fct-module": "Test.SBench.Plot.Gnuplot",
        "fct-package": "SBench",
        "fct-signature": "Title-\u003e [(a, b)]-\u003e T a b",
        "fct-type": "function",
        "title": "series2plot"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Plot Gnuplot",
        "module": "Test.SBench.Plot.Gnuplot",
        "name": "series2plot",
        "normalized": "Title-\u003e[(a,b)]-\u003eT a b",
        "package": "SBench",
        "partial": "",
        "signature": "Title-\u003e[(a,b)]-\u003eT a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#v:series2plotWith",
      "description": {
        "fct-module": "Test.SBench.Plot.Gnuplot",
        "fct-package": "SBench",
        "fct-signature": "[T -\u003e T]-\u003e [(a, b)]-\u003e T a b",
        "fct-type": "function",
        "title": "series2plotWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Plot Gnuplot",
        "module": "Test.SBench.Plot.Gnuplot",
        "name": "series2plotWith",
        "normalized": "[T-\u003eT]-\u003e[(a,b)]-\u003eT a b",
        "package": "SBench",
        "partial": "With",
        "signature": "[T-\u003eT]-\u003e[(a,b)]-\u003eT a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#v:series2plotWithLinestyle",
      "description": {
        "fct-module": "Test.SBench.Plot.Gnuplot",
        "fct-package": "SBench",
        "fct-signature": "Int-\u003e Title-\u003e [(a, b)]-\u003e T a b",
        "fct-type": "function",
        "title": "series2plotWithLinestyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Plot Gnuplot",
        "module": "Test.SBench.Plot.Gnuplot",
        "name": "series2plotWithLinestyle",
        "normalized": "Int-\u003eTitle-\u003e[(a,b)]-\u003eT a b",
        "package": "SBench",
        "partial": "With Linestyle",
        "signature": "Int-\u003eTitle-\u003e[(a,b)]-\u003eT a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#v:series2scaledPlot",
      "description": {
        "fct-module": "Test.SBench.Plot.Gnuplot",
        "fct-package": "SBench",
        "fct-signature": "(a -\u003e c)-\u003e (b -\u003e d)-\u003e Title-\u003e [(a, b)]-\u003e T c d",
        "fct-type": "function",
        "title": "series2scaledPlot"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Plot Gnuplot",
        "module": "Test.SBench.Plot.Gnuplot",
        "name": "series2scaledPlot",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003eTitle-\u003e[(a,c)]-\u003eT b d",
        "package": "SBench",
        "partial": "Plot",
        "signature": "(a-\u003ec)-\u003e(b-\u003ed)-\u003eTitle-\u003e[(a,b)]-\u003eT c d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#v:series2scaledPlotWith",
      "description": {
        "fct-module": "Test.SBench.Plot.Gnuplot",
        "fct-package": "SBench",
        "fct-signature": "[T -\u003e T]-\u003e (a -\u003e c)-\u003e (b -\u003e d)-\u003e [(a, b)]-\u003e T c d",
        "fct-type": "function",
        "title": "series2scaledPlotWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Plot Gnuplot",
        "module": "Test.SBench.Plot.Gnuplot",
        "name": "series2scaledPlotWith",
        "normalized": "[T-\u003eT]-\u003e(a-\u003eb)-\u003e(c-\u003ed)-\u003e[(a,c)]-\u003eT b d",
        "package": "SBench",
        "partial": "Plot With",
        "signature": "[T-\u003eT]-\u003e(a-\u003ec)-\u003e(b-\u003ed)-\u003e[(a,b)]-\u003eT c d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#v:series2scaledPlotWithLinestyle",
      "description": {
        "fct-module": "Test.SBench.Plot.Gnuplot",
        "fct-package": "SBench",
        "fct-signature": "Int-\u003e (a -\u003e c)-\u003e (b -\u003e d)-\u003e Title-\u003e [(a, b)]-\u003e T c d",
        "fct-type": "function",
        "title": "series2scaledPlotWithLinestyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Plot Gnuplot",
        "module": "Test.SBench.Plot.Gnuplot",
        "name": "series2scaledPlotWithLinestyle",
        "normalized": "Int-\u003e(a-\u003eb)-\u003e(c-\u003ed)-\u003eTitle-\u003e[(a,c)]-\u003eT b d",
        "package": "SBench",
        "partial": "Plot With Linestyle",
        "signature": "Int-\u003e(a-\u003ec)-\u003e(b-\u003ed)-\u003eTitle-\u003e[(a,b)]-\u003eT c d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#v:toDiagram",
      "description": {
        "fct-descr": "\u003cp\u003eCompared to \u003ccode\u003e\u003ca\u003etoDiagramWith\u003c/a\u003e\u003c/code\u003e, the output terminal is fixed to \n   \u003ca\u003eGraphics.Gnuplot.Terminal.PostScript\u003c/a\u003e and the resulting\n   .eps file is transformed to a .pdf via a call to \u003ccode\u003eepstopdf\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe parameters are as follows\n   [\u003ccode\u003ename\u003c/code\u003e]  Choose the output terminal. See \u003ca\u003eGraphics.Gnuplot.Terminal\u003c/a\u003e\n   [\u003ccode\u003etopts\u003c/code\u003e] Frame options, e.g. title. See \u003ca\u003eGraphics.Gnuplot.Frame.OptionSet\u003c/a\u003e\n   [\u003ccode\u003eopts\u003c/code\u003e]  List of plots to be shown in the diagram.\n   [\u003ccode\u003eplots\u003c/code\u003e]    List of plots to be shown in the diagram.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Plot.Gnuplot",
        "fct-package": "SBench",
        "fct-signature": "[Char] -\u003e [T -\u003e T] -\u003e [T (T a b) -\u003e T (T a b)] -\u003e [T a b] -\u003e IO FilePath",
        "fct-source": "src/Test-SBench-Plot-Gnuplot.html#toDiagram",
        "fct-type": "function",
        "title": "toDiagram"
      },
      "index": {
        "description": "Compared to toDiagramWith the output terminal is fixed to Graphics.Gnuplot.Terminal.PostScript and the resulting eps file is transformed to pdf via call to epstopdf The parameters are as follows name Choose the output terminal See Graphics.Gnuplot.Terminal topts Frame options e.g title See Graphics.Gnuplot.Frame.OptionSet opts List of plots to be shown in the diagram plots List of plots to be shown in the diagram",
        "hierarchy": "Test SBench Plot Gnuplot",
        "module": "Test.SBench.Plot.Gnuplot",
        "name": "toDiagram",
        "normalized": "[Char]-\u003e[T-\u003eT]-\u003e[T(T a b)-\u003eT(T a b)]-\u003e[T a b]-\u003eIO FilePath",
        "package": "SBench",
        "partial": "Diagram",
        "signature": "[Char]-\u003e[T-\u003eT]-\u003e[T(T a b)-\u003eT(T a b)]-\u003e[T a b]-\u003eIO FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Plot-Gnuplot.html#v:toDiagramWith",
      "description": {
        "fct-descr": "\u003cp\u003eProduces a diagram with several plots inside.\n\u003c/p\u003e\u003cp\u003eThe parameters are as follows\n   [\u003ccode\u003eterminal\u003c/code\u003e] Choose the output terminal. See \u003ca\u003eGraphics.Gnuplot.Terminal\u003c/a\u003e\n   [\u003ccode\u003eopts\u003c/code\u003e]     Frame options, e.g. title. See \u003ca\u003eGraphics.Gnuplot.Frame.OptionSet\u003c/a\u003e\n   [\u003ccode\u003eplots\u003c/code\u003e]    List of plots to be shown in the diagram.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Plot.Gnuplot",
        "fct-package": "SBench",
        "fct-signature": "terminal -\u003e [T (T a b) -\u003e T (T a b)] -\u003e [T a b] -\u003e IO ExitCode",
        "fct-source": "src/Test-SBench-Plot-Gnuplot.html#toDiagramWith",
        "fct-type": "function",
        "title": "toDiagramWith"
      },
      "index": {
        "description": "Produces diagram with several plots inside The parameters are as follows terminal Choose the output terminal See Graphics.Gnuplot.Terminal opts Frame options e.g title See Graphics.Gnuplot.Frame.OptionSet plots List of plots to be shown in the diagram",
        "hierarchy": "Test SBench Plot Gnuplot",
        "module": "Test.SBench.Plot.Gnuplot",
        "name": "toDiagramWith",
        "normalized": "a-\u003e[T(T b c)-\u003eT(T b c)]-\u003e[T b c]-\u003eIO ExitCode",
        "package": "SBench",
        "partial": "Diagram With",
        "signature": "terminal-\u003e[T(T a b)-\u003eT(T a b)]-\u003e[T a b]-\u003eIO ExitCode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe provided data type \u003ccode\u003e\u003ca\u003eSTerm\u003c/a\u003e\u003c/code\u003e is intended to store a term equipped with\n   its own name and maybe some extra information about its cost center\n   annotation and modules that need to be loaded when evaluating the term.\n\u003c/p\u003e\u003cp\u003eThe additional information, provided as strings, is necessary for space \n   measurements where small programs are constructed from the strings and run\n   for heap profiling.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.SBench.STerm",
        "fct-package": "SBench",
        "fct-signature": "module",
        "fct-source": "src/Test-SBench-STerm.html",
        "fct-type": "module",
        "title": "STerm"
      },
      "index": {
        "description": "The provided data type STerm is intended to store term equipped with its own name and maybe some extra information about its cost center annotation and modules that need to be loaded when evaluating the term The additional information provided as strings is necessary for space measurements where small programs are constructed from the strings and run for heap profiling",
        "hierarchy": "Test SBench STerm",
        "module": "Test.SBench.STerm",
        "name": "STerm",
        "normalized": "",
        "package": "SBench",
        "partial": "STerm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#t:Algorithm",
      "description": {
        "fct-module": "Test.SBench.STerm",
        "fct-package": "SBench",
        "fct-signature": "type",
        "fct-source": "src/Test-SBench-STerm.html#Algorithm",
        "fct-type": "type",
        "title": "Algorithm"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench STerm",
        "module": "Test.SBench.STerm",
        "name": "Algorithm",
        "normalized": "",
        "package": "SBench",
        "partial": "Algorithm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#t:CostCenter",
      "description": {
        "fct-module": "Test.SBench.STerm",
        "fct-package": "SBench",
        "fct-signature": "type",
        "fct-source": "src/Test-SBench-STerm.html#CostCenter",
        "fct-type": "type",
        "title": "CostCenter"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench STerm",
        "module": "Test.SBench.STerm",
        "name": "CostCenter",
        "normalized": "",
        "package": "SBench",
        "partial": "Cost Center",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#t:Data",
      "description": {
        "fct-module": "Test.SBench.STerm",
        "fct-package": "SBench",
        "fct-signature": "type",
        "fct-source": "src/Test-SBench-STerm.html#Data",
        "fct-type": "type",
        "title": "Data"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench STerm",
        "module": "Test.SBench.STerm",
        "name": "Data",
        "normalized": "",
        "package": "SBench",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#t:DataGen",
      "description": {
        "fct-module": "Test.SBench.STerm",
        "fct-package": "SBench",
        "fct-signature": "type",
        "fct-source": "src/Test-SBench-STerm.html#DataGen",
        "fct-type": "type",
        "title": "DataGen"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench STerm",
        "module": "Test.SBench.STerm",
        "name": "DataGen",
        "normalized": "",
        "package": "SBench",
        "partial": "Data Gen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#t:STerm",
      "description": {
        "fct-module": "Test.SBench.STerm",
        "fct-package": "SBench",
        "fct-signature": "data",
        "fct-source": "src/Test-SBench-STerm.html#STerm",
        "fct-type": "data",
        "title": "STerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench STerm",
        "module": "Test.SBench.STerm",
        "name": "STerm",
        "normalized": "",
        "package": "SBench",
        "partial": "STerm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#t:Seed",
      "description": {
        "fct-module": "Test.SBench.STerm",
        "fct-package": "SBench",
        "fct-signature": "type",
        "fct-source": "src/Test-SBench-STerm.html#Seed",
        "fct-type": "type",
        "title": "Seed"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench STerm",
        "module": "Test.SBench.STerm",
        "name": "Seed",
        "normalized": "",
        "package": "SBench",
        "partial": "Seed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#t:Test",
      "description": {
        "fct-module": "Test.SBench.STerm",
        "fct-package": "SBench",
        "fct-signature": "type",
        "fct-source": "src/Test-SBench-STerm.html#Test",
        "fct-type": "type",
        "title": "Test"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench STerm",
        "module": "Test.SBench.STerm",
        "name": "Test",
        "normalized": "",
        "package": "SBench",
        "partial": "Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#v:-60--36--62-",
      "description": {
        "fct-descr": "\u003cp\u003eFunction application for \u003ccode\u003e\u003ca\u003eSTerm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.STerm",
        "fct-package": "SBench",
        "fct-signature": "STerm (a -\u003e b) -\u003e STerm a -\u003e STerm b",
        "fct-source": "src/Test-SBench-STerm.html#%3C%24%3E",
        "fct-type": "function",
        "title": "(\u003c$\u003e)"
      },
      "index": {
        "description": "Function application for STerm",
        "hierarchy": "Test SBench STerm",
        "module": "Test.SBench.STerm",
        "name": "(\u003c$\u003e) \u003c$\u003e",
        "normalized": "STerm(a-\u003eb)-\u003eSTerm a-\u003eSTerm b",
        "package": "SBench",
        "partial": "",
        "signature": "STerm(a-\u003eb)-\u003eSTerm a-\u003eSTerm b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#v:T",
      "description": {
        "fct-module": "Test.SBench.STerm",
        "fct-package": "SBench",
        "fct-signature": "T",
        "fct-source": "src/Test-SBench-STerm.html#STerm",
        "fct-type": "function",
        "title": "T"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench STerm",
        "module": "Test.SBench.STerm",
        "name": "T",
        "normalized": "",
        "package": "SBench",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#v:getImports",
      "description": {
        "fct-module": "Test.SBench.STerm",
        "fct-package": "SBench",
        "fct-signature": "STerm a -\u003e String",
        "fct-source": "src/Test-SBench-STerm.html#getImports",
        "fct-type": "function",
        "title": "getImports"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench STerm",
        "module": "Test.SBench.STerm",
        "name": "getImports",
        "normalized": "STerm a-\u003eString",
        "package": "SBench",
        "partial": "Imports",
        "signature": "STerm a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#v:makeIntSeeds",
      "description": {
        "fct-descr": "\u003cp\u003eAuxiliar version of \u003ccode\u003e\u003ca\u003emakeSeeds\u003c/a\u003e\u003c/code\u003e to prevent defaulting to \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.STerm",
        "fct-package": "SBench",
        "fct-signature": "Int -\u003e Int -\u003e Int -\u003e [Seed Int]",
        "fct-source": "src/Test-SBench-STerm.html#makeIntSeeds",
        "fct-type": "function",
        "title": "makeIntSeeds"
      },
      "index": {
        "description": "Auxiliar version of makeSeeds to prevent defaulting to Integer",
        "hierarchy": "Test SBench STerm",
        "module": "Test.SBench.STerm",
        "name": "makeIntSeeds",
        "normalized": "Int-\u003eInt-\u003eInt-\u003e[Seed Int]",
        "package": "SBench",
        "partial": "Int Seeds",
        "signature": "Int-\u003eInt-\u003eInt-\u003e[Seed Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#v:makeSeeds",
      "description": {
        "fct-module": "Test.SBench.STerm",
        "fct-package": "SBench",
        "fct-signature": "a-\u003e a-\u003e a-\u003e [Seed a]",
        "fct-type": "function",
        "title": "makeSeeds"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench STerm",
        "module": "Test.SBench.STerm",
        "name": "makeSeeds",
        "normalized": "a-\u003ea-\u003ea-\u003e[Seed a]",
        "package": "SBench",
        "partial": "Seeds",
        "signature": "a-\u003ea-\u003ea-\u003e[Seed a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#v:stCC",
      "description": {
        "fct-descr": "\u003cp\u003ecost centers to measure when performing \n   heap profiling.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.STerm",
        "fct-package": "SBench",
        "fct-signature": "[CostCenter]",
        "fct-source": "src/Test-SBench-STerm.html#STerm",
        "fct-type": "function",
        "title": "stCC"
      },
      "index": {
        "description": "cost centers to measure when performing heap profiling",
        "hierarchy": "Test SBench STerm",
        "module": "Test.SBench.STerm",
        "name": "stCC",
        "normalized": "[CostCenter]",
        "package": "SBench",
        "partial": "CC",
        "signature": "[CostCenter]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#v:stModules",
      "description": {
        "fct-descr": "\u003cp\u003eThe modules used when evaluation the term\n\u003c/p\u003e",
        "fct-module": "Test.SBench.STerm",
        "fct-package": "SBench",
        "fct-signature": "[ModuleName]",
        "fct-source": "src/Test-SBench-STerm.html#STerm",
        "fct-type": "function",
        "title": "stModules"
      },
      "index": {
        "description": "The modules used when evaluation the term",
        "hierarchy": "Test SBench STerm",
        "module": "Test.SBench.STerm",
        "name": "stModules",
        "normalized": "[ModuleName]",
        "package": "SBench",
        "partial": "Modules",
        "signature": "[ModuleName]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#v:stName",
      "description": {
        "fct-descr": "\u003cp\u003eThe term as \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Test.SBench.STerm",
        "fct-package": "SBench",
        "fct-signature": "TermName",
        "fct-source": "src/Test-SBench-STerm.html#STerm",
        "fct-type": "function",
        "title": "stName"
      },
      "index": {
        "description": "The term as String",
        "hierarchy": "Test SBench STerm",
        "module": "Test.SBench.STerm",
        "name": "stName",
        "normalized": "",
        "package": "SBench",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#v:stTerm",
      "description": {
        "fct-descr": "\u003cp\u003eThe actual term.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.STerm",
        "fct-package": "SBench",
        "fct-signature": "a",
        "fct-source": "src/Test-SBench-STerm.html#STerm",
        "fct-type": "function",
        "title": "stTerm"
      },
      "index": {
        "description": "The actual term",
        "hierarchy": "Test SBench STerm",
        "module": "Test.SBench.STerm",
        "name": "stTerm",
        "normalized": "",
        "package": "SBench",
        "partial": "Term",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#v:toAlgorithm",
      "description": {
        "fct-module": "Test.SBench.STerm",
        "fct-package": "SBench",
        "fct-signature": "(a -\u003e b) -\u003e ModuleName -\u003e TermName -\u003e CostCenter -\u003e Algorithm (a -\u003e b)",
        "fct-source": "src/Test-SBench-STerm.html#toAlgorithm",
        "fct-type": "function",
        "title": "toAlgorithm"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench STerm",
        "module": "Test.SBench.STerm",
        "name": "toAlgorithm",
        "normalized": "(a-\u003eb)-\u003eModuleName-\u003eTermName-\u003eCostCenter-\u003eAlgorithm(a-\u003eb)",
        "package": "SBench",
        "partial": "Algorithm",
        "signature": "(a-\u003eb)-\u003eModuleName-\u003eTermName-\u003eCostCenter-\u003eAlgorithm(a-\u003eb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#v:toData",
      "description": {
        "fct-module": "Test.SBench.STerm",
        "fct-package": "SBench",
        "fct-signature": "a -\u003e STerm a",
        "fct-source": "src/Test-SBench-STerm.html#toData",
        "fct-type": "function",
        "title": "toData"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench STerm",
        "module": "Test.SBench.STerm",
        "name": "toData",
        "normalized": "a-\u003eSTerm a",
        "package": "SBench",
        "partial": "Data",
        "signature": "a-\u003eSTerm a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#v:toDataGen",
      "description": {
        "fct-module": "Test.SBench.STerm",
        "fct-package": "SBench",
        "fct-signature": "(a -\u003e b) -\u003e ModuleName -\u003e TermName -\u003e Data (a -\u003e b)",
        "fct-source": "src/Test-SBench-STerm.html#toDataGen",
        "fct-type": "function",
        "title": "toDataGen"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench STerm",
        "module": "Test.SBench.STerm",
        "name": "toDataGen",
        "normalized": "(a-\u003eb)-\u003eModuleName-\u003eTermName-\u003eData(a-\u003eb)",
        "package": "SBench",
        "partial": "Data Gen",
        "signature": "(a-\u003eb)-\u003eModuleName-\u003eTermName-\u003eData(a-\u003eb)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-STerm.html#v:toNamedData",
      "description": {
        "fct-module": "Test.SBench.STerm",
        "fct-package": "SBench",
        "fct-signature": "a -\u003e TermName -\u003e STerm a",
        "fct-source": "src/Test-SBench-STerm.html#toNamedData",
        "fct-type": "function",
        "title": "toNamedData"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench STerm",
        "module": "Test.SBench.STerm",
        "name": "toNamedData",
        "normalized": "a-\u003eTermName-\u003eSTerm a",
        "package": "SBench",
        "partial": "Named Data",
        "signature": "a-\u003eTermName-\u003eSTerm a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-OptionSet.html#",
      "description": {
        "fct-module": "Test.SBench.Space.OptionSet",
        "fct-package": "SBench",
        "fct-signature": "module",
        "fct-source": "src/Test-SBench-Space-OptionSet.html",
        "fct-type": "module",
        "title": "OptionSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Space OptionSet",
        "module": "Test.SBench.Space.OptionSet",
        "name": "OptionSet",
        "normalized": "",
        "package": "SBench",
        "partial": "Option Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-OptionSet.html#v:addCC",
      "description": {
        "fct-module": "Test.SBench.Space.OptionSet",
        "fct-package": "SBench",
        "fct-signature": "Algorithm a -\u003e TestOpts -\u003e TestOpts",
        "fct-source": "src/Test-SBench-Space-OptionSet.html#addCC",
        "fct-type": "function",
        "title": "addCC"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Space OptionSet",
        "module": "Test.SBench.Space.OptionSet",
        "name": "addCC",
        "normalized": "Algorithm a-\u003eTestOpts-\u003eTestOpts",
        "package": "SBench",
        "partial": "CC",
        "signature": "Algorithm a-\u003eTestOpts-\u003eTestOpts"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-OptionSet.html#v:autoRepeat",
      "description": {
        "fct-module": "Test.SBench.Space.OptionSet",
        "fct-package": "SBench",
        "fct-signature": "TestOpts -\u003e TestOpts",
        "fct-source": "src/Test-SBench-Space-OptionSet.html#autoRepeat",
        "fct-type": "function",
        "title": "autoRepeat"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Space OptionSet",
        "module": "Test.SBench.Space.OptionSet",
        "name": "autoRepeat",
        "normalized": "TestOpts-\u003eTestOpts",
        "package": "SBench",
        "partial": "Repeat",
        "signature": "TestOpts-\u003eTestOpts"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-OptionSet.html#v:defltCOpts",
      "description": {
        "fct-descr": "\u003cp\u003edefault compiler options additional to \u003ccode\u003e\u003ca\u003egeneralCOpts\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Space.OptionSet",
        "fct-package": "SBench",
        "fct-signature": "CompilerOptions",
        "fct-source": "src/Test-SBench-Space-OptionSet.html#defltCOpts",
        "fct-type": "function",
        "title": "defltCOpts"
      },
      "index": {
        "description": "default compiler options additional to generalCOpts",
        "hierarchy": "Test SBench Space OptionSet",
        "module": "Test.SBench.Space.OptionSet",
        "name": "defltCOpts",
        "normalized": "",
        "package": "SBench",
        "partial": "COpts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-OptionSet.html#v:defltProfOpts",
      "description": {
        "fct-descr": "\u003cp\u003eDefault profiling options.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Space.OptionSet",
        "fct-package": "SBench",
        "fct-signature": "ProfilingOptions",
        "fct-source": "src/Test-SBench-Space-OptionSet.html#defltProfOpts",
        "fct-type": "function",
        "title": "defltProfOpts"
      },
      "index": {
        "description": "Default profiling options",
        "hierarchy": "Test SBench Space OptionSet",
        "module": "Test.SBench.Space.OptionSet",
        "name": "defltProfOpts",
        "normalized": "",
        "package": "SBench",
        "partial": "Prof Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-OptionSet.html#v:defltRep",
      "description": {
        "fct-descr": "\u003cp\u003eBy default repetitions are calculated automatically\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Space.OptionSet",
        "fct-package": "SBench",
        "fct-signature": "Maybe Repetitions",
        "fct-source": "src/Test-SBench-Space-OptionSet.html#defltRep",
        "fct-type": "function",
        "title": "defltRep"
      },
      "index": {
        "description": "By default repetitions are calculated automatically",
        "hierarchy": "Test SBench Space OptionSet",
        "module": "Test.SBench.Space.OptionSet",
        "name": "defltRep",
        "normalized": "",
        "package": "SBench",
        "partial": "Rep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-OptionSet.html#v:defltTestOpts",
      "description": {
        "fct-descr": "\u003cp\u003eDefault test options, i.e. default options for compiling and running\n   a program for space profiling.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Space.OptionSet",
        "fct-package": "SBench",
        "fct-signature": "TestOpts",
        "fct-source": "src/Test-SBench-Space-OptionSet.html#defltTestOpts",
        "fct-type": "function",
        "title": "defltTestOpts"
      },
      "index": {
        "description": "Default test options i.e default options for compiling and running program for space profiling",
        "hierarchy": "Test SBench Space OptionSet",
        "module": "Test.SBench.Space.OptionSet",
        "name": "defltTestOpts",
        "normalized": "",
        "package": "SBench",
        "partial": "Test Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-OptionSet.html#v:generalCOpts",
      "description": {
        "fct-descr": "\u003cul\u003e\u003cli\u003e Compiler options\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eOptions always added when compiling for space profiling.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Space.OptionSet",
        "fct-package": "SBench",
        "fct-signature": "CompilerOptions",
        "fct-source": "src/Test-SBench-Space-OptionSet.html#generalCOpts",
        "fct-type": "function",
        "title": "generalCOpts"
      },
      "index": {
        "description": "Compiler options Options always added when compiling for space profiling",
        "hierarchy": "Test SBench Space OptionSet",
        "module": "Test.SBench.Space.OptionSet",
        "name": "generalCOpts",
        "normalized": "",
        "package": "SBench",
        "partial": "COpts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-OptionSet.html#v:setMemSizes",
      "description": {
        "fct-module": "Test.SBench.Space.OptionSet",
        "fct-package": "SBench",
        "fct-signature": "[MemSize] -\u003e TestOpts -\u003e TestOpts",
        "fct-source": "src/Test-SBench-Space-OptionSet.html#setMemSizes",
        "fct-type": "function",
        "title": "setMemSizes"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Space OptionSet",
        "module": "Test.SBench.Space.OptionSet",
        "name": "setMemSizes",
        "normalized": "[MemSize]-\u003eTestOpts-\u003eTestOpts",
        "package": "SBench",
        "partial": "Mem Sizes",
        "signature": "[MemSize]-\u003eTestOpts-\u003eTestOpts"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-OptionSet.html#v:setNfInput",
      "description": {
        "fct-module": "Test.SBench.Space.OptionSet",
        "fct-package": "SBench",
        "fct-signature": "Bool -\u003e TestOpts -\u003e TestOpts",
        "fct-source": "src/Test-SBench-Space-OptionSet.html#setNfInput",
        "fct-type": "function",
        "title": "setNfInput"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Space OptionSet",
        "module": "Test.SBench.Space.OptionSet",
        "name": "setNfInput",
        "normalized": "Bool-\u003eTestOpts-\u003eTestOpts",
        "package": "SBench",
        "partial": "Nf Input",
        "signature": "Bool-\u003eTestOpts-\u003eTestOpts"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-OptionSet.html#v:setRepetitions",
      "description": {
        "fct-module": "Test.SBench.Space.OptionSet",
        "fct-package": "SBench",
        "fct-signature": "Repetitions -\u003e TestOpts -\u003e TestOpts",
        "fct-source": "src/Test-SBench-Space-OptionSet.html#setRepetitions",
        "fct-type": "function",
        "title": "setRepetitions"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Space OptionSet",
        "module": "Test.SBench.Space.OptionSet",
        "name": "setRepetitions",
        "normalized": "Repetitions-\u003eTestOpts-\u003eTestOpts",
        "package": "SBench",
        "partial": "Repetitions",
        "signature": "Repetitions-\u003eTestOpts-\u003eTestOpts"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-Series-Test.html#",
      "description": {
        "fct-module": "Test.SBench.Space.Series.Test",
        "fct-package": "SBench",
        "fct-signature": "module",
        "fct-source": "src/Test-SBench-Space-Series-Test.html",
        "fct-type": "module",
        "title": "Test"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Space Series Test",
        "module": "Test.SBench.Space.Series.Test",
        "name": "Test",
        "normalized": "",
        "package": "SBench",
        "partial": "Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-Series-Test.html#v:makeSeries",
      "description": {
        "fct-module": "Test.SBench.Space.Series.Test",
        "fct-package": "SBench",
        "fct-signature": "(TestOpts -\u003e Algorithm (a -\u003e b) -\u003e Data a -\u003e FilePath -\u003e IO d)-\u003e TestOpts-\u003e (FilePath, Title)-\u003e Algorithm (a -\u003e b)-\u003e DataGen (c -\u003e a)-\u003e [Seed c]-\u003e IO [(c, d)]",
        "fct-type": "function",
        "title": "makeSeries"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Space Series Test",
        "module": "Test.SBench.Space.Series.Test",
        "name": "makeSeries",
        "normalized": "(TestOpts-\u003eAlgorithm(a-\u003eb)-\u003eData a-\u003eFilePath-\u003eIO c)-\u003eTestOpts-\u003e(FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(d-\u003ea)-\u003e[Seed d]-\u003eIO[(d,c)]",
        "package": "SBench",
        "partial": "Series",
        "signature": "(TestOpts-\u003eAlgorithm(a-\u003eb)-\u003eData a-\u003eFilePath-\u003eIO d)-\u003eTestOpts-\u003e(FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(c-\u003ea)-\u003e[Seed c]-\u003eIO[(c,d)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-Series-Test.html#v:maxMemSeries",
      "description": {
        "fct-descr": "\u003cp\u003eThe function measures the maximal heap consumption of a given function over a series of different inputs\n   that are produced via an input generator given different seeds.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Space.Series.Test",
        "fct-package": "SBench",
        "fct-signature": "NormalInput-\u003e (FilePath, Title)-\u003e Algorithm (a -\u003e b)-\u003e DataGen (c -\u003e a)-\u003e [Seed c]-\u003e IO [(c, Integer)]",
        "fct-type": "function",
        "title": "maxMemSeries"
      },
      "index": {
        "description": "The function measures the maximal heap consumption of given function over series of different inputs that are produced via an input generator given different seeds",
        "hierarchy": "Test SBench Space Series Test",
        "module": "Test.SBench.Space.Series.Test",
        "name": "maxMemSeries",
        "normalized": "NormalInput-\u003e(FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(c-\u003ea)-\u003e[Seed c]-\u003eIO[(c,Integer)]",
        "package": "SBench",
        "partial": "Mem Series",
        "signature": "NormalInput-\u003e(FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(c-\u003ea)-\u003e[Seed c]-\u003eIO[(c,Integer)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-Series-Test.html#v:maxMemSeriesWith",
      "description": {
        "fct-descr": "\u003cp\u003eThe function acts similar to \u003ccode\u003e\u003ca\u003emaxMemSeries\u003c/a\u003e\u003c/code\u003e, but instead of only \u003ccode\u003e\u003ca\u003eNormalInput\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eTestOpts\u003c/a\u003e\u003c/code\u003e can be set manually\n   via the first parameter.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Space.Series.Test",
        "fct-package": "SBench",
        "fct-signature": "TestOpts -\u003e (FilePath, Title) -\u003e Algorithm (a -\u003e b) -\u003e DataGen (c -\u003e a) -\u003e [Seed c] -\u003e IO [(c, Integer)]",
        "fct-source": "src/Test-SBench-Space-Series-Test.html#maxMemSeriesWith",
        "fct-type": "function",
        "title": "maxMemSeriesWith"
      },
      "index": {
        "description": "The function acts similar to maxMemSeries but instead of only NormalInput TestOpts can be set manually via the first parameter",
        "hierarchy": "Test SBench Space Series Test",
        "module": "Test.SBench.Space.Series.Test",
        "name": "maxMemSeriesWith",
        "normalized": "TestOpts-\u003e(FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(c-\u003ea)-\u003e[Seed c]-\u003eIO[(c,Integer)]",
        "package": "SBench",
        "partial": "Mem Series With",
        "signature": "TestOpts-\u003e(FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(c-\u003ea)-\u003e[Seed c]-\u003eIO[(c,Integer)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-Single-ExploreProfile.html#",
      "description": {
        "fct-module": "Test.SBench.Space.Single.ExploreProfile",
        "fct-package": "SBench",
        "fct-signature": "module",
        "fct-source": "src/Test-SBench-Space-Single-ExploreProfile.html",
        "fct-type": "module",
        "title": "ExploreProfile"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Space Single ExploreProfile",
        "module": "Test.SBench.Space.Single.ExploreProfile",
        "name": "ExploreProfile",
        "normalized": "",
        "package": "SBench",
        "partial": "Explore Profile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-Single-ExploreProfile.html#v:getMaxMem",
      "description": {
        "fct-module": "Test.SBench.Space.Single.ExploreProfile",
        "fct-package": "SBench",
        "fct-signature": "FilePath -\u003e IO Integer",
        "fct-source": "src/Test-SBench-Space-Single-ExploreProfile.html#getMaxMem",
        "fct-type": "function",
        "title": "getMaxMem"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Space Single ExploreProfile",
        "module": "Test.SBench.Space.Single.ExploreProfile",
        "name": "getMaxMem",
        "normalized": "FilePath-\u003eIO Integer",
        "package": "SBench",
        "partial": "Max Mem",
        "signature": "FilePath-\u003eIO Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-Single-ExploreProfile.html#v:getMemLine",
      "description": {
        "fct-module": "Test.SBench.Space.Single.ExploreProfile",
        "fct-package": "SBench",
        "fct-signature": "FilePath -\u003e IO [(Double, Integer)]",
        "fct-source": "src/Test-SBench-Space-Single-ExploreProfile.html#getMemLine",
        "fct-type": "function",
        "title": "getMemLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Space Single ExploreProfile",
        "module": "Test.SBench.Space.Single.ExploreProfile",
        "name": "getMemLine",
        "normalized": "FilePath-\u003eIO[(Double,Integer)]",
        "package": "SBench",
        "partial": "Mem Line",
        "signature": "FilePath-\u003eIO[(Double,Integer)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-Single-Test.html#",
      "description": {
        "fct-module": "Test.SBench.Space.Single.Test",
        "fct-package": "SBench",
        "fct-signature": "module",
        "fct-source": "src/Test-SBench-Space-Single-Test.html",
        "fct-type": "module",
        "title": "Test"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Space Single Test",
        "module": "Test.SBench.Space.Single.Test",
        "name": "Test",
        "normalized": "",
        "package": "SBench",
        "partial": "Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-Single-Test.html#v:getMaxMem",
      "description": {
        "fct-descr": "\u003cp\u003eGet the maximal heap occupied by the algorithm.\n   Since the algorithms comes with a cost center annotation this is used to\n   explore what heap consumption should be measured (here: all heap directly\n   or indirectly used by the given algorithm).\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Space.Single.Test",
        "fct-package": "SBench",
        "fct-signature": "NormalInput-\u003e Algorithm (a -\u003e b)-\u003e Data a-\u003e FilePath-\u003e IO Integer",
        "fct-type": "function",
        "title": "getMaxMem"
      },
      "index": {
        "description": "Get the maximal heap occupied by the algorithm Since the algorithms comes with cost center annotation this is used to explore what heap consumption should be measured here all heap directly or indirectly used by the given algorithm",
        "hierarchy": "Test SBench Space Single Test",
        "module": "Test.SBench.Space.Single.Test",
        "name": "getMaxMem",
        "normalized": "NormalInput-\u003eAlgorithm(a-\u003eb)-\u003eData a-\u003eFilePath-\u003eIO Integer",
        "package": "SBench",
        "partial": "Max Mem",
        "signature": "NormalInput-\u003eAlgorithm(a-\u003eb)-\u003eData a-\u003eFilePath-\u003eIO Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-Single-Test.html#v:getMaxMemWith",
      "description": {
        "fct-descr": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003egetMaxMem\u003c/a\u003e\u003c/code\u003e, but \u003ccode\u003e\u003ca\u003eTestOpts\u003c/a\u003e\u003c/code\u003e can be set by the user.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Space.Single.Test",
        "fct-package": "SBench",
        "fct-signature": "TestOpts -\u003e Algorithm (a -\u003e b) -\u003e Data a -\u003e FilePath -\u003e IO Integer",
        "fct-source": "src/Test-SBench-Space-Single-Test.html#getMaxMemWith",
        "fct-type": "function",
        "title": "getMaxMemWith"
      },
      "index": {
        "description": "As getMaxMem but TestOpts can be set by the user",
        "hierarchy": "Test SBench Space Single Test",
        "module": "Test.SBench.Space.Single.Test",
        "name": "getMaxMemWith",
        "normalized": "TestOpts-\u003eAlgorithm(a-\u003eb)-\u003eData a-\u003eFilePath-\u003eIO Integer",
        "package": "SBench",
        "partial": "Max Mem With",
        "signature": "TestOpts-\u003eAlgorithm(a-\u003eb)-\u003eData a-\u003eFilePath-\u003eIO Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-Single-Test.html#v:getMemLine",
      "description": {
        "fct-descr": "\u003cp\u003eThe function generates a heap profile, returns the heapconsumption over time as series and\n   also stores the series as an .sbench file.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Space.Single.Test",
        "fct-package": "SBench",
        "fct-signature": "NormalInput-\u003e (FilePath, Title)-\u003e Algorithm (a -\u003e b)-\u003e Data a-\u003e IO [(Double, Integer)]",
        "fct-type": "function",
        "title": "getMemLine"
      },
      "index": {
        "description": "The function generates heap profile returns the heapconsumption over time as series and also stores the series as an sbench file",
        "hierarchy": "Test SBench Space Single Test",
        "module": "Test.SBench.Space.Single.Test",
        "name": "getMemLine",
        "normalized": "NormalInput-\u003e(FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eData a-\u003eIO[(Double,Integer)]",
        "package": "SBench",
        "partial": "Mem Line",
        "signature": "NormalInput-\u003e(FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eData a-\u003eIO[(Double,Integer)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-Single-Test.html#v:getMemLineWith",
      "description": {
        "fct-module": "Test.SBench.Space.Single.Test",
        "fct-package": "SBench",
        "fct-signature": "TestOpts -\u003e (FilePath, Title) -\u003e Algorithm (a -\u003e b) -\u003e Data a -\u003e IO [(Double, Integer)]",
        "fct-source": "src/Test-SBench-Space-Single-Test.html#getMemLineWith",
        "fct-type": "function",
        "title": "getMemLineWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Space Single Test",
        "module": "Test.SBench.Space.Single.Test",
        "name": "getMemLineWith",
        "normalized": "TestOpts-\u003e(FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eData a-\u003eIO[(Double,Integer)]",
        "package": "SBench",
        "partial": "Mem Line With",
        "signature": "TestOpts-\u003e(FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eData a-\u003eIO[(Double,Integer)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Space-Single-Test.html#v:getProfile",
      "description": {
        "fct-descr": "\u003cp\u003eCreate only the heap profile.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Space.Single.Test",
        "fct-package": "SBench",
        "fct-signature": "TestOpts -\u003e Algorithm (a -\u003e b) -\u003e Data a -\u003e FilePath -\u003e IO FilePath",
        "fct-source": "src/Test-SBench-Space-Single-Test.html#getProfile",
        "fct-type": "function",
        "title": "getProfile"
      },
      "index": {
        "description": "Create only the heap profile",
        "hierarchy": "Test SBench Space Single Test",
        "module": "Test.SBench.Space.Single.Test",
        "name": "getProfile",
        "normalized": "TestOpts-\u003eAlgorithm(a-\u003eb)-\u003eData a-\u003eFilePath-\u003eIO FilePath",
        "package": "SBench",
        "partial": "Profile",
        "signature": "TestOpts-\u003eAlgorithm(a-\u003eb)-\u003eData a-\u003eFilePath-\u003eIO FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Time-Series-Test.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for runtime tests are provided. They are basically a wrapper to \n   a call to the criterion function \u003ca\u003eCriterion.Main.defaultMainWith\u003c/a\u003e.\n   The measurement data (usually stored in temp.csv) is than postprocessed\n   by extracting only the mean runtime for each run and tupling it with the\n   respective input seed.\n   Results are then returned as list of tuples and optionally stored in a\n   .sbench file (see \u003ca\u003eTest.File.FileOps\u003c/a\u003e).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.SBench.Time.Series.Test",
        "fct-package": "SBench",
        "fct-signature": "module",
        "fct-source": "src/Test-SBench-Time-Series-Test.html",
        "fct-type": "module",
        "title": "Test"
      },
      "index": {
        "description": "Functions for runtime tests are provided They are basically wrapper to call to the criterion function Criterion.Main.defaultMainWith The measurement data usually stored in temp.csv is than postprocessed by extracting only the mean runtime for each run and tupling it with the respective input seed Results are then returned as list of tuples and optionally stored in sbench file see Test.File.FileOps",
        "hierarchy": "Test SBench Time Series Test",
        "module": "Test.SBench.Time.Series.Test",
        "name": "Test",
        "normalized": "",
        "package": "SBench",
        "partial": "Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Time-Series-Test.html#v:nfRuntimeSeries",
      "description": {
        "fct-module": "Test.SBench.Time.Series.Test",
        "fct-package": "SBench",
        "fct-signature": "Maybe (BuildOptions, ExeOptions, FilePath, Title) -\u003e Algorithm (a -\u003e b) -\u003e DataGen (c -\u003e a) -\u003e [Seed c] -\u003e IO [(c, Double)]",
        "fct-source": "src/Test-SBench-Time-Series-Test.html#nfRuntimeSeries",
        "fct-type": "function",
        "title": "nfRuntimeSeries"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Time Series Test",
        "module": "Test.SBench.Time.Series.Test",
        "name": "nfRuntimeSeries",
        "normalized": "Maybe(BuildOptions,ExeOptions,FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(c-\u003ea)-\u003e[Seed c]-\u003eIO[(c,Double)]",
        "package": "SBench",
        "partial": "Runtime Series",
        "signature": "Maybe(BuildOptions,ExeOptions,FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(c-\u003ea)-\u003e[Seed c]-\u003eIO[(c,Double)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Time-Series-Test.html#v:runtimeSeries",
      "description": {
        "fct-descr": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003eruntimeSeriesWith\u003c/a\u003e\u003c/code\u003e, but \u003ca\u003eCriterion.Config.Config\u003c/a\u003e is set to a default.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Time.Series.Test",
        "fct-package": "SBench",
        "fct-signature": "EvalMod -\u003e Maybe (BuildOptions, ExeOptions, FilePath, Title) -\u003e Algorithm (a -\u003e b) -\u003e DataGen (c -\u003e a) -\u003e [Seed c] -\u003e IO [(c, Double)]",
        "fct-source": "src/Test-SBench-Time-Series-Test.html#runtimeSeries",
        "fct-type": "function",
        "title": "runtimeSeries"
      },
      "index": {
        "description": "As runtimeSeriesWith but Criterion.Config.Config is set to default",
        "hierarchy": "Test SBench Time Series Test",
        "module": "Test.SBench.Time.Series.Test",
        "name": "runtimeSeries",
        "normalized": "EvalMod-\u003eMaybe(BuildOptions,ExeOptions,FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(c-\u003ea)-\u003e[Seed c]-\u003eIO[(c,Double)]",
        "package": "SBench",
        "partial": "Series",
        "signature": "EvalMod-\u003eMaybe(BuildOptions,ExeOptions,FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(c-\u003ea)-\u003e[Seed c]-\u003eIO[(c,Double)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Time-Series-Test.html#v:runtimeSeriesWith",
      "description": {
        "fct-descr": "\u003cp\u003eMost general function to perform runtime measurements for a series of inputs.\n\u003c/p\u003e",
        "fct-module": "Test.SBench.Time.Series.Test",
        "fct-package": "SBench",
        "fct-signature": "Config-\u003e EvalMod-\u003e Maybe (BuildOptions, ExeOptions, FilePath, Title)-\u003e Algorithm (a -\u003e b)-\u003e DataGen (c -\u003e a)-\u003e [Seed c]-\u003e IO [(c, Double)]",
        "fct-type": "function",
        "title": "runtimeSeriesWith"
      },
      "index": {
        "description": "Most general function to perform runtime measurements for series of inputs",
        "hierarchy": "Test SBench Time Series Test",
        "module": "Test.SBench.Time.Series.Test",
        "name": "runtimeSeriesWith",
        "normalized": "Config-\u003eEvalMod-\u003eMaybe(BuildOptions,ExeOptions,FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(c-\u003ea)-\u003e[Seed c]-\u003eIO[(c,Double)]",
        "package": "SBench",
        "partial": "Series With",
        "signature": "Config-\u003eEvalMod-\u003eMaybe(BuildOptions,ExeOptions,FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(c-\u003ea)-\u003e[Seed c]-\u003eIO[(c,Double)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Time-Series-Test.html#v:scaleRt",
      "description": {
        "fct-module": "Test.SBench.Time.Series.Test",
        "fct-package": "SBench",
        "fct-signature": "Double -\u003e [(Int, Double)] -\u003e [(Int, Double)]",
        "fct-source": "src/Test-SBench-Time-Series-Test.html#scaleRt",
        "fct-type": "function",
        "title": "scaleRt"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Time Series Test",
        "module": "Test.SBench.Time.Series.Test",
        "name": "scaleRt",
        "normalized": "Double-\u003e[(Int,Double)]-\u003e[(Int,Double)]",
        "package": "SBench",
        "partial": "Rt",
        "signature": "Double-\u003e[(Int,Double)]-\u003e[(Int,Double)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SBench/docs/Test-SBench-Time-Series-Test.html#v:whnfRuntimeSeries",
      "description": {
        "fct-module": "Test.SBench.Time.Series.Test",
        "fct-package": "SBench",
        "fct-signature": "Maybe (BuildOptions, ExeOptions, FilePath, Title) -\u003e Algorithm (a -\u003e b) -\u003e DataGen (c -\u003e a) -\u003e [Seed c] -\u003e IO [(c, Double)]",
        "fct-source": "src/Test-SBench-Time-Series-Test.html#whnfRuntimeSeries",
        "fct-type": "function",
        "title": "whnfRuntimeSeries"
      },
      "index": {
        "description": "",
        "hierarchy": "Test SBench Time Series Test",
        "module": "Test.SBench.Time.Series.Test",
        "name": "whnfRuntimeSeries",
        "normalized": "Maybe(BuildOptions,ExeOptions,FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(c-\u003ea)-\u003e[Seed c]-\u003eIO[(c,Double)]",
        "package": "SBench",
        "partial": "Runtime Series",
        "signature": "Maybe(BuildOptions,ExeOptions,FilePath,Title)-\u003eAlgorithm(a-\u003eb)-\u003eDataGen(c-\u003ea)-\u003e[Seed c]-\u003eIO[(c,Double)]"
      }
    }
  }
]