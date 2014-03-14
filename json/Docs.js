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
        "word": "Docs"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClasses for \u003ccode\u003e\u003ca\u003eDocumentable\u003c/a\u003e\u003c/code\u003e types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Docs.Class",
          "name": "Class",
          "package": "Docs",
          "source": "src/Text-Docs-Class.html",
          "type": "module"
        },
        "index": {
          "description": "Classes for Documentable types",
          "hierarchy": "Text Docs Class",
          "module": "Text.Docs.Class",
          "name": "Class",
          "package": "Docs",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Docs/docs/Text-Docs-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eDocumentable\u003c/a\u003e\u003c/code\u003e types with links.\n\u003c/p\u003e",
          "module": "Text.Docs.Class",
          "name": "DocLinked",
          "package": "Docs",
          "source": "src/Text-Docs-Class.html#DocLinked",
          "type": "class"
        },
        "index": {
          "description": "Documentable types with links",
          "hierarchy": "Text Docs Class",
          "module": "Text.Docs.Class",
          "name": "DocLinked",
          "package": "Docs",
          "partial": "Doc Linked",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Docs/docs/Text-Docs-Class.html#t:DocLinked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eDocumentable\u003c/a\u003e\u003c/code\u003e types with lists.\n\u003c/p\u003e",
          "module": "Text.Docs.Class",
          "name": "DocList",
          "package": "Docs",
          "source": "src/Text-Docs-Class.html#DocList",
          "type": "class"
        },
        "index": {
          "description": "Documentable types with lists",
          "hierarchy": "Text Docs Class",
          "module": "Text.Docs.Class",
          "name": "DocList",
          "package": "Docs",
          "partial": "Doc List",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Docs/docs/Text-Docs-Class.html#t:DocList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eDocumentable\u003c/a\u003e\u003c/code\u003e types with titles.\n\u003c/p\u003e",
          "module": "Text.Docs.Class",
          "name": "DocTitled",
          "package": "Docs",
          "source": "src/Text-Docs-Class.html#DocTitled",
          "type": "class"
        },
        "index": {
          "description": "Documentable types with titles",
          "hierarchy": "Text Docs Class",
          "module": "Text.Docs.Class",
          "name": "DocTitled",
          "package": "Docs",
          "partial": "Doc Titled",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Docs/docs/Text-Docs-Class.html#t:DocTitled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for types that represents a documentation text. Minimal complete definition: All except \u003ccode\u003e\u003ca\u003elnappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEvery instance of \u003ccode\u003e\u003ca\u003eDocumentable\u003c/a\u003e\u003c/code\u003e class can be an instance of \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Text.Docs.Class",
          "name": "Documentable",
          "package": "Docs",
          "source": "src/Text-Docs-Class.html#Documentable",
          "type": "class"
        },
        "index": {
          "description": "Class for types that represents documentation text Minimal complete definition All except lnappend Every instance of Documentable class can be an instance of Monoid class",
          "hierarchy": "Text Docs Class",
          "module": "Text.Docs.Class",
          "name": "Documentable",
          "package": "Docs",
          "partial": "Documentable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Docs/docs/Text-Docs-Class.html#t:Documentable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to a code format text.\n\u003c/p\u003e",
          "module": "Text.Docs.Class",
          "name": "code",
          "package": "Docs",
          "signature": "String -\u003e a",
          "source": "src/Text-Docs-Class.html#code",
          "type": "method"
        },
        "index": {
          "description": "String to code format text",
          "hierarchy": "Text Docs Class",
          "module": "Text.Docs.Class",
          "name": "code",
          "normalized": "String-\u003ea",
          "package": "Docs",
          "signature": "String-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Docs/docs/Text-Docs-Class.html#v:code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to a code block.\n\u003c/p\u003e",
          "module": "Text.Docs.Class",
          "name": "codeblock",
          "package": "Docs",
          "signature": "String -\u003e a",
          "source": "src/Text-Docs-Class.html#codeblock",
          "type": "method"
        },
        "index": {
          "description": "String to code block",
          "hierarchy": "Text Docs Class",
          "module": "Text.Docs.Class",
          "name": "codeblock",
          "normalized": "String-\u003ea",
          "package": "Docs",
          "signature": "String-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Docs/docs/Text-Docs-Class.html#v:codeblock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppending documentation.\n\u003c/p\u003e",
          "module": "Text.Docs.Class",
          "name": "dappend",
          "package": "Docs",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Text-Docs-Class.html#dappend",
          "type": "method"
        },
        "index": {
          "description": "Appending documentation",
          "hierarchy": "Text Docs Class",
          "module": "Text.Docs.Class",
          "name": "dappend",
          "normalized": "a-\u003ea-\u003ea",
          "package": "Docs",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Docs/docs/Text-Docs-Class.html#v:dappend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eDocumentable\u003c/a\u003e\u003c/code\u003e version of \u003ccode\u003e\u003ca\u003eunlines\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Docs.Class",
          "name": "dunlines",
          "package": "Docs",
          "signature": "[a] -\u003e a",
          "source": "src/Text-Docs-Class.html#dunlines",
          "type": "function"
        },
        "index": {
          "description": "Documentable version of unlines",
          "hierarchy": "Text Docs Class",
          "module": "Text.Docs.Class",
          "name": "dunlines",
          "normalized": "[a]-\u003ea",
          "package": "Docs",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Docs/docs/Text-Docs-Class.html#v:dunlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnumerated list.\n\u003c/p\u003e",
          "module": "Text.Docs.Class",
          "name": "elist",
          "package": "Docs",
          "signature": "[a] -\u003e a",
          "source": "src/Text-Docs-Class.html#elist",
          "type": "method"
        },
        "index": {
          "description": "Enumerated list",
          "hierarchy": "Text Docs Class",
          "module": "Text.Docs.Class",
          "name": "elist",
          "normalized": "[a]-\u003ea",
          "package": "Docs",
          "signature": "[a]-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Docs/docs/Text-Docs-Class.html#v:elist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmphasizing documentation.\n\u003c/p\u003e",
          "module": "Text.Docs.Class",
          "name": "emphasize",
          "package": "Docs",
          "signature": "a -\u003e a",
          "source": "src/Text-Docs-Class.html#emphasize",
          "type": "method"
        },
        "index": {
          "description": "Emphasizing documentation",
          "hierarchy": "Text Docs Class",
          "module": "Text.Docs.Class",
          "name": "emphasize",
          "normalized": "a-\u003ea",
          "package": "Docs",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Docs/docs/Text-Docs-Class.html#v:emphasize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty documentation.\n\u003c/p\u003e",
          "module": "Text.Docs.Class",
          "name": "emptydoc",
          "package": "Docs",
          "signature": "a",
          "source": "src/Text-Docs-Class.html#emptydoc",
          "type": "function"
        },
        "index": {
          "description": "An empty documentation",
          "hierarchy": "Text Docs Class",
          "module": "Text.Docs.Class",
          "name": "emptydoc",
          "package": "Docs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Docs/docs/Text-Docs-Class.html#v:emptydoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppending documentation, with line break.\n\u003c/p\u003e",
          "module": "Text.Docs.Class",
          "name": "lnappend",
          "package": "Docs",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Text-Docs-Class.html#lnappend",
          "type": "method"
        },
        "index": {
          "description": "Appending documentation with line break",
          "hierarchy": "Text Docs Class",
          "module": "Text.Docs.Class",
          "name": "lnappend",
          "normalized": "a-\u003ea-\u003ea",
          "package": "Docs",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Docs/docs/Text-Docs-Class.html#v:lnappend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA named URL to documentation. First argument is the name of the link, second argument the URL.\n\u003c/p\u003e",
          "module": "Text.Docs.Class",
          "name": "nameurl",
          "package": "Docs",
          "signature": "String -\u003e String -\u003e a",
          "source": "src/Text-Docs-Class.html#nameurl",
          "type": "method"
        },
        "index": {
          "description": "named URL to documentation First argument is the name of the link second argument the URL",
          "hierarchy": "Text Docs Class",
          "module": "Text.Docs.Class",
          "name": "nameurl",
          "normalized": "String-\u003eString-\u003ea",
          "package": "Docs",
          "signature": "String-\u003eString-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Docs/docs/Text-Docs-Class.html#v:nameurl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRendering documentation.\n\u003c/p\u003e",
          "module": "Text.Docs.Class",
          "name": "renderdoc",
          "package": "Docs",
          "signature": "a -\u003e String",
          "source": "src/Text-Docs-Class.html#renderdoc",
          "type": "method"
        },
        "index": {
          "description": "Rendering documentation",
          "hierarchy": "Text Docs Class",
          "module": "Text.Docs.Class",
          "name": "renderdoc",
          "normalized": "a-\u003eString",
          "package": "Docs",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Docs/docs/Text-Docs-Class.html#v:renderdoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaking a subtitle.\n\u003c/p\u003e",
          "module": "Text.Docs.Class",
          "name": "subtitle",
          "package": "Docs",
          "signature": "a -\u003e a",
          "source": "src/Text-Docs-Class.html#subtitle",
          "type": "method"
        },
        "index": {
          "description": "Making subtitle",
          "hierarchy": "Text Docs Class",
          "module": "Text.Docs.Class",
          "name": "subtitle",
          "normalized": "a-\u003ea",
          "package": "Docs",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Docs/docs/Text-Docs-Class.html#v:subtitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e to a documentation text.\n\u003c/p\u003e",
          "module": "Text.Docs.Class",
          "name": "text",
          "package": "Docs",
          "signature": "String -\u003e a",
          "source": "src/Text-Docs-Class.html#text",
          "type": "method"
        },
        "index": {
          "description": "String to documentation text",
          "hierarchy": "Text Docs Class",
          "module": "Text.Docs.Class",
          "name": "text",
          "normalized": "String-\u003ea",
          "package": "Docs",
          "signature": "String-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Docs/docs/Text-Docs-Class.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaking a title.\n\u003c/p\u003e",
          "module": "Text.Docs.Class",
          "name": "title",
          "package": "Docs",
          "signature": "a -\u003e a",
          "source": "src/Text-Docs-Class.html#title",
          "type": "method"
        },
        "index": {
          "description": "Making title",
          "hierarchy": "Text Docs Class",
          "module": "Text.Docs.Class",
          "name": "title",
          "normalized": "a-\u003ea",
          "package": "Docs",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Docs/docs/Text-Docs-Class.html#v:title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnordered list.\n\u003c/p\u003e",
          "module": "Text.Docs.Class",
          "name": "ulist",
          "package": "Docs",
          "signature": "[a] -\u003e a",
          "source": "src/Text-Docs-Class.html#ulist",
          "type": "method"
        },
        "index": {
          "description": "Unordered list",
          "hierarchy": "Text Docs Class",
          "module": "Text.Docs.Class",
          "name": "ulist",
          "normalized": "[a]-\u003ea",
          "package": "Docs",
          "signature": "[a]-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Docs/docs/Text-Docs-Class.html#v:ulist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn URL to documentation.\n\u003c/p\u003e",
          "module": "Text.Docs.Class",
          "name": "url",
          "package": "Docs",
          "signature": "String -\u003e a",
          "source": "src/Text-Docs-Class.html#url",
          "type": "method"
        },
        "index": {
          "description": "An URL to documentation",
          "hierarchy": "Text Docs Class",
          "module": "Text.Docs.Class",
          "name": "url",
          "normalized": "String-\u003ea",
          "package": "Docs",
          "signature": "String-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Docs/docs/Text-Docs-Class.html#v:url"
      }
    }
  ]
]