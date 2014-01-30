[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Automorphism.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eimplementation of the canonic labeling of graphs + automorphism group.\n\u003c/p\u003e\u003cp\u003eThe implementation is based on:\n  Brendan D. McKay, PRACTICAL GRAPH ISOMORPHISM,\n  in Congressus Numerantium,\n  Vol. 30 (1981), pp. 45-87.\n\u003c/p\u003e\u003cp\u003eNOTE: Usage of implicit automorphisms, as described on page 62, is not implemented here.\n\u003c/p\u003e\u003cp\u003eTODO:\n  - as GHC 6.6, use Sequence instead of appends at end.\n  - skip first automorphism found; it is identity.\n  - try not relabeling the graphs\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Graph.Automorphism",
        "fct-package": "hgal",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Automorphism.html",
        "fct-type": "module",
        "title": "Automorphism"
      },
      "index": {
        "description": "implementation of the canonic labeling of graphs automorphism group The implementation is based on Brendan McKay PRACTICAL GRAPH ISOMORPHISM in Congressus Numerantium Vol pp NOTE Usage of implicit automorphisms as described on page is not implemented here TODO as GHC use Sequence instead of appends at end skip first automorphism found it is identity try not relabeling the graphs",
        "hierarchy": "Data Graph Automorphism",
        "module": "Data.Graph.Automorphism",
        "name": "Automorphism",
        "normalized": "",
        "package": "hgal",
        "partial": "Automorphism",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Automorphism.html#v:autGenerators",
      "description": {
        "fct-descr": "\u003cp\u003eReturns generators of the automorphism group\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Automorphism",
        "fct-package": "hgal",
        "fct-signature": "Partition -\u003e Graph -\u003e [Permutation]",
        "fct-source": "src/Data-Graph-Automorphism.html#autGenerators",
        "fct-type": "function",
        "title": "autGenerators"
      },
      "index": {
        "description": "Returns generators of the automorphism group",
        "hierarchy": "Data Graph Automorphism",
        "module": "Data.Graph.Automorphism",
        "name": "autGenerators",
        "normalized": "Partition-\u003eGraph-\u003e[Permutation]",
        "package": "hgal",
        "partial": "Generators",
        "signature": "Partition-\u003eGraph-\u003e[Permutation]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Automorphism.html#v:automorphisms",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a graph, return generators of its automorphism group, and its canonic labeling\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Automorphism",
        "fct-package": "hgal",
        "fct-signature": "Partition -\u003e Graph -\u003e ([Permutation], Graph)",
        "fct-source": "src/Data-Graph-Automorphism.html#automorphisms",
        "fct-type": "function",
        "title": "automorphisms"
      },
      "index": {
        "description": "Given graph return generators of its automorphism group and its canonic labeling",
        "hierarchy": "Data Graph Automorphism",
        "module": "Data.Graph.Automorphism",
        "name": "automorphisms",
        "normalized": "Partition-\u003eGraph-\u003e([Permutation],Graph)",
        "package": "hgal",
        "partial": "",
        "signature": "Partition-\u003eGraph-\u003e([Permutation],Graph)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Automorphism.html#v:canonicGraph",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the canonic version of a graph.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Automorphism",
        "fct-package": "hgal",
        "fct-signature": "Partition -\u003e Graph -\u003e Graph",
        "fct-source": "src/Data-Graph-Automorphism.html#canonicGraph",
        "fct-type": "function",
        "title": "canonicGraph"
      },
      "index": {
        "description": "Return the canonic version of graph",
        "hierarchy": "Data Graph Automorphism",
        "module": "Data.Graph.Automorphism",
        "name": "canonicGraph",
        "normalized": "Partition-\u003eGraph-\u003eGraph",
        "package": "hgal",
        "partial": "Graph",
        "signature": "Partition-\u003eGraph-\u003eGraph"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Automorphism.html#v:canonicGraph0",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a canonic labeling of the graph (slow -- but dead simple implementation).\n This implementation serves documentation and debugging purposes.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Automorphism",
        "fct-package": "hgal",
        "fct-signature": "Partition -\u003e Graph -\u003e Graph",
        "fct-source": "src/Data-Graph-Automorphism.html#canonicGraph0",
        "fct-type": "function",
        "title": "canonicGraph0"
      },
      "index": {
        "description": "Returns canonic labeling of the graph slow but dead simple implementation This implementation serves documentation and debugging purposes",
        "hierarchy": "Data Graph Automorphism",
        "module": "Data.Graph.Automorphism",
        "name": "canonicGraph0",
        "normalized": "Partition-\u003eGraph-\u003eGraph",
        "package": "hgal",
        "partial": "Graph",
        "signature": "Partition-\u003eGraph-\u003eGraph"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Automorphism.html#v:debugTree",
      "description": {
        "fct-module": "Data.Graph.Automorphism",
        "fct-package": "hgal",
        "fct-signature": "Partition -\u003e Graph -\u003e IO ()",
        "fct-source": "src/Data-Graph-Automorphism.html#debugTree",
        "fct-type": "function",
        "title": "debugTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Automorphism",
        "module": "Data.Graph.Automorphism",
        "name": "debugTree",
        "normalized": "Partition-\u003eGraph-\u003eIO()",
        "package": "hgal",
        "partial": "Tree",
        "signature": "Partition-\u003eGraph-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Automorphism.html#v:isIsomorphic",
      "description": {
        "fct-descr": "\u003cp\u003eTells whether two graphs are isomorphic\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Automorphism",
        "fct-package": "hgal",
        "fct-signature": "Graph -\u003e Graph -\u003e Bool",
        "fct-source": "src/Data-Graph-Automorphism.html#isIsomorphic",
        "fct-type": "function",
        "title": "isIsomorphic"
      },
      "index": {
        "description": "Tells whether two graphs are isomorphic",
        "hierarchy": "Data Graph Automorphism",
        "module": "Data.Graph.Automorphism",
        "name": "isIsomorphic",
        "normalized": "Graph-\u003eGraph-\u003eBool",
        "package": "hgal",
        "partial": "Isomorphic",
        "signature": "Graph-\u003eGraph-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Automorphism.html#v:withUnitPartition",
      "description": {
        "fct-module": "Data.Graph.Automorphism",
        "fct-package": "hgal",
        "fct-signature": "(Partition -\u003e Array Vertex e -\u003e t) -\u003e Array Vertex e -\u003e t",
        "fct-source": "src/Data-Graph-Automorphism.html#withUnitPartition",
        "fct-type": "function",
        "title": "withUnitPartition"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Automorphism",
        "module": "Data.Graph.Automorphism",
        "name": "withUnitPartition",
        "normalized": "(Partition-\u003eArray Vertex a-\u003eb)-\u003eArray Vertex a-\u003eb",
        "package": "hgal",
        "partial": "Unit Partition",
        "signature": "(Partition-\u003eArray Vertex e-\u003et)-\u003eArray Vertex e-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Construction.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious functions to build graphs.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Graph.Construction",
        "fct-package": "hgal",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Construction.html",
        "fct-type": "module",
        "title": "Construction"
      },
      "index": {
        "description": "Various functions to build graphs",
        "hierarchy": "Data Graph Construction",
        "module": "Data.Graph.Construction",
        "name": "Construction",
        "normalized": "",
        "package": "hgal",
        "partial": "Construction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Construction.html#v:arcG",
      "description": {
        "fct-module": "Data.Graph.Construction",
        "fct-package": "hgal",
        "fct-signature": "Graph",
        "fct-source": "src/Data-Graph-Construction.html#arcG",
        "fct-type": "function",
        "title": "arcG"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Construction",
        "module": "Data.Graph.Construction",
        "name": "arcG",
        "normalized": "",
        "package": "hgal",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Construction.html#v:cliqueG",
      "description": {
        "fct-module": "Data.Graph.Construction",
        "fct-package": "hgal",
        "fct-signature": "(Vertex, Vertex) -\u003e Graph",
        "fct-source": "src/Data-Graph-Construction.html#cliqueG",
        "fct-type": "function",
        "title": "cliqueG"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Construction",
        "module": "Data.Graph.Construction",
        "name": "cliqueG",
        "normalized": "(Vertex,Vertex)-\u003eGraph",
        "package": "hgal",
        "partial": "",
        "signature": "(Vertex,Vertex)-\u003eGraph"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Construction.html#v:cycleG",
      "description": {
        "fct-module": "Data.Graph.Construction",
        "fct-package": "hgal",
        "fct-signature": "Int -\u003e Graph",
        "fct-source": "src/Data-Graph-Construction.html#cycleG",
        "fct-type": "function",
        "title": "cycleG"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Construction",
        "module": "Data.Graph.Construction",
        "name": "cycleG",
        "normalized": "Int-\u003eGraph",
        "package": "hgal",
        "partial": "",
        "signature": "Int-\u003eGraph"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Construction.html#v:emptyG",
      "description": {
        "fct-module": "Data.Graph.Construction",
        "fct-package": "hgal",
        "fct-signature": "Int -\u003e Graph",
        "fct-source": "src/Data-Graph-Construction.html#emptyG",
        "fct-type": "function",
        "title": "emptyG"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Construction",
        "module": "Data.Graph.Construction",
        "name": "emptyG",
        "normalized": "Int-\u003eGraph",
        "package": "hgal",
        "partial": "",
        "signature": "Int-\u003eGraph"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Construction.html#v:hCubeG",
      "description": {
        "fct-module": "Data.Graph.Construction",
        "fct-package": "hgal",
        "fct-signature": "Int -\u003e Graph",
        "fct-source": "src/Data-Graph-Construction.html#hCubeG",
        "fct-type": "function",
        "title": "hCubeG"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Construction",
        "module": "Data.Graph.Construction",
        "name": "hCubeG",
        "normalized": "Int-\u003eGraph",
        "package": "hgal",
        "partial": "Cube",
        "signature": "Int-\u003eGraph"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Construction.html#v:kG",
      "description": {
        "fct-module": "Data.Graph.Construction",
        "fct-package": "hgal",
        "fct-signature": "Int -\u003e Int -\u003e Graph",
        "fct-source": "src/Data-Graph-Construction.html#kG",
        "fct-type": "function",
        "title": "kG"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Construction",
        "module": "Data.Graph.Construction",
        "name": "kG",
        "normalized": "Int-\u003eInt-\u003eGraph",
        "package": "hgal",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eGraph"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Construction.html#v:linearG",
      "description": {
        "fct-module": "Data.Graph.Construction",
        "fct-package": "hgal",
        "fct-signature": "Int -\u003e Graph",
        "fct-source": "src/Data-Graph-Construction.html#linearG",
        "fct-type": "function",
        "title": "linearG"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Construction",
        "module": "Data.Graph.Construction",
        "name": "linearG",
        "normalized": "Int-\u003eGraph",
        "package": "hgal",
        "partial": "",
        "signature": "Int-\u003eGraph"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Construction.html#v:prismG",
      "description": {
        "fct-module": "Data.Graph.Construction",
        "fct-package": "hgal",
        "fct-signature": "Int -\u003e Graph",
        "fct-source": "src/Data-Graph-Construction.html#prismG",
        "fct-type": "function",
        "title": "prismG"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Construction",
        "module": "Data.Graph.Construction",
        "name": "prismG",
        "normalized": "Int-\u003eGraph",
        "package": "hgal",
        "partial": "",
        "signature": "Int-\u003eGraph"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Construction.html#v:productG",
      "description": {
        "fct-module": "Data.Graph.Construction",
        "fct-package": "hgal",
        "fct-signature": "Graph -\u003e Graph -\u003e Graph",
        "fct-source": "src/Data-Graph-Construction.html#productG",
        "fct-type": "function",
        "title": "productG"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Construction",
        "module": "Data.Graph.Construction",
        "name": "productG",
        "normalized": "Graph-\u003eGraph-\u003eGraph",
        "package": "hgal",
        "partial": "",
        "signature": "Graph-\u003eGraph-\u003eGraph"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Construction.html#v:starG",
      "description": {
        "fct-module": "Data.Graph.Construction",
        "fct-package": "hgal",
        "fct-signature": "(Vertex, Vertex) -\u003e Graph",
        "fct-source": "src/Data-Graph-Construction.html#starG",
        "fct-type": "function",
        "title": "starG"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Construction",
        "module": "Data.Graph.Construction",
        "name": "starG",
        "normalized": "(Vertex,Vertex)-\u003eGraph",
        "package": "hgal",
        "partial": "",
        "signature": "(Vertex,Vertex)-\u003eGraph"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Construction.html#v:tensorG",
      "description": {
        "fct-module": "Data.Graph.Construction",
        "fct-package": "hgal",
        "fct-signature": "[Int] -\u003e Graph",
        "fct-source": "src/Data-Graph-Construction.html#tensorG",
        "fct-type": "function",
        "title": "tensorG"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Construction",
        "module": "Data.Graph.Construction",
        "name": "tensorG",
        "normalized": "[Int]-\u003eGraph",
        "package": "hgal",
        "partial": "",
        "signature": "[Int]-\u003eGraph"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Construction.html#v:undirG",
      "description": {
        "fct-module": "Data.Graph.Construction",
        "fct-package": "hgal",
        "fct-signature": "Graph -\u003e Graph",
        "fct-source": "src/Data-Graph-Construction.html#undirG",
        "fct-type": "function",
        "title": "undirG"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Construction",
        "module": "Data.Graph.Construction",
        "name": "undirG",
        "normalized": "Graph-\u003eGraph",
        "package": "hgal",
        "partial": "",
        "signature": "Graph-\u003eGraph"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Construction.html#v:unionG",
      "description": {
        "fct-module": "Data.Graph.Construction",
        "fct-package": "hgal",
        "fct-signature": "Graph -\u003e Graph -\u003e Graph",
        "fct-source": "src/Data-Graph-Construction.html#unionG",
        "fct-type": "function",
        "title": "unionG"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Construction",
        "module": "Data.Graph.Construction",
        "name": "unionG",
        "normalized": "Graph-\u003eGraph-\u003eGraph",
        "package": "hgal",
        "partial": "",
        "signature": "Graph-\u003eGraph-\u003eGraph"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Partition.html#",
      "description": {
        "fct-module": "Data.Graph.Partition",
        "fct-package": "hgal",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Partition.html",
        "fct-type": "module",
        "title": "Partition"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Partition",
        "module": "Data.Graph.Partition",
        "name": "Partition",
        "normalized": "",
        "package": "hgal",
        "partial": "Partition",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Partition.html#t:Cell",
      "description": {
        "fct-descr": "\u003cp\u003eA cell is represented by its list of vertices,\n with the invariant that the list is sorted\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Partition",
        "fct-package": "hgal",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Partition.html#Cell",
        "fct-type": "type",
        "title": "Cell"
      },
      "index": {
        "description": "cell is represented by its list of vertices with the invariant that the list is sorted",
        "hierarchy": "Data Graph Partition",
        "module": "Data.Graph.Partition",
        "name": "Cell",
        "normalized": "",
        "package": "hgal",
        "partial": "Cell",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Partition.html#t:Indicator",
      "description": {
        "fct-module": "Data.Graph.Partition",
        "fct-package": "hgal",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Partition.html#Indicator",
        "fct-type": "type",
        "title": "Indicator"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Partition",
        "module": "Data.Graph.Partition",
        "name": "Indicator",
        "normalized": "",
        "package": "hgal",
        "partial": "Indicator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Partition.html#t:Partition",
      "description": {
        "fct-descr": "\u003cp\u003eA partition is its list of cells\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Partition",
        "fct-package": "hgal",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Partition.html#Partition",
        "fct-type": "type",
        "title": "Partition"
      },
      "index": {
        "description": "partition is its list of cells",
        "hierarchy": "Data Graph Partition",
        "module": "Data.Graph.Partition",
        "name": "Partition",
        "normalized": "",
        "package": "hgal",
        "partial": "Partition",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Partition.html#v:fixedInOrbits",
      "description": {
        "fct-descr": "\u003cp\u003eReturns vertices fixes in the given orbits\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Partition",
        "fct-package": "hgal",
        "fct-signature": "Partition -\u003e [Vertex]",
        "fct-source": "src/Data-Graph-Partition.html#fixedInOrbits",
        "fct-type": "function",
        "title": "fixedInOrbits"
      },
      "index": {
        "description": "Returns vertices fixes in the given orbits",
        "hierarchy": "Data Graph Partition",
        "module": "Data.Graph.Partition",
        "name": "fixedInOrbits",
        "normalized": "Partition-\u003e[Vertex]",
        "package": "hgal",
        "partial": "In Orbits",
        "signature": "Partition-\u003e[Vertex]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Partition.html#v:isDiscrete",
      "description": {
        "fct-descr": "\u003cp\u003eIs the partition discrete ?\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Partition",
        "fct-package": "hgal",
        "fct-signature": "Partition -\u003e Bool",
        "fct-source": "src/Data-Graph-Partition.html#isDiscrete",
        "fct-type": "function",
        "title": "isDiscrete"
      },
      "index": {
        "description": "Is the partition discrete",
        "hierarchy": "Data Graph Partition",
        "module": "Data.Graph.Partition",
        "name": "isDiscrete",
        "normalized": "Partition-\u003eBool",
        "package": "hgal",
        "partial": "Discrete",
        "signature": "Partition-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Partition.html#v:isSingleton",
      "description": {
        "fct-module": "Data.Graph.Partition",
        "fct-package": "hgal",
        "fct-signature": "[a] -\u003e Bool",
        "fct-source": "src/Data-Graph-Partition.html#isSingleton",
        "fct-type": "function",
        "title": "isSingleton"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Partition",
        "module": "Data.Graph.Partition",
        "name": "isSingleton",
        "normalized": "[a]-\u003eBool",
        "package": "hgal",
        "partial": "Singleton",
        "signature": "[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Partition.html#v:lambda",
      "description": {
        "fct-descr": "\u003cp\u003eAn indicator function.\n \u003ccode\u003elambda\u003c/code\u003e must be insensitive to automorphisms relabeling of the graph for the Automorphism module to work.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Partition",
        "fct-package": "hgal",
        "fct-signature": "Graph -\u003e Partition -\u003e Indicator",
        "fct-source": "src/Data-Graph-Partition.html#lambda",
        "fct-type": "function",
        "title": "lambda"
      },
      "index": {
        "description": "An indicator function lambda must be insensitive to automorphisms relabeling of the graph for the Automorphism module to work",
        "hierarchy": "Data Graph Partition",
        "module": "Data.Graph.Partition",
        "name": "lambda",
        "normalized": "Graph-\u003ePartition-\u003eIndicator",
        "package": "hgal",
        "partial": "",
        "signature": "Graph-\u003ePartition-\u003eIndicator"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Partition.html#v:lambda_",
      "description": {
        "fct-module": "Data.Graph.Partition",
        "fct-package": "hgal",
        "fct-signature": "Graph -\u003e [Partition] -\u003e [Indicator]",
        "fct-source": "src/Data-Graph-Partition.html#lambda_",
        "fct-type": "function",
        "title": "lambda_"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Partition",
        "module": "Data.Graph.Partition",
        "name": "lambda_",
        "normalized": "Graph-\u003e[Partition]-\u003e[Indicator]",
        "package": "hgal",
        "partial": "",
        "signature": "Graph-\u003e[Partition]-\u003e[Indicator]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Partition.html#v:mcr",
      "description": {
        "fct-module": "Data.Graph.Partition",
        "fct-package": "hgal",
        "fct-signature": "Partition -\u003e [Vertex]",
        "fct-source": "src/Data-Graph-Partition.html#mcr",
        "fct-type": "function",
        "title": "mcr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Graph Partition",
        "module": "Data.Graph.Partition",
        "name": "mcr",
        "normalized": "Partition-\u003e[Vertex]",
        "package": "hgal",
        "partial": "",
        "signature": "Partition-\u003e[Vertex]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Partition.html#v:refine",
      "description": {
        "fct-descr": "\u003cp\u003eRefines a Partition wrt to another Partition, given a graph.\n (explained on pages 50-52)\n This is equivalent to partition the graph's DFA in equivalent states.\n \u003ccode\u003erefine gr p q\u003c/code\u003e refines \u003ccode\u003ep\u003c/code\u003e wrt. \u003ccode\u003eq\u003c/code\u003e in \u003ccode\u003egr\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Partition",
        "fct-package": "hgal",
        "fct-signature": "Graph -\u003e Partition -\u003e Partition -\u003e Partition",
        "fct-source": "src/Data-Graph-Partition.html#refine",
        "fct-type": "function",
        "title": "refine"
      },
      "index": {
        "description": "Refines Partition wrt to another Partition given graph explained on pages This is equivalent to partition the graph DFA in equivalent states refine gr refines wrt in gr",
        "hierarchy": "Data Graph Partition",
        "module": "Data.Graph.Partition",
        "name": "refine",
        "normalized": "Graph-\u003ePartition-\u003ePartition-\u003ePartition",
        "package": "hgal",
        "partial": "",
        "signature": "Graph-\u003ePartition-\u003ePartition-\u003ePartition"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Partition.html#v:unitPartition",
      "description": {
        "fct-descr": "\u003cp\u003eThe unit partition of a range.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Partition",
        "fct-package": "hgal",
        "fct-signature": "(Vertex, Vertex) -\u003e Partition",
        "fct-source": "src/Data-Graph-Partition.html#unitPartition",
        "fct-type": "function",
        "title": "unitPartition"
      },
      "index": {
        "description": "The unit partition of range",
        "hierarchy": "Data Graph Partition",
        "module": "Data.Graph.Partition",
        "name": "unitPartition",
        "normalized": "(Vertex,Vertex)-\u003ePartition",
        "package": "hgal",
        "partial": "Partition",
        "signature": "(Vertex,Vertex)-\u003ePartition"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Permutation.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis modules manages permutations between nodes of a graph. Permutations are represented as arrays.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Graph.Permutation",
        "fct-package": "hgal",
        "fct-signature": "module",
        "fct-source": "src/Data-Graph-Permutation.html",
        "fct-type": "module",
        "title": "Permutation"
      },
      "index": {
        "description": "This modules manages permutations between nodes of graph Permutations are represented as arrays",
        "hierarchy": "Data Graph Permutation",
        "module": "Data.Graph.Permutation",
        "name": "Permutation",
        "normalized": "",
        "package": "hgal",
        "partial": "Permutation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Permutation.html#t:Permutation",
      "description": {
        "fct-descr": "\u003cp\u003eA permutations maps a range of Vertices to itself.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Permutation",
        "fct-package": "hgal",
        "fct-signature": "type",
        "fct-source": "src/Data-Graph-Permutation.html#Permutation",
        "fct-type": "type",
        "title": "Permutation"
      },
      "index": {
        "description": "permutations maps range of Vertices to itself",
        "hierarchy": "Data Graph Permutation",
        "module": "Data.Graph.Permutation",
        "name": "Permutation",
        "normalized": "",
        "package": "hgal",
        "partial": "Permutation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Permutation.html#v:applyPerm",
      "description": {
        "fct-descr": "\u003cp\u003eRelabel a graph using a permutation\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Permutation",
        "fct-package": "hgal",
        "fct-signature": "Permutation -\u003e Graph -\u003e Graph",
        "fct-source": "src/Data-Graph-Permutation.html#applyPerm",
        "fct-type": "function",
        "title": "applyPerm"
      },
      "index": {
        "description": "Relabel graph using permutation",
        "hierarchy": "Data Graph Permutation",
        "module": "Data.Graph.Permutation",
        "name": "applyPerm",
        "normalized": "Permutation-\u003eGraph-\u003eGraph",
        "package": "hgal",
        "partial": "Perm",
        "signature": "Permutation-\u003eGraph-\u003eGraph"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Permutation.html#v:fixed",
      "description": {
        "fct-descr": "\u003cp\u003eFixed vertices of a given permutation\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Permutation",
        "fct-package": "hgal",
        "fct-signature": "Permutation -\u003e [Vertex]",
        "fct-source": "src/Data-Graph-Permutation.html#fixed",
        "fct-type": "function",
        "title": "fixed"
      },
      "index": {
        "description": "Fixed vertices of given permutation",
        "hierarchy": "Data Graph Permutation",
        "module": "Data.Graph.Permutation",
        "name": "fixed",
        "normalized": "Permutation-\u003e[Vertex]",
        "package": "hgal",
        "partial": "",
        "signature": "Permutation-\u003e[Vertex]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Permutation.html#v:mergePerms",
      "description": {
        "fct-descr": "\u003cp\u003eMerge the orbits of two permutations\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Permutation",
        "fct-package": "hgal",
        "fct-signature": "Permutation -\u003e Permutation -\u003e Permutation",
        "fct-source": "src/Data-Graph-Permutation.html#mergePerms",
        "fct-type": "function",
        "title": "mergePerms"
      },
      "index": {
        "description": "Merge the orbits of two permutations",
        "hierarchy": "Data Graph Permutation",
        "module": "Data.Graph.Permutation",
        "name": "mergePerms",
        "normalized": "Permutation-\u003ePermutation-\u003ePermutation",
        "package": "hgal",
        "partial": "Perms",
        "signature": "Permutation-\u003ePermutation-\u003ePermutation"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Permutation.html#v:orbitsFromPerm",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the orbits of a permutation, as a partition\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Permutation",
        "fct-package": "hgal",
        "fct-signature": "Permutation -\u003e Partition",
        "fct-source": "src/Data-Graph-Permutation.html#orbitsFromPerm",
        "fct-type": "function",
        "title": "orbitsFromPerm"
      },
      "index": {
        "description": "Returns the orbits of permutation as partition",
        "hierarchy": "Data Graph Permutation",
        "module": "Data.Graph.Permutation",
        "name": "orbitsFromPerm",
        "normalized": "Permutation-\u003ePartition",
        "package": "hgal",
        "partial": "From Perm",
        "signature": "Permutation-\u003ePartition"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hgal/docs/Data-Graph-Permutation.html#v:permBetween",
      "description": {
        "fct-descr": "\u003cp\u003eBuilds the permutation taking l1 on l2.\n\u003c/p\u003e",
        "fct-module": "Data.Graph.Permutation",
        "fct-package": "hgal",
        "fct-signature": "Bounds -\u003e [Vertex] -\u003e [Vertex] -\u003e Permutation",
        "fct-source": "src/Data-Graph-Permutation.html#permBetween",
        "fct-type": "function",
        "title": "permBetween"
      },
      "index": {
        "description": "Builds the permutation taking l1 on l2",
        "hierarchy": "Data Graph Permutation",
        "module": "Data.Graph.Permutation",
        "name": "permBetween",
        "normalized": "Bounds-\u003e[Vertex]-\u003e[Vertex]-\u003ePermutation",
        "package": "hgal",
        "partial": "Between",
        "signature": "Bounds-\u003e[Vertex]-\u003e[Vertex]-\u003ePermutation"
      }
    }
  }
]