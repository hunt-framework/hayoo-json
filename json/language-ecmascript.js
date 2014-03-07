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
        "word": "language-ecmascript"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003eLexicalEnvironment\u003c/a\u003e\u003c/code\u003e from package 'language-ecmascript-analysis'\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eA lexical environment analysis of ECMAScript programs\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.ECMAScript3.Analysis.Environment",
          "name": "Environment",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Analysis-Environment.html",
          "type": "module"
        },
        "index": {
          "description": "Deprecated Use LexicalEnvironment from package language-ecmascript-analysis lexical environment analysis of ECMAScript programs",
          "hierarchy": "Language ECMAScript3 Analysis Environment",
          "module": "Language.ECMAScript3.Analysis.Environment",
          "name": "Environment",
          "package": "language-ecmascript",
          "partial": "Environment",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Analysis-Environment.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe statically-determinate lexical structure of a JavaScript program.\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Analysis.Environment",
          "name": "EnvTree",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Analysis-Environment.html#EnvTree",
          "type": "data"
        },
        "index": {
          "description": "The statically-determinate lexical structure of JavaScript program",
          "hierarchy": "Language ECMAScript3 Analysis Environment",
          "module": "Language.ECMAScript3.Analysis.Environment",
          "name": "EnvTree",
          "package": "language-ecmascript",
          "partial": "Env Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Analysis-Environment.html#t:EnvTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Analysis.Environment",
          "name": "EnvTree",
          "package": "language-ecmascript",
          "signature": "EnvTree (Map String SourcePos) [EnvTree]",
          "source": "src/Language-ECMAScript3-Analysis-Environment.html#EnvTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Analysis Environment",
          "module": "Language.ECMAScript3.Analysis.Environment",
          "name": "EnvTree",
          "normalized": "EnvTree(Map String SourcePos)[EnvTree]",
          "package": "language-ecmascript",
          "partial": "Env Tree",
          "signature": "EnvTree(Map String SourcePos)[EnvTree]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Analysis-Environment.html#v:EnvTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Analysis.Environment",
          "name": "env",
          "package": "language-ecmascript",
          "signature": "Map String SourcePos-\u003e [Statement SourcePos]-\u003e (EnvTree, Map String SourcePos)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Analysis Environment",
          "module": "Language.ECMAScript3.Analysis.Environment",
          "name": "env",
          "normalized": "Map String SourcePos-\u003e[Statement SourcePos]-\u003e(EnvTree,Map String SourcePos)",
          "package": "language-ecmascript",
          "signature": "Map String SourcePos-\u003e[Statement SourcePos]-\u003e(EnvTree,Map String SourcePos)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Analysis-Environment.html#v:env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Analysis.Environment",
          "name": "localVars",
          "package": "language-ecmascript",
          "signature": "[Statement SourcePos] -\u003e [(String, SourcePos)]",
          "source": "src/Language-ECMAScript3-Analysis-Environment.html#localVars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Analysis Environment",
          "module": "Language.ECMAScript3.Analysis.Environment",
          "name": "localVars",
          "normalized": "[Statement SourcePos]-\u003e[(String,SourcePos)]",
          "package": "language-ecmascript",
          "partial": "Vars",
          "signature": "[Statement SourcePos]-\u003e[(String,SourcePos)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Analysis-Environment.html#v:localVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003eLabelSet\u003c/a\u003e\u003c/code\u003e from package 'language-ecmascript-analysis'\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eLabel-set analysis which annotates all the statements in the script\n with their label sets according to ECMAScript specification,\n section 12.12. The result of this analysis are useful for building\n control-flow graphs.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.ECMAScript3.Analysis.LabelSets",
          "name": "LabelSets",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Analysis-LabelSets.html",
          "type": "module"
        },
        "index": {
          "description": "Deprecated Use LabelSet from package language-ecmascript-analysis Label-set analysis which annotates all the statements in the script with their label sets according to ECMAScript specification section The result of this analysis are useful for building control-flow graphs",
          "hierarchy": "Language ECMAScript3 Analysis LabelSets",
          "module": "Language.ECMAScript3.Analysis.LabelSets",
          "name": "LabelSets",
          "package": "language-ecmascript",
          "partial": "Label Sets",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Analysis-LabelSets.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabels are either strings (identifiers) or \u003cem\u003eempty\u003c/em\u003e (see 12.12 of\n the spec)\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Analysis.LabelSets",
          "name": "Label",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Analysis-LabelSets.html#Label",
          "type": "data"
        },
        "index": {
          "description": "Labels are either strings identifiers or empty see of the spec",
          "hierarchy": "Language ECMAScript3 Analysis LabelSets",
          "module": "Language.ECMAScript3.Analysis.LabelSets",
          "name": "Label",
          "package": "language-ecmascript",
          "partial": "Label",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Analysis-LabelSets.html#t:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Analysis.LabelSets",
          "name": "EmptyLabel",
          "package": "language-ecmascript",
          "signature": "EmptyLabel",
          "source": "src/Language-ECMAScript3-Analysis-LabelSets.html#Label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Analysis LabelSets",
          "module": "Language.ECMAScript3.Analysis.LabelSets",
          "name": "EmptyLabel",
          "package": "language-ecmascript",
          "partial": "Empty Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Analysis-LabelSets.html#v:EmptyLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Analysis.LabelSets",
          "name": "Label",
          "package": "language-ecmascript",
          "signature": "Label String",
          "source": "src/Language-ECMAScript3-Analysis-LabelSets.html#Label",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Analysis LabelSets",
          "module": "Language.ECMAScript3.Analysis.LabelSets",
          "name": "Label",
          "package": "language-ecmascript",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Analysis-LabelSets.html#v:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotates statements with their label sets; example use:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet jsa = reannotate (\\a -\u003e (a, Set.empty))\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ein  annotateLabelSets jsa snd (\\labs (a, ls) -\u003e (a, labs `Set.union` ls))\n\u003c/code\u003e\u003c/strong\u003e\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Analysis.LabelSets",
          "name": "annotateLabelSets",
          "package": "language-ecmascript",
          "signature": "(a -\u003e Set Label)-\u003e (Set Label -\u003e a -\u003e a)-\u003e JavaScript a-\u003e JavaScript a",
          "type": "function"
        },
        "index": {
          "description": "Annotates statements with their label sets example use let jsa reannotate Set.empty in annotateLabelSets jsa snd labs ls labs Set.union ls",
          "hierarchy": "Language ECMAScript3 Analysis LabelSets",
          "module": "Language.ECMAScript3.Analysis.LabelSets",
          "name": "annotateLabelSets",
          "normalized": "(a-\u003eSet Label)-\u003e(Set Label-\u003ea-\u003ea)-\u003eJavaScript a-\u003eJavaScript a",
          "package": "language-ecmascript",
          "partial": "Label Sets",
          "signature": "(a-\u003eSet Label)-\u003e(Set Label-\u003ea-\u003ea)-\u003eJavaScript a-\u003eJavaScript a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Analysis-LabelSets.html#v:annotateLabelSets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis isn't a lexer in the sense that it provides a JavaScript\n token-stream. This module provides character-parsers for various\n JavaScript tokens.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.ECMAScript3.Lexer",
          "name": "Lexer",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Lexer.html",
          "type": "module"
        },
        "index": {
          "description": "This isn lexer in the sense that it provides JavaScript token-stream This module provides character-parsers for various JavaScript tokens",
          "hierarchy": "Language ECMAScript3 Lexer",
          "module": "Language.ECMAScript3.Lexer",
          "name": "Lexer",
          "package": "language-ecmascript",
          "partial": "Lexer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Lexer",
          "name": "braces",
          "package": "language-ecmascript",
          "signature": "Parser s a -\u003e Parser s a",
          "source": "src/Language-ECMAScript3-Lexer.html#braces",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Lexer",
          "module": "Language.ECMAScript3.Lexer",
          "name": "braces",
          "normalized": "Parser a b-\u003eParser a b",
          "package": "language-ecmascript",
          "signature": "Parser s a-\u003eParser s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:braces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Lexer",
          "name": "brackets",
          "package": "language-ecmascript",
          "signature": "Parser s a -\u003e Parser s a",
          "source": "src/Language-ECMAScript3-Lexer.html#brackets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Lexer",
          "module": "Language.ECMAScript3.Lexer",
          "name": "brackets",
          "normalized": "Parser a b-\u003eParser a b",
          "package": "language-ecmascript",
          "signature": "Parser s a-\u003eParser s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:brackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Lexer",
          "name": "charLiteral",
          "package": "language-ecmascript",
          "signature": "Parser s Char",
          "source": "src/Language-ECMAScript3-Lexer.html#charLiteral",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Lexer",
          "module": "Language.ECMAScript3.Lexer",
          "name": "charLiteral",
          "package": "language-ecmascript",
          "partial": "Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:charLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Lexer",
          "name": "colon",
          "package": "language-ecmascript",
          "signature": "Parser s String",
          "source": "src/Language-ECMAScript3-Lexer.html#colon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Lexer",
          "module": "Language.ECMAScript3.Lexer",
          "name": "colon",
          "package": "language-ecmascript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:colon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Lexer",
          "name": "comma",
          "package": "language-ecmascript",
          "signature": "Parser s String",
          "source": "src/Language-ECMAScript3-Lexer.html#comma",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Lexer",
          "module": "Language.ECMAScript3.Lexer",
          "name": "comma",
          "package": "language-ecmascript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:comma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Lexer",
          "name": "decDigits",
          "package": "language-ecmascript",
          "signature": "Parser s String",
          "source": "src/Language-ECMAScript3-Lexer.html#decDigits",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Lexer",
          "module": "Language.ECMAScript3.Lexer",
          "name": "decDigits",
          "package": "language-ecmascript",
          "partial": "Digits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:decDigits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Lexer",
          "name": "decDigitsOpt",
          "package": "language-ecmascript",
          "signature": "Parser s String",
          "source": "src/Language-ECMAScript3-Lexer.html#decDigitsOpt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Lexer",
          "module": "Language.ECMAScript3.Lexer",
          "name": "decDigitsOpt",
          "package": "language-ecmascript",
          "partial": "Digits Opt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:decDigitsOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Lexer",
          "name": "decIntLit",
          "package": "language-ecmascript",
          "signature": "Parser s String",
          "source": "src/Language-ECMAScript3-Lexer.html#decIntLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Lexer",
          "module": "Language.ECMAScript3.Lexer",
          "name": "decIntLit",
          "package": "language-ecmascript",
          "partial": "Int Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:decIntLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns (s, True) if the number is an integer, an (s, False)\n otherwise\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Lexer",
          "name": "decLit",
          "package": "language-ecmascript",
          "signature": "Parser s (String, Bool)",
          "source": "src/Language-ECMAScript3-Lexer.html#decLit",
          "type": "function"
        },
        "index": {
          "description": "returns True if the number is an integer an False otherwise",
          "hierarchy": "Language ECMAScript3 Lexer",
          "module": "Language.ECMAScript3.Lexer",
          "name": "decLit",
          "normalized": "Parser a(String,Bool)",
          "package": "language-ecmascript",
          "partial": "Lit",
          "signature": "Parser s(String,Bool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:decLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Lexer",
          "name": "dot",
          "package": "language-ecmascript",
          "signature": "Parser s String",
          "source": "src/Language-ECMAScript3-Lexer.html#dot",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Lexer",
          "module": "Language.ECMAScript3.Lexer",
          "name": "dot",
          "package": "language-ecmascript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Lexer",
          "name": "exponentPart",
          "package": "language-ecmascript",
          "signature": "Parser s String",
          "source": "src/Language-ECMAScript3-Lexer.html#exponentPart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Lexer",
          "module": "Language.ECMAScript3.Lexer",
          "name": "exponentPart",
          "package": "language-ecmascript",
          "partial": "Part",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:exponentPart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Lexer",
          "name": "hexIntLit",
          "package": "language-ecmascript",
          "signature": "Parser s String",
          "source": "src/Language-ECMAScript3-Lexer.html#hexIntLit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Lexer",
          "module": "Language.ECMAScript3.Lexer",
          "name": "hexIntLit",
          "package": "language-ecmascript",
          "partial": "Int Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:hexIntLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Lexer",
          "name": "identifier",
          "package": "language-ecmascript",
          "signature": "Parser s String",
          "source": "src/Language-ECMAScript3-Lexer.html#identifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Lexer",
          "module": "Language.ECMAScript3.Lexer",
          "name": "identifier",
          "package": "language-ecmascript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Lexer",
          "name": "identifierStart",
          "package": "language-ecmascript",
          "signature": "Parser s Char",
          "source": "src/Language-ECMAScript3-Lexer.html#identifierStart",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Lexer",
          "module": "Language.ECMAScript3.Lexer",
          "name": "identifierStart",
          "package": "language-ecmascript",
          "partial": "Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:identifierStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Lexer",
          "name": "lexeme",
          "package": "language-ecmascript",
          "signature": "Parser s a -\u003e Parser s a",
          "source": "src/Language-ECMAScript3-Lexer.html#lexeme",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Lexer",
          "module": "Language.ECMAScript3.Lexer",
          "name": "lexeme",
          "normalized": "Parser a b-\u003eParser a b",
          "package": "language-ecmascript",
          "signature": "Parser s a-\u003eParser s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:lexeme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Lexer",
          "name": "operator",
          "package": "language-ecmascript",
          "signature": "Parser s String",
          "source": "src/Language-ECMAScript3-Lexer.html#operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Lexer",
          "module": "Language.ECMAScript3.Lexer",
          "name": "operator",
          "package": "language-ecmascript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:operator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Lexer",
          "name": "parens",
          "package": "language-ecmascript",
          "signature": "Parser s a -\u003e Parser s a",
          "source": "src/Language-ECMAScript3-Lexer.html#parens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Lexer",
          "module": "Language.ECMAScript3.Lexer",
          "name": "parens",
          "normalized": "Parser a b-\u003eParser a b",
          "package": "language-ecmascript",
          "signature": "Parser s a-\u003eParser s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:parens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Lexer",
          "name": "reserved",
          "package": "language-ecmascript",
          "signature": "String -\u003e Parser s ()",
          "source": "src/Language-ECMAScript3-Lexer.html#reserved",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Lexer",
          "module": "Language.ECMAScript3.Lexer",
          "name": "reserved",
          "normalized": "String-\u003eParser a()",
          "package": "language-ecmascript",
          "signature": "String-\u003eParser s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:reserved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Lexer",
          "name": "reservedOp",
          "package": "language-ecmascript",
          "signature": "String -\u003e Parser s ()",
          "source": "src/Language-ECMAScript3-Lexer.html#reservedOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Lexer",
          "module": "Language.ECMAScript3.Lexer",
          "name": "reservedOp",
          "normalized": "String-\u003eParser a()",
          "package": "language-ecmascript",
          "partial": "Op",
          "signature": "String-\u003eParser s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:reservedOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Lexer",
          "name": "semi",
          "package": "language-ecmascript",
          "signature": "Parser s String",
          "source": "src/Language-ECMAScript3-Lexer.html#semi",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Lexer",
          "module": "Language.ECMAScript3.Lexer",
          "name": "semi",
          "package": "language-ecmascript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:semi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Lexer",
          "name": "squares",
          "package": "language-ecmascript",
          "signature": "Parser s a -\u003e Parser s a",
          "source": "src/Language-ECMAScript3-Lexer.html#squares",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Lexer",
          "module": "Language.ECMAScript3.Lexer",
          "name": "squares",
          "normalized": "Parser a b-\u003eParser a b",
          "package": "language-ecmascript",
          "signature": "Parser s a-\u003eParser s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:squares"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Lexer",
          "name": "stringLiteral",
          "package": "language-ecmascript",
          "signature": "Parser s String",
          "source": "src/Language-ECMAScript3-Lexer.html#stringLiteral",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Lexer",
          "module": "Language.ECMAScript3.Lexer",
          "name": "stringLiteral",
          "package": "language-ecmascript",
          "partial": "Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:stringLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Lexer",
          "name": "symbol",
          "package": "language-ecmascript",
          "signature": "String -\u003e Parser s String",
          "source": "src/Language-ECMAScript3-Lexer.html#symbol",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Lexer",
          "module": "Language.ECMAScript3.Lexer",
          "name": "symbol",
          "normalized": "String-\u003eParser a String",
          "package": "language-ecmascript",
          "signature": "String-\u003eParser s String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Lexer",
          "name": "whiteSpace",
          "package": "language-ecmascript",
          "signature": "Parser s ()",
          "source": "src/Language-ECMAScript3-Lexer.html#whiteSpace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Lexer",
          "module": "Language.ECMAScript3.Lexer",
          "name": "whiteSpace",
          "normalized": "Parser a()",
          "package": "language-ecmascript",
          "partial": "Space",
          "signature": "Parser s()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Lexer.html#v:whiteSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParser for ECMAScript 3.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.ECMAScript3.Parser",
          "name": "Parser",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Parser for ECMAScript",
          "hierarchy": "Language ECMAScript3 Parser",
          "module": "Language.ECMAScript3.Parser",
          "name": "Parser",
          "package": "language-ecmascript",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: These type aliases will be hidden in the next version\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.ECMAScript3.Parser",
          "name": "ExpressionParser",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Parser.html#ExpressionParser",
          "type": "type"
        },
        "index": {
          "description": "Deprecated These type aliases will be hidden in the next version",
          "hierarchy": "Language ECMAScript3 Parser",
          "module": "Language.ECMAScript3.Parser",
          "name": "ExpressionParser",
          "package": "language-ecmascript",
          "partial": "Expression Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#t:ExpressionParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: These type aliases will be hidden in the next version\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.ECMAScript3.Parser",
          "name": "ParsedExpression",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Parser.html#ParsedExpression",
          "type": "type"
        },
        "index": {
          "description": "Deprecated These type aliases will be hidden in the next version",
          "hierarchy": "Language ECMAScript3 Parser",
          "module": "Language.ECMAScript3.Parser",
          "name": "ParsedExpression",
          "package": "language-ecmascript",
          "partial": "Parsed Expression",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#t:ParsedExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: These type aliases will be hidden in the next version\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.ECMAScript3.Parser",
          "name": "ParsedStatement",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Parser.html#ParsedStatement",
          "type": "type"
        },
        "index": {
          "description": "Deprecated These type aliases will be hidden in the next version",
          "hierarchy": "Language ECMAScript3 Parser",
          "module": "Language.ECMAScript3.Parser",
          "name": "ParsedStatement",
          "package": "language-ecmascript",
          "partial": "Parsed Statement",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#t:ParsedStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser type, parametrised by the stream type \u003ccode\u003es\u003c/code\u003e and the\n return value \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Parser",
          "name": "Parser",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Parser-Type.html#Parser",
          "type": "type"
        },
        "index": {
          "description": "The parser type parametrised by the stream type and the return value",
          "hierarchy": "Language ECMAScript3 Parser",
          "module": "Language.ECMAScript3.Parser",
          "name": "Parser",
          "package": "language-ecmascript",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: These type aliases will be hidden in the next version\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.ECMAScript3.Parser",
          "name": "StatementParser",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Parser.html#StatementParser",
          "type": "type"
        },
        "index": {
          "description": "Deprecated These type aliases will be hidden in the next version",
          "hierarchy": "Language ECMAScript3 Parser",
          "module": "Language.ECMAScript3.Parser",
          "name": "StatementParser",
          "package": "language-ecmascript",
          "partial": "Statement Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#t:StatementParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003eexpression\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.ECMAScript3.Parser",
          "name": "assignExpr",
          "package": "language-ecmascript",
          "signature": "ExpressionParser s",
          "source": "src/Language-ECMAScript3-Parser.html#assignExpr",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use expression instead",
          "hierarchy": "Language ECMAScript3 Parser",
          "module": "Language.ECMAScript3.Parser",
          "name": "assignExpr",
          "package": "language-ecmascript",
          "partial": "Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:assignExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser that parses ECMAScript expressions\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Parser",
          "name": "expression",
          "package": "language-ecmascript",
          "signature": "Parser s (Expression SourcePos)",
          "source": "src/Language-ECMAScript3-Parser.html#expression",
          "type": "function"
        },
        "index": {
          "description": "parser that parses ECMAScript expressions",
          "hierarchy": "Language ECMAScript3 Parser",
          "module": "Language.ECMAScript3.Parser",
          "name": "expression",
          "package": "language-ecmascript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:expression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse from a stream given a parser, same as \u003ccode\u003e\u003ca\u003eparse\u003c/a\u003e\u003c/code\u003e\n in Parsec. We can use this to parse expressions or statements alone,\n not just whole programs.\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Parser",
          "name": "parse",
          "package": "language-ecmascript",
          "signature": "Parser s a-\u003e SourceName-\u003e s-\u003e Either ParseError a",
          "type": "function"
        },
        "index": {
          "description": "Parse from stream given parser same as parse in Parsec We can use this to parse expressions or statements alone not just whole programs",
          "hierarchy": "Language ECMAScript3 Parser",
          "module": "Language.ECMAScript3.Parser",
          "name": "parse",
          "normalized": "Parser a b-\u003eSourceName-\u003ea-\u003eEither ParseError b",
          "package": "language-ecmascript",
          "signature": "Parser s a-\u003eSourceName-\u003es-\u003eEither ParseError a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: These parsers will be hidden in the next version\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.ECMAScript3.Parser",
          "name": "parseBlockStmt",
          "package": "language-ecmascript",
          "signature": "StatementParser s",
          "source": "src/Language-ECMAScript3-Parser.html#parseBlockStmt",
          "type": "function"
        },
        "index": {
          "description": "Deprecated These parsers will be hidden in the next version",
          "hierarchy": "Language ECMAScript3 Parser",
          "module": "Language.ECMAScript3.Parser",
          "name": "parseBlockStmt",
          "package": "language-ecmascript",
          "partial": "Block Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:parseBlockStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003eexpression\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.ECMAScript3.Parser",
          "name": "parseExpression",
          "package": "language-ecmascript",
          "signature": "ExpressionParser s",
          "source": "src/Language-ECMAScript3-Parser.html#parseExpression",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use expression instead",
          "hierarchy": "Language ECMAScript3 Parser",
          "module": "Language.ECMAScript3.Parser",
          "name": "parseExpression",
          "package": "language-ecmascript",
          "partial": "Expression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:parseExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience function that takes a filename and tries to parse\n the file contents an ECMAScript program, it fails with an error\n message if it can't.\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Parser",
          "name": "parseFromFile",
          "package": "language-ecmascript",
          "signature": "String-\u003e m (JavaScript SourcePos)",
          "type": "function"
        },
        "index": {
          "description": "convenience function that takes filename and tries to parse the file contents an ECMAScript program it fails with an error message if it can",
          "hierarchy": "Language ECMAScript3 Parser",
          "module": "Language.ECMAScript3.Parser",
          "name": "parseFromFile",
          "normalized": "String-\u003ea(JavaScript SourcePos)",
          "package": "language-ecmascript",
          "partial": "From File",
          "signature": "String-\u003em(JavaScript SourcePos)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:parseFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience function that takes a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and tries to parse\n it as an ECMAScript program:\n\u003c/p\u003e\u003cpre\u003e parseFromString = parse program \"\"\n\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Parser",
          "name": "parseFromString",
          "package": "language-ecmascript",
          "signature": "String-\u003e Either ParseError (JavaScript SourcePos)",
          "type": "function"
        },
        "index": {
          "description": "convenience function that takes String and tries to parse it as an ECMAScript program parseFromString parse program",
          "hierarchy": "Language ECMAScript3 Parser",
          "module": "Language.ECMAScript3.Parser",
          "name": "parseFromString",
          "normalized": "String-\u003eEither ParseError(JavaScript SourcePos)",
          "package": "language-ecmascript",
          "partial": "From String",
          "signature": "String-\u003eEither ParseError(JavaScript SourcePos)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:parseFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003eparseFromFile\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eRead a JavaScript program from file an parse it into a list of\n statements\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Parser",
          "name": "parseJavaScriptFromFile",
          "package": "language-ecmascript",
          "signature": "String-\u003e m [Statement SourcePos]",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use parseFromFile instead Read JavaScript program from file an parse it into list of statements",
          "hierarchy": "Language ECMAScript3 Parser",
          "module": "Language.ECMAScript3.Parser",
          "name": "parseJavaScriptFromFile",
          "normalized": "String-\u003ea[Statement SourcePos]",
          "package": "language-ecmascript",
          "partial": "Java Script From File",
          "signature": "String-\u003em[Statement SourcePos]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:parseJavaScriptFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: These parsers will be hidden in the next version\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.ECMAScript3.Parser",
          "name": "parseObjectLit",
          "package": "language-ecmascript",
          "signature": "ExpressionParser s",
          "source": "src/Language-ECMAScript3-Parser.html#parseObjectLit",
          "type": "function"
        },
        "index": {
          "description": "Deprecated These parsers will be hidden in the next version",
          "hierarchy": "Language ECMAScript3 Parser",
          "module": "Language.ECMAScript3.Parser",
          "name": "parseObjectLit",
          "package": "language-ecmascript",
          "partial": "Object Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:parseObjectLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003eprogram\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.ECMAScript3.Parser",
          "name": "parseScript",
          "package": "language-ecmascript",
          "signature": "Parser s (JavaScript SourcePos)",
          "source": "src/Language-ECMAScript3-Parser.html#parseScript",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use program instead",
          "hierarchy": "Language ECMAScript3 Parser",
          "module": "Language.ECMAScript3.Parser",
          "name": "parseScript",
          "package": "language-ecmascript",
          "partial": "Script",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:parseScript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003eparseFromString\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eParse a JavaScript program from a string\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Parser",
          "name": "parseScriptFromString",
          "package": "language-ecmascript",
          "signature": "String-\u003e String-\u003e Either ParseError (JavaScript SourcePos)",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use parseFromString instead Parse JavaScript program from string",
          "hierarchy": "Language ECMAScript3 Parser",
          "module": "Language.ECMAScript3.Parser",
          "name": "parseScriptFromString",
          "normalized": "String-\u003eString-\u003eEither ParseError(JavaScript SourcePos)",
          "package": "language-ecmascript",
          "partial": "Script From String",
          "signature": "String-\u003eString-\u003eEither ParseError(JavaScript SourcePos)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:parseScriptFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: These parsers will be hidden in the next version\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.ECMAScript3.Parser",
          "name": "parseSimpleExpr'",
          "package": "language-ecmascript",
          "signature": "ExpressionParser s",
          "source": "src/Language-ECMAScript3-Parser.html#parseSimpleExpr%27",
          "type": "function"
        },
        "index": {
          "description": "Deprecated These parsers will be hidden in the next version",
          "hierarchy": "Language ECMAScript3 Parser",
          "module": "Language.ECMAScript3.Parser",
          "name": "parseSimpleExpr'",
          "package": "language-ecmascript",
          "partial": "Simple Expr'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:parseSimpleExpr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003estatement\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.ECMAScript3.Parser",
          "name": "parseStatement",
          "package": "language-ecmascript",
          "signature": "StatementParser s",
          "source": "src/Language-ECMAScript3-Parser.html#parseStatement",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use statement instead",
          "hierarchy": "Language ECMAScript3 Parser",
          "module": "Language.ECMAScript3.Parser",
          "name": "parseStatement",
          "package": "language-ecmascript",
          "partial": "Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:parseStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use \u003ccode\u003e\u003ca\u003eparseFromString\u003c/a\u003e\u003c/code\u003e instead\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eParse a JavaScript source string into a list of statements\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Parser",
          "name": "parseString",
          "package": "language-ecmascript",
          "signature": "String-\u003e [Statement SourcePos]",
          "type": "function"
        },
        "index": {
          "description": "Deprecated Use parseFromString instead Parse JavaScript source string into list of statements",
          "hierarchy": "Language ECMAScript3 Parser",
          "module": "Language.ECMAScript3.Parser",
          "name": "parseString",
          "normalized": "String-\u003e[Statement SourcePos]",
          "package": "language-ecmascript",
          "partial": "String",
          "signature": "String-\u003e[Statement SourcePos]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:parseString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parser that parses an ECMAScript program.\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Parser",
          "name": "program",
          "package": "language-ecmascript",
          "signature": "Parser s (JavaScript SourcePos)",
          "source": "src/Language-ECMAScript3-Parser.html#program",
          "type": "function"
        },
        "index": {
          "description": "parser that parses an ECMAScript program",
          "hierarchy": "Language ECMAScript3 Parser",
          "module": "Language.ECMAScript3.Parser",
          "name": "program",
          "package": "language-ecmascript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:program"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe parser that parses a single ECMAScript statement\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Parser",
          "name": "statement",
          "package": "language-ecmascript",
          "signature": "Parser s (Statement SourcePos)",
          "source": "src/Language-ECMAScript3-Parser.html#statement",
          "type": "function"
        },
        "index": {
          "description": "The parser that parses single ECMAScript statement",
          "hierarchy": "Language ECMAScript3 Parser",
          "module": "Language.ECMAScript3.Parser",
          "name": "statement",
          "package": "language-ecmascript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Parser.html#v:statement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty-printing JavaScript.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.ECMAScript3.PrettyPrint",
          "name": "PrettyPrint",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-PrettyPrint.html",
          "type": "module"
        },
        "index": {
          "description": "Pretty-printing JavaScript",
          "hierarchy": "Language ECMAScript3 PrettyPrint",
          "module": "Language.ECMAScript3.PrettyPrint",
          "name": "PrettyPrint",
          "package": "language-ecmascript",
          "partial": "Pretty Print",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-PrettyPrint.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: These interfaces are outdated and would be removed/hidden in version 1.0. Use the Pretty class instead.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.ECMAScript3.PrettyPrint",
          "name": "PP",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-PrettyPrint.html#PP",
          "type": "class"
        },
        "index": {
          "description": "Deprecated These interfaces are outdated and would be removed hidden in version Use the Pretty class instead",
          "hierarchy": "Language ECMAScript3 PrettyPrint",
          "module": "Language.ECMAScript3.PrettyPrint",
          "name": "PP",
          "package": "language-ecmascript",
          "partial": "PP",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-PrettyPrint.html#t:PP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class of pretty-printable ECMAScript AST nodes.\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.PrettyPrint",
          "name": "Pretty",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-PrettyPrint.html#Pretty",
          "type": "class"
        },
        "index": {
          "description": "class of pretty-printable ECMAScript AST nodes",
          "hierarchy": "Language ECMAScript3 PrettyPrint",
          "module": "Language.ECMAScript3.PrettyPrint",
          "name": "Pretty",
          "package": "language-ecmascript",
          "partial": "Pretty",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-PrettyPrint.html#t:Pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: These interfaces are outdated and would be removed/hidden in version 1.0. Use the Pretty class instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDEPRECATED: Use \u003ccode\u003e\u003ca\u003eprettyPrint\u003c/a\u003e\u003c/code\u003e instead! Renders a JavaScript\n program as a document, the show instance of \u003ccode\u003e\u003ca\u003eDoc\u003c/a\u003e\u003c/code\u003e will pretty-print\n it automatically\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.PrettyPrint",
          "name": "javaScript",
          "package": "language-ecmascript",
          "signature": "JavaScript a -\u003e Doc",
          "source": "src/Language-ECMAScript3-PrettyPrint.html#javaScript",
          "type": "function"
        },
        "index": {
          "description": "Deprecated These interfaces are outdated and would be removed hidden in version Use the Pretty class instead DEPRECATED Use prettyPrint instead Renders JavaScript program as document the show instance of Doc will pretty-print it automatically",
          "hierarchy": "Language ECMAScript3 PrettyPrint",
          "module": "Language.ECMAScript3.PrettyPrint",
          "name": "javaScript",
          "normalized": "JavaScript a-\u003eDoc",
          "package": "language-ecmascript",
          "partial": "Script",
          "signature": "JavaScript a-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-PrettyPrint.html#v:javaScript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.PrettyPrint",
          "name": "pp",
          "package": "language-ecmascript",
          "signature": "a -\u003e Doc",
          "source": "src/Language-ECMAScript3-PrettyPrint.html#pp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 PrettyPrint",
          "module": "Language.ECMAScript3.PrettyPrint",
          "name": "pp",
          "normalized": "a-\u003eDoc",
          "package": "language-ecmascript",
          "signature": "a-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-PrettyPrint.html#v:pp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty-print an ECMAScript AST node. Use \u003ccode\u003erender\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e to\n convert \u003ccode\u003e\u003ca\u003eDoc\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.PrettyPrint",
          "name": "prettyPrint",
          "package": "language-ecmascript",
          "signature": "a -\u003e Doc",
          "source": "src/Language-ECMAScript3-PrettyPrint.html#prettyPrint",
          "type": "method"
        },
        "index": {
          "description": "Pretty-print an ECMAScript AST node Use render or show to convert Doc to String",
          "hierarchy": "Language ECMAScript3 PrettyPrint",
          "module": "Language.ECMAScript3.PrettyPrint",
          "name": "prettyPrint",
          "normalized": "a-\u003eDoc",
          "package": "language-ecmascript",
          "partial": "Print",
          "signature": "a-\u003eDoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-PrettyPrint.html#v:prettyPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: These interfaces are outdated and would be removed/hidden in version 1.0. Use the Pretty class instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDEPRECATED: Use \u003ccode\u003e\u003ca\u003eprettyPrint\u003c/a\u003e\u003c/code\u003e instead! Renders a list of\n statements as a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Language.ECMAScript3.PrettyPrint\",\"Language.ECMAScript3\"]",
          "name": "renderExpression",
          "package": "language-ecmascript",
          "signature": "Expression a -\u003e String",
          "source": "src/Language-ECMAScript3-PrettyPrint.html#renderExpression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-PrettyPrint.html#v:renderExpression\",\"http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3.html#v:renderExpression\"]"
        },
        "index": {
          "description": "Deprecated These interfaces are outdated and would be removed hidden in version Use the Pretty class instead DEPRECATED Use prettyPrint instead Renders list of statements as String",
          "hierarchy": "Language ECMAScript3 PrettyPrint",
          "module": "Language.ECMAScript3.PrettyPrint",
          "name": "renderExpression",
          "normalized": "Expression a-\u003eString",
          "package": "language-ecmascript",
          "partial": "Expression",
          "signature": "Expression a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-PrettyPrint.html#v:renderExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: These interfaces are outdated and would be removed/hidden in version 1.0. Use the Pretty class instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDEPRECATED: Use \u003ccode\u003e\u003ca\u003eprettyPrint\u003c/a\u003e\u003c/code\u003e instead! Renders a list of\n statements as a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Language.ECMAScript3.PrettyPrint\",\"Language.ECMAScript3\"]",
          "name": "renderStatements",
          "package": "language-ecmascript",
          "signature": "[Statement a] -\u003e String",
          "source": "src/Language-ECMAScript3-PrettyPrint.html#renderStatements",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-PrettyPrint.html#v:renderStatements\",\"http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3.html#v:renderStatements\"]"
        },
        "index": {
          "description": "Deprecated These interfaces are outdated and would be removed hidden in version Use the Pretty class instead DEPRECATED Use prettyPrint instead Renders list of statements as String",
          "hierarchy": "Language ECMAScript3 PrettyPrint",
          "module": "Language.ECMAScript3.PrettyPrint",
          "name": "renderStatements",
          "normalized": "[Statement a]-\u003eString",
          "package": "language-ecmascript",
          "partial": "Statements",
          "signature": "[Statement a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-PrettyPrint.html#v:renderStatements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate to tell if the expression --when pretty-printed--\n will begin with \u003ca\u003efunction\u003c/a\u003e or '{' and be thus unsafe to use in an\n expression statement without wrapping it in '()'.\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.PrettyPrint",
          "name": "unsafeInExprStmt",
          "package": "language-ecmascript",
          "signature": "Expression a -\u003e Bool",
          "source": "src/Language-ECMAScript3-PrettyPrint.html#unsafeInExprStmt",
          "type": "function"
        },
        "index": {
          "description": "predicate to tell if the expression when pretty-printed will begin with function or and be thus unsafe to use in an expression statement without wrapping it in",
          "hierarchy": "Language ECMAScript3 PrettyPrint",
          "module": "Language.ECMAScript3.PrettyPrint",
          "name": "unsafeInExprStmt",
          "normalized": "Expression a-\u003eBool",
          "package": "language-ecmascript",
          "partial": "In Expr Stmt",
          "signature": "Expression a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-PrettyPrint.html#v:unsafeInExprStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple textual diffing of JavaScript programs for inspecting test\n failures\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.ECMAScript3.SourceDiff",
          "name": "SourceDiff",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-SourceDiff.html",
          "type": "module"
        },
        "index": {
          "description": "Simple textual diffing of JavaScript programs for inspecting test failures",
          "hierarchy": "Language ECMAScript3 SourceDiff",
          "module": "Language.ECMAScript3.SourceDiff",
          "name": "SourceDiff",
          "package": "language-ecmascript",
          "partial": "Source Diff",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-SourceDiff.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.SourceDiff",
          "name": "jsDiff",
          "package": "language-ecmascript",
          "signature": "JavaScript a -\u003e JavaScript a -\u003e String",
          "source": "src/Language-ECMAScript3-SourceDiff.html#jsDiff",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 SourceDiff",
          "module": "Language.ECMAScript3.SourceDiff",
          "name": "jsDiff",
          "normalized": "JavaScript a-\u003eJavaScript a-\u003eString",
          "package": "language-ecmascript",
          "partial": "Diff",
          "signature": "JavaScript a-\u003eJavaScript a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-SourceDiff.html#v:jsDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA few helpers to work with the AST annotations\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.ECMAScript3.Syntax.Annotations",
          "name": "Annotations",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Syntax-Annotations.html",
          "type": "module"
        },
        "index": {
          "description": "few helpers to work with the AST annotations",
          "hierarchy": "Language ECMAScript3 Syntax Annotations",
          "module": "Language.ECMAScript3.Syntax.Annotations",
          "name": "Annotations",
          "package": "language-ecmascript",
          "partial": "Annotations",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Annotations.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThings that have annotations -- for example, nodes in a syntax\n tree\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax.Annotations",
          "name": "HasAnnotation",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Syntax-Annotations.html#HasAnnotation",
          "type": "class"
        },
        "index": {
          "description": "Things that have annotations for example nodes in syntax tree",
          "hierarchy": "Language ECMAScript3 Syntax Annotations",
          "module": "Language.ECMAScript3.Syntax.Annotations",
          "name": "HasAnnotation",
          "package": "language-ecmascript",
          "partial": "Has Annotation",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Annotations.html#t:HasAnnotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd an extra field to the AST labels (the label would look like \u003ccode\u003e\n (a, b) \u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax.Annotations",
          "name": "addExtraAnnotationField",
          "package": "language-ecmascript",
          "signature": "b -\u003e t a -\u003e t (a, b)",
          "source": "src/Language-ECMAScript3-Syntax-Annotations.html#addExtraAnnotationField",
          "type": "function"
        },
        "index": {
          "description": "add an extra field to the AST labels the label would look like",
          "hierarchy": "Language ECMAScript3 Syntax Annotations",
          "module": "Language.ECMAScript3.Syntax.Annotations",
          "name": "addExtraAnnotationField",
          "normalized": "a-\u003eb c-\u003eb(c,a)",
          "package": "language-ecmascript",
          "partial": "Extra Annotation Field",
          "signature": "b-\u003et a-\u003et(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Annotations.html#v:addExtraAnnotationField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssigns unique numeric (Int) ids to each node in the AST. Returns\n a pair: the tree annotated with UID's and the last ID that was\n assigned.\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax.Annotations",
          "name": "assignUniqueIds",
          "package": "language-ecmascript",
          "signature": "Int-\u003e t a-\u003e (t (a, Int), Int)",
          "type": "function"
        },
        "index": {
          "description": "Assigns unique numeric Int ids to each node in the AST Returns pair the tree annotated with UID and the last ID that was assigned",
          "hierarchy": "Language ECMAScript3 Syntax Annotations",
          "module": "Language.ECMAScript3.Syntax.Annotations",
          "name": "assignUniqueIds",
          "normalized": "Int-\u003ea b-\u003e(a(b,Int),Int)",
          "package": "language-ecmascript",
          "partial": "Unique Ids",
          "signature": "Int-\u003et a-\u003e(t(a,Int),Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Annotations.html#v:assignUniqueIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the annotation of the root of the tree\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax.Annotations",
          "name": "getAnnotation",
          "package": "language-ecmascript",
          "signature": "a b -\u003e b",
          "source": "src/Language-ECMAScript3-Syntax-Annotations.html#getAnnotation",
          "type": "method"
        },
        "index": {
          "description": "Returns the annotation of the root of the tree",
          "hierarchy": "Language ECMAScript3 Syntax Annotations",
          "module": "Language.ECMAScript3.Syntax.Annotations",
          "name": "getAnnotation",
          "normalized": "a b-\u003eb",
          "package": "language-ecmascript",
          "partial": "Annotation",
          "signature": "a b-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Annotations.html#v:getAnnotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChanges all the labels in the tree to another one, given by a\n function.\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax.Annotations",
          "name": "reannotate",
          "package": "language-ecmascript",
          "signature": "(a -\u003e b) -\u003e t a -\u003e t b",
          "source": "src/Language-ECMAScript3-Syntax-Annotations.html#reannotate",
          "type": "function"
        },
        "index": {
          "description": "Changes all the labels in the tree to another one given by function",
          "hierarchy": "Language ECMAScript3 Syntax Annotations",
          "module": "Language.ECMAScript3.Syntax.Annotations",
          "name": "reannotate",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "language-ecmascript",
          "signature": "(a-\u003eb)-\u003et a-\u003et b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Annotations.html#v:reannotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves annotations from a tree\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax.Annotations",
          "name": "removeAnnotations",
          "package": "language-ecmascript",
          "signature": "t a -\u003e t ()",
          "source": "src/Language-ECMAScript3-Syntax-Annotations.html#removeAnnotations",
          "type": "function"
        },
        "index": {
          "description": "Removes annotations from tree",
          "hierarchy": "Language ECMAScript3 Syntax Annotations",
          "module": "Language.ECMAScript3.Syntax.Annotations",
          "name": "removeAnnotations",
          "normalized": "a b-\u003ea()",
          "package": "language-ecmascript",
          "partial": "Annotations",
          "signature": "t a-\u003et()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Annotations.html#v:removeAnnotations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eremove an extra field\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax.Annotations",
          "name": "removeExtraAnnotationField",
          "package": "language-ecmascript",
          "signature": "t (a, b) -\u003e t a",
          "source": "src/Language-ECMAScript3-Syntax-Annotations.html#removeExtraAnnotationField",
          "type": "function"
        },
        "index": {
          "description": "remove an extra field",
          "hierarchy": "Language ECMAScript3 Syntax Annotations",
          "module": "Language.ECMAScript3.Syntax.Annotations",
          "name": "removeExtraAnnotationField",
          "normalized": "a(b,c)-\u003ea b",
          "package": "language-ecmascript",
          "partial": "Extra Annotation Field",
          "signature": "t(a,b)-\u003et a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Annotations.html#v:removeExtraAnnotationField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the annotation of the root of the tree  \n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax.Annotations",
          "name": "setAnnotation",
          "package": "language-ecmascript",
          "signature": "b -\u003e a b -\u003e a b",
          "source": "src/Language-ECMAScript3-Syntax-Annotations.html#setAnnotation",
          "type": "method"
        },
        "index": {
          "description": "Sets the annotation of the root of the tree",
          "hierarchy": "Language ECMAScript3 Syntax Annotations",
          "module": "Language.ECMAScript3.Syntax.Annotations",
          "name": "setAnnotation",
          "normalized": "a-\u003eb a-\u003eb a",
          "package": "language-ecmascript",
          "partial": "Annotation",
          "signature": "b-\u003ea b-\u003ea b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Annotations.html#v:setAnnotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the annotation of the root node of the syntax tree\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax.Annotations",
          "name": "withAnnotation",
          "package": "language-ecmascript",
          "signature": "(b -\u003e b) -\u003e a b -\u003e a b",
          "source": "src/Language-ECMAScript3-Syntax-Annotations.html#withAnnotation",
          "type": "function"
        },
        "index": {
          "description": "Modify the annotation of the root node of the syntax tree",
          "hierarchy": "Language ECMAScript3 Syntax Annotations",
          "module": "Language.ECMAScript3.Syntax.Annotations",
          "name": "withAnnotation",
          "normalized": "(a-\u003ea)-\u003eb a-\u003eb a",
          "package": "language-ecmascript",
          "partial": "Annotation",
          "signature": "(b-\u003eb)-\u003ea b-\u003ea b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Annotations.html#v:withAnnotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eQuickCheck $Arbitrary$ instances for ECMAScript 3 abstract\n syntax.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "Arbitrary",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Syntax-Arbitrary.html",
          "type": "module"
        },
        "index": {
          "description": "QuickCheck Arbitrary instances for ECMAScript abstract syntax",
          "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "Arbitrary",
          "package": "language-ecmascript",
          "partial": "Arbitrary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "LabelSubst",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#LabelSubst",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "LabelSubst",
          "package": "language-ecmascript",
          "partial": "Label Subst",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#t:LabelSubst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "MSGen",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#MSGen",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "MSGen",
          "package": "language-ecmascript",
          "partial": "MSGen",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#t:MSGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "atLeastOfSize",
          "package": "language-ecmascript",
          "signature": "Int -\u003e Gen a -\u003e Gen a",
          "source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#atLeastOfSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "atLeastOfSize",
          "normalized": "Int-\u003eGen a-\u003eGen a",
          "package": "language-ecmascript",
          "partial": "Least Of Size",
          "signature": "Int-\u003eGen a-\u003eGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:atLeastOfSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "cshrink",
          "package": "language-ecmascript",
          "signature": "[a] -\u003e [a]",
          "source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#cshrink",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "cshrink",
          "normalized": "[a]-\u003e[a]",
          "package": "language-ecmascript",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:cshrink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "emptyConstantPool",
          "package": "language-ecmascript",
          "signature": "Map k a",
          "source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#emptyConstantPool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "emptyConstantPool",
          "package": "language-ecmascript",
          "partial": "Constant Pool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:emptyConstantPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "emptyStmtShrink",
          "package": "language-ecmascript",
          "signature": "a -\u003e [Statement a]",
          "source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#emptyStmtShrink",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "emptyStmtShrink",
          "normalized": "a-\u003e[Statement a]",
          "package": "language-ecmascript",
          "partial": "Stmt Shrink",
          "signature": "a-\u003e[Statement a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:emptyStmtShrink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChanges labels of break/continue so that they refer to one of the\n enclosing labels\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "fixBreakContinueLabels",
          "package": "language-ecmascript",
          "signature": "JavaScript a -\u003e Gen (JavaScript a)",
          "source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#fixBreakContinueLabels",
          "type": "function"
        },
        "index": {
          "description": "Changes labels of break continue so that they refer to one of the enclosing labels",
          "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "fixBreakContinueLabels",
          "normalized": "JavaScript a-\u003eGen(JavaScript a)",
          "package": "language-ecmascript",
          "partial": "Break Continue Labels",
          "signature": "JavaScript a-\u003eGen(JavaScript a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:fixBreakContinueLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFixes labels so that labeled breaks and continues refer to\n existing labeled statements, enclosing them; also, reduces the size\n of the label set. Assumes that the program has a proper syntactic\n structure, i.e. \u003ccode\u003e\u003ca\u003eisProgramFixable\u003c/a\u003e\u003c/code\u003e s = True.\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "fixLabels",
          "package": "language-ecmascript",
          "signature": "JavaScript a -\u003e Gen (JavaScript a)",
          "source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#fixLabels",
          "type": "function"
        },
        "index": {
          "description": "Fixes labels so that labeled breaks and continues refer to existing labeled statements enclosing them also reduces the size of the label set Assumes that the program has proper syntactic structure i.e isProgramFixable True",
          "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "fixLabels",
          "normalized": "JavaScript a-\u003eGen(JavaScript a)",
          "package": "language-ecmascript",
          "partial": "Labels",
          "signature": "JavaScript a-\u003eGen(JavaScript a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:fixLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "identifier",
          "package": "language-ecmascript",
          "signature": "Gen String",
          "source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#identifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "identifier",
          "package": "language-ecmascript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImposes relaxed restrictions on break and continue per ECMAScript\n 5 spec (page 92): any continue without a label should be nested\n within an iteration stmt, any continue with a label should be\n nested in a labeled statement (not necessarily with the same\n label); any break statement without a label should be nested in an\n iteration or switch stmt, any break statement with a label should\n be nested in a labeled statement (not necessarily with the same\n label).\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "isBreakContinueFixable",
          "package": "language-ecmascript",
          "signature": "Statement a -\u003e Bool -\u003e Bool -\u003e Bool -\u003e Bool",
          "source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#isBreakContinueFixable",
          "type": "function"
        },
        "index": {
          "description": "Imposes relaxed restrictions on break and continue per ECMAScript spec page any continue without label should be nested within an iteration stmt any continue with label should be nested in labeled statement not necessarily with the same label any break statement without label should be nested in an iteration or switch stmt any break statement with label should be nested in labeled statement not necessarily with the same label",
          "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "isBreakContinueFixable",
          "normalized": "Statement a-\u003eBool-\u003eBool-\u003eBool-\u003eBool",
          "package": "language-ecmascript",
          "partial": "Break Continue Fixable",
          "signature": "Statement a-\u003eBool-\u003eBool-\u003eBool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:isBreakContinueFixable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that tells us whether a program has a fixable/correct\n label-break/continue structure.  The predicate imposes syntactic\n restrictions on the break, continue and labeled statements as in\n the ECMA spec\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "isProgramFixable",
          "package": "language-ecmascript",
          "signature": "JavaScript a -\u003e Bool",
          "source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#isProgramFixable",
          "type": "function"
        },
        "index": {
          "description": "predicate that tells us whether program has fixable correct label-break continue structure The predicate imposes syntactic restrictions on the break continue and labeled statements as in the ECMA spec",
          "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "isProgramFixable",
          "normalized": "JavaScript a-\u003eBool",
          "package": "language-ecmascript",
          "partial": "Program Fixable",
          "signature": "JavaScript a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:isProgramFixable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "isSwitchStmt",
          "package": "language-ecmascript",
          "signature": "Statement a -\u003e Bool",
          "source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#isSwitchStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "isSwitchStmt",
          "normalized": "Statement a-\u003eBool",
          "package": "language-ecmascript",
          "partial": "Switch Stmt",
          "signature": "Statement a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:isSwitchStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "listOfN",
          "package": "language-ecmascript",
          "signature": "Int -\u003e Gen a -\u003e Gen [a]",
          "source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#listOfN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "listOfN",
          "normalized": "Int-\u003eGen a-\u003eGen[a]",
          "package": "language-ecmascript",
          "partial": "Of",
          "signature": "Int-\u003eGen a-\u003eGen[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:listOfN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "nonEmptyString",
          "package": "language-ecmascript",
          "signature": "Gen String",
          "source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#nonEmptyString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "nonEmptyString",
          "package": "language-ecmascript",
          "partial": "Empty String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:nonEmptyString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "nonNegative",
          "package": "language-ecmascript",
          "signature": "Gen a",
          "source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#nonNegative",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "nonNegative",
          "package": "language-ecmascript",
          "partial": "Negative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:nonNegative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003echoose n elements from a list randomly\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "rChooseElem",
          "package": "language-ecmascript",
          "signature": "[a] -\u003e Int -\u003e Gen [a]",
          "source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#rChooseElem",
          "type": "function"
        },
        "index": {
          "description": "choose elements from list randomly",
          "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "rChooseElem",
          "normalized": "[a]-\u003eInt-\u003eGen[a]",
          "package": "language-ecmascript",
          "partial": "Choose Elem",
          "signature": "[a]-\u003eInt-\u003eGen[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:rChooseElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "rarbitrary",
          "package": "language-ecmascript",
          "signature": "Gen a",
          "source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#rarbitrary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "rarbitrary",
          "package": "language-ecmascript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:rarbitrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "recursive",
          "package": "language-ecmascript",
          "signature": "Gen a -\u003e Gen a",
          "source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#recursive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "recursive",
          "normalized": "Gen a-\u003eGen a",
          "package": "language-ecmascript",
          "signature": "Gen a-\u003eGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:recursive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "regexpBody",
          "package": "language-ecmascript",
          "signature": "Gen String",
          "source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#regexpBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "regexpBody",
          "package": "language-ecmascript",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:regexpBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves duplicate labels from nested labeled statements in order\n to impose restrictions on labeled statements as per ECMAScript 5\n spec (page 95): nested labeled statements cannot have duplicating\n labels.\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "removeDuplicateLabels",
          "package": "language-ecmascript",
          "signature": "JavaScript a -\u003e Gen (JavaScript a)",
          "source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#removeDuplicateLabels",
          "type": "function"
        },
        "index": {
          "description": "Removes duplicate labels from nested labeled statements in order to impose restrictions on labeled statements as per ECMAScript spec page nested labeled statements cannot have duplicating labels",
          "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "removeDuplicateLabels",
          "normalized": "JavaScript a-\u003eGen(JavaScript a)",
          "package": "language-ecmascript",
          "partial": "Duplicate Labels",
          "signature": "JavaScript a-\u003eGen(JavaScript a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:removeDuplicateLabels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "rrarbitrary",
          "package": "language-ecmascript",
          "signature": "Gen a",
          "source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#rrarbitrary",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "rrarbitrary",
          "package": "language-ecmascript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:rrarbitrary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "sGen",
          "package": "language-ecmascript",
          "signature": "[MSGen a] -\u003e Gen a",
          "source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#sGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "sGen",
          "normalized": "[MSGen a]-\u003eGen a",
          "package": "language-ecmascript",
          "partial": "Gen",
          "signature": "[MSGen a]-\u003eGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:sGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelects a random element of the list\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "selectRandomElement",
          "package": "language-ecmascript",
          "signature": "[a] -\u003e Gen a",
          "source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#selectRandomElement",
          "type": "function"
        },
        "index": {
          "description": "Selects random element of the list",
          "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "selectRandomElement",
          "normalized": "[a]-\u003eGen a",
          "package": "language-ecmascript",
          "partial": "Random Element",
          "signature": "[a]-\u003eGen a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:selectRandomElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "stringOfLength",
          "package": "language-ecmascript",
          "signature": "Int -\u003e Gen String",
          "source": "src/Language-ECMAScript3-Syntax-Arbitrary.html#stringOfLength",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax Arbitrary",
          "module": "Language.ECMAScript3.Syntax.Arbitrary",
          "name": "stringOfLength",
          "normalized": "Int-\u003eGen String",
          "package": "language-ecmascript",
          "partial": "Of Length",
          "signature": "Int-\u003eGen String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-Arbitrary.html#v:stringOfLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExperimental and very simple quasi-quotation of ECMAScript in\n Haskell. Doesn't support anti-quotation as of now.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.ECMAScript3.Syntax.QuasiQuote",
          "name": "QuasiQuote",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Syntax-QuasiQuote.html",
          "type": "module"
        },
        "index": {
          "description": "Experimental and very simple quasi-quotation of ECMAScript in Haskell Doesn support anti-quotation as of now",
          "hierarchy": "Language ECMAScript3 Syntax QuasiQuote",
          "module": "Language.ECMAScript3.Syntax.QuasiQuote",
          "name": "QuasiQuote",
          "package": "language-ecmascript",
          "partial": "Quasi Quote",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-QuasiQuote.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Syntax.QuasiQuote",
          "name": "js",
          "package": "language-ecmascript",
          "signature": "QuasiQuoter",
          "source": "src/Language-ECMAScript3-Syntax-QuasiQuote.html#js",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax QuasiQuote",
          "module": "Language.ECMAScript3.Syntax.QuasiQuote",
          "name": "js",
          "package": "language-ecmascript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-QuasiQuote.html#v:js"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Syntax.QuasiQuote",
          "name": "jsexpr",
          "package": "language-ecmascript",
          "signature": "QuasiQuoter",
          "source": "src/Language-ECMAScript3-Syntax-QuasiQuote.html#jsexpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax QuasiQuote",
          "module": "Language.ECMAScript3.Syntax.QuasiQuote",
          "name": "jsexpr",
          "package": "language-ecmascript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-QuasiQuote.html#v:jsexpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Syntax.QuasiQuote",
          "name": "jsstmt",
          "package": "language-ecmascript",
          "signature": "QuasiQuoter",
          "source": "src/Language-ECMAScript3-Syntax-QuasiQuote.html#jsstmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax QuasiQuote",
          "module": "Language.ECMAScript3.Syntax.QuasiQuote",
          "name": "jsstmt",
          "package": "language-ecmascript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax-QuasiQuote.html#v:jsstmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eECMAScript 3 syntax. \u003cem\u003eSpec\u003c/em\u003e refers to the ECMA-262 specification,\n 3rd edition.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "Syntax",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Syntax.html",
          "type": "module"
        },
        "index": {
          "description": "ECMAScript syntax Spec refers to the ECMA-262 specification rd edition",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "Syntax",
          "package": "language-ecmascript",
          "partial": "Syntax",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssignment operators: see spec 11.13\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "AssignOp",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Syntax.html#AssignOp",
          "type": "data"
        },
        "index": {
          "description": "Assignment operators see spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "AssignOp",
          "package": "language-ecmascript",
          "partial": "Assign Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:AssignOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase clauses, spec 12.11\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "CaseClause",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Syntax.html#CaseClause",
          "type": "data"
        },
        "index": {
          "description": "Case clauses spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "CaseClause",
          "package": "language-ecmascript",
          "partial": "Case Clause",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:CaseClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch clause, spec 12.14\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "CatchClause",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Syntax.html#CatchClause",
          "type": "data"
        },
        "index": {
          "description": "Catch clause spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "CatchClause",
          "package": "language-ecmascript",
          "partial": "Catch Clause",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:CatchClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpressions, see spec 11\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "Expression",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Syntax.html#Expression",
          "type": "data"
        },
        "index": {
          "description": "Expressions see spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "Expression",
          "package": "language-ecmascript",
          "partial": "Expression",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:Expression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efor..in initializer, spec 12.6\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ForInInit",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Syntax.html#ForInInit",
          "type": "data"
        },
        "index": {
          "description": "for..in initializer spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ForInInit",
          "package": "language-ecmascript",
          "partial": "For In Init",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:ForInInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efor initializer, spec 12.6\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ForInit",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Syntax.html#ForInit",
          "type": "data"
        },
        "index": {
          "description": "for initializer spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ForInit",
          "package": "language-ecmascript",
          "partial": "For Init",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:ForInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Syntax",
          "name": "Id",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Syntax.html#Id",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "Id",
          "package": "language-ecmascript",
          "partial": "Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfix operators: see spec 11.5-11.11\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "InfixOp",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
          "type": "data"
        },
        "index": {
          "description": "Infix operators see spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "InfixOp",
          "package": "language-ecmascript",
          "partial": "Infix Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:InfixOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Syntax",
          "name": "JavaScript",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Syntax.html#JavaScript",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "JavaScript",
          "package": "language-ecmascript",
          "partial": "Java Script",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:JavaScript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-hand side expressions: see spec 11.2\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "LValue",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Syntax.html#LValue",
          "type": "data"
        },
        "index": {
          "description": "Left-hand side expressions see spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "LValue",
          "package": "language-ecmascript",
          "partial": "LValue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:LValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix operators: see spec 11.4 (excluding 11.4.4, 11.4.5)\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PrefixOp",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Syntax.html#PrefixOp",
          "type": "data"
        },
        "index": {
          "description": "Prefix operators see spec excluding",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PrefixOp",
          "package": "language-ecmascript",
          "partial": "Prefix Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:PrefixOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProperty names in an object initializer: see spec 11.1.5\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "Prop",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Syntax.html#Prop",
          "type": "data"
        },
        "index": {
          "description": "Property names in an object initializer see spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "Prop",
          "package": "language-ecmascript",
          "partial": "Prop",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:Prop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe abstract data type \u003ccode\u003eSourcePos\u003c/code\u003e represents source positions. It\n contains the name of the source (i.e. file name), a line number and\n a column number. \u003ccode\u003eSourcePos\u003c/code\u003e is an instance of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e class. \n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "SourcePos",
          "package": "language-ecmascript",
          "type": "data"
        },
        "index": {
          "description": "The abstract data type SourcePos represents source positions It contains the name of the source i.e file name line number and column number SourcePos is an instance of the Show Eq and Ord class",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "SourcePos",
          "package": "language-ecmascript",
          "partial": "Source Pos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:SourcePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatements, spec 12.\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "Statement",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Syntax.html#Statement",
          "type": "data"
        },
        "index": {
          "description": "Statements spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "Statement",
          "package": "language-ecmascript",
          "partial": "Statement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:Statement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnary assignment operators: see spec 11.3, 11.4.4, 11.4.5\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "UnaryAssignOp",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Syntax.html#UnaryAssignOp",
          "type": "data"
        },
        "index": {
          "description": "Unary assignment operators see spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "UnaryAssignOp",
          "package": "language-ecmascript",
          "partial": "Unary Assign Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:UnaryAssignOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variable declaration, spec 12.2\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "VarDecl",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3-Syntax.html#VarDecl",
          "type": "data"
        },
        "index": {
          "description": "variable declaration spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "VarDecl",
          "package": "language-ecmascript",
          "partial": "Var Decl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#t:VarDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e[1,2,3]\u003c/code\u003e, spec 11.1.4\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ArrayLit",
          "package": "language-ecmascript",
          "signature": "ArrayLit a [Expression a]",
          "source": "src/Language-ECMAScript3-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ArrayLit",
          "normalized": "ArrayLit a[Expression a]",
          "package": "language-ecmascript",
          "partial": "Array Lit",
          "signature": "ArrayLit a[Expression a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:ArrayLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ee1 @=e2\u003c/code\u003e, spec 11.13\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "AssignExpr",
          "package": "language-ecmascript",
          "signature": "AssignExpr a AssignOp (LValue a) (Expression a)",
          "source": "src/Language-ECMAScript3-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "e1 e2 spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "AssignExpr",
          "package": "language-ecmascript",
          "partial": "Assign Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:AssignExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e{stmts}\u003c/code\u003e, spec 12.1\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "BlockStmt",
          "package": "language-ecmascript",
          "signature": "BlockStmt a [Statement a]",
          "source": "src/Language-ECMAScript3-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "stmts spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "BlockStmt",
          "normalized": "BlockStmt a[Statement a]",
          "package": "language-ecmascript",
          "partial": "Block Stmt",
          "signature": "BlockStmt a[Statement a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:BlockStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etrue\u003c/code\u003e, spec 11.1.3, 7.8\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "BoolLit",
          "package": "language-ecmascript",
          "signature": "BoolLit a Bool",
          "source": "src/Language-ECMAScript3-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "true spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "BoolLit",
          "package": "language-ecmascript",
          "partial": "Bool Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:BoolLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efoo[bar\u003c/code\u003e, spec 11.2.1\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "BracketRef",
          "package": "language-ecmascript",
          "signature": "BracketRef a (Expression a) (Expression a)",
          "source": "src/Language-ECMAScript3-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "foo bar spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "BracketRef",
          "package": "language-ecmascript",
          "partial": "Bracket Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:BracketRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebreak lab;\u003c/code\u003e, spec 12.8\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "BreakStmt",
          "package": "language-ecmascript",
          "signature": "BreakStmt a (Maybe (Id a))",
          "source": "src/Language-ECMAScript3-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "break lab spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "BreakStmt",
          "package": "language-ecmascript",
          "partial": "Break Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:BreakStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ef(x,y,z)\u003c/code\u003e, spec 11.2.3\nfuncexprs are optionally named\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "CallExpr",
          "package": "language-ecmascript",
          "signature": "CallExpr a (Expression a) [Expression a]",
          "source": "src/Language-ECMAScript3-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "spec funcexprs are optionally named",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "CallExpr",
          "normalized": "CallExpr a(Expression a)[Expression a]",
          "package": "language-ecmascript",
          "partial": "Call Expr",
          "signature": "CallExpr a(Expression a)[Expression a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:CallExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ecase e: stmts;\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "CaseClause",
          "package": "language-ecmascript",
          "signature": "CaseClause a (Expression a) [Statement a]",
          "source": "src/Language-ECMAScript3-Syntax.html#CaseClause",
          "type": "function"
        },
        "index": {
          "description": "case stmts",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "CaseClause",
          "normalized": "CaseClause a(Expression a)[Statement a]",
          "package": "language-ecmascript",
          "partial": "Case Clause",
          "signature": "CaseClause a(Expression a)[Statement a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:CaseClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003edefault: stmts;\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "CaseDefault",
          "package": "language-ecmascript",
          "signature": "CaseDefault a [Statement a]",
          "source": "src/Language-ECMAScript3-Syntax.html#CaseClause",
          "type": "function"
        },
        "index": {
          "description": "default stmts",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "CaseDefault",
          "normalized": "CaseDefault a[Statement a]",
          "package": "language-ecmascript",
          "partial": "Case Default",
          "signature": "CaseDefault a[Statement a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:CaseDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ecatch (x) {...}\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "CatchClause",
          "package": "language-ecmascript",
          "signature": "CatchClause a (Id a) (Statement a)",
          "source": "src/Language-ECMAScript3-Syntax.html#CatchClause",
          "type": "function"
        },
        "index": {
          "description": "catch",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "CatchClause",
          "package": "language-ecmascript",
          "partial": "Catch Clause",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:CatchClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ee1 ? e2 : e3\u003c/code\u003e, spec 11.12\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "CondExpr",
          "package": "language-ecmascript",
          "signature": "CondExpr a (Expression a) (Expression a) (Expression a)",
          "source": "src/Language-ECMAScript3-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "e1 e2 e3 spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "CondExpr",
          "package": "language-ecmascript",
          "partial": "Cond Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:CondExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003econtinue lab;\u003c/code\u003e, spec 12.7\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ContinueStmt",
          "package": "language-ecmascript",
          "signature": "ContinueStmt a (Maybe (Id a))",
          "source": "src/Language-ECMAScript3-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "continue lab spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ContinueStmt",
          "package": "language-ecmascript",
          "partial": "Continue Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:ContinueStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003edo stmt while (e);\u003c/code\u003e, spec 12.6\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "DoWhileStmt",
          "package": "language-ecmascript",
          "signature": "DoWhileStmt a (Statement a) (Expression a)",
          "source": "src/Language-ECMAScript3-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "do stmt while spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "DoWhileStmt",
          "package": "language-ecmascript",
          "partial": "Do While Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:DoWhileStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efoo.bar\u003c/code\u003e, spec 11.2.1\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "DotRef",
          "package": "language-ecmascript",
          "signature": "DotRef a (Expression a) (Id a)",
          "source": "src/Language-ECMAScript3-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "foo.bar spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "DotRef",
          "package": "language-ecmascript",
          "partial": "Dot Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:DotRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e;\u003c/code\u003e, spec 12.3\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "EmptyStmt",
          "package": "language-ecmascript",
          "signature": "EmptyStmt a",
          "source": "src/Language-ECMAScript3-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "EmptyStmt",
          "package": "language-ecmascript",
          "partial": "Empty Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:EmptyStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003eexpr\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ExprInit",
          "package": "language-ecmascript",
          "signature": "ExprInit (Expression a)",
          "source": "src/Language-ECMAScript3-Syntax.html#ForInit",
          "type": "function"
        },
        "index": {
          "description": "expr",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ExprInit",
          "package": "language-ecmascript",
          "partial": "Expr Init",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:ExprInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eexpr;\u003c/code\u003e, spec 12.4\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ExprStmt",
          "package": "language-ecmascript",
          "signature": "ExprStmt a (Expression a)",
          "source": "src/Language-ECMAScript3-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "expr spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ExprStmt",
          "package": "language-ecmascript",
          "partial": "Expr Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:ExprStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efoo.baz\u003c/code\u003e, \u003ccode\u003efoo[bar]\u003c/code\u003e, \u003ccode\u003ez\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ForInLVal",
          "package": "language-ecmascript",
          "signature": "ForInLVal (LValue a)",
          "source": "src/Language-ECMAScript3-Syntax.html#ForInInit",
          "type": "function"
        },
        "index": {
          "description": "foo.baz foo bar",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ForInLVal",
          "package": "language-ecmascript",
          "partial": "For In LVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:ForInLVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efor (x in o) stmt\u003c/code\u003e, spec 12.6\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ForInStmt",
          "package": "language-ecmascript",
          "signature": "ForInStmt a (ForInInit a) (Expression a) (Statement a)",
          "source": "src/Language-ECMAScript3-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "for in stmt spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ForInStmt",
          "package": "language-ecmascript",
          "partial": "For In Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:ForInStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003evar x\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ForInVar",
          "package": "language-ecmascript",
          "signature": "ForInVar (Id a)",
          "source": "src/Language-ECMAScript3-Syntax.html#ForInInit",
          "type": "function"
        },
        "index": {
          "description": "var",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ForInVar",
          "package": "language-ecmascript",
          "partial": "For In Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:ForInVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eForStmt a init test increment body\u003c/code\u003e, \u003ccode\u003efor (init; test,\n increment) body\u003c/code\u003e, spec 12.6\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ForStmt",
          "package": "language-ecmascript",
          "signature": "ForStmt a (ForInit a) (Maybe (Expression a)) (Maybe (Expression a)) (Statement a)",
          "source": "src/Language-ECMAScript3-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "ForStmt init test increment body for init test increment body spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ForStmt",
          "package": "language-ecmascript",
          "partial": "For Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:ForStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efunction f (x,y,z) {...}\u003c/code\u003e, spec 11.2.5, 13\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "FuncExpr",
          "package": "language-ecmascript",
          "signature": "FuncExpr a (Maybe (Id a)) [Id a] [Statement a]",
          "source": "src/Language-ECMAScript3-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "function spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "FuncExpr",
          "normalized": "FuncExpr a(Maybe(Id a))[Id a][Statement a]",
          "package": "language-ecmascript",
          "partial": "Func Expr",
          "signature": "FuncExpr a(Maybe(Id a))[Id a][Statement a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:FuncExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efunction f(x, y, z) {...}\u003c/code\u003e, spec 13\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "FunctionStmt",
          "package": "language-ecmascript",
          "signature": "FunctionStmt a (Id a) [Id a] [Statement a]",
          "source": "src/Language-ECMAScript3-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "function spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "FunctionStmt",
          "normalized": "FunctionStmt a(Id a)[Id a][Statement a]",
          "package": "language-ecmascript",
          "partial": "Function Stmt",
          "signature": "FunctionStmt a(Id a)[Id a][Statement a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:FunctionStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Syntax",
          "name": "Id",
          "package": "language-ecmascript",
          "signature": "Id a String",
          "source": "src/Language-ECMAScript3-Syntax.html#Id",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "Id",
          "package": "language-ecmascript",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eif (e) stmt1 else stmt2\u003c/code\u003e, spec 12.5\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "IfSingleStmt",
          "package": "language-ecmascript",
          "signature": "IfSingleStmt a (Expression a) (Statement a)",
          "source": "src/Language-ECMAScript3-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "if stmt1 else stmt2 spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "IfSingleStmt",
          "package": "language-ecmascript",
          "partial": "If Single Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:IfSingleStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eif (e) stmt\u003c/code\u003e, spec 12.5\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "IfStmt",
          "package": "language-ecmascript",
          "signature": "IfStmt a (Expression a) (Statement a) (Statement a)",
          "source": "src/Language-ECMAScript3-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "if stmt spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "IfStmt",
          "package": "language-ecmascript",
          "partial": "If Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:IfStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ee1@e2\u003c/code\u003e, spec 11.5, 11.6, 11.7, 11.8, 11.9, 11.10, 11.11\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "InfixExpr",
          "package": "language-ecmascript",
          "signature": "InfixExpr a InfixOp (Expression a) (Expression a)",
          "source": "src/Language-ECMAScript3-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "e1@e2 spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "InfixExpr",
          "package": "language-ecmascript",
          "partial": "Infix Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:InfixExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e42\u003c/code\u003e, spec 11.1.3, 7.8\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "IntLit",
          "package": "language-ecmascript",
          "signature": "IntLit a Int",
          "source": "src/Language-ECMAScript3-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "IntLit",
          "package": "language-ecmascript",
          "partial": "Int Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:IntLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003efoo[bar]\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "LBracket",
          "package": "language-ecmascript",
          "signature": "LBracket a (Expression a) (Expression a)",
          "source": "src/Language-ECMAScript3-Syntax.html#LValue",
          "type": "function"
        },
        "index": {
          "description": "foo bar",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "LBracket",
          "package": "language-ecmascript",
          "partial": "LBracket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:LBracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003efoo.bar\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "LDot",
          "package": "language-ecmascript",
          "signature": "LDot a (Expression a) String",
          "source": "src/Language-ECMAScript3-Syntax.html#LValue",
          "type": "function"
        },
        "index": {
          "description": "foo.bar",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "LDot",
          "package": "language-ecmascript",
          "partial": "LDot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:LDot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evariable reference, \u003ccode\u003efoo\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "LVar",
          "package": "language-ecmascript",
          "signature": "LVar a String",
          "source": "src/Language-ECMAScript3-Syntax.html#LValue",
          "type": "function"
        },
        "index": {
          "description": "variable reference foo",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "LVar",
          "package": "language-ecmascript",
          "partial": "LVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:LVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elab: stmt\u003c/code\u003e, spec 12.12\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "LabelledStmt",
          "package": "language-ecmascript",
          "signature": "LabelledStmt a (Id a) (Statement a)",
          "source": "src/Language-ECMAScript3-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "lab stmt spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "LabelledStmt",
          "package": "language-ecmascript",
          "partial": "Labelled Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:LabelledStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ee1, e2\u003c/code\u003e, spec 11.14\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ListExpr",
          "package": "language-ecmascript",
          "signature": "ListExpr a [Expression a]",
          "source": "src/Language-ECMAScript3-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "e1 e2 spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ListExpr",
          "normalized": "ListExpr a[Expression a]",
          "package": "language-ecmascript",
          "partial": "List Expr",
          "signature": "ListExpr a[Expression a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:ListExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enew foo(bar)\u003c/code\u003e, spec 11.2.2\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "NewExpr",
          "package": "language-ecmascript",
          "signature": "NewExpr a (Expression a) [Expression a]",
          "source": "src/Language-ECMAScript3-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "new foo bar spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "NewExpr",
          "normalized": "NewExpr a(Expression a)[Expression a]",
          "package": "language-ecmascript",
          "partial": "New Expr",
          "signature": "NewExpr a(Expression a)[Expression a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:NewExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eempty\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "NoInit",
          "package": "language-ecmascript",
          "signature": "NoInit",
          "source": "src/Language-ECMAScript3-Syntax.html#ForInit",
          "type": "function"
        },
        "index": {
          "description": "empty",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "NoInit",
          "package": "language-ecmascript",
          "partial": "No Init",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:NoInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003enull\u003c/code\u003e, spec 11.1.3, 7.8\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "NullLit",
          "package": "language-ecmascript",
          "signature": "NullLit a",
          "source": "src/Language-ECMAScript3-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "null spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "NullLit",
          "package": "language-ecmascript",
          "partial": "Null Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:NullLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e41.99999\u003c/code\u003e, spec 11.1.3, 7.8\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "NumLit",
          "package": "language-ecmascript",
          "signature": "NumLit a Double",
          "source": "src/Language-ECMAScript3-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "NumLit",
          "package": "language-ecmascript",
          "partial": "Num Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:NumLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e{foo:\"bar\", baz: 42}\u003c/code\u003e, spec 11.1.5\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ObjectLit",
          "package": "language-ecmascript",
          "signature": "ObjectLit a [(Prop a, Expression a)]",
          "source": "src/Language-ECMAScript3-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "foo bar baz spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ObjectLit",
          "normalized": "ObjectLit a[(Prop a,Expression a)]",
          "package": "language-ecmascript",
          "partial": "Object Lit",
          "signature": "ObjectLit a[(Prop a,Expression a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:ObjectLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e+\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpAdd",
          "package": "language-ecmascript",
          "signature": "OpAdd",
          "source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpAdd",
          "package": "language-ecmascript",
          "partial": "Op Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esimple assignment, \u003ccode\u003e=\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpAssign",
          "package": "language-ecmascript",
          "signature": "OpAssign",
          "source": "src/Language-ECMAScript3-Syntax.html#AssignOp",
          "type": "function"
        },
        "index": {
          "description": "simple assignment",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpAssign",
          "package": "language-ecmascript",
          "partial": "Op Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpAssign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e+=\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpAssignAdd",
          "package": "language-ecmascript",
          "signature": "OpAssignAdd",
          "source": "src/Language-ECMAScript3-Syntax.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpAssignAdd",
          "package": "language-ecmascript",
          "partial": "Op Assign Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpAssignAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e&=\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpAssignBAnd",
          "package": "language-ecmascript",
          "signature": "OpAssignBAnd",
          "source": "src/Language-ECMAScript3-Syntax.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpAssignBAnd",
          "package": "language-ecmascript",
          "partial": "Op Assign BAnd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpAssignBAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e|=\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpAssignBOr",
          "package": "language-ecmascript",
          "signature": "OpAssignBOr",
          "source": "src/Language-ECMAScript3-Syntax.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpAssignBOr",
          "package": "language-ecmascript",
          "partial": "Op Assign BOr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpAssignBOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e^=\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpAssignBXor",
          "package": "language-ecmascript",
          "signature": "OpAssignBXor",
          "source": "src/Language-ECMAScript3-Syntax.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpAssignBXor",
          "package": "language-ecmascript",
          "partial": "Op Assign BXor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpAssignBXor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e/=\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpAssignDiv",
          "package": "language-ecmascript",
          "signature": "OpAssignDiv",
          "source": "src/Language-ECMAScript3-Syntax.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpAssignDiv",
          "package": "language-ecmascript",
          "partial": "Op Assign Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpAssignDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003c\u003c=\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpAssignLShift",
          "package": "language-ecmascript",
          "signature": "OpAssignLShift",
          "source": "src/Language-ECMAScript3-Syntax.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpAssignLShift",
          "package": "language-ecmascript",
          "partial": "Op Assign LShift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpAssignLShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e%=\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpAssignMod",
          "package": "language-ecmascript",
          "signature": "OpAssignMod",
          "source": "src/Language-ECMAScript3-Syntax.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpAssignMod",
          "package": "language-ecmascript",
          "partial": "Op Assign Mod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpAssignMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e*=\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpAssignMul",
          "package": "language-ecmascript",
          "signature": "OpAssignMul",
          "source": "src/Language-ECMAScript3-Syntax.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpAssignMul",
          "package": "language-ecmascript",
          "partial": "Op Assign Mul",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpAssignMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003e\u003e=\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpAssignSpRShift",
          "package": "language-ecmascript",
          "signature": "OpAssignSpRShift",
          "source": "src/Language-ECMAScript3-Syntax.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpAssignSpRShift",
          "package": "language-ecmascript",
          "partial": "Op Assign Sp RShift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpAssignSpRShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-=\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpAssignSub",
          "package": "language-ecmascript",
          "signature": "OpAssignSub",
          "source": "src/Language-ECMAScript3-Syntax.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpAssignSub",
          "package": "language-ecmascript",
          "partial": "Op Assign Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpAssignSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003e\u003e\u003e=\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpAssignZfRShift",
          "package": "language-ecmascript",
          "signature": "OpAssignZfRShift",
          "source": "src/Language-ECMAScript3-Syntax.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpAssignZfRShift",
          "package": "language-ecmascript",
          "partial": "Op Assign Zf RShift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpAssignZfRShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e&\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpBAnd",
          "package": "language-ecmascript",
          "signature": "OpBAnd",
          "source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpBAnd",
          "package": "language-ecmascript",
          "partial": "Op BAnd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpBAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e|\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpBOr",
          "package": "language-ecmascript",
          "signature": "OpBOr",
          "source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpBOr",
          "package": "language-ecmascript",
          "partial": "Op BOr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpBOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e^\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpBXor",
          "package": "language-ecmascript",
          "signature": "OpBXor",
          "source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpBXor",
          "package": "language-ecmascript",
          "partial": "Op BXor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpBXor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e/\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpDiv",
          "package": "language-ecmascript",
          "signature": "OpDiv",
          "source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpDiv",
          "package": "language-ecmascript",
          "partial": "Op Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e==\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpEq",
          "package": "language-ecmascript",
          "signature": "OpEq",
          "source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpEq",
          "package": "language-ecmascript",
          "partial": "Op Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003e=\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpGEq",
          "package": "language-ecmascript",
          "signature": "OpGEq",
          "source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpGEq",
          "package": "language-ecmascript",
          "partial": "Op GEq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpGEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003e\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpGT",
          "package": "language-ecmascript",
          "signature": "OpGT",
          "source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpGT",
          "package": "language-ecmascript",
          "partial": "Op GT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ein\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpIn",
          "package": "language-ecmascript",
          "signature": "OpIn",
          "source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "description": "in",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpIn",
          "package": "language-ecmascript",
          "partial": "Op In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003einstanceof\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpInstanceof",
          "package": "language-ecmascript",
          "signature": "OpInstanceof",
          "source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "description": "instanceof",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpInstanceof",
          "package": "language-ecmascript",
          "partial": "Op Instanceof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpInstanceof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e&&\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpLAnd",
          "package": "language-ecmascript",
          "signature": "OpLAnd",
          "source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpLAnd",
          "package": "language-ecmascript",
          "partial": "Op LAnd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpLAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003c=\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpLEq",
          "package": "language-ecmascript",
          "signature": "OpLEq",
          "source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpLEq",
          "package": "language-ecmascript",
          "partial": "Op LEq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpLEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e||\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpLOr",
          "package": "language-ecmascript",
          "signature": "OpLOr",
          "source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpLOr",
          "package": "language-ecmascript",
          "partial": "Op LOr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpLOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003c\u003c\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpLShift",
          "package": "language-ecmascript",
          "signature": "OpLShift",
          "source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpLShift",
          "package": "language-ecmascript",
          "partial": "Op LShift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpLShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003c\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpLT",
          "package": "language-ecmascript",
          "signature": "OpLT",
          "source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpLT",
          "package": "language-ecmascript",
          "partial": "Op LT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e%\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpMod",
          "package": "language-ecmascript",
          "signature": "OpMod",
          "source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpMod",
          "package": "language-ecmascript",
          "partial": "Op Mod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e*\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpMul",
          "package": "language-ecmascript",
          "signature": "OpMul",
          "source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpMul",
          "package": "language-ecmascript",
          "partial": "Op Mul",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e!=\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpNEq",
          "package": "language-ecmascript",
          "signature": "OpNEq",
          "source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpNEq",
          "package": "language-ecmascript",
          "partial": "Op NEq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpNEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003e\u003e\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpSpRShift",
          "package": "language-ecmascript",
          "signature": "OpSpRShift",
          "source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpSpRShift",
          "package": "language-ecmascript",
          "partial": "Op Sp RShift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpSpRShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e===\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpStrictEq",
          "package": "language-ecmascript",
          "signature": "OpStrictEq",
          "source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpStrictEq",
          "package": "language-ecmascript",
          "partial": "Op Strict Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpStrictEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e!===\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpStrictNEq",
          "package": "language-ecmascript",
          "signature": "OpStrictNEq",
          "source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpStrictNEq",
          "package": "language-ecmascript",
          "partial": "Op Strict NEq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpStrictNEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpSub",
          "package": "language-ecmascript",
          "signature": "OpSub",
          "source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpSub",
          "package": "language-ecmascript",
          "partial": "Op Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003e\u003e\u003e\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpZfRShift",
          "package": "language-ecmascript",
          "signature": "OpZfRShift",
          "source": "src/Language-ECMAScript3-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "OpZfRShift",
          "package": "language-ecmascript",
          "partial": "Op Zf RShift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:OpZfRShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ex--\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PostfixDec",
          "package": "language-ecmascript",
          "signature": "PostfixDec",
          "source": "src/Language-ECMAScript3-Syntax.html#UnaryAssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PostfixDec",
          "package": "language-ecmascript",
          "partial": "Postfix Dec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PostfixDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003ex++\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PostfixInc",
          "package": "language-ecmascript",
          "signature": "PostfixInc",
          "source": "src/Language-ECMAScript3-Syntax.html#UnaryAssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PostfixInc",
          "package": "language-ecmascript",
          "partial": "Postfix Inc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PostfixInc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e~\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PrefixBNot",
          "package": "language-ecmascript",
          "signature": "PrefixBNot",
          "source": "src/Language-ECMAScript3-Syntax.html#PrefixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PrefixBNot",
          "package": "language-ecmascript",
          "partial": "Prefix BNot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PrefixBNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e--x\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PrefixDec",
          "package": "language-ecmascript",
          "signature": "PrefixDec",
          "source": "src/Language-ECMAScript3-Syntax.html#UnaryAssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PrefixDec",
          "package": "language-ecmascript",
          "partial": "Prefix Dec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PrefixDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003edelete\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PrefixDelete",
          "package": "language-ecmascript",
          "signature": "PrefixDelete",
          "source": "src/Language-ECMAScript3-Syntax.html#PrefixOp",
          "type": "function"
        },
        "index": {
          "description": "delete",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PrefixDelete",
          "package": "language-ecmascript",
          "partial": "Prefix Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PrefixDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e@e\u003c/code\u003e, spec 11.4 (excluding 11.4.4, 111.4.5)\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PrefixExpr",
          "package": "language-ecmascript",
          "signature": "PrefixExpr a PrefixOp (Expression a)",
          "source": "src/Language-ECMAScript3-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "spec excluding",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PrefixExpr",
          "package": "language-ecmascript",
          "partial": "Prefix Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PrefixExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e++x\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PrefixInc",
          "package": "language-ecmascript",
          "signature": "PrefixInc",
          "source": "src/Language-ECMAScript3-Syntax.html#UnaryAssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PrefixInc",
          "package": "language-ecmascript",
          "partial": "Prefix Inc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PrefixInc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e!\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PrefixLNot",
          "package": "language-ecmascript",
          "signature": "PrefixLNot",
          "source": "src/Language-ECMAScript3-Syntax.html#PrefixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PrefixLNot",
          "package": "language-ecmascript",
          "partial": "Prefix LNot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PrefixLNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e-\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PrefixMinus",
          "package": "language-ecmascript",
          "signature": "PrefixMinus",
          "source": "src/Language-ECMAScript3-Syntax.html#PrefixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PrefixMinus",
          "package": "language-ecmascript",
          "partial": "Prefix Minus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PrefixMinus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e+\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PrefixPlus",
          "package": "language-ecmascript",
          "signature": "PrefixPlus",
          "source": "src/Language-ECMAScript3-Syntax.html#PrefixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PrefixPlus",
          "package": "language-ecmascript",
          "partial": "Prefix Plus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PrefixPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003etypeof\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PrefixTypeof",
          "package": "language-ecmascript",
          "signature": "PrefixTypeof",
          "source": "src/Language-ECMAScript3-Syntax.html#PrefixOp",
          "type": "function"
        },
        "index": {
          "description": "typeof",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PrefixTypeof",
          "package": "language-ecmascript",
          "partial": "Prefix Typeof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PrefixTypeof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003evoid\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PrefixVoid",
          "package": "language-ecmascript",
          "signature": "PrefixVoid",
          "source": "src/Language-ECMAScript3-Syntax.html#PrefixOp",
          "type": "function"
        },
        "index": {
          "description": "void",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PrefixVoid",
          "package": "language-ecmascript",
          "partial": "Prefix Void",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PrefixVoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eproperty name is an identifier, \u003ccode\u003efoo\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PropId",
          "package": "language-ecmascript",
          "signature": "PropId a (Id a)",
          "source": "src/Language-ECMAScript3-Syntax.html#Prop",
          "type": "function"
        },
        "index": {
          "description": "property name is an identifier foo",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PropId",
          "package": "language-ecmascript",
          "partial": "Prop Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PropId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eproperty name is an integer, \u003ccode\u003e42\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PropNum",
          "package": "language-ecmascript",
          "signature": "PropNum a Integer",
          "source": "src/Language-ECMAScript3-Syntax.html#Prop",
          "type": "function"
        },
        "index": {
          "description": "property name is an integer",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PropNum",
          "package": "language-ecmascript",
          "partial": "Prop Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PropNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eproperty name is a string, \u003ccode\u003e\"foo\"\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PropString",
          "package": "language-ecmascript",
          "signature": "PropString a String",
          "source": "src/Language-ECMAScript3-Syntax.html#Prop",
          "type": "function"
        },
        "index": {
          "description": "property name is string foo",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "PropString",
          "package": "language-ecmascript",
          "partial": "Prop String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:PropString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eRegexpLit a regexp global?  case_insensitive?\u003c/code\u003e -- regular\n expression, see spec 11.1.3, 7.8\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "RegexpLit",
          "package": "language-ecmascript",
          "signature": "RegexpLit a String Bool Bool",
          "source": "src/Language-ECMAScript3-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "RegexpLit regexp global case insensitive regular expression see spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "RegexpLit",
          "package": "language-ecmascript",
          "partial": "Regexp Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:RegexpLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ereturn expr;\u003c/code\u003e, spec 12.9\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ReturnStmt",
          "package": "language-ecmascript",
          "signature": "ReturnStmt a (Maybe (Expression a))",
          "source": "src/Language-ECMAScript3-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "return expr spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ReturnStmt",
          "package": "language-ecmascript",
          "partial": "Return Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:ReturnStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA script in \u003cscript\u003e ... \u003c/script\u003e tags.\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "Script",
          "package": "language-ecmascript",
          "signature": "Script a [Statement a]",
          "source": "src/Language-ECMAScript3-Syntax.html#JavaScript",
          "type": "function"
        },
        "index": {
          "description": "script in script script tags",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "Script",
          "normalized": "Script a[Statement a]",
          "package": "language-ecmascript",
          "partial": "Script",
          "signature": "Script a[Statement a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:Script"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\"foo\"\u003c/code\u003e, spec 11.1.3, 7.8\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "StringLit",
          "package": "language-ecmascript",
          "signature": "StringLit a String",
          "source": "src/Language-ECMAScript3-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "foo spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "StringLit",
          "package": "language-ecmascript",
          "partial": "String Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:StringLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eswitch (e) clauses\u003c/code\u003e, spec 12.11\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "SwitchStmt",
          "package": "language-ecmascript",
          "signature": "SwitchStmt a (Expression a) [CaseClause a]",
          "source": "src/Language-ECMAScript3-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "switch clauses spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "SwitchStmt",
          "normalized": "SwitchStmt a(Expression a)[CaseClause a]",
          "package": "language-ecmascript",
          "partial": "Switch Stmt",
          "signature": "SwitchStmt a(Expression a)[CaseClause a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:SwitchStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ethis\u003c/code\u003e, spec 11.1.1\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ThisRef",
          "package": "language-ecmascript",
          "signature": "ThisRef a",
          "source": "src/Language-ECMAScript3-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "this spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ThisRef",
          "package": "language-ecmascript",
          "partial": "This Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:ThisRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ethrow expr;\u003c/code\u003e, spec 12.13\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ThrowStmt",
          "package": "language-ecmascript",
          "signature": "ThrowStmt a (Expression a)",
          "source": "src/Language-ECMAScript3-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "throw expr spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "ThrowStmt",
          "package": "language-ecmascript",
          "partial": "Throw Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:ThrowStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etry stmt catch(x) stmt finally stmt\u003c/code\u003e, spec 12.14\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "TryStmt",
          "package": "language-ecmascript",
          "signature": "TryStmt a (Statement a) (Maybe (CatchClause a)) (Maybe (Statement a))",
          "source": "src/Language-ECMAScript3-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "try stmt catch stmt finally stmt spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "TryStmt",
          "package": "language-ecmascript",
          "partial": "Try Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:TryStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e++x\u003c/code\u003e, \u003ccode\u003ex--\u003c/code\u003e etc., spec 11.3, 11.4.4, 11.4.5\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "UnaryAssignExpr",
          "package": "language-ecmascript",
          "signature": "UnaryAssignExpr a UnaryAssignOp (LValue a)",
          "source": "src/Language-ECMAScript3-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "etc spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "UnaryAssignExpr",
          "package": "language-ecmascript",
          "partial": "Unary Assign Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:UnaryAssignExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003evar x = e;\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "VarDecl",
          "package": "language-ecmascript",
          "signature": "VarDecl a (Id a) (Maybe (Expression a))",
          "source": "src/Language-ECMAScript3-Syntax.html#VarDecl",
          "type": "function"
        },
        "index": {
          "description": "var",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "VarDecl",
          "package": "language-ecmascript",
          "partial": "Var Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:VarDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003evar x, y=42;\u003c/code\u003e, spec 12.2\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "VarDeclStmt",
          "package": "language-ecmascript",
          "signature": "VarDeclStmt a [VarDecl a]",
          "source": "src/Language-ECMAScript3-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "var spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "VarDeclStmt",
          "normalized": "VarDeclStmt a[VarDecl a]",
          "package": "language-ecmascript",
          "partial": "Var Decl Stmt",
          "signature": "VarDeclStmt a[VarDecl a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:VarDeclStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003evar x, y=42\u003c/pre\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "VarInit",
          "package": "language-ecmascript",
          "signature": "VarInit [VarDecl a]",
          "source": "src/Language-ECMAScript3-Syntax.html#ForInit",
          "type": "function"
        },
        "index": {
          "description": "var",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "VarInit",
          "normalized": "VarInit[VarDecl a]",
          "package": "language-ecmascript",
          "partial": "Var Init",
          "signature": "VarInit[VarDecl a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:VarInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efoo\u003c/code\u003e, spec 11.1.2\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "VarRef",
          "package": "language-ecmascript",
          "signature": "VarRef a (Id a)",
          "source": "src/Language-ECMAScript3-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "description": "foo spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "VarRef",
          "package": "language-ecmascript",
          "partial": "Var Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:VarRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ewhile (e) do stmt\u003c/code\u003e, spec 12.6\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "WhileStmt",
          "package": "language-ecmascript",
          "signature": "WhileStmt a (Expression a) (Statement a)",
          "source": "src/Language-ECMAScript3-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "while do stmt spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "WhileStmt",
          "package": "language-ecmascript",
          "partial": "While Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:WhileStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ewith (o) stmt\u003c/code\u003e, spec 12.10\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "WithStmt",
          "package": "language-ecmascript",
          "signature": "WithStmt a (Expression a) (Statement a)",
          "source": "src/Language-ECMAScript3-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "description": "with stmt spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "WithStmt",
          "package": "language-ecmascript",
          "partial": "With Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:WithStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the statement is an \u003cem\u003eIterationStatement\u003c/em\u003e\n according to spec 12.6.\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "isIterationStmt",
          "package": "language-ecmascript",
          "signature": "Statement a -\u003e Bool",
          "source": "src/Language-ECMAScript3-Syntax.html#isIterationStmt",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the statement is an IterationStatement according to spec",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "isIterationStmt",
          "normalized": "Statement a-\u003eBool",
          "package": "language-ecmascript",
          "partial": "Iteration Stmt",
          "signature": "Statement a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:isIterationStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.ECMAScript3.Syntax",
          "name": "unId",
          "package": "language-ecmascript",
          "signature": "Id a -\u003e String",
          "source": "src/Language-ECMAScript3-Syntax.html#unId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "unId",
          "normalized": "Id a-\u003eString",
          "package": "language-ecmascript",
          "partial": "Id",
          "signature": "Id a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:unId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eextracts statements from a JavaScript type\n\u003c/p\u003e",
          "module": "Language.ECMAScript3.Syntax",
          "name": "unJavaScript",
          "package": "language-ecmascript",
          "signature": "JavaScript a -\u003e [Statement a]",
          "source": "src/Language-ECMAScript3-Syntax.html#unJavaScript",
          "type": "function"
        },
        "index": {
          "description": "extracts statements from JavaScript type",
          "hierarchy": "Language ECMAScript3 Syntax",
          "module": "Language.ECMAScript3.Syntax",
          "name": "unJavaScript",
          "normalized": "JavaScript a-\u003e[Statement a]",
          "package": "language-ecmascript",
          "partial": "Java Script",
          "signature": "JavaScript a-\u003e[Statement a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3-Syntax.html#v:unJavaScript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRe-exports commonly used modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.ECMAScript3",
          "name": "ECMAScript3",
          "package": "language-ecmascript",
          "source": "src/Language-ECMAScript3.html",
          "type": "module"
        },
        "index": {
          "description": "Re-exports commonly used modules",
          "hierarchy": "Language ECMAScript3",
          "module": "Language.ECMAScript3",
          "name": "ECMAScript3",
          "package": "language-ecmascript",
          "partial": "ECMAScript",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-ecmascript/docs/Language-ECMAScript3.html#"
      }
    }
  ]
]