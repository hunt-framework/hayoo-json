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
        "word": "astar"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.AStar",
          "name": "AStar",
          "package": "astar",
          "source": "src/Data-Graph-AStar.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Graph AStar",
          "module": "Data.Graph.AStar",
          "name": "AStar",
          "package": "astar",
          "partial": "AStar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/astar/docs/Data-Graph-AStar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function computes an optimal (minimal distance) path through a graph in a best-first fashion,\n starting from a given starting point.\n\u003c/p\u003e",
          "module": "Data.Graph.AStar",
          "name": "aStar",
          "package": "astar",
          "signature": "(a -\u003e Set a)-\u003e (a -\u003e a -\u003e c)-\u003e (a -\u003e c)-\u003e (a -\u003e Bool)-\u003e a-\u003e Maybe [a]",
          "type": "function"
        },
        "index": {
          "description": "This function computes an optimal minimal distance path through graph in best-first fashion starting from given starting point",
          "hierarchy": "Data Graph AStar",
          "module": "Data.Graph.AStar",
          "name": "aStar",
          "normalized": "(a-\u003eSet a)-\u003e(a-\u003ea-\u003eb)-\u003e(a-\u003eb)-\u003e(a-\u003eBool)-\u003ea-\u003eMaybe[a]",
          "package": "astar",
          "partial": "Star",
          "signature": "(a-\u003eSet a)-\u003e(a-\u003ea-\u003ec)-\u003e(a-\u003ec)-\u003e(a-\u003eBool)-\u003ea-\u003eMaybe[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/astar/docs/Data-Graph-AStar.html#v:aStar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function computes an optimal (minimal distance) path through a graph in a best-first fashion,\n starting from a given starting point.\n\u003c/p\u003e",
          "module": "Data.Graph.AStar",
          "name": "aStarM",
          "package": "astar",
          "signature": "(a -\u003e m (Set a))-\u003e (a -\u003e a -\u003e m c)-\u003e (a -\u003e m c)-\u003e (a -\u003e m Bool)-\u003e m a-\u003e m (Maybe [a])",
          "type": "function"
        },
        "index": {
          "description": "This function computes an optimal minimal distance path through graph in best-first fashion starting from given starting point",
          "hierarchy": "Data Graph AStar",
          "module": "Data.Graph.AStar",
          "name": "aStarM",
          "normalized": "(a-\u003eb(Set a))-\u003e(a-\u003ea-\u003eb c)-\u003e(a-\u003eb c)-\u003e(a-\u003eb Bool)-\u003eb a-\u003eb(Maybe[a])",
          "package": "astar",
          "partial": "Star",
          "signature": "(a-\u003em(Set a))-\u003e(a-\u003ea-\u003em c)-\u003e(a-\u003em c)-\u003e(a-\u003em Bool)-\u003em a-\u003em(Maybe[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/astar/docs/Data-Graph-AStar.html#v:aStarM"
      }
    }
  ]
]