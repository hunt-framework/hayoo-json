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
        "word": "newtype-th"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a template Haskell based mechanism for deriving\n instances of the \u003ccode\u003eNewtype\u003c/code\u003e class, defined in \u003ccode\u003e Control.Newtype \u003c/code\u003e in the\n newtype package.  Example usage:\n\u003c/p\u003e\u003cpre\u003e newtype CartesianList a = CartesianList [a]\n $(mkNewTypes [''CartesianList])\n\n instance Monoid (CartesianList a) where\n   mempty = pack [[]]\n   a `mappend` b = pack [x ++ y | x \u003c- unpack a, y \u003c- unpack b]\n\u003c/pre\u003e\u003cpre\u003e *Main\u003e print $ underF CartesianList (\\xs -\u003e [fold xs]) ([[[4],[5],[6]], [[1],[2]], [[0]]])\n [[[4,1,0],[4,2,0],[5,1,0],[5,2,0],[6,1,0],[6,2,0]]]\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Control.Newtype.TH",
          "name": "TH",
          "package": "newtype-th",
          "source": "src/Control-Newtype-TH.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides template Haskell based mechanism for deriving instances of the Newtype class defined in Control.Newtype in the newtype package Example usage newtype CartesianList CartesianList mkNewTypes CartesianList instance Monoid CartesianList where mempty pack mappend pack unpack unpack Main print underF CartesianList xs fold xs",
          "hierarchy": "Control Newtype TH",
          "module": "Control.Newtype.TH",
          "name": "TH",
          "package": "newtype-th",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/newtype-th/docs/Control-Newtype-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompatibility with an old, ill-capitalized name.\n\u003c/p\u003e",
          "module": "Control.Newtype.TH",
          "name": "mkNewType",
          "package": "newtype-th",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Control-Newtype-TH.html#mkNewType",
          "type": "function"
        },
        "index": {
          "description": "Compatibility with an old ill-capitalized name",
          "hierarchy": "Control Newtype TH",
          "module": "Control.Newtype.TH",
          "name": "mkNewType",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "newtype-th",
          "partial": "New Type",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/newtype-th/docs/Control-Newtype-TH.html#v:mkNewType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompatibility with an old, ill-capitalized name.\n\u003c/p\u003e",
          "module": "Control.Newtype.TH",
          "name": "mkNewTypes",
          "package": "newtype-th",
          "signature": "[Name] -\u003e Q [Dec]",
          "source": "src/Control-Newtype-TH.html#mkNewTypes",
          "type": "function"
        },
        "index": {
          "description": "Compatibility with an old ill-capitalized name",
          "hierarchy": "Control Newtype TH",
          "module": "Control.Newtype.TH",
          "name": "mkNewTypes",
          "normalized": "[Name]-\u003eQ[Dec]",
          "package": "newtype-th",
          "partial": "New Types",
          "signature": "[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/newtype-th/docs/Control-Newtype-TH.html#v:mkNewTypes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive a single instance of \u003ccode\u003eNewtype\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Newtype.TH",
          "name": "mkNewtype",
          "package": "newtype-th",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Control-Newtype-TH.html#mkNewtype",
          "type": "function"
        },
        "index": {
          "description": "Derive single instance of Newtype",
          "hierarchy": "Control Newtype TH",
          "module": "Control.Newtype.TH",
          "name": "mkNewtype",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "newtype-th",
          "partial": "Newtype",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/newtype-th/docs/Control-Newtype-TH.html#v:mkNewtype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive instances of \u003ccode\u003eNewtype\u003c/code\u003e, specified as a list of references\n   to newtypes.\n\u003c/p\u003e",
          "module": "Control.Newtype.TH",
          "name": "mkNewtypes",
          "package": "newtype-th",
          "signature": "[Name] -\u003e Q [Dec]",
          "source": "src/Control-Newtype-TH.html#mkNewtypes",
          "type": "function"
        },
        "index": {
          "description": "Derive instances of Newtype specified as list of references to newtypes",
          "hierarchy": "Control Newtype TH",
          "module": "Control.Newtype.TH",
          "name": "mkNewtypes",
          "normalized": "[Name]-\u003eQ[Dec]",
          "package": "newtype-th",
          "partial": "Newtypes",
          "signature": "[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/newtype-th/docs/Control-Newtype-TH.html#v:mkNewtypes"
      }
    }
  ]
]