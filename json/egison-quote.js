[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/egison-quote/docs/Language-Egison-Quote.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe quasi quotes for egison expression\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Egison.Quote",
        "fct-package": "egison-quote",
        "fct-signature": "module",
        "fct-source": "src/Language-Egison-Quote.html",
        "fct-type": "module",
        "title": "Quote"
      },
      "index": {
        "description": "The quasi quotes for egison expression",
        "hierarchy": "Language Egison Quote",
        "module": "Language.Egison.Quote",
        "name": "Quote",
        "normalized": "",
        "package": "egison-quote",
        "partial": "Quote",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/egison-quote/docs/Language-Egison-Quote.html#v:egison",
      "description": {
        "fct-descr": "\u003cp\u003eQuasiQuoter for egison expression\n\u003c/p\u003e\u003cp\u003eThe format is:\n\u003c/p\u003e\u003cpre\u003e expr := [egison | \u003cegison-expression\u003e :: \u003ctype-signature\u003e |]\n\u003c/pre\u003e\u003cp\u003eFor example, with Egison pattern matching, \u003cem\u003epowerset function\u003c/em\u003e can be expressed easily as follows.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e[egison|(lambda [$l] (match-all l (Multiset Integer) [\u003cjoin $l _\u003e l])) :: [Int] -\u003e [[Int]]|] [1..3]\n\u003c/code\u003e\u003c/strong\u003e[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]\n\u003c/pre\u003e\u003cp\u003eType signature is defined as follows\n\u003c/p\u003e\u003cpre\u003e \u003cTyp\u003e = Bool | Int | Double | Float | Char | String | [\u003cTyp\u003e] | (\u003cTyp\u003e, \u003cTyp\u003e, ..., \u003cTyp\u003e) | \u003cTyp\u003e -\u003e \u003cTyp\u003e -\u003e ... \u003cTyp\u003e\n\u003c/pre\u003e\u003cp\u003eEmbedded Egison expression is run-time evaluated by using \u003ccode\u003e\u003ca\u003eeval\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunsafePerformIO\u003c/a\u003e\u003c/code\u003e.\n For more detailed usage, please refer to \u003ca\u003ehttps://github.com/xenophobia/Egison-Quote\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Egison.Quote",
        "fct-package": "egison-quote",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Language-Egison-Quote.html#egison",
        "fct-type": "function",
        "title": "egison"
      },
      "index": {
        "description": "QuasiQuoter for egison expression The format is expr egison egison-expression type-signature For example with Egison pattern matching powerset function can be expressed easily as follows egison lambda match-all Multiset Integer join Int Int Type signature is defined as follows Typ Bool Int Double Float Char String Typ Typ Typ Typ Typ Typ Typ Embedded Egison expression is run-time evaluated by using eval and unsafePerformIO For more detailed usage please refer to https github.com xenophobia Egison-Quote",
        "hierarchy": "Language Egison Quote",
        "module": "Language.Egison.Quote",
        "name": "egison",
        "normalized": "",
        "package": "egison-quote",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/egison-quote/docs/Language-Egison-Quote.html#v:evalEgisonTopLevel",
      "description": {
        "fct-module": "Language.Egison.Quote",
        "fct-package": "egison-quote",
        "fct-signature": "EgisonExpr-\u003e [String]-\u003e [ExpQ]-\u003e ExpQ",
        "fct-type": "function",
        "title": "evalEgisonTopLevel"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Egison Quote",
        "module": "Language.Egison.Quote",
        "name": "evalEgisonTopLevel",
        "normalized": "EgisonExpr-\u003e[String]-\u003e[ExpQ]-\u003eExpQ",
        "package": "egison-quote",
        "partial": "Egison Top Level",
        "signature": "EgisonExpr-\u003e[String]-\u003e[ExpQ]-\u003eExpQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/egison-quote/docs/Language-Egison-Quote.html#v:parseAntiquote",
      "description": {
        "fct-descr": "\u003cp\u003eParser for \u003ccode\u003e\u003ca\u003epickupAntiquote\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Language.Egison.Quote",
        "fct-package": "egison-quote",
        "fct-signature": "Parser ([String], String)",
        "fct-source": "src/Language-Egison-Quote.html#parseAntiquote",
        "fct-type": "function",
        "title": "parseAntiquote"
      },
      "index": {
        "description": "Parser for pickupAntiquote",
        "hierarchy": "Language Egison Quote",
        "module": "Language.Egison.Quote",
        "name": "parseAntiquote",
        "normalized": "Parser([String],String)",
        "package": "egison-quote",
        "partial": "Antiquote",
        "signature": "Parser([String],String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/egison-quote/docs/Language-Egison-Quote.html#v:parseQuote",
      "description": {
        "fct-descr": "\u003cp\u003eParser for egison-quote\n\u003c/p\u003e",
        "fct-module": "Language.Egison.Quote",
        "fct-package": "egison-quote",
        "fct-signature": "Parser (EgisonExpr, Type)",
        "fct-source": "src/Language-Egison-Quote.html#parseQuote",
        "fct-type": "function",
        "title": "parseQuote"
      },
      "index": {
        "description": "Parser for egison-quote",
        "hierarchy": "Language Egison Quote",
        "module": "Language.Egison.Quote",
        "name": "parseQuote",
        "normalized": "Parser(EgisonExpr,Type)",
        "package": "egison-quote",
        "partial": "Quote",
        "signature": "Parser(EgisonExpr,Type)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/egison-quote/docs/Language-Egison-Quote.html#v:parseType",
      "description": {
        "fct-descr": "\u003cp\u003eParser for TypeSignature\n\u003c/p\u003e",
        "fct-module": "Language.Egison.Quote",
        "fct-package": "egison-quote",
        "fct-signature": "Parser Type",
        "fct-source": "src/Language-Egison-Quote.html#parseType",
        "fct-type": "function",
        "title": "parseType"
      },
      "index": {
        "description": "Parser for TypeSignature",
        "hierarchy": "Language Egison Quote",
        "module": "Language.Egison.Quote",
        "name": "parseType",
        "normalized": "",
        "package": "egison-quote",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/egison-quote/docs/Language-Egison-Quote.html#v:pickupAntiquote",
      "description": {
        "fct-descr": "\u003cp\u003ePick up antiquoted variables and delete notation \u003ccode\u003e#{~}\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e \"(+ #{x} y)\"  ---\u003e ([x], \"(+ x y)\")\n\u003c/pre\u003e",
        "fct-module": "Language.Egison.Quote",
        "fct-package": "egison-quote",
        "fct-signature": "String -\u003e ([String], String)",
        "fct-source": "src/Language-Egison-Quote.html#pickupAntiquote",
        "fct-type": "function",
        "title": "pickupAntiquote"
      },
      "index": {
        "description": "Pick up antiquoted variables and delete notation",
        "hierarchy": "Language Egison Quote",
        "module": "Language.Egison.Quote",
        "name": "pickupAntiquote",
        "normalized": "String-\u003e([String],String)",
        "package": "egison-quote",
        "partial": "Antiquote",
        "signature": "String-\u003e([String],String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/egison-quote/docs/Language-Egison-Quote.html#v:readQuote",
      "description": {
        "fct-descr": "\u003cp\u003eRead function for egison-quote\n\u003c/p\u003e",
        "fct-module": "Language.Egison.Quote",
        "fct-package": "egison-quote",
        "fct-signature": "String -\u003e ThrowsError (EgisonExpr, Type)",
        "fct-source": "src/Language-Egison-Quote.html#readQuote",
        "fct-type": "function",
        "title": "readQuote"
      },
      "index": {
        "description": "Read function for egison-quote",
        "hierarchy": "Language Egison Quote",
        "module": "Language.Egison.Quote",
        "name": "readQuote",
        "normalized": "String-\u003eThrowsError(EgisonExpr,Type)",
        "package": "egison-quote",
        "partial": "Quote",
        "signature": "String-\u003eThrowsError(EgisonExpr,Type)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/egison-quote/docs/Language-Egison-Quote.html#v:toHaskellExp",
      "description": {
        "fct-descr": "\u003cp\u003econstruct Exp from Egison-expression and type signature\n\u003c/p\u003e",
        "fct-module": "Language.Egison.Quote",
        "fct-package": "egison-quote",
        "fct-signature": "EgisonExpr -\u003e [String] -\u003e Type -\u003e ExpQ",
        "fct-source": "src/Language-Egison-Quote.html#toHaskellExp",
        "fct-type": "function",
        "title": "toHaskellExp"
      },
      "index": {
        "description": "construct Exp from Egison-expression and type signature",
        "hierarchy": "Language Egison Quote",
        "module": "Language.Egison.Quote",
        "name": "toHaskellExp",
        "normalized": "EgisonExpr-\u003e[String]-\u003eType-\u003eExpQ",
        "package": "egison-quote",
        "partial": "Haskell Exp",
        "signature": "EgisonExpr-\u003e[String]-\u003eType-\u003eExpQ"
      }
    }
  }
]