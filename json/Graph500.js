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
        "word": "Graph500"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA generator for Graph500 benchmark. Translated from Graph500 specification in GNU Octave.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "G500.Generate",
          "name": "Generate",
          "package": "Graph500",
          "source": "src/G500-Generate.html",
          "type": "module"
        },
        "index": {
          "description": "generator for Graph500 benchmark Translated from Graph500 specification in GNU Octave",
          "hierarchy": "G500 Generate",
          "module": "G500.Generate",
          "name": "Generate",
          "package": "Graph500",
          "partial": "Generate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Graph500/docs/G500-Generate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "G500.Generate",
          "name": "generate",
          "package": "Graph500",
          "signature": "Int-\u003e Int-\u003e IO (GraphArr, GraphArr)",
          "type": "function"
        },
        "index": {
          "hierarchy": "G500 Generate",
          "module": "G500.Generate",
          "name": "generate",
          "normalized": "Int-\u003eInt-\u003eIO(GraphArr,GraphArr)",
          "package": "Graph500",
          "signature": "Int-\u003eInt-\u003eIO(GraphArr,GraphArr)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graph500/docs/G500-Generate.html#v:generate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFile generation utilities.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "G500.GenerateFile",
          "name": "GenerateFile",
          "package": "Graph500",
          "source": "src/G500-GenerateFile.html",
          "type": "module"
        },
        "index": {
          "description": "File generation utilities",
          "hierarchy": "G500 GenerateFile",
          "module": "G500.GenerateFile",
          "name": "GenerateFile",
          "package": "Graph500",
          "partial": "Generate File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Graph500/docs/G500-GenerateFile.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "G500.GenerateFile",
          "name": "GraphType",
          "package": "Graph500",
          "source": "src/G500-GenerateFile.html#GraphType",
          "type": "data"
        },
        "index": {
          "hierarchy": "G500 GenerateFile",
          "module": "G500.GenerateFile",
          "name": "GraphType",
          "package": "Graph500",
          "partial": "Graph Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Graph500/docs/G500-GenerateFile.html#t:GraphType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "G500.GenerateFile",
          "name": "Graph500",
          "package": "Graph500",
          "signature": "Graph500",
          "source": "src/G500-GenerateFile.html#GraphType",
          "type": "function"
        },
        "index": {
          "hierarchy": "G500 GenerateFile",
          "module": "G500.GenerateFile",
          "name": "Graph500",
          "package": "Graph500",
          "partial": "Graph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graph500/docs/G500-GenerateFile.html#v:Graph500"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "G500.GenerateFile",
          "name": "Simple",
          "package": "Graph500",
          "signature": "Simple",
          "source": "src/G500-GenerateFile.html#GraphType",
          "type": "function"
        },
        "index": {
          "hierarchy": "G500 GenerateFile",
          "module": "G500.GenerateFile",
          "name": "Simple",
          "package": "Graph500",
          "partial": "Simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graph500/docs/G500-GenerateFile.html#v:Simple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerage file with graph\n\u003c/p\u003e",
          "module": "G500.GenerateFile",
          "name": "generateWriteFile",
          "package": "Graph500",
          "signature": "String-\u003e GraphType-\u003e Int-\u003e Int-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Generage file with graph",
          "hierarchy": "G500 GenerateFile",
          "module": "G500.GenerateFile",
          "name": "generateWriteFile",
          "normalized": "String-\u003eGraphType-\u003eInt-\u003eInt-\u003eIO()",
          "package": "Graph500",
          "partial": "Write File",
          "signature": "String-\u003eGraphType-\u003eInt-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graph500/docs/G500-GenerateFile.html#v:generateWriteFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinition for the type of indices.\n\u003c/p\u003e\u003cp\u003eI think index type can change over time, so I made that\n little file with type definition and class that allows one's code\n to work with different index types.\n\u003c/p\u003e\u003cp\u003eOn the second thought it looks like overengineering. Let it be.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "G500.Index",
          "name": "Index",
          "package": "Graph500",
          "source": "src/G500-Index.html",
          "type": "module"
        },
        "index": {
          "description": "Definition for the type of indices think index type can change over time so made that little file with type definition and class that allows one code to work with different index types On the second thought it looks like overengineering Let it be",
          "hierarchy": "G500 Index",
          "module": "G500.Index",
          "name": "Index",
          "package": "Graph500",
          "partial": "Index",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Graph500/docs/G500-Index.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBig enough for Graph500 benchmark purposes.\n\u003c/p\u003e",
          "module": "G500.Index",
          "name": "Index",
          "package": "Graph500",
          "source": "src/G500-Index.html#Index",
          "type": "type"
        },
        "index": {
          "description": "Big enough for Graph500 benchmark purposes",
          "hierarchy": "G500 Index",
          "module": "G500.Index",
          "name": "Index",
          "package": "Graph500",
          "partial": "Index",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Graph500/docs/G500-Index.html#t:Index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "G500.Index",
          "name": "RandomIndex",
          "package": "Graph500",
          "source": "src/G500-Index.html#RandomIndex",
          "type": "class"
        },
        "index": {
          "hierarchy": "G500 Index",
          "module": "G500.Index",
          "name": "RandomIndex",
          "package": "Graph500",
          "partial": "Random Index",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Graph500/docs/G500-Index.html#t:RandomIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate random index.\n Accepts max value and generator.\n Returns random index and updated generator.\n Max value should be power of 2 (valid for Graph500 generator).\n\u003c/p\u003e",
          "module": "G500.Index",
          "name": "randomIndex",
          "package": "Graph500",
          "signature": "index -\u003e g -\u003e (index, g)",
          "source": "src/G500-Index.html#randomIndex",
          "type": "method"
        },
        "index": {
          "description": "Generate random index Accepts max value and generator Returns random index and updated generator Max value should be power of valid for Graph500 generator",
          "hierarchy": "G500 Index",
          "module": "G500.Index",
          "name": "randomIndex",
          "normalized": "a-\u003eb-\u003e(a,b)",
          "package": "Graph500",
          "partial": "Index",
          "signature": "index-\u003eg-\u003e(index,g)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Graph500/docs/G500-Index.html#v:randomIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module that reads files generated by Gen (graph500gen) program\n one directory level above.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "G500.Read",
          "name": "Read",
          "package": "Graph500",
          "source": "src/G500-Read.html",
          "type": "module"
        },
        "index": {
          "description": "module that reads files generated by Gen graph500gen program one directory level above",
          "hierarchy": "G500 Read",
          "module": "G500.Read",
          "name": "Read",
          "package": "Graph500",
          "partial": "Read",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Graph500/docs/G500-Read.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA synonym for IO action that performs a read.\n\u003c/p\u003e",
          "module": "G500.Read",
          "name": "Graph500Reader",
          "package": "Graph500",
          "source": "src/G500-Read.html#Graph500Reader",
          "type": "type"
        },
        "index": {
          "description": "synonym for IO action that performs read",
          "hierarchy": "G500 Read",
          "module": "G500.Read",
          "name": "Graph500Reader",
          "package": "Graph500",
          "partial": "Graph Reader",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Graph500/docs/G500-Read.html#t:Graph500Reader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a graph reader structure.\n The \u003ccode\u003ehandle\u003c/code\u003e should be opened to read as a binary file.\n Also the handle gets captured in result of the function and will\n be closed at the end of operation.\n\u003c/p\u003e",
          "module": "G500.Read",
          "name": "mkGraph500Reader",
          "package": "Graph500",
          "signature": "Handle-\u003e Int-\u003e IO Graph500Reader",
          "type": "function"
        },
        "index": {
          "description": "Create graph reader structure The handle should be opened to read as binary file Also the handle gets captured in result of the function and will be closed at the end of operation",
          "hierarchy": "G500 Read",
          "module": "G500.Read",
          "name": "mkGraph500Reader",
          "normalized": "Handle-\u003eInt-\u003eIO Graph Reader",
          "package": "Graph500",
          "partial": "Graph Reader",
          "signature": "Handle-\u003eInt-\u003eIO Graph Reader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Graph500/docs/G500-Read.html#v:mkGraph500Reader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTop-level module for everything Graph500 related.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "G500",
          "name": "G500",
          "package": "Graph500",
          "source": "src/G500.html",
          "type": "module"
        },
        "index": {
          "description": "Top-level module for everything Graph500 related",
          "hierarchy": "G500",
          "module": "G500",
          "name": "G500",
          "package": "Graph500",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Graph500/docs/G500.html#"
      }
    }
  ]
]