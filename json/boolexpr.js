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
        "word": "boolexpr"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr.Parser",
          "name": "Parser",
          "package": "boolexpr",
          "source": "src/Data-BoolExpr-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data BoolExpr Parser",
          "module": "Data.BoolExpr.Parser",
          "name": "Parser",
          "package": "boolexpr",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShorthand for \u003ccode\u003e\u003ca\u003eidentifier\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003elexer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BoolExpr.Parser",
          "name": "identifier",
          "package": "boolexpr",
          "signature": "CharParser st String",
          "source": "src/Data-BoolExpr-Parser.html#identifier",
          "type": "function"
        },
        "index": {
          "description": "Shorthand for identifier lexer",
          "hierarchy": "Data BoolExpr Parser",
          "module": "Data.BoolExpr.Parser",
          "name": "identifier",
          "package": "boolexpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr-Parser.html#v:identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic language definition for search queries.\n Reserved names are \u003ccode\u003e\"AND\"\u003c/code\u003e \u003ccode\u003e\"OR\"\u003c/code\u003e and \u003ccode\u003e\"-\"\u003c/code\u003e.\n Identifiers accepts almost every ASCII sequences without blanks nor \u003ccode\u003e'-'\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BoolExpr.Parser",
          "name": "languageDef",
          "package": "boolexpr",
          "signature": "LanguageDef st",
          "source": "src/Data-BoolExpr-Parser.html#languageDef",
          "type": "function"
        },
        "index": {
          "description": "Basic language definition for search queries Reserved names are AND OR and Identifiers accepts almost every ASCII sequences without blanks nor",
          "hierarchy": "Data BoolExpr Parser",
          "module": "Data.BoolExpr.Parser",
          "name": "languageDef",
          "package": "boolexpr",
          "partial": "Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr-Parser.html#v:languageDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnderlying lexer of \u003ccode\u003e\u003ca\u003elanguageDef\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.BoolExpr.Parser",
          "name": "lexer",
          "package": "boolexpr",
          "signature": "TokenParser st",
          "source": "src/Data-BoolExpr-Parser.html#lexer",
          "type": "function"
        },
        "index": {
          "description": "Underlying lexer of languageDef",
          "hierarchy": "Data BoolExpr Parser",
          "module": "Data.BoolExpr.Parser",
          "name": "lexer",
          "package": "boolexpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr-Parser.html#v:lexer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a search query as a boolean tree using the following grammar.\n     Note that this parser is parameterized over the parser of query simple\n     terms (const).\n\u003c/p\u003e\u003cpre\u003e\n  bt ::= bt AND bt\n        | bt bt -- same as AND\n        | bt OR bt\n        | - bt\n        | ( bt )\n        | const\n   const ::= \u003cgiven as argument\u003e\n\u003c/pre\u003e",
          "module": "Data.BoolExpr.Parser",
          "name": "parseBoolExpr",
          "package": "boolexpr",
          "signature": "CharParser st a -\u003e CharParser st (BoolExpr a)",
          "source": "src/Data-BoolExpr-Parser.html#parseBoolExpr",
          "type": "function"
        },
        "index": {
          "description": "Parse search query as boolean tree using the following grammar Note that this parser is parameterized over the parser of query simple terms const bt bt AND bt bt bt same as AND bt OR bt bt bt const const given as argument",
          "hierarchy": "Data BoolExpr Parser",
          "module": "Data.BoolExpr.Parser",
          "name": "parseBoolExpr",
          "normalized": "CharParser a b-\u003eCharParser a(BoolExpr b)",
          "package": "boolexpr",
          "partial": "Bool Expr",
          "signature": "CharParser st a-\u003eCharParser st(BoolExpr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr-Parser.html#v:parseBoolExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShorthand for \u003ccode\u003e\u003ca\u003esymbol\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003elexer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BoolExpr.Parser",
          "name": "symbol",
          "package": "boolexpr",
          "signature": "String -\u003e CharParser st String",
          "source": "src/Data-BoolExpr-Parser.html#symbol",
          "type": "function"
        },
        "index": {
          "description": "Shorthand for symbol lexer",
          "hierarchy": "Data BoolExpr Parser",
          "module": "Data.BoolExpr.Parser",
          "name": "symbol",
          "normalized": "String-\u003eCharParser a String",
          "package": "boolexpr",
          "signature": "String-\u003eCharParser st String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr-Parser.html#v:symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShorthand for \u003ccode\u003e\u003ca\u003ewhiteSpace\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003elexer\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.BoolExpr.Parser",
          "name": "whiteSpace",
          "package": "boolexpr",
          "signature": "CharParser st ()",
          "source": "src/Data-BoolExpr-Parser.html#whiteSpace",
          "type": "function"
        },
        "index": {
          "description": "Shorthand for whiteSpace lexer",
          "hierarchy": "Data BoolExpr Parser",
          "module": "Data.BoolExpr.Parser",
          "name": "whiteSpace",
          "normalized": "CharParser a()",
          "package": "boolexpr",
          "partial": "Space",
          "signature": "CharParser st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr-Parser.html#v:whiteSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr",
          "name": "BoolExpr",
          "package": "boolexpr",
          "source": "src/Data-BoolExpr.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "BoolExpr",
          "package": "boolexpr",
          "partial": "Bool Expr",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSyntax of boolean expressions parameterized over a\n set of leaves, named constants.\n\u003c/p\u003e",
          "module": "Data.BoolExpr",
          "name": "BoolExpr",
          "package": "boolexpr",
          "source": "src/Data-BoolExpr.html#BoolExpr",
          "type": "data"
        },
        "index": {
          "description": "Syntax of boolean expressions parameterized over set of leaves named constants",
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "BoolExpr",
          "package": "boolexpr",
          "partial": "Bool Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#t:BoolExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA boolean type class.\n\u003c/p\u003e",
          "module": "Data.BoolExpr",
          "name": "Boolean",
          "package": "boolexpr",
          "source": "src/Data-BoolExpr.html#Boolean",
          "type": "class"
        },
        "index": {
          "description": "boolean type class",
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "Boolean",
          "package": "boolexpr",
          "partial": "Boolean",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#t:Boolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr",
          "name": "CNF",
          "package": "boolexpr",
          "source": "src/Data-BoolExpr.html#CNF",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "CNF",
          "package": "boolexpr",
          "partial": "CNF",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#t:CNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr",
          "name": "Conj",
          "package": "boolexpr",
          "source": "src/Data-BoolExpr.html#Conj",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "Conj",
          "package": "boolexpr",
          "partial": "Conj",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#t:Conj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr",
          "name": "DNF",
          "package": "boolexpr",
          "source": "src/Data-BoolExpr.html#DNF",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "DNF",
          "package": "boolexpr",
          "partial": "DNF",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#t:DNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr",
          "name": "Disj",
          "package": "boolexpr",
          "source": "src/Data-BoolExpr.html#Disj",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "Disj",
          "package": "boolexpr",
          "partial": "Disj",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#t:Disj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSigned values are either positive of negative.\n\u003c/p\u003e",
          "module": "Data.BoolExpr",
          "name": "Signed",
          "package": "boolexpr",
          "source": "src/Data-BoolExpr.html#Signed",
          "type": "data"
        },
        "index": {
          "description": "Signed values are either positive of negative",
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "Signed",
          "package": "boolexpr",
          "partial": "Signed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#t:Signed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr",
          "name": "(/\\)",
          "package": "boolexpr",
          "signature": "f a -\u003e f a -\u003e f a",
          "source": "src/Data-BoolExpr.html#%2F%5C",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "(/\\) /\\",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "boolexpr",
          "signature": "f a-\u003ef a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:-47--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr",
          "name": "(\\/)",
          "package": "boolexpr",
          "signature": "f a -\u003e f a -\u003e f a",
          "source": "src/Data-BoolExpr.html#%5C%2F",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "(\\/) \\/",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "boolexpr",
          "signature": "f a-\u003ef a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:-92--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr",
          "name": "BAnd",
          "package": "boolexpr",
          "signature": "BAnd (BoolExpr a) (BoolExpr a)",
          "source": "src/Data-BoolExpr.html#BoolExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "BAnd",
          "package": "boolexpr",
          "partial": "BAnd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:BAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr",
          "name": "BConst",
          "package": "boolexpr",
          "signature": "BConst a",
          "source": "src/Data-BoolExpr.html#BoolExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "BConst",
          "package": "boolexpr",
          "partial": "BConst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:BConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr",
          "name": "BFalse",
          "package": "boolexpr",
          "signature": "BFalse",
          "source": "src/Data-BoolExpr.html#BoolExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "BFalse",
          "package": "boolexpr",
          "partial": "BFalse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:BFalse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr",
          "name": "BNot",
          "package": "boolexpr",
          "signature": "BNot (BoolExpr a)",
          "source": "src/Data-BoolExpr.html#BoolExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "BNot",
          "package": "boolexpr",
          "partial": "BNot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:BNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr",
          "name": "BOr",
          "package": "boolexpr",
          "signature": "BOr (BoolExpr a) (BoolExpr a)",
          "source": "src/Data-BoolExpr.html#BoolExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "BOr",
          "package": "boolexpr",
          "partial": "BOr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:BOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr",
          "name": "BTrue",
          "package": "boolexpr",
          "signature": "BTrue",
          "source": "src/Data-BoolExpr.html#BoolExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "BTrue",
          "package": "boolexpr",
          "partial": "BTrue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:BTrue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr",
          "name": "CNF",
          "package": "boolexpr",
          "signature": "CNF",
          "source": "src/Data-BoolExpr.html#CNF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "CNF",
          "package": "boolexpr",
          "partial": "CNF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:CNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr",
          "name": "Conj",
          "package": "boolexpr",
          "signature": "Conj",
          "source": "src/Data-BoolExpr.html#Conj",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "Conj",
          "package": "boolexpr",
          "partial": "Conj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:Conj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr",
          "name": "DNF",
          "package": "boolexpr",
          "signature": "DNF",
          "source": "src/Data-BoolExpr.html#DNF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "DNF",
          "package": "boolexpr",
          "partial": "DNF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:DNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr",
          "name": "Disj",
          "package": "boolexpr",
          "signature": "Disj",
          "source": "src/Data-BoolExpr.html#Disj",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "Disj",
          "package": "boolexpr",
          "partial": "Disj",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:Disj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr",
          "name": "Negative",
          "package": "boolexpr",
          "signature": "Negative a",
          "source": "src/Data-BoolExpr.html#Signed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "Negative",
          "package": "boolexpr",
          "partial": "Negative",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:Negative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr",
          "name": "Positive",
          "package": "boolexpr",
          "signature": "Positive a",
          "source": "src/Data-BoolExpr.html#Signed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "Positive",
          "package": "boolexpr",
          "partial": "Positive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:Positive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr",
          "name": "bConst",
          "package": "boolexpr",
          "signature": "a -\u003e f a",
          "source": "src/Data-BoolExpr.html#bConst",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "bConst",
          "normalized": "a-\u003eb a",
          "package": "boolexpr",
          "partial": "Const",
          "signature": "a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:bConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr",
          "name": "bFalse",
          "package": "boolexpr",
          "signature": "f a",
          "source": "src/Data-BoolExpr.html#bFalse",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "bFalse",
          "package": "boolexpr",
          "partial": "False",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:bFalse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr",
          "name": "bNot",
          "package": "boolexpr",
          "signature": "f a -\u003e f a",
          "source": "src/Data-BoolExpr.html#bNot",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "bNot",
          "normalized": "a b-\u003ea b",
          "package": "boolexpr",
          "partial": "Not",
          "signature": "f a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:bNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr",
          "name": "bTrue",
          "package": "boolexpr",
          "signature": "f a",
          "source": "src/Data-BoolExpr.html#bTrue",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "bTrue",
          "package": "boolexpr",
          "partial": "True",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:bTrue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a boolean tree to a conjunctive normal form.\n\u003c/p\u003e",
          "module": "Data.BoolExpr",
          "name": "boolTreeToCNF",
          "package": "boolexpr",
          "signature": "NegateConstant a -\u003e BoolExpr a -\u003e CNF a",
          "source": "src/Data-BoolExpr.html#boolTreeToCNF",
          "type": "function"
        },
        "index": {
          "description": "Convert boolean tree to conjunctive normal form",
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "boolTreeToCNF",
          "normalized": "NegateConstant a-\u003eBoolExpr a-\u003eCNF a",
          "package": "boolexpr",
          "partial": "Tree To CNF",
          "signature": "NegateConstant a-\u003eBoolExpr a-\u003eCNF a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:boolTreeToCNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a boolean tree to a disjunctive normal form.\n\u003c/p\u003e",
          "module": "Data.BoolExpr",
          "name": "boolTreeToDNF",
          "package": "boolexpr",
          "signature": "(a -\u003e BoolExpr a) -\u003e BoolExpr a -\u003e DNF a",
          "source": "src/Data-BoolExpr.html#boolTreeToDNF",
          "type": "function"
        },
        "index": {
          "description": "Convert boolean tree to disjunctive normal form",
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "boolTreeToDNF",
          "normalized": "(a-\u003eBoolExpr a)-\u003eBoolExpr a-\u003eDNF a",
          "package": "boolexpr",
          "partial": "Tree To DNF",
          "signature": "(a-\u003eBoolExpr a)-\u003eBoolExpr a-\u003eDNF a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:boolTreeToDNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns constants used in a given boolean tree, these\n constants are returned signed depending one how many\n negations stands over a given constant.\n\u003c/p\u003e",
          "module": "Data.BoolExpr",
          "name": "constants",
          "package": "boolexpr",
          "signature": "BoolExpr a -\u003e [Signed a]",
          "source": "src/Data-BoolExpr.html#constants",
          "type": "function"
        },
        "index": {
          "description": "Returns constants used in given boolean tree these constants are returned signed depending one how many negations stands over given constant",
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "constants",
          "normalized": "BoolExpr a-\u003e[Signed a]",
          "package": "boolexpr",
          "signature": "BoolExpr a-\u003e[Signed a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:constants"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr",
          "name": "dualize",
          "package": "boolexpr",
          "signature": "NegateConstant a -\u003e BoolExpr a -\u003e BoolExpr a",
          "source": "src/Data-BoolExpr.html#dualize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "dualize",
          "normalized": "NegateConstant a-\u003eBoolExpr a-\u003eBoolExpr a",
          "package": "boolexpr",
          "signature": "NegateConstant a-\u003eBoolExpr a-\u003eBoolExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:dualize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr",
          "name": "evalBoolExpr",
          "package": "boolexpr",
          "signature": "(a -\u003e Bool) -\u003e BoolExpr a -\u003e Bool",
          "source": "src/Data-BoolExpr.html#evalBoolExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "evalBoolExpr",
          "normalized": "(a-\u003eBool)-\u003eBoolExpr a-\u003eBool",
          "package": "boolexpr",
          "partial": "Bool Expr",
          "signature": "(a-\u003eBool)-\u003eBoolExpr a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:evalBoolExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePush the negations inwards as much as possible.\n The resulting boolean tree no longer use negations.\n\u003c/p\u003e",
          "module": "Data.BoolExpr",
          "name": "pushNotInwards",
          "package": "boolexpr",
          "signature": "NegateConstant a -\u003e BoolExpr a -\u003e BoolExpr a",
          "source": "src/Data-BoolExpr.html#pushNotInwards",
          "type": "function"
        },
        "index": {
          "description": "Push the negations inwards as much as possible The resulting boolean tree no longer use negations",
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "pushNotInwards",
          "normalized": "NegateConstant a-\u003eBoolExpr a-\u003eBoolExpr a",
          "package": "boolexpr",
          "partial": "Not Inwards",
          "signature": "NegateConstant a-\u003eBoolExpr a-\u003eBoolExpr a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:pushNotInwards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduce a boolean tree annotated by booleans to a single boolean.\n\u003c/p\u003e",
          "module": "Data.BoolExpr",
          "name": "reduceBoolExpr",
          "package": "boolexpr",
          "signature": "BoolExpr Bool -\u003e Bool",
          "source": "src/Data-BoolExpr.html#reduceBoolExpr",
          "type": "function"
        },
        "index": {
          "description": "Reduce boolean tree annotated by booleans to single boolean",
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "reduceBoolExpr",
          "normalized": "BoolExpr Bool-\u003eBool",
          "package": "boolexpr",
          "partial": "Bool Expr",
          "signature": "BoolExpr Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:reduceBoolExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduce a boolean expression in conjunctive normal form to a single\n boolean.\n\u003c/p\u003e",
          "module": "Data.BoolExpr",
          "name": "reduceCNF",
          "package": "boolexpr",
          "signature": "CNF Bool -\u003e Bool",
          "source": "src/Data-BoolExpr.html#reduceCNF",
          "type": "function"
        },
        "index": {
          "description": "Reduce boolean expression in conjunctive normal form to single boolean",
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "reduceCNF",
          "normalized": "CNF Bool-\u003eBool",
          "package": "boolexpr",
          "partial": "CNF",
          "signature": "CNF Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:reduceCNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduce a boolean expression in disjunctive normal form to a single\n boolean.\n\u003c/p\u003e",
          "module": "Data.BoolExpr",
          "name": "reduceDNF",
          "package": "boolexpr",
          "signature": "DNF Bool -\u003e Bool",
          "source": "src/Data-BoolExpr.html#reduceDNF",
          "type": "function"
        },
        "index": {
          "description": "Reduce boolean expression in disjunctive normal form to single boolean",
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "reduceDNF",
          "normalized": "DNF Bool-\u003eBool",
          "package": "boolexpr",
          "partial": "DNF",
          "signature": "DNF Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:reduceDNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr",
          "name": "unCNF",
          "package": "boolexpr",
          "signature": "Conj (Disj a)",
          "source": "src/Data-BoolExpr.html#CNF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "unCNF",
          "package": "boolexpr",
          "partial": "CNF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:unCNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr",
          "name": "unConj",
          "package": "boolexpr",
          "signature": "[a]",
          "source": "src/Data-BoolExpr.html#Conj",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "unConj",
          "normalized": "[a]",
          "package": "boolexpr",
          "partial": "Conj",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:unConj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr",
          "name": "unDNF",
          "package": "boolexpr",
          "signature": "Disj (Conj a)",
          "source": "src/Data-BoolExpr.html#DNF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "unDNF",
          "package": "boolexpr",
          "partial": "DNF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:unDNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BoolExpr",
          "name": "unDisj",
          "package": "boolexpr",
          "signature": "[a]",
          "source": "src/Data-BoolExpr.html#Disj",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BoolExpr",
          "module": "Data.BoolExpr",
          "name": "unDisj",
          "normalized": "[a]",
          "package": "boolexpr",
          "partial": "Disj",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/boolexpr/docs/Data-BoolExpr.html#v:unDisj"
      }
    }
  ]
]