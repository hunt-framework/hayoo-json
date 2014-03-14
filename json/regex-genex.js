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
        "word": "regex-genex"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Regex.Genex.Normalize",
          "name": "Normalize",
          "package": "regex-genex",
          "source": "src/Regex-Genex-Normalize.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Regex Genex Normalize",
          "module": "Regex.Genex.Normalize",
          "name": "Normalize",
          "package": "regex-genex",
          "partial": "Normalize",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regex-genex/docs/Regex-Genex-Normalize.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalize a regex into \u003ccode\u003estrong star normal form\u003c/code\u003e, as defined in the paper\n   \u003ccode\u003eSimplifying Regular Expressions: A Quantitative Perspective\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Regex.Genex.Normalize",
          "name": "normalize",
          "package": "regex-genex",
          "signature": "BackReferences -\u003e Pattern -\u003e Pattern",
          "source": "src/Regex-Genex-Normalize.html#normalize",
          "type": "function"
        },
        "index": {
          "description": "Normalize regex into strong star normal form as defined in the paper Simplifying Regular Expressions Quantitative Perspective",
          "hierarchy": "Regex Genex Normalize",
          "module": "Regex.Genex.Normalize",
          "name": "normalize",
          "normalized": "BackReferences-\u003ePattern-\u003ePattern",
          "package": "regex-genex",
          "signature": "BackReferences-\u003ePattern-\u003ePattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-genex/docs/Regex-Genex-Normalize.html#v:normalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module and the accompanying \u003ccode\u003e\u003ca\u003egenex\u003c/a\u003e\u003c/code\u003e program finds all permutations\nof strings that matches every input regular expressions, ordered from\nshortest to longest, with full support for back references ('\\1' .. '\\9')\nand word boundaries ('\\b').\n\u003c/p\u003e\u003cp\u003eIt requires the \u003ccode\u003eyices\u003c/code\u003e binary in PATH; please download it from:\n\u003ca\u003ehttp://yices.csl.sri.com/download-yices2.shtml\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Regex.Genex",
          "name": "Genex",
          "package": "regex-genex",
          "source": "src/Regex-Genex.html",
          "type": "module"
        },
        "index": {
          "description": "This module and the accompanying genex program finds all permutations of strings that matches every input regular expressions ordered from shortest to longest with full support for back references and word boundaries It requires the yices binary in PATH please download it from http yices.csl.sri.com download-yices2.shtml",
          "hierarchy": "Regex Genex",
          "module": "Regex.Genex",
          "name": "Genex",
          "package": "regex-genex",
          "partial": "Genex",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/regex-genex/docs/Regex-Genex.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA match consists of a string (list of codepoints), and a rank representing alternation order.\n\u003c/p\u003e",
          "module": "Regex.Genex",
          "name": "Model",
          "package": "regex-genex",
          "source": "src/Regex-Genex.html#Model",
          "type": "data"
        },
        "index": {
          "description": "match consists of string list of codepoints and rank representing alternation order",
          "hierarchy": "Regex Genex",
          "module": "Regex.Genex",
          "name": "Model",
          "package": "regex-genex",
          "partial": "Model",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/regex-genex/docs/Regex-Genex.html#t:Model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Regex.Genex",
          "name": "Model",
          "package": "regex-genex",
          "signature": "Model",
          "source": "src/Regex-Genex.html#Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Regex Genex",
          "module": "Regex.Genex",
          "name": "Model",
          "package": "regex-genex",
          "partial": "Model",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-genex/docs/Regex-Genex.html#v:Model"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of regular repressions, returns all possible strings that matches every one of them.\n Guarantees to return shorter strings before longer ones.\n\u003c/p\u003e",
          "module": "Regex.Genex",
          "name": "genex",
          "package": "regex-genex",
          "signature": "[String] -\u003e IO [String]",
          "source": "src/Regex-Genex.html#genex",
          "type": "function"
        },
        "index": {
          "description": "Given list of regular repressions returns all possible strings that matches every one of them Guarantees to return shorter strings before longer ones",
          "hierarchy": "Regex Genex",
          "module": "Regex.Genex",
          "name": "genex",
          "normalized": "[String]-\u003eIO[String]",
          "package": "regex-genex",
          "signature": "[String]-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-genex/docs/Regex-Genex.html#v:genex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003egenex\u003c/a\u003e\u003c/code\u003e, but with the entire model returned instead.\n\u003c/p\u003e",
          "module": "Regex.Genex",
          "name": "genexModels",
          "package": "regex-genex",
          "signature": "[String] -\u003e IO [Model]",
          "source": "src/Regex-Genex.html#genexModels",
          "type": "function"
        },
        "index": {
          "description": "Same as genex but with the entire model returned instead",
          "hierarchy": "Regex Genex",
          "module": "Regex.Genex",
          "name": "genexModels",
          "normalized": "[String]-\u003eIO[Model]",
          "package": "regex-genex",
          "partial": "Models",
          "signature": "[String]-\u003eIO[Model]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-genex/docs/Regex-Genex.html#v:genexModels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003egenexModels\u003c/a\u003e\u003c/code\u003e, but print the models to standard output instead.\n\u003c/p\u003e",
          "module": "Regex.Genex",
          "name": "genexPrint",
          "package": "regex-genex",
          "signature": "[String] -\u003e IO ()",
          "source": "src/Regex-Genex.html#genexPrint",
          "type": "function"
        },
        "index": {
          "description": "Same as genexModels but print the models to standard output instead",
          "hierarchy": "Regex Genex",
          "module": "Regex.Genex",
          "name": "genexPrint",
          "normalized": "[String]-\u003eIO()",
          "package": "regex-genex",
          "partial": "Print",
          "signature": "[String]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-genex/docs/Regex-Genex.html#v:genexPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pure and much faster variant of \u003ccode\u003e\u003ca\u003egenex\u003c/a\u003e\u003c/code\u003e, but without support for\n   back-references, anchors or word boundaries.\n Does not guarantee orders about length of strings.\n Does not depend on the external \u003ccode\u003eyices\u003c/code\u003e SMT solver.\n\u003c/p\u003e",
          "module": "Regex.Genex",
          "name": "genexPure",
          "package": "regex-genex",
          "signature": "[String] -\u003e [String]",
          "source": "src/Regex-Genex.html#genexPure",
          "type": "function"
        },
        "index": {
          "description": "pure and much faster variant of genex but without support for back-references anchors or word boundaries Does not guarantee orders about length of strings Does not depend on the external yices SMT solver",
          "hierarchy": "Regex Genex",
          "module": "Regex.Genex",
          "name": "genexPure",
          "normalized": "[String]-\u003e[String]",
          "package": "regex-genex",
          "partial": "Pure",
          "signature": "[String]-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-genex/docs/Regex-Genex.html#v:genexPure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Regex.Genex",
          "name": "genexWith",
          "package": "regex-genex",
          "signature": "([SatResult] -\u003e Hits -\u003e (Hits -\u003e IO a) -\u003e IO a) -\u003e [[Char]] -\u003e IO a",
          "source": "src/Regex-Genex.html#genexWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Regex Genex",
          "module": "Regex.Genex",
          "name": "genexWith",
          "normalized": "([SatResult]-\u003eHits-\u003e(Hits-\u003eIO a)-\u003eIO a)-\u003e[[Char]]-\u003eIO a",
          "package": "regex-genex",
          "partial": "With",
          "signature": "([SatResult]-\u003eHits-\u003e(Hits-\u003eIO a)-\u003eIO a)-\u003e[[Char]]-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-genex/docs/Regex-Genex.html#v:genexWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Regex.Genex",
          "name": "modelChars",
          "package": "regex-genex",
          "signature": "[Word8]",
          "source": "src/Regex-Genex.html#Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Regex Genex",
          "module": "Regex.Genex",
          "name": "modelChars",
          "normalized": "[Word]",
          "package": "regex-genex",
          "partial": "Chars",
          "signature": "[Word]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-genex/docs/Regex-Genex.html#v:modelChars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Regex.Genex",
          "name": "modelRank",
          "package": "regex-genex",
          "signature": "Word64",
          "source": "src/Regex-Genex.html#Model",
          "type": "function"
        },
        "index": {
          "hierarchy": "Regex Genex",
          "module": "Regex.Genex",
          "name": "modelRank",
          "package": "regex-genex",
          "partial": "Rank",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-genex/docs/Regex-Genex.html#v:modelRank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Regex.Genex",
          "name": "regexMatch",
          "package": "regex-genex",
          "signature": "[[Char]] -\u003e Str -\u003e Symbolic SBool",
          "source": "src/Regex-Genex.html#regexMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Regex Genex",
          "module": "Regex.Genex",
          "name": "regexMatch",
          "normalized": "[[Char]]-\u003eStr-\u003eSymbolic SBool",
          "package": "regex-genex",
          "partial": "Match",
          "signature": "[[Char]]-\u003eStr-\u003eSymbolic SBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/regex-genex/docs/Regex-Genex.html#v:regexMatch"
      }
    }
  ]
]