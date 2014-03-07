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
        "word": "ContArrow"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.Transformer.Cont",
          "name": "Cont",
          "package": "ContArrow",
          "source": "src/Control-Arrow-Transformer-Cont.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Arrow Transformer Cont",
          "module": "Control.Arrow.Transformer.Cont",
          "name": "Cont",
          "package": "ContArrow",
          "partial": "Cont",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ContArrow/docs/Control-Arrow-Transformer-Cont.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.Transformer.Cont",
          "name": "ContArrow",
          "package": "ContArrow",
          "source": "src/Control-Arrow-Transformer-Cont.html#ContArrow",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Arrow Transformer Cont",
          "module": "Control.Arrow.Transformer.Cont",
          "name": "ContArrow",
          "package": "ContArrow",
          "partial": "Cont Arrow",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ContArrow/docs/Control-Arrow-Transformer-Cont.html#t:ContArrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.Transformer.Cont",
          "name": "CO",
          "package": "ContArrow",
          "signature": "CO (a c e -\u003e a b e)",
          "source": "src/Control-Arrow-Transformer-Cont.html#ContArrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Arrow Transformer Cont",
          "module": "Control.Arrow.Transformer.Cont",
          "name": "CO",
          "normalized": "CO(a b c-\u003ea d c)",
          "package": "ContArrow",
          "partial": "CO",
          "signature": "CO(a c e-\u003ea b e)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ContArrow/docs/Control-Arrow-Transformer-Cont.html#v:CO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.Transformer.Cont",
          "name": "callcc",
          "package": "ContArrow",
          "signature": "(a c e -\u003e ContArrow e a b c) -\u003e ContArrow e a b c",
          "source": "src/Control-Arrow-Transformer-Cont.html#callcc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Arrow Transformer Cont",
          "module": "Control.Arrow.Transformer.Cont",
          "name": "callcc",
          "normalized": "(a b c-\u003eContArrow c a d b)-\u003eContArrow c a d b",
          "package": "ContArrow",
          "signature": "(a c e-\u003eContArrow e a b c)-\u003eContArrow e a b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ContArrow/docs/Control-Arrow-Transformer-Cont.html#v:callcc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.Transformer.Cont",
          "name": "jump",
          "package": "ContArrow",
          "signature": "ContArrow e a (a c e, c) z",
          "source": "src/Control-Arrow-Transformer-Cont.html#jump",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Arrow Transformer Cont",
          "module": "Control.Arrow.Transformer.Cont",
          "name": "jump",
          "normalized": "ContArrow a b(b c a,c)d",
          "package": "ContArrow",
          "signature": "ContArrow e a(a c e,c)z",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ContArrow/docs/Control-Arrow-Transformer-Cont.html#v:jump"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.Transformer.Cont",
          "name": "liftCont",
          "package": "ContArrow",
          "signature": "a b c -\u003e ContArrow e a b c",
          "source": "src/Control-Arrow-Transformer-Cont.html#liftCont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Arrow Transformer Cont",
          "module": "Control.Arrow.Transformer.Cont",
          "name": "liftCont",
          "normalized": "a b c-\u003eContArrow d a b c",
          "package": "ContArrow",
          "partial": "Cont",
          "signature": "a b c-\u003eContArrow e a b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ContArrow/docs/Control-Arrow-Transformer-Cont.html#v:liftCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.Transformer.Cont",
          "name": "runCont",
          "package": "ContArrow",
          "signature": "ContArrow e a b c -\u003e a c e -\u003e a b e",
          "source": "src/Control-Arrow-Transformer-Cont.html#runCont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Arrow Transformer Cont",
          "module": "Control.Arrow.Transformer.Cont",
          "name": "runCont",
          "normalized": "ContArrow a b c d-\u003eb d a-\u003eb c a",
          "package": "ContArrow",
          "partial": "Cont",
          "signature": "ContArrow e a b c-\u003ea c e-\u003ea b e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ContArrow/docs/Control-Arrow-Transformer-Cont.html#v:runCont"
      }
    }
  ]
]