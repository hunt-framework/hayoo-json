[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/modsplit/docs/Data-SplitBounds.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines string literals for module split boundaries.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.SplitBounds",
        "fct-package": "modsplit",
        "fct-signature": "module",
        "fct-source": "src/Data-SplitBounds.html",
        "fct-type": "module",
        "title": "SplitBounds"
      },
      "index": {
        "description": "Defines string literals for module split boundaries",
        "hierarchy": "Data SplitBounds",
        "module": "Data.SplitBounds",
        "name": "SplitBounds",
        "normalized": "",
        "package": "modsplit",
        "partial": "Split Bounds",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/modsplit/docs/Data-SplitBounds.html#v:parts",
      "description": {
        "fct-descr": "\u003cp\u003eA generic version of \u003ccode\u003e\u003ca\u003ewords\u003c/a\u003e\u003c/code\u003e: breaks a list by any predicate.\n\u003c/p\u003e",
        "fct-module": "Data.SplitBounds",
        "fct-package": "modsplit",
        "fct-signature": "(a -\u003e Bool) -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/Data-SplitBounds.html#parts",
        "fct-type": "function",
        "title": "parts"
      },
      "index": {
        "description": "generic version of words breaks list by any predicate",
        "hierarchy": "Data SplitBounds",
        "module": "Data.SplitBounds",
        "name": "parts",
        "normalized": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]",
        "package": "modsplit",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/modsplit/docs/Data-SplitBounds.html#v:splitBegin",
      "description": {
        "fct-descr": "\u003cp\u003eA special comment to mark the start of a module to be created by the splitter.\n It should be followed immediately by a forward slash and a name of the\n module to create (with dots). Thus,\n\u003c/p\u003e\u003cpre\u003e\n splitBegin ++ \"/\" ++ \"Data.Foo\"\n\u003c/pre\u003e\u003cp\u003eresults in creation of a file \"Data/Foo.hs\" relatively to the current directory.\n\u003c/p\u003e",
        "fct-module": "Data.SplitBounds",
        "fct-package": "modsplit",
        "fct-signature": "String",
        "fct-source": "src/Data-SplitBounds.html#splitBegin",
        "fct-type": "function",
        "title": "splitBegin"
      },
      "index": {
        "description": "special comment to mark the start of module to be created by the splitter It should be followed immediately by forward slash and name of the module to create with dots Thus splitBegin Data.Foo results in creation of file Data Foo.hs relatively to the current directory",
        "hierarchy": "Data SplitBounds",
        "module": "Data.SplitBounds",
        "name": "splitBegin",
        "normalized": "",
        "package": "modsplit",
        "partial": "Begin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/modsplit/docs/Data-SplitBounds.html#v:splitClose",
      "description": {
        "fct-descr": "\u003cp\u003eA special comment to mark the end of a section to uncomment when splitting.\n\u003c/p\u003e",
        "fct-module": "Data.SplitBounds",
        "fct-package": "modsplit",
        "fct-signature": "String",
        "fct-source": "src/Data-SplitBounds.html#splitClose",
        "fct-type": "function",
        "title": "splitClose"
      },
      "index": {
        "description": "special comment to mark the end of section to uncomment when splitting",
        "hierarchy": "Data SplitBounds",
        "module": "Data.SplitBounds",
        "name": "splitClose",
        "normalized": "",
        "package": "modsplit",
        "partial": "Close",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/modsplit/docs/Data-SplitBounds.html#v:splitEnd",
      "description": {
        "fct-descr": "\u003cp\u003eA special comment to mark the end of a module to be created by the splitter.\n\u003c/p\u003e",
        "fct-module": "Data.SplitBounds",
        "fct-package": "modsplit",
        "fct-signature": "String",
        "fct-source": "src/Data-SplitBounds.html#splitEnd",
        "fct-type": "function",
        "title": "splitEnd"
      },
      "index": {
        "description": "special comment to mark the end of module to be created by the splitter",
        "hierarchy": "Data SplitBounds",
        "module": "Data.SplitBounds",
        "name": "splitEnd",
        "normalized": "",
        "package": "modsplit",
        "partial": "End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/modsplit/docs/Data-SplitBounds.html#v:splitOpen",
      "description": {
        "fct-descr": "\u003cp\u003eA special comment to mark the start of a section to uncomment when splitting.\n\u003c/p\u003e",
        "fct-module": "Data.SplitBounds",
        "fct-package": "modsplit",
        "fct-signature": "String",
        "fct-source": "src/Data-SplitBounds.html#splitOpen",
        "fct-type": "function",
        "title": "splitOpen"
      },
      "index": {
        "description": "special comment to mark the start of section to uncomment when splitting",
        "hierarchy": "Data SplitBounds",
        "module": "Data.SplitBounds",
        "name": "splitOpen",
        "normalized": "",
        "package": "modsplit",
        "partial": "Open",
        "signature": ""
      }
    }
  }
]