[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/th-kinds/docs/Language-Haskell-TH-KindInference.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module to infer the kind of a given type within Template Haskell.\n Warning: this implements its own kind inference system, and is therefore\n not guaranteed to work on all esoteric types.  (That said, I have no examples\n where it doesn't work.)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Haskell.TH.KindInference",
        "fct-package": "th-kinds",
        "fct-signature": "module",
        "fct-source": "src/Language-Haskell-TH-KindInference.html",
        "fct-type": "module",
        "title": "KindInference"
      },
      "index": {
        "description": "module to infer the kind of given type within Template Haskell Warning this implements its own kind inference system and is therefore not guaranteed to work on all esoteric types That said have no examples where it doesn work",
        "hierarchy": "Language Haskell TH KindInference",
        "module": "Language.Haskell.TH.KindInference",
        "name": "KindInference",
        "normalized": "",
        "package": "th-kinds",
        "partial": "Kind Inference",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/th-kinds/docs/Language-Haskell-TH-KindInference.html#v:inferKind",
      "description": {
        "fct-descr": "\u003cp\u003eReturns either an error message or the \u003ccode\u003e\u003ca\u003eKind\u003c/a\u003e\u003c/code\u003e of the type referred to by the specified name.\n Works with datas, newtypes, type synonyms, type classes, data families, and type families.\n\u003c/p\u003e\u003cp\u003eNote: There has been a bug observed in Template Haskell relating to the parsing of types.  This\n assumes that bug has been fixed, requiring GHC at least 6.12.2.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.TH.KindInference",
        "fct-package": "th-kinds",
        "fct-signature": "Name -\u003e Q (Either String Kind)",
        "fct-source": "src/Language-Haskell-TH-KindInference.html#inferKind",
        "fct-type": "function",
        "title": "inferKind"
      },
      "index": {
        "description": "Returns either an error message or the Kind of the type referred to by the specified name Works with datas newtypes type synonyms type classes data families and type families Note There has been bug observed in Template Haskell relating to the parsing of types This assumes that bug has been fixed requiring GHC at least",
        "hierarchy": "Language Haskell TH KindInference",
        "module": "Language.Haskell.TH.KindInference",
        "name": "inferKind",
        "normalized": "Name-\u003eQ(Either String Kind)",
        "package": "th-kinds",
        "partial": "Kind",
        "signature": "Name-\u003eQ(Either String Kind)"
      }
    }
  }
]