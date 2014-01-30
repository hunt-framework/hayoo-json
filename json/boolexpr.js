[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr-Parser.html#",
      "description": {
        "fct-module": "Data.BoolExpr.Parser",
        "fct-package": "boolexpr",
        "fct-signature": "module",
        "fct-source": "src/Data-BoolExpr-Parser.html",
        "fct-type": "module",
        "title": "Parser"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr Parser",
        "module": "Data.BoolExpr.Parser",
        "name": "Parser",
        "normalized": "",
        "package": "boolexpr",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr-Parser.html#v:identifier",
      "description": {
        "fct-descr": "\u003cp\u003eShorthand for \u003ccode\u003e\u003ca\u003eidentifier\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003elexer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BoolExpr.Parser",
        "fct-package": "boolexpr",
        "fct-signature": "CharParser st String",
        "fct-source": "src/Data-BoolExpr-Parser.html#identifier",
        "fct-type": "function",
        "title": "identifier"
      },
      "index": {
        "description": "Shorthand for identifier lexer",
        "hierarchy": "Data BoolExpr Parser",
        "module": "Data.BoolExpr.Parser",
        "name": "identifier",
        "normalized": "",
        "package": "boolexpr",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr-Parser.html#v:languageDef",
      "description": {
        "fct-descr": "\u003cp\u003eBasic language definition for search queries.\n Reserved names are \u003ccode\u003e\"AND\"\u003c/code\u003e \u003ccode\u003e\"OR\"\u003c/code\u003e and \u003ccode\u003e\"-\"\u003c/code\u003e.\n Identifiers accepts almost every ASCII sequences without blanks nor \u003ccode\u003e'-'\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BoolExpr.Parser",
        "fct-package": "boolexpr",
        "fct-signature": "LanguageDef st",
        "fct-source": "src/Data-BoolExpr-Parser.html#languageDef",
        "fct-type": "function",
        "title": "languageDef"
      },
      "index": {
        "description": "Basic language definition for search queries Reserved names are AND OR and Identifiers accepts almost every ASCII sequences without blanks nor",
        "hierarchy": "Data BoolExpr Parser",
        "module": "Data.BoolExpr.Parser",
        "name": "languageDef",
        "normalized": "",
        "package": "boolexpr",
        "partial": "Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr-Parser.html#v:lexer",
      "description": {
        "fct-descr": "\u003cp\u003eUnderlying lexer of \u003ccode\u003e\u003ca\u003elanguageDef\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.BoolExpr.Parser",
        "fct-package": "boolexpr",
        "fct-signature": "TokenParser st",
        "fct-source": "src/Data-BoolExpr-Parser.html#lexer",
        "fct-type": "function",
        "title": "lexer"
      },
      "index": {
        "description": "Underlying lexer of languageDef",
        "hierarchy": "Data BoolExpr Parser",
        "module": "Data.BoolExpr.Parser",
        "name": "lexer",
        "normalized": "",
        "package": "boolexpr",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr-Parser.html#v:parseBoolExpr",
      "description": {
        "fct-descr": "\u003cp\u003eParse a search query as a boolean tree using the following grammar.\n     Note that this parser is parameterized over the parser of query simple\n     terms (const).\n\u003c/p\u003e\u003cpre\u003e\n  bt ::= bt AND bt\n        | bt bt -- same as AND\n        | bt OR bt\n        | - bt\n        | ( bt )\n        | const\n   const ::= \u003cgiven as argument\u003e\n\u003c/pre\u003e",
        "fct-module": "Data.BoolExpr.Parser",
        "fct-package": "boolexpr",
        "fct-signature": "CharParser st a -\u003e CharParser st (BoolExpr a)",
        "fct-source": "src/Data-BoolExpr-Parser.html#parseBoolExpr",
        "fct-type": "function",
        "title": "parseBoolExpr"
      },
      "index": {
        "description": "Parse search query as boolean tree using the following grammar Note that this parser is parameterized over the parser of query simple terms const bt bt AND bt bt bt same as AND bt OR bt bt bt const const given as argument",
        "hierarchy": "Data BoolExpr Parser",
        "module": "Data.BoolExpr.Parser",
        "name": "parseBoolExpr",
        "normalized": "CharParser a b-\u003eCharParser a(BoolExpr b)",
        "package": "boolexpr",
        "partial": "Bool Expr",
        "signature": "CharParser st a-\u003eCharParser st(BoolExpr a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr-Parser.html#v:symbol",
      "description": {
        "fct-descr": "\u003cp\u003eShorthand for \u003ccode\u003e\u003ca\u003esymbol\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003elexer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BoolExpr.Parser",
        "fct-package": "boolexpr",
        "fct-signature": "String -\u003e CharParser st String",
        "fct-source": "src/Data-BoolExpr-Parser.html#symbol",
        "fct-type": "function",
        "title": "symbol"
      },
      "index": {
        "description": "Shorthand for symbol lexer",
        "hierarchy": "Data BoolExpr Parser",
        "module": "Data.BoolExpr.Parser",
        "name": "symbol",
        "normalized": "String-\u003eCharParser a String",
        "package": "boolexpr",
        "partial": "",
        "signature": "String-\u003eCharParser st String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr-Parser.html#v:whiteSpace",
      "description": {
        "fct-descr": "\u003cp\u003eShorthand for \u003ccode\u003e\u003ca\u003ewhiteSpace\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003elexer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BoolExpr.Parser",
        "fct-package": "boolexpr",
        "fct-signature": "CharParser st ()",
        "fct-source": "src/Data-BoolExpr-Parser.html#whiteSpace",
        "fct-type": "function",
        "title": "whiteSpace"
      },
      "index": {
        "description": "Shorthand for whiteSpace lexer",
        "hierarchy": "Data BoolExpr Parser",
        "module": "Data.BoolExpr.Parser",
        "name": "whiteSpace",
        "normalized": "CharParser a()",
        "package": "boolexpr",
        "partial": "Space",
        "signature": "CharParser st()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#",
      "description": {
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "module",
        "fct-source": "src/Data-BoolExpr.html",
        "fct-type": "module",
        "title": "BoolExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "BoolExpr",
        "normalized": "",
        "package": "boolexpr",
        "partial": "Bool Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#t:BoolExpr",
      "description": {
        "fct-descr": "\u003cp\u003eSyntax of boolean expressions parameterized over a\n set of leaves, named constants.\n\u003c/p\u003e",
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "data",
        "fct-source": "src/Data-BoolExpr.html#BoolExpr",
        "fct-type": "data",
        "title": "BoolExpr"
      },
      "index": {
        "description": "Syntax of boolean expressions parameterized over set of leaves named constants",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "BoolExpr",
        "normalized": "",
        "package": "boolexpr",
        "partial": "Bool Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#t:Boolean",
      "description": {
        "fct-descr": "\u003cp\u003eA boolean type class.\n\u003c/p\u003e",
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "class",
        "fct-source": "src/Data-BoolExpr.html#Boolean",
        "fct-type": "class",
        "title": "Boolean"
      },
      "index": {
        "description": "boolean type class",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "Boolean",
        "normalized": "",
        "package": "boolexpr",
        "partial": "Boolean",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#t:CNF",
      "description": {
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "newtype",
        "fct-source": "src/Data-BoolExpr.html#CNF",
        "fct-type": "newtype",
        "title": "CNF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "CNF",
        "normalized": "",
        "package": "boolexpr",
        "partial": "CNF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#t:Conj",
      "description": {
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "newtype",
        "fct-source": "src/Data-BoolExpr.html#Conj",
        "fct-type": "newtype",
        "title": "Conj"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "Conj",
        "normalized": "",
        "package": "boolexpr",
        "partial": "Conj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#t:DNF",
      "description": {
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "newtype",
        "fct-source": "src/Data-BoolExpr.html#DNF",
        "fct-type": "newtype",
        "title": "DNF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "DNF",
        "normalized": "",
        "package": "boolexpr",
        "partial": "DNF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#t:Disj",
      "description": {
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "newtype",
        "fct-source": "src/Data-BoolExpr.html#Disj",
        "fct-type": "newtype",
        "title": "Disj"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "Disj",
        "normalized": "",
        "package": "boolexpr",
        "partial": "Disj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#t:Signed",
      "description": {
        "fct-descr": "\u003cp\u003eSigned values are either positive of negative.\n\u003c/p\u003e",
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "data",
        "fct-source": "src/Data-BoolExpr.html#Signed",
        "fct-type": "data",
        "title": "Signed"
      },
      "index": {
        "description": "Signed values are either positive of negative",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "Signed",
        "normalized": "",
        "package": "boolexpr",
        "partial": "Signed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:-47--92-",
      "description": {
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "f a -\u003e f a -\u003e f a",
        "fct-source": "src/Data-BoolExpr.html#%2F%5C",
        "fct-type": "method",
        "title": "(/\\)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "(/\\) /\\",
        "normalized": "a b-\u003ea b-\u003ea b",
        "package": "boolexpr",
        "partial": "",
        "signature": "f a-\u003ef a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:-92--47-",
      "description": {
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "f a -\u003e f a -\u003e f a",
        "fct-source": "src/Data-BoolExpr.html#%5C%2F",
        "fct-type": "method",
        "title": "(\\/)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "(\\/) \\/",
        "normalized": "a b-\u003ea b-\u003ea b",
        "package": "boolexpr",
        "partial": "",
        "signature": "f a-\u003ef a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:BAnd",
      "description": {
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "BAnd (BoolExpr a) (BoolExpr a)",
        "fct-source": "src/Data-BoolExpr.html#BoolExpr",
        "fct-type": "function",
        "title": "BAnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "BAnd",
        "normalized": "",
        "package": "boolexpr",
        "partial": "BAnd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:BConst",
      "description": {
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "BConst a",
        "fct-source": "src/Data-BoolExpr.html#BoolExpr",
        "fct-type": "function",
        "title": "BConst"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "BConst",
        "normalized": "",
        "package": "boolexpr",
        "partial": "BConst",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:BFalse",
      "description": {
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "BFalse",
        "fct-source": "src/Data-BoolExpr.html#BoolExpr",
        "fct-type": "function",
        "title": "BFalse"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "BFalse",
        "normalized": "",
        "package": "boolexpr",
        "partial": "BFalse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:BNot",
      "description": {
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "BNot (BoolExpr a)",
        "fct-source": "src/Data-BoolExpr.html#BoolExpr",
        "fct-type": "function",
        "title": "BNot"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "BNot",
        "normalized": "",
        "package": "boolexpr",
        "partial": "BNot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:BOr",
      "description": {
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "BOr (BoolExpr a) (BoolExpr a)",
        "fct-source": "src/Data-BoolExpr.html#BoolExpr",
        "fct-type": "function",
        "title": "BOr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "BOr",
        "normalized": "",
        "package": "boolexpr",
        "partial": "BOr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:BTrue",
      "description": {
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "BTrue",
        "fct-source": "src/Data-BoolExpr.html#BoolExpr",
        "fct-type": "function",
        "title": "BTrue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "BTrue",
        "normalized": "",
        "package": "boolexpr",
        "partial": "BTrue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:CNF",
      "description": {
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "CNF",
        "fct-source": "src/Data-BoolExpr.html#CNF",
        "fct-type": "function",
        "title": "CNF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "CNF",
        "normalized": "",
        "package": "boolexpr",
        "partial": "CNF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:Conj",
      "description": {
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "Conj",
        "fct-source": "src/Data-BoolExpr.html#Conj",
        "fct-type": "function",
        "title": "Conj"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "Conj",
        "normalized": "",
        "package": "boolexpr",
        "partial": "Conj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:DNF",
      "description": {
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "DNF",
        "fct-source": "src/Data-BoolExpr.html#DNF",
        "fct-type": "function",
        "title": "DNF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "DNF",
        "normalized": "",
        "package": "boolexpr",
        "partial": "DNF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:Disj",
      "description": {
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "Disj",
        "fct-source": "src/Data-BoolExpr.html#Disj",
        "fct-type": "function",
        "title": "Disj"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "Disj",
        "normalized": "",
        "package": "boolexpr",
        "partial": "Disj",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:Negative",
      "description": {
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "Negative a",
        "fct-source": "src/Data-BoolExpr.html#Signed",
        "fct-type": "function",
        "title": "Negative"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "Negative",
        "normalized": "",
        "package": "boolexpr",
        "partial": "Negative",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:Positive",
      "description": {
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "Positive a",
        "fct-source": "src/Data-BoolExpr.html#Signed",
        "fct-type": "function",
        "title": "Positive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "Positive",
        "normalized": "",
        "package": "boolexpr",
        "partial": "Positive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:bConst",
      "description": {
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "a -\u003e f a",
        "fct-source": "src/Data-BoolExpr.html#bConst",
        "fct-type": "method",
        "title": "bConst"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "bConst",
        "normalized": "a-\u003eb a",
        "package": "boolexpr",
        "partial": "Const",
        "signature": "a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:bFalse",
      "description": {
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "f a",
        "fct-source": "src/Data-BoolExpr.html#bFalse",
        "fct-type": "method",
        "title": "bFalse"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "bFalse",
        "normalized": "",
        "package": "boolexpr",
        "partial": "False",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:bNot",
      "description": {
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "f a -\u003e f a",
        "fct-source": "src/Data-BoolExpr.html#bNot",
        "fct-type": "method",
        "title": "bNot"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "bNot",
        "normalized": "a b-\u003ea b",
        "package": "boolexpr",
        "partial": "Not",
        "signature": "f a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:bTrue",
      "description": {
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "f a",
        "fct-source": "src/Data-BoolExpr.html#bTrue",
        "fct-type": "method",
        "title": "bTrue"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "bTrue",
        "normalized": "",
        "package": "boolexpr",
        "partial": "True",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:boolTreeToCNF",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a boolean tree to a conjunctive normal form.\n\u003c/p\u003e",
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "NegateConstant a -\u003e BoolExpr a -\u003e CNF a",
        "fct-source": "src/Data-BoolExpr.html#boolTreeToCNF",
        "fct-type": "function",
        "title": "boolTreeToCNF"
      },
      "index": {
        "description": "Convert boolean tree to conjunctive normal form",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "boolTreeToCNF",
        "normalized": "NegateConstant a-\u003eBoolExpr a-\u003eCNF a",
        "package": "boolexpr",
        "partial": "Tree To CNF",
        "signature": "NegateConstant a-\u003eBoolExpr a-\u003eCNF a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:boolTreeToDNF",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a boolean tree to a disjunctive normal form.\n\u003c/p\u003e",
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "(a -\u003e BoolExpr a) -\u003e BoolExpr a -\u003e DNF a",
        "fct-source": "src/Data-BoolExpr.html#boolTreeToDNF",
        "fct-type": "function",
        "title": "boolTreeToDNF"
      },
      "index": {
        "description": "Convert boolean tree to disjunctive normal form",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "boolTreeToDNF",
        "normalized": "(a-\u003eBoolExpr a)-\u003eBoolExpr a-\u003eDNF a",
        "package": "boolexpr",
        "partial": "Tree To DNF",
        "signature": "(a-\u003eBoolExpr a)-\u003eBoolExpr a-\u003eDNF a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:constants",
      "description": {
        "fct-descr": "\u003cp\u003eReturns constants used in a given boolean tree, these\n constants are returned signed depending one how many\n negations stands over a given constant.\n\u003c/p\u003e",
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "BoolExpr a -\u003e [Signed a]",
        "fct-source": "src/Data-BoolExpr.html#constants",
        "fct-type": "function",
        "title": "constants"
      },
      "index": {
        "description": "Returns constants used in given boolean tree these constants are returned signed depending one how many negations stands over given constant",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "constants",
        "normalized": "BoolExpr a-\u003e[Signed a]",
        "package": "boolexpr",
        "partial": "",
        "signature": "BoolExpr a-\u003e[Signed a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:dualize",
      "description": {
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "NegateConstant a -\u003e BoolExpr a -\u003e BoolExpr a",
        "fct-source": "src/Data-BoolExpr.html#dualize",
        "fct-type": "function",
        "title": "dualize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "dualize",
        "normalized": "NegateConstant a-\u003eBoolExpr a-\u003eBoolExpr a",
        "package": "boolexpr",
        "partial": "",
        "signature": "NegateConstant a-\u003eBoolExpr a-\u003eBoolExpr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:evalBoolExpr",
      "description": {
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "(a -\u003e Bool) -\u003e BoolExpr a -\u003e Bool",
        "fct-source": "src/Data-BoolExpr.html#evalBoolExpr",
        "fct-type": "function",
        "title": "evalBoolExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "evalBoolExpr",
        "normalized": "(a-\u003eBool)-\u003eBoolExpr a-\u003eBool",
        "package": "boolexpr",
        "partial": "Bool Expr",
        "signature": "(a-\u003eBool)-\u003eBoolExpr a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:pushNotInwards",
      "description": {
        "fct-descr": "\u003cp\u003ePush the negations inwards as much as possible.\n The resulting boolean tree no longer use negations.\n\u003c/p\u003e",
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "NegateConstant a -\u003e BoolExpr a -\u003e BoolExpr a",
        "fct-source": "src/Data-BoolExpr.html#pushNotInwards",
        "fct-type": "function",
        "title": "pushNotInwards"
      },
      "index": {
        "description": "Push the negations inwards as much as possible The resulting boolean tree no longer use negations",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "pushNotInwards",
        "normalized": "NegateConstant a-\u003eBoolExpr a-\u003eBoolExpr a",
        "package": "boolexpr",
        "partial": "Not Inwards",
        "signature": "NegateConstant a-\u003eBoolExpr a-\u003eBoolExpr a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:reduceBoolExpr",
      "description": {
        "fct-descr": "\u003cp\u003eReduce a boolean tree annotated by booleans to a single boolean.\n\u003c/p\u003e",
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "BoolExpr Bool -\u003e Bool",
        "fct-source": "src/Data-BoolExpr.html#reduceBoolExpr",
        "fct-type": "function",
        "title": "reduceBoolExpr"
      },
      "index": {
        "description": "Reduce boolean tree annotated by booleans to single boolean",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "reduceBoolExpr",
        "normalized": "BoolExpr Bool-\u003eBool",
        "package": "boolexpr",
        "partial": "Bool Expr",
        "signature": "BoolExpr Bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:reduceCNF",
      "description": {
        "fct-descr": "\u003cp\u003eReduce a boolean expression in conjunctive normal form to a single\n boolean.\n\u003c/p\u003e",
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "CNF Bool -\u003e Bool",
        "fct-source": "src/Data-BoolExpr.html#reduceCNF",
        "fct-type": "function",
        "title": "reduceCNF"
      },
      "index": {
        "description": "Reduce boolean expression in conjunctive normal form to single boolean",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "reduceCNF",
        "normalized": "CNF Bool-\u003eBool",
        "package": "boolexpr",
        "partial": "CNF",
        "signature": "CNF Bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:reduceDNF",
      "description": {
        "fct-descr": "\u003cp\u003eReduce a boolean expression in disjunctive normal form to a single\n boolean.\n\u003c/p\u003e",
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "DNF Bool -\u003e Bool",
        "fct-source": "src/Data-BoolExpr.html#reduceDNF",
        "fct-type": "function",
        "title": "reduceDNF"
      },
      "index": {
        "description": "Reduce boolean expression in disjunctive normal form to single boolean",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "reduceDNF",
        "normalized": "DNF Bool-\u003eBool",
        "package": "boolexpr",
        "partial": "DNF",
        "signature": "DNF Bool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:unCNF",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "Conj (Disj a)",
        "fct-source": "src/Data-BoolExpr.html#CNF",
        "fct-type": "function",
        "title": "unCNF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "unCNF",
        "normalized": "",
        "package": "boolexpr",
        "partial": "CNF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:unConj",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "[a]",
        "fct-source": "src/Data-BoolExpr.html#Conj",
        "fct-type": "function",
        "title": "unConj"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "unConj",
        "normalized": "[a]",
        "package": "boolexpr",
        "partial": "Conj",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:unDNF",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "Disj (Conj a)",
        "fct-source": "src/Data-BoolExpr.html#DNF",
        "fct-type": "function",
        "title": "unDNF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "unDNF",
        "normalized": "",
        "package": "boolexpr",
        "partial": "DNF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:unDisj",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.BoolExpr",
        "fct-package": "boolexpr",
        "fct-signature": "[a]",
        "fct-source": "src/Data-BoolExpr.html#Disj",
        "fct-type": "function",
        "title": "unDisj"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BoolExpr",
        "module": "Data.BoolExpr",
        "name": "unDisj",
        "normalized": "[a]",
        "package": "boolexpr",
        "partial": "Disj",
        "signature": "[a]"
      }
    }
  }
]