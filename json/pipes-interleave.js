[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-interleave/docs/Pipes-Interleave.html#",
      "description": {
        "fct-module": "Pipes.Interleave",
        "fct-package": "pipes-interleave",
        "fct-signature": "module",
        "fct-source": "src/Pipes-Interleave.html",
        "fct-type": "module",
        "title": "Interleave"
      },
      "index": {
        "description": "",
        "hierarchy": "Pipes Interleave",
        "module": "Pipes.Interleave",
        "name": "Interleave",
        "normalized": "",
        "package": "pipes-interleave",
        "partial": "Interleave",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-interleave/docs/Pipes-Interleave.html#v:combine",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a stream of increasing elements, combine those equal under the \n given equality relation\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet append (k,v) (_,v') = return (k, v+v')\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoList $ combine ((==) `on` fst) append (each [(1,1), (1,4), (2,3), (3,10)])\n\u003c/code\u003e\u003c/strong\u003e[(1,5),(2,3),(3,10)]\n\u003c/pre\u003e",
        "fct-module": "Pipes.Interleave",
        "fct-package": "pipes-interleave",
        "fct-signature": "(a -\u003e a -\u003e Bool)-\u003e (a -\u003e a -\u003e a)-\u003e Producer a m r-\u003e Producer a m r",
        "fct-type": "function",
        "title": "combine"
      },
      "index": {
        "description": "Given stream of increasing elements combine those equal under the given equality relation let append return toList combine on fst append each",
        "hierarchy": "Pipes Interleave",
        "module": "Pipes.Interleave",
        "name": "combine",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e(a-\u003ea-\u003ea)-\u003eProducer a b c-\u003eProducer a b c",
        "package": "pipes-interleave",
        "partial": "",
        "signature": "(a-\u003ea-\u003eBool)-\u003e(a-\u003ea-\u003ea)-\u003eProducer a m r-\u003eProducer a m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-interleave/docs/Pipes-Interleave.html#v:combineM",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003e with monadic side-effects in combine operation.\n\u003c/p\u003e",
        "fct-module": "Pipes.Interleave",
        "fct-package": "pipes-interleave",
        "fct-signature": "(a -\u003e a -\u003e Bool)-\u003e (a -\u003e a -\u003e m a)-\u003e Producer a m r-\u003e Producer a m r",
        "fct-type": "function",
        "title": "combineM"
      },
      "index": {
        "description": "combine with monadic side-effects in combine operation",
        "hierarchy": "Pipes Interleave",
        "module": "Pipes.Interleave",
        "name": "combineM",
        "normalized": "(a-\u003ea-\u003eBool)-\u003e(a-\u003ea-\u003eb a)-\u003eProducer a b c-\u003eProducer a b c",
        "package": "pipes-interleave",
        "partial": "",
        "signature": "(a-\u003ea-\u003eBool)-\u003e(a-\u003ea-\u003em a)-\u003eProducer a m r-\u003eProducer a m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-interleave/docs/Pipes-Interleave.html#v:groupBy",
      "description": {
        "fct-descr": "\u003cp\u003eSplit stream into groups of equal elements.\n Note that this is a non-local operation: if the \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e generates\n a large run of equal elements, all of them will remain in memory until the\n run ends.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoList $ groupBy ((==) `on` fst) (each [(1,1), (1,4), (2,3), (3,10)])\n\u003c/code\u003e\u003c/strong\u003e[[(1,1),(1,4)],[(2,3)],[(3,10)]]\n\u003c/pre\u003e",
        "fct-module": "Pipes.Interleave",
        "fct-package": "pipes-interleave",
        "fct-signature": "(a -\u003e a -\u003e Bool)-\u003e Producer a m r-\u003e Producer [a] m r",
        "fct-type": "function",
        "title": "groupBy"
      },
      "index": {
        "description": "Split stream into groups of equal elements Note that this is non-local operation if the Producer generates large run of equal elements all of them will remain in memory until the run ends toList groupBy on fst each",
        "hierarchy": "Pipes Interleave",
        "module": "Pipes.Interleave",
        "name": "groupBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003eProducer a b c-\u003eProducer[a]b c",
        "package": "pipes-interleave",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eBool)-\u003eProducer a m r-\u003eProducer[a]m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-interleave/docs/Pipes-Interleave.html#v:interleave",
      "description": {
        "fct-descr": "\u003cp\u003eInterleave elements from a set of \u003ccode\u003eProducers\u003c/code\u003e such that the interleaved\n stream is increasing with respect to the given ordering.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoList $ interleave compare [each [1,3..10], each [1,5..20]]\n\u003c/code\u003e\u003c/strong\u003e[1,1,3,5,5,7,9,9,13,17]\n\u003c/pre\u003e",
        "fct-module": "Pipes.Interleave",
        "fct-package": "pipes-interleave",
        "fct-signature": "(a -\u003e a -\u003e Ordering)-\u003e [Producer a m ()]-\u003e Producer a m ()",
        "fct-type": "function",
        "title": "interleave"
      },
      "index": {
        "description": "Interleave elements from set of Producers such that the interleaved stream is increasing with respect to the given ordering toList interleave compare each each",
        "hierarchy": "Pipes Interleave",
        "module": "Pipes.Interleave",
        "name": "interleave",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[Producer a b()]-\u003eProducer a b()",
        "package": "pipes-interleave",
        "partial": "",
        "signature": "(a-\u003ea-\u003eOrdering)-\u003e[Producer a m()]-\u003eProducer a m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-interleave/docs/Pipes-Interleave.html#v:merge",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003e composed with \u003ccode\u003e\u003ca\u003einterleave\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet append (k,v) (_,v') = return (k, v+v')\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet producers = [ each [(i,2) | i \u003c- [1,3..10]], each [(i,10) | i \u003c- [1,5..20]] ] :: [Producer (Int,Int) Identity ()]\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003etoList $ merge (compare `on` fst) append producers\n\u003c/code\u003e\u003c/strong\u003e[(1,12),(3,2),(5,12),(7,2),(9,12),(13,10),(17,10)]\n\u003c/pre\u003e",
        "fct-module": "Pipes.Interleave",
        "fct-package": "pipes-interleave",
        "fct-signature": "(a -\u003e a -\u003e Ordering)-\u003e (a -\u003e a -\u003e a)-\u003e [Producer a m ()]-\u003e Producer a m ()",
        "fct-type": "function",
        "title": "merge"
      },
      "index": {
        "description": "Equivalent to combine composed with interleave let append return let producers each each Producer Int Int Identity toList merge compare on fst append producers",
        "hierarchy": "Pipes Interleave",
        "module": "Pipes.Interleave",
        "name": "merge",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003e(a-\u003ea-\u003ea)-\u003e[Producer a b()]-\u003eProducer a b()",
        "package": "pipes-interleave",
        "partial": "",
        "signature": "(a-\u003ea-\u003eOrdering)-\u003e(a-\u003ea-\u003ea)-\u003e[Producer a m()]-\u003eProducer a m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-interleave/docs/Pipes-Interleave.html#v:mergeM",
      "description": {
        "fct-descr": "\u003cp\u003eMerge with monadic side-effects in combine operation.\n\u003c/p\u003e",
        "fct-module": "Pipes.Interleave",
        "fct-package": "pipes-interleave",
        "fct-signature": "(a -\u003e a -\u003e Ordering)-\u003e (a -\u003e a -\u003e m a)-\u003e [Producer a m ()]-\u003e Producer a m ()",
        "fct-type": "function",
        "title": "mergeM"
      },
      "index": {
        "description": "Merge with monadic side-effects in combine operation",
        "hierarchy": "Pipes Interleave",
        "module": "Pipes.Interleave",
        "name": "mergeM",
        "normalized": "(a-\u003ea-\u003eOrdering)-\u003e(a-\u003ea-\u003eb a)-\u003e[Producer a b()]-\u003eProducer a b()",
        "package": "pipes-interleave",
        "partial": "",
        "signature": "(a-\u003ea-\u003eOrdering)-\u003e(a-\u003ea-\u003em a)-\u003e[Producer a m()]-\u003eProducer a m()"
      }
    }
  }
]