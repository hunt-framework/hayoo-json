[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSegment Tree implemented following section 10.3 and 10.4 of\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Mark de Berg, Otfried Cheong, Marc van Kreveld, Mark Overmars\n      \u003ca\u003eComputational Geometry, Algorithms and Applications\u003c/a\u003e, Third Edition\n      (2008) pp 231-237\n      \"Finger trees: a simple general-purpose data structure\",\n      \u003cem\u003eJournal of Functional Programming\u003c/em\u003e 16:2 (2006) pp 197-217.\n      \u003ca\u003ehttp://www.soi.city.ac.uk/~ross/papers/FingerTree.html\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAccumulation of results with monoids following \u003ca\u003eMonoids and Finger Trees\u003c/a\u003e, \n http:\u003cem/\u003eapfelmus.nfshost.com\u003cem\u003earticles\u003c/em\u003emonoid-fingertree.html\n\u003c/p\u003e\u003cp\u003eAn amortized running time is given for each operation, with \u003cem\u003en\u003c/em\u003e\n referring to the number of intervals.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.SegmentTree",
        "fct-package": "SegmentTree",
        "fct-signature": "module",
        "fct-source": "src/Data-SegmentTree.html",
        "fct-type": "module",
        "title": "SegmentTree"
      },
      "index": {
        "description": "Segment Tree implemented following section and of Mark de Berg Otfried Cheong Marc van Kreveld Mark Overmars Computational Geometry Algorithms and Applications Third Edition pp Finger trees simple general-purpose data structure Journal of Functional Programming pp http www.soi.city.ac.uk ross papers FingerTree.html Accumulation of results with monoids following Monoids and Finger Trees http apfelmus.nfshost.com articles monoid-fingertree.html An amortized running time is given for each operation with referring to the number of intervals",
        "hierarchy": "Data SegmentTree",
        "module": "Data.SegmentTree",
        "name": "SegmentTree",
        "normalized": "",
        "package": "SegmentTree",
        "partial": "Segment Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#t:Boundary",
      "description": {
        "fct-descr": "\u003cp\u003eAn interval.  The lower bound should be less than or equal to the higher bound.\n\u003c/p\u003e",
        "fct-module": "Data.SegmentTree",
        "fct-package": "SegmentTree",
        "fct-signature": "data",
        "fct-source": "src/Data-SegmentTree-Interval.html#Boundary",
        "fct-type": "data",
        "title": "Boundary"
      },
      "index": {
        "description": "An interval The lower bound should be less than or equal to the higher bound",
        "hierarchy": "Data SegmentTree",
        "module": "Data.SegmentTree",
        "name": "Boundary",
        "normalized": "",
        "package": "SegmentTree",
        "partial": "Boundary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#t:Interval",
      "description": {
        "fct-module": "Data.SegmentTree",
        "fct-package": "SegmentTree",
        "fct-signature": "data",
        "fct-source": "src/Data-SegmentTree-Interval.html#Interval",
        "fct-type": "data",
        "title": "Interval"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SegmentTree",
        "module": "Data.SegmentTree",
        "name": "Interval",
        "normalized": "",
        "package": "SegmentTree",
        "partial": "Interval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#t:R",
      "description": {
        "fct-descr": "\u003cp\u003eExtension of the type \u003ccode\u003ev\u003c/code\u003e that includes plus and minus infinity\n\u003c/p\u003e",
        "fct-module": "Data.SegmentTree",
        "fct-package": "SegmentTree",
        "fct-signature": "data",
        "fct-source": "src/Data-SegmentTree-Interval.html#R",
        "fct-type": "data",
        "title": "R"
      },
      "index": {
        "description": "Extension of the type that includes plus and minus infinity",
        "hierarchy": "Data SegmentTree",
        "module": "Data.SegmentTree",
        "name": "R",
        "normalized": "",
        "package": "SegmentTree",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#t:STree",
      "description": {
        "fct-descr": "\u003cp\u003eSegment Tree is a binary tree that stores Interval in each leaf or branch.\n By construction (see \u003ccode\u003eleaf\u003c/code\u003e and \u003ccode\u003ebranch\u003c/code\u003e) intervals in branches should be union\n of the intervals from left and right subtrees.\n\u003c/p\u003e\u003cp\u003eAdditionally, each node carries a \u003ca\u003etag\u003c/a\u003e of type \u003ca\u003et\u003c/a\u003e (which should be monoid).\n By supplying different monoids, segment tree could be made to support different types\n of stabbing queries: Sum or Integer monoid will give tree that counts hits, and list or\n Set monoids will give a tree that returns actual intervals containing point.\n\u003c/p\u003e",
        "fct-module": "Data.SegmentTree",
        "fct-package": "SegmentTree",
        "fct-signature": "data",
        "fct-source": "src/Data-SegmentTree.html#STree",
        "fct-type": "data",
        "title": "STree"
      },
      "index": {
        "description": "Segment Tree is binary tree that stores Interval in each leaf or branch By construction see leaf and branch intervals in branches should be union of the intervals from left and right subtrees Additionally each node carries tag of type which should be monoid By supplying different monoids segment tree could be made to support different types of stabbing queries Sum or Integer monoid will give tree that counts hits and list or Set monoids will give tree that returns actual intervals containing point",
        "hierarchy": "Data SegmentTree",
        "module": "Data.SegmentTree",
        "name": "STree",
        "normalized": "",
        "package": "SegmentTree",
        "partial": "STree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:Branch",
      "description": {
        "fct-module": "Data.SegmentTree",
        "fct-package": "SegmentTree",
        "fct-signature": "Branch !t !(Interval a) !(STree t a) !(STree t a)",
        "fct-source": "src/Data-SegmentTree.html#STree",
        "fct-type": "function",
        "title": "Branch"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SegmentTree",
        "module": "Data.SegmentTree",
        "name": "Branch",
        "normalized": "",
        "package": "SegmentTree",
        "partial": "Branch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:Closed",
      "description": {
        "fct-module": "Data.SegmentTree",
        "fct-package": "SegmentTree",
        "fct-signature": "Closed",
        "fct-source": "src/Data-SegmentTree-Interval.html#Boundary",
        "fct-type": "function",
        "title": "Closed"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SegmentTree",
        "module": "Data.SegmentTree",
        "name": "Closed",
        "normalized": "",
        "package": "SegmentTree",
        "partial": "Closed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:Interval",
      "description": {
        "fct-module": "Data.SegmentTree",
        "fct-package": "SegmentTree",
        "fct-signature": "Interval",
        "fct-source": "src/Data-SegmentTree-Interval.html#Interval",
        "fct-type": "function",
        "title": "Interval"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SegmentTree",
        "module": "Data.SegmentTree",
        "name": "Interval",
        "normalized": "",
        "package": "SegmentTree",
        "partial": "Interval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:Leaf",
      "description": {
        "fct-module": "Data.SegmentTree",
        "fct-package": "SegmentTree",
        "fct-signature": "Leaf !t !(Interval a)",
        "fct-source": "src/Data-SegmentTree.html#STree",
        "fct-type": "function",
        "title": "Leaf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SegmentTree",
        "module": "Data.SegmentTree",
        "name": "Leaf",
        "normalized": "",
        "package": "SegmentTree",
        "partial": "Leaf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:MinusInf",
      "description": {
        "fct-module": "Data.SegmentTree",
        "fct-package": "SegmentTree",
        "fct-signature": "MinusInf",
        "fct-source": "src/Data-SegmentTree-Interval.html#R",
        "fct-type": "function",
        "title": "MinusInf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SegmentTree",
        "module": "Data.SegmentTree",
        "name": "MinusInf",
        "normalized": "",
        "package": "SegmentTree",
        "partial": "Minus Inf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:Open",
      "description": {
        "fct-module": "Data.SegmentTree",
        "fct-package": "SegmentTree",
        "fct-signature": "Open",
        "fct-source": "src/Data-SegmentTree-Interval.html#Boundary",
        "fct-type": "function",
        "title": "Open"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SegmentTree",
        "module": "Data.SegmentTree",
        "name": "Open",
        "normalized": "",
        "package": "SegmentTree",
        "partial": "Open",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:PlusInf",
      "description": {
        "fct-module": "Data.SegmentTree",
        "fct-package": "SegmentTree",
        "fct-signature": "PlusInf",
        "fct-source": "src/Data-SegmentTree-Interval.html#R",
        "fct-type": "function",
        "title": "PlusInf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SegmentTree",
        "module": "Data.SegmentTree",
        "name": "PlusInf",
        "normalized": "",
        "package": "SegmentTree",
        "partial": "Plus Inf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:R",
      "description": {
        "fct-module": "Data.SegmentTree",
        "fct-package": "SegmentTree",
        "fct-signature": "R !v",
        "fct-source": "src/Data-SegmentTree-Interval.html#R",
        "fct-type": "function",
        "title": "R"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SegmentTree",
        "module": "Data.SegmentTree",
        "name": "R",
        "normalized": "",
        "package": "SegmentTree",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:countingQuery",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience wrapper around \u003ccode\u003e\u003ca\u003equeryTree\u003c/a\u003e\u003c/code\u003e. Returns count of intervals covering the \u003ccode\u003epoint\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.SegmentTree",
        "fct-package": "SegmentTree",
        "fct-signature": "STree (Sum b) a -\u003e a -\u003e b",
        "fct-source": "src/Data-SegmentTree.html#countingQuery",
        "fct-type": "function",
        "title": "countingQuery"
      },
      "index": {
        "description": "Convenience wrapper around queryTree Returns count of intervals covering the point",
        "hierarchy": "Data SegmentTree",
        "module": "Data.SegmentTree",
        "name": "countingQuery",
        "normalized": "STree(Sum a)b-\u003eb-\u003ea",
        "package": "SegmentTree",
        "partial": "Query",
        "signature": "STree(Sum b)a-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eBuild the \u003ccode\u003eSegmentTree\u003c/code\u003e for the given list of pair of points. Time: O(n*log n)\n Segment tree is built as follows:\n  * Supplied list of point pairs define so-called \u003ca\u003eatomic intervals\u003c/a\u003e  \n  * They are used to build \u003ca\u003eskeleton\u003c/a\u003e binary tree\n  * Each supplied interval is then \u003ca\u003einserted\u003c/a\u003e into this tree, updating tag values \n    in tree branches and leaves\n\u003c/p\u003e",
        "fct-module": "Data.SegmentTree",
        "fct-package": "SegmentTree",
        "fct-signature": "[(a, a)] -\u003e STree t a",
        "fct-source": "src/Data-SegmentTree.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Build the SegmentTree for the given list of pair of points Time log Segment tree is built as follows Supplied list of point pairs define so-called atomic intervals They are used to build skeleton binary tree Each supplied interval is then inserted into this tree updating tag values in tree branches and leaves",
        "hierarchy": "Data SegmentTree",
        "module": "Data.SegmentTree",
        "name": "fromList",
        "normalized": "[(a,a)]-\u003eSTree b a",
        "package": "SegmentTree",
        "partial": "List",
        "signature": "[(a,a)]-\u003eSTree t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:high",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.SegmentTree",
        "fct-package": "SegmentTree",
        "fct-signature": "!(R v)",
        "fct-source": "src/Data-SegmentTree-Interval.html#Interval",
        "fct-type": "function",
        "title": "high"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SegmentTree",
        "module": "Data.SegmentTree",
        "name": "high",
        "normalized": "",
        "package": "SegmentTree",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:htype",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.SegmentTree",
        "fct-package": "SegmentTree",
        "fct-signature": "!Boundary",
        "fct-source": "src/Data-SegmentTree-Interval.html#Interval",
        "fct-type": "function",
        "title": "htype"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SegmentTree",
        "module": "Data.SegmentTree",
        "name": "htype",
        "normalized": "",
        "package": "SegmentTree",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003eInsert interval \u003ccode\u003ei\u003c/code\u003e into segment tree, updating tag values as necessary.\n Semantics of tags depends on the monoid used (see \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.SegmentTree",
        "fct-package": "SegmentTree",
        "fct-signature": "STree t a -\u003e Interval a -\u003e STree t a",
        "fct-source": "src/Data-SegmentTree.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "Insert interval into segment tree updating tag values as necessary Semantics of tags depends on the monoid used see fromList",
        "hierarchy": "Data SegmentTree",
        "module": "Data.SegmentTree",
        "name": "insert",
        "normalized": "STree a b-\u003eInterval b-\u003eSTree a b",
        "package": "SegmentTree",
        "partial": "",
        "signature": "STree t a-\u003eInterval a-\u003eSTree t a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:low",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.SegmentTree",
        "fct-package": "SegmentTree",
        "fct-signature": "!(R v)",
        "fct-source": "src/Data-SegmentTree-Interval.html#Interval",
        "fct-type": "function",
        "title": "low"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SegmentTree",
        "module": "Data.SegmentTree",
        "name": "low",
        "normalized": "",
        "package": "SegmentTree",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:ltype",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.SegmentTree",
        "fct-package": "SegmentTree",
        "fct-signature": "!Boundary",
        "fct-source": "src/Data-SegmentTree-Interval.html#Interval",
        "fct-type": "function",
        "title": "ltype"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SegmentTree",
        "module": "Data.SegmentTree",
        "name": "ltype",
        "normalized": "",
        "package": "SegmentTree",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:queryTree",
      "description": {
        "fct-descr": "\u003cp\u003eQuery the segment tree for the specified point. Time: O(log n)\n\u003c/p\u003e",
        "fct-module": "Data.SegmentTree",
        "fct-package": "SegmentTree",
        "fct-signature": "STree t a -\u003e a -\u003e t",
        "fct-source": "src/Data-SegmentTree.html#queryTree",
        "fct-type": "function",
        "title": "queryTree"
      },
      "index": {
        "description": "Query the segment tree for the specified point Time log",
        "hierarchy": "Data SegmentTree",
        "module": "Data.SegmentTree",
        "name": "queryTree",
        "normalized": "STree a b-\u003eb-\u003ea",
        "package": "SegmentTree",
        "partial": "Tree",
        "signature": "STree t a-\u003ea-\u003et"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/SegmentTree/docs/Data-SegmentTree.html#v:stabbingQuery",
      "description": {
        "fct-descr": "\u003cp\u003eConvenience wrapper around \u003ccode\u003e\u003ca\u003equeryTree\u003c/a\u003e\u003c/code\u003e to perform stabbing query. Returns list of intevals coverting the point\n\u003c/p\u003e",
        "fct-module": "Data.SegmentTree",
        "fct-package": "SegmentTree",
        "fct-signature": "STree [Interval a] a -\u003e a -\u003e [Interval a]",
        "fct-source": "src/Data-SegmentTree.html#stabbingQuery",
        "fct-type": "function",
        "title": "stabbingQuery"
      },
      "index": {
        "description": "Convenience wrapper around queryTree to perform stabbing query Returns list of intevals coverting the point",
        "hierarchy": "Data SegmentTree",
        "module": "Data.SegmentTree",
        "name": "stabbingQuery",
        "normalized": "STree[Interval a]a-\u003ea-\u003e[Interval a]",
        "package": "SegmentTree",
        "partial": "Query",
        "signature": "STree[Interval a]a-\u003ea-\u003e[Interval a]"
      }
    }
  }
]