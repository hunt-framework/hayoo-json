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
        "word": "language-ecmascript-analysis"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLabel-set analysis which annotates all the statements in the script\n with their label sets according to ECMAScript specification,\n section 12.12. The result of this analysis are useful for building\n control-flow graphs.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.ECMAScript3.Analysis.LabelSet",
          "name": "LabelSet",
          "package": "language-ecmascript-analysis",
          "source": "src/Language-ECMAScript3-Analysis-LabelSet.html",
          "type": "module"
        },
        "index": {
          "description": "Label-set analysis which annotates all the statements in the script with their label sets according to ECMAScript specification section The result of this analysis are useful for building control-flow graphs",
          "hierarchy": "Language ECMAScript3 Analysis LabelSet",
          "module": "Language.ECMAScript3.Analysis.LabelSet",
          "name": "LabelSet",
          "package": "language-ecmascript-analysis",
          "partial": "Label Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript-analysis/docs/Language-ECMAScript3-Analysis-LabelSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabels are either strings (identifiers) or \u003cem\u003eempty\u003c/em\u003e (see 12.12 of\n the spec)\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Analysis.LabelSet",
          "name": "Label",
          "package": "language-ecmascript-analysis",
          "source": "src/Language-ECMAScript3-Analysis-LabelSet.html#Label",
          "type": "data"
        },
        "index": {
          "description": "Labels are either strings identifiers or empty see of the spec",
          "hierarchy": "Language ECMAScript3 Analysis LabelSet",
          "module": "Language.ECMAScript3.Analysis.LabelSet",
          "name": "Label",
          "package": "language-ecmascript-analysis",
          "partial": "Label",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript-analysis/docs/Language-ECMAScript3-Analysis-LabelSet.html#t:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Analysis.LabelSet",
          "name": "EmptyLabel",
          "package": "language-ecmascript-analysis",
          "signature": "EmptyLabel",
          "source": "src/Language-ECMAScript3-Analysis-LabelSet.html#Label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Analysis LabelSet",
          "module": "Language.ECMAScript3.Analysis.LabelSet",
          "name": "EmptyLabel",
          "package": "language-ecmascript-analysis",
          "partial": "Empty Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript-analysis/docs/Language-ECMAScript3-Analysis-LabelSet.html#v:EmptyLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Analysis.LabelSet",
          "name": "Label",
          "package": "language-ecmascript-analysis",
          "signature": "Label String",
          "source": "src/Language-ECMAScript3-Analysis-LabelSet.html#Label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Analysis LabelSet",
          "module": "Language.ECMAScript3.Analysis.LabelSet",
          "name": "Label",
          "package": "language-ecmascript-analysis",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript-analysis/docs/Language-ECMAScript3-Analysis-LabelSet.html#v:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotates statements with their label sets; example use:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet jsa = reannotate (\\a -\u003e (a, Set.empty))\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ein  annotateLabelSets jsa snd (\\labs (a, ls) -\u003e (a, labs `Set.union` ls))\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Analysis.LabelSet",
          "name": "annotateLabelSets",
          "package": "language-ecmascript-analysis",
          "signature": "(a -\u003e Set Label)-\u003e (Set Label -\u003e a -\u003e a)-\u003e JavaScript a-\u003e JavaScript a",
          "type": "function"
        },
        "index": {
          "description": "Annotates statements with their label sets example use let jsa reannotate Set.empty in annotateLabelSets jsa snd labs ls labs Set.union ls",
          "hierarchy": "Language ECMAScript3 Analysis LabelSet",
          "module": "Language.ECMAScript3.Analysis.LabelSet",
          "name": "annotateLabelSets",
          "normalized": "(a-\u003eSet Label)-\u003e(Set Label-\u003ea-\u003ea)-\u003eJavaScript a-\u003eJavaScript a",
          "package": "language-ecmascript-analysis",
          "partial": "Label Sets",
          "signature": "(a-\u003eSet Label)-\u003e(Set Label-\u003ea-\u003ea)-\u003eJavaScript a-\u003eJavaScript a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript-analysis/docs/Language-ECMAScript3-Analysis-LabelSet.html#v:annotateLabelSets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA lexical environment analysis of ECMAScript programs\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.ECMAScript3.Analysis.LexicalEnvironment",
          "name": "LexicalEnvironment",
          "package": "language-ecmascript-analysis",
          "source": "src/Language-ECMAScript3-Analysis-LexicalEnvironment.html",
          "type": "module"
        },
        "index": {
          "description": "lexical environment analysis of ECMAScript programs",
          "hierarchy": "Language ECMAScript3 Analysis LexicalEnvironment",
          "module": "Language.ECMAScript3.Analysis.LexicalEnvironment",
          "name": "LexicalEnvironment",
          "package": "language-ecmascript-analysis",
          "partial": "Lexical Environment",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript-analysis/docs/Language-ECMAScript3-Analysis-LexicalEnvironment.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe statically-determinate lexical structure of a JavaScript program.\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Analysis.LexicalEnvironment",
          "name": "EnvTree",
          "package": "language-ecmascript-analysis",
          "source": "src/Language-ECMAScript3-Analysis-LexicalEnvironment.html#EnvTree",
          "type": "data"
        },
        "index": {
          "description": "The statically-determinate lexical structure of JavaScript program",
          "hierarchy": "Language ECMAScript3 Analysis LexicalEnvironment",
          "module": "Language.ECMAScript3.Analysis.LexicalEnvironment",
          "name": "EnvTree",
          "package": "language-ecmascript-analysis",
          "partial": "Env Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript-analysis/docs/Language-ECMAScript3-Analysis-LexicalEnvironment.html#t:EnvTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Analysis.LexicalEnvironment",
          "name": "EnvTree",
          "package": "language-ecmascript-analysis",
          "signature": "EnvTree (Map String SourcePos) [EnvTree]",
          "source": "src/Language-ECMAScript3-Analysis-LexicalEnvironment.html#EnvTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Analysis LexicalEnvironment",
          "module": "Language.ECMAScript3.Analysis.LexicalEnvironment",
          "name": "EnvTree",
          "normalized": "EnvTree(Map String SourcePos)[EnvTree]",
          "package": "language-ecmascript-analysis",
          "partial": "Env Tree",
          "signature": "EnvTree(Map String SourcePos)[EnvTree]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript-analysis/docs/Language-ECMAScript3-Analysis-LexicalEnvironment.html#v:EnvTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Analysis.LexicalEnvironment",
          "name": "env",
          "package": "language-ecmascript-analysis",
          "signature": "Map String SourcePos-\u003e [Statement SourcePos]-\u003e (EnvTree, Map String SourcePos)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Analysis LexicalEnvironment",
          "module": "Language.ECMAScript3.Analysis.LexicalEnvironment",
          "name": "env",
          "normalized": "Map String SourcePos-\u003e[Statement SourcePos]-\u003e(EnvTree,Map String SourcePos)",
          "package": "language-ecmascript-analysis",
          "signature": "Map String SourcePos-\u003e[Statement SourcePos]-\u003e(EnvTree,Map String SourcePos)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript-analysis/docs/Language-ECMAScript3-Analysis-LexicalEnvironment.html#v:env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Analysis.LexicalEnvironment",
          "name": "localVars",
          "package": "language-ecmascript-analysis",
          "signature": "[Statement SourcePos] -\u003e [(String, SourcePos)]",
          "source": "src/Language-ECMAScript3-Analysis-LexicalEnvironment.html#localVars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Analysis LexicalEnvironment",
          "module": "Language.ECMAScript3.Analysis.LexicalEnvironment",
          "name": "localVars",
          "normalized": "[Statement SourcePos]-\u003e[(String,SourcePos)]",
          "package": "language-ecmascript-analysis",
          "partial": "Vars",
          "signature": "[Statement SourcePos]-\u003e[(String,SourcePos)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript-analysis/docs/Language-ECMAScript3-Analysis-LexicalEnvironment.html#v:localVars"
      }
    }
  ]
]