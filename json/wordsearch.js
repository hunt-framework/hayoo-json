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
        "word": "wordsearch"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA word search solver library\n\u003c/p\u003e\u003cp\u003eThis solver is case sensitive; users should map data consistently to one case before using this library when such behavior is desired.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.WordSearchSolver",
          "name": "WordSearchSolver",
          "package": "wordsearch",
          "source": "src/Text-WordSearchSolver.html",
          "type": "module"
        },
        "index": {
          "description": "word search solver library This solver is case sensitive users should map data consistently to one case before using this library when such behavior is desired",
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "WordSearchSolver",
          "package": "wordsearch",
          "partial": "Word Search Solver",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.WordSearchSolver",
          "name": "Dir",
          "package": "wordsearch",
          "source": "src/Text-WordSearchSolver.html#Dir",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "Dir",
          "package": "wordsearch",
          "partial": "Dir",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#t:Dir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA grid in which to search\n\u003c/p\u003e\u003cp\u003eConstructors of this container usually assume that the grid is rectangular and properly sized; this precondition is not checked.\n\u003c/p\u003e",
          "module": "Text.WordSearchSolver",
          "name": "Grid",
          "package": "wordsearch",
          "source": "src/Text-WordSearchSolver.html#Grid",
          "type": "data"
        },
        "index": {
          "description": "grid in which to search Constructors of this container usually assume that the grid is rectangular and properly sized this precondition is not checked",
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "Grid",
          "package": "wordsearch",
          "partial": "Grid",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#t:Grid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn individual value describing a match\n\u003c/p\u003e",
          "module": "Text.WordSearchSolver",
          "name": "Match",
          "package": "wordsearch",
          "source": "src/Text-WordSearchSolver.html#Match",
          "type": "data"
        },
        "index": {
          "description": "An individual value describing match",
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "Match",
          "package": "wordsearch",
          "partial": "Match",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#t:Match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA position of a grid\n\u003c/p\u003e",
          "module": "Text.WordSearchSolver",
          "name": "Pos",
          "package": "wordsearch",
          "source": "src/Text-WordSearchSolver.html#Pos",
          "type": "newtype"
        },
        "index": {
          "description": "position of grid",
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "Pos",
          "package": "wordsearch",
          "partial": "Pos",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#t:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe integral type used for \u003ccode\u003e\u003ca\u003ePos\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.WordSearchSolver",
          "name": "PosIndex",
          "package": "wordsearch",
          "source": "src/Text-WordSearchSolver.html#PosIndex",
          "type": "type"
        },
        "index": {
          "description": "The integral type used for Pos",
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "PosIndex",
          "package": "wordsearch",
          "partial": "Pos Index",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#t:PosIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of words or lists to search\n\u003c/p\u003e",
          "module": "Text.WordSearchSolver",
          "name": "Search",
          "package": "wordsearch",
          "source": "src/Text-WordSearchSolver.html#Search",
          "type": "data"
        },
        "index": {
          "description": "set of words or lists to search",
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "Search",
          "package": "wordsearch",
          "partial": "Search",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#t:Search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract container of a word search puzzle\n\u003c/p\u003e\u003cp\u003eThis can be created either from a \u003ccode\u003e\u003ca\u003eSearch\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eGrid\u003c/a\u003e\u003c/code\u003e by the\n \u003ccode\u003e\u003ca\u003ewordSearch\u003c/a\u003e\u003c/code\u003e function or from a properly formatted \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e by the\n \u003ccode\u003e\u003ca\u003ereadWordSearch\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Text.WordSearchSolver",
          "name": "WordSearch",
          "package": "wordsearch",
          "source": "src/Text-WordSearchSolver.html#WordSearch",
          "type": "data"
        },
        "index": {
          "description": "Abstract container of word search puzzle This can be created either from Search and Grid by the wordSearch function or from properly formatted String by the readWordSearch function",
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "WordSearch",
          "package": "wordsearch",
          "partial": "Word Search",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#t:WordSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.WordSearchSolver",
          "name": "E",
          "package": "wordsearch",
          "signature": "E",
          "source": "src/Text-WordSearchSolver.html#Dir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "E",
          "package": "wordsearch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.WordSearchSolver",
          "name": "Match",
          "package": "wordsearch",
          "signature": "Match",
          "source": "src/Text-WordSearchSolver.html#Match",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "Match",
          "package": "wordsearch",
          "partial": "Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:Match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.WordSearchSolver",
          "name": "N",
          "package": "wordsearch",
          "signature": "N",
          "source": "src/Text-WordSearchSolver.html#Dir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "N",
          "package": "wordsearch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.WordSearchSolver",
          "name": "NE",
          "package": "wordsearch",
          "signature": "NE",
          "source": "src/Text-WordSearchSolver.html#Dir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "NE",
          "package": "wordsearch",
          "partial": "NE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:NE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.WordSearchSolver",
          "name": "NW",
          "package": "wordsearch",
          "signature": "NW",
          "source": "src/Text-WordSearchSolver.html#Dir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "NW",
          "package": "wordsearch",
          "partial": "NW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:NW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.WordSearchSolver",
          "name": "Pos",
          "package": "wordsearch",
          "signature": "Pos (PosIndex, PosIndex)",
          "source": "src/Text-WordSearchSolver.html#Pos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "Pos",
          "normalized": "Pos(PosIndex,PosIndex)",
          "package": "wordsearch",
          "partial": "Pos",
          "signature": "Pos(PosIndex,PosIndex)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.WordSearchSolver",
          "name": "S",
          "package": "wordsearch",
          "signature": "S",
          "source": "src/Text-WordSearchSolver.html#Dir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "S",
          "package": "wordsearch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.WordSearchSolver",
          "name": "SE",
          "package": "wordsearch",
          "signature": "SE",
          "source": "src/Text-WordSearchSolver.html#Dir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "SE",
          "package": "wordsearch",
          "partial": "SE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:SE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.WordSearchSolver",
          "name": "SW",
          "package": "wordsearch",
          "signature": "SW",
          "source": "src/Text-WordSearchSolver.html#Dir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "SW",
          "package": "wordsearch",
          "partial": "SW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:SW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.WordSearchSolver",
          "name": "W",
          "package": "wordsearch",
          "signature": "W",
          "source": "src/Text-WordSearchSolver.html#Dir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "W",
          "package": "wordsearch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:W"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.WordSearchSolver",
          "name": "_m_dir",
          "package": "wordsearch",
          "signature": "Dir",
          "source": "src/Text-WordSearchSolver.html#Match",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "_m_dir",
          "package": "wordsearch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:_m_dir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.WordSearchSolver",
          "name": "_m_len",
          "package": "wordsearch",
          "signature": "Integer",
          "source": "src/Text-WordSearchSolver.html#Match",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "_m_len",
          "package": "wordsearch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:_m_len"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.WordSearchSolver",
          "name": "_m_pos",
          "package": "wordsearch",
          "signature": "Pos",
          "source": "src/Text-WordSearchSolver.html#Match",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "_m_pos",
          "package": "wordsearch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:_m_pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a \u003ccode\u003e\u003ca\u003eGrid\u003c/a\u003e\u003c/code\u003e from an \u003ccode\u003e\u003ca\u003eArray\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eA grid array is indexed by (column, row) or (x, y), so users should be\n careful that a list is in the proper order if listArray is used.\n\u003c/p\u003e",
          "module": "Text.WordSearchSolver",
          "name": "arrayToGrid",
          "package": "wordsearch",
          "signature": "Array Pos a -\u003e Grid a",
          "source": "src/Text-WordSearchSolver.html#arrayToGrid",
          "type": "function"
        },
        "index": {
          "description": "Constructs Grid from an Array grid array is indexed by column row or so users should be careful that list is in the proper order if listArray is used",
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "arrayToGrid",
          "normalized": "Array Pos a-\u003eGrid a",
          "package": "wordsearch",
          "partial": "To Grid",
          "signature": "Array Pos a-\u003eGrid a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:arrayToGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the opposite direction\n\u003c/p\u003e",
          "module": "Text.WordSearchSolver",
          "name": "dirOpposite",
          "package": "wordsearch",
          "signature": "Dir -\u003e Dir",
          "source": "src/Text-WordSearchSolver.html#dirOpposite",
          "type": "function"
        },
        "index": {
          "description": "Returns the opposite direction",
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "dirOpposite",
          "normalized": "Dir-\u003eDir",
          "package": "wordsearch",
          "partial": "Opposite",
          "signature": "Dir-\u003eDir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:dirOpposite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the appropriate offset of a direction\n\u003c/p\u003e",
          "module": "Text.WordSearchSolver",
          "name": "dirToOffset",
          "package": "wordsearch",
          "signature": "Dir -\u003e Pos",
          "source": "src/Text-WordSearchSolver.html#dirToOffset",
          "type": "function"
        },
        "index": {
          "description": "Returns the appropriate offset of direction",
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "dirToOffset",
          "normalized": "Dir-\u003ePos",
          "package": "wordsearch",
          "partial": "To Offset",
          "signature": "Dir-\u003ePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:dirToOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdates a position by one step in the given direction\n\u003c/p\u003e",
          "module": "Text.WordSearchSolver",
          "name": "dirUpdatePos",
          "package": "wordsearch",
          "signature": "Dir -\u003e Pos -\u003e Pos",
          "source": "src/Text-WordSearchSolver.html#dirUpdatePos",
          "type": "function"
        },
        "index": {
          "description": "Updates position by one step in the given direction",
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "dirUpdatePos",
          "normalized": "Dir-\u003ePos-\u003ePos",
          "package": "wordsearch",
          "partial": "Update Pos",
          "signature": "Dir-\u003ePos-\u003ePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:dirUpdatePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComplete set of possible \u003ccode\u003e\u003ca\u003eGrid\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eMatch\u003c/a\u003e\u003c/code\u003e directions\n\u003c/p\u003e",
          "module": "Text.WordSearchSolver",
          "name": "dirs",
          "package": "wordsearch",
          "signature": "[Dir]",
          "source": "src/Text-WordSearchSolver.html#dirs",
          "type": "function"
        },
        "index": {
          "description": "Complete set of possible Grid Match directions",
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "dirs",
          "normalized": "[Dir]",
          "package": "wordsearch",
          "signature": "[Dir]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:dirs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMore efficient (and real, unordered) \u003ccode\u003eSet\u003c/code\u003e of \u003ccode\u003e\u003ca\u003edirs\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.WordSearchSolver",
          "name": "dirs'",
          "package": "wordsearch",
          "signature": "Set Dir",
          "source": "src/Text-WordSearchSolver.html#dirs%27",
          "type": "function"
        },
        "index": {
          "description": "More efficient and real unordered Set of dirs",
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "dirs'",
          "package": "wordsearch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:dirs-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBidirectional \u003ccode\u003eMap\u003c/code\u003e of opposite directions\n\u003c/p\u003e",
          "module": "Text.WordSearchSolver",
          "name": "dirsOpposite",
          "package": "wordsearch",
          "signature": "Map Dir Dir",
          "source": "src/Text-WordSearchSolver.html#dirsOpposite",
          "type": "function"
        },
        "index": {
          "description": "Bidirectional Map of opposite directions",
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "dirsOpposite",
          "package": "wordsearch",
          "partial": "Opposite",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:dirsOpposite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eMap\u003c/code\u003e of directions and \u003ccode\u003e\u003ca\u003ePos\u003c/a\u003e\u003c/code\u003e offsets\n\u003c/p\u003e",
          "module": "Text.WordSearchSolver",
          "name": "dirsPos",
          "package": "wordsearch",
          "signature": "Map Dir Pos",
          "source": "src/Text-WordSearchSolver.html#dirsPos",
          "type": "function"
        },
        "index": {
          "description": "Map of directions and Pos offsets",
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "dirsPos",
          "package": "wordsearch",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:dirsPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eGrid\u003c/a\u003e\u003c/code\u003e in which every cell that does not match is set to a default value\n\u003c/p\u003e",
          "module": "Text.WordSearchSolver",
          "name": "fillMatches",
          "package": "wordsearch",
          "signature": "e -\u003e Grid e -\u003e t Match -\u003e Grid e",
          "source": "src/Text-WordSearchSolver.html#fillMatches",
          "type": "function"
        },
        "index": {
          "description": "Creates Grid in which every cell that does not match is set to default value",
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "fillMatches",
          "normalized": "a-\u003eGrid a-\u003eb Match-\u003eGrid a",
          "package": "wordsearch",
          "partial": "Matches",
          "signature": "e-\u003eGrid e-\u003et Match-\u003eGrid e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:fillMatches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines whether an index is within the range of the bounds of an array\n\u003c/p\u003e",
          "module": "Text.WordSearchSolver",
          "name": "inRangeOf",
          "package": "wordsearch",
          "signature": "a -\u003e Array a e -\u003e Bool",
          "source": "src/Text-WordSearchSolver.html#inRangeOf",
          "type": "function"
        },
        "index": {
          "description": "Determines whether an index is within the range of the bounds of an array",
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "inRangeOf",
          "normalized": "a-\u003eArray a b-\u003eBool",
          "package": "wordsearch",
          "partial": "Range Of",
          "signature": "a-\u003eArray a e-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:inRangeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.WordSearchSolver",
          "name": "m_dir",
          "package": "wordsearch",
          "signature": ":-\u003e Match Dir",
          "source": "src/Text-WordSearchSolver.html#m_dir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "m_dir",
          "normalized": "-\u003eMatch Dir",
          "package": "wordsearch",
          "signature": "-\u003eMatch Dir",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:m_dir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.WordSearchSolver",
          "name": "m_len",
          "package": "wordsearch",
          "signature": ":-\u003e Match Integer",
          "source": "src/Text-WordSearchSolver.html#m_len",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "m_len",
          "normalized": "-\u003eMatch Integer",
          "package": "wordsearch",
          "signature": "-\u003eMatch Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:m_len"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.WordSearchSolver",
          "name": "m_pos",
          "package": "wordsearch",
          "signature": ":-\u003e Match Pos",
          "source": "src/Text-WordSearchSolver.html#m_pos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "m_pos",
          "normalized": "-\u003eMatch Pos",
          "package": "wordsearch",
          "signature": "-\u003eMatch Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:m_pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdds two positions\n\u003c/p\u003e",
          "module": "Text.WordSearchSolver",
          "name": "posPlus",
          "package": "wordsearch",
          "signature": "Pos -\u003e Pos -\u003e Pos",
          "source": "src/Text-WordSearchSolver.html#posPlus",
          "type": "function"
        },
        "index": {
          "description": "Adds two positions",
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "posPlus",
          "normalized": "Pos-\u003ePos-\u003ePos",
          "package": "wordsearch",
          "partial": "Plus",
          "signature": "Pos-\u003ePos-\u003ePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:posPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a \u003ccode\u003e\u003ca\u003eGrid\u003c/a\u003e\u003c/code\u003e from a formatted list of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e should be formatted as expected:\n\u003c/p\u003e\u003cpre\u003e[\"aoaoenxrcoedxncd\",\n \"aoesnitdaoeusntd\",\n \"itenohtneahuoteh\"]\u003c/pre\u003e\u003cp\u003eThe precondition that each row has equal length is not checked.\n\u003c/p\u003e",
          "module": "Text.WordSearchSolver",
          "name": "readGrid",
          "package": "wordsearch",
          "signature": "[String] -\u003e Grid Char",
          "source": "src/Text-WordSearchSolver.html#readGrid",
          "type": "function"
        },
        "index": {
          "description": "Constructs Grid from formatted list of String The String should be formatted as expected aoaoenxrcoedxncd aoesnitdaoeusntd itenohtneahuoteh The precondition that each row has equal length is not checked",
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "readGrid",
          "normalized": "[String]-\u003eGrid Char",
          "package": "wordsearch",
          "partial": "Grid",
          "signature": "[String]-\u003eGrid Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:readGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a \u003ccode\u003e\u003ca\u003eWordSearch\u003c/a\u003e\u003c/code\u003e container from a properly formatted \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e should contain two sections, separated by at least one empty\n line.  The first section represents the grid, and thus is formatted as the\n String that \u003ccode\u003e\u003ca\u003ereadGrid\u003c/a\u003e\u003c/code\u003e expects.  The second section represents the search\n words; it contains each word on its own separate line.  In the case that\n is ill-formed, Nothing is returned.  The precondition that each grid row\n has equal length is not checked.\n\u003c/p\u003e",
          "module": "Text.WordSearchSolver",
          "name": "readWordSearch",
          "package": "wordsearch",
          "signature": "String -\u003e Maybe (WordSearch Char)",
          "source": "src/Text-WordSearchSolver.html#readWordSearch",
          "type": "function"
        },
        "index": {
          "description": "Constructs WordSearch container from properly formatted String The String should contain two sections separated by at least one empty line The first section represents the grid and thus is formatted as the String that readGrid expects The second section represents the search words it contains each word on its own separate line In the case that is ill-formed Nothing is returned The precondition that each grid row has equal length is not checked",
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "readWordSearch",
          "normalized": "String-\u003eMaybe(WordSearch Char)",
          "package": "wordsearch",
          "partial": "Word Search",
          "signature": "String-\u003eMaybe(WordSearch Char)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:readWordSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines whether a given \u003ccode\u003e\u003ca\u003eSearch\u003c/a\u003e\u003c/code\u003e term can be matched at a given position of a grid\n\u003c/p\u003e\u003cp\u003eThis is done by trying each direction for a match from the given location.\n\u003c/p\u003e",
          "module": "Text.WordSearchSolver",
          "name": "search",
          "package": "wordsearch",
          "signature": "Grid a -\u003e [a] -\u003e Pos -\u003e Maybe Match",
          "source": "src/Text-WordSearchSolver.html#search",
          "type": "function"
        },
        "index": {
          "description": "Determines whether given Search term can be matched at given position of grid This is done by trying each direction for match from the given location",
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "search",
          "normalized": "Grid a-\u003e[a]-\u003ePos-\u003eMaybe Match",
          "package": "wordsearch",
          "signature": "Grid a-\u003e[a]-\u003ePos-\u003eMaybe Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:search"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the set of search terms from a \u003ccode\u003e\u003ca\u003eSearch\u003c/a\u003e\u003c/code\u003e container\n\u003c/p\u003e",
          "module": "Text.WordSearchSolver",
          "name": "searchToSet",
          "package": "wordsearch",
          "signature": "Search a -\u003e Set [a]",
          "source": "src/Text-WordSearchSolver.html#searchToSet",
          "type": "function"
        },
        "index": {
          "description": "Returns the set of search terms from Search container",
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "searchToSet",
          "normalized": "Search a-\u003eSet[a]",
          "package": "wordsearch",
          "partial": "To Set",
          "signature": "Search a-\u003eSet[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:searchToSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a \u003ccode\u003e\u003ca\u003eSearch\u003c/a\u003e\u003c/code\u003e from a set of lists\n\u003c/p\u003e",
          "module": "Text.WordSearchSolver",
          "name": "setToSearch",
          "package": "wordsearch",
          "signature": "Set [a] -\u003e Search a",
          "source": "src/Text-WordSearchSolver.html#setToSearch",
          "type": "function"
        },
        "index": {
          "description": "Constructs Search from set of lists",
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "setToSearch",
          "normalized": "Set[a]-\u003eSearch a",
          "package": "wordsearch",
          "partial": "To Search",
          "signature": "Set[a]-\u003eSearch a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:setToSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a \u003ccode\u003e\u003ca\u003eGrid\u003c/a\u003e\u003c/code\u003e, appending a cell, usually a newline character, after every row\n\u003c/p\u003e",
          "module": "Text.WordSearchSolver",
          "name": "showGridInsert",
          "package": "wordsearch",
          "signature": "a -\u003e Grid a -\u003e [a]",
          "source": "src/Text-WordSearchSolver.html#showGridInsert",
          "type": "function"
        },
        "index": {
          "description": "Renders Grid appending cell usually newline character after every row",
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "showGridInsert",
          "normalized": "a-\u003eGrid a-\u003e[a]",
          "package": "wordsearch",
          "partial": "Grid Insert",
          "signature": "a-\u003eGrid a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:showGridInsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSolves a \u003ccode\u003e\u003ca\u003eWordSearch\u003c/a\u003e\u003c/code\u003e and returns a set of matches together with a set of search terms for which a match was not found in a tuple\n\u003c/p\u003e\u003cp\u003eThis algorithm solves word search puzzles by looking at the first cell of each search term, and looking for a match by checking each direction from each position whose cell contains the starting cell of the search term until a match is found.  The dictionary of individual cell values and sets of positions is part of the \u003ccode\u003e\u003ca\u003eGrid\u003c/a\u003e\u003c/code\u003e container; \u003ccode\u003e\u003ca\u003earrayToGrid\u003c/a\u003e\u003c/code\u003e creates this dictionary automatically.\n\u003c/p\u003e",
          "module": "Text.WordSearchSolver",
          "name": "solveWordSearch",
          "package": "wordsearch",
          "signature": "WordSearch a -\u003e (Set Match, Search a)",
          "source": "src/Text-WordSearchSolver.html#solveWordSearch",
          "type": "function"
        },
        "index": {
          "description": "Solves WordSearch and returns set of matches together with set of search terms for which match was not found in tuple This algorithm solves word search puzzles by looking at the first cell of each search term and looking for match by checking each direction from each position whose cell contains the starting cell of the search term until match is found The dictionary of individual cell values and sets of positions is part of the Grid container arrayToGrid creates this dictionary automatically",
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "solveWordSearch",
          "normalized": "WordSearch a-\u003e(Set Match,Search a)",
          "package": "wordsearch",
          "partial": "Word Search",
          "signature": "WordSearch a-\u003e(Set Match,Search a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:solveWordSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the location and the direction matches the \u003ccode\u003e\u003ca\u003eSearch\u003c/a\u003e\u003c/code\u003e term, returns the \u003ccode\u003e\u003ca\u003eMatch\u003c/a\u003e\u003c/code\u003e; otherwise, returns Nothing\n\u003c/p\u003e",
          "module": "Text.WordSearchSolver",
          "name": "tryMatch",
          "package": "wordsearch",
          "signature": "Grid a -\u003e [a] -\u003e Pos -\u003e Dir -\u003e Maybe Match",
          "source": "src/Text-WordSearchSolver.html#tryMatch",
          "type": "function"
        },
        "index": {
          "description": "If the location and the direction matches the Search term returns the Match otherwise returns Nothing",
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "tryMatch",
          "normalized": "Grid a-\u003e[a]-\u003ePos-\u003eDir-\u003eMaybe Match",
          "package": "wordsearch",
          "partial": "Match",
          "signature": "Grid a-\u003e[a]-\u003ePos-\u003eDir-\u003eMaybe Match",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:tryMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a \u003ccode\u003e\u003ca\u003eWordSearch\u003c/a\u003e\u003c/code\u003e container from a \u003ccode\u003e\u003ca\u003eGrid\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003eSearch\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.WordSearchSolver",
          "name": "wordSearch",
          "package": "wordsearch",
          "signature": "Grid a -\u003e Search a -\u003e WordSearch a",
          "source": "src/Text-WordSearchSolver.html#wordSearch",
          "type": "function"
        },
        "index": {
          "description": "Constructs WordSearch container from Grid and Search",
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "wordSearch",
          "normalized": "Grid a-\u003eSearch a-\u003eWordSearch a",
          "package": "wordsearch",
          "partial": "Search",
          "signature": "Grid a-\u003eSearch a-\u003eWordSearch a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:wordSearch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.WordSearchSolver",
          "name": "ws_grid",
          "package": "wordsearch",
          "signature": "forall a[a1Pa].  :-\u003e (WordSearch a[a1Pa]) (Grid a[a1Pa])",
          "source": "src/Text-WordSearchSolver.html#ws_grid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "ws_grid",
          "normalized": "a b[b Pa]-\u003e(WordSearch b[b Pa])(Grid b[b Pa])",
          "package": "wordsearch",
          "signature": "forall a[a Pa]-\u003e(WordSearch a[a Pa])(Grid a[a Pa])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:ws_grid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.WordSearchSolver",
          "name": "ws_search",
          "package": "wordsearch",
          "signature": "forall a[a1Pa].  :-\u003e (WordSearch a[a1Pa]) (Search a[a1Pa])",
          "source": "src/Text-WordSearchSolver.html#ws_search",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text WordSearchSolver",
          "module": "Text.WordSearchSolver",
          "name": "ws_search",
          "normalized": "a b[b Pa]-\u003e(WordSearch b[b Pa])(Search b[b Pa])",
          "package": "wordsearch",
          "signature": "forall a[a Pa]-\u003e(WordSearch a[a Pa])(Search a[a Pa])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wordsearch/docs/Text-WordSearchSolver.html#v:ws_search"
      }
    }
  ]
]