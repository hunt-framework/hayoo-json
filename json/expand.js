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
        "word": "expand"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Testing",
          "name": "Testing",
          "package": "expand",
          "source": "src/Testing.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Testing",
          "module": "Testing",
          "name": "Testing",
          "package": "expand",
          "partial": "Testing",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/expand/docs/Testing.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuilds a converter tool from an extensible grammar fragment and\n   a label of the synthesized output.\n\u003c/p\u003e",
          "module": "Testing",
          "name": "buildConverter",
          "package": "expand",
          "signature": "(forall env.  ExtGram env (Record HNil -\u003e syn) nts) -\u003e l -\u003e String -\u003e v",
          "source": "src/Testing.html#buildConverter",
          "type": "function"
        },
        "index": {
          "description": "Builds converter tool from an extensible grammar fragment and label of the synthesized output",
          "hierarchy": "Testing",
          "module": "Testing",
          "name": "buildConverter",
          "normalized": "(a b ExtGram c(Record HNil-\u003ed)e)-\u003ef-\u003eString-\u003eg",
          "package": "expand",
          "partial": "Converter",
          "signature": "(forall env. ExtGram env(Record HNil-\u003esyn)nts)-\u003el-\u003eString-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/expand/docs/Testing.html#v:buildConverter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Testing",
          "name": "doc",
          "package": "expand",
          "signature": "Document",
          "source": "src/Testing.html#doc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Testing",
          "module": "Testing",
          "name": "doc",
          "package": "expand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/expand/docs/Testing.html#v:doc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Testing",
          "name": "ex",
          "package": "expand",
          "signature": "IO ()",
          "source": "src/Testing.html#ex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Testing",
          "module": "Testing",
          "name": "ex",
          "normalized": "IO()",
          "package": "expand",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/expand/docs/Testing.html#v:ex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Testing",
          "name": "html2html",
          "package": "expand",
          "signature": "[Char] -\u003e [Char]",
          "source": "src/Testing.html#html2html",
          "type": "function"
        },
        "index": {
          "hierarchy": "Testing",
          "module": "Testing",
          "name": "html2html",
          "normalized": "[Char]-\u003e[Char]",
          "package": "expand",
          "signature": "[Char]-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/expand/docs/Testing.html#v:html2html"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Testing",
          "name": "latex2html",
          "package": "expand",
          "signature": "String -\u003e [Char]",
          "source": "src/Testing.html#latex2html",
          "type": "function"
        },
        "index": {
          "hierarchy": "Testing",
          "module": "Testing",
          "name": "latex2html",
          "normalized": "String-\u003e[Char]",
          "package": "expand",
          "signature": "String-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/expand/docs/Testing.html#v:latex2html"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Testing",
          "name": "latex2html'",
          "package": "expand",
          "signature": "String -\u003e [Char]",
          "source": "src/Testing.html#latex2html%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Testing",
          "module": "Testing",
          "name": "latex2html'",
          "normalized": "String-\u003e[Char]",
          "package": "expand",
          "signature": "String-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/expand/docs/Testing.html#v:latex2html-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Testing",
          "name": "latex2html''",
          "package": "expand",
          "signature": "String -\u003e [Char]",
          "source": "src/Testing.html#latex2html%27%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Testing",
          "module": "Testing",
          "name": "latex2html''",
          "normalized": "String-\u003e[Char]",
          "package": "expand",
          "signature": "String-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/expand/docs/Testing.html#v:latex2html-39--39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Testing",
          "name": "test",
          "package": "expand",
          "signature": "String -\u003e ParseResult [[Char]]",
          "source": "src/Testing.html#test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Testing",
          "module": "Testing",
          "name": "test",
          "normalized": "String-\u003eParseResult[[Char]]",
          "package": "expand",
          "signature": "String-\u003eParseResult[[Char]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/expand/docs/Testing.html#v:test"
      }
    }
  ]
]