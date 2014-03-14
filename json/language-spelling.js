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
        "word": "language-spelling"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module lets you tamper with \u003ccode\u003e\u003ca\u003eDistance\u003c/a\u003e\u003c/code\u003e - in other words you can give\n   it whatever phantom type since the constructor is exported.\n\u003c/p\u003e\u003cp\u003eThe only use for this module is to construct new \u003ccode\u003e\u003ca\u003eDistance\u003c/a\u003e\u003c/code\u003e data when\n   writing \u003ccode\u003eEditDistance\u003c/code\u003e instances, but be careful not to change the phantom\n   type of existing \u003ccode\u003e\u003ca\u003eDistance\u003c/a\u003e\u003c/code\u003es!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Distance.Internal",
          "name": "Internal",
          "package": "language-spelling",
          "source": "src/Language-Distance-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "This module lets you tamper with Distance in other words you can give it whatever phantom type since the constructor is exported The only use for this module is to construct new Distance data when writing EditDistance instances but be careful not to change the phantom type of existing Distance",
          "hierarchy": "Language Distance Internal",
          "module": "Language.Distance.Internal",
          "name": "Internal",
          "package": "language-spelling",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Internal",
          "name": "Distance",
          "package": "language-spelling",
          "source": "src/Language-Distance-Internal.html#Distance",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Language Distance Internal",
          "module": "Language.Distance.Internal",
          "name": "Distance",
          "package": "language-spelling",
          "partial": "Distance",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Internal.html#t:Distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Internal",
          "name": "Distance",
          "package": "language-spelling",
          "signature": "Distance",
          "source": "src/Language-Distance-Internal.html#Distance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Distance Internal",
          "module": "Language.Distance.Internal",
          "name": "Distance",
          "package": "language-spelling",
          "partial": "Distance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Internal.html#v:Distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Internal",
          "name": "getDistance",
          "package": "language-spelling",
          "signature": "Int",
          "source": "src/Language-Distance-Internal.html#Distance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Distance Internal",
          "module": "Language.Distance.Internal",
          "name": "getDistance",
          "package": "language-spelling",
          "partial": "Distance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Internal.html#v:getDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of \u003ccode\u003e\u003ca\u003eSearch\u003c/a\u003e\u003c/code\u003e based on a BK-tree:\n   \u003ca\u003ehttps://en.wikipedia.org/wiki/Bk-tree\u003c/a\u003e.  It performs reasonably, and it\n   scales decently as the query distance increases.  Moreover the data\n   structure can work on any instance of \u003ccode\u003e\u003ca\u003eEditDistance\u003c/a\u003e\u003c/code\u003e, or in fact any metric\n   space - a generic interface is provided in \u003ccode\u003e\u003ca\u003eBKTree\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eHowever, for very short distances (less than 3),\n   \u003ccode\u003e\u003ca\u003eTST\u003c/a\u003e\u003c/code\u003e is faster.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Distance.Search.BK",
          "name": "BK",
          "package": "language-spelling",
          "source": "src/Language-Distance-Search-BK.html",
          "type": "module"
        },
        "index": {
          "description": "An implementation of Search based on BK-tree https en.wikipedia.org wiki Bk-tree It performs reasonably and it scales decently as the query distance increases Moreover the data structure can work on any instance of EditDistance or in fact any metric space generic interface is provided in BKTree However for very short distances less than TST is faster",
          "hierarchy": "Language Distance Search BK",
          "module": "Language.Distance.Search.BK",
          "name": "BK",
          "package": "language-spelling",
          "partial": "BK",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-BK.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Search.BK",
          "name": "BKTree",
          "package": "language-spelling",
          "source": "src/Language-Distance-Search-BK.html#BKTree",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Distance Search BK",
          "module": "Language.Distance.Search.BK",
          "name": "BKTree",
          "package": "language-spelling",
          "partial": "BKTree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-BK.html#t:BKTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Search.BK",
          "name": "damerauLevenshtein",
          "package": "language-spelling",
          "signature": "Int -\u003e full -\u003e BKTree full DamerauLevenshtein -\u003e [(full, Distance DamerauLevenshtein)]",
          "source": "src/Language-Distance-Search-BK.html#damerauLevenshtein",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Distance Search BK",
          "module": "Language.Distance.Search.BK",
          "name": "damerauLevenshtein",
          "normalized": "Int-\u003ea-\u003eBKTree a DamerauLevenshtein-\u003e[(a,Distance DamerauLevenshtein)]",
          "package": "language-spelling",
          "partial": "Levenshtein",
          "signature": "Int-\u003efull-\u003eBKTree full DamerauLevenshtein-\u003e[(full,Distance DamerauLevenshtein)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-BK.html#v:damerauLevenshtein"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Search.BK",
          "name": "empty",
          "package": "language-spelling",
          "signature": "BKTree full algo",
          "source": "src/Language-Distance-Search-BK.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Distance Search BK",
          "module": "Language.Distance.Search.BK",
          "name": "empty",
          "package": "language-spelling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-BK.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Search.BK",
          "name": "insert",
          "package": "language-spelling",
          "signature": "full -\u003e BKTree full algo -\u003e BKTree full algo",
          "source": "src/Language-Distance-Search-BK.html#insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Distance Search BK",
          "module": "Language.Distance.Search.BK",
          "name": "insert",
          "normalized": "a-\u003eBKTree a b-\u003eBKTree a b",
          "package": "language-spelling",
          "signature": "full-\u003eBKTree full algo-\u003eBKTree full algo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-BK.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Search.BK",
          "name": "levenshtein",
          "package": "language-spelling",
          "signature": "Int -\u003e full -\u003e BKTree full Levenshtein -\u003e [(full, Distance Levenshtein)]",
          "source": "src/Language-Distance-Search-BK.html#levenshtein",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Distance Search BK",
          "module": "Language.Distance.Search.BK",
          "name": "levenshtein",
          "normalized": "Int-\u003ea-\u003eBKTree a Levenshtein-\u003e[(a,Distance Levenshtein)]",
          "package": "language-spelling",
          "signature": "Int-\u003efull-\u003eBKTree full Levenshtein-\u003e[(full,Distance Levenshtein)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-BK.html#v:levenshtein"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Search.BK",
          "name": "query",
          "package": "language-spelling",
          "signature": "Int -\u003e full -\u003e BKTree full algo -\u003e [(full, Distance algo)]",
          "source": "src/Language-Distance-Search-BK.html#query",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Distance Search BK",
          "module": "Language.Distance.Search.BK",
          "name": "query",
          "normalized": "Int-\u003ea-\u003eBKTree a b-\u003e[(a,Distance b)]",
          "package": "language-spelling",
          "signature": "Int-\u003efull-\u003eBKTree full algo-\u003e[(full,Distance algo)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-BK.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of \u003ccode\u003eSearch\u003c/code\u003e based on a ternary search tree\n   (\u003ccode\u003e\u003ca\u003eTSTSet\u003c/a\u003e\u003c/code\u003e): \u003ca\u003ehttps://en.wikipedia.org/wiki/Ternary_search_tree\u003c/a\u003e.  \n\u003c/p\u003e\u003cp\u003eThe searches are performed by manually generating the close word by\n   deleting, transposing, or adding wildcards to match additional characters.\n\u003c/p\u003e\u003cp\u003eThis makes this structure fast for small distances with a small number of\n   generated candidates, but impractical for even slightly larger distances -\n   in my tests \u003ccode\u003e\u003ca\u003eBK\u003c/a\u003e\u003c/code\u003e outpeforms this module when the\n   distance is greater than 2.\n\u003c/p\u003e\u003cp\u003eThe data structure has no knowledge of the distance and thus it does not\n   need to be rebuilt if different edit distances are needed.  However this\n   means that it cannot work with arbitrary \u003ccode\u003eEditDistance\u003c/code\u003e instances are\n   functions need to be defined manually to generate the candidates.  In this\n   case \u003ccode\u003e\u003ca\u003elevenshtein\u003c/a\u003e\u003c/code\u003e uses \u003ccode\u003e\u003ca\u003edeletions\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ereplaces\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003einsertions\u003c/a\u003e\u003c/code\u003e to\n   generate the candidates; while \u003ccode\u003e\u003ca\u003edamerauLevenshtein\u003c/a\u003e\u003c/code\u003e also uses\n   \u003ccode\u003e\u003ca\u003etranspositions\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Distance.Search.TST",
          "name": "TST",
          "package": "language-spelling",
          "source": "src/Language-Distance-Search-TST.html",
          "type": "module"
        },
        "index": {
          "description": "An implementation of Search based on ternary search tree TSTSet https en.wikipedia.org wiki Ternary search tree The searches are performed by manually generating the close word by deleting transposing or adding wildcards to match additional characters This makes this structure fast for small distances with small number of generated candidates but impractical for even slightly larger distances in my tests BK outpeforms this module when the distance is greater than The data structure has no knowledge of the distance and thus it does not need to be rebuilt if different edit distances are needed However this means that it cannot work with arbitrary EditDistance instances are functions need to be defined manually to generate the candidates In this case levenshtein uses deletions replaces and insertions to generate the candidates while damerauLevenshtein also uses transpositions",
          "hierarchy": "Language Distance Search TST",
          "module": "Language.Distance.Search.TST",
          "name": "TST",
          "package": "language-spelling",
          "partial": "TST",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-TST.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Search.TST",
          "name": "TSTSet",
          "package": "language-spelling",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Distance Search TST",
          "module": "Language.Distance.Search.TST",
          "name": "TSTSet",
          "package": "language-spelling",
          "partial": "TSTSet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-TST.html#t:TSTSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Search.TST",
          "name": "WildCard",
          "package": "language-spelling",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Distance Search TST",
          "module": "Language.Distance.Search.TST",
          "name": "WildCard",
          "package": "language-spelling",
          "partial": "Wild Card",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-TST.html#t:WildCard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Search.TST",
          "name": "WildList",
          "package": "language-spelling",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Distance Search TST",
          "module": "Language.Distance.Search.TST",
          "name": "WildList",
          "package": "language-spelling",
          "partial": "Wild List",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-TST.html#t:WildList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Search.TST",
          "name": "El",
          "package": "language-spelling",
          "signature": "El a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Distance Search TST",
          "module": "Language.Distance.Search.TST",
          "name": "El",
          "package": "language-spelling",
          "partial": "El",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-TST.html#v:El"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Search.TST",
          "name": "WildCard",
          "package": "language-spelling",
          "signature": "WildCard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Distance Search TST",
          "module": "Language.Distance.Search.TST",
          "name": "WildCard",
          "package": "language-spelling",
          "partial": "Wild Card",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-TST.html#v:WildCard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Search.TST",
          "name": "damerauLevenshtein",
          "package": "language-spelling",
          "signature": "Int -\u003e full -\u003e TSTSet sym -\u003e [(full, Distance DamerauLevenshtein)]",
          "source": "src/Language-Distance-Search-TST.html#damerauLevenshtein",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Distance Search TST",
          "module": "Language.Distance.Search.TST",
          "name": "damerauLevenshtein",
          "normalized": "Int-\u003ea-\u003eTSTSet b-\u003e[(a,Distance DamerauLevenshtein)]",
          "package": "language-spelling",
          "partial": "Levenshtein",
          "signature": "Int-\u003efull-\u003eTSTSet sym-\u003e[(full,Distance DamerauLevenshtein)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-TST.html#v:damerauLevenshtein"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Search.TST",
          "name": "deletions",
          "package": "language-spelling",
          "signature": "[a] -\u003e [[a]]",
          "source": "src/Language-Distance-Search-TST.html#deletions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Distance Search TST",
          "module": "Language.Distance.Search.TST",
          "name": "deletions",
          "normalized": "[a]-\u003e[[a]]",
          "package": "language-spelling",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-TST.html#v:deletions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Search.TST",
          "name": "empty",
          "package": "language-spelling",
          "signature": "TSTSet sym",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Distance Search TST",
          "module": "Language.Distance.Search.TST",
          "name": "empty",
          "package": "language-spelling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-TST.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Search.TST",
          "name": "insert",
          "package": "language-spelling",
          "signature": "full -\u003e TSTSet sym -\u003e TSTSet sym",
          "source": "src/Language-Distance-Search-TST.html#insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Distance Search TST",
          "module": "Language.Distance.Search.TST",
          "name": "insert",
          "normalized": "a-\u003eTSTSet b-\u003eTSTSet b",
          "package": "language-spelling",
          "signature": "full-\u003eTSTSet sym-\u003eTSTSet sym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-TST.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Search.TST",
          "name": "insertions",
          "package": "language-spelling",
          "signature": "WildList a -\u003e [WildList a]",
          "source": "src/Language-Distance-Search-TST.html#insertions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Distance Search TST",
          "module": "Language.Distance.Search.TST",
          "name": "insertions",
          "normalized": "WildList a-\u003e[WildList a]",
          "package": "language-spelling",
          "signature": "WildList a-\u003e[WildList a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-TST.html#v:insertions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Search.TST",
          "name": "levenshtein",
          "package": "language-spelling",
          "signature": "Int -\u003e full -\u003e TSTSet sym -\u003e [(full, Distance Levenshtein)]",
          "source": "src/Language-Distance-Search-TST.html#levenshtein",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Distance Search TST",
          "module": "Language.Distance.Search.TST",
          "name": "levenshtein",
          "normalized": "Int-\u003ea-\u003eTSTSet b-\u003e[(a,Distance Levenshtein)]",
          "package": "language-spelling",
          "signature": "Int-\u003efull-\u003eTSTSet sym-\u003e[(full,Distance Levenshtein)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-TST.html#v:levenshtein"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Search.TST",
          "name": "replaces",
          "package": "language-spelling",
          "signature": "WildList a -\u003e [WildList a]",
          "source": "src/Language-Distance-Search-TST.html#replaces",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Distance Search TST",
          "module": "Language.Distance.Search.TST",
          "name": "replaces",
          "normalized": "WildList a-\u003e[WildList a]",
          "package": "language-spelling",
          "signature": "WildList a-\u003e[WildList a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-TST.html#v:replaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Search.TST",
          "name": "transpositions",
          "package": "language-spelling",
          "signature": "[a] -\u003e [[a]]",
          "source": "src/Language-Distance-Search-TST.html#transpositions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Distance Search TST",
          "module": "Language.Distance.Search.TST",
          "name": "transpositions",
          "normalized": "[a]-\u003e[[a]]",
          "package": "language-spelling",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search-TST.html#v:transpositions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eSearch\u003c/a\u003e\u003c/code\u003e typeclass lets you build dictinaries and then query them to\n   find words close to a given one.\n\u003c/p\u003e\u003cp\u003eRight now two data types are provided: \u003ccode\u003e\u003ca\u003eTST\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eBK\u003c/a\u003e\u003c/code\u003e, monomorphic\n   functions are provided as well.  The difference is in performance:\n   \u003ccode\u003e\u003ca\u003eTST\u003c/a\u003e\u003c/code\u003e is faster for low distances (less than 3) but impractical for\n   larger ones, where \u003ccode\u003e\u003ca\u003eBK\u003c/a\u003e\u003c/code\u003e is more suited.  See the specific modules for\n   more info.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Distance.Search",
          "name": "Search",
          "package": "language-spelling",
          "source": "src/Language-Distance-Search.html",
          "type": "module"
        },
        "index": {
          "description": "The Search typeclass lets you build dictinaries and then query them to find words close to given one Right now two data types are provided TST and BK monomorphic functions are provided as well The difference is in performance TST is faster for low distances less than but impractical for larger ones where BK is more suited See the specific modules for more info",
          "hierarchy": "Language Distance Search",
          "module": "Language.Distance.Search",
          "name": "Search",
          "package": "language-spelling",
          "partial": "Search",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAgain, wrapping \u003ccode\u003e\u003ca\u003eBKTree\u003c/a\u003e\u003c/code\u003e to have the phantom types in place.\n\u003c/p\u003e",
          "module": "Language.Distance.Search",
          "name": "BKDist",
          "package": "language-spelling",
          "source": "src/Language-Distance-Search.html#BKDist",
          "type": "newtype"
        },
        "index": {
          "description": "Again wrapping BKTree to have the phantom types in place",
          "hierarchy": "Language Distance Search",
          "module": "Language.Distance.Search",
          "name": "BKDist",
          "package": "language-spelling",
          "partial": "BKDist",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search.html#t:BKDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric class for data structures that can perform queries retrieving words\n   close to a given one.\n\u003c/p\u003e\u003cp\u003eMinimal definition: \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003einsert\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003equery\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Distance.Search",
          "name": "Search",
          "package": "language-spelling",
          "source": "src/Language-Distance-Search-Class.html#Search",
          "type": "class"
        },
        "index": {
          "description": "Generic class for data structures that can perform queries retrieving words close to given one Minimal definition empty insert and query",
          "hierarchy": "Language Distance Search",
          "module": "Language.Distance.Search",
          "name": "Search",
          "package": "language-spelling",
          "partial": "Search",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search.html#t:Search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe need to wrap \u003ccode\u003e\u003ca\u003eTSTSet\u003c/a\u003e\u003c/code\u003e in a newtype because we need the algorithm and the\n   container have to depend on the type.\n\u003c/p\u003e",
          "module": "Language.Distance.Search",
          "name": "TSTDist",
          "package": "language-spelling",
          "source": "src/Language-Distance-Search.html#TSTDist",
          "type": "newtype"
        },
        "index": {
          "description": "We need to wrap TSTSet in newtype because we need the algorithm and the container have to depend on the type",
          "hierarchy": "Language Distance Search",
          "module": "Language.Distance.Search",
          "name": "TSTDist",
          "package": "language-spelling",
          "partial": "TSTDist",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search.html#t:TSTDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Search",
          "name": "BKDist",
          "package": "language-spelling",
          "signature": "BKDist",
          "source": "src/Language-Distance-Search.html#BKDist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Distance Search",
          "module": "Language.Distance.Search",
          "name": "BKDist",
          "package": "language-spelling",
          "partial": "BKDist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search.html#v:BKDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Search",
          "name": "TSTDist",
          "package": "language-spelling",
          "signature": "TSTDist",
          "source": "src/Language-Distance-Search.html#TSTDist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Distance Search",
          "module": "Language.Distance.Search",
          "name": "TSTDist",
          "package": "language-spelling",
          "partial": "TSTDist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search.html#v:TSTDist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Search",
          "name": "empty",
          "package": "language-spelling",
          "signature": "container",
          "source": "src/Language-Distance-Search-Class.html#empty",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Distance Search",
          "module": "Language.Distance.Search",
          "name": "empty",
          "package": "language-spelling",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Search",
          "name": "fromList",
          "package": "language-spelling",
          "signature": "[full] -\u003e container",
          "source": "src/Language-Distance-Search-Class.html#fromList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Distance Search",
          "module": "Language.Distance.Search",
          "name": "fromList",
          "normalized": "[a]-\u003eb",
          "package": "language-spelling",
          "partial": "List",
          "signature": "[full]-\u003econtainer",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Search",
          "name": "getBK",
          "package": "language-spelling",
          "signature": "BKTree full algo",
          "source": "src/Language-Distance-Search.html#BKDist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Distance Search",
          "module": "Language.Distance.Search",
          "name": "getBK",
          "package": "language-spelling",
          "partial": "BK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search.html#v:getBK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Search",
          "name": "getTST",
          "package": "language-spelling",
          "signature": "TSTSet sym",
          "source": "src/Language-Distance-Search.html#TSTDist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Distance Search",
          "module": "Language.Distance.Search",
          "name": "getTST",
          "package": "language-spelling",
          "partial": "TST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search.html#v:getTST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Search",
          "name": "insert",
          "package": "language-spelling",
          "signature": "full -\u003e container -\u003e container",
          "source": "src/Language-Distance-Search-Class.html#insert",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Distance Search",
          "module": "Language.Distance.Search",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eb",
          "package": "language-spelling",
          "signature": "full-\u003econtainer-\u003econtainer",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Search",
          "name": "member",
          "package": "language-spelling",
          "signature": "full -\u003e container -\u003e Bool",
          "source": "src/Language-Distance-Search-Class.html#member",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Distance Search",
          "module": "Language.Distance.Search",
          "name": "member",
          "normalized": "a-\u003eb-\u003eBool",
          "package": "language-spelling",
          "signature": "full-\u003econtainer-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Search",
          "name": "query",
          "package": "language-spelling",
          "signature": "query",
          "source": "src/Language-Distance-Search-Class.html#query",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Distance Search",
          "module": "Language.Distance.Search",
          "name": "query",
          "package": "language-spelling",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance.Search",
          "name": "singleton",
          "package": "language-spelling",
          "signature": "full -\u003e container",
          "source": "src/Language-Distance-Search-Class.html#singleton",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Distance Search",
          "module": "Language.Distance.Search",
          "name": "singleton",
          "normalized": "a-\u003eb",
          "package": "language-spelling",
          "signature": "full-\u003econtainer",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance-Search.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric interface to calculate the edit instance between two list-like\n   things using various algorithms.\n\u003c/p\u003e\u003cp\u003eRight now, two algorithms are provided, \u003ccode\u003e\u003ca\u003eLevenshtein\u003c/a\u003e\u003c/code\u003e and\n   \u003ccode\u003e\u003ca\u003eDamerauLevenshtein\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Distance",
          "name": "Distance",
          "package": "language-spelling",
          "source": "src/Language-Distance.html",
          "type": "module"
        },
        "index": {
          "description": "Generic interface to calculate the edit instance between two list-like things using various algorithms Right now two algorithms are provided Levenshtein and DamerauLevenshtein",
          "hierarchy": "Language Distance",
          "module": "Language.Distance",
          "name": "Distance",
          "package": "language-spelling",
          "partial": "Distance",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eLevenshtein\u003c/a\u003e\u003c/code\u003e, but transpositions are also taken into account:\n   \u003ca\u003ehttps://en.wikipedia.org/wiki/Damerau-Levenshtein_distance\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Language.Distance",
          "name": "DamerauLevenshtein",
          "package": "language-spelling",
          "source": "src/Language-Distance.html#DamerauLevenshtein",
          "type": "data"
        },
        "index": {
          "description": "Like Levenshtein but transpositions are also taken into account https en.wikipedia.org wiki Damerau-Levenshtein distance",
          "hierarchy": "Language Distance",
          "module": "Language.Distance",
          "name": "DamerauLevenshtein",
          "package": "language-spelling",
          "partial": "Damerau Levenshtein",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance.html#t:DamerauLevenshtein"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance",
          "name": "Distance",
          "package": "language-spelling",
          "source": "src/Language-Distance-Internal.html#Distance",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language Distance",
          "module": "Language.Distance",
          "name": "Distance",
          "package": "language-spelling",
          "partial": "Distance",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance.html#t:Distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric typeclass for edit distances.  Specify the type manually to use a\nspecific algorithm, for instance\n\u003c/p\u003e\u003cpre\u003e\ndistance \"foo\" \"bar\" :: \u003ccode\u003e\u003ca\u003eDistance\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eDamerauLevenshtein\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eMonomorphic functions are also provided, see \u003ccode\u003e\u003ca\u003elevenshtein\u003c/a\u003e\u003c/code\u003e and\n\u003ccode\u003e\u003ca\u003edamerauLevenshtein\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Distance",
          "name": "EditDistance",
          "package": "language-spelling",
          "source": "src/Language-Distance.html#EditDistance",
          "type": "class"
        },
        "index": {
          "description": "Generic typeclass for edit distances Specify the type manually to use specific algorithm for instance distance foo bar Distance DamerauLevenshtein Monomorphic functions are also provided see levenshtein and damerauLevenshtein",
          "hierarchy": "Language Distance",
          "module": "Language.Distance",
          "name": "EditDistance",
          "package": "language-spelling",
          "partial": "Edit Distance",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance.html#t:EditDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe classic Levenshtein distance, where adding, removing or changing a\n   character are taken into account.\n\u003c/p\u003e\u003cp\u003eMore information: \u003ca\u003ehttps://en.wikipedia.org/wiki/Levenshtein_distance\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Language.Distance",
          "name": "Levenshtein",
          "package": "language-spelling",
          "source": "src/Language-Distance.html#Levenshtein",
          "type": "data"
        },
        "index": {
          "description": "The classic Levenshtein distance where adding removing or changing character are taken into account More information https en.wikipedia.org wiki Levenshtein distance",
          "hierarchy": "Language Distance",
          "module": "Language.Distance",
          "name": "Levenshtein",
          "package": "language-spelling",
          "partial": "Levenshtein",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance.html#t:Levenshtein"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance",
          "name": "damerauLevenshtein",
          "package": "language-spelling",
          "signature": "full -\u003e full -\u003e Distance DamerauLevenshtein",
          "source": "src/Language-Distance.html#damerauLevenshtein",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Distance",
          "module": "Language.Distance",
          "name": "damerauLevenshtein",
          "normalized": "a-\u003ea-\u003eDistance DamerauLevenshtein",
          "package": "language-spelling",
          "partial": "Levenshtein",
          "signature": "full-\u003efull-\u003eDistance DamerauLevenshtein",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance.html#v:damerauLevenshtein"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance",
          "name": "distance",
          "package": "language-spelling",
          "signature": "full -\u003e full -\u003e Distance algo",
          "source": "src/Language-Distance.html#distance",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Distance",
          "module": "Language.Distance",
          "name": "distance",
          "normalized": "a-\u003ea-\u003eDistance b",
          "package": "language-spelling",
          "signature": "full-\u003efull-\u003eDistance algo",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance.html#v:distance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance",
          "name": "getDistance",
          "package": "language-spelling",
          "signature": "Distance algo -\u003e Int",
          "source": "src/Language-Distance-Internal.html#getDistance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Distance",
          "module": "Language.Distance",
          "name": "getDistance",
          "normalized": "Distance a-\u003eInt",
          "package": "language-spelling",
          "partial": "Distance",
          "signature": "Distance algo-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance.html#v:getDistance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Distance",
          "name": "levenshtein",
          "package": "language-spelling",
          "signature": "full -\u003e full -\u003e Distance Levenshtein",
          "source": "src/Language-Distance.html#levenshtein",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Distance",
          "module": "Language.Distance",
          "name": "levenshtein",
          "normalized": "a-\u003ea-\u003eDistance Levenshtein",
          "package": "language-spelling",
          "signature": "full-\u003efull-\u003eDistance Levenshtein",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Distance.html#v:levenshtein"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSee the documentation for \u003ccode\u003e\u003ca\u003eInternal\u003c/a\u003e\u003c/code\u003e to see why this\n   module is potentially dangerous.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Phonetic.Internal",
          "name": "Internal",
          "package": "language-spelling",
          "source": "src/Language-Phonetic-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "See the documentation for Internal to see why this module is potentially dangerous",
          "hierarchy": "Language Phonetic Internal",
          "module": "Language.Phonetic.Internal",
          "name": "Internal",
          "package": "language-spelling",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapped \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Phonetic.Internal",
          "name": "Alphabet",
          "package": "language-spelling",
          "source": "src/Language-Phonetic-Internal.html#Alphabet",
          "type": "newtype"
        },
        "index": {
          "description": "wrapped Set Char",
          "hierarchy": "Language Phonetic Internal",
          "module": "Language.Phonetic.Internal",
          "name": "Alphabet",
          "package": "language-spelling",
          "partial": "Alphabet",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic-Internal.html#t:Alphabet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapped \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Phonetic.Internal",
          "name": "Code",
          "package": "language-spelling",
          "source": "src/Language-Phonetic-Internal.html#Code",
          "type": "newtype"
        },
        "index": {
          "description": "wrapped ByteString",
          "hierarchy": "Language Phonetic Internal",
          "module": "Language.Phonetic.Internal",
          "name": "Code",
          "package": "language-spelling",
          "partial": "Code",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic-Internal.html#t:Code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Phonetic.Internal",
          "name": "Alphabet",
          "package": "language-spelling",
          "signature": "Alphabet",
          "source": "src/Language-Phonetic-Internal.html#Alphabet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Phonetic Internal",
          "module": "Language.Phonetic.Internal",
          "name": "Alphabet",
          "package": "language-spelling",
          "partial": "Alphabet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic-Internal.html#v:Alphabet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Phonetic.Internal",
          "name": "Code",
          "package": "language-spelling",
          "signature": "Code",
          "source": "src/Language-Phonetic-Internal.html#Code",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Phonetic Internal",
          "module": "Language.Phonetic.Internal",
          "name": "Code",
          "package": "language-spelling",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic-Internal.html#v:Code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Phonetic.Internal",
          "name": "getAlphabet",
          "package": "language-spelling",
          "signature": "Set Char",
          "source": "src/Language-Phonetic-Internal.html#Alphabet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Phonetic Internal",
          "module": "Language.Phonetic.Internal",
          "name": "getAlphabet",
          "package": "language-spelling",
          "partial": "Alphabet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic-Internal.html#v:getAlphabet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Phonetic.Internal",
          "name": "getCode",
          "package": "language-spelling",
          "signature": "ByteString",
          "source": "src/Language-Phonetic-Internal.html#Code",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Phonetic Internal",
          "module": "Language.Phonetic.Internal",
          "name": "getCode",
          "package": "language-spelling",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic-Internal.html#v:getCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\"A phonetic algorithm is an algorithm for indexing of words by their\n   pronunciation\": \u003ca\u003ehttps://en.wikipedia.org/wiki/Phonetic_algorithm\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eRight now only a very rudimental one is provided, \u003ccode\u003e\u003ca\u003eSoundex\u003c/a\u003e\u003c/code\u003e; plus\n   \u003ccode\u003e\u003ca\u003eEncoder\u003c/a\u003e\u003c/code\u003e, a generic interface.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Phonetic",
          "name": "Phonetic",
          "package": "language-spelling",
          "source": "src/Language-Phonetic.html",
          "type": "module"
        },
        "index": {
          "description": "phonetic algorithm is an algorithm for indexing of words by their pronunciation https en.wikipedia.org wiki Phonetic algorithm Right now only very rudimental one is provided Soundex plus Encoder generic interface",
          "hierarchy": "Language Phonetic",
          "module": "Language.Phonetic",
          "name": "Phonetic",
          "package": "language-spelling",
          "partial": "Phonetic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapped \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eChar\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Phonetic",
          "name": "Alphabet",
          "package": "language-spelling",
          "source": "src/Language-Phonetic-Internal.html#Alphabet",
          "type": "data"
        },
        "index": {
          "description": "wrapped Set Char",
          "hierarchy": "Language Phonetic",
          "module": "Language.Phonetic",
          "name": "Alphabet",
          "package": "language-spelling",
          "partial": "Alphabet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic.html#t:Alphabet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapped \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Phonetic",
          "name": "Code",
          "package": "language-spelling",
          "source": "src/Language-Phonetic-Internal.html#Code",
          "type": "data"
        },
        "index": {
          "description": "wrapped ByteString",
          "hierarchy": "Language Phonetic",
          "module": "Language.Phonetic",
          "name": "Code",
          "package": "language-spelling",
          "partial": "Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic.html#t:Code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for algorithms that encode words based on their pronunciation.\n\u003c/p\u003e\u003cp\u003eMinimal definition: \u003ccode\u003e\u003ca\u003ealphabet\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eencodeUnsafe\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Phonetic",
          "name": "Encoder",
          "package": "language-spelling",
          "source": "src/Language-Phonetic-Encoder.html#Encoder",
          "type": "class"
        },
        "index": {
          "description": "Type class for algorithms that encode words based on their pronunciation Minimal definition alphabet encodeUnsafe",
          "hierarchy": "Language Phonetic",
          "module": "Language.Phonetic",
          "name": "Encoder",
          "package": "language-spelling",
          "partial": "Encoder",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic.html#t:Encoder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ca\u003ehttps://en.wikipedia.org/wiki/Soundex\u003c/a\u003e for more info.\n\u003c/p\u003e",
          "module": "Language.Phonetic",
          "name": "Soundex",
          "package": "language-spelling",
          "source": "src/Language-Phonetic-Soundex.html#Soundex",
          "type": "data"
        },
        "index": {
          "description": "See https en.wikipedia.org wiki Soundex for more info",
          "hierarchy": "Language Phonetic",
          "module": "Language.Phonetic",
          "name": "Soundex",
          "package": "language-spelling",
          "partial": "Soundex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic.html#t:Soundex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe range of characters that the algorithm will accept\n\u003c/p\u003e",
          "module": "Language.Phonetic",
          "name": "alphabet",
          "package": "language-spelling",
          "signature": "Alphabet enc",
          "source": "src/Language-Phonetic-Encoder.html#alphabet",
          "type": "method"
        },
        "index": {
          "description": "The range of characters that the algorithm will accept",
          "hierarchy": "Language Phonetic",
          "module": "Language.Phonetic",
          "name": "alphabet",
          "package": "language-spelling",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic.html#v:alphabet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSafe \u003ccode\u003e\u003ca\u003eencodeUnsafe\u003c/a\u003e\u003c/code\u003e: checks that all the characters are in \u003ccode\u003e\u003ca\u003ealphabet\u003c/a\u003e\u003c/code\u003e\n   first.\n\u003c/p\u003e",
          "module": "Language.Phonetic",
          "name": "encode",
          "package": "language-spelling",
          "signature": "full -\u003e Maybe (Code enc)",
          "source": "src/Language-Phonetic-Encoder.html#encode",
          "type": "method"
        },
        "index": {
          "description": "Safe encodeUnsafe checks that all the characters are in alphabet first",
          "hierarchy": "Language Phonetic",
          "module": "Language.Phonetic",
          "name": "encode",
          "normalized": "a-\u003eMaybe(Code b)",
          "package": "language-spelling",
          "signature": "full-\u003eMaybe(Code enc)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnchecked encoding: if characters not in \u003ccode\u003e\u003ca\u003ealphabet\u003c/a\u003e\u003c/code\u003e are in the word the\n   behaviour is undefined.  You should use \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.Phonetic",
          "name": "encodeUnsafe",
          "package": "language-spelling",
          "signature": "full -\u003e Code enc",
          "source": "src/Language-Phonetic-Encoder.html#encodeUnsafe",
          "type": "method"
        },
        "index": {
          "description": "Unchecked encoding if characters not in alphabet are in the word the behaviour is undefined You should use encode",
          "hierarchy": "Language Phonetic",
          "module": "Language.Phonetic",
          "name": "encodeUnsafe",
          "normalized": "a-\u003eCode b",
          "package": "language-spelling",
          "partial": "Unsafe",
          "signature": "full-\u003eCode enc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-spelling/docs/Language-Phonetic.html#v:encodeUnsafe"
      }
    }
  ]
]