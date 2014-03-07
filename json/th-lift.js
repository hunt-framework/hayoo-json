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
        "word": "th-lift"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Lift",
          "name": "Lift",
          "package": "th-lift",
          "source": "src/Language-Haskell-TH-Lift.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell TH Lift",
          "module": "Language.Haskell.TH.Lift",
          "name": "Lift",
          "package": "th-lift",
          "partial": "Lift",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/th-lift/docs/Language-Haskell-TH-Lift.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Lift",
          "name": "Lift",
          "package": "th-lift",
          "type": "class"
        },
        "index": {
          "hierarchy": "Language Haskell TH Lift",
          "module": "Language.Haskell.TH.Lift",
          "name": "Lift",
          "package": "th-lift",
          "partial": "Lift",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/th-lift/docs/Language-Haskell-TH-Lift.html#t:Lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive Lift instances for the given datatype.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Lift",
          "name": "deriveLift",
          "package": "th-lift",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Language-Haskell-TH-Lift.html#deriveLift",
          "type": "function"
        },
        "index": {
          "description": "Derive Lift instances for the given datatype",
          "hierarchy": "Language Haskell TH Lift",
          "module": "Language.Haskell.TH.Lift",
          "name": "deriveLift",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "th-lift",
          "partial": "Lift",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-lift/docs/Language-Haskell-TH-Lift.html#v:deriveLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtain Info values through a custom reification function. This is useful\n when generating instances for datatypes that have not yet been declared.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Lift",
          "name": "deriveLift'",
          "package": "th-lift",
          "signature": "Info -\u003e Q [Dec]",
          "source": "src/Language-Haskell-TH-Lift.html#deriveLift%27",
          "type": "function"
        },
        "index": {
          "description": "Obtain Info values through custom reification function This is useful when generating instances for datatypes that have not yet been declared",
          "hierarchy": "Language Haskell TH Lift",
          "module": "Language.Haskell.TH.Lift",
          "name": "deriveLift'",
          "normalized": "Info-\u003eQ[Dec]",
          "package": "th-lift",
          "partial": "Lift'",
          "signature": "Info-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-lift/docs/Language-Haskell-TH-Lift.html#v:deriveLift-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDerive Lift instances for many datatypes.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.Lift",
          "name": "deriveLiftMany",
          "package": "th-lift",
          "signature": "[Name] -\u003e Q [Dec]",
          "source": "src/Language-Haskell-TH-Lift.html#deriveLiftMany",
          "type": "function"
        },
        "index": {
          "description": "Derive Lift instances for many datatypes",
          "hierarchy": "Language Haskell TH Lift",
          "module": "Language.Haskell.TH.Lift",
          "name": "deriveLiftMany",
          "normalized": "[Name]-\u003eQ[Dec]",
          "package": "th-lift",
          "partial": "Lift Many",
          "signature": "[Name]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-lift/docs/Language-Haskell-TH-Lift.html#v:deriveLiftMany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Lift",
          "name": "deriveLiftMany'",
          "package": "th-lift",
          "signature": "[Info] -\u003e Q [Dec]",
          "source": "src/Language-Haskell-TH-Lift.html#deriveLiftMany%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Lift",
          "module": "Language.Haskell.TH.Lift",
          "name": "deriveLiftMany'",
          "normalized": "[Info]-\u003eQ[Dec]",
          "package": "th-lift",
          "partial": "Lift Many'",
          "signature": "[Info]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-lift/docs/Language-Haskell-TH-Lift.html#v:deriveLiftMany-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Lift",
          "name": "lift",
          "package": "th-lift",
          "signature": "t -\u003e Q Exp",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Haskell TH Lift",
          "module": "Language.Haskell.TH.Lift",
          "name": "lift",
          "normalized": "a-\u003eQ Exp",
          "package": "th-lift",
          "signature": "t-\u003eQ Exp",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/th-lift/docs/Language-Haskell-TH-Lift.html#v:lift"
      }
    }
  ]
]