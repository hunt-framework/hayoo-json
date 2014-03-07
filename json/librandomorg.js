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
        "word": "librandomorg"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRandom.org API module\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Randomorg",
          "name": "Randomorg",
          "package": "librandomorg",
          "source": "src/Network-Randomorg.html",
          "type": "module"
        },
        "index": {
          "description": "Random.org API module",
          "hierarchy": "Network Randomorg",
          "module": "Network.Randomorg",
          "name": "Randomorg",
          "package": "librandomorg",
          "partial": "Randomorg",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/librandomorg/docs/Network-Randomorg.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecify the randomization method\n\u003c/p\u003e",
          "module": "Network.Randomorg",
          "name": "RNG",
          "package": "librandomorg",
          "source": "src/Network-Randomorg.html#RNG",
          "type": "data"
        },
        "index": {
          "description": "Specify the randomization method",
          "hierarchy": "Network Randomorg",
          "module": "Network.Randomorg",
          "name": "RNG",
          "package": "librandomorg",
          "partial": "RNG",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/librandomorg/docs/Network-Randomorg.html#t:RNG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine randomization based on one of the daily pregenerated files. The date must be in YYYY-MM-DD format or one of the two shorthand strings \u003ccode\u003etoday\u003c/code\u003e or \u003ccode\u003eyesterday\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Randomorg",
          "name": "Date",
          "package": "librandomorg",
          "signature": "Date String",
          "source": "src/Network-Randomorg.html#RNG",
          "type": "function"
        },
        "index": {
          "description": "Determine randomization based on one of the daily pregenerated files The date must be in YYYY-MM-DD format or one of the two shorthand strings today or yesterday",
          "hierarchy": "Network Randomorg",
          "module": "Network.Randomorg",
          "name": "Date",
          "package": "librandomorg",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/librandomorg/docs/Network-Randomorg.html#v:Date"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine randomization from a large pool of pregenerated bits\n\u003c/p\u003e",
          "module": "Network.Randomorg",
          "name": "Id",
          "package": "librandomorg",
          "signature": "Id String",
          "source": "src/Network-Randomorg.html#RNG",
          "type": "function"
        },
        "index": {
          "description": "Determine randomization from large pool of pregenerated bits",
          "hierarchy": "Network Randomorg",
          "module": "Network.Randomorg",
          "name": "Id",
          "package": "librandomorg",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/librandomorg/docs/Network-Randomorg.html#v:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTruly random bitstream\n\u003c/p\u003e",
          "module": "Network.Randomorg",
          "name": "New",
          "package": "librandomorg",
          "signature": "New",
          "source": "src/Network-Randomorg.html#RNG",
          "type": "function"
        },
        "index": {
          "description": "Truly random bitstream",
          "hierarchy": "Network Randomorg",
          "module": "Network.Randomorg",
          "name": "New",
          "package": "librandomorg",
          "partial": "New",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/librandomorg/docs/Network-Randomorg.html#v:New"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate random integers in configurable intervals\n\u003c/p\u003e",
          "module": "Network.Randomorg",
          "name": "integers",
          "package": "librandomorg",
          "signature": "Int-\u003e Int-\u003e Int-\u003e RNG-\u003e IO (Maybe [Int])",
          "type": "function"
        },
        "index": {
          "description": "Generate random integers in configurable intervals",
          "hierarchy": "Network Randomorg",
          "module": "Network.Randomorg",
          "name": "integers",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eRNG-\u003eIO(Maybe[Int])",
          "package": "librandomorg",
          "signature": "Int-\u003eInt-\u003eInt-\u003eRNG-\u003eIO(Maybe[Int])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/librandomorg/docs/Network-Randomorg.html#v:integers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExamine quota for given IP address\n\u003c/p\u003e",
          "module": "Network.Randomorg",
          "name": "quota",
          "package": "librandomorg",
          "signature": "Maybe (Word8, Word8, Word8, Word8)-\u003e IO (Maybe Integer)",
          "type": "function"
        },
        "index": {
          "description": "Examine quota for given IP address",
          "hierarchy": "Network Randomorg",
          "module": "Network.Randomorg",
          "name": "quota",
          "normalized": "Maybe(Word,Word,Word,Word)-\u003eIO(Maybe Integer)",
          "package": "librandomorg",
          "signature": "Maybe(Word,Word,Word,Word)-\u003eIO(Maybe Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/librandomorg/docs/Network-Randomorg.html#v:quota"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShuffle integers in given interval\n\u003c/p\u003e\u003cp\u003eNOTE: Maintains the invariant `max - min + 1 \u003c= 1e4'\n\u003c/p\u003e\u003cp\u003eNOTE: Doesn't maintain the invariant `max \u003e= min'\n\u003c/p\u003e",
          "module": "Network.Randomorg",
          "name": "shuffle",
          "package": "librandomorg",
          "signature": "Int-\u003e Int-\u003e RNG-\u003e IO (Maybe [Int])",
          "type": "function"
        },
        "index": {
          "description": "Shuffle integers in given interval NOTE Maintains the invariant max min e4 NOTE Doesn maintain the invariant max min",
          "hierarchy": "Network Randomorg",
          "module": "Network.Randomorg",
          "name": "shuffle",
          "normalized": "Int-\u003eInt-\u003eRNG-\u003eIO(Maybe[Int])",
          "package": "librandomorg",
          "signature": "Int-\u003eInt-\u003eRNG-\u003eIO(Maybe[Int])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/librandomorg/docs/Network-Randomorg.html#v:shuffle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate random strings of various length and composition\n\u003c/p\u003e",
          "module": "Network.Randomorg",
          "name": "strings",
          "package": "librandomorg",
          "signature": "Int-\u003e Int-\u003e Bool-\u003e Bool-\u003e Bool-\u003e Bool-\u003e RNG-\u003e IO [String]",
          "type": "function"
        },
        "index": {
          "description": "Generate random strings of various length and composition",
          "hierarchy": "Network Randomorg",
          "module": "Network.Randomorg",
          "name": "strings",
          "normalized": "Int-\u003eInt-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eRNG-\u003eIO[String]",
          "package": "librandomorg",
          "signature": "Int-\u003eInt-\u003eBool-\u003eBool-\u003eBool-\u003eBool-\u003eRNG-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/librandomorg/docs/Network-Randomorg.html#v:strings"
      }
    }
  ]
]