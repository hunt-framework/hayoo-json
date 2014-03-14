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
        "word": "th-kinds"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module to infer the kind of a given type within Template Haskell.\n Warning: this implements its own kind inference system, and is therefore\n not guaranteed to work on all esoteric types.  (That said, I have no examples\n where it doesn't work.)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Haskell.TH.KindInference",
          "name": "KindInference",
          "package": "th-kinds",
          "source": "src/Language-Haskell-TH-KindInference.html",
          "type": "module"
        },
        "index": {
          "description": "module to infer the kind of given type within Template Haskell Warning this implements its own kind inference system and is therefore not guaranteed to work on all esoteric types That said have no examples where it doesn work",
          "hierarchy": "Language Haskell TH KindInference",
          "module": "Language.Haskell.TH.KindInference",
          "name": "KindInference",
          "package": "th-kinds",
          "partial": "Kind Inference",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/th-kinds/docs/Language-Haskell-TH-KindInference.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns either an error message or the \u003ccode\u003e\u003ca\u003eKind\u003c/a\u003e\u003c/code\u003e of the type referred to by the specified name.\n Works with datas, newtypes, type synonyms, type classes, data families, and type families.\n\u003c/p\u003e\u003cp\u003eNote: There has been a bug observed in Template Haskell relating to the parsing of types.  This\n assumes that bug has been fixed, requiring GHC at least 6.12.2.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.KindInference",
          "name": "inferKind",
          "package": "th-kinds",
          "signature": "Name -\u003e Q (Either String Kind)",
          "source": "src/Language-Haskell-TH-KindInference.html#inferKind",
          "type": "function"
        },
        "index": {
          "description": "Returns either an error message or the Kind of the type referred to by the specified name Works with datas newtypes type synonyms type classes data families and type families Note There has been bug observed in Template Haskell relating to the parsing of types This assumes that bug has been fixed requiring GHC at least",
          "hierarchy": "Language Haskell TH KindInference",
          "module": "Language.Haskell.TH.KindInference",
          "name": "inferKind",
          "normalized": "Name-\u003eQ(Either String Kind)",
          "package": "th-kinds",
          "partial": "Kind",
          "signature": "Name-\u003eQ(Either String Kind)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-kinds/docs/Language-Haskell-TH-KindInference.html#v:inferKind"
      }
    }
  ]
]