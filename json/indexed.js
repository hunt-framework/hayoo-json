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
        "word": "indexed"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Indexed",
          "name": "Indexed",
          "package": "indexed",
          "source": "src/Control-Comonad-Indexed.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Comonad Indexed",
          "module": "Control.Comonad.Indexed",
          "name": "Indexed",
          "package": "indexed",
          "partial": "Indexed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Comonad-Indexed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Indexed",
          "name": "IxComonad",
          "package": "indexed",
          "source": "src/Control-Comonad-Indexed.html#IxComonad",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Comonad Indexed",
          "module": "Control.Comonad.Indexed",
          "name": "IxComonad",
          "package": "indexed",
          "partial": "Ix Comonad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Comonad-Indexed.html#t:IxComonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Indexed",
          "name": "IxCopointed",
          "package": "indexed",
          "source": "src/Data-Functor-Indexed.html#IxCopointed",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Comonad Indexed",
          "module": "Control.Comonad.Indexed",
          "name": "IxCopointed",
          "package": "indexed",
          "partial": "Ix Copointed",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Comonad-Indexed.html#t:IxCopointed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Indexed",
          "name": "IxFunctor",
          "package": "indexed",
          "source": "src/Data-Functor-Indexed.html#IxFunctor",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Comonad Indexed",
          "module": "Control.Comonad.Indexed",
          "name": "IxFunctor",
          "package": "indexed",
          "partial": "Ix Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Comonad-Indexed.html#t:IxFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Indexed",
          "name": "iduplicate",
          "package": "indexed",
          "signature": "w i k a -\u003e w i j (w j k a)",
          "source": "src/Control-Comonad-Indexed.html#iduplicate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Comonad Indexed",
          "module": "Control.Comonad.Indexed",
          "name": "iduplicate",
          "normalized": "a b c d-\u003ea b e(a e c d)",
          "package": "indexed",
          "signature": "w i k a-\u003ew i j(w j k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Comonad-Indexed.html#v:iduplicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Indexed",
          "name": "iextend",
          "package": "indexed",
          "signature": "(w j k a -\u003e b) -\u003e w i k a -\u003e w i j b",
          "source": "src/Control-Comonad-Indexed.html#iextend",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Comonad Indexed",
          "module": "Control.Comonad.Indexed",
          "name": "iextend",
          "normalized": "(a b c d-\u003ee)-\u003ea f c d-\u003ea f b e",
          "package": "indexed",
          "signature": "(w j k a-\u003eb)-\u003ew i k a-\u003ew i j b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Comonad-Indexed.html#v:iextend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Indexed",
          "name": "iextract",
          "package": "indexed",
          "signature": "w i i a -\u003e a",
          "source": "src/Data-Functor-Indexed.html#iextract",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Comonad Indexed",
          "module": "Control.Comonad.Indexed",
          "name": "iextract",
          "normalized": "a b b c-\u003ec",
          "package": "indexed",
          "signature": "w i i a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Comonad-Indexed.html#v:iextract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Comonad.Indexed",
          "name": "imap",
          "package": "indexed",
          "signature": "(a -\u003e b) -\u003e f j k a -\u003e f j k b",
          "source": "src/Data-Functor-Indexed.html#imap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Comonad Indexed",
          "module": "Control.Comonad.Indexed",
          "name": "imap",
          "normalized": "(a-\u003eb)-\u003ec d e a-\u003ec d e b",
          "package": "indexed",
          "signature": "(a-\u003eb)-\u003ef j k a-\u003ef j k b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Comonad-Indexed.html#v:imap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Fix",
          "name": "Fix",
          "package": "indexed",
          "source": "src/Control-Monad-Indexed-Fix.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Fix",
          "module": "Control.Monad.Indexed.Fix",
          "name": "Fix",
          "package": "indexed",
          "partial": "Fix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Monad-Indexed-Fix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Fix",
          "name": "IxMonadFix",
          "package": "indexed",
          "source": "src/Control-Monad-Indexed-Fix.html#IxMonadFix",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Fix",
          "module": "Control.Monad.Indexed.Fix",
          "name": "IxMonadFix",
          "package": "indexed",
          "partial": "Ix Monad Fix",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Monad-Indexed-Fix.html#t:IxMonadFix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Fix",
          "name": "imfix",
          "package": "indexed",
          "signature": "(a -\u003e m i i a) -\u003e m i i a",
          "source": "src/Control-Monad-Indexed-Fix.html#imfix",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Fix",
          "module": "Control.Monad.Indexed.Fix",
          "name": "imfix",
          "normalized": "(a-\u003eb c c a)-\u003eb c c a",
          "package": "indexed",
          "signature": "(a-\u003em i i a)-\u003em i i a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Monad-Indexed-Fix.html#v:imfix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTODO: figure out a meaningful way for indexed monads to transform indexed \n monads\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Indexed.Trans",
          "name": "Trans",
          "package": "indexed",
          "source": "src/Control-Monad-Indexed-Trans.html",
          "type": "module"
        },
        "index": {
          "description": "TODO figure out meaningful way for indexed monads to transform indexed monads",
          "hierarchy": "Control Monad Indexed Trans",
          "module": "Control.Monad.Indexed.Trans",
          "name": "Trans",
          "package": "indexed",
          "partial": "Trans",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Monad-Indexed-Trans.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Trans",
          "name": "IxMonadTrans",
          "package": "indexed",
          "source": "src/Control-Monad-Indexed-Trans.html#IxMonadTrans",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Trans",
          "module": "Control.Monad.Indexed.Trans",
          "name": "IxMonadTrans",
          "package": "indexed",
          "partial": "Ix Monad Trans",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Monad-Indexed-Trans.html#t:IxMonadTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed.Trans",
          "name": "ilift",
          "package": "indexed",
          "signature": "m a -\u003e t m i i a",
          "source": "src/Control-Monad-Indexed-Trans.html#ilift",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Indexed Trans",
          "module": "Control.Monad.Indexed.Trans",
          "name": "ilift",
          "normalized": "a b-\u003ec a d d b",
          "package": "indexed",
          "signature": "m a-\u003et m i i a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Monad-Indexed-Trans.html#v:ilift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed",
          "name": "Indexed",
          "package": "indexed",
          "source": "src/Control-Monad-Indexed.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Indexed",
          "module": "Control.Monad.Indexed",
          "name": "Indexed",
          "package": "indexed",
          "partial": "Indexed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Monad-Indexed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed",
          "name": "IxApplicative",
          "package": "indexed",
          "source": "src/Data-Functor-Indexed.html#IxApplicative",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Indexed",
          "module": "Control.Monad.Indexed",
          "name": "IxApplicative",
          "package": "indexed",
          "partial": "Ix Applicative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Monad-Indexed.html#t:IxApplicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed",
          "name": "IxFunctor",
          "package": "indexed",
          "source": "src/Data-Functor-Indexed.html#IxFunctor",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Indexed",
          "module": "Control.Monad.Indexed",
          "name": "IxFunctor",
          "package": "indexed",
          "partial": "Ix Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Monad-Indexed.html#t:IxFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed",
          "name": "IxMonad",
          "package": "indexed",
          "source": "src/Control-Monad-Indexed.html#IxMonad",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Indexed",
          "module": "Control.Monad.Indexed",
          "name": "IxMonad",
          "package": "indexed",
          "partial": "Ix Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Monad-Indexed.html#t:IxMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed",
          "name": "IxMonadPlus",
          "package": "indexed",
          "source": "src/Control-Monad-Indexed.html#IxMonadPlus",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Indexed",
          "module": "Control.Monad.Indexed",
          "name": "IxMonadPlus",
          "package": "indexed",
          "partial": "Ix Monad Plus",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Monad-Indexed.html#t:IxMonadPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed",
          "name": "IxMonadZero",
          "package": "indexed",
          "source": "src/Control-Monad-Indexed.html#IxMonadZero",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Indexed",
          "module": "Control.Monad.Indexed",
          "name": "IxMonadZero",
          "package": "indexed",
          "partial": "Ix Monad Zero",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Monad-Indexed.html#t:IxMonadZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed",
          "name": "IxPointed",
          "package": "indexed",
          "source": "src/Data-Functor-Indexed.html#IxPointed",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Indexed",
          "module": "Control.Monad.Indexed",
          "name": "IxPointed",
          "package": "indexed",
          "partial": "Ix Pointed",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Monad-Indexed.html#t:IxPointed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed",
          "name": "(=\u003c\u003c\u003c)",
          "package": "indexed",
          "signature": "(a -\u003e m j k b) -\u003e m i j a -\u003e m i k b",
          "source": "src/Control-Monad-Indexed.html#%3D%3C%3C%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Indexed",
          "module": "Control.Monad.Indexed",
          "name": "(=\u003c\u003c\u003c) =\u003c\u003c\u003c",
          "normalized": "(a-\u003eb c d e)-\u003eb f c a-\u003eb f d e",
          "package": "indexed",
          "signature": "(a-\u003em j k b)-\u003em i j a-\u003em i k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Monad-Indexed.html#v:-61--60--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed",
          "name": "(\u003e\u003e\u003e=)",
          "package": "indexed",
          "signature": "m i j a -\u003e (a -\u003e m j k b) -\u003e m i k b",
          "source": "src/Control-Monad-Indexed.html#%3E%3E%3E%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Indexed",
          "module": "Control.Monad.Indexed",
          "name": "(\u003e\u003e\u003e=) \u003e\u003e\u003e=",
          "normalized": "a b c d-\u003e(d-\u003ea c e f)-\u003ea b e f",
          "package": "indexed",
          "signature": "m i j a-\u003e(a-\u003em j k b)-\u003em i k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Monad-Indexed.html#v:-62--62--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed",
          "name": "iap",
          "package": "indexed",
          "signature": "m i j (a -\u003e b) -\u003e m j k a -\u003e m i k b",
          "source": "src/Data-Functor-Indexed.html#iap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Indexed",
          "module": "Control.Monad.Indexed",
          "name": "iap",
          "normalized": "a b c(d-\u003ee)-\u003ea c f d-\u003ea b f e",
          "package": "indexed",
          "signature": "m i j(a-\u003eb)-\u003em j k a-\u003em i k b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Monad-Indexed.html#v:iap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed",
          "name": "iapIxMonad",
          "package": "indexed",
          "signature": "m i j (a -\u003e b) -\u003e m j k a -\u003e m i k b",
          "source": "src/Control-Monad-Indexed.html#iapIxMonad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Indexed",
          "module": "Control.Monad.Indexed",
          "name": "iapIxMonad",
          "normalized": "a b c(d-\u003ee)-\u003ea c f d-\u003ea b f e",
          "package": "indexed",
          "partial": "Ix Monad",
          "signature": "m i j(a-\u003eb)-\u003em j k a-\u003em i k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Monad-Indexed.html#v:iapIxMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed",
          "name": "ibind",
          "package": "indexed",
          "signature": "(a -\u003e m j k b) -\u003e m i j a -\u003e m i k b",
          "source": "src/Control-Monad-Indexed.html#ibind",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Indexed",
          "module": "Control.Monad.Indexed",
          "name": "ibind",
          "normalized": "(a-\u003eb c d e)-\u003eb f c a-\u003eb f d e",
          "package": "indexed",
          "signature": "(a-\u003em j k b)-\u003em i j a-\u003em i k b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Monad-Indexed.html#v:ibind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed",
          "name": "ijoin",
          "package": "indexed",
          "signature": "m i j (m j k a) -\u003e m i k a",
          "source": "src/Control-Monad-Indexed.html#ijoin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Indexed",
          "module": "Control.Monad.Indexed",
          "name": "ijoin",
          "normalized": "a b c(a c d e)-\u003ea b d e",
          "package": "indexed",
          "signature": "m i j(m j k a)-\u003em i k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Monad-Indexed.html#v:ijoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed",
          "name": "imap",
          "package": "indexed",
          "signature": "(a -\u003e b) -\u003e f j k a -\u003e f j k b",
          "source": "src/Data-Functor-Indexed.html#imap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Indexed",
          "module": "Control.Monad.Indexed",
          "name": "imap",
          "normalized": "(a-\u003eb)-\u003ec d e a-\u003ec d e b",
          "package": "indexed",
          "signature": "(a-\u003eb)-\u003ef j k a-\u003ef j k b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Monad-Indexed.html#v:imap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed",
          "name": "implus",
          "package": "indexed",
          "signature": "m i j a -\u003e m i j a -\u003e m i j a",
          "source": "src/Control-Monad-Indexed.html#implus",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Indexed",
          "module": "Control.Monad.Indexed",
          "name": "implus",
          "normalized": "a b c d-\u003ea b c d-\u003ea b c d",
          "package": "indexed",
          "signature": "m i j a-\u003em i j a-\u003em i j a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Monad-Indexed.html#v:implus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed",
          "name": "imzero",
          "package": "indexed",
          "signature": "m i j a",
          "source": "src/Control-Monad-Indexed.html#imzero",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Indexed",
          "module": "Control.Monad.Indexed",
          "name": "imzero",
          "package": "indexed",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Monad-Indexed.html#v:imzero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Indexed",
          "name": "ireturn",
          "package": "indexed",
          "signature": "a -\u003e m i i a",
          "source": "src/Data-Functor-Indexed.html#ireturn",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Indexed",
          "module": "Control.Monad.Indexed",
          "name": "ireturn",
          "normalized": "a-\u003eb c c a",
          "package": "indexed",
          "signature": "a-\u003em i i a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Control-Monad-Indexed.html#v:ireturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Indexed",
          "name": "Indexed",
          "package": "indexed",
          "source": "src/Data-Functor-Indexed.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Functor Indexed",
          "module": "Data.Functor.Indexed",
          "name": "Indexed",
          "package": "indexed",
          "partial": "Indexed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Data-Functor-Indexed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Indexed",
          "name": "IxApplicative",
          "package": "indexed",
          "source": "src/Data-Functor-Indexed.html#IxApplicative",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Functor Indexed",
          "module": "Data.Functor.Indexed",
          "name": "IxApplicative",
          "package": "indexed",
          "partial": "Ix Applicative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Data-Functor-Indexed.html#t:IxApplicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Indexed",
          "name": "IxCopointed",
          "package": "indexed",
          "source": "src/Data-Functor-Indexed.html#IxCopointed",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Functor Indexed",
          "module": "Data.Functor.Indexed",
          "name": "IxCopointed",
          "package": "indexed",
          "partial": "Ix Copointed",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Data-Functor-Indexed.html#t:IxCopointed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Indexed",
          "name": "IxFunctor",
          "package": "indexed",
          "source": "src/Data-Functor-Indexed.html#IxFunctor",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Functor Indexed",
          "module": "Data.Functor.Indexed",
          "name": "IxFunctor",
          "package": "indexed",
          "partial": "Ix Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Data-Functor-Indexed.html#t:IxFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Indexed",
          "name": "IxPointed",
          "package": "indexed",
          "source": "src/Data-Functor-Indexed.html#IxPointed",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Functor Indexed",
          "module": "Data.Functor.Indexed",
          "name": "IxPointed",
          "package": "indexed",
          "partial": "Ix Pointed",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Data-Functor-Indexed.html#t:IxPointed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Indexed",
          "name": "iap",
          "package": "indexed",
          "signature": "m i j (a -\u003e b) -\u003e m j k a -\u003e m i k b",
          "source": "src/Data-Functor-Indexed.html#iap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Functor Indexed",
          "module": "Data.Functor.Indexed",
          "name": "iap",
          "normalized": "a b c(d-\u003ee)-\u003ea c f d-\u003ea b f e",
          "package": "indexed",
          "signature": "m i j(a-\u003eb)-\u003em j k a-\u003em i k b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Data-Functor-Indexed.html#v:iap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Indexed",
          "name": "iextract",
          "package": "indexed",
          "signature": "w i i a -\u003e a",
          "source": "src/Data-Functor-Indexed.html#iextract",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Functor Indexed",
          "module": "Data.Functor.Indexed",
          "name": "iextract",
          "normalized": "a b b c-\u003ec",
          "package": "indexed",
          "signature": "w i i a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Data-Functor-Indexed.html#v:iextract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Indexed",
          "name": "imap",
          "package": "indexed",
          "signature": "(a -\u003e b) -\u003e f j k a -\u003e f j k b",
          "source": "src/Data-Functor-Indexed.html#imap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Functor Indexed",
          "module": "Data.Functor.Indexed",
          "name": "imap",
          "normalized": "(a-\u003eb)-\u003ec d e a-\u003ec d e b",
          "package": "indexed",
          "signature": "(a-\u003eb)-\u003ef j k a-\u003ef j k b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Data-Functor-Indexed.html#v:imap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Functor.Indexed",
          "name": "ireturn",
          "package": "indexed",
          "signature": "a -\u003e m i i a",
          "source": "src/Data-Functor-Indexed.html#ireturn",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Functor Indexed",
          "module": "Data.Functor.Indexed",
          "name": "ireturn",
          "normalized": "a-\u003eb c c a",
          "package": "indexed",
          "signature": "a-\u003em i i a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/indexed/docs/Data-Functor-Indexed.html#v:ireturn"
      }
    }
  ]
]