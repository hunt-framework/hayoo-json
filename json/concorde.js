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
        "word": "concorde"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eApproximate a solution to 2D Euclidean TSP using the Lin-Kernighan\n heuristic.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Algorithms.Concorde.LinKern",
          "name": "LinKern",
          "package": "concorde",
          "source": "src/Algorithms-Concorde-LinKern.html",
          "type": "module"
        },
        "index": {
          "description": "Approximate solution to Euclidean TSP using the Lin-Kernighan heuristic",
          "hierarchy": "Algorithms Concorde LinKern",
          "module": "Algorithms.Concorde.LinKern",
          "name": "LinKern",
          "package": "concorde",
          "partial": "Lin Kern",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/concorde/docs/Algorithms-Concorde-LinKern.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration for \u003ccode\u003e\u003ccode\u003e\u003ca\u003etsp\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Algorithms.Concorde.LinKern",
          "name": "Config",
          "package": "concorde",
          "source": "src/Algorithms-Concorde-LinKern.html#Config",
          "type": "data"
        },
        "index": {
          "description": "Configuration for tsp",
          "hierarchy": "Algorithms Concorde LinKern",
          "module": "Algorithms.Concorde.LinKern",
          "name": "Config",
          "package": "concorde",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/concorde/docs/Algorithms-Concorde-LinKern.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA point in Euclidean two-dimensional space.\n\u003c/p\u003e",
          "module": "Algorithms.Concorde.LinKern",
          "name": "R2",
          "package": "concorde",
          "source": "src/Algorithms-Concorde-LinKern.html#R2",
          "type": "type"
        },
        "index": {
          "description": "point in Euclidean two-dimensional space",
          "hierarchy": "Algorithms Concorde LinKern",
          "module": "Algorithms.Concorde.LinKern",
          "name": "R2",
          "package": "concorde",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/concorde/docs/Algorithms-Concorde-LinKern.html#t:R2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algorithms.Concorde.LinKern",
          "name": "Config",
          "package": "concorde",
          "signature": "Config",
          "source": "src/Algorithms-Concorde-LinKern.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algorithms Concorde LinKern",
          "module": "Algorithms.Concorde.LinKern",
          "name": "Config",
          "package": "concorde",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concorde/docs/Algorithms-Concorde-LinKern.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault configuration.\n\u003c/p\u003e",
          "module": "Algorithms.Concorde.LinKern",
          "name": "defConfig",
          "package": "concorde",
          "signature": "Config",
          "source": "src/Algorithms-Concorde-LinKern.html#defConfig",
          "type": "function"
        },
        "index": {
          "description": "Default configuration",
          "hierarchy": "Algorithms Concorde LinKern",
          "module": "Algorithms.Concorde.LinKern",
          "name": "defConfig",
          "package": "concorde",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concorde/docs/Algorithms-Concorde-LinKern.html#v:defConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePath to the \u003ccode\u003elinkern\u003c/code\u003e executable.  Searches \u003ccode\u003e$PATH\u003c/code\u003e by default.\n\u003c/p\u003e",
          "module": "Algorithms.Concorde.LinKern",
          "name": "executable",
          "package": "concorde",
          "signature": "FilePath",
          "source": "src/Algorithms-Concorde-LinKern.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Path to the linkern executable Searches PATH by default",
          "hierarchy": "Algorithms Concorde LinKern",
          "module": "Algorithms.Concorde.LinKern",
          "name": "executable",
          "package": "concorde",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concorde/docs/Algorithms-Concorde-LinKern.html#v:executable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOther command-line arguments to the \u003ccode\u003elinkern\u003c/code\u003e executable.\n\u003c/p\u003e",
          "module": "Algorithms.Concorde.LinKern",
          "name": "otherArgs",
          "package": "concorde",
          "signature": "[String]",
          "source": "src/Algorithms-Concorde-LinKern.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Other command-line arguments to the linkern executable",
          "hierarchy": "Algorithms Concorde LinKern",
          "module": "Algorithms.Concorde.LinKern",
          "name": "otherArgs",
          "normalized": "[String]",
          "package": "concorde",
          "partial": "Args",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concorde/docs/Algorithms-Concorde-LinKern.html#v:otherArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun this many separate optimizations.  Default is 1.\n\u003c/p\u003e",
          "module": "Algorithms.Concorde.LinKern",
          "name": "runs",
          "package": "concorde",
          "signature": "Int",
          "source": "src/Algorithms-Concorde-LinKern.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Run this many separate optimizations Default is",
          "hierarchy": "Algorithms Concorde LinKern",
          "module": "Algorithms.Concorde.LinKern",
          "name": "runs",
          "package": "concorde",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concorde/docs/Algorithms-Concorde-LinKern.html#v:runs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun this many optimization steps.  Default is the number of points.\n\u003c/p\u003e",
          "module": "Algorithms.Concorde.LinKern",
          "name": "steps",
          "package": "concorde",
          "signature": "Maybe Int",
          "source": "src/Algorithms-Concorde-LinKern.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Run this many optimization steps Default is the number of points",
          "hierarchy": "Algorithms Concorde LinKern",
          "module": "Algorithms.Concorde.LinKern",
          "name": "steps",
          "package": "concorde",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concorde/docs/Algorithms-Concorde-LinKern.html#v:steps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop looking for better solutions after this many seconds.\n\u003c/p\u003e",
          "module": "Algorithms.Concorde.LinKern",
          "name": "timeBound",
          "package": "concorde",
          "signature": "Maybe Double",
          "source": "src/Algorithms-Concorde-LinKern.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Stop looking for better solutions after this many seconds",
          "hierarchy": "Algorithms Concorde LinKern",
          "module": "Algorithms.Concorde.LinKern",
          "name": "timeBound",
          "package": "concorde",
          "partial": "Bound",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concorde/docs/Algorithms-Concorde-LinKern.html#v:timeBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate a solution to the two-dimensional Euclidean Traveling\n Salesperson Problem, using the Lin-Kernighan heuristic.\n\u003c/p\u003e\u003cp\u003eInvokes Concorde's \u003ccode\u003elinkern\u003c/code\u003e executable as an external process.\n\u003c/p\u003e\u003cp\u003eNote: \u003ccode\u003elinkern\u003c/code\u003e uses Euclidean distance rounded to the nearest integer.\n You may need to scale up coordinates in the function passed to \u003ccode\u003e\u003ccode\u003e\u003ca\u003etsp\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Algorithms.Concorde.LinKern",
          "name": "tsp",
          "package": "concorde",
          "signature": "Config-\u003e (a -\u003e R2)-\u003e [a]-\u003e IO [a]",
          "type": "function"
        },
        "index": {
          "description": "Approximate solution to the two-dimensional Euclidean Traveling Salesperson Problem using the Lin-Kernighan heuristic Invokes Concorde linkern executable as an external process Note linkern uses Euclidean distance rounded to the nearest integer You may need to scale up coordinates in the function passed to tsp",
          "hierarchy": "Algorithms Concorde LinKern",
          "module": "Algorithms.Concorde.LinKern",
          "name": "tsp",
          "normalized": "Config-\u003e(a-\u003eR)-\u003e[a]-\u003eIO[a]",
          "package": "concorde",
          "signature": "Config-\u003e(a-\u003eR)-\u003e[a]-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concorde/docs/Algorithms-Concorde-LinKern.html#v:tsp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf set, write progress information to standard output.\n\u003c/p\u003e",
          "module": "Algorithms.Concorde.LinKern",
          "name": "verbose",
          "package": "concorde",
          "signature": "Bool",
          "source": "src/Algorithms-Concorde-LinKern.html#Config",
          "type": "function"
        },
        "index": {
          "description": "If set write progress information to standard output",
          "hierarchy": "Algorithms Concorde LinKern",
          "module": "Algorithms.Concorde.LinKern",
          "name": "verbose",
          "package": "concorde",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concorde/docs/Algorithms-Concorde-LinKern.html#v:verbose"
      }
    }
  ]
]