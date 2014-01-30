[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vacuum-graphviz/docs/GHC-Vacuum-GraphViz.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports a simple, high level interface for exporting\n \u003ccode\u003evacuum\u003c/code\u003e graphs to GraphViz \u003ccode\u003edot\u003c/code\u003e output, and rendering them to\n PNG/SVG files. It also contains various helpers if you wish to\n customize the output yourself in some manner.\n\u003c/p\u003e\u003cp\u003eFor this module to work, you will need to have graphviz installed,\n and the \u003ccode\u003edot\u003c/code\u003e utility should be available somewhere in your\n \u003ccode\u003e$PATH\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe simplest possible usage of this module is like so:\n\u003c/p\u003e\u003cpre\u003e vacuumToPng \"list\" [1..10]\n\u003c/pre\u003e\u003cp\u003eThis will output a 'list.png' file, which contains a pretty graph\n visualization of the expression \u003ccode\u003e[1..10]\u003c/code\u003e. You may alternatively\n use \u003ccode\u003e\u003ca\u003evacuumToSvg\u003c/a\u003e\u003c/code\u003e in the same manner, to export a graph to an SVG\n file. This is more than sufficient for many use cases.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "GHC.Vacuum.GraphViz",
        "fct-package": "vacuum-graphviz",
        "fct-signature": "module",
        "fct-source": "src/GHC-Vacuum-GraphViz.html",
        "fct-type": "module",
        "title": "GraphViz"
      },
      "index": {
        "description": "This module exports simple high level interface for exporting vacuum graphs to GraphViz dot output and rendering them to PNG SVG files It also contains various helpers if you wish to customize the output yourself in some manner For this module to work you will need to have graphviz installed and the dot utility should be available somewhere in your PATH The simplest possible usage of this module is like so vacuumToPng list This will output list.png file which contains pretty graph visualization of the expression You may alternatively use vacuumToSvg in the same manner to export graph to an SVG file This is more than sufficient for many use cases",
        "hierarchy": "GHC Vacuum GraphViz",
        "module": "GHC.Vacuum.GraphViz",
        "name": "GraphViz",
        "normalized": "",
        "package": "vacuum-graphviz",
        "partial": "Graph Viz",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vacuum-graphviz/docs/GHC-Vacuum-GraphViz.html#v:graphToDot",
      "description": {
        "fct-module": "GHC.Vacuum.GraphViz",
        "fct-package": "vacuum-graphviz",
        "fct-signature": "[(a, [a])] -\u003e DotGraph a",
        "fct-source": "src/GHC-Vacuum-GraphViz.html#graphToDot",
        "fct-type": "function",
        "title": "graphToDot"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Vacuum GraphViz",
        "module": "GHC.Vacuum.GraphViz",
        "name": "graphToDot",
        "normalized": "[(a,[a])]-\u003eDotGraph a",
        "package": "vacuum-graphviz",
        "partial": "To Dot",
        "signature": "[(a,[a])]-\u003eDotGraph a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vacuum-graphviz/docs/GHC-Vacuum-GraphViz.html#v:graphToDotFile",
      "description": {
        "fct-module": "GHC.Vacuum.GraphViz",
        "fct-package": "vacuum-graphviz",
        "fct-signature": "FilePath -\u003e GraphvizOutput -\u003e [(a, [a])] -\u003e IO FilePath",
        "fct-source": "src/GHC-Vacuum-GraphViz.html#graphToDotFile",
        "fct-type": "function",
        "title": "graphToDotFile"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Vacuum GraphViz",
        "module": "GHC.Vacuum.GraphViz",
        "name": "graphToDotFile",
        "normalized": "FilePath-\u003eGraphvizOutput-\u003e[(a,[a])]-\u003eIO FilePath",
        "package": "vacuum-graphviz",
        "partial": "To Dot File",
        "signature": "FilePath-\u003eGraphvizOutput-\u003e[(a,[a])]-\u003eIO FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vacuum-graphviz/docs/GHC-Vacuum-GraphViz.html#v:graphToDotParams",
      "description": {
        "fct-module": "GHC.Vacuum.GraphViz",
        "fct-package": "vacuum-graphviz",
        "fct-signature": "GraphvizParams a () () cl l -\u003e [(a, [a])] -\u003e DotGraph a",
        "fct-source": "src/GHC-Vacuum-GraphViz.html#graphToDotParams",
        "fct-type": "function",
        "title": "graphToDotParams"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Vacuum GraphViz",
        "module": "GHC.Vacuum.GraphViz",
        "name": "graphToDotParams",
        "normalized": "GraphvizParams a()()b c-\u003e[(a,[a])]-\u003eDotGraph a",
        "package": "vacuum-graphviz",
        "partial": "To Dot Params",
        "signature": "GraphvizParams a()()cl l-\u003e[(a,[a])]-\u003eDotGraph a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vacuum-graphviz/docs/GHC-Vacuum-GraphViz.html#v:vacuumParams",
      "description": {
        "fct-module": "GHC.Vacuum.GraphViz",
        "fct-package": "vacuum-graphviz",
        "fct-signature": "GraphvizParams a () () () ()",
        "fct-source": "src/GHC-Vacuum-GraphViz.html#vacuumParams",
        "fct-type": "function",
        "title": "vacuumParams"
      },
      "index": {
        "description": "",
        "hierarchy": "GHC Vacuum GraphViz",
        "module": "GHC.Vacuum.GraphViz",
        "name": "vacuumParams",
        "normalized": "GraphvizParams a()()()()",
        "package": "vacuum-graphviz",
        "partial": "Params",
        "signature": "GraphvizParams a()()()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vacuum-graphviz/docs/GHC-Vacuum-GraphViz.html#v:vacuumToPng",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003evacuumToPng \u003ca\u003efoo\u003c/a\u003e e\u003c/code\u003e renders a graph representation of the\n expression \u003ccode\u003ee\u003c/code\u003e (which can be any expression what-so-ever) to\n the file \"foo.png\" for later viewing.\n\u003c/p\u003e",
        "fct-module": "GHC.Vacuum.GraphViz",
        "fct-package": "vacuum-graphviz",
        "fct-signature": "FilePath -\u003e a -\u003e IO FilePath",
        "fct-source": "src/GHC-Vacuum-GraphViz.html#vacuumToPng",
        "fct-type": "function",
        "title": "vacuumToPng"
      },
      "index": {
        "description": "vacuumToPng foo renders graph representation of the expression which can be any expression what-so-ever to the file foo.png for later viewing",
        "hierarchy": "GHC Vacuum GraphViz",
        "module": "GHC.Vacuum.GraphViz",
        "name": "vacuumToPng",
        "normalized": "FilePath-\u003ea-\u003eIO FilePath",
        "package": "vacuum-graphviz",
        "partial": "To Png",
        "signature": "FilePath-\u003ea-\u003eIO FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/vacuum-graphviz/docs/GHC-Vacuum-GraphViz.html#v:vacuumToSvg",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003evacuumToSvg \u003ca\u003efoo\u003c/a\u003e e\u003c/code\u003e renders a graph representation of the\n expression \u003ccode\u003ee\u003c/code\u003e (which can be any expression what-so-ever) to\n the file \"foo.svg\" for later viewing.\n\u003c/p\u003e",
        "fct-module": "GHC.Vacuum.GraphViz",
        "fct-package": "vacuum-graphviz",
        "fct-signature": "FilePath -\u003e a -\u003e IO FilePath",
        "fct-source": "src/GHC-Vacuum-GraphViz.html#vacuumToSvg",
        "fct-type": "function",
        "title": "vacuumToSvg"
      },
      "index": {
        "description": "vacuumToSvg foo renders graph representation of the expression which can be any expression what-so-ever to the file foo.svg for later viewing",
        "hierarchy": "GHC Vacuum GraphViz",
        "module": "GHC.Vacuum.GraphViz",
        "name": "vacuumToSvg",
        "normalized": "FilePath-\u003ea-\u003eIO FilePath",
        "package": "vacuum-graphviz",
        "partial": "To Svg",
        "signature": "FilePath-\u003ea-\u003eIO FilePath"
      }
    }
  }
]