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
        "word": "haskell-lexer"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Lexer",
          "name": "Lexer",
          "package": "haskell-lexer",
          "source": "src/Language-Haskell-Lexer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "Lexer",
          "package": "haskell-lexer",
          "partial": "Lexer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe posisiotn within a file.\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "Pos",
          "package": "haskell-lexer",
          "source": "src/Language-Haskell-Lexer-Position.html#Pos",
          "type": "data"
        },
        "index": {
          "description": "The posisiotn within file",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "Pos",
          "package": "haskell-lexer",
          "partial": "Pos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#t:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Lexer",
          "name": "PosToken",
          "package": "haskell-lexer",
          "source": "src/Language-Haskell-Lexer-Layout.html#PosToken",
          "type": "type"
        },
        "index": {
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "PosToken",
          "package": "haskell-lexer",
          "partial": "Pos Token",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#t:PosToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell token classifications:\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "Token",
          "package": "haskell-lexer",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "data"
        },
        "index": {
          "description": "Haskell token classifications",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "Token",
          "package": "haskell-lexer",
          "partial": "Token",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCharacter literal\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "CharLit",
          "package": "haskell-lexer",
          "signature": "CharLit",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Character literal",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "CharLit",
          "package": "haskell-lexer",
          "partial": "Char Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:CharLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe stuff after the dashes\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "Comment",
          "package": "haskell-lexer",
          "signature": "Comment",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "description": "The stuff after the dashes",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "Comment",
          "package": "haskell-lexer",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:Comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDashes\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "Commentstart",
          "package": "haskell-lexer",
          "signature": "Commentstart",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Dashes",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "Commentstart",
          "package": "haskell-lexer",
          "partial": "Commentstart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:Commentstart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "Conid",
          "package": "haskell-lexer",
          "signature": "Conid",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Constructor",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "Conid",
          "package": "haskell-lexer",
          "partial": "Conid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:Conid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructor operator\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "Consym",
          "package": "haskell-lexer",
          "signature": "Consym",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Constructor operator",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "Consym",
          "package": "haskell-lexer",
          "partial": "Consym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:Consym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Lexer",
          "name": "ErrorToken",
          "package": "haskell-lexer",
          "signature": "ErrorToken",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "ErrorToken",
          "package": "haskell-lexer",
          "partial": "Error Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:ErrorToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFractional numeric literal\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "FloatLit",
          "package": "haskell-lexer",
          "signature": "FloatLit",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Fractional numeric literal",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "FloatLit",
          "package": "haskell-lexer",
          "partial": "Float Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:FloatLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Lexer",
          "name": "GotEOF",
          "package": "haskell-lexer",
          "signature": "GotEOF",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "GotEOF",
          "package": "haskell-lexer",
          "partial": "Got EOF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:GotEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cn\u003e, to preceed first token on each line\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "Indent",
          "package": "haskell-lexer",
          "signature": "Indent Int",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "description": "to preceed first token on each line",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "Indent",
          "package": "haskell-lexer",
          "partial": "Indent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:Indent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIntegral numeric literal\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "IntLit",
          "package": "haskell-lexer",
          "signature": "IntLit",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Integral numeric literal",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "IntLit",
          "package": "haskell-lexer",
          "partial": "Int Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:IntLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efor implicit braces\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "Layout",
          "package": "haskell-lexer",
          "signature": "Layout",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "description": "for implicit braces",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "Layout",
          "package": "haskell-lexer",
          "partial": "Layout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:Layout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNot handled by the lexer\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "LiterateComment",
          "package": "haskell-lexer",
          "signature": "LiterateComment",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Not handled by the lexer",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "LiterateComment",
          "package": "haskell-lexer",
          "partial": "Literate Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:LiterateComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erecognized in a later pass\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "ModuleAlias",
          "package": "haskell-lexer",
          "signature": "ModuleAlias",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "description": "recognized in later pass",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "ModuleAlias",
          "package": "haskell-lexer",
          "partial": "Module Alias",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:ModuleAlias"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Lexer",
          "name": "ModuleName",
          "package": "haskell-lexer",
          "signature": "ModuleName",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "ModuleName",
          "package": "haskell-lexer",
          "partial": "Module Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:ModuleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA nested comment ({- ... -})\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "NestedComment",
          "package": "haskell-lexer",
          "signature": "NestedComment",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "description": "nested comment",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "NestedComment",
          "package": "haskell-lexer",
          "partial": "Nested Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:NestedComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInternal: causes a call to an external function\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "NestedCommentStart",
          "package": "haskell-lexer",
          "signature": "NestedCommentStart",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Internal causes call to an external function",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "NestedCommentStart",
          "package": "haskell-lexer",
          "partial": "Nested Comment Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:NestedCommentStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e{n}, after let, where, do or of, if not followed by a \"{\"\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "Open",
          "package": "haskell-lexer",
          "signature": "Open Int",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "description": "after let where do or of if not followed by",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "Open",
          "package": "haskell-lexer",
          "partial": "Open",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:Open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Lexer",
          "name": "Pos",
          "package": "haskell-lexer",
          "signature": "Pos",
          "source": "src/Language-Haskell-Lexer-Position.html#Pos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "Pos",
          "package": "haskell-lexer",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQualified constructor\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "Qconid",
          "package": "haskell-lexer",
          "signature": "Qconid",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Qualified constructor",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "Qconid",
          "package": "haskell-lexer",
          "partial": "Qconid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:Qconid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQualified constructor operator\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "Qconsym",
          "package": "haskell-lexer",
          "signature": "Qconsym",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Qualified constructor operator",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "Qconsym",
          "package": "haskell-lexer",
          "partial": "Qconsym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:Qconsym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQualified variable\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "Qvarid",
          "package": "haskell-lexer",
          "signature": "Qvarid",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Qualified variable",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "Qvarid",
          "package": "haskell-lexer",
          "partial": "Qvarid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:Qvarid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQualified variable operator\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "Qvarsym",
          "package": "haskell-lexer",
          "signature": "Qvarsym",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Qualified variable operator",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "Qvarsym",
          "package": "haskell-lexer",
          "partial": "Qvarsym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:Qvarsym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReserved keyword\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "Reservedid",
          "package": "haskell-lexer",
          "signature": "Reservedid",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Reserved keyword",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "Reservedid",
          "package": "haskell-lexer",
          "partial": "Reservedid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:Reservedid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReserved operator\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "Reservedop",
          "package": "haskell-lexer",
          "signature": "Reservedop",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Reserved operator",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "Reservedop",
          "package": "haskell-lexer",
          "partial": "Reservedop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:Reservedop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Lexer",
          "name": "Special",
          "package": "haskell-lexer",
          "signature": "Special",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "Special",
          "package": "haskell-lexer",
          "partial": "Special",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:Special"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Lexer",
          "name": "Specialid",
          "package": "haskell-lexer",
          "signature": "Specialid",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "Specialid",
          "package": "haskell-lexer",
          "partial": "Specialid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:Specialid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString literal\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "StringLit",
          "package": "haskell-lexer",
          "signature": "StringLit",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "description": "String literal",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "StringLit",
          "package": "haskell-lexer",
          "partial": "String Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:StringLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Lexer",
          "name": "TheRest",
          "package": "haskell-lexer",
          "signature": "TheRest",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "TheRest",
          "package": "haskell-lexer",
          "partial": "The Rest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:TheRest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariable\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "Varid",
          "package": "haskell-lexer",
          "signature": "Varid",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Variable",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "Varid",
          "package": "haskell-lexer",
          "partial": "Varid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:Varid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariable operator\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "Varsym",
          "package": "haskell-lexer",
          "signature": "Varsym",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "description": "Variable operator",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "Varsym",
          "package": "haskell-lexer",
          "partial": "Varsym",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:Varsym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhite space\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "Whitespace",
          "package": "haskell-lexer",
          "signature": "Whitespace",
          "source": "src/Language-Haskell-Lexer-Tokens.html#Token",
          "type": "function"
        },
        "index": {
          "description": "White space",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "Whitespace",
          "package": "haskell-lexer",
          "partial": "Whitespace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:Whitespace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Lexer",
          "name": "char",
          "package": "haskell-lexer",
          "signature": "Int",
          "source": "src/Language-Haskell-Lexer-Position.html#Pos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "char",
          "package": "haskell-lexer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Lexer",
          "name": "column",
          "package": "haskell-lexer",
          "signature": "Int",
          "source": "src/Language-Haskell-Lexer-Position.html#Pos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "column",
          "package": "haskell-lexer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is an implementation of Haskell layout, as specified in\n section 9.3 of the revised Haskell 98 report.\n This preprocessor inserts the extra \u003cn\u003e and {n} tokens.\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "layoutPre",
          "package": "haskell-lexer",
          "signature": "[PosToken] -\u003e [PosToken]",
          "source": "src/Language-Haskell-Lexer-Layout.html#layoutPre",
          "type": "function"
        },
        "index": {
          "description": "This is an implementation of Haskell layout as specified in section of the revised Haskell report This preprocessor inserts the extra and tokens",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "layoutPre",
          "normalized": "[PosToken]-\u003e[PosToken]",
          "package": "haskell-lexer",
          "partial": "Pre",
          "signature": "[PosToken]-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:layoutPre"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTokenize and add position information.  Preserves white space,\n and does not insert extra tokens due to layout.\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "lexerPass0",
          "package": "haskell-lexer",
          "signature": "String -\u003e [PosToken]",
          "source": "src/Language-Haskell-Lexer.html#lexerPass0",
          "type": "function"
        },
        "index": {
          "description": "Tokenize and add position information Preserves white space and does not insert extra tokens due to layout",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "lexerPass0",
          "normalized": "String-\u003e[PosToken]",
          "package": "haskell-lexer",
          "partial": "Pass",
          "signature": "String-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:lexerPass0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003elexerPass0\u003c/a\u003e\u003c/code\u003e, except that it uses the given start position.\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "lexerPass0'",
          "package": "haskell-lexer",
          "signature": "Pos -\u003e String -\u003e [PosToken]",
          "source": "src/Language-Haskell-Lexer.html#lexerPass0%27",
          "type": "function"
        },
        "index": {
          "description": "Same as lexerPass0 except that it uses the given start position",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "lexerPass0'",
          "normalized": "Pos-\u003eString-\u003e[PosToken]",
          "package": "haskell-lexer",
          "partial": "Pass",
          "signature": "Pos-\u003eString-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:lexerPass0-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003elexerPass1\u003c/a\u003e\u003c/code\u003e handles the part of lexical analysis that\n can be done independently of the parser---the tokenization and the\n addition of the extra layout tokens \u003cn\u003e and {n}, as specified in\n section 9.3 of the revised Haskell 98 Report.\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "lexerPass1",
          "package": "haskell-lexer",
          "signature": "String -\u003e [PosToken]",
          "source": "src/Language-Haskell-Lexer.html#lexerPass1",
          "type": "function"
        },
        "index": {
          "description": "The function lexerPass1 handles the part of lexical analysis that can be done independently of the parser---the tokenization and the addition of the extra layout tokens and as specified in section of the revised Haskell Report",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "lexerPass1",
          "normalized": "String-\u003e[PosToken]",
          "package": "haskell-lexer",
          "partial": "Pass",
          "signature": "String-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:lexerPass1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Lexer",
          "name": "line",
          "package": "haskell-lexer",
          "signature": "Int",
          "source": "src/Language-Haskell-Lexer-Position.html#Pos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "line",
          "package": "haskell-lexer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdvance position by a string.\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "nextPos",
          "package": "haskell-lexer",
          "signature": "Pos -\u003e String -\u003e Pos",
          "source": "src/Language-Haskell-Lexer-Position.html#nextPos",
          "type": "function"
        },
        "index": {
          "description": "Advance position by string",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "nextPos",
          "normalized": "Pos-\u003eString-\u003ePos",
          "package": "haskell-lexer",
          "partial": "Pos",
          "signature": "Pos-\u003eString-\u003ePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:nextPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdvance position by a single character.\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "nextPos1",
          "package": "haskell-lexer",
          "signature": "Pos -\u003e Char -\u003e Pos",
          "source": "src/Language-Haskell-Lexer-Position.html#nextPos1",
          "type": "function"
        },
        "index": {
          "description": "Advance position by single character",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "nextPos1",
          "normalized": "Pos-\u003eChar-\u003ePos",
          "package": "haskell-lexer",
          "partial": "Pos",
          "signature": "Pos-\u003eChar-\u003ePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:nextPos1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove token that are not meaningful (e.g., white space and comments).\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "rmSpace",
          "package": "haskell-lexer",
          "signature": "[PosToken] -\u003e [PosToken]",
          "source": "src/Language-Haskell-Lexer.html#rmSpace",
          "type": "function"
        },
        "index": {
          "description": "Remove token that are not meaningful e.g white space and comments",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "rmSpace",
          "normalized": "[PosToken]-\u003e[PosToken]",
          "package": "haskell-lexer",
          "partial": "Space",
          "signature": "[PosToken]-\u003e[PosToken]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:rmSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe line and column numbers of a position.\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "simpPos",
          "package": "haskell-lexer",
          "signature": "Pos -\u003e (Int, Int)",
          "source": "src/Language-Haskell-Lexer-Position.html#simpPos",
          "type": "function"
        },
        "index": {
          "description": "The line and column numbers of position",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "simpPos",
          "normalized": "Pos-\u003e(Int,Int)",
          "package": "haskell-lexer",
          "partial": "Pos",
          "signature": "Pos-\u003e(Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:simpPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe first column is designated column 1, not 0.\n\u003c/p\u003e",
          "module": "Language.Haskell.Lexer",
          "name": "startPos",
          "package": "haskell-lexer",
          "signature": "Pos",
          "source": "src/Language-Haskell-Lexer-Position.html#startPos",
          "type": "function"
        },
        "index": {
          "description": "The first column is designated column not",
          "hierarchy": "Language Haskell Lexer",
          "module": "Language.Haskell.Lexer",
          "name": "startPos",
          "package": "haskell-lexer",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-lexer/docs/Language-Haskell-Lexer.html#v:startPos"
      }
    }
  ]
]