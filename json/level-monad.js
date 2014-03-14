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
        "word": "level-monad"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library provides an implementation of the MonadPlus type class\n that enumerates the levels of the search space and allows to\n implement breadth-first search and iterative deepening depth-first\n search.\n\u003c/p\u003e\u003cp\u003eThe implementation is inspired by Mike Spivey and Silvija Seres:\n see Chapter 9 of the book 'The Fun of Programming' and the paper\n 'Algebras for Combinatorial Search'.\n\u003c/p\u003e\u003cp\u003eThe implementation of breadth-first search is similar to the\n inspiring implementation but uses lists with constant-time\n concatenation to represent levels. The implementation of iterative\n deepening depth-first is simpler than the inspiring implementation\n thanks to the use of a continuation monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Levels",
          "name": "Levels",
          "package": "level-monad",
          "source": "src/Control-Monad-Levels.html",
          "type": "module"
        },
        "index": {
          "description": "This library provides an implementation of the MonadPlus type class that enumerates the levels of the search space and allows to implement breadth-first search and iterative deepening depth-first search The implementation is inspired by Mike Spivey and Silvija Seres see Chapter of the book The Fun of Programming and the paper Algebras for Combinatorial Search The implementation of breadth-first search is similar to the inspiring implementation but uses lists with constant-time concatenation to represent levels The implementation of iterative deepening depth-first is simpler than the inspiring implementation thanks to the use of continuation monad",
          "hierarchy": "Control Monad Levels",
          "module": "Control.Monad.Levels",
          "name": "Levels",
          "package": "level-monad",
          "partial": "Levels",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/level-monad/docs/Control-Monad-Levels.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003ebfs\u003c/code\u003e enumerates the results of a non-deterministic\n computation using breadth-first search. The implementation does not\n guarantee that results are returned in any specific order but it\n does guarantee that every result is eventually enumerated. Due to\n the large memory requirements of breadth-first search you should\n use \u003ccode\u003eidfs\u003c/code\u003e for expensive search.\n\u003c/p\u003e",
          "module": "Control.Monad.Levels",
          "name": "bfs",
          "package": "level-monad",
          "signature": "FMList a -\u003e [a]",
          "source": "src/Control-Monad-Levels.html#bfs",
          "type": "function"
        },
        "index": {
          "description": "The function bfs enumerates the results of non-deterministic computation using breadth-first search The implementation does not guarantee that results are returned in any specific order but it does guarantee that every result is eventually enumerated Due to the large memory requirements of breadth-first search you should use idfs for expensive search",
          "hierarchy": "Control Monad Levels",
          "module": "Control.Monad.Levels",
          "name": "bfs",
          "normalized": "FMList a-\u003e[a]",
          "package": "level-monad",
          "signature": "FMList a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/level-monad/docs/Control-Monad-Levels.html#v:bfs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003eidfs\u003c/code\u003e computes the levels of a depth bound\n computation using iterative deepening depth-first search. Unlike\n breadth-first search it runs in constant space but usually takes a\n bit longer, depending on how the depth limit is increased. Use\n \u003ccode\u003eidfsBy\u003c/code\u003e to control this. Don't use this algorithm if you know that\n there is only a finite number of results because it will continue\n trying larger depth limits without recognizing that there are no\n more solutions.  It can, however, produce results lazily: calling\n \u003ccode\u003etake n . idfs\u003c/code\u003e terminates if the number of results is larger than\n \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Levels",
          "name": "idfs",
          "package": "level-monad",
          "signature": "FMList a -\u003e [a]",
          "source": "src/Control-Monad-Levels.html#idfs",
          "type": "function"
        },
        "index": {
          "description": "The function idfs computes the levels of depth bound computation using iterative deepening depth-first search Unlike breadth-first search it runs in constant space but usually takes bit longer depending on how the depth limit is increased Use idfsBy to control this Don use this algorithm if you know that there is only finite number of results because it will continue trying larger depth limits without recognizing that there are no more solutions It can however produce results lazily calling take idfs terminates if the number of results is larger than",
          "hierarchy": "Control Monad Levels",
          "module": "Control.Monad.Levels",
          "name": "idfs",
          "normalized": "FMList a-\u003e[a]",
          "package": "level-monad",
          "signature": "FMList a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/level-monad/docs/Control-Monad-Levels.html#v:idfs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003eidfsBy\u003c/code\u003e computes the levels of a depth bound\n computation using iterative deepening depth-first search\n incrementing the depth limit between searches using the given\n number of steps.\n\u003c/p\u003e",
          "module": "Control.Monad.Levels",
          "name": "idfsBy",
          "package": "level-monad",
          "signature": "Int -\u003e FMList a -\u003e [a]",
          "source": "src/Control-Monad-Levels.html#idfsBy",
          "type": "function"
        },
        "index": {
          "description": "The function idfsBy computes the levels of depth bound computation using iterative deepening depth-first search incrementing the depth limit between searches using the given number of steps",
          "hierarchy": "Control Monad Levels",
          "module": "Control.Monad.Levels",
          "name": "idfsBy",
          "normalized": "Int-\u003eFMList a-\u003e[a]",
          "package": "level-monad",
          "partial": "By",
          "signature": "Int-\u003eFMList a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/level-monad/docs/Control-Monad-Levels.html#v:idfsBy"
      }
    }
  ]
]