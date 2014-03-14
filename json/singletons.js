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
        "word": "singletons"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines functions and datatypes relating to the singleton for \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e,\n including a singletons version of all the definitions in \u003ccode\u003eData.Bool\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBecause many of these definitions are produced by Template Haskell,\n it is not possible to create proper Haddock documentation. Please look\n up the corresponding operation in \u003ccode\u003eData.Bool\u003c/code\u003e. Also, please excuse\n the apparent repeated variable names. This is due to an interaction\n between Template Haskell and Haddock.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Singletons.Bool",
          "name": "Bool",
          "package": "singletons",
          "source": "src/Data-Singletons-Bool.html",
          "type": "module"
        },
        "index": {
          "description": "Defines functions and datatypes relating to the singleton for Bool including singletons version of all the definitions in Data.Bool Because many of these definitions are produced by Template Haskell it is not possible to create proper Haddock documentation Please look up the corresponding operation in Data.Bool Also please excuse the apparent repeated variable names This is due to an interaction between Template Haskell and Haddock",
          "hierarchy": "Data Singletons Bool",
          "module": "Data.Singletons.Bool",
          "name": "Bool",
          "package": "singletons",
          "partial": "Bool",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Bool.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Bool",
          "name": ":||",
          "package": "singletons",
          "source": "src/Data-Singletons-Bool.html#%3A%7C%7C",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Singletons Bool",
          "module": "Data.Singletons.Bool",
          "name": ":||",
          "package": "singletons",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Bool.html#t::-124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Bool",
          "name": ":&&",
          "package": "singletons",
          "source": "src/Data-Singletons-Bool.html#%3A%26%26",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Singletons Bool",
          "module": "Data.Singletons.Bool",
          "name": ":&&",
          "package": "singletons",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Bool.html#t::-38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Bool",
          "name": "Bool_",
          "package": "singletons",
          "signature": "Bool_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Bool",
          "module": "Data.Singletons.Bool",
          "name": "Bool_",
          "package": "singletons",
          "partial": "Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Bool.html#t:Bool_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-level \u003ca\u003eIf\u003c/a\u003e. \u003ccode\u003eIf True a b\u003c/code\u003e ==\u003e \u003ccode\u003ea\u003c/code\u003e; \u003ccode\u003eIf False a b\u003c/code\u003e ==\u003e \u003ccode\u003eb\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Data.Singletons.Bool\",\"Data.Singletons.Prelude\",\"Data.Singletons.TH\"]",
          "name": "If",
          "package": "singletons",
          "signature": "If",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Bool.html#t:If\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#t:If\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#t:If\"]"
        },
        "index": {
          "description": "Type-level If If True If False",
          "hierarchy": "Data Singletons Bool",
          "module": "Data.Singletons.Bool",
          "name": "If",
          "package": "singletons",
          "partial": "If",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Bool.html#t:If"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType-level \u003ca\u003enot\u003c/a\u003e\n\u003c/p\u003e",
          "module": "[\"Data.Singletons.Bool\",\"Data.Singletons.Prelude\"]",
          "name": "Not",
          "package": "singletons",
          "signature": "Not",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Bool.html#t:Not\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#t:Not\"]"
        },
        "index": {
          "description": "Type-level not",
          "hierarchy": "Data Singletons Bool",
          "module": "Data.Singletons.Bool",
          "name": "Not",
          "package": "singletons",
          "partial": "Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Bool.html#t:Not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Bool",
          "name": "Otherwise",
          "package": "singletons",
          "source": "src/Data-Singletons-Bool.html#Otherwise",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Singletons Bool",
          "module": "Data.Singletons.Bool",
          "name": "Otherwise",
          "package": "singletons",
          "partial": "Otherwise",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Bool.html#t:Otherwise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Bool",
          "name": "SBool",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#SBool",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Singletons Bool",
          "module": "Data.Singletons.Bool",
          "name": "SBool",
          "package": "singletons",
          "partial": "SBool",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Bool.html#t:SBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe singleton kind-indexed data family.\n\u003c/p\u003e",
          "module": "[\"Data.Singletons.Bool\",\"Data.Singletons.Either\",\"Data.Singletons.List\",\"Data.Singletons.Maybe\",\"Data.Singletons.Prelude\",\"Data.Singletons.TH\",\"Data.Singletons.Tuple\",\"Data.Singletons.TypeRepStar\",\"Data.Singletons\"]",
          "name": "Sing",
          "package": "singletons",
          "signature": "Sing",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Bool.html#t:Sing\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Either.html#t:Sing\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-List.html#t:Sing\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Maybe.html#t:Sing\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#t:Sing\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#t:Sing\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Tuple.html#t:Sing\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TypeRepStar.html#t:Sing\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons.html#t:Sing\"]"
        },
        "index": {
          "description": "The singleton kind-indexed data family",
          "hierarchy": "Data Singletons Bool",
          "module": "Data.Singletons.Bool",
          "name": "Sing",
          "package": "singletons",
          "partial": "Sing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Bool.html#t:Sing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Singletons.Bool\",\"Data.Singletons.Prelude\"]",
          "name": "(%:||)",
          "package": "singletons",
          "signature": "SBool a -\u003e SBool b -\u003e SBool (a :|| b)",
          "source": "src/Data-Singletons-Bool.html#%25%3A%7C%7C",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Bool.html#v:-37-:-124--124-\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#v:-37-:-124--124-\"]"
        },
        "index": {
          "hierarchy": "Data Singletons Bool",
          "module": "Data.Singletons.Bool",
          "name": "(%:||) %:||",
          "normalized": "SBool a-\u003eSBool b-\u003eSBool(a b)",
          "package": "singletons",
          "signature": "SBool a-\u003eSBool b-\u003eSBool(a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Bool.html#v:-37-:-124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Singletons.Bool\",\"Data.Singletons.Prelude\"]",
          "name": "(%:&&)",
          "package": "singletons",
          "signature": "SBool a -\u003e SBool b -\u003e SBool (a :&& b)",
          "source": "src/Data-Singletons-Bool.html#%25%3A%26%26",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Bool.html#v:-37-:-38--38-\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#v:-37-:-38--38-\"]"
        },
        "index": {
          "hierarchy": "Data Singletons Bool",
          "module": "Data.Singletons.Bool",
          "name": "(%:&&) %:&&",
          "normalized": "SBool a-\u003eSBool b-\u003eSBool(a b)",
          "package": "singletons",
          "signature": "SBool a-\u003eSBool b-\u003eSBool(a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Bool.html#v:-37-:-38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Bool",
          "name": "sBool_",
          "package": "singletons",
          "signature": "forall t t t.  Sing t -\u003e Sing t -\u003e Sing t -\u003e Sing (Bool_ t t t)",
          "source": "src/Data-Singletons-Bool.html#sBool_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Bool",
          "module": "Data.Singletons.Bool",
          "name": "sBool_",
          "normalized": "a b b c Sing b-\u003eSing b-\u003eSing b-\u003eSing(Bool_ b b b)",
          "package": "singletons",
          "partial": "Bool",
          "signature": "forall t t t. Sing t-\u003eSing t-\u003eSing t-\u003eSing(Bool_ t t t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Bool.html#v:sBool_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditional over singletons\n\u003c/p\u003e",
          "module": "[\"Data.Singletons.Bool\",\"Data.Singletons.Prelude\",\"Data.Singletons.TH\"]",
          "name": "sIf",
          "package": "singletons",
          "signature": "Sing a -\u003e Sing b -\u003e Sing c -\u003e Sing (If a b c)",
          "source": "src/Data-Singletons-Bool.html#sIf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Bool.html#v:sIf\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#v:sIf\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#v:sIf\"]"
        },
        "index": {
          "description": "Conditional over singletons",
          "hierarchy": "Data Singletons Bool",
          "module": "Data.Singletons.Bool",
          "name": "sIf",
          "normalized": "Sing a-\u003eSing b-\u003eSing c-\u003eSing(If a b c)",
          "package": "singletons",
          "partial": "If",
          "signature": "Sing a-\u003eSing b-\u003eSing c-\u003eSing(If a b c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Bool.html#v:sIf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Singletons.Bool\",\"Data.Singletons.Prelude\"]",
          "name": "sNot",
          "package": "singletons",
          "signature": "SBool a -\u003e SBool (Not a)",
          "source": "src/Data-Singletons-Bool.html#sNot",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Bool.html#v:sNot\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#v:sNot\"]"
        },
        "index": {
          "hierarchy": "Data Singletons Bool",
          "module": "Data.Singletons.Bool",
          "name": "sNot",
          "normalized": "SBool a-\u003eSBool(Not a)",
          "package": "singletons",
          "partial": "Not",
          "signature": "SBool a-\u003eSBool(Not a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Bool.html#v:sNot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Bool",
          "name": "sOtherwise",
          "package": "singletons",
          "signature": "Sing Otherwise",
          "source": "src/Data-Singletons-Bool.html#sOtherwise",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Bool",
          "module": "Data.Singletons.Bool",
          "name": "sOtherwise",
          "package": "singletons",
          "partial": "Otherwise",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Bool.html#v:sOtherwise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis file implements \u003ccode\u003e\u003ca\u003esingletonStar\u003c/a\u003e\u003c/code\u003e, which generates a datatype \u003ccode\u003eRep\u003c/code\u003e and associated\n singleton from a list of types. The promoted version of \u003ccode\u003eRep\u003c/code\u003e is kind \u003ccode\u003e*\u003c/code\u003e and the\n Haskell types themselves. This is still very experimental, so expect unusual\n results!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Singletons.CustomStar",
          "name": "CustomStar",
          "package": "singletons",
          "source": "src/Data-Singletons-CustomStar.html",
          "type": "module"
        },
        "index": {
          "description": "This file implements singletonStar which generates datatype Rep and associated singleton from list of types The promoted version of Rep is kind and the Haskell types themselves This is still very experimental so expect unusual results",
          "hierarchy": "Data Singletons CustomStar",
          "module": "Data.Singletons.CustomStar",
          "name": "CustomStar",
          "package": "singletons",
          "partial": "Custom Star",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-CustomStar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a representation and singleton for the collection of types given.\n\u003c/p\u003e\u003cp\u003eA datatype \u003ccode\u003eRep\u003c/code\u003e is created, with one constructor per type in the declared\n universe. When this type is promoted by the singletons library, the\n constructors become full types in \u003ccode\u003e*\u003c/code\u003e, not just promoted data constructors.\n\u003c/p\u003e\u003cp\u003eFor example,\n\u003c/p\u003e\u003cpre\u003e $(singletonStar [''Nat, ''Bool, ''Maybe])\n\u003c/pre\u003e\u003cp\u003egenerates the following:\n\u003c/p\u003e\u003cpre\u003e data Rep = Nat | Bool | Maybe Rep deriving (Eq, Show, Read)\n\u003c/pre\u003e\u003cp\u003eand its singleton. However, because \u003ccode\u003eRep\u003c/code\u003e is promoted to \u003ccode\u003e*\u003c/code\u003e, the singleton\n is perhaps slightly unexpected:\n\u003c/p\u003e\u003cpre\u003e data instance Sing (a :: *) where\n   SNat :: Sing Nat\n   SBool :: Sing Bool\n   SMaybe :: SingRep a =\u003e Sing a -\u003e Sing (Maybe a)\n\u003c/pre\u003e\u003cp\u003eThe unexpected part is that \u003ccode\u003eNat\u003c/code\u003e, \u003ccode\u003eBool\u003c/code\u003e, and \u003ccode\u003eMaybe\u003c/code\u003e above are the real \u003ccode\u003eNat\u003c/code\u003e,\n \u003ccode\u003eBool\u003c/code\u003e, and \u003ccode\u003eMaybe\u003c/code\u003e, not just promoted data constructors.\n\u003c/p\u003e\u003cp\u003ePlease note that this function is \u003cem\u003every\u003c/em\u003e experimental. Use at your own risk.\n\u003c/p\u003e",
          "module": "Data.Singletons.CustomStar",
          "name": "singletonStar",
          "package": "singletons",
          "signature": "[Name]-\u003e q [Dec]",
          "type": "function"
        },
        "index": {
          "description": "Produce representation and singleton for the collection of types given datatype Rep is created with one constructor per type in the declared universe When this type is promoted by the singletons library the constructors become full types in not just promoted data constructors For example singletonStar Nat Bool Maybe generates the following data Rep Nat Bool Maybe Rep deriving Eq Show Read and its singleton However because Rep is promoted to the singleton is perhaps slightly unexpected data instance Sing where SNat Sing Nat SBool Sing Bool SMaybe SingRep Sing Sing Maybe The unexpected part is that Nat Bool and Maybe above are the real Nat Bool and Maybe not just promoted data constructors Please note that this function is very experimental Use at your own risk",
          "hierarchy": "Data Singletons CustomStar",
          "module": "Data.Singletons.CustomStar",
          "name": "singletonStar",
          "normalized": "[Name]-\u003ea[Dec]",
          "package": "singletons",
          "partial": "Star",
          "signature": "[Name]-\u003eq[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-CustomStar.html#v:singletonStar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines the class \u003ccode\u003e\u003ca\u003eSDecide\u003c/a\u003e\u003c/code\u003e, allowing for decidable equality over singletons.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Singletons.Decide",
          "name": "Decide",
          "package": "singletons",
          "source": "src/Data-Singletons-Decide.html",
          "type": "module"
        },
        "index": {
          "description": "Defines the class SDecide allowing for decidable equality over singletons",
          "hierarchy": "Data Singletons Decide",
          "module": "Data.Singletons.Decide",
          "name": "Decide",
          "package": "singletons",
          "partial": "Decide",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Decide.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePropositional equality. If \u003ccode\u003ea :~: b\u003c/code\u003e is inhabited by some terminating\n value, then the type \u003ccode\u003ea\u003c/code\u003e is the same as the type \u003ccode\u003eb\u003c/code\u003e. To use this equality\n in practice, pattern-match on the \u003ccode\u003ea :~: b\u003c/code\u003e to get out the \u003ccode\u003eRefl\u003c/code\u003e constructor;\n in the body of the pattern-match, the compiler knows that \u003ccode\u003ea ~ b\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 4.7.0.0\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Singletons.Decide",
          "name": ":~:",
          "package": "singletons",
          "type": "data"
        },
        "index": {
          "description": "Propositional equality If is inhabited by some terminating value then the type is the same as the type To use this equality in practice pattern-match on the to get out the Refl constructor in the body of the pattern-match the compiler knows that Since",
          "hierarchy": "Data Singletons Decide",
          "module": "Data.Singletons.Decide",
          "name": ":~:",
          "package": "singletons",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Decide.html#t::-126-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDecision\u003c/a\u003e\u003c/code\u003e about a type \u003ccode\u003ea\u003c/code\u003e is either a proof of existence or a proof that \u003ccode\u003ea\u003c/code\u003e\n cannot exist.\n\u003c/p\u003e",
          "module": "Data.Singletons.Decide",
          "name": "Decision",
          "package": "singletons",
          "source": "src/Data-Singletons-Types.html#Decision",
          "type": "data"
        },
        "index": {
          "description": "Decision about type is either proof of existence or proof that cannot exist",
          "hierarchy": "Data Singletons Decide",
          "module": "Data.Singletons.Decide",
          "name": "Decision",
          "package": "singletons",
          "partial": "Decision",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Decide.html#t:Decision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBecause we can never create a value of type \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e, a function that type-checks\n at \u003ccode\u003ea -\u003e Void\u003c/code\u003e shows that objects of type \u003ccode\u003ea\u003c/code\u003e can never exist. Thus, we say that\n \u003ccode\u003ea\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eRefuted\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Singletons.Decide",
          "name": "Refuted",
          "package": "singletons",
          "source": "src/Data-Singletons-Types.html#Refuted",
          "type": "type"
        },
        "index": {
          "description": "Because we can never create value of type Void function that type-checks at Void shows that objects of type can never exist Thus we say that is Refuted",
          "hierarchy": "Data Singletons Decide",
          "module": "Data.Singletons.Decide",
          "name": "Refuted",
          "package": "singletons",
          "partial": "Refuted",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Decide.html#t:Refuted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMembers of the \u003ccode\u003e\u003ca\u003eSDecide\u003c/a\u003e\u003c/code\u003e \u003ca\u003ekind\u003c/a\u003e class support decidable equality. Instances\n of this class are generated alongside singleton definitions for datatypes that\n derive an \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Data.Singletons.Decide",
          "name": "SDecide",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#SDecide",
          "type": "class"
        },
        "index": {
          "description": "Members of the SDecide kind class support decidable equality Instances of this class are generated alongside singleton definitions for datatypes that derive an Eq instance",
          "hierarchy": "Data Singletons Decide",
          "module": "Data.Singletons.Decide",
          "name": "SDecide",
          "package": "singletons",
          "partial": "SDecide",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Decide.html#t:SDecide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA logically uninhabited data type.\n\u003c/p\u003e",
          "module": "Data.Singletons.Decide",
          "name": "Void",
          "package": "singletons",
          "source": "src/Data-Singletons-Void.html#Void",
          "type": "data"
        },
        "index": {
          "description": "logically uninhabited data type",
          "hierarchy": "Data Singletons Decide",
          "module": "Data.Singletons.Decide",
          "name": "Void",
          "package": "singletons",
          "partial": "Void",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Decide.html#t:Void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a proof or disproof of equality, given two singletons.\n\u003c/p\u003e",
          "module": "Data.Singletons.Decide",
          "name": "(%~)",
          "package": "singletons",
          "signature": "forall a b.  Sing a -\u003e Sing b -\u003e Decision (a :~: b)",
          "source": "src/Data-Singletons-Core.html#%25~",
          "type": "method"
        },
        "index": {
          "description": "Compute proof or disproof of equality given two singletons",
          "hierarchy": "Data Singletons Decide",
          "module": "Data.Singletons.Decide",
          "name": "(%~) %~",
          "normalized": "a b c Sing b-\u003eSing d-\u003eDecision(b d)",
          "package": "singletons",
          "signature": "forall a b. Sing a-\u003eSing b-\u003eDecision(a b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Decide.html#v:-37--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProof that no \u003ccode\u003ea\u003c/code\u003e exists\n\u003c/p\u003e",
          "module": "[\"Data.Singletons.Decide\",\"Data.Singletons.TH\",\"Data.Singletons.Types\"]",
          "name": "Disproved",
          "package": "singletons",
          "signature": "Disproved (Refuted a)",
          "source": "src/Data-Singletons-Types.html#Decision",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Decide.html#v:Disproved\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#v:Disproved\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Types.html#v:Disproved\"]"
        },
        "index": {
          "description": "Proof that no exists",
          "hierarchy": "Data Singletons Decide",
          "module": "Data.Singletons.Decide",
          "name": "Disproved",
          "package": "singletons",
          "partial": "Disproved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Decide.html#v:Disproved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWitness for \u003ccode\u003ea\u003c/code\u003e\n\u003c/p\u003e",
          "module": "[\"Data.Singletons.Decide\",\"Data.Singletons.TH\",\"Data.Singletons.Types\"]",
          "name": "Proved",
          "package": "singletons",
          "signature": "Proved a",
          "source": "src/Data-Singletons-Types.html#Decision",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Decide.html#v:Proved\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#v:Proved\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Types.html#v:Proved\"]"
        },
        "index": {
          "description": "Witness for",
          "hierarchy": "Data Singletons Decide",
          "module": "Data.Singletons.Decide",
          "name": "Proved",
          "package": "singletons",
          "partial": "Proved",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Decide.html#v:Proved"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Singletons.Decide\",\"Data.Singletons.TH\"]",
          "name": "Refl",
          "package": "singletons",
          "signature": ":~: k a1 a1",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Decide.html#v:Refl\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#v:Refl\"]"
        },
        "index": {
          "hierarchy": "Data Singletons Decide",
          "module": "Data.Singletons.Decide",
          "name": "Refl",
          "package": "singletons",
          "partial": "Refl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Decide.html#v:Refl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines functions and datatypes relating to the singleton for \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e,\n including a singletons version of all the definitions in \u003ccode\u003eData.Either\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBecause many of these definitions are produced by Template Haskell,\n it is not possible to create proper Haddock documentation. Please look\n up the corresponding operation in \u003ccode\u003eData.Either\u003c/code\u003e. Also, please excuse\n the apparent repeated variable names. This is due to an interaction\n between Template Haskell and Haddock.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Singletons.Either",
          "name": "Either",
          "package": "singletons",
          "source": "src/Data-Singletons-Either.html",
          "type": "module"
        },
        "index": {
          "description": "Defines functions and datatypes relating to the singleton for Either including singletons version of all the definitions in Data.Either Because many of these definitions are produced by Template Haskell it is not possible to create proper Haddock documentation Please look up the corresponding operation in Data.Either Also please excuse the apparent repeated variable names This is due to an interaction between Template Haskell and Haddock",
          "hierarchy": "Data Singletons Either",
          "module": "Data.Singletons.Either",
          "name": "Either",
          "package": "singletons",
          "partial": "Either",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Either.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Singletons.Either\",\"Data.Singletons.Prelude\"]",
          "name": "Either_",
          "package": "singletons",
          "signature": "Either_",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Either.html#t:Either_\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#t:Either_\"]"
        },
        "index": {
          "hierarchy": "Data Singletons Either",
          "module": "Data.Singletons.Either",
          "name": "Either_",
          "package": "singletons",
          "partial": "Either",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Either.html#t:Either_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Either",
          "name": "IsLeft",
          "package": "singletons",
          "signature": "IsLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Either",
          "module": "Data.Singletons.Either",
          "name": "IsLeft",
          "package": "singletons",
          "partial": "Is Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Either.html#t:IsLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Either",
          "name": "IsRight",
          "package": "singletons",
          "signature": "IsRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Either",
          "module": "Data.Singletons.Either",
          "name": "IsRight",
          "package": "singletons",
          "partial": "Is Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Either.html#t:IsRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Either",
          "name": "Lefts",
          "package": "singletons",
          "signature": "Lefts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Either",
          "module": "Data.Singletons.Either",
          "name": "Lefts",
          "package": "singletons",
          "partial": "Lefts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Either.html#t:Lefts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Either",
          "name": "PartitionEithers",
          "package": "singletons",
          "signature": "PartitionEithers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Either",
          "module": "Data.Singletons.Either",
          "name": "PartitionEithers",
          "package": "singletons",
          "partial": "Partition Eithers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Either.html#t:PartitionEithers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Either",
          "name": "Rights",
          "package": "singletons",
          "signature": "Rights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Either",
          "module": "Data.Singletons.Either",
          "name": "Rights",
          "package": "singletons",
          "partial": "Rights",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Either.html#t:Rights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Either",
          "name": "SEither",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#SEither",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Singletons Either",
          "module": "Data.Singletons.Either",
          "name": "SEither",
          "package": "singletons",
          "partial": "SEither",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Either.html#t:SEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Singletons.Either\",\"Data.Singletons.Prelude\"]",
          "name": "sEither_",
          "package": "singletons",
          "signature": "forall t t t.  (forall t.  Sing t -\u003e Sing (t t)) -\u003e (forall t.  Sing t -\u003e Sing (t t)) -\u003e Sing t -\u003e Sing (Either_ t t t)",
          "source": "src/Data-Singletons-Either.html#sEither_",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Either.html#v:sEither_\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#v:sEither_\"]"
        },
        "index": {
          "hierarchy": "Data Singletons Either",
          "module": "Data.Singletons.Either",
          "name": "sEither_",
          "normalized": "a b b c(a c Sing b-\u003eSing(b b))-\u003e(a c Sing b-\u003eSing(b b))-\u003eSing b-\u003eSing(Either_ b b b)",
          "package": "singletons",
          "partial": "Either",
          "signature": "forall t t t.(forall t. Sing t-\u003eSing(t t))-\u003e(forall t. Sing t-\u003eSing(t t))-\u003eSing t-\u003eSing(Either_ t t t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Either.html#v:sEither_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Either",
          "name": "sIsLeft",
          "package": "singletons",
          "signature": "forall t.  Sing t -\u003e Sing (IsLeft t)",
          "source": "src/Data-Singletons-Either.html#sIsLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Either",
          "module": "Data.Singletons.Either",
          "name": "sIsLeft",
          "normalized": "a b Sing c-\u003eSing(IsLeft c)",
          "package": "singletons",
          "partial": "Is Left",
          "signature": "forall t. Sing t-\u003eSing(IsLeft t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Either.html#v:sIsLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Either",
          "name": "sIsRight",
          "package": "singletons",
          "signature": "forall t.  Sing t -\u003e Sing (IsRight t)",
          "source": "src/Data-Singletons-Either.html#sIsRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Either",
          "module": "Data.Singletons.Either",
          "name": "sIsRight",
          "normalized": "a b Sing c-\u003eSing(IsRight c)",
          "package": "singletons",
          "partial": "Is Right",
          "signature": "forall t. Sing t-\u003eSing(IsRight t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Either.html#v:sIsRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Either",
          "name": "sLefts",
          "package": "singletons",
          "signature": "forall t.  Sing t -\u003e Sing (Lefts t)",
          "source": "src/Data-Singletons-Either.html#sLefts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Either",
          "module": "Data.Singletons.Either",
          "name": "sLefts",
          "normalized": "a b Sing c-\u003eSing(Lefts c)",
          "package": "singletons",
          "partial": "Lefts",
          "signature": "forall t. Sing t-\u003eSing(Lefts t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Either.html#v:sLefts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Either",
          "name": "sPartitionEithers",
          "package": "singletons",
          "signature": "forall t.  Sing t -\u003e Sing (PartitionEithers t)",
          "source": "src/Data-Singletons-Either.html#sPartitionEithers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Either",
          "module": "Data.Singletons.Either",
          "name": "sPartitionEithers",
          "normalized": "a b Sing c-\u003eSing(PartitionEithers c)",
          "package": "singletons",
          "partial": "Partition Eithers",
          "signature": "forall t. Sing t-\u003eSing(PartitionEithers t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Either.html#v:sPartitionEithers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Either",
          "name": "sRights",
          "package": "singletons",
          "signature": "forall t.  Sing t -\u003e Sing (Rights t)",
          "source": "src/Data-Singletons-Either.html#sRights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Either",
          "module": "Data.Singletons.Either",
          "name": "sRights",
          "normalized": "a b Sing c-\u003eSing(Rights c)",
          "package": "singletons",
          "partial": "Rights",
          "signature": "forall t. Sing t-\u003eSing(Rights t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Either.html#v:sRights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines the SEq singleton version of the Eq type class.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Singletons.Eq",
          "name": "Eq",
          "package": "singletons",
          "source": "src/Data-Singletons-Eq.html",
          "type": "module"
        },
        "index": {
          "description": "Defines the SEq singleton version of the Eq type class",
          "hierarchy": "Data Singletons Eq",
          "module": "Data.Singletons.Eq",
          "name": "Eq",
          "package": "singletons",
          "partial": "Eq",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Eq.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type family to compute Boolean equality. Instances are provided\n only for \u003cem\u003eopen\u003c/em\u003e kinds, such as \u003ccode\u003e*\u003c/code\u003e and function kinds. Instances are\n also provided for datatypes exported from base. A poly-kinded instance\n is \u003cem\u003enot\u003c/em\u003e provided, as a recursive definition for algebraic kinds is\n generally more useful.\n\u003c/p\u003e",
          "module": "[\"Data.Singletons.Eq\",\"Data.Singletons.TH\"]",
          "name": "(==)",
          "package": "singletons",
          "signature": "(==)",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Eq.html#t:-61--61-\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#t:-61--61-\"]"
        },
        "index": {
          "description": "type family to compute Boolean equality Instances are provided only for open kinds such as and function kinds Instances are also provided for datatypes exported from base poly-kinded instance is not provided as recursive definition for algebraic kinds is generally more useful",
          "hierarchy": "Data Singletons Eq",
          "module": "Data.Singletons.Eq",
          "name": "(==) ==",
          "normalized": "()",
          "package": "singletons",
          "signature": "()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Eq.html#t:-61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Eq",
          "name": ":/=",
          "package": "singletons",
          "source": "src/Data-Singletons-Eq.html#%3A%2F%3D",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Singletons Eq",
          "module": "Data.Singletons.Eq",
          "name": ":/=",
          "package": "singletons",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Eq.html#t::-47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA re-export of the type-level \u003ccode\u003e(==)\u003c/code\u003e that conforms to the singletons naming\n convention.\n\u003c/p\u003e",
          "module": "Data.Singletons.Eq",
          "name": ":==",
          "package": "singletons",
          "source": "src/Data-Singletons-Eq.html#%3A%3D%3D",
          "type": "type"
        },
        "index": {
          "description": "re-export of the type-level that conforms to the singletons naming convention",
          "hierarchy": "Data Singletons Eq",
          "module": "Data.Singletons.Eq",
          "name": ":==",
          "package": "singletons",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Eq.html#t::-61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe singleton analogue of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e. Unlike the definition for \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e, it is required\n that instances define a body for '(%:==)'. You may also supply a body for '(%:/=)'.\n\u003c/p\u003e",
          "module": "Data.Singletons.Eq",
          "name": "SEq",
          "package": "singletons",
          "source": "src/Data-Singletons-Eq.html#SEq",
          "type": "class"
        },
        "index": {
          "description": "The singleton analogue of Eq Unlike the definition for Eq it is required that instances define body for You may also supply body for",
          "hierarchy": "Data Singletons Eq",
          "module": "Data.Singletons.Eq",
          "name": "SEq",
          "package": "singletons",
          "partial": "SEq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Eq.html#t:SEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean disequality on singletons\n\u003c/p\u003e",
          "module": "Data.Singletons.Eq",
          "name": "(%:/=)",
          "package": "singletons",
          "signature": "forall a b.  Sing a -\u003e Sing b -\u003e Sing (a :/= b)",
          "source": "src/Data-Singletons-Eq.html#%25%3A%2F%3D",
          "type": "method"
        },
        "index": {
          "description": "Boolean disequality on singletons",
          "hierarchy": "Data Singletons Eq",
          "module": "Data.Singletons.Eq",
          "name": "(%:/=) %:/=",
          "normalized": "a b c Sing b-\u003eSing d-\u003eSing(b d)",
          "package": "singletons",
          "signature": "forall a b. Sing a-\u003eSing b-\u003eSing(a b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Eq.html#v:-37-:-47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean equality on singletons\n\u003c/p\u003e",
          "module": "Data.Singletons.Eq",
          "name": "(%:==)",
          "package": "singletons",
          "signature": "forall a b.  Sing a -\u003e Sing b -\u003e Sing (a :== b)",
          "source": "src/Data-Singletons-Eq.html#%25%3A%3D%3D",
          "type": "method"
        },
        "index": {
          "description": "Boolean equality on singletons",
          "hierarchy": "Data Singletons Eq",
          "module": "Data.Singletons.Eq",
          "name": "(%:==) %:==",
          "normalized": "a b c Sing b-\u003eSing d-\u003eSing(b d)",
          "package": "singletons",
          "signature": "forall a b. Sing a-\u003eSing b-\u003eSing(a b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Eq.html#v:-37-:-61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines functions and datatypes relating to the singleton for '[]',\n including a singletons version of a few of the definitions in \u003ccode\u003eData.List\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBecause many of these definitions are produced by Template Haskell,\n it is not possible to create proper Haddock documentation. Please look\n up the corresponding operation in \u003ccode\u003eData.List\u003c/code\u003e. Also, please excuse\n the apparent repeated variable names. This is due to an interaction\n between Template Haskell and Haddock.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Singletons.List",
          "name": "List",
          "package": "singletons",
          "source": "src/Data-Singletons-List.html",
          "type": "module"
        },
        "index": {
          "description": "Defines functions and datatypes relating to the singleton for including singletons version of few of the definitions in Data.List Because many of these definitions are produced by Template Haskell it is not possible to create proper Haddock documentation Please look up the corresponding operation in Data.List Also please excuse the apparent repeated variable names This is due to an interaction between Template Haskell and Haddock",
          "hierarchy": "Data Singletons List",
          "module": "Data.Singletons.List",
          "name": "List",
          "package": "singletons",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Singletons.List\",\"Data.Singletons.Prelude\"]",
          "name": ":++",
          "package": "singletons",
          "signature": ":++",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-List.html#t::-43--43-\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#t::-43--43-\"]"
        },
        "index": {
          "hierarchy": "Data Singletons List",
          "module": "Data.Singletons.List",
          "name": ":++",
          "package": "singletons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-List.html#t::-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Singletons.List\",\"Data.Singletons.Prelude\"]",
          "name": "Head",
          "package": "singletons",
          "signature": "Head",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-List.html#t:Head\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#t:Head\"]"
        },
        "index": {
          "hierarchy": "Data Singletons List",
          "module": "Data.Singletons.List",
          "name": "Head",
          "package": "singletons",
          "partial": "Head",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-List.html#t:Head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.List",
          "name": "Reverse",
          "package": "singletons",
          "signature": "Reverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons List",
          "module": "Data.Singletons.List",
          "name": "Reverse",
          "package": "singletons",
          "partial": "Reverse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-List.html#t:Reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.List",
          "name": "SList",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#SList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Singletons List",
          "module": "Data.Singletons.List",
          "name": "SList",
          "package": "singletons",
          "partial": "SList",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-List.html#t:SList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Singletons.List\",\"Data.Singletons.Prelude\"]",
          "name": "Tail",
          "package": "singletons",
          "signature": "Tail",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-List.html#t:Tail\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#t:Tail\"]"
        },
        "index": {
          "hierarchy": "Data Singletons List",
          "module": "Data.Singletons.List",
          "name": "Tail",
          "package": "singletons",
          "partial": "Tail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-List.html#t:Tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Singletons.List\",\"Data.Singletons.Prelude\"]",
          "name": "(%:++)",
          "package": "singletons",
          "signature": "forall t t.  Sing t -\u003e Sing t -\u003e Sing (:++ t t)",
          "source": "src/Data-Singletons-List.html#%25%3A%2B%2B",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-List.html#v:-37-:-43--43-\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#v:-37-:-43--43-\"]"
        },
        "index": {
          "hierarchy": "Data Singletons List",
          "module": "Data.Singletons.List",
          "name": "(%:++) %:++",
          "normalized": "a b c Sing b-\u003eSing b-\u003eSing(b b)",
          "package": "singletons",
          "signature": "forall t t. Sing t-\u003eSing t-\u003eSing(t t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-List.html#v:-37-:-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.List",
          "name": "sHead",
          "package": "singletons",
          "signature": "forall t.  Sing t -\u003e Sing (Head t)",
          "source": "src/Data-Singletons-List.html#sHead",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons List",
          "module": "Data.Singletons.List",
          "name": "sHead",
          "normalized": "a b Sing c-\u003eSing(Head c)",
          "package": "singletons",
          "partial": "Head",
          "signature": "forall t. Sing t-\u003eSing(Head t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-List.html#v:sHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.List",
          "name": "sReverse",
          "package": "singletons",
          "signature": "forall t.  Sing t -\u003e Sing (Reverse t)",
          "source": "src/Data-Singletons-List.html#sReverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons List",
          "module": "Data.Singletons.List",
          "name": "sReverse",
          "normalized": "a b Sing c-\u003eSing(Reverse c)",
          "package": "singletons",
          "partial": "Reverse",
          "signature": "forall t. Sing t-\u003eSing(Reverse t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-List.html#v:sReverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.List",
          "name": "sTail",
          "package": "singletons",
          "signature": "forall t.  Sing t -\u003e Sing (Tail t)",
          "source": "src/Data-Singletons-List.html#sTail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons List",
          "module": "Data.Singletons.List",
          "name": "sTail",
          "normalized": "a b Sing c-\u003eSing(Tail c)",
          "package": "singletons",
          "partial": "Tail",
          "signature": "forall t. Sing t-\u003eSing(Tail t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-List.html#v:sTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines functions and datatypes relating to the singleton for \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e,\n including a singletons version of all the definitions in \u003ccode\u003eData.Maybe\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBecause many of these definitions are produced by Template Haskell,\n it is not possible to create proper Haddock documentation. Please look\n up the corresponding operation in \u003ccode\u003eData.Maybe\u003c/code\u003e. Also, please excuse\n the apparent repeated variable names. This is due to an interaction\n between Template Haskell and Haddock.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Singletons.Maybe",
          "name": "Maybe",
          "package": "singletons",
          "source": "src/Data-Singletons-Maybe.html",
          "type": "module"
        },
        "index": {
          "description": "Defines functions and datatypes relating to the singleton for Maybe including singletons version of all the definitions in Data.Maybe Because many of these definitions are produced by Template Haskell it is not possible to create proper Haddock documentation Please look up the corresponding operation in Data.Maybe Also please excuse the apparent repeated variable names This is due to an interaction between Template Haskell and Haddock",
          "hierarchy": "Data Singletons Maybe",
          "module": "Data.Singletons.Maybe",
          "name": "Maybe",
          "package": "singletons",
          "partial": "Maybe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Maybe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Maybe",
          "name": "CatMaybes",
          "package": "singletons",
          "signature": "CatMaybes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Maybe",
          "module": "Data.Singletons.Maybe",
          "name": "CatMaybes",
          "package": "singletons",
          "partial": "Cat Maybes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Maybe.html#t:CatMaybes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Maybe",
          "name": "FromJust",
          "package": "singletons",
          "signature": "FromJust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Maybe",
          "module": "Data.Singletons.Maybe",
          "name": "FromJust",
          "package": "singletons",
          "partial": "From Just",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Maybe.html#t:FromJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Maybe",
          "name": "FromMaybe",
          "package": "singletons",
          "signature": "FromMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Maybe",
          "module": "Data.Singletons.Maybe",
          "name": "FromMaybe",
          "package": "singletons",
          "partial": "From Maybe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Maybe.html#t:FromMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Maybe",
          "name": "IsJust",
          "package": "singletons",
          "signature": "IsJust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Maybe",
          "module": "Data.Singletons.Maybe",
          "name": "IsJust",
          "package": "singletons",
          "partial": "Is Just",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Maybe.html#t:IsJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Maybe",
          "name": "IsNothing",
          "package": "singletons",
          "signature": "IsNothing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Maybe",
          "module": "Data.Singletons.Maybe",
          "name": "IsNothing",
          "package": "singletons",
          "partial": "Is Nothing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Maybe.html#t:IsNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Maybe",
          "name": "ListToMaybe",
          "package": "singletons",
          "signature": "ListToMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Maybe",
          "module": "Data.Singletons.Maybe",
          "name": "ListToMaybe",
          "package": "singletons",
          "partial": "List To Maybe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Maybe.html#t:ListToMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Maybe",
          "name": "MapMaybe",
          "package": "singletons",
          "signature": "MapMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Maybe",
          "module": "Data.Singletons.Maybe",
          "name": "MapMaybe",
          "package": "singletons",
          "partial": "Map Maybe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Maybe.html#t:MapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Maybe",
          "name": "MaybeToList",
          "package": "singletons",
          "signature": "MaybeToList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Maybe",
          "module": "Data.Singletons.Maybe",
          "name": "MaybeToList",
          "package": "singletons",
          "partial": "Maybe To List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Maybe.html#t:MaybeToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Singletons.Maybe\",\"Data.Singletons.Prelude\"]",
          "name": "Maybe_",
          "package": "singletons",
          "signature": "Maybe_",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Maybe.html#t:Maybe_\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#t:Maybe_\"]"
        },
        "index": {
          "hierarchy": "Data Singletons Maybe",
          "module": "Data.Singletons.Maybe",
          "name": "Maybe_",
          "package": "singletons",
          "partial": "Maybe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Maybe.html#t:Maybe_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Maybe",
          "name": "SMaybe",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#SMaybe",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Singletons Maybe",
          "module": "Data.Singletons.Maybe",
          "name": "SMaybe",
          "package": "singletons",
          "partial": "SMaybe",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Maybe.html#t:SMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Maybe",
          "name": "sCatMaybes",
          "package": "singletons",
          "signature": "forall t.  Sing t -\u003e Sing (CatMaybes t)",
          "source": "src/Data-Singletons-Maybe.html#sCatMaybes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Maybe",
          "module": "Data.Singletons.Maybe",
          "name": "sCatMaybes",
          "normalized": "a b Sing c-\u003eSing(CatMaybes c)",
          "package": "singletons",
          "partial": "Cat Maybes",
          "signature": "forall t. Sing t-\u003eSing(CatMaybes t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Maybe.html#v:sCatMaybes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Maybe",
          "name": "sFromJust",
          "package": "singletons",
          "signature": "forall t.  Sing t -\u003e Sing (FromJust t)",
          "source": "src/Data-Singletons-Maybe.html#sFromJust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Maybe",
          "module": "Data.Singletons.Maybe",
          "name": "sFromJust",
          "normalized": "a b Sing c-\u003eSing(FromJust c)",
          "package": "singletons",
          "partial": "From Just",
          "signature": "forall t. Sing t-\u003eSing(FromJust t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Maybe.html#v:sFromJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Maybe",
          "name": "sFromMaybe",
          "package": "singletons",
          "signature": "forall t t.  Sing t -\u003e Sing t -\u003e Sing (FromMaybe t t)",
          "source": "src/Data-Singletons-Maybe.html#sFromMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Maybe",
          "module": "Data.Singletons.Maybe",
          "name": "sFromMaybe",
          "normalized": "a b c Sing b-\u003eSing b-\u003eSing(FromMaybe b b)",
          "package": "singletons",
          "partial": "From Maybe",
          "signature": "forall t t. Sing t-\u003eSing t-\u003eSing(FromMaybe t t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Maybe.html#v:sFromMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Maybe",
          "name": "sIsJust",
          "package": "singletons",
          "signature": "forall t.  Sing t -\u003e Sing (IsJust t)",
          "source": "src/Data-Singletons-Maybe.html#sIsJust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Maybe",
          "module": "Data.Singletons.Maybe",
          "name": "sIsJust",
          "normalized": "a b Sing c-\u003eSing(IsJust c)",
          "package": "singletons",
          "partial": "Is Just",
          "signature": "forall t. Sing t-\u003eSing(IsJust t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Maybe.html#v:sIsJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Maybe",
          "name": "sIsNothing",
          "package": "singletons",
          "signature": "forall t.  Sing t -\u003e Sing (IsNothing t)",
          "source": "src/Data-Singletons-Maybe.html#sIsNothing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Maybe",
          "module": "Data.Singletons.Maybe",
          "name": "sIsNothing",
          "normalized": "a b Sing c-\u003eSing(IsNothing c)",
          "package": "singletons",
          "partial": "Is Nothing",
          "signature": "forall t. Sing t-\u003eSing(IsNothing t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Maybe.html#v:sIsNothing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Maybe",
          "name": "sListToMaybe",
          "package": "singletons",
          "signature": "forall t.  Sing t -\u003e Sing (ListToMaybe t)",
          "source": "src/Data-Singletons-Maybe.html#sListToMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Maybe",
          "module": "Data.Singletons.Maybe",
          "name": "sListToMaybe",
          "normalized": "a b Sing c-\u003eSing(ListToMaybe c)",
          "package": "singletons",
          "partial": "List To Maybe",
          "signature": "forall t. Sing t-\u003eSing(ListToMaybe t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Maybe.html#v:sListToMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Maybe",
          "name": "sMapMaybe",
          "package": "singletons",
          "signature": "forall t t.  (forall t.  Sing t -\u003e Sing (t t)) -\u003e Sing t -\u003e Sing (MapMaybe t t)",
          "source": "src/Data-Singletons-Maybe.html#sMapMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Maybe",
          "module": "Data.Singletons.Maybe",
          "name": "sMapMaybe",
          "normalized": "a b c(a c Sing b-\u003eSing(b b))-\u003eSing b-\u003eSing(MapMaybe b b)",
          "package": "singletons",
          "partial": "Map Maybe",
          "signature": "forall t t.(forall t. Sing t-\u003eSing(t t))-\u003eSing t-\u003eSing(MapMaybe t t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Maybe.html#v:sMapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Maybe",
          "name": "sMaybeToList",
          "package": "singletons",
          "signature": "forall t.  Sing t -\u003e Sing (MaybeToList t)",
          "source": "src/Data-Singletons-Maybe.html#sMaybeToList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Maybe",
          "module": "Data.Singletons.Maybe",
          "name": "sMaybeToList",
          "normalized": "a b Sing c-\u003eSing(MaybeToList c)",
          "package": "singletons",
          "partial": "Maybe To List",
          "signature": "forall t. Sing t-\u003eSing(MaybeToList t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Maybe.html#v:sMaybeToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Singletons.Maybe\",\"Data.Singletons.Prelude\"]",
          "name": "sMaybe_",
          "package": "singletons",
          "signature": "forall t t t.  Sing t -\u003e (forall t.  Sing t -\u003e Sing (t t)) -\u003e Sing t -\u003e Sing (Maybe_ t t t)",
          "source": "src/Data-Singletons-Maybe.html#sMaybe_",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Maybe.html#v:sMaybe_\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#v:sMaybe_\"]"
        },
        "index": {
          "hierarchy": "Data Singletons Maybe",
          "module": "Data.Singletons.Maybe",
          "name": "sMaybe_",
          "normalized": "a b b c Sing b-\u003e(a c Sing b-\u003eSing(b b))-\u003eSing b-\u003eSing(Maybe_ b b b)",
          "package": "singletons",
          "partial": "Maybe",
          "signature": "forall t t t. Sing t-\u003e(forall t. Sing t-\u003eSing(t t))-\u003eSing t-\u003eSing(Maybe_ t t t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Maybe.html#v:sMaybe_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMimics the Haskell Prelude, but with singleton types. Includes the basic\n singleton definitions. Note: This is currently very incomplete!\n\u003c/p\u003e\u003cp\u003eBecause many of these definitions are produced by Template Haskell, it is\n not possible to create proper Haddock documentation. Also, please excuse\n the apparent repeated variable names. This is due to an interaction between\n Template Haskell and Haddock.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Singletons.Prelude",
          "name": "Prelude",
          "package": "singletons",
          "source": "src/Data-Singletons-Prelude.html",
          "type": "module"
        },
        "index": {
          "description": "Mimics the Haskell Prelude but with singleton types Includes the basic singleton definitions Note This is currently very incomplete Because many of these definitions are produced by Template Haskell it is not possible to create proper Haddock documentation Also please excuse the apparent repeated variable names This is due to an interaction between Template Haskell and Haddock",
          "hierarchy": "Data Singletons Prelude",
          "module": "Data.Singletons.Prelude",
          "name": "Prelude",
          "package": "singletons",
          "partial": "Prelude",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Prelude",
          "name": ":||",
          "package": "singletons",
          "source": "src/Data-Singletons-Bool.html#%3A%7C%7C",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Singletons Prelude",
          "module": "Data.Singletons.Prelude",
          "name": ":||",
          "package": "singletons",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#t::-124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Prelude",
          "name": ":&&",
          "package": "singletons",
          "source": "src/Data-Singletons-Bool.html#%3A%26%26",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Singletons Prelude",
          "module": "Data.Singletons.Prelude",
          "name": ":&&",
          "package": "singletons",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#t::-38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Singletons.Prelude\",\"Data.Singletons.Tuple\"]",
          "name": "Curry",
          "package": "singletons",
          "signature": "Curry",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#t:Curry\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Tuple.html#t:Curry\"]"
        },
        "index": {
          "hierarchy": "Data Singletons Prelude",
          "module": "Data.Singletons.Prelude",
          "name": "Curry",
          "package": "singletons",
          "partial": "Curry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#t:Curry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Singletons.Prelude\",\"Data.Singletons.Tuple\"]",
          "name": "Fst",
          "package": "singletons",
          "signature": "Fst",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#t:Fst\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Tuple.html#t:Fst\"]"
        },
        "index": {
          "hierarchy": "Data Singletons Prelude",
          "module": "Data.Singletons.Prelude",
          "name": "Fst",
          "package": "singletons",
          "partial": "Fst",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#t:Fst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Prelude",
          "name": "SBool",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#SBool",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Singletons Prelude",
          "module": "Data.Singletons.Prelude",
          "name": "SBool",
          "package": "singletons",
          "partial": "SBool",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#t:SBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Prelude",
          "name": "SEither",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#SEither",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Singletons Prelude",
          "module": "Data.Singletons.Prelude",
          "name": "SEither",
          "package": "singletons",
          "partial": "SEither",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#t:SEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Prelude",
          "name": "SList",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#SList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Singletons Prelude",
          "module": "Data.Singletons.Prelude",
          "name": "SList",
          "package": "singletons",
          "partial": "SList",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#t:SList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Prelude",
          "name": "SMaybe",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#SMaybe",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Singletons Prelude",
          "module": "Data.Singletons.Prelude",
          "name": "SMaybe",
          "package": "singletons",
          "partial": "SMaybe",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#t:SMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Prelude",
          "name": "STuple0",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#STuple0",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Singletons Prelude",
          "module": "Data.Singletons.Prelude",
          "name": "STuple0",
          "package": "singletons",
          "partial": "STuple",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#t:STuple0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Prelude",
          "name": "STuple2",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#STuple2",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Singletons Prelude",
          "module": "Data.Singletons.Prelude",
          "name": "STuple2",
          "package": "singletons",
          "partial": "STuple",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#t:STuple2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Prelude",
          "name": "STuple3",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#STuple3",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Singletons Prelude",
          "module": "Data.Singletons.Prelude",
          "name": "STuple3",
          "package": "singletons",
          "partial": "STuple",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#t:STuple3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Prelude",
          "name": "STuple4",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#STuple4",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Singletons Prelude",
          "module": "Data.Singletons.Prelude",
          "name": "STuple4",
          "package": "singletons",
          "partial": "STuple",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#t:STuple4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Prelude",
          "name": "STuple5",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#STuple5",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Singletons Prelude",
          "module": "Data.Singletons.Prelude",
          "name": "STuple5",
          "package": "singletons",
          "partial": "STuple",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#t:STuple5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Prelude",
          "name": "STuple6",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#STuple6",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Singletons Prelude",
          "module": "Data.Singletons.Prelude",
          "name": "STuple6",
          "package": "singletons",
          "partial": "STuple",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#t:STuple6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Prelude",
          "name": "STuple7",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#STuple7",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Singletons Prelude",
          "module": "Data.Singletons.Prelude",
          "name": "STuple7",
          "package": "singletons",
          "partial": "STuple",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#t:STuple7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Singletons.Prelude\",\"Data.Singletons.Tuple\"]",
          "name": "Snd",
          "package": "singletons",
          "signature": "Snd",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#t:Snd\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Tuple.html#t:Snd\"]"
        },
        "index": {
          "hierarchy": "Data Singletons Prelude",
          "module": "Data.Singletons.Prelude",
          "name": "Snd",
          "package": "singletons",
          "partial": "Snd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#t:Snd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Singletons.Prelude\",\"Data.Singletons.Tuple\"]",
          "name": "Uncurry",
          "package": "singletons",
          "signature": "Uncurry",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#t:Uncurry\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Tuple.html#t:Uncurry\"]"
        },
        "index": {
          "hierarchy": "Data Singletons Prelude",
          "module": "Data.Singletons.Prelude",
          "name": "Uncurry",
          "package": "singletons",
          "partial": "Uncurry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#t:Uncurry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Singletons.Prelude\",\"Data.Singletons.Tuple\"]",
          "name": "sCurry",
          "package": "singletons",
          "signature": "forall t t t.  (forall t.  Sing t -\u003e Sing (t t)) -\u003e Sing t -\u003e Sing t -\u003e Sing (Curry t t t)",
          "source": "src/Data-Singletons-Tuple.html#sCurry",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#v:sCurry\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Tuple.html#v:sCurry\"]"
        },
        "index": {
          "hierarchy": "Data Singletons Prelude",
          "module": "Data.Singletons.Prelude",
          "name": "sCurry",
          "normalized": "a b b c(a c Sing b-\u003eSing(b b))-\u003eSing b-\u003eSing b-\u003eSing(Curry b b b)",
          "package": "singletons",
          "partial": "Curry",
          "signature": "forall t t t.(forall t. Sing t-\u003eSing(t t))-\u003eSing t-\u003eSing t-\u003eSing(Curry t t t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#v:sCurry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Singletons.Prelude\",\"Data.Singletons.Tuple\"]",
          "name": "sFst",
          "package": "singletons",
          "signature": "forall t.  Sing t -\u003e Sing (Fst t)",
          "source": "src/Data-Singletons-Tuple.html#sFst",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#v:sFst\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Tuple.html#v:sFst\"]"
        },
        "index": {
          "hierarchy": "Data Singletons Prelude",
          "module": "Data.Singletons.Prelude",
          "name": "sFst",
          "normalized": "a b Sing c-\u003eSing(Fst c)",
          "package": "singletons",
          "partial": "Fst",
          "signature": "forall t. Sing t-\u003eSing(Fst t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#v:sFst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Singletons.Prelude\",\"Data.Singletons.Tuple\"]",
          "name": "sSnd",
          "package": "singletons",
          "signature": "forall t.  Sing t -\u003e Sing (Snd t)",
          "source": "src/Data-Singletons-Tuple.html#sSnd",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#v:sSnd\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Tuple.html#v:sSnd\"]"
        },
        "index": {
          "hierarchy": "Data Singletons Prelude",
          "module": "Data.Singletons.Prelude",
          "name": "sSnd",
          "normalized": "a b Sing c-\u003eSing(Snd c)",
          "package": "singletons",
          "partial": "Snd",
          "signature": "forall t. Sing t-\u003eSing(Snd t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#v:sSnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Singletons.Prelude\",\"Data.Singletons.Tuple\"]",
          "name": "sUncurry",
          "package": "singletons",
          "signature": "forall t t.  (forall t.  Sing t -\u003e forall t.  Sing t -\u003e Sing (t t t)) -\u003e Sing t -\u003e Sing (Uncurry t t)",
          "source": "src/Data-Singletons-Tuple.html#sUncurry",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#v:sUncurry\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Tuple.html#v:sUncurry\"]"
        },
        "index": {
          "hierarchy": "Data Singletons Prelude",
          "module": "Data.Singletons.Prelude",
          "name": "sUncurry",
          "normalized": "a b c(a c Sing b-\u003ea c Sing b-\u003eSing(b b b))-\u003eSing b-\u003eSing(Uncurry b b)",
          "package": "singletons",
          "partial": "Uncurry",
          "signature": "forall t t.(forall t. Sing t-\u003eforall t. Sing t-\u003eSing(t t t))-\u003eSing t-\u003eSing(Uncurry t t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Prelude.html#v:sUncurry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains everything you need to derive your own singletons via\n Template Haskell.\n\u003c/p\u003e\u003cp\u003eTURN ON \u003ccode\u003e-XScopedTypeVariables\u003c/code\u003e IN YOUR MODULE IF YOU WANT THIS TO WORK.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Singletons.TH",
          "name": "TH",
          "package": "singletons",
          "source": "src/Data-Singletons-TH.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains everything you need to derive your own singletons via Template Haskell TURN ON XScopedTypeVariables IN YOUR MODULE IF YOU WANT THIS TO WORK",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "TH",
          "package": "singletons",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePropositional equality. If \u003ccode\u003ea :~: b\u003c/code\u003e is inhabited by some terminating\n value, then the type \u003ccode\u003ea\u003c/code\u003e is the same as the type \u003ccode\u003eb\u003c/code\u003e. To use this equality\n in practice, pattern-match on the \u003ccode\u003ea :~: b\u003c/code\u003e to get out the \u003ccode\u003eRefl\u003c/code\u003e constructor;\n in the body of the pattern-match, the compiler knows that \u003ccode\u003ea ~ b\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eSince: 4.7.0.0\u003c/em\u003e\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": ":~:",
          "package": "singletons",
          "type": "data"
        },
        "index": {
          "description": "Propositional equality If is inhabited by some terminating value then the type is the same as the type To use this equality in practice pattern-match on the to get out the Refl constructor in the body of the pattern-match the compiler knows that Since",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": ":~:",
          "package": "singletons",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#t::-126-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.TH",
          "name": ":&&",
          "package": "singletons",
          "source": "src/Data-Singletons-Bool.html#%3A%26%26",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": ":&&",
          "package": "singletons",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#t::-38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA re-export of the type-level \u003ccode\u003e(==)\u003c/code\u003e that conforms to the singletons naming\n convention.\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": ":==",
          "package": "singletons",
          "source": "src/Data-Singletons-Eq.html#%3A%3D%3D",
          "type": "type"
        },
        "index": {
          "description": "re-export of the type-level that conforms to the singletons naming convention",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": ":==",
          "package": "singletons",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#t::-61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type constructor \u003ccode\u003eAny\u003c/code\u003e is type to which you can unsafely coerce any\n \tlifted type, and back.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e It is lifted, and hence represented by a pointer\n\u003c/li\u003e\u003cli\u003e It does not claim to be a \u003cem\u003edata\u003c/em\u003e type, and that's important for\n \t    the code generator, because the code gen may \u003cem\u003eenter\u003c/em\u003e a data value\n \t    but never enters a function value.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIt's also used to instantiate un-constrained type variables after type\n \tchecking.  For example, \u003ccode\u003elength\u003c/code\u003e has type\n\u003c/p\u003e\u003cpre\u003elength :: forall a. [a] -\u003e Int\u003c/pre\u003e\u003cp\u003eand the list datacon for the empty list has type\n\u003c/p\u003e\u003cpre\u003e[] :: forall a. [a]\u003c/pre\u003e\u003cp\u003eIn order to compose these two terms as \u003ccode\u003elength []\u003c/code\u003e a type\n \tapplication is required, but there is no constraint on the\n \tchoice.  In this situation GHC uses \u003ccode\u003eAny\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003elength (Any *) ([] (Any *))\u003c/pre\u003e\u003cp\u003eNote that \u003ccode\u003eAny\u003c/code\u003e is kind polymorphic, and takes a kind \u003ccode\u003ek\u003c/code\u003e as its\n         first argument. The kind of \u003ccode\u003eAny\u003c/code\u003e is thus \u003ccode\u003eforall k. k -\u003e k\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "Any",
          "package": "singletons",
          "type": "data"
        },
        "index": {
          "description": "The type constructor Any is type to which you can unsafely coerce any lifted type and back It is lifted and hence represented by pointer It does not claim to be data type and that important for the code generator because the code gen may enter data value but never enters function value It also used to instantiate un-constrained type variables after type checking For example length has type length forall Int and the list datacon for the empty list has type forall In order to compose these two terms as length type application is required but there is no constraint on the choice In this situation GHC uses Any length Any Any Note that Any is kind polymorphic and takes kind as its first argument The kind of Any is thus forall",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "Any",
          "package": "singletons",
          "partial": "Any",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#t:Any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDecision\u003c/a\u003e\u003c/code\u003e about a type \u003ccode\u003ea\u003c/code\u003e is either a proof of existence or a proof that \u003ccode\u003ea\u003c/code\u003e\n cannot exist.\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "Decision",
          "package": "singletons",
          "source": "src/Data-Singletons-Types.html#Decision",
          "type": "data"
        },
        "index": {
          "description": "Decision about type is either proof of existence or proof that cannot exist",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "Decision",
          "package": "singletons",
          "partial": "Decision",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#t:Decision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient abbreviation for \u003ccode\u003e\u003ca\u003eDemoteRep\u003c/a\u003e\u003c/code\u003e:\n \u003ccode\u003etype Demote (a :: k) = DemoteRep ('KProxy :: KProxy k)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "Demote",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#Demote",
          "type": "type"
        },
        "index": {
          "description": "Convenient abbreviation for DemoteRep type Demote DemoteRep KProxy KProxy",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "Demote",
          "package": "singletons",
          "partial": "Demote",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#t:Demote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA concrete, promotable proxy type, for use at the kind level\n There are no instances for this because it is intended at the kind level only\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "KProxy",
          "package": "singletons",
          "type": "data"
        },
        "index": {
          "description": "concrete promotable proxy type for use at the kind level There are no instances for this because it is intended at the kind level only",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "KProxy",
          "package": "singletons",
          "partial": "KProxy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#t:KProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient synonym to refer to the kind of a type variable:\n \u003ccode\u003etype KindOf (a :: k) = ('KProxy :: KProxy k)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "KindOf",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#KindOf",
          "type": "type"
        },
        "index": {
          "description": "Convenient synonym to refer to the kind of type variable type KindOf KProxy KProxy",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "KindOf",
          "package": "singletons",
          "partial": "Kind Of",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#t:KindOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBecause we can never create a value of type \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e, a function that type-checks\n at \u003ccode\u003ea -\u003e Void\u003c/code\u003e shows that objects of type \u003ccode\u003ea\u003c/code\u003e can never exist. Thus, we say that\n \u003ccode\u003ea\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eRefuted\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "Refuted",
          "package": "singletons",
          "source": "src/Data-Singletons-Types.html#Refuted",
          "type": "type"
        },
        "index": {
          "description": "Because we can never create value of type Void function that type-checks at Void shows that objects of type can never exist Thus we say that is Refuted",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "Refuted",
          "package": "singletons",
          "partial": "Refuted",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#t:Refuted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMembers of the \u003ccode\u003e\u003ca\u003eSDecide\u003c/a\u003e\u003c/code\u003e \u003ca\u003ekind\u003c/a\u003e class support decidable equality. Instances\n of this class are generated alongside singleton definitions for datatypes that\n derive an \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "SDecide",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#SDecide",
          "type": "class"
        },
        "index": {
          "description": "Members of the SDecide kind class support decidable equality Instances of this class are generated alongside singleton definitions for datatypes that derive an Eq instance",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "SDecide",
          "package": "singletons",
          "partial": "SDecide",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#t:SDecide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe singleton analogue of \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e. Unlike the definition for \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e, it is required\n that instances define a body for '(%:==)'. You may also supply a body for '(%:/=)'.\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "SEq",
          "package": "singletons",
          "source": "src/Data-Singletons-Eq.html#SEq",
          "type": "class"
        },
        "index": {
          "description": "The singleton analogue of Eq Unlike the definition for Eq it is required that instances define body for You may also supply body for",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "SEq",
          "package": "singletons",
          "partial": "SEq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#t:SEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSingI\u003c/a\u003e\u003c/code\u003e constraint is essentially an implicitly-passed singleton.\n If you need to satisfy this constraint with an explicit singleton, please\n see \u003ccode\u003ewithSingI\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "SingI",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#SingI",
          "type": "class"
        },
        "index": {
          "description": "SingI constraint is essentially an implicitly-passed singleton If you need to satisfy this constraint with an explicit singleton please see withSingI",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "SingI",
          "package": "singletons",
          "partial": "Sing",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#t:SingI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eSingKind\u003c/a\u003e\u003c/code\u003e class is essentially a \u003cem\u003ekind\u003c/em\u003e class. It classifies all kinds\n for which singletons are defined. The class supports converting between a singleton\n type and the base (unrefined) type which it is built from.\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "SingKind",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#SingKind",
          "type": "class"
        },
        "index": {
          "description": "The SingKind class is essentially kind class It classifies all kinds for which singletons are defined The class supports converting between singleton type and the base unrefined type which it is built from",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "SingKind",
          "package": "singletons",
          "partial": "Sing Kind",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#t:SingKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003cem\u003eexistentially-quantified\u003c/em\u003e singleton. This type is useful when you want a\n singleton type, but there is no way of knowing, at compile-time, what the type\n index will be. To make use of this type, you will generally have to use a\n pattern-match:\n\u003c/p\u003e\u003cpre\u003e foo :: Bool -\u003e ...\n foo b = case toSing b of\n           SomeSing sb -\u003e {- fancy dependently-typed code with sb -}\n\u003c/pre\u003e\u003cp\u003eAn example like the one above may be easier to write using \u003ccode\u003ewithSomeSing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "SomeSing",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#SomeSing",
          "type": "data"
        },
        "index": {
          "description": "An existentially-quantified singleton This type is useful when you want singleton type but there is no way of knowing at compile-time what the type index will be To make use of this type you will generally have to use pattern-match foo Bool foo case toSing of SomeSing sb fancy dependently-typed code with sb An example like the one above may be easier to write using withSomeSing",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "SomeSing",
          "package": "singletons",
          "partial": "Some Sing",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#t:SomeSing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA logically uninhabited data type.\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "Void",
          "package": "singletons",
          "source": "src/Data-Singletons-Void.html#Void",
          "type": "data"
        },
        "index": {
          "description": "logically uninhabited data type",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "Void",
          "package": "singletons",
          "partial": "Void",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#t:Void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompute a proof or disproof of equality, given two singletons.\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "(%~)",
          "package": "singletons",
          "signature": "forall a b.  Sing a -\u003e Sing b -\u003e Decision (a :~: b)",
          "source": "src/Data-Singletons-Core.html#%25~",
          "type": "method"
        },
        "index": {
          "description": "Compute proof or disproof of equality given two singletons",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "(%~) %~",
          "normalized": "a b c Sing b-\u003eSing d-\u003eDecision(b d)",
          "package": "singletons",
          "signature": "forall a b. Sing a-\u003eSing b-\u003eDecision(a b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#v:-37--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean disequality on singletons\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "(%:/=)",
          "package": "singletons",
          "signature": "forall a b.  Sing a -\u003e Sing b -\u003e Sing (a :/= b)",
          "source": "src/Data-Singletons-Eq.html#%25%3A%2F%3D",
          "type": "method"
        },
        "index": {
          "description": "Boolean disequality on singletons",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "(%:/=) %:/=",
          "normalized": "a b c Sing b-\u003eSing d-\u003eSing(b d)",
          "package": "singletons",
          "signature": "forall a b. Sing a-\u003eSing b-\u003eSing(a b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#v:-37-:-47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoolean equality on singletons\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "(%:==)",
          "package": "singletons",
          "signature": "forall a b.  Sing a -\u003e Sing b -\u003e Sing (a :== b)",
          "source": "src/Data-Singletons-Eq.html#%25%3A%3D%3D",
          "type": "method"
        },
        "index": {
          "description": "Boolean equality on singletons",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "(%:==) %:==",
          "normalized": "a b c Sing b-\u003eSing d-\u003eSing(b d)",
          "package": "singletons",
          "signature": "forall a b. Sing a-\u003eSing b-\u003eSing(a b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#v:-37-:-61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Singletons.TH\",\"Data.Singletons\"]",
          "name": "KProxy",
          "package": "singletons",
          "signature": "KProxy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#v:KProxy\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons.html#v:KProxy\"]"
        },
        "index": {
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "KProxy",
          "package": "singletons",
          "partial": "KProxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#v:KProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Singletons.TH\",\"Data.Singletons\"]",
          "name": "SomeSing",
          "package": "singletons",
          "signature": "KProxy k)",
          "source": "src/Data-Singletons-Core.html#SomeSing",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#v:SomeSing\",\"http://hackage.haskell.org/package/singletons/docs/Data-Singletons.html#v:SomeSing\"]"
        },
        "index": {
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "SomeSing",
          "package": "singletons",
          "partial": "Some Sing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#v:SomeSing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe function \u003ccode\u003e\u003ca\u003ecases\u003c/a\u003e\u003c/code\u003e generates a case expression where each right-hand side\n is identical. This may be useful if the type-checker requires knowledge of which\n constructor is used to satisfy equality or type-class constraints, but where\n each constructor is treated the same.\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "cases",
          "package": "singletons",
          "signature": "Name-\u003e q Exp-\u003e q Exp-\u003e q Exp",
          "type": "function"
        },
        "index": {
          "description": "The function cases generates case expression where each right-hand side is identical This may be useful if the type-checker requires knowledge of which constructor is used to satisfy equality or type-class constraints but where each constructor is treated the same",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "cases",
          "normalized": "Name-\u003ea Exp-\u003ea Exp-\u003ea Exp",
          "package": "singletons",
          "signature": "Name-\u003eq Exp-\u003eq Exp-\u003eq Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#v:cases"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a singleton to its unrefined version.\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "fromSing",
          "package": "singletons",
          "signature": "k) -\u003e DemoteRep kparam",
          "source": "src/Data-Singletons-Core.html#fromSing",
          "type": "method"
        },
        "index": {
          "description": "Convert singleton to its unrefined version",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "fromSing",
          "normalized": "a)-\u003eDemoteRep b",
          "package": "singletons",
          "partial": "Sing",
          "signature": "k)-\u003eDemoteRep kparam",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#v:fromSing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate singleton definitions from a type that is already defined.\n For example, the singletons package itself uses\n\u003c/p\u003e\u003cpre\u003e $(genSingletons [''Bool, ''Maybe, ''Either, ''[]])\n\u003c/pre\u003e\u003cp\u003eto generate singletons for Prelude types.\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "genSingletons",
          "package": "singletons",
          "signature": "[Name] -\u003e q [Dec]",
          "source": "src/Data-Singletons-Singletons.html#genSingletons",
          "type": "function"
        },
        "index": {
          "description": "Generate singleton definitions from type that is already defined For example the singletons package itself uses genSingletons Bool Maybe Either to generate singletons for Prelude types",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "genSingletons",
          "normalized": "[Name]-\u003ea[Dec]",
          "package": "singletons",
          "partial": "Singletons",
          "signature": "[Name]-\u003eq[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#v:genSingletons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote every declaration given to the type level, retaining the originals.\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "promote",
          "package": "singletons",
          "signature": "q [Dec] -\u003e q [Dec]",
          "source": "src/Data-Singletons-Promote.html#promote",
          "type": "function"
        },
        "index": {
          "description": "Promote every declaration given to the type level retaining the originals",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "promote",
          "normalized": "a[Dec]-\u003ea[Dec]",
          "package": "singletons",
          "signature": "q[Dec]-\u003eq[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#v:promote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce an instance for '(:==)' (type-level equality) from the given type\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "promoteEqInstance",
          "package": "singletons",
          "signature": "Name -\u003e q [Dec]",
          "source": "src/Data-Singletons-Promote.html#promoteEqInstance",
          "type": "function"
        },
        "index": {
          "description": "Produce an instance for type-level equality from the given type",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "promoteEqInstance",
          "normalized": "Name-\u003ea[Dec]",
          "package": "singletons",
          "partial": "Eq Instance",
          "signature": "Name-\u003eq[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#v:promoteEqInstance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce instances for '(:==)' (type-level equality) from the given types\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "promoteEqInstances",
          "package": "singletons",
          "signature": "[Name] -\u003e q [Dec]",
          "source": "src/Data-Singletons-Promote.html#promoteEqInstances",
          "type": "function"
        },
        "index": {
          "description": "Produce instances for type-level equality from the given types",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "promoteEqInstances",
          "normalized": "[Name]-\u003ea[Dec]",
          "package": "singletons",
          "partial": "Eq Instances",
          "signature": "[Name]-\u003eq[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#v:promoteEqInstances"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePromote each declaration, discarding the originals.\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "promoteOnly",
          "package": "singletons",
          "signature": "q [Dec] -\u003e q [Dec]",
          "source": "src/Data-Singletons-Promote.html#promoteOnly",
          "type": "function"
        },
        "index": {
          "description": "Promote each declaration discarding the originals",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "promoteOnly",
          "normalized": "a[Dec]-\u003ea[Dec]",
          "package": "singletons",
          "partial": "Only",
          "signature": "q[Dec]-\u003eq[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#v:promoteOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce the singleton explicitly. You will likely need the \u003ccode\u003eScopedTypeVariables\u003c/code\u003e\n extension to use this method the way you want.\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "sing",
          "package": "singletons",
          "signature": "Sing a",
          "source": "src/Data-Singletons-Core.html#sing",
          "type": "method"
        },
        "index": {
          "description": "Produce the singleton explicitly You will likely need the ScopedTypeVariables extension to use this method the way you want",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "sing",
          "package": "singletons",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#v:sing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate instance of SDecide for the given type\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "singDecideInstance",
          "package": "singletons",
          "signature": "Name -\u003e q [Dec]",
          "source": "src/Data-Singletons-Singletons.html#singDecideInstance",
          "type": "function"
        },
        "index": {
          "description": "Create instance of SDecide for the given type",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "singDecideInstance",
          "normalized": "Name-\u003ea[Dec]",
          "package": "singletons",
          "partial": "Decide Instance",
          "signature": "Name-\u003eq[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#v:singDecideInstance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate instances of \u003ccode\u003eSDecide\u003c/code\u003e for each type in the list\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "singDecideInstances",
          "package": "singletons",
          "signature": "[Name] -\u003e q [Dec]",
          "source": "src/Data-Singletons-Singletons.html#singDecideInstances",
          "type": "function"
        },
        "index": {
          "description": "Create instances of SDecide for each type in the list",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "singDecideInstances",
          "normalized": "[Name]-\u003ea[Dec]",
          "package": "singletons",
          "partial": "Decide Instances",
          "signature": "[Name]-\u003eq[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#v:singDecideInstances"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate instance of \u003ccode\u003eSEq\u003c/code\u003e and type-level '(:==)' for the given type\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "singEqInstance",
          "package": "singletons",
          "signature": "Name -\u003e q [Dec]",
          "source": "src/Data-Singletons-Singletons.html#singEqInstance",
          "type": "function"
        },
        "index": {
          "description": "Create instance of SEq and type-level for the given type",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "singEqInstance",
          "normalized": "Name-\u003ea[Dec]",
          "package": "singletons",
          "partial": "Eq Instance",
          "signature": "Name-\u003eq[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#v:singEqInstance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate instances of \u003ccode\u003eSEq\u003c/code\u003e (only -- no instance for '(:==)', which \u003ccode\u003eSEq\u003c/code\u003e generally\n relies on) for the given type\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "singEqInstanceOnly",
          "package": "singletons",
          "signature": "Name -\u003e q [Dec]",
          "source": "src/Data-Singletons-Singletons.html#singEqInstanceOnly",
          "type": "function"
        },
        "index": {
          "description": "Create instances of SEq only no instance for which SEq generally relies on for the given type",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "singEqInstanceOnly",
          "normalized": "Name-\u003ea[Dec]",
          "package": "singletons",
          "partial": "Eq Instance Only",
          "signature": "Name-\u003eq[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#v:singEqInstanceOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate instances of \u003ccode\u003eSEq\u003c/code\u003e and type-level '(:==)' for each type in the list\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "singEqInstances",
          "package": "singletons",
          "signature": "[Name] -\u003e q [Dec]",
          "source": "src/Data-Singletons-Singletons.html#singEqInstances",
          "type": "function"
        },
        "index": {
          "description": "Create instances of SEq and type-level for each type in the list",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "singEqInstances",
          "normalized": "[Name]-\u003ea[Dec]",
          "package": "singletons",
          "partial": "Eq Instances",
          "signature": "[Name]-\u003eq[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#v:singEqInstances"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate instances of \u003ccode\u003eSEq\u003c/code\u003e (only -- no instance for '(:==)', which \u003ccode\u003eSEq\u003c/code\u003e generally\n relies on) for each type in the list\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "singEqInstancesOnly",
          "package": "singletons",
          "signature": "[Name] -\u003e q [Dec]",
          "source": "src/Data-Singletons-Singletons.html#singEqInstancesOnly",
          "type": "function"
        },
        "index": {
          "description": "Create instances of SEq only no instance for which SEq generally relies on for each type in the list",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "singEqInstancesOnly",
          "normalized": "[Name]-\u003ea[Dec]",
          "package": "singletons",
          "partial": "Eq Instances Only",
          "signature": "[Name]-\u003eq[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#v:singEqInstancesOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake promoted and singleton versions of all declarations given, retaining\n the original declarations.\n See \u003ca\u003ehttp://www.cis.upenn.edu/~eir/packages/singletons/README.html\u003c/a\u003e for\n further explanation.\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "singletons",
          "package": "singletons",
          "signature": "q [Dec] -\u003e q [Dec]",
          "source": "src/Data-Singletons-Singletons.html#singletons",
          "type": "function"
        },
        "index": {
          "description": "Make promoted and singleton versions of all declarations given retaining the original declarations See http www.cis.upenn.edu eir packages singletons README.html for further explanation",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "singletons",
          "normalized": "a[Dec]-\u003ea[Dec]",
          "package": "singletons",
          "signature": "q[Dec]-\u003eq[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#v:singletons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake promoted and singleton versions of all declarations given, discarding\n the original declarations.\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "singletonsOnly",
          "package": "singletons",
          "signature": "q [Dec] -\u003e q [Dec]",
          "source": "src/Data-Singletons-Singletons.html#singletonsOnly",
          "type": "function"
        },
        "index": {
          "description": "Make promoted and singleton versions of all declarations given discarding the original declarations",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "singletonsOnly",
          "normalized": "a[Dec]-\u003ea[Dec]",
          "package": "singletons",
          "partial": "Only",
          "signature": "q[Dec]-\u003eq[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#v:singletonsOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an unrefined type to an existentially-quantified singleton type.\n\u003c/p\u003e",
          "module": "Data.Singletons.TH",
          "name": "toSing",
          "package": "singletons",
          "signature": "DemoteRep kparam -\u003e SomeSing kparam",
          "source": "src/Data-Singletons-Core.html#toSing",
          "type": "method"
        },
        "index": {
          "description": "Convert an unrefined type to an existentially-quantified singleton type",
          "hierarchy": "Data Singletons TH",
          "module": "Data.Singletons.TH",
          "name": "toSing",
          "normalized": "DemoteRep a-\u003eSomeSing a",
          "package": "singletons",
          "partial": "Sing",
          "signature": "DemoteRep kparam-\u003eSomeSing kparam",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TH.html#v:toSing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines functions and datatypes relating to the singleton for tuples,\n including a singletons version of all the definitions in \u003ccode\u003eData.Tuple\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBecause many of these definitions are produced by Template Haskell,\n it is not possible to create proper Haddock documentation. Please look\n up the corresponding operation in \u003ccode\u003eData.Tuple\u003c/code\u003e. Also, please excuse\n the apparent repeated variable names. This is due to an interaction\n between Template Haskell and Haddock.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Singletons.Tuple",
          "name": "Tuple",
          "package": "singletons",
          "source": "src/Data-Singletons-Tuple.html",
          "type": "module"
        },
        "index": {
          "description": "Defines functions and datatypes relating to the singleton for tuples including singletons version of all the definitions in Data.Tuple Because many of these definitions are produced by Template Haskell it is not possible to create proper Haddock documentation Please look up the corresponding operation in Data.Tuple Also please excuse the apparent repeated variable names This is due to an interaction between Template Haskell and Haddock",
          "hierarchy": "Data Singletons Tuple",
          "module": "Data.Singletons.Tuple",
          "name": "Tuple",
          "package": "singletons",
          "partial": "Tuple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Tuple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Tuple",
          "name": "STuple0",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#STuple0",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Singletons Tuple",
          "module": "Data.Singletons.Tuple",
          "name": "STuple0",
          "package": "singletons",
          "partial": "STuple",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Tuple.html#t:STuple0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Tuple",
          "name": "STuple2",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#STuple2",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Singletons Tuple",
          "module": "Data.Singletons.Tuple",
          "name": "STuple2",
          "package": "singletons",
          "partial": "STuple",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Tuple.html#t:STuple2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Tuple",
          "name": "STuple3",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#STuple3",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Singletons Tuple",
          "module": "Data.Singletons.Tuple",
          "name": "STuple3",
          "package": "singletons",
          "partial": "STuple",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Tuple.html#t:STuple3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Tuple",
          "name": "STuple4",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#STuple4",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Singletons Tuple",
          "module": "Data.Singletons.Tuple",
          "name": "STuple4",
          "package": "singletons",
          "partial": "STuple",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Tuple.html#t:STuple4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Tuple",
          "name": "STuple5",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#STuple5",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Singletons Tuple",
          "module": "Data.Singletons.Tuple",
          "name": "STuple5",
          "package": "singletons",
          "partial": "STuple",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Tuple.html#t:STuple5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Tuple",
          "name": "STuple6",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#STuple6",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Singletons Tuple",
          "module": "Data.Singletons.Tuple",
          "name": "STuple6",
          "package": "singletons",
          "partial": "STuple",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Tuple.html#t:STuple6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Tuple",
          "name": "STuple7",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#STuple7",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Singletons Tuple",
          "module": "Data.Singletons.Tuple",
          "name": "STuple7",
          "package": "singletons",
          "partial": "STuple",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Tuple.html#t:STuple7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Tuple",
          "name": "Swap",
          "package": "singletons",
          "signature": "Swap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Tuple",
          "module": "Data.Singletons.Tuple",
          "name": "Swap",
          "package": "singletons",
          "partial": "Swap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Tuple.html#t:Swap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons.Tuple",
          "name": "sSwap",
          "package": "singletons",
          "signature": "forall t.  Sing t -\u003e Sing (Swap t)",
          "source": "src/Data-Singletons-Tuple.html#sSwap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons Tuple",
          "module": "Data.Singletons.Tuple",
          "name": "sSwap",
          "normalized": "a b Sing c-\u003eSing(Swap c)",
          "package": "singletons",
          "partial": "Swap",
          "signature": "forall t. Sing t-\u003eSing(Swap t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Tuple.html#v:sSwap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines singleton instances making \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e the singleton for\n the kind \u003ccode\u003e*\u003c/code\u003e. The definitions don't fully line up with what is expected\n within the singletons library, so expect unusual results!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Singletons.TypeRepStar",
          "name": "TypeRepStar",
          "package": "singletons",
          "source": "src/Data-Singletons-TypeRepStar.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines singleton instances making Typeable the singleton for the kind The definitions don fully line up with what is expected within the singletons library so expect unusual results",
          "hierarchy": "Data Singletons TypeRepStar",
          "module": "Data.Singletons.TypeRepStar",
          "name": "TypeRepStar",
          "package": "singletons",
          "partial": "Type Rep Star",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-TypeRepStar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines and exports types that are useful when working with singletons.\n Some of these are re-exports from \u003ccode\u003eData.Type.Equality\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Singletons.Types",
          "name": "Types",
          "package": "singletons",
          "source": "src/Data-Singletons-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Defines and exports types that are useful when working with singletons Some of these are re-exports from Data.Type.Equality",
          "hierarchy": "Data Singletons Types",
          "module": "Data.Singletons.Types",
          "name": "Types",
          "package": "singletons",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eDecision\u003c/a\u003e\u003c/code\u003e about a type \u003ccode\u003ea\u003c/code\u003e is either a proof of existence or a proof that \u003ccode\u003ea\u003c/code\u003e\n cannot exist.\n\u003c/p\u003e",
          "module": "Data.Singletons.Types",
          "name": "Decision",
          "package": "singletons",
          "source": "src/Data-Singletons-Types.html#Decision",
          "type": "data"
        },
        "index": {
          "description": "Decision about type is either proof of existence or proof that cannot exist",
          "hierarchy": "Data Singletons Types",
          "module": "Data.Singletons.Types",
          "name": "Decision",
          "package": "singletons",
          "partial": "Decision",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Types.html#t:Decision"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBecause we can never create a value of type \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e, a function that type-checks\n at \u003ccode\u003ea -\u003e Void\u003c/code\u003e shows that objects of type \u003ccode\u003ea\u003c/code\u003e can never exist. Thus, we say that\n \u003ccode\u003ea\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eRefuted\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Singletons.Types",
          "name": "Refuted",
          "package": "singletons",
          "source": "src/Data-Singletons-Types.html#Refuted",
          "type": "type"
        },
        "index": {
          "description": "Because we can never create value of type Void function that type-checks at Void shows that objects of type can never exist Thus we say that is Refuted",
          "hierarchy": "Data Singletons Types",
          "module": "Data.Singletons.Types",
          "name": "Refuted",
          "package": "singletons",
          "partial": "Refuted",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Types.html#t:Refuted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is a reimplementation of Edward Kmett's \u003ccode\u003evoid\u003c/code\u003e package.\n It is included within singletons to avoid depending on \u003ccode\u003evoid\u003c/code\u003e and all the\n packages that depends on (including \u003ccode\u003etext\u003c/code\u003e). If this causes problems for\n you (that singletons has its own \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e type), please let me (Richard Eisenberg)\n know at \u003ccode\u003eeir\u003c/code\u003e at \u003ccode\u003ecis.upenn.edu\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Singletons.Void",
          "name": "Void",
          "package": "singletons",
          "source": "src/Data-Singletons-Void.html",
          "type": "module"
        },
        "index": {
          "description": "This module is reimplementation of Edward Kmett void package It is included within singletons to avoid depending on void and all the packages that depends on including text If this causes problems for you that singletons has its own Void type please let me Richard Eisenberg know at eir at cis.upenn.edu",
          "hierarchy": "Data Singletons Void",
          "module": "Data.Singletons.Void",
          "name": "Void",
          "package": "singletons",
          "partial": "Void",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Void.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA logically uninhabited data type.\n\u003c/p\u003e",
          "module": "Data.Singletons.Void",
          "name": "Void",
          "package": "singletons",
          "source": "src/Data-Singletons-Void.html#Void",
          "type": "data"
        },
        "index": {
          "description": "logically uninhabited data type",
          "hierarchy": "Data Singletons Void",
          "module": "Data.Singletons.Void",
          "name": "Void",
          "package": "singletons",
          "partial": "Void",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Void.html#t:Void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSince \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e values logically don't exist, this witnesses the logical\n reasoning tool of \"ex falso quodlibet\".\n\u003c/p\u003e",
          "module": "Data.Singletons.Void",
          "name": "absurd",
          "package": "singletons",
          "signature": "Void -\u003e a",
          "source": "src/Data-Singletons-Void.html#absurd",
          "type": "function"
        },
        "index": {
          "description": "Since Void values logically don exist this witnesses the logical reasoning tool of ex falso quodlibet",
          "hierarchy": "Data Singletons Void",
          "module": "Data.Singletons.Void",
          "name": "absurd",
          "normalized": "Void-\u003ea",
          "package": "singletons",
          "signature": "Void-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Void.html#v:absurd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e is uninhabited then any \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e that holds only values of type \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e\n is holding no values.\n\u003c/p\u003e",
          "module": "Data.Singletons.Void",
          "name": "vacuous",
          "package": "singletons",
          "signature": "f Void -\u003e f a",
          "source": "src/Data-Singletons-Void.html#vacuous",
          "type": "function"
        },
        "index": {
          "description": "If Void is uninhabited then any Functor that holds only values of type Void is holding no values",
          "hierarchy": "Data Singletons Void",
          "module": "Data.Singletons.Void",
          "name": "vacuous",
          "normalized": "a Void-\u003ea b",
          "package": "singletons",
          "signature": "f Void-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Void.html#v:vacuous"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e is uninhabited then any \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e that holds values of type \u003ccode\u003e\u003ca\u003eVoid\u003c/a\u003e\u003c/code\u003e\n is holding no values.\n\u003c/p\u003e",
          "module": "Data.Singletons.Void",
          "name": "vacuousM",
          "package": "singletons",
          "signature": "m Void -\u003e m a",
          "source": "src/Data-Singletons-Void.html#vacuousM",
          "type": "function"
        },
        "index": {
          "description": "If Void is uninhabited then any Monad that holds values of type Void is holding no values",
          "hierarchy": "Data Singletons Void",
          "module": "Data.Singletons.Void",
          "name": "vacuousM",
          "normalized": "a Void-\u003ea b",
          "package": "singletons",
          "signature": "m Void-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons-Void.html#v:vacuousM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports the basic definitions to use singletons. For routine\n use, consider importing \u003ccode\u003e\u003ca\u003ePrelude\u003c/a\u003e\u003c/code\u003e, which exports constructors\n for singletons based on types in the \u003ccode\u003ePrelude\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYou may also want to read\n \u003ca\u003ehttp://www.cis.upenn.edu/~eir/packages/singletons/README.html\u003c/a\u003e and the\n original paper presenting this library, available at\n \u003ca\u003ehttp://www.cis.upenn.edu/~eir/papers/2012/singletons/paper.pdf\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Singletons",
          "name": "Singletons",
          "package": "singletons",
          "source": "src/Data-Singletons.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports the basic definitions to use singletons For routine use consider importing Prelude which exports constructors for singletons based on types in the Prelude You may also want to read http www.cis.upenn.edu eir packages singletons README.html and the original paper presenting this library available at http www.cis.upenn.edu eir papers singletons paper.pdf",
          "hierarchy": "Data Singletons",
          "module": "Data.Singletons",
          "name": "Singletons",
          "package": "singletons",
          "partial": "Singletons",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient abbreviation for \u003ccode\u003e\u003ca\u003eDemoteRep\u003c/a\u003e\u003c/code\u003e:\n \u003ccode\u003etype Demote (a :: k) = DemoteRep ('KProxy :: KProxy k)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Singletons",
          "name": "Demote",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#Demote",
          "type": "type"
        },
        "index": {
          "description": "Convenient abbreviation for DemoteRep type Demote DemoteRep KProxy KProxy",
          "hierarchy": "Data Singletons",
          "module": "Data.Singletons",
          "name": "Demote",
          "package": "singletons",
          "partial": "Demote",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons.html#t:Demote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe promotion of \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Singletons",
          "name": "Error",
          "package": "singletons",
          "signature": "Error",
          "type": "function"
        },
        "index": {
          "description": "The promotion of error",
          "hierarchy": "Data Singletons",
          "module": "Data.Singletons",
          "name": "Error",
          "package": "singletons",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA concrete, promotable proxy type, for use at the kind level\n There are no instances for this because it is intended at the kind level only\n\u003c/p\u003e",
          "module": "Data.Singletons",
          "name": "KProxy",
          "package": "singletons",
          "type": "data"
        },
        "index": {
          "description": "concrete promotable proxy type for use at the kind level There are no instances for this because it is intended at the kind level only",
          "hierarchy": "Data Singletons",
          "module": "Data.Singletons",
          "name": "KProxy",
          "package": "singletons",
          "partial": "KProxy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons.html#t:KProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenient synonym to refer to the kind of a type variable:\n \u003ccode\u003etype KindOf (a :: k) = ('KProxy :: KProxy k)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Singletons",
          "name": "KindOf",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#KindOf",
          "type": "type"
        },
        "index": {
          "description": "Convenient synonym to refer to the kind of type variable type KindOf KProxy KProxy",
          "hierarchy": "Data Singletons",
          "module": "Data.Singletons",
          "name": "KindOf",
          "package": "singletons",
          "partial": "Kind Of",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons.html#t:KindOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA concrete, poly-kinded proxy type\n\u003c/p\u003e",
          "module": "Data.Singletons",
          "name": "Proxy",
          "package": "singletons",
          "type": "data"
        },
        "index": {
          "description": "concrete poly-kinded proxy type",
          "hierarchy": "Data Singletons",
          "module": "Data.Singletons",
          "name": "Proxy",
          "package": "singletons",
          "partial": "Proxy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons.html#t:Proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSingI\u003c/a\u003e\u003c/code\u003e constraint is essentially an implicitly-passed singleton.\n If you need to satisfy this constraint with an explicit singleton, please\n see \u003ccode\u003ewithSingI\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Singletons",
          "name": "SingI",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#SingI",
          "type": "class"
        },
        "index": {
          "description": "SingI constraint is essentially an implicitly-passed singleton If you need to satisfy this constraint with an explicit singleton please see withSingI",
          "hierarchy": "Data Singletons",
          "module": "Data.Singletons",
          "name": "SingI",
          "package": "singletons",
          "partial": "Sing",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons.html#t:SingI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eSingInstance\u003c/a\u003e\u003c/code\u003e wraps up a \u003ccode\u003e\u003ca\u003eSingI\u003c/a\u003e\u003c/code\u003e instance for explicit handling.\n\u003c/p\u003e",
          "module": "Data.Singletons",
          "name": "SingInstance",
          "package": "singletons",
          "source": "src/Data-Singletons.html#SingInstance",
          "type": "data"
        },
        "index": {
          "description": "SingInstance wraps up SingI instance for explicit handling",
          "hierarchy": "Data Singletons",
          "module": "Data.Singletons",
          "name": "SingInstance",
          "package": "singletons",
          "partial": "Sing Instance",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons.html#t:SingInstance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eSingKind\u003c/a\u003e\u003c/code\u003e class is essentially a \u003cem\u003ekind\u003c/em\u003e class. It classifies all kinds\n for which singletons are defined. The class supports converting between a singleton\n type and the base (unrefined) type which it is built from.\n\u003c/p\u003e",
          "module": "Data.Singletons",
          "name": "SingKind",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#SingKind",
          "type": "class"
        },
        "index": {
          "description": "The SingKind class is essentially kind class It classifies all kinds for which singletons are defined The class supports converting between singleton type and the base unrefined type which it is built from",
          "hierarchy": "Data Singletons",
          "module": "Data.Singletons",
          "name": "SingKind",
          "package": "singletons",
          "partial": "Sing Kind",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons.html#t:SingKind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003cem\u003eexistentially-quantified\u003c/em\u003e singleton. This type is useful when you want a\n singleton type, but there is no way of knowing, at compile-time, what the type\n index will be. To make use of this type, you will generally have to use a\n pattern-match:\n\u003c/p\u003e\u003cpre\u003e foo :: Bool -\u003e ...\n foo b = case toSing b of\n           SomeSing sb -\u003e {- fancy dependently-typed code with sb -}\n\u003c/pre\u003e\u003cp\u003eAn example like the one above may be easier to write using \u003ccode\u003ewithSomeSing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Singletons",
          "name": "SomeSing",
          "package": "singletons",
          "source": "src/Data-Singletons-Core.html#SomeSing",
          "type": "data"
        },
        "index": {
          "description": "An existentially-quantified singleton This type is useful when you want singleton type but there is no way of knowing at compile-time what the type index will be To make use of this type you will generally have to use pattern-match foo Bool foo case toSing of SomeSing sb fancy dependently-typed code with sb An example like the one above may be easier to write using withSomeSing",
          "hierarchy": "Data Singletons",
          "module": "Data.Singletons",
          "name": "SomeSing",
          "package": "singletons",
          "partial": "Some Sing",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons.html#t:SomeSing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons",
          "name": "Proxy",
          "package": "singletons",
          "signature": "Proxy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons",
          "module": "Data.Singletons",
          "name": "Proxy",
          "package": "singletons",
          "partial": "Proxy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons.html#v:Proxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Singletons",
          "name": "SingInstance",
          "package": "singletons",
          "signature": "SingInstance a",
          "source": "src/Data-Singletons.html#SingInstance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Singletons",
          "module": "Data.Singletons",
          "name": "SingInstance",
          "package": "singletons",
          "partial": "Sing Instance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons.html#v:SingInstance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGHC 7.8 sometimes warns about incomplete pattern matches when no such\n patterns are possible, due to GADT constraints.\n See the bug report at \u003ca\u003ehttps://ghc.haskell.org/trac/ghc/ticket/3927\u003c/a\u003e.\n In such cases, it's useful to have a catch-all pattern that then has\n \u003ccode\u003e\u003ca\u003ebugInGHC\u003c/a\u003e\u003c/code\u003e as its right-hand side.\n\u003c/p\u003e",
          "module": "Data.Singletons",
          "name": "bugInGHC",
          "package": "singletons",
          "signature": "forall a.  a",
          "source": "src/Data-Singletons.html#bugInGHC",
          "type": "function"
        },
        "index": {
          "description": "GHC sometimes warns about incomplete pattern matches when no such patterns are possible due to GADT constraints See the bug report at https ghc.haskell.org trac ghc ticket In such cases it useful to have catch-all pattern that then has bugInGHC as its right-hand side",
          "hierarchy": "Data Singletons",
          "module": "Data.Singletons",
          "name": "bugInGHC",
          "package": "singletons",
          "partial": "In GHC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons.html#v:bugInGHC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a singleton to its unrefined version.\n\u003c/p\u003e",
          "module": "Data.Singletons",
          "name": "fromSing",
          "package": "singletons",
          "signature": "k) -\u003e DemoteRep kparam",
          "source": "src/Data-Singletons-Core.html#fromSing",
          "type": "method"
        },
        "index": {
          "description": "Convert singleton to its unrefined version",
          "hierarchy": "Data Singletons",
          "module": "Data.Singletons",
          "name": "fromSing",
          "normalized": "a)-\u003eDemoteRep b",
          "package": "singletons",
          "partial": "Sing",
          "signature": "k)-\u003eDemoteRep kparam",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons.html#v:fromSing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe singleton for \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Singletons",
          "name": "sError",
          "package": "singletons",
          "signature": "Symbol) -\u003e a",
          "source": "src/Data-Singletons.html#sError",
          "type": "function"
        },
        "index": {
          "description": "The singleton for error",
          "hierarchy": "Data Singletons",
          "module": "Data.Singletons",
          "name": "sError",
          "normalized": "Symbol)-\u003ea",
          "package": "singletons",
          "partial": "Error",
          "signature": "Symbol)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons.html#v:sError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce the singleton explicitly. You will likely need the \u003ccode\u003eScopedTypeVariables\u003c/code\u003e\n extension to use this method the way you want.\n\u003c/p\u003e",
          "module": "Data.Singletons",
          "name": "sing",
          "package": "singletons",
          "signature": "Sing a",
          "source": "src/Data-Singletons-Core.html#sing",
          "type": "method"
        },
        "index": {
          "description": "Produce the singleton explicitly You will likely need the ScopedTypeVariables extension to use this method the way you want",
          "hierarchy": "Data Singletons",
          "module": "Data.Singletons",
          "name": "sing",
          "package": "singletons",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons.html#v:sing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows creation of a singleton when a proxy is at hand.\n\u003c/p\u003e",
          "module": "Data.Singletons",
          "name": "singByProxy",
          "package": "singletons",
          "signature": "proxy a -\u003e Sing a",
          "source": "src/Data-Singletons.html#singByProxy",
          "type": "function"
        },
        "index": {
          "description": "Allows creation of singleton when proxy is at hand",
          "hierarchy": "Data Singletons",
          "module": "Data.Singletons",
          "name": "singByProxy",
          "normalized": "a b-\u003eSing b",
          "package": "singletons",
          "partial": "By Proxy",
          "signature": "proxy a-\u003eSing a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons.html#v:singByProxy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows creation of a singleton when a \u003ccode\u003eproxy#\u003c/code\u003e is at hand.\n\u003c/p\u003e",
          "module": "Data.Singletons",
          "name": "singByProxy#",
          "package": "singletons",
          "signature": "Proxy# a -\u003e Sing a",
          "source": "src/Data-Singletons.html#singByProxy%23",
          "type": "function"
        },
        "index": {
          "description": "Allows creation of singleton when proxy is at hand",
          "hierarchy": "Data Singletons",
          "module": "Data.Singletons",
          "name": "singByProxy#",
          "normalized": "Proxy # a-\u003eSing a",
          "package": "singletons",
          "partial": "By Proxy",
          "signature": "Proxy # a-\u003eSing a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons.html#v:singByProxy-35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an implicit singleton (a \u003ccode\u003e\u003ca\u003eSingI\u003c/a\u003e\u003c/code\u003e instance) from an explicit one.\n\u003c/p\u003e",
          "module": "Data.Singletons",
          "name": "singInstance",
          "package": "singletons",
          "signature": "forall a.  Sing a -\u003e SingInstance a",
          "source": "src/Data-Singletons.html#singInstance",
          "type": "function"
        },
        "index": {
          "description": "Get an implicit singleton SingI instance from an explicit one",
          "hierarchy": "Data Singletons",
          "module": "Data.Singletons",
          "name": "singInstance",
          "normalized": "a b Sing c-\u003eSingInstance c",
          "package": "singletons",
          "partial": "Instance",
          "signature": "forall a. Sing a-\u003eSingInstance a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons.html#v:singInstance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience function that names a singleton satisfying a certain\n property.  If the singleton does not satisfy the property, then the function\n returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. The property is expressed in terms of the underlying\n representation of the singleton.\n\u003c/p\u003e",
          "module": "Data.Singletons",
          "name": "singThat",
          "package": "singletons",
          "signature": "(Demote a -\u003e Bool) -\u003e Maybe (Sing a)",
          "source": "src/Data-Singletons.html#singThat",
          "type": "function"
        },
        "index": {
          "description": "convenience function that names singleton satisfying certain property If the singleton does not satisfy the property then the function returns Nothing The property is expressed in terms of the underlying representation of the singleton",
          "hierarchy": "Data Singletons",
          "module": "Data.Singletons",
          "name": "singThat",
          "normalized": "(Demote a-\u003eBool)-\u003eMaybe(Sing a)",
          "package": "singletons",
          "partial": "That",
          "signature": "(Demote a-\u003eBool)-\u003eMaybe(Sing a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons.html#v:singThat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert an unrefined type to an existentially-quantified singleton type.\n\u003c/p\u003e",
          "module": "Data.Singletons",
          "name": "toSing",
          "package": "singletons",
          "signature": "DemoteRep kparam -\u003e SomeSing kparam",
          "source": "src/Data-Singletons-Core.html#toSing",
          "type": "method"
        },
        "index": {
          "description": "Convert an unrefined type to an existentially-quantified singleton type",
          "hierarchy": "Data Singletons",
          "module": "Data.Singletons",
          "name": "toSing",
          "normalized": "DemoteRep a-\u003eSomeSing a",
          "package": "singletons",
          "partial": "Sing",
          "signature": "DemoteRep kparam-\u003eSomeSing kparam",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons.html#v:toSing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA convenience function useful when we need to name a singleton value\n multiple times. Without this function, each use of \u003ccode\u003e\u003ca\u003esing\u003c/a\u003e\u003c/code\u003e could potentially\n refer to a different singleton, and one has to use type signatures (often\n with \u003ccode\u003eScopedTypeVariables\u003c/code\u003e) to ensure that they are the same.\n\u003c/p\u003e",
          "module": "Data.Singletons",
          "name": "withSing",
          "package": "singletons",
          "signature": "(Sing a -\u003e b) -\u003e b",
          "source": "src/Data-Singletons.html#withSing",
          "type": "function"
        },
        "index": {
          "description": "convenience function useful when we need to name singleton value multiple times Without this function each use of sing could potentially refer to different singleton and one has to use type signatures often with ScopedTypeVariables to ensure that they are the same",
          "hierarchy": "Data Singletons",
          "module": "Data.Singletons",
          "name": "withSing",
          "normalized": "(Sing a-\u003eb)-\u003eb",
          "package": "singletons",
          "partial": "Sing",
          "signature": "(Sing a-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons.html#v:withSing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience function for creating a context with an implicit singleton\n available.\n\u003c/p\u003e",
          "module": "Data.Singletons",
          "name": "withSingI",
          "package": "singletons",
          "signature": "r) -\u003e r",
          "source": "src/Data-Singletons.html#withSingI",
          "type": "function"
        },
        "index": {
          "description": "Convenience function for creating context with an implicit singleton available",
          "hierarchy": "Data Singletons",
          "module": "Data.Singletons",
          "name": "withSingI",
          "normalized": "a)-\u003ea",
          "package": "singletons",
          "partial": "Sing",
          "signature": "r)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons.html#v:withSingI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a normal datatype (like \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e) to a singleton for that datatype,\n passing it into a continuation.\n\u003c/p\u003e",
          "module": "Data.Singletons",
          "name": "withSomeSing",
          "package": "singletons",
          "signature": "KProxy k)-\u003e (forall a.  Sing a -\u003e r)-\u003e r",
          "type": "function"
        },
        "index": {
          "description": "Convert normal datatype like Bool to singleton for that datatype passing it into continuation",
          "hierarchy": "Data Singletons",
          "module": "Data.Singletons",
          "name": "withSomeSing",
          "normalized": "KProxy a)-\u003e(b c Sing d-\u003ee)-\u003ee",
          "package": "singletons",
          "partial": "Some Sing",
          "signature": "KProxy k)-\u003e(forall a. Sing a-\u003er)-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/singletons/docs/Data-Singletons.html#v:withSomeSing"
      }
    }
  ]
]