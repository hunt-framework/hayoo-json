[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Binpack/docs/Data-BinPack.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a number of common bin-packing heuristics: \u003ccode\u003e\u003ca\u003eFirstFit\u003c/a\u003e\u003c/code\u003e,\n\u003ccode\u003e\u003ca\u003eLastFit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eBestFit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eWorstFit\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eAlmostWorstFit\u003c/a\u003e\u003c/code\u003e.  In addition, the\nnot-so-common, but analytically superior (in terms of worst-case behavior),\n\u003ccode\u003e\u003ca\u003eModifiedFirstFit\u003c/a\u003e\u003c/code\u003e heuristic is also supported.  Further, the (slow)\n\u003ccode\u003e\u003ca\u003eSumOfSquaresFit\u003c/a\u003e\u003c/code\u003e heuristic, which has been considered in the context of online\nbin-packing (Bender et al., 2008), is also supported.\n\u003c/p\u003e\u003cp\u003eItems can be packed in order of both \u003ccode\u003e\u003ca\u003eDecreasing\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eIncreasing\u003c/a\u003e\u003c/code\u003e size (and,\nof course, in unmodified order; see \u003ccode\u003e\u003ca\u003eAsGiven\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThe module supports both the standard (textbook) minimization problem\n(\u003cem\u003e\"How many bins do I need to pack all items?\"\u003c/em\u003e; see \u003ccode\u003e\u003ca\u003eminimizeBins\u003c/a\u003e\u003c/code\u003e and\n\u003ccode\u003e\u003ca\u003ecountBins\u003c/a\u003e\u003c/code\u003e) and the more practical fitting problem\n(\u003cem\u003e\"I've got n bins; which items can I take?\"\u003c/em\u003e; see \u003ccode\u003e\u003ca\u003ebinpack\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThe well-known heuristics are described online in many places and are not\nfurther discussed here. For example, see\n\u003ca\u003ehttp://www.cs.arizona.edu/icon/oddsends/bpack/bpack.htm\u003c/a\u003e for an overview.  A\ndescription of the \u003ccode\u003e\u003ca\u003eModifiedFirstFit\u003c/a\u003e\u003c/code\u003e algorithm is harder to come by online,\nhence a brief description and references are provided below.\n\u003c/p\u003e\u003cp\u003eNote that most published analysis assumes items to be sorted in some specific\n(mostly \u003ccode\u003e\u003ca\u003eDecreasing\u003c/a\u003e\u003c/code\u003e) order. This module does not enforce such assumptions,\nrather, any ordering can be combined with any placement heuristic.\n\u003c/p\u003e\u003cp\u003eIf unsure what to pick, then try \u003ccode\u003e\u003ca\u003eFirstFit\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eDecreasing\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eBestFit\u003c/a\u003e\u003c/code\u003e\n\u003ccode\u003e\u003ca\u003eDecreasing\u003c/a\u003e\u003c/code\u003e as a default. Use \u003ccode\u003e\u003ca\u003eWorstFit\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eDecreasing\u003c/a\u003e\u003c/code\u003e (in combination with\n\u003ccode\u003e\u003ca\u003ebinpack\u003c/a\u003e\u003c/code\u003e) if you want a pre-determined number of bins filled evenly.\n\u003c/p\u003e\u003cp\u003eA short overview of the \u003ccode\u003e\u003ca\u003eModifiedFirstFit\u003c/a\u003e\u003c/code\u003e heuristic follows. This overview is\nbased on the description given in (Yue and Zhang, 1995).\n\u003c/p\u003e\u003cp\u003eLet \u003ccode\u003elst\u003c/code\u003e denote the list of items to be bin-packed, let \u003ccode\u003ex\u003c/code\u003e denote the size of\nthe smallest element in \u003ccode\u003elst\u003c/code\u003e, and let \u003ccode\u003ecap\u003c/code\u003e denote the capacity of one\nbin. \u003ccode\u003elst\u003c/code\u003e is split into the four sub-lists, \u003ccode\u003elA\u003c/code\u003e, \u003ccode\u003elB\u003c/code\u003e, \u003ccode\u003elC\u003c/code\u003e, \u003ccode\u003elD\u003c/code\u003e.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003elA\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e All items strictly larger than \u003ccode\u003ecap/2\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003elB\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e All items of size at most \u003ccode\u003ecap/2\u003c/code\u003e and strictly larger than \u003ccode\u003ecap/3\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003elC\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e All items of size at most \u003ccode\u003ecap/3\u003c/code\u003e and strictly larger than \u003ccode\u003e(cap - x)/5\u003c/code\u003e.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003elD\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e The rest, \u003cem\u003ei.e.\u003c/em\u003e, all items of size at most \u003ccode\u003e(cap - x)/5\u003c/code\u003e.\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eItems are placed as follows:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Create a list of \u003ccode\u003elength lA\u003c/code\u003e bins. Place each item in \u003ccode\u003elA\u003c/code\u003e into its own\n     bin (while maintaining relative item order with respect to \u003ccode\u003elst\u003c/code\u003e). Note:\n     relevant published analysis assumes that \u003ccode\u003elst\u003c/code\u003e is sorted in order of\n     \u003ccode\u003edecreasing\u003c/code\u003e size.\n\u003c/li\u003e\u003cli\u003e Take the list of bins created in Step 1 and reverse it.\n\u003c/li\u003e\u003cli\u003e Sequentially consider each bin \u003ccode\u003eb\u003c/code\u003e. If the two smallest items in \u003ccode\u003elC\u003c/code\u003e do\n     NOT fit together into \u003ccode\u003eb\u003c/code\u003e of if there a less than two items remaining in\n     \u003ccode\u003elC\u003c/code\u003e, then pack nothing into \u003ccode\u003eb\u003c/code\u003e and move on to the next bin (if any).\n     If they do fit together, then find the largest item \u003ccode\u003ex1\u003c/code\u003e in \u003ccode\u003elC\u003c/code\u003e that\n     would fit together with the smallest item in \u003ccode\u003elC\u003c/code\u003e into \u003ccode\u003eb\u003c/code\u003e. Remove \u003ccode\u003ex1\u003c/code\u003e\n     from \u003ccode\u003elC\u003c/code\u003e. Then find the largest item \u003ccode\u003ex2\u003c/code\u003e, \u003ccode\u003ex2 \\= x1\u003c/code\u003e, in \u003ccode\u003elC\u003c/code\u003e that will\n     now fit into \u003ccode\u003eb\u003c/code\u003e \u003cem\u003etogether\u003c/em\u003e with \u003ccode\u003ex1\u003c/code\u003e. Remove \u003ccode\u003ex1\u003c/code\u003e from \u003ccode\u003elC\u003c/code\u003e. Place both\n     \u003ccode\u003ex1\u003c/code\u003e and \u003ccode\u003ex2\u003c/code\u003e into \u003ccode\u003eb\u003c/code\u003e and move on to the next item.\n\u003c/li\u003e\u003cli\u003e Reverse the list of bins again.\n\u003c/li\u003e\u003cli\u003e Use the \u003ccode\u003e\u003ca\u003eFirstFit\u003c/a\u003e\u003c/code\u003e heuristic to place all remaining items, \u003cem\u003ei.e.\u003c/em\u003e, \u003ccode\u003elB\u003c/code\u003e,\n     \u003ccode\u003elD\u003c/code\u003e, and any remaining items of \u003ccode\u003elC\u003c/code\u003e.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eReferences:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e D.S. Johnson and M.R. Garey (1985). A 71/60 Theorem for Bin-Packing.\n   \u003cem\u003eJournal of Complexity\u003c/em\u003e, 1:65-106.\n\u003c/li\u003e\u003cli\u003e M. Yue and L. Zhang (1995). A Simple Proof of the Inequality MFFD(L) \u003c= 71/60\n   OPT(L) + 1, L for the MFFD Bin-Packing Algorithm.\n   \u003cem\u003eActa Mathematicae Applicatae Sinica\u003c/em\u003e, 11(3):318-330.\n\u003c/li\u003e\u003cli\u003e M.A. Bender, B. Bradley, G. Jagannathan, and K. Pillaipakkamnatt (2008).\n\tSum-of-Squares Heuristics for Bin Packing and Memory Allocation.\n\t\u003cem\u003eACM Journal of Experimental Algorithmics\u003c/em\u003e, 12:1-19.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.BinPack",
        "fct-package": "Binpack",
        "fct-signature": "module",
        "fct-source": "src/Data-BinPack.html",
        "fct-type": "module",
        "title": "BinPack"
      },
      "index": {
        "description": "This module implements number of common bin-packing heuristics FirstFit LastFit BestFit WorstFit and AlmostWorstFit In addition the not-so-common but analytically superior in terms of worst-case behavior ModifiedFirstFit heuristic is also supported Further the slow SumOfSquaresFit heuristic which has been considered in the context of online bin-packing Bender et al is also supported Items can be packed in order of both Decreasing and Increasing size and of course in unmodified order see AsGiven The module supports both the standard textbook minimization problem How many bins do need to pack all items see minimizeBins and countBins and the more practical fitting problem ve got bins which items can take see binpack The well-known heuristics are described online in many places and are not further discussed here For example see http www.cs.arizona.edu icon oddsends bpack bpack.htm for an overview description of the ModifiedFirstFit algorithm is harder to come by online hence brief description and references are provided below Note that most published analysis assumes items to be sorted in some specific mostly Decreasing order This module does not enforce such assumptions rather any ordering can be combined with any placement heuristic If unsure what to pick then try FirstFit Decreasing or BestFit Decreasing as default Use WorstFit Decreasing in combination with binpack if you want pre-determined number of bins filled evenly short overview of the ModifiedFirstFit heuristic follows This overview is based on the description given in Yue and Zhang Let lst denote the list of items to be bin-packed let denote the size of the smallest element in lst and let cap denote the capacity of one bin lst is split into the four sub-lists lA lB lC lD lA All items strictly larger than cap lB All items of size at most cap and strictly larger than cap lC All items of size at most cap and strictly larger than cap lD The rest i.e all items of size at most cap Items are placed as follows Create list of length lA bins Place each item in lA into its own bin while maintaining relative item order with respect to lst Note relevant published analysis assumes that lst is sorted in order of decreasing size Take the list of bins created in Step and reverse it Sequentially consider each bin If the two smallest items in lC do NOT fit together into of if there less than two items remaining in lC then pack nothing into and move on to the next bin if any If they do fit together then find the largest item x1 in lC that would fit together with the smallest item in lC into Remove x1 from lC Then find the largest item x2 x2 x1 in lC that will now fit into together with x1 Remove x1 from lC Place both x1 and x2 into and move on to the next item Reverse the list of bins again Use the FirstFit heuristic to place all remaining items i.e lB lD and any remaining items of lC References D.S Johnson and M.R Garey Theorem for Bin-Packing Journal of Complexity Yue and Zhang Simple Proof of the Inequality MFFD OPT for the MFFD Bin-Packing Algorithm Acta Mathematicae Applicatae Sinica M.A Bender Bradley Jagannathan and Pillaipakkamnatt Sum-of-Squares Heuristics for Bin Packing and Memory Allocation ACM Journal of Experimental Algorithmics",
        "hierarchy": "Data BinPack",
        "module": "Data.BinPack",
        "name": "BinPack",
        "normalized": "",
        "package": "Binpack",
        "partial": "Bin Pack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Binpack/docs/Data-BinPack.html#t:Bin",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eBin\u003c/a\u003e\u003c/code\u003e consists of the remaining capacity together with a list of items\n   already placed.\n\u003c/p\u003e",
        "fct-module": "Data.BinPack",
        "fct-package": "Binpack",
        "fct-signature": "type",
        "fct-source": "src/Data-BinPack-Internals.html#Bin",
        "fct-type": "type",
        "title": "Bin"
      },
      "index": {
        "description": "Bin consists of the remaining capacity together with list of items already placed",
        "hierarchy": "Data BinPack",
        "module": "Data.BinPack",
        "name": "Bin",
        "normalized": "",
        "package": "Binpack",
        "partial": "Bin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Binpack/docs/Data-BinPack.html#t:Measure",
      "description": {
        "fct-descr": "\u003cp\u003eA function that maps an item \u003ccode\u003eb\u003c/code\u003e to its size \u003ccode\u003ea\u003c/code\u003e. The constraint \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e\n a, \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e a)\u003c/code\u003e has been omitted from the type, but is required by the exposed\n functions.\n\u003c/p\u003e",
        "fct-module": "Data.BinPack",
        "fct-package": "Binpack",
        "fct-signature": "type",
        "fct-source": "src/Data-BinPack-Internals.html#Measure",
        "fct-type": "type",
        "title": "Measure"
      },
      "index": {
        "description": "function that maps an item to its size The constraint Num Ord has been omitted from the type but is required by the exposed functions",
        "hierarchy": "Data BinPack",
        "module": "Data.BinPack",
        "name": "Measure",
        "normalized": "",
        "package": "Binpack",
        "partial": "Measure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Binpack/docs/Data-BinPack.html#t:OrderPolicy",
      "description": {
        "fct-descr": "\u003cp\u003eHow to pre-process the input.\n\u003c/p\u003e",
        "fct-module": "Data.BinPack",
        "fct-package": "Binpack",
        "fct-signature": "data",
        "fct-source": "src/Data-BinPack-Internals.html#OrderPolicy",
        "fct-type": "data",
        "title": "OrderPolicy"
      },
      "index": {
        "description": "How to pre-process the input",
        "hierarchy": "Data BinPack",
        "module": "Data.BinPack",
        "name": "OrderPolicy",
        "normalized": "",
        "package": "Binpack",
        "partial": "Order Policy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Binpack/docs/Data-BinPack.html#t:PlacementPolicy",
      "description": {
        "fct-descr": "\u003cp\u003eWhat placement heuristic should be used?\n\u003c/p\u003e",
        "fct-module": "Data.BinPack",
        "fct-package": "Binpack",
        "fct-signature": "data",
        "fct-source": "src/Data-BinPack.html#PlacementPolicy",
        "fct-type": "data",
        "title": "PlacementPolicy"
      },
      "index": {
        "description": "What placement heuristic should be used",
        "hierarchy": "Data BinPack",
        "module": "Data.BinPack",
        "name": "PlacementPolicy",
        "normalized": "",
        "package": "Binpack",
        "partial": "Placement Policy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Binpack/docs/Data-BinPack.html#v:AlmostWorstFit",
      "description": {
        "fct-descr": "\u003cp\u003eChoose the 2nd to worst-fitting\n bin.\n\u003c/p\u003e",
        "fct-module": "Data.BinPack",
        "fct-package": "Binpack",
        "fct-signature": "AlmostWorstFit",
        "fct-source": "src/Data-BinPack.html#PlacementPolicy",
        "fct-type": "function",
        "title": "AlmostWorstFit"
      },
      "index": {
        "description": "Choose the nd to worst-fitting bin",
        "hierarchy": "Data BinPack",
        "module": "Data.BinPack",
        "name": "AlmostWorstFit",
        "normalized": "",
        "package": "Binpack",
        "partial": "Almost Worst Fit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Binpack/docs/Data-BinPack.html#v:AsGiven",
      "description": {
        "fct-descr": "\u003cp\u003eDon't modify item order.\n\u003c/p\u003e",
        "fct-module": "Data.BinPack",
        "fct-package": "Binpack",
        "fct-signature": "AsGiven",
        "fct-source": "src/Data-BinPack-Internals.html#OrderPolicy",
        "fct-type": "function",
        "title": "AsGiven"
      },
      "index": {
        "description": "Don modify item order",
        "hierarchy": "Data BinPack",
        "module": "Data.BinPack",
        "name": "AsGiven",
        "normalized": "",
        "package": "Binpack",
        "partial": "As Given",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Binpack/docs/Data-BinPack.html#v:BestFit",
      "description": {
        "fct-descr": "\u003cp\u003ePlace item in the bin with the\n most capacity.\n\u003c/p\u003e",
        "fct-module": "Data.BinPack",
        "fct-package": "Binpack",
        "fct-signature": "BestFit",
        "fct-source": "src/Data-BinPack.html#PlacementPolicy",
        "fct-type": "function",
        "title": "BestFit"
      },
      "index": {
        "description": "Place item in the bin with the most capacity",
        "hierarchy": "Data BinPack",
        "module": "Data.BinPack",
        "name": "BestFit",
        "normalized": "",
        "package": "Binpack",
        "partial": "Best Fit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Binpack/docs/Data-BinPack.html#v:Decreasing",
      "description": {
        "fct-descr": "\u003cp\u003eSort from largest to smallest.\n\u003c/p\u003e",
        "fct-module": "Data.BinPack",
        "fct-package": "Binpack",
        "fct-signature": "Decreasing",
        "fct-source": "src/Data-BinPack-Internals.html#OrderPolicy",
        "fct-type": "function",
        "title": "Decreasing"
      },
      "index": {
        "description": "Sort from largest to smallest",
        "hierarchy": "Data BinPack",
        "module": "Data.BinPack",
        "name": "Decreasing",
        "normalized": "",
        "package": "Binpack",
        "partial": "Decreasing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Binpack/docs/Data-BinPack.html#v:FirstFit",
      "description": {
        "fct-descr": "\u003cp\u003eTraverse bin list from \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e to\n \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e and place item in the first\n bin that has sufficient capacity.\n\u003c/p\u003e",
        "fct-module": "Data.BinPack",
        "fct-package": "Binpack",
        "fct-signature": "FirstFit",
        "fct-source": "src/Data-BinPack.html#PlacementPolicy",
        "fct-type": "function",
        "title": "FirstFit"
      },
      "index": {
        "description": "Traverse bin list from head to last and place item in the first bin that has sufficient capacity",
        "hierarchy": "Data BinPack",
        "module": "Data.BinPack",
        "name": "FirstFit",
        "normalized": "",
        "package": "Binpack",
        "partial": "First Fit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Binpack/docs/Data-BinPack.html#v:Increasing",
      "description": {
        "fct-descr": "\u003cp\u003eSort from smallest to largest.\n\u003c/p\u003e",
        "fct-module": "Data.BinPack",
        "fct-package": "Binpack",
        "fct-signature": "Increasing",
        "fct-source": "src/Data-BinPack-Internals.html#OrderPolicy",
        "fct-type": "function",
        "title": "Increasing"
      },
      "index": {
        "description": "Sort from smallest to largest",
        "hierarchy": "Data BinPack",
        "module": "Data.BinPack",
        "name": "Increasing",
        "normalized": "",
        "package": "Binpack",
        "partial": "Increasing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Binpack/docs/Data-BinPack.html#v:LastFit",
      "description": {
        "fct-descr": "\u003cp\u003eTraverse bin list from \u003ccode\u003e\u003ca\u003elast\u003c/a\u003e\u003c/code\u003e to\n \u003ccode\u003e\u003ca\u003ehead\u003c/a\u003e\u003c/code\u003e and place item in the first\n bin that has sufficient capacity.\n\u003c/p\u003e",
        "fct-module": "Data.BinPack",
        "fct-package": "Binpack",
        "fct-signature": "LastFit",
        "fct-source": "src/Data-BinPack.html#PlacementPolicy",
        "fct-type": "function",
        "title": "LastFit"
      },
      "index": {
        "description": "Traverse bin list from last to head and place item in the first bin that has sufficient capacity",
        "hierarchy": "Data BinPack",
        "module": "Data.BinPack",
        "name": "LastFit",
        "normalized": "",
        "package": "Binpack",
        "partial": "Last Fit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Binpack/docs/Data-BinPack.html#v:ModifiedFirstFit",
      "description": {
        "fct-descr": "\u003cp\u003eSee above.\n\u003c/p\u003e",
        "fct-module": "Data.BinPack",
        "fct-package": "Binpack",
        "fct-signature": "ModifiedFirstFit",
        "fct-source": "src/Data-BinPack.html#PlacementPolicy",
        "fct-type": "function",
        "title": "ModifiedFirstFit"
      },
      "index": {
        "description": "See above",
        "hierarchy": "Data BinPack",
        "module": "Data.BinPack",
        "name": "ModifiedFirstFit",
        "normalized": "",
        "package": "Binpack",
        "partial": "Modified First Fit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Binpack/docs/Data-BinPack.html#v:SumOfSquaresFit",
      "description": {
        "fct-descr": "\u003cp\u003eChoose bin such that sum-of-squares\n heuristic is minimized.\n\u003c/p\u003e",
        "fct-module": "Data.BinPack",
        "fct-package": "Binpack",
        "fct-signature": "SumOfSquaresFit",
        "fct-source": "src/Data-BinPack.html#PlacementPolicy",
        "fct-type": "function",
        "title": "SumOfSquaresFit"
      },
      "index": {
        "description": "Choose bin such that sum-of-squares heuristic is minimized",
        "hierarchy": "Data BinPack",
        "module": "Data.BinPack",
        "name": "SumOfSquaresFit",
        "normalized": "",
        "package": "Binpack",
        "partial": "Sum Of Squares Fit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Binpack/docs/Data-BinPack.html#v:WorstFit",
      "description": {
        "fct-descr": "\u003cp\u003ePlace item in the bin with the\n least (but sufficient) capacity.\n\u003c/p\u003e",
        "fct-module": "Data.BinPack",
        "fct-package": "Binpack",
        "fct-signature": "WorstFit",
        "fct-source": "src/Data-BinPack.html#PlacementPolicy",
        "fct-type": "function",
        "title": "WorstFit"
      },
      "index": {
        "description": "Place item in the bin with the least but sufficient capacity",
        "hierarchy": "Data BinPack",
        "module": "Data.BinPack",
        "name": "WorstFit",
        "normalized": "",
        "package": "Binpack",
        "partial": "Worst Fit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Binpack/docs/Data-BinPack.html#v:addItem",
      "description": {
        "fct-descr": "\u003cp\u003ePlace an item inside a \u003ccode\u003e\u003ca\u003eBin\u003c/a\u003e\u003c/code\u003e. Fails if there is insufficient capacity.\n\u003c/p\u003e",
        "fct-module": "Data.BinPack",
        "fct-package": "Binpack",
        "fct-signature": "a-\u003e b-\u003e Bin a b-\u003e Bin a b",
        "fct-type": "function",
        "title": "addItem"
      },
      "index": {
        "description": "Place an item inside Bin Fails if there is insufficient capacity",
        "hierarchy": "Data BinPack",
        "module": "Data.BinPack",
        "name": "addItem",
        "normalized": "a-\u003eb-\u003eBin a b-\u003eBin a b",
        "package": "Binpack",
        "partial": "Item",
        "signature": "a-\u003eb-\u003eBin a b-\u003eBin a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Binpack/docs/Data-BinPack.html#v:addItems",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a list of items to an existing bin. Fails if there is\n   insufficient capacity.\n\u003c/p\u003e",
        "fct-module": "Data.BinPack",
        "fct-package": "Binpack",
        "fct-signature": "Bin a b-\u003e Measure a b-\u003e [b]-\u003e Bin a b",
        "fct-type": "function",
        "title": "addItems"
      },
      "index": {
        "description": "Add list of items to an existing bin Fails if there is insufficient capacity",
        "hierarchy": "Data BinPack",
        "module": "Data.BinPack",
        "name": "addItems",
        "normalized": "Bin a b-\u003eMeasure a b-\u003e[b]-\u003eBin a b",
        "package": "Binpack",
        "partial": "Items",
        "signature": "Bin a b-\u003eMeasure a b-\u003e[b]-\u003eBin a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Binpack/docs/Data-BinPack.html#v:allHeuristics",
      "description": {
        "fct-descr": "\u003cp\u003eAll supported ordering and placment choices.\n\u003c/p\u003e",
        "fct-module": "Data.BinPack",
        "fct-package": "Binpack",
        "fct-signature": "[(PlacementPolicy, OrderPolicy)]",
        "fct-source": "src/Data-BinPack.html#allHeuristics",
        "fct-type": "function",
        "title": "allHeuristics"
      },
      "index": {
        "description": "All supported ordering and placment choices",
        "hierarchy": "Data BinPack",
        "module": "Data.BinPack",
        "name": "allHeuristics",
        "normalized": "[(PlacementPolicy,OrderPolicy)]",
        "package": "Binpack",
        "partial": "Heuristics",
        "signature": "[(PlacementPolicy,OrderPolicy)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Binpack/docs/Data-BinPack.html#v:allOrders",
      "description": {
        "fct-descr": "\u003cp\u003eThe list of all possible \u003ccode\u003e\u003ca\u003eOrderPolicy\u003c/a\u003e\u003c/code\u003e choices.\n\u003c/p\u003e",
        "fct-module": "Data.BinPack",
        "fct-package": "Binpack",
        "fct-signature": "[OrderPolicy]",
        "fct-source": "src/Data-BinPack.html#allOrders",
        "fct-type": "function",
        "title": "allOrders"
      },
      "index": {
        "description": "The list of all possible OrderPolicy choices",
        "hierarchy": "Data BinPack",
        "module": "Data.BinPack",
        "name": "allOrders",
        "normalized": "[OrderPolicy]",
        "package": "Binpack",
        "partial": "Orders",
        "signature": "[OrderPolicy]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Binpack/docs/Data-BinPack.html#v:allPlacements",
      "description": {
        "fct-descr": "\u003cp\u003eThe list of all possible \u003ccode\u003e\u003ca\u003ePlacementPolicy\u003c/a\u003e\u003c/code\u003e choices.\n\u003c/p\u003e",
        "fct-module": "Data.BinPack",
        "fct-package": "Binpack",
        "fct-signature": "[PlacementPolicy]",
        "fct-source": "src/Data-BinPack.html#allPlacements",
        "fct-type": "function",
        "title": "allPlacements"
      },
      "index": {
        "description": "The list of all possible PlacementPolicy choices",
        "hierarchy": "Data BinPack",
        "module": "Data.BinPack",
        "name": "allPlacements",
        "normalized": "[PlacementPolicy]",
        "package": "Binpack",
        "partial": "Placements",
        "signature": "[PlacementPolicy]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Binpack/docs/Data-BinPack.html#v:asBin",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a list of items into a pre-filled bin.\n\u003c/p\u003e",
        "fct-module": "Data.BinPack",
        "fct-package": "Binpack",
        "fct-signature": "a -\u003e Measure a b -\u003e [b] -\u003e Bin a b",
        "fct-source": "src/Data-BinPack-Internals.html#asBin",
        "fct-type": "function",
        "title": "asBin"
      },
      "index": {
        "description": "Turn list of items into pre-filled bin",
        "hierarchy": "Data BinPack",
        "module": "Data.BinPack",
        "name": "asBin",
        "normalized": "a-\u003eMeasure a b-\u003e[b]-\u003eBin a b",
        "package": "Binpack",
        "partial": "Bin",
        "signature": "a-\u003eMeasure a b-\u003e[b]-\u003eBin a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Binpack/docs/Data-BinPack.html#v:binpack",
      "description": {
        "fct-descr": "\u003cp\u003eBin-pack a list of items into a list of (possibly non-uniform) bins.  If\n an item cannot be placed, instead of creating a new bin, this version will\n return a list of items that could not be packed (if any).\n\u003c/p\u003e\u003cp\u003eExample: We have two empty bins, one of size 10 and one of size 12.\n         Which words can we fit in there?\n\u003c/p\u003e\u003cpre\u003e binpack WorstFit Decreasing length [emptyBin 10, emptyBin 12]  (words \"Bin packing heuristics are a lot of fun!\")\n ~~\u003e ([(0,[\"Bin\",\"packing\"]),(0,[\"of\",\"heuristics\"])],[\"a\",\"lot\",\"are\",\"fun!\"])\n\u003c/pre\u003e\u003cp\u003eBoth bins were filled completely, and the words \u003cem\u003e\"are a lot fun!\"\u003c/em\u003e coult not be\npacked.  \n\u003c/p\u003e",
        "fct-module": "Data.BinPack",
        "fct-package": "Binpack",
        "fct-signature": "PlacementPolicy-\u003e OrderPolicy-\u003e Measure a b-\u003e [Bin a b]-\u003e [b]-\u003e ([Bin a b], [b])",
        "fct-type": "function",
        "title": "binpack"
      },
      "index": {
        "description": "Bin-pack list of items into list of possibly non-uniform bins If an item cannot be placed instead of creating new bin this version will return list of items that could not be packed if any Example We have two empty bins one of size and one of size Which words can we fit in there binpack WorstFit Decreasing length emptyBin emptyBin words Bin packing heuristics are lot of fun Bin packing of heuristics lot are fun Both bins were filled completely and the words are lot fun coult not be packed",
        "hierarchy": "Data BinPack",
        "module": "Data.BinPack",
        "name": "binpack",
        "normalized": "PlacementPolicy-\u003eOrderPolicy-\u003eMeasure a b-\u003e[Bin a b]-\u003e[b]-\u003e([Bin a b],[b])",
        "package": "Binpack",
        "partial": "",
        "signature": "PlacementPolicy-\u003eOrderPolicy-\u003eMeasure a b-\u003e[Bin a b]-\u003e[b]-\u003e([Bin a b],[b])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Binpack/docs/Data-BinPack.html#v:countBins",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper around \u003ccode\u003e\u003ca\u003eminimizeBins\u003c/a\u003e\u003c/code\u003e; useful if only the number of required\nbins is of interest. See \u003ccode\u003e\u003ca\u003eminimizeBins\u003c/a\u003e\u003c/code\u003e for a description of the arguments.\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e How many bins of size 11 characters each do we need to pack the words of the sentence\n\u003cem\u003e\"Bin packing heuristics are a lot of fun!\"\u003c/em\u003e?\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e countBins FirstFit Increasing length 11 (words \"Bin packing heuristics are a lot of fun!\")\n ~~\u003e 4\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e  Similarly, for \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e. As before, we use \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e as a \u003ccode\u003e\u003ca\u003eMeasure\u003c/a\u003e\u003c/code\u003e for the size of an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e countBins FirstFit Decreasing id 11 [3,7,10,3,1,3,2,4]\n ~~\u003e 3\n\u003c/pre\u003e",
        "fct-module": "Data.BinPack",
        "fct-package": "Binpack",
        "fct-signature": "PlacementPolicy -\u003e OrderPolicy -\u003e Measure a b -\u003e a -\u003e [b] -\u003e Int",
        "fct-source": "src/Data-BinPack.html#countBins",
        "fct-type": "function",
        "title": "countBins"
      },
      "index": {
        "description": "Wrapper around minimizeBins useful if only the number of required bins is of interest See minimizeBins for description of the arguments Examples How many bins of size characters each do we need to pack the words of the sentence Bin packing heuristics are lot of fun countBins FirstFit Increasing length words Bin packing heuristics are lot of fun Similarly for Int As before we use id as Measure for the size of an Int countBins FirstFit Decreasing id",
        "hierarchy": "Data BinPack",
        "module": "Data.BinPack",
        "name": "countBins",
        "normalized": "PlacementPolicy-\u003eOrderPolicy-\u003eMeasure a b-\u003ea-\u003e[b]-\u003eInt",
        "package": "Binpack",
        "partial": "Bins",
        "signature": "PlacementPolicy-\u003eOrderPolicy-\u003eMeasure a b-\u003ea-\u003e[b]-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Binpack/docs/Data-BinPack.html#v:emptyBin",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an empty bin.\n\u003c/p\u003e",
        "fct-module": "Data.BinPack",
        "fct-package": "Binpack",
        "fct-signature": "a-\u003e Bin a b",
        "fct-type": "function",
        "title": "emptyBin"
      },
      "index": {
        "description": "Create an empty bin",
        "hierarchy": "Data BinPack",
        "module": "Data.BinPack",
        "name": "emptyBin",
        "normalized": "a-\u003eBin a b",
        "package": "Binpack",
        "partial": "Bin",
        "signature": "a-\u003eBin a b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Binpack/docs/Data-BinPack.html#v:emptyBins",
      "description": {
        "fct-descr": "\u003cp\u003eCreate multiple empty bins with uniform capacity.\n\u003c/p\u003e",
        "fct-module": "Data.BinPack",
        "fct-package": "Binpack",
        "fct-signature": "a-\u003e Int-\u003e [Bin a b]",
        "fct-type": "function",
        "title": "emptyBins"
      },
      "index": {
        "description": "Create multiple empty bins with uniform capacity",
        "hierarchy": "Data BinPack",
        "module": "Data.BinPack",
        "name": "emptyBins",
        "normalized": "a-\u003eInt-\u003e[Bin a b]",
        "package": "Binpack",
        "partial": "Bins",
        "signature": "a-\u003eInt-\u003e[Bin a b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Binpack/docs/Data-BinPack.html#v:gap",
      "description": {
        "fct-descr": "\u003cp\u003eGet the remaining capacity of a bin.\n\u003c/p\u003e",
        "fct-module": "Data.BinPack",
        "fct-package": "Binpack",
        "fct-signature": "Bin a b -\u003e a",
        "fct-source": "src/Data-BinPack-Internals.html#gap",
        "fct-type": "function",
        "title": "gap"
      },
      "index": {
        "description": "Get the remaining capacity of bin",
        "hierarchy": "Data BinPack",
        "module": "Data.BinPack",
        "name": "gap",
        "normalized": "Bin a b-\u003ea",
        "package": "Binpack",
        "partial": "",
        "signature": "Bin a b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Binpack/docs/Data-BinPack.html#v:items",
      "description": {
        "fct-descr": "\u003cp\u003eGet the items in a bin.\n\u003c/p\u003e",
        "fct-module": "Data.BinPack",
        "fct-package": "Binpack",
        "fct-signature": "Bin a b -\u003e [b]",
        "fct-source": "src/Data-BinPack-Internals.html#items",
        "fct-type": "function",
        "title": "items"
      },
      "index": {
        "description": "Get the items in bin",
        "hierarchy": "Data BinPack",
        "module": "Data.BinPack",
        "name": "items",
        "normalized": "Bin a b-\u003e[b]",
        "package": "Binpack",
        "partial": "",
        "signature": "Bin a b-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Binpack/docs/Data-BinPack.html#v:minimizeBins",
      "description": {
        "fct-descr": "\u003cp\u003eBin-packing without a limit on the number of bins (minimization problem).\nAssumption: The maximum item size is at most the size of one bin (this is not\nchecked).\n\u003c/p\u003e\u003cp\u003eExamples:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Pack the words of the sentence \u003cem\u003e\"Bin packing heuristics are a lot of fun!\"\u003c/em\u003e\n  into bins of size 11, assuming the size of a word is its length.  The\n  \u003ccode\u003e\u003ca\u003eIncreasing\u003c/a\u003e\u003c/code\u003e ordering yields a sub-optimal result that leaves a lot of empty\n  space in the bins.\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e minimizeBins FirstFit Increasing length 11 (words \"Bin packing heuristics are a lot of fun!\")\n ~~\u003e [(2,[\"are\",\"Bin\",\"of\",\"a\"]),(4,[\"fun!\",\"lot\"]),(4,[\"packing\"]),(1,[\"heuristics\"])]\n\u003c/pre\u003e\u003cul\u003e\u003cli\u003e Similarly, for \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e. Note that we use \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e as a \u003ccode\u003e\u003ca\u003eMeasure\u003c/a\u003e\u003c/code\u003e of the size of an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e minimizeBins FirstFit Decreasing id 11 [3,7,10,3,1,3,2,4]\n ~~\u003e [(0,[1,10]),(0,[4,7]),(0,[2,3,3,3])]\n\u003c/pre\u003e",
        "fct-module": "Data.BinPack",
        "fct-package": "Binpack",
        "fct-signature": "PlacementPolicy-\u003e OrderPolicy-\u003e Measure a b-\u003e a-\u003e [b]-\u003e [Bin a b]",
        "fct-type": "function",
        "title": "minimizeBins"
      },
      "index": {
        "description": "Bin-packing without limit on the number of bins minimization problem Assumption The maximum item size is at most the size of one bin this is not checked Examples Pack the words of the sentence Bin packing heuristics are lot of fun into bins of size assuming the size of word is its length The Increasing ordering yields sub-optimal result that leaves lot of empty space in the bins minimizeBins FirstFit Increasing length words Bin packing heuristics are lot of fun are Bin of fun lot packing heuristics Similarly for Int Note that we use id as Measure of the size of an Int minimizeBins FirstFit Decreasing id",
        "hierarchy": "Data BinPack",
        "module": "Data.BinPack",
        "name": "minimizeBins",
        "normalized": "PlacementPolicy-\u003eOrderPolicy-\u003eMeasure a b-\u003ea-\u003e[b]-\u003e[Bin a b]",
        "package": "Binpack",
        "partial": "Bins",
        "signature": "PlacementPolicy-\u003eOrderPolicy-\u003eMeasure a b-\u003ea-\u003e[b]-\u003e[Bin a b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Binpack/docs/Data-BinPack.html#v:tryAddItem",
      "description": {
        "fct-descr": "\u003cp\u003eTry placing an item inside a \u003ccode\u003e\u003ca\u003eBin\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BinPack",
        "fct-package": "Binpack",
        "fct-signature": "a-\u003e b-\u003e Bin a b-\u003e Maybe (Bin a b)",
        "fct-type": "function",
        "title": "tryAddItem"
      },
      "index": {
        "description": "Try placing an item inside Bin",
        "hierarchy": "Data BinPack",
        "module": "Data.BinPack",
        "name": "tryAddItem",
        "normalized": "a-\u003eb-\u003eBin a b-\u003eMaybe(Bin a b)",
        "package": "Binpack",
        "partial": "Add Item",
        "signature": "a-\u003eb-\u003eBin a b-\u003eMaybe(Bin a b)"
      }
    }
  }
]