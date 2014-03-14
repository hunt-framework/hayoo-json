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
        "word": "notcpp"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module uses scope lookup techniques to either export\n \u003ccode\u003e\u003ca\u003elookupValueName\u003c/a\u003e\u003c/code\u003e from \u003ccode\u003eLanguage.Haskell.TH\u003c/code\u003e, or define\n its own \u003ccode\u003e\u003ca\u003elookupValueName\u003c/a\u003e\u003c/code\u003e, which attempts to do the\n same job with just \u003ccode\u003e\u003ca\u003ereify\u003c/a\u003e\u003c/code\u003e. This will sometimes fail, but if it\n succeeds it will give the answer that the real function would have\n given.\n\u003c/p\u003e\u003cp\u003eThe idea is that if you use lookupValueName from this module,\n your client code will automatically use the best available name\n lookup mechanism. This means that e.g. \u003ccode\u003escopeLookup\u003c/code\u003e can work\n very well on recent GHCs and less well but still somewhat\n usefully on older GHCs.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "NotCPP.LookupValueName",
          "name": "LookupValueName",
          "package": "notcpp",
          "source": "src/NotCPP-LookupValueName.html",
          "type": "module"
        },
        "index": {
          "description": "This module uses scope lookup techniques to either export lookupValueName from Language.Haskell.TH or define its own lookupValueName which attempts to do the same job with just reify This will sometimes fail but if it succeeds it will give the answer that the real function would have given The idea is that if you use lookupValueName from this module your client code will automatically use the best available name lookup mechanism This means that e.g scopeLookup can work very well on recent GHCs and less well but still somewhat usefully on older GHCs",
          "hierarchy": "NotCPP LookupValueName",
          "module": "NotCPP.LookupValueName",
          "name": "LookupValueName",
          "package": "notcpp",
          "partial": "Lookup Value Name",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/notcpp/docs/NotCPP-LookupValueName.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up the given name in the (value namespace of the) current splice's scope. See \u003ca\u003eLanguage.Haskell.TH.Syntax\u003c/a\u003e for more details.\n\u003c/p\u003e",
          "module": "NotCPP.LookupValueName",
          "name": "lookupValueName",
          "package": "notcpp",
          "signature": "String -\u003e Q (Maybe Name)",
          "type": "function"
        },
        "index": {
          "description": "Look up the given name in the value namespace of the current splice scope See Language.Haskell.TH.Syntax for more details",
          "hierarchy": "NotCPP LookupValueName",
          "module": "NotCPP.LookupValueName",
          "name": "lookupValueName",
          "normalized": "String-\u003eQ(Maybe Name)",
          "package": "notcpp",
          "partial": "Value Name",
          "signature": "String-\u003eQ(Maybe Name)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/notcpp/docs/NotCPP-LookupValueName.html#v:lookupValueName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe orphan instance problem is well-known in Haskell. This module\n by no means purports to solve the problem, but provides a workaround\n that may be significantly less awful than the status quo in some\n cases.\n\u003c/p\u003e\u003cp\u003eSay I think that the \u003ccode\u003e\u003ca\u003eName\u003c/a\u003e\u003c/code\u003e type should have an \u003ccode\u003eIsString\u003c/code\u003e instance.\n But I don't control either the class or the type, so if I define the\n instance, and then the template-haskell package defines one, my code\n is going to break.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003esafeInstance\u003c/a\u003e\u003c/code\u003e can help me to solve this problem:\n\u003c/p\u003e\u003cpre\u003e safeInstance ''IsString [t| Name |] [d|\n   fromString = mkName |]\n\u003c/pre\u003e\u003cp\u003eThis will declare an instance only if one doesn't already exist.\n Now anyone importing your module is guaranteed to get an instance\n one way or the other.\n\u003c/p\u003e\u003cp\u003eThis module is still highly experimental. The example given above\n does work, but anything involving type variables or complex method\n bodies may be less fortunate. The names of the methods are mangled\n a bit, so using recursion to define them may not work. Define the\n method outside the code and then use a simple binding as above.\n\u003c/p\u003e\u003cp\u003eIf you use this code (successfully or unsuccessfully!), go fetch\n the maintainer address from the cabal file and let me know!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "NotCPP.OrphanEvasion",
          "name": "OrphanEvasion",
          "package": "notcpp",
          "source": "src/NotCPP-OrphanEvasion.html",
          "type": "module"
        },
        "index": {
          "description": "The orphan instance problem is well-known in Haskell This module by no means purports to solve the problem but provides workaround that may be significantly less awful than the status quo in some cases Say think that the Name type should have an IsString instance But don control either the class or the type so if define the instance and then the template-haskell package defines one my code is going to break safeInstance can help me to solve this problem safeInstance IsString Name fromString mkName This will declare an instance only if one doesn already exist Now anyone importing your module is guaranteed to get an instance one way or the other This module is still highly experimental The example given above does work but anything involving type variables or complex method bodies may be less fortunate The names of the methods are mangled bit so using recursion to define them may not work Define the method outside the code and then use simple binding as above If you use this code successfully or unsuccessfully go fetch the maintainer address from the cabal file and let me know",
          "hierarchy": "NotCPP OrphanEvasion",
          "module": "NotCPP.OrphanEvasion",
          "name": "OrphanEvasion",
          "package": "notcpp",
          "partial": "Orphan Evasion",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/notcpp/docs/NotCPP-OrphanEvasion.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty type used only to signify a multiparameter typeclass in\n \u003ccode\u003e\u003ca\u003esafeInstance\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "NotCPP.OrphanEvasion",
          "name": "MultiParams",
          "package": "notcpp",
          "source": "src/NotCPP-OrphanEvasion.html#MultiParams",
          "type": "data"
        },
        "index": {
          "description": "An empty type used only to signify multiparameter typeclass in safeInstance",
          "hierarchy": "NotCPP OrphanEvasion",
          "module": "NotCPP.OrphanEvasion",
          "name": "MultiParams",
          "package": "notcpp",
          "partial": "Multi Params",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/notcpp/docs/NotCPP-OrphanEvasion.html#t:MultiParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003esafeInstance\u003c/a\u003e\u003c/code\u003e is a more convenient version of \u003ccode\u003e\u003ca\u003esafeInstance'\u003c/a\u003e\u003c/code\u003e\n that takes the context and type from a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eQ\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e with the intention\n that it be supplied using a type-quote.\n\u003c/p\u003e\u003cp\u003eTo define an instance \u003ccode\u003eShow a =\u003e Show (Wrapper a)\u003c/code\u003e, you'd use:\n\u003c/p\u003e\u003cpre\u003e safeInstance ''Show [t| Show a =\u003e Wrapper a |]\n   [d| show _ = \"stuff\" |]\n\u003c/pre\u003e\u003cp\u003eTo define an instance of a multi-param type class, use the\n \u003ccode\u003e\u003ca\u003eMultiParams\u003c/a\u003e\u003c/code\u003e type constructor with a tuple:\n\u003c/p\u003e\u003cpre\u003e safeInstance ''MonadState\n   [t| MonadState s m =\u003e MultiParams (s, MaybeT m) |]\n   [d| put = ... |]\n\u003c/pre\u003e",
          "module": "NotCPP.OrphanEvasion",
          "name": "safeInstance",
          "package": "notcpp",
          "signature": "Name -\u003e Q Type -\u003e Q [Dec] -\u003e Q [Dec]",
          "source": "src/NotCPP-OrphanEvasion.html#safeInstance",
          "type": "function"
        },
        "index": {
          "description": "safeInstance is more convenient version of safeInstance that takes the context and type from Type with the intention that it be supplied using type-quote To define an instance Show Show Wrapper you use safeInstance Show Show Wrapper show stuff To define an instance of multi-param type class use the MultiParams type constructor with tuple safeInstance MonadState MonadState MultiParams MaybeT put",
          "hierarchy": "NotCPP OrphanEvasion",
          "module": "NotCPP.OrphanEvasion",
          "name": "safeInstance",
          "normalized": "Name-\u003eQ Type-\u003eQ[Dec]-\u003eQ[Dec]",
          "package": "notcpp",
          "partial": "Instance",
          "signature": "Name-\u003eQ Type-\u003eQ[Dec]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/notcpp/docs/NotCPP-OrphanEvasion.html#v:safeInstance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003esafeInstance'\u003c/a\u003e\u003c/code\u003e className cxt types methods\u003c/code\u003e produces an instance\n of the given class if and only if one doesn't already exist.\n\u003c/p\u003e\u003cp\u003eSee \u003ccode\u003e\u003ca\u003esafeInstance\u003c/a\u003e\u003c/code\u003e for a simple way to construct the \u003ccode\u003e\u003ca\u003eCxt\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e[\u003ccode\u003e\u003ca\u003eType\u003c/a\u003e\u003c/code\u003e]\u003c/code\u003e parameters.\n\u003c/p\u003e",
          "module": "NotCPP.OrphanEvasion",
          "name": "safeInstance'",
          "package": "notcpp",
          "signature": "Name -\u003e Cxt -\u003e [Type] -\u003e Q [Dec] -\u003e Q [Dec]",
          "source": "src/NotCPP-OrphanEvasion.html#safeInstance%27",
          "type": "function"
        },
        "index": {
          "description": "safeInstance className cxt types methods produces an instance of the given class if and only if one doesn already exist See safeInstance for simple way to construct the Cxt and Type parameters",
          "hierarchy": "NotCPP OrphanEvasion",
          "module": "NotCPP.OrphanEvasion",
          "name": "safeInstance'",
          "normalized": "Name-\u003eCxt-\u003e[Type]-\u003eQ[Dec]-\u003eQ[Dec]",
          "package": "notcpp",
          "partial": "Instance'",
          "signature": "Name-\u003eCxt-\u003e[Type]-\u003eQ[Dec]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/notcpp/docs/NotCPP-OrphanEvasion.html#v:safeInstance-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exports \u003ccode\u003e\u003ca\u003escopeLookup\u003c/a\u003e\u003c/code\u003e, which will find a variable or\n value constructor for you and present it for your use. E.g. at some\n point in the history of the acid-state package, \u003ccode\u003eopenAcidState\u003c/code\u003e was\n renamed \u003ccode\u003eopenLocalState\u003c/code\u003e; for compatibility with both, you could\n use:\n\u003c/p\u003e\u003cpre\u003e openState :: IO (AcidState st)\n openState = case $(scopeLookup \"openLocalState\") of\n   Just open -\u003e open defaultState\n   Nothing -\u003e case $(scopeLookup \"openAcidState\") of\n     Just open -\u003e open defaultState\n     Nothing -\u003e error\n       \"openState: runtime name resolution has its drawbacks :/\"\n\u003c/pre\u003e\u003cp\u003eOr, for this specific case, you can use \u003ccode\u003e\u003ca\u003escopeLookups\u003c/a\u003e\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e openState :: IO (AcidState st)\n openState = open defaultState\n  where\n   open = $(scopeLookups [\"openLocalState\",\"openAcidState\"])\n\u003c/pre\u003e\u003cp\u003eNow if neither of the names are found then TH will throw a\n compile-time error.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "NotCPP.ScopeLookup",
          "name": "ScopeLookup",
          "package": "notcpp",
          "source": "src/NotCPP-ScopeLookup.html",
          "type": "module"
        },
        "index": {
          "description": "This module exports scopeLookup which will find variable or value constructor for you and present it for your use E.g at some point in the history of the acid-state package openAcidState was renamed openLocalState for compatibility with both you could use openState IO AcidState st openState case scopeLookup openLocalState of Just open open defaultState Nothing case scopeLookup openAcidState of Just open open defaultState Nothing error openState runtime name resolution has its drawbacks Or for this specific case you can use scopeLookups openState IO AcidState st openState open defaultState where open scopeLookups openLocalState openAcidState Now if neither of the names are found then TH will throw compile-time error",
          "hierarchy": "NotCPP ScopeLookup",
          "module": "NotCPP.ScopeLookup",
          "name": "ScopeLookup",
          "package": "notcpp",
          "partial": "Scope Lookup",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/notcpp/docs/NotCPP-ScopeLookup.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eVarE\u003c/a\u003e\u003c/code\u003e n)\u003c/code\u003e if the info relates to a value called\n \u003ccode\u003en\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if it relates to a different sort of thing.\n\u003c/p\u003e",
          "module": "NotCPP.ScopeLookup",
          "name": "infoToExp",
          "package": "notcpp",
          "signature": "Info -\u003e Maybe Exp",
          "source": "src/NotCPP-Utils.html#infoToExp",
          "type": "function"
        },
        "index": {
          "description": "Returns Just VarE if the info relates to value called or Nothing if it relates to different sort of thing",
          "hierarchy": "NotCPP ScopeLookup",
          "module": "NotCPP.ScopeLookup",
          "name": "infoToExp",
          "normalized": "Info-\u003eMaybe Exp",
          "package": "notcpp",
          "partial": "To Exp",
          "signature": "Info-\u003eMaybe Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/notcpp/docs/NotCPP-ScopeLookup.html#v:infoToExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e into an expression representing \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, and\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e into an expression representing \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e applied to the\n expression in \u003ccode\u003ex\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "NotCPP.ScopeLookup",
          "name": "liftMaybe",
          "package": "notcpp",
          "signature": "Maybe Exp -\u003e Exp",
          "source": "src/NotCPP-Utils.html#liftMaybe",
          "type": "function"
        },
        "index": {
          "description": "Turns Nothing into an expression representing Nothing and Just into an expression representing Just applied to the expression in",
          "hierarchy": "NotCPP ScopeLookup",
          "module": "NotCPP.ScopeLookup",
          "name": "liftMaybe",
          "normalized": "Maybe Exp-\u003eExp",
          "package": "notcpp",
          "partial": "Maybe",
          "signature": "Maybe Exp-\u003eExp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/notcpp/docs/NotCPP-ScopeLookup.html#v:liftMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA useful variant of \u003ccode\u003e\u003ca\u003ereify\u003c/a\u003e\u003c/code\u003e that returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e instead of\n halting compilation when an error occurs (e.g. because the given\n name was not in scope).\n\u003c/p\u003e",
          "module": "NotCPP.ScopeLookup",
          "name": "maybeReify",
          "package": "notcpp",
          "signature": "Name -\u003e Q (Maybe Info)",
          "source": "src/NotCPP-Utils.html#maybeReify",
          "type": "function"
        },
        "index": {
          "description": "useful variant of reify that returns Nothing instead of halting compilation when an error occurs e.g because the given name was not in scope",
          "hierarchy": "NotCPP ScopeLookup",
          "module": "NotCPP.ScopeLookup",
          "name": "maybeReify",
          "normalized": "Name-\u003eQ(Maybe Info)",
          "package": "notcpp",
          "partial": "Reify",
          "signature": "Name-\u003eQ(Maybe Info)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/notcpp/docs/NotCPP-ScopeLookup.html#v:maybeReify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns a possibly-failing \u003ccode\u003e\u003ca\u003eQ\u003c/a\u003e\u003c/code\u003e action into one returning a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e\n value.\n\u003c/p\u003e",
          "module": "NotCPP.ScopeLookup",
          "name": "recoverMaybe",
          "package": "notcpp",
          "signature": "Q a -\u003e Q (Maybe a)",
          "source": "src/NotCPP-Utils.html#recoverMaybe",
          "type": "function"
        },
        "index": {
          "description": "Turns possibly-failing action into one returning Maybe value",
          "hierarchy": "NotCPP ScopeLookup",
          "module": "NotCPP.ScopeLookup",
          "name": "recoverMaybe",
          "normalized": "Q a-\u003eQ(Maybe a)",
          "package": "notcpp",
          "partial": "Maybe",
          "signature": "Q a-\u003eQ(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/notcpp/docs/NotCPP-ScopeLookup.html#v:recoverMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduces a spliceable expression which expands to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e val\u003c/code\u003e if\n the given string refers to a value \u003ccode\u003eval\u003c/code\u003e in scope, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n otherwise.\n\u003c/p\u003e\u003cpre\u003escopeLookup = \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eliftMaybe\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003escopeLookup'\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "NotCPP.ScopeLookup",
          "name": "scopeLookup",
          "package": "notcpp",
          "signature": "String -\u003e Q Exp",
          "source": "src/NotCPP-ScopeLookup.html#scopeLookup",
          "type": "function"
        },
        "index": {
          "description": "Produces spliceable expression which expands to Just val if the given string refers to value val in scope or Nothing otherwise scopeLookup fmap liftMaybe scopeLookup",
          "hierarchy": "NotCPP ScopeLookup",
          "module": "NotCPP.ScopeLookup",
          "name": "scopeLookup",
          "normalized": "String-\u003eQ Exp",
          "package": "notcpp",
          "partial": "Lookup",
          "signature": "String-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/notcpp/docs/NotCPP-ScopeLookup.html#v:scopeLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduces \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e if the given string names the value \u003ccode\u003ex\u003c/code\u003e,\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "NotCPP.ScopeLookup",
          "name": "scopeLookup'",
          "package": "notcpp",
          "signature": "String -\u003e Q (Maybe Exp)",
          "source": "src/NotCPP-ScopeLookup.html#scopeLookup%27",
          "type": "function"
        },
        "index": {
          "description": "Produces Just if the given string names the value or Nothing otherwise",
          "hierarchy": "NotCPP ScopeLookup",
          "module": "NotCPP.ScopeLookup",
          "name": "scopeLookup'",
          "normalized": "String-\u003eQ(Maybe Exp)",
          "package": "notcpp",
          "partial": "Lookup'",
          "signature": "String-\u003eQ(Maybe Exp)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/notcpp/docs/NotCPP-ScopeLookup.html#v:scopeLookup-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds the first string in the list that names a value, and produces\n a spliceable expression of that value, or reports a compile error if\n it fails.\n\u003c/p\u003e",
          "module": "NotCPP.ScopeLookup",
          "name": "scopeLookups",
          "package": "notcpp",
          "signature": "[String] -\u003e Q Exp",
          "source": "src/NotCPP-ScopeLookup.html#scopeLookups",
          "type": "function"
        },
        "index": {
          "description": "Finds the first string in the list that names value and produces spliceable expression of that value or reports compile error if it fails",
          "hierarchy": "NotCPP ScopeLookup",
          "module": "NotCPP.ScopeLookup",
          "name": "scopeLookups",
          "normalized": "[String]-\u003eQ Exp",
          "package": "notcpp",
          "partial": "Lookups",
          "signature": "[String]-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/notcpp/docs/NotCPP-ScopeLookup.html#v:scopeLookups"
      }
    }
  ]
]