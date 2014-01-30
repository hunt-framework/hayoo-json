[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Analysis-Environment.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003eLexicalEnvironment\u003c/a\u003e\u003c/code\u003e from package 'language-ecmascript-analysis'\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eA lexical environment analysis of ECMAScript programs\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.ECMAScript3.Analysis.Environment",
        "fct-package": "language-ecmascript",
        "fct-signature": "module",
        "fct-source": "src/Language-ECMAScript3-Analysis-Environment.html",
        "fct-type": "module",
        "title": "Environment"
      },
      "index": {
        "description": "Deprecated Use LexicalEnvironment from package language-ecmascript-analysis lexical environment analysis of ECMAScript programs",
        "hierarchy": "Language ECMAScript3 Analysis Environment",
        "module": "Language.ECMAScript3.Analysis.Environment",
        "name": "Environment",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Environment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Analysis-Environment.html#t:EnvTree",
      "description": {
        "fct-descr": "\u003cp\u003eThe statically-determinate lexical structure of a JavaScript program.\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Analysis.Environment",
        "fct-package": "language-ecmascript",
        "fct-signature": "data",
        "fct-source": "src/Language-ECMAScript3-Analysis-Environment.html#EnvTree",
        "fct-type": "data",
        "title": "EnvTree"
      },
      "index": {
        "description": "The statically-determinate lexical structure of JavaScript program",
        "hierarchy": "Language ECMAScript3 Analysis Environment",
        "module": "Language.ECMAScript3.Analysis.Environment",
        "name": "EnvTree",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Env Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Analysis-Environment.html#v:EnvTree",
      "description": {
        "fct-module": "Language.ECMAScript3.Analysis.Environment",
        "fct-package": "language-ecmascript",
        "fct-signature": "EnvTree (Map String SourcePos) [EnvTree]",
        "fct-source": "src/Language-ECMAScript3-Analysis-Environment.html#EnvTree",
        "fct-type": "function",
        "title": "EnvTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Analysis Environment",
        "module": "Language.ECMAScript3.Analysis.Environment",
        "name": "EnvTree",
        "normalized": "EnvTree(Map String SourcePos)[EnvTree]",
        "package": "language-ecmascript",
        "partial": "Env Tree",
        "signature": "EnvTree(Map String SourcePos)[EnvTree]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Analysis-Environment.html#v:env",
      "description": {
        "fct-module": "Language.ECMAScript3.Analysis.Environment",
        "fct-package": "language-ecmascript",
        "fct-signature": "Map String SourcePos-\u003e [Statement SourcePos]-\u003e (EnvTree, Map String SourcePos)",
        "fct-type": "function",
        "title": "env"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Analysis Environment",
        "module": "Language.ECMAScript3.Analysis.Environment",
        "name": "env",
        "normalized": "Map String SourcePos-\u003e[Statement SourcePos]-\u003e(EnvTree,Map String SourcePos)",
        "package": "language-ecmascript",
        "partial": "",
        "signature": "Map String SourcePos-\u003e[Statement SourcePos]-\u003e(EnvTree,Map String SourcePos)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Analysis-Environment.html#v:localVars",
      "description": {
        "fct-module": "Language.ECMAScript3.Analysis.Environment",
        "fct-package": "language-ecmascript",
        "fct-signature": "[Statement SourcePos] -\u003e [(String, SourcePos)]",
        "fct-source": "src/Language-ECMAScript3-Analysis-Environment.html#localVars",
        "fct-type": "function",
        "title": "localVars"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Analysis Environment",
        "module": "Language.ECMAScript3.Analysis.Environment",
        "name": "localVars",
        "normalized": "[Statement SourcePos]-\u003e[(String,SourcePos)]",
        "package": "language-ecmascript",
        "partial": "Vars",
        "signature": "[Statement SourcePos]-\u003e[(String,SourcePos)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Analysis-LabelSets.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003eLabelSet\u003c/a\u003e\u003c/code\u003e from package 'language-ecmascript-analysis'\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eLabel-set analysis which annotates all the statements in the script\n with their label sets according to ECMAScript specification,\n section 12.12. The result of this analysis are useful for building\n control-flow graphs.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.ECMAScript3.Analysis.LabelSets",
        "fct-package": "language-ecmascript",
        "fct-signature": "module",
        "fct-source": "src/Language-ECMAScript3-Analysis-LabelSets.html",
        "fct-type": "module",
        "title": "LabelSets"
      },
      "index": {
        "description": "Deprecated Use LabelSet from package language-ecmascript-analysis Label-set analysis which annotates all the statements in the script with their label sets according to ECMAScript specification section The result of this analysis are useful for building control-flow graphs",
        "hierarchy": "Language ECMAScript3 Analysis LabelSets",
        "module": "Language.ECMAScript3.Analysis.LabelSets",
        "name": "LabelSets",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Label Sets",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Analysis-LabelSets.html#t:Label",
      "description": {
        "fct-descr": "\u003cp\u003eLabels are either strings (identifiers) or \u003cem\u003eempty\u003c/em\u003e (see 12.12 of\n the spec)\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Analysis.LabelSets",
        "fct-package": "language-ecmascript",
        "fct-signature": "data",
        "fct-source": "src/Language-ECMAScript3-Analysis-LabelSets.html#Label",
        "fct-type": "data",
        "title": "Label"
      },
      "index": {
        "description": "Labels are either strings identifiers or empty see of the spec",
        "hierarchy": "Language ECMAScript3 Analysis LabelSets",
        "module": "Language.ECMAScript3.Analysis.LabelSets",
        "name": "Label",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Analysis-LabelSets.html#v:EmptyLabel",
      "description": {
        "fct-module": "Language.ECMAScript3.Analysis.LabelSets",
        "fct-package": "language-ecmascript",
        "fct-signature": "EmptyLabel",
        "fct-source": "src/Language-ECMAScript3-Analysis-LabelSets.html#Label",
        "fct-type": "function",
        "title": "EmptyLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Analysis LabelSets",
        "module": "Language.ECMAScript3.Analysis.LabelSets",
        "name": "EmptyLabel",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Empty Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Analysis-LabelSets.html#v:Label",
      "description": {
        "fct-module": "Language.ECMAScript3.Analysis.LabelSets",
        "fct-package": "language-ecmascript",
        "fct-signature": "Label String",
        "fct-source": "src/Language-ECMAScript3-Analysis-LabelSets.html#Label",
        "fct-type": "function",
        "title": "Label"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Analysis LabelSets",
        "module": "Language.ECMAScript3.Analysis.LabelSets",
        "name": "Label",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Analysis-LabelSets.html#v:annotateLabelSets",
      "description": {
        "fct-descr": "\u003cp\u003eAnnotates statements with their label sets; example use:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet jsa = reannotate (\\a -\u003e (a, Set.empty))\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ein  annotateLabelSets jsa snd (\\labs (a, ls) -\u003e (a, labs `Set.union` ls))\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Analysis.LabelSets",
        "fct-package": "language-ecmascript",
        "fct-signature": "(a -\u003e Set Label)-\u003e (Set Label -\u003e a -\u003e a)-\u003e JavaScript a-\u003e JavaScript a",
        "fct-type": "function",
        "title": "annotateLabelSets"
      },
      "index": {
        "description": "Annotates statements with their label sets example use let jsa reannotate Set.empty in annotateLabelSets jsa snd labs ls labs Set.union ls",
        "hierarchy": "Language ECMAScript3 Analysis LabelSets",
        "module": "Language.ECMAScript3.Analysis.LabelSets",
        "name": "annotateLabelSets",
        "normalized": "(a-\u003eSet Label)-\u003e(Set Label-\u003ea-\u003ea)-\u003eJavaScript a-\u003eJavaScript a",
        "package": "language-ecmascript",
        "partial": "Label Sets",
        "signature": "(a-\u003eSet Label)-\u003e(Set Label-\u003ea-\u003ea)-\u003eJavaScript a-\u003eJavaScript a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis isn't a lexer in the sense that it provides a JavaScript\n token-stream. This module provides character-parsers for various\n JavaScript tokens.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.ECMAScript3.Lexer",
        "fct-package": "language-ecmascript",
        "fct-signature": "module",
        "fct-source": "src/Language-ECMAScript3-Lexer.html",
        "fct-type": "module",
        "title": "Lexer"
      },
      "index": {
        "description": "This isn lexer in the sense that it provides JavaScript token-stream This module provides character-parsers for various JavaScript tokens",
        "hierarchy": "Language ECMAScript3 Lexer",
        "module": "Language.ECMAScript3.Lexer",
        "name": "Lexer",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Lexer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:braces",
      "description": {
        "fct-module": "Language.ECMAScript3.Lexer",
        "fct-package": "language-ecmascript",
        "fct-signature": "Parser s a -\u003e Parser s a",
        "fct-source": "src/Language-ECMAScript3-Lexer.html#braces",
        "fct-type": "function",
        "title": "braces"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Lexer",
        "module": "Language.ECMAScript3.Lexer",
        "name": "braces",
        "normalized": "Parser a b-\u003eParser a b",
        "package": "language-ecmascript",
        "partial": "",
        "signature": "Parser s a-\u003eParser s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:brackets",
      "description": {
        "fct-module": "Language.ECMAScript3.Lexer",
        "fct-package": "language-ecmascript",
        "fct-signature": "Parser s a -\u003e Parser s a",
        "fct-source": "src/Language-ECMAScript3-Lexer.html#brackets",
        "fct-type": "function",
        "title": "brackets"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Lexer",
        "module": "Language.ECMAScript3.Lexer",
        "name": "brackets",
        "normalized": "Parser a b-\u003eParser a b",
        "package": "language-ecmascript",
        "partial": "",
        "signature": "Parser s a-\u003eParser s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:charLiteral",
      "description": {
        "fct-module": "Language.ECMAScript3.Lexer",
        "fct-package": "language-ecmascript",
        "fct-signature": "Parser s Char",
        "fct-source": "src/Language-ECMAScript3-Lexer.html#charLiteral",
        "fct-type": "function",
        "title": "charLiteral"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Lexer",
        "module": "Language.ECMAScript3.Lexer",
        "name": "charLiteral",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Literal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:colon",
      "description": {
        "fct-module": "Language.ECMAScript3.Lexer",
        "fct-package": "language-ecmascript",
        "fct-signature": "Parser s String",
        "fct-source": "src/Language-ECMAScript3-Lexer.html#colon",
        "fct-type": "function",
        "title": "colon"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Lexer",
        "module": "Language.ECMAScript3.Lexer",
        "name": "colon",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:comma",
      "description": {
        "fct-module": "Language.ECMAScript3.Lexer",
        "fct-package": "language-ecmascript",
        "fct-signature": "Parser s String",
        "fct-source": "src/Language-ECMAScript3-Lexer.html#comma",
        "fct-type": "function",
        "title": "comma"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Lexer",
        "module": "Language.ECMAScript3.Lexer",
        "name": "comma",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:decDigits",
      "description": {
        "fct-module": "Language.ECMAScript3.Lexer",
        "fct-package": "language-ecmascript",
        "fct-signature": "Parser s String",
        "fct-source": "src/Language-ECMAScript3-Lexer.html#decDigits",
        "fct-type": "function",
        "title": "decDigits"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Lexer",
        "module": "Language.ECMAScript3.Lexer",
        "name": "decDigits",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Digits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:decDigitsOpt",
      "description": {
        "fct-module": "Language.ECMAScript3.Lexer",
        "fct-package": "language-ecmascript",
        "fct-signature": "Parser s String",
        "fct-source": "src/Language-ECMAScript3-Lexer.html#decDigitsOpt",
        "fct-type": "function",
        "title": "decDigitsOpt"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Lexer",
        "module": "Language.ECMAScript3.Lexer",
        "name": "decDigitsOpt",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Digits Opt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:decIntLit",
      "description": {
        "fct-module": "Language.ECMAScript3.Lexer",
        "fct-package": "language-ecmascript",
        "fct-signature": "Parser s String",
        "fct-source": "src/Language-ECMAScript3-Lexer.html#decIntLit",
        "fct-type": "function",
        "title": "decIntLit"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Lexer",
        "module": "Language.ECMAScript3.Lexer",
        "name": "decIntLit",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Int Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:decLit",
      "description": {
        "fct-descr": "\u003cp\u003ereturns (s, True) if the number is an integer, an (s, False)\n otherwise\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Lexer",
        "fct-package": "language-ecmascript",
        "fct-signature": "Parser s (String, Bool)",
        "fct-source": "src/Language-ECMAScript3-Lexer.html#decLit",
        "fct-type": "function",
        "title": "decLit"
      },
      "index": {
        "description": "returns True if the number is an integer an False otherwise",
        "hierarchy": "Language ECMAScript3 Lexer",
        "module": "Language.ECMAScript3.Lexer",
        "name": "decLit",
        "normalized": "Parser a(String,Bool)",
        "package": "language-ecmascript",
        "partial": "Lit",
        "signature": "Parser s(String,Bool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:dot",
      "description": {
        "fct-module": "Language.ECMAScript3.Lexer",
        "fct-package": "language-ecmascript",
        "fct-signature": "Parser s String",
        "fct-source": "src/Language-ECMAScript3-Lexer.html#dot",
        "fct-type": "function",
        "title": "dot"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Lexer",
        "module": "Language.ECMAScript3.Lexer",
        "name": "dot",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:exponentPart",
      "description": {
        "fct-module": "Language.ECMAScript3.Lexer",
        "fct-package": "language-ecmascript",
        "fct-signature": "Parser s String",
        "fct-source": "src/Language-ECMAScript3-Lexer.html#exponentPart",
        "fct-type": "function",
        "title": "exponentPart"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Lexer",
        "module": "Language.ECMAScript3.Lexer",
        "name": "exponentPart",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Part",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:hexIntLit",
      "description": {
        "fct-module": "Language.ECMAScript3.Lexer",
        "fct-package": "language-ecmascript",
        "fct-signature": "Parser s String",
        "fct-source": "src/Language-ECMAScript3-Lexer.html#hexIntLit",
        "fct-type": "function",
        "title": "hexIntLit"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Lexer",
        "module": "Language.ECMAScript3.Lexer",
        "name": "hexIntLit",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Int Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:identifier",
      "description": {
        "fct-module": "Language.ECMAScript3.Lexer",
        "fct-package": "language-ecmascript",
        "fct-signature": "Parser s String",
        "fct-source": "src/Language-ECMAScript3-Lexer.html#identifier",
        "fct-type": "function",
        "title": "identifier"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Lexer",
        "module": "Language.ECMAScript3.Lexer",
        "name": "identifier",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:identifierStart",
      "description": {
        "fct-module": "Language.ECMAScript3.Lexer",
        "fct-package": "language-ecmascript",
        "fct-signature": "Parser s Char",
        "fct-source": "src/Language-ECMAScript3-Lexer.html#identifierStart",
        "fct-type": "function",
        "title": "identifierStart"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Lexer",
        "module": "Language.ECMAScript3.Lexer",
        "name": "identifierStart",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Start",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:lexeme",
      "description": {
        "fct-module": "Language.ECMAScript3.Lexer",
        "fct-package": "language-ecmascript",
        "fct-signature": "Parser s a -\u003e Parser s a",
        "fct-source": "src/Language-ECMAScript3-Lexer.html#lexeme",
        "fct-type": "function",
        "title": "lexeme"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Lexer",
        "module": "Language.ECMAScript3.Lexer",
        "name": "lexeme",
        "normalized": "Parser a b-\u003eParser a b",
        "package": "language-ecmascript",
        "partial": "",
        "signature": "Parser s a-\u003eParser s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:operator",
      "description": {
        "fct-module": "Language.ECMAScript3.Lexer",
        "fct-package": "language-ecmascript",
        "fct-signature": "Parser s String",
        "fct-source": "src/Language-ECMAScript3-Lexer.html#operator",
        "fct-type": "function",
        "title": "operator"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Lexer",
        "module": "Language.ECMAScript3.Lexer",
        "name": "operator",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:parens",
      "description": {
        "fct-module": "Language.ECMAScript3.Lexer",
        "fct-package": "language-ecmascript",
        "fct-signature": "Parser s a -\u003e Parser s a",
        "fct-source": "src/Language-ECMAScript3-Lexer.html#parens",
        "fct-type": "function",
        "title": "parens"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Lexer",
        "module": "Language.ECMAScript3.Lexer",
        "name": "parens",
        "normalized": "Parser a b-\u003eParser a b",
        "package": "language-ecmascript",
        "partial": "",
        "signature": "Parser s a-\u003eParser s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:reserved",
      "description": {
        "fct-module": "Language.ECMAScript3.Lexer",
        "fct-package": "language-ecmascript",
        "fct-signature": "String -\u003e Parser s ()",
        "fct-source": "src/Language-ECMAScript3-Lexer.html#reserved",
        "fct-type": "function",
        "title": "reserved"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Lexer",
        "module": "Language.ECMAScript3.Lexer",
        "name": "reserved",
        "normalized": "String-\u003eParser a()",
        "package": "language-ecmascript",
        "partial": "",
        "signature": "String-\u003eParser s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:reservedOp",
      "description": {
        "fct-module": "Language.ECMAScript3.Lexer",
        "fct-package": "language-ecmascript",
        "fct-signature": "String -\u003e Parser s ()",
        "fct-source": "src/Language-ECMAScript3-Lexer.html#reservedOp",
        "fct-type": "function",
        "title": "reservedOp"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Lexer",
        "module": "Language.ECMAScript3.Lexer",
        "name": "reservedOp",
        "normalized": "String-\u003eParser a()",
        "package": "language-ecmascript",
        "partial": "Op",
        "signature": "String-\u003eParser s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:semi",
      "description": {
        "fct-module": "Language.ECMAScript3.Lexer",
        "fct-package": "language-ecmascript",
        "fct-signature": "Parser s String",
        "fct-source": "src/Language-ECMAScript3-Lexer.html#semi",
        "fct-type": "function",
        "title": "semi"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Lexer",
        "module": "Language.ECMAScript3.Lexer",
        "name": "semi",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:squares",
      "description": {
        "fct-module": "Language.ECMAScript3.Lexer",
        "fct-package": "language-ecmascript",
        "fct-signature": "Parser s a -\u003e Parser s a",
        "fct-source": "src/Language-ECMAScript3-Lexer.html#squares",
        "fct-type": "function",
        "title": "squares"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Lexer",
        "module": "Language.ECMAScript3.Lexer",
        "name": "squares",
        "normalized": "Parser a b-\u003eParser a b",
        "package": "language-ecmascript",
        "partial": "",
        "signature": "Parser s a-\u003eParser s a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:stringLiteral",
      "description": {
        "fct-module": "Language.ECMAScript3.Lexer",
        "fct-package": "language-ecmascript",
        "fct-signature": "Parser s String",
        "fct-source": "src/Language-ECMAScript3-Lexer.html#stringLiteral",
        "fct-type": "function",
        "title": "stringLiteral"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Lexer",
        "module": "Language.ECMAScript3.Lexer",
        "name": "stringLiteral",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Literal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:symbol",
      "description": {
        "fct-module": "Language.ECMAScript3.Lexer",
        "fct-package": "language-ecmascript",
        "fct-signature": "String -\u003e Parser s String",
        "fct-source": "src/Language-ECMAScript3-Lexer.html#symbol",
        "fct-type": "function",
        "title": "symbol"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Lexer",
        "module": "Language.ECMAScript3.Lexer",
        "name": "symbol",
        "normalized": "String-\u003eParser a String",
        "package": "language-ecmascript",
        "partial": "",
        "signature": "String-\u003eParser s String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:whiteSpace",
      "description": {
        "fct-module": "Language.ECMAScript3.Lexer",
        "fct-package": "language-ecmascript",
        "fct-signature": "Parser s ()",
        "fct-source": "src/Language-ECMAScript3-Lexer.html#whiteSpace",
        "fct-type": "function",
        "title": "whiteSpace"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Lexer",
        "module": "Language.ECMAScript3.Lexer",
        "name": "whiteSpace",
        "normalized": "Parser a()",
        "package": "language-ecmascript",
        "partial": "Space",
        "signature": "Parser s()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParser for ECMAScript 3.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.ECMAScript3.Parser",
        "fct-package": "language-ecmascript",
        "fct-signature": "module",
        "fct-source": "src/Language-ECMAScript3-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "Parser for ECMAScript",
        "hierarchy": "Language ECMAScript3 Parser",
        "module": "Language.ECMAScript3.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#t:ExpressionParser",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: These type aliases will be hidden in the next version\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.ECMAScript3.Parser",
        "fct-package": "language-ecmascript",
        "fct-signature": "type",
        "fct-source": "src/Language-ECMAScript3-Parser.html#ExpressionParser",
        "fct-type": "type",
        "title": "ExpressionParser"
      },
      "index": {
        "description": "Deprecated These type aliases will be hidden in the next version",
        "hierarchy": "Language ECMAScript3 Parser",
        "module": "Language.ECMAScript3.Parser",
        "name": "ExpressionParser",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Expression Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#t:ParsedExpression",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: These type aliases will be hidden in the next version\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.ECMAScript3.Parser",
        "fct-package": "language-ecmascript",
        "fct-signature": "type",
        "fct-source": "src/Language-ECMAScript3-Parser.html#ParsedExpression",
        "fct-type": "type",
        "title": "ParsedExpression"
      },
      "index": {
        "description": "Deprecated These type aliases will be hidden in the next version",
        "hierarchy": "Language ECMAScript3 Parser",
        "module": "Language.ECMAScript3.Parser",
        "name": "ParsedExpression",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Parsed Expression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#t:ParsedStatement",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: These type aliases will be hidden in the next version\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.ECMAScript3.Parser",
        "fct-package": "language-ecmascript",
        "fct-signature": "type",
        "fct-source": "src/Language-ECMAScript3-Parser.html#ParsedStatement",
        "fct-type": "type",
        "title": "ParsedStatement"
      },
      "index": {
        "description": "Deprecated These type aliases will be hidden in the next version",
        "hierarchy": "Language ECMAScript3 Parser",
        "module": "Language.ECMAScript3.Parser",
        "name": "ParsedStatement",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Parsed Statement",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#t:Parser",
      "description": {
        "fct-descr": "\u003cp\u003eThe parser type, parametrised by the stream type \u003ccode\u003es\u003c/code\u003e and the\n return value \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Parser",
        "fct-package": "language-ecmascript",
        "fct-signature": "type",
        "fct-source": "src/Language-ECMAScript3-Parser-Type.html#Parser",
        "fct-type": "type",
        "title": "Parser"
      },
      "index": {
        "description": "The parser type parametrised by the stream type and the return value",
        "hierarchy": "Language ECMAScript3 Parser",
        "module": "Language.ECMAScript3.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#t:StatementParser",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: These type aliases will be hidden in the next version\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.ECMAScript3.Parser",
        "fct-package": "language-ecmascript",
        "fct-signature": "type",
        "fct-source": "src/Language-ECMAScript3-Parser.html#StatementParser",
        "fct-type": "type",
        "title": "StatementParser"
      },
      "index": {
        "description": "Deprecated These type aliases will be hidden in the next version",
        "hierarchy": "Language ECMAScript3 Parser",
        "module": "Language.ECMAScript3.Parser",
        "name": "StatementParser",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Statement Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:assignExpr",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003eexpression\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.ECMAScript3.Parser",
        "fct-package": "language-ecmascript",
        "fct-signature": "ExpressionParser s",
        "fct-source": "src/Language-ECMAScript3-Parser.html#assignExpr",
        "fct-type": "function",
        "title": "assignExpr"
      },
      "index": {
        "description": "Deprecated Use expression instead",
        "hierarchy": "Language ECMAScript3 Parser",
        "module": "Language.ECMAScript3.Parser",
        "name": "assignExpr",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:expression",
      "description": {
        "fct-descr": "\u003cp\u003eA parser that parses ECMAScript expressions\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Parser",
        "fct-package": "language-ecmascript",
        "fct-signature": "Parser s (Expression SourcePos)",
        "fct-source": "src/Language-ECMAScript3-Parser.html#expression",
        "fct-type": "function",
        "title": "expression"
      },
      "index": {
        "description": "parser that parses ECMAScript expressions",
        "hierarchy": "Language ECMAScript3 Parser",
        "module": "Language.ECMAScript3.Parser",
        "name": "expression",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:parse",
      "description": {
        "fct-descr": "\u003cp\u003eParse from a stream given a parser, same as \u003ccode\u003e\u003ca\u003eparse\u003c/a\u003e\u003c/code\u003e\n in Parsec. We can use this to parse expressions or statements alone,\n not just whole programs.\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Parser",
        "fct-package": "language-ecmascript",
        "fct-signature": "Parser s a-\u003e SourceName-\u003e s-\u003e Either ParseError a",
        "fct-type": "function",
        "title": "parse"
      },
      "index": {
        "description": "Parse from stream given parser same as parse in Parsec We can use this to parse expressions or statements alone not just whole programs",
        "hierarchy": "Language ECMAScript3 Parser",
        "module": "Language.ECMAScript3.Parser",
        "name": "parse",
        "normalized": "Parser a b-\u003eSourceName-\u003ea-\u003eEither ParseError b",
        "package": "language-ecmascript",
        "partial": "",
        "signature": "Parser s a-\u003eSourceName-\u003es-\u003eEither ParseError a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:parseBlockStmt",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: These parsers will be hidden in the next version\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.ECMAScript3.Parser",
        "fct-package": "language-ecmascript",
        "fct-signature": "StatementParser s",
        "fct-source": "src/Language-ECMAScript3-Parser.html#parseBlockStmt",
        "fct-type": "function",
        "title": "parseBlockStmt"
      },
      "index": {
        "description": "Deprecated These parsers will be hidden in the next version",
        "hierarchy": "Language ECMAScript3 Parser",
        "module": "Language.ECMAScript3.Parser",
        "name": "parseBlockStmt",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Block Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:parseExpression",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003eexpression\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.ECMAScript3.Parser",
        "fct-package": "language-ecmascript",
        "fct-signature": "ExpressionParser s",
        "fct-source": "src/Language-ECMAScript3-Parser.html#parseExpression",
        "fct-type": "function",
        "title": "parseExpression"
      },
      "index": {
        "description": "Deprecated Use expression instead",
        "hierarchy": "Language ECMAScript3 Parser",
        "module": "Language.ECMAScript3.Parser",
        "name": "parseExpression",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Expression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:parseFromFile",
      "description": {
        "fct-descr": "\u003cp\u003eA convenience function that takes a filename and tries to parse\n the file contents an ECMAScript program, it fails with an error\n message if it can't.\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Parser",
        "fct-package": "language-ecmascript",
        "fct-signature": "String-\u003e m (JavaScript SourcePos)",
        "fct-type": "function",
        "title": "parseFromFile"
      },
      "index": {
        "description": "convenience function that takes filename and tries to parse the file contents an ECMAScript program it fails with an error message if it can",
        "hierarchy": "Language ECMAScript3 Parser",
        "module": "Language.ECMAScript3.Parser",
        "name": "parseFromFile",
        "normalized": "String-\u003ea(JavaScript SourcePos)",
        "package": "language-ecmascript",
        "partial": "From File",
        "signature": "String-\u003em(JavaScript SourcePos)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:parseFromString",
      "description": {
        "fct-descr": "\u003cp\u003eA convenience function that takes a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and tries to parse\n it as an ECMAScript program:\n\u003c/p\u003e\u003cpre\u003e parseFromString = parse program \"\"\n\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Parser",
        "fct-package": "language-ecmascript",
        "fct-signature": "String-\u003e Either ParseError (JavaScript SourcePos)",
        "fct-type": "function",
        "title": "parseFromString"
      },
      "index": {
        "description": "convenience function that takes String and tries to parse it as an ECMAScript program parseFromString parse program",
        "hierarchy": "Language ECMAScript3 Parser",
        "module": "Language.ECMAScript3.Parser",
        "name": "parseFromString",
        "normalized": "String-\u003eEither ParseError(JavaScript SourcePos)",
        "package": "language-ecmascript",
        "partial": "From String",
        "signature": "String-\u003eEither ParseError(JavaScript SourcePos)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:parseJavaScriptFromFile",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003eparseFromFile\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eRead a JavaScript program from file an parse it into a list of\n statements\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Parser",
        "fct-package": "language-ecmascript",
        "fct-signature": "String-\u003e m [Statement SourcePos]",
        "fct-type": "function",
        "title": "parseJavaScriptFromFile"
      },
      "index": {
        "description": "Deprecated Use parseFromFile instead Read JavaScript program from file an parse it into list of statements",
        "hierarchy": "Language ECMAScript3 Parser",
        "module": "Language.ECMAScript3.Parser",
        "name": "parseJavaScriptFromFile",
        "normalized": "String-\u003ea[Statement SourcePos]",
        "package": "language-ecmascript",
        "partial": "Java Script From File",
        "signature": "String-\u003em[Statement SourcePos]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:parseObjectLit",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: These parsers will be hidden in the next version\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.ECMAScript3.Parser",
        "fct-package": "language-ecmascript",
        "fct-signature": "ExpressionParser s",
        "fct-source": "src/Language-ECMAScript3-Parser.html#parseObjectLit",
        "fct-type": "function",
        "title": "parseObjectLit"
      },
      "index": {
        "description": "Deprecated These parsers will be hidden in the next version",
        "hierarchy": "Language ECMAScript3 Parser",
        "module": "Language.ECMAScript3.Parser",
        "name": "parseObjectLit",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Object Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:parseScript",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003eprogram\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.ECMAScript3.Parser",
        "fct-package": "language-ecmascript",
        "fct-signature": "Parser s (JavaScript SourcePos)",
        "fct-source": "src/Language-ECMAScript3-Parser.html#parseScript",
        "fct-type": "function",
        "title": "parseScript"
      },
      "index": {
        "description": "Deprecated Use program instead",
        "hierarchy": "Language ECMAScript3 Parser",
        "module": "Language.ECMAScript3.Parser",
        "name": "parseScript",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Script",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:parseScriptFromString",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003eparseFromString\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eParse a JavaScript program from a string\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Parser",
        "fct-package": "language-ecmascript",
        "fct-signature": "String-\u003e String-\u003e Either ParseError (JavaScript SourcePos)",
        "fct-type": "function",
        "title": "parseScriptFromString"
      },
      "index": {
        "description": "Deprecated Use parseFromString instead Parse JavaScript program from string",
        "hierarchy": "Language ECMAScript3 Parser",
        "module": "Language.ECMAScript3.Parser",
        "name": "parseScriptFromString",
        "normalized": "String-\u003eString-\u003eEither ParseError(JavaScript SourcePos)",
        "package": "language-ecmascript",
        "partial": "Script From String",
        "signature": "String-\u003eString-\u003eEither ParseError(JavaScript SourcePos)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:parseSimpleExpr-39-",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: These parsers will be hidden in the next version\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.ECMAScript3.Parser",
        "fct-package": "language-ecmascript",
        "fct-signature": "ExpressionParser s",
        "fct-source": "src/Language-ECMAScript3-Parser.html#parseSimpleExpr%27",
        "fct-type": "function",
        "title": "parseSimpleExpr'"
      },
      "index": {
        "description": "Deprecated These parsers will be hidden in the next version",
        "hierarchy": "Language ECMAScript3 Parser",
        "module": "Language.ECMAScript3.Parser",
        "name": "parseSimpleExpr'",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Simple Expr'",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:parseStatement",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003estatement\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.ECMAScript3.Parser",
        "fct-package": "language-ecmascript",
        "fct-signature": "StatementParser s",
        "fct-source": "src/Language-ECMAScript3-Parser.html#parseStatement",
        "fct-type": "function",
        "title": "parseStatement"
      },
      "index": {
        "description": "Deprecated Use statement instead",
        "hierarchy": "Language ECMAScript3 Parser",
        "module": "Language.ECMAScript3.Parser",
        "name": "parseStatement",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Statement",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:parseString",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003eparseFromString\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eParse a JavaScript source string into a list of statements\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Parser",
        "fct-package": "language-ecmascript",
        "fct-signature": "String-\u003e [Statement SourcePos]",
        "fct-type": "function",
        "title": "parseString"
      },
      "index": {
        "description": "Deprecated Use parseFromString instead Parse JavaScript source string into list of statements",
        "hierarchy": "Language ECMAScript3 Parser",
        "module": "Language.ECMAScript3.Parser",
        "name": "parseString",
        "normalized": "String-\u003e[Statement SourcePos]",
        "package": "language-ecmascript",
        "partial": "String",
        "signature": "String-\u003e[Statement SourcePos]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:program",
      "description": {
        "fct-descr": "\u003cp\u003eA parser that parses an ECMAScript program.\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Parser",
        "fct-package": "language-ecmascript",
        "fct-signature": "Parser s (JavaScript SourcePos)",
        "fct-source": "src/Language-ECMAScript3-Parser.html#program",
        "fct-type": "function",
        "title": "program"
      },
      "index": {
        "description": "parser that parses an ECMAScript program",
        "hierarchy": "Language ECMAScript3 Parser",
        "module": "Language.ECMAScript3.Parser",
        "name": "program",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:statement",
      "description": {
        "fct-descr": "\u003cp\u003eThe parser that parses a single ECMAScript statement\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Parser",
        "fct-package": "language-ecmascript",
        "fct-signature": "Parser s (Statement SourcePos)",
        "fct-source": "src/Language-ECMAScript3-Parser.html#statement",
        "fct-type": "function",
        "title": "statement"
      },
      "index": {
        "description": "The parser that parses single ECMAScript statement",
        "hierarchy": "Language ECMAScript3 Parser",
        "module": "Language.ECMAScript3.Parser",
        "name": "statement",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-PrettyPrint.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty-printing JavaScript.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.ECMAScript3.PrettyPrint",
        "fct-package": "language-ecmascript",
        "fct-signature": "module",
        "fct-source": "src/Language-ECMAScript3-PrettyPrint.html",
        "fct-type": "module",
        "title": "PrettyPrint"
      },
      "index": {
        "description": "Pretty-printing JavaScript",
        "hierarchy": "Language ECMAScript3 PrettyPrint",
        "module": "Language.ECMAScript3.PrettyPrint",
        "name": "PrettyPrint",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Pretty Print",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-PrettyPrint.html#t:PP",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: These interfaces are outdated and would be removed/hidden in version 1.0. Use the Pretty class instead.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.ECMAScript3.PrettyPrint",
        "fct-package": "language-ecmascript",
        "fct-signature": "class",
        "fct-source": "src/Language-ECMAScript3-PrettyPrint.html#PP",
        "fct-type": "class",
        "title": "PP"
      },
      "index": {
        "description": "Deprecated These interfaces are outdated and would be removed hidden in version Use the Pretty class instead",
        "hierarchy": "Language ECMAScript3 PrettyPrint",
        "module": "Language.ECMAScript3.PrettyPrint",
        "name": "PP",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "PP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-PrettyPrint.html#t:Pretty",
      "description": {
        "fct-descr": "\u003cp\u003eA class of pretty-printable ECMAScript AST nodes.\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.PrettyPrint",
        "fct-package": "language-ecmascript",
        "fct-signature": "class",
        "fct-source": "src/Language-ECMAScript3-PrettyPrint.html#Pretty",
        "fct-type": "class",
        "title": "Pretty"
      },
      "index": {
        "description": "class of pretty-printable ECMAScript AST nodes",
        "hierarchy": "Language ECMAScript3 PrettyPrint",
        "module": "Language.ECMAScript3.PrettyPrint",
        "name": "Pretty",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Pretty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-PrettyPrint.html#v:javaScript",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: These interfaces are outdated and would be removed/hidden in version 1.0. Use the Pretty class instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDEPRECATED: Use \u003ccode\u003e\u003ca\u003eprettyPrint\u003c/a\u003e\u003c/code\u003e instead! Renders a JavaScript\n program as a document, the show instance of \u003ccode\u003e\u003ca\u003eDoc\u003c/a\u003e\u003c/code\u003e will pretty-print\n it automatically\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.PrettyPrint",
        "fct-package": "language-ecmascript",
        "fct-signature": "JavaScript a -\u003e Doc",
        "fct-source": "src/Language-ECMAScript3-PrettyPrint.html#javaScript",
        "fct-type": "function",
        "title": "javaScript"
      },
      "index": {
        "description": "Deprecated These interfaces are outdated and would be removed hidden in version Use the Pretty class instead DEPRECATED Use prettyPrint instead Renders JavaScript program as document the show instance of Doc will pretty-print it automatically",
        "hierarchy": "Language ECMAScript3 PrettyPrint",
        "module": "Language.ECMAScript3.PrettyPrint",
        "name": "javaScript",
        "normalized": "JavaScript a-\u003eDoc",
        "package": "language-ecmascript",
        "partial": "Script",
        "signature": "JavaScript a-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-PrettyPrint.html#v:pp",
      "description": {
        "fct-module": "Language.ECMAScript3.PrettyPrint",
        "fct-package": "language-ecmascript",
        "fct-signature": "a -\u003e Doc",
        "fct-source": "src/Language-ECMAScript3-PrettyPrint.html#pp",
        "fct-type": "method",
        "title": "pp"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 PrettyPrint",
        "module": "Language.ECMAScript3.PrettyPrint",
        "name": "pp",
        "normalized": "a-\u003eDoc",
        "package": "language-ecmascript",
        "partial": "",
        "signature": "a-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-PrettyPrint.html#v:prettyPrint",
      "description": {
        "fct-descr": "\u003cp\u003ePretty-print an ECMAScript AST node. Use \u003ccode\u003erender\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e to\n convert \u003ccode\u003e\u003ca\u003eDoc\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.PrettyPrint",
        "fct-package": "language-ecmascript",
        "fct-signature": "a -\u003e Doc",
        "fct-source": "src/Language-ECMAScript3-PrettyPrint.html#prettyPrint",
        "fct-type": "method",
        "title": "prettyPrint"
      },
      "index": {
        "description": "Pretty-print an ECMAScript AST node Use render or show to convert Doc to String",
        "hierarchy": "Language ECMAScript3 PrettyPrint",
        "module": "Language.ECMAScript3.PrettyPrint",
        "name": "prettyPrint",
        "normalized": "a-\u003eDoc",
        "package": "language-ecmascript",
        "partial": "Print",
        "signature": "a-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-PrettyPrint.html#v:renderExpression",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: These interfaces are outdated and would be removed/hidden in version 1.0. Use the Pretty class instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDEPRECATED: Use \u003ccode\u003e\u003ca\u003eprettyPrint\u003c/a\u003e\u003c/code\u003e instead! Renders a list of\n statements as a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.PrettyPrint",
        "fct-package": "language-ecmascript",
        "fct-signature": "Expression a -\u003e String",
        "fct-source": "src/Language-ECMAScript3-PrettyPrint.html#renderExpression",
        "fct-type": "function",
        "title": "renderExpression"
      },
      "index": {
        "description": "Deprecated These interfaces are outdated and would be removed hidden in version Use the Pretty class instead DEPRECATED Use prettyPrint instead Renders list of statements as String",
        "hierarchy": "Language ECMAScript3 PrettyPrint",
        "module": "Language.ECMAScript3.PrettyPrint",
        "name": "renderExpression",
        "normalized": "Expression a-\u003eString",
        "package": "language-ecmascript",
        "partial": "Expression",
        "signature": "Expression a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-PrettyPrint.html#v:renderStatements",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: These interfaces are outdated and would be removed/hidden in version 1.0. Use the Pretty class instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDEPRECATED: Use \u003ccode\u003e\u003ca\u003eprettyPrint\u003c/a\u003e\u003c/code\u003e instead! Renders a list of\n statements as a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.PrettyPrint",
        "fct-package": "language-ecmascript",
        "fct-signature": "[Statement a] -\u003e String",
        "fct-source": "src/Language-ECMAScript3-PrettyPrint.html#renderStatements",
        "fct-type": "function",
        "title": "renderStatements"
      },
      "index": {
        "description": "Deprecated These interfaces are outdated and would be removed hidden in version Use the Pretty class instead DEPRECATED Use prettyPrint instead Renders list of statements as String",
        "hierarchy": "Language ECMAScript3 PrettyPrint",
        "module": "Language.ECMAScript3.PrettyPrint",
        "name": "renderStatements",
        "normalized": "[Statement a]-\u003eString",
        "package": "language-ecmascript",
        "partial": "Statements",
        "signature": "[Statement a]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-PrettyPrint.html#v:unsafeInExprStmt",
      "description": {
        "fct-descr": "\u003cp\u003eA predicate to tell if the expression --when pretty-printed--\n will begin with \u003ca\u003efunction\u003c/a\u003e or '{' and be thus unsafe to use in an\n expression statement without wrapping it in '()'.\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.PrettyPrint",
        "fct-package": "language-ecmascript",
        "fct-signature": "Expression a -\u003e Bool",
        "fct-source": "src/Language-ECMAScript3-PrettyPrint.html#unsafeInExprStmt",
        "fct-type": "function",
        "title": "unsafeInExprStmt"
      },
      "index": {
        "description": "predicate to tell if the expression when pretty-printed will begin with function or and be thus unsafe to use in an expression statement without wrapping it in",
        "hierarchy": "Language ECMAScript3 PrettyPrint",
        "module": "Language.ECMAScript3.PrettyPrint",
        "name": "unsafeInExprStmt",
        "normalized": "Expression a-\u003eBool",
        "package": "language-ecmascript",
        "partial": "In Expr Stmt",
        "signature": "Expression a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-SourceDiff.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple textual diffing of JavaScript programs for inspecting test\n failures\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.ECMAScript3.SourceDiff",
        "fct-package": "language-ecmascript",
        "fct-signature": "module",
        "fct-source": "src/Language-ECMAScript3-SourceDiff.html",
        "fct-type": "module",
        "title": "SourceDiff"
      },
      "index": {
        "description": "Simple textual diffing of JavaScript programs for inspecting test failures",
        "hierarchy": "Language ECMAScript3 SourceDiff",
        "module": "Language.ECMAScript3.SourceDiff",
        "name": "SourceDiff",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Source Diff",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-SourceDiff.html#v:jsDiff",
      "description": {
        "fct-module": "Language.ECMAScript3.SourceDiff",
        "fct-package": "language-ecmascript",
        "fct-signature": "JavaScript a -\u003e JavaScript a -\u003e String",
        "fct-source": "src/Language-ECMAScript3-SourceDiff.html#jsDiff",
        "fct-type": "function",
        "title": "jsDiff"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 SourceDiff",
        "module": "Language.ECMAScript3.SourceDiff",
        "name": "jsDiff",
        "normalized": "JavaScript a-\u003eJavaScript a-\u003eString",
        "package": "language-ecmascript",
        "partial": "Diff",
        "signature": "JavaScript a-\u003eJavaScript a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Annotations.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA few helpers to work with the AST annotations\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.ECMAScript3.Syntax.Annotations",
        "fct-package": "language-ecmascript",
        "fct-signature": "module",
        "fct-source": "src/Language-ECMAScript3-Syntax-Annotations.html",
        "fct-type": "module",
        "title": "Annotations"
      },
      "index": {
        "description": "few helpers to work with the AST annotations",
        "hierarchy": "Language ECMAScript3 Syntax Annotations",
        "module": "Language.ECMAScript3.Syntax.Annotations",
        "name": "Annotations",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Annotations",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Annotations.html#t:HasAnnotation",
      "description": {
        "fct-descr": "\u003cp\u003eThings that have annotations -- for example, nodes in a syntax\n tree\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax.Annotations",
        "fct-package": "language-ecmascript",
        "fct-signature": "class",
        "fct-source": "src/Language-ECMAScript3-Syntax-Annotations.html#HasAnnotation",
        "fct-type": "class",
        "title": "HasAnnotation"
      },
      "index": {
        "description": "Things that have annotations for example nodes in syntax tree",
        "hierarchy": "Language ECMAScript3 Syntax Annotations",
        "module": "Language.ECMAScript3.Syntax.Annotations",
        "name": "HasAnnotation",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Has Annotation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Annotations.html#v:addExtraAnnotationField",
      "description": {
        "fct-descr": "\u003cp\u003eadd an extra field to the AST labels (the label would look like \u003ccode\u003e\n (a, b) \u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax.Annotations",
        "fct-package": "language-ecmascript",
        "fct-signature": "b -\u003e t a -\u003e t (a, b)",
        "fct-source": "src/Language-ECMAScript3-Syntax-Annotations.html#addExtraAnnotationField",
        "fct-type": "function",
        "title": "addExtraAnnotationField"
      },
      "index": {
        "description": "add an extra field to the AST labels the label would look like",
        "hierarchy": "Language ECMAScript3 Syntax Annotations",
        "module": "Language.ECMAScript3.Syntax.Annotations",
        "name": "addExtraAnnotationField",
        "normalized": "a-\u003eb c-\u003eb(c,a)",
        "package": "language-ecmascript",
        "partial": "Extra Annotation Field",
        "signature": "b-\u003et a-\u003et(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Annotations.html#v:assignUniqueIds",
      "description": {
        "fct-descr": "\u003cp\u003eAssigns unique numeric (Int) ids to each node in the AST. Returns\n a pair: the tree annotated with UID's and the last ID that was\n assigned.\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax.Annotations",
        "fct-package": "language-ecmascript",
        "fct-signature": "Int-\u003e t a-\u003e (t (a, Int), Int)",
        "fct-type": "function",
        "title": "assignUniqueIds"
      },
      "index": {
        "description": "Assigns unique numeric Int ids to each node in the AST Returns pair the tree annotated with UID and the last ID that was assigned",
        "hierarchy": "Language ECMAScript3 Syntax Annotations",
        "module": "Language.ECMAScript3.Syntax.Annotations",
        "name": "assignUniqueIds",
        "normalized": "Int-\u003ea b-\u003e(a(b,Int),Int)",
        "package": "language-ecmascript",
        "partial": "Unique Ids",
        "signature": "Int-\u003et a-\u003e(t(a,Int),Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Annotations.html#v:getAnnotation",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the annotation of the root of the tree\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax.Annotations",
        "fct-package": "language-ecmascript",
        "fct-signature": "a b -\u003e b",
        "fct-source": "src/Language-ECMAScript3-Syntax-Annotations.html#getAnnotation",
        "fct-type": "method",
        "title": "getAnnotation"
      },
      "index": {
        "description": "Returns the annotation of the root of the tree",
        "hierarchy": "Language ECMAScript3 Syntax Annotations",
        "module": "Language.ECMAScript3.Syntax.Annotations",
        "name": "getAnnotation",
        "normalized": "a b-\u003eb",
        "package": "language-ecmascript",
        "partial": "Annotation",
        "signature": "a b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Annotations.html#v:reannotate",
      "description": {
        "fct-descr": "\u003cp\u003eChanges all the labels in the tree to another one, given by a\n function.\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax.Annotations",
        "fct-package": "language-ecmascript",
        "fct-signature": "(a -\u003e b) -\u003e t a -\u003e t b",
        "fct-source": "src/Language-ECMAScript3-Syntax-Annotations.html#reannotate",
        "fct-type": "function",
        "title": "reannotate"
      },
      "index": {
        "description": "Changes all the labels in the tree to another one given by function",
        "hierarchy": "Language ECMAScript3 Syntax Annotations",
        "module": "Language.ECMAScript3.Syntax.Annotations",
        "name": "reannotate",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
        "package": "language-ecmascript",
        "partial": "",
        "signature": "(a-\u003eb)-\u003et a-\u003et b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Annotations.html#v:removeAnnotations",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves annotations from a tree\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax.Annotations",
        "fct-package": "language-ecmascript",
        "fct-signature": "t a -\u003e t ()",
        "fct-source": "src/Language-ECMAScript3-Syntax-Annotations.html#removeAnnotations",
        "fct-type": "function",
        "title": "removeAnnotations"
      },
      "index": {
        "description": "Removes annotations from tree",
        "hierarchy": "Language ECMAScript3 Syntax Annotations",
        "module": "Language.ECMAScript3.Syntax.Annotations",
        "name": "removeAnnotations",
        "normalized": "a b-\u003ea()",
        "package": "language-ecmascript",
        "partial": "Annotations",
        "signature": "t a-\u003et()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Annotations.html#v:removeExtraAnnotationField",
      "description": {
        "fct-descr": "\u003cp\u003eremove an extra field\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax.Annotations",
        "fct-package": "language-ecmascript",
        "fct-signature": "t (a, b) -\u003e t a",
        "fct-source": "src/Language-ECMAScript3-Syntax-Annotations.html#removeExtraAnnotationField",
        "fct-type": "function",
        "title": "removeExtraAnnotationField"
      },
      "index": {
        "description": "remove an extra field",
        "hierarchy": "Language ECMAScript3 Syntax Annotations",
        "module": "Language.ECMAScript3.Syntax.Annotations",
        "name": "removeExtraAnnotationField",
        "normalized": "a(b,c)-\u003ea b",
        "package": "language-ecmascript",
        "partial": "Extra Annotation Field",
        "signature": "t(a,b)-\u003et a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Annotations.html#v:setAnnotation",
      "description": {
        "fct-descr": "\u003cp\u003eSets the annotation of the root of the tree  \n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax.Annotations",
        "fct-package": "language-ecmascript",
        "fct-signature": "b -\u003e a b -\u003e a b",
        "fct-source": "src/Language-ECMAScript3-Syntax-Annotations.html#setAnnotation",
        "fct-type": "method",
        "title": "setAnnotation"
      },
      "index": {
        "description": "Sets the annotation of the root of the tree",
        "hierarchy": "Language ECMAScript3 Syntax Annotations",
        "module": "Language.ECMAScript3.Syntax.Annotations",
        "name": "setAnnotation",
        "normalized": "a-\u003eb a-\u003eb a",
        "package": "language-ecmascript",
        "partial": "Annotation",
        "signature": "b-\u003ea b-\u003ea b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Annotations.html#v:withAnnotation",
      "description": {
        "fct-descr": "\u003cp\u003eModify the annotation of the root node of the syntax tree\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax.Annotations",
        "fct-package": "language-ecmascript",
        "fct-signature": "(b -\u003e b) -\u003e a b -\u003e a b",
        "fct-source": "src/Language-ECMAScript3-Syntax-Annotations.html#withAnnotation",
        "fct-type": "function",
        "title": "withAnnotation"
      },
      "index": {
        "description": "Modify the annotation of the root node of the syntax tree",
        "hierarchy": "Language ECMAScript3 Syntax Annotations",
        "module": "Language.ECMAScript3.Syntax.Annotations",
        "name": "withAnnotation",
        "normalized": "(a-\u003ea)-\u003eb a-\u003eb a",
        "package": "language-ecmascript",
        "partial": "Annotation",
        "signature": "(b-\u003eb)-\u003ea b-\u003ea b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQuickCheck $Arbitrary$ instances for ECMAScript 3 abstract\n syntax.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.ECMAScript3.Syntax.Arbitrary",
        "fct-package": "language-ecmascript",
        "fct-signature": "module",
        "fct-source": "src/Language-ECMAScript3-Syntax-Arbitrary.html",
        "fct-type": "module",
        "title": "Arbitrary"
      },
      "index": {
        "description": "QuickCheck Arbitrary instances for ECMAScript abstract syntax",
        "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
        "module": "Language.ECMAScript3.Syntax.Arbitrary",
        "name": "Arbitrary",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Arbitrary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#t:LabelSubst",
      "description": {
        "fct-module": "Language.ECMAScript3.Syntax.Arbitrary",
        "fct-package": "language-ecmascript",
        "fct-signature": "type",
        "fct-source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#LabelSubst",
        "fct-type": "type",
        "title": "LabelSubst"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
        "module": "Language.ECMAScript3.Syntax.Arbitrary",
        "name": "LabelSubst",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Label Subst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#t:MSGen",
      "description": {
        "fct-module": "Language.ECMAScript3.Syntax.Arbitrary",
        "fct-package": "language-ecmascript",
        "fct-signature": "type",
        "fct-source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#MSGen",
        "fct-type": "type",
        "title": "MSGen"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
        "module": "Language.ECMAScript3.Syntax.Arbitrary",
        "name": "MSGen",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "MSGen",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:atLeastOfSize",
      "description": {
        "fct-module": "Language.ECMAScript3.Syntax.Arbitrary",
        "fct-package": "language-ecmascript",
        "fct-signature": "Int -\u003e Gen a -\u003e Gen a",
        "fct-source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#atLeastOfSize",
        "fct-type": "function",
        "title": "atLeastOfSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
        "module": "Language.ECMAScript3.Syntax.Arbitrary",
        "name": "atLeastOfSize",
        "normalized": "Int-\u003eGen a-\u003eGen a",
        "package": "language-ecmascript",
        "partial": "Least Of Size",
        "signature": "Int-\u003eGen a-\u003eGen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:cshrink",
      "description": {
        "fct-module": "Language.ECMAScript3.Syntax.Arbitrary",
        "fct-package": "language-ecmascript",
        "fct-signature": "[a] -\u003e [a]",
        "fct-source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#cshrink",
        "fct-type": "function",
        "title": "cshrink"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
        "module": "Language.ECMAScript3.Syntax.Arbitrary",
        "name": "cshrink",
        "normalized": "[a]-\u003e[a]",
        "package": "language-ecmascript",
        "partial": "",
        "signature": "[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:emptyConstantPool",
      "description": {
        "fct-module": "Language.ECMAScript3.Syntax.Arbitrary",
        "fct-package": "language-ecmascript",
        "fct-signature": "Map k a",
        "fct-source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#emptyConstantPool",
        "fct-type": "function",
        "title": "emptyConstantPool"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
        "module": "Language.ECMAScript3.Syntax.Arbitrary",
        "name": "emptyConstantPool",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Constant Pool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:emptyStmtShrink",
      "description": {
        "fct-module": "Language.ECMAScript3.Syntax.Arbitrary",
        "fct-package": "language-ecmascript",
        "fct-signature": "a -\u003e [Statement a]",
        "fct-source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#emptyStmtShrink",
        "fct-type": "function",
        "title": "emptyStmtShrink"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
        "module": "Language.ECMAScript3.Syntax.Arbitrary",
        "name": "emptyStmtShrink",
        "normalized": "a-\u003e[Statement a]",
        "package": "language-ecmascript",
        "partial": "Stmt Shrink",
        "signature": "a-\u003e[Statement a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:fixBreakContinueLabels",
      "description": {
        "fct-descr": "\u003cp\u003eChanges labels of break/continue so that they refer to one of the\n enclosing labels\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax.Arbitrary",
        "fct-package": "language-ecmascript",
        "fct-signature": "JavaScript a -\u003e Gen (JavaScript a)",
        "fct-source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#fixBreakContinueLabels",
        "fct-type": "function",
        "title": "fixBreakContinueLabels"
      },
      "index": {
        "description": "Changes labels of break continue so that they refer to one of the enclosing labels",
        "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
        "module": "Language.ECMAScript3.Syntax.Arbitrary",
        "name": "fixBreakContinueLabels",
        "normalized": "JavaScript a-\u003eGen(JavaScript a)",
        "package": "language-ecmascript",
        "partial": "Break Continue Labels",
        "signature": "JavaScript a-\u003eGen(JavaScript a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:fixLabels",
      "description": {
        "fct-descr": "\u003cp\u003eFixes labels so that labeled breaks and continues refer to\n existing labeled statements, enclosing them; also, reduces the size\n of the label set. Assumes that the program has a proper syntactic\n structure, i.e. \u003ccode\u003e\u003ca\u003eisProgramFixable\u003c/a\u003e\u003c/code\u003e s = True.\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax.Arbitrary",
        "fct-package": "language-ecmascript",
        "fct-signature": "JavaScript a -\u003e Gen (JavaScript a)",
        "fct-source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#fixLabels",
        "fct-type": "function",
        "title": "fixLabels"
      },
      "index": {
        "description": "Fixes labels so that labeled breaks and continues refer to existing labeled statements enclosing them also reduces the size of the label set Assumes that the program has proper syntactic structure i.e isProgramFixable True",
        "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
        "module": "Language.ECMAScript3.Syntax.Arbitrary",
        "name": "fixLabels",
        "normalized": "JavaScript a-\u003eGen(JavaScript a)",
        "package": "language-ecmascript",
        "partial": "Labels",
        "signature": "JavaScript a-\u003eGen(JavaScript a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:identifier",
      "description": {
        "fct-module": "Language.ECMAScript3.Syntax.Arbitrary",
        "fct-package": "language-ecmascript",
        "fct-signature": "Gen String",
        "fct-source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#identifier",
        "fct-type": "function",
        "title": "identifier"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
        "module": "Language.ECMAScript3.Syntax.Arbitrary",
        "name": "identifier",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:isBreakContinueFixable",
      "description": {
        "fct-descr": "\u003cp\u003eImposes relaxed restrictions on break and continue per ECMAScript\n 5 spec (page 92): any continue without a label should be nested\n within an iteration stmt, any continue with a label should be\n nested in a labeled statement (not necessarily with the same\n label); any break statement without a label should be nested in an\n iteration or switch stmt, any break statement with a label should\n be nested in a labeled statement (not necessarily with the same\n label).\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax.Arbitrary",
        "fct-package": "language-ecmascript",
        "fct-signature": "Statement a -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool",
        "fct-source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#isBreakContinueFixable",
        "fct-type": "function",
        "title": "isBreakContinueFixable"
      },
      "index": {
        "description": "Imposes relaxed restrictions on break and continue per ECMAScript spec page any continue without label should be nested within an iteration stmt any continue with label should be nested in labeled statement not necessarily with the same label any break statement without label should be nested in an iteration or switch stmt any break statement with label should be nested in labeled statement not necessarily with the same label",
        "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
        "module": "Language.ECMAScript3.Syntax.Arbitrary",
        "name": "isBreakContinueFixable",
        "normalized": "Statement a-\u003eBool-\u003eBool-\u003eBool-\u003eBool",
        "package": "language-ecmascript",
        "partial": "Break Continue Fixable",
        "signature": "Statement a-\u003eBool-\u003eBool-\u003eBool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:isProgramFixable",
      "description": {
        "fct-descr": "\u003cp\u003eA predicate that tells us whether a program has a fixable/correct\n label-break/continue structure.  The predicate imposes syntactic\n restrictions on the break, continue and labeled statements as in\n the ECMA spec\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax.Arbitrary",
        "fct-package": "language-ecmascript",
        "fct-signature": "JavaScript a -\u003e Bool",
        "fct-source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#isProgramFixable",
        "fct-type": "function",
        "title": "isProgramFixable"
      },
      "index": {
        "description": "predicate that tells us whether program has fixable correct label-break continue structure The predicate imposes syntactic restrictions on the break continue and labeled statements as in the ECMA spec",
        "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
        "module": "Language.ECMAScript3.Syntax.Arbitrary",
        "name": "isProgramFixable",
        "normalized": "JavaScript a-\u003eBool",
        "package": "language-ecmascript",
        "partial": "Program Fixable",
        "signature": "JavaScript a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:isSwitchStmt",
      "description": {
        "fct-module": "Language.ECMAScript3.Syntax.Arbitrary",
        "fct-package": "language-ecmascript",
        "fct-signature": "Statement a -\u003e Bool",
        "fct-source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#isSwitchStmt",
        "fct-type": "function",
        "title": "isSwitchStmt"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
        "module": "Language.ECMAScript3.Syntax.Arbitrary",
        "name": "isSwitchStmt",
        "normalized": "Statement a-\u003eBool",
        "package": "language-ecmascript",
        "partial": "Switch Stmt",
        "signature": "Statement a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:listOfN",
      "description": {
        "fct-module": "Language.ECMAScript3.Syntax.Arbitrary",
        "fct-package": "language-ecmascript",
        "fct-signature": "Int -\u003e Gen a -\u003e Gen [a]",
        "fct-source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#listOfN",
        "fct-type": "function",
        "title": "listOfN"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
        "module": "Language.ECMAScript3.Syntax.Arbitrary",
        "name": "listOfN",
        "normalized": "Int-\u003eGen a-\u003eGen[a]",
        "package": "language-ecmascript",
        "partial": "Of",
        "signature": "Int-\u003eGen a-\u003eGen[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:nonEmptyString",
      "description": {
        "fct-module": "Language.ECMAScript3.Syntax.Arbitrary",
        "fct-package": "language-ecmascript",
        "fct-signature": "Gen String",
        "fct-source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#nonEmptyString",
        "fct-type": "function",
        "title": "nonEmptyString"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
        "module": "Language.ECMAScript3.Syntax.Arbitrary",
        "name": "nonEmptyString",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Empty String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:nonNegative",
      "description": {
        "fct-module": "Language.ECMAScript3.Syntax.Arbitrary",
        "fct-package": "language-ecmascript",
        "fct-signature": "Gen a",
        "fct-source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#nonNegative",
        "fct-type": "function",
        "title": "nonNegative"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
        "module": "Language.ECMAScript3.Syntax.Arbitrary",
        "name": "nonNegative",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Negative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:rChooseElem",
      "description": {
        "fct-descr": "\u003cp\u003echoose n elements from a list randomly\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax.Arbitrary",
        "fct-package": "language-ecmascript",
        "fct-signature": "[a] -\u003e Int -\u003e Gen [a]",
        "fct-source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#rChooseElem",
        "fct-type": "function",
        "title": "rChooseElem"
      },
      "index": {
        "description": "choose elements from list randomly",
        "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
        "module": "Language.ECMAScript3.Syntax.Arbitrary",
        "name": "rChooseElem",
        "normalized": "[a]-\u003eInt-\u003eGen[a]",
        "package": "language-ecmascript",
        "partial": "Choose Elem",
        "signature": "[a]-\u003eInt-\u003eGen[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:rarbitrary",
      "description": {
        "fct-module": "Language.ECMAScript3.Syntax.Arbitrary",
        "fct-package": "language-ecmascript",
        "fct-signature": "Gen a",
        "fct-source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#rarbitrary",
        "fct-type": "function",
        "title": "rarbitrary"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
        "module": "Language.ECMAScript3.Syntax.Arbitrary",
        "name": "rarbitrary",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:recursive",
      "description": {
        "fct-module": "Language.ECMAScript3.Syntax.Arbitrary",
        "fct-package": "language-ecmascript",
        "fct-signature": "Gen a -\u003e Gen a",
        "fct-source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#recursive",
        "fct-type": "function",
        "title": "recursive"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
        "module": "Language.ECMAScript3.Syntax.Arbitrary",
        "name": "recursive",
        "normalized": "Gen a-\u003eGen a",
        "package": "language-ecmascript",
        "partial": "",
        "signature": "Gen a-\u003eGen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:regexpBody",
      "description": {
        "fct-module": "Language.ECMAScript3.Syntax.Arbitrary",
        "fct-package": "language-ecmascript",
        "fct-signature": "Gen String",
        "fct-source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#regexpBody",
        "fct-type": "function",
        "title": "regexpBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
        "module": "Language.ECMAScript3.Syntax.Arbitrary",
        "name": "regexpBody",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:removeDuplicateLabels",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves duplicate labels from nested labeled statements in order\n to impose restrictions on labeled statements as per ECMAScript 5\n spec (page 95): nested labeled statements cannot have duplicating\n labels.\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax.Arbitrary",
        "fct-package": "language-ecmascript",
        "fct-signature": "JavaScript a -\u003e Gen (JavaScript a)",
        "fct-source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#removeDuplicateLabels",
        "fct-type": "function",
        "title": "removeDuplicateLabels"
      },
      "index": {
        "description": "Removes duplicate labels from nested labeled statements in order to impose restrictions on labeled statements as per ECMAScript spec page nested labeled statements cannot have duplicating labels",
        "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
        "module": "Language.ECMAScript3.Syntax.Arbitrary",
        "name": "removeDuplicateLabels",
        "normalized": "JavaScript a-\u003eGen(JavaScript a)",
        "package": "language-ecmascript",
        "partial": "Duplicate Labels",
        "signature": "JavaScript a-\u003eGen(JavaScript a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:rrarbitrary",
      "description": {
        "fct-module": "Language.ECMAScript3.Syntax.Arbitrary",
        "fct-package": "language-ecmascript",
        "fct-signature": "Gen a",
        "fct-source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#rrarbitrary",
        "fct-type": "function",
        "title": "rrarbitrary"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
        "module": "Language.ECMAScript3.Syntax.Arbitrary",
        "name": "rrarbitrary",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:sGen",
      "description": {
        "fct-module": "Language.ECMAScript3.Syntax.Arbitrary",
        "fct-package": "language-ecmascript",
        "fct-signature": "[MSGen a] -\u003e Gen a",
        "fct-source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#sGen",
        "fct-type": "function",
        "title": "sGen"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
        "module": "Language.ECMAScript3.Syntax.Arbitrary",
        "name": "sGen",
        "normalized": "[MSGen a]-\u003eGen a",
        "package": "language-ecmascript",
        "partial": "Gen",
        "signature": "[MSGen a]-\u003eGen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:selectRandomElement",
      "description": {
        "fct-descr": "\u003cp\u003eSelects a random element of the list\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax.Arbitrary",
        "fct-package": "language-ecmascript",
        "fct-signature": "[a] -\u003e Gen a",
        "fct-source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#selectRandomElement",
        "fct-type": "function",
        "title": "selectRandomElement"
      },
      "index": {
        "description": "Selects random element of the list",
        "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
        "module": "Language.ECMAScript3.Syntax.Arbitrary",
        "name": "selectRandomElement",
        "normalized": "[a]-\u003eGen a",
        "package": "language-ecmascript",
        "partial": "Random Element",
        "signature": "[a]-\u003eGen a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:stringOfLength",
      "description": {
        "fct-module": "Language.ECMAScript3.Syntax.Arbitrary",
        "fct-package": "language-ecmascript",
        "fct-signature": "Int -\u003e Gen String",
        "fct-source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#stringOfLength",
        "fct-type": "function",
        "title": "stringOfLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
        "module": "Language.ECMAScript3.Syntax.Arbitrary",
        "name": "stringOfLength",
        "normalized": "Int-\u003eGen String",
        "package": "language-ecmascript",
        "partial": "Of Length",
        "signature": "Int-\u003eGen String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-QuasiQuote.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExperimental and very simple quasi-quotation of ECMAScript in\n Haskell. Doesn't support anti-quotation as of now.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.ECMAScript3.Syntax.QuasiQuote",
        "fct-package": "language-ecmascript",
        "fct-signature": "module",
        "fct-source": "src/Language-ECMAScript3-Syntax-QuasiQuote.html",
        "fct-type": "module",
        "title": "QuasiQuote"
      },
      "index": {
        "description": "Experimental and very simple quasi-quotation of ECMAScript in Haskell Doesn support anti-quotation as of now",
        "hierarchy": "Language ECMAScript3 Syntax QuasiQuote",
        "module": "Language.ECMAScript3.Syntax.QuasiQuote",
        "name": "QuasiQuote",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Quasi Quote",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-QuasiQuote.html#v:js",
      "description": {
        "fct-module": "Language.ECMAScript3.Syntax.QuasiQuote",
        "fct-package": "language-ecmascript",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Language-ECMAScript3-Syntax-QuasiQuote.html#js",
        "fct-type": "function",
        "title": "js"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax QuasiQuote",
        "module": "Language.ECMAScript3.Syntax.QuasiQuote",
        "name": "js",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-QuasiQuote.html#v:jsexpr",
      "description": {
        "fct-module": "Language.ECMAScript3.Syntax.QuasiQuote",
        "fct-package": "language-ecmascript",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Language-ECMAScript3-Syntax-QuasiQuote.html#jsexpr",
        "fct-type": "function",
        "title": "jsexpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax QuasiQuote",
        "module": "Language.ECMAScript3.Syntax.QuasiQuote",
        "name": "jsexpr",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-QuasiQuote.html#v:jsstmt",
      "description": {
        "fct-module": "Language.ECMAScript3.Syntax.QuasiQuote",
        "fct-package": "language-ecmascript",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Language-ECMAScript3-Syntax-QuasiQuote.html#jsstmt",
        "fct-type": "function",
        "title": "jsstmt"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax QuasiQuote",
        "module": "Language.ECMAScript3.Syntax.QuasiQuote",
        "name": "jsstmt",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eECMAScript 3 syntax. \u003cem\u003eSpec\u003c/em\u003e refers to the ECMA-262 specification,\n 3rd edition.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "module",
        "fct-source": "src/Language-ECMAScript3-Syntax.html",
        "fct-type": "module",
        "title": "Syntax"
      },
      "index": {
        "description": "ECMAScript syntax Spec refers to the ECMA-262 specification rd edition",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "Syntax",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Syntax",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:AssignOp",
      "description": {
        "fct-descr": "\u003cp\u003eAssignment operators: see spec 11.13\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "data",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#AssignOp",
        "fct-type": "data",
        "title": "AssignOp"
      },
      "index": {
        "description": "Assignment operators see spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "AssignOp",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Assign Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:CaseClause",
      "description": {
        "fct-descr": "\u003cp\u003eCase clauses, spec 12.11\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "data",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#CaseClause",
        "fct-type": "data",
        "title": "CaseClause"
      },
      "index": {
        "description": "Case clauses spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "CaseClause",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Case Clause",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:CatchClause",
      "description": {
        "fct-descr": "\u003cp\u003eCatch clause, spec 12.14\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "data",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#CatchClause",
        "fct-type": "data",
        "title": "CatchClause"
      },
      "index": {
        "description": "Catch clause spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "CatchClause",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Catch Clause",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:Expression",
      "description": {
        "fct-descr": "\u003cp\u003eExpressions, see spec 11\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "data",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Expression",
        "fct-type": "data",
        "title": "Expression"
      },
      "index": {
        "description": "Expressions see spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "Expression",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Expression",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:ForInInit",
      "description": {
        "fct-descr": "\u003cp\u003efor..in initializer, spec 12.6\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "data",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#ForInInit",
        "fct-type": "data",
        "title": "ForInInit"
      },
      "index": {
        "description": "for..in initializer spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "ForInInit",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "For In Init",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:ForInit",
      "description": {
        "fct-descr": "\u003cp\u003efor initializer, spec 12.6\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "data",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#ForInit",
        "fct-type": "data",
        "title": "ForInit"
      },
      "index": {
        "description": "for initializer spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "ForInit",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "For Init",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:Id",
      "description": {
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "data",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Id",
        "fct-type": "data",
        "title": "Id"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "Id",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:InfixOp",
      "description": {
        "fct-descr": "\u003cp\u003eInfix operators: see spec 11.5-11.11\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "data",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
        "fct-type": "data",
        "title": "InfixOp"
      },
      "index": {
        "description": "Infix operators see spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "InfixOp",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Infix Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:JavaScript",
      "description": {
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "data",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#JavaScript",
        "fct-type": "data",
        "title": "JavaScript"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "JavaScript",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Java Script",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:LValue",
      "description": {
        "fct-descr": "\u003cp\u003eLeft-hand side expressions: see spec 11.2\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "data",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#LValue",
        "fct-type": "data",
        "title": "LValue"
      },
      "index": {
        "description": "Left-hand side expressions see spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "LValue",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "LValue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:PrefixOp",
      "description": {
        "fct-descr": "\u003cp\u003ePrefix operators: see spec 11.4 (excluding 11.4.4, 11.4.5)\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "data",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#PrefixOp",
        "fct-type": "data",
        "title": "PrefixOp"
      },
      "index": {
        "description": "Prefix operators see spec excluding",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "PrefixOp",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Prefix Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:Prop",
      "description": {
        "fct-descr": "\u003cp\u003eProperty names in an object initializer: see spec 11.1.5\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "data",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Prop",
        "fct-type": "data",
        "title": "Prop"
      },
      "index": {
        "description": "Property names in an object initializer see spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "Prop",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Prop",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:SourcePos",
      "description": {
        "fct-descr": "\u003cp\u003eThe abstract data type \u003ccode\u003eSourcePos\u003c/code\u003e represents source positions. It\n contains the name of the source (i.e. file name), a line number and\n a column number. \u003ccode\u003eSourcePos\u003c/code\u003e is an instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class. \n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "SourcePos"
      },
      "index": {
        "description": "The abstract data type SourcePos represents source positions It contains the name of the source i.e file name line number and column number SourcePos is an instance of the Show Eq and Ord class",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "SourcePos",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Source Pos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:Statement",
      "description": {
        "fct-descr": "\u003cp\u003eStatements, spec 12.\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "data",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Statement",
        "fct-type": "data",
        "title": "Statement"
      },
      "index": {
        "description": "Statements spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "Statement",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Statement",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:UnaryAssignOp",
      "description": {
        "fct-descr": "\u003cp\u003eUnary assignment operators: see spec 11.3, 11.4.4, 11.4.5\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "data",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#UnaryAssignOp",
        "fct-type": "data",
        "title": "UnaryAssignOp"
      },
      "index": {
        "description": "Unary assignment operators see spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "UnaryAssignOp",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Unary Assign Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:VarDecl",
      "description": {
        "fct-descr": "\u003cp\u003eA variable declaration, spec 12.2\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "data",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#VarDecl",
        "fct-type": "data",
        "title": "VarDecl"
      },
      "index": {
        "description": "variable declaration spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "VarDecl",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Var Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:ArrayLit",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e[1,2,3]\u003c/code\u003e, spec 11.1.4\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "ArrayLit a [Expression a]",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Expression",
        "fct-type": "function",
        "title": "ArrayLit"
      },
      "index": {
        "description": "spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "ArrayLit",
        "normalized": "ArrayLit a[Expression a]",
        "package": "language-ecmascript",
        "partial": "Array Lit",
        "signature": "ArrayLit a[Expression a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:AssignExpr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ee1 @=e2\u003c/code\u003e, spec 11.13\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "AssignExpr a AssignOp (LValue a) (Expression a)",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Expression",
        "fct-type": "function",
        "title": "AssignExpr"
      },
      "index": {
        "description": "e1 e2 spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "AssignExpr",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Assign Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:BlockStmt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e{stmts}\u003c/code\u003e, spec 12.1\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "BlockStmt a [Statement a]",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Statement",
        "fct-type": "function",
        "title": "BlockStmt"
      },
      "index": {
        "description": "stmts spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "BlockStmt",
        "normalized": "BlockStmt a[Statement a]",
        "package": "language-ecmascript",
        "partial": "Block Stmt",
        "signature": "BlockStmt a[Statement a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:BoolLit",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etrue\u003c/code\u003e, spec 11.1.3, 7.8\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "BoolLit a Bool",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Expression",
        "fct-type": "function",
        "title": "BoolLit"
      },
      "index": {
        "description": "true spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "BoolLit",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Bool Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:BracketRef",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efoo[bar\u003c/code\u003e, spec 11.2.1\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "BracketRef a (Expression a) (Expression a)",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Expression",
        "fct-type": "function",
        "title": "BracketRef"
      },
      "index": {
        "description": "foo bar spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "BracketRef",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Bracket Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:BreakStmt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ebreak lab;\u003c/code\u003e, spec 12.8\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "BreakStmt a (Maybe (Id a))",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Statement",
        "fct-type": "function",
        "title": "BreakStmt"
      },
      "index": {
        "description": "break lab spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "BreakStmt",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Break Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:CallExpr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ef(x,y,z)\u003c/code\u003e, spec 11.2.3\nfuncexprs are optionally named\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "CallExpr a (Expression a) [Expression a]",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Expression",
        "fct-type": "function",
        "title": "CallExpr"
      },
      "index": {
        "description": "spec funcexprs are optionally named",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "CallExpr",
        "normalized": "CallExpr a(Expression a)[Expression a]",
        "package": "language-ecmascript",
        "partial": "Call Expr",
        "signature": "CallExpr a(Expression a)[Expression a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:CaseClause",
      "description": {
        "fct-descr": "\u003cpre\u003ecase e: stmts;\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "CaseClause a (Expression a) [Statement a]",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#CaseClause",
        "fct-type": "function",
        "title": "CaseClause"
      },
      "index": {
        "description": "case stmts",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "CaseClause",
        "normalized": "CaseClause a(Expression a)[Statement a]",
        "package": "language-ecmascript",
        "partial": "Case Clause",
        "signature": "CaseClause a(Expression a)[Statement a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:CaseDefault",
      "description": {
        "fct-descr": "\u003cpre\u003edefault: stmts;\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "CaseDefault a [Statement a]",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#CaseClause",
        "fct-type": "function",
        "title": "CaseDefault"
      },
      "index": {
        "description": "default stmts",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "CaseDefault",
        "normalized": "CaseDefault a[Statement a]",
        "package": "language-ecmascript",
        "partial": "Case Default",
        "signature": "CaseDefault a[Statement a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:CatchClause",
      "description": {
        "fct-descr": "\u003cpre\u003ecatch (x) {...}\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "CatchClause a (Id a) (Statement a)",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#CatchClause",
        "fct-type": "function",
        "title": "CatchClause"
      },
      "index": {
        "description": "catch",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "CatchClause",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Catch Clause",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:CondExpr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ee1 ? e2 : e3\u003c/code\u003e, spec 11.12\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "CondExpr a (Expression a) (Expression a) (Expression a)",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Expression",
        "fct-type": "function",
        "title": "CondExpr"
      },
      "index": {
        "description": "e1 e2 e3 spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "CondExpr",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Cond Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:ContinueStmt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003econtinue lab;\u003c/code\u003e, spec 12.7\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "ContinueStmt a (Maybe (Id a))",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Statement",
        "fct-type": "function",
        "title": "ContinueStmt"
      },
      "index": {
        "description": "continue lab spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "ContinueStmt",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Continue Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:DoWhileStmt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003edo stmt while (e);\u003c/code\u003e, spec 12.6\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "DoWhileStmt a (Statement a) (Expression a)",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Statement",
        "fct-type": "function",
        "title": "DoWhileStmt"
      },
      "index": {
        "description": "do stmt while spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "DoWhileStmt",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Do While Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:DotRef",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efoo.bar\u003c/code\u003e, spec 11.2.1\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "DotRef a (Expression a) (Id a)",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Expression",
        "fct-type": "function",
        "title": "DotRef"
      },
      "index": {
        "description": "foo.bar spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "DotRef",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Dot Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:EmptyStmt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e;\u003c/code\u003e, spec 12.3\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "EmptyStmt a",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Statement",
        "fct-type": "function",
        "title": "EmptyStmt"
      },
      "index": {
        "description": "spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "EmptyStmt",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Empty Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:ExprInit",
      "description": {
        "fct-descr": "\u003cpre\u003eexpr\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "ExprInit (Expression a)",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#ForInit",
        "fct-type": "function",
        "title": "ExprInit"
      },
      "index": {
        "description": "expr",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "ExprInit",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Expr Init",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:ExprStmt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eexpr;\u003c/code\u003e, spec 12.4\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "ExprStmt a (Expression a)",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Statement",
        "fct-type": "function",
        "title": "ExprStmt"
      },
      "index": {
        "description": "expr spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "ExprStmt",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Expr Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:ForInLVal",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efoo.baz\u003c/code\u003e, \u003ccode\u003efoo[bar]\u003c/code\u003e, \u003ccode\u003ez\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "ForInLVal (LValue a)",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#ForInInit",
        "fct-type": "function",
        "title": "ForInLVal"
      },
      "index": {
        "description": "foo.baz foo bar",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "ForInLVal",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "For In LVal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:ForInStmt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efor (x in o) stmt\u003c/code\u003e, spec 12.6\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "ForInStmt a (ForInInit a) (Expression a) (Statement a)",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Statement",
        "fct-type": "function",
        "title": "ForInStmt"
      },
      "index": {
        "description": "for in stmt spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "ForInStmt",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "For In Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:ForInVar",
      "description": {
        "fct-descr": "\u003cpre\u003evar x\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "ForInVar (Id a)",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#ForInInit",
        "fct-type": "function",
        "title": "ForInVar"
      },
      "index": {
        "description": "var",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "ForInVar",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "For In Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:ForStmt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eForStmt a init test increment body\u003c/code\u003e, \u003ccode\u003efor (init; test,\n increment) body\u003c/code\u003e, spec 12.6\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "ForStmt a (ForInit a) (Maybe (Expression a)) (Maybe (Expression a)) (Statement a)",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Statement",
        "fct-type": "function",
        "title": "ForStmt"
      },
      "index": {
        "description": "ForStmt init test increment body for init test increment body spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "ForStmt",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "For Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:FuncExpr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efunction f (x,y,z) {...}\u003c/code\u003e, spec 11.2.5, 13\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "FuncExpr a (Maybe (Id a)) [Id a] [Statement a]",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Expression",
        "fct-type": "function",
        "title": "FuncExpr"
      },
      "index": {
        "description": "function spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "FuncExpr",
        "normalized": "FuncExpr a(Maybe(Id a))[Id a][Statement a]",
        "package": "language-ecmascript",
        "partial": "Func Expr",
        "signature": "FuncExpr a(Maybe(Id a))[Id a][Statement a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:FunctionStmt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efunction f(x, y, z) {...}\u003c/code\u003e, spec 13\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "FunctionStmt a (Id a) [Id a] [Statement a]",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Statement",
        "fct-type": "function",
        "title": "FunctionStmt"
      },
      "index": {
        "description": "function spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "FunctionStmt",
        "normalized": "FunctionStmt a(Id a)[Id a][Statement a]",
        "package": "language-ecmascript",
        "partial": "Function Stmt",
        "signature": "FunctionStmt a(Id a)[Id a][Statement a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:Id",
      "description": {
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "Id a String",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Id",
        "fct-type": "function",
        "title": "Id"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "Id",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:IfSingleStmt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eif (e) stmt1 else stmt2\u003c/code\u003e, spec 12.5\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "IfSingleStmt a (Expression a) (Statement a)",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Statement",
        "fct-type": "function",
        "title": "IfSingleStmt"
      },
      "index": {
        "description": "if stmt1 else stmt2 spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "IfSingleStmt",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "If Single Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:IfStmt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eif (e) stmt\u003c/code\u003e, spec 12.5\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "IfStmt a (Expression a) (Statement a) (Statement a)",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Statement",
        "fct-type": "function",
        "title": "IfStmt"
      },
      "index": {
        "description": "if stmt spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "IfStmt",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "If Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:InfixExpr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ee1@e2\u003c/code\u003e, spec 11.5, 11.6, 11.7, 11.8, 11.9, 11.10, 11.11\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "InfixExpr a InfixOp (Expression a) (Expression a)",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Expression",
        "fct-type": "function",
        "title": "InfixExpr"
      },
      "index": {
        "description": "e1@e2 spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "InfixExpr",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Infix Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:IntLit",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e42\u003c/code\u003e, spec 11.1.3, 7.8\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "IntLit a Int",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Expression",
        "fct-type": "function",
        "title": "IntLit"
      },
      "index": {
        "description": "spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "IntLit",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Int Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:LBracket",
      "description": {
        "fct-descr": "\u003cpre\u003efoo[bar]\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "LBracket a (Expression a) (Expression a)",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#LValue",
        "fct-type": "function",
        "title": "LBracket"
      },
      "index": {
        "description": "foo bar",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "LBracket",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "LBracket",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:LDot",
      "description": {
        "fct-descr": "\u003cpre\u003efoo.bar\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "LDot a (Expression a) String",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#LValue",
        "fct-type": "function",
        "title": "LDot"
      },
      "index": {
        "description": "foo.bar",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "LDot",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "LDot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:LVar",
      "description": {
        "fct-descr": "\u003cp\u003evariable reference, \u003ccode\u003efoo\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "LVar a String",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#LValue",
        "fct-type": "function",
        "title": "LVar"
      },
      "index": {
        "description": "variable reference foo",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "LVar",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "LVar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:LabelledStmt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003elab: stmt\u003c/code\u003e, spec 12.12\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "LabelledStmt a (Id a) (Statement a)",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Statement",
        "fct-type": "function",
        "title": "LabelledStmt"
      },
      "index": {
        "description": "lab stmt spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "LabelledStmt",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Labelled Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:ListExpr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ee1, e2\u003c/code\u003e, spec 11.14\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "ListExpr a [Expression a]",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Expression",
        "fct-type": "function",
        "title": "ListExpr"
      },
      "index": {
        "description": "e1 e2 spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "ListExpr",
        "normalized": "ListExpr a[Expression a]",
        "package": "language-ecmascript",
        "partial": "List Expr",
        "signature": "ListExpr a[Expression a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:NewExpr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enew foo(bar)\u003c/code\u003e, spec 11.2.2\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "NewExpr a (Expression a) [Expression a]",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Expression",
        "fct-type": "function",
        "title": "NewExpr"
      },
      "index": {
        "description": "new foo bar spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "NewExpr",
        "normalized": "NewExpr a(Expression a)[Expression a]",
        "package": "language-ecmascript",
        "partial": "New Expr",
        "signature": "NewExpr a(Expression a)[Expression a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:NoInit",
      "description": {
        "fct-descr": "\u003cp\u003eempty\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "NoInit",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#ForInit",
        "fct-type": "function",
        "title": "NoInit"
      },
      "index": {
        "description": "empty",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "NoInit",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "No Init",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:NullLit",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003enull\u003c/code\u003e, spec 11.1.3, 7.8\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "NullLit a",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Expression",
        "fct-type": "function",
        "title": "NullLit"
      },
      "index": {
        "description": "null spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "NullLit",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Null Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:NumLit",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e41.99999\u003c/code\u003e, spec 11.1.3, 7.8\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "NumLit a Double",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Expression",
        "fct-type": "function",
        "title": "NumLit"
      },
      "index": {
        "description": "spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "NumLit",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Num Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:ObjectLit",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e{foo:\"bar\", baz: 42}\u003c/code\u003e, spec 11.1.5\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "ObjectLit a [(Prop a, Expression a)]",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Expression",
        "fct-type": "function",
        "title": "ObjectLit"
      },
      "index": {
        "description": "foo bar baz spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "ObjectLit",
        "normalized": "ObjectLit a[(Prop a,Expression a)]",
        "package": "language-ecmascript",
        "partial": "Object Lit",
        "signature": "ObjectLit a[(Prop a,Expression a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpAdd",
      "description": {
        "fct-descr": "\u003cpre\u003e+\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpAdd",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
        "fct-type": "function",
        "title": "OpAdd"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpAdd",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op Add",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpAssign",
      "description": {
        "fct-descr": "\u003cp\u003esimple assignment, \u003ccode\u003e=\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpAssign",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#AssignOp",
        "fct-type": "function",
        "title": "OpAssign"
      },
      "index": {
        "description": "simple assignment",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpAssign",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op Assign",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpAssignAdd",
      "description": {
        "fct-descr": "\u003cpre\u003e+=\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpAssignAdd",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#AssignOp",
        "fct-type": "function",
        "title": "OpAssignAdd"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpAssignAdd",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op Assign Add",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpAssignBAnd",
      "description": {
        "fct-descr": "\u003cpre\u003e&=\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpAssignBAnd",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#AssignOp",
        "fct-type": "function",
        "title": "OpAssignBAnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpAssignBAnd",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op Assign BAnd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpAssignBOr",
      "description": {
        "fct-descr": "\u003cpre\u003e|=\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpAssignBOr",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#AssignOp",
        "fct-type": "function",
        "title": "OpAssignBOr"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpAssignBOr",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op Assign BOr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpAssignBXor",
      "description": {
        "fct-descr": "\u003cpre\u003e^=\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpAssignBXor",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#AssignOp",
        "fct-type": "function",
        "title": "OpAssignBXor"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpAssignBXor",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op Assign BXor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpAssignDiv",
      "description": {
        "fct-descr": "\u003cpre\u003e/=\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpAssignDiv",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#AssignOp",
        "fct-type": "function",
        "title": "OpAssignDiv"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpAssignDiv",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op Assign Div",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpAssignLShift",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003c\u003c=\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpAssignLShift",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#AssignOp",
        "fct-type": "function",
        "title": "OpAssignLShift"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpAssignLShift",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op Assign LShift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpAssignMod",
      "description": {
        "fct-descr": "\u003cpre\u003e%=\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpAssignMod",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#AssignOp",
        "fct-type": "function",
        "title": "OpAssignMod"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpAssignMod",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op Assign Mod",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpAssignMul",
      "description": {
        "fct-descr": "\u003cpre\u003e*=\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpAssignMul",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#AssignOp",
        "fct-type": "function",
        "title": "OpAssignMul"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpAssignMul",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op Assign Mul",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpAssignSpRShift",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003e\u003e=\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpAssignSpRShift",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#AssignOp",
        "fct-type": "function",
        "title": "OpAssignSpRShift"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpAssignSpRShift",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op Assign Sp RShift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpAssignSub",
      "description": {
        "fct-descr": "\u003cpre\u003e-=\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpAssignSub",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#AssignOp",
        "fct-type": "function",
        "title": "OpAssignSub"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpAssignSub",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op Assign Sub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpAssignZfRShift",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003e\u003e\u003e=\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpAssignZfRShift",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#AssignOp",
        "fct-type": "function",
        "title": "OpAssignZfRShift"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpAssignZfRShift",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op Assign Zf RShift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpBAnd",
      "description": {
        "fct-descr": "\u003cpre\u003e&\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpBAnd",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
        "fct-type": "function",
        "title": "OpBAnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpBAnd",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op BAnd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpBOr",
      "description": {
        "fct-descr": "\u003cpre\u003e|\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpBOr",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
        "fct-type": "function",
        "title": "OpBOr"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpBOr",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op BOr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpBXor",
      "description": {
        "fct-descr": "\u003cpre\u003e^\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpBXor",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
        "fct-type": "function",
        "title": "OpBXor"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpBXor",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op BXor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpDiv",
      "description": {
        "fct-descr": "\u003cpre\u003e/\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpDiv",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
        "fct-type": "function",
        "title": "OpDiv"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpDiv",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op Div",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpEq",
      "description": {
        "fct-descr": "\u003cpre\u003e==\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpEq",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
        "fct-type": "function",
        "title": "OpEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpEq",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpGEq",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003e=\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpGEq",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
        "fct-type": "function",
        "title": "OpGEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpGEq",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op GEq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpGT",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003e\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpGT",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
        "fct-type": "function",
        "title": "OpGT"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpGT",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op GT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpIn",
      "description": {
        "fct-descr": "\u003cpre\u003ein\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpIn",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
        "fct-type": "function",
        "title": "OpIn"
      },
      "index": {
        "description": "in",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpIn",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpInstanceof",
      "description": {
        "fct-descr": "\u003cpre\u003einstanceof\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpInstanceof",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
        "fct-type": "function",
        "title": "OpInstanceof"
      },
      "index": {
        "description": "instanceof",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpInstanceof",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op Instanceof",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpLAnd",
      "description": {
        "fct-descr": "\u003cpre\u003e&&\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpLAnd",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
        "fct-type": "function",
        "title": "OpLAnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpLAnd",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op LAnd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpLEq",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003c=\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpLEq",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
        "fct-type": "function",
        "title": "OpLEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpLEq",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op LEq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpLOr",
      "description": {
        "fct-descr": "\u003cpre\u003e||\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpLOr",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
        "fct-type": "function",
        "title": "OpLOr"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpLOr",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op LOr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpLShift",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003c\u003c\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpLShift",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
        "fct-type": "function",
        "title": "OpLShift"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpLShift",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op LShift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpLT",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003c\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpLT",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
        "fct-type": "function",
        "title": "OpLT"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpLT",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op LT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpMod",
      "description": {
        "fct-descr": "\u003cpre\u003e%\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpMod",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
        "fct-type": "function",
        "title": "OpMod"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpMod",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op Mod",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpMul",
      "description": {
        "fct-descr": "\u003cpre\u003e*\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpMul",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
        "fct-type": "function",
        "title": "OpMul"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpMul",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op Mul",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpNEq",
      "description": {
        "fct-descr": "\u003cpre\u003e!=\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpNEq",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
        "fct-type": "function",
        "title": "OpNEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpNEq",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op NEq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpSpRShift",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003e\u003e\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpSpRShift",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
        "fct-type": "function",
        "title": "OpSpRShift"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpSpRShift",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op Sp RShift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpStrictEq",
      "description": {
        "fct-descr": "\u003cpre\u003e===\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpStrictEq",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
        "fct-type": "function",
        "title": "OpStrictEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpStrictEq",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op Strict Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpStrictNEq",
      "description": {
        "fct-descr": "\u003cpre\u003e!===\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpStrictNEq",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
        "fct-type": "function",
        "title": "OpStrictNEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpStrictNEq",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op Strict NEq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpSub",
      "description": {
        "fct-descr": "\u003cpre\u003e-\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpSub",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
        "fct-type": "function",
        "title": "OpSub"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpSub",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op Sub",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpZfRShift",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003e\u003e\u003e\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "OpZfRShift",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
        "fct-type": "function",
        "title": "OpZfRShift"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "OpZfRShift",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Op Zf RShift",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PostfixDec",
      "description": {
        "fct-descr": "\u003cpre\u003ex--\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "PostfixDec",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#UnaryAssignOp",
        "fct-type": "function",
        "title": "PostfixDec"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "PostfixDec",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Postfix Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PostfixInc",
      "description": {
        "fct-descr": "\u003cpre\u003ex++\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "PostfixInc",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#UnaryAssignOp",
        "fct-type": "function",
        "title": "PostfixInc"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "PostfixInc",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Postfix Inc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PrefixBNot",
      "description": {
        "fct-descr": "\u003cpre\u003e~\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "PrefixBNot",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#PrefixOp",
        "fct-type": "function",
        "title": "PrefixBNot"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "PrefixBNot",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Prefix BNot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PrefixDec",
      "description": {
        "fct-descr": "\u003cpre\u003e--x\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "PrefixDec",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#UnaryAssignOp",
        "fct-type": "function",
        "title": "PrefixDec"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "PrefixDec",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Prefix Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PrefixDelete",
      "description": {
        "fct-descr": "\u003cpre\u003edelete\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "PrefixDelete",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#PrefixOp",
        "fct-type": "function",
        "title": "PrefixDelete"
      },
      "index": {
        "description": "delete",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "PrefixDelete",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Prefix Delete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PrefixExpr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e@e\u003c/code\u003e, spec 11.4 (excluding 11.4.4, 111.4.5)\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "PrefixExpr a PrefixOp (Expression a)",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Expression",
        "fct-type": "function",
        "title": "PrefixExpr"
      },
      "index": {
        "description": "spec excluding",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "PrefixExpr",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Prefix Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PrefixInc",
      "description": {
        "fct-descr": "\u003cpre\u003e++x\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "PrefixInc",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#UnaryAssignOp",
        "fct-type": "function",
        "title": "PrefixInc"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "PrefixInc",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Prefix Inc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PrefixLNot",
      "description": {
        "fct-descr": "\u003cpre\u003e!\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "PrefixLNot",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#PrefixOp",
        "fct-type": "function",
        "title": "PrefixLNot"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "PrefixLNot",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Prefix LNot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PrefixMinus",
      "description": {
        "fct-descr": "\u003cpre\u003e-\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "PrefixMinus",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#PrefixOp",
        "fct-type": "function",
        "title": "PrefixMinus"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "PrefixMinus",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Prefix Minus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PrefixPlus",
      "description": {
        "fct-descr": "\u003cpre\u003e+\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "PrefixPlus",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#PrefixOp",
        "fct-type": "function",
        "title": "PrefixPlus"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "PrefixPlus",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Prefix Plus",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PrefixTypeof",
      "description": {
        "fct-descr": "\u003cpre\u003etypeof\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "PrefixTypeof",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#PrefixOp",
        "fct-type": "function",
        "title": "PrefixTypeof"
      },
      "index": {
        "description": "typeof",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "PrefixTypeof",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Prefix Typeof",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PrefixVoid",
      "description": {
        "fct-descr": "\u003cpre\u003evoid\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "PrefixVoid",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#PrefixOp",
        "fct-type": "function",
        "title": "PrefixVoid"
      },
      "index": {
        "description": "void",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "PrefixVoid",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Prefix Void",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PropId",
      "description": {
        "fct-descr": "\u003cp\u003eproperty name is an identifier, \u003ccode\u003efoo\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "PropId a (Id a)",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Prop",
        "fct-type": "function",
        "title": "PropId"
      },
      "index": {
        "description": "property name is an identifier foo",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "PropId",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Prop Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PropNum",
      "description": {
        "fct-descr": "\u003cp\u003eproperty name is an integer, \u003ccode\u003e42\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "PropNum a Integer",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Prop",
        "fct-type": "function",
        "title": "PropNum"
      },
      "index": {
        "description": "property name is an integer",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "PropNum",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Prop Num",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PropString",
      "description": {
        "fct-descr": "\u003cp\u003eproperty name is a string, \u003ccode\u003e\"foo\"\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "PropString a String",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Prop",
        "fct-type": "function",
        "title": "PropString"
      },
      "index": {
        "description": "property name is string foo",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "PropString",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Prop String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:RegexpLit",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eRegexpLit a regexp global?  case_insensitive?\u003c/code\u003e -- regular\n expression, see spec 11.1.3, 7.8\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "RegexpLit a String Bool Bool",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Expression",
        "fct-type": "function",
        "title": "RegexpLit"
      },
      "index": {
        "description": "RegexpLit regexp global case insensitive regular expression see spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "RegexpLit",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Regexp Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:ReturnStmt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ereturn expr;\u003c/code\u003e, spec 12.9\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "ReturnStmt a (Maybe (Expression a))",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Statement",
        "fct-type": "function",
        "title": "ReturnStmt"
      },
      "index": {
        "description": "return expr spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "ReturnStmt",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Return Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:Script",
      "description": {
        "fct-descr": "\u003cp\u003eA script in \u003cscript\u003e ... \u003c/script\u003e tags.\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "Script a [Statement a]",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#JavaScript",
        "fct-type": "function",
        "title": "Script"
      },
      "index": {
        "description": "script in script script tags",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "Script",
        "normalized": "Script a[Statement a]",
        "package": "language-ecmascript",
        "partial": "Script",
        "signature": "Script a[Statement a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:StringLit",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\"foo\"\u003c/code\u003e, spec 11.1.3, 7.8\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "StringLit a String",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Expression",
        "fct-type": "function",
        "title": "StringLit"
      },
      "index": {
        "description": "foo spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "StringLit",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "String Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:SwitchStmt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eswitch (e) clauses\u003c/code\u003e, spec 12.11\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "SwitchStmt a (Expression a) [CaseClause a]",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Statement",
        "fct-type": "function",
        "title": "SwitchStmt"
      },
      "index": {
        "description": "switch clauses spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "SwitchStmt",
        "normalized": "SwitchStmt a(Expression a)[CaseClause a]",
        "package": "language-ecmascript",
        "partial": "Switch Stmt",
        "signature": "SwitchStmt a(Expression a)[CaseClause a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:ThisRef",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ethis\u003c/code\u003e, spec 11.1.1\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "ThisRef a",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Expression",
        "fct-type": "function",
        "title": "ThisRef"
      },
      "index": {
        "description": "this spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "ThisRef",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "This Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:ThrowStmt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ethrow expr;\u003c/code\u003e, spec 12.13\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "ThrowStmt a (Expression a)",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Statement",
        "fct-type": "function",
        "title": "ThrowStmt"
      },
      "index": {
        "description": "throw expr spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "ThrowStmt",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Throw Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:TryStmt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etry stmt catch(x) stmt finally stmt\u003c/code\u003e, spec 12.14\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "TryStmt a (Statement a) (Maybe (CatchClause a)) (Maybe (Statement a))",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Statement",
        "fct-type": "function",
        "title": "TryStmt"
      },
      "index": {
        "description": "try stmt catch stmt finally stmt spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "TryStmt",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Try Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:UnaryAssignExpr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e++x\u003c/code\u003e, \u003ccode\u003ex--\u003c/code\u003e etc., spec 11.3, 11.4.4, 11.4.5\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "UnaryAssignExpr a UnaryAssignOp (LValue a)",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Expression",
        "fct-type": "function",
        "title": "UnaryAssignExpr"
      },
      "index": {
        "description": "etc spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "UnaryAssignExpr",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Unary Assign Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:VarDecl",
      "description": {
        "fct-descr": "\u003cpre\u003evar x = e;\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "VarDecl a (Id a) (Maybe (Expression a))",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#VarDecl",
        "fct-type": "function",
        "title": "VarDecl"
      },
      "index": {
        "description": "var",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "VarDecl",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Var Decl",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:VarDeclStmt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003evar x, y=42;\u003c/code\u003e, spec 12.2\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "VarDeclStmt a [VarDecl a]",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Statement",
        "fct-type": "function",
        "title": "VarDeclStmt"
      },
      "index": {
        "description": "var spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "VarDeclStmt",
        "normalized": "VarDeclStmt a[VarDecl a]",
        "package": "language-ecmascript",
        "partial": "Var Decl Stmt",
        "signature": "VarDeclStmt a[VarDecl a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:VarInit",
      "description": {
        "fct-descr": "\u003cpre\u003evar x, y=42\u003c/pre\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "VarInit [VarDecl a]",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#ForInit",
        "fct-type": "function",
        "title": "VarInit"
      },
      "index": {
        "description": "var",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "VarInit",
        "normalized": "VarInit[VarDecl a]",
        "package": "language-ecmascript",
        "partial": "Var Init",
        "signature": "VarInit[VarDecl a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:VarRef",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efoo\u003c/code\u003e, spec 11.1.2\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "VarRef a (Id a)",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Expression",
        "fct-type": "function",
        "title": "VarRef"
      },
      "index": {
        "description": "foo spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "VarRef",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "Var Ref",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:WhileStmt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ewhile (e) do stmt\u003c/code\u003e, spec 12.6\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "WhileStmt a (Expression a) (Statement a)",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Statement",
        "fct-type": "function",
        "title": "WhileStmt"
      },
      "index": {
        "description": "while do stmt spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "WhileStmt",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "While Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:WithStmt",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ewith (o) stmt\u003c/code\u003e, spec 12.10\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "WithStmt a (Expression a) (Statement a)",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#Statement",
        "fct-type": "function",
        "title": "WithStmt"
      },
      "index": {
        "description": "with stmt spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "WithStmt",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "With Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:isIterationStmt",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the statement is an \u003cem\u003eIterationStatement\u003c/em\u003e\n according to spec 12.6.\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "Statement a -\u003e Bool",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#isIterationStmt",
        "fct-type": "function",
        "title": "isIterationStmt"
      },
      "index": {
        "description": "Returns True if the statement is an IterationStatement according to spec",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "isIterationStmt",
        "normalized": "Statement a-\u003eBool",
        "package": "language-ecmascript",
        "partial": "Iteration Stmt",
        "signature": "Statement a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:unId",
      "description": {
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "Id a -\u003e String",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#unId",
        "fct-type": "function",
        "title": "unId"
      },
      "index": {
        "description": "",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "unId",
        "normalized": "Id a-\u003eString",
        "package": "language-ecmascript",
        "partial": "Id",
        "signature": "Id a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:unJavaScript",
      "description": {
        "fct-descr": "\u003cp\u003eextracts statements from a JavaScript type\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3.Syntax",
        "fct-package": "language-ecmascript",
        "fct-signature": "JavaScript a -\u003e [Statement a]",
        "fct-source": "src/Language-ECMAScript3-Syntax.html#unJavaScript",
        "fct-type": "function",
        "title": "unJavaScript"
      },
      "index": {
        "description": "extracts statements from JavaScript type",
        "hierarchy": "Language ECMAScript3 Syntax",
        "module": "Language.ECMAScript3.Syntax",
        "name": "unJavaScript",
        "normalized": "JavaScript a-\u003e[Statement a]",
        "package": "language-ecmascript",
        "partial": "Java Script",
        "signature": "JavaScript a-\u003e[Statement a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRe-exports commonly used modules.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.ECMAScript3",
        "fct-package": "language-ecmascript",
        "fct-signature": "module",
        "fct-source": "src/Language-ECMAScript3.html",
        "fct-type": "module",
        "title": "ECMAScript3"
      },
      "index": {
        "description": "Re-exports commonly used modules",
        "hierarchy": "Language ECMAScript3",
        "module": "Language.ECMAScript3",
        "name": "ECMAScript3",
        "normalized": "",
        "package": "language-ecmascript",
        "partial": "ECMAScript",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3.html#v:renderExpression",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: These interfaces are outdated and would be removed/hidden in version 1.0. Use the Pretty class instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDEPRECATED: Use \u003ccode\u003e\u003ca\u003eprettyPrint\u003c/a\u003e\u003c/code\u003e instead! Renders a list of\n statements as a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3",
        "fct-package": "language-ecmascript",
        "fct-signature": "Expression a -\u003e String",
        "fct-source": "src/Language-ECMAScript3-PrettyPrint.html#renderExpression",
        "fct-type": "function",
        "title": "renderExpression"
      },
      "index": {
        "description": "Deprecated These interfaces are outdated and would be removed hidden in version Use the Pretty class instead DEPRECATED Use prettyPrint instead Renders list of statements as String",
        "hierarchy": "Language ECMAScript3",
        "module": "Language.ECMAScript3",
        "name": "renderExpression",
        "normalized": "Expression a-\u003eString",
        "package": "language-ecmascript",
        "partial": "Expression",
        "signature": "Expression a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3.html#v:renderStatements",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: These interfaces are outdated and would be removed/hidden in version 1.0. Use the Pretty class instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDEPRECATED: Use \u003ccode\u003e\u003ca\u003eprettyPrint\u003c/a\u003e\u003c/code\u003e instead! Renders a list of\n statements as a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Language.ECMAScript3",
        "fct-package": "language-ecmascript",
        "fct-signature": "[Statement a] -\u003e String",
        "fct-source": "src/Language-ECMAScript3-PrettyPrint.html#renderStatements",
        "fct-type": "function",
        "title": "renderStatements"
      },
      "index": {
        "description": "Deprecated These interfaces are outdated and would be removed hidden in version Use the Pretty class instead DEPRECATED Use prettyPrint instead Renders list of statements as String",
        "hierarchy": "Language ECMAScript3",
        "module": "Language.ECMAScript3",
        "name": "renderStatements",
        "normalized": "[Statement a]-\u003eString",
        "package": "language-ecmascript",
        "partial": "Statements",
        "signature": "[Statement a]-\u003eString"
      }
    }
  }
]