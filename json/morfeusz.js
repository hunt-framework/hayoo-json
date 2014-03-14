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
        "word": "morfeusz"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module provides the \u003ccode\u003e\u003ca\u003eanalyse\u003c/a\u003e\u003c/code\u003e wrapper function which uses the\n Morfeusz library for morphosyntactic analysis.  The result is represented\n as a directed acylic graph (DAG) with \u003ccode\u003e\u003ca\u003eToken\u003c/a\u003e\u003c/code\u003e labeled edges.\n The DAG representation is needed when the input word has multiple\n correct segmentations.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:m NLP.Morfeusz\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:set -XOverloadedStrings\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emapM_ print . analyse False $ \"mia&#322;em\"\n\u003c/code\u003e\u003c/strong\u003eEdge {from = 0, to = 1, label = Token {orth = \"mia\\322\", interps = [Interp {base = \"mie\\263\", msd = \"praet:sg:m1.m2.m3:imperf\"}]}}\nEdge {from = 0, to = 2, label = Token {orth = \"mia\\322em\", interps = [Interp {base = \"mia\\322\", msd = \"subst:sg:inst:m3\"}]}}\nEdge {from = 1, to = 2, label = Token {orth = \"em\", interps = [Interp {base = \"by\\263\", msd = \"aglt:sg:pri:imperf:wok\"}]}}\n\u003c/pre\u003e\u003cp\u003eYou can use the \u003ccode\u003e\u003ca\u003epaths\u003c/a\u003e\u003c/code\u003e function to extract all paths from the resultant\n DAG and, if you are not interested in all possible segmentations, just\n take the first of possible paths:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emapM_ print . paths . analyse False $ \"mia&#322;em\"\n\u003c/code\u003e\u003c/strong\u003e[Token {orth = \"mia\\322em\", interps = [Interp {base = \"mia\\322\", msd = \"subst:sg:inst:m3\"}]}]\n[Token {orth = \"mia\\322\", interps = [Interp {base = \"mie\\263\", msd = \"praet:sg:m1.m2.m3:imperf\"}]},Token {orth = \"em\", interps = [Interp {base = \"by\\263\", msd = \"aglt:sg:pri:imperf:wok\"}]}]\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emapM_ print . head . paths . analyse False $ \"mia&#322;em\"\n\u003c/code\u003e\u003c/strong\u003eToken {orth = \"mia\\322em\", interps = [Interp {base = \"mia\\322\", msd = \"subst:sg:inst:m3\"}]}\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "NLP.Morfeusz",
          "name": "Morfeusz",
          "package": "morfeusz",
          "source": "src/NLP-Morfeusz.html",
          "type": "module"
        },
        "index": {
          "description": "The module provides the analyse wrapper function which uses the Morfeusz library for morphosyntactic analysis The result is represented as directed acylic graph DAG with Token labeled edges The DAG representation is needed when the input word has multiple correct segmentations NLP.Morfeusz set XOverloadedStrings mapM print analyse False mia em Edge from to label Token orth mia interps Interp base mie msd praet sg m1.m2.m3 imperf Edge from to label Token orth mia em interps Interp base mia msd subst sg inst m3 Edge from to label Token orth em interps Interp base by msd aglt sg pri imperf wok You can use the paths function to extract all paths from the resultant DAG and if you are not interested in all possible segmentations just take the first of possible paths mapM print paths analyse False mia em Token orth mia em interps Interp base mia msd subst sg inst m3 Token orth mia interps Interp base mie msd praet sg m1.m2.m3 imperf Token orth em interps Interp base by msd aglt sg pri imperf wok mapM print head paths analyse False mia em Token orth mia em interps Interp base mia msd subst sg inst m3",
          "hierarchy": "NLP Morfeusz",
          "module": "NLP.Morfeusz",
          "name": "Morfeusz",
          "package": "morfeusz",
          "partial": "Morfeusz",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA DAG with annotated edges. \n\u003c/p\u003e",
          "module": "NLP.Morfeusz",
          "name": "DAG",
          "package": "morfeusz",
          "source": "src/NLP-Morfeusz.html#DAG",
          "type": "type"
        },
        "index": {
          "description": "DAG with annotated edges",
          "hierarchy": "NLP Morfeusz",
          "module": "NLP.Morfeusz",
          "name": "DAG",
          "package": "morfeusz",
          "partial": "DAG",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#t:DAG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA directed edge with label of type \u003ccode\u003ea\u003c/code\u003e between nodes of type \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "NLP.Morfeusz",
          "name": "Edge",
          "package": "morfeusz",
          "source": "src/NLP-Morfeusz.html#Edge",
          "type": "data"
        },
        "index": {
          "description": "directed edge with label of type between nodes of type Int",
          "hierarchy": "NLP Morfeusz",
          "module": "NLP.Morfeusz",
          "name": "Edge",
          "package": "morfeusz",
          "partial": "Edge",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#t:Edge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn interpretation of the word.\n\u003c/p\u003e",
          "module": "NLP.Morfeusz",
          "name": "Interp",
          "package": "morfeusz",
          "source": "src/NLP-Morfeusz.html#Interp",
          "type": "data"
        },
        "index": {
          "description": "An interpretation of the word",
          "hierarchy": "NLP Morfeusz",
          "module": "NLP.Morfeusz",
          "name": "Interp",
          "package": "morfeusz",
          "partial": "Interp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#t:Interp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeep spaces in the analysis output.\n\u003c/p\u003e",
          "module": "NLP.Morfeusz",
          "name": "KeepSpaces",
          "package": "morfeusz",
          "source": "src/NLP-Morfeusz.html#KeepSpaces",
          "type": "type"
        },
        "index": {
          "description": "Keep spaces in the analysis output",
          "hierarchy": "NLP Morfeusz",
          "module": "NLP.Morfeusz",
          "name": "KeepSpaces",
          "package": "morfeusz",
          "partial": "Keep Spaces",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#t:KeepSpaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA token with a list of recognized interpretations.  If the list of\n interpretations is empty, the token is unknown to the Morfeusz.\n\u003c/p\u003e",
          "module": "NLP.Morfeusz",
          "name": "Token",
          "package": "morfeusz",
          "source": "src/NLP-Morfeusz.html#Token",
          "type": "data"
        },
        "index": {
          "description": "token with list of recognized interpretations If the list of interpretations is empty the token is unknown to the Morfeusz",
          "hierarchy": "NLP Morfeusz",
          "module": "NLP.Morfeusz",
          "name": "Token",
          "package": "morfeusz",
          "partial": "Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Morfeusz",
          "name": "Edge",
          "package": "morfeusz",
          "signature": "Edge",
          "source": "src/NLP-Morfeusz.html#Edge",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Morfeusz",
          "module": "NLP.Morfeusz",
          "name": "Edge",
          "package": "morfeusz",
          "partial": "Edge",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#v:Edge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Morfeusz",
          "name": "Interp",
          "package": "morfeusz",
          "signature": "Interp",
          "source": "src/NLP-Morfeusz.html#Interp",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Morfeusz",
          "module": "NLP.Morfeusz",
          "name": "Interp",
          "package": "morfeusz",
          "partial": "Interp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#v:Interp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Morfeusz",
          "name": "Token",
          "package": "morfeusz",
          "signature": "Token",
          "source": "src/NLP-Morfeusz.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Morfeusz",
          "module": "NLP.Morfeusz",
          "name": "Token",
          "package": "morfeusz",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#v:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnalyse the input sentence and return the result as a DAG of tokens.\n\u003c/p\u003e",
          "module": "NLP.Morfeusz",
          "name": "analyse",
          "package": "morfeusz",
          "signature": "KeepSpaces -\u003e Text -\u003e DAG Token",
          "source": "src/NLP-Morfeusz.html#analyse",
          "type": "function"
        },
        "index": {
          "description": "Analyse the input sentence and return the result as DAG of tokens",
          "hierarchy": "NLP Morfeusz",
          "module": "NLP.Morfeusz",
          "name": "analyse",
          "normalized": "KeepSpaces-\u003eText-\u003eDAG Token",
          "package": "morfeusz",
          "signature": "KeepSpaces-\u003eText-\u003eDAG Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#v:analyse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Morfeusz",
          "name": "base",
          "package": "morfeusz",
          "signature": "Text",
          "source": "src/NLP-Morfeusz.html#Interp",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Morfeusz",
          "module": "NLP.Morfeusz",
          "name": "base",
          "package": "morfeusz",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#v:base"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Morfeusz",
          "name": "from",
          "package": "morfeusz",
          "signature": "Int",
          "source": "src/NLP-Morfeusz.html#Edge",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Morfeusz",
          "module": "NLP.Morfeusz",
          "name": "from",
          "package": "morfeusz",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#v:from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Morfeusz",
          "name": "interps",
          "package": "morfeusz",
          "signature": "[Interp]",
          "source": "src/NLP-Morfeusz.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Morfeusz",
          "module": "NLP.Morfeusz",
          "name": "interps",
          "normalized": "[Interp]",
          "package": "morfeusz",
          "signature": "[Interp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#v:interps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Morfeusz",
          "name": "label",
          "package": "morfeusz",
          "signature": "a",
          "source": "src/NLP-Morfeusz.html#Edge",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Morfeusz",
          "module": "NLP.Morfeusz",
          "name": "label",
          "package": "morfeusz",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Morfeusz",
          "name": "msd",
          "package": "morfeusz",
          "signature": "Text",
          "source": "src/NLP-Morfeusz.html#Interp",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Morfeusz",
          "module": "NLP.Morfeusz",
          "name": "msd",
          "package": "morfeusz",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#v:msd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Morfeusz",
          "name": "orth",
          "package": "morfeusz",
          "signature": "Text",
          "source": "src/NLP-Morfeusz.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Morfeusz",
          "module": "NLP.Morfeusz",
          "name": "orth",
          "package": "morfeusz",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#v:orth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve all paths from DAG root to leaves.\n\u003c/p\u003e",
          "module": "NLP.Morfeusz",
          "name": "paths",
          "package": "morfeusz",
          "signature": "DAG a -\u003e [[a]]",
          "source": "src/NLP-Morfeusz.html#paths",
          "type": "function"
        },
        "index": {
          "description": "Retrieve all paths from DAG root to leaves",
          "hierarchy": "NLP Morfeusz",
          "module": "NLP.Morfeusz",
          "name": "paths",
          "normalized": "DAG a-\u003e[[a]]",
          "package": "morfeusz",
          "signature": "DAG a-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#v:paths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Morfeusz",
          "name": "to",
          "package": "morfeusz",
          "signature": "Int",
          "source": "src/NLP-Morfeusz.html#Edge",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Morfeusz",
          "module": "NLP.Morfeusz",
          "name": "to",
          "package": "morfeusz",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/morfeusz/docs/NLP-Morfeusz.html#v:to"
      }
    }
  ]
]