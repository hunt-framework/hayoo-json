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
        "word": "language-javascript"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.AST",
          "name": "AST",
          "package": "language-javascript",
          "source": "src/Language-JavaScript-Parser-AST.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "AST",
          "package": "language-javascript",
          "partial": "AST",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe JSNode is the building block of the AST.\n Each has a syntactic part \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e. In addition, the leaf elements\n (terminals) have a position \u003ccode\u003e\u003ca\u003eTokenPosn\u003c/a\u003e\u003c/code\u003e, as well as an array of comments\n and/or whitespace that was collected while parsing.\n\u003c/p\u003e",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSNode",
          "package": "language-javascript",
          "source": "src/Language-JavaScript-Parser-AST.html#JSNode",
          "type": "data"
        },
        "index": {
          "description": "The JSNode is the building block of the AST Each has syntactic part Node In addition the leaf elements terminals have position TokenPosn as well as an array of comments and or whitespace that was collected while parsing",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSNode",
          "package": "language-javascript",
          "partial": "JSNode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#t:JSNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.AST",
          "name": "Node",
          "package": "language-javascript",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "Node",
          "package": "language-javascript",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elb, args, rb\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSArguments",
          "package": "language-javascript",
          "signature": "JSArguments JSNode [JSNode] JSNode",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSArguments\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSArguments\"]"
        },
        "index": {
          "description": "lb args rb",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSArguments",
          "normalized": "JSArguments JSNode[JSNode]JSNode",
          "package": "language-javascript",
          "partial": "JSArguments",
          "signature": "JSArguments JSNode[JSNode]JSNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSArguments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elb, contents, rb\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSArrayLiteral",
          "package": "language-javascript",
          "signature": "JSArrayLiteral JSNode [JSNode] JSNode",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSArrayLiteral\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSArrayLiteral\"]"
        },
        "index": {
          "description": "lb contents rb",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSArrayLiteral",
          "normalized": "JSArrayLiteral JSNode[JSNode]JSNode",
          "package": "language-javascript",
          "partial": "JSArray Literal",
          "signature": "JSArrayLiteral JSNode[JSNode]JSNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSArrayLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoptional lb,optional block statements,optional rb\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSBlock",
          "package": "language-javascript",
          "signature": "JSBlock [JSNode] [JSNode] [JSNode]",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSBlock\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSBlock\"]"
        },
        "index": {
          "description": "optional lb optional block statements optional rb",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSBlock",
          "normalized": "JSBlock[JSNode][JSNode][JSNode]",
          "package": "language-javascript",
          "partial": "JSBlock",
          "signature": "JSBlock[JSNode][JSNode][JSNode]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebreak, optional identifier, autosemi\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSBreak",
          "package": "language-javascript",
          "signature": "JSBreak JSNode [JSNode] JSNode",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSBreak\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSBreak\"]"
        },
        "index": {
          "description": "break optional identifier autosemi",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSBreak",
          "normalized": "JSBreak JSNode[JSNode]JSNode",
          "package": "language-javascript",
          "partial": "JSBreak",
          "signature": "JSBreak JSNode[JSNode]JSNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype : ., (), []; opening [ or ., contents, closing\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSCallExpression",
          "package": "language-javascript",
          "signature": "JSCallExpression String [JSNode] [JSNode] [JSNode]",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSCallExpression\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSCallExpression\"]"
        },
        "index": {
          "description": "type opening or contents closing",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSCallExpression",
          "normalized": "JSCallExpression String[JSNode][JSNode][JSNode]",
          "package": "language-javascript",
          "partial": "JSCall Expression",
          "signature": "JSCallExpression String[JSNode][JSNode][JSNode]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSCallExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecase,expr,colon,stmtlist\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSCase",
          "package": "language-javascript",
          "signature": "JSCase JSNode JSNode JSNode [JSNode]",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSCase\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSCase\"]"
        },
        "index": {
          "description": "case expr colon stmtlist",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSCase",
          "normalized": "JSCase JSNode JSNode JSNode[JSNode]",
          "package": "language-javascript",
          "partial": "JSCase",
          "signature": "JSCase JSNode JSNode JSNode[JSNode]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecatch,lb,ident,[if,expr],rb,block\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSCatch",
          "package": "language-javascript",
          "signature": "JSCatch JSNode JSNode JSNode [JSNode] JSNode JSNode",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSCatch\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSCatch\"]"
        },
        "index": {
          "description": "catch lb ident if expr rb block",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSCatch",
          "normalized": "JSCatch JSNode JSNode JSNode[JSNode]JSNode JSNode",
          "package": "language-javascript",
          "partial": "JSCatch",
          "signature": "JSCatch JSNode JSNode JSNode[JSNode]JSNode JSNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econtinue,optional identifier,autosemi\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSContinue",
          "package": "language-javascript",
          "signature": "JSContinue JSNode [JSNode] JSNode",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSContinue\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSContinue\"]"
        },
        "index": {
          "description": "continue optional identifier autosemi",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSContinue",
          "normalized": "JSContinue JSNode[JSNode]JSNode",
          "package": "language-javascript",
          "partial": "JSContinue",
          "signature": "JSContinue JSNode[JSNode]JSNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSContinue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSDecimal",
          "package": "language-javascript",
          "signature": "JSDecimal String",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSDecimal\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSDecimal\"]"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSDecimal",
          "package": "language-javascript",
          "partial": "JSDecimal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSDecimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edefault,colon,stmtlist\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSDefault",
          "package": "language-javascript",
          "signature": "JSDefault JSNode JSNode [JSNode]",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSDefault\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSDefault\"]"
        },
        "index": {
          "description": "default colon stmtlist",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSDefault",
          "normalized": "JSDefault JSNode JSNode[JSNode]",
          "package": "language-javascript",
          "partial": "JSDefault",
          "signature": "JSDefault JSNode JSNode[JSNode]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edo,stmt,while,lb,expr,rb,autosemi\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSDoWhile",
          "package": "language-javascript",
          "signature": "JSDoWhile JSNode JSNode JSNode JSNode JSNode JSNode JSNode",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSDoWhile\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSDoWhile\"]"
        },
        "index": {
          "description": "do stmt while lb expr rb autosemi",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSDoWhile",
          "package": "language-javascript",
          "partial": "JSDo While",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSDoWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecomma\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSElision",
          "package": "language-javascript",
          "signature": "JSElision JSNode",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSElision\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSElision\"]"
        },
        "index": {
          "description": "comma",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSElision",
          "package": "language-javascript",
          "partial": "JSElision",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSElision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexpression components\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSExpression",
          "package": "language-javascript",
          "signature": "JSExpression [JSNode]",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSExpression\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSExpression\"]"
        },
        "index": {
          "description": "expression components",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSExpression",
          "normalized": "JSExpression[JSNode]",
          "package": "language-javascript",
          "partial": "JSExpression",
          "signature": "JSExpression[JSNode]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhat, lhs, op, rhs\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSExpressionBinary",
          "package": "language-javascript",
          "signature": "JSExpressionBinary String [JSNode] JSNode [JSNode]",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSExpressionBinary\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSExpressionBinary\"]"
        },
        "index": {
          "description": "what lhs op rhs",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSExpressionBinary",
          "normalized": "JSExpressionBinary String[JSNode]JSNode[JSNode]",
          "package": "language-javascript",
          "partial": "JSExpression Binary",
          "signature": "JSExpressionBinary String[JSNode]JSNode[JSNode]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSExpressionBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elb,expression,rb\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSExpressionParen",
          "package": "language-javascript",
          "signature": "JSExpressionParen JSNode JSNode JSNode",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSExpressionParen\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSExpressionParen\"]"
        },
        "index": {
          "description": "lb expression rb",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSExpressionParen",
          "package": "language-javascript",
          "partial": "JSExpression Paren",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSExpressionParen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype, expression, operator\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSExpressionPostfix",
          "package": "language-javascript",
          "signature": "JSExpressionPostfix String [JSNode] JSNode",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSExpressionPostfix\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSExpressionPostfix\"]"
        },
        "index": {
          "description": "type expression operator",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSExpressionPostfix",
          "normalized": "JSExpressionPostfix String[JSNode]JSNode",
          "package": "language-javascript",
          "partial": "JSExpression Postfix",
          "signature": "JSExpressionPostfix String[JSNode]JSNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSExpressionPostfix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econd, ?, trueval, :, falseval\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSExpressionTernary",
          "package": "language-javascript",
          "signature": "JSExpressionTernary [JSNode] JSNode [JSNode] JSNode [JSNode]",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSExpressionTernary\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSExpressionTernary\"]"
        },
        "index": {
          "description": "cond trueval falseval",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSExpressionTernary",
          "normalized": "JSExpressionTernary[JSNode]JSNode[JSNode]JSNode[JSNode]",
          "package": "language-javascript",
          "partial": "JSExpression Ternary",
          "signature": "JSExpressionTernary[JSNode]JSNode[JSNode]JSNode[JSNode]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSExpressionTernary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efinally,block\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSFinally",
          "package": "language-javascript",
          "signature": "JSFinally JSNode JSNode",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSFinally\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSFinally\"]"
        },
        "index": {
          "description": "finally block",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSFinally",
          "package": "language-javascript",
          "partial": "JSFinally",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSFinally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efor,lb,expr,semi,expr,semi,expr,rb.stmt\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSFor",
          "package": "language-javascript",
          "signature": "JSFor JSNode JSNode [JSNode] JSNode [JSNode] JSNode [JSNode] JSNode JSNode",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSFor\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSFor\"]"
        },
        "index": {
          "description": "for lb expr semi expr semi expr rb.stmt",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSFor",
          "normalized": "JSFor JSNode JSNode[JSNode]JSNode[JSNode]JSNode[JSNode]JSNode JSNode",
          "package": "language-javascript",
          "partial": "JSFor",
          "signature": "JSFor JSNode JSNode[JSNode]JSNode[JSNode]JSNode[JSNode]JSNode JSNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSFor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efor,lb,expr,in,expr,rb,stmt\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSForIn",
          "package": "language-javascript",
          "signature": "JSForIn JSNode JSNode [JSNode] JSNode JSNode JSNode JSNode",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSForIn\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSForIn\"]"
        },
        "index": {
          "description": "for lb expr in expr rb stmt",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSForIn",
          "normalized": "JSForIn JSNode JSNode[JSNode]JSNode JSNode JSNode JSNode",
          "package": "language-javascript",
          "partial": "JSFor In",
          "signature": "JSForIn JSNode JSNode[JSNode]JSNode JSNode JSNode JSNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSForIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efor,lb,var,vardecl,semi,expr,semi,expr,rb,stmt\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSForVar",
          "package": "language-javascript",
          "signature": "JSForVar JSNode JSNode JSNode [JSNode] JSNode [JSNode] JSNode [JSNode] JSNode JSNode",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSForVar\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSForVar\"]"
        },
        "index": {
          "description": "for lb var vardecl semi expr semi expr rb stmt",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSForVar",
          "normalized": "JSForVar JSNode JSNode JSNode[JSNode]JSNode[JSNode]JSNode[JSNode]JSNode JSNode",
          "package": "language-javascript",
          "partial": "JSFor Var",
          "signature": "JSForVar JSNode JSNode JSNode[JSNode]JSNode[JSNode]JSNode[JSNode]JSNode JSNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSForVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efor,lb,var,vardecl,in,expr,rb,stmt\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSForVarIn",
          "package": "language-javascript",
          "signature": "JSForVarIn JSNode JSNode JSNode JSNode JSNode JSNode JSNode JSNode",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSForVarIn\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSForVarIn\"]"
        },
        "index": {
          "description": "for lb var vardecl in expr rb stmt",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSForVarIn",
          "package": "language-javascript",
          "partial": "JSFor Var In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSForVarIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efn,name, lb,parameter list,rb,block\n | JSFunctionBody [JSNode] -- ^body\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSFunction",
          "package": "language-javascript",
          "signature": "JSFunction JSNode JSNode JSNode [JSNode] JSNode JSNode",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSFunction\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSFunction\"]"
        },
        "index": {
          "description": "fn name lb parameter list rb block JSFunctionBody JSNode body",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSFunction",
          "normalized": "JSFunction JSNode JSNode JSNode[JSNode]JSNode JSNode",
          "package": "language-javascript",
          "partial": "JSFunction",
          "signature": "JSFunction JSNode JSNode JSNode[JSNode]JSNode JSNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efn,[name],lb, parameter list,rb,block`\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSFunctionExpression",
          "package": "language-javascript",
          "signature": "JSFunctionExpression JSNode [JSNode] JSNode [JSNode] JSNode JSNode",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSFunctionExpression\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSFunctionExpression\"]"
        },
        "index": {
          "description": "fn name lb parameter list rb block",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSFunctionExpression",
          "normalized": "JSFunctionExpression JSNode[JSNode]JSNode[JSNode]JSNode JSNode",
          "package": "language-javascript",
          "partial": "JSFunction Expression",
          "signature": "JSFunctionExpression JSNode[JSNode]JSNode[JSNode]JSNode JSNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSFunctionExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSHexInteger",
          "package": "language-javascript",
          "signature": "JSHexInteger String",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSHexInteger\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSHexInteger\"]"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSHexInteger",
          "package": "language-javascript",
          "partial": "JSHex Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSHexInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminals\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSIdentifier",
          "package": "language-javascript",
          "signature": "JSIdentifier String",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSIdentifier\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSIdentifier\"]"
        },
        "index": {
          "description": "Terminals",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSIdentifier",
          "package": "language-javascript",
          "partial": "JSIdentifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eif,(,expr,),stmt,optional rest\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSIf",
          "package": "language-javascript",
          "signature": "JSIf JSNode JSNode JSNode JSNode [JSNode] [JSNode]",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSIf\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSIf\"]"
        },
        "index": {
          "description": "if expr stmt optional rest",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSIf",
          "normalized": "JSIf JSNode JSNode JSNode JSNode[JSNode][JSNode]",
          "package": "language-javascript",
          "partial": "JSIf",
          "signature": "JSIf JSNode JSNode JSNode JSNode[JSNode][JSNode]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eidentifier,colon,stmt\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSLabelled",
          "package": "language-javascript",
          "signature": "JSLabelled JSNode JSNode JSNode",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSLabelled\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSLabelled\"]"
        },
        "index": {
          "description": "identifier colon stmt",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSLabelled",
          "package": "language-javascript",
          "partial": "JSLabelled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSLabelled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSLiteral",
          "package": "language-javascript",
          "signature": "JSLiteral String",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSLiteral\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSLiteral\"]"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSLiteral",
          "package": "language-javascript",
          "partial": "JSLiteral",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efirstpart, dot, name\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSMemberDot",
          "package": "language-javascript",
          "signature": "JSMemberDot [JSNode] JSNode JSNode",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSMemberDot\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSMemberDot\"]"
        },
        "index": {
          "description": "firstpart dot name",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSMemberDot",
          "normalized": "JSMemberDot[JSNode]JSNode JSNode",
          "package": "language-javascript",
          "partial": "JSMember Dot",
          "signature": "JSMemberDot[JSNode]JSNode JSNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSMemberDot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efirstpart, lb, expr, rb\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSMemberSquare",
          "package": "language-javascript",
          "signature": "JSMemberSquare [JSNode] JSNode JSNode JSNode",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSMemberSquare\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSMemberSquare\"]"
        },
        "index": {
          "description": "firstpart lb expr rb",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSMemberSquare",
          "normalized": "JSMemberSquare[JSNode]JSNode JSNode JSNode",
          "package": "language-javascript",
          "partial": "JSMember Square",
          "signature": "JSMemberSquare[JSNode]JSNode JSNode JSNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSMemberSquare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elbrace contents rbrace\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSObjectLiteral",
          "package": "language-javascript",
          "signature": "JSObjectLiteral JSNode [JSNode] JSNode",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSObjectLiteral\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSObjectLiteral\"]"
        },
        "index": {
          "description": "lbrace contents rbrace",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSObjectLiteral",
          "normalized": "JSObjectLiteral JSNode[JSNode]JSNode",
          "package": "language-javascript",
          "partial": "JSObject Literal",
          "signature": "JSObjectLiteral JSNode[JSNode]JSNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSObjectLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSOctal",
          "package": "language-javascript",
          "signature": "JSOctal String",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSOctal\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSOctal\"]"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSOctal",
          "package": "language-javascript",
          "partial": "JSOctal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSOctal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eopnode\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSOperator",
          "package": "language-javascript",
          "signature": "JSOperator JSNode",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSOperator\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSOperator\"]"
        },
        "index": {
          "description": "opnode",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSOperator",
          "package": "language-javascript",
          "partial": "JSOperator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSOperator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(get|set), name, lb, params, rb, block\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSPropertyAccessor",
          "package": "language-javascript",
          "signature": "JSPropertyAccessor JSNode JSNode JSNode [JSNode] JSNode JSNode",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSPropertyAccessor\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSPropertyAccessor\"]"
        },
        "index": {
          "description": "get set name lb params rb block",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSPropertyAccessor",
          "normalized": "JSPropertyAccessor JSNode JSNode JSNode[JSNode]JSNode JSNode",
          "package": "language-javascript",
          "partial": "JSProperty Accessor",
          "signature": "JSPropertyAccessor JSNode JSNode JSNode[JSNode]JSNode JSNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSPropertyAccessor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ename, colon, value\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSPropertyNameandValue",
          "package": "language-javascript",
          "signature": "JSPropertyNameandValue JSNode JSNode [JSNode]",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSPropertyNameandValue\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSPropertyNameandValue\"]"
        },
        "index": {
          "description": "name colon value",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSPropertyNameandValue",
          "normalized": "JSPropertyNameandValue JSNode JSNode[JSNode]",
          "package": "language-javascript",
          "partial": "JSProperty Nameand Value",
          "signature": "JSPropertyNameandValue JSNode JSNode[JSNode]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSPropertyNameandValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSRegEx",
          "package": "language-javascript",
          "signature": "JSRegEx String",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSRegEx\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSRegEx\"]"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSRegEx",
          "package": "language-javascript",
          "partial": "JSReg Ex",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSRegEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturn,optional expression,autosemi\n | JSSourceElements [JSNode] -- ^source elements\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSReturn",
          "package": "language-javascript",
          "signature": "JSReturn JSNode [JSNode] JSNode",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSReturn\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSReturn\"]"
        },
        "index": {
          "description": "return optional expression autosemi JSSourceElements JSNode source elements",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSReturn",
          "normalized": "JSReturn JSNode[JSNode]JSNode",
          "package": "language-javascript",
          "partial": "JSReturn",
          "signature": "JSReturn JSNode[JSNode]JSNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSReturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esource elements\n | JSStatementBlock JSNode JSNode JSNode -- ^lb,block,rb\n | JSStatementList [JSNode] -- ^statements\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSSourceElementsTop",
          "package": "language-javascript",
          "signature": "JSSourceElementsTop [JSNode]",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSSourceElementsTop\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSSourceElementsTop\"]"
        },
        "index": {
          "description": "source elements JSStatementBlock JSNode JSNode JSNode lb block rb JSStatementList JSNode statements",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSSourceElementsTop",
          "normalized": "JSSourceElementsTop[JSNode]",
          "package": "language-javascript",
          "partial": "JSSource Elements Top",
          "signature": "JSSourceElementsTop[JSNode]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSSourceElementsTop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSStringLiteral",
          "package": "language-javascript",
          "signature": "JSStringLiteral Char [Char]",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSStringLiteral\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSStringLiteral\"]"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSStringLiteral",
          "normalized": "JSStringLiteral Char[Char]",
          "package": "language-javascript",
          "partial": "JSString Literal",
          "signature": "JSStringLiteral Char[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSStringLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eswitch,lb,expr,rb,caseblock\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSSwitch",
          "package": "language-javascript",
          "signature": "JSSwitch JSNode JSNode JSNode JSNode JSNode",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSSwitch\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSSwitch\"]"
        },
        "index": {
          "description": "switch lb expr rb caseblock",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSSwitch",
          "package": "language-javascript",
          "partial": "JSSwitch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethrow val\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSThrow",
          "package": "language-javascript",
          "signature": "JSThrow JSNode JSNode",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSThrow\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSThrow\"]"
        },
        "index": {
          "description": "throw val",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSThrow",
          "package": "language-javascript",
          "partial": "JSThrow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSThrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etry,block,rest\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSTry",
          "package": "language-javascript",
          "signature": "JSTry JSNode JSNode [JSNode]",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSTry\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSTry\"]"
        },
        "index": {
          "description": "try block rest",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSTry",
          "normalized": "JSTry JSNode JSNode[JSNode]",
          "package": "language-javascript",
          "partial": "JSTry",
          "signature": "JSTry JSNode JSNode[JSNode]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSTry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype, operator\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSUnary",
          "package": "language-javascript",
          "signature": "JSUnary String JSNode",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSUnary\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSUnary\"]"
        },
        "index": {
          "description": "type operator",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSUnary",
          "package": "language-javascript",
          "partial": "JSUnary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSUnary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eidentifier, optional initializer\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSVarDecl",
          "package": "language-javascript",
          "signature": "JSVarDecl JSNode [JSNode]",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSVarDecl\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSVarDecl\"]"
        },
        "index": {
          "description": "identifier optional initializer",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSVarDecl",
          "normalized": "JSVarDecl JSNode[JSNode]",
          "package": "language-javascript",
          "partial": "JSVar Decl",
          "signature": "JSVarDecl JSNode[JSNode]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSVarDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evar|const, decl, autosemi\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSVariables",
          "package": "language-javascript",
          "signature": "JSVariables JSNode [JSNode] JSNode",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSVariables\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSVariables\"]"
        },
        "index": {
          "description": "var const decl autosemi",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSVariables",
          "normalized": "JSVariables JSNode[JSNode]JSNode",
          "package": "language-javascript",
          "partial": "JSVariables",
          "signature": "JSVariables JSNode[JSNode]JSNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSVariables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewhile,lb,expr,rb,stmt\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSWhile",
          "package": "language-javascript",
          "signature": "JSWhile JSNode JSNode JSNode JSNode JSNode",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSWhile\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSWhile\"]"
        },
        "index": {
          "description": "while lb expr rb stmt",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSWhile",
          "package": "language-javascript",
          "partial": "JSWhile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ewith,lb,expr,rb,stmt list\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "JSWith",
          "package": "language-javascript",
          "signature": "JSWith JSNode JSNode JSNode JSNode [JSNode]",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSWith\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:JSWith\"]"
        },
        "index": {
          "description": "with lb expr rb stmt list",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "JSWith",
          "normalized": "JSWith JSNode JSNode JSNode JSNode[JSNode]",
          "package": "language-javascript",
          "partial": "JSWith",
          "signature": "JSWith JSNode JSNode JSNode JSNode[JSNode]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:JSWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon Terminal node, does not have any position or comment information\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "NN",
          "package": "language-javascript",
          "signature": "NN Node",
          "source": "src/Language-JavaScript-Parser-AST.html#JSNode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:NN\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:NN\"]"
        },
        "index": {
          "description": "Non Terminal node does not have any position or comment information",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "NN",
          "package": "language-javascript",
          "partial": "NN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:NN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminal node, including position and comment/whitespace information\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.AST\",\"Language.JavaScript.Parser\"]",
          "name": "NT",
          "package": "language-javascript",
          "signature": "NT Node TokenPosn [CommentAnnotation]",
          "source": "src/Language-JavaScript-Parser-AST.html#JSNode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:NT\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:NT\"]"
        },
        "index": {
          "description": "Terminal node including position and comment whitespace information",
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "NT",
          "normalized": "NT Node TokenPosn[CommentAnnotation]",
          "package": "language-javascript",
          "partial": "NT",
          "signature": "NT Node TokenPosn[CommentAnnotation]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:NT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.AST",
          "name": "showStripped",
          "package": "language-javascript",
          "signature": "JSNode -\u003e String",
          "source": "src/Language-JavaScript-Parser-AST.html#showStripped",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser AST",
          "module": "Language.JavaScript.Parser.AST",
          "name": "showStripped",
          "normalized": "JSNode-\u003eString",
          "package": "language-javascript",
          "partial": "Stripped",
          "signature": "JSNode-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-AST.html#v:showStripped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Grammar5",
          "name": "Grammar5",
          "package": "language-javascript",
          "source": "src/Language-JavaScript-Parser-Grammar5.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Grammar5",
          "module": "Language.JavaScript.Parser.Grammar5",
          "name": "Grammar5",
          "package": "language-javascript",
          "partial": "Grammar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Grammar5.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Grammar5",
          "name": "fp",
          "package": "language-javascript",
          "signature": "JSNode -\u003e JSNode",
          "source": "src/Language-JavaScript-Parser-Grammar5.html#fp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Grammar5",
          "module": "Language.JavaScript.Parser.Grammar5",
          "name": "fp",
          "normalized": "JSNode-\u003eJSNode",
          "package": "language-javascript",
          "signature": "JSNode-\u003eJSNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Grammar5.html#v:fp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Grammar5",
          "name": "parseLiteral",
          "package": "language-javascript",
          "signature": "Alex JSNode",
          "source": "src/Language-JavaScript-Parser-Grammar5.html#parseLiteral",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Grammar5",
          "module": "Language.JavaScript.Parser.Grammar5",
          "name": "parseLiteral",
          "package": "language-javascript",
          "partial": "Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Grammar5.html#v:parseLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Grammar5",
          "name": "parsePrimaryExpression",
          "package": "language-javascript",
          "signature": "Alex JSNode",
          "source": "src/Language-JavaScript-Parser-Grammar5.html#parsePrimaryExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Grammar5",
          "module": "Language.JavaScript.Parser.Grammar5",
          "name": "parsePrimaryExpression",
          "package": "language-javascript",
          "partial": "Primary Expression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Grammar5.html#v:parsePrimaryExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Grammar5",
          "name": "parseProgram",
          "package": "language-javascript",
          "signature": "Alex JSNode",
          "source": "src/Language-JavaScript-Parser-Grammar5.html#parseProgram",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Grammar5",
          "module": "Language.JavaScript.Parser.Grammar5",
          "name": "parseProgram",
          "package": "language-javascript",
          "partial": "Program",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Grammar5.html#v:parseProgram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Grammar5",
          "name": "parseStatement",
          "package": "language-javascript",
          "signature": "Alex JSNode",
          "source": "src/Language-JavaScript-Parser-Grammar5.html#parseStatement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Grammar5",
          "module": "Language.JavaScript.Parser.Grammar5",
          "name": "parseStatement",
          "package": "language-javascript",
          "partial": "Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Grammar5.html#v:parseStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "Lexer",
          "package": "language-javascript",
          "source": "src/Language-JavaScript-Parser-Lexer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "Lexer",
          "package": "language-javascript",
          "partial": "Lexer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "Alex",
          "package": "language-javascript",
          "source": "src/Language-JavaScript-Parser-Lexer.html#Alex",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "Alex",
          "package": "language-javascript",
          "partial": "Alex",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#t:Alex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "AlexPosn",
          "package": "language-javascript",
          "source": "src/Language-JavaScript-Parser-Lexer.html#AlexPosn",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "AlexPosn",
          "package": "language-javascript",
          "partial": "Alex Posn",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#t:AlexPosn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLexical tokens.\n Each may be annotated with any comment occuring between the prior token and this one\n\u003c/p\u003e",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "Token",
          "package": "language-javascript",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "data"
        },
        "index": {
          "description": "Lexical tokens Each may be annotated with any comment occuring between the prior token and this one",
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "Token",
          "package": "language-javascript",
          "partial": "Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "AlexPn",
          "package": "language-javascript",
          "signature": "AlexPn !Int !Int !Int",
          "source": "src/Language-JavaScript-Parser-Lexer.html#AlexPosn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "AlexPn",
          "package": "language-javascript",
          "partial": "Alex Pn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:AlexPn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "AndToken",
          "package": "language-javascript",
          "signature": "AndToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "AndToken",
          "package": "language-javascript",
          "partial": "And Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:AndToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "AssignToken",
          "package": "language-javascript",
          "signature": "AssignToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "AssignToken",
          "package": "language-javascript",
          "partial": "Assign Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:AssignToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "BitwiseAndToken",
          "package": "language-javascript",
          "signature": "BitwiseAndToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "BitwiseAndToken",
          "package": "language-javascript",
          "partial": "Bitwise And Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:BitwiseAndToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "BitwiseNotToken",
          "package": "language-javascript",
          "signature": "BitwiseNotToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "BitwiseNotToken",
          "package": "language-javascript",
          "partial": "Bitwise Not Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:BitwiseNotToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "BitwiseOrToken",
          "package": "language-javascript",
          "signature": "BitwiseOrToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "BitwiseOrToken",
          "package": "language-javascript",
          "partial": "Bitwise Or Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:BitwiseOrToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "BitwiseXorToken",
          "package": "language-javascript",
          "signature": "BitwiseXorToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "BitwiseXorToken",
          "package": "language-javascript",
          "partial": "Bitwise Xor Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:BitwiseXorToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "BreakToken",
          "package": "language-javascript",
          "signature": "BreakToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "BreakToken",
          "package": "language-javascript",
          "partial": "Break Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:BreakToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "CaseToken",
          "package": "language-javascript",
          "signature": "CaseToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "CaseToken",
          "package": "language-javascript",
          "partial": "Case Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:CaseToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "CatchToken",
          "package": "language-javascript",
          "signature": "CatchToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "CatchToken",
          "package": "language-javascript",
          "partial": "Catch Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:CatchToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "ColonToken",
          "package": "language-javascript",
          "signature": "ColonToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "ColonToken",
          "package": "language-javascript",
          "partial": "Colon Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:ColonToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "CommaToken",
          "package": "language-javascript",
          "signature": "CommaToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "CommaToken",
          "package": "language-javascript",
          "partial": "Comma Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:CommaToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle line comment.\n\u003c/p\u003e",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "CommentToken",
          "package": "language-javascript",
          "signature": "CommentToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Single line comment",
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "CommentToken",
          "package": "language-javascript",
          "partial": "Comment Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:CommentToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "CondcommentEndToken",
          "package": "language-javascript",
          "signature": "CondcommentEndToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "CondcommentEndToken",
          "package": "language-javascript",
          "partial": "Condcomment End Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:CondcommentEndToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "ConstToken",
          "package": "language-javascript",
          "signature": "ConstToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "ConstToken",
          "package": "language-javascript",
          "partial": "Const Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:ConstToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "ContinueToken",
          "package": "language-javascript",
          "signature": "ContinueToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "ContinueToken",
          "package": "language-javascript",
          "partial": "Continue Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:ContinueToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "DebuggerToken",
          "package": "language-javascript",
          "signature": "DebuggerToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "DebuggerToken",
          "package": "language-javascript",
          "partial": "Debugger Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:DebuggerToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral: Decimal\n\u003c/p\u003e",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "DecimalToken",
          "package": "language-javascript",
          "signature": "DecimalToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Literal Decimal",
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "DecimalToken",
          "package": "language-javascript",
          "partial": "Decimal Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:DecimalToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "DecrementToken",
          "package": "language-javascript",
          "signature": "DecrementToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "DecrementToken",
          "package": "language-javascript",
          "partial": "Decrement Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:DecrementToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "DefaultToken",
          "package": "language-javascript",
          "signature": "DefaultToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "DefaultToken",
          "package": "language-javascript",
          "partial": "Default Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:DefaultToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "DeleteToken",
          "package": "language-javascript",
          "signature": "DeleteToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "DeleteToken",
          "package": "language-javascript",
          "partial": "Delete Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:DeleteToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "DivToken",
          "package": "language-javascript",
          "signature": "DivToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "DivToken",
          "package": "language-javascript",
          "partial": "Div Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:DivToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "DoToken",
          "package": "language-javascript",
          "signature": "DoToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "DoToken",
          "package": "language-javascript",
          "partial": "Do Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:DoToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "DotToken",
          "package": "language-javascript",
          "signature": "DotToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "DotToken",
          "package": "language-javascript",
          "partial": "Dot Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:DotToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnd of file\n\u003c/p\u003e",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "EOFToken",
          "package": "language-javascript",
          "signature": "EOFToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "End of file",
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "EOFToken",
          "package": "language-javascript",
          "partial": "EOFToken",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:EOFToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "ElseToken",
          "package": "language-javascript",
          "signature": "ElseToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "ElseToken",
          "package": "language-javascript",
          "partial": "Else Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:ElseToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "EnumToken",
          "package": "language-javascript",
          "signature": "EnumToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "EnumToken",
          "package": "language-javascript",
          "partial": "Enum Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:EnumToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "EqToken",
          "package": "language-javascript",
          "signature": "EqToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "EqToken",
          "package": "language-javascript",
          "partial": "Eq Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:EqToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "FalseToken",
          "package": "language-javascript",
          "signature": "FalseToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "FalseToken",
          "package": "language-javascript",
          "partial": "False Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:FalseToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "FinallyToken",
          "package": "language-javascript",
          "signature": "FinallyToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "FinallyToken",
          "package": "language-javascript",
          "partial": "Finally Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:FinallyToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "ForToken",
          "package": "language-javascript",
          "signature": "ForToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "ForToken",
          "package": "language-javascript",
          "partial": "For Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:ForToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "FunctionToken",
          "package": "language-javascript",
          "signature": "FunctionToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "FunctionToken",
          "package": "language-javascript",
          "partial": "Function Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:FunctionToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "FutureToken",
          "package": "language-javascript",
          "signature": "FutureToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "FutureToken",
          "package": "language-javascript",
          "partial": "Future Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:FutureToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "GeToken",
          "package": "language-javascript",
          "signature": "GeToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "GeToken",
          "package": "language-javascript",
          "partial": "Ge Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:GeToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "GetToken",
          "package": "language-javascript",
          "signature": "GetToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "GetToken",
          "package": "language-javascript",
          "partial": "Get Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:GetToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "GtToken",
          "package": "language-javascript",
          "signature": "GtToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "GtToken",
          "package": "language-javascript",
          "partial": "Gt Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:GtToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral: Hexadecimal Integer\n\u003c/p\u003e",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "HexIntegerToken",
          "package": "language-javascript",
          "signature": "HexIntegerToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Literal Hexadecimal Integer",
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "HexIntegerToken",
          "package": "language-javascript",
          "partial": "Hex Integer Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:HexIntegerToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "HookToken",
          "package": "language-javascript",
          "signature": "HookToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "HookToken",
          "package": "language-javascript",
          "partial": "Hook Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:HookToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentifier.\n\u003c/p\u003e",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "IdentifierToken",
          "package": "language-javascript",
          "signature": "IdentifierToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Identifier",
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "IdentifierToken",
          "package": "language-javascript",
          "partial": "Identifier Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:IdentifierToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "IfToken",
          "package": "language-javascript",
          "signature": "IfToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "IfToken",
          "package": "language-javascript",
          "partial": "If Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:IfToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "InToken",
          "package": "language-javascript",
          "signature": "InToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "InToken",
          "package": "language-javascript",
          "partial": "In Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:InToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "IncrementToken",
          "package": "language-javascript",
          "signature": "IncrementToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "IncrementToken",
          "package": "language-javascript",
          "partial": "Increment Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:IncrementToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "InstanceofToken",
          "package": "language-javascript",
          "signature": "InstanceofToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "InstanceofToken",
          "package": "language-javascript",
          "partial": "Instanceof Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:InstanceofToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "LeToken",
          "package": "language-javascript",
          "signature": "LeToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "LeToken",
          "package": "language-javascript",
          "partial": "Le Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:LeToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "LeftBracketToken",
          "package": "language-javascript",
          "signature": "LeftBracketToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "LeftBracketToken",
          "package": "language-javascript",
          "partial": "Left Bracket Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:LeftBracketToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "LeftCurlyToken",
          "package": "language-javascript",
          "signature": "LeftCurlyToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "LeftCurlyToken",
          "package": "language-javascript",
          "partial": "Left Curly Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:LeftCurlyToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "LeftParenToken",
          "package": "language-javascript",
          "signature": "LeftParenToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "LeftParenToken",
          "package": "language-javascript",
          "partial": "Left Paren Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:LeftParenToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "LshToken",
          "package": "language-javascript",
          "signature": "LshToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "LshToken",
          "package": "language-javascript",
          "partial": "Lsh Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:LshToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "LtToken",
          "package": "language-javascript",
          "signature": "LtToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "LtToken",
          "package": "language-javascript",
          "partial": "Lt Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:LtToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "MinusToken",
          "package": "language-javascript",
          "signature": "MinusToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "MinusToken",
          "package": "language-javascript",
          "partial": "Minus Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:MinusToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "ModToken",
          "package": "language-javascript",
          "signature": "ModToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "ModToken",
          "package": "language-javascript",
          "partial": "Mod Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:ModToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "MulToken",
          "package": "language-javascript",
          "signature": "MulToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "MulToken",
          "package": "language-javascript",
          "partial": "Mul Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:MulToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "NeToken",
          "package": "language-javascript",
          "signature": "NeToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "NeToken",
          "package": "language-javascript",
          "partial": "Ne Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:NeToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "NewToken",
          "package": "language-javascript",
          "signature": "NewToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "NewToken",
          "package": "language-javascript",
          "partial": "New Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:NewToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "NotToken",
          "package": "language-javascript",
          "signature": "NotToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "NotToken",
          "package": "language-javascript",
          "partial": "Not Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:NotToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "NullToken",
          "package": "language-javascript",
          "signature": "NullToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "NullToken",
          "package": "language-javascript",
          "partial": "Null Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:NullToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral: Octal Integer\n\u003c/p\u003e",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "OctalToken",
          "package": "language-javascript",
          "signature": "OctalToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Literal Octal Integer",
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "OctalToken",
          "package": "language-javascript",
          "partial": "Octal Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:OctalToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "OrToken",
          "package": "language-javascript",
          "signature": "OrToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "OrToken",
          "package": "language-javascript",
          "partial": "Or Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:OrToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "PlusToken",
          "package": "language-javascript",
          "signature": "PlusToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "PlusToken",
          "package": "language-javascript",
          "partial": "Plus Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:PlusToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral: Regular Expression\n\u003c/p\u003e",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "RegExToken",
          "package": "language-javascript",
          "signature": "RegExToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Literal Regular Expression",
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "RegExToken",
          "package": "language-javascript",
          "partial": "Reg Ex Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:RegExToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "ReturnToken",
          "package": "language-javascript",
          "signature": "ReturnToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "ReturnToken",
          "package": "language-javascript",
          "partial": "Return Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:ReturnToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "RightBracketToken",
          "package": "language-javascript",
          "signature": "RightBracketToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "RightBracketToken",
          "package": "language-javascript",
          "partial": "Right Bracket Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:RightBracketToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "RightCurlyToken",
          "package": "language-javascript",
          "signature": "RightCurlyToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "RightCurlyToken",
          "package": "language-javascript",
          "partial": "Right Curly Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:RightCurlyToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "RightParenToken",
          "package": "language-javascript",
          "signature": "RightParenToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "RightParenToken",
          "package": "language-javascript",
          "partial": "Right Paren Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:RightParenToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "RshToken",
          "package": "language-javascript",
          "signature": "RshToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "RshToken",
          "package": "language-javascript",
          "partial": "Rsh Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:RshToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "SemiColonToken",
          "package": "language-javascript",
          "signature": "SemiColonToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "SemiColonToken",
          "package": "language-javascript",
          "partial": "Semi Colon Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:SemiColonToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "SetToken",
          "package": "language-javascript",
          "signature": "SetToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "SetToken",
          "package": "language-javascript",
          "partial": "Set Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:SetToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "SimpleAssignToken",
          "package": "language-javascript",
          "signature": "SimpleAssignToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "SimpleAssignToken",
          "package": "language-javascript",
          "partial": "Simple Assign Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:SimpleAssignToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "StrictEqToken",
          "package": "language-javascript",
          "signature": "StrictEqToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "StrictEqToken",
          "package": "language-javascript",
          "partial": "Strict Eq Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:StrictEqToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "StrictNeToken",
          "package": "language-javascript",
          "signature": "StrictNeToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "StrictNeToken",
          "package": "language-javascript",
          "partial": "Strict Ne Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:StrictNeToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLiteral: string, delimited by either single or double quotes\n\u003c/p\u003e",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "StringToken",
          "package": "language-javascript",
          "signature": "StringToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Literal string delimited by either single or double quotes",
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "StringToken",
          "package": "language-javascript",
          "partial": "String Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:StringToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "SwitchToken",
          "package": "language-javascript",
          "signature": "SwitchToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "SwitchToken",
          "package": "language-javascript",
          "partial": "Switch Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:SwitchToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStuff between last JS and EOF\n\u003c/p\u003e",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "TailToken",
          "package": "language-javascript",
          "signature": "TailToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Stuff between last JS and EOF",
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "TailToken",
          "package": "language-javascript",
          "partial": "Tail Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:TailToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "ThisToken",
          "package": "language-javascript",
          "signature": "ThisToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "ThisToken",
          "package": "language-javascript",
          "partial": "This Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:ThisToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "ThrowToken",
          "package": "language-javascript",
          "signature": "ThrowToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "ThrowToken",
          "package": "language-javascript",
          "partial": "Throw Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:ThrowToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "TrueToken",
          "package": "language-javascript",
          "signature": "TrueToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "TrueToken",
          "package": "language-javascript",
          "partial": "True Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:TrueToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "TryToken",
          "package": "language-javascript",
          "signature": "TryToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "TryToken",
          "package": "language-javascript",
          "partial": "Try Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:TryToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "TypeofToken",
          "package": "language-javascript",
          "signature": "TypeofToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "TypeofToken",
          "package": "language-javascript",
          "partial": "Typeof Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:TypeofToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "UrshToken",
          "package": "language-javascript",
          "signature": "UrshToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "UrshToken",
          "package": "language-javascript",
          "partial": "Ursh Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:UrshToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "VarToken",
          "package": "language-javascript",
          "signature": "VarToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "VarToken",
          "package": "language-javascript",
          "partial": "Var Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:VarToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "VoidToken",
          "package": "language-javascript",
          "signature": "VoidToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "VoidToken",
          "package": "language-javascript",
          "partial": "Void Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:VoidToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "WhileToken",
          "package": "language-javascript",
          "signature": "WhileToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "WhileToken",
          "package": "language-javascript",
          "partial": "While Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:WhileToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "WithToken",
          "package": "language-javascript",
          "signature": "WithToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "WithToken",
          "package": "language-javascript",
          "partial": "With Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:WithToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhite space, for preservation.\n\u003c/p\u003e",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "WsToken",
          "package": "language-javascript",
          "signature": "WsToken",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "description": "White space for preservation",
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "WsToken",
          "package": "language-javascript",
          "partial": "Ws Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:WsToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "alexError",
          "package": "language-javascript",
          "signature": "String -\u003e Alex a",
          "source": "src/Language-JavaScript-Parser-Lexer.html#alexError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "alexError",
          "normalized": "String-\u003eAlex a",
          "package": "language-javascript",
          "partial": "Error",
          "signature": "String-\u003eAlex a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:alexError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "lexCont",
          "package": "language-javascript",
          "signature": "(Token -\u003e Alex b) -\u003e Alex b",
          "source": "src/Language-JavaScript-Parser-Lexer.html#lexCont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "lexCont",
          "normalized": "(Token-\u003eAlex a)-\u003eAlex a",
          "package": "language-javascript",
          "partial": "Cont",
          "signature": "(Token-\u003eAlex b)-\u003eAlex b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:lexCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "runAlex",
          "package": "language-javascript",
          "signature": "String -\u003e Alex a -\u003e Either String a",
          "source": "src/Language-JavaScript-Parser-Lexer.html#runAlex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "runAlex",
          "normalized": "String-\u003eAlex a-\u003eEither String a",
          "package": "language-javascript",
          "partial": "Alex",
          "signature": "String-\u003eAlex a-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:runAlex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "token_comment",
          "package": "language-javascript",
          "signature": "[CommentAnnotation]",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "token_comment",
          "normalized": "[CommentAnnotation]",
          "package": "language-javascript",
          "signature": "[CommentAnnotation]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:token_comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "token_delimiter",
          "package": "language-javascript",
          "signature": "Char",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "token_delimiter",
          "package": "language-javascript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:token_delimiter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "token_literal",
          "package": "language-javascript",
          "signature": "String",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "token_literal",
          "package": "language-javascript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:token_literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "token_span",
          "package": "language-javascript",
          "signature": "TokenPosn",
          "source": "src/Language-JavaScript-Parser-Token.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Lexer",
          "module": "Language.JavaScript.Parser.Lexer",
          "name": "token_span",
          "package": "language-javascript",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Lexer.html#v:token_span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.Parser",
          "name": "Parser",
          "package": "language-javascript",
          "source": "src/Language-JavaScript-Parser-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Parser",
          "module": "Language.JavaScript.Parser.Parser",
          "name": "Parser",
          "package": "language-javascript",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse one compound statement, or a sequence of simple statements.\n Generally used for interactive input, such as from the command line of an interpreter.\n Return comments in addition to the parsed statements.\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.Parser\",\"Language.JavaScript.Parser\"]",
          "name": "parse",
          "package": "language-javascript",
          "signature": "String-\u003e String-\u003e Either String JSNode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Parser.html#v:parse\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:parse\"]"
        },
        "index": {
          "description": "Parse one compound statement or sequence of simple statements Generally used for interactive input such as from the command line of an interpreter Return comments in addition to the parsed statements",
          "hierarchy": "Language JavaScript Parser Parser",
          "module": "Language.JavaScript.Parser.Parser",
          "name": "parse",
          "normalized": "String-\u003eString-\u003eEither String JSNode",
          "package": "language-javascript",
          "signature": "String-\u003eString-\u003eEither String JSNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Parser.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the given file.\n For UTF-8 support, make sure your locale is set such that\n \u003ca\u003eSystem.IO.localeEncoding\u003c/a\u003e returns \u003ca\u003eutf8\u003c/a\u003e\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.Parser\",\"Language.JavaScript.Parser\"]",
          "name": "parseFile",
          "package": "language-javascript",
          "signature": "FilePath -\u003e IO JSNode",
          "source": "src/Language-JavaScript-Parser-Parser.html#parseFile",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Parser.html#v:parseFile\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:parseFile\"]"
        },
        "index": {
          "description": "Parse the given file For UTF-8 support make sure your locale is set such that System.IO.localeEncoding returns utf8",
          "hierarchy": "Language JavaScript Parser Parser",
          "module": "Language.JavaScript.Parser.Parser",
          "name": "parseFile",
          "normalized": "FilePath-\u003eIO JSNode",
          "package": "language-javascript",
          "partial": "File",
          "signature": "FilePath-\u003eIO JSNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Parser.html#v:parseFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the given file, explicitly setting the encoding to UTF8\n when reading it\n\u003c/p\u003e",
          "module": "[\"Language.JavaScript.Parser.Parser\",\"Language.JavaScript.Parser\"]",
          "name": "parseFileUtf8",
          "package": "language-javascript",
          "signature": "FilePath -\u003e IO JSNode",
          "source": "src/Language-JavaScript-Parser-Parser.html#parseFileUtf8",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Parser.html#v:parseFileUtf8\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:parseFileUtf8\"]"
        },
        "index": {
          "description": "Parse the given file explicitly setting the encoding to UTF8 when reading it",
          "hierarchy": "Language JavaScript Parser Parser",
          "module": "Language.JavaScript.Parser.Parser",
          "name": "parseFileUtf8",
          "normalized": "FilePath-\u003eIO JSNode",
          "package": "language-javascript",
          "partial": "File Utf",
          "signature": "FilePath-\u003eIO JSNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Parser.html#v:parseFileUtf8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse one compound statement, or a sequence of simple statements.\n Generally used for interactive input, such as from the command line of an interpreter.\n Return comments in addition to the parsed statements.\n\u003c/p\u003e",
          "module": "Language.JavaScript.Parser.Parser",
          "name": "parseUsing",
          "package": "language-javascript",
          "signature": "Alex JSNode-\u003e String-\u003e String-\u003e Either String JSNode",
          "type": "function"
        },
        "index": {
          "description": "Parse one compound statement or sequence of simple statements Generally used for interactive input such as from the command line of an interpreter Return comments in addition to the parsed statements",
          "hierarchy": "Language JavaScript Parser Parser",
          "module": "Language.JavaScript.Parser.Parser",
          "name": "parseUsing",
          "normalized": "Alex JSNode-\u003eString-\u003eString-\u003eEither String JSNode",
          "package": "language-javascript",
          "partial": "Using",
          "signature": "Alex JSNode-\u003eString-\u003eString-\u003eEither String JSNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Parser.html#v:parseUsing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.JavaScript.Parser.Parser\",\"Language.JavaScript.Parser\"]",
          "name": "readJs",
          "package": "language-javascript",
          "signature": "String -\u003e JSNode",
          "source": "src/Language-JavaScript-Parser-Parser.html#readJs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Parser.html#v:readJs\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:readJs\"]"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Parser",
          "module": "Language.JavaScript.Parser.Parser",
          "name": "readJs",
          "normalized": "String-\u003eJSNode",
          "package": "language-javascript",
          "partial": "Js",
          "signature": "String-\u003eJSNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Parser.html#v:readJs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.JavaScript.Parser.Parser\",\"Language.JavaScript.Parser\"]",
          "name": "showStripped",
          "package": "language-javascript",
          "signature": "JSNode -\u003e String",
          "source": "src/Language-JavaScript-Parser-Parser.html#showStripped",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Parser.html#v:showStripped\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:showStripped\"]"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Parser",
          "module": "Language.JavaScript.Parser.Parser",
          "name": "showStripped",
          "normalized": "JSNode-\u003eString",
          "package": "language-javascript",
          "partial": "Stripped",
          "signature": "JSNode-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Parser.html#v:showStripped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.JavaScript.Parser.Parser\",\"Language.JavaScript.Parser\"]",
          "name": "showStrippedMaybe",
          "package": "language-javascript",
          "signature": "Either a JSNode -\u003e String",
          "source": "src/Language-JavaScript-Parser-Parser.html#showStrippedMaybe",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Parser.html#v:showStrippedMaybe\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:showStrippedMaybe\"]"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser Parser",
          "module": "Language.JavaScript.Parser.Parser",
          "name": "showStrippedMaybe",
          "normalized": "Either a JSNode-\u003eString",
          "package": "language-javascript",
          "partial": "Stripped Maybe",
          "signature": "Either a JSNode-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-Parser.html#v:showStrippedMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser.SrcLocation",
          "name": "SrcLocation",
          "package": "language-javascript",
          "source": "src/Language-JavaScript-Parser-SrcLocation.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser SrcLocation",
          "module": "Language.JavaScript.Parser.SrcLocation",
          "name": "SrcLocation",
          "package": "language-javascript",
          "partial": "Src Location",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-SrcLocation.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTokenPosn\u003c/a\u003e\u003c/code\u003e records the location of a token in the input text.  It has three\n fields: the address (number of characters preceding the token), line number\n and column of a token within the file.\n Note: The lexer assumes the usual eight character tab stops.\n\u003c/p\u003e",
          "module": "Language.JavaScript.Parser.SrcLocation",
          "name": "TokenPosn",
          "package": "language-javascript",
          "source": "src/Language-JavaScript-Parser-SrcLocation.html#TokenPosn",
          "type": "data"
        },
        "index": {
          "description": "TokenPosn records the location of token in the input text It has three fields the address number of characters preceding the token line number and column of token within the file Note The lexer assumes the usual eight character tab stops",
          "hierarchy": "Language JavaScript Parser SrcLocation",
          "module": "Language.JavaScript.Parser.SrcLocation",
          "name": "TokenPosn",
          "package": "language-javascript",
          "partial": "Token Posn",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-SrcLocation.html#t:TokenPosn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.JavaScript.Parser.SrcLocation\",\"Language.JavaScript.Parser\"]",
          "name": "TokenPn",
          "package": "language-javascript",
          "signature": "TokenPn !Int !Int !Int",
          "source": "src/Language-JavaScript-Parser-SrcLocation.html#TokenPosn",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-SrcLocation.html#v:TokenPn\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:TokenPn\"]"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser SrcLocation",
          "module": "Language.JavaScript.Parser.SrcLocation",
          "name": "TokenPn",
          "package": "language-javascript",
          "partial": "Token Pn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-SrcLocation.html#v:TokenPn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.JavaScript.Parser.SrcLocation\",\"Language.JavaScript.Parser\"]",
          "name": "tokenPosnEmpty",
          "package": "language-javascript",
          "signature": "TokenPosn",
          "source": "src/Language-JavaScript-Parser-SrcLocation.html#tokenPosnEmpty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-SrcLocation.html#v:tokenPosnEmpty\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:tokenPosnEmpty\"]"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser SrcLocation",
          "module": "Language.JavaScript.Parser.SrcLocation",
          "name": "tokenPosnEmpty",
          "package": "language-javascript",
          "partial": "Posn Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser-SrcLocation.html#v:tokenPosnEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser",
          "name": "Parser",
          "package": "language-javascript",
          "source": "src/Language-JavaScript-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser",
          "module": "Language.JavaScript.Parser",
          "name": "Parser",
          "package": "language-javascript",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser",
          "name": "CommentAnnotation",
          "package": "language-javascript",
          "source": "src/Language-JavaScript-Parser-Token.html#CommentAnnotation",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser",
          "module": "Language.JavaScript.Parser",
          "name": "CommentAnnotation",
          "package": "language-javascript",
          "partial": "Comment Annotation",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#t:CommentAnnotation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe JSNode is the building block of the AST.\n Each has a syntactic part \u003ccode\u003e\u003ca\u003eNode\u003c/a\u003e\u003c/code\u003e. In addition, the leaf elements\n (terminals) have a position \u003ccode\u003e\u003ca\u003eTokenPosn\u003c/a\u003e\u003c/code\u003e, as well as an array of comments\n and/or whitespace that was collected while parsing.\n\u003c/p\u003e",
          "module": "Language.JavaScript.Parser",
          "name": "JSNode",
          "package": "language-javascript",
          "source": "src/Language-JavaScript-Parser-AST.html#JSNode",
          "type": "data"
        },
        "index": {
          "description": "The JSNode is the building block of the AST Each has syntactic part Node In addition the leaf elements terminals have position TokenPosn as well as an array of comments and or whitespace that was collected while parsing",
          "hierarchy": "Language JavaScript Parser",
          "module": "Language.JavaScript.Parser",
          "name": "JSNode",
          "package": "language-javascript",
          "partial": "JSNode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#t:JSNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser",
          "name": "Node",
          "package": "language-javascript",
          "source": "src/Language-JavaScript-Parser-AST.html#Node",
          "type": "data"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser",
          "module": "Language.JavaScript.Parser",
          "name": "Node",
          "package": "language-javascript",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTokenPosn\u003c/a\u003e\u003c/code\u003e records the location of a token in the input text.  It has three\n fields: the address (number of characters preceding the token), line number\n and column of a token within the file.\n Note: The lexer assumes the usual eight character tab stops.\n\u003c/p\u003e",
          "module": "Language.JavaScript.Parser",
          "name": "TokenPosn",
          "package": "language-javascript",
          "source": "src/Language-JavaScript-Parser-SrcLocation.html#TokenPosn",
          "type": "data"
        },
        "index": {
          "description": "TokenPosn records the location of token in the input text It has three fields the address number of characters preceding the token line number and column of token within the file Note The lexer assumes the usual eight character tab stops",
          "hierarchy": "Language JavaScript Parser",
          "module": "Language.JavaScript.Parser",
          "name": "TokenPosn",
          "package": "language-javascript",
          "partial": "Token Posn",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#t:TokenPosn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser",
          "name": "CommentA",
          "package": "language-javascript",
          "signature": "CommentA TokenPosn String",
          "source": "src/Language-JavaScript-Parser-Token.html#CommentAnnotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser",
          "module": "Language.JavaScript.Parser",
          "name": "CommentA",
          "package": "language-javascript",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:CommentA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser",
          "name": "NoComment",
          "package": "language-javascript",
          "signature": "NoComment",
          "source": "src/Language-JavaScript-Parser-Token.html#CommentAnnotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser",
          "module": "Language.JavaScript.Parser",
          "name": "NoComment",
          "package": "language-javascript",
          "partial": "No Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:NoComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Parser",
          "name": "WhiteSpace",
          "package": "language-javascript",
          "signature": "WhiteSpace TokenPosn String",
          "source": "src/Language-JavaScript-Parser-Token.html#CommentAnnotation",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser",
          "module": "Language.JavaScript.Parser",
          "name": "WhiteSpace",
          "package": "language-javascript",
          "partial": "White Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:WhiteSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.JavaScript.Parser\",\"Language.JavaScript.Pretty.Printer\"]",
          "name": "renderJS",
          "package": "language-javascript",
          "signature": "JSNode -\u003e Builder",
          "source": "src/Language-JavaScript-Pretty-Printer.html#renderJS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:renderJS\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Pretty-Printer.html#v:renderJS\"]"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser",
          "module": "Language.JavaScript.Parser",
          "name": "renderJS",
          "normalized": "JSNode-\u003eBuilder",
          "package": "language-javascript",
          "partial": "JS",
          "signature": "JSNode-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:renderJS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Language.JavaScript.Parser\",\"Language.JavaScript.Pretty.Printer\"]",
          "name": "renderToString",
          "package": "language-javascript",
          "signature": "JSNode -\u003e String",
          "source": "src/Language-JavaScript-Pretty-Printer.html#renderToString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:renderToString\",\"http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Pretty-Printer.html#v:renderToString\"]"
        },
        "index": {
          "hierarchy": "Language JavaScript Parser",
          "module": "Language.JavaScript.Parser",
          "name": "renderToString",
          "normalized": "JSNode-\u003eString",
          "package": "language-javascript",
          "partial": "To String",
          "signature": "JSNode-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Parser.html#v:renderToString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.JavaScript.Pretty.Printer",
          "name": "Printer",
          "package": "language-javascript",
          "source": "src/Language-JavaScript-Pretty-Printer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language JavaScript Pretty Printer",
          "module": "Language.JavaScript.Pretty.Printer",
          "name": "Printer",
          "package": "language-javascript",
          "partial": "Printer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/language-javascript/docs/Language-JavaScript-Pretty-Printer.html#"
      }
    }
  ]
]