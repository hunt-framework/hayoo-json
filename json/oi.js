[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#",
      "description": {
        "fct-module": "Data.OI.Combinator",
        "fct-package": "oi",
        "fct-signature": "module",
        "fct-source": "src/Data-OI-Combinator.html",
        "fct-type": "module",
        "title": "Combinator"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Combinator",
        "module": "Data.OI.Combinator",
        "name": "Combinator",
        "normalized": "",
        "package": "oi",
        "partial": "Combinator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#v:-124--47--124-",
      "description": {
        "fct-module": "Data.OI.Combinator",
        "fct-package": "oi",
        "fct-signature": "(a :-\u003e c) -\u003e (c -\u003e b :-\u003e d) -\u003e (a, b) :-\u003e d",
        "fct-source": "src/Data-OI-Combinator.html#%7C%2F%7C",
        "fct-type": "function",
        "title": "(|/|)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Combinator",
        "module": "Data.OI.Combinator",
        "name": "(|/|) |/|",
        "normalized": "(a-\u003eb)-\u003e(b-\u003ec-\u003ed)-\u003e(a,c)-\u003ed",
        "package": "oi",
        "partial": "",
        "signature": "(a-\u003ec)-\u003e(c-\u003eb-\u003ed)-\u003e(a,b)-\u003ed"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#v:-124--62--124-",
      "description": {
        "fct-module": "Data.OI.Combinator",
        "fct-package": "oi",
        "fct-signature": "(a :-\u003e (p, c)) -\u003e (b :-\u003e (p -\u003e d)) -\u003e (a, b) :-\u003e (c, d)",
        "fct-source": "src/Data-OI-Combinator.html#%7C%3E%7C",
        "fct-type": "function",
        "title": "(|\u003e|)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Combinator",
        "module": "Data.OI.Combinator",
        "name": "(|\u003e|) |\u003e|",
        "normalized": "(a-\u003e(b,c))-\u003e(d-\u003e(b-\u003ee))-\u003e(a,d)-\u003e(c,e)",
        "package": "oi",
        "partial": "",
        "signature": "(a-\u003e(p,c))-\u003e(b-\u003e(p-\u003ed))-\u003e(a,b)-\u003e(c,d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#v:-124--62--60--124-",
      "description": {
        "fct-module": "Data.OI.Combinator",
        "fct-package": "oi",
        "fct-signature": "(a :-\u003e (p -\u003e (q, c))) -\u003e (b :-\u003e (q -\u003e (p, d))) -\u003e (a, b) :-\u003e (c, d)",
        "fct-source": "src/Data-OI-Combinator.html#%7C%3E%3C%7C",
        "fct-type": "function",
        "title": "(|\u003e\u003c|)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Combinator",
        "module": "Data.OI.Combinator",
        "name": "(|\u003e\u003c|) |\u003e\u003c|",
        "normalized": "(a-\u003e(b-\u003e(c,d)))-\u003e(e-\u003e(c-\u003e(b,f)))-\u003e(a,e)-\u003e(d,f)",
        "package": "oi",
        "partial": "",
        "signature": "(a-\u003e(p-\u003e(q,c)))-\u003e(b-\u003e(q-\u003e(p,d)))-\u003e(a,b)-\u003e(c,d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#v:-124-:-124-",
      "description": {
        "fct-descr": "\u003cp\u003eConnect two interactions into an interaction\n\u003c/p\u003e",
        "fct-module": "Data.OI.Combinator",
        "fct-package": "oi",
        "fct-signature": "(a :-\u003e c) -\u003e (b :-\u003e d) -\u003e (a, b) :-\u003e (c, d)",
        "fct-source": "src/Data-OI-Combinator.html#%7C%3A%7C",
        "fct-type": "function",
        "title": "(|:|)"
      },
      "index": {
        "description": "Connect two interactions into an interaction",
        "hierarchy": "Data OI Combinator",
        "module": "Data.OI.Combinator",
        "name": "(|:|) |:|",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003e(a,c)-\u003e(b,d)",
        "package": "oi",
        "partial": "",
        "signature": "(a-\u003ec)-\u003e(b-\u003ed)-\u003e(a,b)-\u003e(c,d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#v:choiceOI",
      "description": {
        "fct-module": "Data.OI.Combinator",
        "fct-package": "oi",
        "fct-signature": "(a :-\u003e c) -\u003e (b :-\u003e c) -\u003e Bool -\u003e Either a b :-\u003e c",
        "fct-source": "src/Data-OI-Combinator.html#choiceOI",
        "fct-type": "function",
        "title": "choiceOI"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Combinator",
        "module": "Data.OI.Combinator",
        "name": "choiceOI",
        "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eBool-\u003eEither a c-\u003eb",
        "package": "oi",
        "partial": "OI",
        "signature": "(a-\u003ec)-\u003e(b-\u003ec)-\u003eBool-\u003eEither a b-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#v:choiceOIOn",
      "description": {
        "fct-module": "Data.OI.Combinator",
        "fct-package": "oi",
        "fct-signature": "(t -\u003e a :-\u003e c) -\u003e (t -\u003e b :-\u003e c) -\u003e (t -\u003e Bool) -\u003e t -\u003e Either a b :-\u003e c",
        "fct-source": "src/Data-OI-Combinator.html#choiceOIOn",
        "fct-type": "function",
        "title": "choiceOIOn"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Combinator",
        "module": "Data.OI.Combinator",
        "name": "choiceOIOn",
        "normalized": "(a-\u003eb-\u003ec)-\u003e(a-\u003ed-\u003ec)-\u003e(a-\u003eBool)-\u003ea-\u003eEither b d-\u003ec",
        "package": "oi",
        "partial": "OIOn",
        "signature": "(t-\u003ea-\u003ec)-\u003e(t-\u003eb-\u003ec)-\u003e(t-\u003eBool)-\u003et-\u003eEither a b-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#v:foldOI",
      "description": {
        "fct-descr": "\u003cp\u003eIteration\n\u003c/p\u003e",
        "fct-module": "Data.OI.Combinator",
        "fct-package": "oi",
        "fct-signature": "(a :-\u003e (b -\u003e b)) -\u003e b -\u003e [a] :-\u003e b",
        "fct-source": "src/Data-OI-Combinator.html#foldOI",
        "fct-type": "function",
        "title": "foldOI"
      },
      "index": {
        "description": "Iteration",
        "hierarchy": "Data OI Combinator",
        "module": "Data.OI.Combinator",
        "name": "foldOI",
        "normalized": "(a-\u003e(b-\u003eb))-\u003eb-\u003e[a]-\u003eb",
        "package": "oi",
        "partial": "OI",
        "signature": "(a-\u003e(b-\u003eb))-\u003eb-\u003e[a]-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#v:ifOI",
      "description": {
        "fct-descr": "\u003cp\u003eConditional branching\n\u003c/p\u003e",
        "fct-module": "Data.OI.Combinator",
        "fct-package": "oi",
        "fct-signature": "Bool -\u003e (a :-\u003e c) -\u003e (b :-\u003e c) -\u003e Either a b :-\u003e c",
        "fct-source": "src/Data-OI-Combinator.html#ifOI",
        "fct-type": "function",
        "title": "ifOI"
      },
      "index": {
        "description": "Conditional branching",
        "hierarchy": "Data OI Combinator",
        "module": "Data.OI.Combinator",
        "name": "ifOI",
        "normalized": "Bool-\u003e(a-\u003eb)-\u003e(c-\u003eb)-\u003eEither a c-\u003eb",
        "package": "oi",
        "partial": "OI",
        "signature": "Bool-\u003e(a-\u003ec)-\u003e(b-\u003ec)-\u003eEither a b-\u003ec"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#v:mapOI",
      "description": {
        "fct-module": "Data.OI.Combinator",
        "fct-package": "oi",
        "fct-signature": "(a :-\u003e b) -\u003e [a] :-\u003e [b]",
        "fct-source": "src/Data-OI-Combinator.html#mapOI",
        "fct-type": "function",
        "title": "mapOI"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Combinator",
        "module": "Data.OI.Combinator",
        "name": "mapOI",
        "normalized": "(a-\u003eb)-\u003e[a]-\u003e[b]",
        "package": "oi",
        "partial": "OI",
        "signature": "(a-\u003eb)-\u003e[a]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#v:seqsOI",
      "description": {
        "fct-descr": "\u003cp\u003eSequencing\n\u003c/p\u003e",
        "fct-module": "Data.OI.Combinator",
        "fct-package": "oi",
        "fct-signature": "[a :-\u003e b] -\u003e [a] :-\u003e ()",
        "fct-source": "src/Data-OI-Combinator.html#seqsOI",
        "fct-type": "function",
        "title": "seqsOI"
      },
      "index": {
        "description": "Sequencing",
        "hierarchy": "Data OI Combinator",
        "module": "Data.OI.Combinator",
        "name": "seqsOI",
        "normalized": "[a-\u003eb]-\u003e[a]-\u003e()",
        "package": "oi",
        "partial": "OI",
        "signature": "[a-\u003eb]-\u003e[a]-\u003e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#v:seqsOI-39-",
      "description": {
        "fct-module": "Data.OI.Combinator",
        "fct-package": "oi",
        "fct-signature": "[a] :-\u003e ([a :-\u003e b] -\u003e ())",
        "fct-source": "src/Data-OI-Combinator.html#seqsOI%27",
        "fct-type": "function",
        "title": "seqsOI'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Combinator",
        "module": "Data.OI.Combinator",
        "name": "seqsOI'",
        "normalized": "[a]-\u003e([a-\u003eb]-\u003e())",
        "package": "oi",
        "partial": "OI'",
        "signature": "[a]-\u003e([a-\u003eb]-\u003e())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#v:sequenceOI",
      "description": {
        "fct-module": "Data.OI.Combinator",
        "fct-package": "oi",
        "fct-signature": "[a :-\u003e b] -\u003e [a] :-\u003e [b]",
        "fct-source": "src/Data-OI-Combinator.html#sequenceOI",
        "fct-type": "function",
        "title": "sequenceOI"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Combinator",
        "module": "Data.OI.Combinator",
        "name": "sequenceOI",
        "normalized": "[a-\u003eb]-\u003e[a]-\u003e[b]",
        "package": "oi",
        "partial": "OI",
        "signature": "[a-\u003eb]-\u003e[a]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#v:zipWithOI",
      "description": {
        "fct-module": "Data.OI.Combinator",
        "fct-package": "oi",
        "fct-signature": "(a -\u003e b :-\u003e c) -\u003e [a] -\u003e [b] :-\u003e [c]",
        "fct-source": "src/Data-OI-Combinator.html#zipWithOI",
        "fct-type": "function",
        "title": "zipWithOI"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Combinator",
        "module": "Data.OI.Combinator",
        "name": "zipWithOI",
        "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
        "package": "oi",
        "partial": "With OI",
        "signature": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#v:zipWithOI-39-",
      "description": {
        "fct-module": "Data.OI.Combinator",
        "fct-package": "oi",
        "fct-signature": "(a :-\u003e (b -\u003e c)) -\u003e [a] :-\u003e ([b] -\u003e [c])",
        "fct-source": "src/Data-OI-Combinator.html#zipWithOI%27",
        "fct-type": "function",
        "title": "zipWithOI'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Combinator",
        "module": "Data.OI.Combinator",
        "name": "zipWithOI'",
        "normalized": "(a-\u003e(b-\u003ec))-\u003e[a]-\u003e([b]-\u003e[c])",
        "package": "oi",
        "partial": "With OI'",
        "signature": "(a-\u003e(b-\u003ec))-\u003e[a]-\u003e([b]-\u003e[c])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Force.html#",
      "description": {
        "fct-module": "Data.OI.Force",
        "fct-package": "oi",
        "fct-signature": "module",
        "fct-source": "src/Data-OI-Force.html",
        "fct-type": "module",
        "title": "Force"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Force",
        "module": "Data.OI.Force",
        "name": "Force",
        "normalized": "",
        "package": "oi",
        "partial": "Force",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Force.html#v:force",
      "description": {
        "fct-descr": "\u003cp\u003eforces\n\u003c/p\u003e",
        "fct-module": "Data.OI.Force",
        "fct-package": "oi",
        "fct-signature": "a -\u003e ()",
        "fct-source": "src/Data-OI-Force.html#force",
        "fct-type": "function",
        "title": "force"
      },
      "index": {
        "description": "forces",
        "hierarchy": "Data OI Force",
        "module": "Data.OI.Force",
        "name": "force",
        "normalized": "a-\u003e()",
        "package": "oi",
        "partial": "",
        "signature": "a-\u003e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Force.html#v:force-39-",
      "description": {
        "fct-descr": "\u003cp\u003ereturns forcing invoker\n\u003c/p\u003e",
        "fct-module": "Data.OI.Force",
        "fct-package": "oi",
        "fct-signature": "a -\u003e (a, ())",
        "fct-source": "src/Data-OI-Force.html#force%27",
        "fct-type": "function",
        "title": "force'"
      },
      "index": {
        "description": "returns forcing invoker",
        "hierarchy": "Data OI Force",
        "module": "Data.OI.Force",
        "name": "force'",
        "normalized": "a-\u003e(a,())",
        "package": "oi",
        "partial": "",
        "signature": "a-\u003e(a,())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Force.html#v:forceSeq",
      "description": {
        "fct-descr": "\u003cp\u003eforces sequence\n\u003c/p\u003e",
        "fct-module": "Data.OI.Force",
        "fct-package": "oi",
        "fct-signature": "[a] -\u003e ()",
        "fct-source": "src/Data-OI-Force.html#forceSeq",
        "fct-type": "function",
        "title": "forceSeq"
      },
      "index": {
        "description": "forces sequence",
        "hierarchy": "Data OI Force",
        "module": "Data.OI.Force",
        "name": "forceSeq",
        "normalized": "[a]-\u003e()",
        "package": "oi",
        "partial": "Seq",
        "signature": "[a]-\u003e()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IFun.html#",
      "description": {
        "fct-module": "Data.OI.IFun",
        "fct-package": "oi",
        "fct-signature": "module",
        "fct-source": "src/Data-OI-IFun.html",
        "fct-type": "module",
        "title": "IFun"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI IFun",
        "module": "Data.OI.IFun",
        "name": "IFun",
        "normalized": "",
        "package": "oi",
        "partial": "IFun",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IFun.html#t:IFun",
      "description": {
        "fct-module": "Data.OI.IFun",
        "fct-package": "oi",
        "fct-signature": "type",
        "fct-source": "src/Data-OI-IFun.html#IFun",
        "fct-type": "type",
        "title": "IFun"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI IFun",
        "module": "Data.OI.IFun",
        "name": "IFun",
        "normalized": "",
        "package": "oi",
        "partial": "IFun",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IFun.html#v:-124--45--62--124-",
      "description": {
        "fct-module": "Data.OI.IFun",
        "fct-package": "oi",
        "fct-signature": "IFun p a (b', c) -\u003e IFun q (b', b) d -\u003e IFun (p, q) (a, b) (c, d)",
        "fct-source": "src/Data-OI-IFun.html#%7C-%3E%7C",
        "fct-type": "function",
        "title": "(|-\u003e|)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI IFun",
        "module": "Data.OI.IFun",
        "name": "(|-\u003e|) |-\u003e|",
        "normalized": "IFun a b(c,d)-\u003eIFun e(c,f)g-\u003eIFun(a,e)(b,f)(d,g)",
        "package": "oi",
        "partial": "",
        "signature": "IFun p a(b',c)-\u003eIFun q(b',b)d-\u003eIFun(p,q)(a,b)(c,d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IFun.html#v:-124--60--62--124-",
      "description": {
        "fct-module": "Data.OI.IFun",
        "fct-package": "oi",
        "fct-signature": "IFun p (a', a) (b', c) -\u003e IFun q (b', b) (a', d) -\u003e IFun (p, q) (a, b) (c, d)",
        "fct-source": "src/Data-OI-IFun.html#%7C%3C%3E%7C",
        "fct-type": "function",
        "title": "(|\u003c\u003e|)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI IFun",
        "module": "Data.OI.IFun",
        "name": "(|\u003c\u003e|) |\u003c\u003e|",
        "normalized": "IFun a(b,c)(d,e)-\u003eIFun f(d,g)(b,h)-\u003eIFun(a,f)(c,g)(e,h)",
        "package": "oi",
        "partial": "",
        "signature": "IFun p(a',a)(b',c)-\u003eIFun q(b',b)(a',d)-\u003eIFun(p,q)(a,b)(c,d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IFun.html#v:-124-::-124-",
      "description": {
        "fct-module": "Data.OI.IFun",
        "fct-package": "oi",
        "fct-signature": "IFun p a c -\u003e IFun q b d -\u003e IFun (p, q) (a, b) (c, d)",
        "fct-source": "src/Data-OI-IFun.html#%7C%3A%3A%7C",
        "fct-type": "function",
        "title": "(|::|)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI IFun",
        "module": "Data.OI.IFun",
        "name": "(|::|) |::|",
        "normalized": "IFun a b c-\u003eIFun d e f-\u003eIFun(a,d)(b,e)(c,f)",
        "package": "oi",
        "partial": "",
        "signature": "IFun p a c-\u003eIFun q b d-\u003eIFun(p,q)(a,b)(c,d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IO.html#",
      "description": {
        "fct-module": "Data.OI.IO",
        "fct-package": "oi",
        "fct-signature": "module",
        "fct-source": "src/Data-OI-IO.html",
        "fct-type": "module",
        "title": "IO"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI IO",
        "module": "Data.OI.IO",
        "name": "IO",
        "normalized": "",
        "package": "oi",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IO.html#t::-126--62-",
      "description": {
        "fct-module": "Data.OI.IO",
        "fct-package": "oi",
        "fct-signature": "type",
        "fct-source": "src/Data-OI-IO.html#%3A~%3E",
        "fct-type": "type",
        "title": ":~\u003e"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI IO",
        "module": "Data.OI.IO",
        "name": ":~\u003e",
        "normalized": "",
        "package": "oi",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IO.html#v:getLine",
      "description": {
        "fct-module": "Data.OI.IO",
        "fct-package": "oi",
        "fct-signature": "String :~\u003e String",
        "fct-source": "src/Data-OI-IO.html#getLine",
        "fct-type": "function",
        "title": "getLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI IO",
        "module": "Data.OI.IO",
        "name": "getLine",
        "normalized": "",
        "package": "oi",
        "partial": "Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IO.html#v:hClose",
      "description": {
        "fct-module": "Data.OI.IO",
        "fct-package": "oi",
        "fct-signature": "Handle -\u003e () :~\u003e ()",
        "fct-source": "src/Data-OI-IO.html#hClose",
        "fct-type": "function",
        "title": "hClose"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI IO",
        "module": "Data.OI.IO",
        "name": "hClose",
        "normalized": "Handle-\u003e()()",
        "package": "oi",
        "partial": "Close",
        "signature": "Handle-\u003e()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IO.html#v:hGetLine",
      "description": {
        "fct-module": "Data.OI.IO",
        "fct-package": "oi",
        "fct-signature": "Handle -\u003e String :~\u003e String",
        "fct-source": "src/Data-OI-IO.html#hGetLine",
        "fct-type": "function",
        "title": "hGetLine"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI IO",
        "module": "Data.OI.IO",
        "name": "hGetLine",
        "normalized": "Handle-\u003eString String",
        "package": "oi",
        "partial": "Get Line",
        "signature": "Handle-\u003eString String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IO.html#v:hIsClosed",
      "description": {
        "fct-module": "Data.OI.IO",
        "fct-package": "oi",
        "fct-signature": "Handle -\u003e Bool :~\u003e Bool",
        "fct-source": "src/Data-OI-IO.html#hIsClosed",
        "fct-type": "function",
        "title": "hIsClosed"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI IO",
        "module": "Data.OI.IO",
        "name": "hIsClosed",
        "normalized": "Handle-\u003eBool Bool",
        "package": "oi",
        "partial": "Is Closed",
        "signature": "Handle-\u003eBool Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IO.html#v:hIsEOF",
      "description": {
        "fct-module": "Data.OI.IO",
        "fct-package": "oi",
        "fct-signature": "Handle -\u003e Bool :~\u003e Bool",
        "fct-source": "src/Data-OI-IO.html#hIsEOF",
        "fct-type": "function",
        "title": "hIsEOF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI IO",
        "module": "Data.OI.IO",
        "name": "hIsEOF",
        "normalized": "Handle-\u003eBool Bool",
        "package": "oi",
        "partial": "Is EOF",
        "signature": "Handle-\u003eBool Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IO.html#v:hPutStrLn",
      "description": {
        "fct-module": "Data.OI.IO",
        "fct-package": "oi",
        "fct-signature": "Handle -\u003e String -\u003e () :~\u003e ()",
        "fct-source": "src/Data-OI-IO.html#hPutStrLn",
        "fct-type": "function",
        "title": "hPutStrLn"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI IO",
        "module": "Data.OI.IO",
        "name": "hPutStrLn",
        "normalized": "Handle-\u003eString-\u003e()()",
        "package": "oi",
        "partial": "Put Str Ln",
        "signature": "Handle-\u003eString-\u003e()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IO.html#v:isEOF",
      "description": {
        "fct-module": "Data.OI.IO",
        "fct-package": "oi",
        "fct-signature": "Bool :~\u003e Bool",
        "fct-source": "src/Data-OI-IO.html#isEOF",
        "fct-type": "function",
        "title": "isEOF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI IO",
        "module": "Data.OI.IO",
        "name": "isEOF",
        "normalized": "",
        "package": "oi",
        "partial": "EOF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IO.html#v:openFile",
      "description": {
        "fct-module": "Data.OI.IO",
        "fct-package": "oi",
        "fct-signature": "FilePath -\u003e IOMode -\u003e Handle :~\u003e Handle",
        "fct-source": "src/Data-OI-IO.html#openFile",
        "fct-type": "function",
        "title": "openFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI IO",
        "module": "Data.OI.IO",
        "name": "openFile",
        "normalized": "FilePath-\u003eIOMode-\u003eHandle Handle",
        "package": "oi",
        "partial": "File",
        "signature": "FilePath-\u003eIOMode-\u003eHandle Handle"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IO.html#v:putStrLn",
      "description": {
        "fct-module": "Data.OI.IO",
        "fct-package": "oi",
        "fct-signature": "String -\u003e () :~\u003e ()",
        "fct-source": "src/Data-OI-IO.html#putStrLn",
        "fct-type": "function",
        "title": "putStrLn"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI IO",
        "module": "Data.OI.IO",
        "name": "putStrLn",
        "normalized": "String-\u003e()()",
        "package": "oi",
        "partial": "Str Ln",
        "signature": "String-\u003e()()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#",
      "description": {
        "fct-module": "Data.OI.Internal",
        "fct-package": "oi",
        "fct-signature": "module",
        "fct-source": "src/Data-OI-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Internal",
        "module": "Data.OI.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "oi",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#t::-45--62-",
      "description": {
        "fct-descr": "\u003cp\u003eInteraction (a function from a intermediating type to another type) type\n\u003c/p\u003e",
        "fct-module": "Data.OI.Internal",
        "fct-package": "oi",
        "fct-signature": "type",
        "fct-source": "src/Data-OI-Internal.html#%3A-%3E",
        "fct-type": "type",
        "title": ":-\u003e"
      },
      "index": {
        "description": "Interaction function from intermediating type to another type type",
        "hierarchy": "Data OI Internal",
        "module": "Data.OI.Internal",
        "name": ":-\u003e",
        "normalized": "",
        "package": "oi",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#t:IOResult",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eIOResult\u003c/code\u003e for error handling\n\u003c/p\u003e",
        "fct-module": "Data.OI.Internal",
        "fct-package": "oi",
        "fct-signature": "data",
        "fct-source": "src/Data-OI-Internal.html#IOResult",
        "fct-type": "data",
        "title": "IOResult"
      },
      "index": {
        "description": "IOResult for error handling",
        "hierarchy": "Data OI Internal",
        "module": "Data.OI.Internal",
        "name": "IOResult",
        "normalized": "",
        "package": "oi",
        "partial": "IOResult",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#t:OI",
      "description": {
        "fct-descr": "\u003cp\u003eDatatype for intermediating interaction: \n \u003ccode\u003eOI\u003c/code\u003e has two states (programmer cannot distinguish), non-expressed and exressed.\n `Non-expressed' indicates that no computation is assigned.\n In other words, it's value is never denotated by any expression.\n So, if you refer the value then the process will be suspended \n until other process determins the value.\n Non-expressed value can be determined to become \u003ccode\u003eexpressed\u003c/code\u003e for a value by a expression at most once.\n \u003ccode\u003eExpressed\u003c/code\u003e indicates that some computation is assigned for the value.\n Once expressed, the value never be back to non-expressed nor be changed.\n\u003c/p\u003e",
        "fct-module": "Data.OI.Internal",
        "fct-package": "oi",
        "fct-signature": "data",
        "fct-source": "src/Data-OI-Internal.html#OI",
        "fct-type": "data",
        "title": "OI"
      },
      "index": {
        "description": "Datatype for intermediating interaction OI has two states programmer cannot distinguish non-expressed and exressed Non-expressed indicates that no computation is assigned In other words it value is never denotated by any expression So if you refer the value then the process will be suspended until other process determins the value Non-expressed value can be determined to become expressed for value by expression at most once Expressed indicates that some computation is assigned for the value Once expressed the value never be back to non-expressed nor be changed",
        "hierarchy": "Data OI Internal",
        "module": "Data.OI.Internal",
        "name": "OI",
        "normalized": "",
        "package": "oi",
        "partial": "OI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:-35--35-",
      "description": {
        "fct-descr": "\u003cp\u003eReference operator\n\u003c/p\u003e",
        "fct-module": "Data.OI.Internal",
        "fct-package": "oi",
        "fct-signature": "a -\u003e OI a",
        "fct-source": "src/Data-OI-Internal.html#%23%23",
        "fct-type": "function",
        "title": "(##)"
      },
      "index": {
        "description": "Reference operator",
        "hierarchy": "Data OI Internal",
        "module": "Data.OI.Internal",
        "name": "(##) ##",
        "normalized": "a-\u003eOI a",
        "package": "oi",
        "partial": "",
        "signature": "a-\u003eOI a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:-61-:",
      "description": {
        "fct-descr": "\u003cp\u003eAssign Operator\n\u003c/p\u003e",
        "fct-module": "Data.OI.Internal",
        "fct-package": "oi",
        "fct-signature": "a -\u003e OI a -\u003e a",
        "fct-source": "src/Data-OI-Internal.html#%3D%3A",
        "fct-type": "function",
        "title": "(=:)"
      },
      "index": {
        "description": "Assign Operator",
        "hierarchy": "Data OI Internal",
        "module": "Data.OI.Internal",
        "name": "(=:) =:",
        "normalized": "a-\u003eOI a-\u003ea",
        "package": "oi",
        "partial": "",
        "signature": "a-\u003eOI a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:-63--63-",
      "description": {
        "fct-descr": "\u003cp\u003eDereference operator\n\u003c/p\u003e",
        "fct-module": "Data.OI.Internal",
        "fct-package": "oi",
        "fct-signature": "OI a -\u003e a",
        "fct-source": "src/Data-OI-Internal.html#%3F%3F",
        "fct-type": "function",
        "title": "(??)"
      },
      "index": {
        "description": "Dereference operator",
        "hierarchy": "Data OI Internal",
        "module": "Data.OI.Internal",
        "name": "(??) ??",
        "normalized": "OI a-\u003ea",
        "package": "oi",
        "partial": "",
        "signature": "OI a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:Failure",
      "description": {
        "fct-module": "Data.OI.Internal",
        "fct-package": "oi",
        "fct-signature": "Failure",
        "fct-source": "src/Data-OI-Internal.html#IOResult",
        "fct-type": "function",
        "title": "Failure"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Internal",
        "module": "Data.OI.Internal",
        "name": "Failure",
        "normalized": "",
        "package": "oi",
        "partial": "Failure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:Success",
      "description": {
        "fct-module": "Data.OI.Internal",
        "fct-package": "oi",
        "fct-signature": "Success",
        "fct-source": "src/Data-OI-Internal.html#IOResult",
        "fct-type": "function",
        "title": "Success"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Internal",
        "module": "Data.OI.Internal",
        "name": "Success",
        "normalized": "",
        "package": "oi",
        "partial": "Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:deLeft",
      "description": {
        "fct-module": "Data.OI.Internal",
        "fct-package": "oi",
        "fct-signature": "OI (Either a b) -\u003e Either (OI a) (OI b)",
        "fct-source": "src/Data-OI-Internal.html#deLeft",
        "fct-type": "function",
        "title": "deLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Internal",
        "module": "Data.OI.Internal",
        "name": "deLeft",
        "normalized": "OI(Either a b)-\u003eEither(OI a)(OI b)",
        "package": "oi",
        "partial": "Left",
        "signature": "OI(Either a b)-\u003eEither(OI a)(OI b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:deList",
      "description": {
        "fct-descr": "\u003cp\u003eDecomposer for list\n\u003c/p\u003e",
        "fct-module": "Data.OI.Internal",
        "fct-package": "oi",
        "fct-signature": "OI [a] -\u003e Maybe (OI a, OI [a])",
        "fct-source": "src/Data-OI-Internal.html#deList",
        "fct-type": "function",
        "title": "deList"
      },
      "index": {
        "description": "Decomposer for list",
        "hierarchy": "Data OI Internal",
        "module": "Data.OI.Internal",
        "name": "deList",
        "normalized": "OI[a]-\u003eMaybe(OI a,OI[a])",
        "package": "oi",
        "partial": "List",
        "signature": "OI[a]-\u003eMaybe(OI a,OI[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:dePair",
      "description": {
        "fct-descr": "\u003cp\u003eDecomposer for pair\n\u003c/p\u003e",
        "fct-module": "Data.OI.Internal",
        "fct-package": "oi",
        "fct-signature": "OI (a, b) -\u003e (OI a, OI b)",
        "fct-source": "src/Data-OI-Internal.html#dePair",
        "fct-type": "function",
        "title": "dePair"
      },
      "index": {
        "description": "Decomposer for pair",
        "hierarchy": "Data OI Internal",
        "module": "Data.OI.Internal",
        "name": "dePair",
        "normalized": "OI(a,b)-\u003e(OI a,OI b)",
        "package": "oi",
        "partial": "Pair",
        "signature": "OI(a,b)-\u003e(OI a,OI b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:deRight",
      "description": {
        "fct-module": "Data.OI.Internal",
        "fct-package": "oi",
        "fct-signature": "OI (Either a b) -\u003e Either (OI a) (OI b)",
        "fct-source": "src/Data-OI-Internal.html#deRight",
        "fct-type": "function",
        "title": "deRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Internal",
        "module": "Data.OI.Internal",
        "name": "deRight",
        "normalized": "OI(Either a b)-\u003eEither(OI a)(OI b)",
        "package": "oi",
        "partial": "Right",
        "signature": "OI(Either a b)-\u003eEither(OI a)(OI b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:deTriple",
      "description": {
        "fct-descr": "\u003cp\u003eDecomposer for triple\n\u003c/p\u003e",
        "fct-module": "Data.OI.Internal",
        "fct-package": "oi",
        "fct-signature": "OI (a, b, c) -\u003e (OI a, OI b, OI c)",
        "fct-source": "src/Data-OI-Internal.html#deTriple",
        "fct-type": "function",
        "title": "deTriple"
      },
      "index": {
        "description": "Decomposer for triple",
        "hierarchy": "Data OI Internal",
        "module": "Data.OI.Internal",
        "name": "deTriple",
        "normalized": "OI(a,b,c)-\u003e(OI a,OI b,OI c)",
        "package": "oi",
        "partial": "Triple",
        "signature": "OI(a,b,c)-\u003e(OI a,OI b,OI c)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:deTuple4",
      "description": {
        "fct-descr": "\u003cp\u003eDecomposer for 4-tuple\n\u003c/p\u003e",
        "fct-module": "Data.OI.Internal",
        "fct-package": "oi",
        "fct-signature": "OI (a, b, c, d) -\u003e (OI a, OI b, OI c, OI d)",
        "fct-source": "src/Data-OI-Internal.html#deTuple4",
        "fct-type": "function",
        "title": "deTuple4"
      },
      "index": {
        "description": "Decomposer for tuple",
        "hierarchy": "Data OI Internal",
        "module": "Data.OI.Internal",
        "name": "deTuple4",
        "normalized": "OI(a,b,c,d)-\u003e(OI a,OI b,OI c,OI d)",
        "package": "oi",
        "partial": "Tuple",
        "signature": "OI(a,b,c,d)-\u003e(OI a,OI b,OI c,OI d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:deTuple5",
      "description": {
        "fct-descr": "\u003cp\u003eDecomposer for 5-tuple\n\u003c/p\u003e",
        "fct-module": "Data.OI.Internal",
        "fct-package": "oi",
        "fct-signature": "OI (a, b, c, d, e) -\u003e (OI a, OI b, OI c, OI d, OI e)",
        "fct-source": "src/Data-OI-Internal.html#deTuple5",
        "fct-type": "function",
        "title": "deTuple5"
      },
      "index": {
        "description": "Decomposer for tuple",
        "hierarchy": "Data OI Internal",
        "module": "Data.OI.Internal",
        "name": "deTuple5",
        "normalized": "OI(a,b,c,d,e)-\u003e(OI a,OI b,OI c,OI d,OI e)",
        "package": "oi",
        "partial": "Tuple",
        "signature": "OI(a,b,c,d,e)-\u003e(OI a,OI b,OI c,OI d,OI e)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:deTuple6",
      "description": {
        "fct-descr": "\u003cp\u003eDecomposer for 6-tuple\n\u003c/p\u003e",
        "fct-module": "Data.OI.Internal",
        "fct-package": "oi",
        "fct-signature": "OI (a, b, c, d, e, f) -\u003e (OI a, OI b, OI c, OI d, OI e, OI f)",
        "fct-source": "src/Data-OI-Internal.html#deTuple6",
        "fct-type": "function",
        "title": "deTuple6"
      },
      "index": {
        "description": "Decomposer for tuple",
        "hierarchy": "Data OI Internal",
        "module": "Data.OI.Internal",
        "name": "deTuple6",
        "normalized": "OI(a,b,c,d,e,f)-\u003e(OI a,OI b,OI c,OI d,OI e,OI f)",
        "package": "oi",
        "partial": "Tuple",
        "signature": "OI(a,b,c,d,e,f)-\u003e(OI a,OI b,OI c,OI d,OI e,OI f)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:deTuple7",
      "description": {
        "fct-descr": "\u003cp\u003eDecomposer for 7-tuple\n\u003c/p\u003e",
        "fct-module": "Data.OI.Internal",
        "fct-package": "oi",
        "fct-signature": "OI (a, b, c, d, e, f, g) -\u003e (OI a, OI b, OI c, OI d, OI e, OI f, OI g)",
        "fct-source": "src/Data-OI-Internal.html#deTuple7",
        "fct-type": "function",
        "title": "deTuple7"
      },
      "index": {
        "description": "Decomposer for tuple",
        "hierarchy": "Data OI Internal",
        "module": "Data.OI.Internal",
        "name": "deTuple7",
        "normalized": "OI(a,b,c,d,e,f,g)-\u003e(OI a,OI b,OI c,OI d,OI e,OI f,OI g)",
        "package": "oi",
        "partial": "Tuple",
        "signature": "OI(a,b,c,d,e,f,g)-\u003e(OI a,OI b,OI c,OI d,OI e,OI f,OI g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:errmsg",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.OI.Internal",
        "fct-package": "oi",
        "fct-signature": "String",
        "fct-source": "src/Data-OI-Internal.html#IOResult",
        "fct-type": "function",
        "title": "errmsg"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Internal",
        "module": "Data.OI.Internal",
        "name": "errmsg",
        "normalized": "",
        "package": "oi",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:iooi",
      "description": {
        "fct-descr": "\u003cp\u003eConvert IO to interaction\n\u003c/p\u003e",
        "fct-module": "Data.OI.Internal",
        "fct-package": "oi",
        "fct-signature": "IO a -\u003e OI a -\u003e a",
        "fct-source": "src/Data-OI-Internal.html#iooi",
        "fct-type": "function",
        "title": "iooi"
      },
      "index": {
        "description": "Convert IO to interaction",
        "hierarchy": "Data OI Internal",
        "module": "Data.OI.Internal",
        "name": "iooi",
        "normalized": "IO a-\u003eOI a-\u003ea",
        "package": "oi",
        "partial": "",
        "signature": "IO a-\u003eOI a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:iooi-39-",
      "description": {
        "fct-module": "Data.OI.Internal",
        "fct-package": "oi",
        "fct-signature": "IO a -\u003e OI (IOResult a) -\u003e IOResult a",
        "fct-source": "src/Data-OI-Internal.html#iooi%27",
        "fct-type": "function",
        "title": "iooi'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Internal",
        "module": "Data.OI.Internal",
        "name": "iooi'",
        "normalized": "IO a-\u003eOI(IOResult a)-\u003eIOResult a",
        "package": "oi",
        "partial": "",
        "signature": "IO a-\u003eOI(IOResult a)-\u003eIOResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:result",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.OI.Internal",
        "fct-package": "oi",
        "fct-signature": "a",
        "fct-source": "src/Data-OI-Internal.html#IOResult",
        "fct-type": "function",
        "title": "result"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Internal",
        "module": "Data.OI.Internal",
        "name": "result",
        "normalized": "",
        "package": "oi",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:runInteraction",
      "description": {
        "fct-descr": "\u003cp\u003eDrive interaction\n\u003c/p\u003e",
        "fct-module": "Data.OI.Internal",
        "fct-package": "oi",
        "fct-signature": "(OI a -\u003e b) -\u003e IO b",
        "fct-source": "src/Data-OI-Internal.html#runInteraction",
        "fct-type": "function",
        "title": "runInteraction"
      },
      "index": {
        "description": "Drive interaction",
        "hierarchy": "Data OI Internal",
        "module": "Data.OI.Internal",
        "name": "runInteraction",
        "normalized": "(OI a-\u003eb)-\u003eIO b",
        "package": "oi",
        "partial": "Interaction",
        "signature": "(OI a-\u003eb)-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Merge.html#",
      "description": {
        "fct-module": "Data.OI.Merge",
        "fct-package": "oi",
        "fct-signature": "module",
        "fct-source": "src/Data-OI-Merge.html",
        "fct-type": "module",
        "title": "Merge"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Merge",
        "module": "Data.OI.Merge",
        "name": "Merge",
        "normalized": "",
        "package": "oi",
        "partial": "Merge",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Merge.html#v:mergeOI",
      "description": {
        "fct-module": "Data.OI.Merge",
        "fct-package": "oi",
        "fct-signature": "[a] -\u003e [a] -\u003e [a] :-\u003e [a]",
        "fct-source": "src/Data-OI-Merge.html#mergeOI",
        "fct-type": "function",
        "title": "mergeOI"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Merge",
        "module": "Data.OI.Merge",
        "name": "mergeOI",
        "normalized": "[a]-\u003e[a]-\u003e[a]-\u003e[a]",
        "package": "oi",
        "partial": "OI",
        "signature": "[a]-\u003e[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Merge.html#v:nmergeOI",
      "description": {
        "fct-module": "Data.OI.Merge",
        "fct-package": "oi",
        "fct-signature": "[[a]] -\u003e [a] :-\u003e [a]",
        "fct-source": "src/Data-OI-Merge.html#nmergeOI",
        "fct-type": "function",
        "title": "nmergeOI"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Merge",
        "module": "Data.OI.Merge",
        "name": "nmergeOI",
        "normalized": "[[a]]-\u003e[a]-\u003e[a]",
        "package": "oi",
        "partial": "OI",
        "signature": "[[a]]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#",
      "description": {
        "fct-module": "Data.OI.Resource",
        "fct-package": "oi",
        "fct-signature": "module",
        "fct-source": "src/Data-OI-Resource.html",
        "fct-type": "module",
        "title": "Resource"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Resource",
        "module": "Data.OI.Resource",
        "name": "Resource",
        "normalized": "",
        "package": "oi",
        "partial": "Resource",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#t:Resource",
      "description": {
        "fct-module": "Data.OI.Resource",
        "fct-package": "oi",
        "fct-signature": "data",
        "fct-source": "src/Data-OI-Resource.html#Resource",
        "fct-type": "data",
        "title": "Resource"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Resource",
        "module": "Data.OI.Resource",
        "name": "Resource",
        "normalized": "",
        "package": "oi",
        "partial": "Resource",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#v:Resource",
      "description": {
        "fct-module": "Data.OI.Resource",
        "fct-package": "oi",
        "fct-signature": "Resource",
        "fct-source": "src/Data-OI-Resource.html#Resource",
        "fct-type": "function",
        "title": "Resource"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Resource",
        "module": "Data.OI.Resource",
        "name": "Resource",
        "normalized": "",
        "package": "oi",
        "partial": "Resource",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#v:filterR",
      "description": {
        "fct-module": "Data.OI.Resource",
        "fct-package": "oi",
        "fct-signature": "(a -\u003e Bool) -\u003e IOResult (Resource a) -\u003e [a]",
        "fct-source": "src/Data-OI-Resource.html#filterR",
        "fct-type": "function",
        "title": "filterR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Resource",
        "module": "Data.OI.Resource",
        "name": "filterR",
        "normalized": "(a-\u003eBool)-\u003eIOResult(Resource a)-\u003e[a]",
        "package": "oi",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eIOResult(Resource a)-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#v:filterR-39-",
      "description": {
        "fct-module": "Data.OI.Resource",
        "fct-package": "oi",
        "fct-signature": "(a -\u003e Bool) -\u003e Resource a -\u003e [a]",
        "fct-source": "src/Data-OI-Resource.html#filterR%27",
        "fct-type": "function",
        "title": "filterR'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Resource",
        "module": "Data.OI.Resource",
        "name": "filterR'",
        "normalized": "(a-\u003eBool)-\u003eResource a-\u003e[a]",
        "package": "oi",
        "partial": "R'",
        "signature": "(a-\u003eBool)-\u003eResource a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#v:inFileResource",
      "description": {
        "fct-module": "Data.OI.Resource",
        "fct-package": "oi",
        "fct-signature": "FilePath -\u003e IOResult (Resource String) :-\u003e IOResult (Resource String)",
        "fct-source": "src/Data-OI-Resource.html#inFileResource",
        "fct-type": "function",
        "title": "inFileResource"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Resource",
        "module": "Data.OI.Resource",
        "name": "inFileResource",
        "normalized": "FilePath-\u003eIOResult(Resource String)-\u003eIOResult(Resource String)",
        "package": "oi",
        "partial": "File Resource",
        "signature": "FilePath-\u003eIOResult(Resource String)-\u003eIOResult(Resource String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#v:mapR",
      "description": {
        "fct-module": "Data.OI.Resource",
        "fct-package": "oi",
        "fct-signature": "(a -\u003e b) -\u003e IOResult (Resource a) -\u003e [b]",
        "fct-source": "src/Data-OI-Resource.html#mapR",
        "fct-type": "function",
        "title": "mapR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Resource",
        "module": "Data.OI.Resource",
        "name": "mapR",
        "normalized": "(a-\u003eb)-\u003eIOResult(Resource a)-\u003e[b]",
        "package": "oi",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eIOResult(Resource a)-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#v:mapR-39-",
      "description": {
        "fct-module": "Data.OI.Resource",
        "fct-package": "oi",
        "fct-signature": "(a -\u003e b) -\u003e Resource a -\u003e [b]",
        "fct-source": "src/Data-OI-Resource.html#mapR%27",
        "fct-type": "function",
        "title": "mapR'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Resource",
        "module": "Data.OI.Resource",
        "name": "mapR'",
        "normalized": "(a-\u003eb)-\u003eResource a-\u003e[b]",
        "package": "oi",
        "partial": "R'",
        "signature": "(a-\u003eb)-\u003eResource a-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#v:outFileResource",
      "description": {
        "fct-module": "Data.OI.Resource",
        "fct-package": "oi",
        "fct-signature": "FilePath -\u003e [String] -\u003e IOResult (Resource ()) :-\u003e IOResult (Resource ())",
        "fct-source": "src/Data-OI-Resource.html#outFileResource",
        "fct-type": "function",
        "title": "outFileResource"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Resource",
        "module": "Data.OI.Resource",
        "name": "outFileResource",
        "normalized": "FilePath-\u003e[String]-\u003eIOResult(Resource())-\u003eIOResult(Resource())",
        "package": "oi",
        "partial": "File Resource",
        "signature": "FilePath-\u003e[String]-\u003eIOResult(Resource())-\u003eIOResult(Resource())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#v:release",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.OI.Resource",
        "fct-package": "oi",
        "fct-signature": "()",
        "fct-source": "src/Data-OI-Resource.html#Resource",
        "fct-type": "function",
        "title": "release"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Resource",
        "module": "Data.OI.Resource",
        "name": "release",
        "normalized": "()",
        "package": "oi",
        "partial": "",
        "signature": "()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#v:stream",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.OI.Resource",
        "fct-package": "oi",
        "fct-signature": "[IOResult a]",
        "fct-source": "src/Data-OI-Resource.html#Resource",
        "fct-type": "function",
        "title": "stream"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Resource",
        "module": "Data.OI.Resource",
        "name": "stream",
        "normalized": "[IOResult a]",
        "package": "oi",
        "partial": "",
        "signature": "[IOResult a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#v:takeR",
      "description": {
        "fct-module": "Data.OI.Resource",
        "fct-package": "oi",
        "fct-signature": "i -\u003e IOResult (Resource a) -\u003e [a]",
        "fct-source": "src/Data-OI-Resource.html#takeR",
        "fct-type": "function",
        "title": "takeR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Resource",
        "module": "Data.OI.Resource",
        "name": "takeR",
        "normalized": "a-\u003eIOResult(Resource b)-\u003e[b]",
        "package": "oi",
        "partial": "",
        "signature": "i-\u003eIOResult(Resource a)-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#v:takeR-39-",
      "description": {
        "fct-module": "Data.OI.Resource",
        "fct-package": "oi",
        "fct-signature": "i -\u003e Resource a -\u003e [a]",
        "fct-source": "src/Data-OI-Resource.html#takeR%27",
        "fct-type": "function",
        "title": "takeR'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Resource",
        "module": "Data.OI.Resource",
        "name": "takeR'",
        "normalized": "a-\u003eResource b-\u003e[b]",
        "package": "oi",
        "partial": "R'",
        "signature": "i-\u003eResource a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#v:takeWhileR",
      "description": {
        "fct-module": "Data.OI.Resource",
        "fct-package": "oi",
        "fct-signature": "(a -\u003e Bool) -\u003e IOResult (Resource a) -\u003e [a]",
        "fct-source": "src/Data-OI-Resource.html#takeWhileR",
        "fct-type": "function",
        "title": "takeWhileR"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Resource",
        "module": "Data.OI.Resource",
        "name": "takeWhileR",
        "normalized": "(a-\u003eBool)-\u003eIOResult(Resource a)-\u003e[a]",
        "package": "oi",
        "partial": "While",
        "signature": "(a-\u003eBool)-\u003eIOResult(Resource a)-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#v:takeWhileR-39-",
      "description": {
        "fct-module": "Data.OI.Resource",
        "fct-package": "oi",
        "fct-signature": "(a -\u003e Bool) -\u003e Resource a -\u003e [a]",
        "fct-source": "src/Data-OI-Resource.html#takeWhileR%27",
        "fct-type": "function",
        "title": "takeWhileR'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI Resource",
        "module": "Data.OI.Resource",
        "name": "takeWhileR'",
        "normalized": "(a-\u003eBool)-\u003eResource a-\u003e[a]",
        "package": "oi",
        "partial": "While R'",
        "signature": "(a-\u003eBool)-\u003eResource a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-System.html#",
      "description": {
        "fct-module": "Data.OI.System",
        "fct-package": "oi",
        "fct-signature": "module",
        "fct-source": "src/Data-OI-System.html",
        "fct-type": "module",
        "title": "System"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI System",
        "module": "Data.OI.System",
        "name": "System",
        "normalized": "",
        "package": "oi",
        "partial": "System",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-System.html#v:args",
      "description": {
        "fct-module": "Data.OI.System",
        "fct-package": "oi",
        "fct-signature": "[String] :-\u003e [String]",
        "fct-source": "src/Data-OI-System.html#args",
        "fct-type": "function",
        "title": "args"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI System",
        "module": "Data.OI.System",
        "name": "args",
        "normalized": "[String]-\u003e[String]",
        "package": "oi",
        "partial": "",
        "signature": "[String]-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-System.html#v:environment",
      "description": {
        "fct-module": "Data.OI.System",
        "fct-package": "oi",
        "fct-signature": "[(String, String)] :-\u003e [(String, String)]",
        "fct-source": "src/Data-OI-System.html#environment",
        "fct-type": "function",
        "title": "environment"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI System",
        "module": "Data.OI.System",
        "name": "environment",
        "normalized": "[(String,String)]-\u003e[(String,String)]",
        "package": "oi",
        "partial": "",
        "signature": "[(String,String)]-\u003e[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-System.html#v:progName",
      "description": {
        "fct-module": "Data.OI.System",
        "fct-package": "oi",
        "fct-signature": "String :-\u003e String",
        "fct-source": "src/Data-OI-System.html#progName",
        "fct-type": "function",
        "title": "progName"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI System",
        "module": "Data.OI.System",
        "name": "progName",
        "normalized": "String-\u003eString",
        "package": "oi",
        "partial": "Name",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI.html#",
      "description": {
        "fct-module": "Data.OI",
        "fct-package": "oi",
        "fct-signature": "module",
        "fct-source": "src/Data-OI.html",
        "fct-type": "module",
        "title": "OI"
      },
      "index": {
        "description": "",
        "hierarchy": "Data OI",
        "module": "Data.OI",
        "name": "OI",
        "normalized": "",
        "package": "oi",
        "partial": "OI",
        "signature": ""
      }
    }
  }
]