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
        "word": "pattern-arrows"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eArrows for Pretty Printing\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.PatternArrows",
          "name": "PatternArrows",
          "package": "pattern-arrows",
          "source": "src/Control-PatternArrows.html",
          "type": "module"
        },
        "index": {
          "description": "Arrows for Pretty Printing",
          "hierarchy": "Control PatternArrows",
          "module": "Control.PatternArrows",
          "name": "PatternArrows",
          "package": "pattern-arrows",
          "partial": "Pattern Arrows",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pattern-arrows/docs/Control-PatternArrows.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn operator:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eAssocL\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A left-associative operator\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eAssocR\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A right-associative operator\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eWrap\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A prefix-like or postfix-like operator\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eSplit\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e A prefix-like or postfix-like operator which does not recurse into its operand\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Control.PatternArrows",
          "name": "Operator",
          "package": "pattern-arrows",
          "source": "src/Control-PatternArrows.html#Operator",
          "type": "data"
        },
        "index": {
          "description": "An operator AssocL left-associative operator AssocR right-associative operator Wrap prefix-like or postfix-like operator Split prefix-like or postfix-like operator which does not recurse into its operand",
          "hierarchy": "Control PatternArrows",
          "module": "Control.PatternArrows",
          "name": "Operator",
          "package": "pattern-arrows",
          "partial": "Operator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pattern-arrows/docs/Control-PatternArrows.html#t:Operator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA table of operators\n\u003c/p\u003e",
          "module": "Control.PatternArrows",
          "name": "OperatorTable",
          "package": "pattern-arrows",
          "source": "src/Control-PatternArrows.html#OperatorTable",
          "type": "data"
        },
        "index": {
          "description": "table of operators",
          "hierarchy": "Control PatternArrows",
          "module": "Control.PatternArrows",
          "name": "OperatorTable",
          "package": "pattern-arrows",
          "partial": "Operator Table",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pattern-arrows/docs/Control-PatternArrows.html#t:OperatorTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA first-order pattern match\n\u003c/p\u003e\u003cp\u003eA pattern is a Kleisli arrow for the \u003ccode\u003eStateT Maybe\u003c/code\u003e monad. That is, patterns can fail, and can carry user-defined state.\n\u003c/p\u003e",
          "module": "Control.PatternArrows",
          "name": "Pattern",
          "package": "pattern-arrows",
          "source": "src/Control-PatternArrows.html#Pattern",
          "type": "newtype"
        },
        "index": {
          "description": "first-order pattern match pattern is Kleisli arrow for the StateT Maybe monad That is patterns can fail and can carry user-defined state",
          "hierarchy": "Control PatternArrows",
          "module": "Control.PatternArrows",
          "name": "Pattern",
          "package": "pattern-arrows",
          "partial": "Pattern",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/pattern-arrows/docs/Control-PatternArrows.html#t:Pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.PatternArrows",
          "name": "AssocL",
          "package": "pattern-arrows",
          "signature": "Pattern u a (a, a) -\u003e (r -\u003e r -\u003e r) -\u003e Operator u a r",
          "source": "src/Control-PatternArrows.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control PatternArrows",
          "module": "Control.PatternArrows",
          "name": "AssocL",
          "normalized": "Pattern a b(b,b)-\u003e(c-\u003ec-\u003ec)-\u003eOperator a b c",
          "package": "pattern-arrows",
          "partial": "Assoc",
          "signature": "Pattern u a(a,a)-\u003e(r-\u003er-\u003er)-\u003eOperator u a r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pattern-arrows/docs/Control-PatternArrows.html#v:AssocL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.PatternArrows",
          "name": "AssocR",
          "package": "pattern-arrows",
          "signature": "Pattern u a (a, a) -\u003e (r -\u003e r -\u003e r) -\u003e Operator u a r",
          "source": "src/Control-PatternArrows.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control PatternArrows",
          "module": "Control.PatternArrows",
          "name": "AssocR",
          "normalized": "Pattern a b(b,b)-\u003e(c-\u003ec-\u003ec)-\u003eOperator a b c",
          "package": "pattern-arrows",
          "partial": "Assoc",
          "signature": "Pattern u a(a,a)-\u003e(r-\u003er-\u003er)-\u003eOperator u a r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pattern-arrows/docs/Control-PatternArrows.html#v:AssocR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.PatternArrows",
          "name": "OperatorTable",
          "package": "pattern-arrows",
          "signature": "OperatorTable",
          "source": "src/Control-PatternArrows.html#OperatorTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control PatternArrows",
          "module": "Control.PatternArrows",
          "name": "OperatorTable",
          "package": "pattern-arrows",
          "partial": "Operator Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pattern-arrows/docs/Control-PatternArrows.html#v:OperatorTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.PatternArrows",
          "name": "Pattern",
          "package": "pattern-arrows",
          "signature": "Pattern",
          "source": "src/Control-PatternArrows.html#Pattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control PatternArrows",
          "module": "Control.PatternArrows",
          "name": "Pattern",
          "package": "pattern-arrows",
          "partial": "Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pattern-arrows/docs/Control-PatternArrows.html#v:Pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.PatternArrows",
          "name": "Split",
          "package": "pattern-arrows",
          "signature": "Pattern u a (s, t) -\u003e (s -\u003e t -\u003e r) -\u003e Operator u a r",
          "source": "src/Control-PatternArrows.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control PatternArrows",
          "module": "Control.PatternArrows",
          "name": "Split",
          "normalized": "Pattern a b(c,d)-\u003e(c-\u003ed-\u003ee)-\u003eOperator a b e",
          "package": "pattern-arrows",
          "partial": "Split",
          "signature": "Pattern u a(s,t)-\u003e(s-\u003et-\u003er)-\u003eOperator u a r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pattern-arrows/docs/Control-PatternArrows.html#v:Split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.PatternArrows",
          "name": "Wrap",
          "package": "pattern-arrows",
          "signature": "Pattern u a (s, a) -\u003e (s -\u003e r -\u003e r) -\u003e Operator u a r",
          "source": "src/Control-PatternArrows.html#Operator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control PatternArrows",
          "module": "Control.PatternArrows",
          "name": "Wrap",
          "normalized": "Pattern a b(c,b)-\u003e(c-\u003ed-\u003ed)-\u003eOperator a b d",
          "package": "pattern-arrows",
          "partial": "Wrap",
          "signature": "Pattern u a(s,a)-\u003e(s-\u003er-\u003er)-\u003eOperator u a r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pattern-arrows/docs/Control-PatternArrows.html#v:Wrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a pretty printer from an operator table and an indecomposable pattern\n\u003c/p\u003e",
          "module": "Control.PatternArrows",
          "name": "buildPrettyPrinter",
          "package": "pattern-arrows",
          "signature": "OperatorTable u a r -\u003e Pattern u a r -\u003e Pattern u a r",
          "source": "src/Control-PatternArrows.html#buildPrettyPrinter",
          "type": "function"
        },
        "index": {
          "description": "Build pretty printer from an operator table and an indecomposable pattern",
          "hierarchy": "Control PatternArrows",
          "module": "Control.PatternArrows",
          "name": "buildPrettyPrinter",
          "normalized": "OperatorTable a b c-\u003ePattern a b c-\u003ePattern a b c",
          "package": "pattern-arrows",
          "partial": "Pretty Printer",
          "signature": "OperatorTable u a r-\u003ePattern u a r-\u003ePattern u a r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pattern-arrows/docs/Control-PatternArrows.html#v:buildPrettyPrinter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a pattern which recursively matches on the left-hand-side\n\u003c/p\u003e",
          "module": "Control.PatternArrows",
          "name": "chainl",
          "package": "pattern-arrows",
          "signature": "Pattern u a (a, a) -\u003e (r -\u003e r -\u003e r) -\u003e Pattern u a r -\u003e Pattern u a r",
          "source": "src/Control-PatternArrows.html#chainl",
          "type": "function"
        },
        "index": {
          "description": "Construct pattern which recursively matches on the left-hand-side",
          "hierarchy": "Control PatternArrows",
          "module": "Control.PatternArrows",
          "name": "chainl",
          "normalized": "Pattern a b(b,b)-\u003e(c-\u003ec-\u003ec)-\u003ePattern a b c-\u003ePattern a b c",
          "package": "pattern-arrows",
          "signature": "Pattern u a(a,a)-\u003e(r-\u003er-\u003er)-\u003ePattern u a r-\u003ePattern u a r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pattern-arrows/docs/Control-PatternArrows.html#v:chainl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a pattern which recursively matches on the right-hand side\n\u003c/p\u003e",
          "module": "Control.PatternArrows",
          "name": "chainr",
          "package": "pattern-arrows",
          "signature": "Pattern u a (a, a) -\u003e (r -\u003e r -\u003e r) -\u003e Pattern u a r -\u003e Pattern u a r",
          "source": "src/Control-PatternArrows.html#chainr",
          "type": "function"
        },
        "index": {
          "description": "Construct pattern which recursively matches on the right-hand side",
          "hierarchy": "Control PatternArrows",
          "module": "Control.PatternArrows",
          "name": "chainr",
          "normalized": "Pattern a b(b,b)-\u003e(c-\u003ec-\u003ec)-\u003ePattern a b c-\u003ePattern a b c",
          "package": "pattern-arrows",
          "signature": "Pattern u a(a,a)-\u003e(r-\u003er-\u003er)-\u003ePattern u a r-\u003ePattern u a r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pattern-arrows/docs/Control-PatternArrows.html#v:chainr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a pattern from a function\n\u003c/p\u003e",
          "module": "Control.PatternArrows",
          "name": "mkPattern",
          "package": "pattern-arrows",
          "signature": "(a -\u003e Maybe b) -\u003e Pattern u a b",
          "source": "src/Control-PatternArrows.html#mkPattern",
          "type": "function"
        },
        "index": {
          "description": "Construct pattern from function",
          "hierarchy": "Control PatternArrows",
          "module": "Control.PatternArrows",
          "name": "mkPattern",
          "normalized": "(a-\u003eMaybe b)-\u003ePattern c a b",
          "package": "pattern-arrows",
          "partial": "Pattern",
          "signature": "(a-\u003eMaybe b)-\u003ePattern u a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pattern-arrows/docs/Control-PatternArrows.html#v:mkPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a pattern from a stateful function\n\u003c/p\u003e",
          "module": "Control.PatternArrows",
          "name": "mkPattern'",
          "package": "pattern-arrows",
          "signature": "(a -\u003e StateT u Maybe b) -\u003e Pattern u a b",
          "source": "src/Control-PatternArrows.html#mkPattern%27",
          "type": "function"
        },
        "index": {
          "description": "Construct pattern from stateful function",
          "hierarchy": "Control PatternArrows",
          "module": "Control.PatternArrows",
          "name": "mkPattern'",
          "normalized": "(a-\u003eStateT b Maybe c)-\u003ePattern b a c",
          "package": "pattern-arrows",
          "partial": "Pattern'",
          "signature": "(a-\u003eStateT u Maybe b)-\u003ePattern u a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pattern-arrows/docs/Control-PatternArrows.html#v:mkPattern-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a pattern with an input and initial user state\n\u003c/p\u003e\u003cp\u003eReturns Nothing if the pattern fails to match\n\u003c/p\u003e",
          "module": "Control.PatternArrows",
          "name": "pattern",
          "package": "pattern-arrows",
          "signature": "Pattern u a b -\u003e u -\u003e a -\u003e Maybe b",
          "source": "src/Control-PatternArrows.html#pattern",
          "type": "function"
        },
        "index": {
          "description": "Run pattern with an input and initial user state Returns Nothing if the pattern fails to match",
          "hierarchy": "Control PatternArrows",
          "module": "Control.PatternArrows",
          "name": "pattern",
          "normalized": "Pattern a b c-\u003ea-\u003eb-\u003eMaybe c",
          "package": "pattern-arrows",
          "signature": "Pattern u a b-\u003eu-\u003ea-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pattern-arrows/docs/Control-PatternArrows.html#v:pattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.PatternArrows",
          "name": "runOperatorTable",
          "package": "pattern-arrows",
          "signature": "[[Operator u a r]]",
          "source": "src/Control-PatternArrows.html#OperatorTable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control PatternArrows",
          "module": "Control.PatternArrows",
          "name": "runOperatorTable",
          "normalized": "[[Operator a b c]]",
          "package": "pattern-arrows",
          "partial": "Operator Table",
          "signature": "[[Operator u a r]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pattern-arrows/docs/Control-PatternArrows.html#v:runOperatorTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.PatternArrows",
          "name": "runPattern",
          "package": "pattern-arrows",
          "signature": "Kleisli (StateT u Maybe) a b",
          "source": "src/Control-PatternArrows.html#Pattern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control PatternArrows",
          "module": "Control.PatternArrows",
          "name": "runPattern",
          "package": "pattern-arrows",
          "partial": "Pattern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pattern-arrows/docs/Control-PatternArrows.html#v:runPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a pattern which matches a part of a tuple\n\u003c/p\u003e",
          "module": "Control.PatternArrows",
          "name": "split",
          "package": "pattern-arrows",
          "signature": "Pattern u a (s, t) -\u003e (s -\u003e t -\u003e r) -\u003e Pattern u a r",
          "source": "src/Control-PatternArrows.html#split",
          "type": "function"
        },
        "index": {
          "description": "Construct pattern which matches part of tuple",
          "hierarchy": "Control PatternArrows",
          "module": "Control.PatternArrows",
          "name": "split",
          "normalized": "Pattern a b(c,d)-\u003e(c-\u003ed-\u003ee)-\u003ePattern a b e",
          "package": "pattern-arrows",
          "signature": "Pattern u a(s,t)-\u003e(s-\u003et-\u003er)-\u003ePattern u a r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pattern-arrows/docs/Control-PatternArrows.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a pattern which recursively matches on one-side of a tuple\n\u003c/p\u003e",
          "module": "Control.PatternArrows",
          "name": "wrap",
          "package": "pattern-arrows",
          "signature": "Pattern u a (s, a) -\u003e (s -\u003e r -\u003e r) -\u003e Pattern u a r -\u003e Pattern u a r",
          "source": "src/Control-PatternArrows.html#wrap",
          "type": "function"
        },
        "index": {
          "description": "Construct pattern which recursively matches on one-side of tuple",
          "hierarchy": "Control PatternArrows",
          "module": "Control.PatternArrows",
          "name": "wrap",
          "normalized": "Pattern a b(c,b)-\u003e(c-\u003ed-\u003ed)-\u003ePattern a b d-\u003ePattern a b d",
          "package": "pattern-arrows",
          "signature": "Pattern u a(s,a)-\u003e(s-\u003er-\u003er)-\u003ePattern u a r-\u003ePattern u a r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pattern-arrows/docs/Control-PatternArrows.html#v:wrap"
      }
    }
  ]
]