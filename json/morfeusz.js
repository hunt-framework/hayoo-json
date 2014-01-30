[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module provides the \u003ccode\u003e\u003ca\u003eanalyse\u003c/a\u003e\u003c/code\u003e wrapper function which uses the\n Morfeusz library for morphosyntactic analysis.  The result is represented\n as a directed acylic graph (DAG) with \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e labeled edges.\n The DAG representation is needed when the input word has multiple\n correct segmentations.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:m NLP.Morfeusz\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:set -XOverloadedStrings\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emapM_ print . analyse False $ \"mia&#322;em\"\n\u003c/code\u003e\u003c/strong\u003eEdge {from = 0, to = 1, label = Token {orth = \"mia\\322\", interps = [Interp {base = \"mie\\263\", msd = \"praet:sg:m1.m2.m3:imperf\"}]}}\nEdge {from = 0, to = 2, label = Token {orth = \"mia\\322em\", interps = [Interp {base = \"mia\\322\", msd = \"subst:sg:inst:m3\"}]}}\nEdge {from = 1, to = 2, label = Token {orth = \"em\", interps = [Interp {base = \"by\\263\", msd = \"aglt:sg:pri:imperf:wok\"}]}}\n\u003c/pre\u003e\u003cp\u003eYou can use the \u003ccode\u003e\u003ca\u003epaths\u003c/a\u003e\u003c/code\u003e function to extract all paths from the resultant\n DAG and, if you are not interested in all possible segmentations, just\n take the first of possible paths:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emapM_ print . paths . analyse False $ \"mia&#322;em\"\n\u003c/code\u003e\u003c/strong\u003e[Token {orth = \"mia\\322em\", interps = [Interp {base = \"mia\\322\", msd = \"subst:sg:inst:m3\"}]}]\n[Token {orth = \"mia\\322\", interps = [Interp {base = \"mie\\263\", msd = \"praet:sg:m1.m2.m3:imperf\"}]},Token {orth = \"em\", interps = [Interp {base = \"by\\263\", msd = \"aglt:sg:pri:imperf:wok\"}]}]\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emapM_ print . head . paths . analyse False $ \"mia&#322;em\"\n\u003c/code\u003e\u003c/strong\u003eToken {orth = \"mia\\322em\", interps = [Interp {base = \"mia\\322\", msd = \"subst:sg:inst:m3\"}]}\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "NLP.Morfeusz",
        "fct-package": "morfeusz",
        "fct-signature": "module",
        "fct-source": "src/NLP-Morfeusz.html",
        "fct-type": "module",
        "title": "Morfeusz"
      },
      "index": {
        "description": "The module provides the analyse wrapper function which uses the Morfeusz library for morphosyntactic analysis The result is represented as directed acylic graph DAG with Token labeled edges The DAG representation is needed when the input word has multiple correct segmentations NLP.Morfeusz set XOverloadedStrings mapM print analyse False mia em Edge from to label Token orth mia interps Interp base mie msd praet sg m1.m2.m3 imperf Edge from to label Token orth mia em interps Interp base mia msd subst sg inst m3 Edge from to label Token orth em interps Interp base by msd aglt sg pri imperf wok You can use the paths function to extract all paths from the resultant DAG and if you are not interested in all possible segmentations just take the first of possible paths mapM print paths analyse False mia em Token orth mia em interps Interp base mia msd subst sg inst m3 Token orth mia interps Interp base mie msd praet sg m1.m2.m3 imperf Token orth em interps Interp base by msd aglt sg pri imperf wok mapM print head paths analyse False mia em Token orth mia em interps Interp base mia msd subst sg inst m3",
        "hierarchy": "NLP Morfeusz",
        "module": "NLP.Morfeusz",
        "name": "Morfeusz",
        "normalized": "",
        "package": "morfeusz",
        "partial": "Morfeusz",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#t:DAG",
      "description": {
        "fct-descr": "\u003cp\u003eA DAG with annotated edges. \n\u003c/p\u003e",
        "fct-module": "NLP.Morfeusz",
        "fct-package": "morfeusz",
        "fct-signature": "type",
        "fct-source": "src/NLP-Morfeusz.html#DAG",
        "fct-type": "type",
        "title": "DAG"
      },
      "index": {
        "description": "DAG with annotated edges",
        "hierarchy": "NLP Morfeusz",
        "module": "NLP.Morfeusz",
        "name": "DAG",
        "normalized": "",
        "package": "morfeusz",
        "partial": "DAG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#t:Edge",
      "description": {
        "fct-descr": "\u003cp\u003eA directed edge with label of type \u003ccode\u003ea\u003c/code\u003e between nodes of type \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "NLP.Morfeusz",
        "fct-package": "morfeusz",
        "fct-signature": "data",
        "fct-source": "src/NLP-Morfeusz.html#Edge",
        "fct-type": "data",
        "title": "Edge"
      },
      "index": {
        "description": "directed edge with label of type between nodes of type Int",
        "hierarchy": "NLP Morfeusz",
        "module": "NLP.Morfeusz",
        "name": "Edge",
        "normalized": "",
        "package": "morfeusz",
        "partial": "Edge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#t:Interp",
      "description": {
        "fct-descr": "\u003cp\u003eAn interpretation of the word.\n\u003c/p\u003e",
        "fct-module": "NLP.Morfeusz",
        "fct-package": "morfeusz",
        "fct-signature": "data",
        "fct-source": "src/NLP-Morfeusz.html#Interp",
        "fct-type": "data",
        "title": "Interp"
      },
      "index": {
        "description": "An interpretation of the word",
        "hierarchy": "NLP Morfeusz",
        "module": "NLP.Morfeusz",
        "name": "Interp",
        "normalized": "",
        "package": "morfeusz",
        "partial": "Interp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#t:KeepSpaces",
      "description": {
        "fct-descr": "\u003cp\u003eKeep spaces in the analysis output.\n\u003c/p\u003e",
        "fct-module": "NLP.Morfeusz",
        "fct-package": "morfeusz",
        "fct-signature": "type",
        "fct-source": "src/NLP-Morfeusz.html#KeepSpaces",
        "fct-type": "type",
        "title": "KeepSpaces"
      },
      "index": {
        "description": "Keep spaces in the analysis output",
        "hierarchy": "NLP Morfeusz",
        "module": "NLP.Morfeusz",
        "name": "KeepSpaces",
        "normalized": "",
        "package": "morfeusz",
        "partial": "Keep Spaces",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#t:Token",
      "description": {
        "fct-descr": "\u003cp\u003eA token with a list of recognized interpretations.  If the list of\n interpretations is empty, the token is unknown to the Morfeusz.\n\u003c/p\u003e",
        "fct-module": "NLP.Morfeusz",
        "fct-package": "morfeusz",
        "fct-signature": "data",
        "fct-source": "src/NLP-Morfeusz.html#Token",
        "fct-type": "data",
        "title": "Token"
      },
      "index": {
        "description": "token with list of recognized interpretations If the list of interpretations is empty the token is unknown to the Morfeusz",
        "hierarchy": "NLP Morfeusz",
        "module": "NLP.Morfeusz",
        "name": "Token",
        "normalized": "",
        "package": "morfeusz",
        "partial": "Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#v:Edge",
      "description": {
        "fct-module": "NLP.Morfeusz",
        "fct-package": "morfeusz",
        "fct-signature": "Edge",
        "fct-source": "src/NLP-Morfeusz.html#Edge",
        "fct-type": "function",
        "title": "Edge"
      },
      "index": {
        "description": "",
        "hierarchy": "NLP Morfeusz",
        "module": "NLP.Morfeusz",
        "name": "Edge",
        "normalized": "",
        "package": "morfeusz",
        "partial": "Edge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#v:Interp",
      "description": {
        "fct-module": "NLP.Morfeusz",
        "fct-package": "morfeusz",
        "fct-signature": "Interp",
        "fct-source": "src/NLP-Morfeusz.html#Interp",
        "fct-type": "function",
        "title": "Interp"
      },
      "index": {
        "description": "",
        "hierarchy": "NLP Morfeusz",
        "module": "NLP.Morfeusz",
        "name": "Interp",
        "normalized": "",
        "package": "morfeusz",
        "partial": "Interp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#v:Token",
      "description": {
        "fct-module": "NLP.Morfeusz",
        "fct-package": "morfeusz",
        "fct-signature": "Token",
        "fct-source": "src/NLP-Morfeusz.html#Token",
        "fct-type": "function",
        "title": "Token"
      },
      "index": {
        "description": "",
        "hierarchy": "NLP Morfeusz",
        "module": "NLP.Morfeusz",
        "name": "Token",
        "normalized": "",
        "package": "morfeusz",
        "partial": "Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#v:analyse",
      "description": {
        "fct-descr": "\u003cp\u003eAnalyse the input sentence and return the result as a DAG of tokens.\n\u003c/p\u003e",
        "fct-module": "NLP.Morfeusz",
        "fct-package": "morfeusz",
        "fct-signature": "KeepSpaces -\u003e Text -\u003e DAG Token",
        "fct-source": "src/NLP-Morfeusz.html#analyse",
        "fct-type": "function",
        "title": "analyse"
      },
      "index": {
        "description": "Analyse the input sentence and return the result as DAG of tokens",
        "hierarchy": "NLP Morfeusz",
        "module": "NLP.Morfeusz",
        "name": "analyse",
        "normalized": "KeepSpaces-\u003eText-\u003eDAG Token",
        "package": "morfeusz",
        "partial": "",
        "signature": "KeepSpaces-\u003eText-\u003eDAG Token"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#v:base",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "NLP.Morfeusz",
        "fct-package": "morfeusz",
        "fct-signature": "Text",
        "fct-source": "src/NLP-Morfeusz.html#Interp",
        "fct-type": "function",
        "title": "base"
      },
      "index": {
        "description": "",
        "hierarchy": "NLP Morfeusz",
        "module": "NLP.Morfeusz",
        "name": "base",
        "normalized": "",
        "package": "morfeusz",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#v:from",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "NLP.Morfeusz",
        "fct-package": "morfeusz",
        "fct-signature": "Int",
        "fct-source": "src/NLP-Morfeusz.html#Edge",
        "fct-type": "function",
        "title": "from"
      },
      "index": {
        "description": "",
        "hierarchy": "NLP Morfeusz",
        "module": "NLP.Morfeusz",
        "name": "from",
        "normalized": "",
        "package": "morfeusz",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#v:interps",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "NLP.Morfeusz",
        "fct-package": "morfeusz",
        "fct-signature": "[Interp]",
        "fct-source": "src/NLP-Morfeusz.html#Token",
        "fct-type": "function",
        "title": "interps"
      },
      "index": {
        "description": "",
        "hierarchy": "NLP Morfeusz",
        "module": "NLP.Morfeusz",
        "name": "interps",
        "normalized": "[Interp]",
        "package": "morfeusz",
        "partial": "",
        "signature": "[Interp]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#v:label",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "NLP.Morfeusz",
        "fct-package": "morfeusz",
        "fct-signature": "a",
        "fct-source": "src/NLP-Morfeusz.html#Edge",
        "fct-type": "function",
        "title": "label"
      },
      "index": {
        "description": "",
        "hierarchy": "NLP Morfeusz",
        "module": "NLP.Morfeusz",
        "name": "label",
        "normalized": "",
        "package": "morfeusz",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#v:msd",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "NLP.Morfeusz",
        "fct-package": "morfeusz",
        "fct-signature": "Text",
        "fct-source": "src/NLP-Morfeusz.html#Interp",
        "fct-type": "function",
        "title": "msd"
      },
      "index": {
        "description": "",
        "hierarchy": "NLP Morfeusz",
        "module": "NLP.Morfeusz",
        "name": "msd",
        "normalized": "",
        "package": "morfeusz",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#v:orth",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "NLP.Morfeusz",
        "fct-package": "morfeusz",
        "fct-signature": "Text",
        "fct-source": "src/NLP-Morfeusz.html#Token",
        "fct-type": "function",
        "title": "orth"
      },
      "index": {
        "description": "",
        "hierarchy": "NLP Morfeusz",
        "module": "NLP.Morfeusz",
        "name": "orth",
        "normalized": "",
        "package": "morfeusz",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#v:paths",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve all paths from DAG root to leaves.\n\u003c/p\u003e",
        "fct-module": "NLP.Morfeusz",
        "fct-package": "morfeusz",
        "fct-signature": "DAG a -\u003e [[a]]",
        "fct-source": "src/NLP-Morfeusz.html#paths",
        "fct-type": "function",
        "title": "paths"
      },
      "index": {
        "description": "Retrieve all paths from DAG root to leaves",
        "hierarchy": "NLP Morfeusz",
        "module": "NLP.Morfeusz",
        "name": "paths",
        "normalized": "DAG a-\u003e[[a]]",
        "package": "morfeusz",
        "partial": "",
        "signature": "DAG a-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#v:to",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "NLP.Morfeusz",
        "fct-package": "morfeusz",
        "fct-signature": "Int",
        "fct-source": "src/NLP-Morfeusz.html#Edge",
        "fct-type": "function",
        "title": "to"
      },
      "index": {
        "description": "",
        "hierarchy": "NLP Morfeusz",
        "module": "NLP.Morfeusz",
        "name": "to",
        "normalized": "",
        "package": "morfeusz",
        "partial": "",
        "signature": ""
      }
    }
  }
]