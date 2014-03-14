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
        "word": "MHask"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module sets the stage for the rest of the package.\n It defines a type synonym \u003ccode\u003e~\u003e\u003c/code\u003e which cleans up the\n type signatures,\n and  \u003ccode\u003e~\u003e~\u003c/code\u003e which is used in the default implementation\n of bind. These represent the type of arrows and arrow composition\n in MHask, respectively.\n\u003c/p\u003e\u003cp\u003eBy using \u003ccode\u003e~\u003e\u003c/code\u003e, type signatures for the MHask class operations\n can be easily compared to their Hask counterparts. However,\n as a reminder that you are dealing with Monads, where\n typically you would see \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e in the Hask counterpart,\n you will instead see \u003ccode\u003em\u003c/code\u003e and \u003ccode\u003en\u003c/code\u003e, and where you would\n typically see \u003ccode\u003em\u003c/code\u003e or \u003ccode\u003ew\u003c/code\u003e, you will instead see \u003ccode\u003et\u003c/code\u003e,\n as a mnemonic for Monad transformer.\n\u003c/p\u003e\u003cp\u003eFor illustrative purposes, this module also provides\n \u003ccode\u003e\u003c~\u003c/code\u003e and \u003ccode\u003e~\u003c~\u003c/code\u003e, to clearly illustrate how duals are\n nothing more than just \"flipping the arrows\".\n You are encouraged to compare docs or even source files\n to see just how similar they are, all the way down\n to default implementations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MHask.Arrow",
          "name": "Arrow",
          "package": "MHask",
          "source": "src/MHask-Arrow.html",
          "type": "module"
        },
        "index": {
          "description": "This module sets the stage for the rest of the package It defines type synonym which cleans up the type signatures and which is used in the default implementation of bind These represent the type of arrows and arrow composition in MHask respectively By using type signatures for the MHask class operations can be easily compared to their Hask counterparts However as reminder that you are dealing with Monads where typically you would see and in the Hask counterpart you will instead see and and where you would typically see or you will instead see as mnemonic for Monad transformer For illustrative purposes this module also provides and to clearly illustrate how duals are nothing more than just flipping the arrows You are encouraged to compare docs or even source files to see just how similar they are all the way down to default implementations",
          "hierarchy": "MHask Arrow",
          "module": "MHask.Arrow",
          "name": "Arrow",
          "package": "MHask",
          "partial": "Arrow",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Arrow.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e~\u003e\u003c/code\u003e type represents arrows in the\n category of MHask. \n\u003c/p\u003e",
          "module": "MHask.Arrow",
          "name": "(~\u003e)",
          "package": "MHask",
          "source": "src/MHask-Arrow.html#~%3E",
          "type": "type"
        },
        "index": {
          "description": "The type represents arrows in the category of MHask",
          "hierarchy": "MHask Arrow",
          "module": "MHask.Arrow",
          "name": "(~\u003e) ~\u003e",
          "package": "MHask",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Arrow.html#t:-126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt's just \u003ccode\u003e~\u003e\u003c/code\u003e flipped.\n\u003c/p\u003e\u003cpre\u003e type m \u003c~ n = n ~\u003e m\n\u003c/pre\u003e",
          "module": "MHask.Arrow",
          "name": "(\u003c~)",
          "package": "MHask",
          "source": "src/MHask-Arrow.html#%3C~",
          "type": "type"
        },
        "index": {
          "description": "It just flipped type",
          "hierarchy": "MHask Arrow",
          "module": "MHask.Arrow",
          "name": "(\u003c~) \u003c~",
          "package": "MHask",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Arrow.html#t:-60--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIt's just \u003ccode\u003e~\u003e~\u003c/code\u003e flipped.\n\u003c/p\u003e\u003cpre\u003e (~\u003c~) = flip (~\u003e~)\n\u003c/pre\u003e",
          "module": "MHask.Arrow",
          "name": "(~\u003c~)",
          "package": "MHask",
          "signature": "(c \u003c~ b) -\u003e (b \u003c~ a) -\u003e c \u003c~ a",
          "source": "src/MHask-Arrow.html#~%3C~",
          "type": "function"
        },
        "index": {
          "description": "It just flipped flip",
          "hierarchy": "MHask Arrow",
          "module": "MHask.Arrow",
          "name": "(~\u003c~) ~\u003c~",
          "normalized": "(a b)-\u003e(b c)-\u003ea c",
          "package": "MHask",
          "signature": "(c b)-\u003e(b a)-\u003ec a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Arrow.html#v:-126--60--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-to-right composition of arrows in MHask.\n\u003c/p\u003e",
          "module": "MHask.Arrow",
          "name": "(~\u003e~)",
          "package": "MHask",
          "signature": "(a ~\u003e b) -\u003e (b ~\u003e c) -\u003e a ~\u003e c",
          "source": "src/MHask-Arrow.html#~%3E~",
          "type": "function"
        },
        "index": {
          "description": "Left-to-right composition of arrows in MHask",
          "hierarchy": "MHask Arrow",
          "module": "MHask.Arrow",
          "name": "(~\u003e~) ~\u003e~",
          "normalized": "(a b)-\u003e(b c)-\u003ea c",
          "package": "MHask",
          "signature": "(a b)-\u003e(b c)-\u003ea c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Arrow.html#v:-126--62--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompare to comonad.Control.Comonad (Comonad)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MHask.Comonad",
          "name": "Comonad",
          "package": "MHask",
          "source": "src/MHask-Comonad.html",
          "type": "module"
        },
        "index": {
          "description": "Compare to comonad.Control.Comonad Comonad",
          "hierarchy": "MHask Comonad",
          "module": "MHask.Comonad",
          "name": "Comonad",
          "package": "MHask",
          "partial": "Comonad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Comonad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDual of \u003ca\u003eMHask.Monad\u003c/a\u003e\n\u003c/p\u003e",
          "module": "MHask.Comonad",
          "name": "Comonad",
          "package": "MHask",
          "source": "src/MHask-Comonad.html#Comonad",
          "type": "class"
        },
        "index": {
          "description": "Dual of MHask.Monad",
          "hierarchy": "MHask Comonad",
          "module": "MHask.Comonad",
          "name": "Comonad",
          "package": "MHask",
          "partial": "Comonad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Comonad.html#t:Comonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MHask.Comonad",
          "name": "duplicate",
          "package": "MHask",
          "signature": "t (t m) \u003c~ t m",
          "source": "src/MHask-Comonad.html#duplicate",
          "type": "method"
        },
        "index": {
          "hierarchy": "MHask Comonad",
          "module": "MHask.Comonad",
          "name": "duplicate",
          "package": "MHask",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Comonad.html#v:duplicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MHask.Comonad",
          "name": "extend",
          "package": "MHask",
          "signature": "(m \u003c~ t n) -\u003e t m \u003c~ t n",
          "source": "src/MHask-Comonad.html#extend",
          "type": "method"
        },
        "index": {
          "hierarchy": "MHask Comonad",
          "module": "MHask.Comonad",
          "name": "extend",
          "normalized": "(a b c)-\u003eb a b c",
          "package": "MHask",
          "signature": "(m t n)-\u003et m t n",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Comonad.html#v:extend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf you define your Comonad in terms of extend and extract,\n then you get a free implementation of fmap which can\n be used for Functor.\n\u003c/p\u003e",
          "module": "MHask.Comonad",
          "name": "fmapComonad",
          "package": "MHask",
          "signature": "(m \u003c~ n) -\u003e t m \u003c~ t n",
          "source": "src/MHask-Comonad.html#fmapComonad",
          "type": "function"
        },
        "index": {
          "description": "If you define your Comonad in terms of extend and extract then you get free implementation of fmap which can be used for Functor",
          "hierarchy": "MHask Comonad",
          "module": "MHask.Comonad",
          "name": "fmapComonad",
          "normalized": "(a b)-\u003ec a c b",
          "package": "MHask",
          "partial": "Comonad",
          "signature": "(m n)-\u003et m t n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Comonad.html#v:fmapComonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompare to comonad.Control.Comonad (Copointed)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MHask.Copointed",
          "name": "Copointed",
          "package": "MHask",
          "source": "src/MHask-Copointed.html",
          "type": "module"
        },
        "index": {
          "description": "Compare to comonad.Control.Comonad Copointed",
          "hierarchy": "MHask Copointed",
          "module": "MHask.Copointed",
          "name": "Copointed",
          "package": "MHask",
          "partial": "Copointed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Copointed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe dual of \u003ca\u003eMHask.Pointed\u003c/a\u003e\n\u003c/p\u003e",
          "module": "MHask.Copointed",
          "name": "Copointed",
          "package": "MHask",
          "source": "src/MHask-Copointed.html#Copointed",
          "type": "class"
        },
        "index": {
          "description": "The dual of MHask.Pointed",
          "hierarchy": "MHask Copointed",
          "module": "MHask.Copointed",
          "name": "Copointed",
          "package": "MHask",
          "partial": "Copointed",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Copointed.html#t:Copointed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MHask.Copointed",
          "name": "extract",
          "package": "MHask",
          "signature": "m \u003c~ t m",
          "source": "src/MHask-Copointed.html#extract",
          "type": "method"
        },
        "index": {
          "hierarchy": "MHask Copointed",
          "module": "MHask.Copointed",
          "name": "extract",
          "package": "MHask",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Copointed.html#v:extract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompare to base.Prelude.Functor (Functor)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MHask.Functor",
          "name": "Functor",
          "package": "MHask",
          "source": "src/MHask-Functor.html",
          "type": "module"
        },
        "index": {
          "description": "Compare to base.Prelude.Functor Functor",
          "hierarchy": "MHask Functor",
          "module": "MHask.Functor",
          "name": "Functor",
          "package": "MHask",
          "partial": "Functor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Functor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunctor is its own dual.\n\u003c/p\u003e",
          "module": "MHask.Functor",
          "name": "Functor",
          "package": "MHask",
          "source": "src/MHask-Functor.html#Functor",
          "type": "class"
        },
        "index": {
          "description": "Functor is its own dual",
          "hierarchy": "MHask Functor",
          "module": "MHask.Functor",
          "name": "Functor",
          "package": "MHask",
          "partial": "Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Functor.html#t:Functor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlipping the arrows on fmap's type signature\n is just the same type signature in disguise.\n\u003c/p\u003e\u003cpre\u003e (m \u003c~ n) -\u003e (t m \u003c~ t n)\n\u003c/pre\u003e",
          "module": "MHask.Functor",
          "name": "fmap",
          "package": "MHask",
          "signature": "(m ~\u003e n) -\u003e t m ~\u003e t n",
          "source": "src/MHask-Functor.html#fmap",
          "type": "method"
        },
        "index": {
          "description": "Flipping the arrows on fmap type signature is just the same type signature in disguise",
          "hierarchy": "MHask Functor",
          "module": "MHask.Functor",
          "name": "fmap",
          "normalized": "(a b)-\u003ec a c b",
          "package": "MHask",
          "signature": "(m n)-\u003et m t n",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Functor.html#v:fmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompare to indexed.Control.Comonad.Indexed (IxComonad)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MHask.Indexed.Comonad",
          "name": "Comonad",
          "package": "MHask",
          "source": "src/MHask-Indexed-Comonad.html",
          "type": "module"
        },
        "index": {
          "description": "Compare to indexed.Control.Comonad.Indexed IxComonad",
          "hierarchy": "MHask Indexed Comonad",
          "module": "MHask.Indexed.Comonad",
          "name": "Comonad",
          "package": "MHask",
          "partial": "Comonad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Comonad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndexed version of \u003ca\u003eMHask.Comonad\u003c/a\u003e.\n Dual of \u003ca\u003eMHask.Indexed.Monad\u003c/a\u003e\n\u003c/p\u003e",
          "module": "MHask.Indexed.Comonad",
          "name": "IxComonad",
          "package": "MHask",
          "source": "src/MHask-Indexed-Comonad.html#IxComonad",
          "type": "class"
        },
        "index": {
          "description": "Indexed version of MHask.Comonad Dual of MHask.Indexed.Monad",
          "hierarchy": "MHask Indexed Comonad",
          "module": "MHask.Indexed.Comonad",
          "name": "IxComonad",
          "package": "MHask",
          "partial": "Ix Comonad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Comonad.html#t:IxComonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MHask.Indexed.Comonad",
          "name": "iduplicate",
          "package": "MHask",
          "signature": "t i j (t j k m) \u003c~ t i k m",
          "source": "src/MHask-Indexed-Comonad.html#iduplicate",
          "type": "method"
        },
        "index": {
          "hierarchy": "MHask Indexed Comonad",
          "module": "MHask.Indexed.Comonad",
          "name": "iduplicate",
          "package": "MHask",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Comonad.html#v:iduplicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MHask.Indexed.Comonad",
          "name": "iextend",
          "package": "MHask",
          "signature": "(m \u003c~ t j k n) -\u003e t i j m \u003c~ t i k n",
          "source": "src/MHask-Indexed-Comonad.html#iextend",
          "type": "method"
        },
        "index": {
          "hierarchy": "MHask Indexed Comonad",
          "module": "MHask.Indexed.Comonad",
          "name": "iextend",
          "normalized": "(a b c d e)-\u003eb f c a b f d e",
          "package": "MHask",
          "signature": "(m t j k n)-\u003et i j m t i k n",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Comonad.html#v:iextend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf you define your IxComonad in terms of iextend and iextract,\n then you get a free implementation of imap which can\n be used for IxFunctor.\n\u003c/p\u003e",
          "module": "MHask.Indexed.Comonad",
          "name": "imapComonad",
          "package": "MHask",
          "signature": "(m \u003c~ n) -\u003e t i j m \u003c~ t i j n",
          "source": "src/MHask-Indexed-Comonad.html#imapComonad",
          "type": "function"
        },
        "index": {
          "description": "If you define your IxComonad in terms of iextend and iextract then you get free implementation of imap which can be used for IxFunctor",
          "hierarchy": "MHask Indexed Comonad",
          "module": "MHask.Indexed.Comonad",
          "name": "imapComonad",
          "normalized": "(a b)-\u003ec d e a c d e b",
          "package": "MHask",
          "partial": "Comonad",
          "signature": "(m n)-\u003et i j m t i j n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Comonad.html#v:imapComonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompare to indexed.Data.Functor.Indexed (IxCopointed)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MHask.Indexed.Copointed",
          "name": "Copointed",
          "package": "MHask",
          "source": "src/MHask-Indexed-Copointed.html",
          "type": "module"
        },
        "index": {
          "description": "Compare to indexed.Data.Functor.Indexed IxCopointed",
          "hierarchy": "MHask Indexed Copointed",
          "module": "MHask.Indexed.Copointed",
          "name": "Copointed",
          "package": "MHask",
          "partial": "Copointed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Copointed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe indexed version of \u003ca\u003eMHask.Copointed\u003c/a\u003e.\n The dual of \u003ca\u003eMHask.Indexed.Pointed\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "MHask.Indexed.Copointed",
          "name": "IxCopointed",
          "package": "MHask",
          "source": "src/MHask-Indexed-Copointed.html#IxCopointed",
          "type": "class"
        },
        "index": {
          "description": "The indexed version of MHask.Copointed The dual of MHask.Indexed.Pointed",
          "hierarchy": "MHask Indexed Copointed",
          "module": "MHask.Indexed.Copointed",
          "name": "IxCopointed",
          "package": "MHask",
          "partial": "Ix Copointed",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Copointed.html#t:IxCopointed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MHask.Indexed.Copointed",
          "name": "iextract",
          "package": "MHask",
          "signature": "m \u003c~ t i i m",
          "source": "src/MHask-Indexed-Copointed.html#iextract",
          "type": "method"
        },
        "index": {
          "hierarchy": "MHask Indexed Copointed",
          "module": "MHask.Indexed.Copointed",
          "name": "iextract",
          "package": "MHask",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Copointed.html#v:iextract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompare to indexed.Data.Functor.Indexed (IxFunctor)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MHask.Indexed.Functor",
          "name": "Functor",
          "package": "MHask",
          "source": "src/MHask-Indexed-Functor.html",
          "type": "module"
        },
        "index": {
          "description": "Compare to indexed.Data.Functor.Indexed IxFunctor",
          "hierarchy": "MHask Indexed Functor",
          "module": "MHask.Indexed.Functor",
          "name": "Functor",
          "package": "MHask",
          "partial": "Functor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Functor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe indexed version of \u003ca\u003eMHask.Functor\u003c/a\u003e.\n IxFunctor is its own dual.\n\u003c/p\u003e",
          "module": "MHask.Indexed.Functor",
          "name": "IxFunctor",
          "package": "MHask",
          "source": "src/MHask-Indexed-Functor.html#IxFunctor",
          "type": "class"
        },
        "index": {
          "description": "The indexed version of MHask.Functor IxFunctor is its own dual",
          "hierarchy": "MHask Indexed Functor",
          "module": "MHask.Indexed.Functor",
          "name": "IxFunctor",
          "package": "MHask",
          "partial": "Ix Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Functor.html#t:IxFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlipping the arrows on imap's type signature\n is just the same type signature in disguise.\n\u003c/p\u003e\u003cpre\u003e (m \u003c~ n) -\u003e (t i j m \u003c~ t i j n)\n\u003c/pre\u003e",
          "module": "MHask.Indexed.Functor",
          "name": "imap",
          "package": "MHask",
          "signature": "(m ~\u003e n) -\u003e t i j m ~\u003e t i j n",
          "source": "src/MHask-Indexed-Functor.html#imap",
          "type": "method"
        },
        "index": {
          "description": "Flipping the arrows on imap type signature is just the same type signature in disguise",
          "hierarchy": "MHask Indexed Functor",
          "module": "MHask.Indexed.Functor",
          "name": "imap",
          "normalized": "(a b)-\u003ec d e a c d e b",
          "package": "MHask",
          "signature": "(m n)-\u003et i j m t i j n",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Functor.html#v:imap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompare to indexed.Control.Monad.Indexed (IxMonad)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MHask.Indexed.Monad",
          "name": "Monad",
          "package": "MHask",
          "source": "src/MHask-Indexed-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "Compare to indexed.Control.Monad.Indexed IxMonad",
          "hierarchy": "MHask Indexed Monad",
          "module": "MHask.Indexed.Monad",
          "name": "Monad",
          "package": "MHask",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndexed version of \u003ca\u003eMHask.Monad\u003c/a\u003e.\n Dual of \u003ca\u003eMHask.Indexed.Comonad\u003c/a\u003e\n\u003c/p\u003e",
          "module": "MHask.Indexed.Monad",
          "name": "IxMonad",
          "package": "MHask",
          "source": "src/MHask-Indexed-Monad.html#IxMonad",
          "type": "class"
        },
        "index": {
          "description": "Indexed version of MHask.Monad Dual of MHask.Indexed.Comonad",
          "hierarchy": "MHask Indexed Monad",
          "module": "MHask.Indexed.Monad",
          "name": "IxMonad",
          "package": "MHask",
          "partial": "Ix Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Monad.html#t:IxMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MHask.Indexed.Monad",
          "name": "ibind",
          "package": "MHask",
          "signature": "(m ~\u003e t j k n) -\u003e t i j m ~\u003e t i k n",
          "source": "src/MHask-Indexed-Monad.html#ibind",
          "type": "method"
        },
        "index": {
          "hierarchy": "MHask Indexed Monad",
          "module": "MHask.Indexed.Monad",
          "name": "ibind",
          "normalized": "(a b c d e)-\u003eb f c a b f d e",
          "package": "MHask",
          "signature": "(m t j k n)-\u003et i j m t i k n",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Monad.html#v:ibind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MHask.Indexed.Monad",
          "name": "ijoin",
          "package": "MHask",
          "signature": "t i j (t j k m) ~\u003e t i k m",
          "source": "src/MHask-Indexed-Monad.html#ijoin",
          "type": "method"
        },
        "index": {
          "hierarchy": "MHask Indexed Monad",
          "module": "MHask.Indexed.Monad",
          "name": "ijoin",
          "package": "MHask",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Monad.html#v:ijoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf you define your IxMonad in terms of ibind and ireturn,\n then you get a free implementation of imap which can\n be used for IxFunctor.\n\u003c/p\u003e",
          "module": "MHask.Indexed.Monad",
          "name": "imapMonad",
          "package": "MHask",
          "signature": "(m ~\u003e n) -\u003e t i j m ~\u003e t i j n",
          "source": "src/MHask-Indexed-Monad.html#imapMonad",
          "type": "function"
        },
        "index": {
          "description": "If you define your IxMonad in terms of ibind and ireturn then you get free implementation of imap which can be used for IxFunctor",
          "hierarchy": "MHask Indexed Monad",
          "module": "MHask.Indexed.Monad",
          "name": "imapMonad",
          "normalized": "(a b)-\u003ec d e a c d e b",
          "package": "MHask",
          "partial": "Monad",
          "signature": "(m n)-\u003et i j m t i j n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Monad.html#v:imapMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompare to indexed.Data.Functor.Indexed (IxPointed)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MHask.Indexed.Pointed",
          "name": "Pointed",
          "package": "MHask",
          "source": "src/MHask-Indexed-Pointed.html",
          "type": "module"
        },
        "index": {
          "description": "Compare to indexed.Data.Functor.Indexed IxPointed",
          "hierarchy": "MHask Indexed Pointed",
          "module": "MHask.Indexed.Pointed",
          "name": "Pointed",
          "package": "MHask",
          "partial": "Pointed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Pointed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe indexed version of \u003ca\u003eMHask.Pointed\u003c/a\u003e.\n The dual of \u003ca\u003eMHask.Indexed.Copointed\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "MHask.Indexed.Pointed",
          "name": "IxPointed",
          "package": "MHask",
          "source": "src/MHask-Indexed-Pointed.html#IxPointed",
          "type": "class"
        },
        "index": {
          "description": "The indexed version of MHask.Pointed The dual of MHask.Indexed.Copointed",
          "hierarchy": "MHask Indexed Pointed",
          "module": "MHask.Indexed.Pointed",
          "name": "IxPointed",
          "package": "MHask",
          "partial": "Ix Pointed",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Pointed.html#t:IxPointed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MHask.Indexed.Pointed",
          "name": "ireturn",
          "package": "MHask",
          "signature": "m ~\u003e t i i m",
          "source": "src/MHask-Indexed-Pointed.html#ireturn",
          "type": "method"
        },
        "index": {
          "hierarchy": "MHask Indexed Pointed",
          "module": "MHask.Indexed.Pointed",
          "name": "ireturn",
          "package": "MHask",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Pointed.html#v:ireturn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompare to base.Prelude (Monad)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MHask.Monad",
          "name": "Monad",
          "package": "MHask",
          "source": "src/MHask-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "Compare to base.Prelude Monad",
          "hierarchy": "MHask Monad",
          "module": "MHask.Monad",
          "name": "Monad",
          "package": "MHask",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDual of \u003ca\u003eMHask.Comonad\u003c/a\u003e\n\u003c/p\u003e",
          "module": "MHask.Monad",
          "name": "Monad",
          "package": "MHask",
          "source": "src/MHask-Monad.html#Monad",
          "type": "class"
        },
        "index": {
          "description": "Dual of MHask.Comonad",
          "hierarchy": "MHask Monad",
          "module": "MHask.Monad",
          "name": "Monad",
          "package": "MHask",
          "partial": "Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Monad.html#t:Monad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MHask.Monad",
          "name": "bind",
          "package": "MHask",
          "signature": "(m ~\u003e t n) -\u003e t m ~\u003e t n",
          "source": "src/MHask-Monad.html#bind",
          "type": "method"
        },
        "index": {
          "hierarchy": "MHask Monad",
          "module": "MHask.Monad",
          "name": "bind",
          "normalized": "(a b c)-\u003eb a b c",
          "package": "MHask",
          "signature": "(m t n)-\u003et m t n",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Monad.html#v:bind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf you define your Monad in terms of bind and return,\n then you get a free implementation of fmap which can\n be used for Functor.\n\u003c/p\u003e",
          "module": "MHask.Monad",
          "name": "fmapMonad",
          "package": "MHask",
          "signature": "(m ~\u003e n) -\u003e t m ~\u003e t n",
          "source": "src/MHask-Monad.html#fmapMonad",
          "type": "function"
        },
        "index": {
          "description": "If you define your Monad in terms of bind and return then you get free implementation of fmap which can be used for Functor",
          "hierarchy": "MHask Monad",
          "module": "MHask.Monad",
          "name": "fmapMonad",
          "normalized": "(a b)-\u003ec a c b",
          "package": "MHask",
          "partial": "Monad",
          "signature": "(m n)-\u003et m t n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Monad.html#v:fmapMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MHask.Monad",
          "name": "join",
          "package": "MHask",
          "signature": "t (t m) ~\u003e t m",
          "source": "src/MHask-Monad.html#join",
          "type": "method"
        },
        "index": {
          "hierarchy": "MHask Monad",
          "module": "MHask.Monad",
          "name": "join",
          "package": "MHask",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Monad.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEquivalent to transformers.Control.Monad.Trans.Class (MonadTrans)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MHask.Pointed",
          "name": "Pointed",
          "package": "MHask",
          "source": "src/MHask-Pointed.html",
          "type": "module"
        },
        "index": {
          "description": "Equivalent to transformers.Control.Monad.Trans.Class MonadTrans",
          "hierarchy": "MHask Pointed",
          "module": "MHask.Pointed",
          "name": "Pointed",
          "package": "MHask",
          "partial": "Pointed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Pointed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe dual of \u003ca\u003eMHask.Copointed\u003c/a\u003e\n\u003c/p\u003e",
          "module": "MHask.Pointed",
          "name": "Pointed",
          "package": "MHask",
          "source": "src/MHask-Pointed.html#Pointed",
          "type": "class"
        },
        "index": {
          "description": "The dual of MHask.Copointed",
          "hierarchy": "MHask Pointed",
          "module": "MHask.Pointed",
          "name": "Pointed",
          "package": "MHask",
          "partial": "Pointed",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Pointed.html#t:Pointed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "MHask.Pointed",
          "name": "return",
          "package": "MHask",
          "signature": "m ~\u003e t m",
          "source": "src/MHask-Pointed.html#return",
          "type": "method"
        },
        "index": {
          "hierarchy": "MHask Pointed",
          "module": "MHask.Pointed",
          "name": "return",
          "package": "MHask",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Pointed.html#v:return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious abstractions in the category of MHask.\n This re-exports everything, and should be imported\n qualified so that the operations and classes\n do not clash with their Hask counterparts.\n\u003c/p\u003e\u003cpre\u003e import qualified MHask\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "MHask",
          "name": "MHask",
          "package": "MHask",
          "source": "src/MHask.html",
          "type": "module"
        },
        "index": {
          "description": "Various abstractions in the category of MHask This re-exports everything and should be imported qualified so that the operations and classes do not clash with their Hask counterparts import qualified MHask",
          "hierarchy": "MHask",
          "module": "MHask",
          "name": "MHask",
          "package": "MHask",
          "partial": "MHask",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MHask/docs/MHask.html#"
      }
    }
  ]
]