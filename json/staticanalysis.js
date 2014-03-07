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
        "word": "staticanalysis"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStaticAnalysis\n\u003c/p\u003e\u003cpre\u003eStaticAnalysis/All.hs\u003c/pre\u003e\u003cp\u003eWrapper module for all StaticAnalysis modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "StaticAnalysis.All",
          "name": "All",
          "package": "staticanalysis",
          "source": "src/StaticAnalysis-All.html",
          "type": "module"
        },
        "index": {
          "description": "StaticAnalysis StaticAnalysis All.hs Wrapper module for all StaticAnalysis modules",
          "hierarchy": "StaticAnalysis All",
          "module": "StaticAnalysis.All",
          "name": "All",
          "package": "staticanalysis",
          "partial": "All",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/staticanalysis/docs/StaticAnalysis-All.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStaticAnalysis\n\u003c/p\u003e\u003cpre\u003eStaticAnalysis/Analysis.hs\u003c/pre\u003e\u003cp\u003eInterface for data structure that represents static\n   analysis results.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "StaticAnalysis.Analysis",
          "name": "Analysis",
          "package": "staticanalysis",
          "source": "src/StaticAnalysis-Analysis.html",
          "type": "module"
        },
        "index": {
          "description": "StaticAnalysis StaticAnalysis Analysis.hs Interface for data structure that represents static analysis results",
          "hierarchy": "StaticAnalysis Analysis",
          "module": "StaticAnalysis.Analysis",
          "name": "Analysis",
          "package": "staticanalysis",
          "partial": "Analysis",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/staticanalysis/docs/StaticAnalysis-Analysis.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface for analysis result data structures.\n\u003c/p\u003e",
          "module": "StaticAnalysis.Analysis",
          "name": "Analysis",
          "package": "staticanalysis",
          "source": "src/StaticAnalysis-Analysis.html#Analysis",
          "type": "class"
        },
        "index": {
          "description": "Interface for analysis result data structures",
          "hierarchy": "StaticAnalysis Analysis",
          "module": "StaticAnalysis.Analysis",
          "name": "Analysis",
          "package": "staticanalysis",
          "partial": "Analysis",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/staticanalysis/docs/StaticAnalysis-Analysis.html#t:Analysis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface for analysis result data structures with multiple\n   analysis components.\n\u003c/p\u003e",
          "module": "StaticAnalysis.Analysis",
          "name": "Component",
          "package": "staticanalysis",
          "source": "src/StaticAnalysis-Analysis.html#Component",
          "type": "class"
        },
        "index": {
          "description": "Interface for analysis result data structures with multiple analysis components",
          "hierarchy": "StaticAnalysis Analysis",
          "module": "StaticAnalysis.Analysis",
          "name": "Component",
          "package": "staticanalysis",
          "partial": "Component",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/staticanalysis/docs/StaticAnalysis-Analysis.html#t:Component"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "StaticAnalysis.Analysis",
          "name": "inject",
          "package": "staticanalysis",
          "signature": "b -\u003e a -\u003e a",
          "source": "src/StaticAnalysis-Analysis.html#inject",
          "type": "method"
        },
        "index": {
          "hierarchy": "StaticAnalysis Analysis",
          "module": "StaticAnalysis.Analysis",
          "name": "inject",
          "normalized": "a-\u003eb-\u003eb",
          "package": "staticanalysis",
          "signature": "b-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/staticanalysis/docs/StaticAnalysis-Analysis.html#v:inject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "StaticAnalysis.Analysis",
          "name": "project",
          "package": "staticanalysis",
          "signature": "a -\u003e b",
          "source": "src/StaticAnalysis-Analysis.html#project",
          "type": "method"
        },
        "index": {
          "hierarchy": "StaticAnalysis Analysis",
          "module": "StaticAnalysis.Analysis",
          "name": "project",
          "normalized": "a-\u003eb",
          "package": "staticanalysis",
          "signature": "a-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/staticanalysis/docs/StaticAnalysis-Analysis.html#v:project"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "StaticAnalysis.Analysis",
          "name": "unanalyzed",
          "package": "staticanalysis",
          "signature": "a",
          "source": "src/StaticAnalysis-Analysis.html#unanalyzed",
          "type": "method"
        },
        "index": {
          "hierarchy": "StaticAnalysis Analysis",
          "module": "StaticAnalysis.Analysis",
          "name": "unanalyzed",
          "package": "staticanalysis",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/staticanalysis/docs/StaticAnalysis-Analysis.html#v:unanalyzed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStaticAnalysis\n\u003c/p\u003e\u003cpre\u003eStaticAnalysis/Annotated.hs\u003c/pre\u003e\u003cp\u003eInterface for abstract syntax data structures in which\n   every node can be annotated with a data structure that\n   represents static analysis results.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "StaticAnalysis.Analyze",
          "name": "Analyze",
          "package": "staticanalysis",
          "source": "src/StaticAnalysis-Analyze.html",
          "type": "module"
        },
        "index": {
          "description": "StaticAnalysis StaticAnalysis Annotated.hs Interface for abstract syntax data structures in which every node can be annotated with data structure that represents static analysis results",
          "hierarchy": "StaticAnalysis Analyze",
          "module": "StaticAnalysis.Analyze",
          "name": "Analyze",
          "package": "staticanalysis",
          "partial": "Analyze",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/staticanalysis/docs/StaticAnalysis-Analyze.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface for abstract syntax data structures that can be\n   analyzed.\n\u003c/p\u003e",
          "module": "StaticAnalysis.Analyze",
          "name": "Analyze",
          "package": "staticanalysis",
          "source": "src/StaticAnalysis-Analyze.html#Analyze",
          "type": "class"
        },
        "index": {
          "description": "Interface for abstract syntax data structures that can be analyzed",
          "hierarchy": "StaticAnalysis Analyze",
          "module": "StaticAnalysis.Analyze",
          "name": "Analyze",
          "package": "staticanalysis",
          "partial": "Analyze",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/staticanalysis/docs/StaticAnalysis-Analyze.html#t:Analyze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "StaticAnalysis.Analyze",
          "name": "analyze",
          "package": "staticanalysis",
          "signature": "d a -\u003e d a",
          "source": "src/StaticAnalysis-Analyze.html#analyze",
          "type": "method"
        },
        "index": {
          "hierarchy": "StaticAnalysis Analyze",
          "module": "StaticAnalysis.Analyze",
          "name": "analyze",
          "normalized": "a b-\u003ea b",
          "package": "staticanalysis",
          "signature": "d a-\u003ed a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/staticanalysis/docs/StaticAnalysis-Analyze.html#v:analyze"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStaticAnalysis\n\u003c/p\u003e\u003cpre\u003eStaticAnalysis/Annotate.hs\u003c/pre\u003e\u003cp\u003eInterface for abstract syntax data structures in which\n   every node can be annotated with a data structure that\n   represents static analysis results.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "StaticAnalysis.Annotate",
          "name": "Annotate",
          "package": "staticanalysis",
          "source": "src/StaticAnalysis-Annotate.html",
          "type": "module"
        },
        "index": {
          "description": "StaticAnalysis StaticAnalysis Annotate.hs Interface for abstract syntax data structures in which every node can be annotated with data structure that represents static analysis results",
          "hierarchy": "StaticAnalysis Annotate",
          "module": "StaticAnalysis.Annotate",
          "name": "Annotate",
          "package": "staticanalysis",
          "partial": "Annotate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/staticanalysis/docs/StaticAnalysis-Annotate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterface for abstract syntax data structures that can be\n   annotated.\n\u003c/p\u003e",
          "module": "StaticAnalysis.Annotate",
          "name": "Annotate",
          "package": "staticanalysis",
          "source": "src/StaticAnalysis-Annotate.html#Annotate",
          "type": "class"
        },
        "index": {
          "description": "Interface for abstract syntax data structures that can be annotated",
          "hierarchy": "StaticAnalysis Annotate",
          "module": "StaticAnalysis.Annotate",
          "name": "Annotate",
          "package": "staticanalysis",
          "partial": "Annotate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/staticanalysis/docs/StaticAnalysis-Annotate.html#t:Annotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "StaticAnalysis.Annotate",
          "name": "annotate",
          "package": "staticanalysis",
          "signature": "a -\u003e d a -\u003e d a",
          "source": "src/StaticAnalysis-Annotate.html#annotate",
          "type": "method"
        },
        "index": {
          "hierarchy": "StaticAnalysis Annotate",
          "module": "StaticAnalysis.Annotate",
          "name": "annotate",
          "normalized": "a-\u003eb a-\u003eb a",
          "package": "staticanalysis",
          "signature": "a-\u003ed a-\u003ed a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/staticanalysis/docs/StaticAnalysis-Annotate.html#v:annotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "StaticAnalysis.Annotate",
          "name": "annotation",
          "package": "staticanalysis",
          "signature": "d a -\u003e a",
          "source": "src/StaticAnalysis-Annotate.html#annotation",
          "type": "method"
        },
        "index": {
          "hierarchy": "StaticAnalysis Annotate",
          "module": "StaticAnalysis.Annotate",
          "name": "annotation",
          "normalized": "a b-\u003eb",
          "package": "staticanalysis",
          "signature": "d a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/staticanalysis/docs/StaticAnalysis-Annotate.html#v:annotation"
      }
    }
  ]
]