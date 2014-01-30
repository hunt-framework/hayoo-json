[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/newtype-th/docs/Control-Newtype-TH.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a template Haskell based mechanism for deriving\n instances of the \u003ccode\u003eNewtype\u003c/code\u003e class, defined in \u003ccode\u003e Control.Newtype \u003c/code\u003e in the\n newtype package.  Example usage:\n\u003c/p\u003e\u003cpre\u003e newtype CartesianList a = CartesianList [a]\n $(mkNewTypes [''CartesianList])\n\n instance Monoid (CartesianList a) where\n   mempty = pack [[]]\n   a `mappend` b = pack [x ++ y | x \u003c- unpack a, y \u003c- unpack b]\n\u003c/pre\u003e\u003cpre\u003e *Main\u003e print $ underF CartesianList (\\xs -\u003e [fold xs]) ([[[4],[5],[6]], [[1],[2]], [[0]]])\n [[[4,1,0],[4,2,0],[5,1,0],[5,2,0],[6,1,0],[6,2,0]]]\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Newtype.TH",
        "fct-package": "newtype-th",
        "fct-signature": "module",
        "fct-source": "src/Control-Newtype-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "This module provides template Haskell based mechanism for deriving instances of the Newtype class defined in Control.Newtype in the newtype package Example usage newtype CartesianList CartesianList mkNewTypes CartesianList instance Monoid CartesianList where mempty pack mappend pack unpack unpack Main print underF CartesianList xs fold xs",
        "hierarchy": "Control Newtype TH",
        "module": "Control.Newtype.TH",
        "name": "TH",
        "normalized": "",
        "package": "newtype-th",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/newtype-th/docs/Control-Newtype-TH.html#v:mkNewType",
      "description": {
        "fct-descr": "\u003cp\u003eCompatibility with an old, ill-capitalized name.\n\u003c/p\u003e",
        "fct-module": "Control.Newtype.TH",
        "fct-package": "newtype-th",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Control-Newtype-TH.html#mkNewType",
        "fct-type": "function",
        "title": "mkNewType"
      },
      "index": {
        "description": "Compatibility with an old ill-capitalized name",
        "hierarchy": "Control Newtype TH",
        "module": "Control.Newtype.TH",
        "name": "mkNewType",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "newtype-th",
        "partial": "New Type",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/newtype-th/docs/Control-Newtype-TH.html#v:mkNewTypes",
      "description": {
        "fct-descr": "\u003cp\u003eCompatibility with an old, ill-capitalized name.\n\u003c/p\u003e",
        "fct-module": "Control.Newtype.TH",
        "fct-package": "newtype-th",
        "fct-signature": "[Name] -\u003e Q [Dec]",
        "fct-source": "src/Control-Newtype-TH.html#mkNewTypes",
        "fct-type": "function",
        "title": "mkNewTypes"
      },
      "index": {
        "description": "Compatibility with an old ill-capitalized name",
        "hierarchy": "Control Newtype TH",
        "module": "Control.Newtype.TH",
        "name": "mkNewTypes",
        "normalized": "[Name]-\u003eQ[Dec]",
        "package": "newtype-th",
        "partial": "New Types",
        "signature": "[Name]-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/newtype-th/docs/Control-Newtype-TH.html#v:mkNewtype",
      "description": {
        "fct-descr": "\u003cp\u003eDerive a single instance of \u003ccode\u003eNewtype\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Newtype.TH",
        "fct-package": "newtype-th",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Control-Newtype-TH.html#mkNewtype",
        "fct-type": "function",
        "title": "mkNewtype"
      },
      "index": {
        "description": "Derive single instance of Newtype",
        "hierarchy": "Control Newtype TH",
        "module": "Control.Newtype.TH",
        "name": "mkNewtype",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "newtype-th",
        "partial": "Newtype",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/newtype-th/docs/Control-Newtype-TH.html#v:mkNewtypes",
      "description": {
        "fct-descr": "\u003cp\u003eDerive instances of \u003ccode\u003eNewtype\u003c/code\u003e, specified as a list of references\n   to newtypes.\n\u003c/p\u003e",
        "fct-module": "Control.Newtype.TH",
        "fct-package": "newtype-th",
        "fct-signature": "[Name] -\u003e Q [Dec]",
        "fct-source": "src/Control-Newtype-TH.html#mkNewtypes",
        "fct-type": "function",
        "title": "mkNewtypes"
      },
      "index": {
        "description": "Derive instances of Newtype specified as list of references to newtypes",
        "hierarchy": "Control Newtype TH",
        "module": "Control.Newtype.TH",
        "name": "mkNewtypes",
        "normalized": "[Name]-\u003eQ[Dec]",
        "package": "newtype-th",
        "partial": "Newtypes",
        "signature": "[Name]-\u003eQ[Dec]"
      }
    }
  }
]