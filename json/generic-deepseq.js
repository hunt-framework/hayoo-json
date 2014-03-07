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
        "word": "generic-deepseq"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a \u003ccode\u003e\u003ca\u003edeepseq\u003c/a\u003e\u003c/code\u003e function for fully evaluating data\n structures (that is, evaluating to \"Normal Form\", and not just up to\n \"Head Normal Form\" like \u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e does).\n\u003c/p\u003e\u003cp\u003eIt uses the \u003ca\u003eGHC.Generics\u003c/a\u003e framework so that you can generate instances\n for your datatypes without having to provide an implementation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.DeepSeq",
          "name": "DeepSeq",
          "package": "generic-deepseq",
          "source": "src/Control-DeepSeq.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides deepseq function for fully evaluating data structures that is evaluating to Normal Form and not just up to Head Normal Form like seq does It uses the GHC.Generics framework so that you can generate instances for your datatypes without having to provide an implementation",
          "hierarchy": "Control DeepSeq",
          "module": "Control.DeepSeq",
          "name": "DeepSeq",
          "package": "generic-deepseq",
          "partial": "Deep Seq",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/generic-deepseq/docs/Control-DeepSeq.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.DeepSeq",
          "name": "DeepSeq",
          "package": "generic-deepseq",
          "source": "src/Control-DeepSeq.html#DeepSeq",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control DeepSeq",
          "module": "Control.DeepSeq",
          "name": "DeepSeq",
          "package": "generic-deepseq",
          "partial": "Deep Seq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/generic-deepseq/docs/Control-DeepSeq.html#t:DeepSeq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe deep analogue of \u003ccode\u003e\u003ca\u003e$!\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.DeepSeq",
          "name": "($!!)",
          "package": "generic-deepseq",
          "signature": "(a -\u003e b) -\u003e a -\u003e b",
          "source": "src/Control-DeepSeq.html#%24%21%21",
          "type": "function"
        },
        "index": {
          "description": "The deep analogue of",
          "hierarchy": "Control DeepSeq",
          "module": "Control.DeepSeq",
          "name": "($!!) $!!",
          "normalized": "(a-\u003eb)-\u003ea-\u003eb",
          "package": "generic-deepseq",
          "signature": "(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/generic-deepseq/docs/Control-DeepSeq.html#v:-36--33--33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates its first argument to normal form, and then returns its\n second argument as the result.\n\u003c/p\u003e",
          "module": "Control.DeepSeq",
          "name": "deepseq",
          "package": "generic-deepseq",
          "signature": "a -\u003e b -\u003e b",
          "source": "src/Control-DeepSeq.html#deepseq",
          "type": "function"
        },
        "index": {
          "description": "Evaluates its first argument to normal form and then returns its second argument as the result",
          "hierarchy": "Control DeepSeq",
          "module": "Control.DeepSeq",
          "name": "deepseq",
          "normalized": "a-\u003eb-\u003eb",
          "package": "generic-deepseq",
          "signature": "a-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/generic-deepseq/docs/Control-DeepSeq.html#v:deepseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates its argument to normal form, and then return it.\n\u003c/p\u003e",
          "module": "Control.DeepSeq",
          "name": "force",
          "package": "generic-deepseq",
          "signature": "a -\u003e a",
          "source": "src/Control-DeepSeq.html#force",
          "type": "function"
        },
        "index": {
          "description": "Evaluates its argument to normal form and then return it",
          "hierarchy": "Control DeepSeq",
          "module": "Control.DeepSeq",
          "name": "force",
          "normalized": "a-\u003ea",
          "package": "generic-deepseq",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/generic-deepseq/docs/Control-DeepSeq.html#v:force"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate its argument to normal form, and then return '()'.\n\u003c/p\u003e",
          "module": "Control.DeepSeq",
          "name": "rnf",
          "package": "generic-deepseq",
          "signature": "a -\u003e ()",
          "source": "src/Control-DeepSeq.html#rnf",
          "type": "method"
        },
        "index": {
          "description": "Evaluate its argument to normal form and then return",
          "hierarchy": "Control DeepSeq",
          "module": "Control.DeepSeq",
          "name": "rnf",
          "normalized": "a-\u003e()",
          "package": "generic-deepseq",
          "signature": "a-\u003e()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/generic-deepseq/docs/Control-DeepSeq.html#v:rnf"
      }
    }
  ]
]