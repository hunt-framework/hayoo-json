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
        "word": "compose-trans"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic definitions in the category \u003ccode\u003e(* -\u003e *)\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.Category",
          "name": "Category",
          "package": "compose-trans",
          "source": "src/Control-Monad-Trans-Category.html",
          "type": "module"
        },
        "index": {
          "description": "Basic definitions in the category",
          "hierarchy": "Control Monad Trans Category",
          "module": "Control.Monad.Trans.Category",
          "name": "Category",
          "package": "compose-trans",
          "partial": "Category",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/compose-trans/docs/Control-Monad-Trans-Category.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003et\u003c/code\u003e is an endofunctor in our category, then \u003ccode\u003et :$ m\u003c/code\u003e is basically the same as \u003ccode\u003et m\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Category",
          "name": ":$",
          "package": "compose-trans",
          "source": "src/Control-Monad-Trans-Category.html#%3A%24",
          "type": "newtype"
        },
        "index": {
          "description": "If is an endofunctor in our category then is basically the same as",
          "hierarchy": "Control Monad Trans Category",
          "module": "Control.Monad.Trans.Category",
          "name": ":$",
          "package": "compose-trans",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/compose-trans/docs/Control-Monad-Trans-Category.html#t::-36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003em :-\u003e n\u003c/code\u003e is the set of morphisms (from \u003ccode\u003em\u003c/code\u003e to \u003ccode\u003en\u003c/code\u003e, naturally) in our category.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Category",
          "name": ":-\u003e",
          "package": "compose-trans",
          "source": "src/Control-Monad-Trans-Category.html#%3A-%3E",
          "type": "type"
        },
        "index": {
          "description": "is the set of morphisms from to naturally in our category",
          "hierarchy": "Control Monad Trans Category",
          "module": "Control.Monad.Trans.Category",
          "name": ":-\u003e",
          "package": "compose-trans",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/compose-trans/docs/Control-Monad-Trans-Category.html#t::-45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003et1\u003c/code\u003e and \u003ccode\u003et2\u003c/code\u003e are endofunctorsm then \u003ccode\u003et2 :. t1\u003c/code\u003e is their composition (which is also an endofunctor)\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Category",
          "name": ":.",
          "package": "compose-trans",
          "source": "src/Control-Monad-Trans-Category.html#%3A.",
          "type": "newtype"
        },
        "index": {
          "description": "If t1 and t2 are endofunctorsm then t2 t1 is their composition which is also an endofunctor",
          "hierarchy": "Control Monad Trans Category",
          "module": "Control.Monad.Trans.Category",
          "name": ":.",
          "package": "compose-trans",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/compose-trans/docs/Control-Monad-Trans-Category.html#t::."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003em\u003c/code\u003e is an algebra over an endofunctor \u003ccode\u003et\u003c/code\u003e, then it's structure morphism has the type \u003ccode\u003eInst t m\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Category",
          "name": "Inst",
          "package": "compose-trans",
          "source": "src/Control-Monad-Trans-Category.html#Inst",
          "type": "type"
        },
        "index": {
          "description": "If is an algebra over an endofunctor then it structure morphism has the type Inst",
          "hierarchy": "Control Monad Trans Category",
          "module": "Control.Monad.Trans.Category",
          "name": "Inst",
          "package": "compose-trans",
          "partial": "Inst",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/compose-trans/docs/Control-Monad-Trans-Category.html#t:Inst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Category",
          "name": "ApplyF",
          "package": "compose-trans",
          "signature": "ApplyF",
          "source": "src/Control-Monad-Trans-Category.html#%3A%24",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Category",
          "module": "Control.Monad.Trans.Category",
          "name": "ApplyF",
          "package": "compose-trans",
          "partial": "Apply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compose-trans/docs/Control-Monad-Trans-Category.html#v:ApplyF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Category",
          "name": "ComposeF",
          "package": "compose-trans",
          "signature": "ComposeF",
          "source": "src/Control-Monad-Trans-Category.html#%3A.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Category",
          "module": "Control.Monad.Trans.Category",
          "name": "ComposeF",
          "package": "compose-trans",
          "partial": "Compose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compose-trans/docs/Control-Monad-Trans-Category.html#v:ComposeF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Category",
          "name": "runApplyF",
          "package": "compose-trans",
          "signature": "t m a",
          "source": "src/Control-Monad-Trans-Category.html#%3A%24",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Category",
          "module": "Control.Monad.Trans.Category",
          "name": "runApplyF",
          "package": "compose-trans",
          "partial": "Apply",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compose-trans/docs/Control-Monad-Trans-Category.html#v:runApplyF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Category",
          "name": "runComposeF",
          "package": "compose-trans",
          "signature": "(t2 :$ (t1 :$ m)) a",
          "source": "src/Control-Monad-Trans-Category.html#%3A.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Category",
          "module": "Control.Monad.Trans.Category",
          "name": "runComposeF",
          "package": "compose-trans",
          "partial": "Compose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compose-trans/docs/Control-Monad-Trans-Category.html#v:runComposeF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003eMonad\u003c/code\u003e transformers. There are also \u003ccode\u003eMonadPlus\u003c/code\u003e and \u003ccode\u003eMonadFix\u003c/code\u003e transformes, see the corresponding modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.Monad",
          "name": "Monad",
          "package": "compose-trans",
          "source": "src/Control-Monad-Trans-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "Monad transformers There are also MonadPlus and MonadFix transformes see the corresponding modules",
          "hierarchy": "Control Monad Trans Monad",
          "module": "Control.Monad.Trans.Monad",
          "name": "Monad",
          "package": "compose-trans",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/compose-trans/docs/Control-Monad-Trans-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eMonadM m\u003c/code\u003e is actually a free monad generated by \u003ccode\u003em\u003c/code\u003e. \u003ccode\u003eMonadM\u003c/code\u003e is a monad itself (on the \u003ccode\u003e(* -\u003e *)\u003c/code\u003e category), as usually happens with free structures.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Monad",
          "name": "MonadM",
          "package": "compose-trans",
          "source": "src/Control-Monad-Trans-Monad.html#MonadM",
          "type": "data"
        },
        "index": {
          "description": "MonadM is actually free monad generated by MonadM is monad itself on the category as usually happens with free structures",
          "hierarchy": "Control Monad Trans Monad",
          "module": "Control.Monad.Trans.Monad",
          "name": "MonadM",
          "package": "compose-trans",
          "partial": "Monad",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/compose-trans/docs/Control-Monad-Trans-Monad.html#t:MonadM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA composable monad transformer.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Monad",
          "name": "TransM",
          "package": "compose-trans",
          "source": "src/Control-Monad-Trans-Monad.html#TransM",
          "type": "class"
        },
        "index": {
          "description": "composable monad transformer",
          "hierarchy": "Control Monad Trans Monad",
          "module": "Control.Monad.Trans.Monad",
          "name": "TransM",
          "package": "compose-trans",
          "partial": "Trans",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/compose-trans/docs/Control-Monad-Trans-Monad.html#t:TransM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSometimes we need an \u003ccode\u003einstance Monad T\u003c/code\u003e, while everything we've got is \u003ccode\u003eInst MonadP T\u003c/code\u003e. In this case, \u003ccode\u003ebind'\u003c/code\u003e serves as a \u003ccode\u003e\u003e\u003e=\u003c/code\u003e substitution.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Monad",
          "name": "bind'",
          "package": "compose-trans",
          "signature": "Inst MonadM m -\u003e m x -\u003e (x -\u003e m y) -\u003e m y",
          "source": "src/Control-Monad-Trans-Monad.html#bind%27",
          "type": "function"
        },
        "index": {
          "description": "Sometimes we need an instance Monad while everything we ve got is Inst MonadP In this case bind serves as substitution",
          "hierarchy": "Control Monad Trans Monad",
          "module": "Control.Monad.Trans.Monad",
          "name": "bind'",
          "normalized": "Inst MonadM a-\u003ea b-\u003e(b-\u003ea c)-\u003ea c",
          "package": "compose-trans",
          "signature": "Inst MonadM m-\u003em x-\u003e(x-\u003em y)-\u003em y",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compose-trans/docs/Control-Monad-Trans-Monad.html#v:bind-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad is nothing but an algebra over the \u003ccode\u003eMonadM\u003c/code\u003e monad. \u003ccode\u003einstM\u003c/code\u003e provides it's structure map.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Monad",
          "name": "instM",
          "package": "compose-trans",
          "signature": "Inst MonadM m",
          "source": "src/Control-Monad-Trans-Monad.html#instM",
          "type": "function"
        },
        "index": {
          "description": "monad is nothing but an algebra over the MonadM monad instM provides it structure map",
          "hierarchy": "Control Monad Trans Monad",
          "module": "Control.Monad.Trans.Monad",
          "name": "instM",
          "package": "compose-trans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compose-trans/docs/Control-Monad-Trans-Monad.html#v:instM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSometimes we need an \u003ccode\u003einstance Monad T\u003c/code\u003e, while everything we've got is \u003ccode\u003eInst MonadP T\u003c/code\u003e. In this case, \u003ccode\u003ereturn'\u003c/code\u003e serves as a \u003ccode\u003ereturn\u003c/code\u003e substitution.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Monad",
          "name": "return'",
          "package": "compose-trans",
          "signature": "Inst MonadM m -\u003e x -\u003e m x",
          "source": "src/Control-Monad-Trans-Monad.html#return%27",
          "type": "function"
        },
        "index": {
          "description": "Sometimes we need an instance Monad while everything we ve got is Inst MonadP In this case return serves as return substitution",
          "hierarchy": "Control Monad Trans Monad",
          "module": "Control.Monad.Trans.Monad",
          "name": "return'",
          "normalized": "Inst MonadM a-\u003eb-\u003ea b",
          "package": "compose-trans",
          "signature": "Inst MonadM m-\u003ex-\u003em x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compose-trans/docs/Control-Monad-Trans-Monad.html#v:return-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYou shoudn't (and probably can't) use *anything* except for \u003ccode\u003e\u003ccode\u003e\u003ca\u003einstM\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, defined in this very module, as \u003ccode\u003etransMInst\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you define \u003ccode\u003einstance TransM T where transMInst = instM\u003c/code\u003e, then you would also need to define \u003ccode\u003einstance Monad m =\u003e Monad (T m)\u003c/code\u003e somewhere in your code.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Monad",
          "name": "transMInst",
          "package": "compose-trans",
          "signature": "Inst MonadM (t m)",
          "source": "src/Control-Monad-Trans-Monad.html#transMInst",
          "type": "method"
        },
        "index": {
          "description": "You shoudn and probably can use anything except for instM defined in this very module as transMInst If you define instance TransM where transMInst instM then you would also need to define instance Monad Monad somewhere in your code",
          "hierarchy": "Control Monad Trans Monad",
          "module": "Control.Monad.Trans.Monad",
          "name": "transMInst",
          "package": "compose-trans",
          "partial": "MInst",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compose-trans/docs/Control-Monad-Trans-Monad.html#v:transMInst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003eMonadFix\u003c/code\u003e transformers. There are also \u003ccode\u003eMonad\u003c/code\u003e and \u003ccode\u003eMonadPlus\u003c/code\u003e transformes, see the corresponding modules.\n\u003c/p\u003e\u003cp\u003eNote that each \u003ccode\u003eMonadFix\u003c/code\u003e transformer is also a \u003ccode\u003eMonad\u003c/code\u003e transformer.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.MonadFix",
          "name": "MonadFix",
          "package": "compose-trans",
          "source": "src/Control-Monad-Trans-MonadFix.html",
          "type": "module"
        },
        "index": {
          "description": "MonadFix transformers There are also Monad and MonadPlus transformes see the corresponding modules Note that each MonadFix transformer is also Monad transformer",
          "hierarchy": "Control Monad Trans MonadFix",
          "module": "Control.Monad.Trans.MonadFix",
          "name": "MonadFix",
          "package": "compose-trans",
          "partial": "Monad Fix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/compose-trans/docs/Control-Monad-Trans-MonadFix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eMonadF m\u003c/code\u003e is actually a free \u003ccode\u003eMonadFix\u003c/code\u003e generated by \u003ccode\u003em\u003c/code\u003e. \u003ccode\u003eMonadF\u003c/code\u003e is a monad itself (on the \u003ccode\u003e(* -\u003e *)\u003c/code\u003e category), as usually happens with free structures.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.MonadFix",
          "name": "MonadF",
          "package": "compose-trans",
          "source": "src/Control-Monad-Trans-MonadFix.html#MonadF",
          "type": "data"
        },
        "index": {
          "description": "MonadF is actually free MonadFix generated by MonadF is monad itself on the category as usually happens with free structures",
          "hierarchy": "Control Monad Trans MonadFix",
          "module": "Control.Monad.Trans.MonadFix",
          "name": "MonadF",
          "package": "compose-trans",
          "partial": "Monad",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/compose-trans/docs/Control-Monad-Trans-MonadFix.html#t:MonadF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA composable \u003ccode\u003eMonadFix\u003c/code\u003e transformer.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.MonadFix",
          "name": "TransF",
          "package": "compose-trans",
          "source": "src/Control-Monad-Trans-MonadFix.html#TransF",
          "type": "class"
        },
        "index": {
          "description": "composable MonadFix transformer",
          "hierarchy": "Control Monad Trans MonadFix",
          "module": "Control.Monad.Trans.MonadFix",
          "name": "TransF",
          "package": "compose-trans",
          "partial": "Trans",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/compose-trans/docs/Control-Monad-Trans-MonadFix.html#t:TransF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eMonadFix\u003c/code\u003e is nothing but an algebra over the \u003ccode\u003eMonadF\u003c/code\u003e monad. \u003ccode\u003einstF\u003c/code\u003e provides it's structure map.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.MonadFix",
          "name": "instF",
          "package": "compose-trans",
          "signature": "Inst MonadF m",
          "source": "src/Control-Monad-Trans-MonadFix.html#instF",
          "type": "function"
        },
        "index": {
          "description": "MonadFix is nothing but an algebra over the MonadF monad instF provides it structure map",
          "hierarchy": "Control Monad Trans MonadFix",
          "module": "Control.Monad.Trans.MonadFix",
          "name": "instF",
          "package": "compose-trans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compose-trans/docs/Control-Monad-Trans-MonadFix.html#v:instF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSometimes we need an \u003ccode\u003einstance MonadFix T\u003c/code\u003e, while everything we've got is \u003ccode\u003eInstP MonadF T\u003c/code\u003e. In this case, \u003ccode\u003emfix'\u003c/code\u003e serves as a \u003ccode\u003emfix\u003c/code\u003e substitution.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.MonadFix",
          "name": "mfix'",
          "package": "compose-trans",
          "signature": "Inst MonadF m -\u003e (x -\u003e m x) -\u003e m x",
          "source": "src/Control-Monad-Trans-MonadFix.html#mfix%27",
          "type": "function"
        },
        "index": {
          "description": "Sometimes we need an instance MonadFix while everything we ve got is InstP MonadF In this case mfix serves as mfix substitution",
          "hierarchy": "Control Monad Trans MonadFix",
          "module": "Control.Monad.Trans.MonadFix",
          "name": "mfix'",
          "normalized": "Inst MonadF a-\u003e(b-\u003ea b)-\u003ea b",
          "package": "compose-trans",
          "signature": "Inst MonadF m-\u003e(x-\u003em x)-\u003em x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compose-trans/docs/Control-Monad-Trans-MonadFix.html#v:mfix-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYou shoudn't (and probably can't) use *anything* except for \u003ccode\u003e\u003ccode\u003e\u003ca\u003einstF\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, defined in this very module, as \u003ccode\u003etransFInst\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you define \u003ccode\u003einstance TransF T where transFInst = instF\u003c/code\u003e, then you would also need to define \u003ccode\u003einstance MonadFix m =\u003e MonadFix (T m)\u003c/code\u003e somewhere in your code.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.MonadFix",
          "name": "transFInst",
          "package": "compose-trans",
          "signature": "Inst MonadF (t m)",
          "source": "src/Control-Monad-Trans-MonadFix.html#transFInst",
          "type": "method"
        },
        "index": {
          "description": "You shoudn and probably can use anything except for instF defined in this very module as transFInst If you define instance TransF where transFInst instF then you would also need to define instance MonadFix MonadFix somewhere in your code",
          "hierarchy": "Control Monad Trans MonadFix",
          "module": "Control.Monad.Trans.MonadFix",
          "name": "transFInst",
          "package": "compose-trans",
          "partial": "FInst",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compose-trans/docs/Control-Monad-Trans-MonadFix.html#v:transFInst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003eMonadPlus\u003c/code\u003e transformers. There are also \u003ccode\u003eMonad\u003c/code\u003e and \u003ccode\u003eMonadFix\u003c/code\u003e transformes, see the corresponding modules.\n\u003c/p\u003e\u003cp\u003eNote that each \u003ccode\u003eMonadPlus\u003c/code\u003e transformer is also a \u003ccode\u003eMonad\u003c/code\u003e transformer.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.MonadPlus",
          "name": "MonadPlus",
          "package": "compose-trans",
          "source": "src/Control-Monad-Trans-MonadPlus.html",
          "type": "module"
        },
        "index": {
          "description": "MonadPlus transformers There are also Monad and MonadFix transformes see the corresponding modules Note that each MonadPlus transformer is also Monad transformer",
          "hierarchy": "Control Monad Trans MonadPlus",
          "module": "Control.Monad.Trans.MonadPlus",
          "name": "MonadPlus",
          "package": "compose-trans",
          "partial": "Monad Plus",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/compose-trans/docs/Control-Monad-Trans-MonadPlus.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eMonadP m\u003c/code\u003e is actually a free \u003ccode\u003eMonadPlus\u003c/code\u003e generated by \u003ccode\u003em\u003c/code\u003e. \u003ccode\u003eMonadP\u003c/code\u003e is a monad itself (on the \u003ccode\u003e(* -\u003e *)\u003c/code\u003e category), as usually happens with free structures.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.MonadPlus",
          "name": "MonadP",
          "package": "compose-trans",
          "source": "src/Control-Monad-Trans-MonadPlus.html#MonadP",
          "type": "data"
        },
        "index": {
          "description": "MonadP is actually free MonadPlus generated by MonadP is monad itself on the category as usually happens with free structures",
          "hierarchy": "Control Monad Trans MonadPlus",
          "module": "Control.Monad.Trans.MonadPlus",
          "name": "MonadP",
          "package": "compose-trans",
          "partial": "Monad",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/compose-trans/docs/Control-Monad-Trans-MonadPlus.html#t:MonadP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA composable \u003ccode\u003eMonadPlus\u003c/code\u003e transformer.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.MonadPlus",
          "name": "TransP",
          "package": "compose-trans",
          "source": "src/Control-Monad-Trans-MonadPlus.html#TransP",
          "type": "class"
        },
        "index": {
          "description": "composable MonadPlus transformer",
          "hierarchy": "Control Monad Trans MonadPlus",
          "module": "Control.Monad.Trans.MonadPlus",
          "name": "TransP",
          "package": "compose-trans",
          "partial": "Trans",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/compose-trans/docs/Control-Monad-Trans-MonadPlus.html#t:TransP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eMonadPlus\u003c/code\u003e is nothing but an algebra over the \u003ccode\u003eMonadP\u003c/code\u003e monad. \u003ccode\u003einstP\u003c/code\u003e provides it's structure map.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.MonadPlus",
          "name": "instP",
          "package": "compose-trans",
          "signature": "Inst MonadP m",
          "source": "src/Control-Monad-Trans-MonadPlus.html#instP",
          "type": "function"
        },
        "index": {
          "description": "MonadPlus is nothing but an algebra over the MonadP monad instP provides it structure map",
          "hierarchy": "Control Monad Trans MonadPlus",
          "module": "Control.Monad.Trans.MonadPlus",
          "name": "instP",
          "package": "compose-trans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compose-trans/docs/Control-Monad-Trans-MonadPlus.html#v:instP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSometimes we need an \u003ccode\u003einstance Monad T\u003c/code\u003e, while everything we've got is \u003ccode\u003eInst MonadP T\u003c/code\u003e. In this case, \u003ccode\u003emplus'\u003c/code\u003e serves as a \u003ccode\u003emplus\u003c/code\u003e substitution.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.MonadPlus",
          "name": "mplus'",
          "package": "compose-trans",
          "signature": "Inst MonadP m -\u003e m x -\u003e m x -\u003e m x",
          "source": "src/Control-Monad-Trans-MonadPlus.html#mplus%27",
          "type": "function"
        },
        "index": {
          "description": "Sometimes we need an instance Monad while everything we ve got is Inst MonadP In this case mplus serves as mplus substitution",
          "hierarchy": "Control Monad Trans MonadPlus",
          "module": "Control.Monad.Trans.MonadPlus",
          "name": "mplus'",
          "normalized": "Inst MonadP a-\u003ea b-\u003ea b-\u003ea b",
          "package": "compose-trans",
          "signature": "Inst MonadP m-\u003em x-\u003em x-\u003em x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compose-trans/docs/Control-Monad-Trans-MonadPlus.html#v:mplus-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSometimes we need an \u003ccode\u003einstance MonadPlus T\u003c/code\u003e, while everything we've got is \u003ccode\u003eInstP MonadP T\u003c/code\u003e. In this case, \u003ccode\u003emzero'\u003c/code\u003e serves as a \u003ccode\u003emzero\u003c/code\u003e substitution.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.MonadPlus",
          "name": "mzero'",
          "package": "compose-trans",
          "signature": "Inst MonadP m -\u003e m x",
          "source": "src/Control-Monad-Trans-MonadPlus.html#mzero%27",
          "type": "function"
        },
        "index": {
          "description": "Sometimes we need an instance MonadPlus while everything we ve got is InstP MonadP In this case mzero serves as mzero substitution",
          "hierarchy": "Control Monad Trans MonadPlus",
          "module": "Control.Monad.Trans.MonadPlus",
          "name": "mzero'",
          "normalized": "Inst MonadP a-\u003ea b",
          "package": "compose-trans",
          "signature": "Inst MonadP m-\u003em x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/compose-trans/docs/Control-Monad-Trans-MonadPlus.html#v:mzero-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYou shoudn't (and probably can't) use *anything* except for \u003ccode\u003e\u003ccode\u003e\u003ca\u003einstP\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, defined in this very module, as \u003ccode\u003etransPInst\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf you define \u003ccode\u003einstance TransP T where transPInst = instP\u003c/code\u003e, then you would also need to define \u003ccode\u003einstance MonadPlus m =\u003e MonadPlus (T m)\u003c/code\u003e somewhere in your code.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.MonadPlus",
          "name": "transPInst",
          "package": "compose-trans",
          "signature": "Inst MonadP (t m)",
          "source": "src/Control-Monad-Trans-MonadPlus.html#transPInst",
          "type": "method"
        },
        "index": {
          "description": "You shoudn and probably can use anything except for instP defined in this very module as transPInst If you define instance TransP where transPInst instP then you would also need to define instance MonadPlus MonadPlus somewhere in your code",
          "hierarchy": "Control Monad Trans MonadPlus",
          "module": "Control.Monad.Trans.MonadPlus",
          "name": "transPInst",
          "package": "compose-trans",
          "partial": "PInst",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/compose-trans/docs/Control-Monad-Trans-MonadPlus.html#v:transPInst"
      }
    }
  ]
]