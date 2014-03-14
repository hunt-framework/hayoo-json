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
        "word": "ParserFunction"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.ParserFunction",
          "name": "ParserFunction",
          "package": "ParserFunction",
          "source": "src/Text-ParserCombinators-Parsec-ParserFunction.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec ParserFunction",
          "module": "Text.ParserCombinators.Parsec.ParserFunction",
          "name": "ParserFunction",
          "package": "ParserFunction",
          "partial": "Parser Function",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ParserFunction/docs/Text-ParserCombinators-Parsec-ParserFunction.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Expr data type provides a basis for ordering mathematical operations.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.ParserFunction",
          "name": "Expr",
          "package": "ParserFunction",
          "source": "src/Text-ParserCombinators-Parsec-ParserFunction.html#Expr",
          "type": "data"
        },
        "index": {
          "description": "The Expr data type provides basis for ordering mathematical operations",
          "hierarchy": "Text ParserCombinators Parsec ParserFunction",
          "module": "Text.ParserCombinators.Parsec.ParserFunction",
          "name": "Expr",
          "package": "ParserFunction",
          "partial": "Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ParserFunction/docs/Text-ParserCombinators-Parsec-ParserFunction.html#t:Expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.ParserFunction",
          "name": "Variable",
          "package": "ParserFunction",
          "source": "src/Text-ParserCombinators-Parsec-ParserFunction.html#Variable",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec ParserFunction",
          "module": "Text.ParserCombinators.Parsec.ParserFunction",
          "name": "Variable",
          "package": "ParserFunction",
          "partial": "Variable",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ParserFunction/docs/Text-ParserCombinators-Parsec-ParserFunction.html#t:Variable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Parsec.ParserFunction",
          "name": "buildExpr",
          "package": "ParserFunction",
          "signature": "Parser Expr",
          "source": "src/Text-ParserCombinators-Parsec-ParserFunction.html#buildExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Parsec ParserFunction",
          "module": "Text.ParserCombinators.Parsec.ParserFunction",
          "name": "buildExpr",
          "package": "ParserFunction",
          "partial": "Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ParserFunction/docs/Text-ParserCombinators-Parsec-ParserFunction.html#v:buildExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eeval\u003c/code\u003e takes a map of variable definitions and values, and a maybe expression tree, to produce maybe a numerical value.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.ParserFunction",
          "name": "eval",
          "package": "ParserFunction",
          "signature": "Map Variable (Complex Double) -\u003e Maybe Expr -\u003e Maybe (Complex Double)",
          "source": "src/Text-ParserCombinators-Parsec-ParserFunction.html#eval",
          "type": "function"
        },
        "index": {
          "description": "eval takes map of variable definitions and values and maybe expression tree to produce maybe numerical value",
          "hierarchy": "Text ParserCombinators Parsec ParserFunction",
          "module": "Text.ParserCombinators.Parsec.ParserFunction",
          "name": "eval",
          "normalized": "Map Variable(Complex Double)-\u003eMaybe Expr-\u003eMaybe(Complex Double)",
          "package": "ParserFunction",
          "signature": "Map Variable(Complex Double)-\u003eMaybe Expr-\u003eMaybe(Complex Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ParserFunction/docs/Text-ParserCombinators-Parsec-ParserFunction.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eevalExpr\u003c/code\u003e evaluates an expression tree using a list of variable definitions with values. \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.ParserFunction",
          "name": "evalExpr",
          "package": "ParserFunction",
          "signature": "Expr -\u003e [(Variable, Complex Double)] -\u003e Maybe (Complex Double)",
          "source": "src/Text-ParserCombinators-Parsec-ParserFunction.html#evalExpr",
          "type": "function"
        },
        "index": {
          "description": "evalExpr evaluates an expression tree using list of variable definitions with values",
          "hierarchy": "Text ParserCombinators Parsec ParserFunction",
          "module": "Text.ParserCombinators.Parsec.ParserFunction",
          "name": "evalExpr",
          "normalized": "Expr-\u003e[(Variable,Complex Double)]-\u003eMaybe(Complex Double)",
          "package": "ParserFunction",
          "partial": "Expr",
          "signature": "Expr-\u003e[(Variable,Complex Double)]-\u003eMaybe(Complex Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ParserFunction/docs/Text-ParserCombinators-Parsec-ParserFunction.html#v:evalExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eevalString\u003c/code\u003e evaluates a string-expression using a list of variable definitions with values. \n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.ParserFunction",
          "name": "evalString",
          "package": "ParserFunction",
          "signature": "String -\u003e [(Variable, Complex Double)] -\u003e Maybe (Complex Double)",
          "source": "src/Text-ParserCombinators-Parsec-ParserFunction.html#evalString",
          "type": "function"
        },
        "index": {
          "description": "evalString evaluates string-expression using list of variable definitions with values",
          "hierarchy": "Text ParserCombinators Parsec ParserFunction",
          "module": "Text.ParserCombinators.Parsec.ParserFunction",
          "name": "evalString",
          "normalized": "String-\u003e[(Variable,Complex Double)]-\u003eMaybe(Complex Double)",
          "package": "ParserFunction",
          "partial": "String",
          "signature": "String-\u003e[(Variable,Complex Double)]-\u003eMaybe(Complex Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ParserFunction/docs/Text-ParserCombinators-Parsec-ParserFunction.html#v:evalString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003estringToExpr\u003c/code\u003e parses a string-expression and returns a maybe expression tree.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Parsec.ParserFunction",
          "name": "stringToExpr",
          "package": "ParserFunction",
          "signature": "String -\u003e Maybe Expr",
          "source": "src/Text-ParserCombinators-Parsec-ParserFunction.html#stringToExpr",
          "type": "function"
        },
        "index": {
          "description": "stringToExpr parses string-expression and returns maybe expression tree",
          "hierarchy": "Text ParserCombinators Parsec ParserFunction",
          "module": "Text.ParserCombinators.Parsec.ParserFunction",
          "name": "stringToExpr",
          "normalized": "String-\u003eMaybe Expr",
          "package": "ParserFunction",
          "partial": "To Expr",
          "signature": "String-\u003eMaybe Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ParserFunction/docs/Text-ParserCombinators-Parsec-ParserFunction.html#v:stringToExpr"
      }
    }
  ]
]