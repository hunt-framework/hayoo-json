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
        "word": "WebBits"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Environment",
          "name": "Environment",
          "package": "WebBits",
          "source": "src/BrownPLT-JavaScript-Environment.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Environment",
          "module": "BrownPLT.JavaScript.Environment",
          "name": "Environment",
          "package": "WebBits",
          "partial": "Environment",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Environment.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe statically-determinate lexical structure of a JavaScript program.\n\u003c/p\u003e",
          "module": "BrownPLT.JavaScript.Environment",
          "name": "EnvTree",
          "package": "WebBits",
          "source": "src/BrownPLT-JavaScript-Environment.html#EnvTree",
          "type": "data"
        },
        "index": {
          "description": "The statically-determinate lexical structure of JavaScript program",
          "hierarchy": "BrownPLT JavaScript Environment",
          "module": "BrownPLT.JavaScript.Environment",
          "name": "EnvTree",
          "package": "WebBits",
          "partial": "Env Tree",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Environment.html#t:EnvTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Environment",
          "name": "EnvTree",
          "package": "WebBits",
          "signature": "EnvTree (Map String SourcePos) [EnvTree]",
          "source": "src/BrownPLT-JavaScript-Environment.html#EnvTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Environment",
          "module": "BrownPLT.JavaScript.Environment",
          "name": "EnvTree",
          "normalized": "EnvTree(Map String SourcePos)[EnvTree]",
          "package": "WebBits",
          "partial": "Env Tree",
          "signature": "EnvTree(Map String SourcePos)[EnvTree]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Environment.html#v:EnvTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Environment",
          "name": "env",
          "package": "WebBits",
          "signature": "Map String SourcePos-\u003e [Statement SourcePos]-\u003e (EnvTree, Map String SourcePos)",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Environment",
          "module": "BrownPLT.JavaScript.Environment",
          "name": "env",
          "normalized": "Map String SourcePos-\u003e[Statement SourcePos]-\u003e(EnvTree,Map String SourcePos)",
          "package": "WebBits",
          "signature": "Map String SourcePos-\u003e[Statement SourcePos]-\u003e(EnvTree,Map String SourcePos)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Environment.html#v:env"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Environment",
          "name": "localVars",
          "package": "WebBits",
          "signature": "[Statement SourcePos] -\u003e [(String, SourcePos)]",
          "source": "src/BrownPLT-JavaScript-Environment.html#localVars",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Environment",
          "module": "BrownPLT.JavaScript.Environment",
          "name": "localVars",
          "normalized": "[Statement SourcePos]-\u003e[(String,SourcePos)]",
          "package": "WebBits",
          "partial": "Vars",
          "signature": "[Statement SourcePos]-\u003e[(String,SourcePos)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Environment.html#v:localVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "Lexer",
          "package": "WebBits",
          "source": "src/BrownPLT-JavaScript-Lexer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Lexer",
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "Lexer",
          "package": "WebBits",
          "partial": "Lexer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Lexer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "braces",
          "package": "WebBits",
          "signature": "ParsecT String u Identity a -\u003e ParsecT String u Identity a",
          "source": "src/BrownPLT-JavaScript-Lexer.html#braces",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Lexer",
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "braces",
          "normalized": "ParsecT String a Identity b-\u003eParsecT String a Identity b",
          "package": "WebBits",
          "signature": "ParsecT String u Identity a-\u003eParsecT String u Identity a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Lexer.html#v:braces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "brackets",
          "package": "WebBits",
          "signature": "ParsecT String u Identity a -\u003e ParsecT String u Identity a",
          "source": "src/BrownPLT-JavaScript-Lexer.html#brackets",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Lexer",
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "brackets",
          "normalized": "ParsecT String a Identity b-\u003eParsecT String a Identity b",
          "package": "WebBits",
          "signature": "ParsecT String u Identity a-\u003eParsecT String u Identity a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Lexer.html#v:brackets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "charLiteral",
          "package": "WebBits",
          "signature": "ParsecT String u Identity Char",
          "source": "src/BrownPLT-JavaScript-Lexer.html#charLiteral",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Lexer",
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "charLiteral",
          "package": "WebBits",
          "partial": "Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Lexer.html#v:charLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "colon",
          "package": "WebBits",
          "signature": "ParsecT String u Identity String",
          "source": "src/BrownPLT-JavaScript-Lexer.html#colon",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Lexer",
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "colon",
          "package": "WebBits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Lexer.html#v:colon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "comma",
          "package": "WebBits",
          "signature": "ParsecT String u Identity String",
          "source": "src/BrownPLT-JavaScript-Lexer.html#comma",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Lexer",
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "comma",
          "package": "WebBits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Lexer.html#v:comma"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "decimal",
          "package": "WebBits",
          "signature": "ParsecT String u Identity Integer",
          "source": "src/BrownPLT-JavaScript-Lexer.html#decimal",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Lexer",
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "decimal",
          "package": "WebBits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Lexer.html#v:decimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "dot",
          "package": "WebBits",
          "signature": "ParsecT String u Identity String",
          "source": "src/BrownPLT-JavaScript-Lexer.html#dot",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Lexer",
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "dot",
          "package": "WebBits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Lexer.html#v:dot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "float",
          "package": "WebBits",
          "signature": "ParsecT String u Identity Double",
          "source": "src/BrownPLT-JavaScript-Lexer.html#float",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Lexer",
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "float",
          "package": "WebBits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Lexer.html#v:float"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "hexadecimal",
          "package": "WebBits",
          "signature": "ParsecT String u Identity Integer",
          "source": "src/BrownPLT-JavaScript-Lexer.html#hexadecimal",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Lexer",
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "hexadecimal",
          "package": "WebBits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Lexer.html#v:hexadecimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "identifier",
          "package": "WebBits",
          "signature": "ParsecT String u Identity String",
          "source": "src/BrownPLT-JavaScript-Lexer.html#identifier",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Lexer",
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "identifier",
          "package": "WebBits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Lexer.html#v:identifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "identifierStart",
          "package": "WebBits",
          "signature": "ParsecT [Char] u Identity Char",
          "source": "src/BrownPLT-JavaScript-Lexer.html#identifierStart",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Lexer",
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "identifierStart",
          "normalized": "ParsecT[Char]a Identity Char",
          "package": "WebBits",
          "partial": "Start",
          "signature": "ParsecT[Char]u Identity Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Lexer.html#v:identifierStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "integer",
          "package": "WebBits",
          "signature": "ParsecT String u Identity Integer",
          "source": "src/BrownPLT-JavaScript-Lexer.html#integer",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Lexer",
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "integer",
          "package": "WebBits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Lexer.html#v:integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "lexeme",
          "package": "WebBits",
          "signature": "ParsecT String u Identity a -\u003e ParsecT String u Identity a",
          "source": "src/BrownPLT-JavaScript-Lexer.html#lexeme",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Lexer",
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "lexeme",
          "normalized": "ParsecT String a Identity b-\u003eParsecT String a Identity b",
          "package": "WebBits",
          "signature": "ParsecT String u Identity a-\u003eParsecT String u Identity a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Lexer.html#v:lexeme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "natural",
          "package": "WebBits",
          "signature": "ParsecT String u Identity Integer",
          "source": "src/BrownPLT-JavaScript-Lexer.html#natural",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Lexer",
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "natural",
          "package": "WebBits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Lexer.html#v:natural"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "naturalOrFloat",
          "package": "WebBits",
          "signature": "ParsecT String u Identity (Either Integer Double)",
          "source": "src/BrownPLT-JavaScript-Lexer.html#naturalOrFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Lexer",
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "naturalOrFloat",
          "package": "WebBits",
          "partial": "Or Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Lexer.html#v:naturalOrFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "octal",
          "package": "WebBits",
          "signature": "ParsecT String u Identity Integer",
          "source": "src/BrownPLT-JavaScript-Lexer.html#octal",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Lexer",
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "octal",
          "package": "WebBits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Lexer.html#v:octal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "operator",
          "package": "WebBits",
          "signature": "ParsecT String u Identity String",
          "source": "src/BrownPLT-JavaScript-Lexer.html#operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Lexer",
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "operator",
          "package": "WebBits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Lexer.html#v:operator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "parens",
          "package": "WebBits",
          "signature": "ParsecT String u Identity a -\u003e ParsecT String u Identity a",
          "source": "src/BrownPLT-JavaScript-Lexer.html#parens",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Lexer",
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "parens",
          "normalized": "ParsecT String a Identity b-\u003eParsecT String a Identity b",
          "package": "WebBits",
          "signature": "ParsecT String u Identity a-\u003eParsecT String u Identity a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Lexer.html#v:parens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "reserved",
          "package": "WebBits",
          "signature": "String -\u003e ParsecT String u Identity ()",
          "source": "src/BrownPLT-JavaScript-Lexer.html#reserved",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Lexer",
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "reserved",
          "normalized": "String-\u003eParsecT String a Identity()",
          "package": "WebBits",
          "signature": "String-\u003eParsecT String u Identity()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Lexer.html#v:reserved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "reservedOp",
          "package": "WebBits",
          "signature": "String -\u003e ParsecT String u Identity ()",
          "source": "src/BrownPLT-JavaScript-Lexer.html#reservedOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Lexer",
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "reservedOp",
          "normalized": "String-\u003eParsecT String a Identity()",
          "package": "WebBits",
          "partial": "Op",
          "signature": "String-\u003eParsecT String u Identity()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Lexer.html#v:reservedOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "semi",
          "package": "WebBits",
          "signature": "ParsecT String u Identity String",
          "source": "src/BrownPLT-JavaScript-Lexer.html#semi",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Lexer",
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "semi",
          "package": "WebBits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Lexer.html#v:semi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "squares",
          "package": "WebBits",
          "signature": "ParsecT String u Identity a -\u003e ParsecT String u Identity a",
          "source": "src/BrownPLT-JavaScript-Lexer.html#squares",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Lexer",
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "squares",
          "normalized": "ParsecT String a Identity b-\u003eParsecT String a Identity b",
          "package": "WebBits",
          "signature": "ParsecT String u Identity a-\u003eParsecT String u Identity a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Lexer.html#v:squares"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "stringLiteral",
          "package": "WebBits",
          "signature": "ParsecT String u Identity String",
          "source": "src/BrownPLT-JavaScript-Lexer.html#stringLiteral",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Lexer",
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "stringLiteral",
          "package": "WebBits",
          "partial": "Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Lexer.html#v:stringLiteral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "symbol",
          "package": "WebBits",
          "signature": "String -\u003e ParsecT String u Identity String",
          "source": "src/BrownPLT-JavaScript-Lexer.html#symbol",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Lexer",
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "symbol",
          "normalized": "String-\u003eParsecT String a Identity String",
          "package": "WebBits",
          "signature": "String-\u003eParsecT String u Identity String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Lexer.html#v:symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "whiteSpace",
          "package": "WebBits",
          "signature": "ParsecT String u Identity ()",
          "source": "src/BrownPLT-JavaScript-Lexer.html#whiteSpace",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Lexer",
          "module": "BrownPLT.JavaScript.Lexer",
          "name": "whiteSpace",
          "normalized": "ParsecT String a Identity()",
          "package": "WebBits",
          "partial": "Space",
          "signature": "ParsecT String u Identity()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Lexer.html#v:whiteSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Parser",
          "name": "Parser",
          "package": "WebBits",
          "source": "src/BrownPLT-JavaScript-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Parser",
          "module": "BrownPLT.JavaScript.Parser",
          "name": "Parser",
          "package": "WebBits",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Parser",
          "name": "ExpressionParser",
          "package": "WebBits",
          "source": "src/BrownPLT-JavaScript-Parser.html#ExpressionParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Parser",
          "module": "BrownPLT.JavaScript.Parser",
          "name": "ExpressionParser",
          "package": "WebBits",
          "partial": "Expression Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Parser.html#t:ExpressionParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Parser",
          "name": "ParsedExpression",
          "package": "WebBits",
          "source": "src/BrownPLT-JavaScript-Parser.html#ParsedExpression",
          "type": "type"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Parser",
          "module": "BrownPLT.JavaScript.Parser",
          "name": "ParsedExpression",
          "package": "WebBits",
          "partial": "Parsed Expression",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Parser.html#t:ParsedExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Parser",
          "name": "ParsedStatement",
          "package": "WebBits",
          "source": "src/BrownPLT-JavaScript-Parser.html#ParsedStatement",
          "type": "type"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Parser",
          "module": "BrownPLT.JavaScript.Parser",
          "name": "ParsedStatement",
          "package": "WebBits",
          "partial": "Parsed Statement",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Parser.html#t:ParsedStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Parser",
          "name": "StatementParser",
          "package": "WebBits",
          "source": "src/BrownPLT-JavaScript-Parser.html#StatementParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Parser",
          "module": "BrownPLT.JavaScript.Parser",
          "name": "StatementParser",
          "package": "WebBits",
          "partial": "Statement Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Parser.html#t:StatementParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Parser",
          "name": "assignExpr",
          "package": "WebBits",
          "signature": "ExpressionParser st",
          "source": "src/BrownPLT-JavaScript-Parser.html#assignExpr",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Parser",
          "module": "BrownPLT.JavaScript.Parser",
          "name": "assignExpr",
          "package": "WebBits",
          "partial": "Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Parser.html#v:assignExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Parser",
          "name": "emptyParsedJavaScript",
          "package": "WebBits",
          "signature": "JavaScript a",
          "source": "src/BrownPLT-JavaScript-Parser.html#emptyParsedJavaScript",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Parser",
          "module": "BrownPLT.JavaScript.Parser",
          "name": "emptyParsedJavaScript",
          "package": "WebBits",
          "partial": "Parsed Java Script",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Parser.html#v:emptyParsedJavaScript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Parser",
          "name": "parseBlockStmt",
          "package": "WebBits",
          "signature": "StatementParser st",
          "source": "src/BrownPLT-JavaScript-Parser.html#parseBlockStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Parser",
          "module": "BrownPLT.JavaScript.Parser",
          "name": "parseBlockStmt",
          "package": "WebBits",
          "partial": "Block Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Parser.html#v:parseBlockStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Parser",
          "name": "parseExpression",
          "package": "WebBits",
          "signature": "ExpressionParser st",
          "source": "src/BrownPLT-JavaScript-Parser.html#parseExpression",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Parser",
          "module": "BrownPLT.JavaScript.Parser",
          "name": "parseExpression",
          "package": "WebBits",
          "partial": "Expression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Parser.html#v:parseExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Parser",
          "name": "parseJavaScriptFromFile",
          "package": "WebBits",
          "signature": "String -\u003e m [Statement SourcePos]",
          "source": "src/BrownPLT-JavaScript-Parser.html#parseJavaScriptFromFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Parser",
          "module": "BrownPLT.JavaScript.Parser",
          "name": "parseJavaScriptFromFile",
          "normalized": "String-\u003ea[Statement SourcePos]",
          "package": "WebBits",
          "partial": "Java Script From File",
          "signature": "String-\u003em[Statement SourcePos]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Parser.html#v:parseJavaScriptFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Parser",
          "name": "parseScript",
          "package": "WebBits",
          "signature": "CharParser state (JavaScript SourcePos)",
          "source": "src/BrownPLT-JavaScript-Parser.html#parseScript",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Parser",
          "module": "BrownPLT.JavaScript.Parser",
          "name": "parseScript",
          "package": "WebBits",
          "partial": "Script",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Parser.html#v:parseScript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Parser",
          "name": "parseScriptFromString",
          "package": "WebBits",
          "signature": "String -\u003e String -\u003e Either ParseError (JavaScript SourcePos)",
          "source": "src/BrownPLT-JavaScript-Parser.html#parseScriptFromString",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Parser",
          "module": "BrownPLT.JavaScript.Parser",
          "name": "parseScriptFromString",
          "normalized": "String-\u003eString-\u003eEither ParseError(JavaScript SourcePos)",
          "package": "WebBits",
          "partial": "Script From String",
          "signature": "String-\u003eString-\u003eEither ParseError(JavaScript SourcePos)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Parser.html#v:parseScriptFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Parser",
          "name": "parseSimpleExpr'",
          "package": "WebBits",
          "signature": "ParsecT [Char] u Identity ParsedExpression",
          "source": "src/BrownPLT-JavaScript-Parser.html#parseSimpleExpr%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Parser",
          "module": "BrownPLT.JavaScript.Parser",
          "name": "parseSimpleExpr'",
          "normalized": "ParsecT[Char]a Identity ParsedExpression",
          "package": "WebBits",
          "partial": "Simple Expr'",
          "signature": "ParsecT[Char]u Identity ParsedExpression",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Parser.html#v:parseSimpleExpr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Parser",
          "name": "parseStatement",
          "package": "WebBits",
          "signature": "StatementParser st",
          "source": "src/BrownPLT-JavaScript-Parser.html#parseStatement",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Parser",
          "module": "BrownPLT.JavaScript.Parser",
          "name": "parseStatement",
          "package": "WebBits",
          "partial": "Statement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Parser.html#v:parseStatement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Parser",
          "name": "parseString",
          "package": "WebBits",
          "signature": "String -\u003e [Statement SourcePos]",
          "source": "src/BrownPLT-JavaScript-Parser.html#parseString",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Parser",
          "module": "BrownPLT.JavaScript.Parser",
          "name": "parseString",
          "normalized": "String-\u003e[Statement SourcePos]",
          "package": "WebBits",
          "partial": "String",
          "signature": "String-\u003e[Statement SourcePos]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Parser.html#v:parseString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePretty-printing JavaScript.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "BrownPLT.JavaScript.PrettyPrint",
          "name": "PrettyPrint",
          "package": "WebBits",
          "source": "src/BrownPLT-JavaScript-PrettyPrint.html",
          "type": "module"
        },
        "index": {
          "description": "Pretty-printing JavaScript",
          "hierarchy": "BrownPLT JavaScript PrettyPrint",
          "module": "BrownPLT.JavaScript.PrettyPrint",
          "name": "PrettyPrint",
          "package": "WebBits",
          "partial": "Pretty Print",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-PrettyPrint.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.PrettyPrint",
          "name": "expr",
          "package": "WebBits",
          "signature": "Expression a -\u003e Doc",
          "source": "src/BrownPLT-JavaScript-PrettyPrint.html#expr",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript PrettyPrint",
          "module": "BrownPLT.JavaScript.PrettyPrint",
          "name": "expr",
          "normalized": "Expression a-\u003eDoc",
          "package": "WebBits",
          "signature": "Expression a-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-PrettyPrint.html#v:expr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.PrettyPrint",
          "name": "javaScript",
          "package": "WebBits",
          "signature": "JavaScript a -\u003e Doc",
          "source": "src/BrownPLT-JavaScript-PrettyPrint.html#javaScript",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript PrettyPrint",
          "module": "BrownPLT.JavaScript.PrettyPrint",
          "name": "javaScript",
          "normalized": "JavaScript a-\u003eDoc",
          "package": "WebBits",
          "partial": "Script",
          "signature": "JavaScript a-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-PrettyPrint.html#v:javaScript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"BrownPLT.JavaScript.PrettyPrint\",\"BrownPLT.JavaScript\"]",
          "name": "renderExpression",
          "package": "WebBits",
          "signature": "Expression a -\u003e String",
          "source": "src/BrownPLT-JavaScript-PrettyPrint.html#renderExpression",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-PrettyPrint.html#v:renderExpression\",\"http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript.html#v:renderExpression\"]"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript PrettyPrint",
          "module": "BrownPLT.JavaScript.PrettyPrint",
          "name": "renderExpression",
          "normalized": "Expression a-\u003eString",
          "package": "WebBits",
          "partial": "Expression",
          "signature": "Expression a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-PrettyPrint.html#v:renderExpression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"BrownPLT.JavaScript.PrettyPrint\",\"BrownPLT.JavaScript\"]",
          "name": "renderStatements",
          "package": "WebBits",
          "signature": "[Statement a] -\u003e String",
          "source": "src/BrownPLT-JavaScript-PrettyPrint.html#renderStatements",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-PrettyPrint.html#v:renderStatements\",\"http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript.html#v:renderStatements\"]"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript PrettyPrint",
          "module": "BrownPLT.JavaScript.PrettyPrint",
          "name": "renderStatements",
          "normalized": "[Statement a]-\u003eString",
          "package": "WebBits",
          "partial": "Statements",
          "signature": "[Statement a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-PrettyPrint.html#v:renderStatements"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.PrettyPrint",
          "name": "stmt",
          "package": "WebBits",
          "signature": "Statement a -\u003e Doc",
          "source": "src/BrownPLT-JavaScript-PrettyPrint.html#stmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript PrettyPrint",
          "module": "BrownPLT.JavaScript.PrettyPrint",
          "name": "stmt",
          "normalized": "Statement a-\u003eDoc",
          "package": "WebBits",
          "signature": "Statement a-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-PrettyPrint.html#v:stmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eJavaScript's syntax.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "Syntax",
          "package": "WebBits",
          "source": "src/BrownPLT-JavaScript-Syntax.html",
          "type": "module"
        },
        "index": {
          "description": "JavaScript syntax",
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "Syntax",
          "package": "WebBits",
          "partial": "Syntax",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "AssignOp",
          "package": "WebBits",
          "source": "src/BrownPLT-JavaScript-Syntax.html#AssignOp",
          "type": "data"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "AssignOp",
          "package": "WebBits",
          "partial": "Assign Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#t:AssignOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "CaseClause",
          "package": "WebBits",
          "source": "src/BrownPLT-JavaScript-Syntax.html#CaseClause",
          "type": "data"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "CaseClause",
          "package": "WebBits",
          "partial": "Case Clause",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#t:CaseClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "CatchClause",
          "package": "WebBits",
          "source": "src/BrownPLT-JavaScript-Syntax.html#CatchClause",
          "type": "data"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "CatchClause",
          "package": "WebBits",
          "partial": "Catch Clause",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#t:CatchClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "Expression",
          "package": "WebBits",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Expression",
          "type": "data"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "Expression",
          "package": "WebBits",
          "partial": "Expression",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#t:Expression"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ForInInit",
          "package": "WebBits",
          "source": "src/BrownPLT-JavaScript-Syntax.html#ForInInit",
          "type": "data"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ForInInit",
          "package": "WebBits",
          "partial": "For In Init",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#t:ForInInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ForInit",
          "package": "WebBits",
          "source": "src/BrownPLT-JavaScript-Syntax.html#ForInit",
          "type": "data"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ForInit",
          "package": "WebBits",
          "partial": "For Init",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#t:ForInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "Id",
          "package": "WebBits",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Id",
          "type": "data"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "Id",
          "package": "WebBits",
          "partial": "Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "InfixOp",
          "package": "WebBits",
          "source": "src/BrownPLT-JavaScript-Syntax.html#InfixOp",
          "type": "data"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "InfixOp",
          "package": "WebBits",
          "partial": "Infix Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#t:InfixOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "JavaScript",
          "package": "WebBits",
          "source": "src/BrownPLT-JavaScript-Syntax.html#JavaScript",
          "type": "data"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "JavaScript",
          "package": "WebBits",
          "partial": "Java Script",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#t:JavaScript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "LValue",
          "package": "WebBits",
          "source": "src/BrownPLT-JavaScript-Syntax.html#LValue",
          "type": "data"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "LValue",
          "package": "WebBits",
          "partial": "LValue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#t:LValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PrefixOp",
          "package": "WebBits",
          "source": "src/BrownPLT-JavaScript-Syntax.html#PrefixOp",
          "type": "data"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PrefixOp",
          "package": "WebBits",
          "partial": "Prefix Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#t:PrefixOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "Prop",
          "package": "WebBits",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Prop",
          "type": "data"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "Prop",
          "package": "WebBits",
          "partial": "Prop",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#t:Prop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "Statement",
          "package": "WebBits",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Statement",
          "type": "data"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "Statement",
          "package": "WebBits",
          "partial": "Statement",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#t:Statement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "UnaryAssignOp",
          "package": "WebBits",
          "source": "src/BrownPLT-JavaScript-Syntax.html#UnaryAssignOp",
          "type": "data"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "UnaryAssignOp",
          "package": "WebBits",
          "partial": "Unary Assign Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#t:UnaryAssignOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "VarDecl",
          "package": "WebBits",
          "source": "src/BrownPLT-JavaScript-Syntax.html#VarDecl",
          "type": "data"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "VarDecl",
          "package": "WebBits",
          "partial": "Var Decl",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#t:VarDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ArrayLit",
          "package": "WebBits",
          "signature": "ArrayLit a [Expression a]",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ArrayLit",
          "normalized": "ArrayLit a[Expression a]",
          "package": "WebBits",
          "partial": "Array Lit",
          "signature": "ArrayLit a[Expression a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:ArrayLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "AssignExpr",
          "package": "WebBits",
          "signature": "AssignExpr a AssignOp (LValue a) (Expression a)",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "AssignExpr",
          "package": "WebBits",
          "partial": "Assign Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:AssignExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "BlockStmt",
          "package": "WebBits",
          "signature": "BlockStmt a [Statement a]",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "BlockStmt",
          "normalized": "BlockStmt a[Statement a]",
          "package": "WebBits",
          "partial": "Block Stmt",
          "signature": "BlockStmt a[Statement a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:BlockStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "BoolLit",
          "package": "WebBits",
          "signature": "BoolLit a Bool",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "BoolLit",
          "package": "WebBits",
          "partial": "Bool Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:BoolLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "BracketRef",
          "package": "WebBits",
          "signature": "BracketRef a (Expression a) (Expression a)",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "BracketRef",
          "package": "WebBits",
          "partial": "Bracket Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:BracketRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "BreakStmt",
          "package": "WebBits",
          "signature": "BreakStmt a (Maybe (Id a))",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "BreakStmt",
          "package": "WebBits",
          "partial": "Break Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:BreakStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "CallExpr",
          "package": "WebBits",
          "signature": "CallExpr a (Expression a) [Expression a]",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "CallExpr",
          "normalized": "CallExpr a(Expression a)[Expression a]",
          "package": "WebBits",
          "partial": "Call Expr",
          "signature": "CallExpr a(Expression a)[Expression a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:CallExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "CaseClause",
          "package": "WebBits",
          "signature": "CaseClause a (Expression a) [Statement a]",
          "source": "src/BrownPLT-JavaScript-Syntax.html#CaseClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "CaseClause",
          "normalized": "CaseClause a(Expression a)[Statement a]",
          "package": "WebBits",
          "partial": "Case Clause",
          "signature": "CaseClause a(Expression a)[Statement a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:CaseClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "CaseDefault",
          "package": "WebBits",
          "signature": "CaseDefault a [Statement a]",
          "source": "src/BrownPLT-JavaScript-Syntax.html#CaseClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "CaseDefault",
          "normalized": "CaseDefault a[Statement a]",
          "package": "WebBits",
          "partial": "Case Default",
          "signature": "CaseDefault a[Statement a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:CaseDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "CatchClause",
          "package": "WebBits",
          "signature": "CatchClause a (Id a) (Statement a)",
          "source": "src/BrownPLT-JavaScript-Syntax.html#CatchClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "CatchClause",
          "package": "WebBits",
          "partial": "Catch Clause",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:CatchClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "CondExpr",
          "package": "WebBits",
          "signature": "CondExpr a (Expression a) (Expression a) (Expression a)",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "CondExpr",
          "package": "WebBits",
          "partial": "Cond Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:CondExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ContinueStmt",
          "package": "WebBits",
          "signature": "ContinueStmt a (Maybe (Id a))",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ContinueStmt",
          "package": "WebBits",
          "partial": "Continue Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:ContinueStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "DoWhileStmt",
          "package": "WebBits",
          "signature": "DoWhileStmt a (Statement a) (Expression a)",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "DoWhileStmt",
          "package": "WebBits",
          "partial": "Do While Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:DoWhileStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "DotRef",
          "package": "WebBits",
          "signature": "DotRef a (Expression a) (Id a)",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "DotRef",
          "package": "WebBits",
          "partial": "Dot Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:DotRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "EmptyStmt",
          "package": "WebBits",
          "signature": "EmptyStmt a",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "EmptyStmt",
          "package": "WebBits",
          "partial": "Empty Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:EmptyStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ExprInit",
          "package": "WebBits",
          "signature": "ExprInit (Expression a)",
          "source": "src/BrownPLT-JavaScript-Syntax.html#ForInit",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ExprInit",
          "package": "WebBits",
          "partial": "Expr Init",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:ExprInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ExprStmt",
          "package": "WebBits",
          "signature": "ExprStmt a (Expression a)",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ExprStmt",
          "package": "WebBits",
          "partial": "Expr Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:ExprStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ForInNoVar",
          "package": "WebBits",
          "signature": "ForInNoVar (Id a)",
          "source": "src/BrownPLT-JavaScript-Syntax.html#ForInInit",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ForInNoVar",
          "package": "WebBits",
          "partial": "For In No Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:ForInNoVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ForInStmt",
          "package": "WebBits",
          "signature": "ForInStmt a (ForInInit a) (Expression a) (Statement a)",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ForInStmt",
          "package": "WebBits",
          "partial": "For In Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:ForInStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ForInVar",
          "package": "WebBits",
          "signature": "ForInVar (Id a)",
          "source": "src/BrownPLT-JavaScript-Syntax.html#ForInInit",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ForInVar",
          "package": "WebBits",
          "partial": "For In Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:ForInVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ForStmt",
          "package": "WebBits",
          "signature": "ForStmt a (ForInit a) (Maybe (Expression a)) (Maybe (Expression a)) (Statement a)",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ForStmt",
          "package": "WebBits",
          "partial": "For Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:ForStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "FuncExpr",
          "package": "WebBits",
          "signature": "FuncExpr a (Maybe (Id a)) [Id a] (Statement a)",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "FuncExpr",
          "normalized": "FuncExpr a(Maybe(Id a))[Id a](Statement a)",
          "package": "WebBits",
          "partial": "Func Expr",
          "signature": "FuncExpr a(Maybe(Id a))[Id a](Statement a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:FuncExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "FunctionStmt",
          "package": "WebBits",
          "signature": "FunctionStmt a (Id a) [Id a] (Statement a)",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "FunctionStmt",
          "normalized": "FunctionStmt a(Id a)[Id a](Statement a)",
          "package": "WebBits",
          "partial": "Function Stmt",
          "signature": "FunctionStmt a(Id a)[Id a](Statement a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:FunctionStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "Id",
          "package": "WebBits",
          "signature": "Id a String",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Id",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "Id",
          "package": "WebBits",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "IfSingleStmt",
          "package": "WebBits",
          "signature": "IfSingleStmt a (Expression a) (Statement a)",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "IfSingleStmt",
          "package": "WebBits",
          "partial": "If Single Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:IfSingleStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "IfStmt",
          "package": "WebBits",
          "signature": "IfStmt a (Expression a) (Statement a) (Statement a)",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "IfStmt",
          "package": "WebBits",
          "partial": "If Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:IfStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "InfixExpr",
          "package": "WebBits",
          "signature": "InfixExpr a InfixOp (Expression a) (Expression a)",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "InfixExpr",
          "package": "WebBits",
          "partial": "Infix Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:InfixExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "IntLit",
          "package": "WebBits",
          "signature": "IntLit a Int",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "IntLit",
          "package": "WebBits",
          "partial": "Int Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:IntLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "LBracket",
          "package": "WebBits",
          "signature": "LBracket a (Expression a) (Expression a)",
          "source": "src/BrownPLT-JavaScript-Syntax.html#LValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "LBracket",
          "package": "WebBits",
          "partial": "LBracket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:LBracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "LDot",
          "package": "WebBits",
          "signature": "LDot a (Expression a) String",
          "source": "src/BrownPLT-JavaScript-Syntax.html#LValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "LDot",
          "package": "WebBits",
          "partial": "LDot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:LDot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "LVar",
          "package": "WebBits",
          "signature": "LVar a String",
          "source": "src/BrownPLT-JavaScript-Syntax.html#LValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "LVar",
          "package": "WebBits",
          "partial": "LVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:LVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "LabelledStmt",
          "package": "WebBits",
          "signature": "LabelledStmt a (Id a) (Statement a)",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "LabelledStmt",
          "package": "WebBits",
          "partial": "Labelled Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:LabelledStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ListExpr",
          "package": "WebBits",
          "signature": "ListExpr a [Expression a]",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ListExpr",
          "normalized": "ListExpr a[Expression a]",
          "package": "WebBits",
          "partial": "List Expr",
          "signature": "ListExpr a[Expression a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:ListExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "NewExpr",
          "package": "WebBits",
          "signature": "NewExpr a (Expression a) [Expression a]",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "NewExpr",
          "normalized": "NewExpr a(Expression a)[Expression a]",
          "package": "WebBits",
          "partial": "New Expr",
          "signature": "NewExpr a(Expression a)[Expression a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:NewExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "NoInit",
          "package": "WebBits",
          "signature": "NoInit",
          "source": "src/BrownPLT-JavaScript-Syntax.html#ForInit",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "NoInit",
          "package": "WebBits",
          "partial": "No Init",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:NoInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "NullLit",
          "package": "WebBits",
          "signature": "NullLit a",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "NullLit",
          "package": "WebBits",
          "partial": "Null Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:NullLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "NumLit",
          "package": "WebBits",
          "signature": "NumLit a Double",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "NumLit",
          "package": "WebBits",
          "partial": "Num Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:NumLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ObjectLit",
          "package": "WebBits",
          "signature": "ObjectLit a [(Prop a, Expression a)]",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ObjectLit",
          "normalized": "ObjectLit a[(Prop a,Expression a)]",
          "package": "WebBits",
          "partial": "Object Lit",
          "signature": "ObjectLit a[(Prop a,Expression a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:ObjectLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpAdd",
          "package": "WebBits",
          "signature": "OpAdd",
          "source": "src/BrownPLT-JavaScript-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpAdd",
          "package": "WebBits",
          "partial": "Op Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpAssign",
          "package": "WebBits",
          "signature": "OpAssign",
          "source": "src/BrownPLT-JavaScript-Syntax.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpAssign",
          "package": "WebBits",
          "partial": "Op Assign",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpAssign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpAssignAdd",
          "package": "WebBits",
          "signature": "OpAssignAdd",
          "source": "src/BrownPLT-JavaScript-Syntax.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpAssignAdd",
          "package": "WebBits",
          "partial": "Op Assign Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpAssignAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpAssignBAnd",
          "package": "WebBits",
          "signature": "OpAssignBAnd",
          "source": "src/BrownPLT-JavaScript-Syntax.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpAssignBAnd",
          "package": "WebBits",
          "partial": "Op Assign BAnd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpAssignBAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpAssignBOr",
          "package": "WebBits",
          "signature": "OpAssignBOr",
          "source": "src/BrownPLT-JavaScript-Syntax.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpAssignBOr",
          "package": "WebBits",
          "partial": "Op Assign BOr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpAssignBOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpAssignBXor",
          "package": "WebBits",
          "signature": "OpAssignBXor",
          "source": "src/BrownPLT-JavaScript-Syntax.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpAssignBXor",
          "package": "WebBits",
          "partial": "Op Assign BXor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpAssignBXor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpAssignDiv",
          "package": "WebBits",
          "signature": "OpAssignDiv",
          "source": "src/BrownPLT-JavaScript-Syntax.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpAssignDiv",
          "package": "WebBits",
          "partial": "Op Assign Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpAssignDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpAssignLShift",
          "package": "WebBits",
          "signature": "OpAssignLShift",
          "source": "src/BrownPLT-JavaScript-Syntax.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpAssignLShift",
          "package": "WebBits",
          "partial": "Op Assign LShift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpAssignLShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpAssignMod",
          "package": "WebBits",
          "signature": "OpAssignMod",
          "source": "src/BrownPLT-JavaScript-Syntax.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpAssignMod",
          "package": "WebBits",
          "partial": "Op Assign Mod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpAssignMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpAssignMul",
          "package": "WebBits",
          "signature": "OpAssignMul",
          "source": "src/BrownPLT-JavaScript-Syntax.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpAssignMul",
          "package": "WebBits",
          "partial": "Op Assign Mul",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpAssignMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpAssignSpRShift",
          "package": "WebBits",
          "signature": "OpAssignSpRShift",
          "source": "src/BrownPLT-JavaScript-Syntax.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpAssignSpRShift",
          "package": "WebBits",
          "partial": "Op Assign Sp RShift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpAssignSpRShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpAssignSub",
          "package": "WebBits",
          "signature": "OpAssignSub",
          "source": "src/BrownPLT-JavaScript-Syntax.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpAssignSub",
          "package": "WebBits",
          "partial": "Op Assign Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpAssignSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpAssignZfRShift",
          "package": "WebBits",
          "signature": "OpAssignZfRShift",
          "source": "src/BrownPLT-JavaScript-Syntax.html#AssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpAssignZfRShift",
          "package": "WebBits",
          "partial": "Op Assign Zf RShift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpAssignZfRShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpBAnd",
          "package": "WebBits",
          "signature": "OpBAnd",
          "source": "src/BrownPLT-JavaScript-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpBAnd",
          "package": "WebBits",
          "partial": "Op BAnd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpBAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpBOr",
          "package": "WebBits",
          "signature": "OpBOr",
          "source": "src/BrownPLT-JavaScript-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpBOr",
          "package": "WebBits",
          "partial": "Op BOr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpBOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpBXor",
          "package": "WebBits",
          "signature": "OpBXor",
          "source": "src/BrownPLT-JavaScript-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpBXor",
          "package": "WebBits",
          "partial": "Op BXor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpBXor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpDiv",
          "package": "WebBits",
          "signature": "OpDiv",
          "source": "src/BrownPLT-JavaScript-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpDiv",
          "package": "WebBits",
          "partial": "Op Div",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpEq",
          "package": "WebBits",
          "signature": "OpEq",
          "source": "src/BrownPLT-JavaScript-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpEq",
          "package": "WebBits",
          "partial": "Op Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpGEq",
          "package": "WebBits",
          "signature": "OpGEq",
          "source": "src/BrownPLT-JavaScript-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpGEq",
          "package": "WebBits",
          "partial": "Op GEq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpGEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpGT",
          "package": "WebBits",
          "signature": "OpGT",
          "source": "src/BrownPLT-JavaScript-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpGT",
          "package": "WebBits",
          "partial": "Op GT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpIn",
          "package": "WebBits",
          "signature": "OpIn",
          "source": "src/BrownPLT-JavaScript-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpIn",
          "package": "WebBits",
          "partial": "Op In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpInstanceof",
          "package": "WebBits",
          "signature": "OpInstanceof",
          "source": "src/BrownPLT-JavaScript-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpInstanceof",
          "package": "WebBits",
          "partial": "Op Instanceof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpInstanceof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpLAnd",
          "package": "WebBits",
          "signature": "OpLAnd",
          "source": "src/BrownPLT-JavaScript-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpLAnd",
          "package": "WebBits",
          "partial": "Op LAnd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpLAnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpLEq",
          "package": "WebBits",
          "signature": "OpLEq",
          "source": "src/BrownPLT-JavaScript-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpLEq",
          "package": "WebBits",
          "partial": "Op LEq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpLEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpLOr",
          "package": "WebBits",
          "signature": "OpLOr",
          "source": "src/BrownPLT-JavaScript-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpLOr",
          "package": "WebBits",
          "partial": "Op LOr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpLOr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpLShift",
          "package": "WebBits",
          "signature": "OpLShift",
          "source": "src/BrownPLT-JavaScript-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpLShift",
          "package": "WebBits",
          "partial": "Op LShift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpLShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpLT",
          "package": "WebBits",
          "signature": "OpLT",
          "source": "src/BrownPLT-JavaScript-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpLT",
          "package": "WebBits",
          "partial": "Op LT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpMod",
          "package": "WebBits",
          "signature": "OpMod",
          "source": "src/BrownPLT-JavaScript-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpMod",
          "package": "WebBits",
          "partial": "Op Mod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpMod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpMul",
          "package": "WebBits",
          "signature": "OpMul",
          "source": "src/BrownPLT-JavaScript-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpMul",
          "package": "WebBits",
          "partial": "Op Mul",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpMul"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpNEq",
          "package": "WebBits",
          "signature": "OpNEq",
          "source": "src/BrownPLT-JavaScript-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpNEq",
          "package": "WebBits",
          "partial": "Op NEq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpNEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpSpRShift",
          "package": "WebBits",
          "signature": "OpSpRShift",
          "source": "src/BrownPLT-JavaScript-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpSpRShift",
          "package": "WebBits",
          "partial": "Op Sp RShift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpSpRShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpStrictEq",
          "package": "WebBits",
          "signature": "OpStrictEq",
          "source": "src/BrownPLT-JavaScript-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpStrictEq",
          "package": "WebBits",
          "partial": "Op Strict Eq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpStrictEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpStrictNEq",
          "package": "WebBits",
          "signature": "OpStrictNEq",
          "source": "src/BrownPLT-JavaScript-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpStrictNEq",
          "package": "WebBits",
          "partial": "Op Strict NEq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpStrictNEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpSub",
          "package": "WebBits",
          "signature": "OpSub",
          "source": "src/BrownPLT-JavaScript-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpSub",
          "package": "WebBits",
          "partial": "Op Sub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpZfRShift",
          "package": "WebBits",
          "signature": "OpZfRShift",
          "source": "src/BrownPLT-JavaScript-Syntax.html#InfixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "OpZfRShift",
          "package": "WebBits",
          "partial": "Op Zf RShift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:OpZfRShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ParenExpr",
          "package": "WebBits",
          "signature": "ParenExpr a (Expression a)",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ParenExpr",
          "package": "WebBits",
          "partial": "Paren Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:ParenExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PostfixDec",
          "package": "WebBits",
          "signature": "PostfixDec",
          "source": "src/BrownPLT-JavaScript-Syntax.html#UnaryAssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PostfixDec",
          "package": "WebBits",
          "partial": "Postfix Dec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:PostfixDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PostfixInc",
          "package": "WebBits",
          "signature": "PostfixInc",
          "source": "src/BrownPLT-JavaScript-Syntax.html#UnaryAssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PostfixInc",
          "package": "WebBits",
          "partial": "Postfix Inc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:PostfixInc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PrefixBNot",
          "package": "WebBits",
          "signature": "PrefixBNot",
          "source": "src/BrownPLT-JavaScript-Syntax.html#PrefixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PrefixBNot",
          "package": "WebBits",
          "partial": "Prefix BNot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:PrefixBNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PrefixDec",
          "package": "WebBits",
          "signature": "PrefixDec",
          "source": "src/BrownPLT-JavaScript-Syntax.html#UnaryAssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PrefixDec",
          "package": "WebBits",
          "partial": "Prefix Dec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:PrefixDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PrefixDelete",
          "package": "WebBits",
          "signature": "PrefixDelete",
          "source": "src/BrownPLT-JavaScript-Syntax.html#PrefixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PrefixDelete",
          "package": "WebBits",
          "partial": "Prefix Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:PrefixDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PrefixExpr",
          "package": "WebBits",
          "signature": "PrefixExpr a PrefixOp (Expression a)",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PrefixExpr",
          "package": "WebBits",
          "partial": "Prefix Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:PrefixExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PrefixInc",
          "package": "WebBits",
          "signature": "PrefixInc",
          "source": "src/BrownPLT-JavaScript-Syntax.html#UnaryAssignOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PrefixInc",
          "package": "WebBits",
          "partial": "Prefix Inc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:PrefixInc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PrefixLNot",
          "package": "WebBits",
          "signature": "PrefixLNot",
          "source": "src/BrownPLT-JavaScript-Syntax.html#PrefixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PrefixLNot",
          "package": "WebBits",
          "partial": "Prefix LNot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:PrefixLNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PrefixMinus",
          "package": "WebBits",
          "signature": "PrefixMinus",
          "source": "src/BrownPLT-JavaScript-Syntax.html#PrefixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PrefixMinus",
          "package": "WebBits",
          "partial": "Prefix Minus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:PrefixMinus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PrefixPlus",
          "package": "WebBits",
          "signature": "PrefixPlus",
          "source": "src/BrownPLT-JavaScript-Syntax.html#PrefixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PrefixPlus",
          "package": "WebBits",
          "partial": "Prefix Plus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:PrefixPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PrefixTypeof",
          "package": "WebBits",
          "signature": "PrefixTypeof",
          "source": "src/BrownPLT-JavaScript-Syntax.html#PrefixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PrefixTypeof",
          "package": "WebBits",
          "partial": "Prefix Typeof",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:PrefixTypeof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PrefixVoid",
          "package": "WebBits",
          "signature": "PrefixVoid",
          "source": "src/BrownPLT-JavaScript-Syntax.html#PrefixOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PrefixVoid",
          "package": "WebBits",
          "partial": "Prefix Void",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:PrefixVoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PropId",
          "package": "WebBits",
          "signature": "PropId a (Id a)",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Prop",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PropId",
          "package": "WebBits",
          "partial": "Prop Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:PropId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PropNum",
          "package": "WebBits",
          "signature": "PropNum a Integer",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Prop",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PropNum",
          "package": "WebBits",
          "partial": "Prop Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:PropNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PropString",
          "package": "WebBits",
          "signature": "PropString a String",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Prop",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "PropString",
          "package": "WebBits",
          "partial": "Prop String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:PropString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "RegexpLit",
          "package": "WebBits",
          "signature": "RegexpLit a String Bool Bool",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "RegexpLit",
          "package": "WebBits",
          "partial": "Regexp Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:RegexpLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ReturnStmt",
          "package": "WebBits",
          "signature": "ReturnStmt a (Maybe (Expression a))",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ReturnStmt",
          "package": "WebBits",
          "partial": "Return Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:ReturnStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA script in \u003ca\u003escript\u003c/a\u003e ... \u003ca\u003e/script\u003c/a\u003e tags.  This may seem a little silly,\n but the Flapjax analogue has an inline variant and attribute-inline \n variant.\n\u003c/p\u003e",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "Script",
          "package": "WebBits",
          "signature": "Script a [Statement a]",
          "source": "src/BrownPLT-JavaScript-Syntax.html#JavaScript",
          "type": "function"
        },
        "index": {
          "description": "script in script script tags This may seem little silly but the Flapjax analogue has an inline variant and attribute-inline variant",
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "Script",
          "normalized": "Script a[Statement a]",
          "package": "WebBits",
          "partial": "Script",
          "signature": "Script a[Statement a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:Script"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "StringLit",
          "package": "WebBits",
          "signature": "StringLit a String",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "StringLit",
          "package": "WebBits",
          "partial": "String Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:StringLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "SwitchStmt",
          "package": "WebBits",
          "signature": "SwitchStmt a (Expression a) [CaseClause a]",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "SwitchStmt",
          "normalized": "SwitchStmt a(Expression a)[CaseClause a]",
          "package": "WebBits",
          "partial": "Switch Stmt",
          "signature": "SwitchStmt a(Expression a)[CaseClause a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:SwitchStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ThisRef",
          "package": "WebBits",
          "signature": "ThisRef a",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ThisRef",
          "package": "WebBits",
          "partial": "This Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:ThisRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ThrowStmt",
          "package": "WebBits",
          "signature": "ThrowStmt a (Expression a)",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "ThrowStmt",
          "package": "WebBits",
          "partial": "Throw Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:ThrowStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "TryStmt",
          "package": "WebBits",
          "signature": "TryStmt a (Statement a) (Maybe (CatchClause a)) (Maybe (Statement a))",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "TryStmt",
          "package": "WebBits",
          "partial": "Try Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:TryStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "UnaryAssignExpr",
          "package": "WebBits",
          "signature": "UnaryAssignExpr a UnaryAssignOp (LValue a)",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "UnaryAssignExpr",
          "package": "WebBits",
          "partial": "Unary Assign Expr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:UnaryAssignExpr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "VarDecl",
          "package": "WebBits",
          "signature": "VarDecl a (Id a) (Maybe (Expression a))",
          "source": "src/BrownPLT-JavaScript-Syntax.html#VarDecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "VarDecl",
          "package": "WebBits",
          "partial": "Var Decl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:VarDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "VarDeclStmt",
          "package": "WebBits",
          "signature": "VarDeclStmt a [VarDecl a]",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "VarDeclStmt",
          "normalized": "VarDeclStmt a[VarDecl a]",
          "package": "WebBits",
          "partial": "Var Decl Stmt",
          "signature": "VarDeclStmt a[VarDecl a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:VarDeclStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "VarInit",
          "package": "WebBits",
          "signature": "VarInit [VarDecl a]",
          "source": "src/BrownPLT-JavaScript-Syntax.html#ForInit",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "VarInit",
          "normalized": "VarInit[VarDecl a]",
          "package": "WebBits",
          "partial": "Var Init",
          "signature": "VarInit[VarDecl a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:VarInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "VarRef",
          "package": "WebBits",
          "signature": "VarRef a (Id a)",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Expression",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "VarRef",
          "package": "WebBits",
          "partial": "Var Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:VarRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "WhileStmt",
          "package": "WebBits",
          "signature": "WhileStmt a (Expression a) (Statement a)",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "WhileStmt",
          "package": "WebBits",
          "partial": "While Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:WhileStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "WithStmt",
          "package": "WebBits",
          "signature": "WithStmt a (Expression a) (Statement a)",
          "source": "src/BrownPLT-JavaScript-Syntax.html#Statement",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "WithStmt",
          "package": "WebBits",
          "partial": "With Stmt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:WithStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "unId",
          "package": "WebBits",
          "signature": "Id a -\u003e String",
          "source": "src/BrownPLT-JavaScript-Syntax.html#unId",
          "type": "function"
        },
        "index": {
          "hierarchy": "BrownPLT JavaScript Syntax",
          "module": "BrownPLT.JavaScript.Syntax",
          "name": "unId",
          "normalized": "Id a-\u003eString",
          "package": "WebBits",
          "partial": "Id",
          "signature": "Id a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript-Syntax.html#v:unId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRe-exports commonly used modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "BrownPLT.JavaScript",
          "name": "JavaScript",
          "package": "WebBits",
          "source": "src/BrownPLT-JavaScript.html",
          "type": "module"
        },
        "index": {
          "description": "Re-exports commonly used modules",
          "hierarchy": "BrownPLT JavaScript",
          "module": "BrownPLT.JavaScript",
          "name": "JavaScript",
          "package": "WebBits",
          "partial": "Java Script",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/WebBits/docs/BrownPLT-JavaScript.html#"
      }
    }
  ]
]