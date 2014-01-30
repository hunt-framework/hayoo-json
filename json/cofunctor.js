[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cofunctor/docs/Data-Cofunctor.html#",
      "description": {
        "fct-module": "Data.Cofunctor",
        "fct-package": "cofunctor",
        "fct-signature": "module",
        "fct-source": "src/Data-Cofunctor.html",
        "fct-type": "module",
        "title": "Cofunctor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cofunctor",
        "module": "Data.Cofunctor",
        "name": "Cofunctor",
        "normalized": "",
        "package": "cofunctor",
        "partial": "Cofunctor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cofunctor/docs/Data-Cofunctor.html#t:Cofunctor",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eDEPRECATED: please use the \"contravariant\" package\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThe Confunctor class is useful for \"sink-like\" types, especially when\n  combined with GADTs. For instance:\n\u003c/p\u003e\u003cpre\u003e \n data StringStack a where\n     StringStack :: (a -\u003e String) -\u003e [String] -\u003e StringStack a\n\n emptyStack :: StringStack String\n emptyStack = StringStack id []\n\n push :: a -\u003e StringStack a -\u003e StringStack a\n push a (StringStack f ss) = StringStack f (f s : ss)\n\n instance Confunctor StringStack where\n     cofmap f (StringStack g ss) = StringStack (g . f) ss\n\u003c/pre\u003e\u003cp\u003eSee the \u003ca\u003esplit-chan\u003c/a\u003e package for another example.\n\u003c/p\u003e\u003cp\u003eA class for contravariant functors\n\u003c/p\u003e",
        "fct-module": "Data.Cofunctor",
        "fct-package": "cofunctor",
        "fct-signature": "class",
        "fct-source": "src/Data-Cofunctor.html#Cofunctor",
        "fct-type": "class",
        "title": "Cofunctor"
      },
      "index": {
        "description": "DEPRECATED please use the contravariant package The Confunctor class is useful for sink-like types especially when combined with GADTs For instance data StringStack where StringStack String String StringStack emptyStack StringStack String emptyStack StringStack id push StringStack StringStack push StringStack ss StringStack ss instance Confunctor StringStack where cofmap StringStack ss StringStack ss See the split-chan package for another example class for contravariant functors",
        "hierarchy": "Data Cofunctor",
        "module": "Data.Cofunctor",
        "name": "Cofunctor",
        "normalized": "",
        "package": "cofunctor",
        "partial": "Cofunctor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cofunctor/docs/Data-Cofunctor.html#v:cofmap",
      "description": {
        "fct-module": "Data.Cofunctor",
        "fct-package": "cofunctor",
        "fct-signature": "(b -\u003e a) -\u003e f a -\u003e f b",
        "fct-source": "src/Data-Cofunctor.html#cofmap",
        "fct-type": "method",
        "title": "cofmap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Cofunctor",
        "module": "Data.Cofunctor",
        "name": "cofmap",
        "normalized": "(a-\u003eb)-\u003ec b-\u003ec a",
        "package": "cofunctor",
        "partial": "",
        "signature": "(b-\u003ea)-\u003ef a-\u003ef b"
      }
    }
  }
]