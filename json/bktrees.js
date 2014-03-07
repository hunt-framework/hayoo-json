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
        "word": "bktrees"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exposes the internal representation of Burkhard-Keller trees.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Set.BKTree.Internal",
          "name": "Internal",
          "package": "bktrees",
          "source": "src/Data-Set-BKTree-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "This module exposes the internal representation of Burkhard-Keller trees",
          "hierarchy": "Data Set BKTree Internal",
          "module": "Data.Set.BKTree.Internal",
          "name": "Internal",
          "package": "bktrees",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bktrees/docs/Data-Set-BKTree-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of Burkhard-Keller trees.\n\u003c/p\u003e",
          "module": "Data.Set.BKTree.Internal",
          "name": "BKTree",
          "package": "bktrees",
          "source": "src/Data-Set-BKTree-Internal.html#BKTree",
          "type": "data"
        },
        "index": {
          "description": "The type of Burkhard-Keller trees",
          "hierarchy": "Data Set BKTree Internal",
          "module": "Data.Set.BKTree.Internal",
          "name": "BKTree",
          "package": "bktrees",
          "partial": "BKTree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bktrees/docs/Data-Set-BKTree-Internal.html#t:BKTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.BKTree.Internal",
          "name": "Empty",
          "package": "bktrees",
          "signature": "Empty",
          "source": "src/Data-Set-BKTree-Internal.html#BKTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set BKTree Internal",
          "module": "Data.Set.BKTree.Internal",
          "name": "Empty",
          "package": "bktrees",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bktrees/docs/Data-Set-BKTree-Internal.html#v:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.BKTree.Internal",
          "name": "Node",
          "package": "bktrees",
          "signature": "Node a !Int (IntMap (BKTree a))",
          "source": "src/Data-Set-BKTree-Internal.html#BKTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set BKTree Internal",
          "module": "Data.Set.BKTree.Internal",
          "name": "Node",
          "package": "bktrees",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bktrees/docs/Data-Set-BKTree-Internal.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBurkhard-Keller trees provide an implementation of sets which apart\n   from the ordinary operations also has an approximate member search,\n   allowing you to search for elements that are of a distance \u003ccode\u003en\u003c/code\u003e from\n   the element you are searching for. The distance is determined using\n   a metric on the type of elements. Therefore all elements must\n   implement the \u003ccode\u003e\u003ca\u003eMetric\u003c/a\u003e\u003c/code\u003e type class, rather than the more usual\n   \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUseful metrics include the manhattan distance between two points,\n   the Levenshtein edit distance between two strings, the number of\n   edges in the shortest path between two nodes in an undirected graph\n   and the Hamming distance between two binary strings. Any euclidean\n   space also has a metric. However, in this module we use int-valued\n   metrics and that's not compatible with the metrics of euclidean \n   spaces which are real-values.\n\u003c/p\u003e\u003cp\u003eThe worst case complexity of many of these operations is quite bad,\n   but the expected behavior varies greatly with the metric. For\n   example, the discrete metric (\u003ccode\u003edistance x y | y == x = 0 |\n   otherwise = 1\u003c/code\u003e) makes BK-trees behave abysmally. The metrics\n   mentioned above should give good performance characteristics.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Set.BKTree",
          "name": "BKTree",
          "package": "bktrees",
          "source": "src/Data-Set-BKTree.html",
          "type": "module"
        },
        "index": {
          "description": "Burkhard-Keller trees provide an implementation of sets which apart from the ordinary operations also has an approximate member search allowing you to search for elements that are of distance from the element you are searching for The distance is determined using metric on the type of elements Therefore all elements must implement the Metric type class rather than the more usual Ord Useful metrics include the manhattan distance between two points the Levenshtein edit distance between two strings the number of edges in the shortest path between two nodes in an undirected graph and the Hamming distance between two binary strings Any euclidean space also has metric However in this module we use int-valued metrics and that not compatible with the metrics of euclidean spaces which are real-values The worst case complexity of many of these operations is quite bad but the expected behavior varies greatly with the metric For example the discrete metric distance otherwise makes BK-trees behave abysmally The metrics mentioned above should give good performance characteristics",
          "hierarchy": "Data Set BKTree",
          "module": "Data.Set.BKTree",
          "name": "BKTree",
          "package": "bktrees",
          "partial": "BKTree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bktrees/docs/Data-Set-BKTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of Burkhard-Keller trees.\n\u003c/p\u003e",
          "module": "Data.Set.BKTree",
          "name": "BKTree",
          "package": "bktrees",
          "source": "src/Data-Set-BKTree-Internal.html#BKTree",
          "type": "data"
        },
        "index": {
          "description": "The type of Burkhard-Keller trees",
          "hierarchy": "Data Set BKTree",
          "module": "Data.Set.BKTree",
          "name": "BKTree",
          "package": "bktrees",
          "partial": "BKTree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bktrees/docs/Data-Set-BKTree.html#t:BKTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type is \u003ccode\u003e\u003ca\u003eMetric\u003c/a\u003e\u003c/code\u003e if is has a function \u003ccode\u003e\u003ca\u003edistance\u003c/a\u003e\u003c/code\u003e which has the following\n properties:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003edistance\u003c/a\u003e\u003c/code\u003e x y \u003e= 0\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003edistance\u003c/a\u003e\u003c/code\u003e x y == 0\u003c/code\u003e if and only if \u003ccode\u003ex == y\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003edistance\u003c/a\u003e\u003c/code\u003e x y == \u003ccode\u003e\u003ca\u003edistance\u003c/a\u003e\u003c/code\u003e y x\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003edistance\u003c/a\u003e\u003c/code\u003e x z \u003c= \u003ccode\u003e\u003ca\u003edistance\u003c/a\u003e\u003c/code\u003e x y + \u003ccode\u003e\u003ca\u003edistance\u003c/a\u003e\u003c/code\u003e y z\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAll types of elements to \u003ccode\u003e\u003ca\u003eBKTree\u003c/a\u003e\u003c/code\u003e must implement \u003ccode\u003e\u003ca\u003eMetric\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis definition of a metric deviates from the mathematical one in that it\n returns an integer instead of a real number. The reason for choosing \n integers is that I wanted to avoid the rather unpredictable rounding\n of floating point numbers.\n\u003c/p\u003e",
          "module": "Data.Set.BKTree",
          "name": "Metric",
          "package": "bktrees",
          "source": "src/Data-Set-BKTree.html#Metric",
          "type": "class"
        },
        "index": {
          "description": "type is Metric if is has function distance which has the following properties distance distance if and only if distance distance distance distance distance All types of elements to BKTree must implement Metric This definition of metric deviates from the mathematical one in that it returns an integer instead of real number The reason for choosing integers is that wanted to avoid the rather unpredictable rounding of floating point numbers",
          "hierarchy": "Data Set BKTree",
          "module": "Data.Set.BKTree",
          "name": "Metric",
          "package": "bktrees",
          "partial": "Metric",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/bktrees/docs/Data-Set-BKTree.html#t:Metric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eclosest\u003c/a\u003e\u003c/code\u003e a tree\u003c/code\u003e returns the element in \u003ccode\u003etree\u003c/code\u003e which is closest to\n   \u003ccode\u003ea\u003c/code\u003e together with the distance. Returns \u003ccode\u003eNothing\u003c/code\u003e if the tree is empty.\n\u003c/p\u003e",
          "module": "Data.Set.BKTree",
          "name": "closest",
          "package": "bktrees",
          "signature": "a -\u003e BKTree a -\u003e Maybe (a, Int)",
          "source": "src/Data-Set-BKTree.html#closest",
          "type": "function"
        },
        "index": {
          "description": "closest tree returns the element in tree which is closest to together with the distance Returns Nothing if the tree is empty",
          "hierarchy": "Data Set BKTree",
          "module": "Data.Set.BKTree",
          "name": "closest",
          "normalized": "a-\u003eBKTree a-\u003eMaybe(a,Int)",
          "package": "bktrees",
          "signature": "a-\u003eBKTree a-\u003eMaybe(a,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bktrees/docs/Data-Set-BKTree.html#v:closest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves an element from the tree. If an element occurs several times in \n   the tree then only one occurrence will be deleted.\n\u003c/p\u003e",
          "module": "Data.Set.BKTree",
          "name": "delete",
          "package": "bktrees",
          "signature": "a -\u003e BKTree a -\u003e BKTree a",
          "source": "src/Data-Set-BKTree.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Removes an element from the tree If an element occurs several times in the tree then only one occurrence will be deleted",
          "hierarchy": "Data Set BKTree",
          "module": "Data.Set.BKTree",
          "name": "delete",
          "normalized": "a-\u003eBKTree a-\u003eBKTree a",
          "package": "bktrees",
          "signature": "a-\u003eBKTree a-\u003eBKTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bktrees/docs/Data-Set-BKTree.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.BKTree",
          "name": "distance",
          "package": "bktrees",
          "signature": "a -\u003e a -\u003e Int",
          "source": "src/Data-Set-BKTree.html#distance",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Set BKTree",
          "module": "Data.Set.BKTree",
          "name": "distance",
          "normalized": "a-\u003ea-\u003eInt",
          "package": "bktrees",
          "signature": "a-\u003ea-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/bktrees/docs/Data-Set-BKTree.html#v:distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns all the elements of the tree\n\u003c/p\u003e",
          "module": "Data.Set.BKTree",
          "name": "elems",
          "package": "bktrees",
          "signature": "BKTree a -\u003e [a]",
          "source": "src/Data-Set-BKTree.html#elems",
          "type": "function"
        },
        "index": {
          "description": "Returns all the elements of the tree",
          "hierarchy": "Data Set BKTree",
          "module": "Data.Set.BKTree",
          "name": "elems",
          "normalized": "BKTree a-\u003e[a]",
          "package": "bktrees",
          "signature": "BKTree a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bktrees/docs/Data-Set-BKTree.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eelemsDistance\u003c/a\u003e\u003c/code\u003e n a tree\u003c/code\u003e returns all the elements in \u003ccode\u003etree\u003c/code\u003e which are \n   at a \u003ccode\u003e\u003ca\u003edistance\u003c/a\u003e\u003c/code\u003e less than or equal to \u003ccode\u003en\u003c/code\u003e from the element \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Set.BKTree",
          "name": "elemsDistance",
          "package": "bktrees",
          "signature": "Int -\u003e a -\u003e BKTree a -\u003e [a]",
          "source": "src/Data-Set-BKTree.html#elemsDistance",
          "type": "function"
        },
        "index": {
          "description": "elemsDistance tree returns all the elements in tree which are at distance less than or equal to from the element",
          "hierarchy": "Data Set BKTree",
          "module": "Data.Set.BKTree",
          "name": "elemsDistance",
          "normalized": "Int-\u003ea-\u003eBKTree a-\u003e[a]",
          "package": "bktrees",
          "partial": "Distance",
          "signature": "Int-\u003ea-\u003eBKTree a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bktrees/docs/Data-Set-BKTree.html#v:elemsDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty tree.\n\u003c/p\u003e",
          "module": "Data.Set.BKTree",
          "name": "empty",
          "package": "bktrees",
          "signature": "BKTree a",
          "source": "src/Data-Set-BKTree.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty tree",
          "hierarchy": "Data Set BKTree",
          "module": "Data.Set.BKTree",
          "name": "empty",
          "package": "bktrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bktrees/docs/Data-Set-BKTree.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a tree from a list\n\u003c/p\u003e",
          "module": "Data.Set.BKTree",
          "name": "fromList",
          "package": "bktrees",
          "signature": "[a] -\u003e BKTree a",
          "source": "src/Data-Set-BKTree.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Constructs tree from list",
          "hierarchy": "Data Set BKTree",
          "module": "Data.Set.BKTree",
          "name": "fromList",
          "normalized": "[a]-\u003eBKTree a",
          "package": "bktrees",
          "partial": "List",
          "signature": "[a]-\u003eBKTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bktrees/docs/Data-Set-BKTree.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts an element into the tree. If an element is inserted several times\n   it will be stored several times.\n\u003c/p\u003e",
          "module": "Data.Set.BKTree",
          "name": "insert",
          "package": "bktrees",
          "signature": "a -\u003e BKTree a -\u003e BKTree a",
          "source": "src/Data-Set-BKTree.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Inserts an element into the tree If an element is inserted several times it will be stored several times",
          "hierarchy": "Data Set BKTree",
          "module": "Data.Set.BKTree",
          "name": "insert",
          "normalized": "a-\u003eBKTree a-\u003eBKTree a",
          "package": "bktrees",
          "signature": "a-\u003eBKTree a-\u003eBKTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bktrees/docs/Data-Set-BKTree.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks whether an element is in the tree.\n\u003c/p\u003e",
          "module": "Data.Set.BKTree",
          "name": "member",
          "package": "bktrees",
          "signature": "a -\u003e BKTree a -\u003e Bool",
          "source": "src/Data-Set-BKTree.html#member",
          "type": "function"
        },
        "index": {
          "description": "Checks whether an element is in the tree",
          "hierarchy": "Data Set BKTree",
          "module": "Data.Set.BKTree",
          "name": "member",
          "normalized": "a-\u003eBKTree a-\u003eBool",
          "package": "bktrees",
          "signature": "a-\u003eBKTree a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bktrees/docs/Data-Set-BKTree.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApproximate searching. \u003ccode\u003e\u003ccode\u003e\u003ca\u003ememberDistance\u003c/a\u003e\u003c/code\u003e n a tree\u003c/code\u003e will return true if\n   there is an element in \u003ccode\u003etree\u003c/code\u003e which has a \u003ccode\u003e\u003ca\u003edistance\u003c/a\u003e\u003c/code\u003e less than or equal to\n   \u003ccode\u003en\u003c/code\u003e from \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Set.BKTree",
          "name": "memberDistance",
          "package": "bktrees",
          "signature": "Int -\u003e a -\u003e BKTree a -\u003e Bool",
          "source": "src/Data-Set-BKTree.html#memberDistance",
          "type": "function"
        },
        "index": {
          "description": "Approximate searching memberDistance tree will return true if there is an element in tree which has distance less than or equal to from",
          "hierarchy": "Data Set BKTree",
          "module": "Data.Set.BKTree",
          "name": "memberDistance",
          "normalized": "Int-\u003ea-\u003eBKTree a-\u003eBool",
          "package": "bktrees",
          "partial": "Distance",
          "signature": "Int-\u003ea-\u003eBKTree a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bktrees/docs/Data-Set-BKTree.html#v:memberDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if the tree is empty.\n\u003c/p\u003e",
          "module": "Data.Set.BKTree",
          "name": "null",
          "package": "bktrees",
          "signature": "BKTree a -\u003e Bool",
          "source": "src/Data-Set-BKTree.html#null",
          "type": "function"
        },
        "index": {
          "description": "Test if the tree is empty",
          "hierarchy": "Data Set BKTree",
          "module": "Data.Set.BKTree",
          "name": "null",
          "normalized": "BKTree a-\u003eBool",
          "package": "bktrees",
          "signature": "BKTree a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bktrees/docs/Data-Set-BKTree.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe tree with a single element\n\u003c/p\u003e",
          "module": "Data.Set.BKTree",
          "name": "singleton",
          "package": "bktrees",
          "signature": "a -\u003e BKTree a",
          "source": "src/Data-Set-BKTree.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "The tree with single element",
          "hierarchy": "Data Set BKTree",
          "module": "Data.Set.BKTree",
          "name": "singleton",
          "normalized": "a-\u003eBKTree a",
          "package": "bktrees",
          "signature": "a-\u003eBKTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bktrees/docs/Data-Set-BKTree.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of the tree.\n\u003c/p\u003e",
          "module": "Data.Set.BKTree",
          "name": "size",
          "package": "bktrees",
          "signature": "BKTree a -\u003e Int",
          "source": "src/Data-Set-BKTree.html#size",
          "type": "function"
        },
        "index": {
          "description": "Size of the tree",
          "hierarchy": "Data Set BKTree",
          "module": "Data.Set.BKTree",
          "name": "size",
          "normalized": "BKTree a-\u003eInt",
          "package": "bktrees",
          "signature": "BKTree a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bktrees/docs/Data-Set-BKTree.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerges two trees\n\u003c/p\u003e",
          "module": "Data.Set.BKTree",
          "name": "union",
          "package": "bktrees",
          "signature": "BKTree a -\u003e BKTree a -\u003e BKTree a",
          "source": "src/Data-Set-BKTree.html#union",
          "type": "function"
        },
        "index": {
          "description": "Merges two trees",
          "hierarchy": "Data Set BKTree",
          "module": "Data.Set.BKTree",
          "name": "union",
          "normalized": "BKTree a-\u003eBKTree a-\u003eBKTree a",
          "package": "bktrees",
          "signature": "BKTree a-\u003eBKTree a-\u003eBKTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bktrees/docs/Data-Set-BKTree.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerges several trees\n\u003c/p\u003e",
          "module": "Data.Set.BKTree",
          "name": "unions",
          "package": "bktrees",
          "signature": "[BKTree a] -\u003e BKTree a",
          "source": "src/Data-Set-BKTree.html#unions",
          "type": "function"
        },
        "index": {
          "description": "Merges several trees",
          "hierarchy": "Data Set BKTree",
          "module": "Data.Set.BKTree",
          "name": "unions",
          "normalized": "[BKTree a]-\u003eBKTree a",
          "package": "bktrees",
          "signature": "[BKTree a]-\u003eBKTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bktrees/docs/Data-Set-BKTree.html#v:unions"
      }
    }
  ]
]