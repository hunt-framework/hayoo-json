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
        "word": "chronograph"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMeasure data and IO evaluation time in a lightweight manner.\n\u003c/p\u003e\u003cp\u003eA 'Chronograph a' has two parts, the value \u003ccode\u003ea\u003c/code\u003e and the measurement of\n evaluation time.  A Chronograph is lazy, so \u003ccode\u003ea\u003c/code\u003e is only evaluted on demand.\n\u003c/p\u003e\u003cp\u003eThis example counts the lines in a number of files, and records the\n evaluation time taken for each one.\n\u003c/p\u003e\u003cpre\u003e  import System.Environment\n  import Control.Applicative\n  import Data.Chronograph\n\n  procFile :: FilePath -\u003e IO Int\n  procFile fp = do\n      doc \u003c- readFile fp\n      let wc = length $ lines doc\n      chronoPrint \"time to eval length\" (chrono wc)\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003echrono\u003c/a\u003e\u003c/code\u003e creates a chronograph that evaluates its input as far as \u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e would.\n In this case the input \u003ccode\u003ewc\u003c/code\u003e is an Int, so \u003ccode\u003e\u003ca\u003echrono\u003c/a\u003e\u003c/code\u003e fully evaluates it.\n deepseq-style evaluation is performed by \u003ccode\u003e\u003ca\u003echronoNF\u003c/a\u003e\u003c/code\u003e, and custom evaluation\n strategies can be implemented with \u003ccode\u003e\u003ca\u003echronoBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003ealthough \u003ccode\u003ewc\u003c/code\u003e is a pure value, IO is lazily performed in its evalution.\n This IO cost is included in \u003ccode\u003e\u003ca\u003echrono\u003c/a\u003e\u003c/code\u003es measurement.\n\u003c/p\u003e\u003cp\u003eYou can explicitly include timings of IO actions as well:\n\u003c/p\u003e\u003cpre\u003e  fileLinesIO :: FilePath -\u003e IO Int\n  fileLinesIO fp = length . lines \u003c$\u003e readFile fp\n\n  procIO :: FilePath -\u003e IO ()\n  procIO fp = do\n    wc \u003c- chronoIO $ fileLinesIO fp\n    void $ chronoPrint \"fileLinesIO\" wc\n\u003c/pre\u003e\u003cpre\u003e  main :: IO ()\n  main = do\n      args \u003c- getArgs\n      putStrLn \"pure Chronograph\"\n      mapM_ procFile args\n      putStrLn \"IO Chronograph\"\n      mapM_ procIO args\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Chronograph",
          "name": "Chronograph",
          "package": "chronograph",
          "source": "src/Data-Chronograph.html",
          "type": "module"
        },
        "index": {
          "description": "Measure data and IO evaluation time in lightweight manner Chronograph has two parts the value and the measurement of evaluation time Chronograph is lazy so is only evaluted on demand This example counts the lines in number of files and records the evaluation time taken for each one import System.Environment import Control.Applicative import Data.Chronograph procFile FilePath IO Int procFile fp do doc readFile fp let wc length lines doc chronoPrint time to eval length chrono wc chrono creates chronograph that evaluates its input as far as seq would In this case the input wc is an Int so chrono fully evaluates it deepseq-style evaluation is performed by chronoNF and custom evaluation strategies can be implemented with chronoBy although wc is pure value IO is lazily performed in its evalution This IO cost is included in chrono measurement You can explicitly include timings of IO actions as well fileLinesIO FilePath IO Int fileLinesIO fp length lines readFile fp procIO FilePath IO procIO fp do wc chronoIO fileLinesIO fp void chronoPrint fileLinesIO wc main IO main do args getArgs putStrLn pure Chronograph mapM procFile args putStrLn IO Chronograph mapM procIO args",
          "hierarchy": "Data Chronograph",
          "module": "Data.Chronograph",
          "name": "Chronograph",
          "package": "chronograph",
          "partial": "Chronograph",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/chronograph/docs/Data-Chronograph.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Chronograph",
          "name": "Chronograph",
          "package": "chronograph",
          "source": "src/Data-Chronograph.html#Chronograph",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Chronograph",
          "module": "Data.Chronograph",
          "name": "Chronograph",
          "package": "chronograph",
          "partial": "Chronograph",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/chronograph/docs/Data-Chronograph.html#t:Chronograph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Chronograph",
          "name": "Chronograph",
          "package": "chronograph",
          "signature": "Chronograph",
          "source": "src/Data-Chronograph.html#Chronograph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Chronograph",
          "module": "Data.Chronograph",
          "name": "Chronograph",
          "package": "chronograph",
          "partial": "Chronograph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chronograph/docs/Data-Chronograph.html#v:Chronograph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a \u003ccode\u003e\u003ca\u003eChronograph\u003c/a\u003e\u003c/code\u003e to measure evaluation to weak head normal form.\n\u003c/p\u003e",
          "module": "Data.Chronograph",
          "name": "chrono",
          "package": "chronograph",
          "signature": "a -\u003e Chronograph a",
          "source": "src/Data-Chronograph.html#chrono",
          "type": "function"
        },
        "index": {
          "description": "Add Chronograph to measure evaluation to weak head normal form",
          "hierarchy": "Data Chronograph",
          "module": "Data.Chronograph",
          "name": "chrono",
          "normalized": "a-\u003eChronograph a",
          "package": "chronograph",
          "signature": "a-\u003eChronograph a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chronograph/docs/Data-Chronograph.html#v:chrono"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a \u003ccode\u003e\u003ca\u003eChronograph\u003c/a\u003e\u003c/code\u003e to measure evalution time with the provided strategy.\n\u003c/p\u003e",
          "module": "Data.Chronograph",
          "name": "chronoBy",
          "package": "chronograph",
          "signature": "(a -\u003e ()) -\u003e a -\u003e Chronograph a",
          "source": "src/Data-Chronograph.html#chronoBy",
          "type": "function"
        },
        "index": {
          "description": "Add Chronograph to measure evalution time with the provided strategy",
          "hierarchy": "Data Chronograph",
          "module": "Data.Chronograph",
          "name": "chronoBy",
          "normalized": "(a-\u003e())-\u003ea-\u003eChronograph a",
          "package": "chronograph",
          "partial": "By",
          "signature": "(a-\u003e())-\u003ea-\u003eChronograph a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chronograph/docs/Data-Chronograph.html#v:chronoBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a \u003ccode\u003e\u003ca\u003eChronograph\u003c/a\u003e\u003c/code\u003e to measure time of IO and evaluation to weak head\n normal form.\n\u003c/p\u003e",
          "module": "Data.Chronograph",
          "name": "chronoIO",
          "package": "chronograph",
          "signature": "IO a -\u003e IO (Chronograph a)",
          "source": "src/Data-Chronograph.html#chronoIO",
          "type": "function"
        },
        "index": {
          "description": "Add Chronograph to measure time of IO and evaluation to weak head normal form",
          "hierarchy": "Data Chronograph",
          "module": "Data.Chronograph",
          "name": "chronoIO",
          "normalized": "IO a-\u003eIO(Chronograph a)",
          "package": "chronograph",
          "partial": "IO",
          "signature": "IO a-\u003eIO(Chronograph a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chronograph/docs/Data-Chronograph.html#v:chronoIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a \u003ccode\u003e\u003ca\u003eChronograph\u003c/a\u003e\u003c/code\u003e to measure time of IO and evaluation with the\n provided strategy.\n\u003c/p\u003e",
          "module": "Data.Chronograph",
          "name": "chronoIOBy",
          "package": "chronograph",
          "signature": "(a -\u003e ()) -\u003e IO a -\u003e IO (Chronograph a)",
          "source": "src/Data-Chronograph.html#chronoIOBy",
          "type": "function"
        },
        "index": {
          "description": "Add Chronograph to measure time of IO and evaluation with the provided strategy",
          "hierarchy": "Data Chronograph",
          "module": "Data.Chronograph",
          "name": "chronoIOBy",
          "normalized": "(a-\u003e())-\u003eIO a-\u003eIO(Chronograph a)",
          "package": "chronograph",
          "partial": "IOBy",
          "signature": "(a-\u003e())-\u003eIO a-\u003eIO(Chronograph a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chronograph/docs/Data-Chronograph.html#v:chronoIOBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a \u003ccode\u003e\u003ca\u003eChronograph\u003c/a\u003e\u003c/code\u003e to measure IO time (no additional evaluation is\n performed, although the IO action itself may perform some evaluation)\n\u003c/p\u003e",
          "module": "Data.Chronograph",
          "name": "chronoJustIO",
          "package": "chronograph",
          "signature": "IO a -\u003e IO (Chronograph a)",
          "source": "src/Data-Chronograph.html#chronoJustIO",
          "type": "function"
        },
        "index": {
          "description": "Add Chronograph to measure IO time no additional evaluation is performed although the IO action itself may perform some evaluation",
          "hierarchy": "Data Chronograph",
          "module": "Data.Chronograph",
          "name": "chronoJustIO",
          "normalized": "IO a-\u003eIO(Chronograph a)",
          "package": "chronograph",
          "partial": "Just IO",
          "signature": "IO a-\u003eIO(Chronograph a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chronograph/docs/Data-Chronograph.html#v:chronoJustIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a \u003ccode\u003e\u003ca\u003eChronograph\u003c/a\u003e\u003c/code\u003e to measure evaluation to normal form.\n\u003c/p\u003e",
          "module": "Data.Chronograph",
          "name": "chronoNF",
          "package": "chronograph",
          "signature": "a -\u003e Chronograph a",
          "source": "src/Data-Chronograph.html#chronoNF",
          "type": "function"
        },
        "index": {
          "description": "Add Chronograph to measure evaluation to normal form",
          "hierarchy": "Data Chronograph",
          "module": "Data.Chronograph",
          "name": "chronoNF",
          "normalized": "a-\u003eChronograph a",
          "package": "chronograph",
          "partial": "NF",
          "signature": "a-\u003eChronograph a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chronograph/docs/Data-Chronograph.html#v:chronoNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a \u003ccode\u003e\u003ca\u003eChronograph\u003c/a\u003e\u003c/code\u003e to measure time of IO and evaluation to normal form.\n\u003c/p\u003e",
          "module": "Data.Chronograph",
          "name": "chronoNFIO",
          "package": "chronograph",
          "signature": "IO a -\u003e IO (Chronograph a)",
          "source": "src/Data-Chronograph.html#chronoNFIO",
          "type": "function"
        },
        "index": {
          "description": "Add Chronograph to measure time of IO and evaluation to normal form",
          "hierarchy": "Data Chronograph",
          "module": "Data.Chronograph",
          "name": "chronoNFIO",
          "normalized": "IO a-\u003eIO(Chronograph a)",
          "package": "chronograph",
          "partial": "NFIO",
          "signature": "IO a-\u003eIO(Chronograph a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chronograph/docs/Data-Chronograph.html#v:chronoNFIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprint the measure to stdout and return the value\n\u003c/p\u003e",
          "module": "Data.Chronograph",
          "name": "chronoPrint",
          "package": "chronograph",
          "signature": "String -\u003e Chronograph a -\u003e IO a",
          "source": "src/Data-Chronograph.html#chronoPrint",
          "type": "function"
        },
        "index": {
          "description": "print the measure to stdout and return the value",
          "hierarchy": "Data Chronograph",
          "module": "Data.Chronograph",
          "name": "chronoPrint",
          "normalized": "String-\u003eChronograph a-\u003eIO a",
          "package": "chronograph",
          "partial": "Print",
          "signature": "String-\u003eChronograph a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chronograph/docs/Data-Chronograph.html#v:chronoPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewrite the measure to the ghc eventlog and return the value\n\u003c/p\u003e",
          "module": "Data.Chronograph",
          "name": "chronoTraceEvent",
          "package": "chronograph",
          "signature": "String -\u003e Chronograph a -\u003e a",
          "source": "src/Data-Chronograph.html#chronoTraceEvent",
          "type": "function"
        },
        "index": {
          "description": "write the measure to the ghc eventlog and return the value",
          "hierarchy": "Data Chronograph",
          "module": "Data.Chronograph",
          "name": "chronoTraceEvent",
          "normalized": "String-\u003eChronograph a-\u003ea",
          "package": "chronograph",
          "partial": "Trace Event",
          "signature": "String-\u003eChronograph a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chronograph/docs/Data-Chronograph.html#v:chronoTraceEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewrite the measure to the ghc eventlog and return the value in IO\n\u003c/p\u003e",
          "module": "Data.Chronograph",
          "name": "chronoTraceEventIO",
          "package": "chronograph",
          "signature": "String -\u003e Chronograph a -\u003e IO a",
          "source": "src/Data-Chronograph.html#chronoTraceEventIO",
          "type": "function"
        },
        "index": {
          "description": "write the measure to the ghc eventlog and return the value in IO",
          "hierarchy": "Data Chronograph",
          "module": "Data.Chronograph",
          "name": "chronoTraceEventIO",
          "normalized": "String-\u003eChronograph a-\u003eIO a",
          "package": "chronograph",
          "partial": "Trace Event IO",
          "signature": "String-\u003eChronograph a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chronograph/docs/Data-Chronograph.html#v:chronoTraceEventIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Chronograph",
          "name": "measure",
          "package": "chronograph",
          "signature": "NominalDiffTime",
          "source": "src/Data-Chronograph.html#Chronograph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Chronograph",
          "module": "Data.Chronograph",
          "name": "measure",
          "package": "chronograph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chronograph/docs/Data-Chronograph.html#v:measure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Chronograph",
          "name": "val",
          "package": "chronograph",
          "signature": "a",
          "source": "src/Data-Chronograph.html#Chronograph",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Chronograph",
          "module": "Data.Chronograph",
          "name": "val",
          "package": "chronograph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/chronograph/docs/Data-Chronograph.html#v:val"
      }
    }
  ]
]