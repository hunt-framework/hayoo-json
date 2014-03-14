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
        "word": "type-spine"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Type.Spine.Base",
          "name": "Base",
          "package": "type-spine",
          "source": "src/Type-Spine-Base.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Type Spine Base",
          "module": "Type.Spine.Base",
          "name": "Base",
          "package": "type-spine",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/type-spine/docs/Type-Spine-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Type.Spine.Base",
          "name": ":@",
          "package": "type-spine",
          "source": "src/Type-Spine-Base.html#%3A%40",
          "type": "data"
        },
        "index": {
          "hierarchy": "Type Spine Base",
          "module": "Type.Spine.Base",
          "name": ":@",
          "package": "type-spine",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/type-spine/docs/Type-Spine-Base.html#t::-64-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Type.Spine.Base",
          "name": "Atom",
          "package": "type-spine",
          "source": "src/Type-Spine-Base.html#Atom",
          "type": "data"
        },
        "index": {
          "hierarchy": "Type Spine Base",
          "module": "Type.Spine.Base",
          "name": "Atom",
          "package": "type-spine",
          "partial": "Atom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/type-spine/docs/Type-Spine-Base.html#t:Atom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Type.Spine.Base\",\"Type.Spine\"]",
          "name": "Spine",
          "package": "type-spine",
          "signature": "Spine",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/type-spine/docs/Type-Spine-Base.html#t:Spine\",\"http://hackage.haskell.org/package/type-spine/docs/Type-Spine.html#t:Spine\"]"
        },
        "index": {
          "hierarchy": "Type Spine Base",
          "module": "Type.Spine.Base",
          "name": "Spine",
          "package": "type-spine",
          "partial": "Spine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-spine/docs/Type-Spine-Base.html#t:Spine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003espineType_d n\u003c/code\u003e generates the \u003ccode\u003eSpine\u003c/code\u003e instance for the type named \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Type.Spine.Base\",\"Type.Spine\"]",
          "name": "spineType_d",
          "package": "type-spine",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Type-Spine-Base.html#spineType_d",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/type-spine/docs/Type-Spine-Base.html#v:spineType_d\",\"http://hackage.haskell.org/package/type-spine/docs/Type-Spine.html#v:spineType_d\"]"
        },
        "index": {
          "description": "spineType generates the Spine instance for the type named",
          "hierarchy": "Type Spine Base",
          "module": "Type.Spine.Base",
          "name": "spineType_d",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "type-spine",
          "partial": "Type",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-spine/docs/Type-Spine-Base.html#v:spineType_d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003espineType_d_ n ks\u003c/code\u003e generates the \u003ccode\u003eSpine\u003c/code\u003e instance for the type named \u003ccode\u003en\u003c/code\u003e\n that has parameters with kinds \u003ccode\u003eks\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Type.Spine.Base\",\"Type.Spine\"]",
          "name": "spineType_d_",
          "package": "type-spine",
          "signature": "Name -\u003e [Kind] -\u003e Q [Dec]",
          "source": "src/Type-Spine-Base.html#spineType_d_",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/type-spine/docs/Type-Spine-Base.html#v:spineType_d_\",\"http://hackage.haskell.org/package/type-spine/docs/Type-Spine.html#v:spineType_d_\"]"
        },
        "index": {
          "description": "spineType ks generates the Spine instance for the type named that has parameters with kinds ks",
          "hierarchy": "Type Spine Base",
          "module": "Type.Spine.Base",
          "name": "spineType_d_",
          "normalized": "Name-\u003e[Kind]-\u003eQ[Dec]",
          "package": "type-spine",
          "partial": "Type",
          "signature": "Name-\u003e[Kind]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-spine/docs/Type-Spine-Base.html#v:spineType_d_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003espineType_gen_ ty ks\u003c/code\u003e generates the \u003ccode\u003eSpine\u003c/code\u003e instance for the type \u003ccode\u003ety\u003c/code\u003e\n that has parameters with kinds \u003ccode\u003eks\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Type.Spine.Base",
          "name": "spineType_gen_",
          "package": "type-spine",
          "signature": "Type -\u003e [Kind] -\u003e Q [Dec]",
          "source": "src/Type-Spine-Base.html#spineType_gen_",
          "type": "function"
        },
        "index": {
          "description": "spineType gen ty ks generates the Spine instance for the type ty that has parameters with kinds ks",
          "hierarchy": "Type Spine Base",
          "module": "Type.Spine.Base",
          "name": "spineType_gen_",
          "normalized": "Type-\u003e[Kind]-\u003eQ[Dec]",
          "package": "type-spine",
          "partial": "Type",
          "signature": "Type-\u003e[Kind]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-spine/docs/Type-Spine-Base.html#v:spineType_gen_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003espineType_pro n\u003c/code\u003e generates the \u003ccode\u003eSpine\u003c/code\u003e instance for the promoted data constructor named \u003ccode\u003en\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Type.Spine.Base\",\"Type.Spine\"]",
          "name": "spineType_pro",
          "package": "type-spine",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Type-Spine-Base.html#spineType_pro",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/type-spine/docs/Type-Spine-Base.html#v:spineType_pro\",\"http://hackage.haskell.org/package/type-spine/docs/Type-Spine.html#v:spineType_pro\"]"
        },
        "index": {
          "description": "spineType pro generates the Spine instance for the promoted data constructor named",
          "hierarchy": "Type Spine Base",
          "module": "Type.Spine.Base",
          "name": "spineType_pro",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "type-spine",
          "partial": "Type",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-spine/docs/Type-Spine-Base.html#v:spineType_pro"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003espineType_pro_ n ks\u003c/code\u003e generates the \u003ccode\u003eSpine\u003c/code\u003e instance for the promoted data\n constructor named \u003ccode\u003en\u003c/code\u003e that has parameters with kinds \u003ccode\u003eks\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Type.Spine.Base\",\"Type.Spine\"]",
          "name": "spineType_pro_",
          "package": "type-spine",
          "signature": "Name -\u003e [Kind] -\u003e Q [Dec]",
          "source": "src/Type-Spine-Base.html#spineType_pro_",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/type-spine/docs/Type-Spine-Base.html#v:spineType_pro_\",\"http://hackage.haskell.org/package/type-spine/docs/Type-Spine.html#v:spineType_pro_\"]"
        },
        "index": {
          "description": "spineType pro ks generates the Spine instance for the promoted data constructor named that has parameters with kinds ks",
          "hierarchy": "Type Spine Base",
          "module": "Type.Spine.Base",
          "name": "spineType_pro_",
          "normalized": "Name-\u003e[Kind]-\u003eQ[Dec]",
          "package": "type-spine",
          "partial": "Type",
          "signature": "Name-\u003e[Kind]-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-spine/docs/Type-Spine-Base.html#v:spineType_pro_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTemplate Haskell in support of the spine-view on types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Type.Spine.TH",
          "name": "TH",
          "package": "type-spine",
          "source": "src/Type-Spine-TH.html",
          "type": "module"
        },
        "index": {
          "description": "Template Haskell in support of the spine-view on types",
          "hierarchy": "Type Spine TH",
          "module": "Type.Spine.TH",
          "name": "TH",
          "package": "type-spine",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/type-spine/docs/Type-Spine-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Template Haskell-lifter for data constructors' \u003ccode\u003e\u003ca\u003eNameG\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Type.Spine.TH",
          "name": "liftNameG_d",
          "package": "type-spine",
          "signature": "Name -\u003e Q Exp",
          "source": "src/Type-Spine-TH.html#liftNameG_d",
          "type": "function"
        },
        "index": {
          "description": "Template Haskell-lifter for data constructors NameG",
          "hierarchy": "Type Spine TH",
          "module": "Type.Spine.TH",
          "name": "liftNameG_d",
          "normalized": "Name-\u003eQ Exp",
          "package": "type-spine",
          "partial": "Name",
          "signature": "Name-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-spine/docs/Type-Spine-TH.html#v:liftNameG_d"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Type.Spine.TH",
          "name": "toNameG",
          "package": "type-spine",
          "signature": "Name -\u003e Q Name",
          "source": "src/Type-Spine-TH.html#toNameG",
          "type": "function"
        },
        "index": {
          "hierarchy": "Type Spine TH",
          "module": "Type.Spine.TH",
          "name": "toNameG",
          "normalized": "Name-\u003eQ Name",
          "package": "type-spine",
          "partial": "Name",
          "signature": "Name-\u003eQ Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-spine/docs/Type-Spine-TH.html#v:toNameG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Type.Spine.TH",
          "name": "tvb_kind",
          "package": "type-spine",
          "signature": "TyVarBndr -\u003e Kind",
          "source": "src/Type-Spine-TH.html#tvb_kind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Type Spine TH",
          "module": "Type.Spine.TH",
          "name": "tvb_kind",
          "normalized": "TyVarBndr-\u003eKind",
          "package": "type-spine",
          "signature": "TyVarBndr-\u003eKind",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-spine/docs/Type-Spine-TH.html#v:tvb_kind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the kinds of a type constructor's type parameters and range.\n\u003c/p\u003e",
          "module": "Type.Spine.TH",
          "name": "tyConSignature",
          "package": "type-spine",
          "signature": "Name -\u003e Q ([Kind], Kind)",
          "source": "src/Type-Spine-TH.html#tyConSignature",
          "type": "function"
        },
        "index": {
          "description": "Returns the kinds of type constructor type parameters and range",
          "hierarchy": "Type Spine TH",
          "module": "Type.Spine.TH",
          "name": "tyConSignature",
          "normalized": "Name-\u003eQ([Kind],Kind)",
          "package": "type-spine",
          "partial": "Con Signature",
          "signature": "Name-\u003eQ([Kind],Kind)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-spine/docs/Type-Spine-TH.html#v:tyConSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe spine-view on types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Type.Spine",
          "name": "Spine",
          "package": "type-spine",
          "source": "src/Type-Spine.html",
          "type": "module"
        },
        "index": {
          "description": "The spine-view on types",
          "hierarchy": "Type Spine",
          "module": "Type.Spine",
          "name": "Spine",
          "package": "type-spine",
          "partial": "Spine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/type-spine/docs/Type-Spine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Type.Spine",
          "name": ":@",
          "package": "type-spine",
          "source": "src/Type-Spine-Base.html#%3A%40",
          "type": "data"
        },
        "index": {
          "hierarchy": "Type Spine",
          "module": "Type.Spine",
          "name": ":@",
          "package": "type-spine",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/type-spine/docs/Type-Spine.html#t::-64-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Type.Spine",
          "name": "Atom",
          "package": "type-spine",
          "source": "src/Type-Spine-Base.html#Atom",
          "type": "data"
        },
        "index": {
          "hierarchy": "Type Spine",
          "module": "Type.Spine",
          "name": "Atom",
          "package": "type-spine",
          "partial": "Atom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/type-spine/docs/Type-Spine.html#t:Atom"
      }
    }
  ]
]