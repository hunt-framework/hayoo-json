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
        "word": "hmark"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Generators.Markov",
          "name": "Markov",
          "package": "hmark",
          "source": "src/Text-Generators-Markov.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Generators Markov",
          "module": "Text.Generators.Markov",
          "name": "Markov",
          "package": "hmark",
          "partial": "Markov",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hmark/docs/Text-Generators-Markov.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatabases set\n\u003c/p\u003e",
          "module": "Text.Generators.Markov",
          "name": "DBS",
          "package": "hmark",
          "source": "src/Text-Generators-Markov.html#DBS",
          "type": "type"
        },
        "index": {
          "description": "Databases set",
          "hierarchy": "Text Generators Markov",
          "module": "Text.Generators.Markov",
          "name": "DBS",
          "package": "hmark",
          "partial": "DBS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hmark/docs/Text-Generators-Markov.html#t:DBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to build a phrase using given two words and databases\n\u003c/p\u003e",
          "module": "Text.Generators.Markov",
          "name": "build",
          "package": "hmark",
          "signature": "DBS-\u003e (String, String)-\u003e IO [String]",
          "type": "function"
        },
        "index": {
          "description": "Attempts to build phrase using given two words and databases",
          "hierarchy": "Text Generators Markov",
          "module": "Text.Generators.Markov",
          "name": "build",
          "normalized": "DBS-\u003e(String,String)-\u003eIO[String]",
          "package": "hmark",
          "signature": "DBS-\u003e(String,String)-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmark/docs/Text-Generators-Markov.html#v:build"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads newline-separated lines from STDIN and replies to STDOUT\n\u003c/p\u003e",
          "module": "Text.Generators.Markov",
          "name": "burstFromStdin",
          "package": "hmark",
          "signature": "DBS -\u003e IO ()",
          "source": "src/Text-Generators-Markov.html#burstFromStdin",
          "type": "function"
        },
        "index": {
          "description": "Reads newline-separated lines from STDIN and replies to STDOUT",
          "hierarchy": "Text Generators Markov",
          "module": "Text.Generators.Markov",
          "name": "burstFromStdin",
          "normalized": "DBS-\u003eIO()",
          "package": "hmark",
          "partial": "From Stdin",
          "signature": "DBS-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmark/docs/Text-Generators-Markov.html#v:burstFromStdin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloses databases\n\u003c/p\u003e",
          "module": "Text.Generators.Markov",
          "name": "closeDBs",
          "package": "hmark",
          "signature": "DBS -\u003e IO ()",
          "source": "src/Text-Generators-Markov.html#closeDBs",
          "type": "function"
        },
        "index": {
          "description": "Closes databases",
          "hierarchy": "Text Generators Markov",
          "module": "Text.Generators.Markov",
          "name": "closeDBs",
          "normalized": "DBS-\u003eIO()",
          "package": "hmark",
          "partial": "DBs",
          "signature": "DBS-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmark/docs/Text-Generators-Markov.html#v:closeDBs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpens databases with given basename\n\u003c/p\u003e",
          "module": "Text.Generators.Markov",
          "name": "openDBs",
          "package": "hmark",
          "signature": "String -\u003e IO DBS",
          "source": "src/Text-Generators-Markov.html#openDBs",
          "type": "function"
        },
        "index": {
          "description": "Opens databases with given basename",
          "hierarchy": "Text Generators Markov",
          "module": "Text.Generators.Markov",
          "name": "openDBs",
          "normalized": "String-\u003eIO DBS",
          "package": "hmark",
          "partial": "DBs",
          "signature": "String-\u003eIO DBS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmark/docs/Text-Generators-Markov.html#v:openDBs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to build a phrase based on given one\n\u003c/p\u003e",
          "module": "Text.Generators.Markov",
          "name": "riff",
          "package": "hmark",
          "signature": "DBS-\u003e [String]-\u003e IO (Maybe [String])",
          "type": "function"
        },
        "index": {
          "description": "Attempts to build phrase based on given one",
          "hierarchy": "Text Generators Markov",
          "module": "Text.Generators.Markov",
          "name": "riff",
          "normalized": "DBS-\u003e[String]-\u003eIO(Maybe[String])",
          "package": "hmark",
          "signature": "DBS-\u003e[String]-\u003eIO(Maybe[String])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmark/docs/Text-Generators-Markov.html#v:riff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads newline-separated phrases from STDIN and learns from them\n\u003c/p\u003e",
          "module": "Text.Generators.Markov",
          "name": "trainFromStdin",
          "package": "hmark",
          "signature": "DBS -\u003e IO ()",
          "source": "src/Text-Generators-Markov.html#trainFromStdin",
          "type": "function"
        },
        "index": {
          "description": "Reads newline-separated phrases from STDIN and learns from them",
          "hierarchy": "Text Generators Markov",
          "module": "Text.Generators.Markov",
          "name": "trainFromStdin",
          "normalized": "DBS-\u003eIO()",
          "package": "hmark",
          "partial": "From Stdin",
          "signature": "DBS-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hmark/docs/Text-Generators-Markov.html#v:trainFromStdin"
      }
    }
  ]
]