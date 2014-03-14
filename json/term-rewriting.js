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
        "word": "term-rewriting"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Context.Ops",
          "name": "Ops",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Context-Ops.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Rewriting Context Ops",
          "module": "Data.Rewriting.Context.Ops",
          "name": "Ops",
          "package": "term-rewriting",
          "partial": "Ops",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Context-Ops.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a context to a term (i.e., replace the hole in the context by the\n term).\n\u003c/p\u003e",
          "module": "[\"Data.Rewriting.Context.Ops\",\"Data.Rewriting.Context\"]",
          "name": "apply",
          "package": "term-rewriting",
          "signature": "Ctxt f v -\u003e Term f v -\u003e Term f v",
          "source": "src/Data-Rewriting-Context-Ops.html#apply",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Context-Ops.html#v:apply\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Context.html#v:apply\"]"
        },
        "index": {
          "description": "Apply context to term i.e replace the hole in the context by the term",
          "hierarchy": "Data Rewriting Context Ops",
          "module": "Data.Rewriting.Context.Ops",
          "name": "apply",
          "normalized": "Ctxt a b-\u003eTerm a b-\u003eTerm a b",
          "package": "term-rewriting",
          "signature": "Ctxt f v-\u003eTerm f v-\u003eTerm f v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Context-Ops.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose two contexts (i.e., replace the hole in the left context by the\n right context).\n\u003c/p\u003e",
          "module": "Data.Rewriting.Context.Ops",
          "name": "compose",
          "package": "term-rewriting",
          "signature": "Ctxt f v -\u003e Ctxt f v -\u003e Ctxt f v",
          "source": "src/Data-Rewriting-Context-Ops.html#compose",
          "type": "function"
        },
        "index": {
          "description": "Compose two contexts i.e replace the hole in the left context by the right context",
          "hierarchy": "Data Rewriting Context Ops",
          "module": "Data.Rewriting.Context.Ops",
          "name": "compose",
          "normalized": "Ctxt a b-\u003eCtxt a b-\u003eCtxt a b",
          "package": "term-rewriting",
          "signature": "Ctxt f v-\u003eCtxt f v-\u003eCtxt f v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Context-Ops.html#v:compose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a context from a term by placing the hole at a specific position.\n\u003c/p\u003e",
          "module": "[\"Data.Rewriting.Context.Ops\",\"Data.Rewriting.Context\"]",
          "name": "ofTerm",
          "package": "term-rewriting",
          "signature": "Term f v -\u003e Pos -\u003e Maybe (Ctxt f v)",
          "source": "src/Data-Rewriting-Context-Ops.html#ofTerm",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Context-Ops.html#v:ofTerm\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Context.html#v:ofTerm\"]"
        },
        "index": {
          "description": "Create context from term by placing the hole at specific position",
          "hierarchy": "Data Rewriting Context Ops",
          "module": "Data.Rewriting.Context.Ops",
          "name": "ofTerm",
          "normalized": "Term a b-\u003ePos-\u003eMaybe(Ctxt a b)",
          "package": "term-rewriting",
          "partial": "Term",
          "signature": "Term f v-\u003ePos-\u003eMaybe(Ctxt f v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Context-Ops.html#v:ofTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Context.Type",
          "name": "Type",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Context-Type.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Rewriting Context Type",
          "module": "Data.Rewriting.Context.Type",
          "name": "Type",
          "package": "term-rewriting",
          "partial": "Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Context-Type.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Context.Type",
          "name": "Ctxt",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Context-Type.html#Ctxt",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Rewriting Context Type",
          "module": "Data.Rewriting.Context.Type",
          "name": "Ctxt",
          "package": "term-rewriting",
          "partial": "Ctxt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Context-Type.html#t:Ctxt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon-empty context\n\u003c/p\u003e",
          "module": "[\"Data.Rewriting.Context.Type\",\"Data.Rewriting.Context\"]",
          "name": "Ctxt",
          "package": "term-rewriting",
          "signature": "Ctxt f [Term f v] (Ctxt f v) [Term f v]",
          "source": "src/Data-Rewriting-Context-Type.html#Ctxt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Context-Type.html#v:Ctxt\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Context.html#v:Ctxt\"]"
        },
        "index": {
          "description": "Non-empty context",
          "hierarchy": "Data Rewriting Context Type",
          "module": "Data.Rewriting.Context.Type",
          "name": "Ctxt",
          "normalized": "Ctxt a[Term a b](Ctxt a b)[Term a b]",
          "package": "term-rewriting",
          "partial": "Ctxt",
          "signature": "Ctxt f[Term f v](Ctxt f v)[Term f v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Context-Type.html#v:Ctxt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHole\n\u003c/p\u003e",
          "module": "[\"Data.Rewriting.Context.Type\",\"Data.Rewriting.Context\"]",
          "name": "Hole",
          "package": "term-rewriting",
          "signature": "Hole",
          "source": "src/Data-Rewriting-Context-Type.html#Ctxt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Context-Type.html#v:Hole\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Context.html#v:Hole\"]"
        },
        "index": {
          "description": "Hole",
          "hierarchy": "Data Rewriting Context Type",
          "module": "Data.Rewriting.Context.Type",
          "name": "Hole",
          "package": "term-rewriting",
          "partial": "Hole",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Context-Type.html#v:Hole"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Context",
          "name": "Context",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Context.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Rewriting Context",
          "module": "Data.Rewriting.Context",
          "name": "Context",
          "package": "term-rewriting",
          "partial": "Context",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Context.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Context",
          "name": "Ctxt",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Context-Type.html#Ctxt",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Rewriting Context",
          "module": "Data.Rewriting.Context",
          "name": "Ctxt",
          "package": "term-rewriting",
          "partial": "Ctxt",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Context.html#t:Ctxt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.CriticalPair.Ops",
          "name": "Ops",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-CriticalPair-Ops.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Rewriting CriticalPair Ops",
          "module": "Data.Rewriting.CriticalPair.Ops",
          "name": "Ops",
          "package": "term-rewriting",
          "partial": "Ops",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair-Ops.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine all critical pairs for a pair of TRSs.\n\u003c/p\u003e",
          "module": "[\"Data.Rewriting.CriticalPair.Ops\",\"Data.Rewriting.CriticalPair\"]",
          "name": "cps",
          "package": "term-rewriting",
          "signature": "[Rule f v] -\u003e [Rule f v'] -\u003e [CP f v v']",
          "source": "src/Data-Rewriting-CriticalPair-Ops.html#cps",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair-Ops.html#v:cps\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair.html#v:cps\"]"
        },
        "index": {
          "description": "Determine all critical pairs for pair of TRSs",
          "hierarchy": "Data Rewriting CriticalPair Ops",
          "module": "Data.Rewriting.CriticalPair.Ops",
          "name": "cps",
          "normalized": "[Rule a b]-\u003e[Rule a c]-\u003e[CP a b c]",
          "package": "term-rewriting",
          "signature": "[Rule f v]-\u003e[Rule f v']-\u003e[CP f v v']",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair-Ops.html#v:cps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine all critical pairs of a single TRS with itself.\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003ecps\u003c/code\u003e, \u003ccode\u003ecps'\u003c/code\u003e takes symmetries into account. See \u003ccode\u003e\u003ca\u003ecpsIn'\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003ecpsOut'\u003c/a\u003e\u003c/code\u003e for details.\n\u003c/p\u003e",
          "module": "[\"Data.Rewriting.CriticalPair.Ops\",\"Data.Rewriting.CriticalPair\"]",
          "name": "cps'",
          "package": "term-rewriting",
          "signature": "[Rule f v] -\u003e [CP f v v]",
          "source": "src/Data-Rewriting-CriticalPair-Ops.html#cps%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair-Ops.html#v:cps-39-\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair.html#v:cps-39-\"]"
        },
        "index": {
          "description": "Determine all critical pairs of single TRS with itself Unlike cps cps takes symmetries into account See cpsIn and cpsOut for details",
          "hierarchy": "Data Rewriting CriticalPair Ops",
          "module": "Data.Rewriting.CriticalPair.Ops",
          "name": "cps'",
          "normalized": "[Rule a b]-\u003e[CP a b b]",
          "package": "term-rewriting",
          "signature": "[Rule f v]-\u003e[CP f v v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair-Ops.html#v:cps-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine all inner critical pairs for a pair of TRSs.\n\u003c/p\u003e\u003cp\u003eA critical pair is \u003cem\u003einner\u003c/em\u003e if the left rewrite step is not a root step.\n\u003c/p\u003e",
          "module": "Data.Rewriting.CriticalPair.Ops",
          "name": "cpsIn",
          "package": "term-rewriting",
          "signature": "[Rule f v] -\u003e [Rule f v'] -\u003e [CP f v v']",
          "source": "src/Data-Rewriting-CriticalPair-Ops.html#cpsIn",
          "type": "function"
        },
        "index": {
          "description": "Determine all inner critical pairs for pair of TRSs critical pair is inner if the left rewrite step is not root step",
          "hierarchy": "Data Rewriting CriticalPair Ops",
          "module": "Data.Rewriting.CriticalPair.Ops",
          "name": "cpsIn",
          "normalized": "[Rule a b]-\u003e[Rule a c]-\u003e[CP a b c]",
          "package": "term-rewriting",
          "partial": "In",
          "signature": "[Rule f v]-\u003e[Rule f v']-\u003e[CP f v v']",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair-Ops.html#v:cpsIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine all inner critical pairs of a single TRS with itself.\n\u003c/p\u003e\u003cp\u003eThe result of \u003ccode\u003ecpsIn' trs\u003c/code\u003e differs from \u003ccode\u003ecpsIn trs trs\u003c/code\u003e in that overlaps\n of a rule with itself are returned once, not twice.\n\u003c/p\u003e",
          "module": "Data.Rewriting.CriticalPair.Ops",
          "name": "cpsIn'",
          "package": "term-rewriting",
          "signature": "[Rule f v] -\u003e [CP f v v]",
          "source": "src/Data-Rewriting-CriticalPair-Ops.html#cpsIn%27",
          "type": "function"
        },
        "index": {
          "description": "Determine all inner critical pairs of single TRS with itself The result of cpsIn trs differs from cpsIn trs trs in that overlaps of rule with itself are returned once not twice",
          "hierarchy": "Data Rewriting CriticalPair Ops",
          "module": "Data.Rewriting.CriticalPair.Ops",
          "name": "cpsIn'",
          "normalized": "[Rule a b]-\u003e[CP a b b]",
          "package": "term-rewriting",
          "partial": "In'",
          "signature": "[Rule f v]-\u003e[CP f v v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair-Ops.html#v:cpsIn-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine outer critical pairs for a pair of TRSs.\n\u003c/p\u003e\u003cp\u003eA critical pair is \u003cem\u003eouter\u003c/em\u003e if the left rewrite step is a root step.\n\u003c/p\u003e",
          "module": "Data.Rewriting.CriticalPair.Ops",
          "name": "cpsOut",
          "package": "term-rewriting",
          "signature": "[Rule f v] -\u003e [Rule f v'] -\u003e [CP f v v']",
          "source": "src/Data-Rewriting-CriticalPair-Ops.html#cpsOut",
          "type": "function"
        },
        "index": {
          "description": "Determine outer critical pairs for pair of TRSs critical pair is outer if the left rewrite step is root step",
          "hierarchy": "Data Rewriting CriticalPair Ops",
          "module": "Data.Rewriting.CriticalPair.Ops",
          "name": "cpsOut",
          "normalized": "[Rule a b]-\u003e[Rule a c]-\u003e[CP a b c]",
          "package": "term-rewriting",
          "partial": "Out",
          "signature": "[Rule f v]-\u003e[Rule f v']-\u003e[CP f v v']",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair-Ops.html#v:cpsOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine all outer critical pairs of a single TRS with itself.\n\u003c/p\u003e\u003cp\u003eThe result of \u003ccode\u003ecpsOut' trs\u003c/code\u003e differs from \u003ccode\u003ecpsOut trs trs\u003c/code\u003e in two aspects:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The trivial overlaps of rules with themselves are omitted.\n\u003c/li\u003e\u003cli\u003e Symmetry is taken into account: Overlaps between distinct rules are\n    returned once instead of twice.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.Rewriting.CriticalPair.Ops",
          "name": "cpsOut'",
          "package": "term-rewriting",
          "signature": "[Rule f v] -\u003e [CP f v v]",
          "source": "src/Data-Rewriting-CriticalPair-Ops.html#cpsOut%27",
          "type": "function"
        },
        "index": {
          "description": "Determine all outer critical pairs of single TRS with itself The result of cpsOut trs differs from cpsOut trs trs in two aspects The trivial overlaps of rules with themselves are omitted Symmetry is taken into account Overlaps between distinct rules are returned once instead of twice",
          "hierarchy": "Data Rewriting CriticalPair Ops",
          "module": "Data.Rewriting.CriticalPair.Ops",
          "name": "cpsOut'",
          "normalized": "[Rule a b]-\u003e[CP a b b]",
          "package": "term-rewriting",
          "partial": "Out'",
          "signature": "[Rule f v]-\u003e[CP f v v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair-Ops.html#v:cpsOut-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.CriticalPair.Type",
          "name": "Type",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-CriticalPair-Type.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Rewriting CriticalPair Type",
          "module": "Data.Rewriting.CriticalPair.Type",
          "name": "Type",
          "package": "term-rewriting",
          "partial": "Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair-Type.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA critical pair. Critical pairs (should) have the following properties:\n\u003c/p\u003e\u003cpre\u003e\n top   == Context.ofTerm top pos (Term.map Left id (Rule.lhs leftRule))\n left  == Context.ofTerm top pos (Term.map Left id (Rule.rhs leftRule))\n top   == Substitution.apply subst (Term.map Right id (Rule.lhs rightRule))\n right == Substitution.apply subst (Term.map Right id (Rule.rhs rightRule))\n\u003c/pre\u003e\u003cp\u003eFurthermore, \u003ccode\u003epos\u003c/code\u003e is a non-variable position of \u003ccode\u003e(lhs rightRule)\u003c/code\u003e and\n \u003ccode\u003esubst\u003c/code\u003e is a most general substitution with these properties.\n\u003c/p\u003e",
          "module": "Data.Rewriting.CriticalPair.Type",
          "name": "CP",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-CriticalPair-Type.html#CP",
          "type": "data"
        },
        "index": {
          "description": "critical pair Critical pairs should have the following properties top Context.ofTerm top pos Term.map Left id Rule.lhs leftRule left Context.ofTerm top pos Term.map Left id Rule.rhs leftRule top Substitution.apply subst Term.map Right id Rule.lhs rightRule right Substitution.apply subst Term.map Right id Rule.rhs rightRule Furthermore pos is non-variable position of lhs rightRule and subst is most general substitution with these properties",
          "hierarchy": "Data Rewriting CriticalPair Type",
          "module": "Data.Rewriting.CriticalPair.Type",
          "name": "CP",
          "package": "term-rewriting",
          "partial": "CP",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair-Type.html#t:CP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Rewriting.CriticalPair.Type\",\"Data.Rewriting.CriticalPair\"]",
          "name": "CP",
          "package": "term-rewriting",
          "signature": "CP",
          "source": "src/Data-Rewriting-CriticalPair-Type.html#CP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair-Type.html#v:CP\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair.html#v:CP\"]"
        },
        "index": {
          "hierarchy": "Data Rewriting CriticalPair Type",
          "module": "Data.Rewriting.CriticalPair.Type",
          "name": "CP",
          "package": "term-rewriting",
          "partial": "CP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair-Type.html#v:CP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eleft reduct\n\u003c/p\u003e",
          "module": "[\"Data.Rewriting.CriticalPair.Type\",\"Data.Rewriting.CriticalPair\"]",
          "name": "left",
          "package": "term-rewriting",
          "signature": "Term f (Either v v')",
          "source": "src/Data-Rewriting-CriticalPair-Type.html#CP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair-Type.html#v:left\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair.html#v:left\"]"
        },
        "index": {
          "description": "left reduct",
          "hierarchy": "Data Rewriting CriticalPair Type",
          "module": "Data.Rewriting.CriticalPair.Type",
          "name": "left",
          "package": "term-rewriting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair-Type.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eposition of left rule application\n\u003c/p\u003e",
          "module": "[\"Data.Rewriting.CriticalPair.Type\",\"Data.Rewriting.CriticalPair\"]",
          "name": "leftPos",
          "package": "term-rewriting",
          "signature": "Pos",
          "source": "src/Data-Rewriting-CriticalPair-Type.html#CP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair-Type.html#v:leftPos\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair.html#v:leftPos\"]"
        },
        "index": {
          "description": "position of left rule application",
          "hierarchy": "Data Rewriting CriticalPair Type",
          "module": "Data.Rewriting.CriticalPair.Type",
          "name": "leftPos",
          "package": "term-rewriting",
          "partial": "Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair-Type.html#v:leftPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erule applied on left side\n\u003c/p\u003e",
          "module": "[\"Data.Rewriting.CriticalPair.Type\",\"Data.Rewriting.CriticalPair\"]",
          "name": "leftRule",
          "package": "term-rewriting",
          "signature": "Rule f v",
          "source": "src/Data-Rewriting-CriticalPair-Type.html#CP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair-Type.html#v:leftRule\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair.html#v:leftRule\"]"
        },
        "index": {
          "description": "rule applied on left side",
          "hierarchy": "Data Rewriting CriticalPair Type",
          "module": "Data.Rewriting.CriticalPair.Type",
          "name": "leftRule",
          "package": "term-rewriting",
          "partial": "Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair-Type.html#v:leftRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eright reduct\n\u003c/p\u003e",
          "module": "[\"Data.Rewriting.CriticalPair.Type\",\"Data.Rewriting.CriticalPair\"]",
          "name": "right",
          "package": "term-rewriting",
          "signature": "Term f (Either v v')",
          "source": "src/Data-Rewriting-CriticalPair-Type.html#CP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair-Type.html#v:right\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair.html#v:right\"]"
        },
        "index": {
          "description": "right reduct",
          "hierarchy": "Data Rewriting CriticalPair Type",
          "module": "Data.Rewriting.CriticalPair.Type",
          "name": "right",
          "package": "term-rewriting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair-Type.html#v:right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erule applied on right side\n\u003c/p\u003e",
          "module": "[\"Data.Rewriting.CriticalPair.Type\",\"Data.Rewriting.CriticalPair\"]",
          "name": "rightRule",
          "package": "term-rewriting",
          "signature": "Rule f v'",
          "source": "src/Data-Rewriting-CriticalPair-Type.html#CP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair-Type.html#v:rightRule\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair.html#v:rightRule\"]"
        },
        "index": {
          "description": "rule applied on right side",
          "hierarchy": "Data Rewriting CriticalPair Type",
          "module": "Data.Rewriting.CriticalPair.Type",
          "name": "rightRule",
          "package": "term-rewriting",
          "partial": "Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair-Type.html#v:rightRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecommon substitution of the rewrite steps\n\u003c/p\u003e",
          "module": "[\"Data.Rewriting.CriticalPair.Type\",\"Data.Rewriting.CriticalPair\"]",
          "name": "subst",
          "package": "term-rewriting",
          "signature": "Subst f (Either v v')",
          "source": "src/Data-Rewriting-CriticalPair-Type.html#CP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair-Type.html#v:subst\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair.html#v:subst\"]"
        },
        "index": {
          "description": "common substitution of the rewrite steps",
          "hierarchy": "Data Rewriting CriticalPair Type",
          "module": "Data.Rewriting.CriticalPair.Type",
          "name": "subst",
          "package": "term-rewriting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair-Type.html#v:subst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esource\n\u003c/p\u003e",
          "module": "[\"Data.Rewriting.CriticalPair.Type\",\"Data.Rewriting.CriticalPair\"]",
          "name": "top",
          "package": "term-rewriting",
          "signature": "Term f (Either v v')",
          "source": "src/Data-Rewriting-CriticalPair-Type.html#CP",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair-Type.html#v:top\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair.html#v:top\"]"
        },
        "index": {
          "description": "source",
          "hierarchy": "Data Rewriting CriticalPair Type",
          "module": "Data.Rewriting.CriticalPair.Type",
          "name": "top",
          "package": "term-rewriting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair-Type.html#v:top"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.CriticalPair",
          "name": "CriticalPair",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-CriticalPair.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Rewriting CriticalPair",
          "module": "Data.Rewriting.CriticalPair",
          "name": "CriticalPair",
          "package": "term-rewriting",
          "partial": "Critical Pair",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA critical pair. Critical pairs (should) have the following properties:\n\u003c/p\u003e\u003cpre\u003e\n top   == Context.ofTerm top pos (Term.map Left id (Rule.lhs leftRule))\n left  == Context.ofTerm top pos (Term.map Left id (Rule.rhs leftRule))\n top   == Substitution.apply subst (Term.map Right id (Rule.lhs rightRule))\n right == Substitution.apply subst (Term.map Right id (Rule.rhs rightRule))\n\u003c/pre\u003e\u003cp\u003eFurthermore, \u003ccode\u003epos\u003c/code\u003e is a non-variable position of \u003ccode\u003e(lhs rightRule)\u003c/code\u003e and\n \u003ccode\u003esubst\u003c/code\u003e is a most general substitution with these properties.\n\u003c/p\u003e",
          "module": "Data.Rewriting.CriticalPair",
          "name": "CP",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-CriticalPair-Type.html#CP",
          "type": "data"
        },
        "index": {
          "description": "critical pair Critical pairs should have the following properties top Context.ofTerm top pos Term.map Left id Rule.lhs leftRule left Context.ofTerm top pos Term.map Left id Rule.rhs leftRule top Substitution.apply subst Term.map Right id Rule.lhs rightRule right Substitution.apply subst Term.map Right id Rule.rhs rightRule Furthermore pos is non-variable position of lhs rightRule and subst is most general substitution with these properties",
          "hierarchy": "Data Rewriting CriticalPair",
          "module": "Data.Rewriting.CriticalPair",
          "name": "CP",
          "package": "term-rewriting",
          "partial": "CP",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-CriticalPair.html#t:CP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Pos",
          "name": "Pos",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Pos.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Rewriting Pos",
          "module": "Data.Rewriting.Pos",
          "name": "Pos",
          "package": "term-rewriting",
          "partial": "Pos",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Pos.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA position in a term. Arguments are counted from 0.\n\u003c/p\u003e\u003cp\u003eA position describes a path in the tree representation of a term. The empty\n position \u003ccode\u003e[]\u003c/code\u003e denotes the root of the term. A position \u003ccode\u003e[0,1]\u003c/code\u003e denotes the\n 2nd child of the 1st child of the root (counting children from left to\n right).\n\u003c/p\u003e",
          "module": "Data.Rewriting.Pos",
          "name": "Pos",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Pos.html#Pos",
          "type": "type"
        },
        "index": {
          "description": "position in term Arguments are counted from position describes path in the tree representation of term The empty position denotes the root of the term position denotes the nd child of the st child of the root counting children from left to right",
          "hierarchy": "Data Rewriting Pos",
          "module": "Data.Rewriting.Pos",
          "name": "Pos",
          "package": "term-rewriting",
          "partial": "Pos",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Pos.html#t:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ep `above` q\u003c/code\u003e checks whether \u003ccode\u003ep\u003c/code\u003e is above \u003ccode\u003eq\u003c/code\u003e (in the tree representation of\n a term). A position \u003ccode\u003ep\u003c/code\u003e is above a position \u003ccode\u003eq\u003c/code\u003e, whenever \u003ccode\u003ep\u003c/code\u003e is a prefix of\n \u003ccode\u003eq\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Pos",
          "name": "above",
          "package": "term-rewriting",
          "signature": "Pos -\u003e Pos -\u003e Bool",
          "source": "src/Data-Rewriting-Pos.html#above",
          "type": "function"
        },
        "index": {
          "description": "above checks whether is above in the tree representation of term position is above position whenever is prefix of",
          "hierarchy": "Data Rewriting Pos",
          "module": "Data.Rewriting.Pos",
          "name": "above",
          "normalized": "Pos-\u003ePos-\u003eBool",
          "package": "term-rewriting",
          "signature": "Pos-\u003ePos-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Pos.html#v:above"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ep `below` q\u003c/code\u003e checks whether \u003ccode\u003ep\u003c/code\u003e is below \u003ccode\u003eq\u003c/code\u003e, that is to say that \u003ccode\u003eq\u003c/code\u003e is\n above \u003ccode\u003ep\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Pos",
          "name": "below",
          "package": "term-rewriting",
          "signature": "Pos -\u003e Pos -\u003e Bool",
          "source": "src/Data-Rewriting-Pos.html#below",
          "type": "function"
        },
        "index": {
          "description": "below checks whether is below that is to say that is above",
          "hierarchy": "Data Rewriting Pos",
          "module": "Data.Rewriting.Pos",
          "name": "below",
          "normalized": "Pos-\u003ePos-\u003eBool",
          "package": "term-rewriting",
          "signature": "Pos-\u003ePos-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Pos.html#v:below"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ep `leftOf` q\u003c/code\u003e checks whether \u003ccode\u003ep\u003c/code\u003e is left of \u003ccode\u003eq\u003c/code\u003e. This is only possible if\n \u003ccode\u003ep\u003c/code\u003e and \u003ccode\u003eq\u003c/code\u003e do not lie on the same path (i.e., are parallel to each other).\n\u003c/p\u003e",
          "module": "Data.Rewriting.Pos",
          "name": "leftOf",
          "package": "term-rewriting",
          "signature": "Pos -\u003e Pos -\u003e Bool",
          "source": "src/Data-Rewriting-Pos.html#leftOf",
          "type": "function"
        },
        "index": {
          "description": "leftOf checks whether is left of This is only possible if and do not lie on the same path i.e are parallel to each other",
          "hierarchy": "Data Rewriting Pos",
          "module": "Data.Rewriting.Pos",
          "name": "leftOf",
          "normalized": "Pos-\u003ePos-\u003eBool",
          "package": "term-rewriting",
          "partial": "Of",
          "signature": "Pos-\u003ePos-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Pos.html#v:leftOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ep `parallelTo` q\u003c/code\u003e checks whether \u003ccode\u003ep\u003c/code\u003e is parallel to \u003ccode\u003eq\u003c/code\u003e, that is to say\n that \u003ccode\u003ep\u003c/code\u003e and \u003ccode\u003eq\u003c/code\u003e do not lie on the same path.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Pos",
          "name": "parallelTo",
          "package": "term-rewriting",
          "signature": "Pos -\u003e Pos -\u003e Bool",
          "source": "src/Data-Rewriting-Pos.html#parallelTo",
          "type": "function"
        },
        "index": {
          "description": "parallelTo checks whether is parallel to that is to say that and do not lie on the same path",
          "hierarchy": "Data Rewriting Pos",
          "module": "Data.Rewriting.Pos",
          "name": "parallelTo",
          "normalized": "Pos-\u003ePos-\u003eBool",
          "package": "term-rewriting",
          "partial": "To",
          "signature": "Pos-\u003ePos-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Pos.html#v:parallelTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ep `rightOf` q\u003c/code\u003e checks whether \u003ccode\u003ep\u003c/code\u003e is right of \u003ccode\u003eq\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Pos",
          "name": "rightOf",
          "package": "term-rewriting",
          "signature": "Pos -\u003e Pos -\u003e Bool",
          "source": "src/Data-Rewriting-Pos.html#rightOf",
          "type": "function"
        },
        "index": {
          "description": "rightOf checks whether is right of",
          "hierarchy": "Data Rewriting Pos",
          "module": "Data.Rewriting.Pos",
          "name": "rightOf",
          "normalized": "Pos-\u003ePos-\u003eBool",
          "package": "term-rewriting",
          "partial": "Of",
          "signature": "Pos-\u003ePos-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Pos.html#v:rightOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Parse",
          "name": "Parse",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Problem-Parse.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Parse",
          "module": "Data.Rewriting.Problem.Parse",
          "name": "Parse",
          "package": "term-rewriting",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Parse",
          "name": "ProblemParseError",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Problem-Parse.html#ProblemParseError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Parse",
          "module": "Data.Rewriting.Problem.Parse",
          "name": "ProblemParseError",
          "package": "term-rewriting",
          "partial": "Problem Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Parse.html#t:ProblemParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Parse",
          "name": "FileReadError",
          "package": "term-rewriting",
          "signature": "FileReadError IOError",
          "source": "src/Data-Rewriting-Problem-Parse.html#ProblemParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Parse",
          "module": "Data.Rewriting.Problem.Parse",
          "name": "FileReadError",
          "package": "term-rewriting",
          "partial": "File Read Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Parse.html#v:FileReadError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Parse",
          "name": "SomeParseError",
          "package": "term-rewriting",
          "signature": "SomeParseError ParseError",
          "source": "src/Data-Rewriting-Problem-Parse.html#ProblemParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Parse",
          "module": "Data.Rewriting.Problem.Parse",
          "name": "SomeParseError",
          "package": "term-rewriting",
          "partial": "Some Parse Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Parse.html#v:SomeParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Parse",
          "name": "UnknownParseError",
          "package": "term-rewriting",
          "signature": "UnknownParseError String",
          "source": "src/Data-Rewriting-Problem-Parse.html#ProblemParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Parse",
          "module": "Data.Rewriting.Problem.Parse",
          "name": "UnknownParseError",
          "package": "term-rewriting",
          "partial": "Unknown Parse Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Parse.html#v:UnknownParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Parse",
          "name": "UnsupportedDeclaration",
          "package": "term-rewriting",
          "signature": "UnsupportedDeclaration String",
          "source": "src/Data-Rewriting-Problem-Parse.html#ProblemParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Parse",
          "module": "Data.Rewriting.Problem.Parse",
          "name": "UnsupportedDeclaration",
          "package": "term-rewriting",
          "partial": "Unsupported Declaration",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Parse.html#v:UnsupportedDeclaration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Parse",
          "name": "UnsupportedStrategy",
          "package": "term-rewriting",
          "signature": "UnsupportedStrategy String",
          "source": "src/Data-Rewriting-Problem-Parse.html#ProblemParseError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Parse",
          "module": "Data.Rewriting.Problem.Parse",
          "name": "UnsupportedStrategy",
          "package": "term-rewriting",
          "partial": "Unsupported Strategy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Parse.html#v:UnsupportedStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Parse",
          "name": "fromCharStream",
          "package": "term-rewriting",
          "signature": "SourceName -\u003e s -\u003e Either ProblemParseError (Problem String String)",
          "source": "src/Data-Rewriting-Problem-Parse.html#fromCharStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Parse",
          "module": "Data.Rewriting.Problem.Parse",
          "name": "fromCharStream",
          "normalized": "SourceName-\u003ea-\u003eEither ProblemParseError(Problem String String)",
          "package": "term-rewriting",
          "partial": "Char Stream",
          "signature": "SourceName-\u003es-\u003eEither ProblemParseError(Problem String String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Parse.html#v:fromCharStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Parse",
          "name": "fromFile",
          "package": "term-rewriting",
          "signature": "FilePath -\u003e IO (Either ProblemParseError (Problem String String))",
          "source": "src/Data-Rewriting-Problem-Parse.html#fromFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Parse",
          "module": "Data.Rewriting.Problem.Parse",
          "name": "fromFile",
          "normalized": "FilePath-\u003eIO(Either ProblemParseError(Problem String String))",
          "package": "term-rewriting",
          "partial": "File",
          "signature": "FilePath-\u003eIO(Either ProblemParseError(Problem String String))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Parse.html#v:fromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Parse",
          "name": "fromString",
          "package": "term-rewriting",
          "signature": "String -\u003e Either ProblemParseError (Problem String String)",
          "source": "src/Data-Rewriting-Problem-Parse.html#fromString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Parse",
          "module": "Data.Rewriting.Problem.Parse",
          "name": "fromString",
          "normalized": "String-\u003eEither ProblemParseError(Problem String String)",
          "package": "term-rewriting",
          "partial": "String",
          "signature": "String-\u003eEither ProblemParseError(Problem String String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Parse.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Parse",
          "name": "parseFileIO",
          "package": "term-rewriting",
          "signature": "FilePath -\u003e IO (Problem String String)",
          "source": "src/Data-Rewriting-Problem-Parse.html#parseFileIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Parse",
          "module": "Data.Rewriting.Problem.Parse",
          "name": "parseFileIO",
          "normalized": "FilePath-\u003eIO(Problem String String)",
          "package": "term-rewriting",
          "partial": "File IO",
          "signature": "FilePath-\u003eIO(Problem String String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Parse.html#v:parseFileIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Parse",
          "name": "parseIO",
          "package": "term-rewriting",
          "signature": "String -\u003e IO (Problem String String)",
          "source": "src/Data-Rewriting-Problem-Parse.html#parseIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Parse",
          "module": "Data.Rewriting.Problem.Parse",
          "name": "parseIO",
          "normalized": "String-\u003eIO(Problem String String)",
          "package": "term-rewriting",
          "partial": "IO",
          "signature": "String-\u003eIO(Problem String String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Parse.html#v:parseIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Pretty",
          "name": "Pretty",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Problem-Pretty.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Pretty",
          "module": "Data.Rewriting.Problem.Pretty",
          "name": "Pretty",
          "package": "term-rewriting",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Pretty",
          "name": "prettyProblem",
          "package": "term-rewriting",
          "signature": "(f -\u003e Doc) -\u003e (v -\u003e Doc) -\u003e Problem f v -\u003e Doc",
          "source": "src/Data-Rewriting-Problem-Pretty.html#prettyProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Pretty",
          "module": "Data.Rewriting.Problem.Pretty",
          "name": "prettyProblem",
          "normalized": "(a-\u003eDoc)-\u003e(b-\u003eDoc)-\u003eProblem a b-\u003eDoc",
          "package": "term-rewriting",
          "partial": "Problem",
          "signature": "(f-\u003eDoc)-\u003e(v-\u003eDoc)-\u003eProblem f v-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Pretty.html#v:prettyProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Pretty",
          "name": "prettyWST",
          "package": "term-rewriting",
          "signature": "(f -\u003e Doc) -\u003e (v -\u003e Doc) -\u003e Problem f v -\u003e Doc",
          "source": "src/Data-Rewriting-Problem-Pretty.html#prettyWST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Pretty",
          "module": "Data.Rewriting.Problem.Pretty",
          "name": "prettyWST",
          "normalized": "(a-\u003eDoc)-\u003e(b-\u003eDoc)-\u003eProblem a b-\u003eDoc",
          "package": "term-rewriting",
          "partial": "WST",
          "signature": "(f-\u003eDoc)-\u003e(v-\u003eDoc)-\u003eProblem f v-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Pretty.html#v:prettyWST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Pretty",
          "name": "prettyWST'",
          "package": "term-rewriting",
          "signature": "Problem f v -\u003e Doc",
          "source": "src/Data-Rewriting-Problem-Pretty.html#prettyWST%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Pretty",
          "module": "Data.Rewriting.Problem.Pretty",
          "name": "prettyWST'",
          "normalized": "Problem a b-\u003eDoc",
          "package": "term-rewriting",
          "partial": "WST'",
          "signature": "Problem f v-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Pretty.html#v:prettyWST-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Type",
          "name": "Type",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Problem-Type.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Type",
          "module": "Data.Rewriting.Problem.Type",
          "name": "Type",
          "package": "term-rewriting",
          "partial": "Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Type",
          "name": "Problem",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Problem-Type.html#Problem",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Type",
          "module": "Data.Rewriting.Problem.Type",
          "name": "Problem",
          "package": "term-rewriting",
          "partial": "Problem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#t:Problem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Type",
          "name": "RulesPair",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Problem-Type.html#RulesPair",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Type",
          "module": "Data.Rewriting.Problem.Type",
          "name": "RulesPair",
          "package": "term-rewriting",
          "partial": "Rules Pair",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#t:RulesPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Type",
          "name": "StartTerms",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Problem-Type.html#StartTerms",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Type",
          "module": "Data.Rewriting.Problem.Type",
          "name": "StartTerms",
          "package": "term-rewriting",
          "partial": "Start Terms",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#t:StartTerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Type",
          "name": "Strategy",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Problem-Type.html#Strategy",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Type",
          "module": "Data.Rewriting.Problem.Type",
          "name": "Strategy",
          "package": "term-rewriting",
          "partial": "Strategy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#t:Strategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Type",
          "name": "Theory",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Problem-Type.html#Theory",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Type",
          "module": "Data.Rewriting.Problem.Type",
          "name": "Theory",
          "package": "term-rewriting",
          "partial": "Theory",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#t:Theory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Type",
          "name": "AllTerms",
          "package": "term-rewriting",
          "signature": "AllTerms",
          "source": "src/Data-Rewriting-Problem-Type.html#StartTerms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Type",
          "module": "Data.Rewriting.Problem.Type",
          "name": "AllTerms",
          "package": "term-rewriting",
          "partial": "All Terms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#v:AllTerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Type",
          "name": "BasicTerms",
          "package": "term-rewriting",
          "signature": "BasicTerms",
          "source": "src/Data-Rewriting-Problem-Type.html#StartTerms",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Type",
          "module": "Data.Rewriting.Problem.Type",
          "name": "BasicTerms",
          "package": "term-rewriting",
          "partial": "Basic Terms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#v:BasicTerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Type",
          "name": "Equations",
          "package": "term-rewriting",
          "signature": "Equations [Rule f v]",
          "source": "src/Data-Rewriting-Problem-Type.html#Theory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Type",
          "module": "Data.Rewriting.Problem.Type",
          "name": "Equations",
          "normalized": "Equations[Rule a b]",
          "package": "term-rewriting",
          "partial": "Equations",
          "signature": "Equations[Rule f v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#v:Equations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Type",
          "name": "Full",
          "package": "term-rewriting",
          "signature": "Full",
          "source": "src/Data-Rewriting-Problem-Type.html#Strategy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Type",
          "module": "Data.Rewriting.Problem.Type",
          "name": "Full",
          "package": "term-rewriting",
          "partial": "Full",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#v:Full"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Type",
          "name": "Innermost",
          "package": "term-rewriting",
          "signature": "Innermost",
          "source": "src/Data-Rewriting-Problem-Type.html#Strategy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Type",
          "module": "Data.Rewriting.Problem.Type",
          "name": "Innermost",
          "package": "term-rewriting",
          "partial": "Innermost",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#v:Innermost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Type",
          "name": "Outermost",
          "package": "term-rewriting",
          "signature": "Outermost",
          "source": "src/Data-Rewriting-Problem-Type.html#Strategy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Type",
          "module": "Data.Rewriting.Problem.Type",
          "name": "Outermost",
          "package": "term-rewriting",
          "partial": "Outermost",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#v:Outermost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Rewriting.Problem.Type\",\"Data.Rewriting.Problem\"]",
          "name": "Problem",
          "package": "term-rewriting",
          "signature": "Problem",
          "source": "src/Data-Rewriting-Problem-Type.html#Problem",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#v:Problem\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem.html#v:Problem\"]"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Type",
          "module": "Data.Rewriting.Problem.Type",
          "name": "Problem",
          "package": "term-rewriting",
          "partial": "Problem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#v:Problem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Type",
          "name": "RulesPair",
          "package": "term-rewriting",
          "signature": "RulesPair",
          "source": "src/Data-Rewriting-Problem-Type.html#RulesPair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Type",
          "module": "Data.Rewriting.Problem.Type",
          "name": "RulesPair",
          "package": "term-rewriting",
          "partial": "Rules Pair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#v:RulesPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Type",
          "name": "SymbolProperty",
          "package": "term-rewriting",
          "signature": "SymbolProperty String [f]",
          "source": "src/Data-Rewriting-Problem-Type.html#Theory",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Type",
          "module": "Data.Rewriting.Problem.Type",
          "name": "SymbolProperty",
          "normalized": "SymbolProperty String[a]",
          "package": "term-rewriting",
          "partial": "Symbol Property",
          "signature": "SymbolProperty String[f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#v:SymbolProperty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Type",
          "name": "allRules",
          "package": "term-rewriting",
          "signature": "RulesPair f v -\u003e [Rule f v]",
          "source": "src/Data-Rewriting-Problem-Type.html#allRules",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Type",
          "module": "Data.Rewriting.Problem.Type",
          "name": "allRules",
          "normalized": "RulesPair a b-\u003e[Rule a b]",
          "package": "term-rewriting",
          "partial": "Rules",
          "signature": "RulesPair f v-\u003e[Rule f v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#v:allRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Rewriting.Problem.Type\",\"Data.Rewriting.Problem\"]",
          "name": "comment",
          "package": "term-rewriting",
          "signature": "Maybe String",
          "source": "src/Data-Rewriting-Problem-Type.html#Problem",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#v:comment\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem.html#v:comment\"]"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Type",
          "module": "Data.Rewriting.Problem.Type",
          "name": "comment",
          "package": "term-rewriting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#v:comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Rewriting.Problem.Type\",\"Data.Rewriting.Problem\"]",
          "name": "rules",
          "package": "term-rewriting",
          "signature": "RulesPair f v",
          "source": "src/Data-Rewriting-Problem-Type.html#Problem",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#v:rules\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem.html#v:rules\"]"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Type",
          "module": "Data.Rewriting.Problem.Type",
          "name": "rules",
          "package": "term-rewriting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#v:rules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Rewriting.Problem.Type\",\"Data.Rewriting.Problem\"]",
          "name": "startTerms",
          "package": "term-rewriting",
          "signature": "StartTerms",
          "source": "src/Data-Rewriting-Problem-Type.html#Problem",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#v:startTerms\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem.html#v:startTerms\"]"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Type",
          "module": "Data.Rewriting.Problem.Type",
          "name": "startTerms",
          "package": "term-rewriting",
          "partial": "Terms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#v:startTerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Rewriting.Problem.Type\",\"Data.Rewriting.Problem\"]",
          "name": "strategy",
          "package": "term-rewriting",
          "signature": "Strategy",
          "source": "src/Data-Rewriting-Problem-Type.html#Problem",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#v:strategy\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem.html#v:strategy\"]"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Type",
          "module": "Data.Rewriting.Problem.Type",
          "name": "strategy",
          "package": "term-rewriting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#v:strategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Type",
          "name": "strictRules",
          "package": "term-rewriting",
          "signature": "[Rule f v]",
          "source": "src/Data-Rewriting-Problem-Type.html#RulesPair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Type",
          "module": "Data.Rewriting.Problem.Type",
          "name": "strictRules",
          "normalized": "[Rule a b]",
          "package": "term-rewriting",
          "partial": "Rules",
          "signature": "[Rule f v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#v:strictRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Rewriting.Problem.Type\",\"Data.Rewriting.Problem\"]",
          "name": "symbols",
          "package": "term-rewriting",
          "signature": "[f]",
          "source": "src/Data-Rewriting-Problem-Type.html#Problem",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#v:symbols\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem.html#v:symbols\"]"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Type",
          "module": "Data.Rewriting.Problem.Type",
          "name": "symbols",
          "normalized": "[a]",
          "package": "term-rewriting",
          "signature": "[f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#v:symbols"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Rewriting.Problem.Type\",\"Data.Rewriting.Problem\"]",
          "name": "theory",
          "package": "term-rewriting",
          "signature": "Maybe [Theory f v]",
          "source": "src/Data-Rewriting-Problem-Type.html#Problem",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#v:theory\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem.html#v:theory\"]"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Type",
          "module": "Data.Rewriting.Problem.Type",
          "name": "theory",
          "normalized": "Maybe[Theory a b]",
          "package": "term-rewriting",
          "signature": "Maybe[Theory f v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#v:theory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Rewriting.Problem.Type\",\"Data.Rewriting.Problem\"]",
          "name": "variables",
          "package": "term-rewriting",
          "signature": "[v]",
          "source": "src/Data-Rewriting-Problem-Type.html#Problem",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#v:variables\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem.html#v:variables\"]"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Type",
          "module": "Data.Rewriting.Problem.Type",
          "name": "variables",
          "normalized": "[a]",
          "package": "term-rewriting",
          "signature": "[v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#v:variables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem.Type",
          "name": "weakRules",
          "package": "term-rewriting",
          "signature": "[Rule f v]",
          "source": "src/Data-Rewriting-Problem-Type.html#RulesPair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem Type",
          "module": "Data.Rewriting.Problem.Type",
          "name": "weakRules",
          "normalized": "[Rule a b]",
          "package": "term-rewriting",
          "partial": "Rules",
          "signature": "[Rule f v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem-Type.html#v:weakRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTermination problem type, based on WST format.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Rewriting.Problem",
          "name": "Problem",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Problem.html",
          "type": "module"
        },
        "index": {
          "description": "Termination problem type based on WST format",
          "hierarchy": "Data Rewriting Problem",
          "module": "Data.Rewriting.Problem",
          "name": "Problem",
          "package": "term-rewriting",
          "partial": "Problem",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Problem",
          "name": "Problem",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Problem-Type.html#Problem",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Rewriting Problem",
          "module": "Data.Rewriting.Problem",
          "name": "Problem",
          "package": "term-rewriting",
          "partial": "Problem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Problem.html#t:Problem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Rule.Ops",
          "name": "Ops",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Rule-Ops.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Rewriting Rule Ops",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "Ops",
          "package": "term-rewriting",
          "partial": "Ops",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Ops.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest whether the given predicate is true for both sides of a rule.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "both",
          "package": "term-rewriting",
          "signature": "(Term f v -\u003e Bool) -\u003e Rule f v -\u003e Bool",
          "source": "src/Data-Rewriting-Rule-Ops.html#both",
          "type": "function"
        },
        "index": {
          "description": "Test whether the given predicate is true for both sides of rule",
          "hierarchy": "Data Rewriting Rule Ops",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "both",
          "normalized": "(Term a b-\u003eBool)-\u003eRule a b-\u003eBool",
          "package": "term-rewriting",
          "signature": "(Term f v-\u003eBool)-\u003eRule f v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Ops.html#v:both"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifting of \u003ccode\u003e\u003ca\u003efuns\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eRule\u003c/a\u003e\u003c/code\u003e: returns the list of function symbols\n in left- and right-hand sides.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efuns $ Rule {lhs = Fun 'f' [Var 3, Fun 'g' [Fun 'f' []]], rhs = Fun 'h' [Fun 'f' []]}\n\u003c/code\u003e\u003c/strong\u003e\"fgfhf\"\n\u003c/pre\u003e",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "funs",
          "package": "term-rewriting",
          "signature": "Rule f v -\u003e [f]",
          "source": "src/Data-Rewriting-Rule-Ops.html#funs",
          "type": "function"
        },
        "index": {
          "description": "Lifting of funs to Rule returns the list of function symbols in left and right-hand sides funs Rule lhs Fun Var Fun Fun rhs Fun Fun fgfhf",
          "hierarchy": "Data Rewriting Rule Ops",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "funs",
          "normalized": "Rule a b-\u003e[a]",
          "package": "term-rewriting",
          "signature": "Rule f v-\u003e[f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Ops.html#v:funs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifference List version of \u003ccode\u003e\u003ca\u003efuns\u003c/a\u003e\u003c/code\u003e.\n We have \u003ccode\u003efunsDL r vs = funs r ++ vs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "funsDL",
          "package": "term-rewriting",
          "signature": "Rule f v -\u003e [f] -\u003e [f]",
          "source": "src/Data-Rewriting-Rule-Ops.html#funsDL",
          "type": "function"
        },
        "index": {
          "description": "Difference List version of funs We have funsDL vs funs vs",
          "hierarchy": "Data Rewriting Rule Ops",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "funsDL",
          "normalized": "Rule a b-\u003e[a]-\u003e[a]",
          "package": "term-rewriting",
          "partial": "DL",
          "signature": "Rule f v-\u003e[f]-\u003e[f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Ops.html#v:funsDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether the given rule is collapsing, i.e., if its right\n hand side is a variable.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "isCollapsing",
          "package": "term-rewriting",
          "signature": "Rule f v -\u003e Bool",
          "source": "src/Data-Rewriting-Rule-Ops.html#isCollapsing",
          "type": "function"
        },
        "index": {
          "description": "Check whether the given rule is collapsing i.e if its right hand side is variable",
          "hierarchy": "Data Rewriting Rule Ops",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "isCollapsing",
          "normalized": "Rule a b-\u003eBool",
          "package": "term-rewriting",
          "partial": "Collapsing",
          "signature": "Rule f v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Ops.html#v:isCollapsing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether the given rule is creating, i.e., if some variable\n occurs in its right hand side that does not occur in its left hand side.\n\u003c/p\u003e\u003cp\u003eThis is the dual of \u003ccode\u003e\u003ca\u003eisErasing\u003c/a\u003e\u003c/code\u003e. The term \u003cem\u003ecreating\u003c/em\u003e is non-standard.\n Creating rules are usually forbidden. See also \u003ccode\u003e\u003ca\u003eisValid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "isCreating",
          "package": "term-rewriting",
          "signature": "Rule f v -\u003e Bool",
          "source": "src/Data-Rewriting-Rule-Ops.html#isCreating",
          "type": "function"
        },
        "index": {
          "description": "Check whether the given rule is creating i.e if some variable occurs in its right hand side that does not occur in its left hand side This is the dual of isErasing The term creating is non-standard Creating rules are usually forbidden See also isValid",
          "hierarchy": "Data Rewriting Rule Ops",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "isCreating",
          "normalized": "Rule a b-\u003eBool",
          "package": "term-rewriting",
          "partial": "Creating",
          "signature": "Rule f v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Ops.html#v:isCreating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether the given rule is duplicating, i.e., if some variable\n occurs more often in its right hand side than in its left hand side.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "isDuplicating",
          "package": "term-rewriting",
          "signature": "Rule f v -\u003e Bool",
          "source": "src/Data-Rewriting-Rule-Ops.html#isDuplicating",
          "type": "function"
        },
        "index": {
          "description": "Check whether the given rule is duplicating i.e if some variable occurs more often in its right hand side than in its left hand side",
          "hierarchy": "Data Rewriting Rule Ops",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "isDuplicating",
          "normalized": "Rule a b-\u003eBool",
          "package": "term-rewriting",
          "partial": "Duplicating",
          "signature": "Rule f v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Ops.html#v:isDuplicating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether the given rule is erasing, i.e., if some variable\n occurs in the left hand side but not in the right hand side.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "isErasing",
          "package": "term-rewriting",
          "signature": "Rule f v -\u003e Bool",
          "source": "src/Data-Rewriting-Rule-Ops.html#isErasing",
          "type": "function"
        },
        "index": {
          "description": "Check whether the given rule is erasing i.e if some variable occurs in the left hand side but not in the right hand side",
          "hierarchy": "Data Rewriting Rule Ops",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "isErasing",
          "normalized": "Rule a b-\u003eBool",
          "package": "term-rewriting",
          "partial": "Erasing",
          "signature": "Rule f v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Ops.html#v:isErasing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether the given rule is expanding, i.e., if its left hand\n sides is a variable.\n\u003c/p\u003e\u003cp\u003eThis is the dual of \u003ccode\u003e\u003ca\u003eisCollapsing\u003c/a\u003e\u003c/code\u003e. The term \u003cem\u003eexpanding\u003c/em\u003e is non-standard.\n Expanding rules are usually forbidden. See also \u003ccode\u003e\u003ca\u003eisValid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "isExpanding",
          "package": "term-rewriting",
          "signature": "Rule f v -\u003e Bool",
          "source": "src/Data-Rewriting-Rule-Ops.html#isExpanding",
          "type": "function"
        },
        "index": {
          "description": "Check whether the given rule is expanding i.e if its left hand sides is variable This is the dual of isCollapsing The term expanding is non-standard Expanding rules are usually forbidden See also isValid",
          "hierarchy": "Data Rewriting Rule Ops",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "isExpanding",
          "normalized": "Rule a b-\u003eBool",
          "package": "term-rewriting",
          "partial": "Expanding",
          "signature": "Rule f v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Ops.html#v:isExpanding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether both sides of the given rule is are ground terms.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "isGround",
          "package": "term-rewriting",
          "signature": "Rule f v -\u003e Bool",
          "source": "src/Data-Rewriting-Rule-Ops.html#isGround",
          "type": "function"
        },
        "index": {
          "description": "Check whether both sides of the given rule is are ground terms",
          "hierarchy": "Data Rewriting Rule Ops",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "isGround",
          "normalized": "Rule a b-\u003eBool",
          "package": "term-rewriting",
          "partial": "Ground",
          "signature": "Rule f v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Ops.html#v:isGround"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a rule is an instance of another.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "isInstanceOf",
          "package": "term-rewriting",
          "signature": "Rule f v -\u003e Rule f v' -\u003e Bool",
          "source": "src/Data-Rewriting-Rule-Ops.html#isInstanceOf",
          "type": "function"
        },
        "index": {
          "description": "Check whether rule is an instance of another",
          "hierarchy": "Data Rewriting Rule Ops",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "isInstanceOf",
          "normalized": "Rule a b-\u003eRule a c-\u003eBool",
          "package": "term-rewriting",
          "partial": "Instance Of",
          "signature": "Rule f v-\u003eRule f v'-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Ops.html#v:isInstanceOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether the left hand side of the given rule is a ground term.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "isLeftGround",
          "package": "term-rewriting",
          "signature": "Rule f v -\u003e Bool",
          "source": "src/Data-Rewriting-Rule-Ops.html#isLeftGround",
          "type": "function"
        },
        "index": {
          "description": "Check whether the left hand side of the given rule is ground term",
          "hierarchy": "Data Rewriting Rule Ops",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "isLeftGround",
          "normalized": "Rule a b-\u003eBool",
          "package": "term-rewriting",
          "partial": "Left Ground",
          "signature": "Rule f v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Ops.html#v:isLeftGround"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether the left hand side of the given rule is linear.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "isLeftLinear",
          "package": "term-rewriting",
          "signature": "Rule f v -\u003e Bool",
          "source": "src/Data-Rewriting-Rule-Ops.html#isLeftLinear",
          "type": "function"
        },
        "index": {
          "description": "Check whether the left hand side of the given rule is linear",
          "hierarchy": "Data Rewriting Rule Ops",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "isLeftLinear",
          "normalized": "Rule a b-\u003eBool",
          "package": "term-rewriting",
          "partial": "Left Linear",
          "signature": "Rule f v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Ops.html#v:isLeftLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether both sides of the given rule are linear.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "isLinear",
          "package": "term-rewriting",
          "signature": "Rule f v -\u003e Bool",
          "source": "src/Data-Rewriting-Rule-Ops.html#isLinear",
          "type": "function"
        },
        "index": {
          "description": "Check whether both sides of the given rule are linear",
          "hierarchy": "Data Rewriting Rule Ops",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "isLinear",
          "normalized": "Rule a b-\u003eBool",
          "package": "term-rewriting",
          "partial": "Linear",
          "signature": "Rule f v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Ops.html#v:isLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether the right hand side of the given rule is a ground term.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "isRightGround",
          "package": "term-rewriting",
          "signature": "Rule f v -\u003e Bool",
          "source": "src/Data-Rewriting-Rule-Ops.html#isRightGround",
          "type": "function"
        },
        "index": {
          "description": "Check whether the right hand side of the given rule is ground term",
          "hierarchy": "Data Rewriting Rule Ops",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "isRightGround",
          "normalized": "Rule a b-\u003eBool",
          "package": "term-rewriting",
          "partial": "Right Ground",
          "signature": "Rule f v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Ops.html#v:isRightGround"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether the right hand side of the given rule is linear.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "isRightLinear",
          "package": "term-rewriting",
          "signature": "Rule f v -\u003e Bool",
          "source": "src/Data-Rewriting-Rule-Ops.html#isRightLinear",
          "type": "function"
        },
        "index": {
          "description": "Check whether the right hand side of the given rule is linear",
          "hierarchy": "Data Rewriting Rule Ops",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "isRightLinear",
          "normalized": "Rule a b-\u003eBool",
          "package": "term-rewriting",
          "partial": "Right Linear",
          "signature": "Rule f v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Ops.html#v:isRightLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether rule is non-creating and non-expanding.\n See also \u003ccode\u003e\u003ca\u003eisCreating\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eisExpanding\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "isValid",
          "package": "term-rewriting",
          "signature": "Rule f v -\u003e Bool",
          "source": "src/Data-Rewriting-Rule-Ops.html#isValid",
          "type": "function"
        },
        "index": {
          "description": "Check whether rule is non-creating and non-expanding See also isCreating and isExpanding",
          "hierarchy": "Data Rewriting Rule Ops",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "isValid",
          "normalized": "Rule a b-\u003eBool",
          "package": "term-rewriting",
          "partial": "Valid",
          "signature": "Rule f v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Ops.html#v:isValid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a rule is a variant of another.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "isVariantOf",
          "package": "term-rewriting",
          "signature": "Rule f v -\u003e Rule f v' -\u003e Bool",
          "source": "src/Data-Rewriting-Rule-Ops.html#isVariantOf",
          "type": "function"
        },
        "index": {
          "description": "Check whether rule is variant of another",
          "hierarchy": "Data Rewriting Rule Ops",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "isVariantOf",
          "normalized": "Rule a b-\u003eRule a c-\u003eBool",
          "package": "term-rewriting",
          "partial": "Variant Of",
          "signature": "Rule f v-\u003eRule f v'-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Ops.html#v:isVariantOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the lhs of a rule.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "left",
          "package": "term-rewriting",
          "signature": "(Term f v -\u003e a) -\u003e Rule f v -\u003e a",
          "source": "src/Data-Rewriting-Rule-Ops.html#left",
          "type": "function"
        },
        "index": {
          "description": "Apply function to the lhs of rule",
          "hierarchy": "Data Rewriting Rule Ops",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "left",
          "normalized": "(Term a b-\u003ec)-\u003eRule a b-\u003ec",
          "package": "term-rewriting",
          "signature": "(Term f v-\u003ea)-\u003eRule f v-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Ops.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the rhs of a rule.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "right",
          "package": "term-rewriting",
          "signature": "(Term f v -\u003e a) -\u003e Rule f v -\u003e a",
          "source": "src/Data-Rewriting-Rule-Ops.html#right",
          "type": "function"
        },
        "index": {
          "description": "Apply function to the rhs of rule",
          "hierarchy": "Data Rewriting Rule Ops",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "right",
          "normalized": "(Term a b-\u003ec)-\u003eRule a b-\u003ec",
          "package": "term-rewriting",
          "signature": "(Term f v-\u003ea)-\u003eRule f v-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Ops.html#v:right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifting of \u003ccode\u003e\u003ca\u003evars\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003e\u003ca\u003eRule\u003c/a\u003e\u003c/code\u003e: returns the list of variables in\n left- and right-hand sides.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003evars $ Rule {lhs = Fun 'g' [Var 3, Fun 'f' [Var 1, Var 2, Var 3]], rhs = Fun 'g' [Var 4, Var 3]}\n\u003c/code\u003e\u003c/strong\u003e[3,1,2,3,4,3]\n\u003c/pre\u003e",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "vars",
          "package": "term-rewriting",
          "signature": "Rule f v -\u003e [v]",
          "source": "src/Data-Rewriting-Rule-Ops.html#vars",
          "type": "function"
        },
        "index": {
          "description": "Lifting of vars to Rule returns the list of variables in left and right-hand sides vars Rule lhs Fun Var Fun Var Var Var rhs Fun Var Var",
          "hierarchy": "Data Rewriting Rule Ops",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "vars",
          "normalized": "Rule a b-\u003e[b]",
          "package": "term-rewriting",
          "signature": "Rule f v-\u003e[v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Ops.html#v:vars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifference List version of \u003ccode\u003e\u003ca\u003evars\u003c/a\u003e\u003c/code\u003e.\n We have \u003ccode\u003evarsDL r vs = vars r ++ vs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "varsDL",
          "package": "term-rewriting",
          "signature": "Rule f v -\u003e [v] -\u003e [v]",
          "source": "src/Data-Rewriting-Rule-Ops.html#varsDL",
          "type": "function"
        },
        "index": {
          "description": "Difference List version of vars We have varsDL vs vars vs",
          "hierarchy": "Data Rewriting Rule Ops",
          "module": "Data.Rewriting.Rule.Ops",
          "name": "varsDL",
          "normalized": "Rule a b-\u003e[b]-\u003e[b]",
          "package": "term-rewriting",
          "partial": "DL",
          "signature": "Rule f v-\u003e[v]-\u003e[v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Ops.html#v:varsDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Rule.Pretty",
          "name": "Pretty",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Rule-Pretty.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Rewriting Rule Pretty",
          "module": "Data.Rewriting.Rule.Pretty",
          "name": "Pretty",
          "package": "term-rewriting",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Rule.Pretty",
          "name": "prettyRule",
          "package": "term-rewriting",
          "signature": "Doc -\u003e (f -\u003e Doc) -\u003e (v -\u003e Doc) -\u003e Rule f v -\u003e Doc",
          "source": "src/Data-Rewriting-Rule-Pretty.html#prettyRule",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Rule Pretty",
          "module": "Data.Rewriting.Rule.Pretty",
          "name": "prettyRule",
          "normalized": "Doc-\u003e(a-\u003eDoc)-\u003e(b-\u003eDoc)-\u003eRule a b-\u003eDoc",
          "package": "term-rewriting",
          "partial": "Rule",
          "signature": "Doc-\u003e(f-\u003eDoc)-\u003e(v-\u003eDoc)-\u003eRule f v-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Pretty.html#v:prettyRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Rule.Type",
          "name": "Type",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Rule-Type.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Rewriting Rule Type",
          "module": "Data.Rewriting.Rule.Type",
          "name": "Type",
          "package": "term-rewriting",
          "partial": "Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Type.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRewrite rule with left-hand side and right-hand side.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rule.Type",
          "name": "Rule",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Rule-Type.html#Rule",
          "type": "data"
        },
        "index": {
          "description": "Rewrite rule with left-hand side and right-hand side",
          "hierarchy": "Data Rewriting Rule Type",
          "module": "Data.Rewriting.Rule.Type",
          "name": "Rule",
          "package": "term-rewriting",
          "partial": "Rule",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Type.html#t:Rule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Rewriting.Rule.Type\",\"Data.Rewriting.Rule\"]",
          "name": "Rule",
          "package": "term-rewriting",
          "signature": "Rule",
          "source": "src/Data-Rewriting-Rule-Type.html#Rule",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Type.html#v:Rule\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule.html#v:Rule\"]"
        },
        "index": {
          "hierarchy": "Data Rewriting Rule Type",
          "module": "Data.Rewriting.Rule.Type",
          "name": "Rule",
          "package": "term-rewriting",
          "partial": "Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Type.html#v:Rule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Rewriting.Rule.Type\",\"Data.Rewriting.Rule\"]",
          "name": "lhs",
          "package": "term-rewriting",
          "signature": "Term f v",
          "source": "src/Data-Rewriting-Rule-Type.html#Rule",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Type.html#v:lhs\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule.html#v:lhs\"]"
        },
        "index": {
          "hierarchy": "Data Rewriting Rule Type",
          "module": "Data.Rewriting.Rule.Type",
          "name": "lhs",
          "package": "term-rewriting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Type.html#v:lhs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.Rewriting.Rule.Type\",\"Data.Rewriting.Rule\"]",
          "name": "rhs",
          "package": "term-rewriting",
          "signature": "Term f v",
          "source": "src/Data-Rewriting-Rule-Type.html#Rule",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Type.html#v:rhs\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule.html#v:rhs\"]"
        },
        "index": {
          "hierarchy": "Data Rewriting Rule Type",
          "module": "Data.Rewriting.Rule.Type",
          "name": "rhs",
          "package": "term-rewriting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule-Type.html#v:rhs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Rule",
          "name": "Rule",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Rule.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Rewriting Rule",
          "module": "Data.Rewriting.Rule",
          "name": "Rule",
          "package": "term-rewriting",
          "partial": "Rule",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRewrite rule with left-hand side and right-hand side.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rule",
          "name": "Rule",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Rule-Type.html#Rule",
          "type": "data"
        },
        "index": {
          "description": "Rewrite rule with left-hand side and right-hand side",
          "hierarchy": "Data Rewriting Rule",
          "module": "Data.Rewriting.Rule",
          "name": "Rule",
          "package": "term-rewriting",
          "partial": "Rule",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rule.html#t:Rule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Rules.Ops",
          "name": "Ops",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Rules-Ops.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Rewriting Rules Ops",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "Ops",
          "package": "term-rewriting",
          "partial": "Ops",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Ops.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifting of Term.\u003ccode\u003e\u003ca\u003efuns\u003c/a\u003e\u003c/code\u003e to list of rules.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "funs",
          "package": "term-rewriting",
          "signature": "[Rule f v] -\u003e [f]",
          "source": "src/Data-Rewriting-Rules-Ops.html#funs",
          "type": "function"
        },
        "index": {
          "description": "Lifting of Term funs to list of rules",
          "hierarchy": "Data Rewriting Rules Ops",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "funs",
          "normalized": "[Rule a b]-\u003e[a]",
          "package": "term-rewriting",
          "signature": "[Rule f v]-\u003e[f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Ops.html#v:funs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifference List version of \u003ccode\u003e\u003ca\u003efuns\u003c/a\u003e\u003c/code\u003e.\n We have \u003ccode\u003efunsDL r vs = funs r ++ vs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "funsDL",
          "package": "term-rewriting",
          "signature": "[Rule f v] -\u003e [f] -\u003e [f]",
          "source": "src/Data-Rewriting-Rules-Ops.html#funsDL",
          "type": "function"
        },
        "index": {
          "description": "Difference List version of funs We have funsDL vs funs vs",
          "hierarchy": "Data Rewriting Rules Ops",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "funsDL",
          "normalized": "[Rule a b]-\u003e[a]-\u003e[a]",
          "package": "term-rewriting",
          "partial": "DL",
          "signature": "[Rule f v]-\u003e[f]-\u003e[f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Ops.html#v:funsDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff any of the given rules satisfy \u003ccode\u003e\u003ca\u003eisCollapsing\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "isCollapsing",
          "package": "term-rewriting",
          "signature": "[Rule f v] -\u003e Bool",
          "source": "src/Data-Rewriting-Rules-Ops.html#isCollapsing",
          "type": "function"
        },
        "index": {
          "description": "Returns True iff any of the given rules satisfy isCollapsing",
          "hierarchy": "Data Rewriting Rules Ops",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "isCollapsing",
          "normalized": "[Rule a b]-\u003eBool",
          "package": "term-rewriting",
          "partial": "Collapsing",
          "signature": "[Rule f v]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Ops.html#v:isCollapsing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff any of the given rules satisfy \u003ccode\u003e\u003ca\u003eisCreating\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "isCreating",
          "package": "term-rewriting",
          "signature": "[Rule f v] -\u003e Bool",
          "source": "src/Data-Rewriting-Rules-Ops.html#isCreating",
          "type": "function"
        },
        "index": {
          "description": "Returns True iff any of the given rules satisfy isCreating",
          "hierarchy": "Data Rewriting Rules Ops",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "isCreating",
          "normalized": "[Rule a b]-\u003eBool",
          "package": "term-rewriting",
          "partial": "Creating",
          "signature": "[Rule f v]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Ops.html#v:isCreating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff any of the given rules satisfy \u003ccode\u003e\u003ca\u003eisDuplicating\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "isDuplicating",
          "package": "term-rewriting",
          "signature": "[Rule f v] -\u003e Bool",
          "source": "src/Data-Rewriting-Rules-Ops.html#isDuplicating",
          "type": "function"
        },
        "index": {
          "description": "Returns True iff any of the given rules satisfy isDuplicating",
          "hierarchy": "Data Rewriting Rules Ops",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "isDuplicating",
          "normalized": "[Rule a b]-\u003eBool",
          "package": "term-rewriting",
          "partial": "Duplicating",
          "signature": "[Rule f v]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Ops.html#v:isDuplicating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff any of the given rules satisfy \u003ccode\u003e\u003ca\u003eisErasing\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "isErasing",
          "package": "term-rewriting",
          "signature": "[Rule f v] -\u003e Bool",
          "source": "src/Data-Rewriting-Rules-Ops.html#isErasing",
          "type": "function"
        },
        "index": {
          "description": "Returns True iff any of the given rules satisfy isErasing",
          "hierarchy": "Data Rewriting Rules Ops",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "isErasing",
          "normalized": "[Rule a b]-\u003eBool",
          "package": "term-rewriting",
          "partial": "Erasing",
          "signature": "[Rule f v]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Ops.html#v:isErasing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff all given rules satisfy \u003ccode\u003e\u003ca\u003eisGroundLinear\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "isGround",
          "package": "term-rewriting",
          "signature": "[Rule f v] -\u003e Bool",
          "source": "src/Data-Rewriting-Rules-Ops.html#isGround",
          "type": "function"
        },
        "index": {
          "description": "Returns True iff all given rules satisfy isGroundLinear",
          "hierarchy": "Data Rewriting Rules Ops",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "isGround",
          "normalized": "[Rule a b]-\u003eBool",
          "package": "term-rewriting",
          "partial": "Ground",
          "signature": "[Rule f v]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Ops.html#v:isGround"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff all given rules satisfy \u003ccode\u003e\u003ca\u003eisLeftGround\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "isLeftGround",
          "package": "term-rewriting",
          "signature": "[Rule f v] -\u003e Bool",
          "source": "src/Data-Rewriting-Rules-Ops.html#isLeftGround",
          "type": "function"
        },
        "index": {
          "description": "Returns True iff all given rules satisfy isLeftGround",
          "hierarchy": "Data Rewriting Rules Ops",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "isLeftGround",
          "normalized": "[Rule a b]-\u003eBool",
          "package": "term-rewriting",
          "partial": "Left Ground",
          "signature": "[Rule f v]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Ops.html#v:isLeftGround"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff all given rules satisfy \u003ccode\u003e\u003ca\u003eisLeftLinear\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "isLeftLinear",
          "package": "term-rewriting",
          "signature": "[Rule f v] -\u003e Bool",
          "source": "src/Data-Rewriting-Rules-Ops.html#isLeftLinear",
          "type": "function"
        },
        "index": {
          "description": "Returns True iff all given rules satisfy isLeftLinear",
          "hierarchy": "Data Rewriting Rules Ops",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "isLeftLinear",
          "normalized": "[Rule a b]-\u003eBool",
          "package": "term-rewriting",
          "partial": "Left Linear",
          "signature": "[Rule f v]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Ops.html#v:isLeftLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff all given rules satisfy \u003ccode\u003e\u003ca\u003eisLinear\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "isLinear",
          "package": "term-rewriting",
          "signature": "[Rule f v] -\u003e Bool",
          "source": "src/Data-Rewriting-Rules-Ops.html#isLinear",
          "type": "function"
        },
        "index": {
          "description": "Returns True iff all given rules satisfy isLinear",
          "hierarchy": "Data Rewriting Rules Ops",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "isLinear",
          "normalized": "[Rule a b]-\u003eBool",
          "package": "term-rewriting",
          "partial": "Linear",
          "signature": "[Rule f v]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Ops.html#v:isLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff all given rules satisfy \u003ccode\u003e\u003ca\u003eisRightGround\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "isRightGround",
          "package": "term-rewriting",
          "signature": "[Rule f v] -\u003e Bool",
          "source": "src/Data-Rewriting-Rules-Ops.html#isRightGround",
          "type": "function"
        },
        "index": {
          "description": "Returns True iff all given rules satisfy isRightGround",
          "hierarchy": "Data Rewriting Rules Ops",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "isRightGround",
          "normalized": "[Rule a b]-\u003eBool",
          "package": "term-rewriting",
          "partial": "Right Ground",
          "signature": "[Rule f v]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Ops.html#v:isRightGround"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff all given rules satisfy \u003ccode\u003e\u003ca\u003eisRightLinear\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "isRightLinear",
          "package": "term-rewriting",
          "signature": "[Rule f v] -\u003e Bool",
          "source": "src/Data-Rewriting-Rules-Ops.html#isRightLinear",
          "type": "function"
        },
        "index": {
          "description": "Returns True iff all given rules satisfy isRightLinear",
          "hierarchy": "Data Rewriting Rules Ops",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "isRightLinear",
          "normalized": "[Rule a b]-\u003eBool",
          "package": "term-rewriting",
          "partial": "Right Linear",
          "signature": "[Rule f v]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Ops.html#v:isRightLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff all rules satisfy \u003ccode\u003e\u003ca\u003eisValid\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "isValid",
          "package": "term-rewriting",
          "signature": "[Rule f v] -\u003e Bool",
          "source": "src/Data-Rewriting-Rules-Ops.html#isValid",
          "type": "function"
        },
        "index": {
          "description": "Returns True iff all rules satisfy isValid",
          "hierarchy": "Data Rewriting Rules Ops",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "isValid",
          "normalized": "[Rule a b]-\u003eBool",
          "package": "term-rewriting",
          "partial": "Valid",
          "signature": "[Rule f v]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Ops.html#v:isValid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elhss rs\u003c/code\u003e returns the list of left-hand sides of \u003ccode\u003ers\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "lhss",
          "package": "term-rewriting",
          "signature": "[Rule f v] -\u003e [Term f v]",
          "source": "src/Data-Rewriting-Rules-Ops.html#lhss",
          "type": "function"
        },
        "index": {
          "description": "lhss rs returns the list of left-hand sides of rs",
          "hierarchy": "Data Rewriting Rules Ops",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "lhss",
          "normalized": "[Rule a b]-\u003e[Term a b]",
          "package": "term-rewriting",
          "signature": "[Rule f v]-\u003e[Term f v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Ops.html#v:lhss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestrict the rules to those only using function symbols satisfying\n the given predicate.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "restrictFuns",
          "package": "term-rewriting",
          "signature": "(f -\u003e Bool) -\u003e [Rule f v] -\u003e [Rule f v]",
          "source": "src/Data-Rewriting-Rules-Ops.html#restrictFuns",
          "type": "function"
        },
        "index": {
          "description": "Restrict the rules to those only using function symbols satisfying the given predicate",
          "hierarchy": "Data Rewriting Rules Ops",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "restrictFuns",
          "normalized": "(a-\u003eBool)-\u003e[Rule a b]-\u003e[Rule a b]",
          "package": "term-rewriting",
          "partial": "Funs",
          "signature": "(f-\u003eBool)-\u003e[Rule f v]-\u003e[Rule f v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Ops.html#v:restrictFuns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003elhss rs\u003c/code\u003e returns the list of right-hand sides of \u003ccode\u003ers\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "rhss",
          "package": "term-rewriting",
          "signature": "[Rule f v] -\u003e [Term f v]",
          "source": "src/Data-Rewriting-Rules-Ops.html#rhss",
          "type": "function"
        },
        "index": {
          "description": "lhss rs returns the list of right-hand sides of rs",
          "hierarchy": "Data Rewriting Rules Ops",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "rhss",
          "normalized": "[Rule a b]-\u003e[Term a b]",
          "package": "term-rewriting",
          "signature": "[Rule f v]-\u003e[Term f v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Ops.html#v:rhss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifting of Term.\u003ccode\u003e\u003ca\u003evars\u003c/a\u003e\u003c/code\u003e to list of rules.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "vars",
          "package": "term-rewriting",
          "signature": "[Rule f v] -\u003e [v]",
          "source": "src/Data-Rewriting-Rules-Ops.html#vars",
          "type": "function"
        },
        "index": {
          "description": "Lifting of Term vars to list of rules",
          "hierarchy": "Data Rewriting Rules Ops",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "vars",
          "normalized": "[Rule a b]-\u003e[b]",
          "package": "term-rewriting",
          "signature": "[Rule f v]-\u003e[v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Ops.html#v:vars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifference List version of \u003ccode\u003e\u003ca\u003evars\u003c/a\u003e\u003c/code\u003e.\n We have \u003ccode\u003evarsDL r vs = vars r ++ vs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "varsDL",
          "package": "term-rewriting",
          "signature": "[Rule f v] -\u003e [v] -\u003e [v]",
          "source": "src/Data-Rewriting-Rules-Ops.html#varsDL",
          "type": "function"
        },
        "index": {
          "description": "Difference List version of vars We have varsDL vs vars vs",
          "hierarchy": "Data Rewriting Rules Ops",
          "module": "Data.Rewriting.Rules.Ops",
          "name": "varsDL",
          "normalized": "[Rule a b]-\u003e[b]-\u003e[b]",
          "package": "term-rewriting",
          "partial": "DL",
          "signature": "[Rule f v]-\u003e[v]-\u003e[v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Ops.html#v:varsDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple rewriting.\n\u003c/p\u003e\u003cp\u003eNote: The rules are assumed to be non-creating, i.e., variables on the\n rhs should also occur on the lhs. Rules violating this constraint\n will have no effect.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Rewriting.Rules.Rewrite",
          "name": "Rewrite",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Rules-Rewrite.html",
          "type": "module"
        },
        "index": {
          "description": "Simple rewriting Note The rules are assumed to be non-creating i.e variables on the rhs should also occur on the lhs Rules violating this constraint will have no effect",
          "hierarchy": "Data Rewriting Rules Rewrite",
          "module": "Data.Rewriting.Rules.Rewrite",
          "name": "Rewrite",
          "package": "term-rewriting",
          "partial": "Rewrite",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Rewrite.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA reduct. It contains the resulting term, the position that the term\n was rewritten at, and the applied rule.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rules.Rewrite",
          "name": "Reduct",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Rules-Rewrite.html#Reduct",
          "type": "data"
        },
        "index": {
          "description": "reduct It contains the resulting term the position that the term was rewritten at and the applied rule",
          "hierarchy": "Data Rewriting Rules Rewrite",
          "module": "Data.Rewriting.Rules.Rewrite",
          "name": "Reduct",
          "package": "term-rewriting",
          "partial": "Reduct",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Rewrite.html#t:Reduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA rewrite strategy.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rules.Rewrite",
          "name": "Strategy",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Rules-Rewrite.html#Strategy",
          "type": "type"
        },
        "index": {
          "description": "rewrite strategy",
          "hierarchy": "Data Rewriting Rules Rewrite",
          "module": "Data.Rewriting.Rules.Rewrite",
          "name": "Strategy",
          "package": "term-rewriting",
          "partial": "Strategy",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Rewrite.html#t:Strategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Rules.Rewrite",
          "name": "Reduct",
          "package": "term-rewriting",
          "signature": "Reduct",
          "source": "src/Data-Rewriting-Rules-Rewrite.html#Reduct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Rules Rewrite",
          "module": "Data.Rewriting.Rules.Rewrite",
          "name": "Reduct",
          "package": "term-rewriting",
          "partial": "Reduct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Rewrite.html#v:Reduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFull rewriting: Apply rules anywhere in the term.\n\u003c/p\u003e\u003cp\u003eReducts are returned in pre-order: the first is a leftmost, outermost redex.\n\u003c/p\u003e",
          "module": "[\"Data.Rewriting.Rules.Rewrite\",\"Data.Rewriting.Rules\"]",
          "name": "fullRewrite",
          "package": "term-rewriting",
          "signature": "[Rule f v'] -\u003e Strategy f v v'",
          "source": "src/Data-Rewriting-Rules-Rewrite.html#fullRewrite",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Rewrite.html#v:fullRewrite\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules.html#v:fullRewrite\"]"
        },
        "index": {
          "description": "Full rewriting Apply rules anywhere in the term Reducts are returned in pre-order the first is leftmost outermost redex",
          "hierarchy": "Data Rewriting Rules Rewrite",
          "module": "Data.Rewriting.Rules.Rewrite",
          "name": "fullRewrite",
          "normalized": "[Rule a b]-\u003eStrategy a c b",
          "package": "term-rewriting",
          "partial": "Rewrite",
          "signature": "[Rule f v']-\u003eStrategy f v v'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Rewrite.html#v:fullRewrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInner rewriting: Apply rules at innermost redexes.\n\u003c/p\u003e\u003cp\u003eReducts are returned in left to right order.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rules.Rewrite",
          "name": "innerRewrite",
          "package": "term-rewriting",
          "signature": "[Rule f v'] -\u003e Strategy f v v'",
          "source": "src/Data-Rewriting-Rules-Rewrite.html#innerRewrite",
          "type": "function"
        },
        "index": {
          "description": "Inner rewriting Apply rules at innermost redexes Reducts are returned in left to right order",
          "hierarchy": "Data Rewriting Rules Rewrite",
          "module": "Data.Rewriting.Rules.Rewrite",
          "name": "innerRewrite",
          "normalized": "[Rule a b]-\u003eStrategy a c b",
          "package": "term-rewriting",
          "partial": "Rewrite",
          "signature": "[Rule f v']-\u003eStrategy f v v'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Rewrite.html#v:innerRewrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a list of contexts of a list. Each returned element is an element\n index (starting from 0), a function that replaces the list element by a\n new one, and the original element.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rules.Rewrite",
          "name": "listContexts",
          "package": "term-rewriting",
          "signature": "[a] -\u003e [(Int, a -\u003e [a], a)]",
          "source": "src/Data-Rewriting-Rules-Rewrite.html#listContexts",
          "type": "function"
        },
        "index": {
          "description": "Return list of contexts of list Each returned element is an element index starting from function that replaces the list element by new one and the original element",
          "hierarchy": "Data Rewriting Rules Rewrite",
          "module": "Data.Rewriting.Rules.Rewrite",
          "name": "listContexts",
          "normalized": "[a]-\u003e[(Int,a-\u003e[a],a)]",
          "package": "term-rewriting",
          "partial": "Contexts",
          "signature": "[a]-\u003e[(Int,a-\u003e[a],a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Rewrite.html#v:listContexts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNested rewriting: Apply a rewriting strategy to all arguments of a\n function symbol, left to right. For variables, the result will be empty.\n\u003c/p\u003e\u003cp\u003eThis is another building block for rewriting strategies.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rules.Rewrite",
          "name": "nested",
          "package": "term-rewriting",
          "signature": "Strategy f v v' -\u003e Strategy f v v'",
          "source": "src/Data-Rewriting-Rules-Rewrite.html#nested",
          "type": "function"
        },
        "index": {
          "description": "Nested rewriting Apply rewriting strategy to all arguments of function symbol left to right For variables the result will be empty This is another building block for rewriting strategies",
          "hierarchy": "Data Rewriting Rules Rewrite",
          "module": "Data.Rewriting.Rules.Rewrite",
          "name": "nested",
          "normalized": "Strategy a b c-\u003eStrategy a b c",
          "package": "term-rewriting",
          "signature": "Strategy f v v'-\u003eStrategy f v v'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Rewrite.html#v:nested"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOuter rewriting: Apply rules at outermost redexes.\n\u003c/p\u003e\u003cp\u003eReducts are returned in left to right order.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rules.Rewrite",
          "name": "outerRewrite",
          "package": "term-rewriting",
          "signature": "[Rule f v'] -\u003e Strategy f v v'",
          "source": "src/Data-Rewriting-Rules-Rewrite.html#outerRewrite",
          "type": "function"
        },
        "index": {
          "description": "Outer rewriting Apply rules at outermost redexes Reducts are returned in left to right order",
          "hierarchy": "Data Rewriting Rules Rewrite",
          "module": "Data.Rewriting.Rules.Rewrite",
          "name": "outerRewrite",
          "normalized": "[Rule a b]-\u003eStrategy a c b",
          "package": "term-rewriting",
          "partial": "Rewrite",
          "signature": "[Rule f v']-\u003eStrategy f v v'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Rewrite.html#v:outerRewrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Rules.Rewrite",
          "name": "pos",
          "package": "term-rewriting",
          "signature": "Pos",
          "source": "src/Data-Rewriting-Rules-Rewrite.html#Reduct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Rules Rewrite",
          "module": "Data.Rewriting.Rules.Rewrite",
          "name": "pos",
          "package": "term-rewriting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Rewrite.html#v:pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Rules.Rewrite",
          "name": "result",
          "package": "term-rewriting",
          "signature": "Term f v",
          "source": "src/Data-Rewriting-Rules-Rewrite.html#Reduct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Rules Rewrite",
          "module": "Data.Rewriting.Rules.Rewrite",
          "name": "result",
          "package": "term-rewriting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Rewrite.html#v:result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoot rewriting: Apply rules only at the root of the term.\n\u003c/p\u003e\u003cp\u003eThis is mainly useful as a building block for various rewriting strategies.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Rules.Rewrite",
          "name": "rootRewrite",
          "package": "term-rewriting",
          "signature": "[Rule f v'] -\u003e Strategy f v v'",
          "source": "src/Data-Rewriting-Rules-Rewrite.html#rootRewrite",
          "type": "function"
        },
        "index": {
          "description": "Root rewriting Apply rules only at the root of the term This is mainly useful as building block for various rewriting strategies",
          "hierarchy": "Data Rewriting Rules Rewrite",
          "module": "Data.Rewriting.Rules.Rewrite",
          "name": "rootRewrite",
          "normalized": "[Rule a b]-\u003eStrategy a c b",
          "package": "term-rewriting",
          "partial": "Rewrite",
          "signature": "[Rule f v']-\u003eStrategy f v v'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Rewrite.html#v:rootRewrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Rules.Rewrite",
          "name": "rule",
          "package": "term-rewriting",
          "signature": "Rule f v'",
          "source": "src/Data-Rewriting-Rules-Rewrite.html#Reduct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Rules Rewrite",
          "module": "Data.Rewriting.Rules.Rewrite",
          "name": "rule",
          "package": "term-rewriting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Rewrite.html#v:rule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Rules.Rewrite",
          "name": "subst",
          "package": "term-rewriting",
          "signature": "GSubst v' f v",
          "source": "src/Data-Rewriting-Rules-Rewrite.html#Reduct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Rules Rewrite",
          "module": "Data.Rewriting.Rules.Rewrite",
          "name": "subst",
          "package": "term-rewriting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules-Rewrite.html#v:subst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOperations on lists of rules.\n\u003c/p\u003e\u003cp\u003eSee also \u003ca\u003eData.Rewriting.CriticalPair\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Rewriting.Rules",
          "name": "Rules",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Rules.html",
          "type": "module"
        },
        "index": {
          "description": "Operations on lists of rules See also Data.Rewriting.CriticalPair",
          "hierarchy": "Data Rewriting Rules",
          "module": "Data.Rewriting.Rules",
          "name": "Rules",
          "package": "term-rewriting",
          "partial": "Rules",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Rules.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Substitution.Match",
          "name": "Match",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Substitution-Match.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Rewriting Substitution Match",
          "module": "Data.Rewriting.Substitution.Match",
          "name": "Match",
          "package": "term-rewriting",
          "partial": "Match",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution-Match.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch two terms. If matching succeeds, return the resulting subtitution.\n We have the following property:\n\u003c/p\u003e\u003cpre\u003e match t u == Just s   ==\u003e   apply s t == gapply s t == u\n\u003c/pre\u003e",
          "module": "Data.Rewriting.Substitution.Match",
          "name": "match",
          "package": "term-rewriting",
          "signature": "Term f v -\u003e Term f v' -\u003e Maybe (GSubst v f v')",
          "source": "src/Data-Rewriting-Substitution-Match.html#match",
          "type": "function"
        },
        "index": {
          "description": "Match two terms If matching succeeds return the resulting subtitution We have the following property match Just apply gapply",
          "hierarchy": "Data Rewriting Substitution Match",
          "module": "Data.Rewriting.Substitution.Match",
          "name": "match",
          "normalized": "Term a b-\u003eTerm a c-\u003eMaybe(GSubst b a c)",
          "package": "term-rewriting",
          "signature": "Term f v-\u003eTerm f v'-\u003eMaybe(GSubst v f v')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution-Match.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Substitution.Ops",
          "name": "Ops",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Substitution-Ops.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Rewriting Substitution Ops",
          "module": "Data.Rewriting.Substitution.Ops",
          "name": "Ops",
          "package": "term-rewriting",
          "partial": "Ops",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution-Ops.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a substitution, assuming that it's the identity on variables not\n mentionend in the substitution.\n\u003c/p\u003e",
          "module": "[\"Data.Rewriting.Substitution.Ops\",\"Data.Rewriting.Substitution\"]",
          "name": "apply",
          "package": "term-rewriting",
          "signature": "Subst f v -\u003e Term f v -\u003e Term f v",
          "source": "src/Data-Rewriting-Substitution-Ops.html#apply",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution-Ops.html#v:apply\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution.html#v:apply\"]"
        },
        "index": {
          "description": "Apply substitution assuming that it the identity on variables not mentionend in the substitution",
          "hierarchy": "Data Rewriting Substitution Ops",
          "module": "Data.Rewriting.Substitution.Ops",
          "name": "apply",
          "normalized": "Subst a b-\u003eTerm a b-\u003eTerm a b",
          "package": "term-rewriting",
          "signature": "Subst f v-\u003eTerm f v-\u003eTerm f v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution-Ops.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose substitutions. We have\n\u003c/p\u003e\u003cpre\u003e (s1 `compose` s2) `apply` t = s1 `apply` (s2 `apply` t).\n\u003c/pre\u003e",
          "module": "[\"Data.Rewriting.Substitution.Ops\",\"Data.Rewriting.Substitution\"]",
          "name": "compose",
          "package": "term-rewriting",
          "signature": "Subst f v -\u003e Subst f v -\u003e Subst f v",
          "source": "src/Data-Rewriting-Substitution-Ops.html#compose",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution-Ops.html#v:compose\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution.html#v:compose\"]"
        },
        "index": {
          "description": "Compose substitutions We have s1 compose s2 apply s1 apply s2 apply",
          "hierarchy": "Data Rewriting Substitution Ops",
          "module": "Data.Rewriting.Substitution.Ops",
          "name": "compose",
          "normalized": "Subst a b-\u003eSubst a b-\u003eSubst a b",
          "package": "term-rewriting",
          "signature": "Subst f v-\u003eSubst f v-\u003eSubst f v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution-Ops.html#v:compose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a substitution, assuming that it's total. If the term contains\n a variable not defined by the substitution, return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.Rewriting.Substitution.Ops\",\"Data.Rewriting.Substitution\"]",
          "name": "gApply",
          "package": "term-rewriting",
          "signature": "GSubst v f v' -\u003e Term f v -\u003e Maybe (Term f v')",
          "source": "src/Data-Rewriting-Substitution-Ops.html#gApply",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution-Ops.html#v:gApply\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution.html#v:gApply\"]"
        },
        "index": {
          "description": "Apply substitution assuming that it total If the term contains variable not defined by the substitution return Nothing",
          "hierarchy": "Data Rewriting Substitution Ops",
          "module": "Data.Rewriting.Substitution.Ops",
          "name": "gApply",
          "normalized": "GSubst a b c-\u003eTerm b a-\u003eMaybe(Term b c)",
          "package": "term-rewriting",
          "partial": "Apply",
          "signature": "GSubst v f v'-\u003eTerm f v-\u003eMaybe(Term f v')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution-Ops.html#v:gApply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two substitutions. The operation fails if some variable is\n different terms by the substitutions.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Substitution.Ops",
          "name": "merge",
          "package": "term-rewriting",
          "signature": "GSubst v f v' -\u003e GSubst v f v' -\u003e Maybe (GSubst v f v')",
          "source": "src/Data-Rewriting-Substitution-Ops.html#merge",
          "type": "function"
        },
        "index": {
          "description": "Merge two substitutions The operation fails if some variable is different terms by the substitutions",
          "hierarchy": "Data Rewriting Substitution Ops",
          "module": "Data.Rewriting.Substitution.Ops",
          "name": "merge",
          "normalized": "GSubst a b c-\u003eGSubst a b c-\u003eMaybe(GSubst a b c)",
          "package": "term-rewriting",
          "signature": "GSubst v f v'-\u003eGSubst v f v'-\u003eMaybe(GSubst v f v')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution-Ops.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Substitution.Parse",
          "name": "Parse",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Substitution-Parse.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Rewriting Substitution Parse",
          "module": "Data.Rewriting.Substitution.Parse",
          "name": "Parse",
          "package": "term-rewriting",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Substitution.Parse",
          "name": "fromString",
          "package": "term-rewriting",
          "signature": "[String] -\u003e String -\u003e Either ParseError (Subst String String)",
          "source": "src/Data-Rewriting-Substitution-Parse.html#fromString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Substitution Parse",
          "module": "Data.Rewriting.Substitution.Parse",
          "name": "fromString",
          "normalized": "[String]-\u003eString-\u003eEither ParseError(Subst String String)",
          "package": "term-rewriting",
          "partial": "String",
          "signature": "[String]-\u003eString-\u003eEither ParseError(Subst String String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution-Parse.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Substitution.Parse",
          "name": "parse",
          "package": "term-rewriting",
          "signature": "Parsec String u f -\u003e Parsec String u v -\u003e Parsec String u (Subst f v)",
          "source": "src/Data-Rewriting-Substitution-Parse.html#parse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Substitution Parse",
          "module": "Data.Rewriting.Substitution.Parse",
          "name": "parse",
          "normalized": "Parsec String a b-\u003eParsec String a c-\u003eParsec String a(Subst b c)",
          "package": "term-rewriting",
          "signature": "Parsec String u f-\u003eParsec String u v-\u003eParsec String u(Subst f v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution-Parse.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Substitution.Parse",
          "name": "parseIO",
          "package": "term-rewriting",
          "signature": "[String] -\u003e String -\u003e IO (Subst String String)",
          "source": "src/Data-Rewriting-Substitution-Parse.html#parseIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Substitution Parse",
          "module": "Data.Rewriting.Substitution.Parse",
          "name": "parseIO",
          "normalized": "[String]-\u003eString-\u003eIO(Subst String String)",
          "package": "term-rewriting",
          "partial": "IO",
          "signature": "[String]-\u003eString-\u003eIO(Subst String String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution-Parse.html#v:parseIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Substitution.Pretty",
          "name": "Pretty",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Substitution-Pretty.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Rewriting Substitution Pretty",
          "module": "Data.Rewriting.Substitution.Pretty",
          "name": "Pretty",
          "package": "term-rewriting",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Substitution.Pretty",
          "name": "prettySubst",
          "package": "term-rewriting",
          "signature": "(f -\u003e Doc) -\u003e (v -\u003e Doc) -\u003e Subst f v -\u003e Doc",
          "source": "src/Data-Rewriting-Substitution-Pretty.html#prettySubst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Substitution Pretty",
          "module": "Data.Rewriting.Substitution.Pretty",
          "name": "prettySubst",
          "normalized": "(a-\u003eDoc)-\u003e(b-\u003eDoc)-\u003eSubst a b-\u003eDoc",
          "package": "term-rewriting",
          "partial": "Subst",
          "signature": "(f-\u003eDoc)-\u003e(v-\u003eDoc)-\u003eSubst f v-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution-Pretty.html#v:prettySubst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Substitution.Type",
          "name": "Type",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Substitution-Type.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Rewriting Substitution Type",
          "module": "Data.Rewriting.Substitution.Type",
          "name": "Type",
          "package": "term-rewriting",
          "partial": "Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution-Type.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generalised? substitution: a finite, partial map from variables\n to terms with a different variable type.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Substitution.Type",
          "name": "GSubst",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Substitution-Type.html#GSubst",
          "type": "data"
        },
        "index": {
          "description": "generalised substitution finite partial map from variables to terms with different variable type",
          "hierarchy": "Data Rewriting Substitution Type",
          "module": "Data.Rewriting.Substitution.Type",
          "name": "GSubst",
          "package": "term-rewriting",
          "partial": "GSubst",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution-Type.html#t:GSubst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA substitution, mapping variables to terms. Substitutions are\n equal to the identity almost everywhere.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Substitution.Type",
          "name": "Subst",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Substitution-Type.html#Subst",
          "type": "type"
        },
        "index": {
          "description": "substitution mapping variables to terms Substitutions are equal to the identity almost everywhere",
          "hierarchy": "Data Rewriting Substitution Type",
          "module": "Data.Rewriting.Substitution.Type",
          "name": "Subst",
          "package": "term-rewriting",
          "partial": "Subst",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution-Type.html#t:Subst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Substitution.Type",
          "name": "fromMap",
          "package": "term-rewriting",
          "signature": "Map v (Term f v') -\u003e GSubst v f v'",
          "source": "src/Data-Rewriting-Substitution-Type.html#fromMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Substitution Type",
          "module": "Data.Rewriting.Substitution.Type",
          "name": "fromMap",
          "normalized": "Map a(Term b c)-\u003eGSubst a b c",
          "package": "term-rewriting",
          "partial": "Map",
          "signature": "Map v(Term f v')-\u003eGSubst v f v'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution-Type.html#v:fromMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Substitution.Type",
          "name": "toMap",
          "package": "term-rewriting",
          "signature": "GSubst v f v' -\u003e Map v (Term f v')",
          "source": "src/Data-Rewriting-Substitution-Type.html#toMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Rewriting Substitution Type",
          "module": "Data.Rewriting.Substitution.Type",
          "name": "toMap",
          "normalized": "GSubst a b c-\u003eMap a(Term b c)",
          "package": "term-rewriting",
          "partial": "Map",
          "signature": "GSubst v f v'-\u003eMap v(Term f v')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution-Type.html#v:toMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Substitution.Unify",
          "name": "Unify",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Substitution-Unify.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Rewriting Substitution Unify",
          "module": "Data.Rewriting.Substitution.Unify",
          "name": "Unify",
          "package": "term-rewriting",
          "partial": "Unify",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution-Unify.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnify two terms. If unification succeeds, return a most general unifier\n of the given terms. We have the following property:\n\u003c/p\u003e\u003cpre\u003e unify t u == Just s   ==\u003e   apply s t == apply s u\n\u003c/pre\u003e\u003cp\u003e\u003cem\u003eO(n log(n))\u003c/em\u003e, where \u003cem\u003en\u003c/em\u003e is the apparent size of the arguments. Note that\n the apparent size of the result may be exponential due to shared subterms.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Substitution.Unify",
          "name": "unify",
          "package": "term-rewriting",
          "signature": "Term f v -\u003e Term f v -\u003e Maybe (Subst f v)",
          "source": "src/Data-Rewriting-Substitution-Unify.html#unify",
          "type": "function"
        },
        "index": {
          "description": "Unify two terms If unification succeeds return most general unifier of the given terms We have the following property unify Just apply apply log where is the apparent size of the arguments Note that the apparent size of the result may be exponential due to shared subterms",
          "hierarchy": "Data Rewriting Substitution Unify",
          "module": "Data.Rewriting.Substitution.Unify",
          "name": "unify",
          "normalized": "Term a b-\u003eTerm a b-\u003eMaybe(Subst a b)",
          "package": "term-rewriting",
          "signature": "Term f v-\u003eTerm f v-\u003eMaybe(Subst f v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution-Unify.html#v:unify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnify two terms. This is a simple implementation for testing purposes,\n and may be removed in future versions of this library.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Substitution.Unify",
          "name": "unifyRef",
          "package": "term-rewriting",
          "signature": "Term f v -\u003e Term f v -\u003e Maybe (Subst f v)",
          "source": "src/Data-Rewriting-Substitution-Unify.html#unifyRef",
          "type": "function"
        },
        "index": {
          "description": "Unify two terms This is simple implementation for testing purposes and may be removed in future versions of this library",
          "hierarchy": "Data Rewriting Substitution Unify",
          "module": "Data.Rewriting.Substitution.Unify",
          "name": "unifyRef",
          "normalized": "Term a b-\u003eTerm a b-\u003eMaybe(Subst a b)",
          "package": "term-rewriting",
          "partial": "Ref",
          "signature": "Term f v-\u003eTerm f v-\u003eMaybe(Subst f v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution-Unify.html#v:unifyRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Substitution",
          "name": "Substitution",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Substitution.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Rewriting Substitution",
          "module": "Data.Rewriting.Substitution",
          "name": "Substitution",
          "package": "term-rewriting",
          "partial": "Substitution",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generalised? substitution: a finite, partial map from variables\n to terms with a different variable type.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Substitution",
          "name": "GSubst",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Substitution-Type.html#GSubst",
          "type": "data"
        },
        "index": {
          "description": "generalised substitution finite partial map from variables to terms with different variable type",
          "hierarchy": "Data Rewriting Substitution",
          "module": "Data.Rewriting.Substitution",
          "name": "GSubst",
          "package": "term-rewriting",
          "partial": "GSubst",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution.html#t:GSubst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA substitution, mapping variables to terms. Substitutions are\n equal to the identity almost everywhere.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Substitution",
          "name": "Subst",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Substitution-Type.html#Subst",
          "type": "type"
        },
        "index": {
          "description": "substitution mapping variables to terms Substitutions are equal to the identity almost everywhere",
          "hierarchy": "Data Rewriting Substitution",
          "module": "Data.Rewriting.Substitution",
          "name": "Subst",
          "package": "term-rewriting",
          "partial": "Subst",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Substitution.html#t:Subst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Term.Ops",
          "name": "Ops",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Term-Ops.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Rewriting Term Ops",
          "module": "Data.Rewriting.Term.Ops",
          "name": "Ops",
          "package": "term-rewriting",
          "partial": "Ops",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Ops.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the list of all function symbols in the term, from left to right.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efuns (Fun 'f' [Var 3, Fun 'g' [Fun 'f' []]])\n\u003c/code\u003e\u003c/strong\u003e\"fgf\"\n\u003c/pre\u003e",
          "module": "[\"Data.Rewriting.Term.Ops\",\"Data.Rewriting.Term\"]",
          "name": "funs",
          "package": "term-rewriting",
          "signature": "Term f v -\u003e [f]",
          "source": "src/Data-Rewriting-Term-Ops.html#funs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Ops.html#v:funs\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term.html#v:funs\"]"
        },
        "index": {
          "description": "Return the list of all function symbols in the term from left to right funs Fun Var Fun Fun fgf",
          "hierarchy": "Data Rewriting Term Ops",
          "module": "Data.Rewriting.Term.Ops",
          "name": "funs",
          "normalized": "Term a b-\u003e[a]",
          "package": "term-rewriting",
          "signature": "Term f v-\u003e[f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Ops.html#v:funs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifference List version of \u003ccode\u003e\u003ca\u003efuns\u003c/a\u003e\u003c/code\u003e.\n We have \u003ccode\u003efunsDL t vs = funs t ++ vs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Term.Ops",
          "name": "funsDL",
          "package": "term-rewriting",
          "signature": "Term f v -\u003e [f] -\u003e [f]",
          "source": "src/Data-Rewriting-Term-Ops.html#funsDL",
          "type": "function"
        },
        "index": {
          "description": "Difference List version of funs We have funsDL vs funs vs",
          "hierarchy": "Data Rewriting Term Ops",
          "module": "Data.Rewriting.Term.Ops",
          "name": "funsDL",
          "normalized": "Term a b-\u003e[a]-\u003e[a]",
          "package": "term-rewriting",
          "partial": "DL",
          "signature": "Term f v-\u003e[f]-\u003e[f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Ops.html#v:funsDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the term is a function application, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Term.Ops",
          "name": "isFun",
          "package": "term-rewriting",
          "signature": "Term f v -\u003e Bool",
          "source": "src/Data-Rewriting-Term-Ops.html#isFun",
          "type": "function"
        },
        "index": {
          "description": "Return True if the term is function application False otherwise",
          "hierarchy": "Data Rewriting Term Ops",
          "module": "Data.Rewriting.Term.Ops",
          "name": "isFun",
          "normalized": "Term a b-\u003eBool",
          "package": "term-rewriting",
          "partial": "Fun",
          "signature": "Term f v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Ops.html#v:isFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether the term is a ground term, i.e., contains no variables.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Term.Ops",
          "name": "isGround",
          "package": "term-rewriting",
          "signature": "Term f v -\u003e Bool",
          "source": "src/Data-Rewriting-Term-Ops.html#isGround",
          "type": "function"
        },
        "index": {
          "description": "Check whether the term is ground term i.e contains no variables",
          "hierarchy": "Data Rewriting Term Ops",
          "module": "Data.Rewriting.Term.Ops",
          "name": "isGround",
          "normalized": "Term a b-\u003eBool",
          "package": "term-rewriting",
          "partial": "Ground",
          "signature": "Term f v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Ops.html#v:isGround"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a term is an instance of another.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Term.Ops",
          "name": "isInstanceOf",
          "package": "term-rewriting",
          "signature": "Term f v -\u003e Term f v' -\u003e Bool",
          "source": "src/Data-Rewriting-Term-Ops.html#isInstanceOf",
          "type": "function"
        },
        "index": {
          "description": "Check whether term is an instance of another",
          "hierarchy": "Data Rewriting Term Ops",
          "module": "Data.Rewriting.Term.Ops",
          "name": "isInstanceOf",
          "normalized": "Term a b-\u003eTerm a c-\u003eBool",
          "package": "term-rewriting",
          "partial": "Instance Of",
          "signature": "Term f v-\u003eTerm f v'-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Ops.html#v:isInstanceOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether the term is linear, i.e., contains each variable at most\n once.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Term.Ops",
          "name": "isLinear",
          "package": "term-rewriting",
          "signature": "Term f v -\u003e Bool",
          "source": "src/Data-Rewriting-Term-Ops.html#isLinear",
          "type": "function"
        },
        "index": {
          "description": "Check whether the term is linear i.e contains each variable at most once",
          "hierarchy": "Data Rewriting Term Ops",
          "module": "Data.Rewriting.Term.Ops",
          "name": "isLinear",
          "normalized": "Term a b-\u003eBool",
          "package": "term-rewriting",
          "partial": "Linear",
          "signature": "Term f v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Ops.html#v:isLinear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the term is a variable, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Term.Ops",
          "name": "isVar",
          "package": "term-rewriting",
          "signature": "Term f v -\u003e Bool",
          "source": "src/Data-Rewriting-Term-Ops.html#isVar",
          "type": "function"
        },
        "index": {
          "description": "Return True if the term is variable False otherwise",
          "hierarchy": "Data Rewriting Term Ops",
          "module": "Data.Rewriting.Term.Ops",
          "name": "isVar",
          "normalized": "Term a b-\u003eBool",
          "package": "term-rewriting",
          "partial": "Var",
          "signature": "Term f v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Ops.html#v:isVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck whether a term is a variant of another.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Term.Ops",
          "name": "isVariantOf",
          "package": "term-rewriting",
          "signature": "Term f v -\u003e Term f v' -\u003e Bool",
          "source": "src/Data-Rewriting-Term-Ops.html#isVariantOf",
          "type": "function"
        },
        "index": {
          "description": "Check whether term is variant of another",
          "hierarchy": "Data Rewriting Term Ops",
          "module": "Data.Rewriting.Term.Ops",
          "name": "isVariantOf",
          "normalized": "Term a b-\u003eTerm a c-\u003eBool",
          "package": "term-rewriting",
          "partial": "Variant Of",
          "signature": "Term f v-\u003eTerm f v'-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Ops.html#v:isVariantOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereplace a subterm at a given position.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Term.Ops",
          "name": "replaceAt",
          "package": "term-rewriting",
          "signature": "Term f v -\u003e Pos -\u003e Term f v -\u003e Maybe (Term f v)",
          "source": "src/Data-Rewriting-Term-Ops.html#replaceAt",
          "type": "function"
        },
        "index": {
          "description": "replace subterm at given position",
          "hierarchy": "Data Rewriting Term Ops",
          "module": "Data.Rewriting.Term.Ops",
          "name": "replaceAt",
          "normalized": "Term a b-\u003ePos-\u003eTerm a b-\u003eMaybe(Term a b)",
          "package": "term-rewriting",
          "partial": "At",
          "signature": "Term f v-\u003ePos-\u003eTerm f v-\u003eMaybe(Term f v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Ops.html#v:replaceAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the subterm at a given position.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Term.Ops",
          "name": "subtermAt",
          "package": "term-rewriting",
          "signature": "Term f v -\u003e Pos -\u003e Maybe (Term f v)",
          "source": "src/Data-Rewriting-Term-Ops.html#subtermAt",
          "type": "function"
        },
        "index": {
          "description": "Return the subterm at given position",
          "hierarchy": "Data Rewriting Term Ops",
          "module": "Data.Rewriting.Term.Ops",
          "name": "subtermAt",
          "normalized": "Term a b-\u003ePos-\u003eMaybe(Term a b)",
          "package": "term-rewriting",
          "partial": "At",
          "signature": "Term f v-\u003ePos-\u003eMaybe(Term f v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Ops.html#v:subtermAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the list of all variables in the term, from left to right.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003evars (Fun 'g' [Var 3, Fun 'f' [Var 1, Var 2, Var 3]])\n\u003c/code\u003e\u003c/strong\u003e[3,1,2,3]\n\u003c/pre\u003e",
          "module": "[\"Data.Rewriting.Term.Ops\",\"Data.Rewriting.Term\"]",
          "name": "vars",
          "package": "term-rewriting",
          "signature": "Term f v -\u003e [v]",
          "source": "src/Data-Rewriting-Term-Ops.html#vars",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Ops.html#v:vars\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term.html#v:vars\"]"
        },
        "index": {
          "description": "Return the list of all variables in the term from left to right vars Fun Var Fun Var Var Var",
          "hierarchy": "Data Rewriting Term Ops",
          "module": "Data.Rewriting.Term.Ops",
          "name": "vars",
          "normalized": "Term a b-\u003e[b]",
          "package": "term-rewriting",
          "signature": "Term f v-\u003e[v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Ops.html#v:vars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifference List version of \u003ccode\u003e\u003ca\u003evars\u003c/a\u003e\u003c/code\u003e.\n We have \u003ccode\u003evarsDL t vs = vars t ++ vs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Term.Ops",
          "name": "varsDL",
          "package": "term-rewriting",
          "signature": "Term f v -\u003e [v] -\u003e [v]",
          "source": "src/Data-Rewriting-Term-Ops.html#varsDL",
          "type": "function"
        },
        "index": {
          "description": "Difference List version of vars We have varsDL vs vars vs",
          "hierarchy": "Data Rewriting Term Ops",
          "module": "Data.Rewriting.Term.Ops",
          "name": "varsDL",
          "normalized": "Term a b-\u003e[b]-\u003e[b]",
          "package": "term-rewriting",
          "partial": "DL",
          "signature": "Term f v-\u003e[v]-\u003e[v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Ops.html#v:varsDL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotate each occurrence of a function symbol with its actual arity,\n i.e., its number of arguments.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003ewithArity (Fun 'f' [Var 1, Fun 'f' []])\n\u003c/code\u003e\u003c/strong\u003eFun ('f',2) [Var 1,Fun ('f',0) []]\n\u003c/pre\u003e",
          "module": "Data.Rewriting.Term.Ops",
          "name": "withArity",
          "package": "term-rewriting",
          "signature": "Term f v -\u003e Term (f, Int) v",
          "source": "src/Data-Rewriting-Term-Ops.html#withArity",
          "type": "function"
        },
        "index": {
          "description": "Annotate each occurrence of function symbol with its actual arity i.e its number of arguments withArity Fun Var Fun Fun Var Fun",
          "hierarchy": "Data Rewriting Term Ops",
          "module": "Data.Rewriting.Term.Ops",
          "name": "withArity",
          "normalized": "Term a b-\u003eTerm(a,Int)b",
          "package": "term-rewriting",
          "partial": "Arity",
          "signature": "Term f v-\u003eTerm(f,Int)v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Ops.html#v:withArity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Term.Parse",
          "name": "Parse",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Term-Parse.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Rewriting Term Parse",
          "module": "Data.Rewriting.Term.Parse",
          "name": "Parse",
          "package": "term-rewriting",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003efromString xs s\u003c/code\u003e parsers a term from the string \u003ccode\u003es\u003c/code\u003e, where elements of \u003ccode\u003exs\u003c/code\u003e\n are considered as variables.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Term.Parse",
          "name": "fromString",
          "package": "term-rewriting",
          "signature": "[String] -\u003e String -\u003e Either ParseError (Term String String)",
          "source": "src/Data-Rewriting-Term-Parse.html#fromString",
          "type": "function"
        },
        "index": {
          "description": "fromString xs parsers term from the string where elements of xs are considered as variables",
          "hierarchy": "Data Rewriting Term Parse",
          "module": "Data.Rewriting.Term.Parse",
          "name": "fromString",
          "normalized": "[String]-\u003eString-\u003eEither ParseError(Term String String)",
          "package": "term-rewriting",
          "partial": "String",
          "signature": "[String]-\u003eString-\u003eEither ParseError(Term String String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Parse.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eparse fun var\u003c/code\u003e is a parser for terms, where \u003ccode\u003efun\u003c/code\u003e and \u003ccode\u003evar\u003c/code\u003e are\n parsers for function symbols and variables, respectively. The \u003ccode\u003evar\u003c/code\u003e parser\n has a higher priority than the \u003ccode\u003efun\u003c/code\u003e parser. Hence, whenever \u003ccode\u003evar\u003c/code\u003e\n succeeds, the token is treated as a variable.\n\u003c/p\u003e\u003cp\u003eNote that the user has to take care of handling trailing white space in\n \u003ccode\u003efun\u003c/code\u003e and \u003ccode\u003evar\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Term.Parse",
          "name": "parse",
          "package": "term-rewriting",
          "signature": "ParsecT s u m f -\u003e ParsecT s u m v -\u003e ParsecT s u m (Term f v)",
          "source": "src/Data-Rewriting-Term-Parse.html#parse",
          "type": "function"
        },
        "index": {
          "description": "parse fun var is parser for terms where fun and var are parsers for function symbols and variables respectively The var parser has higher priority than the fun parser Hence whenever var succeeds the token is treated as variable Note that the user has to take care of handling trailing white space in fun and var",
          "hierarchy": "Data Rewriting Term Parse",
          "module": "Data.Rewriting.Term.Parse",
          "name": "parse",
          "normalized": "ParsecT a b c d-\u003eParsecT a b c e-\u003eParsecT a b c(Term d e)",
          "package": "term-rewriting",
          "signature": "ParsecT s u m f-\u003eParsecT s u m v-\u003eParsecT s u m(Term f v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Parse.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eparseFun ident\u003c/code\u003e parses function symbols defined by \u003ccode\u003eident\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Term.Parse",
          "name": "parseFun",
          "package": "term-rewriting",
          "signature": "ParsecT s u m String -\u003e ParsecT s u m String",
          "source": "src/Data-Rewriting-Term-Parse.html#parseFun",
          "type": "function"
        },
        "index": {
          "description": "parseFun ident parses function symbols defined by ident",
          "hierarchy": "Data Rewriting Term Parse",
          "module": "Data.Rewriting.Term.Parse",
          "name": "parseFun",
          "normalized": "ParsecT a b c String-\u003eParsecT a b c String",
          "package": "term-rewriting",
          "partial": "Fun",
          "signature": "ParsecT s u m String-\u003eParsecT s u m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Parse.html#v:parseFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efromString\u003c/a\u003e\u003c/code\u003e, but the result is wrapped in the IO monad, making this\n function useful for interactive testing.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eparseIO [\"x\",\"y\"] \"f(x,c)\"\n\u003c/code\u003e\u003c/strong\u003eFun \"f\" [Var \"x\",Fun \"c\" []]\n\u003c/pre\u003e",
          "module": "Data.Rewriting.Term.Parse",
          "name": "parseIO",
          "package": "term-rewriting",
          "signature": "[String] -\u003e String -\u003e IO (Term String String)",
          "source": "src/Data-Rewriting-Term-Parse.html#parseIO",
          "type": "function"
        },
        "index": {
          "description": "Like fromString but the result is wrapped in the IO monad making this function useful for interactive testing parseIO Fun Var Fun",
          "hierarchy": "Data Rewriting Term Parse",
          "module": "Data.Rewriting.Term.Parse",
          "name": "parseIO",
          "normalized": "[String]-\u003eString-\u003eIO(Term String String)",
          "package": "term-rewriting",
          "partial": "IO",
          "signature": "[String]-\u003eString-\u003eIO(Term String String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Parse.html#v:parseIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eparseVar ident vars\u003c/code\u003e parses variables as defined by \u003ccode\u003eident\u003c/code\u003e and with the\n additional requirement that the result is a member of \u003ccode\u003evars\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Term.Parse",
          "name": "parseVar",
          "package": "term-rewriting",
          "signature": "ParsecT s u m String -\u003e [String] -\u003e ParsecT s u m String",
          "source": "src/Data-Rewriting-Term-Parse.html#parseVar",
          "type": "function"
        },
        "index": {
          "description": "parseVar ident vars parses variables as defined by ident and with the additional requirement that the result is member of vars",
          "hierarchy": "Data Rewriting Term Parse",
          "module": "Data.Rewriting.Term.Parse",
          "name": "parseVar",
          "normalized": "ParsecT a b c String-\u003e[String]-\u003eParsecT a b c String",
          "package": "term-rewriting",
          "partial": "Var",
          "signature": "ParsecT s u m String-\u003e[String]-\u003eParsecT s u m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Parse.html#v:parseVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eparseWST xs\u003c/code\u003e is a parser for terms following the conventions of the\n ancient ASCII input format of the termination competition: every \u003ccode\u003eChar\u003c/code\u003e that\n is neither a white space (according to \u003ccode\u003e\u003ca\u003eisSpace\u003c/a\u003e\u003c/code\u003e) nor one of '\u003ccode\u003e(\u003c/code\u003e',\n '\u003ccode\u003e)\u003c/code\u003e', or '\u003ccode\u003e,\u003c/code\u003e', is considered a letter. An identifier is a non-empty\n sequence of letters and it is treated as variable iff it is contained in\n \u003ccode\u003exs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Rewriting.Term.Parse",
          "name": "parseWST",
          "package": "term-rewriting",
          "signature": "[String] -\u003e ParsecT s u m (Term String String)",
          "source": "src/Data-Rewriting-Term-Parse.html#parseWST",
          "type": "function"
        },
        "index": {
          "description": "parseWST xs is parser for terms following the conventions of the ancient ASCII input format of the termination competition every Char that is neither white space according to isSpace nor one of or is considered letter An identifier is non-empty sequence of letters and it is treated as variable iff it is contained in xs",
          "hierarchy": "Data Rewriting Term Parse",
          "module": "Data.Rewriting.Term.Parse",
          "name": "parseWST",
          "normalized": "[String]-\u003eParsecT a b c(Term String String)",
          "package": "term-rewriting",
          "partial": "WST",
          "signature": "[String]-\u003eParsecT s u m(Term String String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Parse.html#v:parseWST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Term.Pretty",
          "name": "Pretty",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Term-Pretty.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Rewriting Term Pretty",
          "module": "Data.Rewriting.Term.Pretty",
          "name": "Pretty",
          "package": "term-rewriting",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a pretty printer \u003ccode\u003ef\u003c/code\u003e for function symbols and pretty printer \u003ccode\u003ev\u003c/code\u003e for variables\n \u003ccode\u003eprettyTerm f v\u003c/code\u003e produces a pretty printer for terms\n\u003c/p\u003e",
          "module": "Data.Rewriting.Term.Pretty",
          "name": "prettyTerm",
          "package": "term-rewriting",
          "signature": "(f -\u003e Doc) -\u003e (v -\u003e Doc) -\u003e Term f v -\u003e Doc",
          "source": "src/Data-Rewriting-Term-Pretty.html#prettyTerm",
          "type": "function"
        },
        "index": {
          "description": "Given pretty printer for function symbols and pretty printer for variables prettyTerm produces pretty printer for terms",
          "hierarchy": "Data Rewriting Term Pretty",
          "module": "Data.Rewriting.Term.Pretty",
          "name": "prettyTerm",
          "normalized": "(a-\u003eDoc)-\u003e(b-\u003eDoc)-\u003eTerm a b-\u003eDoc",
          "package": "term-rewriting",
          "partial": "Term",
          "signature": "(f-\u003eDoc)-\u003e(v-\u003eDoc)-\u003eTerm f v-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Pretty.html#v:prettyTerm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Term.Type",
          "name": "Type",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Term-Type.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Rewriting Term Type",
          "module": "Data.Rewriting.Term.Type",
          "name": "Type",
          "package": "term-rewriting",
          "partial": "Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Type.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Term.Type",
          "name": "Term",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Term-Type.html#Term",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Rewriting Term Type",
          "module": "Data.Rewriting.Term.Type",
          "name": "Term",
          "package": "term-rewriting",
          "partial": "Term",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Type.html#t:Term"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction application\n\u003c/p\u003e",
          "module": "[\"Data.Rewriting.Term.Type\",\"Data.Rewriting.Term\"]",
          "name": "Fun",
          "package": "term-rewriting",
          "signature": "Fun f [Term f v]",
          "source": "src/Data-Rewriting-Term-Type.html#Term",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Type.html#v:Fun\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term.html#v:Fun\"]"
        },
        "index": {
          "description": "Function application",
          "hierarchy": "Data Rewriting Term Type",
          "module": "Data.Rewriting.Term.Type",
          "name": "Fun",
          "normalized": "Fun a[Term a b]",
          "package": "term-rewriting",
          "partial": "Fun",
          "signature": "Fun f[Term f v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Type.html#v:Fun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariable\n\u003c/p\u003e",
          "module": "[\"Data.Rewriting.Term.Type\",\"Data.Rewriting.Term\"]",
          "name": "Var",
          "package": "term-rewriting",
          "signature": "Var v",
          "source": "src/Data-Rewriting-Term-Type.html#Term",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Type.html#v:Var\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term.html#v:Var\"]"
        },
        "index": {
          "description": "Variable",
          "hierarchy": "Data Rewriting Term Type",
          "module": "Data.Rewriting.Term.Type",
          "name": "Var",
          "package": "term-rewriting",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Type.html#v:Var"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFolding terms.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003efold (\\v -\u003e 1) (\\f xs -\u003e 1 + sum xs) (Fun 'f' [Var 1, Fun 'g' []])\n\u003c/code\u003e\u003c/strong\u003e3 -- size of the given term\n\u003c/pre\u003e",
          "module": "[\"Data.Rewriting.Term.Type\",\"Data.Rewriting.Term\"]",
          "name": "fold",
          "package": "term-rewriting",
          "signature": "(v -\u003e a) -\u003e (f -\u003e [a] -\u003e a) -\u003e Term f v -\u003e a",
          "source": "src/Data-Rewriting-Term-Type.html#fold",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Type.html#v:fold\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term.html#v:fold\"]"
        },
        "index": {
          "description": "Folding terms fold xs sum xs Fun Var Fun size of the given term",
          "hierarchy": "Data Rewriting Term Type",
          "module": "Data.Rewriting.Term.Type",
          "name": "fold",
          "normalized": "(a-\u003eb)-\u003e(c-\u003e[b]-\u003eb)-\u003eTerm c a-\u003eb",
          "package": "term-rewriting",
          "signature": "(v-\u003ea)-\u003e(f-\u003e[a]-\u003ea)-\u003eTerm f v-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Type.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMapping terms: Rename function symbols and variables.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003emap succ pred (Fun 'f' [Var 2, Fun 'g' []])\n\u003c/code\u003e\u003c/strong\u003eFun 'e' [Var 3,Fun 'f' []]\n\u003c/pre\u003e",
          "module": "[\"Data.Rewriting.Term.Type\",\"Data.Rewriting.Term\"]",
          "name": "map",
          "package": "term-rewriting",
          "signature": "(f -\u003e f') -\u003e (v -\u003e v') -\u003e Term f v -\u003e Term f' v'",
          "source": "src/Data-Rewriting-Term-Type.html#map",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Type.html#v:map\",\"http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term.html#v:map\"]"
        },
        "index": {
          "description": "Mapping terms Rename function symbols and variables map succ pred Fun Var Fun Fun Var Fun",
          "hierarchy": "Data Rewriting Term Type",
          "module": "Data.Rewriting.Term.Type",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003eTerm a c-\u003eTerm b d",
          "package": "term-rewriting",
          "signature": "(f-\u003ef')-\u003e(v-\u003ev')-\u003eTerm f v-\u003eTerm f' v'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term-Type.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Term",
          "name": "Term",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Term.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Rewriting Term",
          "module": "Data.Rewriting.Term",
          "name": "Term",
          "package": "term-rewriting",
          "partial": "Term",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Rewriting.Term",
          "name": "Term",
          "package": "term-rewriting",
          "source": "src/Data-Rewriting-Term-Type.html#Term",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Rewriting Term",
          "module": "Data.Rewriting.Term",
          "name": "Term",
          "package": "term-rewriting",
          "partial": "Term",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/term-rewriting/docs/Data-Rewriting-Term.html#t:Term"
      }
    }
  ]
]