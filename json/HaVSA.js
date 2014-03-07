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
        "word": "HaVSA"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AI.VersionSpaces",
          "name": "VersionSpaces",
          "package": "HaVSA",
          "source": "src/AI-VersionSpaces.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "AI VersionSpaces",
          "module": "AI.VersionSpaces",
          "name": "VersionSpaces",
          "package": "HaVSA",
          "partial": "Version Spaces",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HaVSA/docs/AI-VersionSpaces.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of a traditional version space, as described by\n Hirsh: Hirsh, H.: 1991, 'Theoretical Underpinnings of Version\n Spaces'. In: Proceedings of the Twelfth International Joint\n Conference on Artificial Intelligence. pp.  665670.\n\u003c/p\u003e",
          "module": "AI.VersionSpaces",
          "name": "BSR",
          "package": "HaVSA",
          "source": "src/AI-VersionSpaces.html#BSR",
          "type": "data"
        },
        "index": {
          "description": "Representation of traditional version space as described by Hirsh Hirsh Theoretical Underpinnings of Version Spaces In Proceedings of the Twelfth International Joint Conference on Artificial Intelligence pp",
          "hierarchy": "AI VersionSpaces",
          "module": "AI.VersionSpaces",
          "name": "BSR",
          "package": "HaVSA",
          "partial": "BSR",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaVSA/docs/AI-VersionSpaces.html#t:BSR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion Space algebraic operators:\n\u003c/p\u003e",
          "module": "AI.VersionSpaces",
          "name": "VersionSpace",
          "package": "HaVSA",
          "source": "src/AI-VersionSpaces.html#VersionSpace",
          "type": "data"
        },
        "index": {
          "description": "Version Space algebraic operators",
          "hierarchy": "AI VersionSpaces",
          "module": "AI.VersionSpaces",
          "name": "VersionSpace",
          "package": "HaVSA",
          "partial": "Version Space",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HaVSA/docs/AI-VersionSpaces.html#t:VersionSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AI.VersionSpaces",
          "name": "BSR",
          "package": "HaVSA",
          "signature": "BSR",
          "source": "src/AI-VersionSpaces.html#BSR",
          "type": "function"
        },
        "index": {
          "hierarchy": "AI VersionSpaces",
          "module": "AI.VersionSpaces",
          "name": "BSR",
          "package": "HaVSA",
          "partial": "BSR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaVSA/docs/AI-VersionSpaces.html#v:BSR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AI.VersionSpaces",
          "name": "Empty",
          "package": "HaVSA",
          "signature": "VersionSpace i o",
          "source": "src/AI-VersionSpaces.html#VersionSpace",
          "type": "function"
        },
        "index": {
          "hierarchy": "AI VersionSpaces",
          "module": "AI.VersionSpaces",
          "name": "Empty",
          "package": "HaVSA",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaVSA/docs/AI-VersionSpaces.html#v:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AI.VersionSpaces",
          "name": "EmptyBSR",
          "package": "HaVSA",
          "signature": "EmptyBSR",
          "source": "src/AI-VersionSpaces.html#BSR",
          "type": "function"
        },
        "index": {
          "hierarchy": "AI VersionSpaces",
          "module": "AI.VersionSpaces",
          "name": "EmptyBSR",
          "package": "HaVSA",
          "partial": "Empty BSR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaVSA/docs/AI-VersionSpaces.html#v:EmptyBSR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AI.VersionSpaces",
          "name": "Join",
          "package": "HaVSA",
          "signature": "VersionSpace a b -\u003e VersionSpace c d -\u003e VersionSpace (a, c) (b, d)",
          "source": "src/AI-VersionSpaces.html#VersionSpace",
          "type": "function"
        },
        "index": {
          "hierarchy": "AI VersionSpaces",
          "module": "AI.VersionSpaces",
          "name": "Join",
          "normalized": "VersionSpace a b-\u003eVersionSpace c d-\u003eVersionSpace(a,c)(b,d)",
          "package": "HaVSA",
          "partial": "Join",
          "signature": "VersionSpace a b-\u003eVersionSpace c d-\u003eVersionSpace(a,c)(b,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaVSA/docs/AI-VersionSpaces.html#v:Join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AI.VersionSpaces",
          "name": "Tr",
          "package": "HaVSA",
          "signature": "(i -\u003e a) -\u003e (o -\u003e b) -\u003e (b -\u003e o) -\u003e VersionSpace a b -\u003e VersionSpace i o",
          "source": "src/AI-VersionSpaces.html#VersionSpace",
          "type": "function"
        },
        "index": {
          "hierarchy": "AI VersionSpaces",
          "module": "AI.VersionSpaces",
          "name": "Tr",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003e(d-\u003ec)-\u003eVersionSpace b d-\u003eVersionSpace a c",
          "package": "HaVSA",
          "partial": "Tr",
          "signature": "(i-\u003ea)-\u003e(o-\u003eb)-\u003e(b-\u003eo)-\u003eVersionSpace a b-\u003eVersionSpace i o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaVSA/docs/AI-VersionSpaces.html#v:Tr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AI.VersionSpaces",
          "name": "Union",
          "package": "HaVSA",
          "signature": "VersionSpace a b -\u003e VersionSpace a b -\u003e VersionSpace a b",
          "source": "src/AI-VersionSpaces.html#VersionSpace",
          "type": "function"
        },
        "index": {
          "hierarchy": "AI VersionSpaces",
          "module": "AI.VersionSpaces",
          "name": "Union",
          "normalized": "VersionSpace a b-\u003eVersionSpace a b-\u003eVersionSpace a b",
          "package": "HaVSA",
          "partial": "Union",
          "signature": "VersionSpace a b-\u003eVersionSpace a b-\u003eVersionSpace a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaVSA/docs/AI-VersionSpaces.html#v:Union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AI.VersionSpaces",
          "name": "VS",
          "package": "HaVSA",
          "signature": "BSR a i o -\u003e VersionSpace i o",
          "source": "src/AI-VersionSpaces.html#VersionSpace",
          "type": "function"
        },
        "index": {
          "hierarchy": "AI VersionSpaces",
          "module": "AI.VersionSpaces",
          "name": "VS",
          "normalized": "BSR a b c-\u003eVersionSpace b c",
          "package": "HaVSA",
          "partial": "VS",
          "signature": "BSR a i o-\u003eVersionSpace i o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaVSA/docs/AI-VersionSpaces.html#v:VS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AI.VersionSpaces",
          "name": "hypos",
          "package": "HaVSA",
          "signature": "BSR a i o -\u003e [i -\u003e o]",
          "source": "src/AI-VersionSpaces.html#BSR",
          "type": "function"
        },
        "index": {
          "hierarchy": "AI VersionSpaces",
          "module": "AI.VersionSpaces",
          "name": "hypos",
          "normalized": "BSR a b c-\u003e[b-\u003ec]",
          "package": "HaVSA",
          "signature": "BSR a i o-\u003e[i-\u003eo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaVSA/docs/AI-VersionSpaces.html#v:hypos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the valid hypotheses for a version space.\n\u003c/p\u003e",
          "module": "AI.VersionSpaces",
          "name": "hypotheses",
          "package": "HaVSA",
          "signature": "VersionSpace i o -\u003e [i -\u003e o]",
          "source": "src/AI-VersionSpaces.html#hypotheses",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the valid hypotheses for version space",
          "hierarchy": "AI VersionSpaces",
          "module": "AI.VersionSpaces",
          "name": "hypotheses",
          "normalized": "VersionSpace a b-\u003e[a-\u003eb]",
          "package": "HaVSA",
          "signature": "VersionSpace i o-\u003e[i-\u003eo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaVSA/docs/AI-VersionSpaces.html#v:hypotheses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin two versionspaces, generating a third.\n\u003c/p\u003e",
          "module": "AI.VersionSpaces",
          "name": "join",
          "package": "HaVSA",
          "signature": "VersionSpace a b -\u003e VersionSpace c d -\u003e VersionSpace (a, c) (b, d)",
          "source": "src/AI-VersionSpaces.html#join",
          "type": "function"
        },
        "index": {
          "description": "Join two versionspaces generating third",
          "hierarchy": "AI VersionSpaces",
          "module": "AI.VersionSpaces",
          "name": "join",
          "normalized": "VersionSpace a b-\u003eVersionSpace c d-\u003eVersionSpace(a,c)(b,d)",
          "package": "HaVSA",
          "signature": "VersionSpace a b-\u003eVersionSpace c d-\u003eVersionSpace(a,c)(b,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaVSA/docs/AI-VersionSpaces.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AI.VersionSpaces",
          "name": "narrow",
          "package": "HaVSA",
          "signature": "BSR a i o -\u003e i -\u003e o -\u003e BSR a i o",
          "source": "src/AI-VersionSpaces.html#BSR",
          "type": "function"
        },
        "index": {
          "hierarchy": "AI VersionSpaces",
          "module": "AI.VersionSpaces",
          "name": "narrow",
          "normalized": "BSR a b c-\u003eb-\u003ec-\u003eBSR a b c",
          "package": "HaVSA",
          "signature": "BSR a i o-\u003ei-\u003eo-\u003eBSR a i o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaVSA/docs/AI-VersionSpaces.html#v:narrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns all valid hypotheses from the version space\n on the specified input.\n\u003c/p\u003e",
          "module": "AI.VersionSpaces",
          "name": "runVS",
          "package": "HaVSA",
          "signature": "VersionSpace a b -\u003e a -\u003e [b]",
          "source": "src/AI-VersionSpaces.html#runVS",
          "type": "function"
        },
        "index": {
          "description": "Runs all valid hypotheses from the version space on the specified input",
          "hierarchy": "AI VersionSpaces",
          "module": "AI.VersionSpaces",
          "name": "runVS",
          "normalized": "VersionSpace a b-\u003ea-\u003e[b]",
          "package": "HaVSA",
          "partial": "VS",
          "signature": "VersionSpace a b-\u003ea-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaVSA/docs/AI-VersionSpaces.html#v:runVS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a BSR to a string to show whether the BSR is empty or\n not.  Additional details place undesirable restrictions on the\n state storage.\n\u003c/p\u003e",
          "module": "AI.VersionSpaces",
          "name": "showBSR",
          "package": "HaVSA",
          "signature": "BSR a i o -\u003e String",
          "source": "src/AI-VersionSpaces.html#showBSR",
          "type": "function"
        },
        "index": {
          "description": "Renders BSR to string to show whether the BSR is empty or not Additional details place undesirable restrictions on the state storage",
          "hierarchy": "AI VersionSpaces",
          "module": "AI.VersionSpaces",
          "name": "showBSR",
          "normalized": "BSR a b c-\u003eString",
          "package": "HaVSA",
          "partial": "BSR",
          "signature": "BSR a i o-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaVSA/docs/AI-VersionSpaces.html#v:showBSR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerializes a versionspace to a human-readable string, for certain values of \u003ccode\u003ehuman\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "AI.VersionSpaces",
          "name": "showVS",
          "package": "HaVSA",
          "signature": "VersionSpace i o -\u003e String",
          "source": "src/AI-VersionSpaces.html#showVS",
          "type": "function"
        },
        "index": {
          "description": "Serializes versionspace to human-readable string for certain values of human",
          "hierarchy": "AI VersionSpaces",
          "module": "AI.VersionSpaces",
          "name": "showVS",
          "normalized": "VersionSpace a b-\u003eString",
          "package": "HaVSA",
          "partial": "VS",
          "signature": "VersionSpace i o-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaVSA/docs/AI-VersionSpaces.html#v:showVS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "AI.VersionSpaces",
          "name": "storage",
          "package": "HaVSA",
          "signature": "a",
          "source": "src/AI-VersionSpaces.html#BSR",
          "type": "function"
        },
        "index": {
          "hierarchy": "AI VersionSpaces",
          "module": "AI.VersionSpaces",
          "name": "storage",
          "package": "HaVSA",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaVSA/docs/AI-VersionSpaces.html#v:storage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a version space to mutate the input and/or output types.\n Transforms require that three functions be specified:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003ei -\u003e a\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Transform the input of the resulting version space to the input of the initial versionspace.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eo -\u003e b\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Transform the output of the initial versionspace into the output of the resulting versionspace.\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eb -\u003e o\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e Transform the output of the \u003cem\u003eresulting\u003c/em\u003e versionspace\n  into the output of the \u003cem\u003einitial\u003c/em\u003e versionspace.  This is necessary\n  to support training: the training examples will be in terms of the\n  resulting versionspace, so the output must be transformed back\n  into the terms of the initial versionspace.\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "AI.VersionSpaces",
          "name": "tr",
          "package": "HaVSA",
          "signature": "(i -\u003e a) -\u003e (o -\u003e b) -\u003e (b -\u003e o) -\u003e VersionSpace a b -\u003e VersionSpace i o",
          "source": "src/AI-VersionSpaces.html#tr",
          "type": "function"
        },
        "index": {
          "description": "Transform version space to mutate the input and or output types Transforms require that three functions be specified Transform the input of the resulting version space to the input of the initial versionspace Transform the output of the initial versionspace into the output of the resulting versionspace Transform the output of the resulting versionspace into the output of the initial versionspace This is necessary to support training the training examples will be in terms of the resulting versionspace so the output must be transformed back into the terms of the initial versionspace",
          "hierarchy": "AI VersionSpaces",
          "module": "AI.VersionSpaces",
          "name": "tr",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003e(d-\u003ec)-\u003eVersionSpace b d-\u003eVersionSpace a c",
          "package": "HaVSA",
          "signature": "(i-\u003ea)-\u003e(o-\u003eb)-\u003e(b-\u003eo)-\u003eVersionSpace a b-\u003eVersionSpace i o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaVSA/docs/AI-VersionSpaces.html#v:tr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrain a version space, reducing the set of valid hypotheses.  We\n handle the Empty VS cases prior to the corresponding non-empty\n cases because the Empties are simplifying cases, so logic can be\n short-circuited by collapsing parts of the hierarchy before\n recursing.\n\u003c/p\u003e",
          "module": "AI.VersionSpaces",
          "name": "train",
          "package": "HaVSA",
          "signature": "VersionSpace i o -\u003e i -\u003e o -\u003e VersionSpace i o",
          "source": "src/AI-VersionSpaces.html#train",
          "type": "function"
        },
        "index": {
          "description": "Train version space reducing the set of valid hypotheses We handle the Empty VS cases prior to the corresponding non-empty cases because the Empties are simplifying cases so logic can be short-circuited by collapsing parts of the hierarchy before recursing",
          "hierarchy": "AI VersionSpaces",
          "module": "AI.VersionSpaces",
          "name": "train",
          "normalized": "VersionSpace a b-\u003ea-\u003eb-\u003eVersionSpace a b",
          "package": "HaVSA",
          "signature": "VersionSpace i o-\u003ei-\u003eo-\u003eVersionSpace i o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaVSA/docs/AI-VersionSpaces.html#v:train"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnion two versionspaces, generating a third.\n\u003c/p\u003e",
          "module": "AI.VersionSpaces",
          "name": "union",
          "package": "HaVSA",
          "signature": "VersionSpace a b -\u003e VersionSpace a b -\u003e VersionSpace a b",
          "source": "src/AI-VersionSpaces.html#union",
          "type": "function"
        },
        "index": {
          "description": "Union two versionspaces generating third",
          "hierarchy": "AI VersionSpaces",
          "module": "AI.VersionSpaces",
          "name": "union",
          "normalized": "VersionSpace a b-\u003eVersionSpace a b-\u003eVersionSpace a b",
          "package": "HaVSA",
          "signature": "VersionSpace a b-\u003eVersionSpace a b-\u003eVersionSpace a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HaVSA/docs/AI-VersionSpaces.html#v:union"
      }
    }
  ]
]