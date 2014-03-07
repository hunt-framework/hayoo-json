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
        "word": "TicTacToe"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA tic-tac-toe board is one of nine positions, each position occupied by either player 1, player 2 or neither and with invariants specific to the rules of tic-tac-toe.\n\u003c/p\u003e\u003cp\u003eFor example, the number of positions occupied by player 1 is equal to, or one more, than the positions occupied by player 2.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.TicTacToe.Board",
          "name": "Board",
          "package": "TicTacToe",
          "source": "src/Data-TicTacToe-Board.html",
          "type": "module"
        },
        "index": {
          "description": "tic-tac-toe board is one of nine positions each position occupied by either player player or neither and with invariants specific to the rules of tic-tac-toe For example the number of positions occupied by player is equal to or one more than the positions occupied by player",
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "Board",
          "package": "TicTacToe",
          "partial": "Board",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA tic-tac-toe board.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Board",
          "name": "Board",
          "package": "TicTacToe",
          "source": "src/Data-TicTacToe-Board.html#Board",
          "type": "data"
        },
        "index": {
          "description": "tic-tac-toe board",
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "Board",
          "package": "TicTacToe",
          "partial": "Board",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#t:Board"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunctions that work on boards that are in play or have completed.\n\u003c/p\u003e\u003cp\u003eThis class specifically does not specify moving on a board, since this is illegal on a completed board.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Board",
          "name": "BoardLike",
          "package": "TicTacToe",
          "source": "src/Data-TicTacToe-Board.html#BoardLike",
          "type": "class"
        },
        "index": {
          "description": "Functions that work on boards that are in play or have completed This class specifically does not specify moving on board since this is illegal on completed board",
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "BoardLike",
          "package": "TicTacToe",
          "partial": "Board Like",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#t:BoardLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TicTacToe.Board",
          "name": "EmptyBoard",
          "package": "TicTacToe",
          "source": "src/Data-TicTacToe-Board.html#EmptyBoard",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "EmptyBoard",
          "package": "TicTacToe",
          "partial": "Empty Board",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#t:EmptyBoard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA finished board is a completed tic-tac-toe game and does not accept any more moves.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Board",
          "name": "FinishedBoard",
          "package": "TicTacToe",
          "source": "src/Data-TicTacToe-Board.html#FinishedBoard",
          "type": "data"
        },
        "index": {
          "description": "finished board is completed tic-tac-toe game and does not accept any more moves",
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "FinishedBoard",
          "package": "TicTacToe",
          "partial": "Finished Board",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#t:FinishedBoard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TicTacToe.Board",
          "name": "Move",
          "package": "TicTacToe",
          "source": "src/Data-TicTacToe-Board.html#Move",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "Move",
          "package": "TicTacToe",
          "partial": "Move",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#t:Move"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of making a move on a tic-tac-toe board.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Board",
          "name": "MoveResult",
          "package": "TicTacToe",
          "source": "src/Data-TicTacToe-Board.html#MoveResult",
          "type": "data"
        },
        "index": {
          "description": "The result of making move on tic-tac-toe board",
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "MoveResult",
          "package": "TicTacToe",
          "partial": "Move Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#t:MoveResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TicTacToe.Board",
          "name": "TakeBack",
          "package": "TicTacToe",
          "source": "src/Data-TicTacToe-Board.html#TakeBack",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "TakeBack",
          "package": "TicTacToe",
          "partial": "Take Back",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#t:TakeBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TicTacToe.Board",
          "name": "TakenBack",
          "package": "TicTacToe",
          "source": "src/Data-TicTacToe-Board.html#TakenBack",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "TakenBack",
          "package": "TicTacToe",
          "partial": "Taken Back",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#t:TakenBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TicTacToe.Board",
          "name": "(--\u003e)",
          "package": "TicTacToe",
          "signature": "Position -\u003e from -\u003e to",
          "source": "src/Data-TicTacToe-Board.html#--%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "(--\u003e) --\u003e",
          "normalized": "Position-\u003ea-\u003eb",
          "package": "TicTacToe",
          "signature": "Position-\u003efrom-\u003eto",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#v:-45--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TicTacToe.Board",
          "name": "(-?-\u003e)",
          "package": "TicTacToe",
          "signature": "Position -\u003e MoveResult -\u003e MoveResult",
          "source": "src/Data-TicTacToe-Board.html#-%3F-%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "(-?-\u003e) -?-\u003e",
          "normalized": "Position-\u003eMoveResult-\u003eMoveResult",
          "package": "TicTacToe",
          "signature": "Position-\u003eMoveResult-\u003eMoveResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#v:-45--63--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart an empty tic-tac-toe board.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Board",
          "name": "empty",
          "package": "TicTacToe",
          "signature": "EmptyBoard",
          "source": "src/Data-TicTacToe-Board.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Start an empty tic-tac-toe board",
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "empty",
          "package": "TicTacToe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeconstruct a move result.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Board",
          "name": "foldMoveResult",
          "package": "TicTacToe",
          "signature": "a-\u003e (Board -\u003e a)-\u003e (FinishedBoard -\u003e a)-\u003e MoveResult-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Deconstruct move result",
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "foldMoveResult",
          "normalized": "a-\u003e(Board-\u003ea)-\u003e(FinishedBoard-\u003ea)-\u003eMoveResult-\u003ea",
          "package": "TicTacToe",
          "partial": "Move Result",
          "signature": "a-\u003e(Board-\u003ea)-\u003e(FinishedBoard-\u003ea)-\u003eMoveResult-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#v:foldMoveResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TicTacToe.Board",
          "name": "foldTakenBack",
          "package": "TicTacToe",
          "signature": "a -\u003e (Board -\u003e a) -\u003e TakenBack -\u003e a",
          "source": "src/Data-TicTacToe-Board.html#foldTakenBack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "foldTakenBack",
          "normalized": "a-\u003e(Board-\u003ea)-\u003eTakenBack-\u003ea",
          "package": "TicTacToe",
          "partial": "Taken Back",
          "signature": "a-\u003e(Board-\u003ea)-\u003eTakenBack-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#v:foldTakenBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the result of a completed tic-tac-toe game.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Board",
          "name": "getResult",
          "package": "TicTacToe",
          "signature": "FinishedBoard -\u003e GameResult",
          "source": "src/Data-TicTacToe-Board.html#getResult",
          "type": "function"
        },
        "index": {
          "description": "Return the result of completed tic-tac-toe game",
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "getResult",
          "normalized": "FinishedBoard-\u003eGameResult",
          "package": "TicTacToe",
          "partial": "Result",
          "signature": "FinishedBoard-\u003eGameResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#v:getResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether or not the board is empty.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Board",
          "name": "isEmpty",
          "package": "TicTacToe",
          "signature": "b -\u003e Bool",
          "source": "src/Data-TicTacToe-Board.html#isEmpty",
          "type": "method"
        },
        "index": {
          "description": "Returns whether or not the board is empty",
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "isEmpty",
          "normalized": "a-\u003eBool",
          "package": "TicTacToe",
          "partial": "Empty",
          "signature": "b-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#v:isEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether or not the given position is occupied on the board. \u003ccode\u003efalse\u003c/code\u003e if occupied.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Board",
          "name": "isNotOccupied",
          "package": "TicTacToe",
          "signature": "b -\u003e Position -\u003e Bool",
          "source": "src/Data-TicTacToe-Board.html#isNotOccupied",
          "type": "method"
        },
        "index": {
          "description": "Returns whether or not the given position is occupied on the board false if occupied",
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "isNotOccupied",
          "normalized": "a-\u003ePosition-\u003eBool",
          "package": "TicTacToe",
          "partial": "Not Occupied",
          "signature": "b-\u003ePosition-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#v:isNotOccupied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether or not the given position is occupied on the board. \u003ccode\u003etrue\u003c/code\u003e if occupied.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Board",
          "name": "isOccupied",
          "package": "TicTacToe",
          "signature": "b -\u003e Position -\u003e Bool",
          "source": "src/Data-TicTacToe-Board.html#isOccupied",
          "type": "method"
        },
        "index": {
          "description": "Returns whether or not the given position is occupied on the board true if occupied",
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "isOccupied",
          "normalized": "a-\u003ePosition-\u003eBool",
          "package": "TicTacToe",
          "partial": "Occupied",
          "signature": "b-\u003ePosition-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#v:isOccupied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether or not the first given board can transition to the second given board and they are inequal.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Board",
          "name": "isProperSubboardOf",
          "package": "TicTacToe",
          "signature": "b -\u003e b -\u003e Bool",
          "source": "src/Data-TicTacToe-Board.html#isProperSubboardOf",
          "type": "method"
        },
        "index": {
          "description": "Returns whether or not the first given board can transition to the second given board and they are inequal",
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "isProperSubboardOf",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "TicTacToe",
          "partial": "Proper Subboard Of",
          "signature": "b-\u003eb-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#v:isProperSubboardOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether or not the first given board can transition to the second given board.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Board",
          "name": "isSubboardOf",
          "package": "TicTacToe",
          "signature": "b -\u003e b -\u003e Bool",
          "source": "src/Data-TicTacToe-Board.html#isSubboardOf",
          "type": "method"
        },
        "index": {
          "description": "Returns whether or not the first given board can transition to the second given board",
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "isSubboardOf",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "TicTacToe",
          "partial": "Subboard Of",
          "signature": "b-\u003eb-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#v:isSubboardOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the possible board from a move result. A board is returned if the result is to continue play.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Board",
          "name": "keepPlaying",
          "package": "TicTacToe",
          "signature": "MoveResult -\u003e Maybe Board",
          "source": "src/Data-TicTacToe-Board.html#keepPlaying",
          "type": "function"
        },
        "index": {
          "description": "Return the possible board from move result board is returned if the result is to continue play",
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "keepPlaying",
          "normalized": "MoveResult-\u003eMaybe Board",
          "package": "TicTacToe",
          "partial": "Playing",
          "signature": "MoveResult-\u003eMaybe Board",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#v:keepPlaying"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the value after function application to the board to keep playing.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Board",
          "name": "keepPlayingOr",
          "package": "TicTacToe",
          "signature": "a-\u003e (Board -\u003e a)-\u003e MoveResult-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Return the value after function application to the board to keep playing",
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "keepPlayingOr",
          "normalized": "a-\u003e(Board-\u003ea)-\u003eMoveResult-\u003ea",
          "package": "TicTacToe",
          "partial": "Playing Or",
          "signature": "a-\u003e(Board-\u003ea)-\u003eMoveResult-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#v:keepPlayingOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of moves that have been played.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Board",
          "name": "moves",
          "package": "TicTacToe",
          "signature": "b -\u003e Int",
          "source": "src/Data-TicTacToe-Board.html#moves",
          "type": "method"
        },
        "index": {
          "description": "Returns the number of moves that have been played",
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "moves",
          "normalized": "a-\u003eInt",
          "package": "TicTacToe",
          "signature": "b-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#v:moves"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns positions that are occupied.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Board",
          "name": "occupiedPositions",
          "package": "TicTacToe",
          "signature": "b -\u003e Set Position",
          "source": "src/Data-TicTacToe-Board.html#occupiedPositions",
          "type": "method"
        },
        "index": {
          "description": "Returns positions that are occupied",
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "occupiedPositions",
          "normalized": "a-\u003eSet Position",
          "package": "TicTacToe",
          "partial": "Positions",
          "signature": "b-\u003eSet Position",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#v:occupiedPositions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the player at the given position.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Board",
          "name": "playerAt",
          "package": "TicTacToe",
          "signature": "b -\u003e Position -\u003e Maybe Player",
          "source": "src/Data-TicTacToe-Board.html#playerAt",
          "type": "method"
        },
        "index": {
          "description": "Returns the player at the given position",
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "playerAt",
          "normalized": "a-\u003ePosition-\u003eMaybe Player",
          "package": "TicTacToe",
          "partial": "At",
          "signature": "b-\u003ePosition-\u003eMaybe Player",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#v:playerAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the player at the given position or the given default.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Board",
          "name": "playerAtOr",
          "package": "TicTacToe",
          "signature": "b -\u003e Position -\u003e Player -\u003e Player",
          "source": "src/Data-TicTacToe-Board.html#playerAtOr",
          "type": "method"
        },
        "index": {
          "description": "Returns the player at the given position or the given default",
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "playerAtOr",
          "normalized": "a-\u003ePosition-\u003ePlayer-\u003ePlayer",
          "package": "TicTacToe",
          "partial": "At Or",
          "signature": "b-\u003ePosition-\u003ePlayer-\u003ePlayer",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#v:playerAtOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrints the board to standard output using an ASCII grid representation.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Board",
          "name": "printBoard",
          "package": "TicTacToe",
          "signature": "b -\u003e IO ()",
          "source": "src/Data-TicTacToe-Board.html#printBoard",
          "type": "method"
        },
        "index": {
          "description": "Prints the board to standard output using an ASCII grid representation",
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "printBoard",
          "normalized": "a-\u003eIO()",
          "package": "TicTacToe",
          "partial": "Board",
          "signature": "b-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#v:printBoard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrints out a board using ASCII notation and substituting the returned string for each position.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Board",
          "name": "printEachPosition",
          "package": "TicTacToe",
          "signature": "(Position -\u003e String)-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Prints out board using ASCII notation and substituting the returned string for each position",
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "printEachPosition",
          "normalized": "(Position-\u003eString)-\u003eIO()",
          "package": "TicTacToe",
          "partial": "Each Position",
          "signature": "(Position-\u003eString)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#v:printEachPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TicTacToe.Board",
          "name": "takeBack",
          "package": "TicTacToe",
          "signature": "to -\u003e from",
          "source": "src/Data-TicTacToe-Board.html#takeBack",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "takeBack",
          "normalized": "a-\u003eb",
          "package": "TicTacToe",
          "partial": "Back",
          "signature": "to-\u003efrom",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#v:takeBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TicTacToe.Board",
          "name": "takenBackBoard",
          "package": "TicTacToe",
          "signature": "TakenBack -\u003e Maybe Board",
          "source": "src/Data-TicTacToe-Board.html#takenBackBoard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "takenBackBoard",
          "normalized": "TakenBack-\u003eMaybe Board",
          "package": "TicTacToe",
          "partial": "Back Board",
          "signature": "TakenBack-\u003eMaybe Board",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#v:takenBackBoard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whose turn it is not on a tic-tac-toe board.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Board",
          "name": "whoseNotTurn",
          "package": "TicTacToe",
          "signature": "b -\u003e Player",
          "source": "src/Data-TicTacToe-Board.html#whoseNotTurn",
          "type": "method"
        },
        "index": {
          "description": "Returns whose turn it is not on tic-tac-toe board",
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "whoseNotTurn",
          "normalized": "a-\u003ePlayer",
          "package": "TicTacToe",
          "partial": "Not Turn",
          "signature": "b-\u003ePlayer",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#v:whoseNotTurn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whose turn it is on a tic-tac-toe board.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Board",
          "name": "whoseTurn",
          "package": "TicTacToe",
          "signature": "b -\u003e Player",
          "source": "src/Data-TicTacToe-Board.html#whoseTurn",
          "type": "method"
        },
        "index": {
          "description": "Returns whose turn it is on tic-tac-toe board",
          "hierarchy": "Data TicTacToe Board",
          "module": "Data.TicTacToe.Board",
          "name": "whoseTurn",
          "normalized": "a-\u003ePlayer",
          "package": "TicTacToe",
          "partial": "Turn",
          "signature": "b-\u003ePlayer",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Board.html#v:whoseTurn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA game result is one of\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Player 1 wins\n\u003c/li\u003e\u003cli\u003e Player 2 wins\n\u003c/li\u003e\u003cli\u003e Neither player wins (draw)\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.TicTacToe.GameResult",
          "name": "GameResult",
          "package": "TicTacToe",
          "source": "src/Data-TicTacToe-GameResult.html",
          "type": "module"
        },
        "index": {
          "description": "game result is one of Player wins Player wins Neither player wins draw",
          "hierarchy": "Data TicTacToe GameResult",
          "module": "Data.TicTacToe.GameResult",
          "name": "GameResult",
          "package": "TicTacToe",
          "partial": "Game Result",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-GameResult.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA game result.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.GameResult",
          "name": "GameResult",
          "package": "TicTacToe",
          "source": "src/Data-TicTacToe-GameResult.html#GameResult",
          "type": "data"
        },
        "index": {
          "description": "game result",
          "hierarchy": "Data TicTacToe GameResult",
          "module": "Data.TicTacToe.GameResult",
          "name": "GameResult",
          "package": "TicTacToe",
          "partial": "Game Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-GameResult.html#t:GameResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a game result that is a draw.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.GameResult",
          "name": "draw",
          "package": "TicTacToe",
          "signature": "GameResult",
          "source": "src/Data-TicTacToe-GameResult.html#draw",
          "type": "function"
        },
        "index": {
          "description": "Construct game result that is draw",
          "hierarchy": "Data TicTacToe GameResult",
          "module": "Data.TicTacToe.GameResult",
          "name": "draw",
          "package": "TicTacToe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-GameResult.html#v:draw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold a game result.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.GameResult",
          "name": "gameResult",
          "package": "TicTacToe",
          "signature": "(Player -\u003e x)-\u003e x-\u003e GameResult-\u003e x",
          "type": "function"
        },
        "index": {
          "description": "Fold game result",
          "hierarchy": "Data TicTacToe GameResult",
          "module": "Data.TicTacToe.GameResult",
          "name": "gameResult",
          "normalized": "(Player-\u003ea)-\u003ea-\u003eGameResult-\u003ea",
          "package": "TicTacToe",
          "partial": "Result",
          "signature": "(Player-\u003ex)-\u003ex-\u003eGameResult-\u003ex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-GameResult.html#v:gameResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether the game result is a draw.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.GameResult",
          "name": "isDraw",
          "package": "TicTacToe",
          "signature": "GameResult -\u003e Bool",
          "source": "src/Data-TicTacToe-GameResult.html#isDraw",
          "type": "function"
        },
        "index": {
          "description": "Returns whether the game result is draw",
          "hierarchy": "Data TicTacToe GameResult",
          "module": "Data.TicTacToe.GameResult",
          "name": "isDraw",
          "normalized": "GameResult-\u003eBool",
          "package": "TicTacToe",
          "partial": "Draw",
          "signature": "GameResult-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-GameResult.html#v:isDraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether or not player 1 won for the game result.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.GameResult",
          "name": "isPlayer1Wins",
          "package": "TicTacToe",
          "signature": "GameResult -\u003e Bool",
          "source": "src/Data-TicTacToe-GameResult.html#isPlayer1Wins",
          "type": "function"
        },
        "index": {
          "description": "Returns whether or not player won for the game result",
          "hierarchy": "Data TicTacToe GameResult",
          "module": "Data.TicTacToe.GameResult",
          "name": "isPlayer1Wins",
          "normalized": "GameResult-\u003eBool",
          "package": "TicTacToe",
          "partial": "Player Wins",
          "signature": "GameResult-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-GameResult.html#v:isPlayer1Wins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether or not player 2 won for the game result.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.GameResult",
          "name": "isPlayer2Wins",
          "package": "TicTacToe",
          "signature": "GameResult -\u003e Bool",
          "source": "src/Data-TicTacToe-GameResult.html#isPlayer2Wins",
          "type": "function"
        },
        "index": {
          "description": "Returns whether or not player won for the game result",
          "hierarchy": "Data TicTacToe GameResult",
          "module": "Data.TicTacToe.GameResult",
          "name": "isPlayer2Wins",
          "normalized": "GameResult-\u003eBool",
          "package": "TicTacToe",
          "partial": "Player Wins",
          "signature": "GameResult-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-GameResult.html#v:isPlayer2Wins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a game result with a win for player 1.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.GameResult",
          "name": "player1Wins",
          "package": "TicTacToe",
          "signature": "GameResult",
          "source": "src/Data-TicTacToe-GameResult.html#player1Wins",
          "type": "function"
        },
        "index": {
          "description": "Construct game result with win for player",
          "hierarchy": "Data TicTacToe GameResult",
          "module": "Data.TicTacToe.GameResult",
          "name": "player1Wins",
          "package": "TicTacToe",
          "partial": "Wins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-GameResult.html#v:player1Wins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a game result with a win for player 2.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.GameResult",
          "name": "player2Wins",
          "package": "TicTacToe",
          "signature": "GameResult",
          "source": "src/Data-TicTacToe-GameResult.html#player2Wins",
          "type": "function"
        },
        "index": {
          "description": "Construct game result with win for player",
          "hierarchy": "Data TicTacToe GameResult",
          "module": "Data.TicTacToe.GameResult",
          "name": "player2Wins",
          "package": "TicTacToe",
          "partial": "Wins",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-GameResult.html#v:player2Wins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFold a game result.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.GameResult",
          "name": "playerGameResult",
          "package": "TicTacToe",
          "signature": "x-\u003e x-\u003e x-\u003e GameResult-\u003e x",
          "type": "function"
        },
        "index": {
          "description": "Fold game result",
          "hierarchy": "Data TicTacToe GameResult",
          "module": "Data.TicTacToe.GameResult",
          "name": "playerGameResult",
          "normalized": "a-\u003ea-\u003ea-\u003eGameResult-\u003ea",
          "package": "TicTacToe",
          "partial": "Game Result",
          "signature": "x-\u003ex-\u003ex-\u003eGameResult-\u003ex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-GameResult.html#v:playerGameResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a game result with a win for the given player.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.GameResult",
          "name": "win",
          "package": "TicTacToe",
          "signature": "Player-\u003e GameResult",
          "type": "function"
        },
        "index": {
          "description": "Construct game result with win for the given player",
          "hierarchy": "Data TicTacToe GameResult",
          "module": "Data.TicTacToe.GameResult",
          "name": "win",
          "normalized": "Player-\u003eGameResult",
          "package": "TicTacToe",
          "signature": "Player-\u003eGameResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-GameResult.html#v:win"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePlay tic-tac-toe interactively.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.TicTacToe.Interact",
          "name": "Interact",
          "package": "TicTacToe",
          "source": "src/Data-TicTacToe-Interact.html",
          "type": "module"
        },
        "index": {
          "description": "Play tic-tac-toe interactively",
          "hierarchy": "Data TicTacToe Interact",
          "module": "Data.TicTacToe.Interact",
          "name": "Interact",
          "package": "TicTacToe",
          "partial": "Interact",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Interact.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlay tic-tac-toe interactively.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Interact",
          "name": "tictactoe",
          "package": "TicTacToe",
          "signature": "IO ()",
          "source": "src/Data-TicTacToe-Interact.html#tictactoe",
          "type": "function"
        },
        "index": {
          "description": "Play tic-tac-toe interactively",
          "hierarchy": "Data TicTacToe Interact",
          "module": "Data.TicTacToe.Interact",
          "name": "tictactoe",
          "normalized": "IO()",
          "package": "TicTacToe",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Interact.html#v:tictactoe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA player is either player 1 or player 2 \u003cem\u003e(isomorphic to Bool)\u003c/em\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.TicTacToe.Player",
          "name": "Player",
          "package": "TicTacToe",
          "source": "src/Data-TicTacToe-Player.html",
          "type": "module"
        },
        "index": {
          "description": "player is either player or player isomorphic to Bool",
          "hierarchy": "Data TicTacToe Player",
          "module": "Data.TicTacToe.Player",
          "name": "Player",
          "package": "TicTacToe",
          "partial": "Player",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Player.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA player.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Player",
          "name": "Player",
          "package": "TicTacToe",
          "source": "src/Data-TicTacToe-Player.html#Player",
          "type": "data"
        },
        "index": {
          "description": "player",
          "hierarchy": "Data TicTacToe Player",
          "module": "Data.TicTacToe.Player",
          "name": "Player",
          "package": "TicTacToe",
          "partial": "Player",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Player.html#t:Player"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwitches a player from player 1 to player 2 or vice versa.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Player",
          "name": "alternate",
          "package": "TicTacToe",
          "signature": "Player-\u003e Player",
          "type": "function"
        },
        "index": {
          "description": "Switches player from player to player or vice versa",
          "hierarchy": "Data TicTacToe Player",
          "module": "Data.TicTacToe.Player",
          "name": "alternate",
          "normalized": "Player-\u003ePlayer",
          "package": "TicTacToe",
          "signature": "Player-\u003ePlayer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Player.html#v:alternate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether or not the player is player 1.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Player",
          "name": "isPlayer1",
          "package": "TicTacToe",
          "signature": "Player -\u003e Bool",
          "source": "src/Data-TicTacToe-Player.html#isPlayer1",
          "type": "function"
        },
        "index": {
          "description": "Returns whether or not the player is player",
          "hierarchy": "Data TicTacToe Player",
          "module": "Data.TicTacToe.Player",
          "name": "isPlayer1",
          "normalized": "Player-\u003eBool",
          "package": "TicTacToe",
          "partial": "Player",
          "signature": "Player-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Player.html#v:isPlayer1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns whether or not the player is player 2.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Player",
          "name": "isPlayer2",
          "package": "TicTacToe",
          "signature": "Player -\u003e Bool",
          "source": "src/Data-TicTacToe-Player.html#isPlayer2",
          "type": "function"
        },
        "index": {
          "description": "Returns whether or not the player is player",
          "hierarchy": "Data TicTacToe Player",
          "module": "Data.TicTacToe.Player",
          "name": "isPlayer2",
          "normalized": "Player-\u003eBool",
          "package": "TicTacToe",
          "partial": "Player",
          "signature": "Player-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Player.html#v:isPlayer2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFolds a player.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Player",
          "name": "player",
          "package": "TicTacToe",
          "signature": "x-\u003e x-\u003e Player-\u003e x",
          "type": "function"
        },
        "index": {
          "description": "Folds player",
          "hierarchy": "Data TicTacToe Player",
          "module": "Data.TicTacToe.Player",
          "name": "player",
          "normalized": "a-\u003ea-\u003ePlayer-\u003ea",
          "package": "TicTacToe",
          "signature": "x-\u003ex-\u003ePlayer-\u003ex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Player.html#v:player"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlayer 1.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Player",
          "name": "player1",
          "package": "TicTacToe",
          "signature": "Player",
          "source": "src/Data-TicTacToe-Player.html#player1",
          "type": "function"
        },
        "index": {
          "description": "Player",
          "hierarchy": "Data TicTacToe Player",
          "module": "Data.TicTacToe.Player",
          "name": "player1",
          "package": "TicTacToe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Player.html#v:player1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlayer 2.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Player",
          "name": "player2",
          "package": "TicTacToe",
          "signature": "Player",
          "source": "src/Data-TicTacToe-Player.html#player2",
          "type": "function"
        },
        "index": {
          "description": "Player",
          "hierarchy": "Data TicTacToe Player",
          "module": "Data.TicTacToe.Player",
          "name": "player2",
          "package": "TicTacToe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Player.html#v:player2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a character symbol denoting each player.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Player",
          "name": "toSymbol",
          "package": "TicTacToe",
          "signature": "Player -\u003e Char",
          "source": "src/Data-TicTacToe-Player.html#toSymbol",
          "type": "function"
        },
        "index": {
          "description": "Returns character symbol denoting each player",
          "hierarchy": "Data TicTacToe Player",
          "module": "Data.TicTacToe.Player",
          "name": "toSymbol",
          "normalized": "Player-\u003eChar",
          "package": "TicTacToe",
          "partial": "Symbol",
          "signature": "Player-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Player.html#v:toSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA position is one of the nine places on a tic-tac-toe grid.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.TicTacToe.Position",
          "name": "Position",
          "package": "TicTacToe",
          "source": "src/Data-TicTacToe-Position.html",
          "type": "module"
        },
        "index": {
          "description": "position is one of the nine places on tic-tac-toe grid",
          "hierarchy": "Data TicTacToe Position",
          "module": "Data.TicTacToe.Position",
          "name": "Position",
          "package": "TicTacToe",
          "partial": "Position",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Position.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TicTacToe.Position",
          "name": "Position",
          "package": "TicTacToe",
          "source": "src/Data-TicTacToe-Position.html#Position",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data TicTacToe Position",
          "module": "Data.TicTacToe.Position",
          "name": "Position",
          "package": "TicTacToe",
          "partial": "Position",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Position.html#t:Position"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCentre.\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Position",
          "name": "C",
          "package": "TicTacToe",
          "signature": "C",
          "source": "src/Data-TicTacToe-Position.html#Position",
          "type": "function"
        },
        "index": {
          "description": "Centre",
          "hierarchy": "Data TicTacToe Position",
          "module": "Data.TicTacToe.Position",
          "name": "C",
          "package": "TicTacToe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Position.html#v:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEast (middle right)\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Position",
          "name": "E",
          "package": "TicTacToe",
          "signature": "E",
          "source": "src/Data-TicTacToe-Position.html#Position",
          "type": "function"
        },
        "index": {
          "description": "East middle right",
          "hierarchy": "Data TicTacToe Position",
          "module": "Data.TicTacToe.Position",
          "name": "E",
          "package": "TicTacToe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Position.html#v:E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNorth (top centre).\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Position",
          "name": "N",
          "package": "TicTacToe",
          "signature": "N",
          "source": "src/Data-TicTacToe-Position.html#Position",
          "type": "function"
        },
        "index": {
          "description": "North top centre",
          "hierarchy": "Data TicTacToe Position",
          "module": "Data.TicTacToe.Position",
          "name": "N",
          "package": "TicTacToe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Position.html#v:N"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNorth-east (top right).\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Position",
          "name": "NE",
          "package": "TicTacToe",
          "signature": "NE",
          "source": "src/Data-TicTacToe-Position.html#Position",
          "type": "function"
        },
        "index": {
          "description": "North-east top right",
          "hierarchy": "Data TicTacToe Position",
          "module": "Data.TicTacToe.Position",
          "name": "NE",
          "package": "TicTacToe",
          "partial": "NE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Position.html#v:NE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNorth-west (top left).\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Position",
          "name": "NW",
          "package": "TicTacToe",
          "signature": "NW",
          "source": "src/Data-TicTacToe-Position.html#Position",
          "type": "function"
        },
        "index": {
          "description": "North-west top left",
          "hierarchy": "Data TicTacToe Position",
          "module": "Data.TicTacToe.Position",
          "name": "NW",
          "package": "TicTacToe",
          "partial": "NW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Position.html#v:NW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSouth (bottom centre).\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Position",
          "name": "S",
          "package": "TicTacToe",
          "signature": "S",
          "source": "src/Data-TicTacToe-Position.html#Position",
          "type": "function"
        },
        "index": {
          "description": "South bottom centre",
          "hierarchy": "Data TicTacToe Position",
          "module": "Data.TicTacToe.Position",
          "name": "S",
          "package": "TicTacToe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Position.html#v:S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSouth-east (bottom right).\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Position",
          "name": "SE",
          "package": "TicTacToe",
          "signature": "SE",
          "source": "src/Data-TicTacToe-Position.html#Position",
          "type": "function"
        },
        "index": {
          "description": "South-east bottom right",
          "hierarchy": "Data TicTacToe Position",
          "module": "Data.TicTacToe.Position",
          "name": "SE",
          "package": "TicTacToe",
          "partial": "SE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Position.html#v:SE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSouth-west (bottom left).\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Position",
          "name": "SW",
          "package": "TicTacToe",
          "signature": "SW",
          "source": "src/Data-TicTacToe-Position.html#Position",
          "type": "function"
        },
        "index": {
          "description": "South-west bottom left",
          "hierarchy": "Data TicTacToe Position",
          "module": "Data.TicTacToe.Position",
          "name": "SW",
          "package": "TicTacToe",
          "partial": "SW",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Position.html#v:SW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWest (middle left).\n\u003c/p\u003e",
          "module": "Data.TicTacToe.Position",
          "name": "W",
          "package": "TicTacToe",
          "signature": "W",
          "source": "src/Data-TicTacToe-Position.html#Position",
          "type": "function"
        },
        "index": {
          "description": "West middle left",
          "hierarchy": "Data TicTacToe Position",
          "module": "Data.TicTacToe.Position",
          "name": "W",
          "package": "TicTacToe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe-Position.html#v:W"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.TicTacToe",
          "name": "TicTacToe",
          "package": "TicTacToe",
          "source": "src/Data-TicTacToe.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data TicTacToe",
          "module": "Data.TicTacToe",
          "name": "TicTacToe",
          "package": "TicTacToe",
          "partial": "Tic Tac Toe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Data-TicTacToe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Data.TicTacToe.Board",
          "name": "Board",
          "package": "TicTacToe",
          "source": "src/Test-Data-TicTacToe-Board.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test Data TicTacToe Board",
          "module": "Test.Data.TicTacToe.Board",
          "name": "Board",
          "package": "TicTacToe",
          "partial": "Board",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Test-Data-TicTacToe-Board.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Data.TicTacToe.Board",
          "name": "boardTests",
          "package": "TicTacToe",
          "signature": "[Test]",
          "source": "src/Test-Data-TicTacToe-Board.html#boardTests",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Data TicTacToe Board",
          "module": "Test.Data.TicTacToe.Board",
          "name": "boardTests",
          "normalized": "[Test]",
          "package": "TicTacToe",
          "partial": "Tests",
          "signature": "[Test]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Test-Data-TicTacToe-Board.html#v:boardTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Data.TicTacToe.Board",
          "name": "main",
          "package": "TicTacToe",
          "signature": "IO ()",
          "source": "src/Test-Data-TicTacToe-Board.html#main",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Data TicTacToe Board",
          "module": "Test.Data.TicTacToe.Board",
          "name": "main",
          "normalized": "IO()",
          "package": "TicTacToe",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Test-Data-TicTacToe-Board.html#v:main"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Data.TicTacToe.GameResult",
          "name": "GameResult",
          "package": "TicTacToe",
          "source": "src/Test-Data-TicTacToe-GameResult.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test Data TicTacToe GameResult",
          "module": "Test.Data.TicTacToe.GameResult",
          "name": "GameResult",
          "package": "TicTacToe",
          "partial": "Game Result",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Test-Data-TicTacToe-GameResult.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Data.TicTacToe.GameResult",
          "name": "gameResultTests",
          "package": "TicTacToe",
          "signature": "[Test]",
          "source": "src/Test-Data-TicTacToe-GameResult.html#gameResultTests",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Data TicTacToe GameResult",
          "module": "Test.Data.TicTacToe.GameResult",
          "name": "gameResultTests",
          "normalized": "[Test]",
          "package": "TicTacToe",
          "partial": "Result Tests",
          "signature": "[Test]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Test-Data-TicTacToe-GameResult.html#v:gameResultTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Data.TicTacToe.GameResult",
          "name": "main",
          "package": "TicTacToe",
          "signature": "IO ()",
          "source": "src/Test-Data-TicTacToe-GameResult.html#main",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Data TicTacToe GameResult",
          "module": "Test.Data.TicTacToe.GameResult",
          "name": "main",
          "normalized": "IO()",
          "package": "TicTacToe",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Test-Data-TicTacToe-GameResult.html#v:main"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Data.TicTacToe.Player",
          "name": "Player",
          "package": "TicTacToe",
          "source": "src/Test-Data-TicTacToe-Player.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test Data TicTacToe Player",
          "module": "Test.Data.TicTacToe.Player",
          "name": "Player",
          "package": "TicTacToe",
          "partial": "Player",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Test-Data-TicTacToe-Player.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Data.TicTacToe.Player",
          "name": "main",
          "package": "TicTacToe",
          "signature": "IO ()",
          "source": "src/Test-Data-TicTacToe-Player.html#main",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Data TicTacToe Player",
          "module": "Test.Data.TicTacToe.Player",
          "name": "main",
          "normalized": "IO()",
          "package": "TicTacToe",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Test-Data-TicTacToe-Player.html#v:main"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Data.TicTacToe.Player",
          "name": "playerTests",
          "package": "TicTacToe",
          "signature": "[Test]",
          "source": "src/Test-Data-TicTacToe-Player.html#playerTests",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Data TicTacToe Player",
          "module": "Test.Data.TicTacToe.Player",
          "name": "playerTests",
          "normalized": "[Test]",
          "package": "TicTacToe",
          "partial": "Tests",
          "signature": "[Test]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Test-Data-TicTacToe-Player.html#v:playerTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Data.TicTacToe.Position",
          "name": "Position",
          "package": "TicTacToe",
          "source": "src/Test-Data-TicTacToe-Position.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test Data TicTacToe Position",
          "module": "Test.Data.TicTacToe.Position",
          "name": "Position",
          "package": "TicTacToe",
          "partial": "Position",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Test-Data-TicTacToe-Position.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Data.TicTacToe.Position",
          "name": "main",
          "package": "TicTacToe",
          "signature": "IO ()",
          "source": "src/Test-Data-TicTacToe-Position.html#main",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Data TicTacToe Position",
          "module": "Test.Data.TicTacToe.Position",
          "name": "main",
          "normalized": "IO()",
          "package": "TicTacToe",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Test-Data-TicTacToe-Position.html#v:main"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Data.TicTacToe.Position",
          "name": "positionTests",
          "package": "TicTacToe",
          "signature": "[Test]",
          "source": "src/Test-Data-TicTacToe-Position.html#positionTests",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Data TicTacToe Position",
          "module": "Test.Data.TicTacToe.Position",
          "name": "positionTests",
          "normalized": "[Test]",
          "package": "TicTacToe",
          "partial": "Tests",
          "signature": "[Test]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Test-Data-TicTacToe-Position.html#v:positionTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Data.TicTacToe",
          "name": "TicTacToe",
          "package": "TicTacToe",
          "source": "src/Test-Data-TicTacToe.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test Data TicTacToe",
          "module": "Test.Data.TicTacToe",
          "name": "TicTacToe",
          "package": "TicTacToe",
          "partial": "Tic Tac Toe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Test-Data-TicTacToe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Data.TicTacToe",
          "name": "main",
          "package": "TicTacToe",
          "signature": "IO ()",
          "source": "src/Test-Data-TicTacToe.html#main",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Data TicTacToe",
          "module": "Test.Data.TicTacToe",
          "name": "main",
          "normalized": "IO()",
          "package": "TicTacToe",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Test-Data-TicTacToe.html#v:main"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Data.TicTacToe",
          "name": "tictactoeTests",
          "package": "TicTacToe",
          "signature": "[Test]",
          "source": "src/Test-Data-TicTacToe.html#tictactoeTests",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Data TicTacToe",
          "module": "Test.Data.TicTacToe",
          "name": "tictactoeTests",
          "normalized": "[Test]",
          "package": "TicTacToe",
          "partial": "Tests",
          "signature": "[Test]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TicTacToe/docs/Test-Data-TicTacToe.html#v:tictactoeTests"
      }
    }
  ]
]