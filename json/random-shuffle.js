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
        "word": "random-shuffle"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ehttp:\u003cem/\u003eokmij.org\u003cem\u003eftp\u003c/em\u003eHaskell/perfect-shuffle.txt\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Random.Shuffle",
          "name": "Shuffle",
          "package": "random-shuffle",
          "source": "src/System-Random-Shuffle.html",
          "type": "module"
        },
        "index": {
          "description": "http okmij.org ftp Haskell perfect-shuffle.txt",
          "hierarchy": "System Random Shuffle",
          "module": "System.Random.Shuffle",
          "name": "Shuffle",
          "package": "random-shuffle",
          "partial": "Shuffle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/random-shuffle/docs/System-Random-Shuffle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a sequence (e1,...en) to shuffle, and a sequence\n (r1,...r[n-1]) of numbers such that r[i] is an independent sample\n from a uniform random distribution [0..n-i], compute the\n corresponding permutation of the input sequence.\n\u003c/p\u003e",
          "module": "System.Random.Shuffle",
          "name": "shuffle",
          "package": "random-shuffle",
          "signature": "[a] -\u003e [Int] -\u003e [a]",
          "source": "src/System-Random-Shuffle.html#shuffle",
          "type": "function"
        },
        "index": {
          "description": "Given sequence e1 en to shuffle and sequence r1 n-1 of numbers such that is an independent sample from uniform random distribution n-i compute the corresponding permutation of the input sequence",
          "hierarchy": "System Random Shuffle",
          "module": "System.Random.Shuffle",
          "name": "shuffle",
          "normalized": "[a]-\u003e[Int]-\u003e[a]",
          "package": "random-shuffle",
          "signature": "[a]-\u003e[Int]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-shuffle/docs/System-Random-Shuffle.html#v:shuffle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a sequence (e1,...en) to shuffle, its length, and a random\n generator, compute the corresponding permutation of the input\n sequence.\n\u003c/p\u003e",
          "module": "System.Random.Shuffle",
          "name": "shuffle'",
          "package": "random-shuffle",
          "signature": "[a] -\u003e Int -\u003e gen -\u003e [a]",
          "source": "src/System-Random-Shuffle.html#shuffle%27",
          "type": "function"
        },
        "index": {
          "description": "Given sequence e1 en to shuffle its length and random generator compute the corresponding permutation of the input sequence",
          "hierarchy": "System Random Shuffle",
          "module": "System.Random.Shuffle",
          "name": "shuffle'",
          "normalized": "[a]-\u003eInt-\u003eb-\u003e[a]",
          "package": "random-shuffle",
          "signature": "[a]-\u003eInt-\u003egen-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-shuffle/docs/System-Random-Shuffle.html#v:shuffle-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eshuffle' wrapped in a random monad\n\u003c/p\u003e",
          "module": "System.Random.Shuffle",
          "name": "shuffleM",
          "package": "random-shuffle",
          "signature": "[a] -\u003e m [a]",
          "source": "src/System-Random-Shuffle.html#shuffleM",
          "type": "function"
        },
        "index": {
          "description": "shuffle wrapped in random monad",
          "hierarchy": "System Random Shuffle",
          "module": "System.Random.Shuffle",
          "name": "shuffleM",
          "normalized": "[a]-\u003eb[a]",
          "package": "random-shuffle",
          "signature": "[a]-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/random-shuffle/docs/System-Random-Shuffle.html#v:shuffleM"
      }
    }
  ]
]