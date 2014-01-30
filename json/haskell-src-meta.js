[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse-Careful.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides the tools to handle operator fixities in infix expressions correctly.\n\u003c/p\u003e\u003cp\u003eThe problem we solve is the following. Consider making a quasiquoter which antiquotes to Haskell - for instance, the quasiquoter in \u003ca\u003ehttp://hackage.haskell.org/package/hmatrix-static\u003c/a\u003e allows me to write\n\u003c/p\u003e\u003cpre\u003e myVec :: Vector Double\n myVec = [vec| 2+3*4, 5-4-3 |]\n\u003c/pre\u003e\u003cp\u003eTo correctly parse such expressions, we need to know the fixities and precedences of the operators, so that the above is parsed the same way as\n\u003c/p\u003e\u003cpre\u003e myVec = [vec| 2+(3*4), (5-4)-3 |]\n\u003c/pre\u003e\u003cp\u003eThere is a danger, if we are not careful in parsing, that the above expression instead parses as\n\u003c/p\u003e\u003cpre\u003e myVec = [vec| (2+3)*4, 5-(4-3) |]\n\u003c/pre\u003e\u003cp\u003ewhich is a surprising bug, and would only be detected through testing at runtime, rather than at compile time.\n\u003c/p\u003e\u003cp\u003eWhen this danger arises, we use this \"careful\" module. It handles \"unresolved infix\" expressions such as \u003ccode\u003e2+3*4\u003c/code\u003e in two ways, depending on the version of GHC:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e in GHC 7.4 and above (where support for \"unresolved infix\" was added in Template Haskell), resolution of the infix expression is deferred to the compiler, which has all fixities available to it.\n\u003c/li\u003e\u003cli\u003e prior to GHC 7.4, any ambiguous infix expression is flagged as a parse error at compile time, and the user is advised to resolve the ambiguity by adding parentheses.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Language.Haskell.Meta.Parse.Careful",
        "fct-package": "haskell-src-meta",
        "fct-signature": "module",
        "fct-source": "src/Language-Haskell-Meta-Parse-Careful.html",
        "fct-type": "module",
        "title": "Careful"
      },
      "index": {
        "description": "This module provides the tools to handle operator fixities in infix expressions correctly The problem we solve is the following Consider making quasiquoter which antiquotes to Haskell for instance the quasiquoter in http hackage.haskell.org package hmatrix-static allows me to write myVec Vector Double myVec vec To correctly parse such expressions we need to know the fixities and precedences of the operators so that the above is parsed the same way as myVec vec There is danger if we are not careful in parsing that the above expression instead parses as myVec vec which is surprising bug and would only be detected through testing at runtime rather than at compile time When this danger arises we use this careful module It handles unresolved infix expressions such as in two ways depending on the version of GHC in GHC and above where support for unresolved infix was added in Template Haskell resolution of the infix expression is deferred to the compiler which has all fixities available to it prior to GHC any ambiguous infix expression is flagged as parse error at compile time and the user is advised to resolve the ambiguity by adding parentheses",
        "hierarchy": "Language Haskell Meta Parse Careful",
        "module": "Language.Haskell.Meta.Parse.Careful",
        "name": "Careful",
        "normalized": "",
        "package": "haskell-src-meta",
        "partial": "Careful",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse-Careful.html#v:parseDecs",
      "description": {
        "fct-module": "Language.Haskell.Meta.Parse.Careful",
        "fct-package": "haskell-src-meta",
        "fct-signature": "String -\u003e Either String [Dec]",
        "fct-source": "src/Language-Haskell-Meta-Parse-Careful.html#parseDecs",
        "fct-type": "function",
        "title": "parseDecs"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Parse Careful",
        "module": "Language.Haskell.Meta.Parse.Careful",
        "name": "parseDecs",
        "normalized": "String-\u003eEither String[Dec]",
        "package": "haskell-src-meta",
        "partial": "Decs",
        "signature": "String-\u003eEither String[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse-Careful.html#v:parseExp",
      "description": {
        "fct-module": "Language.Haskell.Meta.Parse.Careful",
        "fct-package": "haskell-src-meta",
        "fct-signature": "String -\u003e Either String Exp",
        "fct-source": "src/Language-Haskell-Meta-Parse-Careful.html#parseExp",
        "fct-type": "function",
        "title": "parseExp"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Parse Careful",
        "module": "Language.Haskell.Meta.Parse.Careful",
        "name": "parseExp",
        "normalized": "String-\u003eEither String Exp",
        "package": "haskell-src-meta",
        "partial": "Exp",
        "signature": "String-\u003eEither String Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse-Careful.html#v:parsePat",
      "description": {
        "fct-module": "Language.Haskell.Meta.Parse.Careful",
        "fct-package": "haskell-src-meta",
        "fct-signature": "String -\u003e Either String Pat",
        "fct-source": "src/Language-Haskell-Meta-Parse-Careful.html#parsePat",
        "fct-type": "function",
        "title": "parsePat"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Parse Careful",
        "module": "Language.Haskell.Meta.Parse.Careful",
        "name": "parsePat",
        "normalized": "String-\u003eEither String Pat",
        "package": "haskell-src-meta",
        "partial": "Pat",
        "signature": "String-\u003eEither String Pat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse-Careful.html#v:parseType",
      "description": {
        "fct-module": "Language.Haskell.Meta.Parse.Careful",
        "fct-package": "haskell-src-meta",
        "fct-signature": "String -\u003e Either String Type",
        "fct-source": "src/Language-Haskell-Meta-Parse-Careful.html#parseType",
        "fct-type": "function",
        "title": "parseType"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Parse Careful",
        "module": "Language.Haskell.Meta.Parse.Careful",
        "name": "parseType",
        "normalized": "String-\u003eEither String Type",
        "package": "haskell-src-meta",
        "partial": "Type",
        "signature": "String-\u003eEither String Type"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#",
      "description": {
        "fct-module": "Language.Haskell.Meta.Parse",
        "fct-package": "haskell-src-meta",
        "fct-signature": "module",
        "fct-source": "src/Language-Haskell-Meta-Parse.html",
        "fct-type": "module",
        "title": "Parse"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Parse",
        "module": "Language.Haskell.Meta.Parse",
        "name": "Parse",
        "normalized": "",
        "package": "haskell-src-meta",
        "partial": "Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:emptyHsModule",
      "description": {
        "fct-module": "Language.Haskell.Meta.Parse",
        "fct-package": "haskell-src-meta",
        "fct-signature": "String -\u003e Module",
        "fct-source": "src/Language-Haskell-Meta-Parse.html#emptyHsModule",
        "fct-type": "function",
        "title": "emptyHsModule"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Parse",
        "module": "Language.Haskell.Meta.Parse",
        "name": "emptyHsModule",
        "normalized": "String-\u003eModule",
        "package": "haskell-src-meta",
        "partial": "Hs Module",
        "signature": "String-\u003eModule"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:emptySrcLoc",
      "description": {
        "fct-module": "Language.Haskell.Meta.Parse",
        "fct-package": "haskell-src-meta",
        "fct-signature": "SrcLoc",
        "fct-source": "src/Language-Haskell-Meta-Parse.html#emptySrcLoc",
        "fct-type": "function",
        "title": "emptySrcLoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Parse",
        "module": "Language.Haskell.Meta.Parse",
        "name": "emptySrcLoc",
        "normalized": "",
        "package": "haskell-src-meta",
        "partial": "Src Loc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:moduleDecls",
      "description": {
        "fct-module": "Language.Haskell.Meta.Parse",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Module -\u003e [Decl]",
        "fct-source": "src/Language-Haskell-Meta-Parse.html#moduleDecls",
        "fct-type": "function",
        "title": "moduleDecls"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Parse",
        "module": "Language.Haskell.Meta.Parse",
        "name": "moduleDecls",
        "normalized": "Module-\u003e[Decl]",
        "package": "haskell-src-meta",
        "partial": "Decls",
        "signature": "Module-\u003e[Decl]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:myDefaultExtensions",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: The provided ParseModes aren't very meaningful, use your own instead\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Haskell.Meta.Parse",
        "fct-package": "haskell-src-meta",
        "fct-signature": "[KnownExtension]",
        "fct-source": "src/Language-Haskell-Meta-Parse.html#myDefaultExtensions",
        "fct-type": "function",
        "title": "myDefaultExtensions"
      },
      "index": {
        "description": "Deprecated The provided ParseModes aren very meaningful use your own instead",
        "hierarchy": "Language Haskell Meta Parse",
        "module": "Language.Haskell.Meta.Parse",
        "name": "myDefaultExtensions",
        "normalized": "[KnownExtension]",
        "package": "haskell-src-meta",
        "partial": "Default Extensions",
        "signature": "[KnownExtension]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:myDefaultParseMode",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: The provided ParseModes aren't very meaningful, use your own instead\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Haskell.Meta.Parse",
        "fct-package": "haskell-src-meta",
        "fct-signature": "ParseMode",
        "fct-source": "src/Language-Haskell-Meta-Parse.html#myDefaultParseMode",
        "fct-type": "function",
        "title": "myDefaultParseMode"
      },
      "index": {
        "description": "Deprecated The provided ParseModes aren very meaningful use your own instead",
        "hierarchy": "Language Haskell Meta Parse",
        "module": "Language.Haskell.Meta.Parse",
        "name": "myDefaultParseMode",
        "normalized": "",
        "package": "haskell-src-meta",
        "partial": "Default Parse Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:parseDecs",
      "description": {
        "fct-module": "Language.Haskell.Meta.Parse",
        "fct-package": "haskell-src-meta",
        "fct-signature": "String -\u003e Either String [Dec]",
        "fct-source": "src/Language-Haskell-Meta-Parse.html#parseDecs",
        "fct-type": "function",
        "title": "parseDecs"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Parse",
        "module": "Language.Haskell.Meta.Parse",
        "name": "parseDecs",
        "normalized": "String-\u003eEither String[Dec]",
        "package": "haskell-src-meta",
        "partial": "Decs",
        "signature": "String-\u003eEither String[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:parseExp",
      "description": {
        "fct-module": "Language.Haskell.Meta.Parse",
        "fct-package": "haskell-src-meta",
        "fct-signature": "String -\u003e Either String Exp",
        "fct-source": "src/Language-Haskell-Meta-Parse.html#parseExp",
        "fct-type": "function",
        "title": "parseExp"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Parse",
        "module": "Language.Haskell.Meta.Parse",
        "name": "parseExp",
        "normalized": "String-\u003eEither String Exp",
        "package": "haskell-src-meta",
        "partial": "Exp",
        "signature": "String-\u003eEither String Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:parseHsDecls",
      "description": {
        "fct-module": "Language.Haskell.Meta.Parse",
        "fct-package": "haskell-src-meta",
        "fct-signature": "String -\u003e Either String [Decl]",
        "fct-source": "src/Language-Haskell-Meta-Parse.html#parseHsDecls",
        "fct-type": "function",
        "title": "parseHsDecls"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Parse",
        "module": "Language.Haskell.Meta.Parse",
        "name": "parseHsDecls",
        "normalized": "String-\u003eEither String[Decl]",
        "package": "haskell-src-meta",
        "partial": "Hs Decls",
        "signature": "String-\u003eEither String[Decl]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:parseHsExp",
      "description": {
        "fct-module": "Language.Haskell.Meta.Parse",
        "fct-package": "haskell-src-meta",
        "fct-signature": "String -\u003e Either String Exp",
        "fct-source": "src/Language-Haskell-Meta-Parse.html#parseHsExp",
        "fct-type": "function",
        "title": "parseHsExp"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Parse",
        "module": "Language.Haskell.Meta.Parse",
        "name": "parseHsExp",
        "normalized": "String-\u003eEither String Exp",
        "package": "haskell-src-meta",
        "partial": "Hs Exp",
        "signature": "String-\u003eEither String Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:parseHsModule",
      "description": {
        "fct-module": "Language.Haskell.Meta.Parse",
        "fct-package": "haskell-src-meta",
        "fct-signature": "String -\u003e Either String Module",
        "fct-source": "src/Language-Haskell-Meta-Parse.html#parseHsModule",
        "fct-type": "function",
        "title": "parseHsModule"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Parse",
        "module": "Language.Haskell.Meta.Parse",
        "name": "parseHsModule",
        "normalized": "String-\u003eEither String Module",
        "package": "haskell-src-meta",
        "partial": "Hs Module",
        "signature": "String-\u003eEither String Module"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:parseHsPat",
      "description": {
        "fct-module": "Language.Haskell.Meta.Parse",
        "fct-package": "haskell-src-meta",
        "fct-signature": "String -\u003e Either String Pat",
        "fct-source": "src/Language-Haskell-Meta-Parse.html#parseHsPat",
        "fct-type": "function",
        "title": "parseHsPat"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Parse",
        "module": "Language.Haskell.Meta.Parse",
        "name": "parseHsPat",
        "normalized": "String-\u003eEither String Pat",
        "package": "haskell-src-meta",
        "partial": "Hs Pat",
        "signature": "String-\u003eEither String Pat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:parseHsType",
      "description": {
        "fct-module": "Language.Haskell.Meta.Parse",
        "fct-package": "haskell-src-meta",
        "fct-signature": "String -\u003e Either String Type",
        "fct-source": "src/Language-Haskell-Meta-Parse.html#parseHsType",
        "fct-type": "function",
        "title": "parseHsType"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Parse",
        "module": "Language.Haskell.Meta.Parse",
        "name": "parseHsType",
        "normalized": "String-\u003eEither String Type",
        "package": "haskell-src-meta",
        "partial": "Hs Type",
        "signature": "String-\u003eEither String Type"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:parsePat",
      "description": {
        "fct-module": "Language.Haskell.Meta.Parse",
        "fct-package": "haskell-src-meta",
        "fct-signature": "String -\u003e Either String Pat",
        "fct-source": "src/Language-Haskell-Meta-Parse.html#parsePat",
        "fct-type": "function",
        "title": "parsePat"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Parse",
        "module": "Language.Haskell.Meta.Parse",
        "name": "parsePat",
        "normalized": "String-\u003eEither String Pat",
        "package": "haskell-src-meta",
        "partial": "Pat",
        "signature": "String-\u003eEither String Pat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:parseResultToEither",
      "description": {
        "fct-module": "Language.Haskell.Meta.Parse",
        "fct-package": "haskell-src-meta",
        "fct-signature": "ParseResult a -\u003e Either String a",
        "fct-source": "src/Language-Haskell-Meta-Parse.html#parseResultToEither",
        "fct-type": "function",
        "title": "parseResultToEither"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Parse",
        "module": "Language.Haskell.Meta.Parse",
        "name": "parseResultToEither",
        "normalized": "ParseResult a-\u003eEither String a",
        "package": "haskell-src-meta",
        "partial": "Result To Either",
        "signature": "ParseResult a-\u003eEither String a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:parseType",
      "description": {
        "fct-module": "Language.Haskell.Meta.Parse",
        "fct-package": "haskell-src-meta",
        "fct-signature": "String -\u003e Either String Type",
        "fct-source": "src/Language-Haskell-Meta-Parse.html#parseType",
        "fct-type": "function",
        "title": "parseType"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Parse",
        "module": "Language.Haskell.Meta.Parse",
        "name": "parseType",
        "normalized": "String-\u003eEither String Type",
        "package": "haskell-src-meta",
        "partial": "Type",
        "signature": "String-\u003eEither String Type"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Parse.html#v:pprHsModule",
      "description": {
        "fct-module": "Language.Haskell.Meta.Parse",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Module -\u003e String",
        "fct-source": "src/Language-Haskell-Meta-Parse.html#pprHsModule",
        "fct-type": "function",
        "title": "pprHsModule"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Parse",
        "module": "Language.Haskell.Meta.Parse",
        "name": "pprHsModule",
        "normalized": "Module-\u003eString",
        "package": "haskell-src-meta",
        "partial": "Hs Module",
        "signature": "Module-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "module",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html",
        "fct-type": "module",
        "title": "Translate"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "Translate",
        "normalized": "",
        "package": "haskell-src-meta",
        "partial": "Translate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#t:ToDec",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "class",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#ToDec",
        "fct-type": "class",
        "title": "ToDec"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "ToDec",
        "normalized": "",
        "package": "haskell-src-meta",
        "partial": "To Dec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#t:ToDecs",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "class",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#ToDecs",
        "fct-type": "class",
        "title": "ToDecs"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "ToDecs",
        "normalized": "",
        "package": "haskell-src-meta",
        "partial": "To Decs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#t:ToExp",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "class",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#ToExp",
        "fct-type": "class",
        "title": "ToExp"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "ToExp",
        "normalized": "",
        "package": "haskell-src-meta",
        "partial": "To Exp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#t:ToLit",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "class",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#ToLit",
        "fct-type": "class",
        "title": "ToLit"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "ToLit",
        "normalized": "",
        "package": "haskell-src-meta",
        "partial": "To Lit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#t:ToLoc",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "class",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#ToLoc",
        "fct-type": "class",
        "title": "ToLoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "ToLoc",
        "normalized": "",
        "package": "haskell-src-meta",
        "partial": "To Loc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#t:ToName",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "class",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#ToName",
        "fct-type": "class",
        "title": "ToName"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "ToName",
        "normalized": "",
        "package": "haskell-src-meta",
        "partial": "To Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#t:ToPat",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "class",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#ToPat",
        "fct-type": "class",
        "title": "ToPat"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "ToPat",
        "normalized": "",
        "package": "haskell-src-meta",
        "partial": "To Pat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#t:ToStmt",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "class",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#ToStmt",
        "fct-type": "class",
        "title": "ToStmt"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "ToStmt",
        "normalized": "",
        "package": "haskell-src-meta",
        "partial": "To Stmt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#t:ToType",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "class",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#ToType",
        "fct-type": "class",
        "title": "ToType"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "ToType",
        "normalized": "",
        "package": "haskell-src-meta",
        "partial": "To Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:.-45--62-.",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Type -\u003e Type -\u003e Type",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#.-%3E.",
        "fct-type": "function",
        "title": "(.-\u003e.)"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "(.-\u003e.) .-\u003e.",
        "normalized": "Type-\u003eType-\u003eType",
        "package": "haskell-src-meta",
        "partial": "",
        "signature": "Type-\u003eType-\u003eType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:bangToStrictType",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "BangType -\u003e StrictType",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#bangToStrictType",
        "fct-type": "function",
        "title": "bangToStrictType"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "bangToStrictType",
        "normalized": "BangType-\u003eStrictType",
        "package": "haskell-src-meta",
        "partial": "To Strict Type",
        "signature": "BangType-\u003eStrictType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:bangToVarStrictTypes",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "[Name] -\u003e BangType -\u003e [VarStrictType]",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#bangToVarStrictTypes",
        "fct-type": "function",
        "title": "bangToVarStrictTypes"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "bangToVarStrictTypes",
        "normalized": "[Name]-\u003eBangType-\u003e[VarStrictType]",
        "package": "haskell-src-meta",
        "partial": "To Var Strict Types",
        "signature": "[Name]-\u003eBangType-\u003e[VarStrictType]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:collectVars",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Type -\u003e [TyVarBndr]",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#collectVars",
        "fct-type": "function",
        "title": "collectVars"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "collectVars",
        "normalized": "Type-\u003e[TyVarBndr]",
        "package": "haskell-src-meta",
        "partial": "Vars",
        "signature": "Type-\u003e[TyVarBndr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:conDeclToCon",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "ConDecl -\u003e Con",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#conDeclToCon",
        "fct-type": "function",
        "title": "conDeclToCon"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "conDeclToCon",
        "normalized": "ConDecl-\u003eCon",
        "package": "haskell-src-meta",
        "partial": "Decl To Con",
        "signature": "ConDecl-\u003eCon"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:fixForall",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Type -\u003e Type",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#fixForall",
        "fct-type": "function",
        "title": "fixForall"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "fixForall",
        "normalized": "Type-\u003eType",
        "package": "haskell-src-meta",
        "partial": "Forall",
        "signature": "Type-\u003eType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:foldAppT",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Type -\u003e [Type] -\u003e Type",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#foldAppT",
        "fct-type": "function",
        "title": "foldAppT"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "foldAppT",
        "normalized": "Type-\u003e[Type]-\u003eType",
        "package": "haskell-src-meta",
        "partial": "App",
        "signature": "Type-\u003e[Type]-\u003eType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:hsBangTypeToStrictType",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "BangType -\u003e (Strict, Type)",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#hsBangTypeToStrictType",
        "fct-type": "function",
        "title": "hsBangTypeToStrictType"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "hsBangTypeToStrictType",
        "normalized": "BangType-\u003e(Strict,Type)",
        "package": "haskell-src-meta",
        "partial": "Bang Type To Strict Type",
        "signature": "BangType-\u003e(Strict,Type)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:hsBindsToDecs",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Binds -\u003e [Dec]",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#hsBindsToDecs",
        "fct-type": "function",
        "title": "hsBindsToDecs"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "hsBindsToDecs",
        "normalized": "Binds-\u003e[Dec]",
        "package": "haskell-src-meta",
        "partial": "Binds To Decs",
        "signature": "Binds-\u003e[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:hsGuardedRhsToBody",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "GuardedRhs -\u003e Body",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#hsGuardedRhsToBody",
        "fct-type": "function",
        "title": "hsGuardedRhsToBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "hsGuardedRhsToBody",
        "normalized": "GuardedRhs-\u003eBody",
        "package": "haskell-src-meta",
        "partial": "Guarded Rhs To Body",
        "signature": "GuardedRhs-\u003eBody"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:hsMatchToClause",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Match -\u003e Clause",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#hsMatchToClause",
        "fct-type": "function",
        "title": "hsMatchToClause"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "hsMatchToClause",
        "normalized": "Match-\u003eClause",
        "package": "haskell-src-meta",
        "partial": "Match To Clause",
        "signature": "Match-\u003eClause"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:hsMatchesToFunD",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "[Match] -\u003e Dec",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#hsMatchesToFunD",
        "fct-type": "function",
        "title": "hsMatchesToFunD"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "hsMatchesToFunD",
        "normalized": "[Match]-\u003eDec",
        "package": "haskell-src-meta",
        "partial": "Matches To Fun",
        "signature": "[Match]-\u003eDec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:hsRhsToBody",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Rhs -\u003e Body",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#hsRhsToBody",
        "fct-type": "function",
        "title": "hsRhsToBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "hsRhsToBody",
        "normalized": "Rhs-\u003eBody",
        "package": "haskell-src-meta",
        "partial": "Rhs To Body",
        "signature": "Rhs-\u003eBody"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:hsStmtToGuard",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Stmt -\u003e Guard",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#hsStmtToGuard",
        "fct-type": "function",
        "title": "hsStmtToGuard"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "hsStmtToGuard",
        "normalized": "Stmt-\u003eGuard",
        "package": "haskell-src-meta",
        "partial": "Stmt To Guard",
        "signature": "Stmt-\u003eGuard"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:moduleName",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "[Char]",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#moduleName",
        "fct-type": "function",
        "title": "moduleName"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "moduleName",
        "normalized": "[Char]",
        "package": "haskell-src-meta",
        "partial": "Name",
        "signature": "[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:noTH",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "String -\u003e e -\u003e a",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#noTH",
        "fct-type": "function",
        "title": "noTH"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "noTH",
        "normalized": "String-\u003ea-\u003eb",
        "package": "haskell-src-meta",
        "partial": "TH",
        "signature": "String-\u003ee-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:noTHyet",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "String -\u003e String -\u003e e -\u003e a",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#noTHyet",
        "fct-type": "function",
        "title": "noTHyet"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "noTHyet",
        "normalized": "String-\u003eString-\u003ea-\u003eb",
        "package": "haskell-src-meta",
        "partial": "THyet",
        "signature": "String-\u003eString-\u003ee-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:nonsense",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "String -\u003e String -\u003e e -\u003e a",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#nonsense",
        "fct-type": "function",
        "title": "nonsense"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "nonsense",
        "normalized": "String-\u003eString-\u003ea-\u003eb",
        "package": "haskell-src-meta",
        "partial": "",
        "signature": "String-\u003eString-\u003ee-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:qualConDeclToCon",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "QualConDecl -\u003e Con",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#qualConDeclToCon",
        "fct-type": "function",
        "title": "qualConDeclToCon"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "qualConDeclToCon",
        "normalized": "QualConDecl-\u003eCon",
        "package": "haskell-src-meta",
        "partial": "Con Decl To Con",
        "signature": "QualConDecl-\u003eCon"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toBody",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "GuardedAlts -\u003e Body",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#toBody",
        "fct-type": "function",
        "title": "toBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "toBody",
        "normalized": "GuardedAlts-\u003eBody",
        "package": "haskell-src-meta",
        "partial": "Body",
        "signature": "GuardedAlts-\u003eBody"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toCxt",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Context -\u003e Cxt",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#toCxt",
        "fct-type": "function",
        "title": "toCxt"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "toCxt",
        "normalized": "Context-\u003eCxt",
        "package": "haskell-src-meta",
        "partial": "Cxt",
        "signature": "Context-\u003eCxt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toDec",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "a -\u003e Dec",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#toDec",
        "fct-type": "method",
        "title": "toDec"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "toDec",
        "normalized": "a-\u003eDec",
        "package": "haskell-src-meta",
        "partial": "Dec",
        "signature": "a-\u003eDec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toDecs",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "a -\u003e [Dec]",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#toDecs",
        "fct-type": "method",
        "title": "toDecs"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "toDecs",
        "normalized": "a-\u003e[Dec]",
        "package": "haskell-src-meta",
        "partial": "Decs",
        "signature": "a-\u003e[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toExp",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "a -\u003e Exp",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#toExp",
        "fct-type": "method",
        "title": "toExp"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "toExp",
        "normalized": "a-\u003eExp",
        "package": "haskell-src-meta",
        "partial": "Exp",
        "signature": "a-\u003eExp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toFieldExp",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "FieldUpdate -\u003e FieldExp",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#toFieldExp",
        "fct-type": "function",
        "title": "toFieldExp"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "toFieldExp",
        "normalized": "FieldUpdate-\u003eFieldExp",
        "package": "haskell-src-meta",
        "partial": "Field Exp",
        "signature": "FieldUpdate-\u003eFieldExp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toGuard",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "GuardedAlt -\u003e (Guard, Exp)",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#toGuard",
        "fct-type": "function",
        "title": "toGuard"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "toGuard",
        "normalized": "GuardedAlt-\u003e(Guard,Exp)",
        "package": "haskell-src-meta",
        "partial": "Guard",
        "signature": "GuardedAlt-\u003e(Guard,Exp)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toKind",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Kind -\u003e Kind",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#toKind",
        "fct-type": "function",
        "title": "toKind"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "toKind",
        "normalized": "Kind-\u003eKind",
        "package": "haskell-src-meta",
        "partial": "Kind",
        "signature": "Kind-\u003eKind"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toLit",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "a -\u003e Lit",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#toLit",
        "fct-type": "method",
        "title": "toLit"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "toLit",
        "normalized": "a-\u003eLit",
        "package": "haskell-src-meta",
        "partial": "Lit",
        "signature": "a-\u003eLit"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toLoc",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "a -\u003e Loc",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#toLoc",
        "fct-type": "method",
        "title": "toLoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "toLoc",
        "normalized": "a-\u003eLoc",
        "package": "haskell-src-meta",
        "partial": "Loc",
        "signature": "a-\u003eLoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toMatch",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Alt -\u003e Match",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#toMatch",
        "fct-type": "function",
        "title": "toMatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "toMatch",
        "normalized": "Alt-\u003eMatch",
        "package": "haskell-src-meta",
        "partial": "Match",
        "signature": "Alt-\u003eMatch"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toName",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "a -\u003e Name",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#toName",
        "fct-type": "method",
        "title": "toName"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "toName",
        "normalized": "a-\u003eName",
        "package": "haskell-src-meta",
        "partial": "Name",
        "signature": "a-\u003eName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toPat",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "a -\u003e Pat",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#toPat",
        "fct-type": "method",
        "title": "toPat"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "toPat",
        "normalized": "a-\u003ePat",
        "package": "haskell-src-meta",
        "partial": "Pat",
        "signature": "a-\u003ePat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toStmt",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "a -\u003e Stmt",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#toStmt",
        "fct-type": "method",
        "title": "toStmt"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "toStmt",
        "normalized": "a-\u003eStmt",
        "package": "haskell-src-meta",
        "partial": "Stmt",
        "signature": "a-\u003eStmt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toTyVar",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "TyVarBind -\u003e TyVarBndr",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#toTyVar",
        "fct-type": "function",
        "title": "toTyVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "toTyVar",
        "normalized": "TyVarBind-\u003eTyVarBndr",
        "package": "haskell-src-meta",
        "partial": "Ty Var",
        "signature": "TyVarBind-\u003eTyVarBndr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:toType",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "a -\u003e Type",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#toType",
        "fct-type": "method",
        "title": "toType"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "toType",
        "normalized": "a-\u003eType",
        "package": "haskell-src-meta",
        "partial": "Type",
        "signature": "a-\u003eType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:todo",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "String -\u003e e -\u003e a",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#todo",
        "fct-type": "function",
        "title": "todo"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "todo",
        "normalized": "String-\u003ea-\u003eb",
        "package": "haskell-src-meta",
        "partial": "",
        "signature": "String-\u003ee-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Syntax-Translate.html#v:transAct",
      "description": {
        "fct-module": "Language.Haskell.Meta.Syntax.Translate",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Activation -\u003e Phases",
        "fct-source": "src/Language-Haskell-Meta-Syntax-Translate.html#transAct",
        "fct-type": "function",
        "title": "transAct"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Syntax Translate",
        "module": "Language.Haskell.Meta.Syntax.Translate",
        "name": "transAct",
        "normalized": "Activation-\u003ePhases",
        "package": "haskell-src-meta",
        "partial": "Act",
        "signature": "Activation-\u003ePhases"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is a staging ground\n for to-be-organized-and-merged-nicely code.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "module",
        "fct-source": "src/Language-Haskell-Meta-Utils.html",
        "fct-type": "module",
        "title": "Utils"
      },
      "index": {
        "description": "This module is staging ground for to-be-organized-and-merged-nicely code",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "Utils",
        "normalized": "",
        "package": "haskell-src-meta",
        "partial": "Utils",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:-124--36--124-",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "ExpQ -\u003e ExpQ -\u003e ExpQ",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#%7C%24%7C",
        "fct-type": "function",
        "title": "(|$|)"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "(|$|) |$|",
        "normalized": "ExpQ-\u003eExpQ-\u003eExpQ",
        "package": "haskell-src-meta",
        "partial": "",
        "signature": "ExpQ-\u003eExpQ-\u003eExpQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:-124--45--62--124-",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "TypeQ -\u003e TypeQ -\u003e TypeQ",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#%7C-%3E%7C",
        "fct-type": "function",
        "title": "(|-\u003e|)"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "(|-\u003e|) |-\u003e|",
        "normalized": "TypeQ-\u003eTypeQ-\u003eTypeQ",
        "package": "haskell-src-meta",
        "partial": "",
        "signature": "TypeQ-\u003eTypeQ-\u003eTypeQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:-124-.-124-",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "ExpQ -\u003e ExpQ -\u003e ExpQ",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#%7C.%7C",
        "fct-type": "function",
        "title": "(|.|)"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "(|.|) |.|",
        "normalized": "ExpQ-\u003eExpQ-\u003eExpQ",
        "package": "haskell-src-meta",
        "partial": "",
        "signature": "ExpQ-\u003eExpQ-\u003eExpQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:applyT",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Type -\u003e Type -\u003e Type",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#applyT",
        "fct-type": "function",
        "title": "applyT"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "applyT",
        "normalized": "Type-\u003eType-\u003eType",
        "package": "haskell-src-meta",
        "partial": "",
        "signature": "Type-\u003eType-\u003eType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:arityT",
      "description": {
        "fct-descr": "\u003cp\u003eThe arity of a Type.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Type -\u003e Int",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#arityT",
        "fct-type": "function",
        "title": "arityT"
      },
      "index": {
        "description": "The arity of Type",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "arityT",
        "normalized": "Type-\u003eInt",
        "package": "haskell-src-meta",
        "partial": "",
        "signature": "Type-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:cleanNames",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#cleanNames",
        "fct-type": "function",
        "title": "cleanNames"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "cleanNames",
        "normalized": "a-\u003ea",
        "package": "haskell-src-meta",
        "partial": "Names",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:conName",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Con -\u003e Name",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#conName",
        "fct-type": "function",
        "title": "conName"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "conName",
        "normalized": "Con-\u003eName",
        "package": "haskell-src-meta",
        "partial": "Name",
        "signature": "Con-\u003eName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:conToConType",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Type -\u003e Con -\u003e Type",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#conToConType",
        "fct-type": "function",
        "title": "conToConType"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "conToConType",
        "normalized": "Type-\u003eCon-\u003eType",
        "package": "haskell-src-meta",
        "partial": "To Con Type",
        "signature": "Type-\u003eCon-\u003eType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:conTypes",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Con -\u003e [Type]",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#conTypes",
        "fct-type": "function",
        "title": "conTypes"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "conTypes",
        "normalized": "Con-\u003e[Type]",
        "package": "haskell-src-meta",
        "partial": "Types",
        "signature": "Con-\u003e[Type]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:dataDCons",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Dec -\u003e [Con]",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#dataDCons",
        "fct-type": "function",
        "title": "dataDCons"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "dataDCons",
        "normalized": "Dec-\u003e[Con]",
        "package": "haskell-src-meta",
        "partial": "DCons",
        "signature": "Dec-\u003e[Con]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:decCons",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Dec -\u003e [Con]",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#decCons",
        "fct-type": "function",
        "title": "decCons"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "decCons",
        "normalized": "Dec-\u003e[Con]",
        "package": "haskell-src-meta",
        "partial": "Cons",
        "signature": "Dec-\u003e[Con]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:decName",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Dec -\u003e Maybe Name",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#decName",
        "fct-type": "function",
        "title": "decName"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "decName",
        "normalized": "Dec-\u003eMaybe Name",
        "package": "haskell-src-meta",
        "partial": "Name",
        "signature": "Dec-\u003eMaybe Name"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:decTyVars",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Dec -\u003e [TyVarBndr]",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#decTyVars",
        "fct-type": "function",
        "title": "decTyVars"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "decTyVars",
        "normalized": "Dec-\u003e[TyVarBndr]",
        "package": "haskell-src-meta",
        "partial": "Ty Vars",
        "signature": "Dec-\u003e[TyVarBndr]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:eitherQ",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "(e -\u003e String) -\u003e Either e a -\u003e Q a",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#eitherQ",
        "fct-type": "function",
        "title": "eitherQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "eitherQ",
        "normalized": "(a-\u003eString)-\u003eEither a b-\u003eQ b",
        "package": "haskell-src-meta",
        "partial": "",
        "signature": "(e-\u003eString)-\u003eEither e a-\u003eQ a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:foreignName",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Foreign -\u003e Name",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#foreignName",
        "fct-type": "function",
        "title": "foreignName"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "foreignName",
        "normalized": "Foreign-\u003eName",
        "package": "haskell-src-meta",
        "partial": "Name",
        "signature": "Foreign-\u003eName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:fromDataConI",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Info -\u003e Q (Maybe Exp)",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#fromDataConI",
        "fct-type": "function",
        "title": "fromDataConI"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "fromDataConI",
        "normalized": "Info-\u003eQ(Maybe Exp)",
        "package": "haskell-src-meta",
        "partial": "Data Con",
        "signature": "Info-\u003eQ(Maybe Exp)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:fromTyConI",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Info -\u003e Maybe Dec",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#fromTyConI",
        "fct-type": "function",
        "title": "fromTyConI"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "fromTyConI",
        "normalized": "Info-\u003eMaybe Dec",
        "package": "haskell-src-meta",
        "partial": "Ty Con",
        "signature": "Info-\u003eMaybe Dec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:functionT",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "[TypeQ] -\u003e TypeQ",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#functionT",
        "fct-type": "function",
        "title": "functionT"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "functionT",
        "normalized": "[TypeQ]-\u003eTypeQ",
        "package": "haskell-src-meta",
        "partial": "",
        "signature": "[TypeQ]-\u003eTypeQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:gpretty",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#gpretty",
        "fct-type": "function",
        "title": "gpretty"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "gpretty",
        "normalized": "a-\u003eString",
        "package": "haskell-src-meta",
        "partial": "",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:mkClauseQ",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "[PatQ] -\u003e ExpQ -\u003e ClauseQ",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#mkClauseQ",
        "fct-type": "function",
        "title": "mkClauseQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "mkClauseQ",
        "normalized": "[PatQ]-\u003eExpQ-\u003eClauseQ",
        "package": "haskell-src-meta",
        "partial": "Clause",
        "signature": "[PatQ]-\u003eExpQ-\u003eClauseQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:mkFunD",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Name -\u003e [Pat] -\u003e Exp -\u003e Dec",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#mkFunD",
        "fct-type": "function",
        "title": "mkFunD"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "mkFunD",
        "normalized": "Name-\u003e[Pat]-\u003eExp-\u003eDec",
        "package": "haskell-src-meta",
        "partial": "Fun",
        "signature": "Name-\u003e[Pat]-\u003eExp-\u003eDec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:mkVarT",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "String -\u003e TypeQ",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#mkVarT",
        "fct-type": "function",
        "title": "mkVarT"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "mkVarT",
        "normalized": "String-\u003eTypeQ",
        "package": "haskell-src-meta",
        "partial": "Var",
        "signature": "String-\u003eTypeQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:myNames",
      "description": {
        "fct-descr": "\u003cp\u003eInfinite list of names composed of lowercase letters\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "[Name]",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#myNames",
        "fct-type": "function",
        "title": "myNames"
      },
      "index": {
        "description": "Infinite list of names composed of lowercase letters",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "myNames",
        "normalized": "[Name]",
        "package": "haskell-src-meta",
        "partial": "Names",
        "signature": "[Name]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:nameSpaceOf",
      "description": {
        "fct-descr": "\u003cp\u003eRandomly useful.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Name -\u003e Maybe NameSpace",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#nameSpaceOf",
        "fct-type": "function",
        "title": "nameSpaceOf"
      },
      "index": {
        "description": "Randomly useful",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "nameSpaceOf",
        "normalized": "Name-\u003eMaybe NameSpace",
        "package": "haskell-src-meta",
        "partial": "Space Of",
        "signature": "Name-\u003eMaybe NameSpace"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:nameToRawCodeStr",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Name -\u003e String",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#nameToRawCodeStr",
        "fct-type": "function",
        "title": "nameToRawCodeStr"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "nameToRawCodeStr",
        "normalized": "Name-\u003eString",
        "package": "haskell-src-meta",
        "partial": "To Raw Code Str",
        "signature": "Name-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:normaliseName",
      "description": {
        "fct-descr": "\u003cp\u003eRemove qualification, etc.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Name -\u003e Name",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#normaliseName",
        "fct-type": "function",
        "title": "normaliseName"
      },
      "index": {
        "description": "Remove qualification etc",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "normaliseName",
        "normalized": "Name-\u003eName",
        "package": "haskell-src-meta",
        "partial": "Name",
        "signature": "Name-\u003eName"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:normalizeT",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "a -\u003e a",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#normalizeT",
        "fct-type": "function",
        "title": "normalizeT"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "normalizeT",
        "normalized": "a-\u003ea",
        "package": "haskell-src-meta",
        "partial": "",
        "signature": "a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:pp",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#pp",
        "fct-type": "function",
        "title": "pp"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "pp",
        "normalized": "a-\u003eString",
        "package": "haskell-src-meta",
        "partial": "",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:ppDoc",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "a -\u003e Doc",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#ppDoc",
        "fct-type": "function",
        "title": "ppDoc"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "ppDoc",
        "normalized": "a-\u003eDoc",
        "package": "haskell-src-meta",
        "partial": "Doc",
        "signature": "a-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:pretty",
      "description": {
        "fct-descr": "\u003cp\u003eThe type passed in must have a \u003ccode\u003eShow\u003c/code\u003e instance which\n  produces a valid Haskell expression. Returns an empty\n  \u003ccode\u003eString\u003c/code\u003e if this is not the case. This is not TH-specific,\n  but useful in general.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#pretty",
        "fct-type": "function",
        "title": "pretty"
      },
      "index": {
        "description": "The type passed in must have Show instance which produces valid Haskell expression Returns an empty String if this is not the case This is not TH-specific but useful in general",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "pretty",
        "normalized": "a-\u003eString",
        "package": "haskell-src-meta",
        "partial": "",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:recCName",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Con -\u003e Maybe Name",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#recCName",
        "fct-type": "function",
        "title": "recCName"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "recCName",
        "normalized": "Con-\u003eMaybe Name",
        "package": "haskell-src-meta",
        "partial": "CName",
        "signature": "Con-\u003eMaybe Name"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:renameT",
      "description": {
        "fct-descr": "\u003cp\u003eRename type variables in the Type according to the given association\n list. Normalise constructor names (remove qualification, etc.)\n If a name is not found in the association list, replace it with one from\n the fresh names list, and add this translation to the returned list.\n The fresh names list should be infinite; myNames is a good example.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "[(Name, Name)] -\u003e [Name] -\u003e Type -\u003e (Type, [(Name, Name)], [Name])",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#renameT",
        "fct-type": "function",
        "title": "renameT"
      },
      "index": {
        "description": "Rename type variables in the Type according to the given association list Normalise constructor names remove qualification etc If name is not found in the association list replace it with one from the fresh names list and add this translation to the returned list The fresh names list should be infinite myNames is good example",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "renameT",
        "normalized": "[(Name,Name)]-\u003e[Name]-\u003eType-\u003e(Type,[(Name,Name)],[Name])",
        "package": "haskell-src-meta",
        "partial": "",
        "signature": "[(Name,Name)]-\u003e[Name]-\u003eType-\u003e(Type,[(Name,Name)],[Name])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:renameThings",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralisation of renameTs\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "(t1 -\u003e t2 -\u003e t -\u003e (a, t1, t2)) -\u003e t1 -\u003e t2 -\u003e [a] -\u003e [t] -\u003e ([a], t1, t2)",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#renameThings",
        "fct-type": "function",
        "title": "renameThings"
      },
      "index": {
        "description": "Generalisation of renameTs",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "renameThings",
        "normalized": "(a-\u003ea-\u003ea-\u003e(b,a,a))-\u003ea-\u003ea-\u003e[b]-\u003e[a]-\u003e([b],a,a)",
        "package": "haskell-src-meta",
        "partial": "Things",
        "signature": "(t-\u003et-\u003et-\u003e(a,t,t))-\u003et-\u003et-\u003e[a]-\u003e[t]-\u003e([a],t,t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:renameTs",
      "description": {
        "fct-descr": "\u003cp\u003erenameT applied to a list of types\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "[(Name, Name)] -\u003e [Name] -\u003e [Type] -\u003e [Type] -\u003e ([Type], [(Name, Name)], [Name])",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#renameTs",
        "fct-type": "function",
        "title": "renameTs"
      },
      "index": {
        "description": "renameT applied to list of types",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "renameTs",
        "normalized": "[(Name,Name)]-\u003e[Name]-\u003e[Type]-\u003e[Type]-\u003e([Type],[(Name,Name)],[Name])",
        "package": "haskell-src-meta",
        "partial": "Ts",
        "signature": "[(Name,Name)]-\u003e[Name]-\u003e[Type]-\u003e[Type]-\u003e([Type],[(Name,Name)],[Name])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:showToPatQ",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "a -\u003e PatQ",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#showToPatQ",
        "fct-type": "function",
        "title": "showToPatQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "showToPatQ",
        "normalized": "a-\u003ePatQ",
        "package": "haskell-src-meta",
        "partial": "To Pat",
        "signature": "a-\u003ePatQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:splitCon",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Con -\u003e (Name, [Type])",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#splitCon",
        "fct-type": "function",
        "title": "splitCon"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "splitCon",
        "normalized": "Con-\u003e(Name,[Type])",
        "package": "haskell-src-meta",
        "partial": "Con",
        "signature": "Con-\u003e(Name,[Type])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:strictTypeTy",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "StrictType -\u003e Type",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#strictTypeTy",
        "fct-type": "function",
        "title": "strictTypeTy"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "strictTypeTy",
        "normalized": "StrictType-\u003eType",
        "package": "haskell-src-meta",
        "partial": "Type Ty",
        "signature": "StrictType-\u003eType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:substT",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "[(Name, Type)] -\u003e [Name] -\u003e Type -\u003e Type",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#substT",
        "fct-type": "function",
        "title": "substT"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "substT",
        "normalized": "[(Name,Type)]-\u003e[Name]-\u003eType-\u003eType",
        "package": "haskell-src-meta",
        "partial": "",
        "signature": "[(Name,Type)]-\u003e[Name]-\u003eType-\u003eType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:toExpQ",
      "description": {
        "fct-descr": "\u003cp\u003eThe strategy for producing QuasiQuoters which\n  this datatype aims to facilitate is as follows.\n  Given a collection of datatypes which make up\n  the to-be-quasiquoted languages AST, make each\n  type in this collection an instance of at least\n  \u003ccode\u003eShow\u003c/code\u003e and \u003ccode\u003eLift\u003c/code\u003e. Now, assuming \u003ccode\u003eparsePat\u003c/code\u003e and\n  \u003ccode\u003eparseExp\u003c/code\u003e, both of type \u003ccode\u003eString -\u003e Q a\u003c/code\u003e (where \u003ccode\u003ea\u003c/code\u003e\n  is the top level type of the AST), are the pair of\n  functions you wish to use for parsing in pattern and\n  expression context respectively, put them inside\n  a \u003ccode\u003eQuoter\u003c/code\u003e datatype and pass this to quasify.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "(String -\u003e Q a) -\u003e String -\u003e ExpQ",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#toExpQ",
        "fct-type": "function",
        "title": "toExpQ"
      },
      "index": {
        "description": "The strategy for producing QuasiQuoters which this datatype aims to facilitate is as follows Given collection of datatypes which make up the to-be-quasiquoted languages AST make each type in this collection an instance of at least Show and Lift Now assuming parsePat and parseExp both of type String where is the top level type of the AST are the pair of functions you wish to use for parsing in pattern and expression context respectively put them inside Quoter datatype and pass this to quasify",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "toExpQ",
        "normalized": "(String-\u003eQ a)-\u003eString-\u003eExpQ",
        "package": "haskell-src-meta",
        "partial": "Exp",
        "signature": "(String-\u003eQ a)-\u003eString-\u003eExpQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:toPatQ",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "(String -\u003e Q a) -\u003e String -\u003e PatQ",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#toPatQ",
        "fct-type": "function",
        "title": "toPatQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "toPatQ",
        "normalized": "(String-\u003eQ a)-\u003eString-\u003ePatQ",
        "package": "haskell-src-meta",
        "partial": "Pat",
        "signature": "(String-\u003eQ a)-\u003eString-\u003ePatQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:typeToName",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Type -\u003e Maybe Name",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#typeToName",
        "fct-type": "function",
        "title": "typeToName"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "typeToName",
        "normalized": "Type-\u003eMaybe Name",
        "package": "haskell-src-meta",
        "partial": "To Name",
        "signature": "Type-\u003eMaybe Name"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:unForall",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Type -\u003e Type",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#unForall",
        "fct-type": "function",
        "title": "unForall"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "unForall",
        "normalized": "Type-\u003eType",
        "package": "haskell-src-meta",
        "partial": "Forall",
        "signature": "Type-\u003eType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:unsafeRunQ",
      "description": {
        "fct-descr": "\u003cpre\u003eunsafeRunQ = unsafePerformIO . runQ\u003c/pre\u003e",
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Q a -\u003e a",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#unsafeRunQ",
        "fct-type": "function",
        "title": "unsafeRunQ"
      },
      "index": {
        "description": "unsafeRunQ unsafePerformIO runQ",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "unsafeRunQ",
        "normalized": "Q a-\u003ea",
        "package": "haskell-src-meta",
        "partial": "Run",
        "signature": "Q a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:unwindE",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Exp -\u003e [Exp]",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#unwindE",
        "fct-type": "function",
        "title": "unwindE"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "unwindE",
        "normalized": "Exp-\u003e[Exp]",
        "package": "haskell-src-meta",
        "partial": "",
        "signature": "Exp-\u003e[Exp]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:unwindT",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "Type -\u003e [Type]",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#unwindT",
        "fct-type": "function",
        "title": "unwindT"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "unwindT",
        "normalized": "Type-\u003e[Type]",
        "package": "haskell-src-meta",
        "partial": "",
        "signature": "Type-\u003e[Type]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta-Utils.html#v:varStrictTypeTy",
      "description": {
        "fct-module": "Language.Haskell.Meta.Utils",
        "fct-package": "haskell-src-meta",
        "fct-signature": "VarStrictType -\u003e Type",
        "fct-source": "src/Language-Haskell-Meta-Utils.html#varStrictTypeTy",
        "fct-type": "function",
        "title": "varStrictTypeTy"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta Utils",
        "module": "Language.Haskell.Meta.Utils",
        "name": "varStrictTypeTy",
        "normalized": "VarStrictType-\u003eType",
        "package": "haskell-src-meta",
        "partial": "Strict Type Ty",
        "signature": "VarStrictType-\u003eType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-Meta.html#",
      "description": {
        "fct-module": "Language.Haskell.Meta",
        "fct-package": "haskell-src-meta",
        "fct-signature": "module",
        "fct-source": "src/Language-Haskell-Meta.html",
        "fct-type": "module",
        "title": "Meta"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Meta",
        "module": "Language.Haskell.Meta",
        "name": "Meta",
        "normalized": "",
        "package": "haskell-src-meta",
        "partial": "Meta",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-meta/docs/Language-Haskell-TH-Instances-Lift.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use the th-orphans package instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eThis module is exported for backwards-compatibility purposes.\n  All it does is re-export the instances defined in \n  \u003ca\u003eLanguage.Haskell.TH.Instances\u003c/a\u003e, from the th-orphans package.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Haskell.TH.Instances.Lift",
        "fct-package": "haskell-src-meta",
        "fct-signature": "module",
        "fct-source": "src/Language-Haskell-TH-Instances-Lift.html",
        "fct-type": "module",
        "title": "Lift"
      },
      "index": {
        "description": "Deprecated Use the th-orphans package instead This module is exported for backwards-compatibility purposes All it does is re-export the instances defined in Language.Haskell.TH.Instances from the th-orphans package",
        "hierarchy": "Language Haskell TH Instances Lift",
        "module": "Language.Haskell.TH.Instances.Lift",
        "name": "Lift",
        "normalized": "",
        "package": "haskell-src-meta",
        "partial": "Lift",
        "signature": ""
      }
    }
  }
]