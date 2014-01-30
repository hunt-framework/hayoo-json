[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module lets you tamper with \u003ccode\u003e\u003ca\u003eDistance\u003c/a\u003e\u003c/code\u003e - in other words you can give\n   it whatever phantom type since the constructor is exported.\n\u003c/p\u003e\u003cp\u003eThe only use for this module is to construct new \u003ccode\u003e\u003ca\u003eDistance\u003c/a\u003e\u003c/code\u003e data when\n   writing \u003ccode\u003eEditDistance\u003c/code\u003e instances, but be careful not to change the phantom\n   type of existing \u003ccode\u003e\u003ca\u003eDistance\u003c/a\u003e\u003c/code\u003es!\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Distance.Internal",
        "fct-package": "language-spelling",
        "fct-signature": "module",
        "fct-source": "src/Language-Distance-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "This module lets you tamper with Distance in other words you can give it whatever phantom type since the constructor is exported The only use for this module is to construct new Distance data when writing EditDistance instances but be careful not to change the phantom type of existing Distance",
        "hierarchy": "Language Distance Internal",
        "module": "Language.Distance.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "language-spelling",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Internal.html#t:Distance",
      "description": {
        "fct-module": "Language.Distance.Internal",
        "fct-package": "language-spelling",
        "fct-signature": "newtype",
        "fct-source": "src/Language-Distance-Internal.html#Distance",
        "fct-type": "newtype",
        "title": "Distance"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Internal",
        "module": "Language.Distance.Internal",
        "name": "Distance",
        "normalized": "",
        "package": "language-spelling",
        "partial": "Distance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Internal.html#v:Distance",
      "description": {
        "fct-module": "Language.Distance.Internal",
        "fct-package": "language-spelling",
        "fct-signature": "Distance",
        "fct-source": "src/Language-Distance-Internal.html#Distance",
        "fct-type": "function",
        "title": "Distance"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Internal",
        "module": "Language.Distance.Internal",
        "name": "Distance",
        "normalized": "",
        "package": "language-spelling",
        "partial": "Distance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Internal.html#v:getDistance",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.Distance.Internal",
        "fct-package": "language-spelling",
        "fct-signature": "Int",
        "fct-source": "src/Language-Distance-Internal.html#Distance",
        "fct-type": "function",
        "title": "getDistance"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Internal",
        "module": "Language.Distance.Internal",
        "name": "getDistance",
        "normalized": "",
        "package": "language-spelling",
        "partial": "Distance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-BK.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of \u003ccode\u003e\u003ca\u003eSearch\u003c/a\u003e\u003c/code\u003e based on a BK-tree:\n   \u003ca\u003ehttps://en.wikipedia.org/wiki/Bk-tree\u003c/a\u003e.  It performs reasonably, and it\n   scales decently as the query distance increases.  Moreover the data\n   structure can work on any instance of \u003ccode\u003e\u003ca\u003eEditDistance\u003c/a\u003e\u003c/code\u003e, or in fact any metric\n   space - a generic interface is provided in \u003ccode\u003e\u003ca\u003eBKTree\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eHowever, for very short distances (less than 3),\n   \u003ccode\u003e\u003ca\u003eTST\u003c/a\u003e\u003c/code\u003e is faster.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Distance.Search.BK",
        "fct-package": "language-spelling",
        "fct-signature": "module",
        "fct-source": "src/Language-Distance-Search-BK.html",
        "fct-type": "module",
        "title": "BK"
      },
      "index": {
        "description": "An implementation of Search based on BK-tree https en.wikipedia.org wiki Bk-tree It performs reasonably and it scales decently as the query distance increases Moreover the data structure can work on any instance of EditDistance or in fact any metric space generic interface is provided in BKTree However for very short distances less than TST is faster",
        "hierarchy": "Language Distance Search BK",
        "module": "Language.Distance.Search.BK",
        "name": "BK",
        "normalized": "",
        "package": "language-spelling",
        "partial": "BK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-BK.html#t:BKTree",
      "description": {
        "fct-module": "Language.Distance.Search.BK",
        "fct-package": "language-spelling",
        "fct-signature": "data",
        "fct-source": "src/Language-Distance-Search-BK.html#BKTree",
        "fct-type": "data",
        "title": "BKTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Search BK",
        "module": "Language.Distance.Search.BK",
        "name": "BKTree",
        "normalized": "",
        "package": "language-spelling",
        "partial": "BKTree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-BK.html#v:damerauLevenshtein",
      "description": {
        "fct-module": "Language.Distance.Search.BK",
        "fct-package": "language-spelling",
        "fct-signature": "Int -\u003e full -\u003e BKTree full DamerauLevenshtein -\u003e [(full, Distance DamerauLevenshtein)]",
        "fct-source": "src/Language-Distance-Search-BK.html#damerauLevenshtein",
        "fct-type": "function",
        "title": "damerauLevenshtein"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Search BK",
        "module": "Language.Distance.Search.BK",
        "name": "damerauLevenshtein",
        "normalized": "Int-\u003ea-\u003eBKTree a DamerauLevenshtein-\u003e[(a,Distance DamerauLevenshtein)]",
        "package": "language-spelling",
        "partial": "Levenshtein",
        "signature": "Int-\u003efull-\u003eBKTree full DamerauLevenshtein-\u003e[(full,Distance DamerauLevenshtein)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-BK.html#v:empty",
      "description": {
        "fct-module": "Language.Distance.Search.BK",
        "fct-package": "language-spelling",
        "fct-signature": "BKTree full algo",
        "fct-source": "src/Language-Distance-Search-BK.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Search BK",
        "module": "Language.Distance.Search.BK",
        "name": "empty",
        "normalized": "",
        "package": "language-spelling",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-BK.html#v:insert",
      "description": {
        "fct-module": "Language.Distance.Search.BK",
        "fct-package": "language-spelling",
        "fct-signature": "full -\u003e BKTree full algo -\u003e BKTree full algo",
        "fct-source": "src/Language-Distance-Search-BK.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Search BK",
        "module": "Language.Distance.Search.BK",
        "name": "insert",
        "normalized": "a-\u003eBKTree a b-\u003eBKTree a b",
        "package": "language-spelling",
        "partial": "",
        "signature": "full-\u003eBKTree full algo-\u003eBKTree full algo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-BK.html#v:levenshtein",
      "description": {
        "fct-module": "Language.Distance.Search.BK",
        "fct-package": "language-spelling",
        "fct-signature": "Int -\u003e full -\u003e BKTree full Levenshtein -\u003e [(full, Distance Levenshtein)]",
        "fct-source": "src/Language-Distance-Search-BK.html#levenshtein",
        "fct-type": "function",
        "title": "levenshtein"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Search BK",
        "module": "Language.Distance.Search.BK",
        "name": "levenshtein",
        "normalized": "Int-\u003ea-\u003eBKTree a Levenshtein-\u003e[(a,Distance Levenshtein)]",
        "package": "language-spelling",
        "partial": "",
        "signature": "Int-\u003efull-\u003eBKTree full Levenshtein-\u003e[(full,Distance Levenshtein)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-BK.html#v:query",
      "description": {
        "fct-module": "Language.Distance.Search.BK",
        "fct-package": "language-spelling",
        "fct-signature": "Int -\u003e full -\u003e BKTree full algo -\u003e [(full, Distance algo)]",
        "fct-source": "src/Language-Distance-Search-BK.html#query",
        "fct-type": "function",
        "title": "query"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Search BK",
        "module": "Language.Distance.Search.BK",
        "name": "query",
        "normalized": "Int-\u003ea-\u003eBKTree a b-\u003e[(a,Distance b)]",
        "package": "language-spelling",
        "partial": "",
        "signature": "Int-\u003efull-\u003eBKTree full algo-\u003e[(full,Distance algo)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-TST.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of \u003ccode\u003eSearch\u003c/code\u003e based on a ternary search tree\n   (\u003ccode\u003e\u003ca\u003eTSTSet\u003c/a\u003e\u003c/code\u003e): \u003ca\u003ehttps://en.wikipedia.org/wiki/Ternary_search_tree\u003c/a\u003e.  \n\u003c/p\u003e\u003cp\u003eThe searches are performed by manually generating the close word by\n   deleting, transposing, or adding wildcards to match additional characters.\n\u003c/p\u003e\u003cp\u003eThis makes this structure fast for small distances with a small number of\n   generated candidates, but impractical for even slightly larger distances -\n   in my tests \u003ccode\u003e\u003ca\u003eBK\u003c/a\u003e\u003c/code\u003e outpeforms this module when the\n   distance is greater than 2.\n\u003c/p\u003e\u003cp\u003eThe data structure has no knowledge of the distance and thus it does not\n   need to be rebuilt if different edit distances are needed.  However this\n   means that it cannot work with arbitrary \u003ccode\u003eEditDistance\u003c/code\u003e instances are\n   functions need to be defined manually to generate the candidates.  In this\n   case \u003ccode\u003e\u003ca\u003elevenshtein\u003c/a\u003e\u003c/code\u003e uses \u003ccode\u003e\u003ca\u003edeletions\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereplaces\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003einsertions\u003c/a\u003e\u003c/code\u003e to\n   generate the candidates; while \u003ccode\u003e\u003ca\u003edamerauLevenshtein\u003c/a\u003e\u003c/code\u003e also uses\n   \u003ccode\u003e\u003ca\u003etranspositions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Distance.Search.TST",
        "fct-package": "language-spelling",
        "fct-signature": "module",
        "fct-source": "src/Language-Distance-Search-TST.html",
        "fct-type": "module",
        "title": "TST"
      },
      "index": {
        "description": "An implementation of Search based on ternary search tree TSTSet https en.wikipedia.org wiki Ternary search tree The searches are performed by manually generating the close word by deleting transposing or adding wildcards to match additional characters This makes this structure fast for small distances with small number of generated candidates but impractical for even slightly larger distances in my tests BK outpeforms this module when the distance is greater than The data structure has no knowledge of the distance and thus it does not need to be rebuilt if different edit distances are needed However this means that it cannot work with arbitrary EditDistance instances are functions need to be defined manually to generate the candidates In this case levenshtein uses deletions replaces and insertions to generate the candidates while damerauLevenshtein also uses transpositions",
        "hierarchy": "Language Distance Search TST",
        "module": "Language.Distance.Search.TST",
        "name": "TST",
        "normalized": "",
        "package": "language-spelling",
        "partial": "TST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-TST.html#t:TSTSet",
      "description": {
        "fct-module": "Language.Distance.Search.TST",
        "fct-package": "language-spelling",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "TSTSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Search TST",
        "module": "Language.Distance.Search.TST",
        "name": "TSTSet",
        "normalized": "",
        "package": "language-spelling",
        "partial": "TSTSet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-TST.html#t:WildCard",
      "description": {
        "fct-module": "Language.Distance.Search.TST",
        "fct-package": "language-spelling",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "WildCard"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Search TST",
        "module": "Language.Distance.Search.TST",
        "name": "WildCard",
        "normalized": "",
        "package": "language-spelling",
        "partial": "Wild Card",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-TST.html#t:WildList",
      "description": {
        "fct-module": "Language.Distance.Search.TST",
        "fct-package": "language-spelling",
        "fct-signature": "type",
        "fct-type": "type",
        "title": "WildList"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Search TST",
        "module": "Language.Distance.Search.TST",
        "name": "WildList",
        "normalized": "",
        "package": "language-spelling",
        "partial": "Wild List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-TST.html#v:El",
      "description": {
        "fct-module": "Language.Distance.Search.TST",
        "fct-package": "language-spelling",
        "fct-signature": "El a",
        "fct-type": "function",
        "title": "El"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Search TST",
        "module": "Language.Distance.Search.TST",
        "name": "El",
        "normalized": "",
        "package": "language-spelling",
        "partial": "El",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-TST.html#v:WildCard",
      "description": {
        "fct-module": "Language.Distance.Search.TST",
        "fct-package": "language-spelling",
        "fct-signature": "WildCard",
        "fct-type": "function",
        "title": "WildCard"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Search TST",
        "module": "Language.Distance.Search.TST",
        "name": "WildCard",
        "normalized": "",
        "package": "language-spelling",
        "partial": "Wild Card",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-TST.html#v:damerauLevenshtein",
      "description": {
        "fct-module": "Language.Distance.Search.TST",
        "fct-package": "language-spelling",
        "fct-signature": "Int -\u003e full -\u003e TSTSet sym -\u003e [(full, Distance DamerauLevenshtein)]",
        "fct-source": "src/Language-Distance-Search-TST.html#damerauLevenshtein",
        "fct-type": "function",
        "title": "damerauLevenshtein"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Search TST",
        "module": "Language.Distance.Search.TST",
        "name": "damerauLevenshtein",
        "normalized": "Int-\u003ea-\u003eTSTSet b-\u003e[(a,Distance DamerauLevenshtein)]",
        "package": "language-spelling",
        "partial": "Levenshtein",
        "signature": "Int-\u003efull-\u003eTSTSet sym-\u003e[(full,Distance DamerauLevenshtein)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-TST.html#v:deletions",
      "description": {
        "fct-module": "Language.Distance.Search.TST",
        "fct-package": "language-spelling",
        "fct-signature": "[a] -\u003e [[a]]",
        "fct-source": "src/Language-Distance-Search-TST.html#deletions",
        "fct-type": "function",
        "title": "deletions"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Search TST",
        "module": "Language.Distance.Search.TST",
        "name": "deletions",
        "normalized": "[a]-\u003e[[a]]",
        "package": "language-spelling",
        "partial": "",
        "signature": "[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-TST.html#v:empty",
      "description": {
        "fct-module": "Language.Distance.Search.TST",
        "fct-package": "language-spelling",
        "fct-signature": "TSTSet sym",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Search TST",
        "module": "Language.Distance.Search.TST",
        "name": "empty",
        "normalized": "",
        "package": "language-spelling",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-TST.html#v:insert",
      "description": {
        "fct-module": "Language.Distance.Search.TST",
        "fct-package": "language-spelling",
        "fct-signature": "full -\u003e TSTSet sym -\u003e TSTSet sym",
        "fct-source": "src/Language-Distance-Search-TST.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Search TST",
        "module": "Language.Distance.Search.TST",
        "name": "insert",
        "normalized": "a-\u003eTSTSet b-\u003eTSTSet b",
        "package": "language-spelling",
        "partial": "",
        "signature": "full-\u003eTSTSet sym-\u003eTSTSet sym"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-TST.html#v:insertions",
      "description": {
        "fct-module": "Language.Distance.Search.TST",
        "fct-package": "language-spelling",
        "fct-signature": "WildList a -\u003e [WildList a]",
        "fct-source": "src/Language-Distance-Search-TST.html#insertions",
        "fct-type": "function",
        "title": "insertions"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Search TST",
        "module": "Language.Distance.Search.TST",
        "name": "insertions",
        "normalized": "WildList a-\u003e[WildList a]",
        "package": "language-spelling",
        "partial": "",
        "signature": "WildList a-\u003e[WildList a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-TST.html#v:levenshtein",
      "description": {
        "fct-module": "Language.Distance.Search.TST",
        "fct-package": "language-spelling",
        "fct-signature": "Int -\u003e full -\u003e TSTSet sym -\u003e [(full, Distance Levenshtein)]",
        "fct-source": "src/Language-Distance-Search-TST.html#levenshtein",
        "fct-type": "function",
        "title": "levenshtein"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Search TST",
        "module": "Language.Distance.Search.TST",
        "name": "levenshtein",
        "normalized": "Int-\u003ea-\u003eTSTSet b-\u003e[(a,Distance Levenshtein)]",
        "package": "language-spelling",
        "partial": "",
        "signature": "Int-\u003efull-\u003eTSTSet sym-\u003e[(full,Distance Levenshtein)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-TST.html#v:replaces",
      "description": {
        "fct-module": "Language.Distance.Search.TST",
        "fct-package": "language-spelling",
        "fct-signature": "WildList a -\u003e [WildList a]",
        "fct-source": "src/Language-Distance-Search-TST.html#replaces",
        "fct-type": "function",
        "title": "replaces"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Search TST",
        "module": "Language.Distance.Search.TST",
        "name": "replaces",
        "normalized": "WildList a-\u003e[WildList a]",
        "package": "language-spelling",
        "partial": "",
        "signature": "WildList a-\u003e[WildList a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-TST.html#v:transpositions",
      "description": {
        "fct-module": "Language.Distance.Search.TST",
        "fct-package": "language-spelling",
        "fct-signature": "[a] -\u003e [[a]]",
        "fct-source": "src/Language-Distance-Search-TST.html#transpositions",
        "fct-type": "function",
        "title": "transpositions"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Search TST",
        "module": "Language.Distance.Search.TST",
        "name": "transpositions",
        "normalized": "[a]-\u003e[[a]]",
        "package": "language-spelling",
        "partial": "",
        "signature": "[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eSearch\u003c/a\u003e\u003c/code\u003e typeclass lets you build dictinaries and then query them to\n   find words close to a given one.\n\u003c/p\u003e\u003cp\u003eRight now two data types are provided: \u003ccode\u003e\u003ca\u003eTST\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eBK\u003c/a\u003e\u003c/code\u003e, monomorphic\n   functions are provided as well.  The difference is in performance:\n   \u003ccode\u003e\u003ca\u003eTST\u003c/a\u003e\u003c/code\u003e is faster for low distances (less than 3) but impractical for\n   larger ones, where \u003ccode\u003e\u003ca\u003eBK\u003c/a\u003e\u003c/code\u003e is more suited.  See the specific modules for\n   more info.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Distance.Search",
        "fct-package": "language-spelling",
        "fct-signature": "module",
        "fct-source": "src/Language-Distance-Search.html",
        "fct-type": "module",
        "title": "Search"
      },
      "index": {
        "description": "The Search typeclass lets you build dictinaries and then query them to find words close to given one Right now two data types are provided TST and BK monomorphic functions are provided as well The difference is in performance TST is faster for low distances less than but impractical for larger ones where BK is more suited See the specific modules for more info",
        "hierarchy": "Language Distance Search",
        "module": "Language.Distance.Search",
        "name": "Search",
        "normalized": "",
        "package": "language-spelling",
        "partial": "Search",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search.html#t:BKDist",
      "description": {
        "fct-descr": "\u003cp\u003eAgain, wrapping \u003ccode\u003e\u003ca\u003eBKTree\u003c/a\u003e\u003c/code\u003e to have the phantom types in place.\n\u003c/p\u003e",
        "fct-module": "Language.Distance.Search",
        "fct-package": "language-spelling",
        "fct-signature": "newtype",
        "fct-source": "src/Language-Distance-Search.html#BKDist",
        "fct-type": "newtype",
        "title": "BKDist"
      },
      "index": {
        "description": "Again wrapping BKTree to have the phantom types in place",
        "hierarchy": "Language Distance Search",
        "module": "Language.Distance.Search",
        "name": "BKDist",
        "normalized": "",
        "package": "language-spelling",
        "partial": "BKDist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search.html#t:Search",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric class for data structures that can perform queries retrieving words\n   close to a given one.\n\u003c/p\u003e\u003cp\u003eMinimal definition: \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Distance.Search",
        "fct-package": "language-spelling",
        "fct-signature": "class",
        "fct-source": "src/Language-Distance-Search-Class.html#Search",
        "fct-type": "class",
        "title": "Search"
      },
      "index": {
        "description": "Generic class for data structures that can perform queries retrieving words close to given one Minimal definition empty insert and query",
        "hierarchy": "Language Distance Search",
        "module": "Language.Distance.Search",
        "name": "Search",
        "normalized": "",
        "package": "language-spelling",
        "partial": "Search",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search.html#t:TSTDist",
      "description": {
        "fct-descr": "\u003cp\u003eWe need to wrap \u003ccode\u003e\u003ca\u003eTSTSet\u003c/a\u003e\u003c/code\u003e in a newtype because we need the algorithm and the\n   container have to depend on the type.\n\u003c/p\u003e",
        "fct-module": "Language.Distance.Search",
        "fct-package": "language-spelling",
        "fct-signature": "newtype",
        "fct-source": "src/Language-Distance-Search.html#TSTDist",
        "fct-type": "newtype",
        "title": "TSTDist"
      },
      "index": {
        "description": "We need to wrap TSTSet in newtype because we need the algorithm and the container have to depend on the type",
        "hierarchy": "Language Distance Search",
        "module": "Language.Distance.Search",
        "name": "TSTDist",
        "normalized": "",
        "package": "language-spelling",
        "partial": "TSTDist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search.html#v:BKDist",
      "description": {
        "fct-module": "Language.Distance.Search",
        "fct-package": "language-spelling",
        "fct-signature": "BKDist",
        "fct-source": "src/Language-Distance-Search.html#BKDist",
        "fct-type": "function",
        "title": "BKDist"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Search",
        "module": "Language.Distance.Search",
        "name": "BKDist",
        "normalized": "",
        "package": "language-spelling",
        "partial": "BKDist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search.html#v:TSTDist",
      "description": {
        "fct-module": "Language.Distance.Search",
        "fct-package": "language-spelling",
        "fct-signature": "TSTDist",
        "fct-source": "src/Language-Distance-Search.html#TSTDist",
        "fct-type": "function",
        "title": "TSTDist"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Search",
        "module": "Language.Distance.Search",
        "name": "TSTDist",
        "normalized": "",
        "package": "language-spelling",
        "partial": "TSTDist",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search.html#v:empty",
      "description": {
        "fct-module": "Language.Distance.Search",
        "fct-package": "language-spelling",
        "fct-signature": "container",
        "fct-source": "src/Language-Distance-Search-Class.html#empty",
        "fct-type": "method",
        "title": "empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Search",
        "module": "Language.Distance.Search",
        "name": "empty",
        "normalized": "",
        "package": "language-spelling",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search.html#v:fromList",
      "description": {
        "fct-module": "Language.Distance.Search",
        "fct-package": "language-spelling",
        "fct-signature": "[full] -\u003e container",
        "fct-source": "src/Language-Distance-Search-Class.html#fromList",
        "fct-type": "method",
        "title": "fromList"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Search",
        "module": "Language.Distance.Search",
        "name": "fromList",
        "normalized": "[a]-\u003eb",
        "package": "language-spelling",
        "partial": "List",
        "signature": "[full]-\u003econtainer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search.html#v:getBK",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.Distance.Search",
        "fct-package": "language-spelling",
        "fct-signature": "BKTree full algo",
        "fct-source": "src/Language-Distance-Search.html#BKDist",
        "fct-type": "function",
        "title": "getBK"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Search",
        "module": "Language.Distance.Search",
        "name": "getBK",
        "normalized": "",
        "package": "language-spelling",
        "partial": "BK",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search.html#v:getTST",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.Distance.Search",
        "fct-package": "language-spelling",
        "fct-signature": "TSTSet sym",
        "fct-source": "src/Language-Distance-Search.html#TSTDist",
        "fct-type": "function",
        "title": "getTST"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Search",
        "module": "Language.Distance.Search",
        "name": "getTST",
        "normalized": "",
        "package": "language-spelling",
        "partial": "TST",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search.html#v:insert",
      "description": {
        "fct-module": "Language.Distance.Search",
        "fct-package": "language-spelling",
        "fct-signature": "full -\u003e container -\u003e container",
        "fct-source": "src/Language-Distance-Search-Class.html#insert",
        "fct-type": "method",
        "title": "insert"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Search",
        "module": "Language.Distance.Search",
        "name": "insert",
        "normalized": "a-\u003eb-\u003eb",
        "package": "language-spelling",
        "partial": "",
        "signature": "full-\u003econtainer-\u003econtainer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search.html#v:member",
      "description": {
        "fct-module": "Language.Distance.Search",
        "fct-package": "language-spelling",
        "fct-signature": "full -\u003e container -\u003e Bool",
        "fct-source": "src/Language-Distance-Search-Class.html#member",
        "fct-type": "method",
        "title": "member"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Search",
        "module": "Language.Distance.Search",
        "name": "member",
        "normalized": "a-\u003eb-\u003eBool",
        "package": "language-spelling",
        "partial": "",
        "signature": "full-\u003econtainer-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search.html#v:query",
      "description": {
        "fct-module": "Language.Distance.Search",
        "fct-package": "language-spelling",
        "fct-signature": "query",
        "fct-source": "src/Language-Distance-Search-Class.html#query",
        "fct-type": "method",
        "title": "query"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Search",
        "module": "Language.Distance.Search",
        "name": "query",
        "normalized": "",
        "package": "language-spelling",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search.html#v:singleton",
      "description": {
        "fct-module": "Language.Distance.Search",
        "fct-package": "language-spelling",
        "fct-signature": "full -\u003e container",
        "fct-source": "src/Language-Distance-Search-Class.html#singleton",
        "fct-type": "method",
        "title": "singleton"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance Search",
        "module": "Language.Distance.Search",
        "name": "singleton",
        "normalized": "a-\u003eb",
        "package": "language-spelling",
        "partial": "",
        "signature": "full-\u003econtainer"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric interface to calculate the edit instance between two list-like\n   things using various algorithms.\n\u003c/p\u003e\u003cp\u003eRight now, two algorithms are provided, \u003ccode\u003e\u003ca\u003eLevenshtein\u003c/a\u003e\u003c/code\u003e and\n   \u003ccode\u003e\u003ca\u003eDamerauLevenshtein\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Distance",
        "fct-package": "language-spelling",
        "fct-signature": "module",
        "fct-source": "src/Language-Distance.html",
        "fct-type": "module",
        "title": "Distance"
      },
      "index": {
        "description": "Generic interface to calculate the edit instance between two list-like things using various algorithms Right now two algorithms are provided Levenshtein and DamerauLevenshtein",
        "hierarchy": "Language Distance",
        "module": "Language.Distance",
        "name": "Distance",
        "normalized": "",
        "package": "language-spelling",
        "partial": "Distance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance.html#t:DamerauLevenshtein",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eLevenshtein\u003c/a\u003e\u003c/code\u003e, but transpositions are also taken into account:\n   \u003ca\u003ehttps://en.wikipedia.org/wiki/Damerau-Levenshtein_distance\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Distance",
        "fct-package": "language-spelling",
        "fct-signature": "data",
        "fct-source": "src/Language-Distance.html#DamerauLevenshtein",
        "fct-type": "data",
        "title": "DamerauLevenshtein"
      },
      "index": {
        "description": "Like Levenshtein but transpositions are also taken into account https en.wikipedia.org wiki Damerau-Levenshtein distance",
        "hierarchy": "Language Distance",
        "module": "Language.Distance",
        "name": "DamerauLevenshtein",
        "normalized": "",
        "package": "language-spelling",
        "partial": "Damerau Levenshtein",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance.html#t:Distance",
      "description": {
        "fct-module": "Language.Distance",
        "fct-package": "language-spelling",
        "fct-signature": "data",
        "fct-source": "src/Language-Distance-Internal.html#Distance",
        "fct-type": "data",
        "title": "Distance"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance",
        "module": "Language.Distance",
        "name": "Distance",
        "normalized": "",
        "package": "language-spelling",
        "partial": "Distance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance.html#t:EditDistance",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric typeclass for edit distances.  Specify the type manually to use a\nspecific algorithm, for instance\n\u003c/p\u003e\u003cpre\u003e\ndistance \"foo\" \"bar\" :: \u003ccode\u003e\u003ca\u003eDistance\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eDamerauLevenshtein\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eMonomorphic functions are also provided, see \u003ccode\u003e\u003ca\u003elevenshtein\u003c/a\u003e\u003c/code\u003e and\n\u003ccode\u003e\u003ca\u003edamerauLevenshtein\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Distance",
        "fct-package": "language-spelling",
        "fct-signature": "class",
        "fct-source": "src/Language-Distance.html#EditDistance",
        "fct-type": "class",
        "title": "EditDistance"
      },
      "index": {
        "description": "Generic typeclass for edit distances Specify the type manually to use specific algorithm for instance distance foo bar Distance DamerauLevenshtein Monomorphic functions are also provided see levenshtein and damerauLevenshtein",
        "hierarchy": "Language Distance",
        "module": "Language.Distance",
        "name": "EditDistance",
        "normalized": "",
        "package": "language-spelling",
        "partial": "Edit Distance",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance.html#t:Levenshtein",
      "description": {
        "fct-descr": "\u003cp\u003eThe classic Levenshtein distance, where adding, removing or changing a\n   character are taken into account.\n\u003c/p\u003e\u003cp\u003eMore information: \u003ca\u003ehttps://en.wikipedia.org/wiki/Levenshtein_distance\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Distance",
        "fct-package": "language-spelling",
        "fct-signature": "data",
        "fct-source": "src/Language-Distance.html#Levenshtein",
        "fct-type": "data",
        "title": "Levenshtein"
      },
      "index": {
        "description": "The classic Levenshtein distance where adding removing or changing character are taken into account More information https en.wikipedia.org wiki Levenshtein distance",
        "hierarchy": "Language Distance",
        "module": "Language.Distance",
        "name": "Levenshtein",
        "normalized": "",
        "package": "language-spelling",
        "partial": "Levenshtein",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance.html#v:damerauLevenshtein",
      "description": {
        "fct-module": "Language.Distance",
        "fct-package": "language-spelling",
        "fct-signature": "full -\u003e full -\u003e Distance DamerauLevenshtein",
        "fct-source": "src/Language-Distance.html#damerauLevenshtein",
        "fct-type": "function",
        "title": "damerauLevenshtein"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance",
        "module": "Language.Distance",
        "name": "damerauLevenshtein",
        "normalized": "a-\u003ea-\u003eDistance DamerauLevenshtein",
        "package": "language-spelling",
        "partial": "Levenshtein",
        "signature": "full-\u003efull-\u003eDistance DamerauLevenshtein"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance.html#v:distance",
      "description": {
        "fct-module": "Language.Distance",
        "fct-package": "language-spelling",
        "fct-signature": "full -\u003e full -\u003e Distance algo",
        "fct-source": "src/Language-Distance.html#distance",
        "fct-type": "method",
        "title": "distance"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance",
        "module": "Language.Distance",
        "name": "distance",
        "normalized": "a-\u003ea-\u003eDistance b",
        "package": "language-spelling",
        "partial": "",
        "signature": "full-\u003efull-\u003eDistance algo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance.html#v:getDistance",
      "description": {
        "fct-module": "Language.Distance",
        "fct-package": "language-spelling",
        "fct-signature": "Distance algo -\u003e Int",
        "fct-source": "src/Language-Distance-Internal.html#getDistance",
        "fct-type": "function",
        "title": "getDistance"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance",
        "module": "Language.Distance",
        "name": "getDistance",
        "normalized": "Distance a-\u003eInt",
        "package": "language-spelling",
        "partial": "Distance",
        "signature": "Distance algo-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance.html#v:levenshtein",
      "description": {
        "fct-module": "Language.Distance",
        "fct-package": "language-spelling",
        "fct-signature": "full -\u003e full -\u003e Distance Levenshtein",
        "fct-source": "src/Language-Distance.html#levenshtein",
        "fct-type": "function",
        "title": "levenshtein"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Distance",
        "module": "Language.Distance",
        "name": "levenshtein",
        "normalized": "a-\u003ea-\u003eDistance Levenshtein",
        "package": "language-spelling",
        "partial": "",
        "signature": "full-\u003efull-\u003eDistance Levenshtein"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSee the documentation for \u003ccode\u003e\u003ca\u003eInternal\u003c/a\u003e\u003c/code\u003e to see why this\n   module is potentially dangerous.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Phonetic.Internal",
        "fct-package": "language-spelling",
        "fct-signature": "module",
        "fct-source": "src/Language-Phonetic-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "See the documentation for Internal to see why this module is potentially dangerous",
        "hierarchy": "Language Phonetic Internal",
        "module": "Language.Phonetic.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "language-spelling",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic-Internal.html#t:Alphabet",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapped \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Phonetic.Internal",
        "fct-package": "language-spelling",
        "fct-signature": "newtype",
        "fct-source": "src/Language-Phonetic-Internal.html#Alphabet",
        "fct-type": "newtype",
        "title": "Alphabet"
      },
      "index": {
        "description": "wrapped Set Char",
        "hierarchy": "Language Phonetic Internal",
        "module": "Language.Phonetic.Internal",
        "name": "Alphabet",
        "normalized": "",
        "package": "language-spelling",
        "partial": "Alphabet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic-Internal.html#t:Code",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapped \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Phonetic.Internal",
        "fct-package": "language-spelling",
        "fct-signature": "newtype",
        "fct-source": "src/Language-Phonetic-Internal.html#Code",
        "fct-type": "newtype",
        "title": "Code"
      },
      "index": {
        "description": "wrapped ByteString",
        "hierarchy": "Language Phonetic Internal",
        "module": "Language.Phonetic.Internal",
        "name": "Code",
        "normalized": "",
        "package": "language-spelling",
        "partial": "Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic-Internal.html#v:Alphabet",
      "description": {
        "fct-module": "Language.Phonetic.Internal",
        "fct-package": "language-spelling",
        "fct-signature": "Alphabet",
        "fct-source": "src/Language-Phonetic-Internal.html#Alphabet",
        "fct-type": "function",
        "title": "Alphabet"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Phonetic Internal",
        "module": "Language.Phonetic.Internal",
        "name": "Alphabet",
        "normalized": "",
        "package": "language-spelling",
        "partial": "Alphabet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic-Internal.html#v:Code",
      "description": {
        "fct-module": "Language.Phonetic.Internal",
        "fct-package": "language-spelling",
        "fct-signature": "Code",
        "fct-source": "src/Language-Phonetic-Internal.html#Code",
        "fct-type": "function",
        "title": "Code"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Phonetic Internal",
        "module": "Language.Phonetic.Internal",
        "name": "Code",
        "normalized": "",
        "package": "language-spelling",
        "partial": "Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic-Internal.html#v:getAlphabet",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.Phonetic.Internal",
        "fct-package": "language-spelling",
        "fct-signature": "Set Char",
        "fct-source": "src/Language-Phonetic-Internal.html#Alphabet",
        "fct-type": "function",
        "title": "getAlphabet"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Phonetic Internal",
        "module": "Language.Phonetic.Internal",
        "name": "getAlphabet",
        "normalized": "",
        "package": "language-spelling",
        "partial": "Alphabet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic-Internal.html#v:getCode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.Phonetic.Internal",
        "fct-package": "language-spelling",
        "fct-signature": "ByteString",
        "fct-source": "src/Language-Phonetic-Internal.html#Code",
        "fct-type": "function",
        "title": "getCode"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Phonetic Internal",
        "module": "Language.Phonetic.Internal",
        "name": "getCode",
        "normalized": "",
        "package": "language-spelling",
        "partial": "Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\"A phonetic algorithm is an algorithm for indexing of words by their\n   pronunciation\": \u003ca\u003ehttps://en.wikipedia.org/wiki/Phonetic_algorithm\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eRight now only a very rudimental one is provided, \u003ccode\u003e\u003ca\u003eSoundex\u003c/a\u003e\u003c/code\u003e; plus\n   \u003ccode\u003e\u003ca\u003eEncoder\u003c/a\u003e\u003c/code\u003e, a generic interface.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Phonetic",
        "fct-package": "language-spelling",
        "fct-signature": "module",
        "fct-source": "src/Language-Phonetic.html",
        "fct-type": "module",
        "title": "Phonetic"
      },
      "index": {
        "description": "phonetic algorithm is an algorithm for indexing of words by their pronunciation https en.wikipedia.org wiki Phonetic algorithm Right now only very rudimental one is provided Soundex plus Encoder generic interface",
        "hierarchy": "Language Phonetic",
        "module": "Language.Phonetic",
        "name": "Phonetic",
        "normalized": "",
        "package": "language-spelling",
        "partial": "Phonetic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic.html#t:Alphabet",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapped \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Phonetic",
        "fct-package": "language-spelling",
        "fct-signature": "data",
        "fct-source": "src/Language-Phonetic-Internal.html#Alphabet",
        "fct-type": "data",
        "title": "Alphabet"
      },
      "index": {
        "description": "wrapped Set Char",
        "hierarchy": "Language Phonetic",
        "module": "Language.Phonetic",
        "name": "Alphabet",
        "normalized": "",
        "package": "language-spelling",
        "partial": "Alphabet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic.html#t:Code",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapped \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Phonetic",
        "fct-package": "language-spelling",
        "fct-signature": "data",
        "fct-source": "src/Language-Phonetic-Internal.html#Code",
        "fct-type": "data",
        "title": "Code"
      },
      "index": {
        "description": "wrapped ByteString",
        "hierarchy": "Language Phonetic",
        "module": "Language.Phonetic",
        "name": "Code",
        "normalized": "",
        "package": "language-spelling",
        "partial": "Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic.html#t:Encoder",
      "description": {
        "fct-descr": "\u003cp\u003eType class for algorithms that encode words based on their pronunciation.\n\u003c/p\u003e\u003cp\u003eMinimal definition: \u003ccode\u003e\u003ca\u003ealphabet\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eencodeUnsafe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Phonetic",
        "fct-package": "language-spelling",
        "fct-signature": "class",
        "fct-source": "src/Language-Phonetic-Encoder.html#Encoder",
        "fct-type": "class",
        "title": "Encoder"
      },
      "index": {
        "description": "Type class for algorithms that encode words based on their pronunciation Minimal definition alphabet encodeUnsafe",
        "hierarchy": "Language Phonetic",
        "module": "Language.Phonetic",
        "name": "Encoder",
        "normalized": "",
        "package": "language-spelling",
        "partial": "Encoder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic.html#t:Soundex",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ca\u003ehttps://en.wikipedia.org/wiki/Soundex\u003c/a\u003e for more info.\n\u003c/p\u003e",
        "fct-module": "Language.Phonetic",
        "fct-package": "language-spelling",
        "fct-signature": "data",
        "fct-source": "src/Language-Phonetic-Soundex.html#Soundex",
        "fct-type": "data",
        "title": "Soundex"
      },
      "index": {
        "description": "See https en.wikipedia.org wiki Soundex for more info",
        "hierarchy": "Language Phonetic",
        "module": "Language.Phonetic",
        "name": "Soundex",
        "normalized": "",
        "package": "language-spelling",
        "partial": "Soundex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic.html#v:alphabet",
      "description": {
        "fct-descr": "\u003cp\u003eThe range of characters that the algorithm will accept\n\u003c/p\u003e",
        "fct-module": "Language.Phonetic",
        "fct-package": "language-spelling",
        "fct-signature": "Alphabet enc",
        "fct-source": "src/Language-Phonetic-Encoder.html#alphabet",
        "fct-type": "method",
        "title": "alphabet"
      },
      "index": {
        "description": "The range of characters that the algorithm will accept",
        "hierarchy": "Language Phonetic",
        "module": "Language.Phonetic",
        "name": "alphabet",
        "normalized": "",
        "package": "language-spelling",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eSafe \u003ccode\u003e\u003ca\u003eencodeUnsafe\u003c/a\u003e\u003c/code\u003e: checks that all the characters are in \u003ccode\u003e\u003ca\u003ealphabet\u003c/a\u003e\u003c/code\u003e\n   first.\n\u003c/p\u003e",
        "fct-module": "Language.Phonetic",
        "fct-package": "language-spelling",
        "fct-signature": "full -\u003e Maybe (Code enc)",
        "fct-source": "src/Language-Phonetic-Encoder.html#encode",
        "fct-type": "method",
        "title": "encode"
      },
      "index": {
        "description": "Safe encodeUnsafe checks that all the characters are in alphabet first",
        "hierarchy": "Language Phonetic",
        "module": "Language.Phonetic",
        "name": "encode",
        "normalized": "a-\u003eMaybe(Code b)",
        "package": "language-spelling",
        "partial": "",
        "signature": "full-\u003eMaybe(Code enc)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic.html#v:encodeUnsafe",
      "description": {
        "fct-descr": "\u003cp\u003eUnchecked encoding: if characters not in \u003ccode\u003e\u003ca\u003ealphabet\u003c/a\u003e\u003c/code\u003e are in the word the\n   behaviour is undefined.  You should use \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Phonetic",
        "fct-package": "language-spelling",
        "fct-signature": "full -\u003e Code enc",
        "fct-source": "src/Language-Phonetic-Encoder.html#encodeUnsafe",
        "fct-type": "method",
        "title": "encodeUnsafe"
      },
      "index": {
        "description": "Unchecked encoding if characters not in alphabet are in the word the behaviour is undefined You should use encode",
        "hierarchy": "Language Phonetic",
        "module": "Language.Phonetic",
        "name": "encodeUnsafe",
        "normalized": "a-\u003eCode b",
        "package": "language-spelling",
        "partial": "Unsafe",
        "signature": "full-\u003eCode enc"
      }
    }
  }
]