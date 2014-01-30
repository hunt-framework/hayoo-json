[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-exts-qq/docs/Language-Haskell-Exts-QQ.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines quasiquoters for haskell-src-exts expressions and\n declarations.\n\u003c/p\u003e\u003cp\u003eAntiquotations steal the splice syntax of Template Haskell, so for\n example example \u003ccode\u003ex\u003c/code\u003e appears antiquoted in \u003ccode\u003e[$hs| $x ++ $(Hs.strE \"bar\") |]\u003c/code\u003e.\n Expressions appearing inside parenthesized splices are limited to concrete\n syntax expressible by Template Haskell's \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e data type.\n\u003c/p\u003e\u003cp\u003eNames in patterns can also be antiquoted, using double parentheses. For\n instance:\n\u003c/p\u003e\u003cpre\u003e let x = Hs.name \"n\" in [hs| \\ ((x)) -\u003e $(Hs.Var (Hs.UnQual x)) + 1 |]\n\u003c/pre\u003e\u003cp\u003eAlternatively, one can use the double underscore syntax, useful when\n antiquoting a function name as in the following:\n\u003c/p\u003e\u003cpre\u003e let f = \"incr\"\n     fE = Hs.Var $ Hs.UnQual $ Hs.name f\n in [hs| let __f__ x = x + 1 in $fE 10 |]\n\u003c/pre\u003e\u003cp\u003eIn a pattern context, antiquotations use the same syntax.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Haskell.Exts.QQ",
        "fct-package": "haskell-src-exts-qq",
        "fct-signature": "module",
        "fct-source": "src/Language-Haskell-Exts-QQ.html",
        "fct-type": "module",
        "title": "QQ"
      },
      "index": {
        "description": "This module defines quasiquoters for haskell-src-exts expressions and declarations Antiquotations steal the splice syntax of Template Haskell so for example example appears antiquoted in hs Hs.strE bar Expressions appearing inside parenthesized splices are limited to concrete syntax expressible by Template Haskell Exp data type Names in patterns can also be antiquoted using double parentheses For instance let Hs.name in hs Hs.Var Hs.UnQual Alternatively one can use the double underscore syntax useful when antiquoting function name as in the following let incr fE Hs.Var Hs.UnQual Hs.name in hs let in fE In pattern context antiquotations use the same syntax",
        "hierarchy": "Language Haskell Exts QQ",
        "module": "Language.Haskell.Exts.QQ",
        "name": "QQ",
        "normalized": "",
        "package": "haskell-src-exts-qq",
        "partial": "QQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-exts-qq/docs/Language-Haskell-Exts-QQ.html#v:dec",
      "description": {
        "fct-descr": "\u003cp\u003eA quasiquoter for top-level declarations.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.Exts.QQ",
        "fct-package": "haskell-src-exts-qq",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Language-Haskell-Exts-QQ.html#dec",
        "fct-type": "function",
        "title": "dec"
      },
      "index": {
        "description": "quasiquoter for top-level declarations",
        "hierarchy": "Language Haskell Exts QQ",
        "module": "Language.Haskell.Exts.QQ",
        "name": "dec",
        "normalized": "",
        "package": "haskell-src-exts-qq",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-exts-qq/docs/Language-Haskell-Exts-QQ.html#v:decWithMode",
      "description": {
        "fct-module": "Language.Haskell.Exts.QQ",
        "fct-package": "haskell-src-exts-qq",
        "fct-signature": "ParseMode -\u003e QuasiQuoter",
        "fct-source": "src/Language-Haskell-Exts-QQ.html#decWithMode",
        "fct-type": "function",
        "title": "decWithMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Exts QQ",
        "module": "Language.Haskell.Exts.QQ",
        "name": "decWithMode",
        "normalized": "ParseMode-\u003eQuasiQuoter",
        "package": "haskell-src-exts-qq",
        "partial": "With Mode",
        "signature": "ParseMode-\u003eQuasiQuoter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-exts-qq/docs/Language-Haskell-Exts-QQ.html#v:hs",
      "description": {
        "fct-descr": "\u003cp\u003eA quasiquoter for expressions. All Haskell extensions known by\n haskell-src-exts are activated by default.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.Exts.QQ",
        "fct-package": "haskell-src-exts-qq",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Language-Haskell-Exts-QQ.html#hs",
        "fct-type": "function",
        "title": "hs"
      },
      "index": {
        "description": "quasiquoter for expressions All Haskell extensions known by haskell-src-exts are activated by default",
        "hierarchy": "Language Haskell Exts QQ",
        "module": "Language.Haskell.Exts.QQ",
        "name": "hs",
        "normalized": "",
        "package": "haskell-src-exts-qq",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-exts-qq/docs/Language-Haskell-Exts-QQ.html#v:hsWithMode",
      "description": {
        "fct-descr": "\u003cp\u003eRather than importing the above quasiquoters, one can create custom\n quasiquoters with a customized \u003ccode\u003eParseMode\u003c/code\u003e using this function.\n\u003c/p\u003e\u003cpre\u003e hs = hsWithMode mode\n dec = decWithMode mode\n\u003c/pre\u003e",
        "fct-module": "Language.Haskell.Exts.QQ",
        "fct-package": "haskell-src-exts-qq",
        "fct-signature": "ParseMode -\u003e QuasiQuoter",
        "fct-source": "src/Language-Haskell-Exts-QQ.html#hsWithMode",
        "fct-type": "function",
        "title": "hsWithMode"
      },
      "index": {
        "description": "Rather than importing the above quasiquoters one can create custom quasiquoters with customized ParseMode using this function hs hsWithMode mode dec decWithMode mode",
        "hierarchy": "Language Haskell Exts QQ",
        "module": "Language.Haskell.Exts.QQ",
        "name": "hsWithMode",
        "normalized": "ParseMode-\u003eQuasiQuoter",
        "package": "haskell-src-exts-qq",
        "partial": "With Mode",
        "signature": "ParseMode-\u003eQuasiQuoter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-exts-qq/docs/Language-Haskell-Exts-QQ.html#v:ty",
      "description": {
        "fct-descr": "\u003cp\u003eA quasiquoter for types. All Haskell extensions known by\n haskell-src-exts are activated by default.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.Exts.QQ",
        "fct-package": "haskell-src-exts-qq",
        "fct-signature": "QuasiQuoter",
        "fct-source": "src/Language-Haskell-Exts-QQ.html#ty",
        "fct-type": "function",
        "title": "ty"
      },
      "index": {
        "description": "quasiquoter for types All Haskell extensions known by haskell-src-exts are activated by default",
        "hierarchy": "Language Haskell Exts QQ",
        "module": "Language.Haskell.Exts.QQ",
        "name": "ty",
        "normalized": "",
        "package": "haskell-src-exts-qq",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haskell-src-exts-qq/docs/Language-Haskell-Exts-QQ.html#v:tyWithMode",
      "description": {
        "fct-module": "Language.Haskell.Exts.QQ",
        "fct-package": "haskell-src-exts-qq",
        "fct-signature": "ParseMode -\u003e QuasiQuoter",
        "fct-source": "src/Language-Haskell-Exts-QQ.html#tyWithMode",
        "fct-type": "function",
        "title": "tyWithMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell Exts QQ",
        "module": "Language.Haskell.Exts.QQ",
        "name": "tyWithMode",
        "normalized": "ParseMode-\u003eQuasiQuoter",
        "package": "haskell-src-exts-qq",
        "partial": "With Mode",
        "signature": "ParseMode-\u003eQuasiQuoter"
      }
    }
  }
]