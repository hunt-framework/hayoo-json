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
        "word": "oi"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Combinator",
          "name": "Combinator",
          "package": "oi",
          "source": "src/Data-OI-Combinator.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data OI Combinator",
          "module": "Data.OI.Combinator",
          "name": "Combinator",
          "package": "oi",
          "partial": "Combinator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Combinator",
          "name": "(|/|)",
          "package": "oi",
          "signature": "(a :-\u003e c) -\u003e (c -\u003e b :-\u003e d) -\u003e (a, b) :-\u003e d",
          "source": "src/Data-OI-Combinator.html#%7C%2F%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Combinator",
          "module": "Data.OI.Combinator",
          "name": "(|/|) |/|",
          "normalized": "(a-\u003eb)-\u003e(b-\u003ec-\u003ed)-\u003e(a,c)-\u003ed",
          "package": "oi",
          "signature": "(a-\u003ec)-\u003e(c-\u003eb-\u003ed)-\u003e(a,b)-\u003ed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#v:-124--47--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Combinator",
          "name": "(|\u003e|)",
          "package": "oi",
          "signature": "(a :-\u003e (p, c)) -\u003e (b :-\u003e (p -\u003e d)) -\u003e (a, b) :-\u003e (c, d)",
          "source": "src/Data-OI-Combinator.html#%7C%3E%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Combinator",
          "module": "Data.OI.Combinator",
          "name": "(|\u003e|) |\u003e|",
          "normalized": "(a-\u003e(b,c))-\u003e(d-\u003e(b-\u003ee))-\u003e(a,d)-\u003e(c,e)",
          "package": "oi",
          "signature": "(a-\u003e(p,c))-\u003e(b-\u003e(p-\u003ed))-\u003e(a,b)-\u003e(c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#v:-124--62--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Combinator",
          "name": "(|\u003e\u003c|)",
          "package": "oi",
          "signature": "(a :-\u003e (p -\u003e (q, c))) -\u003e (b :-\u003e (q -\u003e (p, d))) -\u003e (a, b) :-\u003e (c, d)",
          "source": "src/Data-OI-Combinator.html#%7C%3E%3C%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Combinator",
          "module": "Data.OI.Combinator",
          "name": "(|\u003e\u003c|) |\u003e\u003c|",
          "normalized": "(a-\u003e(b-\u003e(c,d)))-\u003e(e-\u003e(c-\u003e(b,f)))-\u003e(a,e)-\u003e(d,f)",
          "package": "oi",
          "signature": "(a-\u003e(p-\u003e(q,c)))-\u003e(b-\u003e(q-\u003e(p,d)))-\u003e(a,b)-\u003e(c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#v:-124--62--60--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect two interactions into an interaction\n\u003c/p\u003e",
          "module": "Data.OI.Combinator",
          "name": "(|:|)",
          "package": "oi",
          "signature": "(a :-\u003e c) -\u003e (b :-\u003e d) -\u003e (a, b) :-\u003e (c, d)",
          "source": "src/Data-OI-Combinator.html#%7C%3A%7C",
          "type": "function"
        },
        "index": {
          "description": "Connect two interactions into an interaction",
          "hierarchy": "Data OI Combinator",
          "module": "Data.OI.Combinator",
          "name": "(|:|) |:|",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003e(a,c)-\u003e(b,d)",
          "package": "oi",
          "signature": "(a-\u003ec)-\u003e(b-\u003ed)-\u003e(a,b)-\u003e(c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#v:-124-:-124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Combinator",
          "name": "choiceOI",
          "package": "oi",
          "signature": "(a :-\u003e c) -\u003e (b :-\u003e c) -\u003e Bool -\u003e Either a b :-\u003e c",
          "source": "src/Data-OI-Combinator.html#choiceOI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Combinator",
          "module": "Data.OI.Combinator",
          "name": "choiceOI",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eBool-\u003eEither a c-\u003eb",
          "package": "oi",
          "partial": "OI",
          "signature": "(a-\u003ec)-\u003e(b-\u003ec)-\u003eBool-\u003eEither a b-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#v:choiceOI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Combinator",
          "name": "choiceOIOn",
          "package": "oi",
          "signature": "(t -\u003e a :-\u003e c) -\u003e (t -\u003e b :-\u003e c) -\u003e (t -\u003e Bool) -\u003e t -\u003e Either a b :-\u003e c",
          "source": "src/Data-OI-Combinator.html#choiceOIOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Combinator",
          "module": "Data.OI.Combinator",
          "name": "choiceOIOn",
          "normalized": "(a-\u003eb-\u003ec)-\u003e(a-\u003ed-\u003ec)-\u003e(a-\u003eBool)-\u003ea-\u003eEither b d-\u003ec",
          "package": "oi",
          "partial": "OIOn",
          "signature": "(t-\u003ea-\u003ec)-\u003e(t-\u003eb-\u003ec)-\u003e(t-\u003eBool)-\u003et-\u003eEither a b-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#v:choiceOIOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIteration\n\u003c/p\u003e",
          "module": "Data.OI.Combinator",
          "name": "foldOI",
          "package": "oi",
          "signature": "(a :-\u003e (b -\u003e b)) -\u003e b -\u003e [a] :-\u003e b",
          "source": "src/Data-OI-Combinator.html#foldOI",
          "type": "function"
        },
        "index": {
          "description": "Iteration",
          "hierarchy": "Data OI Combinator",
          "module": "Data.OI.Combinator",
          "name": "foldOI",
          "normalized": "(a-\u003e(b-\u003eb))-\u003eb-\u003e[a]-\u003eb",
          "package": "oi",
          "partial": "OI",
          "signature": "(a-\u003e(b-\u003eb))-\u003eb-\u003e[a]-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#v:foldOI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConditional branching\n\u003c/p\u003e",
          "module": "Data.OI.Combinator",
          "name": "ifOI",
          "package": "oi",
          "signature": "Bool -\u003e (a :-\u003e c) -\u003e (b :-\u003e c) -\u003e Either a b :-\u003e c",
          "source": "src/Data-OI-Combinator.html#ifOI",
          "type": "function"
        },
        "index": {
          "description": "Conditional branching",
          "hierarchy": "Data OI Combinator",
          "module": "Data.OI.Combinator",
          "name": "ifOI",
          "normalized": "Bool-\u003e(a-\u003eb)-\u003e(c-\u003eb)-\u003eEither a c-\u003eb",
          "package": "oi",
          "partial": "OI",
          "signature": "Bool-\u003e(a-\u003ec)-\u003e(b-\u003ec)-\u003eEither a b-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#v:ifOI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Combinator",
          "name": "mapOI",
          "package": "oi",
          "signature": "(a :-\u003e b) -\u003e [a] :-\u003e [b]",
          "source": "src/Data-OI-Combinator.html#mapOI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Combinator",
          "module": "Data.OI.Combinator",
          "name": "mapOI",
          "normalized": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "package": "oi",
          "partial": "OI",
          "signature": "(a-\u003eb)-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#v:mapOI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequencing\n\u003c/p\u003e",
          "module": "Data.OI.Combinator",
          "name": "seqsOI",
          "package": "oi",
          "signature": "[a :-\u003e b] -\u003e [a] :-\u003e ()",
          "source": "src/Data-OI-Combinator.html#seqsOI",
          "type": "function"
        },
        "index": {
          "description": "Sequencing",
          "hierarchy": "Data OI Combinator",
          "module": "Data.OI.Combinator",
          "name": "seqsOI",
          "normalized": "[a-\u003eb]-\u003e[a]-\u003e()",
          "package": "oi",
          "partial": "OI",
          "signature": "[a-\u003eb]-\u003e[a]-\u003e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#v:seqsOI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Combinator",
          "name": "seqsOI'",
          "package": "oi",
          "signature": "[a] :-\u003e ([a :-\u003e b] -\u003e ())",
          "source": "src/Data-OI-Combinator.html#seqsOI%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Combinator",
          "module": "Data.OI.Combinator",
          "name": "seqsOI'",
          "normalized": "[a]-\u003e([a-\u003eb]-\u003e())",
          "package": "oi",
          "partial": "OI'",
          "signature": "[a]-\u003e([a-\u003eb]-\u003e())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#v:seqsOI-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Combinator",
          "name": "sequenceOI",
          "package": "oi",
          "signature": "[a :-\u003e b] -\u003e [a] :-\u003e [b]",
          "source": "src/Data-OI-Combinator.html#sequenceOI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Combinator",
          "module": "Data.OI.Combinator",
          "name": "sequenceOI",
          "normalized": "[a-\u003eb]-\u003e[a]-\u003e[b]",
          "package": "oi",
          "partial": "OI",
          "signature": "[a-\u003eb]-\u003e[a]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#v:sequenceOI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Combinator",
          "name": "zipWithOI",
          "package": "oi",
          "signature": "(a -\u003e b :-\u003e c) -\u003e [a] -\u003e [b] :-\u003e [c]",
          "source": "src/Data-OI-Combinator.html#zipWithOI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Combinator",
          "module": "Data.OI.Combinator",
          "name": "zipWithOI",
          "normalized": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "package": "oi",
          "partial": "With OI",
          "signature": "(a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#v:zipWithOI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Combinator",
          "name": "zipWithOI'",
          "package": "oi",
          "signature": "(a :-\u003e (b -\u003e c)) -\u003e [a] :-\u003e ([b] -\u003e [c])",
          "source": "src/Data-OI-Combinator.html#zipWithOI%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Combinator",
          "module": "Data.OI.Combinator",
          "name": "zipWithOI'",
          "normalized": "(a-\u003e(b-\u003ec))-\u003e[a]-\u003e([b]-\u003e[c])",
          "package": "oi",
          "partial": "With OI'",
          "signature": "(a-\u003e(b-\u003ec))-\u003e[a]-\u003e([b]-\u003e[c])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Combinator.html#v:zipWithOI-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Force",
          "name": "Force",
          "package": "oi",
          "source": "src/Data-OI-Force.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data OI Force",
          "module": "Data.OI.Force",
          "name": "Force",
          "package": "oi",
          "partial": "Force",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Force.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eforces\n\u003c/p\u003e",
          "module": "Data.OI.Force",
          "name": "force",
          "package": "oi",
          "signature": "a -\u003e ()",
          "source": "src/Data-OI-Force.html#force",
          "type": "function"
        },
        "index": {
          "description": "forces",
          "hierarchy": "Data OI Force",
          "module": "Data.OI.Force",
          "name": "force",
          "normalized": "a-\u003e()",
          "package": "oi",
          "signature": "a-\u003e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Force.html#v:force"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereturns forcing invoker\n\u003c/p\u003e",
          "module": "Data.OI.Force",
          "name": "force'",
          "package": "oi",
          "signature": "a -\u003e (a, ())",
          "source": "src/Data-OI-Force.html#force%27",
          "type": "function"
        },
        "index": {
          "description": "returns forcing invoker",
          "hierarchy": "Data OI Force",
          "module": "Data.OI.Force",
          "name": "force'",
          "normalized": "a-\u003e(a,())",
          "package": "oi",
          "signature": "a-\u003e(a,())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Force.html#v:force-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eforces sequence\n\u003c/p\u003e",
          "module": "Data.OI.Force",
          "name": "forceSeq",
          "package": "oi",
          "signature": "[a] -\u003e ()",
          "source": "src/Data-OI-Force.html#forceSeq",
          "type": "function"
        },
        "index": {
          "description": "forces sequence",
          "hierarchy": "Data OI Force",
          "module": "Data.OI.Force",
          "name": "forceSeq",
          "normalized": "[a]-\u003e()",
          "package": "oi",
          "partial": "Seq",
          "signature": "[a]-\u003e()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Force.html#v:forceSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.IFun",
          "name": "IFun",
          "package": "oi",
          "source": "src/Data-OI-IFun.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data OI IFun",
          "module": "Data.OI.IFun",
          "name": "IFun",
          "package": "oi",
          "partial": "IFun",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IFun.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.IFun",
          "name": "IFun",
          "package": "oi",
          "source": "src/Data-OI-IFun.html#IFun",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data OI IFun",
          "module": "Data.OI.IFun",
          "name": "IFun",
          "package": "oi",
          "partial": "IFun",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IFun.html#t:IFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.IFun",
          "name": "(|-\u003e|)",
          "package": "oi",
          "signature": "IFun p a (b', c) -\u003e IFun q (b', b) d -\u003e IFun (p, q) (a, b) (c, d)",
          "source": "src/Data-OI-IFun.html#%7C-%3E%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI IFun",
          "module": "Data.OI.IFun",
          "name": "(|-\u003e|) |-\u003e|",
          "normalized": "IFun a b(c,d)-\u003eIFun e(c,f)g-\u003eIFun(a,e)(b,f)(d,g)",
          "package": "oi",
          "signature": "IFun p a(b',c)-\u003eIFun q(b',b)d-\u003eIFun(p,q)(a,b)(c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IFun.html#v:-124--45--62--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.IFun",
          "name": "(|\u003c\u003e|)",
          "package": "oi",
          "signature": "IFun p (a', a) (b', c) -\u003e IFun q (b', b) (a', d) -\u003e IFun (p, q) (a, b) (c, d)",
          "source": "src/Data-OI-IFun.html#%7C%3C%3E%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI IFun",
          "module": "Data.OI.IFun",
          "name": "(|\u003c\u003e|) |\u003c\u003e|",
          "normalized": "IFun a(b,c)(d,e)-\u003eIFun f(d,g)(b,h)-\u003eIFun(a,f)(c,g)(e,h)",
          "package": "oi",
          "signature": "IFun p(a',a)(b',c)-\u003eIFun q(b',b)(a',d)-\u003eIFun(p,q)(a,b)(c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IFun.html#v:-124--60--62--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.IFun",
          "name": "(|::|)",
          "package": "oi",
          "signature": "IFun p a c -\u003e IFun q b d -\u003e IFun (p, q) (a, b) (c, d)",
          "source": "src/Data-OI-IFun.html#%7C%3A%3A%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI IFun",
          "module": "Data.OI.IFun",
          "name": "(|::|) |::|",
          "normalized": "IFun a b c-\u003eIFun d e f-\u003eIFun(a,d)(b,e)(c,f)",
          "package": "oi",
          "signature": "IFun p a c-\u003eIFun q b d-\u003eIFun(p,q)(a,b)(c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IFun.html#v:-124-::-124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.IO",
          "name": "IO",
          "package": "oi",
          "source": "src/Data-OI-IO.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data OI IO",
          "module": "Data.OI.IO",
          "name": "IO",
          "package": "oi",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.IO",
          "name": ":~\u003e",
          "package": "oi",
          "source": "src/Data-OI-IO.html#%3A~%3E",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data OI IO",
          "module": "Data.OI.IO",
          "name": ":~\u003e",
          "package": "oi",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IO.html#t::-126--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.IO",
          "name": "getLine",
          "package": "oi",
          "signature": "String :~\u003e String",
          "source": "src/Data-OI-IO.html#getLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI IO",
          "module": "Data.OI.IO",
          "name": "getLine",
          "package": "oi",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IO.html#v:getLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.IO",
          "name": "hClose",
          "package": "oi",
          "signature": "Handle -\u003e () :~\u003e ()",
          "source": "src/Data-OI-IO.html#hClose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI IO",
          "module": "Data.OI.IO",
          "name": "hClose",
          "normalized": "Handle-\u003e()()",
          "package": "oi",
          "partial": "Close",
          "signature": "Handle-\u003e()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IO.html#v:hClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.IO",
          "name": "hGetLine",
          "package": "oi",
          "signature": "Handle -\u003e String :~\u003e String",
          "source": "src/Data-OI-IO.html#hGetLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI IO",
          "module": "Data.OI.IO",
          "name": "hGetLine",
          "normalized": "Handle-\u003eString String",
          "package": "oi",
          "partial": "Get Line",
          "signature": "Handle-\u003eString String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IO.html#v:hGetLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.IO",
          "name": "hIsClosed",
          "package": "oi",
          "signature": "Handle -\u003e Bool :~\u003e Bool",
          "source": "src/Data-OI-IO.html#hIsClosed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI IO",
          "module": "Data.OI.IO",
          "name": "hIsClosed",
          "normalized": "Handle-\u003eBool Bool",
          "package": "oi",
          "partial": "Is Closed",
          "signature": "Handle-\u003eBool Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IO.html#v:hIsClosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.IO",
          "name": "hIsEOF",
          "package": "oi",
          "signature": "Handle -\u003e Bool :~\u003e Bool",
          "source": "src/Data-OI-IO.html#hIsEOF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI IO",
          "module": "Data.OI.IO",
          "name": "hIsEOF",
          "normalized": "Handle-\u003eBool Bool",
          "package": "oi",
          "partial": "Is EOF",
          "signature": "Handle-\u003eBool Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IO.html#v:hIsEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.IO",
          "name": "hPutStrLn",
          "package": "oi",
          "signature": "Handle -\u003e String -\u003e () :~\u003e ()",
          "source": "src/Data-OI-IO.html#hPutStrLn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI IO",
          "module": "Data.OI.IO",
          "name": "hPutStrLn",
          "normalized": "Handle-\u003eString-\u003e()()",
          "package": "oi",
          "partial": "Put Str Ln",
          "signature": "Handle-\u003eString-\u003e()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IO.html#v:hPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.IO",
          "name": "isEOF",
          "package": "oi",
          "signature": "Bool :~\u003e Bool",
          "source": "src/Data-OI-IO.html#isEOF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI IO",
          "module": "Data.OI.IO",
          "name": "isEOF",
          "package": "oi",
          "partial": "EOF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IO.html#v:isEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.IO",
          "name": "openFile",
          "package": "oi",
          "signature": "FilePath -\u003e IOMode -\u003e Handle :~\u003e Handle",
          "source": "src/Data-OI-IO.html#openFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI IO",
          "module": "Data.OI.IO",
          "name": "openFile",
          "normalized": "FilePath-\u003eIOMode-\u003eHandle Handle",
          "package": "oi",
          "partial": "File",
          "signature": "FilePath-\u003eIOMode-\u003eHandle Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IO.html#v:openFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.IO",
          "name": "putStrLn",
          "package": "oi",
          "signature": "String -\u003e () :~\u003e ()",
          "source": "src/Data-OI-IO.html#putStrLn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI IO",
          "module": "Data.OI.IO",
          "name": "putStrLn",
          "normalized": "String-\u003e()()",
          "package": "oi",
          "partial": "Str Ln",
          "signature": "String-\u003e()()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-IO.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Internal",
          "name": "Internal",
          "package": "oi",
          "source": "src/Data-OI-Internal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data OI Internal",
          "module": "Data.OI.Internal",
          "name": "Internal",
          "package": "oi",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteraction (a function from a intermediating type to another type) type\n\u003c/p\u003e",
          "module": "Data.OI.Internal",
          "name": ":-\u003e",
          "package": "oi",
          "source": "src/Data-OI-Internal.html#%3A-%3E",
          "type": "type"
        },
        "index": {
          "description": "Interaction function from intermediating type to another type type",
          "hierarchy": "Data OI Internal",
          "module": "Data.OI.Internal",
          "name": ":-\u003e",
          "package": "oi",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#t::-45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eIOResult\u003c/code\u003e for error handling\n\u003c/p\u003e",
          "module": "Data.OI.Internal",
          "name": "IOResult",
          "package": "oi",
          "source": "src/Data-OI-Internal.html#IOResult",
          "type": "data"
        },
        "index": {
          "description": "IOResult for error handling",
          "hierarchy": "Data OI Internal",
          "module": "Data.OI.Internal",
          "name": "IOResult",
          "package": "oi",
          "partial": "IOResult",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#t:IOResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatatype for intermediating interaction: \n \u003ccode\u003eOI\u003c/code\u003e has two states (programmer cannot distinguish), non-expressed and exressed.\n `Non-expressed' indicates that no computation is assigned.\n In other words, it's value is never denotated by any expression.\n So, if you refer the value then the process will be suspended \n until other process determins the value.\n Non-expressed value can be determined to become \u003ccode\u003eexpressed\u003c/code\u003e for a value by a expression at most once.\n \u003ccode\u003eExpressed\u003c/code\u003e indicates that some computation is assigned for the value.\n Once expressed, the value never be back to non-expressed nor be changed.\n\u003c/p\u003e",
          "module": "Data.OI.Internal",
          "name": "OI",
          "package": "oi",
          "source": "src/Data-OI-Internal.html#OI",
          "type": "data"
        },
        "index": {
          "description": "Datatype for intermediating interaction OI has two states programmer cannot distinguish non-expressed and exressed Non-expressed indicates that no computation is assigned In other words it value is never denotated by any expression So if you refer the value then the process will be suspended until other process determins the value Non-expressed value can be determined to become expressed for value by expression at most once Expressed indicates that some computation is assigned for the value Once expressed the value never be back to non-expressed nor be changed",
          "hierarchy": "Data OI Internal",
          "module": "Data.OI.Internal",
          "name": "OI",
          "package": "oi",
          "partial": "OI",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#t:OI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReference operator\n\u003c/p\u003e",
          "module": "Data.OI.Internal",
          "name": "(##)",
          "package": "oi",
          "signature": "a -\u003e OI a",
          "source": "src/Data-OI-Internal.html#%23%23",
          "type": "function"
        },
        "index": {
          "description": "Reference operator",
          "hierarchy": "Data OI Internal",
          "module": "Data.OI.Internal",
          "name": "(##) ##",
          "normalized": "a-\u003eOI a",
          "package": "oi",
          "signature": "a-\u003eOI a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:-35--35-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssign Operator\n\u003c/p\u003e",
          "module": "Data.OI.Internal",
          "name": "(=:)",
          "package": "oi",
          "signature": "a -\u003e OI a -\u003e a",
          "source": "src/Data-OI-Internal.html#%3D%3A",
          "type": "function"
        },
        "index": {
          "description": "Assign Operator",
          "hierarchy": "Data OI Internal",
          "module": "Data.OI.Internal",
          "name": "(=:) =:",
          "normalized": "a-\u003eOI a-\u003ea",
          "package": "oi",
          "signature": "a-\u003eOI a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:-61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDereference operator\n\u003c/p\u003e",
          "module": "Data.OI.Internal",
          "name": "(??)",
          "package": "oi",
          "signature": "OI a -\u003e a",
          "source": "src/Data-OI-Internal.html#%3F%3F",
          "type": "function"
        },
        "index": {
          "description": "Dereference operator",
          "hierarchy": "Data OI Internal",
          "module": "Data.OI.Internal",
          "name": "(??) ??",
          "normalized": "OI a-\u003ea",
          "package": "oi",
          "signature": "OI a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:-63--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Internal",
          "name": "Failure",
          "package": "oi",
          "signature": "Failure",
          "source": "src/Data-OI-Internal.html#IOResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Internal",
          "module": "Data.OI.Internal",
          "name": "Failure",
          "package": "oi",
          "partial": "Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:Failure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Internal",
          "name": "Success",
          "package": "oi",
          "signature": "Success",
          "source": "src/Data-OI-Internal.html#IOResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Internal",
          "module": "Data.OI.Internal",
          "name": "Success",
          "package": "oi",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:Success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Internal",
          "name": "deLeft",
          "package": "oi",
          "signature": "OI (Either a b) -\u003e Either (OI a) (OI b)",
          "source": "src/Data-OI-Internal.html#deLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Internal",
          "module": "Data.OI.Internal",
          "name": "deLeft",
          "normalized": "OI(Either a b)-\u003eEither(OI a)(OI b)",
          "package": "oi",
          "partial": "Left",
          "signature": "OI(Either a b)-\u003eEither(OI a)(OI b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:deLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecomposer for list\n\u003c/p\u003e",
          "module": "Data.OI.Internal",
          "name": "deList",
          "package": "oi",
          "signature": "OI [a] -\u003e Maybe (OI a, OI [a])",
          "source": "src/Data-OI-Internal.html#deList",
          "type": "function"
        },
        "index": {
          "description": "Decomposer for list",
          "hierarchy": "Data OI Internal",
          "module": "Data.OI.Internal",
          "name": "deList",
          "normalized": "OI[a]-\u003eMaybe(OI a,OI[a])",
          "package": "oi",
          "partial": "List",
          "signature": "OI[a]-\u003eMaybe(OI a,OI[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:deList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecomposer for pair\n\u003c/p\u003e",
          "module": "Data.OI.Internal",
          "name": "dePair",
          "package": "oi",
          "signature": "OI (a, b) -\u003e (OI a, OI b)",
          "source": "src/Data-OI-Internal.html#dePair",
          "type": "function"
        },
        "index": {
          "description": "Decomposer for pair",
          "hierarchy": "Data OI Internal",
          "module": "Data.OI.Internal",
          "name": "dePair",
          "normalized": "OI(a,b)-\u003e(OI a,OI b)",
          "package": "oi",
          "partial": "Pair",
          "signature": "OI(a,b)-\u003e(OI a,OI b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:dePair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Internal",
          "name": "deRight",
          "package": "oi",
          "signature": "OI (Either a b) -\u003e Either (OI a) (OI b)",
          "source": "src/Data-OI-Internal.html#deRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Internal",
          "module": "Data.OI.Internal",
          "name": "deRight",
          "normalized": "OI(Either a b)-\u003eEither(OI a)(OI b)",
          "package": "oi",
          "partial": "Right",
          "signature": "OI(Either a b)-\u003eEither(OI a)(OI b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:deRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecomposer for triple\n\u003c/p\u003e",
          "module": "Data.OI.Internal",
          "name": "deTriple",
          "package": "oi",
          "signature": "OI (a, b, c) -\u003e (OI a, OI b, OI c)",
          "source": "src/Data-OI-Internal.html#deTriple",
          "type": "function"
        },
        "index": {
          "description": "Decomposer for triple",
          "hierarchy": "Data OI Internal",
          "module": "Data.OI.Internal",
          "name": "deTriple",
          "normalized": "OI(a,b,c)-\u003e(OI a,OI b,OI c)",
          "package": "oi",
          "partial": "Triple",
          "signature": "OI(a,b,c)-\u003e(OI a,OI b,OI c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:deTriple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecomposer for 4-tuple\n\u003c/p\u003e",
          "module": "Data.OI.Internal",
          "name": "deTuple4",
          "package": "oi",
          "signature": "OI (a, b, c, d) -\u003e (OI a, OI b, OI c, OI d)",
          "source": "src/Data-OI-Internal.html#deTuple4",
          "type": "function"
        },
        "index": {
          "description": "Decomposer for tuple",
          "hierarchy": "Data OI Internal",
          "module": "Data.OI.Internal",
          "name": "deTuple4",
          "normalized": "OI(a,b,c,d)-\u003e(OI a,OI b,OI c,OI d)",
          "package": "oi",
          "partial": "Tuple",
          "signature": "OI(a,b,c,d)-\u003e(OI a,OI b,OI c,OI d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:deTuple4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecomposer for 5-tuple\n\u003c/p\u003e",
          "module": "Data.OI.Internal",
          "name": "deTuple5",
          "package": "oi",
          "signature": "OI (a, b, c, d, e) -\u003e (OI a, OI b, OI c, OI d, OI e)",
          "source": "src/Data-OI-Internal.html#deTuple5",
          "type": "function"
        },
        "index": {
          "description": "Decomposer for tuple",
          "hierarchy": "Data OI Internal",
          "module": "Data.OI.Internal",
          "name": "deTuple5",
          "normalized": "OI(a,b,c,d,e)-\u003e(OI a,OI b,OI c,OI d,OI e)",
          "package": "oi",
          "partial": "Tuple",
          "signature": "OI(a,b,c,d,e)-\u003e(OI a,OI b,OI c,OI d,OI e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:deTuple5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecomposer for 6-tuple\n\u003c/p\u003e",
          "module": "Data.OI.Internal",
          "name": "deTuple6",
          "package": "oi",
          "signature": "OI (a, b, c, d, e, f) -\u003e (OI a, OI b, OI c, OI d, OI e, OI f)",
          "source": "src/Data-OI-Internal.html#deTuple6",
          "type": "function"
        },
        "index": {
          "description": "Decomposer for tuple",
          "hierarchy": "Data OI Internal",
          "module": "Data.OI.Internal",
          "name": "deTuple6",
          "normalized": "OI(a,b,c,d,e,f)-\u003e(OI a,OI b,OI c,OI d,OI e,OI f)",
          "package": "oi",
          "partial": "Tuple",
          "signature": "OI(a,b,c,d,e,f)-\u003e(OI a,OI b,OI c,OI d,OI e,OI f)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:deTuple6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecomposer for 7-tuple\n\u003c/p\u003e",
          "module": "Data.OI.Internal",
          "name": "deTuple7",
          "package": "oi",
          "signature": "OI (a, b, c, d, e, f, g) -\u003e (OI a, OI b, OI c, OI d, OI e, OI f, OI g)",
          "source": "src/Data-OI-Internal.html#deTuple7",
          "type": "function"
        },
        "index": {
          "description": "Decomposer for tuple",
          "hierarchy": "Data OI Internal",
          "module": "Data.OI.Internal",
          "name": "deTuple7",
          "normalized": "OI(a,b,c,d,e,f,g)-\u003e(OI a,OI b,OI c,OI d,OI e,OI f,OI g)",
          "package": "oi",
          "partial": "Tuple",
          "signature": "OI(a,b,c,d,e,f,g)-\u003e(OI a,OI b,OI c,OI d,OI e,OI f,OI g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:deTuple7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Internal",
          "name": "errmsg",
          "package": "oi",
          "signature": "String",
          "source": "src/Data-OI-Internal.html#IOResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Internal",
          "module": "Data.OI.Internal",
          "name": "errmsg",
          "package": "oi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:errmsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert IO to interaction\n\u003c/p\u003e",
          "module": "Data.OI.Internal",
          "name": "iooi",
          "package": "oi",
          "signature": "IO a -\u003e OI a -\u003e a",
          "source": "src/Data-OI-Internal.html#iooi",
          "type": "function"
        },
        "index": {
          "description": "Convert IO to interaction",
          "hierarchy": "Data OI Internal",
          "module": "Data.OI.Internal",
          "name": "iooi",
          "normalized": "IO a-\u003eOI a-\u003ea",
          "package": "oi",
          "signature": "IO a-\u003eOI a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:iooi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Internal",
          "name": "iooi'",
          "package": "oi",
          "signature": "IO a -\u003e OI (IOResult a) -\u003e IOResult a",
          "source": "src/Data-OI-Internal.html#iooi%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Internal",
          "module": "Data.OI.Internal",
          "name": "iooi'",
          "normalized": "IO a-\u003eOI(IOResult a)-\u003eIOResult a",
          "package": "oi",
          "signature": "IO a-\u003eOI(IOResult a)-\u003eIOResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:iooi-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Internal",
          "name": "result",
          "package": "oi",
          "signature": "a",
          "source": "src/Data-OI-Internal.html#IOResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Internal",
          "module": "Data.OI.Internal",
          "name": "result",
          "package": "oi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrive interaction\n\u003c/p\u003e",
          "module": "Data.OI.Internal",
          "name": "runInteraction",
          "package": "oi",
          "signature": "(OI a -\u003e b) -\u003e IO b",
          "source": "src/Data-OI-Internal.html#runInteraction",
          "type": "function"
        },
        "index": {
          "description": "Drive interaction",
          "hierarchy": "Data OI Internal",
          "module": "Data.OI.Internal",
          "name": "runInteraction",
          "normalized": "(OI a-\u003eb)-\u003eIO b",
          "package": "oi",
          "partial": "Interaction",
          "signature": "(OI a-\u003eb)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Internal.html#v:runInteraction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Merge",
          "name": "Merge",
          "package": "oi",
          "source": "src/Data-OI-Merge.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data OI Merge",
          "module": "Data.OI.Merge",
          "name": "Merge",
          "package": "oi",
          "partial": "Merge",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Merge.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Merge",
          "name": "mergeOI",
          "package": "oi",
          "signature": "[a] -\u003e [a] -\u003e [a] :-\u003e [a]",
          "source": "src/Data-OI-Merge.html#mergeOI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Merge",
          "module": "Data.OI.Merge",
          "name": "mergeOI",
          "normalized": "[a]-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "oi",
          "partial": "OI",
          "signature": "[a]-\u003e[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Merge.html#v:mergeOI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Merge",
          "name": "nmergeOI",
          "package": "oi",
          "signature": "[[a]] -\u003e [a] :-\u003e [a]",
          "source": "src/Data-OI-Merge.html#nmergeOI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Merge",
          "module": "Data.OI.Merge",
          "name": "nmergeOI",
          "normalized": "[[a]]-\u003e[a]-\u003e[a]",
          "package": "oi",
          "partial": "OI",
          "signature": "[[a]]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Merge.html#v:nmergeOI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Resource",
          "name": "Resource",
          "package": "oi",
          "source": "src/Data-OI-Resource.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data OI Resource",
          "module": "Data.OI.Resource",
          "name": "Resource",
          "package": "oi",
          "partial": "Resource",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Resource",
          "name": "Resource",
          "package": "oi",
          "source": "src/Data-OI-Resource.html#Resource",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data OI Resource",
          "module": "Data.OI.Resource",
          "name": "Resource",
          "package": "oi",
          "partial": "Resource",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#t:Resource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Resource",
          "name": "Resource",
          "package": "oi",
          "signature": "Resource",
          "source": "src/Data-OI-Resource.html#Resource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Resource",
          "module": "Data.OI.Resource",
          "name": "Resource",
          "package": "oi",
          "partial": "Resource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#v:Resource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Resource",
          "name": "filterR",
          "package": "oi",
          "signature": "(a -\u003e Bool) -\u003e IOResult (Resource a) -\u003e [a]",
          "source": "src/Data-OI-Resource.html#filterR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Resource",
          "module": "Data.OI.Resource",
          "name": "filterR",
          "normalized": "(a-\u003eBool)-\u003eIOResult(Resource a)-\u003e[a]",
          "package": "oi",
          "signature": "(a-\u003eBool)-\u003eIOResult(Resource a)-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#v:filterR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Resource",
          "name": "filterR'",
          "package": "oi",
          "signature": "(a -\u003e Bool) -\u003e Resource a -\u003e [a]",
          "source": "src/Data-OI-Resource.html#filterR%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Resource",
          "module": "Data.OI.Resource",
          "name": "filterR'",
          "normalized": "(a-\u003eBool)-\u003eResource a-\u003e[a]",
          "package": "oi",
          "partial": "R'",
          "signature": "(a-\u003eBool)-\u003eResource a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#v:filterR-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Resource",
          "name": "inFileResource",
          "package": "oi",
          "signature": "FilePath -\u003e IOResult (Resource String) :-\u003e IOResult (Resource String)",
          "source": "src/Data-OI-Resource.html#inFileResource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Resource",
          "module": "Data.OI.Resource",
          "name": "inFileResource",
          "normalized": "FilePath-\u003eIOResult(Resource String)-\u003eIOResult(Resource String)",
          "package": "oi",
          "partial": "File Resource",
          "signature": "FilePath-\u003eIOResult(Resource String)-\u003eIOResult(Resource String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#v:inFileResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Resource",
          "name": "mapR",
          "package": "oi",
          "signature": "(a -\u003e b) -\u003e IOResult (Resource a) -\u003e [b]",
          "source": "src/Data-OI-Resource.html#mapR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Resource",
          "module": "Data.OI.Resource",
          "name": "mapR",
          "normalized": "(a-\u003eb)-\u003eIOResult(Resource a)-\u003e[b]",
          "package": "oi",
          "signature": "(a-\u003eb)-\u003eIOResult(Resource a)-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#v:mapR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Resource",
          "name": "mapR'",
          "package": "oi",
          "signature": "(a -\u003e b) -\u003e Resource a -\u003e [b]",
          "source": "src/Data-OI-Resource.html#mapR%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Resource",
          "module": "Data.OI.Resource",
          "name": "mapR'",
          "normalized": "(a-\u003eb)-\u003eResource a-\u003e[b]",
          "package": "oi",
          "partial": "R'",
          "signature": "(a-\u003eb)-\u003eResource a-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#v:mapR-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Resource",
          "name": "outFileResource",
          "package": "oi",
          "signature": "FilePath -\u003e [String] -\u003e IOResult (Resource ()) :-\u003e IOResult (Resource ())",
          "source": "src/Data-OI-Resource.html#outFileResource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Resource",
          "module": "Data.OI.Resource",
          "name": "outFileResource",
          "normalized": "FilePath-\u003e[String]-\u003eIOResult(Resource())-\u003eIOResult(Resource())",
          "package": "oi",
          "partial": "File Resource",
          "signature": "FilePath-\u003e[String]-\u003eIOResult(Resource())-\u003eIOResult(Resource())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#v:outFileResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Resource",
          "name": "release",
          "package": "oi",
          "signature": "()",
          "source": "src/Data-OI-Resource.html#Resource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Resource",
          "module": "Data.OI.Resource",
          "name": "release",
          "normalized": "()",
          "package": "oi",
          "signature": "()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#v:release"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Resource",
          "name": "stream",
          "package": "oi",
          "signature": "[IOResult a]",
          "source": "src/Data-OI-Resource.html#Resource",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Resource",
          "module": "Data.OI.Resource",
          "name": "stream",
          "normalized": "[IOResult a]",
          "package": "oi",
          "signature": "[IOResult a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#v:stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Resource",
          "name": "takeR",
          "package": "oi",
          "signature": "i -\u003e IOResult (Resource a) -\u003e [a]",
          "source": "src/Data-OI-Resource.html#takeR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Resource",
          "module": "Data.OI.Resource",
          "name": "takeR",
          "normalized": "a-\u003eIOResult(Resource b)-\u003e[b]",
          "package": "oi",
          "signature": "i-\u003eIOResult(Resource a)-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#v:takeR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Resource",
          "name": "takeR'",
          "package": "oi",
          "signature": "i -\u003e Resource a -\u003e [a]",
          "source": "src/Data-OI-Resource.html#takeR%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Resource",
          "module": "Data.OI.Resource",
          "name": "takeR'",
          "normalized": "a-\u003eResource b-\u003e[b]",
          "package": "oi",
          "partial": "R'",
          "signature": "i-\u003eResource a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#v:takeR-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Resource",
          "name": "takeWhileR",
          "package": "oi",
          "signature": "(a -\u003e Bool) -\u003e IOResult (Resource a) -\u003e [a]",
          "source": "src/Data-OI-Resource.html#takeWhileR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Resource",
          "module": "Data.OI.Resource",
          "name": "takeWhileR",
          "normalized": "(a-\u003eBool)-\u003eIOResult(Resource a)-\u003e[a]",
          "package": "oi",
          "partial": "While",
          "signature": "(a-\u003eBool)-\u003eIOResult(Resource a)-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#v:takeWhileR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.Resource",
          "name": "takeWhileR'",
          "package": "oi",
          "signature": "(a -\u003e Bool) -\u003e Resource a -\u003e [a]",
          "source": "src/Data-OI-Resource.html#takeWhileR%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI Resource",
          "module": "Data.OI.Resource",
          "name": "takeWhileR'",
          "normalized": "(a-\u003eBool)-\u003eResource a-\u003e[a]",
          "package": "oi",
          "partial": "While R'",
          "signature": "(a-\u003eBool)-\u003eResource a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-Resource.html#v:takeWhileR-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.System",
          "name": "System",
          "package": "oi",
          "source": "src/Data-OI-System.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data OI System",
          "module": "Data.OI.System",
          "name": "System",
          "package": "oi",
          "partial": "System",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-System.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.System",
          "name": "args",
          "package": "oi",
          "signature": "[String] :-\u003e [String]",
          "source": "src/Data-OI-System.html#args",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI System",
          "module": "Data.OI.System",
          "name": "args",
          "normalized": "[String]-\u003e[String]",
          "package": "oi",
          "signature": "[String]-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-System.html#v:args"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.System",
          "name": "environment",
          "package": "oi",
          "signature": "[(String, String)] :-\u003e [(String, String)]",
          "source": "src/Data-OI-System.html#environment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI System",
          "module": "Data.OI.System",
          "name": "environment",
          "normalized": "[(String,String)]-\u003e[(String,String)]",
          "package": "oi",
          "signature": "[(String,String)]-\u003e[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-System.html#v:environment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI.System",
          "name": "progName",
          "package": "oi",
          "signature": "String :-\u003e String",
          "source": "src/Data-OI-System.html#progName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data OI System",
          "module": "Data.OI.System",
          "name": "progName",
          "normalized": "String-\u003eString",
          "package": "oi",
          "partial": "Name",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI-System.html#v:progName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.OI",
          "name": "OI",
          "package": "oi",
          "source": "src/Data-OI.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data OI",
          "module": "Data.OI",
          "name": "OI",
          "package": "oi",
          "partial": "OI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/oi/docs/Data-OI.html#"
      }
    }
  ]
]