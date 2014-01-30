[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Arrow.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module sets the stage for the rest of the package.\n It defines a type synonym \u003ccode\u003e~\u003e\u003c/code\u003e which cleans up the\n type signatures,\n and  \u003ccode\u003e~\u003e~\u003c/code\u003e which is used in the default implementation\n of bind. These represent the type of arrows and arrow composition\n in MHask, respectively.\n\u003c/p\u003e\u003cp\u003eBy using \u003ccode\u003e~\u003e\u003c/code\u003e, type signatures for the MHask class operations\n can be easily compared to their Hask counterparts. However,\n as a reminder that you are dealing with Monads, where\n typically you would see \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e in the Hask counterpart,\n you will instead see \u003ccode\u003em\u003c/code\u003e and \u003ccode\u003en\u003c/code\u003e, and where you would\n typically see \u003ccode\u003em\u003c/code\u003e or \u003ccode\u003ew\u003c/code\u003e, you will instead see \u003ccode\u003et\u003c/code\u003e,\n as a mnemonic for Monad transformer.\n\u003c/p\u003e\u003cp\u003eFor illustrative purposes, this module also provides\n \u003ccode\u003e\u003c~\u003c/code\u003e and \u003ccode\u003e~\u003c~\u003c/code\u003e, to clearly illustrate how duals are\n nothing more than just \"flipping the arrows\".\n You are encouraged to compare docs or even source files\n to see just how similar they are, all the way down\n to default implementations.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "MHask.Arrow",
        "fct-package": "MHask",
        "fct-signature": "module",
        "fct-source": "src/MHask-Arrow.html",
        "fct-type": "module",
        "title": "Arrow"
      },
      "index": {
        "description": "This module sets the stage for the rest of the package It defines type synonym which cleans up the type signatures and which is used in the default implementation of bind These represent the type of arrows and arrow composition in MHask respectively By using type signatures for the MHask class operations can be easily compared to their Hask counterparts However as reminder that you are dealing with Monads where typically you would see and in the Hask counterpart you will instead see and and where you would typically see or you will instead see as mnemonic for Monad transformer For illustrative purposes this module also provides and to clearly illustrate how duals are nothing more than just flipping the arrows You are encouraged to compare docs or even source files to see just how similar they are all the way down to default implementations",
        "hierarchy": "MHask Arrow",
        "module": "MHask.Arrow",
        "name": "Arrow",
        "normalized": "",
        "package": "MHask",
        "partial": "Arrow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Arrow.html#t:-126--62-",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e~\u003e\u003c/code\u003e type represents arrows in the\n category of MHask. \n\u003c/p\u003e",
        "fct-module": "MHask.Arrow",
        "fct-package": "MHask",
        "fct-signature": "type",
        "fct-source": "src/MHask-Arrow.html#~%3E",
        "fct-type": "type",
        "title": "(~\u003e)"
      },
      "index": {
        "description": "The type represents arrows in the category of MHask",
        "hierarchy": "MHask Arrow",
        "module": "MHask.Arrow",
        "name": "(~\u003e) ~\u003e",
        "normalized": "",
        "package": "MHask",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Arrow.html#t:-60--126-",
      "description": {
        "fct-descr": "\u003cp\u003eIt's just \u003ccode\u003e~\u003e\u003c/code\u003e flipped.\n\u003c/p\u003e\u003cpre\u003e type m \u003c~ n = n ~\u003e m\n\u003c/pre\u003e",
        "fct-module": "MHask.Arrow",
        "fct-package": "MHask",
        "fct-signature": "type",
        "fct-source": "src/MHask-Arrow.html#%3C~",
        "fct-type": "type",
        "title": "(\u003c~)"
      },
      "index": {
        "description": "It just flipped type",
        "hierarchy": "MHask Arrow",
        "module": "MHask.Arrow",
        "name": "(\u003c~) \u003c~",
        "normalized": "",
        "package": "MHask",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Arrow.html#v:-126--60--126-",
      "description": {
        "fct-descr": "\u003cp\u003eIt's just \u003ccode\u003e~\u003e~\u003c/code\u003e flipped.\n\u003c/p\u003e\u003cpre\u003e (~\u003c~) = flip (~\u003e~)\n\u003c/pre\u003e",
        "fct-module": "MHask.Arrow",
        "fct-package": "MHask",
        "fct-signature": "(c \u003c~ b) -\u003e (b \u003c~ a) -\u003e c \u003c~ a",
        "fct-source": "src/MHask-Arrow.html#~%3C~",
        "fct-type": "function",
        "title": "(~\u003c~)"
      },
      "index": {
        "description": "It just flipped flip",
        "hierarchy": "MHask Arrow",
        "module": "MHask.Arrow",
        "name": "(~\u003c~) ~\u003c~",
        "normalized": "(a b)-\u003e(b c)-\u003ea c",
        "package": "MHask",
        "partial": "",
        "signature": "(c b)-\u003e(b a)-\u003ec a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Arrow.html#v:-126--62--126-",
      "description": {
        "fct-descr": "\u003cp\u003eLeft-to-right composition of arrows in MHask.\n\u003c/p\u003e",
        "fct-module": "MHask.Arrow",
        "fct-package": "MHask",
        "fct-signature": "(a ~\u003e b) -\u003e (b ~\u003e c) -\u003e a ~\u003e c",
        "fct-source": "src/MHask-Arrow.html#~%3E~",
        "fct-type": "function",
        "title": "(~\u003e~)"
      },
      "index": {
        "description": "Left-to-right composition of arrows in MHask",
        "hierarchy": "MHask Arrow",
        "module": "MHask.Arrow",
        "name": "(~\u003e~) ~\u003e~",
        "normalized": "(a b)-\u003e(b c)-\u003ea c",
        "package": "MHask",
        "partial": "",
        "signature": "(a b)-\u003e(b c)-\u003ea c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Comonad.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompare to comonad.Control.Comonad (Comonad)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "MHask.Comonad",
        "fct-package": "MHask",
        "fct-signature": "module",
        "fct-source": "src/MHask-Comonad.html",
        "fct-type": "module",
        "title": "Comonad"
      },
      "index": {
        "description": "Compare to comonad.Control.Comonad Comonad",
        "hierarchy": "MHask Comonad",
        "module": "MHask.Comonad",
        "name": "Comonad",
        "normalized": "",
        "package": "MHask",
        "partial": "Comonad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Comonad.html#t:Comonad",
      "description": {
        "fct-descr": "\u003cp\u003eDual of \u003ca\u003eMHask.Monad\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "MHask.Comonad",
        "fct-package": "MHask",
        "fct-signature": "class",
        "fct-source": "src/MHask-Comonad.html#Comonad",
        "fct-type": "class",
        "title": "Comonad"
      },
      "index": {
        "description": "Dual of MHask.Monad",
        "hierarchy": "MHask Comonad",
        "module": "MHask.Comonad",
        "name": "Comonad",
        "normalized": "",
        "package": "MHask",
        "partial": "Comonad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Comonad.html#v:duplicate",
      "description": {
        "fct-module": "MHask.Comonad",
        "fct-package": "MHask",
        "fct-signature": "t (t m) \u003c~ t m",
        "fct-source": "src/MHask-Comonad.html#duplicate",
        "fct-type": "method",
        "title": "duplicate"
      },
      "index": {
        "description": "",
        "hierarchy": "MHask Comonad",
        "module": "MHask.Comonad",
        "name": "duplicate",
        "normalized": "",
        "package": "MHask",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Comonad.html#v:extend",
      "description": {
        "fct-module": "MHask.Comonad",
        "fct-package": "MHask",
        "fct-signature": "(m \u003c~ t n) -\u003e t m \u003c~ t n",
        "fct-source": "src/MHask-Comonad.html#extend",
        "fct-type": "method",
        "title": "extend"
      },
      "index": {
        "description": "",
        "hierarchy": "MHask Comonad",
        "module": "MHask.Comonad",
        "name": "extend",
        "normalized": "(a b c)-\u003eb a b c",
        "package": "MHask",
        "partial": "",
        "signature": "(m t n)-\u003et m t n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Comonad.html#v:fmapComonad",
      "description": {
        "fct-descr": "\u003cp\u003eIf you define your Comonad in terms of extend and extract,\n then you get a free implementation of fmap which can\n be used for Functor.\n\u003c/p\u003e",
        "fct-module": "MHask.Comonad",
        "fct-package": "MHask",
        "fct-signature": "(m \u003c~ n) -\u003e t m \u003c~ t n",
        "fct-source": "src/MHask-Comonad.html#fmapComonad",
        "fct-type": "function",
        "title": "fmapComonad"
      },
      "index": {
        "description": "If you define your Comonad in terms of extend and extract then you get free implementation of fmap which can be used for Functor",
        "hierarchy": "MHask Comonad",
        "module": "MHask.Comonad",
        "name": "fmapComonad",
        "normalized": "(a b)-\u003ec a c b",
        "package": "MHask",
        "partial": "Comonad",
        "signature": "(m n)-\u003et m t n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Copointed.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompare to comonad.Control.Comonad (Copointed)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "MHask.Copointed",
        "fct-package": "MHask",
        "fct-signature": "module",
        "fct-source": "src/MHask-Copointed.html",
        "fct-type": "module",
        "title": "Copointed"
      },
      "index": {
        "description": "Compare to comonad.Control.Comonad Copointed",
        "hierarchy": "MHask Copointed",
        "module": "MHask.Copointed",
        "name": "Copointed",
        "normalized": "",
        "package": "MHask",
        "partial": "Copointed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Copointed.html#t:Copointed",
      "description": {
        "fct-descr": "\u003cp\u003eThe dual of \u003ca\u003eMHask.Pointed\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "MHask.Copointed",
        "fct-package": "MHask",
        "fct-signature": "class",
        "fct-source": "src/MHask-Copointed.html#Copointed",
        "fct-type": "class",
        "title": "Copointed"
      },
      "index": {
        "description": "The dual of MHask.Pointed",
        "hierarchy": "MHask Copointed",
        "module": "MHask.Copointed",
        "name": "Copointed",
        "normalized": "",
        "package": "MHask",
        "partial": "Copointed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Copointed.html#v:extract",
      "description": {
        "fct-module": "MHask.Copointed",
        "fct-package": "MHask",
        "fct-signature": "m \u003c~ t m",
        "fct-source": "src/MHask-Copointed.html#extract",
        "fct-type": "method",
        "title": "extract"
      },
      "index": {
        "description": "",
        "hierarchy": "MHask Copointed",
        "module": "MHask.Copointed",
        "name": "extract",
        "normalized": "",
        "package": "MHask",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Functor.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompare to base.Prelude.Functor (Functor)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "MHask.Functor",
        "fct-package": "MHask",
        "fct-signature": "module",
        "fct-source": "src/MHask-Functor.html",
        "fct-type": "module",
        "title": "Functor"
      },
      "index": {
        "description": "Compare to base.Prelude.Functor Functor",
        "hierarchy": "MHask Functor",
        "module": "MHask.Functor",
        "name": "Functor",
        "normalized": "",
        "package": "MHask",
        "partial": "Functor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Functor.html#t:Functor",
      "description": {
        "fct-descr": "\u003cp\u003eFunctor is its own dual.\n\u003c/p\u003e",
        "fct-module": "MHask.Functor",
        "fct-package": "MHask",
        "fct-signature": "class",
        "fct-source": "src/MHask-Functor.html#Functor",
        "fct-type": "class",
        "title": "Functor"
      },
      "index": {
        "description": "Functor is its own dual",
        "hierarchy": "MHask Functor",
        "module": "MHask.Functor",
        "name": "Functor",
        "normalized": "",
        "package": "MHask",
        "partial": "Functor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Functor.html#v:fmap",
      "description": {
        "fct-descr": "\u003cp\u003eFlipping the arrows on fmap's type signature\n is just the same type signature in disguise.\n\u003c/p\u003e\u003cpre\u003e (m \u003c~ n) -\u003e (t m \u003c~ t n)\n\u003c/pre\u003e",
        "fct-module": "MHask.Functor",
        "fct-package": "MHask",
        "fct-signature": "(m ~\u003e n) -\u003e t m ~\u003e t n",
        "fct-source": "src/MHask-Functor.html#fmap",
        "fct-type": "method",
        "title": "fmap"
      },
      "index": {
        "description": "Flipping the arrows on fmap type signature is just the same type signature in disguise",
        "hierarchy": "MHask Functor",
        "module": "MHask.Functor",
        "name": "fmap",
        "normalized": "(a b)-\u003ec a c b",
        "package": "MHask",
        "partial": "",
        "signature": "(m n)-\u003et m t n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Comonad.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompare to indexed.Control.Comonad.Indexed (IxComonad)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "MHask.Indexed.Comonad",
        "fct-package": "MHask",
        "fct-signature": "module",
        "fct-source": "src/MHask-Indexed-Comonad.html",
        "fct-type": "module",
        "title": "Comonad"
      },
      "index": {
        "description": "Compare to indexed.Control.Comonad.Indexed IxComonad",
        "hierarchy": "MHask Indexed Comonad",
        "module": "MHask.Indexed.Comonad",
        "name": "Comonad",
        "normalized": "",
        "package": "MHask",
        "partial": "Comonad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Comonad.html#t:IxComonad",
      "description": {
        "fct-descr": "\u003cp\u003eIndexed version of \u003ca\u003eMHask.Comonad\u003c/a\u003e.\n Dual of \u003ca\u003eMHask.Indexed.Monad\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "MHask.Indexed.Comonad",
        "fct-package": "MHask",
        "fct-signature": "class",
        "fct-source": "src/MHask-Indexed-Comonad.html#IxComonad",
        "fct-type": "class",
        "title": "IxComonad"
      },
      "index": {
        "description": "Indexed version of MHask.Comonad Dual of MHask.Indexed.Monad",
        "hierarchy": "MHask Indexed Comonad",
        "module": "MHask.Indexed.Comonad",
        "name": "IxComonad",
        "normalized": "",
        "package": "MHask",
        "partial": "Ix Comonad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Comonad.html#v:iduplicate",
      "description": {
        "fct-module": "MHask.Indexed.Comonad",
        "fct-package": "MHask",
        "fct-signature": "t i j (t j k m) \u003c~ t i k m",
        "fct-source": "src/MHask-Indexed-Comonad.html#iduplicate",
        "fct-type": "method",
        "title": "iduplicate"
      },
      "index": {
        "description": "",
        "hierarchy": "MHask Indexed Comonad",
        "module": "MHask.Indexed.Comonad",
        "name": "iduplicate",
        "normalized": "",
        "package": "MHask",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Comonad.html#v:iextend",
      "description": {
        "fct-module": "MHask.Indexed.Comonad",
        "fct-package": "MHask",
        "fct-signature": "(m \u003c~ t j k n) -\u003e t i j m \u003c~ t i k n",
        "fct-source": "src/MHask-Indexed-Comonad.html#iextend",
        "fct-type": "method",
        "title": "iextend"
      },
      "index": {
        "description": "",
        "hierarchy": "MHask Indexed Comonad",
        "module": "MHask.Indexed.Comonad",
        "name": "iextend",
        "normalized": "(a b c d e)-\u003eb f c a b f d e",
        "package": "MHask",
        "partial": "",
        "signature": "(m t j k n)-\u003et i j m t i k n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Comonad.html#v:imapComonad",
      "description": {
        "fct-descr": "\u003cp\u003eIf you define your IxComonad in terms of iextend and iextract,\n then you get a free implementation of imap which can\n be used for IxFunctor.\n\u003c/p\u003e",
        "fct-module": "MHask.Indexed.Comonad",
        "fct-package": "MHask",
        "fct-signature": "(m \u003c~ n) -\u003e t i j m \u003c~ t i j n",
        "fct-source": "src/MHask-Indexed-Comonad.html#imapComonad",
        "fct-type": "function",
        "title": "imapComonad"
      },
      "index": {
        "description": "If you define your IxComonad in terms of iextend and iextract then you get free implementation of imap which can be used for IxFunctor",
        "hierarchy": "MHask Indexed Comonad",
        "module": "MHask.Indexed.Comonad",
        "name": "imapComonad",
        "normalized": "(a b)-\u003ec d e a c d e b",
        "package": "MHask",
        "partial": "Comonad",
        "signature": "(m n)-\u003et i j m t i j n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Copointed.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompare to indexed.Data.Functor.Indexed (IxCopointed)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "MHask.Indexed.Copointed",
        "fct-package": "MHask",
        "fct-signature": "module",
        "fct-source": "src/MHask-Indexed-Copointed.html",
        "fct-type": "module",
        "title": "Copointed"
      },
      "index": {
        "description": "Compare to indexed.Data.Functor.Indexed IxCopointed",
        "hierarchy": "MHask Indexed Copointed",
        "module": "MHask.Indexed.Copointed",
        "name": "Copointed",
        "normalized": "",
        "package": "MHask",
        "partial": "Copointed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Copointed.html#t:IxCopointed",
      "description": {
        "fct-descr": "\u003cp\u003eThe indexed version of \u003ca\u003eMHask.Copointed\u003c/a\u003e.\n The dual of \u003ca\u003eMHask.Indexed.Pointed\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "MHask.Indexed.Copointed",
        "fct-package": "MHask",
        "fct-signature": "class",
        "fct-source": "src/MHask-Indexed-Copointed.html#IxCopointed",
        "fct-type": "class",
        "title": "IxCopointed"
      },
      "index": {
        "description": "The indexed version of MHask.Copointed The dual of MHask.Indexed.Pointed",
        "hierarchy": "MHask Indexed Copointed",
        "module": "MHask.Indexed.Copointed",
        "name": "IxCopointed",
        "normalized": "",
        "package": "MHask",
        "partial": "Ix Copointed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Copointed.html#v:iextract",
      "description": {
        "fct-module": "MHask.Indexed.Copointed",
        "fct-package": "MHask",
        "fct-signature": "m \u003c~ t i i m",
        "fct-source": "src/MHask-Indexed-Copointed.html#iextract",
        "fct-type": "method",
        "title": "iextract"
      },
      "index": {
        "description": "",
        "hierarchy": "MHask Indexed Copointed",
        "module": "MHask.Indexed.Copointed",
        "name": "iextract",
        "normalized": "",
        "package": "MHask",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Functor.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompare to indexed.Data.Functor.Indexed (IxFunctor)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "MHask.Indexed.Functor",
        "fct-package": "MHask",
        "fct-signature": "module",
        "fct-source": "src/MHask-Indexed-Functor.html",
        "fct-type": "module",
        "title": "Functor"
      },
      "index": {
        "description": "Compare to indexed.Data.Functor.Indexed IxFunctor",
        "hierarchy": "MHask Indexed Functor",
        "module": "MHask.Indexed.Functor",
        "name": "Functor",
        "normalized": "",
        "package": "MHask",
        "partial": "Functor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Functor.html#t:IxFunctor",
      "description": {
        "fct-descr": "\u003cp\u003eThe indexed version of \u003ca\u003eMHask.Functor\u003c/a\u003e.\n IxFunctor is its own dual.\n\u003c/p\u003e",
        "fct-module": "MHask.Indexed.Functor",
        "fct-package": "MHask",
        "fct-signature": "class",
        "fct-source": "src/MHask-Indexed-Functor.html#IxFunctor",
        "fct-type": "class",
        "title": "IxFunctor"
      },
      "index": {
        "description": "The indexed version of MHask.Functor IxFunctor is its own dual",
        "hierarchy": "MHask Indexed Functor",
        "module": "MHask.Indexed.Functor",
        "name": "IxFunctor",
        "normalized": "",
        "package": "MHask",
        "partial": "Ix Functor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Functor.html#v:imap",
      "description": {
        "fct-descr": "\u003cp\u003eFlipping the arrows on imap's type signature\n is just the same type signature in disguise.\n\u003c/p\u003e\u003cpre\u003e (m \u003c~ n) -\u003e (t i j m \u003c~ t i j n)\n\u003c/pre\u003e",
        "fct-module": "MHask.Indexed.Functor",
        "fct-package": "MHask",
        "fct-signature": "(m ~\u003e n) -\u003e t i j m ~\u003e t i j n",
        "fct-source": "src/MHask-Indexed-Functor.html#imap",
        "fct-type": "method",
        "title": "imap"
      },
      "index": {
        "description": "Flipping the arrows on imap type signature is just the same type signature in disguise",
        "hierarchy": "MHask Indexed Functor",
        "module": "MHask.Indexed.Functor",
        "name": "imap",
        "normalized": "(a b)-\u003ec d e a c d e b",
        "package": "MHask",
        "partial": "",
        "signature": "(m n)-\u003et i j m t i j n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Monad.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompare to indexed.Control.Monad.Indexed (IxMonad)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "MHask.Indexed.Monad",
        "fct-package": "MHask",
        "fct-signature": "module",
        "fct-source": "src/MHask-Indexed-Monad.html",
        "fct-type": "module",
        "title": "Monad"
      },
      "index": {
        "description": "Compare to indexed.Control.Monad.Indexed IxMonad",
        "hierarchy": "MHask Indexed Monad",
        "module": "MHask.Indexed.Monad",
        "name": "Monad",
        "normalized": "",
        "package": "MHask",
        "partial": "Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Monad.html#t:IxMonad",
      "description": {
        "fct-descr": "\u003cp\u003eIndexed version of \u003ca\u003eMHask.Monad\u003c/a\u003e.\n Dual of \u003ca\u003eMHask.Indexed.Comonad\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "MHask.Indexed.Monad",
        "fct-package": "MHask",
        "fct-signature": "class",
        "fct-source": "src/MHask-Indexed-Monad.html#IxMonad",
        "fct-type": "class",
        "title": "IxMonad"
      },
      "index": {
        "description": "Indexed version of MHask.Monad Dual of MHask.Indexed.Comonad",
        "hierarchy": "MHask Indexed Monad",
        "module": "MHask.Indexed.Monad",
        "name": "IxMonad",
        "normalized": "",
        "package": "MHask",
        "partial": "Ix Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Monad.html#v:ibind",
      "description": {
        "fct-module": "MHask.Indexed.Monad",
        "fct-package": "MHask",
        "fct-signature": "(m ~\u003e t j k n) -\u003e t i j m ~\u003e t i k n",
        "fct-source": "src/MHask-Indexed-Monad.html#ibind",
        "fct-type": "method",
        "title": "ibind"
      },
      "index": {
        "description": "",
        "hierarchy": "MHask Indexed Monad",
        "module": "MHask.Indexed.Monad",
        "name": "ibind",
        "normalized": "(a b c d e)-\u003eb f c a b f d e",
        "package": "MHask",
        "partial": "",
        "signature": "(m t j k n)-\u003et i j m t i k n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Monad.html#v:ijoin",
      "description": {
        "fct-module": "MHask.Indexed.Monad",
        "fct-package": "MHask",
        "fct-signature": "t i j (t j k m) ~\u003e t i k m",
        "fct-source": "src/MHask-Indexed-Monad.html#ijoin",
        "fct-type": "method",
        "title": "ijoin"
      },
      "index": {
        "description": "",
        "hierarchy": "MHask Indexed Monad",
        "module": "MHask.Indexed.Monad",
        "name": "ijoin",
        "normalized": "",
        "package": "MHask",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Monad.html#v:imapMonad",
      "description": {
        "fct-descr": "\u003cp\u003eIf you define your IxMonad in terms of ibind and ireturn,\n then you get a free implementation of imap which can\n be used for IxFunctor.\n\u003c/p\u003e",
        "fct-module": "MHask.Indexed.Monad",
        "fct-package": "MHask",
        "fct-signature": "(m ~\u003e n) -\u003e t i j m ~\u003e t i j n",
        "fct-source": "src/MHask-Indexed-Monad.html#imapMonad",
        "fct-type": "function",
        "title": "imapMonad"
      },
      "index": {
        "description": "If you define your IxMonad in terms of ibind and ireturn then you get free implementation of imap which can be used for IxFunctor",
        "hierarchy": "MHask Indexed Monad",
        "module": "MHask.Indexed.Monad",
        "name": "imapMonad",
        "normalized": "(a b)-\u003ec d e a c d e b",
        "package": "MHask",
        "partial": "Monad",
        "signature": "(m n)-\u003et i j m t i j n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Pointed.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompare to indexed.Data.Functor.Indexed (IxPointed)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "MHask.Indexed.Pointed",
        "fct-package": "MHask",
        "fct-signature": "module",
        "fct-source": "src/MHask-Indexed-Pointed.html",
        "fct-type": "module",
        "title": "Pointed"
      },
      "index": {
        "description": "Compare to indexed.Data.Functor.Indexed IxPointed",
        "hierarchy": "MHask Indexed Pointed",
        "module": "MHask.Indexed.Pointed",
        "name": "Pointed",
        "normalized": "",
        "package": "MHask",
        "partial": "Pointed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Pointed.html#t:IxPointed",
      "description": {
        "fct-descr": "\u003cp\u003eThe indexed version of \u003ca\u003eMHask.Pointed\u003c/a\u003e.\n The dual of \u003ca\u003eMHask.Indexed.Copointed\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "MHask.Indexed.Pointed",
        "fct-package": "MHask",
        "fct-signature": "class",
        "fct-source": "src/MHask-Indexed-Pointed.html#IxPointed",
        "fct-type": "class",
        "title": "IxPointed"
      },
      "index": {
        "description": "The indexed version of MHask.Pointed The dual of MHask.Indexed.Copointed",
        "hierarchy": "MHask Indexed Pointed",
        "module": "MHask.Indexed.Pointed",
        "name": "IxPointed",
        "normalized": "",
        "package": "MHask",
        "partial": "Ix Pointed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Indexed-Pointed.html#v:ireturn",
      "description": {
        "fct-module": "MHask.Indexed.Pointed",
        "fct-package": "MHask",
        "fct-signature": "m ~\u003e t i i m",
        "fct-source": "src/MHask-Indexed-Pointed.html#ireturn",
        "fct-type": "method",
        "title": "ireturn"
      },
      "index": {
        "description": "",
        "hierarchy": "MHask Indexed Pointed",
        "module": "MHask.Indexed.Pointed",
        "name": "ireturn",
        "normalized": "",
        "package": "MHask",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Monad.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompare to base.Prelude (Monad)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "MHask.Monad",
        "fct-package": "MHask",
        "fct-signature": "module",
        "fct-source": "src/MHask-Monad.html",
        "fct-type": "module",
        "title": "Monad"
      },
      "index": {
        "description": "Compare to base.Prelude Monad",
        "hierarchy": "MHask Monad",
        "module": "MHask.Monad",
        "name": "Monad",
        "normalized": "",
        "package": "MHask",
        "partial": "Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Monad.html#t:Monad",
      "description": {
        "fct-descr": "\u003cp\u003eDual of \u003ca\u003eMHask.Comonad\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "MHask.Monad",
        "fct-package": "MHask",
        "fct-signature": "class",
        "fct-source": "src/MHask-Monad.html#Monad",
        "fct-type": "class",
        "title": "Monad"
      },
      "index": {
        "description": "Dual of MHask.Comonad",
        "hierarchy": "MHask Monad",
        "module": "MHask.Monad",
        "name": "Monad",
        "normalized": "",
        "package": "MHask",
        "partial": "Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Monad.html#v:bind",
      "description": {
        "fct-module": "MHask.Monad",
        "fct-package": "MHask",
        "fct-signature": "(m ~\u003e t n) -\u003e t m ~\u003e t n",
        "fct-source": "src/MHask-Monad.html#bind",
        "fct-type": "method",
        "title": "bind"
      },
      "index": {
        "description": "",
        "hierarchy": "MHask Monad",
        "module": "MHask.Monad",
        "name": "bind",
        "normalized": "(a b c)-\u003eb a b c",
        "package": "MHask",
        "partial": "",
        "signature": "(m t n)-\u003et m t n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Monad.html#v:fmapMonad",
      "description": {
        "fct-descr": "\u003cp\u003eIf you define your Monad in terms of bind and return,\n then you get a free implementation of fmap which can\n be used for Functor.\n\u003c/p\u003e",
        "fct-module": "MHask.Monad",
        "fct-package": "MHask",
        "fct-signature": "(m ~\u003e n) -\u003e t m ~\u003e t n",
        "fct-source": "src/MHask-Monad.html#fmapMonad",
        "fct-type": "function",
        "title": "fmapMonad"
      },
      "index": {
        "description": "If you define your Monad in terms of bind and return then you get free implementation of fmap which can be used for Functor",
        "hierarchy": "MHask Monad",
        "module": "MHask.Monad",
        "name": "fmapMonad",
        "normalized": "(a b)-\u003ec a c b",
        "package": "MHask",
        "partial": "Monad",
        "signature": "(m n)-\u003et m t n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Monad.html#v:join",
      "description": {
        "fct-module": "MHask.Monad",
        "fct-package": "MHask",
        "fct-signature": "t (t m) ~\u003e t m",
        "fct-source": "src/MHask-Monad.html#join",
        "fct-type": "method",
        "title": "join"
      },
      "index": {
        "description": "",
        "hierarchy": "MHask Monad",
        "module": "MHask.Monad",
        "name": "join",
        "normalized": "",
        "package": "MHask",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Pointed.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEquivalent to transformers.Control.Monad.Trans.Class (MonadTrans)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "MHask.Pointed",
        "fct-package": "MHask",
        "fct-signature": "module",
        "fct-source": "src/MHask-Pointed.html",
        "fct-type": "module",
        "title": "Pointed"
      },
      "index": {
        "description": "Equivalent to transformers.Control.Monad.Trans.Class MonadTrans",
        "hierarchy": "MHask Pointed",
        "module": "MHask.Pointed",
        "name": "Pointed",
        "normalized": "",
        "package": "MHask",
        "partial": "Pointed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Pointed.html#t:Pointed",
      "description": {
        "fct-descr": "\u003cp\u003eThe dual of \u003ca\u003eMHask.Copointed\u003c/a\u003e\n\u003c/p\u003e",
        "fct-module": "MHask.Pointed",
        "fct-package": "MHask",
        "fct-signature": "class",
        "fct-source": "src/MHask-Pointed.html#Pointed",
        "fct-type": "class",
        "title": "Pointed"
      },
      "index": {
        "description": "The dual of MHask.Copointed",
        "hierarchy": "MHask Pointed",
        "module": "MHask.Pointed",
        "name": "Pointed",
        "normalized": "",
        "package": "MHask",
        "partial": "Pointed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask-Pointed.html#v:return",
      "description": {
        "fct-module": "MHask.Pointed",
        "fct-package": "MHask",
        "fct-signature": "m ~\u003e t m",
        "fct-source": "src/MHask-Pointed.html#return",
        "fct-type": "method",
        "title": "return"
      },
      "index": {
        "description": "",
        "hierarchy": "MHask Pointed",
        "module": "MHask.Pointed",
        "name": "return",
        "normalized": "",
        "package": "MHask",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/MHask/docs/MHask.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eVarious abstractions in the category of MHask.\n This re-exports everything, and should be imported\n qualified so that the operations and classes\n do not clash with their Hask counterparts.\n\u003c/p\u003e\u003cpre\u003e import qualified MHask\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "MHask",
        "fct-package": "MHask",
        "fct-signature": "module",
        "fct-source": "src/MHask.html",
        "fct-type": "module",
        "title": "MHask"
      },
      "index": {
        "description": "Various abstractions in the category of MHask This re-exports everything and should be imported qualified so that the operations and classes do not clash with their Hask counterparts import qualified MHask",
        "hierarchy": "MHask",
        "module": "MHask",
        "name": "MHask",
        "normalized": "",
        "package": "MHask",
        "partial": "MHask",
        "signature": ""
      }
    }
  }
]