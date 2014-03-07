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
        "word": "CCA"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA.CCNF",
          "name": "CCNF",
          "package": "CCA",
          "source": "src/Control-CCA-CCNF.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control CCA CCNF",
          "module": "Control.CCA.CCNF",
          "name": "CCNF",
          "package": "CCA",
          "partial": "CCNF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA-CCNF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA.CCNF",
          "name": "ASyn",
          "package": "CCA",
          "source": "src/Control-CCA-CCNF.html#ASyn",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control CCA CCNF",
          "module": "Control.CCA.CCNF",
          "name": "ASyn",
          "package": "CCA",
          "partial": "ASyn",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA-CCNF.html#t:ASyn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA.CCNF",
          "name": "assoc",
          "package": "CCA",
          "signature": "((t, t1), t2) -\u003e (t, (t1, t2))",
          "source": "src/Control-CCA-CCNF.html#assoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control CCA CCNF",
          "module": "Control.CCA.CCNF",
          "name": "assoc",
          "normalized": "((a,a),a)-\u003e(a,(a,a))",
          "package": "CCA",
          "signature": "((t,t),t)-\u003e(t,(t,t))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA-CCNF.html#v:assoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA.CCNF",
          "name": "cross",
          "package": "CCA",
          "signature": "(t -\u003e t2) -\u003e (t1 -\u003e t3) -\u003e (t, t1) -\u003e (t2, t3)",
          "source": "src/Control-CCA-CCNF.html#cross",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control CCA CCNF",
          "module": "Control.CCA.CCNF",
          "name": "cross",
          "normalized": "(a-\u003ea)-\u003e(a-\u003ea)-\u003e(a,a)-\u003e(a,a)",
          "package": "CCA",
          "signature": "(t-\u003et)-\u003e(t-\u003et)-\u003e(t,t)-\u003e(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA-CCNF.html#v:cross"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA.CCNF",
          "name": "dup",
          "package": "CCA",
          "signature": "t -\u003e (t, t)",
          "source": "src/Control-CCA-CCNF.html#dup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control CCA CCNF",
          "module": "Control.CCA.CCNF",
          "name": "dup",
          "normalized": "a-\u003e(a,a)",
          "package": "CCA",
          "signature": "t-\u003e(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA-CCNF.html#v:dup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA.CCNF",
          "name": "juggle",
          "package": "CCA",
          "signature": "((t1, t), t2) -\u003e ((t1, t2), t)",
          "source": "src/Control-CCA-CCNF.html#juggle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control CCA CCNF",
          "module": "Control.CCA.CCNF",
          "name": "juggle",
          "normalized": "((a,a),a)-\u003e((a,a),a)",
          "package": "CCA",
          "signature": "((t,t),t)-\u003e((t,t),t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA-CCNF.html#v:juggle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA.CCNF",
          "name": "mirror",
          "package": "CCA",
          "signature": "Either b a -\u003e Either a b",
          "source": "src/Control-CCA-CCNF.html#mirror",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control CCA CCNF",
          "module": "Control.CCA.CCNF",
          "name": "mirror",
          "normalized": "Either a b-\u003eEither b a",
          "package": "CCA",
          "signature": "Either b a-\u003eEither a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA-CCNF.html#v:mirror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.CCA.CCNF\",\"Control.CCA\"]",
          "name": "norm",
          "package": "CCA",
          "signature": "ASyn t t1 -\u003e ExpQ",
          "source": "src/Control-CCA-CCNF.html#norm",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/CCA/docs/Control-CCA-CCNF.html#v:norm\",\"http://hackage.haskell.org/package/CCA/docs/Control-CCA.html#v:norm\"]"
        },
        "index": {
          "hierarchy": "Control CCA CCNF",
          "module": "Control.CCA.CCNF",
          "name": "norm",
          "normalized": "ASyn a a-\u003eExpQ",
          "package": "CCA",
          "signature": "ASyn t t-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA-CCNF.html#v:norm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.CCA.CCNF\",\"Control.CCA\"]",
          "name": "normOpt",
          "package": "CCA",
          "signature": "ASyn t t1 -\u003e ExpQ",
          "source": "src/Control-CCA-CCNF.html#normOpt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/CCA/docs/Control-CCA-CCNF.html#v:normOpt\",\"http://hackage.haskell.org/package/CCA/docs/Control-CCA.html#v:normOpt\"]"
        },
        "index": {
          "hierarchy": "Control CCA CCNF",
          "module": "Control.CCA.CCNF",
          "name": "normOpt",
          "normalized": "ASyn a a-\u003eExpQ",
          "package": "CCA",
          "partial": "Opt",
          "signature": "ASyn t t-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA-CCNF.html#v:normOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA.CCNF",
          "name": "pprNorm",
          "package": "CCA",
          "signature": "ASyn t t1 -\u003e Q Exp",
          "source": "src/Control-CCA-CCNF.html#pprNorm",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control CCA CCNF",
          "module": "Control.CCA.CCNF",
          "name": "pprNorm",
          "normalized": "ASyn a a-\u003eQ Exp",
          "package": "CCA",
          "partial": "Norm",
          "signature": "ASyn t t-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA-CCNF.html#v:pprNorm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA.CCNF",
          "name": "pprNormOpt",
          "package": "CCA",
          "signature": "ASyn t t1 -\u003e Q Exp",
          "source": "src/Control-CCA-CCNF.html#pprNormOpt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control CCA CCNF",
          "module": "Control.CCA.CCNF",
          "name": "pprNormOpt",
          "normalized": "ASyn a a-\u003eQ Exp",
          "package": "CCA",
          "partial": "Norm Opt",
          "signature": "ASyn t t-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA-CCNF.html#v:pprNormOpt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA.CCNF",
          "name": "printCCA",
          "package": "CCA",
          "signature": "ASyn t t1 -\u003e IO ()",
          "source": "src/Control-CCA-CCNF.html#printCCA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control CCA CCNF",
          "module": "Control.CCA.CCNF",
          "name": "printCCA",
          "normalized": "ASyn a a-\u003eIO()",
          "package": "CCA",
          "partial": "CCA",
          "signature": "ASyn t t-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA-CCNF.html#v:printCCA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA.CCNF",
          "name": "swap",
          "package": "CCA",
          "signature": "(t1, t) -\u003e (t, t1)",
          "source": "src/Control-CCA-CCNF.html#swap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control CCA CCNF",
          "module": "Control.CCA.CCNF",
          "name": "swap",
          "normalized": "(a,a)-\u003e(a,a)",
          "package": "CCA",
          "signature": "(t,t)-\u003e(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA-CCNF.html#v:swap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA.CCNF",
          "name": "tagT",
          "package": "CCA",
          "signature": "(Either t t1, t2) -\u003e Either (t, t2) (t1, t2)",
          "source": "src/Control-CCA-CCNF.html#tagT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control CCA CCNF",
          "module": "Control.CCA.CCNF",
          "name": "tagT",
          "normalized": "(Either a a,a)-\u003eEither(a,a)(a,a)",
          "package": "CCA",
          "signature": "(Either t t,t)-\u003eEither(t,t)(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA-CCNF.html#v:tagT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA.CCNF",
          "name": "trace",
          "package": "CCA",
          "signature": "((t1, t2) -\u003e (t, t2)) -\u003e t1 -\u003e t",
          "source": "src/Control-CCA-CCNF.html#trace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control CCA CCNF",
          "module": "Control.CCA.CCNF",
          "name": "trace",
          "normalized": "((a,a)-\u003e(a,a))-\u003ea-\u003ea",
          "package": "CCA",
          "signature": "((t,t)-\u003e(t,t))-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA-CCNF.html#v:trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA.CCNF",
          "name": "unassoc",
          "package": "CCA",
          "signature": "(t1, (t2, t)) -\u003e ((t1, t2), t)",
          "source": "src/Control-CCA-CCNF.html#unassoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control CCA CCNF",
          "module": "Control.CCA.CCNF",
          "name": "unassoc",
          "normalized": "(a,(a,a))-\u003e((a,a),a)",
          "package": "CCA",
          "signature": "(t,(t,t))-\u003e((t,t),t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA-CCNF.html#v:unassoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA.CCNF",
          "name": "untag",
          "package": "CCA",
          "signature": "Either t t -\u003e t",
          "source": "src/Control-CCA-CCNF.html#untag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control CCA CCNF",
          "module": "Control.CCA.CCNF",
          "name": "untag",
          "normalized": "Either a a-\u003ea",
          "package": "CCA",
          "signature": "Either t t-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA-CCNF.html#v:untag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA.CCNF",
          "name": "untagT",
          "package": "CCA",
          "signature": "Either (a, t) (b, t) -\u003e (Either a b, t)",
          "source": "src/Control-CCA-CCNF.html#untagT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control CCA CCNF",
          "module": "Control.CCA.CCNF",
          "name": "untagT",
          "normalized": "Either(a,b)(c,b)-\u003e(Either a c,b)",
          "package": "CCA",
          "signature": "Either(a,t)(b,t)-\u003e(Either a b,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA-CCNF.html#v:untagT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA.Types",
          "name": "Types",
          "package": "CCA",
          "source": "src/Control-CCA-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control CCA Types",
          "module": "Control.CCA.Types",
          "name": "Types",
          "package": "CCA",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA.Types",
          "name": "ArrowInit",
          "package": "CCA",
          "source": "src/Control-CCA-Types.html#ArrowInit",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control CCA Types",
          "module": "Control.CCA.Types",
          "name": "ArrowInit",
          "package": "CCA",
          "partial": "Arrow Init",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA-Types.html#t:ArrowInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA.Types",
          "name": "arr'",
          "package": "CCA",
          "signature": "ExpQ -\u003e (b -\u003e c) -\u003e a b c",
          "source": "src/Control-CCA-Types.html#arr%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control CCA Types",
          "module": "Control.CCA.Types",
          "name": "arr'",
          "normalized": "ExpQ-\u003e(a-\u003eb)-\u003ec a b",
          "package": "CCA",
          "signature": "ExpQ-\u003e(b-\u003ec)-\u003ea b c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA-Types.html#v:arr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA.Types",
          "name": "init",
          "package": "CCA",
          "signature": "b -\u003e a b b",
          "source": "src/Control-CCA-Types.html#init",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control CCA Types",
          "module": "Control.CCA.Types",
          "name": "init",
          "normalized": "a-\u003eb a a",
          "package": "CCA",
          "signature": "b-\u003ea b b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA-Types.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA.Types",
          "name": "init'",
          "package": "CCA",
          "signature": "ExpQ -\u003e b -\u003e a b b",
          "source": "src/Control-CCA-Types.html#init%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control CCA Types",
          "module": "Control.CCA.Types",
          "name": "init'",
          "normalized": "ExpQ-\u003ea-\u003eb a a",
          "package": "CCA",
          "signature": "ExpQ-\u003eb-\u003ea b b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA-Types.html#v:init-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA.Types",
          "name": "loopD",
          "package": "CCA",
          "signature": "e -\u003e ((b, e) -\u003e (c, e)) -\u003e a b c",
          "source": "src/Control-CCA-Types.html#loopD",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control CCA Types",
          "module": "Control.CCA.Types",
          "name": "loopD",
          "normalized": "a-\u003e((b,a)-\u003e(c,a))-\u003ed b c",
          "package": "CCA",
          "signature": "e-\u003e((b,e)-\u003e(c,e))-\u003ea b c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA-Types.html#v:loopD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA",
          "name": "CCA",
          "package": "CCA",
          "source": "src/Control-CCA.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control CCA",
          "module": "Control.CCA",
          "name": "CCA",
          "package": "CCA",
          "partial": "CCA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic arrow class.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e, satisfying the laws\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e id = \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (f \u003e\u003e\u003e g) = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e f \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e g\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e f) = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e f)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e (f \u003e\u003e\u003e g) = \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e f \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e g\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e f \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e \u003e\u003e\u003e f\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e f \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e *** g) = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e *** g) \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e f\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e f) \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eassoc\u003c/code\u003e = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eassoc\u003c/code\u003e \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e f\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e\u003cp\u003ewhere\n\u003c/p\u003e\u003cpre\u003e assoc ((a,b),c) = (a,(b,c))\n\u003c/pre\u003e\u003cp\u003eThe other combinators have sensible default definitions,\n which may be overridden for efficiency.\n\u003c/p\u003e",
          "module": "Control.CCA",
          "name": "Arrow",
          "package": "CCA",
          "type": "class"
        },
        "index": {
          "description": "The basic arrow class Minimal complete definition arr and first satisfying the laws arr id id arr arr arr first arr arr first first first first first arr fst arr fst first arr id arr id first first first arr assoc arr assoc first where assoc The other combinators have sensible default definitions which may be overridden for efficiency",
          "hierarchy": "Control CCA",
          "module": "Control.CCA",
          "name": "Arrow",
          "package": "CCA",
          "partial": "Arrow",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA.html#t:Arrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA",
          "name": "ArrowInit",
          "package": "CCA",
          "source": "src/Control-CCA-Types.html#ArrowInit",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control CCA",
          "module": "Control.CCA",
          "name": "ArrowInit",
          "package": "CCA",
          "partial": "Arrow Init",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA.html#t:ArrowInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e operator expresses computations in which an output value\n is fed back as input, although the computation occurs only once.\n It underlies the \u003ccode\u003erec\u003c/code\u003e value recursion construct in arrow notation.\n \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e should satisfy the following laws:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003cem\u003eextension\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e f) = \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\\ b -\u003e \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efix\u003c/a\u003e\u003c/code\u003e (\\ (c,d) -\u003e f (b,d))))\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003eleft tightening\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e h \u003e\u003e\u003e f) = h \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003eright tightening\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e (f \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e h) = \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e f \u003e\u003e\u003e h\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003esliding\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e (f \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e *** k)) = \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e *** k) \u003e\u003e\u003e f)\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003evanishing\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e f) = \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e unassoc \u003e\u003e\u003e f \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e assoc)\u003c/code\u003e\n\u003c/dd\u003e\u003cdt\u003e\u003cem\u003esuperposing\u003c/em\u003e\u003c/dt\u003e\u003cdd\u003e\n      \u003ccode\u003e\u003ccode\u003e\u003ca\u003esecond\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e f) = \u003ccode\u003e\u003ca\u003eloop\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e assoc \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003esecond\u003c/a\u003e\u003c/code\u003e f \u003e\u003e\u003e \u003ccode\u003e\u003ca\u003earr\u003c/a\u003e\u003c/code\u003e unassoc)\u003c/code\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003ewhere\n\u003c/p\u003e\u003cpre\u003e assoc ((a,b),c) = (a,(b,c))\n unassoc (a,(b,c)) = ((a,b),c)\n\u003c/pre\u003e",
          "module": "Control.CCA",
          "name": "ArrowLoop",
          "package": "CCA",
          "type": "class"
        },
        "index": {
          "description": "The loop operator expresses computations in which an output value is fed back as input although the computation occurs only once It underlies the rec value recursion construct in arrow notation loop should satisfy the following laws extension loop arr arr fst fix left tightening loop first loop right tightening loop first loop sliding loop arr id loop arr id vanishing loop loop loop arr unassoc arr assoc superposing second loop loop arr assoc second arr unassoc where assoc unassoc",
          "hierarchy": "Control CCA",
          "module": "Control.CCA",
          "name": "ArrowLoop",
          "package": "CCA",
          "partial": "Arrow Loop",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA.html#t:ArrowLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFanout: send the input to both argument arrows and combine\n   their output.\n\u003c/p\u003e\u003cp\u003eThe default definition may be overridden with a more efficient\n   version if desired.\n\u003c/p\u003e",
          "module": "Control.CCA",
          "name": "(&&&)",
          "package": "CCA",
          "signature": "a b c -\u003e a b c' -\u003e a b (c, c')",
          "type": "method"
        },
        "index": {
          "description": "Fanout send the input to both argument arrows and combine their output The default definition may be overridden with more efficient version if desired",
          "hierarchy": "Control CCA",
          "module": "Control.CCA",
          "name": "(&&&) &&&",
          "normalized": "a b c-\u003ea b d-\u003ea b(c,d)",
          "package": "CCA",
          "signature": "a b c-\u003ea b c'-\u003ea b(c,c')",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA.html#v:-38--38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit the input between the two argument arrows and combine\n   their output.  Note that this is in general not a functor.\n\u003c/p\u003e\u003cp\u003eThe default definition may be overridden with a more efficient\n   version if desired.\n\u003c/p\u003e",
          "module": "Control.CCA",
          "name": "(***)",
          "package": "CCA",
          "signature": "a b c -\u003e a b' c' -\u003e a (b, b') (c, c')",
          "type": "method"
        },
        "index": {
          "description": "Split the input between the two argument arrows and combine their output Note that this is in general not functor The default definition may be overridden with more efficient version if desired",
          "hierarchy": "Control CCA",
          "module": "Control.CCA",
          "name": "(***) ***",
          "normalized": "a b c-\u003ea d e-\u003ea(b,d)(c,e)",
          "package": "CCA",
          "signature": "a b c-\u003ea b' c'-\u003ea(b,b')(c,c')",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA.html#v:-42--42--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight-to-left composition\n\u003c/p\u003e",
          "module": "Control.CCA",
          "name": "(\u003c\u003c\u003c)",
          "package": "CCA",
          "signature": "cat b c -\u003e cat a b -\u003e cat a c",
          "type": "function"
        },
        "index": {
          "description": "Right-to-left composition",
          "hierarchy": "Control CCA",
          "module": "Control.CCA",
          "name": "(\u003c\u003c\u003c) \u003c\u003c\u003c",
          "normalized": "a b c-\u003ea d b-\u003ea d c",
          "package": "CCA",
          "signature": "cat b c-\u003ecat a b-\u003ecat a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA.html#v:-60--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-to-right composition\n\u003c/p\u003e",
          "module": "Control.CCA",
          "name": "(\u003e\u003e\u003e)",
          "package": "CCA",
          "signature": "cat a b -\u003e cat b c -\u003e cat a c",
          "type": "function"
        },
        "index": {
          "description": "Left-to-right composition",
          "hierarchy": "Control CCA",
          "module": "Control.CCA",
          "name": "(\u003e\u003e\u003e) \u003e\u003e\u003e",
          "normalized": "a b c-\u003ea c d-\u003ea b d",
          "package": "CCA",
          "signature": "cat a b-\u003ecat b c-\u003ecat a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA.html#v:-62--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA",
          "name": "arr",
          "package": "CCA",
          "signature": "ExpQ -\u003e ExpQ",
          "source": "src/Control-CCA.html#arr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control CCA",
          "module": "Control.CCA",
          "name": "arr",
          "normalized": "ExpQ-\u003eExpQ",
          "package": "CCA",
          "signature": "ExpQ-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA.html#v:arr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA",
          "name": "arr'",
          "package": "CCA",
          "signature": "ExpQ -\u003e (b -\u003e c) -\u003e a b c",
          "source": "src/Control-CCA-Types.html#arr%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control CCA",
          "module": "Control.CCA",
          "name": "arr'",
          "normalized": "ExpQ-\u003e(a-\u003eb)-\u003ec a b",
          "package": "CCA",
          "signature": "ExpQ-\u003e(b-\u003ec)-\u003ea b c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA.html#v:arr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA",
          "name": "constant",
          "package": "CCA",
          "signature": "b -\u003e a () b",
          "source": "src/Control-CCA.html#constant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control CCA",
          "module": "Control.CCA",
          "name": "constant",
          "normalized": "a-\u003eb()a",
          "package": "CCA",
          "signature": "b-\u003ea()b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA.html#v:constant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend the first component of the input through the argument\n   arrow, and copy the rest unchanged to the output.\n\u003c/p\u003e",
          "module": "Control.CCA",
          "name": "first",
          "package": "CCA",
          "signature": "a b c -\u003e a (b, d) (c, d)",
          "type": "method"
        },
        "index": {
          "description": "Send the first component of the input through the argument arrow and copy the rest unchanged to the output",
          "hierarchy": "Control CCA",
          "module": "Control.CCA",
          "name": "first",
          "normalized": "a b c-\u003ea(b,d)(c,d)",
          "package": "CCA",
          "signature": "a b c-\u003ea(b,d)(c,d)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA.html#v:first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA",
          "name": "init",
          "package": "CCA",
          "signature": "ExpQ -\u003e ExpQ",
          "source": "src/Control-CCA.html#init",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control CCA",
          "module": "Control.CCA",
          "name": "init",
          "normalized": "ExpQ-\u003eExpQ",
          "package": "CCA",
          "signature": "ExpQ-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA",
          "name": "init'",
          "package": "CCA",
          "signature": "ExpQ -\u003e b -\u003e a b b",
          "source": "src/Control-CCA-Types.html#init%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control CCA",
          "module": "Control.CCA",
          "name": "init'",
          "normalized": "ExpQ-\u003ea-\u003eb a a",
          "package": "CCA",
          "signature": "ExpQ-\u003eb-\u003ea b b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA.html#v:init-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.CCA",
          "name": "loop",
          "package": "CCA",
          "signature": "a (b, d) (c, d) -\u003e a b c",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control CCA",
          "module": "Control.CCA",
          "name": "loop",
          "normalized": "a(b,c)(d,c)-\u003ea b d",
          "package": "CCA",
          "signature": "a(b,d)(c,d)-\u003ea b c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA.html#v:loop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA mirror image of \u003ccode\u003e\u003ca\u003efirst\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe default definition may be overridden with a more efficient\n   version if desired.\n\u003c/p\u003e",
          "module": "Control.CCA",
          "name": "second",
          "package": "CCA",
          "signature": "a b c -\u003e a (d, b) (d, c)",
          "type": "method"
        },
        "index": {
          "description": "mirror image of first The default definition may be overridden with more efficient version if desired",
          "hierarchy": "Control CCA",
          "module": "Control.CCA",
          "name": "second",
          "normalized": "a b c-\u003ea(d,b)(d,c)",
          "package": "CCA",
          "signature": "a b c-\u003ea(d,b)(d,c)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Control-CCA.html#v:second"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Instances",
          "name": "Instances",
          "package": "CCA",
          "source": "src/Language-Haskell-TH-Instances.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Language Haskell TH Instances",
          "module": "Language.Haskell.TH.Instances",
          "name": "Instances",
          "package": "CCA",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Language-Haskell-TH-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Haskell.TH.Instances",
          "name": "fromInt",
          "package": "CCA",
          "signature": "Int -\u003e Int#",
          "source": "src/Language-Haskell-TH-Instances.html#fromInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Haskell TH Instances",
          "module": "Language.Haskell.TH.Instances",
          "name": "fromInt",
          "normalized": "Int-\u003eInt #",
          "package": "CCA",
          "partial": "Int",
          "signature": "Int-\u003eInt #",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/CCA/docs/Language-Haskell-TH-Instances.html#v:fromInt"
      }
    }
  ]
]