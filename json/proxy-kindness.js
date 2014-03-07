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
        "word": "proxy-kindness"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Proxy.Kindness",
          "name": "Kindness",
          "package": "proxy-kindness",
          "source": "src/Data-Proxy-Kindness.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Proxy Kindness",
          "module": "Data.Proxy.Kindness",
          "name": "Kindness",
          "package": "proxy-kindness",
          "partial": "Kindness",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/proxy-kindness/docs/Data-Proxy-Kindness.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA relation between a (maybe-partially-applied) type and that type fully\n applied.\n\u003c/p\u003e",
          "module": "Data.Proxy.Kindness",
          "name": "Applied",
          "package": "proxy-kindness",
          "source": "src/Data-Proxy-Kindness.html#Applied",
          "type": "class"
        },
        "index": {
          "description": "relation between maybe-partially-applied type and that type fully applied",
          "hierarchy": "Data Proxy Kindness",
          "module": "Data.Proxy.Kindness",
          "name": "Applied",
          "package": "proxy-kindness",
          "partial": "Applied",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/proxy-kindness/docs/Data-Proxy-Kindness.html#t:Applied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate class that returns \u003ccode\u003eTrue\u003c/code\u003e when the unapplied \u003ca\u003ebase\u003c/a\u003e type of\n \u003ccode\u003eta\u003c/code\u003e and \u003ccode\u003etb\u003c/code\u003e are identical. \n\u003c/p\u003e",
          "module": "Data.Proxy.Kindness",
          "name": "AreEqUnapplied",
          "package": "proxy-kindness",
          "source": "src/Data-Proxy-Kindness.html#AreEqUnapplied",
          "type": "class"
        },
        "index": {
          "description": "predicate class that returns True when the unapplied base type of ta and tb are identical",
          "hierarchy": "Data Proxy Kindness",
          "module": "Data.Proxy.Kindness",
          "name": "AreEqUnapplied",
          "package": "proxy-kindness",
          "partial": "Are Eq Unapplied",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/proxy-kindness/docs/Data-Proxy-Kindness.html#t:AreEqUnapplied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate class that returns \u003ccode\u003eTrue\u003c/code\u003e when \u003ccode\u003et\u003c/code\u003e is a partially-applied\n \"prefix\" type of \u003ccode\u003etab\u003c/code\u003e, i.e. \u003ccode\u003etab\u003c/code\u003e can be \u003ccode\u003e\u003ca\u003eunap\u003c/a\u003e\u003c/code\u003e-ed to \u003ccode\u003et\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Proxy.Kindness",
          "name": "IsOfBaseType",
          "package": "proxy-kindness",
          "source": "src/Data-Proxy-Kindness.html#IsOfBaseType",
          "type": "class"
        },
        "index": {
          "description": "predicate class that returns True when is partially-applied prefix type of tab i.e tab can be unap ed to",
          "hierarchy": "Data Proxy Kindness",
          "module": "Data.Proxy.Kindness",
          "name": "IsOfBaseType",
          "package": "proxy-kindness",
          "partial": "Is Of Base Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/proxy-kindness/docs/Data-Proxy-Kindness.html#t:IsOfBaseType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA relation between a (maybe-partially-applied) type and that type stripped\n of all its arguments.\n\u003c/p\u003e\u003cp\u003eWhen the bare type is ambiguous (e.g. \u003ccode\u003eunapplied (p :: Proxy (m a))\u003c/code\u003e), an\n overlapping instances type error will be raised.\n\u003c/p\u003e",
          "module": "Data.Proxy.Kindness",
          "name": "Unapplied",
          "package": "proxy-kindness",
          "source": "src/Data-Proxy-Kindness.html#Unapplied",
          "type": "class"
        },
        "index": {
          "description": "relation between maybe-partially-applied type and that type stripped of all its arguments When the bare type is ambiguous e.g unapplied Proxy an overlapping instances type error will be raised",
          "hierarchy": "Data Proxy Kindness",
          "module": "Data.Proxy.Kindness",
          "name": "Unapplied",
          "package": "proxy-kindness",
          "partial": "Unapplied",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/proxy-kindness/docs/Data-Proxy-Kindness.html#t:Unapplied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Proxy.Kindness",
          "name": "ap",
          "package": "proxy-kindness",
          "signature": "Proxy t -\u003e Proxy a -\u003e Proxy (t a)",
          "source": "src/Data-Proxy-Kindness.html#ap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Proxy Kindness",
          "module": "Data.Proxy.Kindness",
          "name": "ap",
          "normalized": "Proxy a-\u003eProxy b-\u003eProxy(a b)",
          "package": "proxy-kindness",
          "signature": "Proxy t-\u003eProxy a-\u003eProxy(t a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/proxy-kindness/docs/Data-Proxy-Kindness.html#v:ap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFully apply a type \u003ccode\u003et\u003c/code\u003e with polymorphic arguments, yielding \u003ccode\u003etab\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Proxy.Kindness",
          "name": "applied",
          "package": "proxy-kindness",
          "signature": "Proxy t -\u003e Proxy tab",
          "source": "src/Data-Proxy-Kindness.html#applied",
          "type": "method"
        },
        "index": {
          "description": "Fully apply type with polymorphic arguments yielding tab",
          "hierarchy": "Data Proxy Kindness",
          "module": "Data.Proxy.Kindness",
          "name": "applied",
          "normalized": "Proxy a-\u003eProxy b",
          "package": "proxy-kindness",
          "signature": "Proxy t-\u003eProxy tab",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/proxy-kindness/docs/Data-Proxy-Kindness.html#v:applied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForce the first argument to the fully \u003ccode\u003e\u003ca\u003eapplied\u003c/a\u003e\u003c/code\u003e proxy type of the second, e.g.\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003elet x = (Left 1) `asApplied` (Proxy :: Proxy (Either Double))\n\u003c/code\u003e\u003c/strong\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e:t x\n\u003c/code\u003e\u003c/strong\u003ex :: Either Double a\n\u003c/pre\u003e",
          "module": "Data.Proxy.Kindness",
          "name": "asApplied",
          "package": "proxy-kindness",
          "signature": "tab -\u003e Proxy ta -\u003e tab",
          "source": "src/Data-Proxy-Kindness.html#asApplied",
          "type": "function"
        },
        "index": {
          "description": "Force the first argument to the fully applied proxy type of the second e.g let Left asApplied Proxy Proxy Either Double Either Double",
          "hierarchy": "Data Proxy Kindness",
          "module": "Data.Proxy.Kindness",
          "name": "asApplied",
          "normalized": "a-\u003eProxy b-\u003ea",
          "package": "proxy-kindness",
          "partial": "Applied",
          "signature": "tab-\u003eProxy ta-\u003etab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/proxy-kindness/docs/Data-Proxy-Kindness.html#v:asApplied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Proxy.Kindness",
          "name": "unap",
          "package": "proxy-kindness",
          "signature": "Proxy (t a) -\u003e (Proxy t, Proxy a)",
          "source": "src/Data-Proxy-Kindness.html#unap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Proxy Kindness",
          "module": "Data.Proxy.Kindness",
          "name": "unap",
          "normalized": "Proxy(a b)-\u003e(Proxy a,Proxy b)",
          "package": "proxy-kindness",
          "signature": "Proxy(t a)-\u003e(Proxy t,Proxy a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/proxy-kindness/docs/Data-Proxy-Kindness.html#v:unap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a \u003ccode\u003eProxy tab\u003c/code\u003e, strip away all of its arguments, leaving the type\n \u003ccode\u003et\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Proxy.Kindness",
          "name": "unapplied",
          "package": "proxy-kindness",
          "signature": "ptab -\u003e Proxy t",
          "source": "src/Data-Proxy-Kindness.html#unapplied",
          "type": "method"
        },
        "index": {
          "description": "Given Proxy tab strip away all of its arguments leaving the type",
          "hierarchy": "Data Proxy Kindness",
          "module": "Data.Proxy.Kindness",
          "name": "unapplied",
          "normalized": "a-\u003eProxy b",
          "package": "proxy-kindness",
          "signature": "ptab-\u003eProxy t",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/proxy-kindness/docs/Data-Proxy-Kindness.html#v:unapplied"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a proxy value for the completely \u003ccode\u003e\u003ca\u003eunapplied\u003c/a\u003e\u003c/code\u003e type of \u003ccode\u003etab\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Proxy.Kindness",
          "name": "unappliedOf",
          "package": "proxy-kindness",
          "signature": "tab -\u003e Proxy t",
          "source": "src/Data-Proxy-Kindness.html#unappliedOf",
          "type": "function"
        },
        "index": {
          "description": "Create proxy value for the completely unapplied type of tab",
          "hierarchy": "Data Proxy Kindness",
          "module": "Data.Proxy.Kindness",
          "name": "unappliedOf",
          "normalized": "a-\u003eProxy b",
          "package": "proxy-kindness",
          "partial": "Of",
          "signature": "tab-\u003eProxy t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/proxy-kindness/docs/Data-Proxy-Kindness.html#v:unappliedOf"
      }
    }
  ]
]