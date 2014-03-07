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
        "word": "th-expand-syns"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.ExpandSyns",
          "name": "ExpandSyns",
          "package": "th-expand-syns",
          "source": "src/Language-Haskell-TH-ExpandSyns.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell TH ExpandSyns",
          "module": "Language.Haskell.TH.ExpandSyns",
          "name": "ExpandSyns",
          "package": "th-expand-syns",
          "partial": "Expand Syns",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/th-expand-syns/docs/Language-Haskell-TH-ExpandSyns.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a name (based on the first arg) that's distinct from every name in the second arg\n\u003c/p\u003e\u003cp\u003eExample why this is necessary:\n\u003c/p\u003e\u003cpre\u003e type E x = forall y. Either x y\n\n ... expandSyns [t| forall y. y -\u003e E y |]\n\u003c/pre\u003e\u003cp\u003eThe example as given may actually work correctly without any special capture-avoidance depending\n on how GHC handles the \u003ccode\u003ey\u003c/code\u003es, but in any case, the input type to expandSyns may be an explicit\n AST using \u003ccode\u003e\u003ca\u003emkName\u003c/a\u003e\u003c/code\u003e to ensure a collision.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.ExpandSyns",
          "name": "evade",
          "package": "th-expand-syns",
          "signature": "Name -\u003e d -\u003e Name",
          "source": "src/Language-Haskell-TH-ExpandSyns.html#evade",
          "type": "function"
        },
        "index": {
          "description": "Make name based on the first arg that distinct from every name in the second arg Example why this is necessary type forall Either expandSyns forall The example as given may actually work correctly without any special capture-avoidance depending on how GHC handles the but in any case the input type to expandSyns may be an explicit AST using mkName to ensure collision",
          "hierarchy": "Language Haskell TH ExpandSyns",
          "module": "Language.Haskell.TH.ExpandSyns",
          "name": "evade",
          "normalized": "Name-\u003ea-\u003eName",
          "package": "th-expand-syns",
          "signature": "Name-\u003ed-\u003eName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-expand-syns/docs/Language-Haskell-TH-ExpandSyns.html#v:evade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a list of names (based on the first arg) such that every name in the result\n is distinct from every name in the second arg, and from the other results\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.ExpandSyns",
          "name": "evades",
          "package": "th-expand-syns",
          "signature": "[Name] -\u003e t -\u003e [Name]",
          "source": "src/Language-Haskell-TH-ExpandSyns.html#evades",
          "type": "function"
        },
        "index": {
          "description": "Make list of names based on the first arg such that every name in the result is distinct from every name in the second arg and from the other results",
          "hierarchy": "Language Haskell TH ExpandSyns",
          "module": "Language.Haskell.TH.ExpandSyns",
          "name": "evades",
          "normalized": "[Name]-\u003ea-\u003e[Name]",
          "package": "th-expand-syns",
          "signature": "[Name]-\u003et-\u003e[Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-expand-syns/docs/Language-Haskell-TH-ExpandSyns.html#v:evades"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExpands all type synonyms in the given type. Type families currently won't be expanded (but will be passed through).\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.ExpandSyns",
          "name": "expandSyns",
          "package": "th-expand-syns",
          "signature": "Type -\u003e Q Type",
          "source": "src/Language-Haskell-TH-ExpandSyns.html#expandSyns",
          "type": "function"
        },
        "index": {
          "description": "Expands all type synonyms in the given type Type families currently won be expanded but will be passed through",
          "hierarchy": "Language Haskell TH ExpandSyns",
          "module": "Language.Haskell.TH.ExpandSyns",
          "name": "expandSyns",
          "normalized": "Type-\u003eQ Type",
          "package": "th-expand-syns",
          "partial": "Syns",
          "signature": "Type-\u003eQ Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-expand-syns/docs/Language-Haskell-TH-ExpandSyns.html#v:expandSyns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCapture-free substitution\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.ExpandSyns",
          "name": "substInCon",
          "package": "th-expand-syns",
          "signature": "(Name, Type) -\u003e Con -\u003e Con",
          "source": "src/Language-Haskell-TH-ExpandSyns.html#substInCon",
          "type": "function"
        },
        "index": {
          "description": "Capture-free substitution",
          "hierarchy": "Language Haskell TH ExpandSyns",
          "module": "Language.Haskell.TH.ExpandSyns",
          "name": "substInCon",
          "normalized": "(Name,Type)-\u003eCon-\u003eCon",
          "package": "th-expand-syns",
          "partial": "In Con",
          "signature": "(Name,Type)-\u003eCon-\u003eCon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-expand-syns/docs/Language-Haskell-TH-ExpandSyns.html#v:substInCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCapture-free substitution\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.ExpandSyns",
          "name": "substInType",
          "package": "th-expand-syns",
          "signature": "(Name, Type) -\u003e Type -\u003e Type",
          "source": "src/Language-Haskell-TH-ExpandSyns.html#substInType",
          "type": "function"
        },
        "index": {
          "description": "Capture-free substitution",
          "hierarchy": "Language Haskell TH ExpandSyns",
          "module": "Language.Haskell.TH.ExpandSyns",
          "name": "substInType",
          "normalized": "(Name,Type)-\u003eType-\u003eType",
          "package": "th-expand-syns",
          "partial": "In Type",
          "signature": "(Name,Type)-\u003eType-\u003eType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-expand-syns/docs/Language-Haskell-TH-ExpandSyns.html#v:substInType"
      }
    }
  ]
]