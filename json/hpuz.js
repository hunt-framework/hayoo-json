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
        "word": "hpuz"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Game.Puz",
          "name": "Puz",
          "package": "hpuz",
          "source": "src/Codec-Game-Puz.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "Puz",
          "package": "hpuz",
          "partial": "Puz",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Game.Puz",
          "name": "Dir",
          "package": "hpuz",
          "source": "src/Codec-Game-Puz.html#Dir",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "Dir",
          "package": "hpuz",
          "partial": "Dir",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#t:Dir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Game.Puz",
          "name": "Index",
          "package": "hpuz",
          "source": "src/Codec-Game-Puz.html#Index",
          "type": "type"
        },
        "index": {
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "Index",
          "package": "hpuz",
          "partial": "Index",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#t:Index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePuzzle\u003c/a\u003e\u003c/code\u003e type represents a particular crossword.  The\n    crossword's dimensions are specified by \u003ccode\u003e\u003ca\u003ewidth\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eheight\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe contents of the puzzle are given by two arrays of \u003ccode\u003e\u003ca\u003eSquare\u003c/a\u003e\u003c/code\u003es -\n    \u003ccode\u003e\u003ca\u003egrid\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esolution\u003c/a\u003e\u003c/code\u003e.  The board arrays are in row-major order\n    and are numbered from (0,0) to (width-1,height-1).  The \u003ccode\u003e\u003ca\u003egrid\u003c/a\u003e\u003c/code\u003e\n    board represents the current state of play, and as such its\n    squares may be partially or entirely filled in, correctly or\n    incorrectly.  The \u003ccode\u003e\u003ca\u003esolution\u003c/a\u003e\u003c/code\u003e board should have the same basic\n    layout as the \u003ccode\u003e\u003ca\u003egrid\u003c/a\u003e\u003c/code\u003e board (in terms of black vs letter squares),\n    and should be entirely filled in.\n\u003c/p\u003e\u003cp\u003eVarious other pieces of data about the puzzle are given bu\n    \u003ccode\u003e\u003ca\u003etitle\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eauthor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enotes\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecopyright\u003c/a\u003e\u003c/code\u003e, all \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eThere is an optional \u003ca\u003etimer\u003c/a\u003e, which is a number of seconds\n    elapsed and a bool that is true if the timer is stopped and\n    false otherwise.\n\u003c/p\u003e\u003cp\u003eThe field \u003ccode\u003e\u003ca\u003eclues\u003c/a\u003e\u003c/code\u003e gives the puzzle's clues.  The numbers in this\n    array correspond to the numbering that would appear on the grid.\n    To reconstruct this information, see the \u003ccode\u003e\u003ca\u003enumberGrid\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Codec.Game.Puz",
          "name": "Puzzle",
          "package": "hpuz",
          "source": "src/Codec-Game-Puz.html#Puzzle",
          "type": "data"
        },
        "index": {
          "description": "The Puzzle type represents particular crossword The crossword dimensions are specified by width and height The contents of the puzzle are given by two arrays of Square grid and solution The board arrays are in row-major order and are numbered from to width-1 height-1 The grid board represents the current state of play and as such its squares may be partially or entirely filled in correctly or incorrectly The solution board should have the same basic layout as the grid board in terms of black vs letter squares and should be entirely filled in Various other pieces of data about the puzzle are given bu title author notes and copyright all String There is an optional timer which is number of seconds elapsed and bool that is true if the timer is stopped and false otherwise The field clues gives the puzzle clues The numbers in this array correspond to the numbering that would appear on the grid To reconstruct this information see the numberGrid function",
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "Puzzle",
          "package": "hpuz",
          "partial": "Puzzle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#t:Puzzle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eSquare\u003c/a\u003e\u003c/code\u003e type represents a square in a puzzle. \n\u003c/p\u003e",
          "module": "Codec.Game.Puz",
          "name": "Square",
          "package": "hpuz",
          "source": "src/Codec-Game-Puz.html#Square",
          "type": "data"
        },
        "index": {
          "description": "The Square type represents square in puzzle",
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "Square",
          "package": "hpuz",
          "partial": "Square",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#t:Square"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eStyle\u003c/a\u003e\u003c/code\u003e type enumerates the possible styles of fillable squares.\n    Currently, there are only two: plain squares and circled squares. \n\u003c/p\u003e",
          "module": "Codec.Game.Puz",
          "name": "Style",
          "package": "hpuz",
          "source": "src/Codec-Game-Puz.html#Style",
          "type": "data"
        },
        "index": {
          "description": "The Style type enumerates the possible styles of fillable squares Currently there are only two plain squares and circled squares",
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "Style",
          "package": "hpuz",
          "partial": "Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#t:Style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Game.Puz",
          "name": "Across",
          "package": "hpuz",
          "signature": "Across",
          "source": "src/Codec-Game-Puz.html#Dir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "Across",
          "package": "hpuz",
          "partial": "Across",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:Across"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlack squares\n\u003c/p\u003e",
          "module": "Codec.Game.Puz",
          "name": "Black",
          "package": "hpuz",
          "signature": "Black",
          "source": "src/Codec-Game-Puz.html#Square",
          "type": "function"
        },
        "index": {
          "description": "Black squares",
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "Black",
          "package": "hpuz",
          "partial": "Black",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:Black"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Game.Puz",
          "name": "Circle",
          "package": "hpuz",
          "signature": "Circle",
          "source": "src/Codec-Game-Puz.html#Style",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "Circle",
          "package": "hpuz",
          "partial": "Circle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:Circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Game.Puz",
          "name": "Down",
          "package": "hpuz",
          "signature": "Down",
          "source": "src/Codec-Game-Puz.html#Dir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "Down",
          "package": "hpuz",
          "partial": "Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:Down"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard letter squares, optionally filled in\n\u003c/p\u003e",
          "module": "Codec.Game.Puz",
          "name": "Letter",
          "package": "hpuz",
          "signature": "Letter (Maybe Char) Style",
          "source": "src/Codec-Game-Puz.html#Square",
          "type": "function"
        },
        "index": {
          "description": "Standard letter squares optionally filled in",
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "Letter",
          "package": "hpuz",
          "partial": "Letter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:Letter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Game.Puz",
          "name": "Plain",
          "package": "hpuz",
          "signature": "Plain",
          "source": "src/Codec-Game-Puz.html#Style",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "Plain",
          "package": "hpuz",
          "partial": "Plain",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:Plain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Game.Puz",
          "name": "Puzzle",
          "package": "hpuz",
          "signature": "Puzzle",
          "source": "src/Codec-Game-Puz.html#Puzzle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "Puzzle",
          "package": "hpuz",
          "partial": "Puzzle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:Puzzle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRebus squares, optionally filled in\n\u003c/p\u003e",
          "module": "Codec.Game.Puz",
          "name": "Rebus",
          "package": "hpuz",
          "signature": "Rebus String Style",
          "source": "src/Codec-Game-Puz.html#Square",
          "type": "function"
        },
        "index": {
          "description": "Rebus squares optionally filled in",
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "Rebus",
          "package": "hpuz",
          "partial": "Rebus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:Rebus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Game.Puz",
          "name": "author",
          "package": "hpuz",
          "signature": "String",
          "source": "src/Codec-Game-Puz.html#Puzzle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "author",
          "package": "hpuz",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:author"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Game.Puz",
          "name": "bruteForceUnlockPuz",
          "package": "hpuz",
          "signature": "Puzzle -\u003e IO (Either ErrMsg (Puzzle, Int))",
          "source": "src/Codec-Game-Puz.html#bruteForceUnlockPuz",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "bruteForceUnlockPuz",
          "normalized": "Puzzle-\u003eIO(Either ErrMsg(Puzzle,Int))",
          "package": "hpuz",
          "partial": "Force Unlock Puz",
          "signature": "Puzzle-\u003eIO(Either ErrMsg(Puzzle,Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:bruteForceUnlockPuz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Game.Puz",
          "name": "clues",
          "package": "hpuz",
          "signature": "[(Int, Dir, String)]",
          "source": "src/Codec-Game-Puz.html#Puzzle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "clues",
          "normalized": "[(Int,Dir,String)]",
          "package": "hpuz",
          "signature": "[(Int,Dir,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:clues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Game.Puz",
          "name": "copyright",
          "package": "hpuz",
          "signature": "String",
          "source": "src/Codec-Game-Puz.html#Puzzle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "copyright",
          "package": "hpuz",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:copyright"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Game.Puz",
          "name": "grid",
          "package": "hpuz",
          "signature": "Array Index Square",
          "source": "src/Codec-Game-Puz.html#Puzzle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "grid",
          "package": "hpuz",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:grid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Game.Puz",
          "name": "height",
          "package": "hpuz",
          "signature": "Int",
          "source": "src/Codec-Game-Puz.html#Puzzle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "height",
          "package": "hpuz",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Game.Puz",
          "name": "loadPuzzle",
          "package": "hpuz",
          "signature": "String -\u003e IO (Either Puzzle ErrMsg)",
          "source": "src/Codec-Game-Puz.html#loadPuzzle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "loadPuzzle",
          "normalized": "String-\u003eIO(Either Puzzle ErrMsg)",
          "package": "hpuz",
          "partial": "Puzzle",
          "signature": "String-\u003eIO(Either Puzzle ErrMsg)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:loadPuzzle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Game.Puz",
          "name": "locked",
          "package": "hpuz",
          "signature": "Maybe CUShort",
          "source": "src/Codec-Game-Puz.html#Puzzle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "locked",
          "package": "hpuz",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:locked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Game.Puz",
          "name": "notes",
          "package": "hpuz",
          "signature": "String",
          "source": "src/Codec-Game-Puz.html#Puzzle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "notes",
          "package": "hpuz",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:notes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Game.Puz",
          "name": "numberGrid",
          "package": "hpuz",
          "signature": "Array Index Square -\u003e Array Index (Maybe Int)",
          "source": "src/Codec-Game-Puz.html#numberGrid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "numberGrid",
          "normalized": "Array Index Square-\u003eArray Index(Maybe Int)",
          "package": "hpuz",
          "partial": "Grid",
          "signature": "Array Index Square-\u003eArray Index(Maybe Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:numberGrid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Game.Puz",
          "name": "savePuzzle",
          "package": "hpuz",
          "signature": "String -\u003e Puzzle -\u003e IO (Maybe ErrMsg)",
          "source": "src/Codec-Game-Puz.html#savePuzzle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "savePuzzle",
          "normalized": "String-\u003ePuzzle-\u003eIO(Maybe ErrMsg)",
          "package": "hpuz",
          "partial": "Puzzle",
          "signature": "String-\u003ePuzzle-\u003eIO(Maybe ErrMsg)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:savePuzzle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Game.Puz",
          "name": "solution",
          "package": "hpuz",
          "signature": "Array Index Square",
          "source": "src/Codec-Game-Puz.html#Puzzle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "solution",
          "package": "hpuz",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:solution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Game.Puz",
          "name": "stringCksum",
          "package": "hpuz",
          "signature": "String -\u003e IO CUShort",
          "source": "src/Codec-Game-Puz.html#stringCksum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "stringCksum",
          "normalized": "String-\u003eIO CUShort",
          "package": "hpuz",
          "partial": "Cksum",
          "signature": "String-\u003eIO CUShort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:stringCksum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Game.Puz",
          "name": "timer",
          "package": "hpuz",
          "signature": "Maybe (Int, Bool)",
          "source": "src/Codec-Game-Puz.html#Puzzle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "timer",
          "normalized": "Maybe(Int,Bool)",
          "package": "hpuz",
          "signature": "Maybe(Int,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:timer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Game.Puz",
          "name": "title",
          "package": "hpuz",
          "signature": "String",
          "source": "src/Codec-Game-Puz.html#Puzzle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "title",
          "package": "hpuz",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Game.Puz",
          "name": "unlockPuz",
          "package": "hpuz",
          "signature": "Puzzle -\u003e CUShort -\u003e IO (Either ErrMsg Puzzle)",
          "source": "src/Codec-Game-Puz.html#unlockPuz",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "unlockPuz",
          "normalized": "Puzzle-\u003eCUShort-\u003eIO(Either ErrMsg Puzzle)",
          "package": "hpuz",
          "partial": "Puz",
          "signature": "Puzzle-\u003eCUShort-\u003eIO(Either ErrMsg Puzzle)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:unlockPuz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Game.Puz",
          "name": "width",
          "package": "hpuz",
          "signature": "Int",
          "source": "src/Codec-Game-Puz.html#Puzzle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Game Puz",
          "module": "Codec.Game.Puz",
          "name": "width",
          "package": "hpuz",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:width"
      }
    }
  ]
]