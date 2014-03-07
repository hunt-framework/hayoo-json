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
        "word": "modsplit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines string literals for module split boundaries.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.SplitBounds",
          "name": "SplitBounds",
          "package": "modsplit",
          "source": "src/Data-SplitBounds.html",
          "type": "module"
        },
        "index": {
          "description": "Defines string literals for module split boundaries",
          "hierarchy": "Data SplitBounds",
          "module": "Data.SplitBounds",
          "name": "SplitBounds",
          "package": "modsplit",
          "partial": "Split Bounds",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/modsplit/docs/Data-SplitBounds.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generic version of \u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e: breaks a list by any predicate.\n\u003c/p\u003e",
          "module": "Data.SplitBounds",
          "name": "parts",
          "package": "modsplit",
          "signature": "(a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
          "source": "src/Data-SplitBounds.html#parts",
          "type": "function"
        },
        "index": {
          "description": "generic version of words breaks list by any predicate",
          "hierarchy": "Data SplitBounds",
          "module": "Data.SplitBounds",
          "name": "parts",
          "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "package": "modsplit",
          "signature": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modsplit/docs/Data-SplitBounds.html#v:parts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA special comment to mark the start of a module to be created by the splitter.\n It should be followed immediately by a forward slash and a name of the\n module to create (with dots). Thus,\n\u003c/p\u003e\u003cpre\u003e\n splitBegin ++ \"/\" ++ \"Data.Foo\"\n\u003c/pre\u003e\u003cp\u003eresults in creation of a file \"Data/Foo.hs\" relatively to the current directory.\n\u003c/p\u003e",
          "module": "Data.SplitBounds",
          "name": "splitBegin",
          "package": "modsplit",
          "signature": "String",
          "source": "src/Data-SplitBounds.html#splitBegin",
          "type": "function"
        },
        "index": {
          "description": "special comment to mark the start of module to be created by the splitter It should be followed immediately by forward slash and name of the module to create with dots Thus splitBegin Data.Foo results in creation of file Data Foo.hs relatively to the current directory",
          "hierarchy": "Data SplitBounds",
          "module": "Data.SplitBounds",
          "name": "splitBegin",
          "package": "modsplit",
          "partial": "Begin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modsplit/docs/Data-SplitBounds.html#v:splitBegin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA special comment to mark the end of a section to uncomment when splitting.\n\u003c/p\u003e",
          "module": "Data.SplitBounds",
          "name": "splitClose",
          "package": "modsplit",
          "signature": "String",
          "source": "src/Data-SplitBounds.html#splitClose",
          "type": "function"
        },
        "index": {
          "description": "special comment to mark the end of section to uncomment when splitting",
          "hierarchy": "Data SplitBounds",
          "module": "Data.SplitBounds",
          "name": "splitClose",
          "package": "modsplit",
          "partial": "Close",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modsplit/docs/Data-SplitBounds.html#v:splitClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA special comment to mark the end of a module to be created by the splitter.\n\u003c/p\u003e",
          "module": "Data.SplitBounds",
          "name": "splitEnd",
          "package": "modsplit",
          "signature": "String",
          "source": "src/Data-SplitBounds.html#splitEnd",
          "type": "function"
        },
        "index": {
          "description": "special comment to mark the end of module to be created by the splitter",
          "hierarchy": "Data SplitBounds",
          "module": "Data.SplitBounds",
          "name": "splitEnd",
          "package": "modsplit",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modsplit/docs/Data-SplitBounds.html#v:splitEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA special comment to mark the start of a section to uncomment when splitting.\n\u003c/p\u003e",
          "module": "Data.SplitBounds",
          "name": "splitOpen",
          "package": "modsplit",
          "signature": "String",
          "source": "src/Data-SplitBounds.html#splitOpen",
          "type": "function"
        },
        "index": {
          "description": "special comment to mark the start of section to uncomment when splitting",
          "hierarchy": "Data SplitBounds",
          "module": "Data.SplitBounds",
          "name": "splitOpen",
          "package": "modsplit",
          "partial": "Open",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/modsplit/docs/Data-SplitBounds.html#v:splitOpen"
      }
    }
  ]
]