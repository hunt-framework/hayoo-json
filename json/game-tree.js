[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/game-tree/docs/Data-Tree-Game_tree-Game_tree.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNodes in game trees\n Copyright 2009 Colin Adams\n\u003c/p\u003e\u003cp\u003eThis file is part of game-tree.\n\u003c/p\u003e\u003cp\u003eGame-tree is free software: you can redistribute it and/or modify\n  it under the terms of the GNU General Public License as published by\n  the Free Software Foundation, either version 3 of the License, or\n  (at your option) any later version.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Tree.Game_tree.Game_tree",
        "fct-package": "game-tree",
        "fct-signature": "module",
        "fct-source": "src/Data-Tree-Game_tree-Game_tree.html",
        "fct-type": "module",
        "title": "Game_tree"
      },
      "index": {
        "description": "Nodes in game trees Copyright Colin Adams This file is part of game-tree Game-tree is free software you can redistribute it and or modify it under the terms of the GNU General Public License as published by the Free Software Foundation either version of the License or at your option any later version",
        "hierarchy": "Data Tree Game_tree Game_tree",
        "module": "Data.Tree.Game_tree.Game_tree",
        "name": "Game_tree",
        "normalized": "",
        "package": "game-tree",
        "partial": "Game",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/game-tree/docs/Data-Tree-Game_tree-Game_tree.html#t:Game_tree",
      "description": {
        "fct-descr": "\u003cp\u003eNodes in a game search tree\n\u003c/p\u003e",
        "fct-module": "Data.Tree.Game_tree.Game_tree",
        "fct-package": "game-tree",
        "fct-signature": "class",
        "fct-source": "src/Data-Tree-Game_tree-Game_tree.html#Game_tree",
        "fct-type": "class",
        "title": "Game_tree"
      },
      "index": {
        "description": "Nodes in game search tree",
        "hierarchy": "Data Tree Game_tree Game_tree",
        "module": "Data.Tree.Game_tree.Game_tree",
        "name": "Game_tree",
        "normalized": "",
        "package": "game-tree",
        "partial": "Game",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/game-tree/docs/Data-Tree-Game_tree-Game_tree.html#v:children",
      "description": {
        "fct-descr": "\u003cp\u003eChild nodes in the game tree (positions more deeply searched)\n\u003c/p\u003e",
        "fct-module": "Data.Tree.Game_tree.Game_tree",
        "fct-package": "game-tree",
        "fct-signature": "a -\u003e [a]",
        "fct-source": "src/Data-Tree-Game_tree-Game_tree.html#children",
        "fct-type": "method",
        "title": "children"
      },
      "index": {
        "description": "Child nodes in the game tree positions more deeply searched",
        "hierarchy": "Data Tree Game_tree Game_tree",
        "module": "Data.Tree.Game_tree.Game_tree",
        "name": "children",
        "normalized": "a-\u003e[a]",
        "package": "game-tree",
        "partial": "",
        "signature": "a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/game-tree/docs/Data-Tree-Game_tree-Game_tree.html#v:is_terminal",
      "description": {
        "fct-descr": "\u003cp\u003eIs this a game-terminating node (e.g. checkmate)?\n\u003c/p\u003e\u003cp\u003eLaw: is_terminal n == (children n == [])\n\u003c/p\u003e",
        "fct-module": "Data.Tree.Game_tree.Game_tree",
        "fct-package": "game-tree",
        "fct-signature": "a -\u003e Bool",
        "fct-source": "src/Data-Tree-Game_tree-Game_tree.html#is_terminal",
        "fct-type": "method",
        "title": "is_terminal"
      },
      "index": {
        "description": "Is this game-terminating node e.g checkmate Law is terminal children",
        "hierarchy": "Data Tree Game_tree Game_tree",
        "module": "Data.Tree.Game_tree.Game_tree",
        "name": "is_terminal",
        "normalized": "a-\u003eBool",
        "package": "game-tree",
        "partial": "",
        "signature": "a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/game-tree/docs/Data-Tree-Game_tree-Game_tree.html#v:node_value",
      "description": {
        "fct-descr": "\u003cp\u003eHeuristic value of node\n\u003c/p\u003e\u003cp\u003eReturned value must line in the (inclusive) range (minBound + 4, maxBound - 3)\n Needs to be sensitive to whose turn it is to move.\n I.e. it must return values of the opposite sign if the other player is to move.\n\u003c/p\u003e",
        "fct-module": "Data.Tree.Game_tree.Game_tree",
        "fct-package": "game-tree",
        "fct-signature": "a -\u003e Int",
        "fct-source": "src/Data-Tree-Game_tree-Game_tree.html#node_value",
        "fct-type": "method",
        "title": "node_value"
      },
      "index": {
        "description": "Heuristic value of node Returned value must line in the inclusive range minBound maxBound Needs to be sensitive to whose turn it is to move I.e it must return values of the opposite sign if the other player is to move",
        "hierarchy": "Data Tree Game_tree Game_tree",
        "module": "Data.Tree.Game_tree.Game_tree",
        "name": "node_value",
        "normalized": "a-\u003eInt",
        "package": "game-tree",
        "partial": "",
        "signature": "a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/game-tree/docs/Data-Tree-Game_tree-Negascout.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNegascout and other (mostly alpha-beta pruning) algorithms for game-tree search\n Copyright 2009 Colin Adams\n\u003c/p\u003e\u003cp\u003eThis file is part of game-tree.\n\u003c/p\u003e\u003cp\u003eGame-tree is free software: you can redistribute it and/or modify\n  it under the terms of the GNU General Public License as published by\n  the Free Software Foundation, either version 3 of the License, or\n  (at your option) any later version.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Tree.Game_tree.Negascout",
        "fct-package": "game-tree",
        "fct-signature": "module",
        "fct-source": "src/Data-Tree-Game_tree-Negascout.html",
        "fct-type": "module",
        "title": "Negascout"
      },
      "index": {
        "description": "Negascout and other mostly alpha-beta pruning algorithms for game-tree search Copyright Colin Adams This file is part of game-tree Game-tree is free software you can redistribute it and or modify it under the terms of the GNU General Public License as published by the Free Software Foundation either version of the License or at your option any later version",
        "hierarchy": "Data Tree Game_tree Negascout",
        "module": "Data.Tree.Game_tree.Negascout",
        "name": "Negascout",
        "normalized": "",
        "package": "game-tree",
        "partial": "Negascout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/game-tree/docs/Data-Tree-Game_tree-Negascout.html#v:alpha_beta_search",
      "description": {
        "fct-descr": "\u003cp\u003eNormal alpha beta pruning (no window).\n\u003c/p\u003e",
        "fct-module": "Data.Tree.Game_tree.Negascout",
        "fct-package": "game-tree",
        "fct-signature": "a-\u003e Int-\u003e ([a], Int)",
        "fct-type": "function",
        "title": "alpha_beta_search"
      },
      "index": {
        "description": "Normal alpha beta pruning no window",
        "hierarchy": "Data Tree Game_tree Negascout",
        "module": "Data.Tree.Game_tree.Negascout",
        "name": "alpha_beta_search",
        "normalized": "a-\u003eInt-\u003e([a],Int)",
        "package": "game-tree",
        "partial": "",
        "signature": "a-\u003eInt-\u003e([a],Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/game-tree/docs/Data-Tree-Game_tree-Negascout.html#v:negamax",
      "description": {
        "fct-descr": "\u003cp\u003ePlain negamax (= minimax with negative scores at alternate levels).\n  No alpha-beta pruning.\n\u003c/p\u003e",
        "fct-module": "Data.Tree.Game_tree.Negascout",
        "fct-package": "game-tree",
        "fct-signature": "a-\u003e Int-\u003e ([a], Int)",
        "fct-type": "function",
        "title": "negamax"
      },
      "index": {
        "description": "Plain negamax minimax with negative scores at alternate levels No alpha-beta pruning",
        "hierarchy": "Data Tree Game_tree Negascout",
        "module": "Data.Tree.Game_tree.Negascout",
        "name": "negamax",
        "normalized": "a-\u003eInt-\u003e([a],Int)",
        "package": "game-tree",
        "partial": "",
        "signature": "a-\u003eInt-\u003e([a],Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/game-tree/docs/Data-Tree-Game_tree-Negascout.html#v:negascout",
      "description": {
        "fct-descr": "\u003cp\u003eNegascout alpha-beta pruning algorithm.\n\u003c/p\u003e\u003cp\u003eNode_value needs to be sensitive to whose turn it is to move.\n I.e. it must return values of the opposite sign if the other player is to move.\n\u003c/p\u003e",
        "fct-module": "Data.Tree.Game_tree.Negascout",
        "fct-package": "game-tree",
        "fct-signature": "a-\u003e Int-\u003e ([a], Int)",
        "fct-type": "function",
        "title": "negascout"
      },
      "index": {
        "description": "Negascout alpha-beta pruning algorithm Node value needs to be sensitive to whose turn it is to move I.e it must return values of the opposite sign if the other player is to move",
        "hierarchy": "Data Tree Game_tree Negascout",
        "module": "Data.Tree.Game_tree.Negascout",
        "name": "negascout",
        "normalized": "a-\u003eInt-\u003e([a],Int)",
        "package": "game-tree",
        "partial": "",
        "signature": "a-\u003eInt-\u003e([a],Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/game-tree/docs/Data-Tree-Game_tree-Negascout.html#v:principal_variation_search",
      "description": {
        "fct-descr": "\u003cp\u003eAlpha-beta pruning with null-window search around every move after a move \n that improves alpha has been found\n\u003c/p\u003e",
        "fct-module": "Data.Tree.Game_tree.Negascout",
        "fct-package": "game-tree",
        "fct-signature": "a-\u003e Int-\u003e ([a], Int)",
        "fct-type": "function",
        "title": "principal_variation_search"
      },
      "index": {
        "description": "Alpha-beta pruning with null-window search around every move after move that improves alpha has been found",
        "hierarchy": "Data Tree Game_tree Negascout",
        "module": "Data.Tree.Game_tree.Negascout",
        "name": "principal_variation_search",
        "normalized": "a-\u003eInt-\u003e([a],Int)",
        "package": "game-tree",
        "partial": "",
        "signature": "a-\u003eInt-\u003e([a],Int)"
      }
    }
  }
]