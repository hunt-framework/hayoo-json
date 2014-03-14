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
        "word": "hs-pgms"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is part of Haskell PGMS.\n\u003c/p\u003e\u003cp\u003eIt provides types and a monad for implementing and running Minesweeper\n strategies. It's the core of PGMS.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Mine",
          "name": "Mine",
          "package": "hs-pgms",
          "source": "src/Mine.html",
          "type": "module"
        },
        "index": {
          "description": "This module is part of Haskell PGMS It provides types and monad for implementing and running Minesweeper strategies It the core of PGMS",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "Mine",
          "package": "hs-pgms",
          "partial": "Mine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA complete Minesweeper board, including hidden state.\n\u003c/p\u003e",
          "module": "Mine",
          "name": "Board",
          "package": "hs-pgms",
          "source": "src/Mine.html#Board",
          "type": "data"
        },
        "index": {
          "description": "complete Minesweeper board including hidden state",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "Board",
          "package": "hs-pgms",
          "partial": "Board",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#t:Board"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA cell on a Minesweeper board.\n\u003c/p\u003e",
          "module": "Mine",
          "name": "Cell",
          "package": "hs-pgms",
          "source": "src/Mine.html#Cell",
          "type": "data"
        },
        "index": {
          "description": "cell on Minesweeper board",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "Cell",
          "package": "hs-pgms",
          "partial": "Cell",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#t:Cell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescription of a mine sweeper configuration (or difficulty).\n\u003c/p\u003e",
          "module": "Mine",
          "name": "Config",
          "package": "hs-pgms",
          "source": "src/Mine.html#Config",
          "type": "data"
        },
        "index": {
          "description": "Description of mine sweeper configuration or difficulty",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "Config",
          "package": "hs-pgms",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUI interface\n\u003c/p\u003e\u003cp\u003eThese are actions for the \u003ccode\u003e\u003ca\u003eMonadPrompt\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eStart\u003c/a\u003e\u003c/code\u003e  - A new game just started.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eUpdate\u003c/a\u003e\u003c/code\u003e - A move was made, and the indicated cell changed\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eTrace\u003c/a\u003e\u003c/code\u003e  - The strategy provided a trace message.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Mine",
          "name": "Play",
          "package": "hs-pgms",
          "source": "src/Mine.html#Play",
          "type": "data"
        },
        "index": {
          "description": "UI interface These are actions for the MonadPrompt monad Start new game just started Update move was made and the indicated cell changed Trace The strategy provided trace message",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "Play",
          "package": "hs-pgms",
          "partial": "Play",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#t:Play"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA point in 2D space with integer coordinates.\n\u003c/p\u003e\u003cp\u003eUsed to adress cells on a Minesweeper board, and also to describe board\n sizes.\n\u003c/p\u003e",
          "module": "Mine",
          "name": "Pos",
          "package": "hs-pgms",
          "source": "src/Mine.html#Pos",
          "type": "data"
        },
        "index": {
          "description": "point in space with integer coordinates Used to adress cells on Minesweeper board and also to describe board sizes",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "Pos",
          "package": "hs-pgms",
          "partial": "Pos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#t:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA game result.\n\u003c/p\u003e",
          "module": "Mine",
          "name": "Result",
          "package": "hs-pgms",
          "source": "src/Mine.html#Result",
          "type": "data"
        },
        "index": {
          "description": "game result",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "Result",
          "package": "hs-pgms",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strategy with some meta-information.\n\u003c/p\u003e\u003cp\u003eIt's advisable to define your own strategies in terms of \u003ccode\u003e\u003ca\u003edefaultStrategy\u003c/a\u003e\u003c/code\u003e\n so that future additions to that record don't break your code.\n\u003c/p\u003e",
          "module": "Mine",
          "name": "Strategy",
          "package": "hs-pgms",
          "source": "src/Mine.html#Strategy",
          "type": "data"
        },
        "index": {
          "description": "strategy with some meta-information It advisable to define your own strategies in terms of defaultStrategy so that future additions to that record don break your code",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "Strategy",
          "package": "hs-pgms",
          "partial": "Strategy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#t:Strategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe monad for implementing Minesweeper strategies.\n\u003c/p\u003e",
          "module": "Mine",
          "name": "StrategyM",
          "package": "hs-pgms",
          "source": "src/Mine.html#StrategyM",
          "type": "data"
        },
        "index": {
          "description": "The monad for implementing Minesweeper strategies",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "StrategyM",
          "package": "hs-pgms",
          "partial": "Strategy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#t:StrategyM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA view of the Minesweeper board.\n\u003c/p\u003e",
          "module": "Mine",
          "name": "View",
          "package": "hs-pgms",
          "source": "src/Mine.html#View",
          "type": "type"
        },
        "index": {
          "description": "view of the Minesweeper board",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "View",
          "package": "hs-pgms",
          "partial": "View",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#t:View"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Mine",
          "name": "Board",
          "package": "hs-pgms",
          "signature": "Board",
          "source": "src/Mine.html#Board",
          "type": "function"
        },
        "index": {
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "Board",
          "package": "hs-pgms",
          "partial": "Board",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:Board"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Mine",
          "name": "Config",
          "package": "hs-pgms",
          "signature": "Config",
          "source": "src/Mine.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "Config",
          "package": "hs-pgms",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoops, you stepped on a mine here!\n\u003c/p\u003e",
          "module": "Mine",
          "name": "Exploded",
          "package": "hs-pgms",
          "signature": "Exploded",
          "source": "src/Mine.html#Cell",
          "type": "function"
        },
        "index": {
          "description": "oops you stepped on mine here",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "Exploded",
          "package": "hs-pgms",
          "partial": "Exploded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:Exploded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean exposed cell with a count of neighbours\n\u003c/p\u003e",
          "module": "Mine",
          "name": "Exposed",
          "package": "hs-pgms",
          "signature": "Exposed Int",
          "source": "src/Mine.html#Cell",
          "type": "function"
        },
        "index": {
          "description": "an exposed cell with count of neighbours",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "Exposed",
          "package": "hs-pgms",
          "partial": "Exposed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:Exposed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea hidden cell\n\u003c/p\u003e",
          "module": "Mine",
          "name": "Hidden",
          "package": "hs-pgms",
          "signature": "Hidden",
          "source": "src/Mine.html#Cell",
          "type": "function"
        },
        "index": {
          "description": "hidden cell",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "Hidden",
          "package": "hs-pgms",
          "partial": "Hidden",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:Hidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe game was lost.\n\u003c/p\u003e",
          "module": "Mine",
          "name": "Lost",
          "package": "hs-pgms",
          "signature": "Lost",
          "source": "src/Mine.html#Result",
          "type": "function"
        },
        "index": {
          "description": "The game was lost",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "Lost",
          "package": "hs-pgms",
          "partial": "Lost",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:Lost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea marked cell\n\u003c/p\u003e",
          "module": "Mine",
          "name": "Marked",
          "package": "hs-pgms",
          "signature": "Marked",
          "source": "src/Mine.html#Cell",
          "type": "function"
        },
        "index": {
          "description": "marked cell",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "Marked",
          "package": "hs-pgms",
          "partial": "Marked",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:Marked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Mine",
          "name": "Pos",
          "package": "hs-pgms",
          "signature": "Pos",
          "source": "src/Mine.html#Pos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "Pos",
          "package": "hs-pgms",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Mine",
          "name": "Start",
          "package": "hs-pgms",
          "signature": "Board -\u003e Play ()",
          "source": "src/Mine.html#Play",
          "type": "function"
        },
        "index": {
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "Start",
          "normalized": "Board-\u003ePlay()",
          "package": "hs-pgms",
          "partial": "Start",
          "signature": "Board-\u003ePlay()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:Start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Mine",
          "name": "Strategy",
          "package": "hs-pgms",
          "signature": "Strategy",
          "source": "src/Mine.html#Strategy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "Strategy",
          "package": "hs-pgms",
          "partial": "Strategy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:Strategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Mine",
          "name": "Trace",
          "package": "hs-pgms",
          "signature": "String -\u003e Board -\u003e Play ()",
          "source": "src/Mine.html#Play",
          "type": "function"
        },
        "index": {
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "Trace",
          "normalized": "String-\u003eBoard-\u003ePlay()",
          "package": "hs-pgms",
          "partial": "Trace",
          "signature": "String-\u003eBoard-\u003ePlay()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:Trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe strategy implementation finished\n   before the game was over.\n\u003c/p\u003e",
          "module": "Mine",
          "name": "Unfinished",
          "package": "hs-pgms",
          "signature": "Unfinished a",
          "source": "src/Mine.html#Result",
          "type": "function"
        },
        "index": {
          "description": "The strategy implementation finished before the game was over",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "Unfinished",
          "package": "hs-pgms",
          "partial": "Unfinished",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:Unfinished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Mine",
          "name": "Update",
          "package": "hs-pgms",
          "signature": "Pos -\u003e Board -\u003e Play ()",
          "source": "src/Mine.html#Play",
          "type": "function"
        },
        "index": {
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "Update",
          "normalized": "Pos-\u003eBoard-\u003ePlay()",
          "package": "hs-pgms",
          "partial": "Update",
          "signature": "Pos-\u003eBoard-\u003ePlay()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:Update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe game was won.\n\u003c/p\u003e",
          "module": "Mine",
          "name": "Won",
          "package": "hs-pgms",
          "signature": "Won",
          "source": "src/Mine.html#Result",
          "type": "function"
        },
        "index": {
          "description": "The game was won",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "Won",
          "package": "hs-pgms",
          "partial": "Won",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:Won"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eboard size etc.\n\u003c/p\u003e",
          "module": "Mine",
          "name": "bConfig",
          "package": "hs-pgms",
          "signature": "Config",
          "source": "src/Mine.html#Board",
          "type": "function"
        },
        "index": {
          "description": "board size etc",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "bConfig",
          "package": "hs-pgms",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:bConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003earray indicating the position of the mines\n\u003c/p\u003e",
          "module": "Mine",
          "name": "bMines",
          "package": "hs-pgms",
          "signature": "Array Pos Bool",
          "source": "src/Mine.html#Board",
          "type": "function"
        },
        "index": {
          "description": "array indicating the position of the mines",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "bMines",
          "package": "hs-pgms",
          "partial": "Mines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:bMines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enumber of mines left to find\n\u003c/p\u003e",
          "module": "Mine",
          "name": "bTodo",
          "package": "hs-pgms",
          "signature": "Int",
          "source": "src/Mine.html#Board",
          "type": "function"
        },
        "index": {
          "description": "number of mines left to find",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "bTodo",
          "package": "hs-pgms",
          "partial": "Todo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:bTodo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecurrent view\n\u003c/p\u003e",
          "module": "Mine",
          "name": "bView",
          "package": "hs-pgms",
          "signature": "View",
          "source": "src/Mine.html#Board",
          "type": "function"
        },
        "index": {
          "description": "current view",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "bView",
          "package": "hs-pgms",
          "partial": "View",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:bView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault config: 9x9 with 10 mines\n\u003c/p\u003e",
          "module": "Mine",
          "name": "beginner",
          "package": "hs-pgms",
          "signature": "Config",
          "source": "src/Mine.html#beginner",
          "type": "function"
        },
        "index": {
          "description": "Default config x9 with mines",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "beginner",
          "package": "hs-pgms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:beginner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe number of mines placed on the board\n\u003c/p\u003e",
          "module": "Mine",
          "name": "cMines",
          "package": "hs-pgms",
          "signature": "Int",
          "source": "src/Mine.html#Config",
          "type": "function"
        },
        "index": {
          "description": "the number of mines placed on the board",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "cMines",
          "package": "hs-pgms",
          "partial": "Mines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:cMines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe board size\n\u003c/p\u003e",
          "module": "Mine",
          "name": "cSize",
          "package": "hs-pgms",
          "signature": "Pos",
          "source": "src/Mine.html#Config",
          "type": "function"
        },
        "index": {
          "description": "the board size",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "cSize",
          "package": "hs-pgms",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:cSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault values for \u003ccode\u003e\u003ca\u003eStrategy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e myStrategy :: Strategy\n myStrategy = defaultStrategy {\n     sName = \"Hiho\",\n     sRun  = \\_ -\u003e return \"I don't want to play anymore, see you!\"\n }\n\u003c/pre\u003e",
          "module": "Mine",
          "name": "defaultStrategy",
          "package": "hs-pgms",
          "signature": "Strategy",
          "source": "src/Mine.html#defaultStrategy",
          "type": "function"
        },
        "index": {
          "description": "Default values for Strategy myStrategy Strategy myStrategy defaultStrategy sName Hiho sRun return don want to play anymore see you",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "defaultStrategy",
          "package": "hs-pgms",
          "partial": "Strategy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:defaultStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault config: 30x16 with 99 mines\n\u003c/p\u003e",
          "module": "Mine",
          "name": "expert",
          "package": "hs-pgms",
          "signature": "Config",
          "source": "src/Mine.html#expert",
          "type": "function"
        },
        "index": {
          "description": "Default config x16 with mines",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "expert",
          "package": "hs-pgms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:expert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current board's config.\n\u003c/p\u003e\u003cp\u003eNote: the config will never change throughout a game.\n\u003c/p\u003e",
          "module": "Mine",
          "name": "getConfig",
          "package": "hs-pgms",
          "signature": "StrategyM Config",
          "source": "src/Mine.html#getConfig",
          "type": "function"
        },
        "index": {
          "description": "Get the current board config Note the config will never change throughout game",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "getConfig",
          "package": "hs-pgms",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:getConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a view of the current board.\n\u003c/p\u003e",
          "module": "Mine",
          "name": "getView",
          "package": "hs-pgms",
          "signature": "StrategyM View",
          "source": "src/Mine.html#getView",
          "type": "function"
        },
        "index": {
          "description": "Get view of the current board",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "getView",
          "package": "hs-pgms",
          "partial": "View",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:getView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault config: 16x16 with 40 mines\n\u003c/p\u003e",
          "module": "Mine",
          "name": "intermediate",
          "package": "hs-pgms",
          "signature": "Config",
          "source": "src/Mine.html#intermediate",
          "type": "function"
        },
        "index": {
          "description": "Default config x16 with mines",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "intermediate",
          "package": "hs-pgms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:intermediate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMark a cell.\n\u003c/p\u003e\u003cp\u003eNote: Marking a cell without a mine beneath will lose the game. This is\n a deviation from standard Minesweeper.\n\u003c/p\u003e",
          "module": "Mine",
          "name": "mark",
          "package": "hs-pgms",
          "signature": "Pos -\u003e StrategyM ()",
          "source": "src/Mine.html#mark",
          "type": "function"
        },
        "index": {
          "description": "Mark cell Note Marking cell without mine beneath will lose the game This is deviation from standard Minesweeper",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "mark",
          "normalized": "Pos-\u003eStrategyM()",
          "package": "hs-pgms",
          "signature": "Pos-\u003eStrategyM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:mark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReveal a cell. Returns the number of mines in the neighbourhood.\n\u003c/p\u003e\u003cp\u003eNote: Revealing a cell with a mine beneath will lose the game.\n\u003c/p\u003e",
          "module": "Mine",
          "name": "move",
          "package": "hs-pgms",
          "signature": "Pos -\u003e StrategyM Int",
          "source": "src/Mine.html#move",
          "type": "function"
        },
        "index": {
          "description": "Reveal cell Returns the number of mines in the neighbourhood Note Revealing cell with mine beneath will lose the game",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "move",
          "normalized": "Pos-\u003eStrategyM Int",
          "package": "hs-pgms",
          "signature": "Pos-\u003eStrategyM Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:move"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003emove\u003c/a\u003e\u003c/code\u003e, but with no return value.\n\u003c/p\u003e",
          "module": "Mine",
          "name": "move_",
          "package": "hs-pgms",
          "signature": "Pos -\u003e StrategyM ()",
          "source": "src/Mine.html#move_",
          "type": "function"
        },
        "index": {
          "description": "Like move but with no return value",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "move_",
          "normalized": "Pos-\u003eStrategyM()",
          "package": "hs-pgms",
          "signature": "Pos-\u003eStrategyM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:move_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the neighbouring cells of a given cell.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eConfig\u003c/a\u003e\u003c/code\u003e parameter is used to find the boundaries of the board.\n\u003c/p\u003e",
          "module": "Mine",
          "name": "neighbours",
          "package": "hs-pgms",
          "signature": "Config -\u003e Pos -\u003e [Pos]",
          "source": "src/Mine.html#neighbours",
          "type": "function"
        },
        "index": {
          "description": "Find the neighbouring cells of given cell The Config parameter is used to find the boundaries of the board",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "neighbours",
          "normalized": "Config-\u003ePos-\u003e[Pos]",
          "package": "hs-pgms",
          "signature": "Config-\u003ePos-\u003e[Pos]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:neighbours"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Mine",
          "name": "pX",
          "package": "hs-pgms",
          "signature": "Int",
          "source": "src/Mine.html#Pos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "pX",
          "package": "hs-pgms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:pX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Mine",
          "name": "pY",
          "package": "hs-pgms",
          "signature": "Int",
          "source": "src/Mine.html#Pos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "pY",
          "package": "hs-pgms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:pY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pure version of \u003ccode\u003e\u003ca\u003eplayGameP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Mine",
          "name": "playGame",
          "package": "hs-pgms",
          "signature": "Config -\u003e StdGen -\u003e StrategyM a -\u003e (Result a, Board)",
          "source": "src/Mine.html#playGame",
          "type": "function"
        },
        "index": {
          "description": "pure version of playGameP",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "playGame",
          "normalized": "Config-\u003eStdGen-\u003eStrategyM a-\u003e(Result a,Board)",
          "package": "hs-pgms",
          "partial": "Game",
          "signature": "Config-\u003eStdGen-\u003eStrategyM a-\u003e(Result a,Board)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:playGame"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlay a game.\n\u003c/p\u003e\u003cp\u003eThe result is a \u003ccode\u003e\u003ca\u003ePrompt\u003c/a\u003e\u003c/code\u003e action, which is suitable for implementing\n a UI that displays the game's progress.\n\u003c/p\u003e",
          "module": "Mine",
          "name": "playGameP",
          "package": "hs-pgms",
          "signature": "Config -\u003e StdGen -\u003e StrategyM a -\u003e Prompt Play (Result a, Board)",
          "source": "src/Mine.html#playGameP",
          "type": "function"
        },
        "index": {
          "description": "Play game The result is Prompt action which is suitable for implementing UI that displays the game progress",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "playGameP",
          "normalized": "Config-\u003eStdGen-\u003eStrategyM a-\u003ePrompt Play(Result a,Board)",
          "package": "hs-pgms",
          "partial": "Game",
          "signature": "Config-\u003eStdGen-\u003eStrategyM a-\u003ePrompt Play(Result a,Board)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:playGameP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe strategy's author.\n\u003c/p\u003e",
          "module": "Mine",
          "name": "sAuthor",
          "package": "hs-pgms",
          "signature": "String",
          "source": "src/Mine.html#Strategy",
          "type": "function"
        },
        "index": {
          "description": "The strategy author",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "sAuthor",
          "package": "hs-pgms",
          "partial": "Author",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:sAuthor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA description of the strategy.\n\u003c/p\u003e",
          "module": "Mine",
          "name": "sDescription",
          "package": "hs-pgms",
          "signature": "String",
          "source": "src/Mine.html#Strategy",
          "type": "function"
        },
        "index": {
          "description": "description of the strategy",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "sDescription",
          "package": "hs-pgms",
          "partial": "Description",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:sDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe strategy's name. It should be ASCII\n   and not contain spaces.\n\u003c/p\u003e",
          "module": "Mine",
          "name": "sName",
          "package": "hs-pgms",
          "signature": "String",
          "source": "src/Mine.html#Strategy",
          "type": "function"
        },
        "index": {
          "description": "The strategy name It should be ASCII and not contain spaces",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "sName",
          "package": "hs-pgms",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:sName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe strategy's implementation.\n\u003c/p\u003e",
          "module": "Mine",
          "name": "sRun",
          "package": "hs-pgms",
          "signature": "StdGen -\u003e StrategyM String",
          "source": "src/Mine.html#Strategy",
          "type": "function"
        },
        "index": {
          "description": "The strategy implementation",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "sRun",
          "normalized": "StdGen-\u003eStrategyM String",
          "package": "hs-pgms",
          "partial": "Run",
          "signature": "StdGen-\u003eStrategyM String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:sRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvide a debug message.\n\u003c/p\u003e\u003cp\u003eThese will be displayed in the status line in the GUI or on the\n terminal when running the command line version in verbose mode.\n\u003c/p\u003e",
          "module": "Mine",
          "name": "traceMine",
          "package": "hs-pgms",
          "signature": "String -\u003e StrategyM ()",
          "source": "src/Mine.html#traceMine",
          "type": "function"
        },
        "index": {
          "description": "Provide debug message These will be displayed in the status line in the GUI or on the terminal when running the command line version in verbose mode",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "traceMine",
          "normalized": "String-\u003eStrategyM()",
          "package": "hs-pgms",
          "partial": "Mine",
          "signature": "String-\u003eStrategyM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:traceMine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck validity of a config.\n\u003c/p\u003e\u003cp\u003eThe width and height must be at least 2, and the number of mines must be\n between 1 and the number of cells on the board, minus 1.\n\u003c/p\u003e",
          "module": "Mine",
          "name": "validConfig",
          "package": "hs-pgms",
          "signature": "Config -\u003e Bool",
          "source": "src/Mine.html#validConfig",
          "type": "function"
        },
        "index": {
          "description": "Check validity of config The width and height must be at least and the number of mines must be between and the number of cells on the board minus",
          "hierarchy": "Mine",
          "module": "Mine",
          "name": "validConfig",
          "normalized": "Config-\u003eBool",
          "package": "hs-pgms",
          "partial": "Config",
          "signature": "Config-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-pgms/docs/Mine.html#v:validConfig"
      }
    }
  ]
]