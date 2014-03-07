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
        "word": "expression-parser"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Expression",
          "name": "Expression",
          "package": "expression-parser",
          "source": "src/Text-ParserCombinators-Expression.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Expression",
          "module": "Text.ParserCombinators.Expression",
          "name": "Expression",
          "package": "expression-parser",
          "partial": "Expression",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/expression-parser/docs/Text-ParserCombinators-Expression.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data type specifies the associativity of operators: left, right\n or none.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Expression",
          "name": "Assoc",
          "package": "expression-parser",
          "source": "src/Text-ParserCombinators-Expression.html#Assoc",
          "type": "data"
        },
        "index": {
          "description": "This data type specifies the associativity of operators left right or none",
          "hierarchy": "Text ParserCombinators Expression",
          "module": "Text.ParserCombinators.Expression",
          "name": "Assoc",
          "package": "expression-parser",
          "partial": "Assoc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/expression-parser/docs/Text-ParserCombinators-Expression.html#t:Assoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data type specifies operators that work on values of type \u003ccode\u003ea\u003c/code\u003e.\n An operator is either binary infix or unary prefix or postfix. A\n binary operator has also an associated associativity.\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Expression",
          "name": "Operator",
          "package": "expression-parser",
          "source": "src/Text-ParserCombinators-Expression.html#Operator",
          "type": "data"
        },
        "index": {
          "description": "This data type specifies operators that work on values of type An operator is either binary infix or unary prefix or postfix binary operator has also an associated associativity",
          "hierarchy": "Text ParserCombinators Expression",
          "module": "Text.ParserCombinators.Expression",
          "name": "Operator",
          "package": "expression-parser",
          "partial": "Operator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/expression-parser/docs/Text-ParserCombinators-Expression.html#t:Operator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003eOperatorTable\u003c/code\u003e is a list of \u003ccode\u003eOperator\u003c/code\u003e\n lists. The list is ordered in descending\n precedence. All operators in one list have the same precedence (but\n may have a different associativity).\n\u003c/p\u003e",
          "module": "Text.ParserCombinators.Expression",
          "name": "OperatorTable",
          "package": "expression-parser",
          "source": "src/Text-ParserCombinators-Expression.html#OperatorTable",
          "type": "type"
        },
        "index": {
          "description": "An OperatorTable is list of Operator lists The list is ordered in descending precedence All operators in one list have the same precedence but may have different associativity",
          "hierarchy": "Text ParserCombinators Expression",
          "module": "Text.ParserCombinators.Expression",
          "name": "OperatorTable",
          "package": "expression-parser",
          "partial": "Operator Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/expression-parser/docs/Text-ParserCombinators-Expression.html#t:OperatorTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Expression",
          "name": "AssocLeft",
          "package": "expression-parser",
          "signature": "AssocLeft",
          "source": "src/Text-ParserCombinators-Expression.html#Assoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Expression",
          "module": "Text.ParserCombinators.Expression",
          "name": "AssocLeft",
          "package": "expression-parser",
          "partial": "Assoc Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/expression-parser/docs/Text-ParserCombinators-Expression.html#v:AssocLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Expression",
          "name": "AssocNone",
          "package": "expression-parser",
          "signature": "AssocNone",
          "source": "src/Text-ParserCombinators-Expression.html#Assoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Expression",
          "module": "Text.ParserCombinators.Expression",
          "name": "AssocNone",
          "package": "expression-parser",
          "partial": "Assoc None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/expression-parser/docs/Text-ParserCombinators-Expression.html#v:AssocNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Expression",
          "name": "AssocRight",
          "package": "expression-parser",
          "signature": "AssocRight",
          "source": "src/Text-ParserCombinators-Expression.html#Assoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Expression",
          "module": "Text.ParserCombinators.Expression",
          "name": "AssocRight",
          "package": "expression-parser",
          "partial": "Assoc Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/expression-parser/docs/Text-ParserCombinators-Expression.html#v:AssocRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Expression",
          "name": "Infix",
          "package": "expression-parser",
          "signature": "Infix (p (a -\u003e a -\u003e a)) Assoc",
          "source": "src/Text-ParserCombinators-Expression.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Expression",
          "module": "Text.ParserCombinators.Expression",
          "name": "Infix",
          "normalized": "Infix(a(b-\u003eb-\u003eb))Assoc",
          "package": "expression-parser",
          "partial": "Infix",
          "signature": "Infix(p(a-\u003ea-\u003ea))Assoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/expression-parser/docs/Text-ParserCombinators-Expression.html#v:Infix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Expression",
          "name": "Postfix",
          "package": "expression-parser",
          "signature": "Postfix (p (a -\u003e a))",
          "source": "src/Text-ParserCombinators-Expression.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Expression",
          "module": "Text.ParserCombinators.Expression",
          "name": "Postfix",
          "normalized": "Postfix(a(b-\u003eb))",
          "package": "expression-parser",
          "partial": "Postfix",
          "signature": "Postfix(p(a-\u003ea))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/expression-parser/docs/Text-ParserCombinators-Expression.html#v:Postfix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.ParserCombinators.Expression",
          "name": "Prefix",
          "package": "expression-parser",
          "signature": "Prefix (p (a -\u003e a))",
          "source": "src/Text-ParserCombinators-Expression.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text ParserCombinators Expression",
          "module": "Text.ParserCombinators.Expression",
          "name": "Prefix",
          "normalized": "Prefix(a(b-\u003eb))",
          "package": "expression-parser",
          "partial": "Prefix",
          "signature": "Prefix(p(a-\u003ea))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/expression-parser/docs/Text-ParserCombinators-Expression.html#v:Prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebuildExpressionParser table term\u003c/code\u003e builds an expression parser for\n terms \u003ccode\u003eterm\u003c/code\u003e with operators from \u003ccode\u003etable\u003c/code\u003e, taking the associativity\n and precedence specified in \u003ccode\u003etable\u003c/code\u003e into account. Prefix and postfix\n operators of the same precedence can only occur once (i.e. \u003ccode\u003e--2\u003c/code\u003e is\n not allowed if \u003ccode\u003e-\u003c/code\u003e is prefix negate). Prefix and postfix operators\n of the same precedence associate to the left (i.e. if \u003ccode\u003e++\u003c/code\u003e is\n postfix increment, than \u003ccode\u003e-2++\u003c/code\u003e equals \u003ccode\u003e-1\u003c/code\u003e, not \u003ccode\u003e-3\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003ebuildExpressionParser\u003c/code\u003e takes care of all the complexity\n involved in building expression parser. Here is an example of an\n expression parser that handles prefix signs, postfix increment and\n basic arithmetic.\n\u003c/p\u003e\u003cpre\u003e  expr    = buildExpressionParser table term\n          \u003c?\u003e \"expression\"\n\n  term    =  parens expr \n          \u003c|\u003e natural\n          \u003c?\u003e \"simple expression\"\n\n  table   = [ [prefix \"-\" negate, prefix \"+\" id ]\n            , [postfix \"++\" (+1)]\n            , [binary \"*\" (*) AssocLeft, binary \"/\" (div) AssocLeft ]\n            , [binary \"+\" (+) AssocLeft, binary \"-\" (-)   AssocLeft ]\n            ]\n\n  binary  name fun assoc = Infix (do{ reservedOp name; return fun }) assoc\n  prefix  name fun       = Prefix (do{ reservedOp name; return fun })\n  postfix name fun       = Postfix (do{ reservedOp name; return fun })\n\u003c/pre\u003e",
          "module": "Text.ParserCombinators.Expression",
          "name": "buildExpressionParser",
          "package": "expression-parser",
          "signature": "[[Operator p b]] -\u003e p b -\u003e p b",
          "source": "src/Text-ParserCombinators-Expression.html#buildExpressionParser",
          "type": "function"
        },
        "index": {
          "description": "buildExpressionParser table term builds an expression parser for terms term with operators from table taking the associativity and precedence specified in table into account Prefix and postfix operators of the same precedence can only occur once i.e is not allowed if is prefix negate Prefix and postfix operators of the same precedence associate to the left i.e if is postfix increment than equals not The buildExpressionParser takes care of all the complexity involved in building expression parser Here is an example of an expression parser that handles prefix signs postfix increment and basic arithmetic expr buildExpressionParser table term expression term parens expr natural simple expression table prefix negate prefix id postfix binary AssocLeft binary div AssocLeft binary AssocLeft binary AssocLeft binary name fun assoc Infix do reservedOp name return fun assoc prefix name fun Prefix do reservedOp name return fun postfix name fun Postfix do reservedOp name return fun",
          "hierarchy": "Text ParserCombinators Expression",
          "module": "Text.ParserCombinators.Expression",
          "name": "buildExpressionParser",
          "normalized": "[[Operator a b]]-\u003ea b-\u003ea b",
          "package": "expression-parser",
          "partial": "Expression Parser",
          "signature": "[[Operator p b]]-\u003ep b-\u003ep b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/expression-parser/docs/Text-ParserCombinators-Expression.html#v:buildExpressionParser"
      }
    }
  ]
]