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
        "word": "hist-pl-lmf"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module provides parsing utilities for the LMF dictionary.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "NLP.HistPL.LMF.Parse",
          "name": "Parse",
          "package": "hist-pl-lmf",
          "source": "src/NLP-HistPL-LMF-Parse.html",
          "type": "module"
        },
        "index": {
          "description": "The module provides parsing utilities for the LMF dictionary",
          "hierarchy": "NLP HistPL LMF Parse",
          "module": "NLP.HistPL.LMF.Parse",
          "name": "Parse",
          "package": "hist-pl-lmf",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-lmf/docs/NLP-HistPL-LMF-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the entire dictionary in the LMF format.\n\u003c/p\u003e",
          "module": "NLP.HistPL.LMF.Parse",
          "name": "parseLMF",
          "package": "hist-pl-lmf",
          "signature": "Text -\u003e [LexEntry]",
          "source": "src/NLP-HistPL-LMF-Parse.html#parseLMF",
          "type": "function"
        },
        "index": {
          "description": "Parse the entire dictionary in the LMF format",
          "hierarchy": "NLP HistPL LMF Parse",
          "module": "NLP.HistPL.LMF.Parse",
          "name": "parseLMF",
          "normalized": "Text-\u003e[LexEntry]",
          "package": "hist-pl-lmf",
          "partial": "LMF",
          "signature": "Text-\u003e[LexEntry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-lmf/docs/NLP-HistPL-LMF-Parse.html#v:parseLMF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the lexical entry LMF representation\n\u003c/p\u003e",
          "module": "NLP.HistPL.LMF.Parse",
          "name": "parseLexEntry",
          "package": "hist-pl-lmf",
          "signature": "Text -\u003e LexEntry",
          "source": "src/NLP-HistPL-LMF-Parse.html#parseLexEntry",
          "type": "function"
        },
        "index": {
          "description": "Parse the lexical entry LMF representation",
          "hierarchy": "NLP HistPL LMF Parse",
          "module": "NLP.HistPL.LMF.Parse",
          "name": "parseLexEntry",
          "normalized": "Text-\u003eLexEntry",
          "package": "hist-pl-lmf",
          "partial": "Lex Entry",
          "signature": "Text-\u003eLexEntry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-lmf/docs/NLP-HistPL-LMF-Parse.html#v:parseLexEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the dictionary from the LMF file.\n\u003c/p\u003e",
          "module": "NLP.HistPL.LMF.Parse",
          "name": "readLMF",
          "package": "hist-pl-lmf",
          "signature": "FilePath -\u003e IO [LexEntry]",
          "source": "src/NLP-HistPL-LMF-Parse.html#readLMF",
          "type": "function"
        },
        "index": {
          "description": "Read the dictionary from the LMF file",
          "hierarchy": "NLP HistPL LMF Parse",
          "module": "NLP.HistPL.LMF.Parse",
          "name": "readLMF",
          "normalized": "FilePath-\u003eIO[LexEntry]",
          "package": "hist-pl-lmf",
          "partial": "LMF",
          "signature": "FilePath-\u003eIO[LexEntry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-lmf/docs/NLP-HistPL-LMF-Parse.html#v:readLMF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrinting utilities for the LMF dictionary format.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "NLP.HistPL.LMF.Show",
          "name": "Show",
          "package": "hist-pl-lmf",
          "source": "src/NLP-HistPL-LMF-Show.html",
          "type": "module"
        },
        "index": {
          "description": "Printing utilities for the LMF dictionary format",
          "hierarchy": "NLP HistPL LMF Show",
          "module": "NLP.HistPL.LMF.Show",
          "name": "Show",
          "package": "hist-pl-lmf",
          "partial": "Show",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-lmf/docs/NLP-HistPL-LMF-Show.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow the entire dictionary as a lazy text in the LMF format.\n\u003c/p\u003e",
          "module": "NLP.HistPL.LMF.Show",
          "name": "showLMF",
          "package": "hist-pl-lmf",
          "signature": "[LexEntry] -\u003e Text",
          "source": "src/NLP-HistPL-LMF-Show.html#showLMF",
          "type": "function"
        },
        "index": {
          "description": "Show the entire dictionary as lazy text in the LMF format",
          "hierarchy": "NLP HistPL LMF Show",
          "module": "NLP.HistPL.LMF.Show",
          "name": "showLMF",
          "normalized": "[LexEntry]-\u003eText",
          "package": "hist-pl-lmf",
          "partial": "LMF",
          "signature": "[LexEntry]-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-lmf/docs/NLP-HistPL-LMF-Show.html#v:showLMF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow lexical entry using the LMF format.\n\u003c/p\u003e",
          "module": "NLP.HistPL.LMF.Show",
          "name": "showLexEntry",
          "package": "hist-pl-lmf",
          "signature": "LexEntry -\u003e Text",
          "source": "src/NLP-HistPL-LMF-Show.html#showLexEntry",
          "type": "function"
        },
        "index": {
          "description": "Show lexical entry using the LMF format",
          "hierarchy": "NLP HistPL LMF Show",
          "module": "NLP.HistPL.LMF.Show",
          "name": "showLexEntry",
          "normalized": "LexEntry-\u003eText",
          "package": "hist-pl-lmf",
          "partial": "Lex Entry",
          "signature": "LexEntry-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-lmf/docs/NLP-HistPL-LMF-Show.html#v:showLexEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRe-export modules from the LMF hierarchy.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "NLP.HistPL.LMF",
          "name": "LMF",
          "package": "hist-pl-lmf",
          "source": "src/NLP-HistPL-LMF.html",
          "type": "module"
        },
        "index": {
          "description": "Re-export modules from the LMF hierarchy",
          "hierarchy": "NLP HistPL LMF",
          "module": "NLP.HistPL.LMF",
          "name": "LMF",
          "package": "hist-pl-lmf",
          "partial": "LMF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hist-pl-lmf/docs/NLP-HistPL-LMF.html#"
      }
    }
  ]
]