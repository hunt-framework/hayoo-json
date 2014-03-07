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
        "word": "hgal"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eimplementation of the canonic labeling of graphs + automorphism group.\n\u003c/p\u003e\u003cp\u003eThe implementation is based on:\n  Brendan D. McKay, PRACTICAL GRAPH ISOMORPHISM,\n  in Congressus Numerantium,\n  Vol. 30 (1981), pp. 45-87.\n\u003c/p\u003e\u003cp\u003eNOTE: Usage of implicit automorphisms, as described on page 62, is not implemented here.\n\u003c/p\u003e\u003cp\u003eTODO:\n  - as GHC 6.6, use Sequence instead of appends at end.\n  - skip first automorphism found; it is identity.\n  - try not relabeling the graphs\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Automorphism",
          "name": "Automorphism",
          "package": "hgal",
          "source": "src/Data-Graph-Automorphism.html",
          "type": "module"
        },
        "index": {
          "description": "implementation of the canonic labeling of graphs automorphism group The implementation is based on Brendan McKay PRACTICAL GRAPH ISOMORPHISM in Congressus Numerantium Vol pp NOTE Usage of implicit automorphisms as described on page is not implemented here TODO as GHC use Sequence instead of appends at end skip first automorphism found it is identity try not relabeling the graphs",
          "hierarchy": "Data Graph Automorphism",
          "module": "Data.Graph.Automorphism",
          "name": "Automorphism",
          "package": "hgal",
          "partial": "Automorphism",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Automorphism.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns generators of the automorphism group\n\u003c/p\u003e",
          "module": "Data.Graph.Automorphism",
          "name": "autGenerators",
          "package": "hgal",
          "signature": "Partition -\u003e Graph -\u003e [Permutation]",
          "source": "src/Data-Graph-Automorphism.html#autGenerators",
          "type": "function"
        },
        "index": {
          "description": "Returns generators of the automorphism group",
          "hierarchy": "Data Graph Automorphism",
          "module": "Data.Graph.Automorphism",
          "name": "autGenerators",
          "normalized": "Partition-\u003eGraph-\u003e[Permutation]",
          "package": "hgal",
          "partial": "Generators",
          "signature": "Partition-\u003eGraph-\u003e[Permutation]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Automorphism.html#v:autGenerators"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a graph, return generators of its automorphism group, and its canonic labeling\n\u003c/p\u003e",
          "module": "Data.Graph.Automorphism",
          "name": "automorphisms",
          "package": "hgal",
          "signature": "Partition -\u003e Graph -\u003e ([Permutation], Graph)",
          "source": "src/Data-Graph-Automorphism.html#automorphisms",
          "type": "function"
        },
        "index": {
          "description": "Given graph return generators of its automorphism group and its canonic labeling",
          "hierarchy": "Data Graph Automorphism",
          "module": "Data.Graph.Automorphism",
          "name": "automorphisms",
          "normalized": "Partition-\u003eGraph-\u003e([Permutation],Graph)",
          "package": "hgal",
          "signature": "Partition-\u003eGraph-\u003e([Permutation],Graph)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Automorphism.html#v:automorphisms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the canonic version of a graph.\n\u003c/p\u003e",
          "module": "Data.Graph.Automorphism",
          "name": "canonicGraph",
          "package": "hgal",
          "signature": "Partition -\u003e Graph -\u003e Graph",
          "source": "src/Data-Graph-Automorphism.html#canonicGraph",
          "type": "function"
        },
        "index": {
          "description": "Return the canonic version of graph",
          "hierarchy": "Data Graph Automorphism",
          "module": "Data.Graph.Automorphism",
          "name": "canonicGraph",
          "normalized": "Partition-\u003eGraph-\u003eGraph",
          "package": "hgal",
          "partial": "Graph",
          "signature": "Partition-\u003eGraph-\u003eGraph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Automorphism.html#v:canonicGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a canonic labeling of the graph (slow -- but dead simple implementation).\n This implementation serves documentation and debugging purposes.\n\u003c/p\u003e",
          "module": "Data.Graph.Automorphism",
          "name": "canonicGraph0",
          "package": "hgal",
          "signature": "Partition -\u003e Graph -\u003e Graph",
          "source": "src/Data-Graph-Automorphism.html#canonicGraph0",
          "type": "function"
        },
        "index": {
          "description": "Returns canonic labeling of the graph slow but dead simple implementation This implementation serves documentation and debugging purposes",
          "hierarchy": "Data Graph Automorphism",
          "module": "Data.Graph.Automorphism",
          "name": "canonicGraph0",
          "normalized": "Partition-\u003eGraph-\u003eGraph",
          "package": "hgal",
          "partial": "Graph",
          "signature": "Partition-\u003eGraph-\u003eGraph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Automorphism.html#v:canonicGraph0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Automorphism",
          "name": "debugTree",
          "package": "hgal",
          "signature": "Partition -\u003e Graph -\u003e IO ()",
          "source": "src/Data-Graph-Automorphism.html#debugTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Automorphism",
          "module": "Data.Graph.Automorphism",
          "name": "debugTree",
          "normalized": "Partition-\u003eGraph-\u003eIO()",
          "package": "hgal",
          "partial": "Tree",
          "signature": "Partition-\u003eGraph-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Automorphism.html#v:debugTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTells whether two graphs are isomorphic\n\u003c/p\u003e",
          "module": "Data.Graph.Automorphism",
          "name": "isIsomorphic",
          "package": "hgal",
          "signature": "Graph -\u003e Graph -\u003e Bool",
          "source": "src/Data-Graph-Automorphism.html#isIsomorphic",
          "type": "function"
        },
        "index": {
          "description": "Tells whether two graphs are isomorphic",
          "hierarchy": "Data Graph Automorphism",
          "module": "Data.Graph.Automorphism",
          "name": "isIsomorphic",
          "normalized": "Graph-\u003eGraph-\u003eBool",
          "package": "hgal",
          "partial": "Isomorphic",
          "signature": "Graph-\u003eGraph-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Automorphism.html#v:isIsomorphic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Automorphism",
          "name": "withUnitPartition",
          "package": "hgal",
          "signature": "(Partition -\u003e Array Vertex e -\u003e t) -\u003e Array Vertex e -\u003e t",
          "source": "src/Data-Graph-Automorphism.html#withUnitPartition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Automorphism",
          "module": "Data.Graph.Automorphism",
          "name": "withUnitPartition",
          "normalized": "(Partition-\u003eArray Vertex a-\u003eb)-\u003eArray Vertex a-\u003eb",
          "package": "hgal",
          "partial": "Unit Partition",
          "signature": "(Partition-\u003eArray Vertex e-\u003et)-\u003eArray Vertex e-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Automorphism.html#v:withUnitPartition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious functions to build graphs.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Construction",
          "name": "Construction",
          "package": "hgal",
          "source": "src/Data-Graph-Construction.html",
          "type": "module"
        },
        "index": {
          "description": "Various functions to build graphs",
          "hierarchy": "Data Graph Construction",
          "module": "Data.Graph.Construction",
          "name": "Construction",
          "package": "hgal",
          "partial": "Construction",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Construction.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Construction",
          "name": "arcG",
          "package": "hgal",
          "signature": "Graph",
          "source": "src/Data-Graph-Construction.html#arcG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Construction",
          "module": "Data.Graph.Construction",
          "name": "arcG",
          "package": "hgal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Construction.html#v:arcG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Construction",
          "name": "cliqueG",
          "package": "hgal",
          "signature": "(Vertex, Vertex) -\u003e Graph",
          "source": "src/Data-Graph-Construction.html#cliqueG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Construction",
          "module": "Data.Graph.Construction",
          "name": "cliqueG",
          "normalized": "(Vertex,Vertex)-\u003eGraph",
          "package": "hgal",
          "signature": "(Vertex,Vertex)-\u003eGraph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Construction.html#v:cliqueG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Construction",
          "name": "cycleG",
          "package": "hgal",
          "signature": "Int -\u003e Graph",
          "source": "src/Data-Graph-Construction.html#cycleG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Construction",
          "module": "Data.Graph.Construction",
          "name": "cycleG",
          "normalized": "Int-\u003eGraph",
          "package": "hgal",
          "signature": "Int-\u003eGraph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Construction.html#v:cycleG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Construction",
          "name": "emptyG",
          "package": "hgal",
          "signature": "Int -\u003e Graph",
          "source": "src/Data-Graph-Construction.html#emptyG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Construction",
          "module": "Data.Graph.Construction",
          "name": "emptyG",
          "normalized": "Int-\u003eGraph",
          "package": "hgal",
          "signature": "Int-\u003eGraph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Construction.html#v:emptyG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Construction",
          "name": "hCubeG",
          "package": "hgal",
          "signature": "Int -\u003e Graph",
          "source": "src/Data-Graph-Construction.html#hCubeG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Construction",
          "module": "Data.Graph.Construction",
          "name": "hCubeG",
          "normalized": "Int-\u003eGraph",
          "package": "hgal",
          "partial": "Cube",
          "signature": "Int-\u003eGraph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Construction.html#v:hCubeG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Construction",
          "name": "kG",
          "package": "hgal",
          "signature": "Int -\u003e Int -\u003e Graph",
          "source": "src/Data-Graph-Construction.html#kG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Construction",
          "module": "Data.Graph.Construction",
          "name": "kG",
          "normalized": "Int-\u003eInt-\u003eGraph",
          "package": "hgal",
          "signature": "Int-\u003eInt-\u003eGraph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Construction.html#v:kG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Construction",
          "name": "linearG",
          "package": "hgal",
          "signature": "Int -\u003e Graph",
          "source": "src/Data-Graph-Construction.html#linearG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Construction",
          "module": "Data.Graph.Construction",
          "name": "linearG",
          "normalized": "Int-\u003eGraph",
          "package": "hgal",
          "signature": "Int-\u003eGraph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Construction.html#v:linearG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Construction",
          "name": "prismG",
          "package": "hgal",
          "signature": "Int -\u003e Graph",
          "source": "src/Data-Graph-Construction.html#prismG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Construction",
          "module": "Data.Graph.Construction",
          "name": "prismG",
          "normalized": "Int-\u003eGraph",
          "package": "hgal",
          "signature": "Int-\u003eGraph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Construction.html#v:prismG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Construction",
          "name": "productG",
          "package": "hgal",
          "signature": "Graph -\u003e Graph -\u003e Graph",
          "source": "src/Data-Graph-Construction.html#productG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Construction",
          "module": "Data.Graph.Construction",
          "name": "productG",
          "normalized": "Graph-\u003eGraph-\u003eGraph",
          "package": "hgal",
          "signature": "Graph-\u003eGraph-\u003eGraph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Construction.html#v:productG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Construction",
          "name": "starG",
          "package": "hgal",
          "signature": "(Vertex, Vertex) -\u003e Graph",
          "source": "src/Data-Graph-Construction.html#starG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Construction",
          "module": "Data.Graph.Construction",
          "name": "starG",
          "normalized": "(Vertex,Vertex)-\u003eGraph",
          "package": "hgal",
          "signature": "(Vertex,Vertex)-\u003eGraph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Construction.html#v:starG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Construction",
          "name": "tensorG",
          "package": "hgal",
          "signature": "[Int] -\u003e Graph",
          "source": "src/Data-Graph-Construction.html#tensorG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Construction",
          "module": "Data.Graph.Construction",
          "name": "tensorG",
          "normalized": "[Int]-\u003eGraph",
          "package": "hgal",
          "signature": "[Int]-\u003eGraph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Construction.html#v:tensorG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Construction",
          "name": "undirG",
          "package": "hgal",
          "signature": "Graph -\u003e Graph",
          "source": "src/Data-Graph-Construction.html#undirG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Construction",
          "module": "Data.Graph.Construction",
          "name": "undirG",
          "normalized": "Graph-\u003eGraph",
          "package": "hgal",
          "signature": "Graph-\u003eGraph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Construction.html#v:undirG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Construction",
          "name": "unionG",
          "package": "hgal",
          "signature": "Graph -\u003e Graph -\u003e Graph",
          "source": "src/Data-Graph-Construction.html#unionG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Construction",
          "module": "Data.Graph.Construction",
          "name": "unionG",
          "normalized": "Graph-\u003eGraph-\u003eGraph",
          "package": "hgal",
          "signature": "Graph-\u003eGraph-\u003eGraph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Construction.html#v:unionG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Partition",
          "name": "Partition",
          "package": "hgal",
          "source": "src/Data-Graph-Partition.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Graph Partition",
          "module": "Data.Graph.Partition",
          "name": "Partition",
          "package": "hgal",
          "partial": "Partition",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Partition.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA cell is represented by its list of vertices,\n with the invariant that the list is sorted\n\u003c/p\u003e",
          "module": "Data.Graph.Partition",
          "name": "Cell",
          "package": "hgal",
          "source": "src/Data-Graph-Partition.html#Cell",
          "type": "type"
        },
        "index": {
          "description": "cell is represented by its list of vertices with the invariant that the list is sorted",
          "hierarchy": "Data Graph Partition",
          "module": "Data.Graph.Partition",
          "name": "Cell",
          "package": "hgal",
          "partial": "Cell",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Partition.html#t:Cell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Partition",
          "name": "Indicator",
          "package": "hgal",
          "source": "src/Data-Graph-Partition.html#Indicator",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Graph Partition",
          "module": "Data.Graph.Partition",
          "name": "Indicator",
          "package": "hgal",
          "partial": "Indicator",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Partition.html#t:Indicator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA partition is its list of cells\n\u003c/p\u003e",
          "module": "Data.Graph.Partition",
          "name": "Partition",
          "package": "hgal",
          "source": "src/Data-Graph-Partition.html#Partition",
          "type": "type"
        },
        "index": {
          "description": "partition is its list of cells",
          "hierarchy": "Data Graph Partition",
          "module": "Data.Graph.Partition",
          "name": "Partition",
          "package": "hgal",
          "partial": "Partition",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Partition.html#t:Partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns vertices fixes in the given orbits\n\u003c/p\u003e",
          "module": "Data.Graph.Partition",
          "name": "fixedInOrbits",
          "package": "hgal",
          "signature": "Partition -\u003e [Vertex]",
          "source": "src/Data-Graph-Partition.html#fixedInOrbits",
          "type": "function"
        },
        "index": {
          "description": "Returns vertices fixes in the given orbits",
          "hierarchy": "Data Graph Partition",
          "module": "Data.Graph.Partition",
          "name": "fixedInOrbits",
          "normalized": "Partition-\u003e[Vertex]",
          "package": "hgal",
          "partial": "In Orbits",
          "signature": "Partition-\u003e[Vertex]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Partition.html#v:fixedInOrbits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the partition discrete ?\n\u003c/p\u003e",
          "module": "Data.Graph.Partition",
          "name": "isDiscrete",
          "package": "hgal",
          "signature": "Partition -\u003e Bool",
          "source": "src/Data-Graph-Partition.html#isDiscrete",
          "type": "function"
        },
        "index": {
          "description": "Is the partition discrete",
          "hierarchy": "Data Graph Partition",
          "module": "Data.Graph.Partition",
          "name": "isDiscrete",
          "normalized": "Partition-\u003eBool",
          "package": "hgal",
          "partial": "Discrete",
          "signature": "Partition-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Partition.html#v:isDiscrete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Partition",
          "name": "isSingleton",
          "package": "hgal",
          "signature": "[a] -\u003e Bool",
          "source": "src/Data-Graph-Partition.html#isSingleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Partition",
          "module": "Data.Graph.Partition",
          "name": "isSingleton",
          "normalized": "[a]-\u003eBool",
          "package": "hgal",
          "partial": "Singleton",
          "signature": "[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Partition.html#v:isSingleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn indicator function.\n \u003ccode\u003elambda\u003c/code\u003e must be insensitive to automorphisms relabeling of the graph for the Automorphism module to work.\n\u003c/p\u003e",
          "module": "Data.Graph.Partition",
          "name": "lambda",
          "package": "hgal",
          "signature": "Graph -\u003e Partition -\u003e Indicator",
          "source": "src/Data-Graph-Partition.html#lambda",
          "type": "function"
        },
        "index": {
          "description": "An indicator function lambda must be insensitive to automorphisms relabeling of the graph for the Automorphism module to work",
          "hierarchy": "Data Graph Partition",
          "module": "Data.Graph.Partition",
          "name": "lambda",
          "normalized": "Graph-\u003ePartition-\u003eIndicator",
          "package": "hgal",
          "signature": "Graph-\u003ePartition-\u003eIndicator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Partition.html#v:lambda"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Partition",
          "name": "lambda_",
          "package": "hgal",
          "signature": "Graph -\u003e [Partition] -\u003e [Indicator]",
          "source": "src/Data-Graph-Partition.html#lambda_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Partition",
          "module": "Data.Graph.Partition",
          "name": "lambda_",
          "normalized": "Graph-\u003e[Partition]-\u003e[Indicator]",
          "package": "hgal",
          "signature": "Graph-\u003e[Partition]-\u003e[Indicator]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Partition.html#v:lambda_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Graph.Partition",
          "name": "mcr",
          "package": "hgal",
          "signature": "Partition -\u003e [Vertex]",
          "source": "src/Data-Graph-Partition.html#mcr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Graph Partition",
          "module": "Data.Graph.Partition",
          "name": "mcr",
          "normalized": "Partition-\u003e[Vertex]",
          "package": "hgal",
          "signature": "Partition-\u003e[Vertex]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Partition.html#v:mcr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRefines a Partition wrt to another Partition, given a graph.\n (explained on pages 50-52)\n This is equivalent to partition the graph's DFA in equivalent states.\n \u003ccode\u003erefine gr p q\u003c/code\u003e refines \u003ccode\u003ep\u003c/code\u003e wrt. \u003ccode\u003eq\u003c/code\u003e in \u003ccode\u003egr\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Graph.Partition",
          "name": "refine",
          "package": "hgal",
          "signature": "Graph -\u003e Partition -\u003e Partition -\u003e Partition",
          "source": "src/Data-Graph-Partition.html#refine",
          "type": "function"
        },
        "index": {
          "description": "Refines Partition wrt to another Partition given graph explained on pages This is equivalent to partition the graph DFA in equivalent states refine gr refines wrt in gr",
          "hierarchy": "Data Graph Partition",
          "module": "Data.Graph.Partition",
          "name": "refine",
          "normalized": "Graph-\u003ePartition-\u003ePartition-\u003ePartition",
          "package": "hgal",
          "signature": "Graph-\u003ePartition-\u003ePartition-\u003ePartition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Partition.html#v:refine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe unit partition of a range.\n\u003c/p\u003e",
          "module": "Data.Graph.Partition",
          "name": "unitPartition",
          "package": "hgal",
          "signature": "(Vertex, Vertex) -\u003e Partition",
          "source": "src/Data-Graph-Partition.html#unitPartition",
          "type": "function"
        },
        "index": {
          "description": "The unit partition of range",
          "hierarchy": "Data Graph Partition",
          "module": "Data.Graph.Partition",
          "name": "unitPartition",
          "normalized": "(Vertex,Vertex)-\u003ePartition",
          "package": "hgal",
          "partial": "Partition",
          "signature": "(Vertex,Vertex)-\u003ePartition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Partition.html#v:unitPartition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis modules manages permutations between nodes of a graph. Permutations are represented as arrays.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Graph.Permutation",
          "name": "Permutation",
          "package": "hgal",
          "source": "src/Data-Graph-Permutation.html",
          "type": "module"
        },
        "index": {
          "description": "This modules manages permutations between nodes of graph Permutations are represented as arrays",
          "hierarchy": "Data Graph Permutation",
          "module": "Data.Graph.Permutation",
          "name": "Permutation",
          "package": "hgal",
          "partial": "Permutation",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Permutation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA permutations maps a range of Vertices to itself.\n\u003c/p\u003e",
          "module": "Data.Graph.Permutation",
          "name": "Permutation",
          "package": "hgal",
          "source": "src/Data-Graph-Permutation.html#Permutation",
          "type": "type"
        },
        "index": {
          "description": "permutations maps range of Vertices to itself",
          "hierarchy": "Data Graph Permutation",
          "module": "Data.Graph.Permutation",
          "name": "Permutation",
          "package": "hgal",
          "partial": "Permutation",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Permutation.html#t:Permutation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelabel a graph using a permutation\n\u003c/p\u003e",
          "module": "Data.Graph.Permutation",
          "name": "applyPerm",
          "package": "hgal",
          "signature": "Permutation -\u003e Graph -\u003e Graph",
          "source": "src/Data-Graph-Permutation.html#applyPerm",
          "type": "function"
        },
        "index": {
          "description": "Relabel graph using permutation",
          "hierarchy": "Data Graph Permutation",
          "module": "Data.Graph.Permutation",
          "name": "applyPerm",
          "normalized": "Permutation-\u003eGraph-\u003eGraph",
          "package": "hgal",
          "partial": "Perm",
          "signature": "Permutation-\u003eGraph-\u003eGraph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Permutation.html#v:applyPerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFixed vertices of a given permutation\n\u003c/p\u003e",
          "module": "Data.Graph.Permutation",
          "name": "fixed",
          "package": "hgal",
          "signature": "Permutation -\u003e [Vertex]",
          "source": "src/Data-Graph-Permutation.html#fixed",
          "type": "function"
        },
        "index": {
          "description": "Fixed vertices of given permutation",
          "hierarchy": "Data Graph Permutation",
          "module": "Data.Graph.Permutation",
          "name": "fixed",
          "normalized": "Permutation-\u003e[Vertex]",
          "package": "hgal",
          "signature": "Permutation-\u003e[Vertex]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Permutation.html#v:fixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge the orbits of two permutations\n\u003c/p\u003e",
          "module": "Data.Graph.Permutation",
          "name": "mergePerms",
          "package": "hgal",
          "signature": "Permutation -\u003e Permutation -\u003e Permutation",
          "source": "src/Data-Graph-Permutation.html#mergePerms",
          "type": "function"
        },
        "index": {
          "description": "Merge the orbits of two permutations",
          "hierarchy": "Data Graph Permutation",
          "module": "Data.Graph.Permutation",
          "name": "mergePerms",
          "normalized": "Permutation-\u003ePermutation-\u003ePermutation",
          "package": "hgal",
          "partial": "Perms",
          "signature": "Permutation-\u003ePermutation-\u003ePermutation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Permutation.html#v:mergePerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the orbits of a permutation, as a partition\n\u003c/p\u003e",
          "module": "Data.Graph.Permutation",
          "name": "orbitsFromPerm",
          "package": "hgal",
          "signature": "Permutation -\u003e Partition",
          "source": "src/Data-Graph-Permutation.html#orbitsFromPerm",
          "type": "function"
        },
        "index": {
          "description": "Returns the orbits of permutation as partition",
          "hierarchy": "Data Graph Permutation",
          "module": "Data.Graph.Permutation",
          "name": "orbitsFromPerm",
          "normalized": "Permutation-\u003ePartition",
          "package": "hgal",
          "partial": "From Perm",
          "signature": "Permutation-\u003ePartition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Permutation.html#v:orbitsFromPerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds the permutation taking l1 on l2.\n\u003c/p\u003e",
          "module": "Data.Graph.Permutation",
          "name": "permBetween",
          "package": "hgal",
          "signature": "Bounds -\u003e [Vertex] -\u003e [Vertex] -\u003e Permutation",
          "source": "src/Data-Graph-Permutation.html#permBetween",
          "type": "function"
        },
        "index": {
          "description": "Builds the permutation taking l1 on l2",
          "hierarchy": "Data Graph Permutation",
          "module": "Data.Graph.Permutation",
          "name": "permBetween",
          "normalized": "Bounds-\u003e[Vertex]-\u003e[Vertex]-\u003ePermutation",
          "package": "hgal",
          "partial": "Between",
          "signature": "Bounds-\u003e[Vertex]-\u003e[Vertex]-\u003ePermutation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Permutation.html#v:permBetween"
      }
    }
  ]
]