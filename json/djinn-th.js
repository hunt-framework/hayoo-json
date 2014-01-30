[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/djinn-th/docs/Language-Haskell-Djinn.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDjinn uses a theorem prover for intuitionistic propositional logic to\n generate a Haskell expression when given a type. Djinn-TH uses Template\n Haskell to turn this expression into executable code.\n\u003c/p\u003e\u003cp\u003eBased mostly on \u003ca\u003ehttp://hackage.haskell.org/package/djinn\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eUsing Language.Haskell.Djinn generally requires:\n\u003c/p\u003e\u003cpre\u003e{-# LANGUAGE TemplateHaskell, ScopedTypeVariables #-}\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Language.Haskell.Djinn",
        "fct-package": "djinn-th",
        "fct-signature": "module",
        "fct-source": "src/Language-Haskell-Djinn.html",
        "fct-type": "module",
        "title": "Djinn"
      },
      "index": {
        "description": "Djinn uses theorem prover for intuitionistic propositional logic to generate Haskell expression when given type Djinn-TH uses Template Haskell to turn this expression into executable code Based mostly on http hackage.haskell.org package djinn Using Language.Haskell.Djinn generally requires LANGUAGE TemplateHaskell ScopedTypeVariables",
        "hierarchy": "Language Haskell Djinn",
        "module": "Language.Haskell.Djinn",
        "name": "Djinn",
        "normalized": "",
        "package": "djinn-th",
        "partial": "Djinn",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/djinn-th/docs/Language-Haskell-Djinn.html#v:djinn",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate an anonymous expression of the given type (if it is realizable).\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.Djinn",
        "fct-package": "djinn-th",
        "fct-signature": "Q Type-\u003e Q Exp",
        "fct-type": "function",
        "title": "djinn"
      },
      "index": {
        "description": "Generate an anonymous expression of the given type if it is realizable",
        "hierarchy": "Language Haskell Djinn",
        "module": "Language.Haskell.Djinn",
        "name": "djinn",
        "normalized": "Q Type-\u003eQ Exp",
        "package": "djinn-th",
        "partial": "",
        "signature": "Q Type-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/djinn-th/docs/Language-Haskell-Djinn.html#v:djinnD",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a named declaration with an accompanying type signature.  For example:\n\u003c/p\u003e\u003cpre\u003e   $(djinnD \"maybeToEither\" [t| forall a b . a -\u003e  Maybe b -\u003e  Either a b |])\n   main = print . map (maybeToEither \"foo\") $ [ Nothing, Just \"bar\" ]\n\u003c/pre\u003e\u003cp\u003emight print \u003ccode\u003e[Left \"foo\",Right \"bar\"]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.Djinn",
        "fct-package": "djinn-th",
        "fct-signature": "String-\u003e Q Type-\u003e Q [Dec]",
        "fct-type": "function",
        "title": "djinnD"
      },
      "index": {
        "description": "Generate named declaration with an accompanying type signature For example djinnD maybeToEither forall Maybe Either main print map maybeToEither foo Nothing Just bar might print Left foo Right bar",
        "hierarchy": "Language Haskell Djinn",
        "module": "Language.Haskell.Djinn",
        "name": "djinnD",
        "normalized": "String-\u003eQ Type-\u003eQ[Dec]",
        "package": "djinn-th",
        "partial": "",
        "signature": "String-\u003eQ Type-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/djinn-th/docs/Language-Haskell-Djinn.html#v:djinns",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a list of anonymous expressions of the given type (if it is realizable).\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.Djinn",
        "fct-package": "djinn-th",
        "fct-signature": "Q Type-\u003e Q Exp",
        "fct-type": "function",
        "title": "djinns"
      },
      "index": {
        "description": "Generate list of anonymous expressions of the given type if it is realizable",
        "hierarchy": "Language Haskell Djinn",
        "module": "Language.Haskell.Djinn",
        "name": "djinns",
        "normalized": "Q Type-\u003eQ Exp",
        "package": "djinn-th",
        "partial": "",
        "signature": "Q Type-\u003eQ Exp"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/djinn-th/docs/Language-Haskell-Djinn.html#v:djinnsD",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a named declaration with an accompanying type signature\nfor a list of possible realizations of a type.\n\u003c/p\u003e\u003cpre\u003e   $(djinnsD \"picks\" [t| forall a . (a, a) -\u003e (a -\u003e a) -\u003e a |])\n   main = print [ p (\"A\",\"B\") (++\"C\") | p \u003c- picks ]\n\u003c/pre\u003e\u003cp\u003emight print \u003ccode\u003e[\"BC\",\"AC\",\"B\",\"A\"]\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.Djinn",
        "fct-package": "djinn-th",
        "fct-signature": "String-\u003e Q Type-\u003e Q [Dec]",
        "fct-type": "function",
        "title": "djinnsD"
      },
      "index": {
        "description": "Generate named declaration with an accompanying type signature for list of possible realizations of type djinnsD picks forall main print picks might print BC AC",
        "hierarchy": "Language Haskell Djinn",
        "module": "Language.Haskell.Djinn",
        "name": "djinnsD",
        "normalized": "String-\u003eQ Type-\u003eQ[Dec]",
        "package": "djinn-th",
        "partial": "",
        "signature": "String-\u003eQ Type-\u003eQ[Dec]"
      }
    }
  }
]