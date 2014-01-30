[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ParserFunction/docs/Text-ParserCombinators-Parsec-ParserFunction.html#",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.ParserFunction",
        "fct-package": "ParserFunction",
        "fct-signature": "module",
        "fct-source": "src/Text-ParserCombinators-Parsec-ParserFunction.html",
        "fct-type": "module",
        "title": "ParserFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec ParserFunction",
        "module": "Text.ParserCombinators.Parsec.ParserFunction",
        "name": "ParserFunction",
        "normalized": "",
        "package": "ParserFunction",
        "partial": "Parser Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ParserFunction/docs/Text-ParserCombinators-Parsec-ParserFunction.html#t:Expr",
      "description": {
        "fct-descr": "\u003cp\u003eThe Expr data type provides a basis for ordering mathematical operations.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.ParserFunction",
        "fct-package": "ParserFunction",
        "fct-signature": "data",
        "fct-source": "src/Text-ParserCombinators-Parsec-ParserFunction.html#Expr",
        "fct-type": "data",
        "title": "Expr"
      },
      "index": {
        "description": "The Expr data type provides basis for ordering mathematical operations",
        "hierarchy": "Text ParserCombinators Parsec ParserFunction",
        "module": "Text.ParserCombinators.Parsec.ParserFunction",
        "name": "Expr",
        "normalized": "",
        "package": "ParserFunction",
        "partial": "Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ParserFunction/docs/Text-ParserCombinators-Parsec-ParserFunction.html#t:Variable",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.ParserFunction",
        "fct-package": "ParserFunction",
        "fct-signature": "type",
        "fct-source": "src/Text-ParserCombinators-Parsec-ParserFunction.html#Variable",
        "fct-type": "type",
        "title": "Variable"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec ParserFunction",
        "module": "Text.ParserCombinators.Parsec.ParserFunction",
        "name": "Variable",
        "normalized": "",
        "package": "ParserFunction",
        "partial": "Variable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ParserFunction/docs/Text-ParserCombinators-Parsec-ParserFunction.html#v:buildExpr",
      "description": {
        "fct-module": "Text.ParserCombinators.Parsec.ParserFunction",
        "fct-package": "ParserFunction",
        "fct-signature": "Parser Expr",
        "fct-source": "src/Text-ParserCombinators-Parsec-ParserFunction.html#buildExpr",
        "fct-type": "function",
        "title": "buildExpr"
      },
      "index": {
        "description": "",
        "hierarchy": "Text ParserCombinators Parsec ParserFunction",
        "module": "Text.ParserCombinators.Parsec.ParserFunction",
        "name": "buildExpr",
        "normalized": "",
        "package": "ParserFunction",
        "partial": "Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ParserFunction/docs/Text-ParserCombinators-Parsec-ParserFunction.html#v:eval",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eeval\u003c/code\u003e takes a map of variable definitions and values, and a maybe expression tree, to produce maybe a numerical value.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.ParserFunction",
        "fct-package": "ParserFunction",
        "fct-signature": "Map Variable (Complex Double) -\u003e Maybe Expr -\u003e Maybe (Complex Double)",
        "fct-source": "src/Text-ParserCombinators-Parsec-ParserFunction.html#eval",
        "fct-type": "function",
        "title": "eval"
      },
      "index": {
        "description": "eval takes map of variable definitions and values and maybe expression tree to produce maybe numerical value",
        "hierarchy": "Text ParserCombinators Parsec ParserFunction",
        "module": "Text.ParserCombinators.Parsec.ParserFunction",
        "name": "eval",
        "normalized": "Map Variable(Complex Double)-\u003eMaybe Expr-\u003eMaybe(Complex Double)",
        "package": "ParserFunction",
        "partial": "",
        "signature": "Map Variable(Complex Double)-\u003eMaybe Expr-\u003eMaybe(Complex Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ParserFunction/docs/Text-ParserCombinators-Parsec-ParserFunction.html#v:evalExpr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eevalExpr\u003c/code\u003e evaluates an expression tree using a list of variable definitions with values. \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.ParserFunction",
        "fct-package": "ParserFunction",
        "fct-signature": "Expr -\u003e [(Variable, Complex Double)] -\u003e Maybe (Complex Double)",
        "fct-source": "src/Text-ParserCombinators-Parsec-ParserFunction.html#evalExpr",
        "fct-type": "function",
        "title": "evalExpr"
      },
      "index": {
        "description": "evalExpr evaluates an expression tree using list of variable definitions with values",
        "hierarchy": "Text ParserCombinators Parsec ParserFunction",
        "module": "Text.ParserCombinators.Parsec.ParserFunction",
        "name": "evalExpr",
        "normalized": "Expr-\u003e[(Variable,Complex Double)]-\u003eMaybe(Complex Double)",
        "package": "ParserFunction",
        "partial": "Expr",
        "signature": "Expr-\u003e[(Variable,Complex Double)]-\u003eMaybe(Complex Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ParserFunction/docs/Text-ParserCombinators-Parsec-ParserFunction.html#v:evalString",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eevalString\u003c/code\u003e evaluates a string-expression using a list of variable definitions with values. \n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.ParserFunction",
        "fct-package": "ParserFunction",
        "fct-signature": "String -\u003e [(Variable, Complex Double)] -\u003e Maybe (Complex Double)",
        "fct-source": "src/Text-ParserCombinators-Parsec-ParserFunction.html#evalString",
        "fct-type": "function",
        "title": "evalString"
      },
      "index": {
        "description": "evalString evaluates string-expression using list of variable definitions with values",
        "hierarchy": "Text ParserCombinators Parsec ParserFunction",
        "module": "Text.ParserCombinators.Parsec.ParserFunction",
        "name": "evalString",
        "normalized": "String-\u003e[(Variable,Complex Double)]-\u003eMaybe(Complex Double)",
        "package": "ParserFunction",
        "partial": "String",
        "signature": "String-\u003e[(Variable,Complex Double)]-\u003eMaybe(Complex Double)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ParserFunction/docs/Text-ParserCombinators-Parsec-ParserFunction.html#v:stringToExpr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003estringToExpr\u003c/code\u003e parses a string-expression and returns a maybe expression tree.\n\u003c/p\u003e",
        "fct-module": "Text.ParserCombinators.Parsec.ParserFunction",
        "fct-package": "ParserFunction",
        "fct-signature": "String -\u003e Maybe Expr",
        "fct-source": "src/Text-ParserCombinators-Parsec-ParserFunction.html#stringToExpr",
        "fct-type": "function",
        "title": "stringToExpr"
      },
      "index": {
        "description": "stringToExpr parses string-expression and returns maybe expression tree",
        "hierarchy": "Text ParserCombinators Parsec ParserFunction",
        "module": "Text.ParserCombinators.Parsec.ParserFunction",
        "name": "stringToExpr",
        "normalized": "String-\u003eMaybe Expr",
        "package": "ParserFunction",
        "partial": "To Expr",
        "signature": "String-\u003eMaybe Expr"
      }
    }
  }
]