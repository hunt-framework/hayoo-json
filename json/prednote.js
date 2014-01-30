[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-Infix.html#",
      "description": {
        "fct-module": "Data.Prednote.Expressions.Infix",
        "fct-package": "prednote",
        "fct-signature": "module",
        "fct-source": "src/Data-Prednote-Expressions-Infix.html",
        "fct-type": "module",
        "title": "Infix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Expressions Infix",
        "module": "Data.Prednote.Expressions.Infix",
        "name": "Infix",
        "normalized": "",
        "package": "prednote",
        "partial": "Infix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-Infix.html#t:InfixToken",
      "description": {
        "fct-module": "Data.Prednote.Expressions.Infix",
        "fct-package": "prednote",
        "fct-signature": "data",
        "fct-source": "src/Data-Prednote-Expressions-Infix.html#InfixToken",
        "fct-type": "data",
        "title": "InfixToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Expressions Infix",
        "module": "Data.Prednote.Expressions.Infix",
        "name": "InfixToken",
        "normalized": "",
        "package": "prednote",
        "partial": "Infix Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-Infix.html#t:Paren",
      "description": {
        "fct-module": "Data.Prednote.Expressions.Infix",
        "fct-package": "prednote",
        "fct-signature": "data",
        "fct-source": "src/Data-Prednote-Expressions-Infix.html#Paren",
        "fct-type": "data",
        "title": "Paren"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Expressions Infix",
        "module": "Data.Prednote.Expressions.Infix",
        "name": "Paren",
        "normalized": "",
        "package": "prednote",
        "partial": "Paren",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-Infix.html#v:Close",
      "description": {
        "fct-module": "Data.Prednote.Expressions.Infix",
        "fct-package": "prednote",
        "fct-signature": "Close",
        "fct-source": "src/Data-Prednote-Expressions-Infix.html#Paren",
        "fct-type": "function",
        "title": "Close"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Expressions Infix",
        "module": "Data.Prednote.Expressions.Infix",
        "name": "Close",
        "normalized": "",
        "package": "prednote",
        "partial": "Close",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-Infix.html#v:Open",
      "description": {
        "fct-module": "Data.Prednote.Expressions.Infix",
        "fct-package": "prednote",
        "fct-signature": "Open",
        "fct-source": "src/Data-Prednote-Expressions-Infix.html#Paren",
        "fct-type": "function",
        "title": "Open"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Expressions Infix",
        "module": "Data.Prednote.Expressions.Infix",
        "name": "Open",
        "normalized": "",
        "package": "prednote",
        "partial": "Open",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-Infix.html#v:TokParen",
      "description": {
        "fct-module": "Data.Prednote.Expressions.Infix",
        "fct-package": "prednote",
        "fct-signature": "TokParen Paren",
        "fct-source": "src/Data-Prednote-Expressions-Infix.html#InfixToken",
        "fct-type": "function",
        "title": "TokParen"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Expressions Infix",
        "module": "Data.Prednote.Expressions.Infix",
        "name": "TokParen",
        "normalized": "",
        "package": "prednote",
        "partial": "Tok Paren",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-Infix.html#v:TokRPN",
      "description": {
        "fct-module": "Data.Prednote.Expressions.Infix",
        "fct-package": "prednote",
        "fct-signature": "TokRPN (RPNToken a)",
        "fct-source": "src/Data-Prednote-Expressions-Infix.html#InfixToken",
        "fct-type": "function",
        "title": "TokRPN"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Expressions Infix",
        "module": "Data.Prednote.Expressions.Infix",
        "name": "TokRPN",
        "normalized": "",
        "package": "prednote",
        "partial": "Tok RPN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-Infix.html#v:createRPN",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an RPN expression from an infix one. Fails only if there\n are mismatched parentheses. It is possible to create a nonsensical\n RPN expression; the RPN parser must catch this.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Expressions.Infix",
        "fct-package": "prednote",
        "fct-signature": "f (InfixToken a)-\u003e Maybe [RPNToken a]",
        "fct-type": "function",
        "title": "createRPN"
      },
      "index": {
        "description": "Creates an RPN expression from an infix one Fails only if there are mismatched parentheses It is possible to create nonsensical RPN expression the RPN parser must catch this",
        "hierarchy": "Data Prednote Expressions Infix",
        "module": "Data.Prednote.Expressions.Infix",
        "name": "createRPN",
        "normalized": "a(InfixToken b)-\u003eMaybe[RPNToken b]",
        "package": "prednote",
        "partial": "RPN",
        "signature": "f(InfixToken a)-\u003eMaybe[RPNToken a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-RPN.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePostfix, or RPN, expression parsing.\n\u003c/p\u003e\u003cp\u003eThis module parses RPN expressions where the operands are\n predicates and the operators are one of \u003ccode\u003eand\u003c/code\u003e, \u003ccode\u003eor\u003c/code\u003e, or \u003ccode\u003enot\u003c/code\u003e,\n where \u003ccode\u003eand\u003c/code\u003e and \u003ccode\u003eor\u003c/code\u003e are binary and \u003ccode\u003enot\u003c/code\u003e is unary.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Prednote.Expressions.RPN",
        "fct-package": "prednote",
        "fct-signature": "module",
        "fct-source": "src/Data-Prednote-Expressions-RPN.html",
        "fct-type": "module",
        "title": "RPN"
      },
      "index": {
        "description": "Postfix or RPN expression parsing This module parses RPN expressions where the operands are predicates and the operators are one of and or or not where and and or are binary and not is unary",
        "hierarchy": "Data Prednote Expressions RPN",
        "module": "Data.Prednote.Expressions.RPN",
        "name": "RPN",
        "normalized": "",
        "package": "prednote",
        "partial": "RPN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-RPN.html#t:Error",
      "description": {
        "fct-module": "Data.Prednote.Expressions.RPN",
        "fct-package": "prednote",
        "fct-signature": "type",
        "fct-source": "src/Data-Prednote-Expressions-RPN.html#Error",
        "fct-type": "type",
        "title": "Error"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Expressions RPN",
        "module": "Data.Prednote.Expressions.RPN",
        "name": "Error",
        "normalized": "",
        "package": "prednote",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-RPN.html#t:Operator",
      "description": {
        "fct-module": "Data.Prednote.Expressions.RPN",
        "fct-package": "prednote",
        "fct-signature": "data",
        "fct-source": "src/Data-Prednote-Expressions-RPN.html#Operator",
        "fct-type": "data",
        "title": "Operator"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Expressions RPN",
        "module": "Data.Prednote.Expressions.RPN",
        "name": "Operator",
        "normalized": "",
        "package": "prednote",
        "partial": "Operator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-RPN.html#t:RPNToken",
      "description": {
        "fct-module": "Data.Prednote.Expressions.RPN",
        "fct-package": "prednote",
        "fct-signature": "data",
        "fct-source": "src/Data-Prednote-Expressions-RPN.html#RPNToken",
        "fct-type": "data",
        "title": "RPNToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Expressions RPN",
        "module": "Data.Prednote.Expressions.RPN",
        "name": "RPNToken",
        "normalized": "",
        "package": "prednote",
        "partial": "RPNToken",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-RPN.html#v:OpAnd",
      "description": {
        "fct-module": "Data.Prednote.Expressions.RPN",
        "fct-package": "prednote",
        "fct-signature": "OpAnd",
        "fct-source": "src/Data-Prednote-Expressions-RPN.html#Operator",
        "fct-type": "function",
        "title": "OpAnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Expressions RPN",
        "module": "Data.Prednote.Expressions.RPN",
        "name": "OpAnd",
        "normalized": "",
        "package": "prednote",
        "partial": "Op And",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-RPN.html#v:OpNot",
      "description": {
        "fct-module": "Data.Prednote.Expressions.RPN",
        "fct-package": "prednote",
        "fct-signature": "OpNot",
        "fct-source": "src/Data-Prednote-Expressions-RPN.html#Operator",
        "fct-type": "function",
        "title": "OpNot"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Expressions RPN",
        "module": "Data.Prednote.Expressions.RPN",
        "name": "OpNot",
        "normalized": "",
        "package": "prednote",
        "partial": "Op Not",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-RPN.html#v:OpOr",
      "description": {
        "fct-module": "Data.Prednote.Expressions.RPN",
        "fct-package": "prednote",
        "fct-signature": "OpOr",
        "fct-source": "src/Data-Prednote-Expressions-RPN.html#Operator",
        "fct-type": "function",
        "title": "OpOr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Expressions RPN",
        "module": "Data.Prednote.Expressions.RPN",
        "name": "OpOr",
        "normalized": "",
        "package": "prednote",
        "partial": "Op Or",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-RPN.html#v:TokOperand",
      "description": {
        "fct-module": "Data.Prednote.Expressions.RPN",
        "fct-package": "prednote",
        "fct-signature": "TokOperand (Pdct a)",
        "fct-source": "src/Data-Prednote-Expressions-RPN.html#RPNToken",
        "fct-type": "function",
        "title": "TokOperand"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Expressions RPN",
        "module": "Data.Prednote.Expressions.RPN",
        "name": "TokOperand",
        "normalized": "",
        "package": "prednote",
        "partial": "Tok Operand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-RPN.html#v:TokOperator",
      "description": {
        "fct-module": "Data.Prednote.Expressions.RPN",
        "fct-package": "prednote",
        "fct-signature": "TokOperator Operator",
        "fct-source": "src/Data-Prednote-Expressions-RPN.html#RPNToken",
        "fct-type": "function",
        "title": "TokOperator"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Expressions RPN",
        "module": "Data.Prednote.Expressions.RPN",
        "name": "TokOperator",
        "normalized": "",
        "package": "prednote",
        "partial": "Tok Operator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-RPN.html#v:parseRPN",
      "description": {
        "fct-descr": "\u003cp\u003eParses an RPN expression and returns the resulting Pdct. Fails if\n there are no operands left on the stack or if there are multiple\n operands left on the stack; the stack must contain exactly one\n operand in order to succeed.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Expressions.RPN",
        "fct-package": "prednote",
        "fct-signature": "f (RPNToken a) -\u003e Either Error (Pdct a)",
        "fct-source": "src/Data-Prednote-Expressions-RPN.html#parseRPN",
        "fct-type": "function",
        "title": "parseRPN"
      },
      "index": {
        "description": "Parses an RPN expression and returns the resulting Pdct Fails if there are no operands left on the stack or if there are multiple operands left on the stack the stack must contain exactly one operand in order to succeed",
        "hierarchy": "Data Prednote Expressions RPN",
        "module": "Data.Prednote.Expressions.RPN",
        "name": "parseRPN",
        "normalized": "a(RPNToken b)-\u003eEither Error(Pdct b)",
        "package": "prednote",
        "partial": "RPN",
        "signature": "f(RPNToken a)-\u003eEither Error(Pdct a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-RPN.html#v:pushOperand",
      "description": {
        "fct-module": "Data.Prednote.Expressions.RPN",
        "fct-package": "prednote",
        "fct-signature": "Pdct a -\u003e [Pdct a] -\u003e [Pdct a]",
        "fct-source": "src/Data-Prednote-Expressions-RPN.html#pushOperand",
        "fct-type": "function",
        "title": "pushOperand"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Expressions RPN",
        "module": "Data.Prednote.Expressions.RPN",
        "name": "pushOperand",
        "normalized": "Pdct a-\u003e[Pdct a]-\u003e[Pdct a]",
        "package": "prednote",
        "partial": "Operand",
        "signature": "Pdct a-\u003e[Pdct a]-\u003e[Pdct a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-RPN.html#v:pushOperator",
      "description": {
        "fct-module": "Data.Prednote.Expressions.RPN",
        "fct-package": "prednote",
        "fct-signature": "Operator -\u003e [Pdct a] -\u003e Either Error [Pdct a]",
        "fct-source": "src/Data-Prednote-Expressions-RPN.html#pushOperator",
        "fct-type": "function",
        "title": "pushOperator"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Expressions RPN",
        "module": "Data.Prednote.Expressions.RPN",
        "name": "pushOperator",
        "normalized": "Operator-\u003e[Pdct a]-\u003eEither Error[Pdct a]",
        "package": "prednote",
        "partial": "Operator",
        "signature": "Operator-\u003e[Pdct a]-\u003eEither Error[Pdct a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions-RPN.html#v:pushToken",
      "description": {
        "fct-module": "Data.Prednote.Expressions.RPN",
        "fct-package": "prednote",
        "fct-signature": "[Pdct a] -\u003e RPNToken a -\u003e Either Error [Pdct a]",
        "fct-source": "src/Data-Prednote-Expressions-RPN.html#pushToken",
        "fct-type": "function",
        "title": "pushToken"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Expressions RPN",
        "module": "Data.Prednote.Expressions.RPN",
        "name": "pushToken",
        "normalized": "[Pdct a]-\u003eRPNToken a-\u003eEither Error[Pdct a]",
        "package": "prednote",
        "partial": "Token",
        "signature": "[Pdct a]-\u003eRPNToken a-\u003eEither Error[Pdct a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHandles parsing of both infix and RPN Pdct expressions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Prednote.Expressions",
        "fct-package": "prednote",
        "fct-signature": "module",
        "fct-source": "src/Data-Prednote-Expressions.html",
        "fct-type": "module",
        "title": "Expressions"
      },
      "index": {
        "description": "Handles parsing of both infix and RPN Pdct expressions",
        "hierarchy": "Data Prednote Expressions",
        "module": "Data.Prednote.Expressions",
        "name": "Expressions",
        "normalized": "",
        "package": "prednote",
        "partial": "Expressions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions.html#t:Error",
      "description": {
        "fct-module": "Data.Prednote.Expressions",
        "fct-package": "prednote",
        "fct-signature": "type",
        "fct-source": "src/Data-Prednote-Expressions.html#Error",
        "fct-type": "type",
        "title": "Error"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Expressions",
        "module": "Data.Prednote.Expressions",
        "name": "Error",
        "normalized": "",
        "package": "prednote",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions.html#t:ExprDesc",
      "description": {
        "fct-descr": "\u003cp\u003eIs this an infix or RPN expression?\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Expressions",
        "fct-package": "prednote",
        "fct-signature": "data",
        "fct-source": "src/Data-Prednote-Expressions.html#ExprDesc",
        "fct-type": "data",
        "title": "ExprDesc"
      },
      "index": {
        "description": "Is this an infix or RPN expression",
        "hierarchy": "Data Prednote Expressions",
        "module": "Data.Prednote.Expressions",
        "name": "ExprDesc",
        "normalized": "",
        "package": "prednote",
        "partial": "Expr Desc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions.html#t:Token",
      "description": {
        "fct-descr": "\u003cp\u003eA single type for both RPN tokens and infix tokens.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Expressions",
        "fct-package": "prednote",
        "fct-signature": "data",
        "fct-source": "src/Data-Prednote-Expressions.html#Token",
        "fct-type": "data",
        "title": "Token"
      },
      "index": {
        "description": "single type for both RPN tokens and infix tokens",
        "hierarchy": "Data Prednote Expressions",
        "module": "Data.Prednote.Expressions",
        "name": "Token",
        "normalized": "",
        "package": "prednote",
        "partial": "Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions.html#v:Infix",
      "description": {
        "fct-module": "Data.Prednote.Expressions",
        "fct-package": "prednote",
        "fct-signature": "Infix",
        "fct-source": "src/Data-Prednote-Expressions.html#ExprDesc",
        "fct-type": "function",
        "title": "Infix"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Expressions",
        "module": "Data.Prednote.Expressions",
        "name": "Infix",
        "normalized": "",
        "package": "prednote",
        "partial": "Infix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions.html#v:RPN",
      "description": {
        "fct-module": "Data.Prednote.Expressions",
        "fct-package": "prednote",
        "fct-signature": "RPN",
        "fct-source": "src/Data-Prednote-Expressions.html#ExprDesc",
        "fct-type": "function",
        "title": "RPN"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Expressions",
        "module": "Data.Prednote.Expressions",
        "name": "RPN",
        "normalized": "",
        "package": "prednote",
        "partial": "RPN",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions.html#v:closeParen",
      "description": {
        "fct-descr": "\u003cp\u003eClose parentheses\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Expressions",
        "fct-package": "prednote",
        "fct-signature": "Token a",
        "fct-source": "src/Data-Prednote-Expressions.html#closeParen",
        "fct-type": "function",
        "title": "closeParen"
      },
      "index": {
        "description": "Close parentheses",
        "hierarchy": "Data Prednote Expressions",
        "module": "Data.Prednote.Expressions",
        "name": "closeParen",
        "normalized": "",
        "package": "prednote",
        "partial": "Paren",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions.html#v:opAnd",
      "description": {
        "fct-descr": "\u003cp\u003eThe And operator\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Expressions",
        "fct-package": "prednote",
        "fct-signature": "Token a",
        "fct-source": "src/Data-Prednote-Expressions.html#opAnd",
        "fct-type": "function",
        "title": "opAnd"
      },
      "index": {
        "description": "The And operator",
        "hierarchy": "Data Prednote Expressions",
        "module": "Data.Prednote.Expressions",
        "name": "opAnd",
        "normalized": "",
        "package": "prednote",
        "partial": "And",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions.html#v:opNot",
      "description": {
        "fct-descr": "\u003cp\u003eThe Not operator\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Expressions",
        "fct-package": "prednote",
        "fct-signature": "Token a",
        "fct-source": "src/Data-Prednote-Expressions.html#opNot",
        "fct-type": "function",
        "title": "opNot"
      },
      "index": {
        "description": "The Not operator",
        "hierarchy": "Data Prednote Expressions",
        "module": "Data.Prednote.Expressions",
        "name": "opNot",
        "normalized": "",
        "package": "prednote",
        "partial": "Not",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions.html#v:opOr",
      "description": {
        "fct-descr": "\u003cp\u003eThe Or operator\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Expressions",
        "fct-package": "prednote",
        "fct-signature": "Token a",
        "fct-source": "src/Data-Prednote-Expressions.html#opOr",
        "fct-type": "function",
        "title": "opOr"
      },
      "index": {
        "description": "The Or operator",
        "hierarchy": "Data Prednote Expressions",
        "module": "Data.Prednote.Expressions",
        "name": "opOr",
        "normalized": "",
        "package": "prednote",
        "partial": "Or",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions.html#v:openParen",
      "description": {
        "fct-descr": "\u003cp\u003eOpen parentheses\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Expressions",
        "fct-package": "prednote",
        "fct-signature": "Token a",
        "fct-source": "src/Data-Prednote-Expressions.html#openParen",
        "fct-type": "function",
        "title": "openParen"
      },
      "index": {
        "description": "Open parentheses",
        "hierarchy": "Data Prednote Expressions",
        "module": "Data.Prednote.Expressions",
        "name": "openParen",
        "normalized": "",
        "package": "prednote",
        "partial": "Paren",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions.html#v:operand",
      "description": {
        "fct-descr": "\u003cp\u003eCreates Operands from Pdct.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Expressions",
        "fct-package": "prednote",
        "fct-signature": "Pdct a -\u003e Token a",
        "fct-source": "src/Data-Prednote-Expressions.html#operand",
        "fct-type": "function",
        "title": "operand"
      },
      "index": {
        "description": "Creates Operands from Pdct",
        "hierarchy": "Data Prednote Expressions",
        "module": "Data.Prednote.Expressions",
        "name": "operand",
        "normalized": "Pdct a-\u003eToken a",
        "package": "prednote",
        "partial": "",
        "signature": "Pdct a-\u003eToken a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Expressions.html#v:parseExpression",
      "description": {
        "fct-descr": "\u003cp\u003eParses expressions. Fails if the expression is nonsensical in\n some way (for example, unbalanced parentheses, parentheses in an\n RPN expression, or multiple stack values remaining.) Works by first\n changing infix expressions to RPN ones.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Expressions",
        "fct-package": "prednote",
        "fct-signature": "ExprDesc -\u003e [Token a] -\u003e Either Error (Pdct a)",
        "fct-source": "src/Data-Prednote-Expressions.html#parseExpression",
        "fct-type": "function",
        "title": "parseExpression"
      },
      "index": {
        "description": "Parses expressions Fails if the expression is nonsensical in some way for example unbalanced parentheses parentheses in an RPN expression or multiple stack values remaining Works by first changing infix expressions to RPN ones",
        "hierarchy": "Data Prednote Expressions",
        "module": "Data.Prednote.Expressions",
        "name": "parseExpression",
        "normalized": "ExprDesc-\u003e[Token a]-\u003eEither Error(Pdct a)",
        "package": "prednote",
        "partial": "Expression",
        "signature": "ExprDesc-\u003e[Token a]-\u003eEither Error(Pdct a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTrees of predicates.\n\u003c/p\u003e\u003cp\u003eExports names which conflict with Prelude names, so you probably\n want to import this module qualified.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "module",
        "fct-source": "src/Data-Prednote-Pdct.html",
        "fct-type": "module",
        "title": "Pdct"
      },
      "index": {
        "description": "Trees of predicates Exports names which conflict with Prelude names so you probably want to import this module qualified",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "Pdct",
        "normalized": "",
        "package": "prednote",
        "partial": "Pdct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#t:Hide",
      "description": {
        "fct-descr": "\u003cp\u003eDetermines whether a result is shown by default.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "type",
        "fct-source": "src/Data-Prednote-Pdct.html#Hide",
        "fct-type": "type",
        "title": "Hide"
      },
      "index": {
        "description": "Determines whether result is shown by default",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "Hide",
        "normalized": "",
        "package": "prednote",
        "partial": "Hide",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#t:IndentAmt",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of spaces to use for each level of indentation.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "type",
        "fct-source": "src/Data-Prednote-Pdct.html#IndentAmt",
        "fct-type": "type",
        "title": "IndentAmt"
      },
      "index": {
        "description": "The number of spaces to use for each level of indentation",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "IndentAmt",
        "normalized": "",
        "package": "prednote",
        "partial": "Indent Amt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#t:Label",
      "description": {
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "type",
        "fct-source": "src/Data-Prednote-Pdct.html#Label",
        "fct-type": "type",
        "title": "Label"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "Label",
        "normalized": "",
        "package": "prednote",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#t:Level",
      "description": {
        "fct-descr": "\u003cp\u003eHow many levels of indentation to use. Typically you will start\n this at zero. It is incremented by one for each level as functions\n descend through the tree.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "type",
        "fct-source": "src/Data-Prednote-Pdct.html#Level",
        "fct-type": "type",
        "title": "Level"
      },
      "index": {
        "description": "How many levels of indentation to use Typically you will start this at zero It is incremented by one for each level as functions descend through the tree",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "Level",
        "normalized": "",
        "package": "prednote",
        "partial": "Level",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#t:Node",
      "description": {
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "data",
        "fct-source": "src/Data-Prednote-Pdct.html#Node",
        "fct-type": "data",
        "title": "Node"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "Node",
        "normalized": "",
        "package": "prednote",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#t:Pdct",
      "description": {
        "fct-descr": "\u003cp\u003eA predicate. Each Pdct contains a tree of Node.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "data",
        "fct-source": "src/Data-Prednote-Pdct.html#Pdct",
        "fct-type": "data",
        "title": "Pdct"
      },
      "index": {
        "description": "predicate Each Pdct contains tree of Node",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "Pdct",
        "normalized": "",
        "package": "prednote",
        "partial": "Pdct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#t:RNode",
      "description": {
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "data",
        "fct-source": "src/Data-Prednote-Pdct.html#RNode",
        "fct-type": "data",
        "title": "RNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "RNode",
        "normalized": "",
        "package": "prednote",
        "partial": "RNode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003eThe result from evaluating a Pdct.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "data",
        "fct-source": "src/Data-Prednote-Pdct.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "The result from evaluating Pdct",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "Result",
        "normalized": "",
        "package": "prednote",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#t:ShowAll",
      "description": {
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "type",
        "fct-source": "src/Data-Prednote-Pdct.html#ShowAll",
        "fct-type": "type",
        "title": "ShowAll"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "ShowAll",
        "normalized": "",
        "package": "prednote",
        "partial": "Show All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:-124--124--124-",
      "description": {
        "fct-descr": "\u003cp\u003eForms a Pdct using \u003ccode\u003e\u003ca\u003eor\u003c/a\u003e\u003c/code\u003e; assigns a generic label.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Pdct a -\u003e Pdct a -\u003e Pdct a",
        "fct-source": "src/Data-Prednote-Pdct.html#%7C%7C%7C",
        "fct-type": "function",
        "title": "(|||)"
      },
      "index": {
        "description": "Forms Pdct using or assigns generic label",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "(|||) |||",
        "normalized": "Pdct a-\u003ePdct a-\u003ePdct a",
        "package": "prednote",
        "partial": "",
        "signature": "Pdct a-\u003ePdct a-\u003ePdct a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:-38--38--38-",
      "description": {
        "fct-descr": "\u003cp\u003eForms a Pdct using \u003ccode\u003e\u003ca\u003eand\u003c/a\u003e\u003c/code\u003e; assigns a generic label.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Pdct a -\u003e Pdct a -\u003e Pdct a",
        "fct-source": "src/Data-Prednote-Pdct.html#%26%26%26",
        "fct-type": "function",
        "title": "(&&&)"
      },
      "index": {
        "description": "Forms Pdct using and assigns generic label",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "(&&&) &&&",
        "normalized": "Pdct a-\u003ePdct a-\u003ePdct a",
        "package": "prednote",
        "partial": "",
        "signature": "Pdct a-\u003ePdct a-\u003ePdct a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:And",
      "description": {
        "fct-descr": "\u003cp\u003eConjunction. If any Pdct in the list is False, the result is\n False. If the list is empty, the result is True.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "And [Pdct a]",
        "fct-source": "src/Data-Prednote-Pdct.html#Node",
        "fct-type": "function",
        "title": "And"
      },
      "index": {
        "description": "Conjunction If any Pdct in the list is False the result is False If the list is empty the result is True",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "And",
        "normalized": "And[Pdct a]",
        "package": "prednote",
        "partial": "And",
        "signature": "And[Pdct a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:Not",
      "description": {
        "fct-descr": "\u003cp\u003eNegation\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Not (Pdct a)",
        "fct-source": "src/Data-Prednote-Pdct.html#Node",
        "fct-type": "function",
        "title": "Not"
      },
      "index": {
        "description": "Negation",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "Not",
        "normalized": "",
        "package": "prednote",
        "partial": "Not",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:Operand",
      "description": {
        "fct-descr": "\u003cp\u003eMost basic building block.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Operand (a -\u003e Bool)",
        "fct-source": "src/Data-Prednote-Pdct.html#Node",
        "fct-type": "function",
        "title": "Operand"
      },
      "index": {
        "description": "Most basic building block",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "Operand",
        "normalized": "Operand(a-\u003eBool)",
        "package": "prednote",
        "partial": "Operand",
        "signature": "Operand(a-\u003eBool)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:Or",
      "description": {
        "fct-descr": "\u003cp\u003eDisjunction. If at least one Pdct in the list is True, the\n result it True. If the list is empty, the result is False.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Or [Pdct a]",
        "fct-source": "src/Data-Prednote-Pdct.html#Node",
        "fct-type": "function",
        "title": "Or"
      },
      "index": {
        "description": "Disjunction If at least one Pdct in the list is True the result it True If the list is empty the result is False",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "Or",
        "normalized": "Or[Pdct a]",
        "package": "prednote",
        "partial": "Or",
        "signature": "Or[Pdct a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:Pdct",
      "description": {
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Pdct",
        "fct-source": "src/Data-Prednote-Pdct.html#Pdct",
        "fct-type": "function",
        "title": "Pdct"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "Pdct",
        "normalized": "",
        "package": "prednote",
        "partial": "Pdct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:RAnd",
      "description": {
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "RAnd [Result]",
        "fct-source": "src/Data-Prednote-Pdct.html#RNode",
        "fct-type": "function",
        "title": "RAnd"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "RAnd",
        "normalized": "RAnd[Result]",
        "package": "prednote",
        "partial": "RAnd",
        "signature": "RAnd[Result]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:RNot",
      "description": {
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "RNot Result",
        "fct-source": "src/Data-Prednote-Pdct.html#RNode",
        "fct-type": "function",
        "title": "RNot"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "RNot",
        "normalized": "",
        "package": "prednote",
        "partial": "RNot",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:ROperand",
      "description": {
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "ROperand Bool",
        "fct-source": "src/Data-Prednote-Pdct.html#RNode",
        "fct-type": "function",
        "title": "ROperand"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "ROperand",
        "normalized": "",
        "package": "prednote",
        "partial": "ROperand",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:ROr",
      "description": {
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "ROr [Result]",
        "fct-source": "src/Data-Prednote-Pdct.html#RNode",
        "fct-type": "function",
        "title": "ROr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "ROr",
        "normalized": "ROr[Result]",
        "package": "prednote",
        "partial": "ROr",
        "signature": "ROr[Result]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:Result",
      "description": {
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Result",
        "fct-source": "src/Data-Prednote-Pdct.html#Result",
        "fct-type": "function",
        "title": "Result"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "Result",
        "normalized": "",
        "package": "prednote",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:always",
      "description": {
        "fct-descr": "\u003cp\u003eAlways True\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Pdct a",
        "fct-source": "src/Data-Prednote-Pdct.html#always",
        "fct-type": "function",
        "title": "always"
      },
      "index": {
        "description": "Always True",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "always",
        "normalized": "",
        "package": "prednote",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:and",
      "description": {
        "fct-descr": "\u003cp\u003eCreates And Pdct using a generic name\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "[Pdct a] -\u003e Pdct a",
        "fct-source": "src/Data-Prednote-Pdct.html#and",
        "fct-type": "function",
        "title": "and"
      },
      "index": {
        "description": "Creates And Pdct using generic name",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "and",
        "normalized": "[Pdct a]-\u003ePdct a",
        "package": "prednote",
        "partial": "",
        "signature": "[Pdct a]-\u003ePdct a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:boxNode",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a function that un-boxes values of type b, changes a Node\n from type a to type b.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "(b -\u003e a) -\u003e Node a -\u003e Node b",
        "fct-source": "src/Data-Prednote-Pdct.html#boxNode",
        "fct-type": "function",
        "title": "boxNode"
      },
      "index": {
        "description": "Given function that un-boxes values of type changes Node from type to type",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "boxNode",
        "normalized": "(a-\u003eb)-\u003eNode b-\u003eNode a",
        "package": "prednote",
        "partial": "Node",
        "signature": "(b-\u003ea)-\u003eNode a-\u003eNode b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:boxPdct",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a function that un-boxes values of type b, changes a Pdct\n from type a to type b.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "(b -\u003e a) -\u003e Pdct a -\u003e Pdct b",
        "fct-source": "src/Data-Prednote-Pdct.html#boxPdct",
        "fct-type": "function",
        "title": "boxPdct"
      },
      "index": {
        "description": "Given function that un-boxes values of type changes Pdct from type to type",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "boxPdct",
        "normalized": "(a-\u003eb)-\u003ePdct b-\u003ePdct a",
        "package": "prednote",
        "partial": "Pdct",
        "signature": "(b-\u003ea)-\u003ePdct a-\u003ePdct b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:compare",
      "description": {
        "fct-descr": "\u003cp\u003eOverloaded version of \u003ccode\u003e\u003ca\u003ecompareBy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Text-\u003e a-\u003e Ordering-\u003e Pdct a",
        "fct-type": "function",
        "title": "compare"
      },
      "index": {
        "description": "Overloaded version of compareBy",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "compare",
        "normalized": "Text-\u003ea-\u003eOrdering-\u003ePdct a",
        "package": "prednote",
        "partial": "",
        "signature": "Text-\u003ea-\u003eOrdering-\u003ePdct a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:compareBy",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a Pdct that compares items.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Text-\u003e Text-\u003e (a -\u003e Ordering)-\u003e Ordering-\u003e Pdct a",
        "fct-type": "function",
        "title": "compareBy"
      },
      "index": {
        "description": "Build Pdct that compares items",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "compareBy",
        "normalized": "Text-\u003eText-\u003e(a-\u003eOrdering)-\u003eOrdering-\u003ePdct a",
        "package": "prednote",
        "partial": "By",
        "signature": "Text-\u003eText-\u003e(a-\u003eOrdering)-\u003eOrdering-\u003ePdct a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:compareByMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eBuilds a Pdct for items that might fail to return a comparison.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Text-\u003e Text-\u003e (a -\u003e Maybe Ordering)-\u003e Ordering-\u003e Pdct a",
        "fct-type": "function",
        "title": "compareByMaybe"
      },
      "index": {
        "description": "Builds Pdct for items that might fail to return comparison",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "compareByMaybe",
        "normalized": "Text-\u003eText-\u003e(a-\u003eMaybe Ordering)-\u003eOrdering-\u003ePdct a",
        "package": "prednote",
        "partial": "By Maybe",
        "signature": "Text-\u003eText-\u003e(a-\u003eMaybe Ordering)-\u003eOrdering-\u003ePdct a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:equal",
      "description": {
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Text-\u003e a-\u003e Pdct a",
        "fct-type": "function",
        "title": "equal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "equal",
        "normalized": "Text-\u003ea-\u003ePdct a",
        "package": "prednote",
        "partial": "",
        "signature": "Text-\u003ea-\u003ePdct a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:equalBy",
      "description": {
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Text-\u003e Text-\u003e (a -\u003e Ordering)-\u003e Pdct a",
        "fct-type": "function",
        "title": "equalBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "equalBy",
        "normalized": "Text-\u003eText-\u003e(a-\u003eOrdering)-\u003ePdct a",
        "package": "prednote",
        "partial": "By",
        "signature": "Text-\u003eText-\u003e(a-\u003eOrdering)-\u003ePdct a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:evaluate",
      "description": {
        "fct-descr": "\u003cp\u003eApplies a Pdct to a particular value, known as the subject.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "a -\u003e Pdct a -\u003e Result",
        "fct-source": "src/Data-Prednote-Pdct.html#evaluate",
        "fct-type": "function",
        "title": "evaluate"
      },
      "index": {
        "description": "Applies Pdct to particular value known as the subject",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "evaluate",
        "normalized": "a-\u003ePdct a-\u003eResult",
        "package": "prednote",
        "partial": "",
        "signature": "a-\u003ePdct a-\u003eResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:evaluateNode",
      "description": {
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "a -\u003e Node a -\u003e RNode",
        "fct-source": "src/Data-Prednote-Pdct.html#evaluateNode",
        "fct-type": "function",
        "title": "evaluateNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "evaluateNode",
        "normalized": "a-\u003eNode a-\u003eRNode",
        "package": "prednote",
        "partial": "Node",
        "signature": "a-\u003eNode a-\u003eRNode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:filter",
      "description": {
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Pdct a -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-Prednote-Pdct.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "filter",
        "normalized": "Pdct a-\u003e[a]-\u003e[a]",
        "package": "prednote",
        "partial": "",
        "signature": "Pdct a-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:greater",
      "description": {
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Text-\u003e a-\u003e Pdct a",
        "fct-type": "function",
        "title": "greater"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "greater",
        "normalized": "Text-\u003ea-\u003ePdct a",
        "package": "prednote",
        "partial": "",
        "signature": "Text-\u003ea-\u003ePdct a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:greaterBy",
      "description": {
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Text-\u003e Text-\u003e (a -\u003e Ordering)-\u003e Pdct a",
        "fct-type": "function",
        "title": "greaterBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "greaterBy",
        "normalized": "Text-\u003eText-\u003e(a-\u003eOrdering)-\u003ePdct a",
        "package": "prednote",
        "partial": "By",
        "signature": "Text-\u003eText-\u003e(a-\u003eOrdering)-\u003ePdct a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:greaterEq",
      "description": {
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Text-\u003e a-\u003e Pdct a",
        "fct-type": "function",
        "title": "greaterEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "greaterEq",
        "normalized": "Text-\u003ea-\u003ePdct a",
        "package": "prednote",
        "partial": "Eq",
        "signature": "Text-\u003ea-\u003ePdct a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:greaterEqBy",
      "description": {
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Text-\u003e Text-\u003e (a -\u003e Ordering)-\u003e Pdct a",
        "fct-type": "function",
        "title": "greaterEqBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "greaterEqBy",
        "normalized": "Text-\u003eText-\u003e(a-\u003eOrdering)-\u003ePdct a",
        "package": "prednote",
        "partial": "Eq By",
        "signature": "Text-\u003eText-\u003e(a-\u003eOrdering)-\u003ePdct a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:hide",
      "description": {
        "fct-descr": "\u003cp\u003eChanges a Pdct so it is always hidden by default.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Pdct a -\u003e Pdct a",
        "fct-source": "src/Data-Prednote-Pdct.html#hide",
        "fct-type": "function",
        "title": "hide"
      },
      "index": {
        "description": "Changes Pdct so it is always hidden by default",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "hide",
        "normalized": "Pdct a-\u003ePdct a",
        "package": "prednote",
        "partial": "",
        "signature": "Pdct a-\u003ePdct a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:hideFalse",
      "description": {
        "fct-descr": "\u003cp\u003eChanges a Pdct so that it is hidden if its result is False.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Pdct a -\u003e Pdct a",
        "fct-source": "src/Data-Prednote-Pdct.html#hideFalse",
        "fct-type": "function",
        "title": "hideFalse"
      },
      "index": {
        "description": "Changes Pdct so that it is hidden if its result is False",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "hideFalse",
        "normalized": "Pdct a-\u003ePdct a",
        "package": "prednote",
        "partial": "False",
        "signature": "Pdct a-\u003ePdct a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:hideTrue",
      "description": {
        "fct-descr": "\u003cp\u003eChanges a Pdct so that it is hidden if its result is True.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Pdct a -\u003e Pdct a",
        "fct-source": "src/Data-Prednote-Pdct.html#hideTrue",
        "fct-type": "function",
        "title": "hideTrue"
      },
      "index": {
        "description": "Changes Pdct so that it is hidden if its result is True",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "hideTrue",
        "normalized": "Pdct a-\u003ePdct a",
        "package": "prednote",
        "partial": "True",
        "signature": "Pdct a-\u003ePdct a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:less",
      "description": {
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Text-\u003e a-\u003e Pdct a",
        "fct-type": "function",
        "title": "less"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "less",
        "normalized": "Text-\u003ea-\u003ePdct a",
        "package": "prednote",
        "partial": "",
        "signature": "Text-\u003ea-\u003ePdct a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:lessBy",
      "description": {
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Text-\u003e Text-\u003e (a -\u003e Ordering)-\u003e Pdct a",
        "fct-type": "function",
        "title": "lessBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "lessBy",
        "normalized": "Text-\u003eText-\u003e(a-\u003eOrdering)-\u003ePdct a",
        "package": "prednote",
        "partial": "By",
        "signature": "Text-\u003eText-\u003e(a-\u003eOrdering)-\u003ePdct a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:lessEq",
      "description": {
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Text-\u003e a-\u003e Pdct a",
        "fct-type": "function",
        "title": "lessEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "lessEq",
        "normalized": "Text-\u003ea-\u003ePdct a",
        "package": "prednote",
        "partial": "Eq",
        "signature": "Text-\u003ea-\u003ePdct a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:lessEqBy",
      "description": {
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Text-\u003e Text-\u003e (a -\u003e Ordering)-\u003e Pdct a",
        "fct-type": "function",
        "title": "lessEqBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "lessEqBy",
        "normalized": "Text-\u003eText-\u003e(a-\u003eOrdering)-\u003ePdct a",
        "package": "prednote",
        "partial": "Eq By",
        "signature": "Text-\u003eText-\u003e(a-\u003eOrdering)-\u003ePdct a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:never",
      "description": {
        "fct-descr": "\u003cp\u003eAlways False\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Pdct a",
        "fct-source": "src/Data-Prednote-Pdct.html#never",
        "fct-type": "function",
        "title": "never"
      },
      "index": {
        "description": "Always False",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "never",
        "normalized": "",
        "package": "prednote",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:not",
      "description": {
        "fct-descr": "\u003cp\u003eCreates Not Pdct using a generic name\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Pdct a -\u003e Pdct a",
        "fct-source": "src/Data-Prednote-Pdct.html#not",
        "fct-type": "function",
        "title": "not"
      },
      "index": {
        "description": "Creates Not Pdct using generic name",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "not",
        "normalized": "Pdct a-\u003ePdct a",
        "package": "prednote",
        "partial": "",
        "signature": "Pdct a-\u003ePdct a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:notEq",
      "description": {
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Text-\u003e a-\u003e Pdct a",
        "fct-type": "function",
        "title": "notEq"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "notEq",
        "normalized": "Text-\u003ea-\u003ePdct a",
        "package": "prednote",
        "partial": "Eq",
        "signature": "Text-\u003ea-\u003ePdct a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:notEqBy",
      "description": {
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Text-\u003e Text-\u003e (a -\u003e Ordering)-\u003e Pdct a",
        "fct-type": "function",
        "title": "notEqBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "notEqBy",
        "normalized": "Text-\u003eText-\u003e(a-\u003eOrdering)-\u003ePdct a",
        "package": "prednote",
        "partial": "Eq By",
        "signature": "Text-\u003eText-\u003e(a-\u003eOrdering)-\u003ePdct a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:operand",
      "description": {
        "fct-descr": "\u003cp\u003eCreates and labels operands.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Label -\u003e (a -\u003e Bool) -\u003e Pdct a",
        "fct-source": "src/Data-Prednote-Pdct.html#operand",
        "fct-type": "function",
        "title": "operand"
      },
      "index": {
        "description": "Creates and labels operands",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "operand",
        "normalized": "Label-\u003e(a-\u003eBool)-\u003ePdct a",
        "package": "prednote",
        "partial": "",
        "signature": "Label-\u003e(a-\u003eBool)-\u003ePdct a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:or",
      "description": {
        "fct-descr": "\u003cp\u003eCreates Or Pdct using a generic name\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "[Pdct a] -\u003e Pdct a",
        "fct-source": "src/Data-Prednote-Pdct.html#or",
        "fct-type": "function",
        "title": "or"
      },
      "index": {
        "description": "Creates Or Pdct using generic name",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "or",
        "normalized": "[Pdct a]-\u003ePdct a",
        "package": "prednote",
        "partial": "",
        "signature": "[Pdct a]-\u003ePdct a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:pHide",
      "description": {
        "fct-descr": "\u003cp\u003eAs results are computed, this function is applied to the\n result. If this function returns False, then this Pdct will not\n be shown by default in the results.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Bool -\u003e Hide",
        "fct-source": "src/Data-Prednote-Pdct.html#Pdct",
        "fct-type": "function",
        "title": "pHide"
      },
      "index": {
        "description": "As results are computed this function is applied to the result If this function returns False then this Pdct will not be shown by default in the results",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "pHide",
        "normalized": "Bool-\u003eHide",
        "package": "prednote",
        "partial": "Hide",
        "signature": "Bool-\u003eHide"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:pLabel",
      "description": {
        "fct-descr": "\u003cp\u003eLabel used when showing the results\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Label",
        "fct-source": "src/Data-Prednote-Pdct.html#Pdct",
        "fct-type": "function",
        "title": "pLabel"
      },
      "index": {
        "description": "Label used when showing the results",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "pLabel",
        "normalized": "",
        "package": "prednote",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:pNode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Node a",
        "fct-source": "src/Data-Prednote-Pdct.html#Pdct",
        "fct-type": "function",
        "title": "pNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "pNode",
        "normalized": "",
        "package": "prednote",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:parseComparer",
      "description": {
        "fct-descr": "\u003cp\u003eParses a string to find the correct comparer; returns the correct\n function to build a Pdct.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Text-\u003e (Ordering -\u003e Pdct a)-\u003e Maybe (Pdct a)",
        "fct-type": "function",
        "title": "parseComparer"
      },
      "index": {
        "description": "Parses string to find the correct comparer returns the correct function to build Pdct",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "parseComparer",
        "normalized": "Text-\u003e(Ordering-\u003ePdct a)-\u003eMaybe(Pdct a)",
        "package": "prednote",
        "partial": "Comparer",
        "signature": "Text-\u003e(Ordering-\u003ePdct a)-\u003eMaybe(Pdct a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:rBool",
      "description": {
        "fct-descr": "\u003cp\u003eThe boolean result from evaluating the node. If the node is an\n operand, this is the result of applying the operand function to\n the subject. Otherwise, this is the result of application of the\n appropriate boolean operation to the child nodes.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Bool",
        "fct-source": "src/Data-Prednote-Pdct.html#Result",
        "fct-type": "function",
        "title": "rBool"
      },
      "index": {
        "description": "The boolean result from evaluating the node If the node is an operand this is the result of applying the operand function to the subject Otherwise this is the result of application of the appropriate boolean operation to the child nodes",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "rBool",
        "normalized": "",
        "package": "prednote",
        "partial": "Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:rHide",
      "description": {
        "fct-descr": "\u003cp\u003eIs this result hidden in the result by default? Hiding only\n affects presentation; it does not affect how this Pdct affects\n any parent Pdct.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Hide",
        "fct-source": "src/Data-Prednote-Pdct.html#Result",
        "fct-type": "function",
        "title": "rHide"
      },
      "index": {
        "description": "Is this result hidden in the result by default Hiding only affects presentation it does not affect how this Pdct affects any parent Pdct",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "rHide",
        "normalized": "",
        "package": "prednote",
        "partial": "Hide",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:rLabel",
      "description": {
        "fct-descr": "\u003cp\u003eThe label from the original Pdct\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Label",
        "fct-source": "src/Data-Prednote-Pdct.html#Result",
        "fct-type": "function",
        "title": "rLabel"
      },
      "index": {
        "description": "The label from the original Pdct",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "rLabel",
        "normalized": "",
        "package": "prednote",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:rNode",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "RNode",
        "fct-source": "src/Data-Prednote-Pdct.html#Result",
        "fct-type": "function",
        "title": "rNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "rNode",
        "normalized": "",
        "package": "prednote",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:rename",
      "description": {
        "fct-descr": "\u003cp\u003eRenames the top level of the Pdct. The function you pass will be\n applied to the old name.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "(Text -\u003e Text) -\u003e Pdct a -\u003e Pdct a",
        "fct-source": "src/Data-Prednote-Pdct.html#rename",
        "fct-type": "function",
        "title": "rename"
      },
      "index": {
        "description": "Renames the top level of the Pdct The function you pass will be applied to the old name",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "rename",
        "normalized": "(Text-\u003eText)-\u003ePdct a-\u003ePdct a",
        "package": "prednote",
        "partial": "",
        "signature": "(Text-\u003eText)-\u003ePdct a-\u003ePdct a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:show",
      "description": {
        "fct-descr": "\u003cp\u003eChanges a Pdct so it is always shown by default.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Pdct a -\u003e Pdct a",
        "fct-source": "src/Data-Prednote-Pdct.html#show",
        "fct-type": "function",
        "title": "show"
      },
      "index": {
        "description": "Changes Pdct so it is always shown by default",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "show",
        "normalized": "Pdct a-\u003ePdct a",
        "package": "prednote",
        "partial": "",
        "signature": "Pdct a-\u003ePdct a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:showPdct",
      "description": {
        "fct-descr": "\u003cp\u003eShows a Pdct tree without evaluating it.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "IndentAmt -\u003e Level -\u003e Pdct a -\u003e [Chunk]",
        "fct-source": "src/Data-Prednote-Pdct.html#showPdct",
        "fct-type": "function",
        "title": "showPdct"
      },
      "index": {
        "description": "Shows Pdct tree without evaluating it",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "showPdct",
        "normalized": "IndentAmt-\u003eLevel-\u003ePdct a-\u003e[Chunk]",
        "package": "prednote",
        "partial": "Pdct",
        "signature": "IndentAmt-\u003eLevel-\u003ePdct a-\u003e[Chunk]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:showResult",
      "description": {
        "fct-descr": "\u003cp\u003eShows a Result in a pretty way with colors and indentation.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "IndentAmt-\u003e ShowAll-\u003e Level-\u003e Result-\u003e [Chunk]",
        "fct-type": "function",
        "title": "showResult"
      },
      "index": {
        "description": "Shows Result in pretty way with colors and indentation",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "showResult",
        "normalized": "IndentAmt-\u003eShowAll-\u003eLevel-\u003eResult-\u003e[Chunk]",
        "package": "prednote",
        "partial": "Result",
        "signature": "IndentAmt-\u003eShowAll-\u003eLevel-\u003eResult-\u003e[Chunk]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:showTopResult",
      "description": {
        "fct-descr": "\u003cp\u003eShows the top of a Result tree and all the child Results. Adds a\n short label at the top of the tree.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "Text-\u003e IndentAmt-\u003e Level-\u003e ShowAll-\u003e Result-\u003e [Chunk]",
        "fct-type": "function",
        "title": "showTopResult"
      },
      "index": {
        "description": "Shows the top of Result tree and all the child Results Adds short label at the top of the tree",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "showTopResult",
        "normalized": "Text-\u003eIndentAmt-\u003eLevel-\u003eShowAll-\u003eResult-\u003e[Chunk]",
        "package": "prednote",
        "partial": "Top Result",
        "signature": "Text-\u003eIndentAmt-\u003eLevel-\u003eShowAll-\u003eResult-\u003e[Chunk]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Pdct.html#v:verboseFilter",
      "description": {
        "fct-descr": "\u003cp\u003eFilters a list. Also returns chunks describing the process.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Pdct",
        "fct-package": "prednote",
        "fct-signature": "(a -\u003e Text)-\u003e IndentAmt-\u003e ShowAll-\u003e Pdct a-\u003e [a]-\u003e ([Chunk], [a])",
        "fct-type": "function",
        "title": "verboseFilter"
      },
      "index": {
        "description": "Filters list Also returns chunks describing the process",
        "hierarchy": "Data Prednote Pdct",
        "module": "Data.Prednote.Pdct",
        "name": "verboseFilter",
        "normalized": "(a-\u003eText)-\u003eIndentAmt-\u003eShowAll-\u003ePdct a-\u003e[a]-\u003e([Chunk],[a])",
        "package": "prednote",
        "partial": "Filter",
        "signature": "(a-\u003eText)-\u003eIndentAmt-\u003eShowAll-\u003ePdct a-\u003e[a]-\u003e([Chunk],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHelps you build tests that run against a series of items.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "module",
        "fct-source": "src/Data-Prednote-Test.html",
        "fct-type": "module",
        "title": "Test"
      },
      "index": {
        "description": "Helps you build tests that run against series of items",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "Test",
        "normalized": "",
        "package": "prednote",
        "partial": "Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#t:FalseVerbosity",
      "description": {
        "fct-descr": "\u003cp\u003eUse this verbosity for subjects that are False\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "type",
        "fct-source": "src/Data-Prednote-Test.html#FalseVerbosity",
        "fct-type": "type",
        "title": "FalseVerbosity"
      },
      "index": {
        "description": "Use this verbosity for subjects that are False",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "FalseVerbosity",
        "normalized": "",
        "package": "prednote",
        "partial": "False Verbosity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#t:Name",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of a test or of a group.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "type",
        "fct-source": "src/Data-Prednote-Test.html#Name",
        "fct-type": "type",
        "title": "Name"
      },
      "index": {
        "description": "The name of test or of group",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "Name",
        "normalized": "",
        "package": "prednote",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#t:Pass",
      "description": {
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "type",
        "fct-source": "src/Data-Prednote-Test.html#Pass",
        "fct-type": "type",
        "title": "Pass"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "Pass",
        "normalized": "",
        "package": "prednote",
        "partial": "Pass",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#t:ShowTest",
      "description": {
        "fct-descr": "\u003cp\u003eDetermines whether to show any of the results from a single test.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "data",
        "fct-source": "src/Data-Prednote-Test.html#ShowTest",
        "fct-type": "data",
        "title": "ShowTest"
      },
      "index": {
        "description": "Determines whether to show any of the results from single test",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "ShowTest",
        "normalized": "",
        "package": "prednote",
        "partial": "Show Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#t:Test",
      "description": {
        "fct-descr": "\u003cp\u003eA single test.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "data",
        "fct-source": "src/Data-Prednote-Test.html#Test",
        "fct-type": "data",
        "title": "Test"
      },
      "index": {
        "description": "single test",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "Test",
        "normalized": "",
        "package": "prednote",
        "partial": "Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#t:TestResult",
      "description": {
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "data",
        "fct-source": "src/Data-Prednote-Test.html#TestResult",
        "fct-type": "data",
        "title": "TestResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "TestResult",
        "normalized": "",
        "package": "prednote",
        "partial": "Test Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#t:TestVerbosity",
      "description": {
        "fct-descr": "\u003cp\u003eDetermines which ShowTest to use for a particular test.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "data",
        "fct-source": "src/Data-Prednote-Test.html#TestVerbosity",
        "fct-type": "data",
        "title": "TestVerbosity"
      },
      "index": {
        "description": "Determines which ShowTest to use for particular test",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "TestVerbosity",
        "normalized": "",
        "package": "prednote",
        "partial": "Test Verbosity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#t:TrueVerbosity",
      "description": {
        "fct-descr": "\u003cp\u003eUse this verbosity for subjects that are True\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "type",
        "fct-source": "src/Data-Prednote-Test.html#TrueVerbosity",
        "fct-type": "type",
        "title": "TrueVerbosity"
      },
      "index": {
        "description": "Use this verbosity for subjects that are True",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "TrueVerbosity",
        "normalized": "",
        "package": "prednote",
        "partial": "True Verbosity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#t:Verbosity",
      "description": {
        "fct-descr": "\u003cp\u003eHow verbose to be when showing the results of running a Pdct on a\n single subject.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "data",
        "fct-source": "src/Data-Prednote-Test.html#Verbosity",
        "fct-type": "data",
        "title": "Verbosity"
      },
      "index": {
        "description": "How verbose to be when showing the results of running Pdct on single subject",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "Verbosity",
        "normalized": "",
        "package": "prednote",
        "partial": "Verbosity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:HideAll",
      "description": {
        "fct-descr": "\u003cp\u003eDo not show any results from the Pdct\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "HideAll",
        "fct-source": "src/Data-Prednote-Test.html#Verbosity",
        "fct-type": "function",
        "title": "HideAll"
      },
      "index": {
        "description": "Do not show any results from the Pdct",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "HideAll",
        "normalized": "",
        "package": "prednote",
        "partial": "Hide All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:HideTest",
      "description": {
        "fct-descr": "\u003cp\u003eDo not show any results from this test\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "HideTest",
        "fct-source": "src/Data-Prednote-Test.html#ShowTest",
        "fct-type": "function",
        "title": "HideTest"
      },
      "index": {
        "description": "Do not show any results from this test",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "HideTest",
        "normalized": "",
        "package": "prednote",
        "partial": "Hide Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:ShowAll",
      "description": {
        "fct-descr": "\u003cp\u003eShow all Result\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "ShowAll",
        "fct-source": "src/Data-Prednote-Test.html#Verbosity",
        "fct-type": "function",
        "title": "ShowAll"
      },
      "index": {
        "description": "Show all Result",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "ShowAll",
        "normalized": "",
        "package": "prednote",
        "partial": "Show All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:ShowDefaults",
      "description": {
        "fct-descr": "\u003cp\u003eShow results according to the default settings provided in the\n Result itself\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "ShowDefaults",
        "fct-source": "src/Data-Prednote-Test.html#Verbosity",
        "fct-type": "function",
        "title": "ShowDefaults"
      },
      "index": {
        "description": "Show results according to the default settings provided in the Result itself",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "ShowDefaults",
        "normalized": "",
        "package": "prednote",
        "partial": "Show Defaults",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:ShowFirstLine",
      "description": {
        "fct-descr": "\u003cp\u003eShow the first line, which indicates whether the test passed or\n failed and gives the label for the test. Whether to show\n individual subjects is determined by the TrueVerbosity and\n FalseVerbosity.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "ShowFirstLine TrueVerbosity FalseVerbosity",
        "fct-source": "src/Data-Prednote-Test.html#ShowTest",
        "fct-type": "function",
        "title": "ShowFirstLine"
      },
      "index": {
        "description": "Show the first line which indicates whether the test passed or failed and gives the label for the test Whether to show individual subjects is determined by the TrueVerbosity and FalseVerbosity",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "ShowFirstLine",
        "normalized": "",
        "package": "prednote",
        "partial": "Show First Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:Test",
      "description": {
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "Test",
        "fct-source": "src/Data-Prednote-Test.html#Test",
        "fct-type": "function",
        "title": "Test"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "Test",
        "normalized": "",
        "package": "prednote",
        "partial": "Test",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:TestResult",
      "description": {
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "TestResult",
        "fct-source": "src/Data-Prednote-Test.html#TestResult",
        "fct-type": "function",
        "title": "TestResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "TestResult",
        "normalized": "",
        "package": "prednote",
        "partial": "Test Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:TestVerbosity",
      "description": {
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "TestVerbosity",
        "fct-source": "src/Data-Prednote-Test.html#TestVerbosity",
        "fct-type": "function",
        "title": "TestVerbosity"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "TestVerbosity",
        "normalized": "",
        "package": "prednote",
        "partial": "Test Verbosity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:eachSubjectMustBeTrue",
      "description": {
        "fct-descr": "\u003cp\u003eThe test passes if each subject returns True.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "Pdct a -\u003e Name -\u003e Test a",
        "fct-source": "src/Data-Prednote-Test.html#eachSubjectMustBeTrue",
        "fct-type": "function",
        "title": "eachSubjectMustBeTrue"
      },
      "index": {
        "description": "The test passes if each subject returns True",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "eachSubjectMustBeTrue",
        "normalized": "Pdct a-\u003eName-\u003eTest a",
        "package": "prednote",
        "partial": "Subject Must Be True",
        "signature": "Pdct a-\u003eName-\u003eTest a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:evalTest",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluates a test for a given list of subjects.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "Test a -\u003e [a] -\u003e TestResult a",
        "fct-source": "src/Data-Prednote-Test.html#evalTest",
        "fct-type": "function",
        "title": "evalTest"
      },
      "index": {
        "description": "Evaluates test for given list of subjects",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "evalTest",
        "normalized": "Test a-\u003e[a]-\u003eTestResult a",
        "package": "prednote",
        "partial": "Test",
        "signature": "Test a-\u003e[a]-\u003eTestResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:nSubjectsMustBeTrue",
      "description": {
        "fct-descr": "\u003cp\u003eThe test passes if at least a given number of subjects are True.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "Pdct a-\u003e Name-\u003e Int-\u003e Test a",
        "fct-type": "function",
        "title": "nSubjectsMustBeTrue"
      },
      "index": {
        "description": "The test passes if at least given number of subjects are True",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "nSubjectsMustBeTrue",
        "normalized": "Pdct a-\u003eName-\u003eInt-\u003eTest a",
        "package": "prednote",
        "partial": "Subjects Must Be True",
        "signature": "Pdct a-\u003eName-\u003eInt-\u003eTest a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:onFail",
      "description": {
        "fct-descr": "\u003cp\u003eUse this ShowTest when the test fails\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "ShowTest",
        "fct-source": "src/Data-Prednote-Test.html#TestVerbosity",
        "fct-type": "function",
        "title": "onFail"
      },
      "index": {
        "description": "Use this ShowTest when the test fails",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "onFail",
        "normalized": "",
        "package": "prednote",
        "partial": "Fail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:onPass",
      "description": {
        "fct-descr": "\u003cp\u003eUse this ShowTest when the test passes\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "ShowTest",
        "fct-source": "src/Data-Prednote-Test.html#TestVerbosity",
        "fct-type": "function",
        "title": "onPass"
      },
      "index": {
        "description": "Use this ShowTest when the test passes",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "onPass",
        "normalized": "",
        "package": "prednote",
        "partial": "Pass",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:resultDefaultVerbosity",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "TestVerbosity",
        "fct-source": "src/Data-Prednote-Test.html#TestResult",
        "fct-type": "function",
        "title": "resultDefaultVerbosity"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "resultDefaultVerbosity",
        "normalized": "",
        "package": "prednote",
        "partial": "Default Verbosity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:resultName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "Name",
        "fct-source": "src/Data-Prednote-Test.html#TestResult",
        "fct-type": "function",
        "title": "resultName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "resultName",
        "normalized": "",
        "package": "prednote",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:resultPass",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "Pass",
        "fct-source": "src/Data-Prednote-Test.html#TestResult",
        "fct-type": "function",
        "title": "resultPass"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "resultPass",
        "normalized": "",
        "package": "prednote",
        "partial": "Pass",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:resultSubjects",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "[(a, Result)]",
        "fct-source": "src/Data-Prednote-Test.html#TestResult",
        "fct-type": "function",
        "title": "resultSubjects"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "resultSubjects",
        "normalized": "[(a,Result)]",
        "package": "prednote",
        "partial": "Subjects",
        "signature": "[(a,Result)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:showResult",
      "description": {
        "fct-descr": "\u003cp\u003eShows a result with indenting.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "IndentAmt-\u003e (a -\u003e Text)-\u003e Maybe TestVerbosity-\u003e TestResult a-\u003e [Chunk]",
        "fct-type": "function",
        "title": "showResult"
      },
      "index": {
        "description": "Shows result with indenting",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "showResult",
        "normalized": "IndentAmt-\u003e(a-\u003eText)-\u003eMaybe TestVerbosity-\u003eTestResult a-\u003e[Chunk]",
        "package": "prednote",
        "partial": "Result",
        "signature": "IndentAmt-\u003e(a-\u003eText)-\u003eMaybe TestVerbosity-\u003eTestResult a-\u003e[Chunk]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:testFunc",
      "description": {
        "fct-descr": "\u003cp\u003eThis function is applied to each subject.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "a -\u003e Result",
        "fct-source": "src/Data-Prednote-Test.html#Test",
        "fct-type": "function",
        "title": "testFunc"
      },
      "index": {
        "description": "This function is applied to each subject",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "testFunc",
        "normalized": "a-\u003eResult",
        "package": "prednote",
        "partial": "Func",
        "signature": "a-\u003eResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:testName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "Name",
        "fct-source": "src/Data-Prednote-Test.html#Test",
        "fct-type": "function",
        "title": "testName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "testName",
        "normalized": "",
        "package": "prednote",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:testPass",
      "description": {
        "fct-descr": "\u003cp\u003eApplied to the results of all applications of testFunc;\n determines whether the test passes or fails.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "[Result] -\u003e Pass",
        "fct-source": "src/Data-Prednote-Test.html#Test",
        "fct-type": "function",
        "title": "testPass"
      },
      "index": {
        "description": "Applied to the results of all applications of testFunc determines whether the test passes or fails",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "testPass",
        "normalized": "[Result]-\u003ePass",
        "package": "prednote",
        "partial": "Pass",
        "signature": "[Result]-\u003ePass"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/prednote/docs/Data-Prednote-Test.html#v:testVerbosity",
      "description": {
        "fct-descr": "\u003cp\u003eDefault verbosity for the test.\n\u003c/p\u003e",
        "fct-module": "Data.Prednote.Test",
        "fct-package": "prednote",
        "fct-signature": "TestVerbosity",
        "fct-source": "src/Data-Prednote-Test.html#Test",
        "fct-type": "function",
        "title": "testVerbosity"
      },
      "index": {
        "description": "Default verbosity for the test",
        "hierarchy": "Data Prednote Test",
        "module": "Data.Prednote.Test",
        "name": "testVerbosity",
        "normalized": "",
        "package": "prednote",
        "partial": "Verbosity",
        "signature": ""
      }
    }
  }
]