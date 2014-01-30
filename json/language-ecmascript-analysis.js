[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript-analysis/docs/Language-ECMAScript3-Analysis-LabelSet.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLabel-set analysis which annotates all the statements in the script\n with their label sets according to ECMAScript specification,\n section 12.12. The result of this analysis are useful for building\n control-flow graphs.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.ECMAScript3.Analysis.LabelSet",
        "fct-package": "language-ecmascript-analysis",
        "fct-signature": "module",
        "fct-source": "src/Language-ECMAScript3-Analysis-LabelSet.html",
        "fct-type": "module",
        "title": "LabelSet"
      },
      "index": {
        "description": "Label-set analysis which annotates all the statements in the script with their label sets according to ECMAScript specification section The result of this analysis are useful for building control-flow graphs",
        "hierarchy": "Language ECMAScript3 Analysis LabelSet",
        "module": "Language.ECMAScript3.Analysis.LabelSet",
        "name": "LabelSet",
        "normalized": "",
        "package": "language-ecmascript-analysis",
        "partial": "Label Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript-analysis/docs/Language-ECMAScript3-Analysis-LabelSet.html#t:Label",
      "description": {
        "fct-descr": "\u003cp\u003eLabels are either strings (identifiers) or \u003cem\u003eempty\u003c/em\u003e (see 12.12 of\n the spec)\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Analysis.LabelSet",
        "fct-package": "language-ecmascript-analysis",
        "fct-signature": "data",
        "fct-source": "src/Language-ECMAScript3-Analysis-LabelSet.html#Label",
        "fct-type": "data",
        "title": "Label"
      },
      "index": {
        "description": "Labels are either strings identifiers or empty see of the spec",
        "hierarchy": "Language ECMAScript3 Analysis LabelSet",
        "module": "Language.ECMAScript3.Analysis.LabelSet",
        "name": "Label",
        "normalized": "",
        "package": "language-ecmascript-analysis",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript-analysis/docs/Language-ECMAScript3-Analysis-LabelSet.html#v:EmptyLabel",
      "description": {
        "fct-module": "Language.ECMAScript3.Analysis.LabelSet",
        "fct-package": "language-ecmascript-analysis",
        "fct-signature": "EmptyLabel",
        "fct-source": "src/Language-ECMAScript3-Analysis-LabelSet.html#Label",
        "fct-type": "function",
        "title": "EmptyLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Analysis LabelSet",
        "module": "Language.ECMAScript3.Analysis.LabelSet",
        "name": "EmptyLabel",
        "normalized": "",
        "package": "language-ecmascript-analysis",
        "partial": "Empty Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript-analysis/docs/Language-ECMAScript3-Analysis-LabelSet.html#v:Label",
      "description": {
        "fct-module": "Language.ECMAScript3.Analysis.LabelSet",
        "fct-package": "language-ecmascript-analysis",
        "fct-signature": "Label String",
        "fct-source": "src/Language-ECMAScript3-Analysis-LabelSet.html#Label",
        "fct-type": "function",
        "title": "Label"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Analysis LabelSet",
        "module": "Language.ECMAScript3.Analysis.LabelSet",
        "name": "Label",
        "normalized": "",
        "package": "language-ecmascript-analysis",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript-analysis/docs/Language-ECMAScript3-Analysis-LabelSet.html#v:annotateLabelSets",
      "description": {
        "fct-descr": "\u003cp\u003eAnnotates statements with their label sets; example use:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet jsa = reannotate (\\a -\u003e (a, Set.empty))\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ein  annotateLabelSets jsa snd (\\labs (a, ls) -\u003e (a, labs `Set.union` ls))\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Analysis.LabelSet",
        "fct-package": "language-ecmascript-analysis",
        "fct-signature": "(a -\u003e Set Label)-\u003e (Set Label -\u003e a -\u003e a)-\u003e JavaScript a-\u003e JavaScript a",
        "fct-type": "function",
        "title": "annotateLabelSets"
      },
      "index": {
        "description": "Annotates statements with their label sets example use let jsa reannotate Set.empty in annotateLabelSets jsa snd labs ls labs Set.union ls",
        "hierarchy": "Language ECMAScript3 Analysis LabelSet",
        "module": "Language.ECMAScript3.Analysis.LabelSet",
        "name": "annotateLabelSets",
        "normalized": "(a-\u003eSet Label)-\u003e(Set Label-\u003ea-\u003ea)-\u003eJavaScript a-\u003eJavaScript a",
        "package": "language-ecmascript-analysis",
        "partial": "Label Sets",
        "signature": "(a-\u003eSet Label)-\u003e(Set Label-\u003ea-\u003ea)-\u003eJavaScript a-\u003eJavaScript a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript-analysis/docs/Language-ECMAScript3-Analysis-LexicalEnvironment.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA lexical environment analysis of ECMAScript programs\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.ECMAScript3.Analysis.LexicalEnvironment",
        "fct-package": "language-ecmascript-analysis",
        "fct-signature": "module",
        "fct-source": "src/Language-ECMAScript3-Analysis-LexicalEnvironment.html",
        "fct-type": "module",
        "title": "LexicalEnvironment"
      },
      "index": {
        "description": "lexical environment analysis of ECMAScript programs",
        "hierarchy": "Language ECMAScript3 Analysis LexicalEnvironment",
        "module": "Language.ECMAScript3.Analysis.LexicalEnvironment",
        "name": "LexicalEnvironment",
        "normalized": "",
        "package": "language-ecmascript-analysis",
        "partial": "Lexical Environment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript-analysis/docs/Language-ECMAScript3-Analysis-LexicalEnvironment.html#t:EnvTree",
      "description": {
        "fct-descr": "\u003cp\u003eThe statically-determinate lexical structure of a JavaScript program.\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Analysis.LexicalEnvironment",
        "fct-package": "language-ecmascript-analysis",
        "fct-signature": "data",
        "fct-source": "src/Language-ECMAScript3-Analysis-LexicalEnvironment.html#EnvTree",
        "fct-type": "data",
        "title": "EnvTree"
      },
      "index": {
        "description": "The statically-determinate lexical structure of JavaScript program",
        "hierarchy": "Language ECMAScript3 Analysis LexicalEnvironment",
        "module": "Language.ECMAScript3.Analysis.LexicalEnvironment",
        "name": "EnvTree",
        "normalized": "",
        "package": "language-ecmascript-analysis",
        "partial": "Env Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript-analysis/docs/Language-ECMAScript3-Analysis-LexicalEnvironment.html#v:EnvTree",
      "description": {
        "fct-module": "Language.ECMAScript3.Analysis.LexicalEnvironment",
        "fct-package": "language-ecmascript-analysis",
        "fct-signature": "EnvTree (Map String SourcePos) [EnvTree]",
        "fct-source": "src/Language-ECMAScript3-Analysis-LexicalEnvironment.html#EnvTree",
        "fct-type": "function",
        "title": "EnvTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Analysis LexicalEnvironment",
        "module": "Language.ECMAScript3.Analysis.LexicalEnvironment",
        "name": "EnvTree",
        "normalized": "EnvTree(Map String SourcePos)[EnvTree]",
        "package": "language-ecmascript-analysis",
        "partial": "Env Tree",
        "signature": "EnvTree(Map String SourcePos)[EnvTree]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript-analysis/docs/Language-ECMAScript3-Analysis-LexicalEnvironment.html#v:env",
      "description": {
        "fct-module": "Language.ECMAScript3.Analysis.LexicalEnvironment",
        "fct-package": "language-ecmascript-analysis",
        "fct-signature": "Map String SourcePos-\u003e [Statement SourcePos]-\u003e (EnvTree, Map String SourcePos)",
        "fct-type": "function",
        "title": "env"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Analysis LexicalEnvironment",
        "module": "Language.ECMAScript3.Analysis.LexicalEnvironment",
        "name": "env",
        "normalized": "Map String SourcePos-\u003e[Statement SourcePos]-\u003e(EnvTree,Map String SourcePos)",
        "package": "language-ecmascript-analysis",
        "partial": "",
        "signature": "Map String SourcePos-\u003e[Statement SourcePos]-\u003e(EnvTree,Map String SourcePos)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript-analysis/docs/Language-ECMAScript3-Analysis-LexicalEnvironment.html#v:localVars",
      "description": {
        "fct-module": "Language.ECMAScript3.Analysis.LexicalEnvironment",
        "fct-package": "language-ecmascript-analysis",
        "fct-signature": "[Statement SourcePos] -\u003e [(String, SourcePos)]",
        "fct-source": "src/Language-ECMAScript3-Analysis-LexicalEnvironment.html#localVars",
        "fct-type": "function",
        "title": "localVars"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Analysis LexicalEnvironment",
        "module": "Language.ECMAScript3.Analysis.LexicalEnvironment",
        "name": "localVars",
        "normalized": "[Statement SourcePos]-\u003e[(String,SourcePos)]",
        "package": "language-ecmascript-analysis",
        "partial": "Vars",
        "signature": "[Statement SourcePos]-\u003e[(String,SourcePos)]"
      }
    }
  }
]