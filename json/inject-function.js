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
        "word": "inject-function"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.InjFun",
          "name": "InjFun",
          "package": "inject-function",
          "source": "src/Control-InjFun.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control InjFun",
          "module": "Control.InjFun",
          "name": "InjFun",
          "package": "inject-function",
          "partial": "Inj Fun",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/inject-function/docs/Control-InjFun.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction able to be injected parameters in.\n \u003ccode\u003ec\u003c/code\u003e is the injected control parameters, \u003ccode\u003ei\u003c/code\u003e represents its input, \u003ccode\u003em\u003c/code\u003e is the resulting monad\n and \u003ccode\u003eo\u003c/code\u003e is the output.\n\u003c/p\u003e",
          "module": "Control.InjFun",
          "name": "InjFun",
          "package": "inject-function",
          "source": "src/Control-InjFun.html#InjFun",
          "type": "data"
        },
        "index": {
          "description": "Function able to be injected parameters in is the injected control parameters represents its input is the resulting monad and is the output",
          "hierarchy": "Control InjFun",
          "module": "Control.InjFun",
          "name": "InjFun",
          "package": "inject-function",
          "partial": "Inj Fun",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/inject-function/docs/Control-InjFun.html#t:InjFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequencing operator. It&#8217;s a helper function that composes with \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e the two \u003ccode\u003e\u003ca\u003eInjFun\u003c/a\u003e\u003c/code\u003e, respecting\n the order.\n\u003c/p\u003e\u003cp\u003eThat version (with double `|`) means that the two injected parameters are considered\n different.\n\u003c/p\u003e",
          "module": "Control.InjFun",
          "name": "(||-\u003e)",
          "package": "inject-function",
          "signature": "InjFun c i m o-\u003e InjFun c' o m o'-\u003e InjFun (c, c') i m o'",
          "type": "function"
        },
        "index": {
          "description": "Sequencing operator It helper function that composes with the two InjFun respecting the order That version with double means that the two injected parameters are considered different",
          "hierarchy": "Control InjFun",
          "module": "Control.InjFun",
          "name": "(||-\u003e) ||-\u003e",
          "normalized": "InjFun a b c d-\u003eInjFun e d c f-\u003eInjFun(a,e)b c f",
          "package": "inject-function",
          "signature": "InjFun c i m o-\u003eInjFun c' o m o'-\u003eInjFun(c,c')i m o'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/inject-function/docs/Control-InjFun.html#v:-124--124--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequencing operator. It&#8217;s a helper function that composes with \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e the two \u003ccode\u003e\u003ca\u003eInjFun\u003c/a\u003e\u003c/code\u003e, respecting\n the order.\n\u003c/p\u003e\u003cp\u003eThat version (with a single `|`) means that both the two injected parameters are considered\n the same; then they&#8217;re shared as a single \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.InjFun",
          "name": "(|-\u003e)",
          "package": "inject-function",
          "signature": "InjFun c i m o-\u003e InjFun c o m o'-\u003e InjFun c i m o'",
          "type": "function"
        },
        "index": {
          "description": "Sequencing operator It helper function that composes with the two InjFun respecting the order That version with single means that both the two injected parameters are considered the same then they re shared as single",
          "hierarchy": "Control InjFun",
          "module": "Control.InjFun",
          "name": "(|-\u003e) |-\u003e",
          "normalized": "InjFun a b c d-\u003eInjFun a d c e-\u003eInjFun a b c e",
          "package": "inject-function",
          "signature": "InjFun c i m o-\u003eInjFun c o m o'-\u003eInjFun c i m o'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/inject-function/docs/Control-InjFun.html#v:-124--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplode an \u003ccode\u003e\u003ca\u003eInjFun\u003c/a\u003e\u003c/code\u003e and feed two other ones with exploded parts of it.\n\u003c/p\u003e\u003cp\u003eIn that version, each of the three functions has its own inject parameter.\n\u003c/p\u003e",
          "module": "Control.InjFun",
          "name": "(-\u003c)",
          "package": "inject-function",
          "signature": "InjFun c i m (o0, o1)-\u003e (InjFun c' o0 m o0', InjFun c'' o1 m o1')-\u003e (InjFun (c, c') i m o0', InjFun (c, c'') i m o1')",
          "type": "function"
        },
        "index": {
          "description": "Explode an InjFun and feed two other ones with exploded parts of it In that version each of the three functions has its own inject parameter",
          "hierarchy": "Control InjFun",
          "module": "Control.InjFun",
          "name": "(-\u003c) -\u003c",
          "normalized": "InjFun a b c(d,d)-\u003e(InjFun e d c d,InjFun f d c d)-\u003e(InjFun(a,e)b c d,InjFun(a,f)b c d)",
          "package": "inject-function",
          "signature": "InjFun c i m(o,o)-\u003e(InjFun c' o m o,InjFun c'' o m o)-\u003e(InjFun(c,c')i m o,InjFun(c,c'')i m o)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/inject-function/docs/Control-InjFun.html#v:-45--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplode an \u003ccode\u003e\u003ca\u003eInjFun\u003c/a\u003e\u003c/code\u003e and feed two other ones with exploded parts of it.\n\u003c/p\u003e\u003cp\u003eIn that version, all the three functions share the same inject parameter.\n\u003c/p\u003e",
          "module": "Control.InjFun",
          "name": "(-\u003c|)",
          "package": "inject-function",
          "signature": "InjFun c i m (o0, o1)-\u003e (InjFun c o0 m o0', InjFun c o1 m o1')-\u003e (InjFun c i m o0', InjFun c i m o1')",
          "type": "function"
        },
        "index": {
          "description": "Explode an InjFun and feed two other ones with exploded parts of it In that version all the three functions share the same inject parameter",
          "hierarchy": "Control InjFun",
          "module": "Control.InjFun",
          "name": "(-\u003c|) -\u003c|",
          "normalized": "InjFun a b c(d,d)-\u003e(InjFun a d c d,InjFun a d c d)-\u003e(InjFun a b c d,InjFun a b c d)",
          "package": "inject-function",
          "signature": "InjFun c i m(o,o)-\u003e(InjFun c o m o,InjFun c o m o)-\u003e(InjFun c i m o,InjFun c i m o)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/inject-function/docs/Control-InjFun.html#v:-45--60--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two \u003ccode\u003e\u003ca\u003eInjFun\u003c/a\u003e\u003c/code\u003e and feed another one with the merged function.\n\u003c/p\u003e\u003cp\u003eIn that version, each of the three functions has it its own inject parameter.\n\u003c/p\u003e",
          "module": "Control.InjFun",
          "name": "(\u003e-)",
          "package": "inject-function",
          "signature": "(InjFun c0 i0 m o0, InjFun c1 i1 m o1)-\u003e InjFun c2 (o0, o1) m o'-\u003e InjFun (c0, c1, c2) (i0, i1) m o'",
          "type": "function"
        },
        "index": {
          "description": "Merge two InjFun and feed another one with the merged function In that version each of the three functions has it its own inject parameter",
          "hierarchy": "Control InjFun",
          "module": "Control.InjFun",
          "name": "(\u003e-) \u003e-",
          "normalized": "(InjFun a b c d,InjFun a b c d)-\u003eInjFun a(d,d)c e-\u003eInjFun(a,a,a)(b,b)c e",
          "package": "inject-function",
          "signature": "(InjFun c i m o,InjFun c i m o)-\u003eInjFun c(o,o)m o'-\u003eInjFun(c,c,c)(i,i)m o'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/inject-function/docs/Control-InjFun.html#v:-62--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two \u003ccode\u003e\u003ca\u003eInjFun\u003c/a\u003e\u003c/code\u003e and feed another one with the merged function.\n\u003c/p\u003e\u003cp\u003eIn that version, all the three functions share the same inject parameter.\n\u003c/p\u003e",
          "module": "Control.InjFun",
          "name": "(\u003e-|)",
          "package": "inject-function",
          "signature": "(InjFun c i0 m o0, InjFun c i1 m o1)-\u003e InjFun c (o0, o1) m o'-\u003e InjFun c (i0, i1) m o'",
          "type": "function"
        },
        "index": {
          "description": "Merge two InjFun and feed another one with the merged function In that version all the three functions share the same inject parameter",
          "hierarchy": "Control InjFun",
          "module": "Control.InjFun",
          "name": "(\u003e-|) \u003e-|",
          "normalized": "(InjFun a b c d,InjFun a b c d)-\u003eInjFun a(d,d)c e-\u003eInjFun a(b,b)c e",
          "package": "inject-function",
          "signature": "(InjFun c i m o,InjFun c i m o)-\u003eInjFun c(o,o)m o'-\u003eInjFun c(i,i)m o'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/inject-function/docs/Control-InjFun.html#v:-62--45--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeed a \u003ccode\u003e\u003ca\u003eInjFun\u003c/a\u003e\u003c/code\u003e with its regular parameters and injected parameters.\n\u003c/p\u003e",
          "module": "Control.InjFun",
          "name": "cfapply",
          "package": "inject-function",
          "signature": "InjFun c i m o -\u003e c -\u003e i -\u003e m o",
          "source": "src/Control-InjFun.html#cfapply",
          "type": "function"
        },
        "index": {
          "description": "Feed InjFun with its regular parameters and injected parameters",
          "hierarchy": "Control InjFun",
          "module": "Control.InjFun",
          "name": "cfapply",
          "normalized": "InjFun a b c d-\u003ea-\u003eb-\u003ec d",
          "package": "inject-function",
          "signature": "InjFun c i m o-\u003ec-\u003ei-\u003em o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/inject-function/docs/Control-InjFun.html#v:cfapply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExplode an \u003ccode\u003e\u003ca\u003eInjFun\u003c/a\u003e\u003c/code\u003e that outputs two values into two other \u003ccode\u003e\u003ca\u003eInjFun\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.InjFun",
          "name": "explode",
          "package": "inject-function",
          "signature": "InjFun c i m (o0, o1)-\u003e (InjFun c i m o0, InjFun c i m o1)",
          "type": "function"
        },
        "index": {
          "description": "Explode an InjFun that outputs two values into two other InjFun",
          "hierarchy": "Control InjFun",
          "module": "Control.InjFun",
          "name": "explode",
          "normalized": "InjFun a b c(d,d)-\u003e(InjFun a b c d,InjFun a b c d)",
          "package": "inject-function",
          "signature": "InjFun c i m(o,o)-\u003e(InjFun c i m o,InjFun c i m o)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/inject-function/docs/Control-InjFun.html#v:explode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an inject function.\n\u003c/p\u003e",
          "module": "Control.InjFun",
          "name": "inject",
          "package": "inject-function",
          "signature": "(c -\u003e i -\u003e m o) -\u003e InjFun c i m o",
          "source": "src/Control-InjFun.html#inject",
          "type": "function"
        },
        "index": {
          "description": "Create an inject function",
          "hierarchy": "Control InjFun",
          "module": "Control.InjFun",
          "name": "inject",
          "normalized": "(a-\u003eb-\u003ec d)-\u003eInjFun a b c d",
          "package": "inject-function",
          "signature": "(c-\u003ei-\u003em o)-\u003eInjFun c i m o",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/inject-function/docs/Control-InjFun.html#v:inject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two \u003ccode\u003e\u003ca\u003eInjFun\u003c/a\u003e\u003c/code\u003e into one.\n\u003c/p\u003e",
          "module": "Control.InjFun",
          "name": "merge",
          "package": "inject-function",
          "signature": "InjFun c0 i0 m o0-\u003e InjFun c1 i1 m o1-\u003e InjFun (c0, c1) (i0, i1) m (o0, o1)",
          "type": "function"
        },
        "index": {
          "description": "Merge two InjFun into one",
          "hierarchy": "Control InjFun",
          "module": "Control.InjFun",
          "name": "merge",
          "normalized": "InjFun a b c d-\u003eInjFun a b c d-\u003eInjFun(a,a)(b,b)c(d,d)",
          "package": "inject-function",
          "signature": "InjFun c i m o-\u003eInjFun c i m o-\u003eInjFun(c,c)(i,i)m(o,o)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/inject-function/docs/Control-InjFun.html#v:merge"
      }
    }
  ]
]