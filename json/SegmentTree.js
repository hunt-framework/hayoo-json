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
        "word": "SegmentTree"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSegment Tree implemented following section 10.3 and 10.4 of\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Mark de Berg, Otfried Cheong, Marc van Kreveld, Mark Overmars\n      \u003ca\u003eComputational Geometry, Algorithms and Applications\u003c/a\u003e, Third Edition\n      (2008) pp 231-237\n      \"Finger trees: a simple general-purpose data structure\",\n      \u003cem\u003eJournal of Functional Programming\u003c/em\u003e 16:2 (2006) pp 197-217.\n      \u003ca\u003ehttp://www.soi.city.ac.uk/~ross/papers/FingerTree.html\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAccumulation of results with monoids following \u003ca\u003eMonoids and Finger Trees\u003c/a\u003e, \n http:\u003cem/\u003eapfelmus.nfshost.com\u003cem\u003earticles\u003c/em\u003emonoid-fingertree.html\n\u003c/p\u003e\u003cp\u003eAn amortized running time is given for each operation, with \u003cem\u003en\u003c/em\u003e\n referring to the number of intervals.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SegmentTree",
          "name": "SegmentTree",
          "package": "SegmentTree",
          "source": "src/Data-SegmentTree.html",
          "type": "module"
        },
        "index": {
          "description": "Segment Tree implemented following section and of Mark de Berg Otfried Cheong Marc van Kreveld Mark Overmars Computational Geometry Algorithms and Applications Third Edition pp Finger trees simple general-purpose data structure Journal of Functional Programming pp http www.soi.city.ac.uk ross papers FingerTree.html Accumulation of results with monoids following Monoids and Finger Trees http apfelmus.nfshost.com articles monoid-fingertree.html An amortized running time is given for each operation with referring to the number of intervals",
          "hierarchy": "Data SegmentTree",
          "module": "Data.SegmentTree",
          "name": "SegmentTree",
          "package": "SegmentTree",
          "partial": "Segment Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn interval.  The lower bound should be less than or equal to the higher bound.\n\u003c/p\u003e",
          "module": "Data.SegmentTree",
          "name": "Boundary",
          "package": "SegmentTree",
          "source": "src/Data-SegmentTree-Interval.html#Boundary",
          "type": "data"
        },
        "index": {
          "description": "An interval The lower bound should be less than or equal to the higher bound",
          "hierarchy": "Data SegmentTree",
          "module": "Data.SegmentTree",
          "name": "Boundary",
          "package": "SegmentTree",
          "partial": "Boundary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#t:Boundary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SegmentTree",
          "name": "Interval",
          "package": "SegmentTree",
          "source": "src/Data-SegmentTree-Interval.html#Interval",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data SegmentTree",
          "module": "Data.SegmentTree",
          "name": "Interval",
          "package": "SegmentTree",
          "partial": "Interval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#t:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtension of the type \u003ccode\u003ev\u003c/code\u003e that includes plus and minus infinity\n\u003c/p\u003e",
          "module": "Data.SegmentTree",
          "name": "R",
          "package": "SegmentTree",
          "source": "src/Data-SegmentTree-Interval.html#R",
          "type": "data"
        },
        "index": {
          "description": "Extension of the type that includes plus and minus infinity",
          "hierarchy": "Data SegmentTree",
          "module": "Data.SegmentTree",
          "name": "R",
          "package": "SegmentTree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#t:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSegment Tree is a binary tree that stores Interval in each leaf or branch.\n By construction (see \u003ccode\u003eleaf\u003c/code\u003e and \u003ccode\u003ebranch\u003c/code\u003e) intervals in branches should be union\n of the intervals from left and right subtrees.\n\u003c/p\u003e\u003cp\u003eAdditionally, each node carries a \u003ca\u003etag\u003c/a\u003e of type \u003ca\u003et\u003c/a\u003e (which should be monoid).\n By supplying different monoids, segment tree could be made to support different types\n of stabbing queries: Sum or Integer monoid will give tree that counts hits, and list or\n Set monoids will give a tree that returns actual intervals containing point.\n\u003c/p\u003e",
          "module": "Data.SegmentTree",
          "name": "STree",
          "package": "SegmentTree",
          "source": "src/Data-SegmentTree.html#STree",
          "type": "data"
        },
        "index": {
          "description": "Segment Tree is binary tree that stores Interval in each leaf or branch By construction see leaf and branch intervals in branches should be union of the intervals from left and right subtrees Additionally each node carries tag of type which should be monoid By supplying different monoids segment tree could be made to support different types of stabbing queries Sum or Integer monoid will give tree that counts hits and list or Set monoids will give tree that returns actual intervals containing point",
          "hierarchy": "Data SegmentTree",
          "module": "Data.SegmentTree",
          "name": "STree",
          "package": "SegmentTree",
          "partial": "STree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#t:STree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SegmentTree",
          "name": "Branch",
          "package": "SegmentTree",
          "signature": "Branch !t !(Interval a) !(STree t a) !(STree t a)",
          "source": "src/Data-SegmentTree.html#STree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SegmentTree",
          "module": "Data.SegmentTree",
          "name": "Branch",
          "package": "SegmentTree",
          "partial": "Branch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:Branch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SegmentTree",
          "name": "Closed",
          "package": "SegmentTree",
          "signature": "Closed",
          "source": "src/Data-SegmentTree-Interval.html#Boundary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SegmentTree",
          "module": "Data.SegmentTree",
          "name": "Closed",
          "package": "SegmentTree",
          "partial": "Closed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:Closed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SegmentTree",
          "name": "Interval",
          "package": "SegmentTree",
          "signature": "Interval",
          "source": "src/Data-SegmentTree-Interval.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SegmentTree",
          "module": "Data.SegmentTree",
          "name": "Interval",
          "package": "SegmentTree",
          "partial": "Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SegmentTree",
          "name": "Leaf",
          "package": "SegmentTree",
          "signature": "Leaf !t !(Interval a)",
          "source": "src/Data-SegmentTree.html#STree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SegmentTree",
          "module": "Data.SegmentTree",
          "name": "Leaf",
          "package": "SegmentTree",
          "partial": "Leaf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:Leaf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SegmentTree",
          "name": "MinusInf",
          "package": "SegmentTree",
          "signature": "MinusInf",
          "source": "src/Data-SegmentTree-Interval.html#R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SegmentTree",
          "module": "Data.SegmentTree",
          "name": "MinusInf",
          "package": "SegmentTree",
          "partial": "Minus Inf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:MinusInf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SegmentTree",
          "name": "Open",
          "package": "SegmentTree",
          "signature": "Open",
          "source": "src/Data-SegmentTree-Interval.html#Boundary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SegmentTree",
          "module": "Data.SegmentTree",
          "name": "Open",
          "package": "SegmentTree",
          "partial": "Open",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:Open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SegmentTree",
          "name": "PlusInf",
          "package": "SegmentTree",
          "signature": "PlusInf",
          "source": "src/Data-SegmentTree-Interval.html#R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SegmentTree",
          "module": "Data.SegmentTree",
          "name": "PlusInf",
          "package": "SegmentTree",
          "partial": "Plus Inf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:PlusInf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SegmentTree",
          "name": "R",
          "package": "SegmentTree",
          "signature": "R !v",
          "source": "src/Data-SegmentTree-Interval.html#R",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SegmentTree",
          "module": "Data.SegmentTree",
          "name": "R",
          "package": "SegmentTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience wrapper around \u003ccode\u003e\u003ca\u003equeryTree\u003c/a\u003e\u003c/code\u003e. Returns count of intervals covering the \u003ccode\u003epoint\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.SegmentTree",
          "name": "countingQuery",
          "package": "SegmentTree",
          "signature": "STree (Sum b) a -\u003e a -\u003e b",
          "source": "src/Data-SegmentTree.html#countingQuery",
          "type": "function"
        },
        "index": {
          "description": "Convenience wrapper around queryTree Returns count of intervals covering the point",
          "hierarchy": "Data SegmentTree",
          "module": "Data.SegmentTree",
          "name": "countingQuery",
          "normalized": "STree(Sum a)b-\u003eb-\u003ea",
          "package": "SegmentTree",
          "partial": "Query",
          "signature": "STree(Sum b)a-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:countingQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild the \u003ccode\u003eSegmentTree\u003c/code\u003e for the given list of pair of points. Time: O(n*log n)\n Segment tree is built as follows:\n  * Supplied list of point pairs define so-called \u003ca\u003eatomic intervals\u003c/a\u003e  \n  * They are used to build \u003ca\u003eskeleton\u003c/a\u003e binary tree\n  * Each supplied interval is then \u003ca\u003einserted\u003c/a\u003e into this tree, updating tag values \n    in tree branches and leaves\n\u003c/p\u003e",
          "module": "Data.SegmentTree",
          "name": "fromList",
          "package": "SegmentTree",
          "signature": "[(a, a)] -\u003e STree t a",
          "source": "src/Data-SegmentTree.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Build the SegmentTree for the given list of pair of points Time log Segment tree is built as follows Supplied list of point pairs define so-called atomic intervals They are used to build skeleton binary tree Each supplied interval is then inserted into this tree updating tag values in tree branches and leaves",
          "hierarchy": "Data SegmentTree",
          "module": "Data.SegmentTree",
          "name": "fromList",
          "normalized": "[(a,a)]-\u003eSTree b a",
          "package": "SegmentTree",
          "partial": "List",
          "signature": "[(a,a)]-\u003eSTree t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SegmentTree",
          "name": "high",
          "package": "SegmentTree",
          "signature": "(R v)",
          "source": "src/Data-SegmentTree-Interval.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SegmentTree",
          "module": "Data.SegmentTree",
          "name": "high",
          "package": "SegmentTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:high"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SegmentTree",
          "name": "htype",
          "package": "SegmentTree",
          "signature": "Boundary",
          "source": "src/Data-SegmentTree-Interval.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SegmentTree",
          "module": "Data.SegmentTree",
          "name": "htype",
          "package": "SegmentTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:htype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert interval \u003ccode\u003ei\u003c/code\u003e into segment tree, updating tag values as necessary.\n Semantics of tags depends on the monoid used (see \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.SegmentTree",
          "name": "insert",
          "package": "SegmentTree",
          "signature": "STree t a -\u003e Interval a -\u003e STree t a",
          "source": "src/Data-SegmentTree.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insert interval into segment tree updating tag values as necessary Semantics of tags depends on the monoid used see fromList",
          "hierarchy": "Data SegmentTree",
          "module": "Data.SegmentTree",
          "name": "insert",
          "normalized": "STree a b-\u003eInterval b-\u003eSTree a b",
          "package": "SegmentTree",
          "signature": "STree t a-\u003eInterval a-\u003eSTree t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SegmentTree",
          "name": "low",
          "package": "SegmentTree",
          "signature": "(R v)",
          "source": "src/Data-SegmentTree-Interval.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SegmentTree",
          "module": "Data.SegmentTree",
          "name": "low",
          "package": "SegmentTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:low"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.SegmentTree",
          "name": "ltype",
          "package": "SegmentTree",
          "signature": "Boundary",
          "source": "src/Data-SegmentTree-Interval.html#Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data SegmentTree",
          "module": "Data.SegmentTree",
          "name": "ltype",
          "package": "SegmentTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:ltype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuery the segment tree for the specified point. Time: O(log n)\n\u003c/p\u003e",
          "module": "Data.SegmentTree",
          "name": "queryTree",
          "package": "SegmentTree",
          "signature": "STree t a -\u003e a -\u003e t",
          "source": "src/Data-SegmentTree.html#queryTree",
          "type": "function"
        },
        "index": {
          "description": "Query the segment tree for the specified point Time log",
          "hierarchy": "Data SegmentTree",
          "module": "Data.SegmentTree",
          "name": "queryTree",
          "normalized": "STree a b-\u003eb-\u003ea",
          "package": "SegmentTree",
          "partial": "Tree",
          "signature": "STree t a-\u003ea-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:queryTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience wrapper around \u003ccode\u003e\u003ca\u003equeryTree\u003c/a\u003e\u003c/code\u003e to perform stabbing query. Returns list of intevals coverting the point\n\u003c/p\u003e",
          "module": "Data.SegmentTree",
          "name": "stabbingQuery",
          "package": "SegmentTree",
          "signature": "STree [Interval a] a -\u003e a -\u003e [Interval a]",
          "source": "src/Data-SegmentTree.html#stabbingQuery",
          "type": "function"
        },
        "index": {
          "description": "Convenience wrapper around queryTree to perform stabbing query Returns list of intevals coverting the point",
          "hierarchy": "Data SegmentTree",
          "module": "Data.SegmentTree",
          "name": "stabbingQuery",
          "normalized": "STree[Interval a]a-\u003ea-\u003e[Interval a]",
          "package": "SegmentTree",
          "partial": "Query",
          "signature": "STree[Interval a]a-\u003ea-\u003e[Interval a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:stabbingQuery"
      }
    }
  ]
]