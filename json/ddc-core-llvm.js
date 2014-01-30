[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Convert.html#",
      "description": {
        "fct-module": "DDC.Core.Llvm.Convert",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Llvm-Convert.html",
        "fct-type": "module",
        "title": "Convert"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Llvm Convert",
        "module": "DDC.Core.Llvm.Convert",
        "name": "Convert",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Convert",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Convert.html#v:convertModule",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a Salt module to LLVM.\n\u003c/p\u003e\u003cp\u003eIf anything goes wrong in the convertion then this function will\n   just call \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Llvm.Convert",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Platform -\u003e Module () Name -\u003e Module",
        "fct-source": "src/DDC-Core-Llvm-Convert.html#convertModule",
        "fct-type": "function",
        "title": "convertModule"
      },
      "index": {
        "description": "Convert Salt module to LLVM If anything goes wrong in the convertion then this function will just call error",
        "hierarchy": "DDC Core Llvm Convert",
        "module": "DDC.Core.Llvm.Convert",
        "name": "convertModule",
        "normalized": "Platform-\u003eModule()Name-\u003eModule",
        "package": "ddc-core-llvm",
        "partial": "Module",
        "signature": "Platform-\u003eModule()Name-\u003eModule"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Convert.html#v:convertSuperType",
      "description": {
        "fct-descr": "\u003cp\u003eSplit the parameter and result types from a supercombinator type and\n   and convert them to LLVM form. \n\u003c/p\u003e\u003cp\u003eWe can't split the type first and just call \u003ccode\u003e\u003ca\u003econvertType\u003c/a\u003e\u003c/code\u003e above as we need\n   to decend into any quantifiers that wrap the body type.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Llvm.Convert",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Platform -\u003e KindEnv Name -\u003e Type Name -\u003e ([Type], Type)",
        "fct-source": "src/DDC-Core-Llvm-Convert-Type.html#convertSuperType",
        "fct-type": "function",
        "title": "convertSuperType"
      },
      "index": {
        "description": "Split the parameter and result types from supercombinator type and and convert them to LLVM form We can split the type first and just call convertType above as we need to decend into any quantifiers that wrap the body type",
        "hierarchy": "DDC Core Llvm Convert",
        "module": "DDC.Core.Llvm.Convert",
        "name": "convertSuperType",
        "normalized": "Platform-\u003eKindEnv Name-\u003eType Name-\u003e([Type],Type)",
        "package": "ddc-core-llvm",
        "partial": "Super Type",
        "signature": "Platform-\u003eKindEnv Name-\u003eType Name-\u003e([Type],Type)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Convert.html#v:convertType",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a Salt type to an LlvmType.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Llvm.Convert",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Platform -\u003e KindEnv Name -\u003e Type Name -\u003e Type",
        "fct-source": "src/DDC-Core-Llvm-Convert-Type.html#convertType",
        "fct-type": "function",
        "title": "convertType"
      },
      "index": {
        "description": "Convert Salt type to an LlvmType",
        "hierarchy": "DDC Core Llvm Convert",
        "module": "DDC.Core.Llvm.Convert",
        "name": "convertType",
        "normalized": "Platform-\u003eKindEnv Name-\u003eType Name-\u003eType",
        "package": "ddc-core-llvm",
        "partial": "Type",
        "signature": "Platform-\u003eKindEnv Name-\u003eType Name-\u003eType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#",
      "description": {
        "fct-module": "DDC.Core.Llvm.Metadata.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Llvm-Metadata-Graph.html",
        "fct-type": "module",
        "title": "Graph"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Llvm Metadata Graph",
        "module": "DDC.Core.Llvm.Metadata.Graph",
        "name": "Graph",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#t:DG",
      "description": {
        "fct-descr": "\u003cp\u003eA directed graph.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Llvm.Metadata.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "newtype",
        "fct-source": "src/DDC-Core-Llvm-Metadata-Graph.html#DG",
        "fct-type": "newtype",
        "title": "DG"
      },
      "index": {
        "description": "directed graph",
        "hierarchy": "DDC Core Llvm Metadata Graph",
        "module": "DDC.Core.Llvm.Metadata.Graph",
        "name": "DG",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "DG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#t:Dom",
      "description": {
        "fct-module": "DDC.Core.Llvm.Metadata.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "type",
        "fct-source": "src/DDC-Core-Llvm-Metadata-Graph.html#Dom",
        "fct-type": "type",
        "title": "Dom"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Llvm Metadata Graph",
        "module": "DDC.Core.Llvm.Metadata.Graph",
        "name": "Dom",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Dom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#t:Rel",
      "description": {
        "fct-descr": "\u003cp\u003eA binary relation.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Llvm.Metadata.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "type",
        "fct-source": "src/DDC-Core-Llvm-Metadata-Graph.html#Rel",
        "fct-type": "type",
        "title": "Rel"
      },
      "index": {
        "description": "binary relation",
        "hierarchy": "DDC Core Llvm Metadata Graph",
        "module": "DDC.Core.Llvm.Metadata.Graph",
        "name": "Rel",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Rel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#t:Tree",
      "description": {
        "fct-descr": "\u003cp\u003eAn inverted tree (with edges going from child to parent)\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Llvm.Metadata.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "newtype",
        "fct-source": "src/DDC-Core-Llvm-Metadata-Graph.html#Tree",
        "fct-type": "newtype",
        "title": "Tree"
      },
      "index": {
        "description": "An inverted tree with edges going from child to parent",
        "hierarchy": "DDC Core Llvm Metadata Graph",
        "module": "DDC.Core.Llvm.Metadata.Graph",
        "name": "Tree",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#t:UG",
      "description": {
        "fct-descr": "\u003cp\u003eAn undirected graph.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Llvm.Metadata.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "newtype",
        "fct-source": "src/DDC-Core-Llvm-Metadata-Graph.html#UG",
        "fct-type": "newtype",
        "title": "UG"
      },
      "index": {
        "description": "An undirected graph",
        "hierarchy": "DDC Core Llvm Metadata Graph",
        "module": "DDC.Core.Llvm.Metadata.Graph",
        "name": "UG",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "UG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#v:DG",
      "description": {
        "fct-module": "DDC.Core.Llvm.Metadata.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "DG (Dom a, Rel a)",
        "fct-source": "src/DDC-Core-Llvm-Metadata-Graph.html#DG",
        "fct-type": "function",
        "title": "DG"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Llvm Metadata Graph",
        "module": "DDC.Core.Llvm.Metadata.Graph",
        "name": "DG",
        "normalized": "DG(Dom a,Rel a)",
        "package": "ddc-core-llvm",
        "partial": "DG",
        "signature": "DG(Dom a,Rel a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#v:Tree",
      "description": {
        "fct-module": "DDC.Core.Llvm.Metadata.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Tree (Dom a, Rel a)",
        "fct-source": "src/DDC-Core-Llvm-Metadata-Graph.html#Tree",
        "fct-type": "function",
        "title": "Tree"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Llvm Metadata Graph",
        "module": "DDC.Core.Llvm.Metadata.Graph",
        "name": "Tree",
        "normalized": "Tree(Dom a,Rel a)",
        "package": "ddc-core-llvm",
        "partial": "Tree",
        "signature": "Tree(Dom a,Rel a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#v:UG",
      "description": {
        "fct-module": "DDC.Core.Llvm.Metadata.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "UG (Dom a, Rel a)",
        "fct-source": "src/DDC-Core-Llvm-Metadata-Graph.html#UG",
        "fct-type": "function",
        "title": "UG"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Llvm Metadata Graph",
        "module": "DDC.Core.Llvm.Metadata.Graph",
        "name": "UG",
        "normalized": "UG(Dom a,Rel a)",
        "package": "ddc-core-llvm",
        "partial": "UG",
        "signature": "UG(Dom a,Rel a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#v:aliasMeasure",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the aliasing induced by a set of trees this includes aliasing\n   within each of the trees and aliasing among trees.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Llvm.Metadata.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Rel a -\u003e Partitioning a -\u003e Int",
        "fct-source": "src/DDC-Core-Llvm-Metadata-Graph.html#aliasMeasure",
        "fct-type": "function",
        "title": "aliasMeasure"
      },
      "index": {
        "description": "Calculate the aliasing induced by set of trees this includes aliasing within each of the trees and aliasing among trees",
        "hierarchy": "DDC Core Llvm Metadata Graph",
        "module": "DDC.Core.Llvm.Metadata.Graph",
        "name": "aliasMeasure",
        "normalized": "Rel a-\u003ePartitioning a-\u003eInt",
        "package": "ddc-core-llvm",
        "partial": "Measure",
        "signature": "Rel a-\u003ePartitioning a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#v:anchor",
      "description": {
        "fct-descr": "\u003cp\u003eEnroot a tree with the given root.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Llvm.Metadata.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "a -\u003e Tree a -\u003e Tree a",
        "fct-source": "src/DDC-Core-Llvm-Metadata-Graph.html#anchor",
        "fct-type": "function",
        "title": "anchor"
      },
      "index": {
        "description": "Enroot tree with the given root",
        "hierarchy": "DDC Core Llvm Metadata Graph",
        "module": "DDC.Core.Llvm.Metadata.Graph",
        "name": "anchor",
        "normalized": "a-\u003eTree a-\u003eTree a",
        "package": "ddc-core-llvm",
        "partial": "",
        "signature": "a-\u003eTree a-\u003eTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a list to a relation.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Llvm.Metadata.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "[(a, a)] -\u003e Rel a",
        "fct-source": "src/DDC-Core-Llvm-Metadata-Graph.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Convert list to relation",
        "hierarchy": "DDC Core Llvm Metadata Graph",
        "module": "DDC.Core.Llvm.Metadata.Graph",
        "name": "fromList",
        "normalized": "[(a,a)]-\u003eRel a",
        "package": "ddc-core-llvm",
        "partial": "List",
        "signature": "[(a,a)]-\u003eRel a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#v:isTree",
      "description": {
        "fct-descr": "\u003cp\u003eA relation is an (inverted) tree if each node has at most one outgoing arc\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Llvm.Metadata.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Dom a -\u003e Rel a -\u003e Bool",
        "fct-source": "src/DDC-Core-Llvm-Metadata-Graph.html#isTree",
        "fct-type": "function",
        "title": "isTree"
      },
      "index": {
        "description": "relation is an inverted tree if each node has at most one outgoing arc",
        "hierarchy": "DDC Core Llvm Metadata Graph",
        "module": "DDC.Core.Llvm.Metadata.Graph",
        "name": "isTree",
        "normalized": "Dom a-\u003eRel a-\u003eBool",
        "package": "ddc-core-llvm",
        "partial": "Tree",
        "signature": "Dom a-\u003eRel a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#v:orientUG",
      "description": {
        "fct-module": "DDC.Core.Llvm.Metadata.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "UG a -\u003e DG a",
        "fct-source": "src/DDC-Core-Llvm-Metadata-Graph.html#orientUG",
        "fct-type": "function",
        "title": "orientUG"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Llvm Metadata Graph",
        "module": "DDC.Core.Llvm.Metadata.Graph",
        "name": "orientUG",
        "normalized": "UG a-\u003eDG a",
        "package": "ddc-core-llvm",
        "partial": "UG",
        "signature": "UG a-\u003eDG a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#v:partitionDG",
      "description": {
        "fct-descr": "\u003cp\u003ePartition a DG into the minimum set of (directed) trees\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Llvm.Metadata.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "DG a -\u003e [Tree a]",
        "fct-source": "src/DDC-Core-Llvm-Metadata-Graph.html#partitionDG",
        "fct-type": "function",
        "title": "partitionDG"
      },
      "index": {
        "description": "Partition DG into the minimum set of directed trees",
        "hierarchy": "DDC Core Llvm Metadata Graph",
        "module": "DDC.Core.Llvm.Metadata.Graph",
        "name": "partitionDG",
        "normalized": "DG a-\u003e[Tree a]",
        "package": "ddc-core-llvm",
        "partial": "DG",
        "signature": "DG a-\u003e[Tree a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#v:sources",
      "description": {
        "fct-descr": "\u003cp\u003eGet the sources of a tree.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Llvm.Metadata.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "a -\u003e Tree a -\u003e [a]",
        "fct-source": "src/DDC-Core-Llvm-Metadata-Graph.html#sources",
        "fct-type": "function",
        "title": "sources"
      },
      "index": {
        "description": "Get the sources of tree",
        "hierarchy": "DDC Core Llvm Metadata Graph",
        "module": "DDC.Core.Llvm.Metadata.Graph",
        "name": "sources",
        "normalized": "a-\u003eTree a-\u003e[a]",
        "package": "ddc-core-llvm",
        "partial": "",
        "signature": "a-\u003eTree a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a relation.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Llvm.Metadata.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Dom a -\u003e Rel a -\u003e [(a, a)]",
        "fct-source": "src/DDC-Core-Llvm-Metadata-Graph.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Convert relation",
        "hierarchy": "DDC Core Llvm Metadata Graph",
        "module": "DDC.Core.Llvm.Metadata.Graph",
        "name": "toList",
        "normalized": "Dom a-\u003eRel a-\u003e[(a,a)]",
        "package": "ddc-core-llvm",
        "partial": "List",
        "signature": "Dom a-\u003eRel a-\u003e[(a,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#v:transClosure",
      "description": {
        "fct-descr": "\u003cp\u003eFind the transitive closure of a binary relation\n      using Floyd-Warshall algorithm\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Llvm.Metadata.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Dom a -\u003e Rel a -\u003e Rel a",
        "fct-source": "src/DDC-Core-Llvm-Metadata-Graph.html#transClosure",
        "fct-type": "function",
        "title": "transClosure"
      },
      "index": {
        "description": "Find the transitive closure of binary relation using Floyd-Warshall algorithm",
        "hierarchy": "DDC Core Llvm Metadata Graph",
        "module": "DDC.Core.Llvm.Metadata.Graph",
        "name": "transClosure",
        "normalized": "Dom a-\u003eRel a-\u003eRel a",
        "package": "ddc-core-llvm",
        "partial": "Closure",
        "signature": "Dom a-\u003eRel a-\u003eRel a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#v:transOrient",
      "description": {
        "fct-descr": "\u003cp\u003eTransitively orient an undireted graph\n\u003c/p\u003e\u003cp\u003eUsing the algorithm from\n      \u003ca\u003eLex-BFS and partition refinement, with applications to transitive orientation, interval \n      graph recognition and consecutive ones testing\u003c/a\u003e, R. McConnell et al 2000\n\u003c/p\u003e\u003cp\u003eIn the case where the transitive orientation does not exist, it simply gives some orientation\n\u003c/p\u003e\u003cp\u003enote: gave up on modular decomposition, this approach has very slightly worse time\n            complexity but much simpler\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Llvm.Metadata.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "UG a -\u003e DG a",
        "fct-source": "src/DDC-Core-Llvm-Metadata-Graph.html#transOrient",
        "fct-type": "function",
        "title": "transOrient"
      },
      "index": {
        "description": "Transitively orient an undireted graph Using the algorithm from Lex-BFS and partition refinement with applications to transitive orientation interval graph recognition and consecutive ones testing McConnell et al In the case where the transitive orientation does not exist it simply gives some orientation note gave up on modular decomposition this approach has very slightly worse time complexity but much simpler",
        "hierarchy": "DDC Core Llvm Metadata Graph",
        "module": "DDC.Core.Llvm.Metadata.Graph",
        "name": "transOrient",
        "normalized": "UG a-\u003eDG a",
        "package": "ddc-core-llvm",
        "partial": "Orient",
        "signature": "UG a-\u003eDG a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Tbaa.html#",
      "description": {
        "fct-module": "DDC.Core.Llvm.Metadata.Tbaa",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "module",
        "fct-source": "src/DDC-Core-Llvm-Metadata-Tbaa.html",
        "fct-type": "module",
        "title": "Tbaa"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Llvm Metadata Tbaa",
        "module": "DDC.Core.Llvm.Metadata.Tbaa",
        "name": "Tbaa",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Tbaa",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Tbaa.html#t:MDSuper",
      "description": {
        "fct-descr": "\u003cp\u003eMetadata for a supercombinator.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Llvm.Metadata.Tbaa",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Core-Llvm-Metadata-Tbaa.html#MDSuper",
        "fct-type": "data",
        "title": "MDSuper"
      },
      "index": {
        "description": "Metadata for supercombinator",
        "hierarchy": "DDC Core Llvm Metadata Tbaa",
        "module": "DDC.Core.Llvm.Metadata.Tbaa",
        "name": "MDSuper",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "MDSuper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Tbaa.html#v:MDSuper",
      "description": {
        "fct-module": "DDC.Core.Llvm.Metadata.Tbaa",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "MDSuper",
        "fct-source": "src/DDC-Core-Llvm-Metadata-Tbaa.html#MDSuper",
        "fct-type": "function",
        "title": "MDSuper"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Llvm Metadata Tbaa",
        "module": "DDC.Core.Llvm.Metadata.Tbaa",
        "name": "MDSuper",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "MDSuper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Tbaa.html#v:annot",
      "description": {
        "fct-descr": "\u003cp\u003eAttach relevant metadata to instructions\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Llvm.Metadata.Tbaa",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "KindEnv Name-\u003e MDSuper-\u003e [c Name]-\u003e Instr-\u003e AnnotInstr",
        "fct-type": "function",
        "title": "annot"
      },
      "index": {
        "description": "Attach relevant metadata to instructions",
        "hierarchy": "DDC Core Llvm Metadata Tbaa",
        "module": "DDC.Core.Llvm.Metadata.Tbaa",
        "name": "annot",
        "normalized": "KindEnv Name-\u003eMDSuper-\u003e[a Name]-\u003eInstr-\u003eAnnotInstr",
        "package": "ddc-core-llvm",
        "partial": "",
        "signature": "KindEnv Name-\u003eMDSuper-\u003e[c Name]-\u003eInstr-\u003eAnnotInstr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Tbaa.html#v:decls",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DDC.Core.Llvm.Metadata.Tbaa",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "[MDecl]",
        "fct-source": "src/DDC-Core-Llvm-Metadata-Tbaa.html#MDSuper",
        "fct-type": "function",
        "title": "decls"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Llvm Metadata Tbaa",
        "module": "DDC.Core.Llvm.Metadata.Tbaa",
        "name": "decls",
        "normalized": "[MDecl]",
        "package": "ddc-core-llvm",
        "partial": "",
        "signature": "[MDecl]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Tbaa.html#v:deriveMD",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate tbaa metadata for a top-level Salt supercombinator.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Llvm.Metadata.Tbaa",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "String-\u003e Exp () Name-\u003e LlvmM MDSuper",
        "fct-type": "function",
        "title": "deriveMD"
      },
      "index": {
        "description": "Generate tbaa metadata for top-level Salt supercombinator",
        "hierarchy": "DDC Core Llvm Metadata Tbaa",
        "module": "DDC.Core.Llvm.Metadata.Tbaa",
        "name": "deriveMD",
        "normalized": "String-\u003eExp()Name-\u003eLlvmM MDSuper",
        "package": "ddc-core-llvm",
        "partial": "MD",
        "signature": "String-\u003eExp()Name-\u003eLlvmM MDSuper"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Tbaa.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eLookup the metadata for a name, from the metadata tree attached\n   to a supecombinator.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Llvm.Metadata.Tbaa",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Bound Name -\u003e MDSuper -\u003e Maybe [MDecl]",
        "fct-source": "src/DDC-Core-Llvm-Metadata-Tbaa.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Lookup the metadata for name from the metadata tree attached to supecombinator",
        "hierarchy": "DDC Core Llvm Metadata Tbaa",
        "module": "DDC.Core.Llvm.Metadata.Tbaa",
        "name": "lookup",
        "normalized": "Bound Name-\u003eMDSuper-\u003eMaybe[MDecl]",
        "package": "ddc-core-llvm",
        "partial": "",
        "signature": "Bound Name-\u003eMDSuper-\u003eMaybe[MDecl]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Tbaa.html#v:lookups",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e but lookup metadata for several names at once.\n\u003c/p\u003e",
        "fct-module": "DDC.Core.Llvm.Metadata.Tbaa",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "[Bound Name] -\u003e MDSuper -\u003e [Maybe [MDecl]]",
        "fct-source": "src/DDC-Core-Llvm-Metadata-Tbaa.html#lookups",
        "fct-type": "function",
        "title": "lookups"
      },
      "index": {
        "description": "Like lookup but lookup metadata for several names at once",
        "hierarchy": "DDC Core Llvm Metadata Tbaa",
        "module": "DDC.Core.Llvm.Metadata.Tbaa",
        "name": "lookups",
        "normalized": "[Bound Name]-\u003eMDSuper-\u003e[Maybe[MDecl]]",
        "package": "ddc-core-llvm",
        "partial": "",
        "signature": "[Bound Name]-\u003eMDSuper-\u003e[Maybe[MDecl]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Tbaa.html#v:nameMap",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DDC.Core.Llvm.Metadata.Tbaa",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "MDEnv",
        "fct-source": "src/DDC-Core-Llvm-Metadata-Tbaa.html#MDSuper",
        "fct-type": "function",
        "title": "nameMap"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Core Llvm Metadata Tbaa",
        "module": "DDC.Core.Llvm.Metadata.Tbaa",
        "name": "nameMap",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Analysis-Children.html#",
      "description": {
        "fct-module": "DDC.Llvm.Analysis.Children",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "module",
        "fct-source": "src/DDC-Llvm-Analysis-Children.html",
        "fct-type": "module",
        "title": "Children"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Analysis Children",
        "module": "DDC.Llvm.Analysis.Children",
        "name": "Children",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Children",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Analysis-Children.html#t:Children",
      "description": {
        "fct-descr": "\u003cp\u003eThe children of a node are the other nodes this one might branch to.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Analysis.Children",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Analysis-Children.html#Children",
        "fct-type": "data",
        "title": "Children"
      },
      "index": {
        "description": "The children of node are the other nodes this one might branch to",
        "hierarchy": "DDC Llvm Analysis Children",
        "module": "DDC.Llvm.Analysis.Children",
        "name": "Children",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Children",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Analysis-Children.html#v:Children",
      "description": {
        "fct-module": "DDC.Llvm.Analysis.Children",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Children (Set Label)",
        "fct-source": "src/DDC-Llvm-Analysis-Children.html#Children",
        "fct-type": "function",
        "title": "Children"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Analysis Children",
        "module": "DDC.Llvm.Analysis.Children",
        "name": "Children",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Children",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Analysis-Children.html#v:annotChildrenOfGraph",
      "description": {
        "fct-descr": "\u003cp\u003eAnnotate a graph with the children of each node.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Analysis.Children",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Graph a -\u003e Graph (a, Children)",
        "fct-source": "src/DDC-Llvm-Analysis-Children.html#annotChildrenOfGraph",
        "fct-type": "function",
        "title": "annotChildrenOfGraph"
      },
      "index": {
        "description": "Annotate graph with the children of each node",
        "hierarchy": "DDC Llvm Analysis Children",
        "module": "DDC.Llvm.Analysis.Children",
        "name": "annotChildrenOfGraph",
        "normalized": "Graph a-\u003eGraph(a,Children)",
        "package": "ddc-core-llvm",
        "partial": "Children Of Graph",
        "signature": "Graph a-\u003eGraph(a,Children)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Analysis-Children.html#v:annotChildrenOfNode",
      "description": {
        "fct-descr": "\u003cp\u003eAnnotate a node with its children.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Analysis.Children",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Node a -\u003e Node (a, Children)",
        "fct-source": "src/DDC-Llvm-Analysis-Children.html#annotChildrenOfNode",
        "fct-type": "function",
        "title": "annotChildrenOfNode"
      },
      "index": {
        "description": "Annotate node with its children",
        "hierarchy": "DDC Llvm Analysis Children",
        "module": "DDC.Llvm.Analysis.Children",
        "name": "annotChildrenOfNode",
        "normalized": "Node a-\u003eNode(a,Children)",
        "package": "ddc-core-llvm",
        "partial": "Children Of Node",
        "signature": "Node a-\u003eNode(a,Children)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Analysis-Children.html#v:childrenOfNode",
      "description": {
        "fct-descr": "\u003cp\u003eGet the children of a node.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Analysis.Children",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Node a -\u003e Set Label",
        "fct-source": "src/DDC-Llvm-Graph.html#childrenOfNode",
        "fct-type": "function",
        "title": "childrenOfNode"
      },
      "index": {
        "description": "Get the children of node",
        "hierarchy": "DDC Llvm Analysis Children",
        "module": "DDC.Llvm.Analysis.Children",
        "name": "childrenOfNode",
        "normalized": "Node a-\u003eSet Label",
        "package": "ddc-core-llvm",
        "partial": "Of Node",
        "signature": "Node a-\u003eSet Label"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Analysis-Parents.html#",
      "description": {
        "fct-module": "DDC.Llvm.Analysis.Parents",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "module",
        "fct-source": "src/DDC-Llvm-Analysis-Parents.html",
        "fct-type": "module",
        "title": "Parents"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Analysis Parents",
        "module": "DDC.Llvm.Analysis.Parents",
        "name": "Parents",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Parents",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Analysis-Parents.html#t:Parents",
      "description": {
        "fct-descr": "\u003cp\u003eThe parents of a node are the other nodes that might branch\n   to this one.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Analysis.Parents",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Analysis-Parents.html#Parents",
        "fct-type": "data",
        "title": "Parents"
      },
      "index": {
        "description": "The parents of node are the other nodes that might branch to this one",
        "hierarchy": "DDC Llvm Analysis Parents",
        "module": "DDC.Llvm.Analysis.Parents",
        "name": "Parents",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Parents",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Analysis-Parents.html#v:Parents",
      "description": {
        "fct-module": "DDC.Llvm.Analysis.Parents",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Parents (Set Label)",
        "fct-source": "src/DDC-Llvm-Analysis-Parents.html#Parents",
        "fct-type": "function",
        "title": "Parents"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Analysis Parents",
        "module": "DDC.Llvm.Analysis.Parents",
        "name": "Parents",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Parents",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Analysis-Parents.html#v:annotParentsOfGraph",
      "description": {
        "fct-descr": "\u003cp\u003eAnnotate a graph with the parents of each node.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Analysis.Parents",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Graph a -\u003e Graph (a, Parents)",
        "fct-source": "src/DDC-Llvm-Analysis-Parents.html#annotParentsOfGraph",
        "fct-type": "function",
        "title": "annotParentsOfGraph"
      },
      "index": {
        "description": "Annotate graph with the parents of each node",
        "hierarchy": "DDC Llvm Analysis Parents",
        "module": "DDC.Llvm.Analysis.Parents",
        "name": "annotParentsOfGraph",
        "normalized": "Graph a-\u003eGraph(a,Parents)",
        "package": "ddc-core-llvm",
        "partial": "Parents Of Graph",
        "signature": "Graph a-\u003eGraph(a,Parents)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Analysis-Parents.html#v:lineageOfVar",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of parents tracing back to the node that defines the given\n   variable, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the definition site can not be found.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Analysis.Parents",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Graph Parents -\u003e Var -\u003e Label -\u003e Maybe [Label]",
        "fct-source": "src/DDC-Llvm-Analysis-Parents.html#lineageOfVar",
        "fct-type": "function",
        "title": "lineageOfVar"
      },
      "index": {
        "description": "Get list of parents tracing back to the node that defines the given variable or Nothing if the definition site can not be found",
        "hierarchy": "DDC Llvm Analysis Parents",
        "module": "DDC.Llvm.Analysis.Parents",
        "name": "lineageOfVar",
        "normalized": "Graph Parents-\u003eVar-\u003eLabel-\u003eMaybe[Label]",
        "package": "ddc-core-llvm",
        "partial": "Of Var",
        "signature": "Graph Parents-\u003eVar-\u003eLabel-\u003eMaybe[Label]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#",
      "description": {
        "fct-module": "DDC.Llvm.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "module",
        "fct-source": "src/DDC-Llvm-Graph.html",
        "fct-type": "module",
        "title": "Graph"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Graph",
        "module": "DDC.Llvm.Graph",
        "name": "Graph",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#t:Graph",
      "description": {
        "fct-descr": "\u003cp\u003eLlvm block graph.\n   We use this form for transformations, \n   as it makes it easy to find blocks and attach annotations to them.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Graph.html#Graph",
        "fct-type": "data",
        "title": "Graph"
      },
      "index": {
        "description": "Llvm block graph We use this form for transformations as it makes it easy to find blocks and attach annotations to them",
        "hierarchy": "DDC Llvm Graph",
        "module": "DDC.Llvm.Graph",
        "name": "Graph",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#t:Node",
      "description": {
        "fct-descr": "\u003cp\u003eA block of instructions, and an optional annotation.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Graph.html#Node",
        "fct-type": "data",
        "title": "Node"
      },
      "index": {
        "description": "block of instructions and an optional annotation",
        "hierarchy": "DDC Llvm Graph",
        "module": "DDC.Llvm.Graph",
        "name": "Node",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:Graph",
      "description": {
        "fct-module": "DDC.Llvm.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Graph",
        "fct-source": "src/DDC-Llvm-Graph.html#Graph",
        "fct-type": "function",
        "title": "Graph"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Graph",
        "module": "DDC.Llvm.Graph",
        "name": "Graph",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:Node",
      "description": {
        "fct-module": "DDC.Llvm.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Node",
        "fct-source": "src/DDC-Llvm-Graph.html#Node",
        "fct-type": "function",
        "title": "Node"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Graph",
        "module": "DDC.Llvm.Graph",
        "name": "Node",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:blockOfNode",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eBlock\u003c/a\u003e\u003c/code\u003e form, dropping any annotation.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Node a -\u003e Block",
        "fct-source": "src/DDC-Llvm-Graph.html#blockOfNode",
        "fct-type": "function",
        "title": "blockOfNode"
      },
      "index": {
        "description": "Convert Node to Block form dropping any annotation",
        "hierarchy": "DDC Llvm Graph",
        "module": "DDC.Llvm.Graph",
        "name": "blockOfNode",
        "normalized": "Node a-\u003eBlock",
        "package": "ddc-core-llvm",
        "partial": "Of Node",
        "signature": "Node a-\u003eBlock"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:blocksOfGraph",
      "description": {
        "fct-descr": "\u003cp\u003eFlatten a graph back into a list of blocks.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Graph a -\u003e [Block]",
        "fct-source": "src/DDC-Llvm-Graph.html#blocksOfGraph",
        "fct-type": "function",
        "title": "blocksOfGraph"
      },
      "index": {
        "description": "Flatten graph back into list of blocks",
        "hierarchy": "DDC Llvm Graph",
        "module": "DDC.Llvm.Graph",
        "name": "blocksOfGraph",
        "normalized": "Graph a-\u003e[Block]",
        "package": "ddc-core-llvm",
        "partial": "Of Graph",
        "signature": "Graph a-\u003e[Block]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:childrenOfNode",
      "description": {
        "fct-descr": "\u003cp\u003eGet the children of a node.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Node a -\u003e Set Label",
        "fct-source": "src/DDC-Llvm-Graph.html#childrenOfNode",
        "fct-type": "function",
        "title": "childrenOfNode"
      },
      "index": {
        "description": "Get the children of node",
        "hierarchy": "DDC Llvm Graph",
        "module": "DDC.Llvm.Graph",
        "name": "childrenOfNode",
        "normalized": "Node a-\u003eSet Label",
        "package": "ddc-core-llvm",
        "partial": "Of Node",
        "signature": "Node a-\u003eSet Label"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:graphEntry",
      "description": {
        "fct-descr": "\u003cp\u003eThe entry node for the block graph.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Label",
        "fct-source": "src/DDC-Llvm-Graph.html#Graph",
        "fct-type": "function",
        "title": "graphEntry"
      },
      "index": {
        "description": "The entry node for the block graph",
        "hierarchy": "DDC Llvm Graph",
        "module": "DDC.Llvm.Graph",
        "name": "graphEntry",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:graphNodes",
      "description": {
        "fct-descr": "\u003cp\u003eInternal nodes.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Map Label (Node a)",
        "fct-source": "src/DDC-Llvm-Graph.html#Graph",
        "fct-type": "function",
        "title": "graphNodes"
      },
      "index": {
        "description": "Internal nodes",
        "hierarchy": "DDC Llvm Graph",
        "module": "DDC.Llvm.Graph",
        "name": "graphNodes",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Nodes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:graphOfBlocks",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a list of blocks to a block graph.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "a -\u003e [Block] -\u003e Maybe (Graph a)",
        "fct-source": "src/DDC-Llvm-Graph.html#graphOfBlocks",
        "fct-type": "function",
        "title": "graphOfBlocks"
      },
      "index": {
        "description": "Convert list of blocks to block graph",
        "hierarchy": "DDC Llvm Graph",
        "module": "DDC.Llvm.Graph",
        "name": "graphOfBlocks",
        "normalized": "a-\u003e[Block]-\u003eMaybe(Graph a)",
        "package": "ddc-core-llvm",
        "partial": "Of Blocks",
        "signature": "a-\u003e[Block]-\u003eMaybe(Graph a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:labelsOfGraph",
      "description": {
        "fct-descr": "\u003cp\u003eGet the set of all block labels in a graph.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Graph a -\u003e [Label]",
        "fct-source": "src/DDC-Llvm-Graph.html#labelsOfGraph",
        "fct-type": "function",
        "title": "labelsOfGraph"
      },
      "index": {
        "description": "Get the set of all block labels in graph",
        "hierarchy": "DDC Llvm Graph",
        "module": "DDC.Llvm.Graph",
        "name": "labelsOfGraph",
        "normalized": "Graph a-\u003e[Label]",
        "package": "ddc-core-llvm",
        "partial": "Of Graph",
        "signature": "Graph a-\u003e[Label]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:lookupNodeOfGraph",
      "description": {
        "fct-descr": "\u003cp\u003eLookup a node from the graph, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it can't be found.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Graph a -\u003e Label -\u003e Maybe (Node a)",
        "fct-source": "src/DDC-Llvm-Graph.html#lookupNodeOfGraph",
        "fct-type": "function",
        "title": "lookupNodeOfGraph"
      },
      "index": {
        "description": "Lookup node from the graph or Nothing if it can be found",
        "hierarchy": "DDC Llvm Graph",
        "module": "DDC.Llvm.Graph",
        "name": "lookupNodeOfGraph",
        "normalized": "Graph a-\u003eLabel-\u003eMaybe(Node a)",
        "package": "ddc-core-llvm",
        "partial": "Node Of Graph",
        "signature": "Graph a-\u003eLabel-\u003eMaybe(Node a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:mapAnnotsOfGraph",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to every node annotation in the graph.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "(a -\u003e b) -\u003e Graph a -\u003e Graph b",
        "fct-source": "src/DDC-Llvm-Graph.html#mapAnnotsOfGraph",
        "fct-type": "function",
        "title": "mapAnnotsOfGraph"
      },
      "index": {
        "description": "Apply function to every node annotation in the graph",
        "hierarchy": "DDC Llvm Graph",
        "module": "DDC.Llvm.Graph",
        "name": "mapAnnotsOfGraph",
        "normalized": "(a-\u003eb)-\u003eGraph a-\u003eGraph b",
        "package": "ddc-core-llvm",
        "partial": "Annots Of Graph",
        "signature": "(a-\u003eb)-\u003eGraph a-\u003eGraph b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:mapNodesOfGraph",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to every node in the graph.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "(Node a -\u003e Node b) -\u003e Graph a -\u003e Graph b",
        "fct-source": "src/DDC-Llvm-Graph.html#mapNodesOfGraph",
        "fct-type": "function",
        "title": "mapNodesOfGraph"
      },
      "index": {
        "description": "Apply function to every node in the graph",
        "hierarchy": "DDC Llvm Graph",
        "module": "DDC.Llvm.Graph",
        "name": "mapNodesOfGraph",
        "normalized": "(Node a-\u003eNode b)-\u003eGraph a-\u003eGraph b",
        "package": "ddc-core-llvm",
        "partial": "Nodes Of Graph",
        "signature": "(Node a-\u003eNode b)-\u003eGraph a-\u003eGraph b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:modifyNodeOfGraph",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to a single node in the graoh.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Label-\u003e (Node a -\u003e Node a)-\u003e Graph a-\u003e Graph a",
        "fct-type": "function",
        "title": "modifyNodeOfGraph"
      },
      "index": {
        "description": "Apply function to single node in the graoh",
        "hierarchy": "DDC Llvm Graph",
        "module": "DDC.Llvm.Graph",
        "name": "modifyNodeOfGraph",
        "normalized": "Label-\u003e(Node a-\u003eNode a)-\u003eGraph a-\u003eGraph a",
        "package": "ddc-core-llvm",
        "partial": "Node Of Graph",
        "signature": "Label-\u003e(Node a-\u003eNode a)-\u003eGraph a-\u003eGraph a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:nodeAnnot",
      "description": {
        "fct-descr": "\u003cp\u003eOptional annotation on the node.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "a",
        "fct-source": "src/DDC-Llvm-Graph.html#Node",
        "fct-type": "function",
        "title": "nodeAnnot"
      },
      "index": {
        "description": "Optional annotation on the node",
        "hierarchy": "DDC Llvm Graph",
        "module": "DDC.Llvm.Graph",
        "name": "nodeAnnot",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Annot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:nodeInstrs",
      "description": {
        "fct-descr": "\u003cp\u003eStatements in this node, with meta-data annotations.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Seq AnnotInstr",
        "fct-source": "src/DDC-Llvm-Graph.html#Node",
        "fct-type": "function",
        "title": "nodeInstrs"
      },
      "index": {
        "description": "Statements in this node with meta-data annotations",
        "hierarchy": "DDC Llvm Graph",
        "module": "DDC.Llvm.Graph",
        "name": "nodeInstrs",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Instrs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:nodeLabel",
      "description": {
        "fct-descr": "\u003cp\u003eBlock label for the node.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Graph",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Label",
        "fct-source": "src/DDC-Llvm-Graph.html#Node",
        "fct-type": "function",
        "title": "nodeLabel"
      },
      "index": {
        "description": "Block label for the node",
        "hierarchy": "DDC Llvm Graph",
        "module": "DDC.Llvm.Graph",
        "name": "nodeLabel",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Pretty.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty printer instances for the Llvm syntax.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Llvm.Pretty",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "module",
        "fct-source": "src/DDC-Llvm-Pretty.html",
        "fct-type": "module",
        "title": "Pretty"
      },
      "index": {
        "description": "Pretty printer instances for the Llvm syntax",
        "hierarchy": "DDC Llvm Pretty",
        "module": "DDC.Llvm.Pretty",
        "name": "Pretty",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Pretty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#",
      "description": {
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "module",
        "fct-source": "src/DDC-Llvm-Syntax.html",
        "fct-type": "module",
        "title": "Syntax"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Syntax",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Syntax",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Align",
      "description": {
        "fct-descr": "\u003cp\u003eAlignment.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#Align",
        "fct-type": "data",
        "title": "Align"
      },
      "index": {
        "description": "Alignment",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Align",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Align",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:AnnotInstr",
      "description": {
        "fct-descr": "\u003cp\u003eInstructions annotated with metadata.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#AnnotInstr",
        "fct-type": "data",
        "title": "AnnotInstr"
      },
      "index": {
        "description": "Instructions annotated with metadata",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "AnnotInstr",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Annot Instr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Block",
      "description": {
        "fct-descr": "\u003cp\u003eA block of LLVM code with an optional annotation.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#Block",
        "fct-type": "data",
        "title": "Block"
      },
      "index": {
        "description": "block of LLVM code with an optional annotation",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Block",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:CallConv",
      "description": {
        "fct-descr": "\u003cp\u003eDifferent calling conventions a function can use.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#CallConv",
        "fct-type": "data",
        "title": "CallConv"
      },
      "index": {
        "description": "Different calling conventions function can use",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "CallConv",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Call Conv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:CallType",
      "description": {
        "fct-descr": "\u003cp\u003eDifferent ways to call a function.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#CallType",
        "fct-type": "data",
        "title": "CallType"
      },
      "index": {
        "description": "Different ways to call function",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "CallType",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Call Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Conv",
      "description": {
        "fct-descr": "\u003cp\u003eConversion Operations\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Conv",
        "fct-type": "data",
        "title": "Conv"
      },
      "index": {
        "description": "Conversion Operations",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Conv",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Conv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Exp",
      "description": {
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Exp.html#Exp",
        "fct-type": "data",
        "title": "Exp"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Exp",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Exp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:FCond",
      "description": {
        "fct-descr": "\u003cp\u003eFloating point comparison.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
        "fct-type": "data",
        "title": "FCond"
      },
      "index": {
        "description": "Floating point comparison",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "FCond",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "FCond",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:FuncAttr",
      "description": {
        "fct-descr": "\u003cp\u003eFunction attributes are set to communicate additional information about a\n   function. Function attributes are considered to be part of the function,\n   not of the function type, so functions with different parameter attributes\n   can have the same function type. Functions can have multiple attributes.\n\u003c/p\u003e\u003cp\u003eDescriptions taken from \u003ca\u003ehttp://llvm.org/docs/LangRef.html#fnattrs\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#FuncAttr",
        "fct-type": "data",
        "title": "FuncAttr"
      },
      "index": {
        "description": "Function attributes are set to communicate additional information about function Function attributes are considered to be part of the function not of the function type so functions with different parameter attributes can have the same function type Functions can have multiple attributes Descriptions taken from http llvm.org docs LangRef.html fnattrs",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "FuncAttr",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Func Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Function",
      "description": {
        "fct-descr": "\u003cp\u003eA LLVM Function\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Function.html#Function",
        "fct-type": "data",
        "title": "Function"
      },
      "index": {
        "description": "LLVM Function",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Function",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:FunctionDecl",
      "description": {
        "fct-descr": "\u003cp\u003eAn LLVM Function\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#FunctionDecl",
        "fct-type": "data",
        "title": "FunctionDecl"
      },
      "index": {
        "description": "An LLVM Function",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "FunctionDecl",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Function Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Global",
      "description": {
        "fct-descr": "\u003cp\u003eA global mutable variable. Maybe defined or external\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Module.html#Global",
        "fct-type": "data",
        "title": "Global"
      },
      "index": {
        "description": "global mutable variable Maybe defined or external",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Global",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Global",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:ICond",
      "description": {
        "fct-descr": "\u003cp\u003eInteger comparison.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#ICond",
        "fct-type": "data",
        "title": "ICond"
      },
      "index": {
        "description": "Integer comparison",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ICond",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "ICond",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Instr",
      "description": {
        "fct-descr": "\u003cp\u003eInstructions\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
        "fct-type": "data",
        "title": "Instr"
      },
      "index": {
        "description": "Instructions",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Instr",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Instr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Label",
      "description": {
        "fct-descr": "\u003cp\u003eBlock labels.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#Label",
        "fct-type": "data",
        "title": "Label"
      },
      "index": {
        "description": "Block labels",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Label",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Linkage",
      "description": {
        "fct-descr": "\u003cp\u003eLinkage type of a symbol.\n\u003c/p\u003e\u003cp\u003eThe description of the constructors is copied from the Llvm Assembly Language\n   Reference Manual \u003ca\u003ehttp://www.llvm.org/docs/LangRef.html#linkage\u003c/a\u003e, because\n   they correspond to the Llvm linkage types.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#Linkage",
        "fct-type": "data",
        "title": "Linkage"
      },
      "index": {
        "description": "Linkage type of symbol The description of the constructors is copied from the Llvm Assembly Language Reference Manual http www.llvm.org docs LangRef.html linkage because they correspond to the Llvm linkage types",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Linkage",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Lit",
      "description": {
        "fct-descr": "\u003cp\u003eLiteral data.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Exp.html#Lit",
        "fct-type": "data",
        "title": "Lit"
      },
      "index": {
        "description": "Literal data",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Lit",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:MDecl",
      "description": {
        "fct-descr": "\u003cp\u003eMaps matadata references to metadata nodes\n      e.g. !2 = !{ metadata \u003ca\u003eid\u003c/a\u003e, !0, !i11}\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Metadata.html#MDecl",
        "fct-type": "data",
        "title": "MDecl"
      },
      "index": {
        "description": "Maps matadata references to metadata nodes e.g metadata id i11",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "MDecl",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "MDecl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:MRef",
      "description": {
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Metadata.html#MRef",
        "fct-type": "data",
        "title": "MRef"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "MRef",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "MRef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Metadata",
      "description": {
        "fct-descr": "\u003cp\u003eDifferent types of metadata used in LLVM IR\n      e.g. \u003ccode\u003edebug\u003c/code\u003e, \u003ccode\u003etbaa\u003c/code\u003e, \u003ccode\u003erange\u003c/code\u003e, etc.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Metadata.html#Metadata",
        "fct-type": "data",
        "title": "Metadata"
      },
      "index": {
        "description": "Different types of metadata used in LLVM IR e.g debug tbaa range etc",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Metadata",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Metadata",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Module",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a top level container in LLVM.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Module.html#Module",
        "fct-type": "data",
        "title": "Module"
      },
      "index": {
        "description": "This is top level container in LLVM",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Module",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Name",
      "description": {
        "fct-descr": "\u003cp\u003eNames of variables.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Exp.html#Name",
        "fct-type": "data",
        "title": "Name"
      },
      "index": {
        "description": "Names of variables",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Name",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Op",
      "description": {
        "fct-descr": "\u003cp\u003eBinary arithmetic operators.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Op",
        "fct-type": "data",
        "title": "Op"
      },
      "index": {
        "description": "Binary arithmetic operators",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Op",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Param",
      "description": {
        "fct-descr": "\u003cp\u003eDescribes a function parameter.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#Param",
        "fct-type": "data",
        "title": "Param"
      },
      "index": {
        "description": "Describes function parameter",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Param",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:ParamAttr",
      "description": {
        "fct-descr": "\u003cp\u003eParameter attributes are used to communicate additional information about\n   the result or parameters of a function\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#ParamAttr",
        "fct-type": "data",
        "title": "ParamAttr"
      },
      "index": {
        "description": "Parameter attributes are used to communicate additional information about the result or parameters of function",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ParamAttr",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Param Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:ParamListType",
      "description": {
        "fct-descr": "\u003cp\u003eFunctions can have a fixed amount of parameters, or a variable amount.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#ParamListType",
        "fct-type": "data",
        "title": "ParamListType"
      },
      "index": {
        "description": "Functions can have fixed amount of parameters or variable amount",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ParamListType",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Param List Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Section",
      "description": {
        "fct-descr": "\u003cp\u003eThe section name to put the function in.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Function.html#Section",
        "fct-type": "data",
        "title": "Section"
      },
      "index": {
        "description": "The section name to put the function in",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Section",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Section",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Static",
      "description": {
        "fct-descr": "\u003cp\u003eLlvm Static Data.\n   These represent the possible global level variables and constants.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Module.html#Static",
        "fct-type": "data",
        "title": "Static"
      },
      "index": {
        "description": "Llvm Static Data These represent the possible global level variables and constants",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Static",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Static",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Type",
      "description": {
        "fct-descr": "\u003cp\u003eLlvm Types.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#Type",
        "fct-type": "data",
        "title": "Type"
      },
      "index": {
        "description": "Llvm Types",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Type",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:TypeAlias",
      "description": {
        "fct-descr": "\u003cp\u003eA type alias.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#TypeAlias",
        "fct-type": "data",
        "title": "TypeAlias"
      },
      "index": {
        "description": "type alias",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "TypeAlias",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Type Alias",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Var",
      "description": {
        "fct-descr": "\u003cp\u003eA variable that can be assigned to.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "data",
        "fct-source": "src/DDC-Llvm-Syntax-Exp.html#Var",
        "fct-type": "data",
        "title": "Var"
      },
      "index": {
        "description": "variable that can be assigned to",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Var",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:AlignBytes",
      "description": {
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "AlignBytes Integer",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#Align",
        "fct-type": "function",
        "title": "AlignBytes"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "AlignBytes",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Align Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:AlignNone",
      "description": {
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "AlignNone",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#Align",
        "fct-type": "function",
        "title": "AlignNone"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "AlignNone",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Align None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:AlwaysInline",
      "description": {
        "fct-descr": "\u003cp\u003eThe inliner should attempt to inline this function into callers\n   whenever possible, ignoring any active inlining size threshold for\n   this caller.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "AlwaysInline",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#FuncAttr",
        "fct-type": "function",
        "title": "AlwaysInline"
      },
      "index": {
        "description": "The inliner should attempt to inline this function into callers whenever possible ignoring any active inlining size threshold for this caller",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "AlwaysInline",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Always Inline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:AnnotInstr",
      "description": {
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "AnnotInstr",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#AnnotInstr",
        "fct-type": "function",
        "title": "AnnotInstr"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "AnnotInstr",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Annot Instr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:Appending",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eappending\u003c/code\u003e linkage may only be applied to global variables of pointer\n  to array type. When two global variables with appending linkage are\n  linked together, the two global arrays are appended together. This is\n  the Llvm, typesafe, equivalent of having the system linker append\n  together \u003ccode\u003esections\u003c/code\u003e with identical names when .o files are linked.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Appending",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#Linkage",
        "fct-type": "function",
        "title": "Appending"
      },
      "index": {
        "description": "appending linkage may only be applied to global variables of pointer to array type When two global variables with appending linkage are linked together the two global arrays are appended together This is the Llvm typesafe equivalent of having the system linker append together sections with identical names when files are linked",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Appending",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Appending",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:Block",
      "description": {
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Block",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#Block",
        "fct-type": "function",
        "title": "Block"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Block",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ByVal",
      "description": {
        "fct-descr": "\u003cp\u003eThe pointer parameter should really be passed by value to the function.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ByVal",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#ParamAttr",
        "fct-type": "function",
        "title": "ByVal"
      },
      "index": {
        "description": "The pointer parameter should really be passed by value to the function",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ByVal",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "By Val",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:CC_Ccc",
      "description": {
        "fct-descr": "\u003cp\u003eThe C calling convention.\n   This calling convention (the default if no other calling convention is\n   specified) matches the target C calling conventions. This calling\n   convention supports varargs function calls and tolerates some mismatch in\n   the declared prototype and implemented declaration of the function (as\n   does normal C).\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "CC_Ccc",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#CallConv",
        "fct-type": "function",
        "title": "CC_Ccc"
      },
      "index": {
        "description": "The calling convention This calling convention the default if no other calling convention is specified matches the target calling conventions This calling convention supports varargs function calls and tolerates some mismatch in the declared prototype and implemented declaration of the function as does normal",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "CC_Ccc",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "CC Ccc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:CC_Coldcc",
      "description": {
        "fct-descr": "\u003cp\u003eThis calling convention attempts to make code in the caller as efficient\n   as possible under the assumption that the call is not commonly executed.\n   As such, these calls often preserve all registers so that the call does\n   not break any live ranges in the caller side. This calling convention\n   does not support varargs and requires the prototype of all callees to\n   exactly match the prototype of the function definition.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "CC_Coldcc",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#CallConv",
        "fct-type": "function",
        "title": "CC_Coldcc"
      },
      "index": {
        "description": "This calling convention attempts to make code in the caller as efficient as possible under the assumption that the call is not commonly executed As such these calls often preserve all registers so that the call does not break any live ranges in the caller side This calling convention does not support varargs and requires the prototype of all callees to exactly match the prototype of the function definition",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "CC_Coldcc",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "CC Coldcc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:CC_Fastcc",
      "description": {
        "fct-descr": "\u003cp\u003eThis calling convention attempts to make calls as fast as possible\n   (e.g. by passing things in registers). This calling convention allows\n   the target to use whatever tricks it wants to produce fast code for the\n   target, without having to conform to an externally specified ABI\n   (Application Binary Interface). Implementations of this convention should\n   allow arbitrary tail call optimization to be supported. This calling\n   convention does not support varargs and requires the prototype of al\n   callees to exactly match the prototype of the function definition.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "CC_Fastcc",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#CallConv",
        "fct-type": "function",
        "title": "CC_Fastcc"
      },
      "index": {
        "description": "This calling convention attempts to make calls as fast as possible e.g by passing things in registers This calling convention allows the target to use whatever tricks it wants to produce fast code for the target without having to conform to an externally specified ABI Application Binary Interface Implementations of this convention should allow arbitrary tail call optimization to be supported This calling convention does not support varargs and requires the prototype of al callees to exactly match the prototype of the function definition",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "CC_Fastcc",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "CC Fastcc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:CC_Ncc",
      "description": {
        "fct-descr": "\u003cp\u003eAny calling convention may be specified by number, allowing\n   target-specific calling conventions to be used. Target specific calling\n   conventions start at 64.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "CC_Ncc Int",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#CallConv",
        "fct-type": "function",
        "title": "CC_Ncc"
      },
      "index": {
        "description": "Any calling convention may be specified by number allowing target-specific calling conventions to be used Target specific calling conventions start at",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "CC_Ncc",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "CC Ncc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:CC_X86_Stdcc",
      "description": {
        "fct-descr": "\u003cp\u003eX86 Specific \u003ccode\u003eStdCall\u003c/code\u003e convention. LLVM includes a specific alias for it\n   rather than just using CC_Ncc.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "CC_X86_Stdcc",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#CallConv",
        "fct-type": "function",
        "title": "CC_X86_Stdcc"
      },
      "index": {
        "description": "X86 Specific StdCall convention LLVM includes specific alias for it rather than just using CC Ncc",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "CC_X86_Stdcc",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "CC Stdcc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:CallTypeStd",
      "description": {
        "fct-descr": "\u003cp\u003eNormal call, allocate a new stack frame.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "CallTypeStd",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#CallType",
        "fct-type": "function",
        "title": "CallTypeStd"
      },
      "index": {
        "description": "Normal call allocate new stack frame",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "CallTypeStd",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Call Type Std",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:CallTypeTail",
      "description": {
        "fct-descr": "\u003cp\u003eTail call, perform the call in the current stack frame.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "CallTypeTail",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#CallType",
        "fct-type": "function",
        "title": "CallTypeTail"
      },
      "index": {
        "description": "Tail call perform the call in the current stack frame",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "CallTypeTail",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Call Type Tail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ConvBitcast",
      "description": {
        "fct-descr": "\u003cp\u003eCast between types where no bit manipulation is needed\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ConvBitcast",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Conv",
        "fct-type": "function",
        "title": "ConvBitcast"
      },
      "index": {
        "description": "Cast between types where no bit manipulation is needed",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ConvBitcast",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Conv Bitcast",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ConvFpext",
      "description": {
        "fct-descr": "\u003cp\u003eFloat extend\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ConvFpext",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Conv",
        "fct-type": "function",
        "title": "ConvFpext"
      },
      "index": {
        "description": "Float extend",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ConvFpext",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Conv Fpext",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ConvFptosi",
      "description": {
        "fct-descr": "\u003cp\u003eFloat to signed Integer\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ConvFptosi",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Conv",
        "fct-type": "function",
        "title": "ConvFptosi"
      },
      "index": {
        "description": "Float to signed Integer",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ConvFptosi",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Conv Fptosi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ConvFptoui",
      "description": {
        "fct-descr": "\u003cp\u003eFloat to unsigned Integer\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ConvFptoui",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Conv",
        "fct-type": "function",
        "title": "ConvFptoui"
      },
      "index": {
        "description": "Float to unsigned Integer",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ConvFptoui",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Conv Fptoui",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ConvFptrunc",
      "description": {
        "fct-descr": "\u003cp\u003eFloat truncate\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ConvFptrunc",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Conv",
        "fct-type": "function",
        "title": "ConvFptrunc"
      },
      "index": {
        "description": "Float truncate",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ConvFptrunc",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Conv Fptrunc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ConvInttoptr",
      "description": {
        "fct-descr": "\u003cp\u003eInteger to Pointer\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ConvInttoptr",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Conv",
        "fct-type": "function",
        "title": "ConvInttoptr"
      },
      "index": {
        "description": "Integer to Pointer",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ConvInttoptr",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Conv Inttoptr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ConvPtrtoint",
      "description": {
        "fct-descr": "\u003cp\u003ePointer to Integer\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ConvPtrtoint",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Conv",
        "fct-type": "function",
        "title": "ConvPtrtoint"
      },
      "index": {
        "description": "Pointer to Integer",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ConvPtrtoint",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Conv Ptrtoint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ConvSext",
      "description": {
        "fct-descr": "\u003cp\u003eInteger extend (sign fill)\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ConvSext",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Conv",
        "fct-type": "function",
        "title": "ConvSext"
      },
      "index": {
        "description": "Integer extend sign fill",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ConvSext",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Conv Sext",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ConvSintofp",
      "description": {
        "fct-descr": "\u003cp\u003eSigned Int to Float\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ConvSintofp",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Conv",
        "fct-type": "function",
        "title": "ConvSintofp"
      },
      "index": {
        "description": "Signed Int to Float",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ConvSintofp",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Conv Sintofp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ConvTrunc",
      "description": {
        "fct-descr": "\u003cp\u003eInteger truncate\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ConvTrunc",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Conv",
        "fct-type": "function",
        "title": "ConvTrunc"
      },
      "index": {
        "description": "Integer truncate",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ConvTrunc",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Conv Trunc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ConvUintofp",
      "description": {
        "fct-descr": "\u003cp\u003eUnsigned Integer to Float\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ConvUintofp",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Conv",
        "fct-type": "function",
        "title": "ConvUintofp"
      },
      "index": {
        "description": "Unsigned Integer to Float",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ConvUintofp",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Conv Uintofp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ConvZext",
      "description": {
        "fct-descr": "\u003cp\u003eInteger extend (zero fill)\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ConvZext",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Conv",
        "fct-type": "function",
        "title": "ConvZext"
      },
      "index": {
        "description": "Integer extend zero fill",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ConvZext",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Conv Zext",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:Debug",
      "description": {
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Debug",
        "fct-source": "src/DDC-Llvm-Syntax-Metadata.html#Metadata",
        "fct-type": "function",
        "title": "Debug"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Debug",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Debug",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ExternWeak",
      "description": {
        "fct-descr": "\u003cp\u003eThe semantics of this linkage follow the ELF model: the symbol is weak\n  until linked, if not linked, the symbol becomes null instead of being an\n  undefined reference.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ExternWeak",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#Linkage",
        "fct-type": "function",
        "title": "ExternWeak"
      },
      "index": {
        "description": "The semantics of this linkage follow the ELF model the symbol is weak until linked if not linked the symbol becomes null instead of being an undefined reference",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ExternWeak",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Extern Weak",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:External",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003eExternallyVisible\u003c/a\u003e\u003c/code\u003e but with explicit textual form in LLVM\n   assembly.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "External",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#Linkage",
        "fct-type": "function",
        "title": "External"
      },
      "index": {
        "description": "Alias for ExternallyVisible but with explicit textual form in LLVM assembly",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "External",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "External",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ExternallyVisible",
      "description": {
        "fct-descr": "\u003cp\u003eThe symbol participates in linkage and can be used to resolve external\n   symbol references.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ExternallyVisible",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#Linkage",
        "fct-type": "function",
        "title": "ExternallyVisible"
      },
      "index": {
        "description": "The symbol participates in linkage and can be used to resolve external symbol references",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ExternallyVisible",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Externally Visible",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondFalse",
      "description": {
        "fct-descr": "\u003cp\u003eAlways yields false, regardless of operands.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "FCondFalse",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
        "fct-type": "function",
        "title": "FCondFalse"
      },
      "index": {
        "description": "Always yields false regardless of operands",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "FCondFalse",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "FCond False",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondOeq",
      "description": {
        "fct-descr": "\u003cp\u003eBoth operands are not a QNAN and op1 is equal to op2.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "FCondOeq",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
        "fct-type": "function",
        "title": "FCondOeq"
      },
      "index": {
        "description": "Both operands are not QNAN and op1 is equal to op2",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "FCondOeq",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "FCond Oeq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondOge",
      "description": {
        "fct-descr": "\u003cp\u003eBoth operands are not a QNAN and op1 is greater than or equal to op2.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "FCondOge",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
        "fct-type": "function",
        "title": "FCondOge"
      },
      "index": {
        "description": "Both operands are not QNAN and op1 is greater than or equal to op2",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "FCondOge",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "FCond Oge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondOgt",
      "description": {
        "fct-descr": "\u003cp\u003eBoth operands are not a QNAN and op1 is greater than op2.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "FCondOgt",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
        "fct-type": "function",
        "title": "FCondOgt"
      },
      "index": {
        "description": "Both operands are not QNAN and op1 is greater than op2",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "FCondOgt",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "FCond Ogt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondOle",
      "description": {
        "fct-descr": "\u003cp\u003eBoth operands are not a QNAN and op1 is less than or equal to op2.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "FCondOle",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
        "fct-type": "function",
        "title": "FCondOle"
      },
      "index": {
        "description": "Both operands are not QNAN and op1 is less than or equal to op2",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "FCondOle",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "FCond Ole",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondOlt",
      "description": {
        "fct-descr": "\u003cp\u003eBoth operands are not a QNAN and op1 is less than op2.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "FCondOlt",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
        "fct-type": "function",
        "title": "FCondOlt"
      },
      "index": {
        "description": "Both operands are not QNAN and op1 is less than op2",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "FCondOlt",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "FCond Olt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondOne",
      "description": {
        "fct-descr": "\u003cp\u003eBoth operands are not a QNAN and op1 is not equal to op2.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "FCondOne",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
        "fct-type": "function",
        "title": "FCondOne"
      },
      "index": {
        "description": "Both operands are not QNAN and op1 is not equal to op2",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "FCondOne",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "FCond One",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondOrd",
      "description": {
        "fct-descr": "\u003cp\u003eBoth operands are not a QNAN.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "FCondOrd",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
        "fct-type": "function",
        "title": "FCondOrd"
      },
      "index": {
        "description": "Both operands are not QNAN",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "FCondOrd",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "FCond Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondTrue",
      "description": {
        "fct-descr": "\u003cp\u003eAlways yields true, regardless of operands.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "FCondTrue",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
        "fct-type": "function",
        "title": "FCondTrue"
      },
      "index": {
        "description": "Always yields true regardless of operands",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "FCondTrue",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "FCond True",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondUeq",
      "description": {
        "fct-descr": "\u003cp\u003eEither operand is a QNAN or op1 is equal to op2.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "FCondUeq",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
        "fct-type": "function",
        "title": "FCondUeq"
      },
      "index": {
        "description": "Either operand is QNAN or op1 is equal to op2",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "FCondUeq",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "FCond Ueq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondUge",
      "description": {
        "fct-descr": "\u003cp\u003eEither operand is a QNAN or op1 is greater than or equal to op2.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "FCondUge",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
        "fct-type": "function",
        "title": "FCondUge"
      },
      "index": {
        "description": "Either operand is QNAN or op1 is greater than or equal to op2",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "FCondUge",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "FCond Uge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondUgt",
      "description": {
        "fct-descr": "\u003cp\u003eEither operand is a QNAN or op1 is greater than op2.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "FCondUgt",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
        "fct-type": "function",
        "title": "FCondUgt"
      },
      "index": {
        "description": "Either operand is QNAN or op1 is greater than op2",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "FCondUgt",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "FCond Ugt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondUle",
      "description": {
        "fct-descr": "\u003cp\u003eEither operand is a QNAN or op1 is less than or equal to op2.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "FCondUle",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
        "fct-type": "function",
        "title": "FCondUle"
      },
      "index": {
        "description": "Either operand is QNAN or op1 is less than or equal to op2",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "FCondUle",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "FCond Ule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondUlt",
      "description": {
        "fct-descr": "\u003cp\u003eEither operand is a QNAN or op1 is less than op2.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "FCondUlt",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
        "fct-type": "function",
        "title": "FCondUlt"
      },
      "index": {
        "description": "Either operand is QNAN or op1 is less than op2",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "FCondUlt",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "FCond Ult",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondUne",
      "description": {
        "fct-descr": "\u003cp\u003eEither operand is a QNAN or op1 is not equal to op2.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "FCondUne",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
        "fct-type": "function",
        "title": "FCondUne"
      },
      "index": {
        "description": "Either operand is QNAN or op1 is not equal to op2",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "FCondUne",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "FCond Une",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondUno",
      "description": {
        "fct-descr": "\u003cp\u003eEither operand is a QNAN.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "FCondUno",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
        "fct-type": "function",
        "title": "FCondUno"
      },
      "index": {
        "description": "Either operand is QNAN",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "FCondUno",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "FCond Uno",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FixedArgs",
      "description": {
        "fct-descr": "\u003cp\u003eFixed amount of arguments.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "FixedArgs",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#ParamListType",
        "fct-type": "function",
        "title": "FixedArgs"
      },
      "index": {
        "description": "Fixed amount of arguments",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "FixedArgs",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Fixed Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:Function",
      "description": {
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Function",
        "fct-source": "src/DDC-Llvm-Syntax-Function.html#Function",
        "fct-type": "function",
        "title": "Function"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Function",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FunctionDecl",
      "description": {
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "FunctionDecl",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#FunctionDecl",
        "fct-type": "function",
        "title": "FunctionDecl"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "FunctionDecl",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Function Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:GlobalExternal",
      "description": {
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "GlobalExternal Var",
        "fct-source": "src/DDC-Llvm-Syntax-Module.html#Global",
        "fct-type": "function",
        "title": "GlobalExternal"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "GlobalExternal",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Global External",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:GlobalStatic",
      "description": {
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "GlobalStatic Var Static",
        "fct-source": "src/DDC-Llvm-Syntax-Module.html#Global",
        "fct-type": "function",
        "title": "GlobalStatic"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "GlobalStatic",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Global Static",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:IBranch",
      "description": {
        "fct-descr": "\u003cp\u003eUnconditional branch to the target label.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "IBranch Label",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
        "fct-type": "function",
        "title": "IBranch"
      },
      "index": {
        "description": "Unconditional branch to the target label",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "IBranch",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "IBranch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:IBranchIf",
      "description": {
        "fct-descr": "\u003cp\u003eConditional branch.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "IBranchIf Exp Label Label",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
        "fct-type": "function",
        "title": "IBranchIf"
      },
      "index": {
        "description": "Conditional branch",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "IBranchIf",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "IBranch If",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ICall",
      "description": {
        "fct-descr": "\u003cp\u003eCall a function. \n   Only NoReturn, NoUnwind and ReadNone attributes are valid.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ICall (Maybe Var) CallType (Maybe CallConv) Type Name [Exp] [FuncAttr]",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
        "fct-type": "function",
        "title": "ICall"
      },
      "index": {
        "description": "Call function Only NoReturn NoUnwind and ReadNone attributes are valid",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ICall",
        "normalized": "ICall(Maybe Var)CallType(Maybe CallConv)Type Name[Exp][FuncAttr]",
        "package": "ddc-core-llvm",
        "partial": "ICall",
        "signature": "ICall(Maybe Var)CallType(Maybe CallConv)Type Name[Exp][FuncAttr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:IComment",
      "description": {
        "fct-descr": "\u003cp\u003eComment meta-instruction.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "IComment [String]",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
        "fct-type": "function",
        "title": "IComment"
      },
      "index": {
        "description": "Comment meta-instruction",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "IComment",
        "normalized": "IComment[String]",
        "package": "ddc-core-llvm",
        "partial": "IComment",
        "signature": "IComment[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ICondEq",
      "description": {
        "fct-descr": "\u003cp\u003eEqual (Signed and Unsigned)\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ICondEq",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#ICond",
        "fct-type": "function",
        "title": "ICondEq"
      },
      "index": {
        "description": "Equal Signed and Unsigned",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ICondEq",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "ICond Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ICondNe",
      "description": {
        "fct-descr": "\u003cp\u003eNot equal (Signed and Unsigned)\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ICondNe",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#ICond",
        "fct-type": "function",
        "title": "ICondNe"
      },
      "index": {
        "description": "Not equal Signed and Unsigned",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ICondNe",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "ICond Ne",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ICondSge",
      "description": {
        "fct-descr": "\u003cp\u003eSigned greater than or equal\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ICondSge",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#ICond",
        "fct-type": "function",
        "title": "ICondSge"
      },
      "index": {
        "description": "Signed greater than or equal",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ICondSge",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "ICond Sge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ICondSgt",
      "description": {
        "fct-descr": "\u003cp\u003eSigned greater than\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ICondSgt",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#ICond",
        "fct-type": "function",
        "title": "ICondSgt"
      },
      "index": {
        "description": "Signed greater than",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ICondSgt",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "ICond Sgt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ICondSle",
      "description": {
        "fct-descr": "\u003cp\u003eSigned less than or equal\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ICondSle",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#ICond",
        "fct-type": "function",
        "title": "ICondSle"
      },
      "index": {
        "description": "Signed less than or equal",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ICondSle",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "ICond Sle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ICondSlt",
      "description": {
        "fct-descr": "\u003cp\u003eSigned less than\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ICondSlt",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#ICond",
        "fct-type": "function",
        "title": "ICondSlt"
      },
      "index": {
        "description": "Signed less than",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ICondSlt",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "ICond Slt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ICondUge",
      "description": {
        "fct-descr": "\u003cp\u003eUnsigned greater than or equal\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ICondUge",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#ICond",
        "fct-type": "function",
        "title": "ICondUge"
      },
      "index": {
        "description": "Unsigned greater than or equal",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ICondUge",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "ICond Uge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ICondUgt",
      "description": {
        "fct-descr": "\u003cp\u003eUnsigned greater than\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ICondUgt",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#ICond",
        "fct-type": "function",
        "title": "ICondUgt"
      },
      "index": {
        "description": "Unsigned greater than",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ICondUgt",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "ICond Ugt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ICondUle",
      "description": {
        "fct-descr": "\u003cp\u003eUnsigned less than or equal\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ICondUle",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#ICond",
        "fct-type": "function",
        "title": "ICondUle"
      },
      "index": {
        "description": "Unsigned less than or equal",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ICondUle",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "ICond Ule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ICondUlt",
      "description": {
        "fct-descr": "\u003cp\u003eUnsigned less than\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ICondUlt",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#ICond",
        "fct-type": "function",
        "title": "ICondUlt"
      },
      "index": {
        "description": "Unsigned less than",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ICondUlt",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "ICond Ult",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:IConv",
      "description": {
        "fct-descr": "\u003cp\u003eCast the variable from to the to type. This is an abstraction of three\n   cast operators in Llvm, inttoptr, prttoint and bitcast.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "IConv Var Conv Exp",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
        "fct-type": "function",
        "title": "IConv"
      },
      "index": {
        "description": "Cast the variable from to the to type This is an abstraction of three cast operators in Llvm inttoptr prttoint and bitcast",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "IConv",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "IConv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:IFCmp",
      "description": {
        "fct-descr": "\u003cp\u003eFloating-point comparison.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "IFCmp Var FCond Exp Exp",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
        "fct-type": "function",
        "title": "IFCmp"
      },
      "index": {
        "description": "Floating-point comparison",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "IFCmp",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "IFCmp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:IICmp",
      "description": {
        "fct-descr": "\u003cp\u003eInteger comparison.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "IICmp Var ICond Exp Exp",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
        "fct-type": "function",
        "title": "IICmp"
      },
      "index": {
        "description": "Integer comparison",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "IICmp",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "IICmp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ILoad",
      "description": {
        "fct-descr": "\u003cp\u003eLoad a value from memory.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ILoad Var Exp",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
        "fct-type": "function",
        "title": "ILoad"
      },
      "index": {
        "description": "Load value from memory",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ILoad",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "ILoad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:INop",
      "description": {
        "fct-descr": "\u003cp\u003eNo operation.\n   This isn't accepted by the real LLVM compiler.\n   INop instructions are erased by the \u003ccode\u003eClean\u003c/code\u003e transform.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "INop",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
        "fct-type": "function",
        "title": "INop"
      },
      "index": {
        "description": "No operation This isn accepted by the real LLVM compiler INop instructions are erased by the Clean transform",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "INop",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "INop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:IOp",
      "description": {
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "IOp Var Op Exp Exp",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
        "fct-type": "function",
        "title": "IOp"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "IOp",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "IOp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:IPhi",
      "description": {
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "IPhi Var [(Exp, Label)]",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
        "fct-type": "function",
        "title": "IPhi"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "IPhi",
        "normalized": "IPhi Var[(Exp,Label)]",
        "package": "ddc-core-llvm",
        "partial": "IPhi",
        "signature": "IPhi Var[(Exp,Label)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:IReturn",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a result.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "IReturn (Maybe Exp)",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
        "fct-type": "function",
        "title": "IReturn"
      },
      "index": {
        "description": "Return result",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "IReturn",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "IReturn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ISet",
      "description": {
        "fct-descr": "\u003cp\u003eSet meta instruction v1 = value.\n   This isn't accepted by the real LLVM compiler.\n   ISet instructions are erased by the \u003ccode\u003eClean\u003c/code\u003e transform.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ISet Var Exp",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
        "fct-type": "function",
        "title": "ISet"
      },
      "index": {
        "description": "Set meta instruction v1 value This isn accepted by the real LLVM compiler ISet instructions are erased by the Clean transform",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ISet",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "ISet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:IStore",
      "description": {
        "fct-descr": "\u003cp\u003eStore a value to memory.\n   First expression gives the destination pointer.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "IStore Exp Exp",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
        "fct-type": "function",
        "title": "IStore"
      },
      "index": {
        "description": "Store value to memory First expression gives the destination pointer",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "IStore",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "IStore",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ISwitch",
      "description": {
        "fct-descr": "\u003cp\u003eMutliway branch.\n   If scruitniee matches one of the literals in the list then jump\n   to the corresponding label, otherwise jump to the default.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ISwitch Exp Label [(Lit, Label)]",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
        "fct-type": "function",
        "title": "ISwitch"
      },
      "index": {
        "description": "Mutliway branch If scruitniee matches one of the literals in the list then jump to the corresponding label otherwise jump to the default",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ISwitch",
        "normalized": "ISwitch Exp Label[(Lit,Label)]",
        "package": "ddc-core-llvm",
        "partial": "ISwitch",
        "signature": "ISwitch Exp Label[(Lit,Label)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:IUnreachable",
      "description": {
        "fct-descr": "\u003cp\u003eInforms the optimizer that instructions after this point are unreachable.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "IUnreachable",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
        "fct-type": "function",
        "title": "IUnreachable"
      },
      "index": {
        "description": "Informs the optimizer that instructions after this point are unreachable",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "IUnreachable",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "IUnreachable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:InReg",
      "description": {
        "fct-descr": "\u003cp\u003eThe parameter or return value should be treated in a special target-dependent\n   fashion during while emitting code for a function call or return (usually,\n   by putting it in a register as opposed to memory).\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "InReg",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#ParamAttr",
        "fct-type": "function",
        "title": "InReg"
      },
      "index": {
        "description": "The parameter or return value should be treated in special target-dependent fashion during while emitting code for function call or return usually by putting it in register as opposed to memory",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "InReg",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "In Reg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:InlineHint",
      "description": {
        "fct-descr": "\u003cp\u003eThe source code contained a hint that inlining this function is\n   desirable (such as the \"inline\" keyword in C/C++). \n   It is just a hint; it imposes no requirements on the inliner.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "InlineHint",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#FuncAttr",
        "fct-type": "function",
        "title": "InlineHint"
      },
      "index": {
        "description": "The source code contained hint that inlining this function is desirable such as the inline keyword in It is just hint it imposes no requirements on the inliner",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "InlineHint",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Inline Hint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:Internal",
      "description": {
        "fct-descr": "\u003cp\u003eGlobal values with internal linkage are only directly accessible by\n  objects in the current module. In particular, linking code into a module\n  with an internal global value may cause the internal to be renamed as\n  necessary to avoid collisions. Because the symbol is internal to the\n  module, all references can be updated. This corresponds to the notion\n  of the \u003ccode\u003estatic\u003c/code\u003e keyword in C.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Internal",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#Linkage",
        "fct-type": "function",
        "title": "Internal"
      },
      "index": {
        "description": "Global values with internal linkage are only directly accessible by objects in the current module In particular linking code into module with an internal global value may cause the internal to be renamed as necessary to avoid collisions Because the symbol is internal to the module all references can be updated This corresponds to the notion of the static keyword in",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Internal",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:Label",
      "description": {
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Label String",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#Label",
        "fct-type": "function",
        "title": "Label"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Label",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:LinkOnce",
      "description": {
        "fct-descr": "\u003cp\u003eGlobals with \u003ccode\u003elinkonce\u003c/code\u003e linkage are merged with other globals of the\n  same name when linkage occurs. This is typically used to implement\n  inline functions, templates, or other code which must be generated\n  in each translation unit that uses it. Unreferenced linkonce globals are\n  allowed to be discarded.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "LinkOnce",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#Linkage",
        "fct-type": "function",
        "title": "LinkOnce"
      },
      "index": {
        "description": "Globals with linkonce linkage are merged with other globals of the same name when linkage occurs This is typically used to implement inline functions templates or other code which must be generated in each translation unit that uses it Unreferenced linkonce globals are allowed to be discarded",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "LinkOnce",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Link Once",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:LitFloat",
      "description": {
        "fct-descr": "\u003cp\u003eA floating-point literal.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "LitFloat Type Double",
        "fct-source": "src/DDC-Llvm-Syntax-Exp.html#Lit",
        "fct-type": "function",
        "title": "LitFloat"
      },
      "index": {
        "description": "floating-point literal",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "LitFloat",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Lit Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:LitInt",
      "description": {
        "fct-descr": "\u003cp\u003eAn integer literal\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "LitInt Type Integer",
        "fct-source": "src/DDC-Llvm-Syntax-Exp.html#Lit",
        "fct-type": "function",
        "title": "LitInt"
      },
      "index": {
        "description": "An integer literal",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "LitInt",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Lit Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:LitNull",
      "description": {
        "fct-descr": "\u003cp\u003eA null pointer literal.\n   Only applicable to pointer types\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "LitNull Type",
        "fct-source": "src/DDC-Llvm-Syntax-Exp.html#Lit",
        "fct-type": "function",
        "title": "LitNull"
      },
      "index": {
        "description": "null pointer literal Only applicable to pointer types",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "LitNull",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Lit Null",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:LitUndef",
      "description": {
        "fct-descr": "\u003cp\u003eA completely undefined value.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "LitUndef Type",
        "fct-source": "src/DDC-Llvm-Syntax-Exp.html#Lit",
        "fct-type": "function",
        "title": "LitUndef"
      },
      "index": {
        "description": "completely undefined value",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "LitUndef",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Lit Undef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:MDecl",
      "description": {
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "MDecl MRef Metadata",
        "fct-source": "src/DDC-Llvm-Syntax-Metadata.html#MDecl",
        "fct-type": "function",
        "title": "MDecl"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "MDecl",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "MDecl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:MRef",
      "description": {
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "MRef Int",
        "fct-source": "src/DDC-Llvm-Syntax-Metadata.html#MRef",
        "fct-type": "function",
        "title": "MRef"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "MRef",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "MRef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:Module",
      "description": {
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Module",
        "fct-source": "src/DDC-Llvm-Syntax-Module.html#Module",
        "fct-type": "function",
        "title": "Module"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Module",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Module",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:Naked",
      "description": {
        "fct-descr": "\u003cp\u003eDisables prologue / epilogue emission for the function.\n   This can have very system-specific consequences.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Naked",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#FuncAttr",
        "fct-type": "function",
        "title": "Naked"
      },
      "index": {
        "description": "Disables prologue epilogue emission for the function This can have very system-specific consequences",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Naked",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Naked",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:NameGlobal",
      "description": {
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "NameGlobal String",
        "fct-source": "src/DDC-Llvm-Syntax-Exp.html#Name",
        "fct-type": "function",
        "title": "NameGlobal"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "NameGlobal",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Name Global",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:NameLocal",
      "description": {
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "NameLocal String",
        "fct-source": "src/DDC-Llvm-Syntax-Exp.html#Name",
        "fct-type": "function",
        "title": "NameLocal"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "NameLocal",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Name Local",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:Nest",
      "description": {
        "fct-descr": "\u003cp\u003eThe pointer parameter can be excised using the trampoline intrinsics.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Nest",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#ParamAttr",
        "fct-type": "function",
        "title": "Nest"
      },
      "index": {
        "description": "The pointer parameter can be excised using the trampoline intrinsics",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Nest",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Nest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:NoAlias",
      "description": {
        "fct-descr": "\u003cp\u003eThe pointer does not alias any global or any other parameter.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "NoAlias",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#ParamAttr",
        "fct-type": "function",
        "title": "NoAlias"
      },
      "index": {
        "description": "The pointer does not alias any global or any other parameter",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "NoAlias",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "No Alias",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:NoCapture",
      "description": {
        "fct-descr": "\u003cp\u003eThe callee does not make any copies of the pointer that outlive the callee itself.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "NoCapture",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#ParamAttr",
        "fct-type": "function",
        "title": "NoCapture"
      },
      "index": {
        "description": "The callee does not make any copies of the pointer that outlive the callee itself",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "NoCapture",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "No Capture",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:NoImplicitFloat",
      "description": {
        "fct-descr": "\u003cp\u003eDisables implicit floating point instructions.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "NoImplicitFloat",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#FuncAttr",
        "fct-type": "function",
        "title": "NoImplicitFloat"
      },
      "index": {
        "description": "Disables implicit floating point instructions",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "NoImplicitFloat",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "No Implicit Float",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:NoInline",
      "description": {
        "fct-descr": "\u003cp\u003eThe inliner should never inline this function in any situation. \n   This attribute may not be used together with the alwaysinline attribute.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "NoInline",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#FuncAttr",
        "fct-type": "function",
        "title": "NoInline"
      },
      "index": {
        "description": "The inliner should never inline this function in any situation This attribute may not be used together with the alwaysinline attribute",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "NoInline",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "No Inline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:NoRedZone",
      "description": {
        "fct-descr": "\u003cp\u003eThe code generator should not use a red zone, even if the\n   target-specific ABI normally permits it.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "NoRedZone",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#FuncAttr",
        "fct-type": "function",
        "title": "NoRedZone"
      },
      "index": {
        "description": "The code generator should not use red zone even if the target-specific ABI normally permits it",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "NoRedZone",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "No Red Zone",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:NoReturn",
      "description": {
        "fct-descr": "\u003cp\u003eThe function never returns normally. \n   This produces undefined behavior at runtime if the function ever does\n   dynamically return.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "NoReturn",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#FuncAttr",
        "fct-type": "function",
        "title": "NoReturn"
      },
      "index": {
        "description": "The function never returns normally This produces undefined behavior at runtime if the function ever does dynamically return",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "NoReturn",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "No Return",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:NoUnwind",
      "description": {
        "fct-descr": "\u003cp\u003eThe function never returns with an unwind or exceptional control flow. \n   If the function does unwind, its runtime behavior is undefined.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "NoUnwind",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#FuncAttr",
        "fct-type": "function",
        "title": "NoUnwind"
      },
      "index": {
        "description": "The function never returns with an unwind or exceptional control flow If the function does unwind its runtime behavior is undefined",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "NoUnwind",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "No Unwind",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpAShr",
      "description": {
        "fct-descr": "\u003cp\u003eArithmetic shift right.\n   The most significant bits of the result will be equal to the\n   sign bit of the left operand.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "OpAShr",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Op",
        "fct-type": "function",
        "title": "OpAShr"
      },
      "index": {
        "description": "Arithmetic shift right The most significant bits of the result will be equal to the sign bit of the left operand",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "OpAShr",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Op AShr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpAdd",
      "description": {
        "fct-descr": "\u003cp\u003eadd two integers, floating point or vector values.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "OpAdd",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Op",
        "fct-type": "function",
        "title": "OpAdd"
      },
      "index": {
        "description": "add two integers floating point or vector values",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "OpAdd",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Op Add",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpAnd",
      "description": {
        "fct-descr": "\u003cp\u003eAND bitwise logical operation.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "OpAnd",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Op",
        "fct-type": "function",
        "title": "OpAnd"
      },
      "index": {
        "description": "AND bitwise logical operation",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "OpAnd",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Op And",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpFAdd",
      "description": {
        "fct-descr": "\u003cp\u003eadd two floating point or vector values.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "OpFAdd",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Op",
        "fct-type": "function",
        "title": "OpFAdd"
      },
      "index": {
        "description": "add two floating point or vector values",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "OpFAdd",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Op FAdd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpFDiv",
      "description": {
        "fct-descr": "\u003cp\u003edivide ...\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "OpFDiv",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Op",
        "fct-type": "function",
        "title": "OpFDiv"
      },
      "index": {
        "description": "divide",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "OpFDiv",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Op FDiv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpFMul",
      "description": {
        "fct-descr": "\u003cp\u003emultiply ...\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "OpFMul",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Op",
        "fct-type": "function",
        "title": "OpFMul"
      },
      "index": {
        "description": "multiply",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "OpFMul",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Op FMul",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpFRem",
      "description": {
        "fct-descr": "\u003cp\u003eremainder ...\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "OpFRem",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Op",
        "fct-type": "function",
        "title": "OpFRem"
      },
      "index": {
        "description": "remainder",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "OpFRem",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Op FRem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpFSub",
      "description": {
        "fct-descr": "\u003cp\u003esubtract two ...\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "OpFSub",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Op",
        "fct-type": "function",
        "title": "OpFSub"
      },
      "index": {
        "description": "subtract two",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "OpFSub",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Op FSub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpLShr",
      "description": {
        "fct-descr": "\u003cp\u003eLogical shift right\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "OpLShr",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Op",
        "fct-type": "function",
        "title": "OpLShr"
      },
      "index": {
        "description": "Logical shift right",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "OpLShr",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Op LShr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpMul",
      "description": {
        "fct-descr": "\u003cp\u003emultiply ..\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "OpMul",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Op",
        "fct-type": "function",
        "title": "OpMul"
      },
      "index": {
        "description": "multiply",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "OpMul",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Op Mul",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpOr",
      "description": {
        "fct-descr": "\u003cp\u003eOR bitwise logical operation.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "OpOr",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Op",
        "fct-type": "function",
        "title": "OpOr"
      },
      "index": {
        "description": "OR bitwise logical operation",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "OpOr",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Op Or",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpSDiv",
      "description": {
        "fct-descr": "\u003cp\u003esigned integer ..\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "OpSDiv",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Op",
        "fct-type": "function",
        "title": "OpSDiv"
      },
      "index": {
        "description": "signed integer",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "OpSDiv",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Op SDiv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpSRem",
      "description": {
        "fct-descr": "\u003cp\u003esigned ...\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "OpSRem",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Op",
        "fct-type": "function",
        "title": "OpSRem"
      },
      "index": {
        "description": "signed",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "OpSRem",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Op SRem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpShl",
      "description": {
        "fct-descr": "\u003cp\u003eLeft shift.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "OpShl",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Op",
        "fct-type": "function",
        "title": "OpShl"
      },
      "index": {
        "description": "Left shift",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "OpShl",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Op Shl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpSub",
      "description": {
        "fct-descr": "\u003cp\u003esubtract two ...\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "OpSub",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Op",
        "fct-type": "function",
        "title": "OpSub"
      },
      "index": {
        "description": "subtract two",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "OpSub",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Op Sub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpUDiv",
      "description": {
        "fct-descr": "\u003cp\u003eunsigned integer or vector division.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "OpUDiv",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Op",
        "fct-type": "function",
        "title": "OpUDiv"
      },
      "index": {
        "description": "unsigned integer or vector division",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "OpUDiv",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Op UDiv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpURem",
      "description": {
        "fct-descr": "\u003cp\u003eunsigned integer or vector remainder\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "OpURem",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Op",
        "fct-type": "function",
        "title": "OpURem"
      },
      "index": {
        "description": "unsigned integer or vector remainder",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "OpURem",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Op URem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpXor",
      "description": {
        "fct-descr": "\u003cp\u003eXOR bitwise logical operation.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "OpXor",
        "fct-source": "src/DDC-Llvm-Syntax-Prim.html#Op",
        "fct-type": "function",
        "title": "OpXor"
      },
      "index": {
        "description": "XOR bitwise logical operation",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "OpXor",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Op Xor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OptSize",
      "description": {
        "fct-descr": "\u003cp\u003eSuggests that optimization passes and code generator passes make choices\n   that keep the code size of this function low, and otherwise do\n   optimizations specifically to reduce code size.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "OptSize",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#FuncAttr",
        "fct-type": "function",
        "title": "OptSize"
      },
      "index": {
        "description": "Suggests that optimization passes and code generator passes make choices that keep the code size of this function low and otherwise do optimizations specifically to reduce code size",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "OptSize",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Opt Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:Param",
      "description": {
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Param",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#Param",
        "fct-type": "function",
        "title": "Param"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Param",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ReadNone",
      "description": {
        "fct-descr": "\u003cp\u003eThe function computes its result (or decides to unwind an exception) \n   based strictly on its arguments, without\n   dereferencing any pointer arguments or otherwise accessing any mutable\n   state (e.g. memory, control registers, etc) visible to caller functions.\n   It does not write through any pointer arguments (including byval\n   arguments) and never changes any state visible to callers. This means\n   that it cannot unwind exceptions by calling the C++ exception throwing\n   methods, but could use the unwind instruction.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ReadNone",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#FuncAttr",
        "fct-type": "function",
        "title": "ReadNone"
      },
      "index": {
        "description": "The function computes its result or decides to unwind an exception based strictly on its arguments without dereferencing any pointer arguments or otherwise accessing any mutable state e.g memory control registers etc visible to caller functions It does not write through any pointer arguments including byval arguments and never changes any state visible to callers This means that it cannot unwind exceptions by calling the exception throwing methods but could use the unwind instruction",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ReadNone",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Read None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ReadOnly",
      "description": {
        "fct-descr": "\u003cp\u003eThe function does not write through any\n   pointer arguments (including byval arguments) or otherwise modify any\n   state (e.g. memory, control registers, etc) visible to caller functions.\n   It may dereference pointer arguments and read state that may be set in\n   the caller. A readonly function always returns the same value (or unwinds\n   an exception identically) when called with the same set of arguments and\n   global state. It cannot unwind an exception by calling the C++ exception\n   throwing methods, but may use the unwind instruction.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ReadOnly",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#FuncAttr",
        "fct-type": "function",
        "title": "ReadOnly"
      },
      "index": {
        "description": "The function does not write through any pointer arguments including byval arguments or otherwise modify any state e.g memory control registers etc visible to caller functions It may dereference pointer arguments and read state that may be set in the caller readonly function always returns the same value or unwinds an exception identically when called with the same set of arguments and global state It cannot unwind an exception by calling the exception throwing methods but may use the unwind instruction",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ReadOnly",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Read Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:SRet",
      "description": {
        "fct-descr": "\u003cp\u003eThe pointer parameter specifies the address of a structure that is the\n   return value of the function in the source program.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "SRet",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#ParamAttr",
        "fct-type": "function",
        "title": "SRet"
      },
      "index": {
        "description": "The pointer parameter specifies the address of structure that is the return value of the function in the source program",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "SRet",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "SRet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:SectionAuto",
      "description": {
        "fct-descr": "\u003cp\u003eLet the LLVM decide what section to put this in.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "SectionAuto",
        "fct-source": "src/DDC-Llvm-Syntax-Function.html#Section",
        "fct-type": "function",
        "title": "SectionAuto"
      },
      "index": {
        "description": "Let the LLVM decide what section to put this in",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "SectionAuto",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Section Auto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:SectionSpecific",
      "description": {
        "fct-descr": "\u003cp\u003ePut it in this specific section.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "SectionSpecific String",
        "fct-source": "src/DDC-Llvm-Syntax-Function.html#Section",
        "fct-type": "function",
        "title": "SectionSpecific"
      },
      "index": {
        "description": "Put it in this specific section",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "SectionSpecific",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Section Specific",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:SignExt",
      "description": {
        "fct-descr": "\u003cp\u003eThe parameter or return value should be sign-extended to a 32-bit value\n   by the caller (for a parameter) or the callee (for a return value).\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "SignExt",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#ParamAttr",
        "fct-type": "function",
        "title": "SignExt"
      },
      "index": {
        "description": "The parameter or return value should be sign-extended to bit value by the caller for parameter or the callee for return value",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "SignExt",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Sign Ext",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:Ssp",
      "description": {
        "fct-descr": "\u003cp\u003eThe function should emit a stack smashing protector. \n   It is in the form of a \"canary\"&#8212;a random value placed on the\n   stack before the local variables that's checked upon return from the\n   function to see if it has been overwritten. A heuristic is used to\n   determine if a function needs stack protectors or not.\n   If a function that has an ssp attribute is inlined into a function that\n   doesn't have an ssp attribute, then the resulting function will have an\n   ssp attribute.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Ssp",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#FuncAttr",
        "fct-type": "function",
        "title": "Ssp"
      },
      "index": {
        "description": "The function should emit stack smashing protector It is in the form of canary random value placed on the stack before the local variables that checked upon return from the function to see if it has been overwritten heuristic is used to determine if function needs stack protectors or not If function that has an ssp attribute is inlined into function that doesn have an ssp attribute then the resulting function will have an ssp attribute",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Ssp",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Ssp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:SspReq",
      "description": {
        "fct-descr": "\u003cp\u003eThe function should always emit a stack smashing protector. \n   This overrides the ssp function attribute.\n   If a function that has an sspreq attribute is inlined into a function\n   that doesn't have an sspreq attribute or which has an ssp attribute,\n   then the resulting function will have an sspreq attribute.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "SspReq",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#FuncAttr",
        "fct-type": "function",
        "title": "SspReq"
      },
      "index": {
        "description": "The function should always emit stack smashing protector This overrides the ssp function attribute If function that has an sspreq attribute is inlined into function that doesn have an sspreq attribute or which has an ssp attribute then the resulting function will have an sspreq attribute",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "SspReq",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Ssp Req",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:StaticAdd",
      "description": {
        "fct-descr": "\u003cp\u003eConstant addition operation.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "StaticAdd Static Static",
        "fct-source": "src/DDC-Llvm-Syntax-Module.html#Static",
        "fct-type": "function",
        "title": "StaticAdd"
      },
      "index": {
        "description": "Constant addition operation",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "StaticAdd",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Static Add",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:StaticArray",
      "description": {
        "fct-descr": "\u003cp\u003eA static array.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "StaticArray [Static] Type",
        "fct-source": "src/DDC-Llvm-Syntax-Module.html#Static",
        "fct-type": "function",
        "title": "StaticArray"
      },
      "index": {
        "description": "static array",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "StaticArray",
        "normalized": "StaticArray[Static]Type",
        "package": "ddc-core-llvm",
        "partial": "Static Array",
        "signature": "StaticArray[Static]Type"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:StaticBitc",
      "description": {
        "fct-descr": "\u003cp\u003ePointer to Pointer conversion.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "StaticBitc Static Type",
        "fct-source": "src/DDC-Llvm-Syntax-Module.html#Static",
        "fct-type": "function",
        "title": "StaticBitc"
      },
      "index": {
        "description": "Pointer to Pointer conversion",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "StaticBitc",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Static Bitc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:StaticComment",
      "description": {
        "fct-descr": "\u003cp\u003eA comment in a static section.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "StaticComment String",
        "fct-source": "src/DDC-Llvm-Syntax-Module.html#Static",
        "fct-type": "function",
        "title": "StaticComment"
      },
      "index": {
        "description": "comment in static section",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "StaticComment",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Static Comment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:StaticLit",
      "description": {
        "fct-descr": "\u003cp\u003eA static variant of a literal value.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "StaticLit Lit",
        "fct-source": "src/DDC-Llvm-Syntax-Module.html#Static",
        "fct-type": "function",
        "title": "StaticLit"
      },
      "index": {
        "description": "static variant of literal value",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "StaticLit",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Static Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:StaticPointer",
      "description": {
        "fct-descr": "\u003cp\u003eA pointer to other data.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "StaticPointer Var",
        "fct-source": "src/DDC-Llvm-Syntax-Module.html#Static",
        "fct-type": "function",
        "title": "StaticPointer"
      },
      "index": {
        "description": "pointer to other data",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "StaticPointer",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Static Pointer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:StaticPtoI",
      "description": {
        "fct-descr": "\u003cp\u003ePointer to Integer conversion.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "StaticPtoI Static Type",
        "fct-source": "src/DDC-Llvm-Syntax-Module.html#Static",
        "fct-type": "function",
        "title": "StaticPtoI"
      },
      "index": {
        "description": "Pointer to Integer conversion",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "StaticPtoI",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Static Pto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:StaticStr",
      "description": {
        "fct-descr": "\u003cp\u003eDefines a static \u003ccode\u003eLMString\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "StaticStr String Type",
        "fct-source": "src/DDC-Llvm-Syntax-Module.html#Static",
        "fct-type": "function",
        "title": "StaticStr"
      },
      "index": {
        "description": "Defines static LMString",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "StaticStr",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Static Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:StaticStruct",
      "description": {
        "fct-descr": "\u003cp\u003eA static structure type.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "StaticStruct [Static] Type",
        "fct-source": "src/DDC-Llvm-Syntax-Module.html#Static",
        "fct-type": "function",
        "title": "StaticStruct"
      },
      "index": {
        "description": "static structure type",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "StaticStruct",
        "normalized": "StaticStruct[Static]Type",
        "package": "ddc-core-llvm",
        "partial": "Static Struct",
        "signature": "StaticStruct[Static]Type"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:StaticSub",
      "description": {
        "fct-descr": "\u003cp\u003eConstant subtraction operation.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "StaticSub Static Static",
        "fct-source": "src/DDC-Llvm-Syntax-Module.html#Static",
        "fct-type": "function",
        "title": "StaticSub"
      },
      "index": {
        "description": "Constant subtraction operation",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "StaticSub",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Static Sub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:StaticUninitType",
      "description": {
        "fct-descr": "\u003cp\u003eFor uninitialised data.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "StaticUninitType Type",
        "fct-source": "src/DDC-Llvm-Syntax-Module.html#Static",
        "fct-type": "function",
        "title": "StaticUninitType"
      },
      "index": {
        "description": "For uninitialised data",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "StaticUninitType",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Static Uninit Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:TAlias",
      "description": {
        "fct-descr": "\u003cp\u003eA type alias.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "TAlias TypeAlias",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#Type",
        "fct-type": "function",
        "title": "TAlias"
      },
      "index": {
        "description": "type alias",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "TAlias",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "TAlias",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:TArray",
      "description": {
        "fct-descr": "\u003cp\u003eAn array of things.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "TArray Integer Type",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#Type",
        "fct-type": "function",
        "title": "TArray"
      },
      "index": {
        "description": "An array of things",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "TArray",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "TArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:TDouble",
      "description": {
        "fct-descr": "\u003cp\u003e64-bit floating point\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "TDouble",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#Type",
        "fct-type": "function",
        "title": "TDouble"
      },
      "index": {
        "description": "bit floating point",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "TDouble",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "TDouble",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:TFloat",
      "description": {
        "fct-descr": "\u003cp\u003e32-bit floating point\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "TFloat",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#Type",
        "fct-type": "function",
        "title": "TFloat"
      },
      "index": {
        "description": "bit floating point",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "TFloat",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "TFloat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:TFloat128",
      "description": {
        "fct-descr": "\u003cp\u003e128 bit floating point\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "TFloat128",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#Type",
        "fct-type": "function",
        "title": "TFloat128"
      },
      "index": {
        "description": "bit floating point",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "TFloat128",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "TFloat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:TFloat80",
      "description": {
        "fct-descr": "\u003cp\u003e80 bit (x86 only) floating point\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "TFloat80",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#Type",
        "fct-type": "function",
        "title": "TFloat80"
      },
      "index": {
        "description": "bit x86 only floating point",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "TFloat80",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "TFloat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:TFunction",
      "description": {
        "fct-descr": "\u003cp\u003eFunction type, used to create pointers to functions.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "TFunction FunctionDecl",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#Type",
        "fct-type": "function",
        "title": "TFunction"
      },
      "index": {
        "description": "Function type used to create pointers to functions",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "TFunction",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "TFunction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:TInt",
      "description": {
        "fct-descr": "\u003cp\u003eAn integer with a given width in bits.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "TInt Integer",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#Type",
        "fct-type": "function",
        "title": "TInt"
      },
      "index": {
        "description": "An integer with given width in bits",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "TInt",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "TInt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:TLabel",
      "description": {
        "fct-descr": "\u003cp\u003eA block label.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "TLabel",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#Type",
        "fct-type": "function",
        "title": "TLabel"
      },
      "index": {
        "description": "block label",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "TLabel",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "TLabel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:TPointer",
      "description": {
        "fct-descr": "\u003cp\u003eA pointer to another type of thing.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "TPointer Type",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#Type",
        "fct-type": "function",
        "title": "TPointer"
      },
      "index": {
        "description": "pointer to another type of thing",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "TPointer",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "TPointer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:TStruct",
      "description": {
        "fct-descr": "\u003cp\u003eA structure type.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "TStruct [Type]",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#Type",
        "fct-type": "function",
        "title": "TStruct"
      },
      "index": {
        "description": "structure type",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "TStruct",
        "normalized": "TStruct[Type]",
        "package": "ddc-core-llvm",
        "partial": "TStruct",
        "signature": "TStruct[Type]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:TVoid",
      "description": {
        "fct-descr": "\u003cp\u003eVoid type\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "TVoid",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#Type",
        "fct-type": "function",
        "title": "TVoid"
      },
      "index": {
        "description": "Void type",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "TVoid",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "TVoid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:Tbaa",
      "description": {
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Tbaa MDNode",
        "fct-source": "src/DDC-Llvm-Syntax-Metadata.html#Metadata",
        "fct-type": "function",
        "title": "Tbaa"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Tbaa",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Tbaa",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:TypeAlias",
      "description": {
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "TypeAlias String Type",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#TypeAlias",
        "fct-type": "function",
        "title": "TypeAlias"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "TypeAlias",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Type Alias",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:Var",
      "description": {
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Var Name Type",
        "fct-source": "src/DDC-Llvm-Syntax-Exp.html#Var",
        "fct-type": "function",
        "title": "Var"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Var",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:VarArgs",
      "description": {
        "fct-descr": "\u003cp\u003eVariable amount of arguments.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "VarArgs",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#ParamListType",
        "fct-type": "function",
        "title": "VarArgs"
      },
      "index": {
        "description": "Variable amount of arguments",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "VarArgs",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Var Args",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:Weak",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eweak\u003c/code\u003e linkage is exactly the same as linkonce linkage, except that\n  unreferenced weak globals may not be discarded. This is used for globals\n  that may be emitted in multiple translation units, but that are not\n  guaranteed to be emitted into every translation unit that uses them. One\n  example of this are common globals in C, such as \u003ccode\u003eint X;\u003c/code\u003e at global\n  scope.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Weak",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#Linkage",
        "fct-type": "function",
        "title": "Weak"
      },
      "index": {
        "description": "weak linkage is exactly the same as linkonce linkage except that unreferenced weak globals may not be discarded This is used for globals that may be emitted in multiple translation units but that are not guaranteed to be emitted into every translation unit that uses them One example of this are common globals in such as int at global scope",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "Weak",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Weak",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:XLit",
      "description": {
        "fct-descr": "\u003cp\u003eA literal.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "XLit Lit",
        "fct-source": "src/DDC-Llvm-Syntax-Exp.html#Exp",
        "fct-type": "function",
        "title": "XLit"
      },
      "index": {
        "description": "literal",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "XLit",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "XLit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:XUndef",
      "description": {
        "fct-descr": "\u003cp\u003eAn undefined value.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "XUndef Type",
        "fct-source": "src/DDC-Llvm-Syntax-Exp.html#Exp",
        "fct-type": "function",
        "title": "XUndef"
      },
      "index": {
        "description": "An undefined value",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "XUndef",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "XUndef",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:XVar",
      "description": {
        "fct-descr": "\u003cp\u003eUse of a variable.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "XVar Var",
        "fct-source": "src/DDC-Llvm-Syntax-Exp.html#Exp",
        "fct-type": "function",
        "title": "XVar"
      },
      "index": {
        "description": "Use of variable",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "XVar",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "XVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ZeroExt",
      "description": {
        "fct-descr": "\u003cp\u003eThat the parameter or return value should be zero-extended to a 32-bit value\n   by the caller (for a parameter) or the callee (for a return value).\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ZeroExt",
        "fct-source": "src/DDC-Llvm-Syntax-Attr.html#ParamAttr",
        "fct-type": "function",
        "title": "ZeroExt"
      },
      "index": {
        "description": "That the parameter or return value should be zero-extended to bit value by the caller for parameter or the callee for return value",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "ZeroExt",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Zero Ext",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:annotInstr",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Instr",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#AnnotInstr",
        "fct-type": "function",
        "title": "annotInstr"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "annotInstr",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Instr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:annotMDecl",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "[MDecl]",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#AnnotInstr",
        "fct-type": "function",
        "title": "annotMDecl"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "annotMDecl",
        "normalized": "[MDecl]",
        "package": "ddc-core-llvm",
        "partial": "MDecl",
        "signature": "[MDecl]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:annotNil",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an annotated instruction with no annotations.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Instr -\u003e AnnotInstr",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#annotNil",
        "fct-type": "function",
        "title": "annotNil"
      },
      "index": {
        "description": "Construct an annotated instruction with no annotations",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "annotNil",
        "normalized": "Instr-\u003eAnnotInstr",
        "package": "ddc-core-llvm",
        "partial": "Nil",
        "signature": "Instr-\u003eAnnotInstr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:annotWith",
      "description": {
        "fct-descr": "\u003cp\u003eAnnotate an instruction with some metadata.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Instr -\u003e [MDecl] -\u003e AnnotInstr",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#annotWith",
        "fct-type": "function",
        "title": "annotWith"
      },
      "index": {
        "description": "Annotate an instruction with some metadata",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "annotWith",
        "normalized": "Instr-\u003e[MDecl]-\u003eAnnotInstr",
        "package": "ddc-core-llvm",
        "partial": "With",
        "signature": "Instr-\u003e[MDecl]-\u003eAnnotInstr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:blockInstrs",
      "description": {
        "fct-descr": "\u003cp\u003eA list of LlvmStatement's representing the code for this block.\n   This list must end with a control flow statement.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Seq AnnotInstr",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#Block",
        "fct-type": "function",
        "title": "blockInstrs"
      },
      "index": {
        "description": "list of LlvmStatement representing the code for this block This list must end with control flow statement",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "blockInstrs",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Instrs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:blockLabel",
      "description": {
        "fct-descr": "\u003cp\u003eThe code label for this block\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Label",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#Block",
        "fct-type": "function",
        "title": "blockLabel"
      },
      "index": {
        "description": "The code label for this block",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "blockLabel",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:branchTargetsOfInstr",
      "description": {
        "fct-descr": "\u003cp\u003eIf this instruction can branch to a label then return the possible targets.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Instr -\u003e Maybe (Set Label)",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#branchTargetsOfInstr",
        "fct-type": "function",
        "title": "branchTargetsOfInstr"
      },
      "index": {
        "description": "If this instruction can branch to label then return the possible targets",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "branchTargetsOfInstr",
        "normalized": "Instr-\u003eMaybe(Set Label)",
        "package": "ddc-core-llvm",
        "partial": "Targets Of Instr",
        "signature": "Instr-\u003eMaybe(Set Label)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:declAlign",
      "description": {
        "fct-descr": "\u003cp\u003eFunction align value, must be power of 2\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Align",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#FunctionDecl",
        "fct-type": "function",
        "title": "declAlign"
      },
      "index": {
        "description": "Function align value must be power of",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "declAlign",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Align",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:declCallConv",
      "description": {
        "fct-descr": "\u003cp\u003eThe calling convention of the function\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "CallConv",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#FunctionDecl",
        "fct-type": "function",
        "title": "declCallConv"
      },
      "index": {
        "description": "The calling convention of the function",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "declCallConv",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Call Conv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:declLinkage",
      "description": {
        "fct-descr": "\u003cp\u003eLinkageType of the function\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Linkage",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#FunctionDecl",
        "fct-type": "function",
        "title": "declLinkage"
      },
      "index": {
        "description": "LinkageType of the function",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "declLinkage",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Linkage",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:declName",
      "description": {
        "fct-descr": "\u003cp\u003eUnique identifier of the function\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "String",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#FunctionDecl",
        "fct-type": "function",
        "title": "declName"
      },
      "index": {
        "description": "Unique identifier of the function",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "declName",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:declParamListType",
      "description": {
        "fct-descr": "\u003cp\u003eIndicates if this function uses varargs\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "ParamListType",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#FunctionDecl",
        "fct-type": "function",
        "title": "declParamListType"
      },
      "index": {
        "description": "Indicates if this function uses varargs",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "declParamListType",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Param List Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:declParams",
      "description": {
        "fct-descr": "\u003cp\u003eParameter types and attributes\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "[Param]",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#FunctionDecl",
        "fct-type": "function",
        "title": "declParams"
      },
      "index": {
        "description": "Parameter types and attributes",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "declParams",
        "normalized": "[Param]",
        "package": "ddc-core-llvm",
        "partial": "Params",
        "signature": "[Param]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:declReturnType",
      "description": {
        "fct-descr": "\u003cp\u003eType of the returned value\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Type",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#FunctionDecl",
        "fct-type": "function",
        "title": "declReturnType"
      },
      "index": {
        "description": "Type of the returned value",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "declReturnType",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Return Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:defVarOfInstr",
      "description": {
        "fct-descr": "\u003cp\u003eGet the LLVM variable that this instruction assigns to, \n   or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there isn't one.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Instr -\u003e Maybe Var",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#defVarOfInstr",
        "fct-type": "function",
        "title": "defVarOfInstr"
      },
      "index": {
        "description": "Get the LLVM variable that this instruction assigns to or Nothing if there isn one",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "defVarOfInstr",
        "normalized": "Instr-\u003eMaybe Var",
        "package": "ddc-core-llvm",
        "partial": "Var Of Instr",
        "signature": "Instr-\u003eMaybe Var"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:defVarsOfBlock",
      "description": {
        "fct-descr": "\u003cp\u003eGet the set of LLVM variables that this block defines.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Block -\u003e Set Var",
        "fct-source": "src/DDC-Llvm-Syntax-Instr.html#defVarsOfBlock",
        "fct-type": "function",
        "title": "defVarsOfBlock"
      },
      "index": {
        "description": "Get the set of LLVM variables that this block defines",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "defVarsOfBlock",
        "normalized": "Block-\u003eSet Var",
        "package": "ddc-core-llvm",
        "partial": "Vars Of Block",
        "signature": "Block-\u003eSet Var"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:funAttrs",
      "description": {
        "fct-descr": "\u003cp\u003eThe function attributes.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "[FuncAttr]",
        "fct-source": "src/DDC-Llvm-Syntax-Function.html#Function",
        "fct-type": "function",
        "title": "funAttrs"
      },
      "index": {
        "description": "The function attributes",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "funAttrs",
        "normalized": "[FuncAttr]",
        "package": "ddc-core-llvm",
        "partial": "Attrs",
        "signature": "[FuncAttr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:funBlocks",
      "description": {
        "fct-descr": "\u003cp\u003eThe body of the functions.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "[Block]",
        "fct-source": "src/DDC-Llvm-Syntax-Function.html#Function",
        "fct-type": "function",
        "title": "funBlocks"
      },
      "index": {
        "description": "The body of the functions",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "funBlocks",
        "normalized": "[Block]",
        "package": "ddc-core-llvm",
        "partial": "Blocks",
        "signature": "[Block]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:funDecl",
      "description": {
        "fct-descr": "\u003cp\u003eThe signature of this declared function.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "FunctionDecl",
        "fct-source": "src/DDC-Llvm-Syntax-Function.html#Function",
        "fct-type": "function",
        "title": "funDecl"
      },
      "index": {
        "description": "The signature of this declared function",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "funDecl",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:funParams",
      "description": {
        "fct-descr": "\u003cp\u003eThe function parameter names.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "[String]",
        "fct-source": "src/DDC-Llvm-Syntax-Function.html#Function",
        "fct-type": "function",
        "title": "funParams"
      },
      "index": {
        "description": "The function parameter names",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "funParams",
        "normalized": "[String]",
        "package": "ddc-core-llvm",
        "partial": "Params",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:funSection",
      "description": {
        "fct-descr": "\u003cp\u003eThe section to put the function into,\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Section",
        "fct-source": "src/DDC-Llvm-Syntax-Function.html#Function",
        "fct-type": "function",
        "title": "funSection"
      },
      "index": {
        "description": "The section to put the function into",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "funSection",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Section",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:isFloat",
      "description": {
        "fct-descr": "\u003cp\u003eTest if the given \u003ccode\u003eLlvmType\u003c/code\u003e is a floating point type\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Type -\u003e Bool",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#isFloat",
        "fct-type": "function",
        "title": "isFloat"
      },
      "index": {
        "description": "Test if the given LlvmType is floating point type",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "isFloat",
        "normalized": "Type-\u003eBool",
        "package": "ddc-core-llvm",
        "partial": "Float",
        "signature": "Type-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:isInt",
      "description": {
        "fct-descr": "\u003cp\u003eTest if the given \u003ccode\u003eLlvmType\u003c/code\u003e is an integer\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Type -\u003e Bool",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#isInt",
        "fct-type": "function",
        "title": "isInt"
      },
      "index": {
        "description": "Test if the given LlvmType is an integer",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "isInt",
        "normalized": "Type-\u003eBool",
        "package": "ddc-core-llvm",
        "partial": "Int",
        "signature": "Type-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:isPointer",
      "description": {
        "fct-descr": "\u003cp\u003eTest if the given \u003ccode\u003eLlvmType\u003c/code\u003e is an \u003ccode\u003eLMPointer\u003c/code\u003e construct\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Type -\u003e Bool",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#isPointer",
        "fct-type": "function",
        "title": "isPointer"
      },
      "index": {
        "description": "Test if the given LlvmType is an LMPointer construct",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "isPointer",
        "normalized": "Type-\u003eBool",
        "package": "ddc-core-llvm",
        "partial": "Pointer",
        "signature": "Type-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:lookupCallConv",
      "description": {
        "fct-descr": "\u003cp\u003eLookup the calling convention for this function,\n   using the forward declarations as well as the function definitions.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "String -\u003e Module -\u003e Maybe CallConv",
        "fct-source": "src/DDC-Llvm-Syntax-Module.html#lookupCallConv",
        "fct-type": "function",
        "title": "lookupCallConv"
      },
      "index": {
        "description": "Lookup the calling convention for this function using the forward declarations as well as the function definitions",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "lookupCallConv",
        "normalized": "String-\u003eModule-\u003eMaybe CallConv",
        "package": "ddc-core-llvm",
        "partial": "Call Conv",
        "signature": "String-\u003eModule-\u003eMaybe CallConv"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:modAliases",
      "description": {
        "fct-descr": "\u003cp\u003eAlias type definitions.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "[TypeAlias]",
        "fct-source": "src/DDC-Llvm-Syntax-Module.html#Module",
        "fct-type": "function",
        "title": "modAliases"
      },
      "index": {
        "description": "Alias type definitions",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "modAliases",
        "normalized": "[TypeAlias]",
        "package": "ddc-core-llvm",
        "partial": "Aliases",
        "signature": "[TypeAlias]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:modComments",
      "description": {
        "fct-descr": "\u003cp\u003eComments to include at the start of the module.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "[String]",
        "fct-source": "src/DDC-Llvm-Syntax-Module.html#Module",
        "fct-type": "function",
        "title": "modComments"
      },
      "index": {
        "description": "Comments to include at the start of the module",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "modComments",
        "normalized": "[String]",
        "package": "ddc-core-llvm",
        "partial": "Comments",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:modFuncs",
      "description": {
        "fct-descr": "\u003cp\u003eFunctions defined in this module.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "[Function]",
        "fct-source": "src/DDC-Llvm-Syntax-Module.html#Module",
        "fct-type": "function",
        "title": "modFuncs"
      },
      "index": {
        "description": "Functions defined in this module",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "modFuncs",
        "normalized": "[Function]",
        "package": "ddc-core-llvm",
        "partial": "Funcs",
        "signature": "[Function]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:modFwdDecls",
      "description": {
        "fct-descr": "\u003cp\u003eFunctions used in this module but defined in other modules.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "[FunctionDecl]",
        "fct-source": "src/DDC-Llvm-Syntax-Module.html#Module",
        "fct-type": "function",
        "title": "modFwdDecls"
      },
      "index": {
        "description": "Functions used in this module but defined in other modules",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "modFwdDecls",
        "normalized": "[FunctionDecl]",
        "package": "ddc-core-llvm",
        "partial": "Fwd Decls",
        "signature": "[FunctionDecl]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:modGlobals",
      "description": {
        "fct-descr": "\u003cp\u003eGlobal variables to include in the module.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "[Global]",
        "fct-source": "src/DDC-Llvm-Syntax-Module.html#Module",
        "fct-type": "function",
        "title": "modGlobals"
      },
      "index": {
        "description": "Global variables to include in the module",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "modGlobals",
        "normalized": "[Global]",
        "package": "ddc-core-llvm",
        "partial": "Globals",
        "signature": "[Global]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:modMDecls",
      "description": {
        "fct-descr": "\u003cp\u003eMetdata for alias analysis\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "[MDecl]",
        "fct-source": "src/DDC-Llvm-Syntax-Module.html#Module",
        "fct-type": "function",
        "title": "modMDecls"
      },
      "index": {
        "description": "Metdata for alias analysis",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "modMDecls",
        "normalized": "[MDecl]",
        "package": "ddc-core-llvm",
        "partial": "MDecls",
        "signature": "[MDecl]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:nameOfVar",
      "description": {
        "fct-descr": "\u003cp\u003eYield the name of a var.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Var -\u003e Name",
        "fct-source": "src/DDC-Llvm-Syntax-Exp.html#nameOfVar",
        "fct-type": "function",
        "title": "nameOfVar"
      },
      "index": {
        "description": "Yield the name of var",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "nameOfVar",
        "normalized": "Var-\u003eName",
        "package": "ddc-core-llvm",
        "partial": "Of Var",
        "signature": "Var-\u003eName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:paramAttrs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "[ParamAttr]",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#Param",
        "fct-type": "function",
        "title": "paramAttrs"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "paramAttrs",
        "normalized": "[ParamAttr]",
        "package": "ddc-core-llvm",
        "partial": "Attrs",
        "signature": "[ParamAttr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:paramType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Type",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#Param",
        "fct-type": "function",
        "title": "paramType"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "paramType",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:rval",
      "description": {
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "MDecl -\u003e Metadata",
        "fct-source": "src/DDC-Llvm-Syntax-Metadata.html#rval",
        "fct-type": "function",
        "title": "rval"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "rval",
        "normalized": "MDecl-\u003eMetadata",
        "package": "ddc-core-llvm",
        "partial": "",
        "signature": "MDecl-\u003eMetadata"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:takeBytesOfType",
      "description": {
        "fct-descr": "\u003cp\u003eCalculate the size in bytes of a Type, given the size of pointers.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Integer -\u003e Type -\u003e Maybe Integer",
        "fct-source": "src/DDC-Llvm-Syntax-Type.html#takeBytesOfType",
        "fct-type": "function",
        "title": "takeBytesOfType"
      },
      "index": {
        "description": "Calculate the size in bytes of Type given the size of pointers",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "takeBytesOfType",
        "normalized": "Integer-\u003eType-\u003eMaybe Integer",
        "package": "ddc-core-llvm",
        "partial": "Bytes Of Type",
        "signature": "Integer-\u003eType-\u003eMaybe Integer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:tbaaNode",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a single tbaa node\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "String-\u003e MRef-\u003e Bool-\u003e Metadata",
        "fct-type": "function",
        "title": "tbaaNode"
      },
      "index": {
        "description": "Construct single tbaa node",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "tbaaNode",
        "normalized": "String-\u003eMRef-\u003eBool-\u003eMetadata",
        "package": "ddc-core-llvm",
        "partial": "Node",
        "signature": "String-\u003eMRef-\u003eBool-\u003eMetadata"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:typeOfExp",
      "description": {
        "fct-descr": "\u003cp\u003eTake the type of an expression.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Exp -\u003e Type",
        "fct-source": "src/DDC-Llvm-Syntax-Exp.html#typeOfExp",
        "fct-type": "function",
        "title": "typeOfExp"
      },
      "index": {
        "description": "Take the type of an expression",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "typeOfExp",
        "normalized": "Exp-\u003eType",
        "package": "ddc-core-llvm",
        "partial": "Of Exp",
        "signature": "Exp-\u003eType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:typeOfGlobal",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the \u003ccode\u003eLlvmType\u003c/code\u003e of the \u003ccode\u003eLMGlobal\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Global -\u003e Type",
        "fct-source": "src/DDC-Llvm-Syntax-Module.html#typeOfGlobal",
        "fct-type": "function",
        "title": "typeOfGlobal"
      },
      "index": {
        "description": "Return the LlvmType of the LMGlobal",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "typeOfGlobal",
        "normalized": "Global-\u003eType",
        "package": "ddc-core-llvm",
        "partial": "Of Global",
        "signature": "Global-\u003eType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:typeOfLit",
      "description": {
        "fct-descr": "\u003cp\u003eYield the \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eLit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Lit -\u003e Type",
        "fct-source": "src/DDC-Llvm-Syntax-Exp.html#typeOfLit",
        "fct-type": "function",
        "title": "typeOfLit"
      },
      "index": {
        "description": "Yield the Type of Lit",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "typeOfLit",
        "normalized": "Lit-\u003eType",
        "package": "ddc-core-llvm",
        "partial": "Of Lit",
        "signature": "Lit-\u003eType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:typeOfStatic",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the \u003ccode\u003eLlvmType\u003c/code\u003e of the \u003ccode\u003eLlvmStatic\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Static -\u003e Type",
        "fct-source": "src/DDC-Llvm-Syntax-Module.html#typeOfStatic",
        "fct-type": "function",
        "title": "typeOfStatic"
      },
      "index": {
        "description": "Return the LlvmType of the LlvmStatic",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "typeOfStatic",
        "normalized": "Static-\u003eType",
        "package": "ddc-core-llvm",
        "partial": "Of Static",
        "signature": "Static-\u003eType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:typeOfVar",
      "description": {
        "fct-descr": "\u003cp\u003eYield the type of a var.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Var -\u003e Type",
        "fct-source": "src/DDC-Llvm-Syntax-Exp.html#typeOfVar",
        "fct-type": "function",
        "title": "typeOfVar"
      },
      "index": {
        "description": "Yield the type of var",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "typeOfVar",
        "normalized": "Var-\u003eType",
        "package": "ddc-core-llvm",
        "partial": "Of Var",
        "signature": "Var-\u003eType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:varOfGlobal",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the \u003ccode\u003eLlvmVar\u003c/code\u003e part of a \u003ccode\u003eLMGlobal\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Syntax",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Global -\u003e Var",
        "fct-source": "src/DDC-Llvm-Syntax-Module.html#varOfGlobal",
        "fct-type": "function",
        "title": "varOfGlobal"
      },
      "index": {
        "description": "Return the LlvmVar part of LMGlobal",
        "hierarchy": "DDC Llvm Syntax",
        "module": "DDC.Llvm.Syntax",
        "name": "varOfGlobal",
        "normalized": "Global-\u003eVar",
        "package": "ddc-core-llvm",
        "partial": "Of Global",
        "signature": "Global-\u003eVar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Transform-Clean.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInline \u003ccode\u003e\u003ca\u003eISet\u003c/a\u003e\u003c/code\u003e meta-instructions, drop \u003ccode\u003e\u003ca\u003eINop\u003c/a\u003e\u003c/code\u003e meta-instructions,\n   and propagate calling conventions from declarations to call sites.\n   This should all be part of the LLVM language itself, but it isn't.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "DDC.Llvm.Transform.Clean",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "module",
        "fct-source": "src/DDC-Llvm-Transform-Clean.html",
        "fct-type": "module",
        "title": "Clean"
      },
      "index": {
        "description": "Inline ISet meta-instructions drop INop meta-instructions and propagate calling conventions from declarations to call sites This should all be part of the LLVM language itself but it isn",
        "hierarchy": "DDC Llvm Transform Clean",
        "module": "DDC.Llvm.Transform.Clean",
        "name": "Clean",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Clean",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Transform-Clean.html#v:clean",
      "description": {
        "fct-descr": "\u003cp\u003eClean a module.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Transform.Clean",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Module -\u003e Module",
        "fct-source": "src/DDC-Llvm-Transform-Clean.html#clean",
        "fct-type": "function",
        "title": "clean"
      },
      "index": {
        "description": "Clean module",
        "hierarchy": "DDC Llvm Transform Clean",
        "module": "DDC.Llvm.Transform.Clean",
        "name": "clean",
        "normalized": "Module-\u003eModule",
        "package": "ddc-core-llvm",
        "partial": "",
        "signature": "Module-\u003eModule"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Transform-LinkPhi.html#",
      "description": {
        "fct-module": "DDC.Llvm.Transform.LinkPhi",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "module",
        "fct-source": "src/DDC-Llvm-Transform-LinkPhi.html",
        "fct-type": "module",
        "title": "LinkPhi"
      },
      "index": {
        "description": "",
        "hierarchy": "DDC Llvm Transform LinkPhi",
        "module": "DDC.Llvm.Transform.LinkPhi",
        "name": "LinkPhi",
        "normalized": "",
        "package": "ddc-core-llvm",
        "partial": "Link Phi",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Transform-LinkPhi.html#v:linkPhi",
      "description": {
        "fct-descr": "\u003cp\u003eLink Phi instructions in a module.\n\u003c/p\u003e\u003cp\u003eFor Phi instructions, the Salt-\u003eLlvm converter just fills in the source\n   block label of each variable to be merged with \u003ccode\u003eundef\u003c/code\u003e. We need to add\n   the real block label of the in-edge that defines each variable.\n\u003c/p\u003e\u003cp\u003eWe build a graph of each block, work out the in-edges due to branches,\n   and fill in the real block labels by back tracing the in-edges until we\n   find the node that defines each variable.\n\u003c/p\u003e",
        "fct-module": "DDC.Llvm.Transform.LinkPhi",
        "fct-package": "ddc-core-llvm",
        "fct-signature": "Module -\u003e Module",
        "fct-source": "src/DDC-Llvm-Transform-LinkPhi.html#linkPhi",
        "fct-type": "function",
        "title": "linkPhi"
      },
      "index": {
        "description": "Link Phi instructions in module For Phi instructions the Salt Llvm converter just fills in the source block label of each variable to be merged with undef We need to add the real block label of the in-edge that defines each variable We build graph of each block work out the in-edges due to branches and fill in the real block labels by back tracing the in-edges until we find the node that defines each variable",
        "hierarchy": "DDC Llvm Transform LinkPhi",
        "module": "DDC.Llvm.Transform.LinkPhi",
        "name": "linkPhi",
        "normalized": "Module-\u003eModule",
        "package": "ddc-core-llvm",
        "partial": "Phi",
        "signature": "Module-\u003eModule"
      }
    }
  }
]