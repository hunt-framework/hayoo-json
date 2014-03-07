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
        "word": "Operads"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "Operad",
          "package": "Operads",
          "source": "src/Math-Operad.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "Operad",
          "package": "Operads",
          "partial": "Operad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the fundamental datatype of the whole project. Monomials in a free operad\n are decorated trees, and we build a type for decorated trees here. We require our \n trees to have Int labels, limiting us to at most 2 147 483 647 leaf labels.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "DecoratedTree",
          "package": "Operads",
          "source": "src/Math-Operad-OrderedTree.html#DecoratedTree",
          "type": "type"
        },
        "index": {
          "description": "This is the fundamental datatype of the whole project Monomials in free operad are decorated trees and we build type for decorated trees here We require our trees to have Int labels limiting us to at most leaf labels",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "DecoratedTree",
          "package": "Operads",
          "partial": "Decorated Tree",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:DecoratedTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type to move the results of finding an embedding point for a subtree in a larger tree\n around. The tree is guaranteed to have exactly one corolla tagged Nothing, the subtrees on top of\n that corolla sorted by minimal covering leaf in the original setting, and the shuffle carried around\n is guaranteed to restore the original leaf labels before the search.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "Embedding",
          "package": "Operads",
          "source": "src/Math-Operad-OperadGB.html#Embedding",
          "type": "type"
        },
        "index": {
          "description": "Data type to move the results of finding an embedding point for subtree in larger tree around The tree is guaranteed to have exactly one corolla tagged Nothing the subtrees on top of that corolla sorted by minimal covering leaf in the original setting and the shuffle carried around is guaranteed to restore the original leaf labels before the search",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "Embedding",
          "package": "Operads",
          "partial": "Embedding",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:Embedding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "FreeOperad",
          "package": "Operads",
          "source": "src/Math-Operad.html#FreeOperad",
          "type": "type"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "FreeOperad",
          "package": "Operads",
          "partial": "Free Operad",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:FreeOperad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "MonomialMap",
          "package": "Operads",
          "source": "src/Math-Operad-MapOperad.html#MonomialMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "MonomialMap",
          "package": "Operads",
          "partial": "Monomial Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:MonomialMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type carrying operadic elements. An element in an operad is an associative array \n with keys being labeled trees and values being their coefficients. \n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "OperadElement",
          "package": "Operads",
          "source": "src/Math-Operad-MapOperad.html#OperadElement",
          "type": "newtype"
        },
        "index": {
          "description": "The type carrying operadic elements An element in an operad is an associative array with keys being labeled trees and values being their coefficients",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "OperadElement",
          "package": "Operads",
          "partial": "Operad Element",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:OperadElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonomial orderings on the free operad requires us to choose an ordering for the\n trees. These are parametrized by types implementing the type class \u003ccode\u003e\u003ca\u003eTreeOrdering\u003c/a\u003e\u003c/code\u003e, \n and this is a data type for a tree carrying its comparison type. We call these \n \u003cem\u003eordered trees\u003c/em\u003e. \n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "OrderedTree",
          "package": "Operads",
          "source": "src/Math-Operad-OrderedTree.html#OrderedTree",
          "type": "data"
        },
        "index": {
          "description": "Monomial orderings on the free operad requires us to choose an ordering for the trees These are parametrized by types implementing the type class TreeOrdering and this is data type for tree carrying its comparison type We call these ordered trees",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "OrderedTree",
          "package": "Operads",
          "partial": "Ordered Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:OrderedTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis yields user interface functions for human readable printing of objects.\n The idea is to use \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instances for marshalling of data, and \u003ccode\u003e\u003ca\u003ePPrint\u003c/a\u003e\u003c/code\u003e for\n user interaction.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "PPrint",
          "package": "Operads",
          "source": "src/Math-Operad-PPrint.html#PPrint",
          "type": "class"
        },
        "index": {
          "description": "This yields user interface functions for human readable printing of objects The idea is to use Show instances for marshalling of data and PPrint for user interaction",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "PPrint",
          "package": "Operads",
          "partial": "PPrint",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:PPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsing the path sequence, the leaf orders and order reversal, we can get 8 different orderings\n from one paradigm. These are given by \u003ccode\u003e\u003ca\u003ePathPerm\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eRPathPerm\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ePathRPerm\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eRPathRPerm\u003c/a\u003e\u003c/code\u003e for the \n variations giving (possibly reversed) path sequence comparison precedence over (possibly reversed)\n leaf permutations; additionally, there are \u003ccode\u003e\u003ca\u003ePermPath\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eRPermPath\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ePermRPath\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRPermRPath\u003c/a\u003e\u003c/code\u003e\n for the variations with the opposite precedence.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "PathPerm",
          "package": "Operads",
          "source": "src/Math-Operad-OrderedTree.html#PathPerm",
          "type": "data"
        },
        "index": {
          "description": "Using the path sequence the leaf orders and order reversal we can get different orderings from one paradigm These are given by PathPerm RPathPerm PathRPerm RPathRPerm for the variations giving possibly reversed path sequence comparison precedence over possibly reversed leaf permutations additionally there are PermPath RPermPath PermRPath and RPermRPath for the variations with the opposite precedence",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "PathPerm",
          "package": "Operads",
          "partial": "Path Perm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:PathPerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "PathRPerm",
          "package": "Operads",
          "source": "src/Math-Operad-OrderedTree.html#PathRPerm",
          "type": "data"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "PathRPerm",
          "package": "Operads",
          "partial": "Path RPerm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:PathRPerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "PermPath",
          "package": "Operads",
          "source": "src/Math-Operad-OrderedTree.html#PermPath",
          "type": "data"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "PermPath",
          "package": "Operads",
          "partial": "Perm Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:PermPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "PermRPath",
          "package": "Operads",
          "source": "src/Math-Operad-OrderedTree.html#PermRPath",
          "type": "data"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "PermRPath",
          "package": "Operads",
          "partial": "Perm RPath",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:PermRPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe fundamental tree data type used. Leaves carry labels - most often integral -\n and these are expected to control, e.g., composition points in shuffle operad compositions.\n The vertices carry labels, used for the ordering on trees and to distinguish different\n basis corollas of the same arity. \n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "PreDecoratedTree",
          "package": "Operads",
          "source": "src/Math-Operad-OrderedTree.html#PreDecoratedTree",
          "type": "data"
        },
        "index": {
          "description": "The fundamental tree data type used Leaves carry labels most often integral and these are expected to control e.g composition points in shuffle operad compositions The vertices carry labels used for the ordering on trees and to distinguish different basis corollas of the same arity",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "PreDecoratedTree",
          "package": "Operads",
          "partial": "Pre Decorated Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:PreDecoratedTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "RPathPerm",
          "package": "Operads",
          "source": "src/Math-Operad-OrderedTree.html#RPathPerm",
          "type": "data"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "RPathPerm",
          "package": "Operads",
          "partial": "RPath Perm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:RPathPerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "RPathRPerm",
          "package": "Operads",
          "source": "src/Math-Operad-OrderedTree.html#RPathRPerm",
          "type": "data"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "RPathRPerm",
          "package": "Operads",
          "partial": "RPath RPerm",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:RPathRPerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "RPermPath",
          "package": "Operads",
          "source": "src/Math-Operad-OrderedTree.html#RPermPath",
          "type": "data"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "RPermPath",
          "package": "Operads",
          "partial": "RPerm Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:RPermPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "RPermRPath",
          "package": "Operads",
          "source": "src/Math-Operad-OrderedTree.html#RPermRPath",
          "type": "data"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "RPermRPath",
          "package": "Operads",
          "partial": "RPerm RPath",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:RPermRPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA shuffle is a special kind of sequence of integers.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "Shuffle",
          "package": "Operads",
          "source": "src/Math-Operad-OrderedTree.html#Shuffle",
          "type": "type"
        },
        "index": {
          "description": "shuffle is special kind of sequence of integers",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "Shuffle",
          "package": "Operads",
          "partial": "Shuffle",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:Shuffle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "Tree",
          "package": "Operads",
          "source": "src/Math-Operad.html#Tree",
          "type": "type"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "Tree",
          "package": "Operads",
          "partial": "Tree",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:Tree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type class that parametrizes types implementing tree orderings.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "TreeOrdering",
          "package": "Operads",
          "source": "src/Math-Operad-OrderedTree.html#TreeOrdering",
          "type": "class"
        },
        "index": {
          "description": "The type class that parametrizes types implementing tree orderings",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "TreeOrdering",
          "package": "Operads",
          "partial": "Tree Ordering",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:TreeOrdering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScalar multiplication in the operad.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "(.*.)",
          "package": "Operads",
          "signature": "n -\u003e OperadElement a n t -\u003e OperadElement a n t",
          "source": "src/Math-Operad-MapOperad.html#.%2A.",
          "type": "function"
        },
        "index": {
          "description": "Scalar multiplication in the operad",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "(.*.) .*.",
          "normalized": "a-\u003eOperadElement b a c-\u003eOperadElement b a c",
          "package": "Operads",
          "signature": "n-\u003eOperadElement a n t-\u003eOperadElement a n t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:.-42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "DTLeaf",
          "package": "Operads",
          "signature": "DTLeaf !b",
          "source": "src/Math-Operad-OrderedTree.html#PreDecoratedTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "DTLeaf",
          "package": "Operads",
          "partial": "DTLeaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:DTLeaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "DTVertex",
          "package": "Operads",
          "signature": "DTVertex",
          "source": "src/Math-Operad-OrderedTree.html#PreDecoratedTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "DTVertex",
          "package": "Operads",
          "partial": "DTVertex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:DTVertex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "OE",
          "package": "Operads",
          "signature": "OE (MonomialMap a t n)",
          "source": "src/Math-Operad-MapOperad.html#OperadElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "OE",
          "package": "Operads",
          "partial": "OE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:OE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "OT",
          "package": "Operads",
          "signature": "OT (DecoratedTree a) t",
          "source": "src/Math-Operad-OrderedTree.html#OrderedTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "OT",
          "package": "Operads",
          "partial": "OT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:OT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "PathPerm",
          "package": "Operads",
          "signature": "PathPerm",
          "source": "src/Math-Operad-OrderedTree.html#PathPerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "PathPerm",
          "package": "Operads",
          "partial": "Path Perm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:PathPerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "PathRPerm",
          "package": "Operads",
          "signature": "PathRPerm",
          "source": "src/Math-Operad-OrderedTree.html#PathRPerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "PathRPerm",
          "package": "Operads",
          "partial": "Path RPerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:PathRPerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "PermPath",
          "package": "Operads",
          "signature": "PermPath",
          "source": "src/Math-Operad-OrderedTree.html#PermPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "PermPath",
          "package": "Operads",
          "partial": "Perm Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:PermPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "PermRPath",
          "package": "Operads",
          "signature": "PermRPath",
          "source": "src/Math-Operad-OrderedTree.html#PermRPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "PermRPath",
          "package": "Operads",
          "partial": "Perm RPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:PermRPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "RPathPerm",
          "package": "Operads",
          "signature": "RPathPerm",
          "source": "src/Math-Operad-OrderedTree.html#RPathPerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "RPathPerm",
          "package": "Operads",
          "partial": "RPath Perm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:RPathPerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "RPathRPerm",
          "package": "Operads",
          "signature": "RPathRPerm",
          "source": "src/Math-Operad-OrderedTree.html#RPathRPerm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "RPathRPerm",
          "package": "Operads",
          "partial": "RPath RPerm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:RPathRPerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "RPermPath",
          "package": "Operads",
          "signature": "RPermPath",
          "source": "src/Math-Operad-OrderedTree.html#RPermPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "RPermPath",
          "package": "Operads",
          "partial": "RPerm Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:RPermPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "RPermRPath",
          "package": "Operads",
          "signature": "RPermRPath",
          "source": "src/Math-Operad-OrderedTree.html#RPermRPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "RPermRPath",
          "package": "Operads",
          "partial": "RPerm RPath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:RPermRPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates shuffle permutations by filling buckets.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "allShPerm",
          "package": "Operads",
          "signature": "Int -\u003e [Int] -\u003e [[[Int]]]",
          "source": "src/Math-Operad-OrderedTree.html#allShPerm",
          "type": "function"
        },
        "index": {
          "description": "Generates shuffle permutations by filling buckets",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "allShPerm",
          "normalized": "Int-\u003e[Int]-\u003e[[[Int]]]",
          "package": "Operads",
          "partial": "Sh Perm",
          "signature": "Int-\u003e[Int]-\u003e[[[Int]]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:allShPerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerates all shuffles from Sh_i(p,q). \n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "allShuffles",
          "package": "Operads",
          "signature": "Int -\u003e Int -\u003e Int -\u003e [Shuffle]",
          "source": "src/Math-Operad-OrderedTree.html#allShuffles",
          "type": "function"
        },
        "index": {
          "description": "Generates all shuffles from Sh",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "allShuffles",
          "normalized": "Int-\u003eInt-\u003eInt-\u003e[Shuffle]",
          "package": "Operads",
          "partial": "Shuffles",
          "signature": "Int-\u003eInt-\u003eInt-\u003e[Shuffle]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:allShuffles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll trees composed from the given generators of operation degree n.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "allTrees",
          "package": "Operads",
          "signature": "[DecoratedTree a] -\u003e Int -\u003e [DecoratedTree a]",
          "source": "src/Math-Operad-OperadGB.html#allTrees",
          "type": "function"
        },
        "index": {
          "description": "All trees composed from the given generators of operation degree",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "allTrees",
          "normalized": "[DecoratedTree a]-\u003eInt-\u003e[DecoratedTree a]",
          "package": "Operads",
          "partial": "Trees",
          "signature": "[DecoratedTree a]-\u003eInt-\u003e[DecoratedTree a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:allTrees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies \u003ccode\u003ef\u003c/code\u003e only at the \u003ccode\u003en\u003c/code\u003eth place in a list.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "applyAt",
          "package": "Operads",
          "signature": "(a -\u003e a) -\u003e Int -\u003e [a] -\u003e [a]",
          "source": "src/Math-Operad-OrderedTree.html#applyAt",
          "type": "function"
        },
        "index": {
          "description": "Applies only at the th place in list",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "applyAt",
          "normalized": "(a-\u003ea)-\u003eInt-\u003e[a]-\u003e[a]",
          "package": "Operads",
          "partial": "At",
          "signature": "(a-\u003ea)-\u003eInt-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:applyAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis applies the resulting permutation from a shuffle to a set of elements\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "applyPerm",
          "package": "Operads",
          "signature": "Shuffle -\u003e [a] -\u003e [a]",
          "source": "src/Math-Operad-OrderedTree.html#applyPerm",
          "type": "function"
        },
        "index": {
          "description": "This applies the resulting permutation from shuffle to set of elements",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "applyPerm",
          "normalized": "Shuffle-\u003e[a]-\u003e[a]",
          "package": "Operads",
          "partial": "Perm",
          "signature": "Shuffle-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:applyPerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies the reconstruction map represented by em to all trees in the operad element op. Any operad element that \n fails the reconstruction (by having the wrong total arity, for instance) will be silently dropped. We recommend\n you apply this function only to homogenous operad elements, but will not make that check.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "applyReconstruction",
          "package": "Operads",
          "signature": "Embedding a -\u003e OperadElement a n t -\u003e OperadElement a n t",
          "source": "src/Math-Operad-OperadGB.html#applyReconstruction",
          "type": "function"
        },
        "index": {
          "description": "Applies the reconstruction map represented by em to all trees in the operad element op Any operad element that fails the reconstruction by having the wrong total arity for instance will be silently dropped We recommend you apply this function only to homogenous operad elements but will not make that check",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "applyReconstruction",
          "normalized": "Embedding a-\u003eOperadElement a b c-\u003eOperadElement a b c",
          "package": "Operads",
          "partial": "Reconstruction",
          "signature": "Embedding a-\u003eOperadElement a n t-\u003eOperadElement a n t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:applyReconstruction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003earityDegree\u003c/a\u003e\u003c/code\u003e is one less than \u003ccode\u003e\u003ca\u003enLeaves\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "arityDegree",
          "package": "Operads",
          "signature": "DecoratedTree a -\u003e Int",
          "source": "src/Math-Operad-OrderedTree.html#arityDegree",
          "type": "function"
        },
        "index": {
          "description": "arityDegree is one less than nLeaves",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "arityDegree",
          "normalized": "DecoratedTree a-\u003eInt",
          "package": "Operads",
          "partial": "Degree",
          "signature": "DecoratedTree a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:arityDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate basis trees for a given Groebner basis for degree \u003ccode\u003emaxDegree\u003c/code\u003e. \u003ccode\u003edivisors\u003c/code\u003e is expected\n to contain the leading monomials in the Groebner basis.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "basisElements",
          "package": "Operads",
          "signature": "[DecoratedTree a] -\u003e [DecoratedTree a] -\u003e Int -\u003e [DecoratedTree a]",
          "source": "src/Math-Operad-OperadGB.html#basisElements",
          "type": "function"
        },
        "index": {
          "description": "Generate basis trees for given Groebner basis for degree maxDegree divisors is expected to contain the leading monomials in the Groebner basis",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "basisElements",
          "normalized": "[DecoratedTree a]-\u003e[DecoratedTree a]-\u003eInt-\u003e[DecoratedTree a]",
          "package": "Operads",
          "partial": "Elements",
          "signature": "[DecoratedTree a]-\u003e[DecoratedTree a]-\u003eInt-\u003e[DecoratedTree a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:basisElements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the monomial order used for a specific tree. Use this in conjunction with mapMonomials\n in order to change monomial order for an entire operad element. \n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "changeOrder",
          "package": "Operads",
          "signature": "t -\u003e OrderedTree a s -\u003e OrderedTree a t",
          "source": "src/Math-Operad-OperadGB.html#changeOrder",
          "type": "function"
        },
        "index": {
          "description": "Change the monomial order used for specific tree Use this in conjunction with mapMonomials in order to change monomial order for an entire operad element",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "changeOrder",
          "normalized": "a-\u003eOrderedTree b c-\u003eOrderedTree b a",
          "package": "Operads",
          "partial": "Order",
          "signature": "t-\u003eOrderedTree a s-\u003eOrderedTree a t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:changeOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerification for a shuffle used for the g(s;t1,..,tk) style composition in the shuffle operad.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "checkShuffleAll",
          "package": "Operads",
          "signature": "Shuffle -\u003e [Int] -\u003e Bool",
          "source": "src/Math-Operad-OperadGB.html#checkShuffleAll",
          "type": "function"
        },
        "index": {
          "description": "Verification for shuffle used for the t1 tk style composition in the shuffle operad",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "checkShuffleAll",
          "normalized": "Shuffle-\u003e[Int]-\u003eBool",
          "package": "Operads",
          "partial": "Shuffle All",
          "signature": "Shuffle-\u003e[Int]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:checkShuffleAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "comparePathSequence",
          "package": "Operads",
          "signature": "t -\u003e DecoratedTree a -\u003e ([[a]], Shuffle) -\u003e DecoratedTree a -\u003e ([[a]], Shuffle) -\u003e Ordering",
          "source": "src/Math-Operad-OrderedTree.html#comparePathSequence",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "comparePathSequence",
          "normalized": "a-\u003eDecoratedTree b-\u003e([[b]],Shuffle)-\u003eDecoratedTree b-\u003e([[b]],Shuffle)-\u003eOrdering",
          "package": "Operads",
          "partial": "Path Sequence",
          "signature": "t-\u003eDecoratedTree a-\u003e([[a]],Shuffle)-\u003eDecoratedTree a-\u003e([[a]],Shuffle)-\u003eOrdering",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:comparePathSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a single corolla in a decorated tree. Takes a list for labels for the leaves, and derives\n the arity of the corolla from those. This, and the composition functions, form the preferred method\n to construct trees.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "corolla",
          "package": "Operads",
          "signature": "a -\u003e [Int] -\u003e DecoratedTree a",
          "source": "src/Math-Operad-OrderedTree.html#corolla",
          "type": "function"
        },
        "index": {
          "description": "Build single corolla in decorated tree Takes list for labels for the leaves and derives the arity of the corolla from those This and the composition functions form the preferred method to construct trees",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "corolla",
          "normalized": "a-\u003e[Int]-\u003eDecoratedTree a",
          "package": "Operads",
          "signature": "a-\u003e[Int]-\u003eDecoratedTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:corolla"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if there is a subtree of \u003ccode\u003et\u003c/code\u003e isomorphic to \u003ccode\u003es\u003c/code\u003e, respecting leaf orders. \n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "divides",
          "package": "Operads",
          "signature": "DecoratedTree a -\u003e DecoratedTree a -\u003e Bool",
          "source": "src/Math-Operad-OperadGB.html#divides",
          "type": "function"
        },
        "index": {
          "description": "Returns True if there is subtree of isomorphic to respecting leaf orders",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "divides",
          "normalized": "DecoratedTree a-\u003eDecoratedTree a-\u003eBool",
          "package": "Operads",
          "signature": "DecoratedTree a-\u003eDecoratedTree a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:divides"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if s and t divide u, with different embeddings and t sharing root with u.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "dividesDifferent",
          "package": "Operads",
          "signature": "DecoratedTree a -\u003e DecoratedTree a -\u003e DecoratedTree a -\u003e Bool",
          "source": "src/Math-Operad-OperadGB.html#dividesDifferent",
          "type": "function"
        },
        "index": {
          "description": "Returns True if and divide with different embeddings and sharing root with",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "dividesDifferent",
          "normalized": "DecoratedTree a-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003eBool",
          "package": "Operads",
          "partial": "Different",
          "signature": "DecoratedTree a-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:dividesDifferent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if there is a subtree of \u003ccode\u003et\u003c/code\u003e isomorphic to \u003ccode\u003es\u003c/code\u003e, respecting leaf orders, and not located at the root.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "dividesHigh",
          "package": "Operads",
          "signature": "DecoratedTree a -\u003e DecoratedTree a -\u003e Bool",
          "source": "src/Math-Operad-OperadGB.html#dividesHigh",
          "type": "function"
        },
        "index": {
          "description": "Returns True if there is subtree of isomorphic to respecting leaf orders and not located at the root",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "dividesHigh",
          "normalized": "DecoratedTree a-\u003eDecoratedTree a-\u003eBool",
          "package": "Operads",
          "partial": "High",
          "signature": "DecoratedTree a-\u003eDecoratedTree a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:dividesHigh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if there is a rooted subtree of \u003ccode\u003et\u003c/code\u003e isomorphic to \u003ccode\u003es\u003c/code\u003e, respecting leaf orders.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "dividesRooted",
          "package": "Operads",
          "signature": "DecoratedTree a -\u003e DecoratedTree a -\u003e Bool",
          "source": "src/Math-Operad-OperadGB.html#dividesRooted",
          "type": "function"
        },
        "index": {
          "description": "Returns True if there is rooted subtree of isomorphic to respecting leaf orders",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "dividesRooted",
          "normalized": "DecoratedTree a-\u003eDecoratedTree a-\u003eBool",
          "package": "Operads",
          "partial": "Rooted",
          "signature": "DecoratedTree a-\u003eDecoratedTree a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:dividesRooted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracting the underlying tree from an ordered tree.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "dt",
          "package": "Operads",
          "signature": "OrderedTree a t -\u003e DecoratedTree a",
          "source": "src/Math-Operad-OrderedTree.html#dt",
          "type": "function"
        },
        "index": {
          "description": "Extracting the underlying tree from an ordered tree",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "dt",
          "normalized": "OrderedTree a b-\u003eDecoratedTree a",
          "package": "Operads",
          "signature": "OrderedTree a t-\u003eDecoratedTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:dt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVerifies that two integer sequences correspond to the same total ordering of the entries.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "equivalentOrders",
          "package": "Operads",
          "signature": "[Int] -\u003e [Int] -\u003e Bool",
          "source": "src/Math-Operad-OperadGB.html#equivalentOrders",
          "type": "function"
        },
        "index": {
          "description": "Verifies that two integer sequences correspond to the same total ordering of the entries",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "equivalentOrders",
          "normalized": "[Int]-\u003e[Int]-\u003eBool",
          "package": "Operads",
          "partial": "Orders",
          "signature": "[Int]-\u003e[Int]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:equivalentOrders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracting the internal structure of the an element of the free operad.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "extractMap",
          "package": "Operads",
          "signature": "OperadElement a n t -\u003e MonomialMap a t n",
          "source": "src/Math-Operad-MapOperad.html#extractMap",
          "type": "function"
        },
        "index": {
          "description": "Extracting the internal structure of the an element of the free operad",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "extractMap",
          "normalized": "OperadElement a b c-\u003eMonomialMap a c b",
          "package": "Operads",
          "partial": "Map",
          "signature": "OperadElement a n t-\u003eMonomialMap a t n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:extractMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds all small common multiples of two trees, bounding the internal operation degree.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "findAllBoundedSCM",
          "package": "Operads",
          "signature": "Int -\u003e DecoratedTree a -\u003e DecoratedTree a -\u003e [DecoratedTree (Either a a)]",
          "source": "src/Math-Operad-OperadGB.html#findAllBoundedSCM",
          "type": "function"
        },
        "index": {
          "description": "Finds all small common multiples of two trees bounding the internal operation degree",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "findAllBoundedSCM",
          "normalized": "Int-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003e[DecoratedTree(Either a a)]",
          "package": "Operads",
          "partial": "All Bounded SCM",
          "signature": "Int-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003e[DecoratedTree(Either a a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:findAllBoundedSCM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds all ways to embed s into t respecting leaf orders.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "findAllEmbeddings",
          "package": "Operads",
          "signature": "DecoratedTree a -\u003e DecoratedTree a -\u003e [Embedding a]",
          "source": "src/Math-Operad-OperadGB.html#findAllEmbeddings",
          "type": "function"
        },
        "index": {
          "description": "Finds all ways to embed into respecting leaf orders",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "findAllEmbeddings",
          "normalized": "DecoratedTree a-\u003eDecoratedTree a-\u003e[Embedding a]",
          "package": "Operads",
          "partial": "All Embeddings",
          "signature": "DecoratedTree a-\u003eDecoratedTree a-\u003e[Embedding a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:findAllEmbeddings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds all small common multiples of two trees.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "findAllSCM",
          "package": "Operads",
          "signature": "DecoratedTree a -\u003e DecoratedTree a -\u003e [DecoratedTree (Either a a)]",
          "source": "src/Math-Operad-OperadGB.html#findAllSCM",
          "type": "function"
        },
        "index": {
          "description": "Finds all small common multiples of two trees",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "findAllSCM",
          "normalized": "DecoratedTree a-\u003eDecoratedTree a-\u003e[DecoratedTree(Either a a)]",
          "package": "Operads",
          "partial": "All SCM",
          "signature": "DecoratedTree a-\u003eDecoratedTree a-\u003e[DecoratedTree(Either a a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:findAllSCM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds all S polynomials for a given list of operad elements. \n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "findAllSPolynomials",
          "package": "Operads",
          "signature": "[OperadElement a n t] -\u003e [OperadElement a n t] -\u003e [OperadElement a n t]",
          "source": "src/Math-Operad-OperadGB.html#findAllSPolynomials",
          "type": "function"
        },
        "index": {
          "description": "Finds all polynomials for given list of operad elements",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "findAllSPolynomials",
          "normalized": "[OperadElement a b c]-\u003e[OperadElement a b c]-\u003e[OperadElement a b c]",
          "package": "Operads",
          "partial": "All SPolynomials",
          "signature": "[OperadElement a n t]-\u003e[OperadElement a n t]-\u003e[OperadElement a n t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:findAllSPolynomials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds small common multiples of two trees bounding internal operation degree.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "findBoundedSCM",
          "package": "Operads",
          "signature": "Int -\u003e DecoratedTree a -\u003e DecoratedTree a -\u003e [DecoratedTree (Either a a)]",
          "source": "src/Math-Operad-OperadGB.html#findBoundedSCM",
          "type": "function"
        },
        "index": {
          "description": "Finds small common multiples of two trees bounding internal operation degree",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "findBoundedSCM",
          "normalized": "Int-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003e[DecoratedTree(Either a a)]",
          "package": "Operads",
          "partial": "Bounded SCM",
          "signature": "Int-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003e[DecoratedTree(Either a a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:findBoundedSCM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocates the first vertex tagged with a \u003ccode\u003eRight\u003c/code\u003e constructor in a tree labeled with \u003ccode\u003eEither a b\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "findFirstRight",
          "package": "Operads",
          "signature": "DecoratedTree (Either a b) -\u003e Maybe (DecoratedTree (Either a b))",
          "source": "src/Math-Operad-OperadGB.html#findFirstRight",
          "type": "function"
        },
        "index": {
          "description": "Locates the first vertex tagged with Right constructor in tree labeled with Either",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "findFirstRight",
          "normalized": "DecoratedTree(Either a b)-\u003eMaybe(DecoratedTree(Either a b))",
          "package": "Operads",
          "partial": "First Right",
          "signature": "DecoratedTree(Either a b)-\u003eMaybe(DecoratedTree(Either a b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:findFirstRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds all S polynomials for which the operationdegree stays bounded.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "findInitialSPolynomials",
          "package": "Operads",
          "signature": "Int -\u003e [OperadElement a n t] -\u003e [OperadElement a n t] -\u003e [OperadElement a n t]",
          "source": "src/Math-Operad-OperadGB.html#findInitialSPolynomials",
          "type": "function"
        },
        "index": {
          "description": "Finds all polynomials for which the operationdegree stays bounded",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "findInitialSPolynomials",
          "normalized": "Int-\u003e[OperadElement a b c]-\u003e[OperadElement a b c]-\u003e[OperadElement a b c]",
          "package": "Operads",
          "partial": "Initial SPolynomials",
          "signature": "Int-\u003e[OperadElement a n t]-\u003e[OperadElement a n t]-\u003e[OperadElement a n t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:findInitialSPolynomials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-symmetric version of \u003ccode\u003e\u003ca\u003efindInitialSPolynomials\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "findNSInitialSPolynomials",
          "package": "Operads",
          "signature": "Int -\u003e [OperadElement a n t] -\u003e [OperadElement a n t] -\u003e [OperadElement a n t]",
          "source": "src/Math-Operad-OperadGB.html#findNSInitialSPolynomials",
          "type": "function"
        },
        "index": {
          "description": "Non-symmetric version of findInitialSPolynomials",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "findNSInitialSPolynomials",
          "normalized": "Int-\u003e[OperadElement a b c]-\u003e[OperadElement a b c]-\u003e[OperadElement a b c]",
          "package": "Operads",
          "partial": "NSInitial SPolynomials",
          "signature": "Int-\u003e[OperadElement a n t]-\u003e[OperadElement a n t]-\u003e[OperadElement a n t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:findNSInitialSPolynomials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-symmetric version of \u003ccode\u003e\u003ca\u003efindSPolynomials\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "findNSSPolynomials",
          "package": "Operads",
          "signature": "Int -\u003e OperadElement a n t -\u003e OperadElement a n t -\u003e [OperadElement a n t]",
          "source": "src/Math-Operad-OperadGB.html#findNSSPolynomials",
          "type": "function"
        },
        "index": {
          "description": "Non-symmetric version of findSPolynomials",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "findNSSPolynomials",
          "normalized": "Int-\u003eOperadElement a b c-\u003eOperadElement a b c-\u003e[OperadElement a b c]",
          "package": "Operads",
          "partial": "NSSPolynomials",
          "signature": "Int-\u003eOperadElement a n t-\u003eOperadElement a n t-\u003e[OperadElement a n t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:findNSSPolynomials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds structural small common multiples, disregarding leaf labels completely.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "findNonSymmetricSCM",
          "package": "Operads",
          "signature": "Int -\u003e DecoratedTree (Either a a) -\u003e DecoratedTree (Either a a) -\u003e [DecoratedTree (Either a a)]",
          "source": "src/Math-Operad-OperadGB.html#findNonSymmetricSCM",
          "type": "function"
        },
        "index": {
          "description": "Finds structural small common multiples disregarding leaf labels completely",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "findNonSymmetricSCM",
          "normalized": "Int-\u003eDecoratedTree(Either a a)-\u003eDecoratedTree(Either a a)-\u003e[DecoratedTree(Either a a)]",
          "package": "Operads",
          "partial": "Non Symmetric SCM",
          "signature": "Int-\u003eDecoratedTree(Either a a)-\u003eDecoratedTree(Either a a)-\u003e[DecoratedTree(Either a a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:findNonSymmetricSCM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds all ways to embed s into t, respecting leaf orders and mapping the root of s to the root of t.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "findRootedEmbedding",
          "package": "Operads",
          "signature": "DecoratedTree a -\u003e DecoratedTree a -\u003e Maybe (Embedding a)",
          "source": "src/Math-Operad-OperadGB.html#findRootedEmbedding",
          "type": "function"
        },
        "index": {
          "description": "Finds all ways to embed into respecting leaf orders and mapping the root of to the root of",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "findRootedEmbedding",
          "normalized": "DecoratedTree a-\u003eDecoratedTree a-\u003eMaybe(Embedding a)",
          "package": "Operads",
          "partial": "Rooted Embedding",
          "signature": "DecoratedTree a-\u003eDecoratedTree a-\u003eMaybe(Embedding a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:findRootedEmbedding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds rooted small common multiples of two trees.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "findRootedSCM",
          "package": "Operads",
          "signature": "DecoratedTree a -\u003e DecoratedTree a -\u003e Maybe (DecoratedTree a)",
          "source": "src/Math-Operad-OperadGB.html#findRootedSCM",
          "type": "function"
        },
        "index": {
          "description": "Finds rooted small common multiples of two trees",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "findRootedSCM",
          "normalized": "DecoratedTree a-\u003eDecoratedTree a-\u003eMaybe(DecoratedTree a)",
          "package": "Operads",
          "partial": "Rooted SCM",
          "signature": "DecoratedTree a-\u003eDecoratedTree a-\u003eMaybe(DecoratedTree a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:findRootedSCM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds all S polynomials for a given pair of operad elements, keeping a bound on operation degree.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "findSPolynomials",
          "package": "Operads",
          "signature": "Int -\u003e OperadElement a n t -\u003e OperadElement a n t -\u003e [OperadElement a n t]",
          "source": "src/Math-Operad-OperadGB.html#findSPolynomials",
          "type": "function"
        },
        "index": {
          "description": "Finds all polynomials for given pair of operad elements keeping bound on operation degree",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "findSPolynomials",
          "normalized": "Int-\u003eOperadElement a b c-\u003eOperadElement a b c-\u003e[OperadElement a b c]",
          "package": "Operads",
          "partial": "SPolynomials",
          "signature": "Int-\u003eOperadElement a n t-\u003eOperadElement a n t-\u003e[OperadElement a n t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:findSPolynomials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper function for \u003ccode\u003e\u003ca\u003efindRootedEmbedding\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "findUnsortedRootedEmbedding",
          "package": "Operads",
          "signature": "DecoratedTree a -\u003e DecoratedTree a -\u003e Maybe (Embedding a)",
          "source": "src/Math-Operad-OperadGB.html#findUnsortedRootedEmbedding",
          "type": "function"
        },
        "index": {
          "description": "Helper function for findRootedEmbedding",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "findUnsortedRootedEmbedding",
          "normalized": "DecoratedTree a-\u003eDecoratedTree a-\u003eMaybe(Embedding a)",
          "package": "Operads",
          "partial": "Unsorted Rooted Embedding",
          "signature": "DecoratedTree a-\u003eDecoratedTree a-\u003eMaybe(Embedding a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:findUnsortedRootedEmbedding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterchanges \u003ccode\u003eLeft\u003c/code\u003e to \u003ccode\u003eRight\u003c/code\u003e and \u003ccode\u003eRight\u003c/code\u003e to \u003ccode\u003eLeft\u003c/code\u003e for types \u003ccode\u003eEither a a\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "flipEither",
          "package": "Operads",
          "signature": "Either a a -\u003e Either a a",
          "source": "src/Math-Operad-OperadGB.html#flipEither",
          "type": "function"
        },
        "index": {
          "description": "Interchanges Left to Right and Right to Left for types Either",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "flipEither",
          "normalized": "Either a a-\u003eEither a a",
          "package": "Operads",
          "partial": "Either",
          "signature": "Either a a-\u003eEither a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:flipEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies \u003ccode\u003eflipEither\u003c/code\u003e to the root vertex label of a tree.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "flipEitherRoot",
          "package": "Operads",
          "signature": "PreDecoratedTree (Either a a) b -\u003e PreDecoratedTree (Either a a) b",
          "source": "src/Math-Operad-OperadGB.html#flipEitherRoot",
          "type": "function"
        },
        "index": {
          "description": "Applies flipEither to the root vertex label of tree",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "flipEitherRoot",
          "normalized": "PreDecoratedTree(Either a a)b-\u003ePreDecoratedTree(Either a a)b",
          "package": "Operads",
          "partial": "Either Root",
          "signature": "PreDecoratedTree(Either a a)b-\u003ePreDecoratedTree(Either a a)b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:flipEitherRoot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold a function over all monomial trees in an operad element, collating the results in a list.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "foldMonomials",
          "package": "Operads",
          "signature": "((OrderedTree a t, n) -\u003e [b] -\u003e [b]) -\u003e OperadElement a n t -\u003e [b]",
          "source": "src/Math-Operad-MapOperad.html#foldMonomials",
          "type": "function"
        },
        "index": {
          "description": "Fold function over all monomial trees in an operad element collating the results in list",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "foldMonomials",
          "normalized": "((OrderedTree a b,c)-\u003e[d]-\u003e[d])-\u003eOperadElement a c b-\u003e[d]",
          "package": "Operads",
          "partial": "Monomials",
          "signature": "((OrderedTree a t,n)-\u003e[b]-\u003e[b])-\u003eOperadElement a n t-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:foldMonomials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves vertex type encapsulations.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "fromJustTree",
          "package": "Operads",
          "signature": "DecoratedTree (Maybe a) -\u003e Maybe (DecoratedTree a)",
          "source": "src/Math-Operad-OperadGB.html#fromJustTree",
          "type": "function"
        },
        "index": {
          "description": "Removes vertex type encapsulations",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "fromJustTree",
          "normalized": "DecoratedTree(Maybe a)-\u003eMaybe(DecoratedTree a)",
          "package": "Operads",
          "partial": "Just Tree",
          "signature": "DecoratedTree(Maybe a)-\u003eMaybe(DecoratedTree a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:fromJustTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of (tree,coefficient)-pairs, reconstruct the corresponding operad element.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "fromList",
          "package": "Operads",
          "signature": "[(OrderedTree a t, n)] -\u003e OperadElement a n t",
          "source": "src/Math-Operad-MapOperad.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Given list of tree coefficient pairs reconstruct the corresponding operad element",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "fromList",
          "normalized": "[(OrderedTree a b,c)]-\u003eOperadElement a c b",
          "package": "Operads",
          "partial": "List",
          "signature": "[(OrderedTree a t,n)]-\u003eOperadElement a n t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProjects vertex labels and applies leaf labels to a tree with internal labeling in \u003ccode\u003eEither a a\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "fuseTree",
          "package": "Operads",
          "signature": "DecoratedTree (Either a a) -\u003e [Int] -\u003e DecoratedTree (Either a a)",
          "source": "src/Math-Operad-OperadGB.html#fuseTree",
          "type": "function"
        },
        "index": {
          "description": "Projects vertex labels and applies leaf labels to tree with internal labeling in Either",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "fuseTree",
          "normalized": "DecoratedTree(Either a a)-\u003e[Int]-\u003eDecoratedTree(Either a a)",
          "package": "Operads",
          "partial": "Tree",
          "signature": "DecoratedTree(Either a a)-\u003e[Int]-\u003eDecoratedTree(Either a a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:fuseTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract all occurring monomial trees from an operad element.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "getTrees",
          "package": "Operads",
          "signature": "OperadElement a n t -\u003e [OrderedTree a t]",
          "source": "src/Math-Operad-MapOperad.html#getTrees",
          "type": "function"
        },
        "index": {
          "description": "Extract all occurring monomial trees from an operad element",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "getTrees",
          "normalized": "OperadElement a b c-\u003e[OrderedTree a c]",
          "package": "Operads",
          "partial": "Trees",
          "signature": "OperadElement a n t-\u003e[OrderedTree a t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:getTrees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf a tree has trees as labels for its leaves, we can replace the leaves with the roots of\n those label trees. Thus we may glue together trees, as required by the compositions.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "glueTrees",
          "package": "Operads",
          "signature": "PreDecoratedTree a (PreDecoratedTree a b) -\u003e PreDecoratedTree a b",
          "source": "src/Math-Operad-OrderedTree.html#glueTrees",
          "type": "function"
        },
        "index": {
          "description": "If tree has trees as labels for its leaves we can replace the leaves with the roots of those label trees Thus we may glue together trees as required by the compositions",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "glueTrees",
          "normalized": "PreDecoratedTree a(PreDecoratedTree a b)-\u003ePreDecoratedTree a b",
          "package": "Operads",
          "partial": "Trees",
          "signature": "PreDecoratedTree a(PreDecoratedTree a b)-\u003ePreDecoratedTree a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:glueTrees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the permutation inversely to \u003ccode\u003e\u003ca\u003eapplyPerm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "invApplyPerm",
          "package": "Operads",
          "signature": "Shuffle -\u003e [a] -\u003e [a]",
          "source": "src/Math-Operad-OrderedTree.html#invApplyPerm",
          "type": "function"
        },
        "index": {
          "description": "Apply the permutation inversely to applyPerm",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "invApplyPerm",
          "normalized": "Shuffle-\u003e[a]-\u003e[a]",
          "package": "Operads",
          "partial": "Apply Perm",
          "signature": "Shuffle-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:invApplyPerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a given root is a corolla.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "isCorolla",
          "package": "Operads",
          "signature": "DecoratedTree a -\u003e Bool",
          "source": "src/Math-Operad-OrderedTree.html#isCorolla",
          "type": "function"
        },
        "index": {
          "description": "Check whether given root is corolla",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "isCorolla",
          "normalized": "DecoratedTree a-\u003eBool",
          "package": "Operads",
          "partial": "Corolla",
          "signature": "DecoratedTree a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:isCorolla"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck that an element of a free operad is homogenous\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "isHomogenous",
          "package": "Operads",
          "signature": "OperadElement a n t -\u003e Bool",
          "source": "src/Math-Operad-OperadGB.html#isHomogenous",
          "type": "function"
        },
        "index": {
          "description": "Check that an element of free operad is homogenous",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "isHomogenous",
          "normalized": "OperadElement a b c-\u003eBool",
          "package": "Operads",
          "partial": "Homogenous",
          "signature": "OperadElement a n t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:isHomogenous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a given root is a leaf.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "isLeaf",
          "package": "Operads",
          "signature": "DecoratedTree a -\u003e Bool",
          "source": "src/Math-Operad-OrderedTree.html#isLeaf",
          "type": "function"
        },
        "index": {
          "description": "Check whether given root is leaf",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "isLeaf",
          "normalized": "DecoratedTree a-\u003eBool",
          "package": "Operads",
          "partial": "Leaf",
          "signature": "DecoratedTree a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:isLeaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSanity check for permutations. \n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "isPermutation",
          "package": "Operads",
          "signature": "Shuffle -\u003e Bool",
          "source": "src/Math-Operad-OperadGB.html#isPermutation",
          "type": "function"
        },
        "index": {
          "description": "Sanity check for permutations",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "isPermutation",
          "normalized": "Shuffle-\u003eBool",
          "package": "Operads",
          "partial": "Permutation",
          "signature": "Shuffle-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:isPermutation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis tests whether a given sequence of integers really is a shuffle.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "isShuffle",
          "package": "Operads",
          "signature": "Shuffle -\u003e Bool",
          "source": "src/Math-Operad-OrderedTree.html#isShuffle",
          "type": "function"
        },
        "index": {
          "description": "This tests whether given sequence of integers really is shuffle",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "isShuffle",
          "normalized": "Shuffle-\u003eBool",
          "package": "Operads",
          "partial": "Shuffle",
          "signature": "Shuffle-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:isShuffle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis tests whether a given sequence of integers is an (i,j)-shuffle\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "isShuffleIJ",
          "package": "Operads",
          "signature": "Shuffle -\u003e Int -\u003e Int -\u003e Bool",
          "source": "src/Math-Operad-OrderedTree.html#isShuffleIJ",
          "type": "function"
        },
        "index": {
          "description": "This tests whether given sequence of integers is an shuffle",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "isShuffleIJ",
          "normalized": "Shuffle-\u003eInt-\u003eInt-\u003eBool",
          "package": "Operads",
          "partial": "Shuffle IJ",
          "signature": "Shuffle-\u003eInt-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:isShuffleIJ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis tests whether a given sequence of integers is admissible for a specific composition operation.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "isShuffleIPQ",
          "package": "Operads",
          "signature": "Shuffle -\u003e Int -\u003e Int -\u003e Bool",
          "source": "src/Math-Operad-OrderedTree.html#isShuffleIPQ",
          "type": "function"
        },
        "index": {
          "description": "This tests whether given sequence of integers is admissible for specific composition operation",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "isShuffleIPQ",
          "normalized": "Shuffle-\u003eInt-\u003eInt-\u003eBool",
          "package": "Operads",
          "partial": "Shuffle IPQ",
          "signature": "Shuffle-\u003eInt-\u003eInt-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:isShuffleIPQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe need to recognize sorted sequences of integers.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "isSorted",
          "package": "Operads",
          "signature": "[a] -\u003e Bool",
          "source": "src/Math-Operad-OrderedTree.html#isSorted",
          "type": "function"
        },
        "index": {
          "description": "We need to recognize sorted sequences of integers",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "isSorted",
          "normalized": "[a]-\u003eBool",
          "package": "Operads",
          "partial": "Sorted",
          "signature": "[a]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:isSorted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether an element is equal to 0. \n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "isZero",
          "package": "Operads",
          "signature": "OperadElement a n t -\u003e Bool",
          "source": "src/Math-Operad-MapOperad.html#isZero",
          "type": "function"
        },
        "index": {
          "description": "Check whether an element is equal to",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "isZero",
          "normalized": "OperadElement a b c-\u003eBool",
          "package": "Operads",
          "partial": "Zero",
          "signature": "OperadElement a n t-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:isZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate all subsets of length k from a given list. \n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "kSubsets",
          "package": "Operads",
          "signature": "Int -\u003e [Int] -\u003e [[Int]]",
          "source": "src/Math-Operad-OrderedTree.html#kSubsets",
          "type": "function"
        },
        "index": {
          "description": "Generate all subsets of length from given list",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "kSubsets",
          "normalized": "Int-\u003e[Int]-\u003e[[Int]]",
          "package": "Operads",
          "partial": "Subsets",
          "signature": "Int-\u003e[Int]-\u003e[[Int]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:kSubsets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePicks out the last nonzero entry in a list.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "lastNonzero",
          "package": "Operads",
          "signature": "[a] -\u003e Int",
          "source": "src/Math-Operad-OrderedTree.html#lastNonzero",
          "type": "function"
        },
        "index": {
          "description": "Picks out the last nonzero entry in list",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "lastNonzero",
          "normalized": "[a]-\u003eInt",
          "package": "Operads",
          "partial": "Nonzero",
          "signature": "[a]-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:lastNonzero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the leading coefficient of an operad element.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "leadingCoefficient",
          "package": "Operads",
          "signature": "OperadElement a n t -\u003e n",
          "source": "src/Math-Operad-MapOperad.html#leadingCoefficient",
          "type": "function"
        },
        "index": {
          "description": "Extract the leading coefficient of an operad element",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "leadingCoefficient",
          "normalized": "OperadElement a b c-\u003eb",
          "package": "Operads",
          "partial": "Coefficient",
          "signature": "OperadElement a n t-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:leadingCoefficient"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the tree for the leading term of an operad element.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "leadingMonomial",
          "package": "Operads",
          "signature": "OperadElement a n t -\u003e DecoratedTree a",
          "source": "src/Math-Operad-MapOperad.html#leadingMonomial",
          "type": "function"
        },
        "index": {
          "description": "Extract the tree for the leading term of an operad element",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "leadingMonomial",
          "normalized": "OperadElement a b c-\u003eDecoratedTree a",
          "package": "Operads",
          "partial": "Monomial",
          "signature": "OperadElement a n t-\u003eDecoratedTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:leadingMonomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the ordered tree for the leading term of an operad element.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "leadingOMonomial",
          "package": "Operads",
          "signature": "OperadElement a n t -\u003e OrderedTree a t",
          "source": "src/Math-Operad-MapOperad.html#leadingOMonomial",
          "type": "function"
        },
        "index": {
          "description": "Extract the ordered tree for the leading term of an operad element",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "leadingOMonomial",
          "normalized": "OperadElement a b c-\u003eOrderedTree a c",
          "package": "Operads",
          "partial": "OMonomial",
          "signature": "OperadElement a n t-\u003eOrderedTree a t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:leadingOMonomial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the leading term of an operad element as an operad element.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "leadingOTerm",
          "package": "Operads",
          "signature": "OperadElement a n t -\u003e OperadElement a n t",
          "source": "src/Math-Operad-MapOperad.html#leadingOTerm",
          "type": "function"
        },
        "index": {
          "description": "Extract the leading term of an operad element as an operad element",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "leadingOTerm",
          "normalized": "OperadElement a b c-\u003eOperadElement a b c",
          "package": "Operads",
          "partial": "OTerm",
          "signature": "OperadElement a n t-\u003eOperadElement a n t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:leadingOTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the leading term of an operad element. \n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "leadingTerm",
          "package": "Operads",
          "signature": "OperadElement a n t -\u003e (OrderedTree a t, n)",
          "source": "src/Math-Operad-MapOperad.html#leadingTerm",
          "type": "function"
        },
        "index": {
          "description": "Extract the leading term of an operad element",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "leadingTerm",
          "normalized": "OperadElement a b c-\u003e(OrderedTree a c,b)",
          "package": "Operads",
          "partial": "Term",
          "signature": "OperadElement a n t-\u003e(OrderedTree a t,n)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:leadingTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a single leaf.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "leaf",
          "package": "Operads",
          "signature": "Int -\u003e DecoratedTree a",
          "source": "src/Math-Operad-OrderedTree.html#leaf",
          "type": "function"
        },
        "index": {
          "description": "Build single leaf",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "leaf",
          "normalized": "Int-\u003eDecoratedTree a",
          "package": "Operads",
          "signature": "Int-\u003eDecoratedTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursive algorithm to figure out correct leaf labels for a reconstructed small common multiple of two trees.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "leafLabels",
          "package": "Operads",
          "signature": "DecoratedTree a -\u003e [Int] -\u003e [Int] -\u003e [[Int]]",
          "source": "src/Math-Operad-OperadGB.html#leafLabels",
          "type": "function"
        },
        "index": {
          "description": "Recursive algorithm to figure out correct leaf labels for reconstructed small common multiple of two trees",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "leafLabels",
          "normalized": "DecoratedTree a-\u003e[Int]-\u003e[Int]-\u003e[[Int]]",
          "package": "Operads",
          "partial": "Labels",
          "signature": "DecoratedTree a-\u003e[Int]-\u003e[Int]-\u003e[[Int]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:leafLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the permutation the leaf labeling ordains for inputs.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "leafOrder",
          "package": "Operads",
          "signature": "DecoratedTree a -\u003e [Int]",
          "source": "src/Math-Operad-OrderedTree.html#leafOrder",
          "type": "function"
        },
        "index": {
          "description": "Find the permutation the leaf labeling ordains for inputs",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "leafOrder",
          "normalized": "DecoratedTree a-\u003e[Int]",
          "package": "Operads",
          "partial": "Order",
          "signature": "DecoratedTree a-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:leafOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAcquires lists for resorting leaf labels according to the algorithm found for\n constructing small common multiples with minimal work.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "leafOrders",
          "package": "Operads",
          "signature": "DecoratedTree a -\u003e DecoratedTree b -\u003e [(Int, Int)]",
          "source": "src/Math-Operad-OperadGB.html#leafOrders",
          "type": "function"
        },
        "index": {
          "description": "Acquires lists for resorting leaf labels according to the algorithm found for constructing small common multiples with minimal work",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "leafOrders",
          "normalized": "DecoratedTree a-\u003eDecoratedTree b-\u003e[(Int,Int)]",
          "package": "Operads",
          "partial": "Orders",
          "signature": "DecoratedTree a-\u003eDecoratedTree b-\u003e[(Int,Int)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:leafOrders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of operad elements consisting of 'm12_3'-'m13_2'-'m1_23'. This generates the \n ideal of relations for the operad Lie.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "lgb",
          "package": "Operads",
          "signature": "[OperadElement Integer Rational PathPerm]",
          "source": "src/Math-Operad.html#lgb",
          "type": "function"
        },
        "index": {
          "description": "The list of operad elements consisting of m12 m13 m1 This generates the ideal of relations for the operad Lie",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "lgb",
          "normalized": "[OperadElement Integer Rational PathPerm]",
          "package": "Operads",
          "signature": "[OperadElement Integer Rational PathPerm]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:lgb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe element m2(m2(1,2),3)\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "m12_3",
          "package": "Operads",
          "signature": "DecoratedTree Integer",
          "source": "src/Math-Operad.html#m12_3",
          "type": "function"
        },
        "index": {
          "description": "The element m2 m2",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "m12_3",
          "package": "Operads",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:m12_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe element m2(m2(1,3),2)\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "m13_2",
          "package": "Operads",
          "signature": "DecoratedTree Integer",
          "source": "src/Math-Operad.html#m13_2",
          "type": "function"
        },
        "index": {
          "description": "The element m2 m2",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "m13_2",
          "package": "Operads",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:m13_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe element m2(1,m2(2,3))\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "m1_23",
          "package": "Operads",
          "signature": "DecoratedTree Integer",
          "source": "src/Math-Operad.html#m1_23",
          "type": "function"
        },
        "index": {
          "description": "The element m2 m2",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "m1_23",
          "package": "Operads",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:m1_23"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe element m2(1,2)\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "m2",
          "package": "Operads",
          "signature": "DecoratedTree Integer",
          "source": "src/Math-Operad.html#m2",
          "type": "function"
        },
        "index": {
          "description": "The element m2",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "m2",
          "package": "Operads",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:m2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe element m3(1,2,3)\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "m3",
          "package": "Operads",
          "signature": "DecoratedTree Integer",
          "source": "src/Math-Operad.html#m3",
          "type": "function"
        },
        "index": {
          "description": "The element m3",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "m3",
          "package": "Operads",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:m3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to each monomial tree in the operad element.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "mapMonomials",
          "package": "Operads",
          "signature": "(OrderedTree a s -\u003e OrderedTree b t) -\u003e OperadElement a n s -\u003e OperadElement b n t",
          "source": "src/Math-Operad-MapOperad.html#mapMonomials",
          "type": "function"
        },
        "index": {
          "description": "Apply function to each monomial tree in the operad element",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "mapMonomials",
          "normalized": "(OrderedTree a b-\u003eOrderedTree c d)-\u003eOperadElement a e b-\u003eOperadElement c e d",
          "package": "Operads",
          "partial": "Monomials",
          "signature": "(OrderedTree a s-\u003eOrderedTree b t)-\u003eOperadElement a n s-\u003eOperadElement b n t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:mapMonomials"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe maximal operation degree of an operadic element\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "maxOperationDegree",
          "package": "Operads",
          "signature": "OperadElement a n t -\u003e Int",
          "source": "src/Math-Operad-OperadGB.html#maxOperationDegree",
          "type": "function"
        },
        "index": {
          "description": "The maximal operation degree of an operadic element",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "maxOperationDegree",
          "normalized": "OperadElement a b c-\u003eInt",
          "package": "Operads",
          "partial": "Operation Degree",
          "signature": "OperadElement a n t-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:maxOperationDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to listToMaybe . reverse\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "maybeLast",
          "package": "Operads",
          "signature": "[a] -\u003e Maybe a",
          "source": "src/Math-Operad-OperadGB.html#maybeLast",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to listToMaybe reverse",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "maybeLast",
          "normalized": "[a]-\u003eMaybe a",
          "package": "Operads",
          "partial": "Last",
          "signature": "[a]-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:maybeLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the minimal leaf covering any given vertex.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "minimalLeaf",
          "package": "Operads",
          "signature": "PreDecoratedTree a b -\u003e b",
          "source": "src/Math-Operad-OrderedTree.html#minimalLeaf",
          "type": "function"
        },
        "index": {
          "description": "Find the minimal leaf covering any given vertex",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "minimalLeaf",
          "normalized": "PreDecoratedTree a b-\u003eb",
          "package": "Operads",
          "partial": "Leaf",
          "signature": "PreDecoratedTree a b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:minimalLeaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute the number of leaves of the entire tree covering a given vertex.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "nLeaves",
          "package": "Operads",
          "signature": "DecoratedTree a -\u003e Int",
          "source": "src/Math-Operad-OrderedTree.html#nLeaves",
          "type": "function"
        },
        "index": {
          "description": "Compute the number of leaves of the entire tree covering given vertex",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "nLeaves",
          "normalized": "DecoratedTree a-\u003eInt",
          "package": "Operads",
          "partial": "Leaves",
          "signature": "DecoratedTree a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:nLeaves"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposition in the non-symmetric operad. We compose s o_i t. \n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "nsCompose",
          "package": "Operads",
          "signature": "Int -\u003e DecoratedTree a -\u003e DecoratedTree a -\u003e DecoratedTree a",
          "source": "src/Math-Operad-OperadGB.html#nsCompose",
          "type": "function"
        },
        "index": {
          "description": "Composition in the non-symmetric operad We compose",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "nsCompose",
          "normalized": "Int-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003eDecoratedTree a",
          "package": "Operads",
          "partial": "Compose",
          "signature": "Int-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003eDecoratedTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:nsCompose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-symmetric composition in the g(s;t1,...,tk) style. \n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "nsComposeAll",
          "package": "Operads",
          "signature": "DecoratedTree a -\u003e [DecoratedTree a] -\u003e DecoratedTree a",
          "source": "src/Math-Operad-OperadGB.html#nsComposeAll",
          "type": "function"
        },
        "index": {
          "description": "Non-symmetric composition in the t1 tk style",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "nsComposeAll",
          "normalized": "DecoratedTree a-\u003e[DecoratedTree a]-\u003eDecoratedTree a",
          "package": "Operads",
          "partial": "Compose All",
          "signature": "DecoratedTree a-\u003e[DecoratedTree a]-\u003eDecoratedTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:nsComposeAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-symmetric version of \u003ccode\u003e\u003ca\u003eoperadicBuchberger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "nsOperadicBuchberger",
          "package": "Operads",
          "signature": "[OperadElement a n t] -\u003e [OperadElement a n t]",
          "source": "src/Math-Operad-OperadGB.html#nsOperadicBuchberger",
          "type": "function"
        },
        "index": {
          "description": "Non-symmetric version of operadicBuchberger",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "nsOperadicBuchberger",
          "normalized": "[OperadElement a b c]-\u003e[OperadElement a b c]",
          "package": "Operads",
          "partial": "Operadic Buchberger",
          "signature": "[OperadElement a n t]-\u003e[OperadElement a n t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:nsOperadicBuchberger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an element in the free operad from its internal structure. Use this instead of the constructor.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "oe",
          "package": "Operads",
          "signature": "[(OrderedTree a t, n)] -\u003e OperadElement a n t",
          "source": "src/Math-Operad-MapOperad.html#oe",
          "type": "function"
        },
        "index": {
          "description": "Construct an element in the free operad from its internal structure Use this instead of the constructor",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "oe",
          "normalized": "[(OrderedTree a b,c)]-\u003eOperadElement a c b",
          "package": "Operads",
          "signature": "[(OrderedTree a t,n)]-\u003eOperadElement a n t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:oe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a monomial in the free operad from a tree, a tree ordering and a coefficient.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "oek",
          "package": "Operads",
          "signature": "DecoratedTree a -\u003e n -\u003e OperadElement a n t",
          "source": "src/Math-Operad-MapOperad.html#oek",
          "type": "function"
        },
        "index": {
          "description": "Construct monomial in the free operad from tree tree ordering and coefficient",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "oek",
          "normalized": "DecoratedTree a-\u003eb-\u003eOperadElement a b c",
          "package": "Operads",
          "signature": "DecoratedTree a-\u003en-\u003eOperadElement a n t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:oek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a monomial in the free operad from a tree and a tree ordering. It's coefficient will be 1.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "oet",
          "package": "Operads",
          "signature": "DecoratedTree a -\u003e OperadElement a n t",
          "source": "src/Math-Operad-MapOperad.html#oet",
          "type": "function"
        },
        "index": {
          "description": "Construct monomial in the free operad from tree and tree ordering It coefficient will be",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "oet",
          "normalized": "DecoratedTree a-\u003eOperadElement a b c",
          "package": "Operads",
          "signature": "DecoratedTree a-\u003eOperadElement a n t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:oet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform the entire Buchberger algorithm for a given list of generators. Iteratively run the single iteration\n from \u003ccode\u003e\u003ca\u003estepOperadicBuchberger\u003c/a\u003e\u003c/code\u003e until no new elements are generated.\n\u003c/p\u003e\u003cp\u003eDO NOTE: This is entirely possible to get stuck in an infinite loop. It is not difficult to write down generators\n such that the resulting Groebner basis is infinite. No checking is performed to catch this kind of condition.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "operadicBuchberger",
          "package": "Operads",
          "signature": "[OperadElement a n t] -\u003e [OperadElement a n t]",
          "source": "src/Math-Operad-OperadGB.html#operadicBuchberger",
          "type": "function"
        },
        "index": {
          "description": "Perform the entire Buchberger algorithm for given list of generators Iteratively run the single iteration from stepOperadicBuchberger until no new elements are generated DO NOTE This is entirely possible to get stuck in an infinite loop It is not difficult to write down generators such that the resulting Groebner basis is infinite No checking is performed to catch this kind of condition",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "operadicBuchberger",
          "normalized": "[OperadElement a b c]-\u003e[OperadElement a b c]",
          "package": "Operads",
          "partial": "Buchberger",
          "signature": "[OperadElement a n t]-\u003e[OperadElement a n t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:operadicBuchberger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of internal vertices of a tree.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "operationDegree",
          "package": "Operads",
          "signature": "DecoratedTree a -\u003e Int",
          "source": "src/Math-Operad-OperadGB.html#operationDegree",
          "type": "function"
        },
        "index": {
          "description": "The number of internal vertices of tree",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "operationDegree",
          "normalized": "DecoratedTree a-\u003eInt",
          "package": "Operads",
          "partial": "Degree",
          "signature": "DecoratedTree a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:operationDegree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list of operation degrees occurring in the terms of the operad element\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "operationDegrees",
          "package": "Operads",
          "signature": "OperadElement a n t -\u003e [Int]",
          "source": "src/Math-Operad-OperadGB.html#operationDegrees",
          "type": "function"
        },
        "index": {
          "description": "list of operation degrees occurring in the terms of the operad element",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "operationDegrees",
          "normalized": "OperadElement a b c-\u003e[Int]",
          "package": "Operads",
          "partial": "Degrees",
          "signature": "OperadElement a n t-\u003e[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:operationDegrees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReordering the path sequences to mirror the actual leaf ordering.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "orderedPathSequence",
          "package": "Operads",
          "signature": "DecoratedTree a -\u003e ([[a]], Shuffle)",
          "source": "src/Math-Operad-OrderedTree.html#orderedPathSequence",
          "type": "function"
        },
        "index": {
          "description": "Reordering the path sequences to mirror the actual leaf ordering",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "orderedPathSequence",
          "normalized": "DecoratedTree a-\u003e([[a]],Shuffle)",
          "package": "Operads",
          "partial": "Path Sequence",
          "signature": "DecoratedTree a-\u003e([[a]],Shuffle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:orderedPathSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "ordering",
          "package": "Operads",
          "signature": "t",
          "source": "src/Math-Operad-OrderedTree.html#ordering",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "ordering",
          "package": "Operads",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:ordering"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilding an ordered tree with \u003ccode\u003ePathLex\u003c/code\u003e ordering from a decorated tree.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "ot",
          "package": "Operads",
          "signature": "DecoratedTree a -\u003e OrderedTree a t",
          "source": "src/Math-Operad-OrderedTree.html#ot",
          "type": "function"
        },
        "index": {
          "description": "Building an ordered tree with PathLex ordering from decorated tree",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "ot",
          "normalized": "DecoratedTree a-\u003eOrderedTree a b",
          "package": "Operads",
          "signature": "DecoratedTree a-\u003eOrderedTree a t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:ot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "pP",
          "package": "Operads",
          "signature": "a -\u003e IO ()",
          "source": "src/Math-Operad-PPrint.html#pP",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "pP",
          "normalized": "a-\u003eIO()",
          "package": "Operads",
          "signature": "a-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:pP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinding the path sequences. cf. Dotsenko-Khoroshkin.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "pathSequence",
          "package": "Operads",
          "signature": "DecoratedTree a -\u003e ([[a]], Shuffle)",
          "source": "src/Math-Operad-OrderedTree.html#pathSequence",
          "type": "function"
        },
        "index": {
          "description": "Finding the path sequences cf Dotsenko-Khoroshkin",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "pathSequence",
          "normalized": "DecoratedTree a-\u003e([[a]],Shuffle)",
          "package": "Operads",
          "partial": "Sequence",
          "signature": "DecoratedTree a-\u003e([[a]],Shuffle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:pathSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks a tree for planarity.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "planarTree",
          "package": "Operads",
          "signature": "DecoratedTree a -\u003e Bool",
          "source": "src/Math-Operad-OperadGB.html#planarTree",
          "type": "function"
        },
        "index": {
          "description": "Checks tree for planarity",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "planarTree",
          "normalized": "DecoratedTree a-\u003eBool",
          "package": "Operads",
          "partial": "Tree",
          "signature": "DecoratedTree a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:planarTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "pp",
          "package": "Operads",
          "signature": "a -\u003e String",
          "source": "src/Math-Operad-PPrint.html#pp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "pp",
          "normalized": "a-\u003eString",
          "package": "Operads",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:pp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelabels a tree in the right order, but with entries from [1..]\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "rePackLabels",
          "package": "Operads",
          "signature": "PreDecoratedTree a b -\u003e DecoratedTree a",
          "source": "src/Math-Operad-OperadGB.html#rePackLabels",
          "type": "function"
        },
        "index": {
          "description": "Relabels tree in the right order but with entries from",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "rePackLabels",
          "normalized": "PreDecoratedTree a b-\u003eDecoratedTree a",
          "package": "Operads",
          "partial": "Pack Labels",
          "signature": "PreDecoratedTree a b-\u003eDecoratedTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:rePackLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function that mimics resubstitution of a new tree into the hole left by finding embedding,\n called m_alpha,beta in Dotsenko-Khoroshkin. This version only attempts to resubstitute the tree\n at the root, bailing out if not possible.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "reconstructNode",
          "package": "Operads",
          "signature": "DecoratedTree a -\u003e Embedding a -\u003e Maybe (DecoratedTree a)",
          "source": "src/Math-Operad-OperadGB.html#reconstructNode",
          "type": "function"
        },
        "index": {
          "description": "The function that mimics resubstitution of new tree into the hole left by finding embedding called alpha beta in Dotsenko-Khoroshkin This version only attempts to resubstitute the tree at the root bailing out if not possible",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "reconstructNode",
          "normalized": "DecoratedTree a-\u003eEmbedding a-\u003eMaybe(DecoratedTree a)",
          "package": "Operads",
          "partial": "Node",
          "signature": "DecoratedTree a-\u003eEmbedding a-\u003eMaybe(DecoratedTree a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:reconstructNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function that mimics resubstitution of a new tree into the hole left by finding embedding,\n called m_alpha,beta in Dotsenko-Khoroshkin. This version recurses down in the tree in order\n to find exactly one hole, and substitute the tree sub into it.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "reconstructTree",
          "package": "Operads",
          "signature": "DecoratedTree a -\u003e Embedding a -\u003e Maybe (DecoratedTree a)",
          "source": "src/Math-Operad-OperadGB.html#reconstructTree",
          "type": "function"
        },
        "index": {
          "description": "The function that mimics resubstitution of new tree into the hole left by finding embedding called alpha beta in Dotsenko-Khoroshkin This version recurses down in the tree in order to find exactly one hole and substitute the tree sub into it",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "reconstructTree",
          "normalized": "DecoratedTree a-\u003eEmbedding a-\u003eMaybe(DecoratedTree a)",
          "package": "Operads",
          "partial": "Tree",
          "signature": "DecoratedTree a-\u003eEmbedding a-\u003eMaybe(DecoratedTree a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:reconstructTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduces a list of elements with respect to all other elements occurring in that same list.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "reduceBasis",
          "package": "Operads",
          "signature": "[OperadElement a n t] -\u003e [OperadElement a n t] -\u003e [OperadElement a n t]",
          "source": "src/Math-Operad-OperadGB.html#reduceBasis",
          "type": "function"
        },
        "index": {
          "description": "Reduces list of elements with respect to all other elements occurring in that same list",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "reduceBasis",
          "normalized": "[OperadElement a b c]-\u003e[OperadElement a b c]-\u003e[OperadElement a b c]",
          "package": "Operads",
          "partial": "Basis",
          "signature": "[OperadElement a n t]-\u003e[OperadElement a n t]-\u003e[OperadElement a n t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:reduceBasis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduce all terms of \u003ccode\u003eop\u003c/code\u003e with respect to \u003ccode\u003egbn\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "reduceCompletely",
          "package": "Operads",
          "signature": "OperadElement a n t -\u003e [OperadElement a n t] -\u003e OperadElement a n t",
          "source": "src/Math-Operad-OperadGB.html#reduceCompletely",
          "type": "function"
        },
        "index": {
          "description": "Reduce all terms of op with respect to gbn",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "reduceCompletely",
          "normalized": "OperadElement a b c-\u003e[OperadElement a b c]-\u003eOperadElement a b c",
          "package": "Operads",
          "partial": "Completely",
          "signature": "OperadElement a n t-\u003e[OperadElement a n t]-\u003eOperadElement a n t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:reduceCompletely"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduce the leading monomial of \u003ccode\u003eop\u003c/code\u003e with respect to \u003ccode\u003egb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "reduceInitial",
          "package": "Operads",
          "signature": "OperadElement a n t -\u003e [OperadElement a n t] -\u003e OperadElement a n t",
          "source": "src/Math-Operad-OperadGB.html#reduceInitial",
          "type": "function"
        },
        "index": {
          "description": "Reduce the leading monomial of op with respect to gb",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "reduceInitial",
          "normalized": "OperadElement a b c-\u003e[OperadElement a b c]-\u003eOperadElement a b c",
          "package": "Operads",
          "partial": "Initial",
          "signature": "OperadElement a n t-\u003e[OperadElement a n t]-\u003eOperadElement a n t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:reduceInitial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduce g with respect to f and the embedding em: lt f -\u003e lt g.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "reduceOE",
          "package": "Operads",
          "signature": "Embedding a -\u003e OperadElement a n t -\u003e OperadElement a n t -\u003e OperadElement a n t",
          "source": "src/Math-Operad-OperadGB.html#reduceOE",
          "type": "function"
        },
        "index": {
          "description": "Reduce with respect to and the embedding em lt lt",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "reduceOE",
          "normalized": "Embedding a-\u003eOperadElement a b c-\u003eOperadElement a b c-\u003eOperadElement a b c",
          "package": "Operads",
          "partial": "OE",
          "signature": "Embedding a-\u003eOperadElement a n t-\u003eOperadElement a n t-\u003eOperadElement a n t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:reduceOE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the leaves of a tree to take their values from a given list.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "relabelLeaves",
          "package": "Operads",
          "signature": "DecoratedTree a -\u003e [b] -\u003e PreDecoratedTree a b",
          "source": "src/Math-Operad-OrderedTree.html#relabelLeaves",
          "type": "function"
        },
        "index": {
          "description": "Change the leaves of tree to take their values from given list",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "relabelLeaves",
          "normalized": "DecoratedTree a-\u003e[b]-\u003ePreDecoratedTree a b",
          "package": "Operads",
          "partial": "Leaves",
          "signature": "DecoratedTree a-\u003e[b]-\u003ePreDecoratedTree a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:relabelLeaves"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChanges direction of an ordering.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "reverseOrder",
          "package": "Operads",
          "signature": "Ordering -\u003e Ordering",
          "source": "src/Math-Operad-OrderedTree.html#reverseOrder",
          "type": "function"
        },
        "index": {
          "description": "Changes direction of an ordering",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "reverseOrder",
          "normalized": "Ordering-\u003eOrdering",
          "package": "Operads",
          "partial": "Order",
          "signature": "Ordering-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:reverseOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs embeddings for \u003ccode\u003es\u003c/code\u003e and \u003ccode\u003et\u003c/code\u003e in \u003ccode\u003eSCM(s,t)\u003c/code\u003e and returns these.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "scmToEmbedding",
          "package": "Operads",
          "signature": "DecoratedTree (Either a a) -\u003e DecoratedTree a -\u003e DecoratedTree a -\u003e (Embedding a, Embedding a)",
          "source": "src/Math-Operad-OperadGB.html#scmToEmbedding",
          "type": "function"
        },
        "index": {
          "description": "Constructs embeddings for and in SCM and returns these",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "scmToEmbedding",
          "normalized": "DecoratedTree(Either a a)-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003e(Embedding a,Embedding a)",
          "package": "Operads",
          "partial": "To Embedding",
          "signature": "DecoratedTree(Either a a)-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003e(Embedding a,Embedding a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:scmToEmbedding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposition in the shuffle operad\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "shuffleCompose",
          "package": "Operads",
          "signature": "Int -\u003e Shuffle -\u003e DecoratedTree a -\u003e DecoratedTree a -\u003e DecoratedTree a",
          "source": "src/Math-Operad-OperadGB.html#shuffleCompose",
          "type": "function"
        },
        "index": {
          "description": "Composition in the shuffle operad",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "shuffleCompose",
          "normalized": "Int-\u003eShuffle-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003eDecoratedTree a",
          "package": "Operads",
          "partial": "Compose",
          "signature": "Int-\u003eShuffle-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003eDecoratedTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:shuffleCompose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShuffle composition in the g(s;t1,...,tk) style. \n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "shuffleComposeAll",
          "package": "Operads",
          "signature": "Shuffle -\u003e DecoratedTree a -\u003e [DecoratedTree a] -\u003e DecoratedTree a",
          "source": "src/Math-Operad-OperadGB.html#shuffleComposeAll",
          "type": "function"
        },
        "index": {
          "description": "Shuffle composition in the t1 tk style",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "shuffleComposeAll",
          "normalized": "Shuffle-\u003eDecoratedTree a-\u003e[DecoratedTree a]-\u003eDecoratedTree a",
          "package": "Operads",
          "partial": "Compose All",
          "signature": "Shuffle-\u003eDecoratedTree a-\u003e[DecoratedTree a]-\u003eDecoratedTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:shuffleComposeAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform one iteration of the Buchberger algorithm: generate all S-polynomials. Reduce all S-polynomials.\n Return anything that survived the reduction. Keep the occurring operation degrees bounded. \n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "stepInitialOperadicBuchberger",
          "package": "Operads",
          "signature": "Int -\u003e [OperadElement a n t] -\u003e [OperadElement a n t] -\u003e [OperadElement a n t]",
          "source": "src/Math-Operad-OperadGB.html#stepInitialOperadicBuchberger",
          "type": "function"
        },
        "index": {
          "description": "Perform one iteration of the Buchberger algorithm generate all S-polynomials Reduce all S-polynomials Return anything that survived the reduction Keep the occurring operation degrees bounded",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "stepInitialOperadicBuchberger",
          "normalized": "Int-\u003e[OperadElement a b c]-\u003e[OperadElement a b c]-\u003e[OperadElement a b c]",
          "package": "Operads",
          "partial": "Initial Operadic Buchberger",
          "signature": "Int-\u003e[OperadElement a n t]-\u003e[OperadElement a n t]-\u003e[OperadElement a n t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:stepInitialOperadicBuchberger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-symmetric version of \u003ccode\u003e\u003ca\u003estepInitialOperadicBuchberger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "stepNSInitialOperadicBuchberger",
          "package": "Operads",
          "signature": "Int -\u003e [OperadElement a n t] -\u003e [OperadElement a n t] -\u003e [OperadElement a n t]",
          "source": "src/Math-Operad-OperadGB.html#stepNSInitialOperadicBuchberger",
          "type": "function"
        },
        "index": {
          "description": "Non-symmetric version of stepInitialOperadicBuchberger",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "stepNSInitialOperadicBuchberger",
          "normalized": "Int-\u003e[OperadElement a b c]-\u003e[OperadElement a b c]-\u003e[OperadElement a b c]",
          "package": "Operads",
          "partial": "NSInitial Operadic Buchberger",
          "signature": "Int-\u003e[OperadElement a n t]-\u003e[OperadElement a n t]-\u003e[OperadElement a n t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:stepNSInitialOperadicBuchberger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "stepNSOperadicBuchberger",
          "package": "Operads",
          "signature": "[OperadElement a n t] -\u003e [OperadElement a n t] -\u003e [OperadElement a n t]",
          "source": "src/Math-Operad-OperadGB.html#stepNSOperadicBuchberger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "stepNSOperadicBuchberger",
          "normalized": "[OperadElement a b c]-\u003e[OperadElement a b c]-\u003e[OperadElement a b c]",
          "package": "Operads",
          "partial": "NSOperadic Buchberger",
          "signature": "[OperadElement a n t]-\u003e[OperadElement a n t]-\u003e[OperadElement a n t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:stepNSOperadicBuchberger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform one iteration of the Buchberger algorithm: generate all S-polynomials. Reduce all S-polynomials.\n Return anything that survived the reduction.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "stepOperadicBuchberger",
          "package": "Operads",
          "signature": "[OperadElement a n t] -\u003e [OperadElement a n t] -\u003e [OperadElement a n t]",
          "source": "src/Math-Operad-OperadGB.html#stepOperadicBuchberger",
          "type": "function"
        },
        "index": {
          "description": "Perform one iteration of the Buchberger algorithm generate all S-polynomials Reduce all S-polynomials Return anything that survived the reduction",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "stepOperadicBuchberger",
          "normalized": "[OperadElement a b c]-\u003e[OperadElement a b c]-\u003e[OperadElement a b c]",
          "package": "Operads",
          "partial": "Operadic Buchberger",
          "signature": "[OperadElement a n t]-\u003e[OperadElement a n t]-\u003e[OperadElement a n t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:stepOperadicBuchberger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-symmetric version of \u003ccode\u003e\u003ca\u003estreamOperadicBuchberger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "streamNSOperadicBuchberger",
          "package": "Operads",
          "signature": "Int -\u003e [OperadElement a n t] -\u003e [OperadElement a n t]",
          "source": "src/Math-Operad-OperadGB.html#streamNSOperadicBuchberger",
          "type": "function"
        },
        "index": {
          "description": "Non-symmetric version of streamOperadicBuchberger",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "streamNSOperadicBuchberger",
          "normalized": "Int-\u003e[OperadElement a b c]-\u003e[OperadElement a b c]",
          "package": "Operads",
          "partial": "NSOperadic Buchberger",
          "signature": "Int-\u003e[OperadElement a n t]-\u003e[OperadElement a n t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:streamNSOperadicBuchberger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform the entire Buchberger algorithm for a given list of generators. This iteratively runs single iterations\n from \u003ccode\u003e\u003ca\u003estepOperadicBuchberger\u003c/a\u003e\u003c/code\u003e until no new elements are generated.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "streamOperadicBuchberger",
          "package": "Operads",
          "signature": "Int -\u003e [OperadElement a n t] -\u003e [OperadElement a n t]",
          "source": "src/Math-Operad-OperadGB.html#streamOperadicBuchberger",
          "type": "function"
        },
        "index": {
          "description": "Perform the entire Buchberger algorithm for given list of generators This iteratively runs single iterations from stepOperadicBuchberger until no new elements are generated",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "streamOperadicBuchberger",
          "normalized": "Int-\u003e[OperadElement a b c]-\u003e[OperadElement a b c]",
          "package": "Operads",
          "partial": "Operadic Buchberger",
          "signature": "Int-\u003e[OperadElement a n t]-\u003e[OperadElement a n t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:streamOperadicBuchberger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProjects the type \u003ccode\u003eEither a a\u003c/code\u003e onto the type \u003ccode\u003ea\u003c/code\u003e in the obvious manner.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "stripEither",
          "package": "Operads",
          "signature": "Either a a -\u003e a",
          "source": "src/Math-Operad-OperadGB.html#stripEither",
          "type": "function"
        },
        "index": {
          "description": "Projects the type Either onto the type in the obvious manner",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "stripEither",
          "normalized": "Either a a-\u003ea",
          "package": "Operads",
          "partial": "Either",
          "signature": "Either a a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:stripEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrips the \u003ccode\u003eEither\u003c/code\u003e layer from internal vertex labels\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "stripTree",
          "package": "Operads",
          "signature": "DecoratedTree (Either a a) -\u003e DecoratedTree a",
          "source": "src/Math-Operad-OperadGB.html#stripTree",
          "type": "function"
        },
        "index": {
          "description": "Strips the Either layer from internal vertex labels",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "stripTree",
          "normalized": "DecoratedTree(Either a a)-\u003eDecoratedTree a",
          "package": "Operads",
          "partial": "Tree",
          "signature": "DecoratedTree(Either a a)-\u003eDecoratedTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:stripTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if any of the vertices in the given tree has been tagged.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "subTreeHasNothing",
          "package": "Operads",
          "signature": "DecoratedTree (Maybe a) -\u003e Bool",
          "source": "src/Math-Operad-OperadGB.html#subTreeHasNothing",
          "type": "function"
        },
        "index": {
          "description": "Returns True if any of the vertices in the given tree has been tagged",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "subTreeHasNothing",
          "normalized": "DecoratedTree(Maybe a)-\u003eBool",
          "package": "Operads",
          "partial": "Tree Has Nothing",
          "signature": "DecoratedTree(Maybe a)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:subTreeHasNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "subTrees",
          "package": "Operads",
          "signature": "[PreDecoratedTree a b]",
          "source": "src/Math-Operad-OrderedTree.html#PreDecoratedTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "subTrees",
          "normalized": "[PreDecoratedTree a b]",
          "package": "Operads",
          "partial": "Trees",
          "signature": "[PreDecoratedTree a b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:subTrees"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposition in the symmetric operad\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "symmetricCompose",
          "package": "Operads",
          "signature": "Int -\u003e Shuffle -\u003e DecoratedTree a -\u003e DecoratedTree a -\u003e DecoratedTree a",
          "source": "src/Math-Operad-OperadGB.html#symmetricCompose",
          "type": "function"
        },
        "index": {
          "description": "Composition in the symmetric operad",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "symmetricCompose",
          "normalized": "Int-\u003eShuffle-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003eDecoratedTree a",
          "package": "Operads",
          "partial": "Compose",
          "signature": "Int-\u003eShuffle-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003eDecoratedTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:symmetricCompose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSymmetric composition in the g(s;t1,...,tk) style. \n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "symmetricComposeAll",
          "package": "Operads",
          "signature": "Shuffle -\u003e DecoratedTree a -\u003e [DecoratedTree a] -\u003e DecoratedTree a",
          "source": "src/Math-Operad-OperadGB.html#symmetricComposeAll",
          "type": "function"
        },
        "index": {
          "description": "Symmetric composition in the t1 tk style",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "symmetricComposeAll",
          "normalized": "Shuffle-\u003eDecoratedTree a-\u003e[DecoratedTree a]-\u003eDecoratedTree a",
          "package": "Operads",
          "partial": "Compose All",
          "signature": "Shuffle-\u003eDecoratedTree a-\u003e[DecoratedTree a]-\u003eDecoratedTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:symmetricComposeAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds vertex type encapsulations. \n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "toJustTree",
          "package": "Operads",
          "signature": "DecoratedTree a -\u003e DecoratedTree (Maybe a)",
          "source": "src/Math-Operad-OperadGB.html#toJustTree",
          "type": "function"
        },
        "index": {
          "description": "Adds vertex type encapsulations",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "toJustTree",
          "normalized": "DecoratedTree a-\u003eDecoratedTree(Maybe a)",
          "package": "Operads",
          "partial": "Just Tree",
          "signature": "DecoratedTree a-\u003eDecoratedTree(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:toJustTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an operad element, extract a list of (tree, coefficient) pairs. \n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "toList",
          "package": "Operads",
          "signature": "OperadElement a n t -\u003e [(OrderedTree a t, n)]",
          "source": "src/Math-Operad-MapOperad.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Given an operad element extract list of tree coefficient pairs",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "toList",
          "normalized": "OperadElement a b c-\u003e[(OrderedTree a c,b)]",
          "package": "Operads",
          "partial": "List",
          "signature": "OperadElement a n t-\u003e[(OrderedTree a t,n)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "treeCompare",
          "package": "Operads",
          "signature": "t -\u003e DecoratedTree a -\u003e DecoratedTree a -\u003e Ordering",
          "source": "src/Math-Operad-OrderedTree.html#treeCompare",
          "type": "method"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "treeCompare",
          "normalized": "a-\u003eDecoratedTree b-\u003eDecoratedTree b-\u003eOrdering",
          "package": "Operads",
          "partial": "Compare",
          "signature": "t-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003eOrdering",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:treeCompare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe arity of a corolla\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "vertexArity",
          "package": "Operads",
          "signature": "PreDecoratedTree a b -\u003e Int",
          "source": "src/Math-Operad-OrderedTree.html#vertexArity",
          "type": "function"
        },
        "index": {
          "description": "The arity of corolla",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "vertexArity",
          "normalized": "PreDecoratedTree a b-\u003eInt",
          "package": "Operads",
          "partial": "Arity",
          "signature": "PreDecoratedTree a b-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:vertexArity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function \u003ccode\u003ef\u003c/code\u003e to all the internal vertex labels of a PreDecoratedTree.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "vertexMap",
          "package": "Operads",
          "signature": "(a -\u003e b) -\u003e PreDecoratedTree a c -\u003e PreDecoratedTree b c",
          "source": "src/Math-Operad-OrderedTree.html#vertexMap",
          "type": "function"
        },
        "index": {
          "description": "Apply function to all the internal vertex labels of PreDecoratedTree",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "vertexMap",
          "normalized": "(a-\u003eb)-\u003ePreDecoratedTree a c-\u003ePreDecoratedTree b c",
          "package": "Operads",
          "partial": "Map",
          "signature": "(a-\u003eb)-\u003ePreDecoratedTree a c-\u003ePreDecoratedTree b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:vertexMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.Operad",
          "name": "vertexType",
          "package": "Operads",
          "signature": "a",
          "source": "src/Math-Operad-OrderedTree.html#PreDecoratedTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "vertexType",
          "package": "Operads",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:vertexType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe element m2(m2(1,2),m2(3,4))\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "yTree",
          "package": "Operads",
          "signature": "DecoratedTree Integer",
          "source": "src/Math-Operad.html#yTree",
          "type": "function"
        },
        "index": {
          "description": "The element m2 m2 m2",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "yTree",
          "package": "Operads",
          "partial": "Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:yTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the zero of the corresponding operad, with type appropriate to the given element.\n Can be given an appropriately casted undefined to construct a zero.\n\u003c/p\u003e",
          "module": "Math.Operad",
          "name": "zero",
          "package": "Operads",
          "signature": "OperadElement a n t",
          "source": "src/Math-Operad-MapOperad.html#zero",
          "type": "function"
        },
        "index": {
          "description": "Return the zero of the corresponding operad with type appropriate to the given element Can be given an appropriately casted undefined to construct zero",
          "hierarchy": "Math Operad",
          "module": "Math.Operad",
          "name": "zero",
          "package": "Operads",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:zero"
      }
    }
  ]
]