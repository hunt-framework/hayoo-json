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
        "word": "picosat"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe solve function takes a nested list of integers representing variables in clauses and returns the\n   solution. Usage:\n\u003c/p\u003e\u003cpre\u003e\nimport Picosat\n\nmain :: IO [Int]\nmain = do\n  solve [[1, -2, 3], [2,4,5], [4,6]]\n  -- Solution [1,-2,3,4,5,6]\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Picosat",
          "name": "Picosat",
          "package": "picosat",
          "source": "src/Picosat.html",
          "type": "module"
        },
        "index": {
          "description": "The solve function takes nested list of integers representing variables in clauses and returns the solution Usage import Picosat main IO Int main do solve Solution",
          "hierarchy": "Picosat",
          "module": "Picosat",
          "name": "Picosat",
          "package": "picosat",
          "partial": "Picosat",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/picosat/docs/Picosat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Picosat",
          "name": "Solution",
          "package": "picosat",
          "source": "src/Picosat.html#Solution",
          "type": "data"
        },
        "index": {
          "hierarchy": "Picosat",
          "module": "Picosat",
          "name": "Solution",
          "package": "picosat",
          "partial": "Solution",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/picosat/docs/Picosat.html#t:Solution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Picosat",
          "name": "Solution",
          "package": "picosat",
          "signature": "Solution [Int]",
          "source": "src/Picosat.html#Solution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Picosat",
          "module": "Picosat",
          "name": "Solution",
          "normalized": "Solution[Int]",
          "package": "picosat",
          "partial": "Solution",
          "signature": "Solution[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/picosat/docs/Picosat.html#v:Solution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Picosat",
          "name": "Unknown",
          "package": "picosat",
          "signature": "Unknown",
          "source": "src/Picosat.html#Solution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Picosat",
          "module": "Picosat",
          "name": "Unknown",
          "package": "picosat",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/picosat/docs/Picosat.html#v:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Picosat",
          "name": "Unsatisfiable",
          "package": "picosat",
          "signature": "Unsatisfiable",
          "source": "src/Picosat.html#Solution",
          "type": "function"
        },
        "index": {
          "hierarchy": "Picosat",
          "module": "Picosat",
          "name": "Unsatisfiable",
          "package": "picosat",
          "partial": "Unsatisfiable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/picosat/docs/Picosat.html#v:Unsatisfiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Picosat",
          "name": "solve",
          "package": "picosat",
          "signature": "[[a]] -\u003e IO Solution",
          "source": "src/Picosat.html#solve",
          "type": "function"
        },
        "index": {
          "hierarchy": "Picosat",
          "module": "Picosat",
          "name": "solve",
          "normalized": "[[a]]-\u003eIO Solution",
          "package": "picosat",
          "signature": "[[a]]-\u003eIO Solution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/picosat/docs/Picosat.html#v:solve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Picosat",
          "name": "solveST",
          "package": "picosat",
          "signature": "[[a]] -\u003e ST t Solution",
          "source": "src/Picosat.html#solveST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Picosat",
          "module": "Picosat",
          "name": "solveST",
          "normalized": "[[a]]-\u003eST b Solution",
          "package": "picosat",
          "partial": "ST",
          "signature": "[[a]]-\u003eST t Solution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/picosat/docs/Picosat.html#v:solveST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Picosat",
          "name": "unsafeSolve",
          "package": "picosat",
          "signature": "[[a]] -\u003e Solution",
          "source": "src/Picosat.html#unsafeSolve",
          "type": "function"
        },
        "index": {
          "hierarchy": "Picosat",
          "module": "Picosat",
          "name": "unsafeSolve",
          "normalized": "[[a]]-\u003eSolution",
          "package": "picosat",
          "partial": "Solve",
          "signature": "[[a]]-\u003eSolution",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/picosat/docs/Picosat.html#v:unsafeSolve"
      }
    }
  ]
]