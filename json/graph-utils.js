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
        "word": "graph-utils"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.EasyGrapher",
          "name": "EasyGrapher",
          "package": "graph-utils",
          "source": "src/Data-Graph-EasyGrapher.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Graph EasyGrapher",
          "module": "Data.Graph.EasyGrapher",
          "name": "EasyGrapher",
          "package": "graph-utils",
          "partial": "Easy Grapher",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/graph-utils/docs/Data-Graph-EasyGrapher.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e'EGGraph a' is a list of 'EGTerm a'.\n\u003c/p\u003e",
          "module": "Data.Graph.EasyGrapher",
          "name": "EGGraph",
          "package": "graph-utils",
          "source": "src/Data-Graph-EasyGrapher-EasyGrapher.html#EGGraph",
          "type": "type"
        },
        "index": {
          "description": "EGGraph is list of EGTerm",
          "hierarchy": "Data Graph EasyGrapher",
          "module": "Data.Graph.EasyGrapher",
          "name": "EGGraph",
          "package": "graph-utils",
          "partial": "EGGraph",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/graph-utils/docs/Data-Graph-EasyGrapher.html#t:EGGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eEGTerm\u003c/a\u003e\u003c/code\u003e is a vertex & an edge.\n\u003c/p\u003e",
          "module": "Data.Graph.EasyGrapher",
          "name": "EGTerm",
          "package": "graph-utils",
          "source": "src/Data-Graph-EasyGrapher-EasyGrapher.html#EGTerm",
          "type": "data"
        },
        "index": {
          "description": "EGTerm is vertex an edge",
          "hierarchy": "Data Graph EasyGrapher",
          "module": "Data.Graph.EasyGrapher",
          "name": "EGTerm",
          "package": "graph-utils",
          "partial": "EGTerm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/graph-utils/docs/Data-Graph-EasyGrapher.html#t:EGTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.EasyGrapher",
          "name": ":=\u003e",
          "package": "graph-utils",
          "signature": "a",
          "source": "src/Data-Graph-EasyGrapher-EasyGrapher.html#EGTerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph EasyGrapher",
          "module": "Data.Graph.EasyGrapher",
          "name": ":=\u003e",
          "package": "graph-utils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-utils/docs/Data-Graph-EasyGrapher.html#v::-61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.EasyGrapher",
          "name": "EGVertex",
          "package": "graph-utils",
          "signature": "EGVertex a",
          "source": "src/Data-Graph-EasyGrapher-EasyGrapher.html#EGTerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph EasyGrapher",
          "module": "Data.Graph.EasyGrapher",
          "name": "EGVertex",
          "package": "graph-utils",
          "partial": "EGVertex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-utils/docs/Data-Graph-EasyGrapher.html#v:EGVertex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebuildGraph\u003c/a\u003e\u003c/code\u003e converts EGGraph \u003ccode\u003egr\u003c/code\u003e into the '(gr a ())'\n\u003c/p\u003e",
          "module": "Data.Graph.EasyGrapher",
          "name": "buildGraph",
          "package": "graph-utils",
          "signature": "EGGraph a -\u003e gr a ()",
          "source": "src/Data-Graph-EasyGrapher-EasyGrapher.html#buildGraph",
          "type": "function"
        },
        "index": {
          "description": "buildGraph converts EGGraph gr into the gr",
          "hierarchy": "Data Graph EasyGrapher",
          "module": "Data.Graph.EasyGrapher",
          "name": "buildGraph",
          "normalized": "EGGraph a-\u003eb a()",
          "package": "graph-utils",
          "partial": "Graph",
          "signature": "EGGraph a-\u003egr a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-utils/docs/Data-Graph-EasyGrapher.html#v:buildGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efromGr\u003c/a\u003e\u003c/code\u003e converts 'gr :: (gr a ())' into 'EGGraph a'\n\u003c/p\u003e",
          "module": "Data.Graph.EasyGrapher",
          "name": "fromGr",
          "package": "graph-utils",
          "signature": "gr a () -\u003e EGGraph a",
          "source": "src/Data-Graph-EasyGrapher-EasyGrapher.html#fromGr",
          "type": "function"
        },
        "index": {
          "description": "fromGr converts gr gr into EGGraph",
          "hierarchy": "Data Graph EasyGrapher",
          "module": "Data.Graph.EasyGrapher",
          "name": "fromGr",
          "normalized": "a b()-\u003eEGGraph b",
          "package": "graph-utils",
          "partial": "Gr",
          "signature": "gr a()-\u003eEGGraph a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-utils/docs/Data-Graph-EasyGrapher.html#v:fromGr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuasi quoter for \u003ccode\u003e\u003ca\u003eEGGraph\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Graph.EasyGrapher",
          "name": "gr",
          "package": "graph-utils",
          "signature": "QuasiQuoter",
          "source": "src/Data-Graph-EasyGrapher-Quote.html#gr",
          "type": "function"
        },
        "index": {
          "description": "Quasi quoter for EGGraph",
          "hierarchy": "Data Graph EasyGrapher",
          "module": "Data.Graph.EasyGrapher",
          "name": "gr",
          "package": "graph-utils",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-utils/docs/Data-Graph-EasyGrapher.html#v:gr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.PageRank",
          "name": "PageRank",
          "package": "graph-utils",
          "source": "src/Data-Graph-PageRank.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Graph PageRank",
          "module": "Data.Graph.PageRank",
          "name": "PageRank",
          "package": "graph-utils",
          "partial": "Page Rank",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/graph-utils/docs/Data-Graph-PageRank.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRankDic\u003c/a\u003e\u003c/code\u003e is the Map for holding PageRank data.\n\u003c/p\u003e",
          "module": "Data.Graph.PageRank",
          "name": "RankDic",
          "package": "graph-utils",
          "source": "src/Data-Graph-PageRank.html#RankDic",
          "type": "type"
        },
        "index": {
          "description": "RankDic is the Map for holding PageRank data",
          "hierarchy": "Data Graph PageRank",
          "module": "Data.Graph.PageRank",
          "name": "RankDic",
          "package": "graph-utils",
          "partial": "Rank Dic",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/graph-utils/docs/Data-Graph-PageRank.html#t:RankDic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003epageRanks\u003c/a\u003e\u003c/code\u003e calculate the PageRank for each node in the Graph \u003ccode\u003egr\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Graph.PageRank",
          "name": "pageRanks",
          "package": "graph-utils",
          "signature": "gr a b -\u003e Double -\u003e Double -\u003e RankDic",
          "source": "src/Data-Graph-PageRank.html#pageRanks",
          "type": "function"
        },
        "index": {
          "description": "pageRanks calculate the PageRank for each node in the Graph gr",
          "hierarchy": "Data Graph PageRank",
          "module": "Data.Graph.PageRank",
          "name": "pageRanks",
          "normalized": "a b c-\u003eDouble-\u003eDouble-\u003eRankDic",
          "package": "graph-utils",
          "partial": "Ranks",
          "signature": "gr a b-\u003eDouble-\u003eDouble-\u003eRankDic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-utils/docs/Data-Graph-PageRank.html#v:pageRanks"
      }
    }
  ]
]