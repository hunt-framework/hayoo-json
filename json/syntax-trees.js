[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/syntax-trees/docs/Language-Haskell-SyntaxTrees-ExtsToTH.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides an instance that translates\n    haskell-src-exts expression trees into Template Haskell expression\n    trees in a way that depends only on the haskell-src-exts syntax tree\n    and agreement on the pretty-printed representation of\n    Haskell between haskell-src-exts pretty-printer and\n    Template Haskell quotations (as opposed to depending on\n    both TH and haskell-src-exts syntax tree representations).\n\u003c/p\u003e\u003cp\u003eInstead of converting between data types, \n    haskell-src-exts syntax trees are pretty-printed and wrapped in\n    a TH quotation which is then interpreted as a Haskell program,\n    yielding a TH Exp tree. Free variables in the haskell-src-exts tree are\n    preserved by lifting them to TH splices prior to pretty-printing.\n\u003c/p\u003e\u003cp\u003ee.g. \u003ccode\u003eparseToTH \"let x = 1 in x + y\"\u003c/code\u003e = \n    \u003ccode\u003e\n        Right (LetE [ValD (VarP x_1) (NormalB (LitE (IntegerL 1))) []]\n          (InfixE (Just (VarE x_1)) (VarE GHC.Num.+) (Just (VarE y))))\n    \u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Haskell.SyntaxTrees.ExtsToTH",
        "fct-package": "syntax-trees",
        "fct-signature": "module",
        "fct-source": "src/Language-Haskell-SyntaxTrees-ExtsToTH.html",
        "fct-type": "module",
        "title": "ExtsToTH"
      },
      "index": {
        "description": "Provides an instance that translates haskell-src-exts expression trees into Template Haskell expression trees in way that depends only on the haskell-src-exts syntax tree and agreement on the pretty-printed representation of Haskell between haskell-src-exts pretty-printer and Template Haskell quotations as opposed to depending on both TH and haskell-src-exts syntax tree representations Instead of converting between data types haskell-src-exts syntax trees are pretty-printed and wrapped in TH quotation which is then interpreted as Haskell program yielding TH Exp tree Free variables in the haskell-src-exts tree are preserved by lifting them to TH splices prior to pretty-printing e.g parseToTH let in Right LetE ValD VarP NormalB LitE IntegerL InfixE Just VarE VarE GHC.Num Just VarE",
        "hierarchy": "Language Haskell SyntaxTrees ExtsToTH",
        "module": "Language.Haskell.SyntaxTrees.ExtsToTH",
        "name": "ExtsToTH",
        "normalized": "",
        "package": "syntax-trees",
        "partial": "Exts To TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/syntax-trees/docs/Language-Haskell-SyntaxTrees-ExtsToTH.html#v:parseToTH",
      "description": {
        "fct-descr": "\u003cp\u003eParse a string to a Language.Haskell.TH.Exp (template-haskell) expression \n    via intermediate representation as a Exts.Exp tree. \n\u003c/p\u003e",
        "fct-module": "Language.Haskell.SyntaxTrees.ExtsToTH",
        "fct-package": "syntax-trees",
        "fct-signature": "String -\u003e Either String Exp",
        "fct-source": "src/Language-Haskell-SyntaxTrees-ExtsToTH.html#parseToTH",
        "fct-type": "function",
        "title": "parseToTH"
      },
      "index": {
        "description": "Parse string to Language.Haskell.TH.Exp template-haskell expression via intermediate representation as Exts.Exp tree",
        "hierarchy": "Language Haskell SyntaxTrees ExtsToTH",
        "module": "Language.Haskell.SyntaxTrees.ExtsToTH",
        "name": "parseToTH",
        "normalized": "String-\u003eEither String Exp",
        "package": "syntax-trees",
        "partial": "To TH",
        "signature": "String-\u003eEither String Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/syntax-trees/docs/Language-Haskell-SyntaxTrees-ExtsToTH.html#v:parseToTarget",
      "description": {
        "fct-descr": "\u003cp\u003eParse a string to a tree of type \u003ccode\u003et\u003c/code\u003e, via intermediate representation\n        as a tree of type \u003ccode\u003es\u003c/code\u003e. Requires a witness of the intermediate type \u003ccode\u003es\u003c/code\u003e\n        to be passed as the first argument.\n\u003c/p\u003e\u003cp\u003eIf parsing fails then \u003ccode\u003eparseToTarget s = Left s\u003c/code\u003e, otherwise\n        \u003ccode\u003eparseToTarget s = Right t\u003c/code\u003e where \u003ccode\u003et\u003c/code\u003e is the parsed tree. \n\u003c/p\u003e",
        "fct-module": "Language.Haskell.SyntaxTrees.ExtsToTH",
        "fct-package": "syntax-trees",
        "fct-signature": "Witness s -\u003e String -\u003e Either String t",
        "fct-source": "src/Language-Haskell-SyntaxTrees-Main.html#parseToTarget",
        "fct-type": "function",
        "title": "parseToTarget"
      },
      "index": {
        "description": "Parse string to tree of type via intermediate representation as tree of type Requires witness of the intermediate type to be passed as the first argument If parsing fails then parseToTarget Left otherwise parseToTarget Right where is the parsed tree",
        "hierarchy": "Language Haskell SyntaxTrees ExtsToTH",
        "module": "Language.Haskell.SyntaxTrees.ExtsToTH",
        "name": "parseToTarget",
        "normalized": "Witness a-\u003eString-\u003eEither String b",
        "package": "syntax-trees",
        "partial": "To Target",
        "signature": "Witness s-\u003eString-\u003eEither String t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/syntax-trees/docs/Language-Haskell-SyntaxTrees-ExtsToTH.html#v:translateExtsToTH",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate a Language.Haskell.Exts.Exp (haskell-src-exts) syntax tree\n      to a Language.Haskell.TH.Exp (template-haskell) syntax tree \n\u003c/p\u003e",
        "fct-module": "Language.Haskell.SyntaxTrees.ExtsToTH",
        "fct-package": "syntax-trees",
        "fct-signature": "Exp -\u003e Either Exp Exp",
        "fct-source": "src/Language-Haskell-SyntaxTrees-ExtsToTH.html#translateExtsToTH",
        "fct-type": "function",
        "title": "translateExtsToTH"
      },
      "index": {
        "description": "Translate Language.Haskell.Exts.Exp haskell-src-exts syntax tree to Language.Haskell.TH.Exp template-haskell syntax tree",
        "hierarchy": "Language Haskell SyntaxTrees ExtsToTH",
        "module": "Language.Haskell.SyntaxTrees.ExtsToTH",
        "name": "translateExtsToTH",
        "normalized": "Exp-\u003eEither Exp Exp",
        "package": "syntax-trees",
        "partial": "Exts To TH",
        "signature": "Exp-\u003eEither Exp Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/syntax-trees/docs/Language-Haskell-SyntaxTrees-ExtsToTH.html#v:translateTree",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate a tree of type \u003ccode\u003es\u003c/code\u003e to a tree of type \u003ccode\u003et\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf translation fails then \u003ccode\u003etranslate s = Left s\u003c/code\u003e, otherwise\n        \u003ccode\u003etranslate s = Right t\u003c/code\u003e where \u003ccode\u003et\u003c/code\u003e is the translated tree. \n\u003c/p\u003e",
        "fct-module": "Language.Haskell.SyntaxTrees.ExtsToTH",
        "fct-package": "syntax-trees",
        "fct-signature": "s -\u003e Either s t",
        "fct-source": "src/Language-Haskell-SyntaxTrees-Main.html#translateTree",
        "fct-type": "function",
        "title": "translateTree"
      },
      "index": {
        "description": "Translate tree of type to tree of type If translation fails then translate Left otherwise translate Right where is the translated tree",
        "hierarchy": "Language Haskell SyntaxTrees ExtsToTH",
        "module": "Language.Haskell.SyntaxTrees.ExtsToTH",
        "name": "translateTree",
        "normalized": "a-\u003eEither a b",
        "package": "syntax-trees",
        "partial": "Tree",
        "signature": "s-\u003eEither s t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/syntax-trees/docs/Language-Haskell-SyntaxTrees-Main.html#",
      "description": {
        "fct-module": "Language.Haskell.SyntaxTrees.Main",
        "fct-package": "syntax-trees",
        "fct-signature": "module",
        "fct-source": "src/Language-Haskell-SyntaxTrees-Main.html",
        "fct-type": "module",
        "title": "Main"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell SyntaxTrees Main",
        "module": "Language.Haskell.SyntaxTrees.Main",
        "name": "Main",
        "normalized": "",
        "package": "syntax-trees",
        "partial": "Main",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/syntax-trees/docs/Language-Haskell-SyntaxTrees-Main.html#t:Translation",
      "description": {
        "fct-module": "Language.Haskell.SyntaxTrees.Main",
        "fct-package": "syntax-trees",
        "fct-signature": "class",
        "fct-source": "src/Language-Haskell-SyntaxTrees-Main.html#Translation",
        "fct-type": "class",
        "title": "Translation"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell SyntaxTrees Main",
        "module": "Language.Haskell.SyntaxTrees.Main",
        "name": "Translation",
        "normalized": "",
        "package": "syntax-trees",
        "partial": "Translation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/syntax-trees/docs/Language-Haskell-SyntaxTrees-Main.html#t:Witness",
      "description": {
        "fct-module": "Language.Haskell.SyntaxTrees.Main",
        "fct-package": "syntax-trees",
        "fct-signature": "type",
        "fct-source": "src/Language-Haskell-SyntaxTrees-Main.html#Witness",
        "fct-type": "type",
        "title": "Witness"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell SyntaxTrees Main",
        "module": "Language.Haskell.SyntaxTrees.Main",
        "name": "Witness",
        "normalized": "",
        "package": "syntax-trees",
        "partial": "Witness",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/syntax-trees/docs/Language-Haskell-SyntaxTrees-Main.html#v:parseToTarget",
      "description": {
        "fct-descr": "\u003cp\u003eParse a string to a tree of type \u003ccode\u003et\u003c/code\u003e, via intermediate representation\n        as a tree of type \u003ccode\u003es\u003c/code\u003e. Requires a witness of the intermediate type \u003ccode\u003es\u003c/code\u003e\n        to be passed as the first argument.\n\u003c/p\u003e\u003cp\u003eIf parsing fails then \u003ccode\u003eparseToTarget s = Left s\u003c/code\u003e, otherwise\n        \u003ccode\u003eparseToTarget s = Right t\u003c/code\u003e where \u003ccode\u003et\u003c/code\u003e is the parsed tree. \n\u003c/p\u003e",
        "fct-module": "Language.Haskell.SyntaxTrees.Main",
        "fct-package": "syntax-trees",
        "fct-signature": "Witness s -\u003e String -\u003e Either String t",
        "fct-source": "src/Language-Haskell-SyntaxTrees-Main.html#parseToTarget",
        "fct-type": "method",
        "title": "parseToTarget"
      },
      "index": {
        "description": "Parse string to tree of type via intermediate representation as tree of type Requires witness of the intermediate type to be passed as the first argument If parsing fails then parseToTarget Left otherwise parseToTarget Right where is the parsed tree",
        "hierarchy": "Language Haskell SyntaxTrees Main",
        "module": "Language.Haskell.SyntaxTrees.Main",
        "name": "parseToTarget",
        "normalized": "Witness a-\u003eString-\u003eEither String b",
        "package": "syntax-trees",
        "partial": "To Target",
        "signature": "Witness s-\u003eString-\u003eEither String t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/syntax-trees/docs/Language-Haskell-SyntaxTrees-Main.html#v:translateTree",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate a tree of type \u003ccode\u003es\u003c/code\u003e to a tree of type \u003ccode\u003et\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf translation fails then \u003ccode\u003etranslate s = Left s\u003c/code\u003e, otherwise\n        \u003ccode\u003etranslate s = Right t\u003c/code\u003e where \u003ccode\u003et\u003c/code\u003e is the translated tree. \n\u003c/p\u003e",
        "fct-module": "Language.Haskell.SyntaxTrees.Main",
        "fct-package": "syntax-trees",
        "fct-signature": "s -\u003e Either s t",
        "fct-source": "src/Language-Haskell-SyntaxTrees-Main.html#translateTree",
        "fct-type": "method",
        "title": "translateTree"
      },
      "index": {
        "description": "Translate tree of type to tree of type If translation fails then translate Left otherwise translate Right where is the translated tree",
        "hierarchy": "Language Haskell SyntaxTrees Main",
        "module": "Language.Haskell.SyntaxTrees.Main",
        "name": "translateTree",
        "normalized": "a-\u003eEither a b",
        "package": "syntax-trees",
        "partial": "Tree",
        "signature": "s-\u003eEither s t"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/syntax-trees/docs/Language-Haskell-SyntaxTrees.html#",
      "description": {
        "fct-module": "Language.Haskell.SyntaxTrees",
        "fct-package": "syntax-trees",
        "fct-signature": "module",
        "fct-source": "src/Language-Haskell-SyntaxTrees.html",
        "fct-type": "module",
        "title": "SyntaxTrees"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell SyntaxTrees",
        "module": "Language.Haskell.SyntaxTrees",
        "name": "SyntaxTrees",
        "normalized": "",
        "package": "syntax-trees",
        "partial": "Syntax Trees",
        "signature": ""
      }
    }
  }
]