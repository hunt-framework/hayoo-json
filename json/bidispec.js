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
        "word": "bidispec"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "BidiSpec",
          "package": "bidispec",
          "source": "src/Data-BidiSpec.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "BidiSpec",
          "package": "bidispec",
          "partial": "Bidi Spec",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "Spec",
          "package": "bidispec",
          "source": "src/Data-BidiSpec.html#Spec",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "Spec",
          "package": "bidispec",
          "partial": "Spec",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#t:Spec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "SpecGen",
          "package": "bidispec",
          "source": "src/Data-BidiSpec.html#SpecGen",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "SpecGen",
          "package": "bidispec",
          "partial": "Spec Gen",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#t:SpecGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "SpecParser",
          "package": "bidispec",
          "source": "src/Data-BidiSpec.html#SpecParser",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "SpecParser",
          "package": "bidispec",
          "partial": "Spec Parser",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#t:SpecParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "SpecParser",
          "package": "bidispec",
          "signature": "SpecParser",
          "source": "src/Data-BidiSpec.html#SpecParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "SpecParser",
          "package": "bidispec",
          "partial": "Spec Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:SpecParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "genBySpec",
          "package": "bidispec",
          "signature": "Spec e i o a -\u003e o -\u003e a -\u003e m o",
          "source": "src/Data-BidiSpec.html#genBySpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "genBySpec",
          "normalized": "Spec a b c d-\u003ec-\u003ed-\u003ee c",
          "package": "bidispec",
          "partial": "By Spec",
          "signature": "Spec e i o a-\u003eo-\u003ea-\u003em o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:genBySpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "mkSpec",
          "package": "bidispec",
          "signature": "SpecParser i e a -\u003e SpecGen o a -\u003e Spec e i o a",
          "source": "src/Data-BidiSpec.html#mkSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "mkSpec",
          "normalized": "SpecParser a b c-\u003eSpecGen d c-\u003eSpec b a d c",
          "package": "bidispec",
          "partial": "Spec",
          "signature": "SpecParser i e a-\u003eSpecGen o a-\u003eSpec e i o a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:mkSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "parseBySpec",
          "package": "bidispec",
          "signature": "Spec e i o a -\u003e i -\u003e m a",
          "source": "src/Data-BidiSpec.html#parseBySpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "parseBySpec",
          "normalized": "Spec a b c d-\u003eb-\u003ee d",
          "package": "bidispec",
          "partial": "By Spec",
          "signature": "Spec e i o a-\u003ei-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:parseBySpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "rsAlt",
          "package": "bidispec",
          "signature": "(a -\u003e Int) -\u003e [Spec e i o a] -\u003e Spec e i o a",
          "source": "src/Data-BidiSpec.html#rsAlt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "rsAlt",
          "normalized": "(a-\u003eInt)-\u003e[Spec b c d a]-\u003eSpec b c d a",
          "package": "bidispec",
          "partial": "Alt",
          "signature": "(a-\u003eInt)-\u003e[Spec e i o a]-\u003eSpec e i o a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:rsAlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "rsCase",
          "package": "bidispec",
          "signature": "(a -\u003e b, b -\u003e a) -\u003e Spec e i o a -\u003e SpecCase e i o b",
          "source": "src/Data-BidiSpec.html#rsCase",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "rsCase",
          "normalized": "(a-\u003eb,b-\u003ea)-\u003eSpec c d e a-\u003eSpecCase c d e b",
          "package": "bidispec",
          "partial": "Case",
          "signature": "(a-\u003eb,b-\u003ea)-\u003eSpec e i o a-\u003eSpecCase e i o b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:rsCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "rsCaseConst",
          "package": "bidispec",
          "signature": "a -\u003e (Spec e i o b -\u003e Spec e i o b) -\u003e SpecCase e i o a",
          "source": "src/Data-BidiSpec.html#rsCaseConst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "rsCaseConst",
          "normalized": "a-\u003e(Spec b c d e-\u003eSpec b c d e)-\u003eSpecCase b c d a",
          "package": "bidispec",
          "partial": "Case Const",
          "signature": "a-\u003e(Spec e i o b-\u003eSpec e i o b)-\u003eSpecCase e i o a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:rsCaseConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "rsCheckSet",
          "package": "bidispec",
          "signature": "SpecParser i e () -\u003e (o -\u003e o) -\u003e Spec e i o a -\u003e Spec e i o a",
          "source": "src/Data-BidiSpec.html#rsCheckSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "rsCheckSet",
          "normalized": "SpecParser a b()-\u003e(c-\u003ec)-\u003eSpec b a c d-\u003eSpec b a c d",
          "package": "bidispec",
          "partial": "Check Set",
          "signature": "SpecParser i e()-\u003e(o-\u003eo)-\u003eSpec e i o a-\u003eSpec e i o a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:rsCheckSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "rsChoice",
          "package": "bidispec",
          "signature": "Spec e i o b -\u003e Spec e i o a -\u003e (a -\u003e Spec e i o b) -\u003e Spec e i o b",
          "source": "src/Data-BidiSpec.html#rsChoice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "rsChoice",
          "normalized": "Spec a b c d-\u003eSpec a b c e-\u003e(e-\u003eSpec a b c d)-\u003eSpec a b c d",
          "package": "bidispec",
          "partial": "Choice",
          "signature": "Spec e i o b-\u003eSpec e i o a-\u003e(a-\u003eSpec e i o b)-\u003eSpec e i o b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:rsChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "rsCondSeq",
          "package": "bidispec",
          "signature": "Spec e i o b -\u003e (b -\u003e a) -\u003e Spec e i o a -\u003e (a -\u003e Spec e i o b) -\u003e Spec e i o b",
          "source": "src/Data-BidiSpec.html#rsCondSeq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "rsCondSeq",
          "normalized": "Spec a b c d-\u003e(d-\u003ee)-\u003eSpec a b c e-\u003e(e-\u003eSpec a b c d)-\u003eSpec a b c d",
          "package": "bidispec",
          "partial": "Cond Seq",
          "signature": "Spec e i o b-\u003e(b-\u003ea)-\u003eSpec e i o a-\u003e(a-\u003eSpec e i o b)-\u003eSpec e i o b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:rsCondSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "rsDefault",
          "package": "bidispec",
          "signature": "(e -\u003e a) -\u003e Spec e u i a -\u003e Spec e u i a",
          "source": "src/Data-BidiSpec.html#rsDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "rsDefault",
          "normalized": "(a-\u003eb)-\u003eSpec a c d b-\u003eSpec a c d b",
          "package": "bidispec",
          "partial": "Default",
          "signature": "(e-\u003ea)-\u003eSpec e u i a-\u003eSpec e u i a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:rsDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "rsGen",
          "package": "bidispec",
          "signature": "Spec err src tgt a -\u003e SpecGen tgt a",
          "source": "src/Data-BidiSpec.html#rsGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "rsGen",
          "normalized": "Spec a b c d-\u003eSpecGen c d",
          "package": "bidispec",
          "partial": "Gen",
          "signature": "Spec err src tgt a-\u003eSpecGen tgt a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:rsGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "rsGetSet",
          "package": "bidispec",
          "signature": "(i -\u003e a) -\u003e (o -\u003e a -\u003e o) -\u003e Spec e i o a",
          "source": "src/Data-BidiSpec.html#rsGetSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "rsGetSet",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb-\u003ec)-\u003eSpec d a c b",
          "package": "bidispec",
          "partial": "Get Set",
          "signature": "(i-\u003ea)-\u003e(o-\u003ea-\u003eo)-\u003eSpec e i o a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:rsGetSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "rsLift",
          "package": "bidispec",
          "signature": "a -\u003e Spec e i o a",
          "source": "src/Data-BidiSpec.html#rsLift",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "rsLift",
          "normalized": "a-\u003eSpec b c d a",
          "package": "bidispec",
          "partial": "Lift",
          "signature": "a-\u003eSpec e i o a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:rsLift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "rsMaybe",
          "package": "bidispec",
          "signature": "Spec e i o a -\u003e Spec e i o (Maybe a)",
          "source": "src/Data-BidiSpec.html#rsMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "rsMaybe",
          "normalized": "Spec a b c d-\u003eSpec a b c(Maybe d)",
          "package": "bidispec",
          "partial": "Maybe",
          "signature": "Spec e i o a-\u003eSpec e i o(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:rsMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "rsMaybeDefault",
          "package": "bidispec",
          "signature": "a -\u003e Spec e i o a -\u003e Spec e i o a",
          "source": "src/Data-BidiSpec.html#rsMaybeDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "rsMaybeDefault",
          "normalized": "a-\u003eSpec b c d a-\u003eSpec b c d a",
          "package": "bidispec",
          "partial": "Maybe Default",
          "signature": "a-\u003eSpec e i o a-\u003eSpec e i o a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:rsMaybeDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "rsPair",
          "package": "bidispec",
          "signature": "Spec e i o a -\u003e Spec e i o b -\u003e Spec e i o (a, b)",
          "source": "src/Data-BidiSpec.html#rsPair",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "rsPair",
          "normalized": "Spec a b c d-\u003eSpec a b c e-\u003eSpec a b c(d,e)",
          "package": "bidispec",
          "partial": "Pair",
          "signature": "Spec e i o a-\u003eSpec e i o b-\u003eSpec e i o(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:rsPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "rsParse",
          "package": "bidispec",
          "signature": "Spec err src tgt a -\u003e SpecParser src err a",
          "source": "src/Data-BidiSpec.html#rsParse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "rsParse",
          "normalized": "Spec a b c d-\u003eSpecParser b a d",
          "package": "bidispec",
          "partial": "Parse",
          "signature": "Spec err src tgt a-\u003eSpecParser src err a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:rsParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "rsQuadruple",
          "package": "bidispec",
          "signature": "Spec e i o a -\u003e Spec e i o b -\u003e Spec e i o c -\u003e Spec e i o d -\u003e Spec e i o (a, b, c, d)",
          "source": "src/Data-BidiSpec.html#rsQuadruple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "rsQuadruple",
          "normalized": "Spec a b c d-\u003eSpec a b c e-\u003eSpec a b c f-\u003eSpec a b c g-\u003eSpec a b c(d,e,f,g)",
          "package": "bidispec",
          "partial": "Quadruple",
          "signature": "Spec e i o a-\u003eSpec e i o b-\u003eSpec e i o c-\u003eSpec e i o d-\u003eSpec e i o(a,b,c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:rsQuadruple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "rsSwitch",
          "package": "bidispec",
          "signature": "[SpecCase e i o a] -\u003e Spec e i o a",
          "source": "src/Data-BidiSpec.html#rsSwitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "rsSwitch",
          "normalized": "[SpecCase a b c d]-\u003eSpec a b c d",
          "package": "bidispec",
          "partial": "Switch",
          "signature": "[SpecCase e i o a]-\u003eSpec e i o a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:rsSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "rsTagSwitch",
          "package": "bidispec",
          "signature": "(a -\u003e t) -\u003e [SpecCase e i o a] -\u003e Spec e i o a",
          "source": "src/Data-BidiSpec.html#rsTagSwitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "rsTagSwitch",
          "normalized": "(a-\u003eb)-\u003e[SpecCase c d e a]-\u003eSpec c d e a",
          "package": "bidispec",
          "partial": "Tag Switch",
          "signature": "(a-\u003et)-\u003e[SpecCase e i o a]-\u003eSpec e i o a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:rsTagSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "rsTriple",
          "package": "bidispec",
          "signature": "Spec e i o a -\u003e Spec e i o b -\u003e Spec e i o c -\u003e Spec e i o (a, b, c)",
          "source": "src/Data-BidiSpec.html#rsTriple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "rsTriple",
          "normalized": "Spec a b c d-\u003eSpec a b c e-\u003eSpec a b c f-\u003eSpec a b c(d,e,f)",
          "package": "bidispec",
          "partial": "Triple",
          "signature": "Spec e i o a-\u003eSpec e i o b-\u003eSpec e i o c-\u003eSpec e i o(a,b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:rsTriple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "rsUnit",
          "package": "bidispec",
          "signature": "Spec e i o ()",
          "source": "src/Data-BidiSpec.html#rsUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "rsUnit",
          "normalized": "Spec a b c()",
          "package": "bidispec",
          "partial": "Unit",
          "signature": "Spec e i o()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:rsUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "rsWith",
          "package": "bidispec",
          "signature": "(Spec e i o a -\u003e Spec e i o b) -\u003e Spec e i o a -\u003e Spec e i o b",
          "source": "src/Data-BidiSpec.html#rsWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "rsWith",
          "normalized": "(Spec a b c d-\u003eSpec a b c e)-\u003eSpec a b c d-\u003eSpec a b c e",
          "package": "bidispec",
          "partial": "With",
          "signature": "(Spec e i o a-\u003eSpec e i o b)-\u003eSpec e i o a-\u003eSpec e i o b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:rsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "rsWrap",
          "package": "bidispec",
          "signature": "(a -\u003e b, b -\u003e a) -\u003e Spec e i o a -\u003e Spec e i o b",
          "source": "src/Data-BidiSpec.html#rsWrap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "rsWrap",
          "normalized": "(a-\u003eb,b-\u003ea)-\u003eSpec c d e a-\u003eSpec c d e b",
          "package": "bidispec",
          "partial": "Wrap",
          "signature": "(a-\u003eb,b-\u003ea)-\u003eSpec e i o a-\u003eSpec e i o b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:rsWrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "rsWrapEither",
          "package": "bidispec",
          "signature": "(a -\u003e Either e b, b -\u003e a) -\u003e Spec e i o a -\u003e Spec e i o b",
          "source": "src/Data-BidiSpec.html#rsWrapEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "rsWrapEither",
          "normalized": "(a-\u003eEither b c,c-\u003ea)-\u003eSpec b d e a-\u003eSpec b d e c",
          "package": "bidispec",
          "partial": "Wrap Either",
          "signature": "(a-\u003eEither e b,b-\u003ea)-\u003eSpec e i o a-\u003eSpec e i o b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:rsWrapEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "rsWrapEither'",
          "package": "bidispec",
          "signature": "(a -\u003e Either l b, b -\u003e a) -\u003e Spec e i o a -\u003e Spec e i o b",
          "source": "src/Data-BidiSpec.html#rsWrapEither%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "rsWrapEither'",
          "normalized": "(a-\u003eEither b c,c-\u003ea)-\u003eSpec d e f a-\u003eSpec d e f c",
          "package": "bidispec",
          "partial": "Wrap Either'",
          "signature": "(a-\u003eEither l b,b-\u003ea)-\u003eSpec e i o a-\u003eSpec e i o b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:rsWrapEither-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "rsWrapMaybe",
          "package": "bidispec",
          "signature": "String -\u003e (a -\u003e Maybe b, b -\u003e a) -\u003e Spec e i o a -\u003e Spec e i o b",
          "source": "src/Data-BidiSpec.html#rsWrapMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "rsWrapMaybe",
          "normalized": "String-\u003e(a-\u003eMaybe b,b-\u003ea)-\u003eSpec c d e a-\u003eSpec c d e b",
          "package": "bidispec",
          "partial": "Wrap Maybe",
          "signature": "String-\u003e(a-\u003eMaybe b,b-\u003ea)-\u003eSpec e i o a-\u003eSpec e i o b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:rsWrapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "rsZero",
          "package": "bidispec",
          "signature": "Spec e i o a",
          "source": "src/Data-BidiSpec.html#rsZero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "rsZero",
          "package": "bidispec",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:rsZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "runSpecParser",
          "package": "bidispec",
          "signature": "SpecParser s e a -\u003e s -\u003e Either e a",
          "source": "src/Data-BidiSpec.html#runSpecParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "runSpecParser",
          "normalized": "SpecParser a b c-\u003ea-\u003eEither b c",
          "package": "bidispec",
          "partial": "Spec Parser",
          "signature": "SpecParser s e a-\u003es-\u003eEither e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:runSpecParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "spCheck",
          "package": "bidispec",
          "signature": "(a -\u003e Bool) -\u003e (a -\u003e e) -\u003e a -\u003e SpecParser s e ()",
          "source": "src/Data-BidiSpec.html#spCheck",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "spCheck",
          "normalized": "(a-\u003eBool)-\u003e(a-\u003eb)-\u003ea-\u003eSpecParser c b()",
          "package": "bidispec",
          "partial": "Check",
          "signature": "(a-\u003eBool)-\u003e(a-\u003ee)-\u003ea-\u003eSpecParser s e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:spCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "spFromEither",
          "package": "bidispec",
          "signature": "Either e a -\u003e SpecParser s e a",
          "source": "src/Data-BidiSpec.html#spFromEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "spFromEither",
          "normalized": "Either a b-\u003eSpecParser c a b",
          "package": "bidispec",
          "partial": "From Either",
          "signature": "Either e a-\u003eSpecParser s e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:spFromEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "spFromMaybe",
          "package": "bidispec",
          "signature": "e -\u003e Maybe a -\u003e SpecParser s e a",
          "source": "src/Data-BidiSpec.html#spFromMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "spFromMaybe",
          "normalized": "a-\u003eMaybe b-\u003eSpecParser c a b",
          "package": "bidispec",
          "partial": "From Maybe",
          "signature": "e-\u003eMaybe a-\u003eSpecParser s e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:spFromMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "spGet",
          "package": "bidispec",
          "signature": "SpecParser s e s",
          "source": "src/Data-BidiSpec.html#spGet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "spGet",
          "package": "bidispec",
          "partial": "Get",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:spGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "spGets",
          "package": "bidispec",
          "signature": "(s -\u003e a) -\u003e SpecParser s e a",
          "source": "src/Data-BidiSpec.html#spGets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "spGets",
          "normalized": "(a-\u003eb)-\u003eSpecParser a c b",
          "package": "bidispec",
          "partial": "Gets",
          "signature": "(s-\u003ea)-\u003eSpecParser s e a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:spGets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.BidiSpec",
          "name": "unSpecParser",
          "package": "bidispec",
          "signature": "ReaderT s (Either e) a",
          "source": "src/Data-BidiSpec.html#SpecParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data BidiSpec",
          "module": "Data.BidiSpec",
          "name": "unSpecParser",
          "package": "bidispec",
          "partial": "Spec Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/bidispec/docs/Data-BidiSpec.html#v:unSpecParser"
      }
    }
  ]
]