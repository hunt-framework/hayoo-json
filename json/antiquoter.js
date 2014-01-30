[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-Base.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBase module for \u003ccode\u003e\u003ca\u003eAntiQuoter\u003c/a\u003e\u003c/code\u003es, defining some basic type-aliases and and\ncombinators for antiquoting.\n\u003c/p\u003e\u003cp\u003eTo for examples in the documentation of this library the following data\ntypes defining the untyped lambda calculus syntax:\n\u003c/p\u003e\u003cpre\u003e\ndata Expr\n    = VarE Var\n    | Lam  Var Expr\n    | App  Expr Expr\n    | AntiExpr String\n    deriving (Typeable, Data)\ndata Var\n    = Var     String\n    | AntiVar String\n    deriving (Typeable, Data)\n\u003c/pre\u003e\u003cp\u003e(note: the idea for using lambda calculus comes from the original paper on\nquasi-quoting \u003ca\u003ehttp://www.eecs.harvard.edu/~mainland/ghc-quasiquoting/mainland07quasiquoting.pdf\u003c/a\u003e)\n\u003c/p\u003e\u003cp\u003eA simple quasi-quoter without support for antiquoting can be defined by:\n\u003c/p\u003e\u003cpre\u003e\nlExp = QuasiQuoter\n    { quoteExp  = dataToExpQ (const Nothing) . parseExpr\n    , quotePat  = dataToPatQ (const Nothing) . parseExpr\n    , quoteType = error \"No type quoter\"\n    , quoteDec  = error \"No declaration quoter\"\n    }\nparseExpr :: String -\u003e Expr\nparseExpr = undefined -- implementation omitted\n\u003c/pre\u003e\u003cp\u003eNow to add antiquoting it is needed to treat the AntiExpr and AntiVar\nconstructors as special and translate them ourselves. This introduces an\n\u003ccode\u003e\u003ccode\u003e\u003ca\u003eAntiQuoterPass\u003c/a\u003e\u003c/code\u003e e p\u003c/code\u003e, which is a specific translation rule from source syntax\n\u003ccode\u003ee\u003c/code\u003e to template haskell type \u003ccode\u003ep\u003c/code\u003e. In the example this can be used to defined:\n\u003c/p\u003e\u003cpre\u003e\nantiExprE :: AntiQuoterPass Expr Exp\nantiExprE (AntiExpr s) = Just . varE $ mkName s\nantiExprE _            = Nothing\nantiVarE :: AntiQuoterPass Var Exp\nantiVarE (AntiVar s) = Just . varE $ mkName s\nantiVarE _           = Nothing\n\nantiExprP :: AntiQuoterPass Expr Pat\nantiExprP (AntiExpr s) = Just . varP $ mkName s\nantiExprP _            = Nothing\nantiVarP :: AntiQuoterPass Var Pat\nantiVarP (AntiVar s) = Just . varP $ mkName s\nantiVarP _           = Nothing\n\u003c/pre\u003e\u003cp\u003eBoth rules should be used when antiquoting as an exception to the base case\n(using the default translation, \u003ccode\u003econst Nothing\u003c/code\u003e). Which can be done using\n\u003ccode\u003e(\u003ccode\u003e\u003ca\u003e\u003c\u003e\u003e\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e, creating an \u003ccode\u003e\u003ca\u003eAntiQuoter\u003c/a\u003e\u003c/code\u003e. Where an \u003ccode\u003e\u003ca\u003eAntiQuoter\u003c/a\u003e\u003c/code\u003e represents a\ncombination of \u003ccode\u003e\u003ca\u003eAntiQuoterPass\u003c/a\u003e\u003c/code\u003ees which can be used to antiquote multiple\ndatatypes. In the example this would result in\n\u003c/p\u003e\u003cpre\u003e\nlExp = QuasiQuoter\n    { quoteExp  = dataToExpQ antiE . parseExpr\n    , quotePat  = dataToPatQ antiP . parseExpr\n    , quoteType = error \"No type quoter\"\n    , quoteDec  = error \"No declaration quoter\"\n    }\n    where\n        antiE :: AntiQuoter Exp\n        antiE = antiExprE \u003c\u003e\u003e antiVarE \u003c\u003e\u003e const Nothing\n        antiP :: AntiQuoter Pat\n        antiP = antiExprP \u003c\u003e\u003e antiVarP \u003c\u003e\u003e const Nothing\n\u003c/pre\u003e\u003cp\u003eTwo little improvements could be made, \u003ccode\u003econst Nothing\u003c/code\u003e could be replaced by\n\u003ccode\u003e\u003ca\u003enoAntiQuoter\u003c/a\u003e\u003c/code\u003e and the building of the \u003ccode\u003e\u003ca\u003eQuasiQuoter\u003c/a\u003e\u003c/code\u003e could be simplified by\nusing \u003ccode\u003e\u003ca\u003emkQuasiQuoter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.Base",
        "fct-package": "antiquoter",
        "fct-signature": "module",
        "fct-source": "src/Language-Haskell-AntiQuoter-Base.html",
        "fct-type": "module",
        "title": "Base"
      },
      "index": {
        "description": "Base module for AntiQuoter defining some basic type-aliases and and combinators for antiquoting To for examples in the documentation of this library the following data types defining the untyped lambda calculus syntax data Expr VarE Var Lam Var Expr App Expr Expr AntiExpr String deriving Typeable Data data Var Var String AntiVar String deriving Typeable Data note the idea for using lambda calculus comes from the original paper on quasi-quoting http www.eecs.harvard.edu mainland ghc-quasiquoting mainland07quasiquoting.pdf simple quasi-quoter without support for antiquoting can be defined by lExp QuasiQuoter quoteExp dataToExpQ const Nothing parseExpr quotePat dataToPatQ const Nothing parseExpr quoteType error No type quoter quoteDec error No declaration quoter parseExpr String Expr parseExpr undefined implementation omitted Now to add antiquoting it is needed to treat the AntiExpr and AntiVar constructors as special and translate them ourselves This introduces an AntiQuoterPass which is specific translation rule from source syntax to template haskell type In the example this can be used to defined antiExprE AntiQuoterPass Expr Exp antiExprE AntiExpr Just varE mkName antiExprE Nothing antiVarE AntiQuoterPass Var Exp antiVarE AntiVar Just varE mkName antiVarE Nothing antiExprP AntiQuoterPass Expr Pat antiExprP AntiExpr Just varP mkName antiExprP Nothing antiVarP AntiQuoterPass Var Pat antiVarP AntiVar Just varP mkName antiVarP Nothing Both rules should be used when antiquoting as an exception to the base case using the default translation const Nothing Which can be done using creating an AntiQuoter Where an AntiQuoter represents combination of AntiQuoterPass es which can be used to antiquote multiple datatypes In the example this would result in lExp QuasiQuoter quoteExp dataToExpQ antiE parseExpr quotePat dataToPatQ antiP parseExpr quoteType error No type quoter quoteDec error No declaration quoter where antiE AntiQuoter Exp antiE antiExprE antiVarE const Nothing antiP AntiQuoter Pat antiP antiExprP antiVarP const Nothing Two little improvements could be made const Nothing could be replaced by noAntiQuoter and the building of the QuasiQuoter could be simplified by using mkQuasiQuoter",
        "hierarchy": "Language Haskell AntiQuoter Base",
        "module": "Language.Haskell.AntiQuoter.Base",
        "name": "Base",
        "normalized": "",
        "package": "antiquoter",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-Base.html#t:AQResult",
      "description": {
        "fct-descr": "\u003cp\u003eResult of an \u003ccode\u003e\u003ca\u003eAntiQuoterPass\u003c/a\u003e\u003c/code\u003e (AntiQuoterPass e q = e -\u003e AQResult q).\n This type-alias is mostly used for combinators which only provides the\n result of the antiquotation and the usecase (thus the pattern to match)\n should be filled in by the user.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eAntiQuoterPass\u003c/a\u003e\u003c/code\u003e on what \u003ccode\u003eNothing\u003c/code\u003e and \u003ccode\u003eJust\u003c/code\u003e mean.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.Base",
        "fct-package": "antiquoter",
        "fct-signature": "type",
        "fct-source": "src/Language-Haskell-AntiQuoter-Base.html#AQResult",
        "fct-type": "type",
        "title": "AQResult"
      },
      "index": {
        "description": "Result of an AntiQuoterPass AntiQuoterPass AQResult This type-alias is mostly used for combinators which only provides the result of the antiquotation and the usecase thus the pattern to match should be filled in by the user See AntiQuoterPass on what Nothing and Just mean",
        "hierarchy": "Language Haskell AntiQuoter Base",
        "module": "Language.Haskell.AntiQuoter.Base",
        "name": "AQResult",
        "normalized": "",
        "package": "antiquoter",
        "partial": "AQResult",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-Base.html#t:AntiQuoter",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eAntiQuoter\u003c/a\u003e\u003c/code\u003e is the combination of several \u003ccode\u003e\u003ca\u003eAntiQuoterPass\u003c/a\u003e\u003c/code\u003ees, which\n could have different source types. In the example the\n \u003ccode\u003eAntiQuoterPass Expr Exp\u003c/code\u003e and \u003ccode\u003eAntiQuoterPass Var Exp\u003c/code\u003e were combined into\n a single \u003ccode\u003eAntiQuoter Exp\u003c/code\u003e, which antiquoted both \u003ccode\u003eExpr\u003c/code\u003e and \u003ccode\u003ePat\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.Base",
        "fct-package": "antiquoter",
        "fct-signature": "type",
        "fct-source": "src/Language-Haskell-AntiQuoter-Base.html#AntiQuoter",
        "fct-type": "type",
        "title": "AntiQuoter"
      },
      "index": {
        "description": "An AntiQuoter is the combination of several AntiQuoterPass es which could have different source types In the example the AntiQuoterPass Expr Exp and AntiQuoterPass Var Exp were combined into single AntiQuoter Exp which antiquoted both Expr and Pat",
        "hierarchy": "Language Haskell AntiQuoter Base",
        "module": "Language.Haskell.AntiQuoter.Base",
        "name": "AntiQuoter",
        "normalized": "",
        "package": "antiquoter",
        "partial": "Anti Quoter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-Base.html#t:AntiQuoterPass",
      "description": {
        "fct-descr": "\u003cp\u003eA single antiquotation for a specific source type. Usually \u003ccode\u003ee\u003c/code\u003e is a type\n from the parsed language and \u003ccode\u003eq\u003c/code\u003e is the target type (usually \u003ccode\u003e\u003ca\u003ePat\u003c/a\u003e\u003c/code\u003e or\n \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e). A \u003ccode\u003eJust result\u003c/code\u003e indicates that the input should be antiquoted into\n \u003ccode\u003eresult\u003c/code\u003e while \u003ccode\u003eNothing\u003c/code\u003e indicates that there is no special antiquotation.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.Base",
        "fct-package": "antiquoter",
        "fct-signature": "type",
        "fct-source": "src/Language-Haskell-AntiQuoter-Base.html#AntiQuoterPass",
        "fct-type": "type",
        "title": "AntiQuoterPass"
      },
      "index": {
        "description": "single antiquotation for specific source type Usually is type from the parsed language and is the target type usually Pat or Exp Just result indicates that the input should be antiquoted into result while Nothing indicates that there is no special antiquotation",
        "hierarchy": "Language Haskell AntiQuoter Base",
        "module": "Language.Haskell.AntiQuoter.Base",
        "name": "AntiQuoterPass",
        "normalized": "",
        "package": "antiquoter",
        "partial": "Anti Quoter Pass",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-Base.html#t:WrappedAQResult",
      "description": {
        "fct-descr": "\u003cp\u003eWrapper for \u003ccode\u003e\u003ca\u003eAQResult\u003c/a\u003e\u003c/code\u003e, needed for the typechecker.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.Base",
        "fct-package": "antiquoter",
        "fct-signature": "newtype",
        "fct-source": "src/Language-Haskell-AntiQuoter-Base.html#WrappedAQResult",
        "fct-type": "newtype",
        "title": "WrappedAQResult"
      },
      "index": {
        "description": "Wrapper for AQResult needed for the typechecker",
        "hierarchy": "Language Haskell AntiQuoter Base",
        "module": "Language.Haskell.AntiQuoter.Base",
        "name": "WrappedAQResult",
        "normalized": "",
        "package": "antiquoter",
        "partial": "Wrapped AQResult",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-Base.html#v:-60--60--62-",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eAntiQuoter\u003c/a\u003e\u003c/code\u003e by combining an \u003ccode\u003e\u003ca\u003eAntiQuoter\u003c/a\u003e\u003c/code\u003e and an\n \u003ccode\u003e\u003ca\u003eAntiQuoterPass\u003c/a\u003e\u003c/code\u003e. This is left biased, see (\u003ccode\u003e\u003ca\u003e\u003c\u003c\u003e\u003e\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.Base",
        "fct-package": "antiquoter",
        "fct-signature": "AntiQuoter q -\u003e AntiQuoterPass e q -\u003e AntiQuoter q",
        "fct-source": "src/Language-Haskell-AntiQuoter-Base.html#%3C%3C%3E",
        "fct-type": "function",
        "title": "(\u003c\u003c\u003e)"
      },
      "index": {
        "description": "Create an AntiQuoter by combining an AntiQuoter and an AntiQuoterPass This is left biased see",
        "hierarchy": "Language Haskell AntiQuoter Base",
        "module": "Language.Haskell.AntiQuoter.Base",
        "name": "(\u003c\u003c\u003e) \u003c\u003c\u003e",
        "normalized": "AntiQuoter a-\u003eAntiQuoterPass b a-\u003eAntiQuoter a",
        "package": "antiquoter",
        "partial": "",
        "signature": "AntiQuoter q-\u003eAntiQuoterPass e q-\u003eAntiQuoter q"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-Base.html#v:-60--60--62--62-",
      "description": {
        "fct-descr": "\u003cp\u003eCombines two \u003ccode\u003e\u003ca\u003eAntiQuoter\u003c/a\u003e\u003c/code\u003es with the same result. It is left biased, thus\n if the first antiquoter returns \u003ccode\u003eJust result\u003c/code\u003e that is used, otherwise the\n second AntiQuoter is tried.\n Together with \u003ccode\u003e\u003ca\u003enoAntiQuoter\u003c/a\u003e\u003c/code\u003e this forms a monoid, but as AntiQuoter is a\n type synonyme no instance is declared.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.Base",
        "fct-package": "antiquoter",
        "fct-signature": "AntiQuoter q -\u003e AntiQuoter q -\u003e AntiQuoter q",
        "fct-source": "src/Language-Haskell-AntiQuoter-Base.html#%3C%3C%3E%3E",
        "fct-type": "function",
        "title": "(\u003c\u003c\u003e\u003e)"
      },
      "index": {
        "description": "Combines two AntiQuoter with the same result It is left biased thus if the first antiquoter returns Just result that is used otherwise the second AntiQuoter is tried Together with noAntiQuoter this forms monoid but as AntiQuoter is type synonyme no instance is declared",
        "hierarchy": "Language Haskell AntiQuoter Base",
        "module": "Language.Haskell.AntiQuoter.Base",
        "name": "(\u003c\u003c\u003e\u003e) \u003c\u003c\u003e\u003e",
        "normalized": "AntiQuoter a-\u003eAntiQuoter a-\u003eAntiQuoter a",
        "package": "antiquoter",
        "partial": "",
        "signature": "AntiQuoter q-\u003eAntiQuoter q-\u003eAntiQuoter q"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-Base.html#v:-60--62--62-",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eAntiQuoter\u003c/a\u003e\u003c/code\u003e by combining an \u003ccode\u003e\u003ca\u003eAntiQuoterPass\u003c/a\u003e\u003c/code\u003e and an\n \u003ccode\u003e\u003ca\u003eAntiQuoter\u003c/a\u003e\u003c/code\u003e. This is left biased, see (\u003ccode\u003e\u003ca\u003e\u003c\u003c\u003e\u003e\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.Base",
        "fct-package": "antiquoter",
        "fct-signature": "AntiQuoterPass e q -\u003e AntiQuoter q -\u003e AntiQuoter q",
        "fct-source": "src/Language-Haskell-AntiQuoter-Base.html#%3C%3E%3E",
        "fct-type": "function",
        "title": "(\u003c\u003e\u003e)"
      },
      "index": {
        "description": "Create an AntiQuoter by combining an AntiQuoterPass and an AntiQuoter This is left biased see",
        "hierarchy": "Language Haskell AntiQuoter Base",
        "module": "Language.Haskell.AntiQuoter.Base",
        "name": "(\u003c\u003e\u003e) \u003c\u003e\u003e",
        "normalized": "AntiQuoterPass a b-\u003eAntiQuoter b-\u003eAntiQuoter b",
        "package": "antiquoter",
        "partial": "",
        "signature": "AntiQuoterPass e q-\u003eAntiQuoter q-\u003eAntiQuoter q"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-Base.html#v:AQRW",
      "description": {
        "fct-module": "Language.Haskell.AntiQuoter.Base",
        "fct-package": "antiquoter",
        "fct-signature": "AQRW",
        "fct-source": "src/Language-Haskell-AntiQuoter-Base.html#WrappedAQResult",
        "fct-type": "function",
        "title": "AQRW"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell AntiQuoter Base",
        "module": "Language.Haskell.AntiQuoter.Base",
        "name": "AQRW",
        "normalized": "",
        "package": "antiquoter",
        "partial": "AQRW",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-Base.html#v:extQ",
      "description": {
        "fct-descr": "\u003cp\u003eExtend a generic query by a type-specific case\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.Base",
        "fct-package": "antiquoter",
        "fct-signature": "(a -\u003e q) -\u003e (b -\u003e q) -\u003e a -\u003e q",
        "fct-type": "function",
        "title": "extQ"
      },
      "index": {
        "description": "Extend generic query by type-specific case",
        "hierarchy": "Language Haskell AntiQuoter Base",
        "module": "Language.Haskell.AntiQuoter.Base",
        "name": "extQ",
        "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003ea-\u003eb",
        "package": "antiquoter",
        "partial": "",
        "signature": "(a-\u003eq)-\u003e(b-\u003eq)-\u003ea-\u003eq"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-Base.html#v:fromPass",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eAntiQuoter\u003c/a\u003e\u003c/code\u003e from an single pass.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.Base",
        "fct-package": "antiquoter",
        "fct-signature": "AntiQuoterPass e q -\u003e AntiQuoter q",
        "fct-source": "src/Language-Haskell-AntiQuoter-Base.html#fromPass",
        "fct-type": "function",
        "title": "fromPass"
      },
      "index": {
        "description": "Create an AntiQuoter from an single pass",
        "hierarchy": "Language Haskell AntiQuoter Base",
        "module": "Language.Haskell.AntiQuoter.Base",
        "name": "fromPass",
        "normalized": "AntiQuoterPass a b-\u003eAntiQuoter b",
        "package": "antiquoter",
        "partial": "Pass",
        "signature": "AntiQuoterPass e q-\u003eAntiQuoter q"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-Base.html#v:mkQuasiQuoter",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an QuasiQuoter for expressions and patterns from a parser and two\n antiquoters. The quasiquoter from the example could also have been\n constructed by using \u003ccode\u003emkQuasiQuoter (return . parse) antiE antiP \u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.Base",
        "fct-package": "antiquoter",
        "fct-signature": "(String -\u003e Q a) -\u003e AntiQuoter Exp -\u003e AntiQuoter Pat -\u003e QuasiQuoter",
        "fct-source": "src/Language-Haskell-AntiQuoter-Base.html#mkQuasiQuoter",
        "fct-type": "function",
        "title": "mkQuasiQuoter"
      },
      "index": {
        "description": "Create an QuasiQuoter for expressions and patterns from parser and two antiquoters The quasiquoter from the example could also have been constructed by using mkQuasiQuoter return parse antiE antiP",
        "hierarchy": "Language Haskell AntiQuoter Base",
        "module": "Language.Haskell.AntiQuoter.Base",
        "name": "mkQuasiQuoter",
        "normalized": "(String-\u003eQ a)-\u003eAntiQuoter Exp-\u003eAntiQuoter Pat-\u003eQuasiQuoter",
        "package": "antiquoter",
        "partial": "Quasi Quoter",
        "signature": "(String-\u003eQ a)-\u003eAntiQuoter Exp-\u003eAntiQuoter Pat-\u003eQuasiQuoter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-Base.html#v:noAntiQuoter",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003eAnitQuoter\u003c/code\u003e that does no antiquoting by only return Nothing,\n\u003c/p\u003e\u003cpre\u003e noAntiQuoter = const Nothing\n\u003c/pre\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.Base",
        "fct-package": "antiquoter",
        "fct-signature": "AntiQuoter q",
        "fct-source": "src/Language-Haskell-AntiQuoter-Base.html#noAntiQuoter",
        "fct-type": "function",
        "title": "noAntiQuoter"
      },
      "index": {
        "description": "An AnitQuoter that does no antiquoting by only return Nothing noAntiQuoter const Nothing",
        "hierarchy": "Language Haskell AntiQuoter Base",
        "module": "Language.Haskell.AntiQuoter.Base",
        "name": "noAntiQuoter",
        "normalized": "",
        "package": "antiquoter",
        "partial": "Anti Quoter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-Base.html#v:unAQRW",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.Haskell.AntiQuoter.Base",
        "fct-package": "antiquoter",
        "fct-signature": "AQResult q",
        "fct-source": "src/Language-Haskell-AntiQuoter-Base.html#WrappedAQResult",
        "fct-type": "function",
        "title": "unAQRW"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell AntiQuoter Base",
        "module": "Language.Haskell.AntiQuoter.Base",
        "name": "unAQRW",
        "normalized": "",
        "package": "antiquoter",
        "partial": "AQRW",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-Combinators.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSeveral combinators for \u003ccode\u003eAntiQuoters\u003c/code\u003e, mainly \u003ccode\u003e\u003ca\u003eEP\u003c/a\u003e\u003c/code\u003e related.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.Combinators",
        "fct-package": "antiquoter",
        "fct-signature": "module",
        "fct-source": "src/Language-Haskell-AntiQuoter-Combinators.html",
        "fct-type": "module",
        "title": "Combinators"
      },
      "index": {
        "description": "Several combinators for AntiQuoters mainly EP related",
        "hierarchy": "Language Haskell AntiQuoter Combinators",
        "module": "Language.Haskell.AntiQuoter.Combinators",
        "name": "Combinators",
        "normalized": "",
        "package": "antiquoter",
        "partial": "Combinators",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-Combinators.html#v:conQ",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized \u003ccode\u003e\u003ca\u003econP\u003c/a\u003e\u003c/code\u003e or combination of \u003ccode\u003e\u003ca\u003econE\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eappE\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.Combinators",
        "fct-package": "antiquoter",
        "fct-signature": "Name -\u003e [Q q] -\u003e Q q",
        "fct-source": "src/Language-Haskell-AntiQuoter-Combinators.html#conQ",
        "fct-type": "function",
        "title": "conQ"
      },
      "index": {
        "description": "Generalized conP or combination of conE and appE",
        "hierarchy": "Language Haskell AntiQuoter Combinators",
        "module": "Language.Haskell.AntiQuoter.Combinators",
        "name": "conQ",
        "normalized": "Name-\u003e[Q a]-\u003eQ a",
        "package": "antiquoter",
        "partial": "",
        "signature": "Name-\u003e[Q q]-\u003eQ q"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-Combinators.html#v:ignore",
      "description": {
        "fct-descr": "\u003cp\u003eAn results that does not output anything.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.Combinators",
        "fct-package": "antiquoter",
        "fct-signature": "AQResult q",
        "fct-source": "src/Language-Haskell-AntiQuoter-Combinators.html#ignore",
        "fct-type": "function",
        "title": "ignore"
      },
      "index": {
        "description": "An results that does not output anything",
        "hierarchy": "Language Haskell AntiQuoter Combinators",
        "module": "Language.Haskell.AntiQuoter.Combinators",
        "name": "ignore",
        "normalized": "",
        "package": "antiquoter",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-Combinators.html#v:ignoreExp",
      "description": {
        "fct-descr": "\u003cp\u003eYielding only a result for patterns and ignoring in expressions.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.Combinators",
        "fct-package": "antiquoter",
        "fct-signature": "AQResult Pat -\u003e AQResult q",
        "fct-source": "src/Language-Haskell-AntiQuoter-Combinators.html#ignoreExp",
        "fct-type": "function",
        "title": "ignoreExp"
      },
      "index": {
        "description": "Yielding only result for patterns and ignoring in expressions",
        "hierarchy": "Language Haskell AntiQuoter Combinators",
        "module": "Language.Haskell.AntiQuoter.Combinators",
        "name": "ignoreExp",
        "normalized": "AQResult Pat-\u003eAQResult a",
        "package": "antiquoter",
        "partial": "Exp",
        "signature": "AQResult Pat-\u003eAQResult q"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-Combinators.html#v:ignorePat",
      "description": {
        "fct-descr": "\u003cp\u003eYielding only a result for expressions and ignoring in patterns.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.Combinators",
        "fct-package": "antiquoter",
        "fct-signature": "AQResult Exp -\u003e AQResult q",
        "fct-source": "src/Language-Haskell-AntiQuoter-Combinators.html#ignorePat",
        "fct-type": "function",
        "title": "ignorePat"
      },
      "index": {
        "description": "Yielding only result for expressions and ignoring in patterns",
        "hierarchy": "Language Haskell AntiQuoter Combinators",
        "module": "Language.Haskell.AntiQuoter.Combinators",
        "name": "ignorePat",
        "normalized": "AQResult Exp-\u003eAQResult a",
        "package": "antiquoter",
        "partial": "Pat",
        "signature": "AQResult Exp-\u003eAQResult q"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-Combinators.html#v:listQ",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized \u003ccode\u003e\u003ca\u003elistE\u003c/a\u003e\u003c/code\u003e/\u003ccode\u003e\u003ca\u003elistP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.Combinators",
        "fct-package": "antiquoter",
        "fct-signature": "[Q q] -\u003e Q q",
        "fct-source": "src/Language-Haskell-AntiQuoter-Combinators.html#listQ",
        "fct-type": "function",
        "title": "listQ"
      },
      "index": {
        "description": "Generalized listE listP",
        "hierarchy": "Language Haskell AntiQuoter Combinators",
        "module": "Language.Haskell.AntiQuoter.Combinators",
        "name": "listQ",
        "normalized": "[Q a]-\u003eQ a",
        "package": "antiquoter",
        "partial": "",
        "signature": "[Q q]-\u003eQ q"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-Combinators.html#v:litQ",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized \u003ccode\u003e\u003ca\u003elitE\u003c/a\u003e\u003c/code\u003e/\u003ccode\u003e\u003ca\u003elitP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.Combinators",
        "fct-package": "antiquoter",
        "fct-signature": "Lit -\u003e Q q",
        "fct-source": "src/Language-Haskell-AntiQuoter-Combinators.html#litQ",
        "fct-type": "function",
        "title": "litQ"
      },
      "index": {
        "description": "Generalized litE litP",
        "hierarchy": "Language Haskell AntiQuoter Combinators",
        "module": "Language.Haskell.AntiQuoter.Combinators",
        "name": "litQ",
        "normalized": "Lit-\u003eQ a",
        "package": "antiquoter",
        "partial": "",
        "signature": "Lit-\u003eQ q"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-Combinators.html#v:nonsenseE",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003enonsenseP\u003c/a\u003e\u003c/code\u003e but failing on expresions.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.Combinators",
        "fct-package": "antiquoter",
        "fct-signature": "String -\u003e AQResult Pat -\u003e AQResult q",
        "fct-source": "src/Language-Haskell-AntiQuoter-Combinators.html#nonsenseE",
        "fct-type": "function",
        "title": "nonsenseE"
      },
      "index": {
        "description": "See nonsenseP but failing on expresions",
        "hierarchy": "Language Haskell AntiQuoter Combinators",
        "module": "Language.Haskell.AntiQuoter.Combinators",
        "name": "nonsenseE",
        "normalized": "String-\u003eAQResult Pat-\u003eAQResult a",
        "package": "antiquoter",
        "partial": "",
        "signature": "String-\u003eAQResult Pat-\u003eAQResult q"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-Combinators.html#v:nonsenseP",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003eing result for patterns, useful for when a the pattern matched by\n the using functions should never happen when antiquoting patterns.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.Combinators",
        "fct-package": "antiquoter",
        "fct-signature": "String -\u003e AQResult Exp -\u003e AQResult q",
        "fct-source": "src/Language-Haskell-AntiQuoter-Combinators.html#nonsenseP",
        "fct-type": "function",
        "title": "nonsenseP"
      },
      "index": {
        "description": "fail ing result for patterns useful for when the pattern matched by the using functions should never happen when antiquoting patterns",
        "hierarchy": "Language Haskell AntiQuoter Combinators",
        "module": "Language.Haskell.AntiQuoter.Combinators",
        "name": "nonsenseP",
        "normalized": "String-\u003eAQResult Exp-\u003eAQResult a",
        "package": "antiquoter",
        "partial": "",
        "signature": "String-\u003eAQResult Exp-\u003eAQResult q"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-Combinators.html#v:onlyExp",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003eignorePat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYielding only a result for expressions and ignoring in patterns.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.Combinators",
        "fct-package": "antiquoter",
        "fct-signature": "AQResult Exp -\u003e AQResult q",
        "fct-source": "src/Language-Haskell-AntiQuoter-Combinators.html#onlyExp",
        "fct-type": "function",
        "title": "onlyExp"
      },
      "index": {
        "description": "Alias for ignorePat Yielding only result for expressions and ignoring in patterns",
        "hierarchy": "Language Haskell AntiQuoter Combinators",
        "module": "Language.Haskell.AntiQuoter.Combinators",
        "name": "onlyExp",
        "normalized": "AQResult Exp-\u003eAQResult a",
        "package": "antiquoter",
        "partial": "Exp",
        "signature": "AQResult Exp-\u003eAQResult q"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-Combinators.html#v:onlyPat",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003eignoreExp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYielding only a result for patterns and ignoring in expressions.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.Combinators",
        "fct-package": "antiquoter",
        "fct-signature": "AQResult Pat -\u003e AQResult q",
        "fct-source": "src/Language-Haskell-AntiQuoter-Combinators.html#onlyPat",
        "fct-type": "function",
        "title": "onlyPat"
      },
      "index": {
        "description": "Alias for ignoreExp Yielding only result for patterns and ignoring in expressions",
        "hierarchy": "Language Haskell AntiQuoter Combinators",
        "module": "Language.Haskell.AntiQuoter.Combinators",
        "name": "onlyPat",
        "normalized": "AQResult Pat-\u003eAQResult a",
        "package": "antiquoter",
        "partial": "Pat",
        "signature": "AQResult Pat-\u003eAQResult q"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-Combinators.html#v:splice",
      "description": {
        "fct-descr": "\u003cp\u003eUses/Binds a variable of the given name.\n\u003c/p\u003e\u003cpre\u003e  splice = varQ . mkName\n\u003c/pre\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.Combinators",
        "fct-package": "antiquoter",
        "fct-signature": "String -\u003e Q q",
        "fct-source": "src/Language-Haskell-AntiQuoter-Combinators.html#splice",
        "fct-type": "function",
        "title": "splice"
      },
      "index": {
        "description": "Uses Binds variable of the given name splice varQ mkName",
        "hierarchy": "Language Haskell AntiQuoter Combinators",
        "module": "Language.Haskell.AntiQuoter.Combinators",
        "name": "splice",
        "normalized": "String-\u003eQ a",
        "package": "antiquoter",
        "partial": "",
        "signature": "String-\u003eQ q"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-Combinators.html#v:tupQ",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized \u003ccode\u003e\u003ca\u003etupE\u003c/a\u003e\u003c/code\u003e/\u003ccode\u003e\u003ca\u003etupP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.Combinators",
        "fct-package": "antiquoter",
        "fct-signature": "[Q q] -\u003e Q q",
        "fct-source": "src/Language-Haskell-AntiQuoter-Combinators.html#tupQ",
        "fct-type": "function",
        "title": "tupQ"
      },
      "index": {
        "description": "Generalized tupE tupP",
        "hierarchy": "Language Haskell AntiQuoter Combinators",
        "module": "Language.Haskell.AntiQuoter.Combinators",
        "name": "tupQ",
        "normalized": "[Q a]-\u003eQ a",
        "package": "antiquoter",
        "partial": "",
        "signature": "[Q q]-\u003eQ q"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-Combinators.html#v:varQ",
      "description": {
        "fct-descr": "\u003cp\u003eGeneralized \u003ccode\u003e\u003ca\u003evarE\u003c/a\u003e\u003c/code\u003e/\u003ccode\u003e\u003ca\u003evarP\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.Combinators",
        "fct-package": "antiquoter",
        "fct-signature": "Name -\u003e Q q",
        "fct-source": "src/Language-Haskell-AntiQuoter-Combinators.html#varQ",
        "fct-type": "function",
        "title": "varQ"
      },
      "index": {
        "description": "Generalized varE varP",
        "hierarchy": "Language Haskell AntiQuoter Combinators",
        "module": "Language.Haskell.AntiQuoter.Combinators",
        "name": "varQ",
        "normalized": "Name-\u003eQ a",
        "package": "antiquoter",
        "partial": "",
        "signature": "Name-\u003eQ q"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-Combinators.html#v:wild",
      "description": {
        "fct-descr": "\u003cp\u003eUse a wildcard in pattern context and the given expression in expression\n contexts. Consider for example the folowing constructor\n\u003c/p\u003e\u003cpre\u003e EX SrcLoc OtherType\n\u003c/pre\u003e\u003cp\u003eWhen pattern matching the pattern should look like \u003ccode\u003eEX _ x\u003c/code\u003e, using a\n wildcard for the source location. On the other hand making an expression\n should use some result say resulting in \u003ccode\u003eEX someSrcLoc x\u003c/code\u003e. With the \u003ccode\u003e\u003ca\u003ewild\u003c/a\u003e\u003c/code\u003e\n function this general quoter can be written as\n\u003c/p\u003e\u003cpre\u003e con ''EX [wild someSrcLoc', splice \"x\"]\n\u003c/pre\u003e\u003cp\u003eAssuming that \u003ccode\u003esomeSrcLoc' :: ExpQ\u003c/code\u003e and that its result is of type \u003ccode\u003eSrcLoc\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.Combinators",
        "fct-package": "antiquoter",
        "fct-signature": "Q Exp -\u003e Q q",
        "fct-source": "src/Language-Haskell-AntiQuoter-Combinators.html#wild",
        "fct-type": "function",
        "title": "wild"
      },
      "index": {
        "description": "Use wildcard in pattern context and the given expression in expression contexts Consider for example the folowing constructor EX SrcLoc OtherType When pattern matching the pattern should look like EX using wildcard for the source location On the other hand making an expression should use some result say resulting in EX someSrcLoc With the wild function this general quoter can be written as con EX wild someSrcLoc splice Assuming that someSrcLoc ExpQ and that its result is of type SrcLoc",
        "hierarchy": "Language Haskell AntiQuoter Combinators",
        "module": "Language.Haskell.AntiQuoter.Combinators",
        "name": "wild",
        "normalized": "Q Exp-\u003eQ a",
        "package": "antiquoter",
        "partial": "",
        "signature": "Q Exp-\u003eQ q"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-ExpPat.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePat\u003c/a\u003e\u003c/code\u003e are for most part used in simmilar fashion. Most\nAntiQuoter(Pass)es have to be written for both datatypes and their\nimplementation is more or less identical in structure. To reduce copy-and-paste\nprogramming it would be best if it would only need one AntiQuoter(Pass) that\nworks on both \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis module defines the \u003ccode\u003e\u003ca\u003eEP\u003c/a\u003e\u003c/code\u003e typeclass expressing the similarity between \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e\nand \u003ccode\u003e\u003ca\u003ePat\u003c/a\u003e\u003c/code\u003e and some basic functions to use them with \u003ccode\u003e\u003ca\u003eAntiQuoterPass\u003c/a\u003e\u003c/code\u003ees. The\n\u003ca\u003eLanguage.Haskell.AntiQuoter.Combinators\u003c/a\u003e defines the combinator functions on\ntop of these functions, which are probably more suitable for users.\n\u003c/p\u003e\u003cp\u003eAs an example of the problem take the antiquoters in\n\u003ca\u003eLanguage.Haskell.AntiQuoter.Base\u003c/a\u003e where there are two AntiQuoterPasses for\neach source type, for Var they are\n\u003c/p\u003e\u003cpre\u003e\nantiVarE :: AntiQuoterPass Var Exp\nantiVarE (AV v ) = Just $ varE $ mkName v\nantiVarE _ = Nothing\nantiVarP :: AntiQuoterPass Var Pat\nantiVarP (AV v ) = Just $ varP $ mkName v\nantiVarP _ = Nothing\n\u003c/pre\u003e\u003cp\u003eThe problem is that the definition for the pattern antiquoter is almost a\nduplicate of the one for expressions. This similarity between antiquoting\nexpressions and patterns is captured in the \u003ccode\u003e\u003ca\u003eEP\u003c/a\u003e\u003c/code\u003e class which can be used to\nwrite antiquoters which an yield both expressions and patterns. Using the\ncombinators defined on top of this class (see\n\u003ca\u003eLanguage.Haskell.AntiQuoter.Combinators\u003c/a\u003e) the example can be rewritten as\n\u003c/p\u003e\u003cpre\u003e\nantiVar :: EP q =\u003e AntiQuoterPass Var q -- equivalent to antiVar :: EPAntiQuoterPass Var\nantiVar (AV v) = Just $ varQ $ mkName v\nantiVar _      = Nothing\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.ExpPat",
        "fct-package": "antiquoter",
        "fct-signature": "module",
        "fct-source": "src/Language-Haskell-AntiQuoter-ExpPat.html",
        "fct-type": "module",
        "title": "ExpPat"
      },
      "index": {
        "description": "Exp and Pat are for most part used in simmilar fashion Most AntiQuoter Pass es have to be written for both datatypes and their implementation is more or less identical in structure To reduce copy-and-paste programming it would be best if it would only need one AntiQuoter Pass that works on both Exp and Pat This module defines the EP typeclass expressing the similarity between Exp and Pat and some basic functions to use them with AntiQuoterPass es The Language.Haskell.AntiQuoter.Combinators defines the combinator functions on top of these functions which are probably more suitable for users As an example of the problem take the antiquoters in Language.Haskell.AntiQuoter.Base where there are two AntiQuoterPasses for each source type for Var they are antiVarE AntiQuoterPass Var Exp antiVarE AV Just varE mkName antiVarE Nothing antiVarP AntiQuoterPass Var Pat antiVarP AV Just varP mkName antiVarP Nothing The problem is that the definition for the pattern antiquoter is almost duplicate of the one for expressions This similarity between antiquoting expressions and patterns is captured in the EP class which can be used to write antiquoters which an yield both expressions and patterns Using the combinators defined on top of this class see Language.Haskell.AntiQuoter.Combinators the example can be rewritten as antiVar EP AntiQuoterPass Var equivalent to antiVar EPAntiQuoterPass Var antiVar AV Just varQ mkName antiVar Nothing",
        "hierarchy": "Language Haskell AntiQuoter ExpPat",
        "module": "Language.Haskell.AntiQuoter.ExpPat",
        "name": "ExpPat",
        "normalized": "",
        "package": "antiquoter",
        "partial": "Exp Pat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-ExpPat.html#t:EP",
      "description": {
        "fct-descr": "\u003cp\u003eTypeclass with the common constructors of \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePat\u003c/a\u003e\u003c/code\u003e, useful for\n building \u003ccode\u003e\u003ca\u003eEPAntiQuoter\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.ExpPat",
        "fct-package": "antiquoter",
        "fct-signature": "class",
        "fct-source": "src/Language-Haskell-AntiQuoter-ExpPat.html#EP",
        "fct-type": "class",
        "title": "EP"
      },
      "index": {
        "description": "Typeclass with the common constructors of Exp and Pat useful for building EPAntiQuoter",
        "hierarchy": "Language Haskell AntiQuoter ExpPat",
        "module": "Language.Haskell.AntiQuoter.ExpPat",
        "name": "EP",
        "normalized": "",
        "package": "antiquoter",
        "partial": "EP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-ExpPat.html#t:EPAntiQuoter",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eAntiQuoter\u003c/a\u003e\u003c/code\u003e that works for \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePat\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.ExpPat",
        "fct-package": "antiquoter",
        "fct-signature": "type",
        "fct-source": "src/Language-Haskell-AntiQuoter-ExpPat.html#EPAntiQuoter",
        "fct-type": "type",
        "title": "EPAntiQuoter"
      },
      "index": {
        "description": "An AntiQuoter that works for Exp and Pat results",
        "hierarchy": "Language Haskell AntiQuoter ExpPat",
        "module": "Language.Haskell.AntiQuoter.ExpPat",
        "name": "EPAntiQuoter",
        "normalized": "",
        "package": "antiquoter",
        "partial": "EPAnti Quoter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-ExpPat.html#t:EPAntiQuoterPass",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eAntiQuoterPass\u003c/a\u003e\u003c/code\u003e that works for \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePat\u003c/a\u003e\u003c/code\u003e results.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.ExpPat",
        "fct-package": "antiquoter",
        "fct-signature": "type",
        "fct-source": "src/Language-Haskell-AntiQuoter-ExpPat.html#EPAntiQuoterPass",
        "fct-type": "type",
        "title": "EPAntiQuoterPass"
      },
      "index": {
        "description": "An AntiQuoterPass that works for Exp and Pat results",
        "hierarchy": "Language Haskell AntiQuoter ExpPat",
        "module": "Language.Haskell.AntiQuoter.ExpPat",
        "name": "EPAntiQuoterPass",
        "normalized": "",
        "package": "antiquoter",
        "partial": "EPAnti Quoter Pass",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-ExpPat.html#t:EPV",
      "description": {
        "fct-descr": "\u003cp\u003eContainer for a \u003ccode\u003ef\u003c/code\u003e of both an \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e and a \u003ccode\u003e\u003ca\u003ePat\u003c/a\u003e\u003c/code\u003e. Used internally when the\n result for \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePat\u003c/a\u003e\u003c/code\u003e differ.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.ExpPat",
        "fct-package": "antiquoter",
        "fct-signature": "data",
        "fct-source": "src/Language-Haskell-AntiQuoter-ExpPat.html#EPV",
        "fct-type": "data",
        "title": "EPV"
      },
      "index": {
        "description": "Container for of both an Exp and Pat Used internally when the result for Exp and Pat differ",
        "hierarchy": "Language Haskell AntiQuoter ExpPat",
        "module": "Language.Haskell.AntiQuoter.ExpPat",
        "name": "EPV",
        "normalized": "",
        "package": "antiquoter",
        "partial": "EPV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-ExpPat.html#v:EPV",
      "description": {
        "fct-module": "Language.Haskell.AntiQuoter.ExpPat",
        "fct-package": "antiquoter",
        "fct-signature": "EPV",
        "fct-source": "src/Language-Haskell-AntiQuoter-ExpPat.html#EPV",
        "fct-type": "function",
        "title": "EPV"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell AntiQuoter ExpPat",
        "module": "Language.Haskell.AntiQuoter.ExpPat",
        "name": "EPV",
        "normalized": "",
        "package": "antiquoter",
        "partial": "EPV",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-ExpPat.html#v:con",
      "description": {
        "fct-descr": "\u003cp\u003eConstructor with arguments\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.ExpPat",
        "fct-package": "antiquoter",
        "fct-signature": "Name -\u003e [q] -\u003e q",
        "fct-source": "src/Language-Haskell-AntiQuoter-ExpPat.html#con",
        "fct-type": "method",
        "title": "con"
      },
      "index": {
        "description": "Constructor with arguments",
        "hierarchy": "Language Haskell AntiQuoter ExpPat",
        "module": "Language.Haskell.AntiQuoter.ExpPat",
        "name": "con",
        "normalized": "Name-\u003e[a]-\u003ea",
        "package": "antiquoter",
        "partial": "",
        "signature": "Name-\u003e[q]-\u003eq"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-ExpPat.html#v:eep",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.Haskell.AntiQuoter.ExpPat",
        "fct-package": "antiquoter",
        "fct-signature": "f Exp",
        "fct-source": "src/Language-Haskell-AntiQuoter-ExpPat.html#EPV",
        "fct-type": "function",
        "title": "eep"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell AntiQuoter ExpPat",
        "module": "Language.Haskell.AntiQuoter.ExpPat",
        "name": "eep",
        "normalized": "",
        "package": "antiquoter",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-ExpPat.html#v:epPass",
      "description": {
        "fct-descr": "\u003cp\u003eCombine two \u003ccode\u003e\u003ca\u003eAntiQuoterPass\u003c/a\u003e\u003c/code\u003ees, one for expression context and another for\n pattern context, into a single pass which can be used in both contexts.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.ExpPat",
        "fct-package": "antiquoter",
        "fct-signature": "AntiQuoterPass e Exp -\u003e AntiQuoterPass e Pat -\u003e EPAntiQuoterPass e",
        "fct-source": "src/Language-Haskell-AntiQuoter-ExpPat.html#epPass",
        "fct-type": "function",
        "title": "epPass"
      },
      "index": {
        "description": "Combine two AntiQuoterPass es one for expression context and another for pattern context into single pass which can be used in both contexts",
        "hierarchy": "Language Haskell AntiQuoter ExpPat",
        "module": "Language.Haskell.AntiQuoter.ExpPat",
        "name": "epPass",
        "normalized": "AntiQuoterPass a Exp-\u003eAntiQuoterPass a Pat-\u003eEPAntiQuoterPass a",
        "package": "antiquoter",
        "partial": "Pass",
        "signature": "AntiQuoterPass e Exp-\u003eAntiQuoterPass e Pat-\u003eEPAntiQuoterPass e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-ExpPat.html#v:epPass-39-",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eepPass\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.ExpPat",
        "fct-package": "antiquoter",
        "fct-signature": "(e -\u003e Maybe (Q Exp, Q Pat)) -\u003e EPAntiQuoterPass e",
        "fct-source": "src/Language-Haskell-AntiQuoter-ExpPat.html#epPass%27",
        "fct-type": "function",
        "title": "epPass'"
      },
      "index": {
        "description": "See epPass",
        "hierarchy": "Language Haskell AntiQuoter ExpPat",
        "module": "Language.Haskell.AntiQuoter.ExpPat",
        "name": "epPass'",
        "normalized": "(a-\u003eMaybe(Q Exp,Q Pat))-\u003eEPAntiQuoterPass a",
        "package": "antiquoter",
        "partial": "Pass'",
        "signature": "(e-\u003eMaybe(Q Exp,Q Pat))-\u003eEPAntiQuoterPass e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-ExpPat.html#v:epPass-39--39-",
      "description": {
        "fct-descr": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eepPass\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.ExpPat",
        "fct-package": "antiquoter",
        "fct-signature": "AntiQuoterPass e (Exp, Pat) -\u003e EPAntiQuoterPass e",
        "fct-source": "src/Language-Haskell-AntiQuoter-ExpPat.html#epPass%27%27",
        "fct-type": "function",
        "title": "epPass''"
      },
      "index": {
        "description": "See epPass",
        "hierarchy": "Language Haskell AntiQuoter ExpPat",
        "module": "Language.Haskell.AntiQuoter.ExpPat",
        "name": "epPass''",
        "normalized": "AntiQuoterPass a(Exp,Pat)-\u003eEPAntiQuoterPass a",
        "package": "antiquoter",
        "partial": "Pass''",
        "signature": "AntiQuoterPass e(Exp,Pat)-\u003eEPAntiQuoterPass e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-ExpPat.html#v:epPure",
      "description": {
        "fct-descr": "\u003cp\u003eConstructs an \u003ccode\u003e\u003ca\u003eEP\u003c/a\u003e\u003c/code\u003e value by choosing from an \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003ePat\u003c/a\u003e\u003c/code\u003e as\n appropriate in the context.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.ExpPat",
        "fct-package": "antiquoter",
        "fct-signature": "Exp -\u003e Pat -\u003e q",
        "fct-source": "src/Language-Haskell-AntiQuoter-ExpPat.html#epPure",
        "fct-type": "function",
        "title": "epPure"
      },
      "index": {
        "description": "Constructs an EP value by choosing from an Exp of Pat as appropriate in the context",
        "hierarchy": "Language Haskell AntiQuoter ExpPat",
        "module": "Language.Haskell.AntiQuoter.ExpPat",
        "name": "epPure",
        "normalized": "Exp-\u003ePat-\u003ea",
        "package": "antiquoter",
        "partial": "Pure",
        "signature": "Exp-\u003ePat-\u003eq"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-ExpPat.html#v:epResult",
      "description": {
        "fct-descr": "\u003cp\u003eMake a context dependent result for expression and pattern contexts.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.ExpPat",
        "fct-package": "antiquoter",
        "fct-signature": "AQResult Exp -\u003e AQResult Pat -\u003e AQResult q",
        "fct-source": "src/Language-Haskell-AntiQuoter-ExpPat.html#epResult",
        "fct-type": "function",
        "title": "epResult"
      },
      "index": {
        "description": "Make context dependent result for expression and pattern contexts",
        "hierarchy": "Language Haskell AntiQuoter ExpPat",
        "module": "Language.Haskell.AntiQuoter.ExpPat",
        "name": "epResult",
        "normalized": "AQResult Exp-\u003eAQResult Pat-\u003eAQResult a",
        "package": "antiquoter",
        "partial": "Result",
        "signature": "AQResult Exp-\u003eAQResult Pat-\u003eAQResult q"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-ExpPat.html#v:epValue",
      "description": {
        "fct-descr": "\u003cp\u003eMake an context dependent value for expression and pattern contexts.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.ExpPat",
        "fct-package": "antiquoter",
        "fct-signature": "Q Exp -\u003e Q Pat -\u003e Q q",
        "fct-source": "src/Language-Haskell-AntiQuoter-ExpPat.html#epValue",
        "fct-type": "function",
        "title": "epValue"
      },
      "index": {
        "description": "Make an context dependent value for expression and pattern contexts",
        "hierarchy": "Language Haskell AntiQuoter ExpPat",
        "module": "Language.Haskell.AntiQuoter.ExpPat",
        "name": "epValue",
        "normalized": "Q Exp-\u003eQ Pat-\u003eQ a",
        "package": "antiquoter",
        "partial": "Value",
        "signature": "Q Exp-\u003eQ Pat-\u003eQ q"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-ExpPat.html#v:fromEPV",
      "description": {
        "fct-descr": "\u003cp\u003eInternal unwrapper when the implementation for \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ePat\u003c/a\u003e\u003c/code\u003e should\n differ.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.ExpPat",
        "fct-package": "antiquoter",
        "fct-signature": "EPV f -\u003e f q",
        "fct-source": "src/Language-Haskell-AntiQuoter-ExpPat.html#fromEPV",
        "fct-type": "method",
        "title": "fromEPV"
      },
      "index": {
        "description": "Internal unwrapper when the implementation for Exp and Pat should differ",
        "hierarchy": "Language Haskell AntiQuoter ExpPat",
        "module": "Language.Haskell.AntiQuoter.ExpPat",
        "name": "fromEPV",
        "normalized": "EPV a-\u003ea b",
        "package": "antiquoter",
        "partial": "EPV",
        "signature": "EPV f-\u003ef q"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-ExpPat.html#v:list",
      "description": {
        "fct-descr": "\u003cp\u003eList\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.ExpPat",
        "fct-package": "antiquoter",
        "fct-signature": "[q] -\u003e q",
        "fct-source": "src/Language-Haskell-AntiQuoter-ExpPat.html#list",
        "fct-type": "method",
        "title": "list"
      },
      "index": {
        "description": "List",
        "hierarchy": "Language Haskell AntiQuoter ExpPat",
        "module": "Language.Haskell.AntiQuoter.ExpPat",
        "name": "list",
        "normalized": "[a]-\u003ea",
        "package": "antiquoter",
        "partial": "",
        "signature": "[q]-\u003eq"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-ExpPat.html#v:lit",
      "description": {
        "fct-descr": "\u003cp\u003eLiteral value\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.ExpPat",
        "fct-package": "antiquoter",
        "fct-signature": "Lit -\u003e q",
        "fct-source": "src/Language-Haskell-AntiQuoter-ExpPat.html#lit",
        "fct-type": "method",
        "title": "lit"
      },
      "index": {
        "description": "Literal value",
        "hierarchy": "Language Haskell AntiQuoter ExpPat",
        "module": "Language.Haskell.AntiQuoter.ExpPat",
        "name": "lit",
        "normalized": "Lit-\u003ea",
        "package": "antiquoter",
        "partial": "",
        "signature": "Lit-\u003eq"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-ExpPat.html#v:mkEPQuasiQuoter",
      "description": {
        "fct-descr": "\u003cp\u003eAs \u003ccode\u003e\u003ca\u003emkQuasiQuoter\u003c/a\u003e\u003c/code\u003e but uses an generalized \u003ccode\u003e\u003ca\u003eAntiQuoter\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.ExpPat",
        "fct-package": "antiquoter",
        "fct-signature": "(String -\u003e Q a) -\u003e EPAntiQuoter -\u003e QuasiQuoter",
        "fct-source": "src/Language-Haskell-AntiQuoter-ExpPat.html#mkEPQuasiQuoter",
        "fct-type": "function",
        "title": "mkEPQuasiQuoter"
      },
      "index": {
        "description": "As mkQuasiQuoter but uses an generalized AntiQuoter",
        "hierarchy": "Language Haskell AntiQuoter ExpPat",
        "module": "Language.Haskell.AntiQuoter.ExpPat",
        "name": "mkEPQuasiQuoter",
        "normalized": "(String-\u003eQ a)-\u003eEPAntiQuoter-\u003eQuasiQuoter",
        "package": "antiquoter",
        "partial": "EPQuasi Quoter",
        "signature": "(String-\u003eQ a)-\u003eEPAntiQuoter-\u003eQuasiQuoter"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-ExpPat.html#v:pep",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Language.Haskell.AntiQuoter.ExpPat",
        "fct-package": "antiquoter",
        "fct-signature": "f Pat",
        "fct-source": "src/Language-Haskell-AntiQuoter-ExpPat.html#EPV",
        "fct-type": "function",
        "title": "pep"
      },
      "index": {
        "description": "",
        "hierarchy": "Language Haskell AntiQuoter ExpPat",
        "module": "Language.Haskell.AntiQuoter.ExpPat",
        "name": "pep",
        "normalized": "",
        "package": "antiquoter",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-ExpPat.html#v:tup",
      "description": {
        "fct-descr": "\u003cp\u003eTuple\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.ExpPat",
        "fct-package": "antiquoter",
        "fct-signature": "[q] -\u003e q",
        "fct-source": "src/Language-Haskell-AntiQuoter-ExpPat.html#tup",
        "fct-type": "method",
        "title": "tup"
      },
      "index": {
        "description": "Tuple",
        "hierarchy": "Language Haskell AntiQuoter ExpPat",
        "module": "Language.Haskell.AntiQuoter.ExpPat",
        "name": "tup",
        "normalized": "[a]-\u003ea",
        "package": "antiquoter",
        "partial": "",
        "signature": "[q]-\u003eq"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter-ExpPat.html#v:var",
      "description": {
        "fct-descr": "\u003cp\u003eVariable\n\u003c/p\u003e",
        "fct-module": "Language.Haskell.AntiQuoter.ExpPat",
        "fct-package": "antiquoter",
        "fct-signature": "Name -\u003e q",
        "fct-source": "src/Language-Haskell-AntiQuoter-ExpPat.html#var",
        "fct-type": "method",
        "title": "var"
      },
      "index": {
        "description": "Variable",
        "hierarchy": "Language Haskell AntiQuoter ExpPat",
        "module": "Language.Haskell.AntiQuoter.ExpPat",
        "name": "var",
        "normalized": "Name-\u003ea",
        "package": "antiquoter",
        "partial": "",
        "signature": "Name-\u003eq"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/antiquoter/docs/Language-Haskell-AntiQuoter.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple reexport of all modules hiding the exports marked as internal.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Language.Haskell.AntiQuoter",
        "fct-package": "antiquoter",
        "fct-signature": "module",
        "fct-source": "src/Language-Haskell-AntiQuoter.html",
        "fct-type": "module",
        "title": "AntiQuoter"
      },
      "index": {
        "description": "Simple reexport of all modules hiding the exports marked as internal",
        "hierarchy": "Language Haskell AntiQuoter",
        "module": "Language.Haskell.AntiQuoter",
        "name": "AntiQuoter",
        "normalized": "",
        "package": "antiquoter",
        "partial": "Anti Quoter",
        "signature": ""
      }
    }
  }
]