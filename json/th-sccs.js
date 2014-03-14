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
        "word": "th-sccs"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.SCCs",
          "name": "SCCs",
          "package": "th-sccs",
          "source": "src/Language-Haskell-TH-SCCs.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell TH SCCs",
          "module": "Language.Haskell.TH.SCCs",
          "name": "SCCs",
          "package": "th-sccs",
          "partial": "SCCs",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/th-sccs/docs/Language-Haskell-TH-SCCs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the type declarations upon which this construct syntactically\n depends. The first argument tracks the bindings traversed; use \u003ccode\u003e\u003ca\u003etd_descend\u003c/a\u003e\u003c/code\u003e\n to maintain it.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.SCCs",
          "name": "Dependencies",
          "package": "th-sccs",
          "source": "src/Language-Haskell-TH-SCCs.html#Dependencies",
          "type": "class"
        },
        "index": {
          "description": "Calculate the type declarations upon which this construct syntactically depends The first argument tracks the bindings traversed use td descend to maintain it",
          "hierarchy": "Language Haskell TH SCCs",
          "module": "Language.Haskell.TH.SCCs",
          "name": "Dependencies",
          "package": "th-sccs",
          "partial": "Dependencies",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/th-sccs/docs/Language-Haskell-TH-SCCs.html#t:Dependencies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is semantically murky: it's just the name of anything that\n \"naturally\" \u003cem\u003edefines\u003c/em\u003e a name; error if it doesn't.\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.SCCs",
          "name": "Named",
          "package": "th-sccs",
          "source": "src/Language-Haskell-TH-SCCs.html#Named",
          "type": "class"
        },
        "index": {
          "description": "This is semantically murky it just the name of anything that naturally defines name error if it doesn",
          "hierarchy": "Language Haskell TH SCCs",
          "module": "Language.Haskell.TH.SCCs",
          "name": "Named",
          "package": "th-sccs",
          "partial": "Named",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/th-sccs/docs/Language-Haskell-TH-SCCs.html#t:Named"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for \u003ccode\u003e\u003ca\u003escc\u003c/a\u003e\u003c/code\u003e that forgets the distinction between a single acyclic\n SCC and a singly recursive SCC\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.SCCs",
          "name": "binding_group",
          "package": "th-sccs",
          "signature": "Name -\u003e Q (Set Name)",
          "source": "src/Language-Haskell-TH-SCCs.html#binding_group",
          "type": "function"
        },
        "index": {
          "description": "Wrapper for scc that forgets the distinction between single acyclic SCC and singly recursive SCC",
          "hierarchy": "Language Haskell TH SCCs",
          "module": "Language.Haskell.TH.SCCs",
          "name": "binding_group",
          "normalized": "Name-\u003eQ(Set Name)",
          "package": "th-sccs",
          "signature": "Name-\u003eQ(Set Name)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-sccs/docs/Language-Haskell-TH-SCCs.html#v:binding_group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for \u003ccode\u003e\u003ca\u003esccs\u003c/a\u003e\u003c/code\u003e that forgets the distinction between a single acyclic\n SCC and a singly recursive SCC\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.SCCs",
          "name": "binding_groups",
          "package": "th-sccs",
          "signature": "[Name] -\u003e Q [Set Name]",
          "source": "src/Language-Haskell-TH-SCCs.html#binding_groups",
          "type": "function"
        },
        "index": {
          "description": "Wrapper for sccs that forgets the distinction between single acyclic SCC and singly recursive SCC",
          "hierarchy": "Language Haskell TH SCCs",
          "module": "Language.Haskell.TH.SCCs",
          "name": "binding_groups",
          "normalized": "[Name]-\u003eQ[Set Name]",
          "package": "th-sccs",
          "signature": "[Name]-\u003eQ[Set Name]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-sccs/docs/Language-Haskell-TH-SCCs.html#v:binding_groups"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.SCCs",
          "name": "name_of",
          "package": "th-sccs",
          "signature": "t -\u003e Name",
          "source": "src/Language-Haskell-TH-SCCs.html#name_of",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Haskell TH SCCs",
          "module": "Language.Haskell.TH.SCCs",
          "name": "name_of",
          "normalized": "a-\u003eName",
          "package": "th-sccs",
          "signature": "t-\u003eName",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/th-sccs/docs/Language-Haskell-TH-SCCs.html#v:name_of"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelpful for debugging generated code\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.SCCs",
          "name": "printQ",
          "package": "th-sccs",
          "signature": "Maybe String -\u003e Q a -\u003e Q [Dec]",
          "source": "src/Language-Haskell-TH-SCCs.html#printQ",
          "type": "function"
        },
        "index": {
          "description": "Helpful for debugging generated code",
          "hierarchy": "Language Haskell TH SCCs",
          "module": "Language.Haskell.TH.SCCs",
          "name": "printQ",
          "normalized": "Maybe String-\u003eQ a-\u003eQ[Dec]",
          "package": "th-sccs",
          "signature": "Maybe String-\u003eQ a-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-sccs/docs/Language-Haskell-TH-SCCs.html#v:printQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes the SCC that includes the declaration of the given name; \u003ccode\u003eLeft\u003c/code\u003e\n is a singly acyclic declaration, \u003ccode\u003eRight\u003c/code\u003e is a mutually recursive group\n (possibly of size one: singly recursion).\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.SCCs",
          "name": "scc",
          "package": "th-sccs",
          "signature": "Name -\u003e Q (Either Name (Set Name))",
          "source": "src/Language-Haskell-TH-SCCs.html#scc",
          "type": "function"
        },
        "index": {
          "description": "Computes the SCC that includes the declaration of the given name Left is singly acyclic declaration Right is mutually recursive group possibly of size one singly recursion",
          "hierarchy": "Language Haskell TH SCCs",
          "module": "Language.Haskell.TH.SCCs",
          "name": "scc",
          "normalized": "Name-\u003eQ(Either Name(Set Name))",
          "package": "th-sccs",
          "signature": "Name-\u003eQ(Either Name(Set Name))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-sccs/docs/Language-Haskell-TH-SCCs.html#v:scc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComputes all SCCs for the given names (including those it dominates)\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.SCCs",
          "name": "sccs",
          "package": "th-sccs",
          "signature": "[Name] -\u003e Q [Either Name (Set Name)]",
          "source": "src/Language-Haskell-TH-SCCs.html#sccs",
          "type": "function"
        },
        "index": {
          "description": "Computes all SCCs for the given names including those it dominates",
          "hierarchy": "Language Haskell TH SCCs",
          "module": "Language.Haskell.TH.SCCs",
          "name": "sccs",
          "normalized": "[Name]-\u003eQ[Either Name(Set Name)]",
          "package": "th-sccs",
          "signature": "[Name]-\u003eQ[Either Name(Set Name)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-sccs/docs/Language-Haskell-TH-SCCs.html#v:sccs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShorter than \u003ccode\u003e\u003ca\u003etype_dependencies'\u003c/a\u003e\u003c/code\u003e and also adds the name of the seconda\n argument to the tracked bindings\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.SCCs",
          "name": "td_descend",
          "package": "th-sccs",
          "signature": "[Name] -\u003e a -\u003e t -\u003e Set Name",
          "source": "src/Language-Haskell-TH-SCCs.html#td_descend",
          "type": "function"
        },
        "index": {
          "description": "Shorter than type dependencies and also adds the name of the seconda argument to the tracked bindings",
          "hierarchy": "Language Haskell TH SCCs",
          "module": "Language.Haskell.TH.SCCs",
          "name": "td_descend",
          "normalized": "[Name]-\u003ea-\u003eb-\u003eSet Name",
          "package": "th-sccs",
          "signature": "[Name]-\u003ea-\u003et-\u003eSet Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-sccs/docs/Language-Haskell-TH-SCCs.html#v:td_descend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust a bit shorter than \u003ccode\u003e\u003ca\u003etype_dependencies'\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Language.Haskell.TH.SCCs",
          "name": "td_recur",
          "package": "th-sccs",
          "signature": "[Name] -\u003e t -\u003e Set Name",
          "source": "src/Language-Haskell-TH-SCCs.html#td_recur",
          "type": "function"
        },
        "index": {
          "description": "Just bit shorter than type dependencies",
          "hierarchy": "Language Haskell TH SCCs",
          "module": "Language.Haskell.TH.SCCs",
          "name": "td_recur",
          "normalized": "[Name]-\u003ea-\u003eSet Name",
          "package": "th-sccs",
          "signature": "[Name]-\u003et-\u003eSet Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-sccs/docs/Language-Haskell-TH-SCCs.html#v:td_recur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.SCCs",
          "name": "type_dependencies",
          "package": "th-sccs",
          "signature": "t -\u003e Set Name",
          "source": "src/Language-Haskell-TH-SCCs.html#type_dependencies",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH SCCs",
          "module": "Language.Haskell.TH.SCCs",
          "name": "type_dependencies",
          "normalized": "a-\u003eSet Name",
          "package": "th-sccs",
          "signature": "t-\u003eSet Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/th-sccs/docs/Language-Haskell-TH-SCCs.html#v:type_dependencies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.SCCs",
          "name": "type_dependencies'",
          "package": "th-sccs",
          "signature": "[Name] -\u003e t -\u003e Set Name",
          "source": "src/Language-Haskell-TH-SCCs.html#type_dependencies%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Language Haskell TH SCCs",
          "module": "Language.Haskell.TH.SCCs",
          "name": "type_dependencies'",
          "normalized": "[Name]-\u003ea-\u003eSet Name",
          "package": "th-sccs",
          "signature": "[Name]-\u003et-\u003eSet Name",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/th-sccs/docs/Language-Haskell-TH-SCCs.html#v:type_dependencies-39-"
      }
    }
  ]
]