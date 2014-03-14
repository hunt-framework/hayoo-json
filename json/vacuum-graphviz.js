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
        "word": "vacuum-graphviz"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports a simple, high level interface for exporting\n \u003ccode\u003evacuum\u003c/code\u003e graphs to GraphViz \u003ccode\u003edot\u003c/code\u003e output, and rendering them to\n PNG/SVG files. It also contains various helpers if you wish to\n customize the output yourself in some manner.\n\u003c/p\u003e\u003cp\u003eFor this module to work, you will need to have graphviz installed,\n and the \u003ccode\u003edot\u003c/code\u003e utility should be available somewhere in your\n \u003ccode\u003e$PATH\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe simplest possible usage of this module is like so:\n\u003c/p\u003e\u003cpre\u003e vacuumToPng \"list\" [1..10]\n\u003c/pre\u003e\u003cp\u003eThis will output a 'list.png' file, which contains a pretty graph\n visualization of the expression \u003ccode\u003e[1..10]\u003c/code\u003e. You may alternatively\n use \u003ccode\u003e\u003ca\u003evacuumToSvg\u003c/a\u003e\u003c/code\u003e in the same manner, to export a graph to an SVG\n file. This is more than sufficient for many use cases.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "GHC.Vacuum.GraphViz",
          "name": "GraphViz",
          "package": "vacuum-graphviz",
          "source": "src/GHC-Vacuum-GraphViz.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports simple high level interface for exporting vacuum graphs to GraphViz dot output and rendering them to PNG SVG files It also contains various helpers if you wish to customize the output yourself in some manner For this module to work you will need to have graphviz installed and the dot utility should be available somewhere in your PATH The simplest possible usage of this module is like so vacuumToPng list This will output list.png file which contains pretty graph visualization of the expression You may alternatively use vacuumToSvg in the same manner to export graph to an SVG file This is more than sufficient for many use cases",
          "hierarchy": "GHC Vacuum GraphViz",
          "module": "GHC.Vacuum.GraphViz",
          "name": "GraphViz",
          "package": "vacuum-graphviz",
          "partial": "Graph Viz",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vacuum-graphviz/docs/GHC-Vacuum-GraphViz.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Vacuum.GraphViz",
          "name": "graphToDot",
          "package": "vacuum-graphviz",
          "signature": "[(a, [a])] -\u003e DotGraph a",
          "source": "src/GHC-Vacuum-GraphViz.html#graphToDot",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Vacuum GraphViz",
          "module": "GHC.Vacuum.GraphViz",
          "name": "graphToDot",
          "normalized": "[(a,[a])]-\u003eDotGraph a",
          "package": "vacuum-graphviz",
          "partial": "To Dot",
          "signature": "[(a,[a])]-\u003eDotGraph a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vacuum-graphviz/docs/GHC-Vacuum-GraphViz.html#v:graphToDot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Vacuum.GraphViz",
          "name": "graphToDotFile",
          "package": "vacuum-graphviz",
          "signature": "FilePath -\u003e GraphvizOutput -\u003e [(a, [a])] -\u003e IO FilePath",
          "source": "src/GHC-Vacuum-GraphViz.html#graphToDotFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Vacuum GraphViz",
          "module": "GHC.Vacuum.GraphViz",
          "name": "graphToDotFile",
          "normalized": "FilePath-\u003eGraphvizOutput-\u003e[(a,[a])]-\u003eIO FilePath",
          "package": "vacuum-graphviz",
          "partial": "To Dot File",
          "signature": "FilePath-\u003eGraphvizOutput-\u003e[(a,[a])]-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vacuum-graphviz/docs/GHC-Vacuum-GraphViz.html#v:graphToDotFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Vacuum.GraphViz",
          "name": "graphToDotParams",
          "package": "vacuum-graphviz",
          "signature": "GraphvizParams a () () cl l -\u003e [(a, [a])] -\u003e DotGraph a",
          "source": "src/GHC-Vacuum-GraphViz.html#graphToDotParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Vacuum GraphViz",
          "module": "GHC.Vacuum.GraphViz",
          "name": "graphToDotParams",
          "normalized": "GraphvizParams a()()b c-\u003e[(a,[a])]-\u003eDotGraph a",
          "package": "vacuum-graphviz",
          "partial": "To Dot Params",
          "signature": "GraphvizParams a()()cl l-\u003e[(a,[a])]-\u003eDotGraph a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vacuum-graphviz/docs/GHC-Vacuum-GraphViz.html#v:graphToDotParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "GHC.Vacuum.GraphViz",
          "name": "vacuumParams",
          "package": "vacuum-graphviz",
          "signature": "GraphvizParams a () () () ()",
          "source": "src/GHC-Vacuum-GraphViz.html#vacuumParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "GHC Vacuum GraphViz",
          "module": "GHC.Vacuum.GraphViz",
          "name": "vacuumParams",
          "normalized": "GraphvizParams a()()()()",
          "package": "vacuum-graphviz",
          "partial": "Params",
          "signature": "GraphvizParams a()()()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vacuum-graphviz/docs/GHC-Vacuum-GraphViz.html#v:vacuumParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003evacuumToPng \u003ca\u003efoo\u003c/a\u003e e\u003c/code\u003e renders a graph representation of the\n expression \u003ccode\u003ee\u003c/code\u003e (which can be any expression what-so-ever) to\n the file \"foo.png\" for later viewing.\n\u003c/p\u003e",
          "module": "GHC.Vacuum.GraphViz",
          "name": "vacuumToPng",
          "package": "vacuum-graphviz",
          "signature": "FilePath -\u003e a -\u003e IO FilePath",
          "source": "src/GHC-Vacuum-GraphViz.html#vacuumToPng",
          "type": "function"
        },
        "index": {
          "description": "vacuumToPng foo renders graph representation of the expression which can be any expression what-so-ever to the file foo.png for later viewing",
          "hierarchy": "GHC Vacuum GraphViz",
          "module": "GHC.Vacuum.GraphViz",
          "name": "vacuumToPng",
          "normalized": "FilePath-\u003ea-\u003eIO FilePath",
          "package": "vacuum-graphviz",
          "partial": "To Png",
          "signature": "FilePath-\u003ea-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vacuum-graphviz/docs/GHC-Vacuum-GraphViz.html#v:vacuumToPng"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003evacuumToSvg \u003ca\u003efoo\u003c/a\u003e e\u003c/code\u003e renders a graph representation of the\n expression \u003ccode\u003ee\u003c/code\u003e (which can be any expression what-so-ever) to\n the file \"foo.svg\" for later viewing.\n\u003c/p\u003e",
          "module": "GHC.Vacuum.GraphViz",
          "name": "vacuumToSvg",
          "package": "vacuum-graphviz",
          "signature": "FilePath -\u003e a -\u003e IO FilePath",
          "source": "src/GHC-Vacuum-GraphViz.html#vacuumToSvg",
          "type": "function"
        },
        "index": {
          "description": "vacuumToSvg foo renders graph representation of the expression which can be any expression what-so-ever to the file foo.svg for later viewing",
          "hierarchy": "GHC Vacuum GraphViz",
          "module": "GHC.Vacuum.GraphViz",
          "name": "vacuumToSvg",
          "normalized": "FilePath-\u003ea-\u003eIO FilePath",
          "package": "vacuum-graphviz",
          "partial": "To Svg",
          "signature": "FilePath-\u003ea-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vacuum-graphviz/docs/GHC-Vacuum-GraphViz.html#v:vacuumToSvg"
      }
    }
  ]
]