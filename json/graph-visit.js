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
        "word": "graph-visit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a graph visiting abstraction\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.GraphVisit",
          "name": "GraphVisit",
          "package": "graph-visit",
          "source": "src/Data-Graph-GraphVisit.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides graph visiting abstraction",
          "hierarchy": "Data Graph GraphVisit",
          "module": "Data.Graph.GraphVisit",
          "name": "GraphVisit",
          "package": "graph-visit",
          "partial": "Graph Visit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/graph-visit/docs/Data-Graph-GraphVisit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract graph visit, running graphVisitM\n\u003c/p\u003e",
          "module": "Data.Graph.GraphVisit",
          "name": "graphVisit",
          "package": "graph-visit",
          "signature": "(thr -\u003e graph -\u003e node -\u003e (thr, Set node))-\u003e Set node-\u003e graph-\u003e thr-\u003e (thr, Set node)",
          "type": "function"
        },
        "index": {
          "description": "Abstract graph visit running graphVisitM",
          "hierarchy": "Data Graph GraphVisit",
          "module": "Data.Graph.GraphVisit",
          "name": "graphVisit",
          "normalized": "(a-\u003eb-\u003ec-\u003e(a,Set c))-\u003eSet c-\u003eb-\u003ea-\u003e(a,Set c)",
          "package": "graph-visit",
          "partial": "Visit",
          "signature": "(thr-\u003egraph-\u003enode-\u003e(thr,Set node))-\u003eSet node-\u003egraph-\u003ethr-\u003e(thr,Set node)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-visit/docs/Data-Graph-GraphVisit.html#v:graphVisit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract monadic graph visit, over arbitrary structures, using state holding visited nodes (also acting als start) and an accumulator \u003ccode\u003ethr\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.GraphVisit",
          "name": "graphVisitM",
          "package": "graph-visit",
          "signature": "(thr -\u003e graph -\u003e node -\u003e m (thr, Set node))-\u003e Set node-\u003e graph-\u003e thr-\u003e m (thr, Set node)",
          "type": "function"
        },
        "index": {
          "description": "Abstract monadic graph visit over arbitrary structures using state holding visited nodes also acting als start and an accumulator thr",
          "hierarchy": "Data Graph GraphVisit",
          "module": "Data.Graph.GraphVisit",
          "name": "graphVisitM",
          "normalized": "(a-\u003eb-\u003ec-\u003ed(a,Set c))-\u003eSet c-\u003eb-\u003ea-\u003ed(a,Set c)",
          "package": "graph-visit",
          "partial": "Visit",
          "signature": "(thr-\u003egraph-\u003enode-\u003em(thr,Set node))-\u003eSet node-\u003egraph-\u003ethr-\u003em(thr,Set node)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/graph-visit/docs/Data-Graph-GraphVisit.html#v:graphVisitM"
      }
    }
  ]
]