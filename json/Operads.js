[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#",
      "description": {
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "module",
        "fct-source": "src/Math-Operad.html",
        "fct-type": "module",
        "title": "Operad"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "Operad",
        "normalized": "",
        "package": "Operads",
        "partial": "Operad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:DecoratedTree",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the fundamental datatype of the whole project. Monomials in a free operad\n are decorated trees, and we build a type for decorated trees here. We require our \n trees to have Int labels, limiting us to at most 2 147 483 647 leaf labels.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "type",
        "fct-source": "src/Math-Operad-OrderedTree.html#DecoratedTree",
        "fct-type": "type",
        "title": "DecoratedTree"
      },
      "index": {
        "description": "This is the fundamental datatype of the whole project Monomials in free operad are decorated trees and we build type for decorated trees here We require our trees to have Int labels limiting us to at most leaf labels",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "DecoratedTree",
        "normalized": "",
        "package": "Operads",
        "partial": "Decorated Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:Embedding",
      "description": {
        "fct-descr": "\u003cp\u003eData type to move the results of finding an embedding point for a subtree in a larger tree\n around. The tree is guaranteed to have exactly one corolla tagged Nothing, the subtrees on top of\n that corolla sorted by minimal covering leaf in the original setting, and the shuffle carried around\n is guaranteed to restore the original leaf labels before the search.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "type",
        "fct-source": "src/Math-Operad-OperadGB.html#Embedding",
        "fct-type": "type",
        "title": "Embedding"
      },
      "index": {
        "description": "Data type to move the results of finding an embedding point for subtree in larger tree around The tree is guaranteed to have exactly one corolla tagged Nothing the subtrees on top of that corolla sorted by minimal covering leaf in the original setting and the shuffle carried around is guaranteed to restore the original leaf labels before the search",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "Embedding",
        "normalized": "",
        "package": "Operads",
        "partial": "Embedding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:FreeOperad",
      "description": {
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "type",
        "fct-source": "src/Math-Operad.html#FreeOperad",
        "fct-type": "type",
        "title": "FreeOperad"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "FreeOperad",
        "normalized": "",
        "package": "Operads",
        "partial": "Free Operad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:MonomialMap",
      "description": {
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "type",
        "fct-source": "src/Math-Operad-MapOperad.html#MonomialMap",
        "fct-type": "type",
        "title": "MonomialMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "MonomialMap",
        "normalized": "",
        "package": "Operads",
        "partial": "Monomial Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:OperadElement",
      "description": {
        "fct-descr": "\u003cp\u003eThe type carrying operadic elements. An element in an operad is an associative array \n with keys being labeled trees and values being their coefficients. \n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "newtype",
        "fct-source": "src/Math-Operad-MapOperad.html#OperadElement",
        "fct-type": "newtype",
        "title": "OperadElement"
      },
      "index": {
        "description": "The type carrying operadic elements An element in an operad is an associative array with keys being labeled trees and values being their coefficients",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "OperadElement",
        "normalized": "",
        "package": "Operads",
        "partial": "Operad Element",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:OrderedTree",
      "description": {
        "fct-descr": "\u003cp\u003eMonomial orderings on the free operad requires us to choose an ordering for the\n trees. These are parametrized by types implementing the type class \u003ccode\u003e\u003ca\u003eTreeOrdering\u003c/a\u003e\u003c/code\u003e, \n and this is a data type for a tree carrying its comparison type. We call these \n \u003cem\u003eordered trees\u003c/em\u003e. \n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "data",
        "fct-source": "src/Math-Operad-OrderedTree.html#OrderedTree",
        "fct-type": "data",
        "title": "OrderedTree"
      },
      "index": {
        "description": "Monomial orderings on the free operad requires us to choose an ordering for the trees These are parametrized by types implementing the type class TreeOrdering and this is data type for tree carrying its comparison type We call these ordered trees",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "OrderedTree",
        "normalized": "",
        "package": "Operads",
        "partial": "Ordered Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:PPrint",
      "description": {
        "fct-descr": "\u003cp\u003eThis yields user interface functions for human readable printing of objects.\n The idea is to use \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instances for marshalling of data, and \u003ccode\u003e\u003ca\u003ePPrint\u003c/a\u003e\u003c/code\u003e for\n user interaction.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "class",
        "fct-source": "src/Math-Operad-PPrint.html#PPrint",
        "fct-type": "class",
        "title": "PPrint"
      },
      "index": {
        "description": "This yields user interface functions for human readable printing of objects The idea is to use Show instances for marshalling of data and PPrint for user interaction",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "PPrint",
        "normalized": "",
        "package": "Operads",
        "partial": "PPrint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:PathPerm",
      "description": {
        "fct-descr": "\u003cp\u003eUsing the path sequence, the leaf orders and order reversal, we can get 8 different orderings\n from one paradigm. These are given by \u003ccode\u003e\u003ca\u003ePathPerm\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eRPathPerm\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ePathRPerm\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eRPathRPerm\u003c/a\u003e\u003c/code\u003e for the \n variations giving (possibly reversed) path sequence comparison precedence over (possibly reversed)\n leaf permutations; additionally, there are \u003ccode\u003e\u003ca\u003ePermPath\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eRPermPath\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ePermRPath\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eRPermRPath\u003c/a\u003e\u003c/code\u003e\n for the variations with the opposite precedence.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "data",
        "fct-source": "src/Math-Operad-OrderedTree.html#PathPerm",
        "fct-type": "data",
        "title": "PathPerm"
      },
      "index": {
        "description": "Using the path sequence the leaf orders and order reversal we can get different orderings from one paradigm These are given by PathPerm RPathPerm PathRPerm RPathRPerm for the variations giving possibly reversed path sequence comparison precedence over possibly reversed leaf permutations additionally there are PermPath RPermPath PermRPath and RPermRPath for the variations with the opposite precedence",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "PathPerm",
        "normalized": "",
        "package": "Operads",
        "partial": "Path Perm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:PathRPerm",
      "description": {
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "data",
        "fct-source": "src/Math-Operad-OrderedTree.html#PathRPerm",
        "fct-type": "data",
        "title": "PathRPerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "PathRPerm",
        "normalized": "",
        "package": "Operads",
        "partial": "Path RPerm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:PermPath",
      "description": {
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "data",
        "fct-source": "src/Math-Operad-OrderedTree.html#PermPath",
        "fct-type": "data",
        "title": "PermPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "PermPath",
        "normalized": "",
        "package": "Operads",
        "partial": "Perm Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:PermRPath",
      "description": {
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "data",
        "fct-source": "src/Math-Operad-OrderedTree.html#PermRPath",
        "fct-type": "data",
        "title": "PermRPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "PermRPath",
        "normalized": "",
        "package": "Operads",
        "partial": "Perm RPath",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:PreDecoratedTree",
      "description": {
        "fct-descr": "\u003cp\u003eThe fundamental tree data type used. Leaves carry labels - most often integral -\n and these are expected to control, e.g., composition points in shuffle operad compositions.\n The vertices carry labels, used for the ordering on trees and to distinguish different\n basis corollas of the same arity. \n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "data",
        "fct-source": "src/Math-Operad-OrderedTree.html#PreDecoratedTree",
        "fct-type": "data",
        "title": "PreDecoratedTree"
      },
      "index": {
        "description": "The fundamental tree data type used Leaves carry labels most often integral and these are expected to control e.g composition points in shuffle operad compositions The vertices carry labels used for the ordering on trees and to distinguish different basis corollas of the same arity",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "PreDecoratedTree",
        "normalized": "",
        "package": "Operads",
        "partial": "Pre Decorated Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:RPathPerm",
      "description": {
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "data",
        "fct-source": "src/Math-Operad-OrderedTree.html#RPathPerm",
        "fct-type": "data",
        "title": "RPathPerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "RPathPerm",
        "normalized": "",
        "package": "Operads",
        "partial": "RPath Perm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:RPathRPerm",
      "description": {
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "data",
        "fct-source": "src/Math-Operad-OrderedTree.html#RPathRPerm",
        "fct-type": "data",
        "title": "RPathRPerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "RPathRPerm",
        "normalized": "",
        "package": "Operads",
        "partial": "RPath RPerm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:RPermPath",
      "description": {
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "data",
        "fct-source": "src/Math-Operad-OrderedTree.html#RPermPath",
        "fct-type": "data",
        "title": "RPermPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "RPermPath",
        "normalized": "",
        "package": "Operads",
        "partial": "RPerm Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:RPermRPath",
      "description": {
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "data",
        "fct-source": "src/Math-Operad-OrderedTree.html#RPermRPath",
        "fct-type": "data",
        "title": "RPermRPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "RPermRPath",
        "normalized": "",
        "package": "Operads",
        "partial": "RPerm RPath",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:Shuffle",
      "description": {
        "fct-descr": "\u003cp\u003eA shuffle is a special kind of sequence of integers.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "type",
        "fct-source": "src/Math-Operad-OrderedTree.html#Shuffle",
        "fct-type": "type",
        "title": "Shuffle"
      },
      "index": {
        "description": "shuffle is special kind of sequence of integers",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "Shuffle",
        "normalized": "",
        "package": "Operads",
        "partial": "Shuffle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:Tree",
      "description": {
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "type",
        "fct-source": "src/Math-Operad.html#Tree",
        "fct-type": "type",
        "title": "Tree"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "Tree",
        "normalized": "",
        "package": "Operads",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#t:TreeOrdering",
      "description": {
        "fct-descr": "\u003cp\u003eThe type class that parametrizes types implementing tree orderings.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "class",
        "fct-source": "src/Math-Operad-OrderedTree.html#TreeOrdering",
        "fct-type": "class",
        "title": "TreeOrdering"
      },
      "index": {
        "description": "The type class that parametrizes types implementing tree orderings",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "TreeOrdering",
        "normalized": "",
        "package": "Operads",
        "partial": "Tree Ordering",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:.-42-.",
      "description": {
        "fct-descr": "\u003cp\u003eScalar multiplication in the operad.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "n -\u003e OperadElement a n t -\u003e OperadElement a n t",
        "fct-source": "src/Math-Operad-MapOperad.html#.%2A.",
        "fct-type": "function",
        "title": "(.*.)"
      },
      "index": {
        "description": "Scalar multiplication in the operad",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "(.*.) .*.",
        "normalized": "a-\u003eOperadElement b a c-\u003eOperadElement b a c",
        "package": "Operads",
        "partial": "",
        "signature": "n-\u003eOperadElement a n t-\u003eOperadElement a n t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:DTLeaf",
      "description": {
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DTLeaf !b",
        "fct-source": "src/Math-Operad-OrderedTree.html#PreDecoratedTree",
        "fct-type": "function",
        "title": "DTLeaf"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "DTLeaf",
        "normalized": "",
        "package": "Operads",
        "partial": "DTLeaf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:DTVertex",
      "description": {
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DTVertex",
        "fct-source": "src/Math-Operad-OrderedTree.html#PreDecoratedTree",
        "fct-type": "function",
        "title": "DTVertex"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "DTVertex",
        "normalized": "",
        "package": "Operads",
        "partial": "DTVertex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:OE",
      "description": {
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "OE (MonomialMap a t n)",
        "fct-source": "src/Math-Operad-MapOperad.html#OperadElement",
        "fct-type": "function",
        "title": "OE"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "OE",
        "normalized": "",
        "package": "Operads",
        "partial": "OE",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:OT",
      "description": {
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "OT (DecoratedTree a) t",
        "fct-source": "src/Math-Operad-OrderedTree.html#OrderedTree",
        "fct-type": "function",
        "title": "OT"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "OT",
        "normalized": "",
        "package": "Operads",
        "partial": "OT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:PathPerm",
      "description": {
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "PathPerm",
        "fct-source": "src/Math-Operad-OrderedTree.html#PathPerm",
        "fct-type": "function",
        "title": "PathPerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "PathPerm",
        "normalized": "",
        "package": "Operads",
        "partial": "Path Perm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:PathRPerm",
      "description": {
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "PathRPerm",
        "fct-source": "src/Math-Operad-OrderedTree.html#PathRPerm",
        "fct-type": "function",
        "title": "PathRPerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "PathRPerm",
        "normalized": "",
        "package": "Operads",
        "partial": "Path RPerm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:PermPath",
      "description": {
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "PermPath",
        "fct-source": "src/Math-Operad-OrderedTree.html#PermPath",
        "fct-type": "function",
        "title": "PermPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "PermPath",
        "normalized": "",
        "package": "Operads",
        "partial": "Perm Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:PermRPath",
      "description": {
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "PermRPath",
        "fct-source": "src/Math-Operad-OrderedTree.html#PermRPath",
        "fct-type": "function",
        "title": "PermRPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "PermRPath",
        "normalized": "",
        "package": "Operads",
        "partial": "Perm RPath",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:RPathPerm",
      "description": {
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "RPathPerm",
        "fct-source": "src/Math-Operad-OrderedTree.html#RPathPerm",
        "fct-type": "function",
        "title": "RPathPerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "RPathPerm",
        "normalized": "",
        "package": "Operads",
        "partial": "RPath Perm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:RPathRPerm",
      "description": {
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "RPathRPerm",
        "fct-source": "src/Math-Operad-OrderedTree.html#RPathRPerm",
        "fct-type": "function",
        "title": "RPathRPerm"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "RPathRPerm",
        "normalized": "",
        "package": "Operads",
        "partial": "RPath RPerm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:RPermPath",
      "description": {
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "RPermPath",
        "fct-source": "src/Math-Operad-OrderedTree.html#RPermPath",
        "fct-type": "function",
        "title": "RPermPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "RPermPath",
        "normalized": "",
        "package": "Operads",
        "partial": "RPerm Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:RPermRPath",
      "description": {
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "RPermRPath",
        "fct-source": "src/Math-Operad-OrderedTree.html#RPermRPath",
        "fct-type": "function",
        "title": "RPermRPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "RPermRPath",
        "normalized": "",
        "package": "Operads",
        "partial": "RPerm RPath",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:allShPerm",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates shuffle permutations by filling buckets.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Int -\u003e [Int] -\u003e [[[Int]]]",
        "fct-source": "src/Math-Operad-OrderedTree.html#allShPerm",
        "fct-type": "function",
        "title": "allShPerm"
      },
      "index": {
        "description": "Generates shuffle permutations by filling buckets",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "allShPerm",
        "normalized": "Int-\u003e[Int]-\u003e[[[Int]]]",
        "package": "Operads",
        "partial": "Sh Perm",
        "signature": "Int-\u003e[Int]-\u003e[[[Int]]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:allShuffles",
      "description": {
        "fct-descr": "\u003cp\u003eGenerates all shuffles from Sh_i(p,q). \n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Int -\u003e Int -\u003e Int -\u003e [Shuffle]",
        "fct-source": "src/Math-Operad-OrderedTree.html#allShuffles",
        "fct-type": "function",
        "title": "allShuffles"
      },
      "index": {
        "description": "Generates all shuffles from Sh",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "allShuffles",
        "normalized": "Int-\u003eInt-\u003eInt-\u003e[Shuffle]",
        "package": "Operads",
        "partial": "Shuffles",
        "signature": "Int-\u003eInt-\u003eInt-\u003e[Shuffle]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:allTrees",
      "description": {
        "fct-descr": "\u003cp\u003eAll trees composed from the given generators of operation degree n.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "[DecoratedTree a] -\u003e Int -\u003e [DecoratedTree a]",
        "fct-source": "src/Math-Operad-OperadGB.html#allTrees",
        "fct-type": "function",
        "title": "allTrees"
      },
      "index": {
        "description": "All trees composed from the given generators of operation degree",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "allTrees",
        "normalized": "[DecoratedTree a]-\u003eInt-\u003e[DecoratedTree a]",
        "package": "Operads",
        "partial": "Trees",
        "signature": "[DecoratedTree a]-\u003eInt-\u003e[DecoratedTree a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:applyAt",
      "description": {
        "fct-descr": "\u003cp\u003eApplies \u003ccode\u003ef\u003c/code\u003e only at the \u003ccode\u003en\u003c/code\u003eth place in a list.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "(a -\u003e a) -\u003e Int -\u003e [a] -\u003e [a]",
        "fct-source": "src/Math-Operad-OrderedTree.html#applyAt",
        "fct-type": "function",
        "title": "applyAt"
      },
      "index": {
        "description": "Applies only at the th place in list",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "applyAt",
        "normalized": "(a-\u003ea)-\u003eInt-\u003e[a]-\u003e[a]",
        "package": "Operads",
        "partial": "At",
        "signature": "(a-\u003ea)-\u003eInt-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:applyPerm",
      "description": {
        "fct-descr": "\u003cp\u003eThis applies the resulting permutation from a shuffle to a set of elements\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Shuffle -\u003e [a] -\u003e [a]",
        "fct-source": "src/Math-Operad-OrderedTree.html#applyPerm",
        "fct-type": "function",
        "title": "applyPerm"
      },
      "index": {
        "description": "This applies the resulting permutation from shuffle to set of elements",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "applyPerm",
        "normalized": "Shuffle-\u003e[a]-\u003e[a]",
        "package": "Operads",
        "partial": "Perm",
        "signature": "Shuffle-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:applyReconstruction",
      "description": {
        "fct-descr": "\u003cp\u003eApplies the reconstruction map represented by em to all trees in the operad element op. Any operad element that \n fails the reconstruction (by having the wrong total arity, for instance) will be silently dropped. We recommend\n you apply this function only to homogenous operad elements, but will not make that check.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Embedding a -\u003e OperadElement a n t -\u003e OperadElement a n t",
        "fct-source": "src/Math-Operad-OperadGB.html#applyReconstruction",
        "fct-type": "function",
        "title": "applyReconstruction"
      },
      "index": {
        "description": "Applies the reconstruction map represented by em to all trees in the operad element op Any operad element that fails the reconstruction by having the wrong total arity for instance will be silently dropped We recommend you apply this function only to homogenous operad elements but will not make that check",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "applyReconstruction",
        "normalized": "Embedding a-\u003eOperadElement a b c-\u003eOperadElement a b c",
        "package": "Operads",
        "partial": "Reconstruction",
        "signature": "Embedding a-\u003eOperadElement a n t-\u003eOperadElement a n t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:arityDegree",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003earityDegree\u003c/a\u003e\u003c/code\u003e is one less than \u003ccode\u003e\u003ca\u003enLeaves\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree a -\u003e Int",
        "fct-source": "src/Math-Operad-OrderedTree.html#arityDegree",
        "fct-type": "function",
        "title": "arityDegree"
      },
      "index": {
        "description": "arityDegree is one less than nLeaves",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "arityDegree",
        "normalized": "DecoratedTree a-\u003eInt",
        "package": "Operads",
        "partial": "Degree",
        "signature": "DecoratedTree a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:basisElements",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate basis trees for a given Groebner basis for degree \u003ccode\u003emaxDegree\u003c/code\u003e. \u003ccode\u003edivisors\u003c/code\u003e is expected\n to contain the leading monomials in the Groebner basis.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "[DecoratedTree a] -\u003e [DecoratedTree a] -\u003e Int -\u003e [DecoratedTree a]",
        "fct-source": "src/Math-Operad-OperadGB.html#basisElements",
        "fct-type": "function",
        "title": "basisElements"
      },
      "index": {
        "description": "Generate basis trees for given Groebner basis for degree maxDegree divisors is expected to contain the leading monomials in the Groebner basis",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "basisElements",
        "normalized": "[DecoratedTree a]-\u003e[DecoratedTree a]-\u003eInt-\u003e[DecoratedTree a]",
        "package": "Operads",
        "partial": "Elements",
        "signature": "[DecoratedTree a]-\u003e[DecoratedTree a]-\u003eInt-\u003e[DecoratedTree a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:changeOrder",
      "description": {
        "fct-descr": "\u003cp\u003eChange the monomial order used for a specific tree. Use this in conjunction with mapMonomials\n in order to change monomial order for an entire operad element. \n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "t -\u003e OrderedTree a s -\u003e OrderedTree a t",
        "fct-source": "src/Math-Operad-OperadGB.html#changeOrder",
        "fct-type": "function",
        "title": "changeOrder"
      },
      "index": {
        "description": "Change the monomial order used for specific tree Use this in conjunction with mapMonomials in order to change monomial order for an entire operad element",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "changeOrder",
        "normalized": "a-\u003eOrderedTree b c-\u003eOrderedTree b a",
        "package": "Operads",
        "partial": "Order",
        "signature": "t-\u003eOrderedTree a s-\u003eOrderedTree a t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:checkShuffleAll",
      "description": {
        "fct-descr": "\u003cp\u003eVerification for a shuffle used for the g(s;t1,..,tk) style composition in the shuffle operad.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Shuffle -\u003e [Int] -\u003e Bool",
        "fct-source": "src/Math-Operad-OperadGB.html#checkShuffleAll",
        "fct-type": "function",
        "title": "checkShuffleAll"
      },
      "index": {
        "description": "Verification for shuffle used for the t1 tk style composition in the shuffle operad",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "checkShuffleAll",
        "normalized": "Shuffle-\u003e[Int]-\u003eBool",
        "package": "Operads",
        "partial": "Shuffle All",
        "signature": "Shuffle-\u003e[Int]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:comparePathSequence",
      "description": {
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "t -\u003e DecoratedTree a -\u003e ([[a]], Shuffle) -\u003e DecoratedTree a -\u003e ([[a]], Shuffle) -\u003e Ordering",
        "fct-source": "src/Math-Operad-OrderedTree.html#comparePathSequence",
        "fct-type": "method",
        "title": "comparePathSequence"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "comparePathSequence",
        "normalized": "a-\u003eDecoratedTree b-\u003e([[b]],Shuffle)-\u003eDecoratedTree b-\u003e([[b]],Shuffle)-\u003eOrdering",
        "package": "Operads",
        "partial": "Path Sequence",
        "signature": "t-\u003eDecoratedTree a-\u003e([[a]],Shuffle)-\u003eDecoratedTree a-\u003e([[a]],Shuffle)-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:corolla",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a single corolla in a decorated tree. Takes a list for labels for the leaves, and derives\n the arity of the corolla from those. This, and the composition functions, form the preferred method\n to construct trees.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "a -\u003e [Int] -\u003e DecoratedTree a",
        "fct-source": "src/Math-Operad-OrderedTree.html#corolla",
        "fct-type": "function",
        "title": "corolla"
      },
      "index": {
        "description": "Build single corolla in decorated tree Takes list for labels for the leaves and derives the arity of the corolla from those This and the composition functions form the preferred method to construct trees",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "corolla",
        "normalized": "a-\u003e[Int]-\u003eDecoratedTree a",
        "package": "Operads",
        "partial": "",
        "signature": "a-\u003e[Int]-\u003eDecoratedTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:divides",
      "description": {
        "fct-descr": "\u003cp\u003eReturns True if there is a subtree of \u003ccode\u003et\u003c/code\u003e isomorphic to \u003ccode\u003es\u003c/code\u003e, respecting leaf orders. \n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree a -\u003e DecoratedTree a -\u003e Bool",
        "fct-source": "src/Math-Operad-OperadGB.html#divides",
        "fct-type": "function",
        "title": "divides"
      },
      "index": {
        "description": "Returns True if there is subtree of isomorphic to respecting leaf orders",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "divides",
        "normalized": "DecoratedTree a-\u003eDecoratedTree a-\u003eBool",
        "package": "Operads",
        "partial": "",
        "signature": "DecoratedTree a-\u003eDecoratedTree a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:dividesDifferent",
      "description": {
        "fct-descr": "\u003cp\u003eReturns True if s and t divide u, with different embeddings and t sharing root with u.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree a -\u003e DecoratedTree a -\u003e DecoratedTree a -\u003e Bool",
        "fct-source": "src/Math-Operad-OperadGB.html#dividesDifferent",
        "fct-type": "function",
        "title": "dividesDifferent"
      },
      "index": {
        "description": "Returns True if and divide with different embeddings and sharing root with",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "dividesDifferent",
        "normalized": "DecoratedTree a-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003eBool",
        "package": "Operads",
        "partial": "Different",
        "signature": "DecoratedTree a-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:dividesHigh",
      "description": {
        "fct-descr": "\u003cp\u003eReturns True if there is a subtree of \u003ccode\u003et\u003c/code\u003e isomorphic to \u003ccode\u003es\u003c/code\u003e, respecting leaf orders, and not located at the root.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree a -\u003e DecoratedTree a -\u003e Bool",
        "fct-source": "src/Math-Operad-OperadGB.html#dividesHigh",
        "fct-type": "function",
        "title": "dividesHigh"
      },
      "index": {
        "description": "Returns True if there is subtree of isomorphic to respecting leaf orders and not located at the root",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "dividesHigh",
        "normalized": "DecoratedTree a-\u003eDecoratedTree a-\u003eBool",
        "package": "Operads",
        "partial": "High",
        "signature": "DecoratedTree a-\u003eDecoratedTree a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:dividesRooted",
      "description": {
        "fct-descr": "\u003cp\u003eReturns True if there is a rooted subtree of \u003ccode\u003et\u003c/code\u003e isomorphic to \u003ccode\u003es\u003c/code\u003e, respecting leaf orders.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree a -\u003e DecoratedTree a -\u003e Bool",
        "fct-source": "src/Math-Operad-OperadGB.html#dividesRooted",
        "fct-type": "function",
        "title": "dividesRooted"
      },
      "index": {
        "description": "Returns True if there is rooted subtree of isomorphic to respecting leaf orders",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "dividesRooted",
        "normalized": "DecoratedTree a-\u003eDecoratedTree a-\u003eBool",
        "package": "Operads",
        "partial": "Rooted",
        "signature": "DecoratedTree a-\u003eDecoratedTree a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:dt",
      "description": {
        "fct-descr": "\u003cp\u003eExtracting the underlying tree from an ordered tree.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "OrderedTree a t -\u003e DecoratedTree a",
        "fct-source": "src/Math-Operad-OrderedTree.html#dt",
        "fct-type": "function",
        "title": "dt"
      },
      "index": {
        "description": "Extracting the underlying tree from an ordered tree",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "dt",
        "normalized": "OrderedTree a b-\u003eDecoratedTree a",
        "package": "Operads",
        "partial": "",
        "signature": "OrderedTree a t-\u003eDecoratedTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:equivalentOrders",
      "description": {
        "fct-descr": "\u003cp\u003eVerifies that two integer sequences correspond to the same total ordering of the entries.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "[Int] -\u003e [Int] -\u003e Bool",
        "fct-source": "src/Math-Operad-OperadGB.html#equivalentOrders",
        "fct-type": "function",
        "title": "equivalentOrders"
      },
      "index": {
        "description": "Verifies that two integer sequences correspond to the same total ordering of the entries",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "equivalentOrders",
        "normalized": "[Int]-\u003e[Int]-\u003eBool",
        "package": "Operads",
        "partial": "Orders",
        "signature": "[Int]-\u003e[Int]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:extractMap",
      "description": {
        "fct-descr": "\u003cp\u003eExtracting the internal structure of the an element of the free operad.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "OperadElement a n t -\u003e MonomialMap a t n",
        "fct-source": "src/Math-Operad-MapOperad.html#extractMap",
        "fct-type": "function",
        "title": "extractMap"
      },
      "index": {
        "description": "Extracting the internal structure of the an element of the free operad",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "extractMap",
        "normalized": "OperadElement a b c-\u003eMonomialMap a c b",
        "package": "Operads",
        "partial": "Map",
        "signature": "OperadElement a n t-\u003eMonomialMap a t n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:findAllBoundedSCM",
      "description": {
        "fct-descr": "\u003cp\u003eFinds all small common multiples of two trees, bounding the internal operation degree.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Int -\u003e DecoratedTree a -\u003e DecoratedTree a -\u003e [DecoratedTree (Either a a)]",
        "fct-source": "src/Math-Operad-OperadGB.html#findAllBoundedSCM",
        "fct-type": "function",
        "title": "findAllBoundedSCM"
      },
      "index": {
        "description": "Finds all small common multiples of two trees bounding the internal operation degree",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "findAllBoundedSCM",
        "normalized": "Int-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003e[DecoratedTree(Either a a)]",
        "package": "Operads",
        "partial": "All Bounded SCM",
        "signature": "Int-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003e[DecoratedTree(Either a a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:findAllEmbeddings",
      "description": {
        "fct-descr": "\u003cp\u003eFinds all ways to embed s into t respecting leaf orders.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree a -\u003e DecoratedTree a -\u003e [Embedding a]",
        "fct-source": "src/Math-Operad-OperadGB.html#findAllEmbeddings",
        "fct-type": "function",
        "title": "findAllEmbeddings"
      },
      "index": {
        "description": "Finds all ways to embed into respecting leaf orders",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "findAllEmbeddings",
        "normalized": "DecoratedTree a-\u003eDecoratedTree a-\u003e[Embedding a]",
        "package": "Operads",
        "partial": "All Embeddings",
        "signature": "DecoratedTree a-\u003eDecoratedTree a-\u003e[Embedding a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:findAllSCM",
      "description": {
        "fct-descr": "\u003cp\u003eFinds all small common multiples of two trees.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree a -\u003e DecoratedTree a -\u003e [DecoratedTree (Either a a)]",
        "fct-source": "src/Math-Operad-OperadGB.html#findAllSCM",
        "fct-type": "function",
        "title": "findAllSCM"
      },
      "index": {
        "description": "Finds all small common multiples of two trees",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "findAllSCM",
        "normalized": "DecoratedTree a-\u003eDecoratedTree a-\u003e[DecoratedTree(Either a a)]",
        "package": "Operads",
        "partial": "All SCM",
        "signature": "DecoratedTree a-\u003eDecoratedTree a-\u003e[DecoratedTree(Either a a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:findAllSPolynomials",
      "description": {
        "fct-descr": "\u003cp\u003eFinds all S polynomials for a given list of operad elements. \n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "[OperadElement a n t] -\u003e [OperadElement a n t] -\u003e [OperadElement a n t]",
        "fct-source": "src/Math-Operad-OperadGB.html#findAllSPolynomials",
        "fct-type": "function",
        "title": "findAllSPolynomials"
      },
      "index": {
        "description": "Finds all polynomials for given list of operad elements",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "findAllSPolynomials",
        "normalized": "[OperadElement a b c]-\u003e[OperadElement a b c]-\u003e[OperadElement a b c]",
        "package": "Operads",
        "partial": "All SPolynomials",
        "signature": "[OperadElement a n t]-\u003e[OperadElement a n t]-\u003e[OperadElement a n t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:findBoundedSCM",
      "description": {
        "fct-descr": "\u003cp\u003eFinds small common multiples of two trees bounding internal operation degree.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Int -\u003e DecoratedTree a -\u003e DecoratedTree a -\u003e [DecoratedTree (Either a a)]",
        "fct-source": "src/Math-Operad-OperadGB.html#findBoundedSCM",
        "fct-type": "function",
        "title": "findBoundedSCM"
      },
      "index": {
        "description": "Finds small common multiples of two trees bounding internal operation degree",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "findBoundedSCM",
        "normalized": "Int-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003e[DecoratedTree(Either a a)]",
        "package": "Operads",
        "partial": "Bounded SCM",
        "signature": "Int-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003e[DecoratedTree(Either a a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:findFirstRight",
      "description": {
        "fct-descr": "\u003cp\u003eLocates the first vertex tagged with a \u003ccode\u003eRight\u003c/code\u003e constructor in a tree labeled with \u003ccode\u003eEither a b\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree (Either a b) -\u003e Maybe (DecoratedTree (Either a b))",
        "fct-source": "src/Math-Operad-OperadGB.html#findFirstRight",
        "fct-type": "function",
        "title": "findFirstRight"
      },
      "index": {
        "description": "Locates the first vertex tagged with Right constructor in tree labeled with Either",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "findFirstRight",
        "normalized": "DecoratedTree(Either a b)-\u003eMaybe(DecoratedTree(Either a b))",
        "package": "Operads",
        "partial": "First Right",
        "signature": "DecoratedTree(Either a b)-\u003eMaybe(DecoratedTree(Either a b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:findInitialSPolynomials",
      "description": {
        "fct-descr": "\u003cp\u003eFinds all S polynomials for which the operationdegree stays bounded.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Int -\u003e [OperadElement a n t] -\u003e [OperadElement a n t] -\u003e [OperadElement a n t]",
        "fct-source": "src/Math-Operad-OperadGB.html#findInitialSPolynomials",
        "fct-type": "function",
        "title": "findInitialSPolynomials"
      },
      "index": {
        "description": "Finds all polynomials for which the operationdegree stays bounded",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "findInitialSPolynomials",
        "normalized": "Int-\u003e[OperadElement a b c]-\u003e[OperadElement a b c]-\u003e[OperadElement a b c]",
        "package": "Operads",
        "partial": "Initial SPolynomials",
        "signature": "Int-\u003e[OperadElement a n t]-\u003e[OperadElement a n t]-\u003e[OperadElement a n t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:findNSInitialSPolynomials",
      "description": {
        "fct-descr": "\u003cp\u003eNon-symmetric version of \u003ccode\u003e\u003ca\u003efindInitialSPolynomials\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Int -\u003e [OperadElement a n t] -\u003e [OperadElement a n t] -\u003e [OperadElement a n t]",
        "fct-source": "src/Math-Operad-OperadGB.html#findNSInitialSPolynomials",
        "fct-type": "function",
        "title": "findNSInitialSPolynomials"
      },
      "index": {
        "description": "Non-symmetric version of findInitialSPolynomials",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "findNSInitialSPolynomials",
        "normalized": "Int-\u003e[OperadElement a b c]-\u003e[OperadElement a b c]-\u003e[OperadElement a b c]",
        "package": "Operads",
        "partial": "NSInitial SPolynomials",
        "signature": "Int-\u003e[OperadElement a n t]-\u003e[OperadElement a n t]-\u003e[OperadElement a n t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:findNSSPolynomials",
      "description": {
        "fct-descr": "\u003cp\u003eNon-symmetric version of \u003ccode\u003e\u003ca\u003efindSPolynomials\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Int -\u003e OperadElement a n t -\u003e OperadElement a n t -\u003e [OperadElement a n t]",
        "fct-source": "src/Math-Operad-OperadGB.html#findNSSPolynomials",
        "fct-type": "function",
        "title": "findNSSPolynomials"
      },
      "index": {
        "description": "Non-symmetric version of findSPolynomials",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "findNSSPolynomials",
        "normalized": "Int-\u003eOperadElement a b c-\u003eOperadElement a b c-\u003e[OperadElement a b c]",
        "package": "Operads",
        "partial": "NSSPolynomials",
        "signature": "Int-\u003eOperadElement a n t-\u003eOperadElement a n t-\u003e[OperadElement a n t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:findNonSymmetricSCM",
      "description": {
        "fct-descr": "\u003cp\u003eFinds structural small common multiples, disregarding leaf labels completely.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Int -\u003e DecoratedTree (Either a a) -\u003e DecoratedTree (Either a a) -\u003e [DecoratedTree (Either a a)]",
        "fct-source": "src/Math-Operad-OperadGB.html#findNonSymmetricSCM",
        "fct-type": "function",
        "title": "findNonSymmetricSCM"
      },
      "index": {
        "description": "Finds structural small common multiples disregarding leaf labels completely",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "findNonSymmetricSCM",
        "normalized": "Int-\u003eDecoratedTree(Either a a)-\u003eDecoratedTree(Either a a)-\u003e[DecoratedTree(Either a a)]",
        "package": "Operads",
        "partial": "Non Symmetric SCM",
        "signature": "Int-\u003eDecoratedTree(Either a a)-\u003eDecoratedTree(Either a a)-\u003e[DecoratedTree(Either a a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:findRootedEmbedding",
      "description": {
        "fct-descr": "\u003cp\u003eFinds all ways to embed s into t, respecting leaf orders and mapping the root of s to the root of t.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree a -\u003e DecoratedTree a -\u003e Maybe (Embedding a)",
        "fct-source": "src/Math-Operad-OperadGB.html#findRootedEmbedding",
        "fct-type": "function",
        "title": "findRootedEmbedding"
      },
      "index": {
        "description": "Finds all ways to embed into respecting leaf orders and mapping the root of to the root of",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "findRootedEmbedding",
        "normalized": "DecoratedTree a-\u003eDecoratedTree a-\u003eMaybe(Embedding a)",
        "package": "Operads",
        "partial": "Rooted Embedding",
        "signature": "DecoratedTree a-\u003eDecoratedTree a-\u003eMaybe(Embedding a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:findRootedSCM",
      "description": {
        "fct-descr": "\u003cp\u003eFinds rooted small common multiples of two trees.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree a -\u003e DecoratedTree a -\u003e Maybe (DecoratedTree a)",
        "fct-source": "src/Math-Operad-OperadGB.html#findRootedSCM",
        "fct-type": "function",
        "title": "findRootedSCM"
      },
      "index": {
        "description": "Finds rooted small common multiples of two trees",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "findRootedSCM",
        "normalized": "DecoratedTree a-\u003eDecoratedTree a-\u003eMaybe(DecoratedTree a)",
        "package": "Operads",
        "partial": "Rooted SCM",
        "signature": "DecoratedTree a-\u003eDecoratedTree a-\u003eMaybe(DecoratedTree a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:findSPolynomials",
      "description": {
        "fct-descr": "\u003cp\u003eFinds all S polynomials for a given pair of operad elements, keeping a bound on operation degree.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Int -\u003e OperadElement a n t -\u003e OperadElement a n t -\u003e [OperadElement a n t]",
        "fct-source": "src/Math-Operad-OperadGB.html#findSPolynomials",
        "fct-type": "function",
        "title": "findSPolynomials"
      },
      "index": {
        "description": "Finds all polynomials for given pair of operad elements keeping bound on operation degree",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "findSPolynomials",
        "normalized": "Int-\u003eOperadElement a b c-\u003eOperadElement a b c-\u003e[OperadElement a b c]",
        "package": "Operads",
        "partial": "SPolynomials",
        "signature": "Int-\u003eOperadElement a n t-\u003eOperadElement a n t-\u003e[OperadElement a n t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:findUnsortedRootedEmbedding",
      "description": {
        "fct-descr": "\u003cp\u003eHelper function for \u003ccode\u003e\u003ca\u003efindRootedEmbedding\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree a -\u003e DecoratedTree a -\u003e Maybe (Embedding a)",
        "fct-source": "src/Math-Operad-OperadGB.html#findUnsortedRootedEmbedding",
        "fct-type": "function",
        "title": "findUnsortedRootedEmbedding"
      },
      "index": {
        "description": "Helper function for findRootedEmbedding",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "findUnsortedRootedEmbedding",
        "normalized": "DecoratedTree a-\u003eDecoratedTree a-\u003eMaybe(Embedding a)",
        "package": "Operads",
        "partial": "Unsorted Rooted Embedding",
        "signature": "DecoratedTree a-\u003eDecoratedTree a-\u003eMaybe(Embedding a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:flipEither",
      "description": {
        "fct-descr": "\u003cp\u003eInterchanges \u003ccode\u003eLeft\u003c/code\u003e to \u003ccode\u003eRight\u003c/code\u003e and \u003ccode\u003eRight\u003c/code\u003e to \u003ccode\u003eLeft\u003c/code\u003e for types \u003ccode\u003eEither a a\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Either a a -\u003e Either a a",
        "fct-source": "src/Math-Operad-OperadGB.html#flipEither",
        "fct-type": "function",
        "title": "flipEither"
      },
      "index": {
        "description": "Interchanges Left to Right and Right to Left for types Either",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "flipEither",
        "normalized": "Either a a-\u003eEither a a",
        "package": "Operads",
        "partial": "Either",
        "signature": "Either a a-\u003eEither a a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:flipEitherRoot",
      "description": {
        "fct-descr": "\u003cp\u003eApplies \u003ccode\u003eflipEither\u003c/code\u003e to the root vertex label of a tree.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "PreDecoratedTree (Either a a) b -\u003e PreDecoratedTree (Either a a) b",
        "fct-source": "src/Math-Operad-OperadGB.html#flipEitherRoot",
        "fct-type": "function",
        "title": "flipEitherRoot"
      },
      "index": {
        "description": "Applies flipEither to the root vertex label of tree",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "flipEitherRoot",
        "normalized": "PreDecoratedTree(Either a a)b-\u003ePreDecoratedTree(Either a a)b",
        "package": "Operads",
        "partial": "Either Root",
        "signature": "PreDecoratedTree(Either a a)b-\u003ePreDecoratedTree(Either a a)b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:foldMonomials",
      "description": {
        "fct-descr": "\u003cp\u003eFold a function over all monomial trees in an operad element, collating the results in a list.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "((OrderedTree a t, n) -\u003e [b] -\u003e [b]) -\u003e OperadElement a n t -\u003e [b]",
        "fct-source": "src/Math-Operad-MapOperad.html#foldMonomials",
        "fct-type": "function",
        "title": "foldMonomials"
      },
      "index": {
        "description": "Fold function over all monomial trees in an operad element collating the results in list",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "foldMonomials",
        "normalized": "((OrderedTree a b,c)-\u003e[d]-\u003e[d])-\u003eOperadElement a c b-\u003e[d]",
        "package": "Operads",
        "partial": "Monomials",
        "signature": "((OrderedTree a t,n)-\u003e[b]-\u003e[b])-\u003eOperadElement a n t-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:fromJustTree",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves vertex type encapsulations.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree (Maybe a) -\u003e Maybe (DecoratedTree a)",
        "fct-source": "src/Math-Operad-OperadGB.html#fromJustTree",
        "fct-type": "function",
        "title": "fromJustTree"
      },
      "index": {
        "description": "Removes vertex type encapsulations",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "fromJustTree",
        "normalized": "DecoratedTree(Maybe a)-\u003eMaybe(DecoratedTree a)",
        "package": "Operads",
        "partial": "Just Tree",
        "signature": "DecoratedTree(Maybe a)-\u003eMaybe(DecoratedTree a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list of (tree,coefficient)-pairs, reconstruct the corresponding operad element.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "[(OrderedTree a t, n)] -\u003e OperadElement a n t",
        "fct-source": "src/Math-Operad-MapOperad.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Given list of tree coefficient pairs reconstruct the corresponding operad element",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "fromList",
        "normalized": "[(OrderedTree a b,c)]-\u003eOperadElement a c b",
        "package": "Operads",
        "partial": "List",
        "signature": "[(OrderedTree a t,n)]-\u003eOperadElement a n t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:fuseTree",
      "description": {
        "fct-descr": "\u003cp\u003eProjects vertex labels and applies leaf labels to a tree with internal labeling in \u003ccode\u003eEither a a\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree (Either a a) -\u003e [Int] -\u003e DecoratedTree (Either a a)",
        "fct-source": "src/Math-Operad-OperadGB.html#fuseTree",
        "fct-type": "function",
        "title": "fuseTree"
      },
      "index": {
        "description": "Projects vertex labels and applies leaf labels to tree with internal labeling in Either",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "fuseTree",
        "normalized": "DecoratedTree(Either a a)-\u003e[Int]-\u003eDecoratedTree(Either a a)",
        "package": "Operads",
        "partial": "Tree",
        "signature": "DecoratedTree(Either a a)-\u003e[Int]-\u003eDecoratedTree(Either a a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:getTrees",
      "description": {
        "fct-descr": "\u003cp\u003eExtract all occurring monomial trees from an operad element.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "OperadElement a n t -\u003e [OrderedTree a t]",
        "fct-source": "src/Math-Operad-MapOperad.html#getTrees",
        "fct-type": "function",
        "title": "getTrees"
      },
      "index": {
        "description": "Extract all occurring monomial trees from an operad element",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "getTrees",
        "normalized": "OperadElement a b c-\u003e[OrderedTree a c]",
        "package": "Operads",
        "partial": "Trees",
        "signature": "OperadElement a n t-\u003e[OrderedTree a t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:glueTrees",
      "description": {
        "fct-descr": "\u003cp\u003eIf a tree has trees as labels for its leaves, we can replace the leaves with the roots of\n those label trees. Thus we may glue together trees, as required by the compositions.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "PreDecoratedTree a (PreDecoratedTree a b) -\u003e PreDecoratedTree a b",
        "fct-source": "src/Math-Operad-OrderedTree.html#glueTrees",
        "fct-type": "function",
        "title": "glueTrees"
      },
      "index": {
        "description": "If tree has trees as labels for its leaves we can replace the leaves with the roots of those label trees Thus we may glue together trees as required by the compositions",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "glueTrees",
        "normalized": "PreDecoratedTree a(PreDecoratedTree a b)-\u003ePreDecoratedTree a b",
        "package": "Operads",
        "partial": "Trees",
        "signature": "PreDecoratedTree a(PreDecoratedTree a b)-\u003ePreDecoratedTree a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:invApplyPerm",
      "description": {
        "fct-descr": "\u003cp\u003eApply the permutation inversely to \u003ccode\u003e\u003ca\u003eapplyPerm\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Shuffle -\u003e [a] -\u003e [a]",
        "fct-source": "src/Math-Operad-OrderedTree.html#invApplyPerm",
        "fct-type": "function",
        "title": "invApplyPerm"
      },
      "index": {
        "description": "Apply the permutation inversely to applyPerm",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "invApplyPerm",
        "normalized": "Shuffle-\u003e[a]-\u003e[a]",
        "package": "Operads",
        "partial": "Apply Perm",
        "signature": "Shuffle-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:isCorolla",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether a given root is a corolla.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree a -\u003e Bool",
        "fct-source": "src/Math-Operad-OrderedTree.html#isCorolla",
        "fct-type": "function",
        "title": "isCorolla"
      },
      "index": {
        "description": "Check whether given root is corolla",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "isCorolla",
        "normalized": "DecoratedTree a-\u003eBool",
        "package": "Operads",
        "partial": "Corolla",
        "signature": "DecoratedTree a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:isHomogenous",
      "description": {
        "fct-descr": "\u003cp\u003eCheck that an element of a free operad is homogenous\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "OperadElement a n t -\u003e Bool",
        "fct-source": "src/Math-Operad-OperadGB.html#isHomogenous",
        "fct-type": "function",
        "title": "isHomogenous"
      },
      "index": {
        "description": "Check that an element of free operad is homogenous",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "isHomogenous",
        "normalized": "OperadElement a b c-\u003eBool",
        "package": "Operads",
        "partial": "Homogenous",
        "signature": "OperadElement a n t-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:isLeaf",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether a given root is a leaf.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree a -\u003e Bool",
        "fct-source": "src/Math-Operad-OrderedTree.html#isLeaf",
        "fct-type": "function",
        "title": "isLeaf"
      },
      "index": {
        "description": "Check whether given root is leaf",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "isLeaf",
        "normalized": "DecoratedTree a-\u003eBool",
        "package": "Operads",
        "partial": "Leaf",
        "signature": "DecoratedTree a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:isPermutation",
      "description": {
        "fct-descr": "\u003cp\u003eSanity check for permutations. \n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Shuffle -\u003e Bool",
        "fct-source": "src/Math-Operad-OperadGB.html#isPermutation",
        "fct-type": "function",
        "title": "isPermutation"
      },
      "index": {
        "description": "Sanity check for permutations",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "isPermutation",
        "normalized": "Shuffle-\u003eBool",
        "package": "Operads",
        "partial": "Permutation",
        "signature": "Shuffle-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:isShuffle",
      "description": {
        "fct-descr": "\u003cp\u003eThis tests whether a given sequence of integers really is a shuffle.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Shuffle -\u003e Bool",
        "fct-source": "src/Math-Operad-OrderedTree.html#isShuffle",
        "fct-type": "function",
        "title": "isShuffle"
      },
      "index": {
        "description": "This tests whether given sequence of integers really is shuffle",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "isShuffle",
        "normalized": "Shuffle-\u003eBool",
        "package": "Operads",
        "partial": "Shuffle",
        "signature": "Shuffle-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:isShuffleIJ",
      "description": {
        "fct-descr": "\u003cp\u003eThis tests whether a given sequence of integers is an (i,j)-shuffle\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Shuffle -\u003e Int -\u003e Int -\u003e Bool",
        "fct-source": "src/Math-Operad-OrderedTree.html#isShuffleIJ",
        "fct-type": "function",
        "title": "isShuffleIJ"
      },
      "index": {
        "description": "This tests whether given sequence of integers is an shuffle",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "isShuffleIJ",
        "normalized": "Shuffle-\u003eInt-\u003eInt-\u003eBool",
        "package": "Operads",
        "partial": "Shuffle IJ",
        "signature": "Shuffle-\u003eInt-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:isShuffleIPQ",
      "description": {
        "fct-descr": "\u003cp\u003eThis tests whether a given sequence of integers is admissible for a specific composition operation.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Shuffle -\u003e Int -\u003e Int -\u003e Bool",
        "fct-source": "src/Math-Operad-OrderedTree.html#isShuffleIPQ",
        "fct-type": "function",
        "title": "isShuffleIPQ"
      },
      "index": {
        "description": "This tests whether given sequence of integers is admissible for specific composition operation",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "isShuffleIPQ",
        "normalized": "Shuffle-\u003eInt-\u003eInt-\u003eBool",
        "package": "Operads",
        "partial": "Shuffle IPQ",
        "signature": "Shuffle-\u003eInt-\u003eInt-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:isSorted",
      "description": {
        "fct-descr": "\u003cp\u003eWe need to recognize sorted sequences of integers.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "[a] -\u003e Bool",
        "fct-source": "src/Math-Operad-OrderedTree.html#isSorted",
        "fct-type": "function",
        "title": "isSorted"
      },
      "index": {
        "description": "We need to recognize sorted sequences of integers",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "isSorted",
        "normalized": "[a]-\u003eBool",
        "package": "Operads",
        "partial": "Sorted",
        "signature": "[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:isZero",
      "description": {
        "fct-descr": "\u003cp\u003eCheck whether an element is equal to 0. \n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "OperadElement a n t -\u003e Bool",
        "fct-source": "src/Math-Operad-MapOperad.html#isZero",
        "fct-type": "function",
        "title": "isZero"
      },
      "index": {
        "description": "Check whether an element is equal to",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "isZero",
        "normalized": "OperadElement a b c-\u003eBool",
        "package": "Operads",
        "partial": "Zero",
        "signature": "OperadElement a n t-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:kSubsets",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate all subsets of length k from a given list. \n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Int -\u003e [Int] -\u003e [[Int]]",
        "fct-source": "src/Math-Operad-OrderedTree.html#kSubsets",
        "fct-type": "function",
        "title": "kSubsets"
      },
      "index": {
        "description": "Generate all subsets of length from given list",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "kSubsets",
        "normalized": "Int-\u003e[Int]-\u003e[[Int]]",
        "package": "Operads",
        "partial": "Subsets",
        "signature": "Int-\u003e[Int]-\u003e[[Int]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:lastNonzero",
      "description": {
        "fct-descr": "\u003cp\u003ePicks out the last nonzero entry in a list.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "[a] -\u003e Int",
        "fct-source": "src/Math-Operad-OrderedTree.html#lastNonzero",
        "fct-type": "function",
        "title": "lastNonzero"
      },
      "index": {
        "description": "Picks out the last nonzero entry in list",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "lastNonzero",
        "normalized": "[a]-\u003eInt",
        "package": "Operads",
        "partial": "Nonzero",
        "signature": "[a]-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:leadingCoefficient",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the leading coefficient of an operad element.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "OperadElement a n t -\u003e n",
        "fct-source": "src/Math-Operad-MapOperad.html#leadingCoefficient",
        "fct-type": "function",
        "title": "leadingCoefficient"
      },
      "index": {
        "description": "Extract the leading coefficient of an operad element",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "leadingCoefficient",
        "normalized": "OperadElement a b c-\u003eb",
        "package": "Operads",
        "partial": "Coefficient",
        "signature": "OperadElement a n t-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:leadingMonomial",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the tree for the leading term of an operad element.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "OperadElement a n t -\u003e DecoratedTree a",
        "fct-source": "src/Math-Operad-MapOperad.html#leadingMonomial",
        "fct-type": "function",
        "title": "leadingMonomial"
      },
      "index": {
        "description": "Extract the tree for the leading term of an operad element",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "leadingMonomial",
        "normalized": "OperadElement a b c-\u003eDecoratedTree a",
        "package": "Operads",
        "partial": "Monomial",
        "signature": "OperadElement a n t-\u003eDecoratedTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:leadingOMonomial",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the ordered tree for the leading term of an operad element.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "OperadElement a n t -\u003e OrderedTree a t",
        "fct-source": "src/Math-Operad-MapOperad.html#leadingOMonomial",
        "fct-type": "function",
        "title": "leadingOMonomial"
      },
      "index": {
        "description": "Extract the ordered tree for the leading term of an operad element",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "leadingOMonomial",
        "normalized": "OperadElement a b c-\u003eOrderedTree a c",
        "package": "Operads",
        "partial": "OMonomial",
        "signature": "OperadElement a n t-\u003eOrderedTree a t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:leadingOTerm",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the leading term of an operad element as an operad element.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "OperadElement a n t -\u003e OperadElement a n t",
        "fct-source": "src/Math-Operad-MapOperad.html#leadingOTerm",
        "fct-type": "function",
        "title": "leadingOTerm"
      },
      "index": {
        "description": "Extract the leading term of an operad element as an operad element",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "leadingOTerm",
        "normalized": "OperadElement a b c-\u003eOperadElement a b c",
        "package": "Operads",
        "partial": "OTerm",
        "signature": "OperadElement a n t-\u003eOperadElement a n t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:leadingTerm",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the leading term of an operad element. \n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "OperadElement a n t -\u003e (OrderedTree a t, n)",
        "fct-source": "src/Math-Operad-MapOperad.html#leadingTerm",
        "fct-type": "function",
        "title": "leadingTerm"
      },
      "index": {
        "description": "Extract the leading term of an operad element",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "leadingTerm",
        "normalized": "OperadElement a b c-\u003e(OrderedTree a c,b)",
        "package": "Operads",
        "partial": "Term",
        "signature": "OperadElement a n t-\u003e(OrderedTree a t,n)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:leaf",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a single leaf.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Int -\u003e DecoratedTree a",
        "fct-source": "src/Math-Operad-OrderedTree.html#leaf",
        "fct-type": "function",
        "title": "leaf"
      },
      "index": {
        "description": "Build single leaf",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "leaf",
        "normalized": "Int-\u003eDecoratedTree a",
        "package": "Operads",
        "partial": "",
        "signature": "Int-\u003eDecoratedTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:leafLabels",
      "description": {
        "fct-descr": "\u003cp\u003eRecursive algorithm to figure out correct leaf labels for a reconstructed small common multiple of two trees.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree a -\u003e [Int] -\u003e [Int] -\u003e [[Int]]",
        "fct-source": "src/Math-Operad-OperadGB.html#leafLabels",
        "fct-type": "function",
        "title": "leafLabels"
      },
      "index": {
        "description": "Recursive algorithm to figure out correct leaf labels for reconstructed small common multiple of two trees",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "leafLabels",
        "normalized": "DecoratedTree a-\u003e[Int]-\u003e[Int]-\u003e[[Int]]",
        "package": "Operads",
        "partial": "Labels",
        "signature": "DecoratedTree a-\u003e[Int]-\u003e[Int]-\u003e[[Int]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:leafOrder",
      "description": {
        "fct-descr": "\u003cp\u003eFind the permutation the leaf labeling ordains for inputs.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree a -\u003e [Int]",
        "fct-source": "src/Math-Operad-OrderedTree.html#leafOrder",
        "fct-type": "function",
        "title": "leafOrder"
      },
      "index": {
        "description": "Find the permutation the leaf labeling ordains for inputs",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "leafOrder",
        "normalized": "DecoratedTree a-\u003e[Int]",
        "package": "Operads",
        "partial": "Order",
        "signature": "DecoratedTree a-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:leafOrders",
      "description": {
        "fct-descr": "\u003cp\u003eAcquires lists for resorting leaf labels according to the algorithm found for\n constructing small common multiples with minimal work.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree a -\u003e DecoratedTree b -\u003e [(Int, Int)]",
        "fct-source": "src/Math-Operad-OperadGB.html#leafOrders",
        "fct-type": "function",
        "title": "leafOrders"
      },
      "index": {
        "description": "Acquires lists for resorting leaf labels according to the algorithm found for constructing small common multiples with minimal work",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "leafOrders",
        "normalized": "DecoratedTree a-\u003eDecoratedTree b-\u003e[(Int,Int)]",
        "package": "Operads",
        "partial": "Orders",
        "signature": "DecoratedTree a-\u003eDecoratedTree b-\u003e[(Int,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:lgb",
      "description": {
        "fct-descr": "\u003cp\u003eThe list of operad elements consisting of 'm12_3'-'m13_2'-'m1_23'. This generates the \n ideal of relations for the operad Lie.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "[OperadElement Integer Rational PathPerm]",
        "fct-source": "src/Math-Operad.html#lgb",
        "fct-type": "function",
        "title": "lgb"
      },
      "index": {
        "description": "The list of operad elements consisting of m12 m13 m1 This generates the ideal of relations for the operad Lie",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "lgb",
        "normalized": "[OperadElement Integer Rational PathPerm]",
        "package": "Operads",
        "partial": "",
        "signature": "[OperadElement Integer Rational PathPerm]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:m12_3",
      "description": {
        "fct-descr": "\u003cp\u003eThe element m2(m2(1,2),3)\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree Integer",
        "fct-source": "src/Math-Operad.html#m12_3",
        "fct-type": "function",
        "title": "m12_3"
      },
      "index": {
        "description": "The element m2 m2",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "m12_3",
        "normalized": "",
        "package": "Operads",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:m13_2",
      "description": {
        "fct-descr": "\u003cp\u003eThe element m2(m2(1,3),2)\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree Integer",
        "fct-source": "src/Math-Operad.html#m13_2",
        "fct-type": "function",
        "title": "m13_2"
      },
      "index": {
        "description": "The element m2 m2",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "m13_2",
        "normalized": "",
        "package": "Operads",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:m1_23",
      "description": {
        "fct-descr": "\u003cp\u003eThe element m2(1,m2(2,3))\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree Integer",
        "fct-source": "src/Math-Operad.html#m1_23",
        "fct-type": "function",
        "title": "m1_23"
      },
      "index": {
        "description": "The element m2 m2",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "m1_23",
        "normalized": "",
        "package": "Operads",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:m2",
      "description": {
        "fct-descr": "\u003cp\u003eThe element m2(1,2)\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree Integer",
        "fct-source": "src/Math-Operad.html#m2",
        "fct-type": "function",
        "title": "m2"
      },
      "index": {
        "description": "The element m2",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "m2",
        "normalized": "",
        "package": "Operads",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:m3",
      "description": {
        "fct-descr": "\u003cp\u003eThe element m3(1,2,3)\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree Integer",
        "fct-source": "src/Math-Operad.html#m3",
        "fct-type": "function",
        "title": "m3"
      },
      "index": {
        "description": "The element m3",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "m3",
        "normalized": "",
        "package": "Operads",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:mapMonomials",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function to each monomial tree in the operad element.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "(OrderedTree a s -\u003e OrderedTree b t) -\u003e OperadElement a n s -\u003e OperadElement b n t",
        "fct-source": "src/Math-Operad-MapOperad.html#mapMonomials",
        "fct-type": "function",
        "title": "mapMonomials"
      },
      "index": {
        "description": "Apply function to each monomial tree in the operad element",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "mapMonomials",
        "normalized": "(OrderedTree a b-\u003eOrderedTree c d)-\u003eOperadElement a e b-\u003eOperadElement c e d",
        "package": "Operads",
        "partial": "Monomials",
        "signature": "(OrderedTree a s-\u003eOrderedTree b t)-\u003eOperadElement a n s-\u003eOperadElement b n t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:maxOperationDegree",
      "description": {
        "fct-descr": "\u003cp\u003eThe maximal operation degree of an operadic element\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "OperadElement a n t -\u003e Int",
        "fct-source": "src/Math-Operad-OperadGB.html#maxOperationDegree",
        "fct-type": "function",
        "title": "maxOperationDegree"
      },
      "index": {
        "description": "The maximal operation degree of an operadic element",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "maxOperationDegree",
        "normalized": "OperadElement a b c-\u003eInt",
        "package": "Operads",
        "partial": "Operation Degree",
        "signature": "OperadElement a n t-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:maybeLast",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to listToMaybe . reverse\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "[a] -\u003e Maybe a",
        "fct-source": "src/Math-Operad-OperadGB.html#maybeLast",
        "fct-type": "function",
        "title": "maybeLast"
      },
      "index": {
        "description": "Equivalent to listToMaybe reverse",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "maybeLast",
        "normalized": "[a]-\u003eMaybe a",
        "package": "Operads",
        "partial": "Last",
        "signature": "[a]-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:minimalLeaf",
      "description": {
        "fct-descr": "\u003cp\u003eFind the minimal leaf covering any given vertex.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "PreDecoratedTree a b -\u003e b",
        "fct-source": "src/Math-Operad-OrderedTree.html#minimalLeaf",
        "fct-type": "function",
        "title": "minimalLeaf"
      },
      "index": {
        "description": "Find the minimal leaf covering any given vertex",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "minimalLeaf",
        "normalized": "PreDecoratedTree a b-\u003eb",
        "package": "Operads",
        "partial": "Leaf",
        "signature": "PreDecoratedTree a b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:nLeaves",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the number of leaves of the entire tree covering a given vertex.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree a -\u003e Int",
        "fct-source": "src/Math-Operad-OrderedTree.html#nLeaves",
        "fct-type": "function",
        "title": "nLeaves"
      },
      "index": {
        "description": "Compute the number of leaves of the entire tree covering given vertex",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "nLeaves",
        "normalized": "DecoratedTree a-\u003eInt",
        "package": "Operads",
        "partial": "Leaves",
        "signature": "DecoratedTree a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:nsCompose",
      "description": {
        "fct-descr": "\u003cp\u003eComposition in the non-symmetric operad. We compose s o_i t. \n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Int -\u003e DecoratedTree a -\u003e DecoratedTree a -\u003e DecoratedTree a",
        "fct-source": "src/Math-Operad-OperadGB.html#nsCompose",
        "fct-type": "function",
        "title": "nsCompose"
      },
      "index": {
        "description": "Composition in the non-symmetric operad We compose",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "nsCompose",
        "normalized": "Int-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003eDecoratedTree a",
        "package": "Operads",
        "partial": "Compose",
        "signature": "Int-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003eDecoratedTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:nsComposeAll",
      "description": {
        "fct-descr": "\u003cp\u003eNon-symmetric composition in the g(s;t1,...,tk) style. \n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree a -\u003e [DecoratedTree a] -\u003e DecoratedTree a",
        "fct-source": "src/Math-Operad-OperadGB.html#nsComposeAll",
        "fct-type": "function",
        "title": "nsComposeAll"
      },
      "index": {
        "description": "Non-symmetric composition in the t1 tk style",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "nsComposeAll",
        "normalized": "DecoratedTree a-\u003e[DecoratedTree a]-\u003eDecoratedTree a",
        "package": "Operads",
        "partial": "Compose All",
        "signature": "DecoratedTree a-\u003e[DecoratedTree a]-\u003eDecoratedTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:nsOperadicBuchberger",
      "description": {
        "fct-descr": "\u003cp\u003eNon-symmetric version of \u003ccode\u003e\u003ca\u003eoperadicBuchberger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "[OperadElement a n t] -\u003e [OperadElement a n t]",
        "fct-source": "src/Math-Operad-OperadGB.html#nsOperadicBuchberger",
        "fct-type": "function",
        "title": "nsOperadicBuchberger"
      },
      "index": {
        "description": "Non-symmetric version of operadicBuchberger",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "nsOperadicBuchberger",
        "normalized": "[OperadElement a b c]-\u003e[OperadElement a b c]",
        "package": "Operads",
        "partial": "Operadic Buchberger",
        "signature": "[OperadElement a n t]-\u003e[OperadElement a n t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:oe",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct an element in the free operad from its internal structure. Use this instead of the constructor.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "[(OrderedTree a t, n)] -\u003e OperadElement a n t",
        "fct-source": "src/Math-Operad-MapOperad.html#oe",
        "fct-type": "function",
        "title": "oe"
      },
      "index": {
        "description": "Construct an element in the free operad from its internal structure Use this instead of the constructor",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "oe",
        "normalized": "[(OrderedTree a b,c)]-\u003eOperadElement a c b",
        "package": "Operads",
        "partial": "",
        "signature": "[(OrderedTree a t,n)]-\u003eOperadElement a n t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:oek",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a monomial in the free operad from a tree, a tree ordering and a coefficient.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree a -\u003e n -\u003e OperadElement a n t",
        "fct-source": "src/Math-Operad-MapOperad.html#oek",
        "fct-type": "function",
        "title": "oek"
      },
      "index": {
        "description": "Construct monomial in the free operad from tree tree ordering and coefficient",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "oek",
        "normalized": "DecoratedTree a-\u003eb-\u003eOperadElement a b c",
        "package": "Operads",
        "partial": "",
        "signature": "DecoratedTree a-\u003en-\u003eOperadElement a n t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:oet",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a monomial in the free operad from a tree and a tree ordering. It's coefficient will be 1.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree a -\u003e OperadElement a n t",
        "fct-source": "src/Math-Operad-MapOperad.html#oet",
        "fct-type": "function",
        "title": "oet"
      },
      "index": {
        "description": "Construct monomial in the free operad from tree and tree ordering It coefficient will be",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "oet",
        "normalized": "DecoratedTree a-\u003eOperadElement a b c",
        "package": "Operads",
        "partial": "",
        "signature": "DecoratedTree a-\u003eOperadElement a n t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:operadicBuchberger",
      "description": {
        "fct-descr": "\u003cp\u003ePerform the entire Buchberger algorithm for a given list of generators. Iteratively run the single iteration\n from \u003ccode\u003e\u003ca\u003estepOperadicBuchberger\u003c/a\u003e\u003c/code\u003e until no new elements are generated.\n\u003c/p\u003e\u003cp\u003eDO NOTE: This is entirely possible to get stuck in an infinite loop. It is not difficult to write down generators\n such that the resulting Groebner basis is infinite. No checking is performed to catch this kind of condition.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "[OperadElement a n t] -\u003e [OperadElement a n t]",
        "fct-source": "src/Math-Operad-OperadGB.html#operadicBuchberger",
        "fct-type": "function",
        "title": "operadicBuchberger"
      },
      "index": {
        "description": "Perform the entire Buchberger algorithm for given list of generators Iteratively run the single iteration from stepOperadicBuchberger until no new elements are generated DO NOTE This is entirely possible to get stuck in an infinite loop It is not difficult to write down generators such that the resulting Groebner basis is infinite No checking is performed to catch this kind of condition",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "operadicBuchberger",
        "normalized": "[OperadElement a b c]-\u003e[OperadElement a b c]",
        "package": "Operads",
        "partial": "Buchberger",
        "signature": "[OperadElement a n t]-\u003e[OperadElement a n t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:operationDegree",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of internal vertices of a tree.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree a -\u003e Int",
        "fct-source": "src/Math-Operad-OperadGB.html#operationDegree",
        "fct-type": "function",
        "title": "operationDegree"
      },
      "index": {
        "description": "The number of internal vertices of tree",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "operationDegree",
        "normalized": "DecoratedTree a-\u003eInt",
        "package": "Operads",
        "partial": "Degree",
        "signature": "DecoratedTree a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:operationDegrees",
      "description": {
        "fct-descr": "\u003cp\u003eA list of operation degrees occurring in the terms of the operad element\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "OperadElement a n t -\u003e [Int]",
        "fct-source": "src/Math-Operad-OperadGB.html#operationDegrees",
        "fct-type": "function",
        "title": "operationDegrees"
      },
      "index": {
        "description": "list of operation degrees occurring in the terms of the operad element",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "operationDegrees",
        "normalized": "OperadElement a b c-\u003e[Int]",
        "package": "Operads",
        "partial": "Degrees",
        "signature": "OperadElement a n t-\u003e[Int]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:orderedPathSequence",
      "description": {
        "fct-descr": "\u003cp\u003eReordering the path sequences to mirror the actual leaf ordering.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree a -\u003e ([[a]], Shuffle)",
        "fct-source": "src/Math-Operad-OrderedTree.html#orderedPathSequence",
        "fct-type": "function",
        "title": "orderedPathSequence"
      },
      "index": {
        "description": "Reordering the path sequences to mirror the actual leaf ordering",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "orderedPathSequence",
        "normalized": "DecoratedTree a-\u003e([[a]],Shuffle)",
        "package": "Operads",
        "partial": "Path Sequence",
        "signature": "DecoratedTree a-\u003e([[a]],Shuffle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:ordering",
      "description": {
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "t",
        "fct-source": "src/Math-Operad-OrderedTree.html#ordering",
        "fct-type": "method",
        "title": "ordering"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "ordering",
        "normalized": "",
        "package": "Operads",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:ot",
      "description": {
        "fct-descr": "\u003cp\u003eBuilding an ordered tree with \u003ccode\u003ePathLex\u003c/code\u003e ordering from a decorated tree.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree a -\u003e OrderedTree a t",
        "fct-source": "src/Math-Operad-OrderedTree.html#ot",
        "fct-type": "function",
        "title": "ot"
      },
      "index": {
        "description": "Building an ordered tree with PathLex ordering from decorated tree",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "ot",
        "normalized": "DecoratedTree a-\u003eOrderedTree a b",
        "package": "Operads",
        "partial": "",
        "signature": "DecoratedTree a-\u003eOrderedTree a t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:pP",
      "description": {
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/Math-Operad-PPrint.html#pP",
        "fct-type": "method",
        "title": "pP"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "pP",
        "normalized": "a-\u003eIO()",
        "package": "Operads",
        "partial": "",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:pathSequence",
      "description": {
        "fct-descr": "\u003cp\u003eFinding the path sequences. cf. Dotsenko-Khoroshkin.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree a -\u003e ([[a]], Shuffle)",
        "fct-source": "src/Math-Operad-OrderedTree.html#pathSequence",
        "fct-type": "function",
        "title": "pathSequence"
      },
      "index": {
        "description": "Finding the path sequences cf Dotsenko-Khoroshkin",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "pathSequence",
        "normalized": "DecoratedTree a-\u003e([[a]],Shuffle)",
        "package": "Operads",
        "partial": "Sequence",
        "signature": "DecoratedTree a-\u003e([[a]],Shuffle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:planarTree",
      "description": {
        "fct-descr": "\u003cp\u003eChecks a tree for planarity.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree a -\u003e Bool",
        "fct-source": "src/Math-Operad-OperadGB.html#planarTree",
        "fct-type": "function",
        "title": "planarTree"
      },
      "index": {
        "description": "Checks tree for planarity",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "planarTree",
        "normalized": "DecoratedTree a-\u003eBool",
        "package": "Operads",
        "partial": "Tree",
        "signature": "DecoratedTree a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:pp",
      "description": {
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Math-Operad-PPrint.html#pp",
        "fct-type": "method",
        "title": "pp"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "pp",
        "normalized": "a-\u003eString",
        "package": "Operads",
        "partial": "",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:rePackLabels",
      "description": {
        "fct-descr": "\u003cp\u003eRelabels a tree in the right order, but with entries from [1..]\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "PreDecoratedTree a b -\u003e DecoratedTree a",
        "fct-source": "src/Math-Operad-OperadGB.html#rePackLabels",
        "fct-type": "function",
        "title": "rePackLabels"
      },
      "index": {
        "description": "Relabels tree in the right order but with entries from",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "rePackLabels",
        "normalized": "PreDecoratedTree a b-\u003eDecoratedTree a",
        "package": "Operads",
        "partial": "Pack Labels",
        "signature": "PreDecoratedTree a b-\u003eDecoratedTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:reconstructNode",
      "description": {
        "fct-descr": "\u003cp\u003eThe function that mimics resubstitution of a new tree into the hole left by finding embedding,\n called m_alpha,beta in Dotsenko-Khoroshkin. This version only attempts to resubstitute the tree\n at the root, bailing out if not possible.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree a -\u003e Embedding a -\u003e Maybe (DecoratedTree a)",
        "fct-source": "src/Math-Operad-OperadGB.html#reconstructNode",
        "fct-type": "function",
        "title": "reconstructNode"
      },
      "index": {
        "description": "The function that mimics resubstitution of new tree into the hole left by finding embedding called alpha beta in Dotsenko-Khoroshkin This version only attempts to resubstitute the tree at the root bailing out if not possible",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "reconstructNode",
        "normalized": "DecoratedTree a-\u003eEmbedding a-\u003eMaybe(DecoratedTree a)",
        "package": "Operads",
        "partial": "Node",
        "signature": "DecoratedTree a-\u003eEmbedding a-\u003eMaybe(DecoratedTree a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:reconstructTree",
      "description": {
        "fct-descr": "\u003cp\u003eThe function that mimics resubstitution of a new tree into the hole left by finding embedding,\n called m_alpha,beta in Dotsenko-Khoroshkin. This version recurses down in the tree in order\n to find exactly one hole, and substitute the tree sub into it.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree a -\u003e Embedding a -\u003e Maybe (DecoratedTree a)",
        "fct-source": "src/Math-Operad-OperadGB.html#reconstructTree",
        "fct-type": "function",
        "title": "reconstructTree"
      },
      "index": {
        "description": "The function that mimics resubstitution of new tree into the hole left by finding embedding called alpha beta in Dotsenko-Khoroshkin This version recurses down in the tree in order to find exactly one hole and substitute the tree sub into it",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "reconstructTree",
        "normalized": "DecoratedTree a-\u003eEmbedding a-\u003eMaybe(DecoratedTree a)",
        "package": "Operads",
        "partial": "Tree",
        "signature": "DecoratedTree a-\u003eEmbedding a-\u003eMaybe(DecoratedTree a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:reduceBasis",
      "description": {
        "fct-descr": "\u003cp\u003eReduces a list of elements with respect to all other elements occurring in that same list.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "[OperadElement a n t] -\u003e [OperadElement a n t] -\u003e [OperadElement a n t]",
        "fct-source": "src/Math-Operad-OperadGB.html#reduceBasis",
        "fct-type": "function",
        "title": "reduceBasis"
      },
      "index": {
        "description": "Reduces list of elements with respect to all other elements occurring in that same list",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "reduceBasis",
        "normalized": "[OperadElement a b c]-\u003e[OperadElement a b c]-\u003e[OperadElement a b c]",
        "package": "Operads",
        "partial": "Basis",
        "signature": "[OperadElement a n t]-\u003e[OperadElement a n t]-\u003e[OperadElement a n t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:reduceCompletely",
      "description": {
        "fct-descr": "\u003cp\u003eReduce all terms of \u003ccode\u003eop\u003c/code\u003e with respect to \u003ccode\u003egbn\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "OperadElement a n t -\u003e [OperadElement a n t] -\u003e OperadElement a n t",
        "fct-source": "src/Math-Operad-OperadGB.html#reduceCompletely",
        "fct-type": "function",
        "title": "reduceCompletely"
      },
      "index": {
        "description": "Reduce all terms of op with respect to gbn",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "reduceCompletely",
        "normalized": "OperadElement a b c-\u003e[OperadElement a b c]-\u003eOperadElement a b c",
        "package": "Operads",
        "partial": "Completely",
        "signature": "OperadElement a n t-\u003e[OperadElement a n t]-\u003eOperadElement a n t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:reduceInitial",
      "description": {
        "fct-descr": "\u003cp\u003eReduce the leading monomial of \u003ccode\u003eop\u003c/code\u003e with respect to \u003ccode\u003egb\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "OperadElement a n t -\u003e [OperadElement a n t] -\u003e OperadElement a n t",
        "fct-source": "src/Math-Operad-OperadGB.html#reduceInitial",
        "fct-type": "function",
        "title": "reduceInitial"
      },
      "index": {
        "description": "Reduce the leading monomial of op with respect to gb",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "reduceInitial",
        "normalized": "OperadElement a b c-\u003e[OperadElement a b c]-\u003eOperadElement a b c",
        "package": "Operads",
        "partial": "Initial",
        "signature": "OperadElement a n t-\u003e[OperadElement a n t]-\u003eOperadElement a n t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:reduceOE",
      "description": {
        "fct-descr": "\u003cp\u003eReduce g with respect to f and the embedding em: lt f -\u003e lt g.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Embedding a -\u003e OperadElement a n t -\u003e OperadElement a n t -\u003e OperadElement a n t",
        "fct-source": "src/Math-Operad-OperadGB.html#reduceOE",
        "fct-type": "function",
        "title": "reduceOE"
      },
      "index": {
        "description": "Reduce with respect to and the embedding em lt lt",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "reduceOE",
        "normalized": "Embedding a-\u003eOperadElement a b c-\u003eOperadElement a b c-\u003eOperadElement a b c",
        "package": "Operads",
        "partial": "OE",
        "signature": "Embedding a-\u003eOperadElement a n t-\u003eOperadElement a n t-\u003eOperadElement a n t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:relabelLeaves",
      "description": {
        "fct-descr": "\u003cp\u003eChange the leaves of a tree to take their values from a given list.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree a -\u003e [b] -\u003e PreDecoratedTree a b",
        "fct-source": "src/Math-Operad-OrderedTree.html#relabelLeaves",
        "fct-type": "function",
        "title": "relabelLeaves"
      },
      "index": {
        "description": "Change the leaves of tree to take their values from given list",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "relabelLeaves",
        "normalized": "DecoratedTree a-\u003e[b]-\u003ePreDecoratedTree a b",
        "package": "Operads",
        "partial": "Leaves",
        "signature": "DecoratedTree a-\u003e[b]-\u003ePreDecoratedTree a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:reverseOrder",
      "description": {
        "fct-descr": "\u003cp\u003eChanges direction of an ordering.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Ordering -\u003e Ordering",
        "fct-source": "src/Math-Operad-OrderedTree.html#reverseOrder",
        "fct-type": "function",
        "title": "reverseOrder"
      },
      "index": {
        "description": "Changes direction of an ordering",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "reverseOrder",
        "normalized": "Ordering-\u003eOrdering",
        "package": "Operads",
        "partial": "Order",
        "signature": "Ordering-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:scmToEmbedding",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs embeddings for \u003ccode\u003es\u003c/code\u003e and \u003ccode\u003et\u003c/code\u003e in \u003ccode\u003eSCM(s,t)\u003c/code\u003e and returns these.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree (Either a a) -\u003e DecoratedTree a -\u003e DecoratedTree a -\u003e (Embedding a, Embedding a)",
        "fct-source": "src/Math-Operad-OperadGB.html#scmToEmbedding",
        "fct-type": "function",
        "title": "scmToEmbedding"
      },
      "index": {
        "description": "Constructs embeddings for and in SCM and returns these",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "scmToEmbedding",
        "normalized": "DecoratedTree(Either a a)-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003e(Embedding a,Embedding a)",
        "package": "Operads",
        "partial": "To Embedding",
        "signature": "DecoratedTree(Either a a)-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003e(Embedding a,Embedding a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:shuffleCompose",
      "description": {
        "fct-descr": "\u003cp\u003eComposition in the shuffle operad\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Int -\u003e Shuffle -\u003e DecoratedTree a -\u003e DecoratedTree a -\u003e DecoratedTree a",
        "fct-source": "src/Math-Operad-OperadGB.html#shuffleCompose",
        "fct-type": "function",
        "title": "shuffleCompose"
      },
      "index": {
        "description": "Composition in the shuffle operad",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "shuffleCompose",
        "normalized": "Int-\u003eShuffle-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003eDecoratedTree a",
        "package": "Operads",
        "partial": "Compose",
        "signature": "Int-\u003eShuffle-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003eDecoratedTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:shuffleComposeAll",
      "description": {
        "fct-descr": "\u003cp\u003eShuffle composition in the g(s;t1,...,tk) style. \n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Shuffle -\u003e DecoratedTree a -\u003e [DecoratedTree a] -\u003e DecoratedTree a",
        "fct-source": "src/Math-Operad-OperadGB.html#shuffleComposeAll",
        "fct-type": "function",
        "title": "shuffleComposeAll"
      },
      "index": {
        "description": "Shuffle composition in the t1 tk style",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "shuffleComposeAll",
        "normalized": "Shuffle-\u003eDecoratedTree a-\u003e[DecoratedTree a]-\u003eDecoratedTree a",
        "package": "Operads",
        "partial": "Compose All",
        "signature": "Shuffle-\u003eDecoratedTree a-\u003e[DecoratedTree a]-\u003eDecoratedTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:stepInitialOperadicBuchberger",
      "description": {
        "fct-descr": "\u003cp\u003ePerform one iteration of the Buchberger algorithm: generate all S-polynomials. Reduce all S-polynomials.\n Return anything that survived the reduction. Keep the occurring operation degrees bounded. \n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Int -\u003e [OperadElement a n t] -\u003e [OperadElement a n t] -\u003e [OperadElement a n t]",
        "fct-source": "src/Math-Operad-OperadGB.html#stepInitialOperadicBuchberger",
        "fct-type": "function",
        "title": "stepInitialOperadicBuchberger"
      },
      "index": {
        "description": "Perform one iteration of the Buchberger algorithm generate all S-polynomials Reduce all S-polynomials Return anything that survived the reduction Keep the occurring operation degrees bounded",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "stepInitialOperadicBuchberger",
        "normalized": "Int-\u003e[OperadElement a b c]-\u003e[OperadElement a b c]-\u003e[OperadElement a b c]",
        "package": "Operads",
        "partial": "Initial Operadic Buchberger",
        "signature": "Int-\u003e[OperadElement a n t]-\u003e[OperadElement a n t]-\u003e[OperadElement a n t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:stepNSInitialOperadicBuchberger",
      "description": {
        "fct-descr": "\u003cp\u003eNon-symmetric version of \u003ccode\u003e\u003ca\u003estepInitialOperadicBuchberger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Int -\u003e [OperadElement a n t] -\u003e [OperadElement a n t] -\u003e [OperadElement a n t]",
        "fct-source": "src/Math-Operad-OperadGB.html#stepNSInitialOperadicBuchberger",
        "fct-type": "function",
        "title": "stepNSInitialOperadicBuchberger"
      },
      "index": {
        "description": "Non-symmetric version of stepInitialOperadicBuchberger",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "stepNSInitialOperadicBuchberger",
        "normalized": "Int-\u003e[OperadElement a b c]-\u003e[OperadElement a b c]-\u003e[OperadElement a b c]",
        "package": "Operads",
        "partial": "NSInitial Operadic Buchberger",
        "signature": "Int-\u003e[OperadElement a n t]-\u003e[OperadElement a n t]-\u003e[OperadElement a n t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:stepNSOperadicBuchberger",
      "description": {
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "[OperadElement a n t] -\u003e [OperadElement a n t] -\u003e [OperadElement a n t]",
        "fct-source": "src/Math-Operad-OperadGB.html#stepNSOperadicBuchberger",
        "fct-type": "function",
        "title": "stepNSOperadicBuchberger"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "stepNSOperadicBuchberger",
        "normalized": "[OperadElement a b c]-\u003e[OperadElement a b c]-\u003e[OperadElement a b c]",
        "package": "Operads",
        "partial": "NSOperadic Buchberger",
        "signature": "[OperadElement a n t]-\u003e[OperadElement a n t]-\u003e[OperadElement a n t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:stepOperadicBuchberger",
      "description": {
        "fct-descr": "\u003cp\u003ePerform one iteration of the Buchberger algorithm: generate all S-polynomials. Reduce all S-polynomials.\n Return anything that survived the reduction.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "[OperadElement a n t] -\u003e [OperadElement a n t] -\u003e [OperadElement a n t]",
        "fct-source": "src/Math-Operad-OperadGB.html#stepOperadicBuchberger",
        "fct-type": "function",
        "title": "stepOperadicBuchberger"
      },
      "index": {
        "description": "Perform one iteration of the Buchberger algorithm generate all S-polynomials Reduce all S-polynomials Return anything that survived the reduction",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "stepOperadicBuchberger",
        "normalized": "[OperadElement a b c]-\u003e[OperadElement a b c]-\u003e[OperadElement a b c]",
        "package": "Operads",
        "partial": "Operadic Buchberger",
        "signature": "[OperadElement a n t]-\u003e[OperadElement a n t]-\u003e[OperadElement a n t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:streamNSOperadicBuchberger",
      "description": {
        "fct-descr": "\u003cp\u003eNon-symmetric version of \u003ccode\u003e\u003ca\u003estreamOperadicBuchberger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Int -\u003e [OperadElement a n t] -\u003e [OperadElement a n t]",
        "fct-source": "src/Math-Operad-OperadGB.html#streamNSOperadicBuchberger",
        "fct-type": "function",
        "title": "streamNSOperadicBuchberger"
      },
      "index": {
        "description": "Non-symmetric version of streamOperadicBuchberger",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "streamNSOperadicBuchberger",
        "normalized": "Int-\u003e[OperadElement a b c]-\u003e[OperadElement a b c]",
        "package": "Operads",
        "partial": "NSOperadic Buchberger",
        "signature": "Int-\u003e[OperadElement a n t]-\u003e[OperadElement a n t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:streamOperadicBuchberger",
      "description": {
        "fct-descr": "\u003cp\u003ePerform the entire Buchberger algorithm for a given list of generators. This iteratively runs single iterations\n from \u003ccode\u003e\u003ca\u003estepOperadicBuchberger\u003c/a\u003e\u003c/code\u003e until no new elements are generated.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Int -\u003e [OperadElement a n t] -\u003e [OperadElement a n t]",
        "fct-source": "src/Math-Operad-OperadGB.html#streamOperadicBuchberger",
        "fct-type": "function",
        "title": "streamOperadicBuchberger"
      },
      "index": {
        "description": "Perform the entire Buchberger algorithm for given list of generators This iteratively runs single iterations from stepOperadicBuchberger until no new elements are generated",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "streamOperadicBuchberger",
        "normalized": "Int-\u003e[OperadElement a b c]-\u003e[OperadElement a b c]",
        "package": "Operads",
        "partial": "Operadic Buchberger",
        "signature": "Int-\u003e[OperadElement a n t]-\u003e[OperadElement a n t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:stripEither",
      "description": {
        "fct-descr": "\u003cp\u003eProjects the type \u003ccode\u003eEither a a\u003c/code\u003e onto the type \u003ccode\u003ea\u003c/code\u003e in the obvious manner.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Either a a -\u003e a",
        "fct-source": "src/Math-Operad-OperadGB.html#stripEither",
        "fct-type": "function",
        "title": "stripEither"
      },
      "index": {
        "description": "Projects the type Either onto the type in the obvious manner",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "stripEither",
        "normalized": "Either a a-\u003ea",
        "package": "Operads",
        "partial": "Either",
        "signature": "Either a a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:stripTree",
      "description": {
        "fct-descr": "\u003cp\u003eStrips the \u003ccode\u003eEither\u003c/code\u003e layer from internal vertex labels\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree (Either a a) -\u003e DecoratedTree a",
        "fct-source": "src/Math-Operad-OperadGB.html#stripTree",
        "fct-type": "function",
        "title": "stripTree"
      },
      "index": {
        "description": "Strips the Either layer from internal vertex labels",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "stripTree",
        "normalized": "DecoratedTree(Either a a)-\u003eDecoratedTree a",
        "package": "Operads",
        "partial": "Tree",
        "signature": "DecoratedTree(Either a a)-\u003eDecoratedTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:subTreeHasNothing",
      "description": {
        "fct-descr": "\u003cp\u003eReturns True if any of the vertices in the given tree has been tagged.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree (Maybe a) -\u003e Bool",
        "fct-source": "src/Math-Operad-OperadGB.html#subTreeHasNothing",
        "fct-type": "function",
        "title": "subTreeHasNothing"
      },
      "index": {
        "description": "Returns True if any of the vertices in the given tree has been tagged",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "subTreeHasNothing",
        "normalized": "DecoratedTree(Maybe a)-\u003eBool",
        "package": "Operads",
        "partial": "Tree Has Nothing",
        "signature": "DecoratedTree(Maybe a)-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:subTrees",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "![PreDecoratedTree a b]",
        "fct-source": "src/Math-Operad-OrderedTree.html#PreDecoratedTree",
        "fct-type": "function",
        "title": "subTrees"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "subTrees",
        "normalized": "[PreDecoratedTree a b]",
        "package": "Operads",
        "partial": "Trees",
        "signature": "[PreDecoratedTree a b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:symmetricCompose",
      "description": {
        "fct-descr": "\u003cp\u003eComposition in the symmetric operad\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Int -\u003e Shuffle -\u003e DecoratedTree a -\u003e DecoratedTree a -\u003e DecoratedTree a",
        "fct-source": "src/Math-Operad-OperadGB.html#symmetricCompose",
        "fct-type": "function",
        "title": "symmetricCompose"
      },
      "index": {
        "description": "Composition in the symmetric operad",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "symmetricCompose",
        "normalized": "Int-\u003eShuffle-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003eDecoratedTree a",
        "package": "Operads",
        "partial": "Compose",
        "signature": "Int-\u003eShuffle-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003eDecoratedTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:symmetricComposeAll",
      "description": {
        "fct-descr": "\u003cp\u003eSymmetric composition in the g(s;t1,...,tk) style. \n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "Shuffle -\u003e DecoratedTree a -\u003e [DecoratedTree a] -\u003e DecoratedTree a",
        "fct-source": "src/Math-Operad-OperadGB.html#symmetricComposeAll",
        "fct-type": "function",
        "title": "symmetricComposeAll"
      },
      "index": {
        "description": "Symmetric composition in the t1 tk style",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "symmetricComposeAll",
        "normalized": "Shuffle-\u003eDecoratedTree a-\u003e[DecoratedTree a]-\u003eDecoratedTree a",
        "package": "Operads",
        "partial": "Compose All",
        "signature": "Shuffle-\u003eDecoratedTree a-\u003e[DecoratedTree a]-\u003eDecoratedTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:toJustTree",
      "description": {
        "fct-descr": "\u003cp\u003eAdds vertex type encapsulations. \n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree a -\u003e DecoratedTree (Maybe a)",
        "fct-source": "src/Math-Operad-OperadGB.html#toJustTree",
        "fct-type": "function",
        "title": "toJustTree"
      },
      "index": {
        "description": "Adds vertex type encapsulations",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "toJustTree",
        "normalized": "DecoratedTree a-\u003eDecoratedTree(Maybe a)",
        "package": "Operads",
        "partial": "Just Tree",
        "signature": "DecoratedTree a-\u003eDecoratedTree(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an operad element, extract a list of (tree, coefficient) pairs. \n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "OperadElement a n t -\u003e [(OrderedTree a t, n)]",
        "fct-source": "src/Math-Operad-MapOperad.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Given an operad element extract list of tree coefficient pairs",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "toList",
        "normalized": "OperadElement a b c-\u003e[(OrderedTree a c,b)]",
        "package": "Operads",
        "partial": "List",
        "signature": "OperadElement a n t-\u003e[(OrderedTree a t,n)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:treeCompare",
      "description": {
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "t -\u003e DecoratedTree a -\u003e DecoratedTree a -\u003e Ordering",
        "fct-source": "src/Math-Operad-OrderedTree.html#treeCompare",
        "fct-type": "method",
        "title": "treeCompare"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "treeCompare",
        "normalized": "a-\u003eDecoratedTree b-\u003eDecoratedTree b-\u003eOrdering",
        "package": "Operads",
        "partial": "Compare",
        "signature": "t-\u003eDecoratedTree a-\u003eDecoratedTree a-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:vertexArity",
      "description": {
        "fct-descr": "\u003cp\u003eThe arity of a corolla\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "PreDecoratedTree a b -\u003e Int",
        "fct-source": "src/Math-Operad-OrderedTree.html#vertexArity",
        "fct-type": "function",
        "title": "vertexArity"
      },
      "index": {
        "description": "The arity of corolla",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "vertexArity",
        "normalized": "PreDecoratedTree a b-\u003eInt",
        "package": "Operads",
        "partial": "Arity",
        "signature": "PreDecoratedTree a b-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:vertexMap",
      "description": {
        "fct-descr": "\u003cp\u003eApply a function \u003ccode\u003ef\u003c/code\u003e to all the internal vertex labels of a PreDecoratedTree.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "(a -\u003e b) -\u003e PreDecoratedTree a c -\u003e PreDecoratedTree b c",
        "fct-source": "src/Math-Operad-OrderedTree.html#vertexMap",
        "fct-type": "function",
        "title": "vertexMap"
      },
      "index": {
        "description": "Apply function to all the internal vertex labels of PreDecoratedTree",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "vertexMap",
        "normalized": "(a-\u003eb)-\u003ePreDecoratedTree a c-\u003ePreDecoratedTree b c",
        "package": "Operads",
        "partial": "Map",
        "signature": "(a-\u003eb)-\u003ePreDecoratedTree a c-\u003ePreDecoratedTree b c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:vertexType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "!a",
        "fct-source": "src/Math-Operad-OrderedTree.html#PreDecoratedTree",
        "fct-type": "function",
        "title": "vertexType"
      },
      "index": {
        "description": "",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "vertexType",
        "normalized": "",
        "package": "Operads",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:yTree",
      "description": {
        "fct-descr": "\u003cp\u003eThe element m2(m2(1,2),m2(3,4))\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "DecoratedTree Integer",
        "fct-source": "src/Math-Operad.html#yTree",
        "fct-type": "function",
        "title": "yTree"
      },
      "index": {
        "description": "The element m2 m2 m2",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "yTree",
        "normalized": "",
        "package": "Operads",
        "partial": "Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Operads/docs/Math-Operad.html#v:zero",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the zero of the corresponding operad, with type appropriate to the given element.\n Can be given an appropriately casted undefined to construct a zero.\n\u003c/p\u003e",
        "fct-module": "Math.Operad",
        "fct-package": "Operads",
        "fct-signature": "OperadElement a n t",
        "fct-source": "src/Math-Operad-MapOperad.html#zero",
        "fct-type": "function",
        "title": "zero"
      },
      "index": {
        "description": "Return the zero of the corresponding operad with type appropriate to the given element Can be given an appropriately casted undefined to construct zero",
        "hierarchy": "Math Operad",
        "module": "Math.Operad",
        "name": "zero",
        "normalized": "",
        "package": "Operads",
        "partial": "",
        "signature": ""
      }
    }
  }
]