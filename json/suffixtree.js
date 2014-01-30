[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/suffixtree/docs/Data-SuffixTree.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA lazy, efficient suffix tree implementation.\n\u003c/p\u003e\u003cp\u003eSince many function names (but not the type name) clash with\n \u003ca\u003ePrelude\u003c/a\u003e names, this module is usually imported \u003ccode\u003equalified\u003c/code\u003e, e.g.\n\u003c/p\u003e\u003cpre\u003e  import Data.SuffixTree (STree)\n  import qualified Data.SuffixTree as T\n\u003c/pre\u003e\u003cp\u003eThe implementation is based on the first of those described in the\n following paper:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Robert Giegerich and Stefan Kurtz, \"/A comparison of\n     imperative and purely functional suffix tree constructions/\",\n     Science of Computer Programming 25(2-3):187-218, 1995,\n     \u003ca\u003ehttp://citeseer.ist.psu.edu/giegerich95comparison.html\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThis implementation constructs the suffix tree lazily, so subtrees\n are not created until they are traversed.  Two construction\n functions are provided, \u003ccode\u003e\u003ca\u003econstructWith\u003c/a\u003e\u003c/code\u003e for sequences composed of\n small alphabets, and \u003ccode\u003e\u003ca\u003econstruct\u003c/a\u003e\u003c/code\u003e for larger alphabets.\n\u003c/p\u003e\u003cp\u003eEstimates are given for performance.  The value \u003cem\u003ek\u003c/em\u003e is a constant;\n \u003cem\u003en\u003c/em\u003e is the length of a query string; and \u003cem\u003et\u003c/em\u003e is the number of\n elements (nodes and leaves) in a suffix tree.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.SuffixTree",
        "fct-package": "suffixtree",
        "fct-signature": "module",
        "fct-source": "src/Data-SuffixTree.html",
        "fct-type": "module",
        "title": "SuffixTree"
      },
      "index": {
        "description": "lazy efficient suffix tree implementation Since many function names but not the type name clash with Prelude names this module is usually imported qualified e.g import Data.SuffixTree STree import qualified Data.SuffixTree as The implementation is based on the first of those described in the following paper Robert Giegerich and Stefan Kurtz comparison of imperative and purely functional suffix tree constructions Science of Computer Programming http citeseer.ist.psu.edu giegerich95comparison.html This implementation constructs the suffix tree lazily so subtrees are not created until they are traversed Two construction functions are provided constructWith for sequences composed of small alphabets and construct for larger alphabets Estimates are given for performance The value is constant is the length of query string and is the number of elements nodes and leaves in suffix tree",
        "hierarchy": "Data SuffixTree",
        "module": "Data.SuffixTree",
        "name": "SuffixTree",
        "normalized": "",
        "package": "suffixtree",
        "partial": "Suffix Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/suffixtree/docs/Data-SuffixTree.html#t:Alphabet",
      "description": {
        "fct-descr": "\u003cp\u003eThe list of symbols that \u003ccode\u003e\u003ca\u003econstructWith\u003c/a\u003e\u003c/code\u003e can possibly see in its\n input.\n\u003c/p\u003e",
        "fct-module": "Data.SuffixTree",
        "fct-package": "suffixtree",
        "fct-signature": "type",
        "fct-source": "src/Data-SuffixTree.html#Alphabet",
        "fct-type": "type",
        "title": "Alphabet"
      },
      "index": {
        "description": "The list of symbols that constructWith can possibly see in its input",
        "hierarchy": "Data SuffixTree",
        "module": "Data.SuffixTree",
        "name": "Alphabet",
        "normalized": "",
        "package": "suffixtree",
        "partial": "Alphabet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/suffixtree/docs/Data-SuffixTree.html#t:Edge",
      "description": {
        "fct-descr": "\u003cp\u003eAn edge in the suffix tree.\n\u003c/p\u003e",
        "fct-module": "Data.SuffixTree",
        "fct-package": "suffixtree",
        "fct-signature": "type",
        "fct-source": "src/Data-SuffixTree.html#Edge",
        "fct-type": "type",
        "title": "Edge"
      },
      "index": {
        "description": "An edge in the suffix tree",
        "hierarchy": "Data SuffixTree",
        "module": "Data.SuffixTree",
        "name": "Edge",
        "normalized": "",
        "package": "suffixtree",
        "partial": "Edge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/suffixtree/docs/Data-SuffixTree.html#t:Prefix",
      "description": {
        "fct-descr": "\u003cp\u003eThe prefix string associated with an \u003ccode\u003e\u003ca\u003eEdge\u003c/a\u003e\u003c/code\u003e.  Use \u003ccode\u003e\u003ca\u003emkPrefix\u003c/a\u003e\u003c/code\u003e to\n create a value of this type, and \u003ccode\u003e\u003ca\u003eprefix\u003c/a\u003e\u003c/code\u003e to deconstruct one.\n\u003c/p\u003e",
        "fct-module": "Data.SuffixTree",
        "fct-package": "suffixtree",
        "fct-signature": "data",
        "fct-source": "src/Data-SuffixTree.html#Prefix",
        "fct-type": "data",
        "title": "Prefix"
      },
      "index": {
        "description": "The prefix string associated with an Edge Use mkPrefix to create value of this type and prefix to deconstruct one",
        "hierarchy": "Data SuffixTree",
        "module": "Data.SuffixTree",
        "name": "Prefix",
        "normalized": "",
        "package": "suffixtree",
        "partial": "Prefix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/suffixtree/docs/Data-SuffixTree.html#t:STree",
      "description": {
        "fct-descr": "\u003cp\u003eThe suffix tree type.  The implementation is exposed to ease the\n development of custom traversal functions.  Note that \u003ccode\u003e(\u003ccode\u003e\u003ca\u003ePrefix\u003c/a\u003e\u003c/code\u003e a,\n \u003ccode\u003e\u003ca\u003eSTree\u003c/a\u003e\u003c/code\u003e a)\u003c/code\u003e pairs are not stored in any order.\n\u003c/p\u003e",
        "fct-module": "Data.SuffixTree",
        "fct-package": "suffixtree",
        "fct-signature": "data",
        "fct-source": "src/Data-SuffixTree.html#STree",
        "fct-type": "data",
        "title": "STree"
      },
      "index": {
        "description": "The suffix tree type The implementation is exposed to ease the development of custom traversal functions Note that Prefix STree pairs are not stored in any order",
        "hierarchy": "Data SuffixTree",
        "module": "Data.SuffixTree",
        "name": "STree",
        "normalized": "",
        "package": "suffixtree",
        "partial": "STree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/suffixtree/docs/Data-SuffixTree.html#v:Leaf",
      "description": {
        "fct-module": "Data.SuffixTree",
        "fct-package": "suffixtree",
        "fct-signature": "Leaf",
        "fct-source": "src/Data-SuffixTree.html#STree",
        "fct-type": "function",
        "title": "Leaf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SuffixTree",
        "module": "Data.SuffixTree",
        "name": "Leaf",
        "normalized": "",
        "package": "suffixtree",
        "partial": "Leaf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/suffixtree/docs/Data-SuffixTree.html#v:Node",
      "description": {
        "fct-module": "Data.SuffixTree",
        "fct-package": "suffixtree",
        "fct-signature": "Node [Edge a]",
        "fct-source": "src/Data-SuffixTree.html#STree",
        "fct-type": "function",
        "title": "Node"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SuffixTree",
        "module": "Data.SuffixTree",
        "name": "Node",
        "normalized": "Node[Edge a]",
        "package": "suffixtree",
        "partial": "Node",
        "signature": "Node[Edge a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/suffixtree/docs/Data-SuffixTree.html#v:construct",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n log n)\u003c/em\u003e.  Constructs a suffix tree.\n\u003c/p\u003e",
        "fct-module": "Data.SuffixTree",
        "fct-package": "suffixtree",
        "fct-signature": "[a] -\u003e STree a",
        "fct-source": "src/Data-SuffixTree.html#construct",
        "fct-type": "function",
        "title": "construct"
      },
      "index": {
        "description": "log Constructs suffix tree",
        "hierarchy": "Data SuffixTree",
        "module": "Data.SuffixTree",
        "name": "construct",
        "normalized": "[a]-\u003eSTree a",
        "package": "suffixtree",
        "partial": "",
        "signature": "[a]-\u003eSTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/suffixtree/docs/Data-SuffixTree.html#v:constructWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(k n log n)\u003c/em\u003e.  Constructs a suffix tree using the given\n alphabet.  The performance of this function is linear in the size\n \u003cem\u003ek\u003c/em\u003e of the alphabet.  That makes this function suitable for small\n alphabets, such as DNA nucleotides.  For an alphabet containing\n more than a few symbols, \u003ccode\u003e\u003ca\u003econstruct\u003c/a\u003e\u003c/code\u003e is usually several orders of\n magnitude faster.\n\u003c/p\u003e",
        "fct-module": "Data.SuffixTree",
        "fct-package": "suffixtree",
        "fct-signature": "Alphabet a -\u003e [a] -\u003e STree a",
        "fct-source": "src/Data-SuffixTree.html#constructWith",
        "fct-type": "function",
        "title": "constructWith"
      },
      "index": {
        "description": "log Constructs suffix tree using the given alphabet The performance of this function is linear in the size of the alphabet That makes this function suitable for small alphabets such as DNA nucleotides For an alphabet containing more than few symbols construct is usually several orders of magnitude faster",
        "hierarchy": "Data SuffixTree",
        "module": "Data.SuffixTree",
        "name": "constructWith",
        "normalized": "Alphabet a-\u003e[a]-\u003eSTree a",
        "package": "suffixtree",
        "partial": "With",
        "signature": "Alphabet a-\u003e[a]-\u003eSTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/suffixtree/docs/Data-SuffixTree.html#v:countLeaves",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(t)\u003c/em\u003e. Count the number of leaves in a tree.\n\u003c/p\u003e\u003cp\u003ePerformance is linear in the number \u003cem\u003et\u003c/em\u003e of elements in the tree.\n\u003c/p\u003e",
        "fct-module": "Data.SuffixTree",
        "fct-package": "suffixtree",
        "fct-signature": "STree a -\u003e Int",
        "fct-source": "src/Data-SuffixTree.html#countLeaves",
        "fct-type": "function",
        "title": "countLeaves"
      },
      "index": {
        "description": "Count the number of leaves in tree Performance is linear in the number of elements in the tree",
        "hierarchy": "Data SuffixTree",
        "module": "Data.SuffixTree",
        "name": "countLeaves",
        "normalized": "STree a-\u003eInt",
        "package": "suffixtree",
        "partial": "Leaves",
        "signature": "STree a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/suffixtree/docs/Data-SuffixTree.html#v:countRepeats",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n + r)\u003c/em\u003e. Count the number of times a sequence is repeated\n in the input sequence that was used to construct the suffix tree.\n\u003c/p\u003e\u003cp\u003ePerformance is linear in the length \u003cem\u003en\u003c/em\u003e of the input sequence, plus\n the number of times \u003cem\u003er\u003c/em\u003e the sequence is repeated.\n\u003c/p\u003e",
        "fct-module": "Data.SuffixTree",
        "fct-package": "suffixtree",
        "fct-signature": "[a] -\u003e STree a -\u003e Int",
        "fct-source": "src/Data-SuffixTree.html#countRepeats",
        "fct-type": "function",
        "title": "countRepeats"
      },
      "index": {
        "description": "Count the number of times sequence is repeated in the input sequence that was used to construct the suffix tree Performance is linear in the length of the input sequence plus the number of times the sequence is repeated",
        "hierarchy": "Data SuffixTree",
        "module": "Data.SuffixTree",
        "name": "countRepeats",
        "normalized": "[a]-\u003eSTree a-\u003eInt",
        "package": "suffixtree",
        "partial": "Repeats",
        "signature": "[a]-\u003eSTree a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/suffixtree/docs/Data-SuffixTree.html#v:elem",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Indicates whether the suffix tree contains the given\n sublist.  Performance is linear in the length \u003cem\u003en\u003c/em\u003e of the\n sublist.\n\u003c/p\u003e",
        "fct-module": "Data.SuffixTree",
        "fct-package": "suffixtree",
        "fct-signature": "[a] -\u003e STree a -\u003e Bool",
        "fct-source": "src/Data-SuffixTree.html#elem",
        "fct-type": "function",
        "title": "elem"
      },
      "index": {
        "description": "Indicates whether the suffix tree contains the given sublist Performance is linear in the length of the sublist",
        "hierarchy": "Data SuffixTree",
        "module": "Data.SuffixTree",
        "name": "elem",
        "normalized": "[a]-\u003eSTree a-\u003eBool",
        "package": "suffixtree",
        "partial": "",
        "signature": "[a]-\u003eSTree a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/suffixtree/docs/Data-SuffixTree.html#v:findEdge",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e.  Finds the given subsequence in the suffix tree.  On\n failure, returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.  On success, returns the \u003ccode\u003e\u003ca\u003eEdge\u003c/a\u003e\u003c/code\u003e in the\n suffix tree at which the subsequence ends, along with the number of\n elements to drop from the prefix of the \u003ccode\u003e\u003ca\u003eEdge\u003c/a\u003e\u003c/code\u003e to get the \"real\"\n remaining prefix.\n\u003c/p\u003e\u003cp\u003eHere is an example:\n\u003c/p\u003e\u003cpre\u003e\u003e find \"ssip\" (construct \"mississippi\")\nJust ((mkPrefix \"ppi\",Leaf),1)\n\u003c/pre\u003e\u003cp\u003eThis indicates that the edge \u003ccode\u003e(\u003ccode\u003e\u003ca\u003emkPrefix\u003c/a\u003e\u003c/code\u003e \"ppi\",\u003ccode\u003e\u003ca\u003eLeaf\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e matches,\n and that we must strip 1 character from the string \u003ccode\u003e\"ppi\"\u003c/code\u003e to get\n the remaining prefix string \u003ccode\u003e\"pi\"\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003ePerformance is linear in the length \u003cem\u003en\u003c/em\u003e of the query list.\n\u003c/p\u003e",
        "fct-module": "Data.SuffixTree",
        "fct-package": "suffixtree",
        "fct-signature": "[a] -\u003e STree a -\u003e Maybe (Edge a, Int)",
        "fct-source": "src/Data-SuffixTree.html#findEdge",
        "fct-type": "function",
        "title": "findEdge"
      },
      "index": {
        "description": "Finds the given subsequence in the suffix tree On failure returns Nothing On success returns the Edge in the suffix tree at which the subsequence ends along with the number of elements to drop from the prefix of the Edge to get the real remaining prefix Here is an example find ssip construct mississippi Just mkPrefix ppi Leaf This indicates that the edge mkPrefix ppi Leaf matches and that we must strip character from the string ppi to get the remaining prefix string pi Performance is linear in the length of the query list",
        "hierarchy": "Data SuffixTree",
        "module": "Data.SuffixTree",
        "name": "findEdge",
        "normalized": "[a]-\u003eSTree a-\u003eMaybe(Edge a,Int)",
        "package": "suffixtree",
        "partial": "Edge",
        "signature": "[a]-\u003eSTree a-\u003eMaybe(Edge a,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/suffixtree/docs/Data-SuffixTree.html#v:findPath",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Returns the path from the \u003ccode\u003e\u003ca\u003eEdge\u003c/a\u003e\u003c/code\u003e in the suffix tree at\n which the given subsequence ends, up to the root of the tree.  If\n the subsequence is not found, returns the empty list.\n\u003c/p\u003e\u003cp\u003ePerformance is linear in the length of the query list.\n\u003c/p\u003e",
        "fct-module": "Data.SuffixTree",
        "fct-package": "suffixtree",
        "fct-signature": "[a] -\u003e STree a -\u003e [Edge a]",
        "fct-source": "src/Data-SuffixTree.html#findPath",
        "fct-type": "function",
        "title": "findPath"
      },
      "index": {
        "description": "Returns the path from the Edge in the suffix tree at which the given subsequence ends up to the root of the tree If the subsequence is not found returns the empty list Performance is linear in the length of the query list",
        "hierarchy": "Data SuffixTree",
        "module": "Data.SuffixTree",
        "name": "findPath",
        "normalized": "[a]-\u003eSTree a-\u003e[Edge a]",
        "package": "suffixtree",
        "partial": "Path",
        "signature": "[a]-\u003eSTree a-\u003e[Edge a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/suffixtree/docs/Data-SuffixTree.html#v:findTree",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Finds the subtree rooted at the end of the given query\n sequence.  On failure, returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003ePerformance is linear in the length \u003cem\u003en\u003c/em\u003e of the query list.\n\u003c/p\u003e",
        "fct-module": "Data.SuffixTree",
        "fct-package": "suffixtree",
        "fct-signature": "[a] -\u003e STree a -\u003e Maybe (STree a)",
        "fct-source": "src/Data-SuffixTree.html#findTree",
        "fct-type": "function",
        "title": "findTree"
      },
      "index": {
        "description": "Finds the subtree rooted at the end of the given query sequence On failure returns Nothing Performance is linear in the length of the query list",
        "hierarchy": "Data SuffixTree",
        "module": "Data.SuffixTree",
        "name": "findTree",
        "normalized": "[a]-\u003eSTree a-\u003eMaybe(STree a)",
        "package": "suffixtree",
        "partial": "Tree",
        "signature": "[a]-\u003eSTree a-\u003eMaybe(STree a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/suffixtree/docs/Data-SuffixTree.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(t)\u003c/em\u003e. Generic fold over a tree.\n\u003c/p\u003e\u003cp\u003eA few simple examples.\n\u003c/p\u003e\u003cpre\u003ecountLeaves == fold id id (const const) (1+) 0\n\u003c/pre\u003e\u003cpre\u003ecountEdges = fold id id (\\_ a _ -\u003e a+1) id 0\n\u003c/pre\u003e\u003cp\u003eThis more complicated example generates a tree of the same shape,\n but new type, with annotated leaves.\n\u003c/p\u003e\u003cpre\u003e\ndata GenTree a b = GenNode [(\u003ccode\u003e\u003ca\u003ePrefix\u003c/a\u003e\u003c/code\u003e a, GenTree a b)]\n                 | GenLeaf b\n                   deriving (\u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e)\n\u003c/pre\u003e\u003cpre\u003e\ngentree :: \u003ccode\u003e\u003ca\u003eSTree\u003c/a\u003e\u003c/code\u003e a -\u003e GenTree a Int\ngentree = \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e reset id fprefix reset leaf\n    where leaf = GenLeaf 1\n          reset = \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e leaf\n          fprefix p t (GenLeaf _) = GenNode [(p, t)]\n          fprefix p t (GenNode es) = GenNode ((p, t):es)\n\u003c/pre\u003e",
        "fct-module": "Data.SuffixTree",
        "fct-package": "suffixtree",
        "fct-signature": "(a -\u003e a)-\u003e (a -\u003e a)-\u003e (Prefix b -\u003e a -\u003e a -\u003e a)-\u003e (a -\u003e a)-\u003e a-\u003e STree b-\u003e a",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Generic fold over tree few simple examples countLeaves fold id id const const countEdges fold id id id This more complicated example generates tree of the same shape but new type with annotated leaves data GenTree GenNode Prefix GenTree GenLeaf deriving Show gentree STree GenTree Int gentree fold reset id fprefix reset leaf where leaf GenLeaf reset const leaf fprefix GenLeaf GenNode fprefix GenNode es GenNode es",
        "hierarchy": "Data SuffixTree",
        "module": "Data.SuffixTree",
        "name": "fold",
        "normalized": "(a-\u003ea)-\u003e(a-\u003ea)-\u003e(Prefix b-\u003ea-\u003ea-\u003ea)-\u003e(a-\u003ea)-\u003ea-\u003eSTree b-\u003ea",
        "package": "suffixtree",
        "partial": "",
        "signature": "(a-\u003ea)-\u003e(a-\u003ea)-\u003e(Prefix b-\u003ea-\u003ea-\u003ea)-\u003e(a-\u003ea)-\u003ea-\u003eSTree b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/suffixtree/docs/Data-SuffixTree.html#v:foldl",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(t)\u003c/em\u003e. Folds the edges in a tree, using pre-order traversal.  The\n step function is evaluated strictly.\n\u003c/p\u003e",
        "fct-module": "Data.SuffixTree",
        "fct-package": "suffixtree",
        "fct-signature": "(a -\u003e Prefix b -\u003e a)-\u003e a-\u003e STree b-\u003e a",
        "fct-type": "function",
        "title": "foldl"
      },
      "index": {
        "description": "Folds the edges in tree using pre-order traversal The step function is evaluated strictly",
        "hierarchy": "Data SuffixTree",
        "module": "Data.SuffixTree",
        "name": "foldl",
        "normalized": "(a-\u003ePrefix b-\u003ea)-\u003ea-\u003eSTree b-\u003ea",
        "package": "suffixtree",
        "partial": "",
        "signature": "(a-\u003ePrefix b-\u003ea)-\u003ea-\u003eSTree b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/suffixtree/docs/Data-SuffixTree.html#v:foldr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(t)\u003c/em\u003e. Folds the edges in a tree, using post-order traversal.\n Suitable for lazy use.\n\u003c/p\u003e",
        "fct-module": "Data.SuffixTree",
        "fct-package": "suffixtree",
        "fct-signature": "(Prefix a -\u003e b -\u003e b) -\u003e b -\u003e STree a -\u003e b",
        "fct-source": "src/Data-SuffixTree.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "Folds the edges in tree using post-order traversal Suitable for lazy use",
        "hierarchy": "Data SuffixTree",
        "module": "Data.SuffixTree",
        "name": "foldr",
        "normalized": "(Prefix a-\u003eb-\u003eb)-\u003eb-\u003eSTree a-\u003eb",
        "package": "suffixtree",
        "partial": "",
        "signature": "(Prefix a-\u003eb-\u003eb)-\u003eb-\u003eSTree a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/suffixtree/docs/Data-SuffixTree.html#v:mkPrefix",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Construct a \u003ccode\u003e\u003ca\u003ePrefix\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
        "fct-module": "Data.SuffixTree",
        "fct-package": "suffixtree",
        "fct-signature": "[a] -\u003e Prefix a",
        "fct-source": "src/Data-SuffixTree.html#mkPrefix",
        "fct-type": "function",
        "title": "mkPrefix"
      },
      "index": {
        "description": "Construct Prefix value",
        "hierarchy": "Data SuffixTree",
        "module": "Data.SuffixTree",
        "name": "mkPrefix",
        "normalized": "[a]-\u003ePrefix a",
        "package": "suffixtree",
        "partial": "Prefix",
        "signature": "[a]-\u003ePrefix a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/suffixtree/docs/Data-SuffixTree.html#v:prefix",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Obtain the list stored in a \u003ccode\u003e\u003ca\u003ePrefix\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.SuffixTree",
        "fct-package": "suffixtree",
        "fct-signature": "Prefix a -\u003e [a]",
        "fct-source": "src/Data-SuffixTree.html#prefix",
        "fct-type": "function",
        "title": "prefix"
      },
      "index": {
        "description": "Obtain the list stored in Prefix",
        "hierarchy": "Data SuffixTree",
        "module": "Data.SuffixTree",
        "name": "prefix",
        "normalized": "Prefix a-\u003e[a]",
        "package": "suffixtree",
        "partial": "",
        "signature": "Prefix a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/suffixtree/docs/Data-SuffixTree.html#v:suffixes",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Returns all non-empty suffixes of the argument, longest\n first.  Behaves as follows:\n\u003c/p\u003e\u003cpre\u003esuffixes xs == init (tails xs)\n\u003c/pre\u003e",
        "fct-module": "Data.SuffixTree",
        "fct-package": "suffixtree",
        "fct-signature": "[a] -\u003e [[a]]",
        "fct-source": "src/Data-SuffixTree.html#suffixes",
        "fct-type": "function",
        "title": "suffixes"
      },
      "index": {
        "description": "Returns all non-empty suffixes of the argument longest first Behaves as follows suffixes xs init tails xs",
        "hierarchy": "Data SuffixTree",
        "module": "Data.SuffixTree",
        "name": "suffixes",
        "normalized": "[a]-\u003e[[a]]",
        "package": "suffixtree",
        "partial": "",
        "signature": "[a]-\u003e[[a]]"
      }
    }
  }
]