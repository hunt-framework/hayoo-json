[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#",
      "description": {
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "module",
        "fct-source": "src/Codec-Game-Puz.html",
        "fct-type": "module",
        "title": "Puz"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "Puz",
        "normalized": "",
        "package": "hpuz",
        "partial": "Puz",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#t:Dir",
      "description": {
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "data",
        "fct-source": "src/Codec-Game-Puz.html#Dir",
        "fct-type": "data",
        "title": "Dir"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "Dir",
        "normalized": "",
        "package": "hpuz",
        "partial": "Dir",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#t:Index",
      "description": {
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "type",
        "fct-source": "src/Codec-Game-Puz.html#Index",
        "fct-type": "type",
        "title": "Index"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "Index",
        "normalized": "",
        "package": "hpuz",
        "partial": "Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#t:Puzzle",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePuzzle\u003c/a\u003e\u003c/code\u003e type represents a particular crossword.  The\n    crossword's dimensions are specified by \u003ccode\u003e\u003ca\u003ewidth\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eheight\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe contents of the puzzle are given by two arrays of \u003ccode\u003e\u003ca\u003eSquare\u003c/a\u003e\u003c/code\u003es -\n    \u003ccode\u003e\u003ca\u003egrid\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003esolution\u003c/a\u003e\u003c/code\u003e.  The board arrays are in row-major order\n    and are numbered from (0,0) to (width-1,height-1).  The \u003ccode\u003e\u003ca\u003egrid\u003c/a\u003e\u003c/code\u003e\n    board represents the current state of play, and as such its\n    squares may be partially or entirely filled in, correctly or\n    incorrectly.  The \u003ccode\u003e\u003ca\u003esolution\u003c/a\u003e\u003c/code\u003e board should have the same basic\n    layout as the \u003ccode\u003e\u003ca\u003egrid\u003c/a\u003e\u003c/code\u003e board (in terms of black vs letter squares),\n    and should be entirely filled in.\n\u003c/p\u003e\u003cp\u003eVarious other pieces of data about the puzzle are given bu\n    \u003ccode\u003e\u003ca\u003etitle\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eauthor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enotes\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ecopyright\u003c/a\u003e\u003c/code\u003e, all \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003cp\u003eThere is an optional \u003ca\u003etimer\u003c/a\u003e, which is a number of seconds\n    elapsed and a bool that is true if the timer is stopped and\n    false otherwise.\n\u003c/p\u003e\u003cp\u003eThe field \u003ccode\u003e\u003ca\u003eclues\u003c/a\u003e\u003c/code\u003e gives the puzzle's clues.  The numbers in this\n    array correspond to the numbering that would appear on the grid.\n    To reconstruct this information, see the \u003ccode\u003e\u003ca\u003enumberGrid\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "data",
        "fct-source": "src/Codec-Game-Puz.html#Puzzle",
        "fct-type": "data",
        "title": "Puzzle"
      },
      "index": {
        "description": "The Puzzle type represents particular crossword The crossword dimensions are specified by width and height The contents of the puzzle are given by two arrays of Square grid and solution The board arrays are in row-major order and are numbered from to width-1 height-1 The grid board represents the current state of play and as such its squares may be partially or entirely filled in correctly or incorrectly The solution board should have the same basic layout as the grid board in terms of black vs letter squares and should be entirely filled in Various other pieces of data about the puzzle are given bu title author notes and copyright all String There is an optional timer which is number of seconds elapsed and bool that is true if the timer is stopped and false otherwise The field clues gives the puzzle clues The numbers in this array correspond to the numbering that would appear on the grid To reconstruct this information see the numberGrid function",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "Puzzle",
        "normalized": "",
        "package": "hpuz",
        "partial": "Puzzle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#t:Square",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eSquare\u003c/a\u003e\u003c/code\u003e type represents a square in a puzzle. \n\u003c/p\u003e",
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "data",
        "fct-source": "src/Codec-Game-Puz.html#Square",
        "fct-type": "data",
        "title": "Square"
      },
      "index": {
        "description": "The Square type represents square in puzzle",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "Square",
        "normalized": "",
        "package": "hpuz",
        "partial": "Square",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#t:Style",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eStyle\u003c/a\u003e\u003c/code\u003e type enumerates the possible styles of fillable squares.\n    Currently, there are only two: plain squares and circled squares. \n\u003c/p\u003e",
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "data",
        "fct-source": "src/Codec-Game-Puz.html#Style",
        "fct-type": "data",
        "title": "Style"
      },
      "index": {
        "description": "The Style type enumerates the possible styles of fillable squares Currently there are only two plain squares and circled squares",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "Style",
        "normalized": "",
        "package": "hpuz",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:Across",
      "description": {
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "Across",
        "fct-source": "src/Codec-Game-Puz.html#Dir",
        "fct-type": "function",
        "title": "Across"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "Across",
        "normalized": "",
        "package": "hpuz",
        "partial": "Across",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:Black",
      "description": {
        "fct-descr": "\u003cp\u003eBlack squares\n\u003c/p\u003e",
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "Black",
        "fct-source": "src/Codec-Game-Puz.html#Square",
        "fct-type": "function",
        "title": "Black"
      },
      "index": {
        "description": "Black squares",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "Black",
        "normalized": "",
        "package": "hpuz",
        "partial": "Black",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:Circle",
      "description": {
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "Circle",
        "fct-source": "src/Codec-Game-Puz.html#Style",
        "fct-type": "function",
        "title": "Circle"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "Circle",
        "normalized": "",
        "package": "hpuz",
        "partial": "Circle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:Down",
      "description": {
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "Down",
        "fct-source": "src/Codec-Game-Puz.html#Dir",
        "fct-type": "function",
        "title": "Down"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "Down",
        "normalized": "",
        "package": "hpuz",
        "partial": "Down",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:Letter",
      "description": {
        "fct-descr": "\u003cp\u003eStandard letter squares, optionally filled in\n\u003c/p\u003e",
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "Letter (Maybe Char) Style",
        "fct-source": "src/Codec-Game-Puz.html#Square",
        "fct-type": "function",
        "title": "Letter"
      },
      "index": {
        "description": "Standard letter squares optionally filled in",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "Letter",
        "normalized": "",
        "package": "hpuz",
        "partial": "Letter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:Plain",
      "description": {
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "Plain",
        "fct-source": "src/Codec-Game-Puz.html#Style",
        "fct-type": "function",
        "title": "Plain"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "Plain",
        "normalized": "",
        "package": "hpuz",
        "partial": "Plain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:Puzzle",
      "description": {
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "Puzzle",
        "fct-source": "src/Codec-Game-Puz.html#Puzzle",
        "fct-type": "function",
        "title": "Puzzle"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "Puzzle",
        "normalized": "",
        "package": "hpuz",
        "partial": "Puzzle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:Rebus",
      "description": {
        "fct-descr": "\u003cp\u003eRebus squares, optionally filled in\n\u003c/p\u003e",
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "Rebus String Style",
        "fct-source": "src/Codec-Game-Puz.html#Square",
        "fct-type": "function",
        "title": "Rebus"
      },
      "index": {
        "description": "Rebus squares optionally filled in",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "Rebus",
        "normalized": "",
        "package": "hpuz",
        "partial": "Rebus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:author",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "String",
        "fct-source": "src/Codec-Game-Puz.html#Puzzle",
        "fct-type": "function",
        "title": "author"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "author",
        "normalized": "",
        "package": "hpuz",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:bruteForceUnlockPuz",
      "description": {
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "Puzzle -\u003e IO (Either ErrMsg (Puzzle, Int))",
        "fct-source": "src/Codec-Game-Puz.html#bruteForceUnlockPuz",
        "fct-type": "function",
        "title": "bruteForceUnlockPuz"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "bruteForceUnlockPuz",
        "normalized": "Puzzle-\u003eIO(Either ErrMsg(Puzzle,Int))",
        "package": "hpuz",
        "partial": "Force Unlock Puz",
        "signature": "Puzzle-\u003eIO(Either ErrMsg(Puzzle,Int))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:clues",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "[(Int, Dir, String)]",
        "fct-source": "src/Codec-Game-Puz.html#Puzzle",
        "fct-type": "function",
        "title": "clues"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "clues",
        "normalized": "[(Int,Dir,String)]",
        "package": "hpuz",
        "partial": "",
        "signature": "[(Int,Dir,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:copyright",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "String",
        "fct-source": "src/Codec-Game-Puz.html#Puzzle",
        "fct-type": "function",
        "title": "copyright"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "copyright",
        "normalized": "",
        "package": "hpuz",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:grid",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "Array Index Square",
        "fct-source": "src/Codec-Game-Puz.html#Puzzle",
        "fct-type": "function",
        "title": "grid"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "grid",
        "normalized": "",
        "package": "hpuz",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:height",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "Int",
        "fct-source": "src/Codec-Game-Puz.html#Puzzle",
        "fct-type": "function",
        "title": "height"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "height",
        "normalized": "",
        "package": "hpuz",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:loadPuzzle",
      "description": {
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "String -\u003e IO (Either Puzzle ErrMsg)",
        "fct-source": "src/Codec-Game-Puz.html#loadPuzzle",
        "fct-type": "function",
        "title": "loadPuzzle"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "loadPuzzle",
        "normalized": "String-\u003eIO(Either Puzzle ErrMsg)",
        "package": "hpuz",
        "partial": "Puzzle",
        "signature": "String-\u003eIO(Either Puzzle ErrMsg)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:locked",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "Maybe CUShort",
        "fct-source": "src/Codec-Game-Puz.html#Puzzle",
        "fct-type": "function",
        "title": "locked"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "locked",
        "normalized": "",
        "package": "hpuz",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:notes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "String",
        "fct-source": "src/Codec-Game-Puz.html#Puzzle",
        "fct-type": "function",
        "title": "notes"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "notes",
        "normalized": "",
        "package": "hpuz",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:numberGrid",
      "description": {
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "Array Index Square -\u003e Array Index (Maybe Int)",
        "fct-source": "src/Codec-Game-Puz.html#numberGrid",
        "fct-type": "function",
        "title": "numberGrid"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "numberGrid",
        "normalized": "Array Index Square-\u003eArray Index(Maybe Int)",
        "package": "hpuz",
        "partial": "Grid",
        "signature": "Array Index Square-\u003eArray Index(Maybe Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:savePuzzle",
      "description": {
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "String -\u003e Puzzle -\u003e IO (Maybe ErrMsg)",
        "fct-source": "src/Codec-Game-Puz.html#savePuzzle",
        "fct-type": "function",
        "title": "savePuzzle"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "savePuzzle",
        "normalized": "String-\u003ePuzzle-\u003eIO(Maybe ErrMsg)",
        "package": "hpuz",
        "partial": "Puzzle",
        "signature": "String-\u003ePuzzle-\u003eIO(Maybe ErrMsg)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:solution",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "Array Index Square",
        "fct-source": "src/Codec-Game-Puz.html#Puzzle",
        "fct-type": "function",
        "title": "solution"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "solution",
        "normalized": "",
        "package": "hpuz",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:stringCksum",
      "description": {
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "String -\u003e IO CUShort",
        "fct-source": "src/Codec-Game-Puz.html#stringCksum",
        "fct-type": "function",
        "title": "stringCksum"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "stringCksum",
        "normalized": "String-\u003eIO CUShort",
        "package": "hpuz",
        "partial": "Cksum",
        "signature": "String-\u003eIO CUShort"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:timer",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "Maybe (Int, Bool)",
        "fct-source": "src/Codec-Game-Puz.html#Puzzle",
        "fct-type": "function",
        "title": "timer"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "timer",
        "normalized": "Maybe(Int,Bool)",
        "package": "hpuz",
        "partial": "",
        "signature": "Maybe(Int,Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:title",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "String",
        "fct-source": "src/Codec-Game-Puz.html#Puzzle",
        "fct-type": "function",
        "title": "title"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "title",
        "normalized": "",
        "package": "hpuz",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:unlockPuz",
      "description": {
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "Puzzle -\u003e CUShort -\u003e IO (Either ErrMsg Puzzle)",
        "fct-source": "src/Codec-Game-Puz.html#unlockPuz",
        "fct-type": "function",
        "title": "unlockPuz"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "unlockPuz",
        "normalized": "Puzzle-\u003eCUShort-\u003eIO(Either ErrMsg Puzzle)",
        "package": "hpuz",
        "partial": "Puz",
        "signature": "Puzzle-\u003eCUShort-\u003eIO(Either ErrMsg Puzzle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hpuz/docs/Codec-Game-Puz.html#v:width",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Codec.Game.Puz",
        "fct-package": "hpuz",
        "fct-signature": "Int",
        "fct-source": "src/Codec-Game-Puz.html#Puzzle",
        "fct-type": "function",
        "title": "width"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Game Puz",
        "module": "Codec.Game.Puz",
        "name": "width",
        "normalized": "",
        "package": "hpuz",
        "partial": "",
        "signature": ""
      }
    }
  }
]