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
        "word": "fair-predicates"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis Haskell library provides an implementation of Boolean\n predicates with an interleaved evaluation of arguments.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Answer",
          "name": "Answer",
          "package": "fair-predicates",
          "source": "src/Data-Answer.html",
          "type": "module"
        },
        "index": {
          "description": "This Haskell library provides an implementation of Boolean predicates with an interleaved evaluation of arguments",
          "hierarchy": "Data Answer",
          "module": "Data.Answer",
          "name": "Answer",
          "package": "fair-predicates",
          "partial": "Answer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fair-predicates/docs/Data-Answer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eAnswer\u003c/code\u003es are like \u003ccode\u003eBool\u003c/code\u003es but can be evaluated incrementally.\n\u003c/p\u003e",
          "module": "Data.Answer",
          "name": "Answer",
          "package": "fair-predicates",
          "source": "src/Data-Answer.html#Answer",
          "type": "data"
        },
        "index": {
          "description": "Answer are like Bool but can be evaluated incrementally",
          "hierarchy": "Data Answer",
          "module": "Data.Answer",
          "name": "Answer",
          "package": "fair-predicates",
          "partial": "Answer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/fair-predicates/docs/Data-Answer.html#t:Answer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConjunction of answers.\n\u003c/p\u003e",
          "module": "Data.Answer",
          "name": "(/\\)",
          "package": "fair-predicates",
          "signature": "Answer -\u003e Answer -\u003e Answer",
          "source": "src/Data-Answer.html#%2F%5C",
          "type": "function"
        },
        "index": {
          "description": "Conjunction of answers",
          "hierarchy": "Data Answer",
          "module": "Data.Answer",
          "name": "(/\\) /\\",
          "normalized": "Answer-\u003eAnswer-\u003eAnswer",
          "package": "fair-predicates",
          "signature": "Answer-\u003eAnswer-\u003eAnswer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fair-predicates/docs/Data-Answer.html#v:-47--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisjunction of answers.\n\u003c/p\u003e",
          "module": "Data.Answer",
          "name": "(\\/)",
          "package": "fair-predicates",
          "signature": "Answer -\u003e Answer -\u003e Answer",
          "source": "src/Data-Answer.html#%5C%2F",
          "type": "function"
        },
        "index": {
          "description": "Disjunction of answers",
          "hierarchy": "Data Answer",
          "module": "Data.Answer",
          "name": "(\\/) \\/",
          "normalized": "Answer-\u003eAnswer-\u003eAnswer",
          "package": "fair-predicates",
          "signature": "Answer-\u003eAnswer-\u003eAnswer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fair-predicates/docs/Data-Answer.html#v:-92--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an answer from a boolean.\n\u003c/p\u003e",
          "module": "Data.Answer",
          "name": "answer",
          "package": "fair-predicates",
          "signature": "Bool -\u003e Answer",
          "source": "src/Data-Answer.html#answer",
          "type": "function"
        },
        "index": {
          "description": "Creates an answer from boolean",
          "hierarchy": "Data Answer",
          "module": "Data.Answer",
          "name": "answer",
          "normalized": "Bool-\u003eAnswer",
          "package": "fair-predicates",
          "signature": "Bool-\u003eAnswer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fair-predicates/docs/Data-Answer.html#v:answer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe negative answer.\n\u003c/p\u003e",
          "module": "Data.Answer",
          "name": "false",
          "package": "fair-predicates",
          "signature": "Answer",
          "source": "src/Data-Answer.html#false",
          "type": "function"
        },
        "index": {
          "description": "The negative answer",
          "hierarchy": "Data Answer",
          "module": "Data.Answer",
          "name": "false",
          "package": "fair-predicates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fair-predicates/docs/Data-Answer.html#v:false"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates an answer.\n\u003c/p\u003e",
          "module": "Data.Answer",
          "name": "fromAnswer",
          "package": "fair-predicates",
          "signature": "Answer -\u003e Bool",
          "source": "src/Data-Answer.html#fromAnswer",
          "type": "function"
        },
        "index": {
          "description": "Evaluates an answer",
          "hierarchy": "Data Answer",
          "module": "Data.Answer",
          "name": "fromAnswer",
          "normalized": "Answer-\u003eBool",
          "package": "fair-predicates",
          "partial": "Answer",
          "signature": "Answer-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fair-predicates/docs/Data-Answer.html#v:fromAnswer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegates an answer.\n\u003c/p\u003e",
          "module": "Data.Answer",
          "name": "neg",
          "package": "fair-predicates",
          "signature": "Answer -\u003e Answer",
          "source": "src/Data-Answer.html#neg",
          "type": "function"
        },
        "index": {
          "description": "Negates an answer",
          "hierarchy": "Data Answer",
          "module": "Data.Answer",
          "name": "neg",
          "normalized": "Answer-\u003eAnswer",
          "package": "fair-predicates",
          "signature": "Answer-\u003eAnswer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fair-predicates/docs/Data-Answer.html#v:neg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe positive answer.\n\u003c/p\u003e",
          "module": "Data.Answer",
          "name": "true",
          "package": "fair-predicates",
          "signature": "Answer",
          "source": "src/Data-Answer.html#true",
          "type": "function"
        },
        "index": {
          "description": "The positive answer",
          "hierarchy": "Data Answer",
          "module": "Data.Answer",
          "name": "true",
          "package": "fair-predicates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fair-predicates/docs/Data-Answer.html#v:true"
      }
    }
  ]
]