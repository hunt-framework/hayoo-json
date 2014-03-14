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
        "word": "haskell-src-meta"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the tools to handle operator fixities in infix expressions correctly.\n\u003c/p\u003e\u003cp\u003eThe problem we solve is the following. Consider making a quasiquoter which antiquotes to Haskell - for instance, the quasiquoter in \u003ca\u003ehttp://hackage.haskell.org/package/hmatrix-static\u003c/a\u003e allows me to write\n\u003c/p\u003e\u003cpre\u003e myVec :: Vector Double\n myVec = [vec| 2+3*4, 5-4-3 |]\n\u003c/pre\u003e\u003cp\u003eTo correctly parse such expressions, we need to know the fixities and precedences of the operators, so that the above is parsed the same way as\n\u003c/p\u003e\u003cpre\u003e myVec = [vec| 2+(3*4), (5-4)-3 |]\n\u003c/pre\u003e\u003cp\u003eThere is a danger, if we are not careful in parsing, that the above expression instead parses as\n\u003c/p\u003e\u003cpre\u003e myVec = [vec| (2+3)*4, 5-(4-3) |]\n\u003c/pre\u003e\u003cp\u003ewhich is a surprising bug, and would only be detected through testing at runtime, rather than at compile time.\n\u003c/p\u003e\u003cp\u003eWhen this danger arises, we use this \"careful\" module. It handles \"unresolved infix\" expressions such as \u003ccode\u003e2+3*4\u003c/code\u003e in two ways, depending on the version of GHC:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e in GHC 7.4 and above (where support for \"unresolved infix\" was added in Template Haskell), resolution of the infix expression is deferred to the compiler, which has all fixities available to it.\n\u003c/li\u003e\u003cli\u003e prior to GHC 7.4, any ambiguous infix expression is flagged as a parse error at compile time, and the user is advised to resolve the ambiguity by adding parentheses.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Language.Haskell.Meta.Parse.Careful",
          "name": "Careful",
          "package": "haskell-src-meta",
          "source": "src/Language-Haskell-Meta-Parse-Careful.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides the tools to handle operator fixities in infix expressions correctly The problem we solve is the following Consider making quasiquoter which antiquotes to Haskell for instance the quasiquoter in http hackage.haskell.org package hmatrix-static allows me to write myVec Vector Double myVec vec To correctly parse such expressions we need to know the fixities and precedences of the operators so that the above is parsed the same way as myVec vec There is danger if we are not careful in parsing that the above expression instead parses as myVec vec which is surprising bug and would only be detected through testing at runtime rather than at compile time When this danger arises we use this careful module It handles unresolved infix expressions such as in two ways depending on the version of GHC in GHC and above where support for unresolved infix was added in Template Haskell resolution of the infix expression is deferred to the compiler which has all fixities available to it prior to GHC any ambiguous infix expression is flagged as parse error at compile time and the user is advised to resolve the ambiguity by adding parentheses",
          "hierarchy": "Language Haskell Meta Parse Careful",
          "module": "Language.Haskell.Meta.Parse.Careful",
          "name": "Careful",
          "package": "haskell-src-meta",
          "partial": "Careful",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse-Careful.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Parse.Careful",
          "name": "parseDecs",
          "package": "haskell-src-meta",
          "signature": "String -\u003e Either String [Dec]",
          "source": "src/Language-Haskell-Meta-Parse-Careful.html#parseDecs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Parse Careful",
          "module": "Language.Haskell.Meta.Parse.Careful",
          "name": "parseDecs",
          "normalized": "String-\u003eEither String[Dec]",
          "package": "haskell-src-meta",
          "partial": "Decs",
          "signature": "String-\u003eEither String[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse-Careful.html#v:parseDecs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Parse.Careful",
          "name": "parseExp",
          "package": "haskell-src-meta",
          "signature": "String -\u003e Either String Exp",
          "source": "src/Language-Haskell-Meta-Parse-Careful.html#parseExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Parse Careful",
          "module": "Language.Haskell.Meta.Parse.Careful",
          "name": "parseExp",
          "normalized": "String-\u003eEither String Exp",
          "package": "haskell-src-meta",
          "partial": "Exp",
          "signature": "String-\u003eEither String Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse-Careful.html#v:parseExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Parse.Careful",
          "name": "parsePat",
          "package": "haskell-src-meta",
          "signature": "String -\u003e Either String Pat",
          "source": "src/Language-Haskell-Meta-Parse-Careful.html#parsePat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Parse Careful",
          "module": "Language.Haskell.Meta.Parse.Careful",
          "name": "parsePat",
          "normalized": "String-\u003eEither String Pat",
          "package": "haskell-src-meta",
          "partial": "Pat",
          "signature": "String-\u003eEither String Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse-Careful.html#v:parsePat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Parse.Careful",
          "name": "parseType",
          "package": "haskell-src-meta",
          "signature": "String -\u003e Either String Type",
          "source": "src/Language-Haskell-Meta-Parse-Careful.html#parseType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Parse Careful",
          "module": "Language.Haskell.Meta.Parse.Careful",
          "name": "parseType",
          "normalized": "String-\u003eEither String Type",
          "package": "haskell-src-meta",
          "partial": "Type",
          "signature": "String-\u003eEither String Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse-Careful.html#v:parseType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Parse",
          "name": "Parse",
          "package": "haskell-src-meta",
          "source": "src/Language-Haskell-Meta-Parse.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Parse",
          "module": "Language.Haskell.Meta.Parse",
          "name": "Parse",
          "package": "haskell-src-meta",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Parse",
          "name": "emptyHsModule",
          "package": "haskell-src-meta",
          "signature": "String -\u003e Module",
          "source": "src/Language-Haskell-Meta-Parse.html#emptyHsModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Parse",
          "module": "Language.Haskell.Meta.Parse",
          "name": "emptyHsModule",
          "normalized": "String-\u003eModule",
          "package": "haskell-src-meta",
          "partial": "Hs Module",
          "signature": "String-\u003eModule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:emptyHsModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Parse",
          "name": "emptySrcLoc",
          "package": "haskell-src-meta",
          "signature": "SrcLoc",
          "source": "src/Language-Haskell-Meta-Parse.html#emptySrcLoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Parse",
          "module": "Language.Haskell.Meta.Parse",
          "name": "emptySrcLoc",
          "package": "haskell-src-meta",
          "partial": "Src Loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:emptySrcLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Parse",
          "name": "moduleDecls",
          "package": "haskell-src-meta",
          "signature": "Module -\u003e [Decl]",
          "source": "src/Language-Haskell-Meta-Parse.html#moduleDecls",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Parse",
          "module": "Language.Haskell.Meta.Parse",
          "name": "moduleDecls",
          "normalized": "Module-\u003e[Decl]",
          "package": "haskell-src-meta",
          "partial": "Decls",
          "signature": "Module-\u003e[Decl]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:moduleDecls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: The provided ParseModes aren't very meaningful, use your own instead\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.Meta.Parse",
          "name": "myDefaultExtensions",
          "package": "haskell-src-meta",
          "signature": "[KnownExtension]",
          "source": "src/Language-Haskell-Meta-Parse.html#myDefaultExtensions",
          "type": "function"
        },
        "index": {
          "description": "Deprecated The provided ParseModes aren very meaningful use your own instead",
          "hierarchy": "Language Haskell Meta Parse",
          "module": "Language.Haskell.Meta.Parse",
          "name": "myDefaultExtensions",
          "normalized": "[KnownExtension]",
          "package": "haskell-src-meta",
          "partial": "Default Extensions",
          "signature": "[KnownExtension]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:myDefaultExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: The provided ParseModes aren't very meaningful, use your own instead\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.Meta.Parse",
          "name": "myDefaultParseMode",
          "package": "haskell-src-meta",
          "signature": "ParseMode",
          "source": "src/Language-Haskell-Meta-Parse.html#myDefaultParseMode",
          "type": "function"
        },
        "index": {
          "description": "Deprecated The provided ParseModes aren very meaningful use your own instead",
          "hierarchy": "Language Haskell Meta Parse",
          "module": "Language.Haskell.Meta.Parse",
          "name": "myDefaultParseMode",
          "package": "haskell-src-meta",
          "partial": "Default Parse Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:myDefaultParseMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Parse",
          "name": "parseDecs",
          "package": "haskell-src-meta",
          "signature": "String -\u003e Either String [Dec]",
          "source": "src/Language-Haskell-Meta-Parse.html#parseDecs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Parse",
          "module": "Language.Haskell.Meta.Parse",
          "name": "parseDecs",
          "normalized": "String-\u003eEither String[Dec]",
          "package": "haskell-src-meta",
          "partial": "Decs",
          "signature": "String-\u003eEither String[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:parseDecs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Parse",
          "name": "parseExp",
          "package": "haskell-src-meta",
          "signature": "String -\u003e Either String Exp",
          "source": "src/Language-Haskell-Meta-Parse.html#parseExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Parse",
          "module": "Language.Haskell.Meta.Parse",
          "name": "parseExp",
          "normalized": "String-\u003eEither String Exp",
          "package": "haskell-src-meta",
          "partial": "Exp",
          "signature": "String-\u003eEither String Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:parseExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Parse",
          "name": "parseHsDecls",
          "package": "haskell-src-meta",
          "signature": "String -\u003e Either String [Decl]",
          "source": "src/Language-Haskell-Meta-Parse.html#parseHsDecls",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Parse",
          "module": "Language.Haskell.Meta.Parse",
          "name": "parseHsDecls",
          "normalized": "String-\u003eEither String[Decl]",
          "package": "haskell-src-meta",
          "partial": "Hs Decls",
          "signature": "String-\u003eEither String[Decl]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:parseHsDecls"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Parse",
          "name": "parseHsExp",
          "package": "haskell-src-meta",
          "signature": "String -\u003e Either String Exp",
          "source": "src/Language-Haskell-Meta-Parse.html#parseHsExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Parse",
          "module": "Language.Haskell.Meta.Parse",
          "name": "parseHsExp",
          "normalized": "String-\u003eEither String Exp",
          "package": "haskell-src-meta",
          "partial": "Hs Exp",
          "signature": "String-\u003eEither String Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:parseHsExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Parse",
          "name": "parseHsModule",
          "package": "haskell-src-meta",
          "signature": "String -\u003e Either String Module",
          "source": "src/Language-Haskell-Meta-Parse.html#parseHsModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Parse",
          "module": "Language.Haskell.Meta.Parse",
          "name": "parseHsModule",
          "normalized": "String-\u003eEither String Module",
          "package": "haskell-src-meta",
          "partial": "Hs Module",
          "signature": "String-\u003eEither String Module",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:parseHsModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Parse",
          "name": "parseHsPat",
          "package": "haskell-src-meta",
          "signature": "String -\u003e Either String Pat",
          "source": "src/Language-Haskell-Meta-Parse.html#parseHsPat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Parse",
          "module": "Language.Haskell.Meta.Parse",
          "name": "parseHsPat",
          "normalized": "String-\u003eEither String Pat",
          "package": "haskell-src-meta",
          "partial": "Hs Pat",
          "signature": "String-\u003eEither String Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:parseHsPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Parse",
          "name": "parseHsType",
          "package": "haskell-src-meta",
          "signature": "String -\u003e Either String Type",
          "source": "src/Language-Haskell-Meta-Parse.html#parseHsType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Parse",
          "module": "Language.Haskell.Meta.Parse",
          "name": "parseHsType",
          "normalized": "String-\u003eEither String Type",
          "package": "haskell-src-meta",
          "partial": "Hs Type",
          "signature": "String-\u003eEither String Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:parseHsType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Parse",
          "name": "parsePat",
          "package": "haskell-src-meta",
          "signature": "String -\u003e Either String Pat",
          "source": "src/Language-Haskell-Meta-Parse.html#parsePat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Parse",
          "module": "Language.Haskell.Meta.Parse",
          "name": "parsePat",
          "normalized": "String-\u003eEither String Pat",
          "package": "haskell-src-meta",
          "partial": "Pat",
          "signature": "String-\u003eEither String Pat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:parsePat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Parse",
          "name": "parseResultToEither",
          "package": "haskell-src-meta",
          "signature": "ParseResult a -\u003e Either String a",
          "source": "src/Language-Haskell-Meta-Parse.html#parseResultToEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Parse",
          "module": "Language.Haskell.Meta.Parse",
          "name": "parseResultToEither",
          "normalized": "ParseResult a-\u003eEither String a",
          "package": "haskell-src-meta",
          "partial": "Result To Either",
          "signature": "ParseResult a-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:parseResultToEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Parse",
          "name": "parseType",
          "package": "haskell-src-meta",
          "signature": "String -\u003e Either String Type",
          "source": "src/Language-Haskell-Meta-Parse.html#parseType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Parse",
          "module": "Language.Haskell.Meta.Parse",
          "name": "parseType",
          "normalized": "String-\u003eEither String Type",
          "package": "haskell-src-meta",
          "partial": "Type",
          "signature": "String-\u003eEither String Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:parseType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Parse",
          "name": "pprHsModule",
          "package": "haskell-src-meta",
          "signature": "Module -\u003e String",
          "source": "src/Language-Haskell-Meta-Parse.html#pprHsModule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Parse",
          "module": "Language.Haskell.Meta.Parse",
          "name": "pprHsModule",
          "normalized": "Module-\u003eString",
          "package": "haskell-src-meta",
          "partial": "Hs Module",
          "signature": "Module-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:pprHsModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "Translate",
          "package": "haskell-src-meta",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "Translate",
          "package": "haskell-src-meta",
          "partial": "Translate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "ToDec",
          "package": "haskell-src-meta",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#ToDec",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "ToDec",
          "package": "haskell-src-meta",
          "partial": "To Dec",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#t:ToDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "ToDecs",
          "package": "haskell-src-meta",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#ToDecs",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "ToDecs",
          "package": "haskell-src-meta",
          "partial": "To Decs",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#t:ToDecs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "ToExp",
          "package": "haskell-src-meta",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#ToExp",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "ToExp",
          "package": "haskell-src-meta",
          "partial": "To Exp",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#t:ToExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "ToLit",
          "package": "haskell-src-meta",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#ToLit",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "ToLit",
          "package": "haskell-src-meta",
          "partial": "To Lit",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#t:ToLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "ToLoc",
          "package": "haskell-src-meta",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#ToLoc",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "ToLoc",
          "package": "haskell-src-meta",
          "partial": "To Loc",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#t:ToLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "ToName",
          "package": "haskell-src-meta",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#ToName",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "ToName",
          "package": "haskell-src-meta",
          "partial": "To Name",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#t:ToName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "ToPat",
          "package": "haskell-src-meta",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#ToPat",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "ToPat",
          "package": "haskell-src-meta",
          "partial": "To Pat",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#t:ToPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "ToStmt",
          "package": "haskell-src-meta",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#ToStmt",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "ToStmt",
          "package": "haskell-src-meta",
          "partial": "To Stmt",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#t:ToStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "ToType",
          "package": "haskell-src-meta",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#ToType",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "ToType",
          "package": "haskell-src-meta",
          "partial": "To Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#t:ToType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "(.-\u003e.)",
          "package": "haskell-src-meta",
          "signature": "Type -\u003e Type -\u003e Type",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#.-%3E.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "(.-\u003e.) .-\u003e.",
          "normalized": "Type-\u003eType-\u003eType",
          "package": "haskell-src-meta",
          "signature": "Type-\u003eType-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:.-45--62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "bangToStrictType",
          "package": "haskell-src-meta",
          "signature": "BangType -\u003e StrictType",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#bangToStrictType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "bangToStrictType",
          "normalized": "BangType-\u003eStrictType",
          "package": "haskell-src-meta",
          "partial": "To Strict Type",
          "signature": "BangType-\u003eStrictType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:bangToStrictType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "bangToVarStrictTypes",
          "package": "haskell-src-meta",
          "signature": "[Name] -\u003e BangType -\u003e [VarStrictType]",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#bangToVarStrictTypes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "bangToVarStrictTypes",
          "normalized": "[Name]-\u003eBangType-\u003e[VarStrictType]",
          "package": "haskell-src-meta",
          "partial": "To Var Strict Types",
          "signature": "[Name]-\u003eBangType-\u003e[VarStrictType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:bangToVarStrictTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "collectVars",
          "package": "haskell-src-meta",
          "signature": "Type -\u003e [TyVarBndr]",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#collectVars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "collectVars",
          "normalized": "Type-\u003e[TyVarBndr]",
          "package": "haskell-src-meta",
          "partial": "Vars",
          "signature": "Type-\u003e[TyVarBndr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:collectVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "conDeclToCon",
          "package": "haskell-src-meta",
          "signature": "ConDecl -\u003e Con",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#conDeclToCon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "conDeclToCon",
          "normalized": "ConDecl-\u003eCon",
          "package": "haskell-src-meta",
          "partial": "Decl To Con",
          "signature": "ConDecl-\u003eCon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:conDeclToCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "fixForall",
          "package": "haskell-src-meta",
          "signature": "Type -\u003e Type",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#fixForall",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "fixForall",
          "normalized": "Type-\u003eType",
          "package": "haskell-src-meta",
          "partial": "Forall",
          "signature": "Type-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:fixForall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "foldAppT",
          "package": "haskell-src-meta",
          "signature": "Type -\u003e [Type] -\u003e Type",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#foldAppT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "foldAppT",
          "normalized": "Type-\u003e[Type]-\u003eType",
          "package": "haskell-src-meta",
          "partial": "App",
          "signature": "Type-\u003e[Type]-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:foldAppT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "hsBangTypeToStrictType",
          "package": "haskell-src-meta",
          "signature": "BangType -\u003e (Strict, Type)",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#hsBangTypeToStrictType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "hsBangTypeToStrictType",
          "normalized": "BangType-\u003e(Strict,Type)",
          "package": "haskell-src-meta",
          "partial": "Bang Type To Strict Type",
          "signature": "BangType-\u003e(Strict,Type)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:hsBangTypeToStrictType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "hsBindsToDecs",
          "package": "haskell-src-meta",
          "signature": "Binds -\u003e [Dec]",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#hsBindsToDecs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "hsBindsToDecs",
          "normalized": "Binds-\u003e[Dec]",
          "package": "haskell-src-meta",
          "partial": "Binds To Decs",
          "signature": "Binds-\u003e[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:hsBindsToDecs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "hsGuardedRhsToBody",
          "package": "haskell-src-meta",
          "signature": "GuardedRhs -\u003e Body",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#hsGuardedRhsToBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "hsGuardedRhsToBody",
          "normalized": "GuardedRhs-\u003eBody",
          "package": "haskell-src-meta",
          "partial": "Guarded Rhs To Body",
          "signature": "GuardedRhs-\u003eBody",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:hsGuardedRhsToBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "hsMatchToClause",
          "package": "haskell-src-meta",
          "signature": "Match -\u003e Clause",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#hsMatchToClause",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "hsMatchToClause",
          "normalized": "Match-\u003eClause",
          "package": "haskell-src-meta",
          "partial": "Match To Clause",
          "signature": "Match-\u003eClause",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:hsMatchToClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "hsMatchesToFunD",
          "package": "haskell-src-meta",
          "signature": "[Match] -\u003e Dec",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#hsMatchesToFunD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "hsMatchesToFunD",
          "normalized": "[Match]-\u003eDec",
          "package": "haskell-src-meta",
          "partial": "Matches To Fun",
          "signature": "[Match]-\u003eDec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:hsMatchesToFunD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "hsRhsToBody",
          "package": "haskell-src-meta",
          "signature": "Rhs -\u003e Body",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#hsRhsToBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "hsRhsToBody",
          "normalized": "Rhs-\u003eBody",
          "package": "haskell-src-meta",
          "partial": "Rhs To Body",
          "signature": "Rhs-\u003eBody",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:hsRhsToBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "hsStmtToGuard",
          "package": "haskell-src-meta",
          "signature": "Stmt -\u003e Guard",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#hsStmtToGuard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "hsStmtToGuard",
          "normalized": "Stmt-\u003eGuard",
          "package": "haskell-src-meta",
          "partial": "Stmt To Guard",
          "signature": "Stmt-\u003eGuard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:hsStmtToGuard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "moduleName",
          "package": "haskell-src-meta",
          "signature": "[Char]",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#moduleName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "moduleName",
          "normalized": "[Char]",
          "package": "haskell-src-meta",
          "partial": "Name",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:moduleName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "noTH",
          "package": "haskell-src-meta",
          "signature": "String -\u003e e -\u003e a",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#noTH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "noTH",
          "normalized": "String-\u003ea-\u003eb",
          "package": "haskell-src-meta",
          "partial": "TH",
          "signature": "String-\u003ee-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:noTH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "noTHyet",
          "package": "haskell-src-meta",
          "signature": "String -\u003e String -\u003e e -\u003e a",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#noTHyet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "noTHyet",
          "normalized": "String-\u003eString-\u003ea-\u003eb",
          "package": "haskell-src-meta",
          "partial": "THyet",
          "signature": "String-\u003eString-\u003ee-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:noTHyet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "nonsense",
          "package": "haskell-src-meta",
          "signature": "String -\u003e String -\u003e e -\u003e a",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#nonsense",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "nonsense",
          "normalized": "String-\u003eString-\u003ea-\u003eb",
          "package": "haskell-src-meta",
          "signature": "String-\u003eString-\u003ee-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:nonsense"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "qualConDeclToCon",
          "package": "haskell-src-meta",
          "signature": "QualConDecl -\u003e Con",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#qualConDeclToCon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "qualConDeclToCon",
          "normalized": "QualConDecl-\u003eCon",
          "package": "haskell-src-meta",
          "partial": "Con Decl To Con",
          "signature": "QualConDecl-\u003eCon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:qualConDeclToCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toBody",
          "package": "haskell-src-meta",
          "signature": "GuardedAlts -\u003e Body",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#toBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toBody",
          "normalized": "GuardedAlts-\u003eBody",
          "package": "haskell-src-meta",
          "partial": "Body",
          "signature": "GuardedAlts-\u003eBody",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toCxt",
          "package": "haskell-src-meta",
          "signature": "Context -\u003e Cxt",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#toCxt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toCxt",
          "normalized": "Context-\u003eCxt",
          "package": "haskell-src-meta",
          "partial": "Cxt",
          "signature": "Context-\u003eCxt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toCxt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toDec",
          "package": "haskell-src-meta",
          "signature": "a -\u003e Dec",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#toDec",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toDec",
          "normalized": "a-\u003eDec",
          "package": "haskell-src-meta",
          "partial": "Dec",
          "signature": "a-\u003eDec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toDec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toDecs",
          "package": "haskell-src-meta",
          "signature": "a -\u003e [Dec]",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#toDecs",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toDecs",
          "normalized": "a-\u003e[Dec]",
          "package": "haskell-src-meta",
          "partial": "Decs",
          "signature": "a-\u003e[Dec]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toDecs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toExp",
          "package": "haskell-src-meta",
          "signature": "a -\u003e Exp",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#toExp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toExp",
          "normalized": "a-\u003eExp",
          "package": "haskell-src-meta",
          "partial": "Exp",
          "signature": "a-\u003eExp",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toFieldExp",
          "package": "haskell-src-meta",
          "signature": "FieldUpdate -\u003e FieldExp",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#toFieldExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toFieldExp",
          "normalized": "FieldUpdate-\u003eFieldExp",
          "package": "haskell-src-meta",
          "partial": "Field Exp",
          "signature": "FieldUpdate-\u003eFieldExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toFieldExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toGuard",
          "package": "haskell-src-meta",
          "signature": "GuardedAlt -\u003e (Guard, Exp)",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#toGuard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toGuard",
          "normalized": "GuardedAlt-\u003e(Guard,Exp)",
          "package": "haskell-src-meta",
          "partial": "Guard",
          "signature": "GuardedAlt-\u003e(Guard,Exp)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toGuard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toKind",
          "package": "haskell-src-meta",
          "signature": "Kind -\u003e Kind",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#toKind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toKind",
          "normalized": "Kind-\u003eKind",
          "package": "haskell-src-meta",
          "partial": "Kind",
          "signature": "Kind-\u003eKind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toLit",
          "package": "haskell-src-meta",
          "signature": "a -\u003e Lit",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#toLit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toLit",
          "normalized": "a-\u003eLit",
          "package": "haskell-src-meta",
          "partial": "Lit",
          "signature": "a-\u003eLit",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toLit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toLoc",
          "package": "haskell-src-meta",
          "signature": "a -\u003e Loc",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#toLoc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toLoc",
          "normalized": "a-\u003eLoc",
          "package": "haskell-src-meta",
          "partial": "Loc",
          "signature": "a-\u003eLoc",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toMatch",
          "package": "haskell-src-meta",
          "signature": "Alt -\u003e Match",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#toMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toMatch",
          "normalized": "Alt-\u003eMatch",
          "package": "haskell-src-meta",
          "partial": "Match",
          "signature": "Alt-\u003eMatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toName",
          "package": "haskell-src-meta",
          "signature": "a -\u003e Name",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#toName",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toName",
          "normalized": "a-\u003eName",
          "package": "haskell-src-meta",
          "partial": "Name",
          "signature": "a-\u003eName",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toPat",
          "package": "haskell-src-meta",
          "signature": "a -\u003e Pat",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#toPat",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toPat",
          "normalized": "a-\u003ePat",
          "package": "haskell-src-meta",
          "partial": "Pat",
          "signature": "a-\u003ePat",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toPat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toStmt",
          "package": "haskell-src-meta",
          "signature": "a -\u003e Stmt",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#toStmt",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toStmt",
          "normalized": "a-\u003eStmt",
          "package": "haskell-src-meta",
          "partial": "Stmt",
          "signature": "a-\u003eStmt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toTyVar",
          "package": "haskell-src-meta",
          "signature": "TyVarBind -\u003e TyVarBndr",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#toTyVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toTyVar",
          "normalized": "TyVarBind-\u003eTyVarBndr",
          "package": "haskell-src-meta",
          "partial": "Ty Var",
          "signature": "TyVarBind-\u003eTyVarBndr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toTyVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toType",
          "package": "haskell-src-meta",
          "signature": "a -\u003e Type",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#toType",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "toType",
          "normalized": "a-\u003eType",
          "package": "haskell-src-meta",
          "partial": "Type",
          "signature": "a-\u003eType",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "todo",
          "package": "haskell-src-meta",
          "signature": "String -\u003e e -\u003e a",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#todo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "todo",
          "normalized": "String-\u003ea-\u003eb",
          "package": "haskell-src-meta",
          "signature": "String-\u003ee-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:todo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "transAct",
          "package": "haskell-src-meta",
          "signature": "Activation -\u003e Phases",
          "source": "src/Language-Haskell-Meta-Syntax-Translate.html#transAct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Syntax Translate",
          "module": "Language.Haskell.Meta.Syntax.Translate",
          "name": "transAct",
          "normalized": "Activation-\u003ePhases",
          "package": "haskell-src-meta",
          "partial": "Act",
          "signature": "Activation-\u003ePhases",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:transAct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is a staging ground\n for to-be-organized-and-merged-nicely code.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.Meta.Utils",
          "name": "Utils",
          "package": "haskell-src-meta",
          "source": "src/Language-Haskell-Meta-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "This module is staging ground for to-be-organized-and-merged-nicely code",
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "Utils",
          "package": "haskell-src-meta",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "(|$|)",
          "package": "haskell-src-meta",
          "signature": "ExpQ -\u003e ExpQ -\u003e ExpQ",
          "source": "src/Language-Haskell-Meta-Utils.html#%7C%24%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "(|$|) |$|",
          "normalized": "ExpQ-\u003eExpQ-\u003eExpQ",
          "package": "haskell-src-meta",
          "signature": "ExpQ-\u003eExpQ-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:-124--36--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "(|-\u003e|)",
          "package": "haskell-src-meta",
          "signature": "TypeQ -\u003e TypeQ -\u003e TypeQ",
          "source": "src/Language-Haskell-Meta-Utils.html#%7C-%3E%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "(|-\u003e|) |-\u003e|",
          "normalized": "TypeQ-\u003eTypeQ-\u003eTypeQ",
          "package": "haskell-src-meta",
          "signature": "TypeQ-\u003eTypeQ-\u003eTypeQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:-124--45--62--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "(|.|)",
          "package": "haskell-src-meta",
          "signature": "ExpQ -\u003e ExpQ -\u003e ExpQ",
          "source": "src/Language-Haskell-Meta-Utils.html#%7C.%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "(|.|) |.|",
          "normalized": "ExpQ-\u003eExpQ-\u003eExpQ",
          "package": "haskell-src-meta",
          "signature": "ExpQ-\u003eExpQ-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:-124-.-124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "applyT",
          "package": "haskell-src-meta",
          "signature": "Type -\u003e Type -\u003e Type",
          "source": "src/Language-Haskell-Meta-Utils.html#applyT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "applyT",
          "normalized": "Type-\u003eType-\u003eType",
          "package": "haskell-src-meta",
          "signature": "Type-\u003eType-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:applyT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe arity of a Type.\n\u003c/p\u003e",
          "module": "Language.Haskell.Meta.Utils",
          "name": "arityT",
          "package": "haskell-src-meta",
          "signature": "Type -\u003e Int",
          "source": "src/Language-Haskell-Meta-Utils.html#arityT",
          "type": "function"
        },
        "index": {
          "description": "The arity of Type",
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "arityT",
          "normalized": "Type-\u003eInt",
          "package": "haskell-src-meta",
          "signature": "Type-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:arityT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "cleanNames",
          "package": "haskell-src-meta",
          "signature": "a -\u003e a",
          "source": "src/Language-Haskell-Meta-Utils.html#cleanNames",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "cleanNames",
          "normalized": "a-\u003ea",
          "package": "haskell-src-meta",
          "partial": "Names",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:cleanNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "conName",
          "package": "haskell-src-meta",
          "signature": "Con -\u003e Name",
          "source": "src/Language-Haskell-Meta-Utils.html#conName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "conName",
          "normalized": "Con-\u003eName",
          "package": "haskell-src-meta",
          "partial": "Name",
          "signature": "Con-\u003eName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:conName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "conToConType",
          "package": "haskell-src-meta",
          "signature": "Type -\u003e Con -\u003e Type",
          "source": "src/Language-Haskell-Meta-Utils.html#conToConType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "conToConType",
          "normalized": "Type-\u003eCon-\u003eType",
          "package": "haskell-src-meta",
          "partial": "To Con Type",
          "signature": "Type-\u003eCon-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:conToConType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "conTypes",
          "package": "haskell-src-meta",
          "signature": "Con -\u003e [Type]",
          "source": "src/Language-Haskell-Meta-Utils.html#conTypes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "conTypes",
          "normalized": "Con-\u003e[Type]",
          "package": "haskell-src-meta",
          "partial": "Types",
          "signature": "Con-\u003e[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:conTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "dataDCons",
          "package": "haskell-src-meta",
          "signature": "Dec -\u003e [Con]",
          "source": "src/Language-Haskell-Meta-Utils.html#dataDCons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "dataDCons",
          "normalized": "Dec-\u003e[Con]",
          "package": "haskell-src-meta",
          "partial": "DCons",
          "signature": "Dec-\u003e[Con]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:dataDCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "decCons",
          "package": "haskell-src-meta",
          "signature": "Dec -\u003e [Con]",
          "source": "src/Language-Haskell-Meta-Utils.html#decCons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "decCons",
          "normalized": "Dec-\u003e[Con]",
          "package": "haskell-src-meta",
          "partial": "Cons",
          "signature": "Dec-\u003e[Con]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:decCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "decName",
          "package": "haskell-src-meta",
          "signature": "Dec -\u003e Maybe Name",
          "source": "src/Language-Haskell-Meta-Utils.html#decName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "decName",
          "normalized": "Dec-\u003eMaybe Name",
          "package": "haskell-src-meta",
          "partial": "Name",
          "signature": "Dec-\u003eMaybe Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:decName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "decTyVars",
          "package": "haskell-src-meta",
          "signature": "Dec -\u003e [TyVarBndr]",
          "source": "src/Language-Haskell-Meta-Utils.html#decTyVars",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "decTyVars",
          "normalized": "Dec-\u003e[TyVarBndr]",
          "package": "haskell-src-meta",
          "partial": "Ty Vars",
          "signature": "Dec-\u003e[TyVarBndr]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:decTyVars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "eitherQ",
          "package": "haskell-src-meta",
          "signature": "(e -\u003e String) -\u003e Either e a -\u003e Q a",
          "source": "src/Language-Haskell-Meta-Utils.html#eitherQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "eitherQ",
          "normalized": "(a-\u003eString)-\u003eEither a b-\u003eQ b",
          "package": "haskell-src-meta",
          "signature": "(e-\u003eString)-\u003eEither e a-\u003eQ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:eitherQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "foreignName",
          "package": "haskell-src-meta",
          "signature": "Foreign -\u003e Name",
          "source": "src/Language-Haskell-Meta-Utils.html#foreignName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "foreignName",
          "normalized": "Foreign-\u003eName",
          "package": "haskell-src-meta",
          "partial": "Name",
          "signature": "Foreign-\u003eName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:foreignName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "fromDataConI",
          "package": "haskell-src-meta",
          "signature": "Info -\u003e Q (Maybe Exp)",
          "source": "src/Language-Haskell-Meta-Utils.html#fromDataConI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "fromDataConI",
          "normalized": "Info-\u003eQ(Maybe Exp)",
          "package": "haskell-src-meta",
          "partial": "Data Con",
          "signature": "Info-\u003eQ(Maybe Exp)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:fromDataConI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "fromTyConI",
          "package": "haskell-src-meta",
          "signature": "Info -\u003e Maybe Dec",
          "source": "src/Language-Haskell-Meta-Utils.html#fromTyConI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "fromTyConI",
          "normalized": "Info-\u003eMaybe Dec",
          "package": "haskell-src-meta",
          "partial": "Ty Con",
          "signature": "Info-\u003eMaybe Dec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:fromTyConI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "functionT",
          "package": "haskell-src-meta",
          "signature": "[TypeQ] -\u003e TypeQ",
          "source": "src/Language-Haskell-Meta-Utils.html#functionT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "functionT",
          "normalized": "[TypeQ]-\u003eTypeQ",
          "package": "haskell-src-meta",
          "signature": "[TypeQ]-\u003eTypeQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:functionT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "gpretty",
          "package": "haskell-src-meta",
          "signature": "a -\u003e String",
          "source": "src/Language-Haskell-Meta-Utils.html#gpretty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "gpretty",
          "normalized": "a-\u003eString",
          "package": "haskell-src-meta",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:gpretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "mkClauseQ",
          "package": "haskell-src-meta",
          "signature": "[PatQ] -\u003e ExpQ -\u003e ClauseQ",
          "source": "src/Language-Haskell-Meta-Utils.html#mkClauseQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "mkClauseQ",
          "normalized": "[PatQ]-\u003eExpQ-\u003eClauseQ",
          "package": "haskell-src-meta",
          "partial": "Clause",
          "signature": "[PatQ]-\u003eExpQ-\u003eClauseQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:mkClauseQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "mkFunD",
          "package": "haskell-src-meta",
          "signature": "Name -\u003e [Pat] -\u003e Exp -\u003e Dec",
          "source": "src/Language-Haskell-Meta-Utils.html#mkFunD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "mkFunD",
          "normalized": "Name-\u003e[Pat]-\u003eExp-\u003eDec",
          "package": "haskell-src-meta",
          "partial": "Fun",
          "signature": "Name-\u003e[Pat]-\u003eExp-\u003eDec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:mkFunD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "mkVarT",
          "package": "haskell-src-meta",
          "signature": "String -\u003e TypeQ",
          "source": "src/Language-Haskell-Meta-Utils.html#mkVarT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "mkVarT",
          "normalized": "String-\u003eTypeQ",
          "package": "haskell-src-meta",
          "partial": "Var",
          "signature": "String-\u003eTypeQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:mkVarT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfinite list of names composed of lowercase letters\n\u003c/p\u003e",
          "module": "Language.Haskell.Meta.Utils",
          "name": "myNames",
          "package": "haskell-src-meta",
          "signature": "[Name]",
          "source": "src/Language-Haskell-Meta-Utils.html#myNames",
          "type": "function"
        },
        "index": {
          "description": "Infinite list of names composed of lowercase letters",
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "myNames",
          "normalized": "[Name]",
          "package": "haskell-src-meta",
          "partial": "Names",
          "signature": "[Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:myNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRandomly useful.\n\u003c/p\u003e",
          "module": "Language.Haskell.Meta.Utils",
          "name": "nameSpaceOf",
          "package": "haskell-src-meta",
          "signature": "Name -\u003e Maybe NameSpace",
          "source": "src/Language-Haskell-Meta-Utils.html#nameSpaceOf",
          "type": "function"
        },
        "index": {
          "description": "Randomly useful",
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "nameSpaceOf",
          "normalized": "Name-\u003eMaybe NameSpace",
          "package": "haskell-src-meta",
          "partial": "Space Of",
          "signature": "Name-\u003eMaybe NameSpace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:nameSpaceOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "nameToRawCodeStr",
          "package": "haskell-src-meta",
          "signature": "Name -\u003e String",
          "source": "src/Language-Haskell-Meta-Utils.html#nameToRawCodeStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "nameToRawCodeStr",
          "normalized": "Name-\u003eString",
          "package": "haskell-src-meta",
          "partial": "To Raw Code Str",
          "signature": "Name-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:nameToRawCodeStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove qualification, etc.\n\u003c/p\u003e",
          "module": "Language.Haskell.Meta.Utils",
          "name": "normaliseName",
          "package": "haskell-src-meta",
          "signature": "Name -\u003e Name",
          "source": "src/Language-Haskell-Meta-Utils.html#normaliseName",
          "type": "function"
        },
        "index": {
          "description": "Remove qualification etc",
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "normaliseName",
          "normalized": "Name-\u003eName",
          "package": "haskell-src-meta",
          "partial": "Name",
          "signature": "Name-\u003eName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:normaliseName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "normalizeT",
          "package": "haskell-src-meta",
          "signature": "a -\u003e a",
          "source": "src/Language-Haskell-Meta-Utils.html#normalizeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "normalizeT",
          "normalized": "a-\u003ea",
          "package": "haskell-src-meta",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:normalizeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "pp",
          "package": "haskell-src-meta",
          "signature": "a -\u003e String",
          "source": "src/Language-Haskell-Meta-Utils.html#pp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "pp",
          "normalized": "a-\u003eString",
          "package": "haskell-src-meta",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:pp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "ppDoc",
          "package": "haskell-src-meta",
          "signature": "a -\u003e Doc",
          "source": "src/Language-Haskell-Meta-Utils.html#ppDoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "ppDoc",
          "normalized": "a-\u003eDoc",
          "package": "haskell-src-meta",
          "partial": "Doc",
          "signature": "a-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:ppDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type passed in must have a \u003ccode\u003eShow\u003c/code\u003e instance which\n  produces a valid Haskell expression. Returns an empty\n  \u003ccode\u003eString\u003c/code\u003e if this is not the case. This is not TH-specific,\n  but useful in general.\n\u003c/p\u003e",
          "module": "Language.Haskell.Meta.Utils",
          "name": "pretty",
          "package": "haskell-src-meta",
          "signature": "a -\u003e String",
          "source": "src/Language-Haskell-Meta-Utils.html#pretty",
          "type": "function"
        },
        "index": {
          "description": "The type passed in must have Show instance which produces valid Haskell expression Returns an empty String if this is not the case This is not TH-specific but useful in general",
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "pretty",
          "normalized": "a-\u003eString",
          "package": "haskell-src-meta",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:pretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "recCName",
          "package": "haskell-src-meta",
          "signature": "Con -\u003e Maybe Name",
          "source": "src/Language-Haskell-Meta-Utils.html#recCName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "recCName",
          "normalized": "Con-\u003eMaybe Name",
          "package": "haskell-src-meta",
          "partial": "CName",
          "signature": "Con-\u003eMaybe Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:recCName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRename type variables in the Type according to the given association\n list. Normalise constructor names (remove qualification, etc.)\n If a name is not found in the association list, replace it with one from\n the fresh names list, and add this translation to the returned list.\n The fresh names list should be infinite; myNames is a good example.\n\u003c/p\u003e",
          "module": "Language.Haskell.Meta.Utils",
          "name": "renameT",
          "package": "haskell-src-meta",
          "signature": "[(Name, Name)] -\u003e [Name] -\u003e Type -\u003e (Type, [(Name, Name)], [Name])",
          "source": "src/Language-Haskell-Meta-Utils.html#renameT",
          "type": "function"
        },
        "index": {
          "description": "Rename type variables in the Type according to the given association list Normalise constructor names remove qualification etc If name is not found in the association list replace it with one from the fresh names list and add this translation to the returned list The fresh names list should be infinite myNames is good example",
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "renameT",
          "normalized": "[(Name,Name)]-\u003e[Name]-\u003eType-\u003e(Type,[(Name,Name)],[Name])",
          "package": "haskell-src-meta",
          "signature": "[(Name,Name)]-\u003e[Name]-\u003eType-\u003e(Type,[(Name,Name)],[Name])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:renameT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralisation of renameTs\n\u003c/p\u003e",
          "module": "Language.Haskell.Meta.Utils",
          "name": "renameThings",
          "package": "haskell-src-meta",
          "signature": "(t1 -\u003e t2 -\u003e t -\u003e (a, t1, t2)) -\u003e t1 -\u003e t2 -\u003e [a] -\u003e [t] -\u003e ([a], t1, t2)",
          "source": "src/Language-Haskell-Meta-Utils.html#renameThings",
          "type": "function"
        },
        "index": {
          "description": "Generalisation of renameTs",
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "renameThings",
          "normalized": "(a-\u003ea-\u003ea-\u003e(b,a,a))-\u003ea-\u003ea-\u003e[b]-\u003e[a]-\u003e([b],a,a)",
          "package": "haskell-src-meta",
          "partial": "Things",
          "signature": "(t-\u003et-\u003et-\u003e(a,t,t))-\u003et-\u003et-\u003e[a]-\u003e[t]-\u003e([a],t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:renameThings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erenameT applied to a list of types\n\u003c/p\u003e",
          "module": "Language.Haskell.Meta.Utils",
          "name": "renameTs",
          "package": "haskell-src-meta",
          "signature": "[(Name, Name)] -\u003e [Name] -\u003e [Type] -\u003e [Type] -\u003e ([Type], [(Name, Name)], [Name])",
          "source": "src/Language-Haskell-Meta-Utils.html#renameTs",
          "type": "function"
        },
        "index": {
          "description": "renameT applied to list of types",
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "renameTs",
          "normalized": "[(Name,Name)]-\u003e[Name]-\u003e[Type]-\u003e[Type]-\u003e([Type],[(Name,Name)],[Name])",
          "package": "haskell-src-meta",
          "partial": "Ts",
          "signature": "[(Name,Name)]-\u003e[Name]-\u003e[Type]-\u003e[Type]-\u003e([Type],[(Name,Name)],[Name])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:renameTs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "showToPatQ",
          "package": "haskell-src-meta",
          "signature": "a -\u003e PatQ",
          "source": "src/Language-Haskell-Meta-Utils.html#showToPatQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "showToPatQ",
          "normalized": "a-\u003ePatQ",
          "package": "haskell-src-meta",
          "partial": "To Pat",
          "signature": "a-\u003ePatQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:showToPatQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "splitCon",
          "package": "haskell-src-meta",
          "signature": "Con -\u003e (Name, [Type])",
          "source": "src/Language-Haskell-Meta-Utils.html#splitCon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "splitCon",
          "normalized": "Con-\u003e(Name,[Type])",
          "package": "haskell-src-meta",
          "partial": "Con",
          "signature": "Con-\u003e(Name,[Type])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:splitCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "strictTypeTy",
          "package": "haskell-src-meta",
          "signature": "StrictType -\u003e Type",
          "source": "src/Language-Haskell-Meta-Utils.html#strictTypeTy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "strictTypeTy",
          "normalized": "StrictType-\u003eType",
          "package": "haskell-src-meta",
          "partial": "Type Ty",
          "signature": "StrictType-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:strictTypeTy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "substT",
          "package": "haskell-src-meta",
          "signature": "[(Name, Type)] -\u003e [Name] -\u003e Type -\u003e Type",
          "source": "src/Language-Haskell-Meta-Utils.html#substT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "substT",
          "normalized": "[(Name,Type)]-\u003e[Name]-\u003eType-\u003eType",
          "package": "haskell-src-meta",
          "signature": "[(Name,Type)]-\u003e[Name]-\u003eType-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:substT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe strategy for producing QuasiQuoters which\n  this datatype aims to facilitate is as follows.\n  Given a collection of datatypes which make up\n  the to-be-quasiquoted languages AST, make each\n  type in this collection an instance of at least\n  \u003ccode\u003eShow\u003c/code\u003e and \u003ccode\u003eLift\u003c/code\u003e. Now, assuming \u003ccode\u003eparsePat\u003c/code\u003e and\n  \u003ccode\u003eparseExp\u003c/code\u003e, both of type \u003ccode\u003eString -\u003e Q a\u003c/code\u003e (where \u003ccode\u003ea\u003c/code\u003e\n  is the top level type of the AST), are the pair of\n  functions you wish to use for parsing in pattern and\n  expression context respectively, put them inside\n  a \u003ccode\u003eQuoter\u003c/code\u003e datatype and pass this to quasify.\n\u003c/p\u003e",
          "module": "Language.Haskell.Meta.Utils",
          "name": "toExpQ",
          "package": "haskell-src-meta",
          "signature": "(String -\u003e Q a) -\u003e String -\u003e ExpQ",
          "source": "src/Language-Haskell-Meta-Utils.html#toExpQ",
          "type": "function"
        },
        "index": {
          "description": "The strategy for producing QuasiQuoters which this datatype aims to facilitate is as follows Given collection of datatypes which make up the to-be-quasiquoted languages AST make each type in this collection an instance of at least Show and Lift Now assuming parsePat and parseExp both of type String where is the top level type of the AST are the pair of functions you wish to use for parsing in pattern and expression context respectively put them inside Quoter datatype and pass this to quasify",
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "toExpQ",
          "normalized": "(String-\u003eQ a)-\u003eString-\u003eExpQ",
          "package": "haskell-src-meta",
          "partial": "Exp",
          "signature": "(String-\u003eQ a)-\u003eString-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:toExpQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "toPatQ",
          "package": "haskell-src-meta",
          "signature": "(String -\u003e Q a) -\u003e String -\u003e PatQ",
          "source": "src/Language-Haskell-Meta-Utils.html#toPatQ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "toPatQ",
          "normalized": "(String-\u003eQ a)-\u003eString-\u003ePatQ",
          "package": "haskell-src-meta",
          "partial": "Pat",
          "signature": "(String-\u003eQ a)-\u003eString-\u003ePatQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:toPatQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "typeToName",
          "package": "haskell-src-meta",
          "signature": "Type -\u003e Maybe Name",
          "source": "src/Language-Haskell-Meta-Utils.html#typeToName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "typeToName",
          "normalized": "Type-\u003eMaybe Name",
          "package": "haskell-src-meta",
          "partial": "To Name",
          "signature": "Type-\u003eMaybe Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:typeToName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "unForall",
          "package": "haskell-src-meta",
          "signature": "Type -\u003e Type",
          "source": "src/Language-Haskell-Meta-Utils.html#unForall",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "unForall",
          "normalized": "Type-\u003eType",
          "package": "haskell-src-meta",
          "partial": "Forall",
          "signature": "Type-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:unForall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003eunsafeRunQ = unsafePerformIO . runQ\u003c/pre\u003e",
          "module": "Language.Haskell.Meta.Utils",
          "name": "unsafeRunQ",
          "package": "haskell-src-meta",
          "signature": "Q a -\u003e a",
          "source": "src/Language-Haskell-Meta-Utils.html#unsafeRunQ",
          "type": "function"
        },
        "index": {
          "description": "unsafeRunQ unsafePerformIO runQ",
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "unsafeRunQ",
          "normalized": "Q a-\u003ea",
          "package": "haskell-src-meta",
          "partial": "Run",
          "signature": "Q a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:unsafeRunQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "unwindE",
          "package": "haskell-src-meta",
          "signature": "Exp -\u003e [Exp]",
          "source": "src/Language-Haskell-Meta-Utils.html#unwindE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "unwindE",
          "normalized": "Exp-\u003e[Exp]",
          "package": "haskell-src-meta",
          "signature": "Exp-\u003e[Exp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:unwindE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "unwindT",
          "package": "haskell-src-meta",
          "signature": "Type -\u003e [Type]",
          "source": "src/Language-Haskell-Meta-Utils.html#unwindT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "unwindT",
          "normalized": "Type-\u003e[Type]",
          "package": "haskell-src-meta",
          "signature": "Type-\u003e[Type]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:unwindT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta.Utils",
          "name": "varStrictTypeTy",
          "package": "haskell-src-meta",
          "signature": "VarStrictType -\u003e Type",
          "source": "src/Language-Haskell-Meta-Utils.html#varStrictTypeTy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell Meta Utils",
          "module": "Language.Haskell.Meta.Utils",
          "name": "varStrictTypeTy",
          "normalized": "VarStrictType-\u003eType",
          "package": "haskell-src-meta",
          "partial": "Strict Type Ty",
          "signature": "VarStrictType-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:varStrictTypeTy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.Meta",
          "name": "Meta",
          "package": "haskell-src-meta",
          "source": "src/Language-Haskell-Meta.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell Meta",
          "module": "Language.Haskell.Meta",
          "name": "Meta",
          "package": "haskell-src-meta",
          "partial": "Meta",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use the th-orphans package instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eThis module is exported for backwards-compatibility purposes.\n  All it does is re-export the instances defined in \n  \u003ca\u003eLanguage.Haskell.TH.Instances\u003c/a\u003e, from the th-orphans package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.TH.Instances.Lift",
          "name": "Lift",
          "package": "haskell-src-meta",
          "source": "src/Language-Haskell-TH-Instances-Lift.html",
          "type": "module"
        },
        "index": {
          "description": "Deprecated Use the th-orphans package instead This module is exported for backwards-compatibility purposes All it does is re-export the instances defined in Language.Haskell.TH.Instances from the th-orphans package",
          "hierarchy": "Language Haskell TH Instances Lift",
          "module": "Language.Haskell.TH.Instances.Lift",
          "name": "Lift",
          "package": "haskell-src-meta",
          "partial": "Lift",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-TH-Instances-Lift.html#"
      }
    }
  ]
]