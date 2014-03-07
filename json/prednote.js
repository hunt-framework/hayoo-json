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
        "word": "prednote"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Expressions.Infix",
          "name": "Infix",
          "package": "prednote",
          "source": "src/Data-Prednote-Expressions-Infix.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Prednote Expressions Infix",
          "module": "Data.Prednote.Expressions.Infix",
          "name": "Infix",
          "package": "prednote",
          "partial": "Infix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-Infix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Expressions.Infix",
          "name": "InfixToken",
          "package": "prednote",
          "source": "src/Data-Prednote-Expressions-Infix.html#InfixToken",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Prednote Expressions Infix",
          "module": "Data.Prednote.Expressions.Infix",
          "name": "InfixToken",
          "package": "prednote",
          "partial": "Infix Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-Infix.html#t:InfixToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Expressions.Infix",
          "name": "Paren",
          "package": "prednote",
          "source": "src/Data-Prednote-Expressions-Infix.html#Paren",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Prednote Expressions Infix",
          "module": "Data.Prednote.Expressions.Infix",
          "name": "Paren",
          "package": "prednote",
          "partial": "Paren",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-Infix.html#t:Paren"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Expressions.Infix",
          "name": "Close",
          "package": "prednote",
          "signature": "Close",
          "source": "src/Data-Prednote-Expressions-Infix.html#Paren",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Expressions Infix",
          "module": "Data.Prednote.Expressions.Infix",
          "name": "Close",
          "package": "prednote",
          "partial": "Close",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-Infix.html#v:Close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Expressions.Infix",
          "name": "Open",
          "package": "prednote",
          "signature": "Open",
          "source": "src/Data-Prednote-Expressions-Infix.html#Paren",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Expressions Infix",
          "module": "Data.Prednote.Expressions.Infix",
          "name": "Open",
          "package": "prednote",
          "partial": "Open",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-Infix.html#v:Open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Expressions.Infix",
          "name": "TokParen",
          "package": "prednote",
          "signature": "TokParen Paren",
          "source": "src/Data-Prednote-Expressions-Infix.html#InfixToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Expressions Infix",
          "module": "Data.Prednote.Expressions.Infix",
          "name": "TokParen",
          "package": "prednote",
          "partial": "Tok Paren",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-Infix.html#v:TokParen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Expressions.Infix",
          "name": "TokRPN",
          "package": "prednote",
          "signature": "TokRPN (RPNToken a)",
          "source": "src/Data-Prednote-Expressions-Infix.html#InfixToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Expressions Infix",
          "module": "Data.Prednote.Expressions.Infix",
          "name": "TokRPN",
          "package": "prednote",
          "partial": "Tok RPN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-Infix.html#v:TokRPN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an RPN expression from an infix one. Fails only if there\n are mismatched parentheses. It is possible to create a nonsensical\n RPN expression; the RPN parser must catch this.\n\u003c/p\u003e",
          "module": "Data.Prednote.Expressions.Infix",
          "name": "createRPN",
          "package": "prednote",
          "signature": "f (InfixToken a)-\u003e Maybe [RPNToken a]",
          "type": "function"
        },
        "index": {
          "description": "Creates an RPN expression from an infix one Fails only if there are mismatched parentheses It is possible to create nonsensical RPN expression the RPN parser must catch this",
          "hierarchy": "Data Prednote Expressions Infix",
          "module": "Data.Prednote.Expressions.Infix",
          "name": "createRPN",
          "normalized": "a(InfixToken b)-\u003eMaybe[RPNToken b]",
          "package": "prednote",
          "partial": "RPN",
          "signature": "f(InfixToken a)-\u003eMaybe[RPNToken a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-Infix.html#v:createRPN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePostfix, or RPN, expression parsing.\n\u003c/p\u003e\u003cp\u003eThis module parses RPN expressions where the operands are\n predicates and the operators are one of \u003ccode\u003eand\u003c/code\u003e, \u003ccode\u003eor\u003c/code\u003e, or \u003ccode\u003enot\u003c/code\u003e,\n where \u003ccode\u003eand\u003c/code\u003e and \u003ccode\u003eor\u003c/code\u003e are binary and \u003ccode\u003enot\u003c/code\u003e is unary.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Prednote.Expressions.RPN",
          "name": "RPN",
          "package": "prednote",
          "source": "src/Data-Prednote-Expressions-RPN.html",
          "type": "module"
        },
        "index": {
          "description": "Postfix or RPN expression parsing This module parses RPN expressions where the operands are predicates and the operators are one of and or or not where and and or are binary and not is unary",
          "hierarchy": "Data Prednote Expressions RPN",
          "module": "Data.Prednote.Expressions.RPN",
          "name": "RPN",
          "package": "prednote",
          "partial": "RPN",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-RPN.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Expressions.RPN",
          "name": "Error",
          "package": "prednote",
          "source": "src/Data-Prednote-Expressions-RPN.html#Error",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Prednote Expressions RPN",
          "module": "Data.Prednote.Expressions.RPN",
          "name": "Error",
          "package": "prednote",
          "partial": "Error",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-RPN.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Expressions.RPN",
          "name": "Operator",
          "package": "prednote",
          "source": "src/Data-Prednote-Expressions-RPN.html#Operator",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Prednote Expressions RPN",
          "module": "Data.Prednote.Expressions.RPN",
          "name": "Operator",
          "package": "prednote",
          "partial": "Operator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-RPN.html#t:Operator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Expressions.RPN",
          "name": "RPNToken",
          "package": "prednote",
          "source": "src/Data-Prednote-Expressions-RPN.html#RPNToken",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Prednote Expressions RPN",
          "module": "Data.Prednote.Expressions.RPN",
          "name": "RPNToken",
          "package": "prednote",
          "partial": "RPNToken",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-RPN.html#t:RPNToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Expressions.RPN",
          "name": "OpAnd",
          "package": "prednote",
          "signature": "OpAnd",
          "source": "src/Data-Prednote-Expressions-RPN.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Expressions RPN",
          "module": "Data.Prednote.Expressions.RPN",
          "name": "OpAnd",
          "package": "prednote",
          "partial": "Op And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-RPN.html#v:OpAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Expressions.RPN",
          "name": "OpNot",
          "package": "prednote",
          "signature": "OpNot",
          "source": "src/Data-Prednote-Expressions-RPN.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Expressions RPN",
          "module": "Data.Prednote.Expressions.RPN",
          "name": "OpNot",
          "package": "prednote",
          "partial": "Op Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-RPN.html#v:OpNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Expressions.RPN",
          "name": "OpOr",
          "package": "prednote",
          "signature": "OpOr",
          "source": "src/Data-Prednote-Expressions-RPN.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Expressions RPN",
          "module": "Data.Prednote.Expressions.RPN",
          "name": "OpOr",
          "package": "prednote",
          "partial": "Op Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-RPN.html#v:OpOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Expressions.RPN",
          "name": "TokOperand",
          "package": "prednote",
          "signature": "TokOperand (Predbox a)",
          "source": "src/Data-Prednote-Expressions-RPN.html#RPNToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Expressions RPN",
          "module": "Data.Prednote.Expressions.RPN",
          "name": "TokOperand",
          "package": "prednote",
          "partial": "Tok Operand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-RPN.html#v:TokOperand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Expressions.RPN",
          "name": "TokOperator",
          "package": "prednote",
          "signature": "TokOperator Operator",
          "source": "src/Data-Prednote-Expressions-RPN.html#RPNToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Expressions RPN",
          "module": "Data.Prednote.Expressions.RPN",
          "name": "TokOperator",
          "package": "prednote",
          "partial": "Tok Operator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-RPN.html#v:TokOperator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses an RPN expression and returns the resulting Predbox. Fails if\n there are no operands left on the stack or if there are multiple\n operands left on the stack; the stack must contain exactly one\n operand in order to succeed.\n\u003c/p\u003e",
          "module": "Data.Prednote.Expressions.RPN",
          "name": "parseRPN",
          "package": "prednote",
          "signature": "f (RPNToken a) -\u003e Either Error (Predbox a)",
          "source": "src/Data-Prednote-Expressions-RPN.html#parseRPN",
          "type": "function"
        },
        "index": {
          "description": "Parses an RPN expression and returns the resulting Predbox Fails if there are no operands left on the stack or if there are multiple operands left on the stack the stack must contain exactly one operand in order to succeed",
          "hierarchy": "Data Prednote Expressions RPN",
          "module": "Data.Prednote.Expressions.RPN",
          "name": "parseRPN",
          "normalized": "a(RPNToken b)-\u003eEither Error(Predbox b)",
          "package": "prednote",
          "partial": "RPN",
          "signature": "f(RPNToken a)-\u003eEither Error(Predbox a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-RPN.html#v:parseRPN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Expressions.RPN",
          "name": "pushOperand",
          "package": "prednote",
          "signature": "Predbox a -\u003e [Predbox a] -\u003e [Predbox a]",
          "source": "src/Data-Prednote-Expressions-RPN.html#pushOperand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Expressions RPN",
          "module": "Data.Prednote.Expressions.RPN",
          "name": "pushOperand",
          "normalized": "Predbox a-\u003e[Predbox a]-\u003e[Predbox a]",
          "package": "prednote",
          "partial": "Operand",
          "signature": "Predbox a-\u003e[Predbox a]-\u003e[Predbox a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-RPN.html#v:pushOperand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Expressions.RPN",
          "name": "pushOperator",
          "package": "prednote",
          "signature": "Operator -\u003e [Predbox a] -\u003e Either Error [Predbox a]",
          "source": "src/Data-Prednote-Expressions-RPN.html#pushOperator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Expressions RPN",
          "module": "Data.Prednote.Expressions.RPN",
          "name": "pushOperator",
          "normalized": "Operator-\u003e[Predbox a]-\u003eEither Error[Predbox a]",
          "package": "prednote",
          "partial": "Operator",
          "signature": "Operator-\u003e[Predbox a]-\u003eEither Error[Predbox a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-RPN.html#v:pushOperator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Expressions.RPN",
          "name": "pushToken",
          "package": "prednote",
          "signature": "[Predbox a] -\u003e RPNToken a -\u003e Either Error [Predbox a]",
          "source": "src/Data-Prednote-Expressions-RPN.html#pushToken",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Expressions RPN",
          "module": "Data.Prednote.Expressions.RPN",
          "name": "pushToken",
          "normalized": "[Predbox a]-\u003eRPNToken a-\u003eEither Error[Predbox a]",
          "package": "prednote",
          "partial": "Token",
          "signature": "[Predbox a]-\u003eRPNToken a-\u003eEither Error[Predbox a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-RPN.html#v:pushToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHandles parsing of both infix and RPN Predbox expressions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Prednote.Expressions",
          "name": "Expressions",
          "package": "prednote",
          "source": "src/Data-Prednote-Expressions.html",
          "type": "module"
        },
        "index": {
          "description": "Handles parsing of both infix and RPN Predbox expressions",
          "hierarchy": "Data Prednote Expressions",
          "module": "Data.Prednote.Expressions",
          "name": "Expressions",
          "package": "prednote",
          "partial": "Expressions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Expressions",
          "name": "Error",
          "package": "prednote",
          "source": "src/Data-Prednote-Expressions.html#Error",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Prednote Expressions",
          "module": "Data.Prednote.Expressions",
          "name": "Error",
          "package": "prednote",
          "partial": "Error",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs this an infix or RPN expression?\n\u003c/p\u003e",
          "module": "Data.Prednote.Expressions",
          "name": "ExprDesc",
          "package": "prednote",
          "source": "src/Data-Prednote-Expressions.html#ExprDesc",
          "type": "data"
        },
        "index": {
          "description": "Is this an infix or RPN expression",
          "hierarchy": "Data Prednote Expressions",
          "module": "Data.Prednote.Expressions",
          "name": "ExprDesc",
          "package": "prednote",
          "partial": "Expr Desc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions.html#t:ExprDesc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single type for both RPN tokens and infix tokens.\n\u003c/p\u003e",
          "module": "Data.Prednote.Expressions",
          "name": "Token",
          "package": "prednote",
          "source": "src/Data-Prednote-Expressions.html#Token",
          "type": "data"
        },
        "index": {
          "description": "single type for both RPN tokens and infix tokens",
          "hierarchy": "Data Prednote Expressions",
          "module": "Data.Prednote.Expressions",
          "name": "Token",
          "package": "prednote",
          "partial": "Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Expressions",
          "name": "Infix",
          "package": "prednote",
          "signature": "Infix",
          "source": "src/Data-Prednote-Expressions.html#ExprDesc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Expressions",
          "module": "Data.Prednote.Expressions",
          "name": "Infix",
          "package": "prednote",
          "partial": "Infix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions.html#v:Infix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Expressions",
          "name": "RPN",
          "package": "prednote",
          "signature": "RPN",
          "source": "src/Data-Prednote-Expressions.html#ExprDesc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Expressions",
          "module": "Data.Prednote.Expressions",
          "name": "RPN",
          "package": "prednote",
          "partial": "RPN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions.html#v:RPN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose parentheses\n\u003c/p\u003e",
          "module": "Data.Prednote.Expressions",
          "name": "closeParen",
          "package": "prednote",
          "signature": "Token a",
          "source": "src/Data-Prednote-Expressions.html#closeParen",
          "type": "function"
        },
        "index": {
          "description": "Close parentheses",
          "hierarchy": "Data Prednote Expressions",
          "module": "Data.Prednote.Expressions",
          "name": "closeParen",
          "package": "prednote",
          "partial": "Paren",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions.html#v:closeParen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe And operator\n\u003c/p\u003e",
          "module": "Data.Prednote.Expressions",
          "name": "opAnd",
          "package": "prednote",
          "signature": "Token a",
          "source": "src/Data-Prednote-Expressions.html#opAnd",
          "type": "function"
        },
        "index": {
          "description": "The And operator",
          "hierarchy": "Data Prednote Expressions",
          "module": "Data.Prednote.Expressions",
          "name": "opAnd",
          "package": "prednote",
          "partial": "And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions.html#v:opAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Not operator\n\u003c/p\u003e",
          "module": "Data.Prednote.Expressions",
          "name": "opNot",
          "package": "prednote",
          "signature": "Token a",
          "source": "src/Data-Prednote-Expressions.html#opNot",
          "type": "function"
        },
        "index": {
          "description": "The Not operator",
          "hierarchy": "Data Prednote Expressions",
          "module": "Data.Prednote.Expressions",
          "name": "opNot",
          "package": "prednote",
          "partial": "Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions.html#v:opNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Or operator\n\u003c/p\u003e",
          "module": "Data.Prednote.Expressions",
          "name": "opOr",
          "package": "prednote",
          "signature": "Token a",
          "source": "src/Data-Prednote-Expressions.html#opOr",
          "type": "function"
        },
        "index": {
          "description": "The Or operator",
          "hierarchy": "Data Prednote Expressions",
          "module": "Data.Prednote.Expressions",
          "name": "opOr",
          "package": "prednote",
          "partial": "Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions.html#v:opOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen parentheses\n\u003c/p\u003e",
          "module": "Data.Prednote.Expressions",
          "name": "openParen",
          "package": "prednote",
          "signature": "Token a",
          "source": "src/Data-Prednote-Expressions.html#openParen",
          "type": "function"
        },
        "index": {
          "description": "Open parentheses",
          "hierarchy": "Data Prednote Expressions",
          "module": "Data.Prednote.Expressions",
          "name": "openParen",
          "package": "prednote",
          "partial": "Paren",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions.html#v:openParen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates Operands from Predbox.\n\u003c/p\u003e",
          "module": "Data.Prednote.Expressions",
          "name": "operand",
          "package": "prednote",
          "signature": "Predbox a -\u003e Token a",
          "source": "src/Data-Prednote-Expressions.html#operand",
          "type": "function"
        },
        "index": {
          "description": "Creates Operands from Predbox",
          "hierarchy": "Data Prednote Expressions",
          "module": "Data.Prednote.Expressions",
          "name": "operand",
          "normalized": "Predbox a-\u003eToken a",
          "package": "prednote",
          "signature": "Predbox a-\u003eToken a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions.html#v:operand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses expressions. Fails if the expression is nonsensical in\n some way (for example, unbalanced parentheses, parentheses in an\n RPN expression, or multiple stack values remaining.) Works by first\n changing infix expressions to RPN ones.\n\u003c/p\u003e",
          "module": "Data.Prednote.Expressions",
          "name": "parseExpression",
          "package": "prednote",
          "signature": "ExprDesc -\u003e [Token a] -\u003e Either Error (Predbox a)",
          "source": "src/Data-Prednote-Expressions.html#parseExpression",
          "type": "function"
        },
        "index": {
          "description": "Parses expressions Fails if the expression is nonsensical in some way for example unbalanced parentheses parentheses in an RPN expression or multiple stack values remaining Works by first changing infix expressions to RPN ones",
          "hierarchy": "Data Prednote Expressions",
          "module": "Data.Prednote.Expressions",
          "name": "parseExpression",
          "normalized": "ExprDesc-\u003e[Token a]-\u003eEither Error(Predbox a)",
          "package": "prednote",
          "partial": "Expression",
          "signature": "ExprDesc-\u003e[Token a]-\u003eEither Error(Predbox a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions.html#v:parseExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTrees of predicates.\n\u003c/p\u003e\u003cp\u003eExports names which conflict with Prelude names, so you probably\n want to import this module qualified.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "Predbox",
          "package": "prednote",
          "source": "src/Data-Prednote-Predbox.html",
          "type": "module"
        },
        "index": {
          "description": "Trees of predicates Exports names which conflict with Prelude names so you probably want to import this module qualified",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "Predbox",
          "package": "prednote",
          "partial": "Predbox",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines whether a result is shown by default.\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "Hide",
          "package": "prednote",
          "source": "src/Data-Prednote-Predbox.html#Hide",
          "type": "type"
        },
        "index": {
          "description": "Determines whether result is shown by default",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "Hide",
          "package": "prednote",
          "partial": "Hide",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#t:Hide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of spaces to use for each level of indentation.\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "IndentAmt",
          "package": "prednote",
          "source": "src/Data-Prednote-Predbox.html#IndentAmt",
          "type": "type"
        },
        "index": {
          "description": "The number of spaces to use for each level of indentation",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "IndentAmt",
          "package": "prednote",
          "partial": "Indent Amt",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#t:IndentAmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Predbox",
          "name": "Label",
          "package": "prednote",
          "source": "src/Data-Prednote-Predbox.html#Label",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "Label",
          "package": "prednote",
          "partial": "Label",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#t:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow many levels of indentation to use. Typically you will start\n this at zero. It is incremented by one for each level as functions\n descend through the tree.\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "Level",
          "package": "prednote",
          "source": "src/Data-Prednote-Predbox.html#Level",
          "type": "type"
        },
        "index": {
          "description": "How many levels of indentation to use Typically you will start this at zero It is incremented by one for each level as functions descend through the tree",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "Level",
          "package": "prednote",
          "partial": "Level",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#t:Level"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Predbox",
          "name": "Node",
          "package": "prednote",
          "source": "src/Data-Prednote-Predbox.html#Node",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "Node",
          "package": "prednote",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate. Each Predbox contains a tree of Node.\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "Predbox",
          "package": "prednote",
          "source": "src/Data-Prednote-Predbox.html#Predbox",
          "type": "data"
        },
        "index": {
          "description": "predicate Each Predbox contains tree of Node",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "Predbox",
          "package": "prednote",
          "partial": "Predbox",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#t:Predbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Predbox",
          "name": "RNode",
          "package": "prednote",
          "source": "src/Data-Prednote-Predbox.html#RNode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "RNode",
          "package": "prednote",
          "partial": "RNode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#t:RNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result from evaluating a Predbox.\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "Result",
          "package": "prednote",
          "source": "src/Data-Prednote-Predbox.html#Result",
          "type": "data"
        },
        "index": {
          "description": "The result from evaluating Predbox",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "Result",
          "package": "prednote",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Predbox",
          "name": "ShowAll",
          "package": "prednote",
          "source": "src/Data-Prednote-Predbox.html#ShowAll",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "ShowAll",
          "package": "prednote",
          "partial": "Show All",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#t:ShowAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForms a Predbox using \u003ccode\u003e\u003ca\u003eor\u003c/a\u003e\u003c/code\u003e; assigns a generic label.\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "(|||)",
          "package": "prednote",
          "signature": "Predbox a -\u003e Predbox a -\u003e Predbox a",
          "source": "src/Data-Prednote-Predbox.html#%7C%7C%7C",
          "type": "function"
        },
        "index": {
          "description": "Forms Predbox using or assigns generic label",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "(|||) |||",
          "normalized": "Predbox a-\u003ePredbox a-\u003ePredbox a",
          "package": "prednote",
          "signature": "Predbox a-\u003ePredbox a-\u003ePredbox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:-124--124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForms a Predbox using \u003ccode\u003e\u003ca\u003eand\u003c/a\u003e\u003c/code\u003e; assigns a generic label.\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "(&&&)",
          "package": "prednote",
          "signature": "Predbox a -\u003e Predbox a -\u003e Predbox a",
          "source": "src/Data-Prednote-Predbox.html#%26%26%26",
          "type": "function"
        },
        "index": {
          "description": "Forms Predbox using and assigns generic label",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "(&&&) &&&",
          "normalized": "Predbox a-\u003ePredbox a-\u003ePredbox a",
          "package": "prednote",
          "signature": "Predbox a-\u003ePredbox a-\u003ePredbox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:-38--38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConjunction. If any Predbox in the list is False, the result is\n False. If the list is empty, the result is True.\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "And",
          "package": "prednote",
          "signature": "And [Predbox a]",
          "source": "src/Data-Prednote-Predbox.html#Node",
          "type": "function"
        },
        "index": {
          "description": "Conjunction If any Predbox in the list is False the result is False If the list is empty the result is True",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "And",
          "normalized": "And[Predbox a]",
          "package": "prednote",
          "partial": "And",
          "signature": "And[Predbox a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegation\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "Not",
          "package": "prednote",
          "signature": "Not (Predbox a)",
          "source": "src/Data-Prednote-Predbox.html#Node",
          "type": "function"
        },
        "index": {
          "description": "Negation",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "Not",
          "package": "prednote",
          "partial": "Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:Not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisjunction. If at least one Predbox in the list is True, the\n result it True. If the list is empty, the result is False.\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "Or",
          "package": "prednote",
          "signature": "Or [Predbox a]",
          "source": "src/Data-Prednote-Predbox.html#Node",
          "type": "function"
        },
        "index": {
          "description": "Disjunction If at least one Predbox in the list is True the result it True If the list is empty the result is False",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "Or",
          "normalized": "Or[Predbox a]",
          "package": "prednote",
          "partial": "Or",
          "signature": "Or[Predbox a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Predbox",
          "name": "Predbox",
          "package": "prednote",
          "signature": "Predbox",
          "source": "src/Data-Prednote-Predbox.html#Predbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "Predbox",
          "package": "prednote",
          "partial": "Predbox",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:Predbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMost basic building block.\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "Predicate",
          "package": "prednote",
          "signature": "Predicate (a -\u003e Bool)",
          "source": "src/Data-Prednote-Predbox.html#Node",
          "type": "function"
        },
        "index": {
          "description": "Most basic building block",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "Predicate",
          "normalized": "Predicate(a-\u003eBool)",
          "package": "prednote",
          "partial": "Predicate",
          "signature": "Predicate(a-\u003eBool)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:Predicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Predbox",
          "name": "RAnd",
          "package": "prednote",
          "signature": "RAnd [Result]",
          "source": "src/Data-Prednote-Predbox.html#RNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "RAnd",
          "normalized": "RAnd[Result]",
          "package": "prednote",
          "partial": "RAnd",
          "signature": "RAnd[Result]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:RAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Predbox",
          "name": "RNot",
          "package": "prednote",
          "signature": "RNot Result",
          "source": "src/Data-Prednote-Predbox.html#RNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "RNot",
          "package": "prednote",
          "partial": "RNot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:RNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Predbox",
          "name": "ROr",
          "package": "prednote",
          "signature": "ROr [Result]",
          "source": "src/Data-Prednote-Predbox.html#RNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "ROr",
          "normalized": "ROr[Result]",
          "package": "prednote",
          "partial": "ROr",
          "signature": "ROr[Result]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:ROr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Predbox",
          "name": "RPredicate",
          "package": "prednote",
          "signature": "RPredicate Bool",
          "source": "src/Data-Prednote-Predbox.html#RNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "RPredicate",
          "package": "prednote",
          "partial": "RPredicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:RPredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Predbox",
          "name": "Result",
          "package": "prednote",
          "signature": "Result",
          "source": "src/Data-Prednote-Predbox.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "Result",
          "package": "prednote",
          "partial": "Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlways True\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "always",
          "package": "prednote",
          "signature": "Predbox a",
          "source": "src/Data-Prednote-Predbox.html#always",
          "type": "function"
        },
        "index": {
          "description": "Always True",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "always",
          "package": "prednote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:always"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates And Predbox using a generic name\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "and",
          "package": "prednote",
          "signature": "[Predbox a] -\u003e Predbox a",
          "source": "src/Data-Prednote-Predbox.html#and",
          "type": "function"
        },
        "index": {
          "description": "Creates And Predbox using generic name",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "and",
          "normalized": "[Predbox a]-\u003ePredbox a",
          "package": "prednote",
          "signature": "[Predbox a]-\u003ePredbox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOverloaded version of \u003ccode\u003e\u003ca\u003ecompareBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "compare",
          "package": "prednote",
          "signature": "Text-\u003e a-\u003e Ordering-\u003e Predbox a",
          "type": "function"
        },
        "index": {
          "description": "Overloaded version of compareBy",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "compare",
          "normalized": "Text-\u003ea-\u003eOrdering-\u003ePredbox a",
          "package": "prednote",
          "signature": "Text-\u003ea-\u003eOrdering-\u003ePredbox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:compare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a Predbox that compares items.\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "compareBy",
          "package": "prednote",
          "signature": "Text-\u003e Text-\u003e (a -\u003e Ordering)-\u003e Ordering-\u003e Predbox a",
          "type": "function"
        },
        "index": {
          "description": "Build Predbox that compares items",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "compareBy",
          "normalized": "Text-\u003eText-\u003e(a-\u003eOrdering)-\u003eOrdering-\u003ePredbox a",
          "package": "prednote",
          "partial": "By",
          "signature": "Text-\u003eText-\u003e(a-\u003eOrdering)-\u003eOrdering-\u003ePredbox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:compareBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a Predbox for items that might fail to return a comparison.\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "compareByMaybe",
          "package": "prednote",
          "signature": "Text-\u003e Text-\u003e (a -\u003e Maybe Ordering)-\u003e Ordering-\u003e Predbox a",
          "type": "function"
        },
        "index": {
          "description": "Builds Predbox for items that might fail to return comparison",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "compareByMaybe",
          "normalized": "Text-\u003eText-\u003e(a-\u003eMaybe Ordering)-\u003eOrdering-\u003ePredbox a",
          "package": "prednote",
          "partial": "By Maybe",
          "signature": "Text-\u003eText-\u003e(a-\u003eMaybe Ordering)-\u003eOrdering-\u003ePredbox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:compareByMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Predbox",
          "name": "equal",
          "package": "prednote",
          "signature": "Text-\u003e a-\u003e Predbox a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "equal",
          "normalized": "Text-\u003ea-\u003ePredbox a",
          "package": "prednote",
          "signature": "Text-\u003ea-\u003ePredbox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:equal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Predbox",
          "name": "equalBy",
          "package": "prednote",
          "signature": "Text-\u003e Text-\u003e (a -\u003e Ordering)-\u003e Predbox a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "equalBy",
          "normalized": "Text-\u003eText-\u003e(a-\u003eOrdering)-\u003ePredbox a",
          "package": "prednote",
          "partial": "By",
          "signature": "Text-\u003eText-\u003e(a-\u003eOrdering)-\u003ePredbox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:equalBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a Predbox to a particular value, known as the subject.\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "evaluate",
          "package": "prednote",
          "signature": "Predbox a -\u003e a -\u003e Result",
          "source": "src/Data-Prednote-Predbox.html#evaluate",
          "type": "function"
        },
        "index": {
          "description": "Applies Predbox to particular value known as the subject",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "evaluate",
          "normalized": "Predbox a-\u003ea-\u003eResult",
          "package": "prednote",
          "signature": "Predbox a-\u003ea-\u003eResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:evaluate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Predbox",
          "name": "evaluateNode",
          "package": "prednote",
          "signature": "Node a -\u003e a -\u003e RNode",
          "source": "src/Data-Prednote-Predbox.html#evaluateNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "evaluateNode",
          "normalized": "Node a-\u003ea-\u003eRNode",
          "package": "prednote",
          "partial": "Node",
          "signature": "Node a-\u003ea-\u003eRNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:evaluateNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Predbox",
          "name": "filter",
          "package": "prednote",
          "signature": "Predbox a -\u003e [a] -\u003e [a]",
          "source": "src/Data-Prednote-Predbox.html#filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "filter",
          "normalized": "Predbox a-\u003e[a]-\u003e[a]",
          "package": "prednote",
          "signature": "Predbox a-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Predbox",
          "name": "greater",
          "package": "prednote",
          "signature": "Text-\u003e a-\u003e Predbox a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "greater",
          "normalized": "Text-\u003ea-\u003ePredbox a",
          "package": "prednote",
          "signature": "Text-\u003ea-\u003ePredbox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:greater"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Predbox",
          "name": "greaterBy",
          "package": "prednote",
          "signature": "Text-\u003e Text-\u003e (a -\u003e Ordering)-\u003e Predbox a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "greaterBy",
          "normalized": "Text-\u003eText-\u003e(a-\u003eOrdering)-\u003ePredbox a",
          "package": "prednote",
          "partial": "By",
          "signature": "Text-\u003eText-\u003e(a-\u003eOrdering)-\u003ePredbox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:greaterBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Predbox",
          "name": "greaterEq",
          "package": "prednote",
          "signature": "Text-\u003e a-\u003e Predbox a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "greaterEq",
          "normalized": "Text-\u003ea-\u003ePredbox a",
          "package": "prednote",
          "partial": "Eq",
          "signature": "Text-\u003ea-\u003ePredbox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:greaterEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Predbox",
          "name": "greaterEqBy",
          "package": "prednote",
          "signature": "Text-\u003e Text-\u003e (a -\u003e Ordering)-\u003e Predbox a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "greaterEqBy",
          "normalized": "Text-\u003eText-\u003e(a-\u003eOrdering)-\u003ePredbox a",
          "package": "prednote",
          "partial": "Eq By",
          "signature": "Text-\u003eText-\u003e(a-\u003eOrdering)-\u003ePredbox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:greaterEqBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChanges a Predbox so it is always hidden by default.\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "hide",
          "package": "prednote",
          "signature": "Predbox a -\u003e Predbox a",
          "source": "src/Data-Prednote-Predbox.html#hide",
          "type": "function"
        },
        "index": {
          "description": "Changes Predbox so it is always hidden by default",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "hide",
          "normalized": "Predbox a-\u003ePredbox a",
          "package": "prednote",
          "signature": "Predbox a-\u003ePredbox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:hide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChanges a Predbox so that it is hidden if its result is False.\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "hideFalse",
          "package": "prednote",
          "signature": "Predbox a -\u003e Predbox a",
          "source": "src/Data-Prednote-Predbox.html#hideFalse",
          "type": "function"
        },
        "index": {
          "description": "Changes Predbox so that it is hidden if its result is False",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "hideFalse",
          "normalized": "Predbox a-\u003ePredbox a",
          "package": "prednote",
          "partial": "False",
          "signature": "Predbox a-\u003ePredbox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:hideFalse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChanges a Predbox so that it is hidden if its result is True.\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "hideTrue",
          "package": "prednote",
          "signature": "Predbox a -\u003e Predbox a",
          "source": "src/Data-Prednote-Predbox.html#hideTrue",
          "type": "function"
        },
        "index": {
          "description": "Changes Predbox so that it is hidden if its result is True",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "hideTrue",
          "normalized": "Predbox a-\u003ePredbox a",
          "package": "prednote",
          "partial": "True",
          "signature": "Predbox a-\u003ePredbox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:hideTrue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Predbox",
          "name": "less",
          "package": "prednote",
          "signature": "Text-\u003e a-\u003e Predbox a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "less",
          "normalized": "Text-\u003ea-\u003ePredbox a",
          "package": "prednote",
          "signature": "Text-\u003ea-\u003ePredbox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:less"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Predbox",
          "name": "lessBy",
          "package": "prednote",
          "signature": "Text-\u003e Text-\u003e (a -\u003e Ordering)-\u003e Predbox a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "lessBy",
          "normalized": "Text-\u003eText-\u003e(a-\u003eOrdering)-\u003ePredbox a",
          "package": "prednote",
          "partial": "By",
          "signature": "Text-\u003eText-\u003e(a-\u003eOrdering)-\u003ePredbox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:lessBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Predbox",
          "name": "lessEq",
          "package": "prednote",
          "signature": "Text-\u003e a-\u003e Predbox a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "lessEq",
          "normalized": "Text-\u003ea-\u003ePredbox a",
          "package": "prednote",
          "partial": "Eq",
          "signature": "Text-\u003ea-\u003ePredbox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:lessEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Predbox",
          "name": "lessEqBy",
          "package": "prednote",
          "signature": "Text-\u003e Text-\u003e (a -\u003e Ordering)-\u003e Predbox a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "lessEqBy",
          "normalized": "Text-\u003eText-\u003e(a-\u003eOrdering)-\u003ePredbox a",
          "package": "prednote",
          "partial": "Eq By",
          "signature": "Text-\u003eText-\u003e(a-\u003eOrdering)-\u003ePredbox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:lessEqBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlways False\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "never",
          "package": "prednote",
          "signature": "Predbox a",
          "source": "src/Data-Prednote-Predbox.html#never",
          "type": "function"
        },
        "index": {
          "description": "Always False",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "never",
          "package": "prednote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:never"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates Not Predbox using a generic name\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "not",
          "package": "prednote",
          "signature": "Predbox a -\u003e Predbox a",
          "source": "src/Data-Prednote-Predbox.html#not",
          "type": "function"
        },
        "index": {
          "description": "Creates Not Predbox using generic name",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "not",
          "normalized": "Predbox a-\u003ePredbox a",
          "package": "prednote",
          "signature": "Predbox a-\u003ePredbox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Predbox",
          "name": "notEq",
          "package": "prednote",
          "signature": "Text-\u003e a-\u003e Predbox a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "notEq",
          "normalized": "Text-\u003ea-\u003ePredbox a",
          "package": "prednote",
          "partial": "Eq",
          "signature": "Text-\u003ea-\u003ePredbox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:notEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Predbox",
          "name": "notEqBy",
          "package": "prednote",
          "signature": "Text-\u003e Text-\u003e (a -\u003e Ordering)-\u003e Predbox a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "notEqBy",
          "normalized": "Text-\u003eText-\u003e(a-\u003eOrdering)-\u003ePredbox a",
          "package": "prednote",
          "partial": "Eq By",
          "signature": "Text-\u003eText-\u003e(a-\u003eOrdering)-\u003ePredbox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:notEqBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates Or Predbox using a generic name\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "or",
          "package": "prednote",
          "signature": "[Predbox a] -\u003e Predbox a",
          "source": "src/Data-Prednote-Predbox.html#or",
          "type": "function"
        },
        "index": {
          "description": "Creates Or Predbox using generic name",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "or",
          "normalized": "[Predbox a]-\u003ePredbox a",
          "package": "prednote",
          "signature": "[Predbox a]-\u003ePredbox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs results are computed, this function is applied to the\n result. If this function returns False, then this Predbox will not\n be shown by default in the results.\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "pHide",
          "package": "prednote",
          "signature": "Bool -\u003e Hide",
          "source": "src/Data-Prednote-Predbox.html#Predbox",
          "type": "function"
        },
        "index": {
          "description": "As results are computed this function is applied to the result If this function returns False then this Predbox will not be shown by default in the results",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "pHide",
          "normalized": "Bool-\u003eHide",
          "package": "prednote",
          "partial": "Hide",
          "signature": "Bool-\u003eHide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:pHide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel used when showing the results\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "pLabel",
          "package": "prednote",
          "signature": "Label",
          "source": "src/Data-Prednote-Predbox.html#Predbox",
          "type": "function"
        },
        "index": {
          "description": "Label used when showing the results",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "pLabel",
          "package": "prednote",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:pLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Predbox",
          "name": "pNode",
          "package": "prednote",
          "signature": "Node a",
          "source": "src/Data-Prednote-Predbox.html#Predbox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "pNode",
          "package": "prednote",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:pNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a string to find the correct comparer; returns the correct\n function to build a Predbox.\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "parseComparer",
          "package": "prednote",
          "signature": "Text-\u003e (Ordering -\u003e Predbox a)-\u003e Maybe (Predbox a)",
          "type": "function"
        },
        "index": {
          "description": "Parses string to find the correct comparer returns the correct function to build Predbox",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "parseComparer",
          "normalized": "Text-\u003e(Ordering-\u003ePredbox a)-\u003eMaybe(Predbox a)",
          "package": "prednote",
          "partial": "Comparer",
          "signature": "Text-\u003e(Ordering-\u003ePredbox a)-\u003eMaybe(Predbox a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:parseComparer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates and labels predicates.\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "predicate",
          "package": "prednote",
          "signature": "Label -\u003e (a -\u003e Bool) -\u003e Predbox a",
          "source": "src/Data-Prednote-Predbox.html#predicate",
          "type": "function"
        },
        "index": {
          "description": "Creates and labels predicates",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "predicate",
          "normalized": "Label-\u003e(a-\u003eBool)-\u003ePredbox a",
          "package": "prednote",
          "signature": "Label-\u003e(a-\u003eBool)-\u003ePredbox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:predicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe boolean result from evaluating the node. If the node is an\n predicate, this is the result of applying the predicate function to\n the subject. Otherwise, this is the result of application of the\n appropriate boolean operation to the child nodes.\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "rBool",
          "package": "prednote",
          "signature": "Bool",
          "source": "src/Data-Prednote-Predbox.html#Result",
          "type": "function"
        },
        "index": {
          "description": "The boolean result from evaluating the node If the node is an predicate this is the result of applying the predicate function to the subject Otherwise this is the result of application of the appropriate boolean operation to the child nodes",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "rBool",
          "package": "prednote",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:rBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs this result hidden in the result by default? Hiding only\n affects presentation; it does not affect how this Predbox affects\n any parent Predbox.\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "rHide",
          "package": "prednote",
          "signature": "Hide",
          "source": "src/Data-Prednote-Predbox.html#Result",
          "type": "function"
        },
        "index": {
          "description": "Is this result hidden in the result by default Hiding only affects presentation it does not affect how this Predbox affects any parent Predbox",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "rHide",
          "package": "prednote",
          "partial": "Hide",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:rHide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe label from the original Predbox\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "rLabel",
          "package": "prednote",
          "signature": "Label",
          "source": "src/Data-Prednote-Predbox.html#Result",
          "type": "function"
        },
        "index": {
          "description": "The label from the original Predbox",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "rLabel",
          "package": "prednote",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:rLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Predbox",
          "name": "rNode",
          "package": "prednote",
          "signature": "RNode",
          "source": "src/Data-Prednote-Predbox.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "rNode",
          "package": "prednote",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:rNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenames the top level of the Predbox. The function you pass will be\n applied to the old name.\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "rename",
          "package": "prednote",
          "signature": "(Text -\u003e Text) -\u003e Predbox a -\u003e Predbox a",
          "source": "src/Data-Prednote-Predbox.html#rename",
          "type": "function"
        },
        "index": {
          "description": "Renames the top level of the Predbox The function you pass will be applied to the old name",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "rename",
          "normalized": "(Text-\u003eText)-\u003ePredbox a-\u003ePredbox a",
          "package": "prednote",
          "signature": "(Text-\u003eText)-\u003ePredbox a-\u003ePredbox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:rename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChanges a Predbox so it is always shown by default.\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "show",
          "package": "prednote",
          "signature": "Predbox a -\u003e Predbox a",
          "source": "src/Data-Prednote-Predbox.html#show",
          "type": "function"
        },
        "index": {
          "description": "Changes Predbox so it is always shown by default",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "show",
          "normalized": "Predbox a-\u003ePredbox a",
          "package": "prednote",
          "signature": "Predbox a-\u003ePredbox a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:show"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShows a Predbox tree without evaluating it.\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "showPredbox",
          "package": "prednote",
          "signature": "IndentAmt -\u003e Level -\u003e Predbox a -\u003e [Chunk]",
          "source": "src/Data-Prednote-Predbox.html#showPredbox",
          "type": "function"
        },
        "index": {
          "description": "Shows Predbox tree without evaluating it",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "showPredbox",
          "normalized": "IndentAmt-\u003eLevel-\u003ePredbox a-\u003e[Chunk]",
          "package": "prednote",
          "partial": "Predbox",
          "signature": "IndentAmt-\u003eLevel-\u003ePredbox a-\u003e[Chunk]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:showPredbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShows a Result in a pretty way with colors and indentation.\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "showResult",
          "package": "prednote",
          "signature": "IndentAmt-\u003e ShowAll-\u003e Level-\u003e Result-\u003e [Chunk]",
          "type": "function"
        },
        "index": {
          "description": "Shows Result in pretty way with colors and indentation",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "showResult",
          "normalized": "IndentAmt-\u003eShowAll-\u003eLevel-\u003eResult-\u003e[Chunk]",
          "package": "prednote",
          "partial": "Result",
          "signature": "IndentAmt-\u003eShowAll-\u003eLevel-\u003eResult-\u003e[Chunk]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:showResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShows the top of a Result tree and all the child Results. Adds a\n short label at the top of the tree.\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "showTopResult",
          "package": "prednote",
          "signature": "Text-\u003e IndentAmt-\u003e Level-\u003e ShowAll-\u003e Result-\u003e [Chunk]",
          "type": "function"
        },
        "index": {
          "description": "Shows the top of Result tree and all the child Results Adds short label at the top of the tree",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "showTopResult",
          "normalized": "Text-\u003eIndentAmt-\u003eLevel-\u003eShowAll-\u003eResult-\u003e[Chunk]",
          "package": "prednote",
          "partial": "Top Result",
          "signature": "Text-\u003eIndentAmt-\u003eLevel-\u003eShowAll-\u003eResult-\u003e[Chunk]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:showTopResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilters a list. Also returns chunks describing the process.\n\u003c/p\u003e",
          "module": "Data.Prednote.Predbox",
          "name": "verboseFilter",
          "package": "prednote",
          "signature": "(a -\u003e Text)-\u003e IndentAmt-\u003e ShowAll-\u003e Predbox a-\u003e [a]-\u003e ([Chunk], [a])",
          "type": "function"
        },
        "index": {
          "description": "Filters list Also returns chunks describing the process",
          "hierarchy": "Data Prednote Predbox",
          "module": "Data.Prednote.Predbox",
          "name": "verboseFilter",
          "normalized": "(a-\u003eText)-\u003eIndentAmt-\u003eShowAll-\u003ePredbox a-\u003e[a]-\u003e([Chunk],[a])",
          "package": "prednote",
          "partial": "Filter",
          "signature": "(a-\u003eText)-\u003eIndentAmt-\u003eShowAll-\u003ePredbox a-\u003e[a]-\u003e([Chunk],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Predbox.html#v:verboseFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHelps you build tests that run against a series of items.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Prednote.Test",
          "name": "Test",
          "package": "prednote",
          "source": "src/Data-Prednote-Test.html",
          "type": "module"
        },
        "index": {
          "description": "Helps you build tests that run against series of items",
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "Test",
          "package": "prednote",
          "partial": "Test",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this verbosity for subjects that are False\n\u003c/p\u003e",
          "module": "Data.Prednote.Test",
          "name": "FalseVerbosity",
          "package": "prednote",
          "source": "src/Data-Prednote-Test.html#FalseVerbosity",
          "type": "type"
        },
        "index": {
          "description": "Use this verbosity for subjects that are False",
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "FalseVerbosity",
          "package": "prednote",
          "partial": "False Verbosity",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#t:FalseVerbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of a test or of a group.\n\u003c/p\u003e",
          "module": "Data.Prednote.Test",
          "name": "Name",
          "package": "prednote",
          "source": "src/Data-Prednote-Test.html#Name",
          "type": "type"
        },
        "index": {
          "description": "The name of test or of group",
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "Name",
          "package": "prednote",
          "partial": "Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Test",
          "name": "Pass",
          "package": "prednote",
          "source": "src/Data-Prednote-Test.html#Pass",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "Pass",
          "package": "prednote",
          "partial": "Pass",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#t:Pass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single test.\n\u003c/p\u003e",
          "module": "Data.Prednote.Test",
          "name": "Test",
          "package": "prednote",
          "source": "src/Data-Prednote-Test.html#Test",
          "type": "data"
        },
        "index": {
          "description": "single test",
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "Test",
          "package": "prednote",
          "partial": "Test",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#t:Test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Test",
          "name": "TestResult",
          "package": "prednote",
          "source": "src/Data-Prednote-Test.html#TestResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "TestResult",
          "package": "prednote",
          "partial": "Test Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#t:TestResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines which TestVisibility to use for a particular test.\n\u003c/p\u003e",
          "module": "Data.Prednote.Test",
          "name": "TestVerbosity",
          "package": "prednote",
          "source": "src/Data-Prednote-Test.html#TestVerbosity",
          "type": "data"
        },
        "index": {
          "description": "Determines which TestVisibility to use for particular test",
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "TestVerbosity",
          "package": "prednote",
          "partial": "Test Verbosity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#t:TestVerbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines whether to show any of the results from a single test.\n\u003c/p\u003e",
          "module": "Data.Prednote.Test",
          "name": "TestVisibility",
          "package": "prednote",
          "source": "src/Data-Prednote-Test.html#TestVisibility",
          "type": "data"
        },
        "index": {
          "description": "Determines whether to show any of the results from single test",
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "TestVisibility",
          "package": "prednote",
          "partial": "Test Visibility",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#t:TestVisibility"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this verbosity for subjects that are True\n\u003c/p\u003e",
          "module": "Data.Prednote.Test",
          "name": "TrueVerbosity",
          "package": "prednote",
          "source": "src/Data-Prednote-Test.html#TrueVerbosity",
          "type": "type"
        },
        "index": {
          "description": "Use this verbosity for subjects that are True",
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "TrueVerbosity",
          "package": "prednote",
          "partial": "True Verbosity",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#t:TrueVerbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow verbose to be when showing the results of running a Predbox on a\n single subject.\n\u003c/p\u003e",
          "module": "Data.Prednote.Test",
          "name": "Verbosity",
          "package": "prednote",
          "source": "src/Data-Prednote-Test.html#Verbosity",
          "type": "data"
        },
        "index": {
          "description": "How verbose to be when showing the results of running Predbox on single subject",
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "Verbosity",
          "package": "prednote",
          "partial": "Verbosity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#t:Verbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo not show any results from the Predbox\n\u003c/p\u003e",
          "module": "Data.Prednote.Test",
          "name": "HideAll",
          "package": "prednote",
          "signature": "HideAll",
          "source": "src/Data-Prednote-Test.html#Verbosity",
          "type": "function"
        },
        "index": {
          "description": "Do not show any results from the Predbox",
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "HideAll",
          "package": "prednote",
          "partial": "Hide All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:HideAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo not show any results from this test\n\u003c/p\u003e",
          "module": "Data.Prednote.Test",
          "name": "HideTest",
          "package": "prednote",
          "signature": "HideTest",
          "source": "src/Data-Prednote-Test.html#TestVisibility",
          "type": "function"
        },
        "index": {
          "description": "Do not show any results from this test",
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "HideTest",
          "package": "prednote",
          "partial": "Hide Test",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:HideTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow all Result\n\u003c/p\u003e",
          "module": "Data.Prednote.Test",
          "name": "ShowAll",
          "package": "prednote",
          "signature": "ShowAll",
          "source": "src/Data-Prednote-Test.html#Verbosity",
          "type": "function"
        },
        "index": {
          "description": "Show all Result",
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "ShowAll",
          "package": "prednote",
          "partial": "Show All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:ShowAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow results according to the default settings provided in the\n Result itself\n\u003c/p\u003e",
          "module": "Data.Prednote.Test",
          "name": "ShowDefaults",
          "package": "prednote",
          "signature": "ShowDefaults",
          "source": "src/Data-Prednote-Test.html#Verbosity",
          "type": "function"
        },
        "index": {
          "description": "Show results according to the default settings provided in the Result itself",
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "ShowDefaults",
          "package": "prednote",
          "partial": "Show Defaults",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:ShowDefaults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow the first line, which indicates whether the test passed or\n failed and gives the label for the test. Whether to show\n individual subjects is determined by the TrueVerbosity and\n FalseVerbosity.\n\u003c/p\u003e",
          "module": "Data.Prednote.Test",
          "name": "ShowFirstLine",
          "package": "prednote",
          "signature": "ShowFirstLine TrueVerbosity FalseVerbosity",
          "source": "src/Data-Prednote-Test.html#TestVisibility",
          "type": "function"
        },
        "index": {
          "description": "Show the first line which indicates whether the test passed or failed and gives the label for the test Whether to show individual subjects is determined by the TrueVerbosity and FalseVerbosity",
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "ShowFirstLine",
          "package": "prednote",
          "partial": "Show First Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:ShowFirstLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Test",
          "name": "Test",
          "package": "prednote",
          "signature": "Test",
          "source": "src/Data-Prednote-Test.html#Test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "Test",
          "package": "prednote",
          "partial": "Test",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:Test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Test",
          "name": "TestResult",
          "package": "prednote",
          "signature": "TestResult",
          "source": "src/Data-Prednote-Test.html#TestResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "TestResult",
          "package": "prednote",
          "partial": "Test Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:TestResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Test",
          "name": "TestVerbosity",
          "package": "prednote",
          "signature": "TestVerbosity",
          "source": "src/Data-Prednote-Test.html#TestVerbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "TestVerbosity",
          "package": "prednote",
          "partial": "Test Verbosity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:TestVerbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe test passes if each subject returns True.\n\u003c/p\u003e",
          "module": "Data.Prednote.Test",
          "name": "eachSubjectMustBeTrue",
          "package": "prednote",
          "signature": "Predbox a -\u003e Name -\u003e Test a",
          "source": "src/Data-Prednote-Test.html#eachSubjectMustBeTrue",
          "type": "function"
        },
        "index": {
          "description": "The test passes if each subject returns True",
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "eachSubjectMustBeTrue",
          "normalized": "Predbox a-\u003eName-\u003eTest a",
          "package": "prednote",
          "partial": "Subject Must Be True",
          "signature": "Predbox a-\u003eName-\u003eTest a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:eachSubjectMustBeTrue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates a test for a given list of subjects.\n\u003c/p\u003e",
          "module": "Data.Prednote.Test",
          "name": "evalTest",
          "package": "prednote",
          "signature": "Test a -\u003e [a] -\u003e TestResult a",
          "source": "src/Data-Prednote-Test.html#evalTest",
          "type": "function"
        },
        "index": {
          "description": "Evaluates test for given list of subjects",
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "evalTest",
          "normalized": "Test a-\u003e[a]-\u003eTestResult a",
          "package": "prednote",
          "partial": "Test",
          "signature": "Test a-\u003e[a]-\u003eTestResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:evalTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe test passes if at least a given number of subjects are True.\n\u003c/p\u003e",
          "module": "Data.Prednote.Test",
          "name": "nSubjectsMustBeTrue",
          "package": "prednote",
          "signature": "Predbox a-\u003e Name-\u003e Int-\u003e Test a",
          "type": "function"
        },
        "index": {
          "description": "The test passes if at least given number of subjects are True",
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "nSubjectsMustBeTrue",
          "normalized": "Predbox a-\u003eName-\u003eInt-\u003eTest a",
          "package": "prednote",
          "partial": "Subjects Must Be True",
          "signature": "Predbox a-\u003eName-\u003eInt-\u003eTest a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:nSubjectsMustBeTrue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this TestVisibility when the test fails\n\u003c/p\u003e",
          "module": "Data.Prednote.Test",
          "name": "onFail",
          "package": "prednote",
          "signature": "TestVisibility",
          "source": "src/Data-Prednote-Test.html#TestVerbosity",
          "type": "function"
        },
        "index": {
          "description": "Use this TestVisibility when the test fails",
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "onFail",
          "package": "prednote",
          "partial": "Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:onFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse this TestVisibility when the test passes\n\u003c/p\u003e",
          "module": "Data.Prednote.Test",
          "name": "onPass",
          "package": "prednote",
          "signature": "TestVisibility",
          "source": "src/Data-Prednote-Test.html#TestVerbosity",
          "type": "function"
        },
        "index": {
          "description": "Use this TestVisibility when the test passes",
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "onPass",
          "package": "prednote",
          "partial": "Pass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:onPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Test",
          "name": "resultDefaultVerbosity",
          "package": "prednote",
          "signature": "TestVerbosity",
          "source": "src/Data-Prednote-Test.html#TestResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "resultDefaultVerbosity",
          "package": "prednote",
          "partial": "Default Verbosity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:resultDefaultVerbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Test",
          "name": "resultName",
          "package": "prednote",
          "signature": "Name",
          "source": "src/Data-Prednote-Test.html#TestResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "resultName",
          "package": "prednote",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:resultName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Test",
          "name": "resultPass",
          "package": "prednote",
          "signature": "Pass",
          "source": "src/Data-Prednote-Test.html#TestResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "resultPass",
          "package": "prednote",
          "partial": "Pass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:resultPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Test",
          "name": "resultSubjects",
          "package": "prednote",
          "signature": "[(a, Result)]",
          "source": "src/Data-Prednote-Test.html#TestResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "resultSubjects",
          "normalized": "[(a,Result)]",
          "package": "prednote",
          "partial": "Subjects",
          "signature": "[(a,Result)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:resultSubjects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShows a result with indenting.\n\u003c/p\u003e",
          "module": "Data.Prednote.Test",
          "name": "showTestResult",
          "package": "prednote",
          "signature": "IndentAmt-\u003e (a -\u003e Text)-\u003e Maybe TestVerbosity-\u003e TestResult a-\u003e [Chunk]",
          "type": "function"
        },
        "index": {
          "description": "Shows result with indenting",
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "showTestResult",
          "normalized": "IndentAmt-\u003e(a-\u003eText)-\u003eMaybe TestVerbosity-\u003eTestResult a-\u003e[Chunk]",
          "package": "prednote",
          "partial": "Test Result",
          "signature": "IndentAmt-\u003e(a-\u003eText)-\u003eMaybe TestVerbosity-\u003eTestResult a-\u003e[Chunk]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:showTestResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function is applied to each subject.\n\u003c/p\u003e",
          "module": "Data.Prednote.Test",
          "name": "testFunc",
          "package": "prednote",
          "signature": "a -\u003e Result",
          "source": "src/Data-Prednote-Test.html#Test",
          "type": "function"
        },
        "index": {
          "description": "This function is applied to each subject",
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "testFunc",
          "normalized": "a-\u003eResult",
          "package": "prednote",
          "partial": "Func",
          "signature": "a-\u003eResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:testFunc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote.Test",
          "name": "testName",
          "package": "prednote",
          "signature": "Name",
          "source": "src/Data-Prednote-Test.html#Test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "testName",
          "package": "prednote",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:testName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplied to the results of all applications of testFunc;\n determines whether the test passes or fails.\n\u003c/p\u003e",
          "module": "Data.Prednote.Test",
          "name": "testPass",
          "package": "prednote",
          "signature": "[Result] -\u003e Pass",
          "source": "src/Data-Prednote-Test.html#Test",
          "type": "function"
        },
        "index": {
          "description": "Applied to the results of all applications of testFunc determines whether the test passes or fails",
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "testPass",
          "normalized": "[Result]-\u003ePass",
          "package": "prednote",
          "partial": "Pass",
          "signature": "[Result]-\u003ePass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:testPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault verbosity for the test.\n\u003c/p\u003e",
          "module": "Data.Prednote.Test",
          "name": "testVerbosity",
          "package": "prednote",
          "signature": "TestVerbosity",
          "source": "src/Data-Prednote-Test.html#Test",
          "type": "function"
        },
        "index": {
          "description": "Default verbosity for the test",
          "hierarchy": "Data Prednote Test",
          "module": "Data.Prednote.Test",
          "name": "testVerbosity",
          "package": "prednote",
          "partial": "Verbosity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:testVerbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Prednote",
          "name": "Prednote",
          "package": "prednote",
          "source": "src/Data-Prednote.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Prednote",
          "module": "Data.Prednote",
          "name": "Prednote",
          "package": "prednote",
          "partial": "Prednote",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote.html#"
      }
    }
  ]
]