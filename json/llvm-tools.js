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
        "word": "llvm-tools"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.VisualizeGraph",
          "name": "VisualizeGraph",
          "package": "llvm-tools",
          "source": "src/LLVM-VisualizeGraph.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "LLVM VisualizeGraph",
          "module": "LLVM.VisualizeGraph",
          "name": "VisualizeGraph",
          "package": "llvm-tools",
          "partial": "Visualize Graph",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/llvm-tools/docs/LLVM-VisualizeGraph.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.VisualizeGraph",
          "name": "OutputType",
          "package": "llvm-tools",
          "source": "src/LLVM-VisualizeGraph.html#OutputType",
          "type": "data"
        },
        "index": {
          "hierarchy": "LLVM VisualizeGraph",
          "module": "LLVM.VisualizeGraph",
          "name": "OutputType",
          "package": "llvm-tools",
          "partial": "Output Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/llvm-tools/docs/LLVM-VisualizeGraph.html#t:OutputType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.VisualizeGraph",
          "name": "CanvasOutput",
          "package": "llvm-tools",
          "signature": "CanvasOutput GraphvizCanvas",
          "source": "src/LLVM-VisualizeGraph.html#OutputType",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM VisualizeGraph",
          "module": "LLVM.VisualizeGraph",
          "name": "CanvasOutput",
          "package": "llvm-tools",
          "partial": "Canvas Output",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-tools/docs/LLVM-VisualizeGraph.html#v:CanvasOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.VisualizeGraph",
          "name": "FileOutput",
          "package": "llvm-tools",
          "signature": "FileOutput GraphvizOutput",
          "source": "src/LLVM-VisualizeGraph.html#OutputType",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM VisualizeGraph",
          "module": "LLVM.VisualizeGraph",
          "name": "FileOutput",
          "package": "llvm-tools",
          "partial": "File Output",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-tools/docs/LLVM-VisualizeGraph.html#v:FileOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "LLVM.VisualizeGraph",
          "name": "HtmlOutput",
          "package": "llvm-tools",
          "signature": "HtmlOutput",
          "source": "src/LLVM-VisualizeGraph.html#OutputType",
          "type": "function"
        },
        "index": {
          "hierarchy": "LLVM VisualizeGraph",
          "module": "LLVM.VisualizeGraph",
          "name": "HtmlOutput",
          "package": "llvm-tools",
          "partial": "Html Output",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-tools/docs/LLVM-VisualizeGraph.html#v:HtmlOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVisualize a graph-based analysis with graphviz.  It handles many\n common options including both file and canvas output.\n\u003c/p\u003e",
          "module": "LLVM.VisualizeGraph",
          "name": "visualizeGraph",
          "package": "llvm-tools",
          "signature": "FilePath-\u003e Maybe FilePath-\u003e OutputType-\u003e [String]-\u003e (Module -\u003e [(String, a)])-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Visualize graph-based analysis with graphviz It handles many common options including both file and canvas output",
          "hierarchy": "LLVM VisualizeGraph",
          "module": "LLVM.VisualizeGraph",
          "name": "visualizeGraph",
          "normalized": "FilePath-\u003eMaybe FilePath-\u003eOutputType-\u003e[String]-\u003e(Module-\u003e[(String,a)])-\u003eIO()",
          "package": "llvm-tools",
          "partial": "Graph",
          "signature": "FilePath-\u003eMaybe FilePath-\u003eOutputType-\u003e[String]-\u003e(Module-\u003e[(String,a)])-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/llvm-tools/docs/LLVM-VisualizeGraph.html#v:visualizeGraph"
      }
    }
  ]
]