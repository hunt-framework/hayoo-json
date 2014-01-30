[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regex-genex/docs/Regex-Genex-Normalize.html#",
      "description": {
        "fct-module": "Regex.Genex.Normalize",
        "fct-package": "regex-genex",
        "fct-signature": "module",
        "fct-source": "src/Regex-Genex-Normalize.html",
        "fct-type": "module",
        "title": "Normalize"
      },
      "index": {
        "description": "",
        "hierarchy": "Regex Genex Normalize",
        "module": "Regex.Genex.Normalize",
        "name": "Normalize",
        "normalized": "",
        "package": "regex-genex",
        "partial": "Normalize",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regex-genex/docs/Regex-Genex-Normalize.html#v:normalize",
      "description": {
        "fct-descr": "\u003cp\u003eNormalize a regex into \u003ccode\u003estrong star normal form\u003c/code\u003e, as defined in the paper\n   \u003ccode\u003eSimplifying Regular Expressions: A Quantitative Perspective\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Regex.Genex.Normalize",
        "fct-package": "regex-genex",
        "fct-signature": "BackReferences -\u003e Pattern -\u003e Pattern",
        "fct-source": "src/Regex-Genex-Normalize.html#normalize",
        "fct-type": "function",
        "title": "normalize"
      },
      "index": {
        "description": "Normalize regex into strong star normal form as defined in the paper Simplifying Regular Expressions Quantitative Perspective",
        "hierarchy": "Regex Genex Normalize",
        "module": "Regex.Genex.Normalize",
        "name": "normalize",
        "normalized": "BackReferences-\u003ePattern-\u003ePattern",
        "package": "regex-genex",
        "partial": "",
        "signature": "BackReferences-\u003ePattern-\u003ePattern"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regex-genex/docs/Regex-Genex.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module and the accompanying \u003ccode\u003e\u003ca\u003egenex\u003c/a\u003e\u003c/code\u003e program finds all permutations\nof strings that matches every input regular expressions, ordered from\nshortest to longest, with full support for back references ('\\1' .. '\\9')\nand word boundaries ('\\b').\n\u003c/p\u003e\u003cp\u003eIt requires the \u003ccode\u003eyices\u003c/code\u003e binary in PATH; please download it from:\n\u003ca\u003ehttp://yices.csl.sri.com/download-yices2.shtml\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Regex.Genex",
        "fct-package": "regex-genex",
        "fct-signature": "module",
        "fct-source": "src/Regex-Genex.html",
        "fct-type": "module",
        "title": "Genex"
      },
      "index": {
        "description": "This module and the accompanying genex program finds all permutations of strings that matches every input regular expressions ordered from shortest to longest with full support for back references and word boundaries It requires the yices binary in PATH please download it from http yices.csl.sri.com download-yices2.shtml",
        "hierarchy": "Regex Genex",
        "module": "Regex.Genex",
        "name": "Genex",
        "normalized": "",
        "package": "regex-genex",
        "partial": "Genex",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regex-genex/docs/Regex-Genex.html#t:Model",
      "description": {
        "fct-descr": "\u003cp\u003eA match consists of a string (list of codepoints), and a rank representing alternation order.\n\u003c/p\u003e",
        "fct-module": "Regex.Genex",
        "fct-package": "regex-genex",
        "fct-signature": "data",
        "fct-source": "src/Regex-Genex.html#Model",
        "fct-type": "data",
        "title": "Model"
      },
      "index": {
        "description": "match consists of string list of codepoints and rank representing alternation order",
        "hierarchy": "Regex Genex",
        "module": "Regex.Genex",
        "name": "Model",
        "normalized": "",
        "package": "regex-genex",
        "partial": "Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regex-genex/docs/Regex-Genex.html#v:Model",
      "description": {
        "fct-module": "Regex.Genex",
        "fct-package": "regex-genex",
        "fct-signature": "Model",
        "fct-source": "src/Regex-Genex.html#Model",
        "fct-type": "function",
        "title": "Model"
      },
      "index": {
        "description": "",
        "hierarchy": "Regex Genex",
        "module": "Regex.Genex",
        "name": "Model",
        "normalized": "",
        "package": "regex-genex",
        "partial": "Model",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regex-genex/docs/Regex-Genex.html#v:genex",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list of regular repressions, returns all possible strings that matches every one of them.\n Guarantees to return shorter strings before longer ones.\n\u003c/p\u003e",
        "fct-module": "Regex.Genex",
        "fct-package": "regex-genex",
        "fct-signature": "[String] -\u003e IO [String]",
        "fct-source": "src/Regex-Genex.html#genex",
        "fct-type": "function",
        "title": "genex"
      },
      "index": {
        "description": "Given list of regular repressions returns all possible strings that matches every one of them Guarantees to return shorter strings before longer ones",
        "hierarchy": "Regex Genex",
        "module": "Regex.Genex",
        "name": "genex",
        "normalized": "[String]-\u003eIO[String]",
        "package": "regex-genex",
        "partial": "",
        "signature": "[String]-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regex-genex/docs/Regex-Genex.html#v:genexModels",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003egenex\u003c/a\u003e\u003c/code\u003e, but with the entire model returned instead.\n\u003c/p\u003e",
        "fct-module": "Regex.Genex",
        "fct-package": "regex-genex",
        "fct-signature": "[String] -\u003e IO [Model]",
        "fct-source": "src/Regex-Genex.html#genexModels",
        "fct-type": "function",
        "title": "genexModels"
      },
      "index": {
        "description": "Same as genex but with the entire model returned instead",
        "hierarchy": "Regex Genex",
        "module": "Regex.Genex",
        "name": "genexModels",
        "normalized": "[String]-\u003eIO[Model]",
        "package": "regex-genex",
        "partial": "Models",
        "signature": "[String]-\u003eIO[Model]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regex-genex/docs/Regex-Genex.html#v:genexPrint",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003egenexModels\u003c/a\u003e\u003c/code\u003e, but print the models to standard output instead.\n\u003c/p\u003e",
        "fct-module": "Regex.Genex",
        "fct-package": "regex-genex",
        "fct-signature": "[String] -\u003e IO ()",
        "fct-source": "src/Regex-Genex.html#genexPrint",
        "fct-type": "function",
        "title": "genexPrint"
      },
      "index": {
        "description": "Same as genexModels but print the models to standard output instead",
        "hierarchy": "Regex Genex",
        "module": "Regex.Genex",
        "name": "genexPrint",
        "normalized": "[String]-\u003eIO()",
        "package": "regex-genex",
        "partial": "Print",
        "signature": "[String]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regex-genex/docs/Regex-Genex.html#v:genexPure",
      "description": {
        "fct-descr": "\u003cp\u003eA pure and much faster variant of \u003ccode\u003e\u003ca\u003egenex\u003c/a\u003e\u003c/code\u003e, but without support for\n   back-references, anchors or word boundaries.\n Does not guarantee orders about length of strings.\n Does not depend on the external \u003ccode\u003eyices\u003c/code\u003e SMT solver.\n\u003c/p\u003e",
        "fct-module": "Regex.Genex",
        "fct-package": "regex-genex",
        "fct-signature": "[String] -\u003e [String]",
        "fct-source": "src/Regex-Genex.html#genexPure",
        "fct-type": "function",
        "title": "genexPure"
      },
      "index": {
        "description": "pure and much faster variant of genex but without support for back-references anchors or word boundaries Does not guarantee orders about length of strings Does not depend on the external yices SMT solver",
        "hierarchy": "Regex Genex",
        "module": "Regex.Genex",
        "name": "genexPure",
        "normalized": "[String]-\u003e[String]",
        "package": "regex-genex",
        "partial": "Pure",
        "signature": "[String]-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regex-genex/docs/Regex-Genex.html#v:genexWith",
      "description": {
        "fct-module": "Regex.Genex",
        "fct-package": "regex-genex",
        "fct-signature": "([SatResult] -\u003e Hits -\u003e (Hits -\u003e IO a) -\u003e IO a) -\u003e [[Char]] -\u003e IO a",
        "fct-source": "src/Regex-Genex.html#genexWith",
        "fct-type": "function",
        "title": "genexWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Regex Genex",
        "module": "Regex.Genex",
        "name": "genexWith",
        "normalized": "([SatResult]-\u003eHits-\u003e(Hits-\u003eIO a)-\u003eIO a)-\u003e[[Char]]-\u003eIO a",
        "package": "regex-genex",
        "partial": "With",
        "signature": "([SatResult]-\u003eHits-\u003e(Hits-\u003eIO a)-\u003eIO a)-\u003e[[Char]]-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regex-genex/docs/Regex-Genex.html#v:modelChars",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Regex.Genex",
        "fct-package": "regex-genex",
        "fct-signature": "[Word8]",
        "fct-source": "src/Regex-Genex.html#Model",
        "fct-type": "function",
        "title": "modelChars"
      },
      "index": {
        "description": "",
        "hierarchy": "Regex Genex",
        "module": "Regex.Genex",
        "name": "modelChars",
        "normalized": "[Word]",
        "package": "regex-genex",
        "partial": "Chars",
        "signature": "[Word]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regex-genex/docs/Regex-Genex.html#v:modelRank",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Regex.Genex",
        "fct-package": "regex-genex",
        "fct-signature": "Word64",
        "fct-source": "src/Regex-Genex.html#Model",
        "fct-type": "function",
        "title": "modelRank"
      },
      "index": {
        "description": "",
        "hierarchy": "Regex Genex",
        "module": "Regex.Genex",
        "name": "modelRank",
        "normalized": "",
        "package": "regex-genex",
        "partial": "Rank",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/regex-genex/docs/Regex-Genex.html#v:regexMatch",
      "description": {
        "fct-module": "Regex.Genex",
        "fct-package": "regex-genex",
        "fct-signature": "[[Char]] -\u003e Str -\u003e Symbolic SBool",
        "fct-source": "src/Regex-Genex.html#regexMatch",
        "fct-type": "function",
        "title": "regexMatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Regex Genex",
        "module": "Regex.Genex",
        "name": "regexMatch",
        "normalized": "[[Char]]-\u003eStr-\u003eSymbolic SBool",
        "package": "regex-genex",
        "partial": "Match",
        "signature": "[[Char]]-\u003eStr-\u003eSymbolic SBool"
      }
    }
  }
]