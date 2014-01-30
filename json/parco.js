[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parco/docs/Text-Parco-Expr.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements permutation parsers, and is a generalisation\n of \u003ccode\u003e\u003ca\u003eExpr\u003c/a\u003e\u003c/code\u003e that will work with any parser combinator\n library. It builds a parser given a table of operators and\n associativities.\n\u003c/p\u003e\u003cp\u003eThis module is a drop-in replacement for \u003ccode\u003e\u003ca\u003eExpr\u003c/a\u003e\u003c/code\u003e, and\n the implementation is taken from that module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Parco.Expr",
        "fct-package": "parco",
        "fct-signature": "module",
        "fct-source": "src/Text-Parco-Expr.html",
        "fct-type": "module",
        "title": "Expr"
      },
      "index": {
        "description": "This module implements permutation parsers and is generalisation of Expr that will work with any parser combinator library It builds parser given table of operators and associativities This module is drop-in replacement for Expr and the implementation is taken from that module",
        "hierarchy": "Text Parco Expr",
        "module": "Text.Parco.Expr",
        "name": "Expr",
        "normalized": "",
        "package": "parco",
        "partial": "Expr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parco/docs/Text-Parco-Expr.html#t:Assoc",
      "description": {
        "fct-descr": "\u003cp\u003eThis data type specifies the associativity of operators: left, right\n or none.\n\u003c/p\u003e",
        "fct-module": "Text.Parco.Expr",
        "fct-package": "parco",
        "fct-signature": "data",
        "fct-source": "src/Text-Parco-Expr.html#Assoc",
        "fct-type": "data",
        "title": "Assoc"
      },
      "index": {
        "description": "This data type specifies the associativity of operators left right or none",
        "hierarchy": "Text Parco Expr",
        "module": "Text.Parco.Expr",
        "name": "Assoc",
        "normalized": "",
        "package": "parco",
        "partial": "Assoc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parco/docs/Text-Parco-Expr.html#t:Operator",
      "description": {
        "fct-descr": "\u003cp\u003eThis data type specifies operators that work on values of type\n \u003ccode\u003ea\u003c/code\u003e.  An operator is either binary infix or unary prefix or\n postfix. A binary operator has also an associated associativity.\n As in Parsec, \u003ccode\u003e\u003ca\u003eInfix\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePrefix\u003c/a\u003e\u003c/code\u003e operators cannot be directly\n nested - i.e, in an expression grammar, if \u003ccode\u003e-\u003c/code\u003e is a prefix\n operator, \u003ccode\u003e- -x\u003c/code\u003e would be a parse error, although \u003ccode\u003e-(-x)\u003c/code\u003e would\n work.  Use 'PrefixNestable'/'PostfixNestable' if you want fully\n nestable unary operators.\n\u003c/p\u003e",
        "fct-module": "Text.Parco.Expr",
        "fct-package": "parco",
        "fct-signature": "data",
        "fct-source": "src/Text-Parco-Expr.html#Operator",
        "fct-type": "data",
        "title": "Operator"
      },
      "index": {
        "description": "This data type specifies operators that work on values of type An operator is either binary infix or unary prefix or postfix binary operator has also an associated associativity As in Parsec Infix and Prefix operators cannot be directly nested i.e in an expression grammar if is prefix operator would be parse error although would work Use PrefixNestable PostfixNestable if you want fully nestable unary operators",
        "hierarchy": "Text Parco Expr",
        "module": "Text.Parco.Expr",
        "name": "Operator",
        "normalized": "",
        "package": "parco",
        "partial": "Operator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parco/docs/Text-Parco-Expr.html#t:OperatorTable",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003eOperatorTable p a\u003c/code\u003e is a list of \u003ccode\u003eOperator p a\u003c/code\u003e\n lists. The list is ordered in descending\n precedence. All operators in one list have the same precedence (but\n may have a different associativity).\n\u003c/p\u003e",
        "fct-module": "Text.Parco.Expr",
        "fct-package": "parco",
        "fct-signature": "type",
        "fct-source": "src/Text-Parco-Expr.html#OperatorTable",
        "fct-type": "type",
        "title": "OperatorTable"
      },
      "index": {
        "description": "An OperatorTable is list of Operator lists The list is ordered in descending precedence All operators in one list have the same precedence but may have different associativity",
        "hierarchy": "Text Parco Expr",
        "module": "Text.Parco.Expr",
        "name": "OperatorTable",
        "normalized": "",
        "package": "parco",
        "partial": "Operator Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parco/docs/Text-Parco-Expr.html#v:AssocLeft",
      "description": {
        "fct-module": "Text.Parco.Expr",
        "fct-package": "parco",
        "fct-signature": "AssocLeft",
        "fct-source": "src/Text-Parco-Expr.html#Assoc",
        "fct-type": "function",
        "title": "AssocLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parco Expr",
        "module": "Text.Parco.Expr",
        "name": "AssocLeft",
        "normalized": "",
        "package": "parco",
        "partial": "Assoc Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parco/docs/Text-Parco-Expr.html#v:AssocNone",
      "description": {
        "fct-module": "Text.Parco.Expr",
        "fct-package": "parco",
        "fct-signature": "AssocNone",
        "fct-source": "src/Text-Parco-Expr.html#Assoc",
        "fct-type": "function",
        "title": "AssocNone"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parco Expr",
        "module": "Text.Parco.Expr",
        "name": "AssocNone",
        "normalized": "",
        "package": "parco",
        "partial": "Assoc None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parco/docs/Text-Parco-Expr.html#v:AssocRight",
      "description": {
        "fct-module": "Text.Parco.Expr",
        "fct-package": "parco",
        "fct-signature": "AssocRight",
        "fct-source": "src/Text-Parco-Expr.html#Assoc",
        "fct-type": "function",
        "title": "AssocRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parco Expr",
        "module": "Text.Parco.Expr",
        "name": "AssocRight",
        "normalized": "",
        "package": "parco",
        "partial": "Assoc Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parco/docs/Text-Parco-Expr.html#v:Infix",
      "description": {
        "fct-module": "Text.Parco.Expr",
        "fct-package": "parco",
        "fct-signature": "Infix (p (a -\u003e a -\u003e a)) Assoc",
        "fct-source": "src/Text-Parco-Expr.html#Operator",
        "fct-type": "function",
        "title": "Infix"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parco Expr",
        "module": "Text.Parco.Expr",
        "name": "Infix",
        "normalized": "Infix(a(b-\u003eb-\u003eb))Assoc",
        "package": "parco",
        "partial": "Infix",
        "signature": "Infix(p(a-\u003ea-\u003ea))Assoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parco/docs/Text-Parco-Expr.html#v:Postfix",
      "description": {
        "fct-module": "Text.Parco.Expr",
        "fct-package": "parco",
        "fct-signature": "Postfix (p (a -\u003e a))",
        "fct-source": "src/Text-Parco-Expr.html#Operator",
        "fct-type": "function",
        "title": "Postfix"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parco Expr",
        "module": "Text.Parco.Expr",
        "name": "Postfix",
        "normalized": "Postfix(a(b-\u003eb))",
        "package": "parco",
        "partial": "Postfix",
        "signature": "Postfix(p(a-\u003ea))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parco/docs/Text-Parco-Expr.html#v:PostfixNestable",
      "description": {
        "fct-module": "Text.Parco.Expr",
        "fct-package": "parco",
        "fct-signature": "PostfixNestable (p (a -\u003e a))",
        "fct-source": "src/Text-Parco-Expr.html#Operator",
        "fct-type": "function",
        "title": "PostfixNestable"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parco Expr",
        "module": "Text.Parco.Expr",
        "name": "PostfixNestable",
        "normalized": "PostfixNestable(a(b-\u003eb))",
        "package": "parco",
        "partial": "Postfix Nestable",
        "signature": "PostfixNestable(p(a-\u003ea))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parco/docs/Text-Parco-Expr.html#v:Prefix",
      "description": {
        "fct-module": "Text.Parco.Expr",
        "fct-package": "parco",
        "fct-signature": "Prefix (p (a -\u003e a))",
        "fct-source": "src/Text-Parco-Expr.html#Operator",
        "fct-type": "function",
        "title": "Prefix"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parco Expr",
        "module": "Text.Parco.Expr",
        "name": "Prefix",
        "normalized": "Prefix(a(b-\u003eb))",
        "package": "parco",
        "partial": "Prefix",
        "signature": "Prefix(p(a-\u003ea))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parco/docs/Text-Parco-Expr.html#v:PrefixNestable",
      "description": {
        "fct-module": "Text.Parco.Expr",
        "fct-package": "parco",
        "fct-signature": "PrefixNestable (p (a -\u003e a))",
        "fct-source": "src/Text-Parco-Expr.html#Operator",
        "fct-type": "function",
        "title": "PrefixNestable"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Parco Expr",
        "module": "Text.Parco.Expr",
        "name": "PrefixNestable",
        "normalized": "PrefixNestable(a(b-\u003eb))",
        "package": "parco",
        "partial": "Prefix Nestable",
        "signature": "PrefixNestable(p(a-\u003ea))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parco/docs/Text-Parco-Expr.html#v:buildExpressionParser",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ebuildExpressionParser table term\u003c/code\u003e builds an expression parser for\n terms \u003ccode\u003eterm\u003c/code\u003e with operators from \u003ccode\u003etable\u003c/code\u003e, taking the associativity\n and precedence specified in \u003ccode\u003etable\u003c/code\u003e into account. Prefix and postfix\n operators of the same precedence can only occur once (i.e. \u003ccode\u003e--2\u003c/code\u003e is\n not allowed if \u003ccode\u003e-\u003c/code\u003e is prefix negate). Prefix and postfix operators\n of the same precedence associate to the left (i.e. if \u003ccode\u003e++\u003c/code\u003e is\n postfix increment, than \u003ccode\u003e-2++\u003c/code\u003e equals \u003ccode\u003e-1\u003c/code\u003e, not \u003ccode\u003e-3\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003ebuildExpressionParser\u003c/code\u003e takes care of all the complexity\n involved in building expression parser. Here is an example of an\n expression parser that handles prefix signs, postfix increment and\n basic arithmetic.\n\u003c/p\u003e\u003cpre\u003e  expr    = buildExpressionParser table term\n          \u003c?\u003e \"expression\"\n\n  term    =  parens expr\n          \u003c|\u003e natural\n          \u003c?\u003e \"simple expression\"\n\n  table   = [ [prefix \"-\" negate, prefix \"+\" id ]\n            , [postfix \"++\" (+1)]\n            , [binary \"*\" (*) AssocLeft, binary \"/\" (div) AssocLeft ]\n            , [binary \"+\" (+) AssocLeft, binary \"-\" (-)   AssocLeft ]\n            ]\n\n  binary  name fun assoc = Infix   (reservedOp name \u003e\u003e return fun) assoc\n  prefix  name fun       = Prefix  (reservedOp name \u003e\u003e return fun)\n  postfix name fun       = Postfix (reservedOp name \u003e\u003e return fun)\n\u003c/pre\u003e",
        "fct-module": "Text.Parco.Expr",
        "fct-package": "parco",
        "fct-signature": "OperatorTable p a -\u003e p a -\u003e p a",
        "fct-source": "src/Text-Parco-Expr.html#buildExpressionParser",
        "fct-type": "function",
        "title": "buildExpressionParser"
      },
      "index": {
        "description": "buildExpressionParser table term builds an expression parser for terms term with operators from table taking the associativity and precedence specified in table into account Prefix and postfix operators of the same precedence can only occur once i.e is not allowed if is prefix negate Prefix and postfix operators of the same precedence associate to the left i.e if is postfix increment than equals not The buildExpressionParser takes care of all the complexity involved in building expression parser Here is an example of an expression parser that handles prefix signs postfix increment and basic arithmetic expr buildExpressionParser table term expression term parens expr natural simple expression table prefix negate prefix id postfix binary AssocLeft binary div AssocLeft binary AssocLeft binary AssocLeft binary name fun assoc Infix reservedOp name return fun assoc prefix name fun Prefix reservedOp name return fun postfix name fun Postfix reservedOp name return fun",
        "hierarchy": "Text Parco Expr",
        "module": "Text.Parco.Expr",
        "name": "buildExpressionParser",
        "normalized": "OperatorTable a b-\u003ea b-\u003ea b",
        "package": "parco",
        "partial": "Expression Parser",
        "signature": "OperatorTable p a-\u003ep a-\u003ep a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parco/docs/Text-Parco-Perm.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements permutation parsers, and is a generalisation\n of \u003ccode\u003e\u003ca\u003ePerm\u003c/a\u003e\u003c/code\u003e that will work with any parser combinator\n library.  The algorithm is described in:\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eParsing Permutation Phrases,\u003c/em\u003e\n by Arthur Baars, Andres Loh and Doaitse Swierstra.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Parco.Perm",
        "fct-package": "parco",
        "fct-signature": "module",
        "fct-source": "src/Text-Parco-Perm.html",
        "fct-type": "module",
        "title": "Perm"
      },
      "index": {
        "description": "This module implements permutation parsers and is generalisation of Perm that will work with any parser combinator library The algorithm is described in Parsing Permutation Phrases by Arthur Baars Andres Loh and Doaitse Swierstra",
        "hierarchy": "Text Parco Perm",
        "module": "Text.Parco.Perm",
        "name": "Perm",
        "normalized": "",
        "package": "parco",
        "partial": "Perm",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parco/docs/Text-Parco-Perm.html#t:PermParser",
      "description": {
        "fct-descr": "\u003cp\u003eThe type \u003ccode\u003ePermParser p a\u003c/code\u003e denotes a permutation parser that,\n when converted by the \u003ccode\u003e\u003ca\u003epermute\u003c/a\u003e\u003c/code\u003e function, parses\n \u003ccode\u003es\u003c/code\u003e streams with user state \u003ccode\u003est\u003c/code\u003e and returns a value of\n type \u003ccode\u003ea\u003c/code\u003e on success.\n\u003c/p\u003e\u003cp\u003eNormally, a permutation parser is first built with special\n operators like (\u003ccode\u003e\u003ca\u003e\u003c||\u003e\u003c/a\u003e\u003c/code\u003e) and than transformed into a normal parser\n using \u003ccode\u003e\u003ca\u003epermute\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Parco.Perm",
        "fct-package": "parco",
        "fct-signature": "data",
        "fct-source": "src/Text-Parco-Perm.html#PermParser",
        "fct-type": "data",
        "title": "PermParser"
      },
      "index": {
        "description": "The type PermParser denotes permutation parser that when converted by the permute function parses streams with user state st and returns value of type on success Normally permutation parser is first built with special operators like and than transformed into normal parser using permute",
        "hierarchy": "Text Parco Perm",
        "module": "Text.Parco.Perm",
        "name": "PermParser",
        "normalized": "",
        "package": "parco",
        "partial": "Perm Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parco/docs/Text-Parco-Perm.html#v:-60--124--124--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression \u003ccode\u003eperm \u003c||\u003e p\u003c/code\u003e adds parser \u003ccode\u003ep\u003c/code\u003e to the permutation\n parser \u003ccode\u003eperm\u003c/code\u003e. The parser \u003ccode\u003ep\u003c/code\u003e is not allowed to accept empty input -\n use the optional combinator (\u003ccode\u003e\u003ca\u003e\u003c|?\u003e\u003c/a\u003e\u003c/code\u003e) instead. Returns a\n new permutation parser that includes \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Parco.Perm",
        "fct-package": "parco",
        "fct-signature": "PermParser p (a -\u003e b) -\u003e p a -\u003e PermParser p b",
        "fct-source": "src/Text-Parco-Perm.html#%3C%7C%7C%3E",
        "fct-type": "function",
        "title": "(\u003c||\u003e)"
      },
      "index": {
        "description": "The expression perm adds parser to the permutation parser perm The parser is not allowed to accept empty input use the optional combinator instead Returns new permutation parser that includes",
        "hierarchy": "Text Parco Perm",
        "module": "Text.Parco.Perm",
        "name": "(\u003c||\u003e) \u003c||\u003e",
        "normalized": "PermParser a(b-\u003ec)-\u003ea b-\u003ePermParser a c",
        "package": "parco",
        "partial": "",
        "signature": "PermParser p(a-\u003eb)-\u003ep a-\u003ePermParser p b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parco/docs/Text-Parco-Perm.html#v:-60--124--63--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression \u003ccode\u003eperm \u003c||\u003e (x,p)\u003c/code\u003e adds parser \u003ccode\u003ep\u003c/code\u003e to the\n permutation parser \u003ccode\u003eperm\u003c/code\u003e. The parser \u003ccode\u003ep\u003c/code\u003e is optional - if it can\n not be applied, the default value \u003ccode\u003ex\u003c/code\u003e will be used instead. Returns\n a new permutation parser that includes the optional parser \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Parco.Perm",
        "fct-package": "parco",
        "fct-signature": "PermParser p (a -\u003e b) -\u003e (a, p a) -\u003e PermParser p b",
        "fct-source": "src/Text-Parco-Perm.html#%3C%7C%3F%3E",
        "fct-type": "function",
        "title": "(\u003c|?\u003e)"
      },
      "index": {
        "description": "The expression perm adds parser to the permutation parser perm The parser is optional if it can not be applied the default value will be used instead Returns new permutation parser that includes the optional parser",
        "hierarchy": "Text Parco Perm",
        "module": "Text.Parco.Perm",
        "name": "(\u003c|?\u003e) \u003c|?\u003e",
        "normalized": "PermParser a(b-\u003ec)-\u003e(b,a b)-\u003ePermParser a c",
        "package": "parco",
        "partial": "",
        "signature": "PermParser p(a-\u003eb)-\u003e(a,p a)-\u003ePermParser p b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parco/docs/Text-Parco-Perm.html#v:-60--36--36--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression \u003ccode\u003ef \u003c$$\u003e p\u003c/code\u003e creates a fresh permutation parser\n consisting of parser \u003ccode\u003ep\u003c/code\u003e. The the final result of the permutation\n parser is the function \u003ccode\u003ef\u003c/code\u003e applied to the return value of \u003ccode\u003ep\u003c/code\u003e. The\n parser \u003ccode\u003ep\u003c/code\u003e is not allowed to accept empty input - use the optional\n combinator (\u003ccode\u003e\u003ca\u003e\u003c$?\u003e\u003c/a\u003e\u003c/code\u003e) instead.\n\u003c/p\u003e\u003cp\u003eIf the function \u003ccode\u003ef\u003c/code\u003e takes more than one parameter, the type variable\n \u003ccode\u003eb\u003c/code\u003e is instantiated to a functional type which combines nicely with\n the adds parser \u003ccode\u003ep\u003c/code\u003e to the (\u003ccode\u003e\u003ca\u003e\u003c||\u003e\u003c/a\u003e\u003c/code\u003e) combinator. This\n results in stylized code where a permutation parser starts with a\n combining function \u003ccode\u003ef\u003c/code\u003e followed by the parsers. The function \u003ccode\u003ef\u003c/code\u003e\n gets its parameters in the order in which the parsers are specified,\n but actual input can be in any order.\n\u003c/p\u003e",
        "fct-module": "Text.Parco.Perm",
        "fct-package": "parco",
        "fct-signature": "(a -\u003e b) -\u003e p a -\u003e PermParser p b",
        "fct-source": "src/Text-Parco-Perm.html#%3C%24%24%3E",
        "fct-type": "function",
        "title": "(\u003c$$\u003e)"
      },
      "index": {
        "description": "The expression creates fresh permutation parser consisting of parser The the final result of the permutation parser is the function applied to the return value of The parser is not allowed to accept empty input use the optional combinator instead If the function takes more than one parameter the type variable is instantiated to functional type which combines nicely with the adds parser to the combinator This results in stylized code where permutation parser starts with combining function followed by the parsers The function gets its parameters in the order in which the parsers are specified but actual input can be in any order",
        "hierarchy": "Text Parco Perm",
        "module": "Text.Parco.Perm",
        "name": "(\u003c$$\u003e) \u003c$$\u003e",
        "normalized": "(a-\u003eb)-\u003ec a-\u003ePermParser c b",
        "package": "parco",
        "partial": "",
        "signature": "(a-\u003eb)-\u003ep a-\u003ePermParser p b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parco/docs/Text-Parco-Perm.html#v:-60--36--63--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe expression \u003ccode\u003ef \u003c$?\u003e (x,p)\u003c/code\u003e creates a fresh permutation parser\n consisting of parser \u003ccode\u003ep\u003c/code\u003e. The the final result of the permutation\n parser is the function \u003ccode\u003ef\u003c/code\u003e applied to the return value of \u003ccode\u003ep\u003c/code\u003e. The\n parser \u003ccode\u003ep\u003c/code\u003e is optional - if it can not be applied, the default value\n \u003ccode\u003ex\u003c/code\u003e will be used instead.\n\u003c/p\u003e",
        "fct-module": "Text.Parco.Perm",
        "fct-package": "parco",
        "fct-signature": "(a -\u003e b) -\u003e (a, p a) -\u003e PermParser p b",
        "fct-source": "src/Text-Parco-Perm.html#%3C%24%3F%3E",
        "fct-type": "function",
        "title": "(\u003c$?\u003e)"
      },
      "index": {
        "description": "The expression creates fresh permutation parser consisting of parser The the final result of the permutation parser is the function applied to the return value of The parser is optional if it can not be applied the default value will be used instead",
        "hierarchy": "Text Parco Perm",
        "module": "Text.Parco.Perm",
        "name": "(\u003c$?\u003e) \u003c$?\u003e",
        "normalized": "(a-\u003eb)-\u003e(a,c a)-\u003ePermParser c b",
        "package": "parco",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e(a,p a)-\u003ePermParser p b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parco/docs/Text-Parco-Perm.html#v:permute",
      "description": {
        "fct-descr": "\u003cp\u003eThe parser \u003ccode\u003epermute perm\u003c/code\u003e parses a permutation of parsers\n described by \u003ccode\u003eperm\u003c/code\u003e. For example, suppose we want to parse a\n permutation of: an optional string of \u003ccode\u003ea\u003c/code\u003e's, the character \u003ccode\u003eb\u003c/code\u003e and\n an optional \u003ccode\u003ec\u003c/code\u003e.  This can be described by:\n\u003c/p\u003e\u003cpre\u003e  test  = permute (tuple \u003c$?\u003e (\"\",many1 (char 'a'))\n                         \u003c||\u003e char 'b'\n                         \u003c|?\u003e ('_',char 'c'))\n        where\n          tuple a b c  = (a,b,c)\n\u003c/pre\u003e",
        "fct-module": "Text.Parco.Perm",
        "fct-package": "parco",
        "fct-signature": "PermParser p a -\u003e p a",
        "fct-source": "src/Text-Parco-Perm.html#permute",
        "fct-type": "function",
        "title": "permute"
      },
      "index": {
        "description": "The parser permute perm parses permutation of parsers described by perm For example suppose we want to parse permutation of an optional string of the character and an optional This can be described by test permute tuple many1 char char char where tuple",
        "hierarchy": "Text Parco Perm",
        "module": "Text.Parco.Perm",
        "name": "permute",
        "normalized": "PermParser a b-\u003ea b",
        "package": "parco",
        "partial": "",
        "signature": "PermParser p a-\u003ep a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parco/docs/Text-Parco.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a general parser class that you should\n probably implement for any parsers using Parco - it encapsulates\n features that cannot be expressed using other standard classes.\n While some parser combinators (such as \u003ca\u003eText.Parco.Perm\u003c/a\u003e) can be\n expressed solely through \u003ccode\u003e\u003ca\u003eApplicative\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e, others\n may need to do backtracking, which not all parser implementations\n can do automatically.\n\u003c/p\u003e\u003cp\u003eBefore defining your own instance of the class, check if a package\n is available that does it for you.  For example, \u003ccode\u003eparco-parsec\u003c/code\u003e\n defines an instance for Parsec.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Parco",
        "fct-package": "parco",
        "fct-signature": "module",
        "fct-source": "src/Text-Parco.html",
        "fct-type": "module",
        "title": "Parco"
      },
      "index": {
        "description": "This module implements general parser class that you should probably implement for any parsers using Parco it encapsulates features that cannot be expressed using other standard classes While some parser combinators such as Text.Parco.Perm can be expressed solely through Applicative and Alternative others may need to do backtracking which not all parser implementations can do automatically Before defining your own instance of the class check if package is available that does it for you For example parco-parsec defines an instance for Parsec",
        "hierarchy": "Text Parco",
        "module": "Text.Parco",
        "name": "Parco",
        "normalized": "",
        "package": "parco",
        "partial": "Parco",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parco/docs/Text-Parco.html#t:Parser",
      "description": {
        "fct-descr": "\u003cp\u003eSome parser combinators need special operations that are not\n captured in any of the standard typeclasses (backtracking, for\n example).  For these, it is necessary to define an instance of this\n class.\n\u003c/p\u003e",
        "fct-module": "Text.Parco",
        "fct-package": "parco",
        "fct-signature": "class",
        "fct-source": "src/Text-Parco.html#Parser",
        "fct-type": "class",
        "title": "Parser"
      },
      "index": {
        "description": "Some parser combinators need special operations that are not captured in any of the standard typeclasses backtracking for example For these it is necessary to define an instance of this class",
        "hierarchy": "Text Parco",
        "module": "Text.Parco",
        "name": "Parser",
        "normalized": "",
        "package": "parco",
        "partial": "Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parco/docs/Text-Parco.html#v:expects",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003eexpects p s\u003c/code\u003e fails, the error message should note that \u003ccode\u003es\u003c/code\u003e\n (a descriptive string) was expected, but has otherwise no\n semantic effect on the parser.  The default method simply returns\n \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Parco",
        "fct-package": "parco",
        "fct-signature": "p a -\u003e String -\u003e p a",
        "fct-source": "src/Text-Parco.html#expects",
        "fct-type": "method",
        "title": "expects"
      },
      "index": {
        "description": "If expects fails the error message should note that descriptive string was expected but has otherwise no semantic effect on the parser The default method simply returns",
        "hierarchy": "Text Parco",
        "module": "Text.Parco",
        "name": "expects",
        "normalized": "a b-\u003eString-\u003ea b",
        "package": "parco",
        "partial": "",
        "signature": "p a-\u003eString-\u003ep a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parco/docs/Text-Parco.html#v:try",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003etry p\u003c/code\u003e fails, no input should be consumed.  The default\n method calls \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Parco",
        "fct-package": "parco",
        "fct-signature": "p a -\u003e p a",
        "fct-source": "src/Text-Parco.html#try",
        "fct-type": "method",
        "title": "try"
      },
      "index": {
        "description": "If try fails no input should be consumed The default method calls error",
        "hierarchy": "Text Parco",
        "module": "Text.Parco",
        "name": "try",
        "normalized": "a b-\u003ea b",
        "package": "parco",
        "partial": "",
        "signature": "p a-\u003ep a"
      }
    }
  }
]