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
        "word": "nerf"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompare two NE-annotated datasets.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "NLP.Nerf.Compare",
          "name": "Compare",
          "package": "nerf",
          "source": "src/NLP-Nerf-Compare.html",
          "type": "module"
        },
        "index": {
          "description": "Compare two NE-annotated datasets",
          "hierarchy": "NLP Nerf Compare",
          "module": "NLP.Nerf.Compare",
          "name": "Compare",
          "package": "nerf",
          "partial": "Compare",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Compare.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatistics.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Compare",
          "name": "Stats",
          "package": "nerf",
          "source": "src/NLP-Nerf-Compare.html#Stats",
          "type": "data"
        },
        "index": {
          "description": "Statistics",
          "hierarchy": "NLP Nerf Compare",
          "module": "NLP.Nerf.Compare",
          "name": "Stats",
          "package": "nerf",
          "partial": "Stats",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Compare.html#t:Stats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd stats.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Compare",
          "name": "(.+.)",
          "package": "nerf",
          "signature": "Stats -\u003e Stats -\u003e Stats",
          "source": "src/NLP-Nerf-Compare.html#.%2B.",
          "type": "function"
        },
        "index": {
          "description": "Add stats",
          "hierarchy": "NLP Nerf Compare",
          "module": "NLP.Nerf.Compare",
          "name": "(.+.) .+.",
          "normalized": "Stats-\u003eStats-\u003eStats",
          "package": "nerf",
          "signature": "Stats-\u003eStats-\u003eStats",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Compare.html#v:.-43-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Nerf.Compare",
          "name": "Stats",
          "package": "nerf",
          "signature": "Stats",
          "source": "src/NLP-Nerf-Compare.html#Stats",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Nerf Compare",
          "module": "NLP.Nerf.Compare",
          "name": "Stats",
          "package": "nerf",
          "partial": "Stats",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Compare.html#v:Stats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare two NE-annotated datasets.  The function assumes, that\n forest pairs correspond to the same sentences.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Compare",
          "name": "compare",
          "package": "nerf",
          "signature": "[(NeForest a Text, NeForest a Text)] -\u003e Map a Stats",
          "source": "src/NLP-Nerf-Compare.html#compare",
          "type": "function"
        },
        "index": {
          "description": "Compare two NE-annotated datasets The function assumes that forest pairs correspond to the same sentences",
          "hierarchy": "NLP Nerf Compare",
          "module": "NLP.Nerf.Compare",
          "name": "compare",
          "normalized": "[(NeForest a Text,NeForest a Text)]-\u003eMap a Stats",
          "package": "nerf",
          "signature": "[(NeForest a Text,NeForest a Text)]-\u003eMap a Stats",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Compare.html#v:compare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efalse negative\n\u003c/p\u003e",
          "module": "NLP.Nerf.Compare",
          "name": "fn",
          "package": "nerf",
          "signature": "Int",
          "source": "src/NLP-Nerf-Compare.html#Stats",
          "type": "function"
        },
        "index": {
          "description": "false negative",
          "hierarchy": "NLP Nerf Compare",
          "module": "NLP.Nerf.Compare",
          "name": "fn",
          "package": "nerf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Compare.html#v:fn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efalse positive\n\u003c/p\u003e",
          "module": "NLP.Nerf.Compare",
          "name": "fp",
          "package": "nerf",
          "signature": "Int",
          "source": "src/NLP-Nerf-Compare.html#Stats",
          "type": "function"
        },
        "index": {
          "description": "false positive",
          "hierarchy": "NLP Nerf Compare",
          "module": "NLP.Nerf.Compare",
          "name": "fp",
          "package": "nerf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Compare.html#v:fp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etrue negative\n\u003c/p\u003e",
          "module": "NLP.Nerf.Compare",
          "name": "tn",
          "package": "nerf",
          "signature": "Int",
          "source": "src/NLP-Nerf-Compare.html#Stats",
          "type": "function"
        },
        "index": {
          "description": "true negative",
          "hierarchy": "NLP Nerf Compare",
          "module": "NLP.Nerf.Compare",
          "name": "tn",
          "package": "nerf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Compare.html#v:tn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etrue positive\n\u003c/p\u003e",
          "module": "NLP.Nerf.Compare",
          "name": "tp",
          "package": "nerf",
          "signature": "Int",
          "source": "src/NLP-Nerf-Compare.html#Stats",
          "type": "function"
        },
        "index": {
          "description": "true positive",
          "hierarchy": "NLP Nerf Compare",
          "module": "NLP.Nerf.Compare",
          "name": "tp",
          "package": "nerf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Compare.html#v:tp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic types for dictionary handling. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "NLP.Nerf.Dict.Base",
          "name": "Base",
          "package": "nerf",
          "source": "src/NLP-Nerf-Dict-Base.html",
          "type": "module"
        },
        "index": {
          "description": "Basic types for dictionary handling",
          "hierarchy": "NLP Nerf Dict Base",
          "module": "NLP.Nerf.Dict.Base",
          "name": "Base",
          "package": "nerf",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDict\u003c/a\u003e\u003c/code\u003e is a map from forms to labels.  Each form may be annotated\n with multiple labels.  The map is represented using the directed acyclic\n word graph.\n type Dict = D.DAWG (S.Set Label)\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict.Base",
          "name": "DAWG",
          "package": "nerf",
          "source": "src/NLP-Nerf-Dict-Base.html#DAWG",
          "type": "type"
        },
        "index": {
          "description": "Dict is map from forms to labels Each form may be annotated with multiple labels The map is represented using the directed acyclic word graph type Dict D.DAWG S.Set Label",
          "hierarchy": "NLP Nerf Dict Base",
          "module": "NLP.Nerf.Dict.Base",
          "name": "DAWG",
          "package": "nerf",
          "partial": "DAWG",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-Base.html#t:DAWG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Nerf.Dict.Base",
          "name": "Dict",
          "package": "nerf",
          "source": "src/NLP-Nerf-Dict-Base.html#Dict",
          "type": "type"
        },
        "index": {
          "hierarchy": "NLP Nerf Dict Base",
          "module": "NLP.Nerf.Dict.Base",
          "name": "Dict",
          "package": "nerf",
          "partial": "Dict",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-Base.html#t:Dict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Named Entity entry from the LMF dictionary.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict.Base",
          "name": "Entry",
          "package": "nerf",
          "source": "src/NLP-Nerf-Dict-Base.html#Entry",
          "type": "data"
        },
        "index": {
          "description": "Named Entity entry from the LMF dictionary",
          "hierarchy": "NLP Nerf Dict Base",
          "module": "NLP.Nerf.Dict.Base",
          "name": "Entry",
          "package": "nerf",
          "partial": "Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-Base.html#t:Entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA orthographic form.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict.Base",
          "name": "Form",
          "package": "nerf",
          "source": "src/NLP-Nerf-Dict-Base.html#Form",
          "type": "type"
        },
        "index": {
          "description": "orthographic form",
          "hierarchy": "NLP Nerf Dict Base",
          "module": "NLP.Nerf.Dict.Base",
          "name": "Form",
          "package": "nerf",
          "partial": "Form",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-Base.html#t:Form"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDictionary label.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict.Base",
          "name": "Label",
          "package": "nerf",
          "source": "src/NLP-Nerf-Dict-Base.html#Label",
          "type": "type"
        },
        "index": {
          "description": "Dictionary label",
          "hierarchy": "NLP Nerf Dict Base",
          "module": "NLP.Nerf.Dict.Base",
          "name": "Label",
          "package": "nerf",
          "partial": "Label",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-Base.html#t:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type of named entity.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict.Base",
          "name": "NeType",
          "package": "nerf",
          "source": "src/NLP-Nerf-Dict-Base.html#NeType",
          "type": "type"
        },
        "index": {
          "description": "type of named entity",
          "hierarchy": "NLP Nerf Dict Base",
          "module": "NLP.Nerf.Dict.Base",
          "name": "NeType",
          "package": "nerf",
          "partial": "Ne Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-Base.html#t:NeType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Nerf.Dict.Base",
          "name": "Entry",
          "package": "nerf",
          "signature": "Entry",
          "source": "src/NLP-Nerf-Dict-Base.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Nerf Dict Base",
          "module": "NLP.Nerf.Dict.Base",
          "name": "Entry",
          "package": "nerf",
          "partial": "Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-Base.html#v:Entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifferentiate labels from separate dictionaries using\n dictionary-unique prefixes.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict.Base",
          "name": "diff",
          "package": "nerf",
          "signature": "[Dict] -\u003e [Dict]",
          "source": "src/NLP-Nerf-Dict-Base.html#diff",
          "type": "function"
        },
        "index": {
          "description": "Differentiate labels from separate dictionaries using dictionary-unique prefixes",
          "hierarchy": "NLP Nerf Dict Base",
          "module": "NLP.Nerf.Dict.Base",
          "name": "diff",
          "normalized": "[Dict]-\u003e[Dict]",
          "package": "nerf",
          "signature": "[Dict]-\u003e[Dict]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-Base.html#v:diff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct dictionary from the list of entries.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict.Base",
          "name": "fromEntries",
          "package": "nerf",
          "signature": "[Entry] -\u003e Dict",
          "source": "src/NLP-Nerf-Dict-Base.html#fromEntries",
          "type": "function"
        },
        "index": {
          "description": "Construct dictionary from the list of entries",
          "hierarchy": "NLP Nerf Dict Base",
          "module": "NLP.Nerf.Dict.Base",
          "name": "fromEntries",
          "normalized": "[Entry]-\u003eDict",
          "package": "nerf",
          "partial": "Entries",
          "signature": "[Entry]-\u003eDict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-Base.html#v:fromEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct dictionary from the list of form/label pairs.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict.Base",
          "name": "fromPairs",
          "package": "nerf",
          "signature": "[(Form, Label)] -\u003e Dict",
          "source": "src/NLP-Nerf-Dict-Base.html#fromPairs",
          "type": "function"
        },
        "index": {
          "description": "Construct dictionary from the list of form label pairs",
          "hierarchy": "NLP Nerf Dict Base",
          "module": "NLP.Nerf.Dict.Base",
          "name": "fromPairs",
          "normalized": "[(Form,Label)]-\u003eDict",
          "package": "nerf",
          "partial": "Pairs",
          "signature": "[(Form,Label)]-\u003eDict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-Base.html#v:fromPairs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the form a multiword one?\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict.Base",
          "name": "isMultiWord",
          "package": "nerf",
          "signature": "Form -\u003e Bool",
          "source": "src/NLP-Nerf-Dict-Base.html#isMultiWord",
          "type": "function"
        },
        "index": {
          "description": "Is the form multiword one",
          "hierarchy": "NLP Nerf Dict Base",
          "module": "NLP.Nerf.Dict.Base",
          "name": "isMultiWord",
          "normalized": "Form-\u003eBool",
          "package": "nerf",
          "partial": "Multi Word",
          "signature": "Form-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-Base.html#v:isMultiWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad the dictionary from the file.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict.Base",
          "name": "loadDict",
          "package": "nerf",
          "signature": "FilePath -\u003e IO Dict",
          "source": "src/NLP-Nerf-Dict-Base.html#loadDict",
          "type": "function"
        },
        "index": {
          "description": "Load the dictionary from the file",
          "hierarchy": "NLP Nerf Dict Base",
          "module": "NLP.Nerf.Dict.Base",
          "name": "loadDict",
          "normalized": "FilePath-\u003eIO Dict",
          "package": "nerf",
          "partial": "Dict",
          "signature": "FilePath-\u003eIO Dict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-Base.html#v:loadDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge dictionary resources.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict.Base",
          "name": "merge",
          "package": "nerf",
          "signature": "[Dict] -\u003e Dict",
          "source": "src/NLP-Nerf-Dict-Base.html#merge",
          "type": "function"
        },
        "index": {
          "description": "Merge dictionary resources",
          "hierarchy": "NLP Nerf Dict Base",
          "module": "NLP.Nerf.Dict.Base",
          "name": "merge",
          "normalized": "[Dict]-\u003eDict",
          "package": "nerf",
          "signature": "[Dict]-\u003eDict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-Base.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrthographic form of the NE\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict.Base",
          "name": "neOrth",
          "package": "nerf",
          "signature": "Form",
          "source": "src/NLP-Nerf-Dict-Base.html#Entry",
          "type": "function"
        },
        "index": {
          "description": "Orthographic form of the NE",
          "hierarchy": "NLP Nerf Dict Base",
          "module": "NLP.Nerf.Dict.Base",
          "name": "neOrth",
          "package": "nerf",
          "partial": "Orth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-Base.html#v:neOrth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of the NE\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict.Base",
          "name": "neType",
          "package": "nerf",
          "signature": "NeType",
          "source": "src/NLP-Nerf-Dict-Base.html#Entry",
          "type": "function"
        },
        "index": {
          "description": "Type of the NE",
          "hierarchy": "NLP Nerf Dict Base",
          "module": "NLP.Nerf.Dict.Base",
          "name": "neType",
          "package": "nerf",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-Base.html#v:neType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSave the dictionary in the file.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict.Base",
          "name": "saveDict",
          "package": "nerf",
          "signature": "FilePath -\u003e Dict -\u003e IO ()",
          "source": "src/NLP-Nerf-Dict-Base.html#saveDict",
          "type": "function"
        },
        "index": {
          "description": "Save the dictionary in the file",
          "hierarchy": "NLP Nerf Dict Base",
          "module": "NLP.Nerf.Dict.Base",
          "name": "saveDict",
          "normalized": "FilePath-\u003eDict-\u003eIO()",
          "package": "nerf",
          "partial": "Dict",
          "signature": "FilePath-\u003eDict-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-Base.html#v:saveDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove dictionary entries which do not satisfy the predicate.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict.Base",
          "name": "siftDict",
          "package": "nerf",
          "signature": "(Form -\u003e Set Label -\u003e Bool) -\u003e Dict -\u003e Dict",
          "source": "src/NLP-Nerf-Dict-Base.html#siftDict",
          "type": "function"
        },
        "index": {
          "description": "Remove dictionary entries which do not satisfy the predicate",
          "hierarchy": "NLP Nerf Dict Base",
          "module": "NLP.Nerf.Dict.Base",
          "name": "siftDict",
          "normalized": "(Form-\u003eSet Label-\u003eBool)-\u003eDict-\u003eDict",
          "package": "nerf",
          "partial": "Dict",
          "signature": "(Form-\u003eSet Label-\u003eBool)-\u003eDict-\u003eDict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-Base.html#v:siftDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHandling the NELexicon dictionary.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "NLP.Nerf.Dict.NELexicon",
          "name": "NELexicon",
          "package": "nerf",
          "source": "src/NLP-Nerf-Dict-NELexicon.html",
          "type": "module"
        },
        "index": {
          "description": "Handling the NELexicon dictionary",
          "hierarchy": "NLP Nerf Dict NELexicon",
          "module": "NLP.Nerf.Dict.NELexicon",
          "name": "NELexicon",
          "package": "nerf",
          "partial": "NELexicon",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-NELexicon.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the NELexicon into a list of entries.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict.NELexicon",
          "name": "parseNELexicon",
          "package": "nerf",
          "signature": "Text -\u003e [Entry]",
          "source": "src/NLP-Nerf-Dict-NELexicon.html#parseNELexicon",
          "type": "function"
        },
        "index": {
          "description": "Parse the NELexicon into list of entries",
          "hierarchy": "NLP Nerf Dict NELexicon",
          "module": "NLP.Nerf.Dict.NELexicon",
          "name": "parseNELexicon",
          "normalized": "Text-\u003e[Entry]",
          "package": "nerf",
          "partial": "NELexicon",
          "signature": "Text-\u003e[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-NELexicon.html#v:parseNELexicon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the dictionary from the file.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict.NELexicon",
          "name": "readNELexicon",
          "package": "nerf",
          "signature": "FilePath -\u003e IO [Entry]",
          "source": "src/NLP-Nerf-Dict-NELexicon.html#readNELexicon",
          "type": "function"
        },
        "index": {
          "description": "Read the dictionary from the file",
          "hierarchy": "NLP Nerf Dict NELexicon",
          "module": "NLP.Nerf.Dict.NELexicon",
          "name": "readNELexicon",
          "normalized": "FilePath-\u003eIO[Entry]",
          "package": "nerf",
          "partial": "NELexicon",
          "signature": "FilePath-\u003eIO[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-NELexicon.html#v:readNELexicon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing the Gazetteer for Polish Named Entities (used formerly within\n the SProUT platform) in the LMF format.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "NLP.Nerf.Dict.PNEG",
          "name": "PNEG",
          "package": "nerf",
          "source": "src/NLP-Nerf-Dict-PNEG.html",
          "type": "module"
        },
        "index": {
          "description": "Parsing the Gazetteer for Polish Named Entities used formerly within the SProUT platform in the LMF format",
          "hierarchy": "NLP Nerf Dict PNEG",
          "module": "NLP.Nerf.Dict.PNEG",
          "name": "PNEG",
          "package": "nerf",
          "partial": "PNEG",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-PNEG.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the dictionary to the list of entries.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict.PNEG",
          "name": "parsePNEG",
          "package": "nerf",
          "signature": "Text -\u003e [Entry]",
          "source": "src/NLP-Nerf-Dict-PNEG.html#parsePNEG",
          "type": "function"
        },
        "index": {
          "description": "Parse the dictionary to the list of entries",
          "hierarchy": "NLP Nerf Dict PNEG",
          "module": "NLP.Nerf.Dict.PNEG",
          "name": "parsePNEG",
          "normalized": "Text-\u003e[Entry]",
          "package": "nerf",
          "partial": "PNEG",
          "signature": "Text-\u003e[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-PNEG.html#v:parsePNEG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the dictionary from the file.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict.PNEG",
          "name": "readPNEG",
          "package": "nerf",
          "signature": "FilePath -\u003e IO [Entry]",
          "source": "src/NLP-Nerf-Dict-PNEG.html#readPNEG",
          "type": "function"
        },
        "index": {
          "description": "Read the dictionary from the file",
          "hierarchy": "NLP Nerf Dict PNEG",
          "module": "NLP.Nerf.Dict.PNEG",
          "name": "readPNEG",
          "normalized": "FilePath-\u003eIO[Entry]",
          "package": "nerf",
          "partial": "PNEG",
          "signature": "FilePath-\u003eIO[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-PNEG.html#v:readPNEG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePolish Named Entity Triggers \u003ca\u003ehttp://zil.ipipan.waw.pl/PNET\u003c/a\u003e dictionary.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "NLP.Nerf.Dict.PNET",
          "name": "PNET",
          "package": "nerf",
          "source": "src/NLP-Nerf-Dict-PNET.html",
          "type": "module"
        },
        "index": {
          "description": "Polish Named Entity Triggers http zil.ipipan.waw.pl PNET dictionary",
          "hierarchy": "NLP Nerf Dict PNET",
          "module": "NLP.Nerf.Dict.PNET",
          "name": "PNET",
          "package": "nerf",
          "partial": "PNET",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-PNET.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePNET entry.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict.PNET",
          "name": "Entry",
          "package": "nerf",
          "source": "src/NLP-Nerf-Dict-PNET.html#Entry",
          "type": "data"
        },
        "index": {
          "description": "PNET entry",
          "hierarchy": "NLP Nerf Dict PNET",
          "module": "NLP.Nerf.Dict.PNET",
          "name": "Entry",
          "package": "nerf",
          "partial": "Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-PNET.html#t:Entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrigger type.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict.PNET",
          "name": "Typ",
          "package": "nerf",
          "source": "src/NLP-Nerf-Dict-PNET.html#Typ",
          "type": "data"
        },
        "index": {
          "description": "Trigger type",
          "hierarchy": "NLP Nerf Dict PNET",
          "module": "NLP.Nerf.Dict.PNET",
          "name": "Typ",
          "package": "nerf",
          "partial": "Typ",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-PNET.html#t:Typ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Nerf.Dict.PNET",
          "name": "Entry",
          "package": "nerf",
          "signature": "Entry",
          "source": "src/NLP-Nerf-Dict-PNET.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Nerf Dict PNET",
          "module": "NLP.Nerf.Dict.PNET",
          "name": "Entry",
          "package": "nerf",
          "partial": "Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-PNET.html#v:Entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Nerf.Dict.PNET",
          "name": "External",
          "package": "nerf",
          "signature": "External",
          "source": "src/NLP-Nerf-Dict-PNET.html#Typ",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Nerf Dict PNET",
          "module": "NLP.Nerf.Dict.PNET",
          "name": "External",
          "package": "nerf",
          "partial": "External",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-PNET.html#v:External"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Nerf.Dict.PNET",
          "name": "Internal",
          "package": "nerf",
          "signature": "Internal",
          "source": "src/NLP-Nerf-Dict-PNET.html#Typ",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Nerf Dict PNET",
          "module": "NLP.Nerf.Dict.PNET",
          "name": "Internal",
          "package": "nerf",
          "partial": "Internal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-PNET.html#v:Internal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Nerf.Dict.PNET",
          "name": "base",
          "package": "nerf",
          "signature": "Text",
          "source": "src/NLP-Nerf-Dict-PNET.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Nerf Dict PNET",
          "module": "NLP.Nerf.Dict.PNET",
          "name": "base",
          "package": "nerf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-PNET.html#v:base"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Nerf.Dict.PNET",
          "name": "example",
          "package": "nerf",
          "signature": "Text",
          "source": "src/NLP-Nerf-Dict-PNET.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Nerf Dict PNET",
          "module": "NLP.Nerf.Dict.PNET",
          "name": "example",
          "package": "nerf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-PNET.html#v:example"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes entry represents a trigger of the given type?\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict.PNET",
          "name": "hasTyp",
          "package": "nerf",
          "signature": "Typ -\u003e Entry -\u003e Bool",
          "source": "src/NLP-Nerf-Dict-PNET.html#hasTyp",
          "type": "function"
        },
        "index": {
          "description": "Does entry represents trigger of the given type",
          "hierarchy": "NLP Nerf Dict PNET",
          "module": "NLP.Nerf.Dict.PNET",
          "name": "hasTyp",
          "normalized": "Typ-\u003eEntry-\u003eBool",
          "package": "nerf",
          "partial": "Typ",
          "signature": "Typ-\u003eEntry-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-PNET.html#v:hasTyp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Nerf.Dict.PNET",
          "name": "neTyp",
          "package": "nerf",
          "signature": "Text",
          "source": "src/NLP-Nerf-Dict-PNET.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Nerf Dict PNET",
          "module": "NLP.Nerf.Dict.PNET",
          "name": "neTyp",
          "package": "nerf",
          "partial": "Typ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-PNET.html#v:neTyp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Nerf.Dict.PNET",
          "name": "orth",
          "package": "nerf",
          "signature": "Text",
          "source": "src/NLP-Nerf-Dict-PNET.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Nerf Dict PNET",
          "module": "NLP.Nerf.Dict.PNET",
          "name": "orth",
          "package": "nerf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-PNET.html#v:orth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse dictionary into a list of entries.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict.PNET",
          "name": "parsePNET",
          "package": "nerf",
          "signature": "Text -\u003e [Entry]",
          "source": "src/NLP-Nerf-Dict-PNET.html#parsePNET",
          "type": "function"
        },
        "index": {
          "description": "Parse dictionary into list of entries",
          "hierarchy": "NLP Nerf Dict PNET",
          "module": "NLP.Nerf.Dict.PNET",
          "name": "parsePNET",
          "normalized": "Text-\u003e[Entry]",
          "package": "nerf",
          "partial": "PNET",
          "signature": "Text-\u003e[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-PNET.html#v:parsePNET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead dictionary from the file.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict.PNET",
          "name": "readPNET",
          "package": "nerf",
          "signature": "FilePath -\u003e IO [Entry]",
          "source": "src/NLP-Nerf-Dict-PNET.html#readPNET",
          "type": "function"
        },
        "index": {
          "description": "Read dictionary from the file",
          "hierarchy": "NLP Nerf Dict PNET",
          "module": "NLP.Nerf.Dict.PNET",
          "name": "readPNET",
          "normalized": "FilePath-\u003eIO[Entry]",
          "package": "nerf",
          "partial": "PNET",
          "signature": "FilePath-\u003eIO[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-PNET.html#v:readPNET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Nerf.Dict.PNET",
          "name": "tag",
          "package": "nerf",
          "signature": "Text",
          "source": "src/NLP-Nerf-Dict-PNET.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Nerf Dict PNET",
          "module": "NLP.Nerf.Dict.PNET",
          "name": "tag",
          "package": "nerf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-PNET.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Nerf.Dict.PNET",
          "name": "typ",
          "package": "nerf",
          "signature": "Typ",
          "source": "src/NLP-Nerf-Dict-PNET.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Nerf Dict PNET",
          "module": "NLP.Nerf.Dict.PNET",
          "name": "typ",
          "package": "nerf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-PNET.html#v:typ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHandling Prolexbase dictionaries, both with the\n same storage format.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "NLP.Nerf.Dict.Prolexbase",
          "name": "Prolexbase",
          "package": "nerf",
          "source": "src/NLP-Nerf-Dict-Prolexbase.html",
          "type": "module"
        },
        "index": {
          "description": "Handling Prolexbase dictionaries both with the same storage format",
          "hierarchy": "NLP Nerf Dict Prolexbase",
          "module": "NLP.Nerf.Dict.Prolexbase",
          "name": "Prolexbase",
          "package": "nerf",
          "partial": "Prolexbase",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-Prolexbase.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse dictionary into a list of entries.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict.Prolexbase",
          "name": "parseProlexbase",
          "package": "nerf",
          "signature": "Text -\u003e [Entry]",
          "source": "src/NLP-Nerf-Dict-Prolexbase.html#parseProlexbase",
          "type": "function"
        },
        "index": {
          "description": "Parse dictionary into list of entries",
          "hierarchy": "NLP Nerf Dict Prolexbase",
          "module": "NLP.Nerf.Dict.Prolexbase",
          "name": "parseProlexbase",
          "normalized": "Text-\u003e[Entry]",
          "package": "nerf",
          "partial": "Prolexbase",
          "signature": "Text-\u003e[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-Prolexbase.html#v:parseProlexbase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the dictionary from the file.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict.Prolexbase",
          "name": "readProlexbase",
          "package": "nerf",
          "signature": "FilePath -\u003e IO [Entry]",
          "source": "src/NLP-Nerf-Dict-Prolexbase.html#readProlexbase",
          "type": "function"
        },
        "index": {
          "description": "Read the dictionary from the file",
          "hierarchy": "NLP Nerf Dict Prolexbase",
          "module": "NLP.Nerf.Dict.Prolexbase",
          "name": "readProlexbase",
          "normalized": "FilePath-\u003eIO[Entry]",
          "package": "nerf",
          "partial": "Prolexbase",
          "signature": "FilePath-\u003eIO[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict-Prolexbase.html#v:readProlexbase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExtraction utilities for various dictionary resources.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "NLP.Nerf.Dict",
          "name": "Dict",
          "package": "nerf",
          "source": "src/NLP-Nerf-Dict.html",
          "type": "module"
        },
        "index": {
          "description": "Extraction utilities for various dictionary resources",
          "hierarchy": "NLP Nerf Dict",
          "module": "NLP.Nerf.Dict",
          "name": "Dict",
          "package": "nerf",
          "partial": "Dict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract external triggers from PNET dictionary.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict",
          "name": "extractExtTriggers",
          "package": "nerf",
          "signature": "FilePath-\u003e IO Dict",
          "type": "function"
        },
        "index": {
          "description": "Extract external triggers from PNET dictionary",
          "hierarchy": "NLP Nerf Dict",
          "module": "NLP.Nerf.Dict",
          "name": "extractExtTriggers",
          "normalized": "FilePath-\u003eIO Dict",
          "package": "nerf",
          "partial": "Ext Triggers",
          "signature": "FilePath-\u003eIO Dict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict.html#v:extractExtTriggers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract internal triggers from PNET dictionary.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict",
          "name": "extractIntTriggers",
          "package": "nerf",
          "signature": "FilePath-\u003e IO Dict",
          "type": "function"
        },
        "index": {
          "description": "Extract internal triggers from PNET dictionary",
          "hierarchy": "NLP Nerf Dict",
          "module": "NLP.Nerf.Dict",
          "name": "extractIntTriggers",
          "normalized": "FilePath-\u003eIO Dict",
          "package": "nerf",
          "partial": "Int Triggers",
          "signature": "FilePath-\u003eIO Dict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict.html#v:extractIntTriggers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract NEs dictionary from NELexicon.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict",
          "name": "extractNELexicon",
          "package": "nerf",
          "signature": "FilePath-\u003e IO Dict",
          "type": "function"
        },
        "index": {
          "description": "Extract NEs dictionary from NELexicon",
          "hierarchy": "NLP Nerf Dict",
          "module": "NLP.Nerf.Dict",
          "name": "extractNELexicon",
          "normalized": "FilePath-\u003eIO Dict",
          "package": "nerf",
          "partial": "NELexicon",
          "signature": "FilePath-\u003eIO Dict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict.html#v:extractNELexicon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract NEs dictionary from PNEG.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict",
          "name": "extractPNEG",
          "package": "nerf",
          "signature": "FilePath-\u003e IO Dict",
          "type": "function"
        },
        "index": {
          "description": "Extract NEs dictionary from PNEG",
          "hierarchy": "NLP Nerf Dict",
          "module": "NLP.Nerf.Dict",
          "name": "extractPNEG",
          "normalized": "FilePath-\u003eIO Dict",
          "package": "nerf",
          "partial": "PNEG",
          "signature": "FilePath-\u003eIO Dict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict.html#v:extractPNEG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract NEs dictionary from PoliMorf.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict",
          "name": "extractPoliMorf",
          "package": "nerf",
          "signature": "FilePath-\u003e IO Dict",
          "type": "function"
        },
        "index": {
          "description": "Extract NEs dictionary from PoliMorf",
          "hierarchy": "NLP Nerf Dict",
          "module": "NLP.Nerf.Dict",
          "name": "extractPoliMorf",
          "normalized": "FilePath-\u003eIO Dict",
          "package": "nerf",
          "partial": "Poli Morf",
          "signature": "FilePath-\u003eIO Dict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict.html#v:extractPoliMorf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract NEs dictionary from Prolexbase.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Dict",
          "name": "extractProlexbase",
          "package": "nerf",
          "signature": "FilePath-\u003e IO Dict",
          "type": "function"
        },
        "index": {
          "description": "Extract NEs dictionary from Prolexbase",
          "hierarchy": "NLP Nerf Dict",
          "module": "NLP.Nerf.Dict",
          "name": "extractProlexbase",
          "normalized": "FilePath-\u003eIO Dict",
          "package": "nerf",
          "partial": "Prolexbase",
          "signature": "FilePath-\u003eIO Dict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Dict.html#v:extractProlexbase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eObservation schema blocks for Nerf.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "Schema",
          "package": "nerf",
          "source": "src/NLP-Nerf-Schema.html",
          "type": "module"
        },
        "index": {
          "description": "Observation schema blocks for Nerf",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "Schema",
          "package": "nerf",
          "partial": "Schema",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA block is a chunk of the Ox computation performed within the\n context of the sentence and the list of absolute sentence positions.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "Block",
          "package": "nerf",
          "source": "src/NLP-Nerf-Schema.html#Block",
          "type": "type"
        },
        "index": {
          "description": "block is chunk of the Ox computation performed within the context of the sentence and the list of absolute sentence positions",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "Block",
          "package": "nerf",
          "partial": "Block",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#t:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBody of configuration entry.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "Body",
          "package": "nerf",
          "source": "src/NLP-Nerf-Schema.html#Body",
          "type": "data"
        },
        "index": {
          "description": "Body of configuration entry",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "Body",
          "package": "nerf",
          "partial": "Body",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#t:Body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaybe entry.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "Entry",
          "package": "nerf",
          "source": "src/NLP-Nerf-Schema.html#Entry",
          "type": "type"
        },
        "index": {
          "description": "Maybe entry",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "Entry",
          "package": "nerf",
          "partial": "Entry",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#t:Entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Ox monad specialized to word token type and text observations.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "Ox",
          "package": "nerf",
          "source": "src/NLP-Nerf-Schema.html#Ox",
          "type": "type"
        },
        "index": {
          "description": "The Ox monad specialized to word token type and text observations",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "Ox",
          "package": "nerf",
          "partial": "Ox",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#t:Ox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA schema is a block of the Ox computation performed within the\n context of the sentence and the absolute sentence position.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "Schema",
          "package": "nerf",
          "source": "src/NLP-Nerf-Schema.html#Schema",
          "type": "type"
        },
        "index": {
          "description": "schema is block of the Ox computation performed within the context of the sentence and the absolute sentence position",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "Schema",
          "package": "nerf",
          "partial": "Schema",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#t:Schema"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration of the schema.  All configuration elements specify the\n range over which a particular observation type should be taken on account.\n For example, the \u003ccode\u003e[-1, 0, 2]\u003c/code\u003e range means that observations of particular\n type will be extracted with respect to previous (\u003ccode\u003ek - 1\u003c/code\u003e), current (\u003ccode\u003ek\u003c/code\u003e)\n and after the next (\u003ccode\u003ek + 2\u003c/code\u003e) positions when identifying the observation\n set for position \u003ccode\u003ek\u003c/code\u003e in the input sentence.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "SchemaConf",
          "package": "nerf",
          "source": "src/NLP-Nerf-Schema.html#SchemaConf",
          "type": "data"
        },
        "index": {
          "description": "Configuration of the schema All configuration elements specify the range over which particular observation type should be taken on account For example the range means that observations of particular type will be extracted with respect to previous current and after the next positions when identifying the observation set for position in the input sentence",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "SchemaConf",
          "package": "nerf",
          "partial": "Schema Conf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#t:SchemaConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Nerf.Schema",
          "name": "Body",
          "package": "nerf",
          "signature": "Body",
          "source": "src/NLP-Nerf-Schema.html#Body",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "Body",
          "package": "nerf",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:Body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Nerf.Schema",
          "name": "SchemaConf",
          "package": "nerf",
          "signature": "SchemaConf",
          "source": "src/NLP-Nerf-Schema.html#SchemaConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "SchemaConf",
          "package": "nerf",
          "partial": "Schema Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:SchemaConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdditional arguments for the schema block.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "args",
          "package": "nerf",
          "signature": "a",
          "source": "src/NLP-Nerf-Schema.html#Body",
          "type": "function"
        },
        "index": {
          "description": "Additional arguments for the schema block",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "args",
          "package": "nerf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault configuration of the observation schema.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "defaultConf",
          "package": "nerf",
          "signature": "[Dict]-\u003e Maybe Dict-\u003e Maybe Dict-\u003e IO SchemaConf",
          "type": "function"
        },
        "index": {
          "description": "Default configuration of the observation schema",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "defaultConf",
          "normalized": "[Dict]-\u003eMaybe Dict-\u003eMaybe Dict-\u003eIO SchemaConf",
          "package": "nerf",
          "partial": "Conf",
          "signature": "[Dict]-\u003eMaybe Dict-\u003eMaybe Dict-\u003eIO SchemaConf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:defaultConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlain dictionary search determined with respect to the list of\n relative positions.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "dictB",
          "package": "nerf",
          "signature": "Dict -\u003e Block ()",
          "source": "src/NLP-Nerf-Schema.html#dictB",
          "type": "function"
        },
        "index": {
          "description": "Plain dictionary search determined with respect to the list of relative positions",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "dictB",
          "normalized": "Dict-\u003eBlock()",
          "package": "nerf",
          "signature": "Dict-\u003eBlock()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:dictB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDictionaries of NEs (\u003ccode\u003e\u003ca\u003edictB\u003c/a\u003e\u003c/code\u003e schema block).\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "dictC",
          "package": "nerf",
          "signature": "Entry [Dict]",
          "source": "src/NLP-Nerf-Schema.html#SchemaConf",
          "type": "function"
        },
        "index": {
          "description": "Dictionaries of NEs dictB schema block",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "dictC",
          "normalized": "Entry[Dict]",
          "package": "nerf",
          "signature": "Entry[Dict]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:dictC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlain entry with no additional arugments.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "entry",
          "package": "nerf",
          "signature": "[Int] -\u003e Entry ()",
          "source": "src/NLP-Nerf-Schema.html#entry",
          "type": "function"
        },
        "index": {
          "description": "Plain entry with no additional arugments",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "entry",
          "normalized": "[Int]-\u003eEntry()",
          "package": "nerf",
          "signature": "[Int]-\u003eEntry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEntry with additional arguemnts.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "entryWith",
          "package": "nerf",
          "signature": "a -\u003e [Int] -\u003e Entry a",
          "source": "src/NLP-Nerf-Schema.html#entryWith",
          "type": "function"
        },
        "index": {
          "description": "Entry with additional arguemnts",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "entryWith",
          "normalized": "a-\u003e[Int]-\u003eEntry a",
          "package": "nerf",
          "partial": "With",
          "signature": "a-\u003e[Int]-\u003eEntry a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:entryWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDictionary of external triggers.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "extTrigsC",
          "package": "nerf",
          "signature": "Entry Dict",
          "source": "src/NLP-Nerf-Schema.html#SchemaConf",
          "type": "function"
        },
        "index": {
          "description": "Dictionary of external triggers",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "extTrigsC",
          "package": "nerf",
          "partial": "Trigs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:extTrigsC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform the block to the schema depending on the list of\n relative sentence positions.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "fromBlock",
          "package": "nerf",
          "signature": "Block a -\u003e [Int] -\u003e Schema a",
          "source": "src/NLP-Nerf-Schema.html#fromBlock",
          "type": "function"
        },
        "index": {
          "description": "Transform the block to the schema depending on the list of relative sentence positions",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "fromBlock",
          "normalized": "Block a-\u003e[Int]-\u003eSchema a",
          "package": "nerf",
          "partial": "Block",
          "signature": "Block a-\u003e[Int]-\u003eSchema a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:fromBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild the schema based on the configuration.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "fromConf",
          "package": "nerf",
          "signature": "SchemaConf -\u003e Schema ()",
          "source": "src/NLP-Nerf-Schema.html#fromConf",
          "type": "function"
        },
        "index": {
          "description": "Build the schema based on the configuration",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "fromConf",
          "normalized": "SchemaConf-\u003eSchema()",
          "package": "nerf",
          "partial": "Conf",
          "signature": "SchemaConf-\u003eSchema()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:fromConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDictionary of internal triggers.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "intTrigsC",
          "package": "nerf",
          "signature": "Entry Dict",
          "source": "src/NLP-Nerf-Schema.html#SchemaConf",
          "type": "function"
        },
        "index": {
          "description": "Dictionary of internal triggers",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "intTrigsC",
          "package": "nerf",
          "partial": "Trigs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:intTrigsC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLemma substitute parametrized by the number specifying the span\n over which lowercased prefixes and suffixes will be \u003ccode\u003e\u003ca\u003esave\u003c/a\u003e\u003c/code\u003ed.\n For example, \u003ccode\u003elemmaB 2\u003c/code\u003e will take affixes of lengths \u003ccode\u003e0, -1\u003c/code\u003e and \u003ccode\u003e-2\u003c/code\u003e\n on account.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "lemmaB",
          "package": "nerf",
          "signature": "Int -\u003e Block ()",
          "source": "src/NLP-Nerf-Schema.html#lemmaB",
          "type": "function"
        },
        "index": {
          "description": "Lemma substitute parametrized by the number specifying the span over which lowercased prefixes and suffixes will be save For example lemmaB will take affixes of lengths and on account",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "lemmaB",
          "normalized": "Int-\u003eBlock()",
          "package": "nerf",
          "signature": "Int-\u003eBlock()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:lemmaB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elemmaB\u003c/a\u003e\u003c/code\u003e schema block.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "lemmaC",
          "package": "nerf",
          "signature": "Entry Int",
          "source": "src/NLP-Nerf-Schema.html#SchemaConf",
          "type": "function"
        },
        "index": {
          "description": "The lemmaB schema block",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "lemmaC",
          "package": "nerf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:lemmaC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of lowercased prefixes of given lengths.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "lowPrefixesB",
          "package": "nerf",
          "signature": "[Int] -\u003e Block ()",
          "source": "src/NLP-Nerf-Schema.html#lowPrefixesB",
          "type": "function"
        },
        "index": {
          "description": "List of lowercased prefixes of given lengths",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "lowPrefixesB",
          "normalized": "[Int]-\u003eBlock()",
          "package": "nerf",
          "partial": "Prefixes",
          "signature": "[Int]-\u003eBlock()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:lowPrefixesB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elowPrefixesB\u003c/a\u003e\u003c/code\u003e schema block.  The first list of ints\n represents lengths of prefixes.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "lowPrefixesC",
          "package": "nerf",
          "signature": "Entry [Int]",
          "source": "src/NLP-Nerf-Schema.html#SchemaConf",
          "type": "function"
        },
        "index": {
          "description": "The lowPrefixesB schema block The first list of ints represents lengths of prefixes",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "lowPrefixesC",
          "normalized": "Entry[Int]",
          "package": "nerf",
          "partial": "Prefixes",
          "signature": "Entry[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:lowPrefixesC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of lowercased suffixes of given lengths.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "lowSuffixesB",
          "package": "nerf",
          "signature": "[Int] -\u003e Block ()",
          "source": "src/NLP-Nerf-Schema.html#lowSuffixesB",
          "type": "function"
        },
        "index": {
          "description": "List of lowercased suffixes of given lengths",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "lowSuffixesB",
          "normalized": "[Int]-\u003eBlock()",
          "package": "nerf",
          "partial": "Suffixes",
          "signature": "[Int]-\u003eBlock()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:lowSuffixesB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003elowSuffixesB\u003c/a\u003e\u003c/code\u003e schema block.  The first list of ints\n represents lengths of suffixes.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "lowSuffixesC",
          "package": "nerf",
          "signature": "Entry [Int]",
          "source": "src/NLP-Nerf-Schema.html#SchemaConf",
          "type": "function"
        },
        "index": {
          "description": "The lowSuffixesB schema block The first list of ints represents lengths of suffixes",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "lowSuffixesC",
          "normalized": "Entry[Int]",
          "package": "nerf",
          "partial": "Suffixes",
          "signature": "Entry[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:lowSuffixesC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNull configuration of the observation schema.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "nullConf",
          "package": "nerf",
          "signature": "SchemaConf",
          "source": "src/NLP-Nerf-Schema.html#nullConf",
          "type": "function"
        },
        "index": {
          "description": "Null configuration of the observation schema",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "nullConf",
          "package": "nerf",
          "partial": "Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:nullConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrthographic form at the current position.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "orthB",
          "package": "nerf",
          "signature": "Block ()",
          "source": "src/NLP-Nerf-Schema.html#orthB",
          "type": "function"
        },
        "index": {
          "description": "Orthographic form at the current position",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "orthB",
          "normalized": "Block()",
          "package": "nerf",
          "signature": "Block()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:orthB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eorthB\u003c/a\u003e\u003c/code\u003e schema block.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "orthC",
          "package": "nerf",
          "signature": "Entry ()",
          "source": "src/NLP-Nerf-Schema.html#SchemaConf",
          "type": "function"
        },
        "index": {
          "description": "The orthB schema block",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "orthC",
          "normalized": "Entry()",
          "package": "nerf",
          "signature": "Entry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:orthC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePacked shape of the word.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "packedB",
          "package": "nerf",
          "signature": "Block ()",
          "source": "src/NLP-Nerf-Schema.html#packedB",
          "type": "function"
        },
        "index": {
          "description": "Packed shape of the word",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "packedB",
          "normalized": "Block()",
          "package": "nerf",
          "signature": "Block()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:packedB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003epackedB\u003c/a\u003e\u003c/code\u003e schema block.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "packedC",
          "package": "nerf",
          "signature": "Entry ()",
          "source": "src/NLP-Nerf-Schema.html#SchemaConf",
          "type": "function"
        },
        "index": {
          "description": "The packedB schema block",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "packedC",
          "normalized": "Entry()",
          "package": "nerf",
          "signature": "Entry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:packedC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombined packed shapes of two consecutive (at \u003ccode\u003ek-1\u003c/code\u003e and \u003ccode\u003ek\u003c/code\u003e positions)\n words.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "packedPairB",
          "package": "nerf",
          "signature": "Block ()",
          "source": "src/NLP-Nerf-Schema.html#packedPairB",
          "type": "function"
        },
        "index": {
          "description": "Combined packed shapes of two consecutive at k-1 and positions words",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "packedPairB",
          "normalized": "Block()",
          "package": "nerf",
          "partial": "Pair",
          "signature": "Block()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:packedPairB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003epackedPairB\u003c/a\u003e\u003c/code\u003e schema block.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "packedPairC",
          "package": "nerf",
          "signature": "Entry ()",
          "source": "src/NLP-Nerf-Schema.html#SchemaConf",
          "type": "function"
        },
        "index": {
          "description": "The packedPairB schema block",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "packedPairC",
          "normalized": "Entry()",
          "package": "nerf",
          "partial": "Pair",
          "signature": "Entry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:packedPairC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRange argument for the schema block. \n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "range",
          "package": "nerf",
          "signature": "[Int]",
          "source": "src/NLP-Nerf-Schema.html#Body",
          "type": "function"
        },
        "index": {
          "description": "Range argument for the schema block",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "range",
          "normalized": "[Int]",
          "package": "nerf",
          "signature": "[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse the schema to extract observations from the sentence.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "schematize",
          "package": "nerf",
          "signature": "Schema a -\u003e [Word] -\u003e Sent Ob",
          "source": "src/NLP-Nerf-Schema.html#schematize",
          "type": "function"
        },
        "index": {
          "description": "Use the schema to extract observations from the sentence",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "schematize",
          "normalized": "Schema a-\u003e[Word]-\u003eSent Ob",
          "package": "nerf",
          "signature": "Schema a-\u003e[Word]-\u003eSent Ob",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:schematize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence the list of schemas (or blocks) and discard individual values.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "sequenceS_",
          "package": "nerf",
          "signature": "[Vector Word -\u003e a -\u003e Ox b] -\u003e Vector Word -\u003e a -\u003e Ox ()",
          "source": "src/NLP-Nerf-Schema.html#sequenceS_",
          "type": "function"
        },
        "index": {
          "description": "Sequence the list of schemas or blocks and discard individual values",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "sequenceS_",
          "normalized": "[Vector Word-\u003ea-\u003eOx b]-\u003eVector Word-\u003ea-\u003eOx()",
          "package": "nerf",
          "signature": "[Vector Word-\u003ea-\u003eOx b]-\u003eVector Word-\u003ea-\u003eOx()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:sequenceS_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShape of the word.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "shapeB",
          "package": "nerf",
          "signature": "Block ()",
          "source": "src/NLP-Nerf-Schema.html#shapeB",
          "type": "function"
        },
        "index": {
          "description": "Shape of the word",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "shapeB",
          "normalized": "Block()",
          "package": "nerf",
          "signature": "Block()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:shapeB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eshapeB\u003c/a\u003e\u003c/code\u003e schema block.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "shapeC",
          "package": "nerf",
          "signature": "Entry ()",
          "source": "src/NLP-Nerf-Schema.html#SchemaConf",
          "type": "function"
        },
        "index": {
          "description": "The shapeB schema block",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "shapeC",
          "normalized": "Entry()",
          "package": "nerf",
          "signature": "Entry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:shapeC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombined shapes of two consecutive (at \u003ccode\u003ek-1\u003c/code\u003e and \u003ccode\u003ek\u003c/code\u003e positions) words.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "shapePairB",
          "package": "nerf",
          "signature": "Block ()",
          "source": "src/NLP-Nerf-Schema.html#shapePairB",
          "type": "function"
        },
        "index": {
          "description": "Combined shapes of two consecutive at k-1 and positions words",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "shapePairB",
          "normalized": "Block()",
          "package": "nerf",
          "partial": "Pair",
          "signature": "Block()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:shapePairB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eshapePairB\u003c/a\u003e\u003c/code\u003e schema block.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "shapePairC",
          "package": "nerf",
          "signature": "Entry ()",
          "source": "src/NLP-Nerf-Schema.html#SchemaConf",
          "type": "function"
        },
        "index": {
          "description": "The shapePairB schema block",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "shapePairC",
          "normalized": "Entry()",
          "package": "nerf",
          "partial": "Pair",
          "signature": "Entry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:shapePairC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrthographic form split into two observations: the lowercased form and\n the original form (only when different than the lowercased one).\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "splitOrthB",
          "package": "nerf",
          "signature": "Block ()",
          "source": "src/NLP-Nerf-Schema.html#splitOrthB",
          "type": "function"
        },
        "index": {
          "description": "Orthographic form split into two observations the lowercased form and the original form only when different than the lowercased one",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "splitOrthB",
          "normalized": "Block()",
          "package": "nerf",
          "partial": "Orth",
          "signature": "Block()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:splitOrthB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003esplitOrthB\u003c/a\u003e\u003c/code\u003e schema block.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "splitOrthC",
          "package": "nerf",
          "signature": "Entry ()",
          "source": "src/NLP-Nerf-Schema.html#SchemaConf",
          "type": "function"
        },
        "index": {
          "description": "The splitOrthB schema block",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "splitOrthC",
          "normalized": "Entry()",
          "package": "nerf",
          "partial": "Orth",
          "signature": "Entry()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:splitOrthC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA dummy schema block.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Schema",
          "name": "void",
          "package": "nerf",
          "signature": "a -\u003e Schema a",
          "source": "src/NLP-Nerf-Schema.html#void",
          "type": "function"
        },
        "index": {
          "description": "dummy schema block",
          "hierarchy": "NLP Nerf Schema",
          "module": "NLP.Nerf.Schema",
          "name": "void",
          "normalized": "a-\u003eSchema a",
          "package": "nerf",
          "signature": "a-\u003eSchema a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Schema.html#v:void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Nerf.Server",
          "name": "Server",
          "package": "nerf",
          "source": "src/NLP-Nerf-Server.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "NLP Nerf Server",
          "module": "NLP.Nerf.Server",
          "name": "Server",
          "package": "nerf",
          "partial": "Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Server.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform NER tagging on the input sentence.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Server",
          "name": "ner",
          "package": "nerf",
          "signature": "HostName -\u003e PortID -\u003e String -\u003e IO (NeForest NE Word)",
          "source": "src/NLP-Nerf-Server.html#ner",
          "type": "function"
        },
        "index": {
          "description": "Perform NER tagging on the input sentence",
          "hierarchy": "NLP Nerf Server",
          "module": "NLP.Nerf.Server",
          "name": "ner",
          "normalized": "HostName-\u003ePortID-\u003eString-\u003eIO(NeForest NE Word)",
          "package": "nerf",
          "signature": "HostName-\u003ePortID-\u003eString-\u003eIO(NeForest NE Word)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Server.html#v:ner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a Nerf server on a given port.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Server",
          "name": "runNerfServer",
          "package": "nerf",
          "signature": "Nerf -\u003e PortID -\u003e IO ()",
          "source": "src/NLP-Nerf-Server.html#runNerfServer",
          "type": "function"
        },
        "index": {
          "description": "Run Nerf server on given port",
          "hierarchy": "NLP Nerf Server",
          "module": "NLP.Nerf.Server",
          "name": "runNerfServer",
          "normalized": "Nerf-\u003ePortID-\u003eIO()",
          "package": "nerf",
          "partial": "Nerf Server",
          "signature": "Nerf-\u003ePortID-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Server.html#v:runNerfServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module implements the tokenization used within Nerf\n and some other tokenization-related stuff.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "NLP.Nerf.Tokenize",
          "name": "Tokenize",
          "package": "nerf",
          "source": "src/NLP-Nerf-Tokenize.html",
          "type": "module"
        },
        "index": {
          "description": "The module implements the tokenization used within Nerf and some other tokenization-related stuff",
          "hierarchy": "NLP Nerf Tokenize",
          "module": "NLP.Nerf.Tokenize",
          "name": "Tokenize",
          "package": "nerf",
          "partial": "Tokenize",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Tokenize.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class of objects which can be converted to \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Tokenize",
          "name": "Word",
          "package": "nerf",
          "source": "src/NLP-Nerf-Tokenize.html#Word",
          "type": "class"
        },
        "index": {
          "description": "class of objects which can be converted to String",
          "hierarchy": "NLP Nerf Tokenize",
          "module": "NLP.Nerf.Tokenize",
          "name": "Word",
          "package": "nerf",
          "partial": "Word",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Tokenize.html#t:Word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynchronize the list of NE trees with the new tokenization.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Tokenize",
          "name": "sync",
          "package": "nerf",
          "signature": "NeForest a b-\u003e [c]-\u003e NeForest a c",
          "type": "function"
        },
        "index": {
          "description": "Synchronize the list of NE trees with the new tokenization",
          "hierarchy": "NLP Nerf Tokenize",
          "module": "NLP.Nerf.Tokenize",
          "name": "sync",
          "normalized": "NeForest a b-\u003e[c]-\u003eNeForest a c",
          "package": "nerf",
          "signature": "NeForest a b-\u003e[c]-\u003eNeForest a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Tokenize.html#v:sync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTokenize sentence using the default tokenizer.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Tokenize",
          "name": "tokenize",
          "package": "nerf",
          "signature": "String -\u003e [String]",
          "source": "src/NLP-Nerf-Tokenize.html#tokenize",
          "type": "function"
        },
        "index": {
          "description": "Tokenize sentence using the default tokenizer",
          "hierarchy": "NLP Nerf Tokenize",
          "module": "NLP.Nerf.Tokenize",
          "name": "tokenize",
          "normalized": "String-\u003e[String]",
          "package": "nerf",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Tokenize.html#v:tokenize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Nerf.Tokenize",
          "name": "word",
          "package": "nerf",
          "signature": "a -\u003e String",
          "source": "src/NLP-Nerf-Tokenize.html#word",
          "type": "method"
        },
        "index": {
          "hierarchy": "NLP Nerf Tokenize",
          "module": "NLP.Nerf.Tokenize",
          "name": "word",
          "normalized": "a-\u003eString",
          "package": "nerf",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Tokenize.html#v:word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "NLP.Nerf.Types",
          "name": "Types",
          "package": "nerf",
          "source": "src/NLP-Nerf-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Basic types",
          "hierarchy": "NLP Nerf Types",
          "module": "NLP.Nerf.Types",
          "name": "Types",
          "package": "nerf",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA label is created by encoding the named entity forest using the\n IOB method.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Types",
          "name": "Lb",
          "package": "nerf",
          "source": "src/NLP-Nerf-Types.html#Lb",
          "type": "type"
        },
        "index": {
          "description": "label is created by encoding the named entity forest using the IOB method",
          "hierarchy": "NLP Nerf Types",
          "module": "NLP.Nerf.Types",
          "name": "Lb",
          "package": "nerf",
          "partial": "Lb",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Types.html#t:Lb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA named entity.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Types",
          "name": "NE",
          "package": "nerf",
          "source": "src/NLP-Nerf-Types.html#NE",
          "type": "type"
        },
        "index": {
          "description": "named entity",
          "hierarchy": "NLP Nerf Types",
          "module": "NLP.Nerf.Types",
          "name": "NE",
          "package": "nerf",
          "partial": "NE",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Types.html#t:NE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn observation consist of an index (of list type) and an actual\n observation value.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Types",
          "name": "Ob",
          "package": "nerf",
          "source": "src/NLP-Nerf-Types.html#Ob",
          "type": "type"
        },
        "index": {
          "description": "An observation consist of an index of list type and an actual observation value",
          "hierarchy": "NLP Nerf Types",
          "module": "NLP.Nerf.Types",
          "name": "Ob",
          "package": "nerf",
          "partial": "Ob",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Types.html#t:Ob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA word.\n\u003c/p\u003e",
          "module": "NLP.Nerf.Types",
          "name": "Word",
          "package": "nerf",
          "source": "src/NLP-Nerf-Types.html#Word",
          "type": "type"
        },
        "index": {
          "description": "word",
          "hierarchy": "NLP Nerf Types",
          "module": "NLP.Nerf.Types",
          "name": "Word",
          "package": "nerf",
          "partial": "Word",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-Types.html#t:Word"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for the XCES format.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "NLP.Nerf.XCES",
          "name": "XCES",
          "package": "nerf",
          "source": "src/NLP-Nerf-XCES.html",
          "type": "module"
        },
        "index": {
          "description": "Support for the XCES format",
          "hierarchy": "NLP Nerf XCES",
          "module": "NLP.Nerf.XCES",
          "name": "XCES",
          "package": "nerf",
          "partial": "XCES",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-XCES.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotate XCES (in a form of a tag list) with NEs with respect\n to the given NER function.\n nerXCES :: Nerf.Nerf -\u003e L.Text -\u003e L.Text\n\u003c/p\u003e",
          "module": "NLP.Nerf.XCES",
          "name": "nerXCES",
          "package": "nerf",
          "signature": "(String -\u003e NeForest NE Word) -\u003e Text -\u003e Text",
          "source": "src/NLP-Nerf-XCES.html#nerXCES",
          "type": "function"
        },
        "index": {
          "description": "Annotate XCES in form of tag list with NEs with respect to the given NER function nerXCES Nerf.Nerf L.Text L.Text",
          "hierarchy": "NLP Nerf XCES",
          "module": "NLP.Nerf.XCES",
          "name": "nerXCES",
          "normalized": "(String-\u003eNeForest NE Word)-\u003eText-\u003eText",
          "package": "nerf",
          "partial": "XCES",
          "signature": "(String-\u003eNeForest NE Word)-\u003eText-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf-XCES.html#v:nerXCES"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMain module of the Nerf tool.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "NLP.Nerf",
          "name": "Nerf",
          "package": "nerf",
          "source": "src/NLP-Nerf.html",
          "type": "module"
        },
        "index": {
          "description": "Main module of the Nerf tool",
          "hierarchy": "NLP Nerf",
          "module": "NLP.Nerf",
          "name": "Nerf",
          "package": "nerf",
          "partial": "Nerf",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Nerf consists of the observation schema configuration and the CRF model.\n\u003c/p\u003e",
          "module": "NLP.Nerf",
          "name": "Nerf",
          "package": "nerf",
          "source": "src/NLP-Nerf.html#Nerf",
          "type": "data"
        },
        "index": {
          "description": "Nerf consists of the observation schema configuration and the CRF model",
          "hierarchy": "NLP Nerf",
          "module": "NLP.Nerf",
          "name": "Nerf",
          "package": "nerf",
          "partial": "Nerf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf.html#t:Nerf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Nerf",
          "name": "Nerf",
          "package": "nerf",
          "signature": "Nerf",
          "source": "src/NLP-Nerf.html#Nerf",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Nerf",
          "module": "NLP.Nerf",
          "name": "Nerf",
          "package": "nerf",
          "partial": "Nerf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf.html#v:Nerf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Nerf",
          "name": "crf",
          "package": "nerf",
          "signature": "CRF Ob Lb",
          "source": "src/NLP-Nerf.html#Nerf",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Nerf",
          "module": "NLP.Nerf",
          "name": "crf",
          "package": "nerf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf.html#v:crf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform named entity recognition (NER) using the Nerf.\n\u003c/p\u003e",
          "module": "NLP.Nerf",
          "name": "ner",
          "package": "nerf",
          "signature": "Nerf -\u003e String -\u003e NeForest NE Word",
          "source": "src/NLP-Nerf.html#ner",
          "type": "function"
        },
        "index": {
          "description": "Perform named entity recognition NER using the Nerf",
          "hierarchy": "NLP Nerf",
          "module": "NLP.Nerf",
          "name": "ner",
          "normalized": "Nerf-\u003eString-\u003eNeForest NE Word",
          "package": "nerf",
          "signature": "Nerf-\u003eString-\u003eNeForest NE Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf.html#v:ner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "NLP.Nerf",
          "name": "schemaConf",
          "package": "nerf",
          "signature": "SchemaConf",
          "source": "src/NLP-Nerf.html#Nerf",
          "type": "function"
        },
        "index": {
          "hierarchy": "NLP Nerf",
          "module": "NLP.Nerf",
          "name": "schemaConf",
          "package": "nerf",
          "partial": "Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf.html#v:schemaConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrain Nerf on the input data using the SGD method.\n\u003c/p\u003e",
          "module": "NLP.Nerf",
          "name": "train",
          "package": "nerf",
          "signature": "SgdArgs-\u003e SchemaConf-\u003e FilePath-\u003e Maybe FilePath-\u003e IO Nerf",
          "type": "function"
        },
        "index": {
          "description": "Train Nerf on the input data using the SGD method",
          "hierarchy": "NLP Nerf",
          "module": "NLP.Nerf",
          "name": "train",
          "normalized": "SgdArgs-\u003eSchemaConf-\u003eFilePath-\u003eMaybe FilePath-\u003eIO Nerf",
          "package": "nerf",
          "signature": "SgdArgs-\u003eSchemaConf-\u003eFilePath-\u003eMaybe FilePath-\u003eIO Nerf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf.html#v:train"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow results of observation extraction on the input ENAMEX file.\n\u003c/p\u003e",
          "module": "NLP.Nerf",
          "name": "tryOx",
          "package": "nerf",
          "signature": "SchemaConf -\u003e FilePath -\u003e IO ()",
          "source": "src/NLP-Nerf.html#tryOx",
          "type": "function"
        },
        "index": {
          "description": "Show results of observation extraction on the input ENAMEX file",
          "hierarchy": "NLP Nerf",
          "module": "NLP.Nerf",
          "name": "tryOx",
          "normalized": "SchemaConf-\u003eFilePath-\u003eIO()",
          "package": "nerf",
          "partial": "Ox",
          "signature": "SchemaConf-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/nerf/docs/NLP-Nerf.html#v:tryOx"
      }
    }
  ]
]