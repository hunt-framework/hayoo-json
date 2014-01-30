[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Html.html#",
      "description": {
        "fct-module": "Cheapskate.Html",
        "fct-package": "cheapskate",
        "fct-signature": "module",
        "fct-source": "src/Cheapskate-Html.html",
        "fct-type": "module",
        "title": "Html"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Html",
        "module": "Cheapskate.Html",
        "name": "Html",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Html",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Html.html#v:renderBlocks",
      "description": {
        "fct-module": "Cheapskate.Html",
        "fct-package": "cheapskate",
        "fct-signature": "Options -\u003e Blocks -\u003e Html",
        "fct-source": "src/Cheapskate-Html.html#renderBlocks",
        "fct-type": "function",
        "title": "renderBlocks"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Html",
        "module": "Cheapskate.Html",
        "name": "renderBlocks",
        "normalized": "Options-\u003eBlocks-\u003eHtml",
        "package": "cheapskate",
        "partial": "Blocks",
        "signature": "Options-\u003eBlocks-\u003eHtml"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Html.html#v:renderDoc",
      "description": {
        "fct-descr": "\u003cp\u003eRender a markdown document as \u003ccode\u003e\u003ca\u003eHtml\u003c/a\u003e\u003c/code\u003e.  (This can be turned\n into a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003eByteString\u003c/code\u003e using a renderer from the \u003ccode\u003eblaze-html\u003c/code\u003e\n library.)\n\u003c/p\u003e",
        "fct-module": "Cheapskate.Html",
        "fct-package": "cheapskate",
        "fct-signature": "Doc -\u003e Html",
        "fct-source": "src/Cheapskate-Html.html#renderDoc",
        "fct-type": "function",
        "title": "renderDoc"
      },
      "index": {
        "description": "Render markdown document as Html This can be turned into Text or ByteString using renderer from the blaze-html library",
        "hierarchy": "Cheapskate Html",
        "module": "Cheapskate.Html",
        "name": "renderDoc",
        "normalized": "Doc-\u003eHtml",
        "package": "cheapskate",
        "partial": "Doc",
        "signature": "Doc-\u003eHtml"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Html.html#v:renderInlines",
      "description": {
        "fct-module": "Cheapskate.Html",
        "fct-package": "cheapskate",
        "fct-signature": "Options -\u003e Inlines -\u003e Html",
        "fct-source": "src/Cheapskate-Html.html#renderInlines",
        "fct-type": "function",
        "title": "renderInlines"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Html",
        "module": "Cheapskate.Html",
        "name": "renderInlines",
        "normalized": "Options-\u003eInlines-\u003eHtml",
        "package": "cheapskate",
        "partial": "Inlines",
        "signature": "Options-\u003eInlines-\u003eHtml"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Parse.html#",
      "description": {
        "fct-module": "Cheapskate.Parse",
        "fct-package": "cheapskate",
        "fct-signature": "module",
        "fct-source": "src/Cheapskate-Parse.html",
        "fct-type": "module",
        "title": "Parse"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Parse",
        "module": "Cheapskate.Parse",
        "name": "Parse",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Parse.html#v:markdown",
      "description": {
        "fct-descr": "\u003cp\u003eParses the input as a markdown document.  Note that \u003ccode\u003e\u003ca\u003eDoc\u003c/a\u003e\u003c/code\u003e is an instance\n of \u003ccode\u003eToMarkup\u003c/code\u003e, so the document can be converted to \u003ccode\u003eHtml\u003c/code\u003e using \u003ccode\u003etoHtml\u003c/code\u003e.\n A simple \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eHtml\u003c/code\u003e filter would be\n\u003c/p\u003e\u003cpre\u003e markdownToHtml :: Text -\u003e Html\n markdownToHtml = toHtml . markdown def\n\u003c/pre\u003e",
        "fct-module": "Cheapskate.Parse",
        "fct-package": "cheapskate",
        "fct-signature": "Options -\u003e Text -\u003e Doc",
        "fct-source": "src/Cheapskate-Parse.html#markdown",
        "fct-type": "function",
        "title": "markdown"
      },
      "index": {
        "description": "Parses the input as markdown document Note that Doc is an instance of ToMarkup so the document can be converted to Html using toHtml simple Text to Html filter would be markdownToHtml Text Html markdownToHtml toHtml markdown def",
        "hierarchy": "Cheapskate Parse",
        "module": "Cheapskate.Parse",
        "name": "markdown",
        "normalized": "Options-\u003eText-\u003eDoc",
        "package": "cheapskate",
        "partial": "",
        "signature": "Options-\u003eText-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "module",
        "fct-source": "src/Cheapskate-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "Types",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#t:Block",
      "description": {
        "fct-descr": "\u003cp\u003eBlock-level elements.\n\u003c/p\u003e",
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "data",
        "fct-source": "src/Cheapskate-Types.html#Block",
        "fct-type": "data",
        "title": "Block"
      },
      "index": {
        "description": "Block-level elements",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "Block",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#t:Blocks",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "type",
        "fct-source": "src/Cheapskate-Types.html#Blocks",
        "fct-type": "type",
        "title": "Blocks"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "Blocks",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Blocks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#t:CodeAttr",
      "description": {
        "fct-descr": "\u003cp\u003eAttributes for fenced code blocks.  \u003ccode\u003e\u003ca\u003ecodeLang\u003c/a\u003e\u003c/code\u003e is the\n first word of the attribute line, \u003ccode\u003e\u003ca\u003ecodeInfo\u003c/a\u003e\u003c/code\u003e is the rest.\n\u003c/p\u003e",
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "data",
        "fct-source": "src/Cheapskate-Types.html#CodeAttr",
        "fct-type": "data",
        "title": "CodeAttr"
      },
      "index": {
        "description": "Attributes for fenced code blocks codeLang is the first word of the attribute line codeInfo is the rest",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "CodeAttr",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Code Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#t:Doc",
      "description": {
        "fct-descr": "\u003cp\u003eStructured representation of a document.  The \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e affect\n how the document is rendered by \u003ccode\u003etoHtml\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "data",
        "fct-source": "src/Cheapskate-Types.html#Doc",
        "fct-type": "data",
        "title": "Doc"
      },
      "index": {
        "description": "Structured representation of document The Options affect how the document is rendered by toHtml",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "Doc",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#t:HtmlTagType",
      "description": {
        "fct-descr": "\u003cp\u003eSimple representation of HTML tag.\n\u003c/p\u003e",
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "data",
        "fct-source": "src/Cheapskate-Types.html#HtmlTagType",
        "fct-type": "data",
        "title": "HtmlTagType"
      },
      "index": {
        "description": "Simple representation of HTML tag",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "HtmlTagType",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Html Tag Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#t:Inline",
      "description": {
        "fct-descr": "\u003cp\u003eInline elements.\n\u003c/p\u003e",
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "data",
        "fct-source": "src/Cheapskate-Types.html#Inline",
        "fct-type": "data",
        "title": "Inline"
      },
      "index": {
        "description": "Inline elements",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "Inline",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Inline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#t:Inlines",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "type",
        "fct-source": "src/Cheapskate-Types.html#Inlines",
        "fct-type": "type",
        "title": "Inlines"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "Inlines",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Inlines",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#t:ListType",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "data",
        "fct-source": "src/Cheapskate-Types.html#ListType",
        "fct-type": "data",
        "title": "ListType"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "ListType",
        "normalized": "",
        "package": "cheapskate",
        "partial": "List Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#t:NumWrapper",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "data",
        "fct-source": "src/Cheapskate-Types.html#NumWrapper",
        "fct-type": "data",
        "title": "NumWrapper"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "NumWrapper",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Num Wrapper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#t:Options",
      "description": {
        "fct-descr": "\u003cp\u003eRendering and parsing options.\n\u003c/p\u003e",
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "data",
        "fct-source": "src/Cheapskate-Types.html#Options",
        "fct-type": "data",
        "title": "Options"
      },
      "index": {
        "description": "Rendering and parsing options",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "Options",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#t:ReferenceMap",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "type",
        "fct-source": "src/Cheapskate-Types.html#ReferenceMap",
        "fct-type": "type",
        "title": "ReferenceMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "ReferenceMap",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Reference Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Blockquote",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "Blockquote Blocks",
        "fct-source": "src/Cheapskate-Types.html#Block",
        "fct-type": "function",
        "title": "Blockquote"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "Blockquote",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Blockquote",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Bullet",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "Bullet Char",
        "fct-source": "src/Cheapskate-Types.html#ListType",
        "fct-type": "function",
        "title": "Bullet"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "Bullet",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Bullet",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Closing",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "Closing Text",
        "fct-source": "src/Cheapskate-Types.html#HtmlTagType",
        "fct-type": "function",
        "title": "Closing"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "Closing",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Closing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Code",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "Code Text",
        "fct-source": "src/Cheapskate-Types.html#Inline",
        "fct-type": "function",
        "title": "Code"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "Code",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:CodeAttr",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "CodeAttr",
        "fct-source": "src/Cheapskate-Types.html#CodeAttr",
        "fct-type": "function",
        "title": "CodeAttr"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "CodeAttr",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Code Attr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:CodeBlock",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "CodeBlock CodeAttr Text",
        "fct-source": "src/Cheapskate-Types.html#Block",
        "fct-type": "function",
        "title": "CodeBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "CodeBlock",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Code Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Doc",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "Doc Options Blocks",
        "fct-source": "src/Cheapskate-Types.html#Doc",
        "fct-type": "function",
        "title": "Doc"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "Doc",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Doc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Emph",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "Emph Inlines",
        "fct-source": "src/Cheapskate-Types.html#Inline",
        "fct-type": "function",
        "title": "Emph"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "Emph",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Emph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Entity",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "Entity Text",
        "fct-source": "src/Cheapskate-Types.html#Inline",
        "fct-type": "function",
        "title": "Entity"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "Entity",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Entity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:HRule",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "HRule",
        "fct-source": "src/Cheapskate-Types.html#Block",
        "fct-type": "function",
        "title": "HRule"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "HRule",
        "normalized": "",
        "package": "cheapskate",
        "partial": "HRule",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Header",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "Header Int Inlines",
        "fct-source": "src/Cheapskate-Types.html#Block",
        "fct-type": "function",
        "title": "Header"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "Header",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Header",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:HtmlBlock",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "HtmlBlock Text",
        "fct-source": "src/Cheapskate-Types.html#Block",
        "fct-type": "function",
        "title": "HtmlBlock"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "HtmlBlock",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Html Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Image",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "Image Inlines Text Text",
        "fct-source": "src/Cheapskate-Types.html#Inline",
        "fct-type": "function",
        "title": "Image"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "Image",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Image",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:LineBreak",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "LineBreak",
        "fct-source": "src/Cheapskate-Types.html#Inline",
        "fct-type": "function",
        "title": "LineBreak"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "LineBreak",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Line Break",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Link",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "Link Inlines Text Text",
        "fct-source": "src/Cheapskate-Types.html#Inline",
        "fct-type": "function",
        "title": "Link"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "Link",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Link",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:List",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "List Bool ListType [Blocks]",
        "fct-source": "src/Cheapskate-Types.html#Block",
        "fct-type": "function",
        "title": "List"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "List",
        "normalized": "List Bool ListType[Blocks]",
        "package": "cheapskate",
        "partial": "List",
        "signature": "List Bool ListType[Blocks]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Numbered",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "Numbered NumWrapper Int",
        "fct-source": "src/Cheapskate-Types.html#ListType",
        "fct-type": "function",
        "title": "Numbered"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "Numbered",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Numbered",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Opening",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "Opening Text",
        "fct-source": "src/Cheapskate-Types.html#HtmlTagType",
        "fct-type": "function",
        "title": "Opening"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "Opening",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Opening",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Options",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "Options",
        "fct-source": "src/Cheapskate-Types.html#Options",
        "fct-type": "function",
        "title": "Options"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "Options",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Para",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "Para Inlines",
        "fct-source": "src/Cheapskate-Types.html#Block",
        "fct-type": "function",
        "title": "Para"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "Para",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Para",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:ParenFollowing",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "ParenFollowing",
        "fct-source": "src/Cheapskate-Types.html#NumWrapper",
        "fct-type": "function",
        "title": "ParenFollowing"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "ParenFollowing",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Paren Following",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:PeriodFollowing",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "PeriodFollowing",
        "fct-source": "src/Cheapskate-Types.html#NumWrapper",
        "fct-type": "function",
        "title": "PeriodFollowing"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "PeriodFollowing",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Period Following",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:RawHtml",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "RawHtml Text",
        "fct-source": "src/Cheapskate-Types.html#Inline",
        "fct-type": "function",
        "title": "RawHtml"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "RawHtml",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Raw Html",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:SelfClosing",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "SelfClosing Text",
        "fct-source": "src/Cheapskate-Types.html#HtmlTagType",
        "fct-type": "function",
        "title": "SelfClosing"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "SelfClosing",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Self Closing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:SoftBreak",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "SoftBreak",
        "fct-source": "src/Cheapskate-Types.html#Inline",
        "fct-type": "function",
        "title": "SoftBreak"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "SoftBreak",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Soft Break",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Space",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "Space",
        "fct-source": "src/Cheapskate-Types.html#Inline",
        "fct-type": "function",
        "title": "Space"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "Space",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Space",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Str",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "Str Text",
        "fct-source": "src/Cheapskate-Types.html#Inline",
        "fct-type": "function",
        "title": "Str"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "Str",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Strong",
      "description": {
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "Strong Inlines",
        "fct-source": "src/Cheapskate-Types.html#Inline",
        "fct-type": "function",
        "title": "Strong"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "Strong",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Strong",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:allowRawHtml",
      "description": {
        "fct-descr": "\u003cp\u003eAllow raw HTML (if false it gets escaped)\n\u003c/p\u003e",
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "Bool",
        "fct-source": "src/Cheapskate-Types.html#Options",
        "fct-type": "function",
        "title": "allowRawHtml"
      },
      "index": {
        "description": "Allow raw HTML if false it gets escaped",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "allowRawHtml",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Raw Html",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:codeInfo",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "Text",
        "fct-source": "src/Cheapskate-Types.html#CodeAttr",
        "fct-type": "function",
        "title": "codeInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "codeInfo",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:codeLang",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "Text",
        "fct-source": "src/Cheapskate-Types.html#CodeAttr",
        "fct-type": "function",
        "title": "codeLang"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "codeLang",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Lang",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:debug",
      "description": {
        "fct-descr": "\u003cp\u003ePrint container structure for debugging\n\u003c/p\u003e",
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "Bool",
        "fct-source": "src/Cheapskate-Types.html#Options",
        "fct-type": "function",
        "title": "debug"
      },
      "index": {
        "description": "Print container structure for debugging",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "debug",
        "normalized": "",
        "package": "cheapskate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:preserveHardBreaks",
      "description": {
        "fct-descr": "\u003cp\u003ePreserve hard line breaks in the source\n\u003c/p\u003e",
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "Bool",
        "fct-source": "src/Cheapskate-Types.html#Options",
        "fct-type": "function",
        "title": "preserveHardBreaks"
      },
      "index": {
        "description": "Preserve hard line breaks in the source",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "preserveHardBreaks",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Hard Breaks",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:sanitize",
      "description": {
        "fct-descr": "\u003cp\u003eSanitize raw HTML, link/image attributes\n\u003c/p\u003e",
        "fct-module": "Cheapskate.Types",
        "fct-package": "cheapskate",
        "fct-signature": "Bool",
        "fct-source": "src/Cheapskate-Types.html#Options",
        "fct-type": "function",
        "title": "sanitize"
      },
      "index": {
        "description": "Sanitize raw HTML link image attributes",
        "hierarchy": "Cheapskate Types",
        "module": "Cheapskate.Types",
        "name": "sanitize",
        "normalized": "",
        "package": "cheapskate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate.html#",
      "description": {
        "fct-module": "Cheapskate",
        "fct-package": "cheapskate",
        "fct-signature": "module",
        "fct-source": "src/Cheapskate.html",
        "fct-type": "module",
        "title": "Cheapskate"
      },
      "index": {
        "description": "",
        "hierarchy": "Cheapskate",
        "module": "Cheapskate",
        "name": "Cheapskate",
        "normalized": "",
        "package": "cheapskate",
        "partial": "Cheapskate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate.html#v:def",
      "description": {
        "fct-descr": "\u003cp\u003eThe default value for this type.\n\u003c/p\u003e",
        "fct-module": "Cheapskate",
        "fct-package": "cheapskate",
        "fct-signature": "a",
        "fct-type": "function",
        "title": "def"
      },
      "index": {
        "description": "The default value for this type",
        "hierarchy": "Cheapskate",
        "module": "Cheapskate",
        "name": "def",
        "normalized": "",
        "package": "cheapskate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate.html#v:markdown",
      "description": {
        "fct-descr": "\u003cp\u003eParses the input as a markdown document.  Note that \u003ccode\u003e\u003ca\u003eDoc\u003c/a\u003e\u003c/code\u003e is an instance\n of \u003ccode\u003eToMarkup\u003c/code\u003e, so the document can be converted to \u003ccode\u003eHtml\u003c/code\u003e using \u003ccode\u003etoHtml\u003c/code\u003e.\n A simple \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eHtml\u003c/code\u003e filter would be\n\u003c/p\u003e\u003cpre\u003e markdownToHtml :: Text -\u003e Html\n markdownToHtml = toHtml . markdown def\n\u003c/pre\u003e",
        "fct-module": "Cheapskate",
        "fct-package": "cheapskate",
        "fct-signature": "Options -\u003e Text -\u003e Doc",
        "fct-source": "src/Cheapskate-Parse.html#markdown",
        "fct-type": "function",
        "title": "markdown"
      },
      "index": {
        "description": "Parses the input as markdown document Note that Doc is an instance of ToMarkup so the document can be converted to Html using toHtml simple Text to Html filter would be markdownToHtml Text Html markdownToHtml toHtml markdown def",
        "hierarchy": "Cheapskate",
        "module": "Cheapskate",
        "name": "markdown",
        "normalized": "Options-\u003eText-\u003eDoc",
        "package": "cheapskate",
        "partial": "",
        "signature": "Options-\u003eText-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate.html#v:walk",
      "description": {
        "fct-descr": "\u003cp\u003eApply a transformation bottom-up to every node of a parsed document.\n This can be used, for example, to transform specially marked code blocks\n to highlighted code or images.  Here is a simple example that promotes\n the levels of headers:\n\u003c/p\u003e\u003cpre\u003e promoteHeaders :: Doc -\u003e Doc\n promoteHeaders = walk promoteHeader\n   where promoteHeader (Header n ils) = Header (n+1) ils\n         promoteHeader x              = x\n\u003c/pre\u003e",
        "fct-module": "Cheapskate",
        "fct-package": "cheapskate",
        "fct-signature": "(a -\u003e a) -\u003e b -\u003e b",
        "fct-source": "src/Cheapskate.html#walk",
        "fct-type": "function",
        "title": "walk"
      },
      "index": {
        "description": "Apply transformation bottom-up to every node of parsed document This can be used for example to transform specially marked code blocks to highlighted code or images Here is simple example that promotes the levels of headers promoteHeaders Doc Doc promoteHeaders walk promoteHeader where promoteHeader Header ils Header ils promoteHeader",
        "hierarchy": "Cheapskate",
        "module": "Cheapskate",
        "name": "walk",
        "normalized": "(a-\u003ea)-\u003eb-\u003eb",
        "package": "cheapskate",
        "partial": "",
        "signature": "(a-\u003ea)-\u003eb-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate.html#v:walkM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic version of \u003ccode\u003e\u003ca\u003ewalk\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Cheapskate",
        "fct-package": "cheapskate",
        "fct-signature": "(a -\u003e m a) -\u003e b -\u003e m b",
        "fct-source": "src/Cheapskate.html#walkM",
        "fct-type": "function",
        "title": "walkM"
      },
      "index": {
        "description": "Monadic version of walk",
        "hierarchy": "Cheapskate",
        "module": "Cheapskate",
        "name": "walkM",
        "normalized": "(a-\u003eb a)-\u003ec-\u003eb c",
        "package": "cheapskate",
        "partial": "",
        "signature": "(a-\u003em a)-\u003eb-\u003em b"
      }
    }
  }
]