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
        "word": "dice"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "Dice",
          "package": "dice",
          "source": "src/Data-Random-Dice.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "Dice",
          "package": "dice",
          "partial": "Dice",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "Expr",
          "package": "dice",
          "source": "src/Data-Random-Dice.html#Expr",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "Expr",
          "package": "dice",
          "partial": "Expr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#t:Expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "Const",
          "package": "dice",
          "signature": "Const String a",
          "source": "src/Data-Random-Dice.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "Const",
          "package": "dice",
          "partial": "Const",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:Const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "Divide",
          "package": "dice",
          "signature": "Divide (Expr a) (Expr a)",
          "source": "src/Data-Random-Dice.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "Divide",
          "package": "dice",
          "partial": "Divide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:Divide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "Minus",
          "package": "dice",
          "signature": "Minus (Expr a) (Expr a)",
          "source": "src/Data-Random-Dice.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "Minus",
          "package": "dice",
          "partial": "Minus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:Minus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "Plus",
          "package": "dice",
          "signature": "Plus (Expr a) (Expr a)",
          "source": "src/Data-Random-Dice.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "Plus",
          "package": "dice",
          "partial": "Plus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:Plus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "Times",
          "package": "dice",
          "signature": "Times (Expr a) (Expr a)",
          "source": "src/Data-Random-Dice.html#Expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "Times",
          "package": "dice",
          "partial": "Times",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:Times"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "commute",
          "package": "dice",
          "signature": "(Expr a -\u003e Expr a1 -\u003e b) -\u003e Expr (m a) -\u003e Expr (m a1) -\u003e m b",
          "source": "src/Data-Random-Dice.html#commute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "commute",
          "normalized": "(Expr a-\u003eExpr a-\u003eb)-\u003eExpr(c a)-\u003eExpr(c a)-\u003ec b",
          "package": "dice",
          "signature": "(Expr a-\u003eExpr a-\u003eb)-\u003eExpr(m a)-\u003eExpr(m a)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:commute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "diceLang",
          "package": "dice",
          "signature": "TokenParser st",
          "source": "src/Data-Random-Dice.html#diceLang",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "diceLang",
          "package": "dice",
          "partial": "Lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:diceLang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "dieExp",
          "package": "dice",
          "signature": "CharParser Bool (Expr (RVar [a]))",
          "source": "src/Data-Random-Dice.html#dieExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "dieExp",
          "normalized": "CharParser Bool(Expr(RVar[a]))",
          "package": "dice",
          "partial": "Exp",
          "signature": "CharParser Bool(Expr(RVar[a]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:dieExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "evalExprWithDiv",
          "package": "dice",
          "signature": "(a -\u003e a -\u003e m a) -\u003e Expr a -\u003e m a",
          "source": "src/Data-Random-Dice.html#evalExprWithDiv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "evalExprWithDiv",
          "normalized": "(a-\u003ea-\u003eb a)-\u003eExpr a-\u003eb a",
          "package": "dice",
          "partial": "Expr With Div",
          "signature": "(a-\u003ea-\u003em a)-\u003eExpr a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:evalExprWithDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "evalFractionalExpr",
          "package": "dice",
          "signature": "Expr a -\u003e m a",
          "source": "src/Data-Random-Dice.html#evalFractionalExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "evalFractionalExpr",
          "normalized": "Expr a-\u003eb a",
          "package": "dice",
          "partial": "Fractional Expr",
          "signature": "Expr a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:evalFractionalExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "evalIntegralExpr",
          "package": "dice",
          "signature": "Expr a -\u003e m a",
          "source": "src/Data-Random-Dice.html#evalIntegralExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "evalIntegralExpr",
          "normalized": "Expr a-\u003eb a",
          "package": "dice",
          "partial": "Integral Expr",
          "signature": "Expr a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:evalIntegralExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "expr",
          "package": "dice",
          "signature": "CharParser Bool (Expr (RVar [a]))",
          "source": "src/Data-Random-Dice.html#expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "expr",
          "normalized": "CharParser Bool(Expr(RVar[a]))",
          "package": "dice",
          "signature": "CharParser Bool(Expr(RVar[a]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "fmtExprPrec",
          "package": "dice",
          "signature": "(String -\u003e a -\u003e Int -\u003e ShowS) -\u003e Expr a -\u003e Int -\u003e ShowS",
          "source": "src/Data-Random-Dice.html#fmtExprPrec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "fmtExprPrec",
          "normalized": "(String-\u003ea-\u003eInt-\u003eShowS)-\u003eExpr a-\u003eInt-\u003eShowS",
          "package": "dice",
          "partial": "Expr Prec",
          "signature": "(String-\u003ea-\u003eInt-\u003eShowS)-\u003eExpr a-\u003eInt-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:fmtExprPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "fmtIntegralExpr",
          "package": "dice",
          "signature": "Expr a -\u003e String",
          "source": "src/Data-Random-Dice.html#fmtIntegralExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "fmtIntegralExpr",
          "normalized": "Expr a-\u003eString",
          "package": "dice",
          "partial": "Integral Expr",
          "signature": "Expr a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:fmtIntegralExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "fmtIntegralListExpr",
          "package": "dice",
          "signature": "Expr [a] -\u003e String",
          "source": "src/Data-Random-Dice.html#fmtIntegralListExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "fmtIntegralListExpr",
          "normalized": "Expr[a]-\u003eString",
          "package": "dice",
          "partial": "Integral List Expr",
          "signature": "Expr[a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:fmtIntegralListExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "fmtSimple",
          "package": "dice",
          "signature": "Expr [a] -\u003e String",
          "source": "src/Data-Random-Dice.html#fmtSimple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "fmtSimple",
          "normalized": "Expr[a]-\u003eString",
          "package": "dice",
          "partial": "Simple",
          "signature": "Expr[a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:fmtSimple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "fmtSimpleRational",
          "package": "dice",
          "signature": "Expr [Integer] -\u003e String",
          "source": "src/Data-Random-Dice.html#fmtSimpleRational",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "fmtSimpleRational",
          "normalized": "Expr[Integer]-\u003eString",
          "package": "dice",
          "partial": "Simple Rational",
          "signature": "Expr[Integer]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:fmtSimpleRational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "foldExpr",
          "package": "dice",
          "signature": "(String -\u003e t -\u003e t1) -\u003e (t1 -\u003e t1 -\u003e t1) -\u003e (t1 -\u003e t1 -\u003e t1) -\u003e (t1 -\u003e t1 -\u003e t1) -\u003e (t1 -\u003e t1 -\u003e t1) -\u003e Expr t -\u003e t1",
          "source": "src/Data-Random-Dice.html#foldExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "foldExpr",
          "normalized": "(String-\u003ea-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003e(a-\u003ea-\u003ea)-\u003eExpr a-\u003ea",
          "package": "dice",
          "partial": "Expr",
          "signature": "(String-\u003et-\u003et)-\u003e(t-\u003et-\u003et)-\u003e(t-\u003et-\u003et)-\u003e(t-\u003et-\u003et)-\u003e(t-\u003et-\u003et)-\u003eExpr t-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:foldExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "numExp",
          "package": "dice",
          "signature": "CharParser st (Expr (RVar [a]))",
          "source": "src/Data-Random-Dice.html#numExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "numExp",
          "normalized": "CharParser a(Expr(RVar[b]))",
          "package": "dice",
          "partial": "Exp",
          "signature": "CharParser st(Expr(RVar[a]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:numExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "number",
          "package": "dice",
          "signature": "CharParser st (String, Integer)",
          "source": "src/Data-Random-Dice.html#number",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "number",
          "normalized": "CharParser a(String,Integer)",
          "package": "dice",
          "signature": "CharParser st(String,Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "parseExpr",
          "package": "dice",
          "signature": "String -\u003e String -\u003e Either ParseError (Expr (RVar [a]))",
          "source": "src/Data-Random-Dice.html#parseExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "parseExpr",
          "normalized": "String-\u003eString-\u003eEither ParseError(Expr(RVar[a]))",
          "package": "dice",
          "partial": "Expr",
          "signature": "String-\u003eString-\u003eEither ParseError(Expr(RVar[a]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:parseExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "positiveNumber",
          "package": "dice",
          "signature": "CharParser st (String, Integer)",
          "source": "src/Data-Random-Dice.html#positiveNumber",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "positiveNumber",
          "normalized": "CharParser a(String,Integer)",
          "package": "dice",
          "partial": "Number",
          "signature": "CharParser st(String,Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:positiveNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "primExp",
          "package": "dice",
          "signature": "CharParser Bool (Expr (RVar [a]))",
          "source": "src/Data-Random-Dice.html#primExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "primExp",
          "normalized": "CharParser Bool(Expr(RVar[a]))",
          "package": "dice",
          "partial": "Exp",
          "signature": "CharParser Bool(Expr(RVar[a]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:primExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "roll",
          "package": "dice",
          "signature": "a -\u003e a -\u003e RVar [a]",
          "source": "src/Data-Random-Dice.html#roll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "roll",
          "normalized": "a-\u003ea-\u003eRVar[a]",
          "package": "dice",
          "signature": "a-\u003ea-\u003eRVar[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:roll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "rollEm",
          "package": "dice",
          "signature": "String -\u003e IO (Either ParseError String)",
          "source": "src/Data-Random-Dice.html#rollEm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "rollEm",
          "normalized": "String-\u003eIO(Either ParseError String)",
          "package": "dice",
          "partial": "Em",
          "signature": "String-\u003eIO(Either ParseError String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:rollEm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "runExpr",
          "package": "dice",
          "signature": "Expr (m a) -\u003e m (Expr a)",
          "source": "src/Data-Random-Dice.html#runExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "runExpr",
          "normalized": "Expr(a b)-\u003ea(Expr b)",
          "package": "dice",
          "partial": "Expr",
          "signature": "Expr(m a)-\u003em(Expr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:runExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "showDouble",
          "package": "dice",
          "signature": "Double -\u003e ShowS",
          "source": "src/Data-Random-Dice.html#showDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "showDouble",
          "normalized": "Double-\u003eShowS",
          "package": "dice",
          "partial": "Double",
          "signature": "Double-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:showDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "showError",
          "package": "dice",
          "signature": "ErrorT String Identity a -\u003e ShowS",
          "source": "src/Data-Random-Dice.html#showError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "showError",
          "normalized": "ErrorT String Identity a-\u003eShowS",
          "package": "dice",
          "partial": "Error",
          "signature": "ErrorT String Identity a-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:showError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "showErrorWith",
          "package": "dice",
          "signature": "(t -\u003e ShowS) -\u003e ErrorT String Identity t -\u003e ShowS",
          "source": "src/Data-Random-Dice.html#showErrorWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "showErrorWith",
          "normalized": "(a-\u003eShowS)-\u003eErrorT String Identity a-\u003eShowS",
          "package": "dice",
          "partial": "Error With",
          "signature": "(t-\u003eShowS)-\u003eErrorT String Identity t-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:showErrorWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "showListConst",
          "package": "dice",
          "signature": "String -\u003e a -\u003e t -\u003e String -\u003e String",
          "source": "src/Data-Random-Dice.html#showListConst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "showListConst",
          "normalized": "String-\u003ea-\u003eb-\u003eString-\u003eString",
          "package": "dice",
          "partial": "List Const",
          "signature": "String-\u003ea-\u003et-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:showListConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "showRational",
          "package": "dice",
          "signature": "a -\u003e Ratio a1 -\u003e ShowS",
          "source": "src/Data-Random-Dice.html#showRational",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "showRational",
          "normalized": "a-\u003eRatio a-\u003eShowS",
          "package": "dice",
          "partial": "Rational",
          "signature": "a-\u003eRatio a-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:showRational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "showRationalWithDouble",
          "package": "dice",
          "signature": "Ratio Integer -\u003e ShowS",
          "source": "src/Data-Random-Dice.html#showRationalWithDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "showRationalWithDouble",
          "normalized": "Ratio Integer-\u003eShowS",
          "package": "dice",
          "partial": "Rational With Double",
          "signature": "Ratio Integer-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:showRationalWithDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "showScalarConst",
          "package": "dice",
          "signature": "String -\u003e a -\u003e t -\u003e String -\u003e String",
          "source": "src/Data-Random-Dice.html#showScalarConst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "showScalarConst",
          "normalized": "String-\u003ea-\u003eb-\u003eString-\u003eString",
          "package": "dice",
          "partial": "Scalar Const",
          "signature": "String-\u003ea-\u003et-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:showScalarConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "showSimpleConst",
          "package": "dice",
          "signature": "(a -\u003e a1 -\u003e ShowS) -\u003e t -\u003e [a1] -\u003e a -\u003e ShowS",
          "source": "src/Data-Random-Dice.html#showSimpleConst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "showSimpleConst",
          "normalized": "(a-\u003ea-\u003eShowS)-\u003eb-\u003e[a]-\u003ea-\u003eShowS",
          "package": "dice",
          "partial": "Simple Const",
          "signature": "(a-\u003ea-\u003eShowS)-\u003et-\u003e[a]-\u003ea-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:showSimpleConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "showSimpleListConst",
          "package": "dice",
          "signature": "String -\u003e [a] -\u003e Int -\u003e ShowS",
          "source": "src/Data-Random-Dice.html#showSimpleListConst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "showSimpleListConst",
          "normalized": "String-\u003e[a]-\u003eInt-\u003eShowS",
          "package": "dice",
          "partial": "Simple List Const",
          "signature": "String-\u003e[a]-\u003eInt-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:showSimpleListConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "showSimpleRationalConst",
          "package": "dice",
          "signature": "t -\u003e [Ratio Integer] -\u003e Integer -\u003e ShowS",
          "source": "src/Data-Random-Dice.html#showSimpleRationalConst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "showSimpleRationalConst",
          "normalized": "a-\u003e[Ratio Integer]-\u003eInteger-\u003eShowS",
          "package": "dice",
          "partial": "Simple Rational Const",
          "signature": "t-\u003e[Ratio Integer]-\u003eInteger-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:showSimpleRationalConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "summarizeRollsOver",
          "package": "dice",
          "signature": "Int -\u003e [a] -\u003e [a]",
          "source": "src/Data-Random-Dice.html#summarizeRollsOver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "summarizeRollsOver",
          "normalized": "Int-\u003e[a]-\u003e[a]",
          "package": "dice",
          "partial": "Rolls Over",
          "signature": "Int-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:summarizeRollsOver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Random.Dice",
          "name": "term",
          "package": "dice",
          "signature": "CharParser Bool (Expr (RVar [a]))",
          "source": "src/Data-Random-Dice.html#term",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Random Dice",
          "module": "Data.Random.Dice",
          "name": "term",
          "normalized": "CharParser Bool(Expr(RVar[a]))",
          "package": "dice",
          "signature": "CharParser Bool(Expr(RVar[a]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/dice/docs/Data-Random-Dice.html#v:term"
      }
    }
  ]
]