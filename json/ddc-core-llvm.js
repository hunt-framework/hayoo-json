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
        "word": "ddc-core-llvm"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Llvm.Convert",
          "name": "Convert",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Core-Llvm-Convert.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Core Llvm Convert",
          "module": "DDC.Core.Llvm.Convert",
          "name": "Convert",
          "package": "ddc-core-llvm",
          "partial": "Convert",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Convert.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Salt module to LLVM.\n\u003c/p\u003e\u003cp\u003eIf anything goes wrong in the convertion then this function will\n   just call \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DDC.Core.Llvm.Convert",
          "name": "convertModule",
          "package": "ddc-core-llvm",
          "signature": "Platform -\u003e Module () Name -\u003e Module",
          "source": "src/DDC-Core-Llvm-Convert.html#convertModule",
          "type": "function"
        },
        "index": {
          "description": "Convert Salt module to LLVM If anything goes wrong in the convertion then this function will just call error",
          "hierarchy": "DDC Core Llvm Convert",
          "module": "DDC.Core.Llvm.Convert",
          "name": "convertModule",
          "normalized": "Platform-\u003eModule()Name-\u003eModule",
          "package": "ddc-core-llvm",
          "partial": "Module",
          "signature": "Platform-\u003eModule()Name-\u003eModule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Convert.html#v:convertModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit the parameter and result types from a supercombinator type and\n   and convert them to LLVM form. \n\u003c/p\u003e\u003cp\u003eWe can't split the type first and just call \u003ccode\u003e\u003ca\u003econvertType\u003c/a\u003e\u003c/code\u003e above as we need\n   to decend into any quantifiers that wrap the body type.\n\u003c/p\u003e",
          "module": "DDC.Core.Llvm.Convert",
          "name": "convertSuperType",
          "package": "ddc-core-llvm",
          "signature": "Platform -\u003e KindEnv Name -\u003e Type Name -\u003e ([Type], Type)",
          "source": "src/DDC-Core-Llvm-Convert-Type.html#convertSuperType",
          "type": "function"
        },
        "index": {
          "description": "Split the parameter and result types from supercombinator type and and convert them to LLVM form We can split the type first and just call convertType above as we need to decend into any quantifiers that wrap the body type",
          "hierarchy": "DDC Core Llvm Convert",
          "module": "DDC.Core.Llvm.Convert",
          "name": "convertSuperType",
          "normalized": "Platform-\u003eKindEnv Name-\u003eType Name-\u003e([Type],Type)",
          "package": "ddc-core-llvm",
          "partial": "Super Type",
          "signature": "Platform-\u003eKindEnv Name-\u003eType Name-\u003e([Type],Type)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Convert.html#v:convertSuperType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Salt type to an LlvmType.\n\u003c/p\u003e",
          "module": "DDC.Core.Llvm.Convert",
          "name": "convertType",
          "package": "ddc-core-llvm",
          "signature": "Platform -\u003e KindEnv Name -\u003e Type Name -\u003e Type",
          "source": "src/DDC-Core-Llvm-Convert-Type.html#convertType",
          "type": "function"
        },
        "index": {
          "description": "Convert Salt type to an LlvmType",
          "hierarchy": "DDC Core Llvm Convert",
          "module": "DDC.Core.Llvm.Convert",
          "name": "convertType",
          "normalized": "Platform-\u003eKindEnv Name-\u003eType Name-\u003eType",
          "package": "ddc-core-llvm",
          "partial": "Type",
          "signature": "Platform-\u003eKindEnv Name-\u003eType Name-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Convert.html#v:convertType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "Graph",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Core-Llvm-Metadata-Graph.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Core Llvm Metadata Graph",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "Graph",
          "package": "ddc-core-llvm",
          "partial": "Graph",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA directed graph.\n\u003c/p\u003e",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "DG",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Core-Llvm-Metadata-Graph.html#DG",
          "type": "newtype"
        },
        "index": {
          "description": "directed graph",
          "hierarchy": "DDC Core Llvm Metadata Graph",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "DG",
          "package": "ddc-core-llvm",
          "partial": "DG",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#t:DG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "Dom",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Core-Llvm-Metadata-Graph.html#Dom",
          "type": "type"
        },
        "index": {
          "hierarchy": "DDC Core Llvm Metadata Graph",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "Dom",
          "package": "ddc-core-llvm",
          "partial": "Dom",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#t:Dom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA binary relation.\n\u003c/p\u003e",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "Rel",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Core-Llvm-Metadata-Graph.html#Rel",
          "type": "type"
        },
        "index": {
          "description": "binary relation",
          "hierarchy": "DDC Core Llvm Metadata Graph",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "Rel",
          "package": "ddc-core-llvm",
          "partial": "Rel",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#t:Rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn inverted tree (with edges going from child to parent)\n\u003c/p\u003e",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "Tree",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Core-Llvm-Metadata-Graph.html#Tree",
          "type": "newtype"
        },
        "index": {
          "description": "An inverted tree with edges going from child to parent",
          "hierarchy": "DDC Core Llvm Metadata Graph",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "Tree",
          "package": "ddc-core-llvm",
          "partial": "Tree",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#t:Tree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn undirected graph.\n\u003c/p\u003e",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "UG",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Core-Llvm-Metadata-Graph.html#UG",
          "type": "newtype"
        },
        "index": {
          "description": "An undirected graph",
          "hierarchy": "DDC Core Llvm Metadata Graph",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "UG",
          "package": "ddc-core-llvm",
          "partial": "UG",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#t:UG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "DG",
          "package": "ddc-core-llvm",
          "signature": "DG (Dom a, Rel a)",
          "source": "src/DDC-Core-Llvm-Metadata-Graph.html#DG",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Llvm Metadata Graph",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "DG",
          "normalized": "DG(Dom a,Rel a)",
          "package": "ddc-core-llvm",
          "partial": "DG",
          "signature": "DG(Dom a,Rel a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#v:DG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "Tree",
          "package": "ddc-core-llvm",
          "signature": "Tree (Dom a, Rel a)",
          "source": "src/DDC-Core-Llvm-Metadata-Graph.html#Tree",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Llvm Metadata Graph",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "Tree",
          "normalized": "Tree(Dom a,Rel a)",
          "package": "ddc-core-llvm",
          "partial": "Tree",
          "signature": "Tree(Dom a,Rel a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#v:Tree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "UG",
          "package": "ddc-core-llvm",
          "signature": "UG (Dom a, Rel a)",
          "source": "src/DDC-Core-Llvm-Metadata-Graph.html#UG",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Llvm Metadata Graph",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "UG",
          "normalized": "UG(Dom a,Rel a)",
          "package": "ddc-core-llvm",
          "partial": "UG",
          "signature": "UG(Dom a,Rel a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#v:UG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the aliasing induced by a set of trees this includes aliasing\n   within each of the trees and aliasing among trees.\n\u003c/p\u003e",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "aliasMeasure",
          "package": "ddc-core-llvm",
          "signature": "Rel a -\u003e Partitioning a -\u003e Int",
          "source": "src/DDC-Core-Llvm-Metadata-Graph.html#aliasMeasure",
          "type": "function"
        },
        "index": {
          "description": "Calculate the aliasing induced by set of trees this includes aliasing within each of the trees and aliasing among trees",
          "hierarchy": "DDC Core Llvm Metadata Graph",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "aliasMeasure",
          "normalized": "Rel a-\u003ePartitioning a-\u003eInt",
          "package": "ddc-core-llvm",
          "partial": "Measure",
          "signature": "Rel a-\u003ePartitioning a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#v:aliasMeasure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnroot a tree with the given root.\n\u003c/p\u003e",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "anchor",
          "package": "ddc-core-llvm",
          "signature": "a -\u003e Tree a -\u003e Tree a",
          "source": "src/DDC-Core-Llvm-Metadata-Graph.html#anchor",
          "type": "function"
        },
        "index": {
          "description": "Enroot tree with the given root",
          "hierarchy": "DDC Core Llvm Metadata Graph",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "anchor",
          "normalized": "a-\u003eTree a-\u003eTree a",
          "package": "ddc-core-llvm",
          "signature": "a-\u003eTree a-\u003eTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#v:anchor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list to a relation.\n\u003c/p\u003e",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "fromList",
          "package": "ddc-core-llvm",
          "signature": "[(a, a)] -\u003e Rel a",
          "source": "src/DDC-Core-Llvm-Metadata-Graph.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Convert list to relation",
          "hierarchy": "DDC Core Llvm Metadata Graph",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "fromList",
          "normalized": "[(a,a)]-\u003eRel a",
          "package": "ddc-core-llvm",
          "partial": "List",
          "signature": "[(a,a)]-\u003eRel a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA relation is an (inverted) tree if each node has at most one outgoing arc\n\u003c/p\u003e",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "isTree",
          "package": "ddc-core-llvm",
          "signature": "Dom a -\u003e Rel a -\u003e Bool",
          "source": "src/DDC-Core-Llvm-Metadata-Graph.html#isTree",
          "type": "function"
        },
        "index": {
          "description": "relation is an inverted tree if each node has at most one outgoing arc",
          "hierarchy": "DDC Core Llvm Metadata Graph",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "isTree",
          "normalized": "Dom a-\u003eRel a-\u003eBool",
          "package": "ddc-core-llvm",
          "partial": "Tree",
          "signature": "Dom a-\u003eRel a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#v:isTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "orientUG",
          "package": "ddc-core-llvm",
          "signature": "UG a -\u003e DG a",
          "source": "src/DDC-Core-Llvm-Metadata-Graph.html#orientUG",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Llvm Metadata Graph",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "orientUG",
          "normalized": "UG a-\u003eDG a",
          "package": "ddc-core-llvm",
          "partial": "UG",
          "signature": "UG a-\u003eDG a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#v:orientUG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePartition a DG into the minimum set of (directed) trees\n\u003c/p\u003e",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "partitionDG",
          "package": "ddc-core-llvm",
          "signature": "DG a -\u003e [Tree a]",
          "source": "src/DDC-Core-Llvm-Metadata-Graph.html#partitionDG",
          "type": "function"
        },
        "index": {
          "description": "Partition DG into the minimum set of directed trees",
          "hierarchy": "DDC Core Llvm Metadata Graph",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "partitionDG",
          "normalized": "DG a-\u003e[Tree a]",
          "package": "ddc-core-llvm",
          "partial": "DG",
          "signature": "DG a-\u003e[Tree a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#v:partitionDG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the sources of a tree.\n\u003c/p\u003e",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "sources",
          "package": "ddc-core-llvm",
          "signature": "a -\u003e Tree a -\u003e [a]",
          "source": "src/DDC-Core-Llvm-Metadata-Graph.html#sources",
          "type": "function"
        },
        "index": {
          "description": "Get the sources of tree",
          "hierarchy": "DDC Core Llvm Metadata Graph",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "sources",
          "normalized": "a-\u003eTree a-\u003e[a]",
          "package": "ddc-core-llvm",
          "signature": "a-\u003eTree a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#v:sources"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a relation.\n\u003c/p\u003e",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "toList",
          "package": "ddc-core-llvm",
          "signature": "Dom a -\u003e Rel a -\u003e [(a, a)]",
          "source": "src/DDC-Core-Llvm-Metadata-Graph.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert relation",
          "hierarchy": "DDC Core Llvm Metadata Graph",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "toList",
          "normalized": "Dom a-\u003eRel a-\u003e[(a,a)]",
          "package": "ddc-core-llvm",
          "partial": "List",
          "signature": "Dom a-\u003eRel a-\u003e[(a,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the transitive closure of a binary relation\n      using Floyd-Warshall algorithm\n\u003c/p\u003e",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "transClosure",
          "package": "ddc-core-llvm",
          "signature": "Dom a -\u003e Rel a -\u003e Rel a",
          "source": "src/DDC-Core-Llvm-Metadata-Graph.html#transClosure",
          "type": "function"
        },
        "index": {
          "description": "Find the transitive closure of binary relation using Floyd-Warshall algorithm",
          "hierarchy": "DDC Core Llvm Metadata Graph",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "transClosure",
          "normalized": "Dom a-\u003eRel a-\u003eRel a",
          "package": "ddc-core-llvm",
          "partial": "Closure",
          "signature": "Dom a-\u003eRel a-\u003eRel a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#v:transClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransitively orient an undireted graph\n\u003c/p\u003e\u003cp\u003eUsing the algorithm from\n      \u003ca\u003eLex-BFS and partition refinement, with applications to transitive orientation, interval \n      graph recognition and consecutive ones testing\u003c/a\u003e, R. McConnell et al 2000\n\u003c/p\u003e\u003cp\u003eIn the case where the transitive orientation does not exist, it simply gives some orientation\n\u003c/p\u003e\u003cp\u003enote: gave up on modular decomposition, this approach has very slightly worse time\n            complexity but much simpler\n\u003c/p\u003e",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "transOrient",
          "package": "ddc-core-llvm",
          "signature": "UG a -\u003e DG a",
          "source": "src/DDC-Core-Llvm-Metadata-Graph.html#transOrient",
          "type": "function"
        },
        "index": {
          "description": "Transitively orient an undireted graph Using the algorithm from Lex-BFS and partition refinement with applications to transitive orientation interval graph recognition and consecutive ones testing McConnell et al In the case where the transitive orientation does not exist it simply gives some orientation note gave up on modular decomposition this approach has very slightly worse time complexity but much simpler",
          "hierarchy": "DDC Core Llvm Metadata Graph",
          "module": "DDC.Core.Llvm.Metadata.Graph",
          "name": "transOrient",
          "normalized": "UG a-\u003eDG a",
          "package": "ddc-core-llvm",
          "partial": "Orient",
          "signature": "UG a-\u003eDG a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Graph.html#v:transOrient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Llvm.Metadata.Tbaa",
          "name": "Tbaa",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Core-Llvm-Metadata-Tbaa.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Core Llvm Metadata Tbaa",
          "module": "DDC.Core.Llvm.Metadata.Tbaa",
          "name": "Tbaa",
          "package": "ddc-core-llvm",
          "partial": "Tbaa",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Tbaa.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMetadata for a supercombinator.\n\u003c/p\u003e",
          "module": "DDC.Core.Llvm.Metadata.Tbaa",
          "name": "MDSuper",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Core-Llvm-Metadata-Tbaa.html#MDSuper",
          "type": "data"
        },
        "index": {
          "description": "Metadata for supercombinator",
          "hierarchy": "DDC Core Llvm Metadata Tbaa",
          "module": "DDC.Core.Llvm.Metadata.Tbaa",
          "name": "MDSuper",
          "package": "ddc-core-llvm",
          "partial": "MDSuper",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Tbaa.html#t:MDSuper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Llvm.Metadata.Tbaa",
          "name": "MDSuper",
          "package": "ddc-core-llvm",
          "signature": "MDSuper",
          "source": "src/DDC-Core-Llvm-Metadata-Tbaa.html#MDSuper",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Llvm Metadata Tbaa",
          "module": "DDC.Core.Llvm.Metadata.Tbaa",
          "name": "MDSuper",
          "package": "ddc-core-llvm",
          "partial": "MDSuper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Tbaa.html#v:MDSuper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttach relevant metadata to instructions\n\u003c/p\u003e",
          "module": "DDC.Core.Llvm.Metadata.Tbaa",
          "name": "annot",
          "package": "ddc-core-llvm",
          "signature": "KindEnv Name-\u003e MDSuper-\u003e [c Name]-\u003e Instr-\u003e AnnotInstr",
          "type": "function"
        },
        "index": {
          "description": "Attach relevant metadata to instructions",
          "hierarchy": "DDC Core Llvm Metadata Tbaa",
          "module": "DDC.Core.Llvm.Metadata.Tbaa",
          "name": "annot",
          "normalized": "KindEnv Name-\u003eMDSuper-\u003e[a Name]-\u003eInstr-\u003eAnnotInstr",
          "package": "ddc-core-llvm",
          "signature": "KindEnv Name-\u003eMDSuper-\u003e[c Name]-\u003eInstr-\u003eAnnotInstr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Tbaa.html#v:annot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Llvm.Metadata.Tbaa",
          "name": "decls",
          "package": "ddc-core-llvm",
          "signature": "[MDecl]",
          "source": "src/DDC-Core-Llvm-Metadata-Tbaa.html#MDSuper",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Llvm Metadata Tbaa",
          "module": "DDC.Core.Llvm.Metadata.Tbaa",
          "name": "decls",
          "normalized": "[MDecl]",
          "package": "ddc-core-llvm",
          "signature": "[MDecl]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Tbaa.html#v:decls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate tbaa metadata for a top-level Salt supercombinator.\n\u003c/p\u003e",
          "module": "DDC.Core.Llvm.Metadata.Tbaa",
          "name": "deriveMD",
          "package": "ddc-core-llvm",
          "signature": "String-\u003e Exp () Name-\u003e LlvmM MDSuper",
          "type": "function"
        },
        "index": {
          "description": "Generate tbaa metadata for top-level Salt supercombinator",
          "hierarchy": "DDC Core Llvm Metadata Tbaa",
          "module": "DDC.Core.Llvm.Metadata.Tbaa",
          "name": "deriveMD",
          "normalized": "String-\u003eExp()Name-\u003eLlvmM MDSuper",
          "package": "ddc-core-llvm",
          "partial": "MD",
          "signature": "String-\u003eExp()Name-\u003eLlvmM MDSuper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Tbaa.html#v:deriveMD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup the metadata for a name, from the metadata tree attached\n   to a supecombinator.\n\u003c/p\u003e",
          "module": "DDC.Core.Llvm.Metadata.Tbaa",
          "name": "lookup",
          "package": "ddc-core-llvm",
          "signature": "Bound Name -\u003e MDSuper -\u003e Maybe [MDecl]",
          "source": "src/DDC-Core-Llvm-Metadata-Tbaa.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Lookup the metadata for name from the metadata tree attached to supecombinator",
          "hierarchy": "DDC Core Llvm Metadata Tbaa",
          "module": "DDC.Core.Llvm.Metadata.Tbaa",
          "name": "lookup",
          "normalized": "Bound Name-\u003eMDSuper-\u003eMaybe[MDecl]",
          "package": "ddc-core-llvm",
          "signature": "Bound Name-\u003eMDSuper-\u003eMaybe[MDecl]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Tbaa.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e but lookup metadata for several names at once.\n\u003c/p\u003e",
          "module": "DDC.Core.Llvm.Metadata.Tbaa",
          "name": "lookups",
          "package": "ddc-core-llvm",
          "signature": "[Bound Name] -\u003e MDSuper -\u003e [Maybe [MDecl]]",
          "source": "src/DDC-Core-Llvm-Metadata-Tbaa.html#lookups",
          "type": "function"
        },
        "index": {
          "description": "Like lookup but lookup metadata for several names at once",
          "hierarchy": "DDC Core Llvm Metadata Tbaa",
          "module": "DDC.Core.Llvm.Metadata.Tbaa",
          "name": "lookups",
          "normalized": "[Bound Name]-\u003eMDSuper-\u003e[Maybe[MDecl]]",
          "package": "ddc-core-llvm",
          "signature": "[Bound Name]-\u003eMDSuper-\u003e[Maybe[MDecl]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Tbaa.html#v:lookups"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Core.Llvm.Metadata.Tbaa",
          "name": "nameMap",
          "package": "ddc-core-llvm",
          "signature": "MDEnv",
          "source": "src/DDC-Core-Llvm-Metadata-Tbaa.html#MDSuper",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Core Llvm Metadata Tbaa",
          "module": "DDC.Core.Llvm.Metadata.Tbaa",
          "name": "nameMap",
          "package": "ddc-core-llvm",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Core-Llvm-Metadata-Tbaa.html#v:nameMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Analysis.Children",
          "name": "Children",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Analysis-Children.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Llvm Analysis Children",
          "module": "DDC.Llvm.Analysis.Children",
          "name": "Children",
          "package": "ddc-core-llvm",
          "partial": "Children",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Analysis-Children.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe children of a node are the other nodes this one might branch to.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Analysis.Children",
          "name": "Children",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Analysis-Children.html#Children",
          "type": "data"
        },
        "index": {
          "description": "The children of node are the other nodes this one might branch to",
          "hierarchy": "DDC Llvm Analysis Children",
          "module": "DDC.Llvm.Analysis.Children",
          "name": "Children",
          "package": "ddc-core-llvm",
          "partial": "Children",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Analysis-Children.html#t:Children"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Analysis.Children",
          "name": "Children",
          "package": "ddc-core-llvm",
          "signature": "Children (Set Label)",
          "source": "src/DDC-Llvm-Analysis-Children.html#Children",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Analysis Children",
          "module": "DDC.Llvm.Analysis.Children",
          "name": "Children",
          "package": "ddc-core-llvm",
          "partial": "Children",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Analysis-Children.html#v:Children"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotate a graph with the children of each node.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Analysis.Children",
          "name": "annotChildrenOfGraph",
          "package": "ddc-core-llvm",
          "signature": "Graph a -\u003e Graph (a, Children)",
          "source": "src/DDC-Llvm-Analysis-Children.html#annotChildrenOfGraph",
          "type": "function"
        },
        "index": {
          "description": "Annotate graph with the children of each node",
          "hierarchy": "DDC Llvm Analysis Children",
          "module": "DDC.Llvm.Analysis.Children",
          "name": "annotChildrenOfGraph",
          "normalized": "Graph a-\u003eGraph(a,Children)",
          "package": "ddc-core-llvm",
          "partial": "Children Of Graph",
          "signature": "Graph a-\u003eGraph(a,Children)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Analysis-Children.html#v:annotChildrenOfGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotate a node with its children.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Analysis.Children",
          "name": "annotChildrenOfNode",
          "package": "ddc-core-llvm",
          "signature": "Node a -\u003e Node (a, Children)",
          "source": "src/DDC-Llvm-Analysis-Children.html#annotChildrenOfNode",
          "type": "function"
        },
        "index": {
          "description": "Annotate node with its children",
          "hierarchy": "DDC Llvm Analysis Children",
          "module": "DDC.Llvm.Analysis.Children",
          "name": "annotChildrenOfNode",
          "normalized": "Node a-\u003eNode(a,Children)",
          "package": "ddc-core-llvm",
          "partial": "Children Of Node",
          "signature": "Node a-\u003eNode(a,Children)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Analysis-Children.html#v:annotChildrenOfNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the children of a node.\n\u003c/p\u003e",
          "module": "[\"DDC.Llvm.Analysis.Children\",\"DDC.Llvm.Graph\"]",
          "name": "childrenOfNode",
          "package": "ddc-core-llvm",
          "signature": "Node a -\u003e Set Label",
          "source": "src/DDC-Llvm-Graph.html#childrenOfNode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Analysis-Children.html#v:childrenOfNode\",\"http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:childrenOfNode\"]"
        },
        "index": {
          "description": "Get the children of node",
          "hierarchy": "DDC Llvm Analysis Children",
          "module": "DDC.Llvm.Analysis.Children",
          "name": "childrenOfNode",
          "normalized": "Node a-\u003eSet Label",
          "package": "ddc-core-llvm",
          "partial": "Of Node",
          "signature": "Node a-\u003eSet Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Analysis-Children.html#v:childrenOfNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Analysis.Parents",
          "name": "Parents",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Analysis-Parents.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Llvm Analysis Parents",
          "module": "DDC.Llvm.Analysis.Parents",
          "name": "Parents",
          "package": "ddc-core-llvm",
          "partial": "Parents",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Analysis-Parents.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parents of a node are the other nodes that might branch\n   to this one.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Analysis.Parents",
          "name": "Parents",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Analysis-Parents.html#Parents",
          "type": "data"
        },
        "index": {
          "description": "The parents of node are the other nodes that might branch to this one",
          "hierarchy": "DDC Llvm Analysis Parents",
          "module": "DDC.Llvm.Analysis.Parents",
          "name": "Parents",
          "package": "ddc-core-llvm",
          "partial": "Parents",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Analysis-Parents.html#t:Parents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Analysis.Parents",
          "name": "Parents",
          "package": "ddc-core-llvm",
          "signature": "Parents (Set Label)",
          "source": "src/DDC-Llvm-Analysis-Parents.html#Parents",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Analysis Parents",
          "module": "DDC.Llvm.Analysis.Parents",
          "name": "Parents",
          "package": "ddc-core-llvm",
          "partial": "Parents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Analysis-Parents.html#v:Parents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotate a graph with the parents of each node.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Analysis.Parents",
          "name": "annotParentsOfGraph",
          "package": "ddc-core-llvm",
          "signature": "Graph a -\u003e Graph (a, Parents)",
          "source": "src/DDC-Llvm-Analysis-Parents.html#annotParentsOfGraph",
          "type": "function"
        },
        "index": {
          "description": "Annotate graph with the parents of each node",
          "hierarchy": "DDC Llvm Analysis Parents",
          "module": "DDC.Llvm.Analysis.Parents",
          "name": "annotParentsOfGraph",
          "normalized": "Graph a-\u003eGraph(a,Parents)",
          "package": "ddc-core-llvm",
          "partial": "Parents Of Graph",
          "signature": "Graph a-\u003eGraph(a,Parents)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Analysis-Parents.html#v:annotParentsOfGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of parents tracing back to the node that defines the given\n   variable, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the definition site can not be found.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Analysis.Parents",
          "name": "lineageOfVar",
          "package": "ddc-core-llvm",
          "signature": "Graph Parents -\u003e Var -\u003e Label -\u003e Maybe [Label]",
          "source": "src/DDC-Llvm-Analysis-Parents.html#lineageOfVar",
          "type": "function"
        },
        "index": {
          "description": "Get list of parents tracing back to the node that defines the given variable or Nothing if the definition site can not be found",
          "hierarchy": "DDC Llvm Analysis Parents",
          "module": "DDC.Llvm.Analysis.Parents",
          "name": "lineageOfVar",
          "normalized": "Graph Parents-\u003eVar-\u003eLabel-\u003eMaybe[Label]",
          "package": "ddc-core-llvm",
          "partial": "Of Var",
          "signature": "Graph Parents-\u003eVar-\u003eLabel-\u003eMaybe[Label]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Analysis-Parents.html#v:lineageOfVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Graph",
          "name": "Graph",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Graph.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Llvm Graph",
          "module": "DDC.Llvm.Graph",
          "name": "Graph",
          "package": "ddc-core-llvm",
          "partial": "Graph",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLlvm block graph.\n   We use this form for transformations, \n   as it makes it easy to find blocks and attach annotations to them.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Graph",
          "name": "Graph",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Graph.html#Graph",
          "type": "data"
        },
        "index": {
          "description": "Llvm block graph We use this form for transformations as it makes it easy to find blocks and attach annotations to them",
          "hierarchy": "DDC Llvm Graph",
          "module": "DDC.Llvm.Graph",
          "name": "Graph",
          "package": "ddc-core-llvm",
          "partial": "Graph",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#t:Graph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA block of instructions, and an optional annotation.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Graph",
          "name": "Node",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Graph.html#Node",
          "type": "data"
        },
        "index": {
          "description": "block of instructions and an optional annotation",
          "hierarchy": "DDC Llvm Graph",
          "module": "DDC.Llvm.Graph",
          "name": "Node",
          "package": "ddc-core-llvm",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Graph",
          "name": "Graph",
          "package": "ddc-core-llvm",
          "signature": "Graph",
          "source": "src/DDC-Llvm-Graph.html#Graph",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Graph",
          "module": "DDC.Llvm.Graph",
          "name": "Graph",
          "package": "ddc-core-llvm",
          "partial": "Graph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:Graph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Graph",
          "name": "Node",
          "package": "ddc-core-llvm",
          "signature": "Node",
          "source": "src/DDC-Llvm-Graph.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Graph",
          "module": "DDC.Llvm.Graph",
          "name": "Node",
          "package": "ddc-core-llvm",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eBlock\u003c/a\u003e\u003c/code\u003e form, dropping any annotation.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Graph",
          "name": "blockOfNode",
          "package": "ddc-core-llvm",
          "signature": "Node a -\u003e Block",
          "source": "src/DDC-Llvm-Graph.html#blockOfNode",
          "type": "function"
        },
        "index": {
          "description": "Convert Node to Block form dropping any annotation",
          "hierarchy": "DDC Llvm Graph",
          "module": "DDC.Llvm.Graph",
          "name": "blockOfNode",
          "normalized": "Node a-\u003eBlock",
          "package": "ddc-core-llvm",
          "partial": "Of Node",
          "signature": "Node a-\u003eBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:blockOfNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlatten a graph back into a list of blocks.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Graph",
          "name": "blocksOfGraph",
          "package": "ddc-core-llvm",
          "signature": "Graph a -\u003e [Block]",
          "source": "src/DDC-Llvm-Graph.html#blocksOfGraph",
          "type": "function"
        },
        "index": {
          "description": "Flatten graph back into list of blocks",
          "hierarchy": "DDC Llvm Graph",
          "module": "DDC.Llvm.Graph",
          "name": "blocksOfGraph",
          "normalized": "Graph a-\u003e[Block]",
          "package": "ddc-core-llvm",
          "partial": "Of Graph",
          "signature": "Graph a-\u003e[Block]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:blocksOfGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe entry node for the block graph.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Graph",
          "name": "graphEntry",
          "package": "ddc-core-llvm",
          "signature": "Label",
          "source": "src/DDC-Llvm-Graph.html#Graph",
          "type": "function"
        },
        "index": {
          "description": "The entry node for the block graph",
          "hierarchy": "DDC Llvm Graph",
          "module": "DDC.Llvm.Graph",
          "name": "graphEntry",
          "package": "ddc-core-llvm",
          "partial": "Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:graphEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal nodes.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Graph",
          "name": "graphNodes",
          "package": "ddc-core-llvm",
          "signature": "Map Label (Node a)",
          "source": "src/DDC-Llvm-Graph.html#Graph",
          "type": "function"
        },
        "index": {
          "description": "Internal nodes",
          "hierarchy": "DDC Llvm Graph",
          "module": "DDC.Llvm.Graph",
          "name": "graphNodes",
          "package": "ddc-core-llvm",
          "partial": "Nodes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:graphNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a list of blocks to a block graph.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Graph",
          "name": "graphOfBlocks",
          "package": "ddc-core-llvm",
          "signature": "a -\u003e [Block] -\u003e Maybe (Graph a)",
          "source": "src/DDC-Llvm-Graph.html#graphOfBlocks",
          "type": "function"
        },
        "index": {
          "description": "Convert list of blocks to block graph",
          "hierarchy": "DDC Llvm Graph",
          "module": "DDC.Llvm.Graph",
          "name": "graphOfBlocks",
          "normalized": "a-\u003e[Block]-\u003eMaybe(Graph a)",
          "package": "ddc-core-llvm",
          "partial": "Of Blocks",
          "signature": "a-\u003e[Block]-\u003eMaybe(Graph a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:graphOfBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the set of all block labels in a graph.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Graph",
          "name": "labelsOfGraph",
          "package": "ddc-core-llvm",
          "signature": "Graph a -\u003e [Label]",
          "source": "src/DDC-Llvm-Graph.html#labelsOfGraph",
          "type": "function"
        },
        "index": {
          "description": "Get the set of all block labels in graph",
          "hierarchy": "DDC Llvm Graph",
          "module": "DDC.Llvm.Graph",
          "name": "labelsOfGraph",
          "normalized": "Graph a-\u003e[Label]",
          "package": "ddc-core-llvm",
          "partial": "Of Graph",
          "signature": "Graph a-\u003e[Label]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:labelsOfGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup a node from the graph, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it can't be found.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Graph",
          "name": "lookupNodeOfGraph",
          "package": "ddc-core-llvm",
          "signature": "Graph a -\u003e Label -\u003e Maybe (Node a)",
          "source": "src/DDC-Llvm-Graph.html#lookupNodeOfGraph",
          "type": "function"
        },
        "index": {
          "description": "Lookup node from the graph or Nothing if it can be found",
          "hierarchy": "DDC Llvm Graph",
          "module": "DDC.Llvm.Graph",
          "name": "lookupNodeOfGraph",
          "normalized": "Graph a-\u003eLabel-\u003eMaybe(Node a)",
          "package": "ddc-core-llvm",
          "partial": "Node Of Graph",
          "signature": "Graph a-\u003eLabel-\u003eMaybe(Node a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:lookupNodeOfGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to every node annotation in the graph.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Graph",
          "name": "mapAnnotsOfGraph",
          "package": "ddc-core-llvm",
          "signature": "(a -\u003e b) -\u003e Graph a -\u003e Graph b",
          "source": "src/DDC-Llvm-Graph.html#mapAnnotsOfGraph",
          "type": "function"
        },
        "index": {
          "description": "Apply function to every node annotation in the graph",
          "hierarchy": "DDC Llvm Graph",
          "module": "DDC.Llvm.Graph",
          "name": "mapAnnotsOfGraph",
          "normalized": "(a-\u003eb)-\u003eGraph a-\u003eGraph b",
          "package": "ddc-core-llvm",
          "partial": "Annots Of Graph",
          "signature": "(a-\u003eb)-\u003eGraph a-\u003eGraph b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:mapAnnotsOfGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to every node in the graph.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Graph",
          "name": "mapNodesOfGraph",
          "package": "ddc-core-llvm",
          "signature": "(Node a -\u003e Node b) -\u003e Graph a -\u003e Graph b",
          "source": "src/DDC-Llvm-Graph.html#mapNodesOfGraph",
          "type": "function"
        },
        "index": {
          "description": "Apply function to every node in the graph",
          "hierarchy": "DDC Llvm Graph",
          "module": "DDC.Llvm.Graph",
          "name": "mapNodesOfGraph",
          "normalized": "(Node a-\u003eNode b)-\u003eGraph a-\u003eGraph b",
          "package": "ddc-core-llvm",
          "partial": "Nodes Of Graph",
          "signature": "(Node a-\u003eNode b)-\u003eGraph a-\u003eGraph b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:mapNodesOfGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to a single node in the graoh.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Graph",
          "name": "modifyNodeOfGraph",
          "package": "ddc-core-llvm",
          "signature": "Label-\u003e (Node a -\u003e Node a)-\u003e Graph a-\u003e Graph a",
          "type": "function"
        },
        "index": {
          "description": "Apply function to single node in the graoh",
          "hierarchy": "DDC Llvm Graph",
          "module": "DDC.Llvm.Graph",
          "name": "modifyNodeOfGraph",
          "normalized": "Label-\u003e(Node a-\u003eNode a)-\u003eGraph a-\u003eGraph a",
          "package": "ddc-core-llvm",
          "partial": "Node Of Graph",
          "signature": "Label-\u003e(Node a-\u003eNode a)-\u003eGraph a-\u003eGraph a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:modifyNodeOfGraph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional annotation on the node.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Graph",
          "name": "nodeAnnot",
          "package": "ddc-core-llvm",
          "signature": "a",
          "source": "src/DDC-Llvm-Graph.html#Node",
          "type": "function"
        },
        "index": {
          "description": "Optional annotation on the node",
          "hierarchy": "DDC Llvm Graph",
          "module": "DDC.Llvm.Graph",
          "name": "nodeAnnot",
          "package": "ddc-core-llvm",
          "partial": "Annot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:nodeAnnot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatements in this node, with meta-data annotations.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Graph",
          "name": "nodeInstrs",
          "package": "ddc-core-llvm",
          "signature": "Seq AnnotInstr",
          "source": "src/DDC-Llvm-Graph.html#Node",
          "type": "function"
        },
        "index": {
          "description": "Statements in this node with meta-data annotations",
          "hierarchy": "DDC Llvm Graph",
          "module": "DDC.Llvm.Graph",
          "name": "nodeInstrs",
          "package": "ddc-core-llvm",
          "partial": "Instrs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:nodeInstrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlock label for the node.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Graph",
          "name": "nodeLabel",
          "package": "ddc-core-llvm",
          "signature": "Label",
          "source": "src/DDC-Llvm-Graph.html#Node",
          "type": "function"
        },
        "index": {
          "description": "Block label for the node",
          "hierarchy": "DDC Llvm Graph",
          "module": "DDC.Llvm.Graph",
          "name": "nodeLabel",
          "package": "ddc-core-llvm",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Graph.html#v:nodeLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty printer instances for the Llvm syntax.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Llvm.Pretty",
          "name": "Pretty",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Pretty.html",
          "type": "module"
        },
        "index": {
          "description": "Pretty printer instances for the Llvm syntax",
          "hierarchy": "DDC Llvm Pretty",
          "module": "DDC.Llvm.Pretty",
          "name": "Pretty",
          "package": "ddc-core-llvm",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Syntax",
          "name": "Syntax",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Syntax",
          "package": "ddc-core-llvm",
          "partial": "Syntax",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlignment.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "Align",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Type.html#Align",
          "type": "data"
        },
        "index": {
          "description": "Alignment",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Align",
          "package": "ddc-core-llvm",
          "partial": "Align",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Align"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstructions annotated with metadata.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "AnnotInstr",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Instr.html#AnnotInstr",
          "type": "data"
        },
        "index": {
          "description": "Instructions annotated with metadata",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "AnnotInstr",
          "package": "ddc-core-llvm",
          "partial": "Annot Instr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:AnnotInstr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA block of LLVM code with an optional annotation.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "Block",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Instr.html#Block",
          "type": "data"
        },
        "index": {
          "description": "block of LLVM code with an optional annotation",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Block",
          "package": "ddc-core-llvm",
          "partial": "Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifferent calling conventions a function can use.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "CallConv",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Attr.html#CallConv",
          "type": "data"
        },
        "index": {
          "description": "Different calling conventions function can use",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "CallConv",
          "package": "ddc-core-llvm",
          "partial": "Call Conv",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:CallConv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifferent ways to call a function.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "CallType",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Attr.html#CallType",
          "type": "data"
        },
        "index": {
          "description": "Different ways to call function",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "CallType",
          "package": "ddc-core-llvm",
          "partial": "Call Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:CallType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConversion Operations\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "Conv",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Conv",
          "type": "data"
        },
        "index": {
          "description": "Conversion Operations",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Conv",
          "package": "ddc-core-llvm",
          "partial": "Conv",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Conv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Syntax",
          "name": "Exp",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Exp.html#Exp",
          "type": "data"
        },
        "index": {
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Exp",
          "package": "ddc-core-llvm",
          "partial": "Exp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFloating point comparison.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "FCond",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
          "type": "data"
        },
        "index": {
          "description": "Floating point comparison",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "FCond",
          "package": "ddc-core-llvm",
          "partial": "FCond",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:FCond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction attributes are set to communicate additional information about a\n   function. Function attributes are considered to be part of the function,\n   not of the function type, so functions with different parameter attributes\n   can have the same function type. Functions can have multiple attributes.\n\u003c/p\u003e\u003cp\u003eDescriptions taken from \u003ca\u003ehttp://llvm.org/docs/LangRef.html#fnattrs\u003c/a\u003e\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "FuncAttr",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Attr.html#FuncAttr",
          "type": "data"
        },
        "index": {
          "description": "Function attributes are set to communicate additional information about function Function attributes are considered to be part of the function not of the function type so functions with different parameter attributes can have the same function type Functions can have multiple attributes Descriptions taken from http llvm.org docs LangRef.html fnattrs",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "FuncAttr",
          "package": "ddc-core-llvm",
          "partial": "Func Attr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:FuncAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA LLVM Function\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "Function",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Function.html#Function",
          "type": "data"
        },
        "index": {
          "description": "LLVM Function",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Function",
          "package": "ddc-core-llvm",
          "partial": "Function",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn LLVM Function\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "FunctionDecl",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Type.html#FunctionDecl",
          "type": "data"
        },
        "index": {
          "description": "An LLVM Function",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "FunctionDecl",
          "package": "ddc-core-llvm",
          "partial": "Function Decl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:FunctionDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA global mutable variable. Maybe defined or external\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "Global",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Module.html#Global",
          "type": "data"
        },
        "index": {
          "description": "global mutable variable Maybe defined or external",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Global",
          "package": "ddc-core-llvm",
          "partial": "Global",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Global"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteger comparison.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ICond",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Prim.html#ICond",
          "type": "data"
        },
        "index": {
          "description": "Integer comparison",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ICond",
          "package": "ddc-core-llvm",
          "partial": "ICond",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:ICond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstructions\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "Instr",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
          "type": "data"
        },
        "index": {
          "description": "Instructions",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Instr",
          "package": "ddc-core-llvm",
          "partial": "Instr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Instr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlock labels.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "Label",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Instr.html#Label",
          "type": "data"
        },
        "index": {
          "description": "Block labels",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Label",
          "package": "ddc-core-llvm",
          "partial": "Label",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinkage type of a symbol.\n\u003c/p\u003e\u003cp\u003eThe description of the constructors is copied from the Llvm Assembly Language\n   Reference Manual \u003ca\u003ehttp://www.llvm.org/docs/LangRef.html#linkage\u003c/a\u003e, because\n   they correspond to the Llvm linkage types.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "Linkage",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Attr.html#Linkage",
          "type": "data"
        },
        "index": {
          "description": "Linkage type of symbol The description of the constructors is copied from the Llvm Assembly Language Reference Manual http www.llvm.org docs LangRef.html linkage because they correspond to the Llvm linkage types",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Linkage",
          "package": "ddc-core-llvm",
          "partial": "Linkage",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Linkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral data.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "Lit",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Exp.html#Lit",
          "type": "data"
        },
        "index": {
          "description": "Literal data",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Lit",
          "package": "ddc-core-llvm",
          "partial": "Lit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Lit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaps matadata references to metadata nodes\n      e.g. !2 = !{ metadata \u003ca\u003eid\u003c/a\u003e, !0, !i11}\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "MDecl",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Metadata.html#MDecl",
          "type": "data"
        },
        "index": {
          "description": "Maps matadata references to metadata nodes e.g metadata id i11",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "MDecl",
          "package": "ddc-core-llvm",
          "partial": "MDecl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:MDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Syntax",
          "name": "MRef",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Metadata.html#MRef",
          "type": "data"
        },
        "index": {
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "MRef",
          "package": "ddc-core-llvm",
          "partial": "MRef",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:MRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifferent types of metadata used in LLVM IR\n      e.g. \u003ccode\u003edebug\u003c/code\u003e, \u003ccode\u003etbaa\u003c/code\u003e, \u003ccode\u003erange\u003c/code\u003e, etc.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "Metadata",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Metadata.html#Metadata",
          "type": "data"
        },
        "index": {
          "description": "Different types of metadata used in LLVM IR e.g debug tbaa range etc",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Metadata",
          "package": "ddc-core-llvm",
          "partial": "Metadata",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Metadata"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a top level container in LLVM.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "Module",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Module.html#Module",
          "type": "data"
        },
        "index": {
          "description": "This is top level container in LLVM",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Module",
          "package": "ddc-core-llvm",
          "partial": "Module",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNames of variables.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "Name",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Exp.html#Name",
          "type": "data"
        },
        "index": {
          "description": "Names of variables",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Name",
          "package": "ddc-core-llvm",
          "partial": "Name",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary arithmetic operators.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "Op",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Op",
          "type": "data"
        },
        "index": {
          "description": "Binary arithmetic operators",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Op",
          "package": "ddc-core-llvm",
          "partial": "Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Op"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes a function parameter.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "Param",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Type.html#Param",
          "type": "data"
        },
        "index": {
          "description": "Describes function parameter",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Param",
          "package": "ddc-core-llvm",
          "partial": "Param",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParameter attributes are used to communicate additional information about\n   the result or parameters of a function\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ParamAttr",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Attr.html#ParamAttr",
          "type": "data"
        },
        "index": {
          "description": "Parameter attributes are used to communicate additional information about the result or parameters of function",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ParamAttr",
          "package": "ddc-core-llvm",
          "partial": "Param Attr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:ParamAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunctions can have a fixed amount of parameters, or a variable amount.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ParamListType",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Type.html#ParamListType",
          "type": "data"
        },
        "index": {
          "description": "Functions can have fixed amount of parameters or variable amount",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ParamListType",
          "package": "ddc-core-llvm",
          "partial": "Param List Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:ParamListType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe section name to put the function in.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "Section",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Function.html#Section",
          "type": "data"
        },
        "index": {
          "description": "The section name to put the function in",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Section",
          "package": "ddc-core-llvm",
          "partial": "Section",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Section"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLlvm Static Data.\n   These represent the possible global level variables and constants.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "Static",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Module.html#Static",
          "type": "data"
        },
        "index": {
          "description": "Llvm Static Data These represent the possible global level variables and constants",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Static",
          "package": "ddc-core-llvm",
          "partial": "Static",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Static"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLlvm Types.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "Type",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Type.html#Type",
          "type": "data"
        },
        "index": {
          "description": "Llvm Types",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Type",
          "package": "ddc-core-llvm",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type alias.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "TypeAlias",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Type.html#TypeAlias",
          "type": "data"
        },
        "index": {
          "description": "type alias",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "TypeAlias",
          "package": "ddc-core-llvm",
          "partial": "Type Alias",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:TypeAlias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variable that can be assigned to.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "Var",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Syntax-Exp.html#Var",
          "type": "data"
        },
        "index": {
          "description": "variable that can be assigned to",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Var",
          "package": "ddc-core-llvm",
          "partial": "Var",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#t:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Syntax",
          "name": "AlignBytes",
          "package": "ddc-core-llvm",
          "signature": "AlignBytes Integer",
          "source": "src/DDC-Llvm-Syntax-Type.html#Align",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "AlignBytes",
          "package": "ddc-core-llvm",
          "partial": "Align Bytes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:AlignBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Syntax",
          "name": "AlignNone",
          "package": "ddc-core-llvm",
          "signature": "AlignNone",
          "source": "src/DDC-Llvm-Syntax-Type.html#Align",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "AlignNone",
          "package": "ddc-core-llvm",
          "partial": "Align None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:AlignNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inliner should attempt to inline this function into callers\n   whenever possible, ignoring any active inlining size threshold for\n   this caller.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "AlwaysInline",
          "package": "ddc-core-llvm",
          "signature": "AlwaysInline",
          "source": "src/DDC-Llvm-Syntax-Attr.html#FuncAttr",
          "type": "function"
        },
        "index": {
          "description": "The inliner should attempt to inline this function into callers whenever possible ignoring any active inlining size threshold for this caller",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "AlwaysInline",
          "package": "ddc-core-llvm",
          "partial": "Always Inline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:AlwaysInline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Syntax",
          "name": "AnnotInstr",
          "package": "ddc-core-llvm",
          "signature": "AnnotInstr",
          "source": "src/DDC-Llvm-Syntax-Instr.html#AnnotInstr",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "AnnotInstr",
          "package": "ddc-core-llvm",
          "partial": "Annot Instr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:AnnotInstr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eappending\u003c/code\u003e linkage may only be applied to global variables of pointer\n  to array type. When two global variables with appending linkage are\n  linked together, the two global arrays are appended together. This is\n  the Llvm, typesafe, equivalent of having the system linker append\n  together \u003ccode\u003esections\u003c/code\u003e with identical names when .o files are linked.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "Appending",
          "package": "ddc-core-llvm",
          "signature": "Appending",
          "source": "src/DDC-Llvm-Syntax-Attr.html#Linkage",
          "type": "function"
        },
        "index": {
          "description": "appending linkage may only be applied to global variables of pointer to array type When two global variables with appending linkage are linked together the two global arrays are appended together This is the Llvm typesafe equivalent of having the system linker append together sections with identical names when files are linked",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Appending",
          "package": "ddc-core-llvm",
          "partial": "Appending",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:Appending"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Syntax",
          "name": "Block",
          "package": "ddc-core-llvm",
          "signature": "Block",
          "source": "src/DDC-Llvm-Syntax-Instr.html#Block",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Block",
          "package": "ddc-core-llvm",
          "partial": "Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe pointer parameter should really be passed by value to the function.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ByVal",
          "package": "ddc-core-llvm",
          "signature": "ByVal",
          "source": "src/DDC-Llvm-Syntax-Attr.html#ParamAttr",
          "type": "function"
        },
        "index": {
          "description": "The pointer parameter should really be passed by value to the function",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ByVal",
          "package": "ddc-core-llvm",
          "partial": "By Val",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ByVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe C calling convention.\n   This calling convention (the default if no other calling convention is\n   specified) matches the target C calling conventions. This calling\n   convention supports varargs function calls and tolerates some mismatch in\n   the declared prototype and implemented declaration of the function (as\n   does normal C).\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "CC_Ccc",
          "package": "ddc-core-llvm",
          "signature": "CC_Ccc",
          "source": "src/DDC-Llvm-Syntax-Attr.html#CallConv",
          "type": "function"
        },
        "index": {
          "description": "The calling convention This calling convention the default if no other calling convention is specified matches the target calling conventions This calling convention supports varargs function calls and tolerates some mismatch in the declared prototype and implemented declaration of the function as does normal",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "CC_Ccc",
          "package": "ddc-core-llvm",
          "partial": "CC Ccc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:CC_Ccc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis calling convention attempts to make code in the caller as efficient\n   as possible under the assumption that the call is not commonly executed.\n   As such, these calls often preserve all registers so that the call does\n   not break any live ranges in the caller side. This calling convention\n   does not support varargs and requires the prototype of all callees to\n   exactly match the prototype of the function definition.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "CC_Coldcc",
          "package": "ddc-core-llvm",
          "signature": "CC_Coldcc",
          "source": "src/DDC-Llvm-Syntax-Attr.html#CallConv",
          "type": "function"
        },
        "index": {
          "description": "This calling convention attempts to make code in the caller as efficient as possible under the assumption that the call is not commonly executed As such these calls often preserve all registers so that the call does not break any live ranges in the caller side This calling convention does not support varargs and requires the prototype of all callees to exactly match the prototype of the function definition",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "CC_Coldcc",
          "package": "ddc-core-llvm",
          "partial": "CC Coldcc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:CC_Coldcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis calling convention attempts to make calls as fast as possible\n   (e.g. by passing things in registers). This calling convention allows\n   the target to use whatever tricks it wants to produce fast code for the\n   target, without having to conform to an externally specified ABI\n   (Application Binary Interface). Implementations of this convention should\n   allow arbitrary tail call optimization to be supported. This calling\n   convention does not support varargs and requires the prototype of al\n   callees to exactly match the prototype of the function definition.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "CC_Fastcc",
          "package": "ddc-core-llvm",
          "signature": "CC_Fastcc",
          "source": "src/DDC-Llvm-Syntax-Attr.html#CallConv",
          "type": "function"
        },
        "index": {
          "description": "This calling convention attempts to make calls as fast as possible e.g by passing things in registers This calling convention allows the target to use whatever tricks it wants to produce fast code for the target without having to conform to an externally specified ABI Application Binary Interface Implementations of this convention should allow arbitrary tail call optimization to be supported This calling convention does not support varargs and requires the prototype of al callees to exactly match the prototype of the function definition",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "CC_Fastcc",
          "package": "ddc-core-llvm",
          "partial": "CC Fastcc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:CC_Fastcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny calling convention may be specified by number, allowing\n   target-specific calling conventions to be used. Target specific calling\n   conventions start at 64.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "CC_Ncc",
          "package": "ddc-core-llvm",
          "signature": "CC_Ncc Int",
          "source": "src/DDC-Llvm-Syntax-Attr.html#CallConv",
          "type": "function"
        },
        "index": {
          "description": "Any calling convention may be specified by number allowing target-specific calling conventions to be used Target specific calling conventions start at",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "CC_Ncc",
          "package": "ddc-core-llvm",
          "partial": "CC Ncc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:CC_Ncc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eX86 Specific \u003ccode\u003eStdCall\u003c/code\u003e convention. LLVM includes a specific alias for it\n   rather than just using CC_Ncc.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "CC_X86_Stdcc",
          "package": "ddc-core-llvm",
          "signature": "CC_X86_Stdcc",
          "source": "src/DDC-Llvm-Syntax-Attr.html#CallConv",
          "type": "function"
        },
        "index": {
          "description": "X86 Specific StdCall convention LLVM includes specific alias for it rather than just using CC Ncc",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "CC_X86_Stdcc",
          "package": "ddc-core-llvm",
          "partial": "CC Stdcc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:CC_X86_Stdcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormal call, allocate a new stack frame.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "CallTypeStd",
          "package": "ddc-core-llvm",
          "signature": "CallTypeStd",
          "source": "src/DDC-Llvm-Syntax-Attr.html#CallType",
          "type": "function"
        },
        "index": {
          "description": "Normal call allocate new stack frame",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "CallTypeStd",
          "package": "ddc-core-llvm",
          "partial": "Call Type Std",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:CallTypeStd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTail call, perform the call in the current stack frame.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "CallTypeTail",
          "package": "ddc-core-llvm",
          "signature": "CallTypeTail",
          "source": "src/DDC-Llvm-Syntax-Attr.html#CallType",
          "type": "function"
        },
        "index": {
          "description": "Tail call perform the call in the current stack frame",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "CallTypeTail",
          "package": "ddc-core-llvm",
          "partial": "Call Type Tail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:CallTypeTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast between types where no bit manipulation is needed\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ConvBitcast",
          "package": "ddc-core-llvm",
          "signature": "ConvBitcast",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Conv",
          "type": "function"
        },
        "index": {
          "description": "Cast between types where no bit manipulation is needed",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ConvBitcast",
          "package": "ddc-core-llvm",
          "partial": "Conv Bitcast",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ConvBitcast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFloat extend\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ConvFpext",
          "package": "ddc-core-llvm",
          "signature": "ConvFpext",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Conv",
          "type": "function"
        },
        "index": {
          "description": "Float extend",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ConvFpext",
          "package": "ddc-core-llvm",
          "partial": "Conv Fpext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ConvFpext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFloat to signed Integer\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ConvFptosi",
          "package": "ddc-core-llvm",
          "signature": "ConvFptosi",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Conv",
          "type": "function"
        },
        "index": {
          "description": "Float to signed Integer",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ConvFptosi",
          "package": "ddc-core-llvm",
          "partial": "Conv Fptosi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ConvFptosi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFloat to unsigned Integer\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ConvFptoui",
          "package": "ddc-core-llvm",
          "signature": "ConvFptoui",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Conv",
          "type": "function"
        },
        "index": {
          "description": "Float to unsigned Integer",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ConvFptoui",
          "package": "ddc-core-llvm",
          "partial": "Conv Fptoui",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ConvFptoui"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFloat truncate\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ConvFptrunc",
          "package": "ddc-core-llvm",
          "signature": "ConvFptrunc",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Conv",
          "type": "function"
        },
        "index": {
          "description": "Float truncate",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ConvFptrunc",
          "package": "ddc-core-llvm",
          "partial": "Conv Fptrunc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ConvFptrunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteger to Pointer\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ConvInttoptr",
          "package": "ddc-core-llvm",
          "signature": "ConvInttoptr",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Conv",
          "type": "function"
        },
        "index": {
          "description": "Integer to Pointer",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ConvInttoptr",
          "package": "ddc-core-llvm",
          "partial": "Conv Inttoptr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ConvInttoptr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePointer to Integer\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ConvPtrtoint",
          "package": "ddc-core-llvm",
          "signature": "ConvPtrtoint",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Conv",
          "type": "function"
        },
        "index": {
          "description": "Pointer to Integer",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ConvPtrtoint",
          "package": "ddc-core-llvm",
          "partial": "Conv Ptrtoint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ConvPtrtoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteger extend (sign fill)\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ConvSext",
          "package": "ddc-core-llvm",
          "signature": "ConvSext",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Conv",
          "type": "function"
        },
        "index": {
          "description": "Integer extend sign fill",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ConvSext",
          "package": "ddc-core-llvm",
          "partial": "Conv Sext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ConvSext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSigned Int to Float\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ConvSintofp",
          "package": "ddc-core-llvm",
          "signature": "ConvSintofp",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Conv",
          "type": "function"
        },
        "index": {
          "description": "Signed Int to Float",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ConvSintofp",
          "package": "ddc-core-llvm",
          "partial": "Conv Sintofp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ConvSintofp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteger truncate\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ConvTrunc",
          "package": "ddc-core-llvm",
          "signature": "ConvTrunc",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Conv",
          "type": "function"
        },
        "index": {
          "description": "Integer truncate",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ConvTrunc",
          "package": "ddc-core-llvm",
          "partial": "Conv Trunc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ConvTrunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsigned Integer to Float\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ConvUintofp",
          "package": "ddc-core-llvm",
          "signature": "ConvUintofp",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Conv",
          "type": "function"
        },
        "index": {
          "description": "Unsigned Integer to Float",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ConvUintofp",
          "package": "ddc-core-llvm",
          "partial": "Conv Uintofp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ConvUintofp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteger extend (zero fill)\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ConvZext",
          "package": "ddc-core-llvm",
          "signature": "ConvZext",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Conv",
          "type": "function"
        },
        "index": {
          "description": "Integer extend zero fill",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ConvZext",
          "package": "ddc-core-llvm",
          "partial": "Conv Zext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ConvZext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Syntax",
          "name": "Debug",
          "package": "ddc-core-llvm",
          "signature": "Debug",
          "source": "src/DDC-Llvm-Syntax-Metadata.html#Metadata",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Debug",
          "package": "ddc-core-llvm",
          "partial": "Debug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:Debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe semantics of this linkage follow the ELF model: the symbol is weak\n  until linked, if not linked, the symbol becomes null instead of being an\n  undefined reference.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ExternWeak",
          "package": "ddc-core-llvm",
          "signature": "ExternWeak",
          "source": "src/DDC-Llvm-Syntax-Attr.html#Linkage",
          "type": "function"
        },
        "index": {
          "description": "The semantics of this linkage follow the ELF model the symbol is weak until linked if not linked the symbol becomes null instead of being an undefined reference",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ExternWeak",
          "package": "ddc-core-llvm",
          "partial": "Extern Weak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ExternWeak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003eExternallyVisible\u003c/a\u003e\u003c/code\u003e but with explicit textual form in LLVM\n   assembly.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "External",
          "package": "ddc-core-llvm",
          "signature": "External",
          "source": "src/DDC-Llvm-Syntax-Attr.html#Linkage",
          "type": "function"
        },
        "index": {
          "description": "Alias for ExternallyVisible but with explicit textual form in LLVM assembly",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "External",
          "package": "ddc-core-llvm",
          "partial": "External",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:External"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe symbol participates in linkage and can be used to resolve external\n   symbol references.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ExternallyVisible",
          "package": "ddc-core-llvm",
          "signature": "ExternallyVisible",
          "source": "src/DDC-Llvm-Syntax-Attr.html#Linkage",
          "type": "function"
        },
        "index": {
          "description": "The symbol participates in linkage and can be used to resolve external symbol references",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ExternallyVisible",
          "package": "ddc-core-llvm",
          "partial": "Externally Visible",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ExternallyVisible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlways yields false, regardless of operands.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondFalse",
          "package": "ddc-core-llvm",
          "signature": "FCondFalse",
          "source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
          "type": "function"
        },
        "index": {
          "description": "Always yields false regardless of operands",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondFalse",
          "package": "ddc-core-llvm",
          "partial": "FCond False",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondFalse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoth operands are not a QNAN and op1 is equal to op2.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondOeq",
          "package": "ddc-core-llvm",
          "signature": "FCondOeq",
          "source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
          "type": "function"
        },
        "index": {
          "description": "Both operands are not QNAN and op1 is equal to op2",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondOeq",
          "package": "ddc-core-llvm",
          "partial": "FCond Oeq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondOeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoth operands are not a QNAN and op1 is greater than or equal to op2.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondOge",
          "package": "ddc-core-llvm",
          "signature": "FCondOge",
          "source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
          "type": "function"
        },
        "index": {
          "description": "Both operands are not QNAN and op1 is greater than or equal to op2",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondOge",
          "package": "ddc-core-llvm",
          "partial": "FCond Oge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondOge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoth operands are not a QNAN and op1 is greater than op2.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondOgt",
          "package": "ddc-core-llvm",
          "signature": "FCondOgt",
          "source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
          "type": "function"
        },
        "index": {
          "description": "Both operands are not QNAN and op1 is greater than op2",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondOgt",
          "package": "ddc-core-llvm",
          "partial": "FCond Ogt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondOgt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoth operands are not a QNAN and op1 is less than or equal to op2.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondOle",
          "package": "ddc-core-llvm",
          "signature": "FCondOle",
          "source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
          "type": "function"
        },
        "index": {
          "description": "Both operands are not QNAN and op1 is less than or equal to op2",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondOle",
          "package": "ddc-core-llvm",
          "partial": "FCond Ole",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondOle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoth operands are not a QNAN and op1 is less than op2.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondOlt",
          "package": "ddc-core-llvm",
          "signature": "FCondOlt",
          "source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
          "type": "function"
        },
        "index": {
          "description": "Both operands are not QNAN and op1 is less than op2",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondOlt",
          "package": "ddc-core-llvm",
          "partial": "FCond Olt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondOlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoth operands are not a QNAN and op1 is not equal to op2.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondOne",
          "package": "ddc-core-llvm",
          "signature": "FCondOne",
          "source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
          "type": "function"
        },
        "index": {
          "description": "Both operands are not QNAN and op1 is not equal to op2",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondOne",
          "package": "ddc-core-llvm",
          "partial": "FCond One",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoth operands are not a QNAN.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondOrd",
          "package": "ddc-core-llvm",
          "signature": "FCondOrd",
          "source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
          "type": "function"
        },
        "index": {
          "description": "Both operands are not QNAN",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondOrd",
          "package": "ddc-core-llvm",
          "partial": "FCond Ord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondOrd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlways yields true, regardless of operands.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondTrue",
          "package": "ddc-core-llvm",
          "signature": "FCondTrue",
          "source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
          "type": "function"
        },
        "index": {
          "description": "Always yields true regardless of operands",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondTrue",
          "package": "ddc-core-llvm",
          "partial": "FCond True",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondTrue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEither operand is a QNAN or op1 is equal to op2.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondUeq",
          "package": "ddc-core-llvm",
          "signature": "FCondUeq",
          "source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
          "type": "function"
        },
        "index": {
          "description": "Either operand is QNAN or op1 is equal to op2",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondUeq",
          "package": "ddc-core-llvm",
          "partial": "FCond Ueq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondUeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEither operand is a QNAN or op1 is greater than or equal to op2.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondUge",
          "package": "ddc-core-llvm",
          "signature": "FCondUge",
          "source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
          "type": "function"
        },
        "index": {
          "description": "Either operand is QNAN or op1 is greater than or equal to op2",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondUge",
          "package": "ddc-core-llvm",
          "partial": "FCond Uge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondUge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEither operand is a QNAN or op1 is greater than op2.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondUgt",
          "package": "ddc-core-llvm",
          "signature": "FCondUgt",
          "source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
          "type": "function"
        },
        "index": {
          "description": "Either operand is QNAN or op1 is greater than op2",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondUgt",
          "package": "ddc-core-llvm",
          "partial": "FCond Ugt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondUgt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEither operand is a QNAN or op1 is less than or equal to op2.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondUle",
          "package": "ddc-core-llvm",
          "signature": "FCondUle",
          "source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
          "type": "function"
        },
        "index": {
          "description": "Either operand is QNAN or op1 is less than or equal to op2",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondUle",
          "package": "ddc-core-llvm",
          "partial": "FCond Ule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondUle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEither operand is a QNAN or op1 is less than op2.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondUlt",
          "package": "ddc-core-llvm",
          "signature": "FCondUlt",
          "source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
          "type": "function"
        },
        "index": {
          "description": "Either operand is QNAN or op1 is less than op2",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondUlt",
          "package": "ddc-core-llvm",
          "partial": "FCond Ult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondUlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEither operand is a QNAN or op1 is not equal to op2.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondUne",
          "package": "ddc-core-llvm",
          "signature": "FCondUne",
          "source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
          "type": "function"
        },
        "index": {
          "description": "Either operand is QNAN or op1 is not equal to op2",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondUne",
          "package": "ddc-core-llvm",
          "partial": "FCond Une",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondUne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEither operand is a QNAN.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondUno",
          "package": "ddc-core-llvm",
          "signature": "FCondUno",
          "source": "src/DDC-Llvm-Syntax-Prim.html#FCond",
          "type": "function"
        },
        "index": {
          "description": "Either operand is QNAN",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "FCondUno",
          "package": "ddc-core-llvm",
          "partial": "FCond Uno",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FCondUno"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFixed amount of arguments.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "FixedArgs",
          "package": "ddc-core-llvm",
          "signature": "FixedArgs",
          "source": "src/DDC-Llvm-Syntax-Type.html#ParamListType",
          "type": "function"
        },
        "index": {
          "description": "Fixed amount of arguments",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "FixedArgs",
          "package": "ddc-core-llvm",
          "partial": "Fixed Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FixedArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Syntax",
          "name": "Function",
          "package": "ddc-core-llvm",
          "signature": "Function",
          "source": "src/DDC-Llvm-Syntax-Function.html#Function",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Function",
          "package": "ddc-core-llvm",
          "partial": "Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Syntax",
          "name": "FunctionDecl",
          "package": "ddc-core-llvm",
          "signature": "FunctionDecl",
          "source": "src/DDC-Llvm-Syntax-Type.html#FunctionDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "FunctionDecl",
          "package": "ddc-core-llvm",
          "partial": "Function Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:FunctionDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Syntax",
          "name": "GlobalExternal",
          "package": "ddc-core-llvm",
          "signature": "GlobalExternal Var",
          "source": "src/DDC-Llvm-Syntax-Module.html#Global",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "GlobalExternal",
          "package": "ddc-core-llvm",
          "partial": "Global External",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:GlobalExternal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Syntax",
          "name": "GlobalStatic",
          "package": "ddc-core-llvm",
          "signature": "GlobalStatic Var Static",
          "source": "src/DDC-Llvm-Syntax-Module.html#Global",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "GlobalStatic",
          "package": "ddc-core-llvm",
          "partial": "Global Static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:GlobalStatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnconditional branch to the target label.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "IBranch",
          "package": "ddc-core-llvm",
          "signature": "IBranch Label",
          "source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
          "type": "function"
        },
        "index": {
          "description": "Unconditional branch to the target label",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "IBranch",
          "package": "ddc-core-llvm",
          "partial": "IBranch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:IBranch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditional branch.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "IBranchIf",
          "package": "ddc-core-llvm",
          "signature": "IBranchIf Exp Label Label",
          "source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
          "type": "function"
        },
        "index": {
          "description": "Conditional branch",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "IBranchIf",
          "package": "ddc-core-llvm",
          "partial": "IBranch If",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:IBranchIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall a function. \n   Only NoReturn, NoUnwind and ReadNone attributes are valid.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ICall",
          "package": "ddc-core-llvm",
          "signature": "ICall (Maybe Var) CallType (Maybe CallConv) Type Name [Exp] [FuncAttr]",
          "source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
          "type": "function"
        },
        "index": {
          "description": "Call function Only NoReturn NoUnwind and ReadNone attributes are valid",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ICall",
          "normalized": "ICall(Maybe Var)CallType(Maybe CallConv)Type Name[Exp][FuncAttr]",
          "package": "ddc-core-llvm",
          "partial": "ICall",
          "signature": "ICall(Maybe Var)CallType(Maybe CallConv)Type Name[Exp][FuncAttr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ICall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComment meta-instruction.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "IComment",
          "package": "ddc-core-llvm",
          "signature": "IComment [String]",
          "source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
          "type": "function"
        },
        "index": {
          "description": "Comment meta-instruction",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "IComment",
          "normalized": "IComment[String]",
          "package": "ddc-core-llvm",
          "partial": "IComment",
          "signature": "IComment[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:IComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEqual (Signed and Unsigned)\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ICondEq",
          "package": "ddc-core-llvm",
          "signature": "ICondEq",
          "source": "src/DDC-Llvm-Syntax-Prim.html#ICond",
          "type": "function"
        },
        "index": {
          "description": "Equal Signed and Unsigned",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ICondEq",
          "package": "ddc-core-llvm",
          "partial": "ICond Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ICondEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot equal (Signed and Unsigned)\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ICondNe",
          "package": "ddc-core-llvm",
          "signature": "ICondNe",
          "source": "src/DDC-Llvm-Syntax-Prim.html#ICond",
          "type": "function"
        },
        "index": {
          "description": "Not equal Signed and Unsigned",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ICondNe",
          "package": "ddc-core-llvm",
          "partial": "ICond Ne",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ICondNe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSigned greater than or equal\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ICondSge",
          "package": "ddc-core-llvm",
          "signature": "ICondSge",
          "source": "src/DDC-Llvm-Syntax-Prim.html#ICond",
          "type": "function"
        },
        "index": {
          "description": "Signed greater than or equal",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ICondSge",
          "package": "ddc-core-llvm",
          "partial": "ICond Sge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ICondSge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSigned greater than\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ICondSgt",
          "package": "ddc-core-llvm",
          "signature": "ICondSgt",
          "source": "src/DDC-Llvm-Syntax-Prim.html#ICond",
          "type": "function"
        },
        "index": {
          "description": "Signed greater than",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ICondSgt",
          "package": "ddc-core-llvm",
          "partial": "ICond Sgt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ICondSgt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSigned less than or equal\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ICondSle",
          "package": "ddc-core-llvm",
          "signature": "ICondSle",
          "source": "src/DDC-Llvm-Syntax-Prim.html#ICond",
          "type": "function"
        },
        "index": {
          "description": "Signed less than or equal",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ICondSle",
          "package": "ddc-core-llvm",
          "partial": "ICond Sle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ICondSle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSigned less than\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ICondSlt",
          "package": "ddc-core-llvm",
          "signature": "ICondSlt",
          "source": "src/DDC-Llvm-Syntax-Prim.html#ICond",
          "type": "function"
        },
        "index": {
          "description": "Signed less than",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ICondSlt",
          "package": "ddc-core-llvm",
          "partial": "ICond Slt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ICondSlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsigned greater than or equal\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ICondUge",
          "package": "ddc-core-llvm",
          "signature": "ICondUge",
          "source": "src/DDC-Llvm-Syntax-Prim.html#ICond",
          "type": "function"
        },
        "index": {
          "description": "Unsigned greater than or equal",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ICondUge",
          "package": "ddc-core-llvm",
          "partial": "ICond Uge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ICondUge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsigned greater than\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ICondUgt",
          "package": "ddc-core-llvm",
          "signature": "ICondUgt",
          "source": "src/DDC-Llvm-Syntax-Prim.html#ICond",
          "type": "function"
        },
        "index": {
          "description": "Unsigned greater than",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ICondUgt",
          "package": "ddc-core-llvm",
          "partial": "ICond Ugt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ICondUgt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsigned less than or equal\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ICondUle",
          "package": "ddc-core-llvm",
          "signature": "ICondUle",
          "source": "src/DDC-Llvm-Syntax-Prim.html#ICond",
          "type": "function"
        },
        "index": {
          "description": "Unsigned less than or equal",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ICondUle",
          "package": "ddc-core-llvm",
          "partial": "ICond Ule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ICondUle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnsigned less than\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ICondUlt",
          "package": "ddc-core-llvm",
          "signature": "ICondUlt",
          "source": "src/DDC-Llvm-Syntax-Prim.html#ICond",
          "type": "function"
        },
        "index": {
          "description": "Unsigned less than",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ICondUlt",
          "package": "ddc-core-llvm",
          "partial": "ICond Ult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ICondUlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCast the variable from to the to type. This is an abstraction of three\n   cast operators in Llvm, inttoptr, prttoint and bitcast.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "IConv",
          "package": "ddc-core-llvm",
          "signature": "IConv Var Conv Exp",
          "source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
          "type": "function"
        },
        "index": {
          "description": "Cast the variable from to the to type This is an abstraction of three cast operators in Llvm inttoptr prttoint and bitcast",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "IConv",
          "package": "ddc-core-llvm",
          "partial": "IConv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:IConv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFloating-point comparison.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "IFCmp",
          "package": "ddc-core-llvm",
          "signature": "IFCmp Var FCond Exp Exp",
          "source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
          "type": "function"
        },
        "index": {
          "description": "Floating-point comparison",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "IFCmp",
          "package": "ddc-core-llvm",
          "partial": "IFCmp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:IFCmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteger comparison.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "IICmp",
          "package": "ddc-core-llvm",
          "signature": "IICmp Var ICond Exp Exp",
          "source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
          "type": "function"
        },
        "index": {
          "description": "Integer comparison",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "IICmp",
          "package": "ddc-core-llvm",
          "partial": "IICmp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:IICmp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a value from memory.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ILoad",
          "package": "ddc-core-llvm",
          "signature": "ILoad Var Exp",
          "source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
          "type": "function"
        },
        "index": {
          "description": "Load value from memory",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ILoad",
          "package": "ddc-core-llvm",
          "partial": "ILoad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ILoad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo operation.\n   This isn't accepted by the real LLVM compiler.\n   INop instructions are erased by the \u003ccode\u003eClean\u003c/code\u003e transform.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "INop",
          "package": "ddc-core-llvm",
          "signature": "INop",
          "source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
          "type": "function"
        },
        "index": {
          "description": "No operation This isn accepted by the real LLVM compiler INop instructions are erased by the Clean transform",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "INop",
          "package": "ddc-core-llvm",
          "partial": "INop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:INop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Syntax",
          "name": "IOp",
          "package": "ddc-core-llvm",
          "signature": "IOp Var Op Exp Exp",
          "source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "IOp",
          "package": "ddc-core-llvm",
          "partial": "IOp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:IOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Syntax",
          "name": "IPhi",
          "package": "ddc-core-llvm",
          "signature": "IPhi Var [(Exp, Label)]",
          "source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "IPhi",
          "normalized": "IPhi Var[(Exp,Label)]",
          "package": "ddc-core-llvm",
          "partial": "IPhi",
          "signature": "IPhi Var[(Exp,Label)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:IPhi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a result.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "IReturn",
          "package": "ddc-core-llvm",
          "signature": "IReturn (Maybe Exp)",
          "source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
          "type": "function"
        },
        "index": {
          "description": "Return result",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "IReturn",
          "package": "ddc-core-llvm",
          "partial": "IReturn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:IReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet meta instruction v1 = value.\n   This isn't accepted by the real LLVM compiler.\n   ISet instructions are erased by the \u003ccode\u003eClean\u003c/code\u003e transform.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ISet",
          "package": "ddc-core-llvm",
          "signature": "ISet Var Exp",
          "source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
          "type": "function"
        },
        "index": {
          "description": "Set meta instruction v1 value This isn accepted by the real LLVM compiler ISet instructions are erased by the Clean transform",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ISet",
          "package": "ddc-core-llvm",
          "partial": "ISet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ISet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a value to memory.\n   First expression gives the destination pointer.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "IStore",
          "package": "ddc-core-llvm",
          "signature": "IStore Exp Exp",
          "source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
          "type": "function"
        },
        "index": {
          "description": "Store value to memory First expression gives the destination pointer",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "IStore",
          "package": "ddc-core-llvm",
          "partial": "IStore",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:IStore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMutliway branch.\n   If scruitniee matches one of the literals in the list then jump\n   to the corresponding label, otherwise jump to the default.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ISwitch",
          "package": "ddc-core-llvm",
          "signature": "ISwitch Exp Label [(Lit, Label)]",
          "source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
          "type": "function"
        },
        "index": {
          "description": "Mutliway branch If scruitniee matches one of the literals in the list then jump to the corresponding label otherwise jump to the default",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ISwitch",
          "normalized": "ISwitch Exp Label[(Lit,Label)]",
          "package": "ddc-core-llvm",
          "partial": "ISwitch",
          "signature": "ISwitch Exp Label[(Lit,Label)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ISwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInforms the optimizer that instructions after this point are unreachable.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "IUnreachable",
          "package": "ddc-core-llvm",
          "signature": "IUnreachable",
          "source": "src/DDC-Llvm-Syntax-Instr.html#Instr",
          "type": "function"
        },
        "index": {
          "description": "Informs the optimizer that instructions after this point are unreachable",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "IUnreachable",
          "package": "ddc-core-llvm",
          "partial": "IUnreachable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:IUnreachable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parameter or return value should be treated in a special target-dependent\n   fashion during while emitting code for a function call or return (usually,\n   by putting it in a register as opposed to memory).\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "InReg",
          "package": "ddc-core-llvm",
          "signature": "InReg",
          "source": "src/DDC-Llvm-Syntax-Attr.html#ParamAttr",
          "type": "function"
        },
        "index": {
          "description": "The parameter or return value should be treated in special target-dependent fashion during while emitting code for function call or return usually by putting it in register as opposed to memory",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "InReg",
          "package": "ddc-core-llvm",
          "partial": "In Reg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:InReg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe source code contained a hint that inlining this function is\n   desirable (such as the \"inline\" keyword in C/C++). \n   It is just a hint; it imposes no requirements on the inliner.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "InlineHint",
          "package": "ddc-core-llvm",
          "signature": "InlineHint",
          "source": "src/DDC-Llvm-Syntax-Attr.html#FuncAttr",
          "type": "function"
        },
        "index": {
          "description": "The source code contained hint that inlining this function is desirable such as the inline keyword in It is just hint it imposes no requirements on the inliner",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "InlineHint",
          "package": "ddc-core-llvm",
          "partial": "Inline Hint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:InlineHint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlobal values with internal linkage are only directly accessible by\n  objects in the current module. In particular, linking code into a module\n  with an internal global value may cause the internal to be renamed as\n  necessary to avoid collisions. Because the symbol is internal to the\n  module, all references can be updated. This corresponds to the notion\n  of the \u003ccode\u003estatic\u003c/code\u003e keyword in C.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "Internal",
          "package": "ddc-core-llvm",
          "signature": "Internal",
          "source": "src/DDC-Llvm-Syntax-Attr.html#Linkage",
          "type": "function"
        },
        "index": {
          "description": "Global values with internal linkage are only directly accessible by objects in the current module In particular linking code into module with an internal global value may cause the internal to be renamed as necessary to avoid collisions Because the symbol is internal to the module all references can be updated This corresponds to the notion of the static keyword in",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Internal",
          "package": "ddc-core-llvm",
          "partial": "Internal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:Internal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Syntax",
          "name": "Label",
          "package": "ddc-core-llvm",
          "signature": "Label String",
          "source": "src/DDC-Llvm-Syntax-Instr.html#Label",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Label",
          "package": "ddc-core-llvm",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlobals with \u003ccode\u003elinkonce\u003c/code\u003e linkage are merged with other globals of the\n  same name when linkage occurs. This is typically used to implement\n  inline functions, templates, or other code which must be generated\n  in each translation unit that uses it. Unreferenced linkonce globals are\n  allowed to be discarded.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "LinkOnce",
          "package": "ddc-core-llvm",
          "signature": "LinkOnce",
          "source": "src/DDC-Llvm-Syntax-Attr.html#Linkage",
          "type": "function"
        },
        "index": {
          "description": "Globals with linkonce linkage are merged with other globals of the same name when linkage occurs This is typically used to implement inline functions templates or other code which must be generated in each translation unit that uses it Unreferenced linkonce globals are allowed to be discarded",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "LinkOnce",
          "package": "ddc-core-llvm",
          "partial": "Link Once",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:LinkOnce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA floating-point literal.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "LitFloat",
          "package": "ddc-core-llvm",
          "signature": "LitFloat Type Double",
          "source": "src/DDC-Llvm-Syntax-Exp.html#Lit",
          "type": "function"
        },
        "index": {
          "description": "floating-point literal",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "LitFloat",
          "package": "ddc-core-llvm",
          "partial": "Lit Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:LitFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn integer literal\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "LitInt",
          "package": "ddc-core-llvm",
          "signature": "LitInt Type Integer",
          "source": "src/DDC-Llvm-Syntax-Exp.html#Lit",
          "type": "function"
        },
        "index": {
          "description": "An integer literal",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "LitInt",
          "package": "ddc-core-llvm",
          "partial": "Lit Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:LitInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA null pointer literal.\n   Only applicable to pointer types\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "LitNull",
          "package": "ddc-core-llvm",
          "signature": "LitNull Type",
          "source": "src/DDC-Llvm-Syntax-Exp.html#Lit",
          "type": "function"
        },
        "index": {
          "description": "null pointer literal Only applicable to pointer types",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "LitNull",
          "package": "ddc-core-llvm",
          "partial": "Lit Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:LitNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA completely undefined value.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "LitUndef",
          "package": "ddc-core-llvm",
          "signature": "LitUndef Type",
          "source": "src/DDC-Llvm-Syntax-Exp.html#Lit",
          "type": "function"
        },
        "index": {
          "description": "completely undefined value",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "LitUndef",
          "package": "ddc-core-llvm",
          "partial": "Lit Undef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:LitUndef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Syntax",
          "name": "MDecl",
          "package": "ddc-core-llvm",
          "signature": "MDecl MRef Metadata",
          "source": "src/DDC-Llvm-Syntax-Metadata.html#MDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "MDecl",
          "package": "ddc-core-llvm",
          "partial": "MDecl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:MDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Syntax",
          "name": "MRef",
          "package": "ddc-core-llvm",
          "signature": "MRef Int",
          "source": "src/DDC-Llvm-Syntax-Metadata.html#MRef",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "MRef",
          "package": "ddc-core-llvm",
          "partial": "MRef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:MRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Syntax",
          "name": "Module",
          "package": "ddc-core-llvm",
          "signature": "Module",
          "source": "src/DDC-Llvm-Syntax-Module.html#Module",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Module",
          "package": "ddc-core-llvm",
          "partial": "Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:Module"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisables prologue / epilogue emission for the function.\n   This can have very system-specific consequences.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "Naked",
          "package": "ddc-core-llvm",
          "signature": "Naked",
          "source": "src/DDC-Llvm-Syntax-Attr.html#FuncAttr",
          "type": "function"
        },
        "index": {
          "description": "Disables prologue epilogue emission for the function This can have very system-specific consequences",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Naked",
          "package": "ddc-core-llvm",
          "partial": "Naked",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:Naked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Syntax",
          "name": "NameGlobal",
          "package": "ddc-core-llvm",
          "signature": "NameGlobal String",
          "source": "src/DDC-Llvm-Syntax-Exp.html#Name",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "NameGlobal",
          "package": "ddc-core-llvm",
          "partial": "Name Global",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:NameGlobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Syntax",
          "name": "NameLocal",
          "package": "ddc-core-llvm",
          "signature": "NameLocal String",
          "source": "src/DDC-Llvm-Syntax-Exp.html#Name",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "NameLocal",
          "package": "ddc-core-llvm",
          "partial": "Name Local",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:NameLocal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe pointer parameter can be excised using the trampoline intrinsics.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "Nest",
          "package": "ddc-core-llvm",
          "signature": "Nest",
          "source": "src/DDC-Llvm-Syntax-Attr.html#ParamAttr",
          "type": "function"
        },
        "index": {
          "description": "The pointer parameter can be excised using the trampoline intrinsics",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Nest",
          "package": "ddc-core-llvm",
          "partial": "Nest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:Nest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe pointer does not alias any global or any other parameter.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "NoAlias",
          "package": "ddc-core-llvm",
          "signature": "NoAlias",
          "source": "src/DDC-Llvm-Syntax-Attr.html#ParamAttr",
          "type": "function"
        },
        "index": {
          "description": "The pointer does not alias any global or any other parameter",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "NoAlias",
          "package": "ddc-core-llvm",
          "partial": "No Alias",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:NoAlias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe callee does not make any copies of the pointer that outlive the callee itself.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "NoCapture",
          "package": "ddc-core-llvm",
          "signature": "NoCapture",
          "source": "src/DDC-Llvm-Syntax-Attr.html#ParamAttr",
          "type": "function"
        },
        "index": {
          "description": "The callee does not make any copies of the pointer that outlive the callee itself",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "NoCapture",
          "package": "ddc-core-llvm",
          "partial": "No Capture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:NoCapture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisables implicit floating point instructions.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "NoImplicitFloat",
          "package": "ddc-core-llvm",
          "signature": "NoImplicitFloat",
          "source": "src/DDC-Llvm-Syntax-Attr.html#FuncAttr",
          "type": "function"
        },
        "index": {
          "description": "Disables implicit floating point instructions",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "NoImplicitFloat",
          "package": "ddc-core-llvm",
          "partial": "No Implicit Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:NoImplicitFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inliner should never inline this function in any situation. \n   This attribute may not be used together with the alwaysinline attribute.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "NoInline",
          "package": "ddc-core-llvm",
          "signature": "NoInline",
          "source": "src/DDC-Llvm-Syntax-Attr.html#FuncAttr",
          "type": "function"
        },
        "index": {
          "description": "The inliner should never inline this function in any situation This attribute may not be used together with the alwaysinline attribute",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "NoInline",
          "package": "ddc-core-llvm",
          "partial": "No Inline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:NoInline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe code generator should not use a red zone, even if the\n   target-specific ABI normally permits it.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "NoRedZone",
          "package": "ddc-core-llvm",
          "signature": "NoRedZone",
          "source": "src/DDC-Llvm-Syntax-Attr.html#FuncAttr",
          "type": "function"
        },
        "index": {
          "description": "The code generator should not use red zone even if the target-specific ABI normally permits it",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "NoRedZone",
          "package": "ddc-core-llvm",
          "partial": "No Red Zone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:NoRedZone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function never returns normally. \n   This produces undefined behavior at runtime if the function ever does\n   dynamically return.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "NoReturn",
          "package": "ddc-core-llvm",
          "signature": "NoReturn",
          "source": "src/DDC-Llvm-Syntax-Attr.html#FuncAttr",
          "type": "function"
        },
        "index": {
          "description": "The function never returns normally This produces undefined behavior at runtime if the function ever does dynamically return",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "NoReturn",
          "package": "ddc-core-llvm",
          "partial": "No Return",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:NoReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function never returns with an unwind or exceptional control flow. \n   If the function does unwind, its runtime behavior is undefined.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "NoUnwind",
          "package": "ddc-core-llvm",
          "signature": "NoUnwind",
          "source": "src/DDC-Llvm-Syntax-Attr.html#FuncAttr",
          "type": "function"
        },
        "index": {
          "description": "The function never returns with an unwind or exceptional control flow If the function does unwind its runtime behavior is undefined",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "NoUnwind",
          "package": "ddc-core-llvm",
          "partial": "No Unwind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:NoUnwind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArithmetic shift right.\n   The most significant bits of the result will be equal to the\n   sign bit of the left operand.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "OpAShr",
          "package": "ddc-core-llvm",
          "signature": "OpAShr",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Op",
          "type": "function"
        },
        "index": {
          "description": "Arithmetic shift right The most significant bits of the result will be equal to the sign bit of the left operand",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "OpAShr",
          "package": "ddc-core-llvm",
          "partial": "Op AShr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpAShr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd two integers, floating point or vector values.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "OpAdd",
          "package": "ddc-core-llvm",
          "signature": "OpAdd",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Op",
          "type": "function"
        },
        "index": {
          "description": "add two integers floating point or vector values",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "OpAdd",
          "package": "ddc-core-llvm",
          "partial": "Op Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAND bitwise logical operation.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "OpAnd",
          "package": "ddc-core-llvm",
          "signature": "OpAnd",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Op",
          "type": "function"
        },
        "index": {
          "description": "AND bitwise logical operation",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "OpAnd",
          "package": "ddc-core-llvm",
          "partial": "Op And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd two floating point or vector values.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "OpFAdd",
          "package": "ddc-core-llvm",
          "signature": "OpFAdd",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Op",
          "type": "function"
        },
        "index": {
          "description": "add two floating point or vector values",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "OpFAdd",
          "package": "ddc-core-llvm",
          "partial": "Op FAdd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpFAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edivide ...\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "OpFDiv",
          "package": "ddc-core-llvm",
          "signature": "OpFDiv",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Op",
          "type": "function"
        },
        "index": {
          "description": "divide",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "OpFDiv",
          "package": "ddc-core-llvm",
          "partial": "Op FDiv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpFDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emultiply ...\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "OpFMul",
          "package": "ddc-core-llvm",
          "signature": "OpFMul",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Op",
          "type": "function"
        },
        "index": {
          "description": "multiply",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "OpFMul",
          "package": "ddc-core-llvm",
          "partial": "Op FMul",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpFMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eremainder ...\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "OpFRem",
          "package": "ddc-core-llvm",
          "signature": "OpFRem",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Op",
          "type": "function"
        },
        "index": {
          "description": "remainder",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "OpFRem",
          "package": "ddc-core-llvm",
          "partial": "Op FRem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpFRem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esubtract two ...\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "OpFSub",
          "package": "ddc-core-llvm",
          "signature": "OpFSub",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Op",
          "type": "function"
        },
        "index": {
          "description": "subtract two",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "OpFSub",
          "package": "ddc-core-llvm",
          "partial": "Op FSub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpFSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical shift right\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "OpLShr",
          "package": "ddc-core-llvm",
          "signature": "OpLShr",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Op",
          "type": "function"
        },
        "index": {
          "description": "Logical shift right",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "OpLShr",
          "package": "ddc-core-llvm",
          "partial": "Op LShr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpLShr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emultiply ..\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "OpMul",
          "package": "ddc-core-llvm",
          "signature": "OpMul",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Op",
          "type": "function"
        },
        "index": {
          "description": "multiply",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "OpMul",
          "package": "ddc-core-llvm",
          "partial": "Op Mul",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOR bitwise logical operation.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "OpOr",
          "package": "ddc-core-llvm",
          "signature": "OpOr",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Op",
          "type": "function"
        },
        "index": {
          "description": "OR bitwise logical operation",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "OpOr",
          "package": "ddc-core-llvm",
          "partial": "Op Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esigned integer ..\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "OpSDiv",
          "package": "ddc-core-llvm",
          "signature": "OpSDiv",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Op",
          "type": "function"
        },
        "index": {
          "description": "signed integer",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "OpSDiv",
          "package": "ddc-core-llvm",
          "partial": "Op SDiv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpSDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esigned ...\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "OpSRem",
          "package": "ddc-core-llvm",
          "signature": "OpSRem",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Op",
          "type": "function"
        },
        "index": {
          "description": "signed",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "OpSRem",
          "package": "ddc-core-llvm",
          "partial": "Op SRem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpSRem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft shift.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "OpShl",
          "package": "ddc-core-llvm",
          "signature": "OpShl",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Op",
          "type": "function"
        },
        "index": {
          "description": "Left shift",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "OpShl",
          "package": "ddc-core-llvm",
          "partial": "Op Shl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpShl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esubtract two ...\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "OpSub",
          "package": "ddc-core-llvm",
          "signature": "OpSub",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Op",
          "type": "function"
        },
        "index": {
          "description": "subtract two",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "OpSub",
          "package": "ddc-core-llvm",
          "partial": "Op Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunsigned integer or vector division.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "OpUDiv",
          "package": "ddc-core-llvm",
          "signature": "OpUDiv",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Op",
          "type": "function"
        },
        "index": {
          "description": "unsigned integer or vector division",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "OpUDiv",
          "package": "ddc-core-llvm",
          "partial": "Op UDiv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpUDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunsigned integer or vector remainder\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "OpURem",
          "package": "ddc-core-llvm",
          "signature": "OpURem",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Op",
          "type": "function"
        },
        "index": {
          "description": "unsigned integer or vector remainder",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "OpURem",
          "package": "ddc-core-llvm",
          "partial": "Op URem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpURem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eXOR bitwise logical operation.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "OpXor",
          "package": "ddc-core-llvm",
          "signature": "OpXor",
          "source": "src/DDC-Llvm-Syntax-Prim.html#Op",
          "type": "function"
        },
        "index": {
          "description": "XOR bitwise logical operation",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "OpXor",
          "package": "ddc-core-llvm",
          "partial": "Op Xor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OpXor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuggests that optimization passes and code generator passes make choices\n   that keep the code size of this function low, and otherwise do\n   optimizations specifically to reduce code size.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "OptSize",
          "package": "ddc-core-llvm",
          "signature": "OptSize",
          "source": "src/DDC-Llvm-Syntax-Attr.html#FuncAttr",
          "type": "function"
        },
        "index": {
          "description": "Suggests that optimization passes and code generator passes make choices that keep the code size of this function low and otherwise do optimizations specifically to reduce code size",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "OptSize",
          "package": "ddc-core-llvm",
          "partial": "Opt Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:OptSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Syntax",
          "name": "Param",
          "package": "ddc-core-llvm",
          "signature": "Param",
          "source": "src/DDC-Llvm-Syntax-Type.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Param",
          "package": "ddc-core-llvm",
          "partial": "Param",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:Param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function computes its result (or decides to unwind an exception) \n   based strictly on its arguments, without\n   dereferencing any pointer arguments or otherwise accessing any mutable\n   state (e.g. memory, control registers, etc) visible to caller functions.\n   It does not write through any pointer arguments (including byval\n   arguments) and never changes any state visible to callers. This means\n   that it cannot unwind exceptions by calling the C++ exception throwing\n   methods, but could use the unwind instruction.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ReadNone",
          "package": "ddc-core-llvm",
          "signature": "ReadNone",
          "source": "src/DDC-Llvm-Syntax-Attr.html#FuncAttr",
          "type": "function"
        },
        "index": {
          "description": "The function computes its result or decides to unwind an exception based strictly on its arguments without dereferencing any pointer arguments or otherwise accessing any mutable state e.g memory control registers etc visible to caller functions It does not write through any pointer arguments including byval arguments and never changes any state visible to callers This means that it cannot unwind exceptions by calling the exception throwing methods but could use the unwind instruction",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ReadNone",
          "package": "ddc-core-llvm",
          "partial": "Read None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ReadNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function does not write through any\n   pointer arguments (including byval arguments) or otherwise modify any\n   state (e.g. memory, control registers, etc) visible to caller functions.\n   It may dereference pointer arguments and read state that may be set in\n   the caller. A readonly function always returns the same value (or unwinds\n   an exception identically) when called with the same set of arguments and\n   global state. It cannot unwind an exception by calling the C++ exception\n   throwing methods, but may use the unwind instruction.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ReadOnly",
          "package": "ddc-core-llvm",
          "signature": "ReadOnly",
          "source": "src/DDC-Llvm-Syntax-Attr.html#FuncAttr",
          "type": "function"
        },
        "index": {
          "description": "The function does not write through any pointer arguments including byval arguments or otherwise modify any state e.g memory control registers etc visible to caller functions It may dereference pointer arguments and read state that may be set in the caller readonly function always returns the same value or unwinds an exception identically when called with the same set of arguments and global state It cannot unwind an exception by calling the exception throwing methods but may use the unwind instruction",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ReadOnly",
          "package": "ddc-core-llvm",
          "partial": "Read Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ReadOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe pointer parameter specifies the address of a structure that is the\n   return value of the function in the source program.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "SRet",
          "package": "ddc-core-llvm",
          "signature": "SRet",
          "source": "src/DDC-Llvm-Syntax-Attr.html#ParamAttr",
          "type": "function"
        },
        "index": {
          "description": "The pointer parameter specifies the address of structure that is the return value of the function in the source program",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "SRet",
          "package": "ddc-core-llvm",
          "partial": "SRet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:SRet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLet the LLVM decide what section to put this in.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "SectionAuto",
          "package": "ddc-core-llvm",
          "signature": "SectionAuto",
          "source": "src/DDC-Llvm-Syntax-Function.html#Section",
          "type": "function"
        },
        "index": {
          "description": "Let the LLVM decide what section to put this in",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "SectionAuto",
          "package": "ddc-core-llvm",
          "partial": "Section Auto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:SectionAuto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut it in this specific section.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "SectionSpecific",
          "package": "ddc-core-llvm",
          "signature": "SectionSpecific String",
          "source": "src/DDC-Llvm-Syntax-Function.html#Section",
          "type": "function"
        },
        "index": {
          "description": "Put it in this specific section",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "SectionSpecific",
          "package": "ddc-core-llvm",
          "partial": "Section Specific",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:SectionSpecific"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parameter or return value should be sign-extended to a 32-bit value\n   by the caller (for a parameter) or the callee (for a return value).\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "SignExt",
          "package": "ddc-core-llvm",
          "signature": "SignExt",
          "source": "src/DDC-Llvm-Syntax-Attr.html#ParamAttr",
          "type": "function"
        },
        "index": {
          "description": "The parameter or return value should be sign-extended to bit value by the caller for parameter or the callee for return value",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "SignExt",
          "package": "ddc-core-llvm",
          "partial": "Sign Ext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:SignExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function should emit a stack smashing protector. \n   It is in the form of a \"canary\"&#8212;a random value placed on the\n   stack before the local variables that's checked upon return from the\n   function to see if it has been overwritten. A heuristic is used to\n   determine if a function needs stack protectors or not.\n   If a function that has an ssp attribute is inlined into a function that\n   doesn't have an ssp attribute, then the resulting function will have an\n   ssp attribute.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "Ssp",
          "package": "ddc-core-llvm",
          "signature": "Ssp",
          "source": "src/DDC-Llvm-Syntax-Attr.html#FuncAttr",
          "type": "function"
        },
        "index": {
          "description": "The function should emit stack smashing protector It is in the form of canary random value placed on the stack before the local variables that checked upon return from the function to see if it has been overwritten heuristic is used to determine if function needs stack protectors or not If function that has an ssp attribute is inlined into function that doesn have an ssp attribute then the resulting function will have an ssp attribute",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Ssp",
          "package": "ddc-core-llvm",
          "partial": "Ssp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:Ssp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function should always emit a stack smashing protector. \n   This overrides the ssp function attribute.\n   If a function that has an sspreq attribute is inlined into a function\n   that doesn't have an sspreq attribute or which has an ssp attribute,\n   then the resulting function will have an sspreq attribute.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "SspReq",
          "package": "ddc-core-llvm",
          "signature": "SspReq",
          "source": "src/DDC-Llvm-Syntax-Attr.html#FuncAttr",
          "type": "function"
        },
        "index": {
          "description": "The function should always emit stack smashing protector This overrides the ssp function attribute If function that has an sspreq attribute is inlined into function that doesn have an sspreq attribute or which has an ssp attribute then the resulting function will have an sspreq attribute",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "SspReq",
          "package": "ddc-core-llvm",
          "partial": "Ssp Req",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:SspReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant addition operation.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "StaticAdd",
          "package": "ddc-core-llvm",
          "signature": "StaticAdd Static Static",
          "source": "src/DDC-Llvm-Syntax-Module.html#Static",
          "type": "function"
        },
        "index": {
          "description": "Constant addition operation",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "StaticAdd",
          "package": "ddc-core-llvm",
          "partial": "Static Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:StaticAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA static array.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "StaticArray",
          "package": "ddc-core-llvm",
          "signature": "StaticArray [Static] Type",
          "source": "src/DDC-Llvm-Syntax-Module.html#Static",
          "type": "function"
        },
        "index": {
          "description": "static array",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "StaticArray",
          "normalized": "StaticArray[Static]Type",
          "package": "ddc-core-llvm",
          "partial": "Static Array",
          "signature": "StaticArray[Static]Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:StaticArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePointer to Pointer conversion.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "StaticBitc",
          "package": "ddc-core-llvm",
          "signature": "StaticBitc Static Type",
          "source": "src/DDC-Llvm-Syntax-Module.html#Static",
          "type": "function"
        },
        "index": {
          "description": "Pointer to Pointer conversion",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "StaticBitc",
          "package": "ddc-core-llvm",
          "partial": "Static Bitc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:StaticBitc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA comment in a static section.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "StaticComment",
          "package": "ddc-core-llvm",
          "signature": "StaticComment String",
          "source": "src/DDC-Llvm-Syntax-Module.html#Static",
          "type": "function"
        },
        "index": {
          "description": "comment in static section",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "StaticComment",
          "package": "ddc-core-llvm",
          "partial": "Static Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:StaticComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA static variant of a literal value.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "StaticLit",
          "package": "ddc-core-llvm",
          "signature": "StaticLit Lit",
          "source": "src/DDC-Llvm-Syntax-Module.html#Static",
          "type": "function"
        },
        "index": {
          "description": "static variant of literal value",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "StaticLit",
          "package": "ddc-core-llvm",
          "partial": "Static Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:StaticLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pointer to other data.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "StaticPointer",
          "package": "ddc-core-llvm",
          "signature": "StaticPointer Var",
          "source": "src/DDC-Llvm-Syntax-Module.html#Static",
          "type": "function"
        },
        "index": {
          "description": "pointer to other data",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "StaticPointer",
          "package": "ddc-core-llvm",
          "partial": "Static Pointer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:StaticPointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePointer to Integer conversion.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "StaticPtoI",
          "package": "ddc-core-llvm",
          "signature": "StaticPtoI Static Type",
          "source": "src/DDC-Llvm-Syntax-Module.html#Static",
          "type": "function"
        },
        "index": {
          "description": "Pointer to Integer conversion",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "StaticPtoI",
          "package": "ddc-core-llvm",
          "partial": "Static Pto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:StaticPtoI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines a static \u003ccode\u003eLMString\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "StaticStr",
          "package": "ddc-core-llvm",
          "signature": "StaticStr String Type",
          "source": "src/DDC-Llvm-Syntax-Module.html#Static",
          "type": "function"
        },
        "index": {
          "description": "Defines static LMString",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "StaticStr",
          "package": "ddc-core-llvm",
          "partial": "Static Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:StaticStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA static structure type.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "StaticStruct",
          "package": "ddc-core-llvm",
          "signature": "StaticStruct [Static] Type",
          "source": "src/DDC-Llvm-Syntax-Module.html#Static",
          "type": "function"
        },
        "index": {
          "description": "static structure type",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "StaticStruct",
          "normalized": "StaticStruct[Static]Type",
          "package": "ddc-core-llvm",
          "partial": "Static Struct",
          "signature": "StaticStruct[Static]Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:StaticStruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstant subtraction operation.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "StaticSub",
          "package": "ddc-core-llvm",
          "signature": "StaticSub Static Static",
          "source": "src/DDC-Llvm-Syntax-Module.html#Static",
          "type": "function"
        },
        "index": {
          "description": "Constant subtraction operation",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "StaticSub",
          "package": "ddc-core-llvm",
          "partial": "Static Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:StaticSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor uninitialised data.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "StaticUninitType",
          "package": "ddc-core-llvm",
          "signature": "StaticUninitType Type",
          "source": "src/DDC-Llvm-Syntax-Module.html#Static",
          "type": "function"
        },
        "index": {
          "description": "For uninitialised data",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "StaticUninitType",
          "package": "ddc-core-llvm",
          "partial": "Static Uninit Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:StaticUninitType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type alias.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "TAlias",
          "package": "ddc-core-llvm",
          "signature": "TAlias TypeAlias",
          "source": "src/DDC-Llvm-Syntax-Type.html#Type",
          "type": "function"
        },
        "index": {
          "description": "type alias",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "TAlias",
          "package": "ddc-core-llvm",
          "partial": "TAlias",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:TAlias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn array of things.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "TArray",
          "package": "ddc-core-llvm",
          "signature": "TArray Integer Type",
          "source": "src/DDC-Llvm-Syntax-Type.html#Type",
          "type": "function"
        },
        "index": {
          "description": "An array of things",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "TArray",
          "package": "ddc-core-llvm",
          "partial": "TArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:TArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e64-bit floating point\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "TDouble",
          "package": "ddc-core-llvm",
          "signature": "TDouble",
          "source": "src/DDC-Llvm-Syntax-Type.html#Type",
          "type": "function"
        },
        "index": {
          "description": "bit floating point",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "TDouble",
          "package": "ddc-core-llvm",
          "partial": "TDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:TDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e32-bit floating point\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "TFloat",
          "package": "ddc-core-llvm",
          "signature": "TFloat",
          "source": "src/DDC-Llvm-Syntax-Type.html#Type",
          "type": "function"
        },
        "index": {
          "description": "bit floating point",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "TFloat",
          "package": "ddc-core-llvm",
          "partial": "TFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:TFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e128 bit floating point\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "TFloat128",
          "package": "ddc-core-llvm",
          "signature": "TFloat128",
          "source": "src/DDC-Llvm-Syntax-Type.html#Type",
          "type": "function"
        },
        "index": {
          "description": "bit floating point",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "TFloat128",
          "package": "ddc-core-llvm",
          "partial": "TFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:TFloat128"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e80 bit (x86 only) floating point\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "TFloat80",
          "package": "ddc-core-llvm",
          "signature": "TFloat80",
          "source": "src/DDC-Llvm-Syntax-Type.html#Type",
          "type": "function"
        },
        "index": {
          "description": "bit x86 only floating point",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "TFloat80",
          "package": "ddc-core-llvm",
          "partial": "TFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:TFloat80"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction type, used to create pointers to functions.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "TFunction",
          "package": "ddc-core-llvm",
          "signature": "TFunction FunctionDecl",
          "source": "src/DDC-Llvm-Syntax-Type.html#Type",
          "type": "function"
        },
        "index": {
          "description": "Function type used to create pointers to functions",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "TFunction",
          "package": "ddc-core-llvm",
          "partial": "TFunction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:TFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn integer with a given width in bits.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "TInt",
          "package": "ddc-core-llvm",
          "signature": "TInt Integer",
          "source": "src/DDC-Llvm-Syntax-Type.html#Type",
          "type": "function"
        },
        "index": {
          "description": "An integer with given width in bits",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "TInt",
          "package": "ddc-core-llvm",
          "partial": "TInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:TInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA block label.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "TLabel",
          "package": "ddc-core-llvm",
          "signature": "TLabel",
          "source": "src/DDC-Llvm-Syntax-Type.html#Type",
          "type": "function"
        },
        "index": {
          "description": "block label",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "TLabel",
          "package": "ddc-core-llvm",
          "partial": "TLabel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:TLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pointer to another type of thing.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "TPointer",
          "package": "ddc-core-llvm",
          "signature": "TPointer Type",
          "source": "src/DDC-Llvm-Syntax-Type.html#Type",
          "type": "function"
        },
        "index": {
          "description": "pointer to another type of thing",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "TPointer",
          "package": "ddc-core-llvm",
          "partial": "TPointer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:TPointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA structure type.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "TStruct",
          "package": "ddc-core-llvm",
          "signature": "TStruct [Type]",
          "source": "src/DDC-Llvm-Syntax-Type.html#Type",
          "type": "function"
        },
        "index": {
          "description": "structure type",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "TStruct",
          "normalized": "TStruct[Type]",
          "package": "ddc-core-llvm",
          "partial": "TStruct",
          "signature": "TStruct[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:TStruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVoid type\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "TVoid",
          "package": "ddc-core-llvm",
          "signature": "TVoid",
          "source": "src/DDC-Llvm-Syntax-Type.html#Type",
          "type": "function"
        },
        "index": {
          "description": "Void type",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "TVoid",
          "package": "ddc-core-llvm",
          "partial": "TVoid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:TVoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Syntax",
          "name": "Tbaa",
          "package": "ddc-core-llvm",
          "signature": "Tbaa MDNode",
          "source": "src/DDC-Llvm-Syntax-Metadata.html#Metadata",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Tbaa",
          "package": "ddc-core-llvm",
          "partial": "Tbaa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:Tbaa"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Syntax",
          "name": "TypeAlias",
          "package": "ddc-core-llvm",
          "signature": "TypeAlias String Type",
          "source": "src/DDC-Llvm-Syntax-Type.html#TypeAlias",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "TypeAlias",
          "package": "ddc-core-llvm",
          "partial": "Type Alias",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:TypeAlias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Syntax",
          "name": "Var",
          "package": "ddc-core-llvm",
          "signature": "Var Name Type",
          "source": "src/DDC-Llvm-Syntax-Exp.html#Var",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Var",
          "package": "ddc-core-llvm",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariable amount of arguments.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "VarArgs",
          "package": "ddc-core-llvm",
          "signature": "VarArgs",
          "source": "src/DDC-Llvm-Syntax-Type.html#ParamListType",
          "type": "function"
        },
        "index": {
          "description": "Variable amount of arguments",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "VarArgs",
          "package": "ddc-core-llvm",
          "partial": "Var Args",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:VarArgs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eweak\u003c/code\u003e linkage is exactly the same as linkonce linkage, except that\n  unreferenced weak globals may not be discarded. This is used for globals\n  that may be emitted in multiple translation units, but that are not\n  guaranteed to be emitted into every translation unit that uses them. One\n  example of this are common globals in C, such as \u003ccode\u003eint X;\u003c/code\u003e at global\n  scope.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "Weak",
          "package": "ddc-core-llvm",
          "signature": "Weak",
          "source": "src/DDC-Llvm-Syntax-Attr.html#Linkage",
          "type": "function"
        },
        "index": {
          "description": "weak linkage is exactly the same as linkonce linkage except that unreferenced weak globals may not be discarded This is used for globals that may be emitted in multiple translation units but that are not guaranteed to be emitted into every translation unit that uses them One example of this are common globals in such as int at global scope",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "Weak",
          "package": "ddc-core-llvm",
          "partial": "Weak",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:Weak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA literal.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "XLit",
          "package": "ddc-core-llvm",
          "signature": "XLit Lit",
          "source": "src/DDC-Llvm-Syntax-Exp.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "literal",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "XLit",
          "package": "ddc-core-llvm",
          "partial": "XLit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:XLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn undefined value.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "XUndef",
          "package": "ddc-core-llvm",
          "signature": "XUndef Type",
          "source": "src/DDC-Llvm-Syntax-Exp.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "An undefined value",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "XUndef",
          "package": "ddc-core-llvm",
          "partial": "XUndef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:XUndef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse of a variable.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "XVar",
          "package": "ddc-core-llvm",
          "signature": "XVar Var",
          "source": "src/DDC-Llvm-Syntax-Exp.html#Exp",
          "type": "function"
        },
        "index": {
          "description": "Use of variable",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "XVar",
          "package": "ddc-core-llvm",
          "partial": "XVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:XVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThat the parameter or return value should be zero-extended to a 32-bit value\n   by the caller (for a parameter) or the callee (for a return value).\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "ZeroExt",
          "package": "ddc-core-llvm",
          "signature": "ZeroExt",
          "source": "src/DDC-Llvm-Syntax-Attr.html#ParamAttr",
          "type": "function"
        },
        "index": {
          "description": "That the parameter or return value should be zero-extended to bit value by the caller for parameter or the callee for return value",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "ZeroExt",
          "package": "ddc-core-llvm",
          "partial": "Zero Ext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:ZeroExt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Syntax",
          "name": "annotInstr",
          "package": "ddc-core-llvm",
          "signature": "Instr",
          "source": "src/DDC-Llvm-Syntax-Instr.html#AnnotInstr",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "annotInstr",
          "package": "ddc-core-llvm",
          "partial": "Instr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:annotInstr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Syntax",
          "name": "annotMDecl",
          "package": "ddc-core-llvm",
          "signature": "[MDecl]",
          "source": "src/DDC-Llvm-Syntax-Instr.html#AnnotInstr",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "annotMDecl",
          "normalized": "[MDecl]",
          "package": "ddc-core-llvm",
          "partial": "MDecl",
          "signature": "[MDecl]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:annotMDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an annotated instruction with no annotations.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "annotNil",
          "package": "ddc-core-llvm",
          "signature": "Instr -\u003e AnnotInstr",
          "source": "src/DDC-Llvm-Syntax-Instr.html#annotNil",
          "type": "function"
        },
        "index": {
          "description": "Construct an annotated instruction with no annotations",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "annotNil",
          "normalized": "Instr-\u003eAnnotInstr",
          "package": "ddc-core-llvm",
          "partial": "Nil",
          "signature": "Instr-\u003eAnnotInstr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:annotNil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotate an instruction with some metadata.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "annotWith",
          "package": "ddc-core-llvm",
          "signature": "Instr -\u003e [MDecl] -\u003e AnnotInstr",
          "source": "src/DDC-Llvm-Syntax-Instr.html#annotWith",
          "type": "function"
        },
        "index": {
          "description": "Annotate an instruction with some metadata",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "annotWith",
          "normalized": "Instr-\u003e[MDecl]-\u003eAnnotInstr",
          "package": "ddc-core-llvm",
          "partial": "With",
          "signature": "Instr-\u003e[MDecl]-\u003eAnnotInstr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:annotWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of LlvmStatement's representing the code for this block.\n   This list must end with a control flow statement.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "blockInstrs",
          "package": "ddc-core-llvm",
          "signature": "Seq AnnotInstr",
          "source": "src/DDC-Llvm-Syntax-Instr.html#Block",
          "type": "function"
        },
        "index": {
          "description": "list of LlvmStatement representing the code for this block This list must end with control flow statement",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "blockInstrs",
          "package": "ddc-core-llvm",
          "partial": "Instrs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:blockInstrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe code label for this block\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "blockLabel",
          "package": "ddc-core-llvm",
          "signature": "Label",
          "source": "src/DDC-Llvm-Syntax-Instr.html#Block",
          "type": "function"
        },
        "index": {
          "description": "The code label for this block",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "blockLabel",
          "package": "ddc-core-llvm",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:blockLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf this instruction can branch to a label then return the possible targets.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "branchTargetsOfInstr",
          "package": "ddc-core-llvm",
          "signature": "Instr -\u003e Maybe (Set Label)",
          "source": "src/DDC-Llvm-Syntax-Instr.html#branchTargetsOfInstr",
          "type": "function"
        },
        "index": {
          "description": "If this instruction can branch to label then return the possible targets",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "branchTargetsOfInstr",
          "normalized": "Instr-\u003eMaybe(Set Label)",
          "package": "ddc-core-llvm",
          "partial": "Targets Of Instr",
          "signature": "Instr-\u003eMaybe(Set Label)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:branchTargetsOfInstr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction align value, must be power of 2\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "declAlign",
          "package": "ddc-core-llvm",
          "signature": "Align",
          "source": "src/DDC-Llvm-Syntax-Type.html#FunctionDecl",
          "type": "function"
        },
        "index": {
          "description": "Function align value must be power of",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "declAlign",
          "package": "ddc-core-llvm",
          "partial": "Align",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:declAlign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe calling convention of the function\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "declCallConv",
          "package": "ddc-core-llvm",
          "signature": "CallConv",
          "source": "src/DDC-Llvm-Syntax-Type.html#FunctionDecl",
          "type": "function"
        },
        "index": {
          "description": "The calling convention of the function",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "declCallConv",
          "package": "ddc-core-llvm",
          "partial": "Call Conv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:declCallConv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinkageType of the function\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "declLinkage",
          "package": "ddc-core-llvm",
          "signature": "Linkage",
          "source": "src/DDC-Llvm-Syntax-Type.html#FunctionDecl",
          "type": "function"
        },
        "index": {
          "description": "LinkageType of the function",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "declLinkage",
          "package": "ddc-core-llvm",
          "partial": "Linkage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:declLinkage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnique identifier of the function\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "declName",
          "package": "ddc-core-llvm",
          "signature": "String",
          "source": "src/DDC-Llvm-Syntax-Type.html#FunctionDecl",
          "type": "function"
        },
        "index": {
          "description": "Unique identifier of the function",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "declName",
          "package": "ddc-core-llvm",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:declName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates if this function uses varargs\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "declParamListType",
          "package": "ddc-core-llvm",
          "signature": "ParamListType",
          "source": "src/DDC-Llvm-Syntax-Type.html#FunctionDecl",
          "type": "function"
        },
        "index": {
          "description": "Indicates if this function uses varargs",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "declParamListType",
          "package": "ddc-core-llvm",
          "partial": "Param List Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:declParamListType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParameter types and attributes\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "declParams",
          "package": "ddc-core-llvm",
          "signature": "[Param]",
          "source": "src/DDC-Llvm-Syntax-Type.html#FunctionDecl",
          "type": "function"
        },
        "index": {
          "description": "Parameter types and attributes",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "declParams",
          "normalized": "[Param]",
          "package": "ddc-core-llvm",
          "partial": "Params",
          "signature": "[Param]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:declParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of the returned value\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "declReturnType",
          "package": "ddc-core-llvm",
          "signature": "Type",
          "source": "src/DDC-Llvm-Syntax-Type.html#FunctionDecl",
          "type": "function"
        },
        "index": {
          "description": "Type of the returned value",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "declReturnType",
          "package": "ddc-core-llvm",
          "partial": "Return Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:declReturnType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the LLVM variable that this instruction assigns to, \n   or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there isn't one.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "defVarOfInstr",
          "package": "ddc-core-llvm",
          "signature": "Instr -\u003e Maybe Var",
          "source": "src/DDC-Llvm-Syntax-Instr.html#defVarOfInstr",
          "type": "function"
        },
        "index": {
          "description": "Get the LLVM variable that this instruction assigns to or Nothing if there isn one",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "defVarOfInstr",
          "normalized": "Instr-\u003eMaybe Var",
          "package": "ddc-core-llvm",
          "partial": "Var Of Instr",
          "signature": "Instr-\u003eMaybe Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:defVarOfInstr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the set of LLVM variables that this block defines.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "defVarsOfBlock",
          "package": "ddc-core-llvm",
          "signature": "Block -\u003e Set Var",
          "source": "src/DDC-Llvm-Syntax-Instr.html#defVarsOfBlock",
          "type": "function"
        },
        "index": {
          "description": "Get the set of LLVM variables that this block defines",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "defVarsOfBlock",
          "normalized": "Block-\u003eSet Var",
          "package": "ddc-core-llvm",
          "partial": "Vars Of Block",
          "signature": "Block-\u003eSet Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:defVarsOfBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function attributes.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "funAttrs",
          "package": "ddc-core-llvm",
          "signature": "[FuncAttr]",
          "source": "src/DDC-Llvm-Syntax-Function.html#Function",
          "type": "function"
        },
        "index": {
          "description": "The function attributes",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "funAttrs",
          "normalized": "[FuncAttr]",
          "package": "ddc-core-llvm",
          "partial": "Attrs",
          "signature": "[FuncAttr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:funAttrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe body of the functions.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "funBlocks",
          "package": "ddc-core-llvm",
          "signature": "[Block]",
          "source": "src/DDC-Llvm-Syntax-Function.html#Function",
          "type": "function"
        },
        "index": {
          "description": "The body of the functions",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "funBlocks",
          "normalized": "[Block]",
          "package": "ddc-core-llvm",
          "partial": "Blocks",
          "signature": "[Block]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:funBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe signature of this declared function.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "funDecl",
          "package": "ddc-core-llvm",
          "signature": "FunctionDecl",
          "source": "src/DDC-Llvm-Syntax-Function.html#Function",
          "type": "function"
        },
        "index": {
          "description": "The signature of this declared function",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "funDecl",
          "package": "ddc-core-llvm",
          "partial": "Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:funDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function parameter names.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "funParams",
          "package": "ddc-core-llvm",
          "signature": "[String]",
          "source": "src/DDC-Llvm-Syntax-Function.html#Function",
          "type": "function"
        },
        "index": {
          "description": "The function parameter names",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "funParams",
          "normalized": "[String]",
          "package": "ddc-core-llvm",
          "partial": "Params",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:funParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe section to put the function into,\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "funSection",
          "package": "ddc-core-llvm",
          "signature": "Section",
          "source": "src/DDC-Llvm-Syntax-Function.html#Function",
          "type": "function"
        },
        "index": {
          "description": "The section to put the function into",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "funSection",
          "package": "ddc-core-llvm",
          "partial": "Section",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:funSection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if the given \u003ccode\u003eLlvmType\u003c/code\u003e is a floating point type\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "isFloat",
          "package": "ddc-core-llvm",
          "signature": "Type -\u003e Bool",
          "source": "src/DDC-Llvm-Syntax-Type.html#isFloat",
          "type": "function"
        },
        "index": {
          "description": "Test if the given LlvmType is floating point type",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "isFloat",
          "normalized": "Type-\u003eBool",
          "package": "ddc-core-llvm",
          "partial": "Float",
          "signature": "Type-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:isFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if the given \u003ccode\u003eLlvmType\u003c/code\u003e is an integer\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "isInt",
          "package": "ddc-core-llvm",
          "signature": "Type -\u003e Bool",
          "source": "src/DDC-Llvm-Syntax-Type.html#isInt",
          "type": "function"
        },
        "index": {
          "description": "Test if the given LlvmType is an integer",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "isInt",
          "normalized": "Type-\u003eBool",
          "package": "ddc-core-llvm",
          "partial": "Int",
          "signature": "Type-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:isInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if the given \u003ccode\u003eLlvmType\u003c/code\u003e is an \u003ccode\u003eLMPointer\u003c/code\u003e construct\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "isPointer",
          "package": "ddc-core-llvm",
          "signature": "Type -\u003e Bool",
          "source": "src/DDC-Llvm-Syntax-Type.html#isPointer",
          "type": "function"
        },
        "index": {
          "description": "Test if the given LlvmType is an LMPointer construct",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "isPointer",
          "normalized": "Type-\u003eBool",
          "package": "ddc-core-llvm",
          "partial": "Pointer",
          "signature": "Type-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:isPointer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup the calling convention for this function,\n   using the forward declarations as well as the function definitions.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "lookupCallConv",
          "package": "ddc-core-llvm",
          "signature": "String -\u003e Module -\u003e Maybe CallConv",
          "source": "src/DDC-Llvm-Syntax-Module.html#lookupCallConv",
          "type": "function"
        },
        "index": {
          "description": "Lookup the calling convention for this function using the forward declarations as well as the function definitions",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "lookupCallConv",
          "normalized": "String-\u003eModule-\u003eMaybe CallConv",
          "package": "ddc-core-llvm",
          "partial": "Call Conv",
          "signature": "String-\u003eModule-\u003eMaybe CallConv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:lookupCallConv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias type definitions.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "modAliases",
          "package": "ddc-core-llvm",
          "signature": "[TypeAlias]",
          "source": "src/DDC-Llvm-Syntax-Module.html#Module",
          "type": "function"
        },
        "index": {
          "description": "Alias type definitions",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "modAliases",
          "normalized": "[TypeAlias]",
          "package": "ddc-core-llvm",
          "partial": "Aliases",
          "signature": "[TypeAlias]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:modAliases"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComments to include at the start of the module.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "modComments",
          "package": "ddc-core-llvm",
          "signature": "[String]",
          "source": "src/DDC-Llvm-Syntax-Module.html#Module",
          "type": "function"
        },
        "index": {
          "description": "Comments to include at the start of the module",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "modComments",
          "normalized": "[String]",
          "package": "ddc-core-llvm",
          "partial": "Comments",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:modComments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunctions defined in this module.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "modFuncs",
          "package": "ddc-core-llvm",
          "signature": "[Function]",
          "source": "src/DDC-Llvm-Syntax-Module.html#Module",
          "type": "function"
        },
        "index": {
          "description": "Functions defined in this module",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "modFuncs",
          "normalized": "[Function]",
          "package": "ddc-core-llvm",
          "partial": "Funcs",
          "signature": "[Function]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:modFuncs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunctions used in this module but defined in other modules.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "modFwdDecls",
          "package": "ddc-core-llvm",
          "signature": "[FunctionDecl]",
          "source": "src/DDC-Llvm-Syntax-Module.html#Module",
          "type": "function"
        },
        "index": {
          "description": "Functions used in this module but defined in other modules",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "modFwdDecls",
          "normalized": "[FunctionDecl]",
          "package": "ddc-core-llvm",
          "partial": "Fwd Decls",
          "signature": "[FunctionDecl]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:modFwdDecls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlobal variables to include in the module.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "modGlobals",
          "package": "ddc-core-llvm",
          "signature": "[Global]",
          "source": "src/DDC-Llvm-Syntax-Module.html#Module",
          "type": "function"
        },
        "index": {
          "description": "Global variables to include in the module",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "modGlobals",
          "normalized": "[Global]",
          "package": "ddc-core-llvm",
          "partial": "Globals",
          "signature": "[Global]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:modGlobals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMetdata for alias analysis\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "modMDecls",
          "package": "ddc-core-llvm",
          "signature": "[MDecl]",
          "source": "src/DDC-Llvm-Syntax-Module.html#Module",
          "type": "function"
        },
        "index": {
          "description": "Metdata for alias analysis",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "modMDecls",
          "normalized": "[MDecl]",
          "package": "ddc-core-llvm",
          "partial": "MDecls",
          "signature": "[MDecl]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:modMDecls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield the name of a var.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "nameOfVar",
          "package": "ddc-core-llvm",
          "signature": "Var -\u003e Name",
          "source": "src/DDC-Llvm-Syntax-Exp.html#nameOfVar",
          "type": "function"
        },
        "index": {
          "description": "Yield the name of var",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "nameOfVar",
          "normalized": "Var-\u003eName",
          "package": "ddc-core-llvm",
          "partial": "Of Var",
          "signature": "Var-\u003eName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:nameOfVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Syntax",
          "name": "paramAttrs",
          "package": "ddc-core-llvm",
          "signature": "[ParamAttr]",
          "source": "src/DDC-Llvm-Syntax-Type.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "paramAttrs",
          "normalized": "[ParamAttr]",
          "package": "ddc-core-llvm",
          "partial": "Attrs",
          "signature": "[ParamAttr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:paramAttrs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Syntax",
          "name": "paramType",
          "package": "ddc-core-llvm",
          "signature": "Type",
          "source": "src/DDC-Llvm-Syntax-Type.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "paramType",
          "package": "ddc-core-llvm",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:paramType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Syntax",
          "name": "rval",
          "package": "ddc-core-llvm",
          "signature": "MDecl -\u003e Metadata",
          "source": "src/DDC-Llvm-Syntax-Metadata.html#rval",
          "type": "function"
        },
        "index": {
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "rval",
          "normalized": "MDecl-\u003eMetadata",
          "package": "ddc-core-llvm",
          "signature": "MDecl-\u003eMetadata",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:rval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the size in bytes of a Type, given the size of pointers.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "takeBytesOfType",
          "package": "ddc-core-llvm",
          "signature": "Integer -\u003e Type -\u003e Maybe Integer",
          "source": "src/DDC-Llvm-Syntax-Type.html#takeBytesOfType",
          "type": "function"
        },
        "index": {
          "description": "Calculate the size in bytes of Type given the size of pointers",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "takeBytesOfType",
          "normalized": "Integer-\u003eType-\u003eMaybe Integer",
          "package": "ddc-core-llvm",
          "partial": "Bytes Of Type",
          "signature": "Integer-\u003eType-\u003eMaybe Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:takeBytesOfType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a single tbaa node\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "tbaaNode",
          "package": "ddc-core-llvm",
          "signature": "String-\u003e MRef-\u003e Bool-\u003e Metadata",
          "type": "function"
        },
        "index": {
          "description": "Construct single tbaa node",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "tbaaNode",
          "normalized": "String-\u003eMRef-\u003eBool-\u003eMetadata",
          "package": "ddc-core-llvm",
          "partial": "Node",
          "signature": "String-\u003eMRef-\u003eBool-\u003eMetadata",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:tbaaNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake the type of an expression.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "typeOfExp",
          "package": "ddc-core-llvm",
          "signature": "Exp -\u003e Type",
          "source": "src/DDC-Llvm-Syntax-Exp.html#typeOfExp",
          "type": "function"
        },
        "index": {
          "description": "Take the type of an expression",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "typeOfExp",
          "normalized": "Exp-\u003eType",
          "package": "ddc-core-llvm",
          "partial": "Of Exp",
          "signature": "Exp-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:typeOfExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the \u003ccode\u003eLlvmType\u003c/code\u003e of the \u003ccode\u003eLMGlobal\u003c/code\u003e\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "typeOfGlobal",
          "package": "ddc-core-llvm",
          "signature": "Global -\u003e Type",
          "source": "src/DDC-Llvm-Syntax-Module.html#typeOfGlobal",
          "type": "function"
        },
        "index": {
          "description": "Return the LlvmType of the LMGlobal",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "typeOfGlobal",
          "normalized": "Global-\u003eType",
          "package": "ddc-core-llvm",
          "partial": "Of Global",
          "signature": "Global-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:typeOfGlobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield the \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eLit\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "typeOfLit",
          "package": "ddc-core-llvm",
          "signature": "Lit -\u003e Type",
          "source": "src/DDC-Llvm-Syntax-Exp.html#typeOfLit",
          "type": "function"
        },
        "index": {
          "description": "Yield the Type of Lit",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "typeOfLit",
          "normalized": "Lit-\u003eType",
          "package": "ddc-core-llvm",
          "partial": "Of Lit",
          "signature": "Lit-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:typeOfLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the \u003ccode\u003eLlvmType\u003c/code\u003e of the \u003ccode\u003eLlvmStatic\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "typeOfStatic",
          "package": "ddc-core-llvm",
          "signature": "Static -\u003e Type",
          "source": "src/DDC-Llvm-Syntax-Module.html#typeOfStatic",
          "type": "function"
        },
        "index": {
          "description": "Return the LlvmType of the LlvmStatic",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "typeOfStatic",
          "normalized": "Static-\u003eType",
          "package": "ddc-core-llvm",
          "partial": "Of Static",
          "signature": "Static-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:typeOfStatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield the type of a var.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "typeOfVar",
          "package": "ddc-core-llvm",
          "signature": "Var -\u003e Type",
          "source": "src/DDC-Llvm-Syntax-Exp.html#typeOfVar",
          "type": "function"
        },
        "index": {
          "description": "Yield the type of var",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "typeOfVar",
          "normalized": "Var-\u003eType",
          "package": "ddc-core-llvm",
          "partial": "Of Var",
          "signature": "Var-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:typeOfVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the \u003ccode\u003eLlvmVar\u003c/code\u003e part of a \u003ccode\u003eLMGlobal\u003c/code\u003e\n\u003c/p\u003e",
          "module": "DDC.Llvm.Syntax",
          "name": "varOfGlobal",
          "package": "ddc-core-llvm",
          "signature": "Global -\u003e Var",
          "source": "src/DDC-Llvm-Syntax-Module.html#varOfGlobal",
          "type": "function"
        },
        "index": {
          "description": "Return the LlvmVar part of LMGlobal",
          "hierarchy": "DDC Llvm Syntax",
          "module": "DDC.Llvm.Syntax",
          "name": "varOfGlobal",
          "normalized": "Global-\u003eVar",
          "package": "ddc-core-llvm",
          "partial": "Of Global",
          "signature": "Global-\u003eVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Syntax.html#v:varOfGlobal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInline \u003ccode\u003e\u003ca\u003eISet\u003c/a\u003e\u003c/code\u003e meta-instructions, drop \u003ccode\u003e\u003ca\u003eINop\u003c/a\u003e\u003c/code\u003e meta-instructions,\n   and propagate calling conventions from declarations to call sites.\n   This should all be part of the LLVM language itself, but it isn't.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "DDC.Llvm.Transform.Clean",
          "name": "Clean",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Transform-Clean.html",
          "type": "module"
        },
        "index": {
          "description": "Inline ISet meta-instructions drop INop meta-instructions and propagate calling conventions from declarations to call sites This should all be part of the LLVM language itself but it isn",
          "hierarchy": "DDC Llvm Transform Clean",
          "module": "DDC.Llvm.Transform.Clean",
          "name": "Clean",
          "package": "ddc-core-llvm",
          "partial": "Clean",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Transform-Clean.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClean a module.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Transform.Clean",
          "name": "clean",
          "package": "ddc-core-llvm",
          "signature": "Module -\u003e Module",
          "source": "src/DDC-Llvm-Transform-Clean.html#clean",
          "type": "function"
        },
        "index": {
          "description": "Clean module",
          "hierarchy": "DDC Llvm Transform Clean",
          "module": "DDC.Llvm.Transform.Clean",
          "name": "clean",
          "normalized": "Module-\u003eModule",
          "package": "ddc-core-llvm",
          "signature": "Module-\u003eModule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Transform-Clean.html#v:clean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "DDC.Llvm.Transform.LinkPhi",
          "name": "LinkPhi",
          "package": "ddc-core-llvm",
          "source": "src/DDC-Llvm-Transform-LinkPhi.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "DDC Llvm Transform LinkPhi",
          "module": "DDC.Llvm.Transform.LinkPhi",
          "name": "LinkPhi",
          "package": "ddc-core-llvm",
          "partial": "Link Phi",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Transform-LinkPhi.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLink Phi instructions in a module.\n\u003c/p\u003e\u003cp\u003eFor Phi instructions, the Salt-\u003eLlvm converter just fills in the source\n   block label of each variable to be merged with \u003ccode\u003eundef\u003c/code\u003e. We need to add\n   the real block label of the in-edge that defines each variable.\n\u003c/p\u003e\u003cp\u003eWe build a graph of each block, work out the in-edges due to branches,\n   and fill in the real block labels by back tracing the in-edges until we\n   find the node that defines each variable.\n\u003c/p\u003e",
          "module": "DDC.Llvm.Transform.LinkPhi",
          "name": "linkPhi",
          "package": "ddc-core-llvm",
          "signature": "Module -\u003e Module",
          "source": "src/DDC-Llvm-Transform-LinkPhi.html#linkPhi",
          "type": "function"
        },
        "index": {
          "description": "Link Phi instructions in module For Phi instructions the Salt Llvm converter just fills in the source block label of each variable to be merged with undef We need to add the real block label of the in-edge that defines each variable We build graph of each block work out the in-edges due to branches and fill in the real block labels by back tracing the in-edges until we find the node that defines each variable",
          "hierarchy": "DDC Llvm Transform LinkPhi",
          "module": "DDC.Llvm.Transform.LinkPhi",
          "name": "linkPhi",
          "normalized": "Module-\u003eModule",
          "package": "ddc-core-llvm",
          "partial": "Phi",
          "signature": "Module-\u003eModule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ddc-core-llvm/docs/DDC-Llvm-Transform-LinkPhi.html#v:linkPhi"
      }
    }
  ]
]