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
        "word": "pqc"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA parallel batch driver for running QuickCheck on threaded or SMP systems.\n See the \u003cem\u003eExample.hs\u003c/em\u003e file for a complete overview.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.QuickCheck.Parallel",
          "name": "Parallel",
          "package": "pqc",
          "source": "src/Test-QuickCheck-Parallel.html",
          "type": "module"
        },
        "index": {
          "description": "parallel batch driver for running QuickCheck on threaded or SMP systems See the Example.hs file for complete overview",
          "hierarchy": "Test QuickCheck Parallel",
          "module": "Test.QuickCheck.Parallel",
          "name": "Parallel",
          "package": "pqc",
          "partial": "Parallel",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pqc/docs/Test-QuickCheck-Parallel.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum number of successful test values\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Parallel",
          "name": "Depth",
          "package": "pqc",
          "source": "src/Test-QuickCheck-Parallel.html#Depth",
          "type": "type"
        },
        "index": {
          "description": "Maximum number of successful test values",
          "hierarchy": "Test QuickCheck Parallel",
          "module": "Test.QuickCheck.Parallel",
          "name": "Depth",
          "package": "pqc",
          "partial": "Depth",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pqc/docs/Test-QuickCheck-Parallel.html#t:Depth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA name or description for test\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Parallel",
          "name": "Name",
          "package": "pqc",
          "source": "src/Test-QuickCheck-Parallel.html#Name",
          "type": "type"
        },
        "index": {
          "description": "name or description for test",
          "hierarchy": "Test QuickCheck Parallel",
          "module": "Test.QuickCheck.Parallel",
          "name": "Name",
          "package": "pqc",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pqc/docs/Test-QuickCheck-Parallel.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest case for parallel batch driver\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Parallel",
          "name": "Test",
          "package": "pqc",
          "source": "src/Test-QuickCheck-Parallel.html#Test",
          "type": "type"
        },
        "index": {
          "description": "Test case for parallel batch driver",
          "hierarchy": "Test QuickCheck Parallel",
          "module": "Test.QuickCheck.Parallel",
          "name": "Test",
          "package": "pqc",
          "partial": "Test",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pqc/docs/Test-QuickCheck-Parallel.html#t:Test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a property, and run it on a deterministic set of data\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Parallel",
          "name": "pDet",
          "package": "pqc",
          "signature": "a -\u003e Depth -\u003e IO Result",
          "source": "src/Test-QuickCheck-Parallel.html#pDet",
          "type": "function"
        },
        "index": {
          "description": "Wrap property and run it on deterministic set of data",
          "hierarchy": "Test QuickCheck Parallel",
          "module": "Test.QuickCheck.Parallel",
          "name": "pDet",
          "normalized": "a-\u003eDepth-\u003eIO Result",
          "package": "pqc",
          "partial": "Det",
          "signature": "a-\u003eDepth-\u003eIO Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pqc/docs/Test-QuickCheck-Parallel.html#v:pDet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a property, and run it on a non-deterministic set of data\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Parallel",
          "name": "pNon",
          "package": "pqc",
          "signature": "a -\u003e Depth -\u003e IO Result",
          "source": "src/Test-QuickCheck-Parallel.html#pNon",
          "type": "function"
        },
        "index": {
          "description": "Wrap property and run it on non-deterministic set of data",
          "hierarchy": "Test QuickCheck Parallel",
          "module": "Test.QuickCheck.Parallel",
          "name": "pNon",
          "normalized": "a-\u003eDepth-\u003eIO Result",
          "package": "pqc",
          "partial": "Non",
          "signature": "a-\u003eDepth-\u003eIO Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pqc/docs/Test-QuickCheck-Parallel.html#v:pNon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a list of QuickCheck properties in parallel chunks, and test\n to a depth of \u003ccode\u003ed\u003c/code\u003e (first argument). Parallel Chunks is Haskell thread\n that can run truly simultaneously (on separate physical processors)\n at any given time. \n\u003c/p\u003e\u003cp\u003eCompile your application with '-threaded' and run with the SMP runtime's\n '-N4' (or however many OS threads you want to donate), for best results.\n\u003c/p\u003e\u003cpre\u003e import Test.QuickCheck.Parallel\n\n pRun 1000\n    [ (\"sort1\", pDet prop_sort1)\n    , (\"sort2\", pDet prop_sort2) ]\n\u003c/pre\u003e\u003cp\u003ewith SMP runtime's '-N[n]' flag will run \u003ccode\u003en\u003c/code\u003e threads over the property\n list, to depth 1000. (see \u003ccode\u003e\u003ca\u003egetNumCapabilities\u003c/a\u003e\u003c/code\u003e for more details.)\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Parallel",
          "name": "pRun",
          "package": "pqc",
          "signature": "Depth -\u003e [Test] -\u003e IO ()",
          "source": "src/Test-QuickCheck-Parallel.html#pRun",
          "type": "function"
        },
        "index": {
          "description": "Run list of QuickCheck properties in parallel chunks and test to depth of first argument Parallel Chunks is Haskell thread that can run truly simultaneously on separate physical processors at any given time Compile your application with threaded and run with the SMP runtime N4 or however many OS threads you want to donate for best results import Test.QuickCheck.Parallel pRun sort1 pDet prop sort1 sort2 pDet prop sort2 with SMP runtime flag will run threads over the property list to depth see getNumCapabilities for more details",
          "hierarchy": "Test QuickCheck Parallel",
          "module": "Test.QuickCheck.Parallel",
          "name": "pRun",
          "normalized": "Depth-\u003e[Test]-\u003eIO()",
          "package": "pqc",
          "partial": "Run",
          "signature": "Depth-\u003e[Test]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pqc/docs/Test-QuickCheck-Parallel.html#v:pRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003epRun\u003c/a\u003e\u003c/code\u003e. Run a list of QuickCheck properties in parallel\n chunks, using all Processors.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Parallel",
          "name": "pRunAllProcessors",
          "package": "pqc",
          "signature": "Depth -\u003e [Test] -\u003e IO ()",
          "source": "src/Test-QuickCheck-Parallel.html#pRunAllProcessors",
          "type": "function"
        },
        "index": {
          "description": "Variant of pRun Run list of QuickCheck properties in parallel chunks using all Processors",
          "hierarchy": "Test QuickCheck Parallel",
          "module": "Test.QuickCheck.Parallel",
          "name": "pRunAllProcessors",
          "normalized": "Depth-\u003e[Test]-\u003eIO()",
          "package": "pqc",
          "partial": "Run All Processors",
          "signature": "Depth-\u003e[Test]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pqc/docs/Test-QuickCheck-Parallel.html#v:pRunAllProcessors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003epRun\u003c/a\u003e\u003c/code\u003e. Run a list of QuickCheck properties in parallel\n chunks, using \u003ccode\u003en\u003c/code\u003e Haskell threads (first argument), and test to a\n depth of \u003ccode\u003ed\u003c/code\u003e (second argument). Compile your application with\n '-threaded' and run with the SMP runtime's '-N4' (or however many OS\n threads you want to donate), for best results.\n\u003c/p\u003e\u003cpre\u003e import Test.QuickCheck.Parallel\n\n do n \u003c- getArgs \u003e\u003e= readIO . head\n    pRunWithNum n 1000 [ (\"sort1\", pDet prop_sort1) ]\n\u003c/pre\u003e\u003cp\u003eWill run \u003ccode\u003en\u003c/code\u003e threads over the property list, to depth 1000.\n\u003c/p\u003e\u003cp\u003eIf you want to specify \u003ccode\u003en\u003c/code\u003e by using '-N[n]' or \u003ccode\u003e\u003ca\u003esetNumCapabilities\u003c/a\u003e\u003c/code\u003e,\n use \u003ccode\u003e\u003ca\u003epRun\u003c/a\u003e\u003c/code\u003e instead of this function.\n\u003c/p\u003e",
          "module": "Test.QuickCheck.Parallel",
          "name": "pRunWithNum",
          "package": "pqc",
          "signature": "Int -\u003e Depth -\u003e [Test] -\u003e IO ()",
          "source": "src/Test-QuickCheck-Parallel.html#pRunWithNum",
          "type": "function"
        },
        "index": {
          "description": "Variant of pRun Run list of QuickCheck properties in parallel chunks using Haskell threads first argument and test to depth of second argument Compile your application with threaded and run with the SMP runtime N4 or however many OS threads you want to donate for best results import Test.QuickCheck.Parallel do getArgs readIO head pRunWithNum sort1 pDet prop sort1 Will run threads over the property list to depth If you want to specify by using or setNumCapabilities use pRun instead of this function",
          "hierarchy": "Test QuickCheck Parallel",
          "module": "Test.QuickCheck.Parallel",
          "name": "pRunWithNum",
          "normalized": "Int-\u003eDepth-\u003e[Test]-\u003eIO()",
          "package": "pqc",
          "partial": "Run With Num",
          "signature": "Int-\u003eDepth-\u003e[Test]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pqc/docs/Test-QuickCheck-Parallel.html#v:pRunWithNum"
      }
    }
  ]
]